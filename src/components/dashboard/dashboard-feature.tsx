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
    "36yGmBcfWZP1fJu7tcvTYrCcRqD4C7doREMiqgDSdoYz31dSjij4RVUtrVkDUC2MfuC48jhnn1759xZQuEzgqFKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMqfJN1YFmykEpt2qVA8NBXaqySJfK9upKUPXhHRDesK2uDKLQRX3AGNJWTx1vCGGMmkQXEWhnNsomDdiphgTsy",
  "key1": "4TUUd6igc1FRrBHvyYceGsPudXLtP8ribyDMw5CoZPS2Wx9fFZiQKgunF2yc3DkDTHRRndBhqsSbb4wHZZvQb92n",
  "key2": "2ZWXbkdDRfLqAXCUFXv1CuCyanEzgnAF6JYfLBL4HHPuofaKJUE6cn1JHc2A4ox6jnkBLBTDVrudfRbghy8LPGj4",
  "key3": "4miuuywccL9BPHAxFaxEFz822CAWRaEohy4qzf7GjZ8NEq8LdNLxczJPoBxpSM3xNjF9LgprNC6KGL2jJg4oHsgN",
  "key4": "2Sii2PtBngGgyRGWzJBM9JaD7A1dDAnLuMtQfcAGpnQeTSnGgB73j1SA3Ea5KbeRsX6iykzNNHH2To8MDyTeb224",
  "key5": "3tQJJudWJ5trYF25Kkeo8rUmQEn7VMqSDaE3moySnuufEMweh7ok9EXzYT6m8b5LwmYG2prQXUhHbWBgJEuhrmfV",
  "key6": "3athvQhwgbMJBzE7ennhgxXwZFzMjpy5kQdfYk8YuFSa25UrtoNzSi3UZVZE8URz87ECHH5pzagHFQpN2WctWXpL",
  "key7": "4xty1Dd622sXA5vbue8kaS39QwxtFLPAwQeh25cyJUUqRfCsKF2Z6oX6t8CnSc1J4QRYtQXjCvrJxLs8s968wwb5",
  "key8": "5jMpeTq6fURqpf4Z7SrbYc2tXV98gkFBfWCmGhHtnvrtZjKBcjZKD6MUPprZamTTBkW7EMocXJFAsXAEBrCYgZ8H",
  "key9": "scgYKy5NSMpacdYPqxeefySH7nF5X9wnYCZ9cvy98sxsFaxGPKfA1FaWU8Q2EhhrVPzwXop8MQEjC4BaiD5ydde",
  "key10": "hMJipzFSVQahCggaQq2JtbBW9S5PKFEiwz5B8HHmzqTYdo7qYJTEGhu8ALKZC7RuEZ5PugVDJeAB6wDHLAq72Qe",
  "key11": "64XWzYBsDnBqMYmHxHs7JfnMXhAQtZePKUZEbiynsJqaBJ48ddMKCzMAQ6NWQ8FaRCyXePpL746nahkvCawQFHYo",
  "key12": "mLKiNwvj5S8gg5Af9pGTVmCL33FFsPFScfM3DSxk3k5PzT71MBzs34XzaVRVomWSAfpRyoPDGtZmkDENGkKAtoh",
  "key13": "3xQu5LCKMfizv8jLHnpTbzL28N2rd2TjLs6NGz9kXopogKrzdVSaiXjGYaGsL6M2HEEFEGpztt9T4MNpWeMeFsnV",
  "key14": "2CRfBHfMdusWzs9taxaRWhCiCsUga9C8PxRTZfs4uWg2F2prayccBjZ9MArwxqw5gvJ9zN2UYdYp34VEfxakLN6a",
  "key15": "3CjvRNzUzd3WXcM1xymn4JGtLGrVgRW6gEUmH77sJJR8Re4XKwWuF7X4thTBiq159qT4g2Vfihup1kLcLyi5nvrA",
  "key16": "5Wt4eMS5P2jfqGqrHy6rFyF3XHbHdfeWkQz5hhrfpQ7x6gJH2EbJJxGVaBF2jBFpcr4zugrDyBqez2Tfig43n4fm",
  "key17": "gQBej4WvuwwgULp8qN4fa46YQbBvfpiB2GDqpc3322WSp9TexRtbJj36cY9z6qc7XvA7iJMJpm6h6oavnxqze3t",
  "key18": "4RQiFtaoxjBqeFAAFPfEf8qy5orgEh2Vrj82tYiojPVeL9v34QF7E5GeRV79sktRrZp8vtJZ4oS62FnR9fhTmvze",
  "key19": "4sijTbZQAJg5xJUJW1gqJQwFRpi37WJBsjcEbUxHf3tFxEtcQrKFFgAn6uwqo86PR1KDopDAGXfaTFQrTxEQf1d1",
  "key20": "3oY9dgbZvrNCqSWcsKYt5o4Y5dss9mDHacAJYsMDSbRjLTzxtXZWVBfbaroc7HKSnapuSnYJr3TGRfEJayezSMCw",
  "key21": "fNVTVgpEnVyCaa7jtKauRZU2dG8NSXmvRUNmHa9NFpiuR1ACYjX3rkTpE6cn6k6G2a7dzkG57xigBPYfqznsQwx",
  "key22": "2XsDwaSSXxvtYF7QRhvmeY6CoQobvr6VBfC9TDkWt4ykGQVPXJUfHh1hya21vtsF1EUpXDVViYFrXCqzFxoMcg65",
  "key23": "392pn7qMLRv2EFKb7remubEiiYJsZ8pT4jj6CfU5bdPcrXEjZrvFfYkXNbWtKTH2pL3HBXyb7FyK3n5FtbfHSYAQ",
  "key24": "441sggaao98KJqRbhSyUkJcwPT6hBtsbdfhQYgUh3mHZDEpohBJRDdaPhLz4sU6ousuSvS7bFkXoeTrWMVC8gt5A"
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
