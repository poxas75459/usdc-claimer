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
    "4RAfXZ39JQg1tUVdtForeV6xMi19yazxhKGERbNz2ajreJ8ncuVrVsJx1jiVUyaMisPLRaWHMezuwZEQwAo7384k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HaXPHBrVcCCnQ5VqMFB7RUDX1kLv9zvbrAyoSqRDpv6rod5eXZGCVEFUN1Chgjr5msbYmYPDPPX5em2RSguRea5",
  "key1": "EiZuzzF4VDnonLbAVmxokGGDo1947EwUHD2E6c8K7CiHhkmhmRZebT97e6HcNjj89Rr4r3FeHeUgxn2NhpGvXGL",
  "key2": "3HFoxwQRhuShL6LiwhrFFqYtcCevpwDVc8CLqHzhEWy9dZbNH6vpQaArJivE3NxmoyjVNNh9jLSE7wXLxgFj3vSR",
  "key3": "3mxegj6BACYEF14UjsqPsL2MPcv4iBwAy64URTXkJpjfai9seSd3d1CyVCp1ohcH1iMuZhDA6nbpotqcTv15ZT9Z",
  "key4": "2xG9qjpzCx66YBt8dRne6BCiSxH3AvbJNMtujAt4K2WynX7tc5u9vJxRyswvwfpcvmP5ycHS2NFqqvPqWbqWQtKJ",
  "key5": "5MxvnMuC3HzatZmqmXWpGZUAoymScwzsFFpLBBxJiw3ujwd7UFH6rk2smRF5zi4czf4x5nS2SfBSWUszh2QwVux9",
  "key6": "2GPQMfSbsCY7VT6mJ8D4VC3wHeu3bpj5atgq2M63rF8Fja4RoLERP9HccSMXj2dBQMtwmzoHVFBwFeP2o4BZudjH",
  "key7": "2SyJmudZBehf6emXjzyDG3c8B4aTjXSUmKfTWwLsfjRUvLFhadCU86msKiKb6VU2zamSHQpfLXptWdRgUNtkfS7y",
  "key8": "2M3npucNwyqUJDo4LxCS7bjUhDSM6LQo5GnZSHViEGVvTxJU7TmpWjyegHD8vT1GS8XWX1TDSczeZFmhdGyzgiaD",
  "key9": "4PBkgoQtrfKMi7MWhxPWKa3Pn33XoGUB7W2mKdvyaRa1tjv84aE1HuLQ1bmuHgiW412Nsxho5n36MbEsfVV6VLjL",
  "key10": "5gd66gj3w2jtheNh4Hg69KLmjDcB6NXgJjZvpWrwp2351up9DpfwVdESemtrD2o2K8MCwrCUmXN1cWmiC5ECD4Qn",
  "key11": "2BMUcReuMMvKjSDPokxFyD2fYN9fbcQgZDGLkMcC5xSxbaxGFfYmyQJm7yhcwWupQ6w6i3ttv4wuezCH3wJkTcgt",
  "key12": "4hwaoLDhCBSrvaV9HL5CWRLMx3bkGHTc2D1r5LBvih4v1G4svEHMvVL9wCyWoq9aTXG761wa259wcL9a5yyLXrS9",
  "key13": "3vjAjZeTfW5w7134c9qmd2atkkuu17WYaTjJ9kf22Bfzk2BM2ZsXrtsT57d7HCZH3tEXT3ynzcoi3PR5hADRfPvE",
  "key14": "42wjAzGwqVX3zByBSadvrupDLzTgQXtu5kJDRSX1KKzLgq5UXnsiqLxqUhR4dmGogsUgFrjTBzLRXtAVJXCq3xLd",
  "key15": "cUSdswdecern7b8ZKRzQPCtKfURV6xZbsVzbB2wgoUfGMkdzvczgf9TQkcnf7eEs1XEwvUvPjXcWiNDeNDfL2RG",
  "key16": "2UyUhpa1Tg6nrBaN3LyaHYRRRoXnbvrcKKkx6XR7bM4yMPGJXRYvmBXWBjmFqZi74GJHsJLn1rXtpDQXNex1BE6Q",
  "key17": "51Etgv522GfpuQu7fT1qFsfphmaKWvoZXJehuht9J1m318uAoz4GFzMZyvVnTRqUe8E3N8G8BZ17CpTKTGNZ1FzE",
  "key18": "sNi2YV1wNsJdRDEaz4ZvKEUbvHwsNagF8MkfJkuPRxcotvTme2uGbu6qysqbspqAftXrUwfDYvVihijycuFtrMh",
  "key19": "4pDvgUdNsUvvRbaaxPPaLRCCmPdjz7bh6ndyK5zByih3sY7QHXGmXa3oG8pqrZoev5Qm6B8XGreDwbiM4b27SaFo",
  "key20": "3PWrMyDKR5JfzVM38kL6YQUgHVbsETMRA6RJKjVNke6EkiUmmE9sTVzt27d9NTLZJFJRuR4jVnRquzvF3uETeJAd",
  "key21": "462vsVg2zEX8aqAjsiPMLTDqCcE7T9EzY9wXB5v2r9m7dvrBy9RXTmYxZ6ndEiFmy8m82Vud6ycZvH1KU1XWRRvH",
  "key22": "3sNo6gpZiH8iXDhjv7AQWHW3jsgBMtM73Vfmmj9FigKJctLMgxdHvLSENrVLUwQ48kKvv9kofVxJp1eiQvtr7agc",
  "key23": "3VHathBpX4BGExu4q3gQaxhbuVKFHPD1eXtBTJyALNNFH8cyvNsQWWNFuY1mAgvVeUP6WGLjfsrmiEW4AmQ6ZS8n",
  "key24": "4Czb3rGVQpm63pPToCUbeaJNPA3mtPgxqSKoV5Uhqc95e6Nhxgwu7gMPa8zPh3cmQTebk92YjHZ1r6wQNLx2SxLw",
  "key25": "42FP2R8h12DqRt4jd7Bq7KgLQ1eB9GHj5SQkqpAZGtmKgoFebQ26JhFnK4wfZCzKzLgkcrqsZgX9BqXMTJqc3pFo",
  "key26": "3shi613tgn2jiRAqCy4ikVqrX4PfUY9WsZd2P74KguoGFtxwbvhY12TqLWpiX3wxie9FvCgabNXcGnqCmtpAhP8P",
  "key27": "5ZqC13A24qs5BruDFi1UnKsPiM8tc8TqjSdwN4HRof5cSiuX7Ybr73kyVkEfLyR919RH1uo2VWsfqjDpVgivg5zT",
  "key28": "54K9SJyQUgA2KcgAU3yEyYLc2exbot9sRzLgC4eTAkfXe9KH6Q4WJWuvfT9d1KBPfJYzJzuzB1V26xCCNeuGbiTU",
  "key29": "ck75mKydwDcwHhFgVhQHoxFdH2u4Ghk9TwAHg45kTvU8NfZF3XDVKGggdELvWTSd4YjXxApQp3KkekKdgpQMfwN",
  "key30": "txH8tBVMjBH6Lvwp6UiUaYGQ7mamZ5DEW98wPFXoKJPHBiagd26MMZAPGs8k3XujoWxY47Mbt3ye7LukhzMwJZD",
  "key31": "2Da9kZXA1u3BB4SbK2nkVmiKNo7rdofdDuJjSvepPeCuY2zsg5og9nM1aSKEVzc8k32L3Tga1g32SmBMCr1c1ggL",
  "key32": "onxKvbLoQzzwCBXhqdRvTrpbnJf4yrv7p5oQLoRoWqBk2hWgc4aJjvRbFG1ZWWbSMAu9BMMD3YYu23bDUEK9n3o",
  "key33": "2Gt99MotE7Pq67G8xmzahbYN1m7myv3mqW2r7nq5YvRTDTjnUGYpda75WfQ8XrWwm6djeiNPbyse39umuqwnn7wx",
  "key34": "67MUcSNrGNjq3CsBdc9KuFwUT8P1piHJaqjVPsS5Nvmp4t8jNiLcjk4k6cfrfhr8WroCkRmSs67tW6W5zcwxM7CQ",
  "key35": "54hMJozaTag6wg9webG55AUc3zKfCyNp7URGrtgBU5yvPBKxzhJNu3rTAUK8SgmW9Wy1M2FmcYMZdDf3kDH9BVRs",
  "key36": "2eZHUp3w5KbDmXSv6D478XMiMgvRNDAatLbVCPtv6rwi7qM6cWwG6cYmQiXdLdUBvh4sR3MMGbJzA7mHvTFbNDoj",
  "key37": "4bM4AqDScpikwBMCE8nd3fD2YrpcKPgnwSN7nSieLJ44CT2ESUb3u1DNXasxaveX3vGFF3MUM5SkDtdg2pLJQFL"
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
