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
    "51m4ZHhgCpc6gvmgFaEyQdarHz9yVmagc8jLXwQYHRPjBi1BgBFc8kw1K77Nvq1NLqbHtbC7tPc7RDA1XVeMATCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D465rU9zRE9sohZFeXVNRHg2YS1ASgvNUsUozfE5pU3tFPLCKRtH8eArKdRakDcJHQtassS2EciKRE1WCErd6cw",
  "key1": "3o1WBpC3uf2aDGHzLPQzLpeDoKdLvcy4tu8XcAxFohsxoS97A1FYAcfajx3eELT7ssVbn2net5rAUgzK2AxCkkDG",
  "key2": "GSEP1dMgSGRKfnwn5DFZpH8aSoAQmTDy5LdEptxFFSNvfj8a1vVkUFK3eZq6YyGa1BZLBN1aCouLzzJW8ae1mbe",
  "key3": "5sbDJm72FedmSmMKeA9cNPVkBucYmcYfD8zynTfLQuae1cPuLXm6nkbgajxp4bgcpq2ekKSg2BEjrPUEUgCg97XW",
  "key4": "SJpJEwrVytGfA4t2a5mi9ZxJmgrANdD4Snyg6ux2wgYoFDVHcom4DHcQKEZPivDBnZurbFdBZ3c6L2scnQVtPVU",
  "key5": "3UPY7ZKYVUYxkZDBmSWkkDgRPU9oKAfdKM3GFREQbNwynB6WzBwcsj1xSb3U5nGLCdvuFA3q2VBWS5VvXEnSkyKX",
  "key6": "Ngz3oRkidpr7NbAzpytWUtizSsEnSXdSf2Knq83zSrJLtCGy5WcrinTfdssUVsKWHFNe9W3Ru57h8o33S2YoB59",
  "key7": "39omUQNsegNn8DpwncmdRGtXFhut8RLWBjR2N55CRvTixmoK5NUGfWGniVBLwioXGqC9YTLr8o5B1BRHR5ZHnxSp",
  "key8": "34nq6dstfRhDESZfDuq81bSSq7HPq3BeZoMqfZN1Vg4Quff14B7P7MSx4ktjJJDY1wKhm6xSNyRrJtq5MRvdcfQn",
  "key9": "eX49Jp6NgVzh8NfpWi7jCh43WnSNKN7wGrJtpkxJdDjWF87yTB3VfYrrzGDQooK1bQS5zH3s7miJvDEhQgmKtms",
  "key10": "27po2zNwUmgHiX7mkK861RCbxv3eEUMjNrRriE13n6sDAHeeSFGoa3PSnCuscy2MbrHXxLyR3z8cd6JbdFL64rkp",
  "key11": "2S9Ustd575mVFsVueWE1GsEE7RAUfCLheFVVnT2gZZWWabso3T1qozMtBDry4H7hFvJUe9VaucvhJLfqwnJ3uM1y",
  "key12": "3k9Vhao6judgHRKAR4EbbEzi7GEyXi3M5NdvobqsP3wvkb8yiL9gWmMdKth4EoxkdRUm6stfUQCErBKouiqkS59q",
  "key13": "Ethn3J4QAJyyC5JJSTvLeCbsE7ApHpiUtSwDkwiVdPPZdNuc7896c5xZEZwKDY44RdBjz6A578MARyMrZvJKENL",
  "key14": "2bA9EPuwhRZ8HV33mcsSxfSzYx5mLC9hnFELAvx9T84AGDtmPg4WRNrZwkZBrk7WCPeSt4Kr8DfsE3akZBFm3zmD",
  "key15": "22kZ35MEoknoVyZxa1UVsv18Sqy179p5HbgKBSbSdoCjjowctYa4dPq1CzpgNhmszkmcJ1PS9ymnypr4VZEEheGu",
  "key16": "2c12UjYYXa8Emu2pTm3BHvhTQ9KW5YbzZ92FicyiAgiTWqntJANmt9zz1M5CQhKky7HBu1n5ikPjzv2B8eKCYsY5",
  "key17": "4kydt8qWsdQWSPxQfU9XHzfJxtBdo7rfdJdzxCRUMWErDskRmRT9GnStt3rfAeXonVtT6JCJBzqFLXdCn1LEACAz",
  "key18": "29d8SHTvcPJUkHHnguf83FXpAiCbB7kC7VxidjTaUYMiK2JFbD5LvVGnd5oqyMdnZpCWUWyPNVm4R1SJeZZgQKMk",
  "key19": "5Du1h49m7V9qfEvGLynnTZHDmhKxh4NDDN1gAdkjpcMYE7sbyUQP5moNM6xL7EHjV5RFYxzZrW2qbXDkYnJ8YJDJ",
  "key20": "673AM6YsPJaKez1U1gijSriYyGYep5WXFGeHDY5iprNMoJZ8tRue6YQZtG3LswvEggKyUiDNMJX5mkcDU1b51GBy",
  "key21": "Q3bHSQMjcMhTjeEbm9PLqm1x3rucc8rmcoVooMbHzxKeq35VTJ2E7vvQCUjtmRAMQGcDTwdM6ec8UYCgTpcPuqQ",
  "key22": "2PBkKpDpcCuSJXAVDotg1P5wyZ8e4febawJkQi3cjWmfKzMpLpWz44v1yqujLPyeBQ6ZUpn6ckautn8BvsQetbg6",
  "key23": "49J1iqzc9fvUQ8ACNFU7haR7qLqVcmMEQd7H6bPRgfSGX4WxVC43bScxMjP5B8y7WAmbtA1dEA2h6Hjt7XaejsFU",
  "key24": "3Vn1SEDJpMW5Fau1QMYkugEKFfmpaBWYzbMHdP2wMEmhhZBobj1zYvSVqSUkXvENHCgnZKJfx8daKBiE4RbRC84Z",
  "key25": "5EJ1uXoa3NA4gjiHJp6VJxG6NnKX4g3dm54NZnz5s7P3KeqcxL79sobqcQZEkFYxS3XdVC9friQS6TBChYdtxkyZ",
  "key26": "3wxuac4XP4THaKHxdAK5fZSwdvAvYNjY1Lm1prgBVmxhQZjSet2teXfHcsYrTvGrarJHzVWrnfybEcZugcPsQcsG",
  "key27": "3dUD2Ut7WQqzkND3tpyKiZHVHMQFTkEQ9nLa2f6hFH4nE6G8uvQyWiJxu9jJfGjtm1bN7aWwe6pFbzYVZh4KjaSV",
  "key28": "3vfz7oT716rTHFTWjPUXLEfTg9cDTiz141ds7UFQdq1ZUofT4kom1nBtNQSMKaeEmkBtKatwEjaPo88k3hrDjQHc",
  "key29": "3twrCKctzQJqH2zd4zm7DDuCs24j1quPxRyf1KK6JkwY4D8TabFtMSyux8GsqWAcypNipazB73Me2WBYiYtYVV1U",
  "key30": "4Z8L7MWZrikqcPoVTH8jTb4WU88Sgiw7Tiv4eP65PiCxRGBsw7tQVizY3vVEaFv9JiC8kWjgD2RstdhJspvnZGm4"
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
