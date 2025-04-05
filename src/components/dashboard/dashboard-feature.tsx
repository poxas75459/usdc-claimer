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
    "on9FK6S7QeHHBXmqJYE1wYveBvkY2KL1xB4FiYiGyDovBnKrX7QUaQcuLVdYfmQHwxtENgQkkhUgx4QvyR3tyFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WjU6oqtnKvTemnVxT93f4oiQdZEr2V35NsRhTp9qVR4rEN7kTPP1n8CFEij1YPyWibQvj3E7kGVTi7Pc2ixgAHK",
  "key1": "5hmCQ4XzyF6jFQyStviCJPjUJswiS8GrksjfRxJHXasgijeTJsaFNRdM7LNjjLzs1rZ9zB22Smdo6HELD1dk5X9C",
  "key2": "42A7hbGRtZaHCEMrKNb5NzEHv8pLRbTUJ6uHozA3R756WrE5wX5mxJTnyfCgDuNRmM8PGgLCihBzLhmMAh91zxQC",
  "key3": "3BLrDHhSDzNJU6DJRGP7FKQh2ZBJw44CfSjxZWUHiQovtLyZeAzK4NCf5FGGLAEyrVBo6a9maTnHHbyY2wjfDQh7",
  "key4": "xb5U9ARzA97eZ3c5LpcUGbtPRzQC3Wt7gondtagh2L2NEQHapbQhKYxyCqMRj4jKa8vBkupbq4ops3MEvHx7QCp",
  "key5": "3eWAAbc7qShPMeaUrmWwWYKGZhZYzpNSsTQYjYz27mKSz6TifEfXjWtbx8rwn5LJFHFJTfw2SSSqN1febM5Kxqh1",
  "key6": "49NUy3cc6WnfqqUPqnLVouwseB5tSs8XDnmV76m8GXeAjT31cH8FNK9fsuMKAwFkoTsheE3g3rT8eQUUUXpYkq7e",
  "key7": "4rcxSkefDzMewbgGfPRef9kZJVRVx2WUAFZBkG91tR1NiXase8YfuYNWNmbwjXXFMBjQE24Vk7oJnDewUr7cak2w",
  "key8": "RkBpHe6G7EimzK1jemj1khpYTV3Uc5FfU3ab15jaYKNDiX9mSbKs7m3J1Ya7DcFmRbxt32gShQMkQqnA1JQRdak",
  "key9": "AdSmATwKjYDYGzRZ1wGBXqviAYA9NzXQsZs3RCcnWVdYKAGzTRpr7bW8rNvcNpAadBDDm64U9BMQMChNYbcRi2q",
  "key10": "FChRXfZtShRXUTEw3rLb6pUEwti3ib1EaLU24wxJr22MifEW45ceKcCXXbXHRGH4XnTPKZyWNVTGwpv5CvDbVEB",
  "key11": "YyY3wt66yK8ir3vFJkDYfWd2MFsoHoFnuWnRpoq4F75DwYmmHRaJHzGR44W4d9i8Zrgtai329JAn4vDc3MjaiRX",
  "key12": "2H1j83aEdD18T18QNPkF3oQiNedN6wkH4GSVJgvU9zFAqNPQQTwn2s2VnQ6arjfbTsnurfJn34jwRuaj2H8DpKq1",
  "key13": "23ZgBqKWJfSD6Rv6JjjxgQYJyd16MEDbT5Wnk5gh3VvhAnnsuKN2WUme7BNimzpDwciK3cBfEUErLPkB1MWmKwsZ",
  "key14": "KAd33WfRMyQegM2JMStkMQLZkHsh6koBXxLZoefKZUmP7jjgV4y6ZZ8U1WwrRJYp58CYMXoH79hLjuyGMuGw84q",
  "key15": "2y1gCzxvN6Rjt6VENLtyjsqNpW785YL8stKfR9KuzHqJeFttYhKeEMq7LLhnYvCKztU9uj711VXP1BKowuP2Qdj9",
  "key16": "65vXmdTZE83YvX67FSSeRPxzy2Mcy6fq7gT9YNqgK65JqamUyx473tDoDx2QARAqLWu4aW5PxHRA3kuaiT8asvuQ",
  "key17": "237wqPctE72XxmBjYmeHwGbmWnXks7uuWfXnfL95q3c1J7g8FD9JRus888n5KX2tE9PxxWEuoBMRH12UEGvxQxkC",
  "key18": "5DPLF863jsFzSAKkiVTYv9goRiTPaEd9kXbdNh8gdEDjioo7ULc4dKEFgpbXMzUTtwvpEvXw3aXuLbFCKteNKxKT",
  "key19": "28dcfcgT84LUyFA42k1udsQBzQuGFpj5FMyiwVXBSgo7HXeTVVYtgVUGkhdEHYfhyqA7QKcSkPT4wuDBcs1YXdar",
  "key20": "2FESm2JpynNZBkv9i6hRLCTCq644tT8HjLj24DmRCmNuuCfF5KGAgfYdnfiJRXEYnU3X6wyHosJyWVzwPjSAVa3e",
  "key21": "3YQRc5BETwYVRyriyXg5cELYPeKtGc2MNPRarg5pztpr3puSoAZsFPTxQLWc5nWgfHNrdeKwyshzHH67HS944mfX",
  "key22": "3yemfLyz9Ppb18ST9U5n79wqAANZZoNS4GDqqw6V2ohbLWAyB1aKKzpNRTtGRRvEAfMH8FeBpPCZQMCc6SBxUU31",
  "key23": "PuwnwtPFU4AsBmxypqHiM7oJgfp3jkSs3MJruHU8iJ1hofBaQHQLsDWM8woEJmFaC63xGYNMLFiuFQk9V8mAare",
  "key24": "2bE4WusNNoDeWgZB3bRYegjRaZJJd7jpekAjrUuBzZVK8ik3nWRaFvJh4pCjVM7nkiTpGzpz1keDB4GByNwx1yEU",
  "key25": "2x1QGu9DFdcqmC6jB4WNpQbZyk4fV8m4uh6R73SgsuNu3YmQrS2wwenBGeYhLpGGDSumW9rou8xzy2L415GaJ9Ab",
  "key26": "388E6XY5SvwYrjM5QY8kgPatUne5GsGYEMyWXG8urK9e7BQAG6ZqXS5H488yP3YgpsDizxvxEn3nBEnZbjSqgxyW",
  "key27": "49v1E7H9c7FPu2PWxbbaKwPMoP9SkLzNhNuenb4NoE5yPuxMEooioeauCR4MuGSfbfjat1SpgW4DQea64m6YRC9U",
  "key28": "4S3JaNxTLxL8hK1BAGS9mRe4VnBfqFo8KkU1BTSL4hg6bAjKw6QDKfozhf492kPAWuTRJ3mRjuJ5k1qUBb6ak6E4",
  "key29": "C52uacvAbVMYRMzmpFHEhEjeExSJTRCq9q8Q9aUzgnwgyy8p6fvBv6us5nqTwwpVq6BvJpgMD34okZiXMBG44A5",
  "key30": "4ssapUWmZmSENJXfGjy3eFjq74BDAz2p3egM3aXwhsEhH6UY4RLLTY2Bot2T2FswEU8yf1MrSWXhTg2xsAE2Zg7x",
  "key31": "66uY5ND8V8bD3bBMT9MoM32xFuuAWHCdh5NstDb4ewh4E35rpEFXUnnVo8zPnVUdMN8vEY7m3XfHBxvugG2H4CQ3",
  "key32": "VyTDYpS3UfHUwa549KhgQpVFARnkbMiXHcBCH5TXujE8UYRJbtrBvw8TynyLnnTsvpHLjaNa8NeX3xMLUNRoLbn",
  "key33": "2Rb7GyYJ2Qz6wUzAw96caNEmZN3DTCHAwthNNUSnGoUxtP8EJ8CKLqT3y8SfyeYsmapN8DSbam176BsUfK8XRsz9",
  "key34": "3LzueRYkmnm3YQfwzTB7uQ2MNpDGcfBjPWvjtXTQfK5Ewu4GkFngSEkoJaDB6muqqRh8ynewchyCoMEFVoUuL9bq",
  "key35": "LYRqs8B7Bdu66XknjvdKJQL5UkpWiDVdVnD6xdZ5oVkvWYHz1knheLLBJGNVnxa8anQtiPZFKHXvJJDh7ibo7LZ",
  "key36": "4vxuRm9zRbWPL12qjVAUCFCzY4jwJDsUmRMAwZbfRds1NimKqc1fxrgLHiKML5brug7TMJd9hkMsyTDCj4mhxEH5",
  "key37": "EgQEDdZqFXwU47PEEGggXzHyvtrRGfeDXyrP5bQpDjrYnrB1xQJggbmHJsYbs8JisneZnHLZMypNsSXaxSeVWky",
  "key38": "433iVFiGNzgZw8hgxrzVNobgPRDvf69D3YSZfsoDVwrswUoyvZGRX3ZbvkzsYuthb4g8Dmi2Bg4gJ5n8XtDf5Xzn",
  "key39": "2Z5CcWouN9qevBjQDtFCajQcwQtBMxadw3WxzB2JLWV1c1LzY2LU9BkB7wHKT3QVm6VYHkEdHhs8yrYXSxnjx6C3",
  "key40": "8oTtwuruDjanB85abvvVUEBk1JddBqjJK45B8cGAcvAut8BVqxrAgPrPS23euP5qgCD2uCJh21fsi9YY7e5Ayiv",
  "key41": "4meU2yNhVq1CeWpu3kyjHsysLBanLo4uYjZ27sUmvSRmRRJT6aDbCQh5TCGRq5viPGsMBNQKXzYkXWZUDQYqkfkh",
  "key42": "3c9JoqUxKXt1uwc3qAzsQf9AWAvteGsJkG26LHKDYzNsexNoKyqd8vH3nD4JLE9Shk5kkJfC8qY9eiodwKR71U7x",
  "key43": "4Mrt5Z7G3YvZ6Aacaww1a9KzUCBXRj6HzHHroSVTReKefyoh7i9aZbRtE7kWsH8Bty8Yk4VmnGGwzvrur5PCqCpH",
  "key44": "4wnqfLHrFfd1gW1gVV5nTL5bqirZizhE5BRzxTWU8QCPJZjaQ4bkMKTH6X7iXmUNPB6NA1U6E3wQBm6XhMLMTjAS"
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
