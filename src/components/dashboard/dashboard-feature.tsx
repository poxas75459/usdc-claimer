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
    "3Cg85VrZD7xo8qViPK6XN4giw1qd3GrgQRpU4zBroQEwNt4XNjtXit6DzP4f7xZQyAZTdYgP6tPdrc2FbW1jBDcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PnwLMg8UwmT3hDfwJBMTtkNy4ufMqoyyxzfJurypy5d9rzqLbQnnakk4C41sKV74BppTnwwFqAXbYPg5PSAWvsU",
  "key1": "4xPoqa1bxehQEr9gboBNVtqPKoiPFwPe657SEbamoo3Pi3rWnSm5yuufmwKU33Jnua2hqYaWopscJQrWxE6RbPEg",
  "key2": "65DuqR1qF5Xh2V1wAkpsuLHTKe4fmx3VhK2PigJMb9fMbiH6VeK3SMnd2T4oFuMaguQJiZJiEo7Vw2ube1H1AWuU",
  "key3": "LVfAWwHqEe98kjim77HuKpcgKTuDrsoBxaDL6y1wCesTJs9zGXn8rEoxKeudBiDiwZQUCznorcTFG18GUdSkgXw",
  "key4": "mnHxT3eNEKceqiGi6y11mcpW2FCc9EGfBiD9HNbb45dgYmjVww2VP53Bv2zmkWweZvsz9MTmqGf1Us1tMnNXTZj",
  "key5": "2XRTgVYpyMhCdDcpMUVnydwgjR51mdngCZWnKnZCNgvobYC2Gjg6Y1AtgXERppP4sGQ6AYZ4XF4Cky1GqFQDYdMp",
  "key6": "4RXRX8v4TFDK568tg2XmSTdj9zJunf5FFBCuWTXHYWhJp5HkxCTjsftRYZoCMXLKRoCy95yY5beYce8MSxQhDVLk",
  "key7": "3ijZMzSgWtc9xvVQrP29QKpLU2sVhWseyEUpoXUH6fLSaf8MXcJYYQ72sdaQpTFrreJYL8gTY8y3hUHCmi4Yz8yr",
  "key8": "2p7ywLf5Ujwjt8mQknLcNJ4v5PnhHApK1M3akDqgbbuinfvyZYhJp98swM7HdDRHqkTbRuFvJ67Ays3oBw9ancmg",
  "key9": "XDCZXwTKT1sewDJbXJuAfW7Vuz79CP2gmxz6XUhzAhTeKycVUmVVRSNfhUeK3h9TyxFcftPdys823qkwKpDf69X",
  "key10": "2E312PKRpFyfkdpSCLwDBPdQAZ28mbuxJTbgvvHumdtMv97j6KZN2QfjGhiUAD2ecYGy8GYk59gqgDkeXpED94EF",
  "key11": "5L4iK1diBGrex33PZD1A4RFHqynVkFYWb4ZQb8t9sciY4uD2c8M7bdMVnD8373DHq2HX6F691QEbj1L6CJcSjuty",
  "key12": "5ByhdyFmxcLeScTnrkJ55pxMhqQGwYBArNqXyRC1uuSrg7fwvdMMFFx9d5ymwV6nsKETqWtsV5LU6MUfsWL21cP5",
  "key13": "3rLGFBWmV7R65UaaXonGjkSGvufoDpCKSHzhrs7RrvMZthMGL7bXQj3EwHBmUSkVi5xTreXmJuabJJ3Lg6xr8vc",
  "key14": "z3PTzB6ZLNZLg9V8Hf5DHsuiBd4MhYsCszFkBmK2U9gmhH5CCoycJj1vd5yfUvz4rmRMNMPq2YV98doq9FbcRzQ",
  "key15": "3jR2RA998ZRt2c3dLPLWxX8byJvrknfNtAP4pQmcfjo37nuQHByZjGMMpqyrB8wPFWrGiT7NSrB7DMspGFBLiQ99",
  "key16": "2jNBSKepfuEd3eiYh1kgHoi6SVh3qV385gnxHS5yamAPPf54vjUj98WZboT1VRbUr9EoKwaLRxkN48wokXRWhTnb",
  "key17": "3b1QCheNKyqKnLUuzx6Fh1NTCNRPS1dZUhVRZFuFe1tLk6GtSEfFyE4hV1TWeVTbFARK5WJwJTeneowcRmENseCa",
  "key18": "noCwtYD52W92YntoP3ZzzKZzgpriSSiY3qTrFw8YUN8qBTJ3xAHVj8Ro4dmhYax2WNewbSxeFj3bK7fi4kgGvvU",
  "key19": "3RvQiCdLLDhMDuj4JkE3aaUk898rP1dtNa6trF3L8viRVgpma1q1GFwtp6j4kLC1sJNt8QYoHZAA2shmAo6DAVyt",
  "key20": "2vWifsQGXyCMCaiQCnH7tG5nqJKHMdAhTGeU9NVh8qvkZkqM7agnFhUeuc5aKNgjALu6dLFLGpZMfMBpD3VyVgRY",
  "key21": "245KxoXWH6Zw1bSvnkTZWZAtEeET1321iNn2pToCYCjRR3sUv3xMbA5vhvzNfevcDprEyS3F5epC3aPwLVnp8Y7t",
  "key22": "2Tgscfmy6zhgNd4yW6J1i1AdWh73KwNj3hpjQByDqF3256sm5t3LeQExnLZkGGQsLR7iKtZpFt2hFMRBhXwrj6uB",
  "key23": "4JdbznoDKqwi8qS9Rz1yjmCZRboymdut94H6z5Yn9e2onjXwr4Y5xy8bdEyFkVsoHBcWWpmTTW53EnZMFeRMj85J",
  "key24": "4SbYEesbt4ixuEfm2D6MEjAA9iXSnJL4GP41w2VQNJxRShs1Ka9RW4hqJGAKE9fa3YkCzbjyNJnKnJzvZuoxN1ZA",
  "key25": "2smZVXmLzi9V9h3uFzsLzGQQu64C5eZsLC3yuXiwaWA59wRrT9erMJsBZYrS63dTfK1TVWqZGEGnNHp5ohp9zXaH",
  "key26": "5fu2LSUEo2gnhqYdKr65Ds3SDEEgYcbrRZqu3tbupEoxPuDJMKaxN2AzDUPm25UZ24q16BZ3S7QrSY8fBUKJonPy",
  "key27": "614KGKeXBc6WZxGK2XBFYXhPNDGKLxY53D3KNs8osjPPpn2zubtdPVxjLWMcdjMv45SHL5R2qcEvBJ6VJgFLaukS",
  "key28": "2JxMAy4eN7VjPqD2ALWGWen3hrmzjZkPpZw86KNSu9Eyf8cnAB2Hf3Dt5Ke7PvBmSNQVTrQ9haXUwNgkJdwjmTTy",
  "key29": "5ndrKhipMy1eUJRTPj1L8zuAriK7pZA8hv1Jf411UEs8wv9oAgfPfCMsC2SfoXweLeA4c8wfctFd5rkvjicJrNdy",
  "key30": "4pefoQrmKJmPP96uAbUVeATjtrC8UpQy6D92p4SR4JCECazjQJtUK2fG5F9yyV5HGp6mpvUtJJEW167agn1Vb8pF",
  "key31": "3HhRzZYyJXrhdaXgupgLfhgNtFcvQ6Gkhoic6EduMXUVNHnSSAMQS3pkUDXVJ4YUpsumvk16TDR7YRtpQjUbWWX6",
  "key32": "58SjDufzHuHbKyrwrDX9Jvv59oduWHqLz4wYRHNypP71fTJAExD8AJ1FAo1EmdESxRVjE3YzaT5ZskiG8PPFqvzt",
  "key33": "3npJZDQTnAEJh9ari85HqH2RTn8813us5S79f5L1ebwnbTuHDPrTGNasFTh2WRwKVwJgxqmT99RB9S13XSdSYndc",
  "key34": "55WvBmhFCkqYwGZkxUeDsosMLvQFwzS4ZWTieyPXD6R7aBiFEZb2pLa5gRspAgJUtH3eWaTbjMzZ4dJ2mEftn6rK",
  "key35": "3EzjgdAHFM5ePHvmaXTkoe4Dweu5cGWTz8P8zTRTfoheQZFHZTSB97e1V6zqBFvwHViRFKYcmpoaG5reFWKmHzop",
  "key36": "2yppR6me8k2AndXQxwrHbNhrmhhYs9D7cXGcYpGjnBEanUVmEW7k6KBt3dPGWiJbrQBJvTjMjU4TAtcWX3oQkyWz",
  "key37": "2VKh7xHtR7Svsrthe6q6FYWxw4gakV3iVyhYBBAzeicrj51FY2G5SDB6bySCMSXp1BPUaRGM8XuH7zbM1gqJK7Pb",
  "key38": "5aMdYModRAFgTfNJ7UYKp7Hib165LYzmWmKWM9mZfnDJZKZpf6EhDynV3KTMZQyJKp3wcmwNmjHRZyhFd1JCgMPb",
  "key39": "4NWhn8EU2ywmPbePG1wu96gFPwbcWE5PfpwwYavJ5vvdzhtKTTqmzetJ8xgB1zcKSSwpmkrzVBJwgbRDa4tnTvV4",
  "key40": "5DSBDxLyj6odZsZgnNthcjKBBNun4sumWAu1q4SEuyRgnvJ5mNqBHUE9JQGbfdNfBtyyrAsUMU9AmFxAPUcYPMPH",
  "key41": "3K9FFRPwXqaSD5hvzzkqYu8LL5d6DoPNxqEoShMRUc2Zt6eJcpfGSUJcJoMLjGviD6m5Wrvwa28Dywh4Adiq5f2",
  "key42": "3mgNwP8yeAsNiYzk6qrjLUxXHvS555PTbJh7Xeo58Kwwhd7djcZbxdvksdNnndQhv4uWmAeECqJcw3LQu9QraJ2g",
  "key43": "3oovAuGhx9HKkxbgWLShw54AKrwCZ8j26uQCM1JdgjMszNhBSq6CvsEU6Vmk14YWV7XccchkpQmw6X8R6zZ6WrS7",
  "key44": "2fnDvekPfsXrnLwxmumsUR437dioq2mEyFUamcNPQKQ5T1pZ6nJSkX73VgRPYzD4Cm1Hi8CfJD7pDPZfpFfZQhkx"
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
