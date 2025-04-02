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
    "3am9ekdkNmwon8RqtmPQDQwia4momaKfSdqjvUQ7D9ZH263hYwHV3pAjgDDxozLf2uKJLA6FK4ip1sr39xiRPNoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51epX7sAS1HmZpunsnFBzjXPuvTdHui2ykERDbF28mfEdsLW7xHEaDNH4ZzycrPMBbE72PhQoumXnRDaBsmqSUEt",
  "key1": "Ur1WkBvhu8mzbVnBCwWsgxfsqc7DjDZTCXHc9AhfrgNsmwQAByVcFy1dbvUmW5ZzmjMfVgMaEZ2n5wR2bvkWgUz",
  "key2": "cnF5MZL3CTq4QncLTmhMHJ49bShP8UyeZdNJHCbjCqFEDA2YCV4ieGr5L1nMq1x5dumKxcWCDSsW53eUJ5rVtck",
  "key3": "4Q8gb2TKrhdhGuvK7JsQaXEEdTBHGZFchBacqHgmMrjRnieEKNDdc9QAAAebZuGe5Pi9idkzDbfAzEPa5buARtox",
  "key4": "5q5FUT3rjmPuBhfYi1jXNaKSRbyVKmEPqb54o2jRuMcJQGyBDFHAcKCpZUWpamJqHHEnB4HGh3167xmfwsB4UgnF",
  "key5": "4ZEiBqiZR8a5e6Ja3XNU9t4kxbmf8FN3YzgM2UBG7B1TbmaGUSes6YLtYWyCQHzfBZhNrwKzkB3aY6NwT6GUZwum",
  "key6": "2Ajz7XVotDXhcWq91ejXfevazKB4HDz5FVvUfeP6eEjQPWEt41fNPVwZ7YtWz7KJdWqSLGNznWr4sLhMbuVToFsn",
  "key7": "9uuS8exaoBUJkhmJwWgrmVuca9BCDRPBABYuaPLhBebFXcMZhJ4rgcgb5iEHc87PA1K4anL6Eeeo71mAd3xuYjc",
  "key8": "63Tt8DYGMHobeZJ7wgnai3azPYrAL2jCNr7X9BdAr5BQuXu7YNmkds6Yep8kVGse4LE8pU846XQFMNToFaVxhMbU",
  "key9": "2i3VUFemNZqDjsfmV5e7fK8Rycz9WUbg3gGodRBHRGt66LZDnSvAjMcRBFenRsAXwsEonvj4ENGfWkFtdQiKGi21",
  "key10": "2StpWytAwCDJgn9e326vxssj4N8bWV4j3sPDmyzcvz4oNVZFvE8TMSpKhzbb97bcFtHRQy1LL4deFVFJi2ot3f3W",
  "key11": "52XCSrGsdx6RyvpaLcHqwq5oLY6zALmt2hGtwp58jSLcVyFErJEQDJSxpdquVXFzzNAPZmLBaWJDDeUaen2DREY",
  "key12": "rRwGfgASpQZpf5o2FUv4Ht7HxjdX49bLHg7bEUUjDv9D8Za7UuFq1cZugKgzmDKMa9syAPqynejKBJFD8S1kc8i",
  "key13": "3FqoHGyTGW2hM5dTUBbQyayVMnQnm5CuX1H7STqkY9AwS6awyCjb2FzHGxg9cpQWaauvTpxarH1DSvGpj1tmoQte",
  "key14": "3nwndubPkBSJNcsxEvJYz6VJRGXYHGabPxmhDZ6CkbDhVW1swMErBB7DJtFzC9Uex79xubu1mnGm55A2baqRY6ar",
  "key15": "G2g7e5RjWZ8wgsuMK7sFphSi8Crk8RiNP96wCH791EkMFquLsAGpzApAQABX56HGuSRRHEMq37Y91YkL2SZDRTU",
  "key16": "2Qgg3gXyXudoRddp2kmRBPZa6buE39TFQdGaWs5DXavuhA4QZi2b1VeRzQ3yEsTE5Rrjbge9HdR7NrZpHi5iuq8X",
  "key17": "4i9k18MUTERvC1XL5U1GeY4CJvTBaguMHZYbKsRreZQQ35Rrm4jYLBtrjiwgtC7PkBeAFWYkiUP3LeJeSxTs2izx",
  "key18": "5YbQnbZtuYBCTjEqJaBDBGhNTmkN7ht6wH7DuXye1Sg6aYQg1iu6bG1kTWDcqDN8HodS82zKyM7GfXLZDYgicm71",
  "key19": "6ZYFRmaGbBDYnEcCgQBFjswvkzgZ398uCrT7Cfb9C4j2SDVTMGZCXKWZhM8wnyefbsb75eGXNGrVwu7CTHUAaZd",
  "key20": "cHesW6Q6RtYHqnSPq4ToTsiFTDmn7ht254SQq4sXK1ki8RdL7q8nnTRqffPdaAKYPqBu7GKSGa6FeX2qpWkp8kK",
  "key21": "4iC9sq7TjoNKY4iNPTdaUyiowm5PjpmPmEVS2nf7iPoBtPjoj1J3GpgTCJWnoDdQaysYnKp5RGNXqLSZJVPBa5iU",
  "key22": "3CtkgzBLmi57tNqrpu5sPgX79ukQNGJZnuQa6gnZMG21b9LG3XeKUKgzMot7sRzH579xJsjK8c6BoWi3ZkT5HARw",
  "key23": "3sZFtzM5P57CGj9Jc4RwdN9Sb8Ct3k4JqUEF1gg43JWiF8PcNBANNkRAJhwfXovdVp7LFtJW654VcSPUGEe1vnu7",
  "key24": "k8tbHSW5dDa5bZeeV8THF27wfn17KyZ4vzWktXRdZVWhmHo5ywnABaNfbvVdS3SyTn1VJ4Uw3RaMkPUM4nWCZmo",
  "key25": "2xZomcKQmMbuuYqgaiXGEKqzCiHiGeCCnfL9hVjug5Q6ffE411xBsrJjWuDYwUVpCKTzkrJZUfNoy19FfJWjUSbK",
  "key26": "5Fe7KPoLZgEWTrQSrREkN1StdrFvw8mqFxZdawnm3wx6rYEEuiKVBQUuAby6XnMJ4grU6qrhoSR3pD8Pa3X9HHGV",
  "key27": "qCVF9yuSMVDjnC9B1JD6uFdNgABTqwECXPGekkB14pLvRBh46y5GevBXkgxXLvnqdAWxFjPsWmAQXMnsMsjSmMN",
  "key28": "2VXEdJcfh1WRtrMxZfQjfsFrZ5pjCtp6xuownSKi2pxn2YLw393ZoQcodTZauhehR3QQQKqRTgSvEnm7N7akJEPF",
  "key29": "4vBCjgjaJZkRdoj4oPyzUuMHNADBVBbFPygYtX4U4qke3cZ5Btj4rnTZd6rCqJAAMGwp6tf4UeEWHeGLz9fHy9Se",
  "key30": "4jCXgoqaRjRhykPXBNnGP3W7HZ4e1ua1raUFMFdVsXxX68XUEr4itsRcxVExKK4Qy5vSCyH5Sx1dwJEYRM5LrqKh",
  "key31": "2AR8QTBtuj1bZGRrvWjT45GMx5oimr8Fok1RcoqV6SaQ3vwtaAL5C3s4kSwHzUtjeDFHer5jbV2ikNQ8qKi6Hk5b",
  "key32": "5EqLqcsEA2ovVYZGM8jozb1f2mmYsuajjM1fbZqNQjKb9GqDugvjGLrrcugf3J2bYhiNzSu9Z5t5ZXppwBdDC6ap",
  "key33": "4KE6LCGw4cMTVFAXDaN2PxBQjftFHHBAyESSVkFARRKEm6FTJVnZ7Gj44d2wyvQvQXG6JUS9HNDt9ZXxPDG4CoXD",
  "key34": "3Q2FL6y8pG9U7RKDbEUVSv6LpanuxgmD2ED458W2823iKtjuztGw1Bnbu4FpvY5S9ypSyp1L1kWZHqvdJwxSzNxc",
  "key35": "tC92s7XUCyqks4CSwjNknnAPCxF3BTw6rUceN7jApfjxeKZmtr1yHqzAgP1Kydg7x9ke3HjtwQBz1zJrXBTrA2r",
  "key36": "2pXHbvLc7MDMyQv3kSwdQS9gt3rccJWztQkWFzfJRxmMjnZBAu9FAJJBdowHDrNmb4cidoEMaF5iQ9kRTUJcsVfz",
  "key37": "4FzcPsJXHiY3UpwzQ92M7GNG7SZeDof9rhkv5cbM7SyQq2AYhgg3zAZsjPeacAm9oAkRQjP59tfTk6KzzjRNRDc9"
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
