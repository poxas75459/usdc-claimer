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
    "kJzLYSaqSugiJNHHNDPHAE97coJ3vc1i6qVXJjENfodM7XRVbiBzhcGUcqEnx1x2RQ5Y9qKc48TAagAJwV16NCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJjXHEyApX8LiVFCpVfmStt6TaT8Ldq2uVdwGLhJJfJJmagbkhu74csE1c714tmYk1Drm8kNshTC5s6eG2bUeam",
  "key1": "5TYsEV7YT7ce7FBYcNBktQCjpEkJbP347gkJRM1rNkJbampMo2GqE91MU4GySiNApdRVwhmSmHSFbPLGN8eoqYU1",
  "key2": "349vxb8geZAKBuUa5s8gPcnQSvqJtjWr2yWJvXEtVdn4qXsCzfrqrCmR9i4SdxzPJGay1DAM6R9aMFEXUqusphbN",
  "key3": "27pk3CUV23bY4iKkoTkeAGKYkBGH8PsocDkq9SEkVSTLv4yKYgJq5Kake9afXpQwyS4NwjEYQUjKBo8HiFqCTQ2i",
  "key4": "5gi9RMTHxth1iSfn8MuRgPTon6ChCjXLVdWYSmhccVdsopVcKHaMeSAgHt313gAxcn27nEB83Ax5UxF7woNYh6G6",
  "key5": "37B2UFsoJnztexqyyTbXbD8rbZ7agJ1RMuAg27WuYYvkg3S3hnQ7uDcLbwMt3VtAF3iQcm8ju4PvFWZcgoAcfg2x",
  "key6": "5W3L1He7Lt7mhCeJ22yjyW4dpbUp77RnwxHVDNPAVAEYnrVPpULvuUkPbYUmp62i3anE2aT2hdH5VLQ7b7CC3Ygo",
  "key7": "66NckR4bFN2GJtTbtUTiHqyuvh7EkC6Avp14XTt9EGR4t3JiyT2xbhqx6yya6uxgxfkt7BQdPpCQW4n7EpRsGXGV",
  "key8": "2QpoenGuZ3p3AFynCUrR4sgoihQ9eSPJTJSUA9EatA2U8Qgvzw88pRwZueqG1zESsmnc2amuwfS3SC8grxYcfzJR",
  "key9": "5YmGQP3Kcbtf4iErH4Vka6aDC4A4v3fgkpHdmV9Xa9ojvcQYckRv8kxeKMytiphEGEoVMTW6BgcRoCXSiqGWyuP3",
  "key10": "PeH6Z1dHjeH2kYPs5Fo2s1oN6BBN9AmrSEXpe8ofEmv2oLqgBnS77k5iWB7hQEscdSL7RMoV79p6iFTpFekrx3J",
  "key11": "3iCY2tq541A2BA39hASUJ5pwceAuZdojnmwSjMgySXemd53KrVBwtVa9oZoAnxSxLiFEN2DfAbMjcGpfnCLTevWs",
  "key12": "4JeCnYNdLiZzxbfzZRixrGbK1g4V7QCVkU1x3SWASTEHQKpUeADDDxotYr4UmQxwZwrEwGA3yyo5G6K8Nc2BzqQi",
  "key13": "3PiSmiARjZe4sgfruvens6X8oNpuzBMgVAtqKT6LgovWBWPoFviKjFTJjUkaBxDEzBcnV2hZLgjWphYhPj3Wcp9P",
  "key14": "4WNsg9rQxUzJ2v7d6QkCrVs4KeEtcPQLHUX13zTwfRFpnB53XPugsMjNszjuf5cVSqh5hCBG3BC9utJYR1iue8CG",
  "key15": "2jguppT7ofsvzahLQWpyLNYxNr3GAfCVEH8itB9SUEqQCNTtkYUj6Dxh82jjoaottZRXC3qpXYAjXWZC933LNqm6",
  "key16": "5tuEpnJpssDDfByny9EfuoAgwJgDwEYT41az2tPFNkcrhPxvihiUiZoAmwaDVdBK1YqPMnyfCdoGA5m1sdCJVSpj",
  "key17": "4f9SDByzVuAgwsgcK8K2xgnpVBk6fhaaitKq7hprtix2EsAvuijFd2xSLwgPKeWCyWen3tsNHRLbaNqmdH3MzERV",
  "key18": "4gxeVGkWAa4TrLPdSJdJaoBbxRE36pWUiA8emvBvMS6NmNJbYNL1KGLjXeP4oy3TRS2LRfanWQCqc2y7QiyXiW4Z",
  "key19": "3bU4tXcAiMHnSsX4w2TxxjLivfcXbzaxDwKRX4CMc9Xi816psEMPveH3Egz5q2jbwXHVKUY4nvcvJMh36ZHCPy35",
  "key20": "56vwJawVMS5gKoA7Lzr47sM6GjDZCg34FUmCdUQcVn27cGn5yJCJi4wSUQ3viXGLSqZa18APQ3gm9hkW7BgB3MF6",
  "key21": "4PNXTVkCPMgNR1hFVbkCWRAcsGhrXEzS3cqYdGTpiuibzvnRxxuPxZ4XAGqgcTPQSW63hhV8qEyBZjCkMf6oizuP",
  "key22": "4voTPPDi6tkjbyRcLtR2ayRPRByXYv1i9mn1G2SMSWrjb3PpaGNGrj36wbo2GR1i4dgFdAZTrP1Jt6EzSrHnVBCc",
  "key23": "35qK5DfAmwbsqCbDx97mYxkpGFcDGLDbSEjFNkq9Xhn4jc3s6voLRWKWQmja4Wfgx7WpvTUfN1eVUuQDVjv1TPxz",
  "key24": "31AZ5dDi2xpjiZJcNfvBpXwerkFggLjQJ7jaSfP8f9cZjS6hRfHtkXdoLfTPPEj2Ksf2ogTSdCXr2V4G8QRX7JJG",
  "key25": "2JDEyHiXyCbZu92fdCe2uzJTzyJEsxKiCCabDYGTpnzTxc4mMhVzxDt3U9zQjcVPGoH3LHDnUPrbwp3J4XoTR8EY",
  "key26": "2y1yueGaWBDgz5e8mJdq3nH2fEVsAzmBCD8vS3d5JKjGr1JUgfNv5Uo3e2U6nhjFgRNFcaVbNS9w7wetoKBSGy4j",
  "key27": "3ZjvAvAHm2rVK2bYRQfqPcMp4ox5gwfSETPFZRGRZGTrtWxGthkJGgaANFTZV2xqTKWfihvuhvVqArbgTT27WajW",
  "key28": "4s9D38s2YT8HKHisN5QL4PPEEpnxxZJYG2V6RyBU98BJhx18WSfDM49CWp118PukAYeGreJpUzd2ATKnhesjoanY",
  "key29": "4ZAMwZyRKHVgif7kyXW48GeCuvoGgdTrV4RGo3hPpMHsxu3FjezPATDLR4kU7VrzMHrxHSxB3Sx4WVRjDEyVTtHZ",
  "key30": "5ev9R2v8zY6rsAGzFj741tzMAybzNrLMnKHmyApVx6v9tQTHWsNT8sR6oHxKxQpmPcmF5oancSuj1ytRZ7y6cnbS",
  "key31": "4pPZhYkZvT3FpE5suS5ucWUmgBUPhsaSv5ThcC9FuN6sR9aAqaA46kN2jT3UdHnYQW8b9iWAVUue3NdQg73Nktj6",
  "key32": "4A9emM9UPt2Yu5ypYWUwPnuCiusJDTMiVTRRTZaKqaWep7iSguyWMt7q8k1qMB629cswk3dwBRops2N1HYfTPWJM",
  "key33": "SoVozaPsRh6T3im2Tjuu52Kp3R7rbbpww15z1yTpzkiuDsMVw5aXErgYvEwXdsHYdFgvbqpDzUWGmt4TeBaHU86",
  "key34": "5SMRuWp9AEXaUGBmxGMuPoMazSK6F2UjQ2MYxdy9G8UBnhGpk2PGDvAF6T6UXJ1SntEB1wC9Wg6YM1qTKvoyWchZ",
  "key35": "ZQQgwX22KTPREGgqX1K5b4CFN47qna8bJcAsSdW3M3wToQWsMu5SETWUyx8X2k4RF1F4oJE9RSCBpGx6U6cLLpi",
  "key36": "2NkLkxkWkfPGwPhATx7W7C1tPEfKB7okCS5H66ezUzXHWRphLVsu1Yx5VnCeYxHZ2rQzdkeh7dpcmtpLZixGmsW3",
  "key37": "pvRS6NTGA7JkBq3W4kwBBxs3aXUgq7y61hRUjWxYC97wkv6sXXDgc7PvjeYU7gsSV5wmPbUPj72b67NoZcDcHw6",
  "key38": "2NAkj8NDRH5R6wtG2nYi4dHYdB7tZ7RFkmhfvsdB6ZMEUdbQ42qPLNLA3GvAjeCDoyazMTPMF581saRafxsAbHmk",
  "key39": "p4BhTErYYteTEnpNHCV6P5WNy81hA1iWS2etiQJf1neJVWLSFpj9MjFdVLni4iiNH2wspBviW6tMqdn7G2LheHD",
  "key40": "4wkpD1kV7tD8gijnpfA6uox2sMG9HGHTXuHdCSw1QcavuPf9top9GbeRcwegg5qDSwX5vvBcYT5DPkeVoMgt93ju",
  "key41": "EqnXmR7TtUscoGnMAa74Dsqkd52ZByW7KPgf564pPM2L11KHR9KqttZ3u8y8h8qhMQfCZQHwQpy9sbsz394LiGK",
  "key42": "517kHs7jGq1rJEAcQRzTs9jYSS4CHf6TSAGr9CpALHU9N8BTzRR7qXBwv3yCFrRbgUYmg3i3EqheLVryXZt6UGAV",
  "key43": "5Jboa2dbVjnLg3HL9fM5yKUSumFar8jfeE2prUxQX7VTcBgqtCcPpZ1rWDvPc4urbFbidHuQv6xhNkAeugAZT7FJ",
  "key44": "3JEKC946v6FhxnNyrRWVBqKcdGY8paRakQFntpyAjdu37z6UUFQHTY54FvtmBuARMnMEVnfW5ZeWyfCMDujcgHBx",
  "key45": "4mVtwrHS9X1ioGfH6vrvMYsbnMW4kJ27b861XwXiqUHB5mpZrXrGDUWCJ2NJG98TcZRx2aEgxjQhWDTPGZ2p5Mfx",
  "key46": "26T1UnNaMn4GQiL6mG6nDgSpbFXBW9FvkHuwYBkEBaa4teSfWwJucCpVdTYovAd7z67Zmud3SivFXyTsuDEkHtiH",
  "key47": "xhAePTBdoCAfQFW4NAaCXMQQyiC6yp1qdTNjwx8ihf2ZHvq21DruLqNmusydRsfM2NvF2uVPqqasrZ3j2huzZCz",
  "key48": "5TCjd25AiKyhpSajfG9YXZ4U2w2UN9LWgq5MeVRx8XVSMdVtSqkSi6NH8UJyiFF9vfQY2dnH1uxAmbJMw29D3mXv",
  "key49": "3gmbp1uU2RX3XbkcKiMo9aJukzQJaMKfs6v4C9NJiaDYqqkyKHQqAvNXqarPmGw4PfrNMTzXRBd6gD4TgZ6Knbs8"
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
