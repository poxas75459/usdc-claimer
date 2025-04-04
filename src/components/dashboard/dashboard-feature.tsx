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
    "3yuJ24KEMKcPakMqo84ZdWseNEvaDMKpsV82gJ2wTHGZQD6Z4vy7jZfBMq9QpVU99WJG7jGTLr56WhwH3FaonypE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVxHqNkF1YaD4m2sLL4eo6zrQHt19upe6vktETtR4ghqYn9GH266m7chRGjBRNvrEfi7oEiAjBevJXYsr2M7zZ5",
  "key1": "doNdZKVpuC7h9ed8GCC7pjsufFseyLEnC7DC3gqpqrbGRwCj9xiJLMe54mzASJy5s6SdhydKdxLka48FsHjWRzC",
  "key2": "3HVBRB9NzGXjE67SEAspD36EmsrRbzP4i489sWNH26sxNwtbhTUx2gziQ2Q1RRvLUGQJ1SKrZkJWvRJNzb89rn5Q",
  "key3": "5qZzs3v3NPho8CEAwuZ9aCVM11qDkWQGB4arT1fscmvJyqzBto5EsWoUUGTyZCTLAborTi6QdPpy2jzjYUcv7FFS",
  "key4": "j7oXsZc52JAjcFh6Tt1tbMCvsu6kxaHPL2YzwYDYWdrsQHygib75qHPB947XV1WFxgDdxLTcuk4MwKjjzR5eDbz",
  "key5": "2ZtN2FFic2DzaqxFdAjxhnEiD1Mt6hi9ByH7ruQdVvPhkinE1YQXq32Awv4kqbiGhUWxQWioUjoXnBf1RVv2qXJ8",
  "key6": "36NmyTVefmBoBAsRiaZpzHFioyfhb8S3oiTT545mwzuD6RcPdwgnpUp5GeDZLtXmCUGqTq3NHR2SWKVEUXKdjs1a",
  "key7": "5hiUzsB4YVYQd3k54TNhf1pH949xipS5wscGuFDjCoDCBKo6TpQwA7Du57RJGahPU8RxsVfUkrz8SGxa1WhWDB2X",
  "key8": "2Wche93fUp2kLbS5AEqNhWevvzGFqpWWtDYn2xerhVictdwPMnHbMD3E71L3zFWp7MuYzoUocGrLejMphFDD6gPE",
  "key9": "443XucX89J8VwiaTRigHJ2J6AhAoqZ7ziVpxzagSGfRvL5iAbhzsDDXx8j83ZSb2d9g1PQAwZER2McX7cGRvUGYp",
  "key10": "5EvQ9pSFAUQ1sziLb8pGbQttcoenU15UEr6ndoo1xzdyEg9D5JfEJDEZseDXsaxGbTXhLsAP6jGY9DLuV1LMwtpQ",
  "key11": "rdiQNZy5YfnVdX5KdR1V5drsPAjWkc1nBKun1gyMnfz8hHP4wXi5aZ8P21vBZEhi8oEGAgb9tcVftiFNseNswsw",
  "key12": "2XsWjYHPzCtxYzN6kLWCn5zKuaxGndagSXiA7o8749cDys9YUhheFLMmhhXbZL3KDjpziuUX1USZ1v1T3GNKfbCd",
  "key13": "4UiowXN3gpcpLffjRHVbVNrtJVEQWNSGd7cxq4nF8ubQC4vsiacYuQbpHBhaxXL75Y9KPSBAk9qZ5TZAr7DPQsZm",
  "key14": "5iaknRkyGitfMir7pyJntaoYAvrB967AqpXEenf68nmjCUdiSt9KAWvrL7Hzb3kpakNPHXbRZQnDvC2e6Umvg1tQ",
  "key15": "2dpktiwes3nRYftbHndu97BYKVm3pznH3BRteySxWuGs6b8aa41TPatqciANWAZ2ZE287Ep5rnfjXZxE8PTLkWXx",
  "key16": "461p3HXw2Hhipj7epTjGZ4ccHznaVXa7eypuWoGdS8zCS4VSLYwv11JXhoih8msR4DyJcLrdQT4FyKvj6pRRzxbG",
  "key17": "2wBof69BCvh29X5Fi5C8ym9kpAZrQG62KxTWKrCW8gkWYkePxKtw9anwCpGjxyuGheCvCnMsHRf9TYpppTuyH5rQ",
  "key18": "5RzhcFUhQAMyi6Vwo9vVUwhouAq4GLzMQMnd9kDB4AGnjR3RL8JAY6WAeAsKyv432TPszuHE2TQnL6FoezYEXdSj",
  "key19": "3iV4tbhXXKddoHdwGfT1A3EEweGqCMREu4i3x1ReemsVNPtTNbGjxSGeiahEcb3MunW3LJeztGyDWS88tcMuDL9p",
  "key20": "rHf4soQSgQNMSKeomAa1cbhJEA3AfzZ8wGZ7cWyRFW2P679FeytCqXwBGsbmdUW7BxhF4dei5AsH7Ah9tnhsnnH",
  "key21": "NTdNpADSZ4gGKgHySUyWjPN1Pnhy4U8qWqwFrWTX1b4rLLSUvKizuT2WauAqkjmbahDnV469eNn3mytg5uCVqH2",
  "key22": "5EVMa39kpHKY49cq11d9CMrhQPVxFbxD8GuxZNwf5SgaAbxh17K6HM4NLA16xPEuqqKuKsnd3zeUeMZJp66Jfebw",
  "key23": "4sbaGPSh1wMv8LfsDpQYyr5MzZzRgPga1SkLX6ojMMG38Qdbae3ow9sCSrC6VPabWj8B4dr3wuVpVnMRAPHbGxF7",
  "key24": "2K73gh5DiymhNmWyTPaqfAbZN5tRweaiCyY29i3a7kARPoufgLqKh1hYfyy8edGzBbzJZEn6HR2Qpe7aa3vgG2DP",
  "key25": "4p7pe3BaDqjuvSbntQzuQ3862WPPgpJkbcTgVqm3o9QCyFg1yhCEo9rGFsGaZeYUUmQNwn6h3CDffsnERdyaDRtX",
  "key26": "5Vug7XKPowNTYiMnWjkQQfAgGXwrT9QeYMsCQWrBjVrTqfrcQP8ZS9i885rS68mZnUSRn674ecNakSorgPPju5w6",
  "key27": "4wFyVG8sovwewhr5Zk9teEpHsJocMKAcDxECFknbu5ym5CQf2bzN1augKR1k2cJd8PwB82csggULgQsVrxDPtUh9",
  "key28": "Jn9bTq13P7YdhoRRcBLzAsGrrHd3McvxuZXXFarwE3t3oDFGocWCMBKxtbunoUzivLaDjyyMLKbjUNVoe8e8yT9",
  "key29": "3xspKA4y53FBLdMPE6rUYB7PEFqEWwHesegnHhpcKs5sodyUj9SuSxDcZRQTmwnZsbkmfYHYqHfRipxZBsfAEoBG",
  "key30": "3guskTHL2MRFZUAzmJvJst7VJio41dwCoZ2d4oiQ8DaoCEZocTEkcn24z1qUx8dx3YFs9YWsnRcSEt1wtn81Q8yr",
  "key31": "2AW4cq1CaQmG69c3fobfkf1gPn8mjCHBC8wrMiWXNLeb8drvpQVN8ZR5CbsSdLQk5TVqoe3mYv2KvVPuNv1nwa7L",
  "key32": "4B9zguoU1yJocrStzwEXGHMd2URJqXYZLmtbiAtqR3ZWNcdVNfpDCbU7L2os9iKMHSH4MFf7d6ZQbPUGaBnxK5ff",
  "key33": "MZSEh6BHY3TuQ9yibopko5HmiJEgSNoFK4B76VLtoiXKJw5jwyGMJdHYoauCJvgiqT78zmo3Y9e2KEiih6Sgftf",
  "key34": "5RyrRzopuWhQZ4FzzQ4dcUzKyZfM5ScrkZDW17JeVTLZstHheMViJjrrrHwRr7x9cm2M35P72T6Wt9za2QsJ89xA",
  "key35": "eTYB8rMLWmDRuWMjngGsYVQJy5Za8Roku3LDXvYJsBpozJEcfgoFCZx5cmfiQe3MbD2vzMxoHDWnkV5Db1LQJ9d",
  "key36": "GSTTX1cQiyDuD7NPLm4i7icyoNHHqvCzkQTjizPmu8tWoCap1JQUEpDPgZqufgs6hBV4oMDJtjPEWU7rotWwt3h",
  "key37": "3kTtXuokpsLrFHVic3dqmykRTS4r3Z1uU2Sn4qhot4f9D5Qtb7mDPpALjWvTHQaE1mCAwdzwBqNddkQkq1rFXgz",
  "key38": "4XYAod2qj3UerG4v7usPSMKy2DxZK2kHoGAqCkAxx5H3aPqA5iYZRyz4ZLNXchpA5JbXFGp98qfa8JCPBaJAZZJm",
  "key39": "2NvgReKm5aEjqM2MEti1Rp3HnKTv6ALMVL5D23VENffrd3S3QRWGxh4Ds8jCwASpoHy8eT9ZE6SnPWesVXZyCdZf"
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
