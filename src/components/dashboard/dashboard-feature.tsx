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
    "2sy3d76UnJK5PPHn2sGFx9DLnZXz6n2Sw9VXbSc37aRuF3rFW9Na5xxyjf13VxuSvRogDb5GWHdoQKx4PtNmus9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cDwZLrib6aL1np92xBhbDLpgYU9KrS4HKpGAhKvSmtFxaDGoXUzYjXPx4fR6cnQ8zzeWQGvoyJoE1LdEvtqDKKn",
  "key1": "Hy1ubSQFFDgpuixraePZbWDFc4tLg7DE3SszDmgZk67ceukS9BpifBz9VTuBr5X73fNfDE7AdQHUQAdB9u6Z17o",
  "key2": "QGbcWbdKm9gMFiWhVUNaXiueZAPrgzGAL9oGS2Nz6hGFHERAVfnJj7M4n3LqozqvqK6K3vDsaE8Akq8cjPJqchC",
  "key3": "5haNZAtdBBa75ThEZuKpFVcikmkT6t3196PeFWLMj6EMMLTuvupdj5DsxgWNJDFkVYovpU5k2tSNYarE5nYPZQ82",
  "key4": "5x8wbBL6jqPKXjHf4VMeJ5Xz4NYXGnhrE63vXo8Gn5Hq7RLHNjUj68tHbwJ2MAojJAgqKxRH1w4xQBme5woapXgt",
  "key5": "2fZ8JasLFtLL7x9oNZqGqwUV4uQgHhxsN57MvqPipTpJ3r587FN7TBtJhE2TaNiwackrARyccWahVBZmEvbwobYi",
  "key6": "3ZxiLsRevLsBFPmLuZg28WFNw1zcP24VY8qDg87ot683LcwiCY2MUg9mXERLbBp9UpMfPfzGxUaUSY3vPro28syf",
  "key7": "67S6rEWszakUDr8tLTQnAHawSHMUUi8GCWAya4BDpjUuGsU4AEX4fqx7ZQ3dSj6sMrr763ZGQVkWNgR4D6hADZMM",
  "key8": "2oYx7RrkPkQzkggbGFqpvfM5HXyUqV1VPULLNjDTn1JJEmwib6qJ7K7TXYdtZ1NKsc8ThLVKGjYYMC6ie6HfKbTK",
  "key9": "466TZRB8qnbq4KowyDNcwKUP2NzxiZmtji7SueBRFt8mkJyxAVdcH48vD5c4Xi5er7afdgHPDHCBn42MuTzjT1L7",
  "key10": "65Qqb5Zetw2npXieyPa3dYWPrCCauFVAxMU2z1nArSydphShusjSjawrTuDgvwHosDUyDjEiYUxqpuBRSFSFVsPg",
  "key11": "5wojcWLiZ5KPjR4eUu1mixMZf7KA8cZajE7t7svyppcXRmKTrWruV6UZ3FJfoADcjnQsdc3s3rtF1YGEpWQo2xBC",
  "key12": "4xNhQAYaCWs7FHHEeJwqfPASpUUuUnzL5SFHLLN91CYGJV9D4kZRsAyTsFiafT4cge3pLNhRyQ5eppe1kGLeCz3H",
  "key13": "3iqyPpUEXmEqQmKYiNn2pSB6yPQdMgxTRQfAMZ31GQtboSFruKhntGkyin9BLcmP57b8KNuRknLduYkYdcMrY5sL",
  "key14": "u3cjNf38QfZEZqnGf4JLDAaYLjypXF9v8Ut45jB5Nb9sdphwELMCRGFNeAsLSF5PL9JmZqB4261e2WdBteRXADM",
  "key15": "2gk2PR9D1c2EAgPoeE4mPrCJ3ooKaqv8MNSwENQrojBZSWsJVqWysceNqt7VLKUjdKdFhognrLb54jzBhpetmC56",
  "key16": "5eAhKHFgAzqELdr6B5Hzf2M3Q7i2jF53aMGtZYHMuVTPgsghFKjYNpcGwvpCEqqbyE3fHvMPqbnEkL9HT2CzdUYe",
  "key17": "4rYxUjyS1J3As1QW9qrLuZ6xseq1ut1547awB4CkdjS3f5VGdx3CWF13EKn4VH5kuBRw94Fugx65d1HnVJ7yoM7e",
  "key18": "4fEWWYXefQuuzfezbgNYeNSZHLvLjq8AmppaNvo7Vm6K1mZ97AeWh7Vp4yUiUG1qtqwLTp2NKJcgM6hUJERcVGL5",
  "key19": "9kqHkjiwbiYE5T9h3mVkMr2nLU9LfLjc1p9GQ9tNnYWbwPRhPJGhCubB9Mk13tEB37ygWVPmiVMrAh5rcPKrF8W",
  "key20": "4j3fBmZNs65CvcycVF26YVkWsV1t9wKCqPYuiVRFZswjbBZ4rBwoiL5W6z47saKJj9QP5k3SXoz1XYM1oe27VfWj",
  "key21": "2C9zRtBky7ZYpQ3RP3rqPGfQtM5b2U9pRgNaRSJXX9xVEDcqMNFsKzYK1J8NdNh5pFiAFzWqBSbcy4vDbyzWmPZv",
  "key22": "27PDWJXdNu3JKKtsNtQ1D7npmVS4AreHKSjMQjQXaup6xvuBbcrx7BxQFRJNmCAKhQpkbJSnTqD5LBv5t4Ksw39F",
  "key23": "b4wpNCT59e8exrg6LGveh1WSZfWRdg68TtpMsPn1Y5eCoTcXpdro9HiqDmCAEUANDMGPRUG3kRwxS9xThDhdh8j",
  "key24": "42sUBWCcY4oLqSqbNPKg7C8LxqV83UWyJpTU3mLJE8GgV8xyrL1um1gQ16AHbDnfC8dTU7qphasTvY1K6qQDZ3GH",
  "key25": "5Xy8Hqit8AGxL6Ujeqk4XDwxUq7pBcjr2DjFk3hPq6VhSStujZqzzTth2Qpxgo9DxeRkucMdq3khctjKgGLazPMo",
  "key26": "KU3EqoSwCQLDUJtvHWquUctdxbj9xoY75E8bVhAppyTRA27xBavYPqKXwyLDmCWRABeSGa24YrzhTQntXVocSQZ",
  "key27": "63dCfNSKKyLemTHRQ8dVzqkLi8f4zQYRPqUPMjTVk71zDgZdVNZx7199P3D8LieQexfFHRjsusBo145oUKEUMt9W",
  "key28": "2Qu2aCs9Yix9ziknzLvTegZE8dgF9DAjFfgBs75EGMmXi2FzT9eoZxSZkZSqtiRM9ut7RKDs7U2DUfz4WjbBgdC4",
  "key29": "5Dekdmtx8ZDtbDXYcWTQpB5J3NSNm6a5a54Q6W2s66xQJntoPQjfsdgBVwtbJiBN6wdeN8LemgMEBP6ZzGe6zoQm",
  "key30": "4Ph5PufGKEpZKwCrCc2EU18kpsdgG1GqTpfNfQcvhN9ZjU1wzXD6s3gH3oMmRCbGy6Ydx48J4np73wjVXk3ovq57",
  "key31": "25acA3SaEwMRTzCxtXpR6QCDyqb6WEBHFxSLvaAg7JSpKQfYQ4qKrbSixf13NnGjC1SJAULCk9WS8HMyF1WL5e4q",
  "key32": "3Af2drQTQnKwYLY3omRerkTa6THJgrT9oo2eFgA7LjSYja2q9W5FVkLCbbk3chmfuQaDLmCPqKjN2WczNb6HPE3n",
  "key33": "4TSH3EeRzcj5NFDz5oZd6bdH2ut1z5LUoca745BaZGX4vYMAovKMxS3ErpzC3PSfQjWFdQatinntJnaZb55x3Rk7",
  "key34": "512txabxVfh5vSpCfznHJBwZGs28yTS8fGqfFWxEUhDV7JrvCm1k7cxYtkFwzrb4t3mqPkkyjGH6fhkYtzMp6Nor",
  "key35": "2UyTKQwbKxxVx4de8P2Ym5GL64RcNfi39T17DS9HZshpW25QXso6iMyHj92Ef9ynVPJFwLb74EfRY53J8tkjvxYd",
  "key36": "66vwwLeB9nZpdLqZpSGbywvN1aHguEGtsoZwyz593tduSbxKnP8AUoGVwhnWqdn6XvZfPQp8XA1UwymULrYturLb",
  "key37": "3qzaJUZfqwV88kCbQGYfLAWdQRopaFUriveuk4GsVaqREucMwHk2aGnv5vGSfVa9JHS9FXLJHyPwEdVP84BTLDBY",
  "key38": "9crxLMhzENbodqTQdgzbUmqix5wk2nV7cn3gdpWXYzTMBgWMw6pyncCyzaJ91Ek9UFahh8Dx76E3ZBzfvuD3bR9",
  "key39": "2gtREkrqZaMUA6cCXKtXebUUJvHKGujs9Xw3SLW4pvRspyRKgpzxACFec12sLGGcfBhpuwFUHtp3AbsXJGe1L67z",
  "key40": "63tFW1ehq8S1gehnPg9ZxQEpAFeHVDnoALHPnaUdFoqFYVjgh4hBCEEY67RmHqzNkweKttkMxPTXcGvMVn3nGbGB"
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
