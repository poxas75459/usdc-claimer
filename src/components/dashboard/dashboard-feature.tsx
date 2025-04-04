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
    "3s5X2bCNxxKkmrBCxciF4mhtNteafy9LWNb1fHoQdu53DGEWgi6khwpUyaf6K2VDRv6ZeU7yaEAV6qNuptwDckwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gm1imBL6EiK11LKakB4ojKRsNpCUbfZD681uQCxGLvmJjGa4owW2TSt7sniEjhsTfYCRi1he9wa1H36P8nZXV7F",
  "key1": "2ctMRjxMgPkr7PJGDCpjoEn3mMcRSDRMFWykG4pReNKX6RLiezRvfxEQUDfa5q2sM425LZBenzeHqow1T4nyv1xt",
  "key2": "2uA4Pt4iHjz3Kmxoa9BmUjSwcyFLmcReyPN3pdK3usDpNaPZSK7xCWocUa7UEQ8S7ZcJcwtopu49ynEUgCqwMfZU",
  "key3": "3mhJgj9WPQgskEYRMrS1SP32xeyaqCaUApHYXbuk55w8pzhnBLRoo23oVmygv7JBNwYh78uDVGPsSQHequ9VZGzM",
  "key4": "P49EW4N6FsuhPqeqFmKPk4EyEifMwNjQvEMfgXQXfvYtqgGzXqNE9tFH6x2M4511Zi69ZaDFgusTNiUJXshXSnH",
  "key5": "5hMntR95J9788UoJD2mjxpR84pcy4p1tcZgzhLoNGZdfVFU6rrcU2AYAmNNMW9aU6gkMnzeNgbWsry9YwyCW7wsA",
  "key6": "4PngWeER1KXt6xcK7JuCyLiPQHEjTMQb1wvoFszqWphEMaNQN74sGXJBhwaNKWFfNwqgqbrG8ghRdnCmYgNcvEPB",
  "key7": "2nnGXx9iV9KQWPVxFyU2MRPGwwPxNpUyfGBeuhqRbfedSkErq47wrr3dChotS2NeZRgzRHDFc7Rmabiin1TTkTnT",
  "key8": "2QABvG9mzD8zMZvgQ4jjPdWNXWEyzS9E4URHp5ounSg9QK7e2NaKrkFR2ccwy2rdVUdhxgoTmY4hxLTifaVsvSLp",
  "key9": "37TgqVnnpaNGPYZ5GvPdpJKykG3G65bvwknEgdVCCVwQK4HdgSyp59DT9XEDd8uwxvnm8QoUQ4qiMwERscvyLJ5k",
  "key10": "rwMMdH24EfXWuZzrwyiBAyQcWdsbF6KpjTH7wTxLdc9oofQbwSPyQMAcupZnymM3GZAGtz7fgfarNxjaM7Dzt93",
  "key11": "42U22RXyL4HgyQH8YQed9GBtXt8toawGqraNbhkMwmuxhMiMDzZo1fpEvv11tdDgavkhSpbBEN78BzRXpqWovxtS",
  "key12": "2KNc9Pn6Cm5myFEmVwCNvVpJN9JWBgFHiV9PtP5aCNnVrifuLActCHvKWVeE8keLNP9k2FWp9fYj6zbR584DxUtD",
  "key13": "2C5fNGTHYZaBXwpyvoeusSF6czdN7F9rBd1h1t546g1QoAGvv1zBz3WU8MdPazM5fgokRDkgThdRTy22CZ3fkcgs",
  "key14": "9mbWtUvm834hvDSYgoPa27yeXBR9qu1wjSBCovzSvuyM8XFqLaptH4JzJdqEtM3H2yE7saJtgVhhHq8YKZ5DFky",
  "key15": "3979PstndfRe2bbT8KXNVEuDGKBwfWWnyXSr9fQhQ8hZXDFxgSxPjFuk4M4zyhPVAn1aNhS5NSkubNCj1psrfC5z",
  "key16": "AxaLtsWZbujrHTH2BHQ5uaS5mYcrYPiR4byZ2YR5hWDmw8vGtKcJ7PM92kUT4gJCryQvtrcHjZGzENFLGhFJQJj",
  "key17": "2J3pZgD7rfTnW6qBNWrZDLWWrp6NRKA5V83C6CZhQG16PEyRCGxYBZ7Q6thyb8JiPkfZzVmiUHYqLix88Dkoe57W",
  "key18": "3BmVQzvGJMhJFuxxWkFBAWFLEshkHnh2h7FpihfhyGekA1ipnLsUHabkzycozjGyismWHHwv4xicSFMc8UN5T44Z",
  "key19": "yUHvZeBo3PRPgv8g4eFtMCMGZVvyyzUHSBv6SCPA6sJBXE7Z2uYYmStxWSdFmgjB2yU715VWaLz65DuLHvcK8zi",
  "key20": "3jqysVWgqwNCL6nbESX3CMQVdytuWVM1EbLkToL9tqtgi3qb5bz6UGotAssXE1FW1JF9Mobmm1pyacfYjt3JBmPE",
  "key21": "Df6141Td3WY7UPsHn63hwh2U9X1ZkHP9g8xsZ6vcCMf61s8hJJxCYqVtmv2VJrw3HKUcZ3X5SaG5gadpCKhHbWd",
  "key22": "2eUNheNGYuMADZtbXni379Hh2DnwsGn634EdbAuvTBiSKES2BE3K1X4MS81ah2NwHy2WNMDAAXt8V56TATbCu2mj",
  "key23": "3sQdzVRsqKp1RwHk4rTKXx7qbj2dizjx2miGb2dnD95jwGRsPqDisDYAehH5K3BLdFJKVqKwf6jLkcKcniy8jAzT",
  "key24": "A3GZXn6ymp4q14gK13gMCZqsCw1kwBLBDEgU6HWSCHhiThBPY4CtxJESB6bEXxUSXDtWHuKQTFq2SoYKKSbjP1U",
  "key25": "5cRkPjHhMb6qpuegxDN8FS9uRxZMpEfhf8R5YNE82XjSrsGLTWWQveL5w4LMku1R7p4A1z8B3uRqmnfwY1Zv7RX5",
  "key26": "fdMNPCVJmW8ZATsoUoR5uZ3W7jkrgPhTj8QRTKXQnsZo4Y8bvvyrx1x929YQomYwLyfVqx485pYyaGsEvuinK79",
  "key27": "4SdbTsQeZEHNqjQz4uktsUA2y42SihEpcVuUCZwJSm5RYdUMb17jqEKb2sa99rbb7mEcKyobuV1hhUFwBRfSQAkc",
  "key28": "238nWTRRyxxRkfjH5dNGBwpeMu9SwJhFAFBQvNmJQkDxEV3LBe95V1r6EaAqZYswUK9ecK7Q2nUzThBMLx1ZUSos",
  "key29": "5bsYBQ4YBY1TfEsc7Z9kxcg7mCLjwEE8zNYHL6ToagW4YhvmoGVFAyav88s9aAKp7SYP5jHeF7713NmpGWgamUZr",
  "key30": "5V85jBb8UgcvNr81dEPLxgMYHvrGH9F5eCcC4UrxJZD1RNKwiESezxjAv8Xaf47ag2PrpLnGFbxibRiKMBmZdh11",
  "key31": "56c437aX8jKDDrUyy74aNXsJUwZNY7qGUhjQBmJn5qTXtcNLaQR7Z5gGm3oioqMrKDBdYT1aiWgPVf3URr3prk1W",
  "key32": "4BuWA2o562KCrjh6MktNoVLy3U47ioRkWrVs7gLF3DhhVuee2dhr6grmCTJ5mmipnQiLJagh9ppvSGirgg5imCFC",
  "key33": "2Em57cHLDgQ6j7kaxkDcGwsy3vTnyveqdtf6Y4BDcFaDvQvTTfhmzzqwH7oHeyBwzqVW1W3qedPRYCc86GHwHXT7",
  "key34": "FVqXcj8krRVX7ktCcYKfNcTmJKgXvx3CsweRC4rtbEKtfimcybC2FfJkhASqjNxHWBaDP2asRkwrjhYfmhCPnb3",
  "key35": "2PYYE14vfgL5adtioJDVCnxEi5bbPEsPg2M8i97U2GxtvJRBZrT5qqPZ4F668FmMtLN2WAsMvFSxe1g8Krqvy5CD",
  "key36": "L2j9EZZVK4BrFtyPpsGtj7cdKciRQQSxjNHD7aEDtBSzvskDWy1EfMzsucdDLmfb3FeLrsrAV5rLYDdR6uyoNVW",
  "key37": "5NJvXz91zmXaZRbHzVVKxCfNcttRPvVX1h5FxSf5Upf4BU5Z5FHEjBH4xobvAEdWyQem61fYJKWVoJf1YMh5npPU",
  "key38": "39Av8YizQS8Sz8kQpgE1xFtv3NcqoJVmbYn9UM8RKv2xgcGmiP1ju2TP6xCEPyK6ScEM1EH7rMBNckn1iQoEg7V",
  "key39": "5ZmVGGXS9b7wbmCDdHakFUFS9eoiKapjdDg6Xa6izKhi9iugfingp2mx1uswxbdxrkbQBeXzBZKg9iaottk1sfSu",
  "key40": "xwsdywMBsZg2oPf6BvJvLGzNbpKeShbDNd4U2E8VYPRPggw4i1imyn3fWeGT2h67JWyhWj42YwzJpuVLLwumHgt",
  "key41": "5etFTEEnEPYwNtQtaPLjYxAxpLycdHMaFC6pG7KyvJuyQMebRKMZufssndWfVrnDBegFNdbqePAUEfXYrg9Lfw1v",
  "key42": "4tnWHj9Y72jakfbmnQ2dAGKKcAQUERQQsVy7EVkJH97V15Pw7CzqWov2ABoBPeSkt9wakw3jGdpkMew7fRQXp28w",
  "key43": "stpGVt1qBMK8UxV3a7Jzq8Drhp5BaZziCmiyuqRufZGULdwA1hHUVCCdPCmtuTJt1WCeUfPqbZZBQsANvfNr4r7",
  "key44": "2JuEx9NfD9LNcHj2dW6Zd1JYTNoXGrWpndvMffjDHitr8gsnKZn8QJVLXfW4XDMYa5KxVNwAPJ9Eeb2AGwWimSX4",
  "key45": "4UZrigHCHrpR8DbfdSCipYYNjXmvZd8MD5hmQ4todiDZwwgxaDnczkGQ4voLBBwmuCP4QK1Y2mDeFfhZiGq36DTj",
  "key46": "3gmPFf3qSZuAVQL2zCFPybMD5P1huBGpC7rbmnUzrenQrxo1pf8SFnD2eE43hU766y5UQjHwaWGShTGVXSaA4kyS",
  "key47": "5jqSJRxSTnouMQK3y1dqvqitG27tKpqsEzBFEtEpVTJFM3vvZT9q4QQJtkYUyBXaPyUWoa1JxnroB8av1ytVC1ew",
  "key48": "5xZSsYPMDabGkxu62KJfZn8L6dsojbADXs1D92QutVFbcPswfvuToAbdMdBSw237cLGvWDtVVQz1mjzzgMSiKZUP"
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
