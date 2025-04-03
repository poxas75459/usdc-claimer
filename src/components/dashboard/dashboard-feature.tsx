/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4VQQxEAaiZ1oqsZfeshtS8XCP5GuiGy9DkKzqSXS72yQrzqUBEAnKaEdXqEeQ2BsZALBgAjRtJoGYcvTN4RE7o2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b4ys3jVfkb3bsiLJ6NNKsMFyQA35R7A7Xbg3YvoaEq9MoBuZMeSF5BzeEss16feB9gGcf7gvDWk7w7iFtoBnLsz",
  "key1": "4nh3wYadNGxcELfFSeqcULUgdSmFZT5AXrtR7tdV79cVXZYQZzD8gXNzdFtiYxz2hJSUCaEptGqCzS7rgcAPhrwX",
  "key2": "4pGTXnFr2aTXrVEopodxphRcYfwKuN73nqwwGK76nfWawN6YoQxcX6jPz3qKtZ4x7YVKMnbzYUFdcdJgVa72XTdQ",
  "key3": "2u27izxrJe3BCzjLZnSRpKZUzJFYxBX27wS6EVUHqH1ox21TVL6MuNwiGhHTftwXTp7JvB2BDMVqyDZ9bJskGVuA",
  "key4": "2nCdRnhcmBAX5kNoSzz1BpC8RRjvfegRi1kDkEwwoLrKsfG9dvUTNYX1XSzhG5jizL64uSx1KHuQxpEyfGg2jBCh",
  "key5": "3osBwRKZUY4q35Lb6ZD2aSiogD7rSdxZ6Lto3Etc7nA31LadDHAFxRyKwA6KbjCi5X2EXkyMgnSUM2HoTUy9FjKt",
  "key6": "3ZnVzgQJGJhGopyYcUERzFfoa8fA21jqwxEccu64dLptm9CfBJF7Zx4ufR1J53B3hVkttbivpoJ1G2fNyha6EyyL",
  "key7": "3du8ZHEPbkNFaG7nJ8QZPj9Qxe2qoZ4AkEwfnKwyjpAEgpWSPboHqf9cKH5Svtko9u7kAho6wrzdbSSbqjyg16Ci",
  "key8": "2MntzwWZE45oCoTPVKTxxxwFmr9dxHytG9jJtqkcTFcrRnZaesRUpNnRayEs4ESUFjbRTrDxB9zv3RZ5MCra2Vjj",
  "key9": "5HDkCv6ZkFRvVSsF5DLDnL4y5XDaPKvh6fvdZhmr4zhzCUoF5mFrqQjBXnk5XpxtauKdMDbesne7kMAdtPJbdZj6",
  "key10": "47zP8AiFvoMGoYoK2J2n6SJpPqrXu66tSbeFjY73GEunfayzMsufZXFmurLxt7EinxjKJyrKjNSXVUa2wfYpZ83e",
  "key11": "4LhAAvjFv1x3QeQvRYMh3gB8ohoYRq9CvJfqKWv23VnU62kxUJXRiR9Ess9cSabXNZA7yCCZkiFGiBLmagskgDJy",
  "key12": "4srMCywn4YGpGBWaoX7pPNQHy89cbqqwffAJq74ZH4ZLysdqBXwCk2L75m3FDqgc7oTt2tLKaEKQBMFDg2cHRDjT",
  "key13": "2Q6Fp1HEiRjLRZw4iGVYYmqRznjKBrsD8feoo1phvurTASR3SvPQxcME29ZJghndnMzvjtqwLxouZqYsdeMho6As",
  "key14": "3gL9qCdyMMc6eaGHkRZmZQXuHvXfzCFuVhAis4YuHkYw2Xp1p2P2yjq4Q6J7wKh1jdMFxdjPVwT8MKrUihTYk8bd",
  "key15": "3QvkBwJRC65tYjfzYJ4kfVnUGz7z6KAbR9vqYqdBeurXjdgVZHnaPRkcj4L4rog7w95DbifUZ832WXiNd3HU5x8z",
  "key16": "4pYK41worsGeTfAEZQdazWo1GJQfhY8nezXne2zKfLP2vFFDkhEVobT2qMYdjwngo9in1dKS9UUkBBPhLc1GxTdC",
  "key17": "2Kt34RT1pvyTQjnvhPGHRoNv7D9QiE8Pdefo8ue9MbuBY93BQbfrqGZMSGXranx4tL1789FBdUDMWkwgGmXow7Ta",
  "key18": "5QhmkUoPk37LcgsKyTHEfu7vwPmNv6Rh3SGNY5bwA57AyJrg2bP2kQ8roNDzkwLkHdzZdDF8ng4tY3LgzCAzcoW1",
  "key19": "4xCrTYWfKdAHArN2jk3YSM1oWZ8U7QcixY8gEEYPednjpo3V1pazvkJ2K7DR4heQaM8Z4Z8RM8xvGi6b92Cwng78",
  "key20": "3FabTYk3WTYmqveL4ijPiAuzwrbcK514h5NmHnT62g1FLmPiN37JFB1CUzxwDEWVCgoGi5XBWxfbmtoEF4TH97zq",
  "key21": "2XegS1qWSz7fDEcMJ1uLVqeHmMGBaA3LqbDZTehZuUwfTZxbF1ZZWdupzb3mHLbKbXNKGXDMsxUZp7vrFpmL7N25",
  "key22": "2ebdTXXTQerHsSmvHDufTKqX9BAeh8UHNKx8pBkbHPSndNdUuKd21hvMTz911eb7WBrYxbsQ7WVkMtLwyN1XHSWJ",
  "key23": "2HE4XYSEMhMXczjctgtpfXsrRivkFM7D4vXS1gJvQCMkD2Z3SWj1q7XnD5dvMWf3Q3mroEeFVKF9HzBt2UfhM2CD",
  "key24": "4pR8Cmz9SbucFXYUC1wEjws4UAxqPiLtxXXQpvWUTChtqp1Xqhv5SCWnX3ZBAzZo2suQjGYomcCS5j96yF4J8Bfr",
  "key25": "2kXQ5BWwPrtF2nSpqXHQx6iQMJ8CsM8UxsPHiwAzpG9KYoMTSodUSwinS4iH1jK8qNVw2tMN2D55cJFci6HiwU5z",
  "key26": "4YNpFUj5EaGrQx2YRCGi4tkPat4fMh4zVPnMMJg8cBjDRHeqkWbyoMnNkX6saoPPQyBkgKJXJDPCjkvDJwtSPU28",
  "key27": "5TEJYiAN9636nRnVESxCddtws3e3dhUjDhkC8WPF4Cxb7Kp27CN5YGwmSFLKBUdwCdTzue2idz7mYPeGyUBUmiBC",
  "key28": "23EwXcDYbA9XzzZMLcLP7RCBJdpCKTofiLjQ5uvgp1Wo1Vo5GU7PTGs9cErykrpP58MNydiT5H5XNvULyR41xQJG",
  "key29": "5wtgeYBsKvrx5XgLoJcSUBqgu79zW7WJz1TpPPbMcfcMBB6j1ZHtGZKLC81rWx7Sx1VYbDK7MMqk53Z5S478kLod",
  "key30": "aJqsSmaqSjajwrCmtHYQzQc6cbYNRq2855bF1z1B36hb5ZH3AoBUeknJT9MU6d4gWoHDCQrqKwPcxiCtR96cbxf",
  "key31": "DnJ5kAPF46SwQBikUJ16818A2JWwCyJNFGymoij4V75PMLiE7XGWuwXDAbDnuy2EdM3xNVyxSikAYfjXsQq5DYk",
  "key32": "5hHKAJvKb6bjAFF6vqhhjo3aiJcLsN6CKTSbJU32bYggbBwdsviCeeoAT7nFL839bs5DvMz3yaGWaekJz6BPty1c",
  "key33": "362JGBkViMf52bmmvgCbpyZ1mMGHAdEvRQTUt6AGKiJkFC7Edh7MzTYq7sEdkKFC6kkwdHJrJACZt6mvPVboMECr",
  "key34": "3NzAkFQkAj1QUckrtNWgcunGd2byjRnn9yny622Pp47Cyuv8uxaUr7ACKunXcQM12Y1JSqHjoBztzcmZN9YjW5de",
  "key35": "5nKjWiXKWWEcG59WZQP1GvweebAaWka6Vdu4Esf4Y6jwy22bqZwBf8yXtCatZmfyM8xvadhUchhyVvAjXDRRRiyj",
  "key36": "MQDgzBViJnei7SaBuoPFVy5aGhupqrpgzsGuU3vVxtS5PkZ37D8tC5PS92rxAYjp4NjdtVWtH9etyVk74vS1EX5",
  "key37": "3t4KY2BAVDaenkxKGGYomgLUuNfHZgMHPfrv73bqissPe1U5D74W7dPAkX38YkzbHHwUvuRCWce4U9qM5iB5K6wj",
  "key38": "eSCFGUi9Ap96WYonHHNjKU6CVxGsQz1Lrp7VGjTwEnfoP2nUz3rjYFobNp4b16PTH2kq26SNJtVE6EcRRNc7mz1",
  "key39": "5p4v4Wc9t6C8xSeDkKgHxAbDkZhnr3Q8xjCRT477orKrhj3MjyDyHhEp5EvF77Su39rA4mcxVyjpv83VteEFK5eG",
  "key40": "B6BtDgPzy3ZpLk3VdRNYmeBchfyzEBbQpwn8fkjBZKrWc9Y9iZCrSj9d4gbtk3wDojUn3vZ1PNqkmKaZAErQy6r",
  "key41": "2p1QMW3WjWiXePBLbiFpmNtKSDFtKY48Wc7AxBDK7JDrPvv43LC2AEAhDnSvxUrjezqr7nRgUqgrNKssuQE2vrp7",
  "key42": "5BA7FZ1R8nSH2BKrcBWYo34k4kbaea46vCreTXiEReqAtg1NYMuY159sZuvvzDXUSV7Ac8UZ7Mf5q3GLj4C8fJ6e",
  "key43": "4Zqx7bzRhmmW3SvhwtWQSxy4PjPqvsL9JbHnPW1YYuV7hnZtoq9mWGvjVGmhD6jvJvfTm6he2MVtitY7x5cYNaz7",
  "key44": "2u4RiY5MsNBHCzxospdZHjW1NDnLwBTJtyaE5GEicErmJh2H3Xjomf2ZxW5ofk6k1ocJ9D69k9jNJem8LHB3tRX6",
  "key45": "5UbHjGR31Y6FcVKXczXCEPaTFjdtTiTjnBDpx6UnmdHQmudhAzLU6H9eLuoJt7Y6YTefTF9NTbnrU92i1C3hdm5S",
  "key46": "da7UZnRGgKxK1xbCqQeyQkqcAXUUvm6QraALFoMkf8X2rm37ug4AcC9irvNPQxgb8BBYcjTPiDS2ZAgotSXfwGK",
  "key47": "5Lxd8Yt2PwLPQUFeucTsjZKJHSbmGx2Drrcj3a6eRvHT5A4YYmozL8G9F9bLbiENaKASMnPD61Nq8vNbkPcTjssN"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
