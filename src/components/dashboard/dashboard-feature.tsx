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
    "5TcKqzXE7tfBMdiBVYWfBxuZPS5e8SWPnd2chMVoLGskJ5EmW6bRCHc68Dy2J8ahhATKBDhunnE1ndGesXWZKLUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uoYwZMSbFyDnBcwSmsRxtHbprQyVyarTonwrgPhKZ1xQu26MnsGTJja9QmELAwT7uDZsMGQThcTk47y353t8eVz",
  "key1": "4ix3a5wvLfgcujUtZMtvtom6xKDg6avEvrKfyFPuvedjYw74rXqQgoewaXp6b2tQiWqptdUcd8rLh91YxTXG2twN",
  "key2": "3XABEaqLRG6D4LKVAbNiFjgWscGSLrzuW9cyq6mUzjJZcjkwGrtC8uWE2y42aVgCVKkK7FQ1wAuQCbyBnD8VXa9J",
  "key3": "5ymqo2VxMEafV1vpM6vNErQecd1ueCWBQq1xVBhYnaK6cjLHYyqwDiqapyfyYeSDjHZpx6APUn85tNMjkaKBa3cQ",
  "key4": "5W8ru9WP8skQ6TtiYBTQQVroNGQzwnRQWPrk61qDhTpnhC2Jfn8jUQLVGkZdRo4bcVQd3ANm3et8aPSiKm3XQdKd",
  "key5": "5da9xbXKSR2JfcJei5RfyLUkP5Tswg8j7S8iVCo5yLndhGW1b2LmwgY1Anv8Aw8yHQZmkWu24icLaBKuYUfH3pxC",
  "key6": "5wuthztvtJDqCkzTqrqPyTWTrwEHHpLPaYwprt116aBdcWegcS72gagBrhKiUPRaK4SaNQWdVHbKugdMSUarq98Y",
  "key7": "5aRaCCTYWQK2J5E3dZ9tDa8t8UTGFSUdZp7DsziquUpxUXKVHinVyK3iLBeB6wmSEWaiQ5pVxWX5WgSxKPiqYjrA",
  "key8": "3JrkuBCr3Vx8xgF4BsV7AiQchrbtC8L3wVx6EJpCsVpSo4MTpBYkUZngURE4yG6HPbgZ86Tpu7HVDRjNZz5MeH2b",
  "key9": "5es5RV3e6zZJgvXNBuva4QzzKm5HvjXbA2zuc54YzPybRBRAKLAWzN8oDvWXepbgPVho1pnv94xDacFGfTi6v7xT",
  "key10": "63UpD7UARa8PhUEtpsFDVcwFDsNeifxvfBX9eVRV8dgLTX1zCEDoZsDMzct6g53RYi2SjjR5mmQS2oWXd6bAkSUC",
  "key11": "58ZHrRGqVcdPceYZc97y2wACfFz3m68VFeEqjVft55w3AU1cjEdUXfAKc3HCCz55mvzMDL93Lp4waMKfzKMLtMor",
  "key12": "4FMuqZApSjALnyaz1rNusaUHwygcNkwDkRHLvMWxyyv2fkykM5cnD1EQzqudRCUKkERGTCSy5XRRrodUFAsHAt3G",
  "key13": "3roCMGHUg1e694u7Fag7Sm5EP5e9dPSn4tea6ReuazXUX6bCnGcKkZjKRPWBxkAn8gBoL3E3bPEEARPuxagyNNDc",
  "key14": "2EpAB6jiBXo5UEoWgvLzybijxsuhK5aodfh6qWwrgag3JCJMaRAWZUvMNhTrtuW38etUM65VLATUCnaaXj5geEb",
  "key15": "4MSdk67M7uAYb75GcaDadQtZaTACNMpEGTGmvGevurfj84pL9jhM56mBwic6cDEFiV6rMU7L8xg1Rf8R1Vx3Zcf9",
  "key16": "61W8HPj1AxszfqsFVFybyutMs2o8MYcCYDaNWRxtsh94Yu7Uwci2zxrazwEByqwwDTWaJfetdwbiQSvXoZid2WSd",
  "key17": "4ou87XNcszdHSR8ooF9PSg85JR29nDsRAPrcg9gsUipmHJhw4Jy3CWzi2T7gVQTi4vEcfgjHmHBX6dQ89Qgu8vsc",
  "key18": "bx3yQSSwxhTcw6Hq3jm2JiirodKTxAZ3fs4ewMaPv5WAFnjdhnb7XinZiPHw8kUF4Jm1TD8kwF5rK8r6iPDRHZM",
  "key19": "UQPGDq3DqXcDhHp6YvCyXMUoRA6j9uVZwammvxh9exbCCVkSPZ5XFzHVhKKxWEdkAYWrWsro4aNHWdV1uimirnj",
  "key20": "5qBNpYzTZJAaNN8X6f8tTsRx5M4zQWzFpjCZYsYpkQtcS2uHPqNjTR7ErWp81seKahT5UoWJ8gMfiv2rfrQ6PEPx",
  "key21": "3S6rHaKzSfEUUChY2nmayByndzuUyVxNwASww8Up7jgybg7zXZbvgPSjGLSEinWc1ALiz92EHNGbLPtefkgpVmi6",
  "key22": "3PJzpBdZkbWsPeqsAdyHTc9P94UR8VjDS9XzqjADPvRMPAABmpeRE3RMZUcpVmw1TtfroKh5cHoiCw79i7ZPCWLW",
  "key23": "2GtKoP6okaH3kczGTGVZjYGC76ic6ZiQ5nt47kCtR484oKzcTi9X1QyopkLUyorxCb7Rx8cnJkT4RKmUo4f6XZbq",
  "key24": "2KMvbH8E9fDmM1j1Mgzc6MHy1uWaBH1736jCc3hbSe64f1EkBhWWpsHs8WNLw9HknoHh7ZmgPSTngvVptzGDBZsk",
  "key25": "3LZd4a33LJ8vc1Uef6cSEX1ix74prGWk2ZVfJ8UZtaMMptWCmsM6fsHKKyUhp6Q7zdGMKzQs2vpw3VBumaaeT1aj",
  "key26": "2hn93ktQ2QieCmUxjsn53amy1cS4gmh9RyonLKiyKY5L7VELyK6dVGbBqRjHtbFMXvrvWWfJCW3ZW4CEUFqfQhp4",
  "key27": "nRDhsmjqC9qNmxektBTLvGHdYLZGN74sCKeu8v5aH727KL1bJTfW34vPD4YuMPA5BAVgdjoZPkf93vF9Ub9Xu91",
  "key28": "3fvkSDxZhcN2L56yV6f5zxFW3mGqmPZFrWqo1gvAg6w7ajAwHQ4sWQRd1PzSUMNg87h3JqcKhZvADvqMvcpn6CiH",
  "key29": "4y3Hp4vfCB1kWfjPEaysFCXHnAaZR9rCM7Sc7MmQGWiUBampULB8fAmBTGEDsjoQUWL6djxotjzTcq7HMFEdNKZV",
  "key30": "3q375ZpE8xAsNZKADCbetPo8HgYy2JEkCAWypvtCxbNUUEm1dSoUXq4EDmWQKpgRY9sfyihsK7iuZxpLRwWvQTMC",
  "key31": "4ooYzqFEaVTjLjzUYWQ9ynDDaP9j7vVR3sqdqQH2QUhzbixqtR6RH36dTNM1PkJPvpDCfwJdx4wVCnB2wkGTPaaG",
  "key32": "2Fr6CX2XkMWPRGMBiev6mDkFuLqMVrkJ7kRjcZRP2zVF7gPDubyqJLhvc1rjKvSEroZM7or3zqaAyKTnfC8nzN3X",
  "key33": "4obpPKEqfrRyXPWPHj61HrQFRF3NLzysJiQCt9EiUzVgGQXcwBTzPciwWamuyPdBzBCBDgMQ53dYDbpEGxANwUVk",
  "key34": "2t3SNAC1NTEe4Y7h7q3FVoRDPW6Nz1kTQUhHdR18iXpxLyfBHpEDddCTxhSkhnCpqkzCYsFzYUdHJ1D3kG4Csmby",
  "key35": "2Pe6GCgKTrzEbEkXCR2tjfhB6VP2q3nL26K4f118gn6QktVJpZCCFYYUtk3dgcCWUymipozf85tFNNQvQo7LBXQf",
  "key36": "22sRdH6gHoCGhN2bfPsRCdu7qBYB2BV4G9sX4NXXKrqh3xZqpH6Pdi9kxn2jvgPjr3UP4ZN2HDwRfLydUXjNjcAn"
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
