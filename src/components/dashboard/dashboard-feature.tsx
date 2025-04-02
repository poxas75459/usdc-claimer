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
    "4c66nT8u9kNG4MyqcQQaqb3vyED8ecjYtqyS55VX7jSyQf9Y32efDntN7YvH5gcuMv6AHpYvr83pbUNT1NB4SKuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3grNkqAK3fKhKdTwbYzz6aTRUFVbXQJxoLqvd3N1rCjUSxHvzRP6quicwCpEfZjuuxxMA1ZAwv6BrVgupRF7obeU",
  "key1": "3BxQSDQdpfaBtTTnpAsw5RyWh8e9TR1ydDXrakzEqkuwymEgX4G8N6JBHrgdGvySrChJW4jjBbJ4c6etveiPFLoy",
  "key2": "2HbMFqrrNPdtc6EE1cmR2foGEtQuSxst4rNHoDfrX8fYH6LUBtm2euza2rnVPvixcGrPnsHG5RRMZ5YGWDLP1yvK",
  "key3": "UQVxLZ3MJiYJDjEjUc1fjYgw63FnMZEe7SFqi345UnM7S1nSA4LkPp1ozMMWVgGFXS3ZP59eS7bX5tRRC3AXUS8",
  "key4": "tu6vLSuNfLPhWU19hZiNjtSykSXHVsuPkzTVSVF1HY481DksGsWjzqQhESgmSbRuTKbnNw1pC6croEvHaREeTDh",
  "key5": "5BHX1odFszRZWu9ToXdzKN6LDovPkB2uEkqWB6SLobLzC192ckmg6igABARCLbC4qipuWivrcoeq8uWAj46xRx1u",
  "key6": "5GuyZtdZLPVfqNW9WArTEQJSQcdpMjjdTPZHgmduzykiGC73ZwqjjahZbA7MWYb4vnKKMucKFZ1t3BCyEtAtPxVP",
  "key7": "2LkGn5VxBuC3Ut6162AWGz8N4Ebmzqf6sAfjiRWz2CU9NNCWVAH9f9pnon1wdPFK1bjbWKdyaQtnqTd2taLcDvNc",
  "key8": "5ifJ71D2tpF3EQBBMYgAfbeyXMiAWwt46fSKmwdP4f9Fybmm3yj6BdKWxzHJZKWRqhoDg2ZRr1Fg8jL8K8FmVe65",
  "key9": "2H8tiiADkCMCcxe7CWiwNmUEK9nggkJiSfLr8aHJcRXwsLaoM39TNTeyjh4aXtts143MkxXZ9UJTsstPB2LcH4aK",
  "key10": "5v8TtG4oTR3gXf9eNYWFzHkKUSNC9N7P8dFn6veffWh6c1mRFr1QQ2CQ1t3uAkcHQisFb2ksmDddY86eXUaKcQH3",
  "key11": "3tUBEPKouv5sQmuJh8Rd5CWwxpJuEQFpDSBpdJT4sc5Q58W8CZP3TedNAT7iiCUwBukg4MKFWczgs2WcXLDN6uji",
  "key12": "5ipuwtRdXak2MipNtgRzRx6h1WHjyJMwQ28bee42DetaPzjjvxbe4fvBtohwsJ7voSnkir6Je5LsVV3a62v23cQV",
  "key13": "LD6F25CvHH7DsJJk9Xk9tmZ18EuoPqs8WUWGNaEeh6GtFTYCcTjxMF87qSBr793s8HqQY4AKyTynpDFu5FmghNo",
  "key14": "1V3cMXRP3F5xLjxQuFPSDa9bU177gAQdG56YbJNEh86yqHkMcgQYe1pqqeWWF2yhkd7MThwtkNaTaYKnsGDf4mz",
  "key15": "ae1Vu8sYBE8eWaeqnWkEe7oX5aNZafwUuNHneHsL7rU7WLTAGH2VmtWCvrA8evwaM3UvrhXPhcU5HhqWmbJiDxk",
  "key16": "4CEX5WY7MDzGjBQqDq6pNU65ikuaGUtY4bAZTpkKxGPSNqEmkeTC9DTz6SFy9wacmWhPRgzUeaRnfnBG6NFa2BPC",
  "key17": "4KyuJgYybAGdXmv1he8BSAPVJ3Unn8Q7EXxVrqKHW2RsxN7QSFXHCAAMBXhKEpVkdSi9rUSy3BM9ZkQs6qdWVhsv",
  "key18": "5zq8xs8ZbyLHXqnjQfTdj2SxD7a1HzKq6atuVSwSuooJuCSxWKdRFL2327HbDwuryfJBXQ5Vyc5kSdETabEHT65b",
  "key19": "4CiRGAqvjLdfuffXSYhG2dfgxhKUdMGzGRJhpVB45QeNupUuezXESQExQMpJDV1jsRWF5gsfEGT4FUNSgg4YdbbR",
  "key20": "2FZ7GJLoWeNKMM7j4itpjEdvv9KCsHgpDxtZBq6A515h36KwH9GRorDjdSrWb7kavi3SoeqsG1fznjpJwJxnFVsr",
  "key21": "m9wbR11ob4vAVz5wg5F9qMAuHeKAM4Gw7vZWQS5dSozZc42nqfCsJ98ewcYoZeCCVpdt7NrjYvevuye4EuxwAh1",
  "key22": "2BDx3d33Z8q3WA459pS6rZdkKyUxDLKG6SZNbQ1Rub9Jq25ENCnpyBcedjhx7tGXH39KTJGKAvH3EW5NFmiu8q4n",
  "key23": "3t7B4S1SDBAwadSAk5Bg1n7y6aWfiMcbTFSjE8t5TQaKhvF12yTmXrTPxcUukzSbAgEM4x9VnEZVaDTATXEpZmLm",
  "key24": "3mMWE29HRSREm7BPsH5gb9hT6DrUpZmXYGFirYGugQeErqsezR38ysyZY5o9cCfXW21MFuAcy2PkQZ1N5D4FaZeL",
  "key25": "26CqD2b778kFygRYAzWU2dsZuaAuV9asqk9ZESb6Mj6nm1PkXj2TuqTGmRdSarFkjcK5Bg9UtMqQndjm1gMCMgk7",
  "key26": "5EsCysbby6k2ag4TWRpeTe9fbke2MAh3tUJuPZTdgMExREZWGUYKdxTmDXXZBdqHrzfEHXNLyZEu6dtRfqqUirxz",
  "key27": "4qRNmDVAfpH5utdxpXLBRaTcwfBhBpNpHYdiwYodydYu9xhJT6CAscvn4ETkdzLZmJeqrWuGQ4QwHYimk1JZxSq",
  "key28": "46M16VotGi178gAHzej6qbeNrRJj5JFigW7j9v2txjJdBYdkoSWBvwbZEcrYNVEC1WJEZq53iSG4kAMTCcuoUfV3",
  "key29": "3nC5VEe9ovcXFGJDcEawprBtTMLeyGJsLFU2HB9LmL7sPWQ2vvAgX7Lqokct8NTsC1SxtMR4KcwAEbcbahrbbgrb",
  "key30": "4Z1MctwEKyuDNCf9ECNzjkViyxXSAt2CDU3dMxoCP5KLk84AM6tbSyTuiyWSe2GsFn2HnveK8WqiSgjpqQiB7Pbd",
  "key31": "5qAupvKNmwKjCZqCtBYTSoy6Ax3P9WJh1CwLxRTcWHsqymcPkwouPETzko5vbyD4TMPsuXCtfMoXqyxd3U3h8Ra3",
  "key32": "5r3mfuyKjjT2JRFDqonnGBqz2i2ZhEhAJoL3ge725zNjgcyB1VBSScZd4eovqTn2SUNLouQWWSi4ruKNQixVAwV1",
  "key33": "5PsLf7n5nNoiubwRmA3T8UgX7vsDKNuNK6eJzdGeakWNKnFm288b6CxWjiBwseZNwR14aPvGvS3bAg6qxzqy8Hvs",
  "key34": "2JJvtgQJWERPt9Xq3dDXRU2gtfcWTXnbDUx2x6E7KXKyF5yeNGvFSo1AAFt7K5fKWv8wg8kTHsCtxMQzR7vcBni2",
  "key35": "33iuVzMZDLbVMstgRM8jBEPHhaUKDNSYATgPzyNBhbgNsmvzirA216qKfSQrc4nPYrrzPcWbAB3Q6u3EmN9QqpEY",
  "key36": "61q8EP8dzsTLhsjm486vpTdpUPZviUG6HvGw87vFE92aD3oQqqQZc1VgFpY6UNMkj32k2byaAkFVZ7AFhExTvXmU",
  "key37": "568wyafBbhXBr8XJ6msZAHUnFix7gP6mvcDaJztVsH11hyxkMignMA15SEPxcijHa1TiPE45BFja4K6ZNYnU5ttH",
  "key38": "5qGyjcaKeUfRkKqrJMsHWjFF9s4Ae85vejmiAFrjGtkiv8mM3DTjW6TsCDoN9CbwRF4RgtVi4zTPzbJSwscmvuXo",
  "key39": "5qonerNbJsxHe8gZyN6nTh7mDGSywuUMczHGN32gUhe2wttm4oCxRYuB9cWTRS4w9ocN1fs6vQdsyWDGwLGczBtt",
  "key40": "jQ1uPjiZ8XZntDQfpYpSWUGUFRsFg6VvpfBzkqTX68bWgMmXBHvL275XtMAPvhha64T13jfnjCo3aHhti2mUeBg",
  "key41": "FjcDhfsYQCPUcrMdu1m9p962LPX5RffGXGyypbsVai77EJU53EaYxPFWmJyQSfNJfhpP8BfmSy27YFwWY8sVzJ4",
  "key42": "2vNte12apJgpJsX5cE6BZNjDBALV6NGvuChqDDUdxJqjQGgi5PwLXymPG7HpKbHDLUgr3598UNsQqW12Qi2yVCew",
  "key43": "2F2PksD6BZQUihxprqsgu98WiFWDXjGuxAZK6HFDGZsmG2TDc3SFX2GFpK4oc7kA2d4dEdSnYdyuLUk4UeUtD6mc",
  "key44": "3wJkmfPFWk8w8sZ7G6scGPAms1AJAS9TuCLvSYLBre1qiaoVLeba4H86mS4HFm3gypjw9ST5PTFK9uU2P8akKtmF",
  "key45": "4dM8AyVcF4KrNM7dxTqb5Vntj9NNJXaJYBPgkvCxJnRFuR3D9Vk8D4pz7kT8P1AuwsF5HWZJMq6sxHSS6HSJ4xF7",
  "key46": "2qHysTgrVTcueMKjSVUinyEmBLFm2Lz5Exj9Bod7n2dYesHT4CJpW1VASJo9CkkRj3iqYbZBpstDAs7NjdWkydxf",
  "key47": "3z1kFYtm5Sn53Jtmpnz4mHyokaT7sLf6t8vaX6bj7F6R9Lo8dvUE95JnSbihU4KKMhCf6dCtqTjonH1BSpkk4Fad",
  "key48": "kfqy2EeGETUAKr73K7Xekk81rscgY5xDQzWdvSsyXLAKcH5DFDycNfCZf1aucGqrWKRfcAydH2obexEHZJ8qB1q"
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
