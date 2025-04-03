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
    "9dEcMottEQngjzor26k9XaEgmpHWA4LBMKHr8Apg24JNWXXicCxHj3734ZQyRWyAtHUuHKXA3gRHZbcypc1hSm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRcEC7Z7HtSJLR3UuSJJjbpbVuMSTTEzHGHYbanaSrzyy8weF1Fp9u4FCrMZGgP3CNrLeng3jyBNAbpjFuha2He",
  "key1": "2QbvXGZ5AE5A7orLgg8cqczCwrLp6LSXAJZHsDhuMbf3tJ4LkpEqTMrt65i3MSddp49CCBJTTbYfXNknWWAK51G2",
  "key2": "3QV8VwdUy33u9oqJMnJbo9y9w53HRX5qV9jsAge6r7XnaT778MHNwbRgoeUEeQuJp6zd9r8BqdzYsT2PyRKjH3M6",
  "key3": "42hrEQuibvd5gqCyXjggKwAifJEmQTPAMMPy8eVJj9v653ZXAFTb6WtGb8Y9CAaaVdq1MKjZQgeWD9PaT5JHQgDJ",
  "key4": "5isGC1EwhKtDNGELxVdtSUt6K6LcJcGgA148G2Hc9wdmGLbqFgUd8N29rEBssm5ddXAhRj1DxSzKrWiKfSqbWKYu",
  "key5": "4giLLupcJV77HqkoU314BFDmrSo7j8NhtSy4xphQo3myg1TsLexqpLbjNFhP4PpQsRVXPdnzrrJVWzYjwqmrdK1P",
  "key6": "473Yro3Y31f4c89fnste7Vb8xYoEXRcP7f3nXzcpaDPAL5riLHDF8Zexr2dj1u2nULEafSrFSm4wurrZ2F52iFA9",
  "key7": "48RiKDRku4U8yDEW9FM5GYcbNVHVwPBS129HGeAZHQhwx6t4H9nuAgFyj7NUYifTABfSY6DY98k4YpUEZiWTsV7f",
  "key8": "2ePeidzK2kSPe4m3yWvhtKRCa9WVRPo4xepjLdKwkxG2uFTwQHeA1rkMdc227z6xmAwu7j95RNETPHZwUbeJhGK6",
  "key9": "22nooHrsWqwKe2tz3FeJZUvowHUNedmNPco9ik7LiCGzJJxWaMiHfbKHmFZ8NgJ41bohb3Q2K2PAVeE7Xekr1j81",
  "key10": "2uBzyqDoopidtb9qdFghUDfB6jg8CKmnegdzBKqd7HL4k5VQs3ZmjUyXwZDgaRynqR6dnzNxWe17HJPtNcWrz9Gr",
  "key11": "5sSAczw8c6zBBboNJsbvYLBqvdYWaRQBZ9pYZXji5iAjzsHc89uZsY1ojmdu4fjHePGiEvNTDWPoNmXUVN5SAeUt",
  "key12": "3N8rh4yMU9QJQZSpPCYTQKf5sSUC9c1SLaur6JC6KP6Zo8MNrYkWzko7iNZ3hAG4ZS8Li7pf8zrjRSdkUn6urJXh",
  "key13": "eJmxh71ykjPKaATu7AQwHQwduhXTu1xCow6w9jM4R5LEBPmzTXYXA2CJmSejhBnXGMAxMtFKvucsh7atEnQFd5M",
  "key14": "5VCo8w9bn4KPeNCUsHgDcVXppvBeHzWRThEvXbnPvaywmNXp2gCjGAd8HQet4RMhWcbSRvjZjwL7SZBa69vXbdzh",
  "key15": "62tsTFgcPagPUypW6NHrDhVXQmVNHqk1H6etHg9KroDDCSV8pp6U5et1QnFZ2YopvieEtLA2SWrqk53VML9ktqwZ",
  "key16": "4kcDqvnZ9fpfJeiUdZBAtaRaJ7Kcq4HTzarHVy928cuapyNHHiYG88Lvg4Liz44uTo725UVvQbEoRcYMewxmLKSh",
  "key17": "3PhrofRUi5RPC7Jmupvbij5W1SweqGSv79rQAbjqDQwh6zsALeMpNoF5CRbsfhSCNnYqNQ5bbQFG78TdnCBwpfay",
  "key18": "3EdYYJf67KzbR3YYHeVV5zfkvWjwFzZg2wtXVNpuEDfxL71zgwPZErQepSyx2zkAqo9bbo9QvAw6a2MtZWVjLDms",
  "key19": "4pJrepPGp38NcbtPEN4BMvaLM6hj563MKv2kZ4AjiPLXdocUkYauxhq3RTfSx3TgBq3wELF4tCAtv8Gsed5oBWSM",
  "key20": "4LLhLQtfmauLjMNbbnTzYiEBE9RyLq2HLPacBbyD7xVMRAFdVJGvFySun3Z5UnYHy6VY2gekEA15hch4v272SUxt",
  "key21": "3Di2PstexBR4pwfJAjiZdrdqc3u9sbvfvf2ZNaNuejFmzTk7JcLTR9DFkS7DRphaQPDVixA4UFe3VttY26GPrLrL",
  "key22": "4m5ibuyG1Q1Kd1XLVbd1voG5utFBTzR8seJiLgT3V6vsGNRpvnBKiZDUHtEzvwzAYs4BvyoFDFMrvs8yztki4SC7",
  "key23": "2kVUX3cZcUxSagbBKQ9Ln33L1ffgU8MRJiJSWYuvQTcLctLs6xPKzLPmbGoDto1yrMGbBefmucy8GqqkuHnc1a2U",
  "key24": "3MtkUXHfcCjTNADFrjdj5qBVtCoGZhu4F3K6k7HGu92xANYF3aBKEFDkD8oWStNZE4VxnLwMYHWRSqvsjnAi7Ths",
  "key25": "2sPkZ1VuaUMAUqCCRS4MrMdvwg2YsjmPu9fnhakcfGGCRkvbpwt1qobaomFHoxLL3jpYxQMEna7zL838zNdR8Jj5",
  "key26": "5KFb5xHUPN8oV4UE4hXuJPUXw5sVrZWCK9qM63e22Vc8vRQsdBofLJDQdkxx2GoyPUUwTcNVFLeiX9bfi6bifD4U",
  "key27": "X7PbYey3xnojDARrGiVywTcYykkkjgYeNDAR5KhpBQc99omWDzdggGY7VawSKviYRJcqWtjroFkjCDrTHZjns1d",
  "key28": "2XqSn4uBEqTZFyEARwQ25fqDUUYqwSvbk2M4E7Dsu9bi8NDhGzEvGXfkF5Xi7YUF6tBm48bpyU82v6HW1uyqnMvc",
  "key29": "paUggTGMKK68bdYWQ3N4YNMdcYpcnkNN61Buegkh4r1e7kWQwegs1vEzohKiR5MnTUVy85Nf1btyWXsdtgwcEs7",
  "key30": "4XzRxEN7oH5PQtHeionZrEAJcb79aDZsnuXt3zhDZJzNT8sox14UQ3u2sGFEMQsYoJm1T8ATn6FNEcFjgffDZmUV",
  "key31": "3LL5BkXYXYGsB8P8rhJHxwTRkXvZpQfQmY1erAMZ874WSgwCuNfmMHeczTtEpqQ1sMZLrsPKbFXfFbXwmVbKbeDA",
  "key32": "2Xh12QFSsFigFxAyde4eK7uwbAckYs3snZmyTwykW1MJnbxBPQEQdJcMJG9LemGvzfKsaNzXAE3e5azFiy4FNKom",
  "key33": "2aH8eZwMUJ59xX5r9Epm64QJTo3UpzttqkEqPSDzjGNUAvLAZbagBFSbsxE5roiHT5xFQKFDP6fAcwML2apS7ZEe",
  "key34": "4n6DfkxY4536GH6Z5YmNQVKqQ27NGXRDhx6kesH8TtKaHCWF5zYMfTe4V8A2vG2DrQ3qLpuTy2ex7kScNobdm4e4",
  "key35": "5SXmHd1R9egqdgA6a4ox3ZW4yiSJCRTMikVgvixaCuXhCWeuHnRaN5BGptkbMvv9SAEgTqJnssegZwXso5G1Po1j",
  "key36": "5fsydXeRFcFJjaxHNxtPwx2RbRdYzDpKcJvKzxU4weEk6XqXygx7dRbDDG5cHzRyRtDeCYZeQqMVKpFos23W4ga1",
  "key37": "2f4TKeXNmLVuGcQHpj9YvqkJsEHzg7YYaS95oAFX9M63FQ9oXbzX95nsj8SGkB8we6ytcz5fLZSm32ypDTSK1gEx",
  "key38": "vzYeUH2ygJiegz2CJZfmckn49aabs5urMcTGyvkAaLNMemnnnTVDGstPWRRBVCwD6i5B8wxifjFYFdpzUgLBSxZ",
  "key39": "2BgxAucRdNcpaAWuETBRXx588xzThqKcyTzYC7Yhip3wBYv3cLNAiTbVNFkAFip2zuD1VmkuZt3t9TJJLvKwbLGD",
  "key40": "4rNgCWZo3BAyxuhLdGLcW2swbnZp2hy5F8fKxDbjdVeJPSBQD9RmSnZEti5ZgKN5vANFzRYxbXNUTcMBNNqt7A1n",
  "key41": "646mC6PuoCBYkmzLRe3RYDq6wnngzgQt6j4jr2dWDvF6BrF5RVqaydWjyzpZWAz6XuLPKvMuqAVRbpqAbq4p5Mw",
  "key42": "4WKJe13NK6bxkhoX9rDHJZ2qNivWybVKFftcS2E29HdS5RHy8DSV3TXa7QLLagu9WY6niAcWu5dir9V8YV5cCZ1v",
  "key43": "59M8qtppv9zkeAhDNdQxnuPVhYfWJWBq1i5bXvmxmHdVjgs1mYRCEQJ5PgUdJdP2ZmmZNSwYw9BwanhwPLyRXAsE",
  "key44": "45DXnMPo1WnKe4hEFz8J6NcQonKfRD2WSEfKfNsi2opxMPR8dBDTQpDBH2jmrkiRcjVHs8NAjbAJqUDDUpcojubv",
  "key45": "64gZdnRoKBDR22zTHJYoEfjP9mj4jkxELwtdLoXNMJjwNccbuYbXYJoHiQsfNEqg54fYjwJjWWxuwBEeY9CJY7A2",
  "key46": "BvYorxmAnDpyzrhn5m6GLtsAekqy7SiHeCku6UkTaPx5CJyKDzSuQKBDyXWxZsnZL9S5d1HWCxzdEZVxnihcEC7",
  "key47": "3S2bW8DNiSCu9csfyWyaEPckXNbCBgFfjFSzM5UGYTsPj3uDEGF6ngyL69b8mCczDgSf4p62i5pZpQWd9r89CpwV"
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
