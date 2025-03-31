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
    "4ypunyif2ZUeybq5EzMp5Fz763CFNmNKQqv6L7omPDnyWqRQn7rM3KakcBdvbyLeyYm2gLjy9mKEzDyZga9QDSUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22AmFH8tb8dnCrU6Y69Cs6vh4YViLf67jAjezXzVUneNZ1yqJcUKmpP1N5c8VcFE8LyBSdbTZMvHhs7t7c47uznf",
  "key1": "274RtuegKKusocLUeViD3WnoK5XyBQRJAyD1BQmzqzfiR3QNX6UZ7KQ5vSbrWHfzhTxnCNTFBv1M9aurjG8w4chP",
  "key2": "5BsyxVFFWaiqbGVHHXncHfuM6Zh7bZobxJaRssnjscxsNWHhdthhyXvkc7sAvioyB2Tujyz2bwBSVT8vVv1ySxR5",
  "key3": "4nkDpsR6756tJ68SuTWf6fg5VzUg1NNyKNQXKqEUdzsDg3v812vCPuyZPtSU1iwAksPVnBSfHYjXwzig25AkCQZQ",
  "key4": "3B82wsCKaQF6fLc3NSQsAMUTDYoPdxF2um1s6B79eE5HHKbxtmkpAVXpaQqsQw2DtGgtAx3x6eL7oYwfPVydpM6s",
  "key5": "2bt2dvWeos1LBCskFfPdWifRBaxpMQVM1DbtnVHvKYgbDouyQZR3Qa62Ff6aeVvt6EjBRAoQAm7zPrZpsu1d4ohm",
  "key6": "4rTQVteHjfTRYWxQNSbgnQEAmFJWDokRXBCzc38owMfQ9ijha7k3DFu48Epb9kj7ZKnDeYn9Gu3R4qnkb5MKE9A2",
  "key7": "5ynRRnhqGX57WvyzLiAbX354qW1qxHYzvWw69ZLV3L6SXXSJCjaxMWkL4SYH19A8SgotbTu1vhuyXL5pFkRBKngp",
  "key8": "35hxfBZrZacPdFpHoMhRFVitCQrJtjNXYjPXy6H8zwtqpN5PhDi5on42Cb65oKZPbpAAGXtVZkog517mo9ryf9YG",
  "key9": "5r81cADwMK7xfbkA1HNCajxnsokok8n8wPaHkUURDbXDco96DMhc5K8va8H2oVb2wpUHB9MenU8q2D3ShjQfoGBD",
  "key10": "4ANyUBodnw3aJN33pYLHbVZnQHYVnERbXiiU1NJQpGZ3BiiPAJrATbyeimc9Bh9MeK5AEqPu6V9RWsojCzbZypsk",
  "key11": "pop98bWFMsimrmoqBWoJZ9Hmyz4q61Ei6xyjTYzHFXb9jKpmziaMiWrQqG5yQ76uKTDE54WvSHBqKVx9XYUjCoU",
  "key12": "48zvsYMB2NS18BrBGJL9ZQ6YPaWcbwrGWZUijLCZjhPMxeGpj7uoeHC6viy1ZcJZsbpkn7eH8H7ETukds7umsP5P",
  "key13": "4THWcXc8tf2T7TnLgCM3PYYbmkKs4vsAqXsY4oGHCRRgRp6XRto9ZkkhRbPNyFuFjkHnrw3ufQm8jrJbtn1QbD8g",
  "key14": "5Xm6dNDkvedPbMvSBEd3PKAm2df1ht6EwfcVSRy2P5aHpGbUdfojn8g4APb6Zb5A84cBC2GuHrkqxfyoDBTXJ74k",
  "key15": "5MSCpb4zudEe2mpnQrCh8AGGvmr3kmqM6eZ5CHXRQMGshArX93Dystz8mPZq8wozCWrC1yjJYRUM2dzyfZmw74va",
  "key16": "49dem5gooXLmYda5MhWsr53gKft4kzX6YEe2Fytnd9WX4sJm8f7WVbaj6xG2D8Yo3M9QzMTeq29BhVphtmB7DXmt",
  "key17": "2imas1eVFSQaAXo1dXCc6uLVRr7mpARMqYf1UksDAzM8QisQj3PTfQRZy7CCb1pdCLmErntYbHrvSCyWLqx6eea",
  "key18": "66Ueyzc5HqCoi423yLKioZiZ3ANMvYRW8YvtQrvzBdNMWB53NdtNEJT5fUJ3vLXh9vjFS3B9U7815RcGdB9uMnjV",
  "key19": "223WAaA7KrimBPPNS4i2p5xevsNxSb756FCgLofzityJ1UYbAy1UgB61M5SJynfj2ZactRDVs8nvGfZeiArdSsQs",
  "key20": "3bNWAjnGx2RfGSET4EohnYFYqTk4dg5g8xEA3tPT63KnJJy4sErLmMKwFHXSWTefTbJtUexdAWnMMyjXRHJnbUDJ",
  "key21": "3ri6MBsVLLUde5STBkvPexgcv6tnL6jwA8pia3cPxo7M231NFGjVcxSedHwmqHy96BVDXQfXanM4P2y9R64QE8ie",
  "key22": "3A6gdzmkSsmVaScteWaa44TVP8faoHuWM8NfyW3qqjmLtnMjABZsYaynwoAHan4eeyWnEphpsxjx38VUVVHa7qgE",
  "key23": "5QyBh7JaVSbSNNJAMdcJsvUWXUW5Y6joC8qQNqwuy3Vsg93txUGq3SEZmamQkdjXJwuUQdFpmCBB6NCbt6j2X1it",
  "key24": "3jyRp8sDKv9LXpjQ7boXdHUhAmJMpXPQUDdiUoHfdXcvrG2TdEaerLbdaLqahRDN7ma4dqgBDVyGToVFSFN2s23B",
  "key25": "36gFu7BdwWFZbko6jDC6YzLheLNF1yckwPF7z613wgwSBEFM1cNeYFbhdNzYYbjnjbjpWxNjc4tQx4tFywo5wZZY",
  "key26": "53ettD4KaMajwY9uTtzzQZ7AZh98a2yRzwhUwUWTYz2RfuLcJxXej6YAHjYVLJPvQX5mdYkckFUewcADUCijU6TV",
  "key27": "Tx1toBGDrGtqqZzMMTiNCXR349x6Q5TRTPFNBprWwQBs7teYR9q4rNYEuxLsjFwRcRLGbegZ5C393QocC2XjuT3",
  "key28": "3FVN9gLZLJpFEVKfsWMmcVaNLcQmXAd257t7e3vGXiQ1yfiShmhqviBDDXBsDWxkMehu6k41W69bNeevfEv6Yovb",
  "key29": "2K9SKie5Zqn3nWeFoBV2BzbVYp6vQrvjKcBBfVGP7uSDnP7ZY9kG8YEdddz4uMRaDSTZ4rTQ1A7c3Acjq3f4hsvj",
  "key30": "3RyNcYQjn9cPYuoYaE6Yu1mGtfyq5AoeTu62HteRrinHzo39YcVikVZFJSniQGMGU55g564U2wvMzQvzzxmW16tT"
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
