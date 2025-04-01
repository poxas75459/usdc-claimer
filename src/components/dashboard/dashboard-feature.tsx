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
    "YVh9dSM2CqvGr6tWZFwzQUUZWzR7QnzqKeyw83an7751cBR1kekg5UeDm7aFuBKs3wft69vTeeqVaPjuPVDvi7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24s65LQtf8h1VLU3TgGPcq7vXzaS2neXdRqM8hcakzvz7pd5MbfxbQotFe5C7pBd41mqKue6MVY4yXLA2uUoDwK6",
  "key1": "5Wqxw1nJ4hPJcpAqjeXRE2xXofsxSzT6wYovfW5DBbBFQiiu1sR2B9ZqYWrmxQdNqkuWGgk5Vj34iSdvjw9D7MJj",
  "key2": "2kZmzB4KAdbxsP2pbZpqpZJoTgTndDL4WL26gcwrsgBK4YJ1GAFSqVPrGcccaMoKTbNiKm8ibSsmRJq9WaHpknHa",
  "key3": "3nBUBuBfA3Jz3EKFLLXeHoRsvL9HUfqPHhfmEwrdDZCZEYUNxNNEHecQvfxR3xhB1VQjiPyw4MPQtHJ4Zpg74ErX",
  "key4": "3goui3qTSMeZ6VhNh3noUi9c9sPDs7uP4HXo1zazH6wtUDSns5Qv7EpkC7JQFB1XRy21VJTPmAtCRy7G15nYT8VY",
  "key5": "3SDMR9KcYuFEkPmMXTH6SawLnzYXtM4fsQC44YtTvEdrTfjyqmrJJBGD4Pw9o3JAkifYiaTbeBveyGMZzn1jvoB8",
  "key6": "2APcjVnQ6Ah4uXVkUtjeHmhvFRc96G7fmLLFLTiNQa3YuL5gVrkMh2L6LHscyPH1eMS4yFZfLzY4VvZzhAyCGyDG",
  "key7": "fzLKaf3FCtgBcPNnALBpdw2GpVLMLYzuNvKRmykx5ZJbva54iTfP4SJepdd3LwkoTAb431Wn9AU9vsKbAZU2jut",
  "key8": "3ckk4uurHufsanD5VzaqtNrw4UY7JYWZXRYeMoYerMcBoWNWLMK3jcn4qL936SexbcjiQwpeweTgac4pF7ArdMQQ",
  "key9": "4cXS3w2rpgoSSDyHoFnAKpBVD3gqBFKaQC5pKJbvUNXjroro8GuNY2qMzukZmLtaAA9enShcXU7i2iV59xqim43i",
  "key10": "KUy7kHc2tYogGyFUwrwMWpgHiaNkgeTKbT35wpEmAQEqwmzPcWgDZNk13HsibjbKP7mCgVh6xssmFukghrEQV48",
  "key11": "2Uvxz28gv5sgiMS4vyPkqkBwA2oyYSTFs3sJueNa57uPZXew9o9KGe1Li3984APdvzjQ5y93cbqG1o3QDd8LYrii",
  "key12": "2vqrCiffTcmW4f3ZNCnBk5T1Jpamma3iAVws4a1jn26QXyjqSJSkB1dpd1xRPU3H7G2FnKdSN522R1FGnqeaZf4Q",
  "key13": "3aENuR3NPQy7i5tCBFPJbTRQ83gPj3aWMjNjTVpzAsstrcK3pnioAczuroSZk1wmhVsKazTmBq35Kq3D5rWpf98X",
  "key14": "2oKXcdfKcJhz6szHcuoehhuoCFLVd6wP33c37X368HeteHX7T1RHHfrG5Ba7CPi63f3BfBthqiwpCF2KFYCqZw7z",
  "key15": "2JDetdU5Njta25HLxQUF7wjxhaRXPcUJa2DNpc56TVnFtvyqqgoFREEtPGpVS26LLvcKurUomHYxXVWprutTzyY5",
  "key16": "krby67mTavMCFGoQt6k1n15ez5uA4yqQwz5hSfabR389Tk7bwDtRzdEnvDn2GMo56NcVxRT3c7skyEPyPZALxZv",
  "key17": "2GUbwhjpQLrRcgQmCnKBRTuip6yhqiqhCip2d3Ey4XyYwXy7mMh6SKHSKsQFQ6T6zfcxzR6nhD9pq3EBKeE3Ar8V",
  "key18": "2YyhpDfKiyyvuWDEbTcr6YxQu3k7xGbyeuYonSXVi3NvXQ3e2B1w7STZg2q8f2XLfiikxBDvECo4XEu649GFDQWd",
  "key19": "2RsSojBdLzesFAaGy9qbUW4cHZ4NpmbZ22m1XDQPLarkQRbFWnkZziyk2TxoELFY7wZ6ooQovrcbEBX37XmekADU",
  "key20": "4Ps5FBPUEUdP6Zpp89W5mwRMC3KHgWMTevQBGeaEN9JBzNzyXRztuCtrTspcX8pK9Z2TmEYGoardbFVdPriN56xM",
  "key21": "4tBfTfZ7DBidANP3w3NQvomDcn6TPX5v7WPfbKXSn42XWAiVK4wW8FyBaBo9tfEAscXkfRSfDJyfUAtXoQyZt8At",
  "key22": "FF1W38DdNvV93nuV6zpUHJS7C9XxmGmty2v891bVUmtoYNCM4shWoSzyvYBBRoLuAYhJz88gcVm83SRjeJhcX1V",
  "key23": "2WvW3izFRqav9diCbB77Ndag3GY1mKNzyWvEfBwdL54k6TAjHdW6AAsKjKLb7AzCJgRHmUA2XNLo9cbHpAmceokd",
  "key24": "4WSydRs199FPKaNNjt5dkmspNnqMqWZPwQLNtscKvDgABLcVVr3T3Gtzn2aK6zmz1ueDnmo2GaC62FYbGuXaVmFH",
  "key25": "4zwrYZVbNHx1rT4U9k2aiGYP29CZvF47e2X4jpbKNU8gkJqkZePjYb2J6KP6wpkXXgdW9XhCxbThTRev32giRYNX",
  "key26": "G8e2974XxdXvuaHy2G3napT8DkNdGU8JBhCQ1PbHPCoRfncKVrnRpGLfAWPUHzviky75FTMfkQxjde58Ld2hbA7",
  "key27": "3ewZCa61X4zRr3zMWYuDutfsp9E9YrvbNbzyRBqLidhihdTjVfSKxbqtust9nd3gM5Y4WKyzWYqT9g4iid4KgdDu",
  "key28": "4sbgfewXpYwA89MuqU7EuuuPSqSLyDcKbFfSeDuV3rNRnRqAqRNswVVL4ErG9GYG5NtZusnYrLp4EDz1j3f6cg76",
  "key29": "55XWQv7ThwzM64VQCna2ziNreREDQN7QeSgbUiRNdRJonMkNugXm96QHPegXCRe9nYKQsA7XrdCheytuunF7aqFH",
  "key30": "52xTaHAKHTrqScexGbu84dBRAQXHQGLyApqszNr6GcyVyLCRjsVora6SAXVbG6KThoV6QPQFSmTB482NQaMA81C2",
  "key31": "53ZriqEGbe4YJkGvPbAgrfXXpUnvKr7PTLYVSpip7LUfWaW8VTkvMkpsGmifbs7qZkK9srnMEYo2Zgu5gh21QS4",
  "key32": "4QNQafDREKYFSFXAkUEvUrt158R5rqEz4DK63oi3uQmdSWUvyKfBUDjcqB2Tesd1TMdbn664DvC782ZCyCe3GqCq",
  "key33": "4KuCq6XH8AhSfwbuLeZzrmDtkaf2JYbVK5hFiTKE8ibP3P2mg9m5wioZn4SpWGTJ2aegmQSdk5VyQX33sFMnSNv",
  "key34": "2MzfkqpWavJAk2r29J2JQVbwpp4XUPBK2evF1bnG4UF6gcofEiD2GMJTT1HU2mrYtrSaXfogKN2kCUs4jnseCpQt",
  "key35": "4cnpaMTsPVbUGvNKUvUqYNtU2s8b5CxbAqsDahNQqM5BtEsQt4hRK3WZDgnXQ2GLbgtxkseCmFtuUPmAvwGYforP",
  "key36": "5R4x22GQUSJx8VwAf7CpctWd4AsjFNcXeuXdrmyWyxftYJdrQuaj4LT6nEryPUL8vhJPinZbGhgVWvY92jyWBkaE",
  "key37": "5ZZeEgveq6Mkdf1Vpak3pSSDaft4AxFnWx7n8F1QoXPwxPeL3qrGMEaYu8JNYqMsaWshP3cqrZFCQBUGbyyTCsfa",
  "key38": "4LuwweUv175GQcawbw3vDfkzsddEKHXKBqMXBZhXUFeTtdS8xtQCME85tJhh5Cs57rcST3UpgBDrgv8xYoi4cW1U",
  "key39": "3ky16rZRZjBT9EQm9aq6TvXik2DousEMsmLeQgmgjysjvBRiG8SBrxzv5cJSNLS9b3QEnGsunymqB7XoWRKXA6J2",
  "key40": "49a8SbaZFMrcaF4xKPAxEg1QYgzjJcky3As2xs5tsWSMywreXz2ZsNW1UCyX6rVyzxY7N3yy35rtnwgZjqkRcPs4",
  "key41": "DxMbHAbi2ePTGKXNJzYBg2ndfkgH6wRPm7wWuxc1EG9hT2XSt5znB4whE77Fg1TTAnDhZJW4caDVs9AjSt9rcQG",
  "key42": "49Wqk1BFBNNFisLndDu6725vHH5b6zrAHxFogmCHtLETBXThXE79odG19jqvxrTGCZJPkMNnWwmxLXiSet8uZ8zV",
  "key43": "5MWeBUm9uq3zKz13ik5ZQvb5PV5NgBDF2KRitdQDQ4nPnvJnZuTEJKvv6TsK1xwwZpJKKVhoLHRzzndreBE3PeT7",
  "key44": "4uMvwWiJfi4vZxHyeF2vJGrp6qnShMuMfmmVns5ohP97FntdJjSAFYH6oJmigDsP8BdESs5qN9JK45AoP9MVuZNj",
  "key45": "2AfPB6nXGJSR6BQUcDVVRRvkHD3BNqKgN66UMJqw6qphXn2LChragNiSCzsvamWuF7Jc79mKtzkjoroZh1FCcPQp",
  "key46": "YbSZA6woSRgVt5U1eGQnkmijkzYH8a9D2whM3fViH4ESe84ZjmwfoBwNJ3WDuB8SkjD6QVvoKNmsNJ2zZphBeao",
  "key47": "3hnfPoqZbVrLeMrLTsTWFqAfwcMrMB81rPCxGEyQtTZN9itxoP8s1oBQCUHnmGUYu2e96BpBHyZiRTNSnHRwQmtm"
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
