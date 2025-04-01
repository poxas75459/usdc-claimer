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
    "5PKLtVusVb8cHVupLsFkTdNvntYRUScDQkgHPHZgkKXc6WGUwsLrqpfncBQwedtNZzm4CrWKJ1CzdjEYWdqGFYcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "461DH4QpYRXBjZRnPv2CiyftPZ882eNpVj3FzAAXiAkrg7jEDprWadjiKXAGkxWBZYhzVyE6H3wsYja75huCHJvr",
  "key1": "28wT8HAzHwb9iRdXJpTzve5unETW6Qusdc7Dg6HN3zaQBUHd8vZh7FSq8nm7T6vqCaySmsqS5uF8dQhSeNT6CEqc",
  "key2": "53BRgd3DCmqLeKVnif8WVu41FUn51Ug5rvzDfmaVRAHwNU37EsPu82CAVFLTu5krXdTX3ZWiUuM2srJQeBX9qYc7",
  "key3": "13xNkk7gryduZoCaaNXjysr1xJBuWRbPM4ix2JCro2MAJRCT3ZYStQuTam1NecmawVCbL3TsPsCppTWd2sHJ3AZ",
  "key4": "4WS6d5UA5UKyuiEfGoBbrCwWX5ypiGfV2CsuVJ99rgfhJzvhYtbY5HAJXtmujMo4tS4F1xTMoeuC1LXRH39KZmyv",
  "key5": "A6qekpP6SrMaQ7Bgz65wSxZn1StGe7D5pJjGTuK166vYXCzCz1qM7TAh7s9B5yHXrSWcPyFWiLvqdmQfzQqXqLn",
  "key6": "4eqE67FRvhwkGe6dLj2oV8uJhoNiYpCajo3gmfQAyAB4UcGt93g31WsaWU1qppYUZmLQeYyXp4hHKL38NRfdvt8M",
  "key7": "T2WdEL8HdMSohv7EYJm5tdz1yEmadaxcAGzZqzwbLU6433mBpiU8uYYtbVffHPd8CDpjp2gNHqMKQu7UMT6qXhm",
  "key8": "3AjM6EXw8SdHRAx6GmJc81WDwu4AA9WdJEQUZwAwnH4KjaSRZfj3bhj2VNZo5N8qJXjoirFdCKoHojLtgaJJTfrB",
  "key9": "5HwgocV8fHN8RdiXyQi1M8DYuPgm5W7FV5JkUhM9qL3eia8p9Z5rdRPWbvLgca6RBaoHx5s122nHhiK1Wj8FGHZY",
  "key10": "3AsX1yaKefTXGC3JJzSFcGwj6CyRFFP7G6TgAnzdNnh2w67PM5erzup7zMpcyWebJ13mKD3CJKzozY9d13Bpz4b3",
  "key11": "4FUZyXDhCHxRgi9JeE2yMe7yE4nXBa79KW69h6bsYgFb4Ed56kvBinhUjYNie3YpuUVJJT4RFTDfiCfvwp2ZRotf",
  "key12": "4VCMQzHfvX1ayTvGy9SG6c7A4zRWDkpzwWxZtQ9jx9uyXLyve8LJyjtgHC1fBKqALWWb3awQpfHnKeajTbLncqW",
  "key13": "4odUczMY2wn2XVTwfdtmsSKFDzGpBhwyEnUHFhx1Hpk34ooCrUSfF8MmVYuowv5KTmcngNg3JhSrDVcmaqVxaudV",
  "key14": "2zwB9CXQdWHqHmmjRDnkx3BXo3JQamRQVRB2bQGB3rfLRuSJErj3VCos3FxkKzTYrpSxznxhowqY4u5syDhExdhf",
  "key15": "3dhnEkBL4vRKKETSDLa539T9NbMuk2LWncTxZsGCVu7p2Y66z5ipoqr9TLKf72ZQWTP3webG64W54Xiue2NKTrp7",
  "key16": "3km57yr7rbmRDd3vyKnFFCyqBNCt6RpemjDgUyaSCLi3rVoycPYoWbjgp1gi5nCmLF2yRCQB9XsGBEpvJWTpDzYh",
  "key17": "2yQHv1Lpqu7ueugJAMDWVvQZNBAENHF1Q7JKGpz3wVq6hp9S1P87FTSYpmBaXKhZy89XxVW4kDzZXaaMFz1XBnDt",
  "key18": "324mEHEH36F5mYypVNYT3t5XBPJtiThA8U7PCg4uXCL8Jh4zzuR3xioQBntFiqyLh8vNcN1B13dfXDZxbMSXdbYH",
  "key19": "sD9PNRyCHkGDXJNfN9ZRtD56qZ7HnUwYNMRW9QsNBztVgfyqadZU3QDuor3AiTyHvx3AmX8M4cM56Q8p1HTmeaA",
  "key20": "43THRxJ5EeyR4w6tSsJfvrQ1eCBV2QxcT5ba17B9sfEeR8RSU75xn1n7BJjvYPWJAqGd4PtWVKfjsLzHADDFnRxy",
  "key21": "YEFT9yRVLyMCXA256RnPddkAvdqFPtj5x9BxQ5jUJNHGhrS1sSy6rKXfATfudz3q9jc2g45TdrcCuizPmy6hNkE",
  "key22": "4BjdrhyeThXuJDEWgLw5MRua4dHkmtNWvYF89VhGZid5mU2z4WUSNf6fAc8zUA22rk9wB6MXRv9WeY83NN9cj2Gt",
  "key23": "5wiMZhMxeaZ8Zagy12MHdDriwdcFPFW7KufQj9PsYJh2Aw6Jbtn7WVu4T4wPR4GnbosYhQ3vE6bDSWMMUpASya8A",
  "key24": "4bjhqaVjfYXPcSR6mH51EHfKdfUbhaNxw1tHzyZ1M7MXWeHC1SNJXGiyCmH5E9TfZNyHm4c2ycAwcgszhDHUJvWt",
  "key25": "49NovxCDLJhasYvgcpfVeZn8oyuXmEoLLK8iWYA9b1WUtkEbuvmpvJKkzxAUdfsyZWKNz3V9wFUjwd5kS4gU73eE",
  "key26": "UV4eMPkm2ihNC1sZxNGsQntBG2HZ5c4V5QhcjFzVMfvQNnnPqAT5R3Zx4QZRfuyRAC5sKp4GpSi41AwLaVJhHi4",
  "key27": "2hs6bgoph7mLgCeJkeEmETemqjWWGt9eR8a2SAS6Au3j7qwmcXqtXnSpnPx2nXLRytkq4fVa2aZgziFU7chxFPqt",
  "key28": "2njSjDb6Brrk1NvUNcddsXuAxAymFAMPZwW8vLGiTPuE3aZ9c5qo1JJKg68DBakz97ZUne4hDFjkbkSZXJAMbyFF",
  "key29": "4Hg42nwKNSeAVk92zWFL866v8UgWeNPVMZvd9hHtA3NsqeqD2QZFwTKehNKmHowUgke6a5Vqb18ooo1N7zDzWQdk",
  "key30": "Tqq1DuNuRPBey9NRN6B5veTqSQe3i1mvBXQj8JHD38LSP4uiiJUZnrx12NQJVLznvkCRXdhx5jxwQfo1o9PFD5x",
  "key31": "C4xRXznQLVuSCo4bHWqumLgkbsg7UwBVLpss43xL94KxtTv2J8NBhMjjt3Jx7E4Bw7zwrgH8qUPbKvfD5mdDQZm",
  "key32": "4N3QLi6BhxiUs4qMWMnXBsN8ePTHUWn44EPEgLUpefHmgQguVqqLELni5WQ8s2z77A6TfXigmZwzb6ui62k1qJEb",
  "key33": "3LugpMdiQn4jDXJsMKn8UmwbkfCLTA3j8zM3YJPAyZBKo1MFUqEutxGRY4bs75c6SWsg2L6sXm6EreW6xs8tJND6",
  "key34": "5XNeLWjheA7G7jz3B7rtWTJbjGNXLxixdL8vNrW6fLpSJHQ1FrLqX5DZuJe3htNThiA588iT7sCdtEi8w71MEcuQ",
  "key35": "326f9X935qAbiHK2HKnZo2KZx3yDmM7zweEYrsrUtaSr6nsnFaw4hWkDtoWDpFGTLqXtTb4vfBHvwbV3yNKSKSDQ",
  "key36": "tzX22cR3P57SyefXCcQpWDr9URHgr5WAnYEdPFfnRr4QVzfMCS9tx35tHGmxTPeKfC5XzGXqNmCrQNjCMMtR5yJ"
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
