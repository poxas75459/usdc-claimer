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
    "4CxQmxx5Rb9buinC9scgh4VbdEDZj2K3XEG8DhzJAvoBe2RfeuKFRQAidnstBth6526rSc63uRuG8ET9HEYx8bux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fo8PiU3t7JQ3wQqW3rD4ZWAbZs9mZ4FzcUmwp7VEH3ab4L2cxxUvcWx9J5drXtxV8EBoCkAVm4jUEBEVMNMopqg",
  "key1": "4vm2LnyqUQjMh8jvkKWm1XZ9gGBXccyUKAaZFEt2apmJ4m88CE6QLZ8CggD5ZN3ykXF9XAH92NbcgR9k5wX7aS62",
  "key2": "2vfL3P7QB6jYLXLLBQP59rSjsPDHHRZkfA167nAbPBRR71cSeABgpjnnqKVz4igoQs3Kjemqse8wvTCSbfXbozAw",
  "key3": "3DbAqKvi2geK8WsAzyDeagEPBKxtRc4fP6VZVD8MuqtpQAuNmjkUmcKjiSjBZaJiTXBaicwpMTbKSNMXWcDSqSaB",
  "key4": "3FcJWVAvr6FuNhMLHWm9Dsu7EZhp5UkusM3Q7fktWQV16VZD756b89taWgpMrU4fu73AFfBHBhzQhasKutcHfCk3",
  "key5": "8TMY76nHX4LUBEYdTyoc8cn81DB4D6y8hoVJAL23bXhSbEFm2oGCxoAsGqV6AQWpyH7JmtN92HXnV9iMV2Shb3r",
  "key6": "Tv4f3PF69wuqKjvdzLhEAPXKACma3f6HzuRta1JPb5D8DcoJ8GPbgHpST9q2n9xXTtaqyZWVt72k4WmD4ehanvS",
  "key7": "38zYXN5cjLNGd2h1n7uhFtMB9NuiEbDHQkSV7tNhfivRY9gD8RTodhgnRiMkGY3Khic9h6j4myp2W7edkwbntBL4",
  "key8": "3ccAMrMX9RxmHtsiNt4VqietfE1yxyw5GrXm6kQF6evuckcVsYGoPeGNDt65EghKDw3tjkbHfke5cmYUtX5pURw3",
  "key9": "21YrMhiAsxPKN3Y8JsTS2cFkc8bMZiWwC3K4LAhb8zJ6dK6a9TU2DbyWEhwxnb7VYjcTtXq8mx8PkJZNyhtsoq4a",
  "key10": "maFjkChjmY2SqMqmL1V4yKiHfXq1Fcu8TbiDLem8qsGbnzyEHq1jdEz2z6v8WQA6EYh2vbeHh4dT4R5M4bKoYGi",
  "key11": "5tbeRJPhaU8gbfMN7ot4Y5z6N6U4cECBZ1d7kc4pHnJ27LhXeu5LX7t7H2Zg8bKjxW8NfSEdGbxKYB1QhSJGx2Sk",
  "key12": "eznPQzL423kyPEVJhyKSYjqkgme6H7T9DQtqTve2pPbo4h4R2kq1Yp4EDvJU8D1EALdQvjHUF7Cjk51FuKxYrhE",
  "key13": "2xJLvD7TJTWHTWqRHUE8wyUgGbrJAiNAcsZNGZX9jHtBYJ7Gd6TuqCPfibLM4Lf8kvXji1CMG9E4iPHCmbTHHUxs",
  "key14": "sTGCZAyz82WMTkiRCLjmVKqPCNFTusuYB2axuFEKTiH5nG82BkRFypWPKt27dwNg6PLKum8KG45AJtL8Xyxi2Us",
  "key15": "3tv9QFfxkkjTL89g2grKrHgeKXGbLQrverGeS5quL1k8JEduTLFMUUrus4FBXUkCH76WoZgczJfbCSpvq4RUQA9g",
  "key16": "2KQgoN1R5F9YVHbn5GBHRTiiKbtVoYK4ADgGdxLpj54aja9RAHURg4Wk9hmGPvxkT72HSuSBDNsuerMs1D2eWT7c",
  "key17": "66zaPvPd2HQSzPzimFD8KZy7FZoi77p74aE9iGGS7cnYQf1miVYUEwZTZwnDjehxqj7thq1jFyTcJZd26bSg39Kt",
  "key18": "3FvrNrAnoNfZy1XwGHwoawaxxiUAHJZa2VzMjTgN82iArBpNjcur8xzXpPeTW2Cubw1zmbSYAHBRadziXZrf2ZES",
  "key19": "3UWQiPGJzsgfviWGWTbm8sB3fKBhsF91qwKTtWrwTMHcsfyLoftEf9mDXubkoCGoABG5Qkt5PYdVTT2SKN61Byfd",
  "key20": "k8DgdJvqjRXp5mQqLe2SXdsP5tw1yUnnNFCUHbaSwbVMHW8DFdw57tkwdsDsujuxaxA4QmJrx4fumDvD9pq9M6M",
  "key21": "2ePV1MheED6nqwVeoADoSrHCRThB2SyreKbMFd3imvhHRpoYkhBNo7t7fz2g8iF4Q6TrvXUVTerEcGxuMQkxYfTm",
  "key22": "EfDKTJC5pkDSs9NPDkEJ5qLAwuyrDTbTrPdFWv9pgxp6CKz2Jt4oSKV7JFcRy6ZKRu9TgquGLSVEv94XavEvK3t",
  "key23": "Tos9vQ3mXuwTHkVt56QHv2mg8wskW6PiUD2jLkr9kDpV9HtJn3p2BgomupVCZKoLqceLHydmytyyQkVUNdabi6G",
  "key24": "5LvDUvsvo83a7ehAyUAq74gwia8NPauqoMErpLTTp2z8DSjWTQ34LPaPGbxUHoUvB1AQMyjTPyPwibmNrTZJSSjZ",
  "key25": "2cwiCLovm3CFeMe761PK6fN1uAXUKMLg7J2VRvwWhS6HLCQsxS3jVZwTj5SUvUKsugXdgPLRxQ5PTBE8mSbQnhJW",
  "key26": "3bGvs6PbV7As6d1Qdh5X8h95MCdgfNfz5GE6r3jTFJpA1n7W1G4ehoK2KqXNho9xi6XysUwAq4xa5dZ4tbDoK2Vu",
  "key27": "BqPpFvH91zgyGypCkhHcgViEWrjG1ph6pXezQ26bfCU7eVjEvDgmfArkHnUhXxuZm1rnuvhCbgdLgzKk1YPykxA",
  "key28": "5JmUF23TyxHWYnc1v9rhhsVXeETpfsUkwCsWB2uvgpkFDqpdpVa9ns2FypmZWv8EBkMtWJcZdvejXoSucAkd1yTC",
  "key29": "2J8FzCzBrNLcqgWmhcXmiwC6rDP77uCdSkkQzJZ8B12odSso9CwpsrEJiWZwvRb7pD8EZhVPF1sHMwrrUEXssWBr",
  "key30": "3Dq4sz4oWeUR6mTGypu3YoqPfWLD7XD5VjSYnEFmG2KZmXFUfXPbeCSVp67Hzc7uZvi84MGx29AtNcBuHRVkDyRB",
  "key31": "SkqopqPvmPAF5knwq3N69Hi3UWx176N8X6wwdnzHH6gRByMhX73t8k93KXg3nkJ4PPKmDasaMBjc9tAVhVQT5hZ",
  "key32": "4e4Rem7w2RG5jUWmEFVwsjGGfZ3DZbzPQJWn83TPAtCH7e6eAoa4GnDUfAu5oj2ochJrvtPVDPzQQk2NmN7p7Hmp",
  "key33": "4PrGDFJjrC4N4VK3bgS2U8L5U9Ss1XY8obVw2jhA99Gats3tY4LofPfCTLBmQgNMXN7AgLLudZy2Yih8Vwn3Nxge",
  "key34": "59V7NkN43rHpFw8e4cyPYAPATDxisRP7BmbhcDXYffRyTStvSniSBfRQFZ6dJCeZQG2NvZsrY7wh8myf3EkyVnwe"
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
