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
    "4U5yxwh8W4NSNFTUnRBdx1CCsMZJhrG4ByZ7reD6rYQoL67JrQs6CKUuMJgZFoFjuDB12rxZTp1Qa9f4kwJruDaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62NuZS5YB36fQki8Cas8aW3xtNDMpXDFnrz6to2etBwWb6YZ9WomRRjACB5tyg1ih3RLNNsNag7LsaRcJK1A5CyD",
  "key1": "5DrEWdLbBBgbcw8buHnYiZGzz5KddgEZRihVqsDkmGQLYN6srsrwQx6S4rZFCoehywcegHCdZ6YyUNbG3EX3MmHs",
  "key2": "52DoM5V92rNXmodA3DDjGa8dY4mj4v23g1nGozsQZcssU5kLbC9rfH2gfe2axQMryxRpXMEyuWsvf142FMfERfmg",
  "key3": "H2ESzij82BTRP3d6wSctXSW4gXK74punoX3eTRj6avEmG5gpP8amRikSwYxdJXcz3CrPDBhejxuwiR6bmrC4zZW",
  "key4": "5w7AGzFjPtv6vAZrwSUF5NGXRgUxi4d8YeH56d8S19ppDoq16ELoFYrQhWCgyeJbyY2F6xZEQHq5wuu8wigR3vZi",
  "key5": "3Ssx8DkY9LXwi8FZHbn9QQTt2SLuE8Se8tVSPDyw759SSjZLhazF9WP8PXVbnSmp4WwgCULYjRBufwJiL3mJu798",
  "key6": "5zhcBSzQm54gdMM6URDJnRqySc2HzTkBa1xcjALrgupNYUdpZpwd5Vrn5DteZ8S3pg1QYkdvfPsBwQ24AgbVQr99",
  "key7": "3wX8M8NcCfST9EVrDTsfCgkx8FXoWLcUNcDDZydiS8axmk32ShqEBup3gNEjLN88vSVNt4q7ygSLQb5FezfZCqjb",
  "key8": "3mcsS8mTNRWbXCRaH6iweAUF9L3hp478oySw3t9DXZapuc8eThk41j8uaP8iVjWQaM1PT5DuHnzsQwWkjVrhBQm9",
  "key9": "5fy7ywqXYJnsKP2iDK3nc3qQ9yjcWCEX5ugshpsGHLux4DuUh8tc1taWWS6iTmjoU1AWAg6UmiF6y1G1yvqVTcGh",
  "key10": "56fryG8yciisMgeDMGJyD1y6ZA2YB9i8voZGCNgHQ4SVpBFm3iTKcX2mKFupvnRfFfvVTohMJQweSWMGCy4USMRC",
  "key11": "5XXLwXvh3BHNRNFDh3jQy26T5DXdQ9jHRGg2So9soYr8TnaPrgQ8VyZrjHYi5DTXgBBz8pVhyx51ftgQfBwKRNvw",
  "key12": "DCmU4Nrt7ZU4UwmLEu7qD4n85rzpp9mMu25RPGPwNrRiUBEnXVa8zY36v6ekaPa41ow3QBvkUJM4BPr1s2reVKH",
  "key13": "3uaoSF2oYW1wQjUkPtzJxtrWGhyQDYs4Enrm5fqBnz3b7fPaQgP4QtrrVHVhgSiGnxaLjKC3qVY9QdwsAdtGGzGW",
  "key14": "GMrXdN2ZZAwCdxbU556DQbUkmLskJywUWKMxV1c2y8RUfPfw4zr1i9mAxe7pzQuGz1w6EATXPu7YxTZiC4iDe5M",
  "key15": "5CF3rUYFiWpBuKZ3AuHhkoGtGXoq3PSi3TTQEiGJRYsR1vnXZj6cjPqzqkxCNvtaZrnwsuQ5Lwf2KTqi9876p98q",
  "key16": "25fLwshMuXtys13D31K1nSuxNC7nLnrR722NcA1Ya4z9JRhM5soJjF5rexqCCJa6uFF8gmAK21FVBFrNBkyyb7Ew",
  "key17": "4HBN6a4RaJ1rybnBjmWNM92YyWScGHG7iCjGxHPkaZWbkMNKPYKrw5rWD9r6zhKx5eJBegdTgD7L2iYKLPhfx9iX",
  "key18": "5CpriyMXiun75Exjp4Y5UTdF8fSZuFEm8pGdn7sHW8oPPEWNM8j8GXxPScwGkobTCY9a34QYFwMmPUxxTunnDPX9",
  "key19": "3cUMFcH8xvakF3Dpm2uEofC94eJ4Rb3tJiJLAAMNSfRysvwo6txNfBu1vW7P6nESBhKmePeFRwaSCDBNVnwBGVr6",
  "key20": "64abQJfx9V5uN78QtTw33CyKH4u5wQ3zfHXuHSeGGACS34qQmtZwxJwEDExJqLw3BZbstyyLzX29vcBVmcKkkfQ2",
  "key21": "VUcXTMLoif8nJu5TAbgZ2gS16UYME6W3U8EdZcfUJcfKnqLzWTNWQrZMSP3XpgedjXxXHG4Bjd3sacBxb63gqF9",
  "key22": "62BVfRKdmcd832cqQ6jAMGK3LVhFgRNvceqhppzcAjM9XaxT5TjbPynQZPu6TrxLQBmDkL1dXfJTiTZqJo2tPzv2",
  "key23": "2V98Kc9J6pJWh6iQTPuS4SfJEGCv9iWkY92kqjzcoZAdaXM7yWprYvVB4vv6WMrimgCtWWUZP5LQjTiY2t6qdkAW",
  "key24": "3tj9WMymPr5Kp935dU3gxet44ELigScwfdcVft62ip25cqNdAL4JA6xh956sQj2tm872uAPc83C5o1re77gQSgge",
  "key25": "yU7tU3qhhy4d2Ys4UQL7WL6svVChrU1vbuShNoETYCcBefzNo39EFRPKhbymCP1iqhHEHTaAYAWwu4CMTZ26Aco",
  "key26": "4zPYNFaD6emQqSbLkoqJrXsBKaERQbcoQctnYLTyfRCkXFSKDVL3ms3f9cEK5WrjbjwnKubic4eTs8wykMwzuBiR",
  "key27": "5uLA4dNqgEic1wK27Xm8fSbasJMZz8ikRgeUN4j3HjKfvheniVrkh4t8KxYAgj9r1X8DsRKN2i7ATTWunJDxRZ9U",
  "key28": "ovfM8bphzV9McLmEXFC7bxk4oHqJacGgZkExu1AFB19BukdcP9ovLciorgwdrkCWs8hb8tL3FmgAsM2Nty9LYtN",
  "key29": "3FZEJA9SJbyXDimYchrv3VjHWXcpwvK4K8G3MEb6Emuk7YCFUS8wzcmNJtMgLNEksE4tKDiY4f6WQGNK7PxhWnKc",
  "key30": "3wAfB7MJRQJVPrFXcEfMjhBkKuzgRek9BZdU52mkyAawjRYBFQUWo2ba6VL8tcBXRacQfH7F5Sg1pkaZDd3RjqUt",
  "key31": "Dhy2otkq4gJByLi6h3u4fUkcC56nGGMfG7SLEjHw8nGGRfAxBU9mseKv4QiZGsTEERH9XRBFWymJvhvPoxzjLwy",
  "key32": "2rg2xrRGKiyNwcysvt2Qo2nfW88XFGMAaQ59Ex1QeH2VkuTxgETPY6SJjyAaLtyyu1hKc9EHArCQs8qVoGkGv1DK",
  "key33": "hSuA654z6ZJ1wgo8WpMX7C7RD8dci1g4KWVEc1BMnkscnc6RLT5PGv7pW1ecce6s3FKYDS99VbKFVSEvu9mbBT6",
  "key34": "5sTQzs9hKeJY8gcRP5dtKAtr51WZRud73nYVdCDUZq7Hz2N4VK6WZAnNsB46Tss7wzBcWN7honUnicB7Bb9UFTXe",
  "key35": "2Rj1pZBnUx12yEEBtDVXgiXyQLx4zAijQw9SxwP74NgCNKW6xs4ytMaTwjcFRdW6fapGwGBDX6iHmmtZkBnUuino",
  "key36": "LTpeMapuXFo67y8ANN4ALuxJHL4ADZgytzNqFitbnYj5E8RNFTmHUXXk1cZjkhcrPjK7VMtj871MJU2tYm4m89f",
  "key37": "XMLeYuGCZBDUn3BbfKLxVVdyq2m3mxG8gcu9Po679DPfdoXHMC4TY5wTHoaXQ7pfXpZEax2rC7esrNZgrHWFuFf",
  "key38": "64Y7an6DW79cvFT2gRtWoffgWfJEtferBXcWcAhtpL7M61GDigAyrrRyovp6HLMbazJRekqJREKHAikxYmYNmgug",
  "key39": "2UTieoAEs7Ld5hLihiSfWjt4PKWqcnDDgc9z9XrSdYd5FwDJ1kLZdrACPX6kDUt8A7fKUE7BwTrybATXfTjaSE51",
  "key40": "5HeRFMJCTzHioMyBTR91Z4qp6xgzY6JTWNcHNAEMnEReuEh3JGiWVCbhSZoFhMbhVvToY8r4Uw9QEAbaWkPVVEGQ",
  "key41": "38ZixRkWSpWRFJz91Y2oT7XL7dMbRzfb7JpyULP9GAwqEFZHkP1kfBqgTZ2E463Lppdn4xByhRVVm8U5QU7ARmpA",
  "key42": "4vQfoFaPvubiZsQanUnYkfudVjMGw1xuCGDu9Kap7v4yqP8s4bHACfiwym7zwdpZxry8MsAWCA8AaAmX1rgkJMgh",
  "key43": "2ZHE7cPJRnfxSofBTr3tKdzYb7A82kNpr8sy6QrWfKxugWJ4tR8h3DaFGpWhq2ed83s8TnZCnLg8eB76cC2PZtHP",
  "key44": "5St9gFyh5KowTTF6vdeAH5ppqhPp8Bu1moNrpNrbhST84C1pbqxNfHzWvMBTbj87yGMjLa8LzsptHHDoBuVLH7Px",
  "key45": "2GvD68CHjE6XhassFkWEJHDrDxzsF1TWfNiUW4TERLFVVNrcrxyxb2atsoEFtHdQCYR7rAm6gxnNKqwtX2GhXE6c",
  "key46": "32FysCwS2UWLjUhVgJaBxoJdiZRq8mxqm9SQc9LvHyJ3UBJaB9MaouopQnN3UrSxo9xT1SHdC1wEHVakR5EWMWoZ"
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
