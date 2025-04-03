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
    "5ACKG5BaJPPfEx9hsR99gEWJNCMqkvRRegmib8RW4vw67RqGvXnxbgtK8vPA86vuMBZgUkQWjqPT5KU64ZWKFuU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kG9smtSDbveVfM9g88iUVvsouTvXjNNzWR2isdBGdMhvSfSfHmQyGQasxQDjumRPyWqA7jj2mhn9yTaFojDu9NZ",
  "key1": "5h2UvSqafoxsyNXDgMWuSwjTrrupUkggDWra7RxQBkEzDvygHk17tjJZjJfWBy4TcZrprqQSgnPPZ5vuqeDQeoVk",
  "key2": "2TBjA7X8e4Qv4JTsZ4NHvhsosqmh7s3AAuuq7GZtrc8FJotSE5LySy97EuYraxgQW5Amg1BooxFz8qL4YEDWJP31",
  "key3": "hYFFQr8eoLZ55EHSaNRBye9kHZ3Z5GzRXQfB4PFVFjM9CdyBDTnCTpPLDJmxJDJFNz8YPouPoQRfhRbQu4RJ1Mz",
  "key4": "3FCNamhwEiGehjyFCTvsFCPpvRRYdYgxSCSq47qqyR4oEYejXgLcTQyzaNxJZjQEAK4XQU6WQ54PdnxKq3PzqqmN",
  "key5": "3ki6pmpHXH6ySBfhrhRNnCkDxWiQAZ7G1woHZNgfEwby5KiUiuVtwknaX2LEJYbUZnXQ2fpVLAjoLKWGZ2qiMrGc",
  "key6": "2KcnfKNhDM1VNGCv7LHZF6jC5CCE73bgP4GDUd9nfxJpWPXraiHHPg72zNZqBpCiybSw5werTabpkhqb2aHvquhd",
  "key7": "49QZMw95w8a8JaDr4p8y621KZW3v9oQ51qT5bL9SFNfeJzo5xgME3FNgYZ7aB6EtvSaJjNLZXQtFFPS6T11vmdM4",
  "key8": "2qTKgFJWfbVEXcibY15raF4kzm66nQd8b4vCP5bytLJz3AkkfTATNQbTLKTMsNCfG5Lv92UYqr88dn4M3xHaAZqJ",
  "key9": "44bVc3CRX9yZ84GtGdvzeNJzfL6QWY8jUh4NASkmNwrV3b3aKfWgFexNhnMYL8ZmL6WTP3iEZzGiaYmBRUey3fAc",
  "key10": "3kLGsBcTbDbDDoBbA6ovv9DXg86cuWbtoGKVgq5u3VjsCEv7Wc7vddgZanLAEGEYxh6Ahozw8fKacDqru3wTo96N",
  "key11": "3oAAUkLnw5EufKGSYBgho3i1Mfc7oCHMcwScjdsNThQ4ADX93HKY6eTRRrP7mhugfvCfGYDD3QJWfcxhF35kduYu",
  "key12": "2MWuJv4AbzFQ8ewJY6oAfaUA5PZHtYZs1uFaZ2sbWcSERMgBZMBGZk4mi9yRkusCTw9msveCxmhrqA4WEFqftiFF",
  "key13": "2yrAfEifC3eashidhht2Hu8eu7SXWaYiKc4c2ioHyR7hXPSzXy255vmiLUPucNoPcdMXUzCZtP6s9rFuzFvARvtU",
  "key14": "2q9ZWCZMLfaA5g2qZkgkEcPQxh2f8YDJFnNrKjTbvDjCQ6kbpztMRVrtpidEYPve7ThD8ergZ3nqt1E1CJbWdVen",
  "key15": "5KMeB8ZMpdemVR4ADF8M3DgadneCt7MVu46rSdAC3PztEyqaGF3ZhojYjqvA3ZbwEwKbtygoAvxA39Hi8LzLNh9c",
  "key16": "EdvFyumHtxLak7cJ6ayxN1WWH9g6CPAixLc2Uy8R7tAnQ1Rpmu2n7YxV8PpBYVy5Q5hNHvdViCfG9zS8SkMnPMD",
  "key17": "4turNxVVgCXnNRyJLwJMiZQXytztaoFeuKB2GRS2fB5FVkPAUKNjyZ2GekdbhD1mLFiqDsQ5jqVzHbUuDF4Krqu7",
  "key18": "56yF6DmLdYRX7jXjYE1vMdNCavseVfBC9HDDD31FD87YSRCGxVPB4tR6Tt4ZTrkRcTWQQ9jEsMxQ2aeE2iCxFnVd",
  "key19": "5qusUHYhLRTFMeC88eZa8cdzc6FRGovpwF44oWeW2PjYV9CuKmZfZSr9MH8hQm2SrdyPHYmKvNMeYE64oCb41Nr4",
  "key20": "3i5gGdxYvqftRbWNTj2EDhnVmgSizqJBEtAt3mvFgy31hADd4AsxJQavsATZbvBjuQr4qLRdFPwvKtkLPB96D5Cr",
  "key21": "2LtoXvkJXYqNrg2QpmBBeZEc2PwDwUjQL4fBmzHTz1LfDZ9jdbsnxuuHC1XLHCeQJeSJQZ26qDtUuaQ1RYLWqUBs",
  "key22": "2iWN2jVq2pgekhbvzz5F544oqUywVnVCWPWCmiak4Ws8WD6j8n5gzXZA68DW2MeLEdk5qYYNaLJXjkHGQ76DFMvv",
  "key23": "2iYeveNc2wzHxiMy3R9Jt7dV56Kycq1nnrHN5wgLZTCsHSJiASknXwPES7C9m97K2LV4MMbBnYzQv66PueFXG4D4",
  "key24": "66duktBWyhJxh2yeUojAoRfK7Sfs6TmvXEcDphnuDPhwZmRkULADWBKXtRVuJdPw9xgWSwqQ1G4zBavRXnNaBW1n",
  "key25": "4Vq2Y3TZRUQRm5HjcvE8VLPku1iuTos3R63FPo1u6QHm4W55oR5y4zNrJszAFXaehNGq8G6gFyyut7of6XDVNWWx",
  "key26": "3eCZGVJvnqP2TiVoYaF47UW9BBvZpiJbyZsnoUaPDRgMGRKyDv9dS6jUyTPhcX7hAHGwsRxjBTLbg8QyxiYmgFmm",
  "key27": "3s46ad1ky4pNbGRxDd5BXQMnjdvYN7oiAZAz92U1Acm2M4rAkNCZQ6XcfqxhV3rXzMu19KARAfkBcb6KYh9HwvUW",
  "key28": "Ge2oGrUohn4PedSMXwKkYMc7VUBoJHGmZSHCyec2GYUUcBFhmuBHqwaqGQ4W1awiMQg1ZKPxw57nqdaS4xhfNcb",
  "key29": "36QY9STmStkFzp7eWAnyRmLn6x6dgS66W22nJgRqQPC5i6XH1qjqu6KFr91Vuq9rbAVWrtV5JM8ZzxQtSTC4kEJH",
  "key30": "23J1GWZsAk4zqBU4yZ4TYzbUtg2s2o2MpgmUM3pyW2SmauSi1MbUUEZE883zdcMV8EvL1SYjfkPd6Q91bPBAr3PM",
  "key31": "22VCLnV5KeS6z5AXx1L9SjSswATwFjwDjfDMPUnha1CBwdPs14X9HwgroZfdVxT1gu8GPZKZ45DBLxacfvLpigs2",
  "key32": "3G24P3eDNtnBWqUX8kDvtRjs41r5czz38ZDxmWn5kxn8o3ZrgHNqwuqcZLxQgfcsxDWTcCnFectoiY18881YnbuK",
  "key33": "2wQxTf9k3HLD3gSjveexEGfAgsDX6AuqdotHGMxc3XLHz1CgPLLSKx9cqF35opitgMGTHBycB4PXjmLnRCQsMukq",
  "key34": "1EGT2rAbn3prFaZMHm55QgdDGYNdxV94GJHUXL3cgGMorRD8G66EjpyuY11dzVwfzSAPYrZxB8vXFcEhy5jRcV9",
  "key35": "4Dx5HwFqKgWxbk1aY7YmpkLddxfsi119AaGonRazY6SiKRpy4CqZmLKawj4ik6E9dguR73ziApe9PcJwM8VLDLSV",
  "key36": "3PB2ed7DV5hBWaBqHwfHoE8Zg8F7sJ6gGWuNbF5aP8CVWcVDmt6wrnseUPe2Ky9fjwvXSXkF9zQqNer19hP9HN6b",
  "key37": "3f8FBJjw3RJALrv7tRXwQg6nzjHXXhB4gQqxScE4y8VxfqhCCQBavRmJusctCtXVrautVBj67fY3S2Xa97uFq47o",
  "key38": "Rvau8hmqMjcit9AL2tEm9JHi8crMMy4GnLcUJw2ohENtPcRAdpoG19uRdHSA4tMweZPXMJ5kFJ2rbkRwCD9U84Z",
  "key39": "YDSfLJs5pjREL3Gqh1YFizMGHbkyscJQ4ZdwP5cGCnVFavpMk7WVovdXD4vMymKFPCdzzickrp5Vebpqb5nAKSF",
  "key40": "5ANzESUdjhLRZa65mYrpii1UpYCA7W5Nq2hJ12jSSFkxPH59tCznine9htTgSfe256iPABYVNzMLwSPoGRE9SYFL",
  "key41": "5pvd8Y5jkfA2bR6VuPo1GwczFXWnRgUZ2PXCWei3NJ84xnEoU5FehUR4eRPW7PyQHrYD1KX3j5a6DvtDGgjsPna",
  "key42": "55X9b1C9uqdontDbqtfF3JkRHhZQJjEKd4TdS3Eqi1igshrCMrK62UPnuRDXhM8oWHMBE6TmrgjTVCYpM4eGwcjY",
  "key43": "43C9GZvurcaFDzdt3rJj3vJ395gAo1JVVsD4w5LML1qQALv6iNZbfh4iXdWPsZeZxZMZkMhC7EYje8AsQ1sQRYD2",
  "key44": "cgTHyhRF9iTyxcDsu9AUJfNaGDfacLg9YPBajRt7sGi8cPpgnZ7GziKz1Y9DqzY6cuz1TmaXobhYPg6WQTdWt5i"
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
