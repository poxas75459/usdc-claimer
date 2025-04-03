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
    "5EWbvT5DgaKiyj3huhTs6yjWcYPTAANaXwXW4G5d34zKP3X3Kn1m31L4hGxzKukBGd2fzgPMU74onPCSG5ppiMB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FE3bUENoyJRLiPDfH9ZDF2DeCqigR7bjMwE4RnoGGqHChDnMExRZjcE2haqMUQwzfVXtPWgZsZ2xDTYvjKc4qYS",
  "key1": "5aspwfYboYV6K6iLtFFuj55Z2FYp99ZDV7QczvnVHKQDD4JnV86zwEzmMBJZEdnZRu4yYz92jqeFn6QhKcw9pk3S",
  "key2": "N3ZiDHcHGvoNqGeQfRBghLbM9SRES9ajSuDqZd8eWG3go9B4Gxyq1HXURD5MxuDh11rDbfwFokbnENATc58kZxV",
  "key3": "3EJ1x3nv5dZcvnMMheM8SM7yJeZr34RWJgotKfeTqSX8yR2zWuXqWFgwHWFy9m6eWZokKi6y7b3C6AzmzbGcLwQb",
  "key4": "4upqafhQ7qFtQtPtFkcQCznDEvw7G7FbPSERep2J6ehvCNiEW9At8EnjLYmPocMumUHBbMSTipgh23CLzZ8GY6Ce",
  "key5": "BR1rmJc5gkUuCBXyACFFZ4uGDGWWYue75s6yUppM918MjHwBg9CrnvYVW6XyfUzzNCeTaxPVkx278bT2sWjuMDB",
  "key6": "4QAv4Wzg1SfNcngJK1cQ2nWkWdDKrCY4VgeW8ibpTbD524vKnABeN9ru2DQG7RqSmWuFmVLnP2FvHLkvFKAcXXon",
  "key7": "5YrNr4mZ4xTH2bhWzTtx7j2RBZDvmX5ZUqfoPhC9kUDURXAb54pgFVVgK2FdNK6aNJp8j9SgfCH5h542hHWrXMd1",
  "key8": "2HQAzDStK5rhxAvk5Dne46gujY79jRQoQRpFrCYBDTNHmonuewbBcpvPMzRGmB31DrQAfbQey2P5nx5orjLSdbx3",
  "key9": "2PnZiYta2TyoAGcxtCF5Ta6EGvHkYZ4GxXkVBQqPGFUQBy4J79YyPAj4NH2AGpc3qzyXmvXkSiiUPkTFrnJaed6o",
  "key10": "5SrR3WsuNYSF7KjXYtMTUuSbaHSGhUTnYZGHJTxdGecM85yw1vbZwMfrwm4kDwBNBwNekGzLKMzqCf9TpXoE272D",
  "key11": "31Ja6pm9ENkGAgxaMJRroGqUrb6Hm3tuJQoZYQ2jN1nsuM5KtjrF6437cuT9Sgbf3L8J7MEFoS7YhsRShi3iA4pk",
  "key12": "4YGqjqZUiq74xwJ2zQ9f36rhdsnT5kFPdJ34Dx4FVokaY28FHxJu5WCmHgiSkugGFkhxTQtTM7zsxWkrQiJZx2zq",
  "key13": "3nuSk3dFBm4iNJvbAasfSUcsAgFjn3KLpto92P248v8fJdxpKN9t94Zrkw2tQCuj5pxLfTs2rxk4TfHa2V1hn7gW",
  "key14": "vjWK5RQs3Mq2QYQXZqorKBbqUhxCGZsJuSUDUUDMhpqNUPF8C4ZtMcbC5B3Wjj77gvywpeohvT4TDuEbpY7KcaB",
  "key15": "4X9tk4CWjnWQPXwzX26q6dWFTrFdUkozLbZyTokaUgWd5ToEU3orJk3F3m3UgFC73KW67tjSWisqNehTCfaN96ux",
  "key16": "9Wa9Wz9tJ9d8z3tQWzN2cy4tVedSGVbE8yUqUdsZKrc7Lwumvvidp2JiEkQQp6XwBxmr1551wsox8mEjYhuYuJy",
  "key17": "2qMJ2Hd6vCDqV1ua6BHCMMuqoW7ukYFGhpQNWpw2wvfQzeYBq4ZFxTqsvML2Y1X6JaqJupxkEtNTFfufZ7mtkNcW",
  "key18": "k6abUDKLm9zDd5cD6iTe8jcDVndVhJfRjM6E3abT955BhNH7ikx4AWF2E9iJpe5ngbuTvHsendfBijShxLrM9n1",
  "key19": "2rhZhTPUPxN5angTA9nDM9z9LcZD8sWfQfkuo97TbuB9ooAgFQ1A1wkwPeAdZW9VXYThYYvU4WBWENaKfutit7Nm",
  "key20": "5pCiANHGRzzYnboqjGdbpg92NzYhygAGBwAzscmL51LYRZsyVK5WqStwREcicvxfzniQNG9hpP1XyHvwhxBw55n",
  "key21": "4vhwmbF4oKr8fM3k1wXQLfxmSCMQQLDyGvpKevDnibcHKEhrE1dJRW83C54UayueRJwMKY6DD4KM9vDpLp1E4bAA",
  "key22": "3iFukzmLwJeDPMJ7Wq3UA8hjZ6XKqTci6Vv2RKodjyuADa7BxuhS2RRL8h6nuqYWK1GVS7R1BgjVZDSpFgCYriNV",
  "key23": "PZxJHifumvQbZiVk3JggjNvq2tQEAmNyPCNpySPjuHpAuEGyzvpLRCJn22fdpf3ZsceWqjkmRQWgxgzuhXJ2iNj",
  "key24": "zT7jtSfdGwTZZPKMSuhwwZSRhVDAGUZm3wpaNawSFsn2nC4m29rFnhQ7it9thSAW5fsg8kUkA1Z4Z4NNTB5e2wx",
  "key25": "4JT4FTXV1RP8bgDMG2HpotSDELHC6mkEqPYb693jNpy7s7mFKSiCBqX2MpTByCwzAYFR2KmTgzCqhwWgnVV4PtCJ",
  "key26": "1WbCiH3eMYaB5M7jTtxQS9b6537LPVtd66v8Lycu1RqgXgp93PPwgUzAXpZp19mmxPtEohtN6AujEvZtW5h7t3w",
  "key27": "58c5GaWn7QhtGuJf7abankrp4ZeDBTyQ86uULF3C3sfx3rJaFsYPvQqGGFiia8x1e91gYsbjp5fzT6vcYKc1CUZj",
  "key28": "2TsKia5CUm2yJD1FZSHgYvhURYKty7jDDZ3cUvtDKds9rYJp3K9BFecEo5kb3CKv1vmcKdWSGyxSNyByd6x6UBc1",
  "key29": "Uh8CRSZDzSms1YvgtzPrixaQgGGkVefwd92zXmTLDJjWjwtTxjN2VUEQyHx2gdb4LG6PPN5bKW1eMSgus1FYWBJ",
  "key30": "3Rj5h4F7oeWrs3uxBQ8s4dUnH3gyYxSLMp1aaok3A7ETozu7F4LY7coPEYW73TzP8Rmb7sm9ETHLi62jGo85JQxH",
  "key31": "4mStfHrntTGGYDkfK8yvWLP7aWStHJ3KMe9hRWEcdThxHvt6TUsr8bLwtnYek1FaL7H4uMxmoi2zhiExRHfzfQrH",
  "key32": "5GtMqD2GcawRWWUUEuDBm8CWL2Kv4ZKNpCoSR23uTK3RxnCp1JpCYKxnWo38NC6AufT71wFZWbPrnmkrLfJ4SnTA",
  "key33": "FtsxEmNCFDk5neTuvLzfVvupntC8LvcmrpN9wEFQ8cmAKMhe6wbUBQQqFfZizeyDdMA9qSfW4zPPnTQnpAc9E4t",
  "key34": "ym2PTiU3smSyLTTbxWRGjvWyzNiqEmvF3DKiCivThJTrNRM5jF4LbhhorGrq7dMz8yvgzy2ymUjoSb9WdBiC37m",
  "key35": "26M5rEsaAJiRNSZknj6MeatcrvXPbkCab1PH8tnmkWMECwaoUyfrQN98cMUzN3tcrmpWHzXz4ojBhpETBuZQ7sLD",
  "key36": "22LMnhdQNU2K8SQQy7DWRKGLyMGt6THL3xi2Zuy7TWvHzQRV94zDD5ZuWFeQmsfVtduyJLECPjpzKBFskFRnsvB8",
  "key37": "4SeyRDj44iEER6u6crXTY8nouxZEzeZeAnYji9czjoniwHZHEuujFTJ7kbYpkZRUPmYRNDCUsGX1enDrZYVLRta2",
  "key38": "1XqK994ktTfty19zoySgc3JmVmPPme17chy865wjBQWnWEePv2pKYvKJdZApCDjMRQPyajnSbHyQcPkWZGSVwDp",
  "key39": "XP7cjURZwbGhifuwBAd6D3PT3scjPh517rKhFM3D4CU5gmKEtnduEq53YmHK7Kmard87WfgfrD2oBtB6qDFpsEc",
  "key40": "drf7uwYF7nMeP9pMFpvZoVM9CKDB7KQvQDW5LyY3ib6zABvDuxg2c86CEyLoQazp7oVzzYbManKYLnD52S5UEsS",
  "key41": "3guw9ehG3L3KTopvgUsVcA7FPBuHBoEjbA9TYCQV1zmPPxoncDmUpGiWi8S6zEicQJMi9damYBA4w4Uso8TYRVXw",
  "key42": "2LLuXperhmSZgXxyeLJT8HJmj7jaz7Lt18paRNQtasFbWDSiFeV8runoZNJCd9oxBJqDqjzjFp26aNDeQStnh3XZ",
  "key43": "3f5Px7Y1nqibxVui5mfVvS7jnLEsjopob9toUQorGC1wwDeEQ65jQooVSj81rqnCmsLXArFy1hiktRhTBD9qsjYw",
  "key44": "tQ4vbJfjCMKobes9RDfRfBYJif29rE21u1oyJ8qYkfDzEJdLo9VYeaKAtkaiwBYjXLPnojuR5WP5Dgnf1E6XgS4",
  "key45": "4VWJ371dnqFdpeN7aGJTAVtxcECzaZkMhKZgJMhoNUaodmLA2WJqdGExaJrsxKRfsyTEtcrdKGP9RA1xoqeH8ePD",
  "key46": "4seeLSzoMUq49XZN8QDPLbPqrxspw5m8Fj21cTj9DpDpaSKFcB5qL32CZhCrTrQeZcnRezbZsERMwTKUfavbic1z"
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
