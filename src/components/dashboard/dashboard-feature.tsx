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
    "2fhsPkwhkcjh59b8rZjy2JVifhVWm87mHi7QMnakgwBMdLk8DTgr2VPVdWrQF62YLepiLuDpqHU25ZHyhgdAy3Wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ch1usf1nDWPSj5Zbm8wYikS4EFJ1KPn5pgtubspYvjSVffKqU7tFuFEgn7nxt5Yu8VooGxHDtKzokuuHJ6hrq7K",
  "key1": "4hE1Sassrf1yCmVbcy4t31NT3yNYaPxxraGeM7AaxGUzftuxWbvp46vcNzUsP4vBuYfH2qsxsmkuqCG5CAPiV67j",
  "key2": "5hDXmm3cHkeW4tobFrJR4fS125XAd24pmWNcyjxagggWXF6kLKph8fiwxx1xEyGP7zpbgxWCDg1Vmur1jqVDhodL",
  "key3": "5EPVmkdxjwX68BXEKEVER31Zg6ZkzoZC5ZgUVfyts8VjSK8ScenWTCNWPmjx16g3izJzroM3PhtxFWQihw2PbjYB",
  "key4": "2Dsd32H9yXz9ZEaRk9Z9qs2r7FYq5vitM3tihPdYRsExQCxoxBzVHrRTEq2s1Gmt1dbeggnb7y9MhgKXuvFcyW6S",
  "key5": "2kiTwbnN4AJ2oNJqJYREw9Vq1pwNM4aojtpHt7PLDXkBTTGHa9T1duXgwtYJ7KtP6smvrpzWasWXhiQRs38wPFxQ",
  "key6": "5En3NoGsJKgnTDfSNwJCB2rXdq4NQ5EQEieTWCcnb6Ykyof4KvLiFqjpaHkZvZ1MBq1nrmuHGf6oa5rKpuE8xgxZ",
  "key7": "gPJ5SuoYM9yVEoacuH2TLREwnt3wNATxuCdraJtmj7MUBnnadxjw7iBRWtr7RrEAgQjPijyejtvYnE5v5iboWbj",
  "key8": "KHtZZUoekASR43oPBKpVb93N94ivXpNc1x1B2TNgwoJRLD9v7hYgLtoQUuatN8nmPbWQMAFNJVy3qmj1F6VABjN",
  "key9": "5jsSLZLjxu3S1aFFgiM2z36kFiAveR6D81NXk476BcFMrdLcWHYuxezUQT2VKKRPxXNdmQffWinQJ7bxTfRJEXzG",
  "key10": "52dV7rYiycy9CX7Bc42doCMUNthSrxDRX85Mhg2aHUEnDgmxkRhuRRrQnp4HZDEPL3sYn76fN6GNwt1vSW7pW5U7",
  "key11": "2ipL5Z81evVXAPd4dVXYXRacgYsZuH1W6u6DCYcmhXKtRAxEeD1Epoio6YUaQ6Z653t8DvVLbNAKCN7Q9GLfxL2M",
  "key12": "2uDbidJDVt2u2Q3Yn5NnUDsLNhKzjigcCuWuFsVnmSxZ5iPAoWeqG5ENwHfoEq9ZLj4HifagWy1hyVY6uQgDiCB6",
  "key13": "yztciHdHRiDjpPSMW1hCRLeBsA8PZqG5F23LXKHzShTUxBJDh5x2T6LSih5FnP3oBkx191ipXtUBRMkMSV13wW3",
  "key14": "5E8Fc7zWHma1LG9LSSs9mWAR3ChLe7iPerzu7qaUpJSnXiZiMearZFJEjrUq2DRYe9JQUFzuNxjFccWfGufQoYU3",
  "key15": "2znUW4eyXoDWRPEQm56kQ8zmepuybs1iT7X57P2c2U9pxSnbMAabkrHoLR9y6gD7ekzHTbtdTMgG7RCFv36RSqX8",
  "key16": "4j8DDPpXyXgBaupkyVgxCLxjJ11Bdz7ZGzrGBCzhChZxvBZgRZP1cWz8MutGgkj5iDQgV7DDPD7ED1pw2436HL1q",
  "key17": "4oDi5ZErykGbydvoRWm7JUgp5oybbNZ7kRvvAfLCAAWBvWT8JbyiytAsyP592QrXhFAAgnk79XffnYZw9KSb1Kkt",
  "key18": "31iifL8Xqnkv4CBYDpPAnaaa6Y1qKPwX2PLWhyVpvHHsVHht682y2KBrrw4DfNu1qMPXAKu5YNYeerB4DrJMpQUp",
  "key19": "3tPLYGCpP4MczSDtgUhRRAx8MHpdWonVD1Dz7dagw7W3eVBfkKFbQDamu7NZJTCuAWvYn5RbKB4B9AC44w4US3tS",
  "key20": "3dKfME8qCWZkGZwAjvrbq2aRUTBFYRPD7A2TimmYaBU1WU3e7jvx1yGBKgMSWpMYyHvNCeD2VyVro8QsDWZq1Xos",
  "key21": "4iUiP8kk8wJFTKmrsLWtmMNymZ48A7CjLrZak9FHefn4Y3nq15XTgA3Fohvek6toDVNDDiLHpkvJoZHotweGQRt7",
  "key22": "37Sor4phYZCx4TD2bDUW1vhRDAXcLfevAWJcYwG9bC9oBev5cJzumdLBfDHen4KvFpoTvZ793eY64n2JnHGkFWhA",
  "key23": "2Yj1qtA9vL7rGYyqFJq5havwihscJocUe3tpDeXRYmnUeoupkRqD7SNmrijrANMDedSUNzUV9CKTExYTgSLwSYKv",
  "key24": "55NRwnZHx5CiBWn1ebxWJA3eKuDui4Ydgj2mMfYXPUmenwakXTB1yNDbGEPu7ak9krAw91YBa3CsYm9os2apUCVe",
  "key25": "3uG1oQbjcTqYawxdiMsS8sd9Q9keW6hdD5rBYkxyXUFSccaTCjA347MUYsVqoD7DfdBYYNPZFFHKgQduZvQgZztL",
  "key26": "4yDggAAVCGmEeH4RnMeBZuoSxJDPVLqoD7m8brzxBiXM7gFpAVZdE1asz2WohhVMj8o9FLqciD1SNTyoqGBDDxXx",
  "key27": "5xuttzjX7UMc8Pq9hcuwcas3fiZ4PfovtEh46dvA4tWXuRuWKh4u2CHtaBwRtWrTkVpbbEMV9LdjtSo5KcojS8i2",
  "key28": "5MDXmMfHNpignZHshhzXgkMpNfye2W3QXoYVbxsUEHqTuhYz96pcqjgPx4Hy7JyjGGQ5JeebqtMdNjnnpBzsbBhz",
  "key29": "3ckuJ3qrnu6vgwnCRivPtqmHn4c4NibCJHfv2gMx2FEdqKCMagkg5AERom2AWNydd57DWdPYSm74tC4ErBanjzBq",
  "key30": "4vCcjBHVmz3fLkiAiHkW25pkDVLzubbkyQFiksFxFSU4JKTgsPd1QF2wqV9WooQ4v74JfkAzyzoCj335NDMYw1XS",
  "key31": "5Nr9bQ45pMjqsqK7a2qcbPyg5fFR3ELoRuNzL9LEVXrzBUesmmMnaJAhNAbJo4mL4L9AMXMG2c6UpKwe2drhKR2p",
  "key32": "2vzHcP6qDkV28f4oVSdCRCpU6Nnf5Um7bjeJPHRAQj4KFjGNadxV1pfax3p7hGGg7tAJQLynp5HD6yWqBW41vWpg"
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
