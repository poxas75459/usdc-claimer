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
    "MYksycR43C1LQxMvovgCiDqyCh5iWt2rGKALq6pHh6FxQy3nyg3ppPVyvdej5ihLGaKuTtamuJFzY5vVTzsp5cL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hPdLKxkY2VK7pDtZbndx1CPrbTaz78ukKeGEcVgFiJdSbxUAwinjpiupq5YwbeZrxmNV7y4rwSptN38xJiJfZ6s",
  "key1": "3vKERMgYPab1fTLeUsdBaKEEDfZXjxj4dnHP9fvi3PeaypppG4PCnCyGqDwuDdP9JVSFJgpC7GuSS35gAMPnoiF5",
  "key2": "3HvqoMqwBu8FJTse6Gb2DvgLvh6i2XbKu2sCjnLbQU8MMwuGPD6Hhg2a4YXGNx6GZTAFPV6JyCXR5YLgVaZKRC5q",
  "key3": "2TRK316EyvjEgLNYb1Ni5TsjJe3vk9PSD73hurasMqXTX97Vh6xW9RzX1996mosPdyhP86QfdhuT8ZmMpxPQitsX",
  "key4": "4SRtQkUBBE5UAqqFNkTDLfpERhfP2jie3kSgNrdVHrcE9CcL696gj8XU34QYHSnsuVv1vaHXNQ8yyT8vEiVfVU2v",
  "key5": "5MUAup8pjs5zwosmWrWc41VS7UaWoBv54KFzF1Bp3pSBfGExEm484VyJUafnXYMggmPsayGZpmD4YWQYDsXTxgUw",
  "key6": "3zaaoBwfwrmyfoVbDh2t7MTFS8dnx2P8Kv5CFog9h1EdHGVXttPVxYE9phHrWH48XZSMF62SM3484ieM723pitfG",
  "key7": "3utFZKWKuBR2tWaZ7kjPPKMB9nCJqGYUMu3541f8NZn7uedfd8XWWfBs9rij9B74EuvCRHkxo9Qeh9SXnHywXJxM",
  "key8": "3NXzEeyRwt9H5FSLJEypptcfaUnBx6WM9JQ4ikqkFLPaN3iKximpfEFP3EbtBAvbbvDbbaooCYEjDgfru3k38dtX",
  "key9": "41i1UpA1NR7rNVAB3WEP2M1EryHBPQH8ZTy58tr3MaYF3zk1cdGS1BHcp8NtCD91nVWdUuwYm9tvSveMc8ergQZs",
  "key10": "56KkyExEHwSi8AV4c1mmTeTE9VzxJhtr43mpJLWdvwcBrMvuN7czfCSjPoMYX7pMP1Ti5wVyWodoV2eaGRerY4H7",
  "key11": "3e5YUa5qtoxYwkZdR9HThsMsTTSgV84Upw7T3LY6MXBn6dvy63fvLmqedQzwVeNcVCjJhGN6A3izF53veAM2U9CM",
  "key12": "5PAuNJkrWj6BKKWZoEBtSn3jhuS9b7o9wmDZsbM3e13NWtXJogxVCHKZNfxSoD5LEvB2uEYaia5g1cizrA97sDz4",
  "key13": "61Kyr1mYcHSmi9v6DjRwYSnvBmyK7ggrjcHMtytkzFTinePauVyHGZNfC2NZcLdkLVKs7vRwBAWpSD6Dx6Pdv75Y",
  "key14": "3DQBViTJiKAEiRpwSRo3nphpDwNwVkLnMiRHu23h6SAftah82rfXC6m1N7yeSZ7FLVUjaf89wm9LeHK7o9wUuND7",
  "key15": "2mELcjSMnzUFUR8qbBZ3EwBeicZ48KBYzCinEa8gQjV9yrdQ7nCPNfa3tsrr67xfAQ254KsVXFjbXx8sdgUPiQk",
  "key16": "nJpYQEStdSyTPJgXsRVACNR9ZN5stcAo7B2rASd46PHziEkmvXePaCk1GYaYrMsmgFhZtRF7cCbTGjVA4GP1nfr",
  "key17": "2RcsejpQU9Rwyjw4hJkE8MuX9nTWWJ8b9dNnw7pYKgqNMXTQZNQebCawQ8VJrh7qyTdKZe4QUMsdkYrYnWyneDh4",
  "key18": "3cXJYZMk9ZuFmDBAfQ435S5RdqfQ4PR9LURxhhbMTuvnNGXUptrw1NVXN65wPdrKkAwRSFtTJ4sroYBGKEFE9Ji8",
  "key19": "2czsmmExUVo4PQ8h1pc1hJMssf7tkUSqnhgJPiaDtoo8ZyDV4dQ3A5o1rKZ4xFeMZJe7Ce8UC6GrAm3iYS9Ef8Pk",
  "key20": "4XmE1f4b3Eiw5Fj8TTw5mNWfKFHea9eH3znSe3PzDwzLcUL9qbZswNS5PmFWcJhrxwzZGT7rdUfjDRu7m7gsxQMf",
  "key21": "3W4zpa3cB13YiTPY6LEBufvEhHhdgLmQxeyG7MP5zvP4rmUGDaNuCW5sUG5mt4rvBi57DJHoLT1XTzrVkPntXa26",
  "key22": "4n3E8kFQx7c3sQnMkmUjCjgxx383qf947rebrU9NJEMmJ7g82K8sstr8bs583m9Hg7nLHhHd4egoXkZaq5gYFevQ",
  "key23": "3w9mniSmoru6tmHNdQhw58WPNcw9YZDeThumYDaxuWESPCePZHqNgfnh1ToUXVoAy8PwFYeLUhzdvsyRCDMcP61G",
  "key24": "ae5asLbdQ3wLfx8WTQZztjv2WqBWk79NRKDd175JC6zs2mgBYuVrTqj9dxX8ZGFQQ51V4zoUtwEi7rXiXxTJx8H",
  "key25": "FewJMwXCp3bE1PU57KBrHdzAztzQo9LFxN3Kn4F5qGtRZn7xQZjT3nsX8FRGeo4h7BBgQ9AtFjSXkZ2HaammCdL",
  "key26": "2d4tyLJRx4DApMXzzvYTdZiENdyzKVTCQYZnpBC89aCEYps5mvj5H1oT5UNj5oDP6JVWGJWFmsjnuCrau91saM7d",
  "key27": "5xgfYeSizmf5g4KvpSmHCL4LL9TrJ8mQFKuLeq4EdYRXvo2kVECFiuAdLrXyCeCw1vJziEUBAsf2yf1CwzEwwkUa",
  "key28": "2Tf43JJCnUAv9wNgD5hefrbE2QqDg3i6M3bCQwLCgMzgtnh2e7peWjQ2gwEfG5Re4omyFf7ZKRMrDGLfRuHFXK6G",
  "key29": "4JZCrRga5ovMCao9h2ShfybPhqhjug3vkw8oBEnpd49cHgdYkpnCWBrrckENo4dreQiZJJ7Ei5LqKqZyvLxnv1E9",
  "key30": "4XZrAePS4Njv9ReHxs9PWm8reA2vELozsYY48C3ajw62TSycya92H7XNJ4TuisoCnpEXtv5JUMZ7MsjXRfYsjJVQ",
  "key31": "2s348PyxEe1eu68xSyo1KWWEK2SBz22TdnmXq8cE23zXKjxrRnHuFSdSozP6z7FmqB5XFZgPGN6XYQvgRegaLKPL",
  "key32": "Frgw5jy5MHQK1UpfBkUoiao3SfVsr1iavfvKjHeNSfzKbHNJxezrs3pcURKdL3sDck9JazNRJdw4wxHTaV4XA8a"
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
