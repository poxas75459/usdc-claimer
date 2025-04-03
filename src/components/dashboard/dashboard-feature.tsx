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
    "2D9E5iaXbao8MpRfbVc8Kgf8fpJ67DCEWdSwcAsC5wrNf5BfbSscBe7sN2navZCFaUs2SUFQ4zDDvQPqZ8vc68D3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AS6o2W9QJvTd5tAokat1MUEK2XDibNc1R8BWoyZR3WBMTheA5TQCyagdtFW3QVATDgGAqh2467KtKF38u5U2zTb",
  "key1": "Mt3CVrJq9aAFojbdASvWmXxmz3cEYz4fU6mVBHqpSha7Qoey4PofPoTxbT1Rp7D5eJNtqAnGuSD1uNPuxZnpC9g",
  "key2": "4yUpPSeNGiBM7rsoeJi6Re7PVq5ZQF2Th3GsXQo8h7j8btA6GKFEULgJNAjHGsK1KfNNeGwHbNQhdCUbvMvy4joN",
  "key3": "4MWgLzZYtvkmJSsvocLv7dJX1HtPaa2K7USpsPJQGZE1Cas2e4gjBMCsu7H9BokTmAatzBheHKumub1B3yfb674f",
  "key4": "3zAcVUdgHHMrDa1mSWrXUmFyWP39SmQZksmikGzoRWUNm9eBqEmb72eA6MhAGSCKWyoZnkU94626AXKx9foHnHLB",
  "key5": "2uJWfQTSTxDWqek2XF1rwsWcPJtYsU7BsA34pFHmQzWji48VPfidjMA4CKzzwsBeADQ81psRWfepUf2C9zKqm52t",
  "key6": "66gTUqvpyeTT6EzpZoca6Z8SHYw59YQt1Btutq2DKkx5fQ71hJrWPikyRMwxD3PjmZWmYPUHNS77gNPdieE9RAth",
  "key7": "3SQsePHLriHPbnTc67niJuYzW8sLRtDXuunTMNZssbMTbvsThHSBrcCUJFWZcKKR4vpwhkzCPkngiRLLekmyHC97",
  "key8": "3M51ds8pHFvGrAmrUB8xkLLJmXCEruQap8ADaqKZyiUDfcT4p2st52Dh1qx2GwBydJbybhA4SQcQuRUSQuciiur",
  "key9": "3afw1xnFsx9X6dhRbbzt2Kv2gycdT8ebuzuD1H2fgdPB4gGMy1tTTokoTLJpmtaWstAiKahkHej9yGNB17hug1db",
  "key10": "yHJfYZwKoiDQyswFkRkcbHwyRXob9m7s6pQ6pCYYpZtcRymcpC4yRARaKZasAGMv3PcRRNn7kvq1twFJiGr6WCq",
  "key11": "vXtr6m2Nj7jAiuV3b9mP6jZfvYWctbUp748bKqH5ThmjUAZ9hAS8imUP8ZvVZX8uW99VEYMapy8WuT88kUtKYLZ",
  "key12": "56A2Lq3M9VZADDj2aPd1suKSgULYJbfdiv1Yco1Pnk6aEM5vZcAtxZ5EiG8M1RRonQWFiqaoZ51TJVZSebXonFRo",
  "key13": "3Bc7RaraTdXDuvcWjXdcLRsexuLFn1ssL7YUzeyDmSpmUHuzGXP9WoGxU17gjgqNShb98zeYgwbygL2pCKp3FdGV",
  "key14": "5hjsBBNEqyzQtvnkx5UaRbMGe5jh9ixk4yqY3geZHuZMZVPA5FmVsHtP7HzRLXypr3Bh934yv9QZBndmhJfLBhNC",
  "key15": "3nsb7s9WA72BTUnXXJCXCVfCYLR7Pr2yKFAYPWC7h8bNfBWaBDj331pXDmdRY2vPXxhNRo2ESCFoeb5n7dwyXijQ",
  "key16": "q1RjBDN3LzDTTJbdNn95bFizCeoZxnySTV61tsVYeyets2C5fgVU1m14EEeLYmA9ZEyqvLWEc4GqDcpfHebE3cg",
  "key17": "4YhQvsZQQkWGrdJmXsNE7Uc5dzA3qY6aP3shyXq2carkX4kGKbDjCPJTWy2rS4hJ4Vp77DAua9FKfQQ9zqjvto7c",
  "key18": "5Nkd7pGesK85cDDdSRdXn8e1vAK5He3bb5x66zZJHApVZ6tHdp5SocR1Z3RJ9cNn65dxQquJAfksWDb55LFzNz1u",
  "key19": "3AADUpZetbMXAeGGCttupG2GHM7uGf8a1zeQYf3RCKTsWwrjH7FBdGopyf4AkJMGdCF3jk93twofCU83RFGfLhqr",
  "key20": "3c2V6Xd4ShFGdGsByd2gDP1dNXqQFnxQ77SFzvJ5MPbQiwzmx3xCNnN5oFNg2gYcxmaTQcYpiNS4BjXfGioYUW2A",
  "key21": "ZENcrMiPr7pYRPhZn8bkhpytiQtQd3G4RdrHE6AqNAsTbE4DCY3UzxtZPkoBqWTwssiehoBqmtgGAxM63rrhgfy",
  "key22": "2KLTfaW4C9hUNjZwsGu1sKc5oVQpx81kxVwFykqmhgmSaQBhmmBWkoqAzXk7AVmRszsWaCDAQWxNvzPZ7QTSa3F4",
  "key23": "4rJtUV9G8xep3ayoMdMxqYzWNMmEz8e4NPFRgmsgdoCWwSF7sff4KMW9vCnNJRY1igDxJkeHAjL3fya3Bg1YUPay",
  "key24": "4FipdJt6iZ6NYejnughTMp7LoAaNziTfWANjF7TGWjcTDL2Bb9S8H19eXetTS3RALC48oFAUuuiFRgEaJkg6C9Sw",
  "key25": "vTJhkD45WhMiqmC99ESbgw2Nhy3gBBEgCR3ehyMHekEp7SjMgRnH6bx877ywBrnMW8gzFhAoijESq8c6qcFUsRB",
  "key26": "TWTHta2Vo1sTJgw8BDSTAT4hFQD6T9xYjcq4Q7eQ3Z2LJBVS4cGgi5FWzyCwzYURWXK1teWtX9mqDTA4hJUdP85",
  "key27": "33WCC7Sy387u9NF8Jg59qZ3RHiNRxdiaFCgJXjUfhFuZ1EcCWrmpQwMe4ayFjXVmmzZsbFiU9FemPrR5khmgzYe6",
  "key28": "4CWJaf8iGwLPcwzZYbjN1MuZAout7hD5aZUWzUnT67gsnyFkTevedJtPCQoTQrsh9Q6uzJNi6EcPDCfKBaDgyiSA",
  "key29": "59cPHHzLRGAhfc7VyvL4RdnVkHhYhzBKgrz3FCakjnQPTnNigxMXXtCNYdEW1KaheeX6x6s4q6ncWuLdzD4L9xrP",
  "key30": "3XujdCYT13gMeeoTnCSvfQTYo2DTE6oyx3X9MnDXB1z8wGr9wn6C65tahVf71YcWvEvKpWj9ARCYQYNcG9aMorvL"
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
