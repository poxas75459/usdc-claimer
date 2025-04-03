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
    "3bvQ4A9v38KXPcSPB4zHhuZ8PYvB4PSCSaYyJTE1Fu96qWtxfz4Uiq1dfsCZdzQ7FQyyQgfLq16qQyUBxBqU3zwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dcT3wGzNvd7RK4dhpdocsJRMWbmckHLoDdtpeDVGjsC52JfYHdsbgXoJMfy8ms9mJYMS3ExX6TYhCPNp1WDZYc9",
  "key1": "2rfC4C5CoMRwtfK9wQoMxY1AXuCJht7CMqixXVbBqPV27PAsYTYVavYvwyfnfUk57TsDCYSAjV6vbypguAPvaXCc",
  "key2": "5s7eWi3o1LVHBxQ8zZnv5ntuJq4Z464i3wcfpFpeBDsE4sdpnvGAbU6dzJXeq1MikQ5XQcHUZnjrR2kbAC8VmJSP",
  "key3": "58ZPnd598eLjoUHWe5Bm3gR4qHRySfcmmkr47tCA8o4AdMCVQ24U9UpMh34RHecxbGsKHw9kHEf9zGPigS2CNvCn",
  "key4": "3CrucLFR73jrg5YbtYv8za6XfZCDVX1Txqt2T1Rp1ndBHmNW1khCwLS56zMhVXgCt4gZ8EQU7BuxCS4xoHSPGTXu",
  "key5": "4JUeGgSYxSXwZ8RuEQvB5PgrgrkoJD7G9Jt8w1mTGJQUFWCYHymWgFUeftYwhh7fNZBBPVttzgsUMDqTjy9emCuG",
  "key6": "3SFqri1h2WpduuJN9vxTHoX3FUyP8n5h5HahADQihGMjGCvg7GxevGQbNsa9A14qbW62QqLTEPm77X7Qhprj98qf",
  "key7": "RZkGQw8xJTcVaExCTkQHAju3Aaj1gaCdBLuMc5aWw4ZpGTsTvLqCoDczRJDeswAP2Q7zgUT72gPo9T9qjtRPwDh",
  "key8": "2E2gV7LfDojFHTc2Dny82BjeTH57fvrf3QTsruUWD9mmATkaikon1kb38srn8XHUw2hGpgDP6r7roU4S59vEvgg9",
  "key9": "TqPVgGxfgFxe76TnuF1Twi8o3oiWcZsub6agCRwFpffY5u1orzyjrhLzGz7D4pC4QpKG2EPR791E7Q7r1N4zA5u",
  "key10": "4tcanmmVTHFUirRsRu7JzXSiZCecGnNhhevxaYGyfftkY1otixq2WKKWWnmnE4hRAdsdR1VugSf9pqqwMVZfpaXa",
  "key11": "5xmJPwJjJvJJkagDzy7ZmMJdoNATudV8N75nhoniSNMw71h34p6hnyTCbce8X1tXRh2LqooRs3n6UZ2S5A8wELjs",
  "key12": "2RmFp5uYsGLYnnrbZ5Z3r2hwFyREFbk9TweE44u5mrv3ocL47LEGC3m7a1BiK9wpiDoWmaxgmsvJVVAYneGMCMxp",
  "key13": "3cLGD7Zza7kWHbVqzVDJqngxzkHphx3mTNFzxf8oJgRVgqaocBpv6VNepQT5GjZNUe9eemUgsGZVg8rQEHUNq7wp",
  "key14": "EYraMN8ch1fPZyKktMwd23p9hEq8118czccjsGqxCekxHtZGBgM6JhXbsg9aZE6UGAcUgz1A9MdcmeuE91KWtAT",
  "key15": "5V4NTGsuA8kWpuUi3QKFucPGycqibH4PctjwyuyZgbbvvg2i93SiXDerodZrSSXQ8iesB5Lxv6tfSjjonBTLUqqL",
  "key16": "4vYJySzixPy1BYATbw9EHgfCk2P9ATNtC9ZvQBMTgC7xhG95CeGay3Zpe6Fa5WA7DDC7LkZaSvwrbgwYTyCbbs3T",
  "key17": "4DfmoAYrnT25wd97cYnwjHE237th4yfhPVxi5CuHsGqEH9wjQvbkaNpRe5Dy2fcZZzZ8rjU3qLerHmZgrdjnSTtj",
  "key18": "25AYDHe49HgFoK7dParzM2GnAjpv1FhWSFFEcjg31DkTa386MPLqEjMVp72BFKCQLowahQ2wJexbwEFVBKYd4vWj",
  "key19": "4YbCoxbaripAUthaWR6WHEoL78Ta7LFenw6pkAxXJEQ3ofEiNUfurVAnZFTonuxdfknNwP249VyCWz7nwS7Etb8b",
  "key20": "4qjSk5UgJLr4WoovqQhCoqgRKZh2crp5bjLLC6qPoDd5iTPYDiUj66jRgtYnyZkcJVRWehKdrrDsNeaYRcabyg3x",
  "key21": "2BvxU61FLEAm4TEwaeqfQyB24TQASyQYVVrEE2SEZTt1NJC76BdWdy9eU5hqJWAXka5xWLwWtUqsZNr1MGBwwfs7",
  "key22": "4CSA4VUZmBSKoChYaxtekBdJJc1Rj5ib1dnvqEBagkQfJ5htEHGVhuHPPCugBcjRoXmsW6W86Mun254T3idfthLR",
  "key23": "3Krv9jPG6vhyehPbfBSgS6A6fETbV44TBt1iuczuNM9fFhV2fP9cMaBB2wDVMNkzjxC3RNkJTvMdehUAJTozTBpJ",
  "key24": "62qkFcqJQH6GeBbx7vTLfb9mKS7vVuajc7PPZGMUQJMZvVASeDHWjMEx7CmRqozLRRwba3UcwnSAx99ganaiPrwB",
  "key25": "2pqLzbYVPCp9AWeCJF9hmfFtfBxFCYDfky17DM2RSzcTPcoCEwwz8LmNmCePwC7WyWhM9gEgGPuNo3ntvobJS2YX",
  "key26": "jisMNQnArZ5JNtgYMtLeWozju9BKqbtzuJTowDALV5XwB88dpYohTtSbSDAor1a8xTapZJio1FNgy7GtNNuputw"
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
