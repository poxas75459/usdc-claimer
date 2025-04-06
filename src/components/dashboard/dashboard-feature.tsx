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
    "2KjQmiq1TDtNvr56BYSr3NSkGGAQ2PXPuvarAGpJ5b8GpL3Y4dzrrhntU5ix919LqcURUk6XpNLhcU2mnYqGfcXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSjhiTvCWry9qsBZvqYFYCfsnfUDS3rXicdyx4ACWiXRGkX8t1qhH1LuAo8BoRAGbRhZTtrwVfRyTPRfDnoG85n",
  "key1": "aysTD6gtyK3py3Rg6mZdnpsDPKU2dfmKmFgY8zk3dCDCRf6cojeWEDjNugJRF5hLP8KkX1m6NtwJsj5sqyHDr27",
  "key2": "5YiRg591L5zHNrcVQn3LkVi89PjjUzs1QtQLEurfnsznDUZvwy4Z258bjgYFvwzeRbukud8bXkkw7y8trRSWmD4X",
  "key3": "2p177Jz9tFbCCz7nZN9fVTumctC4bnBArTWxKsAdHH3ShtD7G6LyPg97LYFBy6TExFLfXWJEATEqjymjE3c8QpoQ",
  "key4": "2yXBcaBMExGouHVPcPo6ubwQvi8oyKFPanNt5XZecCn2bvgQFukysb67Hq3K1avnwshQcRvfbgi7MX5eRNjDz34B",
  "key5": "4XgAEYk4iRFsFNMdqfxkrn23riq4j4y9GSznMciBDCyHX5CaDN3pBP5rKdwnwhy4cgSo6gymNkzbneG613DFDKYN",
  "key6": "z3ccnG4LmRhmVgAURHkJXyAHYP6Yyug3qcAoRmM2ogdYvMx61mCGyn43Qi3L1KoZxCcEdHN1Hgburq9wrVKGyNd",
  "key7": "aigAWhmtKZgegwchEmZG7D6LMq612fbLE8bEsPbWq1eHBEbPFohS7RN7jAFCHhJiLZs2j4EqVgNyeLYXvFCZUPc",
  "key8": "2ACwMzzAc2cAKiXq4cE74u5WahXP2mdd8XwUvDUxrt5XtQewmMTKKsSgoVadkBFiyffbetezYpc5k8cCsN37aP18",
  "key9": "4B7AN7VBBHLrLnFnsUYXvar7tD9Njd24b7fNDhPQDjYuUihrQp6kvX76PUwCYvsqZetfA3teSXiZDQmUWBPHnxj8",
  "key10": "2AuZ7mEneUkjYz1HD7nmpEcMWguH7PsodyzoFasCxyHEaSsX9wRE2wMyh3A99srDwAiXF5sPZXNEJKqvc6UsVTZv",
  "key11": "4RSQMqyeSt12FhZm2kSZvDb8edtPaeeAYPvpRdffhW65psfshdAcWvJujzxbRWcNpRkxbBEGJb47L1aL97Sp3neA",
  "key12": "5tBt2ASYR69FXHYCpo76dM7fjjdyQ8nCpz6JdxmbtjtD5cVkcWEAMNWQmN8A3gcedbQGtFn2VHEZRmBXM7PUtyUJ",
  "key13": "2gBqmxM9MTTPJRcxStudpuU9yYGCSz9tw2Xiij5QRRRZC8gtFpXk97VuhZs5AvuqESeaLaH7ECGfAdR6UgoHAAvH",
  "key14": "5sv3zUE7RdhHneebfEQGjcMjbsBSKiaQVXcSWVPAq1RkAP9rzd8x2o2R6rBNisHHkZLLKzUq5GYFN6oMjgDct1wu",
  "key15": "2MKgtAVJ2sgNEpiMZNVFMMfDevqcXRALDT42HeXN9wP4rwZFAxMt3DNPUCTF6LHdRDwRkr7B6r65a3x25EHMHi8F",
  "key16": "5KHMrzw5eZrJV1bLvXueks3VNTEirP24u4kkmJXNDXki9kXQHzMJ1NP5sVpQiyvSxff9DA8psMzyeYrboQ3MiqDV",
  "key17": "4bHxrhHnextUNuK1wT8ZvQuJXvZpdWoCEax8i9siwg64zmYiLSU2MUmoowLazZEQ3gBjPNH4XwDuHKcLbPZTSpMP",
  "key18": "wCCfRqMP1XyYw13N8Uq56p9nYw4WatEBMHzTRWrqoEtuXQoPuu627hXSc5ZKFgfABev7Untji85V28LTEB4Eyit",
  "key19": "48AkoQxDQksA9c1D3XmsMYjfF3FxkpPAaAhnezVnztJsABdu4cug9Sni58EUBZbZsk1fEBcwNDkQc8d5hjsyk6zs",
  "key20": "4dczcA9J9369x7dKxdLRXBu8nuJFJ2rBjqp5R2i52oUf3m3heHraoHqdKfr8Zu9X3P8Yr9RqF3dMua3KfLv2ZLtq",
  "key21": "49P1mfR6M3L6e9hdgzSPKHxNYVeCTSTZEbR1o8qGE9dSpC9f6ZADF4Z3XRYg5XbcfjqftUPm2Hy7Uo1LMp32QG8Y",
  "key22": "5CXG9uU6cy3sPrrGH1dLnUJf86dNmh8bsaMShgsaphjhD4TpAKTKhyNNcu7t2tzRwGJyuudy3HJhLSUQDv3yp98z",
  "key23": "4QAkPbESTzowMXAu5j5zrSSNp7yVikRVaK5j8FVU2Kt7HdXuKqUAziRrFQTzWNNoAZeZnHkJYBGkAdcaGwfX1Srp",
  "key24": "2hoiLTYjnDYNxkjLvyoS7v9CUACHbrhWBnoA3av4LXA8Xo1BA354BgndbWTEZHAtQAX99L3in6C6PnHyEqSoBrDU",
  "key25": "wdX6mJ6Fsex18oen6bYFj71rjfuZdrqdT2T7oFkhD54LrehPx29p2QbCB6ZvgGgmyFvQc625NZt9iYEbXsVMym1",
  "key26": "5senttoepP3mAEsjwRX4LZYS6B9BmjcUkk9UsTAD7GQzDcHRjfBhAoozF3xCkEC7MUGPgJUrxy1ADj99gccdKBh5",
  "key27": "3V7tD7GAGrS3Mf7o92ANF4jP1dbtrb3ucB4F5BdKoTKdCxYJ7pGgoVkVo2cEbMgBK4fukbEWitrNcsFsMdYCMxAb",
  "key28": "36DC1z6MuSdisaxR8yXKaJw8ykXZDufunYxskGwzkvwPu4iN6hscGEr2YNdEKifzSdzJvHReYwZBnv5Mt8V7HupC",
  "key29": "jvJVzZ6JG1p3pSHMMmsX3wwd1Wj69fz8oDKS11sFvcF48caZavQordkk17fVqeBeHZLoPnfKiWkVsREpUcvqMWz",
  "key30": "3uuGennsqLUpvP3Nbv6ypehfEneJgy8P5Y1KvwqShJi7XhHo6A8Wgs2U5pN2p1DmnqRPPD3pFdXgctoDCzh8BW3A",
  "key31": "4RqyVVCyBgNteXuAQyZzyStAf7VPNURdGFacjJG25UufDWkTsP8z1WyyuhBGF4DRBSQNpQTKk5UWDSEUeHGqXjVg",
  "key32": "xx3ybkDe8axvc9eqDAkqPSpjqbwTnnzjyo6URcuHTxYYZPGEsWLyNnDGEPAKT5xgLMenAXmBuHPsqQ2BmxnEEoH",
  "key33": "2VmYihgxFEgWbmnLBmPoQAoNqFxnuwRDjLgwPFKT81zQVApQgTRa6u96F3xVKZv4Z3yFVBiBhA7rY1yP13PRqBb2",
  "key34": "iVhomn8zhhX5XehAPdvMRQTt3yaVwiXKiDng156q9bErFRyCu6XKTCsqftw5BXCf3HhaXoYSwauxd36k5qbUUCg",
  "key35": "5x3PFr7jYRfbhra2PV5RMEYwRqXjcmN6UA2YmtTFiDWeHhJMf679yAPpdB1ZDzeKxCe4QxYRZ2vXmqS9NKdQdyzc",
  "key36": "3s5ft9RXAukvxjV94SPtZW5ztnjeB4Vm9yLaN37E16NRqfFra8cFW27pvVEY1STBvc6DWXtVixFG1mED9tfZRJRr",
  "key37": "uWtBeUDjKRwvzRDHU1NLJPV1ZAzBzHqEGD7Lqzd8myuM28svQmg6oD58vijJJg2YJsu4zH7TZKtQvtdU5DwHbsg",
  "key38": "1pciMzx9TTevUCishZbTaePkuKoo94aAAxwrgZYQEL8aiP5FfsvKrVxHAxBZHwUNHuxpPgapsd5tygEkoHgR3t5",
  "key39": "4Ej9DeVseM8QrpCTEofyj6zKMrk5QDyCTdWLYbzLk2f6fFErkRGgFHYBtyPkA9ZZBqMPZhbKEBEGT1cyqkezxHWb",
  "key40": "3zRmwRXPGU4BnFydJ7Zpac3APanY79ynLeXihyAPuMTCfuX1ZDFmfxUmrBQ1PmVGaDeRH4R6yqwj1EJmeoUDagEm"
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
