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
    "3663YTmpXcVZwXiZoWgaortD2e1axZG57GG9pfgEx8CqrrHUHxs41e3BJ2YaYBHHKwkVzg9Youg9rN15ARX7faUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592ZWjhhkyqSrmPRBjo9MrUCvCHp9zXS6WQDz38cPvYXsJQEeQEZdSqJZ7kYDeyxt1jLvNH3gqbqcR1cPeLafmc4",
  "key1": "5PVnFSwYRqf5SawR5CheeyELBMvaeiuCeSGmPjQS8g4iCNVYausv113iSBBx8ZLaTTmYeuV5R3euQuzuh4tuQs8Q",
  "key2": "5yE4fEiQ8hHD59qccSwFFzfyMwXbZBsn9GAkhyfCpzuf8n6gNic7EejX6su74bVa2QwdhpU9N4A3Xx6eeB9VhrkP",
  "key3": "qfNVwj33Kq2Aoo4fy4TVExZpobr6YmTuTpqivWrrWogiUYRn75gUWYb64uApWL99wmPWHhwpRqGSKfNQk15KWHf",
  "key4": "2k3xcsKtbe7dmHTM1p9gtGP2Ncano4AJRZDie7fcbqykxHdCEo82u1J7qiqoCtFZTu5jun8ynQaogiF9pmxWVYbp",
  "key5": "5fGnn5VpawWUmy5d8ouej14Nz7jrsrYAFtt7J6snqnS3tTWcThKEUrgeZLfMPvL27tASbDvhJozY1vtqDxeep9uz",
  "key6": "5priewbreYprBeSfx8B1zWLuhbeyiug4e6UM8JabGS8gJrESoWLDFJmxhv6UQA3GfQ8Ja9NWP3u6S3QPH51bbuVm",
  "key7": "3HqQh3kMuvjBbq52saAhsxXpWjshxv7GnYtd8NrM3pYoJK8kEXQFT8hCwCmBeFgjTbbRw8Mj1QLXFu6vThzjwfUG",
  "key8": "48aeAioj45FVVwgdf2Jo5nntPQrfwZMSqxpehPEE93USQyzvRmMJivaUV151H4K553C2cD4MbMNYf8gTziL3eY6n",
  "key9": "2qcC93XBMFnMV8rGb9FM2dmAiqYHbVfNxrafe4sorBCJ21LAKS5aXRDSg38dtJeWKetiswrSeDqq7tUuasRzkBfh",
  "key10": "2sQGzG5gpvKd4hDycZfJegArdVAhxFKTJdDL985EVRtfEFYbadzFA6RzSaZfMdNo2LrzDhCAGarGobxVtuPiioWc",
  "key11": "dNw5BfPPeZd6szfrn9BL4Po1ty4nSs7pu9EZT2kDJ16KqAin71gYUt91drsU6fK7Tz9gMeTGSPx2XBoz6UE9q2E",
  "key12": "Rdb1kaEiCx73jwNtE5wEtCyRV1tAnv7oVx7aAgA7GupfJwQxwNCH8HVf24rHurg6DL3kRCrseZzaZ1P2NtU9sfv",
  "key13": "3BxLCcacqqKNoCpbfPBYsehRnu8DKc8ZUyZURFnb9tvfU6GL6pxXJEyyBLAEmzFHyACv7TFR6JtG4CDiPSJcgvxp",
  "key14": "3jrgdYKDvXoWyMTKdmMyUmMrWMfjt2qr1uSgDApVTmVRsx1snoGaEAaA1rVZuksX4Axed8Zcv2PkEYjjMPZJCtXx",
  "key15": "3iyUv7jyrsPo1WHSXKGJ9mUanfDGxpyyEQAGm6tB1GeGsXYFn8EjP59JsHWBhMguJ9MtV1Kr89CXfFvi6FbYRnZa",
  "key16": "2sTWeJF4Uv6y57q97hFTcgwAxbvQ3MN2rEN85XGcs92gXNLqzhdyXcpYnHGgKdpA8SQjBAiBGmpPJJrEoJhBNCFB",
  "key17": "2H1u8YeJktqvASk3S61fZLTrmzhwea58w9ADyj58krooo5LN5LoZRjftL6e3HAnDajy4mBXuGQ7FDeWeUwmSKXWq",
  "key18": "5DSg92uwEEsWqCaxRsT5bV4CxFjK134o7uHPpvo5dUqE3fyoDKZwjZbwBJV2H6KUtjnTGrduJzWx8jc6eXbkMNSD",
  "key19": "5v3Juwid3wVu92fRNuLZzywg8ciGqWTEpScXTXn8GpxLSBa97LERWfzDxvEp1pEo3914i7T9qM4CfZEgSy8s4Pf8",
  "key20": "EGm3dmaWaFW1EBfAuCZr5d29syHGvWXYT64suW1o1M6jY1M2SnrWhFepXrRqVxrLyCFbSDMpGPMWnRB8Gi556TG",
  "key21": "yqFGMLydVskpYNjbWEfupd8KMVU9J2JG8BEgGa6UTnzeiE75R2jdJ2MdbMYMCN1KJpsQLauNZsJoFDG7UQ3xURF",
  "key22": "5gXwttX2JWgBFfDRVDRYF5yvTtg5PUEnczjcFg2w6ThjiScSYQ6UYGmJR3w2piHhUbK7t4RZdo5okRCmtiBPW2vS",
  "key23": "4dWqFfXKR8xcZEKRsydrWLqE1HYsHhscLW2JvzkwK4xA7QRg2TyYUczAYb7cjdxosM1kfgECvTBmW4agTMfdHdXt",
  "key24": "2gDCws3RW1ucQW4YhmKvMWPGfufXCwqeBHTDqRj97oof7d3p1xK74U1NRd3dyumhRYMtRnhwqgDeeD4EzDAdqkg3",
  "key25": "pgFyYiAjt4dGWuyydgvt7gyUJbAEnfTx6n41kDpbKJpwcbHMXumaj4TGpEcWmWFFWo4AA3GTcaiDbYMSBCKoUah",
  "key26": "4VK5GtjHNXYocpKuQmPD4RioxgpbcE1y5AeyQnwM1wS4B2k9f4gmJwDpTqRXTXNDT7ymVpK1cUCLT4ECf3L39MK3",
  "key27": "DL3LBWAiQFRKYC2f5sLDGwhCFuRZbYY79TYk15z99NTitc7FZaP62dsamvyayyQHiGLekuMait1jakuTv8vDfG2",
  "key28": "hpTFUXX7K59RgiyJMoSexdnrn3ksXHz4vr5zr7pMvPbN4Ce5yYTUdTuSMes8qXGvhHTEEv8sN53m7pZZ4VFeXtc",
  "key29": "3zZ7N12eTHPEN7RED8mMpuzZMhPEJVRHAbJawroLqVa1Vc2JjqeNb7qC1rAUssB9NFMvMEiHgNBu56vCEytuJsNM",
  "key30": "3eY8UGiMzNuPKUXZtxn1T4HJXRNbEUqfZqKN6dLkZPUkqhhNPefA7cGNxYpxg3WUZVnfgEaAzZi4h2rHMBGTGz7m",
  "key31": "gHTAkH3iS3gSikLYE3BPnAbLPJpYy8F7UjhrYDSkUdnTp9b8cxvzcxX6z18ES5ZrT3wUGdqwnWDFVr3hfhpZuh1",
  "key32": "5PAcyFGc5mXfg8MUmkBTJNGWrXxF8NbQi97xquoMGBEw9dTRfbvZrup2uuTAfpryniQRxpdZ1VLtmTBCL6vSDWQu",
  "key33": "2rMPr8EZ5JhYiyngZE7pxuckcFsQnbnLd5RmgVHbn3HpSZAs7t82NUQzXcoMYDybgyU33gPnAVa5XinmCNd3rsyd",
  "key34": "5jP3N4g2hwsa8nNV6TB5413VJBVDe4VDEfGpTEsuYKM58WB3x85HYqffrRmwQvnxrjV32shrwehfsx59GdbfwHkZ",
  "key35": "4FK7UPeK2eQd5W85zjVu4wWJXvm9ZqJyrwqpQjg8cfJJdKtiEKzGJk4eDrhQhfx8AjrN258tD6rVtrXD1WgCxMWd",
  "key36": "3SWoXwm5QGDkFCDoVXYWjUeNEMkXHF6VFLq3fYn38XzmLdttjoJDuvv6DZdYxm1ZL5FwjSXJ6GPBvsks4hYEm9Zp",
  "key37": "3gP863GxhBehpbYiMDAEopSBd8XfRKCaUVLuuwB8LV3LoDE3kHJTPip7BGjnDKA3WpLJusW2mqhgvv2HXRNSGZBy",
  "key38": "3byBU257zcYZsqdtvqEJCMJJ8BzYoeqVjKYsMMA8QZFHh5mPw6EY2wAth9AKTMCumBAcnQ2gtADJvzkMSw1SjRC",
  "key39": "31QDw3a68ywwCp9fCehpRvBGpLuTj4ZYJPE1ov6jUtBZaef5HfU77ySDM3hDkEVERLvsZFvE1HnxoyuVNf8xnmah",
  "key40": "3YTUQUuXvLsbXpfLipqLhxHiTm7pUVxJkFR7ycq5Z2NG2idwRe756mpzbFHkEbCcU4A4XKBXtXDtLQdcxFDJXs3W",
  "key41": "65KQEDcfyuRQFGHbbtj1EnLtR8ah4zs2SMcfX8bWCuhwnwQrzLmb9HisALd3bfAoZ3xPLoTYTwqMovQmU5gytpXU",
  "key42": "3gjcPNCpKrFdYBiKFNmBMrEyUpdLKRHoLDEjfTLHaNPT1XKEPkFVWjMRX84VU4SJyvxpNUVnmZNEn9shuobdBhXg"
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
