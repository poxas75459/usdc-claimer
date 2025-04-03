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
    "215TNinpRst5RoRrpqYLbKA3inVCYzBT2h42cZ75x9YHjwAeT1vYzN7b2mdwGewNyPPHR518wzYAuZxVAjAmkTin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzSV4dczrbVnkKcAKtgX41WGB35SKExPkhHWvJvnA5MtBEEEZhKy7Ygb6cbP1uoiDKACpeeKDNdo8FT93xvaovW",
  "key1": "3GHycBFwZH7tiVwkTVGpMrL5H4M137CJDXMan79rh6YUpQ26SvvWKeA1KB3a5vD8dHFMo4cFUsWb7W5vjXbG8DvW",
  "key2": "4wkqPc6HaAaqTUot2Jcj53PTzU1hUHGVyvy7scFKGdxC8ueBhMsoWCoXvL64umV9GYCze19Bs9K5oguoY2xu1kou",
  "key3": "3xQvHfqjrchAqfWKCwnW9mPKMx5dFsKcPpjKrkQ2M3SP37fP4iqV5vPk7yPj4Fc2oUePrZCfC4tLbtNhsiZeUsiX",
  "key4": "668DXqJHPScV3fKTAwRB89zWpmLm2YeXsa6yL35bZ1rTxxizh1enn4Z6kW3JfjUBiLgiVxVE82zbTcMNQczqMvhe",
  "key5": "5rxJyYeA2EfzdPxRj5EKNL39fF1gS7XNNMmbjuAsPFfjsgx7ucNE85xJXSeAcZ6tCvvjBhXteCg5xLhiENwfoUdU",
  "key6": "3g1SkdSvXR2TnMF7arD73hFAZphq64Ptr9q2TgfPC6APMiE8Qxz1MDykBQZAJCqQhYJh8LnQsbWeGLERm9ScrZtx",
  "key7": "4Ha7gz6SiV8t7zhXFLAUGYpAoFdCzfxDF3QMmawh8bBXftqVQRkG13c1SN1DQ57shMSA3euxtuQfmU1wRcWL9cSp",
  "key8": "5ajwijs8B51M2P4AEim83LgBWQGVsUTpSNfKdMDa5offwD1HyL4pTAKXQFojypHoSrnLrMEzD9pryG43ZMd3U1kT",
  "key9": "4KbgCyAQtnWJnzXRPLSiKf3Gy4MoeNVA1DPvyDDyJhhY3e7WRXdrGN4FkzcXTYW3mwyuys5DJ5WtcWFpV66M6d88",
  "key10": "4GNk3hRZzDXfbe3eqfwzXkCGXVYdvShfTpWuw2Ene9Z8iXurZccngAtUeAd1hkqLuiAbKcnfumdRmZ5CHdYUrgtF",
  "key11": "3qeTfGr2Zsd47z4Vp3vVfSrd5SwQtTECDpZhGUahQqhfRtnu4o1U7iSn1vGBv7AnFB924gvJSryVEQDFoXTTaodT",
  "key12": "3oKo7JmowHnfnLvybDVUswHT69GRsf414ve4ZWqRonRZPWQoC39vq4scaSopxU8XeGDZPgVNs6GeeqNrAqao5WwS",
  "key13": "5CkXDskERAjDgabxBtUKCUkFzEmjqgPcvBMRxMEyUb6hnXMZzreFwatS7vFRpn2YUuy58SCts9d1T2QujWVKqRJA",
  "key14": "5ykKCxXJDXGXydkMA2NeBCXA5KyWir1qdJj66PaRkkPV9y6AQHexZJxLP246JjXFMu2SSjE2eqmyGaQGxULqzmNL",
  "key15": "41j7caavgAknq6LTrimemQzerkwcdTZPnBLDMxhpQ6V6y6U4f2UqcUsJhGJmiQftUJ3Q6g1d9NGhbcdB3zstRK7v",
  "key16": "8rGxzPqqdByeyaWThns3F2JZpc2eXDN9zZTA4Udr45TnXYHCG4oYbdXpsXeG8PNnBuP9GNURVUVuzCGnQbhTxSU",
  "key17": "3gz2UL8VMwK415fthYcSwwtr3NZfcZfeviiKokqZGay5TDwycoMtzHyyKLWbB9FWkrYLnYtqQkrs1AyJF5aRtHAY",
  "key18": "3GBhco4LBnpmAg22QVM1Ns2MCzeFUKTe61hiBWqD6saaA2dEMWv3gkUd1UCpsJzdTGpWagu5MzPVg7RunbPK9Fzi",
  "key19": "3eXAJo4feZrL2jRsntArt5Ex513mcst9jSv5WtgXrrEzbR8mCXCCjU34VziDdDMTfC1JarHz87n3tBnQLLuLcN6V",
  "key20": "64Zog93AjtYQcNvncbvECXTRu6JrTEz32BF5d4MbRizM6Aey1u4nDmn9e3yfqBAsQkBb9D7bgVt3JHknLjgiW6eX",
  "key21": "4N7QLMgq15N6agB6WyYnHj2AWxoxtHdGiHSbxx3nQs85JJcQudnDWsZMcFn4iZM7jJvqv5f8fUMM5KM4nkuBrAnY",
  "key22": "5UqPxcAYELNi9jNayTL8azQnNfmryCpPhe3a4ASnkt2PSzzg7j2M61YP8EbV4i7tLvnmpWmLxTBXgZNyJbcLQrWm",
  "key23": "TAkCsGfnM634sc4BHcSTjFBCKshMZmwvq84qcDVRYVeENLAHSJcDtByQSY13ezwMjm33XNTs9tC1uJ2shw1M77j",
  "key24": "4qbsWEfixTViPcHz8KYzb53diGaEStrUxUiieuLZd5tswwg4fhsUmsYE8zUcRAvXc7EkzhhvuzBEn78VGQBoQhds",
  "key25": "5F7e2XnqHrQErbsJ4DtSa5yq7sytRxfMqbiT9YA8DBSPyj874YzF2rJcUqTvkxSiPqntMsNibqHoRD1XTUdLHQX6",
  "key26": "1dqUDMNND5EiwuJHZ9MMbXatCx99UEE2ZvuzEUwRCscE6kYxgpX14uGbgS55PsZ3foUCXrxuoKu9uxAN692VLPg",
  "key27": "5CQsxADCpW4iX3TeCQ72tN4SgV42DCyXu6wZMniVyMSwjPErBrNTSeDMxorU7waaDueHXu8wbipZQtXMLQXQrPdY",
  "key28": "3Tcc8eKUbLg9eTY6fhWszFksmhJLq49eTxBRKuMW9EmfrAnDm9EpsKtamWnG2XUwwgHemYumYPQPL7Msuzom15fz"
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
