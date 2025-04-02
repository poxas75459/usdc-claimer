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
    "3BHA7kF23x4iwsSHrWmbKYNpJg53cyif5S63rhYrA8a54UfrPwKMKtTdAW9xR3PFiZXPFYtQTgvcDxt2EH9LFbmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QXUsZiA1bijJ34opPVqA7NAxfyo1nGrHVwHR3fsKbQR61eEEek9hHyFypTfYK381Wb1GsS6cRGRJFythb3awysY",
  "key1": "3ZM6qtgWnVQDtLCade342M5GC8JBGCL6DpWdZkEZws61rgSE93SFRHLz94FzRQ7fRLi3Tqq8Xej3Y62oJb1AbvgT",
  "key2": "5Yqg2W7ceHif1qPsjQCZNmx5BLpKFHHnDfgJpcFPCu9CbhQruiywhTFv6D4U2zExD7fqsF6e8eCARNSqVyNviXVw",
  "key3": "5zpEkNutyNLuiWomFDVQ2p6L9tLzcu5kHSpiBnjnscWxML7GLmTYhBP8TVLaSWme1zvBWwqjtCdCicLHdamYsy2s",
  "key4": "2uhueydDMczmiheBt2kVLeZaaFcZRj7ZKmzsYhyjkvdtCUHnFit2wZYCpYMfkEnZSphAUCgxFbV7R3QQvXz4138T",
  "key5": "5J7wA7x6JWm5jvhTRgw9GE9FuGNHkejPQAMFRHxy16se9XausQFthoLLPr1vy1JhxSWXUfYh99u2PeKciCeJVNct",
  "key6": "5vu7ePhhjEAACuyNUxc7h9sxhp7rfdn6J4JuyUBs95GADF9ty4bPPauAxdQKPRtj8weMnT9CuAfhEyPSDayj85L3",
  "key7": "iCkr47m3obU8KaqXwt5EadWFDVH2YAemMasYBk4Qoa1gAFAk2mwsqxWPa5kw7g65ZdSqFB6N3yL1wEaEjVwHstm",
  "key8": "23Gw3cy6XUcA8T1btr9j9Tmo4bbxVRaebrUoBsr4iTJ66NwmxhczqMrH9RH1LETHAf3F5J4U4bmnfPpZkecL5MZs",
  "key9": "5obdnnCrYyYZyhCevD2GGNWpNu72jCbmJRg8sGr9z8EdUMw4gGAwAdbyJjJBsMotXbtNDuydLwEPKL2W5qtNLUBC",
  "key10": "n6HmXCmT2RyxxeEEgViQ4FYn9W9LByLcXhhVVy7sJGUBFKa81AZmDz3KSKrjdt2vroPKpsEHF1Aq8HzCth6EfF4",
  "key11": "5fgRRiDCfGeM7MaTzQ9AxTzMuVVykxEndfWoR2q3oGCxdEabeKqPtgyWx8a4vR6KkFAv39Yjtz26WqYF31V5EzCh",
  "key12": "47VKpXLs5uoBt48seCfedeW98SWojrGuZXiVypXpsvnN3CMjyRdnZ1omem8Hy2yg2nmeBASKrfpLCgcbfWGYEU8Q",
  "key13": "QUtk5m8kN8i7NjWa6WQKMD5RANc8PbFqs1jsfzuMMsB1o9nRmnFwgmTeWY9jPXoSLcPceGGdm7CP313Aye7kY4c",
  "key14": "5WJoXZoab2D8mcYpSfZZQUctURfwHXseMwHr3USSwvQauaYVHqizw72Yu5uHjEmahEVSkbYsuMG9ZmxSkmv6xHTg",
  "key15": "3GxaPegxJ4HquTAm5kqqBexDFQhugoe9NvUcgssHXjKGdQ1io3MDjMdTT3TVnbcSfm5d5kEY815QBYKXCc7ULk4W",
  "key16": "XiWo2oGy47GteVnCyFa4pWm83qSNH94ajgRnLTjofX6V8YXJE4eKfcgTv6MHk2JBcP3jFZvikkW7vGiZW8VGuHd",
  "key17": "31DHeLtsXbsSBQgxWppHjMAxYc8au4gVwmFTABNudHgUW4qs9JMtKJgTQxHcvRYJZo7mYeE8TKvwh2m8Sd7ewFXd",
  "key18": "KwFVEjBCCdH2zzr636yXwyrYLEbVdBKhZ6J3S2CoTSkKsbRVjrvnrv5qsEwzBKPSAofyqy2uD5GXLmW8XX9s7dm",
  "key19": "59wQBoNvKWPfFssFc25FcfVUg4eGwzbsH8ZS79bsoRK8LgMFys1UwXjLudQcb2NLFNo5oUn5Duwdgea1XGCPVuNT",
  "key20": "5EUpykbH8Gfokuy6XCeW3TFP2k1ZL52gARZp24Pbtvt8wcUrWS2CvMYz2i6PCdtdwRNJoZk34T1N2awXDBnTxHqy",
  "key21": "2Gc11mfuDzEyG8coVyH2quEuKhP81nyQMr4uTGewVkDbg3chBzjn7hZx7ryGLEVqqZjEz31fKanTzHxxfgodDDAF",
  "key22": "5qukzjNXpperkN1nCZiHQkVZeDxqYt9aZn3vCtCNR8NZe5Tzh2QP9x87195F5jRzkBuWdyYt3dhBLah5Eo76uY7G",
  "key23": "3ooGKX5awUrt36JkCXmZycytPKkenXfejVebD6WxoWYrYLu4LLrPJ62HmM7RmuCCFDsJViM4PSSpLHZ5hhaV3Qpx",
  "key24": "U81QJesXh3YZ6nwHpnFkeCv4iR6geyKeLTST4nwHipnUdakwHsDWwamNG8AkDhmJU1tN62dbpNUgtsvEgP1P6Fj",
  "key25": "4xiDHu4z5ANNG2MwgK1W1MR7rt4CXwsywDm6duegrwXrCfbx19H9ewoUvkYxcEwBQ5uBqY4xb1ysZDN9JjgXuC2w",
  "key26": "2YwbP3ViHRHLdWdZ1eoV4GWkUSiMxjYj6mgooqbreEkhswdFV7Ytz9wf7qEn16md4QUqPA49P2xwKWxygAYEt1jV",
  "key27": "4DZqygkf61LwcmsbTZorgzmeeqazBge5rEsCzagbXDGmJds8bVdv4c9JhBA2QhgFRu4bntGNVpLN441Q24zE2qBp",
  "key28": "2GUHyijacByNm5zK1CQJNjj9wPXxwFasVy4nvPF6gWZq8p2G2qCaCHpr64rmKtxe29drELy7jhsxWqHqXVi1nSMZ",
  "key29": "4Lo7qEqqg4DwUiWR7H6U4i7UEd7Zab9HoEDJkYYSZUsP1HwyFZCViEy9h77RatMq7R5dm2sVhdCHP46GKb81CYty",
  "key30": "3wXa9zw9N1SEcPy1HgFNBSbbpp42UGX1ZrfGRhEzP3Piv8cHoZ5nukhL3zCbFbRDzCAKoQemzfim43LF1vy4W55C",
  "key31": "4nAqJKdRgpZgSojSanCiT6jSr9K1prTjEGeaquAPbuhnFmdvDmPW3hp48QpXmEodEk6kAzEBgyYtqRWRcrZuFgTd",
  "key32": "yNiWpKPP2cJvvifANu2YtdUNjo8td9kD9CB51wzUZqvJGqZS17JrYTdHYWgAvFXXHygetzWZXA4tE6hmvfSup4w",
  "key33": "5MMsGyN1Rhc4cDAAMrBUzQFXN7wCYAzHnE5coFM1ywMPe8GfN4JVyYKBBHbDeAXYMooQHgwKYKXwugtcgtfGGiga",
  "key34": "4HDGbskMYQPWUHTfDjTsesXCLsfd29qjThvse5iFeaYemcK52scbn7BgMUprvzv9vcZvpJh9oZntrJZ15sbEyr1C",
  "key35": "27QkEMPAvjjY6rNYVhbhzVgTZnTFHaYTGPBqXFocByqaKY13NJeTbwaf4gHbWPRAEWjmi7B2FDo3ZZV8NT6VsdAn",
  "key36": "3F4TFF5zVNa1bbgioCQxbYf4k5QweyzXcMmPbHMvnWAYjF8aEE3fd8zF71fWPnaH84BYwrhTdC47j8dX4mMUiWG9",
  "key37": "ui2QeCB1WQbNWFFaArAdxULQZAEtgygrL7R1hdfuqgu7Bqimhs3DtQkZ22oRUo31cAPM6Wpsdb76HQrxJXv5tYn",
  "key38": "5uQZrfdVwkajzacjqL68GrUQP8yuKijKYNrkiJuo2tdpnbUd151uLh5BtRHwrgeD7yfEUJJ7sdg28ZzCSQonhnaj",
  "key39": "2H2NQU5oFs1EJs5RBuvd9hsziyx95KjPdfdihiB7miH1oLKAw6EiunLDoHaaAJh9vX4JHWDgH4KQ2HJjWppkChZH",
  "key40": "2WVwP9mTypzNPj48m18TAxyKrnkmJJinREvx23tbTcSDzTWhE3TXEEAdKTVHhzPXUQnEykdnwLPYHdSUV9yMQrNW",
  "key41": "4XQvkSj9jTardpHaQYyUbYw8BkDd4hWwJAMHMeqdSWXktDUhvBX3nozVPHLKRFBBPJB1AJ3PtoavHxmjYB3vKsaA"
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
