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
    "2kJNeipXHAMtUX27qgavuSNfLjyFNfFmdrequRTzcu3bhdZfgYFGS5mt4TgDh2JidGLmckC7scMn28rSbjAv1gjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G7c2VdMAsfPyzzw2LCQKQDWzXTLhMRYRg8ofEj2qvVVfsaiUGgsH6wfeS2TvWMrqSg9D7wPR7WX4HmfN4NRU9DD",
  "key1": "5ZNyXbzoYu4Ei8WQCSeMzspvxcZ64ybEKMuQByLEtSakn1Tno4k1o9256XDScQXxthxYUV1XMddU5CwtapUTi6Ht",
  "key2": "55eMr2Cn8twF9hxk3LsX9Yd3aL6h5FmdEcGVquRNiGfcQTCHBhc3YwHjdn7KAbDbJeoPQssTWLgB2RCWyNjYet8k",
  "key3": "4XZLCfxBkQ3WwqazFiZr9bVbPKm27dhM6YBxNCPtur1q3LyttoJ7fNbiL9Bj7wV5LtGGLVpAm5LhQ1pgkUc8wUwG",
  "key4": "bLnaPJQPG1HkLdywzDAidbtNiNGCZsQ4RxVeGN6n9kXqTM5VHp4nnAPuwHMzMLN6SxUbP68SSfJTXoqrPED66WH",
  "key5": "5NnUntfBXwwUpB2vC5uQ9M8RQEzAUmtHGvN2GR5Jd9QmUiTcunFCYK2TzzKG8VdENs2dGMoNpvNF9Nvzwpm6hNK2",
  "key6": "5JqG6Ce3igByhwZyYrha3S996eUVkFgyAwFghSbSDsHgbXLnhZh1CWuRQNeaGPYkeX5AVGdPcPgtAm4MMA2EX6ow",
  "key7": "32EqDXbhzFNdZkSEbahtnQ3gppkDQegtWPCwMLCtSP5Z3hjrQdeavmYvHoRZHvmJCqp4hFu5r3Z2Tei7SvWXM3vt",
  "key8": "4CiC3GUv8Gg123yjtAcHK3d3pBNZAhAxZExX2FPdLigrgcaeaTofRbeHXM4eQKBuvoLhXbN7Ayb9oULwm3aMB2b5",
  "key9": "Uetko1G6C9kGFXaoRy2fL8zBAdYVzKRwMS1jcPZjct1YSW3k4UCeFDeTDUYNxMBidnWf8ejeHkFQwKrjhAPbmFg",
  "key10": "5xeP2tPBWtWB256pwKuJf4Cs3PBvByn2T7mrUFL9bhepukCcfrPWQ6RAFoHX27CvVsUU4GLDRQx9vas3NDabSEEg",
  "key11": "2BqbXBZh6NrCrpyUqqgpiQaTwEJEnwevjKxE1WLPrQAdBbkS3rNrgwB1qwG5DAoNq6YGFt3di7JuKaWcxmAxdry8",
  "key12": "2zkh1Q5YMN7wiSW8ETUV6fsZDDa2aeq8KKJJP7toBAoo4ghyk9ABpJTrUg5K2NSJFCksJCZCeu7VR158BLCy7DH6",
  "key13": "4mqHKoJ5K7dSh8quTpSkGmSMUezCwYTrBWvs7kjWkSEikdfc9jebWfF5FfCnjTQsbaoTjbhUbZgi6QmLgeAAbwtj",
  "key14": "631vfzBAie6khHbJSvkn62HJwisYjhAAvNNa33on1eapomwdq2wp3Gm7TMUaUBKxo8xsPe5FEFy8hqjNYTSL7xWF",
  "key15": "WCEDoX1AqN9PEuhxKxqZWyz5NxiB4STAitorK4h2Y4QnW7AfL6LkMQK5ynepFE2Qu6FgFUXpuLucq2pvihVwq7T",
  "key16": "2JfEZDoWiNyeHdTLCA1D2YxJpuw4tqsLhhCyzzG6nFkD7QRJsyGtDrCMtremtKGwEiLGtx6mFKSghpZpAMZwpu5h",
  "key17": "3WL8qWVVHN5aSGv1VhEkkxBXugzUGwiFzJX58F5CdfcFXsanTbzSZ8w5G3qEmKpKYiGijq8Q7Dj6ZF1QKyvAgWYJ",
  "key18": "63JPJYDdQz9MWqUNG2XykhifXbBuq7kTMqPqVfyQmFX9FwUHTZzySSn688KXxVwXoBNEKYqSgxVfnSRje8evmxua",
  "key19": "3RqWHuucaYG9FoFjC4rbFnNwTk2ynBwkiMyPYXdFeouKHVjJQrEYjudUrcAe6ZWf6p25jMTthfnVMd1yuzvoDaHQ",
  "key20": "47PdcUTntnP3vwDwBeYdeLjRAVusZLfqmY7viqPsx7cdirzh7zu2tPLre5XwzgomuAS7MaYVUAxduX9JLWVT3L8Z",
  "key21": "2w5BKfeYDJT6FPiyuCDyt6KZjGFLvSe9d1TG7rGqmjuGsfBUU7jkVhfmQc7VsueQQrftpsYuLUbze9Enk8aBnQgG",
  "key22": "2Yupn7ddAecRAFLwLN6wtyKZQppG2G6PdBe2XxfkWjFgaHKaqCDX4LTbX3WneYQCa3MDWPPnTVDEFcCCHXY8XNYT",
  "key23": "31AHV9x4vuQrrWLwZgK6jZLtpkRMg6b7SN3BFrSQuMTPm1scE6xRm5r2oXBZUhPTHtE8wZLxH8A9Gz61VPo3eYW9",
  "key24": "3D3Ejk3coXqgUW8Mtg2YUFHN2srvprTcSDDr4B7X5DmbUMtZ57NXLWMt4h663ZNRtpKD6jaLJsvSKke7Ho31toMd",
  "key25": "4xpMRKBbhhDKVzYqP6yW4gnKtBtV8kELzYWrVYmRPRDbaTnVuauGMeCuxKYEBBPxMrpKZwjreb19cxUEs8dr4TWN",
  "key26": "4HNT1yURQSkKbrGoWemimcC5Ph9Qy7L6E2Si6HhJE3xMVbUcHTq2vhnhWZ4x7oKMHAgjUfbCE3ZvG54kXALinCap",
  "key27": "3K2MsgZjSnEEEAqkeFA5cAGuHQcPuozMXy9EAdQ4Z7ukrehNPwsG2uCedVwGwjFvNWwm5vKzRvPow1RfNBwq58Fg",
  "key28": "22q7kaLNgPf3PMMCof1kNvorgNHUi5F1EYqWsmkHmamyWQzgHy9v5wjCH1c6mzn57MDAKFWEzHWKnfUWGqTtAdDG",
  "key29": "ErojqG2ngKWzWZ2DdoGmShPXMq8fGUszYrZAr41HMx593PHUEvfkVZqpJQhUK9qLcKCDx4rxgRovQ15Br6wSKku",
  "key30": "4z9ra3efiReavvAZgeQU2EeieDRdipZZEvWMG5yJWq6hCxwpScNemHc3ffib9KNKw4inX1NvdLW7NZxHw8ZbKY4d",
  "key31": "3mbqgSKMG98mL6CZPkNjP6tYXZ5s6f6a1eXiwWSCXRyq1m6rX4YAev6Lk5NRNbHRvxdLJs5w511w4CAqbk6Cck3a",
  "key32": "4ndx8bhwUqPtpkVFPnaFGCbmLz8WbcqzK9zKDRrJD2t1bAFZDGbipPDB8DNAfu5VjiN8BQyMoWUGndTALeuRYhbJ",
  "key33": "3SooX5DsHkKyby45KMj6YddFwwv4wbbDqweWa4m1G21AZJKsipGzVFB63qJfPoQqy1aGR2N8HSZpC4CYmvJbUmWP",
  "key34": "Lxgeikgfk9BYbV9Vp47hmfhA5Nc6g3h6mFiwqEdYpwxKBYRFpMgP5CFmHN5QDoTPYiZMY3UmDZWtF7x8V9wg2jv",
  "key35": "DF9G93KdrNtnZRLkn2L14w5Zpa4Z5yqJLbJSVxyNJ3kUQTFP8PBmnjMDe6yQWNntwVAJGWRWMW1YbyMagmMFE1U",
  "key36": "5traRorBbubjzi3hfesp9VKmvQ62JhtGgsWK3jWZUUMfcdedKHsekA5yqLBrdKYS1aKGEwVsH7mGYU2HL4TFuvoM",
  "key37": "4fJTrjktAoEn6nSzq5vo38jTuoeh4GDyUpAMFkeFLnA2qnkeJ2oDPqcZPzxF4McyZd6vYE5MzzGhotZGk8EJbtgy",
  "key38": "3qhE7YbFyEhhWjQXLq68kFk2xUYwMB6ZLs2pq1vhk6U9WEXfdAMDLc1e56sNzuZP7D7bdYBiBV6SYhsq7GQsKd67",
  "key39": "5uVzS7F193Y59WPWeJmMDhwwf6Se7YhrAoHjGR7MNm2W41terRCcTWLTKkohsVvk3iB7M9jJFq25KBLuribhFFEK",
  "key40": "4aFg6LpbEwzXN5ZFXFPi8HRW8RiEKdToDp1oF9RFJ4FMNX2a5envPErKnHbSfXbAfYHnVsPktRm5PD4zv3WryAwm",
  "key41": "2jSkv7oJjxc4YkqadbHNtVM3GKDjk9SVV68dSmy78jg1ticxtrKVU1kHGorsUg8Z2NAYQZhHfGYDeMaGmC9FFjC9",
  "key42": "2ucQPsrvePffUZ379BU6biVmVbGJb6hWnfpfhdtKaj6AWcLzi5sg6yycTFn93Fx95fPiji1kwwiUAPbyzXAHjM3s",
  "key43": "5RzTSTQ1S1x5s5qCf4CLadutShBQZCWqiNyjjP2pekbmK79fq9chhEKQHfdL3CywmWbRxkcRs6Q4uq5E55raH2uX",
  "key44": "3D6WKXMqjFwVG5x4FEJZaWauCy31WwaE77XLjerUnvjGJFGEVHWQSfUpUngQGDssJbx1oRtgkagHgsMfokGwBYbw",
  "key45": "4JNKuehSbAQsgCoYZwiDdXgbVJTqUiHxQxTTpUtCsqqqMXkApAyh88Jfn9NYh2gWRjtgvDUbpAn1C1HWRwGBaGy",
  "key46": "4BHVE9hvAFma7X2grRots1da2qm8pa8bJuttir6fNoGkuw4hGQFoCmFRwht34FeM5iX43BY9H9mFCXzW3FvnECn7",
  "key47": "2qwyzrbuKfQvv6F1fpK21R7b7nqMR3Xpb6ebzN6BABZAGZ9vR59Q5yqehMxqSRgar7LL4LqKVhPxvjuqNMnASwv8"
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
