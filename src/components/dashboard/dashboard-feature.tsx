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
    "5tUUitjWSn8AknaUT8RjQ7gvYUKPG1x3WQ2KK4afrYDQkRttUZHLZXr2t3sXkr4M15qks3u6m9pY48CWeKeSDxhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jAtjWuoEmkQk9z8eX6u63eZ38D6mvYBxF5q1Wq6kZEPaq3P88vtg76wWynRAyW2kx2zWtdbJZbLk6Q3MD5bdEm4",
  "key1": "2LzfUXXKnPs5PimAPVGxxcpbkZFcUKLm1ZyVzCvRoxRhr4aAaAY5wmSoMgmxTTntXXdjCusTngBNF94YAXj8XC8e",
  "key2": "5myU9wzwmxeJofQgC9f6Bmguni4zAQhaTJhVWPKpa1aSHZuJrTyVvJsMXvZ8zrMLD35LQYchQ94wXhSs54ZbqYKJ",
  "key3": "3SMizZHKxgbiCqryipgaAbiwGLCJwAw8crtfefQWBJGWZxSs38QET1jWozFYW2Zv637gFyRpq6W7ZbNvNuoNF7kP",
  "key4": "4KhsJ6aHvVrNQVS3SZseFrTHMRBiibhCQcnJV4bj43uWVDBRZ38oCcMPuvSLRfFc2iqtwrH5x1ERmMPK5Us7kR4Z",
  "key5": "3e1ZYKwKfXBLh5hx2rgj6v8YBVbxSsBFGxhGoXr5RCyTiFpK1oGFRCBvXAxQzmmuXxRMVpb6v4ZL4jePCGm1mr7Q",
  "key6": "36iiESkpduk7kYbuTVF1WYJmUK8qmxBZ5KPBLnStjqDJS8J22rb8fieSwzyQGHYXoxuoFANz68TLXKnvG38FiLG3",
  "key7": "286BmbR2V4aSnoFJcYJHg4tiZVReWVnWC1wutrMY7K6S5LC5jYXukciZDEFhXXfa4TPer587QyDenzpMswwkbsYe",
  "key8": "Ywpac42KrKpvN2HkoDuEePmVYCHXhVNZGZHyn5fnbb5V7gaJrk36rueKrbTAC1NjxKdnNcVCbix6oVXrD4Ekmqn",
  "key9": "4oNX3EgFM7MHh8HaQeXhFdwDLN74eWqrXCokCeWYCnRowCkyhp6hjR51wwauma968ZWVHp9ExMAcEjeKUpD5tJU7",
  "key10": "GPpYMwHFG2FRgZsx6F2chMzGDv4X9LyofRaoVTQc4Ki63ZRZPM2kGmFUcKJ3xa84w3hR9BP3wZVoXrMtkJ52gNc",
  "key11": "BhnScQtd3kKs9aZRMBr4bmNyypgddf35PhkuixuS3H25iT7qD95GVuduhU7UCdXZNSh41JB3orFMV4bNFzhx14x",
  "key12": "3N2QQBRXwTnHWo6CQE29Jd1Xsmk5JJqTWpgeWGBT1433MvnjLqMp7LEix3tLDNf5DpwWhiWsu8pG7jGi5hQWcWMf",
  "key13": "4Zj4Gx47hvXs56kiq9cCSepKeePGiVMhZfS1aKNpkpW6AYVwZyTFXab86yCNCnrmap5wzGeuE95fvcpnVRRFqv9E",
  "key14": "55oyip4sVaG1uxn1QZFUwacgV5Wp9Sa8Qc8o29umEp1vZYsFBFescJFD6KVzWt6SfzPFjoTqhTi7jNGaFrEXks1M",
  "key15": "2b95YS4rBB94DxFDQogE1JogmX4ingzmoGogYnuUJPKANVgWqm4qYzMmjDayqysYdPGZUXxN5MRgfhWveoRi4VBp",
  "key16": "4ZynLP91DZs6w6HTL9whwW9K2cjjusxDbpNoxyKg5CG6qbytYneESSjUzk96jxN6dTZ8z4dh6DxqGxXGJAcwLMmM",
  "key17": "3ZtGu6o88u88MUmJB5KUH9zNtsybBfDLFQuyVinX4WiG9U6PRWfhjhGkpaT2apd4ibX9us77gdJG3EhAAKPfKzek",
  "key18": "2tmHgVYToNyJmtTAnQ87MBicrfFChPuXWDFxXwdvVhDEHivwFmUP7DUhowh5hfrcmabVkBH6JRsVNpQF66xuaNoi",
  "key19": "61G4KdM9DdLQ35Dc4hFsFnnj7gkFYUfWqAWE1FmRCQjX1sLq5fxnDYxq5JY3wjD3CaU1F87YWjECsYUqUe3JinWG",
  "key20": "3HW57dQcpEDNaKs5u4rbjDwrnEsnWhsU491n72XE62xUU8MA8UUn2jDm7M3KH1eKFgwqZZogEHBaoaYsrCeipjB2",
  "key21": "LZWKnwruTLXDtzqftXbKUu3Nt7d7sn88wnuF1Rq2aoD9BheC6zXnDvZDFZzDSQCdjRSYhUABoeA11jeWuvZsZjX",
  "key22": "5qTPdRNK1KnNj3eoCHaPp6yWMKZMNNpZaD2CZw2Ca5KKgxXyAXhwjyw2XkzAFQsZscEStwPXKtNpG9WehQb7FNmD",
  "key23": "52P59xtzHAFkKhBbz9cXWfTGuYFThx86uHYJo4BWmC5bAb45sTLGRVFmLtWqt46AvYgsajzqA1AyjFhEAeGCAMgG",
  "key24": "36wsqB3HEoHZjtoF4h7ZiCuiuPV69mkh3ghiccnuVV9M7VGWAYDoWPMcPDry3eYSzN3iAZCuhzXKGYS3ZzYrE356",
  "key25": "46Y8n6mKvFwu294eGMKUa2pnjFDyuyd8vbCg92B58FNM1KGHfYtuxMxiU8HPiHScgqR6ar6xmnNyPJfushTmDbh9",
  "key26": "3tEcEKQpLEkqXnbqBmffjLD3dftUGFfpiucrWHih12hF9Y7zggrjNMsZmofEWAuxLFQXusStMbXxzrNaT3gktRLn",
  "key27": "Gcdfc1xAChNRaKRFzQ8xuaddaaF7Cf9kNq8EVg3poq3dfTU7pZQdS3Nio82f4aE22MarbPQXLRDVZc5CSUt7rF6",
  "key28": "3sa1upgUZ7RMnkpUZk9rnoxnfDbfTmsmmKNFKQhDPYHsLG67niEBx3NYARQDGT9tWcnEeC6Wa7FiFVRj86tyFGRS",
  "key29": "3WPyw3cUMfUKUDxhHBNp7mkMDPpW7jeHe3cRmA39EiFYH13mwwciz54yQTy3S8erBS3xS8pSvptKtxVvV3XLYjZK",
  "key30": "2eE1QKcgVNzGWZgbBd24pciNqMvpnZJxHJjhtvP9kYvx9c7qqSMJvZ5L6XwEfAQySFJaGZ6gMYQVsLdxih8Aybx1",
  "key31": "3PMQK8zYFirxsCTU8yZCpLRy65f2Uk8rPzKhMCUEVxbRHw68PzzLs9Z8WChPEEsn3zNfCubnJhbntREx2pftPFr1",
  "key32": "4nbDYfyWE1D99n2Rs5jhxpdCv6v5WoyuK4yXsrLKa4yp8cDufiihP6XWmWPvw81e5LYXXxvCCThL31XezhX7evzL",
  "key33": "3nH35Lt5uUYbsTLrcAzCQ1cbyYDUGfwbhUTHbxn5QbG2Feq4ytuZZt2AcA6LbXh73KVNpr5gQFC6rDz157LsL4wb",
  "key34": "21eW137ZwJS96ynjFUukEzTkZSuHbQ9VedoFqhVjCFfKid1WrZMmPA51oBThgjCAXYLuPkhZHyfTaVx9Cb1H6mLr",
  "key35": "6AxXt2LJLfp3ySY6Msvycdfk7xWK6n2raBKPUZhvEt1t7b1MXou3x4EWC5jWrVSm6D4gJobHrXSPwcjeqWkvZJv",
  "key36": "7ei5TPwGz5VEz3qckQY9cX48bfoLWF4z9FSrT4p9SpfUGcZcuc19BNRhrg129Yxgoy1NwyYoSAdSxTVZmshNNug",
  "key37": "2TZ2TZD9D7z57eEVHXXmCJsBb9TrMDxiJS9cg1PU6xhiecaBUpYrimFo514xvTbKYc8Yzw4XnXh7AK8n9XbbPtYd",
  "key38": "3oDnqqtk7BgvkS4G6P2HdeAseg8MFSxumZfzfrzCFmiu5kLVu1kRoYGBUQn592CpPgnTRLLMHgNkWGcQPnc5eC3f",
  "key39": "4nqbfHtraSFntrVQnoZr6XiUrXRZYrrayPeWuLmCCZSB9bcRkmbcczexsAHAemkGqg4N6b9RfPwoPwtp299YeYJY",
  "key40": "3i7MDqhqjqKnxJxjh92rXSJhNAfDNK5kZsGqZ9dFqPo8gnFHHUAn3n7szdR83hrXQsmNKZ1jpz5sEJR8dwjZ73eJ",
  "key41": "ZmV6nx5Jads1WKDKAk5FWacLThJWjxNbLpYontVqnZGSi8WuYcioYgERiL4P1Cqr94xNciN7AK4vu89we6u1an1"
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
