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
    "4CfBbpZknt26mgC3yyFH7iCJ1nC84JLQCu3M1QdHPUibxrT6u2QX6MiM5vtww6QRebhbrrjnB7GkgcLRsTNxoueK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zRNXTbjXYKeNpcjuMmzbtW6fuPB75Uia4nmwKgzVjzG5ifuZ2oSYoQDgHG75mQ5UdRHVNY3g5kPaQhmz9L9ogzZ",
  "key1": "wmrqi3pwXVG6HFgJXtT9MWHePNpZFDsCmdR56zToiD7JXtjLBCUEo53LFoMXfueDhepg8GDt9hdivhH2ukhLdHG",
  "key2": "4gWn9aq5fAMXCmNEYQAbXJWcZZ4KSfkZjWh7ymk1Cdq62qLRynrDoHXsJV1BEUMvSPexEAKWUnfxeUN5jxGXxn4v",
  "key3": "4QQkbPfD4HU5ay58wbSgSeTN9Yvxe3C1tvqsS3oURJ3cBA1FutCEc4JaqCYiASmVqxuhVtXG3MLnq8ZCBRsckCDv",
  "key4": "3VXye5155T6rR19N6ZYJQzkjthWWptsDtEo8scGnVGvBRYoHh2V9ZN6joeyaCRxTDyUy8uvwqxv9a1joJgMCtgY",
  "key5": "2KTFStcz7tV5msanFAEEhCTBh578Y4hdVSStUKC7FkVEGdngJFHHLZAR66DKramSjw8GETZ1ah8VaqPmTAkj6sw",
  "key6": "3xtDr8uzNw1DQQtDoGMhbPx3XbmPTiiFN9myb1yAGeL9vbf472Ved6SFtd9ht7R3mGDkAd8WuRUJEzsuGh5xib8e",
  "key7": "3EWqnwNs64dEsrsDf23ipScHEHXr1PVgbfyWEqoCfCp5x6vzPaJXVCHz2JfwJUFjZ1oNVVpWEjyakukxBDrjUVBu",
  "key8": "khGxRiQk7G2xq4qV4NEHaiYgRPLwxfEHUba8xXm9jhMCa3hegxZrPx8zPUeFAzxLB1YjW8oU9moRsZc64UX7thi",
  "key9": "4mrgt8RWLFbsw1EbQiZoiPY4NFPPa5bU5iFce61jzWiz9nFZ9fbyn7c8VB9DaEzFTYyB7xxwo7DayGMBtbETBVeE",
  "key10": "3kUdJvJFUpgLA1PU28DoqfBrShTg3ELsPLacXfuaXm9cHk5ijV29Fg5QWHUUqcH7N4tQanskrPKANzChP2PtFuf1",
  "key11": "42M8awUxu9p7QC15X55VSwvH6Eb6txc2KtfweyGRnLQecJFzRoh26crAxBeQiLKrLXky8qBHj8UB9fCLjBjDtkyB",
  "key12": "49dJJHiNwnmUvzFn7kGFqNaJgRtbb943hr3eNSdqyxm4GiV33Kbz6wJVgf1UJQS5PKibHi3AbZdV1hTTsTxGYRt7",
  "key13": "5W2P9pz8Y9HWeYhNi5ioAuVkvbsxzTbdYcGXbjciwNSSLRbjNwMgUpiuQQXJDvM41XFiXciBC1sJy58jozC9MXDe",
  "key14": "KEquyMYXhgfYDnDqeKsFbgtCfZStXHbrkZ54XWQUH7KN7mGbvhwaeroLUMsy9Mzor9t4eWfqd2UQuxHLSJtEpjr",
  "key15": "37RYJ9xsUgpNbYANLAS6c9LWDvhfejy2FJzvCTyiXM8TgTLh7EpzhmuTjwssLYWgEKYUAttMHk3cwsCKxrUNuQqg",
  "key16": "5b8qLZKvtEAPJLTjemY28usW9sZhTEH9NCjrG3kTvsxmf7NdEMPvW4jpEGTHMUsE34iMPMA3dZPJyZAHG9zVNjA3",
  "key17": "4ZprZStoi6HTAo6sVZNeheo6kLfRnQRCUBKX1akY5sawhghA7B5cSXbJhqamdqzic7SYLpfPpgFf7GXrU3NVJ4St",
  "key18": "5UmRA4LpB4AUvvSM9JxTUUje2XyYh1i7XaV8CJJscnHGynvVCuiMdvma4JTW9hFJWivTZxmRKJqPwtuhGdL8W5RZ",
  "key19": "2rRvuVyHH5HoRdvPJwBnFAcSbM3czgcWR2mUEBs4tMz6EwD6dBq8VPdgigMWuDf6tnGs2sZLZtzoF4H9Agczt9vA",
  "key20": "5pLPe5Bdja2QMnpxzyRwJRDF7whiFB4bpU7LbDJpUgrbYzKcEfewuomU7CnyVenUUme6fHe7SLUSiso8omUGBaDL",
  "key21": "8dE72yRNcueNdqxD15vRpKPJ49heA3sormfcSnxZYzB7UJy6yKuxqEBB4TKSuwRv75EHJcWwTMEede2ofjD4Bsp",
  "key22": "GCtMvo4f4xsMRfXCPdFQZGtquPisNRkSp1KABaKEd1mERnjDUs2X4Tg55CfCF2unQZ45S4mw2q4MqRARYrKWyrx",
  "key23": "VckKxXoqj1ERCBNf2phUMQVE2QKgKVd5NrYDx7eLyMM2FwpwnPLy2ngGnheJnZXUox9f3hoDSaAQEeb1ufdvbmQ",
  "key24": "APZycrtXmH6hhCZxkm6sTCqFeBdXFKJTiTnWVgYPiBtskDZ44N1UcBFz8kRYDTLE9HYdD7De5hsyUMRNVpHdMRf",
  "key25": "4GdiKE8dci1X7nnC2M9FwNqPKnEKfQVsfArVn9aTBzBMqqVq4xwW2FbDY5FfSj67tFrgDymWcBcHwiwgWxahKBtS",
  "key26": "5w4KBN7oJv68sL7WyT72YZU6415eFt3BJqgLMSs6vFYqS5c7a3N4k7LfcUbhnVKsVSmkYaKQz8d6fu1PoUQFvpy3",
  "key27": "3vopF4MQGkLwBcJdvumxv6SddX6fkK5Fh8217mCuwhPWst8zJG4NhVh2kAYyG67gnmkajHtUTJSoyNqHUkYNdJLc",
  "key28": "5GnXhw7dUvXpzf5Zd9hCVTT4FxqPhAnnF4mGU4QtGhw2XdXRHJCavc5Ag6VSo5amHttthse8cVLgu3coUiuZqx1A",
  "key29": "3dx3jRJzpkRYnYmakwEBKjAkgc8jHoC3yoRWGTAFNZRVNEAmrecWWNNC1G8NpCC66c2oDPghDUuT8uYMqftMbgfV",
  "key30": "3vz61LFqEAxsAU11EpzPxy9NoCD1tgV2AAhGgNqMcRc1cNdNqJLFjcg8BJntsDmHYCvrKxTyVJyP5KnP2B5ij5Ld",
  "key31": "29UdvEvCeFkZghnhvi33MHL1B78xy2MiPqwcx7K1j1jsw4uQT9FskVSiiZ2PSHGhksr5vHJ8eM6CCy1j9PXXkZMy",
  "key32": "2Ava72bJLd7JP8PUoHjXkJFegoNPnTJE8zyM7cm4hbMtLvL4qkKb1yz6ha6AAiph1pAJuxW7qG4nJn1j9xDRzrZJ",
  "key33": "qWvMj9Nw7E3y6iTFXL8Meh4NoqNhuzR8wJ9HFNGDXYVCcwspSyXEzFV57Lvd7VxUiZ9ebuq1BKXTEn9Vt4BLt9d"
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
