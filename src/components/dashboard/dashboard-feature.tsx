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
    "4dsLujwkSpk2ErZABVnddALEWvSfePXSRirK5ACyeoRog7vYZTqgt4S7BBzNCYomEfHZhDNmimjGVhRjpyzDL6i7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cDLu685T9tPutwF1VzYmzxufaYig16JyDZiwj7mN4Jn8yBk9QReVsfMg8xgM4M9X3iwQSBzW4x5xVZ4tAsXUPLe",
  "key1": "vwmP97pLG9ahKyJDK2aM6kmF3RHEYYVVeSnkadKWo6JzPsVwEpSLLwA9hX6L7BzsWgdtcPFs6HoFaZBQJf3ersA",
  "key2": "3CyyT9zbZARLiqDKsyu76zj9YhR4Kr5xJPH4XhzgiWGY14LcwarD7GeAbVg9EZjRHXDFTjg9x9E61sko8pgdybuB",
  "key3": "677ooCd8ygNzDWogm5bjcj8X5zVXXSWBg1RE5ruFQGJ8enR7b2TaHK8hqAduQXsn8YjkpV36eDDiYdxzD54JyAPd",
  "key4": "42KFVvZ15QzRdaz2h8KxYpFxMRGMT1X9C9NmNYg49Q5gHhLkUhn37qYJtedbuaW3u2f4Xj9HbNERCxUqUuKhzBk3",
  "key5": "4pAFMNrWeqLBGh9XUcGh4rVUQmRmikXQySqSuCqG4U1CBK73DK7accGP3B8AAuMsAv6dmHXsMXMt5zu2GkuJombg",
  "key6": "5rus6iUW8FLmFYi7S6QtSoaXZYc5rSfkKW2aR6ftd95Q9pfpDyDWgW9ihkqGnmzsW8ivGz8tvGQ8foQgXHQqs8cL",
  "key7": "4HBmpcJx6F8WCpG5rqj1cGiVZdvUvHaTBK8BmCFAiqnfbZqfEtfASuNrpSfz7ceEg2udbfzd2E7kGG45BYrPWiJq",
  "key8": "23SbBCazSFk2sWCEL5Fs39vJncR3kcfbdLp7KgvJw5CGtZQzuafL8YUTWhZ5FA1p7FEbAuRjLr5Aqyr9LWH7j222",
  "key9": "2sy8GRrPoRPh9B6SbYqdDj8RM5kSoLJkSjapDUPUj9M5Ju53FP2Gv1HNuJgS85dc7CombzhKccK9xujVytza9Nra",
  "key10": "42Q3oD7xBbsq52f6qipwMCXED2TKCrwW9zLGmRuakyzJj4WfS8jFoc6GHgDKhuUtkbgWRuhSX9qqMxDT3Cfj2VKL",
  "key11": "5p8cV74Ddt7mVd8itDTJQWmhD6K7gv4YdCvpPzf9RcgiCEC28AYDBUmGu9vpVTcEfJAYhFSxtpvgFMRz2mNv8Vda",
  "key12": "3aMHS3dFj4U1DL4M9qLbgixu8gBkAc9q19yAaqRcibyeTn291B1a7YYpf7C2fEEdCpkqDfoAUqVQ5GnVS73xMbAG",
  "key13": "CuQ1g2kRd2f7gPaCRodPA35rAPAyKrKedwRuCrpNPUkFLprcFhnCFHfuoYyzA8DfdzpCwvevVbyrtYnrTG215m2",
  "key14": "6n9WGgMK6VcJu73YGgjgzAcHKeqb3J2RyQryKdR6mHoEtc8B1oj75fUWg32oENBCu4Zmvov4t8VFZge6xZbNevP",
  "key15": "3tAJv1kuJNn3TvEL61D948KsoSgNmAPAtfRSSZGw82G4xV83osjdX51HMVxipez1h4Vpu26yENFWStjDTx2LV81B",
  "key16": "5hpEemadq51YCtZgxHUzuCD7bEA4dxAYMdBembLaHd3XnkmB7ypRU8phYKQFfwWNuGNK2bogN7uSU7dfnRwXobLj",
  "key17": "2xN2963RXH2C2K7PyzSBK35ExkYX5P3YQf9MsVkDRerKdxTdreUcjTuYpNCCe95tdEsgPVcBSJjy5jHVgvLdvGGD",
  "key18": "2wKdseKreaxDUnuWFsQPFf4gxCkzWKLtnSyTwVFs6G1dqWsec9s6ueQNkNCwcpwY9gNtBsdmKVydvsiZSaVGUGHH",
  "key19": "29Pjbu7Acd5yJwjLj8bxhjYtpk1JiPdWUrkdNerUrGTU4cMhvDLhDjhqEcFDyr1ausRhbJphuCU73spTDe1JDry3",
  "key20": "3jUyhLEkFskjGSXNcbK5KmE711pRDVPFEngXYuNX3kNvZKHoayFg1JG8uRa4fRnBgZi4bKPG1ardTNhkrUHU2afe",
  "key21": "5e9sD2vcp4dwnwQJVYC4qLynsGjqwriy2VP75mscHvgTiXaDzGTubjxMHqeeFf2FoXmDsXixiHw52ZxjvW5XRX7o",
  "key22": "5Ma4tew3fcwRpEUPqX4qJKgYe8ArsEYRtK6rHXvfPFKTUkbvsji3e7VdnDwnZdLMkti4TA1fV5jYsLFx29kJytKa",
  "key23": "4Ydz7XYnzGedgtv4Y7wxnaxDi9qMfAPrEYiS7uobBGdw8FSnG7Vx2VzPXR4cYk6xSj6SdDzrKfC7unHbK2QGc9wj",
  "key24": "2opK6Sy9UG7BFeUeGKy8FjEosBE8MyrQr13qStiW333b2b2HuVMHMxYFXEHkbemMZ9i3DCWJkaYqY8XSneYGJ7Ms",
  "key25": "eKaWCKgkufrcRwzJ8K57cggLfcrkGs4vUsny5tYUM5tCNapN1mjfBqfrscPFKuXL4KAWNW3u4au4Em7KqHacpUn",
  "key26": "4f4CTy223WdXkpAhAYGc7qYKgGa4pi1pAEv55nd8dEgZpxYXbhJ8g8Pd6j25w7GKvgDUjhuUPCLhQEq2anwz2dww",
  "key27": "5MdbMrn6wzyPaGYdjAKiyS1FAxcVLio4cpPEnCBC2TPswFnC13e2rUgca63MysTThuzcpsLdomN9xEjDaDZ72VBs",
  "key28": "v93aJPtUNTiqQvvA3mZp6YwuxbrY2xJC4RwVeDbx8y8mCwRNQFxH7b7VHwGY68Qx7LuLdQi3XySWzb65Aif69c2",
  "key29": "Vpz7TcS5ntuNHqYPpvwT4JmEFzWHssYJAoCLcn14TzQ7WwVfuABeL8hyi2f7fqcuqJtCoEDKBDdoHMoWbRegoYR",
  "key30": "3Ya11a6qsPjmwQA9NpcdaeacAivjtbDnxu6frWkxkP3PHKvbdK7omTadTFbBNYT21B4Gb9PQ1FSiQzQSQwrCpbQ5",
  "key31": "2ba6LAKEk3K5XBm3mfkhuCZmZMDQfid5fvYpo5166QdRKh2bR67R6mocoAqxwaUDYhcDhZX7g7p7bWCY1HhFmx5h",
  "key32": "5AtuWAPSjdqKdJixcGDLosiBLn1DyCP4jMXWDnqPChu2BrYEQASGGV4we3XVJNAnaD9ZoeJ87FNtq4WrUza8jagG",
  "key33": "5axTctydLecurJY8CV1sfyJwTbp5x8UwWchRXFxTrcLCZusetic8kJPMWxTkBMx3PWbMVXovyYCe2unwxvpoTYmx",
  "key34": "2vbqESLAqwLBE34CvoXjhUCwLKK6biwcTKM8xbmMbFgsy8KegdsVbV4PMrdWKML1rg83cEg5HbdtB3ibca8zcfvp",
  "key35": "5Rct8PeMELpA7kR2V453TVQNSGwTcUEaizKjaWGFUApbKLN6yg7so6svWGnAXWetfJ2o4TcUMj8XMpUizBkjQGkM",
  "key36": "sPMhYDZVduFirE31ehF7AWAnimuMHByXdEvbvvCx8oJuTtfHQHAyo6nHBqAX6GVbTZ5igsyFyt3peaCmwi15TjC",
  "key37": "5zeneXJ7Ch8Q1hGdH2CxdwSJp1c8XFWWEvrxp2hXgrman3pVpaE8pFXLRr13Kqbk4eshf2VgRyPfP7oVEiD1FAXM"
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
