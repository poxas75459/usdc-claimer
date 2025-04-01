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
    "cusGPQ7d6GDvuzzCshbdWaMzgujjhty2L7MJyViVEAjYmpA9tPHdnCMSM8Qkkas2t3xva9GfrNMAXzffHcvR7D8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQbXuP6FD9gRRwwGBAkExUhAgqLWz7SEgqqkF6Y8gU1sU7fUG4sdzpTWGQ3SEZaeFiTdrD828p37Te1qSb1jPHY",
  "key1": "4P386WAN17MWxjmMGnrzaw35zTiyvo8bHRKfQBGmTGbjSxRoRWBsBGPsz6KQr8AdJng5CPgUmt9jNySiGxvsRG6f",
  "key2": "4HaUcKCmL8ezyWv7kXm5dppRnGqCSyomG3aYZrRsP1ctSCtgyxB9vgrCTKwXjQTrpUfWwPGbCtHnBvxoxMQi8HxW",
  "key3": "4xiYQpYne7mZp6XZrfoFWvaJ37V6nDu25YcLoqwS4MSdos9Fca3iXxgJBv29Z6YgeMdtyUQWsuSJuT6ENnaa3oEP",
  "key4": "4HdtHXoYKc8j8dZWapxj3hwX2KfPMJ9qawxdsQK2R9PwgKnaWfHctjwtHyaYRsivxKzenqQfp3Kba1EAy8Hv9pyt",
  "key5": "8zpahdMVfbsytXDTHnGFPfdK2VJ4LNxPdCMfePV3fZCoyAak4QxvQ95yKd667PVeerSV3MjVzxM3TiMjmRtq3vh",
  "key6": "Kk3QAQK3hbrYRbP3aKYDgpmBCxgevytn1Ddh2UBirhapdTaUgTB8sKtHn3LGgUYMjBzK2HvUFmX8rDgZknESGQV",
  "key7": "3XtnceRYunc1aPXVwNiswWWjm8rE2vXeKNEwBEFHeq4Z5dcJimUmVZwGxH8igmiXrqvx5BB5HBwbpgTEvSrRBTh2",
  "key8": "5eVdwGtnQwfMNY7c7HMYDL7s2DMH4vWBMVMh9LGQUtE9yEDnBSGYo4DFds6kkXy3fC3KfxQ8fKGAngmR9SctqxyZ",
  "key9": "2pL6WKKyCsZKZTgHTTV3bLXFbVt8hYbLAf9Hhbmqc1wKi7oiny2Cg8PTSxiwuN5sySBDCeQNMYrAP2exSDe8n8gm",
  "key10": "2Fjjfu9S7bDgJPLeKYqgcZEq4Ys8wnMgcaSr46z66jDWiaP1yVabu6Vwqw4Mb6SWv6aD6mR7WPZhwzRYV3U4y6Dd",
  "key11": "29PtYn7EVhthXM4uZKS9HpsKqSXbQcL94Rx8qn7hEk4Hrt9usjXGpF9uayd4GRnrbsBAEBsw67W1PvU2xbrR5oay",
  "key12": "MRaP7HJfU1eK9KDdWedcueXUbp7BFwApAXzAQfhSD57ctGWaWohTrfEBacHY6GwdkPMjEAwoaScsacaZGDznkiG",
  "key13": "K4zDKB7H9NxrsS7a3v1E3EZMrocbiq8gWvAJ7DtVVngebNSjWq815p7QGXfNeCXQyU1unuqrUswdLH2u9TggsED",
  "key14": "4AwkGLZ5hk2zxSwJsEH9k4HABu1eTgPa6PkQht5fqQyaG4Z4gk8JFivt5Lx3UGtVyHGwHTkBU2Vtr1PAaMYWRUUs",
  "key15": "JhNAvSvfwqzRnTjTzh9pZ8cTe8heoXUtXHzL2Huebhgcyw55yXJvZaFQtcK4FibvnUhwCDSDZqAvZQhRqDq9Xmg",
  "key16": "5r6nxWSvtsoZh5sy6mHBZxdzK59aL1pP2yqDLTo1W5AWYsjqnyR7PPrzkvWnyGALRr3h9Vds16M296HbTsQ1sy9w",
  "key17": "35ZATwaDLcuYZnQNEBacRfnuUxat18WdD7JbqdiLFuL1HgY4D8dosgtZidAcUcCvWf9xVxXZHbkh5Jei8WRPKVmT",
  "key18": "4mMV99CFmqtQXw2SHuUMgNuPUCNUba5ARq4y9a15FkohwUzinzR9EQfhJwMmPajEMeh4BRnK5ZqdnUMQkfg5y4Yq",
  "key19": "2jSPyViNWJT4E8T2avmzr5mP2oENzieCgWbSzruLi6WV686fkKhrdB4R195xziSbXaKEPQuLZDhkVk8Z1a2dGBTo",
  "key20": "3AnwokxUcBYDj1XZuUp9qVd2AFhLr4fCpVRBLTu5ssoUJxukHSqXtyiTvbsoyGML5qsbvmCQqnUwDvAPibWDMmB6",
  "key21": "3GAYniC4fQDK1wTm4d2ibxEj9cdiihocZ5QgYS3mZFQ3HwmQ7w7fLQqzs1CCz2KZsJJWAEurYy1XZGqR3j3DLaf5",
  "key22": "5xZmj2vzvhMt6TTh3e5hxjJ3nHHGU5XkERqKEAyux8A5fuDWsGkQZ7Y6AzcCAATxA7xhdXzUeeDRTX9Jkr31E1ZF",
  "key23": "yKsGrSN8aYdcBhrFfDdjfa7wdaWunsd6UDnhgNp6WhkhPEVdmadzUrFPH4zEjgFYYHhcfGfBzKyYvEueJEzht6E",
  "key24": "2Tgyi4uV8bXS3rDnBvV8omFkS5rNR99SnttHxDYFwmb6VW8sXWZXD383cm2PNCk8epvi8yTERyzf3ykrh5KeFcXh",
  "key25": "3Pgxk4q5vXHVsspYTrnGgMdpKgW1M2Tj9wqZZnpZRCX7mAhSxTh7UtAbnpgc398iUveBWZ4T4yCJTxDeRrwmWgLd",
  "key26": "4NvFbES57Wzj2MWDvn5kx9CNoohNkbPk1rrEv2DKZHQd5MqxJLEuw6c4ji45GqCkNodXv2fy1iJyjJif1JHmh5z6",
  "key27": "3tJb1B4rY58qXEg27BfZ2EC8zZy6V4LezorPGwror2uYC9M3bowQL3X4iehHP1N4auPp2T5KPZchH12rjd8d1NZw",
  "key28": "2T2UGdsUCiWs6HVWxggnqSRvmtDhFa9TcApW2YXu5FBCppJpPFZ8FnM757okD9DLqbdihixVyB6tvcbWdK6Fo1i",
  "key29": "UgXsHr5rv97SwY1v7RFYs675y8hZSgBbWV9y39Aw8dSS3p8Dy9AvHHDVJD1Hag7Wh5L3tPqEDS5YjECydhQLwjB",
  "key30": "e9Qs2PLJMhALuSkA2km555XitUxzYetRd45GVQXQifUbdmJA7KnM9UE3WSBeeq1V8gqDKYPdfm2i3XyZ8Z9AvdT",
  "key31": "2hMwngdgRz4xMRSdje9CVhp8he1DmjwsLWvWujeGYdYLQffEYFhCk33JwCmN2pgGwBqB4ZyWYF7qPFrYHqUg4Nbk",
  "key32": "398uNWcnXztDZGDSbDcWyqD4iMGB6JL6rSKL7ortd2yHsJUpw9Atxiipc2DtsagCUKb2TRwHgm3qM1bMe793oLgE",
  "key33": "5BkMGxy8RE7WQUowjLuE5r4TSRDE2W2vCW36CqwZuNXJH1kVeKQdQTpGhx4PeSkMzwDMxJJCsCPEKvoQzbzn2x5t",
  "key34": "3Nvqi4sFspTYNbqr3EZCpCG8oZA8aJt1wqnvpGRQ9LezyN8tAwdxXGfW3ZxF2kTGkDmxVwZGZRbNyQjQEBf9ocCr",
  "key35": "5N9akBaGxk2rwoMwhiZUTJ3GXB7B8AjjAkqjgbRJfBGF4Hoon9UrBzj6CtPLsqcU5zD5mDTzWMsXrhfJzZWYteRK",
  "key36": "5UsXgD88Vm47zSPC5KyD3KxkdexX9CSbFMq4ri13PANfB7UM5TMXiUAiTDpmZ622QLy6Z1EFrcmZkFjqsVYnAFPh",
  "key37": "ZCTVDx8SFhYAVjxoTXaJGFZjCsXXXYWMweg4h9Bq5wixzj5FuGp7YNGsuUvRjydXaUyjmfNAHKtk2JNQGDQtL6Z",
  "key38": "2NtrXYuTEbmJx7CY1pskdYD1DRKZNPJYn33bsyKq8kcNU7maoztZGFjkNbFa4o4trNKkdugk3NCgjz3dDb2gZMc9",
  "key39": "3PZn5MjyNUBsFc1oCQq8bFpwyQansdXFzJ54MZBWzKZmh6q3pHJ7yCW82T8zMKsF84yc16cWuXGErFcU2npTSD7b"
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
