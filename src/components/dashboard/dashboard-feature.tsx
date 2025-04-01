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
    "2JCEYCQnCf7eNfabejjJecLWZ9EBTy3z3QrwMuhKfQmFJU7yRvKUxrDaL3w82d9dR2J3pKSHxjtctMuMvYDipjWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iWY3pdmnXwq3cCNmgXtUaybkMSv3ua3ovRhLZtMZDARmxFwWi3fUw8q4ZeytGM9Y1R7cb33AnwJTbXgyytZYSs9",
  "key1": "3HcT8mdGf9YasE813MQnyUvyTquQjwfNnwK6ypFSsUDpGucwSP8bkvHT1rsWFHf1FijUSSh13nxTGJqDDMGocnHP",
  "key2": "DD4E2bpSTcgWSazmshvEsfyXFoDsudaVB8vgcfXXGsv1ZuhZee1tHjekFx49zk5QVZ3GMke9Earh7QFEC9TTY9w",
  "key3": "64ZkYtWDXvVHB2gqNKwTcG8xYXBjCLG1zFRCcqdqvvmy91ajRVgokwGZpgpmmjFU7pviWDdc7BtuthdJvSkG7bfm",
  "key4": "5b146TC6UAuPPpPPQFq4Yr2iTpBfouHuD4vCfAgg87HDFtM7kb3JxBFWUCR2uQ2GaFJT6ouAgZDjUt6n2AwrAXKq",
  "key5": "21aBgt2tktK9xnApYqjU2DqMRaFkWtUAp2TWh88sMfJ1FAnX3y8tuKVrm2sskKqxcUFkKutZJpG6pa7osn3Cj32A",
  "key6": "4H6ijR7J7w9Nx9SnpXkYYvR2axoPjzyKEBn1UwnpWy2nLVkznTmfBHsi97s6yhzY7YHaUidSLtnbPE8McUq6qTuZ",
  "key7": "4K1nz4FkzWpTa1piQMU1UQXMPrisQh5Wk3hjLixLUW979iQWuWk3pGyM8ZSusDhSFsKMzWVpWDZ5MP6fadZqFsGG",
  "key8": "3GtH3PBk39wdP7rqn2i8NJcKSfJDRzFQgYaADu3pPK2cb9njsQLPBekJcvVY1BoFib9ZJt6HuuvyMayzafQNKGRE",
  "key9": "rfHPPdaC83XudSBANjSbbnrvc9ZQxhts35bPS8jWJwSEiu2H21YrsWqtJLvSCMWCC4GE5uSRHzyokNVcCcKRTt5",
  "key10": "43SdcH6gW8Pz8Kfnc9rAWdJx3p5ZsTqmNPcEVuy6abC6tb9sVRKmoNXHScbLBgKya1AxcQCkXVdXYPcbipDRhDFL",
  "key11": "23p8GTAiSAm12aKPzGDnxoq9hPgmzRkF5T7rsjhTiPKEDPxi7FczSq8kjqPzu96vnps8znatC4y12tj5ix5nGHjy",
  "key12": "3EPGWCpEpARyfFhF3i45iKa1xLKi4F8DrJM2CGeidumNQzM5RQF6q3iYhbeZJ2Chx3DSoCRNt7yZ5FmTq1cbrgbY",
  "key13": "3QEAhzSpKFfANtKB4UfB8f4y1xs2p8ck2way95UD7GpyhECvKqFX2KQcvEMJ3GeYXgLBv31PkC62C4pJUNLTZ6a9",
  "key14": "4fRHRnE8rSFE87XjwsAxVyC6rkFdXT3XHuRg9PEaSG7yYEN4VdFVoY7gMfTEo4YwETYrSbktRRuRZh54L1qC7G9M",
  "key15": "36tULyhzmueQJRDYup4YbUQuetqYg2MEUzzukAyPDHBAeVdAZRtyfUQf8PGXrfU7CuzYkjVBbeDnvGYMYZx85cyP",
  "key16": "2pK9ptMi9SKy3qTzhjwdY3wRqgj4pCB5f8f1hjNNFzJq4TAEB9LMC8Jk6BZGukczuCVpEn8BunU1QGV13A2Q4JDa",
  "key17": "5aLrgvz1WH7ZwoMeZWSw2B6bCCfiKCT2GdVnPTBxEwQjggovoAbih3gEaRjbJCTTWFF9XkwffC9kBGPZKyMMA3Jc",
  "key18": "3huxAtrtwHQ5SfDbvrSqNyTTAiv18LcHVDGbC6V6iKyaNoJnXudbuCUuEdsHZSzsReGJTcmHxAdUnJddgrjL7eiF",
  "key19": "5CucFhwASX9D62JFeVXPoU4Yos9Vpu7Ht2zciruKKcc3rrJHemq9c1AR5BsTmgASa3ZkivKJB6QqDjcKmpE4tkPK",
  "key20": "62oVaxR5fr32Wt329J9ZVCAtufF9ZdpH3kxEvkjjT5PkMkhsZT2ZoDfEGhQ9TJBneCJvUokVzwnuErLEynim1tua",
  "key21": "36NA9z2wqXa9a3wYaghnmfsPKRBdgeJAMt5WXgApx6wrWHfCqyMmmaF4Y1c8uqyomkefWtjFKqN6KuKgD2BzZHaW",
  "key22": "jk4rszdDXh8HjqWq2wXXa3nU48CYvJHW7f5HUwofy2XofTxDhYA6hpC4w4p6HPCoo9nWVEtqb4jU8sdkHHWTgVd",
  "key23": "4i7Db3SRc9FbCFWQocDbfZxC26zZmozGhThNy2zVYhWb3ifUKbvAhuTmt71g4e1mAtu5m7KH8jyYMazAAp896VXU",
  "key24": "3M5Jwq7WxjS1sEurw8vG6bP6HHSfBXK38EBGcLhmCnqrZji4R7cp2ZJBLh9evfScB3Ypqe2y49ayzkJ66UUQMdxn",
  "key25": "2NGYZdbx4QLhdsjc15NotimPnPahLkT3hhUY3rRY2u5jzcSwjCm8F5E6whvv6cEMpdgGL1D7kh7ZqLacBiWCUyJB",
  "key26": "Yk4xWnNwmY4AsNXEj5geUAx7zWf6rizx9ewNwT6egwSyVkkFZDYHNkz1RTtgnzvDKp178sHuRf3wqFmTeKjiSGC",
  "key27": "4CE6jVyYWaxVTnrLrg3iKZz2bgTNjayobHBeGXRbFdjRh4jxbdzzJmAvihv793GJAq5RTW9622HDkTx8TSp5xkhc",
  "key28": "3pMMjndMKAob7LqW5HqJibMEzNURf15LQdrvwWDieqTRZvLzHrsFhvhwKQmK4yeKzRcEtrnfsxFK89aoeTZJThgd",
  "key29": "3eJ8JSWUiy2w4XeAH5brJbadMPz3dFARqtf1UV5KoBrRzdnMM5J9mdWuRppGfkGmDAw4LqcoKse3cKfHMaTdsARs",
  "key30": "j3guSq29ULnx9MQrp3fhdmFDPCJn7u8jDjaSsVNenCJxoPLYdoGcVEhUoXvPK7epLCeAfZbuhBykx1zQoY4ZaAX",
  "key31": "5di243zMzGGG524NkPHnC5prtHs1MLsEH2pjCmFfbKCNnxCNEGRZNH6RhtWCzSrFVWtCqzRujtgNmWYQ9GcukNX6",
  "key32": "5mecNnUaDQrXqp86eZ6BYMzesrGWNTDYdmB97625VosrUMTTSDuneDMXcvYZVEzQPvRn7UxkadQYq3rexJU9MNH1",
  "key33": "2eJkQ6QYVkRXdcpwNrom3st8BJMEU4osnxcFMakQNJnKTLDZZWKBoNhEr2y4MnbaXBZCciseVt9R2YHjcdHJYtDD",
  "key34": "4fuFL4bBYvWxKxQPXgGFBLiMbmhyGgbjGzK8R8odwsK72MCV3ELytA6bZUXwikhZQeaTGaFoeHPuU35zMXZgw1wA",
  "key35": "5jKmjGoD3cWxJBAqEGMuEhkof3fLz3cFeDbBidFduuXh9FLNng7hx1bbmCNZFo6m9wFudTRuZ4BboXJujpt7DN4d",
  "key36": "pBqGGtqA88WqdoRsGLnQJkfrfxyayXWgFe56GpwmGSSqoQQJNAB7SB2sryC92nwbyfjKRJDssHmz4ZLFP2Q5WcP",
  "key37": "awr7qUNN13wxQfH6vZHnajBQLjbMneJ2X8JGcNKoYCXMDMzdmbnSxspugFBx7NFBMsPQU7JGqrP6fCJZicSLP33",
  "key38": "4KS9T9h8iiDNk3yHog8kzBJs3QDW1mpFzmouKkPa6LySbwpu2vnpu13LtbjSXKouFDkpqnKXus1BVMyoobNPUWno"
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
