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
    "KCV5VniSsZM4WJQcaQVgvi2Ta2Zh67fJ2mxVhDF8w2CwnBczssuMyd7vzWff5PyWCVwzSaivSDCR2Fwtzfopiwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KcZ1fjmJYWKGBMb6zEw5UARbnoNc4xUzzRoGFe4uqdGkYLrPmsAZ888SvEw9q2GoWpDuokA4c4QdHfbHWRShbkG",
  "key1": "65ay6rmeByzvPR3S3rWo1rFVSQJ5ysPEpiNenbjWyhkfC8gTy5rQBmMrTtZ1imfUhgYgVX8BEmWyYmoFbykBFpJz",
  "key2": "2nzbwRYRRa3nfZFGaSsqYgYswJfXi9ye568fEakCux2FFQvdZ9He156Tc8xy5sYoVVHV2AmQ9BkstU9vcon4oazc",
  "key3": "42zcyG3jVRcdbpqGSrgtSNBTi93uNrq92gaxfUU8nwpPu77r2muizyMfLJHxJdSQthiERkHYHjsyhyNNPcTUm8tN",
  "key4": "3omW6W1DQY9D9LbyqaE4FEEMYcbRQR7ZxQE6si15aJzCNJFdKVxyDU1Hxcm7rRE2weCf6X38NjaLmtsx1F7fBkQU",
  "key5": "3SnGyDMTN4bsa6FrbWSLdssRNcUUg5c5o2NzDzdSvkBRx5cp63v9YERqXxVVFZ5y5c87ZdLEQn55RKPQHVwd8akm",
  "key6": "5pQdYKTqLiqYcyzczpdH4ByGi1WACpSY3iroLwmhf8e2xkcxBgA8inqPKQxBaWmjqeSFaPtwoGbtBxPSCrnHN76W",
  "key7": "3dBDCaLtK6iHCa5cAyc7o24ogQnfYXNa3XGiVog7xQMN86MAuZAy8deFydiV3zc8JBzZK8Y7PVuQxrbW4ex1L7r9",
  "key8": "4DvKx8V6YYCXUC5mGsXKTCx2oRWwygSopnMG7KuVfN8oFaHATh3YijqLouPhZREv47jRcktWwqAo5jeMLhrcqabZ",
  "key9": "5S94ydknrUXRyW5NreDHsBqGdV9NtVmJABmskoJRmfn1yeJpLHrH5QYjgwnW4s1EnExZpsdM2qDSP3YBcmNJqPfS",
  "key10": "3rn32wmBYgSiuL5M4rQTrudiaKL7zfmjQvhskuDwRMyGKDx43yusvvkmmAdxihnmvLMgT9zNYVWZrQru1XaNF6zK",
  "key11": "3AXuyUkNVqydQYg86pDDpTFXpyVxv9aNNCprMyJJv6JLnWJL91ZgGXebVrFy5xNygeyBLo7QFDHTinc8hdF2Fh7P",
  "key12": "5E1BRtAT9NFKYkcMNG5htFbnbyJS2NsCD4Wxe8gTnt7xzHVNPbJWvCkUiQxhRsxvfdTqSEayZ2axr3u1Uaqc5UVw",
  "key13": "5GMWHRtEo6rFgguV2xtgTh1p2FmNBDzZvAPJK3v6BP4tkmdZk2EFaShtsp8nkChVfQk2Y1ehBzqyJej24kXHnq7G",
  "key14": "5pD65TdapcDFY6X4bK5E8nRWME8tEwPCLKbXHMQowhcUDMqMABcN3GSCKEq56u1yzYr2hyfDFQSLAgGnaVeTxR6M",
  "key15": "zQfACAniE14MzDg4RFusCLeeaDzBreCzxfDsjcHDSY8JSqLJfTo3UueRUZ4Kpziw4fS2RKZKpdWWfPZ26Qdxq6W",
  "key16": "5MtkSvmMbbLKKoep4HxQ4jHqXL8jUWqyC3MWBVsRzg4v5Ct6PsG9x4evrQnejofvrWJ1Xi7tkDvEJtytm2XseFui",
  "key17": "24PhH5L3cDFDihPbnRFMemcVj15rbTDCJ1iqFjLx1aLXafVtF8WF8mS1Sc293E4iB1zU4P6MbVuFDzGQGU8CvFdP",
  "key18": "3V1BHRi7oZt3EY9u74Qfdo1rCtgM93nfc8JSue9QVT3ZeanbfG8L5jWXbnLGbYQHXWhLayzA864Qeew37VMqGzPq",
  "key19": "Q8NCjmHnHWfGG8Kp8dJyagh8VmxsgWxXPK7VgrifmoDqkKJLd7VNmw6Gt5wbaSc8mwjNZRWPsLMxp1uXw6S621F",
  "key20": "4LwYSs1gj8AfQZfgbfJBmBnxFG2EPqhN3qs8LHmKEk6sY8gS3CxrApVfmPepgmDShhsH6QaiV3u8yeuEAAtzCeai",
  "key21": "5icbkWv37d3Z3hatcQjkbKcSCNqjqha8oxHMWkcWWkrAQLFPiEhaAb1GRV4agQ1sg6F7AiPv24Ke9x1ZZ9c72Xom",
  "key22": "3aXpKmUZ4G5aJ7CFiHHe2iWBrhPGgCEL51qpAUpPft7HHNRNpFS7wPPv9rgzq1Czt573FkoiDQ2hBVHiJSDYSzjZ",
  "key23": "4bYzPpgGnu4bzzmqmDacXqmRdok1QxxuKqj8syxacZRJXACe2Kx5yvZGdgW2ATKNDfZVfpHyy25WpAYYMpvB8hoT",
  "key24": "4cjyk3GQAYV3iEXDb7vcrsAdyGJ3NR7ggXHdNNuMjdSL3g1Yj4bKiYvWSiv91dbtHrXQWMqtxyZtSEoi6adEST6T",
  "key25": "e1gU8aKc8wzdmoSbhQ3YqUmBHLx6Gwa5HijYzuue48MGJwmRYiwwfTQAs3cBePzu4mBpfbTZ3VVVbjHijY1VzCF",
  "key26": "5Woqd1xpsBuFditmYYec2mtwYo9AUDF9KUuL5VBhXvF1QLNBHzao7QTRkXXtDwiqavkgMmrE1RW2YHHXJxxrP55V",
  "key27": "M4saCBtxQE1uQsf3yPRbwt6NKxQFvFGuRcQGYRzioPw7vwab7fLzwBtridy466NbcTATuERRFRF4Xin4t7BJUag",
  "key28": "rCxcL1uQk38H9B9PcnVgEJRKwRhAbgRuwc5Ba3vyMuknAeUdGDrYMPVSK3hMLKtasgoYG8JhYTx7RG1QdNM1ugH",
  "key29": "3zT2vcvvwJMz98Q7ZqXrWWjWPN7RtETLR6U7kh1fZagkrTQhX5JwfEbL6uVG3YRhPfmkh9wTa1mtqoSoGrBbzGXe",
  "key30": "73LSFtDwph6ms9XPpKQsUvqhC2nzJbvcN6BBhy8K6rph9zCXZ8oPpySu7uU9DyBSuEM7Sh5aHFQ81BZVmnmPdvy",
  "key31": "5kEzupLsfTG5fPqtRruT1xT7oDhb3qCBSaGrXHavd8xAfSpiAZdSydTnQTrDsurfmmPAXqomvCYBdiWiVU6NJweP",
  "key32": "2Y7GAQn6JBS2tgKHX2aYhoUcSqVcCvmNaJWCnHkaRb9jNCriMQzBjngZEMY7PKtLDEahLmsVShSBWBHERL5Urq1X",
  "key33": "hforKB88rViWHqcHGK2JTDYB6ttkTXGUqbaZrMCPKNj5d7chZNEycW5DkbroV64GzUUKecBcuHygcLMwBWbxTHv",
  "key34": "jWSV1bKHuL4ozC3KwwuzJAkFHXjLJ6r1M2GXGcwg7x8Woefp3j9DxzfwpB5C9dZojc6M8kjVBL4Rk5hAF9DNgGc",
  "key35": "2mqRb8FHPdBUPkmJ44mLSpFTTuvJuM5NwmKTMtCc5WvHL32tJxHa4jsqYozxjBYL4iQwSnxJotXHV2kHu7LhjfDf",
  "key36": "3HgGXoXoHVLvGAG3y8G9rn1QCcd4rQZenhRMH5ePA1rsx6HsRF5Rs49q7D5Zdn5sM7dHUFzrYnbbHeMieqrVxNDm",
  "key37": "2oMR3tbERiMytpbMXjvob4wu1RK9KMbDgBzP5gi8HDxWdw3bRga2hNiPWLv4cVZzC2sVJf5ymvruYcH5ovrkjTwC",
  "key38": "2p5dXKSSTJ2bRVPzbuJNZh5xb5W7SmGoQpVJMAPzc7zXgq2xEkjh7V5rN29smvwmwfEDvtMDe7GDAtYurYmUgmpB"
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
