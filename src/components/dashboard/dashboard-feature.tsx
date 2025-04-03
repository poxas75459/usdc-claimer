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
    "3fW7TRa9iY5JXeNCXCEMJdXDgoPHonT6eDAG1hT9ypeDFMxVuHYnYkUxDr4UXMGQQwS1t3YbYgfaLQWxK7yATMYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42PBsDgz9g99EQHfap5yyifPrCcd7jEkT741TD1WnctNpxm96jwedKm2zSnM2BvvLNU3LR93qwAAnwXJ1ADJBKRd",
  "key1": "41JvPKHPzh3e1uweJL1mAAj1H1c8VPLzaQgqhmg4Avnx8sLNGxv1SePgp2vxwGVZ1z8Hp2LGf77vtHtYkNNjb9xT",
  "key2": "2ZpSricNvuhYtwuDTWKhKdJv44jMnFHcjAvbw45YF5NQb2AitSv4PKyDVHeJt6Dfn5hbENUbjmD75VSTNzGsKnWG",
  "key3": "4LoA2f5mzaee3CEN8rCsf22U8zPVFCQJbfno91GTsd5jNeUhuRPQL5QraY8koZdK2qUXm41FRm8FKYKmg9R4Lj3n",
  "key4": "5n61X6WkM4NuesHDJg7HG4ViBCnNWdtAUfMcKbCVwBoxeq1ZeAzKRtCtiqsV1ACKUDJMy5surzGm432RBHvtojFd",
  "key5": "3RdkvjgCQSiPiRcRrZSo6s7VkAMdeMJodXcT4hGkLYkddE4rUhosSpSu77HKacMgefG7tsSrNSz9ae818ZAxa9RN",
  "key6": "4fF88826GgDoi9FAFTr9FLvNoxQxyxzkHunskx2HzXr2LbC2xDnP8VLYCsbKApvD9bufZekL9MDTDo8F3hFdFb44",
  "key7": "4BJ9d16k1eWwChrVLk6S65bJYhYw1P1M9Ygc9hENKotTk1SQNYS8dA3dBBbdEGbNeKaEZAe1cbSjb8atDpq5ZG33",
  "key8": "2eoCBN4J7s2tBXkUzFN2rbS34KohbkUDjs6cc1rWxPgRy6dYpeQ34uZb7FgnNztuqzvNL1gTriBm9sN7GVm4KQH9",
  "key9": "gULjtYNS1JBCPCCbFdm7Sk4aKKMaGuyj4uSM8UD8oiNDzKRHS8aoWDR7DoCCSC44UyyVhLHbAWE9wJsi2MFCEsz",
  "key10": "4SEoG6XKABfzJHh1QCsLRPT5HCYx7nRYn9A88wswjb85PdrLEdAPTvWe4U5fjNTGXQTc5eym8GLNAsBxpug6dho8",
  "key11": "3qCXHpkHukjo8FJLag9wmm4YY5fqvob58jFbtRyaijUKjXVMFZhK5bJAWBXpNVHZt79sw2Bb7L58DyzpRmVYJM6M",
  "key12": "2dzQxDnd2m49ogp8UpbALtV8HQusoGC5HQfx1BUiXDf177hLsHJvKjakhKdbGqRVCwjkEj6AdkjAHyg9LnTQuEVw",
  "key13": "3ZJ4KKaQQrtTjTnLEAUk91QH9EPRKxTsW6YtsZYPG5C2PPBUGr3oP7RJwSkAWdMEc2pAU38AiCs9kfNsjHMEwxoP",
  "key14": "91yJAj3b3Nighz6wFihF2fX4aMQtUhxs9p4eak6Kr85cZE7N2Ub8UFau2m3VndZ4CpB5Aqxq8c3nnpmbGhgpdsG",
  "key15": "5iJznBd6LXt7uYKEjNPxo87g4sAUMmtJhawdBdrTYZNsLr5M1zgwawYpSZtJEVEQ1aoMueEMuCAag5scFUu74xxx",
  "key16": "2M91iZDd7C8B3hNVAksP3fL1A7C7E9BxkdjEaru8aU1Pjjthmfxhz1i4sRsmUcH3XbK5CJKQe3dee2gT3ypSshgk",
  "key17": "4UPYXxLR4JRiMcd35ug7boaHxukXeyGKYMSHPBdQ8cZXLo3ek1CYk7c82Ut2F4Lf6qHQqbDBMRiWqLJR6Ws6YN13",
  "key18": "2hFZ3nqTBKFjmVhsqWTez33tkUijVPDorK3zi3CkCRA2L9nXuK5YfJwkF52PxLdTELVDbEB1LnXgPTPKpxBRXjfe",
  "key19": "5pyve81yQGZDwbzg5euGvyJyBRGw69MSwZcWYi2jUuNoaoj7K1ajkqyfC5YgxiNexVhRLo5ahKoJTXpusfCHYSm4",
  "key20": "3ENqDkSQTpv6xgNZx5ibknY8XNVNNhTgxzMPAMXLKdMEK7xwsP2Aa1c4Q7irvdmsuHx6v3oB8GJrFSapdhuRsvUm",
  "key21": "mdBvkG1gaohGde3quTCNJvzfWp3M6RbyA8PCLzicFxZBLgxHt1kxUkzTiTPx1asa2LGuT1vB9KPh8ozTLiWu6tZ",
  "key22": "2R11SUqpZ5bwSe1fM61cb77AVL479KdkXPQjG6NjcbH4NW7gHMQpwVGfEnP9mjLEiFfxqtUkYc2XdmM47tVkZG6i",
  "key23": "3FW7deYHNBEgMD63fdH1VVMj6Ec8Qwi1Z4ir1gdurxyLMZx77vxVkZV37yz3cmyAraZermFLKbRAioHP6CXcAays",
  "key24": "n6WL1zeJk7ECT3STQa28fhHNA6C12RqUckiVcGt7jdoB62raNZv7Qj8qn1PpyWS9TLLFLtxQMXSjHNpgZAg8tcP",
  "key25": "3XCu2HmMAJ6AL5Y7Qbfm9DZ5BsAsENma7tZdKGGPGDa1U3B1Jv9XeG3d2f3Jv7T21z6xxhgmEB4fkUCqrJ8m4QSq",
  "key26": "4iMgqXwaxfQT5nEYV7juXT9GGxXDAYQUrfNPN2oWpWmkyLw4i7LiYN4ELeu1agG6nAxSiyZ2wXUUxgRdqNCgXEwc",
  "key27": "2THmRWmG6xpUw3eNR99nbk6FnqwyBJFWFjRQA8itSGoNvvgMRJB2N9HSLaBMmPtUXD9gGt4WJmbJQSjDoD7nzyNg",
  "key28": "5EGUMBMGFcTWPtsU9B3Q6TJSzeqhNS4vPZtiKDs8k1yfSW2FtQ4YcgXTgsZuoRWUPonUZi2KUz61isMvxLXajN6S",
  "key29": "wRjegPavJKFLaYvq7uAKPwJWto2FhCMPJWqdMtdvbcWMwCshD5Gkww2nCBYX1HsdpSN2uXQEBqvdkmLkp9RwSTX",
  "key30": "4a8cDo9B1zWiqCcxtDgfXFjhUmWgHvNe6K4QxD1QJKt3M2yyCAXutkDydoyhXnfQiFjkT6jDLa5wTWZu6dfDRHPx"
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
