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
    "57BogivA3QaTHRnHzEHZpj7mcqgvLGx7ADzh3bjmueGHPFoBKAYTXkNtvb5pCRjvprpPkaZfvaCu66giZWdwx4C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qLPPN8EZnKTgZdz94CbHbPs2TvEHsY2cnGQWfJ7CqG36Pf1Ef9xxERgGcMK32KvjCeHaukr9LvBvvsoxiab5nm7",
  "key1": "3GZXC3APY6i993Lgc3KdurECoAQheL3r6D1H2rkjsvaj8pTUR7DYwtdMeBqDjnLUxGhqEZQMXYSw6yg1GKEVSiFN",
  "key2": "pWH5ccPdBjBkP4FP8QBBZwB5pMJRDA9KhHjRkegcRmeoPAjYsh8VBKcwY7oUeZsmi5JXnqG1nAC1VwkYYpnN75P",
  "key3": "d7Yf4XcRRnsjWWFLjv63chB7oyY2v6vqPnHnUbWsH1ToGhunSKDAXgkMfJy9HAwCjd4hEg89f4QdBqa73GEbW9W",
  "key4": "6PeqJ5nupActZKULnp8aCSUWRzxKEfF3Bu8nx5SwyZq1QQNy91N6ysssMZiJyiVLqF8tVN52ZLFXcDim1SMpyBc",
  "key5": "4qtwEsHCgBjfBnnVTfG4PeuCjhyKW66gu8UWvSHdmSVn8mnw7pRi9QVG1XcszZaZ4eFsFnJETyZo4srKrfKMpMRG",
  "key6": "5bj3skjfQaDRjncQvaubqLS3hTdW4NzsGtH83BMtX13i2d9RTGR1AxAJUoDmKCP1xaFYWoHdh58zgV3b8jxgNC2F",
  "key7": "2TzcPERkXAoS2TaHmbCcdpH8wwtm69Z6uafGN2vaH9mCPQAn1N88Ty6Q7UWTsWrNFTgkH8Pa9fKhnDunPjy4W5ku",
  "key8": "3YJcD5VanU8KvpjCX91aSCVfpxT3v5pF96JvPnsBsJq8DGNBZEA4oGHzBPp9eCabiTsb75E8LxWGn7hJoLijLzhm",
  "key9": "4dgNaaRr4PBRuAje9WreNqDPLTn2Jt6MXYN9vPW5aqEf4Q4HQPfHLqG4pvwEDF1Ky4tDNvRuwJfQFGk5GZ713ksC",
  "key10": "yiZ3pMN843bF6wg1xwV4HJ9vEWWV3N5PHErWRumzu6Aq4jW6eq4zU3SrJZetE5TPRiBNMNrQxahpqxfWu1A9JFu",
  "key11": "3iPn9WCR74w5rP9S4azGFryzV2ap9vpg1Gi3oacqymsWZg1javzoJzvNaW2e8DRVxCV99hHv4CMhLrx4RuQ791k9",
  "key12": "41GJyzVHpbCSyQXjzKWYsvu8c82uhBsGPnbpx8DKibTCxFM1UHtPUgZXvc7PTYCYwSJe1a25bCe8VB8DQSE9DGJx",
  "key13": "22PMf7mmxwrXwtu9drSuezDZ9ENJLP72vW357XLw1XwL6v9JUerYYNFAAbxmj4wZLAbX4R7yyfnofjXGwbc9BVZT",
  "key14": "5NWQFxAYe6q83mGMvVGzafy79yqZzH2nTMXpaJVdpWqgKaMG9yNt7j1bPsq8Sfdr6kWifTdH7HsAw2HpLXC468w4",
  "key15": "7MfEZyGkMvvG6qSp1BQbdhpg5dtZ6sZGRPtTZiSMXCMuWESaDwpv5F7LNGN1CYDCXUHW3GEHcG9kryiXpHDRTUV",
  "key16": "2wEPcFvTHzJYoEhyb4hjTpb758hvnBnkBQqx7r57H2d1w2bvR1G1eJJxzjGNzs53LVLs48zLbYyQW3wt3ErLSmwe",
  "key17": "kQpSk1WpugD4J2ed1P8SZjBc6DogENiMfA2fR1umHHmUuv9bxmUitN6H1jhA36LbUWEJ3CDiB4nVECms1drFhU8",
  "key18": "sF9ckfZw7QnGWwk6Qb5gPUeiwfTxFLiei1nB99a5Bn45QgW6B4HTgVdy9LDNw3RhFbAQ5JzsNUSucMp51MMr9SM",
  "key19": "3ddr1dKjERM1NJpqunBvNZMrz3Uv327mhatiQBPx77Tadt6QyLmbNbYAyW9Ut6MpoLnmpULL9ALNVu931p24m54C",
  "key20": "4vf4RatTC63iQ9cyzEShRnyvW6hADurHQnzwoNwPoAMW4eQf4sErCNjMcxs8L8Bbqy2avBtVFX1yPQszmsTc23PV",
  "key21": "241LY84vhNqV33eHW1vfx8WQeH879n4EnX1zH6zNLxc4jWsKxPh9A1Upp7szRxKaPTK6jqt6dYhNgkVqzKdNvcYY",
  "key22": "5gE9gXFCcPbw9fD71VBS6qfgdUwi7LNSfvYyZoPDLPbWWCd74Qy6TtikQavgiQ9C3A2s9peV15sFhzP4P4TYm9tu",
  "key23": "1YQ56RWuxtNpZdFedYF2yjR8tTajDzJbR2c4bxBqDLWGA3RpC1cjK1EaFnvybsFN6kFgYfXgonFtaTc4wpDvcfT",
  "key24": "4VPhUPPGjS7SrwDVZjmquBpHTrpu4bHVvVkk6rmDKgp7Pqhf4wxcKEUnwqbLscqbS31R4cbYuPo8F7c8h7YvN63m",
  "key25": "kHTDZ5jz21sUinfq2fg8mcjxVyXy2QqEWaV3esouDCBHVrXwLJtKWhMgbzwDuXeYqxKjz9pXVp3uFBoonEGvxhe",
  "key26": "3JqjWREgZrofTeZVXS94XXJPqKLw8gserBkSMUVrhPqJD75Qse65y5xFd2oN29N2c8ZdjuBhW2WbSQGSVQDLNps6",
  "key27": "Uec5iMTxPxxoCozzx4cuBBYN75x5wtQE2GGadxe5yt9urxFPgZg8WKbYSZ9anfAAfPkvnrCXdAvnDbeFJ5Y6w11",
  "key28": "36vzhsnDF4mEELseWR12yTAUSC4hS46Jgj7KZ2z4J2aGquYZ2vQiPwV2NzLAF8F3FUmepgyogcjmMybuVjgWk37Y",
  "key29": "3uHr3V2HYbhJVkHAfdpEAN6SxPBUJMhxENb6scmQ86Ps2pvpq6WxKfyhNwbhqd7iSSm6sgruKMySMi3jrtdYJ65",
  "key30": "2vTuAjoc28voQsi3WLAw2xBeiKJDiZ9a7kPACf2ckez1BjrBkMv3Jo3LntdWVphAwbxvtALCh8zEutWsECP5ABPc",
  "key31": "31AniZ9LjWwNUqCKZt3RsLNPkZYzn1jaEAjfM9hkjQrC6FRnkGpi1hnQb7s7si1KtpX6avuErSBj24YwKrFV93GE",
  "key32": "5eywfeoMHkHBS97iX1SPA8zno16w1m6HqTBqUaCDFJBQDQ3TFmEmfpUYZY91WtHUnFt6Hk95Br5JHFDJNmgtcS1x",
  "key33": "2ikrniXzt9JMPoBuhv9sG2gyAFv447xtBWs1tg8TqEwtkLwrbdvR8x9D2fbjnyFPMCJ5q1eHzgZjrdj49nFpQSmS",
  "key34": "gumQjTbuWnU792NGsN2A4HX9YfpBjLi63P8fqpxi3hXmjBt4VoixD3huF9zxELEURRMseYgjvktuY1L8yCLqpjr",
  "key35": "2g9iPY1x8frGLhHQTQc5CmT93rCD2rCXBN4fujW9XkJGjUMHyXRcRAnHTXxLDtPPRGM65BS1GCytXEu5Z6gFVt4x",
  "key36": "ToQfp1DnxS2zqedXryf6cYMq9rfmWMoqrx661GrfpdWdAHjtMWFEBdLAocd8dva3JYZjL8drZG8ejKb86pVVaD6",
  "key37": "5qw8Z9eMH1VrYmsGjA9apnbP8qtBdwF7Q3Nu5eD33KSoTSWknVnM7YUqxKEr9Qo4CjFHPeZj5unTtLXydSXH1RTs",
  "key38": "7ysFX8eQwh9fgLV2TUb9GrHmcLjpb9UzCc8HxedZ4mz5XhbsjwLjaDeH2AkJzUHkK83ZBdNrujrCjQvuRkyW5C4",
  "key39": "3xACV419B97bJG5GZCBsXRmDHcjo3mGC6ycEVp9kqnXwXApDczPg4QrU9q38xWM8X9WVHZ1YY2w5xQm214Kq7qm8",
  "key40": "2DcFv15RKRqVXastRZVZHG1YmoE6iPqUL4gZu1NQHC7hzSRvaiDwGxaoYCcPhP64SbvQkN7pzjtBV3PZ721V8FEj",
  "key41": "4nxtJkZ196fYzuva6C2A3mCxJDqNLmuT4DAZJmpnzD1aDHpdKEA2ij1XiizAiHTBdYaCR2WXmCBwoNViPcELZCqY",
  "key42": "4EPeozUW1e4GAiQpk8LAS3VpZxQDmA2Qbv6PGnUxxEJtF8Zh9DqSd4KvXT85zKWvzLTpcXHGSEobs5ibtebS2Rqy",
  "key43": "5hxbuQeEzmUR8vZSYuoGSbCrAKzZj7mtcnXYrqZweeSoxYw4wMcUXwhaY3pUte6L9QvHKE4A6juAcwGFyTez4b19",
  "key44": "38dsEh3dPYwEi9FnY5d7tn553xGvq3UmkhgUjg5DCxmUaNx7ZAQ5zC9ZcdXejUE4HxpuxoCCz2oZgcyBtftVzvWY",
  "key45": "5vAmAFiKSbds3wfYKTHHzQo7YQFWXYJtDx369s6GHuUsS5Y2bmvhcSb4jZSATpmWQJ8px28vdxkKdm3eK8h6fpCc",
  "key46": "5uLMv4NrGYuQ4W2WQtKKK6nuonihSRUVrHYHiCpEUPkbHLfkLwBVSFNUDkEkmNwM2AHAKBgxrCFVegi5UKnfNZnU"
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
