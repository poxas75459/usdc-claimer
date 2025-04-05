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
    "19uwtuSTZkc7N1grrQsjpqfkZSSKDDqVqckCYqBQQRWzucBwLVvBGx5SrxU9sYu8NYDFbockGhvwLApcmpiBVaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uvDaKQdBsPFbjDcZYZn4HTUKyCuKi96gY3A9iUvuwftxeRRczyidYmtQbfBXCuz2JtJNttbEiuyY5FHbFFJZNtg",
  "key1": "374oo29X5QFPx1uv8seAV2RW8NKAptJ2aMtcmRMcHVpJCFYLG5Hp6fkHxoMK7sL3LXZjjfVDmRK5PG86Rg4ghhZm",
  "key2": "3nRVSFG8GASdC1c61CQdLJXFq2N2n8hDENKaprEwNaGjNEQrAGewUNxtQfnp4ATUg23wC5NjsjnVh3cBxXYmSkEg",
  "key3": "3iE3CSUmM5dxyFqWTkve7QdNByCE75cN5aV5nX58uxcpju69DMP28FnHdV3AiuvcJARRgMYs1EtkdqKb3ubkJ2iT",
  "key4": "3VSXYnWXfe63H94TWcHSzkewjkP5U1H1DD7LnbQsZktJ4B8trzJYRcXVeLpYdEMvZQsQvgr3hFhUPrhSBEGY7iWY",
  "key5": "5pvj8PLQa6hFupUyU285MyquNV5sP5SmgLZ7fpR6MoJJbf6fUhLYto7DFdNskV7UpJ2MFpSzCqrzcmT5rKP4KU18",
  "key6": "FTATv9krDaWxGn5i4SikBehwXTxSKec9YVPCeXfX6RrityVQz99mLgc4BwVbQRoDp7RkZyVmtrwFJVVAkFGGYyu",
  "key7": "tiXmhExtDQWZtRqqsutuoMhpoX1GikPU5UH3kPWJL9DakZCBmMn1cwVnwexuqG6KPYpmeFdCyJn1zT5JrTF5Ext",
  "key8": "2csh7tYrXue3K9ZPeyp9UN68E2UGPy3NJPbsYyWWZzbG4DvQiySrXDXFe8unJfjZnEGkCgtHjcerW2rKfa2T9Eit",
  "key9": "53WVozpwo7zoDBn9YL3xMofji8NHNexBMKF8wTb6Cfz1qadJtwZFSyCrUBkd92k4e7M4gSow3km4hfTdVfrR6SyM",
  "key10": "3CPmpg4Kku1NNQxAB72tUvcX8ykF2KAazU12qBiawijwqTVjVmtstA21wMEx5TBrAHQfagwT4nXeTWUm2fMAkGQy",
  "key11": "58WfLwbpyrg4aozZevrFHinPjzH7aLaxeKPy42t2hmWAF8F133Prb2LAxEaTVt4pXe5ik3HRFBfJgfTaPUc2fL2A",
  "key12": "3WQPfAesSk4gHKcYAhxCwVbk8MRCKgmVGEi3H3sATKaReczHAsCXAfr46NogD6A9SwyFb5j8see16yyvbqUyDCuJ",
  "key13": "aYtQ4mePGqcjMqCPKwD1smETMmDn3st94igoRdYoxwMz8fP5bRfVS9mAWLrLVjEKRMU3k6L2N1Mq4ticZExn9fT",
  "key14": "5AVB6jcivLDnJC9zVr3jpfQYJjPKp7yVTHphpeFd2HJ7vwRU36atgSxWZWDCjuuvupE4FMUeUYSK6iAugmujZPPF",
  "key15": "4njjUEEfgGDGppRKpUgncWncHJz3eNw4TEwMCSBQ3qahj6S3txR9hmeD1DMndP7bAhgMj9U3km1J9AwDBxNmVFqz",
  "key16": "5YAuo13o4XzJhVCo7UzG4qJJXvc4Gb93CNdkBADXbTVsz6PUvbLxBDLLZ3tnWqLYcHuYMhQz7BmBcjbpKitkmZYA",
  "key17": "2xRUQfawW62hvFEdqqmyz2GazewcZy2zbqcvxpLN3BSn1BMJbcRDiq4v7AQ4WPcHrdLBrCr7EVxLUgZyLMbRv2VR",
  "key18": "5r1F2gPb925SqgauVqjccPtuaYLdYjUqSBdMPChf97aA7mfuRL4s7Mc6yfPT5wYP2iJB5pJrFDaGqd9XvppJNGvY",
  "key19": "3YKem8beaCWvgjfeB1nh222VCFLFg4cRFE7ukFD9YHrkxYGiMqzpcXaNQGGsfiTF42VM6c2MrAe7Tg3Ni3GQKKX7",
  "key20": "SfFumihGLZ23CKxdSCan6zxWi1WwGLkdVByNeytGEFsurrfeoHw5t3tb5gSKqf3VsJzJrmf9zoj2XL7LQ2CG25n",
  "key21": "31nw1uFR53QVMbostYxPNyWzUYAhMnNG9itpthGeAqtemK8mSLDCe6jArhFT8MT27sytfVThymKApAZX234w3XFA",
  "key22": "5BKPni6sJMQVs5yERcGyoCS8Vm8CYn3uisE5ZsWoMqdHhY48BYjF8c86Wm2zgvr2VMAppwmrTNEFZ6Y41PwB9AfN",
  "key23": "4JhHXSBQwaMNT19kDT4ay5kGLHPTqfjggVnJ5NgUQR95ac7sLfbc3NnD39AZLUwTPgazmoGfB5X29rSySWtHcj95",
  "key24": "37W6FG6y22zfvwRdb1tzJ7QwVRundwJLN1krFWEtNUYB83Q848TcjB3yXiBjA5n6enX1KceUWZrRztNHHeU8CTKV",
  "key25": "5AYViKMt2nxCbRr1Cit1D64TY94QfDXZMebeqN5SwZMhKQc3e75gNn2g9YB114D3LmDDs9c78fpvjfmQdethDyq3",
  "key26": "4qHrCopTsfcZQLLbcJVDnYA4HT1iYp3oaVfh5yGH2JdNzLiwwUpPNCHeYmjFUZQ6gBXFQSQK1E3S9S91JdQx6Y69",
  "key27": "1sNvXHYBfk2HVLjNmPS3xdpN2cx9dUsumpAPswuidR4C5wURFax4G8Kg17Ukemau5rmyWVxRikYZM4zEwSR6gwg",
  "key28": "eRpWCyh1nfAoKgHSuCYdHvy4mYCCz5oR97e3h3cYMGgfkk5cuD8uqjtNSyNE56rad5739ckuUaM3seYD5ASwS1u",
  "key29": "56KG6r6TQWWAmfDoPdZYSo8mUr2dAqEcz9NoxfbouPZWEXgBQEZV6QaTansBBgKjxC7yM1EmFDbox5YPJf68FT5Z",
  "key30": "2XN3TGGKiiuyiznkAGmBtxCAzgndWstQyJ8f1sSUUsHtQ8Edwms96yfwjR5U4ze2qC23ufXxWTKb3Nmgzn7AQS7y",
  "key31": "3CXeBcJSG5CRWTkpuvvG394HmX4RqX4eDZYG9GmwFtkNZZVXk4HqX8uhQqv24nKrisJTtKizsSAbLciNxeMRVsSU",
  "key32": "3mxRpx4sKAKPmkVYKErAzmZFEcX8wyoUSGApy1BU7dGGeXPkSDEEMqEnDajWr8w46t4EXRyN4D5EWh98whxwpdzU",
  "key33": "356wjr7sKjZCSRFLRbeiZVmCkB5FqTSqdUD7ij8mHcwKEgHvzWX8sGizxiLcwLXmAwZ9y1EjzxE8U1UM6WANbRJB",
  "key34": "4n87jqCfq2wh6wyWZccVbuTYBaCFS7kjZJPS7sHtbmfaBpBcbj14ijuJP3DdCG2tmVi7e2Tcn3qwru1vEGR6yK6k",
  "key35": "4AzALgwWtQakatWvymuvy8f755g6PrvsRuZKCGPJt9gt6atmzHDVCzbMhVi3LauhqKuuwkLYhbdovHwyvi2RL8Nn",
  "key36": "2kLjpGhcxZo6j4tnrXr1CD9VprzM1qNe1nC5JUmnFDZ3BNpWHQ3FwMVwmUz8UQZD5omQFkhf8L2SFZpSfFxeaTYL",
  "key37": "2z94WyzZGS2pcezJZRLjRrUZrpf8mRxWmXnXpuUEQLk2UifpHbmRzaSZFDYx89jaD2z5Qx31M3SQ9m5m3jRPoWMM",
  "key38": "3AJ4eDpCn2425WR5otnTNBoFrnf5ubVsZkbpAvwL3Gh9YJ46HYNToG2SFZSPPDQ6W9jkk88tCw9jAjTiend3eejD",
  "key39": "2BNRBLXbjnasWum8zE91uZw1eMdSeRUVs3KxsjwgYziGDBz7UX9pjAMEfLLLK7STH4aas2b89bS94T8D7nonZVf6",
  "key40": "de57PWLRyeh6jD38zKiZEaPLzgUsnVBrSUD6XqiRsgyQ7VK5kkSJcKLfcdNfjVwuxiizP5EPFZxXFwB4Bv7jcMw",
  "key41": "5wvq8DNW1RoaMTUavY3L4ctDnHq4XdKnra5yFPeK9tsjPStgEP6gJyGFYNJbpcPVFWzj5naqB9QYVcdjaDZP9sN7",
  "key42": "ZXf8duRFumgsnm3voH6FvzC2MUSGgzGevtgipYd6fYQyDmQPqYE81V2bcg7BWFiM5DDEYuPKaH449UD5FW79D1G",
  "key43": "2GM64DybxW2zSvD8nPWa7Ttt7RC9h5omvWEBxcfWXrU6aeFe2PP6uJaj7N5d2QwhXTJCV3t5ZMMcukVMRd1vcnK6"
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
