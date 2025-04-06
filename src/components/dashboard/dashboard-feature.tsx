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
    "57saS31ni2WtmByJWGqMuR6YZd1xAS4u4jvXD9sYEA2senN5fSS1xCKsgwnmLQt4otP5TLU1kx4eUdqdqri9oNDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ah9ZxXvXptji1YCCqBkoZ6dzgUrnq4vMuVhyNNaMhA4ACNdGAniEJtWkTGVexBwstDgAm3iUR1cqc22E5NKmx2",
  "key1": "2dpmLx79Tde4h3ZgreqqeVuShqBDS3F7Uj7bysbjceBXMsHs8aGsFnhsVJuXvhBHj7eJSkpi3yH3z6ryE4Kxjjto",
  "key2": "9xkzdX2WcwRiunT93BFA9bJyyT2WXvBV5vQ2QT81KqDWTZGUQi63i89d3e9LKgUcGuF7c8vZSdTCsq7yBtkUUPt",
  "key3": "32m5KgKUjpnQzQvSwLoxWFHRmE2Y6pEBahsmdxobDeeJj7skaR169hJtQL6wYpjUuky9iH88QYzWx7326exS9aVv",
  "key4": "4fRkwZkSLWfWxmUQUGwY62nSHoUY9hT3wQg57ViVDYR7ZW9Fq8SYzkMJj3tAdWZbXGV6j7iVNU2rusWVLGPQkbm",
  "key5": "555PFpJFdUuHSpCj23rBoTHyL43HLWCnrC87wuoTBVokCRuCyBHgLwn21Byoz82twjMrGQqHmyhjWoxCmSTMfbBG",
  "key6": "dKK6Rdg2bP4zxvEZeStWq1MUMhPzxxUk2YvHGDdbM61bUyY1HFEuMyiDwhQ4X2sYoEP29NUDaZxCLVXgEKoYQQG",
  "key7": "8PT1aVGbxRNCKYgnu5JqBAnDB8FxqkbHLEPXhBHeMyzESqx1rpBofR52XEaWvj2Hj5EBv5CZ2Qtpp8boXiCM4JQ",
  "key8": "9sy5qsbecRndqiZUDVNomTXsftqpN5cWw4sTXeHnjcmnF5u4GQ82ttX9iVw84atUZwx2X18eJDmvHFzPNGytcye",
  "key9": "21v37agHXpLCZgkzbn8SYBv8BvC1aaRT2fPTUpebe5dtuxjjp3BDmizem2CSpEuqjASVGh8Ms64RzjnAzNQdtDLi",
  "key10": "48oN7PcF6CJLEnUiAYbcNDXxZNj1oMYh67xDDAEH6firFx3i4t3rvgxiGywMA6ukUjjTVFvwrHcm6hPCthiePXiV",
  "key11": "2SuU7vJEodm9c2vgTF51kthgkAG3CZ2TVNDtPn4sVvhwcWqt5SfUHKMfvcXocNVfHJeyT9vEVAZ6tPXKEhBGdh4w",
  "key12": "4NmMZJq7b6gc2yHxT4DbFVQrAGhvBDaN1J4RtrWnKLiCaJTjmqkRSsnJngendni3zmwFUhqrqesa4uRuNzB7nSVe",
  "key13": "3wuxNd3LZfKaZrRvYBppttgZnJ5bZUmrotDCX31DPkAtzTiEy1R2KLvgsNkvr5VvLzdW5gCLPQSj39iJdGHL136N",
  "key14": "3t99xTh4nc87STHRLuDoSx3oM5za4umXCnKsboVDCtHCLs6AfLck1WZtJojo3QnkSQ4whQdPMQo5b7EQgc93CRmv",
  "key15": "25LZ2Ub3JqpthjqF5ou84CpZjwgBsBCWLGffA2ZmVsQTESA37CEm6NosgtqQ3ZsDvW5wL6d4HrWspCi2tyufprqi",
  "key16": "5Vxpsxdbesak5rBxaV1VuogDdscseQFpshTjzbZoQswpUXHm5tBxifJ9XVbriZHedg3fp8sHwCXnYRvmDMDmB3k",
  "key17": "5X9bC4VVFU9kvMTHNMBt23qpFKpXn9JuzVR2qb4Jc5BsRVXCL9YYtT5usJnYA5NVTacpuzMv26xPeQDbsf48MiM3",
  "key18": "49T3EJqJNXYyFBE9baehm8tzgiCdYWj2nkBJBigBwsdU9axe52QB6EhXGZghDso6WBbRWw5PjReH3NuRjqjhiUx1",
  "key19": "392Wia5MsLiFYtJr3b9GryChQ4yh8XwuKG7br81H3Nf3KnQbLcqgp3FdbL5Z7hbuUkt9o9qcmoREfMQVoZEpqEER",
  "key20": "4YAx1hbw8dWCh3ZCHFV8LLmvo4Aea89aXxzAXCMGyK1MDVfv4FahhPVe8fkpdQCJBhc13bfRAFMmQhRY1zJvKGKr",
  "key21": "4cgEGvqSfqE7mfSwBnhkTf22ppawrbktUhuk9JCUaqSfn6fps9rkEGrFttrAyuaFP54TyAi2m5oCPA422NitwW5t",
  "key22": "2Di75gYoji2CHo5FT9GZe9Sztdmdbd2KFBx1JWsrTeRsPGZgCHC3FUX1UAoaNzXqMezfzuThwo2Zfxiv9qFAZwCq",
  "key23": "4njRujaARHFJytqv3ATB5yzb63vx1yEjGovmQQPRzkXbkRYiEsTbmR1mka2AqysCQsZY9ovk1NtvJLK9Zixguwrp",
  "key24": "4BD55kDt9S2u9T1A3DUMTAZrkkapn51apRJQe9m1RUeWqY1pQabUSUs2fkKxFeKB3XxREJbW1YtV7yLfaJGfoNYX",
  "key25": "2m2ynfYgNDoBZcebSagaLBmPfV23ycEeRDXhFKJZw59LYbfzMzBpg5Ko3ouJGGFzXZrYzPo3GD5RY1958AW3Q8wR",
  "key26": "2mxk922K76siMQTpPeJL7to2cC3zogAADjjjoVtXRc1nM6sxyuDLxhnU8LHpkGKu4G3RDyAcMmnx6qyJLEjd9n69",
  "key27": "2GaRAxnduQpYTukDXpqfQbbbTwvNSKGz86tHLewrq5Ht9AzdXdLMi6PxjeT8NQxWuTTeVxYm4LtXZy9xzRRKXSmn",
  "key28": "673raziBhETfPKMrzHU3yvYXKjU9had3oVoExg2nFYF15hBVCWCUH7EiCA7dK4iii7sSkwzKRTbtkVs4EMzCH6MP",
  "key29": "3CXitELedxdVwdquNR2UzbX1Pc5ZqX7JMG6TTtxZS58p1qiwM6wuiZ62KVjvgRgQRXNVdTqMW9cyV1ZWNfQ8XHZy",
  "key30": "3r5TNeA2TCpxGL2DTxePczL4oQRu1YQqAkC63QeHYLB8VinCMZUA6dCTZBxkjBb6KjRiMFCcePyyVLaEzUDRau2F",
  "key31": "5JDA5QG8TyEeiGejSQ2zPRnXFHwMT1P5uiuMVeKFPBSZmRNTQmZchTTEXWwiEKd1213UkewwZwukYejgFC8NcR73",
  "key32": "oHrz47gRew4ECeVUPSN4ZmDjq4Q3Sso7GX4mSsjojWUQS66QsuSramohWscf4AnRb7V4ydHcbRnU2UT6q7i67mj",
  "key33": "5yzkXntsx3NFtPxQXzXfkUzcysG2bPFcxu128HNQNZmfhrV9ZSWYkvi4xEzSKZ6EYWCizJrSVna12XgthAGWfFtN",
  "key34": "2pvn1aUoghdmd8g92SAVnsNVwZXBoJuEAfVC6aHNRFAHj9SEZN54D5npiknjggCuhbuQBngMQgvKYov7xFXSekVY",
  "key35": "5AqfAGiNeziFo1dxMuPF5MmrfMtXNcCKwPqZAMbgJvMNGq6Ww3wxS1frD74ArivZt1FqERJW6T3eHiNtDpu7Yn6G",
  "key36": "4SSydSfezyRZcQSGPfigmWU4T63yUReqhDXiYhsRwweCrDNsebrbD1ySdqiwuCqJhnxgtVCo8a5VE73T2zzLJJGN",
  "key37": "nCGmYy5GnHDgJxiu6aUn1AdrKDfLdRgUgTedQG7gGYPtF4XqWHA18sBSt2jWAz5nq2CWvTAVVspKN9Np7WwBfFy"
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
