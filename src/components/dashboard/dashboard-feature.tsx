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
    "3oX6a1jhhkz6tKUz1bQy95Cfs35sCF1jLiPx16cP4zS7RGTyktGkmLWFgyqEG2Ht4iNC8CSn3tCdq8vu6EQLErri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kRziqncgsZNRZPpJu7G2jMeBwkXq8EBkQyHhhGxtzzW9JU4inCQEeWFhkwsoAbGALMMvXV3FbfUM3PYFbSxNTGo",
  "key1": "oEyRa6EVS3bonodK3kco8G3iQ4CMiqRE6aRtQBJxHbascHZU2DQCWNJpDnj3ZifsuE3LRGrZZwKWHv4PctDvb4t",
  "key2": "EtjnFXQXvR9VQ3oHfiuFadPQZwZKeZaqWSAYHgnntrWytETBgSvW6mBfCnEeScGT1DBMBVsdfmA1wvknWPPpEHS",
  "key3": "3bstW1ag9ndWZTdTNVxALQvJM4cVVyXyxkK1GUK7w6YBjSxXuGSF2UPrMjRcY3FK9wekKcNECe5mTbuMvDp3Cajd",
  "key4": "22RR9DMM6SHWihNbvFyFmhMs5MKMmp5zASjF2MkxDrwp547gyCUzCXeBTmfYESjTaUw4LndP91PSciLwEgN6eEPg",
  "key5": "3z2inVjj3chiA4qGZ3ck8dnmw7N12hVq4EYFMN1y5nTQKLpWMknjY44wTy4jMfjaBo4aPr3Lusq3vnx5D41JQuPs",
  "key6": "41SS4Se3Vo9PR8DJYArUFLF7vJrzd3sajTNcZtnG1Lc9yVjGQ2PesqH4dEnQ5oF2VtXtGSA3ssGh28zU27PHkZef",
  "key7": "4Jx5Dq5wW6XqmdoPoqjD42n8nwP825i7xA6mzABJZhgNWd6vKPWX8N7Xce4PxHcVXRngcuEorX8qNDAr4mSwUJiM",
  "key8": "2sBoaGCn1wt9DhnjS6CiVBmKunKCTfno6McuPDiLtq85SagoDue78osePebE64RVvd5hXsiVk6q6foq2DTiXfVCz",
  "key9": "3QjAigwZWJkqXM3F6rD7EKi29gAGEm2kMFFn3v435pzR2bU7o7ZoEE3GYqPUU5iBu1gKhqYbKxHVxm4JzFURJbFs",
  "key10": "hv9Mor6gvvexUXv8i3zg2oH1QtyFBcrvTjimci5iBvuCkWQHZeFnpaTZ6Y9GjwUy6QXMfskAqU5yJd88dRakbyi",
  "key11": "3cRrsGfsnMwHRisQAsyWR2GEsJZcTw2L7anDUqMAZ8f2KD6g79ZKN5oqeELf6s1aUR81pjU1a8RgX6BrumQJCaji",
  "key12": "2QbSAvdpUUmeoCBCffmU7om8uQnrQVwVpthaB6sGhbTVtY2qkiP7UMy8ZeHwgESdB37Zyn8b32BU4AZ1MCryR5e5",
  "key13": "3ANcpSDt9Hq5fQYELcBMMTaFcT6aSkqZM2WN5h4yqV5bJa2pPmTYA5HUpeyvU3gpfL4ftZVM39WCZH31PUud9aJN",
  "key14": "YBRjYUr8pX9GkHRGpYKszgMZ5gPSsX5MxRMvcYeAz1KSpSsAFUq8SGJNsayUF8zS4nS7DoKwN5zE3XXfHmBDEab",
  "key15": "3HP46GRimxKLWoPue3iuVVjNAJnJ15KTgSnKSubVGuE8SwAiyEvtXWmkVhhWH7K9vbgQYDgt5nNeaxQpUSsX5jr",
  "key16": "62ZagwvNcwbhxa8cHAGe5DGGvs97Z3FdbVYqJ9UxnJJHASocnW5zJEUrPnwH7TcV6rrPr71xMwCdayUZPk3ZpnRZ",
  "key17": "UYbB4jZrqrA3Q3SPgEEwghHnZX4dn8VFw3bU2GmBQBiUKkSEPe9Wqm8BrKR4pwAvN7qwG5xDQJFQkGJWrXvxWM4",
  "key18": "5TozAFkMYKbZ7T9iZy8VX8XAMC4S6t3GsZ3AeRfCKJ9LgafTxrhu93cTX7h5oi7Zw1fAAsr213QPCXfZb5CfmAnJ",
  "key19": "2uCYhBp4HscT4kbhZvzKC5TtPqCg5Fvd71V4389wSSmoppfMByz7T5GNVXAaV3CMKkH2MJs36jJZcrG4TLC4MLSJ",
  "key20": "4vp3ZCpEYZwzT9PZyBux9CP16BmcfV2hjboDmdkH5EGSkCYAD6VunWKpKMFuAcZCogktW6pLJg3DYVnjWxN2PNmB",
  "key21": "4Av2ouD1PFT6jWq7J5XthieGKAywe73tiaq6CevMPMqKV6t356GtyxvE8U3kidjcTEZERaM4iXdh4fYoEMMrW2L1",
  "key22": "4wzDJ4GBVA2Xb8omKxv3HVbtFrSwFDCWU7wEnTfaLqeKg62Q7if7RMEkQyajkvVgJoz2gDtaN6ppYAdwdqVGeDqw",
  "key23": "56yJFdSYvVGXowRCZSNQV1tTtEUxL59dxmAgipE67XLNi5w9MP7eZ63EXpcxjtbasPHoCWzrjRnir8p4dSbM5n3u",
  "key24": "t2HXfdxSP5MAgXnCVcJ959K1wT1ozx5mQDg9LmJ8RV2QXvMQ7ExAGNbe4aoow7c6CaKWyng1cCaojjS9nCyD5yd",
  "key25": "3i9hHjQXscM4jwPSKiHQR6Yr3Cm6EX3t3LiTfBhXxRHpE3QyjiwEwUURackMErUFdKMUiyv8bx4pGKX3XppNrCJg"
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
