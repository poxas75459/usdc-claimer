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
    "2s4K6YNt69WgKiSaSjiUDzzMJuEeJgCmGLYBKeXxHHJCUs23JRkmUwz6t12NQxMTQ9tcHYf8GrHxiXzpf35kZNZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TEjJNYKUUWF9y3KEA8pkJrLXrd8zePo7KLCd2mRBpUNai1dYAw2AMbJ4uVgTxsHiz9XEBxWf81GAv5v7v5CT49E",
  "key1": "3ryCCa5UZDZdqqb6fUDyhVRt8TeYnxzSBAiaMj3wePtRiunVAPUcFQ8AKtx3WuwVbk9X7giSYowbezJpa7vknenk",
  "key2": "2ozTYCEAup3nA9aFUZYR5wW819J97uw3kzDHaLM18QeQrYrEctBoBWg1VpCdTKjMyZ7huD2HzQ1CsmZ1XBoMBPh6",
  "key3": "2FSciGzsn7EhZ7vU5MrtZSaSNH83uwuXSBDbbNono2hZsDfPcbviBw3m1SNQDnoSiwGEAbXDgPARwqGMZ4rp3Pxx",
  "key4": "YNttBYfthWsLvbR7DmwErb1tdKD6CyS7PFyAuSMhxWsswWbiHMDRgk1HQYNhTSCbTW5mY3kjg9d5vo7fCN4zwy5",
  "key5": "5JUNaLQvFuPxsR4DFfsdzhxPmMimPhyYKUoc3hqAzCUqxQCmTotyQjvcVRzvVPotEjBtPgAD1oMm9eymmbqYGcVY",
  "key6": "2txeJLjxKQdBBPF4zvWrghttyQ1XuWnxSRRg6oHzZFQrBNJcMmC77PHpyLziVVtpWyEbsMm5y6Q5oXDaHZCT2VVY",
  "key7": "5FycVthPzXVEbJ7Dpv1gHqagKWTJm3CZs5dPqTAuzpwPz7L9cc6skJhXzcg8QuE7Bvn5yPQqUb8hjBdvuEJE1b3B",
  "key8": "4r1h8KC6uhxWuEywYKVHNxPEkbyAgNjqVJpkmiXNCyL1mXF3ZXGez9jTJ5HAa3MPfyW6m5iNQwQ396G3XPBrDkZU",
  "key9": "29Ur9Qt5EtmRUp1TfDQGp1XiasqYyDXL6WC7HhWWuLxJYb1r48JYMG4C2JLQgzz9UFe2HJfEovnKizZf8eB3vK2j",
  "key10": "2sRvJoy1LD36VN19vudDnrpwPamjd7gjKdjDDWtrYz2FuW36zwVYGnRNFGy8Jvu3h4vzrz7KtEuzjAsv6WQu8jw2",
  "key11": "42fFWrjHQsWAAsSSN84WPW3XadCHY97nMHmbesQ1jv5dp3PyQAdMqDE1ynC1gw1KdMbcycqDkVfiycZRne36aTQK",
  "key12": "5eVip1pUo1PY82BsQu4xnsqdysoreSdMbcZkUKgnF4QEhyecvN99WBF1aJa4ahpwFSLy2gUdmiZNbGyjJi4CRpqv",
  "key13": "3Ywg4mBH3dXR99CcxGwN6a3tjuJ17wLdwG6x9FEmK9rqHyp4BtvAdehqEruBhD29jVSzKoHvzVnHGnw5pJxEkYsM",
  "key14": "3358mcgbQaJdE6rdCnfzjJxar9NnZnCdQ1DvWn1f1sYPCdezo29Wa4B6J6LL3LebubwmXyivjwNXUyJSbhLXGnxa",
  "key15": "JFKTQA5UEG4ujFrCRn3a1jj13CzWtnbyUixL6TJpCMAws6b268hubTCGBNT3W2RyQ9ULZ5wj1oH3aKb8j39UuXi",
  "key16": "2tJA3paiDF8dr3CukAAX2rengLJgAkQ5jp9cwEwGgh7Q88N2dU8ZwgzrH1RrPBrLphGpD8WJPY8SM8JnYtXxFLdg",
  "key17": "nZ7gnGGMm6vb4wosZhXucbeAofqtzLWjHMMBcrY8kcU18KQwYBZ5YXGo1eiWTqNPj85hZYn955uCcGbrtaQj2uy",
  "key18": "3Q4ovQY3aeiqSomFhwCS2yhhHR7FZExFnfPW2QiW6wY3BFoD3ZYoFgptq4yNUCzGcbGNwwniwMnFvKvV69FaXqSA",
  "key19": "5pESthSYnhvSidFGydYGn8Fq8vLSWZEWkty6u7PeBDDHDHwwRCqbcC4LSJGmjqVKpa4iBJKWc6DU7FqfVZZYo8wh",
  "key20": "4xPStBY5yKtFwfeLwUPapWt8mVqti721DCHBvZyMfDBopRRRWw8uumoBxMCAdtehdmde6QQ6WR6mSqJp1pcnUnHU",
  "key21": "2gBfMrCk5F5vCBP837EFjptFjheAJKmMwspM8BgsYrkjWyx9bdGn2uztQ2coNnwHju1c7QBDkRMcLAYnSfG46f7j",
  "key22": "5eQKoUrxdYKjTZNiUGPThk6DmrspkzjfPQYDgv4yQKzPs1kowXVikPSbZ7FB3HujAAEJjem4p6M7YvvwrKC55Srb",
  "key23": "2kvtzr12xo4LwGR3ZmK8BaxxKgjgX82SKbjmZQRatwDiSGAfd6hBbo5Ny6eTqg18buFHGAHHUuB9UkNWYJKMwRgc",
  "key24": "5hVW1BpSanJM1CfqBuLoQ6sHEeT85NRL1kCRrLCDxt39nTARubkkoHSB32Wr41VVGQitDVLkrXAbQ7iw7sQ4TZ4j",
  "key25": "4XcNe91gPsz57KKjmprMM4kbGdXDhuYYH1HCQ43t2QftdcW6KjoNN11EFFXaFMCoTBzEcL2uc5TKo7WwNTzGzeoe",
  "key26": "3jWK5xCXcaNXg88uZcQQMNKxVnMSNfenbZ2Nf6D51qv5odwrdhy2A25YccH346eYC4AuSXDeHjnC4zqcEg76D1s9",
  "key27": "5M5oyLYV4zz3RvR5J2Qcy5k1DnCHErFr1mPaeHVJ3Tq8JK1ojj7abHGun9cQBx1Ybi1fCcK4cxjB17KUXzaQPpuW",
  "key28": "c78HZEXDe4D8kMnf4sGRPtoRu8pfvLrDbNgBReB6MeZMGMY7Xsrvix4o4aGNffxwnxGgWUWWShVwjiW7yUucVFD",
  "key29": "5RCAtRsutmErEH3kSFz7Y2SQqqq6aWxu6tDmtouRSj7XRFJ8u3zfAPQT7y3QY84vBZUhn1emhryzJcH5GgcHWT5n",
  "key30": "4fxcEZshBuYonPoAdPbQWHXGXALq9fWvuxLSbvMBKLSbmCEyb1fSfthtqWzhhvkWV1JRXjZReAxcpHtBQHzEDvnH",
  "key31": "5ziLFghigbJCtxpqxDi8xdTHV4ocnHHtacerR8qJUKcAr8unoGTSSFoPHVjgbSumGmGzfHE8gi6t8Luw4YVWFKSU",
  "key32": "FCekkc9YBtxVBa5vav3sriaHtTiLqxBs2BgMAec3RxyWW1h5gP2BZhwfaYouoRXjfrC4Up5VV8uMeX4sigiiAEV",
  "key33": "3HWbeMVbBYf5T5iWP1YA2RPEmoPwHrZFiAVYyHLvnqw8LzuLDknrwzUN1oq4CgqoBPth9Qn3c9qcDrFgB82iQsSQ",
  "key34": "28xUVnynK2RGZe3tjcNkivW6d9dBiXHCtcAPXnK5mJuKjJAvqREsP4aVGpHJFuLq4h3ZxAHZfTGk4RgBExbutbCQ",
  "key35": "2YJtziqwYve8EJAgpVdstHR8ejZiWRJNPcnCQqSH7ftz4WzQTJvgV44Rpo3o7KstWrWqgVhYcjUCU3A5ED9e3zra",
  "key36": "4yR2zevByuSjbiD9egsb5L6FgyX7mFst8D3UGtGnT9y9k97sH7JnPNgQ6xBMj7ioFoedxeRFURnSVNEwRbG3ueJZ",
  "key37": "5TrUF5mTZK6jqCeWjcbAmkP13Y7F2qRaUSFXS47M692ou6qUmKkXkEzqQ5oSQcbyJLKDjsxoDFwwN9cTXGLAsNE7",
  "key38": "3hBP91PCG7NTaH7y1tct2pnSHsbz2zDJ7gnmWPKNV7GTDuZAZ1m2H2PDKu8ps9e1pvb2NwLaiK7tJx9LYJtNL4TX",
  "key39": "4TFshmjCYNztfCgUxjAoeTjn3YaDmhhhM3FbmDPZyZaeJxnUixYj51i57rQSn3bvtrtVoEPoHgCASLNhiMVX8Rsr",
  "key40": "3gY93nDMKbLcDQPRvwH32izt5nxtTRtbG9xymHeYJp5hzrzump6k1djQahgadMVZdkSkFXPE6XbobZXkz2gxNNXs"
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
