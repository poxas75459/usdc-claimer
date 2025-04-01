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
    "2eoB5bNExTLrrqpMzM5swiKP75HTJwHm346CaffYsGBJEZqMaZ3mac4t8xogeCTD7gU74W5zyYVCwKgPYx93GKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qbsX1W36A6KfM3y2MToQeJZC5Fb61oXEEpbNArsjF1HyUUS5sAnTxJQ1DQ3s1nQiFvmGTBBNwZtAdYrx6EgedWu",
  "key1": "2G2kAjriw6ZSSF7Ps5F7HjA6kZ6ytZuFMRE1ZXPJGZ2WCKpBEe3LfETGWQ9f3nQ5SmW7q2rPfxgwY2SS6L5h4nvM",
  "key2": "26uG7iWLoH8Unsr48xmJQ9bqnwHVeWWUEn3JxQxoiKqk5Wd2K4Ht3RgzYZ9nPYdsP5M1cUSD6BegJsrg7Pc51y1f",
  "key3": "2FLJizGxCSk4CvvTf1x8Egf3oRJd9wgLk7hN2Dwv7zJMEagoDX6pxoM62Cb2N15LMHMGsy3u5dusA88J9mQTMud5",
  "key4": "42ZEqeB1wPsqDTkafU4gw5eCektoYoS14yQYrPTFkwFuRXTBFTg78hdvW27SP9zeAjg7DVhoadWzZWwAM6T56vrA",
  "key5": "4iGuQbKvoq8FoSSKeKkvQZ3EWnuT7eELXg9PsB5RMH9TQR434TcVk72mDFwcnsguAKD1JWDx965oTmxZscW8j8bD",
  "key6": "4YpUjhraPWyNCMpFtJ9zWx878bnmQy7YM8mccCKMvTTFyVVwR8jmNAbfgmWWv7vqf2uH43Vs7XrSY1B2uoXKY8FM",
  "key7": "HAxgeiaH3tkcyvre5GERmvFXnnyEHUExrCFFzMfFm9rQLC8bMes9ikAdUNcAafrEGEF9FkoWEByNnLSZdqC4R6S",
  "key8": "3A6uM2rqn6bCsCKMBqkEnJfqbw42xjtXxctLdDttRLhNyLjeu2X5ytRECbxmhzWsooEGMKvVPiJ6Hcz3RzJ6BuXj",
  "key9": "3MCmUpqhjoUxk18D143AqeYBQqfRzRPp8Sqoqb4E3bcZxRmMHBk9jgpgV1YW8Qi5icQW7cAJUhDk5Dqu9kjhxu14",
  "key10": "UEHZYMguLS8Hu1m49Yq5V6p3ogqPai8gkyEnxSxw65iu6qNztkUFnaXsum971gcunVUQucxzAEwK2cvCd2R45hj",
  "key11": "3ezKyiX4z13K5TD68rMm9zernJHksQE6pTKr6UuArKdTsi9xDuwydNH8qvoVrwBtt1cXK7EfgH5Wdb3wbKQZz9oW",
  "key12": "4JX4a3Y1fpvf7kVNdsDVUka8HmJ1Q5ZZk24QouMp7QPzxPyxXA1r1hgMTFuYw3dxDXzWEtUPrRPGuKApgWTNbFWK",
  "key13": "3E2zB8KRbWDigabjQNFsqQUXfLSJkvJn1Yk86xj47KW5M4DbDwdSuZyYibsKmLbbVjNv7trCcopAiXPxpehPQzxc",
  "key14": "4tmCH6NNY4rEEeiMv8yKcpcywzkNhYTA4hXa7PTcxKH7xJL4egeVKgYv6EGoD5bkVnadFHCMmPCNgTcovDJ5WUyD",
  "key15": "3t5pSqWiwJBDMpB7jZjmKn1nGDpQ71E9DM5jb6saV5qEoZiau4RwDbjNKb4YNWf8YkWLkaDUdzhSBedVPLr8ei1g",
  "key16": "4jhPz51NepUqoKpeY3KoeTTiMvow1F1Tq1H6aAQ8eEwKYnuwzQKGBpxjE1zfUzrgBVMmfS5ae3Wm2okDddstaeFt",
  "key17": "xAA3b5cbLuL9NtuByEaPg5MDgvcLxuhJ6xVFGaTV6Chdh4wEaLuNs5iWZ8N6cxJdUeCA1MJsGGnNnxwmZmufBSS",
  "key18": "5QjTsQ7SiysVmngrSA63MHnc8uZL3ymShEXWaTfKTmZrqPyMgfs8wKZGhBmUw6brPrSccaZ27BAmJoowHRsMhg5q",
  "key19": "FaJrPkCidFpLtn1amYQB3W1ZKdj5rHNDFBtNgFudECpUoXQYhCmB1nfAPnpyq6aFqtGptNZrHmNdawp4VnW8J4V",
  "key20": "3mGLfzMLLQfWgxAAVthyZD7FMNfKupfbNUNc8rBZVcCNXpxBG37SF53XCcy7bnPEGigwDAoSMGgKgqg5YHEkTdZK",
  "key21": "3B3dTCAjgbS6njmwWaZGoSYWqYUYxdzEVF493yHqN3tk4NadWSrkTse2bJkEQLAueBorwWizYT6x18CkEr3jhHih",
  "key22": "3uqJJaYynmq9VzYu69qfjoqs2E7oYVz2Bbbudge1kfr67fPJCJ1uv5vsEPR3iCiCLbhRK8UMJjyXgaUNXUeJsfB",
  "key23": "3EhHCjSzXpKRmrSQ2nJkdpmYeV1st5mjaffNudnb7ivssojYuYtrK8USqKUDBYejkGeWxZyGZBuxkjjDSYHADDas",
  "key24": "48rWAHhEJjcYvnxYNoFCwcjYdygx3hknjehNXLuCEw4NAuHZQghcCutMi2UwhbsDE3gxA15ZzAZhzdcp63kgxFq",
  "key25": "2jHs2NeTf2gxvh6zJfr6CD6vSxPR7FABspb8r2wp8Sp2urBJ2U7S9R3GGGdkukucX87sSmDipiWtKJ2hPzi42vgZ",
  "key26": "46FzXdHfZxHyfdReABv1wbzsZBkWi9QpRwHmPsg86QtWhUCga3G9AqVbEgwF7bnLtNahb25LFHmmeNRB6X9aXUQH",
  "key27": "WXmsiF7d8ArScKC172ztiLnVNzhfpAuZbL48w8tBzipv7H39L5JCFP2PwwRpQsZp5opEUVaCyz5Zda4PRMC2RtR",
  "key28": "2ihJ5jSA6VNsqm9mkiHsXE86twStw1cx4UZyqW77KUjLJqi3H1zyn7Yr75HKy3TbtXRz627u6i7VxuUiXAnVrJDA",
  "key29": "3Prj7q4sUjuxejrN3zfvwqumvQhkW2SZHnCuLRG3BpHvhqjXeNg9ucavJJj7LwtULF7tNXXcioBZTLbAUqhCYr7",
  "key30": "56vUwmt8n5UvHwkH1RuGiPeJqr4R8p9WMyzrEmLzAPGys4H6smAFYRoZm8jxW19GvfW4DpqfMTLXoFxFxrWcV7tu",
  "key31": "3ezy1nwC12sk6WLBuDXCLoQMekype71Qj87XFmj5ZYgLNbdeQ1Dx3UwEHqdb9SLjEqkzgs5aRFZ6vLN942mVXHSn",
  "key32": "ht35johHSZmDFBDxXjAdjBWBgUDn1SPzCY2aN3XSkx89kJvixasbDWDX12BumkuKA9eHenqV9bkZozxuysBU81r",
  "key33": "4MthDqkf5Ju2NTx8DsmJSZgrHJJ1GYgm95cwgRx4UZ3GVRQFPfyPm57Zf7Z88dcpjLW1dkeUWboCzMca6Ztu1z98",
  "key34": "iE6wPHqZyQD94j91L2YWRWyrimHK3AU1G1rAEN8D5bv3qHRPMXYp44nWDYakMBpqtbdCKgmUTDgGW1v61FB9nAG",
  "key35": "5X9tPDANCw6iCaDqyja9urwUWgXVtwRQ34UJS27U6WFtA6Y1G3chHcvU6JaXmvYoS83cdJztc1k6KyCQtLvk5thE",
  "key36": "YD7TCPJ2ktznL6W3kCJFUzdCY8ejZqXj3bnXpdeET19WUU79LD8DJ7z7ZimprCPnooNyewf4ivorGd93ZGFGeZq",
  "key37": "33nTCJvQVbqGPDYvj4ebwrAAy2nyLWbfCRkedm578x3BrzgACk1kinEMNnYYtcqiaYuqf2NeGTtpaswZ6RCCwo7D",
  "key38": "3rNcxWCKzE593zQTLTuyBkzgkUJGiL3eqeSLC9GCWGNK5wrn7U3Sqz8RhUur6Zgck3vZGHPcXFws1mMam936xJCL",
  "key39": "878d8nDTTBEpnECJk7qH4Diqj4BfPrL89Qg9uFjjTBJCDhrkXGJcauwDWK3499qTQLZAUdLCySsnUCz4ndCcMiq",
  "key40": "3LnbxhdmEikNjBiS2WvpXnVfzonGENHY3YjS1deD2qLCADbjk4mZfMAGdFyxkfRUnACHtiD6UMFfn94kr22ihgrr",
  "key41": "4RzbBvvb3tRKTeS2MuxNEW8Gy9LA7LTpNN4HYhx7VVYtHbRx5YG9yFQd2TZhYPkRoctHiC6WW7HrPxyjzsCGAQQP",
  "key42": "3q8rSoiLxj2jK51keXd2gEMKLCdA52hZvdNc9yFr8RAnrSgZ7hGEyVMtxdP7MtiPEzjQxfAkC1jQnRgpz5q6oNa9",
  "key43": "2fB3upbATDeonwX19GUyxRaLx59np1Fjo7dAzgWCrmjsvE2AmHn4TKwdbMe2RheLbLii1DLTgqXpMWeRouyCzUhp",
  "key44": "3cJCdhwVfyyzUbQewn9Bb91pwrioVbBpTGtf6tmTBvTZggYDWdBSSJEkCXpUuJoGroRiEbGMZApXKf9u3xvjm4xm",
  "key45": "3LF5NzQbCNEaLCQJ58jeDqKEr5oAEMmQca5h1dSy9b4JBafEsN7qJtDghHDGe1qYMZsKnkEM7vTbJQQhZMPNtiJ7",
  "key46": "49u3dEhYYE1Lo29NBJYqeK2wUQEF5Mp98A2u1shsNBuJB55JHtjbk44sPooaEytNLxVDWyBtwU7du1qAj1p7Jh7e",
  "key47": "N6emS8NLCUaewVmGozSYTVk3LcYR11Ewe9RduxBKcTXtGpZuf87uy3kkgjUdg6cnRUwG7L7DhMEiARYudEie6n3"
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
