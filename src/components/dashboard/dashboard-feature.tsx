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
    "5Ak55jiCuBwMrHG8KLv4pMjoG6Hxk2zi7DJ9zvtyrYj9cxBYT6JVezMWK6uoWjG8gDGR4TpdwDJrU6B2jbM83Grb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ga11D4kacdYuo3mMBtmeiKzW63DoiyVoiQfy7y23Fi8Ua8UKgJ5ypsth8aZ3U6Ke1uVj5N9xketq44bzVaKyheh",
  "key1": "5yW8BXkNhpeM53JHEbqbTRmNPHZWQxJiVWc4u4Myd7i7PHb7heajEkiF8Fr4QgQtTB6peLfQNvq2MKLvZZoCmMCh",
  "key2": "3y6dMDMK9DtyFrWB1bJUnwdVZYSywDym19aT5VzvSgKtwdoA7KQ3CMZS6ECwT3BD8uPDDAUYG1LmgV3gAfqkP2Do",
  "key3": "MrggzBZ1huH1ZGWZwmw2rpWq3Md3Z4rXyd43d7Uh48tGq7tNVVGYXXhQPYJAWEHWvtHyNKf3VFyujdK8ySm9UkF",
  "key4": "3btTWKEG9esZ1fnpTvxKD2SoniuF1fLtC4DxNdPaYh2Tq1AvvSJGEEzp9rW1meFshLKpt9ffKRews4QyjJpBSGr4",
  "key5": "5pa2grRfb2qsXZFDmpA8ErqNPnAuCVA7va1jw4TWJ9LdMvBBQqt6KceTES9Uq49CRvLgyAcTSATcb7kVdauC7Zfi",
  "key6": "qS3Fx5qQoN3FquyyhYnX86RZ3PWFw5SkzDzZVnQcRCbnwGTXzGTRKj5bsWiHAEbArph935tG8AQjz8StosHwUYg",
  "key7": "3YeWQdykdMpqUgiJ1XhpesQbfV2cwUFFAxZbNEGUdWFAkajcfrbeQ2GWaivhNxurJkrKUDR2oc9kLWZ2APHKuxb6",
  "key8": "4EhLF5S93yxPZdF2ej3yE4LkMkzk7wb37MZtMuPhhZzKzjgJKpu6oifo33fqqUBDhFpA9UP6468CPArkDYyGuWFL",
  "key9": "23yVQbtGjjJahiMf9KemReuPrJD55jN5EAvB817bRmixqou7JUh78dBiz865whyGRgrQv7z5ZjJDqfYCNMa1iMfa",
  "key10": "oGb7KXVT4LU81KRGrhAiePqzyHZwhH1CNVzPjFwVs6upUTyfgMpyWUfWA9tF57xUuTqFGBuoug6n1UrP9P5gVv8",
  "key11": "3qzEX9EVZVythKWD4Gn229R81YE7KUcXodyfrAunt9w91uargeYQgU5cvy9n5DZ5K32QZUyXuhUur6Zs6AuULjFt",
  "key12": "5FwwAuGCbFNdSjfUHb4z5jPjv3UyiBmMkS3cqXH8xayHY8nWdGjP1PzcthoqQaeFcL8zQPPuVnxprXM7FTiLjf3Q",
  "key13": "4chGhkyP8HTn4oAvpKtvhoE4DcJc3cFxcDrhPsA9J2a5roZGvu1sj8gGr854BToWwXKNnphqtv7uhGBHPLWrZvZN",
  "key14": "5Zb42t7chQb3XKGjJXKouSC5n51ewvFDoPsRkaKKLb5Q57HYTZUsp8FBT97kMw8UqamYTVUsy2fVz3eNqw1kM8vP",
  "key15": "3iUyxAEbe1xY9bQbN268Ysy1bXXH8HaNq9ENjx3MYoeMh6hW6eRxc9CD9khrUAhh6SASGvH2HM9vsttPPjY2M7GS",
  "key16": "ZxHZDdVPevUGBLGCzp7foqroQgXnS5Qn1qpwyDXLBt4CESmBcUeoDfzcS5rz9xQgTzNxNfH2JikFXzbhx6irzyo",
  "key17": "3qZsZKvyQD1AAxEfeHU3AMqfxqdMyMRZ4aKRTv7ZWDjHcbRMcAPX3YE4ioWzG5XwhLhxqiYUZUX96Z39NKtS1bmC",
  "key18": "3CyYaW5KhhvJ8DcVTpEfWsMtsrCtm5dp1Wwf7rCV9Q8uhRo4GHDjKdncwTZZEFtVBtN9vBQ7mpKGaAkk6bMHEYh4",
  "key19": "52U6KpcFpBTtNJyb78AzF2YAJ4bCXJu17zYs4BKnQYmEDky9DvgcsmAJvSuoesJTCaHr6H6cb2v95BwHBtgEcspU",
  "key20": "4GzekYXo2F4GDP4LcRr9XS2BB5EkGaYv77LK6hp9cCPFvbQVazPRVzhn2yEia37uF1NGjfYmKaWhV6XCbzBaFyAb",
  "key21": "3wPp7XeFdkeQNCHR7Mdu6ufKDWA2Mqs7oG7wgrAsTWZyZQuyJ1ExsCQM2guBjBG95rZ43XFHo8GM3s3PAP4gySJu",
  "key22": "39H53yoe6BLrGXFy6heUceZbjfNV2ggGJuHMjBPqmyv85WDiTr6UrxNgSkDTxGhLCjyza7eM57S9YwH5hXUV3suo",
  "key23": "CPYjKgHXDSF21mm5EoyrKiDnSQFmQYXe5C5YsUJnSLWon1wD2LzXYqaBf5o2Z1m1ygb1ZsFzPV41pEnSrS1kEBv",
  "key24": "Ld2kB4nBL6vjS8GmRdPps2BMAqqZWmrS5rcHJsA8FtM4ZCMapFemNCqz1sxJQ12swsK8QYCQPRKYjWaNTabYpgA",
  "key25": "3MFm6TP61ksrzrznsGF2Fbawg5ahphuNWTsf68mMc8iigcjJr2qHvPKWhnp5FENemQteHeGoyNYYCRVZ9cQkMxyw",
  "key26": "5oaE3yA1rEKqxiuaQRPR1UfQRs4T5Pbszb8TByERKBaLLAaPo6ciWCjFTVtPK1MDWKY1jvQAETocWBRw9ypZ62tY",
  "key27": "5eC5hXw2huxyM9FKG86GaLejhUaoiH3GqhbhTrAPcRp5bFpZ4EW6x1kPysr2LowQMz2oEyGBFueejRmeP96aPkaY",
  "key28": "5EnRmn7kUrRyjxxUR6bn7GtFKVGoYUHsGYUj9LddbuPhMLsy1oUNs7DNhGZUo7nW2UMMcxMk8Rc1tGJMPtDEqt55",
  "key29": "2vgeYgjSefWhzUf6osmDbHY6Ggp5EZNTdz2dH44EKy8KPbhmm4XvyAqagAbGyUKRKgEbLMnp9j4xDifpet9afWY3",
  "key30": "4ty5nCSE4Fr1HrHt4CCPkjfg6wTJjsRcs8EkVeciift2b3HyLagmR6CRbA7rRNcDGJtvctdCEpZqC9byEPopMZc4",
  "key31": "4h26Q45djXCHSLgFEuwALqnaaHsbcZqHbL2jDj3yUJmvUadZuvsKpcW4famHyHKp5FzmQHZsPYFD9yfYC54uWmUj",
  "key32": "2skNujCuitg1KU1neyiumTMXTLUPt4dh4qgtpNvUhe6Nc3fHNuUYhKj8tTkRo7Fzf8SePwf9y4QjnbfWLzK5cz68",
  "key33": "5V3AsjqChJYKcbikPhfdymjxdMkxSuAVDaEwKX7rzjTe17dKLfepx1TxCerd6k6p8UU7B8tj9QhM9LM25Lcscbab",
  "key34": "4jzehJ2PeQnWRbh1CBgbPdcuL4ztHmnPzTUr61eZdKqVHCjejhGJejv42s4eEkbyFRtYGKjiSk6Hmyv97iB7D5pZ",
  "key35": "49FxxDN4jeFdrE2RPRiGVbjyiVdJw9fX4LDgsxv8K2RnFwoFb1f6a55z8CVceafbbznhJ24XMzMWNwyvLW7CWSYD",
  "key36": "4Ph8z6U2qWZVfz7YJEALwSKs8QjFJ4qcZ3vnrrd5JTHKnenUFWq9kMqCw8Yp3i6fAiQJWLUBxhjGBGbRBpAagaF6",
  "key37": "2Y4VNZeCc6mmLayFfA8onPDhSxx1RzTd7tgNu7kuxXCaZEwbxHmrRRMPCoqSNoWsFswqoNFiNzEtodsEDRJU3Bp7",
  "key38": "BpmhTA9KdddaV112zHpX3evbYv7rhs9SMsogMfgf4v3iodtbNkdxLH9PRYXKGq9uJV3T62QJRSGYfmQ61YtFHie",
  "key39": "2CTwv3G5SQNhh1Fksq2nfnTAJmGsXGu7vsNt7cmUZLPvTmsPeYfsa7R2f7Dr9ouaxXe4MayPLQsPk9gk6mgDHrE7",
  "key40": "2WnXiCqD8VKos5kARgnhJ1NQ8tdRdZA6eTAJxAsK7Vervu8tmr4UnquzU4XUxy6GdbrUAmuU6cRPbe477sJ939cD",
  "key41": "ZUvvw1y5Nr3n7Q2AAon6boTogTjtPCtcTDLk1SfW5JFqWUeM54KFhQJiesLctGbT5wrjdHji6MohDzAJA1mb7Wz",
  "key42": "2edXtAVpCZxLSPrE3WZSxo9oPhrZn2P7aZsMauwbvr1Soy85zQK4sjv3yw8bDR3CHcRtmnCSJjyWejihE8DkdGux",
  "key43": "23qPtXNK3sL6YgcdZgrp4HmHMyT6BjXMvi3n6p6jpVy2pvcoSRut8yUCJ1iW2zjX6oVW4jB5JZfoS6cJmA5kqSE9",
  "key44": "4uPACQG8jdw4sP3kB9vDKmb5bCHG5GJ7vjMfTbqqdErdVuRmHGqCiaTph6hjnonTuCtD8mX4v9DqyZ3jCetR3uFE"
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
