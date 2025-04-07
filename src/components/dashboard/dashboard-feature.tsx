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
    "34pdFH7yDDpkFroGdX8GERFDwp5pkcb77V9vX3L8LXD2tEDHcLmAMHadQfE7jhJ5qeZZ7LbBSymFrkhsGsbhwp9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AmJEB4A3qA7E3dwa4HRSf2dc3M4gmyxSbnq8mkXvVRuovd6irmEvj9eXnaRV1LwX5W65AAyuvr2BmSZQg6CzD9k",
  "key1": "4YjyQFz5YujipSEvRxREAzpyj32TvAdY6F4SX3fBRsmC3hsYp9vUcnWeA9cAqontDCpmjdecdmBbxnAAcnaaW66i",
  "key2": "5WjEhTqoXv7VKZu9SXaDgVSKQbeq8sW2MNg9EuwQLMwFyzXyft3G4Js7mA5ng6AqwtRFznvpVvJmqREiWKGV4m2x",
  "key3": "CQWvgt7jAhNbcZx5cc6ctWMQnPkqiYHPpE7LvHcGWEJhj3QdGSpMUA1bniMewJThFSJhu6BTzvCqaHsji9iBnZD",
  "key4": "3xmBVjMV38zCf8axFDqCQcMzJ5apSDWcBMXE4RYTJuNFcsFZbkdKgfPSA6funMdXZcBBxFmrs5vybah7nAduPchi",
  "key5": "5NaeZVU6ymAvK35cvqw7vRgxK43YHiXeLJKbNSvNnr3X82J7T1AgrrEkoW7bdPKMjo7bbwhUowSJk2QaRHTZBHVD",
  "key6": "4YGtD2SLdbsjAMnWJrfA9bxvkscGnu45BNfD4iAaxXpk1rAJhaibBN4y2nf7BR7JCXZTDi8qZXiHGzmQxt3GuPKy",
  "key7": "4kxHu5oiHBHwvCiY4EssabStieZQ3m9bagVgvgD7iEpRhu7o9PEdBsQ7F6vyz5bZzNC58JUFu7ypZzkv5gisqwcf",
  "key8": "468n2ktpJiekDofarhYe85nSgQJpojAnAhKMZALjdx7FqYHfk7WNaDwZqoeXmXLPyHc64y1E1g5YxptFR6BpyFUe",
  "key9": "5ZzpELtRNV3guLe1oaNcXWMcnRBcJa7dj3hs73L9mdtYnXaeKoxMz74WmAAkiimYsH19tjS9camcy1kRZroENjDA",
  "key10": "3B46JZR9S2nEQgVEKFQDmgTsGBrrx5xvrgsPdmrvx6jgxYT7TsaAQzr2hdMvfNGEr1TR2ZBfMpoyRcnTwfUuzXtG",
  "key11": "2GnSFuQ3dDWMQZHb6a7gBAzkRBo2zcQPq53LrHduKeQFwpEp22hCA4HS1YRD2sBVw1kBF5ac8uvKzNHZaBRL3TpZ",
  "key12": "2cN6TzC1zLPMA7tsctC36DMwtgKGNyUTgviLRkkUsoeJ38wuAJiLezNtieqtUzZFWiqWBUeGyaRgjgssPeKqBET4",
  "key13": "5fAhdsw5daz7bSxLCKVx4qbrmJwtGSCtCkfmLbhMGu2fehHD8nEvuekVx9dkLJ1bc9WUMsCbCAat93V8QjR9dEgM",
  "key14": "2m1S6wAvoVEhsBrcAuV6hJkwoH3Yiv2ZWYZRj6uJuttk8LhDVHrFmNUcgxLSyxpDk6wstqN64zkhWDXyDD7sdap6",
  "key15": "58a2Vz2neDVivychCwd6RW6yEccjiMvcYWhRZKFmNsg1cXm6jziKfp82Xczo74AiQQA1vzkPw9gwVkyzNRccSfXQ",
  "key16": "2LwZCWoRxLVbCkfSHaY22ABJa7T8UmDWtYx4op8RXiwJcX7y8r9MCVkzCRiS6bEatVAB5sjPdni4Y6SymW1WtXmH",
  "key17": "5UXh4ZDhXCkeCWgzfpqarEQ1a664mB4iuN7t8yBx2vU62MWLPxH8YBzdbeXiYSSQ7eD91Ndgt3gcfDsfNsvZv7Y4",
  "key18": "5yxmdrm1aF9ipN1NBSfmXME5q93vriv6UQmbjE9NpbR4cPW9dUKdJwBBMAVKdobQkqagTJrRc3tjDhzFq8MorTTa",
  "key19": "28JDRHopBJvdR84SJQxRBtBYWAjGiMXkJMZvJEG5HavdPzCoGJrSUWqNT5mdbC9UnQz99u547MJboVwVC5N8g3VR",
  "key20": "Fe9LUCMiPVHCL2vFz8Ub6Gj6qPo1qjeDe7qbJrzewdzZqgFHL1cPAXe2NNDC8eD3rxZJrhNmvyswCRFa2GUstxR",
  "key21": "4JP8Jxv19FbMiMFJbgVTBBCypeisvWNy851ZNSvvCwj46AhNjFZThAvaTmm4gKCBwEdjcyfWpQAPAAyvixJ1zezj",
  "key22": "rQFQoqKiHQrM8EiYJNzSb2VJsMuXWpces8D1hUxEdDnEC5NYTHbQxWrTSW3PXEGUzpYRjRguYMNJ2pny16triGn",
  "key23": "3qVmubYxmTZFgo5QeWRobci9eJGBWfoxTpwk49K729jMen52C6NqAVDMPFMUjCE1s5FntjpqtYRAaujV9P2hY5iF",
  "key24": "4XLPoDwrKgTsXvaP7cYUidpojgeT1EwVojLm9SY1EWwrz8qM2de1fkz2QsdnAncNbNNPnpaMy94ALXeH8YKdx1V6",
  "key25": "3JVoirUCLXFiVxEprNgri49qfggUPj6A3dnLczPpyYpw1WerLwSYJuWE7x649Td8BxQDtbJnbcboHiGuk2e27V6t",
  "key26": "2dJRr1uVY2nj1DJZHuLEiCRxA7xgi9dLBRU7MHCgStZY6QhFNBNAVRqHhNXiQXvAZWZytghKhTjzmdbsoK6LT6xh"
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
