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
    "5exoGuDf4HctdbefMAejFbJT29hdsYrPqKYfX6KGvmh8dFkB5fT5sSCAjPyookMniZ3sGx2qr2mfrcoAhyK2tb8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kqXZhd3MHw6BBPVKA5C5ArJ7vV7zjzN9FdXZvx3VLyrM4rcjxw49EH8RLSJhrTJqatoYDWXNDAeBrMai7UeTiZT",
  "key1": "5QPeBJLySFJvwPoVidRgcf9s8fteV52RHY4oEBd2w1pPAy7pm21daoNUzLSGwU1EUxaz1SmsmXFoWN8H5PdzAZiu",
  "key2": "2fp5JaXghnefefJxZNUw6mTDbc9kbhj1mMagiPVpZMvdMrAakGvKbyK5myZG1iUnuLyaT2bypDqrogd11kayowxd",
  "key3": "3UbFwNUDam1pa7MA7xSWHi4FLAc8ymfUVFP6H63Net23e49WX12bYidcNCsLGwxhm9a5ciPG11oohBruLRXaUqSi",
  "key4": "3CsNY4o7hYrksd7YZALYnsmDm977CZ74TyzeRkVUHAz3tKrgAcDdm7rTecfzQsVZsJaBmUcUTJFLdDTQm5Y6rY8f",
  "key5": "VWLYNqcKS7FdSzqBJSKJXsyq1SHUSCNqkjMz34QWNgKoCq5Pasx9SbiUZ3Qh7oBEvAjvAzopRanqN1erv2PbHeD",
  "key6": "2kJWqytJTuQrrcaQ2HMhbcTVgTouw7NWW1CXgJXBqBb26mrN3ZSCwA4isukSwzbmeDAfNECiBRnpEjQwsoQimKy8",
  "key7": "zqfRMAxr7ohbW118ivP5gfYFoMvCAZy5DRppAZ3cfWCVZaCpfL9QQQk25Gfmg4wb9S5XsWaAQZMm9gyqCXDy4va",
  "key8": "2CyJ83t6fTM23pSM1ffARCjoi2pQpndgzy9rxqintupr9uQuevBpH2mtWmfxoWru2LRHvr9WETPDz7kwcS2hYSd",
  "key9": "4SJUqq8FLs6PuGArWvHSfi3GwJiSBCtWgH1huFbBTXTJWiKo3YhLm2GczepQx98A7QnnrRhvPP1RE1qnTAwVJMfp",
  "key10": "4BaztGCXJNU5TXjaKuRsbdCb18stp56AZJKR15Hvv27znv5Sa7X4pWSXTEJWbAwQVHZ6uogRJroaiGToN2hvtZLN",
  "key11": "JF5EqHc3HoBuGNrQSSHT8xGwWPRd9WR38mPzCKSj7bDVDTmKR4MyZQp14mJyypQM8fCVfJC2sgmonKQ3UahrwPA",
  "key12": "3oaVWR74nLuhG27YQRVUqSsFQquLnQ6sG4pCfXhpMK5tKptiViQvhSeNH6aX4eE3B1xGH7c3yrz7BiDnAZAKFyUP",
  "key13": "5WyPXdxnHbYspTpsYzCJcLQgBPm432kHHu8nm3FKqNuorvNXA8tTAnb9U2G2zZmmwvSLc8PumAQXAfqCkKErGaYt",
  "key14": "4XoJKc9sxoHH12PhnNm4tMykUw9jX8wbi6jxTeHiJFZX9Yix9MeZpUBeTbNSgvVF1onXzjTo9aSykXzn4s3BbWg6",
  "key15": "x6wxg8VCpDjo6Ga1yzBeuLWJsCJQbgP3PVSwERjzV2Mpir8wHTQHqVjaGUHC19Q2hb1LeNJKEqK1MTNqcbW8R6n",
  "key16": "3buvjoRbrmg696LTeekM6TatKd55XuSywLwxF6ovGkVv8fu5AF7q5Yxrxq7S3eDPy5ZkUKAqp664bXRT4cWnPZsy",
  "key17": "2Hb42CbzPckySkY3q1Br8WxWpm2PSAhKoV91ntUQxQ4n3urKzyGTWwHovpuMoYsyQ3ZXcEPD3t3FgVucGCoWEzsc",
  "key18": "DvfJ3bQ86c7o7C4pD8Rs1daQtUzXQsuyxVcsUsEdTZ6S7xz8skqs8ygAasgPcfqfUVkd3cWtgFzLXUFQMmokMHB",
  "key19": "41geSJtcxECenjgfteMSgwAM2b9JBmisLAGGauwJXbeceCYJHTwNP6SUQrRqF5tPpoTg9sCdyqnGhZs1xaXowWHa",
  "key20": "4NowmLL2C1Mf7MqibgnEkCQcmPwNnR4jsxd6eXGmvJ1sgevDQzMd2jRRJZXpbwdDqGprsLHYugcNJuSCALg5GBAw",
  "key21": "4ps5stKUYPokchofLAg139mSXfSKLsxiSUyXobayXNaRrMbvzds2uvgUVbp5pH54raKzaV4EdWTtsXvPBMPcn4Y7",
  "key22": "2UM1LgDY4gNSiT3UmRDzt22TYs6jxmwhh3sGPXGau3no1Z9fdmaR86vaPTwBDSe2rbyAtXSm3eBBqXs1kNpcZwE1",
  "key23": "5XfXT23FWbr34egaio4BFuVmkpbWseJv3YBesEQGNtw27YQH2RysTuwKWrvkj3qmdmwc4ZpNY2UEji1ZoFUMkmL7",
  "key24": "4AyS9vwNMjvJbReGc1J1618n1cEVxhqB8ULfsx9e4VsAe66xJTY94cMpZTdbfLf4VD4hYLmmkpvm5bJk9usT8LVx",
  "key25": "29eWrdDtStVr6tQ27qX9DEoJRCH9MbkodeD5qvz32dkkTXE8JRFgDRuyPcHQJ4F6sQ5AidtShgcPnw6eK8puxtjq",
  "key26": "4Y4ta2qRYYWuYEvEBDVpWPy9gaBg2Xx5yZVTaFUciweL3H1K4aNCqRqWRWzbKv4jrNkujrbW5oWvdtiA3dqgSyLg",
  "key27": "2a1br1gP2ziK22hP73DNoCNR5CKGMFyMLssNrExSobFExL3W98bz1HuwT2vg2rdxUQMCctq3R9ji4AX5fPLri2Qe",
  "key28": "a62X1tJo9RvwSAwnBu18bEVaK8HhZNjm5UjkCBZHBUuYkubugkULzbxxpKWCfCze9omJwADfQLrQReBxM77PnoW",
  "key29": "3RxAJqT2t9WFpJpZgCz5k2pjdgQ1ETwK45dv7xJLDcT9dm4V7Suwqu5UedHpuvpp1D6iFPZEzab7t54CN6TpwhMb",
  "key30": "WnzAVfHTMzyxU3pPHUWKuZJCS7YtpaSvqXjYJEMtQywjYhPWMtmn7e8wPAdpAfXigXbTiGdVXiB7arJfdyMbTHY",
  "key31": "2nb4w7uixGh5i2WskDPZYuaDExQ4vmB7BNJqqodfJZ9JZ4PPXKfZMXrZ2qW945xUAXkui7r7HK5S8ZTg4H74K1L8",
  "key32": "5UckfnsufUEc5t7JW6haeXYk2LhRGXT3mADEAt4krSE1ARWSspv29ZBFAHcx6HSNHJu4CeHfGMpzcXH6gQPbmhh5",
  "key33": "3qSsQSTv3TMtdc7G983BpdkresLP7Y3MmMu23NFpA3qRXTP4nSYHD88Nn8RccotQCstMXvFpDcpXFaqj9phoUyRZ",
  "key34": "3XNV5to39eiuedCt1oqE3WtLvv5oYFa48FCjxLmVAvNwX5YsVSbWHzezSnJa7gN1nYSpKEfX2UEn6tF9aEse2hwm",
  "key35": "4kZdKSGXVVPEh7wBoSGWTHj4MVRrKcza3NVin4fWrztAwKQkf2TxdWAHmJsXEyTfAuCeHXL8ndXY7BesJZxngpRF",
  "key36": "3kRe2Ln1ug7iHUMz9uCpyzNeQk9gCkiZRREkWsAA5WTZ4rRJeev4XcULBMdQUnjLErEnMFRH19wpQ38tYNHaBhmw",
  "key37": "2ugTtDUAhAjoPYdbY1HrzRgZTVzx7nCo8bhpwXT77fFhfaQVWUTVAxt13q2sJKsbELQi518gfty7Dw3n4nrExzq6",
  "key38": "2HB4wHivCRvQXPgBSzfAeZXhSYQHyXWHM7WF5EVbCBXxtA5BzaSevKqNpdHJY1ETNQrVGUfLPXLhPLFrP1YsdxUN",
  "key39": "32e1BDS5wdxksvsz86KNkq7rEa5ivLxBeH8uv2euGB3pPgAhZtFyk6wgcPag9L1puZQC5afTJ1jC32uxuvgkU9Hh",
  "key40": "4eDnc2e2ZqWsquAixDghF4MP76Xct8TLRuCqWigJhR4JfGgnDJqJhPzytMrHpB3UAYtUHNkLf9BGHCoaPj7XwJ4q"
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
