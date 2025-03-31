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
    "2wezFshpM7ZuzPJEmd7y8KYc6qebQA5UAJWQ6r7zs4becW8Q5zvRQ1qNui5r3ShSLM9c6st5w3eA8HwfkUZFkfBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ezxkqT8qmq4fLsvfnrxnHyqB8GPNFECvoYgFQjkuEfrUvuCrACtsvPiT3eMqGZQefHnpotZjrNuZmRUxC9fLsDM",
  "key1": "4KojaNQsm1axXofwcJcxGW6YAtriroupZYS2r74jHUgXXb8cV6Mmt4HrX3NZTPEZsZaX6yNh2S8ifxYTuHo4VkPM",
  "key2": "3NhSQojSaRwTRt49SUzCxotmgKpgMLrMug7iLEz64p6Gjcq6kqX12xJzd69Hc6z75LAZfzDDPey44wDgxSxUtYhp",
  "key3": "MYAAn64YYaevT9z9NoyLfPpriVsMJwsAjMmKyCDpg4ex2GnLTWggdo1woTVtBQujTa45NNoUKGbyBLBcNXQe3u1",
  "key4": "3hwxKJ4CBkmvjHZ2ABuTg2pSSKWHkuW5RBoG4EoeK3tfHWN1StMuo1bDRLX776wi517C3AHJiw5bVFfmWxkQMEoR",
  "key5": "2rrZzsTjcMA3N18PogiHz2tsZq4Nyu8JqvDtsuA9Su4bzgPTJQMPbaeKZsiq4twv2LkS2Z5DhgTAgjqPFQgqA7ja",
  "key6": "5rUQtAi8KaDhxunTdVobK86847aPiSWEppK8KnsgL1BV6Aj3jDbfnvH4Nu5GqXBNAKRLFVh86gLS3s5EfPUCzni1",
  "key7": "64WgVRQ3DfESH7Kvv2uBSayj1SZjFbsVQyhecAfnCWEPtc8JduPRpV7xb28vNWXAxWXfTWT1Lq42KmZoro3XQbQT",
  "key8": "2J64z6oSwRyFVuQ9JDDrmPvT2RJiG9ZqVxESaGQKDdusPFw5m42uhEyHzhgnGuxxwdo9tZLwcjfmwHuDUoTZxx2m",
  "key9": "4e7pxrXobLHGCLRJWEefrLQFLLPyxR4itJZcnzcf84rNpeDCTB7PW33HU67tZCFXFMpTZLudb4Fum7wTvLThdVBX",
  "key10": "EYiBSsQtcixBtNmv9D64vBddcVaPKBa6ZDkV1yBtxYSSoSyZtKuAWgyHRdbdHz9DYxKWafELWYBUFzA54nMa6mP",
  "key11": "3pqAX2nc8bNCiiEv2D6NjiRZTYmwRRTMVGYFi3FvR2pTyg7jywdTubS71AfSdmr9nTHW9u6d7U4NiXKy23YKUTLR",
  "key12": "z8BuxCYMkXsduV7qEhGmhnbdJXBxWKxHF2Chd33vCu9rQ5vmDDheQMrUYngsnTPm2V1w5spbbgwFNAoTrzvWCQd",
  "key13": "2PSSitQZeWKza24e3qwDXuFrUDKWbKXeSStM2EAkfeZ1ivaJk3hJZQM6C4tNqFPrzuSYjexbMfvTv2MvLNW5c65x",
  "key14": "3GtnMUj2Kuaas6WinFuoWxncpCW56eJGUanU6SNyXBUDSWsraAPUi5qTwhr95JexYNmBPnGuppFbLc5uf3sshipY",
  "key15": "5ojYnjxcttcE4wSV42dMUkkq8kzduDQVMzikgmqBWxEZBA3obxTWmqjFCutBZzpFnRzarZw7i8YjhhWhbiNcTYdj",
  "key16": "4nrLN5qscCWXq1eiu1ygcQgFEpPt59baMLMXpPonAVs9pd3Qyt6Q7h1xzp8hY6mTNp92xwcuY5hsDKzW4kXZjVAL",
  "key17": "3XvKg2jL1DhnQ5a5h6WZDTKUBdBmcPjGC7iEmtA8J4AAagmMsTpa86yXFj3VcAaQiYLb63NQNCX3GeuP9wBxCPMb",
  "key18": "5iDazVGJ27QWiUrCPYMobEDAEMU6nAjSUxNVMsM3MaMpFr4DxeqcKXkJXeHHw8K8fuw6FfftYYq1MkfaVwk3JQEv",
  "key19": "yhjRii91yGuuoyheZ7XVrunSXheyMQ9XSJN9d3A1bJjLkjTxeL6hkVjdkt6ikU4aqTXPkN36UphHDByq11C5Ugk",
  "key20": "1a5L9BNQzCi9nVhFsiLDkRVnpP2aDN7eVPTyzWySJeNBrUsMXYeKVsYz9MEU21XfateJvupVGPhyjEVnd5pfDM1",
  "key21": "2VgsT1mDSTUTfYJFnimRXipFoGKFpQSmNUCSTuBv5uMVPVuZegrhDcwNjtn8y8pYYeGZum38yAZo23VxhAmGAZXo",
  "key22": "XCm7b6Zm9pnvPRtPMPTtaufW86HXzjS2uFenG82cuv95VEbRZWkKBitv5epiRp9R6npkqZtTf3CC2vFcMHgi5Ht",
  "key23": "333WyiK2judbZ2GafmgGLznX7Ba3yjKEmTBNQvnncC6X3uqhw9SskNZ3WcWaABEa5UrfLb4ihwJ2oiNKwMxD8Jsf",
  "key24": "2k3qbwCaVhq5s6ZXdZiCiehP8Fz3taUCuvJ3Zxc4tkrH4aYRSdrLkAkvQHv8Rfz7wLrd89VhBEDzApZAVrE81U5E",
  "key25": "3kkD6whMbxRzMoRHux4h2wTFy73XDbGGTc7yBH5gtUcYTZUHW4ioHR8VpXAhCS3pDQvfcLhotG9Ztb8F1drPqkSd",
  "key26": "5PHHE6pBmiNUhUkbq6zRMpbabnQA2wHEw8mFEetac4H7at2jW1hftV85TDVW5cv69iyUampHqc8uBxH6rKU2XZhu",
  "key27": "3paBucJMkTqfmUfXMWdmPSDu8NfaEqSonCiNBUoW2jHVQRgzE5B2YNDD5yquC3ackwa68ztx3t41VD4uUWHAVC9Y",
  "key28": "4nTMGsCXZz8nzk4L2Uq35JwC3qFN29iVhtq6mb1Rop2HyVhDbYqW3gaGBgQfqA6MCgHBQNFmJF8uNUPeCtqVaK5f",
  "key29": "hN7876DL9srgxSEtWagXfsLFJ3iioGU4WcsYGEV8DGtAij4wANii7qUcs6TUBu9TMJ27SrVunCvhqNK54Xu1bxH",
  "key30": "57KLhqgQMoiaR8x7gfXCZNbiCcAZtZruMJeMuyaeromGpWKn24ExQMrVcf5y2YQx3ZASJMFbwRfF8Jo4VjQ3JF5X",
  "key31": "5DidnX2hQZdQykXGvdLYu1kvAEdhAj6pYgVyxeKrLkCqDJqZTkmLnAJnp5bpuKv6fMsGJnWJ1vpsVi1ATdNzFGV2",
  "key32": "3JEDcyChLWsRhbn8NrWvX2sC5eoNevUWBgEvnjr4duGrE8BvMS5nfndQ9w3GyNDVhpZWLUGLLd9RNDz47FU2BnaE",
  "key33": "5UpZadgXkTFHi14FZqVQBuC1ygPz9BUHkjge3zAUSDFxEnzRkoMyhvL9oC9fgWSGxedUtK7rHHw7Cd2S2vFtxtox"
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
