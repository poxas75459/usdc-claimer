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
    "62C8AWRo1cFo7C45s1sKRrC4aQK2J8Map2g3aYpDz8E9SS17A3VvRca7KYnHXzsG3CXQVyjeiGScMhiXAfZzm4L5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wveP51o4T2GADe5qVEL45f5tt1k4Rfdx3BMS9n9vZ5tbGVTkrNvtBAPKtuFTucb1FE9KArQ61rRnZ9PkqJY5faj",
  "key1": "4721mCatVje1pdfiqrpy4EQCtYktKxmhGansREoCu54ApacEP3NGiYcCvMU6LC1x4DX5V2mpnbq9ARUzWF3wTGC7",
  "key2": "2dvhmPqWiH4grXgMF9CcresqysZENoLD7yFrgsLajpnfUJzb5mJVy2Znq1cgw7HRPugQhAfvkarUCBbDK6aTdU6C",
  "key3": "2CLVtcDxRHgivAA4qiy26sKDz6XtgzdSY9Z4AA9hw39QFEAtfwsvaxBtKrjbM7vmS18CY8YKyu4rhQKXq4uaiGcV",
  "key4": "2Fip2qB4Ap8jdwwA3Nf13t471W2KmbuyLv3U4Wk2N143EFFkGQTnYLbVqQcEpmFvP5ZUn9F97KFEMAJXPKqEA7HJ",
  "key5": "4DxzsnbESDRRAFf9HJQp8s7kudChdqMZ5SgQNBgdDpz9Qbt6nEmKJp8g7RbH2kPjqRYUQrEsQ8GfGmeV1bPQW78",
  "key6": "4kifwDrSi3qHnqyjikQwH5RyAvGAKupUwfKyenrfRM2bvT5QB1wsMFoPaQZuZF3c2eWLSGaRpJhaiwh1LHCyDjJ6",
  "key7": "2EfHoLi7y3oQ9cX2R41MiVpEhuwMzMt9FkhC2GhompiTFxWXt79Z25dauPGUnRqhcxKXtYjUrskAw6BGD4sNzoRM",
  "key8": "4n2dkgBNxR8JiwcmUuXSS76Cn4H8ARp3NHCAjAmPQLuhmWgkaZbkJqjqApT2o6CSMe7s4HHksCF8aH9odExex6qi",
  "key9": "3BRZFPcoycDQJXsSg5uNk2fBLAs4KA4h8HDB6nQCC4wpq9hbgr4VwZa2yhYdffvWhiXK3phE9jTfza8a8dsu7i9s",
  "key10": "27wSKamRxMxP58ovbWQzM27FyJCpts7LHmH6ZpFBUEKTggUnnrATNZB265D4eJnhxCdVtpdzK2cq8MyH3weRy54u",
  "key11": "KLk87MQMcsUnWDABtJchCZodjFAqB5JuNHyFU1EotG2A9pEqDJHcfHgsSDYMrNEKTYybRgnp6QYcdo4qgotAnaS",
  "key12": "4Fk3EABgtSCCSXALZNC5PxAjoLvu8sGcEiiL27X1d8t7hxBLJ4115M56NUo2rkN1RgMAEHwveDdCUm2GPyEDPwMa",
  "key13": "3ZALsQfRC6FhkXNR49VCks5S8S8r36ySdXrWMwHwDbLt8FepuvkiYQsAgMzB6aRRR3yiY29YX538Zt2GkEsxgbVY",
  "key14": "tyKhtVuZKpEwbr5nepPdezCoFAuPvRoM4WYfAPHaQHv7rGidUaewpXMKc9Mj5AiDC784W2LL7jqPQdsqA8rjbQE",
  "key15": "4Z3FJRFTuXoUs8VmUvH3c2abvL5hma7BZkRC1a27b6ToXvHaMhBCJi742eRyopejDabvB5x4h7rqYnRE2i6EiQc2",
  "key16": "LrEa2etn8qkpziX96NumMJ2ZeaftgmhCJQbMQ6opyGUSP9RcSJooBaCwFtgLGJ2xVyvScM3tNyAH6Ttx72uCHQu",
  "key17": "BdgXT81gPtiqXgbz7S8GrUdScspx7kAsJrd7hheTxPv4ebD45DxKDFQfJDA1sN7PY64ZAUn8x5ACeF8SxDHjLcT",
  "key18": "4GmKjkNqgEH9C5iGrK6iMAWMZDNCvJYq49fK3JCbDRTboLscbKYSzUhnLtKF68VFLmtjXbAPeuakSjP3AhPBaoyN",
  "key19": "2qeqx3TTLkUNZCzq4g8qmrs23DPsq1QQbikdToZNV8KXY7P9uhts5JZuXo8hvqZnVPQ5VXYq7d4PPno1Rh5gM7tP",
  "key20": "7o4jE4wfnT12dF4iAYdxzyeiRNEy5eYxbEhfpwn2qTpKuDH5FpZmZFrmyM65HArZUrQyfiK52CZeN9zas4yvNbu",
  "key21": "3C3fXhSQELkSAkWYK1H4wCYfxzTgDdKCib6TNPLj9A3v7GGKnfQzXttnao9eP97xFu39EyPE1ytznLY92YkWFMhg",
  "key22": "5wzyxcaPFZyAGXRy4crvnArmwnVi8p26M5eTzy7T9675RTtn1vgFEmZhgYWtKpuyDBWPhSZ4XwRj8Us3eSCcAyJk",
  "key23": "5WwLcmCtYqYSfV7Kj3uoyWDsz47WqyavFe3u3LmyJ39utBLGzRnbtaG6icEqiZ5z4jdgNUKFCEydTmPCwXBrwZhD",
  "key24": "2LwWFJSqh2wzdSXwX6t6bMChzm6m8cADHyJHBs3DKobofEu8RecQBiYLQkuu3GVrhwbHjiQjx9QJkYbgbyZpCjuu"
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
