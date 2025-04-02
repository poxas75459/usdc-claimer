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
    "4Y4pnMLDQ9dMJc5jKAaFLnvHGrQ8xrexQ49DgHq7Uqfp2bHpyySVd4npCuHbpgfAWgTcM1kr1XS2vgWdcjHAXzzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41F2PntQg5DVYz52ohJwtgtsV6qjkV6SnBm2kjLpzKQXnkQAfFwriGuyeXVdHRd5SWwcDnBNzaj1qP5DtYpWiTwk",
  "key1": "4dzdkDpis4YqYVWixRUzJ2mdC3E2PyUBUr878hh93gWTAruo8vEkxZyXoP2D5pXEmeqU8pcwJeYfRbgUzKh97utz",
  "key2": "4dTBpLi9VJnTcYcFk4gyMTt9HNAEMNipGP14WXK5MAT7t7USTN8XvAVoUgMrS5q1ZsZCdGCdR4tYk9HWVzBjaZCL",
  "key3": "C7wW4Vi3PxboTRzpLyJ95NtYRBH6vzq3bLbqyTSUKhQvhBSJJGrbiAcsLXwSGgME3RZUvKJSkAtr9WVYULWbdXJ",
  "key4": "5UULhcDD6v7L8gZDrTDwptE8hNJ8UXaiobcDSZLqj8mUGoYm9A122VSiJU1cA4PubZXVNWX8u6NJm59Y3u2kC1r8",
  "key5": "zxVHAU7GCKST1Weqw3vGzcPz4pzBXvwPg5yRw9k5XA1AxWygFZgGH95wG4E9GnWv1gteAPHfV1q6Ggy9Uwktp22",
  "key6": "2wL8DBs5JorKzDBzJMgGxDP8d9BzeH2NXWXUHrZgCVnM5e9jb2KiqRnWwWjHhxErTVUZPeVpGsK84wmUW9kgUr6U",
  "key7": "3fXmToCF1hA42sN3b3uH4fcigErskq3KoB83TSp7ZQ6oh47n6rEf1Bkqf5jcktf7Un2tS6z954Yj4DC5Qcx65xbf",
  "key8": "FHfbVkaG3ederirTaEGW7gZe1NgBxTP19dt4AukUWtmo23AAMRpEc5GcARAyy4bQMC22yFr6Ru2vz9bpTEudhNr",
  "key9": "3T56V861tpGbweDDRPc9YVWWLZa5k6KwQABP14sqPuJBdB9ZrCMLgsu6dmRX9gFKUZvvKWWK7nVgVDu6vaFDVXaT",
  "key10": "2WPBEHqtWcaVtwyjGW8SaXJHNmtkmN2Z2xY7RwY4oaejBgT1NDBwBx61TnXdsru1BJhB4G3iVcT6wVyUfgRx9SFf",
  "key11": "5r1zWf1rUs51ieyLakGVAYiNzgwb4y8YLVhsrEyViT5jGmCRUytsKxtZutQ9HiTehxVA9dEEhQ8zAVqEy6YTFH4w",
  "key12": "c8fE2FcgdkFcgb1Xvte3r7HygjUJwK4NXaBR1vUCyuEnoPhrxJUk9yjiTmqzFaPvjoqp4BEvARhxfAd3dAtr8Yf",
  "key13": "4puQxRJHBZpbLbCYmgccPduVNxoCrN4QV2MwQeCHknfd4y15efNEC9nkf1EJrxyYbhiRLL6AgDfUeVN2ZQWgLbNm",
  "key14": "FHjK5Vzyk1xkuhwE2hBz3ERWbkPYEjoj6229AMCQhvrFVCT35U3S89NWh9fRnLF5y2f7PCcFXbuwhd5SeM1roXD",
  "key15": "3LNLE598PGAu3EvzcwbiitDeERhjEojjZRVoA7ejs5grc8TC7pDvRG419dvVFa8KV71481wXVqAx2yiWTLbP29L9",
  "key16": "5uLSbnKVKnxcsWZtGdoXXyjJEmmSf5ei39xGivS24tgWx2Fmgi5LWR63e9eHoaYjTmHek47a1jZunMZHP537JTaP",
  "key17": "5UwAbNeML1Fq6q3vfTH48ZsM1VqzraxDVaWCaHLXC76ahbQ3Q3mwCkcwZW1kNCP4P5NuSPw5jxbjS2611fV2qyeY",
  "key18": "2ntxCd5quPsW7PULWt9f2zYzC5BmJ6yJm19pyK1FAfCX24D6GZgg9SafpXPEVtaeKjoGYZQ2u1UBtrp4jtfd5bQj",
  "key19": "41ab2SLpBpBbKqUqSEHdzExrwwLvwvxCjr5mbVeayayD48YauxwjT5Hdy6GZ3MQsqPcuJC95737mmJGMUB6xoBrF",
  "key20": "nbyAjJaPJPLSvGSf3s3wKt9GZUhprYQUsVsKwwKBbidjM3gT5aWJnK2u4ini4D6SF4Ts4Dnkg9R5gM1GzrakQn5",
  "key21": "2hQ22UKvLsB7DYTqnnRox3Qa4YGUMgvDdNn8PNepMyrkcS2zpQqCSCYWtujXXT4ZpvHphnf1AR88muFgTLyVAfxo",
  "key22": "2vf64nW5Chp5PMY1bpRZCxKEkyWRLaHdwrVMieA55joN1ox6Z5nYciURHvskUhKtGYcLDwsnatRLounVTWZcB6Py",
  "key23": "FgFz2QPDueU7qic5fPux4G2Z9mfUmZmkgCiAhBL6vSCL63GUQT3jMxDCGBdmGvXZNXK3EHBpLkr7T3Ydy6yYHRC",
  "key24": "5qz6pyJqgdBmTLmti7tWFcpCs4B8zCZX9C9hcwvehVwunpNkiMgfUZiZE7U38JvKBGsu5GPKxmpgYSmnqkyHCvdz",
  "key25": "2SEyqKrtJXsrksCN6zPyvTZQK3rATVhRwNDybkpfNTsMbuJGLMqR4KuALyZqdw4yJ2RUtfPvvwnHzNqBb4pfciFi",
  "key26": "3JaUNPtZVgkb1CXnrbmP9tdnRRJi3gpCQXN6pjVJXekR5pHo4qrxe2mLovuQRgXSFd865Tj2X4jxHh7thn9x8bvU",
  "key27": "5MbZeJa3bjvZTKPm2oGRMKtQsBWSmXW4E4jeH74zQ7szCC2KYr23Xy4gVFhfCmGnXyZzHxdFk6hVBnCydg13xiYu",
  "key28": "2qRqjYhjcw9FLYn6tcGZnCqmCRYRHhMAyYkaPmdoBAogdxkxxXq54ayWad5XpkhWV9nf5Lt4mHAMBsqTkjAyfNuv",
  "key29": "4Ka9XgSemSGU2dNa1kFK2cmnV3NP2iZt3eSowFxYVhnChgFYAkyuLTRJ2k2fBmthGqoUXBaYhHp3fPQjWZPLiSoa",
  "key30": "3uG8r1JCYcMGvLPCk4tQ8gDLQpoh5SqAFTFXVpriZUMv83BAkYg8Pb8LbXsM46Li1oTXeBztVWivijgFW39tyD3c",
  "key31": "9vPwvvMRmSYdoagXEzN7r3SaJWWLeTxkzBcJkaiB6PWFEoaq68EEeeNuXCaZFBQSLTyX2NT5eYWrxKHw7jnF7AL",
  "key32": "5YKNgQasZBRdVRtUdwBoEQvNVbzqBN15beVTd5aAkZRccLUDNMN7KZ2JPthLuwyicCWDBNwJoSN8YuA86YSTJZib",
  "key33": "3oXMH5uT7PT6Y9symFPkFXYkLcpPNLZvnUJJSwmoo5W7xAK4ojVnYDZQ2TMqQoAANqVGJNksLxZuJiZZ6S1g3QwS",
  "key34": "5pZTtNKrmRFaVxhVpSLqJuRVLQkCUHeWuz29jHeA6NG6Db8rcwKYEbm15DiGVEWSGeNsYoDSAF8dzx1aqXZfAztL",
  "key35": "2qy6a266yHF7zD75686HWmrxrGc86BaQsJa7DBki9si8ohdKEMjqoNVwii6FapGhdxFcjMLZeDoM8SU8pRDo6Eiu",
  "key36": "3bHWzNEhZVeQ4tg7Us39xxkrGHFUecdyaYN8fMH3bPh6j5BBDQzwfk78NqQKMnBLcCn6u9ixWAieX45RUsM8UEtU",
  "key37": "5gk6ui45M2QyzRuDqARJH5XFgruGRSNNBeAscwpeJWEKrX8RTDSVMznUnsRqeBeWeicvMzTLaMzvCFYfk7tE6o1Z",
  "key38": "4WHm6UYZYGvFuWHubas7rfNpTRcrjfcbqE8BwU4iGPiQmuk4zJk1sX3K7We6Nk14N9GqibtsTnHEKcPZgBJRazih",
  "key39": "3Eo2HBW4wd1hRvLJ7Sm8NMqrGnZrJyoWqKuuFsENgkNExXc3sMhzZeJn2Fzf9eDBMJwnJ9pTYAx52JBme5Zc3Uo7",
  "key40": "25LwewFAdrQur5dDpoRq8EX4xqMPhTMUAZJyz36yu2t4MQ5B4GfNqnQnqcde2XUttDyExv5vvbn5oqqVKLkgAJKT",
  "key41": "NuC8kBMjJ5Qcj2PdvDqxNdfHuKdmoYHUmvxVsYo7GPJ5xH63QHnTQvL6KKNWXR5qzjXChvJoBYDADngi7YGvGLX",
  "key42": "51728FaWaJBDWekGaSyb3FKQFnCZv3JpANZe252RwbmXhF4PPE3YDe6YhkgcKWkH4r8tLmAqFUsjb778uNbBo5vP",
  "key43": "4AYJkVT2sEc32ZZbZS499tNkAz5p6519dHWAzdnsomZQGFXHbYCyZoZebTzhtUktn2ga4PnccZYJZmxnHxPMSNsH",
  "key44": "4qMFAFLAr9mwcmNu7rux5GEpqVPHQmtYhfnW9vzUb4SVgsJJGFkkWDseonxZyVMp3jdtfwXQS7Q2afh8jSxz4Q6B",
  "key45": "2Rr6BMuRQW2f4ScawFmT2srkkhRGFGGqTn4GLxhKiRsdjXkyD2FBKtBtvPv961Qm6XfmGaLfiTfHwoCXypdgFQ7x",
  "key46": "3BoTy51nTakeMFti4cs5HBM3jZ1FhvHNoyEvzxKrJt2WbhqQQ5q6NjMKo115cJz9uJ93iwstnyyDfDoaWJRo4XwV",
  "key47": "3t43uP7Hfm58UXYb5LWZLNxXaZzmRciFbgJA3NZBamYDFdb3BPpM3LQRhsWFgPZ1pF5yYfZZKRvkfFcyHugaGDhN"
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
