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
    "5rih5Ws4soqWsvqVtnWUYybv2YmFZoa5kT9zDwiBUHGiATXsWBuar5hWoRNzDv62dayjDA9MomRnvTWLUwU3UijH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDvhEvAWJsAJdzH488fCH6Z9oWXAr6NAqBaYzYNRz4X4t3xLBFF4E6FxVaF2keQpWFaHnijVsc9ZbTDpqZ1Wvk5",
  "key1": "7hZESCpeWRzScD1ZY4eQs4jgtpTmfduphM89bxWVDbKXR31aR7ArKZn6ELTDqx8PT7SinkH4xYZbtV33aCT1GQA",
  "key2": "o7kMguUYGMAiZJv9AGcj1g5UbujDjZCAWUkGjyLCom7AhcpZrBzVHNeSYwc1R4Uqawqo228xBF9XLiiQWNhmQP4",
  "key3": "24DsRWn57vR7wnMtFvjyvtJ26Zyz7w4HpLddmKGZ181Q7yzRZZ6bouj7E83gtyMDtHw6bEryBHuiRzvQXbShpY4C",
  "key4": "3kfSHfqJXNw5cfwgLTtSgQUCYqDbHHpMMF6tuTVhiPWwqogLFJkcUVT4MgHuD8T1aBj6jUqzCZUTcPAYJArjMRdr",
  "key5": "5wHqwEMAj4uE8cF5hTw81tfqiHaabkhPetzJLRJwAu18DG5RDuASwdm45qfKnArg5K3e1eTkE164uHUghinhXfA1",
  "key6": "4vUsCppB2zHxD33KN39N36pJeUJg3ygYkYpd445YGAPgruCJWDSJYRSchyaUULxhpXR8tmtBA8fT8wD1qXn529da",
  "key7": "4JKZQ6yWcmxSe6qngNfLeP9vf4DE6NXch1WCjdLCp366gdpt2VzRrzsAo1hQYvJhN6YaM43psqbmTA2QMQYPGoEs",
  "key8": "29qgNbpX3scH1t4a3qahz24MzxXBcNWwVnbFdX73gCrsSxLM7Xp1sqt52JPtbucrZe34W6XoFyUzMaijRAwmWSvL",
  "key9": "3VoRsLLf2pupVe8kDTNDjriG3DRXDTa2AiAErjcddTMjGmuWd89GVYESj6un4pg3REtgaAjXvA48iN1XdB5CS6wK",
  "key10": "4kDkMve8PpTPyu8TNPt1o7wvb8j59BuTqZ2jK76SnMw45Q54BBZVsJxbfH9CqQkrssdB6Z6FYnYh9mosd8kJmSxb",
  "key11": "2ery6PAcD8J1FnQGPoeeHr5sRjFEc4cYjDDoHWo6QvF9wkzmyLSGPphs9KuDqueGmmvvbW8uELWD26VU3sMmjQE8",
  "key12": "427NRqKCyoW6xppo8LdqYPCNo7bFregHhnH2CeHZXiE1fWaHjvMK6CB1qCZc6SBetzqEBWo7G9EBXWUaQ1ZZibQt",
  "key13": "2gon8nRp7bPFbGwNsPV9SpniTp2R2ZUEDMrC5jYnBRDK7PeykBXYmbLjwbPBrgzCBRL4gfzC6J1m91KgSuvpTroG",
  "key14": "79i4sgt21UUpivMWtAEvDye8iJyt6TALU2tUSLw6Cjpw7pUNJHPtsYcozML14Ji4HuRPV2DXMZLyXnGE9UmifXU",
  "key15": "3MkYH6gLTmnqTjb6Qbd1qDQ8pYwTf5Q5srm1r3qmVAMG4i4hKyFjBzZYCf6CV5WKaym1gRwTV3NCcUqp1KHw9WdV",
  "key16": "2suTWbzeoSo9vp5Tf4pjLCvjrpgzGPV3BG3KCg84xT89SV9nETqueRAWt4qAkrqs7o2UZYkEPZkUZZBixKB6muAj",
  "key17": "59NttDcRYaEU1oRU8yZHiwwkVBwF9ydVhkwGvePhn95w1pHG2us1KA4M2pNHJf8ttvm1ELFCcF3ZuDKq9ybAWk5y",
  "key18": "5nr7xgJgf7iBEWgovo6hthK7W92EEoRTXgbeLxQgbUXrazd2hpCKcbMCWpygc1GuhfXTgtkXzFVektgbBRMBnzXL",
  "key19": "5zkrkqHKqLTBPv6pfv4JJrgfRZLxc4aHXQV2eakaTbkthL5D399dvYzwx6KSsSQmzmb4536NAXGwXhFtFJhJBsih",
  "key20": "25DJFnr3LrSDF8p2D7LpT892SsNcNfemhVox2M873CVJ3tYTGVUf5qGfrVmmXVPpmBvmTpYieeZGoug4HovbBfnw",
  "key21": "4C98ztrZL6V5C9eg4EMSYi5McrkH3jsW2HUeFhC8Eb7grBmRrBEJ5rwExZubrHZPuQSqJGi2JK8V9UG7URGR19i1",
  "key22": "2tgjVG8i5N2d9gBvs4Z6rGLAjqdgxF6kiFfudLqsMNr6aUSH5sABQ3XFtA2mf6Fts6wpAbiVNkj2TJ4SEKpcxbRs",
  "key23": "2NUhKTTucXriLHEKSZ3dsn1xUzffcFXtPVfxGdL9cnjchmSNka6GwrX8n8hfWmsBV1PtuAapJs1AngxbskoeBwwt",
  "key24": "2LeSUkxsj9Abx88QpW2rusU8oyCDZEW46LbgnG2Vq9SxVViGuPURinTcagMpUgAKZVokQQHcyw5ZdCNRQKd4W5un",
  "key25": "23RxKjDn8jvyr335uiGrY89Z8St2rUBBK4FrmUukiBFdJ4QnbKEFRvjTdcDccMkj9723F9krcirmxxK3jNHFXyuQ",
  "key26": "3qNMW3jgu2dtRoXgQ4cA5K4nWkAiWkGF2iMpdWe522p8VAe5hfK1UvG58z3JPnKEQux3X9V272gJNJKh9zJy2nD6",
  "key27": "3FYhrdbn8HmS72ZWhNN3LRwCUdxhq4UaMnWyFt8BCPTYgJm2QwYH8r2VNSFF4LFb1UGGgGU3JmiYw7KhXtV2H9UB",
  "key28": "31PGQnjmw53MS2ZwxqgQyu5ry46AB1vHCeEMughST9c4Wz8kBMBMSZZ7yVXVxvs8dEFziGX15iDRAtcUWKGU8w4B",
  "key29": "2cva6AMHXUdp6jMcSDQLjgb5nGVc6mYA8uy13ofNaCPn32bWKKk8etWy5gozb7k71vBWuqXedcERq1sWgwBWx2q2",
  "key30": "TdAG5VXvFgC7ter9hFSdqasVuwuAb9DHPegJpUr95SQzDLx6PJXKUwY3zBkcECe5aWoj2YYj2dL2e7QWYxN4CHU",
  "key31": "3wo1p3ejB33piHjN5u8HTwyKUjVjNocP2b449y1u2wSYGubY7oAwAHYvN3Z46TUyuYrrtUbrwKZPnB5QcSPuAYxF",
  "key32": "5NZByBsmdUYq6yERdC2TnTJm2oC1sWVypAYFaaxtyhvANpozLW47mihvAsLe25uyjTf8j9BEFCJjea8xa61W6WgN",
  "key33": "5H4msiDdcs3QKsyyVYCeTjbU2ajmVjK6gxq95n9s5PCxJmr8bux1Q45Qv7CWnxBLGUnhgTAyPgRY8PF1QazWn21H",
  "key34": "52P5SmQSxpAnLdFpJwttw3s3n1n5VUvB6rVLn2i2b7d3KdZ3NmzEpJV2JxVxaMaoJxwBbU9zzR5roHC2qXwT4MEw",
  "key35": "2rngoYVeScupv2oUZuue1bVciBT9iEmsA1trN7UUUMwoVzLkDYYZAGWeFBaZrWxAe3PPjVJx5b3w1zR4rmSSJQuB",
  "key36": "2EkYxb4xjnXjge8owizLhVEU8EyggvsfNF4PFfTW4xMTWAyJypHZYHy5vgpWDu9HariNz9pDSyQKs2j1ynrTaDok",
  "key37": "2Z4y4c2dzPQE712UQc6XnCciRSESB6TuF4vDRJAEsFYmMkb9pkiNFNNSYSkPemo6rLuvyoSSwECc7cFYsGnBAK8K",
  "key38": "2Yh8unvvABonwaLMohTGQUcaWA4b3E2KAiPEcVchyTmBgT4UzMZDJTLSkjnfoozBdNSoRJ9BbeySyREGnHkStium",
  "key39": "5fen2M1fp7pjDechmWkuxVrVHzRMyTqzxwu9dmFcke3X4W77EAUz9V54cCqnBWi4ZeFozb8uxDZFLB3LU89CUa18",
  "key40": "5cu53aUvmQZXsRGeueJjKJu9a5mqVhebNy3p6h5rxbaNeGZSj4zweVgfGBuPjr13DRvZGDkRw7M7pNM9sLtkdJ5q",
  "key41": "5trFBCq7Qrz2g5GPQgJL13bBi8a4fNQGJcj59TKZc59Z71Rw3y72ZsfbsxGYX1HPdMiQcsq6ous9S2ayjRdjTiSz",
  "key42": "2Pzxc6yZTZdoyQiZsFGk1rwnnEeF78erxmN5PSvdrK3cnk7QW1mapEQEBLhWt2wXmmQX9kBD54PeR4GbtLLe9Hs5",
  "key43": "fQsF3ETrVVZHrgkwuhYuke1YoLFkWfa8wxNLmN3e7oR54DaQMhb9ytvnoV3GcvbxpYpPFVnqHCP3K9vNNkqunq1",
  "key44": "3q79Q4ZkkoSDxQnQWsXzEmR11aC7e3dtTnb3wV7sYzT2eY9xradtNA7Dhe7P519qqZc7T5TXbQ7CmJv9ESH8zBfT",
  "key45": "2Vco5Lcj76SpCj1qKdbJWvi7Q8DckU9qNqEnDfsBT84jH6Dd6arNX7Fbccjvf6soNACGV842CPEtojeM6JFPduRR",
  "key46": "5xQ9XNDFQRjAjv5UAqmNvq5HGUxjnNHtTciW5nzQ8PDgGEFfWtnws25kbZwjUMkzBDvPDeukWxtCPpWWA2eHrcTY"
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
