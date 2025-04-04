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
    "4redyK4xuevZL8Ugo4DjGW7vXYZhTY13YLf3CrX6C8hJ7dtpUiiguLSM8LC8CKPwjVmu6ZeDkj9616YswnS11oU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BpaY3jtrEKe8NZbfZ8p5YhYmXMrfg9fhRh7EYQyG4CRKEWTjvcFYpgckSRFzgWrAQGpNyyTnatBfTWirc9VGqwq",
  "key1": "BtJytZD4zmBfp8NkYaVa25Up9Bsr6ug7DVUnCVS85SjhaENDbfb6nDwNhFNhP3cgWJD8s12GiKKDKEVMzv8mfx6",
  "key2": "NLakZDvFxxMytDfERRcLDnTfTdg3xZGALSmomHcyZi76JPdkz2sUBHtiS5MDEJnQdvDrXsikNosTS5yDh81by4L",
  "key3": "3vsjDA6orM2n5seua5BMDoByqYmpbcfqYyxE2aDwRR2uTZ2uP7nkB3sXMhvwiKmgZGuU9r4SFfoseVexdxgh29k2",
  "key4": "2UXwJN538GDd6u35TBH5GVUAmRWjT2wHWJmFSWQbh9CVTAtGwpC6PyqSACjzcStUmswpWmLQyjpStQs5KtWs9pdF",
  "key5": "3paYBXYc1TPo4U7ohMYNbhZRt3jccNgcqXipnbuxH4EQZ9XEFJJsSrhPkxHUmjsKGdepf2RAiGrcQN3iQHYrGH9F",
  "key6": "3rBsUby16GghEpMQUMDEZQoqNzaLHd2MXwDoqjufo6YSf4g8Qpp1isnCyu9VJjZtP9V28oo8mHkBb6KRzT3ZWwme",
  "key7": "axW9v6FPTkX63XBcu6H1wvHG1enUJVA3Uxw51SRDtK7wdG5Jh798qH4N1APJtnoBZukDaPZMfFBg9pmy9NPcCxe",
  "key8": "tt8bocXSg3StwLJusZM1DFGuegkVSN2fzazuskufwAipkeHzFGcbu1VFWieBE1NhwMcHAiidojSmToQM6rmyLTU",
  "key9": "5k8nLfWqEkvait79Utq2wgdeQ2kHEyoZ59n5d8CH97AuzEpktuVC9os9HqobLKiVBBLTbs2WbHBgHVxsXT2edbk2",
  "key10": "5WCeeEqma49FGS8L3JmTRUryeVaYQTL6c6TWEGkjPCWvgxp4hgxNpM7ab7NbYy2cR2StGnqzjsDsx8DKe5B8gfFr",
  "key11": "2Nb1GKwLe4VgNeZYbuSipYoECoXhjWq17y2tQJVhr7i3nQtyCwATqVefSRXYs2ddoLxvbkny9LRGpAo1ZYpUoHkH",
  "key12": "65ZTJmNyP2XPps4KLvKKPudcG6Frs2xnpNdwsJCqjrecip2cyAAUwJXGz4rbjmJ1FZYbwrXcUy5BtE6KuVyWGVAh",
  "key13": "5BPDYTLi9QZBKzBFDfgTdPA24ffGAjLNZaijM98mLS1GZEKjn4CQvXF6rwY5ec8zmFuNhEy78yArvfTHf8QUEKKg",
  "key14": "WMuDtURZE9mhsghryYnZg9LQz2T2NRs6jMAUyZNgUwneSY3WNKwaw5C7mgjHMULtuu8GmbUHykAcn5Lm7nN6B3H",
  "key15": "2eqiPaUCX8GnBZe3vQYsTHMc65xw33To5Z1fRNsU3qarTMo5hRAevevWTQY46vuRQZV89bjKFtQDuW6xcwzmwiP3",
  "key16": "4QG6vBKsxjWfh9b1F4yd8XBqkfNgMnt61FGQHm8YSCrv2fEM2A1hFTWkLYUri7fC1h9kVGbatCoNMJ9iNghcoTkw",
  "key17": "4QV4CMFj7mMZSWMnu7PofWcmqtcz8cKuByguize8noRM566xeyx4pW3tUxmMngYF2LTVE9knfDAu8ZncMfQnFXMV",
  "key18": "5oPXxKeTth6zgv9FoZMDUVbLAvqWaweo6SfFTv7bQRSSNgG5chf1QTJeGZDRZRVwuLCNkjctNT1GyXtpRTcLYhvu",
  "key19": "4aqhjBRezpqBffe89iRx6NygUf5tj54aUmefzmVrV1T8PNJNzqGauXUSjsPzQtKLpm628nWhf2GnGHsYs7eeUVJ7",
  "key20": "4f3dB2Atjsgw67LZ5ZjvHgnxi4CfEztSMaujxgSgLyu2TXTA46KhUgRtE1XyYzzREfdZCCKDLAiC5J9aWDi1BMe2",
  "key21": "5fFaewv6i9Shfe7QfLuqaT4avgXkz8cVweC1bwRwfQCPSTHEX5snsUWvcgGG24H1KdQ6cSof9u2CLNPMDjTmWYpa",
  "key22": "2VPR2yajnC9QMsywVfRYwzkjR4xrT7tcZ5nfLW6oNLEAUwuqCGHX9QY9WU2rDxRBdyMMzFhFReSkGxzHS4XcoErR",
  "key23": "fd6g7exNDvwxGQDPS43zgb1jLreyDB8ZThWZBTBnRoSWyNhi24HsYdWFtTvcoi4BeQhP6XAhye9GCgmBbJK7RoQ",
  "key24": "2vUbMkKMBZxzU7TMrGqq9hZ6dMJnLGE8dHy74ho7uog4JhCuuNRuuDuDW6QPNqcLQcmntJuGsMZ2wtuTprCtttkt",
  "key25": "4TTy7gdUA4zbnQoScDuhw6mXwkSmawxheQAYq3gj3mn75TrtGkwKaX34jYTnuSy3fJqtCXbHT4DUPtcRo5Hc1ijs",
  "key26": "3GCm6Q8daJkTRTSa8Djf8zc6JghQGNcJqSVCvZt5s7vJAUDicrRncZMFA9MRnuG8XXjJU9gBj8ZNL58h8ezW6c4c",
  "key27": "2hRkw7QEVdUDt9ZpPYKfyo8mDZWsJWXcz6feNdc6Aq3sum2q5Ft1V3GPPkBh2VjVs2UEAkKE9st1QbduJAFyJFF4",
  "key28": "5CpvYXX9em8ejPSfhcGkkVeV22zpvGhfTCU3459NpaMxPYUEwDsDy6HJtip3wrT4a5tNEk1LMkCqjW4efVddcX2H",
  "key29": "4QDuQh3JMEAxdkRvxwSxoa7iDrP1mj6fmmQp2enVQZRmo9B5izzHtN3UcofrYUSTpWwMq7TbWnEqRqDLLcE5imgt",
  "key30": "3y7awWzGAfAJCoi1UVpvyPSbgQpTdXgFntTY8qKbMcs18M478ZJFZjKYFskDsPfPunT5MN4V6Exv717iiVNpq5vX",
  "key31": "41j4WdjVvUeLNvKFK4FpmoLqWH1VJpQu3Yc7xASAfbQ1vqkzVRWzDNZFY9FYbUcN8Dqj1Bxz7SkMcpC2nmFyeUvs",
  "key32": "StANGhBxuzN1FCGucqvmMxBgZqP57ePK2L13vBgNDFdDtsVu4Fe3MXii3EVzJAyMHaSWxBZofHbjpwaHPLiTHmR",
  "key33": "38BDsYewvNXry2gvhEQL73LE7WQbs2utKdXnpcr6AQSCayFEfPLcdJQyG7Tb9UToxfFqQrTurcNF3MnFLNcjAuVe",
  "key34": "3AnWmEurisMiE2cfQWnQbeLYDY6cWSG7C3bE4UfgtuCceuzvxFNM1nf5spRZcxh2o6UeCQJYvonuAgoBVcnEpjEr",
  "key35": "3BFe97ER7Ce5bFtbMBsWfAnYSasN8hm6BwFDdUXchQ6xFXpeogBPvMvgZNd3arFFohXZjKdyxqrh7wcYFq7aQQZB",
  "key36": "4scKe5XD2u76oZVDt5uwc9Hg7KyAU5BSPPrkz3kiE3UgEFKHbwp4eifRbdsS1K42MXE86c2Vk92jZzgui9bao9ZN",
  "key37": "shNrzGsfbcW2Q4jsTjDRMRTe2w8wqXDE1x2meu4iEp3yKLysmZL1YM4Dq1f5mGfTnfKwbAEX13FbL7g7A5ScyYi"
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
