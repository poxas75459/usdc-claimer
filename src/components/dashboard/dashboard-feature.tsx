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
    "62Wy2v6i8KGKNzdhc9wPBtvHKp9YLDGECLna9xTFVrwLaBRow2vxxuUHCJCfZxHRW3HnSeUwYTQ7CUfXTC5SVZWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33zfikp43inhMQcaV3A5MkMCzbnqexY84rxy9FpoqjkKwTf1uipmxKHkGtBHrZch3pCpgoaZARvhejwUF2tgnKpP",
  "key1": "2EX1Lr56iUs5nf2KVZC9QPSX3GJVELqNT6HJsk82bPxCXYAwa16d4tkYJq9mqXeod8gWq65ZpWAVk5rbthYBn7qt",
  "key2": "3utPux9gaKtBqkR6uGfa3mYbNSccYtEQbP1U6vvZznXde9xHzY76rii7XNPE1U5L4Z8WehSMAJVgxT9vfLrJcALY",
  "key3": "3WAsPsCEiLrksXY3th6f7Wmz14CgQNo6SqcWsEZSFydaAc9MNNWkdRR2xWvPQK3oH1dpkuSGoz3CSLq5mkowYscT",
  "key4": "4ZaycWzhDsZ5xRBkhPi9rK6GQNxQrdJb9jvQyAozWMaGvTXNmfnKgXWHcXvfyHSjAm5UJ99nyCn7sBSxttoaZURZ",
  "key5": "2Wuvn1WhnNsppWyjLVUhmMG3cL5mwRVRLWaX22hNWNcUYeJqYLQ3YX4xMafPj9rfRA8fpQnBCLtTTys8XaycK3DQ",
  "key6": "bWqV1sSnZ4ViWjDEFSjZ6AfzHhGrtuTiA6j72XK6HR71QQEqLrsjN2brTkcnU1ABn9PXP84ESRhNdXC1EvL4NGi",
  "key7": "5CJY7uHFjzrLZNnou2hS9s3G4yrCVsCrYV58fHvww5ff7wEuZZpK7VsbAuukX3vaoMBsBtf7pyEizVitK5GzHhoM",
  "key8": "KXiA1zZoF8m99PGVHdfwYCL6GUEP7g3MatTXzzTHgzA4gzHYga85SxQgivxTvcVRYNjpzV34dBgvuD2p8RaLAtE",
  "key9": "2CPp5h58QvUScP5hGMQpXC3JAw3LF83gNdk9kypK1gMJiUFUaurtMQ2aZStpHc5eBcTcXUUHfHQqFiXP1HbVQutp",
  "key10": "3YMgZvAhEZ3ALQ6wqu4QEhH4z6piWY5WwauVVWRXUe2Vhwq5Miygqb5UcXkTsqbzNqHRSYNWwSG5ytifEmcjyPQa",
  "key11": "64UmxE7xMqK1WGsCTjqFUyA8WFabqoUZfsJC7PF4JSqG3Vuh5cjpE2FNY4LxNEWGVmWBqFdCWEpJPiXfvmfbxqCv",
  "key12": "4d5yCo5n6zSH69LP14ZknB9CXQNKkTjSbc625HWwqjnQBqZ9G3GhbRpLv86etcvY6MVs9rdjH3Jxm34ZW7g1qTfd",
  "key13": "5Tc6jkXRRataFnxLJHjinRbikKzRkP4LBVe4vwWcxtRGShHTJnX2zWrjCH95awwYHxybMLkEdpVpbiNYXL2Bk4bV",
  "key14": "3QGevEAdgWNLRCuWYcTuyDUSQE5X3ZWZFLRBoVjWDQXDfyV4fE6rcbuDauZqdyu9WcX6fDLbC5CxKGZB3P5pn9tM",
  "key15": "4Jreg1fMRXXuomKQYpwUghUtqKmU4WvynmEkX4jYXFLt3Lqgsdcr79bfaXtVAjMBBUoXVdMuWQbCBVc7vsCe8Kjk",
  "key16": "5rK4oCWVQBppfNuFUQW4hW4rkBPkieasHpBZyikGx4y9EZXWbmUSWUdsbqZ7qoLfvGTbp4aECfXDegmyuQyMX1sq",
  "key17": "2kn3PYbXhEZjxQUi4J7QiYy2Wju2GYiMFUTxgina55Gv4Lp8WnWJwWx29ENwJLe1EzGfEyxd5xWobW5KyTi1wHmX",
  "key18": "j9C8jrKBMvjBPUPnDNbHr366pwVRKLQK3Lw3vrQ4cnby8J2dNkaQqE1H76nUFcAJFCnq8UGhwXSB4YGdtF2QojJ",
  "key19": "3eGE4qhnkhWw7TRhDjs7YhsJTmGb8f3jJZSJUjgrTs34DdrSHcVt9rcgjdQhDCcuSiVsiYPw7X63PtTdXdKSbapi",
  "key20": "2RWr7PWG8t8QeBFj7nVAUjsmuj13mukXEkwhm5hCoZrdmNuAQbxtzMRrERaZXey6xXnMdewyEMaRNo1JsP13xAYY",
  "key21": "3pVG9wtoZioATvhpGm6fHPxLZUzrUTLbeJBezobXDoGm95TSzcXcnHFuXfCGV5w2s5TaLDgBofM9vknWVfEEMRPw",
  "key22": "u3rK4bLhzSnGBbsw6m8irc3VLUt5oVPLXS4QCMFxgZoBuMhufVduE81wmTe3oRNGG2eW2TSphGGWwKk39vKcGyP",
  "key23": "2irtSArRRho5VfJgahAbnEZCDZCP5qeGmJ7Bk8jpLCC6q76PELGCGosyb8g1N7g9asK1fLZcBRA9BrdBbqtrJU79",
  "key24": "3E9drAjtgVoabnANBuynLoZxyDGiEsiwF2B5QbNXBQ1zxGWQzXaEQ8mUYhwRH7RKE8xDUBFpk1jBqHzN6H7nQK9n",
  "key25": "2k3TapLQiBxkud9K12CLya9iVwTH7MMGmS4q4JCxpnVZXn98EJkjPR82s8JCU5GJ9n5xTy2pdQhZKxkqYqa4DNgj",
  "key26": "3pY27dx5a18BKLjT1SenCDdpuyiHhMPvkRWBdHfmAGUrG6R35bNYB66d4tAgSz7En1VqiYwsUT7rJbbKG2ggavpz"
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
