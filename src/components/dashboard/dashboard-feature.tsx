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
    "h4paRK8kWWRHSddVo1yKpdSADvQ3SuvJYJ9HN7JN1LMFiGcqg3GRKvUiDBhpngj9Be9sDQx3seKSa45uD61GJ9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vqVSkYZgaR7DM6T1x6fPMEd8j3sZNnYA7Et3HJBesz9q9SYjySAfXkkywHzcYzBzkXStCMDUcgyrUE9cnsNbFtT",
  "key1": "qjywPaWvm1p12Ec6wbKJiRMo2YNRb48tEa5T4y2i1tT5DZ5ZCkyEy5fRaRaKbyGGynM2rQMRtavpLTa9wmMEhpM",
  "key2": "iM51ny4zpPP8SSNytMz8vtfL5rGCbVoMqPj6ZCkP8JoACcGmm4EG8wTBwUZmKRcFJ9ZLCQZD3TvMtuJEE84unbS",
  "key3": "2qh78ZN5UoMpTPUk6eMhQ34LXiGPWSpshmCeh29rC9aE43i14SZYuZVFtfm6twmHud7X4F3oVNtpuos7W4ktWDo",
  "key4": "4NtvfdJpSdvVZT4Rgv6NgXCRjA1BHrasJpEbvZmMVihWz4U6ywPAwBXwp2RkHrnkKb2oKiug1ofYKGykNzrUiQtn",
  "key5": "4YupuLGmZbZ85Lgcrcj2Pev1DNNQiADJjhKiC5yJdsg1uyN5jGj1FKzS8pUtLZTWJ5q8kngi3CdSVDXa66KBxSFu",
  "key6": "T853vtHKu8bvP1oRZ1TaoEk45SsvZV8bJ4TanqvqXo4yuz4r2kGMDuDemzJauXUb7uEnyB5Uc136U11qhcDG7Zr",
  "key7": "3PagLigp4V1kWh5EfCDz889Gs6VcmMSUGrPq4F9CKzizS6xzRFr7W15cw5G5boNGpjvTUdjwyUH1wG5XM8ewRbvi",
  "key8": "4oFcbEdqja2ZGKUoKo7o7XD9phmUqmh11UyaCtfz3xd4J9tr4WaTRvvw6nw3JU27fWYxHcq4xygL8DvqTr1nYEjP",
  "key9": "4ZQjheZDWRBwKgStqr9XDnU4Kg5Z1AANjZKxQsJn6FrDLPXgZFA65bP5TSkTiV9woWF2w1nvq3jhkdHrhBhBc37j",
  "key10": "WjHT4ubqdTfCUbCPRprogUv4jKPovGuE6qQ5w3RYXPXock5h4pf93B58sgYTMGvy5oKdHZZXmQtqpNL7RZbwREv",
  "key11": "2To18hjdRWAovVMmaeNimrb3riaN2pHGgXrj6zH9RWtPNZonUY59W2H292Y6ZzHg9xsEVAg8cRnyuWk6dmEYpCL2",
  "key12": "53wFecF5XQNse6CMhFfgDBjd1YpwSnNB81Lpz3paCfVeM1EkS3ZGbUvts9D6X8VQF6eYiqXi1ysDwToBRgTsZF98",
  "key13": "6zvfTws53XcPTMetSFo5RHZSK2bhHQDLrqFZv3YdZRDYhgf7Rh6evmc4yN5KUUrdAKUAPusyNDwYAjvqW7ainmJ",
  "key14": "smBuMN74i3Lveri5e8cXDtDYqMLMDvSkd1vNu6cStUvA43g2gDzQyEibuxUPxTyHsMTERMEkE4myq49hsEvPFR1",
  "key15": "4quaQa3LQ7dMh3yrM1DAgzSo7nKRa5PAuFZafXDngrvxJdWV2KG62FnM96CnYo8H7JqsJFiNQwfv9hECUubmtZbQ",
  "key16": "37Y7Bj8UvpLFkW4uXtNpWdbioxS5n5iTgjjve2vqKkHt9m9bm7oGpCakvxcQAJQti79MwLuRvNvMTZM5vQ4XPM8o",
  "key17": "o9E47MLE1T5KNxyFjV4m94UgmZczSZswXFD8nDB4UhGZZSBx4QU58SmtPBTQD5xwvBdaV6WTiZ3nCk5YxpzVDtd",
  "key18": "3YKcm55N8rmz6BuFPHUDxxC4XUB1nqxcKHUScb3HsruZjGcFWe2rDCBkuZ54P7Y7oKTNCKH2QHybyYWANG7945ao",
  "key19": "41bebxtb4epzVZTKdLHKvbQnzCwbrakuXEcwDhPT1SieueumUHZFMdrVPVov3Fmn4MckHzy4kirNwdpsc1cDVYJR",
  "key20": "DLEZQCdMjPdctXdKvhmEqHVRPnRJ9x1wzs4HJxYf6c3CMawG42RMRLCc2LT3K6g9bqR3SpaM7PyRKsPCMEVKjBW",
  "key21": "4AkVaizAPeBFPVsvtyuCJGxdYNa7GqBBQCNuKzwfeMWN5A3VugdP5McuDuqrFNN9HszoENCcdnpqwgEXbaoNCtMT",
  "key22": "4hoVZFTBs9NGxvYB6XQnC5QEB8bqe5BmRUbaCsW3G56wVRdE4oFAaNEsydKFRzExL8XoiE7yXWJJ9Mhzxsn2V4oT",
  "key23": "66tRS2gnggiA6Eegya9My9jatBaGiSoApbeUeJyhy64MTpw1jKAsU1Yf9pVJvxCahFZWx8XgtSsZ3B2LitjyM6rN",
  "key24": "foSaCzaEWjwrzHFnVoANwCeSsz4wdi4wgGBxpXmrgJWKWTy2H8VDd5Nn7cxR6mEG5W5DiUsmBG3XCjppiCWkvVz",
  "key25": "321ekeRzWj6RNR3gg56kzxeNFQqiayaQpiMZuTYDk7yA6MVWpmCwZNM5kzC5sqUC9GNTsEh2hZzgXYrYbXD5FjTt",
  "key26": "Xtupb8uLVUP7Pai4coQKiQFATk6nKxYZTWZdszkqby1Getf56aocQfxu2XHFMb17REsei3ghpmFzfH9fKNozkej",
  "key27": "3hpg9c3p7hKpTyp3o6xb3vHL2DnNiQr5y93Fr1Xdw5tDDa44h1BqJLiwTYYLMo2MnKKecGPH3GKG9rxtxmztddvc",
  "key28": "3aW86oPeRgnqcY9MpSVcdgNRT66ZVXv4Mt4RyqNSC4Fkh7f4hSW7Hh73gAZyEQqjUHKpEFChbiKP16xDAsHWW4Pj",
  "key29": "41vuro4Caja7HAVbtgRbhdBNqi3Q8JNGJXrPTzhNAn5ftMUi7pCzGhjBJYe5gsZ9SR6iuVpAcbH9W2chXs6Yvniq",
  "key30": "2dr9SBBWF3k9PA4wC1dQWBQzzCSN7cZTTn6U2opRG6Arjfde2TfLmmuRhchVaszrNHFeZAxPHPo99TTu2j2H1aSj",
  "key31": "3goZUeXVzqSawhymMt6tmy3kN2Z2sVDqhB4G4mUGJniNkGwS1qiN8N4Vzeeu7uxpUFddvZeyo2Ab4UQB7oxecoMw",
  "key32": "589D7dGNb3N3eugmAhYuNuXAqLUdTc6o9mfeagvrY9dHQB6NdMGREQ9jQoPUexjBqBXm2f27jMchvmFgboz8UJnU",
  "key33": "57CsH9AL9799m5ECDMyLvtNcuHNk51fuWt8oG9hErFLH8Xfm1JnA4XNushJvQQQABPmRnt4fCDXaxb2xbDLNhQvC",
  "key34": "311vyoLwo3BPkGSWYNgRjwM2Z1vLS6SXGh93p6FGtmuNf82dTcggArVSK7vPETipjcAweCrBbxc4qGmvGsY2NSi5",
  "key35": "5Qaz6wxT2MB6A1bE7Gba7NcxvKxzPHU5T32yaMWcUnxJXr1Mrd5Cyj14vLtCViqqsCYn8Vquhc8rdYbuSZxB5VGw",
  "key36": "4aJVvx1RqWawM3ka4Nw8tpKo24scZrzWFWa6RzBTodLa1FgMX473BUyKghzftGmPDvWViKT7T2Z4jBRZhSMyhUgB",
  "key37": "5J3zPepFag1hpsAKrZD9CaEVSFMDkv5iwngCooKshU8AL5LyZbNv8nqxeXwRomxbWtKYYEhxGTn6VPuNEpWjQVha",
  "key38": "af1GuVAUR2CTMy5jNiuXFp758qiA4aKdpYHuUSryvCKREAbLxhaWRVB63RJifB9JnUqTC2ZpRwbjLbuQ1JAP5FE",
  "key39": "3Eh4xsBX8FKfQHZCSDgaA4xTPVhjF4Cmqz22gGGsF2w1pgQFMoKfumRdFPnaBoNAuPSXcfp8tPijnC4ZHLAmTKZT",
  "key40": "2ZPU8vEv4PWQVTszMKUy9ZmYTjMVm7bnvvAnMZNjh2WjQ6DRwiia2shRh8EEUkWQDwH9B3dUoSow39gaWP3yg6UN"
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
