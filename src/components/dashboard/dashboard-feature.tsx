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
    "5bSP6T88Gy3MLgqqeuup4BbPqfvbHKFrJmZmCicK7RnGcYPb7fQRrkTUw68vhP2ustVnuaDdsygrgtbarLTfA9sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DbhuZWfjTyUYf9UQ1p922536maCsVL8x84LHaGzYi4MNxmdizLDeG4bRvMojJ3mfB1qjVYMbWUA1fdP9vntJwU6",
  "key1": "4bRYFANRq9vacdZhTrF6RWedviYgYiivonz6x8rqLGJnQaxwK9MxZPyeGu25MTy6cASp1rAXSL9dxysv7PtC3biR",
  "key2": "4RPZcSreS4gfkJXxoEQqKjXbkM7nDsWADsmMZbdkRQMHyFRY4WzMQCTw42VD9n6Rv1oa42k727pcyksB2kvPXJ8p",
  "key3": "3o6EqXEd7zrdZJ3FT8XECfpNxkx2AjprWTTdd77judH1xDsa4XdHx5xmvpLWDtJGXAkha115H15Fhdnjbjef7WaA",
  "key4": "3wUtM4uEATUe3DfcEurAYJ1LBfWamGEx3hr5W6PPhk5x6CLESJ14E1HfkA7X6To4ucaP3qTnX2AMtBrYCNHKapcP",
  "key5": "629CLUwM3bUnF8VQQ2qCSFcbuXShQcNsN3WTYoc1YnqVPWJwvVyEsJ9cyTDdRqe995f2LrBejAsyGvdxbwE5kqfZ",
  "key6": "4V1rUGNPNYFZdyvnxfQxEGPD14jyvMwRpyRiVCCPsXihBuXeMvgU9nJczuP9iY73Hmgvztw5Difed16kxhoT7h2B",
  "key7": "3UNYRTtgatau2MXvuoVEoVN2VT4w8xoR9kvWnqpdW3cUx1BiJLetQpq9gT5rzL24wXU6GHaiDA9GQ8fA8pRKVSp5",
  "key8": "4eq7zJtRtE5RpwQSS7gtAn5VJJTu4ZNsu4u57FjTyyZAGBWkz21L6tDEmawZPF1awaf2MoHtScbEcghVtDjpz4FW",
  "key9": "34DeTpTq1JFjKgjpJNfjwY9NmVt2xT5hQQ2xY5HzUfQc4hGYbZewKeABhYSL4JVrfEStdxKVvSmPAETuTAQgqW46",
  "key10": "4Jp2mu8f3uJR8wYcCZbDZon9BroFhcqDxLnmaRaUhJbt1hwq1qWAmkhfCR88FDFGU4u4G8Q53mxFufTELWujqoAs",
  "key11": "4QwNoiwV5q3vJtts7s9wY9V4i6AbwKTZWGCFj6XVGXXABBQWazUovR2oUyPUbuoUDPdSbe1DoDKGc2Lhi4ory4k5",
  "key12": "4qsE8oFZ4chaN9YDch2Nnm4nmLe51d9HmoEvgaU3KwyPDFNaqf32BNnehMTJArmQRfzcr6YPvXgXx5rCsmMxSp7o",
  "key13": "R5zGPN7nAVoZg1L32R4Sj87cQLzFTQyqgcA4RoWkfsG6mpMYEyhVLudwGRwEFF525EpuGLC43kCnFzFciofYmm8",
  "key14": "2fSBLYLeWBaTLSizjbWf1S26iFnt4jam5RHQUgkZM1emMPT8N9s9KChnZR58DPKhS3hifgXWsGzmtsFHWcwtVqog",
  "key15": "Usuz1Uv1p9722XUT1hKb1KmvjanaRLmH43KxedEkdkLHhgwyut9vJHZVzT3G4yWJZ3SM6dccHwtPXmCPnipjATL",
  "key16": "4TQy1ApfsLrGg4KFWuTjpWaMEZV7HFchHw6XmZDosP8f8M2F1q2yiw4gz5SkC7kYXsEAqwuy6bmFNRd92ukfzwxx",
  "key17": "4W6K2MUxwwPurkWmSbUrdpt1VRoxWJaEKavwrVV5zQYz5kJdoCogn7iHU1kkG1BXC7dJwcjq5S6rjjwN8wMMVXGr",
  "key18": "2dMKPhTAaPd75EfxREsLtfdcuQUbYVyqsAodhapmwhegGeiPjKLyYnxuuz3GrD9yifMV5iCFqppzmfpPmtA6zTQZ",
  "key19": "3NCfJVR4r567ZePeSUbcQSqGjY8rm1WiWjS2mJvH2GV4GNUZdpZwv9aDthEurdCZcNPtsnDDcYD1t8yxVdwJ1aNN",
  "key20": "h32rVbgBziRdbuHY9PXL3QjA3nuCHLLxDUCyRPfVVvC4YMxk98J9RBfWQvS5aFwbu4cLXgNRwDdxNm8T6Ggtmry",
  "key21": "5pjn5KZUDvnfmYGgpwEhL2Wsf6FCzB1qagSTJgJaqkA4Xc5W2hrgu2ioJpukf6q36qAikhuNemnwuZgSnPwXLAKV",
  "key22": "4tog8ksUnTNF82byVxy33kcA9vRwJfcMZDQG3pxpD4QMxWUyQXpWPyrqJytYShUgvkpbUWYRECscU7GdDLKFu9er",
  "key23": "3wDsSLDCXYAbuGztQA6APYmtPk6R7xsrKtdyddMfh3eeDySUmq5KA2STQTkvqfYeavLdmo1JVi8FnPwfHhBbZJPd",
  "key24": "prmQtgBgQHtkFruPaUNQGphVWEb3976t8BJVDAA3CQG9Prz9jfLcaEAQswkNqtXtpdExxK858TEdAmpAdj8ezNn",
  "key25": "ZsAmu7VqHc1QgwzSE1Bp3wPeSk4Mu9Z3kBxjLTRcMqPPNSbLMXVQjo4vK6tRJKCpCMvoby85kMMbh1QjAB91bMR",
  "key26": "5k9wKnBGhk2rhcdby1JkiSnALx3P14VWK2a7yBjrm7wXbnA4WqMTBkPyN9gGwRtdTjV48rzjSHh26johvwXTKMRR",
  "key27": "4587KpgH5hgyxWLMMoVrpoS1bWhkwp33y466V8AGp7tNKdDW8s6aHEbPmdVzcUQdxscMQzNPYiU53nBNwTn3o8XR",
  "key28": "vzDFgaEKBnD3RLLouLJPaGdD3hXiV4EYNAVZtXvNt3nSSVDNo8WMoocPd5eGEFiC68b5uvVmeczLPePBhtiTDTt",
  "key29": "2vqwYyqRMQfwNR5JvXa3sHEsykNnaMjMGsa3MTK8QLP4eo1FanD5G8HjPcraahN2a2rBLdq4ndzNFZij6SNMP2Mr",
  "key30": "TfheVqcPvhTNezY6BdJ6nT99kMckaMambv7m9J6xWaqsnDbYHBPdDVrUPnPs3qi1wodpJRVp854ncUShPKMo3pM",
  "key31": "4bvSqtAJZR2DjCpeAsRxAunR699z1tFk7zpMctXZ6zAmMby6T7LSv4azV1vBgn1oAGrRouVYpAw2QbVzDei4RueW",
  "key32": "3J5oeow2FZSEt7PUhJ2xAA3yXZFhnELC7HDchscj7XVvYPkjmB1FVupmdzKrnwgQNYtTmNpXCy12T6orthDKwep8",
  "key33": "3Ncdb26wNAfunaYuJEhoQedMMGKE8RBDqczPZjfJUa1Zpww7LtWdXabQv5m22yis96QraBJucLdvPkmkBky3FAP4",
  "key34": "3opFPdSBsAEHqawDfzQUzVzcWAZaRgqJ2tF5uvj3jNbHyLbNaChx2uKRCGStvEKbCrD6EgtAKJRyF8HcMwrJ9Pos",
  "key35": "5WE8qSV9azYvJ6oBa32dBZdTeuZsy56zSLmQspPFmdrxpxYNZPbaiJp1bY79FRje1Y6wTDTAt89D7wY7MhWdW67M",
  "key36": "2XqDG3N45z3HgJ8rYWCrNYmpxeTr9oMu72Hefdhz6ZsmMjcxSVJFYsAcw8CK31copt3du83zTh3r1R8KPCQS4v4E",
  "key37": "2uwfT8jy2zVEBEvRLnc2PcW6mS3nwqVmqm6QhEpmK1yjkd1NVUE5g3a5caKky19Jnd6YEaxcSctGJwLHZxV91Ppx",
  "key38": "3DPd1m1KTcFPwuKrVotocKef5g1YP9zMgi6KhWXq9kJGBRg73g7FnKwe4frGkz1LZLwK2JLhRJNakFKjz7qhjFrL",
  "key39": "5uDStx75pdULy3PXyqgAYmMtij96sbmdi6c5Gno65p8js7q6iynzpgrA9E9hqbrrrTPSHhSdeokCNg4r5HVwHNL3",
  "key40": "4fjPxsSqzgNVmeogUxzactr3j3ma8J4vtKC3TkoouUGNYgYy23FeXgiB1oASQCzVSygyJgHDu3fXULqGM7PBwSEw",
  "key41": "4JqfedFGtjk8zxUyu25o8Qg722YkBNUYp2fogjz43hvtKUhhHehNDYfDuKHU8abHhAmccNgtyQs5N3TeY8Mh3wBQ",
  "key42": "3p4LLc4fuyM8qhtTqxJ5syjwZZK4hexR74JzLZVs8Cg1UJY9xt2H26qLHv2tvLyCBTm2K7uQT68xmeF3PK8JFvGk",
  "key43": "59xJVsbgGt9Ao4WanU91jkj69BPFHTDNRR1gRkTRNQoxFDNoqzhxUiSXu4JVxYFs862vC2NT7rpYucthQiTadZhY",
  "key44": "iBqPngFLWyZ2MxGMFaGN8kd1vpt5RZZvxzrsAEXja3rX3FTA48ZifS1FCqs6ApBoXKX479tWeKHV6SeCGH5u2hd",
  "key45": "2Y5k4UHVY46S1zZNHWZt6WKuceow7gJG8P2qwZY8LLM27vN3SYVwkzoj3qXBMJmUmeHG7f4YJYqAkL261fi9RuPL",
  "key46": "64ogLfPHeBzrVTwkURNdEEwpZKwAHjGjqhtSHmnf5uKvgENTiYp1nntD2ZCSPdTFKabruBsFPTSDGLwBVZGeH54B",
  "key47": "2AyWiy2i2C9kUcuC3fKcMbhNQ3GQAduRoojvZZ8hKRB38U67Weuo5BSDPH439gZRp2v96MC6B9BjULYGtgbkWQ8g",
  "key48": "2L5RW5cyurdne8y9mDFGVEXhJjNbqhHV2uURUN2X5KMPUz9q31bWcwevJsJ3uwz9GR3GjGRbYBfu6fg4u2dEq8Ut"
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
