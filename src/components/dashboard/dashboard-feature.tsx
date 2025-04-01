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
    "5zZCThdTWMHLwLV4MuhAQyr1pSeBE3wTKc2eywNnETUkMi8JKyiPwE96q5SPZ1NFzoHcyxHYLHTSUiSmNouVucfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fWybo5MNopX3bqBBEXvq3JY2Z595GnfK6gZWh45RhaHo8cwQ3WQCzU4VKY2FwXG3vAWS7uJSQv4RS49ssb8SdaJ",
  "key1": "4AsJXSbxECkEaqfkWBkiyVkhDPfJ1VhhRzbdd6hvZqgoGWAAeoVL46h1DTUkbmsCS6F8DRja4KXYqWPWf7R66uKh",
  "key2": "2uv9GCpseB8duk7KxK9pGnFGdcEMWTwhajBwTro3iyeKoUNEDtVVw2WfLwhFuhfyXvc4zmpEL2fi1gwBYJrZnjdR",
  "key3": "3wEcaX5NgoELVdo3HfXDGz3odUFobnc8M4N296yb8FZZsEyLP3eiWhfvEZfX2tprAkBeDgJqb9Md1D5fjAqVGa9K",
  "key4": "25jZwpUv2D22WUnLrRujfwkJ1H2dvNR9FjiG5pr1enHmbJS2BPN5rFreKExMY46pixaJHWniQPYPraBeLSN5bAUx",
  "key5": "2E4XsHZbxsdbeBuUfNptuwisr3DVFmPKb3TLVEe2htnFHS7jGEnfBWapvvKYYy55TuRwMgSF83r3WF9aEAb8rim4",
  "key6": "CMd45kwuWvDTu57LBPjwpyrS5xTo5gHT8VxrYC4m1PqT7HPqQQAqSDistzeJHhFfN4h9y2suVANTTDf4H7zigM2",
  "key7": "5rn6Yg3TG3s6HVozUmwFsJ4J1V9As88qxEncWTAbo2UaXYcGCjfZCcREYZzY9nZ6tmjT9eNGBqtx9V1obVAFgna9",
  "key8": "2ejUPCVWdx8oZ67yDCahfF2mRxyDuJ27hYsB2uG8tdDpreWkaZBVhMcMn9icNmye972H6HuY5Dpx9xYrShGLcaCy",
  "key9": "2AopDcFz93J4v1fEGLPYgLXpw5F7ZzkHGst4FLznaypHGyzK8ogpWQfHZbW5xjuNbodoBeALg8q61wyhR6ufcJq7",
  "key10": "297PpyY3wMebRsdfWCrKn1eAKW6xtGfWmNek4P1FqnwTCUSk1N1VnAavbATNX3i2mAGzcszTkzmxNra5BNMPmi85",
  "key11": "3srqUVC2RXNZu1ifdaYo3Nm3a1E5SVDkMzgLW8WwU7QtMGZpAQbf7aZGfKBUD8iVrtMvvToZyKDWN8QMmLBwDAjs",
  "key12": "sGaKonBaXmEiMefBuZ3iSi4pueJwQH1kS2nHwsx3CSz2TyikbJmgVuCV2sc2gVPRZBmAvzn5fBfFy2Uv9qQzPCS",
  "key13": "5TAZby1CA6ku6rscxHzxD3FaRCrmc3duQFLevYdhdhVuNcLDThD8WtUMm6nLvSc7zMkskz1GVPzr28XyidmCBE3n",
  "key14": "5qPn2QepEYC4HR5pcAEhqPLbW4dY7JMnfbaAwFVMPKG5V8Z2QAqwkjvfyyfYYEMjUDeKoDMLP5kJzFPV7TLcQCwU",
  "key15": "4DivygBkp9Z3JiipxuE74zqnC2XXjTJqBeY3UZBKfshRnR8SftB6Qow7MKgMiFfYzAS4RnYUD5b3dmTToskuyqor",
  "key16": "5KMR3Lrrjfpexi1ZJb2RYDyqDKiDvBevt67xEzTwkWsHudJ2NrLQx3bbTme8JtAF9wvJmRAoctGpAn97VoN3bBDH",
  "key17": "2epFjPNU1TffwD5Mpw7UixaQPQ4xFFGm2sg55GK6FXzHY2PTqoxFzQQvu13qvYfKGMT63KwAopwjLJucfZtZ3F8p",
  "key18": "3WCD2siqUDy7GSPCCZ9mXot6hfpJK8mZCEheNiPHTtpiDdJRS7PGC8gwtXTuNdweKkodc2ZzyLQXpB3eeJFtGrDb",
  "key19": "pSxzfW5ujZjBsrktiQGBGCdBhLEf8Jj2vLWizQPB6QwpbMtKCytERHJZWNx3ns7m6efMVKePLANgRcgGm1S9G8s",
  "key20": "xD3g8g7swYMnhLkGWQ1MVFENtkcjciLj5CoqcvQhbjtvNoG2poyRAWKZ4gD8wMsW2aVkLTiTWyTpMUYnfDH4HxF",
  "key21": "2KbjQQcepvjoCAPcGQrhM79WPQkoTNw6tBR2h6C79A54LiXvSTFd1CCFDSmBpgnbwoEnyAji1s3Mpa35aNdbsTni",
  "key22": "2jvRCVbdDafLufdKu18yzPoxgkTjcBjbUmPZymA9Mw5A7bogR4uvgNBZnjdwZJznVurwdVofQp1QwzKv8pb9ZF91",
  "key23": "46n7pEpDZVXShwwT66UUmMCMKH7DrmHR1ht4kVGcY2KSnVWPUhWe7dmpjYcQhdHeU89AXx35F2KEXpAN48xn96UF",
  "key24": "63SQR6n8W8EA9uLM6HWwfDpTFAYn6HTBM2hpWp8tphYswMTHFHpy1u11bK2MXJaEzBgQzETKi7Y6nHH9J46yo2JP"
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
