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
    "2JEwc2WeVgGPqxEaXiLmz5YNkgNQLnEJbpEhSpUuuquFmnd3ndfYhBxMSUoKGHH6oVF8nqVpuEFaTEw5KszPeeh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2wfDaDnkzFo1yvFqSz7ScPGibEmB1D1UkybhxmWryWPhmg55DdpBL7YLFiLFBi2VNwFadaaPmpouimDrugBptv",
  "key1": "5968KLXwUbG1wUZ1n3HhB3yfDMGpDc341h1hBzUJCw2tR23F4dXZ8ykiXH8uytJGuUJ3jJDySmKMSyTDE5JnWJm3",
  "key2": "5f5NLvCp3YizKULtEc6mJZ24p16BqRS7eGZMVYH48i6vNQy4W3RoWarzyMC27X9hXp8y6XhhUwdCY5WdxRwZUZJE",
  "key3": "2rn218MLaagAMBdqMQzjo59qdhJeFRGuekmGc7oK94bJAZiJKzrGHgkzUWAJeajDCqmL2pRtfC6tAyXy8xpJXyrK",
  "key4": "23ddA3EX1UCGoHVSceRxmTWhBTDBCoupzT16ytSBaUqza3mH9qdK6g1n7HEfcDMW3eVPe4xTHmKh7Vg57RxzVM7D",
  "key5": "4uoe9shBtTMjQLTpSUL4nEnpsabrCmSGrJiXcjeW7XyuxvgZ5kbaMW6FJ7pXoFYMt38KF4p99Rh3tydAdakw1REP",
  "key6": "4fZN99GG3fcuKk1cMW5zCNkuLfajrpftKuBjXbxXp81hEx1qZeDEx9uJ2Zi2u2pMMrLaNWts97GoJnyV3zNQgmSs",
  "key7": "uEN3uvm9hYk9iHYHTM1JPUhj6GjMRJ1YEQnN1naiFdCPv2LxMkG5BbBXMpBSy8Hu7KqUrscibdYjucxaYqMo5s1",
  "key8": "4o2XTwFbxyvE96ro7Zxb8xqJmFBdXpwHSWXC55Z9gpxF83oee5dbjc6uKvc8LRsPX5q1vfx3byw2fLxaEoJPHuQJ",
  "key9": "4zCVHYuZNmRzfPzcWTUPUnm9S8fnV3FHGMR8mheKVFbj9vCWevPqfKeFgTPZWUx8PBUQLa7Vh2dWv8xqffYanvPf",
  "key10": "5KSQF2MLPdNTJy59JajBTipoMjprRX5Bfxzs3HD3S5MpHCEx7t2W1N8XHtZ3gqhjVCmSd3dqs8Ma3z9PMwpdjWyA",
  "key11": "4ucMqaSgMi6ZCbeEiaXqPRbsiE3wbSQgrMvcXWhe7YP6Gc1W3D5tpdSiTsgq4shREP7ZCxcxnQ5U3KfVaVZiV38D",
  "key12": "58tHWQa9xDEHDdumW5tL3y4UzZnpRiN9EAkX98c14uphVfy9c37QGEHgGGWQPrsqsHjTMyTsG7UXfAey7HVc6tgY",
  "key13": "5dhfgvHsdA6zbtGR8Xau8AnSZfJwa9PwhA3KTkfF82ThMTFd8MFBFR6BHWKYyKXf5SUZiEQWKQ9KwffjpewZagGo",
  "key14": "3BbVDUptavp5HmWgzcTJKpYsDwbY6CvVud4jzBReHKn1SmNZVjwM1WjXqr8ZBNJdNDNEpWd1uHN7hrAhCitNs8wR",
  "key15": "3DbcDaY9DwhV1aTtA44h2yFE7YEmraupzxMagcd4NviBh2YsRAnZqTyRCgw2o3yWe8GDofgZqyh7nhy3K12w6iE7",
  "key16": "3BGYnr2t29PLG3k7v7pMYuMHxjhFNdmxotSJfdriFZwWWgX9MZEd9kGXPNa1TM2CCqXCFUBXvF6UVHWMC2WZ4ySQ",
  "key17": "4ucBLVXZkmdB6vQNEZevwgxVEqpSEStXvE2CFnvj6CEdDZ9NJUhsHXZoHsAnKUVobJrMpv8C1sNUBzPw9kL3S3z3",
  "key18": "wbGtf1Nkhnm2gEZffiyyhuuNv5VAPn3niw2vUWwJm7pmYdFZtLk5ELLCfpwvDbcyUsqQv6fNkfSZm8KPRDNTbYM",
  "key19": "4BrN6KocAgmueJLiPjGudsPaacDDyr1za5u5pnEG6idXZE3bxYoWiJRjV1K8dExBwtH4J3ZUaE4h18qa8NVSMPof",
  "key20": "MHKyTiY24xUaf5fdAujQ3UkyBvFL8pKLXzkuRfGBwBj9NdxU7gXbYT4mbEBT41uP8GFbZg2JfUvhASCve4dkxLK",
  "key21": "4Hd96DomeMpt4WvUofoRu68v7MtX2UfiQRxqgrtsyFqrCXeCWGaPJdkHcV4f6tRu22BVQe9jPPHEqVngJghEMjwP",
  "key22": "5sVuJzg1mcAQjMYjWidFJfWQra8asCNvcfuZyoiCsyxyzBxSBQ6DeVgDVyShmLRZSVFNBUs9XYWVSfc3UgnzCDow",
  "key23": "3RQ8nbvHXMn51zW5ZgCPLaArhwD8ExRjyG8BrG3KTHE2FE8aGupMMtPw7id9qqmb7gNUXaXGqZs9GnKCQmzYYGyf",
  "key24": "5gk38P159PQQ26RkpjhnyYYFSSRiNrpUmQxxfMoGf65C2iWEvbwqK44QFWAw2PfvHD93WUT4cTQTm9TcFRJaYdry",
  "key25": "3Yu867Mbci6bH1KJknFTMCC9DuTkL3N25iSv49sNST2W1NZdHEyjxR9HY4moHcAUc2YS93TS2KJxP524hGma561E",
  "key26": "3A3kW75FN8yHX4How1H2DKfzeBbwPBncZoriaosji6kznpnR356irkpH4jzi9VetmpXEJNJYciDVtb2ESg6jCusC",
  "key27": "2ez6EhQ2pqTqmGPML8tAkXc4kHUx8uVSLtyQtHcpTruVvv2Pbd6NezLWKXhYBxioUzjqPA1kipJRq4sVJwDCzNoe",
  "key28": "28mKHGfN88sC35musnDGvb61z6VSfEWuynk9TQEPXzqP1zmzJtZtA8NgrVdpFJunddfAfmCZ572BdUDwk1SBQLAu",
  "key29": "5yPK7y6kTfcGpxTFsEn6wzbYLuA6hixLwLa6YjF8XNUasYxS7r4zEWfsxgUix4XajSR2yqqu51eBeYu7xTqj9Bwv",
  "key30": "3YQe2WKSABj3kWoS5Kn2aEza495niPo7GGFcPhCni4j3nK3D97bY1ZMeP4bddtijWerxUzvYnTSeNMGzMLcknjbP",
  "key31": "4m2tb4zTWuUUjAcPFD3b8sfFAMNpFAvYtAXUsrTtUMe9vKNyWp65KzQ7ywsN3gP9MpmamSyPgu41zQftKbjHddQY",
  "key32": "5ytM8keiVA24GyDuByu8n3FiW43SGphkYU8RgYHGjsfE2XU53nbnsaaEbaE3peoaW9HMpzKjWW5sZUr8YYxPbdVz",
  "key33": "EM5HLTxMXPjYruckfBDH2pZG4WgZeoB7iofDfcvPzupuUtbdn9nj8bNWX6pdkAwb4ynXfasSkqSsZbZfevwxgEZ",
  "key34": "3JUYm3jb9Zm41MuRGHXbdrRJ3ANhphxEXTEJ5YNb9eibB1SSuu9ChAJ2kvCVMH2Ra9r8tvG5WhzVC8bNVewDyJwZ",
  "key35": "2TckDcZxnTGd84HKGgUGt153ZhPMksGEmZcj2eX75eFTVCEeCmRh8Q5ZWbmkEE22wo1cwxvRqBDZvj2eQPYmioEp",
  "key36": "3Zp4HogvFSLL4ssfXpJ2JsQ92itWKwkZaCg6Kkg5TEcNqNrXo31xp4w66ym1gMd5DzFgdozyxpuktvwpgMMNZS6Q",
  "key37": "34x44Z6uSpVvyBdu2t38ihQRvSxqZ6dnuvjyviZYRpSt57KwNxGVxqGmqqVyeoWxcCfetSQyV3iXnYFBozTEntjW",
  "key38": "2eo6bJwcN6iPVcUCcpMUT3vVTU83scE7f8D7MDHJDtZY8VGTxLZFM3jwHC625U1v64q4mJ6i6zCs6H6C8ip8gPDa",
  "key39": "gyKuPzH9twkq1e1ibxU8wfSyQw2hAjnUbvgf13P4UWYU2TPpT7wwy562c4wtGFd77t72bVv54D4KE87RrQJs24M",
  "key40": "65dFnNcysb6jSEzYB6mjDiezUMeugPQzdDTU54KEfaLkHX5fUdxqojRM9i5QEakEcUFTtASGk7XECraB7H1BJRRg"
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
