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
    "3Uy9G5KGphRK8q4NMLsTexYPKVCpLvbuVpjKMR7aLw34mYzgNqfh4j2XYHMzcNwznRReDLovdxPKQGsKLuzSa9fE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kM32niu8FuZUqfa9PqcJt5uUc767AuWXb3pkLUTd5nydmr8BGJNcsP8t6Wvsm9FkAtr1s818sPC1Rm3bP3wTX4m",
  "key1": "66nyDhdxaiDh8cQ9bHRhuT4nHE8M8Z2RioV8EdCDMJ3Y1wtzjkUR3mYi2ScZzLuuiafruNr6d3Wy5UM448Wj9Tjn",
  "key2": "2WwG2DE5q8FH6AtPVHNmbC6ZaTbf1kU6vpYWqVyp4NhAWwpohnE9meyjhuSSJds1j3U74o7ZRj6Q6RouXFz9TKXS",
  "key3": "4ETxemtcj6hW3eMzZgmbXbCnqbf1JECErLpM1bgKuqHLWjSdyPwx5X8tdTNrjwmexcMFqJq4c3CmJRoRSv34Qikh",
  "key4": "4GJ1hnqSvCCsE8KXr1Drr37sHcrY7nzycVbvxnPaQnDGiVUqsgbZo4MyAKBGJhWndwy3Xxs2S7Dkpn5opzck4JKQ",
  "key5": "2CyXPFbzg2m5xfFiZBzNav6TQgK3XrU6vtsc3ooHwDBgVNC8MKSqGKNUPAAnzbEcLzXvtC2ZwEJAnwSc8aZjfDpz",
  "key6": "32JFvHYmj6foUivkJ59FPAgs9Vy9MGoQLjVmz6nUsKnLeUEJTrdDPmacfvXFrfW7PtCVSxVpiffVjTsk1bmLsijk",
  "key7": "vK9xj9UyzdYVTjmmQ16sqYmkYUm9kjTjkcyhxZuP1k7Ds36rBi6KJmrUX69ufpPCeXBkpLSywJHaKegLgmfTpRG",
  "key8": "25AYBqC8f6HfBiR1ysCsypnByeGynJHaYjWZBYPr21iGgBjPqTzdRYUPuzuLMaTq26ExVxcTQ5BSjtQ1mVGnhTok",
  "key9": "3S8CQoihbatDNfVhRMbwUydwmetzVMW983o5N5ocRiUrhmiJHubnTvjSmECVrBhjQQ4r1ELCkPHE5RW7UFaNAcPn",
  "key10": "4V5XkqPyMVEwphBA6ZxhThpzFsM29bg51SHcDeX6YWt9NMFNoQemx1khKMiTEY5X2abmwaMA19bHoy17GuBGTsXq",
  "key11": "4gCaf1edZLeeEt1dEXmfJqX2HeYCXohp7MMbaScQoBanSgy3CUEgrNvca3VC2BfnMCYhDxF9rYiNGn9DtKmf2msY",
  "key12": "4PztWYH9LspbLQ5Dp7uG5Xu5ga6PvDHbVNvQ2nXHmLn5jR5iMbyvqngRNX624mDnnsBnDzBff4cu2M3umrqJKG6x",
  "key13": "4qSQa1d26v5kL6XMBmW3G1wjCrdiaEuP9XrcpUJc5CfpBmp9Y5Sf8KVeCepdrQHMmsWtcj9q9Rtz4wWFA6FjoYuM",
  "key14": "4qc9CBBGQ7YbiQKCVezEEFMu4KmhXqRvkV8fi9AdUHreufPGxyPMgHWFLej1aHCkk1YoHVCgZx3icdiNADf7US3f",
  "key15": "3kiYVRociKNAPjnBUepezjkGPe9Kgj5jWXAEyKUZCELhmHZsAME5kEXUdEXCxrbRU6Hjo96UTVPpp8q9eZ1kkAnK",
  "key16": "3ieNhXjvWLcVVTzmA46dEbFRvNynSbE8vPGpgaz6N1WPgxZw8hWEWF5ZTpDRvKqoEAjVzP1CcugrScQwv4rXdLa2",
  "key17": "5UFW2PrS1YjCATtU4zJb7HkAmtzcAq4Zpatk5cf8PAWcP1ffaSsXGKLGo7iLLupgSd7kmC1EpE7VkeUcUBTPAQuh",
  "key18": "4J5Fbu73HQzPGoEzAvSre5SwqruuDEWgu1vQ7NZud4e1m6fECfxYc2wiSkgYGviJmPpT1Tc1mPiaT9FeJg3HGsGN",
  "key19": "231gcDf3XLQbBQQuxCJDE3cXkdEjWW9d4zeE9BsRoSQY9qsgoD7PVZYS1jSshvPX35uMGDUfQepui3nyWfGEa88y",
  "key20": "3TfCpBZvynFPuW3k3KFngXqXZHVvu7G5kBDocz6NCwCDwSAULBy2rswEf783nmjoupQvDCTJhfZ6RCjq871pFHKv",
  "key21": "2nEDv6HWDAVb4ZNHbrSKzJuQuWHRn2vxHqdXxdLyGJyCgtfUckLEpDyAESgyhZxriXTtpQb7QFUtXPgN1yM3cUih",
  "key22": "4ofW2GDnxZv3TZjLCxBBPVHgJ3K7mw4eokZCF43dSGqgsJCSELDkUeBs3VzfeJ6RxFmiqs57uTfkWK1rs3qrCQxa",
  "key23": "kHxhq2AvtNBamZHYeu11JLv5JPiMg6tLxD85nuWbk9DU3BDkqKh4sSQSwEYsqVaQdLLD1CWykKauimJgBvGs8Fb",
  "key24": "48Xpr7pLdPboQMxVYAXBQz5FbXMtn1wUKwoXBfAANVx46MBhvK3Ek8cb1CzDhUNAw7kMmzLUWGq2AL7uJAK7kG3g",
  "key25": "2kT5VXRdFH5M9PYpkqRcH4gmM5DKFCgSg5rkrAf7BZ98DupT3M2GXmqVjS9yHGvxFjaSTwEi8rDh6M8AeLE8A7qJ",
  "key26": "3MagDbZqPQ7PQVurTxfUzdMrN1jrkDkjxNeou4jaBvCRY7cJMg2RDRdsR6QFApm9qUjZjNs7ycBYxnJWewvikudk",
  "key27": "4BnHaC3R64Z19C6KG72sjH4SKrbfDKASTS9sRhqtB5vqgjopqKhyh9vxWTZFeVjz5AFdSj787uYNEYE4a3RxE4qd",
  "key28": "24cwcESfrUpm4ptAjWHghQuprWKjNyYEuCwXAVExsKrQLpeREgxUcM7HmLFaQQqm7aSgrRxYpTkku3WqudJmqyzL",
  "key29": "36kiAWcGuoLwH2Hx2CHy3aEKrUX2v4kF9fc2So2jNpTSZaJ2hBuBAGF3F2cbST2xnYyx9guvx5qXsJzq6HprtGgf",
  "key30": "3KNKc1btx3ZC5zYe3eMuAg5QYgTvvdBobXNjUsjXRDmXFWfKKjBNGpJCV1Rrmfbg8j3hANJnHJLPq8i9r5BSKbtm",
  "key31": "65E8Nf7jHihkw4ivqQVaAwk3S4uFsRQDvBrkAZ6RmvA4Tyrx5FGy93w9SCCcA2YNLsyvdseDR4aRK1bzydQgzXqK",
  "key32": "2fEjXvRG1Bksi199TDqUkbACdKyNPqtzWHGZSn3A63vHsenbeqNvBLQH1LTxir4UrSbJXBTngzbkLAQjvrzWLWax"
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
