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
    "2ny6YCAGoU1i8PiMKH5oay7gdV8U4ofDQdQAMLgYG8mZMj2cYfekmQudYKa92iKQXqxDdh4JRwZ8f5FbZBHhjghg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KytzAZz6LnXsHau7j5czVfmU11QBqKyfai1xngDeQPUhD9N9qUX4A1djtkUuf4vEC2R5PXx1QbCXRUR2sWNDDiM",
  "key1": "pu27wH2U869kY9E8ZMD2XJ7XfEeg8pWfMWrW65P7gETc7scxhefkLZazwSgm1PfkyEft3Gwnu411AkUST9dn7Tz",
  "key2": "2DNDZneniBrcFjYG3j8no5oKwSGmnGVtq2hrcn32vXL6jf3G8MnEZA9hZFCnaMKnsQgirn6W8S5LwnkMTyjw2mx8",
  "key3": "p7vEBKMp5bAKTF7BjQ1FNHDY6pL9pVuef5TZdzSAvyjPoCZj5H9z9hLJU8mF4PoW9nWQ3TerKMFMNv8eRVj5BeE",
  "key4": "2gro5yePMAi1SbPyyhVLDRZSDNA27pwCPvME4A6u7nnhUtzAGbtQoSzKpbUFcNJCw4dNqL93u3SoyodTDPTZ4YJa",
  "key5": "3G1oNsEqmK6mUfZsvGJUNa6S4RJmMjVdcpBL7yhJB4bNescE7yPrLuajuuK2Sjk6JpR9AmF15YxQePRwXGrs1DKH",
  "key6": "G8aF2ZJnFVjM5NwdsqeS8W7Y7kvsqNGCr6pfhZnuPRKpx2VPggWmZdBEDXkwVcJZksLrfPq56wfuyFKNDYYxqdE",
  "key7": "4YwRpwkiuxRTTNUqyppAW8tcDs3QX5ho6beBpyrTu5oXbKJkzyMSwXi2jCq9tnfQubn74ikH2xhtPG3Pa9bqEWzV",
  "key8": "5TX6SUR3t1nHpDHcmYv4noRBgejk6F1NDyyLtKH9GuR5zLcS4qX8pxB1f84v15hhjQeyRXKoaqZaDoNkoVoTqdp6",
  "key9": "2kS1xd25WCjq6CecShwCAqFNVLyt2Eaz8zYUWERSbTxhkfLq7mEj3foxG5HfaqPpVJcTgmrHTZxm9LV5Sjm9pTWU",
  "key10": "coHuk2XabWxE8L7gYCxiHfBBw74k6gTnVRm8AEitBjDYgB4GULasC88aLDuqPYHCvVGxpjheVdzyidcxu4fuBx9",
  "key11": "3WsaYwmoMKsdsfF9uNAti8pDW7WLrRoJfLGLrhgDmXEJykmtzqerak4xR1JdrJqXontabc99UXVTrTBin1Pks9fU",
  "key12": "3bcj4FaFpkGEiYMeGZyk1YWTHdXXjWrqQFQAUMRU3vwpmWKc8mz1mYfxzrXggdMLprdATh2gg4zbcxDbEhghU3hf",
  "key13": "41QmRexq8WVntbiBUv8vRrkLLiQLPwnjQzgxGprHXGvYQYXuBvmEWj7i4sdo4tsNANFTFUdUaykt13sGu4771ViT",
  "key14": "RpEoJQvMpu6QkL14qkUfx6JMzxur9vb2YxxVuEa2atRBN2SHhPUowFagu3thc6YddcEjT97AjkMgR1H2zniWib6",
  "key15": "bND4g6SuWiKnso1BgaB3FmtBpDJpHXqiRmJA78mvayFXXHtKRcWK8fT4xD9mnr9Fnuk2a99dnJTfLzeQhAe6by8",
  "key16": "3zP5GXgvkw7JKH4uzCF7RnnFciCLgvEQCNhsHvHRrosaR7qD37VgnHRzwGxbvrGesTRPVBve9XuennjWJNDFEWKo",
  "key17": "2qXc9M3k2RDyVcN4FjP13wmyKLjK195AXjUEg3cA4snf8mnezp7YW91joNJt71taU9CEHscwTV9B1Qvf6ivPHiJs",
  "key18": "66YPt4oBP3jKaqFrj6WVxiMSXC8ehLkk8rB8kgsuaqEHD4azwNbs9aKG8g9dsdtJZ5hKgmpN2WuKRp4SyVK57dv6",
  "key19": "4id4uGRviqXVjbr6ByFmgaHK4NEcYenBgUHUf4JN3agapfsZM6cPBGCVk7NK5Ap4PFei9oj23s3s6iTPxuvHgnCb",
  "key20": "oV2nNLw9DYTEJyEKeZfpMX9hig4zWuuvCikKD5zSji5ojK8s5sawG2PRcVLdqj7BN3kbXPHJw7pWss7e8vAmhqJ",
  "key21": "4pgwg52FmLiutuQ8ndQxP8Vkih4snWzR8gCSovht4AAbjAYADHgCJsLmRpBvNAK8aQ9FNET8BhiKzU2NVXdExBVb",
  "key22": "3GfsHgPrzWaLyZDPerWYRCN6ZjjdR4endAXB6bWwwY2qoyWoSP6J4asQfQ82jEhaJRYHSv3oDWLA7QJ5xzmguZPS",
  "key23": "55s2BLaR9ka1CAi7TUocJujxB23814NguyhpZYojZm9gK5CyuaWgvNMbn4yjCxuLiC9rLCSq1EaUFLqr5hnGzcpv",
  "key24": "3hG8NNyaqL4DSRMtoBCkXNjmfdLS2ixd84jVy8aU1bxUxojtRNjqz6BBGDz9emnHPx2QGg6Xk4yEochZfSVwrCGB",
  "key25": "5GvtZfqsYgK2cugvGYSM8P7aeKiK64CemK7ajPZhdp1176dsCu3GLmEVr279UjHp9pVhcK7HqRcwyBjGv5h52WPX",
  "key26": "baTr6jKY4GUM9EHG6MBLqQaYar6BFSrFu9qTWYgaZ4KF6ZJqsfCjnngjKpS9djBSkBtjuWXDhYe5WmJacrXYpko",
  "key27": "125v9zuj3nHYFvH3Qh9wPQ7fiFEyDw6Hs6oDqR6te4AfYcAa5DPe9R668PS9NRze12QX5KKwDBGHSvymAVuyWPBc",
  "key28": "eLFYzQixYTLgybQSnbBtPXHkRw3g6y1SJJSYkdRNGC5gtabwH4uAvQ2wrh99XeN1wntxfxHkaBw76nyM4GZ557R",
  "key29": "481v3r15fGdUL2sPEnZedN1YUFiSpV9hbzahPNz1yJUdUbiWmCoCDhaogrkXsHfyWa9MBGjaMMMn5fxebbDvTYdi",
  "key30": "4uQMttHiPkzPssi54RNNvwAQknNTN8pzpCoCa2afzg26RtB9Dv2awuZEr6ywxE4aDWV6GpjARuGmsWExkcxzQBE3",
  "key31": "Dr3TApmpTWnui1ytdmPtkNxZXEjHVtUgJW8Vu3UuQtbW1qLgM5BHVtyGyp4gspXHzbAz5PPaifuxGf8dkVWcVeg",
  "key32": "tZUAVC1iMSYGd2mJ3vKcNL7US8HcRfg4BhvS8iegWbgVmfbE9S9MYGPxWEdTXBYLVphkxP1n3JBPqN6Ys1RiDD5",
  "key33": "rXsd3fgWX4dWqApsCtsS2rPZVHeihyjoUe1eSTMbY7JmRecq3zpecB97DT86398owxzuWgvv3izNNNUbxTwYu7k",
  "key34": "4aepQLdj4rrXujvBtPeu3WaH1aEmnjHV1FEgSL8EjsxXKD8MUBTQfeSA3Br4S411P5G2GoMKhpTCndbPDugcgnt1",
  "key35": "2bocfT3wd9wT6kU9TQ5n8gcyT6MTLB19f6tUqTTm6jNS9bcqG3vTdGpWsgarViW17e5aybM9n9zC4eybncd9ErNb",
  "key36": "3nTH67QsiXJmS4xgR1Ke3jYNcp2Sb47fq4xeDyQmjKDnb7S5oyRyJkMGmpjBeu5vHR5Nhs3coawVmUmRwdDChF21",
  "key37": "3f67kaoGrvRKggDHS2ZCbi3jvQTQCySW8nk6WkFbqWwRQSBjjy1oqFLYzdWec6Qo7KxEeLh9hrFqu6ZaxtULENsa",
  "key38": "25AmeTJUCD5hhfva24RfKmgwvm8s44xdcBM1622ctu1D8J72R3PJN8q1u1sHQHig8UYUzxLqMhmdixsPZt8JXKGE",
  "key39": "82ZYjFeapGjCar8NnnQuTwB1jSroZjLv2YD3dYqUPrdAaSoMmXMPgPS9hFRR7bUW1NMmjRHLgpAD1TBRHTeyRnd",
  "key40": "3GSMCLRhXdcn1VRDwh9MCeDQtWHZqSoos8DJNsWP9pswJQu3Jau5wsTg17BC3rQfjH46J996nnXFXFt8x4RZi6d9",
  "key41": "2xrSWXT5SpdxkDtvb9M2DFZLzT6sdUBVq3zKoLv99fjq4vTGf64yhYnQLSQmyGr3dYXVmkKHhnavGhVAi4XedK2J",
  "key42": "3FPkeVFTvKDQzwWAWGaTTxMLyKwqPgBS5Zv6JjPpUF6A1rMS6qe87wmJGgS7GLLeReJMpgMpdg9mgEn2QVZ3UbM",
  "key43": "4fHKFwHAiCWw4vH1TMTa7968Uqz6fXsVBMkfwa4ZX3H8m7K1Q84S72cNj2PwEPPRaLy8R4uiYsW7ag4wZrxvc7F1"
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
