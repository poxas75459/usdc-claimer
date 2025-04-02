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
    "K7s2qXYG6NCGtoUJ1ycpAxt5DXyvjMhzdb7nx1W5nr7dPogKRmnetadHZf6diS1gK5yjRj1KrkgTmUVsUrw6cNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmkHbMivHUugWmK57nLPedSP24UEHYoaK7TRJmP4WRYgSGwrV6Q5FgqT2HwJGtzAnmXZ35vjEukrKKrBhBGZRYH",
  "key1": "2CaZ5apoAbt5VtKEaN5RF15LYRLMvZwwSVgv8hupNazoJ3VRtbp24w4sc5i9amj89PbhEJQKX1rLxu6q4UXivFn7",
  "key2": "5tTVas7Ua9gui8YwhZbw2UKRcthPGLKzrAXmAyFNC26X3DjKX9LMqTAsjZYHbvtUS1fVpivmt5kDHdgKmcrKhaS9",
  "key3": "2U1VoEoV7LTMHzFwYwnXYbb9yTbeqgpNDCdXGRxyQc3aXaojcLGgqd3NNaiEcGqU72Wu89CmVo4BRu2TSofUj7Sn",
  "key4": "5Jhn7HVQrYUBkvDnMYHj2R2yjHvYmh5iQTMgfVFb1S9mfAjqGpgmCe4PdiiThRnSeKg1qEufscoQ1jLrPmcC2P7h",
  "key5": "KGZ87FhV8uDX9TQeG1iWK5SuVEEkXAawVCBaueTidHaSdzour9CtsWGviB24A1WPZTYuZDycjSQeopoaxHWhhxE",
  "key6": "5bxV9FPiNzqBLbbBq1P5g7US2e2MwyZ2hvx8Do6W4RwPiivEzFm2v8nGySnE1htQL6sutfLrQLFnGDy6NUe3NVmo",
  "key7": "3uk8oXCom99h2jBr6SyTmmw183itmxUvdgGcypa2M2BXyoyiQwtbNBSszD1KYhyWevkgUX8wBu6osGh3gG7FU3BC",
  "key8": "3CSDvsGwhUkguSrS39FqSmvKantFfzgXyJTHPMX4yCMmNaWvyXxu7oe61eeq9Kr64gEd9iV6NYbCThKftZQvMqcK",
  "key9": "33Z5QmnuxKPMktnTiY6LUvXsBRW6nxQ7yQCYnjb65Qs5nQA2yuKuP2eu49x8eYR7TEVv9cCjUL8qtwfGtu3Vri8U",
  "key10": "wuUF2iAM7iLxbUgNs3Lbbj8gYHACbwigmxnDsLF8FMF4oNgtasTvqAE9VgRxbgsRHjN2jR4MsybB8ms1SnVTPjm",
  "key11": "5q6FAr5AiDSxo2gvBh7XffgecVzhQxnpJPh1Xm72t2h5bPzPDbhXiUkT5RYgr7hULMUtCUMzmAjo9cRGagH74M75",
  "key12": "2bwoRy42tkAnTbebrrpEeSuM4mrgJWzqj3aMK3TRG7dawryY1zmUbr5dRqNu8ftgL2xjhd6icUeLNGyJSA6oJP5u",
  "key13": "4G3T5MF7jRmhTky3JCDwxN6RnwQ6oi8ghxktZeueDCgGuHCxRh54iiQ2oMjB7aWEEiChPoe2HzFcNx3CAEg9sTME",
  "key14": "2zrUpC8YrbsKoPQjzX47hJF7f5hXh411CZ8zFaB8iHaFZeyaeQSaXBrpaLkTTvwYXBRBQm3sthCRuJmRqa5KdXJn",
  "key15": "5NAK4khZGHPeUVeUiHth5fujCFCAEeGBahWNt8eBtAJC8EJfTGQTyLp2HuKbsgjxgK5F9aDKCNbZ4v7jtXdK3xnA",
  "key16": "4jrJ8fF8MoAzXc8sDMgg7qCcW9kTQ43uReQw92DwfBNx9BBH5jh1mPpnPfi4gKUF94Ta6eAemYFqY5g3ARxutoDY",
  "key17": "35oqcuhTsWhPp8XyPCHrnXC7VJeBZtEgmH7EMvNwDufMqehghbB49XaHUx7QWrm1fTtFR3rzjDgZa3pdTSfnsTQH",
  "key18": "43Lcitk2GWgUmMxGqa2bd22mTeHJVDGmhTXeucP3P55ymBj8N3sPgLBZouZcgRfzJuPs9eyNoQxabnnHY483cMCP",
  "key19": "4Tb43Yv8LBh4n2YyeUbe47JNXMpYoEkpcZAZvJwLbiYNoet4zyKvVMNcxe4japGpjFVcLepokvmyrmLshtJenzip",
  "key20": "4k5AkCXUaCMxjNj4uxtBFfSAyjk1FKiymnSACdQBfEZCWB7CcL4zBXQWEgNLvTZifu7iG441V82j6JFDZT14r4ne",
  "key21": "4zabcLV1NwFgJeV2DfjgaHpv2xWAwSaZS6xpnYq6pAYPFZQp8rNmkL7RiKnhR58WocD8FGTxcngb3n87UtC4BYLy",
  "key22": "63WNbr2p9ioHW23g97sBk417J2kkP5Z2wHgvg1pmJFyz7gwoFDSppnqhUyVRhca3A8CCe6KrhNQyrzPqmbY4zbGQ",
  "key23": "Q9EJnTxWr8zjxbibBFJtwXv15vhNBv8pSN1sfeZEH4VMS8928iyxhqs4FxcN9oD5zz4finzLdsxT7rRPD5HAoN8",
  "key24": "qa5tCWtEs4KwkFH4tVbdibxMcssRyC9YDab7RWkT5AVV73BzTUm8NrnmEXzMyMBRcUWsJSmgHXiUkSyXepj8cTD",
  "key25": "4nDu59ffPTVFgxEVwQaWzZtLiXjvy6H9DGMGQYkmkHxNwbtsdN79QdFiT7xsyn5EMfPkk8WQNSXe63meZUcbNyzn",
  "key26": "3oRWe4F8eNJWjvKmd7v7kTA5eHVL3jYehrnuHr3myJZz4yBmbRLepW3SSDwkctKCUx7YHVS1Q2mC4SzVbUF1raxV",
  "key27": "22Le2DwKqMCFKBcooLEGroW8iGrKZ3V8thu5kjQt9rZpFQeBssNrJ6dqwPhaSRqtXTbG523HS7WtxXyxLY8bgJPF",
  "key28": "4yqeFrEDd7vGU1pmNiei9SCfv5A347o1nNAdU39qdRchYBBzzDv9KStCZoMBXfBjs8w7XwAqrazk5Zpc8FAobSsE",
  "key29": "2sMHCLyx6sW9QBzUgnnR3c7TQV2Qzo36reCuS1nLsyUxF4pBsQ69vNfgYw5CHwJ9uqbieaAsCYGC4xLwsMKjyk9c",
  "key30": "2gtAdYU1SoZ95RFMYGFwVNGLtChvzcqiPsBcPm8WEcMApoESspt8LgLVg1cta2pZdJkX6Jh5MpQUEk2FYy2giLSi",
  "key31": "37ytgXJKVPLqsr8yK2B8haR3bTjpGu1D1AksYyg65wA9ijPjCBDNB5ie4mPcZdUebB4HN9s5r4TkMs4Di884cXCK",
  "key32": "2BKLbqURDWMJnLtz6JUUk8GMHsJ3zZ6pTov7cHT9JiSZsdGQqZtP9bLs28JKZooxacbJNB8n8pfAZ6sqjXmHL4JS",
  "key33": "5fzPQ3aLhynpagJbAXvP1HsxnsDUkoCGg9J475db1G6no8TSi17TqRsWHUijY6nEHXf1E8YPBVj27eQVqbzMPaoX",
  "key34": "38hQ4h5hnxYGECMGhbV1BBsgUkqgSvTtrFssbcUCW9qthDFwhBePBJLCNYrQJ6sXt5QAorBmbnag7oKmtmrq1cXe",
  "key35": "5VPkApwbiC2igAzoUYrNwcsNU6ZU6X7PENhkQpzXePMFwyaNRc3Gpjgx1T5KsAPC2dAUJyzTf7vJmQzYhb5gKa6h",
  "key36": "2PyJ5C9cdM25KoVpBnTWqUPizLhurAZ2WmNX7VCkovckCNR5zdCAgaeq78Jj7fW7Zs8Y7V4opjcv9N3CtHKX5cPY",
  "key37": "KkE7ufr1WCh5fC5kr3haQ9qVK3jdJYJaaZNb6vPmz6F3MhqHT1t1Y73FTHp8DFJEGpf5qKfhxsDcYabUawdgUig",
  "key38": "4sfZq3yvJ7xEzG1J2khoUWQEAFQ7mTK7YsWLvBRBtkPW5w6jrjyc1E9ctn3WcnBKUZgmRubwUX2xrAUF4NnhRXWf",
  "key39": "21my9XwjZ7bh4tYCj8rubY6PZgj2z6a6K6qvMFZ9MsF5YJRjJp7JmmZHZTccGBFWW48AzHhAiABXJC5jMfc98Gj9",
  "key40": "xtFiHKe4VeeWacZq6WJUF5xkcNwsA9S4wWHNmbAJMiX5Yv8gKbUoD8kLW7QU4pLWh91RTu3CPeXzB61VqdfVq7V",
  "key41": "3ZtGRCHabwvLmpGpLyyJZ1mzvie278DX3ZBtrztZ5PNbEzkMQ3kFW3vvs6xiQ55CnqY3uqrVqmN3dGmobveDmDSK",
  "key42": "5RY7tT9cw4nbeYs2txUWR4rizkRWHD5p2WREEkPxVJNAnsbbHpMcPZmpGQAHeKKEjHxW2Ubc34BQssex2FiwJ4Bf",
  "key43": "4rgBSmXmMnVu9FRPA1dD5WkCz8Hyz25sThy7x7puP5HBFRJ3SMGUuzr8sjPXNCQSnWD17qKVx8WBzbMWRnzokw3b",
  "key44": "5utY2FJSd47m12pDduZtija7ghALfAJhLMRY4rjKcLwAvpqm88712gKsQyPny2MDZRTJT1EfhkwTeCLb9pkr2pKf"
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
