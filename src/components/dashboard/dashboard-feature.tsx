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
    "3XBYiZNQu2XLmjnwXW8pJtr1Aczj3xX2i2rA6FCUa5k13fY9MN5UXLhG3wd4wJ2RuJPGg2rpeP6tHmaBC8k97Euk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TshuLSdGS1VXGZanCC8MwyyQMPyc7TFJkoZ54RkKoYwqPTc1ENSsv9T3VcFJUtBWRjkp6QngwfLfCAzGeWV2hL3",
  "key1": "3zucuDwwHGvbZwDZ6g2X2zpZ2gAXjtfhSF1PFs47yF31fpMVjm17a9pLt8zA4geSUFTGJfhqV49stvNqH8wZQ7yZ",
  "key2": "ye8EAp8mqms4ud9sXRC23pgvPLkC7t2oRf8vQ78Rm1pRQn4P3mfrCRB1NbSjzXNsTQsQ46etqidPGidGhCTEDdh",
  "key3": "5MmgDBjTzsPCY2QyQiMSejL8fF8s2ZWhhLVV8oQ18zPU9NRgwvUaUQxBAsjMpya9bTZaLqMTrmMswdEapheF7B22",
  "key4": "cx9HtmJMZTzXCtkfksUrveoCtJSiHRwfsZ7eevbktp71ukFiPAA4PxbvFYdExFQgkDgrseoaG4Hv4LtgByQ7ukj",
  "key5": "QUUmBJwqwUU8nva3uKffGfk1hfdSHQMr2QNQ4zZgnYfMchbBQyRc2ihoNXjuCBYrYdNTZGmNBCr4A1wv6rDp5ka",
  "key6": "3NE15yKVf3H7Xcwe2Xp5eBhptf931NzHbBwHph7D3qyMsgGeKebmegqE8HXVL6yWbFYVKZhkyBorXzXrF5xiTfcE",
  "key7": "2QULtfTg14jW3uE6Rkcz3b2kNh6b2puGMjepUUQqNbdnXVjsApDo14hEYZtfNCxpNcwbLjV5SvqAoDz8eH2Wp75w",
  "key8": "4LRxvQnRS3jdWwRcPNpiiXFDYYhrrwHYF2AUcDEUYjra1fDVAS4ooBndtMMTCDwUuqMKTF1wqroudzLLrUkz1KVQ",
  "key9": "4SVX9CEewcTbvjCRBAAGYW1TM3F8CEUiTtsj35id18u6e6prUEPRrcWFTFfnv6Yj5yxSdamYuy8bANMzfYggFjT7",
  "key10": "51T2p9FPrVtGepYqnTibvhNEBc6tfd3ct5s4XxPQJMGEMN995yZA9uFauwSsC1BdNKkYBxsiB5PsztGuUVhn2VGf",
  "key11": "4XsLJquPc3egyZXoSqFLWT9fRHLazwRWVCAbYpDWJvXBn2Mehmvchw5jMnomC8uX2kvUbgzhFCn8ZjYEmYT2FsYA",
  "key12": "3jugvsJiBjkddpWXJX9FEftU573XivLa41SRSHZeUYJVus4QZsknsJFzx18Dy3ApXsZixDwoYiTyuJeEsbJwWsVq",
  "key13": "4GzZH2vzrTZsjpFUJZCZrCfqPH9UnkHQNVYnKfzSbgLzeMTcifYD5YwUkgUmsbSMJgyEgEYmBLJ1bVAdTeEtwK7b",
  "key14": "2Y4pwSocMyQkcy4dbKYwmbiouunAcqzgFMMbRcVwSf9n3dqhWuuHw49ZwDY3jviKq1ohVDpNzT2dXo4KGTunpiF4",
  "key15": "X73iJSDFAq2yV1m9YTWk9MTgjyt7CkRtHbqoQc2Zxwcju2NdP2z2SjLf1FVyjw7nijpiknv4Rzxmpn76LZm6pSj",
  "key16": "4khai4Y5crqP74nY8aLFznGysrgiarWJdBAVSmUmre6YTFYxFiNCsgWh5nqXBQaUZXRq8GvGd1nWsisfSaDYuKCh",
  "key17": "45CFu3SeVAhF66xeFwZCQruMbMZvh6wWngtRLcoXuU61aUPdGuXDd7LwVXsP3YfeR4Jtnmdv8tiZD3Na6qdrLe2h",
  "key18": "3JzgaaHbRzLpTeCvbxGZ4QTHP6YR2Xyd9HvNBkDP433pjyA1tfQ7q4PWQgr2H2q2CeD62vUpV6U5PtUQRBg9pXFh",
  "key19": "2EL59zTKKLvifHTRxPVKUJtxowXD77CWe88kd1Y6zSgioPH8cGnLNQSFRB3e7UmMTZQW6SWHfEnbXp4aY2dZ731N",
  "key20": "RaxedCKfuajHtNM9h1SAiMDhaBoiUQYC1RbAZ1mNB5qFmu2jwjwrzn7kPZ1PYBtq2gpDJVDGp88ua8pDL4UxXnv",
  "key21": "5FxBwqciSrz3YKMiE1tciPm6XmrMnje3bqkCdffRunRQn8hrJqnENCHy2WCSkLPkmoWheAV8YGCVMgJ3Pnpmsyuf",
  "key22": "3pqPjNuvjXDmR5abYzmSmULxDHrxahj7xn3F1e1KEGs4YP1oSqhzyAVtT4cajm5PNXH4RqLTe6sAsWN5kdrvtJUV",
  "key23": "udks6YjAGKiwf541QM6E1TbU4HEJjGRdVN5vhXi69NMtkGXryy1TxKNXS9cBzZc2bS1d4KLLSFS6fo1SpdENRP2",
  "key24": "4PNsCu7QM4WeA1YTDu6JwWd1Bf9uaf27UZ3NMB7SwNbXSJVr6r22emQqDWbx5evM63uDXhYNaxxeKHwBUTcUp5YL",
  "key25": "2yLH5zKvWUXhtGr2VtBt8idyBUmMZ7iRJBzU26UD4nkgXAkV3Tkj16z915Mge8GZSaAxcrQoPZxDrFvmu4TTHe7g",
  "key26": "2RzWLaZjvv3bfmu7gqbE6ZQvkQboGeqSMVvQVErJ6psxwnraYp4TnEN5UigKpjvQzdcy1Kanmj3RYfVbAGkFQvSg",
  "key27": "2msDArnAouZ4munibRHneAAPKZkqTwuTA3JjZdP1WRSDuuXhWqrAsQF2jDtrbvxNp6pBkp896dKKwtp8abqrfdZv",
  "key28": "3BznEtxYDFsZLUfDdHb7kfnjK4jr1bEiFp5H3F3PPFCzNggUMSq83Mw5SSCxVwT2Mb2VtuXgjLsUMAxxTrLdd8ya",
  "key29": "2S5f88yw6ARPHbsSpCLPJJbZbeZCUWeLi1HXuHc6kG2PKwdPZK5F1RZiLdz2o1tffrkHgnaJod7GX3xMa7ufkWn",
  "key30": "31kmCvwmHkirwbmGmxDLhZ8QfD4U25GTwvLiLuiugcrqmLrc6KrVXT3F5p7KrS2SjWbtDUNoaLny5JiBCgZZVCmr",
  "key31": "5WMy1Q1RB9WP8maMWMMiTRqzM2jXKGgZwkM17KTZzFfKLx52g5HdsnRhG5PkDDhBM5EDzCBn7eBJBhyYVPmN9WUQ",
  "key32": "yxH3G86ZC9vmfqQS9f4iwEhEMsQdhv9iUwKiJViovECSQfXwfe1Zvwdta1jcA4qnBmH436cx2RVFikH6eM39Rai",
  "key33": "Kpm8Pxpx5ZpRoi5qEbTzJwHBhq6cq1JcAqy7XieSeL6WREQBj816etM77JyygKXDPz6SBtFwPoXzk3uEqZpNvKE",
  "key34": "2K88AP71Rg2K4spojKfPLtno1QDKc8NQj3cVASkCBvfXcKTW5TaTGmuZ2yQaAkjA6wULYCrxhjQkLFhBJVceNRcx",
  "key35": "4Sa4BYFdYXqj1ZZQcXrLS4kQ3wNuks2yCJh7mkq6SqjiFicx7Ma8gVjB3G8iQfPvbnGbd4HR9U7qnW5mhHGTyrpv",
  "key36": "2Nn8m9T9bJokRGCkxWMJSkksCHKZHZe7XGNx4rd1uwPkZDh6z4uoiLT6UPTiJ7Xh633UkWK8VM7hDzSbeZw9mPxV",
  "key37": "5WpEPUBdqm55nzveX9REZ4244qodaV1DzyMNdGdfcpcpwhh5kxmbQXCucVw36UGizPLTTKshnUHi9FY55pBDz4nY",
  "key38": "2jaFx7mqyQUK1yYMd7U8Aao18nPsc3nXM1wcA68o5s9LakPeaEMYLCHRpY1VA1UZgvAVghmHEbYxBAd5rxNcbRga",
  "key39": "2vRVTgZrwDiU9mEA4jDeDhBYde1kHnqBiP19gNu1nskRYEK4ng3uXUudPfCg8wdQKhahP9RAuKPJ2b2DYVBan27Q",
  "key40": "tD8kD1wbB8qD12AGoLLx2dgkLDxaVWwPKiEwRKQhBhrj9ZQipAqVhhq9jSfiw6bECTTmxTtpGVBZRxseSxFZwqg",
  "key41": "3TJkkucRGjf4tQRusS3cvB32BKxg6uVF5g1R4TvmazwiPdvdMDtnBkzbrVUxEJpjpqk4kZqpEH19UfDhwNeTgC7B",
  "key42": "4jv3Wc86qtbkxFSMcZr6NskXntyP57mBmP4ZB5FU9SsU8KGKm36Y674CAkVQXEWxJ8dZehaf78CW7VqFgzrQRyaz",
  "key43": "gNjeh2dcXzjZtYWBPPJMs35bxeMrBasHZbdEnQW7Z2npm1b8w9PRyxWGn85Yz6LdLYbfrN7EVs1DRCj4oELcrd9",
  "key44": "3RhESmmLZHp1b9mVJr2LgsmNE2ghByCWYP5fYWzXFdoQm1CFbBEbvhKWDazdrsd4uu77HDYFQXkqL1DEZKtp9JGk",
  "key45": "5wKkHS2wsXKWpPqSHHqrd8iMWenguQispLYkTDfo3MtMz13jWYEuECssPrJGfaPsLRmQgnbAjzww61oecYtYV231",
  "key46": "3Vdi8Ebww9kg8GtrGSuaB1BLgykNUNWuArqZn12WDA8Vfd3vMkVUhr85fjzd823mg5kpM6XtLdFRCyiq45er2w9D",
  "key47": "7DvfYeK9ekA6Ukj9uKQWjftGhdbPCYG6fzJph57Bg5fZkoCZhDEp4YvPfmi4QrtfShjvRidY4fK6yQSvnxu5Jxk"
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
