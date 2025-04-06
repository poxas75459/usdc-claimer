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
    "62RcDEetG68nqDtYczM4MiaUwBUWgRqMenBEYAhCMmcVQEvKzbPBCibVWCrUcPxjxbTY8mFqMsehkNTYvoamaPbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YjaQefq1zSX2aCxaC57mG37bELGgjup5eHhuBxRrSiD9J1CBEtGBQx9fpHhixTn7mfDhiiAVJu4KjwYZ1zeBsRW",
  "key1": "2Dhv7SBcDqJ877LCtah5tdLqQxe84XDEUKfCGtisHpuDSpf8vnuS4pa6hMZL2mFFFRW1CjPMDBRF2hyc828f8LfM",
  "key2": "3gC5CfUc9GsJXHpmbHYQwjsJiMGRPVU5BcfYdkNtpDUhQKrMEbnuR4TPxXCxvvCuNJJUCv86houz5PoAvL7qmhLG",
  "key3": "5uKBWM8p4m3UEy91Z5sDH7bypEjME3SXnAVeqBoBamonKAbLLF8aHHf75wZjqt1m1dkYvkX5JEiei8PwtKsE4jUs",
  "key4": "5Zkwy61i51ywUAhCKMwQXgxwoSPMxMR1BmVFxUEkFpSUm6T5GJtZPHm7xGCzC8xL98r25UpDEBPgtiDvHHsiiDDo",
  "key5": "2Tm95Bim3CHy8xwFUZF1AbcACdAV9LGCCXEzT75iU4cMQYBTHgauBEYRegWdnZAiXPCAMpaFrwUmWczuYiX4QRCA",
  "key6": "5i8JGhRV8Z9wNsSKqwbAWkKhnUpKqEUwPhiwvj2Bm873ktZ7zjytPH5aiuxhRv2PCctqVvgRak8mFpgyMXi5zerR",
  "key7": "UmUjr8rkcfVHLbk9C2aGvp5j26KyuUgEYxpLNt2Pz4RooqrLbyE8faq3eoLtTS3bSB1TV2MZ1afg8Bv9W8HUV2U",
  "key8": "5SUjFW4uXLDUyFozZ2KkeGEv4EZZuptf2JAi5gc1FACyo8ZJiaUYk83EuoGLQvtzFeW6ipe5wFhyHDXkAHJHGgTu",
  "key9": "MAaU8stKbqGmikRpzwRoe2VrYoy3YN1sckQ27FDGmam521rCEtnJtMxsemaPKKFJQkDdX8z7xg6YiQzQs2ZR87H",
  "key10": "3Hm11B9UTmjvDTkv9XAwjDDYbAqJPyWSFZzokdWq4v4s3wP9rDZfGy5dcxnt5P2P3p9MEN9YpnGkYj9Zi3RNoEa4",
  "key11": "2WqAWBNRNyKZbLXNpMfEfmfcNfb8dL4XsBVhBrdAiZapQb5S2JJepws4WjVnSzP9jC3VgP3xY1mhPVKbufncTya9",
  "key12": "21nmMgk12X6oN46aetdoKnpwLm6AXivQWF1hqLdPknZQhQYuSN37Xz26nAENeEUWV5vt2pcX3LuLn4SWLGYvmGdi",
  "key13": "4wSFfV7yWdVrgkbq19NMzN9RujAkFmArnyUgX81cPDYtdRLK58TRYKWPXKfveHSi3SP32r47uT8Wn6p4tWzHgzCD",
  "key14": "23tgG9TCoZ7ok4JSbGG6JHQNK6JMXJMuQdJLP19E6c7ZE59zwpihS8bQRpEZ1937hYtiefQtXsnXzVoXefQprjTH",
  "key15": "NQCuWxBX6Wy53ZHsJyXkKBCejPd6Kbubxo72reodFCJaoMrJApnH5eeY8Dfe7FuFBncEjXwex53f24SMrrf9QXH",
  "key16": "5ravwsJjozKBy2kmdVgX1o5LYRkH8twnf5ckogGmnMoUXMcQptHfbWXvKMgr5ZspsjdFTzBCQv6wp1eWiyk2RGf1",
  "key17": "4TKw9nBY14WSKDMFiWvWKEJ4m5Uu976EjNtLWbB8LNVj9tMk8EpY24wCsYfoPNMXSQFbv8LTZPRbeiSDzGkznZCP",
  "key18": "5aiupyyRjnFPdhEBL6UZhr5rvWegmcpjMbecmZfVs2Gpt6x6h69gvxZPSLmx6xAmWkVzazvmTx9mEpYwqxmJxozk",
  "key19": "NwHWjZf9PFMPiardSvRgyxrLrMxTmKVJ11awXLbNVWYTuZ43skJm1BM3EGU2ohbcskEVRwAFDuzaknEzKw5eUXg",
  "key20": "2Vc45BR6Qi35zdWw4MUJ5mAHNKrsgFuT7kNJSJ7dgT24ZZ9N7rKtyCfW8KJK9761xSsKoJzepvQnu5SzN3bEyfuL",
  "key21": "4KCJB4h7ZPChbXZhfy6fP3Q1JNLm1LKWNUKKKwESbpjKwbvThyJrC5gyhF3DK1En1viTMeAtjEn63FBjbUoEDmD7",
  "key22": "3xZAtYNAXNcVqsnbZtjK4AeC6sft1KiXiXnJwQ9uytTfPr3QERHD8goDZLCDwkd9qD8zemVkFLnCZnUY46pWNB5u",
  "key23": "3mAbj93L47FhQp5p5d8BqNYYawE7JYTRww32wYahu2ipN3C4sTP1Q5gZE3iK44rgCGudUbE8JaeYsL9WVtwPn1nX",
  "key24": "2Fk6UaVSb4yyjr94doj3zFyLdY152vTdh2ZXKEs7YkWYFfoHG7jz2bGLTL2TCWDgXBpY1k1stMHMfFmrArg2Ruc1",
  "key25": "3bRBWsGRUvD3KF3WxyQFMJmQjUiXpb3wVzgwJTyrd4yBpFzjE6DgtuQz1jxJC6pFgfE1iYgd6RGEkRRjnbWBpVTk",
  "key26": "AxeGdK6DB4SbWnHJEDjQ29kWc6VQLdvnx1hPkW21WVTPXhFbFXCFiMkEW2BWraLDaEnfvk5ZBNQZFaEBvDBavkg",
  "key27": "3doXZQqbhTMPxDeef3XjWoCm4aKGp3mSs9ow34iQL5Qv47un2mqNmdEw9wmhtT8QX5rbXcvzmRBxVDS9JKFMPEhV",
  "key28": "HJ6of8ih7Uno6Y7hAdiCr2cZ531w4ax7JfavtVudqQkNYfB85VFyBakJqJoMuFR8yiwbjsQZsY99oiWGURL1o1L",
  "key29": "3azqBZuUizc28EAJ7gcy4e1LxzFemRqELCNkjsZzFtHBDRUSu9wgmSntGDpok7Z2tsxBTTDPNGMdM6G2duGgzcwN",
  "key30": "yR1KYSJ4hqudGpWMiqi2nwBEF4K6cHmqUVyPPWAaKdhYnjG6tNzSVF6HkcHhuCRmfpJdTriKD6R3Wo5D43CM6C7",
  "key31": "4vjfQmR9SmozGQuGwSWqnp16dhe9VyDsHAQDXpAtehrhjSFz1SM6qLV3w6au6TjdY8tXaBJJxrKG4JdzgALoGKis",
  "key32": "5eiGknp9nzfbbbP7MFWqxXrBiYVmpBabUZWpgUtAGRoGiqB5W1uf3paNJFRorSypZyxMseLD3sFeobgKxoF8rSLo",
  "key33": "29qYp9thswWmy9gLqmwuMWSJLWQqDFLByNAFZ4ytJ9j7srw3xcQPtnQo3byXKhDyDhsqh1wEa3UrYHE6bBWH3y6n",
  "key34": "4FREUana2Rm33Ys8EHBG74kET6pFXf9KaLLSALNxQBTX3osrCx2TcqDCcw8zaeWzAeCp9tEjSFrRb7KnRQNS5z2g",
  "key35": "2JCdRQqo3chDGbXhw8TTRDPDwGskkhfKDhk9KX5Y7ZDvPWoZdE7JfDQ7LoR8sjN5gm6hhoNxrwZhm61snCgeMCct",
  "key36": "2acSHYDTRzAvFUXpi9kHyU4FyDLchSyJh87g3tCsesDC1SDhwVAPjVpYcUvKRbwBahY65nU7kQwJHfY4QzT6h3oh",
  "key37": "bMFzAeLTp48oi3FimAr2WmqGbRawjFbhxhrJz1cy1JqstcP4rcbQUyDizCUqaZa2zaCrLVyMKbEN9VeRFMbPRWU",
  "key38": "5koam6CShjPEsDaeodusbm2uPFVTEffaBUg3Hxz16vnubgBVwWGYQRpDo4huvMDGdC2LogFDZf1fnw4oTjprb2w3",
  "key39": "3vWFhwkFo1geGJaNDkzBHihBMLDKqCGwihvganmYzvvB8EefrEokcdc26Rw4qKKBsz9fuY3Ng9rQDUJUvE1wQonH",
  "key40": "5DV1QjYc78NuHeZdhrUVBYPVZfTYUeLE8uijZALaA68xCbyb7MiLf7ZhQLbUjN2LPhDzUu4ifrWcFN9fRqfGascP",
  "key41": "4zfnzFkhhVeBV8Rqy9XrmmdgqZxMHtgM4yAGvPAukhuRfUfSR17Z9V55T5SJ4UFUfZpku2hA3PsvobR9CNBCDhwN",
  "key42": "4t2S3YFgvEwwVLQxuTg59PaNXgTtKpHsJFh27YFZadqMf9HhxdysjHe64Jgqp9pu397vbkcLj7eM1w9Eywp5FQss",
  "key43": "PQg1vFQr6qBXyezW5p35JmJ8WSj9ABP4RAWXNgVpQdxFH333pFqMhRkBMrRmqLo277Ysrou1g2w1aRSBSMR8CKf",
  "key44": "2UhhZhzay1E5Q4ABtM32pNwwWYYfhKuCrc4fMyoFRPHH3Mv8K1DJbJqkgu2JwaqSyDjCg2GpqkCevCyQGbUfbEwX",
  "key45": "27FFmvgxuAvJRMfro5rFJa4auEzTx9vC4pCA6q1u8nSRmA4K4W1kz7MzLyZy5dwrV63nzLLhWTmJMQavDcnwwARK",
  "key46": "4xtwTq18XwLQFLMs9SksT9yc4xUgh3EyA3YpjpbgTpzQmtyNemkbLrJ662mfgpVCRdaLma13VYX4wPqHCGswM8NP",
  "key47": "3kqMS1Ax7LrUuzBYGxDnFpqpf886AXWGmi2oAHezYkAubv8JzaKubGmP774jc1o4UEhYAFtAq4VEovreit1XnmbS"
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
