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
    "44r6RjWd31UkPBjbK4FamN81JhGMyaRnHFyX6c76cxgmpJZRywdMT7R5k2tPQPwWqAdu2Ce4nFmiFe2PsYugemyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SxyKMF5EX3jfdHJdL6RwLNWhLsV2zFyZe2UFJT4ak6fdDidU8XPsmamqMkLfkZBWEqtA5utpczaLfNu1vEukCn",
  "key1": "9xxgmz8YLXEWDZPcZhjbhhwvM7cPGxJau64NYbxVDSuwSFCfb5MGvpAH5tNivT5PShVAnZ1kBo4MdU17fZcVPyx",
  "key2": "3fAdtocXDTz7FWfkJ6HEgxh9hcwQN5Rx56EDE3WvosRFknvXZyjdF9ka4B74qeNJxx3gGCwYcadEBZengi5ZVZYG",
  "key3": "TtFZgZ1eVx2sZhqP9RLvqUCU8FsnknPxfCxYLgFFHYzWCXNThPhHchyEMcYCLXZ2spx3krUKps9fMRzjS1DRSMY",
  "key4": "5wkCmR7sTp8na9FnnMEy3kHDb9Qr3DfWsiCKUt76Hk77kHfaSrt1g9B1ucrUJGvkSjLyPLcaUub2MhDpKuVLvTP7",
  "key5": "DfNw6igQeudSzjD5meW9Be4XqfcXo8NGL3yHwcYWrgcrGcWV7fwxLRf6eCLMw3Qq7t3ta7EbnhjNnyX5W2cVBG2",
  "key6": "4PzpAshiH3q6KzfFWxuDaMCQMTd7uN7MHu5hT5Ct6vTxRurp1MmiKac32xCCSvjP7jiGuyziuBexXt6zVhUwV9h9",
  "key7": "DrDj9rtR5TCDgTcoqvZJKwRai4x7Qa19Nys38Y4SAem8iwDBNsQDdx79tqoVT3F9ZTMzZS64rANgVFPvgbe3YCE",
  "key8": "4Cr6CLi7VB4EDHmNTHRwpQZimdQNrw7SuU5RurvZXLTRqoRo1wgmhsPd8e6BHPcfEyANdx2ReS6kMcQaoGi3QX37",
  "key9": "ExSbnH8e2CpdWRXX3RQXACDrHjzBfy7ruzShKBQeWBtXsEj9B1GzT3Ht1NtfdiWuf9ffF19nqaX91gPZyhojYCh",
  "key10": "3RHBohsLTvpXHLz7FeWzgfRMgdCAQV18KkLE4yoaGRxCeifuZwdKjByQA7hj1ZrT3bneqarFKHPrCeiCBcUpcGy6",
  "key11": "4zmpefkKDuz4uMyhG9CfmXoB4FKiUrGKymCYiBN7m9eUbdrRyntuALomt5hFB6EgCGxWWQ3oRshc8wPgg5kmWK2U",
  "key12": "23Qq4qddLbZfo2igriEF9CjuDBy1MBXZKbRMYxcAdSugXT52uAw2GhBgATwEU1Gz7LXxA3t23jDjHNCpfFMjoCmn",
  "key13": "5VfVba4WzThUnKM98jh1jzcJMrUKYy4GN1v55j7HQdCrkK6TvnguuBYZw4U9g4WhyoN8do4NySnvBroMYNauEBhX",
  "key14": "2xVpQZxdZcjSXmeRf4NteXgxxg6v3edZ8tdUmN2LB91VvGE5KKBWAMAVe8gJgWJqgALXoMYFsmvZkTARZzmvpPTi",
  "key15": "3yEFi1Jy3g9i477C2qL6D3hKgATWcrbyBcbA8d2iZX2xpmjm8RocXHeAJGrLq7RXyvGGPsoBbJUx7Q5mJb6hHbhC",
  "key16": "2hP6WNCe8fESutpMRa7c1jciGVJy9eyq4fXvwDEZWQpfQD5MwQhYJQnyf2StUTgaQVntQmWK3xsjroXje5Yc4Ysx",
  "key17": "5xUVj4uRRURrvFofHYmq98CENoLJg5LETd9xa1aqfZNecu2Qdf9hdKSxYvw3sArPJqPowZCnHdk7wEumNTDFkXEw",
  "key18": "29H3w4Hz4PLgamTQav5y9wqh1HTFkjqmVwf8AeeT7V9ZLnmKhcgbThfkkvtkakHK8VoHvNh9VkpUZGAjuoZLHWFj",
  "key19": "4vrTDgF3FDvK3XaF6yiyXo9F7qmWdUfgoQugtKLnUDSje4YW6XksX98Zr2yueKmYBdBuieZVcNTUDkuGggQavbsA",
  "key20": "4yXDbCEDrtWokHedyJj2mGpe9XhcFAGz6mAFWzQ7Mbg5i2Eso5L7MLCotkb3UhrZkHgdFVYDLAdGobNpLtbmfiZm",
  "key21": "5yaTGo4q3LCvK7aSEyp7aycZoF9rJWAkGPX81DmUjegxH83ipdwGNR4k3TP1hMduihBxuUuwfgFW2wcGcpXBfy1p",
  "key22": "5RoojC4kzYQc1WNEC4WKeQpAqtAXgX5sGnv1LxSXJLqbnPWhkscCqPumx7APYcGVej2FEL3fN4zVeJU8EsbTSPvs",
  "key23": "5BNc4ptPTXTQcuzvVJQ4kVxxbDMVuJVQunjvmkbXGwZvnuBkQRqcbyPZ2c9XHsYQ2tHESagJvuQBaYMNsnnexL7k",
  "key24": "4yNQNsqrFBcVvNoKWwetnZ1aEEhJtEqDpj5b99jHxfG4p2JB6csXqX46vp6BUZexYCtS22eFcD1ZavMScYprWENW",
  "key25": "4doHuEjLePb9uctdzpDWf4SbvXG6QznvHT3AXZaeFX4d8S76HzqXagHkvvocyDZEHBJJDH8L4yFyeK79qG7siXep"
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
