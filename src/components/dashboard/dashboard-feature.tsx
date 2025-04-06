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
    "mmpVQfVUUvg1DvStbbdUEoqFshnddU4k98sbYA8keAW33ocQaZKc3Ue6vKdhcN6cnUrjKUQx4aC19PEufwVfaKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SkH1shFoPruoHr7kjCUFdyWQaJUhH3cbPhgcBHpgCwCMTwmFFaEBeZ1s6EBmYSFJaFyUejwiagjm6TDYFLbXbsh",
  "key1": "2NHEL3sU6bUJPLWxykiUmoUKK6rxdt6b4f9ZsXFb2hJihdqJqYfS92f8JNmrYfdweffmCST9JYVdiMqkaY1b4MEa",
  "key2": "LmKKXFvTgnFV6jmQ5gDFQkXCnrGRFfMU98vcYf3su5LeLBD63EmPKjrduV6Gwxz6KLbUM6qmgfmVLuCURUuuJnj",
  "key3": "Pq9DfiMkUx1BUodaXcbBGCGRncgPdZQk1cjbxWdrhL1Z8KS6soZTH5Cp3ri96jRLgUJiqu3b1GVxK5PPPCKfpmo",
  "key4": "5mKqCnJ4g4QGYKQz8Wn4E3jAZQ3iYJgdHQCjUD98D1Ta1Ch7F5frmR2Kd2o7jnmFwN7oZaQMYW4byjzSFcu924uk",
  "key5": "2Rjv6Jx27xX5VsGEKpy4Un4StQq4rCYBLaQEXZc2m1n8DvFxzxvtagG77mUgwhVDbi9RbZaaXXU2W6cmzakHprJ",
  "key6": "3VMrrGybpcwL417RnV8SYpcowd8PgaDmRKukLS3AYRaeKnGJQ3Rs2V7ac7WUKEiMtpVd7rHWuRAwWD9EaP1sTjGx",
  "key7": "5k9bE2XxfFenaH5C7drL6uqHTVuo1oE9UGM7VmWKpmAg1NSNpd24pzyHBewnu1Z6pudyhAbDZbDV4dBFZmmAPQD3",
  "key8": "2bKHrbdQDNqwbdbSbndGadDPoAexnnGnoM6GYtiQ74MzeDueCMiU58DzLzXaZpdiQ5FuKjco98LsKL6Xqb4ZyZMb",
  "key9": "2ECiVg2E2PUWMqA4abgs4F9tJ5o4gWzJ5oBT4dGDGuRZ92sL1QfomJMr2ikQRzDM18LDfbcSeJKjDgMJbZmghxTM",
  "key10": "3D53EwBTUK2T26SBXU3nSLkumuin1Tk6cyxa1TfrEBMa9AZtcQBjrtKqhSi1VGZZE4aQWZf1KxosQECUA7eNUX69",
  "key11": "5H1W11FBSSyLodT3N1NogpUW4q71qTN5FcteGzCoaK2ea2zpiMF8xaCQ3m8o2g5MwXLHKSx5vkZArGiUbU6xk8Wz",
  "key12": "5TT4qpoeU71TEi9K72bNeQ7LxbidBN7LWxrHZQwAFkDu3Uz1NK3AZAcVeU7L6cL2z8KzTj28hdRMLxoxNigzTxXY",
  "key13": "3BuzD5pNtTCTbbxzCjUayJ7Sujp4AXiFrEg9V9n7ggWBfe7PeSpSrsTFoEyfG99UTnSypFLzVx96RMak4hMLL7nD",
  "key14": "5TNH8eVp7EK1ZL6L5DfQcG43UnXiMDQU27pLenP88zH796oaLEyhrdmH2rLnDf14K6kATZQDCw5Vh8GJbDQHA6dU",
  "key15": "46BuCNyppgnQvFy3JaHcQQeuvyzLwEiMgrkzvbWTXJBPX7jZWVYvkm3oGCeXzuXpTLbY3njDB5BGp1yp4ZC4kDed",
  "key16": "2tdZNjaJDyoRR4fMPfGrKbm5WzrzNaEe3jmN1L5HpSXN3DKsAp3KR6vZUeHcBtY5vShf4w1RYJHoPvs77KAxvTQW",
  "key17": "4rVsdGWJpTN6AfRTsAMiujxZmyMn8tBH9ZWPJjziFv9qqUfZimom1u8bzEkAkSSFyfk67Fq5PqhwLM1Nmq3nKhu4",
  "key18": "4u6pMKuiatyhwnNHSPQC9WeGgPcnfpKtPuspFt38R5v8T7PRKuHcmSwRFx5MjpWpikMJUtJmSzuhhpnnNokUjj1F",
  "key19": "643bMaEwwiFgCCPE9x4njo7Yw6zecQGZUyDCnvoE8GzxBuiW7pCb8WNMT43eHmMvx7BEepEfeH6PdLktXxzSej8E",
  "key20": "4ZWp1eQUVDyqQ15g78ahfibhmKXeHbSaYbmN4QmuY5cRvKLjhAwk5LRncY7Dd5Pa1jMJFezr1tHFbz6pbBXw9jUx",
  "key21": "4Sk1S7zyNoKaxEdMLdxQwva36kiFXups8LbLCCtwncpQZL3YxkXYiEFnE9HhnH2pRbQGEw6tQHJMhWUwPEGnY8UU",
  "key22": "3qG5RQhmXHE2sTBNAqYNV14yLAAQq7o7p1UVSfqUPxamHYUqVXnsVbHEVNRHPj9qYZck3VdXYMV9aUjKoNNzbgWB",
  "key23": "3DEVyY1KAutgonGFwmMjnLdiCaG5Gw2txzkbJgZGejgxCU5b5KauhTTgbhv52U3o1MMvQKyBamJufpd3E6NTeruD",
  "key24": "5bAsZeJCSsLt1uooJpfDoEZfJobVd17o5PQPCtPg1i9wzJ5f675qSLnjgVahRVMC7aS8S3ujCT5nWuYWN1v7Um5F",
  "key25": "3bFiX2ZSNK17sHhyEESGEo1WxuqRc5o4d2vVyh3T9d3A2G1iHwXb4GSEwz3KhX7VnUMAzwSGdFeU5gnCQnsAZxtV",
  "key26": "62FZWciAF6LAGpqkhAas5rzBsUqnwxfEiV6Me9R6n9ESkvhHHbthvLGaGQSpJBDFizHXPVsYTSu8eEGhaRwXgxn5",
  "key27": "4MEFDbH8k3WEdYqtWGnUcQrvX8ADm2FmnSDetDG8QZMbdx8ndJz94ehE6BsdFnHJY76T7bvEtFeUAK4jcqMRy9Lf",
  "key28": "2xsDRsm6zM3XdL3b9wws4Yr9AsLfGhzVahrq4eKMiCvyqL7yt7DGpdbWcRoytS3gN6bEqvLH6rfTanGkCwr9ik4E",
  "key29": "wDBK6HWT4b5g9SxAKr3ULvpt4G4mP8Tc2B8uGS2rgcaaR7pDUsNnhqXnHTR98iLDKBhfUWWX1MoSBbpaMfMnkDF",
  "key30": "2BfjGFhdAM3rkZmRpRKYfZhWj7Vg1MT43qs3ELN6GwFZg8aR2enWKypjZ4ehCGXAkHNKh43GoW6GGpnMgBoBsRHA",
  "key31": "3sed6eTiAT9T4HciQJoxx7pUjT1gwJxVViscn187JR6wBrZ1DztDXpxUujvoREkmw5o2ubUiCXD8eTatXxR5WEVz",
  "key32": "2g7HESKiRZFAX9p5ZRBgJFjkMVpyEy4Agkc4ihjEAxv3SosCZc4KD6CNqkAwcg3SBxSxmSTzPuP19DvpgF54KKMQ",
  "key33": "4EWpP6BVGVuQLR9g9ch729QTN4XrdH8bwXc8xh86VNqeBWUZxFNhzszrwesShhkVwM9TEwYYbSXyB2vPVNWJmfm1",
  "key34": "4oZJosjyijhDMHgnPA3oa1bQVxeCDsP7R6pvCTAVVeM8r2gcB6FcQmV564ixz3vocDShhSPCHtbVGcTWeSrjDDVB",
  "key35": "4D8jm4UV1MDhqY8eaaKeMKJbaBbXsLcUDfJaJfP9DnH9d98DTs63bVKxgYgNWDXVnZhUqLPdhycthds3Es1shzGJ",
  "key36": "ujABMNiw4FKYSszxjQS7owXkfSdnCUMxLmpKgRo6suCscoy1AJ6UhryC8npABVxfWPydFs9PD7r9vAuNyCSCzyh",
  "key37": "66UysdptD2NmU95oNPrLZBVoTd41mwj3BvRRxpV9MFrQTPmEcSqPenBFLr7cLBAYzPDfFaQpv6GCZtvimAtxJgTy",
  "key38": "5P7dgc2fNgW8vzgy7iMXp5i9YvGfdfYZ1ZnKDRteRm6fmeE2sU9KXXsDr4tkHLxd3srdRuFEMph3KpzirdEmtNFC",
  "key39": "2N13Leotu6URNvoxaLmhPZVSdVyJEGM8UANy5bqT5tDjYBFbfpn7skqdE2tpMp1GAr52WXiAhYDqPXRsxfupcuMw"
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
