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
    "4q31xYTwDbUfX64XoYaca1J4eP6RixC657EXQvPQ555S7oUVuCsT67yGHPgidLnCzgdtmCFfh9yJhJttjt41Ur9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SRMhLvRQHCmG7i8N4AvfUQjoT7MMay64KBiBhEARs1vwp2LKNg9ixBfCewwd8gTDjgLHphMWF8x2N9mMYRFsvyh",
  "key1": "2ABanCgn5UzBTmUYNBcaZBWaNTPVuyVQYxajCqCUxZG3BGUGvuezAjso9dLsj17PaYfnZuqU7RsGRMESbjgYT88G",
  "key2": "3wVABMVofdS5Rc9aB9vUUEUGJHDdxeTuCCdACsiFQFWJDgbtEazTgyeqPax3TMkF82joHVPCRWaFom6uzucZMRKB",
  "key3": "5QeixcAnp13Jq4THwFonk3MdHQVb9LZM1crJQBektYZF6rvfc7gvMzQbtxF6uvJDjKHabY1Md5MtJFfipqyeVvUx",
  "key4": "5TDTmrMfeTjyoZk7FKsxRuEucKPGTSLxyu7C8Ya9wPCuBkynA78oxGhGZ3PLk72Eu8iqoorU7JgihCewCukuHm4d",
  "key5": "4P5XmqcXX8dQ9oHiARomjLXfwEPefzdS1aMtB76QNSKhXi5e4QwMheGPgGcw99cKMvxk3fJNKoNw4V4RnABtuodp",
  "key6": "4VyX5CAc7RmiiMCmXUPvSbqGaBcGdJPKnjqXybzApcY8wLzV3jhFsEcyXuqQu8K7GKTUE1YcJF5G7KYraHyDntdC",
  "key7": "279hRFkgQ1AnEXp4J3oEqUpxGXuKkFwZRB1cGqzzjBx9yRc3exisbCDPG2FayhnPn4qHXFvnndngoHtssXh2X2Re",
  "key8": "KsLcnxpSxpqRD7VvjXP83HaopkRG2rMxtuSVs5rU1cvAv2Lo29LHwUpa6DbykXDE1sopyNfHQF3CxDr2UHoMW2a",
  "key9": "GEhLxwLbsczpX44VzfLPNVntTReUryyNzGq4i8zSKPc3GXpet6kiZKrFdgPhkRVQbrQhk1y8w2ybST7MW7dJage",
  "key10": "2BFp9Zv4NpMMz3Sy6TZLvHRQPPaBLYZqzxEWvvzsM6aBCXiLhdttxxkqCBFEr99vULzzEp6jHCFYXAK1Ys6wCw9e",
  "key11": "3s3GaajHzXhWaz7sia2LUkoqTShiYgSSfySpUw9nN2s5KkGRVZGZWSiaYjYhkHnFSnUGnTcGJ1iKpVh5w5YKyKtT",
  "key12": "59vnojVsqFr7ndbRsrF7d47PX6dYYvAAtfsmdzEw58TuJdcc92odtKRdoNoxVMszSVquhvMUaMR7X3eSyiiMEbR5",
  "key13": "2hCtStwvWx4sGZUSr59aGjmFnoTZrwk8wPfBBWBxZWxWAtRFbUrR3ZcqZoxhUpmwRVQ1ZdskQKenyYuCgbYFHoNk",
  "key14": "V9VzpZBcvVBEgcWXZMZYS3PspWK8ro9JgMK5wErL8prv6c6hZqdThNq6gvMSa8hwZXY4TD2RNzUeHQujWSuR6qw",
  "key15": "47tXy1QToDpoxozAnDsc7A4NVU9Y8uxb2VXtSq7YkbpZ6E87JfhR2gKjY6rHxjfBCRbGUu6v43weRoD6KS34dxt3",
  "key16": "32bEoYTJjLZ6srKa7DqM9jy1o9N2spAz4jbjDTw7h4qPmE2phzPWgzs77oF9GGsv6W4QdXUwtJ48tRqbDCR55q1j",
  "key17": "17z1RFDeH1tkqsAp8UHiuS159MNm7H55mFUm85ahTKpHNoK3osRytPr2FAyoyW28zGQypDTeVt2aUmJPxSRw698",
  "key18": "3F72orkLT6qEAHwGDdfvsCUpdQwqDeABkR6Z3ZHqrZx2DdVJT4NaVpgicoGMWF78kXFGUKgDv8PvwqEk2Nub1EvX",
  "key19": "2uk7UQ5ASo1yAQmm7EGHYFSSPfofMTwbobZxphSsCd3WNBFiv3ewnxE7mcsTEQF8yjcyLTvhfEpvUypxTTJGcGeZ",
  "key20": "2Gdw3jHXnkTtEA2HLTRYAJr6hso2D515C7ZfEoxfdgU9QMVEJVx6mng8nJo6Zy9A6uy74rRJ5hVnXKHBnafjPdVZ",
  "key21": "YYcxi7KEpv1TSieFGdKVaxCP38UKS4LhfYCNvPP4FQUZnLopvKbPsZECkHTy4Dde1BdRusgL4yXztAsEz77rYDd",
  "key22": "5sHBnQiJUJwzkvUABP33GSME9X5x5jK28UqVdgrhcwSpTTqdSPTwq73JfuvXdMZzC4QE1EjKk5NYGWxLaMdKTQLo",
  "key23": "4sZcd22npdGdWAzfffBVZtrJSnBVfFU5wmHdLx4SNcZWJNqnHdnrNHWwCb6Gvd1WBpieBMySJ6KNSt6ychwhwsdE",
  "key24": "Khpf1sLuj2xR6eo7eAuC5GgpkpCYStDaY887LNWJAQRNkKW6nA5SSrfWrPF4P9HRqizaReW6z7Bt6pZSMiVESBv",
  "key25": "WgNkMYd24C5BkkY46cd1VUBEwBTaYffsnLdaRFummqrskL5kKLwmsmSdrC5chz5v9rHMDzSWqapReEqfVWxE7vH",
  "key26": "3TVMHShK9AAeZswwZRVKMnyJzLUw4zLySrGSYDuBFLCm4UYyMyYYedrp7scFcpefjEn9z33izjBxKd7F7BatPd2P",
  "key27": "5CwG8tQKdsbQush7brFTZxxomMDt5Yn5qnNPt8zhFCk4GQbnF8555f8gs5SFrrFyPU1s2o51hMXBCnrxgJDiw8WP",
  "key28": "5WSVs4cUjbRz1jri5iPNczKsdty9yi7YZ5PmpAeSWFB6ShS5UksCEzTFBx2JxbwFyvQ56qurzriHe76LR3qd3rUQ",
  "key29": "659muSBFYcegvho8m9HaXNUHhT1ZEsXGLcKH3DJjCdtt7r1UnfUuiQCGm55hLvSzgDuJiFc5oxTr2N8tjTRUe3aZ",
  "key30": "5vJUfKyRvQ4W4NMVA19Hz3DqTEk7yVSKYrQ32fcQXLSmBPEEnuK834sRRq7srW2SuNrFv6NU7t7j9jBNDavYSZNq",
  "key31": "4kc9L3AWLPwo2xtLdY7spVSEHmeb5k14MioEy6qEYd9ndPW8PeuXDd8q4ZdkTSLckjfgR3vinwvhFRYsbmrCKswy",
  "key32": "4wQG4bGRLMcp1HDC2UaEvdrJy43mHchEHp9SnUeGQgWE6i62sgXF77tmNvBHpWB4vwEbRkiRTVWfcAY88AhMUK4V",
  "key33": "2test1N8FSxxyrX6DB7QMGA2NZK2zKV4TTi29G55bMsQgVnvBDcZBegGsf1BMGrbvgYrvJGE5qcw3aB1Cd26EsPm",
  "key34": "4CEm51FAqja9QwbprJiiSndTUznnFMqhJUQkAVfBEtdTdkcT8m6Ru7J37PeoAqaUgYmNGuaVExj7FnZ2iWAefoJE",
  "key35": "RinDjNvfYg2a8fW9g5G86wcreGDBUX3cj6uhbzU6GfyumP5xcP9z1tYwXSRQ3mwFZfbR66NxbsN54L6EdBkHqU3",
  "key36": "64JtEtmsjcrh5xz49oXEtB9BUstN8qMriYQguT6dDfVAawFxQuxMY2SLqYYXCbRYx67z34fYRbeGpiPhyVdZ3DX4",
  "key37": "3ZEnm4hBC2phTSEMuGnq1gro5y1vF3U1197vYogop9jQmJYUBskabG5w74gxtBiMG23LFLtyrTXigTfncy2q88sL",
  "key38": "4oiowSysM5o8YXSE5g26SChokA4vKk8GbkDgogH2hc37Bh3WbgWZXjaT7AA4sxCb239h7bTuNZGGUdNwTXy2djzn",
  "key39": "Zi4oQzCP5ELZFr7hg9iUsKfBgLL2wuegWMZNcpw6JARhVVpheg2aXB1jRZSbVLuFMi8u92BUPxTxmHpuyXBqa2f",
  "key40": "mbPSipRRf1KGdeF9T8WJpJ7B5X4VAyh3iiKJooxakydG9fQQRg5fcNgvsTdVijjQvDV9joGRxeN9LdhkPh9jsYK",
  "key41": "2N3kYpYJLdmbj9BUjK7d9qFAjbPFGeYgjg8f7zUhQQVsmegqWha93jrNdpf9N1MtmHAGz36KJ5Pkx5sWKmwBosfX",
  "key42": "2WwJqkpV8ixcQdZWoy9z9f9DadDZAqHxsX6HjeLpDHdnKXmAUwPsGxqoAH5rbX2MVzixVmBgSPNihojYczLm9uZm",
  "key43": "5i69rSrGK2nZ3GzQhkLhiuGojpRmiicYetwzPGNaRtfhqWMTa3UdKbPPgzt7m5fFKaxWC54GvU897A1pCV68877Q",
  "key44": "5ZWycgBM7iXPtHaAYTb4tFJ3WnwWi2ZbCSzV2yBf8afPsHkxuL9AWaeWd5RYL2NRo3oGRhTN1ruFGicpeTvd1Euo",
  "key45": "5htfwa3fDGrL5cwWazWA5bN6i64d7NasC3UeLDnMcCjcN8hrN9JD2HugNGoEbJKm7NurwfyJU5pcBbfQqWVytZa9",
  "key46": "3bnzMxKAsgvNfv7GJS3KYSeZ7XrxRzyaTXdhmv22nJNGf6NRYW9HAGcvqSZoRepktB9eCvrLM4hjfUAiNRGxyxaA"
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
