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
    "32rz5F1owF8kiTiLpL37U1hq5mnR7rViKQn9AJXjokJ7E5bCyg6fcXgrALJsUjij9AuHTmpwBcfJehFxUL4nrsk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ca6hJD57x4jhpsFkdCNJ7dRNu4fd9dG3v2yqfBRgT3zUhgDH1zUoNxhdR92h79UwZQNxqd7JXF8pnLQyAsYdGNE",
  "key1": "5SKz8TBpSBJjEjmDHLKgagU7jpcE98u3Nft5C1e3wu7hH8jcLTKLain1bzusGjm5h33xxYbkQbzvphC6odDURya5",
  "key2": "2MwyvM9VeCHwF9bpmQNY6psDfhB7yCKPPuPp2SEKBBUQ4m6MUGGDzcRSuiiFaXKdrjfk67z52gvoB99AqNDafaf8",
  "key3": "4NspnHmGxQ1Te5fuMdWxTSMtFpujMhsNYNxKb3fnjr3XU69BGC56g6SBmDP939Bx8ZyBpGa6YYYTFv7aNceAZYwM",
  "key4": "2Ddoqb3zg7oV5MTR4CPaYMrZ9TazeXH3E9eB3Dpb4xFJEXHFHkW8dGszrdX7KyxoBou2zWieE76x1NXsn2im32pA",
  "key5": "mr1mJzwKQ1NJkq4iSjveunohnC1S8TVLydyahy1b6YnW3ipqxhewCK2NvXkpVUoxcKRicAVgdzGe1eULk9pDJE2",
  "key6": "2SWmDcFpt88XyNyTLxDbqD7ggzuz7tE6ZUQf6aRQtoH56p2aBbHZAwVgHufZeWhfy48pvjdK34X97BHCuWTstPVS",
  "key7": "42Eh7jUoPbxLHw9MtZQJ1jqJ9EtSmNMy5833Etq1G9WRe5ici84ghHcMqzEFPrDEJwCXb96AsNKnNfbz6uKDmp3h",
  "key8": "3uJz2HF9ZNt93PXAhqXWRsZ587b8WtaTHdZcMJuAi9A7bGzDMGB3uyn3s2M4XKSsddHKzrvmpEukaztGjXw2Ms5h",
  "key9": "fXfrxrbzDn3gmkYXq8JTn34NcM3zopEvUa2HxNfbCoVT1ukoBwNwWhsRvbZFUb1vA9SmA6D9DEAC2m1ijZZAFTZ",
  "key10": "3zKFBhGJNLqJthkEhEq6uMUffd3ChwmyQLBucPZ7KFuRWySWFaBbACeJWBvJfQf4nC4U4by3PRRFfw2hT8xp94rS",
  "key11": "3kmeJss6pBqUR22wnRhFpeJM51gvyK2URWBDRkMw8J5Sn4fJnYzUYXJyH8RcG3ja9VcSHfyKWR2KE97F7C3bJCjB",
  "key12": "2fh2PvuGBqkjEdspvjC7uFiEKXkRXCAw19d7gZjMceVZUxCnW5zWc6VBRUwXe8AcLTYq13taLi6Ri1XZCmhjPR6C",
  "key13": "4yGcD39XaUqYtXJSGTAuJ7rZ1ZGDWiybyTZxNTf9PJ1hpBqohBUY3eRjqjaRMBUzFgWBUo6bHUHWrY1UPVQWxc24",
  "key14": "4DuS9HNhk6fSrqmepUJ4gcojTg3fGsNdyDhv6ErjPNgC1nKjaRmx7ZZ2vE18hicyPH7EHYDmisbNUkMGq2Czqm8n",
  "key15": "45xwqDWaraE2mFcp6XwtP9PoKznPEq3zSXZpnHr4Ehs5RUXXqetwKNDB1e7izboAZA5vjXFqvZ2u4EgMrFjxEhe6",
  "key16": "3L7B6TcZoahNwXEBNwbRnfYK5azKWatPsvgbrbgurdNQULS5rUyu5KXgdf7LTjAtBZuoiVWVdfJSzLfDxYRND37t",
  "key17": "3YSdtxnX4UwUYXQfZmrZhR2S7vhX1sX9S7e2QVihQz4PWbD2SbfgEz9nnXDD24oK39BknZdCJEwPFdyHfcUbNfWj",
  "key18": "3Hqrk9CBW2paE6MRPrmLe3MLsT8U7KvdUhSHoY5C2K1f9xV2k9XgzEUpRoxHQBS5g5eGMjhVWJi2JbEDMP1YtQGR",
  "key19": "5qmwvQ9D83NQBtoTurgocZWWcW9JaSbpv6oewCvifYMqYjDdYXNr2uwZiiQFi4vuzKvrNkYLQmFBHwhzdQGAAD31",
  "key20": "52sjwhUKjYe1hEFJ8SCmv9JP1PFpxUJf4kVM2AsH7KuTMk6tAPwup6bZ99EntCuh9HJWSvxrdipurxX8qFohW7A7",
  "key21": "EsesjmuWeUV3SrTdEHKpcXXGWY1V3XvkHeCZpRvgfcFF97skWXuj9xFwzfb1TQcp65jz6z9HQL8X2LSNdoevJF3",
  "key22": "2qTGhu8d3W2Bb7Q6MdaW4CGWvQMSuATndqTYKNoFsBYhkT7VXPhJUhdZNdqcSAyXM8JF8AvGotTJ7fzKnP88xtzQ",
  "key23": "2W2wEh7xvyxg2XTNZPvMcdVH8yfYxCSbzGB3tXvzGB2NTHYDa5fiJQV1F28nKka7ccYc4dcuHtry6EfiNVfTJ63S",
  "key24": "3qkcEyuGEVpArpcT2ch75vkZEKruspgWcHvhWAiNJ4pM8H2S3pmVryT1CibbMgnk7wZMrvtnMgWMBfFN9g9vNvc8",
  "key25": "3N3SXdJxMkepcTfUdJfoMFRkRDn2srn8i7DGU9KtR92RPN2nbpDNAa9uecDT5dgtNffJT2p2vQRJfDQoeeiKGAJy",
  "key26": "23E5tpTZu7jLuALQKn1cMXQf1jNkWR951rVdXp2scrPdS69MciA6c2fE8ikxGMyRuWiwJZAt25PTkcHtMtK8Mfj6",
  "key27": "4Kpxooc88bj583m9jU86TRF5WgrtstR2xU4Qi74Jev8uzXdYZuz8PsfHeXgaUWFJrLcCx2xnKdgU6YD8kGJoRVLr",
  "key28": "51qaZZqeEy78Qa2KBb9av28js8gyL4dtsfXBDPGh5f5iBax7tmsQXNQ9tTCuNvLEics3BrbARUD4GfdurVwHArYf",
  "key29": "4SP4fF5b369R2D9ZfYfyjSSF7DVTxuT5F7RNsUbmyXsprsZC4Bhm9hfnnifeeNzRqstyDkR8nGEpcworakGKp4ft",
  "key30": "nhw62jyWFAVwUswTipWJYyX6CiGCdWmNGjqETbEg9mLZHHpuNaiDg8aajsyMA6p5B4x5yQ1ZJc3Fm2iX2JSupcL",
  "key31": "U4T2AzVw1Fd1pRXzsoQu8Fn7etgGJWNN9fiN5RfwfmrZJ9tabGVDem6T3pWAQXFw1jZULk9e4FfYTLyJGj6Btqs",
  "key32": "3A9Xp9y21zoar1bfTHFXsFY3wMuKRfYc2XXkufYnhczwoe3W1hRZCCie5WtD1mQqfHtNfrMe5Kx4MNNDky8DQ6ZD",
  "key33": "3DVn3a71mhCd95FpjNsRnKktZNzL3ddJNeR6kFw7doPekPtAbdKVXegV2DUZWMZJsiiurMqfcU2tWv9wifywA38m",
  "key34": "4a6Q2XETT1wXjRPMittNGufNFrQJfFpbmqUfhdvXpupj9Wjk5uMrb6GnyWd9EbmibYgS9U2sSbS2MLMAs7AST59",
  "key35": "2KBVj3ofxsggti7gS8rVx3QAqtNLJycu7dGKoeQFrhVy11PvyDY6EDQUJqhfqi4EimpqY5RVVS57rQCn2kNnoFMP",
  "key36": "5FrUKbfnGRKUf2AnGJvBqaU7u5UNsWz6gmoUCAgXaZExxSMyPTWZr14NUaQeSGVKVQCxNrB1FRzUKds4ngo76V4m",
  "key37": "35TUM2JqU12zq1q5ymeCri717EjdPwQKuLvMgGVoE6dmgTUY9Vnjk963yQ14a4437GyMUwi2bF6suQ5TmHzvP6nD",
  "key38": "gBZsTRSwRibjsafSxEvPaMQy8TDP5tUFbyepJQ1HN8cZcSkMNCtuhmvGKyZyp4wKwgYWvhYeTtTCrt8dRrRVKGs",
  "key39": "3YHUeh9nJaPa8okFnc283rSGHi9Q3XaU7rARN4FcSYYPZ8fkSAePaFRj6owfkKquymP8MADqAj7GhPsZxxB8S7FK",
  "key40": "6fwf7LGTd2jMcGJkAvWZrEDQWfWSsbQHFYMBG75w8J6BDi8ny6Q7PBW8JzMHaimatGtCaiTcM6g2VXex99zaFLU",
  "key41": "3o2eBJnUegBSWXugbj2kSNMCw4omnvHaNRpXjYoXFyBbjhRDwNjyX5xRmotbuXrEvzCTwKgq4JDFhSt6dM6wuKZ5",
  "key42": "2ciQ6xUbava1dQTw69L1ioiQ7TF8msDqsYmQzvyLufmkRXQAS6mHNdyNdHgj2gzSD2BrCPcZGe9pAQwpG2Tm4LU1",
  "key43": "3uCEevpTwLZSqakKwkaJws3CFxawVN4tvijSc5jADUMHkCB2aNkeXtyFHwxE1SpruJcJE7xGW5z3VmifEzv4vNF4",
  "key44": "5qdzjXFNaTgfEwyo8iDR4wA5GbUMTitEuoc6BXQN3boyQv6D3f52EpSsCDQEJJuDEXxUs1WuULAqC4BDdTzTgXep"
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
