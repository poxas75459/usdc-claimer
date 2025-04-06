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
    "5Z5S27JHVn8H6DaMfjftqmFNEPsx8fLsHRfqV5bPMK8sAB3MfHcY56qFnCB7BDQ7DVT6cNiKsxMPSZ4AYM81gcx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ygHZ7cy62pTatjfMzqVWMvCtQbQ7QimCiweV8zkXxLF8XKZTEu4yaPePumEgq7nmnt3fn77RW9h4SFBsqPfmift",
  "key1": "5eSmyY3758RHyxP6fhVm8kmdSotJbRNy5dQdEVvvYtSxRKSSua9vdBTM5yeLThv6FgJ6LdqL7EvBxooyscSwBL1L",
  "key2": "4AwdMtKNpq1huUiRXpWxxNGPgGJ2MMXRomhdmeJaNqRKPM3ucCPHbmCME1aZrhPErAynZ8uw14kPsQHHapYgKDyz",
  "key3": "5hnkMQ4paZXYcPyqwZFSXhTpk63y3551JuzpJ4uXRfkSAo6fEBe6hvoV3Tk6CZbUo6A6WKBzXkjogH1uU9DdCj96",
  "key4": "2VjNnBUG4c7aRkknhsEMr1y3imVqMfWcnPk1sdJZKFnPcUaMq9UwpeYHFkeB7SLtMrJodhrzrAxVSpzjuvU3eBjM",
  "key5": "5W74spKVbosdCxd9h5S7tHaqeq6fNjdUmR3RQ7Efz2gC2Jkv75rWJgNvuPoVCyJQ9Scxd1ajVuDT9EfsM8YPrqEi",
  "key6": "56UEZ8TAxFDWV4PnbMLWpoGYMH3sRGETHC8kv26wumhE1QYnfTHJR1RD8niRWneYeHeVACkCzcFzv8ANBPBqbRTE",
  "key7": "FBCxP6qQ6hUm2vYiBAHuiai1kYL9JihCcuUb16v1HTJQQvStDN1pFrwfmS81QVq71AtaRy11yJzwzFSQwM4Czd2",
  "key8": "5oS8ktJtP78668M598hmWqZq4qNRab6ChzMJZ2yPFZuR8CtC8vMwCPQyQefRVZ7dxWho1d4MRDN8sJRTYprthLxt",
  "key9": "5eGWK9LX73Jcpa4t7nzMkQGHWDce2cLikJ3shtsuCpTvdqpEAjteFHzSuVQBa4wW6gUST3YbqpHhXKWAqYfWCREK",
  "key10": "Ey8UrHPie3UFszmrYsAqhpBZ7tXHduQw3tCd49D6GHvNEoCPHfNQwxRuFi4D8iUMXCa44YXXYss2m48K6Lcw7Q5",
  "key11": "3Gc8USrZRKjYcQmWqBsJ4Sn7R6DuKoiV1PZGYNYoqNdpWjE8zKWeHE4Tgb2bks9pdycf65xsQt8AbkrE2WZxoasE",
  "key12": "3ELMBn5YibUKB6Xv2wyXrnPZ4ZPmG8YuTeDshn762Mi4szypnHnBsXtL69TvJEKZopuPkUkc6PbGTvuLPacCjoe6",
  "key13": "3xXwLtL8LtmKw38ymWKLLHjStXCum4HtqHpESMrTVT35U1wxyyZWjoM8G8FxjKgbUv9RB8i2uNA5iTdLDSBe7qi2",
  "key14": "53QnctmLoHnY2RJ51Mc6WH8ZXPrLwGrSLp7rdDqmtcsVQPH5LNcnZqE8Ajcg6EuYwAM2Jozy47YDG2iSQzJU8aW6",
  "key15": "5AxJ6VCuJkFoY9sfhC6U3RMbRkPcXAtvNHP24hBb1Yp2EW2c7xWHoJZ6pCWpFapFgA4Y5DxcXGfziKDYbrrs9kR9",
  "key16": "5vjtgwqmDSqLZg4uWAvKZskSW2v6bTCDpP6D8jfgcD7hQbHg8AuFJeFs6LjXgMxTRuhaqRWcRKFqdrshi4onCWy4",
  "key17": "2warjKwaMDnPR5zBEgXdyS4Gbx3Vst2osAdyfWymXqmP5ML6EjVPh4xTBMphSazdi4cis18u6cUybsGjneZb4dGN",
  "key18": "ycYBoEHiCaBPGpAYFmckPPE6aPCS2Qed2tYFTyP39g82oPFXReQt2JMvZ6aSTEhQEm2JaHrgBRsSvRZGgSV4xiS",
  "key19": "t5Gsa8hE2NPtdGe3Wmb5B5vYYKzx3zZMZRfv4PsFjNSmc9EzqUNvr9NmALkZuDemoWScVCYEH5bBESTZQFBwJp1",
  "key20": "aERmybQ5p1NDfSyS1ahYZgEt4CH5pG8837dVUqmM1q2ceX6ZPft9FCMcqMJ72zJsHeZZ46NNm4RW2Sxgs29RLzx",
  "key21": "2EmgdR3a578gQUQFWaiXnHLBfLoy4Zp47ZmB7E21PNEBHR5eVkUyUQoUw8dtE31wz565jgqa7JY1XmDgAz8Ui73g",
  "key22": "2GuuEXrnEjXHLGtTgusbsipibBRjJcbHBT6HJcsgC6HwrgXuacd8FRDMyd3Sm6PxvRM2jGRcho9X8WgvAZZSN8GY",
  "key23": "66YtTufumJD1fT5UsM51eE6WnQQPcgtB4ZLUwoF8pbr6pGgkACBcbcJDSTKMibLqGTY27KSD2SxGUiZ6EcJxAcEC",
  "key24": "sL8W4HX25cbNkWSWjQgtJoQGhQH2CpDmMb3cvznzVPcXk6yYxvkokQFU2A3uVbCj5psqvuHQ2efHQPFiAPvmp64",
  "key25": "49GsbA46H9EoFdKCvhpNPxkqmtEYcUkZMxAWKzbn1tHEGXi8gHkapfFWB1Q2oac4oirgMC6qHJUBrQ19hn61cAmJ",
  "key26": "2pnao8HbhAYhkSmKmaT9HniAkfyJEAthhWPy5BqTXMZZX2QHTPz7zJcYLSy3GZcm7zceis5ZaXJEM63qFoYejDqG",
  "key27": "KqwaPXo2kExJ6GbKwKPuGYK4a6BSd1FgY4mGRtwL1ecC6d6LUDpVpHHFEoMNPeYcTJf3D5DY8Ay1rST8STQ1fBq",
  "key28": "Nv89B5bqw55enmBFo5Spw4TvQvPViSeEwtDxjL4SVehsk9c1t7qXYid6zKJ3Cq1mFry1MNKzC7JdssWR6wGsKrg",
  "key29": "21WfyZsXpui5gb7utAonRwAmfEsp6i7hy7zg3MTe31mYSDs5R3vuxf2JMs2dRmTADV64jFM7sPRfPUDabpxPJpxG",
  "key30": "5chRwqvjd3yj3t9xiB8vEPjKme7FwSFEiNZCg1qvsq3ozNX6BSLhrY1ZVLrA7jKztUVRRcwyuGeZd7LLwyJaSSRf",
  "key31": "3R634WBrSz1uX1rr7NCjiSwDf47i1pLecfnQ1KkxE91CHa1RwKagR4qYPDN6gafYUUwL63d6pkYbCyFRHi74eC23",
  "key32": "5aRVWzorY49WEXEkmydpNjFPRxypTudQnsUdZnvf27uLo8FzyBmyAKDio36heuKeDsN9SbffMYTq9Q4EGPbTPPLg",
  "key33": "2o9aanPmjxdBXV9m58y8jc1f5Z59QzppBRrHNwP9vdp8VKXpKjRuq4nuC2GE3g2x9WikjT9BEaTYBeXKUkfbzttm",
  "key34": "Cwr6u61rjkS5HByM2fB1NRrK8EEJXAhrPyBryi3h2RCyvH4Aiqkp5EQRJNsaS3GyhuNcUsJzeyAfPoL3LV1sy5F",
  "key35": "7gjjQgjjq5qQxctYLKsxtsUzgGFCHMTsF1JQAxo4VCJBWkjA6M6JAwUcYuAJwYtKd7AuTAVdAcGzMY2ZMj2Q8Qj",
  "key36": "2AR6mUbgGfunynGxoHEy6PAXXS8mQwubsCCHe6T14UijosHx371fastrXkqwYdiEka2Y98Utr6XSdgZNnm1493tg"
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
