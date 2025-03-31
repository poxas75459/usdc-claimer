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
    "5Yf3zoB252pWevuo1BvcWHtZwcPUSzUCwKFQB1zRzMxg3ZecWMVV9PkHbwgwkyQwXuByGWo34Z3f2QQP1uS4uVXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P3jo4nJLKkCX9HPsaZeCVTgmpSPUZTTsT184UcZ9ADs8jSaJnzHd4gAAPqB1696fPL2KbfHADftohNmczDAfe8",
  "key1": "4eriLGHmhCVfwz2KRSAiPDnuY6gKz5vg8QodtSSQ9ap3xyE5nnUfwujidh4vRf39YsJDvwhNzY3FDTvx91hFkBGQ",
  "key2": "4pVa8q1WQQ2KYkmhi8ruktXShhWQCQF6EEMxbugjDPdtwfCHHUQdcsrptiB6n56kGtBiW4ZzQp13MXKrjogSf5T3",
  "key3": "5GxJX2DFTKCZKjdBhMPndv7yAozHQNgjpUj1vQRyANdsKTaX7438hVZEA7wgCBqc83c3fctZkYqeWKXBS9tQ5XsL",
  "key4": "4bYz9Gi6JHvi91PigYRm3QgNLaXubxN3GNadHQWpriTS1QuSa2esmJh6JYjCK7M6hJwq5hH5BDffWB4FtbMQWeKu",
  "key5": "3jBDkqenHoqHjuXXg18nopRBNnGqRMKHq21yQoVVTYtrguj9afCy1ADY9ZwV9ooFv9AtnJe4vRNrD4SMNhtR4q1K",
  "key6": "4E9HHsdNXcMCA7ZvYYo8mB6c4uvjFsBTzmF2G6ReCK9NuDLf25w6pfkAdZ8MZo1GdLcyLec1tZ2pAXo5QaCzj9Va",
  "key7": "syws2hLE4zYdPof8ZqCh4RUnbB8YKENk3DD6FArqRnDiLt2rE2ZMVysn8VdcYWwvUjGNfLfFfpCFVE5FAdePiRY",
  "key8": "3onGeuqpwtHkaEo4iraAZzvCEZpUhc7Ru3bWn6SJrhNmyYzGbJgMvaRWYPDhGm6TfKCYURGCYYaVDXeH6weEoMCx",
  "key9": "3VpsrcpCxNCmJ32EkfoipK51F4T3amodwfq16zsWiDE3A1JG1xjNWJZRbd3yUX71PNA6D89FBNNfQoCyi39xi1w7",
  "key10": "51vmeakwkjf6AhwW8E2GM612maSeZJkmFDJxwdu1KsYpuVXMp1x7Gya6Q9Uh3oN7VLA6kPFvt8z6eooWh5HKigk3",
  "key11": "8RJeJuJ18afHCj8D8U5p5kA5CDKQ1Fphsm3XEm2Riqvz56SEt1MioMYN7bW7NNvtazrjhkpunLg1VPfS7ggUuWa",
  "key12": "5TgPesZke4raQXLUEsLsK8Lem3VPgVe9qWWx7mZAoHaJP1YovkqTZ464rFUZ6yyd7fzAZhDzxpjwZVZAdEwQomth",
  "key13": "42kPFPJBTQ2PGg4QbgCKrBxMpxFKSgwNCJukXJkWomwvCjKU69GuS7cFBbUQ5FVLab4HaozFPKhULvNsm2eM2W7g",
  "key14": "4Cr48Hvxs7Zp7mcYeUvezREyiVBwQTbrqdB93jdmPjyQxKwPgYFFNcaausi8gKVot4UP3wBJ2iEcqZ33eb1zkD2K",
  "key15": "4wxKkGkvppLTsbu8eurYpSKeLUBEJmLMueoHbtWWF8imoVLKPfW1aiTqYy8EC4F85QgoGrzKD6BJoL4C8CEpxd5v",
  "key16": "22M4nfGZbX8qXtU6ZikJgSj2PG1CutJyU83Sni8ShsgvpDmTkCoH7ahMQ667513P33rRdJHdt8DGcLAAFf24PD1J",
  "key17": "23Nuky34LuS4rmnVw8g9Hmq3KfwqezgjHm8qStr1sLgktaZdWn9Ts4KpczyibHqvdxEstJRbDDur7DGiBcKfiMb7",
  "key18": "5FWydcjBRa23akBGhhuGWsSLw3qQgAjNUe2uPrC6xs8NKRc9ycjEQZuwZWJ8jCRwwNxqQjaZk3TeLNzuXK2j63Bh",
  "key19": "27zaF2JnFsC6eqSyZREGfBEH3v92gB8MP198A2wsCYWJuFGPa8Aj1NNWMLUu3KX2P8CT9VZHWhkqXCXGU5ZxoLZz",
  "key20": "3KFS75qfF3ATcg4o6hG27mM9PcCau4qRHzaudyLj7GcTTw3E1RhxaXoUn5FvvtSZ9hqTFpFFLHoH5J8K633xRxHn",
  "key21": "49L6eZtaLDCGzRb4eN5YpDZitKuBBHhXvhxSx1gSSbSzEvPmedXRJQYUnQqCH3LLABphZGMA7fmnwTKnwFVM9ZKS",
  "key22": "4Rc3riD5Ufqym5Rwq3YbcTftxFawvzhCKVmQPcYj4tdHz3vNRgtjRbHZCr4Qn6Exooq15GMYYXsQRZPGtRZEsNMu",
  "key23": "32ocnLyJGjm37kJBepXfSEFkrPBsoMp7EahcZRjcSKL4WLcz9khKN25rHvzafvdUfkkChrWaUC8vxnUuj4kYyUsv",
  "key24": "56ABCGTFYA4YrvPnJ6fy8aBUXKEkNPbU1SDjpPAs7PsCoPUpemnN1sy6k6dYuhfpUPtxBumLy2239EDDjwrcRMXq",
  "key25": "4YwLSpx7n2pp11HGoK73g2W9XdYFtsnVqHt5PX6ZR3vT51A4N13BASwXgouknbXRw7RH4zQ9qhMn6mmpYTWxavQ1",
  "key26": "1XT1TCndpQSuYaGhLV3CJWsaU7HYKvGamHn9jcyjqbAyyqSFNYEqFJR1w8Qr2wHqxvo2oCxwuePwhx1kK9R57nv",
  "key27": "2Wuhgo4atHuU4TeufKz8p1XpS9Eje1F4kMFLqNZ1WNn1ixS596wnnT3uEwWwN4LengDybCuj2yfbDgnmVie26KfS",
  "key28": "3sJh7xDTwx2j87cQMvFzKe3KcDV9tEoXkpD1MrJWkVgm9a2N8StA6MkTFaXvR2tkGdpvNDeawNbSNE8oC1AZk8LJ",
  "key29": "2qSCKH53h2yDjuaxGrvW9FL1AtnnRzETAqtBRpJzmfbUnAMmBqNTaNGwHSc8Yz8KoQufLFvBknq6TWh3VePA3god",
  "key30": "57mU1KmBT8VSopgG6k41P7jq7P6QCHktS4z4DSAnioWQTS8sYE1BFkXqYP1NbuHN47QUGhhr9nbNz33UjPz7gsdJ",
  "key31": "2C8rWnxgSSWc1zHSfwMgnPMs43g2ss8WaH2mdjn8g6Yj1nEtgaai6Q2FT1XcoabCr22KPdunySPdwjvZ2sCpuFpc",
  "key32": "3PNenMDHWSjT975JB8vHhG9yecXCTSB1bmrXzNWWq49vQZXS6FtHvHJMoovvMYarr4tGk5fKu7r9YfY1ysUnjMdY",
  "key33": "655FRVnLccH43jDa19EposRiESauQQtyTc1hsDqZNpkBkKH1K7PGmu3rCRhvzurD1vEFQjbxYxCXtBqhDvWut4ZQ",
  "key34": "5jd3UahzfjuqBVMGWtYotnbUpoPscEphVaVWjLzuA51LY8M1ioedX1e7VzD6f68H2uzDzSNZTNYedMiatdaNdChn",
  "key35": "2YMHu3xLRH8422tw5KRzUSVqKahawjGvtSLZpcUsG6Mjq91hwWd5y2GnsEWoB7hEyWJUACp8zwR4iBfpVfsbaHF8",
  "key36": "2F9UTPwN8ygmuS54fvkS5CqNKdBeGZaxAmhSFvK1F3SMQfFvpQKgMUpmsTityfvDhcJxdX31vAy2eAjKAzRFjGEN",
  "key37": "42HvThhDxnJmoaZcAYf5VPkFdXXPxycp4srebCqDAdfgv6gaixXjrrzdx4Hmb4cSw3Yy3CVUrL5ve7AZzu8XUgHS",
  "key38": "526GeatyiFXpJFo1jZEEQkWyCECEix75s7YJ822XtoHyyyL8VBX2PzHeECyNWPpqshY4AixZQtmZ1f8PzN1Ukp9c"
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
