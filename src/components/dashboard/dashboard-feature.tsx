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
    "4q2Y19PKk87CcV4xDizRfFya3K19kHt8saywCxWWWADiog4WH7st5J44TeUU6w4kGK8gVdxv2CpsPMA5dK4kUvS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nXtXU6WJhU7U6riS3YEenWRHyc7QR3Y4QYyHMFhbwWWd4iWDvdjy5cG8D1Ku58Jrx9NnEPynpWZyuWdxFNPbNXR",
  "key1": "4bz2ftqk1o9C2gnmqCx5QttJPBxw5RU4wEqWdzvwWWdXzxdc3B7JuzfXis1S1CyaNbqMySu5PJmQUpq7kHGE6JG",
  "key2": "5VLUusgYZ9kUXoYLhqM87DaRHoSzQ8czSpQPejrTpwnWxRTCLu1hXgpQoyXN6BAq67DkqHGJLRcFoZahEHLZ17zD",
  "key3": "484znV15uW5rBGJtsiu5buvF3Mg8a2YJQ72HTJB1jnACu2tiJyqTWZFtxcDScN13Qb9GtTHaniJsxEEvFX5Gbrv",
  "key4": "3ojQmFMPWCryp2X7BgBnZn6hcTVBtHJuhUvk327M7SgeepxSbToZKqTxTg3EGiAGotvhsyFauhD14S7Gfta6gb1J",
  "key5": "5rzpmUzttKS4Mtf8yWpZq35Arxdfry8CmWkC2WSHSJnoJK7rubeipEDtGohpruksbB5wcfPrSSsTAACS2eBqiZrR",
  "key6": "53e34xoiybWcXipnWSXwxp2CbBdTA1W8GMXK5RVnSMpiwRe47QHkjTTaDQABdnZDGFzbbdZRoUWHMH9MYpx79S4P",
  "key7": "e89Fs7kVfUvzVTuJgNsJdMGDnCXeJJJyxMVjTTq6Cqda67oqerEvWKnQRGR2qyCpeCepGtTNLSVxa1vQakYxF4Q",
  "key8": "6B7Wft1g8ghWoJiRm3PkZEhJKrpd7vTqLQHkDoG2KEwQ32FCJag82C2hKkBtbZc36bCQpJp3tdk7RQDewmFw41r",
  "key9": "4GCX8jX3TWFfDNeo4RQj73ft84AFCoHKiJGeJL3KHbfxEfX7YPDAcNRFEHAggBNuLNfsSqSHinhEy2anapBkunK9",
  "key10": "3tXf2FaLCJPR7nH9VtTXYYPxA3qYPC6hik7PCXPLy2owHFWmZ4hPomHrkofBXnZJBf83oYsuPN55J5Vsq3ErNcHe",
  "key11": "5kbqAkfVp11DCN3hRcaYQ9uYb92isME5qYA1XTrZyf3MVGGzk7hF6qcvrksvFZ58KMjjYYM2vwEbrTecqPMgVFNi",
  "key12": "4a9GfdsJsBgCsWEnMQwGmQ7pKcFSAt5bwGUr9LyELXWnTQgHEhDij1SwFewKBGzVZhGa5gmTxCBCm96gdkuHsq8m",
  "key13": "5Df4ABgyFFmUudJb42JBgbihkg2dveZext3BMKZ6UcxtNaHEFQ5rd176KpDRQQaWpBeSJj5cTLFrxLbHPQopavA1",
  "key14": "2xREh4AFboEkXDom47rQSP7ND661rPWTdQCpHAmWHL44tdhdiserbn3jEpA9Gx2WMc6a4GjsfWzXTq3gECBTcJN8",
  "key15": "483LeLge2zGaXUUQg6NfCXEs7WFmvbJjLT6oEJs9gBj6jzbrRzFBWpwQidNoR8pjNu6Kgs3NiJ5hfK4UrekmWdy3",
  "key16": "3snW7BozonrUvS9Gg56wzBHzgs1bcrhvcjjU15NzMumeRUAeWsoHp9owdNTvu8dMN4Zsir6tiP5BRs9GBd12hHY1",
  "key17": "ypf1UiCxfQDCxMPejHvGRi3CgFSGFdwRUCe3VA5SJHSfCRPpGMWdM49p65yKFYsBgBE5LtFNH9FBtVDN3HN782C",
  "key18": "5iQSxmNKFpTuKaoxaCXZJB8hky85t4NhE1S1GaSfagV2k4KDuaWwuWX2j41Qb32Fyvs3eeqtntgDvpbX7E1MhL5S",
  "key19": "4AqPAHjdBgsnbtaMpUBtLQZwMJ4FfBnLb8NreZsGGZmpDfoCWuWCReA28a19L9b8m65x68oDcsxJK6QnpTgPNVLz",
  "key20": "2PbFZEUTwcbmaYSZCyp5deqpxy7W2XkDCZAFsnpBxcLcYMgeQonp6eYz3s1SaUG7Y3aCJXiq8d7yAUDepTo6fB8H",
  "key21": "Jqv6yfMpe8odJCanKm7SPv4Hq72pHkRrQGijzS8DGxhbQmZGj7Ckm4QFwqGW7T6ANvhjC6QgNaGw1qiMd5hu13n",
  "key22": "2bzNJ7zhSEF1yemwyQeyjpkY5QH8XZTvapSPPf2Uh4Wjnc8WV536LmuAHE4SE3sQwRRL67DWYCxrFa7QLpWBqczo",
  "key23": "2h7BicqHpYKEuf7Qx4DQvAUACZfvoWLeJn7FciNzaXZ5SDmr8C7YfeSUotxgjAt7iqx2LdKSjirP6d5GZGtzhgnS",
  "key24": "43W736CfVV4jshR8jNfaMwRhit5YEo3DSk6XrPGS3iDCAFnk7RZPt1XJX8m7WkTjie7FukPbKBiNxWpL3Po6Wd5e",
  "key25": "36dzz5fyf6LCkNbD5DEBsat4kHqKkPNRq7tcAxXo3148iwQdcPsZtnAzQnMVqPD6RViZqgEKM9RjGAoZvkk3RbxY",
  "key26": "2QCoxsQ9QkUZXAoEyYxDRmyi5K6JFGhrHUGacWFDT9eEA9VJiApBjvWDZuxBxqiz9iMCF3j7KZ8r76uFMFnX3WmJ",
  "key27": "2sZs9DfysqJ45ATHxePU6yXar1wGH3VZ1NERrWyqDKFW8ip6fFJSrBmcPV51FLk4QgNJZ52cP6on3kXRsRJgtBfd",
  "key28": "B4roEmZHxYP4iZeKBUhjQ17zF1UzkXuUsvb8kdurtxQJ8JWhLQcmvGp7DAVGQJDTwCiUsBhgg3JuvvMfDLL4kbo",
  "key29": "4wHxHgMyEn9Xo8afjnJLnD4wXidwEaN7H8vtEArRNmjYxYEn89SCHqPrMkXZfeGwxBfABQGUUatN5DS6vSmc3Dtm",
  "key30": "4mzLCPkkZWPGyV1a87moZ3SiTmofEK4B9bxXcEuNjoErD9z2u9fVYJ1KSpjwn4p4x3T7NLawMz43gro9c2MXKWvu",
  "key31": "aGHhr1gVLAbWEzi6vxvGb499quZi1cdEJZhidYzsSYW27qE9zV1vRvtW7SAFXJuKby6RoLqqRMi4Mgu7MPJj3fs",
  "key32": "Rh2QKvcste2W9Dke7iKDaA3r2ypcmcscoAQUJhHaP655np8prNrZWZr7XrkWFJQK9ENxe7X6ZTAjqaF2KRsdqip",
  "key33": "JykKXnhj7yUWLEniUTkJdoPSVFFxZNrbHHvW1g5ZgYCbT9XLUBae3peDSKuyNPM17zNVmt45UpsQW55pxVKG7ca",
  "key34": "3U3SfaVNG9JqCBY92b5jbLSWNcZZjfJUXRyUnEL9gymmZxRgT5TCvViw4DVbTS3FLKqYew9Q15Ey6cuaKRfM8LUy",
  "key35": "57hXNaE4V2FR3ZgJGSZFg42qJW4QWmquTFKBuY9LzZpkSzCYbKiKfBCVsQccj4btMjLWWJffX1BrWucinw5K1pev",
  "key36": "65db1jieBvPjMvauFrFMwZBYRYMskz4L2rDxZkWK1CFYBzKSjvE2roSsB6aH1TaxSou4NL4DtrGdgD7aBBbNo71",
  "key37": "3MwewKbhyuha9gL5yLkKhb2ERnRExEmwAfPSjhXuiLytqutRk8qCwou9bEHqFeMJuRnuNJ5m24Fi2PUx1GyByr7y",
  "key38": "5EoMnJEmqXrr5fWsjt95XYfzSVSFfxRjfk4jAbEraT7vvJ6ddTZ32pmaphNBSqNmVuGd9kmnpRwRk51R92q5XjJi",
  "key39": "2ZRfJ1p9epZs1jEGSppfQFfhEzR5sd2DLrjEHBrf32npAPs96sr5jzXhc9foSeXyoETmRixrMi7VtRj1dDtU7cuD",
  "key40": "Lt2ieAKD9ZYVbnQjTyHieDpoSc1DYsS6CxE8Bftbbr5jwcAgT6Ze1TNLAfRbY1GDFn6RwP22a8inf7Krxn9q79k",
  "key41": "4u2aWWtm7qPcqRx48SunmmTvNPLxiMByv8QAYswDNS3R37Hv1gAkChCEfUX1F3cSarM3YgeNYADGu53hufzHk6gP",
  "key42": "5H1GfsF3MV9tTjkVSZJ7Gmj3NRA51vrr6o7ZwYw9R9XEsMaQEhsqn3WJZnvZWfVmZ3yRa6EWeygN7SnXU6LjQeq6",
  "key43": "4RXcGvir94erGg9rzHL6LyBYTEJ9z61Nrn6hLefqibcckHvB4BuKJHai5qt6fmyy4yQxQSC4ZbB7igsrVR9g9X44",
  "key44": "4rcQ4JUDVFRRgb35AoMMrHFpStRK9jDLAd4t3u2x4hzJ6A4Afr8jfU6jAmEMY6L5dBHgyBhNcKTVZHKA41br2pQv"
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
