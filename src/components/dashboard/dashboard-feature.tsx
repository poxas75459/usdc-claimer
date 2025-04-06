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
    "3Tamk7vJACw1oLtGKJPMHcPCpJ32my7BPn7QJMkCDzBRQszEfYb2ETnoC4oYu5jcG3K1ftLnc4ZorSbMAKHBb6zW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "331tAWsqH4roK1MQ9HcSZ2VSAKxxfssvpGPsBmyWaJuc1xqEcbVvc3Q6WcPeNwssHDb99SJWUXsLTMGYMAYuG1Fc",
  "key1": "cvA1tt1gv2TZHoAxfNG56SDU8yky4sL3boS98NSMpyvhFfoAPqf43i2pwFwZLNbMar3pwn4q6eqiXcYGXMN8JGB",
  "key2": "4tjYdKkvGEpzkVguL1fd2sWazv1DAhzCGEuUW6DqcTw82LA2M1b7BVTDErMKrgG7DCeAmjU6LfY36srsZP3W79eS",
  "key3": "3w41hx3cHm3v3hnVRsm4JHxRscNRDRTG4TWpZtSJbfxK2NBhGqZQPhaAhgMq2rqSuHKiJCRKUCHHJQbQdL3VoDbo",
  "key4": "N4sWjbVj9NbXKCBdCGHkcto3FJL9NAcK4LnVPJ5XExcFrKxSLi3MoUKffyYxecsNWU4r6ccDVUvxD2UGyDpWLpQ",
  "key5": "5P4RY7g6PrBXKekhgeG5zbEDcSp8u6kXBNsUf3Li7SpRPNEtcn9ry9UeE9hoDDLVS18uPR5q64U6vvy4HaXxJ6Fi",
  "key6": "qxZXSumuFcgeKgKBx9ASLbsLNHH7Xy5HkLgnTmhEtB2SfQbjbb3iFYQDcp1Hoog5iU9AwpkTjLLpNL1quXwLAvi",
  "key7": "4CQ5kTrANqq2bPfWq7RPy5eXkvMm3ZyWHqgq8MM784xnQFNsNUUx2THEYNNK915CCvuWiTuCUuxugPE98dhHPGFs",
  "key8": "3AymTcFaJuHThUu6vN1t9mew4uQTBcMNfQavR1wj4N9wrNjecEFZvUnnzsRpwHLKFmQMKxK8YRiBg6fT7Mvcnu8N",
  "key9": "3PsvaKa1ZLg4w8wp6ivNspA2QDBxR96tsgNftLMPAnJ5R9kTGjuQacLdxuJrVnMvaqy4ApAR1AV4KeuweqUZuiuZ",
  "key10": "4hKqBtavM8SgktHaaA9fy5MiorNoLvPtS7p3DqpTUszZ4hDxSgW2nXuoW9KuuhCvwE5bspFSgqBTJtSWvgL6J5Mp",
  "key11": "56oCPEFjD7UQhw9WYVfdmzxUrXBcqPquTm57rNTchuiSRrsebu1Maf1AbC1iHwnz6zwtn8XXneBh9u8hMD1qiX9Q",
  "key12": "5pJbH3RqjsS88Xwsy5i37cSdCxKhg792fZuSbuDR5p9QSsGcR8nmwkiTvjfZ8bz8Wy6ndAVSR47stNonQ4XE1dEu",
  "key13": "pyoTuRZjn5VWbSQFNU4YnD6xk237x2vfuKcLV6DXkbaKDaqfrp9VdQSpH8afg4R9WqyFJaQKwLQFy9HPmfTKec6",
  "key14": "2Ls5sJBAtVHjcvQ1EvHi6MAdYBMq3Hhu9r2kjYX1LWXz7mdvpDeRX4jYYmxLd6Vsua9yi12tNxybXJ7ri35SoE11",
  "key15": "3pCz3oVsftxmF5HkduYnV1gEsnrkRNn6PzRj2C9EtPqsKNDACjydcuBw5XM4zduwPWFWzqKA8nu2siCK2cfMcY9D",
  "key16": "4HmydSknBYoaSuHha7r91Cfr2TFYWHD3cusG359Jb4EenCcoJtMeq2DZsP3enMv3yHNomnpW9rWqkBW3EcMVvVyP",
  "key17": "2kpamnpeXPtGYtS3WrdioVSxZtHgsh6VythTpeQpY4jQ34ixk7ZpfSbxNQX26JfiTXTRnghtHwvbRbYMA6xEay7S",
  "key18": "5ND2K2X3GkTUuBtfYNrLVY2p1j8JnaxJDNtoeKiyuVSoKThAZqWML6A7jS8qyuFeM2iqEoZgkbnEVWsfiQCyBNjW",
  "key19": "5YPTTue3FQm3JhDiRNTMyYR8kAaQtKnjTDeb68QXQjWc7ixTVWEVGnQv9h31zBvBYsVYazJvUyvcCzEausn3vjwP",
  "key20": "64QayBzmtA21gRQpuD32wF3YBZFomH5A82E7H7draBaSH2oFSQyLwBWtax8oEhPXDadfKFeFGmzYBF5VhJrmo6hv",
  "key21": "3yeNm8YYRgSvRqx2ZU2sjqxmUGECg2CqpZ8Fk5Do87ZpAx5vqd2Nu1wyJtqYgkeogyQVcwbYMKavoSTvqZDLhF1L",
  "key22": "2yMFzBZJppCf6hPmPpyxgpfBJL8rn5njHmkDez68pS2wGAgNyyfFuH7xHdxevcdP6hUCgHv3sSLtR9RQsxhfwUPZ",
  "key23": "3j8ofa4i1Fu4RCrAWeRGkdwVahT6u3ewPuidf2jK35goCwpL3sMw1u41YBvfoRMBHfJ3KtPNr8ohJ4j6MxLtdVgw",
  "key24": "34duCycCEhjFKvngv3YPPBRzE2qCWrXnka72u1eDm74cKCmP8XgyVWq4qBckSQytVSnAWfc5YYYay8K5GiNRReFv",
  "key25": "3e2WL78oTf8gN2WcQE3Df7Q3wD2E1TiWzVB35ayYiquor4DGHHKWnVtcCp2M5o7mKGYrkd9xhmQTyHcpzJES8WiT",
  "key26": "42Vev7weJ5tEjhCUmFNBTn2Vm9E6dmE63uHvvLFvdLLrVWgwnVKhUjUop9Ccipuvu8Biv7CV6dsxHt9NcCy3pnLH",
  "key27": "3PQLx1oMGzwvJ4TaffVJup2n5XZgWa1FTpEfKJkdstu1K6ngNc84iEyAuXYgqSw1pcaSiTCk6p2DmmEAGoz4dmp",
  "key28": "239SeCa22hqJsnA46AaHmu4beY6YMnvGEpa6js7ezv4CzJoxxh6SCgYTZxiRYei3SzPkgDxxKm9RAV3JnVMWihui",
  "key29": "b9uEaJguHaLgacCxAyjVT2WnQQWbif1X3VF4btEopijR9Cq43ZTANSnKTKp5GgyPzicqZKZH7NNP4MVLzsBRVqN",
  "key30": "3yRgpxniGW88QtY1Yb4RgGXFRoBGCxKNUioNdMNxoTREC1Ciou7BnYgE9hLJ8Nuz86jDkBSnk3REVbgR7EbGttdn",
  "key31": "4PNC8XHATmDvLGuiC9dKarvKtu3siaVvwbnAHpht3Y5GsjP7N2ThWj5qVenF75SxcAuFZKcegxismBZkcyQ8Q1uj",
  "key32": "49YubHUAaMLQpwJ3boTzTFYbexGDCap2LnACGTJpYD7Fz4HqjjTGnvbzcRKvsS1zM8ruD3tnv3WgvTv81MXtk4Q1",
  "key33": "5cB1dJzV5Bm48R7T5sFdM1TNUmZQGiphEVwsxCrwAvggWgwqM8Q7ehNwJBKjUbhVqCacF61PcrqqNKQyCHmtknLs",
  "key34": "hHFdxaLygnUDvTok7QoZEZ9ywpHfXKMhcjbvNjNYE6psm635w5vJNdqtrxa2RG9b2YrUMnSCuEkT3s7cjbEnVvM",
  "key35": "3ojBc3jEaxb2yKkWKhvEETYnXQYHj51JxafP2VFydoeqSuMGohR4uzm3mShXp6SkAx4Tx2whYrRu1mTVbcddbdhk",
  "key36": "4zTrBGcZqFpERHvMMypDpuJCnfDT9jYUPxVumZZMxhGoB2VBnkZeNzXzwxXPRSBDmyt2M3kzWMrzVanNE8Qa1enJ",
  "key37": "3z9d43u6cqB87bWCmX1c9TktmKQQ8oe1ov5AH53WtuJALwPJHiTiTmYuTEtHJD9WSpnaWPwdtrjHdxRB2AHmKEp4",
  "key38": "2X8khmbvTx2yvLZJrkRyXdo8QfE1SuPchaRAsSZ6gn8dD7uoqc7fYgppYduLgbx5kkaRDmUsPDnf5M7WiL2EdaKv",
  "key39": "3RDzyoBZv6uxTxqWFAd1uGq98XWxvhCpTVt4Ck5xPE8Lyk7TJVJX3rGSgUFZwswwNsRjSdUZiwGRiTMQFdFXoMRh",
  "key40": "45Gr2ML4hh1DLLLYr7CuNpqL418HiFkSNKeGCy4JKcdnQY9Vyod9CpiX7YFSMtNrRgnHw3hxDknTirgsr7u8uT7r",
  "key41": "FoqmUGmYMZVGC37pyR6zp8gSHtqtV3w8V3n2LiM8xyHFEnLCEc2343ta5Y2zy3CTKS4gn6fzUMFExaN69mBqied",
  "key42": "5bPhBqMENRzgVUSQgXGbRcMLvAd4Cyrzpq8We27aUnR2bkRAUo1VoUPJgPyPuoYUSM89EhXy4MCbKN3G5nyM9Cp1",
  "key43": "4ZoZH2kyvpdgAqs6xLsS777gSo4YikxES7AoHhXGtN69xi6LmhJJ5jZjuom9C7vUYTZjjxs7fEeYFZBYEnR6HRnz",
  "key44": "5eAzxB5SaLTkDXtURD7pFFdRKifo1JFb3fdbMu7oAczwt9Eb1suYJMW15CoWeoRD2KAAzh6bA8ND734GAywf45wE",
  "key45": "LEsfSzSJpQxsvPHc9hSdtRbmaJAkP6JEjmHWv8rDmkTCAfWpUmUcmaztXZ2nhWfjGhEfUpkyXtVQWQKCuNETuD6",
  "key46": "M36P5fs8gX4pTjQcBsPmvoddH2ESC8Wp2EK99TH8c1iqknF4qU3JHfCoKeCqhefmVUKYpwTi3sWPBHzrTWXtGPJ"
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
