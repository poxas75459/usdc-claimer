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
    "4d3tAL4LzT8wJpkYrXPYC9i69hwTr7EShQpGmkA2NYxJBW2M6Q3z47vP5igwZyUvcR5jW8S3raKv8RsuJzDJnmhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LdE6kWL9i7kKhpFTMy5EXTutbcZo1aiMoiPQHdauuce3D6iFToHHBxGaKgSbrfHYZXydRQgGF4htCzYB6qt7hkz",
  "key1": "5XZJvfn7huEQPYxZX9xLCi6xUXTjae36PoMntakehmyMXERWRtf3K3kCvgDQGu5CkCuJ91pszWXVnpQx9Qx6wFJz",
  "key2": "4AuQcMFtFCzWnQ6hxQGVjUiqF5bFSkeaW5P6j845wNy8W7CMfjBezx4xEhx41Wv7QEH6D6SEecMuPqdsHoZ92zJC",
  "key3": "3rEfgZ25gV3owp7QdxBE4BHxXQUMs1gB6xxPEcsQdbPkm8XhkfMrZQyhteXsRvhwaeWEmYKcwr3ejvmWbdRZVqWX",
  "key4": "2ghhM1EtpVTJh44Hq84PwQrDxqraBQ4jRr24WvwBgjpqgZytzr5Gy7BdgsyaA9W96i3KXvtVmZ7wx1KNMtif4tkf",
  "key5": "2KPya3Ziny7avhcyWY4QSpHJuX8CfoV4NAuFoSpMZuMgnb243hoQvRfpksEhQ1Z5P8d4JN8WPey4ZBecthrLNsep",
  "key6": "nmenRpDS6BFdc3Qhtv6GLg523FtkNdzQPgKZkVGr9vePENEgqdRX6RLHD2mnKy3fkuKKrTB59Hz3t8WYqFVmKak",
  "key7": "jm3mUnzR4zv3i2MxGzpPM6twTag1dJnif4npUUfVDnDJJM9bepFRktL7hGaDgtX4XwKT9aUSB4f9X5BLu5SLtX1",
  "key8": "5Lxb1GgSJHJfmM6zE9AHBXxQXostCZvX2FzrH26C1NhWKAxbzU7Mf2hRDrnhD5mc8F5VZtr6Dcuj92v6UCyudyZd",
  "key9": "5MTHZRxcTMZ4Apbk95CrYsmyzgzfRXC7eAR3CNnAi9UzrstL1ckaavqBSo8SMi1wCntaDqHd5PbbfxPY7wRqABi1",
  "key10": "2iAPVqDp4vUwf3HWoRSQma21ZXYcR6TYKGrEpm6vXMVdTSrMyMzRv5N5wNZthLsaCDcxjDvwGdERbMGPisMWs8My",
  "key11": "2Rf3epzqSoQk48ZuyepQnFLAaR2ZiHocGMPoRWjAUDm7n6BKtacD3Y9zCxSAzrREvaEWiHGtpAzr9zuh9fDMUu1R",
  "key12": "34RwECJSECCMwmHn1CgyUzf9uGLDEnbVPqWhETe8HbymuY9ziJbs7JUrJK1ycsqEaKxXR8TmFSw3FZWhFb6Yni9m",
  "key13": "4YTGuFWRTiSNcnB4YrTvxNjJ3EZ1yL7JEwStiWfMBFKrPy5bRa6McuT4BFkeRf6qPV7pi2aZqXWJTP9MFjEkCwKM",
  "key14": "3QGQYjnQhqt4qCik1KKHiRR57dQ3XwBVez6fRVysViDn3Y94gSp686veMw58JYhLTojcj2v8u9dpFZzeq4Z81XQd",
  "key15": "5WSGNn8Fx2qcfmPCaRnwaEopTN8oT693CbBS8VRJnYorH86BXYFatiaEdw5RcxXJTHY3o4SWxWUYy5YijPTwnyNb",
  "key16": "4tafP9QCk5ENc7cEAr7xH1KmCiyFSFPo7PD2zb4FYp5Nhe5k8UVBYvBDRgDJkULtrEiEVEfYHx1xmUZHawoGvLv4",
  "key17": "52KtkYCer8sCAA1DZFoq8dWJe5kH7mwBYjGnssbUqW3KnzrDZcudj9hCWaMvvo97Tax93qVRBEVvMgn6cUZhuXPS",
  "key18": "DPdATYeUTPGyNJcZapYpFG5TvrXXqTpCAwgmCRvM2LqeeLxVmWcif2exgU4A8UBjUJpLfixM85FiPJmWEEc1JkS",
  "key19": "5hUAgtiVnuYngHKBnCV2it2tVzeJCPs5ubrWeU1VK8PecFUMuKZuWcryWrmTassDgKSjPPW78QfPuJ4aMHm5i5QM",
  "key20": "2JTW5jDuwkdMeP3SyAC8NwHRumtyb2HZR6PDjCZdCTAr7Tw5pJUWoHnnVu9pgL9ES5iKHFNgBwucP76w3cWERcrC",
  "key21": "k1Nu1HPDnFcbwxFQqkcRWDYvaRGnSoTDBbSTZ8SeBzzf4orsVBWB9BZ6rpruCVT1hHsERUu5Bc24CYDd8aEVsX1",
  "key22": "24kbDHAXAnMLiMGBN1ye6Az1SMZKvzLbccCqjNTY8BJkNYgU1cLKtgZid3oAzFWuJxyKivv23WQyJf85M9NtJ314",
  "key23": "415fFGfzQtsKaWnycWzuogbJmmetEaf7NTFzNkF6Pz2RySet73Wn1U3gxUXM18Cvn8nyFr8SjnYB3MAbdPfmCD3M",
  "key24": "iLYmncXnjVnYrJw812WshkUqRH11Fdh1W9QQgGQNJ5RxfMgW6AM4Wf7yZkKxqPq6yx8x4GUP5LnCLcjjTickJRa",
  "key25": "2JoEPp6z9PBEQNefDMEUjTipXWxApSwWHzypjTYLH6pSYyskoet9LziBYVRwAuagKA3HvahRafk2L5Ckaf7fvdwL",
  "key26": "36N4zvmWWycX5h4rsysePD8mKSHCm4y4mjQFyRfY187vks2bbtM7neCUk3aYYBFoU9VXQsi4ZBAi4brsufRHfAXr",
  "key27": "5JqWZqd891dHkJ9t91KkPdKZzVeYdtrA3V1sHueBiVTniLP5H1zrTdEJoCnShewhVYJjSnA4MGkAVPUhQgqWZmbb",
  "key28": "5eHDQYGnBQ6YNCU7pG8vxDRLENjNaGuwdaM6XWiBifpB5PKBcxhrXUigDaxKnDXDjJnnyTjjBahmALzDcuL8vkyD",
  "key29": "3UkB5Tr8da1DdoTPvg5cQNHN5aDNzLnPqzNtP4QwQUCPT6p1VzLGa2CkVbk4VEGYnnP8yoXz2JzVKdsezzDJVwLx",
  "key30": "2iGK3LbD2gzj7eAQQ2EtVhjW77mv8WP4ymcDFJnYbus1AYTqaVYzDuST9MC8z3jHhgzTEU9yRdCgEd25EPpC3Htf",
  "key31": "3C9hYZvUCUfFdHiya9LzDkY62DADyHjSdsDMrngTRhJVXnBQ7DkksscNRnrjFTEEvjTM3QsEzHyUCqwX8EnEE4pe",
  "key32": "3eriB1XYLQNCV7oNkSJRGb7hu3CQy1bXpW4b1amXRMsUj9RmFzrAoiRs62obq14k73J1YeVgxgLRebGLp1kTZEC1",
  "key33": "4Jt4xscJL6JVAnFHvqcq9s7taRxFxBxjb4JztNy2qQ8zposY8TE4Cc7aYc9BRnfyMriDmS8PtSaFkqDL4MP4GvDa",
  "key34": "4FKyXKsRyrCvyWfACDRiitFKYZhEBdBfVnX16EoDQPtHYaoNh4CDUkB9hYr5XnjXCKueN4Xfiy2ZQpULvXzYnV6",
  "key35": "3az78Rhh9za1D7k2m6smxJrxaSoUfMhwQDnVVE4ebPjLh1xC8CMNQhubCW8xaW7tE33jCAt513Pv8VzAukSFKLNi",
  "key36": "66DreBVrR1NzPZiMgtF2aR2ZjVjMxzGrvCQGDGhbc5W7WNbVajdU6MK5fyRVPx4a5Eth9Kh7SPbthrjdsiXHMAxE",
  "key37": "4DYP32DAiMjcE4i2ndRzSeu2KxQdHR4ByoALCEoxPSDDTxtabBWuhR8qjjkHGQPePxkzPMjkTSBSgRmwZmP8kRxj",
  "key38": "2PczvhBr9L6y3cijVgoRohYLdwEUjGRgaXTBwTDW36HyhHnLKnoQ77T449UX7c7aq7wPMzU5tZThjfkZWpXBwA6d",
  "key39": "5Xaa8swPveUnrcUBLxdrtu1gE2qCw2HwTRY9TnuP8GJcd1ZLx4FVpXh3ws63txpo7H3mxrnDpXiNmij3ouF2kSCi",
  "key40": "49gT3LQTidc5qV1dSgMTJzdTgzEtjpFpHbyLTCzma8eihrezrNT4PKsFPCvqnjXSFG6KacakzUKhKjgLjeL1UPEV",
  "key41": "4gCazcuzcXBNY5AXPeVA9FF1UYoCr4qgQSrRufrzWT2uQ7pt9c8AKjABGYqyJY1buPNB2nPas6SDwaDpNmtTP6Zi",
  "key42": "YwGzCosHFzJJNkcVG6R5wGin5PAAf6asGC5neJUHBx6PNs4tF5rPD25dVsinvBNs36NAKqqQ7tPhA6BRGsvBTfy",
  "key43": "5mg74PLyPtPuWsDxpN8BcduUgTatKSrZauyfmf1jReGJTPhQSqQ3NQfJt4NPZxdejL6W1JY4hNdqdM1g8gNoQpAj"
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
