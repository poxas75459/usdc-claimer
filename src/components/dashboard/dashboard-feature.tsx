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
    "3CJpRhPLmUuhVQtdsXUnsgKNbS5fHM3Yjy2TemspUL3k1bPZmtCjyS5a3u5DvAm1r4X7raJCTThLgJb8zXw8hmBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKFnt5sjr38vhNxh5ifUSPLX2iCYN9gwLGSLwJX3SPRYoC1An3YAba7rbVjsEvsTHyYRTkoHaUBytSUzcJtWeYL",
  "key1": "9ajC5sWLFgLoLE2DbYT5aG5kNWdpqWTVXoDLRYnQ2GhU2Nv72LTGcEt7LvxobNpA4xdjGqZJsN6umZPgopKPy6f",
  "key2": "4pTUxRiNtN9iFqCAZ2Cnj2c1vVwh3cers1DJLXffADjsvtSKRC5Dm91QQR2u6TgWQxCzEuNxA6WELa2iGaYsCYgb",
  "key3": "XZKmbW27vxxDf7Hvd4uE56QPnA68t66S5ho7ctE8FuqFrSGDnv9bM11Xn5rNCy2oTWF6k5jWDkoatQCfySvjecB",
  "key4": "3L1sYyYNXpB94pRo2FKBt2G6f79zuqMq5HMsgti1Au6QnQRAXPFjNtaEasVTicVy6WUc1WEenbQMTzqywu8vQuzR",
  "key5": "cXfusPEr3AxnrDac6g7n8VAMgpfi5T8wx4r7NLoQc457XM7Dt528G294iKfYWec4rG2HXuSkxgc3gtAg3V5fnKq",
  "key6": "4C7aB3er7wo5jkLU8zo9KuPzu4y5G5Zbs3vY8APeVLNbRFTaM1nwoAFnMzSvmpthf9mdRmvJeKF2YVtx9eUWgw3V",
  "key7": "DSM5Hsh3gwTDBTZeroa9Rny6kr55nsa66SD2jTNjmJQKb4ndqncUKjjNy87Vy4PJQDnMKztgmWjQ8fJgywPUnrM",
  "key8": "3aZBsoew2iyqkz5vU4scVKbQvfYAarr3BgRwypiKhGvYmmZJEAiPD55vPfBPP8JqFg3j6sA3u1GuUTZVwkvgxnrN",
  "key9": "2jgmd6pyjCUa5zqkwUHP341iioBtyHJ1QSzh9FicdzqzDikkR7qB8Tv5MaEFFr3ykyP7mi3DQ3aMo23995CeJAvQ",
  "key10": "ydNfRc1nnmgzAKhSgEP5TibjGLaEn1VPBYJJiqoPDedSXF8NGkvhBqxBGdHdeP6t4h5MJ6h8MMjR5ZMLWYvWp7a",
  "key11": "4wygaCtJoZ4tYxLN2bcjMmzmzToZ5MuMMCizpVPmTjoX5T7SGya5zq7pqSfPj9YryVUZ3u5y47exXZQ9eUDiZNFx",
  "key12": "51E7Pg831ctug7FkdVRenVgEfBSb7s5NAhYmCLvyFGqKfTxEAH8FgJvUUc5PHY9iDprzSjbLMusMvwnzpiVMDFwy",
  "key13": "2GeP5n1wKirV2vuwAfbomD6E75DGMwhr9bw5dfPsfnro5pdoEB8YvtSuWWgn4q3qj68o8iUwc3qaNi7KcQuWuAUb",
  "key14": "WQPtfd5QZJrDEXB75brc9tSUpt6bibXV4pY3G2yjejNXyuMNPZu8MvT1FCHFVnNmM6gHG2PARCLN7u1D8RRPJdw",
  "key15": "2k8wCWdLBXx7k5VXiLEHbXFV6JAfYSZfPmXtVsuhD79P9RVXHoo1ymiZN2nVNkCqh2r9nVuHScxLCgazsNr8TDQT",
  "key16": "3S8k3W82tMbrjcvdQTM2dTTKeUG4Hybbs4z2iJzxfKmLc2hC4avj8GeBZQzegwobYMr8zNV3CJZnL5mfmL3AHkpP",
  "key17": "jADPi5jMFfPoPByqdAedTfDsP7NehUHLZN8kR5Z8UZDcDa1TaPMPnFgyVYD2ik8GrPbRriPTLK15Nuajg4bLMwK",
  "key18": "4pj19phr94T1QuawjLR5cTWEBcHiP461na1sHwHWdua85dz5FHDcANj3HYsktEUWFeKA4DmicLg8Nshkf5Cg3RLm",
  "key19": "2GZq34oXJ4LednpnpJNRb7Mddi5FNWA35yQJ8GmZZV9uDBDchdom9NKBSvhptRGvPXRntbAHqUvi9Euq9tC4kwo2",
  "key20": "3yZktu3UL3qm73mM5q9fZ79TAtdWuAbbvk8QdsQBmt979KxCsHSXAPfFheux6zFMT5v4gqwY6HoXmeR6uJF49bCJ",
  "key21": "4S8Hn6DQSevhYPvV8WPpunfKWLbFNHorsX5x9DzdpCwG9AZE6h3rFj1dDMz5jiYmnGD6BaYTsTgTmvM8BZ7asjZp",
  "key22": "MRLU1U6ti9Vfkd1cTzV5ipMpmheCTh4GwuFxgyCF2hjgpyrc8oJAc6SztQqy4eyPYzoXfbxQQwy9zFghwFvU92T",
  "key23": "4VJSJjSvQyrfDU3rkdvqxHBBg8q1mYPegJWii7ENxxBhiHhKb2c1CXecfdbSjV7mNrGiPYAiUD4fic9V69NaLsum",
  "key24": "c13EDeS5XHWwWQzPB8CMB1hF2dFSLuKM9hBADmNr6T8QVn8h5DR4bkcLmHTcbiGKb42p43MqKjnmEszvvbwtttK",
  "key25": "3ytovVWgc2cbjFuoR9PGmp2ihDE5h8HoYQi3iXSkCDE2DgEeMZz9DoYkUTJdGh6c4Y8t3vWC64w7zEaZheSCjBn8",
  "key26": "SnXHqih63Q4n7V3BBAvUVHxXQiZxoEnbwaXXCwRzpfjwkacUnYFdqj51LvnTxMB5vbo1S6e3WKBRVDkMD7Ws9Dh",
  "key27": "2ZpxeUS6uHswsqCPPbMyN6B4XRjuHbHnteotFQdhQDAngm3CTky5FJcQqF5BS3DEedokq6oGH4EVq9xPYHVzqmc9",
  "key28": "5YGvKD4ipsykhtCMNKankxGY3iC1SYPbnSmCBYiMTim5YGHjsMWHeZRQTkGh2JjQYDyPMzquPSxwzzu4xczagAFF",
  "key29": "uMnKYjgyuDkipCW5xmpR3sAJRq7UbF9HqurimTqo5kfZets43gB8SL74r8A8pDmPqMngaLdxksdsActFCRKCUw7",
  "key30": "3nbFgdhDZmhCNqEZoMujtdzUFRBZWUmXeqsbVnQnzQo1NiKjEDEMmHMoHTSAVfb3pnPArGMgzoc1PYrkCP9mKGin",
  "key31": "3mSGacnLT7TdZBoHrf1Bgz2fnCHzNWe7C1TnrU2K9BeAbSmAH8aqxZpZMTPZdSs3rXQpf1ZKs6W5kPq3heYBKw1",
  "key32": "4dRNrQE8JnHxbwuvDCPibj8P4gCDETH8AM2cA3E6CS7gjLPxRxnkwAef36fBeoRudpiwzpdbAVYkZjD29U5ZSUNo",
  "key33": "8cezHpK7EDqivA3VgRd1gFTFLZELysnX843dxq8uYJgC4cgwrBYL4kFhcn1kU3XJ8Se6xgdB4vft7vUapL9DHof",
  "key34": "pLb1jrzDt3xkEu4eqPDfad7Ed61MJTCYP9iVnq77zHJz6Y8B9s2QAUjtTdt14Ce7JSikGM2PKZCffH3LDVzVmi5",
  "key35": "WE452wdd7691nZ4uR5aTTzrBPYEQqm45BzLQZEFJroWwzq9hmMLTBcvD8S5cCPCGtwwctzsMbPp3uiDXurZrCzj",
  "key36": "3sLViE3KzdKyCRhZSFPFJb9uoLW3MnJeXGSn3uifQKfosBz9SNoXLh7fXzsDLjS1HEuids5x71gdbbSdWNgHjGvA",
  "key37": "qspDSkaPq5yBcdnQ6CKs23DBYxrr7eRJD1EaCeV9qCnpWAn7K6Ug9zxZmmtRfd4TBgt4ufHtzKsLKR6j4DyPCSR",
  "key38": "469qrzj8wYkaYEeKcdpYMYTnYqP39oNg7GyVndMY4PTiDg51ggLFYvvDkv4oeJnKG4sH63yc7RBK7kfnJM8TccKR",
  "key39": "5D1pqebMaauDNV7HWsDGggew4bjP6Zux64Bce1sKQXG4aaGyNEUnoAo95wjvmpWtUze4tFUtBmfbnRUvCfLGaoME",
  "key40": "o33vm83bP22pAufFqe88y4iYfS6Ci3kdrVCWrZsNoMSLuiqs9TSDA4GRPg6xGRUPc72gi4nGCAhVJn5aQqd2f1M",
  "key41": "4FMoy473oY6zTcqhfqG4nhdJtygrEviV5r1etxuhbJPx24Fx2NADruDNccy8MY1czEQWcGRGv9SbSCQcy8tGzGEC",
  "key42": "5M6xdM2DdhAUXEbcTSdhboWHf41mKbBrKdqYeMZTsz3REFEPWNgRymVT4cuU3355AVtzGHW3VCwL3Kca4WJpEPv2",
  "key43": "4yXiLyED2JgAf7gyoyaZYdjTk2YS1rWQDhSUbdiT4p4dviyBCYh13bDiAN1MSBHwpe52TPFLtELukAJpVuorNy3d",
  "key44": "2DBtd2AZaxVFfN3i5QRHj8cmeGvw1Zsh4XjpDKWV8uHwP2sjfENdwmhLF6gSFXsEuQuAsvFySRGBd38XcgqjX6XN",
  "key45": "61WzA5f6ayfWogX2t1bN4Zyw8tLgaB6RByiwDQW6XjXNxZs4y4MNhATh955Vujdv7j8EjGFVhHngLabMFoe2w4vT",
  "key46": "29PPbBjhLxsuRVVMzJap3jSVCr1hCT4YkY5igP7N29v19wygXFiWwXWRWMwHRCuaNWR5QPjF2t2Tg56d14Xe64J1",
  "key47": "h3Qa4XmdkyCP5kwiHqbQbRvBgAWTZtydm6nXyjyaz2k7sFprmCyvjNj4e1KKMmC5uXFtSX6BqDkFDZZCfPCfCrj",
  "key48": "5oTGJ12kTZVg2vrPoumeJb7UuVG5uMcGMMf1aSUToD5QiDCk4mbCv8c6DsYEmUbxt3zdSFcPdBy8K2XhWFSAS8xu"
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
