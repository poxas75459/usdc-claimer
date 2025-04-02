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
    "36CjRCNpFjTKrfJQnQFA2LsT6tBXsR6imABzSsFoHiPdo7nQPcEoxbtLgT6VuoAz8ktzoecu63RtwRDr4GK7ZJbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23YZ8w2RfX4r1KvtXdkXnAvaxV48JSEMd1yQcduVJCd7D1CdPxnxG1jp7ac6Xa9LxKtsQaMDMND7MWKKcUNLNg2F",
  "key1": "4TiV5DYcbR9f6htzNgJZb4bZg6Gwx3eJNq1kMZMh145AFVHLxZaozdJbze1gYBvfMcTXtpav4HLChUNeQSEHzdsm",
  "key2": "2nqjzt6yfHzhuGQ1fzocoYehnrsfZHX2GwDmhJH71Mkz7qseRvH3YxbTPBoH55GeAqxV3SJScT3Cdm4nNJFX8Z15",
  "key3": "32kiyck8srvNDLqBS64e2ggkVxbY3byQwA4vc8ARWjV5zKqtpPhxDKnkJ3nj4WgLuxnHb8KFbdzYDH4hNm1aWMsu",
  "key4": "wGaEu2tc6ufyZmNqnz7PVLHWV67zZZVxTDT61VmCE7UaCTVk1Qd2pdaCiueiQN8Uo8QwKE5wvay2X4kTb4v9Cw4",
  "key5": "f4rPJzfSNpHo9shjKeNeoPLvmPYaFpBSaXDfUjR4fZ5bkRmrX48XbAm1HFXM5sX2tuyrP9enBTuZfmXMjxcJwvx",
  "key6": "5ikkehmj9qSyWbsPFWPSpMxujM1gmQZ7D5TXK9rvR9kCMacbWKxCmb8qfjeuhfT1BtsfEj6rKdjytEy9ZTyh9dp9",
  "key7": "5WTPsXVbSD6CnyhwoLhvGTrLS2d2PvuZyaXpbFmd8HpwTxWWwAAk9oLXajd517aBnA4fqvko3nvW7LNf7B71eGmB",
  "key8": "MWrGB3nY1zMDXYToWnaaQNquH6do8MeSSYUFxN5F3boDwka5rWGxDSJjZsHsv6hgF8Ux9XKxQCFLi8rNNcNb4h3",
  "key9": "5oVTJpU4UBXF9fM7mq5Hatb7Fw38R5qKEuGCmpH2zwwjbY3KsQ6tP5swDdB8rknMwcL51AcPueuSAV2z8fekQR5o",
  "key10": "3BL5TYsUXH1nmTdvpSxErbSJoKsWhcGHsyzU9khti61mUv7dWy7aDjkD3D2sV2Xw8bSoyJBAT6EbUCDhYmLkHHjD",
  "key11": "62nuAMrzNWBGxqgNU1uMGAPYX3DFvX9tcFGeELxZjAheE9VjFBRtAP5bJtSTe79Xu9ehroJ5skkE9PeWhkQmyaN",
  "key12": "3vLMzmwPGNFTdfYeoCUkiH3CrRewnX7FZ8YxLeAGzXMwzKGA9zn6W4zgCW7iGJvbTKsEud6BU9kqNEqPstvjPEAG",
  "key13": "3Sni8LcWcpL1NfX4yqTgsDQWLAiz6pAgFrj4XN7S16SHW7S1JxRys5NJK8Cre17boJE8xyiXGnLeYQrJksCGQBTx",
  "key14": "5SiWiYcKnVfSj1Y82CQ9eiuScMYMUsysVRoLXC2vWow8V7ZU2E4LMKvFNYLo1ksQ7WEBKoC9H6xCtEWNTYRyJKjQ",
  "key15": "36JmFxRwk5tqD8zcfvxZjWffm2qpyAXPMefkw8WMSMjYcM64BEbJRSKTQSa6irg5kgS1S6GEfaT4NssABW9m1Tke",
  "key16": "3yGa3XVCPr213TQ3DrjKwdCJywgfDiin2yHFA3qD8ZuK73PV7wMFEUNuSn3AHxvNH3B6NP4sQb9X1tM8H3B4Xda",
  "key17": "2bQLxLYezy6yWFh3muTdPVNWJQTxLD5t8kYBMeYeiLneZXZw2ZTm5vMCXtqicc7kXz4jvY9SCUXpwRMehxCRcxZ4",
  "key18": "3TjFjLVPxmu4URbXyx8ecNngxiBeSmTfrNu3mdprPXhQM2NHtcX9RtZEhEab4Q55WyVVdwhf1bnmcyvoxNbabUuw",
  "key19": "49cSeAofi536B1zf5a8nk4owzsjMi8Q6xBhcg5dtQE4oJtsLmyF6N3WN45uksN3MzvmmVNVaLKivwnNQ5m1nttxA",
  "key20": "5rMTe9n99kGGYKXhAGzTSMzzzSz3xdBZqcVxzf4viy1tcnkUr8JYaqWfH9NufeDT57a6yCdeSTgQgXkPcVykabU4",
  "key21": "azm44RKymvYTNHu9Q88rxzMZf4DtjAkCn9LVURNCUGtwKb8gLhkhKvxCt61pt1iA7dtqFXqLv93G1GUApVEX9BJ",
  "key22": "4K4EqYEBicxBT9iSreRPLr6pxKha76NMrZq5EtWscKCtZTdoYYpNAycnBoSfwyxrCcouvLz6R4xKh4jZe96ZHi74",
  "key23": "AyqjjXS6CJuodbv2XZuomHoqnppwwCmqRq88bEvTamxm2XaHovdjeW7nrJLNNWHtuGdmpth69HrzpgW22zsp2Kb",
  "key24": "2bdKUep3dvRJwgrTfRbfuBtacz24i6skza14TcAtyoMpQfG4aWbNCUfhNKsrfDkQ14jX13Q6hSNbJ7FHp3GSyDuk",
  "key25": "3p3PLa2fcwepJuds1fpRvR2NJaxhmrtSeRn4zesGwjY56KEwKELCpdiBJfXJfW1moY5W79YNEAsmwRqTNgQaZjPw",
  "key26": "48YdEWKNtJHADcyvezMVNpU8chHdAAiGizKjR4uEzoqpJksYYSP4YFa5RvmegnJ7mnpNuQ9FZ8UGNpCnruDNxLZW",
  "key27": "5ti7kKKgSWoSaV54YFSH3aaDv3PrCSDEJsMruGVXLr9SFfixk2apnWZL8EUioQNzaQLETn2wVRALByzgu4un1A6t",
  "key28": "5WbJkbkmHPG7anTBDf35Pd1tytKYnv7oqPE5HdfaXnXT9HRpHWkBMHBhbmYNUh8z3VYsDnQUXYsbcuVU39nFW1nY",
  "key29": "9SGQheyeSF6d81o5WnnZbrvBmXkJPz25aK38WnRtuaVkGHEishFmPjoaovvPzdGJBTuiW8enjAEgBVzjDnAuidL"
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
