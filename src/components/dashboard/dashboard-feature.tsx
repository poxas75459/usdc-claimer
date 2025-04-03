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
    "2hwtXuuSYx98GTd6CyFRf73iM8jdRdev2gyHAxwXLro2Atmz7FX4XD6Hp4R1AcqNo4fpMLhA7GMwp8RGzd2iyXh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gPau5JKgwVn1aVvzaCS29AM3Vz3nWajtUhckHvQPMpJBKsz8612Mvx24DdiabKSNfW3svboBUh8eC3VgyPnkYh3",
  "key1": "4jQ6RaDMpPRWbryqekH2tMuHnVsWigwLnpBNTBdNBRmwqBgazsf214jsnijML4Tp7xtLAct248348VLxUGH5Xgj3",
  "key2": "2nuaXTn8kZHfT8pfyVCjZE87NDURYnGX7BPsxdGdryCPCdgwYeVcJCQ8b7GF9kZHrbe8bYNK56vSibuwTzXQhfcU",
  "key3": "8iFYf752if7z8aQxoTeKpSaR71hwrUHmyUecisj3PhtPW3zmMdAaPgg8NpTvpHJ85WEjwMBm9Lsrnv1YjHJrYmq",
  "key4": "2Y7VDZ3Nuqzfbz47MhmjDNpvGoq5szXyuMyvogVsZUh1kpAx5LapBfbTwdL1G6uCiraWupFDgN7FrnWaZA7z7o5z",
  "key5": "5xSeURe3qnvmFM8Xa3CbPbgfbtubwVXbN2ZxUiqtg2GZuYy7mtuanArZBYegdMCz3jMFeqmHTTEziwpQnbDU5at9",
  "key6": "4ibgTeU1anRnjK13Ej7osGvg75HxM74sNBYQvon3Kg5F27T8d2Q4nLgCJ7Jjz2PjALuMsnDbPvDD5J1NygTzKqxY",
  "key7": "8JQ2VPCUmz7k5YU3UdL1xf8dmvCNL8rNN9uaad28Hyof15rn68Njq8QuWQrvVwqzCNhXRTossAiwQxuNET6mxDv",
  "key8": "2J1CiXjPiyRBAa7u2MrGfVdka6ZkRmdEuJoiCDQV2Tidqrbhmb1QkzH1KRcPskmcsuaiLbi2ii9KmHUtr3nYVRAP",
  "key9": "5cjvSE5TgZJ6fTvn6en5PPtwGSD3edrj3qQNzrS9Z8jWZ9XYW5soJp1Kz3vKyUQTLmJUSjpUV9kUBrWS5VCVPfLb",
  "key10": "4Awss5pbTHRHUiGVC3WPv1bxUvKDDVGS8GqrK6Ab88FApFsq5NkssrX9TyXgfFox6MURSttt1GyByu58YPCff1cU",
  "key11": "42YPTUtDAo5ehoewJ79yiVsHCkauLGZCH3LCSzrwAFCgasxejMQmhydaxUoVGwSoUMPDCRmjF4YB2nVhMKH6WfAc",
  "key12": "5r16pfkffnLrXSxCHjvEwx91FLVeBy9KsRGUXTAeubLNqH42uXoFgb5J7kypmtAGkyqNAUkoVbKbvuDdGYkrJmVV",
  "key13": "2pNqe9pbgbd2kMQf7b67GJXvkftBaxQcD8q7TAkSEy1m4tkjfSV7ViwuNdAtio5Jz6a44UjWEAP3ei5A3chPbZ9Y",
  "key14": "4BYvipPCHnVncTDcfPWSGTgnSSuiS2RZKyPN3eq2E98odfWkd9NsR8mPqYX444Au7yjPheVDmzXuz3vei3MtyMrT",
  "key15": "sEmsQSTfvrpvNJqg2tJvzGAaKHLjHHinweGJg8DrF2WmcJNibc5Va7VQscq5g6DiifRtwowRm9x41aK9kQqvNSy",
  "key16": "3FqT2u1EJk9K6V9Z5SDdi4BgrMC4HfdngsmPsjKZo7BeMu4uy4nhEgQ53LDgBaiVr2p8CAxB7fBSgmtXwP5u3T8n",
  "key17": "2E72MkQxNpurkPEJDPV7N4ZNe94Dh7FcV3LcAZxA9HGhF8zhyzey93cYDmddjbyRaJ3EdC8oBQ7XXtAGCVNU6fSw",
  "key18": "P2UFuK5PF2Mmu8CU5NEK52hw1JaUhuEgqhArVpFV69CPyt62iYpwEAin4SPATSVD2Fj9NfsDyibjP6a9EDF4NHv",
  "key19": "c2DnNkBzfxSj4MpDg3T7H5idwm9Ad8judSu39fhUb13ERLhqQAJdUXV8z9CmofUTNBEmRHyUKEzH9fTyDCnoZ7X",
  "key20": "4n1nVgCBquRGkXRSEPCwimc85GpL5Lmu1QQKbjmBeW5ZZphXGa9tLDasFyttovLizdaPSas2763nep2ScoxYj2fX",
  "key21": "4hpju1aHdTb4zuPg3sohGjkYS2nnAeGGoh8aCV9DAWBbHLAyXNKRTshkE7LkbiQdK5D8kUX5M169TaLc6KTPJZm",
  "key22": "3skfYK4N3Shc4UpKFDdQN4zVKHGtDt4E3qHQ22bGRBEEZAFs38zBgNasKrrRHmgaew4VP9r7TsyLUVmFssNSq3Mq",
  "key23": "57dnaMBgsytDSEg31eQBxvXvfBRrcARb2z3Ki5mBLyuYe9i4KUC32z61WjLtgGoEiagjgbm2qNRwxxBowG4jAM5D",
  "key24": "kt7XbF1zTamjf8o4iAeznxaSNSAXzb2bJcj1oTrv7Qyqmk8MYg7jjMMENxugaze8pGVDzS68kcXhN8CPJLXL444",
  "key25": "2ER8NHjzBdakXv6NdRdgGis3qFVRWmGwGEgxVBGuHZp6FCawpUoWzKYmhmCgvPK6CFt23JciGvcncYqueTdUemXd",
  "key26": "3Znk2xTm4LWFgfLUPSH9PTZiqiYinAQQUdSY1MXz3f9PiLJffJWd9a6TFABvciNxbFsRH1By7oAPgANVyBCoMN54",
  "key27": "WCz5LzkoS7yaS4yZD5LreAwyQxysM8aiucJHcCmpirEGxbp4zisqqkd2EtJbx4y28j2hQZmEmcKxPzR2xwHYmY4",
  "key28": "Svk7gP2egtJ2sZvmMN2bvtNc7S74NUWK8oW65Ar9FNuLcEcCJXKpmJ5NzurvUmza935aoRepFY6vTgwPfSiDybg",
  "key29": "65aK3WuN9qUg2MFfp1ENomNwHVpEBRsaW38WBTaverAmvb9NfyuEkNcAqmADGz4ayhaGj3acDSPEHQHKtC15ZiKy",
  "key30": "5awK5FpUGvQSmwbUy77o3A52nMYA2oLhMaEAumnDGQXp7gReKtQ3dhYgwkt9ygd3jFFSRBeBP7GDDGXHTKb14BEz",
  "key31": "5i6MkvoTRn5CEjS3tkASqfBFP8hiVRTiUxp4pUMLRr7ydXwAd5GSS14YyU51cYp8M2YsX1kmb8vm7RjDiBmbvdqL",
  "key32": "Je799r1mKupFe7K65oWPgx5agC1brdNwtM9WvubY7Kqmiwpzhbu1WbHZNjZbbFC65kXzF56oX8jzcKXsqVXx4kP",
  "key33": "371JD4zT6hmgSMNbgyuSorFGxR7p1FoQgo6fJtGQQot2fkUpgfhd62JUw4aVCasQp2HwDHdTwS7r6jCRw2zFx5Au",
  "key34": "3mijsSjmyWHkY5DmszyMKNxvBA3F8epCgBJRq2ivgWM2hnk2dKpLVYL6m347qgj9KiZrF2LrQfhwwsohC5vEwvJm"
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
