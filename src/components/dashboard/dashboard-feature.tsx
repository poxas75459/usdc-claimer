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
    "4CHqKp2q6qUWpZLEzfCGQmdvkZqHaAbm6MvbM9D4KX3APp7QdRcMrWX8tcmpT9G3kEYwJnXyQKppw2LAxk4v8yoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33uSRKT2ufNaTXth2jzbELfzwrmc5cfLvsf1pA22ieMAn7D1UfoKSchC4oMvRE3wLbyDpJawyY5t75cn9y3CVfXY",
  "key1": "bqMCjiY6QuZMq7cCzbmYbKB4KnURJSNfxZkrm8nNih8gG6EmtrC4bPmosaeYmMMJam4PX3AHqedwsh1tc6RFYfe",
  "key2": "4QpBBFHJxQzpNJEoCaiaRVqB5p97abMDK5XQHSmPHSK3WF3tEgsaxztoVeZfCoW9VvwMxKMphzCofTkemCj73NdD",
  "key3": "2nKDD6wC47wov4Ay2kZJ8YoP1wUMXqfjv6yidUwDuWPrjLLCHB6rRE6EQb3kidivUGm5u8gbSmw8s21tSfLWn2dA",
  "key4": "4qxrrHoCkgkfAa73ar4HTb8gCcEVxEBfvwgLZNW32uAsESxWkspAfHkrQXJ8ynfGA5rUhjTVAWViCi4MAoVnP2dA",
  "key5": "38oGdxcrjQjSqe2EAoy45dwcsSsMi51HN3jmrUqDKgsEDELprRLZxsWuLnoPMVPQDR32sC3Ay5oLSwk4DW1W6r2k",
  "key6": "3HZb1ou5zC2Vziyb2sRX5VTG55xVdPaeVdUYRNYNRTEzUDLgpn1njNg4n2bmnNq7c8cadiGQhh17S313dSWAUvD5",
  "key7": "31Ka5TwhquTtWxC3G4DVtodBMd6ZEzeV98ntjPUoLTYtGFCqz2iTM3s1g8wEr5YgPQo1bZvVYXPSCprMJhvdsGCJ",
  "key8": "5bFBt8FRPaMyKjP7LJ16N8JRMgwcM4iAF9RUSDQaW6E5kZnr1hKxrfeLaAsvrt9Xb3jRLCeYj66Z6db3DWttrs9x",
  "key9": "397y83uPAsK3Vk58j64fmhTRoZJHHzCEWKCTz8wPj57vecwcaCn1cWAXnbDrLnmyear6pveAVY7Lec3h1uLcMKQ2",
  "key10": "4dKKXDQNkn4zh8pprfFDT7eustf4QDXvVZmLKz6DXRdfJKLjArCaCtPZPvjhsottkGaDLG7HCHkCuLJijmH5H95C",
  "key11": "W3ZwwHcanMYkpGT5RCFEXCPkYaxxWEE8QM8kCtGSmXX5VUZe59ytNjePhFGDA23WMKtUow3tbwFrGGMgHAAfEWa",
  "key12": "TnPWaS6ANPgtN4yTmeJ68gh4hacUDiTxKA367dg3P7AxX8XWYfTgS91K2ssj72Zzg5xjonUrrD36LVbWqdGGv2i",
  "key13": "2ptSnBhwZJxnG8ygEWg9kFNVXptMB1MubQc9ZbhgBDs4ppCsjf6v1R1h73B5RiR7YzdNXFnpZuRLt4gG2trrKCUc",
  "key14": "vTp4pkbv6VmnoA27mmFosfAF2XqmpjNuBczozZuwDSZH37qkfMnUuACumnoQtvauh2NCeZjbZyLyHGEYtH6oezs",
  "key15": "3cssjAFdELV55MpQ5bvTa9LWBBQFvx7DMEGhbJw9EPTA3CGMN1ScfVtBKVZgpAd21pbAxNGznFgY24cw6aHn7MoK",
  "key16": "23J7gKaYYGmAWmuSTAuNaZstbWiKboFozvzsA7mQJ1BtLjD9HLoMJCFahFxshQoujCyQn5NBVChpDtjniyECNSRd",
  "key17": "2wZ9VqUoiS697KeJouyc14RNYDDSANjA4ebchPwkXPP3mWz3BBv7PEAcEkR7ALFtQuDctU6MiqyuPaSkLeQ8FeYB",
  "key18": "nYGZ8qyu7gLL4JTQJS8MJR2qA3txbwKN2LVyoMESxHwHb6cZ2rRxAixvZVhoYHqPxU3D1vtFjYuFmAnb9ELqevJ",
  "key19": "5eKWT5djQk9vX2vFGQGwN21KnmcKXwxoj3u7GbVs8WFVLGmv2HrRMsx5D29fAZgV4Ygum16oRqxzc1pbFzykXrLi",
  "key20": "2He4g82cGdqcEqjhiBKjgZEdgdAK673eBL9bjKiG9pvxSKER9ZZfAvM36zVLdMLatYLe8aMB78TZ8NJk4u56QCCB",
  "key21": "2rkvkAYFouDsHFKdq7NTieAG8cvNkqyBeWcRjEQhfq5ADMTsyfhPWzDXrR59J7pnimA8wqXnHz95xZ9PkkEGC8yA",
  "key22": "3pxHSJqkcc3Bb15sJGGbqZLPpFjbYW6njfGU7LUrN1YyH2Ha5HgHUCEtUogsnpccB5QsPHyDbnqCc3qo6Epi2yrt",
  "key23": "396zJgzzV2PejHrori5vNRZTVicb2XRoW3BRN4HcY6RXKxEWkTYJnpkXi8TobRqMwnYfwwvSRdjWQNnLzt37EJWr",
  "key24": "4QREYha5M13UoDcBZnveVf6WNS2E6D2JbWC73UGRiE2fj1cnmd459pgzJgP5UetkYejeTxkqXeHGaoqMDHjgHoY4",
  "key25": "2SoQfu1tuXxAHGAG81LHXZn3xkExsJ4Dqj7mobS4oVBLTPn6fuRDtYArcbBuF4vp5D2b9kpFZCU6CGpurLqDd1vp",
  "key26": "4qemNj8tVgiRwxnh4xfRyFYgCzBtbN7D9vW91amfc9BicZ6x3nFurCt6LeFTkpFm8iuxMnMfPger7dQ4fXEuzbfy"
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
