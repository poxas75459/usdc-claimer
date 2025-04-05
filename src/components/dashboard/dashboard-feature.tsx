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
    "3uRTR8AZpQXwPJ2Udu4en53ALBqNr6HkvwLKFXEZt3E2AVfX3LXysPPQVcc111dPmhcEVj63TCRKh2PpsV6rxVQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLc9JW529RL9UtoyXmCEM2CJkdMa8moXmLFL7qEN2NPvkZ5dCrRkHUuK6oNzwhLmXZw7ukW7znvNFFFK45TNuKg",
  "key1": "4ZfYz2xzWWvb11RsTdgjU1fMNLGnNcpZZMK1E74YxKhriVJsWuhjQZne2eidX4L8ntanSs5efmXdWVBcCF5ETMDu",
  "key2": "3z14HaoeLn1q38KUfAiDBJxEJCFcncREtkkykTHKNrPwRtqKc7SwD7iWwJni69ZUvVrAibtNSzicdicyeWMKmKHd",
  "key3": "4PZ2AnUnvKfBmon5bLs6eW1ZtDqrrsf64gKUbmE1vVSq2w5J57DoFU9oW171SZp8dQN6yNr97dEFvUrbsoCwwtRT",
  "key4": "4G7jqXeSnNvqczr8jbuGyUBVJxFiJWDfn3dDJYqmJL6dgm1ANy9gfDesJHoMZi1mHfgGAeVVJM9X2e2Gzymgd8Yq",
  "key5": "DdoqTKBuAHkkJ4DcSxCCmFaPD5bo5pYXGZKKktyJTV2UzEnoenEVLEr1PFSMbParbVRCXPebcQ7pBLC1yNffMmv",
  "key6": "39RKQXH8c8ujs997gVnfpKQZy2SFmYZRdW781WMZm6U6wZuXzqDDFyuZtrvGDo7XyPQkAXMuurRLAVS6Dskh62q5",
  "key7": "5t55ZUoPbSDwHDDFGK4R9wWvQmQ1hk4fbcMQvxp6Fo6mKm1xLCif5mFppbvzNcphTgJeUNyMW2XyZAcCZ7a8zkUm",
  "key8": "4FR4A9rgpXvupvecvQnNyeUueT474yeb9fyfhxE57wUzJkVLnRRAZJQ2hTe8t6YcaXMzDbdaPAwR7h3E89fPR8C9",
  "key9": "v8VngGUqqYPQxVpwGqw5fg3NBw4wbzFZ5CexEWxBfzpfPVK8FbAUjaqCQRnJFKJjMsut2eiaCBTNTVf9d1KGbQG",
  "key10": "2sBZBQJMZ7WfkT9TZ2UM1RNzBcxYbpTBRZALtACXXkAf2d17tSY4eqfKZw4JjPHTd5pT5NAevdJNnF2NMFumpucP",
  "key11": "vdceagb5jRXAvcuq5wJGywjRMXQN19KjCsiReexfoKBcN6yUJdDuewN5yKg74s5ZhAwmMJQ287Ht2CuphtiF4Be",
  "key12": "2fbbYc9aUi9LD788V3zU9srZupTkm21LHvGbTkDwmDsrB4Fmy9u31CzcfbbS1AR2e5uN8gij1Ghh2wiYhUXwfvxV",
  "key13": "yEVcWAcVRtMPYsw7zqWzaKgwMiaBZ2CAJRhvNrC25Cxg91EcvF3BUZUqLd4mkqFNSxm7Cbrj62uMJkjXQ3gquME",
  "key14": "WmLwnZTLY2oqCXnApaNAZRV5j9jPGHWXjtkvXZcQPFruCDGDx3BhxTVFDdn5QKeYMfbXiDD4UJpVyBdCPJYBup1",
  "key15": "DK3FTMyJY885hCqcXe2GJqhBhFtEHuCrdbnkMCMQrDWCEggbvDrxDSrybnQvRGFR9kwWTjYDvFnHQo6Wx6dAfbH",
  "key16": "54d1Uxckkz8cFPR5fjaJibzWtSt1f72CospjSTmd9Av6WaCGaNTZ8ZSwMGNFWjajyrjVyCAP6unPrMyLCyt1gA9g",
  "key17": "46k4oRV1GjrEnGUUgNNPjYCAJGSbMsW3eGvvWZpJGHUgaH1Kf55o8zWUWav9WatbZcmShYfuJMuNnCsG1R3SUvf9",
  "key18": "4tmDn2rGgwft4MsUzW49oo4Cb1PDZjEFLh4gCCyytKpLA9AvkWfWAQb76NPHNVYXJ71eCTcvicz7HBuafbhYwVMP",
  "key19": "2PpKqiJGc7rVDg9GhynX2o7wCVdjEnWTDGW4qrbHmAbM8kTYWMCQvsTraSB3KQiyhd6g5R1xJzhsZaScG69W99fX",
  "key20": "4j4DsQyayMd4rEApAhRXZ3AibgBHnQE3fmdvsuA8Y9oiWwPWgmvoE7JGcdi6HCdqpJY1o15mnDqdrbS8SkzzaZKk",
  "key21": "4o4dNwkVFxiLzP1dDzVXmrpQHpLuKLoZ1cre34beNh9uk7xFHitXyGHBPuHbeHAfSGvbUJYpMBqvo8cCnaYuxZ8m",
  "key22": "3tV3CWtyYoEM4FuMRfDaJGQbv4P2SWQQjtBLdib93ttaqgvLp5ZHLVQ4gysXZQu64vT2prkNrNZTgPvRALLCMEeR",
  "key23": "4UEH1LAQJEXYAdigVpKP5Q8NSe5igo4vpoFDX8VsnEu45njAevm5nCkByP3xG1pLojkxFAx9MrFRefwqaQCiBxm",
  "key24": "3FNCvrwu4h3qgitGawGCaNNtPoo72LzwfNxzXT34c51Tb557wYGqXfNycEfgjsy9HjHZF7g1Led1Uaxy6Exnh2bN",
  "key25": "43QUyhrtYBUVJT3K6Ne9ZbQMQdGJJZ7dwaii1NroeVqvxoHc9bzBuLYnCqepYLtRrFANGVfTFXuTWtdTgE1XSq9z",
  "key26": "2uZpzNtYpy8eo3dM7aDtHBn1KEQEnBr5kawTMyo7eLqe98BZCyCru2q8yGLa9d9VvthafLnDtxwahDtbMRdQWpz5",
  "key27": "CfjgoHsjyAiz6QhfZgNTjMmvAVKwsFNDLiYRNi6dq7V2yMUzTHvbqxHpkHF1e3izJstdcWVuLYdSdkfcgtaKxxh",
  "key28": "3AtB5b1oHtDsjUbwjyqHHd61pJvTieo7awArb8a7aDrTu6j4sT3RdDMB7QTayUBtGBaLf4zHa98jCHg5jEuHMHsP",
  "key29": "5QUeL73CjQfSbZaTWgATZ3GMAvSwViyAUL3nMT8dxg2Cqa21pCXKcjcUodwJMRJQDYiAHnWm8x3JUawvvtL9q1ym",
  "key30": "5gKjju7sdw96LBNb43KpW9zBjFm4wgxoYRTvqmLDaXba4XMwZuUaSEmDv8XzAmGHu9g5T34tVV4barvw7k4Vzfx1",
  "key31": "2BWj8yCfzvGVZ3HPDdkwBw9ShfA3URYgCc2PNFNzpdazjjnC5LpbXipnymJNYsoRBfj4cVGCy4rjbVzhgkMMjhyT",
  "key32": "2eYYuAMHu6tqiezryBDmit8Pa21knVSiihUkPcvWLnAemsyN81xP1gpmnvjsiiCkt9Xf5F4DtJyhbStMWbkQKqq8",
  "key33": "6YcT3XjjzbG94aeNMR5aY5Ln6pjZwsNdPRVTKjpwh4LipkJZWvgwVnQ5qaFL61JjKbuRUtreEFKPZtrtrD1wXsA",
  "key34": "3F3maYDmjZAmcXZFXLtAKJ2nsiKbjrVQVQvnAjpRqQB3ved8KDX25VNf1Pdh5jZxGZYZBYdWcMNRqoo5LFJNexDE",
  "key35": "3DD1EH2CLkg3wvLijwrPayw8YSRYoVnanqdufpGNTnMGstSX96zhmakb4mEHtEvSrJFodRAxbGppVwQz3kZ7U2id",
  "key36": "4sKupKRBhsFdELKsGAosoRhwA1FnpMbXZHrUnaFD9qLuYd1RAiT4kxAra57KseNWMirm3aPjvrhCWczx8GJ6PS16",
  "key37": "5bK4p3tUUwSEFNwmPhG8QxzAGFPd49e34YtCoMdbxHRADe5wSqyqK6KbSfw4cnk1BQW8xBFpSoi3f2gpR8Wed6jn"
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
