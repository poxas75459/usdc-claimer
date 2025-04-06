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
    "dXyT2hRLJ1d5Ci2BwUCSegrrXSDYa8o34kN5F7Jxt6dQU1WCj6HfprSpfhaeFPA411bhCFNDnYVKAfX8WbhEhHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qPFgb8mJkx8MsrkoEzaovdQgzKQNJ48Y2MJn2CadKXuTCYSeJffkvc9FDVnFfef95mtNsMrw6U5cVmLWv1EDfWn",
  "key1": "548UaEqBgWjTw7uigorezembDVi6kHaAeXJYSiVh5V1gardPYY7ug4dc36dvyGZpfHhw2wbgmje6rCiroPvq6TeF",
  "key2": "4BVjq6kTaZAD1z56nKCnXfEVfzj1R9r3wJmD9Gs33J12hB5cjXjo6i53R4QFrrhPiCPgG33b1LVezMmv9zH5oD3T",
  "key3": "5P2FkRFP8PiLey5jyuD5khXKyZEmyRgAVjNkNvzpPsRoWYijSKtPf23uJrfw5GHE2U9JoX97QaAuYn8zGCTQuKSS",
  "key4": "4yH9ttjRtyhYXRXDdH8RJibxaaSc4KvAnTws6Vmo2aMvrToGpA2F3HzoKw72fTniSXiM6ksH45X5KiaQjZMVDHHq",
  "key5": "62DxjU1XLAA34z5xZnv5gi2NVRJj8xZTf2focmBDbXaihMwUToQPmSKLRAjKwn3b7je8wsNY7euMcDQbU9BaUSqF",
  "key6": "4RM4ecAZeFzMRtRyK7gTjG5ZZ4fLkw2NzhaH6zB2spmBgj1QFJiztt9EGnFSj5dmmQpy8Rh9tuK4s2qbYUv3WJS2",
  "key7": "5GaymNvaztxCqUwVjGuu1jYtZFd6vZtD3FT17UQ98S2vLn7CnFTgUX2EHQgtGHdQVAFXpdWK7WeiMdrxVdZjV47B",
  "key8": "5mKkbdUisctZWfEFRuavAFysuwBiHhMPnUEamMxLwBkAAGrHpoKsL5xgdVNN7h6EcofPhSiQN5L3u9y2K3smhJYF",
  "key9": "4Ciymkjs6v5SfTAw29ytxqY9jiE2zHDiCL79EEYGGNGE8TPgaXDXZMJYPSoDokFnjgQmmA2aJFsLXN588coeGJoi",
  "key10": "3DkEmYz1N4iVLvhsK1KmP5nvAFsmGHHGKoVmUaog96Q6ae4ss455g331m2pUaBcwVphzq9Vdk5tQn44JyZFozVPG",
  "key11": "2P1Qz8xKo1N38dH1ebNcCJtU56hQoccmegiWEeMjaAYE11w7fYnhEc1gd5rFF1H77ihtSR5NbKoSA3ByaEdGsPZP",
  "key12": "56LHgbtxgHBa3PoiGuUY12DSh6y3f2aXe2Ced4BuoTL1t1hYw4NxJj1Fr1GR8kMMY1vCvRh1yUNYbz2pqePFVuwH",
  "key13": "4jD1x4XxH2en3MHeuxD9d4ToiFdmf8RtF55nPEsZQrpxEvJaVKDX6VSyfvM6YfPnPiHC95zp8bziSC4Ymk1HYwbZ",
  "key14": "3jK25C9sjjgZ5RHVVoYk3thCejxpzdec3fXP1Q4JD3V9BN8VAK7vXhwpE45vVCzfCUpUMGRP8QmaVqmnTCg75E75",
  "key15": "nQAKHGQmAPLRyJBo9pRt6vuedXsa9ShYEogzQsNZbw1fFmouGHnBi3ihS7igDk1rh9w1YgxpCWTmDoe7kWArXcG",
  "key16": "29uNsniPm5xghtzvEwNu8svLuTMD5AEfdgWLpmP8UqHKwUwbv51gputJCYAcpbiZgebpimSbR27PgPRGhStfeVh3",
  "key17": "cRnrCd7EiGsvDBkka7aY2UE7yufLdXNcrgtrXJrD9JYb4SLgnmA9TMEj49qibb3Qao7KtxwmMGq1mHUt3y56trr",
  "key18": "5R44LzvBy8DzET4Ko7Fb75KyT68M8fsNftBrHTUDchLWWXa3BX6FMUzQmjcBwkh2AaZ3v6GR3ptW5A7Bn7GkyfFk",
  "key19": "53m5eX75qQufbnmbEKdM9bV9HHuSfaB3KtfD7CKeb5cs1p8pw5sQ2TCJsBCMYqzff8H7fYTuzJxkGbg9pa9GthPr",
  "key20": "5vJWo5eMQ2iqQc3M7z5rPnCePa7hv4Cmfh1e5275YZXKXvo8UvikkUcCmUJ1sfj9fQeDzCnZC1DoDeB6v9sSip4j",
  "key21": "2ao22rDbqFKWZzpKhCmbeKJsM3mEZqThYUEQAueK8gnvLBy8oVgP3RdTFKqHdA4Uc3Wxr6jYGHQwfcrt6r41sGQC",
  "key22": "2rRuyyJTRUvG679MNeD4mGvYrZpcjv2R1zuMZoZz4gcwxHwdTSeoCcqn6hWMficEQ9SQmiFVcpRGpjBxkAuvTd6R",
  "key23": "5ycGaG2ELm6attbGLcPUJDTS5BjX2oyMJaqhxVJvqZpeXFaqwmCDaf4uBeUQ4S9Mqef8fakB9TyahV2yHb2y2r2Q",
  "key24": "4QCyBtd5v71xcGAFXeTeqi2Y72jBWHapgqKpa2TE6cs3A88tw9ZW1ZQ97mBxUkqWtujQddv3u1BSP3apGoz9xrSo",
  "key25": "SwEqYtjPxk3FYXm4wvA5LwQfQ3Lu51VVpiEpQm5bQps9gdYJAQKzevjYbFecoz6TYDwrgM8U9obUktKkTyJxWT3",
  "key26": "3h158qnHByoZFMMnEm35j918hU8k1fkRVhD7kmZ5xYAFiLMqqkSgvUQvScYbQsGyfqSj11Gm5s5phSiUTJPdvNQ5",
  "key27": "42VDhAzoxBKzhyyjJaxFL3229Mk6mBYnvKbmF5wedfKgki4E4ptkcgTaRmmYgFh6ihsqePKqENM6MKmtQWo7MBQq",
  "key28": "43HaDAZvrgFfqPE1iUSz6v24YLv8RD4HaWkePNVRAjr5D2yyhBN9r8VgCdMKKdEsi1qfH6hDF9zVxammw9jrRKmv",
  "key29": "5Cc6cGM5oCRbjEAb5KLbeRq4xCxg499s8xi1Q1r28MBBxGXTT2ejwEZBH4vEcNqm7NT4HsJDMaLnt5GT9eaupjSW",
  "key30": "g8QxAZ23CXT7pNSc3rmrrhtRjmgjVJ7EBpntwibEFNWiNp3cfudzeabfRfxF3EcVKpHhsod2CSYjk5yXiB3LMeA",
  "key31": "zzatpswHBCkuNH48QVue1UC5JV1WFLQZtJubCpXwgHyYT4YC2PceeDotZTv7nyDovcSfV5pYsVrbfZoEy6dDfr5",
  "key32": "5Xtxs1SuC7kQWufdzXcHte6tA2eeutmauzgtJmV4Gc1X8MgZTpMBDUqGhcnjm2yBJ2CVvEDoZUpv7WPLxWBCJuYP",
  "key33": "4rM645g1sFnP6HK4Mbo6tKjSn196vaP3QCZbii7F3pWFXQLwY5DK1Wp8sJSEz78KJD7j3QegwX3Ug7c1TjB3i7rH",
  "key34": "4iTm6Q4FYLaDFy2F7cmR4G7i7MrnHrFC5q3AmpMChwqXHLSD3mBZmB7KjB2gsTQGSpi7Dg5FEdbAsjzeDVANYTtV",
  "key35": "2CG5ryZ8yAsG98se57x3Z7YzWvdSXja3xsssonaucVECkKBd6wjZJTXHEWFonVnKG5vfDntgc3kHjzKwC3oNngMg",
  "key36": "EfR6Buj1XZFtooPLaFNVXw5agGEECJueubtpmXkYZoLD5FnbCgT1q7GcgMocjLnpHPW29xxFqJj6Qrqu6SGXJo3",
  "key37": "WxqTfdF2PfcbtyAVy1umjeKjPZgCizrDzSaxCL9uPsaVBhjtgWapP3NKCaMTNi2X6mHL3S9mbgLDzyuGLxKvvgp",
  "key38": "22epCTjsqB8Q4zEB61ffTBhTa4Adb4ag2XmKwhb3qJF3BA2ZBVyMSXW4sf2md8pnbR8qB7bXxZjgkCjFntobYyG8",
  "key39": "4EtLpgWUuq1kGZ7Emuimi6djd3yRoD9S95d3cRg2mLHTdhx14uoDirZDWjLqn55oG35c3GS3EbLNSJvLwMQDYcQq",
  "key40": "5JD5NePaoy24SWcj1YJQFwunBTqa5EUBbv5KTev348my5XCZBpvqcePGZJkA5MLKRPVU1EzEqNV2WCamYopaXG86",
  "key41": "63Wfoj3cA7bbKaaKrn7FvKTUySfNKf2SX3oZrAoqaoWTBjh3QQGx91Mt3aaLPec7CdMw84zrWLFqXenZF25zmWDh",
  "key42": "LVCq4skP9ZTzAJyfAu9Ux9cpzezvgr6qqp2w8WEYEJNJhnwTpzBUyC1FeuMabMzfwNK7KKNPJUhNNFG9m7LZa8D"
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
