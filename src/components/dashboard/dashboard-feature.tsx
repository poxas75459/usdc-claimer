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
    "4LKQEt51bkckYUgyZsjXf3wc1wLqTcnGNVy2gowFkcwsbJMLHZWg5ZztsAXh9p7vRQ65atZ79f2Atk9qpfzb9eih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GAmS7bysenhGLTadhFbiS3SrHh59feNtmfPkv2UmrNP66D9XF3XPYHJ8dgudD9D3zzpY6HcQzFYkyR9em8uPPqe",
  "key1": "4cdF4gzodDXBLvS6qjiJjPrui8f4jTo6WChVYiSu27wWUGqvwK8M1YLwUWvpPwwzacHE782WFxY7wZjQCNrxK6ra",
  "key2": "2pxfNtLdHuhMkMYTAoxpbHFFn9Lx9ZpkFMKGTLdRJ5PYkLkYS262WqG9nxyJ8Xte3NoCZptx9xVCHr8tAmCY12ox",
  "key3": "2HHxgJRoZ13tVj5cp1wT3ztfqLMFS9T27wt5QpXJSR6WpD7rnKibVq8ANa8GVZhECkREZgkDEJWFErWRRMijvnpx",
  "key4": "4eADL3BStw6eUg2sFUHMUHuBK7nsi9wa8Z3ZyDqqGgnhzaUgbpvBzTxwsXFMt9ip8zFdZvfCExD8xR97j5qTkVr",
  "key5": "4FLS3UhuqHfKfHT3yqe8puPHhKzCCzWy9KLWzCLJZg45jSfa4iJ8JTDhFAoYiWGBuAG43XaRLaSVx7DZywiXnG15",
  "key6": "3zFNRz8whc8jmMfKTomPpkLMC8To5JUxj2wQUzpu1RGJMHEKdBrJrQ5upqchHKg9K2rByBSmU1XEe5WwatQb2Tox",
  "key7": "3GsyB7KSW53AJGYzBkFM71eHMHds3V1gXGXDrkWpz8AUpNvw2Z6qoM4NzmNWQN5GLNCVixTjBJ2J8hvf75jPDTbY",
  "key8": "4TcB1HTK9sMtwZwK6vEfD3gRd5PJ4Xi2hS7tjCCgwQTR9bGitmpQG4d6moxVuuvZzTVYEcueExgqPE7tjQ35a9aN",
  "key9": "2Re2rSBtpGQFfUCGv9Xnv1YYoV8fw5MT9XPN1yZW991FtYMZbWTCdMYacnhtFGSwdzYWawH4kq5SFEuVTw15uXNJ",
  "key10": "3S77UYmoquRunjGXvZnuLFebqpt3mdzuqrynKLqvaiqFwxo8cX1hx1Vj8QGArh65h1s1KjXMZqabz6pqoPKnWZFA",
  "key11": "2LAJRxRA54wDEAczthzTxtnqNgi3VNvy8tD5Ee2zYgv8d6QvsKFJeAQUfXszBomn5RCrwUxZ5NPwAdHgkbsSQhZN",
  "key12": "24vLTEPnwaUdiaqHbBSjjHKCRLHXFL2DgDjeNNz5rd64gqGefobfmtMjmmgihup7Te7vvcyntQYw96j9kgFUz5gJ",
  "key13": "Vfou7XL13eseqwSgxaTGMaCpedvoB4NKFYmf6AJdnUMUip1hpuFQDsg5L4Tc4B4thezLfnyqQ3KZqBJTMMD6gVB",
  "key14": "47cWA43G71PhD9WuWpMMRNK7N9oqLd7ZuvJkgAeySHCGsTNfo9Z2vMe9ThBhUL5gFK5QFaAzRz1p8DenYFHKBLvT",
  "key15": "3nQbm3UNJ2fkFP9QR93uHG2WX7n2JqseaV5LhSH5u9bFLoVoZTRgQqxZdzrBtPzgcnmrn9WieeJgndi9dMsUmeY",
  "key16": "4oyqQRXz2vsXpWm3C73x9iz4B6VFVYASt4pYD5qM5k35qE8bacvqikVc5bqkYn7LjATfoEPDhsHiqfJeG42UcMHL",
  "key17": "1xYaTSSUe7jEcu48Pz3fVmvEH4vM9J3JxEpvsQbwFFDGGKzKMbn8a8bF1if91ZgHakRnMuyowpZSZDVfJSnGNQ9",
  "key18": "2sgkHpByK1CokVw9YYAHvZQ7vw6ErexNq9Y1qDiDHRDsuVgnByfJfq5rfR9ecs8aTaPNxRAy3Hy1XommxgQJT6i6",
  "key19": "3BxFAy5skcwSLShsbs5VZg4BzBxKKz46Tn6qaM5Mo6ur8tHuvVq5vWf5Anr5dTAU3q6aAVYocvu4ytD2FihYFBpk",
  "key20": "sQ1jyukNSkvTcXf3MFMLeeyqXKVGNXQ6HyAVLbwX35LivksJ47vSGZGsTkx13jEorJuNi27KT9Fb2JWWAzrHNBS",
  "key21": "4MtUyTNZ1NZpy2wKRojiX2yScdtoV27VzrRnGW3VjvUyjv7igDNy2Jk8xkVLNfxtmu71ST1dM5JJ3zxLGebJ7hYr",
  "key22": "4G2m5EQ6p34pzUTmPHHaCzqxho3BRFHy57QpMENHbDzw8Pe3UtuUAi1x2yYeLjDQrvBXbsUpsDXtYWn4CTKM6Hx8",
  "key23": "2xPb3tBqei66RtANKRbfzQHJpvrEeJvhxqD5FLTBvm5RffC87DZRxz1xjEDzUTwwMfE2iCdcpusfCrro6EDzHpBA",
  "key24": "36ReyBPHG14XfyJRztw5NNgRrjWQx9AXatKapxPVjFGQ5m9V293ChPTBBpZUnozHe13esEn1zYFR7b7zjEetYyAX",
  "key25": "waoKCywctWnZjL7TiY33EYL2af1yiSFyuXuimqdk9zTjsxX3Y4dGTA87w16vtdH3zP5j6oDa32Shaqqq4HEGqBW"
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
