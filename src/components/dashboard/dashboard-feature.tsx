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
    "a32BdZaCjCRdP95wCKVP2bcGn1SghrGkgFwmRjfpmrRBDJLivDEzJ7iDUbpXqjNAiENhGhsPT6hrXtWX1RK1zUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1exd7p4ZjzykzcmmDRNiBhYatQj5BcewsB74n41D39uornLnRBmW1mq2pem2zF3b62iMWQwQBLxoHemEN5KjcG",
  "key1": "PHoDo8Zant4VRwBLip5si9g5p8FbVBSEF5SvSgpwTWHDo3P66qzdkfNRK825tqu9fcAQwAoXXWgRE5hN8xZg9TM",
  "key2": "44RniiN48x2A3jjFxDLwC5NKUY3a4soSXzYszoT2n764qpdPpoy6VzHJdEaAisQGeSS64QVCu8dyXYGgiAWnKWUj",
  "key3": "4MB7eoRVEUuxWoEQpyK1Sj983F4PusEnCY34grpzGU1ZT8CDtHftiAb71ox8JurdkbYqXz7TgEiXnkU27AMiT4uW",
  "key4": "361vrDddMPp6dqFDAd8mWVx8Xqu4yu2FQfcMWZG5ZGg4wPRB8HYmji3yXemxgSWCjdK1VJhY1RbninXEHrBc28qx",
  "key5": "5LfHRUrn49gh7JhsBJjUFgwSDtRkaqHRJ8wujNkk2DqVT2UnZdvsdJUmb3PmVTY33hd9BSVLhRFfE73mCWe2USA9",
  "key6": "2rQE8ZqVpeAbdfJ8bgfaQn4droE69HhjXfp3r37ESSyyQWAUQ3bAW3V8SJxeNvcjyZEQamx99zGPWKf2pu7EqFBV",
  "key7": "SX7E623WbJuTatvgssgonQJUSogzPmNzGLm2BjCFQX4n9sR6KjwSMWhoKZx9adJ7cnjZerKzMUd5YXSsYXF5UEM",
  "key8": "2PCLUskuhF1XzNbvkTvJivMfBANKsvjNekXSZ5UTgEWoLWJStS3gq8LVMp27PGEiZpn2fxo48b5Wncfoux8dHFef",
  "key9": "2C5hc7nkQezx2GdMub2cgnbdwuqtfm4bgm7aRbY1aALxGnzHu9VztWKL1HbdG3kDV7YxQ2eGko8LZYfUJibdfujs",
  "key10": "5i6999uMwNy4b7w3Ns5r9ZeH55ppSoGg5oxmRBJ8aJFVtoP5wRuPd4fNreu4Am6QmEh3NjapGHz8CYSK2caKSthL",
  "key11": "21Sc94687BJ8d5nbvpJrGBycYWZxaKK4A4QDSvdLDZnVvXWKDuK4S8HPZFmMqJ9Bu7gVU9rWqaV62vYmidNmnqDu",
  "key12": "2GWmjRWw478X637wvzUGBKFquTeVvgQjPivPmWMkjNpryNLR2c98J7PuNHx3k3UbHuVA6hXmfkhBEtgfG2Y3Y7YS",
  "key13": "4DiLWXRsLhHJVZLYFQYu6Vh8eKkjJ27iWJ7zJVcVQ4BMfgakbGG7v48RFPRw8DQKB96dJ73hnch3ehS8fK3L8Vmx",
  "key14": "4vtaXQzvZGYwXcaDqxFzYKBp6yJ9KMRYQzid5yagJhr1LFQCXNwToTpQBhJbMN92wcC7JHAvW82Nd2s3tr4xK6B5",
  "key15": "2Csww5P5ngFpDKuR85KL6dzTMNxPcNNp2f7RvmZ49wQWPQsYjmmz63L4ecFbpWq5KJmkMs2Efc7C5wFLSCRrRHgh",
  "key16": "55xPXTjsMZkNgHEULmodwJgcZWCr4QDENCjqabF9ZBJGwr1KE7JmQ6TANnnsgNt5TWHmYv9swRgmSbAXqtSAaYSq",
  "key17": "DFAAGAu3MabpWWdQXicsEnnHnTj4GuZn3EaVEgcLsc4DsjwcRAF157HhR1EnN4Nue4tk5V5xuHfPtr1nSGvCYvC",
  "key18": "4bPRxcByeHEGEXqSFkQHvK81JhJz6agkep6SsMRF2PzbWDKQCsjTfwkGHBkAUo49PF6XPtxhXtH9cSwhnSzpuPsT",
  "key19": "4bMckZLn2e7essKWpBrfH8Ho2h3MvGub1Mqe3TkRdRLXdCyFX68YhWXkiE3QyPPjM2VsqXFr6kgAp67iEXvkVzCE",
  "key20": "4dSojDBVmQ7FJEFYggtUThAe7YkBBkkxXjYMDXf171wpLqztEZpGxVfPGjBtzrFTmX6Uy2PXUSWJk2yh6EH1mDQV",
  "key21": "2xQJVjXYSiNEsMKM2JKNoZ3yiBxd41y9R8v42SYHxaTNaNQbraFQDb46qvY3P2eSD7MpFZLV27KbJkw3T3xfRrhH",
  "key22": "kVNBiqp4tHxRMsVJuGHuJHeazJdnL9VHhS9PNxaHUwhGrcPq5ihnnGUrvzFULnt5t1SLEmppiNumTz73pjatGt6",
  "key23": "zDhnRV5N4NZLMBQye3ZE2TGGFRquvzu6g6B53UcMPbBkRCyHqTYuiAZhMtAPiYLCTwVsG2VnhyojL6jYSRS4UwH",
  "key24": "M1CXnQVyJfC6gYR4XWED78ubNWHYKfH24dSJuX6KYqB8WBUP5Mbqtzxm2fgdfioV8NyEvJDEJ6ZVvybwLZEcTuw",
  "key25": "3WEuudrWNf4bQvkwTKNaRzs3GFCWhGRgT29E6hES3CSVxXb5pdMrJfzVsMM6bB6fasocjrZCz3RrM5k4z2YqBhBP",
  "key26": "2GjsD1AA9GF6SiuqgBLb6bWa8QdHy9HCwqk1KAnc6dpP6KJyndV3DCWy7sw5VbCnoVc6u7iZfuoXDyjQUUQaPg8J",
  "key27": "4WdcBibnxiDgSarjR3SoRepiv1b37Tz7KKjNyTAG7p1Kwx1PvHbEGJAw3W514RmXkmB9eaBTAhaBNu8uh4v1EiYK",
  "key28": "52aeB4sawFt4DfyXibNBC746KopEDzCeSAXXxMA5Q2hJoEB3nEdLyExMCyQqZk3oaicrGTagxPC4py69Z6eDvPAR",
  "key29": "3xcyxueuau5Yv2qTS9XSj2JinTUUg9zrgbWnbiAa8sKMqiBrLMhyQk9jzzLQMcVJNup614P7raGdCmZ7s1jZShB",
  "key30": "4Nftrrjo14R2nysnukNBdsQYHsf7XprP73PiqcXzoQXDjpr1YQxwFyLQcHx9Q9EW9uLMZUx85cZNLkaVKDaMWPYB",
  "key31": "udZarpkypZRiqV1WXHu39JBM6HMdTFZ9ReDLMeyC5MQyedRiSqtmchwnAiG2M5Qo1WNomAx5mBTWBYLViK5BPhV",
  "key32": "32Z5toTBb3XYKsbd87Dwp2rL9KVmE2x9LoVZ3rMQq6GFZkJvsJwHAhghrJN2rnL9LpSGz8b1JHo5yfQnCNehE7o8",
  "key33": "2G6UjQMcHkGCyoDJsVeoMsh4aD5r5VgowKNkSKZTLsWLFT4Q512CU9eSJmVw77ZgEKu5BPcNS3J3SBGUgGhmFYAM",
  "key34": "3PE9PNuRxwYkGxmYeHoEKae2ER2Z3n1ptvCgX1aXsYpkAJyWVCGmn1sqU3GvEsXQZTXvXMd7pVfcbRECtn5Gu28w",
  "key35": "GsgGagtX2VPzjsRkLHdZfmU3PKUDtzYrYzq5uAWtszBmEzKMGpUK7NVUA7NciN7KejdNgLMhseDmLziVWdya2zd",
  "key36": "4HmfpLT32fQFvK6pr1mRe3yHGBMazYXGDs9X8cRLWWziMPamCZBrWC6kURfHja5CidBF76LV6rG65F3Xj8kub4By",
  "key37": "2NuFG8ddPfWGiZgSQDyrg8TdNArcvFpsNLxr7Vd7EpNoY5K6rsejoyfT6NzURkB4919pUSJqwTXsGZGLdQcshGnj",
  "key38": "4FL6VKwM9iKviLt27e1FVgn4zEUCQhbG4DMbYj1HJ175fvJSMLRUZeNgd13FoNadjydLFJbW8FqUTi4xUPyszonf",
  "key39": "4pTjuiJ24jE6cZknpBFjkNVW5Racb3KTXyT39BSpgqT1LoLAzeqrKSGLH4zn7nRemj9nZ955F2NEbibESnfQv4aE",
  "key40": "5BHHLzUGvgbFjnKMFEctkaDj5LL21uhruJHMjGzca9K5qsMT9LMP3DYrd3e8e8wD6R7dHeczmdERokTsvsVdupJd",
  "key41": "h1SwVqPLAD5hK2hhJ9N8VCReU9jQUsuYGpb4M6CXczDBMHh6h9CuAcS1Zk4yyAqLkKpf8HbziLEF4U83N91qxD6",
  "key42": "2UdMZjYYfCfF6h5vvk2BgipyDMqnRHQDhmBN6K6De4gFkSUQ9KHXTt4Yks9his1bnnnGJio3YZruMNCcPp7atXt9",
  "key43": "25sbi65dqVrbiE4wukEZH8juPQKXrvd5ia4FJpqrNKXdMLvZiY4JLDsAFitWdB9gqi67KK5capC3psPnV3XPRhsz",
  "key44": "kiMKXwAPsdeBTT5ZGZHJGK8Hh11Mj24EZ88eqhrXFnFvEfiMZ2AJ2GxajXb1FreeLDpWygh3AUJst6pxBtZbuGu"
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
