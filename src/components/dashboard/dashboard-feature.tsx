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
    "2crmnVSgd9j7FpjErCaZu5UmaWRtH1iYWW7KGypXk86uCvBSSHSq1Ytc9NhJxbGKJJZ4xT2iZBRG1ij1FgUCYwM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CLUMgB9gboT2jSL9Y4XyAoxXATPVC3mxKokJLczHmtYQrtwD7dYGQRwkzA598u12kFwQPL8N8bJmGedCNicNfQw",
  "key1": "4dMnEE5Jp5yutpcDbeMRgRL4rRCP9xjKd9ogxDRie8n4VQ5G4GMDwetPTSzm1CesFYBrRGiN9p6iubv4GNT88wEn",
  "key2": "qHyFq2BadQqbNqUfypKSTw1McqithbswWFhc4G1Bw9GfY6zxz64TWRJxNZiiJurwveMTbTGWERar15ypVGCUtRD",
  "key3": "29GcSF8s9zfEvdyumiTi5Rd2YYJkSiwVC28n97p6t5NRofUHediozK6iDTqo14ixVDrEWBRu3M3fGnzv4KbWoWH7",
  "key4": "4UbpHPoUDMY7BvwUyznFbKtWQYMhQdWabQwiSBvM1EM1eA9M9fxfEWeY8v4AMeo8EFodt46W33KovLP61YzKSVc8",
  "key5": "DGXB2Lb6P26C1dog8rfJMtNquqxi4weLNXMeF2fySCUZyjTA9J4noYVSBggtHBDWvBCBQMasizxv6wizvX8STB2",
  "key6": "4XEiUd2EbeKEdBB1YdFHHkhjpEejHxtYaNJz83uVsZ96diBtjBgRC2zUiNTN48c8ctpKYqFhC3x8jQqj9XnFqxsw",
  "key7": "3sVHXydzZUi9HKBxc9bACe21iUQ46wXMYeeGDhBtiALxmfdE7sDmqqT6ZZ6ek2BpwodejfeY3cTBAk8CMx12M9Lm",
  "key8": "5HD7uUsYRhgNaU6PH5mq2wNe1szQyrRv2v2DxCHqdMXTKz4ijYMVAfifHs59vu6pJxboXTwuRcaBTz75ct92AibJ",
  "key9": "5m1XViUVnkQtu4hXi3xaBCjWcon2eVfWijBRA27YNFs5ZzQQmTECrFmA1RrzCafqFJfRFkT7nhMH7xcx5PrReH87",
  "key10": "26WJcfceYpWxucPQf1yxdYMqpkzWw8SnKgK9uFFz17VRP64idtPyJj5Z9bvzy1UD2hbPe6oV7iHpxrVmf9eR5hm3",
  "key11": "4AsikoW7pKCVt3SJuaZTse7dkdcTRJg1nLKBPBpxU6B9MKBMLpAttUShXdGSVM6dNSKMSBW4H9j4Ck3pkm1UngiQ",
  "key12": "BcXvSbczdej1Z6xjAZu3W7RnFJT9MHAKYcPXHq9dxX3UP37EdNthkjMUDDjjnEGazbvCGZUbcqQKuMLRUzUBxMD",
  "key13": "316GxNWT1zhTtdjWg4PMjvGSACUjNHBcdNvpLkoTmNigS8nph1HX1Y1mYStzjFYo2zcwmpHNaA61NKmm4cJrqpgx",
  "key14": "2MNsjkZN67bCjp8XWPz2QTbCoqTtqJXmAJx3jp9LpV5ZCsvzCFnpiE9mRzwxWmnRWHTSspNsCkT2ywwAwosxxBni",
  "key15": "4YEoUYE6Bs78K71UJQBToACvARmUjSekA9hEdtzmxqtZdruMLVLgCkzi2Q9GxshPfUvRK9jkVQ8wTJ77ksdebCcb",
  "key16": "3ABxsJn9qs7ZM6goCgmr8Jptqog6R1W5uS6PYnosuEYGKPVJcdBrUD1KcR5PWnbDVY6XEUss6RH1sf8zaLPW7Mub",
  "key17": "4Co2yLvFZzE8krLMEp5L6StorXficBuyoGq58WZUHFBvdm1bhJM5UxauFywedDrz1HnBCYSRax1LDgMpmtUTx3CD",
  "key18": "553wttFZvnXGiwRQZ4Yq9mW4jskvcrbb5UriP3De9hznS8poY5L9sRZgPih1pcYuAHdaZgz5EL1q694seTAceb64",
  "key19": "4Cs2QAdANda76papuGzS9Meo9nuvWFMsjDNKxHSPgNt1bmzoAxFcVbMQkudiey4jfnhAFiYxc7dQADLsAHV7MeCS",
  "key20": "57AFpoJ61RyB4y2HTEwwAqLztYENSvFNY5SLbnopFu3Gv6Pt2Met1Kzspt4rtGErjYhNGcKkerjWJyBytwbtauUV",
  "key21": "2tLyEe6noiKqsUeZnyzWjmaii6w7cbnCpTfCQnm99hiiU75NF4bkY1oESzGAVn6TYsKLfF4gSP9AdNAiWaHMAJzB",
  "key22": "4Sisyya2FTCjJ6gZLW1dC5WZWsHnSfnU847mwCbfxiBnkTyRnEUkNcGoo8dh1hWLRmCUC1srrXQEFapRNU2aj61q",
  "key23": "2M5378EZzRHfSP37YhHynzvjNaa3RrCWRVButacLmbweEGAh3KSu4cLL2pfD2gCTPJk5dNJk1SWsfgoB4bHEZi1u",
  "key24": "32dtsU9Uh2V65enKDvEXXypxmsC3Eo4xtkYgaPtsFjNXo9pS54TFEauuFrqmUehrP5sgv6CUukMWj9m5KxwgVdWB",
  "key25": "5rQ1vJ5bkwh8GjFzq7CDJps9mBR3Bj6se3CNVqL9ctD3jjVboDT4LyAJLJr54dhUur7MDa7VRMm8ZwoV18YrtaDg",
  "key26": "wqkT7KjGXGTCawfXLm3cKGZyyCAp4RygTBRpDwKWBsBLR5pMQSefhQ2k2o7Fv5NpZfxp32dY9G8kxN1Rnp9nQaT",
  "key27": "pudJ71qmsCDi49dw9AETrZyBsaF2MEz6HR4DKuURrAymZqYVLaswTNmyPXoUsx7x5Hmf3knJTnpSqJCEJetvFwi",
  "key28": "3g3eRHL2tCNE4dywJ9M5N2uyw5kmohiTKLWfAUJJmYL8dVcG9yjusSpejUZc7JusQvUec4e2VA8JjsWZW3AvskFN",
  "key29": "5PLWt5UtJytgyadHQL2bwVrweuZR83EocaCXaS42HPooJz6fYavDiraXB3nX8Goc6fV3EtGZiH3RBChvnbHTkPbt"
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
