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
    "5PnJSfkHckmMAgbuAnNcGQiRscnZ615bUiNZNPKfe1QCG8uMahdrmhv73ovgxk3ug3vGuNmGnvsm3h1RcePrMxaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ayH4PAkwANubKfjGWBKrHHNcTeSUsWwwbyup9rjzFTuid6Byk6c6sePf8FX2n8ChbqonFRyvKq9FnzxERXAWU65",
  "key1": "4FSKdkfbMYzpxLzLKJkyiLaqV1xfKcQSDz1TAthfAgMNPTYLgvsGFLAZrURtqDe2MTdyR3bs5ohuDcAW5EpkRgrg",
  "key2": "8crTN6fecpT6kxPs5iKxBL8fFXbRQgGhuj3ziJ1RLUUWCznp29q3pJyFCj6Sfu9cvywBSVKL5sGgJqcnrdrjZo6",
  "key3": "2xfzMuTKaVxx7a8mEEztEGt8sheTNSnM1nA3XQbgzcEcaGZenru5PoSZAY7aaAWCMBjNG1ig9Zqf7ZjEmYwJj8BU",
  "key4": "3aNYHXgW1ZZibF8Sygs3r7BfxUZeJSGm5Z2LfdGLRp6cYT4Rr8GY5zx7r15sJq5CZisjxKjC2VbEHdG398xHfxWs",
  "key5": "T6LCD9j3mFFTrTfyYHapCK8XCnoLFa9Qwgkpy4SXTHXm7QV3cfpPYJxD7w8uRbaQh4hnYCQe2ANVUWXu6Kp4ZCc",
  "key6": "4fPk75uhWpTNJZv8AKWvxu19aErhuh1AH5dRaFfrhuAr8CbxYvfhn3MohZRnhn3KVPaXfrdnPMVp3f9wy2txZbDB",
  "key7": "5yRvdER9Z3j72kUsetgBq67eU2VEpaEfo3sU8Gh5hhjQi5dWjru1AxDjeqrsoynFzjdq4SdGwZ4FP6esa2kFFc3J",
  "key8": "7f8XnVUu98VUyYq9kj52CcYivGNfpNW497kXvTmgE4mB85wnKDv7XbEPTj3DmNijno2Qe2mYxKCfr5tbZpdkgx5",
  "key9": "2KasedWcGGte36FTC84ZDF11MgoHWHErKEs95ZRzT3GpggF3G7xaLTrjQm2MA9Nzxb1wkRk6oTGi3xFYT23u25Jh",
  "key10": "29q74sGwk79vRGW6MCmXeVuKyKSKiymazp3hFJutg3gqvXHmRk64hqcrTcAu3qntZFBY2noYjE8UagsCkjkjecNC",
  "key11": "2voDxSN7bcBm4i33iawrCqwgvuDVm5wr7yj5VAndvTEeSAxjQyHkWXViJ5JMbakwF5sJ512g2cEYChSDYD69gnh4",
  "key12": "er26UoYbe8AWB1mh6eWmmkVcDttYNY8BJE4QokhuNsqzPLhUnTtwXvsBmQquBEeKQhDjuETVpTnifAEQrFvq13C",
  "key13": "2d1aJraoazU21FhdERzU5rZ1ENJcvkD2KZo44Dnenm37kqquVcpFLqKgimxjccC5XCdijxYD79dmPtHyNqS2V3FC",
  "key14": "Zf3JQmhQgKKaZQoFv5xYrm1h3BT6eFy9eBhEY9gqHqnN6N18fUe57oT2dx2QoWK5o8kftUWJVBDHTubGRfhpgHq",
  "key15": "hoKBnn14XugwJT2gCEqPW6DiomP4HgkXmr3whsEePChDxLGoUZ6y5H8bN3qAipF9URCXfCToyi9z4zMYJNWNZf3",
  "key16": "3x4wuoYBe1wik9MhDrLXPxahth95FWquQ5nacPVwLnPSFbMvr5bVQUooRPGYa2Xqf4VqkKdNo3UjWcEztpd7geCE",
  "key17": "2QXgoooWtTz2iyk52EBwr8MqeACU9pD2Sv6rRGLSyRy8QbMFFDHeBPjbDgNc6q3MTFJgi6u34sD3wGFWWf1xvfLZ",
  "key18": "3jkLLSRSK7dYJ8fmQao5a9EGArwzw3kvgQPyeU3zuHK6xaYxn3MynXFJ1V2L8rdWUjEuAskrpksnS4RkmZ1iDXi5",
  "key19": "2P192yDyYRFsDprgyhmbMKiffmoVRgvbUTWLZZw8W8v31pqUVjT7fZxALUQTLxgCW6r26aK4goRv1WQYvx8bvmRh",
  "key20": "29xyb8ntFMBXXCs9KHr6zf7UhFkAFdRqNYkmRgug8JWnGiKtTKiCT9CP88nGHdGYdLKNfiMh99vFBccXNWEwKwKA",
  "key21": "3h6uqx1wEJnLPmGckze95bXbwk6MrBFdeT2aARJXtY3T2QS8bKD8QbeTHA2N961mcsPFSCFJa9tdk2UemZTqpkAf",
  "key22": "2k4hLHGna4jwKJJ9zW7ZyKuk9YNF2Jtx9MXfmMySfkwDgeLd93jQTtFR9PczLpRVM8EXV4kxys6ZmgsZA9Jp1NtG",
  "key23": "5qtPzrLrj4MUbex7Y9SVA718LeLgBoDGThjZAAjA7sqLB5LzLFbG7wmcxKAcGQaypE7U2UWcCFkDtG6qNm4JDXwQ",
  "key24": "46NXpUbvhhiq5GYu57HzBNbN3hLyAU9WdKAkGRYjvJQCozxYMKbiKeZrnTdchm9iVbALUVJDdopV9YgJZwQRzb13",
  "key25": "zMVULxLYxK3YABTvApP7wdSpnexwU6xfNQGsEHVsWnerXGEYxZEyXn2yBLCaBefpmnaVQyth3WPQCZJM3jmr9rm",
  "key26": "2NWTsK81NDivvdTju4AAezHh7bzLKevTuY2m9Cddkpg8VW3XnuexrbC7JBSuC33JaoNhZPe6cactoDCnFpDLcSYu",
  "key27": "26FUaiGyZ1mtWPX5P9BdrJqRSJ3h6rikohvC2Zcmx41zUGpE3N9fK2DL9PzYdHEHJVmuYFA2V8mXi6DKty5Um62h",
  "key28": "3JGynsmqf5VqBysebPBk9NbNu6srLaekHNsYZtwjA2gAy4Qj93x3WZxjcymvmUNDcKE9Jsezvxc8T2Hw2J5qsCgY",
  "key29": "66fqySD3Yrhco3RMtijT7wXfJPXKwBR6PFCcYsZL64FJhf7jtUce6PChnj6CpGB4HzEcpY7rtRiwjctQ94pG1rYi",
  "key30": "5KcdzaCLJgybXrpkzUZMawwQPB9UTwwQMhnULkYnAUcKVHXXtW3dKb5i9kNtUrB7L6Arx9TYbewRaHxMZyBu29Gr",
  "key31": "5H2hMQVBmbZU9tLb4xjveMa5sPeSadYcQoEkas9Bcf2k5gZDJYRQGUiw5VHrzXxUm7AmfyQrD79vjxcoviSPkeCE",
  "key32": "2gQtsq9iqVaaC9PZgJHv8icnRXwXhCBwafxfqmN4yCBN1azbn67RvzUiC36pXPzMrNBCETbbF8kGEiJM4NVyAGoL",
  "key33": "3JSx7XbgPpUDREfkTVza7bjpEq24WcyYAwshTKyBBAvcDFBYTFVfuEo3LgDSbKtpxSXS5Am4LYvRjMKE85SPqrrp",
  "key34": "5x5jFDCgmhvo4rPac6hBmYMqPzm6X7epF5bzSHQpmuptuCZHxv65qFN97L1N8SPBmTMZwErqHe9ZRjZQYF8xRie9",
  "key35": "esZYzjMLwAqCFUXJ3J7Qc2PmCVLXFkbG1FkCTEYaTECxfUe7SdrNKiWtKVeLdqQSkzd2KMFms3cY9r84qfrg5R1",
  "key36": "4WoQH58AK2Dt2ik6A7K7ryVRMGDVUwKKo9uHLNDhV7rypsp6EyHjyKG3NJ79hf3qWQh2mwzvgartDp6XKeZYfudT",
  "key37": "5qKCmjeA9sjUbQ5PaE9eM6bLgxnnQNS3Srs4dAKZb2UnJfyBKAvA934Hh4h59C4KYbYwar7Pj11fPek8tegUpy1K",
  "key38": "3f2ymyMAbLkURNZPd8vVnqG5eApNGzYeUQXeUwSSVn6vAnpKu1kK26Kooe7RphfXTqrFHS21z3ttyx8v9njDb6jW",
  "key39": "5bGXi7RyUf2z1AuyrC5bG99y3q62pKLei547WVpbg5LfqUmKv86NEEDzmorwjSKhFeyrbV6wfhf67k3h53zeFCBD",
  "key40": "4cP1NeNBsXYNHcWdXkSVdcpUAsNYHaFVkymJfnuasd2jVXKiRjpemR4Foqsh8kyYzpwzxdc6tDz4pmzPMdYYJnPh",
  "key41": "4Z8Pa14cfSgV64VkdPzNvFzhhvPXvvRGBjJXoacer5jUBN8N4GmG8AtfaKyAy3pHi8UZX782vUwAftnwh4A7vRDx",
  "key42": "54sZ1mjLCGRqtvtPuuRapUKwAeJD3Tz81wqi8zJBVndNHpmMJsexQMp4LJAgDa68dojTp7VyqHKcUQjZgfqhLBVR",
  "key43": "fZzebnUCzbWEkqckYpiNtWzpvZFT7ybKTMvcPK14jBDnQ8WLediPpA1sTs1VXtrUALHXbWZqofApXTXqR6ptfYy",
  "key44": "iPPjyDuxjdU3zgADJ3sABdoiZQhzLwUtbp1bNHefmWbNvq4SGJsb2U6KqXHL84KrJSUSnCoHZh3eueC2iPMkxRe",
  "key45": "isX13pzKPv91NKi2i7K3g3eGi8QZwrk7i8txPWBUyJSSPQV2jXGyTcMVjWuaad4w1A6iVSY1pHkayvv6HsYvwL2",
  "key46": "2tEgArH4HVs67cBxZZ7ZVStUuEDm1Lew3XikWV1td1VHdirK6uF11umPSbih2RbnSoDLASP9cj2gu336dXjzf3R1",
  "key47": "3wdPf3dom1DCuovvtHiNechpAFQHSijWxaqwJQSbjybJdRpBh3YZzPvF7nxz5fqJnBayCbLufi5NvJXUPd4Ki3sN",
  "key48": "2Q5HpErcAm2dS6uKPWqctJPve2rygUBXnUWqSaDkhjEbNgJ4DB82B9zyQiWyRNzgJ619PjmgB2gDAwtND1XsWAwK"
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
