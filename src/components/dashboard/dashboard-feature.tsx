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
    "2bj2w4LkKaj96FZ3bbYwujHZwasN28Yxsay453psei17jxQX7Gxd1RveskZAp57wCXrhQMSS1BmtaGjbSrzL8UkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xkwctL1cJHa5QGfs2o7GdtvUUcQkS49Q1pJEQNJrpHX3kSZUJtmQoF9nwToy3pfSLHePLQUDHJuTgndHfB5JrnS",
  "key1": "2e4pJ3VEA3jVoNNn4ui6XjBmkkuG3X1ckAj8vRaggqy4twVjJX5uXcT21KB6SbcffVWRerJR4KAQ67BqCk1zmBQH",
  "key2": "5VJu3MwkwNWUZTLxoLshxDjdD5brnnNse3iKJBAjCfCZuCx49FJaZg2MxNszTPWk1Z6eiHabNyYRMVZnwTDvxjzo",
  "key3": "2bA73ByWogA3C2LXTCTCW3pb78zGS7AwZCz8x7uz2wrMnpwcXLqP2NmnuAa34RfKqLedHAG87GpZNVpY29dUPyAq",
  "key4": "H8zKWcGJjx7fue489V8L4hhcTyaPQrmcJBs7RYtbvdQnLYCqTUUj7wVBxQHV6RNGRdraPjYH9FYYsGMEX5NPhi7",
  "key5": "53dp8G3Muc1b9iGxaZfPj38qTPDiok1PygiRPjbGxRu1CygXmt38SDoQgN35VZzv7bg8DVtHyejTdT18v5HhUTCc",
  "key6": "2kHssPPynvLw9J6kUjxAjcc57p5M3YF8WHQV29nCdZcvgYE7NBVSqAehPiz53R3a6ojmm67tzgcFVerzzDLuiRMH",
  "key7": "4E2thfaHzBJo1akqzPGuVc7pQwbuoPn1abhKKHUNPnuFaK9CFPYVBzmwDs693gwAkMSPCR3ivtLx5yqL4VCW9ksn",
  "key8": "3Yyap4Yik3sW9nA7Uk5LycuYtqZ4NdJw4nmgeH1whEUjSeTQAVp8dLkwXuidjzc2Wab3zzKFQnS4cuoN6zS3rTzR",
  "key9": "4nQV3kxiRa738CsHAUUoxM169MLAuPPqDzE63CrddS6wfZcMjSypPnCLHTmWMdaKNgSmD7LvSuWTfByRVSNCccda",
  "key10": "2opZGdgB1p7U6y13Ga673CRSirJ7z9XTnkyJ1TX17n5ybGVqCn9o26SpxS7a3ZWrx8nhBjhdxAY6BNEcw6iec9fs",
  "key11": "54HbeFfdyJEPeqzaC6feoGH4QLE435tYxEdtThZbCoCvhpfk9jx5nnXdtw7hmRhS9kFCtCkuwYrZLUZzyqTQmsGp",
  "key12": "2Pj8gJ77RFy4z8rYKG1k5rppqdXshLQRLdnjD8MXzyixUBWg1ZddqNwQ8NMN5T19FYwuk7YiynwEZ6et9qDkcf3N",
  "key13": "3r8LNWyeNY2XEixNLoHFMKB1adH5ZDmWkSGcc5j92UfpHUjubhzGsS2GuRk2QvFGoRKVrDsn7zfmPHXoJ6rdvS5L",
  "key14": "24VBDTLRzzVLGDz56ouPWaad5oBjgdeFmud4rYgj2vo1u9SvPEcefA2Ukafoox79eMu93HSryXcU2iQxBLxCs3TT",
  "key15": "566XjU7XTdVHmKWzRTsXFKnMRQZuunXaHynT8Lym8BW8tDzH6TxJLcvu5KCkuhZuPvWE1gwDUk4huM3Yb78MMRe6",
  "key16": "2XyQnYQxnzworcKxBDgXLuaPHFdQkA18R83DVpAUUkHESWeU3VwjH1wW3uv7SRyu3S57pkjP76VxexfSZ7Kfhriv",
  "key17": "4FRMVKATT1DumdsYb8cKBJkFtZJsJE8c9CneNGbr44WfGqpKQq94WusaZUkwi1ECyZoXgow2KBmvvVcxoVoTkXNr",
  "key18": "5sEjdo19kXyNwPbs3uXayWRm4eiEqKwJiNPwScaLssNTR16jj9zBBm93fnrN7MFDKZ3HjYBJEig8GKEnbxuqSuj6",
  "key19": "32xPVbd1sRRCN6U8mQN4tDmzCe8EWDGYF7WfiaCAMnGMdFq3M57CqWH9qACLedvZkdLcbmNhAYfDvLCAGninQPWD",
  "key20": "2ojBrX5PeyVsyhYvrL4mK9yA4rwf5c9GXw1zYFMentHpoi2gkRLvHkFgxJKXZ4RGhqrb3nFsimQ24XNVDxwE8zp9",
  "key21": "4HmEmgJ9xiickkV5iViHNa6HPvDiTrzSjv2Mt1uTAc3SW9U8EsRwV2oDoF1pdwRU8Etnw4nSGERkSDXeJwnQq2b1",
  "key22": "tqUUgrTvLvs8wn1oob3heRSptcFiafuHGYW2qNjw44ciMxKw78vgjYBcyC7yjoa6HpE8G1VbfwEzdAgaUAnkDvv",
  "key23": "23knS1W5Y8LQWeZTFkfz18TRG1YWFRVqBFa4NQnkbYrL1wfGyvmV2wYrjqTBpWwtS7DQUSSDxqUmE1ZX1PD5ZfMA",
  "key24": "2iYvFaEksxtExbFVUtQ9LT8JoJxash5W2Cn4nBcLvyFKftqLmmsKDrLSeVQpFghArYDYQxWNYsofwBc1gmW5SeWk",
  "key25": "4dKuqUDtHcyJseqZGu1HDcsfUevwUQikj3e7QRZ2xJEPo3dY5Duqpmuvi8qP2bmNMiJJbjNhi4SbJNdrTLyYeoe2",
  "key26": "2YNaWHmruNm2ikHWcotjiqDpXWWFVkCEoGM7KF8XX9mkuTgcS3XiMHJ9YgsdrBgWgbfuBeSVrT68ruH3ygEtX8Ed",
  "key27": "5kkWnaJoodv5VFpGLNmXpAH9TD2GcqqKU877NWxyaRHjtCh1cdJsygkv9tJoV7omBJWvTshpjHjeyvs2Lri5Mq4y",
  "key28": "58Msjy4Yz9MZRoUG6Jt3n2U82n7ZFHJNr1uHTgsDVUrx6oWkWyZAnEQxuXRhNhGfekycnFp57ZfDuHiU26fRiJ36",
  "key29": "7WBVdc6QCsgeyQ6GUWf8s3XpioozMofLVYK32qYm5EHKDzD3opArUcsCfrco53jRRVZLKQL61XRTZRbr7pdpwVw",
  "key30": "5tia1TMHvNQN7qsAmUiinzVn8TX1vP6beN1C4As7eKCrDX3YQ4SNuZfP423r1MqahtoP3uMweJFHmTbPzhpsvhm8",
  "key31": "u195bTVFY6eNeVqh6LcNXdK6iMLaUM5YEwyJevHRntKSWLF7a3KTtTq3CiY1Brk9UoEQY8ZSPjSgbZtaguwNQyp",
  "key32": "qFYoASZ3AGd54Pbyf6PCq7ZwqzJGj7ynWUtSTN3GbDjiC97YP646Y8BHVMsEQ6T8vmJyLWZDvG3mEbWmvTkQzYG",
  "key33": "2aSuZzC5ZG1Jorsk68RiV45q5gcZXNxNCGiBq41PDKw8V9ZxY3Afmohqg4raCgDye3R3FqR16tQBYExt75UXgULs",
  "key34": "2ujHqFPBq9u87zMjRppgZUK4qvdHEQg36RPMXWri2KPiEd6qUrHVfWosDyJxZrcxAqMvmNpnwCtdpZPX1ERsnUWV",
  "key35": "38VwavM2iAfy1Zv87oGqM3u9Jir586p37NNSUpzVUFiLWwN49geDoGQGb8ZdQBZ9RgkXo4thNJu6SEeQfgVrNr3y",
  "key36": "7mbVzisqo4jTWB1rbw5MYL5yfoQDQqDzV5uYDgR5uVYwYuNVbKb97LUBYRQF4NxF1ke7yVP1zde6nRwYciNKcLu",
  "key37": "2B79Vk2AHJg4ktNZrQBL5Y3t6qMmzcUKUHxUxQ6PgBmUwyY8pjN6WAoQhErP8Z4nsQMmvC6AUsooGgZ8xahWg9ji",
  "key38": "3nrZKjkX9mzvkMbkZaw95GNvYJYHnvt8D69QpdKY8Evvh1n4zJ1NJHXKEsKAtDkTJbsYZGuRVMdG6hwF5e5YCRAD",
  "key39": "5GigPeqeTeSTapczz19AB5ZRNBMJHaZt3FmKLMiTF2i1Yewbh9igdsb9Hknakb2MtbDgZwm6FonKyvkNY8sz9qEZ",
  "key40": "o4bFhxDRUuH7Kd9AVD8a7bS7aLnhTUmXY3CYHjh5TWVtaBzVmBmd3NF8EqGDXSctrEzyx6td1pQJYAqYtp8fzBX"
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
