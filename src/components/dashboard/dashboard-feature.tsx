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
    "3E4ekzP3ZuH61CVMn8WPU529qPpH85tUVspde4WZ8NtZfW7P3HPfey24CthxNT5176qEZhUcZwggaD6FBMh4Rbbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUoK6haRPos8A164KkPbXw4jkvHHKA1mzqHb7vMEpeydkroSPSoEzaA3eANGfRrgztoKSYHThwAsgSdusN66R1n",
  "key1": "ZBTGTiGhgx1f4Rsi7Se8GYYXjyQaHj5G1zP161uJwpfn7rnhipQ7m1GTDbqD1nhKY7Yf7FeHmm9Fy6t9MAiQMh4",
  "key2": "4VXYL4UyGDmJoG2tdyJgR9L3AwQPJ8poKdApxyNXLoegqMcoFRFnzpxvHbs5y8YJgt5Da1HQW3gfx6PU6TuV1tes",
  "key3": "2gvTkYKhWMN7WcdqDd5SrHXeSpjmRck7Qq2fgL6EUcMchuhfE2TgLSckUKG46KocHV6ETN3w1hhNhJ7ZTi8bHb3T",
  "key4": "3NMFqYPvKSD7wY9G6rUBS1bSc1XnMoKd4WfhrG6qQLY7eCDjTosKkzvyBzmufECQyymbP1vZrRZSjzFSoEBLAc8k",
  "key5": "2FudZNC3vmVXWR1cK2qoizSQA1EwL8M2sZ5sEAjahn5EJAW8c3BLsAuSTiHKic7N226dfHNqciRg9iFdyRbm1d6X",
  "key6": "69DwtMLo8kAAGdx7wM2anJpraDuaTtmH7ZYrUoqoTtSmdr1sz696ZLucEvYUPb8ipvnV1dDSSMY8YynsgpdYG13",
  "key7": "2DHZkkYsjUPnwShN5A5m9vH7mZyPHx8neB81U5PRc9RsLSM45TC1Z6AGhv5yfUcskNKPyisV3iugYxdgcgqZzD1R",
  "key8": "2XhtWBa5wRjmZLsW5BD5nyD38MAg1XMMQiL9hLzH9hcQSHmNMud2atk49rcGfrgUhorC4HSQrgTe8434gXBx2hzz",
  "key9": "W9NHmPxTDbEtoHKvZ1tUF9jweuk4ZAkNvDc4hKVScxb9PTSjVjPn75Euh1LpaoK2zjWL58k548SzYXHZW8QmHki",
  "key10": "3dWYsEarwxaPYucY5frEx4CxidkrqeQspJUpzBHgy6zMZWQnGRZPP4AEARH2s2rjr1wKu11cCvzpSvbt2zFiYZa1",
  "key11": "453mJA5TsEmbfQsgsjLZJtfnRCLe4AD8Ld3asAiLUkhRYr3BViKDtRZ6SMJ38Bq6NTamH7zUkSxdSaN17e9Uzvme",
  "key12": "3c5WeQ9Ks2qt9EX6ZquJ9pNGWDGFsqBSzLtbF9dUVUXHx7Fw6ikJrojj1WPRtz662fkoCvTqAr2YDWGpWTbQdhJw",
  "key13": "2WMA4bf6PhsuTxDEc4HmDnk9jn5yhkxYbdodBYsJgWSsLLQVVkdcZkpAXWCor3rNRqDtDqUHZEAXYkHp3F8ELNLA",
  "key14": "XT55uMX43wAYo2vipY5pCbjhtqJ3YswaFe3svLBV7JWQ4awCcV1wDdjBQSDATvMdCsVYdcvwHvoyySPsNcZvNQX",
  "key15": "XvS5PFJS7DHbDgd7TaQjEtebRk81qbvmiBCYg14R68SmTVS2rXtj5CzV32BWsrbUdoEMRk6VLn7JqTcm5Xc8eX2",
  "key16": "3VEY7bVyLJeQ9m7hTzjhcKqVtiKiN3qwRJCxwf1TnJkRbfQ1qfpLh8KT4TWFcePzSUoWnmb3dqrjdWKbqBbTq7zD",
  "key17": "2caAhfPT48PLN9fZ7wJKedcaw7rH9Pw7v2vQZ5KV9gHoNMG6tZPPoZ3QjYBLPo8Koygx2yPeE11zWKimt6vKJtoP",
  "key18": "3kA5HtuGeRukuy71Ft4Sj2qe8kqxpEdW8DC1sasj6hKuJqdAkj7dUr4PDWPD31AJjqZmJJzdadoNGMeZjuoHi9U4",
  "key19": "2D87damZFTCWzHjTJujzVjJGq8mchDnS6yjJktuk9gSHpW98YuQVW4A6hsqDFSVeZe9jzdHWdofCT8aqmtrfSorR",
  "key20": "61nPYpVoHzpt8ewDNrVBCe5GHwZ7R16LCZ5L2ZyWc9EGDituEAgX7MDhYtxCz5Az2f56u3AsSPmrzxMS5da9GqHR",
  "key21": "tHSVFNGNFoKLJz9453Jj3CKAKmUgxv2WkB1ysPCiNhabpuQpBihnZiRDhCNUaXydpPUZz7uAWdAMCegbv4WE6ub",
  "key22": "55QLmMJxijNT2VE5Ju7Xde6jgtJLFeb4qvuacL3qHmcHiQQH5YVzLDJEpCgqf73m4PM4YREa1iW8c1CHmARms58J",
  "key23": "tFtBEWJjnajERsjL5mzcJQpK7Wi1RMqy4UhtgJCVPSZT76FUyyvQAaMyGq33946TQTaSdsPmfnMDtYPDDPwWS1v",
  "key24": "4hwsK3BEPUpYdLC6WMGFyc5umPgvLX4tJDsUipoWSfdN7kTjw7TY5PMxGQfwUXyJUmo57moxbnJ4eUQ3U87S5aLV",
  "key25": "2cimoQjrATStUfsQdai4p4xkNBPPW25gzpjBpEaEA4hN7y8fhWYMA6pX8jRnwUvFvGLNe8TxB3MC3RgmGSCyzDha",
  "key26": "2QCpQGJa3Mzg6uGPyGWLL1MLnkXEkbCjvMEstgzoRiP8LzXpscJ2f94x4zrTWMaKDmWF3JhK26cNbywcmxWG8NBk",
  "key27": "35m7cKtAsSjoMrPwJjQ7kDiaV1S1KKR8EYy3dQ5WR2xuLCUPmkJcZCG3sU8DwF43yQUz6HYsfjWDcRPDnEHNmDYA",
  "key28": "37PEq2UG3VwFDG1f9d7zR3LWTVuaWHbUMzStTn57PNrsKtDa4EQah5ELpii4AGzQKShxecvokZ5er1XdTyGApiWV",
  "key29": "4HnPHM17hbq8oxSLSGH5Zu3KXxsDZbYdKV8vGaoZhX4yDJfb63wT7Hyq7ksDwRqyxyPU3gLimZLmsPdtHqge2iGf",
  "key30": "5Uop6nLBsf4s8bNMdpBTRNJyhKBEXQ59geBqXbEryD4dWdsiUGEdKVewa4Ld3ymAqzz1AjmQMe6Z17RT7rP4Y8fq",
  "key31": "3D7bhLTJ6peXfBkkK13D5zpZY7M3dbFaxA9JJVd3waAAChfB3fBake1PsXZTJjgKL4H7gDXuMEhsacDPgvwgYg4t",
  "key32": "33z3fTEg1iKNhT9vf9ybJJmnMTobdYnJZiCDRXxgXwz6vEWuLxP81bDMaR4h9noGByjBLhqFPFdjMyDB9aQY3swx",
  "key33": "2NzN21pfnJPWn3KuRDcLKLs56Q2d1zvB4f78wWfqvHEZYtBcr3wYBpqAhU1t5NwHvDqMriL4TB1KQec1N4gHVVw8"
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
