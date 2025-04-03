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
    "3YhLWWswh2xQCkcTLsK1pMPTC5kT8DYzdGk8qgnAq5dasWA6oVfZBTXkgenAZ7yUxnjwLV2mmw35j6EajS7aKEsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W3U6MDnj9wfgSJAeadRtZdvbRRc2PT9kq2MuZ2JHXiNzotAgzCHjwBw87b7dh1B3UmZnPaf2MAS1c9vNZuuuERs",
  "key1": "yPGqGhGNqGjbLYYRSsUxRanJe2Y5t1v1NZaGCvTYujjfvQfzbwBBFnpd35FegZ9E4dfkfQ6Fn1ySv6C9Bs4oLF5",
  "key2": "PS1HinGXuWP3oANKDjcvZcd3ZFfVvi5ooBmwbZxRb4JJRcTiLsK5NohhDoGXSMbdZBEzLn2Hxp98yVfakKcHLPY",
  "key3": "2GV5c4XdTGdC5zUU8uCUds3FHjYsFnebjmarh5YtbJnnFBGsoGKFzDqZ8J3zGM2eWZaAWAHvW6eC59x44iJ1NVkU",
  "key4": "61Cy2dFhC4N6i6PnCVy8YxkEJuzsp8d82NE7rSSFxDAMTFCmN63SPVPNnmUVK3PXPG8Mn6TgDzSBqgL7YvuMhEto",
  "key5": "5jCtb7aC7AWpHYTCKzjvgw4tzF1w7mSTTNGHSqwEGnq9jFjjHmKtgHFHaiWAMCc12vaRXE5gakPSbqYd7Crx2ZXm",
  "key6": "5xRzFkqKjNfzmdwkbMkvG4WjfGvWTq3asdrKtUGvojP4YGdZ9UQP8UjzCHnWj1cpbKppdaEQUSZ28P5vJL43uKbF",
  "key7": "5nE1yEymUiVJRu5WoYBSqzdxgPHHU5FXPDGjkHPsV8p2jLVEZJFx5GkHYo3QbLgzpzWx1D2x4U6HiZXaZvuEZtNV",
  "key8": "61DpYJsimbQqGy71aSDAASa8CDm4aErhoxLppew1NSDg24f5ngeNvybEuth6DmnWXm9goMUzCeuicn6Guat3xj94",
  "key9": "AfTrE3hD7qvSetSa4WHh8ZWWWtpdeA7N8MV5oDCM99HH3fN4tR98BdstjJGfrs2uJSFWMRbTUfFKSHEnssnpWkT",
  "key10": "4YUab69NMESrJkuSTLKdGPpZibAXfzavnvZYWwz84uZoC1ELm7RbdfoyimK42iA7SmMSVZck5kAvsDFY9Zd6LXmM",
  "key11": "y2H4o6xf6xBVhMs38M9HLoaTKSD6Vk6ipJtSGBWdhKdQk7zPnmrhd2LwqPNwdqU8e8gipWfEdtvQZnQLP7CszaD",
  "key12": "3tABqbDX6L4TA6aBnBjpCRdzY7cFLB56Dw3L7L83TTkLesbGJZSKbBD2GTB6edBEYfiBz4JsBSuma41EMHYLdwXK",
  "key13": "5kXdAx6Cwzm1NV98DGKXpReZQsAhXT6xawfVjD9HqCuhukWhaNhqH9USwAkTcWZd2H8QkVdFNvMg2i2Kbepymi7D",
  "key14": "tC5Gc7nGgxgbEd54bkX3FbCpQzMYSZiTSsssABhsnAP5i6U1NduvWi1zq1bKDzmov8kDn7XisZ8fq66pKXbTmVi",
  "key15": "hoPomYKSt7rCtFzwmYrSsPmRaKNt9dvmhP6Aj4nEHmAFFZJ5urTXBk6XwnakLvScgatdyWgs8fZJtb2fD4Jyz2Y",
  "key16": "2GPz39r6isfXvW3qmucvLCrG2WmTGz5KARcGrsb4bQaM6Djv3svhJnqU7wSxEyAgiPPA1vRtpRj5p5VXaW1mAA2E",
  "key17": "4x2YCC3QGezxYDoxDwzGHim3hwVG7LroxVMWknbZsr9uKcWhYXcSHwNrcpXGWFvTaeYvqfZVR7qBJ7q5vRkqMwn7",
  "key18": "3w8hBobWfrLbq4fsLt7QLxTwbZ1yLpbR4H7sU2qd2DQWx35xh7nmP81qubeou5ZRYhG9e4g7BiygGMtKR9JpdU5V",
  "key19": "2wdobQqBuVqcaTPAfako5nJcSJHrwBqBJVwXaX7rEPsyyyq1qXAY5zPYGF2GAKfSZBA4BQwrbCgzuiTrDpcjrWgz",
  "key20": "5b37pxD67UDvySbFP1DwDGuUARs7dD3RdWBLutDrH7n2ymaoysnPnK9W8fECQVAfseAZwNtFpmfSeEe6pA12U2c5",
  "key21": "4QUeo3Naix7Q8sK9PM3GM3jg5m1NZ2eS6MqKBm9Uph52BWbi7vKt5KoZFfnVBTaFURmLhEwzoxNULsjrKkLkbqb9",
  "key22": "5cBV7ZnSooNW58wXqM2sdLm93JgKPCqtxikUN2nKE92741dxorat1h99M2XxcR4KopxD7gj3SkfPwwMaT1HJkQDU",
  "key23": "5fuxpi245idCFaRoDFYzKFwEP1PqVTrHJJiU1zHSmc3rLYFW3w2cWZfhbjDVsAyCEySK7nQmEpbYmhtNf9chLLyE",
  "key24": "5Ayp8iGp6eXvdpgfafDjWgnVJm2sbWtZXREmDjupNooq4qCNcBQ2yXkXZgQiVWfkgqWqYuJjoPTqaUofwH8mrWKf",
  "key25": "3b3BLN74RrmKp3ftJKQ9nPTSmDxe4qHC1DAyURLxkSKqawu8hazs8UX1B63NUkprau8xomvm98Gg8rd1EDpiuNGm",
  "key26": "4P69hEE3pJjwFwUhCcqcNDpu54gJ86krW1m4J43Mfktm2vq1jZEdodxDe8C6L7TmpxqWmXmsHdtwVd5neEsUDiUU",
  "key27": "3K4LW4bbEh5JGsrpKRJR1hjwNMgKgaDidZ1eRwy3CCSkzWs8pT3AaaCvRz1WvkDZsDcCYPTiDCpWqon22SZqDsHT",
  "key28": "ryaW37oYvhe7AYmszktjgHqqVLhVmcpmkz4sSCioVCamV8WTDN24DomiHTXgcRtcJ352EDdZX4nVcJ74JyLE679",
  "key29": "aNftcUwcoY7TJXG1xZF3RCxzAq2CgCytoFzLJw1kbWAz3WNdbMuDo4vtnpN5nvkqa6J5dJrW9WHRT3SerUiv5df",
  "key30": "429ZQo5bU4ABAfWN7oL1N7vvRfgxtggLvwms31F1cq2AhFcXq9gYDvnbxGwVhbxJLmNC7gT1DQ85eewjFdiC9o31",
  "key31": "sBhs7BYnaPjobSQM2ouvDuHK6QVZbGQCDR76L6JVHmdqqd6ckRb4cW983NpRxivVbkbbd1xN59EsJ9GaAVpDKdU",
  "key32": "3cPvtVqZNRDSA35XUDdiXCVRZCVCxCLjpmxo2dmfxhvxcs5q5JRe4BKMr7CwGzzzrvPeavCYK2Ra29STgrhvUD5J",
  "key33": "4ATkgwCcMnUGmJWjCEuPKuVfdyKAkRANwPJwc4iUtZPuwFLvzKUnHihhS7FR2zLjk8uXQBxe7KSaeeshPSgaUSyS",
  "key34": "4uqEQafP4isVLmuuVdGbs1L2itbK5hNmn8wXkyjZpwFxc1KNAH74j3xBbYwBXo4zvPahC2BNe117Hrn1669R2ZaK",
  "key35": "3vtfHnNWxXND9KrrvJoTBwVfHLzAYtYd8L16L8pd2d9PHyNLbvB34fT1Dry1CrPztCqauwk9gcZbNGWeCTcNxPJw",
  "key36": "49usSpZ6fLqp2t22CaBhUr4SX3NwFVcBHfcNmk4E5NeJBfX1v9ueHLGt2jidtd17xcMTinz3gA3qVHqjLk3M37QV",
  "key37": "5R8K4JhozNpovzW2NhZopAwjPff3LGCgxaYBZbYj7U5xdT1EwwaAD5TKtW7DYfTfMyeUSWsAQsXarns18n4YvfUo",
  "key38": "2p4zFYcB2Lqudgqn2wuVFj2imLX2Vj85TNcg6WBxYhnwq4TrG3STUhX6HC4aAZFoWKBsjXcJFyYe8qrTCUPkXxuK",
  "key39": "2D4wUQ6dWdxYXxRsQB9MAsm5KXZu3NjadBRyios7sNDwbbXNGHtDHcz5gnSuEieDRVD9y3uNy7asyKFUbtnm1pqn",
  "key40": "3zEkZBFgSXkQaC5BdtaDQzfdbMw4xRpJgCKPoiV1Xt81qioLcStLB7Xm6fMT97LKAuu1YdSP48UYTMzyq4ZxC7GA",
  "key41": "21gfMEzuueXz654uTzpQ32TgMF13c2o27VF1ZstFRFc6WQgmN439LqeQxUCtQvmA6KQHE7Uo4aNjzCh3Tw5Mxv1E",
  "key42": "2avVCQoJh61RyHXQBgzkBPEJSufirtD6V9NhWzwFXQRNSBMdReMBnshWZDpAXtiLBHiF5khCEbDi9kreBpECashn",
  "key43": "3FtnuTmgk6RAnYXbr2hHjK4sT45tJ8FH1GJq4SxK9t1PhuTA83JsNQupNn5uF9sKW6ARZe9zrnmdYn7eXZtEmtGy",
  "key44": "5iuB8f6MD9fCuSqv7pRyECsaHFS4wh91CDU1ukjN7mEs3mA45CkkcwnF2tybF1JkgiWu5kBjNPZJ3Zbf9zFEzRqp",
  "key45": "MHJWCnPKW8uhZ6LhbLZiAf87FKzD3baK5MnubjJvZnLiB1j743uHYXybCMxBT48CuGoeZfLos1mkAfHVAozn4D2",
  "key46": "3VD2E1Fb5r2hgqgGHnZcxJzufnjtEDGyzAiZWvkf6bkw3W1GYZLbYUXWtthXCNyoqN8V53AyKWXqnejLatSzArTn",
  "key47": "29WoBVtYev6Mv7PYFXpreBkUXZGhfBYVcbH3oasUXFmT77YfseBWdtdJtdr3Gjqc6TQkGooaWfuWgVSgdJLY3JdG",
  "key48": "38s8Fo86yY6Tr7c8jWiRD3SoXbAQsqhoXYjSzzZXyiptCBjRguenUemtWEumb52vsozuta8PkweBf6dLSE4ieKYw"
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
