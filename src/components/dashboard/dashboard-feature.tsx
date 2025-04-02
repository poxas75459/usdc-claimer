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
    "33t8Dkk7acSqk9aEtxZoE86e8KPgfwaNTNZyjBCmrLWYQ1axmxmWfGxPdtWXYLU41ZGZJTiAAVGe1mqcu1sux3pS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3toHSmbicL3RwbzpZs634LnTRP6jnasfMUzJBoH5nVP5H38rJK9dw6RcmqQw8i8Bi54grko6x3DVbqH2baQVLaZX",
  "key1": "KPuAVmFBwNp377uNuCie6qTEcqZH5cWtRdRdR1G9h9wJeGX4fSfCAhYBdwLzN26wGT5hvh1eq96xwmgNoyZBhdY",
  "key2": "2C5GrJTbCT7kFoaxMyxLRRMp5SCMdNiFTYHUUaRB4wSMPWoM9YkqboBu6TgJ35GsqmP9AQbgFKVAqKU8Ubv1purm",
  "key3": "3NW6HmNZ15YA8uQrSa5TXzaSq9nnWEukpgX1jbfyPaiKnDBNWJB6J5YgugUZdrMGX1odzhBeGqkVsdFXuPGhhaXK",
  "key4": "55NV6B5XES1jDw5Fh8Hywvc2PBGo4WwWDEYD4u7qgha7wkCZ63C6BTRqhGMiWRtvN1jLavsRXYRUwVfRJzxNDAWS",
  "key5": "63ZtTqJyAi3QKp5X1kRpp1b9mrmS2W11ijMbnVYNFGYKTNodt6kPvKt9TeYbQsfa7pHAE5ySyr7DZ5Nq5MXcGrgY",
  "key6": "5UvK8JsuNNd4vSGCEJUcePmsezxzeBxebiRu72doftzRtiSXZWd6wDHPongTBRkue7wcKnQirwQtGntWw4s849Ma",
  "key7": "3PZKoSN2pRkbsajdhA17zExiYR11SPoQgEWEVD9d4usi9BBP9LVyai7Ujii17v3Emrae6tSTNmFZyt1k6A7zamdL",
  "key8": "2ZBGjF3GtMHDH6iMT9BmNkoy8dokz62ejTKYUUVCs7HDV2jVRiD79uxtiug2mtu6HfbZf7h5QAvNME7KwokxtGMt",
  "key9": "4x1uLZbR2ntoGBgQcQkjk5ebnmnjNKGX9aukX3HA7vhMQdGiK3Dqtu159bJBPz15LrBwvzUqe8hfu65sd49pbQnp",
  "key10": "4udKdkQqi4Q3XNvB8En2W9wWZ2GdwuhMNRoYWA4F6i5jTn8sAnhpPwnju5agfsnujn4Xx4qmU9efw6jYGUMHJTx5",
  "key11": "5Eygbq1CfpXBVP4W5e9cAE3Fs4jSgZMMPqfgaZc5nSViFaDD7pxP5RGm7BCB5Gk3SpTs3c7cN75fbbRrkx9xvwKL",
  "key12": "2XqD759BeV8nf1vVmTLPGecHnvVo2oMMwPqsvc9r2uSZTBtWiSE4CxNh9aSqykvc5cni696NfFnUptbiXYFj5DqS",
  "key13": "sNhiL5GxjmobN6tBkrD5PgNEM2noiGASy418mPtwDXpni2z2eQh9dhGtTUgguxX2iMib2z3aybutGY1kPKKuUpw",
  "key14": "3MaZZMpBjJfSCs759AhVySMCXarfSDDF5hWFmZd1Agy4rMq7kA6sDSg4EYse49Jo3sDy8oCm9nCViR9B32YVeUvh",
  "key15": "A4YhN8TEXeTN5ii2JCz2bt8kviFgdEYM6JwbxH7KJruGSXp7niA1bKngqXomBimYSx2itWzaJBjW19QQhvikuEg",
  "key16": "3gT23h9KbEN48D6jZAMdMw2t7vWtz71wxe8YdqjcdLv1GRwW6epDLpwhoxdgjB26PnyzdE6rMufhCMY3Y5dZR59Z",
  "key17": "62F4NQoYQLMr6N7qknHCixyPkN5wdxNJbarZ9KAczE7sXPG4HvjXyDJ4dKx1144pXiwU8NTLjijVY9DeyBqm2GL8",
  "key18": "3ndNsx3JpBWdPbM2bn5xqPf3wALfKA2Tau1vCpM8peHUvgcGvxMhDuHwzUoybQ9gcux8e6SBrYLqi9BPvQWWwfzC",
  "key19": "Gahgpm4W1o8v2SFtx8iLxnircHrPssP6XS3UR4hVPscPrp4qyCKxiKELfeDp19RwFkGn1PPNWnArDDeXnT8X6DM",
  "key20": "4S9aZP9rhan6J1DwcMrEjsFkJ3URBDSCXp2wELJrXGuGCbETjWk4zyEhmrU4G7odUxWKT1KT1DxPvWAEhpDSHP1B",
  "key21": "4jV6P2ybvrJPMH8cNaMAosoPMG5KcoHogyyQ19wHs8TPPQDM3bP84mqwFAbcuuWGr55VvkQ7Mqi5yLkKZVf3BSVm",
  "key22": "65LhCbzeGaYTkNCPZ7ktoNUAujijoVzc8DSAETWc3VPkaFfQ3sF8fdmD39YW9DXKe4nbNyzCcLahYNdxdfP5vPhh",
  "key23": "2enpXZkWTdd62pFmLfXT538VDiNmGyk2o9LMgLZ5uTJeHCmt5vkx4fMKSAzZMnKn2G7iGqka9eJRBv3vLQrWEskz",
  "key24": "441kBysovrZHcwJhj434qsAJPsZUCwrmUpSrdRuXzwTSpgNmNxf8XdqbN7kycbRvr8oXEzpAUtEJ8mfDocCNJvig"
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
