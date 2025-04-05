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
    "5qaB5rPksdbsUB4ByTYgJnyxkya2Fs67gchQZg6ta4kEve4GaMHRh2rVQZW1mwzBN7fzRCX9bJfczcNCLZLPP2ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTzmM3QndCP9aUeBjPkmULVDHmH3pcuSoEyuFS7hbQjkaygnJtmdjottdJj7nuvy5LVkh9gQ16NjETjwYsMFeee",
  "key1": "2QpfQAULm3Ea3SHKvjLWeq3FeeABp3Rf1Ku26G8ADyDJszmzRmNzVfhP4W9LinJ6dcuWVGaBRPkN3Ux3MpBnQBtP",
  "key2": "5jQFHkwBB7UYdnd2FaaYwQHXnVre45aX1A1iEo8HU7mKjwkvjRaxkwQFjufQi9YpF9EYVhHWh5ntcBzRgXzFf8AM",
  "key3": "p5LqMV6VKzwN14c3X8QG2rAda545S3oTu4sUEWyWrHMx2XQwcZeCuPrSnstu1aE9d6AS7etSC7JUNZi9ppqB282",
  "key4": "RuR5aHhpSYhB8piVH6u3zTTCK6DbBgJop7emDX5VG47zx5V15sthsLw41PUtFzDifYqVor4yKJjbng2m9ocbsci",
  "key5": "3bvHWReBD53QyVUuGmcfitzb56kaxZkRQDH8cp7ro6C7UHAf7itWFKi7QKmTa8owduQnS7b2YvCqEPxRzGJmWS2X",
  "key6": "3ZaFSZEBhG95samh41hWvn4ZJt3TKEY5Q7vtBBpwmE2DwwnG1NxRhnjdW4WdnUFNwHCjDM6cZdQV2SJafGBKNLzL",
  "key7": "5StGai7tNgDyd145GG25Dzbsk8fD1rf6fWUPpiKHXSQBKvF4VaV4VVjzeWUGBxMERQkMyPRpFpMQaZzHZvPbgz7a",
  "key8": "5TxzEyu8xtLFc2Nhp3ZypzyppwZ4Yq54wvqWeq5pgpEodmt6W6ECP7RBX96ofJbovBuEttR2ZX2Zzq6akSUoMavp",
  "key9": "2xkpfYPeBooiP6uVPpmsmLWDrw5XjNs2SPcF3jcvpHBXCmoSCkvgjcv8xsij6YWu5LR7ASVFQ4zBkzSmsjTN3R6",
  "key10": "5djty19FNdHzxsRMSrV8C7JGCKkKB16MUt3Eese4WEhn1xvBV3MXNvxmnT1uPci5ghr94gArfDmun3JpA9TAtNy6",
  "key11": "269Dh7uE9MDHxGMgiVjx69Ye3kZx5YbKhYhS5yigw6ZwL1U2YL2iagrLGuq8H8LyDUSYCWHTGF2JY7sb9fvCT969",
  "key12": "cwqvDeLcZccKCmuTGXsHzgrforpSXFUQugRWCMNeov3JXhf1nmPM9cE2xPDdpdQNtYaaKPwKszRkj5D5qFj5iun",
  "key13": "ryFz1AFc9zLpHnftbThy3nnU97KoP9cqWF7p3JGvEdAEUWtRkR3Znq2wii4RQYKPGUNnV6Nv24iCdzjwFUpxiTJ",
  "key14": "23xycza8iVfQUCZYGRKyUsZb4fgi77LMyDyKe2vms6hHPMmwsy13zeGCW2vKXhcoTZkeFCBhKeRtagUbxeF8kPzL",
  "key15": "77psU93tjTmJHAmhB2NH8MpiwvkTiqeJAgdMi8cE61Z4Sja37ksvUAN6P796mAzH5NccMvFDUvdWyMWX9vMEJUL",
  "key16": "57vMNTUpF9s1QaytFpcyAswvMbRZonfhpRZ2fQCeWDBc3WahNTKJEJ6iBX4Tcs2mcV2FjboBkMu93zk35DTMEUpK",
  "key17": "4psvw4PvXEgVxzu8Z6MXDndA5MjUj7EdgoYFFXpQm9r7Rze8bDgWLbQCwtbxBdhBaQUjiE5XYNT4FjEGXJYd5MMw",
  "key18": "4GuTAUZVAi3cvH1Gg8iTHojm6Vq9v1RDMLsqtW4ZsdRPhtic8BwD4vnqsjxcgTWgpcZrhm7zMn7KYrAvPYrPDGy6",
  "key19": "iQzQxhKhaUbfJ1jR183UHT2hvmdL9q73kn43z7oEaKd9Aki8apLp4Shr5bKzco9dGJcFLXZhWciwjWqFRNF2gZc",
  "key20": "5mMjBiiKtB3r6PJ9rw11rjgubT1VfRB6Bg5ZebZL5VToTNY7D7feaDD9DQNZjSFhpP8HtzHCsymbtkgvmtc3TL8D",
  "key21": "2g2dkJsmvoDMQSbwrNYhhAYrvVpi9X4CSUADoHVN4Ls3D819fhULyJhrrJ3b9hKDLYKCkLNnPfyZjzJfzyYVDTKh",
  "key22": "54BdLtmn5N8PysuCD7buJ8dssBfWqCfJArQYKS9h3cen2CkMkUF98BuNVEPEiuec4iCGi62FxSEAFrQSwwHSkrhT",
  "key23": "5a44LwG7VjfwvyyFQciWsD353Vn4HkFPCu7v788eeok8XL3iQDZugNyD7XG1ycg64uZDLWWddmmMdaBcihMqDTeu",
  "key24": "xLUv4kpMH1adYe1Jw6qE3aoZJhshcAnVBUYYnTMt8JxLjwFfTGr7tPxxCasCXeuX8Xei3wVRcg2Y6YamkwdK4wu",
  "key25": "67XWvWQysaSS88pNz7AxdnPAC4kVAFXnLrSTnj8cKUvxjgYdr94r7bLyShBM44Wc2rDaD3ZP4C1yF75WBxZ9qNBQ",
  "key26": "evcXJwpGxXERo1yw54agKBEThJ4ExsbYNgMgXiRUnMNoBqxxyHrvQG5FtuxYm73BrrMHxL1pY7PP3ZwrdYbwkCC",
  "key27": "3aVPPpHjbv63iT9V68ZuHQTExtWeqoSQELCo5rNeb5PeWPSvmk8x6Mxmxh5Su1aJsnqgMMcLebL3FTm3mJ7JSfds",
  "key28": "3JYK8VEJSHkuWmJQBfujBAUgbvqSWnDqKzyKKWJ8aMSXwRxbqzvwU5vszgUMKZYHLWvLyxYFTFkP3pK6t3Z4ffPE",
  "key29": "26RzGfZjADAbyURooReBQnQyVFoR3f4hHkWrVNkp6way3HQWSnTTKdVQUSzhohkA7vWvnwWyCzuSgffc8H8fUYwk",
  "key30": "2hMCMmkuNjtxXNy5bHZspii9YUszMw3W8vAb4fG8U63SgQdibQ8WGRSKjt37PS83mqG9Bh3K1toTM4iBNiVJahUA",
  "key31": "2tLG3amz9EAg3namA4L4U1nRG3SzKaqNXrKnr7qQriNMg5p7qQBdEnYU9dcR19bVS8kduSfX5mLYk8ZoZErWSV4H",
  "key32": "2fzfL3paKdwaSAdGPq1K2yLKM4gB8XxzM2UpCUSyczz1TrjhSs5jq7RmyoLXZ7b9evmtq9t7HNy8GvJ8Xak7VqPF",
  "key33": "5WjLeCZoAkMM47LDB6sCPvqhr9dfQg1GUhDHTAtRghnq8H3mBmCiZKRARc3eSgxEAzSwoKrdSuJjVcsx7LWwAMfc",
  "key34": "4wLAHnJqx5ZNa9Z8UvdUfFspnWoPZRUkkwKPtPuksaiwQ9mAuXS4RgpbMBPyFUuicbHzEesHddHrtdCxdpFqFzeB",
  "key35": "NqVBMrT19pWiUpBSHDzBZG8tAWt2MpgkSdBc6ZXMJbqpPGXPaecVMVUF8BYXmxCdZJgyVTyEg8anoe9jUbU4UWS",
  "key36": "2MCS4N6RJvtUGuacCtb3LgmZ4kj2bqECyuQKLLSey7or8rKJiMtJMKozkuW2dTdYSNW38w1iAVUSz2ufRhVqybvW",
  "key37": "5VvqkwT1SQWHJo66FBfp93JVTjbsqzQH7u3cB57yqmT5qubqnnsorBojyVPFyDXBWtxMusdV1p1HnLHJbXhreND6",
  "key38": "419wL8LFp9JXW1rb6yPXmCdhMZpQEfH4M6ofTEUwAru3FXiKVk9K2gmKYCdv6Fxj9tnEK2fM43ktZd2i2E9UYNAQ",
  "key39": "5DZNv1ApfUpYv3MF7j31syxGz88ZHCkfj1qfNsvpxr4bQP28VdZRWHtKKiydCjbEuFoE8892UmrJkSjP5h2YtbR4",
  "key40": "4RGdGidwqzSGzf7dLuGd4rkxADfp4445i6qdkMWESxe1vyodTYbfnXPQsZeKQYrGjGdE2Uz6WeDZyVTebzqREpAJ",
  "key41": "4EiN8FBGz2KmkgFPjcd7mpaTYrMvzgrUXjKDvB1XhXsgkCQSuM6ZYSFyxQWsinMBurHGjbahoHWQWSV4Zw9KkV8S",
  "key42": "5Bh8QLNUnjk9ATY1Cf27A98t1JLEPounKSfQ6jy51MSmdduQHNGWvC4tkpbMgTp67H9NchbZUCcUzGvDgtkiXBBT",
  "key43": "4Ex51KHced525tWkpRD87dZ5ULkfTq6pMpfwXkvT19K8RDEryNUjV8qALHt76CeZdV3bEsRYUawQonSA5X3x6A72",
  "key44": "36T8wmkrEUyDYBRL11jyaJoydxRemsYUcq9Zcp7d82nmTx7MT1pKu6pULeW1dhjBJT15Vceeh7aKV15QizgSt3S3",
  "key45": "4FDHpfiP1CJnqn4cPPBvBqoy7RHRDz1ZfdvLpwm8tSy7W8Ljt7hNFUrTAzn6MpHkhPzLaH8Zgg6iLemASEjvDq2V",
  "key46": "3RHjwLTYvSTJGSUizKyFqbfRovYHqwxocLE8JjC8746HaUMQMr32X663CdjWfsCavUGdu7bXd4pAajKnN6TCNHbH",
  "key47": "3rCxASd7mCuzaiGnGXMWFv2xJ3aCmSG5e2p3phqsqabfapTmF84HPW5yv7bY18xYEYFKBCdTbdaR7CQ2QDWxPRW9"
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
