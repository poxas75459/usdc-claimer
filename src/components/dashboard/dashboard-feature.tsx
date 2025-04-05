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
    "2F8apsxo4GwAadNCqCNrAJJXocha6skr3etuAkVxLYbewjAMU3BfawUj53qMvKUFB6TN8g9mjshkwqvUaYfyR9Ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MyWbTiBwApBuUiT6DXX5crJWtLaXpFZQdT6RLr6kw6e2kxhvbcGDo4Kd4hNy92PgMTX3FCc5hHMkpX7itdtTe83",
  "key1": "33ix59BHQb9DAZ1vzCJp2rajRxHeugsqtP6UbTJoKyxdKzCFxFzDzCxC5vafEnMUGawLLK8c2PAPf6XvrR9cV5pN",
  "key2": "FhsC2h1pCHNNhwFSbQA8eujHPSenD9U783E3RM5RKTcRfXmp9iyU6XGoj4GuvqzM9dCLAyJCV1ZCtNPC5JP9xa9",
  "key3": "34CsvS8n4ew3NNZg74m7tKPRkbdZct999qjQQQ7SWegrwcLCdgg1mL6ybGgJKhmQWU83jgTmcwBvFbBjtFwHiuph",
  "key4": "4eWhyZmcHSSnXVBkFM6geErorQzBdaxC4q5V5nXsZ711ocpU8qnVuzw1uRoLG36YtkWVnr9w7eMdsPtN15cZgWZK",
  "key5": "5MymM24xAYu6KwaqPCFXTMAhakpbBHcpnRRZkecXY3HRigcw7CPNDFtQsPkBHWDUFQ3LQxMYh7iqCYwcR4WaAnZ4",
  "key6": "4pg3siNz6QTUCgbHvUno9ecc9njwDZX69dk2vgSajt6hk3QrKAGgM5GLNuuXVPW92oXk9UJHinHDdRcLUFmDBWew",
  "key7": "3kN1w3nn1ouE57myeGTWSRhFqJJjJVFf6AcanJCntANP1howkGTYQ8AAwtFeLDhUm5WhEdj885c5N4BLgibMfwg6",
  "key8": "4H8LvXj3ophAPpLFMQa3DnpXKkgN8nyZRAZuDhppCvFtyhTppfXtwxbax4FvFmCbxuLUvsg5EVRAogzyDvsd65DK",
  "key9": "3HxKAoXNkUCF7SKxH7YG4F5utDz7ovpKeQwyzQ6zgkCoDUKU2XNDhgkqHGHryMGNo2XqZzxCeZdoFo3hJScaS3V3",
  "key10": "5jcraLZSj5Um2mYWptJxTisxCQKqiyxtWK6UxUs8LX1jUcmPYf4nP8KiHwAyPu8KKfskKZwDV3rF1z6i7jnN56uy",
  "key11": "5arHKWsQFaUSzjFCFMNTaQPvmxd4GbAGwj8ScaDZxiT4mreSEF3xZQjWCtzsjQFEyXvhj4EXmxixKMB3kxdeb8xZ",
  "key12": "qnxcck6xQGkSeNqXkjtHdLia3zhNeGdN1SFPjdzAkekTnY4H1PdSq5wVkqcGFw4EWnZgDPzHFRZ1W34aRezHsqo",
  "key13": "5mxAzDQVs6T5XiuYVFHxCCq1wKvitfCknqoRe7CEvU9sxYUZ57YQBuUHuYvhmghyRJUVtu6axCd6tAXynfVWM1qy",
  "key14": "3JE91RXbFfvHRbZWd2LToAUqDb11U9oJJ5CF2wg4EdhSnB8hnA5ny1AFYYgEw4Msd6o7eRC42tSSasV73ymCZ2gf",
  "key15": "4YPSjSdakBw477UWFVZZG8eZYNPwv5iXwpjTuTjxQRj2nQf1SYgN3CPgDZMF5h2HG5q5fbCWwx6Ko2THPo1eq3Sf",
  "key16": "4CUn1X6Hntwg3vdMHFvJ13MLh3j6a8eB6mM9aEtytRmvm1h5LXnchBCgSmHBwsrCSfmK2ZebZkb2MbpeXzSptEoT",
  "key17": "t12baqsc5ddW5JiS1vuWX8k9xgz9nQ17c6vujfFvBYBXqj29TGJmmBbVbBW2gG9vopUjuTXwgioEDoJEaLeTc4V",
  "key18": "4cTF7WQq8XoZ2UyiH9Me9FCXYqtVswCu8SGJYWdTBuGJTKri6tzv9JswW88gxV2TS9fGQ7te4ug2M7mqjusSWNHV",
  "key19": "5b9395hh3e5EawVxhJpFhukZUQ3nkpCC1hRMVjaQ63LTMjZezCb3xGkyqLQLGJu7TmtScAmeqyBwzXbNtcaDBKLG",
  "key20": "3kf9VzbQigQESptZtPrh2MMYBZesyJGPk1VdXkcuffQwuW92X4qHAfiFayqTGeCyt6FGuK5T92L6R738YRHJLvs1",
  "key21": "5C6Njm4KJu7WsdoHCetr6R48VFvEAZSPuewNRhBuWSgJaMjzMvngj62NTgceLVuktGhHXQPDobM3WKyC24hxJMXS",
  "key22": "53xpGnXuXm1aVeVbDb5W7vuCphsErTxq6fA6DBTuwtFVkj7HUVB4R4bpcM5YPfMkFuhMW1DFFrR6SrBe42F49L3s",
  "key23": "3VzyqnpTUBK1u5Si2AZEAm33CqtNUJerYrnuMtV2ifPY3jfZd1hhR7eckumUs3Pi2EoKLuJ8WEPPQQU9aQevgkfo",
  "key24": "5FKJ88RWe2TcLm1sE6D641g9DW6cFzWSmwgUy2NXCzV7RdT5cLdzrwTpNgCSnhbuZHEkwDbAkJx54NteCoB8AUec",
  "key25": "5fqjxMJ5hJiLSDcSM9HJyFnLBfaUwQ56S2HSU1UDnSRSHNJgTHSG7TZBe1t7cgTBQSqaEU5QFBsyVJsEnR4PnbQY"
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
