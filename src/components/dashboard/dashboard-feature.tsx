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
    "2HhP1Ca3LimttJsCc2UBecSjmxQLATauBirQgkgF5T1cMedMTn8YcJdLS1tabWr7v8S5YptJfMMRuJhHYZVWgyW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58TzRrdV9vEPqVio6FNhi94L6fFSB1igzrNKnfgY4hc5JZmP3UrMBq1Jx3oW92MHX9m5QQhATsKrCgf6EkknsTp5",
  "key1": "47KNpUboYkv2uhvgYiXyH2X455xfBE4NHv8ACuJGJC6FAzTFsB2zR88msD5ic6z31XvQLgJDYWgrBYFgZEhkkzDy",
  "key2": "dnAp1ttd9PSMa4VdefKFTvgD41ZqmhTQYqsiCCw9xGYxokML83bz51XS58n9DhB5oGzhkJwgSTdAk56rNqAdUEw",
  "key3": "5rUTj9JGjpG96Rv1RbANBfYSR9zCpkyxEPdacAfP3WnYPFfVhvBX5cebVsvpjJeqqAqKP3y2SLtNc4vFCfjHkWKt",
  "key4": "2rcMAbyH6jFJjttmUmWq6K38BD1iBbo2ydFk5tDC3XgXk9gR7KMMCULFrSpohdWfHQNBeKC21SotNE4xx5BLhpJu",
  "key5": "33yXLV2zFTmeaVbyi2GgyfpH9mzWjQCawAzKHhMEonQ81iwpD245E1VmNtePnWiRLKdjBZgA8ykmNqDfv4Ssv1Jr",
  "key6": "34vBAi8XexYD2GkTe1q2RJXtCEvpNco1ohZWEzKAxizy6DQ5UFKMPWz1rUBJihBagnvkEScoHmBx2b5NbnvrhtwA",
  "key7": "3MYbAra8MgfR2vdujkBGVPzYgtbFVWipDNFCSbEhLajBymUzRyG3fH3tySgMH2A8797H5TPBUs2Gh3oQ1Dy73iM4",
  "key8": "5bhmAPaVbdGths3f8yDpU4i9DfqWuqfJvSKDJQWsa7XcefBgPJ6awZkKR9WUNmXn6w8KRo3tYTa8BzmpdPuxugww",
  "key9": "4qVsEKcATsWzttjV21Bzgb9ravNJbzwe7sbgPJH8xGYMkGwBBVmrkw9DtkGybWQmCCpZkcZC4rK21JkFRgucwZWx",
  "key10": "5L9PpKZ73RwXqNrrfd1RE6rSTQe18xJNix7LATXRQcbbpWvbV3N9it4Vi8mCjJXibcy6kZ6hBxhQGChAboQxLEue",
  "key11": "3AN2YAD8cgYRMn45AnVpZL72VTbdKcs9X8MnWBH6nxfukMohqFqQtQ7fADd1zpkscs3u58fwSG8xTeC9319MWRT9",
  "key12": "5YsaJAtBvNo1A7aCKZspxk6tF6okXBvZTnNvvn2d15R9e6R7e7YyKCXVWPiMf7nhF8vmUGVSJHyyqevJQstcs1Jp",
  "key13": "JFYJ4GJXZxTDHB4UMLPXmxibTo9W2J1YPrg9RAj6Buh25RzoGwYg2bWaHqLDv6yLbb26KodFg4oW1aSB4os4iL4",
  "key14": "37Wdr1uAM3dcD4mSB6Za6oUEwQo8HrRNjLtPiE4WnCyBUpoNDmq64YdbimeiHW32BFueM8ngMmYqPB8QqFKz8gmJ",
  "key15": "4s1wGxHXDS8coeFEic9ZuWuw4zqmDwBem5M8nkTSeQLiS3K2RPHhGn5nkCgMAgnxPaLfvCoVdVsHWKaiezgPNpRm",
  "key16": "3vG54gB2rTtwg6aMaDqXcYrG1m1CwHEbagdZaTKTeHuvuJVY6iiBUoXfxrsjnXRwourSjhco49JmFax4ZaTdHom8",
  "key17": "2oaWYzHBzDTsJ77NhpYUm1dm1DN3euPgaCpHvVdFF83ZC6CCNyxv446VneJeGaqbzC7f3MHMhZoYzLb1hmfjk15K",
  "key18": "5AS2U5d134H5ERxtXEc3J1B8qHNZgKHRsgmuuidbhaQstdii7tvGFzfeWvZvQN66RGFzQWZtQAeJzSR6d79PHRU4",
  "key19": "5NCJ9hKi5zhoWKCPcXSr1RBMELzGYSQyvncYpV94rJDBbFNrLjmCJyJV9d2yGi94LMAryEUNRFrhNcwkCcV3fFzL",
  "key20": "3HuE1Nf6z4vDuopKPtUA5z9u87SeC1Tk7eMhMs6n6wac2uQVWkm9nhCA3fKFVJdkxRWYmDpn35V55fUzmPBUYxuL",
  "key21": "58MmF3knFpNQtwiDmNVP18wUyajGskV6RSXktaEzNZF65Vy95rkgim9k47ApDPQ86tUfFDP7ZDUmKbTezSC242WF",
  "key22": "3SmeYm1yKjyQSC7WxyZJut1TgDe5coiEDbHjwikP7jMrPnoa6nXcJZwqeKhCrvYi881J5wspbC1YUqrRLtY4E2Mg",
  "key23": "4Mpn9AMmRLBcbt7rYnLnZhmhLm9eFddtNZrrs4NCDwtcnBXmUp9iaRQMiE8z5Pp6C94LTH1DC788EgPCpHRnLkz6",
  "key24": "4dDhEdmx9Wa8HwmJGbK9Zwx3bdb7WmPDpSCkPcMbLHozJ1XhHty9sRKnqQhpqfv5Pc2kHisEwKFuWBMW8jJiWnNC",
  "key25": "3L5pw1ewdP9HxhaWecaP4BJFJyPL7pSbeRauYbuNPzpb4KoEjZq4YZLjezk7UEMwL99QTVGTLoJUhokQpN7HuufX"
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
