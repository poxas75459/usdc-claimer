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
    "5iahAx8NdSxUvb43JmyaeNzNZR6Nr7zzKs5qC7wBKNBT4eywnf4iHRyFcfezmvWXb47ZHiuRy48MtykMFwvNQzDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J7vXJJZVpLPgroGD6GEqWEky8XQRpF7fnBvUVNE3ijMPSxhQPZfYAfytSnUQGWUD7eyiDpiNd3QBg2SXJdYGAsC",
  "key1": "5mA2X2i8onVoG5BqeiK1fuqMxCodLppKfk9Bk35iBLwtwx2aRrm4Yd8xWbmYpQZ7SEKs88NgZHcpsF88XCWkL7Wc",
  "key2": "4qoWXzr2FDMxftJXRYYx8EtVhEU8RpYXntdq1dx3dsKbfNWr84tD9MfeXbf3TAxp7zfZGcuVUQs62qCaXenu6mdU",
  "key3": "3Eympxi2wLbfLaBAYr6Et8dXrnDGTLhsKjJqGz8qDyd6NwYzth78zWnDe3L1FV4qSLK8L9rHjCAQ5gRcsTA67rPo",
  "key4": "4eqEceopqb2G5uKMUazcagjZwXAso5VTby3N175GF3R6knPoYpjx5FpS8vGJDoY8NFG9cPnvhMTVffvR1AzZUXUW",
  "key5": "3oBJzNJpKThMTu2U9LvvPA4JR7KLshMQ5fY4T2WumVGvWFUvGZvULiwiRi7ceK98DHfJgBiYfWewtBg36vTWFe6j",
  "key6": "4d8gaD7AiKYoMriJ8GmgJ2955c3yszCa6jReo6eSeMpSSKZ2pgJhGTMALsufMtvwtyczFf4fFNstX9jg2KB1Pu2J",
  "key7": "bQ4F7UCG4AVZ9jysJwG87tsCr1s1korz3RQqqZGKaww2ympjVrWa1UfNdiw2PM2Rz6G7ZyRZu734oRYaBGJ1Vkf",
  "key8": "468PGdp17xw3gZJmw2EyGVNNDipzDwkeJctGZCtnusYBEScvhd8yjNb43KZCLvTAkWs7xKETXf8TrjKChAT6kmk8",
  "key9": "3jj6a553AfRsp7opu66oYaTg8VDfrfYNfAECNN686HdJt7BbhkWeFjZwrcxJbSoqMqAUvBahJocQ3YmGecsXBNZ8",
  "key10": "5tc8eEESYPwFpuZUL3XfUa2HwqG8ZtGDpPDdAq6aV1i4bbC7E9TNRCinjG8yEAJAsXaagHL6WYW5385GADPf2AZb",
  "key11": "31NViMdxrST8GwgzzyeziQdgQYF9JPP1YBLTGLJfBnFgCV5YYeY4ko9i15LrHGw5Vq6gtPtgXxxxiWiomti8MfVU",
  "key12": "3iWLJCoDhQb69G2wbzGtWiBeX99DQ8vDnDE2yCsgnAVwfoGGaHgL4XZaSVS3G4PASWp7WdS8Gb1orsbSQt6zGP1x",
  "key13": "5aAoPQ7YadUp9HJtrAWBsmj8H8fH6eddSyjh4GGBB4Xb1eQobx9L1RjRjC72DLeMT7N79DLsuR5BgyyhkK71kZM",
  "key14": "4PJaLziuaA7PdwgoxSkw6jv7qrNNyKZegH3dG2ifgJSVxBFoUuz3f5f7296TQhYNdVKNxjWHV61Wf3ontkni6hMF",
  "key15": "4fj6YUpLWKFQDi8xF4CrRJwFeRBrHgWq5gdCeJFMVepsMVeQ1CpsBoA5WLNdnYD4stMarkw2sdd5MrcUXtGo5F91",
  "key16": "2brBUx3yHfABkddTySckaiKqcZWY3tdNvU1gcCabH4bsiVQ9VbEzvmGWrmoSL17SJJR2yxPPGUhKAGbZV1B8kjLg",
  "key17": "3sDike21mBQGLhyDG7f4tEen7ghVQA3yw2hdYk5G7SjRXofPp48sNwb7jBXUkM5jmzpMQbUSqQHBchQe1H9RkEtE",
  "key18": "525beLMHzsa1vjQrvht4NVfhmWYrV56peUAWoxBNahHN6jrGjrv9a3EBBmR9gudcagRaYVdnjVmKBScVDpoJnemq",
  "key19": "3WeZUjgZtfuTJF7izX9h9AZMDapJr2JBUtk2K87cZBqvrhRFC579oHtBhvpPpTFZMZwitZQdkE3apdFSJMAUrPiq",
  "key20": "3VmQ47qVVdicFwjWiB72jr8qAkMAhGbE6eXUhq7MnszVWFcrv2FK3g8xQQLcwRW9PppCSiJZazMJtVSr2zkvEZcm",
  "key21": "32ehK8hggeQP79vY3KaS6kB3BHHsW636KW8Qnvpb7eN1PBBZjKX711sswBHMDsBZHMUor56RQXq8ZPZznxWk1dx",
  "key22": "4Umu1jocifTwcPyqL5XDWw6pwMHMevUTfkoF82WJ3smDeuU4uvse9hSWV4C2JgnZUoW8yj7ckvZhBjvBG3fAqGQK",
  "key23": "2uKteYQjuGJU7skK4obdb3iD6eSVqAavQESXcM4a9uRjH1VhWYagzTw1yw4ubBmutN1VCfRmD5WwUaD3SXeC49WJ",
  "key24": "GEcw2NpsjvCcWhehUU5RxsepqTEQd1mLzWVUcXS1vmo6utt13LXNKStUxGKQrcddHdWkLfkbxJx1CnCXWVUJXvV",
  "key25": "oFPR7Dpe7JWfRkm57TLEQawQbpoHXT2evd7amMJdQzso5KphySXSScQjXbiGKCE7UzHSaF9rwYQv5bRTaXfRcbU",
  "key26": "awCrzGbmoyEyjgszve86qoCcaYfXyj6HUdG653vG7UZbiKJ1cfSjfpXWbWkgiix1LDf2uHKSjtE46W9yu35LpXe",
  "key27": "6kvpL3jGkBuUc9TBiw6ZLuUDmk9Xu2oznatzBFTASGH19kQaaKCaaokFSikknVAsixCmKAQbewvfd9qZsFy2JQJ",
  "key28": "1FyRQhWt5aT4D5iCm5DB8UMuKLFs8NPTLtcCPCfQTZZvFN12Do67BkeD13oAEmmf4BEXi3DFQUd3jfbtkP9UJxh",
  "key29": "2SvfNMYjSj4jqDc3RjY4LEGwDNNc8KMxFRTFKruRJmtZmfWYiwoCqgyDcyjq9wNFJ32zyCvNfs8vXRiLXTiUt6MN",
  "key30": "5c43rCyxCtGduXokpujtqipDCTPtxA2eVZ3BANLpvWg9FGLBXNJz5bzoQbWadkKzC3BoTq1u8jRaB9ZfUWxG88nH",
  "key31": "5wzXKWun6B1Cs4XgUWLyPt8nBWP7WYwby3q6dktSHP3mqXxLYooXcoxjifRpTbsP5s3dqYRbA8jt6KEcYs7AG3sa",
  "key32": "4JymywPy1Xcpwb2PYyfQakiXnM12yjorDrBfH31zzKNTtzUsZKwtuCXktFrTDjWCLufNjVweCFkWR9gxRg1oNeBA",
  "key33": "vP8KYuwh8bEFqbkNvjKuHr5DRgjWPKxjcKf9txo8ihK4QyrATFC8LsbfJnZpVnw5Mx3uXnpwRLLgY5tZpvLyhq3",
  "key34": "4AHZRFthh13FHLnuTztPijJvtPUg2LJYg7yt3qKHAqMB5ZvV5Pz4X5FWnL2ztJQj4ABfcT2fWSA9HqhSxMydZdfT",
  "key35": "SDcu7m7SUHT5rcA6axTD3NjY99Pp7L9bQxViYqU42FSAGxyCsNBESEwsqafjzNzLYi8PEKNq18r1xmubb7hNYf7",
  "key36": "eP6KvL51djHqxQWQMEZAmvvv5QHf9rV8X7Xdq8hTbxszyp8Bj1rDboy7Xg3bEcStmjScD4hxHLpfiUnvuNj8vVd",
  "key37": "4HUYJdqt4uStZJTRR5BTHpm6FFX1otybMPLCCVSRHrsgw6Y4XdJhHByvq5fwUFiTFjx6yyGASYw8xCCfRwpSBmoS",
  "key38": "4RJyvBktmdHT8DCc1oC1ERYAfsG8byEQeSYgdmRfKLFVr9VUSmjonihG61WGjsuo8EhZP1KLfBqLnAdD85xvU1kQ",
  "key39": "QqpvxE1BrXmWeJax7EdqjvyY1eK18MXmLWA5SoeMVVsJa7bXPnEPCLFY2FnS3VRXAiTykrHrNhyYEgeHZdRdDQH",
  "key40": "3rcD4r85xVEhvLEUykAJAv2XMcYXqV7qrcGk81HU1eyWwjgDouYfFMWLSGFTrDz8zSepQLRvKz1wVy97PNK1rTZn",
  "key41": "485LeRPNbyfkEthmswLeNGbaWfHGkP9wE3BLjEXB6C2gj9fanXEJTGLu4FhA3yye7UpjcELHcVNLwEgz37sWrKd6",
  "key42": "2CdNBBEqnPDH61CgvahbRZ5huhojwNRMAfJ7rXqeEvStuSGQZCQP8UfadYGCayxMfVgcSb4mcq4cBSBzNBnacqtN",
  "key43": "2AnMQuY7aw6g545LqaEqfWZJDquGmq5b1gsvBTW1tzerL5RUsTxBp2GbJDRNBGuMJLFRW8fueGBgbEwswuaog1yA",
  "key44": "4HZkQZvMqhMfSWJMZFVXBPbVqi9FtnUNBn4VvgKXJkqdMA4cxB62kmPqSzWdALAR4hFefwi4kDQUVYGsZj835KSN",
  "key45": "41MbXvDqyg35L72DH79Puk16iS1kjbJijGbya4KCKHo4CaYPfZ1shR4y4jRENR2QBGwff3dX1CBWCZmCVEmg16ei"
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
