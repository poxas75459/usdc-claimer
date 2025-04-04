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
    "297FQDKbbVPDoDRASZxZ2G7FNQ5udUK5pc8iX8Er5ZF7M6QuAxJeSNKUdwF9wekMRk7AsLSW8pKR9MgowKHDQuMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qhjmAvzPbo2NXgNE62b2jP699uzUgvmSTUgigE27cTb5bTUXZsEqFvkWArJV3M8UH846KWHmCB7yP7ers6dRjLy",
  "key1": "2YBEcNYz1wPf8mqnaQ64PaCDVboYsrh49kKRHTMtmPJCKMdD1bNPxTxjsLmq2vRJDELZN3oHtLX5xexSypRmBMJc",
  "key2": "qhFo1ohA7Ttcz2YxzfyY1q8BVRkWYFM9rahZnyJVbnch1wWTM4MRSHCML86n4Ei23kDW86sSdEXc7NdUpVVGgQg",
  "key3": "4URKtpnu7EexwkMKCMCb5AW8azWpRBi9ceviAxXEdaiYZk35AhgNbUyDeqCxeiGhNu9UZVkeAM6iRdHEPiRm955w",
  "key4": "tGGQwxqWhFF8oK3FnDRFQQhJ8ATr5xrTsPYtgDkACT75F4v5zH4VJx9X93SXfVHtEbb58cr27yMJ3nPQge4PANB",
  "key5": "5HSxRs8RbugA76vqYJjb1EnAnrg7jzZ5PVWsdBmxHEaDiVdkHtnLN3dKj2cNojPVvFAcUyfnC2VbpqhYiEEedeuY",
  "key6": "2717PDwBRmi7Jg8npJEhQaptjXNTNgsuWuECVQyBSqKQc8PUU9JZBCGYZ5GLUXz84D8Yhc5KZK1PDQGXQoTRSNHX",
  "key7": "4U5qgR66AhJqEhhZTJRd6cgBGSS9XUVfax2Q3TqofxDhNrhtKviN7JAXx4E2erckRJnf4ccavuPX7vGSPyNTobfg",
  "key8": "633coHZPGrcb2kLzqQ2M3bhXxapRuRCKUVuC1kT9ronWZ7ukAjQom4Rx3mbYNdFoFeDXwHCnW4sdGUrEnTKGwoWk",
  "key9": "25Dzxv6Qw5u8BUSvr2WNCaGyowy1A5t7Y2uURt6r3UR1LChzrvyTBRgFVk3JssCvheohkdE3btVPGYmx4RuRYnsQ",
  "key10": "hAihRBAF4AtwRCWLBHQZQ7K4MAVJFZcNXR4U8fZs8mpZ7gbLyiZMBYRA44UZDZ79Y9U41FTSK79seNjZDinmT1h",
  "key11": "421yLYqgZzA5b1WLUBD1dxAWFqSf1Qdi1EDpgyEM6ZpUivbyrLqQisggrkGDihGU1YAmmqK8rMCsxQ7Z4w23j2gJ",
  "key12": "5N32NNvT5ZsDsuTpuSs9qy2iFaALHLGFnEpHaZ5amqNMNGGpDhjzhzhVa8gufy9M1giypJ1TB3WCzz5i4soBiuNC",
  "key13": "VxtNMdQU8kMZv6Bj7oCwa9196PnnKPXfLQ7YGAXMin9youLveoxk9WboHccMSoi1bqMyjV1BLc3PdwoCwBvim82",
  "key14": "3KFsNWPwbkNHRhLhfw4V3eGYFHRoZ7wA5HN2tP7k2wVfkTP4cEDoLaULBRSLHYkeLqDkaoTJeCCi5cmBNgcmNYZD",
  "key15": "2KHr7KBAJWeKGyphJFSfCUCWfFzZrdupc2v84djKtM9zRdx4WTdNF5jh9hNUTMBsq9hABHmRufa8vEd8LKTrJfzk",
  "key16": "2R74d9iqYiaaXNyKna3unwtFCXBZUxhy6rCXH98PkBH14r1gMfEPoKD4cFLgMinUuCyYTbt8Qiv9GUZ3xQzEicT7",
  "key17": "5b7kLNNHuh4bDH4L2SQWGN76VNtaHU2T87VvU5CAyAChCCZnbfM3cgauc4nXwTyQNN2hCgt9xJMVfhxoEK27cdcF",
  "key18": "49XjSuHJg7nJ6ugq39s2eKazCXNVbKqc9pjPpDzpbbeFkcXxwRoscuCzsurof465DpoMJ5pMmrvtLpJEodXXtYtC",
  "key19": "2cr5DKGdURKbtjP11gsCR1x1SZ7xHD32HS6U3kCAm1xywjXdbPVNjgDRMszmUiqH1MFerMitaxDs6eUcmGxfkoz6",
  "key20": "1yJoFYKQVBtYpiCkNBmoQm3XPAS14eMxfvAdtqVzcWVFgkJMEUGjcbi2LLkmr81Dzxw3A2LUHoQrY2ar5B6gK73",
  "key21": "545waUZsvrHzFhSa7sS6txr22PwKCgSHeraGMPAuhdTiVJAiiWgtPZZVUTmkMwxRNhmzmNzk5aRo3iJwqpYS36JY",
  "key22": "5zcpgrGdAd1vSvvHmxdXkcjBvY5oN6aegYWgxQtN8PrMMvh2oK1iduazQrD9HQQXv743N9WXt9LyPzSzVmkpvAPb",
  "key23": "62PtFWfaSrbPHdgFKXiYW9ZWcDsT141sF8K7im9GXGVVpZVnYCSn96o6j6h62tNCB1UbYF8ohiJKuKEvWjBn54iS",
  "key24": "2XQJcAbsxZywFxfidGEpJtYUsoMvWGBB3aL9mzRiV5UQr37ZzLTHNi3tX3smVUffdsfU3QdZ55z8k2rznaaBYWrs",
  "key25": "4Rssn7hEJ2cFVSf63H84HPVEZULrDNBCY3rQmVvoW5BZtHGBzHWVyEu6b8A56nPBd9drg1sEivGTZRUDc8GfToHN",
  "key26": "2KtbC1h9YWwYnS6Bn7Dh5Bd1VMKkoyt7vFHpqAbbKujM6UHoQWEevyrg9tJHzikv1SVT5QivjRf5haGDJZCodZTQ",
  "key27": "21CygmGMgMx4cV9ZVF2yL6gJM2vuyjdpo24gjbtsLucC8JFZEj88ejswRzArLMM87cG5TsqLCTsD21XJJvkgXnG8",
  "key28": "4J3zdhZDmsPHuBbWAivi11ZLUJb7Dnmp4nJWtY9M3Q3yWRfr3AgnWFFfxvhPMEHPYxQRgbG3ojXZKBHUz9v5BGps",
  "key29": "2mLt3MjSbCt3KppiAN5Pv3bSWwcksA4TZUHmLxCXMT6hMzyzZW2Kftee5Nvjqdy6HYMcaRadEYMQ2CBXikLVHD4h",
  "key30": "hLo7b8EJwRjexCSEnpoxzCunX8BtXub1rP3UyYYsfs74qcEQaDAYHZ14fyxJ3NYNBorqNeKQ1qj1nVcrGhyzFqH",
  "key31": "4cnrN9kcs74ueoAqgZAFkVWCc7AEg4BtjehUCSqQJLLjxmubMButamPd2MvYFLtx9x4mU7gSieoMMhnRrcwXzEvW",
  "key32": "YC9JfCurLQiLrM9iiQxG66RsMywfYTmWE6BURECLuK2bo8A9phPY5bFHRZThguk7HZ8DC1YTfsdXZz39wFJubzL",
  "key33": "2fk9AxxJVWTPM95xESvRGCwzU6PgJt5phtTpKCRAftFixcKZoBjcY64uLexcbGoemEwNWGGxEMKFa7nL2WV8rCN7",
  "key34": "23az1BArJrVAsYJj72PB5zKbSvRb2urYc9eYD1iTcJzNZ6Px7U4ADH96RtxKk2eAwh7tVs7v8Gis158VH9iVWog4",
  "key35": "5B8AaiFHBjitDHckz3dNWcJGzKobGXhs9ukSjSFX3ApjBnChf5mp2SsxPZcbE9h4SRSBZmQeQDg6tB2rj3J2UGta",
  "key36": "5cH5fyDNoRCVjgqwiv6VV5zkrtjG6mcJX9mEGdyZns5BUfAitzFfBiutdGQnerpDbuKVxqqdDQmM8cp6F7YSMDKk",
  "key37": "4Wvuvjai8prRCm1MnS2CoZ521jvnutZBA1UTJsrVBeUDJw5o1zrvocrZayGGnWjuFrMqjVsP4ZeLeqWiZsFkHHjQ",
  "key38": "6EyPkrKgG6uGNUmaGyaUxGEYrk5TcKFHRvYiF9jY7CWzwnjLutds5dyx9D9i1w3Ty5Taf9AUuYK5vsKsPnhym3G",
  "key39": "4V9B6MJ87yFCfCppiS7fLqJWLbKGeNfVd2MdbQwj6WS7x69gtH6Rnygf39kDgUBzSY6EiAza8Vr58LCbxGeNby1N"
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
