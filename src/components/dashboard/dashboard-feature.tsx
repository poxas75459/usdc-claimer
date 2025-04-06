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
    "65PmjqFNSBEZo7yru8Xh8XtTCZvLb4ML4kAR36FXJYAUwaTK1bgNmgHaMmUpnR6Ukiv9w1Tvd6tC4qtbRErci6RF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2k7uSGZw95ffnLXVR7HNwuBeZsMah8iuUFJjPFLeqXjwq6LVUGjNJSp2jfnZD1VkPwze59hacR1cf2vFfsSajr",
  "key1": "4r3rzFAnFd6x1fFwAQnJQ4kuRZJtRUtJYAsppQqEHSrQkVtPVo7SPY7Ho1CVJ6YmknFYvSf1dtmsjytv1TRgg1Mi",
  "key2": "61HurSmS1ThyVhu2CqSxvHW8FvZm9cD8pXSSMScSW2xLiwTH7TpGC43Hrx77hts3s7ecmyRTJ9K2F7t4CqBsCVwt",
  "key3": "wFmSAHXDYgFPfqRCRdYxGt7j5C53pNwbVz1mvcw5ciUVkYsVE6gaKpB4nViRvk3HXXSLNLh3KQd57vkhF5NehKd",
  "key4": "3RLvaLyZtCJ3UP86yq7nUTsb7tPCRjj3QDL1DbWUExDjCcdwL5aJhtt7Ti2dyqB3CCLJrimxEECKyLAQtPdHLpR3",
  "key5": "2LKYjpN34CwJJPngGsgtK8oANb8F5S1DLjAXhJdErwwwn8gf4cQjNHdpQyW3hZefVsScMvktWM6QSW5FdmVS5VgT",
  "key6": "4TC8Kmenbz7azAB9bESafVdN1BxJnKa2XLKCLSxPAU6ET2D5je4DHJ8MgQ9kxnpZdh6eW4mAG8nkUaN5hK3GzExR",
  "key7": "2RnassCcSyZBhEX56AsqE18gfJy7KWPBAFKYNXNTmxxoYLQWkf4kmCvp5hukZmiS5DNpfcMF5JjcQaBVthcMa2vC",
  "key8": "7pxZYybuwz3s3pMJo3nP8NnPiR6MyWgSY8tx8CkMZAmM9B1bQar8up7wxYMQ5LWEPE8ZXJpeL9NL2Fs27R5PV2i",
  "key9": "2q3X9WEaMi3UrNuGQp4Qa3dLYtKPnxwkoAmZRa3vxmAjVxb8uPScFZPMznVanSiPa7hCL4EmLgecqiho3PJ9cz7b",
  "key10": "439JadgDu26tDQHwKTMV7W1a9RUkAzRorgWUPNFCrh1RjMTgS8X2tjH951TxXSDiKMQpeDRQ8Q8mBkpEpFw2KoJ",
  "key11": "2Kzd1BEMs4h65nd1Wdw5UtERDCoM6V6iwViC2SuSgo8NZ7PGdJgid1cg96av1F728rDvZgq6Q27dBAp4zzxhrKcT",
  "key12": "4eRE93VvV1q8wbPqbSq9T1KaCa3s9kXJUApuH22ocLqVdSnCoFiX82Hz9znNFUe2QQZhpyDg3iH9CWJCAEqB8ueP",
  "key13": "3sed7eEanUikvuDU8tkYm84ELjhnuFWN89qYzTHppFPS6eu1HjueQVhPqExpv9fwihu9pdHQ3Z9xw14XjZ37hnks",
  "key14": "2ACatpLaYUAwNENSnnzz4jV6ui5rUe9kzotd2tga8Ti7j8TvqX9SFBaeiEctYr58iZiJssLA3yktBe9PzSjEnpqq",
  "key15": "3pYeYFhwKRMJcbRdk6eXC3gMz8rw5YUCnbFisCQvEdZ5w3tMWTFdQbtpUJAQiyk4x1bdw4ytUmbQ5wDYHUg1p1dN",
  "key16": "WfoqcwCr8k3rLG24vwZdgkQRqy3pSrVSvuUNKWVt83YUkN3WpaC1qjwd6ZT32A2HLKn2qok2EpaRMMfzMo8HbZW",
  "key17": "5nPi9guk6dK9oF812jJ5e6Nu4sAasAKRNGjnKfzUZnWGNVWRgcFidgWQqrvkwpsACLmfjd2yz4LiSPW5rFXvmr8e",
  "key18": "33YKNLyemXN9D7SmwYeBX9az5pMDdLNhAfPovvFUTHxdM8Q4m6GRLRGLEsuZd5urhCKXwUKN2XJoMnN8GP8xt7ft",
  "key19": "3wWpeM7aNUrJuutcxySBiQWSdqBXSxAaJ2B4vnMLJR9J3gVhMcTxxtGFxbMECU7Dsjo5GTvWpxdR2kWS5CrbEA1b",
  "key20": "4PyFUCxY96vYCbCNKdhcUJX2UovbN31wk8ovfLxGes9Z22nnUaW6ax4LRt8r1FVkhuw1gN5K2fALL9qMnNLw48sz",
  "key21": "ephz6XHzaZ67F5bLgdomubshZayj8A7pE2t76HVqn5JQKgBs5t5tKgxrJT9Bf7MvEjyZKNWvL6CRo3GVHkTxnyX",
  "key22": "3jrjEddvev7XcSh6nBAQwCgmDDKdiMdN5cthLZyjZvGiqM9zfViZAKXBk53gKuZqqL2BtJs3561KHV6JqKYXsuQf",
  "key23": "4dnqqBDeFz7wUcYspLjVt4j9SixYeh1hBa9EFnCUVNahGsYm9SJGA1qPArXGjmV4s8dQy3B1DHAKivq6HD2fnScf",
  "key24": "2oFhCwjNGrU4x97qqXCCzDHqwqNfKTWQboQ72ZxmSY9GCYZENrhhFFims5SUpLTA2btq4uaySLwktNKNKiUw6PjQ",
  "key25": "2DscdWy3L4xqPbPbZx4xozU454YGyfnTekhGcgGN8GfZM6TsmFYYBVUCcYUoRqkMH87fM5E9Cip1D5yeKGigKi6D",
  "key26": "4xMVMdvJ36EvvDe9ZCphStoBXxKEBLGg52kwSd3fB9vNJYzn9MSrnVEkqo9DvcsVVzLRZkugTnKtAYq1KeTtGPCM",
  "key27": "qf7ysWrv3ePGXRFTSuo8yWCghM5PLQnFkMEt4V1g1mqmrkY9rXLPdo89JstjjCXYz2zkf5aMd6szGkgPGXE9ucG",
  "key28": "R5cyTqMwrvtBDwiRidFqLjbywFBewJMQTiAvpE1qg6a62ozMpGapMbwmFKkVgpjCFcCLZeqRvims2zW4hvfSj96",
  "key29": "5BLoyJjfn2R7SKAa58iWFLCWFDqCntvBkdMz6gEcbpH4f5di3TCB6ypZTzXo6rV7gZQKJjkgooGEnHWTAGSaFyYH",
  "key30": "3R5cozp5LKQtrUqjjHaScNYvo29231Y8FeuLAUFDuZstQU2RiBXRZ92KVmNk521urp1tkgUKnjaa33txj53srtS1",
  "key31": "5Ww82nSkwMW6T7fUixL4hq2Gd1T9QAx4hrjtWDxg9Lk35v9B7QdMaxErf9ZPjfSSUVrqa9MZdU1PkGVsdts7C9p5",
  "key32": "4xNPG2U8bf1eoCfmMivUYD6febRL2gReYER8AvdLsoNJm5Fqoo6szdX3BjUMfmsHMaSYLWHEgiydWYvLDHRvexEY",
  "key33": "3ANJjwoKpHDGLpwbwJpBQnHWmANV74c5p5marSDCmuUugyPJEnZeJNESo5RrSeo1HqXqBotHpreXj32tjmsvz5KE",
  "key34": "9ycnHfck6sV8GkZMWPeKqkpzB1CtyowodG67CjNB2LzCoS1K632r38hCLgvYDZXZsLsjvmKGP61NED2hnoRpAJt",
  "key35": "US7bmrQWn4DP2Pgw9JGGE9QzSJwzinBdx9QTZyWPEKrdm8fCRjrap7WRRFLF8VnNCngAG9xsHB7V1qoxNj3U9Hi",
  "key36": "5tvsCR7Swv5fDcuEoGp6PiJmUqQMCXUZtWpjvpZXgkrfQse43419bBf1gwCT73aJH1AQhKWynNpzhwmrSyEZjXWW",
  "key37": "3667AK5VWsdGbgNTtaqy4ErSRSbvfkPv4AQE53SehQDqL2E5VWhjPwyzZKW8Cmwv5pP5J41yMsZWFpVJTuFkRjRt",
  "key38": "3u5Vq6KhAxzsyMtdgh8NNhavmhAgkTMBSwmvW3ETV1Zzi8bmaa8xpnGHiAEJiirrAWMQwfFwa2ehLJwGJ4XEZoSS"
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
