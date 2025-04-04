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
    "4orXyDth2kbSZj3i9XwFQsiVhNBkgCoUSoP4e2Tk3qwrXcUQExkd181nCV1nNqiYz3pi4Rav6RwfqDBqgF7y7Cqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9GKv8KrpHEbErPfL3EJ2ysRhDUqrtMbZiTgbzmqMo9YWq4NzR53hrioLGT4RZ7JU6zptTxnByBkvjA6gF3YQ1o",
  "key1": "5rNu8CaoM6NgUNJeRdAtL9uqheeAeaDPzPY29dX5RiYXcNZvwFnfBJRYwEZo7zta6XFQBJp68cw3XZFB2gYNvt7a",
  "key2": "DoojgTSAeGWPjMWxqe66eYqtcbUiDjrCqLhaGbVoZqkwW5d75dfvire6qrw7khJ92jLVuskt8E5rPtz5PW8sBYG",
  "key3": "32BkeG3aRQBQvcRqMdgMLjP4jwaYsLJ46nvRbht3ej2GQdrsU3T4maW2rjGZgmXeJchk4p218ALXDxJbaAMN24hL",
  "key4": "42qAmdeWMUpXmQLKMeaprzGCGSrMWaE7tRR1VHWfBfNA4u3Te1iA5Jh2JgAHYK1oXdsHmDA2Hbx3eyKHQK165Xyn",
  "key5": "5J8UhMevvXskUQtupnARFnKHT2i3rHz2HTwNziPjR7Qy3hwyDXzrqY2N9UiA8UBSmWi3f37x7TAvGGmuZ5mvpa87",
  "key6": "48anwChikm7Hzgks4LY14wg9KPLBFDmHGJm3RKCJwPw63tGq6BptXnHvo9KJNbtsdvPksP4gEdVFEFqwHD29iRjB",
  "key7": "DTDbND4EWrVgWVKA7ms5tEJubSnaM29vZTY3GyUNv9tHYDCnGxt7MedJbfmFZWGhg9GsnhwAeKLMXrZtUuDaRHM",
  "key8": "5nLzCM3yqKrCY8uLVDaNoToJTqTVbM6WybhXYruydqjQSrp5iCLDveyicxAy9TB2SFTc2QLXUhWduZBJ2h54xUcY",
  "key9": "2fYqddbGBz3nRMTVECZHv5xY5g8ag8MUnG5jKswTBaHUo6Mk5FThnTjETNZC7imxLHKJcKcBhFNAscy15dDbUrER",
  "key10": "3D8iJmXL8nQV5NYm2txctWyBPG89BP7nT77HgtwjhbbARXVXFY2upo12ABFwHeU12HHjg3yGNZigdsQwhLrA8oj1",
  "key11": "5E5WncmTj9pBEqkuhGWmC4AvEnjQFnxXEsYFuQQSBKFKnyHzxvTSbCBWnP2vdtU3gPYAzs9XH5jdxnZAozrRwu1H",
  "key12": "3q4dUXTPhxpQbLKFmxeRkKVJHGRCfbhRT123z8vb3m6BZyNUSJC22F3UVcKsQ8LkN9EiLpwRiMPP9hNr24FL7PmW",
  "key13": "4ZDPD9DqKkNgUDvmcMcruv5Ap8f4kXagyHxMJsVH4NfZorwBZp7xweYZ5z8VxYtvtAUzKvwYwGuH6c9954EFmFRD",
  "key14": "UkCuKArqJHd943AEPs1eN38ng3gzarg8ujoNiN1vy7wyYpTzwcRrzBLzD1QUkZYqZ2bGKEmPqM5z9xoRBLYNrqB",
  "key15": "SQ52qX9ZH5d8TBww32S3bzQN6a6bsLfryZPPBzABbvYPzPvwv8AnGFiz9chzP5GyM8pf94DoGwAB6ierHHZjEPR",
  "key16": "4eVDKqRrDUFJpLGBgUpp1qwPpRaiuxj7pZmz9JUZtjFjDnr7jLkvj75wyVLsKMxGohMqHDwvXxLLT45vFjseTRfN",
  "key17": "3P2Xt2MTWLbGsx39W9MA84tE3v7ri8JfYghhf6qPgLbmk3tGxYtT5ZNGzEFJvz6CX2PbCEtGGk33F2VFK2NZa3xv",
  "key18": "4KjiBxKdjVAa8SJZ3ZF5JWsnE8pbhExqroGcjXYzMdcEzZKd9An16p7di3KWF83aztuii8FAb1wppCJhYvTMX6oX",
  "key19": "5nMcQuwYfEwdPRHqaeDcr4QMT9vuj93636uqz34npM5Mym8TGyP3SVvGywLgTCPyeEqkPwmr9rnGscZE2QrtLvA6",
  "key20": "48U39QKWR794nRHzNvSG9VZ78NjrvkKNvmmgSfKLY56fsQ9YeiFaqYGP4mksJZjyV8HqNFRem2bZEtgqmN9ufKVh",
  "key21": "3XHweDWfU42eTp8ov1kFRFkjqwrJZHEde4Wrj6kgAgcZAU39QaQJ2wTa5bjGZ5oPy5oQFzwnksF9cUrjSdaGACdc",
  "key22": "56TFHF7ukRThNDU5tqKnTNHPt7srmnfCHH2BLpfP8K75DsWd48SHbJL8gzZt2toae9AJFzCrqaxGwS1K44bfeQKw",
  "key23": "3sWsgWN7fwstG286NVxTQrzk26muGrFiGmXLvorv7TL6NJoBGcEW23EZrz4E4Ax36Q7zvj8JEbwxKqgLoJ8HrXMN",
  "key24": "3azpF6n3dRaAcsGrSkxPjSxvKuFeCrLTAxA82fkpo3f76tXLgJhEWEnQpf4vF315q6tGpsUNEKpHXjUngtbtNhQs",
  "key25": "PfQnFJizi3jokAfs8gVFGpm9LCqq9qo8tfCxg7HSh3Yg57ec2xpYxXASokyo6UfLzbCNF2zj1dBMcZUNP6oZhqM",
  "key26": "4nQY8hYuerrhiaQevpmyPN8wvGhs6fkYyyagRddeZpE8WBjSWH7DXwB7QUpN6Ne25iBgySUHG8qBrngQz4uQdZEf",
  "key27": "qpzxwdw6myREPhTEDWwdqpwcfmDWLUvdmqWCKPQ3Z6ck741xDnmzdaP93LznsTtwAg1SEx6EvTc2xbxBAtRCu3K",
  "key28": "2RXP99qKCjAj3uhzCFWmnNoQ5sZ9AaDnUF7rPUScFexiU4HcrWZDiM5ijUzve17R2P7xZV3w1XCAdWDqeDAYCqnV",
  "key29": "3CHg7pXxRsr2UiGAHYavu573iaNrfKPJeHiAdtBDgpQiWXWeU7Ya5jX4fjCbTZdQpmaGfBEGaHLbgycx4MNRrwNy",
  "key30": "YzAR8e83JAwCP4wyECDMux3gk5jZbyp1AsiNd8nZffacTzv3sJ36R8htEgvxzhNar3KUebTpnYnckTQ2fRUbQdK",
  "key31": "4J2EPgRsJ8GrqJuTn12S19Bw6gEv97UydheC1TGvj6wmxjr74MiiBGf1b9PKBzbgr7rN6dvpyAK6VtQBdijcq9ds",
  "key32": "eyyFM5b8Z7n7SDYKzsZ8USrs5p4K7CJUceWZtDFFL8rqe5ixHKFcz6zpRnWd8NNa53kdfxt6vMh38CWAv9Yvnc2",
  "key33": "nsbfs3u7K6MYFHDgC9NhcboZnAf8DVCNagJa5ytKxAyZkj6khYMoWieQWM35QrpiUWX6RUA5bQhiY784y42m4sx",
  "key34": "TTsdtxDnxkm7scNA8NL8QZeuskmWMAzrNZbqF6EtQLim9K4CKzA4GgSdgjcdBchQzqtTt3Pw8SBgMMUJnVHMoDR",
  "key35": "2KWytacqxp5GMGbm64jZihiBuRXsaw8sxJoM7vYE9DNW9zyWsS9hHWNfQHox5pHL2T4mYNJxJ8JuYZaRTRG73gbg",
  "key36": "5RadzoG5pzN5x8kwwSQTWxZNUytVKKdx4g74pTDb1qG77mQmzvL8KhffVassxMDaoppCLjppWbYjXPpvc2eWQhqs",
  "key37": "TgKkSPGxXS7WsTgsCPQU56pmVZpS1Qxs3wcx9jzow7iVNBzzSaJLKJh8vgqjFQ8HVNke1HsEuxRnbeg2JphDGEL",
  "key38": "2akrNRCzfki5J7pbivo2VEv9c8h31QRzRSw4qSaDQnXXUq5pvJEA5yuRvCuNgiqWZDvcWNjc8VTSr33fcFEdwP4z"
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
