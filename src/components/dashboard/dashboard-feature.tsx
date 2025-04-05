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
    "56EveD3WN5Cy1bDuaYYnTkXgYA7U9UovUMUd6zWHSrVGUPNR52cQQhWo3PJfe8awYDbSR4VWSvBZMykpBP14z6Ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V16soJiXmsaYEFPf77kyU9N3rHZcJJW5HcN97fuwi9mBeUtAjd6RF4weYKVwsBtfaGwj15NJBSjRjhFCwxkx83Z",
  "key1": "4GWHsSGwdYrcoS7NP35vWVfhjb2cGPtBUmCDfRBQ69kEPZ5iSxi3De8ojw59fkkjDXsfnU5dpho55QWZsFQNBq8v",
  "key2": "3NCA1yCWM36CeF7sb3kHBfGw2VQJa7Ny3upAHN9QohoCyibvVWDurUYmn6dQ41MQWGtnR5HmebLgENveq7RdLpeQ",
  "key3": "4y6wUASGBXM1AU1XEhsurAd6Q9Ec9nTj8xWTUhVjLF1RvJGBjRqGaUMaLYrC9moEmPnDKhsq6wbnoyjbuXF53YXN",
  "key4": "2tYNcqptGPA7fJa9wT1LCKy6oi13Ce51bMs59xRMZJNuzGUCbbaPULedXGNZADpYHBkJR8fUDDQgk4PX5FfZcvsu",
  "key5": "4z5U9xYtyH441hNxdAUyMEzfcVn5xo9bcZnktGYdRXG8AbLF19zeQPCSwoN5Pc69mNbukKZYEoiWMfsX1VMZEGM2",
  "key6": "2uiMUyZmcc5B4WE1a4wk5rtp76yXZtEo2diKhSZrdMZ8nC6bCcH2aWu3b7Vx675yZjZiuq9vPZVAPLkttH7wmdRN",
  "key7": "8sUWrnw3j1gWPtpthRqEkoQ53cHHFnXXb6ABn8G6cXkQGfn9pp86nkGvGDwTGznwWQFhtHAPPFKKVyoNat7UydR",
  "key8": "o71R6bSoyq9pzzVjtxJuD22Xjqq16y3GexDEYWFzzvaP12ukA1t1aLpQtsz74YAgDM9kcX5spqGUjqBCP44E3du",
  "key9": "adWkuADNk6M24oFcW7F9k3Vqi4F8b2j1CtyiRYuDMaDraG1BKzkDhLgStVAU88mqizpj1v3RVZwLF44jbKPASb5",
  "key10": "48mtKPPcF7Wogjqqfgk6mnjNAaUgfhmuLz1e7Q3tchwSZxhY7GeP5oXW82TYNAaiajTRZnMZ8CPgN5qFztoyzrfm",
  "key11": "4DJdx2mxWz26qqteM1k4VP9SkugvMJ4EMhAbDgrTJ3WsCczXkN1zmzbTpSNa8mndDmWEokn7dvs3SQMxQAJPgjjd",
  "key12": "4JnpYHbJvdMTwYbCB8str3h92LxaS9Qw3cZCFetjSPCGSSugyMhKoqMJx9zKdw6Fnxyr9jH2YLuXWnrMGk7hXgPU",
  "key13": "2kFucUbH65GqSGBtBUe2BnC9zBYKaU1A7c6rThCTSJryF21kvNUh1J9YX96CCRrWTepKKFCvHpMuPf4bcHnjGPpG",
  "key14": "yubQW7EBvQ9cMfeVxU6v8U3PgmVoV4gbYgvdjHbd8fE3zHVi7uygTwtXMh8rujkBzKSydnBeXyGxevrJy8cdQk2",
  "key15": "2CTie92o2ZrizGech5cqZ8fQWKe79YfsFRmhxg7hrErxsp123V4ACaXKT65EWPEx48U2rwnSP8QRgsev2jHsJkbn",
  "key16": "a8jArert9qEj2bc6PaT8rWQBLirQLgScJnbqPgo6YRpavBHNRKk5BMuSMZqjfhxSUatJZic2kK4q8T4z1QY64wT",
  "key17": "3hZED8pnTGzUzrFsRUEs8T7aSuN1gzAuM1awJM7fSPu1JyynuH4t5WZFrxp1jsbppwvpr3fzy3oUHR38M4xfUJTj",
  "key18": "5ptM3hwxftJpetb7jCUSo5TpXJ95tcGVY6ejHh6PtKExz1if2Yb1i3Bo2A83tgs7SDHiUSAfhBMrC9iuBeng4DB9",
  "key19": "4CZk9zw5KCoj6oomMiL56u4YGuJcPxTfDjMUJzsMwtG8EJZPuEnPqcLDDTyifxNZU1vuSFhjZaRqARSpmYS9KZpV",
  "key20": "3uKXbJj2MpzDabkZczQX2EdD5CDwSgKPZEK64CmQTzpDuvhSXq19r4FH3t7nMqENZu15usECNexxJrdUozPKdNeP",
  "key21": "33k5C5BR9VGRQuJ72mieB5dTHtUYs7cVZXmg6GacsDbTFU7xahL7qeNM45GykY5yCGmttDHac8ZYCJMZ8MGa9qph",
  "key22": "pt2kSxgHUZ88VVjygncUfNdKG2dfej2PDF8MPAMiU6687nwUEDUVeanQQCmkVHd7cwwBGEDd3SNHP1A8aCQrMv7",
  "key23": "4ucZdAy7fXJVfRBGK6T8suKYkNvGg4iWDas8x8RD44z8UdnkKMUq1ZHnNvPacSii6fzsCUJhn2MN7FaV3WCPfgcA",
  "key24": "3Msqaixo71vTLerH84y4RpgNcPdmmaAmov1UbmXq1y6ckkNxV8XoLYZg92EKRcermWSpvoREcBBq5M7yibRsKRQZ",
  "key25": "5N5eTfJ2WB5h9uvnVescmUd7XNcW8517KSPRgHYfTfhTRnNgu7Vk3Fm1VLGXxfeJiJ6vauwfAuBUDfQcaDH6yzRf",
  "key26": "5eJBtt7DayPwEn5KPwUuU8kJpwN39np5r6Q64d4c54FDqRvvqZTrWeBtihaPiTb1s3j6ZPDuvk94UQ2KE4L2hmtX",
  "key27": "bSGQgAtP9v3z3vesFsQJYReaWi8JXLYSNFTU41hqPjTmUaq1QnRP841HeSwKAveFGZMEPqy5L6cBtrCyXJnPDWH",
  "key28": "3JvRvXxLg8eMfEYfCZ56YL3NDCjhVTFqWxFXpj1i5Ly7TKozEstww8zp1Zjz8jzAUmepWCd4ronASao4FzyjEbMj",
  "key29": "4nRYxDwSvP5jMT6cWPZqKZjmodAy6ZnPixKxDcuxYG49DYwnMqdkE5wNYGzWZ99goVDBTiZNx94V5b1qXAAh7RDh",
  "key30": "4dqsYBrezJx8uFkc8MDeVcCP6AAfEXBUMN41pKCn8jQMPuTostkC4rDe9Km2Km2WZc9UMMTUJF8oGuFXL32angQa",
  "key31": "KNr8uPSTJa3kVWEoPKQdNTDDS5ymKXjDkC2iDnWhxRAJvvitLiVxa4xSm4Q2WEXuh7upEFGcXN77GmstMzrfhxE",
  "key32": "192hPsNC6LWXFrSKMhGJbPmhi3cU2rZc9k3uAVcCLhrFxEHr5FJ2qko4unFmGvcGYYgYrbY9AUKw1YdusCumgqP",
  "key33": "5BR6vQiChj8uPhRRX1qJ6p6ZT71a6nSD1hy4qCD7uscTje559fLVzryMjYSjxYCa628YqFpADYwLp9Ba32N2zgbE",
  "key34": "KczH22uN2aU5tSnKRqJk2UJ62EoAU8M1bzfUEbmazgtCJXeKcVXrFVVFcrAPryjiKe821s5WTAqftbSn6BsnMXa",
  "key35": "3ujHCi79whhZUhzQsPJkdnvY2JLxxpqjpZiQ4NQWaLaSzi7T9cUYCtc5ivZGQhZb9U3vULwRtb8Hwmg5EDuNLd1i",
  "key36": "JKGBC2zKfHwapAfLRUYmU2C5hDu3VHv5kKvfZHPk26rfRyppgs4iHoLbd94vqZ2Y5w1LmkJ6vUnoJPwfK36Qqu5",
  "key37": "49etvcTFYK3yEYDLLWwTuPZ9ZedLNV3usqJ7v2QHHR7NrExAgGa8nP5KhuxmocYvgAvsLiN6ALT97bc6yhJ5ZKuZ",
  "key38": "4FbEh5bqYT1tmdDrQKD1wBNB2DZ7gTVNVYq3gk67kmE8Qqh6eYXNmbXvE7pc2qXaEzsHiZaScyfaBGSsnWkZx73y",
  "key39": "3BwHC9ZVcFEYHspu7AXLW1yMDwAYBHKzRr59davQmcvdvpxFGbM8FVSCJ1Q1o3P2p2Nnse5eCDys7haGZ7Ve9Zrx",
  "key40": "SabaMfvBJj2KtdNdbz1yNUhTMUjBhdPeKBEncnptqcPHhdXFds5frnaspnZGZJGsEMqZSZpXC4BCnR9VYTbHGqu",
  "key41": "4BEJUe2xgThdAWjd38w2nRD7njfZtMpKkC2vZb9wmCUqExLafi1C7nLcLmxteS2a9fMN6A8bRYCzj5pgVTojWc1"
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
