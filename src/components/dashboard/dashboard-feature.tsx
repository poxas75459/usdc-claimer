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
    "5WV4d61dYRSZKxbvWzUtpvQjqvgMSC8PPLkCKFgpYDRZgSZtGcGj7Yy6QdTZfLVNhLkBupMSY9qdABj32gvqfY4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gsf5CLmzt6PCFx3fQPTerQqn3RD6GmDGdWNwBFwuWZdHQsvw2UVTLde911c9vpboFoenu2BBrTNKRuEQYDW1hah",
  "key1": "5qipHvcPrwwzC8nCnxkZgD17qzBEhRUabaD7zjeYrbQQ48ifGHp1EThbG6hirwFQFfKwfZLeDDYBbmFDncrM9Eeo",
  "key2": "2KtSKqrC3iwqDUdh1DsTNza75YCeXFT81UaLGR3rq7kXGkJMRohGoiBJ8iLxxABPUg9LV3Af3bmrRXaHSqmnmBAp",
  "key3": "4VqAPmrVCQW6ND6y2Hu1t2zG9UvQW9wuQ2SfZYLcnJMQj8nwsp2UCCDnfMrBRU6KpAzBCsgifjXPDY5A49YJ59VL",
  "key4": "5rXWnzTbZxMSRFeSLyeQqnmiKMFPSma61MZoJXAsafoWnKkyHq3BpDfkvauZ5Vj1z7apaAHSEpacJzNY2BzBBQLB",
  "key5": "3rDYbjDX9tAX7Uf4iuFVJDufKkBQsAnRP5RXb2S2j2pvQ4pW6uHYS8nFaVrJTjb1fwrjB5xFBfB2aLJf7HoC4kuf",
  "key6": "FNWBpjG8GAtGSE5cWit7XutpPqk33EY5MvUUMvRPY8Yf4ZVYXHcYi6nAbGRLprqjj2qUS7TgLY4fxG21dsWWbgg",
  "key7": "EBWdTpgDMSZmGnotH8nPWmPfmhCNVhcPh3h5nPBZkZdbVvkjf2RCVrv1NXdAqQ93MCwhXQHSBt3sEjCgvAzGAMt",
  "key8": "VQcQQne93LS1fo4kDxeVDfQUaR3NtQk6r1PGq1yh9BLcREdFudeGbshrmxEij3c1ZatcFUroPpZbBLuH3BMp7cc",
  "key9": "3JSSnbJwMPRgxsk6UvMDjN3RtMZtpDpAqCnAGU94iJKcRnercDtvTp2PcPjHNmA94gmdgCQmZqegV86L4GrREcuq",
  "key10": "3yaXsghAU42qUvKbpZHUn9bDpqVXwZZitqGS1isacQpSAMvvGCsTDZophv8F8S3d6kBHfo12jC1jxcGvKF8aHYU",
  "key11": "43Y9HrpgxB6w665rRG6vD6VQfcX9inAsSAdeuomCL35BtWAyormW6PocekX3k4E58862xjHBcHgvZ1UKNqr62Qed",
  "key12": "2xkcDn24L9iDL5U8bJkjjzdkrDwsoNVhdtv2LkTZAQdhZqfVbEmMYMYHKEFP39KLDgEL2zYPmpyipvGHpxkvMYAL",
  "key13": "GkVkJzayAeUrkFJLCruTcfSUcLsZNyZ8kMEWRsa69KaWFzjiW47JpBEdzXUiWCXccaFHXwKfnTKZaLiJkomheZo",
  "key14": "62sYSDgX5w8PcgMqgWvC8FYdF1crBs47bevC62N1Wkx27a26cQ5zfcBEa4pT3RUtwNzX5QGrzJrBtchVqwXAVxuM",
  "key15": "2bfXtyToyAaLMZUHDxZ4Zm7ogJrttiWMGFaYntsxDL2AbbQWRAWAvnKiWiXvnuty2vVZ9mCf6zksJ5HL2mkcwoZ1",
  "key16": "3Hq24qRwpZszz6WeeRx2ypRKKReSSRDqRZkgAFebtZc6fUUSj1bVyGmibyjf5ZEoKhgT2orqwH3TFsaEnW3S3UiB",
  "key17": "N2S996jxztd68rjaToYDwvFrpj7dHRiUVqdQGBPG3TqgpoXs1Ra1zBcTVRkUrVFQ9VehFraiD4jcYPk1QvYUVok",
  "key18": "3as6S4PZdV4RJxMQga24Ws8eYRiE82m2Li67HTRCR8nmEuinwMwkRrbP8rUFmTLZbgYKqSYeAqMaN1GPKEvEFxvU",
  "key19": "WMag9r7qyPrpTUSCXhay2xoK9JMscU5kkEvug7pHDChfkBszgEnGXTKSZjuzCjd2R7yT1eFzQM75FamZuZZ9KTi",
  "key20": "5hE9JMkvEay4E6h3aKEjJy8DsGKFrZxxEvhnR3XS422gPEGueMMW58MpPPeWVAUwBzz5prt8WJWkLTJFdctyXz2H",
  "key21": "3VKr25iT35BFPtLStYcNVSnJqW9yxeLoELjVrpa8trtdKFh5FTyJj5GSoQhkLhF6DCz8rCUvudJa8yjLmNfgVjxy",
  "key22": "5zdxwt2zHmy7zdPw64U7XBxr6z22UGZCVHmgqb8oKYCpebAHXEHxotpPYpdhUduoRTiYSo6tpP3H6pv6uC7PFE7d",
  "key23": "cgnriiP9zsZ4P2tXtM3bGZd6XKPAPVFSgTEGoxnm5K5aHnbxc7pghPFUhHaKYC76Ts2mMu9TXamM4UTezd52hP9",
  "key24": "sJZwPx8PLthuwaMMY6KXESTfvSx6wJhjqwu6kJBLXe6cYJKZBSR8xTmZCdRiUje2jWcbvjgjQEm8qRsMDK5AKPX",
  "key25": "2cKCzxWejdifBskrmms9qfL5uvJfrFdtS3ngafXzjehNktXJJyC1EeuWi589JKM1xq18nVNnB4SJ2fmRZt5yzSMW",
  "key26": "mEcZuVD1zQU2ruu12WNGsV2NqK1mgeY86bniT3HGwE62LPHqknpAZfxBuuNZQaqd24v6h4n52cgMaV2nWyDzUJA",
  "key27": "4WAS9w6hep4PxNgMkDo2bNGx1Rgp91MfgURurdZvukGwidpEXau7MnM5GonJs5bN2yrcUd4XySw4YhKwXenWAi1s",
  "key28": "meCzjNbQ5Sj8TBGpUbGVFtZdf5LmD7X7ye2p1Kv6pKJG49A9TgamEbWdWYAQiM9c6NJu2ChGxkc4Xyhbn3dyKRP",
  "key29": "4CuCAkRBdpVyWrB6ydmGfVkisDnEhmfNKpT3X9vByJGinPuyu2LPy55KP42GewcFor5r6WeJ2kGhepdiymrhg6ZZ",
  "key30": "5vvwVmGLP53DdyfqaZV9vy5NHwasvJcex9hGLSmcGDBx34ipDgcSMKBDSagLm4XudQaJtatW2Ly74bTvgb7Fgujb",
  "key31": "XMGyP7o6VMnSPNVgP7RuCmy1XHznA9vJvNg9TLL1846HKoXgp8phxED1wpJUkH4rN89zjSPK1d3RQvgp8o6LYoG",
  "key32": "5C2dDZQ8R3M3XB2VZBY6u3vcBC84Pm2iS8EjsKQ6GrHHeiY4RDDbBNJvKaGb24hggMHprai7jSHMpz3YytDY6Sxm",
  "key33": "53RMQnd5f1g2epNhXiGmLgL4VkkY9ddQ9xAnxoGCjJG7SpLphMPS5yEVQhAuRJgGprkdDvuwLt6Q6ibEYaGsUqxa",
  "key34": "59Q2dYyEyq1hPV5erjBfkKcjkQx2eZWDLUqeyD3xX3LpFDRRfaBH1mbPScJ5C66tF5bHCJFGrQfFCE7CuraUrPdw",
  "key35": "5kVAKJ1qhEMDJZzqZk7hvnh4yWTM323wVvyPXTKjgzHbqKVgczShaRWLcPG6jexXTSWV3s4mryAKPoTaim6shJ1h",
  "key36": "2xkSLVSv1TeoZzzYVhDgU7gVG7XPqngn72UtQv68aw7ccMSbAWsQr4hkVkFoQ3nCxCfCSW587pDwPgjms7FYHSZq",
  "key37": "3CCbNR1hbVawo1WApDWb3foYvif1L7wqxWgh78igKupkxVk4rZ9jVmnVhJYHdzNqbSxz2ds8rJGNJc2VQPMcMyWV",
  "key38": "5Yt5M39zcnEWZs3i9ekk6moaV4Fjm8NwJFQqXpHBcZsxjZJJaW1m9petGc6VxVqYVygPGRFVAefJSCtHGfxT8a2i",
  "key39": "2jvoRBz1YrtzbbDbHXrAmPn9TNJqz2Cke9HEFCVXQ4CrezmPECJFafgD1xe6zqScGR14xPmddCv8c7aZkfqWiYC8",
  "key40": "XVzrCUi8zFpw4Ed9J3rdY76CJuquK1tdL1rvhAMNRXvgjYmx4YykeBDRk37DV4mymu1UFKcxC1AcDyYoNHvpRU2",
  "key41": "4JjzBTd3A41EskxhaQsvL9JN1QeKqpgT89i2hSAfdEGKQY56Jb6aqPd9r6aLukiYgDdp59dTjeA7BhigpwVNA9ZR",
  "key42": "4hMq683UwTiWjfZNFUbYYZcCehUTactHiZzFyJ2XUkWcFJSUjV3HPFV1JwRvGonTpR48pRPbRidC422CFvA5hPGC",
  "key43": "FKDK1aAfAJ13buA6UPa8NEes8peXoiDGuHNDhnYZUp1ui986hcAJXUjnzgs8q8FVmmocx8GgVCMrSaGphdmXWU7",
  "key44": "4mUik3g6PCc7r9EeiS3v58dULERA79NcfjRSc3i5Uy4WV5s5dLJT4yWu7wUgVdLVN795G1kaKVZHAZFHeU3vwU4P",
  "key45": "58UrUrqHJt6SEAZEjt2a8PBky2nFbN3YcTPxjCLQD2gKcGmNwgtPiQB6JVsAgQxZYTExaXkhxHqE1XkeTJh94Rbq"
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
