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
    "4QW4J5AAaJK93fUYsYc3cHSLR18LGHrs6EA1pfhpvvF4LTwSYsNNT1k6AV3Nt7SU8a9xRa2X6dFKaqNb2L2HgxVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3xr2J7L1vcb3nEQBaS8z48EPNG8Gvey14rm4Mt3qnjZfEgzeRh95d7WPVAUcA9Z6ACmzAFd2i9tuxSmcbaUP4k",
  "key1": "4pD3C2VRd2QNzMFDKksmYL3qiynaaHKRziTCiBjxSxHuUrvx6rnMNbh3y9eu2VZHJepCRdhSQ7C6Cx2tVnuUBp48",
  "key2": "2Wb9gqGM2oYCL5CPCaDcbEV9Mp8jU9h19i2iuAcgngrDFefMofMa1bUvJHvquusNFg1UWhKH6sfnWNAfrvv177Fu",
  "key3": "5DtbmWHDMegpxnfFBAHxZ8CC1XVj5bGJqM2N7oEnovhA6J2CbVP7kLG1fsQQKLA1ju4jNFGPrRMT77Ls5Lcs63cG",
  "key4": "BtR1JMZYqqDLS68BvL5dUUTwKV7gSvwUUdjGH9EcxEAtu5ibu9wP15rwwhoGEziekHweoqKm9yupw4JFzG2xLHn",
  "key5": "5Qdnu8bcoLK739xR1AA5Wi6V19LzWXMfGCShrxPYrPfjKkLAxRhmFjFrv8g2wkjrSBpMJnyJreecGtvQk6e7HTc3",
  "key6": "5HgcMt2CMwBVdH5sSYwAHPEhAwe4Cr4yFAi29RrTYTLkvqY81fzTvTEPo525AQibkjMG46qNTu3WaimZZxH2Zy2S",
  "key7": "xDVfPxTJZCiRrzUGQxxSZJ7tqK56bianrXdHK6o5BuJV672HMKMYVyyyB2iv62T7BrNywGLQNYyvdskLyysM5SH",
  "key8": "SJ3cPTHdmSi1Pmk8PnQcQUMPGt3zTpt66Vf4kXBPLZSxMjfp91vbRYgU81yDm4uJ2wfoweoskkk6XyawDttqV37",
  "key9": "4qTTetGbh4oi8cYMXFfbBT39m6x4BhPRgPwwyAGaUw74iHU64yYKXM3qiAh8WZ2dr3nnHN6XNtHcgt2vtuqURahm",
  "key10": "jQ5qYEvfdADomNptDQFBRzBa6tgktvptLgTtdUTencnKCnuLXm9GmVcq4WufJ5AAXPG9NHacNrjWPpPobbpDDvZ",
  "key11": "2cfPWKsPDJrjn3NoW8hAZ15ktHz4XwjBpy55Nk77dVTYMg6dFAqrLFc792bFALnh77gZLiB9a6mNGgMafh2eUA9L",
  "key12": "Vn1W7mA6m77mqzCPrVAa98TPRoGebLxf1Khs9iYceY5zGfbyTsRofAJwGD3Rum3GqjN6bWyKXL9bBj33ga7vyDX",
  "key13": "48PtK6BDUeW8FTgMP5eKjczfk2pkTXYB4f7dUebLC9L3ZzLmjnMjcCfVj6N7EtkRieT5cz4WhKDhxdgrETXETbGW",
  "key14": "5H7XjABL9PConC8Wxtjv2ih5RS75jXoN6venjV72majmmV16LhZRWEQQfP6e7A9tcTr6hLoJmnSLpGqVEw4yhw55",
  "key15": "4B4suS5tmtj5UfbptdMiuZgxRrUj2ujChwcLp3KcAdpJuZScNhJhTt2P5zmxK6AT7C3ytE42kDtcHJEcszzLEiAd",
  "key16": "yAUQp4StgLz9wFS7srAxxrvJ3bqYTzBWADawr9iMs1dyziGLFDeSnfcGFv28J4Ckmf21AE7wEwL2NMdizFmXKeC",
  "key17": "66j1ChCgqnmAnCBsvJUhzaAqpdzXFQMq4BAc65UZ6chwSP9GunDGrDKWtZqGvbEipJqJ1jGaBfYQhgcNAJzmFRFN",
  "key18": "VqXBKAwzYSMvr2CigfsvdJLjvLbi74RjiTpq9ty2nH2vwPJZYqMhCj9ubCKMkztjbN2KBAtTXgkmT43aiAkqVhQ",
  "key19": "5AbwWTEc3p7sv39VibFkQLqpVX8K643yDSYT2sHNdcdz1Aid5DyKjQLtBxh9XKJC4a63yD8BRZWXcQYJKBeQEiSh",
  "key20": "3p39W3u9tAoELFpqkyJbXcsKZY4TJy7QnqUanXNVrToUZZukbhcqEgDPhLF99PxdqW3nygTjk3CUVzsSCSMTJDZb",
  "key21": "4YEd2CqrSGQYLiUAuSnkMwQRxwXhaVhE9vqhusrbU18TKfPDFJacizP7jqZYkKuNygVnTShXfcbgyyvVxiMQbNNp",
  "key22": "54aSxPwfzUWRN3gPfydCiXPtzcTV61tM7AhTR1sBH19TBvR7MYupHf6YQMGFqZVBGRcq8zsi4DPw1VY4mfQbX8nB",
  "key23": "248NksNY9cnen5eUqd6wYnYN96Vm4yXrMDdEP5WqSEjNtRve5Y19879a9tr4kAuSofKu29ryemCaqTHjPLCb5pKX",
  "key24": "4E8AFDN7u6utp1CDvu9Qe5xok3aPsPeaNocUsW2A9XwE8x1rFy7sNij1TcyE4yQwsnWbido5aaj2ttSaWJUQEmS4",
  "key25": "5YLCDzgN9g8RsYUmPfAnowFtvGWs5cT6ENRgapNAjacM3AGUtcbFYFEJFHuezxgjyqnFya18Tm1PcFcZJq93vwKm",
  "key26": "3p2Quf8yKJFR8iEVJX7dLyG2wpuahikVzNinvkoYhDyGfYBLRABVNnrXYXsXJx48tUw4tdnfm2Pnn8cAmGVfm4k6",
  "key27": "5R7CaAcrm5bzXmZ5DhnRyR4MbN7YHnriEhkF3VkWdBDZq3yoBSeUrA1Nuse9yzu7ndtsfpDG9sEddpmSw647gZyT",
  "key28": "4XNx3BWs3sAkwMgy31k7R3BiX8HwBoKzNvxaXX5V4dBLhjFBbWJ8Qp6mQfAFKzzxmqNZK6JrQbSnYLHM58TDjT51",
  "key29": "24fJF3CF9Xwipn7JSxZphyB7fkhdcAqNgzU6BdaCVzC4tZZP7MPyArfV9Y7EeUYVpvhC5TvvauzajtW39zM8NqP3",
  "key30": "2Vp9vVx1JbNBVH4PKrYrxxSE4BR4p8dwPmfHFF5S4zMjW21CaJ6BtAsizaz6vmgjDtGt9bBDDzkpDiZuGAAjBZCe",
  "key31": "3j9eVMmEYL7iybDysNHvKEZErfHwUdNw6qdqP2JFJZX3fXMmY4KVB6qjURaHLirQZm3Js9pc5Rid7GJva3EHQjCb",
  "key32": "29Hgmb86ZVfG1f514zya9qp2cpqBcGzVi3g3vF4YsVKuNg75yCJiUafVjKRieicuhCUUuogAspQZQ2DyZpbbdAv9",
  "key33": "4tAcyPAYacTXfdMNYHMa7ChJsVhgjX5UHMFokaqn6Nqx8taPjAsDo6doDZugBHVvBdW7Eh2XYMW4SYhb167wKRLm",
  "key34": "364tKqpAiWBqmL2sjbxPVjLhmLboibZZRPrh2hgSZRGby7EwZTVX9N9PG16nLrEbYbf4CAEYrE7VQgfBcH6F7JVF",
  "key35": "5kdiqCJAxBeY8TBFuGAMNi9iZLsFjSsPs4XBzGDXuN4nqxy87dPdVvB7Yg2ZXR4XVGGJppa7veX9V91Q9kCr2Kns",
  "key36": "5xkoCZe47Xx1fUg4CKU7YQEJqW7a1mrwxSbAgswJYJMXsqHEuQGNi4Q6Phi6pqPJTqbewGsniMRMhV9XUd3zmYcB",
  "key37": "28Fskb5AY9YZ9r1jkBf6xzSKhekXetALLXy6c5W29enLNWL7WaB4o3hpsRBNGJK7EWXjGZ4etgAXL5yoH5qi4oYH",
  "key38": "4nHvT8yjJzC8HV7rXKxBCRNZkScLLz31R5JdaUMJ6ePDRUCvvEcxkGX7ANsBTNKDzgm7PCU1NEmBuVqN3GAo5z5H",
  "key39": "2DamA3eRFZb6v6q4B4t7fd39Cuxj387PC6ntyruvDBLdZNwRfzvhANEtMuoe7nSzsuLMkGNdZxqJAJ7Vfs2WVhJj",
  "key40": "FPQJ1GznTLNRS2Be1ZNpwM4faWU248fG9BuLeBAvVRAyxUiVgQUEjB42fveKBfnUPPTDC8HDEbsmKQxoRXftF5T",
  "key41": "5JnfzzvAmRbL38bGrTb9WA44L2MQnm2SnUKpuQAzhv5vTxrHwidXikhxshR4KdRicmngipWQY2RHFrDYtUKUCZRC",
  "key42": "4goYEPoFEMupq5JBoUborURQG8vxMn9WV7gmZ5utn2Tyiads3QXSxQNwDjLaitEubwQNiHHp1p3enfFJntZAx4Jg",
  "key43": "2Gg29gMhfHS3JDC3wef8piWujhupuubzXEXHVETYeqkdGZjcjk6L8gqVQVjE11fTwcFHGhFxR1aLWBzm5yzz99dv",
  "key44": "55CBwZanpyQkYALjByHNWhigni7mk8qLnn3YzH44uouZc2TwgSdDJCmpSe8TTuUF9ho2dqZRnaA5N6462xsYsFYx"
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
