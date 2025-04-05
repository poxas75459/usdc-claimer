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
    "3vHzRd4XVLpYeFZvub1UzGBPVJxWgMnXck4jy7ErBN2U7HTf3kjdnHmcNzTh7MagDAj63Hj83FT9JjwDSt63n8FX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4x8cY4MBZpavBkcJYVwzCupFpJC3hhmiHaKxgaZ2d1Nqfhgviw7iR9dRRDBmoLzWSFYXauYcXDProxbUepPquM",
  "key1": "2zRNVqbgw79PM9JEyj4Qp6fxLsmUqSADU6Jen12A6Xg4TFwvJsxh1u7GJAQukaqabBkm3aHED6imi51uDBSDHsa2",
  "key2": "2ozuJMSaSS3FZ2xuYiyzUtqect9HstqeAqEdzc5HDgBMEGPqNpSSpMCKsAT998uvjWAbHEeFtSgJg5eDXj6tb7ge",
  "key3": "BA1RDgwUeoDaV4Ch7Fx9hDwSJyVphj8F75S7SrLBQ7K3ZDctUdvmFECbwVCpSmdMfjjKhrUUF5uGV7vztJAXgho",
  "key4": "51WcY7q8sRVgvx1WGg7ruiRuo8ie7Q92V4zfcRMz9Nh7koXMhDqXWr7Cr1HWJ5dzsMMfAHwNGZQh8q9Qa7qnnam5",
  "key5": "2QXdx5gwJkCUGmGvF7qd7shFejxHeLtCFHcpYpHf7sABVjU1FfzSfViGzpWRzz2sU9koiSbnLTLhkEVxd2TWygDg",
  "key6": "Aq3bCB8PTtNBs2Xat9evQJCZMYuA7EPmxFY4hrjheqnpNFmDSW6HY1Bd4zLg8o14XJx5hjVCVNYxNHMGrtfTFn4",
  "key7": "5CKb29k3SiQKEAdNNNtteSX1mMmgSYGV7TJ9MQmrkEvaRq1zzt7hziuieg68nroodjaf2oX5r7DcqCLN7C4t9749",
  "key8": "2NgkV9sh6kmNL3icnJBmo7QfiybP27mWPEgnG6xa7tppaJQfUETo8VVvBtyYb44J2uNmbDzdC9QcBdbuAeomg34C",
  "key9": "kwdbkCg44MrpyK3iuxaZqHR9gQjqcGCcKkAsqEyiBW4omXuy34KQXVAXGNbUHQyGzyUX18g6TCXdcTf9UvjSA5i",
  "key10": "LWL8pXLDR1QEWQQosHLt5SWiQ4b947ebwyJdiGGyCqYMUW4Cygt6nub7J5wC3z6mAAoV4rVG8SMvpAKLzgJokNu",
  "key11": "3NcQFs5GBw7WgJjfSqY3usFzKpqJHmH3WqyYcNMDpU6xABqAigsSTp2PAoCvJepjSHAX7D66xiCMJKDJJtp49R4k",
  "key12": "4GR2UH3kHZu7q6AriLybddD7AQr486r7JywgyokFfDsfD3aP2pw4AKFf9AuASQ6oZJUsh44SQKUw8kxttDhimWfj",
  "key13": "2morxu1hyGL1KvuNxfF37ZLL8wJDnPeXMCAPQQQat3FMPPw9ZTtGfriRcrENpktwq4zeZXZyAZh1kdyGMy9dzaeT",
  "key14": "4R3ggXWdusVmhibnm2A7AdcuS9mLCvCKrFHXRKp6YXDuuxJut2JdqfpFk8gtuzdqjHhkZAaFrv2wcHDxdRkDEJAt",
  "key15": "QoxRQRnWMAsjy63eB8bZdLjq72vR272tpLNSH8E4m9fg5obd5vc3MvyGU6DswYu3LiwgLU2ijAovScurefC7TML",
  "key16": "3jHg6V18k22ZZNURe2REsFUM4VB3jq4R628UpPgHe7tpVb4FvDUPBGqzAuzEubhE2R1Md3krzxbDoQRMswBqHUsY",
  "key17": "ewPpuZ7hsH9Y12t3x3jyisKYybvE77vau5qdC5p5uS57Kjwy29Kh63Fhxj6AGZFtNcAojbCkLiXjZekPTzp4Efy",
  "key18": "31kt1SP4mrrUFUTt8KJALi53VbsnScsBA4SLRvQvLfkXXeD5PobZmQ6EShcmD6sHmoKZM8QeugmGHBL1rbhog4Sx",
  "key19": "2wR2UssJsefvZAL6T7KQ3HBLFqwb3cV6rBnEwuu21WLxEkkYbmi7eDVMSLyzq3MA8WRUoa8y1dcdqprpCetCSC6e",
  "key20": "2e7GNHPUjSRGLt3Mh5KtVEsMLQxsGqANrEipX77MDnsZaTCRDGiaX2C11Uzt1CfEeaaczYy9YP9xv9idzp9Xxqsp",
  "key21": "2AAdHVWGwSRAoYo5id5K6kZb2ZLSAxU4pcNjcQNT2adsysGErTPcHhHnxzvd2CvWNJ9FUVPc2Tsb7MjEyQ9yadpk",
  "key22": "3wKFZriq4BDun1GFGKgnqKyL7BwvXMnbj1rX8a1HnMbLarb2WfEJqycWD2JEtnVces3Q8sPTzh9UWttshCaGtxoL",
  "key23": "2c9Vryq3neoFFdqZssE1YqawSPPtCPtKdupHEKFGdFBy1JddAMyRkfZjDTQMaUtKbyFY4kS7Zav7LQetWMyav3nf",
  "key24": "5MEfhg1bqwWzji83pqF4DgAouUqFrPGmHSrUyRkgtGqsPzBGPKhz1JuM3jRTZ5k5GUnKREHLezinSMw6vKDc67qn",
  "key25": "qJZdDdqE3x6Mp13mKsD9NoQ3qyh35kPg5usv8KcyVwoqwD7EZP43W3G8w6EkFsjcyyvVgtaRhmeP4e6drzY4Dgu",
  "key26": "2sAbJJAFVa5q2vSpbunvcoZzzwuPqb3QzDbzDqk6Zjv8NWPa9y67BjPGcw6Dweb1SJePYGde7GTS7VAMioTkncNY",
  "key27": "NVFkdyjo3Dg2NFhiuTZZLHMjojT8dfBZF2rSKgoPNuRb54BYhQSZ6oJpCnX5EgzoKwTe9KfyXf5DYePUrcig56j",
  "key28": "FFBW7DxkfjQ6ChxKGNgyDEzpbKvgtmDN1f3RW88CYZPe3c3H23WQ7yDSSMJVkC1Nk31z2D8xDmahJJ36ozrte7Z",
  "key29": "4tQnBESxdorXnc92bWeWwVJBnaaqrNjKVsyvHtDVfkS69GKpjedNL6F1eNrrjo5m5ztB5ndJevyJUW9nfYuP9GJK",
  "key30": "4z8rwthAbT9SB5d1SWx1uqm9VgqBmHC8MZ3Eg7RQZMjin19KfCTcXuPPhmkjyzggr1R3vmzqo7V7yKdBwpGU8jfF",
  "key31": "48nikzhgYpWKDom3HWvFJ2R51AQMcEZbNxTFrU82pVy2BoYYcYTYLXYd1aoAFU1uJjWf72BvKZPKL71jVX3qCevq",
  "key32": "4QaTuk3x9j3ibaXKpGJG5pMkDbJVPhEpNX2BGf4tXacTaVz4nBiTVBNHqyDYJ3t4EAvamCLbR3cRLbY85k5XoSyk",
  "key33": "5CdUq373LHqnmd9S7A4kNTDf3f4j5QeviLM3yEpr9ZpjRxvnKXMS44PLHusokQmVYCTD2AisTrD853RpauUQsqbN",
  "key34": "q8FbtNXsaK5nCdQJx8Qt9e1pfWRksvzbeqhvbGaN26XgTSMvzJGX1YuLvNpTBU9MCQ7z8UWo6Nd5VHvDGFT6gB5",
  "key35": "D3w7YEwACbQY9mTNvWj1c1C6t5gbpBzLCpe2rCiCYuECVnboSC5sNYYofeN3oEUgPxFwPe3zqncEvfTWZ1qTaBZ",
  "key36": "5cqoup8Wx2mGZxusaUS7GLe1cu55FrJB2YFb9Qv9ZEFeS9k5mmh8twGDF93E7Bkpgc5hPv24NyVvQ6EcceGQMdJV",
  "key37": "5KP9jPd1Eydcd9pS9vnhJNGnrqbHJPEzataYQDhckjhYVDDv8x4s3n57vQp4Keu3hSxz3HU9MfrgWNnjahqxNCR3",
  "key38": "3YbAoZvUutzrabki8yNUf5dUUCb7P9rze16oYkuM9Yo5WoaDUe87MWxZJKkgWP1eofp3mYE4hoVkRas8sNMr1dFT",
  "key39": "24svLQZHwTpfYck972WR15Q1rPpMSTCzgsMdcwSazAofocQLqPQxgttNJ5QiDKfvXQtSVaoubgJn2jSJtxtyzY3S",
  "key40": "2iCRxPtt4UQxXuiHBHkhqQtBGUVFwbtWiDWHeFzXj17CXF2PvkSgjSArHYiPyhshKBqfCEqtSsZTwsoeGMYWFXK6"
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
