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
    "5fz8Z21Q4Hf2wAyQb7AwMxKjzvQhYY3gBe6QKzdoemv7YJWZqmA8EaTmTfsUKWVcSJTt35a7ARxXN1Y6mwjb4mxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645BGVNxZpXBDebRcc752etCtdTzkssPScE6Ukv8X5PyjxLUFofYvqZ9LHmRZoPEPrkpaAWXnkrxrKbJr87oBKZ9",
  "key1": "3kWkz6Q4YQRSWtUDZknZdPPQLzLrknmWdtNCdwVHD2yZG8tNKAhBQ9LpJfeLS1vKURqdTkfarkLQAHDd739vmNLF",
  "key2": "2i4jjM3hFDLzSToUYppcRHYWjK9P28aeZZdR3gKha7DhmLsmyKb7jsBxSDjzvwtno7UTZfm6wzwVhMQ58ZkVXs9q",
  "key3": "4hbyEdSMWJzM4vSbTH2yfvnhD1w2eJ3WHMxKxjuG9YDLZFNY5hFy1zfnhVg7wKicZ9RPj2LvP87eW6xzUPj6kexw",
  "key4": "5LgXcG5KjUNZmTmfq5ULBmroMHw8B7M5ujBHemYALDPQEkeANZVyyNvSgof25zR1cEw7aGwJQkKS3REPajEchNuH",
  "key5": "5NtZG9kbEfQbcbwk34wCBdiSmyn5MSsuncXh1XbH8VGRWVcGPiDtDNeCbrrbMosZB4qMTtznqzMim7xvM1m1QD4g",
  "key6": "4DgGFcjQZkm8et2FjBpyjDkbYXMqCfZwweHF6YoQqhFeSEsNnLT8DHqFRfGTxU2ddRTPXbhrPKgNBSieczx4zzkq",
  "key7": "bzmLD5dpBFvz6v4gfNP3FSFdPmnxDL2pGUuG5QZQrCFxC4zPiUm7bJWBgrwS65hWaK2hopavh6DdA7a8LB8PYsp",
  "key8": "2qyg5ksxTmmT3zLJVVAhTSC4fapFBqUx1yEUFQwfdksR4e1rZesxK9oA22ZDLzdkUrrsBWqmYKBvxYip8SADGzsW",
  "key9": "qc1Yo41fWkpSEssfq9exFhHaaikx7dZahKN4m9NyeDp6A7xbp9GyutjZxCRkCCCZgcPR99Yzp3EwhNaTtkeq9Nc",
  "key10": "2tJ72LSWbgMeGJW3aSrCTYiztqzucjbNT9ALqBWpoWrETTUhyKudzy2Y8GRT3KypZsMwew5Vn7Vwava4W2cewxMS",
  "key11": "4XcXd55z4QCR6Xwx3AM3eTHkTw8PPiamQMaEdoQfcfJ3hTva3tn8HXDWbt1pdarSsYaBP5rvWJzxjCKmTsXGcZQL",
  "key12": "T2FgYDM6zhtYyEymgMrd6nCypgXwgNDtJRLpDx8LvcZ984VJTSas37L3YoLjBXCxd3Bp6RSD5sJbsxVeu6kZrB8",
  "key13": "4BEdkeuqbXqEEQ1dtoJogXWAN8a9MosU3JTXCccLVxTHKpkHn1L6qt3oDtbbD9Hpi2n6Ce5kQJ2XjVYTGfCk1Dha",
  "key14": "472UfXFSyaKnHq1fErUQLbXW1cN4goXcDrciF5ECkzqstCD2itHSw32Kqf7GBoxZND1C6dKUWSuDUa1bUDY3bVkG",
  "key15": "d17ho93FrLMyGLnLSAxugAS1Xgz5tcynGGP6nKzVgNnaCL6Qsjv19hc45dQvYVyUGF7F2Ddpk98aEHT1jKor183",
  "key16": "48dw5Xgp4vaW3FjrapMoaimzxbpXQLGYhKgks5QHZyg3ZEVwQAwmSdqTg1jAhAGVpwHytgvdXcWV1sw9Vv6xM7Fg",
  "key17": "gMs4JGZT4TNH8x8LpanMm4vkTqQoDW8aX9c131Eq26httnDrk5YBznQiyDch7hnRvWcCKWgenVSREtmWQjE57JP",
  "key18": "5yf3CE9ujDbYeQANSTeydgJ7TpeMaxn9842zmgafVUdxaCh65gFnjscf1Ngm8tUmWWQbZQRU1te3kmVt2EKBEfoA",
  "key19": "T3Cnyxj15bE7iFUU16YKxRzer3EnpfSXdX7yHPEcZyKcDuvF7a284ER2CPPv5F827YnaQoFeZcbLL6h33QLcADy",
  "key20": "3ML1zbjZJSAP3BxWbnExLXoeWmrPf687hKoQF1U6A2vxVGFmg3XuSFzWPiJ8T4rbxov3zd2N7BF5xuhEjPi74g6J",
  "key21": "37fbLg77JH268rwQDxjUSPfVqiyv859wXWWXLoL2pG3dE4qo9LABVcKjpzus4A3twkufXKTAYPL3Hvjtg1RQUuBi",
  "key22": "ZmPxq8kLyDpjWzZwJRAfDk853ZqZe9pBW9Ma1fPLn2z6ikLAXqjawr8wYxFWQ8HUco7CLacacHaiXX4UgEMPdX4",
  "key23": "Gf1P3rjYe1dGfQSQNBfsaYjscGC22SXpsagUbgEzmGez4FDrAU5XeFe282c6jTCFDGXjHddMhQai7VRYFy5BoBo",
  "key24": "3DRgjb4tfi2mCjeijppzy98WPT5GrHTedwKDqJ54rtU6pAy4bUXs9PhNBtLuR67TPefvFzhwPKEv1z1nQSrJm4Cf",
  "key25": "3tv6ei1demweS9JS2M2hJa1HwCRVHatbSLNfwRGJqxUpjVinazYTimatGVsPj5dCagViDzdkRjED2Me9u5zyjPYc",
  "key26": "S2yUpU4FwbHCUotBrnuyLK7YdYCh4Fawz9uCtZ22rQ6GqAvsRQrtPNDFkwxPyG5s5zSa2TvpyNK4QHuDhTvbVS5",
  "key27": "3Gxp6QpiRzhhCjgeJfAbrX1G8doXHA5rmkK6jECHM4zpphNcJcnGWUnNGQFdHinSmA6dSGJ2xz3hqyeUH6z5toZA",
  "key28": "2TyXECpG5PYGQCL1wRDpxYUPYoXY2EMGJaSCjib6UJya7yHXmRw7nyEbz4SxnxHqDZbMY44tPGaQMPZFd2FEASug",
  "key29": "2ES5GXdUupAErCPoiad8ckrDgte6AcojwpdMYPGR3NWaUmW6SkkDThYkX7f18QJfVLXVvBchxLMcGM4tWWwN564a",
  "key30": "2op6Mqd21wNLeyRXMa9q2cp59H8CojELB2z7x83RKCBUmNZpkygpsv3Boi1iPDQ8ZqA9rmwdMW1sTArFXgdtZRuu",
  "key31": "5CPqFVY51s8JBqUNu74U71PvHCWzT5Bq4fAduk4MWyMxgV5Xvya18Gu2ZZm6kkqv1AE7RwU8TFkMXxN2F1MpyCGZ"
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
