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
    "3gQzBt6jcKDLUZ26ZxcYgGzZNhx9EVcifi43Gt12xsGC8q3PzqeQfaLtfUjcZ2Qso8FBTa99w2P17GDM2DK9vP5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ewvgcSRnMNcd2QwomZeKuriTJRv6XhLYPDF4heq3DDdBkLjDJS13jbhnW3SKmUohux68x8sJLsKx17bff4qkxk",
  "key1": "naM8iTPrr5BhvHYdmNBLn4CektdZJFXAp1FyZdxNg3oSC5kmmrh7e7kcTDVXkgsPgWqchmmZWfhjeTzofz7XUdQ",
  "key2": "uUNLyZbSDg3osFs5PfdHcwzpz65KVkwtE7c6CJizb2Bi7rNGHtCuLYG9WswTvGsPHUnwbLWsbprvdddWgFnofnf",
  "key3": "47VJWiu8C4v97yyvM8Vasi8c2cFQNanFDKKLiuXhGxNUGxrgUtseWknx2QBVfMTn9bLkK1irpWxjzrt29kr5Jkgv",
  "key4": "wjCawxsH5SBTFGqvNR8r699VUw4oQWg6tJwxQwKSiwDCmM7jJeS3HLVym8wFSPUWBEZbKzUTySvdyjhVt5nJ2sj",
  "key5": "5BhEvgV7hpBXX17jcT9Ugq8Xp63aw6KqFZQ8xBKTsg155n52V3GZjADjxwcE6wLo72YEJtf7EkxhTGrb3oNmmpPg",
  "key6": "3icGGnRBL1LCRxJc2jtxML6f4DT3RtAGpNvzu378qEv4haZ7qh1DC9W9E5FQt58f69xzSZu7pfkmpDSzMWr1W7hj",
  "key7": "3cpps1WZMYrzb1r1gFXtTQ6tCQkFDi7kF4cfZPKJ7PBJW1nG9J668EE4NP4XVhY2EW3QGebWrS81ApsEaW4XBWh4",
  "key8": "5oo9niywq5LczqTg18JQ1byo91NPf7pCQRYmcCa7Ep3qgXpYsNDcjMmYGuhcXqtQT6Diq6NUj5gqsdZnUWrJrjYh",
  "key9": "5YmFgsrsVDDBeL2p5ehe43g6iVXVgp3PZGLZj73G9Lt5zUBAbkFmg6gfu7VH27Gr7yHhTQSG7ghvBUKjqNCENhk5",
  "key10": "1VXxkZaQ2RytJRGExhos7yjxRCVPrLz5izZ6N6wmHTFuB1hQMVeYNQafSJRn6WDikMskSxNUjZr8W2Le819L5Tv",
  "key11": "4DvVuBL3UV1bsdNSgC4TNXnPYjxtdqP33ZXra4V4EuXAynxumX2Hwamp3vmBfwghv3AFMp5QdYrZ3fSC41u5841i",
  "key12": "2UrLo2BVMzzsyBUUYcBSXo5gpg5CvK8ZawPp9BYXZ1ESw1YYH9KthNiUJuVqThPb9jcTCfjx99NUqXcjbjWacecC",
  "key13": "5Y6xcRGTMNtbmE9PuNfaVimmLG3vsExEGHGEgFZ7rRV15if85dxLRNGiJm5NZ6rvrSvqbnBF7wtCgbXa8dPeJ1bC",
  "key14": "zDg12j6X6pyQNHphssGkgga9t6qmWfuSrgMV43mzHAPRiQhoApcSzSysRVKz7TuChix8L2TmvxwUv3BNfHphCWc",
  "key15": "3jo2iYQWdNRkRqzhxQdBY3qNEKwf38TS5o3UNdFqLxKyRqgohiKzco6u97t7X8Lt2fZFVLp1sxYc9rEueJK9jeis",
  "key16": "4wLMMQ2nTzaytpiEMBEVrpcQpYGBYXB3UqTZwaVZMTjgajRyrreGZY3Q3FuX6zaf8i1BPTaXDeuvKzsBeBCBs6WF",
  "key17": "46UMyfXznWeSoRKAqFqgx5ri58k2YkmmVSX7aTBuKKYKED3SeCMyiBQSt24FdPoNUXsF9UhiHMqHGpX9vQ99McKN",
  "key18": "2zmJaufE2mRqvAEGWh7o35XVgwk3XrgcVNbAUcH6EF16auZ882Loqscca9Y3RT8ZF9iH3LwtNdyLhibvpgESSwhK",
  "key19": "5rXuk7x7DRqUzLnLnMELrQV1q36CuEXhJfxdErVY4BSUQsMh9TJFcxYWtc2d2TQdTGmH7Fvm6xhArrdxG1SURdTg",
  "key20": "2uMUMwevJQ8tWNpmvThSoTUav1FmTRgan8PupHLD6Y5KRCngqFXJ9HagMnvJY12RYqRGkk2VbW3ErSSEmNUPwQpU",
  "key21": "5YHBDZFVYhi1LRazo4teZfFfpUQmmg4SFkKeTUVCbRxxq4qQg1yCBXqCGqv5fXdPRyph8VNCqdcNJPZiVE787uNQ",
  "key22": "5K31WTdaWa38NaF6u55Hu4vfcgx4icGU55chPpBdCnrGcLc2bGWqaUE1ndoVK3nY49Mxyd3dvayHb4Uh8Q1nESA5",
  "key23": "iWDhP9ZENGY5aid8MqgyRDbtxQQwfEHH71E1FPgmgDkvwuDAJ9Mkm1jr23hZwwrK8aBa9KMt23pAbiCeUe51whW",
  "key24": "5Pv4CxUrtoJNzCY4tmQTd7quxLSWfTm5mKBSfBHgFTd6PuSBxNynP7eooesiXw65rVm3xMyMdm8tvX19oQV8obhi",
  "key25": "5UrMXvTSe91D3uZ9vwgoN8QLQsextWXQ2nrEaWFcuxLjgc4HgCEsMNVow6zpwMDURgjZQ6fTuBm62XDpNbLyq1YA",
  "key26": "5VM6hbgCR6J57k9j4fRq7hjdVxf5btjGem4JEtYvcMsoAF3hjS68gnNnMpekRFXxRL8FpPyRTyYaMoUr1Pi3AUQV",
  "key27": "Cd3upnvvpzHPFrXvDFCeXxeds9fnLjyxYCzJ2BA1snbPBxH1hX1if7DRocA1fGkhjaKEUEYrDKRSvzLAxTLCTyv",
  "key28": "2kFyc7WrozJ4EnSSW4tZgy8tafM3ZsUW9uTXjm6bcHqkSNkn3L361pPk3LjSJBpmudqZMGf9AB1SWnzXyxDha9fw",
  "key29": "21JnFEuXSpFbLkGpnr5RUUsEX58uX52MQ6ML4GNuWzE4xYt5rjsWTkQFLN51QF5RkrGzw7RK8Qucpe8XuSgUNk8R",
  "key30": "3Bpr2Kdw79bXxkjGUEwcndwCz4kNkJoW2naeAQFDjsQNoziyZJqoNRv8dR3SCC8J8gTnbFZSYDuKMWNqvFuckaH6",
  "key31": "iZ823PywZPFRVYxkchm812DQNDWUb4zfQF6QNZNZy1ijExehshtCGCjqcVxfknXSLvfMmUg3XPQrkue3g5NZd2B",
  "key32": "27sGAzyEoufwuP1HeTWtykTYrbB1CRKsPLFMH5kqfajs8j6sXKWeGHmUz3gU5zp3W1urrrBxCSDFCV1c77rRJZGA",
  "key33": "5oCugDQoncKP1zRCkqavPEhfgK783673G7NDAnwqJF89A5Vek3GyyyJtCy426VgWsRQ9RayHRXLQiXLfSStapNjB",
  "key34": "3G74MiVFjxqbWuXG7B8HHNw8RspQwSvKKZ6kwCf3Xr4iD7PbxztmJb4Do18xsBJd34PbfmUbLw85Sdx7x94CMovZ",
  "key35": "2kqg6t7e1MAixVq7DP9ti3qi27ahhKCANj4WY8EjxeAKENUgsh9w7jp71QW3K7wJ4YYBsueaF9Ei1sSyDuSunPQk",
  "key36": "4hU4mDgr3VziSnNfhqs1j8C68eQGgjCWcUi4tvDPxcXrqTQvEv2Zq5vGr3Ysjg27eZycwHAH1k2sCiSvmhbWvy2Z",
  "key37": "2ws4xbpHgRsVYdLuCP83o9F8Ep5oNTEBmxtAe8JSoLK35vLuyMdsb8epyzN8JfFYXD5uKFmcqrAP2HEeXGVLpoZ5",
  "key38": "62AB9AzmuZtPjACSGksk3VozKKnMvU47UGbf54iVwKjvxHfPsmSY4PcepMXqn1Q3G2nN3mYJksh4GNN4ryQM6Wi1",
  "key39": "5kQLfV8egaWAzo9Adx43ZVejW3oeE2jCpHL6ShhDwsDyNZw635yYidkS47ibwBEP7iBpHjHp1ZDJQkiTZ5t23rTb",
  "key40": "943xoo8RCrxdA4efZudewGzQZoLUXbNcsiAMpZ5dMQmutZRptKoWTXpGeLaryC9WzU7LBMnSXLHsVzLiS9wZjgz",
  "key41": "32GQV8PxunZm2vJyLQpEUbGvcWYERmz1mSNePtkYT2oAf7aptGWtDyHZatVn1omcEhMK7GDtgXbCNQW46S7VkG1z",
  "key42": "G2ns6ncHSDHqxxdaEHgwAQQ8wZHGsVvkXhvaoWZizoDgfFVNqUDZ3unqFeCJdZoN8ofExgS7dD3nJ4iPR7uEgQT",
  "key43": "5bpuQPv11R4dpYNATa7BxyW6u2Pk1wLENw3FQUEmAUHD7mk5DE9vhYHz9J792psFnB9gSCiFuWNq2dhqEyZXzen8",
  "key44": "4MPPn7BGGXPsGkA6PSQVgrJsgdgPeGJ21XAhhFbxea9DjWwG2VaF6cwcEBLh4dux2kDmBCghXdRiGqJRmgjkWEB3"
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
