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
    "49Wp5UEXhSCjwmC5mpyPUCwFp5Q5REyHDEWM3YSeJYfNe3B7nQ4aAYC8N6EvXpa7mBbS9SJ2Y1ajFK7ySsVn2WKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ep2tR9DSz8XEokLAP9h4JCKS9rHt33E4rAY931ZZVirXqmmsQnQQAeS1w974xC66e1doamHrWBfTmQ7xMNAFf5p",
  "key1": "4qnBXPDvMd4xdBX1LgUKm1gzUcWHY1bQThQUC93nyAdD5KfVuC2x1hGHg2ttYd3KWAoQhSBZS6qfv9FrQDa5cJaS",
  "key2": "4FEVDYiTmRQCq8bkKzrm8wKdWFcTNGWkkvbsd4eHVTzmVHCSdDQufPmU7eGHoimV8w36tku8cTD6n6DKPYNEvpaP",
  "key3": "2k4CQqcxiimUMiULdhMVRsS6a9aaWNUVPKKg4b28zGCjcf62sF6TJoqzJkP4iSxcnqGevp4Z7JZNSxMSmsXLjZ6s",
  "key4": "5kgxeFmEHSvUvSnuxMrVaJytnfMks3He2z8UsCA8GdAwpuaCFwu7X7LBArsM52j2ZmqX5qukC9CoZE77dGzMmDNc",
  "key5": "2YcCUsYpdfSDBWuQtTAGon8sKgppXVp6V6Acw1EUgamQMVLYMZ8J9rjAtM5UVqiHomBWJehkq9Nfuzvzh6uE7xCe",
  "key6": "3WT86fuKFgzvJjQUw2BVSqTU7hAM4yBRvj8btKTivt9SAA8XBHVT2CkPW5axPAxJGfahJBmsbEQqscoPhAnz19Bx",
  "key7": "hAUFjTd8BC1KQ1Ux1z8m28aDAjN9rXedULnuH833YPmebDnSf26izSuadkFCTm2e6UChMMNJyG2g2eJegLjFUbs",
  "key8": "4ZYunrKxoM4FawrGhfBkEeLJHVurDf5sPRXVRjXhYxkpFrSFwPgt1nzeSJPds499yNQmLQVx2S9ipPwmQ7btFqx9",
  "key9": "MCm68azwwuPoYkf1maw6tPe9uqwYsodv8fEM7dHem728rGFyQDGHS3GoFXLwLXAaZNvH4wJ6EPowR9uggHcHY1g",
  "key10": "N3UYWAwYGdaKL5htZExMPRFpfxRTKdvZe86xv5pARpGJUzqSRRnMRxEuFWibxDNfn4XyGuoSuj6ENamtNsk5Gur",
  "key11": "u75RNpAjAAxzgbYVBfm4NHM4s3P2R7xPTGbBAUcMq3VDzMmDnzsiwhngfCkAec3iN7yJoRnDAvMAver8RTohd1g",
  "key12": "5VQCGaC4MtHHpFKEv7d87rT4V2cJnkMviK6Lu9BQW9RZZTwb2jp2WEkPmw78sqNbYRQADaG5kyPuMgSuBDwbPgRE",
  "key13": "5j724REfxpmRpWhnLqaCzqgU9JhfPCtPaV8Wnud1otQ6hrYoEKAdrpJnGNRW9L9mWHiKTwSVvagwbv3bzWqZZBqn",
  "key14": "3zLQUb1c6CEUeP6D9z6NWLHUYDHPeSw3hPRKnbjKgtNfory35ss1na2pbxLDir6VoDZ5FcB7gHZGbC7FzGfXG6iW",
  "key15": "66svpuQdXVCSrfnjZ6kPZ7gwn2aWYAaueRNEd27V9tox9rQ7ZozivfQ7rdk1rCUkFRjjde3e6hRuuBx4ytZizW2r",
  "key16": "5ve8xtAixeEneEBm5d4C3fKr2xnBvNM8scxUdBiJBmmUNch8axU41xG5o8UrfLbReDUCEJ74qQQCYugqoK7CPkp6",
  "key17": "5nRq4yfinPsLPFUV1yruU5XStnTAxCdbyvPXBbBEBBw1pSakDeuDtbwUrZcs8oKdb9kFgGWZdZjU4jfeDh1eZgYX",
  "key18": "48r2kWhjXUHPMdKUS854FYQ8uD68Qz41zhFczP4rgquiMN1yCD5dSVKGcyjzmYfKVReke7DLGh4avhKE3W9n4KDb",
  "key19": "4Zhvy1zLrun4wHs8bzUZkoEMYTby9yDaD6v6EqfJPPAeVEDHjWN3RnoaWhv7pYHT7zQqmVTRbdfCtyL6eN6Pps9C",
  "key20": "seBMfCYYYQjXNcEhDtiQPNc8fFuRt3QLesPGJVqo1rEgvRjJd6MwnnXKUz7v1im4qiQodwyUtU21Gf3vYvY3jyY",
  "key21": "KDwD1LUz6KkYm1iiK8H1t4Yzn2Vzb55SdmFKcbdcfoEqLKy7eUAVJbqW48p8A2tgoBm8wfDswfKDqxqnX4tCZqu",
  "key22": "2rEEYeFdZuuBvE8ohFdFsk6d3hvPgEsy9taAoVdhkgQDqur6SwyoZFjZNVSHC2n9LRFHm9eszo86MP76qZvp4RJg",
  "key23": "k9war2GXMN45kaqcMBG3kwBgue1stwXtEUCJGLDXfseDSM81tsbPuK41i2gwNcWNzmPaY8ymx7tVpyhG5Tqv7xa",
  "key24": "4xiz9jxn6Qfuvu5VLi182DFzVvYJ9RJEUctYWTiVRgvHnxuvCTe2TcsJARTpHM5VtNd7mcDeXw3RTEWhQ5F5hUgo",
  "key25": "uKGvQWdWfqcyQEEtbsxKhoNCxdioQwJB57Pd8FNjo9y38TXC4dv4WWmgKcJwqR3bH9KyouzH1sXR5Y8q9a2w7Z7",
  "key26": "24vGSx4WWt21NoKX3vPpi9mBCyRkAHM79JqDagAtop9hnNJ7mctdhxhWw6bavAf8sWz6FsQKeAVxK86xv9FHRtzY",
  "key27": "5p97AZmZPZKAA64ySXAZc2zRKFSn5YJ8CmUySQUsWZS1w1wECqAyFUgXdJwq3CPvXRd9LmGvxcN2WYvvQ9awCkEa"
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
