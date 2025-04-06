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
    "4Jeq7GcPbaP1ySKKyJDWBhRcQ47kPHq1sucmSrKX52WzzTE85povDZTcppm9KAApugxqx4iRZiXBg3ZRNQ6mdzDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577zBbvvXUvCutLuhnv4YoVCURZcuywHvhio9JMSbpRD1jNpsVdzzezMZkQ1MZB1PYJCy21wCKWnJ4HxgmsZLX84",
  "key1": "2MUkfHWux9qEzami7Y17f4P6DbKSQbzuHRejD9wk4JiSD7f3JqzXvc7P3126eTntLgpgwXHyKNin1BUE9GN3BWb7",
  "key2": "5Qxbsv1Ye2Eew9XA4YfBMsQ3DRgVCUCznsRQGJynQCmcNfodXVG2Dw5V6icsr7oPhYMTWygBprb2VEpcQp84zf4f",
  "key3": "5xSQjf5YrSFtYWX4TpumWTM92a8xMXJEGvdfrGcGPuw1aaZpAYY8QstUpfZkFDQAsbjAqswDe5rDhVP1ry6Nzy5e",
  "key4": "3suGP9DELaijNiGWH79jtrEq8ZHbfpVgHriAz6tuLrtjQ1x7gFtRdRfHFmoM7Ear7P7yxWPNuRk8SaH9JRBuwrQb",
  "key5": "2FjWPwefEm2krCVNxP6SMsVkmU5t1GcpGXD2ZnugBmVxywmRi2HVixtAvpQi8oCTo8a4U5pjBCdejU9XkE48W6PZ",
  "key6": "26uFg7hHo5dMqFjTuDFeyCtyaDEzXi33KGxi9vUWx15di7WEDRPTtzerC6FEPTa53V5AKSq2T4fVE2va3r96ypAo",
  "key7": "2hkejqDZsULSEWdSUozvdDFiyLgwWCntya8FEVJtVcB8RMGpFvn14tacwdzyZYMieJ25XcDcPz9FgYyoccvQoEyZ",
  "key8": "5XurTzJZuaHoM3ZqyYtoZpx7YgyMH7mvSWc4DyyNzW99vSH3AG19Hdks2vq72bMxk1R1adsJPg1p4JAVZ8JHvmVn",
  "key9": "4EZQiHDznBPrfViJ4g2nUSAoTDpfrUjz3s9y7b2mspDQiH6GaSrH7STCiNqUaHRBRMQEUGvNxBcspFnfTFfBUX7f",
  "key10": "H3BYh33uYFHNa9jJ7Xr79yYMN8zRAA7G4W5to4Y1ipTa5866vbwpz7aCUokXpN3Rw781yh3T9KqwjDQ1kmSQVyP",
  "key11": "2hGvZHSojb2GLYLR1nrFfLRQ3YHg394ZCPCBWZH2XJfx5bEvtsiVnX3p9x3WY336veYZGwzggwLhF8N6u8vYoFRM",
  "key12": "4ajJcbNBL6JUEZGb77TbFox1wimJkGCM4txktdh8g2H2KePR79NX3s8WqZoag9AwLyBMrSzwZJM87Gt5UDBzz6E1",
  "key13": "47KsihrcjhRy6peMQvMKm6AwKBkUx21DbN4H5Qaj65zP8tWJS6bmDUhRTa34rVeF6ey7cyckJjRZPxC77ZR6bi5m",
  "key14": "53U4JwqUdTPQ8n8b1Yw7qAg6423MGgtY51MV33Sks2Lj41GWf475TFcYTLb5RoLsHzgJC2CxisUdqHkcRtMXpHr2",
  "key15": "xZzuSZrUx114aE7qgs9y32449u5GqK1Yz8jViHqUcr7qnihsWoW3X6hqPpnwVpXmbKc3qQWjFnqa5DRibMm8USf",
  "key16": "3kXvaDhUsGcYxzFk7kjZpSg5ZPd8BkzrHTHuyCuZEn5VuZgRZgrs5LefqF9hXQ5wPtHqaQkdj1Uf47jfFSZU91ok",
  "key17": "2Vi7PoPogyePZM3tn4jnaCaEeP3f2hdNBmi62Rsy1JfQA5UXjxv8y8m7ohJvkLoYn7rm4j7jLkRrS74Cof4cyKro",
  "key18": "4ZYEGLHgiD9nRScXb2jkaRRxBAnRf4XpF9TnZ2m4JGBKZFhrqDYeWq2z29TgwE2qEDHYJKpEapGGgmR3anaZ2hu9",
  "key19": "3bEdfmaR4avZRM1KVh4vbfTj2a9pbhGQjjzFoXdLdHKN7oEWnQchcM2okNnrfGiJnswmPsRXZyPGKqiDdq6rbogi",
  "key20": "2bahZDAYGqi6L8sWJSk7qfgwQ2WQFze8aq1pJf3zticjCBkiTbkKqaGBvzaSPTE2P93ALnAiboWMWmrALCRNERRe",
  "key21": "4vnX1pS9aYBaG97uKP5ewhdLanahhHMDTWJ6CkMN16z2sEWYRbwtST1PyeLKbrKg7whkHFqZis5Tt9sD3NdfA2LM",
  "key22": "5c9TLVoCUNT5nTx7ZEDTk4qQwE6UUaM6QExT7TuFJUvCU8ZV85DD9Ub8vq5B6fuNSuu6kgZQnYJzigtPLuqfJWgT",
  "key23": "5tTeBFfrSebu2sUd8eBbUKQYo4PkGtLL1zueKCv1J5W8pEvkWeyjFBjxPKorB9RMS1hyrjzS2EgtfQmQPU6LAFne",
  "key24": "4Z5U4sPY1hp46fSXYegeCAadT7ofN7JUpuCUWm9rkF8gQWxEqwUr8Fg26DzwP3KbsPkNN1dcbFzdxTacNoCZ6n2e",
  "key25": "mwtKhKRbi7dPZQsEKNfcyH9ABbtRDv464qXh5nPHKHdf28h17i3QTW6P5pKKhjT13g4E9XUuwne7QTdZNkEoLsQ"
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
