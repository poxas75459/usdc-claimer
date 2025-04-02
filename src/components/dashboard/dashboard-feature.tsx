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
    "4r1DJYorAZebW6WVHoTB2eikXyLj6YgsvNBhWJZW74Erk3B8CSLiJsayNen5tsdrDwiRcWtKGCtmSszCFyWsXsVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ojt65xfjk27ocxwXxFhrYP6rHRNZLqt9SSxeWBw8exTYUdA76ZEnvSwxSabU2RPAuo3HPf2ZymeyrYia9dLQNdh",
  "key1": "3sLDQBzCvZxwKgL9y1YjdTr5fYqcicsHo24tgnkGDyFV8eD9jg96pDXkaKizuoECCfq3RLMXJ2V6Dq89APwowpHK",
  "key2": "2e4geb3LoHjduLoFxx8RxyQoqbbWLL4TDMNHF3EwpSZXGxyEBuwGNvyXMaPpmjXMC15ZGWCfJScwTdTf4MosavVH",
  "key3": "3NUkrK2KqP9JhGrHoAQr85r6LLHn5aVhjcpRqsJJpSe5yYimnQE7tikttfC1pyE2NcTw81tXG4RVbt3ZrjgDX82M",
  "key4": "4wmreJ4a8hGCn5dEzb2HbB1Ats6zgACLN84dbHRcrnW3vxUgwT8zV1qhwCeanwWeLADLPSPejoKGgTLcqnWZgiJZ",
  "key5": "nYb2DRqx5984JVWRQD7EsNooVJTSxBpTAdKB2BDs85cRMQh4awUQDzsK6o6CFDzzBWHU1JgqpiXc8vffrjVAP5r",
  "key6": "3und5VShHW5SmeSjubKKAMnKaJHCmSdY8732GsxoA9KsUsoC3hndn24sdJU85gdD6Ked86R3iGmgmgw1uSt4WDa2",
  "key7": "5EMBibJXsmR1QnUuBHmW6yhJ8yhQrJhcZorSoTopb5f2oLdnPNKQTQoLsVhSQQUc4xCtf2YyzSJk8QhduZbhCn1z",
  "key8": "3xNRXBgWWwEY58qWFhGoMS4LFNeiEmZEdUEgPTLpGS17xQz33D9KiumZkZHtrpKhLzuLXmsUryNMp1mPEjZtimmF",
  "key9": "4MHrrxmD9joadDouEguo6ujgoTSxvkmCNHUP1XqDdZAxL2UEtZZ18WAYyZD6SDyXQaLGm2YD3kimziq39ZdBhLov",
  "key10": "4hwHDLSmDaeSeVyL4rDZtZ43MVnjM4EYDpL7mNQCiCPRwxf1Wf1MTGRYWwr6AvYDP1TRbzDKoPDzzNLpsdYmWpVC",
  "key11": "3KHjoohT8gwxFw29WXwAc4JriPuS2AfP6N6HV6C61k5N5CBsU9Xx4fuwouCuKtmJT6xhWArRsuJH5D2LxhsyJ4X",
  "key12": "222qpsDVGtQvaZX6hjsvGH7ntQmFaxYDtSMuHdQRbTjb2CGuQzs95nAhfdecD8MFdmfzYcdbfXRJ2yMaDfCJrRNa",
  "key13": "28MvAYf13M67mxCP5GdwqdtsFFN7Zv8N6mSFnuJv8f8ZJb8B1zwzJKrNK3Vu3ZnS9Hk55kJXQeRQb98DibnPRFpD",
  "key14": "4axfULnHjTvNKkvUAFDmmCrLaxUHBwMoQuJRmcaDxB2WM9MeAUoS8ATuiAMLGUwx5RouT3Bj3aGR5TLPm1NmfVnW",
  "key15": "2ddJAiiQKoJDB7z5TDHKDdPSoW9DpkhmCo1JcAmizs2KY2AN3dwkcStsSDJZ9MkZBohhYiXYEiioRAsKztMMBLj3",
  "key16": "58bkHLkra3fbcz7YYJqURLnYFLBG2yb6863h8akPSzg9KJoxQ6sxVYSL9RvkLQjkJC5FmCWsSCLrm7wdcruCQy7j",
  "key17": "3wJCe8xxQbj23vnpakPooMYJTQskdRCgpFvEW2QEVYVy65qExVYFDBLk2rRiwP9Ze38iXT9t69SRdKk1XfCYCG2q",
  "key18": "4Nrb7w6VcTqqEXNU154SKRhverEjkv2277n9KTSiqSjRef3ECiY8r5DE4EAPyiDQPcx7Y8Y8A93zGzi6BELTaA7R",
  "key19": "Kdbk24M8toVR4eiHze6BkVPUadthkr9PUimcybNaivRsSUGj6PL9f6bq24hmdKx5usZi2aujQVr5VM1KzqjUbhC",
  "key20": "5rruisfKvh7iJHpPqjPhntyMc5uPhX1dBRm6RJBYJY3vUGPcJa5wvpUi7NHxXsVdL8JdeRhKsT6GBJAijqWAqvrX",
  "key21": "23VLTZ4nNicN8pZt9sbx6CuKdiA6Gbk45PXEY7vwteemoabQeJQ58Ms64UJHhFqiqrL4TkdQ1fXJoMdL2mpCTiDQ",
  "key22": "kkiVKquLuBQchneHt6xGuRjSPrm7oMfvGQHMPMqZRdvuaoT5yA2CcKXCb4gYhC8U5abjSLnAehjJ3S441YFNK1m",
  "key23": "4Q215AZjLRmqNReWyGxCRuvUhqmapfLrTPrbrmyLtbcAdUhgjQ6eGxKKSwdUQ9pQ3sbTP38ofSgv4zJuSfJcTuNN",
  "key24": "3P31Fiztp1nZQ93t7foVAs5Howihz2JAFDNqHaqfHcdTcgZG9n2YfCwAHiz8geaZ96WzZgoipdZLbK49vzM14V44"
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
