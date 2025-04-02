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
    "4H4F5Wq7cVQxyh5NUWQ2AZky729BkgVgqfJJQKNiPxbN1zjreBe2BNwmwhAwGqZoqC5XdonYEewfLtJ225mBXT7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRtfZ61cNpRPwTdkLT7sXCbdhRK6uaTie4nxDUGmhHaMsQEtvZdzRxNmauvax8mtPUCrSVLgxrjbTUSU2pW3xjF",
  "key1": "32m5gvbAMyV4kMRTB3Ck3FUHWYkVD6Y5vTm7V9iWd9T9WmXSicnmqmCZuU3eN6TSFjuBAZ5frxxDVW5U52sg1YXH",
  "key2": "H3JLxy1E2DYp4k8Ky2mGHGJF3h9YexsC8U6hpnxH86wowu1ddGSB2YQq1CnSnmHnyRMfqxGby5d4MwJHgVpyP7D",
  "key3": "3napMkAWJSnR3ytyW7kNBNphmUT6xyLASPU5CqYgGvBbBbP4bwHCHs8EBDaeeD9inQCVRvqRxgmT6reVKFUhygRk",
  "key4": "4VtZuRy9WWhtKioFZDZojX4pw1QaxYcEvVhAhxaswde21C5JKEBcNB3wKiF2LH57eB8VYiEM3ZEJgQ3ZEmJ4SQZS",
  "key5": "3im6rDNrSTP9EhW4PNJBdztnQBHcsgLs8ux1diz7kWyVaqxQztELcNS3JxoDFB4gU6WYvXxT4dm9ZEhVf3iFAd8r",
  "key6": "5pcoYyBJJnWgtqDZzPLpDYcfpuWs7jN73kZ86nrfz21FVYDxy9bUJqJ9vn4xJwyUaFGrffSBToQCDam1KJEkSRTF",
  "key7": "hG2hg5PBrcqafg6kSma5uvud8kAuPWF2bS4FrQ9xnWYhv33zsfefpGPSWKRqZ8Kp5UoEvahk3q3YE5jj9fgyvZy",
  "key8": "2scRjjKtbsgg4Nf4x1EofZrKjf9fuMZtoviJvcT8uzjVR5zafcQBJbFxKs8P3D63PKkNdXxvt9AfNcb1Xe8ajX9C",
  "key9": "3ovx5AyYKcbiU3MzfPmFzMTsDqSGkjnrhNXAXQPSTwPD6speN51Gamc8kRbw9gnLsYkQTGBToHKUavD17qBcKRrH",
  "key10": "5dbd6BiE7aV5MtrYKetmSHKz5We7GCfcXEw37KX2Hp4rJZqwETy17YrG9Phj8wRjm5yxyYQw8FQh2rKBwTwum82p",
  "key11": "5MBuuttHJo9xGzk4jq7WhqH6qVuf3snUCxxBcxbnRtetwMzNyrzDvWWBphnVK4ZU2RPJchBqS3FL2Kdt3EBShrZt",
  "key12": "3zthHW7csEzkRPFNh5vPfyM7CJXdcsNFUNLzEKkZHJ7SYP6fT3RhkQcppTmbHTdp5eUTEj96GgLBBsDkQBwhjgUm",
  "key13": "2u2vR9HVVA2eD3q7Li8Bg65Cz2CTFb8mLmN4MbCPEeCiaX5DpSDM2EKF5sqVeraasm2y5JEBc7HMTHYmRrruEunE",
  "key14": "s8UjMdqbAxKasQ2mzBraXtvMqqnrXXnqHUEgwXi9pRtSMvGBLmwZtr8vJEATRib32mFzTDJMMgkBV1AKfh2CySp",
  "key15": "HZet5AL3bF3pVhy48vRimaoLi2MypPUSXbBgD7GU3LCRS4YCRusnbGncxMTMYnzJv9xD3LRgE9Qmymji8uS6Qpv",
  "key16": "5ooxRhwA53qmWN4kAmv8ZGCbRt86qiqjWEKg5YZ5EXmsGZXAzcaBoF3yLWfi3sW2eupvTHWKdNzQU9aVWt5Tq9un",
  "key17": "2LEqdC4oCojtm3txpvmffysS99EgAET56gnaNexHvk2k1zaKQAcFtAe1R26VViUbuZgBZcgSYEkaKS2ymHAVGqSJ",
  "key18": "2ZfvZwDuv8GYFbEcEmUYBgodRQxN2f57mjGEePkyXWgocUDnehFTnKvwi3aVND6GfvMQryJqbjEGsMEs2bz3vwKJ",
  "key19": "3Y98jstUjvK52XffrdRMfZq1qbMDX3VhW7ZbzS3zok1NCkv66eMh7zJ36Ba51aTXXkBPUHEZmQ1Z9a2FGmUQxTgc",
  "key20": "49f1bmvQaiPRcDib7a8tFHvWQyRB7oNSa9PbMzSuZFnYr3264hSptNQjWdv4aSruKwQGSd7MbU5ft35ggQBa2hW3",
  "key21": "4D18RxqDcobJZfu3BYZFUZJVNd9eb6cFRKNqEiAWdEbvAQMuJEVffBVyRgJms9Jm56jwnUzUqh6KbXrerTMxhgbN",
  "key22": "29YjkaYC2cCA7c8W5knQgPxw4JhZqpiWJhLX2m6TYoqvo7aM9oBtzf3Soc6GVGKxtgWbyXdByEcyQQgJGAcvSDqf",
  "key23": "2p4jNuYnrqWUdR7cKvPN4FCV51A63UojqTVMNzMnRteCQGG7KRMkp1QPruLn25Rda6dMTKvuGw1MRougeudyoRJt",
  "key24": "8SAynJYDJpqzxV4dniH6nULwkckjAH2RfwbKAEzKTPZXh6qLzjNRc3eoVwzxLh2tRAMxHmF2Le2GpjrMdA38oxs",
  "key25": "fYL7ZKK12R5m5kLbgYJosmjeEQjkivibHUf5Ld8eJu89yFnCnRE7XVxwjnoVKknd6TsjBswvnJBTQWWWWoeCGRG",
  "key26": "2D4YcRKTBvjH6MwnLj6NdBurq8PvsPwpfpRhkF3Q92wEDwDGrLeYARKCrcKdBzUawvj66W3PT86M419XKM6F6fLx",
  "key27": "4atfvrLccdjGB5BEN83HpPAw3q7Ya3TDHn5SM8tu6HP8kft5LNsGdMxZRMayHwwSm2jcMmtUzRw7ogx1vLnLXChy",
  "key28": "5pQT9777SCuoXt4E1ZDXgLQEatgC4SwWLparwBtNqqPk9giK2CBthwutbrdr99Ed1JGbgnunE8iF2B8HozmghtVA",
  "key29": "32xsmHhV7txiPYik4KLfc8Rjxb3gXGTd2RJMmJ9iDUPfoy8KFze8hVzcdo4jUSzDyqMCjg2FWuMPuUpRNHvzP1TQ",
  "key30": "5TNCqcjnJvSmSy8WqkRmWGgKewFGWPTPAHCcVGB6XDpFhyWtjqgDVyjVTeXn2Pj8JzyBXVS1WCkagq7S2Lb48EUU",
  "key31": "5PnHiZoBbtFH71p5Vj6LHj2B2aHyD1XQuuB2PsJFLxyTVKea1qSmLXkMRzjjxQDE4CFGuysMApYXD3LXnMEwTRAa",
  "key32": "4pgAqDeKRq6v32qXw4Gy99uj4sdWYSis2N6BL1xcABQYJQXYv4S4nrpowtnoyWygn7keNu3HiXFkya5SGhRcNiQU",
  "key33": "2TWuidPtJBpJKodRMpz3iaA6FodN4ivjqQ2QhuwW2e9a1XvXZwHntxoSb5QA7W6T3sGvFkVdJV9BB48bCX9Amsa",
  "key34": "4qi1KSUs7Ke51ShFXoWT6H1LASkRGai6SQg5pCe4zDRUC9Fz5hY3Bmp2AmCqYoXnhFZWhjAuJAUjnVRd75fvwhtc",
  "key35": "Fy7MWEfGqFxra1vsB1zcUDgYXyYT9PWD1pqnMHfKJUfedJpm3yQd35htHAUf9BVV6hR2hCV6w1SQFUgtK9WLU9v",
  "key36": "4UcpRroCPH4BtshV9oVZb8nyKR7BsxQmR2VtmayAbNYZNsK5RHVHHxhLcHrcsbYSJ3ZahnVmLNYKq3VkVvGSDAHt",
  "key37": "pgCgbETjzXBQ3SbschS2Yx6iBbQg5Bm4pUVA6WHevu15bbjEta5zjm2L2bkqtazB2Xu67tLfSHFxhNk7VWWPD2b",
  "key38": "4zjKkCMW4kXPmN7nH74UovkJ59wkxMwfWNWyGo5anTQx8SJaSP7gFaUu7aQ87itsnvo3WdMWdWDQqxPbo9sQCBs3",
  "key39": "GuPoUmjabELbBhB2XCQTisBG9y1o4pquyYot6RMi9Co1P6CZ6ow4QtxxjdWKwSgieEWeG4PACAA7s26RFW7JXEt"
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
