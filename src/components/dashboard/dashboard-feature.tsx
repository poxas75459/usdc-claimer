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
    "5rRtPkjzoZDCUMXw1MURg5rX3C4oZQRYDbeSS3NHFD8PFQEKaonERPtBABr61phFNdU2uefrHt1qRDeFQSqc5CM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kbehXXePFhtZc4dGfDxgH8EDkDWR328vr4RqmDRfw6e9GAdAZpTQdG5W2HxuT2X7rJNijRetAVhtQud2o14TWeB",
  "key1": "5xufThYqk6aX6XKMLgeFFLfcUUFqFwn715WDYTxN1Ndzf36VSXq5HNvBAJrnzw1si3Y1QPB1fWyxD355nENxi9Ym",
  "key2": "kG2A4oUUXydQJbBPjozStF5NgCGTd2wMdXK8aVpA6Gu6c5BAsCNLzSFCap2D1kmaKXWxyiSDunw18LcyV1DByo1",
  "key3": "QXrTQf9jkqXMkCQoFC3beJTHKwvZfRxNkzLwifVAQC5brKo9RtFUbgNFH94NJFim3XMNMGQC43i5WYxuxk2huXh",
  "key4": "3UZQm9NUHvJNR8t6Evc7CeEUEmQsZqj5QA5Qwn8J89CbNCjyuvN5hCVnck26uaapALWD6uXkfMUsFzY2kAKxgrCg",
  "key5": "51APkbGsiBoNv2We2ygkCFU7hsjyHf4G6BNqYDg8pf7m2S933Xp3b6tPNp2eeJU75W9hPRbJpsVURmUCy3dSZCQ9",
  "key6": "2wsMxnB9RpvepKjPYWDmk8z3WPX1HvvWJyowW6c2xCkLKHVB7Zwt76mJwTa8Zpb34NfCkPZnQtEXe23uXBeoaD4R",
  "key7": "BqFAePzSEiQSJspZvi8SErEtEn73SLsDzQzDhpjDNZqLP2JiKbkxSmzzTsTp9pK8TaigCGf2fHXbJYsdumSSHb5",
  "key8": "o4rwrBYsXgTfqgKwVjfF6GuQYaJ2352Nae4XU4AwDwF8D7jJ5WY2KrHb25yrqWDm54bFWSQmr3u3D41mESvxhkj",
  "key9": "2vqMXyFhNP6FnrHdjyPh2dWajQtDQAA11Nfy9gS66hVgriFSahVxD5yqFXGMho7ZHxcGE4mQM4FHy2dhJrEiq7Xc",
  "key10": "3jSDSM8jVgoL3VvL45vRXpLJdhgsvjWAinD3EgjYJ1ZagerDJv9V6Z5ohcb6KqhYtZUftJp4PtAyEM9XapZ6BMDm",
  "key11": "4qSSqM8VezoR8MrG9XobeLKG9nqDGYYfPBsYXhtRjpZkkLcZqJAkxSpByXATsva9AzMZc9WFDAcjJzxBC36zAeHH",
  "key12": "3DczJXPE3VGCaVje7qP9ogFgJ8rfxCdgGacGvRrycAzPAZQQk5a1jCtzKPJM7JrwJD8LLZ4A3ssCtGndyzoHzCPf",
  "key13": "2MUTvGMngsDcupHCqnUtmsWeLCVpuHLxuwvq1wsbEhpYBprcsyCwsrZE75XJTfbUmhQy3As6FQ9Rkng8SEWWSJxG",
  "key14": "4VE3K9TdKXn5wdj1dunTsYu5LbJKBQnC3zWXBZ6XycTapaEQDvvXVxeAPfmZq98ajnBgFGEak6gETUR6arEg1Zjc",
  "key15": "24a8WMSbJY7qbQXoqwRcCxqRnPSNiWgcMb2HdbWZQBqUtPCz6VkT2qiFZLS3BU4Lm17oxeyBerEicvNyKK95QD77",
  "key16": "2qGwyQJshmkn1kdmhX61pDUYKVJAd5H74Rfi5oQaa9KwRZHCCfx3Hqh1QCug9aef964dEZ8GojtLZJF1JMSibgVE",
  "key17": "4x2Ug2aw2Bg9hYnrEVH6ddxb9bVk3FuqARqaUaYyeSMLNgNbqTBTJBekrbZkSNefVDk2MBJawxLT3kPmTQfcgwRu",
  "key18": "4tszyameTo1Uqc9TUkotyd4TCDqE34vxcsmu5UV1rvWZzhArdzLUV9gRpPaQ6TDpUWPxQbtpiKHZmCsMZoci8QDc",
  "key19": "ydLaLgvGVQt3ADcJhzVxoK5XNUMwL6q9C1S2VdNopi1vmQacubiKi8Tsb6VifccBBmsiFUs89qUPVFK8Z3zMzq5",
  "key20": "4q1RZQXXWtTdQcdMNbrED9q3cmZx5UjysV3wHBnWoEGyQaRN1rATn1AE3a4HUVU5xH2VHooV1hSjdTsZv4XfWifk",
  "key21": "3W9mPg32ABacErSWBbhbKnMqATsKWr9G2DSH6UQ2YBy2rEJMwLZGDLbL9eHv6rUuzUepLqTd7v8haiz2cvZd7EN3",
  "key22": "64SBFYx2AeBGCQ9k6DBVSg9BAepXEJCGUevV7NtJ1JA1VRTMxqhJXqKuGwm4m3M3b2xqvkaU9ij9cqjRS5xBFVCx",
  "key23": "Q4cgbM8GwPeXM8bdsrAe42nXaoJWMDr7hBxF3FpRygE29fwAyCja6451NpCeBCwD8ZoYCkaeXUBZRuc24yGCbpx",
  "key24": "RmsV3YcaTZ61MtoTEYWmUUhiW7r6ssAnuvGDroVqoHaUCHuqqFddfzpr5pzvyFM6FZiZN8SaSUutboQTj56R8gC",
  "key25": "5dTJzFELBwTxZfjvjM1h3fsHhsvVh536ajn7cegN51fq4Y2A4vdMBMcXb1pXKNK5CmciwbZp1p3KAiqHp7DoLWky",
  "key26": "1tDN3z6XywZqE58dc7QcPw3wEEJQRus9hPR6L6N3GeC9bFhtMz9EMoNf5VUtGBZvnWgxAh24BVkZSxZCFXYDes1",
  "key27": "p4H39uUFnAn2ifw8u1gMLT9j8s9h4rSNmBHLqZebYDFEWuGBohBEv3yPWwkMiTt6L2qnkgHy2anHSocapcUZtoZ",
  "key28": "5yuvzDZvt3ch88mnGdrFudc4cWTihHs9CNaceZEg1wePXcMbzTMzC6mDLKmMS6MrLA9J2cLVRhVft8RGhN9wyX2Z",
  "key29": "3453vbN2cx1PxfGYfY97Xf6Auy3r9w31i91qsrjUXy53TdJs97BZosMPbbefBJbDVorpBbRt2L4Szj1U6hGJvMHr",
  "key30": "5PtXB9WjpgLR85AMkjy9vwbt3bo7hhRT4zHS4ywuZymQtq2R6tQ3vdeXRodXMMGffQnPcHBS5Y47uiQXGu7kM9Yw",
  "key31": "5dRJiZKpah25nNMpmrhh87XW9qW8WJiD3hAt229CsUJhabbyYRizBLKFsXqwNjeYdVcPtF6fJ4a6Ai3TYidf6ND3",
  "key32": "DMU7yjFggK49AkXdQyt3nch8mfhpVXnuNobBcBbzCcg7PT3YqnmaAjxyEr8iZt9wAKG84eppopWAZwYnu4wq4CZ",
  "key33": "XuAfqKU6JPJe2985inJydFrqcdS8ovCCcQTFFgowYFagmVn9oM6jfZSUSn1WHQJGV2Wy9zkPdJQHbsC7yGVv2Qe",
  "key34": "2mcxykrb7ntas81ss4qnKz7qz9YVWoQA2z1dXDKzRUzh9pqHm2VN2napNMVtv1EPKKqZdnDe11Gyk6jygjCtr4a4",
  "key35": "2TsyfkfeoC59ncLk2h7oc4CB7XHpXwcjfeWGijaJQmFPtYKPfQPNprQciJZr3cEtqo8oBSGhEFQiPWAHzKt7MBL5",
  "key36": "3xfsuhCJtJnwkfUrD9JjCbTJPDm9RbtxwCgFvP6rVzq4Y6R9CbXLpMG4UkM9JDVwgdjYhrS8rSj1XVKS58XjAmNm",
  "key37": "HiCnrhGrTCDE8h967WPLKnQDkuusuCwnxqgqQQth9YqE3BgreUtvWPwMXD8zJiGjmZNH4uAReH9UPsXCuvHdJNi",
  "key38": "7Z7K4WQfVbNDa3Rcvn5UbeL7YEvhaW8i5B5kDXV6feT4WGdEiQTZtyYMsGC2fbMsyBHTKh6qywHwciQ2f3PHqUn",
  "key39": "mSWxEdBueiRszSkGMEUSCWED3Uxa6VLBt8FcsZHZSkQqtyUZze7XVL3bLskxJRg672qX1bpVnTFsYNkJfXc3Y26",
  "key40": "7gk8qJqstqBU4wgv2UvfhsUB8K73UySsoB45RsoGuwGfSoPYWB9DD2zsbL1L91m3X32XuJxLjAf8SZwYA9hAtVR",
  "key41": "5MPBCEwvW6uurtiaJYGdp2jpTiXCH1bzRHEY5xEp6D2fLD5QPoBsur46prmouN1DeknF1PnM4xnfvVrxqSMnww2P",
  "key42": "k9FzwSe3QEskn6qxc1Mgxu9UadyYVUv61xcna4rthxyg2PoiKsMV3oRjj8GVy8kNGVuXrGzW35HrD5g1NAS7m8M"
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
