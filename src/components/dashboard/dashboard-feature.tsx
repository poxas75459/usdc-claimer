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
    "25Xre3C9RC3WFV9HsxTGHEQ1Seg1axcKnnormSMPeFvBpL1CAmVA3RpbeySh86TMRrcGMrEFVqyC9J242bGxaHDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3seZcwkPd9ptuAB4KxQ9KG4ELgKhiHwxa8HgdUAbr6ZXYxTMdwKzCefwwjqo9vuiW1TSSBKZcV3HzMwYUNr4SB9X",
  "key1": "4hmptqv7JuV6ZYgdJPRZdu29eJiHoBW73G6GkJN1fAM2gHV7Gw7qSSRSyvt2EperXNApqSUY17AKk3w6XtjwShJv",
  "key2": "5ZPJc1kmNpZ6YA1ryp9tZofePzC9YusG4bdrWhZt69kM8WtxZyKhQyEdxvRjE8UeRRA8CgwmUSEVqe1QQAw2SADS",
  "key3": "4LKzqN8szQ6rmgfqQTEXsP7NJLJzJr93v1mrpoCsNAKDg4HDHZ9osc2S6QMjWvbAttTFpBFGohWWkthXJfECVs5R",
  "key4": "22cujZTRnCkHKLaCDurm6ayfA5WtZ7GsEtLhmLPTsWSruqDsrJ7rKXEb2BkeyWrDqyc2gMPMmotb25LV2cqsMPrh",
  "key5": "dq4KFZHK8tR59tD6MYrGQLczfMU5TqZxVyvtNLwSv9gT3PMgabs5wWXE7Mb4h1kwmCe71BqB1bQqgDXMiMD8Cuy",
  "key6": "2ebVpdaUyrWA8eEg4HFkvNcfYRechgbfhF28TK6pSzXExV1AprXjMmnswKUKzHneRi8JPXD18RzwQ3WXNCU2sUGb",
  "key7": "2JUgHNo75SMvxwYcco3Sk1KT3FeK6yQ2eW2tyZ9MEuHuh68ETsvfiytenJYyatxAzMfcuA67Si4DDaGuzaQ5Au8M",
  "key8": "4yrYRnpuFxVe17AjoWtY8tfR3xBZxGfo1anHLkxsfJ62Ed5jftwCmSRujpvAkAYiF3iFMsDqJ3aRzbGGVswc3Z56",
  "key9": "hBdyxSjZsLvzfWwrSMQ1cVgtpZAU6oDBpsLPuE4dbCCdQM4GTDKc5e9wvexooNHuyFByRasoL8v7dzUUVZZuyLQ",
  "key10": "q3pUNHThnv89qdHHrPjyMZyuWnSs3RngKcfKhzwjDgZy94qTefEH2T1ghVSeiccu2T6edZYSYgnXoAYyHBrnmnN",
  "key11": "5SCJPsBJpt3hCCVKzdU4AwRjAeqzRfucutRKAVW5eGXFJvMgbz6riGWWhwQpTjCr7X3xmV4MYD2Zbhzx8KBVq3rV",
  "key12": "5giePLsf5x6KV3agZCK62QYsHZ418Ajf1nMDGraG3hv17PQtRCuoTXZoFjaZJhvCMWP7dd6ih76ZoUNv6tZunX45",
  "key13": "4gquZxZ8wm4azo6MooxkViRR2sgvYijkjirDCzg9XSo1R1JzvbSk2Po9BqTsDpJmotvyTJHXKW1dCrqxiU91ciU",
  "key14": "25KLz7hD1Ed6ok9YKzQwu13JcsMqWgKchLbjFe896B3r1XfoN8uqCM7AFfDbtiiifZ3SyemXM1no9nSYGi5Ec1h6",
  "key15": "4baut512eCj6C5n791mufmyqCzSXHC5nPAR4GTxLUhJHA3VWxMkWyAq4mN7JyZR2VMVYiQMP7mKshD3eBEcQCiwG",
  "key16": "65hVBkTkGwoVPUvkKLdnRvB9BArEzZnxNbzwFmRoNsKFXtdmXpteWTvUrcpsKmjDb8quPn7YrkQfCqYDJqyMjJqA",
  "key17": "4veMpr9iC8MrYYaBAedDVFnmTFqNdQhiH6mz97NtztqWFCPjvpjvQ8fewQAvfFX5pop25mS13Ex93N6GH4pprBAC",
  "key18": "5CGrPeZUgPw7s1919jN2PAXJ4gnZLaPVVSbdJMM84cm1NpvMjrx581XVTTUozyWrB4b6twuC3dchJPL9yGtfy5Sg",
  "key19": "4oghdsMq6YYc9tChy3oJUXswJ1iM8g7teDK4qapopAYYhF9hwjrXEmnsWMcFB2GR1H4eRXsGm2crTMknJwS8SrfP",
  "key20": "29jABRvw2bgmgtGjVbC2ZTA4draEe6A9jiH28krtHMPyhdUjZjPhHgwQX5hntDvehhJothFKHji3Ykk4v62yX1Q7",
  "key21": "4BckxqbzhrcrFtDngAW1JpFHy2pWo9HegDSogB5nsFxzvBPYA6y4HVTM6DTs4zQRrhiP6ag3yEMVn2ywaGf2fgqy",
  "key22": "5umfXDfHDS6EbwZdmDKUEAnzYXnQ2F5RhGKgGxfV1jM9twxW7uEpA2PEVYpczAK1Who865Ef2FTwhvr3twMxZ8kX",
  "key23": "4uz8RMxhh83kMfY3vZX2MYmZ5qvXuZQeZMZfwHzbHBFz1U17QLT3dHqjmx9JNVc1Bbpp6wHoQBKUTj7JYHoqJZDq",
  "key24": "37E44eWGgVCnuAhqMM9PqWJyeD2Q9uXnswCFPHto39iMkBbHP9xFizBtLh8iS3m5wbZdGWLJjvpWzQTuuEy39879",
  "key25": "28KqKrP5dXqJfvueNDWJoxr4uzoNrHDCFSC8U91f4xA7cMrgDtAUn59Bpd5oVC9wVhhMXCWHkTjTBQEwCHMUXww6"
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
