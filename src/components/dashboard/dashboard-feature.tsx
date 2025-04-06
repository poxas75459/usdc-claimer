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
    "3vyPxsPuxHKfDyR2nc5LPGSrVhvjpbtdCkmJCEsZUsWPNHESRPJPfz6eqzUP2Nsi1RtQoAmEFYeMHeYmHjM5Hr3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQD9Vnp2gDRYDVKZExDCtCacufu17fnKLQ4hCsFJRHp7tUTjnu8mpHoETQFwRgMpfgebB6cb2deQWoKwcuh8om6",
  "key1": "4GwHrbgwoeFCcbgFLBMp2V3VrZ2oGPY4ag69YwtXuuYRC6DKwnU5qBisfZeYSh7m5zMdapxEQmiq4Bp7eCKEoXS6",
  "key2": "65XokopzmEVZmhP7MaBhAQBCDGDzoWx7zZuJntDCDN2zTZKEcmkFaKm6CCPT7F7XV2EGXdLXrYJdE1KjTVCw6Dgh",
  "key3": "XXdqZgkgGWgV2oSHacGWD4Soq9hb6FGSsJLeFgAo5E9424B6KJZEjxPWfoynAXGJV5hVps8RT7cdXTLNTbt6q6x",
  "key4": "5Kp6Mo8YGYGy5GyjrqNbxc6uEznUTdrHN91ZckZyXb7GrAnyn6rrg8x5hCACpbBoejjfvmM5PMV1vTQaPC1Hn19k",
  "key5": "5vfMdYQf2A92VRjB2X4FrfLjvNUYpJu8if32KhbmVii66YFUCkf9Mqd8a6NSYALdiZ6WhEpK7UwLRsrciLeiRTdo",
  "key6": "4u7F46s5uQML1SH347xw4nPqgZnnD3NQeNhahYqVAd2TAvRZikKuDXcoBPx3s5uv3nEK6oGdKFRNg3oh6k6NZV4o",
  "key7": "2o39PzCGSwAVYw9CWzw9T3XmpNjwy8XxgE5GNKogFUXEGaCb2WaMhabWrHSEU3Hji1LU7E92uVXMXkGNmjefULPU",
  "key8": "3ANtZMJGiMoSuKznQ2GXRZTWMpp99rv64YPZkLuKULQ32xQSmfzfPPjpupgQY1r7xfXhRxxcGxREaJquFNL8uT8L",
  "key9": "462v4JpXWwF7wrVHMLxzVU2Q7jBDnn2DQX4gGfMM9dAYbB1i9tZ4c7gTNz69enFuuavYe8vgMcKMK5JEiNWDHvfR",
  "key10": "5Tmrkijk7VwJLKu6YVXWnxKqBC6gA3ya5jKUNasiky1rDyn2K4ZgV9eBL8LPMePvpZyQKGeeDJcNV7hcwXDobm3R",
  "key11": "3LA3WhqbgmSvsgBASGhkwKMf2h7cCcd2ynE3wJgCA7tq6SK7oPAqUDd8CfKTWKZwPYNRVCFvZxiftNu6HNWkLZWU",
  "key12": "2vuY7EwczAjYcLvX9Th1sLvkzosNckHXYxfor21u7BWHyvauACsp5DAEn3YUL5ifVPBMWKjhP8keEPLgwpYPgW9J",
  "key13": "25WhfoK78wSvyZCU3zLn8LAb9LCfC683iMcGtkcSh7ToerPbNpQpd1nzHVTaNEzCjSkebLrDjZPjXbkJHYvviDf6",
  "key14": "4ymBxiKWoARuPFKja8QQLVQnYhgGjFCBAhQ8hnXjgWEdt5n64gjiXQEHpadbxMPGFZ7ku5XTFTaYENC2yBACqr9N",
  "key15": "2zgS6uqwRs5HhRvMyvtntLh6UHSy9rUgvg5vWCN8uiFx1tyro7keJJCYrssj53SmoK8mVAP2mWPJyqXW3NR8YrRD",
  "key16": "QT1LHfUJsAqzVm5MxeMu6VdTbqiHc8n2RDjMtBLVeYmxEnBPqJF4kH8UQ196EX6PPt5iaqBfqSou9tu63mVN9Xn",
  "key17": "53bktmA3k9VcMvMkMxqSoWHMoyCkbPWTg8xYsDPDQu8KP5zeLza1mvv23mDYags2LnE2h5JydQeMMQt4efakju2h",
  "key18": "2Vg7o1e7gXkdr6vCBTZMzs3BJbQ1KmV9q4yKahh1QALA8s28RVXY9TZjx2D9BuHAzr15YyK89fHkZQgfGqH9PoCx",
  "key19": "2jLYnBDWgkqcmkdSgDtgA6NWkouJSZXM9vhCDsdtd7AER5GKSB1XVhgyJNwrZEVpdikKzWnb58uj9hbYhHE6ZuH7",
  "key20": "4LbugtLrncJd7876DMCwNKRwpdWEcYpHDbSLeo6o7V8yMFRSMjZgfiLnXke2GmLvEh9AQ4ihNqCEbdtrtTQqyFgx",
  "key21": "5rbkHz4gXKvyzeAjeJbAvMXqgpfEMCDWRtiYV37Ge5M3QbhoJXRCigMhfkwWmDByZoGttKTTnBWvkJYgH3Zr8dQ8",
  "key22": "FSSmwaLcEMGdK16b3gh7bWVm6hLDSebv5C7AtrU3mBqRzYHujijoMA9DrdPDDobQHAGNmtDFVe7UEztYg4pFf9n",
  "key23": "AfTk4ZyRDvd2zNoxbUWt6S4UAPUqVKADjwZ9c1a1Ztx5ZwpGtEFmG96w6ihPxVDALPNJLN6pfPSMvj6z4mrzkCX",
  "key24": "oYGTwyDYcpbh748dn21zmb5nJcxYGXZRToCd1Dijn9ZStNePTtKnha1FubQR7KFKCjcDhgRbgfpKTHsqavTg6uF",
  "key25": "bbhGvqtGR8vTBaCCHmhpHZeRJyzR6Y9H3Dq57Krawx9E1fLeERgs8GuBKSpRVG5wtZk3NmKGLZGqLWfe4uQcxrx",
  "key26": "3xqUDX4e2PnhXihquwwLfbf6NUDph8iGMEZ4m2C7xhNEWG8pD8QsN5s1aKJWKnwPQBCZdy8LLYa1UC4WZ8e2mRBB"
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
