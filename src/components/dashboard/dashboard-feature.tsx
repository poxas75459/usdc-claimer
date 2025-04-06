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
    "5TvDZHR9emcd1iNFfgHPoQ8swANbGqfG2uokuR9numUi15QRwos2YpLQ8oUiK1aGBEcDRea29UN9XsAyJ2tshMp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2SZukN8hexYLLpy4KFotf5n4g6fMiNaHxRVjPCT3gWRdRS6TfvvnayazHaZcNvU6FL6YcETQSNV3RALFBKATRZ",
  "key1": "39JotqYHGLXoKKg6g19Hkq8rzHdhmk2MW1C78zsqynEfWmMFeyEeVHYDSX4WZH9AijnSdUdWFWVJy4PWCD4JbZME",
  "key2": "2irADRFhA5sYhnkH4XcBpYEDYqJC6bSE1KNbCzDot9i1zP6fFC7N8s8aNvQYJ92qDds5dSyPQKfbxtYkWpaC9HAn",
  "key3": "5eWyipaYzw6VkidFJT4nazZRL6sXvgN84Tx1p28qrYYUvU8dKmYPwvJnH1q7mkz72hetqKzgngvmC2EMPYkfsupK",
  "key4": "uGr6eKSuVWELTeyy7dRSsdTeQY8VsA4SVshBkb6fFHYv6JTCmeToP556GJhBw3CqbHmug7QjrxX9Rb9rshSxz4B",
  "key5": "WBkmurZ3r27qgmEkuCcucu88vB9zhGLnhrxVJouLgNNt72n217PMceNERV2hXkhvGyCV6sDprSnQ3sga3CBYtRC",
  "key6": "CpLUo339ddo4i5LEbzT2DVP5xsxgKcimrVimQVQKmhyuJtYV65KRaQYbBYxwm8AoLvG2LJXMSzmhucKcH5XbT83",
  "key7": "3sUyto5VsZNdqMSTjfc6qQRYGUNzUreru4Edo68HZcpQWJU87ExmuN2KrWMhZN5EpCk8LeA5BREAV4awUehbuenN",
  "key8": "2jWAFS9hckmrsUgQdpPcQUFuW74GGeJCmMcCGVZA7YzGcu4wttvshx8nMtADkaebSFzzswkTUPY9gtJTMf1tFcjN",
  "key9": "2fyFfDmxQikJj2x1yjYs1MsPXrR7qWgNha7tKhHUuB4E9tD5JRDhaKRHM8mhhySWDdguExxh3yNAA9ikhmPNxJqU",
  "key10": "4C1GKa3FDtMSmRK7GLSkfutb9RYLqmowfN8Ug8VFZ3ASEp9GhfmjAzXcemu2AYae4YG9S9ZaYNe2RC719YZnsRta",
  "key11": "TANCR8VbyXLZzCiSGKGPRPfdJhwidzXcdEYQ3tFngGV46ymGyQdErFjHc551fod9fax98E2tdYKsd3DXr9vuksQ",
  "key12": "2ZbRecsNNnS5uee9sFReBguYEbBtzdxg4StTLEkQV548fxNZU3pnpUZXZjqoPrThUmUb7n995JWBqSK1zNXhGDcZ",
  "key13": "3PoWYv8QeV8Y7Wfmp7fB5ocheZieiQWTo8QH3u5mS2dpCw1fYnKDremmmQ7JWgo7Bjg1vc7CwJuzM4niu6r6xqJj",
  "key14": "564iHcdoAxXmDGvy6L5d1nK6ahK6MhYHwXLrC2fuk8UXY1TXAKeFGLTxBQVytKYR1LVZ164uxsneXms3PhRTAQxa",
  "key15": "qar1MAYaqYCQsqpjTL8qz3bb1KYSegAShN286i4jda2XpKW7Fo5uFZFXvh7HxD8Bkn46d2wjuPU7WTJTVHmsot9",
  "key16": "3UB6SF7h9H8X9UwJGZ5jtNcc3QveKZ2UyYoanApXYuE5VKouyAm8FZiDSkGomSojQzwPmqGor2hxgseGzx1wYf8t",
  "key17": "5DcVoXYWRRsWTVLCw4MsnwPAqXb8pSxhPDiyHSJKPxWVDUGV1JSxsEf36e8fhHLKHpvokYhH1bsfRP7ySLEHa9YC",
  "key18": "2rwA15NruWfEcfW57hXHQWDUsXZBfaP1gjSBLSzNiKmoPGbdehRwtXX3QyEFFvpEFa9B15YSrwP1Fbn2JJVEHEEN",
  "key19": "Y1FiNajoq8XzrFqSyCxKXEosteqXTGCuxoBLUpLWQdAVUPWF8UyxqjTAWPXTerbrC1Kqxan6yyQA35zPXjdAjwT",
  "key20": "3h9XMiKYtqhL4pbMhKSUKSx2oMdVMcxs3MN8A7HcLMZUJXPdzNmyaoe9Wq99xamyopD3nvMmqWPqeEHpnHbmxf3Z",
  "key21": "21iPei4YAnA42p8FMhCa26u9jzM3UHUcHeNc9DRKwG1BxdDNfRnsKuXUScAiQ1eTPmPaZmnK1stxt3q3Jmocz3qE",
  "key22": "5g6PSVuMk3iAdgrwaCJ4MYkXdXRu5xyVbue2dpLBRUQxLURYCoEqcAC5jXJ2KjemaR6AcqmtRCMgj3bCfKzJwqkn",
  "key23": "4kK2MQtaGSmnFXPmfu3BMqhLVUMPYnHYxBYhMF49fb6hygHenCbUD4Ep7hFp13DAmWRVWrN5KVy2DhUUgUQUUhnE",
  "key24": "FtCinfac96TMRGuZaNQntaTc5dhLmGHuqxxwxVmjVQM72Ctx1SwmVyt3wzDuWjVJDqqtgobGwRRhoypqLYrH11y",
  "key25": "2YbRhnGncLjpKe3tmA6Dyxi5JnSjDGd1smvx7rWRhYzDxMMBYQDtZuZ8SvBX4tWy6TKHXdwnDPB3phYLDtmX9gKN",
  "key26": "2DUz5pkw25GtnmgyNqgVqjTC47xzSK6N3oFHECnvypEzCBrojfZvJ5pU2GD2HAAfd8imhg6tnAAXDNPsYkBdzk9r",
  "key27": "jefcmHRcAHNZRWcgRF38gACtAeQyiBjcxY1AM2PQFH6p24jxTo3yTZEfsPuPuuegyQpTrCSHz7Rrqhn512oWcXb",
  "key28": "5ocEdJVRnQa261PXExzkh5WSZJGetUfgnkcgvCDsBv57unzkeEaTJ2aNLV6vhqmWG4UBeNf3x9yLcH2uxSvFxFCT",
  "key29": "P8Xp9hWe6jMB3Arw3LxKL9V13zfmHRms9WH3XsQAmZ9Vt924DbZREcosGsdAqiNr9Db2NZQbouwYJRDczQMYRya",
  "key30": "65dB7ekTpSTGdm2oYttRGQvLoY3tS3EmAoxmsDYYuVraKUVSM3oaBRu94c47FJADWrtHmVHLK2mKXwsJAw45AJUM",
  "key31": "3DaER2RAf6YyfjirqmD7Dvz7sSveZaZP1TfQvVM4ofC5CuCoD7Xh3PoruM1VVpv8DARRFh9nqLjYkc3txdB2dLnn",
  "key32": "4M5q7vK1SVkYS7EFZmTqfdQJ9dvtHc8Z8AQnPYDRueMHhQaDKjDANfwmN4KBXW4HFv5WQhffCPT59HWcE4C18iZ9",
  "key33": "5mPVYmTc1iYirwZ3Ng2BmBLERsqxgvFeQeivreQaZZSG1MW4DBJ3hdmytA2UPf1sEd8DLXXMUWnzAWkLRrK6M91T",
  "key34": "3xzwgAX9tcp2RqxxjvrCdwFSS778pGrhQzpdaGXVWF2Lb6ipfdJQMZVnLVBe8VXQRH5EYqABr6eHqhW2C5Pd6Z1R",
  "key35": "6rjTW3pAyjNBSqv94HHsZFkCJwsRzgpCsLzHHFQdKNJaGvT3rHVEUgrxqjUNeeoBSqBWPZQ1FcGVUsK1u9iNabD",
  "key36": "eXchjAyBPDPezqnBW82YJt1pzezAZSAM2PgGqME7yM1SviPkGv2i15TFMNskHNmVjNTBXiBoh16kGeKwPQuoq5e",
  "key37": "49hcKYwTPsfjbSBqcaJQ7CAPgHrNULnJUPPmXDu6rF2r5jKWxSk6r86Aohe6CjHsBn53oE8FxK1t37Da8KeqbHGs",
  "key38": "4Y7WxpjZ1EKmdJaSdTgVwjD444wCRhyQLp9Yyye4dpitcLU5GPPphuDd2pNBFp9Ed3TE415k2bWgMt54Ze2Xncdp",
  "key39": "3LNUWsaqAVwCvjyktmQkXbSwkvohNFXijG3AL6XhSEzWRGikconSLSeixF7ztHJV3ypUb9FFg5DNBFG1DyMSNPB6",
  "key40": "4n8KbnX6QfBnfWwM7UoEfLgQUe3kL5NYv2wkBwxR7X7CDXY1CnebKFcZ4rGhTo2HmbJNefZ8H4SxcjJapTQ6gSy4",
  "key41": "5CDc7tndqJ9wPhJqZLbVGYJZntw7hqVN5pgfB1BXsrKsW24qGmfRDzjPa2P6uTdCs2sDk5hSvrKDGbZmHZp7zqA3",
  "key42": "vxrBc9GACkuxkfWoYfLw5TixGX9Ko9DXDpPdvFzPo2KieKexwrdr7ekjdmdNc3RN92djoNW6fNhpN2krHWsmAm4",
  "key43": "4yUEQw5YTSWgKPeJ9M6eixn7mqsvnhUB2HxrGJRKkRyEufF8yDGQir2Pv4nabSnKhHVZzTqb3coTiuhviSmavjzB",
  "key44": "2NGYjJF8kAPYqu7DpPUrLayhT1yeh9ZWGjAqbQ431zg5apkGfgkR66NTvrix1yuMJVJFCqacc8J5nRZUf4HntPVd",
  "key45": "6xPd2rZfe259RaRUwLKFAr31y46N8dT7kJqaJffM8TkRUhVzKcUqeHCtfeA8wBHhKgExK6P6LcmMWD69Q2Btbm2",
  "key46": "3KSy9aY3gr5EAT4ngrvn8hjSH1W84TCAGWjpL7NApPVofU7manNGqWytNDwCM4rUBqZhCxnYku4ZvkRDq2bmRp5g"
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
