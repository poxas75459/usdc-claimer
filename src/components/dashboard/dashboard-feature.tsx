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
    "2DdaFU7YgsBVKYRuqR8KFsnzDmpQ9MQf6G8D2X2jkhqqCNQfvbT9u2whck4hXtfbqJZ5FWzwUd4QDYpSyvEaU79o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N16DMnA7wzFJiRZ7MiwTgH9xoRW7KXWWPivPSPpMFuVhFwTF7FEhB22t9ubqFJR7v2sx9vJxDbb4Z8yHiesvbd1",
  "key1": "i4RAstnaLzZYUKEa1sEMcy8W1SkVN9T1QwjJuNGyZDG4m7EkVE3aqFdHfW6gwVEKVQ6RcLRQJmaPf55teE8p6fH",
  "key2": "KBV5Nu6swb9L99a6BbrK35G2W4q8Hxk8wrt5y8ByThZviNxMJZdTfC5LZX8wzYJouGR6oojGw54UZfnQWYioLQ1",
  "key3": "4Yyz4LwSFfwddwhV9VJq75PxK9NUJ16AUsAXCQS8UZTf23BoJEzMF4PcGD1b7vZyHj8hqotMSMfSo2efcaZkdpK6",
  "key4": "5eDuTETpTDwB541NE8msShbcsT1FU6mT3ZRUdR26fnjhKQVEZwdXt1PtcFZsRfYsnjN7ubNAazKc32ENp7E1CvRu",
  "key5": "2TveFUnXAvJcg5Vzhy15SU8V9emCbQicYqJLWKLczkfTRpQvpqWdu6DaGESDhpU1L2ifXNdNaoCB3LTEXTgQRE45",
  "key6": "pn697Qt2AaTEkTAHoPGNDGEK3WfBxTGBHN7LTSCu2bNTmpfUGA4415AEe6pPEgQBrTk37SrDeTNXJDut3bW8Yc5",
  "key7": "4CyanGPiq5ti44mySucwXXgiJJv35TrrTREdC9z1GH8RS2UrqBwdP8TJtPrvTiYTUzkP7Fb6dR2tDj3CgE4TiewW",
  "key8": "56ivZ3ZjYWY6bRQU8bwUShmgFyY7GndeHYa5Qmeay9MjaUHFnPFWHdnCf9rKt8eXCRdm6Ja6yKas3pebf2NuNj2M",
  "key9": "4gGfwq6YVBN2AW7fBLD2Q4YrqYQR8xZWJYX3H43yUhoKHaqhqrvhYDdhXET4mF5Xk3xsUtPH6JFEefCCLtieTZmZ",
  "key10": "26Z97DtJdoCPAnKaW8P9vkriAHRU77YKXZ1wMVnpWg7LFyJr5BSxwCseihCHBgh3pDnER5RyKqz4ECipeZJDYs6g",
  "key11": "5hjbhBc1Q6itozQzrgKqmbxa4MtjQnKFErSRne8VRMgu9Zywqy2fYuTgV1LUPdH3QC2Nr9zC8FJT9wYEquHXQATy",
  "key12": "4MPKcuydBk9FKA913YcjQikZgfbzFQNGM6xYGudv7Ln3V62isnCjBjsKdBnckCNyYPnWtiKTVEDBh7579dXRnEs5",
  "key13": "3WZ2KSifoRoG2F5tDnFqGxoM5kaLESCztUmEfHaqWcb2sPCKsmByC9yBrF9QTLzSf1XEbxmNj4J9WxESURhg9RWk",
  "key14": "C4qMkRAXfdgxznvcJbo64LeeZQw2M86CtuEEb69yV3soGBzGbcgtESSajQSQ9xNe7TibFnq9Bz5fjdM1HwZQHei",
  "key15": "5jTsnaWLj2s6fnaP58fcrtnCmCb9Xz81VmyZeApULc25ywWFwP7iiHFrTmurQKnYfkbj5tvfmYkPZtgSSJEr4us1",
  "key16": "4At7oYUjzdUNCktjw3goK7T1vfnEfa9Y9YQgSTQuqDfBi6d88agEBNDESLPdSLTJxnDS9XYVo4K9Trbm4uW1nD8W",
  "key17": "2M8VcNeCZdKqDNR8GdGhLDkfNzguSfLJLEZfPUbjBGRH1bmdjQGQw3qFLdn6WTdWmQZ9AUyU6P1Hp8P88LeEtW2w",
  "key18": "4MKSN1nm4A6WWbzxpur5FuVMsaCGNtsr9V7gkXoT2D5kXsRBg353UmSEUJrKY79Ah33gY43ajpEGz7VttELEaSFw",
  "key19": "3YCFW5u6HwqbK1MSaQNNNytWeSDcFzMe3wv5upjp5guvohkxpUnzykcQabAdE3PCaBBfmJRx6WmoogLEWafQ7pjZ",
  "key20": "2H5Npq1pWWgy91E6Qz44VCVuBhuWUdxTyg3BRCU47crGYVH3JF9dTppAJW5kUs8vZrVrNbsQSD7e8W5BLrnBMsQa",
  "key21": "31bRKzu818xjHFYzjN5ufb7yxjTCFDTDCf7aPz6janrkFxhvhmyioRzfiWs4BJB1bnFtZEMcQsppYuSsWX3qPHW9",
  "key22": "5582Lu4riktM12fM2t2GxnRJnWyo2LZN3EFYj14iCU3PjPqPt63MuJAvnFSpxAFwyT85E1rS2iXvA8UzqYAdkfwr",
  "key23": "3eEEwRB6pS39Bkx7z1SXxrcvBoUFXz81Zo21oFWV2SHzLhsRwLK9uBzaEW8v8mqiqsp5yFKVm8KrwwTQTiZbkHJQ",
  "key24": "2tC8yM8Q3aZXvfuZNKiodsUhvhUiS4Et9GwAXsAxZnFsSbE7qqdxBjzLK6sSKBnBirEuxhG98kvu4ndp5qGn344y",
  "key25": "33aTZmhqQhvpuFkxEFB4EFwZC6qB4DoorugkFrUkSPK1fxrt3GfdRU3Ah8EfmfKaTh8vzy8ZF9RNhttBPvpbWqnE",
  "key26": "4xzctZUyzhLnLafp5byk14DRzozh1s1XFYRtoSSbndnyjJq8kTCdQmqAZnq9u6i9ZSFzh4qkDspA3nJHKAoxSd2J",
  "key27": "2HPBVyRTVNgNVkFy6ERjmN8kp5Fj5znbcTWYgwudwdqBk52UcTeiTUw5jo3zwbsXLMcfht45SL3fYgmD7ZiQc69x",
  "key28": "2YnRKdPyHEmYNEsntzrrQK8xnT1d37jxxXumx5j4dQCvZsvSng2LPuSeRvUgDc6tadxeeCyS8jR5gXiGB15Uo16J",
  "key29": "4DnRAh8Tw3SpTEr81ffjnfKpbyZPxbPaUTJTKFm74NtFp4eMgEHUyRjFv6fgqZXMVmPixvhtoviAKtNYWMbu3n4j",
  "key30": "3rT8DfKu6sCDQXVsig66uQnhUZ5W63125ujdvu3mLu8sfM2souTFtbN5kCZe1biV3U8JsSmdYMtcv3ZzvqjLfWZU",
  "key31": "4Dqr6uS9iMd5SVGYfrBqYYq2hScYRNfRMy1JWenHUMUgbqXG1oR2Nz6YfjN8AYPxkkXzEC2hdcoqkVpDQ4jsLazX",
  "key32": "2K6gzK1wVQ3sh1QyiW1VRfXYBRVF7N6TJVEUu5d49pYq7QtxJxeWQKJ2nNvRhuxx7fpuz4WokEqGC5zL5PHKtmQY",
  "key33": "3r2i41a7NeTV8EcGxT1547SAbsP7KLZbjjNT1is3czEgX46wpDAUuGV4ah3eDr9gvYkAUMd7AKDevWzWH52vuiZb",
  "key34": "4mHrKdp5nZSM8gJf9bpHqw5JfQLu9g1swLkCWGacCnPFNmAxUMmRGBYiGfcPz76uUiw1w9CcxL6RPhZ39bTVWin9",
  "key35": "4ow8Ch1PZXTCNDszzta2qtGdUaNGtTAop7QCxXF7UnqpN6SVisHSdJLKGa6XigoE7LtfaotYpskRNJ6BEUe7R5df",
  "key36": "3N4FRMsZFqRtaJjU4YvN7gAJiHvuuECdbYMUtQhMTnu9h6gLTfwTzc8RJP8Je9rHWaCCFuHCeXiZ493E8yu5k6oA",
  "key37": "36Ue2AFiGFjFzdNs4hiLrKPdz3zyKtHBbw7MdyMwQfwaKandQvS2iUZQWftHMVCpAHxGMsHziHDe1F1RUsGUSXeQ"
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
