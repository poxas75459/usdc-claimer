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
    "2wyLkA9VnNgV9JMSEkVeBWHeFKMyfmzziAbaFZe8JMhFhuw8hqFxs8drZkV41wLiUSryFijfnXnoBxvLQMFSwYa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9GopJUrfAYhmtmHB5UhDpgkjp9oxbbuMmBoEdEzFETzvDckEm76icc7BpXZG6eGzr8uQX2YV2eBGNQm7gY8ptS",
  "key1": "S2N2dzBb7YxP2aC3JjcbF5Z2ZZBngPdUzY1SmJYzmDoAFo8rtxNyWXmVttYURQEZeQT8XQ4VvRxTxCJBxV8jQEG",
  "key2": "5xS1CmqdbVcav4roWV5pz7j5xz37i3VUvJxSW3JEPvs6aKEXa1EZx5MQwx1Lvvp8p9PbQwvQo4WWTGCT4FT2sA7w",
  "key3": "2VLHVZvL9Qn8rnHjLYjhkGSWFLqYFaoGYQfmkhMpuwsTBsGUSr2BtaCjuc7ZMQE6NB8bhyTLkLHv5s2uS6MXM6Fy",
  "key4": "3mvMmhbG1i1qf1zSvH235ravGZPUWs6Q3j2CUyAprtWFdPYa6y8P7nfqd7bRFLWtXz1R7MRE6aH9zrJ7kQKnr9B9",
  "key5": "3vTCGDtD5Tj9UiSvxKSWjLFJTC7Vqy4jZc3JnyeNB8upkf81Djw4rPBx3NzxZniDMGCCAzxrG3KrDb9GKQ8hiEk5",
  "key6": "3XjuSKHDm2tykapu9o1U24K2W8fqfNZSKuNnHa8mRXe73NqAgVSMbsW6u2CdFbHcA8jtDT7SnHgTjeKFQR47Zot1",
  "key7": "3MnbAVdLzq3TjVDd926vm3TsnSQqdpm35CtXHsRJHRoSyZr6L5C4JnSDDZhMAcpZKoNpGzRxgSDm6uobL4eNcn4W",
  "key8": "3nZgE68F3bnaP49jq337VifQaaF5uk9AnMEQMNuSG2hM8w2u7Ykx12LPkVa4SVxr3ug31vwMYcxorHApi6hdpqh4",
  "key9": "5FboTXJMkbU36pW23ZLKzAjoY5K4rKPuzfh3BjsahoRuRCwwJQNAmmhgrpEpxV3GrxHVgkb6MzrmT2dHx3zLkfNc",
  "key10": "oujkNgnK4mRqN2zvjLNpG2r8PemUqLJ98JVVZWEo3zspnJTQLTLmGe5CF8uvD3Kx2ywwBJ9u1T37HjvDSSLRNKY",
  "key11": "4JWi67NnHhD19bMnhToJQqJp6Jq4RRnG8CRWXJxNwqF6og8Gausc2FHmsczRR5eeR94FtM9mf1sfJxksn1YKnype",
  "key12": "48HbHTaoGDQi6puH3UGu4wQQG4RjYKdYMRABPj619uUhCfRApKNc5ARYfH2oCGQS5gaZLYknGEVCcAdMo7eFNkF3",
  "key13": "3QEWfVVv3ViouYMxqX59LF1ygHxN6qigFGqW2EGhn1wm8t8ZEFxiaHUMhz4TZC8SEM1qQENM8KdvWCjeT91JfSqZ",
  "key14": "488TaANX1Sn1H5AxBuz7jUb7vK67RqkpZYDh5DU17iLYao7RJpNKEBGmpFEogMXws2ARTpsev6RraPXh2gdFteta",
  "key15": "33U5NVzs18BuMLWaavvWJp41xCvLWu58fsGxyf3AHqp9iLFHvP1UhKWgfj57nqatLE7UvbVxpvwhtNTbW4tmRqjQ",
  "key16": "4qyiACFmYDb8K5bHnC6DYrzRpu1xVjg2MA71TdkRrf9EKL2jdTzDW3sSXybPrrK1sT1w734PdYrNVHqhrGG9ANFA",
  "key17": "snrTqrDAm3YFbdLvMk94gTvZHx5dye2koxyEXhmrxoNnxYKj6adNFnz45TmFsrKPGer1n3MLKM2NSGdSrH38FAy",
  "key18": "4LRVnQz6p4h2rA7AguQf7xv34CGgfRM46DXDkqu2F7dpmyhZwyUE78awiEBMpwgXkGYSvBSUTSLtiu2qjkSoYWM2",
  "key19": "2c3ixnYUjc8T7zsjSN2qhGhWDBmPmpc2DQHcXtna2en7zAio2cLcNHTqcxQ1XK1SB2BVHMzQy9C9rQBaYtZTJv1q",
  "key20": "4rXTSSHEptH8hRMgdG6EwDBcqwWpJD8nNXCGrh8BfoiRHXqHA19NWAyECZxX5iS8KGANvzmF66svqaktvg7C8xEV",
  "key21": "5CDPCxebavgvC4QSAyEyLJFS2fy7UnmujFE1NGi72M8mpwKjLgtWgXz3BsEGTjvW2M94tWeqgh3ZFaqxCXErKQA",
  "key22": "48PHCvBRH4z6ZVukepGgG4HVAbbdaxxsmtKPQBZKhtrynYCdHK4F6WnuegHNzAFs9RVs6HyBqneKfrALiw8nUrCK",
  "key23": "ewpuCMbEgYMP15ooB5FR8wEuH78RB57GVT7FDmwwhfq5vV9X9W4NA3kUMRu4Xr8QHtprYFJLEyZeuZqc1omQ2rD",
  "key24": "5ggeVyV7tPX3L32Kz8Pt5LbZPLK9Bzhp5F4WnR9frZawPHkt2rsom73Gh8hDgodbqx5pUgvPpNGnpjKjDYDgg1HG",
  "key25": "3MwhEQ6USNfPwpPDdHbjYJWNhvwK6d4Qo268uxJwqvV7VSAqvLJ3GrAuroNDujLM1YVF5pJVTtkSWPfFgxqJeouX",
  "key26": "2gtEmWqDC4UGs1aineEf7B258QRteitQ4v8rGojdhbogMZHFNwTzVaKnLD7mWjPenBvGozY5JBPezs9LEMZnx5Te",
  "key27": "4oPYxmeZx1K2YragCvJR5tJvrWeXNx5k1wiMrCaRMzSDvtcXVixXKKWih4Smafm5pWip6K7YvSfawMEdv5sSGefo",
  "key28": "58Wda6gaV6MZgxaE52HHuoU8Pjf1wdKzFHuEhwakbYhpoJbUu6nCR2F123Vu44CnRtyXEk7fxqDCPvpfiPWBozan",
  "key29": "5g6k2QnR8CAbm7w8rhf5Mhoi2q6pr6QGY1Aj5X4yhDgsxovQE5gUf1Qi9wF5D56HbRW59V3HboakpfGMoSxmp5mg",
  "key30": "4mKdwuPiBqjdryYavg7efsr3pRm2SMKyo2AHLUsraU4LAgpLTQe1uN3QedsSQxNhSwE1Vn4KeDstafh7w2d38iTc",
  "key31": "5R39vTyeVKSwFqKhmqK7tMwAWa6jvyYQc5KS8voVn42MnQfXfndC5oYPX4467gHpNK6m9RpPecNrfHfnE4obNxem",
  "key32": "2jmRLv5AMMXWVoorR9FPKQtKYbZqyfLhGhuYCb6bupT1FYw1cUByKtZUF2TwXMRQyoUszd9NFNb3pHdEgQe5jo81",
  "key33": "2HYf3jrD6xksQDSAyh8qGoSBAEgbXvwraPQJbuGKXTxEf6C7y4StJ9WY9WAEXrm2bPNLGhpmzQH5fHvpnh5VUqdC",
  "key34": "3MZRX7B2Fno7GAuNknCwbbgU2wXoMR1TGdJyRPQmftzFKZzb3biBMSdCmC7BDwqYqGH6EPrmAZuG7jDCRgPHHYPT",
  "key35": "3C12vsXrR6h2LTK6Qq3jyvFQ5jQBv3BcDwXbXMZLcATRRJhzAuC3ycDwcXd89HspgGHLNN7zSyhQhRyw1JPfAXNb",
  "key36": "5BrppbLhantvfp2QopoS2MFfETrgk2AN1w28cHNtgd9t8mStwcsq87dvzX7ovQf7BDuMCarRYGsQxGfYZBmxmAXT",
  "key37": "27bDw9YW6ZsJG3ckz9sHDTAJ92vaiTdLHDDGVPR1D6na69ZMgAUFtgkA2DHVt9yZYhVZUFnZUNskxW1qsHuM1CkE",
  "key38": "4RGn5QkD8r7myvVmmAo6FCdSLNmerUDdM9nt93Khmv1kXgtnebAPz6cpstqTJx7pkFZmf8RgvXrULkPfv7f5EUUT",
  "key39": "4wvYsYSWSr72a1WGqp5CjkFXAmu7cskAURdjxi8KtFqfFyFaffHqv8h4s2zm8U1QEKL8jgQHDptdiFt5Pkd1dBih",
  "key40": "3JzfZofY8zbdhBqwm3Po5DHbZHqJcrG1fiA9NPcJUGuVD5DQwTcigmgmj5e54iDnF4fUvj7ZSRhtTxDLVZZMQ8Su",
  "key41": "2YQGwJLbW7AghXQYxsVJfQXVt6bi83wDfgMRDbvupdT1iA3rJLrGr6HfjPAU569kSRnAnFJWgDMgV2EVA4gUbpff",
  "key42": "4WxYx4mJbEKusKjfWY6gk54hs7w3V7RKyLYvFY7x57A6dKtftz7RF2rgLFCjtczStMf3kTPkvzP8v48DzPGBH9sn",
  "key43": "4Swbv9L6uHU9vgWdt7pYbZ24n2Hnb2BkfGZPmCvuBoF1ewTUtSxidi4uUXKWA8rAJgBaYgSjucg6m4cVSzKubJbr",
  "key44": "7Ez2SCAagY4VjCjWzkB2GZCU8rZPpVYndpJDi4uiDJBPa4A3MFjahUbQFyWRaqwg2savUR4KS3AaSvLu1LFSdmr",
  "key45": "5XCtr2P2jASAZbkuYPF9P5gNt4hQSknze4FbMsjtdWzEmqukXugmAa3JF5HZNBPM8Zwsar1h2QJtmW4idJgPp6TU",
  "key46": "3pmCoxMdqVxzDjcZEFbdTyG5wyS5CwwQdyyC7YS7DF5hGrj81eoNQ7HuYApKWPsim1EwEu3it53935WWVbzALzNz"
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
