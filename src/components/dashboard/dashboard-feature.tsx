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
    "4RCn7nZiuJAUQbvy5ku6c7PG1VmA5vCHE4eT6CEhhRarpmGyaAVPeWyKhdTatsrs9USnudWExc4DqdzUaUdWNV9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24kum6A8fhQeYVPBDPLTTtru7LFGRJWqLgNBujiNXXcVKDDBKKAXpfRvFUnNDXTBjfccLhpTLX8qZ8jYeqkSn5V8",
  "key1": "2toYjBWNRhp3NBgYSNUCSsXr41K5VFrg7XJ5gx3WWu9QEyHEq5ckzCAG2unznN1stTYPXEFV6x63o3Y4vEc1GSNv",
  "key2": "6yicPWN8ErXsT39TDPPPH2EMZqyEBjtvENnT5JGFKcqTtkPwQBpER3Ddib8N7h6p5HvouoYKSwSEymHbA8bLn7W",
  "key3": "4u4CP34ekiRmz77rciVESvSRyY6JJoeorwZm5AK2f9SPCm7wh4Sg6L81Z4LKJrup9oehii3XDi8QCEvj8JkM1qj8",
  "key4": "25NuNMua6AFTuFCo6XgYfrBmi3GhfVPamZtSGpQgeekg211roVUEQjUejNm9Qt7kgVDKkHwFymWV6KFmFGr5gnQz",
  "key5": "5f1Sy7b6hAGeT4LN6Hrj2thJJupzpyBUTJtBbsPXfMvG7xGqmTEM8Rgf4Tc3fZWHXWoWtJ5Bm5jkodh97jAvBbza",
  "key6": "2TwVCN8LtNVqvyiWHB7UHNyPjtrhJLbiLEYsxzEonTHzyqLrg3YVuETwvkb2DS5RDiq26x6JtFdn2uZndzpC9DrF",
  "key7": "5HvDWH2LDUXuoFjiytptstRckSf8MK7VWi4yALb4B7Be2rLf7egw7PHZc6PWzqzMG6PQZuDr9i1mD2KhqMNoTKTy",
  "key8": "5Q3ouUZ9LHmfGqSPMHqxbsgcdN6gb9iFUu6zFCvXpcKiXEMX825juLRDLx5Su4mapmnr2q23F81F7pfhDUNNBZGq",
  "key9": "3gy124BUc5sQmhZZyu9d9d4h775uuGFfxSFhGBH8NA16ckZgo3SLf7wN81TiaUo89hLheb4MDYQvBXHRKBpYoZV",
  "key10": "4NT5BDcZPdYaNcc5qTpdqJ2ciVeFeHfjoyDf6GvUkpwx9PSj6BCAdiyghK6MoMvHcKsNLQbLsyYZu72xDHuiNmjV",
  "key11": "65zpjwTdWmNzmCQv8vWw5qmxuTohWNg7WFhQTB41cbPUswQjt4doLcEvjSDtJF24J6yRKWkntocATLfBuCNkw33N",
  "key12": "2SHZAFG4tHXudno7VsfHYvjAWww1orQiwB7TXit7o1NF5AZXL7f4YNvQso4J1aHckJQih7wNFHz7kn2NFF8TcfRN",
  "key13": "3EEPWHRJ6wFha9f8bFLrTtbEbXHdYeVS5yGhnGH2LnNGmbwphG5ao5WwxJnQHQ2LG2WrJpZHGtU59twYApTNYjTU",
  "key14": "5ykeHLzMznnVGrM4bikiE9HWgZyx6d2auJ8AEvzxoUZxdTfsPqs6pBdKHWzeyUDmVvYj71foP2ZWCRV12iSMxX28",
  "key15": "zR86aZ11CCWmiaS9J2AWpYnq4jM8AFsZXaSr2JEwjMpKYi9xgMmVaCa3fK53P1oWP1NhAP2MEv8tQGEoVi86rNX",
  "key16": "2WKwY3PWLF8qwEs8jEY1K1dEamQafHkasaJ7EodzcCvoqZ8LkyjUYcJTuBsEgFiYJDW13VFVEJqgR5QoKZbgHDFy",
  "key17": "57Vn1bs8HmkL4t84tyvL7BgMXVH44Q75F8Hv1RTwrNpYBTP6XQLsLcMFrCsmaMdHLTqPdgF5cGKrZiwvpuei21DA",
  "key18": "9PQRb94nckC77CooJaiwfN8GwudBCMhiFU5BRkobbQTnaBidb1Zt3hcu3TXVkQZyi6EcSVyykfRv3spBht9gTS8",
  "key19": "4EFSBMBpaAuDekjJcQcYugBBL1ArDjoKAmToH2CsRJASCBC3EaYVg1u5hb1ir81jAs5JvkwYfVx2dV9HKZ9zBHpM",
  "key20": "3agayjnCVzHm8vxFhrttSn6dmsPQ65v53rLEqvVwYZrsWTjjavmtXXfmfdRhvXpF2cDJWaJxmCm2bhRLs3A923jn",
  "key21": "4qEm4XLcoy68y1vLTitgTuoJ4ZyGTvTh45ZSE7zrcc2ezBo16opZ1mTZ5S6nBAq6CAJJRMFeZoF6HFN1DAYxc5rW",
  "key22": "54SHnf6WchxYPcd4oUsUSwm2d1APNKHJv6a63MyGg7z3UWC4sqNqjFkw4v6kjbfSQ84Vn2miGF9W9gHH1Zbv43qf",
  "key23": "3gfdtKbc1ff4NxAcDUacpekhGWJxsyj3VyUJkxFxDuu32P2HY2v8P9PvVHUXTsr3FVAixRAKwQi5B4HRz6TaXcQp",
  "key24": "3e9jCA7aCtGvyhhAjsX9qhHg9eqonWv6hkXqfSPZHMkxx5BXhGesj9fweF3a4fw8Bwh1yeUjLfrJpAesKPPTBLNz",
  "key25": "3fpp6xWwNZHP13MfDU2q4Nw2yyrnceeW6319jgQYWNBBtopXcvLntEAT26WAtEJhUEuQiqHBynM1yY8JvR2H8kMG",
  "key26": "2NKAcm9DwxU2CNwD3odpeH6tQBG1RdoK6VjaV7xr31xvRXqC67FX4FKVcgva57HvYtsaU2KYFoVeenX7fiYrHKJn",
  "key27": "2MRoKseRvzHwsmed6sJrksJ3hg1qgm4drn5gdQvbjkikUEGHtntMuLX6Kwc2FgKiERwfSdKBj1aQiXXF2YuyaGjy",
  "key28": "2JusDGdd8JP151RfjGyRPv4abydHpEstvq5cHrfx1sruKytmfxBD19dMSoWkck5nDZ38HE5hS2vQGSm1PcYk6vRH",
  "key29": "4ytSKA499pggM3ghBVxjjbQqHMHkSBocsi7SkXkLSXKr8k5c3aLm3CZzw4MpJCdtkQKAQS5CwivVfgah38tinhh9",
  "key30": "57dUdbPCajE4uVYy33GDTWaJCT1Nnd8Za5TdAPUCEZYka8h396h5EZ4q8wVpXjc5GcHsimRFHs5SKmFYUZQ2EgKv",
  "key31": "35Wvzf8B1XxLLFEtRw78VgX7NSTeE4taBeVepxPMDafGk2iiEXWFrrjiyuNR9evWGspbwzFnwLC6rVv2dSqxcmBr",
  "key32": "5zrBVu4jXx16PTthKjHvsDrbHzFwG3iSg5hzEgADdD3gKPtPufzkuBiXJqVGcUCHM6wpUX9KtpXJx3VHLYqNKS8S",
  "key33": "5VbQLg9my21Z624rC6ZB3NMB6bgPrpB8W8NtuP4utLMFHwCpm1PU1xMALHRpkMiRqTpsq5EwxGHFAzW7S5HKsnRN",
  "key34": "s82t1QysHi9XFScKdVjq1JXckwuRRLoXRFx2shpFX21rMs3gJdGrrCJLf4z2hHXKufhvpnwmzpTivNmHnpYTvA1",
  "key35": "38XtCze8p9cUt3f2DyNkYpKFgPUAF1WUJLHrGvsMMp7D2QcGbBH848niiWwyDcJZuo95d2kLkti9H859ZwDwHbtH",
  "key36": "4BbZiAKgV8YaymhU4tZkcs4gmcLEG1m3JSZQkRCR5SrSMWA4krxg35vnRXb8G65fqP5ZfdBpU9w6QqLGuTYYsHqf",
  "key37": "2JNDtJiGLgpuVbDKkc39x3TvS3K5WobL8EHcEy9c5EMrMBcsVRWDxYQyemK5FnwwBZuPSiCYACqeEWHkpA3WG2HP",
  "key38": "4iGuYuQFfhWm71MtjfNyNDbt4TfLeik3RvmPQYQZ21Wf9syXTK55tkykuau3e3LqS54SGYhkawMuv677zTjVTrjy",
  "key39": "4rjLxn2BK129Br83DRcY6WaZVmmjGCN3EDkpVs4qVfTQVhp29bpuFjexj6az9iBugTs8XzEfSB1svWKsKxJ5Dphp",
  "key40": "aDvhZLuPkMEY3y9cXuM4panhjHjpD6QfxrXAb1NG8YpBgB2HCLQN2dujisZisjA3Gz2cqXVLMvM3Xa542LjeJmM",
  "key41": "5MKqjQgeWxU5GEaY9NLMtDbsfhQK6BFNwhE2a4VbeKy51zt61Tci4uFv9AuQCBKqK2J3yL6hvJYmgLc4qSYpstsY",
  "key42": "45iWym8iWME4yG1hFn2zDy6kRFF4dgKArLLzmAF5DiZZuNNoJbMjwQ6xqvEkPsABo8HaVgo5GWyz1ni5bKwqRWhZ",
  "key43": "3yvsF1RpVT23YwoTTwtXgA3RTZWdG9peuvdJaBSg3zNgLouP4fNeyvcNQYVMXpK6PGHW44HactsgSAdqqtoPBzgv",
  "key44": "3fM6WMMT1i8BsXhkHzNgA2sePnDPjubz8s3mrT2wvGqgZ4dJwhaRiBGzTRQMuN9b1ng1tbPGrGCeyqGMgRhzw6ve",
  "key45": "32e9zUHQBjR55BMWEtzkY9TK6JNYgKUpuF1C7oWWdB2iS4xMWxXqFs9sAA7gjL8MP3sKSxPd5Efe1F6mkLNahbJb",
  "key46": "Y1Dw3Px16UMjHJEX9J2QjhPfpAeVsCZhUkRUQXaHT2zYtNC3dUy2ahDYwaYM19WmD8BgYyP2mnqpP1Z1rHZR41R",
  "key47": "5vUz42smpKoTcFmLBhfAW9z8QRRRSERn8T3zQNfwRnNCTJt33opi4HbF4zK6BanCbJC11qzNTiFazsvv8jbbCy73"
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
