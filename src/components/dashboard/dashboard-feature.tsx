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
    "2iTVQZGEyKyyGNHB9P5ZWusShYRQGdiDHbm1X4PtGY29hYaU4mxrhM6g1J9nCkXDAnV8E1bAUBND3FHUu2WxCfRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65e65Ugiv6wUptr3FfWwnpiBTe7gQ1rbt3R9dahWibA9aGjuZUYYnCchRP1W5y86RNXDevMF8piMQStRLw6BwaVT",
  "key1": "2vSri8S3GwJ1kqGKFc1uFwUtEfrTddBYBFkA3RDLQpnuFXGUU1Nd1qFKk46qUvU6Zi3hsotipWWtpCMGG5fHuQFn",
  "key2": "3Me9vunDD3V5L34zmg8yfRDhbPVV9E2q98ummq97iHWYwJ4DWmiAtCTh9WGoyVquzFtawzNEpRRgB6jaoK7uXSgU",
  "key3": "2cqnfZtonPaGeGXTVysWrBBF6Jo5AancMo7DAmBQUdB4zZZN897Ex2UNufNeR5uqY5qeUFRJuSFmEiUjKg6dY2Fa",
  "key4": "CwST2ti9mcFYBrfvBe6T2DFj7CxywpNoJ78z11N5tEGiPvktoxwEv4ndJPd5f9AdjuLWCkcbau5xfBsC4SdWGHo",
  "key5": "23bAVa72nqhAWTacZ4ypGFUjZW3q9VxQbF5N5eLqxUf49ETix2YXzcYi1dNJ9ft6C4Jnt3VzwePFevyBobae4ws3",
  "key6": "Xt8CZY55fWNAgX6d5pjtUWpYh5Wu21VvkepKXySCkiokdDWksw3Jn7g7e8FyekeKDby9t5Q8fNT9uLw8kryKzpA",
  "key7": "3ph16gK4NbAawKeZa6cSUVqa3uAUowstXBSKWqKneAryziYXLNWje5Db5V55goLotH3qHycQ8r4UpR32vprBYSzQ",
  "key8": "3eY5Bk38BJSTqQiSK73PXNhUjbobGQbuuobdfrH3c8hct2eRoyp7mbKm6s4j3MbatmA7sPKCdcSeuxtZRt8qQYQC",
  "key9": "2Z5oWn6ns25JHKd2VZt4xMG3R8GeQqdZEDz9hFvHwaHtoMzFvirgrGNenxtstQ7Mv7rEXj6ZrLTZAGPsA1VyDT4w",
  "key10": "5qhXD3onHBZe7sFKrFtTGC5CnFXehzuNnWpjwAe9dXTNsCqqHSgJv78uNEtitd8VW6MQqoWMFAMSsNk8yCduHaW",
  "key11": "FAZ7QWgghN2jpAe9Rm3MsQEMHmuao8YjWyym4XMgrZWjDDakPDLEygU1djPQzXeuZftnQdY9QMESBz9qowwvQ2H",
  "key12": "5fmRKNNAcDqKPnouXffKZ44BbeGXsBt3VGGm9H7Ti55dcFssFJNuhkbmu14jocjEmP9n7wTds1HA3HfhYNBxWQqc",
  "key13": "32k2LS8iSY8V3LsXxuwvxZyk3HuApC7PnF7G6fJLw8AXcvkjsUYUZi59qnCa6D3je3F1tW8L6GKEiRoXi922rLpU",
  "key14": "3x5uJ3mxPFq1FAtJyZUDPHEADaNbNixyPMbrsi6wt2mrogvmRRrVoteURVLPrRURup3vmA2WyiEBmfrCV2g7a4Gg",
  "key15": "51b5wrT1owaguz6W646b6bZwHHUBuJ8Tzwoxx2BWVBAqPAa2S5YLyjHDCrkNgcFpEshX8rLK8rDhBwhxHqHz8jVe",
  "key16": "5NFs9WcgtrwjyHWVyUkBcNGdWzGFv949gQb1kqjnTdiXNeh1bc7aXrGLr2q9eeWkLTr9b6x2FjHX1h2BrnBSQSz5",
  "key17": "51AMQVQYtFHsu79VwewzZU3rbvMS5cg3f9U6CsXSkxVwyrFYBcawmG1T53ceT3EYTUMfprRyBQA5wDenLfXfHrhY",
  "key18": "4nmaTAvhjj6xeZW6JTaft9zekL7UPjpaw56kQbDRXxaSA8ZmbqWq7aRGAgUJv8AZ1CDdvtnUReTnhjDVcWcmiKMY",
  "key19": "gxgnfwrecqyamdSe4PyokERiAcpuyjNPPTiKVCxfudBFpSCHbi9Gq2qsmmFHDMpM3AZFnBJUnn8VNHNrhY9Nroo",
  "key20": "4bs34V9YozQVx6gQrRZU3p6TpSEY8J2tY6HWhsanJhc76nT6YrJjG6kRQe198e7yADC5UvGEZCigpfReBkyqgHbg",
  "key21": "37DPuQSjSvGqxXFfeztG4zXfcUBQurDmuYmswJJJnZrj5LTai8yBrKWBGL6287hKhdQr4RScuAoEt9Xa1Ly1zxCb",
  "key22": "3EoJH1hhSAGFcSnC6jibCXXTpffR3jNghVpx4YiREx4QtoxCFz9x3SjWjXghY6isGVYY85ND4caCE9PExFWg9bJ4",
  "key23": "2x6m9yYcvpdGk1tXPxKjJRz9r4AaBroks3uWe2MjsD76oE25z6QV4DNgZ9BY5FXS8cF5vsBdpnFkxtfxxyazXBFt",
  "key24": "2cKbd9hgVx78eDuE4gWLSbmUTxQ4A1KM5NAXuM4RFvst3Ygm4UszHFSSY8RJM29VPq1zUkwQbJBsWZj51F1vrmZ4",
  "key25": "3cPNoJy5S9osdtBdJnsXPy21rkoyhuTp5jcrP9REtjRcpqVaAtXXotymM3VCZwXTo8Y5LiXp3qagKKM5YyUGB5RK",
  "key26": "4VRiJxsVZVKJfa8rtPdYe5Mz6Z8jDWb7tWQdhJ7wU8Q6JpQVF3JQzp6eF2tRtrNAqmq1TW9s9fkc483rhF2z5253",
  "key27": "3cm9LsdBEp8HMBdr4htXh84oTzfwQbcc3QvHwzRx2xzuE4actspUMXnJ4pM5XNP4mwvtzt3pgWaUoX4NNcKeYH2K",
  "key28": "24xihpXcVWdq8aBMXs2mxQKsgPhzX83gjg36Tk7P4f6eFFvnD2V8xwgasvuAiVNNc8TRVNTFsDxJPBVhnHtDN4p7"
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
