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
    "514ZE7NucdK8yywrssDyeB3weKBqwLTrTcmhC7WjH8nEYvXNvZxNSStAnT16cY6F2T6M7r2vNwaCZ9UMkNLS5PwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSPKR3pZZaZPohfYGk4ig9yVonX9ff8ch5hhvbUY6Sm1FmHqFwcTR2DtEd9V5L3nZogcdshMRpyVxQoYdirNf9Q",
  "key1": "27mCt9xDjzvEyGbusoEXpohRR3Fq8yyJKP3CcqfyuZ5XfdgqccUD4ZzXJb3MEV5C811iMbG4WA9mbPewyj8xEYyJ",
  "key2": "3BZrz3PLCTHZscnZjoMmRN7jzHR4NdR2TBypWPEHYCQn32cSudL41S2cLw7khcjPZ7Ndk9a6PhxCdGWb28EZVaE",
  "key3": "2x4JUTPnWX8huYFrcNjTmBPV4cEwqN7pnBgCnKfQ9pw1EXsZqXH6EPSWTQJZQXLrmCAsbdgH6hYAeVHT41vVhqmc",
  "key4": "3TR7eX3pLNuDP3Xm7u9ZwQis9etLKtvVgXJaDXRiancBYBhEEudZZh1SQGYR8VdJzRfkubCBmEu76zEB6Scwxt1i",
  "key5": "4kNHTQLZp8b7jf9b9u8mG89pvfxRToWN859sFYhwxmSp13zzWakj23vY1T3mqRvXc9a1pB7XmXmhzvbtArutTvUA",
  "key6": "5qvfHsjXBfZktWX3q6VDDp9u7N9PZticRk3CqVJfxKVtg9ep2NN7sLuhAmwCknPyQNzc3DHNqjAtWvxxjJJReHi2",
  "key7": "3ehNBZL2S9d1NA2MUc3jMSCDnvCowDnESgCNqCmMe42EQioo5bVrhZo7sL1CV5yQ4AxuLb31BfnB11yssMEJiSkD",
  "key8": "5nRu3mBwaD3UPat1dXM2nvVo92nLXBuWXr7VPN8sXeuBn9XBA3weJSGGycUA8oUTZFS3bY1d5uCCVkJYkyfhkW66",
  "key9": "4dWHawtbqam7PZ3pqSoA9sLmsj2EsCbfnvwjSp12D37mw1mPAdT8R4m4YypWBqxGBYVY9F6PXPK2JxWWHDhLJLF9",
  "key10": "B1RsuxBoaYpax3c95gaXZbRMYf4xUCzvWSN3DcZFufH8dgjTqAHbA3Xy8Zh5FPQQtYAomMmW4NDHUnn3AYM8eGL",
  "key11": "4sFtwzKqWgjUcbMEpY7nHDUebg2Eu4h4jP6kVjgsreGyXi5fXv6qRZHrQv1nzBm7yTVcbe1tDSjHwdZpkpRv8QZQ",
  "key12": "4D3wua6URkHGRjgZ4MmJhkjdrnfcpkqDjx772PxTWWcVn9RGUR6JWJ4384fJwCjVrYoJss4sMAgDwDgeXRzW9nNj",
  "key13": "3SUFbDZyFuiRuFYuqG3WoCiCP3cnQvRqRPDBNRf1CNc1gaA9FddBfUFv2mfH9NTNfVfsDLaFmSVFfKyhWcYYQPAo",
  "key14": "PGUsNsxTwmPnePTyXjcjqczoXLgmUmrpCcesesEDzsDWnjDoNU3KGYtUafEv2wTkbK1KxGqVGeFXdML4ipMm5QY",
  "key15": "57L7KcExw1BUNBk4yxwBdytKogE5DNMxuv8JJrLxVpurWwfqphvuovViZHCcxfociA2rAzu8K1tGUKpYtyiYcyJ5",
  "key16": "5x9vQdTftsi3LztALLy1qSddikcg2uNq9aQ3NrcQnQEZoyoheLscLiuaymtyJ3E9Zy6Xm5SHKVHAD3kMsnXVLoYe",
  "key17": "61WqBxNLtuAWtEHcfCTaevBjagMYhSepCVz6qMW4kGNZ93HihyWKJCnRTRmePeSstDvo45mB9RKtScD8C7P47Cbb",
  "key18": "59pRk3yL9f9Ta63JuBVsQXo7WM47h4ppJwe25NuwRpsfaFyjNQWTRaLA4bCc537XYW1ABeMqCBTfRozje4EAoLmn",
  "key19": "Z9VKxSVmoBSmKsxvBHFKrpSek6vgYpt1TfqL1vyb6huf1VVxpB453qDuwYtG9LgsMcVo8FdWrYZFvdgM52tUkwg",
  "key20": "2TN2nnbHh62z6FUiDsppEkZhEuNKXfyiKqoVKWhBQxHMU9jzcncxHpGpeiDRCzzWndkHKfMoAMe7kcUYq3bCGgZH",
  "key21": "2wjsn5YaMxviWfBNvXG9u2Jr2UbPd3YHvdrDPB1i9NoZMuwbn3J9f91DYPiC7cuQjGCVXXeorp9K9jmNsozKP4wf",
  "key22": "36tKhuQSUueuwvqLDnyVtRcrP9jfCGFm83vs3Y5yVknEJfDYTupz5SZrgHw7HirVzXab9wLmJ5p98ZyJQPv6vkjW",
  "key23": "2jkpsFy4XrEgL3zPVs3wVDmuuqVtrYnBT5vg9Vyhw96sWXv7Vs3KnSs6WFggtiv6GNK3kyN5cG5yL9SNgZz587Ci",
  "key24": "5L7bxo2cAhmMRssQiijVnHzJwfKU8zfsX6AHaDZvMfnkQADTMoMj3tYVq8P2th18h9E233H5aJAuTBh47KtpF5vf",
  "key25": "3mQ1uYmpEgLQoSfpjSim29ADdxNybMvuB18s1FfvBqTS8xhT7cVPDUwm8Tnqr3RfeAFHmAsvDN9wwPqZHij6eaRx",
  "key26": "66ekibA3Ug68u4RdjXW9eCz32spSX4QJyp9aCnTUsBfKXGPULERRZn3o8YS9nExCUmn6Y8VAnWVC5daM3i9EkC4t",
  "key27": "2L11TyTpUsFzCovUtFox2Jdtu8eR4zh8mGbGd1D9ap2Dwzwvp1gEVMh8k6CrHbpEAthetdaKnpGFzqeyRH9Gfsmq",
  "key28": "2LFud1Gnt8wyUk2y5Nksuedwip2gvcHbDKWySWLGr77yyWBivSkqqGhR7UtHZH5NmMj5FPWkHj5Cf2xVouhKeGMP",
  "key29": "5ubJNb13S6tYdx3D6HswaBNvaz6czjuh4ADcxqe7WfUumuK9jaVSPZGjVvW9b3S5Lyq6E19AEhxP8AyuSHuL2ePT",
  "key30": "3YFyRvyoZRBcgqnJeAgLm2cmcdTyxte2s8QWF874ChUFNPN2yTPfxdTnUmFdxX6yZCMCXqg1dyJJcR5YUahmtYsb",
  "key31": "3shanVtfMTwH5zymonsDm1cZWpaByctGk3TSWBMUr3jQQ7ekSs9WhBWL93UWyjk4urAWnTYsX28BeiHH67T2ybgi",
  "key32": "wNxFVfnaFbheef2M62NorY8Dh9uzmVcDBmqUESVBLfaNQZK9u5s349RW319GFHAgHafbzq5XJia3og3MsC4qVTM",
  "key33": "57oDFdBzxL7XpG9crHgKULf4zvVSgRsKFRAcvt38osPGZTzKsxQDZmPpBXpFfYvKrrnJbBup75xC3djCpjdLwDFs",
  "key34": "48EwVQLsRZ43C21hcq9W16D6H7SBhbg3eNEWHuzuRdP6GuaPcqJdBQ5m8S5gutwVbg2bWrTp8JrQQTyGyPG7Qe7Y",
  "key35": "4gWMFHScPKi9zXcs7U5q7LJF9k7BYi4HD8jqe5rGqFMWRSp9WcaByLueQg2Af6246QJ98wM6z1FSbZ7Z333YHAVs",
  "key36": "3bQxJmmKev54mAjj4SuYasK6CzawdfbNfgnLp2YgNhr6xFmeWcXHQR6GmFr5Gmh999HiRjBE1WGsK1UH6VHbhwjT",
  "key37": "JeiPN3hMUur65nCoUwsL8tMw6QGKbnta4gWBBj1MMxw4eAam8pzXiecjyDaGYF3iKAYGQUnawEhkwTuLQPB9yjP",
  "key38": "GR1Q73HB7FGsc7NPMJVoTk8xgvNWnJX27WXztTu1hp9hbZvRgnY1KXUtgdNKauw6DbxEHXcVPRSHcEoFi9y4nLK"
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
