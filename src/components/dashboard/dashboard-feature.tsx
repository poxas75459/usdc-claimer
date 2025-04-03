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
    "N5gYfzNuQ7wi61m5sRCoY5AaFiSAwAnnjMjUWLBcQT83sewEETTKmNDwy1xXWAq3Pb6iUXwncLCKgmdLY9iQobK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7WLtiLSCJF5ghG63uQotHgujeChxNzmpJjHhQeBm64S95hC7rbntquJ8ytF9HbdjcKL4ehgmHXavNR7QttqqN7",
  "key1": "62ZiJJjMMq9q281QMbrmaLENVjJutydb8Mhkg7XLJdB6jF6TUwHBfcAgPxsHgYTdF85215eeDj3bziJy2ggd5FJn",
  "key2": "8M7SDZZVEBkLMuuQHdnb5WSsnhNcf3a115SuQ7PEQHmbpX1661Wbs8sy9AnNc96ZbSGgzNwJe1zURSZZU982ng3",
  "key3": "37Ty87igEkNzh7wRUthG1ob1kLvTSFBsnm36NUh9ruuoZuvsXU256zGhBis6Jb1qiRnwkB2tuob8ZCSopvJrVgP3",
  "key4": "5sRCGPAN22RB4eeUAPPLJqYujTpYLX7Yo1qDQW7p9VuqE5u414q6gyECycSQxxLuHxceuJfLyDiEQHUNjzWPHJe8",
  "key5": "2UsyFc9LDwCoYvfZ1PG1ifXRSU7AnpTJp79CCPqJY88uLKwN2Jhuw7g1oHN1wvKXLgCKbSauyMvYUybaxghgcar4",
  "key6": "3EXZ1Rnr59V62ipgcLCgF3W5mifZfUtjdAdcGM66GtEm4Z6o9faSTCBKMPeYgBchHFHvTeNm4RRiacUC3HsxhzMG",
  "key7": "jnamk6sXh8MZGLwQfS8QQUEC6hF6wat5SAWhEH32eHp45GYQ2AQD3C4kdYsv9eEMeCLc3M1HbXeVuuGFs7QkKEk",
  "key8": "572SsCPMGfYHhBvJUux2gq7D1E85VD3gFaFju2YLZ8NtPU6uVMzMWN2pUkA57Co9FdfgcZekTCwTSJvmZrwEAyEn",
  "key9": "2YZVtAWH7Tnv79ULVkWYfjs1Pkm4rGvz8Bv3rW66imaW9E6FLaXPetEoRMyC1hyWjq5jiswbGpTYNPNcMsdwRiA3",
  "key10": "5NprV1HqzoXRup6YMAeJzq5yBWwu5uB1QbiSJMiqFgiiXw2uRWjKCNUwuNPHD4imoBGbtEH7ENAtv7FkuGK5p1du",
  "key11": "3mQW2eW6bySMqfa9LGhLji1L5JQcFuTPLKR9GLYBHQgQXvtdLpgSapPChqBAJhCXoMsqiPD5JYW5HdYYBxLY6kJW",
  "key12": "HWrkXb9WoYDBYuGVxxwCHKLGMNkv55hmqANzX2QjT8bwcAeV3WZSFAMYFXc22pH3PiErtvJrG2YapiY4ZiNiUFL",
  "key13": "5MydoJmjAYEbSd8DUrPJsWMJY5kHtAugHEEhxJDGLrwDQSaGXnPddcTEB5LqRQqAm97jMPJs2h797ChEvpdhjaVo",
  "key14": "3nLMX4Xbw3MkRq4hSmL9SSMY9KTAcPfytpxp1yPY4hxQBBbV7UG6ksjykYNpdP5n6EaxWPTwQnrvsGaN4BELCNHd",
  "key15": "5KoCq2hKpkuWeTwb4ptob2A533YmLYwk2qV9D7X9tEAzQ3XmQ6msbgu35sk5gD3rzgjRfL7bm3cJu6uM6QhpdX8a",
  "key16": "6cy6uvBDQytoSSptF9tzxM5Wg7hNiDhC1dQF2qxzr4cNPScRE9WJJMBFCP4CNN522tTg3nz9soVcUYoojfoHEqu",
  "key17": "g8vGTtPJ1WEP9xXQ6vee7H74nSiUeeEWDaZqssTmpb4whnAJXjARL6vXgeyFW6BfRzfnciSgz9Xp4au6eg8iWY2",
  "key18": "qzUtYEu1LKDWCfpTGczK2VCuTXvFHRGMTY4SjHpniCFm3ZAHnG1hFJkxRJH4tX42bjbd5AwZmXq47CBrQV17xH3",
  "key19": "36VjoDvomvGj72DzLQwweQYA2D4L7Z6Nx8vyKuPwoXtwtYysQ1j9j49LCiGLvxtWWatnkoYn5w138tMRL9zfhHiA",
  "key20": "2vzTopPjMpk8d2HEHDabBoHY3C3Fh1xvC4m7d4wnjDC7JSw8izgUf38EJ2u6jRmXnTJuAH1o4psr9a3RpuwvZ48R",
  "key21": "3RSwvs9HS7r9VsVpDj5XeDExxM8EmoBnwygVzCRhwTcx1bi9umNK8QE8i8vmfqDdYSYthRFB3zS2TzQhmsFSU79P",
  "key22": "66hUyGDf3iaHa56g6xj7dtjPtyprcSEFJeUy5thaspCcFp46YgBRMKKmP3uVQtzkPdegf1o3H1nxCcWfq8r1onpv",
  "key23": "3kdxE3oduuzwt99ZE7NUTfGby4pmavDvFm9Ws9QFYA5dA5NhQPB5jULjRE6C2oPzisoJgFgWhUmkV1wwRynMJPwn",
  "key24": "2TqhTohTaeJmmQsPwZ8U6MTMS9Lb32bjg72uZfnFwqe86NBFvweo8BVCe913jLTWyL4khSXcvp88vFhxsZBoqBFq",
  "key25": "3yT3NoJJCC3iEqcQ5wjFAmW2qh6CBM5KRGETmZLSWFaKgVShA1W1yvK8L63uDvVHdEe11tcwWQQmveAjx2sbXYC1",
  "key26": "58xaKHMu8MkZ984eJaA7X6jV8bfxPG97TqMuQFkQUMsjbv1JiGqsSRz38fxuLfJ3upan7FzLgLmGks2t1qcjisJ4",
  "key27": "3K4W1uDx8NqDQWVWjw1aCMAtVLDkTH16juWsg6EHzT8BFSvg3hcj7uuXWdZ17AwwxyNwTTALZDVW2azoXjxKAYkg",
  "key28": "4XsbjMTYmYxf8TManugroY1KmJtrjJjEdHwv1Q7q34aGN1NvQ46qEey6wbGyT8Xm5psaBmLm6gETE5EnZgBfipcL",
  "key29": "2Z93AMm7EBb4wRyDMYiBZT8GQbY3atKGSvZecrbnGRR6pzzZq6iwV7M4sMEuCjXAEKYfsQkzFocPk497S8Dxzqcs",
  "key30": "3yWJW8UW83N6nQomgntsvj75UUKXAsSC3ZTH442ty78yTXVum5Ya4Ki2PNBXBkdr6fygVcFrCjMDenPUc5xKrNtF",
  "key31": "5Adx81BXZmbL1cdaZkdbM8sUFZeafSHYFY3muW43b2ZFZsMwkAja1cWY6SjZkz1yzEZAAXZqs41JZjBiRjz2RN5t",
  "key32": "2Bgr2vTK9hMrZgDmd3yBFYbgPUhD5oNW2mHDRHSuM8jaoxXNGJxS8zvNqXMEZm4akSwpvE7xTtLkiKUWBui7mxiS",
  "key33": "2syLdAqX4R9Q5oDDroNKkkkNEfZ9Y4ooTLezoFWSCdUeMHdkaBpDwEqdDm6PTUTeUHbNLhLCsbKwvqt94mhheCyh",
  "key34": "2f7PTCh5QR8DKaU1AUFGhnxr7Chfsb36X6pF59nLUewivoL9Bon2Stoxetk9KEEhExDQtVK2PAozHfzPEaNckU2",
  "key35": "58Lk8zqpp5aYLJDE3vm6grVJKNhAiFsprAzmE7dBUXmn1kJM3zSaHnebwnQ7NcQKnZHMocdSffAbAdUCNhBMg1hm",
  "key36": "5PCrm5Z2cSvDbzTpBmuu5ZwCvBr5NKwwUbuUvLtNJsthJNsiLTWSBD6jGgsqo6nJ9t1WQrRMHg5b6tmohTh3T8oN",
  "key37": "3MbJge2Vn11yWRmDFZWfDTtdMMyf7sHoAyQu69CZc5pvHKpasKihgyx8Y8yR8Pm9VQYK5KXdbXRRSPDSb6o5sQFS",
  "key38": "2G7V1uWZFWweKjWoi3cSe1eLZiFYdzpdTmWr4GdvBWykJb5TA4uWr6JUvqdFw77hdsrqZ1zzYqYHe1mLP96LWJCc",
  "key39": "4JSHNwxdtM4VrzH6QoiiVF1J4sLiDB3Bo5i2BZqMn314umZ1195aQE5PmkMiAGxagX85V42r5VxVfFf4X45CqUVs",
  "key40": "4Wdfz7HnRkM8GakCJHKKFNbevLFkeMKK36H7MJ8B9CFon3mbqfpaee7zba6ycPZu1m9mqpV9Juh7FJ4TTuM5MTPP",
  "key41": "2oPqJqYP55mrze4kJULNY794JFv76PicUoijLwshQP2eTjtGYrxCcVEGHGHSnKFPqjMABv8EgAM7kSJJu1bbdUoR",
  "key42": "xYUcutGuLG8gpg6H4nbwcLi6SEcwUfLuMo7RJZAYL7TNZZKBgdHFWnqJ27Bx1mhRMABGc89BxJjvFQceikqCSu8",
  "key43": "4uyXZBgw2eiQ1Xfj4kPFMmgKM1NTpce6oEkNXTqz8dKDMDvks6ZLjuhkCbryBPV7YBYyWwDTzQC7o8LAYkbN5i6q"
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
