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
    "3PQJWB1Wo3NieHjwJdqfL96XgsFiF7w63785Dzsh6jAg9jKwXXBujvLv63gM5QErWo3YQhQpEA5V9Tqqh5Bvo1bX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DifHDrH9UYLGqCQZ6fjDqPAn3jVg6p3F5HZb8EGSHFUSnJ6r6CfGxUKCCFXwBC78ocdi6J9UwzQ7XxfqK5TK5KY",
  "key1": "25huiS1YgUgVijs1PXcVrJmkz3mgJ4dRaJyywbxyf3sEGd5icvipdQzwYVFNV5kLgHJogmnQL2ML2cKhbPCEbwXY",
  "key2": "PRQ5NcVms52pE5H8xpzowSBjZ7ycYoEBUVt1L6TLWm8aBfc6v3CRywFaDuUBJM7agjsQExcpRWZ6WW7wmMCaBSe",
  "key3": "2JE1LhJ5FPgPLJvfoXVKhJvpNKTnKk4HubX9YaamsofmE37N6FXfmaqYwDywUnRnxFGQjDhmEwoHZscK9W2wEc2L",
  "key4": "5jix2hVJkxbRvtMHNWfVTB5hHv6g4dcnjWxqfH9kVErgtd4xVanfmFSMv58dhezGQ5fMvsnSSrjgnuXDqvEj2xPu",
  "key5": "4vZVovxWpxnkeyDfgQE5UZc7T91gZHFbYDiKHWbFKps2a7yW3s1jz69fuGgFeWnDQUHkB9JQjbAGLA6As7VvSgSX",
  "key6": "5X3MMmnMb3CGUun1noV3qgfe5QfiCV1QSUkNydwBA5unLJbBppHtRG5dj8bvU64gMBRSqGYdkZTZb7x5fpim6E5j",
  "key7": "qi6ZhCbufXSF6FK2VSLMe2mvA9BjCMas8czU1uDuaWcqT91YJJEmGmXm74iFaocKUzAtSpKQvCjJHTniHQe4JQN",
  "key8": "SbFAP57cx3t7EBBNgE7trboFiKUEBQA6mYtRSaDhBn42z8RRMF1CXzW2DcBdprLbD98ubWK4jRd8WgwSfm35T1e",
  "key9": "2ZHrkMmXyHKCnnHU9pzYxaAQ1miTbmps4U4wuJH73PyUwrUw5ZGBNp7zRWLEti4vtC1a84rhEH1TiF24SGmD7B9s",
  "key10": "4z9D9YNQ9bvSxbtQbVJwX8FD3oJJKszxrYRcUpvopDhXtNKnxwN4uNFfZT57YN2WBB2MisT4y89guW7G2dVajruV",
  "key11": "4sKhXfLNaPoovH3KCnmAuvbJkom6wFUqWFi6TYW7y8bT6mNf3GYuog56WwGcxaLqiE4Q6fWNZZ5KPHh4FqPEmHMx",
  "key12": "3ucAVuRYyT5GjSYga9aGnJvaYVYwa2LGKiDHRPqENBj2ASq4YHoWvsZQv4ystLqgjYUVMST5qvgGsCQdSWkwC978",
  "key13": "wfV94jP8WWjdCbcY3asoWyjFpCzTDQZJA8Wm9G3vyLybtyztmocAhXuevYfK47VysUhyMZRcqbSvWGZ482MhYQt",
  "key14": "4xyxJWezKiM1KztdUBMxQM9BqatTuFVqHqSUty51id9zHAs9WyC4Q3q4yEByh5phq2kYSTQJKJBcNRsAkuxiMK6g",
  "key15": "2yw1nQ3oFWXELrfGCAqwEGu2bjktJ15UbJk36kKUY3it87mbVNKfa2AMYuvicYyasnrp2yS3E7Xri98wzV3izr3X",
  "key16": "5zGCPCVswKhw2w7jc3B63reAcnaGmRYYbtBB2jjQrNzFPfvA2S8fFzyxHpCfzZdSDAYof4GtCPNDaEyq3RVrBiF3",
  "key17": "4xMq3QDsLKyNu7qvLKWTrEV2tLpEiiNpDbaqWW91ZBADBhMWy9QK7n4QPuKdZdTHVXamqADpqeqe1EHUhUjXaYX5",
  "key18": "4eagQ7fiHQgDiMr8D7EnMLt59NJugwwNRqgRx7n5khUP7JqnVj71HrUCQsD8d1wiTpt3eTSXEic7CRm5fL8VTmZ2",
  "key19": "2Re9iZu5fhsogtTkBEymsqRzU6nULmqdZ92MokKDrrojnK1keLBpPniWLEWxUU4qAscsUWwV7tbgx3qWmhPkxi3Z",
  "key20": "3LWPYusvYnmNaC6URVhAFX28qf5bsw9VibFdw3JEkih5os7MrFSm3We9EBJKBepAVBmpzg7e9C71wvY4jC3DMy4D",
  "key21": "5yMNn85GL5MCjP88rehDuu9QUjti77JXdguVEKpxdKWAgccvSAPyKqWTcHkGBzJq1LdFMiE81LE4f1v2gkhcYK5v",
  "key22": "2L1nJgD3kXPy8EZzz4JRN6mCatq3gGTQqJRJtmv1iUWeBAC7cnXYC58ZsRNZjqhSsi8evoL69RJJmhUCtfUR18nV",
  "key23": "7UEvJ3vo11p62ybJrupEXyecshXdPCdpAbsdjN3TBc2qMJHmk96V5yqU2U7RQ68Rq8MyVgUvuVQ4zUuumFXCWKH",
  "key24": "3bL5feJzGa4nYXxL1QUN3QbxrEWtobJeg4AtRozDTkSKu3YxSzULoJ9SZPjMKiiwFEv1pu4ots3aCFLjhTeRojGY",
  "key25": "YYfHCSGqh5dj9hvxa5jknJGQHWjQnnTwHeTX5WFnQPMgHSFGocjThvEHtqJScPhDihyDynwRSSEffsDENAYZHvy",
  "key26": "5n6aNqQZ9ufmcwNFt2M8RFN2WJK9rRwtYJEyGyrMewESMXUxQRzdBDJo1ZxpbJ6jmKY4cQGm2kteJRnTf7jr5ZnX",
  "key27": "5cD5bdLNe1sCj5ZH8WXtKPgEiZeCD4zFZDoiyfyZqnTzHVw6w1Cfftt5aciDdenvM3qqMJYfQ8xQghmj9jHMEZsw",
  "key28": "5Ar48qDrMqhkHiDax9WmP2MWoBKbvLk2RBjo8gazibWC2bHjs2AweMf3W3r8BVNSNSN97PhN5VVevDpL9EJg88zk",
  "key29": "4wdZo8SSf1X1LmDJJzKqzTC3AUCLL7ENNHQ6QMBD4rT43AasRZieir9HmSdfa3xm8i6Yn2KiqPxEjKzBduW2whhN",
  "key30": "2cA4Z14X1wwLRbiDBmxX8kmnwoyfy2SBa19S6459cc7qe249aQu1LW3bFBmVLT1uMqVDSpF1F8aV55ciSZq2wCbv",
  "key31": "Tvzf6wfh8FhgkiFvNoHvFcNGcffqyGC8NBb5tYN8vEJo1r9A126wh4GKvi6JxKfrrkChFaB6aDbkFUgiymZjRUF",
  "key32": "2Mye39rnBrTV4vSV5YCZWWzSgAYSa882W28bFi3agDds38qukfVzsnX7ceeCojXNAVE7GrFWRZeL3qMAQVFiNfxX",
  "key33": "3C9j99yEfB98C8NGfrkptP9R3EJdCh26NkHvaL85WF7E7UfzkN3mD3TLpLYamCoHb67SNh3kxsMRpWo1ZZWJexQZ",
  "key34": "5uWnuiSDqh9BvpfEbFueqekRpWwLfnE58NJJE7o1aT8nqKYUTXYXFsp6rFyNCyQxDhk6r3gaE9q3pASQgHhC2z1G",
  "key35": "4xA2vHx7par4FjWjor1Aokxa8qiRttybqqpWAGyTWxvCvSctTkNq3aK7tAUnBu2jsRCNCbW167pwfJQm3gdRrhFo",
  "key36": "57qdVLVZPNS6aAAmXzdjd82ytQT1Gc8dEAHdpgxAzMvEiDZ1yW6ty7iTn7dQddQzHVV2LyTcQM5oYAroEALRrtjb",
  "key37": "3H5XG2SFeT7tK7YhpgVEgbXnYoQkuSHinG7sEtXJjj3JtEPm9AwMZQ2mrjtkvnrStLbkjpLMoQqSWvrNjxDGKrRF",
  "key38": "2qYmNY6AbCBq67VM1b1GHLTMm7EJgpJ7g6AiJdxSnx2uZd191nTgQUX49DcnbLgMaJPQULd6Zju9dYJaj4cPkffB",
  "key39": "4VoxZrbZC4wMVnaYpBqSLrQVtN4xX7vXGMcKp1A8xjruFnX9f4VJKTHXWgkYVq3C4sRq6w812DV1E2pTqoaZg5yZ",
  "key40": "5by2WDHp8v7A336w4Km6KxaeqyVTowmX14yWgGrFx6U36XCwugZZEiFyrB4kJHpgXphbY7EnJJoMv79JBC2YBntX",
  "key41": "2uGzheZyfyi43Viw6Yf36VwZ5RnNNCdAjvnSjf1zBYRCf4hjiPu4dZ7NMuDLx6GyLasQFH1F2uDTKei9jqm94XP7",
  "key42": "TSJQWS79tCPLGkPnRDcFK6ucwQ3MjYRqSPzdUBsXRbLvtUd2ytF5LSQLrmkx92WrVuvjBZhAq5By27MkiUqk575",
  "key43": "qWKnHHJLHMhu6NyEqnQ3AgWCtFHNtW9QNaoXKySAQizofsUbQmXw4VrW412CWcWMa5joRWqcNGdQaHAQF6Bnxdj",
  "key44": "nUS3MB7EkbM4k7CXhnicpFQ2fw9bvHstGmy1rZDF9DTR52NvW6utoDYW9Hmp9qHRWVwwx1LDPvNBqCaigzBpuio",
  "key45": "3uJkhZfa6w2uZiUMaFsTxZx6ZaspUH4c79M2Mgz15jDbLdEfKJroGhNhyvty9TrTWGxKJ5ZzsoVcdmMJ1Erfix7m",
  "key46": "4A8TSgub1inQyHUsH5Scx79gUjCCLJ6rZCR9wyZdBFkwX3d3QeZprJE1dNKcJPVo3DBEJP1jR6hm2rJxMMioiSrt",
  "key47": "62xGW65erNmRy96WR8m7YdRKezccutFvM8iywg6mHueiusiS65jt9PbSns1mpVvYf5yCPJCgsuBPZ79uMPKh18WM",
  "key48": "pdVWnsyc4VV2oFbXsUnjwet2tKD62kWbmcirBVYgitfyxZoPz5RwoLZbHEa9UePoa31GdMgCBH6bjDDQKeWkb12",
  "key49": "5RgpwZMm4ZzZVqHkUdcBPYP6omd1speN58Xz4VDodBy8gj6L9Cr2yoxfMN6UmSV52FzEayo4j9NEmdodZ8mobJZE"
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
