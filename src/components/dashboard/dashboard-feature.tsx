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
    "5DgfC7wR5V7hsF6idPGgWsdYcgCzEa1EscbZ719MQepkxKzHYWcq5XNwymKCRwwQbQhou1Wyf8GP6bTSSL49JybF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "451Kqq9ghKd5a6G7N5Cc5uV9ajqrcHz5AMM1pJyZHahdHWo77cGbfLeKrh7Kqc4nH9N2ReMjhKYJ5DjyfU3Nac7Z",
  "key1": "2EUMWoUuL9fTh4Dv8Dc2gstSysjAFYERjNsu4a9kgomMoZ3zrGSKviZwVytLPoHQpEcLekUEgdu4eZykEoG4nf2A",
  "key2": "3crJ1WjK9c7scNtp7mD9uHJLWn4WeSaReKfh1DyM2WHM6HWNry4GFWzdogxYHWK8TtBdThEXajH3ddXeCFcxTrmG",
  "key3": "DdPoyfhyyCmyC7hFKKoyDC8sVFFSEtC72Kmk4gHrrkCsm5anaN33aYAUzD82GQMnDVR9hLrBM926nJf2vht9vvP",
  "key4": "3TocnvvLmBVj7NPtTwtzyMKnH337g3CbqZHCWV1HPeRzN7HjR4NPGtY2LsqszTZ2VBrh4RrpriKozPDY3sVn8UiD",
  "key5": "3Xg9JgZAcwoKXheWk2WW3JbnSadxoEJdEsGiJmxR8NYUUV7EdbnXusB9NyC4fRNWXiiho4z5W4tgR86T3cyeDqHf",
  "key6": "brFVXYYD3MSrdS11ic8vZPo6M7LF9Ci7knrD784oKY32gJLVH6oPtdqA5Zdw9TF3LhTtTW8eVbsnmEkKVWgnYWL",
  "key7": "vLcsHNoubSJJnscwcyEJ44qWPRTBaLV74eUcEHV9w14hq3WoUiUJYgxtKAonmXkJQC4kohiTVpZLtm83pr995Vt",
  "key8": "4r4ZUnafLS1btBK3qcXRPMpJQtnY8twcHRM4VJgxq4jviyjMVixkyowVsyGpbU4HWxTeZkK22YxNxHXGnSWSfRmG",
  "key9": "Mrh5NQkgh7HQ42Qw5w4dZGLm2xTZUaCj1dRu5qP511xarvVJ9PYiAbNzWuXuzWiEs5M3AL2piJpdfM7Sq3C27Zi",
  "key10": "5yTfGcoEJq4h1CULkdYLxynzi34Epu77zRBLLGsZKobCpc3Gph74isb5FYFMoFXBNL2RwVbZ2ZZ1ATaweZFaBkc8",
  "key11": "57VQ4xbvZVLmHWPoUh6FeAuVMNq3Guhyetbi5xNpXfzue9mWsbTabygnVyeP6cYacpbNCbUhS5vqwquiSqZtbfZA",
  "key12": "5nmGLz2mUwjmb4FsDKnNGfEjSaWj1nFifFsa7ad7Au4B5c15mwi2yWL5FqtNSpxKoztK5MaqWQjUS54MxyNY1emP",
  "key13": "5PCpwBrypz1f78eHo2rjVJGr9P1Vrd1xD6HDz3s32ATYb7RNDHDrFR2PVcEwnzhfHCoheUVJyN5dZCgHsiERu79G",
  "key14": "4gSeJtPG5776MUnMSYFtehN5aVikrRPP4MSHHjZ1KrxbcBGyaKMjvFgbrWtUzRx3sbF1BPfRpfN7H6skDmzXAUYS",
  "key15": "4cxpivXSEbsWzThXx3SJT8kGq9D8C8wjKKDCRTiSCbzFBREDiEdQ7P3akEvJ1eAvahZSk4x6vPCYrxfYCWAJ6Duw",
  "key16": "5RxhpbLakz7y34MFfsY4DVgfwgeVmnsUR9jKDXmzmKw5wUxfw9kAPtycZji8ZthjwhaPG3HebdmqQMytruyH4Pg1",
  "key17": "2Z6iPHknvScLTAJfjvy5SKKd3gAcSmfX7iKwCMctg72m39DLJ3cF4DnoJGs8Y1P7wVzhdj5JMtzhtQBrVkNRKK7w",
  "key18": "51ZbFiuBQHkrQ5tEyRS1WG3XRwTXDDkA7PxVrcKThSDoibSALJteUzB5PoXZyCBpL2dffh8MNE62VaFtQYKfkvTm",
  "key19": "4dDQTbqHgjDW2NCWuxs1g1MB5SaoKcFPJ4XYCByvi3m5MCUrSUpcGLV2yrKFLbjSEyYoDGuMh4Lx6iAUowUKUvr2",
  "key20": "4R5dM15swr57xLCiUNTDPFZaxsvoFPVxrhKE8HFqZ5yqfcHB4o51w28tTZKkXSTzvzzXtsejvFiYC1XpizPcgfms",
  "key21": "2Rr4fseKJRtmaBpxTsq49LuevAAJdEkCgaC199ZM89s2eRaQLNEAhp9WTgfCQbyTBfPeucij2mBmQHV1WHz3Pzp5",
  "key22": "fLCkzBX7pB9Gk4aXN8wH9vUcGGRvqCMTNiy31A8GtsJUNSdGYBc7uyKyheN2eFnRApmshxjHcmZ4VzQSZ8juXLC",
  "key23": "5sNp6iNGchBNw3rBYQFGzHJdUeLuZvbAw5ewivbUebHWMzb2wwvozDMGL5QDPuVeB6Xe6czYgMiBwcUg8oDb3oYh",
  "key24": "4puHS9oQr136Tf7xWAhFEuF9tGTtYfeaakyhMy5duPrNBA2r3qYMrKn88M5KsWKSr4yWohyNXq8qb1A1htdCAiem",
  "key25": "5Hn3UXsTpBPw3EYXpPdZyXmVSY2HKjQwXFqU3QcGgGCLMEFACadw6mZku2exGmZBUMLEyzkLwCTh1U8GpLfn5Udy",
  "key26": "5TiYNHHmB2cYpaBDGeAWBLtPyFspVYfpuinzKkbuSx3bg9mT9dk8N6zpY97rbMRLkivxjU2JRt9RS5SiXYQV3hR4",
  "key27": "2K2LiykULwoC73tzzBh6AsJS9swPGN5fdfuqpNJDFMq6PxJW1QXxsQPeEzXGNZa1D6rsPeKBsaoHJip5o9P9bTDs",
  "key28": "2eD8uHPABQk5PYpsRxm78igK9vmbt2Ayui4Z6SqHtLivxaDxAQqjhQz7bgQ1hn9NS2cjT4qDA8Kqh2kdEtXGe2aE",
  "key29": "4vuJWabjkoCNuju9hTw8ZaaU471couLr7PhN8vdX8CAMzkXekvyhG81GzQyDUo34aJnn9ooDbCEq75vJ4niz4619",
  "key30": "3TLjUYh2b41KaQ8W8wg9zytMybYC3kMN96XPBQKtEvRGKdT9cxFkGwdyi8o3HoNM3pNkcmGjQE2EfvrY79Srnw75",
  "key31": "XmEDDRJfFCehdVMUMMC6iket68NCxdCAdbguagVb4kQCKuL6WwcnFyvCXv28BfFTkWXQePP84WscqBGUUrxFhy7",
  "key32": "63Rgj7KV3C5pd2zsvR4yndfQBK9hyWTVckgp2cMriXAjYADsBbPzZcUjWWLs7jXYRwLLmWeSfmD14xJfubjap1eA",
  "key33": "2gBiMpk7SPVn5iRZaBqMR1UzVYsezV5TASnN88PmGERirLJy7YVvwjBq7r4mJWh1W3jnh7y7By1cywuZNPVnAxeq",
  "key34": "4vcaK3LmkL2VFpMveqiEkCoJtTnx6jEj3ocZSQzgeLuUxiFvpTmHTdcpsjYUu4LUjxMrfHSBc3xDmpiKtsgcfZ8E",
  "key35": "4ZwPtYJfK912cbNHnJLycXnXiTdMQmcbF9PfLq1ZtKHnk3NTcopiRSYq8muPsK4MXvDy8D2o4Xdwp28UjU3hJVp9",
  "key36": "5yqHUmjysko2RBXCBoxCrbSsx2QbZXM53X3ZRX8sX6ddZDtNwLAHsppCkgR6eECNXngkk6ZUCCKkB1hyFbBZYgC2",
  "key37": "3epdjANqZLRCgkMRdUD3WW2sneBQMwv4oLKbqZ3nSSX8JY99Q7Geeo2KJ2NZY27FtiRGKGgpjyqAwxwKGRJx9T58",
  "key38": "etEmEHWBJBQaEGUhot8hgzLvN29L4dQGz1XG6mCUh9PHwRnYuQrq7SrZL8HBJds5dt1Y3mC42q8ancLFaYGwq5Q",
  "key39": "4AcUtsXfX9iM83vmB7uVAGLb7xMmg5rS4nE9rH9sfaYxidA8aRNcGprbHbrJwrohpWM9k7uLz3FZsso8NkHKrqfp",
  "key40": "3Hodwbjg7XoNW54ozJCVjBeitnrraxoZSvZ1JvF6E3TU2GJNZ4aTYWBScNkiAPTTZGA7nV2pqfjgH35NVqrJ4NaX",
  "key41": "5EbXomPqGhLkYQoT1paEmabSpA9JpdNMQeKAGb8SgxJ1Qj3NL2dnD7kTCjc8pQrGQYz2XvaRdWoZATPi8eJkBxtp",
  "key42": "4aD8nR4sBBwM3upM1ACBEgsVaz1DBJ6r79jPVhkstbXWBhKJn9Xn7zpLb9JeXT2CfXYrPeyoxkvqzaLe4wgHURRJ",
  "key43": "BVkgyKN3SipieoAKSzXrWSCt1senbVYE8YaGvTQ17VTJyDG6b5LC9EApsvjuiPYNq6FEKFxnX9HxeJyUPVZGs5D",
  "key44": "oxfoNarJTzjJqGns2NmwahWy9G3CiYAcdVjQbs656zZttZjeTUabb9HMJa6Vjyi3t47stUYJyUjCzghbAxFBJm1",
  "key45": "2UkUo7UU8bQuksH4qZHXnNLYPvh2oUZPqZyVnXTYaG9E4tFzKsU4rU2GWEhxQYQFz83g86JmiPLcyuBgf8iS6uHg",
  "key46": "5orhck7jJUMbh9g4uMQwf8Gm8joMhn6RCyzrUbh3FpswVs6NL2FkKJh29YtCVMCN5BE583Gt3WgihjrTvbep4cNR"
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
