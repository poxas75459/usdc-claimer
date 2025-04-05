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
    "5NEavQXvENT2MKPbsNWMqaiu6AgwuUyxghNyHEwtHeAgnom5FQDyFRtmh94qX55iaR1F5KMSqfGpn7wYdg16v3wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rzZX7WgzpFKqX81R2UkenFvqe4ALtyA2sZ8vrYx56cwhFWtjtKnj1TWzw89NX6C4xRYwUiAeTPceVPqrkF4TkJA",
  "key1": "46dWyh1vG3etPzHfwPa1sGDyzBvSyABKTMLToW7EoqWfnkVHwag88E8G9tr2tiMjYEGbLM8cBq5LZsrMUWgMzJR3",
  "key2": "4paG4bJVqgaP5UnRSxiiNV8CV8oYcxvyDTxxHjfcAc1H7FjLtd8FrWK8rHD22RM2NKoUZMMaL6Ke1uHJCZf3Mqz3",
  "key3": "4emBWP3nf6GieYRFK6cEdnp3kdCn4ShrS9WvyswHY1MpbRX3RwS8emGi64PJk9zYqCq5A2LCvy1kGhVDHyaNGrdM",
  "key4": "4AZxrgfkXwcE6xKsQgf4SyYHZWwRFv9sDBeCGvoNBUr2U9Wug16U6tq9ztonjPKQHS5C2F3YLSoohK3tm25t8MFN",
  "key5": "2B87VrJvb8F5vfn7uApBxUtxNQTicugrvrFQbw5tQUrwK6xREWbKWkYFdzc1WkRAr8WiQpyCobE9zgmweFwdKoM5",
  "key6": "3yo8Q5epFesw94HKVTNpRPL5CNd3Tr4tsUNKGTf4kAB7m636SkU2f7c9KV84j5ajH8eCTmcFP8ZqvQqK7QePp6j7",
  "key7": "u6NP81V5HAEDLHzsnz6tR6sZ6xuTX4TEKJGrZs2qunouKpLCwQM3SicnaA3U2eJXDFiqkG2GXW7RutbdLSmNbgT",
  "key8": "3x98fJGk6vYA2wMVfouGo8YewWmQAsgJVwTbayiZKm1FfjJLQXczhXejFPzpTvpU1XFhT5eDVumb8hxZ66J78cGJ",
  "key9": "4gHty3S4fzW58z8cbitBd26KfstE8pamyVcKxgS4StdvNKrmet6mr7VZBum2yBc6Pq895C9gwibA1Be7cvWEJAog",
  "key10": "42XZ7tXp4Q2Hnc4LbmjaMMWojc7ykQ7fU3HjpuGzG2WVygSgLJwxvRMT6vF6h2p4BYcjSYVg872imqwQ1grXH3VM",
  "key11": "4Y2cKERPUJEJVmUghhB5RMHWMGHU6nGTaX4DS8HDABE6yakPDBj6zyoeerSDYFSxRGTaERiSiYkhoC6SESFrB1i6",
  "key12": "2wCuN48dksQ7prxnpPbGHuUf5dBHKkPCa2giUvBmVNcGNirWdBVVEdmBqDoQMUaUNfFeW5AE1Hw2kk7u8YSqM7Fz",
  "key13": "ti2p2j987Qd3JGD5aepj9wjyTAPB43fRP17RWLLwktoeJApdrByVHU8tm3Jspo1L2mYdw5tuWMbFd77o6fQT1oh",
  "key14": "23Sau3pHYDrdoqtwZDnPE4JHFQDp7xMVuTBD3mspF6zG61W15ytWqmxjEVwtNahJTeHsfREzCbJKXYC1Ew6mV6vE",
  "key15": "4wLQF35moDPFsgkPKHSTgmvtW7vac2VpaYCFokSC6n8HtXkFEqtYJZ2s6VxAGQfKs16mgcZgr6ZFwxQBKHn9rgCx",
  "key16": "5naX5Usm97E4Z9oxYFmAV7qNGrmqpHxd3umK1TwG8WANEXzhukrUu32TJEHMCwuamX8biXmNisHHv97dWdXdFPpB",
  "key17": "b3ERt1XYK12uKtXMJqeDRXHJrh1exJ4N1o4S9jy6vWKLodPXiRHHYFx7yJQrTC8fjG3MdqjRrnMxuFbD2cYaPgj",
  "key18": "4mvbFeUDTDPWexQhq3dnmggpsPst1mknoT1XXR22fNHzhzmZ7xT8ctzxpS7XX93AbU2FxpikmLpQXQ3PavPmZd4E",
  "key19": "ZYCMQBoFNooUeC7e9V2Y5eqqPkzM8Bzh7Eas5S95TR3jRWBmLViL8ZjpfP6MaD9YGMryxwdLh3TUE2sE13XJgGQ",
  "key20": "3sMv5ZCbF1uceJxivs714xPKWCgtUnvjwkcTHAworLWAfR44mZR6biLPqB57h7eraZMK2CoyLpFR1KcGse2z9JWW",
  "key21": "2Wvq2rS4jpDuFhRJvdLDEAgxd1XHUSddKJ3PF9FJmpx5Sd6QZcfWnf1n3v3PSNUsUyoVfMKR1H1yAX6SpuzCfCcR",
  "key22": "2mkPAEVSNakrT2uiS8YRHsMX6dzBSmzCAcTCyw2Tn1qFQh9b85G71b5ym3xa7gVU3a1ELBTavCWx8fYCyKnuToBk",
  "key23": "43YDd2qnTCbjedjBGNfRqm7KHmNnCZoHyuuaPUXBwriyzGKFurbmLGMkqahtrvQ9cKm87XWefzHotbyzgGfZLJ5",
  "key24": "4vRLjQzB58v1gcTZ13RHMmusFbAdPKLfA3UkcxsmiC3q1u6BmfNWHEQHeP3c1q9qVtQyG7dCwxhwuiJfCjVPGiS3",
  "key25": "5QUSeQRt8N5QM4xbfpEViZRpUYNbkqMEcrU2J8TqcMu43TdoCbmLy1kWNAztiPY285DLfyKaGKZd4Av95kAXEpus",
  "key26": "i6RTnN6ckQZG2g4c9JudTbdKKXsvmQj9nqykc4Y5qWhMn5EgKoLuynGwtL82A9ejZgvrtNxHAsrCfF5F5un1Dcm",
  "key27": "374DAvPbPGosizn1QaJFi3vr8hpNL2zYxayqpKkqXgE6FqRSurooQgeUKi8HyDCMY2XYSEYbZ6Pj4pmtWf9zh2Pv"
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
