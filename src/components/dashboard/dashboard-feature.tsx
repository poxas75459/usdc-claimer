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
    "62B3bVZesZ39qcE1pygVon6n39EEiqMHXDqE4nQao33TUymKNLjbUDovY6LKGHGV1u3j4RwQKte8XWZfmuL9pvr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ELyZxPdtDhnjxm72aGHpHRDh6EhEnWqXFi3kHdvzSRygWZGstoezUaMMqBExjZzZg2sQA1X4P2oxwMXgvj2ouR8",
  "key1": "4rXaosyUtd3ZLpvF3M1aZHkXCnuCZZy4icHmuTUCP6JeVJGLDYHBVAxkGzNsheNbyeMzddGaDQA7krQEDXKTEt3o",
  "key2": "vB1iuNJ8m6idC8Dp8q9jwMxXwwYh5RkjLj2hndLj4f848DeHqWqp1XCHVHzb38AXVyUX7kP1Lg1VE8ypby8cq16",
  "key3": "3VAzfgPdCvaRAyz5Har4txGE4iZkAkybKnzN4Ga5DXNgT9TwwxPFHxkSmgvz2Y3BmYCspmMHMtCAB2kBqewyqyLU",
  "key4": "5hhxRT5w2ZNkaKjPQjVAEHeg6b1LSJDnUJ6ceMbcqkfXFkpgZKqnvm4SmppvfP8Xcwg3jeSomagy9ynS8M4LX8Rd",
  "key5": "4uPZCHMa4MtEMQEgKpa6CWnGetroU4fDn7PdGceDHVEzJRm2LBZxXhAm8UHnqmzsBMDbxos9cJ6sLVBevh6hrc6x",
  "key6": "5BxXLedBnUxtNeAi49TRu98Hso35XhQsuzoPuLRFWXe91MHnPZmCneJZ1gyxCZUJ5cuoyTbMJVqv48sTfEK3WhUW",
  "key7": "35DN34297BrVHzdyLrxJ3HFFRJrQJst8iZAEobA5N2nK2M6Pf6Gheu8o2GmkCRTQucv8rKm6b67c52tHZwsUKCjk",
  "key8": "4SUZdTv8CCMaH45TGsuyLWhbcD87nmj2ZZmMjzSukGBiys58nNA9Pn49c8z7aXi7yF74sTfRyfZ7q9GDRo3vT6Dq",
  "key9": "2aZKkb2kK4btPdPsWGMtwXz5EFM9KJfmJQByecpiEGmZyFPJiSi5K7pbkrKeRutL8z6yu5dYjEZzjCHy9jhP6Xr5",
  "key10": "3bc68Ek1xPa2KFh5c9GFD3DAU5mPPFHZhRYBkGxViSXEBfxCkaoWVjc7EhXpZ9n4qpTv6kjPF3XJNiqDrg6hEH2E",
  "key11": "3gqrYSpXii5jfq8vgj4uHYwNjTDzJ8QsvtkYXj4bgZgCEe79ZDHg8Loks8vT6EWspC1n1bYRdDPDNgDai5vFGV7Z",
  "key12": "3F62nUW9TXdEva97A3nQWCnEz5gHfNaHHAwgWfFxKVdAFbYoPjEqkaZsDy6vtUWD6MQ7HgunWbFAUjqUrNLCWxDR",
  "key13": "cKh5hBFJKqQvBD8UEVacv2jMSjssemqjkNZrwCRsiUpNLGPhy4TCnPkbGEbUmGwDQ4wNGhu34tgUwpmeLJ84GrF",
  "key14": "5jCxwY2WMtybTZYjd9h2Wq44scgDm2r4pdDjrmnUXg8avPKH5UVEevJKEJrUFd1GsWMdJ8we1hJJeFCqQHZgfAGm",
  "key15": "259uCZsdY4UUdMDN9e58Ma1s22Ur49PvZr4qqbD3GVRq7oSEk5fZ51G1YDC8axPDtvQ5vtGNctgc4nTuRYVRR7WG",
  "key16": "2QFZxyPKFL6s8tsCuAijEWu7nwS7hdWecpmjb6Cg6ttQuQoxxrjKBgDNyUJSBZEuczcnLELjaRGcmF7cnFTym7ua",
  "key17": "DuzquJJmsBRpwUvnQo24Nciqp4XSd4MA6Z7adJNJLxPuujsGbDZKkq1PCKxDtKTvx5UGxqqesVZYTSvVozCS7To",
  "key18": "4TcBAZK3y8madePWe1TSNxpU3zy4rTeK1J7wB3655P2fei66QNx3EZy2gTbi1iR1RVoqNGSxUD4Nmw1fgR2wS9LF",
  "key19": "eVfRgsCHVEGETeEMJu2e8JKaeZe1bfaq3X6aTUm262JWU4VFKdrnBgHZ7FH8z7ttmMQpcks1g9tmkM6HRuZXp5V",
  "key20": "8yXpFAfcMftgE7aFUp18nh2UfgJx683KeUinXfCc7v5BWBW6xfgmm68oVGTcPWvcTCK9n8Un7ZMTimsQ4dipxdk",
  "key21": "HPYZNX9sMSe5Mba8r1W2MjAxBYyzGinon5DoPydmvmhvN28LVcbcBc1CNqNHH4sdp2PaAqMuTZfsDW79HG9TKg4",
  "key22": "4kix6Qgc7JQLAR5fFH21viLCY5HQYbE5VMkALfa8CJMSXWVQBwekz9aUgZapVAwxYFLXvbjAnUWQ7dZN8aHmjnxJ",
  "key23": "4anspYJMZbMobTSjvubfrES5NWSxY7mYXEzzLtT3ozVxkw9D4T1Wt43HgiBojBBwzHzbCjZXppa41Q6hreY5dfw",
  "key24": "65cxhCd9v13fjB2VQrKBabB2G3SiTEqAn23U4dCeKeJnfLT53hDecmiLweXemg3xyM1Q869qmZfrLPGaBbGPFmUm",
  "key25": "4t6ZcQLzUHdMMEkCWL4z4oqEZds7NbenSKQ5b3eBxUGiBfKB6ihT4zSg59vFzahrtacuRTHzMjUNvNS27xgR59sU",
  "key26": "M7Xt6fMQQkNmj2Vy9VAxZCVLqqvH9LYuCxcb2KmCojo2kEfduxtiZimwkqTU92U2Udn6NEM5jWKLjhVfADaCZEa",
  "key27": "5dpjqMt1racRXLtsswEFigNrczm6UyuzYfyZYm6FJ2e9HcSyaS1wFZ25GuS9HA21GWjANchSdYKagryCzFwGWQKk",
  "key28": "2vT8D5Gabths621Q2be8ZTeJT6jd52rPXqQT6JMbQDkvuiBqaySJbUsJ1HQvR6dfjNRA9L3S1Gzwi45QF69BADTS",
  "key29": "dLCMsZjZkAsYmqCixg2PGsmHKgxYVyeLX5puWaNdNrAMFfK4BCS6SY3LxdnQRdtEvDPg9dRCUf5reQAQn986y7G",
  "key30": "3NYiDrMsrPrp5sWALmMdDFBT2GJcAk3xEserYr1WJf6tLanEFZasbqN1VFoQLJ8G6a6wPFP77c3WsF39pzMeonVf",
  "key31": "5yufqTZ6U1XXd82xCc2vwTh6M2DY42g2SGxwxq1WtBDFikiKyuNFsji4gqy5VMKxVyyU6EKVcqeznZADQbnDyPij",
  "key32": "63WE2x3AYoSfUC4thJpiJEB521iwEhgrVcqakjk33Ke5a9hFFVyAcVXE4r72NQGVjqV11z9SUJcb1oGiS1qta4uf",
  "key33": "2SoZSwMTU7WDNVAZWdbsyodw5hFtYunN2bPDZmNXh5ngpCADf2ky6Ecz5xaYRpTVDseNXd9agNbn87TMKusFEi3W",
  "key34": "3JinRjQjUdAhL3kottq1vWfxtnoRaGB8BEDvCokeNSLefjBZgKDNJiSoTrPtmekvHMWcBXw43xUWnKzFRphjaH2P",
  "key35": "3WcPqo1mWfWVGVHnkP2FPUQyV99Bjaw7HB7FNnU3y5bQdXcuH1VDeavTKLtMfHrVs5QDobXfqTNngYhPpd2MGRei",
  "key36": "38VyfcAFMWUjF6SyK9REQfGbrbhxzX3Zb5pZqPFJEbwMCsDXXkJNJcwV4zcCXenFPBf2w4LLcbvQNLjc47fFVSQc",
  "key37": "2V2JQyc7nscarKPLCRWssF8e6S4wr4NwwQ13UjnhThWHjGVgokf8vyw9pkEWLMkP5ksAWYyqck28mLrr9FA7BR4c",
  "key38": "2Q6xsyueT8RR3uy1W5kBaqjasjPPtGWGd5mhQrfQC7fGc2U1sYxeV7dDT9X1SAW6cHrAtTGiVHsPBs4eZRACGDhd",
  "key39": "4iRbT4PhrV7CnLQfG9y15w4PjnKfj8oEhooo6rHVSMyfYrMM8puATJoD7v2x4CcJREbszzWMfGRUkN1JvLC2ghRk",
  "key40": "5xhjy2SH3wXWRGXvyUFMVU9wTax719XZqX3xY6Ds1RhGGcWHyj2kTAfSLuzUggVKNjwCAhtqspRVs5E5LHWqApdB",
  "key41": "35ckZ6TiJfbaqUJc476DDDQhxDp6xMBcGUEJUsJA4VoyXA3McksneTnrdbTR2EcYufAwJWcvomsNT7ucHFK5aUgX",
  "key42": "3VAgrPhNQ3n2spKRc8o4gJZg5ZvKsN9S5dqZtZ9ghEghMxEajetMkKsB8DrVRpu9LHhJh4UX6JNWAWhEireQZ5M6",
  "key43": "5fHx3gQinsNe2kSDYK31wAWvT5Ez4NAyp4PaYnN2LmoQzSJ1Jk2mzkKubo9TcusrxTFamUfCwksypzdDraxmnMPz",
  "key44": "4U9kRKVszrFawcGrUjHBeQHMVF1SQYpLJ6Vc74QjpFtryxdBzEsfqyfpoGm4skKcQv4ja7F1QBj7E8iQNcSfgY7G",
  "key45": "4TndJp4KPw7sLj4dyLRJaMoSZQ42RE3pzLRyK4ApZ9TePf8dsxHG6GFafCd2boZ3yZAQsz4TCmJoTWVHAWo9Vkjb",
  "key46": "5CDYd6MAghr3K1mKKH3dsEywU4X4GHsDHjo2G9F1uAXsHfp2hAJZyLmYNeZr5UnEHyodPD4yAnAUem1UNd2yG44r"
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
