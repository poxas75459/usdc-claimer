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
    "3qJ1YyQXAudg9K77UQL2REmeQdPMdWK9YPtkAdXp34phaqpZByjvHKpA9zRfUkiXnz6B5LuNGv9GcUjDvQ2wMX4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26A1CXkfk49ko2smR7Vi5v8JpE5SY3UQb299eMrEXHqMrZnTvy2oHVimdAgNpXfhMhxhf8VXAQCkgA4uwMkMexTZ",
  "key1": "3G78YvN7P2szsLHxfJArL1Bf93VqZzd7GZ7KtsNA2nUMa7EcwYWJP9MFd8q1NVF8UShRG3rdggfgbGJohkAyBgYF",
  "key2": "5RjoSCb1CZmsgv2orAY95v85KQXp7e4GfmWapmPXsctJpeSzt26hodRwXipUYKYqYSZKn6msgMgbiNyUCEHR68ZR",
  "key3": "3NppVStHNj6T54gc6KEEtwqYx7nmQog4EgkekjuGjqmaXYXt5FKn456Ujyo8dbptmAb5gGfWtw48cMiX9o8vKSuV",
  "key4": "5APB8KzFWXeK7v8ax3pNM3jiZCkHKFVAzf6NruQHHroeun3E7PzTctz5t1QXitezvsSv8Wc1gruDtk2s2kBvfSJJ",
  "key5": "3wXcK6moNRKB3hxoMegsDkQw52WaGhX9KyWMqm773Y8pnCtevWa7YYdtMyxL9UZCU8o1iqy7woahYPXyZDa6eUnF",
  "key6": "2A3nbJL8Se139LZxnkF9s7ZrY4JBrPoZST8qpfU3tnjjkB3URYRnCNvsHg92HYLMA1dZeszR1934nKGXqwBaoemh",
  "key7": "3D2oBhvsABSGc5zNzVzhMVW1vQ1dUpCvrcj9zw54fhm9Siwq2GT79jL9bVsJtG6FT7yx2NdMWsasXRgjCjEQAAVv",
  "key8": "4S7DHU7erDgbZiNcanFpb1YLKgvxAGzyTG8bafpQSRohKvNy77gYdtzFeqxzYnQyNapaJAJfnKrKQ6r9Z5WuZBJx",
  "key9": "2rbLvAbTcdvhrjWP6uyh5fDg3d2w63CN7Sx7WjqTWczLYKanGpZkCZACNzmPYRaVhLbTKu8WJ5aBQ4BCwHW3BgYk",
  "key10": "5NpiyFnXt1evYSM8jesibNA99RoZMUiX96kycH2ZKxQhQ9KxMXh4ny1p413TAbdx55WWjGoWddn8g122SyxExzib",
  "key11": "4QPVw1K3zDdn4LHkkvsZiacJqFz3m3SVkeyFqYymjmPLF2rjqAoycYkgNzU7KJVJGeyeEMJEAeNeQGWLWfJwJMd3",
  "key12": "58x9vKEnJR7Hn6WUjfsgJ2PyhpPkGrT7uqg8Sb9w42xLssFAkb8HQwWTBhEfipet5iHQ5HHUycvnsGLKPHykrCUR",
  "key13": "52xLgeY1D22P3oFdPLHUHcJZHsHiu3RtyBPoivicQuz7mibZbSALaj5mPdz5WZH2MBUBroooysbvWkuV1vidzJ3H",
  "key14": "4MVw3nq6gRx9VqLyMijtXp1jpgdmvtkXjKaBHy5oWwzuPnAQjmceHtDhwBfNrEjLJXrowCMCArzZEWHxX4foR77z",
  "key15": "4sZ4C9Gjodpy9NizUUZD5h7GuxfNyjJMUxWHwPLDwszf5x4Efogx4wqi32zDaEgy5dXkpQmger1eR1zELEzALtE8",
  "key16": "5JVXk8LKQcAMEZunTA9HUBJu7TaWV7kX3sp1nA2NPq3xnAvEHw9TMnbpi9csaiY8snngH5EY5yRiHxJcNtFtQiHZ",
  "key17": "3B9do1VKdMTH7f8oTBLtj2A4VoWrrobbmCgVFNmUZGcNarZk4CFNs1vx7T1LgG8AJNHkyzcchvwqRGSY9ShScU2q",
  "key18": "611P8MBqzAY7QhFcwidQc5Lz4KHt7hLaWuXZuipQHJovkGugLJrdcoRr77YfjMriyyrZ4sju2rieMP9GT5hdd9ba",
  "key19": "2DanE2wV98oBAdHv1qaDQtEuQvcqHEAd4jot6jKutgd1D8Jfc9pJRKm2WoNLCzwiyVRSbPP7S8Ap6kiZRXPVc5AH",
  "key20": "2vLrCCP1sUMYcLySV9ryLKwaJLn2xFJHvWiN5QmhYfZc4Dz7GKTXaA47z8kPZV8HkVnHorM2rQA3svA3w57bZhMG",
  "key21": "3WEjnbu1cRt2sZUt32ZJfEEm9SS7Nh5WqdRCpn7gzpSDmEGXtY7Nv2AEJDSqb5Vjsqfbj3Ff5Cg9Rb2ntSfu6Ezj",
  "key22": "6aRXChX9b6geyoXdUix9Tq2qmWEw4tjbfHg8FGuKs4Hu3fHM6x2QybyGL5MVn5VMQahtvVjUL8Vx52JMC1QWUWG",
  "key23": "627FukcSJCzR1Mpwr2HVznyyJ2z8rkdRRibYzFQsDdCgdzYH7egTTrX1rKzvRuh9pBtNTHBq9LrDGe6n146Cb2Qm",
  "key24": "2dxXL8Rh4o1TDdaf5GsWCjJkh2iP1SfN776fWWEKavjdSsjFGgTkcTRdqRD2di3g1XBkRLZXpefLCAZcB8gEPHar",
  "key25": "2Ljz7TxVAwtAbLBmCne6Qr64DVHG6i1twi1cLgYi9hZh176fphqYQarML7wvKBTCWodovui6jAXRoKhgVvijRWcY",
  "key26": "2H1Gi4d2rbAFUhs1dCpGwHT5Wwn11UnXh8hNjHLWz5BBaLif2FEJzFTTPQaMfZk15kPCmGp9vBLpeQyy6pQkbVvm",
  "key27": "2XH8163ARwqY6TnhcN2Beq6t7NeCb98DrGTXeqFhBJsCiFnQeYGWLKano8qjNF5NXn4ZTU3tzHhUoH4kJUdEnpcj",
  "key28": "4CJdGa5XfMYxjk4xmifpwgkRRJpYwhrxcFLAgdgPuTaqEtQPk7ZY61ksj4KrGRPKPYNXhE5TZDAk7AGdXwYieyV8"
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
