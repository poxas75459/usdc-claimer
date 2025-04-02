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
    "2Qvgy4up3qdNeJJ82axwRPUjhNUUdRS9bP7FoYrjMnfRPudRc6SUzrdNYnJ3AaLe8AebhjxAfzkv6X5fc4HqoXRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TMJoRdZupFnCHBx2mWwcjqAZrBuUAeVsuacrXSBj4rt4KKa2w2YMha9WFn9od6sHnVEM1cnHAE6ayinxeqBxPb1",
  "key1": "2XQxR5hPJZSdhpfvqEb4Afnhhnp6Lj22wFsWWwUFxNHqXpsBECv9dop3wmvdPvFzm1pJUAMBkr97ezm3p2pcknWf",
  "key2": "9bbfToPmkQ2GT7sn9foapcfTrpjqc4TbsVfE1iFQW6j98HJmKNrTsMrQ5uMxeBif9Dxv9fQY7qLzNDV1d6L66u7",
  "key3": "3ENbfh3p6o3F4xZ1UnMNBeTgidivAweh9BEE77YVm8cj1sevCydSzTS2CNzkw3iWDiAXdo2V542GPSQkAa4575qm",
  "key4": "2QrUQN5ZoKM8WpBnX1vVxB69rmMTkT2PFcj3SF7QzDL9jN7gfEsfo4tXhxRfk3SGrMzJPLea9vmhQLR9C7wFiwL1",
  "key5": "2Ti65xMcLkfsrzCvWe8yGhiiKebgj7iDD8Nx2ZNKUdQBwKnrQhWGyJdEzzfTHg5DKGR2SMEPEtDhMN1R5dsCHYK6",
  "key6": "2mkVaL3GQ7Mfiid3NFTwCk41qMNiTouxonvh8iGMrR7SW2R4SdRZqoZGmQ3WzPComNzTGyxbkr2oESPnozizTCoP",
  "key7": "5zKjH8Xu8BS9i1gfVau8gKjisXAXTWXBB2xiyey8JY4C3ZEjBNWAfExzkhHkUGfo76hgQxz9J9XNWWCzSGF6GhwS",
  "key8": "txFVoJqpGxtCBgibM8HivQfxWobofWn9xUteGGVCFrLS6WZ67GGNoAF6ymNk4ZowhQdE231wpBSsuK9A9yLBFXL",
  "key9": "2Xr3rk19SZD2FCvLrPyyxxEMpBv5NXk4jNnHQtUGbC4PYb2T1s3Ly8reeCrGDYSQUV3RR5X4t6t3pTPQe4GyFJ37",
  "key10": "3CLGjnbQ5NFvkRC35wWcfDeoyMn841nqymv9pVpWBC6pvEB4rGS5QEeSkML9DpmtXRRhYQp5z264qKiUKYC6bPqu",
  "key11": "5Ck6c49p7fmgwxfePitp9eyqKYVoREh3hy7LZPrFrs6dopkF4SSMUtti78dcVAd9A1fsxspQxBfPuQYKruV61CZE",
  "key12": "Xfvf2Jrd6VNYvp2rjpHo4mp21o8NttUx6rng8pRiGYKjZvcERDP1H4NCPR7LcdBcuxpW4CqqcWi4ejdfssz9NM8",
  "key13": "55NXbYomPs3zVoLjxBrxPPr99vGiLQcuAYa46xajWEh8gCmve8q2rULu2JWPxUfwToy22gaV77D64hEYr3FwTpWk",
  "key14": "3ufqND8mNpLFuVPH5fYq41DWmYW4GDkq79ibanJ99fCgAZSHZoRAXUzQ4AeAs1Hehvkic4f33LuiTKcY7maoSN4V",
  "key15": "3A6fHfqwRcwRtjPP3HPgLNcNTiqDEUvs99tzoGoi98EyRud4XV8naGZp7S7HixxwJzoypGvCfPDgDLzoBicpyuZ4",
  "key16": "512Thmkdq82uR9Vbf1TPmpbiZH72dSVoHAC4ghXzLTvqNaMZLjMGjdTx6gZnDJiAJzvmKSWPrZZyDDPh7MbosABD",
  "key17": "3HDYbvZjVszvbaGXSB2ogb5ivnvn6f2wFVeMSnpkyaJrUZ3fRUfQ91JVAacTzYZoscbK8NEgN8k61DoZrUtnyfR",
  "key18": "FtDyEjAYL75ZdPMnWUskmbM44bmCeHpumgX516XyCsocf9bMiTkZsjBS4e9NNMvW83KzMDA8177zSNmsxeaoADB",
  "key19": "3WcuNHdwdGdbYmgczrD4hDY5K8jWvCLmWTiB5HffwxYdARxHKn1im9FUWvEsAH7tcTG864gZsoXi3GHE96C7e7vy",
  "key20": "5Smkfi7SWL9NNXrdwCRAos7fyYgcJLWfDdst4r6rotE1afJW3JJiG39aBNVPjnTrxi6BcteENynj3DdPhkzkgHEW",
  "key21": "4jhxkZAdnqdKxm9bQSCoJncnLUDmyDFghe4k12AKepF1jPFPSVZZXj7rbAgwiAdWTc55SfQjHo11cieNfbbdT8mZ",
  "key22": "5Pfc3jXjFTxfwitM22xGohf4MukLqQLZD2kGCpjeFPkqdfekEG7He4Aj4twsvnm7u1NVVVaWe1sj2Fo1eUxRU52C",
  "key23": "tqutFkfZfKW9QEJJHynnioShc9tje8yR3M9YcZYveQufhvDhbXTUVLSbdeDVe6fhkKPtCewtQPhY182Mn9RM3W9",
  "key24": "SD2YU5LezmnvncvUsHrZvHodVkYsWZ6pSj7bNaigYChueiBVwGZV3NxfQL2qVTvTKFA9fegEmuzfj8vNApJpBJt",
  "key25": "gAw8LkfhD8G2wG2RDB78MfV8NYM2tBJp7poctb3dSbJrdZXogHPactw1qyVM4r9siRf9jEBnm3gCfUSU6kcXZF1",
  "key26": "5gveQTkpcAw3voyuSHw1y4gtXQZCmDLMpAngB1C7puaMyz2GucHzJFLJeLn4YHaUYpwpzHQrQurtxNQMxeLYi83z",
  "key27": "5whZeHEtDTcJRmuS4JY5pJ6dWnBQbncMTMCCQ3RFVhsNEXhXPpBDucuHntck6UZidASHMBwChFBaaRr9G7XdKbrj",
  "key28": "5VuEhtSDmZk7U2hyFbAwPLtwJm2G5NrEXg856cLmEbcDzL9YT2CXqJLkYQczYpw54VVNf5Rz6jzAouo5CbkKJ3K4",
  "key29": "26thbvvxTbyyrpmoxS3tY2cgLraLqczXeNwSajgCjc1WgwSv4xNZyDYbnPcr4njVpjCpQeBQeVLiA7xVXHM9HrQF",
  "key30": "5xSxZQf6Gdj85muRgJZJuhkBAFkZxjwv26FmoEq32pRmEZDC83uKBXzUwWvStipap9eWX3iEaNcJdXkgwXo3tW2S",
  "key31": "3vbjuRmMrDToDo4chHapzaSxygRTWXFiJKnfxn3nC4HZKVUH7i6VENXcsUu5Tk1cA1cLxsFkVv1rFBLsQ8EdPJEN",
  "key32": "4yVC7ffBD6L5fKRds31noACkdMN1AutvG2abCLP4smo98LovAvJig3jv6yCS3cWXPxmYW2sw11CuxGsyVU1ivBCU",
  "key33": "48izGNoJGatsPeCpNoijAMRScoNVEoDVxRdEBRkYYu5RozcvXzk7HSppNqYnuNURsq9YnEVHDsNc1jgxLY7ikeZC",
  "key34": "64fJxze6vRFBNUFPkLBpnQ7EyBMPtWYj3TnFamcJTtjV1Gqm2WD5Lm9uo37KwcGLjKDWAUAbtubodYRPXduDtdkH",
  "key35": "4hRsR9NyKjyZ1Nfh71DFk1qiTJqi8tuTNU39VCThgNiis8A5hk4tjQiPLR4SqMo1zazvEH8JpsxEYGnnndS2FHM"
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
