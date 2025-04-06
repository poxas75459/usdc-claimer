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
    "53ud3BUjbLCbXcmfk64GDqxjPQL1MqdpZer94WD8oqcUjYVmjWDheuEfdNY2SMnXvuCWoN2fHUA2D9G2ptWB6UcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d9u74LSPJwv5eis8CKpJhbJm6AQpuRiUzfsVP8gHL9isc5zSMLrQPc5cSiA9N9cp4uGsxRZkkTi4q7cHApmNtwJ",
  "key1": "BSoXrD4t6H9WDmuWegYEshgKhYSm6ymZPZHn4eMgUBSRgBTHAscCMmLgKYNtdQCKZ9VdP6EQfZrGvYv8V69A5bU",
  "key2": "5MAEsfLE5TZC9wMdGWznVQ7E4uYEbSACkCcTtBALgVsciJnzBJFJYG8KYT1dixQySWN1ojago2N4tQvjhSe1etSw",
  "key3": "4YhktKwKoREVQHpxGLrQuQjU894zc9N1SC2e9PW17aBSA94nsntvuXeh9Kdk45tefw3T6Q99oLE82iN85NQ1F27Y",
  "key4": "cyKWxtK7yxfqVZPJJrZRNRQmfFXaULteWxbxFZ7tCWTxtBLDeydywZ7zEVUAeEfvqGUVeFQLTSCjbiQN5HAdD9y",
  "key5": "63tWhT8uBNVxJXY4s8wa9faNJcdcNe1JwKzTpjsoNgCLg9GTvo6JJSdFPFFLnud1J6FtsdS7ystt2xvhm7BGGTKo",
  "key6": "4yWFQkKCvKRPPJH5vcGRRykY4PasT66MqoGXYArUvNAjkjtDuFP6g5Jj2GKbQatUtLB2coB6akNEYhXVFT2FsPHR",
  "key7": "5BcuEwmsFCsDPYLG6aRbC6AjbD37RNffbrFaPGanz3xQUyihUm8iphoxtQc461vkr7P5zL3cz97xGLQeiE2qH19X",
  "key8": "4H1KAb7HPCJGVBHxTsYzbMV8ZCLumU6eHNZTGnCbM4MY2XaNr1gqrnozVuZTxLG2SUwHCNCTR7fjEojGVppf4fpN",
  "key9": "2XgNxqb1vhXRJu3xL59bWTa3RomVZLjAGUJJvf1QQmjVkRHtoz3mKx2aYQHLSrXswHz5gwM1D2ijpgWZBxej45EC",
  "key10": "2d77c88Cx2nQy5jKMaciQayWuwshacaghRrnhekK8i1mkApnBcim4APLs1Vfeuu92fLGyXXCLySL7TvywcXa3q2w",
  "key11": "2ugdB22UMSE9BgnYsLSSeJfjUTPqMnmWDuVLpaX7fVMDdsXypJwUgFVq6GnQt2trT7qrwQL4FPAqJK78eA6Ya4r8",
  "key12": "fjLtap2NMnFVzLHeQ3YnMeKstgUj3Z4CNm1QoGEPbS9o7a54adkD2F3VzL1fhXgCEXsMVAs32UkEc8T1KdoRq2e",
  "key13": "XzZfu2jGXQdnFH5zpsP7hdX6QMUvfwATwMKFLfMnsXhBqi4NnAd4AroLKiYR883Ce4EWv6UKjiswaeLrTcSW4y7",
  "key14": "3FcXY2zVNgKSpKgTtYsRnaHJP8uiU2XVGmEBt31zbzYNaQBtVVZLenUJHJKnyWvPgkeVrV1VPfmaAze6YPgdifY6",
  "key15": "2LkuMKjZZJzr3iAA1DJZu3PHZm19ah7zU6kLcdAomYCtCNbkCLvS4qqL7TV2ZtvAUJnTMQ33cXLPnGXWunmwcSVC",
  "key16": "4ZdLKfigqucb9obN9sKff7MCPsgo6RihRG7o3BDXAZyQJEmyDvgLYjYUhewG2WWPe7YbkaA5YkonDtWxinF9j7vg",
  "key17": "4cN8EZjQAjQ79LMuQPaXeMrvScxVhpm7b4qRU2VfwLg9MqppDuuxrw6x9vArD35qCK4h3cNzD8wJawJAyB6yDwGY",
  "key18": "2r5x6u8VhLtsQsi2BV54bGgUAYpdUYcKq3cbhP6F7qzGF4okKKCL4jeimj8oCJv6zR8ocHXk77KYwPHQsrhxRpZa",
  "key19": "4sttqs3FCviQvM3bvSvjJJnCcRhh3JC1juu4ksBr8HWYh8yim538XWV47qzRCtGHKU2LBykqh3pF6rBLbUUnjWUj",
  "key20": "4W21MJ8txrTfKQRQKuAsRSXBGftjb9mH11BocUpWbVpva2dYLUcKvq8godEYjSrnQNm8NXH7b8peGRAubgnpjYJv",
  "key21": "5QDAbY9z39XXfxSMd5BMxevUGXvT1RMaQ3irbfXqwMUxbPUkFZzPJMGbcsqJhXHHT5U9JoTvMGLVdX4bwDdBbktf",
  "key22": "2LTzpmKxZ3ygYsm1RhcijH8LeAXdqEPbgguXKUFveT6nwaccvNDHNd59b78dwVtyHHdYsS4MpLN2RcmzJ23hhJvL",
  "key23": "3D5NFuX4nNs6cuXdMV8Y87zTcnpKALBFJNJaw8MzRTXR9qHFPhFfsY7Jo5fiQ2TadXxXFPpCEfERBkA6wXZvajtY",
  "key24": "2HSAHitthRW5tGsBnspzCdYnYAQtjJTKXjjDgh4Qva6cVtumS3oTbwDwP1mJRzsCfbUv92GTcPrqMF1W2bdvcr13",
  "key25": "2UNUkbkj9SSxnni9to8eERMhvtoLx6NbQQcTqmGmnZVCjn9H6qM3KE9GnmGe8vHFNcXYTbgFTVTMwpDrEVt59si7",
  "key26": "3Vh5SPJT9BCw9XgY9XvQCtC9r1cfhp4cjcrwJc8N6q8W5qtBTnoQx5RUZwYorzAWWZS5NoirwYj49Fn7eMiUQHGY",
  "key27": "5GRpvk6aYWckVBvMtqtryiX6AEXKGXud6R4axqcwDXs3nkiE2QiP1ruYYi3uSYhpm4z2Za2f3s4cbZEygdKz8e9x",
  "key28": "3DRetxhLXraADrT3sqjuWSoQRBtB3TKjbuu7APXvQWCT8yZCDmZG8CXeQCvwCzPcCsiPF5tQsYn9669Z3ibd7LHF",
  "key29": "j8cBBjEJKZLNupYjrj8cMSz19LsST4gma76iRGCenGfWGMNySMxMFVZ71U4QbCKX9WQMmcFVjC9JsAzzGoWw6Mi",
  "key30": "5dwC3w6iEebTadC55E4nd8yEy8aiwpHLHZG7AD5amZ851CMaVDs8hWXdgUq8W3b2LjvzYcnmVZArfwnV1HhSnJvP",
  "key31": "53cw98sNxS9Pwbk7XvJETVhqq2EDm8C41BVz8XSLzaRyTC6Aj8P3GizBVYfccXcwE9cR1hbhYLTwdsFf1DQsxQda",
  "key32": "4jjb6id19GmMkqEGUJGWiVH5tiBjSmES7YmMiRjTr6RVbSymbF9fL5xtKKhNYb7WLLYBXYYEBrDHv2r8ocVsH76n",
  "key33": "3dJQFfvcffVJfHUx3go3gFsbnsueua94JM4FHZZBsGB1KPW1CXcfkLhv9PMhdXLmFncpKeufZR1nCsZcfUXbaF6V",
  "key34": "57QojE4wFaynBwURexCZWxxhueAthLv1qDjRgZb9X1XuTPhb9QtZVRXgLy7U6StD6npsZc8spokXAdm1oNKE3Wk6",
  "key35": "4MdCH36gymGkTaJXaSto9QEuqUBr1oNzvVjWZhJC87xBuAm7tjieKpHNdKq4sTNr4vfuSHhXDVNudQF1irjk6qCk",
  "key36": "66LrumJoB9kyAcZJUXDPgcsyK6hvTKBvcN6LL3DFqXn19VGLgknNZ7vaGJmX2mCpmYnkhN1m4CkgHpZy65eacjLM",
  "key37": "5a2y99udAyV7XxAXEcXTtJZ1u2UuXLtpzbfZUELXRrCMQKAZHM4hiWio2VjyGq3bsp9BFyY4JTSDNyT4tj4qHUeS",
  "key38": "3Pix88AT7CFAs89VsyECG2oeyCER4m9zpmLPrrJtTMGTQnonTj2bMefanRsAEQnvuAXYLnjq4b5hkGdmWyCSkfo4",
  "key39": "2UEXNasKsT4oPGQQY6MjZftHvmkgwFpyhLhQ51vz82ZyiXgLxU1BUZsxtpCzPEp255shSLSTdCpCVCEcA2DUP6YH",
  "key40": "5TuS5ywRkbzt9S4NmY8yPSLm7n5wZfHC5xa2kkLBjptLD1Z6ej2by4JHSKmzpAFjYxCazBR1ygMAE1t9cs78hMu6",
  "key41": "4vHihrHFkMMY7cdzgyv9WLG1AkrtKo5oobH77BinSYEze6i2FHJGTvmNooxXVRj4Zemm3YetaAvihGcXzfd5dxDv",
  "key42": "2pBnvUScnZNRiJY7mmacTqXpqW9PwDZQF22grqptcYHchHqTnd1yNiKHD1QGJeVFWp5Q6vwkMeEARwwpYnPrNsHe"
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
