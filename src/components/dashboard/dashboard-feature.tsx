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
    "3mVrhHTg4PCEDUt3iBtcqZuD2pg5FxQxjA6Fn62NswnjxAL7wTbwEENzJyRJhBoXT48ZrvCFiQ8tznBMBoCyMfJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a1tNk3mSss1VEYyofCfDEutrsWYmQ4rWK8rUJGx9WdbMSs1NXmSu48soZYvAE7sKauEBLm6qDHrYdu4Qz4bUg4t",
  "key1": "568yhfHvunDq1HVnLjctiRwACnmEfuTqVPCpDsWxiBoDfsrT55xJQrVVabLKfPvjjgpjcuVuBBQmmnwnYCtSgP7k",
  "key2": "34f4Hnsjxu7zYuu2mfswExwhh7kPho2FY6LgeCWab4xUaSNN8nRiyKfkcjBxHJTtBEG9uThbLeQorFo5vQJ7QyZ6",
  "key3": "4BCWv7GTDw3Xyog6QBf3U4jFkMFGxxiKPseoFPHa6b8ZqLuZe4rEZGLJ9ywdx6pcqMF8hS7Q9owVu5QKGWuo4bgy",
  "key4": "2x5CVHyBsJtGGaZKz94GwZzTUSZ6ca2YB6jAc2wZVPQSeD2vjA2Q7R2uqvDTksUShshJ6o1a4XfBFW5p3irbn6JY",
  "key5": "66HRzzZ7KUQZSFjcP28Se7LYAU5C8UhQFNoGzWnt3YfA75tfzaZ2mqp5CfiSpJX3y3XQkhmL1KVtXWtT6iNDCDSz",
  "key6": "9RiAKP2x1vhM2z9dFUEWwDQWEzsFSkWbX525TzRLr5zdJUCHvbhDrBSYLgxrad8mr2C2rsay24hMTbLc5gEwmSt",
  "key7": "FPfj43seDKLS1HfxUnTP2gFqvBZjRQS46yT3gKGfTvYfzzyYa9DNjbu8oRkv6TZ7bxzAAPUstAw5MgCd9A3TqQT",
  "key8": "3CTdNfrhAgqw34tvJb1JYiBudMwxUwEhE9jrfA1y5ycugW8r2Vw1Na4MYTsE43J2KY9h41Y8twaMxBRiGHdQgqbR",
  "key9": "Q37b959wCsrDBPZHJowhGYuArUtF79oFfLBr3znKAiDK9wqGh6YBk2wVNhFDihjPhLMMFEs2D3c8dRnHPN3B5TS",
  "key10": "4aUbk8WPy9ksjyeKwfJqDRGzc6wYFtc6xgUb2d9whnwoBaFoajGGM7tCctcaWhpAPxY6VnKiRU3gYFE15p4XV8yX",
  "key11": "4jSxcF6MK9V3NDJ5kqbiRBsGNo6kGCusYw73tntBPAJvymtQDhAX6w5tTGokRfZrVyxXDbBK5y7oeYGBNjdDCDMr",
  "key12": "2aPXNcfpfew8nGhqXx3TTjd3QinfxyKjZELep7x2eUcvsByco2dxUfHsK689SuY9GDw2GMMDoaDvnzewiGoQk5VQ",
  "key13": "3qLAUv2rw1KcG8xcVgVy5mwxyqumgG2eZbAbtEQdU8MU3JfCauuvkcSMXj69ZrzL7exyRuHjw8XtNgcsdpwjbCaU",
  "key14": "3gJ2W8RbBxmbHcP4UYupPLzgAmYpChivuHdPquY9hBu9rdP52cjbvs1Sinsgv5cdNyZssEEyZDKcu7zmKPvcSmXv",
  "key15": "4BHVcvZYCSmb2FgnH8PV7hauoXeKGFAL4icGViExWMJXCQ8WsEtv4BQ5bguAM9LE5LXSfHYEi4idwndR8BoZ4QXR",
  "key16": "NgEPubmG1HfaCca5LLt99Vhp3CeDSWsTZi4xNRh1G83SaNkicUutvGaVtTWWsrTenwJXJsvCmazJZJrEbU1o4sT",
  "key17": "5HBXWdrDSbbwRUJ9DnkeaUNf68kyVNnGkjNdRuD18tv71rgcjMN3pAhMLNLWvT7R2sHegkUeFwcFWRkBA11u2ZKm",
  "key18": "N3S9wabaPL5NLeQ9YQM81EFiP4HQWw8f62LmKCVtydamXDzc1QRqXd2UgXVvkNDjPhFjEPAz41vJCXh7owyNHpD",
  "key19": "46Bo3jBVmyVTPd8MWwsm1gQzu82d3a1ZTCfrwdK6VLXre3tDRsXh8XNvL1oQap15eecGyenTPTBUgvKZS6jUueUb",
  "key20": "58fmXFB7VrkAqBfUgc7pp9nebJeEfvFqumeBFvpNPto4yZKV1iZCWfHfvmcuXy5bC4pCrpfsApDXitkijWgrpGam",
  "key21": "2qjt9D7sk2gbVFNJcWTBF1VMvXbkhnLzR1boj92idFFvoFtqhW2jCJuTSrZ6UN5mjQXBoGHYiTihtPxq3StyxS8a",
  "key22": "2WViDNZGNScx38x2SrrJ3MRa6rAv5eqiJhQM1ttNUB8CTY5KaXGsAqtuADvgLwYmdRN6BzQPzvxRp7E5GF4yp1Y9",
  "key23": "5QBNsUKBTTyeYmEYsUygfM7y1gKPmhcNu4C2r69JECix9vBwXozj25oSSKEwXgTeu4UhtQGpTNYCZuqFEwrbaYiY",
  "key24": "5dZZuf4zXRiF8c89CCwDmfgSyeyZBVoKTTHrdSdPUdA3gj8VowCpNuN1dyPKo6b5eQzpmdnvnQo3mxgght5JJqdr",
  "key25": "3D1DkQjvkP1WpvZVhQYidNsa5ncmKzHrVLaHQdioy3YP7fHHMnd7YN5eY51kncDtFC82bf7MCG7ys1JNE5NPE643",
  "key26": "3nRTE3ywZFFRsbswADgXAzREWLBSJyiaiyNroZB4GY4EWUK97bLDnDovC6DcWqFVDes9dc9bARYbWiASQatkmF2r",
  "key27": "44D2QuK65Lt7G1BjtLjSjKTQmC5QnBRA7nezDZWngCnv9ZLrMhEHJZQFgrU1ArNUKCMw7JciWBUbfaCcsCTQti3E",
  "key28": "2wHaPCrVyp3WHijPMpsAx1CZUMh35vBA92X6KU9TyqvGZZC8KiBZBFv5zre5qPTU2opzVF5sizAV8boJ23tqTR7v",
  "key29": "5MCeKE79mUaypmYgnuepb8TpF5Faq29TyQfXdtSo5DwCHYryGugmcEhQnX84fgTJ6ftqLhSNxBMKdtT5e8VyDWo6",
  "key30": "5h1991ankT3jXiTgHntGKiwsJjAYn2kRtSyV89DoNa2rY9UGHUyLBeTnpVfMDYgYcTuFQU38ZLYFxkw3uedGHTLc",
  "key31": "485ZBdUGGiiq2NUBnUWhpnKBnTniMAssEm7aBXnkdR2GUEgWMo7bMzuXwcyZuT3ZtTznypTFrhvHJ92M9kzAffWu",
  "key32": "2bC6j6iWfgWhHt4Wnzsem5MUxe6dDNK4MyvCp8iFKzBtgmowofRLjjkgkf4FRBHYbTXrmB6CzkRXoSCqJvHBLFT5",
  "key33": "WJuFNTHMCPPyPvQTdiZcjqzRyHUZ8QANVtA1P3qReN2SDZvfXdea84LFnCJgn1HyJbPAgYAZb3BXYnQF7rCZaFj",
  "key34": "3opqNza647ySdnfBMc54REDXKrMkuJ4zS78KjbTM4ateFymtXA6JKNM5XyURfUMceZSNAyEHKtqHoTcJCLNgG6SZ",
  "key35": "qewdzz51dodeq19Yb77WfpUa5zLaLaq5tnhEaSsxuLsgQmp6Jr3tsLKU4CFfMhA4VswFePwzqrmLQbKW1uH3aG7",
  "key36": "3tnvGmAzgtur49GPUaoVpTTuvfpnBi9pZeJQ5YrrCqQ9guEHnyF6ZnJcrv8FHSpxwWsxvdC7pkEFt52me7iqjqAC",
  "key37": "3f38x1t6YAEgEiYRtxeCdfSrcRZUMPrsTDEaYkBtVsFZmy9qEYeSN4MkKWcwggDLddbiHFhPoSu6suLWEomCXvA3",
  "key38": "5564VADnyyF9K5KNbPsYMqLNsBaVPDW1nad4qar1jbKeT92QPGRWHpLECjfEGfCrmzq5UKZbj9tiwsQDusSL3A1L",
  "key39": "2LdkaoQPKT5qbRUMqq8L5DzwjAC2FEzQdbsKNXfb7pRgkH1YrNAf3V6BSsC8jGPPn6wvXGo9WymLNmfBoyjqMeyj",
  "key40": "2N9yBcBMRsw7mhW9ZSW6dYQfCmjSPXNcdpPSnZWPYQ89F7FKnHTVVy6E5rRiN22Zm2U8uE4DfQK4geqH9BWs2PUz",
  "key41": "3GAK2vyQvTWFGfHVa3H7Xms1x67jfYumfmfoEe11agfEMb2sCJWrJ3nR5uqVacop5D28z66deF2Vo3g7Rbv5xkCD"
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
