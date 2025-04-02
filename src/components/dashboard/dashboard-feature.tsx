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
    "375CiocTzUN3aNfdvCJa55pHLVxygc2JPdjrFakFYmX3FV2SXFfRBK4pdE529uVF5qrCEMgqszvpZXUf36GW5Gfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MfivxX9sJP1JsUvLV8VSukqGtHZwGvQWFZ5NewntRrj6vPLPkZfi1ULqrzySFcbWEVDKCD2etkcmpY1MHWi3GFF",
  "key1": "2SdS1WubGkt5H9qzLViAwyfvWqnC1Qx5KFLMDf98Xxw3wMHerwfrAkJNfPAnUndCDwr8cQfiVnzjLy6B2nRGTD5U",
  "key2": "4tXX1w1Piq3jHg7TJygphgQo3Fh5enMbuDKnByDrv9V9h9m6pDv1yasr48EmYmHkDTRRjD1mWSvkxzMK3wKHWm28",
  "key3": "4hq51keQX6GzC4j8CGLEQaAVME3pkeXanTZAAY4zuKuNhyYyzXUr9mtjiJ7pGAGjAAm6JNGvLZCzyiCuQmrbBwXL",
  "key4": "A69g4wiMAotBVXHrzcZPj44XhEfto3ZbN5TNL7JySHMENNxGi1jiYrB2Tj4zFeJGK5Xnp9jvv165T4Wwh526He7",
  "key5": "3D5XRK9cv8FiGLgCFLT5xwKfM4jmVpGbgXbvvQqperKsfZHTx2VghXeN45do62hTiyK4jFZL9fknefus3A3wgZyX",
  "key6": "2wEmruH1wz1JK7bGhKnnoDHpbjnp3GQSdrm91fs94Rb6reN3A73mStSKTmUtGAVNFowGhZ5vx432D6REWrfzLgSd",
  "key7": "3FdpK849PWRj4LvrjktGvwv6Gaeo8tYSPX1A8PiocR5d3FaxqfxtFn9dKx49woPKgG1UewWpW4NmjHc22TvUHAcK",
  "key8": "3EZFDDanFrpqQnx11TSgcX1CwThqq6NsQZZJkq4pqtVejDrwCNavmmTEaR2udGgXsCgPiSPHNCif5ikW5Tp4paSe",
  "key9": "4j6XiBtQTH4GZERS5pj8DCTQW44Zb9TZcYyrw1MY8mKLvcccjMSbHEPvwB3GdYawDULcr8R8zQGQcLeHEBBcvuvg",
  "key10": "3UJaeaFtsRYfrBZydCek2CBmh38gBfY8T2kMsXFkYqgAFijf5sUCRS5JEr4Z3GGAcVdAAW7C5Wu7opkqXbWBQ4bx",
  "key11": "7s2oCkDrArkd5Q52xBUccoBC7BuEaproQM1sXRvZzrGyhEfk8iQkCkBArQ2YfbZ2JqHCyUoLJeLxZTz3wDyeT7q",
  "key12": "4T9Jd959JeDRxot4cY8gy33chxXGwahKNYKNrEDyRJbiWKu64xZL5rFrk7zMyXX5pqtgLvdE2qNey2iJSL6ZGfCq",
  "key13": "4xdcbSizXt42FmgYx3vg9tzbsMCGyTRFbfC1ybo5epoob6k4SH4fQ8WCq5sRxJsbBbJ6bGwj6CKc2Kc5SgAgqVna",
  "key14": "2qQzo5hdkXAXsRu7drw7Q4WMxFK4soP7eiqLSa2MSaX7wW2u3EHwAShj8s5hHvoWGqcKYeuHYgGUJZvoRAeBizFq",
  "key15": "4SE6f3tKvzn7KVGcogM8vSPzH57PXBzHXxyk4wEzhmx6HPE1nLvfZV4zAcom2H8PHHCdGLuCmbd9BZKJ4vsDH3WR",
  "key16": "4N7nQvSUL5Mnt2rcHzvDZSVEDhrP1YBeNBdFiTu9krrvu3Sifd5QUEwXR5WJrkHAS4o6kfHMimbdNhhhfTZR1fV6",
  "key17": "2vgH1ez4ZGjuueCVQJuBCeh2rd2mb6EYBsQZgGfgd4DfsuL7dQbtx1BDpx4yU8Z9MNPjWgjnT45mbYaB1zGGDPbd",
  "key18": "4svwUDSNHXpySsTpVFEE87DKzzmLiJ9MoEBmPpX9cGCsGFJSoepoc8YHo8DNsuubhv6quw5yG4bDWFDueYQj59G1",
  "key19": "kJgAf1PWaTPc4xg3NZyPjk6bKBTvVnJtc543PJ8fzu3hRX3MgC2NmDfv2VeJjyFToqw1SWsNZz5LWMZMYQiqa2u",
  "key20": "4XCMygL2GAt3HvPTT6HbXkAbxRgxpBBCS5T5adRDb85ueBdAAatFTmFDG2x5hkhFpmyfeGuWoLYEJR2986u67nAt",
  "key21": "3NXqtU3YytSRTsTRtRxeMZs4MD4btQGUeUtHpgYhRXGJRuE6nMqdfGyAoTzr7jQ8k86YVWFc8zo5PrWkeZdcqpTQ",
  "key22": "8BEghWVwgPoVTGaTqEuwXeyhpCHooM9s8Zmnq7yDB3ys77eP87Go441oPgEeq1v3ahYFnsAnyGZHPCx3HksRPm8",
  "key23": "4fEXcW92GdfEgV57YMMqwLFnCiLHyRRbk6JugCNEVbPEQKz5ANMdjyoprAuVSB52sAbCN7G1JHVBC7V9CaM2ty3B",
  "key24": "5qH6bru6biEvyM8gaxErabKpgTC5ByBYd4CNXD3tVgZBBEvnvHwCePLeL1UJh2RkfLRvcDHwjbYBVFNQnmzBPWbx",
  "key25": "5KCG5jePq8NyX7xnok81XABnRX4YWN26nKyVPXDX6Avw5cbtdCUZccCbicJL24TJuPZEiTjaLea5eCpBuW8VNVcE",
  "key26": "2TyNJSBW6YdCHK8PXCd1xtCVwRBvz86NHgi1bqxvwhqJHwKGcJXcvSC4bsruC1ti9CJefdJVzyhTGmyzpP7g7wxH",
  "key27": "2pAgNspwDYzBALnLMooGHYq479DXc8rAC3VHfB7oq7MbXFKHEyarSdyuXD3ZCJXMQ9NL69L8N26NeF154j41F93J",
  "key28": "2a7sBNuEPn1cTWHYHUaT9HWnaoYeqUkkehPxjAyaq1bGTqoQUqU3RoiHhgrp78UCbwXDHqVyvABa3y3o42Ghhz7S",
  "key29": "bWjEc43jJLB3M92saUa3H2Ceq886CKy7cGTa6mMjphASocHpezZDtYT4bqvs5sZFWGjXe7uieL9fqJMAuXN8HLV",
  "key30": "2wDypYXz2AdM7DjXsg6VuBzqZJCGqphUFPVv4xiR72nisbiXJQ9MFLNqP5WqehEBY98AhrQp1sGGkfG133HcCe7r",
  "key31": "2vkEcFduzLovrUfFCRk2TvjgNEkoQbGETScLHuiZD3vRiwQfVi3AEovnhKL82PqtAAQjnua2tLCnx14HGTmu12Bf",
  "key32": "PcK61gpvkiY5BdCbJWeyVHCBHarUgEQ7aEmmWar7VzgXcMNryVXYLiQk5vGpE34oFehY4uq2WDmzxcd3vG61z68",
  "key33": "4ox6QQzSDhjVf8jBmDZgeoBJavsk1CVw18e8PK2tAv6be9BxxijCw5EBh9N7N4qEMMyMvwGFAiV4XpzJzriHPyUY",
  "key34": "5ePBnr5DxgZeDKkXGcEuHiY357LDXgFdmWSbr9RJ7oFjonQGFBD94yfBMPnMb5YBGgrPTiFabgTsgeKjfJHdrjMX",
  "key35": "3qLThSUAQTdbLf3wgmYsZjzwPPH6aJ5mAGyKE9k9gHKK1o2ukENAzzN8oNwzrnxmyFdrBG3yHcnzFqpCSH6r6WsN",
  "key36": "3Ejx7YjAio9o6uLK99p6gEgkdQGkpdsVVTATgqiFkbyKHMoykMe4qPRHHQw2jEMWK7beTSJeepKuybh4KTdUiUJ7",
  "key37": "47n9FHPNAmPr565t6CJeRvvfBpLuQ5J6f5vfUFkzGp3QXUo9AbDyq9ioN1UzWFcr2tpq1UoL8Nd4LnXNQi9iT712",
  "key38": "4TD2CHvAvxMgxVzw3WQ6TTNKKeZvL67izs6QGiDYaSXHzJ59zLivJYuUE9sg3G6HTmsUsKVse8TtWoprkAaG7bt3",
  "key39": "63adHz2BzkuYiyEp93WydiLFWQL1Ddn5hhn8xrnmrz8UqhohF7hkAP5deD5Favtxah1WmF1TokHFrxH5J2qSaPqF",
  "key40": "2sf4KoQrBUgaBGW9Bz6kPoiQCKYQ2HZr888DTVVj5vyr94S45QhmvTMepXjZAtKtfFipkgCLcrWC1jYSKBPDhY15",
  "key41": "63qHywEgyrmhKEaiQnAd4nSXwqCQ4FSmfsDHEvDEB1ToRNZci8fRn5PZskSgR2DUCmcrQNeYHu3Ug9wFy554aJeq"
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
