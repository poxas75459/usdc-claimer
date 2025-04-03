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
    "BKLyMdiWzUsc7KTRK2Y1CFEo4dGzR4QEdvXXc99wte2VcnBdgvadN7MPW6Aom1c6dYrnzipCx8DXRzb8ASRBbXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pto5yXALsJeq74r3BiWV3hY8vNTGrjhdzNXrmWicjtm9qTaCqiKk1BXtS4sjLAWC3tjnw1UC25zCoe79jG1aoGb",
  "key1": "Ze2dpJmdqy5XJs1VRuwqS1YvfLqMtcULM1Roh1wHzf8dQTyrgxzWdLnZqEVcTsocwSKVDSogfLEoULMvZBsN6Ub",
  "key2": "3LuYVpVGmZSfhsr5wDS2N5sBQTrS3YdxfJxAzfmnsBJraWQoyX4qHzq6s4f2DWQ5Z2K7LDJ2N9FnUt3kRiNWXhkw",
  "key3": "3dtvKsMCHmc7AMFp4CtRYKGHQ576yAUuXJPD8a9f9hg24t4uocV7KeDKc1AYbrJXUYkihn4tav26k25sc4bQFgtj",
  "key4": "34D2jFtbnFWnPDd4X4ZcEetRdHPvTYYSy4npeBwGPrwo85Gg4tsTuqvGv133pEhXpZ1YfBsWu9x7BkhWGnLyVzKS",
  "key5": "2RLe3XXeaXmfYPBMdnYqdy3G1tR3vQ9JTuX7FvTzWkXrZ2FyyWqKG2CPcFDPPpnSaW9K5LtRqBZiYJocXnQD9EgD",
  "key6": "4YGC9RpxSqxb8pEh3sVdLw8t7n5aKUmvmY6PTv9thwWQuVNXbjsKY3jspvv4fK22bgY5qmbvAU6sqCaemmS6Hnpk",
  "key7": "2o7HBr5hNtZHYPGB2ZEpc7TtZMJEzNcBuPHnXrfFEaPbp6iUpTNh1XALervYvij5hu3kLpN3g41KDenf7c3xoQ48",
  "key8": "4aVEqNosfiug4jf7nUHAgcsWfnfqAnrmqUpJoe8twVNjH7jkYrCK9WaPED5Mj9cgjxDV4CC9mFnsxi3ysQctqyRM",
  "key9": "4x8HEt66bA48C3y8P7AjxJCka92nmCGLUkxvTVu7W4HTfSyCpxb4aPRWrSpB5PP4pn4yz9zWaZgTRsqauiZXejhD",
  "key10": "4SaAiJFa1xG54brBU4Yt3poh2V9XnMdCSgKZ8azSYFJBUPVoDvJB6aGrLbku9NCD1soGZchGg2w2aCHpmU61gebL",
  "key11": "KtE57nsuX2WVKf6gU8KVSasBGkQvtku5iotMcabpv1rW37aWWLHm3ToUYrsqTXMJ4HNyHYdBUAA2yHe7ZrQ4qex",
  "key12": "431eW5CpRDWFvPXfSKcx7YMAWf89irkJFJAspPri7DMabbD2BehunKaLVq31U4eVweYcVYmLFUmjk7qQDtuPQHV5",
  "key13": "3DpaJnViKD1oepzZoADJxtArCzfYD1PeqevvUpPJc2RCER2mZTZM8MCTYpUHUxiJKBH6b9ruuMtAYN3AYTY41X4L",
  "key14": "37K8dm7BZBcwGWxzmRZxw3ob755cHXbm9fFnLteJtZkkteJmob1uszHLCctCvZ1PfghxdRQbAhQnuPRCysazZapu",
  "key15": "2FvyxFAR228n6FeYCW2FhstQZpqmHDjDL4X3KmyHMEY3sjUGPbiWBK5V7rnQZnnqP6hxC6dvNUkezKbkM5qm1nyD",
  "key16": "67nSn8m5ewX2hd1QN2sMn2MPtNxYXPUjxi34VXcZnLyZ7oYzwVpnWDzrSsAcN11Cnr1ZLiHCX1WtzW5UhvnGgUuQ",
  "key17": "3FhtidXRNzjMKAHkQ1zdFj2ty2zkz38PYSky9YNTAjwaEjEeF1q4ZUTNoh6c7dSZMweSRYfAxvvzHNP2PCxXYcHE",
  "key18": "4j41TfSokoRaugZq9R1TtpsUN5KuAkNwPwod19jTbk5izQBgHhdyoxsCdS8YQ5ubLkz8UUTm96W6qxSkiracHxqs",
  "key19": "HtCRgzF4VdiJipsSS2BKJ1Whh27oekQ7DepahbLQ3ZB8DB27AMk3zQzGJv5m6VtKJ7qAAcFhsAEMV3FnFmDvkSB",
  "key20": "29xE3f6iH3C7TKGEjC8JH8duwS2jefZKXQdtZcWCp6Yr3Gsaxn9zLtY6XDVCRaHWgoEiG7i1iWytqsVwo1MkfxTL",
  "key21": "1duxTXwZgJVdnWiCSG37nBhYZA9Saj3DjrsvPW2j3sVkEda1zu9NCpYcYXa9ZqVAqz8yEFBVLXexm3JwsduuxER",
  "key22": "pWfgVxQjqAocDmNDR8vdZhJCLnusogyXcdzqRdKijfyq7aaxJbaQSZY3iUUMPfRpadMnSbMm7N4ChqrmB8eUPFi",
  "key23": "3L8yVLgyVqshcbvJTxoutAj1vZxrqvBzrLSbReV6Mthti92ysVxGQqy7gmuZNqAgKh65WCPrgeoqinHs1gxDoSvf",
  "key24": "3RtTSkZU9Q59pnEpTsv2ovCfDtkeTPrNL8moYVgU4xN6px3ijEyMvu3WCkkQToJo31vQS4RE7QUebN6JYodzBty7",
  "key25": "pdaVW9gSa9JPRzfMY5PndVqMXfLVfVrZA9AEpauCKn9bYne6x68xBCVtoKbH84x1KzFHUuhLX3epYjDpPcFheB2",
  "key26": "55WfxHphyRCG4khtZQPGR9DYKdWRb3Ka1dPPmBZZjKhCfLhpr4bKgDVHgZHWz4aMtinmpGe2BqWrygnixtJHwh96",
  "key27": "4q4icziBWW3aizrwVCZXgi2VyPbkfTupH6Uc2k9jW8695XnntnbUfGUWyaHisvW6iCpkkSnhqWPqKq5CeuWbpUqJ"
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
