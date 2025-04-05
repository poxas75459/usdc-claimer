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
    "3Z251V9wkaKFot6qe4w9kZCR8QZXuD2PMwKaNceJyE365BvSgkF1mQS7qBbU6YjndmARaa6e2C31GRxpyctMaQYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nju4EYG5xeYbjnx8EfWasn4BKhwmTZhYAPoL1rtZJBPKMebStZhySRgZ5H9cwHw7Vgvr4JMVUnh2oUChWZFK17M",
  "key1": "5i8Wv6t71aM6E353gfkfYpXeGmSv8ntsToCie5uvZycAm59DVr3qKxmohvMqHruaNYwDUsmGmEkxjcqjfXFzv8f2",
  "key2": "7qzjKUzv2B3QpEefzvM2EHitoZCBTYUHZyEui3bQSrNmyjSJX9XQNTR1vJy6sycLUPmZ1WXrLTEF5wUNitBZPFZ",
  "key3": "3KkTyrKrU4my5BRycUcSZVmjhziUBEhR3C5DL56bi5esemaJKaGLkBPNKsPTsNg2ePea7cp343axr1Lqh6qiJ7Xh",
  "key4": "ksT8ZNsKkqExTDpYh2tVkUL31pfjbncerywueV1WkpA1A3hz47CcHpq8iSUBXJtsAZMxaW9TFyskHW3GFkm2Bpy",
  "key5": "4P7JhpKfoYXmHgiqySwsVhamjuoCXu41iuwDxLkoxd9nqMH8V4Yb5x3rv2f3yug8TGEjBAZzHnRrzuygZKcUTUQ4",
  "key6": "4HmXdTD58trsG2UVWH4QGUUTip9u6obAZXakgrbTJMzGoN22yL7ciygzgh4VyschgUZouEjsg5GDVYqixSjhxaNw",
  "key7": "3NKLRd1UMxv3CNQnNyftAmQ9iNFwFPfASjtgio7okdwcuqCTgGpVE5ycoM5fcj2YG67pxhXwmZLYrp3St2kgSAc5",
  "key8": "4TgRdU6iUkQQWhKNCecvc9NqFGf4v6oEDq3GEsagXRo7r5C3ZeiV2fVgtt329xZPmpuci79nLDFp8SkFbnS3agQq",
  "key9": "5tKDrLyEciumXgBwDQEBjNLwDXoJxqH7t2yWhVQ3bPLLjH5CNiZULiaWdZFs2pVaSaWiW91z8Ks6G2WxMXPm1dgR",
  "key10": "47MYm1nudT69c5GuoorDzxnwmab8Ex8wTnCJnmHn5rTSuSYa9V7M3TQ1g6rheJhuUmW59YUE5oAoQ4n778d1cSQ2",
  "key11": "64gj2pYfNQ1918m1gib9AK1cFG2aVU41aUiWJwRv98FXFdiEtwTKxeAf4DNsPnHDu5LK8vGZ6nauG2Yb37f749Qq",
  "key12": "4xggCAAFZPv1GZw6zNNy9JwJrb3eVVyQUfSNHcrEGL1ByL8Tbg75g4Z1U2faGM4RBCjbny5ubfv3QEDErtpZVCaU",
  "key13": "2aRNthHyNRq94hakZmwE3anuSFP59Bwd35RjBf9U4ejkLBYYKxTwDZz9v7rB6PUcKTbeFEz3k47V6LDxcZZSfwo8",
  "key14": "58pogD3cnuBGvRVBbtfE452czTRqYWEAexprKQd1miELSYnWtYnLA1sQhhjFdYkXCXgUYXzgwTsu85vfJjEGi74L",
  "key15": "4UvR3pjkggEc2gooG7ELKsQZaSXT6susZyf1ppiSHbhG33c3MB5NyN8YrBhrBnw3q6MAksSN58KqGMGTGeo76yCw",
  "key16": "3wkNYqCpB2qWUqF1gDNFfgDf4GNwNXxDRXQ5y78BYfAjtYyJbXdQWqqRj8rqajKQX1VuLaehKQDppGnYZ5ZfxcZd",
  "key17": "TrsrND8Dge7UFvKZSjVZA1PQ4yg2QMSBxpUXTnK6WY8UxtgKoqz9sjEkgbWYRnzpY6VDXaxeZsaCVL3itp829Bs",
  "key18": "4T9z7HePNwgvHpRsa6i5f6F7cFDYrmTzbJK7bAdGCbgyrwwqAHvSwiyPtgzuaEevXp5PWmGJufEAX62iRCkWMwAF",
  "key19": "AfeWFxcP62YhfWX2UG2FAvLRuLMVZQvvTyvSPktbe6zfwEsxviNcixCLmrrXZvKudnFHD4aLTKS4vvjnFkhALtP",
  "key20": "3iN6UnPJpfFYUiiX5aoqQsGTCbLBMnurqNJS2h8iWSBP5vxfBrZHWof1b2dBBy3P8Tvhp49feNaJgrhsRBLEzQfU",
  "key21": "3Kf3EVzuoTWd3e4YQavSGZUeiiXidxP4jzr9pDxR5oY3A7mAFLD4Aqf5xdxXAwPWHA8MAm9Hd1FZ5JcvSvxAJiuo",
  "key22": "5uRjgat5nHeoS2mdzYr7G5VZkLvwmhnRtBttSyoxBBrZZRzss3uTGLYxKDPdTZtVKd8oVJfgnSPXryfhPqiRuTTS",
  "key23": "48PeeR9sk9VpjRs7voCn2FGSFXzw9LyrpdkCkhnYmMYZVjceh8kHVqf2oYniBUKMMjSfADiA6NzCcC7Rn4Atg7ad",
  "key24": "2uxeUvas4iEpdAKXNDtk6JMB4feDoeaG4UAjT7XoFZPdmiAGjjQyj1pikU2BhHHhcgkrjpMENbzjiaYpTvMxx6VL",
  "key25": "2EFTYfNzuEu9zAC6SEWubNYwfskKvricB4uozrUC52PiUxCjVZnhs6BrQBAHyckBrcsqZuFGY29akjdMrQM7h4jG",
  "key26": "5RhNN3MNMS2tfKbR5GcEE4dc5jrBEWkvmEV6iNPujedF15iH6o1cEw5ZtuHHKGu4oypZTEet7baYYoVzi5h9sgoB",
  "key27": "32qRy1qvH9TKQ9qymRyL8hz162wG3iZ5u5BZbBoCxirvNAQxizt7itj685wrywUCZjdhEdEAe6y2fgarrxtweuXm",
  "key28": "4LUuMf6Kqa71x1gbE96T8jrAG3hoXUJyhDzaNtUVFZrikJPhdekeBvEi8sh1YJyi5tsN4KgYCUGrufndCCeZRktQ",
  "key29": "2TKH689F21gFkCfmR3kxYnTPDTu2mow5UEhc82DJt4mcP1Bpz24Z9TKPggcTGiPXAo2n3W8Vvz6Wvc411kS8ZATQ"
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
