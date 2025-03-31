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
    "25dHKkQ2ffDP7hG9AgZTvuEHbDgTtRAeuegyKDpNFzbj7gb6JeDSyyxzJU4t2LkMgjmnXCifGkayDwVG8Tdm8sw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KqNhhMsv6zcLyp11paeVpWLigxNu32KLqDR5n4BhWkCheoBSdjX96upNEcJXo8X3ZagYrx8yoms4kw47kHrdUYF",
  "key1": "5TLbAuDD8ePeAPxrUpE1LUcDC1iRmTmRUZ97gMfikKBVdQNoMAKkwZLuudGrssDgEjVU2PpBY7rqHG66CEXhWjXj",
  "key2": "4dQ1RW2NnUKrpZuwoqBbeGy5UyKgMuKTtomf3Aovoc851Pwsjcdi7xmLFAwHZ2izieuWrud2Hd2Zccvsy5GY3Xjh",
  "key3": "3826rfo3JwCQxwV95PNLwCE6RLYUyfGAvKjkRgjkFoftLkh3s92ZeGNYkCsdHfjgokZkXiKzsar3Aa9nC4uadQB9",
  "key4": "5Xuv6ZxwqKKqu3XvALPSzpYYqaj7uyyJTPKLFxTrdscLRC3TvZKUzZR5zLgGqaFtSXqYCW757MBja956mxQvauBG",
  "key5": "4FA7YKozd5KM1CjT2mVPKU7mzY2Lp7LuA27Z5BpjZriER7w2pyDnu5P2CayrRkMNSi1cbCiPyvDjjmZ8R3b7eJqu",
  "key6": "3o4ZZSQVy8pcsaQK61mmdfkK32AHrXN7mqdHFD7hXkNe2we6d5hETJub8ZcGXZV7P7U2XivSLoE4xJJuocbJ9PRc",
  "key7": "2iN2GKufaKd1nh1ETrg6jQqtsTmstPYJDT9drk3Ld1LYN4mGw73ymv2kVwRNbHPDuAvJXnxCLJQJwRxQkjHnRGPj",
  "key8": "25Mfvx9S8z3rhnoqMan4djpx8vNdymS2UpZKbtnsYNvVhEWhPkpLFutQ8D312gNfrafqUR9JuKjvvjhGPuV5LFoc",
  "key9": "46Q8JCcCnL23TrRw7bmKhiQaqQeJEdDKz1QAx3FFYRJ3SJMG4nSy1b2GU98mAhsKVMgo9Qu6TWEbZtumXoWswxFi",
  "key10": "5mtgYQayuSTwfw21mTLsVE6gGDBv2RCUZ5gdm5q7Sp9dng6foQT92XdBFHfUYmpVnGNGpqXMb92hM6fYpwtTJnC4",
  "key11": "26QQc2jtcfzezVPTTQgsCEm6GEcdbJ6KtjUTSfdBfTimeChsJPyv71PYE1GVqTBkuR11ePK5LqV1fKhJMT6izAvS",
  "key12": "5KytNZVkjDZoHom6KFFQtqwT2s3ZrY8o21pXN3gV6XQqymNnAinxfH8dxSAeZ9UxiNEAKk6HUd7ZQxNC7Ej9QJCL",
  "key13": "25G4WJvN1ZjtZQgZSGBmniAJDY5vapuo19rrxdZUW3rVsamFuD41L9rRGR6vbYEV8DbdEWzLVQLJUkZ6qrUagtnz",
  "key14": "4VSsYkuDvtTzMXBSKDZQxVFh6ta4sMahrswML3fugk3XzDSBqtG9yq7pYvKd2MqzKm1CCMpXuAhXEX4zY28NqMfu",
  "key15": "5mnLwftXj8xHk42mEb4w6Ki1foerE8NojTe8Z7SxtXfex54ATE6cYMG5ee8TVXaGiGcUtWH7MbVcKkAqaw7spJh3",
  "key16": "5c6F5RUWTStpbriK3U6UEvsQUwBbTZFKcSWfL6RsQQMrPMPnq6aNcsvSph6vtV9ukUJEnX1R1AkGGQAP5dXw9pFX",
  "key17": "3tpHDQuvb7seEFqrLzs3MkLPzrKCjyrX4KJ5P6NT4QQoQYFFGwN112T4GppRxepRM6v75SHYFpAmYRXJNrJsXPFc",
  "key18": "3VMDjPR2XsVTKpX5GvUT2QtXhvLvHZ4tbe6CdC5B1RzFf4KK4T8UTi2HhbZ6zSu7D8Zg2vChSkMQVifX85tS4Mo8",
  "key19": "5yAt8AoavmiWDL6LqnUsnupfCTWu5vkzfjM6tpAe2EYoawkDiFQVnrcQJDX9Up22jHBrfjveYSG9NgG9w8G5C3MP",
  "key20": "4Fz7RmiLhSaQDoNtAzVeuHo6wZcZdvjS2XcbJsF7knV1XbLTtvzJjayXAuvMZvAFVA3TD3TfiEY7SaAz8PFYe2py",
  "key21": "2Td81nS3woJrCwtBuSYmEnagtRVG6YajVzCMAukWnbTTycoESRriLyj4nciBDtP6ijiTfZ6cpTPSwao8xX57ADDM",
  "key22": "2WNXZAZFVusAg2PSSSCvhb2Pok9nsdSD94YU4bJjewGZ1FZHefwDE695QEVy4CNNv8RLfi5rqQn2LxVpdHqQE32i",
  "key23": "1Z6T7H7VgBFJ5pqCPEt3MrQvALmyQAdMGa1xCY4VyuMqFH6t9mMAYQnhMEw1WvbCRX3dL7TMpYfs3ukyWHnBta",
  "key24": "3giwG3yTKRjQ3sJEWudxCXZgr5wH2QznSi3TzMU11TzNXLRYcpwrrLZGvysiMPSJA1L3FM2SRJREYkS69E88xaJC",
  "key25": "58Tn884jaqUM8SZZAUPXXXkYiKdNqVbBCNR6iQUZWqkgcp1cTC8nDnnzs8iYkNggPB1uE4QjSiGTxq4HmScbQzCb",
  "key26": "54ZSemLtPwhEAtwU9Pka4xaySEJaAGyUAFQdGGzq1fwiJdyUNXMTDGK1nvCGAotCzE9TyzyjSQEe1Wwmehtj7Ldn",
  "key27": "4JhFid7eVKhSmAGo8zGCewxHHwo8GDSmvUYyWTiNtym7JiD9fox2STAE2a8enQQV4NLpN99YXkNfEPrv7tNSP59x",
  "key28": "5sdRBxnFMarFk9EVA2jCXM5KGGdrPMNJwtaj3NJbSddApfHoiYnnwe31JEd88KZr9aWrsTW4jzETv2Z9JMs98kTf",
  "key29": "29oBVyoSLcfnGxooPwLYJzkx3Lkks24Kas2qvrJK4GN1uUpBVLaH7RFVGz5fVm5hbxEcwLrg3dbJWi8JQ2qfcE2d",
  "key30": "3JVqu1SznAr8WZugTL3quKbLryY8dJwoNjvWqwkLFCwXvRQhJPDGhv818QdHdgHmhyGff9te91QfaXeHsdpNdq7v",
  "key31": "49is6DnsXCAwyzt2r3bgoxc9hthhJMyCJpZmeBuad1ymPG2Z9hdxQSvyrNLiNTQA74foif4yobMgKpEdfiqKCKwT",
  "key32": "LztqqELkLRAjwKVySnhaUqfzm94MKpVtaZ5SVUK8AZw36R5sVmMZ83s2bwYjmffyPUkQNWcXwfrejT475xrD7v2",
  "key33": "25WVg2nwSdJ2NyJ5afHkf57T4aytwYctksyZc9jcP8VczmWHtQpfSPbcT26M5ZfKmQKFJBqZpj4KJZ1iYR6VnrZv"
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
