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
    "4AHua6Ugx2ekoiV7hUn3cerkbUnFHk1Y7qG7UXZdcrmZxirfS3nHhHP5fW88KdQ8dLFK6YqbdZssYWFcZdDra869"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PPLDixGZyHJ3p1umyvR2uBXkMKUG5R2VvHdJF4nYFocDwkaZ1jthDN34HbRvpvU8qBWqBr7RUPVSUqUCXm6GQ2Y",
  "key1": "47Cm5KB7nCzVPXwGeWHmx1sQwNmVdVfrBwim5pcvwGXWbjfbWhagYVcShfqbm5M6JFZtYQbCLGAy6Xk1mF5oUQzi",
  "key2": "4XfuNoBH4Q5smP1tQ4xtrJ6Y1P7gFjJGNqYjup3BwfswAHcZAgbhuYXhehhYAwNEbhFfNtpBwVXyPKJbtg7oNnhF",
  "key3": "3hgj45j4qkaWLpYW1T5BdnPAUASpDTbNXcb6MRH4s7B1pT3tMFHu9XZy4s1JCiAh5fGDUztVU7xap1F1VUJam6q3",
  "key4": "16Jy5DwZzmq5vRnneBeg5xdYLT7GEkaakxxcWdnG5Zvvcs4oNEQKJ4JpCWe7H4gJqg3WEbfiUcCGaF3ktE26TsR",
  "key5": "5EuJFNw3aSPB9WttqdpWq2C1yxyNCWxFDt76Wou4i1g1h1vw4pPZwqbXQBACU5bcvj8mnUWmaozHnqXNnyNyH9eb",
  "key6": "5ZjbuS4hQTk1JRjn49yKEok1bHwTSJk3SqM9b9TmGCS1fs22vgB5BdpVWfsVa6ZobLmNLccZfu1AmYsR2Emhthu4",
  "key7": "41kRPgb9FmSavwT8eTvVu7P29ebAvUq4LguP83RzoKaB34mx6nruD2jN7Ky9AmWDwZPTJx5bkr38Z97Cvv5ky6EP",
  "key8": "JwqLxsz3yj2JH2qYGJvXDdakXZcXP4hFenF4HLrXCbRWqZeoo1rXENybW3KJFc2BFdSMQHMVJ8z76rtnVyMWw3j",
  "key9": "4cVPB2CwjUaig2Yn8LAgDDA32518c7y9AVegFPFaaq7gnZrMX7PxccekecdujycK7YiUDupvpwHVeZ2Dp9WNf5Jd",
  "key10": "Jiv1tYM4BqjFKseagmgTimTv4MotgvcAzcXbW2AZrkBvSTgCDVMYUYPFv3Fxy4cKmrnEagTGGD7F1TLkghxLVhB",
  "key11": "3JkWj568nn996y9Y32UkTEwdc6qNq4ZL1iN42GbxGRuhE9t1Vcw6ehQnZcYDt7nZ1TMw9mix8Jb5LgqR24WS781n",
  "key12": "4SqMozkZj5RuhfN1NdCVAXQhkWW4NN9tfVNS95PtuubzdxXhEF3zatiyUPiM6Li3Hzd3RB9in6mvhb4FJEQhBq5J",
  "key13": "3AzKemVMXg7fuU7d2YJtePLMZyiTJ7FFHWw2YXssnKoWxzkca2LSQFNesWD4jecNgNQT6ZBCZaHvUfuWD8vG2wBk",
  "key14": "5juwRjbUtf8c8fLyGgGSrCBnGzYT7awbz9hy1cPFMSrBupSg8LNHTyELMSoo9prXPLah7uSw8iNgNkjVUybBW827",
  "key15": "j5JRTGwhWnAWt8xgqXCBinASFevZb3GfR3uP4xXMpL8NdHuUz3D1NxKFLkhXQK9vWUuxJrrkSmfmaRAQTi7PMCT",
  "key16": "4JbpQNhTMDnpJwjkvG9G3opqkHKeqzA7Tu7Vwdn3R9DyEPmVVL3e7KgzjXBGER1g9xjSVpn3DmeCXc6DNzJhjScQ",
  "key17": "2RaVSxEhQV6fkfwSidCGtcYPgQvAb8xhvCvhjvyUWCmn5WJh3RYpjNV3WP4hh687AG7ZLjrYMrkDHZWYMC7du4N7",
  "key18": "56eisXTFd9FLarBmAsNHLgr4V2r2ryutVrJ82ppkbx8tW8jjEWGM1R6o6qzhue8G37rjEqArfS5ogcJHy2ZKscSo",
  "key19": "R6MWUnfMojWaXFqrSZMeKmqLdVtjrkW6vDyFnpCnC9FxphYv9WeCKgPGJ8DBkn4TtYP3S4oKXc1D8PQevqVvQ8m",
  "key20": "3V4zZZwKwV8xk9pk4xhTh7B8585hrcxZhdWE3DT69HkNt2vFCeiCvC5s4QwdQPmS2FXebhj7PDee6kTEW6fQiGAT",
  "key21": "589vhHLVT9SsXjyVxzgQVmdGXrYDkWU5wvwFD5AeLn4oUnPzEQdo7VmnWus3Pnvrrm3FMvBm1zFBnHmEo8JByoUm",
  "key22": "2huFagqAkBdMyQzhkzLavkBTaFE8bj7fGCj8Fun2UKnmn3Wb7kmru4iCVd361khMLhnM1AxvG2GrQB3rFfBxm3aP",
  "key23": "66dCkiPk6Az4JSD3JsDTGUvb8D7vFc31hna6kz4ZN8G8z8DNKgncLiG4Vp39oFxMXFGDqsBrwgvcFDjRyh1eCTcr",
  "key24": "4BMUuGnotU84oLbQ7PGY77kkPCp3SYStVcjNGieeMT7YWLgusJuGGDfUUbegDaX6TKUm7QABSynQ2wkBmmKPXZLC",
  "key25": "2nrJP7shUaVngStLxeVKeiuP4gj7zKNJX1zxQcVDAUGaFWTSHjErh3RLN7EA8Wprm1DhGvjx5PDUucj7xBALNjMd",
  "key26": "2WtNhnmwrLWA1kgCybUjHWfVPgru7c2jzMHHyjHBXoQ6vWBT2cYbb5LY6brLY6z4ooAmaQ1avqvtoX5En848sSBL",
  "key27": "5MxPQBKMamVH1rNZWMNKJXwBaB4VU3MUXu469kYy6J45ksc8HRi2HjSW9MGxB2bb3QrS26JAEi5CE3fn2NyMMjAb",
  "key28": "3dWLQpde5ymSJ5yz1ahSj9aKtWpCTfVeEKahBBnBLuGUKUDSjUwPbbHvSrsopxJcxAiKredXFEZg5N2zXX1BbaVK",
  "key29": "5tJ4ufnuZUvn3ghgjuijKKz7AKYoU7ZoZAv3YzoDMZhqq5AcbS65iGdkC7K5dPsteMq7w9Gtk4M1ZQuZ4w9zrJsB",
  "key30": "3WjHdfP49wUf6K2RcEyrJLgWBr9ByGrug84aYAfXMb4VrwjrymG8AhxozriHMLVaeFNYnaxHaWTeVm2cmMdpXySo",
  "key31": "3rsCjzXiGWZS5DyCAfqqL2FYX7VptKQXeuN2r7hEua5fH6pFyZT6HgVCz11rNKBU9RSNaNhCbry13qG1iqeAywuD",
  "key32": "NMY8XXaWqaobe55PFPm713fBSq9q552HKf8yxUGTsfd1TtFvdTiY1D6ufghAo8Y2yD4qPWsTbq52yiTyz1k5qRe",
  "key33": "2s4iU31neaCW1zGRSDcZJCpZHFEy3Cu2qMYJ4rcp1LUoRVUzrxyyrr23L9FHXjbhNTkJ8CgEq9ckUV4r8GJXsXzJ",
  "key34": "5pb9Vda1UKqkAVxka5Yu4r86ibv87tu4AyBtGCTc4D9tRtoN65m7fbYyaJGsHSQHEa4wsGVJdoTf7XVJNV43t9J9",
  "key35": "5ykYvZJbXpcdmorgPVmVytZ6uS2Rh154EVpzULri8DnjhP7FrDBhCc9re93nb2N9bc4ZLKTAstMWzRqvpdgtvYkf",
  "key36": "4tc6KsDYuBnnric3jYw3iZ47BXwJ9sXzgau4ouQ5S9Xf2jUsSLGgP2erSiy1CwmMar58xaCQzFJTC81NdGSXWVDP",
  "key37": "3Jp65ceDLLbs2MutEAEFSdfPL4DpzsP8nfngUDsW4r6JnX56ABndhDHzLNSFvbxK4qah5GNRoSmYUE48vMTsyQWB",
  "key38": "5Tc6oVM9fPRfVY6ERanCjqcyJAPD22JvzPFhFaiFZEkZ1zuwGvkRwmS6QGhzZj3TCF9AZdNkYTPp8d2NYbbfZEsK",
  "key39": "y1F1hsxKHdxMmgua2EANvu9zw25wsJ2fnZdtJosAyYGYfAzKnRWTRfeqfYSpa79jZQKV1eTkuA2Tikt89ijZGQY",
  "key40": "3EP8WisqDStEyMVgSkzp8NmineemRg1fQvx3jHiHWUitBC9E4jGWLtSwk1kN3K12KDJT6oTurRdw4m26wEfFA4cJ",
  "key41": "Kef62FMBZyEo7776NFvDYZR6EEmsXxEribYpD9haoWMiLFzq1aJD6APQK3xxwEhPnJprt6v6vn4PBLm2eN7WEi6",
  "key42": "25WFej4wLQ8rs4ThyQRkVnvxQ7CasstAbzNeukiZfY3PRk2QCRxA8xNZGMPMCPn39A2iugmFEhEnMjSeD2rtsvEK",
  "key43": "9gpr6hkQ8Tw3v3CYUSGXmYu9kah287REJmBrGcf4NJT2tBDAeNCiWGK1rtRsm2Nw4rx6cVUWGMTCpU2TXfNdYtR",
  "key44": "5eBst9SaQA5kzLnpv6gVLmXbdbyegkVhgvyj1z6dHNra8jgjCfdFBuxdBj9v7jwhJbPHFxgKa2UqdYYCY4i1Toez",
  "key45": "5qYXLVPwrXK69FiEvw1tq9iWJeyBRWofcmyZyy3jmiMPtTHKKs5r82EFZUyFp33TZWrfdsjq2UD1Jjv6rY1VcZvr"
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
