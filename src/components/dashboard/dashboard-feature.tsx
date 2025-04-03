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
    "5Bktfi496Kjb3Sx7AzFoipqWKxeWBLXUzUXBDonnkXAmRBKuUmDPZKEL3136fyCZvpBJnWcbNtt6MYnNUBhsJeHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52jJkV2LzJksAox7kiNn81x2ynhvwPX7eGJRU6qXnFajgJmp51StXxKoLF8q9mzcAMiBWfAw2kjG9ZaUsygKCJwQ",
  "key1": "25m2yXP85nYfd4TjVLDRt2gvTPtGbMdTUWtLv7dtoFwFev4xu8iFjKjgo3JEeq73CneDCie9SZxgoFHL52QaFApG",
  "key2": "2CP6KqwccvxxsEvKmoAvGHK885D27gWFRU5zRWUtZZpfE8wT1PqTiKrVAdiUhT7vzcow86XLgrp32PoTJT3pVqTZ",
  "key3": "28swwoe553HKweKYccshkFmX12dxQ8AfELaGd8CWbdhxMDothnVzXrAWKumRL3rrkCNk58KP1ociCR5k36Kdv6ff",
  "key4": "4Wx6cfoBThiTKH1yrtmBhpmWBLHxEb2QwBFmDQBTbAgjAx9n897HyZMqkNGynityM58fUMvDBS5pXaNHXH8VojGt",
  "key5": "5hZUqPpfYWswxnZsp47Bowv1ceixJ6XePRzzwgeGZHG8W57kn7eaZD7AinH1w1RwQPJ852Q3jipumQS9hbaaRpn2",
  "key6": "2BPNVbEBQWPVsrqvSeZK8iUeCqK37v83FbK8D2ALb2y7C4F3cAti7EtXpjQpAcm7SPKDj9VqF4r9kEJx1XqssQMz",
  "key7": "5dHABQfNBJs98abinhQzxpRT84mg519bCF8V8KprQ3bETsEGzNcSQGSDQzF85pUYPoD64U1CLURB6QYA1HeCztMA",
  "key8": "43hNGrxvbDZhaQQkN3dZBHdSdpe5ew2zxkrNLK1KAKcYuUhGzn3XgxZarEkf8WEq2ZYa2beAmJCWnfpWdnF1g3WC",
  "key9": "2eNUKbLE6SgzqQ6Nv7QQ1QTX1NqsVMxGq3hvhMdYjmFTK11Q91nKNhSGf2gYqio1yq4Y8whDrzWMcQArTDFkf8MN",
  "key10": "5PxVQsZ1krmafZiLocorP8H7v2jwdMmdfh2XsRJ6UjjGMnpsHC6XV3qSfstWqwUATVwLrEn5JrCiMEuZ4pUYGL9",
  "key11": "48S3MsPXGCcXc6kATqGPP8n1diqPB7fYUyGW5zTnJQNytaBL1W48DVPNn7TMnxqyLwVy3hf2vngutWxZ4GmdGymB",
  "key12": "xRgmABPFXsBAbJbBuCo42ZVbkobpUh3zVEazLsA9FkGvLcRLxGk7XsPx4g4NqarxNtwDZW5H6X8wVkgLzHY37Rw",
  "key13": "5UFKBaEdazuv4WjXGFqPwDaURbsfz6Z8MNgUqC1SsXDg34k8WtbGESSCN9kLFox8JovpRuxC51e2FQY9AacFweho",
  "key14": "jsuCEeA8ehnctKMaYCWotx6dFK3EegAewj4rEZ1E4hbW29NkGRwfx9RnMncG63pp49KNgARTcAA3ddrPwHrhdJh",
  "key15": "3hVpyYrbXNnVfo9ZSxmZiKwN7yqYZb6Hx5FyACCvEQayD3pNixq3C4E8LFw2XP65FwRqUjWLcBSXVwucuQoBmdcR",
  "key16": "3tZk4HcLjdEjwyAYnw9qZSSxqjoBUUuxgXUQDwwRUVVReqC4Ew17DUocnr7X9esTAMVwnUaG1smBugUsXcuKY5s4",
  "key17": "YDaa58ifFFLTkX9ebmyGmxxU4g2qrmkwygr48fop4XtEr8v3JT2F2Chx4EyqMae1ro2ZRkGvueENTZCFxNqNVfE",
  "key18": "5tChCax9PNSPqC3n6woF76sMCRxExA3tmqhcEpFvzUUjx7s7hGWQsSi51yyTUrV64CZ9U51Ht4uxYkPGxHy8gmwm",
  "key19": "5HdcUi9pNnQ4sixYyfRxSqMLwkAn7Aj8HovBw2mFY6a8MH7RP93YcTojwPUjX6hgWVTGNvQ2YuNuusLJdhraVdAD",
  "key20": "RvgMv3hToWTZsXD4fMs9wfkQQRQPomLSkM289hikLfn7DdHHAw4KwKBH552APS44NLRgcnSbVcVWi6ZFZD9UaWh",
  "key21": "2EBDMinfpkVrNvueZSHVEyoVrQ2eqskTELZn1iy4YRCxY2mjtQWUtDgjw8Sn39P9ycCRgM2qtEHSzhkc9buSEf9s",
  "key22": "4P7AGv9obePY7CnQ6N1jEfyBs15X56hS5hacJQs7DzHNWyjCpBFa5KzjhVNLStWEqYDp5rDasTQi4DETAy4sJeJj",
  "key23": "4sfx1ijDA9aC3WbNEkP4y5nGymc2XpBhA5od8RQ3g4X12bWHaYHXnFELBDe5gQCK2HJUd2mGorxBirKFNZasbLES",
  "key24": "4RXRrWZdPaFGJsT8ZGYDZnayG1v8emd16pnWdertzo3bfD6QVjFPjLsn923STWA4tpW4atAFVUNpHXme7pEgpV2u",
  "key25": "5YmeDAKhbnL8JjHuvgThdGtdkvA67BJgzAEBfJYb2QrQUQ8Y3YGCEPexsci5r969AsSLs3kbTFFHRLgHqgn62ht9",
  "key26": "2cYDSAwWZ1jbesTKatvDtQmKvnrBJNmecvqTVBTk3mBCoR6E8C1mmwTSXSzv3dzJWmVqasgYsWSLW6cHYjdc14Kj",
  "key27": "4Q938pPybTjfxAXMRNNd3XcMQT3EypJCHHamNFkkvNNBD7BaeL9MVaaG1y3DzePDEfTv4ugjEfuEybxYaTAjxdDt",
  "key28": "oTek72hFWAZ82nqkfCWuY5E4tLbTbkbsj64Dchx9DNgswNoQsMo2jTfuQMwaVzW84733Z979ANVHb4qXKhC3ivp",
  "key29": "3n5NV2CVFYq9x2ko1wwWBoaYAbv2ucJKWmHRzWzRw7UAfVRHb3MdFcLwRqUz2R8rzseK1zouaWCRw14Mp95CyqG3",
  "key30": "33kTRDAvoEJqCV5NdUWLYAUgvmFb1i9g3so9Bug33rbttNaAF5piduxuSayQgAELnYMKeX6fY74TtVhfuMueNi9u",
  "key31": "65doT3j43xFnnUr6JB2qntzSm3pDxxnrGJ1XExJtegVGwd6ouTpAq3jjn8LazktF7Um5rM7NzBFo4BdoYdqRXCmp",
  "key32": "2cmTNP1eCR7U7UDMStKvA54H48ARv6QL9buTk4YntdY9oTum3Utg52oiriEF6FkAxL7MVaFzC7K8QoWAumhhNKVc",
  "key33": "2knnuaTG3KuYaRHQBpLZqSWasuwJznugYEcCYUpVrh9Tfyz9uPcxDQUphdfmiv3odUwQ3WXgeNzu4JefHNX8LjD9",
  "key34": "5AwCDgqjBLsdsND8MTaNLBucPSTQmyDX4mzRtNBp3wjhVHhJ5meAw2HwRrMBg3U4H22GeCu4oWu7xMTkMw7YGjD2",
  "key35": "5t4YYoeVVEEKuC6EHFBCbDyS3g31fRUC4SaMHiFxXzvPSi8dzqkr51LoYoDSw82sSPTWXtRdZWpTpe6UoaMbXHUc",
  "key36": "5DG3TNm4pbjFfePEwt3mFmKQZFwaqCWDwe2V9GKUdkS8r5B3Eb3N5qTB4SLaFWmewLXRcbJ6PS9zyHnQaA2ruLgo",
  "key37": "38c1zehxwNVLVFWRgPC8CHrQWRBniwA155za8UCmCmaJYeoaJLW9keid9uswC4xKSZMGEbjcmGeTRUG2Ji5XnjVi",
  "key38": "45iPxFTDXXED8DU6LCCGPaJDT1q9MjZZwq3Mryp1UoCdvfpgz5FRY1kpvQiMAmx7RLfrqaZ8TpMQvEBAEmkJBhVW",
  "key39": "24V4FqFTNd1WYMZ3oUV2rMN6XmGe4dnQS5A3R1f4XqS32zxgpkf6e6uAjKCQeW2wnfMRi8qMJcRDf7i6YjvqaHX1",
  "key40": "2MK1uFs6iCdpR71UpBHYkGHbvKbc7E68rnXxFjLgLPQgsoDrgUKfQv8pfh7fxV2imXvwvwtN8NGQPsQLCb18qR1R",
  "key41": "2trTVqjoqBbnnQnjtmr2oBe1x1pTASTDduVAQ6vw58KRNNV1uWiEAY5LLKDxtke7PSRZ6wTc6gYG4S5Qdu28S8ab"
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
