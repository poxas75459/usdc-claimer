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
    "622X3KNMmQqsfyZR3SWfUT1FFQh5YftpwJMZzxTkoLhuVARndAnwD5jm7MSdNfLjsKNZoadgNsnvKBhaJbcU2qNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z4sxD7672Jbu9HsdN3FJBRFWrq65tMg3ALPzYRkGHrxv49R8UhwS7ez6YvPeBPeNPajNvNEXwDmkPB9aXwq8dg7",
  "key1": "641mgtdQLtDo4dqYkWS16werscNwUw524dDodcgpX8HAqTBGdU1jf9Qy6Fw1W34spPjb4xTNuBedjyJnxhTTzeaN",
  "key2": "tq6Qu16chSkJnqePdZFrQJw7BrsV6UrcRijs4McAkrsfpkCCsdYzgapdcKTJvRpWQy2rmigTn3rkqHiGkxU4BDT",
  "key3": "5iSUDKBj4tEASzWZ4AiawA8rqR3rPC87qEPRfyJB7TYjjYQd5NtQBegJUzUFZ3y8VMnAjpeM4uSkFdBJeN9taLjm",
  "key4": "2A6XT76Y2z4rSYjrggPBFo1b3t977RLqicYKkfJH4mPVpPdp6zAdxmF8Cege2XKh2vXsmLVAvtAzU4FbpewgxdYT",
  "key5": "5np3qLVwpSp8b9jXQcqGotPcGDeHyqR6kBNGzPdMYtei52RjC8v4N2rAdCoqoQsSBHAPDZud4ewwAP9T2F3jBPQF",
  "key6": "3jZDq3SXJ6SyDvGYpndWW1o7T6YurAGEF8sNrTXUgkv9k7aHTJF31cMF1YB5PkSSB3DwTVgeRhy7ayWPPSvWnJuR",
  "key7": "28svWnkkdig9Dm7zFEtkfzCuWuLNJzHxY8X9xkdbXVVqQEGsALSTumncE1yp3H2PMpFqAMELcBrK62PNpakkKqGF",
  "key8": "63jVgaxu1J8EQoRNTgYaV2Y596qDia5xKxieQSLELYeH1hoB3xZ68pkQuHNj63bNdqaiiBhssj6TwH6XJb7Pfwau",
  "key9": "3Hp2Cpb9mbEN8kFvkuwRWLuGxqYjwW8jMw2JVxy7uVJVSCE5qLM4A5unoMsyW2CWDsdbvCfVuK3T8abajBdqF43z",
  "key10": "KT7yaYRdZq1JyiDEFrnfuJf5bHqMFBFbr8HfyzLCAWE8rwPtbgaX1837wae3LFYp4ckGtvqwF63RGwtdHz5M6iw",
  "key11": "2BqU9kEtXzponrzn69EinR7ungzLag29p6iqCtb15WZrPKbcP5c4q7xKZRRswftwU4BUcbCWbTGYxjN9nWm1aMBH",
  "key12": "5a2JrMY1gGDan1McWVJ3eNRAYBx4DAs5oRWci2c4ucMEu1A8A7xyeB7ChMRFeK3g8Z9yftFiGBFMXuRrtwA8hJ14",
  "key13": "3C1VoeyoytdbszEx1WTJ1VMhX9ggjTHMVw6PxsdFqEYUtG8QsRt3H8qeAS14MrDH1mj21SdLptHiA1Z8dz857kyN",
  "key14": "N7V4ZozKkPAyADNVDPj19xjBLAejgSCJ7onT77JvkM46U1XjWTxurcmqwjq3nWGGFCYPi3ZzSN3DUwxYVRErQzj",
  "key15": "5eMkjY7DFBXT4uKCjDUUWnKD1WmPzecEMztpFMmuoK3Gn57BsJ1389NaoqBNoxgYAcfHQJK85qsDSscteFzE86mR",
  "key16": "3TsnrCei2eX7QSRC89X7NMuEXuvR9VNj26Yj1g4sUhGftoQ4XTMTZT8fyacCtxaRrwxZtQ3xm2mdhVN5opd2T7Y4",
  "key17": "52LuXYTD9jWyZqZBNVYJrWbU2v4h5FoCRBRDoKBYVxv8qPU9Vti3eYivQG5FmoeYeDZ61YbPgaxaGgi4FeZiGqSS",
  "key18": "3udSJgwnpPnsdJZsiFPZDt7QEVnD6rEDufg1P9TfqcjEBNDsGA4cDjoSBYdkUnowo7cz1ZwkLjRMksheyawTdSag",
  "key19": "4K96HjE9A2gdZ3kN4qynF4NvAbKKGvpCD5BHvWqAspMbYae1ybaKZxZ3f44idK4dzKTaGReX7x78AKLgfQKqmSsQ",
  "key20": "RtD9yfyP4uCDAj8TgFkiNGqym6GkDmiVTnZXjCu5Hm3hJxuA1pVEtcYrWP2HZMPw3ikBof5ohdUBnLxgRNzkFDf",
  "key21": "4Z51eSkNxFWEKwyJQhetptoCrQs5pZG7D8G31eiDg8THSir1pNPf3q44widMKstgsLCELGQwWmRjZjHRxBzMQuf1",
  "key22": "5xwrFerf8weo9gv3D1U5FKPpu3cnFniocW4dgp6ZGFFRQMeNyEqjuA5vwd3iF45J6RrHyaNqPZ5ApYRCd9wsJ6zR",
  "key23": "5nrGART2EbVGgxkxV1nr5Qi1qiqKnYze8TGeCA2w8YkSuGsGG5jDNduxNjVStYhAzr5nH5R7ngDNxDp8ZxQtiSVk",
  "key24": "44GaGaz7HLYZUFkox4Mrr2LPbMEuzgbvekHE26o7hG69dw6DjS6CcFvkafjhSBxFSrEPjKMEJe2qvYpjCphQmRVP",
  "key25": "4y31SUwSABUdsGfyTwjpYhuXvQD8e9AUr1vnMyhLJUTu7nr7GxN4JKWjQFAwHkmLNPYqCABtNvUki5The8VbxeqM",
  "key26": "iUh7rZby3giYNoxCyQ6yKDbHPigz1G6aLx8xn2voKPnKz2wnLPMFr3u515qtuxjWCSu9her2QVQbXWAGNmWhU53",
  "key27": "2wsmQ48kNebp8UbKTRAJc2rmnVmHH8wBMgNQs6VPUjZKUidnc36pPPK8iAxVmzJ7WjdD8nv5s6HCjw1DhLq72HtZ",
  "key28": "4Ey6Fj22rW98SwcnctVqqiZmRBjpb3ShRcFb5FVGfiFsCXhoPYLtyjB5jv44w2ibP1t5CZAd5wBeaBAj3QuckMs7",
  "key29": "2LJkSswGMuB3zEsUHpthadn5YgFdRg6ajQg1LESJKCpueCzh5Wp7h5SDmdkimnfB9Pv9JjVFQ7K3sRvcxom4qx2K",
  "key30": "5X7YRmhnDpSFVBxoZnQ6mRnQuvfaMUzeeUfS74PeYBe9RzzXpN8oBvWxrjQjJuCpQTDRh7CxRzUT2o2mKLym3eJr",
  "key31": "4VgmjKxJgGgHvwQzGDRHfBPtQpRKK48FbTgfqQ4E5ds8skkazY1yrZiTWHqn6rhyGEou8HZ4zbfh9vPGHBiJETH6",
  "key32": "zd6r1jsYLBwH2b4QAQhDkftULBF6rk6KqNep7ixMyA3QKrw2ou8frdDy8ctpFx9BQT2jDqtH7m7FZ75v83664j7",
  "key33": "39Vr31b6SSRXw1CYCyQF7xzSixnxhZreKNY3wEFhhTnrEGkFq2uFVzEDFe7vDS6AeJAjk4CZVHEZ7s2jHKvXvwPp",
  "key34": "2uVm5eL9ENa2CQhLBwzrSJVXZhESEkhTeyvg9rJpZrR982ZTCPi7rq8kktUGVGNYhUemLyHwvLpKHL8oLahCbCYn"
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
