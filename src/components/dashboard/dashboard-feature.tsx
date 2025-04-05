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
    "2w94jX1rUnkv4TYfFjYcjnLkjj8KgFjBHfeLafXtmLhTuzCQf7qt5oHdVpMtiVKoDbEG3TDGXU7xwB7HD6qtzkCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qviadRJe1HPuuaD4Kr8RcJXqorq1niPz6vYbd7rPswdZr1oWEJWrx9pvWzd5TLNWQNVpAi1Y3T4irkkqR6HgoZ5",
  "key1": "5R8TYsjHNFDdiQQTgkgr51znPyZaafAyQpKeLDDH2xcyq28YwwWLt5YmparxnPbZR1R9Yf3B9pag8zHcRPmVdDLs",
  "key2": "33yxNt96ruMB8cZ1iYfRXyD135HFUXPT1AoCWU5LxzurFQJeYuSeuB8xqbZs53Wknb7zCWhraUCDCyzcUsgUMRyf",
  "key3": "63s563mkRota8dxHrXpRxdgMEUrFs2i9az2pRXjJfdDN7fyDv1UA84jGhA2ARa5U9PjGviBMBtn2RZJ49Zwv5Fpv",
  "key4": "2FYqb87g3M57HzogKJHuuh5isbXh5jLe87FaiWDkCCsynRzaopr3n3ZWxY37aMCXnBAW9BVyEiFhNjypPRcEtrDH",
  "key5": "48fUxoaHJe7xLx4T5x5vKm8Xo2GuNaMcQqYEwn23CDZhK1kG5qs1eEu1QaypYcLrGKVQrUp8fN8TuJ2hKWadw6tK",
  "key6": "5q51Nn2n1kV6HEg2WsoJ1tbxmfQaduJvkQ3WvXcQzDwh6RbXqoJHpZRnAp1xhn6HC5rEMBeRVUieorzn5RJcSPCG",
  "key7": "2uLdswo6fvCHrYAei72Rx86Ej2fKjyA2tiFUKJySFQmRFUhcW5KjJQDpa51MYYRsCZtcHD3QqNzEDDuy4vr1usbW",
  "key8": "BwWxDV8iRVWNcmpJiHMnbgPwtiJEQYx9LpdX1erWBk6nicgAxAVbtcSng2S9jBeTcoyAGect8g6P5Y3FDZMSN2a",
  "key9": "2n2zryYPDchGGE6Y1ZiqacuzBBtx9SH6kCCWwQF4k3zqjomaDPAQw1AgFt1sr9UHCCT8xUb8LYC2VZqABnEyTtTJ",
  "key10": "4QMuRVUQfozvbhpYzCXYJdpvJyrWT1GARBDKCjbfWns6v55HTm7VKycG4Zk3ks4FMciQ3Lk9mxuzL1YQQizS1fAY",
  "key11": "2DdyfqHUQ9YVAiqNkxqVhurQoiJegNQNHYYtJySi4VbnKMnPEerwVAu7DAbYZe7ciwPRHeWUmPz8mvyZgipfMX95",
  "key12": "4yskFQMURj9dyPbbcPsMgCJQ93LZTomwHQx3gGNWZp5ehvTdujwrUMer8hjMLBJuq8T7c2Qz76bstzKP4dMsfX5p",
  "key13": "KeLnNw22yY92DagFFa5x77zWiN1K8BPFwcJMpinygZRFAY1KPTuDVntuupzb26edgbeVPjywd4Ht2oq3CavDP4Z",
  "key14": "2tjdd76Ui194wkegFExBtncFFLhkAjZRrkooymAxxMYfViArDrFkTVCxBZQpriEoY1U2vhxCkxLVx1YawFowk943",
  "key15": "4FdQeAqsozafNAKe3XrmPkmvsXx38GRZChbHLkYgB44SqiYm3WtYYZPu5PB3bUsxoYoQkrkkr58mrYJr44PK3vze",
  "key16": "673TjJRHcuZDbniKsaDn24kgBMS1wazwpjEdUnktnxZJ34Fwm8o3s1sTfwQMusdR5kFbNaHMs22y5N314rtnF66o",
  "key17": "3Q4nzFtTjc3nkWHn1izYyRrA76A2pxwocv1Xmu2iyUYwv3A3LEDMqMRQ9QdCZFyrKp6FCvLPFqwqYWeSqxhHpjab",
  "key18": "2197QBnNwE8HW5zJDCvy4aMbJqzKwZL8exSkc1LknEXVz2481FAPy2nrWRucvJo8A3f5WiqYSvMR9YNbgmyzEvHi",
  "key19": "3xTJapyw6vFNsbZ7cvDJjPFiXzZW8FPcoUQJJvnzARKBYkWZHLYTJ49Y2VYkmAvuvHprc85rBgtbJHCUafU64nN2",
  "key20": "447Z3DXHmzcC4oinUkR6K7TQsxBQxksyKpcLRbzG1CZ3mko64j1Uvw43LNabfC6ar9zRGu8eYsgJ9ituHoCrFzoA",
  "key21": "5X8QQttMW2ikVsa3gWQDhJjMkuFCWGbDpZU1yLcmYxzkGuYMWjyh972zUfgdxWuLu88TegizoeDtERra7KGspFGs",
  "key22": "5TVFbD4VuD6wzNrPy8R7wfhKiaZsMXMFDGCd6rzwgPgFABUAp23HRfWxDMR2FxnWCWiKwnpt6eoSCYeiP5ehN2Nk",
  "key23": "3Y2uQk4NyfDkYrE1k85Xt7q2LBavi2tB2SCzAAaqvZ1B6DKnBFU1okkdRWuf2oYRuv5PbWWvKgiuJwYK7SAS1QbW",
  "key24": "3QZuwh3jrvvBp23iKGxjhZTgVCTmBiRk5gMtjBkpLYZdrB7PRawNpeEGUoALoX5iAEjY6efKywhv42BAF3KnbrAn",
  "key25": "4bFbfxaMKuM1dRY5iCrMkN3w1RpRkawgum4ihVXznnW3Q8kzZ2hv94geF9m5z12x32VzmoGfASxyS67mZaLpZwCw",
  "key26": "3fKnvRb53m1J9tFeueCaVBx6ytBf5LYgENWibZNgVEKRnb3MeyfgsFL1Ny5a3ecDh8aSSkW8sqsDD4jRwGDiXzSa",
  "key27": "3CFRyZcLZ88CiFaixxoZAGTbhRkuwG3dntGGSqsHkTgaYPVWnXRbzvNHmpyfSbo1hPyX44bwqS7VkCAZHSf57TrW",
  "key28": "5xF9wA5o5TzBNBu5ikxSnh8cVGtc5wTLnpth4mNVvrRwUbqANfSWGGV4qtxAQb785ZT51jxgEvkCuGwf4dqvUBik",
  "key29": "5LA8c9UvXDR18eGpktfvtJCP1NkTDigWexWeZSdYtSGMSa1rpjc6NdzgKxRjP445YqJdVNaN8Z8VX9Lp3xNNSqro",
  "key30": "5PsyqbTfkEHKuGE3HpbESNbBgaXiiMY1VCTKeVdVgAEp3JGcNfggenuH9B2KTVvhN8nrzCWQhqXJPcZXhVacefGW",
  "key31": "32E7RKMX6fGc1RMaXhjSNoy4iU3hzhzr7CxU68M8LbodePHfhMuDv4r34ZfngppriLqkMrzcKtg7KUYD7Zof6KeX",
  "key32": "1xwratPskm755PHuLhhuUc3ecNwLKii4swfzUfEiQJwwQ4CSsxqHjwMi5w7d18YasWo6q95yMk8xYtrcUDzhvhJ",
  "key33": "t35gW7eJiNjgZYDnZvoD6BJynrikXV4ru3xE4KbRRKA2vi9qUxgn6uf1nTZULnhd2LjFv4HwQCWUNqVCoT7K1Ei",
  "key34": "3zAGaD6PQB7dkpAFrQiRgaJojeciUmxW8oYf2cxcMZcTESRNCgmLrcck1j3VCAHRQNXbafZmkrKrfawNXLfKrVUE",
  "key35": "5J3f7yBucEqx1jvVJBHPsHcmmGuEbgpgSRV3T7yhz1gyw4WbcKFYmpTVDURGHqQKgEnshVFngPgCPe7AxCqVknVZ",
  "key36": "48qD9PnVt4D4Dqfk8PuwgAwjuaeWGEjf84a93PQKsu654kHoYVdiw6BAmDRBDdBSU9HLuWwoNFY5nnqVAFfjPKbV",
  "key37": "SB9gwshaDRqeAXm4xbYHrgmFqXfNrnZYDHQNQnUGNFDsSV8SxjdidCJjN8Srg5i8gHBwWfQ5xXraWzecN7Z9Gxg",
  "key38": "5qocWk1TPVyBD14mrDnQrC3zmHXuXekEasHFoSmMUZbX341vthV8FKHnjkWZTNxG3hpEWsgLtEsHNqj1HibLAeFq",
  "key39": "2ebXeBePYJcxVWHc1RKPvyTS1t18YG6qbFiDc7zjUgoEoo59H5dA1WEX6hPaxH5hrFT63ih48TyumfmnwTVduZS5",
  "key40": "52MPuN3aczcqz3xv9PNuaf5gKTiNwLycR19ZV2Fe2q7SEEdvmkC7Lj7ffLdPs44LJ2zBDV2XHRsARqaEkRwFapCh",
  "key41": "2ZZJvC8kprd5gfU93CKwKpDEnHrSmLzjnBMaYfMf2SG5q4HZnfQMm6ThBNz2V1EatmG3oc6DfwSyqWSsua3MT5Zv",
  "key42": "oQqyRUg1eHATCfCyQdk6JgJ3hxXJeLwKUDGnisfeN12WwVmNdeRe5gS4qdvujvLufFTsRcJSZfpHhyuHRs8JrZN",
  "key43": "5mSuLhyrYTeU8Z7ZPhY3vZbPmg6oyv4J7o7i9rS3Xd7ydSGwkYZ2fuajb4HoHmwPwDhKibKvtsZT1tjAyJEyomtC",
  "key44": "57fS8oikqiHoNJC8cwNy3LceTn7U5wHLjW7nwF744XMcBpALhXT8685C5cG1id8ffDA1TvPCPG1Ffv5cK6XXHwJh",
  "key45": "2S2NQ7ohjwPeDBsiC9Hnt5tAXt8ygcPD2h8fXTXNPogCtuw9h5CNEsu1FXiFrR2SacLZSjKT7jpBHFtF6BBQBSFq",
  "key46": "3utCahzxFvboqKtH2aK5WRk1KJo8BLKY6SpLr89UFTnq8ER62KXSeZRiZihi4ZAtz5R3A7GtwJkGMEo7DbvyCXKU",
  "key47": "3BrEdaqdpqYpj8x15bY5Cpw8FPvovLRNhQvMF7rde9s1w9VKYtUDwt1CTJf2rGfywLLuw36iVs7v9wHymsPkv4FU",
  "key48": "5fU95e1PEUfJxbTtrUAqgYL6zUNrqGgijUF6anDPdbcrZrpBe8DNWvLvkJZQpRgLyW2R5swzBcRnBS4ir2zhTRty",
  "key49": "4DTEraKG4gYQH1p219iKhv2crxZanJyuv2oCBqtKzb8CDfAbWiB2AGx3rSuakapNnJUDYbjX2Q2THDC9h1qyu8cv"
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
