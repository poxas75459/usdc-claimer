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
    "ZykXDQ3gTEH8jFYBZfsbU5LBBevfCYwypD87ZKMPNakayigePDsjFn6KCdpnzWfJBCejHsxhM7FknSUD3qi7TFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Fqufc2EvUzijWia7jmsb7UAsWNH7q4t7oKWjV9zyLPd4dumdZ5N6sGYrDcXn7uJHRMs3H1quMEPXxV1gFoGvKL",
  "key1": "2nbztS3UT4zNRnDoYJKFnBJHKo2taXRcdUge2P5dCAncxbHuRqCBAuzE2PsosRrTDve7DvPwbD32ZtRjXFbHjimb",
  "key2": "2o8fsJNMrtMSsyboRC7Ser9kQze1vs1Gicu7E2qdUqFn5kVx9dwf7dszXG1E5xU6ckrmALwGTGau31BKHyRwBhyu",
  "key3": "3GnjfNnRTfjogWkq5ZKi4CG93ncM2SiBYvssMDAagJdiDwq6E8xvmdSbnaf2HwqoDseu3CWRByzaXec8kUBY8Y5P",
  "key4": "5Amppdz5gw4LP88q2Xdjnc988BinPYL7aJ5erQPKZeeMbqJud2BjiRxXcKMiBGxaeifCGGpJHvMAMMtySu79zJco",
  "key5": "2VTZ9DmySven1pKjGVPLpu7Dn1LtUj5JeR8XPxsNgpv3VSwAJWhnSNxaw599xPDr3tt4n6X2RkQsGMsZZ47bEknk",
  "key6": "Lr2CE1CaDfk7uHt3ETPspd9kUzsiYDVMoAmfautRtrWbEAr1EhAL7g6HZMYqiW4KaGEZ4UvhyrFEfGUakwh4AqC",
  "key7": "5yvZvU2q8YN5iqT5MHQTKEnTzGJubPGMbj6qCP4ffj8P81xJX3s8YHvhUZEWsWAYWhJVKdXKrXqKLqSkaYr6gx1S",
  "key8": "7ZYS5EP7v2sjApnCwprJVxAxSduJCSRzTrgcCEBukMBjxfTy5ViAFxvhEM1Jm17fa3hofD7G4it1BEC2CKJYe6y",
  "key9": "5sbw2UTmDTszBCbm3kuNX7KBL1HugmUcMb2KdKZS5R3hfqxmZzHVNYxbXpcf4Vc55d4Zbkcqo4whPbvqsABfYA73",
  "key10": "2KzdPiQ4P2bpKfW6V7vurEK1H3bAgUCRvoQiosxuNGEhxrGZwYJXahmgu59WYpDkcBHPbWUrueGgYnADxkj8ctXq",
  "key11": "2coXAWg6GmDirRWpj5g6LudYXjxaHHVvkfvq6N1TUqVGMg6Mj18eohUUzFi56WoQPTHikc9TC8GxKneYYTKbmvGN",
  "key12": "2XSRdWTPKJ5zY5CZJn7jHLWtSxxYRkVfSq1KospHnJShTJ6sNj3pj4PN9q648GRvYrNu52gPe5CKKTFF7rk7iny",
  "key13": "KJqhnMx9hZSk3hvXhGm56KhXQ4dyRwzNcwnNs8GTykbcUqhZ9rwSunJwZAnyZvQaXnRLTe9uAwdp3KHcs63ztLM",
  "key14": "vsqyKGr9upa9e9N3XG9PyXxQgWra5imvQxGUx1C9DAtttmeoHxDzM5Qt8qEwWh7Cf3n3k8exqWbBLjCxerhpGr6",
  "key15": "5mEBSYUUNG6eMdWPvxF5mtWuqPib7NXCaw81GXycQbBXpjqcFAqEui7tAQ86nBrAo56S9inEUdnGRGDtm1Jof6F8",
  "key16": "4Zdk5mvXdDq7teEH4h4iisbnnN2GiVYSnWmbMLRWhfDMcYjN6FReVfaCE6LFW61gBqpyKWaF9hqeBj6MJF3Kb75",
  "key17": "2vXXrYcwoWRBwEhxka371wSvopi984Mr18cmGLfWkGqisZnLjf4LpftSnthhftJ8D6cSfQJrdqjYCX6BUUXmjA6r",
  "key18": "33GQL2WgXF5hrYU9CXL1Fe99yYHhyVq728ueN2Y8C3dkpJvFJbJcSkBUw1k9aKxotJLWTy5UDpnigZCoBmgzXicv",
  "key19": "5n36wP3UZRm8NKuqpP8A8eFNDPUzebcNZwxpm6SToAkEQ4T4bg1XyseHWuNtQuCTxcSqpNs46iSAfUbmbMkWg2Zv",
  "key20": "4eqD3qEPBuvyzJw7C4dWRpQBRBjTiTTjha2C1zTA47FkQ5rcPwB2gfjSQNfwoKZko3KDrC35WcChYGbYq6HURBWr",
  "key21": "5foLM4fXdxWMNZEEBUCHR3TVastntwqqKY17DnaLgR2heArJXC747A2YQ4jWr8yPVnBFtEp9EbGxbJ9VgQbgnUuZ",
  "key22": "22scr5Q5NDuJM7JZ6LaTtPo6xv3NzTVQw7zvXpNGUyzNQyhm1rfLajjADUvjPHmaEvoY9wXKcPvvwvaWDAqJ2jDR",
  "key23": "5aAcj6WQdCy2brBFAwwtywpcZ8WGeceRaM18YDLsVLtKKHpcmrbmn8nnGpDsYG2LmP4T22jifBo8HpndN4Dy8jNx",
  "key24": "4p6wr3ucxqxcXup81R2iycvZJo1T8MwYjEo8g7JE5DoNcByommetHDS9diuETMPakdgL7yRxctRXKQij4Cyr2oNd",
  "key25": "PzHU6qxC8qoktDwcAySBoxWmpz5rSBLRjViKcJmz9JvtchZFzAXzqFF6vkUoy9oPSBUgitM2GWCaFZTnFA987PQ",
  "key26": "5x6Fi6mgVBMQcmsDaF6o77p5ueY8dcnytyGE6VXa5EqcwaRknhFHW1odQvVAu5EtRTqEyu2VrX71M4b12yEmbXPA",
  "key27": "5pDrfoWQy7tGvAaVwzypcXzoHh1XMxtvT7kJHp4Mk4LCdpdLwD5KK9CfY84DyGgyYa9NEmiwi4DvH9beT2Wkruxv",
  "key28": "4PxiUh7mAu8UGd9Mv71KEqm5z2uq934wed7w2b4rvS7PxxuacuuFa3Ygk1FN1R7xqyx8sJHCesDFRijwvQ4u85Hc",
  "key29": "67eviocffX7y2bNJfWV2kocVaLjT7PDsLJs8NC3mVcpHETi9TgCrGotK4x6sVTysyri1HRMUPnhkpFjNxPAESw4P",
  "key30": "4BCaK6AVY1e9trMViiq4HjtCDWxMpoXn6UezokPEy6sSkEPM9ZmPEz1bEQqqGMbvmf2Xhqfv2AMSXKVoqAMne8Jc"
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
