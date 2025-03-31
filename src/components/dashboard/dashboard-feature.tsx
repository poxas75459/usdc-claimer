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
    "4esfFYum3H1ikCdzwTUnm1mdKme8KdC5FKwUMdoBkjU8cwq3Mu5wCsvNCg1AMUHu3wci687VNjUmBjKwG8HFFG8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADzvWCNB9nHmKYhvcHmhvDBYJCPXq2QHPg7pHWLSyP3LQUrxwcL5dGHtGSVgqgbDqTVwze34xw59GqB5AKcvRgu",
  "key1": "RAthLac8692u1sKKSzdrE5fHk3cJcX5xsnegtauQd6bvdNss1efmhjKk6runVjwuyhzwhpggRft7ZBRQ4Xy4Sp1",
  "key2": "4gYMXxwyK8ZYvv6V8zxecVpY7xD6cxeFX6omutdMdboKRYHHmosbBQ9vsUfDuiiHToieB3nY8xPzdEYcQSUL4Cst",
  "key3": "3tz4JBYmQiREmw3joEYks2foM6mDGVkpKKkJWrwBz1XtTKC9XuyMg59ZeRmPZxTaErhaZqcBZAKEPnujKDdWSpbi",
  "key4": "3YFq3J6gtnBAzBfQZqr6ugHV8GY6JkW4jznZY4Q8Tyv4XbiQeLopYG8d5oNUdFPX11BAh92TShtgK5XbDyebP8Kx",
  "key5": "3JXX1yTNEX16tq79oCZAR2oPounzHEejjw3ymYAxcAFdaTgJKtp6uYPJuUHMHu5y52Aviz2C81E4Py78xrmdukFE",
  "key6": "24cfiebsnQZHEq6oif6PsBjjS6Lrsxt7XrtPfs2oBBC13HMRf9yLra9A695mZhVdqndEpbThpq4ZdWpw46HppV39",
  "key7": "59cpbMY5LFW6zpbeKD4ZCkBMZSodo2EP4aWi4XRsq3tpUdiqpbi3y8N6PnzPsaWPK5ERkrV8vF9Mz1U9WabWagHA",
  "key8": "3zFQxy3dqDJ2jPhAWMTs4zydSAkgXPGqG9M8eZz9FMBGSjf9Cbnyrgqfdg2T15RQ3A4wUvCXaVQbHTYcY4YmP47m",
  "key9": "3fberGUUsA9Rt9GUzRZKv5ckMCt62HTZqJqJbYLaoRYRcdr3zmRYQD42Bm3ZGG4bY6adzkfpxpVahiGhSyAAJ3ZP",
  "key10": "3j8SxVYvGmM472SoW8SFETkW49XAnh6VAoweR4LZTapZjfrW2fi52C2S9wHpGnKcremU7EBfKykGG1BtqGmNzpqo",
  "key11": "33yxverEP21Ty2aNqoXeNsq1XSwaRqHzATkMSRdrKk3FF2EfizDUMSBGGsFoSNx7xVFcx5SWn9EXJWxaiL1oDN2W",
  "key12": "5aniCE3q65hB7sKFW83sdjFe9WN4aAw7TdW5eHHncAK7v6KN4sj2FaeYJiXQtjBUTea9gy4KYh21Gtw3qGVUinfU",
  "key13": "4Q9bf7eVuEDiiWzeQszkENygtApEZzjiJen6n8LM2CxNicztBnLBBp7Kb73EBzcYkoRKNY1dmoHs45QStu1MBsWB",
  "key14": "5vqWM8f5EeMY59X6834pqWavLKFx6X2yKNuerQMitE88MwxapZxwTGceyb9Zi8FnBvN4Viupdo9fq47hsHw5tyrD",
  "key15": "3aMvWsvTE5zetTJw6GDh3Hh8u52b3ECAXqSJNj9WLHrKAGTL1gk7wxU3bjGtXpPXNX9wJCDhQwCfBh8a4NwA8jvR",
  "key16": "49TaXtaJo6FdZ8hgZAkGnDtuuj8VG6kVt4sXmxCLimGrtSyAv8WsyDRyx9oJtih2RoqEiz9qCuQPQGUDWJG8a9j9",
  "key17": "mTi31p9LXxK4m6ECEVb2ZhPx4YirXNjn8AU7d5kDkqkzVhNq113LWHaA8g7YMXwAaoANDdTkwrTT3QFN5KqmmkT",
  "key18": "2Rbohd6oSHKGSRx7oVwfJ3mvqUzHH4BrGeRmYtkL4UMHuA6UyRHNMFe1KBsvueYtp3C6sgASEmCwGtUwbi1xk8e3",
  "key19": "3d4Tg4Bz2DqjJeHLwya9xFVyHUDu1vdgTLBwZpQDJzC5smVmZK4C2PyBaj6B86TfYLVSVeYMPodG948JN1LJYq6o",
  "key20": "2c9LmD5zpjrTjfaCkypmeA4Y5bKoLnMz2UoapyMHVVdCg3gFqDFbKDh1LBrkXuhsYJMmC36M9mPNP3aoo4vBvtHM",
  "key21": "yeCS3uddaw9dPEwSDgksgfmKKLp2XRHZmsQvdyj2bVP3Kef8tjpU1TeNyRfmJ4fw35C8qKTVcTTZEeycGxsuQZS",
  "key22": "52GhYdkQKS5wvtmZrSQGPwaftM2Xr8gpmS4fzXB8ywx1tfDWSXmw2JsV7xz51UYuPRYAHppJMo1PbxppAjmfT3zv",
  "key23": "EYKmGXfB3z5zRF58CVWyptwXVgpNYm9N477AAvkTmar1okizF9V9E8Jw4Xa5MGUEqAmZ6AFrGq73KDoii6DjyVG",
  "key24": "23xBRi4vfzXs47u9p1yoPSbqZG4axe8BzmpLYEQpazKWb5Dhum5ufV9nvNHrmbbq4B5hBxUK55VdsK58GqExFX4y",
  "key25": "2GLSxaEYQxNGff1HaqtqeqVnH1mDZPeDordSXo7dTUZpVpvS7na5Z72PYq2h6Ki9C2gmes8UFutTJmHPFTRAGxUp",
  "key26": "2uMAPH2rVXcF3ncewMK7XptijPsVUK75LaVUepcztFrwBobYPegpQ4NkUyHha5HfEAc4d7GL3f3Jg8czEDko6mTv",
  "key27": "ozjAauvAKcQVzHu1EsUsFG2Mx9DFRdVEa8awH4UHf1K1knWVe1nNHRvrmjmP4CSjRhVpKKqQjtEkiprtWhFnLG5",
  "key28": "3L37qKigLEZMxpt55Kp1WDaFyCazktf236BzkLpT6DzfSCoeChwJ5U8TXdXzpdUDR8jVTQaKfAVcnoFHmphBypUq",
  "key29": "2KbxWwdcHX92oVqSUjG9eGGuTQ2B9xyL13vCxoPmXCEusGVkYm4HfKDZbsp5Vxfh6pwCekhK3YaizJUh7kcE6TwN",
  "key30": "255wk1pcGPFK8Yc3Cs8vWh47FQt5iuRXXKqNcTd5w7vVfJLpLCsVEFea6sSroSoaYEy27ExfcAv8UKwLnL28C7Dp",
  "key31": "5jvDYnuPmBqtKw3D2RVG9wCfwzXYG6oRoiZycdkJAZ8kpiNbMRhrFLwJsax1CU5saLqtzRhWgfaTXWZmgiZZXA1d",
  "key32": "DHmiQ58Kfu4JN8ZYtg91mwUf7ET94FBXVsrwRoZ1Z3SdJ6oSqaoJk8AGn5oeuWrER8NU8pDTiqyztrDynadgb8Z",
  "key33": "54qEZ1SdeGKvEXSYaXxgfmaqBK3BX5EnDDohnoRZiYvQQFtspHTYRi25PJquwPbB1vgKQiFTApKPZZf8QrYRqrXV",
  "key34": "xrMSkff92ASMDXTch7bttiB6FTcZyvBBvvoj5bzyWMafV14wFLSEG4x3vNZMx23aQG4GXuE5RubXpdf93eP9ZsR",
  "key35": "4ydZh9Th8PLmLopNzvAaNT6Fj4BSRyt5jnjiBjki7aDdMzbQqLi2zqEp7KUKNUbEjoYseHoaniceA6jsCbbSS8go",
  "key36": "35ooaAbu4buYtgJVujxGTmHWAsJr7UGeoTa9nzf248UyUF4umRJ9ejQx5NJGXJQR3W3FCRbXwJLh9X5WQkSWppyH",
  "key37": "2ZgWtWwKxBwdhB8ACYYze5aQ4tiYz2jjgpw2WkFvGptWoF6psdKXPth3Ud4jMcf1t9FnqfX5JXMo3PT1jHGsLyKa",
  "key38": "435fAatxidLQ4e9cEwagWJc4fi6DpHRSctfPACWfGHxJzcvM2ThVRakWfkUMUQYhNpzMJr4KFN4nKGiEnRALRGfZ"
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
