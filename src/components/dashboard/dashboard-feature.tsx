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
    "ZT6hKgGyCjbbMtb5cMaN7HXsEtk1Y1ME8q9v9QjMMsAHdeyz84iDEakp4oygWPFKqfxgbduAD2umK2MQvQx6SRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jECssoTL4sE4bjBZkQ5jP78ecadQfs8sYEFb3Hx4uHFrVkcxzVuK41zG6yvH7BSC5HUdUVTXhXHB1arTm2prLPx",
  "key1": "4QpxbQUU1HuiCi35NYbwj5fE6bmmkY7RfEjGVXotML2RodFPmzFpCt5SLoeaHN8TANbmEXxCu1vXJEyn1eFJVR9F",
  "key2": "4qvgebCZVAyVSfwByR15hfEEHda4LCddQZhBBWB18ftY1J2fQR98oTKi9eswvybRymXLxL1ghEuWCef6pFpbV3WY",
  "key3": "3aaxmpeojHDNV745ePdgn73vGdCjhnvU1Pe4aQJLiQtmhdzS5ZFk6yQVdLppNirNNcYsBeA9TaeueZSfqghdLWTU",
  "key4": "4eNePwgjE2HtCKnBSinguhqtuHNJ3P5oFpv43mf3VfFLBVVKPcJY8AnK5p95Z4QtexeUZDGMX6Y1R9YUH3YFuwWR",
  "key5": "39uWvvFiYgAWKyDcHg9zTkBvkKNbAWmkVJQKGEb7gQ6MeAGQJrv3o7tEWqdM59rNBLh2MxLp5cPjvpUoT1Aok4Cf",
  "key6": "2jE7donfeLzwn9BEYwikXScygV8aUFZDj9ZuSSzCsKo4dmfSwABdJuvXPBCuKtaosafN4REF4T1DmxdT684DsA6y",
  "key7": "b33ceTnSkYz2NRuzEzihMAMiJsGoDD6syHvhv2sb9LcvPbf2vq1qLMYD2WCGnQ6k5ZWumobEzfUfCF9VbcfLAnr",
  "key8": "5ArUUZkdtoRQy5Ru59PgXYL3mgm2NRuip5dLjP624HbyUThN6W6oY9HMNBkCWNhLeewFepYAvPB63tK94SjhJwM4",
  "key9": "5eTNuw86iLJ9nvLhtxfMd1pXjs6tGhpFxNcgRw12b5ggZhPjtdk4y7vULVz8nehz8Mr5Gp6xDGxai3nur4ykoAnw",
  "key10": "4GxTSFJv7DMa78ZVLMyRMDPEdp2mTkgKyzQ3iy5H6BAjSeEyRkFJtJmCj8pNSG7ZsFNtStNMNdBGwShawGoiSMKe",
  "key11": "P7CP6To2CY1PesjD9Qqs3RoJHQ6yXUPzyQxNJQtcZ4JohjL9PhumqUMDGjNBXNADDiA1Wiw9EQUfbRDTQBJufu7",
  "key12": "5gHZLrVnbVjRQpXoKmwBuRR4jpXL8gi1WYd5L3GdvN7VHf9oVdszmQDHYCgrKm8YW15TpsoWyLpY6UxBH4rasdqu",
  "key13": "5oKCbVL43tBwbzhwNVTyrAQWwyuMgPcSvtbrfmisZt5bXGEMf2mbGk2QKVR2SUwSqnrVss2h8WWNz8E61mtP37Yo",
  "key14": "4VktjgBacmscDMH3C8hjyipoyNAKWcqiVrUp6K6TDLB9UzgK97JwqErdMdJdVhjwxAZ7wEhg99bddoE9CmZLR86",
  "key15": "YiktvHFHUWeHFEig48UGePX2mEhDSMaDcU6sKLECwzu7mmrs3fkfeqPbFTNiRkiXyGiTm6H7ix4c4CK2bvEVpGi",
  "key16": "2uJEjyEkXHeCskxqnEDo2i8yhkayCNZQbXCdAEJVuJG8mknzAiAJzoyzYgykRgc8Mpe49kVqpYu3HgrKdE2fH1Ae",
  "key17": "4eeAP2UxUgoWRVWHkUmyGRMW9hKG9WeWRgKPzd1hrmLTUHzv2dpiqwie8USGkjvYLe42pH5Ld9zuefkALgerpaFT",
  "key18": "2kjg7cpdYssuh5faJvWDWwJjoa6c8uVRB5Vk5ZukTizTQZvTSUEDjoAJn2LG6a7gRAZtrUKcd6LFYAKkja99BeUR",
  "key19": "4q932T9NDKeHMhhjmFkqK6oZpEpYg3R5pNhkToLyuMLe4HzsRmMHHYbyMtDwDqxz2XKa5fbnhtjf4ysvu6kNCZzT",
  "key20": "4FMoK3L9k36XhMJzHHraywTWgAQDtAfPvXAW9WDkMnER4vZRbAkxnGNr3xSMxWLiKxnGNh1zijBWsZJ4sYenUx3B",
  "key21": "4o4NEYkoHkBGsmWUyit7pssRTxYiFF6Gr7s6YWSKgycTGgUwiXhjkNtGok38WsLQpa1PBrD7GHXfXBRw1Ga9WH2g",
  "key22": "5FX95gW89HuZ3ZXA7vAstCwknB5VUBZWMnog9xjFHtKR15Akx4ygMW8oNBQHUGUiqa1T9fcLeeXgwZBUJf91ScUG",
  "key23": "5GDcP12XguHw3XXubPwZBGLukJGkXP4uMUmBS1AbQ5EaBbJHs3b9NBb68BoSHtWSTfsRfxutqvdkPWAozM1dHib6",
  "key24": "f2gKzFE9bkJsKwVcKjKhff3oPuLMGJ6ecgM6ghTnovj82MLiTeJ5mu4Ck65kbJTfaC5YRcKv11JhqPNxUn3fhDR",
  "key25": "4SfZEQpHYo8WSF2bTuBSYqnRtfpsKkYaq3rYQmKRsH1RjrcWKh4TMFM3Rnf33SQWCWKC3sdRQx9ymdAVbezyYTyU",
  "key26": "4ZoU7cxPMeg9Q9MfKV921pyyo3GVqmW1F1vzT8VPxHiFUpLq3TyTY8iZ7Hgy8sh5imVBZR7GVFuqw5R5TY5N9cwS",
  "key27": "5eHspULGzYXRk5NcgF2xrttgJFiEzhsee35ZgxAXkMU1xJLzoVG4rYQpFQpNBGBFZw5Wha4r1eMSkFUrrJzNH6Mn",
  "key28": "2i3qGo8vVeG61mkd2grWMJWn48mSNnUbUzVThLsZaK3P9VnKrg1mhiYHu3vtsuyAs5XsVC5mkg8oHB6sXHqoHTz1",
  "key29": "2ndqi3ifj6TcsiS46kG5M6CRPREJNsGMSJ7n93nymarBi35GoC5ktkt9B8pR6h15MrAMFAcGo7uD3ab1o3KnZvNw",
  "key30": "5pHPtwTx61o7y81Lqiu3vRjhUGenGaB9qcKfbWjwEPJSoURPjRKsGimbw5VAJB6TDntDHRxHUa2GgwRfHWT4XGfy",
  "key31": "4ancFruKCE5tLyaWTEEbX6U2erqsLka7CzzJqwDwiQQReLpfZ2SJrDoxepZ5tbeYX1EsDsDYMF6Pg3G7jbYGdvey",
  "key32": "oaVh5wtupaLbq9MRzAWc6Aroer75UULHequP9J44wJtxCYc5DpghuxjVLokEowdmZSqvzRcr5RRjjxEDcsKEwGp",
  "key33": "3CBxauD1rehG4p4JH1S7iyNpeARHMsHATHDBUfEHMwrpGFnmFuFgKnCUemKDBpc3vhdJXLzpxyX67rtVfBdJXeXh",
  "key34": "4XsQEwyogb2PR3SqDe7f9WhdFmX1ksj8M2t1SonxxKh9d3yEpTZPjTkwVtYimHkVhgobSdTbN9ewxyohdyb4gSsk",
  "key35": "214gkpZzwzpzVK4WvEML8hJf7qpx8eNs5RSt1JQPckcWrTZFYW7mQjgA4XuN1MVCct2HFe2iT7487pa6mxVQs4Js",
  "key36": "FPFpydvCjYggrTzCdAnGMcwDThuuiod1LTp2PKygFm4kKgQqz4Bd8aaAEWszKuUsUwhVuL9oFFUivxjWaDyfPbd",
  "key37": "627uttKMgF6VSudaWfaEin6Vt6FLc7grgwoEGtuvVTiaxuXmWwpBuVP9Wri5rRxWCduvgR8eJccoX3t7rS3mUxpv",
  "key38": "3XukS1H971p4TQ4pCgfcCAgPxjCbXEnA3LBT8mTJvWZDkU51t5RoBMg8FuGhan6onfYak4MMwhdAoKHhmCadLWFC",
  "key39": "3h7k1BWAJrhH4aUrp9XWpgba9Vw4p2pafi2xiXspm48Jspgqy6p1YHx8nzMUw8JmoWjVLuvE7mguFBxwoZrPppr4",
  "key40": "3obsqDZ6ChpFiecA7MwA2Ur6BWVAufCy9GrTSNTE5fBRoEH6nZh5Zx1ZpLTY8jy9wgJ54kQKZPxf55zr8AsV3CuH",
  "key41": "4GT3djH31XyHpfdypE8WMVy7fswfmW26QyD4AUKf5PS1SiNeGpddm13KrBGUeBKc4GD1qge8KBdt5dbUsMmbxaZ",
  "key42": "4ZJRQjZqA2D8hUjCtrcZw9kBELttCwprgrdxgtqKPERQwrVxJnRSTVEkBnqhawESCSRRJdcXf4joiXbvBmnVSYty",
  "key43": "hjJ1FQTwheoQrLUzj2Y5PBLojGqcrB6VskEzNLN8sYV2y5PemvjXZASZunKCX1o3KgghBVQjbcA75pWdoEoSFf9",
  "key44": "5yDQ6EYZ6iY9ebHwJ1Xonh84wSQtmQk4VErih9hhTKAxAsSDaq5Lc1Gj9i7UgdcgrtGGG4cgxeWgTQ2BWowSjNsy",
  "key45": "5a83TzVhVvJ6Y2Cf5dwVPn9zhSmkkM3m11FDmV3Z6nJ52atbeFZvgpq1xsLVMtWT2uumCqchPJk7Du22sRsgX1r4"
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
