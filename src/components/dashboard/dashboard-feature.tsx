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
    "5qjoXFvFzptL8wWPoCVkScvLFkbgTxY1fxSfUX8P92fXYrbGBPytgqWvi91YmbtL8FiRewEFBEz1b785TAeMd4z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rwHBbyERWBeR6JYaXCwpgimnrjbjwTkdFjNf88eskF3iyzSxE13WKsUHZw8BNyjmv4ne7gzGDH2FqtLZqoHycWD",
  "key1": "khpw4tcX5KVtCy88FBDfGNrSe2khuiQ6jUn5nZNktGyctYf6vLbx6AJk9Tuaj6qZSAftqLiSUhGVxwhjJTgRpra",
  "key2": "zsnpzfB3tFAA4A5Q2jMteojB6vrqRAhSFMhDHvuEHGUQmR2KcNGbUg9ppmbZg3ZtJwfJprrsNh2Sj8ZWHyXBVL5",
  "key3": "4Pp95GqeB64ckNQjJjrEMvmaCie44XpaZtao92iJuh1jzWdv9zsmj3wCXK3PrPsu7y5Fp29kodcphcRYaNyvSF4Z",
  "key4": "5XWEAb4X6CE6f84QiC52m6apVzRBgkWtb4qtQZzLp5NYNgivm1x8dQ1kg9J8Dt2JfD4gv2y2nKJvgFiwQJQGtygE",
  "key5": "2q5J2bs1MYDkujFhjSoH7ePJRox5A4BEgMuhgENMeiaJPiYALwUzwJFUivXZhjmsTM9jdMEeiAUN2748ED1nnHxY",
  "key6": "uu2TsQM3qBKLMax5L33dF4z2B2wSsmRGFmwiFN5pbBRjKnrebkNy3ZxBodJfeJHRYwNfH3Ra1FAHYx6vvVU8ZWg",
  "key7": "6Enr83fDhMractPKUb8gpV2FWQ2Jx9Hf9MLeH7RLBEevzA228h7pCewJE9cijHpMnujqtN7LPgPJNJ4z16D93KU",
  "key8": "3gH4x6iH5fRyniKYcbks31dvp6wxYdEcdCvSjN2ZJXbPpQ9f3FqtWgTSg2ggUyUyoMzEk2TPPGci8goqmSZE3Uov",
  "key9": "4LCZ7zg6j4tpA9zFfsPW9H7JDGc1ScTMiyekRwu2CDi4p7WsnmvnngEJYgTL71naXb4MWBbq6MnfZPhSc6zCENti",
  "key10": "5y1XDFnUN2eqxL78FxcPHaqPBfZNTss164ZgU5vYsExcKy15rH77RYNJJ879F9XWnGfqAeTc7VUwC41R1oaVBMdM",
  "key11": "18JTPf2pgUZV65n5aYXDLuqN28oiL6iBUhDEQhjk3sApW2B3bB12TLHxdFhka4zSe9ompT8YZ8zuXyWeByjPAec",
  "key12": "4ixQrEFRZx6d8eUbvFo31nc3VgAG84zEM5QEhpR7rgvaZUJJQvE6iGcgCePPjNZFdpDk4aALzScgMWJ2cwvz2srd",
  "key13": "FPBi4WBbjk12gcTQbEs1pG4fZJPnz886jgGeUs3FRTVU2F1TGMkMq9gMVqoxmwQzK8CZnihT7MDmsDTCBoUhinC",
  "key14": "3rviw5RBXxSozwizemVgVMaLEdvW5AUJEJBjK2GnhSJmLzFdDwdagaqaX1VxgcEYfLUCDtA2qqyg1qkRxZ9tPFhj",
  "key15": "523AGniqaF6CnYFWJWQuJnwQWuoCjuuuucYBUXA1p52B7d7dPtraPEzDkg2PiSCGqavMK2LmHfvzLSgbs6aVRnng",
  "key16": "3ZAc5tWpwNyfXvMjRTJPauREuePygBRzvhhKMwFupQ817VT5QmuEwMoJpMUafxcke1t334dfFqiZ8mf8z9mV5fhH",
  "key17": "4qhLngePxAL9LvfmcWTUZrHZqM6tPqjECWpxHbsbmYCvCv6ATrkShR2SfWcce1ThfHPXnAPSo5g4yT7iVof8UiLR",
  "key18": "2k1Yacx4nbFSV33i2FT4DSZwQ4q27kQzqufBUJv19XPKsy1Vmh1BvsQaeRNN59CYAehCBdQQoekxoXwGMKWwae2r",
  "key19": "29QxEzb2Aopf1skYvHwvw61nEmrmdFhLBF7aLav9e7KU2bXJrR5DWzkogvzaq5QRog4GY9aprBt7jMrf62BgsuKm",
  "key20": "59UyjoU4fM6axywy71VgsvGYPGKQre6VS5rFd3Qq8S5HPvZU8Y3RDgUAmDpqqdCCDf9BXvxTFmXtj1Eb49tRBsx6",
  "key21": "4MDyBQR5XCUxUyobptD9iiS5X73WRVmbSR6MC9kzv1sbchCZWiceZp6BVtutdfyB4WNdPknYmNhKeXAifHahZKEw",
  "key22": "3an8wXbgdQzJZcoPjfJT8raPdZmyacwxUPYieg9q8kzmMRA4tQS2uaeRmSZE1E95WCA89SX1oVmQhk7bLHr9wGhh",
  "key23": "3pE24Ymyw2zB3L12m3iKjyKz1MJQ8AbJX3ZC8nYaUbV61wUkc51LDuQDkXf43JwVVHXpWYuxMiGTAzK6JQtfwqv",
  "key24": "mu19LJPfy2c9tdkvynyHfsbcDFw2A4KpB8zwjV8p5GCbsPSDjVwPi1HAcJEhZD7UJDaQBzqwh1oU4oru4XGn73C",
  "key25": "2bhhLuKMZjFJnKQGBXBxMFfY5QEEUUMrkVmx1x3LEqb8zyS4Bo8YdZPaLHArUWcAV2p5BWi6Ms9pDXixncJoiwKY",
  "key26": "EKwH1HSvtFjHe5bhC4cSBzxx7vuZUezCDWcY7iXrgueMM2zYSU1Uc2JEvjtp2C6fPzTdeY4rV4Zu3s8T4vPXCiF",
  "key27": "4CzfrY94aLH7KyDAMkfoUnDdcP5V1QVttowoo3uqfo1SiqVsqXJUSV4owaf6RR17RgM21XAqWovngcsPpAq9LdeH",
  "key28": "4jy2NPMGBpCEjsQighpJTErJenouJbgVMgCGHzDnLra8FZBuFNPjQdN2gq3MjTxRBNLB4UPQJR8oUoZ4UHWKQNRq",
  "key29": "5VmbTwwJxPcVoMiKazQX1T1YjkAc1VTanoJfxz3qqLyHhBFcpwmfW4dfYQiUtVJDXNgkDsr92Y8C2p9MQ33kWxyy",
  "key30": "4vGz461DmgtwyicQkti57xK1mb3g7iK6thg22aJhR9rBKsFhCTBAEu7faB8jKZTz8kbv9W4Sg7FrjyjPaP2FqMMj",
  "key31": "5sYHrZg4aZoe22VnHCc8QFjWRxm6YSvpDLhfru4Qrvjj7mvTNKSs4tX2W98PCoa3iGCZm2JQGuzQtycdFKCpzir8",
  "key32": "eoW68r3veGVd3iwnxU9o9KyifdP8nWRkkto9TvQU49u3Mn7Pa9wxhyFAvGb6Ft9B2vecg8uWWiGno8UN1e2LCf4",
  "key33": "35kYf6NxS1tEwWHj2aJ7J3Bi8zB1bVqw4PNYzkiCtGBZu1PLd6VwGCm6AorB6pFCnKySNMXvARvSckgDh5bDQTsY",
  "key34": "4Cax2b2sWLnJjPiNDArWktNx8UwecAQRwSBegwcnAcLuVZcZ5pgDNpP9YZWKnuyDJDNriQQrQSCFoiAn2w9dCZcH",
  "key35": "5YxyaTqyQ7Aksr8iRtoaVXeuLxMCzvYWwAXuRNRkDCdRZCpxcCzhqfFSLtvoY1e4YeYKKakyFyicTRuXqi7ZNkXa",
  "key36": "5MFZoGrmSbMuVP5jUv2QpaMseEJZiHya5odspSmiAW5e5ai3CGieudVp8e6J8eqjiupr5Uyw9s52K73tgxFkutj9",
  "key37": "iiW8qTmk8Wkudb1ttMM2mXa8dKGVkk5hzF4zh6n9YbEWbCcJKvoiXe7Tnv4rnEypeoxEKexj68h3hMrHfMWKjDq",
  "key38": "2NVziyUPfZxoYVbUed4GzvRWGzNG6KJ9TFBK65BnpLJZuRBUkveRupEudeizwJThW4P9JXMLmnj2DGG7cpgy7xTs"
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
