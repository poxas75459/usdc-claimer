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
    "2beatrtiUhoBQ7TdfFVMNJW8mYRns15hAsrVrVAnxzEa4BL7eBnfHnw2UutNGJjnTM9iCyHK8RzUKrkrxKyRw81N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yXjF4HqiKeK9DGsDpgpTKvcYuyQkDeEzVYaoj64xN7JPW8GGjzT9ALmT6GBwCwisVsy8aepLpBMjY6mX8eSdRG7",
  "key1": "3aPNwPaHQW3sUap2PihVADJ7i8C32pspaUFKJw3JLwBaDkeoafEyyhNPy6nRYkkEG7YW8gMy9DJBZC1cRKpsYpcc",
  "key2": "3kECVdcPeAwre78n2iXfWs4sKdP4yLhBk1LfWmfTSGmxb235hpwZQ4Lgd1h1Enn2hhrYKXYLRBShSuoyckX54myh",
  "key3": "66HgtYFfazQVxUJyqxBkeZpqNMF2s3uHrk7eG7wY7z5Yw1ciY9qP44Vd6gv4kyaDMsZ5CMT37SvZBCzR9kV5VzkE",
  "key4": "4FxGuHm37murSpd2w6S5xRWKCZCWYJRLWiY6mmmhGgfJ9cByQB3kPZJNWRzk5zjxw3UYXgBcFzFbiipuqVBZyw5j",
  "key5": "46JMyn3GVPFivaToVsU1wTQJMm7znsUYF4smi4JKkcLew1sGnaN5fYexfYzNtYNh21THe6WMN8Gr8uzigM2JU242",
  "key6": "5jwsUmBAidR6k6C6swQvf2or8aPMqyLHzWQcrMshtEnzWstTB5RFNWm6znKH9i2orqTGwEPG6sbiukTEERuXswwJ",
  "key7": "5moSEpfcqqTzoHsbaPxpw6C1b5GntHWhpGfpW3s52NfcLUWZRCmGEKRcWeqWHsh7wQaV4GKCv4esZJK1iPvYa6Jh",
  "key8": "4y5bzF857qTGVccWZ6xc6Gr8tZfM74mVyWryxgsXi2iy9g9uug54QNKVCwGwyA4fwMZ5hGLmGF53DyG4cEvkCTF",
  "key9": "5kcbe2pvXxwPDSHxjDviDH3tGVcNTyJGU9pui8FMivFdpdmRATAdAC8xm4XLR7LpEcsGQLqdX6rDeeGg29wee1PL",
  "key10": "3ELsdh5gLZom1BMRkvA8wE1gvpUbuWAyBwiisZQt3vSZLmDGGs3X3CtDZrFD9DbQp9G6EPb4QWpyFgpkqgmHR64q",
  "key11": "5aSXUgxXZrNsTCYXFs1171UbP7XwbXWTKr7boXAQgckzE9V55ZzHWjAVhdAVA15J2bC4tZKSoyZGZHFDTBuPoQ7o",
  "key12": "CR9LAvsPb7qdaZfyrpWttgtLBstijwi7Pq1aogjbnXEbw7DrcwvKdnu5MSTQThmcmkRasusK1sseYnq97jpzSf9",
  "key13": "p2YEc3jerV78P8fbFGtHpjzijtThTxxS66npuniz4LcowjBu2fwsfmFC7F4AbcQUGK2u8CVtMm16YNdUMHmrdCG",
  "key14": "4CqVbhaUYfzyhgco47kSxNWL22AkN97GKQtoM1MCyaVvttM5RExSQjA8J2xRVdKRqdU3tKSovC3mca7PNdZw6tZ9",
  "key15": "2XDNo9gfmWtb6RxomadmVvMHtSg57PE4w3DJTMjDYtfXmmUz9SdjXxTA1W9yoBXNJmpTnAJSpVyPA1ExtoMCcBn5",
  "key16": "2YMYv7oL8R73Cb2DY8DYf1dCerkFqb3PVrdg2nZeWRN786x1DJybhKwudFpuGwDyKLgNQmtPHbhFK2eXas2nWv2Y",
  "key17": "4PJ8k53pH3fQEEWLQ4dsuH1yJGNarA7uQ4eam6HCHGyfGxiYAhXtacXZWMGpXeo3asVx9CzEUzzRazB3JTp44ZZv",
  "key18": "4ya2bA99sEeCpEeJo6ytLYAPDn7u4xs83zW3xxRPe5sUKkYVNTvdCrb768a34ZJ2dvrViuEZ9WK5KstyNSH48idz",
  "key19": "5Rzpj8AUzoECEPVYQxFWznp4KMX8MKexH66tHHfxjRkeGXRMvUXqDgqxBQ6DuBLMmueTMRS9tw3etQMPJ9aiegBy",
  "key20": "4tVGQzARLoMNweiqmB4kjS4aanY7yGJcuafZqehinfs74U1MjNYNQsfgmKHpQsksLWoyxDfLWU5GmtrXNLNmaDJS",
  "key21": "ghUVEJSfYuapsnauhA9p9cU4mMDmZWdVy3PkFvSpUeNsfaHvUdms2aTTESPM8pt2MeBmoLrLJ4LcZbXZMP1nffR",
  "key22": "5u7edebsQXaGQYMjvA49PLF5CTCt3tLvLqVznnm8LzbNnsJJgvBUpxKwuQz6sHLgsSLS9VUNLnUEai1yxnzLs8ei",
  "key23": "mKDKxagfyssBV5DGFzXFFhYKjeQiEEprAiennmqamrdhzXi4Eat1f1WwJ7ocDovZMrJJBABbz6jBpFNkno51Mcj",
  "key24": "47x9zqNyTXRVNLwrw2YSdMDPttB8Z6F1CKbWy11AAjjN7A1hF4K2S2K1PNr5MUHw9PRRwNoCGXoTTgiyQYN9n5U4",
  "key25": "n4RViJ8CLLMxgcL6ghxxhN9iUTmZLTZVzah32fZ2ZvnV6W8XuSNneLBvPEfyua9bqm8dZv6xiBeYigxsqBhfg9S",
  "key26": "YSk3RUYBtgmbEaHJ8PEo1Ah6A3VBtCxdym6fvGrFa2RbGzLwr3nWX52hn3Jrcw7DvzrSzaDa18NTc46pVXRpXwE",
  "key27": "3KVfoDxrQ4PrcETDkcCpAyjYKs3yvvFfwdwM2aNxoRBV3EqKrsbYjKHuTjW6dnfWMDxd4oZ35cq2Q72mgt7RNJbd",
  "key28": "4VZoJgCscjbSgxn3Lb3FUGuVsAQTRn3fCApVwLFAGem4PJPoMAV3uSdPQYhkifPVPTkVroPTfJowGZpfTdN4Eygm",
  "key29": "5arfAqvWUF798PodXAGXEpp5fQZfRhnd5vdoo4w1f22hFZfVR4CTeryfwNLVqgfiyuzQfDQWyUeuEfQ5YWyNmqa",
  "key30": "2TNTrsdk12MFX6Y8tHpUgMv7HfGi1pFKwQHhmbkFoRcexf69aNYj2spPkfzk6apdhzUE1vWg6DumoQbPtRWgWCKn"
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
