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
    "3UdD4SWsjthR1f9aagVWFtxPtRsEn33KccsARGqbxQ8z8cXtNid4MeVagKuktd5qecRrzYrvSnm2YpjESXLW16hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ka1w9oAdq3T4e16oqLFy3HKii9Kc3uCaqXdTRqBdaiQiZ9igcmd9DpzaZVTw56gkcm6qXWwyc1Bkankjp2x9tfN",
  "key1": "2S76YVb7F8AtoccB92w9wc7edia8QRnHV2EAmojeiNPRjcMUKicqjZhXDrxXgxr7GEVuyFwgjxKfQNAhcjF62d1Z",
  "key2": "2sjUcZpcVuUjKezHTr2Zx7ZRX4ao9E9zc6pScFCaPteeoKbaFs5WjZm5sKkyg6oRtH84Q6zkA9RGk1sQzdoLQjTa",
  "key3": "2VwB2iRPbZzKT2KAU2uY8uszmoS5Rje9v94Nfe5GLpSxSZXHieEQhHV9GgAzW7FsgcKpped6QFcSFyGmH7T17qg4",
  "key4": "KhMCtUoSaRAXgWR5jHqvvEM7Pf7dNkhupW41VK8Lj4MgjaWbA5iH9nnE2d9tUPwBF24X8bp8BcM8iQqWYYmAHce",
  "key5": "2TfD9ZBgnKrpaRMJKMqjgYm8Sn4JDR8dFjxd84dRF4Xnw48qWMuwYE53q73mD48mP8gGWrGfiZqyw5QqEHajATvz",
  "key6": "47yzDScyaa81WxvJDJVC1zRknbCN4KMxcHLa8MprKf5ncQ8e6VFTqCYEHPDGk7Baf6y44q3s4uXv7C6pT4Ki9aCt",
  "key7": "zZbqJrwNqobdfiq4Bsfwnaj8biYZA7ffbjF4kqjaV2jbsB7BLfgVvEfdbowAWTFKdX9puiEj7Wv5Q3xZyiKNPTi",
  "key8": "475svxzBs6Wer6VEdUBt21Ws3ikQ9kHP3b6SVh8x6YBfnCYR8nBB4o9AVk19HJmqQuHr5Hkyr7zeiWqtPWg6qdEF",
  "key9": "3g4f3ttui9j64V2LG4WmfHPiZWLx4RjPhJJUGK5bGAocKYnTbahyyvhN45SkwUeKBSTM9FvVVhHf8dcC8mn2Ee1b",
  "key10": "wXLTxJ61M95bxSkuMqjBL91UafKijWAsafxigzTkaEaMC35mdGzRk79bVQCD7euyijNYSYgFWd3SRcNEeXozSUB",
  "key11": "3qgZR7DRQiJRgBEyQm3Zbr2zCGSJwW6m4d5w6m8LKoUgguNn8H2F65U797wi5GNgap9Vvf6L4xmRjPR5gHdzCpaY",
  "key12": "2vtQvT8y9dyyH8YBu2txe54K1oyHAnjqjLGkdeQkfQ8JT1eDTgL3C5rGbafLA6CagS18Uq9QfBJe9G89USNLAhK8",
  "key13": "4ZWHtLtky4op8bePs81zPL65LUvCnA7Gr98sYBVsLqKjGgKopPchuugTj2C5JAwMH1bbzTqVqFV6Wy9xWrZN5Bsr",
  "key14": "8FwDJU4iHrdzUWQqkiioVDp2hB9H2nJU69CgepYcZ9bEeUDb2r1YgiBHXGb7DQNBoDoqZjdRYXC4HW9Ev4U88Vv",
  "key15": "6SMed5iq7zhZSAc1cp4wEtgtWRTD4ngHGhR6e6S1tvbvbjCYJnCaSp5qfkhr37S3oTAWiUpcvyQZ35MZpjRrv6x",
  "key16": "3hTe1jcr7edn3BS7UJmdHETvR546BDHnbLtaxZbMM1ZeKVH4CQCAmHf2exVchqADez9E7P87CgQpxUL7hA8YzBRQ",
  "key17": "5JctqYrN389LCbwDEymxA1eRRzoYPsW7oQYeCxPVEbZyDiKn5QSQoz2nMU9qRwFAvrG9fEvEHnSB7CqmBDpV7XDA",
  "key18": "3iL6q3QkCq4ev2BkCee1e3HdCwdCPRmXsw717od2qET9Bqw4EchkNdubrGMxBqCNWhnvP4jXbkiQwruoJzARRdGG",
  "key19": "2GKPnes7cdSkjBDcMHAF5iMKP6mQDRpD1vdiQpQ9K98JkxQhiUSpeioM6zBxMPiGtgdr6FqP6ojsUZ9vT73UnqvF",
  "key20": "4Tq8tY7BVyj18dRmkHymKu4ipGhipgLF1LGjx48NKdk8TmPTXDRYFBbvs8C6fgR8t7aQTVdzS2nT7eGy9Cdm5wg5",
  "key21": "2JxtDquzj3xNM2o8es6pJQzkXt6CiaHZhPfWiwyVDbNx8VxSt165ZNPm5iDrQfVkbLHVjgsjzcuMjq32ppDPRzKV",
  "key22": "5tUiSJXzQ3sfKEU9Fk2XGRrLd6VvPB9NN2rJzRAQVfAVf1TnZ7pXm2qyy4dRjutqzG5AqB2inTj9fgwhGjmqFxp2",
  "key23": "31tA22B2scm482RkER48eApgVAhfJHBqe2oLRJXNpcp3VmmqSKSz23Qwz96SBrG5Spad8bY6xhgo3nPdouq9Le1h",
  "key24": "4d1U9hn4nR4NY9dKHbJutLzFauGPJShUoG1aTLrxDCgUyU4DQNHyVyR4hLVC5r3ayJxQ8xtW4sB1ZxEEw2jkkGx9",
  "key25": "2Cxye5xv5jFXiVRzXP8JAfSRozknPLGPgBGYLzpaq8KibnzTpvGGaHhfPZk6HQNxkSJuvzJPcJuGGDXzjkhMWKtN",
  "key26": "bqY8wkoKJ2dwQmknbReT3Gddrn2dymTQcfiepJS7eD5iXgKeG24ak5zV8uZPKWpenwwkD4kC3Dw86w8cBpxrEnk",
  "key27": "2iHoFtdXpqQc2ctsj2KuJVcg2uT5sJgSH2uGBaZmpMV5YRf3Hczcg38DM1RTs9Hxoe4RXzy5qAiJdigGcrfTxo7c",
  "key28": "5Ss8DtXUjYsVV7eJemBGhSHkAZgvpFWiLCBJRtsxcWss3aDYJKyRnhpQjc6LHteAXy2aSJqJeRa8UHTSnsw3BNaf",
  "key29": "H9q5wNC3dDqXSQ7VVghaWBtcC5tnxdEdNKYDh2DZGxqjPKKkf9VNNC9yAb1BYVnfdLRax5MMvt8rGrt3f87Lbqv",
  "key30": "3FVJqQSLeJnxML1CJ5YXxQQPGHfcpCo2gfgSidZzyrJ36hHJ6SbqAYFoLNCFHK9U4cqS6tcUyGoyqsK7cL7hU9ot",
  "key31": "h4EFfvQ6cYJbwqaBAGFDo7t1J8yEEGtvq9ZQDtJkCA98X1y9RqpfspAeSUwYDJxRWZyeFyci1CEbZke2dgFy4PS",
  "key32": "4oHKfXTrhv6y3aEgcaXmopcxAgb8c7adhfKdMt2u9s93BRhTHFfergFoANte9t8frfPTGKr7L1pMLqi6TQFZZdF4",
  "key33": "4jjK9cHoJmWRh3Djx4JXB4ZH7JioGCTieiLrQVGds79L1qi2fPoLMNWyVkK9MwU62yxowGPcoQ4SN9rR7XstxW2z",
  "key34": "MYnJ98Gu7mCqhGNNsVo7KaopmmqzYMHAE8oMP8MnNEeYeH95UfW4ni4Z6ye8tQ6a6j91X6Zwn8tM78iBC6b9Cgn",
  "key35": "5Ttswxdu2oqa2nuSe6AWGxcTjnMttxGfGw69XjeYQijSUepS59e1msrhfLGuNjSDiVvpMLPLqhVHoJR61GaX5QHa",
  "key36": "3gSBjdxc9yUYPN67V9rmje37r89k2uJpAzai6gqGUSVSH93dUdgLfXXvuPvYt2aft5W5PnQhP4yHdng9FEtTuJhx",
  "key37": "5P1x5byorcutecvptiBD77orSMu9LLbPgmYr8doBTo4txtKs3eYYgBnvKgLE58AEBe6pbLDRevrWWCNJvpqmEZPS",
  "key38": "zPkrp5CchQwbS8A6HewAN3PX1cwsbnDsnbXT9k1tWQdXFfGn2hb6vTJLJhRNFQL9X675zeuGnB1bmwmXAV8t6FA",
  "key39": "49jSRTK1kK66b9VsPF7yyvr841ncWjnmmvFn46wrasUvg8Vy4vtpdASPZ8qfBk4tu1QcxPMVF3qnwG5sBfzYPiFp",
  "key40": "5sP5ztdB1nsfqjypTq1T1Reto2Ts2HHnYSVW85eFgtBpfi2NvxaSnFh29KXfE6mn1qqoykfTnX5hi9kvzASwcdHS",
  "key41": "4zDgaLSpi6umd8mTarHxzsTTBYmnv8p1S2dcQ4uAXd4C8YnH9X14kbDozQhu7zprwGY1f4Cd118FRx42ekV6TYLz",
  "key42": "32hrSRibUsXbq2uxWfCGVUhnjjTjYkpt6xRefu4ALREdBexmvJgHTzfGiv2FAnK6qhMXS4G7GJUKJ8T1U7o4W9QY",
  "key43": "5p3gopBTxoDZBy8crbezkBp4w1wqtHDGWCNMw7zLaBQt5XntEv3YLTutoUx9NSw6yV95cceRghTnEbCvQc7RiMPq",
  "key44": "49vLSPrRmiP51i77B7JARbrrUGNGUoqFDvwAVwAwWTHZNzgYq99RbBiKVAqGTCaNDrd1yH1YkHbP1YEjpottxECt",
  "key45": "LGHMuGwFnwWBrGJg2maGNya7LcnUKyL3eXu3WjgX6321pksigBEuJ1rzPKmr4oPeAmMBP3u5QzDpLDnPnvTbPbF",
  "key46": "397gavMmfzWM3goHHA9oSct8oPjkVJmVr1hNBLxNSJBTj9sS6KTyonKX9w7eNT6xr7K6Y2EmzXbXk3wrmfZUMkCQ"
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
