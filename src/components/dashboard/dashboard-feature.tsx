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
    "4i7dJupbEtHYNLRrBvXgKbv8gi1jpvQcBTHXto4oiMDmtMuYANzPcXX7rWx7FwA1vm44TchxKnP6MVtVj1YCDV6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3YgchgtcEb4hNDJzJriezcBSmbpSVFBzuGTWfawcErdMTcYHCNXjGUKCPjKv26S5CmPBZrNq48sxBVYFeKqdTe",
  "key1": "2GBVZ1x7XiTekaLJcifwLESf4qPGxLc5kMWrs8yTouLwvejifrok2DGGduZyfFQAeXquwZY2Rmbc5mxygra7qvMA",
  "key2": "2vNcbRK9NYxbYNK56VUD8hebANUh3YhetEzXaZhfG6RrwtbK6wTgRiN7XpTFSosLx9BgFnDhcXwAPow5EhPbibFs",
  "key3": "ntHLq9rDGrP8SMKwPSu1d24SEhzV39pJyLkJga1KMNiPmsU4fXfSsztw8RWzv7Tfe5ZTPvVzafo57m4DbAdnhqN",
  "key4": "wufSPGifS4gAc94rG889Jjrhf1GzERiiNcnutLnDF1QhYSXsK7BNU9CjrejLBvpcK67fPLzQRVWNMryDh2cCYde",
  "key5": "5jdEjgjktNMQQ1xTUzw2Kw7tLui9VMrQjenR9CRdUTZrAKCYD421FFxTdRXG3fkhb353Xj8QV11N8qr9xxkZyEwS",
  "key6": "5eqWKmVJb3KMVsdzXtZfSMUqZCwVYAQnpBUEgizDu4Smfa7rPgmmzadBDXoDBxJLqBbmdG1i1c4pHTEW9qQVw7qA",
  "key7": "2BS7TyiVg4zpCteGftoYqo5Lm9mtTk4BqDDWkfth4Se2AByh7YJiDYZJMndxaRJfBfunz6PXBh9oBKmu4HeG6ywo",
  "key8": "27rJPhhqnus8hYoDG4m8u9pYfB1f1bdTnwEHpEbj5qzm2Z2S9JDyoPJKJZMYtXSMi6UATG7JWXeQK8r1es7ePjcB",
  "key9": "4vKVr6T3BP6aXdQi168SQ39CXmbrS2pnaSDk3CA3vH4vTTBE9vRpJB8m63a1vUz8ghijZAoPfSK2tC6MfPjgphDG",
  "key10": "3v7GMs1E9eHdqpiAoMYRBRMXEFc9VUnkSi85yThnt1Tc6u6rPquG5nUcAduwwzyFPwuC9476oW43fd7wPeTqutHs",
  "key11": "42NLkcGrvC79VzydhPq7f6KkuaEVPnfHcy8ajMbztL8GMDhAYbDM9343V58u9wD7SJVzChCBKACnyPur7eZzDiZj",
  "key12": "3MmcpqNK28pFPfikzAdEZHRhPZvGLHmwoqutGgXsRXEyfhh4zNnKYuZv3jwJxK7RHeZThuQPL8Dx4MN5vfXDJoGE",
  "key13": "5a9FvtBtWZ55MM17xcLQ5bFbtyxndJSHy9c9DFEEXAKnfxFQ2TEgdiWXrWh6sAWodSj4q4R9uKG4FonyEn4gLKps",
  "key14": "4pbsywUzad5nTRiezGmeBpKDw4HsewZp5uvkExt8mfX9KbuAS4W8VgNWw8m4PuhRf7RmaEx1yPyucZbT9dyDDeLj",
  "key15": "5G6h1XhJUaqRHRd3VtTk1TH1pE37XYgefN9M29djLPDxLywGFGtNsS3KXTfLAytr1gPB95jLX3hiJK598igXZsjh",
  "key16": "4R8AxrjQc6pkH3LoiLwjb251npRYniXFugJNmnam3EmoCwSWTWa7JxCTX5i2hhRe9N8p5jWjfXCS8ixM5nhm6Bfj",
  "key17": "VDP889Fk5DtyRhKhgDMLAGiCJuB5VckoMNXyRzmomcPDGfbbPyZ1xi51M8AMEpixqD6AtJWenCFYrdNPmkNLGAQ",
  "key18": "jVhq9mATZm7fkzKNcRze9uoq75yCm2CoL9v3StHaDqKFQuVWaGJ8Sm1FX4hZpE7p3XVwjwAkTSDogK1BqGe2BQ6",
  "key19": "5rRwM3poUY7SSZ9u9ie1VbT1WFhFpNApf1DtHt1KxNE7Nz31UpZpiGaJS7aPgDeaiAZksc5VSbUq2dhxQBAcouuW",
  "key20": "3pe13tyW5kZ7Uqeb9q6Tb7bPCwqdVu14BtJ2fYpZDvxRRxLgA6HfLwWAGogrLwadVESZprRPdpFikixMgWqkN8xq",
  "key21": "porqNSY6fT7ZbzwD7bwwpKyZPsN7ULBEihVGFBwxUsaUGGLXWEbLzYEMqKeci2hWfG8jPtQNdds9yZgtp5raEvy",
  "key22": "66j3NPpcfPpmzSPHaHjwdewaj8zXQayMat7ufjjuucNv8TWYBhEurCyA4zeegDqe6uAiHNkUCDAky8jaHxQSNtAR",
  "key23": "2JuxhW3mHJFvdZCVpqR8V5iWwVyVPpawGdwWLJDq8yGetJuN5NCeytxCyPkLviwdJhbGvgYucAzJiPSipu6Bw3aX",
  "key24": "4fqVvG3CQAqFL6PLjHGjHkVEerFjfXVexGPsvP7fn4rkQ41Ux1gJ3pCdg9yBp9RffzeTYZYzMdUod2ThXDND9Jsu",
  "key25": "3mS7cUNXufZ3kUS37TKaWYYs3ViSnD9MFND4eMc621Ec8Dj42imEfR8KT3Kw8o6W8Fh5JX63xfRaTQ8dqtF6VjG",
  "key26": "4N2nTdYasxqd21LfE57Sr2nMjwedeiTjpQQaaZhHaYcZhdRE7npUyHC5g5369rCTCCS7kavakt8TxoHEjg3XeUgC",
  "key27": "3ATKUgWN78ZFoUN4D73nfvh9bd2nQMJ52AA4VukdKpUBYgqda9op9XV8zL65V2RM9tR34To3kYumfEjYx7XreQcU",
  "key28": "vU9vonLEq36RhyBk4YybsCJi35yRtqGHeUobQaW4GGAdv34PYYTjUQ4mkTDZgpA3tKCKz15j4hcNDpGVS5C9FiB",
  "key29": "3yKSAYmFdpW4SnZpFJvSgLrnGYpyU8QcToeLoNnz6mABiB6A61AHtUpQGZujWNm6hZ6MnDTRd3t3eQPLKGBsscZ8",
  "key30": "n35qkceK5xxPnSN7JGXB1eBSuZnGuZy9vHKNDXBx7TQ5VTa6c1u1WNxSLMCxFpC3bnw2GwMiJ69TtYZVDK23vz5",
  "key31": "24wxymxDSc6krM3WTjQkE4qp45tVbuAVXZooxsC7CdMSGhk3oxA2MwXnGogSvuzWWPjUD4KihCeGNEM9jYE468DB",
  "key32": "MkQsupijWXYMjgeq7TotpYcBTqt7FdyMJ1C6MJ64aTNrfHor2eUrAg2FL7XCvhMz1JM4uJC8yYuike7wdQFjTdV",
  "key33": "5zrk5tRB1EC6PgjVJy7Q1Xb7Tg4d2yw16rMDfMxrbBLM3jfpvhmudvoerL77fjMXFUWgahnh7KCGHcbg6sbRgHUJ",
  "key34": "3H52ZgWENck6L1bAGwbZpjLXHa2CxgBA41xwMPjfjMHpteFnywUt1Tk6fqqNi2SCqYSGecRf31wWQJEJJLfAanSV",
  "key35": "3rrdNS22D3DFqK68aGqqwpsj9g98yVaHoyAQBVmWLonrATbNbFWiR6MTz8pTKV1RoyfdRG66VhmUtyzkvK9hjuxf",
  "key36": "5ky9JZP8dDS2xiZnqZRGw5dX7v8zHubHfHBGJsa2zosueSd3zEd37DmRtA37yaE9ZhfHt1miGSxUWRPC9BQg8W1j",
  "key37": "eccbf34ffCoVgBjeJSYrt64cF3CKinCgAzUaL65W6QrwET97KAvPgQEGpunAtnqNaKGkVzpUsh2xdStEpgFCP9u",
  "key38": "5SBwRgjrNgUfmKScSmRQhQUnXS6Ykwuoeas9ZMrDMcSfb8s1LWgijhk9diqwVRVX4H1FWXL66ruJ76R3GDUk2Rq4",
  "key39": "3ZUnNMHcKHQ2dH7ChBvmEQ3bxZ4PVhF8erhjTmtDjrWmTa8WCCuZsbbcswWEyskjDgrxoQkFaivmVNotAQTNC9tH",
  "key40": "najYthehA4W2iw47PmP4CBQhCYsU1dEtYn3bzpHPpZehdheQXBp4EdP3BiX3zTk7oPpqE2qjbd4MzdhhZfB5fq3",
  "key41": "5Lkukr5pe7ZE81Xxh3YhMqR3QNtrf8kDheaZnkBXqDfcupWCCAouEfbVeFj32dbWPTK58Tp1s6SBbuy1A8ffBMQe",
  "key42": "fDWjVG1UofUR6tosHHJq2y4wHknJkP2dMjDFD8yMLqBHbgeg4SVSLzM26CVGuiCJZ18vQcV4xDJnqyL1kk5ma2P",
  "key43": "5wecuwhBanDcBWos6V79yfhTHfzoeb3peJZ4vw85hMHewWF7aYhGajoNG91DjcVPiAKC1suiJdjqrgAhHMtZb9XR",
  "key44": "2msmgncYaEvHjfnYgzbHBg4Ex6Uy2AnWQKpFsef22kmWPWVGdUo5F3UpcmJDJFoLAxJMSDikqXYX9etkDhqFgyVm"
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
