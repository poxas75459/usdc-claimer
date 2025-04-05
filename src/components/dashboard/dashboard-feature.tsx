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
    "PUphtcQjRZqefSgbqmrqitLDxaSby7U5JdMr5Z66pEsosc3H5kTygLNYyp1XWMNwdSK6dfmLR5JA83PWe7NBpbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UJUyNWK2ZAQDyYjW4KqFyL9bnGwYs9K1NjWbHhKueupeXuPdTNuCAzVzgZYqfhjMroejCDs5D2ot782enJP5yB",
  "key1": "4bxAqGX7mGewqiQt5MdhtjBor3TVrH59dEFFeJgT3ARHNkAtnpRBah3nABd3xYYrPHK25unrdQm7ri4WSsWi54TJ",
  "key2": "24SUPnVbDk6NQR725y65HCx3MqNU8nsVNDwkuKqAUYJVF8QC7CoP1cSrcQxD7whuCpGY9dYRRDHcyx1RAShrKebi",
  "key3": "3Jb1HGoYrWxXbRHzxsFrJvgcKt9W36WksDbw3DE1BmrroP12LGXozpZgCbGRScLScua6eZmAZFUubEHe6WGM1gQL",
  "key4": "4z2osdoz2Cpd1S4rz72CZUPebyrHRqyvPpWLM9PnDDC4R9D9KZohyBr5f6mi3YfwYzFjRF8BTJxjpFhtuFjBCKhb",
  "key5": "51tZLxWnSyCxF8JXiynKuC6e8gusHWpvGrTK1kxqX9KkPcGV7VDY8m4B4gkM3fBR53bjEcgeEAPVCHuN9SsqipnQ",
  "key6": "5AuyhNWoWdcWLU8D5vXyJoboqkBBQ17LNYn75ndDCkT9HmkiEiETwP7cgMygJ5wozho3aU5fHp6NHZhtDxuQdtDb",
  "key7": "293QX7kXGRQaHpg8PjA98RmBBUEK5XQftSdThbbRTdjvq4uKhcKLi5bBGd22LSLpetNai8kt4PfYsNtyL813ah7C",
  "key8": "2vANx7zmkQ8vLnBgviEswg2PKLWGJMXBydys5yrUbxjXqKKmWEqJThZgFF4Gs9rDD9w4Z39V33aUCHo9VpUpk2Jg",
  "key9": "3ahLUPbcLQAGpNSRBeK1ZcvPgXFDLbUn2MED7PnQjL2fnCqJP51po9n7rRFbvJ1MUHxhPtsJPgy2R7eGpxFPPL1C",
  "key10": "4arC9jMwmdDCLhawNpiVU7Te9TX6YNrVCpZjtw9tdLGcg9Ywwy9w2fSyzTXDgLEj9PjqcMReMKbYqLWHkJbBS8cs",
  "key11": "5vbpTc9xMEBBdcYLSH24wJnQkzFbzFKV9DoZ5y55kKfknGRv5NXLWTVdB1jUaXWrAMWJjCbube2hqgJULhVvahmt",
  "key12": "4mDhpTXW3VUB4ueUAfWR8avrpdr9KWp4swHEgRKDkMB3drjgGxHxfV8ViRR2eDTrsgYTBYh1j288hA9JxwzhP1Jv",
  "key13": "2Udh22aZ5dZQv7ixNBht6D32HwEaFVkYLVZEoBSjBkKjngcxdVZdSoLjkY7Qmyv2dA2vkWD65dJGbCfwX2VNvjJ7",
  "key14": "3LZijaExfCcJJvtykY54SDZG2XHuc4AdCgVa5CqnH4AYLc5oHbeW3FhAVuEz4K6DCZ16FEobhf8PSSfdPuqHCgjz",
  "key15": "2czPCYjZere2ULxzLqQMikm7LJ48wAzhR36dSwBqoHSqNFTDc5AjSZwxqQ48Grm5FuFjGC7yrW8o3QApw1XBW6uz",
  "key16": "4tyQ2FN44jDcbgjhd456NQKABSbQGkF8k8d5wkXq2hgN4HGhD7wShkND6b1g5uCLAmBTix4pmWCcFoPvMMHz5gRS",
  "key17": "26Xkaa4zHbkWitiQXzWx6xDY3TwiTqDVJnzoc7Aa5YsGwTHMfMJcdtpt5xk8MAxjG3BP3RYofdzMEre9ogZiuEbP",
  "key18": "FQVnBoJ4qv9RRQ2R5TsS876oK6TH8PxuSc2fTFdKBWsGmBAXtCvmN1MDF1XaTU9UVYXBhPdxWdnUjLwKr6tP8VK",
  "key19": "64XA1UkANpbERTWwme2dguu3ze5XJfZwauVASb31pgdExBFcQpdE7fS4qqEk76LD8RipW6hATJw2QpzQKsXe7UML",
  "key20": "2dH5dNwcXxWkBRTfHzGLFXucofCr1gTNjD5tw2De9h6mrVMXEagmSHutTDKpnJpQTzoEoUMfHJjRLzC8UoJ67ovx",
  "key21": "2A2tCaJuH6ixiKxBJBvWgcmuRbQK875zfENCsposyAdLa9EbB8DzqHWPx5SW9F98bfN6ueFwaDaQZsCBcsHEhzU7",
  "key22": "2soRgg9ugY7yJpkMqRjyxCZwkpCd2aT4MxMk7H7AF5WtxStCfMMBMu1wo4FprFDrmMvsN9G85CFgo2aWFbYdTEgn",
  "key23": "35oRb2XyRQz22W4cLpJW9RpuzceArNQwYodjRzVBkxGsAToN4cKx5gQSYP3Cgvcix4gv323z2yczhSMxr2Jkhr7X",
  "key24": "25d6dDqqoGPZneR3rD8HM8dtCTq9zfRGJsFdLU1XBcgvRMmeePos4izz84ZPH6q9AFCEpuebjyhFqL3Hv13KTsyf",
  "key25": "3X5xqiDfpdU7xDzcFkecwzLqezakk8mKjdfsYga12WiWTVVzi1gXifxSYCD3bKQtsynn6Hg99P5Jk2utbatzj9z",
  "key26": "3BhaELB67zHP6sPGUQRcjSNmwfSimrGhchGir1env7vqSibUw8zTwAUn192FPrwWTFqxvLyTq5TrFFeqwYz9RYPC",
  "key27": "2WytMaZrMY4M2QCH8eAvjVJJJUdgPjzHqoigmStLVduj3kx7HiywugxKPXrNPukEXVz1gG1NHfYBbtBMQ6BFxTwz",
  "key28": "3tKfYB6Rejc7QW76recm3UTpx5r8fLTGZWza5AQf8TrewFM6v87ZCG7RDrfk4hpS9kg88rxQ7wfrPEGHHNt8qGLE",
  "key29": "5vJN84Nzv3DF6QxJ6W9eKoJzpNgPfD5QJyraMoWrP2HKizZbz8p7t5SnKmVJDWeAL6NeMart9cw6jTQ5HmELi7ig",
  "key30": "4cCPwsGpbswjHf776oo3gcC6j9FApJ9njwZt5Nehs3rGjL7Ej3J7WLaw3RSH8cRNfmE7PVvL5t1FA9cx4DhqoYFs",
  "key31": "3iZ2GNY2cwVXEZcnQh8SRhEibmfYtCs4MgYEymgBcQ69RBdU67aPceRGD8g5jiaSvJxuCuQbbwUfZA5QjFDekref",
  "key32": "4sSrcNBTPZP4RFcnmsSYHcMgU2sv6XGNfj1jow5SwsVysfg4n8j9t76JHBZh1PsPF9GYSnLyDhXzwTxF4k6F3Y9z",
  "key33": "5NzDLeerXwMGfhTGb4giwuwnePPzrRE8HsNQLY5Hf9QR1rFBsyiQNG4rfo3QJDzsJgiBu5ZsH7z4sM2awdHnHhat",
  "key34": "3kBrWDACsZiJe3PjU2CumEhAzHR6BHAyWbhY43mqevRQKQ3mpf116JVuRPktJpj45X6b81GHW7Vf9dSFjGeWjzw5",
  "key35": "4vY4Cy8aSDJ144zoz2voX23NU4U676AGsHyAyZNULqUa1FFZceNmiY9BsV2Zc4TyqPMyrH4mVBReiTCs7noSXbiJ",
  "key36": "5kwbSpZLH4svw4kBzwiwncTbFFuWwKTjhiSFxSG8jgmyY8BcjEMh3cKgrAo5EvPgNYkEXRQY5wYLgxc1RdWm4TeU",
  "key37": "5nQ9j9sMnZTHWLsSPRExfqKYKi7JVfuUYJPd83WHo6WeWgFnGgevgcS1Y42GkzdjGWXNf42pSZfHfxvi2sQXGviY",
  "key38": "3FyFjLCq8YPNP9ihY4RNTRY6Dab1yKTcjvUTmqJeZBpNYaWa9vsgqZcp4bJvGiwebfnHxDVJBa9UkQQsafniikDW",
  "key39": "32skLi39gdGQHd118cW8x4zQ6gDSgJmKy9XVxyiceC74Z6vp49NU24xpjPXVnYmyRPuJTqASKTLPtEoxvx5eTpAp",
  "key40": "5N1CGat88YUYtEF1WyQDTK9mw7YeCQFRnvRjfxGXSzzvekjAwgLYvQYLaN1vnzW8LUDEfZXjKR3aWyA26PY7par1",
  "key41": "4iU7Ziw5dZQL6ApkD8FbRnJqkMyhVGc9j3eCZyAzEDLVKuvWoePg6CV7UhdrPUBxaQcQsUk9sgpxzszkXn99RpMf",
  "key42": "35vhJTpzxn9UMfYF92cp85r3F44JviFxozcToQBGmAjg66tngZ8CtiFkBbPX1b7GjbiEMc7bAF1CRpvZCPCyfL6r",
  "key43": "5rnhE3zNsVXooisHSzyozi1bYSHkvLyjhZcnMmnwHqQMcV2Wb7t47LEsDq64vubULByvU8WXqJ5i6AhEfjGnrSz9",
  "key44": "5mGYZY5YiNoBVqwHMB1mNVFxjLHmqVyv2pCEeaXVGUdG3wdZKS5WoDMcYd7B6hYH9ynp3CBYsLg5DhUENJ8dwCx7",
  "key45": "oxvSC9qpHvjGQM2UNbPYDNmfZFRUMsrdLHN2JjDV57YAzya93TA9Epjvs8GfmN83pmdx3cdLMydH4Y1AkogCHTM",
  "key46": "8F6h1Cko3D42WfzYiqus2MmzVTVGVFESBEYpLp2ArAHsxwwm3wm26Td2X5GqJzwvGg6TfDerwBpDYcfcMvtHyjC",
  "key47": "5fKastbjLQXczUxsPtqN7rNF1NQuzKz2Pz1RzgUW8YZH2GJoy74dW9kQBWo36XceF2UcCE6GkbymwNbeFVZLaX1f",
  "key48": "4snWiy2CJskckoGozP7abzswbic34EwR2Qhi4sSGxQe6XnaNY1F9nLXvDjLFRqZTyje87kan8UFADtJ35qGBEC87",
  "key49": "5RaM3eLo2WBCd3s92an3D6mmqdPEh8B3jYqhBvjtWHkPQdM8arff1tJfa6DsTMEsWn8Az4JYsZe97KNqjT7gKVzK"
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
