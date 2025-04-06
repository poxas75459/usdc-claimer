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
    "38Nw78T2wLUzgUER25LV27uny3wsTFUYLSZM4d5FuiXGxeAAg6LbwmHQD6qpMA9ReHZAbHtHFM9k17q4aVCQqavz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ERrb3VipvtXeq9ADigwjTooyDGsj8pAak48F1m3AFgSv5z4zu58NB88KwZ1dAZBmd89S3SZa9VTCA6LofSVTMiS",
  "key1": "4g7QvbA6iwoyCbmkyje7iYyryXYdiHwjM775duXNgg2vKn1Q2jzpu23SorWjAwD2PpMwrgSfRjY5tq1AsbdMtaUV",
  "key2": "ncuZCEsDeeE8ZkixhBKBkijXnAzrnrv6PSR6rwNNKgbN3eYVUBBqpMStnYayVS1YPNd4s81xoJyJzy77EqvwEre",
  "key3": "3f4CYF4fBg6u2BtQ1Gidsn1MKtFhrgLuedBbU6i1EvdVyihcbEnZK6ostZZvTcQoxHcWVh1jubUP1MB9gB1v2ous",
  "key4": "3e2P9xyi99wF91sYM7VQzW7uqgUCF7iCgLNPj38JYb7VVj9bpxMnXPAKC16hZ65zbQP5EAQh1TXBfimgSuF9VHL8",
  "key5": "4txSnP1MvNKYFRqj8uhtHg1w2gPjWSbW8fqhtkxMU6hzbfRvYdnmXtkpbJQb5n9mxNaN5cXNZVngJicKXRNw3Fp2",
  "key6": "3JFaFTAeV5W6fTLUciwMyqsAAnvLJvfra9sLpZG9K5j96WAsvY8MEin2acAE2z6cvMT6gMGHTZbkt2s1uJfjytof",
  "key7": "4pVapfSiaJf4oTWREkFuLTqhv8S5Rxjh8zBp1rShffq6dCFxxjpqx4C43mviRYfkoemNDrbdj3fBipiBKjf1gQRy",
  "key8": "ofqj3zqMWFa5BxEKbQwcau9MDKtdC4umyCwk5AGWG8JXJZrRj13rgWMcJEg8rteSjsPJjocCssaRN19h8kXH7K8",
  "key9": "5GbJ7skT4DR9wG4qMQYkznjdUgxBPJFHUMu3Ao11dXeXXeDsVbA8jgwdmwF3ZJsgTj2f82HbPH9oTX9aJBEgY5y9",
  "key10": "2qGGCLfkTyZ9JztxGgKKY6Rb9BPqrkGHU74itaH12FYE1mdMcXwwo8A4ngUxW1qnNQ9cENuZQDQKNm5MTEppkCW4",
  "key11": "215GheUPtan1x7jZVuNZZrauXZvm2tA6a772oGLVqe3j6Nf62DxehxP47wMfCTZTBvSQ1RQda9e7bict4rcBnFPd",
  "key12": "5idtavtiDcy19Nr959Dv2SbptvDCpzFMCd5Le1ZEWyx4n4xHaqCsfB3Si26LqjTMGLfe16y49szg2yGsMTL2be5f",
  "key13": "KRJAjpr9a9VCTpzsqpdhzg9HuZffHWd9LN1KuPuJULLVsEo4pTyvDSTE8rdotkw3UDiqBMfv4YS9SwqDfFdyBwi",
  "key14": "2G4vnL41uuAmjqtgAP4aNSSp3T7moPB5DqYKJoUuFnxxDJkmGkdU67TEeLYMHjJ8mN1d2g8Y162jbKvUiF3gJVgW",
  "key15": "247CtC9bXWHaqd1zd1avbBDdSo8HKqCMxjds3XQZfLJoyCscQscjsxQLZrDSHsSdeYPtnvXr2nqHnmGCHhtAHGCw",
  "key16": "2SR3TmJtS275JFAZs93rWHuK1EhMHoQHauEfVAbg9NpojVKeWhhXjGqATYevfWyCLrQ9mru683thjvpwaoRrbuPT",
  "key17": "3Xj6QVT95wAEUWvnKFPFVKLVw8Sd9dum99Ja2JWAuv4Vw7PeHj3jYY8z55SdLhkbcAjoK1ibMRYU72wdCAhUAYmV",
  "key18": "5LuXBD8tKhKMse5PX5Mmsmatu92JoyTz6Wnqzu2G8sqaisMiAsnXsKvnLnyG9BsYjstkqC7SQesPJBDB7AvCTTY",
  "key19": "2CHQZx3TPnvQAAKCuqpcHWWeaXv4cP9Y88vW3pGgv1eFg2wcYvwGGL7hM84QcoNfcSURX9RTY2VkRjG641EDtYoN",
  "key20": "3K3pXX1PVYPmhM37KFe7aU6w8j2Dcoc8cS3DQRS1LyjWZ8qJ6yJ7PH5BHPHcMdsAhRPvXGnAVsUFzR5F3s3xdu6f",
  "key21": "2V8oDMqz81hmw2xCa1Qwoq7AkjPp7fX7K2Jxk7sRLGy4QYmbXVS4m2inet7gJ2M7FKrFLWQaipxAPjkrqAtEZ8hs",
  "key22": "5r8EdSW6UhCkVXeYftiR8ehbkLMwpFT7YDCDAbkJ9pGh9k55GW1RaPnZsud82uPAuvV5aYzNy2cnsrnUiLTZs58T",
  "key23": "4pZpjDYpnqLdB7JnpKvz8ZYq2QfohNJTTZFPoMxKEJyZgESNUNtzwVuvpwkhLPCa8oL34FsyNekJT34xgox3Fkhz",
  "key24": "3SwYvswPsJMGAc1xFVoxiuDj4VoQCyvmjJtfRMr6LhHfVQzC1XuVKn61ogno1F15vkYCDSBWUx4yAw2b7AEifaJa",
  "key25": "29Q7czLWmbyEkkatLmcixjAELFUQLqqHN2cuPt5G3pgZj7B8k3iBoFrqUK5jnghQ24aKd4rKhN1r9zvhtrf289Y3",
  "key26": "5kCGk9FUvTR8Q1ioZmqLUrCHEyJzz2fyd2kZT8pSuQtscT3LZbF4DhjfTfLcU5KXub4CZEFxckoTxVyjE1mmeUkE",
  "key27": "2bwtupAeNXuZjPGxnrQx6MHEGDPsSd6kXRHnZpJqWiEisLfPWvPWfYZWhgRXGj3rnfWtLtfqJy7n68VxtbR5kQo7",
  "key28": "3EPa5jpUv932LnAgfdmFewTejTGuHDFC23Lok4ANbgPWJ59CSeGL2GPXXS66nScHTScrkoRT5C7BPvVfzpxUBi9p",
  "key29": "L6bPvZSWyPgNGxEWNJeNfuQM9DCx8DQQrCVZr6RhPdmVynQz99icvvTj1y2kTe5dLsEStwQrLde1uf9YurRek79",
  "key30": "RD5dAXyyMDSeaknQN18mKbGfhh9VjHKQHgxYjWnUBPNEgJVgEFinjFgR4cDNHd5igxgHpwSmcs6S8qvmivkcHUA",
  "key31": "2WmmsDMwoi4eDzQhhreBTTTHvGsrNfBUMCGGhYbCon6URn8ekUYTi3k3RrY434DfsijGvKStko9jz3nfHERcHTFY",
  "key32": "4gVRReMxEwdnMPc3bMbr9RkbVRkManhZo6vkDGwR1cJWkfPUZGAiDjg66yVHvUptnxLraq15FPoZWMavA1fYHFv1",
  "key33": "55ZraJ14N9N8W2CBfKDcc5ts9UxhMNfh9DTUKAvS3bvH8ssMf5ZzdfKwxx2tVAT7Pu6wucGB7CLR1Mz61eSgHYZw",
  "key34": "55cGxdgRXuRrYoc3h5Wdw9WWdDDVgRrMuYNt5xCr1PrNiHorRqsHgUjRvYCweMrK4drkWfxESvDYSLB3GbjNecEZ",
  "key35": "4SjZevdx3noqL8z5Un5hvcLzFCxQquuszo4VVm894CHMwaN6TgkfRLvwC9Zm1MioVC2zzqP4YC9WFwUP8tJjYR3y",
  "key36": "5TJziMTDA9Gr2JTRW9u4ZfyB4VRcrJoMUZjbLcA15pmqqf9RVb2WsDu8HMqFCwgeCdocYLoSvq8bUzwUbCixYWmh",
  "key37": "4ESCzwXhdZndf3adMHBYtWpDEDUELhWG64ou11Q7Cik7ttk81KcrZtfMKcC6rpfcdiYyeqaFrUvYh6oGXb1RA4Pf",
  "key38": "2ULPr2ENgZjAot7tkcyojzt5oNNQBWGCHD7gzpfR52CdxdNP2TiUaX1Gsk8zURpEeNR7msyr2jrGsPJXkpQCH94X",
  "key39": "zEpkiZaEc2eG2uQMKuhihWVhe9Edh1dZz5vGLJ6K9aCgPfQTZ8N3aZh7cobBjmnNGpjKXTezRdeQGgGMUn4VrLm",
  "key40": "2s5m1mH4XsWUZQYrp5C7riogetMUfmg3ddV8QXBGSAsCiFAyrndP8LE4hPfeSg9UUn9r8QzUnwNdryHBSy5zANqF",
  "key41": "4SLfbBeabNVKpxfVCfwFwN5fc6ah8HBEexT53oMDEMtyfegXsvzdDtSi1kfw1m7gDFJLP3WeefwFbta7G3Bk3tDQ",
  "key42": "35x9sUrUUGXC3snHozU8U6Ej5Y7ybsssKzny5xmfpN6qjT2h1vkyMzURgdNir2pNe41qj6JvrstxWvNrDx9KPrL5",
  "key43": "3Ss1Yram6zJsf1yZgpp7sbrRKS7kp2CMhBGcKM3tALpW6ZaXHXCS2J1oWgpWMoMRJKdYVLnKrPFSDF2DsVBtrZjS",
  "key44": "4MqjUFp275aR7yGuoB2PfFp44s8T6GwWhDQgWMVU1Ge2QpL8sHV4sUSgAAbGMBWH8PJ2VqkqGxjdBDCiFmBVHKqY",
  "key45": "3oK4uEFNhaYhsJCKM3VwzaRCKfyy89VexDM314sVGcxuRwoN6UaiuxKDVpiSXkwNNPu9gzgvdtHTHiYMn8Jrwcg3"
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
