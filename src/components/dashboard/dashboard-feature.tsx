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
    "2SQ39e1dgRn7nf9NCDSNjdis8mFWXcym6uSm4xb7hJtdz58oqfvouBwAssdGJ3TB6ZH27p35cYnQrJ7YtADkx7CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w6CQnzxFDkoVD9utfSvtycz8DFsbXvP4x83nr5jyev3zBgrHbMNvp7ktizBprP5g9gShs7VWqLNXN1yrW8bjnpz",
  "key1": "2mp7fbYmpNLhW5r9JPAARiJ2cQYGA2gQvy2feuC7EnaiUjUS1UP5touW5FUHVcMBxC8B6X5oorUdBKhYxk3hvGY3",
  "key2": "36oxPnyhCVCWGDYCrxMPpL3dmQurLicn2vF9c5AvEKUeTbS6xS2LUSS2ocijxcC8RzfpNQKHjdXr4mgMt6ywgJo2",
  "key3": "v5AtSPQvo64EBqaQ7KNoYLcPkviEHvGftyEL19MGGbS1538GYkLadZUtuJpFAYtKSunGmt4ZLfoMeZWLrKeVjGx",
  "key4": "5vkkGG8NNbNjzDCVQNsbLqC34TcokcXNKruVoMnLjcgvRLXJFCfGULfPCdLoakh4QWF1883xsrHqFX1wFnDm8Lqb",
  "key5": "3teT7oSn4ConRwqLPTVmmRSWVrVhHuoaNJ5PyxcV8SkjeZvPZFuQxGCdozSDDQqTz2kb8zN8q1sRrJ9SHxWScUKJ",
  "key6": "46mf3uTY6h1uZ8mkXiaDR2tavzYb1oSgaap917kptRwyeBoddWkhEUnfTXc7YrAonvqQ61HJP5dH679Lu3bGcAYv",
  "key7": "4dyCZXY3FQYZnpUUqmpmD5N4GA6zkVfeQiEHfEbKs4QfNdTMAeihq6TxTPvq8TWrTNayrxFfBa2juwWK5DQB9HpV",
  "key8": "2SZ7Em7oKVidnRGsFSMApFARHBijb8VGJDKp4o7ZD1GFt6wsmZ3gN6yvKJ9qPVKwnVBSEjnFkJoqyjmUeT2qyh4m",
  "key9": "3Kv6tQQj1vvp3ewoTmEWHqnu16jodyT5Y7QnDv2m7hVU4dqmcSLt4QnA26Tr41h7pM745ViNEH5VFiqWbee423rp",
  "key10": "61urN46YTTNNVeQuFX3ccy1cD4WqW3BYYxKv85xCL9kPbVDL7fFJ6NHf4e3q572JgkoJ6Zkhqfmk5J7PJYcDX1Ct",
  "key11": "2btqqjmXA3efvmBGP6sMN21EprBG1GeWQyL6UFwVSyS8f9xdHqyjTYQfmTm1DxnWy3p93PFfgmFyeVeNik42sYsH",
  "key12": "2F7ecAe3PdysNBLj3fXqGZxkH3ksD7phLExwegWfE4QP5q7ZAd8fhdvLKtkUGbU3SWoWKT88tYBPUFDwVRxb7efP",
  "key13": "246RrL6Q3pBGjT4nBbFx69rw2xF8HJZffxyKGsXkuJc3CyqRMEakk5GRGHzVBt7iLUH7Qq8GHviHR7p5yzjyXeub",
  "key14": "2mAaLm7PoezhQa14Zdyetxzawy6XPcXMmt3nLGn7Yeev1afbsRbzcRoE9Jh9X2mGcW11LSSs3vjiF95PBS63pAPS",
  "key15": "4KAwEfquo1n7ghRtJM793xiho7HoT7CokYvv16d3ZVsPwKGG73YgvkY8rw5kEpf2cpYHhnGndx8pUPVYLWvuB3ST",
  "key16": "3CzCdfPEXYU7hdfDg39m8LhkbxLAfNyg74bpQgmN8vg79avxsCRvD3V9Mg4vHDSc13sxeip74Vdi7PLN1PLvT4d5",
  "key17": "62WDvzrdCAk4BdUbnKL4CYYedEuVjLFZLdSr4SFSaWf2Kw7PfKopBJmyh7UnL6Xp1KKjRhYmXyCjptSqky6SECbh",
  "key18": "2ZWPeh93dXEy5iH1WscnwAiWKfCkSiFCx7V63afu8Su8ARMPQP4cAk1TCRackt2jB5JP4Npn9Xa1kHdXPv9KywAp",
  "key19": "4UAqBSbmTnAcCNZPZSy51t4gNQ4o34NqQP5SjMB6tMhSjTDF9EcFsFuagBLjkhddKh7AVnTWsvXKcTwZHAxP6PNU",
  "key20": "4NPFpvb1623YBH5i5CLZyS93xdJwjf5grXM5bwM1ny2eqYiGZK5D3RLthoAu6ukiX6nan3Vun5dwPsU7r1HQT1Pp",
  "key21": "4NXQTF3o5xmYfECJKyMUShxg7h4mCnZ6w5GkfVDpufrGsgtkqT1jZBi8tGQBYHRENoL7u9arzACmZZp2jXSEkbgy",
  "key22": "8ZfNBKGcbF4Kzg4U8WRMvYkqsRw7RaW6Dxgz5FBTmPQ7FWBqpviGuqTdRLPk8VYwTEDvhBPe4CN8XYQCG83BphL",
  "key23": "4Vy86i6HvGFQa8PnkrV1TtZv4zHQDnMEy3kCFYtkftL93YWvkE5odt2cB4jqDvhiYUtE4xWsE6ATdUx1tcwBBmoD",
  "key24": "2BgSz56Fdu7yQSL6X7XZc4QAxUTN7Mx1WPwDhbMoMu4qKCHkht1ByLcsQukjYQ7jZic2fjrp6o1tUD4ruivADahq",
  "key25": "5qq6B8DZ9muxsuXGKRWSXEWySYHCQUPWQdrNZR1MFcUobAVaBLRgeYJ3p6P7xwza5Qq9vEvrnHDWM4SJBVDYeyZ9",
  "key26": "4tf34rtj6sk8J1itSSggCMXtKs5VHiFQgaQrrVfNeg4qkz1JEwZZNbnNxiQCCUFkFWcdTaxVgaV5fC4fK2z762sE"
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
