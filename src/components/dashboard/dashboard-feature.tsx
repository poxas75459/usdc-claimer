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
    "26vHBv5w6yRZSRVxZDYEz2H3mbLUaS7Veb1mqU77kd9UCHiMMWQHz3h8WZugC7B2kWrwkMCAZHj9V3R1Tpo8wWRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Paf5ZMVsKLFWSPe9zgRToMWroBq2ATPAAbgajaxmePpUfEC8hVh54Y6m3tgupgL6JDDH1t2t3ZTPFSVtjyTCfL6",
  "key1": "2tQktEKRiLGMibH9YEqVtgNzXaEgLEhdnAgE7T2Kue2M9YdKunhcxsAccs6njMJA4rriR6zzkD2WPAXcthVXnKMS",
  "key2": "3V3mk5o5tLK6j5uJHHoZFWR31HStAbUGwzEedioLGYJ5pyKoZYk24fxBJJTxYMbtLhqYv4PYPisizPAm1eRsDzbo",
  "key3": "56U3DQUPRnXtaia4nZMaVPbVQ4CigAqaUkSva4Ni8UqdZcRP9V1ibMdqRbxxJe3DKKARRhDcuTpB9RbEXaXgMhZy",
  "key4": "T8LyTCt6DmdeYqU5cEqhqoq3HB9gnnbpp3GpZGxjVuLUDZtDqCQbcQU5mJLDyiyZSyhz1KTKzfLnu5W4UW3yxom",
  "key5": "4s2nvgCCVp3o66jsHuMinCzMjWwSE9XPQbSZcMrBnn8YknQw29CYSbyBP96TexJ9sPzH2Uu7AuiyhViRFHnQBhC8",
  "key6": "5eJHHhVLTf2m7SWFFJK6kcPJEZ1tVQqSeVPUy7PreFjvqtboTzJZgprAc8w5QUA2Qbt69prRqohUHbJjrrsAnyi8",
  "key7": "efTMb89rqQjDdj7YmVY9j5HZd4XVwGMzWUQoE4PqNrtT5ZDnvxwzKNCezwBmPppffgtxuNCgjnJW2gY8deprbAe",
  "key8": "95dcU3Xf8QTfBiBX5m2sLs2yfD5S8BmZxdeHJpR6zPUK5ZkGxEP928H7TZXgcMRfqS2B9kFSVJiC7DTFmHmQA4B",
  "key9": "2TBDpknQcUNq3UeqpWiRdTx1TC2NTpKBKe8CMQqPVW3VPiHv71kujMUadiY9TBKveQuLgn5b1bd9yHTRk38vLu9H",
  "key10": "2Uq3TvPUG92waj5KzdwAByxzs4xCn8qbMcanA9a6vbgcaFo7vzNdXt5EPdK2foUc37BvzryY8ffNT6zJHaKPUzhi",
  "key11": "5cR293bbDLR1Sgm2ELJ9MuLcFj3BFqCWfMMAEZ8GAxrbkQg7ogN16uw3Gb5t4zbdGbhtL3yAW8aRuma5hSM7Aj1J",
  "key12": "ZTuUkQZUCnKzUUeZRpu4zYpWDzXsHpQs3647Y8Uqayx6TMJJjaVpLCg2UiKzVJnewjS1M8JQWziYMgyHHByPkac",
  "key13": "48MimTrfZUdH75Nax9cfSfXPMgfk3dCcWxPL6KAjpTi2aij5rty6pAxoz8wv442sXAaxSWUkwsEsmWiKEMnocL9t",
  "key14": "5t11AFcw8ZcjxcaPqVytvaVhq8Nij4bUFg3A5EKkUvTGE5nhqPggRd4aZwYX5ZeQS8EqiTmoWidBedXZNBKzzLFw",
  "key15": "3p1yvGp8n7BSzX96wB3rWj7WdXnDRZhfw4SsetSNygwdhp9m6ze8H2E7wDKTLcZkGgm69ks2wvbXEtADhey7LeZV",
  "key16": "3jaUATCu8eURbdVuXNbHQbm6kZ4ihGCngmYsCiAzHeAUtNY1GEJqTSqyBZd3zM7tNeRwA2hDAoBKQkNCb4eU2mqx",
  "key17": "2YLZuKco9XHcmsS2AYio7AnhG7hJ66pcfpfNtRikqeTtQSNcmcnA9QUFGoNgYD3TKMWs2aVrxXBtLeWFRw4ahoL1",
  "key18": "2ZUw3mAcDytfnHGTogCP95Y3gseZDzZsfaPTsASKN1RZeEauRFUQLZcZLzdjJRVpYpx9FUmSmQyem9fiTqNew96v",
  "key19": "4XPW8iWz5v4uHz1Wr845dYDawVcDYJTPh5qvVoT4egT6xZMmYK9mGahqSo1eiic4FmWnCmN2bs3vGpzdekLwzJhh",
  "key20": "22DhBmwfDdzk6PiAr1s8XEbiYFwKJ8d6aPYUpZu4Hohrm5YZNCKVcUXZWpUrzzhWSgjYVTAM3BLmkqVtwdxhBVje",
  "key21": "3q1sqzSQfdo3MCbrSHsB39bgGS3S8UbKPAjruVDwhwEx65VQaz6bbU2rpo8uTnESWeArtvWPZmWTTkhYgsnf2McB",
  "key22": "4YC7cwaMQwwhr3uM2UTNqFLg9fEdGuFFqXqYAJnJZGSwen7QoRuSAiPhYM6pnLg7PcmaPyeU6Gf7MMAE4tH1WpAC",
  "key23": "2usdoMfFtCb4XaoCNibvBwYV6btKdYmpbprjnaY4m37g3d1rMputfbcVzYe8XyWaFGxRHZA4VcZpQAAdxfuPtUzP",
  "key24": "2y6fNUix4QUoHwoMYcsCk5ANPqFP9qKqQXoBj96QuaiXMyg1jyxNXawLqBG3h6stYpV5JhTw5tN79XAZcvHQ6Uur",
  "key25": "4MvhFC58KdH5wZFbuZAq9mpipzXiYWGwEh2ztzrxXwht8S5PTJMdPq586n1a6Rext4RioQddHxBcLtZSKnkm9xcG",
  "key26": "4LratnEQ5nNaw5g8DsgHibZ8TD4ezPfAymvWyaB5k3gRkuqTZHXyEmNAkeZAGGX4qVvtw26siWbMpyxFhT9No4BV",
  "key27": "2xpEiQszJHc3vB3j9JpmxeUtxJ1ddMa6rFjvjhNrTCNTY2KmLMNjduDBkbbcGoCCgVfbmNTpNj6fHtfegH9MdePo",
  "key28": "4gUYyc2F1gAfbEfnqeZTc1H5ohE8dfM2u5kSn2QyeWsXnE7q6Z6FaAxDABscuFPFVdemVN9JYgRTkVmBfGp2i47C",
  "key29": "5Kk6nSmGhjJr2K9PVkKMgpLnUKV6uvrhiQtkLkjevV3mHg3nZ169URbJKfwntogyiEoW61Dkn363JkMNP6E3xLYV",
  "key30": "5mUHiXinapd2121rNcXsYTm4qDdggKKAu6i5ccsoSxfhrx1jvMCfvM3w4x5fHHx6CZmmdZZruaS6nbGQzDeAEsf2",
  "key31": "4PvJnGCnpFNWQ3LSDtZjnA3rotyRsP4UGufQFECGC5qikzhWg1MHXG7dphehVQMe6KTtBCapvXvVfabm9KEuihNN",
  "key32": "3S7Xuh5GH9K9gMex5vB2mgeBntTkNnGM7kekhsFAFrkJEti4WNWPXosSL4HMPtEcprZPikXfaRMBxk2R7KZDYZqf",
  "key33": "5oyGLhv29PwZE7iqBKo5LFiYeWWFkNZjvnijjzM8ubUzRZRcLSzdsYmkh6FBdQGPL2R8NKodSdoEagi1iPXabBtD",
  "key34": "fm6gRagJAdhLYhbYPFyywi7F7pejjk1Z7ACMqgmRhBxUs6NaeNh8o3kA2ZbcmqAYi7uiU2Dw8poRWKwhdvZTzp4",
  "key35": "4jeDKSH1yKfftp5v2mnaZo3ym8eoUXZa1GsBf8EaHUfUdWbPFH4q9Ua5bxy8A2eckzHzeT2UNLi5V2tgLzsxw43a",
  "key36": "4pp4LJCXouR66upLvefM8MjGex1YYGYt8E8HbcyLhWYtEjzQcoDvTHM98xCZyW4ukbNaBvRMwJY5phfzDiS15w37",
  "key37": "2wimjwYqzERLUJZ2eJyP5ga4beQiXbShVbeSW8LLLLZvk1i7eU7EeTsbo9pD76k9f4qG7KhN2AFLhkfHSJLxGaf9",
  "key38": "4UZc2YA7PsAJiQNTQBg995UmDDdGx1yMGUuEjQj4pGceQSxWWddgtSYBAQpEfJNgC6n5mrP5gapeheZWsJsRsDjr",
  "key39": "2xj5edUiBK24CtPFvuKtXXTq7jdLt8kWep1F1zEQd5CZQZoxHQpizLYK9TJhwa2ckNQYL4RtmutGcdyXhjGNPtYH",
  "key40": "2vidLbxtjhxmEZK93dNVpiVgMLhWPomF4h4gNzPKxYgTtKJfb1c6SBum88bx9mWLj588eWxs65j47ayiF4oz2wiF",
  "key41": "347puiSondffZnpTdnFwbvJiZQ5SKYMkUDwuYVJYekMCBWnk4twiQ7f3kHAmTdJJv5VY16J19BM1Ag4qsVooTehB",
  "key42": "5JXVq3yg4iRMijE882ht4TZh6V1pkDiLpsuURitFu2pKqJtPMnEAabVoRvk4My6DjFW92GFHSrhvi5WRzPjgdJsw",
  "key43": "3JuFhFCutaxF3aZRdRN4ptCcS8APQrRq88L1cKfCSBGBcXbRttsuo2H9sQ7ggMGoeS6P29mdSh8EPrvNBhLfTurK",
  "key44": "3RwD6P2C6zLi2rVVDvEkU2RBY9bAQXGKfDnUySLP23JzkpGzHQbsYbkcBw3JMCATakdGh5h1ceMfAsD6QYi3SLj5",
  "key45": "3fYAdQBUDdVpLnKiC1FaZwNxBqYAXsZ3M3iEnNt1QaKvobgqMgxrsEVmtE8uD8ifdnFCWUDERRfYAfec8FtTtgZv"
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
