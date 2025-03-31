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
    "4S2pT2zWLn84aR6VWuet11MnKJFSJu7FbPfQKd9C8EfSDquYiufLMqySdsbDYwdkmxCb6uKruXrwQsaWsjbfTxJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4653RNbu47PZ3e52U6jArGk5w9AzBWZXDtbQi8cWNFGuri6LjumUH4xXQvBAVccJvFqtCuqMt2AcSKk4VT7BPP",
  "key1": "3dH6RrqNrdmydfzfgiY51FcLeUkjYX94YDyQQPA4DGM1ZjojgnJ5FDYTzu51xGPi9uFUG3W75tDVE2f4GXyzzE3D",
  "key2": "5oPXssFDHaJYU8F7kv4W38beGE4CZwgzMybHTpLXKW1E63ir1wZBdEYd7N7D4TjF5a4kadg2SadvVFWVr615kc6i",
  "key3": "5sFsEo1UL8o6p5iuEHVmXjk9gASHyAP4pSPmStXLcBT4NLvyMzWG6tNkeKag4t9whur9ZBMpAST3MrELWP43XBmn",
  "key4": "36iyJm5ibv6gyy9aU5hM9VKKqkqZgE1W46yMsfLLRR5PVj8y27JhLbn23msTr2sjLxiS7n6hfbr7JNNueL5rJc9J",
  "key5": "3gvyaHUTCveRQuuCkVpXNkc5jbCDDaYSFJ7LoXnN2Z82ci5w5hZM3dqRT2CaRE1CWTWFpxSRF3Mr13qepCd3H4SZ",
  "key6": "5BBcq815mqh1W2L2jeoCSYxMscW4Toh4qv4r6w5ZBf2LP5EKvGurdX2QJhVYfjVXo9Do2xURd3ejRsYXACoQh8C",
  "key7": "4fvsgF1mPPgkREtXC3WdgdG4FRrkY8JifkxLr5t9WTTUdt5koCHqYXCE8Cm4ShZRGWKVnrRUhdcYREzX1MXmk79x",
  "key8": "5ef78q6ujMQaPLzNFVP27c15Uoh1G4HgWLCwc22dxjvBJYdXL9eqxUFcEUTvFcYN92g4M6x7Z9QZ6bFL8UnqwqVm",
  "key9": "K45XMHf4NM5BRWa2Rd7GvvCLWQiL5WXsWXiiTn9zhhnh5sgg57CQhXhGxj8i6WzWtc2ums6vbauYhUAZmdBc3i6",
  "key10": "NUdFdXZwFz11ADdYZDHqN9nsrznRmGmY1n9aUdg4EBy95S181gHaT3R9TTZdKLRakXWLhbs5c6ftGVBxgLPjtCv",
  "key11": "MZsjYYhdVLBWPUsyUUMSwNLAfY8AGS5FSCX6AinLmPpuvhMjNjzzsYUw8SK3oEzHGVboN47Qiw2xUf1JFQxpfKU",
  "key12": "5thnympetak2a2Uc3LjB3TtsVJtZtEE9N4nduyXhnVjk6MDWyAWkwdWYYoRZBDKAMgA1oVSnp6ZHCBWKeRNBjxRY",
  "key13": "3ZC4oqn6r5xgizjiZEBxf7PfpBHRvboWmhfgv3GvucfSBAEL2w6CddsJfg4LmzY9cNyJJAbxLao5o2sSd2LcCtTU",
  "key14": "5hZGEsHZWmcRXp2BTx4ZEPAQzcUwtbiuZiW1vngKgjLMUAQ9wwykz5ZtAPivtsm7BUzKkhX7x8H5ycayBhHN2rEN",
  "key15": "2dccNS77fEKdojJEq5GoUNuZkBfsfxWk5hzDq6EhhuQpysHBXWU5XWCsPS79eKTyzaE7QmJzeuhTS61bDLdxgKQy",
  "key16": "2GckYFwp4N4A85RA2WygWEpnVjKkQHapSa7DXrGC3PmBsPHEvRjjq7NQgb2rg8MPjcexdT6NiiE2JfkEuvGDWjb5",
  "key17": "2491aNkVrNuYXx9nyvjxansg2cQ3xfJAYYu9sbUJBy75S4RdqbBmzMcZJD7nBkEYA4BmEchoYeT18mwtXU5Reu42",
  "key18": "5Tf5arh6R75dFFh3F8CUyBuqZFU8YuaQ3c2EZgvRX5y4miJyQdi83s62fz13wEK9BSEYSS8FHyU7st3kbezXYX1",
  "key19": "u3CuZotdVbi757Uzc6umHmYtTHH2eu1vxSACrMaBbY3kVsuUZyzbTYTDy8W2XASnVCv33NFRG32Vw9AyRH4tcDe",
  "key20": "27aeykhsZbpGpKW5H5Fw2TMyacAMHKWAMNKGPRqtqPWoDtLhnqWvPw593Q9nx6SiYtSPYbZzS3aPSbLZt7TL5XL1",
  "key21": "4U6qmpfbtJKo9ZeGhWSvrYnaVEeRaAdFv5AaQCudGiiv2p55DyJ8V93ZHnZEpvkKGr6xtniJvgcfvtaSUwgqo47Z",
  "key22": "4d6DEK4KpfndRY32JtWScZyMh5fSs4EbHQeBCwMZDegrzbAxiDjdiRveJR8R6PFzqWxu6SJRasu8PzKu9oavNnBR",
  "key23": "2G6vS93yBY2d9w6pkGZJyYqm5QGT6vbCutbCJcUJ8caXddgZEaLRQ6efYqUaHLqdAjL3SWuiKPBz5a7Et8vjANmd",
  "key24": "5wnJHCaCkYRDk1SwowchvsY1fN3Z3JFrRXidRQ3urNfWTcqgu6hwBngspb85rXBaeEzMCCevQRd1fcSDXe2tJvMs",
  "key25": "5gZrMxxaMwLrjBKcVEnsA2SrmUpAfUmB2tgQV2TXWGhXXsexBYdA3qRqUekxmw7i6WH1zsQgYgbEmdJh98dsLtTZ",
  "key26": "3RRZgfYtBpz7pMdTbeCCHQQ7gWXNHUCJHD9qXKRy8NDxNncJ36jCZXqWQBmd4LDEjYbkeqto1JVNZPZ61yVou5Uf",
  "key27": "4QDLU2AQgHa5C5f3mhSU4bezAwobvBSS3NU5AcE6FyJ7MhyB5qmuDDtwbVup7aetLyDMGVPJM7rFjPfjaHPZXHgm",
  "key28": "mzumYEYX8EkeSVEu5sUQKc5CgB6XyCEwZm2vZwrskG2hcdHTTAnjXgocoyGuh5QxKuXtSBzisdiAJb32aZD5reL",
  "key29": "5JLz4rvGsbFDTD8zfcgCVkYEnivT7Lj5Cqiqjm3NptgyQizSJErQifNnuy6LtwKwkt4nqZ6jGATaukzctFtMeukr",
  "key30": "5QP2caTcM8j81R8gRYSYjnWatdbJKsMRthKyPPpqeRyvtLcGQsPgVP3WUEz6ShqrBMiBi7FngRoAXd3PCehKrTzS",
  "key31": "4ErV4gkuGjhmwWbYKNvQsTyBFq48rJY6e2BaLTq8cku3WLnKAFUGA2F1pHdDjGdKgixPQQWrLacU9YJRxBTtde7c",
  "key32": "51SPa9XDoydBrUxuWSaJTyBykVWKGwukP7gGg746zko2WqupRHSvAsWqTxMHbiD19Q8x81fUaAvT8h99qxi78szT",
  "key33": "58xgT778KDufLKDXNpfuGZL2L6wndU48RuesSJzmkBGGcNTz8Hi6DQPyWTNr2wSg4USDXBP6yy2v7RgqrwNPtVoi",
  "key34": "2MipTNhE2XhNRqbQEy3VoqDsoBe4yAoW5SfchTupD62otTEeMZZJVKunug2NQFSsXF3qy92VPMRigYMjHdA4WUtr",
  "key35": "4S4Ggh9Mcw6Ts8f252f4ZS6qPJD4oMjV1vkZEQbhTKDyYsBiJvQkYSAiG8NPiks5aF8Yetg3CNEf14cNP7p9c1VY",
  "key36": "4AXuaJTi3nkUdsqnLXmkjcXettxTDiR3ic2yf3Lw1AiJbrv4gD475Kyw4yWGgbZcQfqs6gmxP52Z2eCTnguTUuiG",
  "key37": "3JEuiUmujDYPgDC5uDskgUJzF9vsjyDVMeTHuWuTF7DvZqLxRiao3xCxe8dGMsxCZPoAdVs47MP1QG5KZq7APtsJ",
  "key38": "ZKJe8fm8gMrXzpJipfjfDz5RiY9J8p8Kyks6Cp6CifjNp4Z2ELTQKGxgBM89KF6JrbqEyKzVCwbFWZTaF9jb7uH"
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
