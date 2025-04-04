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
    "5CD4H61qXg1q85EL5jN1SX8EdURdUfVGHLwNYskQKez13hxwqBd2BmiRAYiQoY73QPFuWdcKpRrsvTgbt52TsLjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59iEU2kVY1HTaveKwzspfhE1r9ZvS6j5RDgJb3giWUSTnP5NVbHD37NaujWu4ND62xdMgw53EamxvdTE5KM7XrrU",
  "key1": "3vX2V3A2fVmsxWrnnyEJnE9WYTe7arR6Qez4dX1EcPy5Mg48fozmZMnmeYnAx3M3dec2vhWKFe6p3Kaem5dhawGW",
  "key2": "4tuPjhEB7TJHXA6Qc3dBKMMs7jK4zx6NaWrgnp1S91EnLFtTEQZNxp3FJmtemBTdNAZD9KhBGkS1qnTMMVt8NH1Y",
  "key3": "2dBVP8cNvkDpnqHEBBPnvcP79gWnhuZV6FQqDrSjT8PhZhtZ1619J3ihutt78x7C8XMWrKyBS4GoxEJMcbgs6WDo",
  "key4": "4SUkGAkf4opoxyxGsrn26XvE4cD4Rgc4idFQYix74Y5HqADTr4ugoTtduumM9nvABDqqh1FfVHqrak7aSkTsVDvu",
  "key5": "473hWWPvw4yqhUCpYVkuUs7HR4fJhyPZ2Zzwq9WAHyCcTv9E6wtHiwNjYwyzd3rMA7KwwfXYfLSe2WFg9ci9BxXV",
  "key6": "647SwFXgjYmGdDa4pCmi3bKJx4uQ3cSUTyqxubv4UTi6vcHNJ1yzEUb8ME9zc73cuXydkTYKSuLpf3wf4tEjC5T3",
  "key7": "5b4k9ZEYkkq7ywxcUboAFRgnhNU9MJwNbmM6Sr2sPxDmPmbG2cyhji2kDYohnx9BRx9T6NWjDDVjsKouueyQMqtR",
  "key8": "k5X3PfnFBGmuyU75GUkDga2tpVCtfvJnaCU1w866QxVNi5dGJtDMfA7RtKEqBX2M412RHhxp1DLoQpBecRWeqPV",
  "key9": "3CjLpZnMYeJDmyvytDT3EMY5qcFnyhJJWtpjfmb7uwXjdyXxwgVGaDSus4UK4uGcxixGMiTmEXqX7J6zYHXpNWby",
  "key10": "wA6prz9H7bjZp9yvwy9LJCrs2uEo9Hzykw7WTXbQHbCgyvCqiE462eHYyeGvttfCkvsSNFiNgDvXnaNQXKg95jN",
  "key11": "ym11tvbNdhDo8zDnjnQ9bjZzPrMw3Bmz3B9riGYHTfT8475aTyyBdaSbZBFtYZEsj3JsxnR97bmgJrDyG18Auau",
  "key12": "28an2HqoFzyYPR5dkrJMsPxjZm4x2cRKXDvFZUzf75Jpv3GN4fRA9kGcA2qf6wXMSUQnpVPT6mfMHxGPU7bzsUru",
  "key13": "4QwSjxHeiQy9qfZ8LmJBNAVbrycvzkukmc3FAswg8zhEPxt4gujN4g9rv2ywKFEtdQhhXNMHdx1UJZ3JvjGHpE58",
  "key14": "Tv96iTyTkpb2wNXXkCqrPdmHas2eHTeDd5xp84FFBBchxN1Bg77ZBCUuD1wzhJQoBdTfbwAoWeeV1pdxiHnpjz6",
  "key15": "2MUPVADzcoAWfBAgzEpKwCqWTRMPaCxwCBgmK3geBoCkjW1Edhip2jK7pxJL3KWg242hdqZZ3Myc51Mx1a4m6uhT",
  "key16": "6BX7QvgnyVqx8k1LUj2cuVTkJFL7wenxnxkc4d1wKkQsEvT7QCaRbjEfYiYMxFDSrdgNvGZQGAt1PDtjijXp1PA",
  "key17": "4SNWQ2TccDpKHZbqXrs5pshzw6EKY9vXUu7CwW2ukeERp65tkwAr168RQfXR1eb9jz6sPfpi8eoF74oKFeSBKx3x",
  "key18": "5HvtbXdqr83zSftqcKBkRePFshb9YDAPdZk9ucys9TViKHF8PqB2GYDS1BRyXxxz7CPGcomHrpcj3X4wpYDjnXCJ",
  "key19": "PDqWH4fnxhMhCAtJyJYH73jwZTcmQmqeMKXupSz1qLv9CYg9YTuizP2MYD4mokYb5EEc2bhEkvPN5AE8pd4K5Up",
  "key20": "2ds4dawi1ZMxxC8a5CfP7846uLy5o8qy4kciPVT6NNL7pSp245Nm6vbHZq5iBE7fHwBPPbZdcmPdrduhiDT1dBgS",
  "key21": "5gf3LdHeMeqsykko36FpjEiQ7XbBoeqUEts1Hehkd1tqWJuw7Zw4wyZXoDW2xbSyUbe8jTgFQpmCZb8X4hgnPtwz",
  "key22": "2Mu2jpwjPEPdw1q5mHjQPW6tRC34ABYUHHvCobZhcv59JMNPy3XqWUbfsFLjDbVWAtiK1gtVRaw2e9sC3b9bnzWA",
  "key23": "a2R4b8XPGNrmtUx9NYPKRYkcXXVaTNW3GrZzZFVKNc1a2b1iTPCsz7uMGAGGqA7Enm2KvSv5efk4NTX2DrTZEtu",
  "key24": "2NmG1doQAUcP5HZXCKpeN1DKDsUPvkvt5fcNKNRjCqwfV5piK2NYhvX3AQZoAUrMGPPydfrtY1hBqrojL39a6LD2",
  "key25": "4n3ZfYoRGYWdwrZnFWFgpyskGKrpm5hRAtM7YsEnt9hFMJohQmPFe4givC6LJvxwoRAwdPELUKGErnfDtVarZEoN",
  "key26": "5yzJ689fehes8NtV6npMak6pyD1JKsjJ9W6XUrLQE8u8ZB7uVZqjhAZJPkUZHPws9cpZ4hWtP55kpGZEPi3y4VAr",
  "key27": "2FxaB7NBbPq3d2wCoqqCc1wiuTUk6a13Z3xJFw9KSTiye1JwqJKERj8CeXxt4UFya77F4BcF9m41hbAdxeA1knuP",
  "key28": "24ozfMQrHe23UhcriYGqsRkzHhQsh4R6AFF3NsZsxtqJwaiHPdduaBLuJCQBqTz47APeLEoMjDsjRKSUhzog9TuV"
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
