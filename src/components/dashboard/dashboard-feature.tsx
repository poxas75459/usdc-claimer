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
    "3nPDNBS8NbbpEcAitkFiVR8hmsZQC79secdY5Rw9JbcLGfCMkySxh1Edb3mjWv8kEMwx2fZ8opcQsdkGP7ryFefy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZA6b2hXmy1RCQhUq2BBYM1MGjnERys3rqMCizuBpdESutnrA1w85Xb88Jbtn33AqrCgscD1sP6spNuJXzXDYi1",
  "key1": "26iEZEZkUjjrZCG2NG7X2vjYtoqPC1JhuJbexfe4vGhh4Af99jrh4tvJx76X7YDEAj5yfRVRhWVVnz6D6CdexLi9",
  "key2": "TGV1YL9ejAsTRYYHPnD1fFeGp7G8SbApBfbfM4utdkqftspQVWcfyGH9u1QD6EBK77VWtyuhojGQczduVpDHFFt",
  "key3": "48o4opWCuHYVVXzDF24g6e6NfNRNeqWx6wYKo2EbFuwgLGf5EpcSDppi98R2WEL9rt7qWa4iUQhsuDZraTa3mepv",
  "key4": "4xKiLLkqtL9ae6o2q97mVj2q9QJkyugNuG35n4avKdG5JzkAMPPMWFdGaTLhAHCySSS1Vsp9Gfyy8kVCxehgjpEq",
  "key5": "3xQiaZnX5J4awySp7FapKAcrKpcyXRnqhHKAfAQsgVA7JzRZ4epSNBdZGhBWZdwH48nYxcY4QiW2qthpbAr4nuAH",
  "key6": "4TkWVnVPrqzHFbZqYejtYUi1QzxcwL515cR6NDEV7ABB25NwgUZR6RkMvFZsNyo1a37dxFMwZ3Sp9b8vsyamC8YV",
  "key7": "65AfwJxnYtGB6geZrBGA982fRJh1Ew8tasVNwSodf7cB7tba8ibgP33MQi8kqcNpze5bkEz36oEJjqggTHELCLkd",
  "key8": "2g3D42R6GjxAAJn8BqXDvTVBuD8PTrZAAAtoxnvi5wVga8u349FVCSbvYpSUnjFSVs7fQ8dCzxeDdb8vwC6bGLp4",
  "key9": "8R1bgUcH3JbZMYXDZFcN2gxwG6AZFSjxG1kH3zJ5GuNWdAeKZGjHKGgh4mkew46sMGgLWsdK1VBTGh86SJ2KiNX",
  "key10": "3xAWqcwD3uN2ArfZDpXpJs5ibeR8Gw1kdf9PKvF6pdmYeqgcJgDTj48yU3AWY4MFDHqdNE8HBavH6wabKoXTctSR",
  "key11": "5F8AJS5nFyXJCmdvAptx6ZV3LM3PabR8rYGCRxqWrKrjDsvjYtaXM3XBGe3TrKSYN7pk8udZoLgFHMUmkkeBXg9J",
  "key12": "9SvFF6kSwqJX8LUiXFSSrPM7CYsZZ83Kr9DfmfPEEsUQsg6RFXmCEL5S7CYtX6hGdQ15ijr7Ko6X6PawvNbBASs",
  "key13": "4AU7KTUiGfFrrMVyArbK9zEtoCSxJrrPPxSocpNx9mZnGTtFr4iyekEkVPgr35gk2aCu4xfLardZpUR5p6RKqing",
  "key14": "4rJDG38Jh8TaegYzCk63rZRWLecPvVZM4nkG1NJv7aF43ZncDp8K6HMkZGhX1FwA6dvTzYnW6SptpAFFYSACiUic",
  "key15": "3kfsEpsTfH75Um2jE5aHYhNTTfEpwmwAZNmbQg6T7t7CXAJmNDEMpx5idpRKeNPJiaJSE9JUd7kohg5fEAYHPpjw",
  "key16": "2R4FSXe14t6RGHvyQs1mRhTt7wLKGj1t7d8jdgHLByw1tg1yKjvNNpL6WER3XwPraBXoUZpowViGj2HVqFbg21fa",
  "key17": "3nG7TutTpvknp4eZ79RiKpwhXx1WGM96ZhRRe1NLjooy95zyD46yyhRCjWU1gSU16u5fs4kHtKjWJ2dDWjCCu44Q",
  "key18": "3dqHWjDHdn14qboeE4B3SifyVTXPgfEjitnjt5A8Mu4esAjLBjeSW3WoftmVhTzmN5jceFdgHFJtNEp9nyk2bA5K",
  "key19": "3yzfrJGVN8sTeCWzp5RapqvTMEnTncAgLuSPPrLFCuuALXA963VD3LYGpddsdEUiMREdGEAEpwGWdwk1bQayt64v",
  "key20": "o6kLvq2kzPcjLzyxLHqmdKqvg4tbJ91gs7JeiwnhGAFbFbBWtcQwQCpd2xcnSGV5UKvnnm4xHuykGAmA45cmwKr",
  "key21": "3Shv8ik8mqUrcvBqp3BhrpL33HwjcXT5bETaFtwTwDxdZRyqwCKevnvTksB5QkbciQU78M6gvPLvQH6ook1BAQUq",
  "key22": "67AyVa8Y36ZMhN6zEatyNcj3wym3M9qiYwxFY8RRomJkh4JsUEbWnqjyosrV24KUJVdCmcBMkiTiAKy5D3dy3V8W",
  "key23": "5xLGBAqB6J8jBvuooPXXm257SVm3iLgL4GPpJujsqbnBetrwhWJmxVdKUYJ9eUffgYvvzXGHGZjgYtiA9dLEyAkr",
  "key24": "3QrmRLmAfdtCA9WN8zP5inax2BmXSEQoFCcXXdhawTGaW2dasEYwrP9fsS1xcHWxgSKY3RYXoENny6QVAQ5h6nk2",
  "key25": "26GZ5uasWpYd1GbUHJVZWv817YWkDd6LJcibw9GmvXtaoUEumAKQ7LZK65Yv7tZbWLNa1DBn4qicbgS29cish4Ch",
  "key26": "dy8BUvAgbKxmkUJ4cMJ1WBHku4Fxv7JKNxhizG3moALcMD3D3g1FmFwfaJqw9JU8Bot6f1GyQP9SygWn2X7G3Hc"
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
