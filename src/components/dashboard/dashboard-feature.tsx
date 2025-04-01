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
    "F2anYZxZECPAMBNPxUJuE8L7J4mNwFCDc7jc825nJ8vQDEaHTBhdmK2oqVgsYwvDMMjc2LTnryrgAqHo6VrZrb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q81HG8muJHqz4bANbMPTfB4bW7HjMo8nLAPbzyHXmjS6dpnGLuHBnAxRCsx9hY5XPAWht7k6c7U96rPFMDxtQf",
  "key1": "5hht6HhzPvBNoTRzcoEKFvUmtCTBzakkx9YhUgjxx2LmAPWcYyM4PkenucmmSjpTNcdoLPPFRCSgA4BDGwmyvXHv",
  "key2": "1uUw3B2FcfV8Qyo3JoPbp4EkKTTGqTXqGsJWN5xD3TZkcFdGSz1MvHV7bNk4zZ3CMfP48cr2fKq6KiHFV5j1Vfj",
  "key3": "4Za1QeQYEzUUtdwMUvDE48u4ZTJwFtaNSbsgHaS8oKpDVNHHSqkzTTTRCxcHcAm6vauHySjxQscCTs5xSzxoWazk",
  "key4": "iXMNR5JNt3WecQeDjSkvwCxNouakCcY3tNU2XxXPiDfUh5844w72fXxwsdTJXzJfB12ih21w14NieuikwwP7fTY",
  "key5": "5hfFuethCBnB1hi42qA2ukzN2K4MXNS5ZJvXd9uU3B3scqZXe9F8mBVBfteR4383QCgGc2mxwcfUifX69bshJxf6",
  "key6": "2WHuZzfSA98BUqcjcr2izkQqbJ6jxvmRMCzfppJcBP6c9a9qru9Bt4Epk5ZCCnr9teSYNT4ZYPqH8yWMshMvGMzx",
  "key7": "5FzvbnbzHjtT2c9KgbbRzcnR2unQJDw9kAJheecTUkBpxN65MPyagAunsXq1MN4HB4LCKbYW9yAvb3jpsDMtDfvx",
  "key8": "3q4Zpq2UGyXxNKXAsVAXoTsj1y9Ga3VqnEeiJPM5yQyU5ZLku8VdV12d135xPkc7v86fwY8mGHFWH8yYGQUhJwwA",
  "key9": "5t9F65z4UrUoZLdHKFb9iFXUdtixh2meJcwxqUTMesVgVRhubKkPFvMyMjCCkfvifc6RgdBdqr1SCqxVGyb3ug3N",
  "key10": "yP8NpbH4ysrh1YAs2XuVkg9CJ5ssQrMw6KkCTWdnstMLdhwP2H5WPM5ovp5AxkeEXvp16iAj31Y5NF73rQQsMxG",
  "key11": "whtoF3SFnoSViAPNkzcPw4DAmGc5CRj7K3LgGUcNhCxacN1jbgmWH9quHMCUSCyGYnCm7j7668U6afVReK2WG6N",
  "key12": "2Af5rM8TCreibUKZa6YjeQRcZZmLxkVx5PQrWiXYuC5bQsXmY7anJbB4BUHZCm7DxJFxXQqSGxKpCAzGdkXNYF2v",
  "key13": "eLu7U7RvgX4QTsBzHrmFAPSXiS2xvJDRUKDCgGeSGey9QQpBYjUgHQYYBZ1VtrEMUsEcBo5AqWTv9wDtrLj4zuH",
  "key14": "47WnSUw7MkU2tyaNsHobwAgAj1QEWM9Q9kLRcAR9mn7L7PCdGzSDEoDtisycSCMqgQjKQSxyx8HNxudXw5FDwtwN",
  "key15": "iZNM1XBDsWsKLjrzLrto721qLdC8GwtRZfsTFGQzNSR54f4PfkNmVvLPZ8mf2f54dQnRPkEvdAMM2NaPWJKZKUz",
  "key16": "2vJzbhGPwsFdeqKrg8qM4oG5jw6MoTrL1gYa2g9mCbq9W7fpCTQK2mGnt9NRyrHTmu8Gev5CqEk8ioQ8P6erFZyw",
  "key17": "W1qVhHPYrKBoNGGNziRmKuKkm27zP5gXFcSGPFeJz7AvMfYQs8aFoh4jNqnRwZjtBp3VJt4FHVeMk3NWuTZtvVK",
  "key18": "28iD4eTvvqPLJusjn2fp9dtkq1CQZ7eVkqoroc5jKBPh8aFeiSj3PmyV8rNSAnwwaYoo1CEJsAGaU1uPgQd9F8Nr",
  "key19": "4yVzsYkhL7e9hUy28FazprN9vUwGp6x2h1VoDUERs6wcvrYvYm55ohzRWAqN1D7tV6WY5yTE5aEbMGkp1KmFkMtW",
  "key20": "5FemmHULX3HBF2HNBs8bUP9iMqTQZYEJj8jgLD2czqeqpVwQ9rSmwwVjg1oaStaHP5y2wAWcSTk2UHxnbyedzhYx",
  "key21": "5CxUX9f7RoRLZE9VfMgseDYfX92uAyK4R2a7YBfsLCMGAhbRSgeWauFeFoFxLSSADrhBn6q6Lacm1dPn9ELUrVUo",
  "key22": "3YR5A19jsjdjYdVApszD1nebb38A8QQMDtAzA3jK9L8QkYswKHZTrMdzmm33vRHsVaMcABmwXPbBEFmTJq5cWJzT",
  "key23": "3HHTo8Tz912sNuCaLJBAuJUU2nE6YbK337FLS2yTaYk1VTaqb9FHE8Ur12Mf5abyT7yxfL3TuyESvhSqBTeXxywC",
  "key24": "vAxqoMSVTsYXY9V6QPwrEjy9YyrRKMBXHzq8JmyZTfTgnvrXnpetEVZHNG78BSURnAgSJMLa9VV7KxM2AB15scp",
  "key25": "4A1qAo27hWM5Bc2sMDLaKQWjM19t4HU2LNsDv15RznhQmbgB88SK2wUgj7PQW5kokesLceU6nrZye17AeBe5BwS",
  "key26": "31H9Pxnzz2jpuWg9KAVc8qwjnVtPYaTnrkBd9e91ETSCNQx8HPHUPnqx2iFBuYvfDCzFAbXva61Bwzz3SQJCVqWU",
  "key27": "2UkRNv4qhKP9w9jMT6Ui6BD3yUQ4kTfHnSaqbMW5iBVhHwaVnsbvnaWgrR6dPZGyXK81nzBbLHorDxWQ4q4F84Fg",
  "key28": "3renBTDP2QPexdxWFXxGweg5Kwdycp4ao2xuQynUg6TfUUbP1UrEq7f1VRUUR9BZaLEBL6LteuYAjTefmPxz5XcS",
  "key29": "5C2hQcK9aZCaeiL4DJAovPrr3R4c6yDh1F9BBqFPW7k23V6dXhAC2GUR2cq8xMy3QTDzz9Hykq1638Njovhw7GoS",
  "key30": "2wf4qBxJskJ2mrLEzxet34c4EVtLXdDzuzkZTKjqLpUjdLBuwPiyQZ8ZpLSmb344eUVoyFwC5PE5kdRLTG8YH5P4",
  "key31": "53NPDDRrEFpE5nVKjceuns3QVWr3Q8hAcg9v2Q1bAiX3mNRrr1o4FKXR4q1HvtA9Fomcsy2fvWAoKYZr1h4myqsF",
  "key32": "4U8esDA9jHuxizP3yFPBNLpSvDzt4kM6JriLFuGstHiXaN5HQVjPJoaGsXa7N1JUoy2gDw6VCkNAzNxJdaCQbzVu",
  "key33": "4zS9bdehxpKp4J4JDtT69miFifCnJXtmvDszYngHGyNLEP4ybHWqMnxpKdkb5mEFYgRwbVtW5BvQ9oWYSpTMSfVS",
  "key34": "3tErCPu1D63vo8n1TSA99Se73dmK8zVNoD2khNktHb7CPBkFdKZANLnbbhURhAU8cQzWyEzQmNn59UQcWKsQMRsD",
  "key35": "4j58GBQLzvwWiJXSXmm5j22MkxVUyyLfPHr9PFCsPLwRCS3nhx8789pwYpC5mLYpBddvuGGDW8M3XgykBE9LNGYF",
  "key36": "4QjQoYVvQXaDMLSQT3VVz6mZcdUCaebpjichEvrd5Mh6WkMH2AV9BH5wArGPbDhj86857dAx7vMBMXQCQnET4mte",
  "key37": "61t5wDWyksE3MNpJQDz3uuDE4BdD2FZAi6ZcirGkGWVySz9fMa9SsuoyAmeSu4yWdxy6d4P9EhSXqnXRPSxUbYsC",
  "key38": "2W6bg3BK97Yfb7UxZRRXGMPrfGjbHFuBJgC3JkBdhUA4W9SJ89v3QPEq9gjHMcGsbwgXxT7k7VfrRnPhJxi63VK3",
  "key39": "D4qduoF4bC52ALgZK9vxS1LUJLhDp1oYnXqzgTJMtCuvMSRPV2oHZGY8kXaJMUcoPkJrgAC9TWef9AGzkPCqueG",
  "key40": "37QoHMiFw8Je7FWLayXmvApyYkRKM1i8gHrvSuYHNqBbN3cncEB5QGPPs8XkZ1fxQXbLp4sabtG4iFUFoLv9cb6o",
  "key41": "cxmABbE51CpMfxtPdWcZHToZ36fpbRhaWhK25EQRXxZ1iY2FbEm6oRzrjLeijXfz6KobSNFV8Csv4FjB6MfGdNp",
  "key42": "3zvC3BZvjLuR9d8snJMYt7zVgBMHThh1m9gVnmPaEhRMnQfJQwSktVzpkmPh5vAdReVot5r2KcVK8XKtEdfpfiL1",
  "key43": "2jiZhp7cfDk1Biof3ZhPfcP1hpuZYbY9yW3P8sLtEMY6oT5SmkNkaiCGWMYMWCt8iWbDgUhw5G1tcg5PAPPm3qf8",
  "key44": "47fpoah4a3zxA6QXYnfAw5sTMegGtcHJtxzBmHjCEZZFBLvvTJQ8M3ouUVMPVitSjXxhtSNyRF5RDK8vAV3Teuej",
  "key45": "doVkt7HcwdjrKkF7FGH2qMuwqqXbRbDkQo9dtdPUFEvyf51cjSp1a2sQdWGx1qbkFnDmSQeTa8GPZ8PGdp39d2X",
  "key46": "5iGRox5rjT4myn8itd71m1qBomTbH841bLoWVjFJMzULKCzB28QRJudwVBgypPDGUdwCwsPL1ZzsmAbid11GVeLi",
  "key47": "2LvGeiZUnZFMNjrbgpSou2NpcvSHhzGvDfK9Xa6w4P8wycGVsF5XsAgwjFNT1GLF6tkjD3QZmtxkZtJChP9gJ7PM"
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
