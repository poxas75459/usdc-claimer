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
    "25F6ub8mxmytxKMxjZjgNxxMYPuV8D1YzpJJk7jBiqV1AwYVFuZ2fnVVxowAryB9x7JDse7mnEb1qQzwwoVQ6KcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6fQcqH7NScAACqDMtaCwu4HKZPzQv6fbtunYs8xjJNUzKrQS8pUF8LVTmjzTrkNmKSWyK2RGe6iwM3PYCqvWQo",
  "key1": "5s3XkaC5MpgjwCdasT4BvuLXwH6AkUGWiMAkTb767uVduTKBEtk9DHJsR4qNRsvzLQU5TP3zVXb4o3hk9n7bYq4m",
  "key2": "wThA6GdjoRgyRXzhXgv7BotASJyFyLstuAiWaH7ap42DzYTjwSbxu7PbdnDU8Q2despoEhYGQnhaaJm77sVAs1S",
  "key3": "2jiASseyHNfvaKLfmYWntBhJvBYhYqX2FB2JXbQkgna83kb69CL8BcDRs787Ydb1BdYf2PE3XrnuGMvLD1isG4dm",
  "key4": "2zscKk2hcStzofVnymUyZbWXposZQaa1urYivXtATWgRoFCr9A99fMVvF7bCVeovf3HipayN2FHwUtVG8nP3xEBs",
  "key5": "3VFHF91h9N6L1WUgckP8GB4DKyBQrziDgDX7NHJ39Hgn1hBagcryXkaY29jCH58CxceZso82DUacpRY2F4T6BgZV",
  "key6": "2jeAAxSNyf7DtVHbjwLzLUS7NBsL7fRcPdMQTd5hzZoNxpZit76p37ESJDpUwZGJyCfHZgm5gpEFVUUotVbN8pr8",
  "key7": "HkvZpHVzSBt3QD1wiDeSUgR4iVhuBxBTzuHXBPyWJ7AvxM3yZJ7G2Snv3ffMtQYzZ8BED1b2v7d1gjrR7KP2sW4",
  "key8": "2Tx7iH7yR2AT51HFyjBwiwongMkun5pFeppyLyjwYQpgSdtHbBDFK7ybSDQvnF5xhnJsyYEK7BiLbpTASf5hkw4K",
  "key9": "33XsE6PQwUdknTb6hzPxHUz4TGKqGZXApogYS8CVTFGU46XK1xAdVVFrfMAVNHMcEfxF4zUTVGAFpWgUSuX4NjG",
  "key10": "28eXPbzsZ3BFjwHjCAd2k9nNwp6bnamm3W14gD983YAHYjV7vk3yA9Pw6D7iRdRDLBo7o4pa8RDEVfseUGBo2x9r",
  "key11": "4MPZq3GEnH6PfH6jrQ2YKCboZvV2VKrnCE9uarVpGnHgayic9fpD7REgEB2KrqESD3983mYCsA3N9NwUY4gz5nXR",
  "key12": "5HXEEE1kS6rCc6cX4D6ga1LeffuPd8pL519S2UgVd3x3YpyEKoZr14yzGJYgs2UheBLxgGqnWSzMb5XMyhCqWFNy",
  "key13": "5Y5S6cYAvexkDQdh2oMbLNNWKNoEmeNr59Y5ua3Vs3rHj5T9DT3kTNCn9hNZCyT5SXE4XMkQJ138t12Ea86iMGwW",
  "key14": "4S6ec2hsA5En2Uu85N558s5ABTuuGuBgaEv7AgnybmDDBJd35rN1AYpPgexoNNpNi6vaEJ7nk8aP3rUZypnFHb6z",
  "key15": "VXV6K18SNVRDsRqvWvXWC8hbeHVCMz8NMemBaEp2unTEZU2TC8YySQbHyDqKBCPSMemaHBKrYmxQvSDg6WLAxf7",
  "key16": "3dYFdicucttrkunFse8qgPnutniyRrnktDENsSYyzMAkVSmZ1cqXfvruPvuZyo9hNrquipSK6wHPFAygWT2pUZhY",
  "key17": "3UePcRm1x8rep6q1DwEm2dSPFEJi3wi2vJoyk6sBQXThXYTkmhXFbupDvWqAJqtzU5TtQfktJ3s82FDVfknDXUiB",
  "key18": "4WFpdJQB7N1H5vSiWf7PrtKm8LE2cWdLGW9M9ieHdETvdtnv8DsK8sbwYsNXSQ4UEcwW7NyCDcBuNnrrebRMegtf",
  "key19": "4HfXBe9zoP9HmerwzJXjYS44FvLmUt5zZ7CD8jfVtjNoDs9w5T3X3sFh3hMr8TvJtGVEmZGeiZ4vyACFsg8pNmLP",
  "key20": "1MBexYjheC7Q4f1bCj7zH7LXgFB3MSge5aGymA3sd56rqxjTwRimpcJW2tE3AWP1RexXJT1PNstVRGQVJyGANCw",
  "key21": "5u7C1fxdyNckgeQu5wcH5C7B8v5JrE3d4gH64n74eYZxCCuwaK7pBjX42aPtcB5zcrwxUv1FpyVAWcsYzcAfU7i4",
  "key22": "4JLUqyiwnvyEiXqXMbTiV7MZcrPtA88d3tjTadLxCh49QfaqJ781cAchFeRdtPANdJSN8kC3pPo8hjYDjAvvCd3a",
  "key23": "3HHrou4xE7bpLp6xK4A3Pjfpyc3bHuXtJktSy2ypMJqJq59HHcmdtcsbXEtnAUwGjVwULSZ6goJikj9cufLjgPnC",
  "key24": "2cWgGMpcriM9KumpmPY3K7TpP8muApoRpqT2tHLAmXDt88JZ86mbC5fst4N7Uc5NyHrsWps7P3AD1Z5H7SdASdn8",
  "key25": "4mndfhh9D3V7EQKPErzM2JnWePAivRFR9mpXeFrAjXeCTD5sW9Qt93bcHgXBFMDHWYrS1XQcdYBZ1PEtiEBXSzxD",
  "key26": "3s4HTxNXUFak1NLJRvCQtDiuoF7gjFkhi9AUY3CXazcodZPt1Q5974TVssnkeZf7bU6YKC6DAQbibG7jPnbfh7sK",
  "key27": "eSiHqhF8tHaMQsJJjhpeSChro9wgkKJbY18MugPdKGkssnEpyZogu8A6pSohQraLwZoD8zGfdYFxPArN4SDh2m2",
  "key28": "21yFZitDhuAJiTNN6xWELSU3cQicoVyLgQsCYvX2eYnQGd5cTFKVyGD5BJ3skqvXWoaFRANF4zhs3YWC6EJVxj9y",
  "key29": "3MiQjvTHo5wJ4RmzWt86oK9AKVaHxdnxgyqJ9P8sAehC8U6Rb5WxsmVbytToWmAtJFuiaGLMmBVrCh4mkAiQY5Q7",
  "key30": "3sCC2hi9z1e8xquUj4JeTiyUZVDFacmpoKV9Eap9tyEFHQox8KXCd3jSavAAyazfGH146sdjmsHZepVWJNmzxpUF",
  "key31": "4TPwZdN3WhuoWHCqDZm39GtbbonSSV9JJaK28UubbXHNM4zwhuJTuwFPXkYtU46CCikeULmupzoLGbiUmqqjcNAH",
  "key32": "D5QaKfzKBF7DWgAH4H8Mf85Xy9a7F4BbRPeHPLVikfQ3cd5KkShVBCTkf6KLW28U8KNNF3f711ywfjRP6j9hZre",
  "key33": "2X4a2S4zxdJo6gzoGFkapzPWnK8zfmPay3Vij8XwrPuK7Htk1BnDHGon7A1weLYuwjvJgefqdDpYCkRTo6h3XDYx",
  "key34": "5GS6fbDwUNYLPgd7L9vquXLTwWTDtxEjdWZDjnscrDbeTsLTnSkrrEjnmwFhafPHkfz1pT9HLzCWf1Se6MAKzXqN",
  "key35": "594u9WZk2vFzNnchVDi2u2foB77zFhcGNrd4fA8ztA15CCqzD8Xf68iUi7ypsvtf2Xqa2BNUnbdovSzwrRVLKRed",
  "key36": "5BKMWBa8AJEgfUSYKgFbjtgjrQyeeSvuULzvwpDz8r2jRYyJG2FSuxEmhHfFBiwYP3p17MMndGJNJp9j5jACnxp7",
  "key37": "4XcLeKyGuTrWsMKToroZEhQ1d13ZVnNudVVVGTdeoBJMhVTw7DyNBrH1HYFPSJZjEykz3jyP8KktPG1ErGVmGSGy"
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
