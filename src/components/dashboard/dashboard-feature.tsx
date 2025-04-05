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
    "6BLmFXaUDQMixe8h62vMyAdZZpk7wo2ad1RXanWouVbuyU8HfEkENviur5FbjhDZygdEcBJoday9fjpComT5jRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VX3mRV9eKAy4PsWLGAZQ7KGggZKJEk8xAoGgr5T5UNvcHxELqLAdKJ9oeKcwsfyRcSeUKZ7mxYEWTay9Fqmx11L",
  "key1": "2fTnaXCvqd5eE8XkkUQ43fFnYFsoue4kwwiXUzfx8GNx61B4tnTHESjvmdykWrrTkNVutjQCv6pkGeg5hUzbg2Pt",
  "key2": "67RwcrkZhiZqU6DtwxBYPprC4YW7qQKMye5ULM8CCJbZA2qbYXfKwy9PCBLXevxgeadaKUixqSSZFWPtvRCygisx",
  "key3": "3TydTDvEW2Xx4rmdPNDVTY8FqVBMgER81VcUvUitXPgqBYBCFctPcHbm9KRTEma5yTbiAaUX4eZgBFTTW9jqarst",
  "key4": "2UbzU6aD6gVdeEDUWVbLvA7fyc3Dcc9D4AyQhqFxKFXEK39Qkpg6hSsERxufQcStbqAZpV6hfQHxXyhdCjZcviYj",
  "key5": "yKMZE5R9Jp54qMW3itZjsKQZ3qe9Yodq32bnP85226Aqb2xba6iPDAkmPC4b6HADKKfTbvuhuRiuNaKdmiR6JJg",
  "key6": "3o3R3yQNwRSL6DU8e9aiWHqCZAgmLntx21XAyhw5NjPiwKvgFcT2jgtMaxqc8o2UejvZ27dV2yCtPWZHapdG4nBP",
  "key7": "62YV8LwL3nM9FLxrdtNV72TNpsA46FuxWiyjL6mvb5ctxJmCpwiaGdjKU77m3AVUiZuc98FA3SmuvThH5A553KCj",
  "key8": "4tqmTWUUHTG1xiLh1dLv9x8KhoiFM1qTQHaPR8NSuWSrJSxn25u6pn956TLbx23qRudZKzhzo569bMbJiaZpDpjY",
  "key9": "2w4cr1Y6AkZdYERNmjS7zkJaQdcBhks9x1wwfcpd9pyt1wC7wTcNxSv3T8jLoWE5dm3eNJ5tAxFJE8hMwHA7BP8u",
  "key10": "62RFHGwRrk3V947h3u1a49x3BT7RjUHrmvFH2A7gTpukrD8coFBVrmYx5wymnjfo5DPTeEa5huKgqAZ9mR31Wu8s",
  "key11": "55oZ1zy1wzS7mEGkQ9yJ63aW2vSB6YTiq9kdjrB4dP8vBmRNwsULPzEiG1tCPB8qxcb4gyWanWkQd6Div7LfZP5N",
  "key12": "452EHTL6smNFtZaCzgCHqJp2sSMuitmyvURcZjHoakyhjZW6R7MqjSD3HK3aFJutLcRUTmp8mwN2V87JUb1pVf5m",
  "key13": "DxQ5ourUtKh3h9btpTU4dt1hHyMoLs2EeAcwqeJiBABdWNPcWAckmfXxRzxVoC6d4SzxqUHczz9Zb4RypCbYHNb",
  "key14": "hKhgXyLAt3ot3cFAoMkCH7bT73PEoU12UyTgC5UAPndXPvRwiEUwxRwuArKNx6fqDLotmU1Lo1tT9b1X3iwDPmf",
  "key15": "5aXyBHz7CL5wtFhZzxhXBx8MaoVUNZJvPxPFi9ppY8hF5Gxx3gfiMcfw6JkJY8zabBwxtA3HpLLPS8Mq3cBdefQK",
  "key16": "29UfuckN1esM4iaVV6gWmUqmz642boSfUrQfKp2zUrDQXntkdvVxVf41GiKe2rR5ZZFL4gQbR3cQ21PpwxuM41Gv",
  "key17": "5gSHTTjdWZq7AUjHFk7zgnt49X42nk1SbmG15bx6Rdbn8DuuJzpwD7yrb4ZC3jk76568AN6mAk2V5eDpyJmzcF2U",
  "key18": "3LrSRbXjp8PUzWEcZxeh54hTp3vhqUfgzVc7Zus7pUQbKG4XNf1BL4MSzwxXJFkWXdsvc5pcHa9KFNxGYFx7PJ7Y",
  "key19": "5B9mDb91CS1UrEFdxvvtswQmygii2TbCnHzRiNEKKguS3uzHup7FzvwXhsfjQSMSefzzVDqCXbKeMLttM4UxbUMY",
  "key20": "2uGiy1xe3hLJMVZ8YtnpF5ceUbsmaN3qTRyu3GfyrtEC1ttHk5YkMjucagQs7mCUgPi9rTQvGu8XKdGLGnHwTjXE",
  "key21": "48gkdaoUpu6hgLDJr7hoLcLbgF39bSy5Jsb4SGw5zFiv6p3fMTytfWvoJc2rJW8aeiUDLkiPu1KtfoA22kDsTf6m",
  "key22": "gsNztBbdoV3FbWxw4suN29ddXGP8g8naVXGWmqTq3zs6fbC7VENGuFErWnTWnysHvTjJCzfAD8tzdi6MdGtWT7J",
  "key23": "5qghskiKscHSt7tCohcH7dHSKSqNC61p1PeCuPNe9kH3bZV74SCoefw8F78T1ucSHnHS1NWPx9m85grZUuzYVcVf",
  "key24": "zS8ew8Q2TPi92PVppi2vgL1AmeAQNgY1XZ5NBhbPvxXAKYFuqbD3UFpwdyG1KnHjqFSARwY4PYhfp2GRcXNi8AS",
  "key25": "j9f2LyzsYXURkmzi2hCQFTW8CiYaKRqgzdBJaHRGkgVi3axjhPy8neRha6qVoLWXf4kHb3EGLGKb1n7aqikNQ8a",
  "key26": "2DPi1WJ4MAkNS7z8GuGZGBwt9qQXUyBvGaEjNhCkd6chrNeu498HvfmbMX1VdHAjUkEu5o6tnq3o5T1Krb6pr234",
  "key27": "3LcYBU6SJ5YoKnVUDsRVzasnJx2UWpcVtpNEXQdx3DLQ4UkAAzt8BGAGKosQiWt7vm8owub3EP5hjTYmjc58oS43",
  "key28": "bVHXpybipefx9CMcHvmi1rmLFJw9JSD8fUL3JKwFeopxTiKeeCfSxK6WbuKT27XpZAM5v9Tbas6nPRBAs4JdH5q",
  "key29": "34NsaZWhAnogLceuWEaHCdCHJH5ZJbmS9aCJ3zwMN4dK9QYbhEtVCCzfogkcyv1TAf6vwm2qJSYm6Hvbne9Sinbc",
  "key30": "4cyCuRw4q4QvH7N71Ay24FRzqpF9R1fKqGu8Rk3Frx7ZMb1KPefY47iUFJjKCARZS3XGuoktLYD63Tug3x3SNYWp",
  "key31": "sgbhVT3MAhzVDC86NVci2kKaXNbiwAPtMrudB96sLmUmaUYEXtpRXxrBechA4ch8xMG7WZUUUeaXSoCvFbLEYii",
  "key32": "3LPejqthsJYFA2ngF4kfGqLmueQb3USB1GdFGi4Eoumathj1LApcwR2bndHDzdhzkJRLSmmMjfK1bM8uBRUTQ8o4",
  "key33": "5CZeEFa1tGPBBvxjAMHfNk5RZWpAyfg6G3qQsWFme9THJ8sqVdX1H591Ztrnyuc3qzCfCYKYNHps2hMooAKcfryG"
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
