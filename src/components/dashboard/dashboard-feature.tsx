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
    "2v6R2X12E4ox5mUzUe6qEPKuJnGwvP8sqdgZ4FRDd4TQg1iKvto2KcD2dAmk1hmC5SG2pAMRLAGHpcefEKf6gNBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hn4vGLkGBzT2xwk6Vp2SUpAGShiddmZpH4nE3Ckg726PRgYkKe2Aq4npFy743cqgdbTp2uAXCbpYd3DR5gf4B5Q",
  "key1": "3haRbEWoRpiKSPRG1epMM9d3RhpxbQdn9kLoiWpArJuLemvW4KW2ox6JddVo1kZ4UM6fPmZqoEYsuJguSboSwErw",
  "key2": "2dpyqTFpxStSWuijUo49fWCQZu23mXGBMkJfteZDoYwS1MoAT8jPwEnwxupX2qUSG3T5VvzaKvx2AHwaz6m7hs1E",
  "key3": "Bzctg3M8qkpBswNZTxsLxCv52d8juaZG7RAGjCatDvTQDrgUJrswVtbmS5KZXiT6FZnvhixtKtSsdULWAYCePhy",
  "key4": "45hP3tXEEqxnpqkadbMbo6PT9iE3UJtnKedE9jA7Z3zunWCBgHh4JWxseoAqpAeUdGBTLwBQW5An79dE9VH9eVrx",
  "key5": "n4QN59WDFYWP4KXggm165cGTRLgdBwAmLJ33wFR64JBuo5B49W7bqF7jC9yMQGFXVQqnXydTn5H6Rw5LwUb6yu7",
  "key6": "2VdEZYwY6s5nWtR4oiQ2u8kupZgg9Va7hh3yMWYdKV2He1JnGpnir3E9SLTBhoiHqEvsoF7DRF8woSrB7YUv8rWp",
  "key7": "2meZB6jux89sALHsKBzwtb6Hqn5mRZ3MumYmJkN91jCehjYsX85NswinEsSeerJzKjD4hR6ESQK36iDYYaDJmNB6",
  "key8": "gUctVWMH1pCTtm25XgENAmRXt2b1SiJxcX9XZpZUg2CjJkRgpkVTwio3DMc7aJi58EWS1hjmaXdhxVCjNLi5rpo",
  "key9": "3aQH95nHicjFfgekbn39ZvZemz7kCdbsgCSHyuxgG13cYzHwD4AenG8gJ8aU7ZBjdiok7s1wVMFESYWFWueCby1y",
  "key10": "2661R7JTBCYFvTcCAX1qffKYVVN7grVPD11CW8tpTbLNRRbu3oSTWhkTsmVCiB8qGqi1PQsLmRN2i58uuNtYdzMb",
  "key11": "RZYwtLiDCAxfWzgSDZKQDz8sqW2DGqpgyVCvSujTwGdj9pQK5SM9nTkZ52gn5z1vv3xDHMU5zgFKBodGpjnBXT8",
  "key12": "RvsBawsJH6xLBUir1QVXRM6VGK4aZ8P6KhWuAXqCssV2EsB3PfZ4iKksSPRkZ5bAKJFXPwoaui6T7zB7KC1HrpN",
  "key13": "3mZN79J9AWtxMKA4J2cKczSRpbmbKgWSfWvHTZJT7QUYhJyaPUvV3APF5HZVk7ge4XexwfjiFsAAXamfgDXdfRMZ",
  "key14": "9LbNQMmYBYH162id9YoYEXhg7vE2Ab7Qph7wYnjSTaE3VWYZEq67yZaDtmiVNmNMhyXsh4htr35DDDykuvB1EdR",
  "key15": "47pr4GSp3hKZMMKGiNwMqcDgZ3fQtcehYP6GoAj5MvA4i9ado2on6tsYd5rNR2sV9cHc4mwTbEsupYC4p4dajX8M",
  "key16": "3majsnAiXvBhU5QjygrZPXjd5rEmARANJmGtDzpMkQVfKL2uxMx1GEjUcgCb7S1di3MUv1BSdgHc8yfPqFJqGDyi",
  "key17": "39NpXVkinTCMS6pH7EYkS7FWWr9tCGndrs5oLwbNmudmcY6oL63BUgxH6GDV5AEVG6Wg11fgpEXmKtQkch8vqhcq",
  "key18": "5PsuSS6s8sAkhamg1B9ffdnKZTEJpmGFdKtMrKpT1FASofGBrWU3rnhNM1naQei5Kt84TPSZcnGpeWzgE1yJpUoZ",
  "key19": "q3sfJMSuV4J2Zvt1huxL5DJUmVcyuoim15d7LBK6QwEfvng9oJoER3FT14pENMD9JHpQ4f5yY75JkrXorWei48g",
  "key20": "36fVZsYaFdyhY7cCRwqjoNq3XPZMHCfcLLUe7TZzsjvBeFCmB6pWb2nvP14HJrotuyi9kMdZNsPYJsoqgyKD3PM7",
  "key21": "5XrRifaa7WPgR3b6bZw9F5d5SRFKnF2HSKFqK9Kp81Sc1bqYyHRAPy3ukhUhWrcnM7SxA1uEBHdzRV497gbtLVdU",
  "key22": "642NsZo7A4RxdWpd99xbpvMNyZ8e38DW9C7inP5FF3amPR9UEpMeMp9Y9bcfoE8GiaXWjFobEM24F3HJYv4Y2boh",
  "key23": "5Rf1oWM8pvk69WunzffroQoFUDXnmE74skAHUs9JBSGVoFAJvWwczC6tV7FEZtxtA9VQyHJsB75n4ck1ZEUCHQsa",
  "key24": "qz9TPjFeCKTeRJ8uMWYNmLhsrTHQ8UY4NnRFBSfgFuTMtQMKcG1iRYHcMUjBdJQdgogZJik6FtFGv13JV4BmvM9",
  "key25": "4KbP7bxrmHLBAuJhkurFXgaVVDjdZR6Wv88cNBccQe74dy8dgjgRrEAQ2tyZeffGmW19mWkDB5EgP9akFJvCa1yW",
  "key26": "2JBM21uki7k3MK9YUHkUAS8euCSqvGGkczQuJED44uDomPwKv6bebJ4msTJsoBBABnboC8ErNzLYUWY8i2RdB7kY",
  "key27": "Zk6v3pW4n2o5xgEtrAjoPiRbzaqpR2hSsCtJhi4m2PQfpzLM6SEBtFQ2kMGV9r7ULt1fqQjUfQPnXg2Z2PCvpdG",
  "key28": "3PwJMNEQkdUN8kAGCFw2FSQtQgTY88jsPfFf4K1MkRgPRDcwjmTknsSKQdFkLT3aduu4nTp4nhrRk7AB1kCW6LG",
  "key29": "NKU4jvwgpYXcv4BmVGSsS9AkLhuR2Nu3n9SeVT7PbejWpC8qEnchnqajUMytJH5EqevzkTf7zZyAn51nZbUtZZs",
  "key30": "2vTnxxmNwEnEATzFteR2VUDFmfjm7Hp4LoSSajjE3woxXRQiwjjMDF29h9yWJB45rcrTeSdTeBbyE2FYP2oEUhK4"
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
