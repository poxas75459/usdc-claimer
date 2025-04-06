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
    "5oVN6funb5hd58rUJuU8VdSn99gGgiQv5Yd2oERmFWjno1CyuveuciCFxcpBrUBUjhaEEgKagNQCtgqn5Ys62Uri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oywVKwdbFZg8tfqoUiwa435f7mEukp6EVQu4fQUuDYqCbEhBkh76iz3reSqzrLJtfPSCHYLJZPke5KJXvDy7cAR",
  "key1": "4FhWZhFkk9tyfV6tVEZrkFSk41xEsgBRfuumP4DoRvhLRP7nhmwnHkFhnozmagpSqwYuPd4KvR4qA5z9u85NSXoc",
  "key2": "5e8Pammk4qo9EoyZfixkoZnjnKjobgRNd9TEzDkPe3RQny1AaGPazjMPboSa7c3Gr4ciUeXLdnowDUKCKewkakTK",
  "key3": "2JvBLjr5NAiMMR8FZbfMMU3zGsKg7jyVw3HbVu8G3cb81CR4KZfdPQycvRhk2K6BDZUit6CD8tPo6v1eLnBhKZzH",
  "key4": "23bJEDWY9v71g1VQBGsAAJ6fbvm913kSyQqTMfhM45FGtVwuC17r4EwMRGnfVxwchHeGu6xu4Xo3nrn9vg4L5jHw",
  "key5": "5JWT2UxH7C242NBhrZrjtVFWtR2C9EzpKRyACUDfXqVTGvMH6JP57G6xtZYMjDoiBAg3nwJ5LQ3EZfANPcYHa26a",
  "key6": "2VZiQwsLcyU4hz73w4fXq8CJYCWrxzfPN2qWMF4arqW9FVz8UaVXqUq7UeQiofj92t6Xt7Av2AdYeFzY67YoFzt8",
  "key7": "L864bVSVjinycdAF8JsK5fmbMUkQKCjDy18NwpGTeLXzpatPVzFj5pBsz3bVMAxjH7aFX2XnZ8z6Ws9Cmq5zBAr",
  "key8": "537QiDwygbrPbC5vAHuVTD7wrg7uAmAGW1mGMFpWpcymR7rWbFubGWTo8oXXxmj2yNYah9cjWeRKzACUo5XzeZe8",
  "key9": "2SgCTnKvRzAisRPLGtc64kGjm2DrV5reHBANiHFDKbkYbE2fZx79vSbubinbvztFaRaox2YFa2wV677T58ps2zWh",
  "key10": "57KHn2fPLWt8Rw37uJF1Hq6JYACsCQezkdHqiWoFG6xFwRth6EPhNrj8Xt1z1hFLEVnCfHK7BGxe8XH3kLbS1Thx",
  "key11": "3miEdcdojuc2TMoYZhbuKF5kUXNyoXJ3uivTcrPwAJkX6Z5fYivvpLitAckXbMWdgJiv7fEjtVE2Uv66uSARkvoh",
  "key12": "28mhB1bh8aADDebjSMQGAGBbu2azxTVXxEe6t5XvB6Vi5ZXkKYgPq9ZmdD7DE2XVkxPmedfYrTqRgDddVZC5dCvh",
  "key13": "2vJbYyKJBQPXtovdrG6heEyVxMk2kfjLY1G7sPSbtBwkwbaqBwXWAZLMSUaTL3qqDVMEagY4MwDJFhrHmz6TPuM",
  "key14": "46zPp1DMUT3cYtUQAhdP7Yessj1K7boDHpaxdKA1TdaXiBxfzDN9ZmTVR1cnAwgPhFp76PQsJrH2CB3mBq6DZ5AM",
  "key15": "34CxAnyDDoW5GGAnKRaZuL7VHeZALUohooENy8573UZG1SiNW5vLfg382857J6Bi2dhZapmfgPfZWnPLq1ezQ8Mw",
  "key16": "3YzJBrvDCD3wHCRtVyhYzUC6qAujtpipkxQoX4p4V22cXwqjvKLVkH8oEDATEfqMb9teu3iYi32yepYbjQprvK1m",
  "key17": "2u3XmfYs5gQLbu1fH1NCiwJ7ezEknXeuhc1XkFzBoLpd6tobgAemEh1xrSAyz9cWhLysanHLxD5my3i51ZthejFK",
  "key18": "2nHFTBuf9bW9KGTH4U937x3v63AfF8K2Ao6GSB6yeFeY2eYGHxvms4gPovxuaHgRvEBVCyTZebZALjVh6UhYz7FH",
  "key19": "2WKG2cxy4dqpiTbzWKEmSDdzjoXA5b1n7XCB9GDzP9RnQ9PVnJQWQ4raQbq8ge9HEGhbKFfRy39XsZGXBiBBArxe",
  "key20": "5VgrUvFuZb6e3XZtxDzK7G65YPiTko1BsUqLXJqEkhBQe6cj6Q5juhAhBhabkHy9we91Tyhu9ovmbtR5pyEXCwnN",
  "key21": "3jc3MpRaXifqekUfqxicghhcL2UHJJY4ubu2uTUYtiKQt77M7btMfsuANKRn5jdQa9X4nvJSuPK4fJJVB5Wo1riK",
  "key22": "5xA4AxuyseAxKZqtG8kHmG3PMgEv9qr4ua3QgpvD1PH3fo5imE7LX6BVn5zhwNfCa7xWiNJZmX8XsVU7uDDJxg2U",
  "key23": "2yNXuqCJMsevfj6LCW765xBLWYNTVad6z2W7pfosdHaYUAUsaVhzQqf3JqmAQnnoAhPowjvHUp4fuQs9wyDj5Cog",
  "key24": "5bqmhReLTvqzmGYJbXhbE62YPQiRTpKfPbSjJwnHW66gkVrNoBK4ttcQGL91Gwvj236m7ZRd124FEiRtY8CzEhLj",
  "key25": "4AbN6oHcLNniCWkjrmRL77xAWDXbi9bkgYRkRedc4hnc9zS9xgfnexZVLns6c6bXt93Bscws243gzhFsRw14f3zo",
  "key26": "2gX8ggbmZzsBFUnZoyLPHMyhQ9L8G5t1JwkiN5odYrqpKrFeyJzLoRp3WmEZN8jf1sky5quqp3gPxExf1ZwRtzzk",
  "key27": "4DxnRGVtwp74YzBGeuaGefYtBVWv7jQcZhwg6yHXJ8h72cRqyrgcPAEPVwqCnL47Wa5EUHCtG1MKN7gkNmUVTAT2",
  "key28": "4NyvYydGzv91nWhqQq5hPXgTpCJfQmUbLgpVudtJneWwgkwvrkjML5Nch9CqjyPwy5cj5zsgC3uTrYzxbY8Wxu9c",
  "key29": "vBs5TJccAYBithS5AL2jqRNSrskvvDWvdcJ8iMCTX6PeW5K3iA3gDF5maVoXip6gSvuwZ1dSB4RCnw2Sb8NfhKr"
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
