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
    "CtcdrLfmGWjoeeG1HgGMp5dUo4ywJDngbCC6RemZubcGf5KBeTh4aasZEyW2ib2tr7rhRJhQPo2CPZYoVXPU7he"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vgtRtrBhY9aocQbABotz3hahBg4SEAVB7sXxK41aYVSrbioCDvkUFbXZfEL85YWMhjuU6mdiTq6G2CykNr6FpKR",
  "key1": "5chR4a5VKYY47dWeWBgdJRqam7QQggBHUHMF4TaaVDm1ThHjDiucjhKz546vGsH3MAbKKaRpgTRzt6GMMuAZCDpA",
  "key2": "5Ct1xQozKhAZdTXPtGzuPVQWZ2828zLPQgRa8SkjiMQzzyvWBnRd9mWkQrfuw4ephUUbYTTUjU99YgjZynkSKwCL",
  "key3": "4g1xpgyr4nfUC59pyRKgLVWgk9xoCdckqbJRDbFekABV5SpghrFsz4GizqftPcQuE6SquSfioq2jdk2PeoTcMBpy",
  "key4": "4uUt6Gvtka8WPVynbBwpuaTCtDcnCgJdq76dAqqVT4bScq7owKkWJTjByxZMuDXdT6QzeSevo1MoQwryDEcpsFdE",
  "key5": "4vrMXcHz47RvY8vjrKNrhaBV9GinStBZDnMqqcfuSxC8Za1HUfmcmbsWPxbJktcCqwFrvz2MzRcxnE5NMZ3SMsLQ",
  "key6": "BBcV31M2eaGtBLF5uhZ1JwZCL1wfmfjPDZ4KNNVwcGU2n2euZ4gGHi3GzaePTpnAy2B55AWVqnAhCVrebS2UTwU",
  "key7": "5mxVG9gjfXUte1mLagFxwkNiYXDDmgvaDY4gyvvp28J5eB4nQnaZkXWJCJDfRAkoevdNXdeejctS9ySMVoz7FjR1",
  "key8": "35hnUoLhJu8NVS5QgaY7Hvw7AisdypWQdmpJg5CrGP3gxRukWrbUbJSUuDAEuFbEXGH9ANyTK7n5eTD7SN4GYbcV",
  "key9": "4djmFE4UgUe52VrPvCmCvwKMRBdY2FyesRS4DvBWWDUV9jnJxRdtZMVEg8zjxMUun5gRtD9KJWq5d6LF1hbj9oXd",
  "key10": "4hAzoqy5Ja2tMCXRnybUQ4SbPUaiQ2Q7tfmtVXeYQyDYs6Ne2yapyE7X8AdBxqCyQv6q6reJnGJzird5ta9mdN6Q",
  "key11": "2pAe8Yw1LLF1a3b3qonc6dr9LfCSv8L9XEiwPh3ZgGKkqe2wBUeKS3bFzSRKExB8bdMCF5D2JnuNjqEuurqB3WPm",
  "key12": "64neucqpemHbUYAXMr9ALx1tqvCmR1P2iKRrs13v5y1sRzknKpUGkBLNkqv3ZXYL49szx5WfM3sPLuH762dPfpBX",
  "key13": "2jLsdpmzCTA6L3VekjG9zwfiymi8fkkSrADFVuMYg9D6oaRRLSQPqxRzr9K47d4wdCBtoJTUFpGU8gc9ZEYRgzBd",
  "key14": "5zEhpCj5kSd5uzpn8aSVinegAN9vzNGVKeu8ccbjQA5Kvxmfrr52xZSibgtiTPEmbGwtWsBvobhYJRmQWGi1qqPk",
  "key15": "2GBPbHQHEErgx79p2moZARLvccCw2oY9UJx3mvVWMnqr3doWRm1xBdQK9w4AKeoNqcaQpiJp7KjEBEJ8cTViFP8p",
  "key16": "3Vm9BQmF44mUNEZ2zjBdvMdyJF1TGWdkdnQy8NbpCVjHh89dvqGpj9cqRXL1tQ4sFnP4o3sGop6Q847sAudajbD9",
  "key17": "5Vn43EApkLkbuGGkwJXer6NgDs6RANzmXboXZ8Tddj1dh11bt3H5WNSVfY8CXmsZxkdkY2JsAJUP5WsTWtsb5yxa",
  "key18": "5i618gGUYXLeyphYkx9FT6U33pq2bFkuZMFfEvZo6BQmwsEraQzRvcy48mHXu5U8wbu5jKTzd4JFZaTsqu9S69ua",
  "key19": "3N5qunL6wCbpCNVZLWHxkmadpgzqrDPB6k6oj4d6RhcBjB2WdJe6NxCUufVJBQH2dwYT14PMqVseT98YhEMMGdKn",
  "key20": "23iJXkXNwwu22C4HT3JX6HYac4xjBhfTBjqGK5V4QHcvQYZk54TfpkoW9dBvnd7qD9eZcNLhk6LRMCrhEMiBgtTy",
  "key21": "2T6Uk2AkYZ3HadV4KgeEeef4qYNnnGsfYduZKH3iJYhx5ScKMvdP8wQ2ikC6E2vuJDEzRg5xuLDaduMMwC6feaVG",
  "key22": "XB8KBch2hZPYXSNuzPvvgieJUdUXycbxx6ELRRAzdHQTnEWB8yD6MtrztYtEVaAgSFnTMNYqUBZVcVLCeJgQ3Ud",
  "key23": "9JA7szJ2nR2NVjAtfJWppoznSSxKExZDE3NhCvQ2kVv94fFBi1o7hLfJP2VcH9FyZZAT9DXv1KagyDTR1CxKTJd",
  "key24": "5AEkmmnkfJBS1WJJBozfX5JPxWz2PpYgbHXgUwH2d6QpNd1P3GnDjMrBSyTcjyfnDX1Zqwm6gNUbNaB398qim8YC",
  "key25": "QqmFa4TweHDDJmSVDvZScA3QMXyjHD6ucxWdNLU8eRzZM8qd8kiMBckbuUgtRapFLxqcUtTWtufKfSX63dp978v",
  "key26": "5D8YC55GgKbU6izTD1h83VWAutqKkFPn7DJuajer3NpQ78BbqmgnxNqNCNiFHPq6oKxdr6DQH3pFuvujpFsvEPoC",
  "key27": "3hESETSvGwSER9SN1RzfGT84ouNdZ3mHTZh9MTXBdvn8Z7eRabzpfULR2oZo3A8G33coWUMBS2cwUsKjPy2oRs1c",
  "key28": "44vAe4RyHG4iKkuRhRzWGdiT45zm9JGYTXZBiYE4kz9s81hygJhoiXu7wQyMh5hW5BQbdk7zy13L9QZhmNnAjiQN",
  "key29": "5ZBPAZJGmPsyyotERcXF4SqziYohahRsqNd1jCd3g3yGAFn3fV6hCB44LXT7g4dpQmTmemC3cyB9dfeiozw3p4oS",
  "key30": "5d6uYThMnLwT1eswmyZixQNRNhNiHr8uzXTkLJm3MT3ddQA3XdJPhrttn2t5ye2dvQkkcDfARBbTDFXJYc1y4ea7",
  "key31": "2rE1CdBBHHd5TBqU1xRdntmZMK8ttKfsG6BzBcmUnB69Nrh9yHAJbMEXjGXx2U9qmPfuziYcX364iHogFJVH2DGF",
  "key32": "RStokaeMb3wcaL4SKn2iNddpEJU2fthRaEU2PAWnXZdXLjmAL56MeCHpS2KAvVuWz5VyNobB84BSsCkvRmEYL24",
  "key33": "2xY3ZHBa8YHG6xf1BLcm6tod7NB5J5bCvBzc5PyAjtuMN5LWhC2R7V8Y6sqAAx588P2xEVrv3HyfMRUxRathsGZu",
  "key34": "2dZzw5Jff98zYE8TywCaNaaBQLwbNVtgx8En4o6SAnLzsWjpLP4UDmdTJZ3ttaoep52vVYDmLKwaEGjACVJm3io9",
  "key35": "2U7uZ9zjVrgXaqk9m2MHJFKEVzMRszVxqfGto9eKZ2B6HnRNYGNPH1F7dPgWHZ6aviTsz8vkJLqKmBSPrqKfofnL",
  "key36": "3E5XEq141vveQgopConeS7scLDUivFseev1ZLyaM2QXhjpBtHdgDxZLt4HFLyfzkHAePp9y6QRZeZUPnHhNvHqrn",
  "key37": "85gK8AaFN4xUP2ToN9buDwi9EV7eWqJHTWdeKKiWRiGRJGMDFNuRnfkwZfqaTrrHb8XhSxiWyYE6Hg3JCGK2Ki7",
  "key38": "bNi6v7PcMzyJg5BfDv5ZcZQp4Dsz48u8Zdaq7aWFyBmrSvzZJCPwjZCchZA5DSAEyTFeG7dKXrf8p4UDngm4EVU",
  "key39": "jjherXQ5TvEQgPYMLjjwHRMhcfpxiVVsdBzGHqq8RWvAbXdmSeXe5kNLTQoXdBuKkVk7T8XjkzSoG5v36avFGa9",
  "key40": "4awVU9rrAwrTH5RDTnjzcsX47hL3P7tLLdqrWNaq5qoA5UQqK1dYyLaBHgEfbJynj9u3TgHpR1vpPkB9ap5MnSb9",
  "key41": "5MqvmnE2AfhwdXtPrCfyDR2mxRdpDcXXMdtEj9zSGK4UZ5JGjUS29ApbKRH3ihSMvBN5JjMWq2iWuG3JbExKsyRk",
  "key42": "4QRhCq9jQS53uBTFoGBzJzMLu94iZYVCMFgEu6HywJyDZJb6mEw9ggWUEUsQDAKKUTpQb6Gz7X7numuVbABmwpGa",
  "key43": "5CmFZADUcSHaXBC4g8htQiEY7AWU493zbZkjrhqAdGZZhDofVbMFPLZc3XDwbQWsBQEQw5uKEx9eym9VCcWTdg26",
  "key44": "PLDU1Fjmh3q4irkxSFrfZKSA37e7Te2y7XgJsr2HWp3zwgMpHtsRvoH3gQqANoKcjHFbo8wYBs25yRHriqhakzB",
  "key45": "5zo7LxkLHefW1eWF3v5jfD67oKdxveWbGLy3F58xGMNg9hDh7wxwidGNnn1R77Cs3BvxJjHNm9X64rwncSmfFCW1",
  "key46": "fAgg3EfwREyQbwbbZXX39dDygdVaigBbNy9C3z8hRFRmNH8D8QsTH9ekPvN6FLx6fwofHxs25p8aD1vFoT5NzX1",
  "key47": "2QgnMz45xXkhQQ5insq5MDZ5htWJu7qguip2jsFdAw87qW1e5qw9YiK2gxwAmeWoKeM7JUZJ475w4HbA3YhbY5oR",
  "key48": "2q6UYt9bnsrFcLvsSx8A8tPZRXhXXP2i7a4zc2FMm5L3HEtxnYRbwPZProizLcGZJAQpqbrELrPDtLZcYaPv8YSr",
  "key49": "64sh1ascCkmWXrKFz1DM9V5E1isBussS9Pp9pYDCjKoJQkdzQtWjrPyQu9mZUU6oKJEWAX1ndwTQcBZKW8BkjW3P"
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
