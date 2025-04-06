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
    "iHaEr9fKedjwPdsAWRBXpTnBppCmgefCSpWD1siUphBfCR5P7LH3PTTRzgYw6UeUwuF5iCmkght1Dq5DMJ82R2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YexwfHoNshZ1DzXoqEZCTQnuSZvPDAQhkmMvMwqPudSf6dER6Hk5ExhJ5Bg5JivWFoZQVwp9SpYvAuba3S4hy3E",
  "key1": "55hrKHrgD8CJg2cUY3LMNUgHrfU6AmwjKkRbp3BU8AuoLU6rhub5H23gXEtasT64Dx3ZJEQ8vjsooNkLT5RwKrXG",
  "key2": "3MoY6cRMVUhRhwfXe4MJCDL9KhrfFbRADtuiZ1dH95GCKxruJPa96E5tdWQcrHeZoCNqGU8L2Mq9CyMny2C75yWR",
  "key3": "3mm5gLGQCi8D2Ps644baC4wMwwCHjhnWPKwLiWGWxngaUfPBPzsWDLUEqUKKfZUyK3tpJMLJBZLMguzwob9ccdGi",
  "key4": "Nz6Sb3PRdvWFCBUSrv2JgnzEbaCo5r5jCd1KR5FsX5P22jQpsjbHctSM8MaqCEEWCu3fnRRGU5Mys7kagci9c3G",
  "key5": "3thSmhjyurwXE5RB1S3mWsNq5xpVmXGqfFDmDjhSvfyW9XurHFoK8azSatPCGzo2r2jEyRwXVhiGFj3JoJWJbPLB",
  "key6": "4pvD5ZhBwnv8NVif5c5vdHcDu5Lwk5fRuFuqBG3xvUuZNNhy7ZAZqnsP8zDzyZxSFMNJEFRWjeg3Qrca8DzRsfgC",
  "key7": "2wVBWMA2PmZMR1aHEGu6TSzp6PMEtDDSnE9tbfDjrqaXSrdsYTEmZxkXoGM3oedXn9WyYWxvvt2TWYy5V7ahved",
  "key8": "5eo2Jkc7KXme4tmMszq24wQhaaFbbp8eXgWT2osnkj2pCAV3xD3CvR54tCPUdFCmkerZdEM7BUNuSgcWBDACubwQ",
  "key9": "3VH7GmABYpKXKy5dVfEbJ99z4ZysmQBSfEpzLkm9Ceuf2bQ8JX2hStX4s3CGx1u6nUgLqfPk5hQrmVNC43GbCYhw",
  "key10": "3g14dyJEFdWY9LGm4mGvRsEBSViVZJZLLUY8Gkh5qbN2NuMx31FuhzC11Txo2NaJpLEpPD8PtimmEzm4mwmfbMAB",
  "key11": "3uWCMtSSf2nUambu3o5E2ppSEME8jSUQLSJSVMvxQELy3CKnu2t5tutrk6Ew9HkmbUBMMdsX6fQL8BVWJqeUTpNc",
  "key12": "yubc2ZwcJ4iQihQiFVqpWVVSoscXwvsVhsBBnzXLLHjWkFvdyLgzrwcT1yiVCwe8fP3vJs9pmDLQxudHxEgAtrc",
  "key13": "4Z6wNcPtsaNC8PWp7xEHX8eM4fu4SHwEvRm25w8bg2cpy6ykbBFsTL5kiox2zhZL3xCfegaKAAc6LdfNMNnqjavM",
  "key14": "5vF9WD2Wvnv9prqB1uV6qUSf5KqCWJrVuZawymKk3wvEe3yUXX19TtmNKDkDW5G2LtjT27DafVSmaNmtVvHsqXi4",
  "key15": "rxuWaLWnVp8ECSTfVRFC6DYWcsYimNvVtwP7X6V7MAtSFSykgzUNMWDqv75C9omh3wLy2J72PgURvRPy5tivYb9",
  "key16": "5K8rHVeZ6oCh7oZb5hQuF6aZmn9PnVXXitQnwZF52QvhQMjGGezRNkSqbSumkCSEccnkJq1FUmqVniwszB3VcFGC",
  "key17": "2Df9hgLQjKJ1UQot6DpCKDsY8N5vn1Cjgu9A73NZ97xesjb7HaAEt98PHpkGS1EGjheXArcrk9FJYcQJRMMdrir5",
  "key18": "5Zmvu9A9AxfRzPR5KLmibV1qu7a5cyi5yEyWeMpGy6WAJr5x4gxEAHVVEY9Mgb472ydmh5AvTiWxHG8KJ6Ts34tN",
  "key19": "2cTn6BCne2U8qGfbzFX1RP3qkviaYaxvYn5T23x7CZiaw4Psh1GfgsZTAcMhTaXTxr2e31wGpW5XWF1pTKMWT6NQ",
  "key20": "SPmw8Phh8dq4QSgykfh3KpA8pm5KyHhCfhmdsSDDPRGAKhyJEUBTgXHmoQHrW7XkwacQkFVa7WTcfKo78UgyNA5",
  "key21": "5a4aLKJR6wT2ENpt8z5gKokgSL59HRuXxH1jFr8JN4mMbCxQZUb5nWeMNzfg5uSw2i36woakTBZwtgKVebjmCVjr",
  "key22": "5LtqZfFxTZdU1Ek5ZwFTp9fAPtu6C2wUJ8J8X9NB4LLJzheQg1UxgMvFbp5yStcRwXNi5UsDKDMoSQiJ5s7SY7ss",
  "key23": "5iVFfALE7w1jQMn7ag8kxWjke9uCQhtFszsVxhGeWoPwSp5vNd3PWkYamgXFtHmCsgHKiL6oXjthRnzFrmQtWbQX",
  "key24": "4dPSAHie5u5up1moxuXmM6Jd4M3kbii3tweyTe2gBcmYE3wKJc5uUCrqC6HfZEYy46Pma2a8Xn7KvnnsfT1VzBoC"
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
