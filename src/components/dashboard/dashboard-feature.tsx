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
    "5DCZLMwAk1PcvHFHbu3zLFQgecfkDpJoHsBodTvYhaDTNxgJKTdtKbZupFXSYYAHFpY2XGumWkYe8UeqvTuiaFiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AesQfYSpb4dUMiCWQ437JESmJVJmxnjQr9sG5urRf7GhPKCsdD3Rw9SfFhERWjUE3tVHoRoS4HoGGmb79RZoznA",
  "key1": "2VCMVX8q1vyNSUFzbinytPEx85JkuLhiSDa8YiCUVb1Wz2H9G6F5ZBKw3mMnFE27GrnuyejsxVf9Wh6zMsgdUSia",
  "key2": "2prc6ZdAyNBVNfJKJXQGQvDq5a3Xz1yTQY2hvvoTvGp1FvvDDo1dpQ5kXBu3YsRAZfskNZo1bESB6cVfeqC5HKcT",
  "key3": "4ABzBJ4U8DBL1FDXMkiTH1RDNfsaZFBu8jemMAhGyYd5Vs8fAgpiPtyzdsThwNbFbagCQxBZD8DjVXjxqCpkMTC",
  "key4": "5LwEkGaZj1PF7G96X4S5Xei9qZcBFnwx5DuCPMXNCd9ZE7yLdYnmfe9T3TjMo55tPTKJFT6xguh61siceHj8DYdt",
  "key5": "5K6fmfS7bwdk2ENHej3N1iVG3FvxdHbBWkoei16RbK1rPfKRiPWmMctCm4xx4pKAoiMtShUG8ayMwi3SSn4arjiU",
  "key6": "536p4TBfmNMMeTTg8hBN9N317LdFmrFQt7yN8ayNYvdEgKHf5sDXTy1zXQ9X3LLoSqpWbD3yrHk4AqFKW1qQvehS",
  "key7": "4j2LQr9nLee6bGENhuWdK4MwNApHRiXJ3jUAhEjRA6nZY6LyLhKLSibwbtin9SkGy4tZvkWrjaQJj4H62C7BUf6z",
  "key8": "4e5mCqZdWfmgPgUEteTCKUrQDgpELj8r2XKvSGubXyMrzkwqfYP9hKjYHP7AejWXA87H7ZcK2HYvyfiTnKREELzv",
  "key9": "pnuQhHRToEMm1cdWo3duJCehVQK9D75up5DT9QmnPf36UgF88gQEQXe24M6h6udB1wmmbpAgToSokGuP9krUNQU",
  "key10": "4SM3nXAMGyLtnAJ16eWaL7C7dKUNvBdHRXJFxQPq11PkJE6qXP1EbYy5FcqQ2QVxdJiXk1gorgpqJ7BfUgrANenw",
  "key11": "2JkFYa4NjE5GRR5TNrRtXHi6MAkcQxPdaCvg7u3xBUyf7bdC94d8TR4EU2xPdqFfACz2WYf4kuFEZjybQ8vbpA2d",
  "key12": "3qY9UCSUBHghqVbszVLT69wTAAEJfuS2vu6wJgWLAa942ncH5NcpyeHFzZ2vuXfq4j5gH3X92eQRam1QGZrj7xCe",
  "key13": "5RuymEALwJNiJyiSmg5CApfbFdqRGVfZMTZrSMcnmatFhGQ3kPPoXZwDFLFr1joAKSsvaoXdwrwbYd7n86snyfs9",
  "key14": "3gvtUWBV9DGmUTBBws2kVQdWC1Cb69iUgFgiwqUrC3SosNJSzgaYFVCuXzLuCc5j6bSWi4Jb4eqeoAhXZWGYqB2",
  "key15": "35pHzDuWaDiCHbd8bUV1x3448v3hRjyxV62NY6Kib3Wdpk7Y6QZnq1npcSsE7Ro6qPSRDcMS4RP1AGxwuUEghKsQ",
  "key16": "65WPbmzFqusWhwwecqnRThoNVFD3uJdpCrWMctvXFr5zUmorvrUbf3ND6ffzKnQ9dnr6XNgWyZXSs6Qto2iNdJ18",
  "key17": "2CMjNSqe5eeKWtcvT3kPS1pLNqYKq1xY54aA5npwS63U9uYSEgyiVHScMgfnEpCz8rDmzH86UYmREDhNTroitYai",
  "key18": "5QFRPfgENTCn9vVEFDyZvCQjxS1YxY6pkeJPt2ydyUpPCYzETqC4P7K1a76XCMXydmq42Aeayoh6911zeZTH7i4d",
  "key19": "fDSdD5zwKwAkcKg7z53HV7sL5xyxJ8nPyoXygCWPCGucRA5aAUtq4gD52Bk6ahLceTQ7iYvJovDdNCvrMgnUSrv",
  "key20": "2yK1gW87qLjM4K8Gy9gKChCVNhxSaBAwECogfZ97gWm6nxRqAkTKVM1omc8iNHjfbDXX7ei8sEcdZG1ZTayfmCt4",
  "key21": "4nbLo1f7JSmk7QyJPhC6pZJzSHi331ztjm1Y6WRvxcH2MSfiVBWGEp6ZtsQFqs8Uemc4G3PBTz4spn2VNuCs87Qd",
  "key22": "3EoegSUBxcs8aLV8y2JBspogbMgZ23medNVU1DqZicus4Q7UaurjkppaN1KFQmjgSEV8cVUdXFMtUqGR4YCmE4N2",
  "key23": "27NY1n9iNyGEbtQk6u1uw56gpnGnzY88TsRRBPkgzdyKCCLVABmGxVSsP9KWcLZ4pKGW9buHBXqiEAKLio5XJxUB",
  "key24": "5PHd7nfPWJRBm1xJYTeeJRARerHPNea6VLvwmWdobcM79NAA23Pg9aibD4iVhUtKcwm98M4byqj1chS8BvsU2vgW",
  "key25": "5pETeorXiW78TFg9nBTLhSaUbvo9FtdRj6KVTRHseMCx2ttAYh1isQGQcw94wcmPtNKq3HtvjsYvrsNcKgxJtoEx",
  "key26": "QYryFnjmYUTrQUqWichMbBaWwNeF8ciXbdFEju3RFbZGH3qsiGWkcSKibcnE1XPUEPtM4StDSGpmGdbLQ6eh9wm",
  "key27": "5u6ao7RompAtzLyJD3iccQDoSoSo1dkV2GYNkKPYrQcxpNUBfFpJTyALtNzUZkaFrcDnBZCiTxfWhe3rLaxdXNJZ",
  "key28": "4ECdankkAXE4jRL4K1XKtfMsqNJnxQ6P339yvX3HHouJCoYaBba24wf33amfwctRGLP8Lk199UY2WsF6AJBHxwp",
  "key29": "2xJbRP3Yqiz8kTT6dcihpsWFHaDrh7qTTyZfuAauYXUCmUtPzvXVeggdPar2MexUUYTc5KDwA7qjeBXouBQZgCUS",
  "key30": "2SfgCTTjVKFUZ57ZxZEvGuxygqLcVenTjpbH4X2Q9DKeqWw2sDD9kTPfNZLPAUwYrE1hpjx5pyyJFdLoAiUSHkXh",
  "key31": "4iXEgmy388TpUoRPmTk6ajPBGxzqpcTonLyDmEucWxjfEqthFAxczfoNiJuV2c4MA43xeWwgHf4PJEUP9nVX6oP",
  "key32": "2yH36BJy14husWKVQdBpp7BE3jRbjrDNkLVZmfkgZw9SFBy5kYDUhGfmv9pqPVWQwVBsn1wZ45CR1XrMG5cUufxq",
  "key33": "5qRPvLsQvCfqyJMX2CEgqSXpEB8Bvxn1LoMfFzDvVCoMZRciat6j2NYMupjgYuUnjf5u6QMAUeyHbMbUtj8QEWyZ",
  "key34": "3Q6ecoj9HNrsFoPVcxZw5rUU4TPWMuTKd27cZvnGQ5b7Lh4Cawng9unovaEuP7nHN8dNkCu7BYgoNzNzrJkWgtBv",
  "key35": "5P53FPubS6iJ5Ehbaipcg5QcuvUgL4gCYcM44QVeCrqk8MGUbqZTGRXoGHxWVQUeT61Wmyqg5WutDHup8YaHeBmB",
  "key36": "JzayHX2KxKJ9V7L3DuM3Egn6ib336GUU2Ku8MWQsCv2kGZgkc7HaXZhyFGKXWBFawj9uSuUPWvANTH3bjht3PTP",
  "key37": "3AX9CubTDWvcSxa76tdpxHmC74XFnrygZXzSr4StaiUPe9fqsLyfyNigGQtsuCJsHmsTEax2KT54SYubFsyjqG2x",
  "key38": "5y7gpPjsVD1WnX2nckgmVGgeC4TQb1bP8t6Tt5SW3wx34aYpHJsybHZ5FRH4Qy4h3aha6B26bmtnRjRYBxmnCjqD",
  "key39": "5TBVbg4vfFv4rZaC62BSmYpxGmZMSX7AksQ6uJcqHtypz7TdQDHj3n2pYTXFEnnM5Q2MYhwzWMdd3E4FgQ78rRBe",
  "key40": "BqnwhCXBCdiwUdwxxk717z9avFrtZmNDJH6uhuupQofLGpc3rnkCGhAr1c3A552Whnf8vJoS4yWVkFV1swSgg11",
  "key41": "3CwK7yKaMTYQDXM8FgWzUWh5PKm5EuHJDCLnao2XzZac4cxsjjSQf5YJmSMKnV6erDw3wiLWrVzkDRYT4Let2TEd",
  "key42": "gpQEnY4ziQFYDSijvFKEytUSr2iQDEjw712hX1ddfJWT964ChH8wnerk2Yw56Zu6iZtAUfG1hqJBPmHVVkAZnut",
  "key43": "4Ub1AohGwyTYAhNZ7N97d5TMgfz2ZRWih6i7UYX2NqUgddMGjJtNKbsvPpHqza4FUJ5Pundvj9tZzXP7mR5LeSzw",
  "key44": "3rRuAu4PHc6ByBcW8UQcPfFbJevHdec9BEEczmC7VfdRXF4VnJJHeozPCDRocK4QHEkqLQ233qN5vH1X6cM9hghS",
  "key45": "2Dw1DGXbKyP9f6NCvJGJzBDfD6oN9YY7oFyY6YioKwnWVphxo41haDVFE7qq6sQ1kMSpz5EP6eSPEGUaJw9m16JU"
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
