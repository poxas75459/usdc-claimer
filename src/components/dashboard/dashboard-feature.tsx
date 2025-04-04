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
    "227c3aSifaZbkad48xfJ8AwA7hPLnhSzVmP2TQB9Kjq27wHYkYZqLBeDQa8rE6tW7xpMsgj3QBPwNudNQ4xZp7YA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y2xzmUtRseeKggaweGfLjkRoXXnEth23YHiDSydAXRtWYNDWkmgvDFcrigfhwckJMrExEeXazEx4DyMG4VQyYip",
  "key1": "hbkd9PPDchbnxihfFRQPfneuxgFR2mF8VkyfWxJo7sNboU5r4K7frs9apGNW1MoHjsjnyv8RupUxKsCap3iR4bH",
  "key2": "5vw4W9iFjZSriwdyAohMmfmJJbEySdhtoapgJCYXUCTuDepyPsQtAx3Lyy9xVq2NBNo8AzKUkQ1sgr2RUTFpkC18",
  "key3": "2a5xhu91vXtvyyuqMQVJis9GB8Dy7Grq12xKgTstdtNdoazXzSp3dP6EMDxEMvMPJVcsfDBvELcXuusnksghDqpx",
  "key4": "3X1MnQkjcnCfZHSrgwnhBsCrq4fTFAjEuWbtvusjXAQamH3vi2LUQPcuSyjAQacir2p1MhKF7p7iEKRzMw3s9nyY",
  "key5": "4S3cv1awb1HHq9AfgAph3yT3oj9fiv59qXJnHwespnANZmj56kHRqXu9DQMRbNgUVW4gwz75woL7B79xQ5Z4SH1k",
  "key6": "5uZvsNGmejyTykeV48DccXR9oWTqUZDBmN7UyycGGp8ascWvYkLXCxPV4Vui4uSHqpMzbWswbN8WEr3hiNSaFwSa",
  "key7": "n2hvAtNkRd4vCv5s6AMJEvnmLqyCZfU2v3WQSvBSG6NoSpf9vDAzvAycyWJRv68ypysxJ5byVEBGRaQKUYsZ9V4",
  "key8": "3XADxqqFxfTpkz9PUPPsGUV2Zdrc6iwX28e7U8vvi8ayeJpVXZtaULeRCj2fNS8Ahx2anUWyNZagr7GbTPAbx2zJ",
  "key9": "2LYgrWYaedB2corbUna65LncWRRjX6vq4cZWYYXh9VBrxp112M1EHnTddsfUNY2EVjohTCp2o3Xstduq47owxjkW",
  "key10": "Mg1WNmQW43HXy5GvyFgEVLtc2ZMAZGimXkCmWw9F7vuBZXcHZApSGTqipHPhRHFn5Vfm2RDdR1zjyp55MqN8eGo",
  "key11": "5w1BD6cJAk6sK4RV1d4hrafVknec4mEYvUwdSa28eJYG3eEaVus7B9bqn8HdevseVhzxy9h1bduW2gL7FAehmn5y",
  "key12": "2SftzHM6nEWnFPBmp5oSrLbU2drE5PKd1daWZx8txXqebdmSkXvKxPFBJg5zK55j3ntWqfsxS5SjSBWa2fZ2uFEz",
  "key13": "4ivYAXkDr9KrQ5U29qaSdmJGiBfyarGRGRGEaqhZqoNu5fCwcbWmKaAwgqRD7CrrUVMgnUK1AkKgYBhXSsdJJUBo",
  "key14": "KKp8sfhTiDjh7PGGQmoWbhkWXhiD9FtE36ha9Mvs8cBJuKu7PqhNSSLamk1PGU1oWAwU3Uea9eG1mZ3X16zCfbp",
  "key15": "2uZmCXGaNEsG3b5oPZwV52KKHqqtUh1mzCGRmBLF8Dh7ke3fW8N1zSd2AYsnWQLEznSH9kAA7C6c7fCRHgWXrTKq",
  "key16": "UPctEF39Mm6NZUhL4xk64Ncfi4UpA6Q6bLW621KiP9m64LRRWxHomvMQU9RnB5o3MsYYVqdt9quAqKxQosXyPA2",
  "key17": "5N69nSHwFZbCmYzp5UMhy2mbbqj5DJEn7hsRYA2uvKtEJtFJmgZpcb8gACEAjtRD3jQXmMVYmRu56GkujF717zKH",
  "key18": "49h47rRCH1Xuu8dxvfimRRTTEtZfCLwz29CGErZWJyGnMDzX7RMHPQfsqBXrqBU9crfC4WVGgzFXRHqo9WPWXhU2",
  "key19": "2R17j8ug994BwXKKwx6bzeK1H8NkfrpDmMzaWGPgB5CgutXfLEXcxtZJ7cijxtrJd7Xn949w8dJ8hpSczuwixPyK",
  "key20": "3FgUVvB62uFrpwjAivco3MLLuC1C1KEnyTHw1SH8VXGR3j1FBgY7gTvpkN8Xr5yXKh3V1yXvVMcsWGqgWphzcVZq",
  "key21": "CNBAJeTVg93XNsg5z6uu3QHKgjhmRz5GSS3ouTb9Xmtfetw6kV89addXAXqepsc6DoEcBsZXsyCaFiywze43bd3",
  "key22": "4xAZCQUJt7s9TV5Wb2zRFENvKHFuuuqC4E74TMUmeswsWLo9y1Vh2EhT3dvZbLmNnezBY8y3tSP7RUENxgxzNM4N",
  "key23": "4xTfao7Q4RzG35ERRQbTBCDcSMqNqFBEcUFUFSPVRcKQbgTuE6MqFDq7Swmr6su8SLDf4yfm9LZjJokPEr163aCH",
  "key24": "2MfaYQA3S98xbAcFtZgnXegg54pC27yPGYn15iYLkVmyG34ScfnVFqESDSNUCMvMQAqBqMm3jWoT4ok7wPNy8jR3",
  "key25": "62QDTjpjvbZmLa4p5DiQkjkzMUDTK8r2KoHMYaniJWKtdSanqRHhjKaj7zByXFjMtyac49ZKXNfMKX9qmr5jaSuh",
  "key26": "5HhTA5fo2ZR2FRmveaDCvp6DKNfPus62b84LWzqidNdEYw7UaoLUNejK8YR631ZqLx4tCGT5GNZK3ySc2XDn7DBo",
  "key27": "rP6cNoQazf6CnypAo2wRttwuYzh8bTQnZdiR7hoSKEmiARQvEf5mVYT6HZNjfT8AayXyuMvx2urQbseFufwvtK9",
  "key28": "5pHW7hEKmtvDkDvueZVhw15obMdq7XknyFYbcu7BN8FtwYsM1pwRL5yjCqnc4yxuMyST392jNqUXT4wT3wYxSCqE",
  "key29": "41j6DFbx9h2DS6FJrYvNbQCiqurGpNyK1Q9vhrpGS2PvvD8jQAaCc48do2ygQzxbM69XZhez6jDCCYXfSSyM5YVw",
  "key30": "52fykGfi9frjfKNowuaenkaBtd9aycpUbXhUPg61y81JJgQyKT4s8qHi1sqWNmM77Jgo937bAw28XzF5tUoNiJp3",
  "key31": "4bRNhmwrcd1wfAhJqctWvt9FPeuwF1sUeRxmo84K21e1A8aCNae73vWpPwTTs4iGmKn9BxWAsk3iGbxjjQM9UMsu",
  "key32": "YwoXRR9CF4pn3ok7aXSaMp7TjrRNPRb8TqvjR9nuRiFRP9JbrmvqmGWMhJfS9y92Z277WmZpK1ScwuWKQ5kLByD",
  "key33": "3yEtecjm8Fj9Pj9ShNVNGanQtmdgFyqcxV4AYyKuTxiEethA6FcgcawraAmxxoLXmiw3ghrRQQuDEra4fGvJ1mbd",
  "key34": "5gbdBxEsAf5AYW3uWJSG1jLpvEgGHfCcS99kGoFnTRNoUwVnvoi3gmr5urGrGBxxAP96NEipw72kPfye8WkNBCnv",
  "key35": "4fzSf1EE4qiFv2WsGFh5164nqT9v7x1bFLnx8uN247dkiMwthMFpGPCu4521GsKksiV3JKTNZYcUNbJyT35Aw6tX",
  "key36": "3PV3sH4nMaUGpWwoJ8JnU9VhcaUKVS3WR9qgWRrZ3JncBYhTECzFCAPBqQAmkM3xjPwDLTeHAXk68yVs923HkShA",
  "key37": "4CvyKepWSS8sDpuyuvEeY4161dt6dybFcNR9w2n5ATKJPeHcMuSLC9mKnByrMQysq2TZL7A3bF9PiDGjjAh1dxkr",
  "key38": "5Xrbec6ohs2fydDAVes7i8hXkinCqa7oJ9Ydyc2iqXndGcCtzm38Vk5NX4t1UJmy3s4ZDAhF6bXCEQoFaEexcJro",
  "key39": "43k1ffPxH8ufwn52eGmVfayR4k8EHXWHwE1n9oG56gZFH1DGxx9UC6in4KnCZKY8ZE42R54tnmEeg5xSoS43Z2vz",
  "key40": "4o2t1s63jq7k3w9xjmpDkJtUWrQqpcWfRPAm6PK5ezKatG5K5QZJHb2twhu28qccMymNqTK6AeGNJvo4qnxwwfsN",
  "key41": "4tk6jScaxRSH8LLWXGVQazUPFGu246NRjMQN9GZYzsEh5i4sKVo24JfkRVRVK84ueaXNzBHSfAjDqWiqaXBNaURV",
  "key42": "28UzW2nkdjyhvuzBaNp3XP2SwpFdTzyen7j9zEHy5d38z8VLoVq9KThZz8o5MaVVf8EwsqYYd8P3pqF8JcwiBXG2",
  "key43": "33eDrKydMdMZHEdyYgaQdH9PvCn4Frz7eQTUhB1V2Cj9R2WW9iXAf7PAKuZW91sCexuk2ADBZDrs92Wb9FxCaZMc",
  "key44": "2voSpK8aR84ort9BFF1PVAK2GcKu4HE8pAPVtY638yaHbHMYVzu12Jpa6SBxGcyCiPfyQ4w3LRPdAsejEFBGR6Ax",
  "key45": "71953C5au1TkrBci6i28YuCe5TMibG3SPaopWNMH9UJ8GNyTsFXugFYhzdQRSC98f2aPwLHge1QPizLHUn87dwk",
  "key46": "4amBGUN25sYCra8ijaTDCUCCH7uuQmfcdWjHSuEEYGcFJi5B2F8fK2arTM9MLLeG3xrSq3xJoYfXUfBdEmACy2Fv",
  "key47": "33XRMC56WoD7g49VdcVp68Xie7EqXKc34ch3Fv1XytfppTZ7HcUiF4gkkKE6Y2HJGMToJSXRr5c2afv2pZJdi2VH"
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
