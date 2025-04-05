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
    "522VZ6XyDqXHaCd18WiZhGsnxbKzEnMLgHizMqMtGkLT6hBza2AekmXP43sy3ED6KqZWGPvRTGNMoyPugEsZVmR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqsPtQ48Xtz3k82EuscmJpYX6Q7gc3yDpz6hakECa1jS1CNnjqsovb9bQjUN2qS1Hr7kXbVecVDhDdfRppS7VAR",
  "key1": "22rGUeQxFAEzSgnbrWrDScFcKeXPUxN2WdwJLTDX28jGHsDyydAvVDr7B1jcELRtMgWQZmWZigkoMXvpE7BiEHCr",
  "key2": "3EgJmrDYggTNb8PAeqfFKEY5n6D53WMv6vY94Mbcb27eKg7yzBmL4RBdGcRjP1Tdurqtp8jPuxzS63E6YgfGQvqJ",
  "key3": "TEvxSV5ftdRSYepMj49M7wk4xsf8P7UqtCHa5U7fn1UPtWDwkafH87kU5HwXV2yHuSUPKzmGPtD9BLefP6ugyrU",
  "key4": "65BZZNifcByxaA33g7khByeqPCfhcP1ZrRJ77qQmyyaEf6zLN6vaawF45AWbr2PshjjtVks7G7uXmKsfV6w8HdsX",
  "key5": "2hF6VNJozywo9g5HeLoCWgR5N3dwYG2PffP29yooHpwYnrGuLvWyanGAaFfKYgEpnDF86wCxPJaHbijreqtVuMqX",
  "key6": "4KXV1hkfbYC9AGvvgVSEPpggzkdcyusupnELoFN4eF4DLW5cfWLT1GohBfLNeMjrmYk4w76kA9VyqmNKRKSBmDw1",
  "key7": "5E7wRRQAb3N7kx9xrBMhXgMh6k9QDP8VSSHwaJDVQGqs6qDcnnuRkRB5vLhDTJMYWNCfdisukAnGMmQ8S6e5VKQy",
  "key8": "5PFZjhqH5RmgtjVi42kXBjSLXvyuDst78Rc3KiFAWo6Tammaf1WR9PZoXFFinCwCAgtVRe6kNBoKH26Q3TjmeUJS",
  "key9": "5GQAMDogULui9ZvcncNJWXYaJj6AjbN31Q2qvdM8mzcXfRJFcZyvCNnzaWcn7Viheog3Kwfxbk4J3HaqvBpRBjUV",
  "key10": "5BZhx3zgobHET4UZ97cFaxDbWVnHQE44B94Rfgin2QQcSDMz46EoMndnRuz9ZGt6gve9VND6y9CGH7bpKeYAjbGZ",
  "key11": "62RbK7UVqdM5vkU56v1tZpiScFXixXcKCdjrnzhxXWYWFq42mbBdjzvA7Fv3mCnSZr5knQ767LoQvwGVojST2C93",
  "key12": "3MgRkiMRuQtPokmwZEscsrwze41H3yBmcZTAtqJJw9hiyxRFjPBChYbUK7M3fR1bqcH3AHvJ2bRggV13Xcnpk9Qn",
  "key13": "5KERtZEsfv4BAR9yagiKZpfYsFMPbKiYoBPYipDeLixTTbH5BBeiSvdbEDuiE4vwPYYDiKCQKZw12MHHHNYwRURU",
  "key14": "5mK95bJbDRjrjpMPuwGvXnTfFyBHRsHbKetwLSNQJFFha9xa1R7iZPuMdneYcLeHoFkGkA1WBzPKBojR3YFiDrpS",
  "key15": "3vFkqoh8pvJ8nwsLUaMba248FouUqNUKhQ3qjVYqh5wU3oHo8ydebq6yHjg87rN2gYxQDPQgFvyd5qSDC9MQ9bt",
  "key16": "5HCRJyCfbBwovS2nNYegHxfPNvAteWwvf5wXwEPa3jZC3JDKfCxzmHE4LzPRJzHCPWcEdTAem5QNwNZdraViNFxA",
  "key17": "5xr9x3KPXTAcYXFs54CswxDgRQUNuLsPY1yTWw48NBMNM6sN5fW7MobHm89xQE2CbTshJ4SVVviLc3wKoxCrwHcL",
  "key18": "3c69VCUzVc19DHvrhpF84Ec8s4NAhqyrcXrSft8Gveh598vNGXYJRvWMGJwRDnhSph65ZHBGo5Y5QXkotzRd5LGc",
  "key19": "5HVkTkkpxQLZJodgycvpBngGCHQvGXwgVh8vpTH66WwpGtDADFCmU45PwLMW9RtsSkg2eqUnD8FGVppwnHh6mKNk",
  "key20": "5mvxzGsyCcGeDyfVtWnqEcWe7gg3i7oV9qCWmhQZQJdMQMZkgdL83DuNWA4z74xNoYGEQPA7DFnsWvKWys8bv1TW",
  "key21": "3TiLXKpuQAh9nLPKvWYttkykUzjKFUH5TbdS4jdSayHR6hqy66Q6YvLx6uE7Xzo9iAUokP8LDRzzSVb6XCQhdv1e",
  "key22": "3TNLhU8nraR3DjwBkBPoJHYQrygHuG1aR8xeTcup3EVK8XsYq4tQYaAKyx6catW2ENqA3kwxMiGggUdx5B9Ci9yu",
  "key23": "5UgMVzw9pTtSavtwfJVN7iRsEq8LJRhyys3hkATY2CZFotDLMKoKpPgiC3DEELRVdGboVMrCTjf4cU2RB61qehcA",
  "key24": "32g5QY4h3N3qRsXBRtg5EAG6snFQgLbWZaWEb2nmRzrjdw53C844EKUE595zGnxV8ycfbwyPr5pcQvGt26NL8uZ6",
  "key25": "4sKNWMjyNc5qrQq9wpUqYVG4PJiupEcZRufCuezPZaGDsMohgt7HGx7j4xRmCDcimEe8VNrscjwz5kezX2n3c2qy",
  "key26": "336GgHhGwDu73vw8Saf5C6Cxdh3gzft2eCkAMASmSFyXiTCitsmdEFr4kqyLygvmeDXmzi3wgHJ1EKDEocFeN4DY",
  "key27": "66K7hBeE7chUoAMWvRekgtempuVUL77tapW2YWXX9ktJBUBw1Qw6TjDBoux15pcsaEXTFpQN1tgoSHXvtHF4ukzj",
  "key28": "2RhGPdr9dcNsuF6Xfd5mtCBUqakSncF9YSbLvaP6P769cSzTRbbWua8DQ3A7GvYH7Rj4pC8HVuFzmUaejPzsk6nz",
  "key29": "32SoStdJp274S4qedADPKrSzqG6i8sXv9AHPz2hsqy8Zj1xw31kQ547c1JTJpE7qt3yDXDZvDpyTEULcupk1K6vf",
  "key30": "2Ny1vkZUftQh6hTbN9etbtKrChjRTh8hwbznmSJcjJHNX8Ld1etQfjN3dyk53oBggotGNbsn7GVFTaWvV2x5k3u3",
  "key31": "3YUx4VgWYDosdWwdUUKvhoLtgKUf4DVj5xTjyLFMi8zreH9RKafs33GS8wxBr1DLWYNHbFHXsxb7rUDWkmQxUE17",
  "key32": "3m9iDFTGUhWGHEvqkKZE2Nd78P1ScUUaKnqtpNR3gZfScYexeNXDCf5w3TxmZcnr7Ud56e8LTFb9Qqp2Xxb7tqt7",
  "key33": "e6tzZQW5Qs97zJYExS36FSTwNCaRd7R8C7ic4KAsnRLgzSfCnRtSLJVxqqoT9Gz7QQeHMJwnGirDRYhKxZTJawy",
  "key34": "3VARmfEyx7iu32t9Y6aUc3UbYyw8TWKvUNbGDCjU7ud1Wo96Yz1CpGDyu1LKczGFHHLNUPhLtDg5qd1BymwE6sNR",
  "key35": "3fYeR3m18HdD7A6EM7fMD523aqf6nxaqrBh1Y52tV42aasGSoJdmnAxsXiAgU6RPNwhjiQbkAhhq9qrhYvaqb18",
  "key36": "21VFrNZDWrN6GGaCYbSNQVfnRyz8w1G3oAWBTFRuueEK2oGJPpiSLNjDynr1NQhhWh243Xi1SKKWmLs1Q7wPTqmU",
  "key37": "mi3pscPcdTNJWTwry7jZhuHzxcx7Xja9ezeoB1buEp8u6hn8gPxUSa46DuhFCmowc33w8FZfeYEWXjUK1Hvufn2",
  "key38": "3kAJKbD8JCRD1x8BRaJQ8bw8khHtSWbGBAGoWt1tB6EyEr4y5e1mFZ9HWyxwjzFQiF6dk3a7GubggaTmnLtzcf5J",
  "key39": "VqUh9DJAn7BgsjTspGUHoxEAWhMPy2T6NpcKyGXmqchF2xhsVHtHJqaMGRGEP9BQYEQmu2t5NqnYNx9QxrURSQs",
  "key40": "61VuoXZ1DX5848X56RR8eZstP7qrYXhypjbnedkGshBckQaZSTpej6vr96X5WBm3AjDQ8EMGUWfguvnQNmzQWkfb",
  "key41": "4nPGG5KT5LA3tBja9qqtTpfbiyVkqC3iCvpWdnR9HS5u8mujytHysULzDNZqSZfXgD16nH1MM2VRjQ7gKgqiuK7u",
  "key42": "47qWMMRwiqBDRYnWKbydZT1aaKsrkJpDxAJ1A3MVpoJc235Xvb5hH6fXFMAmdk9r9T4v93Xe9vaoyQrodnXLCdxA",
  "key43": "46Byqzv2P57ooUZbgwdfW1BhYQ8Bb7SMg42S78faWtf6graU48ydnbFsNv218297ZDyBSm8LRpQmnTMhRGqj14cn",
  "key44": "3iaSmmftUGktCJ2jtvPTKfjnJGsx3g3p8W4iv8kM7bgp96veVN4fA7jRFRtNVzJZRTGjfAxaDEZxFTxobPh3rYoD",
  "key45": "4N1mVK1X1DPXjz817xLo5PcD8H38Fh4HURdfMcauhZYywP69K7n1yzN2JPEbjbg1gjwhBi7MZW7uqePeXHrGZX53",
  "key46": "52WRckHk634TyydY8cqMSz4ftfkJXWCasvdbWKywGMgZJrWZq3KzQhbf7Sc8pEqcAByANbwfHS1MA89KWv1f6Nyn",
  "key47": "4erQ3hrYxmvyLyhz8rGzhUkrGrmRcfjsGcJ1vXmRxSoT5fWN8pUXScB7j4RVF23ifHWgd5LhBJrEJBCHZX9RgeCn",
  "key48": "Hmy3nfFPXqN8E9EXZiUo9gLrDERxiCoKa7jJs8SJP1DrZWx2gHzptESNcnTsk5pGuh72bizxGHMqNJHhaQ1AUky"
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
