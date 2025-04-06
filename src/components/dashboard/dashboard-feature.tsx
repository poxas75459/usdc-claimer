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
    "4uJ7Jm8aj2rEC15eeueHpXUPn7xvxyCV72VJsiRVoSVo6J8YFEaX3cnUYvBPrKaKegxYJ7KUoHded6JD9QQpeSHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4em32J3M9hkGiuNxnqLizh76vKutuVabc61MZdqh9PAkyDq6CJ5SPanp4KXEhHFxGu6CoWG1pfrT18XgBFSWr9vC",
  "key1": "5EB6VJeEHnWNcpFQbJxWedRWB1JBWYhgrzPvM8MPBQN3xS9tNCgMrGz1GLhni1YkueSXpNEFSNnK611ntpRb1aU2",
  "key2": "2XNkF9dQ8BRLV8iuZ3a9wrLNrTMvM72VqFUA5GACrQX2yW6Zo3QbnHf9vC6XvLWUQ8x8YgKFDVTE9JBcugQmojcK",
  "key3": "2dgjR8uMMsQC2HFF6MEUiK26UR4ZHbHXFMuw7Tsa8zapnR4w76DSLZskqWsLc9hXPLWe5eC9tiabYqKYB9eVdyQk",
  "key4": "5bwrBAGJpPNrHgNx974dCcsx382eUXvTp5RQijxKJ7UB4mNiVH2RudtF4NF23vU635oqBWs2hvAvcSjGYBtWyJpA",
  "key5": "5QvE7XRui4KWWj4mddjVjgLtcEXyKurcExuRbB42uZZvWFesDLioAvimoRoiZQ4sTivUivPAGVYKMcASHqj7Cp3r",
  "key6": "3nxWHE82YPQwc5kV6EUti7xyTkJsuehpfrmUT9v9kLZ5ksVaXqPXfYTwkz9no6EDSNAJPXnxA9cddxSteRF7d79J",
  "key7": "35HenECZKwuH57iDJtdKoN7C6c8Muh2tbqpusxfGajhCTW3zDVmKoEHLgqysTtPZCQLMAjDcAHHEwYMi7op8bVfM",
  "key8": "5Ec9boCy1Spcm6ca7xrHWnP8TTn9qHC1tDcxrF7rCAcQn6u7Pt9JoNpQDUyVi4AoC9qB2g4PFiREVE7rA8xWk7ha",
  "key9": "wDbjZnz3CuWSjkGX5MrGiCiWBgZekAKpmeqw1LQDB5vtu5Wu5g5CQr9r5ExTFZRZTidorWjPqws9FCNGkyGrYx1",
  "key10": "5iKpDtFpiT4HXhwQcSTkV3Bwb4BuqtMs4ZQ8qLiZnDbJZiTr6MWaczqcWQ8stFde2QPc3yY3zkWkd9VP6kjxwp9k",
  "key11": "2YKG7P8UrCt7mDp9d1kT1D1FFqwibHJMZC984ngc81M2TzBvSrFeahZtk7eiSdeGSvPsGKb4qZJoPsjkHQWVCK7m",
  "key12": "4DBqujTHqrUe2RZH4gJQd3rEyoxP41FcNcic7RYXa6NQVbaNqH1vYBjxFB22AGT3sKbAqLroZvHRosQmStHUeCoK",
  "key13": "4PfuZhQ4voU6EV3Da7u4wMWQuLbSaNfv7Rux21xk91iGAh89ui7tnGFYzcLkipWo1aAUoCZruB5LrRSD9qAL2g9o",
  "key14": "NEz1Gbtj5r1VybrNiK138omNqbkVuD9Qozu56yxptGhDp36dFHucoikFLbYkovrwfkzmCWGbNCKFPXYvs2UxEsM",
  "key15": "44E8C49ba7FbqYEGX3DVEpz4VXeHoXqY51J5AMVTuAi9oCSEpMz4KvMgsoNT1wP8zhtMjHFEE4ggVskfLJZ7gMGF",
  "key16": "3chVZjYg3TFiPjvhddbv4ftHQS3vFunZZLsKw14XaLu2EdRpeWF1ULRSBi72mENNNMDp5gmtpAp6UCETTKrZHMG9",
  "key17": "3Fy1k65ZbNt6LtMwzFAKhh3FDVf1S3uPzaDYqiT2tRRe3XSSRdU8fxk7JWPo9eizLcDc74V7HdfXkMpeF8fPUHik",
  "key18": "5aHLc55omnNia8PvBivSdCDErbY7f6UVu43DzyGDS8tnoHYFVPc7JWWFRCkcSBcUbc3GnsWqZMbYeft3yuEMwqJu",
  "key19": "3wxbpC1TbF8d8CLkoJXVD1CdBeL7kMjhzph9PaEtB71tCkWGqpsjUEhpR5K31omQbyJfPNvKfxLpNvMB7rpoHmKB",
  "key20": "3vKPazrpM2avTHMSosrNB4pBEax1uagsrtF5dhgr4n9tQGSEypjNHmYrV4dLRG4V8TwLvL2DJWNYMc5ftS6N9EiW",
  "key21": "2wfzAEAtLKc33LhSbs46163bkArZ4YMZioxn954jxpd1fFzsvvhSk1rwDmHUHKmJbDz4Jix58T9XVGep6HBPC4wH",
  "key22": "3eYGe6xbbSpU47eb2bP34oNFFaFQvNDKGr2mewRtSrXxs9cSaVhejR2Wz3LEnjYuuSu8hMjFrhzKVewmg97p6bfA",
  "key23": "2GuPhb4UYLn4Ww5oZBoZCb2VcSFfuJ6Lrc6CPmtcGXbcEWa4sk1MBEB3opoHMiFbk9EFv8LYwjcDTEPHzK9vzq8K",
  "key24": "5VwCGZSYxpd5jLnPYYDga94McdMFpLdqk9D6K9qhn6PacW3JTHW9JGsgfVFz4V4N4DwuaYF8r3HmN459Uo7resme",
  "key25": "2ovKpJP57xLvyMfJ5VEniHMo98fLvvnLeSZhj1yVDdPvhxqFbFA6CyadbUVYL5rT9xoRJpwEiK1q77X1pUrrDCjv",
  "key26": "4xA7EfHR8YEDBwXbizSLU1RanebZhTfc999jJqTdz8sPfCPPuvmqGmv4MsDXU6j1dE7wrwza93T18yq7kHz86oRh",
  "key27": "FgJx1HU5TCsXqLSd67JZW1nqxzvt6NTEN59WwRm7jc7eJTwc5doNh1eQAw9AynEBaAZ1Yy8ycHD3REt6kVX2kvJ",
  "key28": "4CEzjUFXFfux7AvXMgWEbzpmnTL3XUTBzYkygGt6LeK7rxSM99CY86KQsuMU2MDmtVkQ8eQCoq6P15xVpyaTLks9",
  "key29": "SpyABMUEq555HxCDyfSxmQgGxySFQMM5zVmabkK6hyMDWt36UJDXFRAxLG12zQ8tAE7zSVCZX4mPB29aCcnTWbZ",
  "key30": "2StSSNwrrRAiQFWK16rQa8RqCHKFHJFyzXxKGTTbFYPTx7Arxj5TNhkn1C2oGZW6bPnTJ7KQHFzasoypUBrCSPt9",
  "key31": "5CTf8xexvoSmzELHgghrZbdLuCeLnP77uovmU1gcH5jgUyfmh9mQsVYdACYgE55B1cpyoh1fqSVGBwBoQc9UL8Kv",
  "key32": "Ngm7pSx1TLCt8BrWGXLDxGjKuhChccQ5UJxL5cFRt2LfnZCpusbY8MgGRBKc3zj7xLAH7vnXVLRmDgBuXU6SZk3",
  "key33": "4v32tFRBgFhjWqgJCwAGV2ZJkULbor7G7WYPiCBJNetZF5UhDTeEEogMGDo7Eu27Q8LwnxxN8sithZTdYoX57Xwb",
  "key34": "32t5oG5ckQTPwPRoxQQNKgWtJe3hGf2qaGL5BJpcjXQGDJCANT7s7yry3VzqsZPCowG32acbWHuNDz8ZTfF4CEJS",
  "key35": "3RpjFB4c6PatgnxrHzNdYvciwZHmM2tM1mqqSw95xZ2jFHj3GALJg3TpeVsRzASWj4PGr77EvF7FEabvfqBp588e",
  "key36": "4VTiqt3DKdhLGfw9aVVqE56fGbh4Pqm36RVoDL3Mfpha2ZBUsKmLRnGwtruBXjK73dGDc51c19pe63BobPHoeZFc",
  "key37": "2gPozmE7tGbDSyPhjsSwqx8HVrmGco2CEaFD1BtLjgcQFqX8zYmvSG43PU1Hq4U2oC22QvB43YpQcVaq7aaunWhx",
  "key38": "3nccMvCDZrpoZu6XGWTrf19Cm3gv7LRkJtu4rRMytbicv2nHA4e4UYy9HkZssWzkRcxcFTvN8VDNtNRzfZzQhqRb",
  "key39": "4W7C3kten1tLrwftNdK1UNL99uCrbHRXrEp5jaG8QMKjjHU18Rr8KnfVRZzrkQFfPM6Rra4fWn3icZpTQFskg3S3",
  "key40": "4ppzXEM2NNcw3ujxSB4UMfqkTFCFWbpF8fd7Bq7zou5pUqnJXJSV2bAeXesEBFha2x4PmCU96dhyEXrpgXoVJRYV",
  "key41": "4tTZjFE5psYpTLJ46RyykfZVzf2n8Z1EUiSkgSaJE6ctxvP7XigdeJcuCWFCorqieidcswwmEsUBrwp5NddX4TgA",
  "key42": "2TNSmWVCsguMusr2nfCc4DeKD89e3GQTzpvt9BTLno9HNY58KEv4oZsQWBodGWbpFg6tEsgCdczF1ZfBBE5oPJwg",
  "key43": "5PsVepoo8r8ZwneqMfpioy16zZfXK52daCAkhTMszWefUmANgGaypZRqTy5gK9MwS2CrB6Qj27mVxwGeFRqCrSBQ"
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
