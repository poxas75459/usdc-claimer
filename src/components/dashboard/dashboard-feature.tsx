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
    "3VTMHpEuGLQ8wnThJKTRG5Cu7YbEGD4LdJykT3Wj6TsfttbwaY6AbfqraXtCiJJpqumv7r9jdnjZDkQ2nhjvfeC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25kHuhLHT9QHhm9VgnzBDABwQNgK82pqWwf2G8jPXo6rEUTM8Zv9Thcpqxh78BZDWadTsVQydiAMdxWdYUXg477n",
  "key1": "pUMaj6EPrMfzs1sMR4JHn8uUxqfq9HMZN9cEBAxj52Du6EwatEB9vATdWVFVG1wy4o7B1wpS5tkk42jTaDhU9DE",
  "key2": "2C163e1mVRRaF7L9vBMyWfCtcgSm9BspvDGGBmEmGsY3c4XKTEwvoxfe1eWuKPAcPvZmDap8GLsn5e33eGNf1Bac",
  "key3": "29icGhMrXWBHMVPUfo1PpQc8PA6WamLifENMiRYKBbuwMa26xKDGs59jcJUhWdB3q8jTE4MBVNAaBT1UCVbXUDAf",
  "key4": "56q5JPSJd1W3waZVEc5hsVGHesEV9WtbuYGmCb4eWsTbaxGEE3GYoa1K2EqrVGsYndCXnjM3QenrL5ZhbbXLyEca",
  "key5": "4oH7hmgBFXt3hPjLrXdoEqRKmqcW9GncApWvvsChEsF8YrCNAraN27wY3uv364cbcie6thZcDg7gypJMY1XndsSk",
  "key6": "44sUvv9tvvbBmJDtuGrnAdWjAQxdP3Y5bBxThPhCvuTHs9D6Q54zBbzgMogFvPfQJ4XhAkTNCDbnvo3f7NQb4Put",
  "key7": "BuR2kCPdCDc6oyS3qKZrB79gPKpAH7LBsMRhauXrrFbCYjZPAHageSVySb5gZRhbfEpubSskRTPWmLvFvngUUVU",
  "key8": "3XrCRqTo3Jirh7YB5hZDw7haMHEqLas4SaKUQ7kLB2mWjf6Fs7ztcw5gDYDtTbnidZpTwMxn48UBWh2VKSSgCd1x",
  "key9": "cHLHUbvF4zfgUHLUqS93D5fFc3Rzvgt17wMPh1AoAW3J8dm5wC13W5tdYruoFe3us2r1Nep3YSJFAfc1znshiis",
  "key10": "5e3YMFZUdFC4mk9sdvViKyWdXhUWDYvHKXdba6AacwkVBWkoCh37StMJTU1qnCmJ7eKsqs3EoG5mAzcew3958MPF",
  "key11": "3wFAJpDT3jQSKj1tHktfRZR7JWExj5V3SC1NLopHSspTigQR8EtinRLY6ymb7tLN9oG59h24TeLDKDaXNS95iirq",
  "key12": "uHj4QVKkLXM7kZJzCt2w6TWUwhySoWvnHRm6UJtCV45VESre64ahKScXvp6JXgZ6KV14EaRDzZisMZom8o9JAZi",
  "key13": "3ir4bJKcvTmfEKYn15LuTmLb5Wo1GxpqC6hDCyDc2Dvimh5khSFx4ccHQwxwwAWFBPrpBfJQVThgayMkoAFzS3mx",
  "key14": "3KFv1n9aouSbjjQgCo3eJrCzTyGSJjfRTgiXsNqcfPdsDVY9brwgNk7kwYq3xk4sMfL4Ln364Cr33E5ykiGxcG16",
  "key15": "3EKMig9XBP6DUmVUiYA6DgNUnDKLdfC2Jb6sp4nhgHgEuPs5JNnktCVDfF83e2B7fHCJorEUTTsfst3YEYF5bBTq",
  "key16": "5h2WDDsmymTuxuec5udtuNmAMPTauGEvZwH68kAhLb1iPbiKZDWc395Wndpr1nnzzrNdgxubezSo4noLPJUG9jiQ",
  "key17": "4inPmgfTYpiMGc8QTvWYJey3XeEKED9RwssTxXKZgsSAnrCv9t1B23NDQV7VbjpeuFPdpU9crtGamEQFGAr2E6jF",
  "key18": "55ETkyiR3Vfhf11PUEpydBK2yRGSmzpyCmDxj5YYXQViPCbwT5LndbbSTKk3JjCNnHD7CusXNdTqfizScXY8xAvM",
  "key19": "JLK1YVB71z6aHAjqd6rAbnrhVYXPEmtv4jkGVDXPuGepTE9LbVMLzEi2W9bdD853BVVDqqJ1cXwWqEEjNingpuQ",
  "key20": "2W2P858BaYm2jBM57HrDk8pnaMsaKDnRCbU7FMpxbCNnSAPHrM6oUCULQUg7ngEEHneeF1oaiG2jG3zXCjJqbs5v",
  "key21": "4qJhdpuYi5Aq3PxPcVq3tkKMeUithLyyGq2GXxbWGGC6uS8npMivUkeTeB5L9GpgriG6twBm3XTEV5s1njiCCZRv",
  "key22": "AhJqqho61MGFzdUhH3YnYhNhZreGyEwntvy8vnCjMsP2iBZFT7dEacChsL347vUEqEgHuUUHdt9TRVvfrHi5P84",
  "key23": "5XYA2pH2CXghXXgs2CXXx4bYPMYWk24A3zVpY1D8QNZXAxLdaKy1JGLLCYahr1nAJjtAicp4C438MYJTNgL1Uq4Q",
  "key24": "3a7g4SgQv4EYLfevGmXmq9Zsh2wbMXz6PqMcSS91fAjx21pE9gEEa7khhsNqRxMDBUt9M2yWjGANca8RrzPLikhF",
  "key25": "53San5Cps4hi6orVT8d934Hpe2VDMhxqCNP5WLEiGH8L2TRmnuNKDNFmLU4osx3XvyzJMfWDbSPAsT53G9aPAM3F",
  "key26": "4bJKceBRDkiFaYs1pRr7zkGCLQJuKDThteXCyY6668gJY4ax8KmnBJftN9dVeFZWuy7CQ8DfAJBFfoGSypGZb2Vn",
  "key27": "3aYdwXj7accyoH83nJRRiMdqdNbaeV3syoSmorr6d6Ywayd6pdWzFgEGZehaHWfh8QV8SatVZh78ET2wVDSU5P48",
  "key28": "4WTwxoDwgm45LzYFnedUCspYk2c4VV6KcyDmDGC4RW9qFJTnJwETVPa2y2tMfEBVw9VFGaQDGrbCNkYr5XBhJnwc"
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
