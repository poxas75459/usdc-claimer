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
    "2yJ6LR5AP2bwatCeHLD36G4T3i1NQXn3FneJ84oN2H1rCBvZAxrcEBron6U9gF2N9BAg3WQJi7UhNGxyCb6DmJkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57x6iGNakcUB7Z5D2jeuWSRAZ7StLyb7NiGeNbWEVDCFhDuZ1YHkpSAgw7xW2giFnoMGBn6JTcF46UeeShu2qw9G",
  "key1": "5966P5ayN8HPe1RxMUoyoAGemtNEx8rcjaArZKAcpBfVPvSNaXWz1W31CtGUyTVPGaGxsHeRbsUDezXbT6Q24f9o",
  "key2": "3veRF41Ax47gb3Gh6dXqM1kBQivPkZTeEhjfZGeo6tdtMcqh6UGUePFn5Po5a6TaU7BGR2jSTfDeyvo2ZP4a4JUV",
  "key3": "4zLiWG62D7MsEQuGGTRr9SDk8kbgwz5tNyixCfwebE2ehSAiFUm7tr427mLRG6itYbHckirBkapRcHbxYeWP5qDf",
  "key4": "3hz4T5PUZegzKoJqHNAmhhoDLEV3Upn3AynGPdpBvt1m8yuPx3jsvWyeE68j155fGvSDBRWW3SBeZsfiMnPhrywT",
  "key5": "ZM7stYYzkJN6gPs1Htg1cRCQFt1fk212NFJCDWokcj7YyVUECZKCg32QxFcyuNosUcKHvdHLTq13gBK4b1G4nee",
  "key6": "3DMe6MopPX6Mpm1fAQtn7u5S96ow2uTLQ5cP3YfGYPhK6ifjoZtkgoVYEEArMVnByUMQB8LtzrPtndSkAFnzZX6e",
  "key7": "41CU4HBawwcvzQkoCDPws4WDfsiGEVPjABJxFH5JNQ2BcPQ9LoGdMhjMb9MMxtRPChzmYiL7ppXT1q9bjCkXBG9Y",
  "key8": "5tuyt2Pk66nHZinEXLub3yR6776TvdDpsr3593GkkqsKYEiGuvnPhWEohm3TPz87bcMftZqxmgqnNwpcbh1Jysxt",
  "key9": "4UmVb3GTuBzhqLKgCkQUdjU6boJf263fkvBauT65qzGBnWtFCNVv5BgFpUuGcbUkJ6ox7Qxv4G3mZkPWq1r4HZHi",
  "key10": "5daWVENXcMVSGRL5YUKxE2We9Q8mBZWrtYGLFvBixiuBXT5PL6HmCjTsUmeiyhUGkjCk8eZGCsGrLjUpvrMYw3RP",
  "key11": "3jyZnSjXENHWB1govRsvFKFLLeKUyZw78samYHtgyE5FKUZWaMhR1epvnKegiMHv9AzmXmG7FSmk14RDMG9Z2XT6",
  "key12": "2pYK7xgdMBLSotmugSTuyuroN6AGAjGBt6TUnyAL6v81MunFhApvwjjoYnJ8Rzq3rMzKFKEJ9QsKy91s21Ac4CV2",
  "key13": "5tJEBhgu3sxDSv5SFbi4XDtEtk8ueYc44FwmoHQdpZut3skfBBbbNzX4V5kfhdtdmdbgEdJSy4caLYrRasJoLk8",
  "key14": "3L8vQ7pTqhzL7yqevjHzhP3KxKa5fMQfWfvTtUnwPCHc69ffntSR3rQL4SmnFW7zJqf8bMrVhRWfCHyeiyWLZSYe",
  "key15": "33jvoMmvUJQfxpFtaN3o4x54vn5E2UUe7V6rqswNpcNwVd3USYfCMcTRXmnHF4qj885hpYGEEcpFPrQjTZQhju6",
  "key16": "615MtpbGThFkUHMuKZh6aZ12EB5CHXLHkdbHDTTD85BGy4k9NXDJCjXpXXoaqCN5vGDq3gKSVuwHSKY8fYXLnneM",
  "key17": "3j6EV7J8DCcxigS88y3VVfxm2R4sqmsZfUKLA5V2LefMYh8hvMgoKn7uNhekddjM1ZouT2fa6aoQCiabnUY52R2k",
  "key18": "3Z1zeA9xtaZQuheTHBVefaoFJF3xNbQeod7wTH4QE54Cc9caKP2mYbViVFYNne8K5c2WiKERsXm6wBCFuEZG96y6",
  "key19": "5Ea8QjNuxAKNCF8oLVH9H597Me3mc2R6HGeG3mVyaHVxGcCgHqjq2W3epAaKnP4QUJfwPUdFwbT1K4S7LHYM2rNr",
  "key20": "3UZ9dN6PcdudhSm7F1JUNgHLFCrjwvwZiSySiJLuRNfN8txx3ZEFKYCsFjjTF14RQg3vtFaZL1Nwr3EJNWxwzAqh",
  "key21": "5LebknqgLKeiYupsLuTp5SDYGEYqBCQQdT1uRLWYJmtBZ4J4kADMF7u4WjkukmfMJK7VaLFUq6aqRu9andP395Z5",
  "key22": "PNhivU9AQWnVzpHQ2oAiYDp2JeGpdbxAeXWFnzauExRaibizZRTdPiDd6Qy5XKtHwbB6M8fJcMonyzuDnYmuXHB",
  "key23": "31MiMfCRjZ6JZdLMJ6DPa65jKt929vAZwaLbmDM9RzUsQyjiEGEULtMTue4AWML15BWftdgXnfbPn6zY75Ezx7i6",
  "key24": "36x9cSPVYKP8ybjMWp5PB5jpcn9fNJVYtqQ3r6LVQa24uU4ZXLy3XQL7nJsvbzxdhdhBr5f1NE8Ph1exgXMU2CCq",
  "key25": "3mDRVoPKMaNpSRzwYooJVtW9BiWE4LdSozo7Dhspi9QCJU4DYg7QMkBVvmL4kmfQK3e2fntFt36gh9DQ4ycTcugv",
  "key26": "4vp7n8j9Nw6V3ofRZbMo17VkpNPNBmq6KJi3bAfVW2reUtWvnLrAXtG2aTksdZ6WV8bceg2bH5ALQzv5iVPuZUjb",
  "key27": "2gdsi85jAtXSvu94HLMvcMj4smW9ci2fvs693FwVfYBhTCh43cNeYzrsBNcn82ZZH5Psmo3kbdeH8pwCguJkmPCS",
  "key28": "uc9bgBnYbad2GDyemnVZEscd3WKs7xSPb9UHuNDQTBU8VBphVqquppo2keTL3YFTJgFM6H9VFnskAnDgLdLgxnx",
  "key29": "W6syHkxnDB7mnwG9VQ2giFH3CuAnoBw1Rne5AmqHpJiDwFJ5PyfjU1FU14Qo75zu8xNnrSMH3VdriQDYSxsfYYt",
  "key30": "58CfEAdEowE3Qqnoox6N2Cwqqk2oGZb8jdbjHMFYJck6KHtr6EeCBRSyMutZ7oY4uzPrjhVvRhBuCbFs8WihKydF",
  "key31": "3d76BEvJWohXbCAWh83vdEoo7fr7LKDqX2mYKCJ66T1EfyWPUYgrSG9e8dEZg59iakENXWNgRqmVBCv2K7Z2yRmY",
  "key32": "4YVw4WmJeT3JogwKii7ptN6WAQLnKnFmtUZAfahqmBBu3mQAHPSba5t8WS4TjKh699giKcZkRk81AR43sbHcZ6Ke",
  "key33": "4XYJnnvmq6Z69pRt9ZyZZJwyraQgmLTLmhweQxE12PzfXQVJHbpeph7kNmv3yNq1AsSGHFoGC3ixmVozjWxC7Yov",
  "key34": "4VLjpDYPjU96dHbBQ1qNxyjFAaWMmKzwb6wLsXoPMbVHS1tJiACjL7nPZMJnxVTuFAukyr2AGRVnjQhVUvXNdLGm",
  "key35": "5Vx8A4zyR4tNbpA6TBnpab8K3REFQpTatfh3jcD7s89umjausw3FwV497pGk8uJXi5pMA2k1AcT4Jv1ZhbYySDUQ",
  "key36": "wGaXfeAVLmW9rtiRa56VisA8CW21g4obL6EPSBdU7AFwUtwbxKgfReaEojcWfU5WZaj7wvFGiksTiV1u819t75C",
  "key37": "3Kh2hUo9nuHAMo39LDmYFaSNPU14Fa3P5PuWNpTFHmNu5VT8wCrmBPeucywAAiD4FRF6HFSWZDAQ2aGVhjYEGs6F",
  "key38": "2m62fk4wG2jCN35kdTwZkSyKYGCWpaGrxRDrHG1M97SRm6x69XEkmfBrupjdy6TfVV9h4n8Tzpr3K1igoXKgxSdo",
  "key39": "qw9qkDEsg5j1yi6NiyNSA2E8rw8ebfuhyAaoyFcyAmtymgLnrN2i6oASsESJR4r2mfWn5vWMNtoJ12pNgu7eVaQ",
  "key40": "3e1CQLA1DBELxyZ2m1CkbQqpbohfTwGkmggX6p1T3enLzCFmb2W6AftrxAGHbuZMYSXwXJiKDxRG3fvnqejoPSVR",
  "key41": "5Mthj2ifk22wDm9HTcpVbCouZriSJaAt9eaY7zjFZ1tFG6knDz5iEUnqGtJ2tQK3ittZ4BqfHKau68KehoAmVemA",
  "key42": "5Lad8sv6MJ6Wb4V1oQDQ81DZ8HxH3KiSJR3YRJJQ8feK4TyzV7Ts36rMJrezdvBN1PDLT4YM6PhTuvR9qY9cvdEt"
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
