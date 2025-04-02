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
    "3PcMBAbZHYdQvyFxpda8wGzVRzjPgL1Z4ubDzASXqtvfRStdSYTwJjoFSgaXwRPsQ1ASZXpM14WJAyDQ6qYg2MoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gXbT8uMkyXc4Ws12K73PkY3Aoxrna34AAKmsGwArdJFcdSgWBtbu9irDQz1A9ztJRKny9U6deEFNNSKGPjo9o4Y",
  "key1": "23GRbnosJuqpGxwZA3b28yDdZsDhiUoR6D1vJX1mLVDVTvxqgecBLBbs8iqp5tmjwn6D3Pk4uXgdHck97gDEmBKv",
  "key2": "44aoL1aVwWkFgdoqZN4M2Zr371GGbSrxxhQwN8NrmrE8kFKWpBVSWPvb2EHyhVvryjYAriqnLMbyJxAVCsXgAUHo",
  "key3": "3aTTtTVed34MT5haqKj2u4zHe2Lw6dFNu2AzUGMyycW3xU1ccSVmzfm4QYmnfgdDNTYEc8A6pUTGiAU4ouArar1E",
  "key4": "3RF5fzr5wYdky2H2sfVcfCn4KUkJyRSFehTKnbcZLdoW4CkzE4dhj3CHRsJtdDG5jTPhqwLgPMvFRDWCSv2sj84x",
  "key5": "2PWHb1dSYTPSSpsmo9cySKTw1eD36J2wUQoUHWKgaqpzLecQKUYvAXCWdfwZrtDuoooxiM6tc69SoS7UU7TN4B6P",
  "key6": "4HpLTLP1DHyZEi6SGJ6cRY8PnoGpbvw2TikQfWnopAzEN8W9PmkWS13j48cxMSQX2B4dT6KkSKB8UhTAG7ABe65K",
  "key7": "28cb5ugtehuCp6mhsUUMxNYyBQ8mxTXoPrDfcFZKSy6oR8ajNAVLS7McUwLiPTuox816bFgbYdeaKEa1TKze9K3h",
  "key8": "5tMvJzRBUD67VPobNRUqNWSCPnEWD8t3g7RJsWwqxkHefkffEq1BwAsmehhs1gFKeDiKtCS6rmfaxqJu6LcHjqNL",
  "key9": "3ZcTeDJVj4E5hPTp8KLXEd8SJ6EVVFEssmi5ZC3GzJg3wfjEED71BNcr6CSETBePpqKGSZxdtHHSMS4k35FSjUN2",
  "key10": "5q3mQ1a6YwdXfGCqBUBQySVm83cziiMRw6gmBBVzRNxB1537pRzvZfM4RuccDPAZUhm74FRWY7K8LRcg1hzpZMXN",
  "key11": "3hPwKFLBmNi2hPoM8NvwLYLkazckpACJTW163xKrYkqPxjWcryzTca5P75sZaKPhnd8TuZgFpq65dwhzfDnjNrMX",
  "key12": "NBMpNuBsJ3iyYHZCeCzcCUydSLRcU5VLjjNj83udXPYGUB4afZwEnhAhuCVEX7UbQ6JSw2yHtrV6yCsL7ywaNN4",
  "key13": "tuBmn2fSnh6tszRa4TSFeJfX8eCb4FNMExZHSEQisXga1h9nXFyzDZ4sLYxCZWBGizcAAYB6ptgiY5K3bWb3kc9",
  "key14": "2NKjkR77ZbDumBJWNU1bWGumPw7ZNguVBwCQAr3ZiGQ2crVq1HnirRCcs7KK5CH2n1HmQrYVEm8jJVRVNPgS74rM",
  "key15": "3DNZpJ2nP17VC1FMsnC6QiSDT8h8dXrEoAmFxVNwjtLvmrbWrK6EBTTpurTtYtRfo2nhu1hexctZY6qYWyFvh5xo",
  "key16": "2C1CHm1QruzdeSVYmMAJk6hzyEKyFQrNVzj9Azrk3ddvuCE6w2wtuFKnZVJDefKpjxposjGxh2nPGQwd7w197e6S",
  "key17": "5wi5Nc5r5LztqekrJh421morj1sgUeUetAV1CqbdkJrsrzpcrQbhQsKpJEDYixqALSBjvcSS7tfRf4i5JeLmB8oa",
  "key18": "3zjHREKet9AvtUcjZ2KYoBvfmFTGW7EATAMXV7x679eCnbHLPuZvJpgFJ6yzmL96aBHoFAykzHPLYrfaefanJ8MN",
  "key19": "2t2KjbfGRHd4RvxMnnspSbBNS6dHLXXjBHPGGW3asj4F3u4fKZSzqgn7WwavCMo1CayDEM6tZwqsjqUbWRGWNCGE",
  "key20": "3kzyhfstaCj1ZJ7ZyLAoexQjH3E2FCKJnBg1Fey6d5WjeqSkWYFT5RUU2X3ecV182NEqgPBjAWPqRj8vXq7Ru13Q",
  "key21": "5b6C6RE5cuHLbiy4EFBCppyRPqgTkmnYn6tUdugBXdEdbkjx9MgEsH8cWM3FQV5kgLDWwsyEubGDGkXAU4UmW39A",
  "key22": "vLmZT4DysAURiCnJ9C8fvYyuPTNTbwxK6pevUT1Nmmc4ZBJ2ThvSmCcgBGGYFm9YyYfLG3zXQ2w35ejCKV4Fxkf",
  "key23": "3BV8oQPrWxFcUHk9pAtU78KQ6TVhhXeSTtDHMf3ipUV3GYMo5kKzD2iBXJVfLYfmTpY86rSRoNZQuDCAsGLJFaAB",
  "key24": "2ApnNyeWyLNHHL9xFaQ44iKzLQ4JPxHkNKXkPeSjipwt2P2Tu8BB1gJEaQDvpXqhmNaq1hPHD5FdoQoerwQuNpos",
  "key25": "4ASghkaqsbEWwyn54ZrGNv3jrn6LYGekXrbQXB8wRye3uWf12cuFdC2T368EVpQ526SGmMDnNMsnetvWvuTaPPsz",
  "key26": "4Gv2eatbJFeLbnJmy3CHARSC2vp3igNUzjBDUwdSE14CDDpYYVuL658GD4WS56VRhKMLu1k7V5vRuW6aX4CSbnNS",
  "key27": "21rJTUFTmGSGRDZ7aUSitVsRitQmh3qJJeempHadHBL7oy6bTgwzzWwZLgbffX52djPsbLCg5R5zX3JxjGH8iVWN",
  "key28": "LATyYtbDLPz2MibWsuqP82TrzdQnRepNJRFtKDGCKspoRX7iwmsmTcZQ36smghyAoe9Di6Wp5mdBAxwP6PAubw7",
  "key29": "3RxSRtayEr7WfivimCcg8oupY91CGkVepgPh1xFCwMMNaSKNgqEYNagZkq66kBoswoA6Xnpte4ZdvSzYPTpYXJ1t",
  "key30": "4wckVTiHg7PtxcD8PSp7W8gvzUE57qCDTB1uEAuUomZQo3tHMQVerWJHCucU2Pk7fCoYRTx9FqLSJMTpia6wmQmn",
  "key31": "2sZp7Zsph5QvQ4kVudyqBMtQqsE6F676biMxf3MgFgjHoVHcHdhe6HnXwMGVvVxS677Zz9Lc2LhsFGcEE7uhJTSm",
  "key32": "FxBKSwpHar39gQxhAkin9LZu7m7HYVjZeRY5wHs2vbVUXFrtUH1aX4QdtGHeUzH8VwRrGHdy6iH2JzVfTBNUfar"
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
