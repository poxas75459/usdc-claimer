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
    "3K7MyrZGxFsbC74VBnJY6Njs72SYhpC1kCm2qgwNDtGNGc29pt8kcAasiiw1jcXNGW6CNj3PVNPrCkNATwCkf1C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjFw84J92NsqpHdFSSXRmnw9BHiSqSB66kyZB1E5zTQJNhJPfQoNqNFvFHsV25YXEyM1AwLJY44PkbhjtTomXRg",
  "key1": "63ZjkktqvrfPysymaHEUeh5jfbmmaWYjBB81wLDJc9gHBKagTFLumbUBg7hpoKUqyxHctDdRrkT6v8bBXX3wtb3q",
  "key2": "mXbaLESmcNxoaBhup1vGQuYb9o5bFYVUrknq3CSNsuRychsc3WyV1pRbrDVomt2MyoY5k8xKyS3FcVCz4WzS6ck",
  "key3": "2rGVfpMm7y2ikdX9sALxJ53ppRxXNqkpHd5ad9EUy3JCPfiJy9QsQiAcuLCY3KRfER7CTnCHgtc7koA85sQt3vWM",
  "key4": "2oKNaPq5QHvYciNC644whoEb4kMgKeoESBRgWYh5Z6nd4mMZbcK8VYH4Qc5ZvzDQsyjbDf3kX3LVqTQAQtaaEBFS",
  "key5": "4B8eKuu9LP2kwYtggzSin1J9NNTCAG5Dp5ZQPWAKHmMV8Ao5QuuyV2RJ8iFJ7ZXDiDnQMRtAXoE15RjyvnMgrwvs",
  "key6": "3RYdmU6Bp9Te5cUKUtbXqhUGNXwVNXuHvRDCST8ntLdj2v3yGhMFYE7HrWMNnVPgiWLT4XrURe9fdHKNi4jLVVHY",
  "key7": "2Vq18ZQdFX29kiAUTyBmLedfe5ajR3TMLwifKtScD5NYxbsXHLj5CMGEpqvF4JRmmUid1v9SwCy8jV3aSvSQiLtn",
  "key8": "3qfe4aEN5oYBU9gFXRhv52i6M2SLgo8Adi8o5wJidoLU2fVwe9hzLnLhEv34fwjHxPvp5SDBAmJfc1WGcTagmKvv",
  "key9": "65ycyYFXxbshfV6ZwfqMwnazRcxj9C8SRjNWjLxj1iZgbsCt6te2rrkCU1EhKUgR6TD3KynCc4dDMaK9eGgSGxp9",
  "key10": "38exJ6JeofprGdg3z74FVxH3mvCSLnWcCySXYAPwvtmjsnHed75vMoMitr6CJe2h9YaPJSjQVC1gatrZKkVxFjbW",
  "key11": "45TzPRXztWRLaA3gt6CEDeeaHdktXRCLn6hEt3YkaE7nGhdgLuQ3vQbksNmbwRiuUg6LLEZy5MkUn2FK5bnRRZXa",
  "key12": "5VH3T1qPuW8m2a6U7ACCYX56Xzf2Hu58eADTiuDaHy1BQExXvPVHXTRx7K9KRdVgZqiZA7BrLcYByDtmm234XCo9",
  "key13": "mM3HM4djTjxXMSGvTx9oTbqu64FscyfW5xGTde4CLQZgyXU7r1chvH3jfZXfVLrHvj27LeHQ6smgr9oaEhpE15n",
  "key14": "4poVtoTANw9uDn7jaDGxSFdWRxo7pqDfenagDGGC4YPCHrA3hFhj46epE38DvNNh3G7AR6epV16oz2jA5c1QeDtw",
  "key15": "3muKMBMJhgZSssnVDrfS5HiEtUecrkbznbWCDQdreD1sfey75a15Cefa55kV1XJPrhFZVPaTCGCtTymAzSZU5AXH",
  "key16": "4bphXSeSJCyWjVdvgJBj64Y3UDzdJkZvBo6XcmLumTVSxKHdXskGvBPYEYDuk9fCSaxATUTLqqSZzwUC9J8Du2tG",
  "key17": "2EsthMZi13QZWXQUZHZ2yfY6dyHjMUWt5SiEuv3RWoDib3EEATdJ66FsFtJx7EYA4NxxhupodYkZ7ZVXFifVcWwW",
  "key18": "5fXcbZhLHieTHLeUYZEJaWmuuUb3cFXdJPH1tHWb1K2iWZk7qbC328grV2C8ZjTLGeBqV5eZepBLYc29yaVDchPj",
  "key19": "5o7LeZHCfnNAxRQMrngMvVUTtns1MBs3KedmUFxLxQ1FGxjLTVstqrNf62k7GoXGMcT3VnGT3g55qLBjUUcmuAnq",
  "key20": "5kwLru5A7nEZsyaWQm5UMPAXcJjyifPdxQqdBaaiYy7vNr99oTZh48ehGe4Gv9jQDoiWtZJceZf1Y3A9irm1t47K",
  "key21": "49cdf4fsXVhoiF8sZ6JNbXJfyxXQrF1SykYzxYXzyfFZwwjrukUF76X3rDY6BwsuwM8UGuZbTHQcYKpBhJUwEtno",
  "key22": "3hNMkgQHQD47EE4F6n2GudfbhKuMDvTvzGmux5tthuxyLq5M4yMGC9qthvXUMw9giPyxMBFKqfF5FWheN1TZUTBw",
  "key23": "KxX8RetfxTQZdRUa78L7cNGosGXVyxZiGfXRmuT8z2YkySx4HJmeU98CmQqaGwwwEbCsTZxLcawDFeJkZuhWQGx",
  "key24": "FRae4deB72heKjXghHrnsStcEbNM3wb8cYNhnppLPadtmv7vq5qqhsdKqzvYQK3J9YLjfXdxwfczwD2o5nPQo3e",
  "key25": "5svr7gmo9Nx3wrSPUbF1CFNkaVVY6Boh1chuvPzEYKu1cZSJhT5k5LycTAx4DTMoSfPkevm8CPX8L45qynCsepS2"
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
