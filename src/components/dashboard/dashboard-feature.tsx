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
    "7Ac6aKptauubAF4uWSCGeeEBbfChCMiwg9PwUfjayfuZJMYNfxxcSy1F19i3mL2psfrrZNdHoXYQTH72ddspGa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLZ96SHpRYPbpVeGpHy5nCB8cYzqHb6tUD46DVAZ9dAoQrzzRqbeezmp3tibZYKysTyZC86CziddrUYaZdbu74x",
  "key1": "4EXFf3dHsFbQ16e7PrVe4gfbtHsFyeQ7isWEb8J8MT73ptRTbn4xDv146A4ybVwXsQM2DJip81nhWTbBRD7Qcy2F",
  "key2": "B4BzMDpHCzkvAKbFiLWGkpKMFekAL6CDqFknrr6TwgoQHirT86QYyPQrRkJ6B6WZiu5jYhNmyHGY33nX5v7diUr",
  "key3": "4bCND9EzjHWHpKAr7ssiErovCdzRpGkscLSrxRXXVTwjn9GYQi5CELHmoqH1g7Z7CL3eitovk5JeehymXzVbJ6kf",
  "key4": "5KjALSXsjuBbrrGj4dpqjEiM5w561vTE8BeU9pnuYzPZSJiJy44jpCtr1mk3hqvzL5aHWhRNtPooqtBg7L7JHQ3n",
  "key5": "3RhKk1bW2ZCpKsanDV1cKDDCCm3acLwQPbhw5HJG4txjVEPEPL4YA1RV38ULjFAuyKsqSBbaTe4jjbg514r3bpPx",
  "key6": "43AX5hNT7vKMf8VjaqtNweLHJLie8kN6xbzRL96EzherUjGWCbh5Zi5h5qrLJ4VWastQY4K9pvyojkxA6nuasaET",
  "key7": "5gQSxdw7WQG12D4tv1WvJZXDVvDGWzGefEky4Sd2cx4qDNZ8yjWqnt35WtQfn719P3KdFYLA92DpMSfRTcpeeLa7",
  "key8": "3X5sp6kdVb6vy1xVkKd3N4fwx9Fkfuynu3j2iLxN4WuRxwPVj1LPsretrssuB4X1pUK72BqxenKqWLqKcr5FDTTF",
  "key9": "3PtXeN3Dm8hVVCEqLX3UbXPJgiSydh9rbH72xGX2MLGCZiZap9HNZWjk3rBzcC3Y2baurauCKTf3jYR5BLSEbEm4",
  "key10": "41Gr9tuDBWdPbJDR76yCVwMpryCbegxbncoLwgxeNEWvL2xS1zN9RVmSc2ACb8HtXVDbn4fXXwzMbhUQMDgAASvM",
  "key11": "4hW2f4QasR4bMktGCMwyUp3U9ZW7fJLFJgJQrTw4zbaGFcirPAYa8rSteqEBvsdKx5m9tL2rLJDM2TeRM3kC47ht",
  "key12": "x7S8VfxismGA8Av2YVMau492tuikKSEmV685UrNPGmP5MdXijAxDkRJfm5kVqu2Yi7soRRoqnvwk51SqiXE1C5n",
  "key13": "mZCEEZr4GdAco5Bdun7hsZcAe2dAjxYFeyRoXQUrk7HDsHZ4t7rCaX5sQKBA6BQxdhTTNvySJnJRK3HSJV31Y6f",
  "key14": "5w17JLr4uHjnqDm6jcKXjfACtSg7S2T2ZNj9HVkRuyNtrqKxbL6VXj4NKSLSUr6HHCoduRUHADdWjj5wrokSK5XR",
  "key15": "9386eRtJ1BcKzfjDFoH5L8oWKsqkbuWmNdCbA7JXC77SBeXFEdjknzEeVWgnFg4oxEwPWenMN1QKXjyBxR6q1Go",
  "key16": "2NVj2ZT4eRPS9oUw95ye7p57UqWUr8AUZ24rkuWmrdKtyLUCpNwqvxDUN2q6yfMN8MEP6MiuLhMH9HPPpxisBt9x",
  "key17": "4Pq5eCoNxuRbADXzUsmTZRGxBT2osqxyEiQgPprbiVWQQHQsVrb3iMv9g8pFtmAvnYa8u254y6xd4HB8bXsVHvhF",
  "key18": "5tAN6j5UXqHC2vLTr2SMxsTRL1tod1xkQg6HNUd8n1SiC7YLRZ4oLX5WxDDTfiCEF5nhmLoxV75soho5HRwn1751",
  "key19": "2shr39ziT4QKqdLb8Uc5zskqonTtSEencbYWvLkLHXc238tEztyWWTGqijTwPkeoXFkH1Meyd9tmqafXNnYipoHG",
  "key20": "nXcZJsBzu4w7DFrVePT4rACgSY9FkCERPegbA8DmpaeCdYJxkgyRpW1ojj1m1LvuEi7dzEu8MQ6CNvkse61RfYS",
  "key21": "2AVXkZi4RYN52BRUhbt5BLyFftFX6CzYZTuY2VwrKmkWZSRM1V2GTURG4CwX737tqgc1uoXcAB2NoTHK82nVnqpD",
  "key22": "Sdju6BBbzxPM1dH7yTBJrbieu5UEWfzCygZWvNMyQVKs31zw5vNon1rATM6aa8XYuZrFUueWPCgtKTse32XqYLu",
  "key23": "xeE39wiW1biqxMngDB7VxCd79CNJ71aTfCbG1XoPGMY2DsjnNYePFwQ4qcAao5cjZCjvfJPTrKYJ3FcD78bBbB3",
  "key24": "2x6ustiUn2ehpEq5qgYpBEEzonNqLiiZ3UCdfciH79AjRpX8DA5SPE5HtDyhLTeZY8VK4LcPAABWRytj5TUndTwd",
  "key25": "3J9bdEWEVyc5pM2fE4pmjiNNuqF5ijQkmo4RoPKtMCNjfVkLb7TVZCnPbibz6DMyMKXnJficmhG7nhKhikXmsASV",
  "key26": "3QyBinhXAYmunT7vKNA9qHjf1k6y5RoDXjw7Tbum6vjLxhAZxhMcneyegSAwqg8VnnXjVF86a22akWNXrDCnDpCH",
  "key27": "2NnV7FYpYq7UNYfqCJjJT9R7HX2D1h6VBqEySmEZuKMDha6rsTTT3PcJLvLt14uakrTVU5SqcRuY4a2dRB4cvf3X",
  "key28": "4HFvp5mF4nBuPN9WHWr549HxNakM4h7PCBtUuRXAGJAjnDaoswr1eGXtcczb9ZvsXJWnh1vc5bZ8oeQ4vvPb15Dt",
  "key29": "vJiWE7uHoZarRSXLGZcB7KE3V2EoKRxRnNhqotjeDVxQUgaoJhac3bcYKgBUZh7LFMkeJZjxXtViMH2h8QjRVKa",
  "key30": "3SQB4w4CewAh1pDPTic4KqBrFxzEy7SXyQffweaYv6EctDj4kMwiHrciJQZxJ38pFgbkeZgg7qh5aowvdw7XFWbM",
  "key31": "61EW1gdARee13em4XvrFecBUyJqfnXr6b2VGA9AxcdMJQtkbuhbckWVoEusxQwux2zuzo2T9WFi5eqHErHoUe6L1",
  "key32": "3DSjfMBsMBMmhj3c5NtoPoWzWyvTQ2jFBgpX6TWoWTgiZR1WfvAdYZSSVx8a6Q5AKZujQazrrUHYJPVssVbirSTK",
  "key33": "23vGqL47NvjibsxcycFvsHAoEspR5WUSJrqRDM572qioPxTAkpaxkrUjm67AW1wwQq6uJU6yhaof1Pndv1TgbqVt",
  "key34": "52NzFSXCCgtcbs45JUDKYE2GjY7qcxFD43vowvMULZYz9RiPQo3U7zSJmXhKeQDWjzVUnBYher4xq7hCK4vdSUPJ",
  "key35": "4YyqKzYz3JenwdtK9tzmFoDDcvsPvjyRnrqZXqJMrqxxXq8uiHq5ufpF4EDczuhqkVFBjzMAYnBfkpvtGKSw9e2H"
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
