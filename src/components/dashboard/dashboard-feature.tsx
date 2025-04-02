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
    "34oetkX5qXb6YBPsi8YiqwbxrXDSJQDRnQSwGPdZjFAWD6vYY9qsCCQHfzkaptBLK2xj3RR3XeiFZUh74JHZVSTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "432Jx4Bbh34FtAgDUvHJnJF4FcHfLuumPzAEBJv1wMcrCujKbECYXhcks8StXx6HGpvrY6XApcssGTAizgdj6r7K",
  "key1": "5TN6ykfUZMRdxabdFsu96AvBxLMFUS5MH3cMgu7jMRvWDV59ahFVNMXBuJVDpoA4tDkuJhRw7MA3D1GJhC2PAkEX",
  "key2": "51uMvREPBPKSWLbxWkYoucygNFL4dhjH43NEfHXEPJmkiPwbvoQF13AA55mdRPbiEtW5TqDUsQhh7qkET1pMdqMh",
  "key3": "75dQec6RBye79ST3f8gDZmDPnqnZJjuYz5isVMeLgtuC7jkA3dd7dNPT81ScY6JAEe8HtE7wHFw9xyPc8A92HFm",
  "key4": "3phCdNAGEpxuhzPBeh5QPxbJyne8wtvQaGxQuFihneHmA7m1hSDqHGjMSnwva66dnnhCoahKResmMn1HuUWsVHK3",
  "key5": "4QmCHGrzyM6orMMd496kHwQ814DGstmbi1RsxPG7FmiXegxrhakiYjFKzGojmvRZWueLxidS3BRTuaCvetzLfP3G",
  "key6": "4AgWS3MFfKH39pLtZsjqouECQSA6ps6ZwFLK576fuEc5LzqaKVySzcsk3JTbGLTzUKafWvpkNo7btvu8q1LYjTDa",
  "key7": "FkPCU6o32uNfksiBLVKGZGXmzUxtqt6d2m4dPqrRDyYYAa7NeG1emKA7iGoJkvdDYrJkEh53gZ5RjSvVWXEeisL",
  "key8": "3R1zbhc2yDMTXx7PX26v2vjhhhsyJ8gUMVUn7HjgSmU26zXqq9fq8GJ35MYNXP6pBLsQtxsP8e7fcuHBku7Za3Mo",
  "key9": "tWPGxL8GpSWvyoGb43gEzMzemiy7ZSWFBW3hj2kKK1r978mzeWoGY9ttGbdGf86r6xo7TXHDa6o6PRzHeK5M9Rv",
  "key10": "hU3FAMM59MUPN9eqcsyTQPjdnKYUDmBHtjPD6U3PfdfgjVwLEopbxVkH4dQ8N85BvJFyjiFtV2zMvUs7K4iYXMx",
  "key11": "5vbGgfpa6bnCCddbK1Jur8zQHaxWyyYeZgK9gv2SMDf6qHjbuPb5iwgPQYD77MGJsn8pgtgwdbczNqwoHysEjDFM",
  "key12": "2uxqWhR9rSiFAfgcQWEwTf68u62Zt3iM6EuFHWdgm7stkszJz39cGTLWX8QWYbpf8XLchqw9rioNNQg2Mtf3DgSa",
  "key13": "5rx1GtJYJRD7Zukefd3eh1QvWEYj1X7n7MgPFcnkX1csPVEyvo22Zz19qH36ikKyAokSVqQarQGfNF7JhfiznRiz",
  "key14": "q7C9xwNuTkysyeqorU9kDr3QaWn1vmP2kq6qWCrABXMp6SXjjc4GVj1RejE67ZM1LeMhmDKVU7eYeD9r4m2YK1e",
  "key15": "5nkLTgwoWt3XbpgNif9dr3qGVfaTf9grCwMKUVMiuK3ZZS8njYtkxAZNAjTmYsMhxHw6xQEJQrtYP2yZWmgFxi8k",
  "key16": "2cwiQnT74mpq5BzKxzRS2tMob8TRAZcJHBPCyH6KgGKvpqaY14C8zwViVa65BEXc6QJfjfzBcDFqC3xpY5Tonk7e",
  "key17": "5beDQuVkoiaRZasquQPsjYR9DDAtbeWghWEPv8MGgv2YF8wyThwrhdGxRqjGVQY5Far4Wfaf8eT9ACBtyAaek1dA",
  "key18": "eHub1vvSGCSU2NGEXkZEnUu9VjvMZUmehdMyQdT8XegeYSZxm3zntkMZNg1PBsi8i1iNQFm5CXcT2ds76J38FKn",
  "key19": "5zyiWQYro7qd2Gj294g7F6NPZ1zASWjLiSdyChcAtVCqbg1mSV2Xn9TJ2kbKiQcxhTjfbsTXPULBw6FdKYEJtraq",
  "key20": "5UpLZ1eb5i24HXjMzzK7EAhVVfqwRwVJmMPRRrCjDyKTbhpPsXnqguDJSSzhJ5K11bYf8AtYHxC2DcD9piATsLs5",
  "key21": "2eLA6Nt9WD36DuHA1gHCQJrab5murPE53Z3P132qeiymuTTFkj5MXMfeHDKAqLh1mcQsqnqf8s5xk45WNPka793W",
  "key22": "3ycahYcgzAgrYgq1zH3S3XGeUCeVBCoZEFD6DYTP2doRCcFNAtdi6TohHTUM1okoEuWczp23Lm8gtHB5A93Ff9NM",
  "key23": "3XEM3CBXkCWV7xekh6F1oC7A6SoKtBosQkXEYy5oBwBJ4MV8YM4TNPS3F48V6JwznV8qETk5Xk4aRr2YEQG882iR",
  "key24": "2vL4zZsvoJNUmnKV8An2tnVHafumySLPbG5Uyonoe8uMSsHdh63hJa8PUZaiiykf21cDUxnRGgry4iufNe1gffMC",
  "key25": "HMCSFvUHT522TYUFQD9pWYAGsReQV1nk9P554hGzNqjh281y8t5BUrk8o1FqwF9eXhvateEfatMxYe7gXwod7Tz",
  "key26": "9mpdzrwRX5UeSHSSCPatb3ENJMwtqfeDHwFmV1wk9iTpquqv1F9N7XCQ65mDZ9Jw97NPqxKhVXnQxGe5RPKfCv3",
  "key27": "2gKTaYYJmwH9jAo5FKmwGmZh8dZXhpHttqSuHGUaPERDgqGr4urCLHiJNo9anaZni9hrUfwvMJ2wDJ4AzAiobxrs",
  "key28": "3Ws7rvY3NaeRexDo2RCC9a4nseSr9pSnYe3DDH6d5RCk4brFQGwCmsFUhsDpWFG6n4j42egd8oGbaSNNvSD7NYgp",
  "key29": "5qMt2vJAWU5oRecx9vD9dVN8YUSEyCis1jGLoavw5kQSunuNSm56XWQrqns6DFTuUgw9e7u1hDmRJcYqQbzuf9Lw",
  "key30": "5xmMjQ8BkfjQLiUzway7nPfUtkYW7Ejrk5bcemY5YE9NVkRbdTjAgWNPrT6trYHFm6NqD8CiHLu6614ztLs5Wdcp",
  "key31": "34VfEAoS6dggzbnUWE8NGDatr8C8xrb5VK2jnHtntYHTe2GuPUPP95YuVAhpWoNHGeQ1eJZNzcYzMrVWgJs1SLJE",
  "key32": "3MDNv39MJZAM7s8EjWdVmREtAzBQ7fqpVSxoxvBJNdLrREdZBVYYaGTFowBvAQ9jit47r2dDGUJnkAYFgr8TLtnB",
  "key33": "3nRyynZUwLDYBDmgki5baRpoBfZVWRquJhEyDPSH4qKkgY1T6T3nAvHiwVXEBqJXay4iDk7n7xWBfKfRZpDqwFiw",
  "key34": "5V2vuYxp5vAVCnURfJPfkVTWiUeJwBoDYDNyYKD77nqMbkyrqr9mgYFzCFCurM61v1iNXepJuwPkqzrCkARq6hQe",
  "key35": "5936BZbVSkfioqjbs6XYZUh8hwxTHqbKW4fS62x9KuX1QGLEFyf4nKDhimzSFPGydEuCSaM2t18nBnGTCZqMxjzb",
  "key36": "52czNvnw6dRFsgpaCfiVd9hTf1TFjhpTQjhbUZgfgtMZNe25fa5mqNdq9ptRNgAhhNBwwz2xf63jH6rf48HBJNhY",
  "key37": "3vjSKnvi2kFJTXAmH1xsNhzfgr1fVCUFWyNH9tjdoonWkhUqrjeh5VS8BmWcLZYeX3TAKnTg4D3d7VxhMN8ahbWJ",
  "key38": "GqeSwV7gxNqLddNqpwpV1nfAFvaJGqTqkCiERZgQmoXg5VxpRFYeViNR9faUhQbhtJ2rUbTu5aGRM4wMi8NrMzF",
  "key39": "4b2T7EDienUB3NoBCvEmZdGQeKJVFCCoGiP5KaSt1zDgFGr3pasN6UWbCqqVpSbgRggQf1BcMVu62q1cJYTbv4Qt",
  "key40": "4UkZDYzcz3bRfLhSvbkpRdFbueGXGc3QjtL1pV1rKxeFNa2dbX7acLzcjwEAkqGeG3CgxvwvXVUsgs1P1mnj2Zbv"
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
