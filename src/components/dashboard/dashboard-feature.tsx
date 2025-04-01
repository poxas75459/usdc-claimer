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
    "Wj1KLzCn6VkdoJxxsvRcCDcSENtLQfPeHP1qKdQTWA2BnrjCZEmFLgn73dQkBgmXHyHkVLRJv6NyvUT9sXm5NaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7RfvCYXSafGrz7TyPhd6PepgP5SKisjP2mTwnKxzrgZKrYNFwD9ADZxX3ebM6TceVeFCR1LJFQDwKccgz8qPjU",
  "key1": "4nkXgW6Q7jkcma7dWVbcsSugT32XKXQATRDfiuZEHdPMa41D3PycMe7rWFPcH6e3ThiVBZUX6TybxSdzVoTkRPFT",
  "key2": "5BwwsJmqpE9XvWTcrnUX2PJ2pjqoQ2h5dsDcMMqGBciUvX4q3iPLrkd4vDABQG1vM7etSWwh5kfSK3LApGMoC2bT",
  "key3": "5NhPa4TcJsFpo4qaqpnU6dYpk3iwWqGuJVerHmmeXmUb1bwQDQ9nEtJaAxPVyTWF4Um2MK8GyhrnrZcgkXzSihnR",
  "key4": "3UbQNrmEjrNtbxK965VSktYBMZQxFurABgdKGpuHU8cU8SW2rnS2ntAVg9NhHR9HwqA8zr3KqMzmXgt2KztHxYk5",
  "key5": "ukWAPDZrXyvViqPfVdsNNkjmGCy3XZyygSKpsHPPygnWeNr6mTUFRAgGotrFZUCxLHrJq4YUJf6uthfto3wk4no",
  "key6": "2VmnWbREwk3JMWTHh8rK2NhG8ksk3kavGorJS1J8sFGzCKCTtYo3srjrRb4NjvwSPrak3tLRoQ6soSdBDgBJfE39",
  "key7": "5n8A6edZHTQnPakJ3WqNvU3y54CWoGLiUxWPr4fmZEV5QGJC5dbwb862oRfHwuW66MTUkL8g5tQQvLKfLKiALMi4",
  "key8": "57FLVFQX8kFY4y7JM1FRoKBqG7aiq7beG1X3GqfToBqK3jWxPKiMBAuWw9iSepz9M21ASazLTitQMyG6BanfbwFf",
  "key9": "4u4qiqdnsEgfYFVJKE3kVZvBdrSHJYo8UfeeypZBBFKzf5Hy6KWjuq2V9zBgH28Rgjs8L9iWtNb3w8gdcc4awxPd",
  "key10": "4bMSPeBaJ22GUeg3abJnm5vnaUytwvYJg4gh5nz5pV3kbPey7fbai4PZzW3gV4FJSkyby7hr2QRB7duQWrVgQ3sw",
  "key11": "3S8P5HV1iUtL5VJwsN2njQiUCSv1Ss6bAMVt1RQCh4aAbSD8URzzpm2uEjpK18LnHxeLzhjYoRFmpEsTrEECQmip",
  "key12": "4f8TvwKN4WcCSxN1Vi3GdL3ATjh6g9enke4VE2TfzLohowGGQ3owgukcvXknx6p9g7A3Sic4SzfHN12Zgp329dCn",
  "key13": "2hZLxAKZPxb1asirPHqC73RNMdsJjB7mtpLNjgXq4y76jYhSCJ53BYW9scVPA6YZeCA89AV9mu9cFMZ5HcGUxcCw",
  "key14": "3DSmu4nKH3tZ37AqiBQ1EGU8uVguz9n3PECyTKGRwwVuYPG3qWP2ieWZRauS8nK7PwJ4gMMhk9tZSjqtcgXVQjTC",
  "key15": "51f9CMZHfBHQQ2n4gRJ47iVGJiWVPRQ2FSgmMJADChKJZFhdH4DK1BpohfC2oyMUaHrEGYXcPK1XbFmoTjomgxa6",
  "key16": "2T9NAFrA527iXFE43F2VqmKsgA5diWdoCfiP3nA1nE9et9WPX173sqZLA8w3itsTE8LWVPofe9ptM6FmqW5DZrZp",
  "key17": "3dvFC2ZhEDerGttk28ZXJ7W7rvZ3jKRag4YQbr7uuG4CVLg1jtpoh3WMAVHgXbFuua4bYGZ8m5tKnuVZH1fYTqc2",
  "key18": "vVUo5e4WBk5VyheoiH51gYgqs3xpk3Mvy1SCCsCb9uqJ3meupRkcWSgNAq93GfpmtJ6fZTsV6PLQN82Mz7WQQZV",
  "key19": "LaznzQTkYGz5mYgvLSGGAPukhKGafxDJ7yoyTZukMhgyUSqm3dWHU5Tai6k9zGHBQWNQ3xaDA6t5GZk1SXfVuND",
  "key20": "3SuyhK6L17TVtjefybsAmF41xKSjqvycmUkn3SrfpmoCiX8ay6xBzj3BpLy2ymUQbYwvMMKFg1qj3bDfSA4riCb8",
  "key21": "5GriLGY4ziVhorQJRFE14BR45Lt2JDo5hcbkCEohS8GnbcgY1CXajsHADmKNdChkChqHWSoEKiLNbYkYdJ422nrE",
  "key22": "9EgjCBjEhVXrowhi2KuqfrbjkiS6EnTgnVMkQNbw7sgksSP6Dw2N12AgwCvSGVkPLzMiosRRMeMqRXpq5CpGrV8",
  "key23": "9T4Vxxa1KawJqbTtYQtewraSahi14pUBg1W6jA75Ztt62BxBpo6a9E4egBhabaAxgqibG6XEUk4fBsm4Xj5sZKd",
  "key24": "5ZkCSvjxXUDEC2dRdrMuMzNHuHfKjMoUL4BByU3xmxrBVRAP2DPVms77zBrRa7PByB4Ye7r5qU88mTzq2nU4v8pE",
  "key25": "bywTpMzxFdP5B2SCNNtzDv5Rxn2SH2vV5JvQpargKQb7F57wpTpfmPjwKEtqfS4w5WfmnmQmdsfHm8BoE2DH2Uw",
  "key26": "5teZDDgg1PpMsddzxDsr3rJ3qubNsRgbzJ6mbmHXx6x465WDHdK51raje4Aje4VkxM4rckTa4GpbGPKfDzagqhsQ"
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
