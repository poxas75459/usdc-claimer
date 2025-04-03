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
    "3t9GDCQgyLnggbgx7dzAxbqTBenAavr9UN9zY1MKo9D3afiDBj4hGYeTfRqfhYo4ezR9MY2ssneWYuYC2YiMtawy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rmt3Uj5ygqkehRo23C3qubyqc7HdtLbxiaZE4FCQt1F53p186URnCKrKJA29A1yFVa1MiTWXaJwCFAAJdM4ibif",
  "key1": "3oYQ9yKV2XUDgtzQodfGSdfyQ4RtEAurWtSyocCwHXVjwLhEbrNWaNCGvTJBxwD1mWows8TJB965jXmh2jkkLpPB",
  "key2": "52RKYxpFPpm1pAAtjrHoHNJ5d39JdMGN15EYc7AqGUMo5rfkp7SAg9yXpjPATDFYeLevyLbsciwBcUTozhKPDm7Z",
  "key3": "2fZbPnYpQrZ5kvGqFmQmXxKqWAsKTRz3a3s7P8ALd7cezZhLuVSWUFUpRYnGrzXi7a8GPSejoYbMVCSWuggamWmV",
  "key4": "56DRvnFA5NuV9ZBRH2x3bNzMHBApz7soEUJmcrKgif1gxNTFoe3mwdvCFvyoSup7CPJzCBQTHa47cbEf19X3bzPx",
  "key5": "5jwaVBTKHhrwXZJEpCFc4JzbwALPSNFDh5YhGDNzt3fpsxjBWuhCiAffBbA1vtj1AtKQ1Ubb1yehEyDB1o4KdHY7",
  "key6": "4ddY6r53HJ7Bw222TFj6x1SYVabTHGb5VFL6UaeCC1QpDoBtYt3RkG3diqAFjARSVnJSDK4Rc326mDYwPz1eK7tr",
  "key7": "66nDPHfuuyqm3BwUczAyM4iFjpEt1HwtkzBSkgqoTqQAXkWaZo1BgFyg1bwoh93NvQWAvG1LduWzGGACUQ5n6hTg",
  "key8": "4ofonk9VhCG2GMMRUM49NnNUhzKTBxdoV873tSyPpKqdQUTgpUYHc12JJDZZ3ZaCeso2aKZSyRZXdBdpNJmjRFZC",
  "key9": "2AvAKbLzd9tEW4woho1rNVLYisSyVm4cAMLHC77daoXC5x2UuUhpf1jqJwu3WKChF74AgPrWqKWATaBPAbwUABvy",
  "key10": "2R9D5Zo8twcLZm6gMY1z3RkSHdh8w3h6J5JZS6yiHvcXuAfZkitPZZZSDNTU33J19MdP3kxCjFMxR7VX1yMmYpT3",
  "key11": "3Ln4zCcUkcjRdUqDP2As9WUPrqXGihJiMvy1deHAhWxdpnexd26C8GMW8XECzyMVbELYubcVE45SiPmfaiMXbMXe",
  "key12": "5XPxr9RpeeK4183RTuqYS7uAcgoKFsRpoEx9kHdKMLB3ovBdyjFSHAcZJAACjonXqaNSJm4PSvtqU6HQnvJ9qZo5",
  "key13": "dF6RDzwRGwN6cCYGht3s6rU2t1MVKhZkr6jQthBi4oaxiC6QA6RRzivj7acFXJEp6MnvVDfds5oUZKqY75CvJyC",
  "key14": "3z5FGLWUtKQ2VaDJTA6uTd6o3BPSmuXjafhUAQ2SthLCiqiim5xncLWaBRLdqbGDiRcGCdjnuL2LquPicmY5qBzx",
  "key15": "3bamYspio56HrMg466EawXwWX7vLWnQAU3j7hyXzkb8cXVfyGxpxA7sEJvpdAryCifcVeGHsq42VVUQxsj1NDNiK",
  "key16": "XmCKHrMLMRqCiz1eQGgDGHAH7avS6JLefc18aXQhPgcNztzABaBtdwVYY4axqwRK4HLpdFXN4pw2Rv7bZLTAX6Y",
  "key17": "5kXc6bJDjPD5NH8PccHPontvxoYECeC2mBtKAEPiSTMTFVPnjNMuaxXoyWEf5LyXYhPPtniRwqSonqMvNVGcakYT",
  "key18": "2XwcPgzyCzh6RmjN5DV1atwGufhXuBkWs2C3vJh3Dm1vtP2FVvHAjFkjT7aDRszWbKaHPgfYCybwHeWJeu58koLb",
  "key19": "3VU3VFy1jk2EA1rE4wB64byhra74gMqoNXrYaHnNT9QeHUQagKiX4TgwZHpTTfsPau2dqQoDuJktBC2z19gQduU1",
  "key20": "44zjVA58DkSSKg3Ux3qRePhPNYBqSJViUCsvs3HXEmJZEneGociVviBPPDcTeW8xwpwoDc8JAG1ceSEQgXBayMTn",
  "key21": "2hSXnXNkrq9KoCtpWTxVpGGTCd6GWGJLo5RVFwqZypZ3JRbNXSPQSjMCR9pKQA8sGZF3bFd7c43WQgmybRjtzVUE",
  "key22": "3bmMaNCwvnm6mmQ3he1X5zFZfqJ3GAHVPC58JEjEEbF5DEP1bD6d6DjEjv6s6WGYPZq7Lweh6Qkk9KeNsAegMxiM",
  "key23": "4PZqZD7LF1jG4FYsqDDZHaF3cs6iaUnmBxvg2vL4pDLtRriDiJKoxP9Pey7tzN2zy3pjvtmBWd5AFV28ZS5UizCC",
  "key24": "2Z333X8pgXDiXnZHvvPTjFDtjaUaPJsCRuzyUt9FZh5KFdw4LpCxbyjYTaQGU9GouTEKBjNLgnAct6ZFNtSop512",
  "key25": "1yqH1LJKkQp27vX3zDddg4776zRdQ6VCNcR9p6s8A4syLck6EW7UhxbVoqSi8rv2zKLD6ZyUMPQSiZwvzddJFZF",
  "key26": "4b7eY5JdR3L3Wdf7K9Khf2MSecB6ZiAJvRtFVKQW15XuFrHYFrsgbveN56J77ddP8tqVqeW4ZPwY1y7HVHmP3gYg",
  "key27": "2hqkgTBm4MjkWBwBoKDHf9uLXFoZH3CtRPSjegcW14L1bMC2Bba4NBxTJ4MMCWHUeuudVgecXqqPYVWdqsU63czs",
  "key28": "2dNCSrdT7pPqFG34CJ8Sjn4aWBq65ehn9cT937htTffwwoU5AuFGDC4rpEMaCtfKWkvURSzHdpg15xYHgNkqmEE",
  "key29": "39mYKFTVwUC7agYhrQ1rqUVsmdXHHi2rPrvDRrq4PeHke3gw65rBFC6g5TscNqV8Xp5ZYSJ8K5LzZpBtdemkvKwu",
  "key30": "mnX7viB66GT2EdQ6rvkpY35toRhH2YfNMWALqdhW2G5JYVwNiDMxAx9tr2uwnEZCrYMy5pQyTh8gFFwTm2r276K",
  "key31": "29jiKbtkDG91yJwop7wQCtRs1AwPnMUFfgpLL2TDSVssLLaayPxgUomAQroz4PwuehnHGoqQbabiGKYXCCXHeumU",
  "key32": "42yHyh1zn4Frb8LhZWQdTJpQRdYJPiipNb6jByHddvnabhP2GTCwummd7KC4k9ebpx8676LGAiEhKUt5QtRpwHRj",
  "key33": "4GKpns7iwpHtkK9raRozpXjxgKzp7idYfSXS7PYz3uFDAD6RHP8mssTSErBM6gAm56L6TDAE6JNuKByhD1UwRuv6",
  "key34": "3J23UpsfpCggDpcePpiinWiPQWnbrwMdsSWZewJNvQSDiFEoUvoZsQFzU1Mt9mR2d5doUFRtcjsd8WuvpZeR8mYH",
  "key35": "5YMHgi7cvh7kdYjtxNaREVXGQenpG1v3YFZETQxK6cGwMz7pFQ7NQhQSH3XtzjZ5tBU9fSt2TMk4GbQhch1vvfvu",
  "key36": "434T8j66RoRwMghzJbPCwvyhA6Ng6vP3V9HwjRWE9dmgNnsUcoAjRrtyxNfWFLHpnEkkcdxUvS2Hfauo5qmgmr7E",
  "key37": "2gChqzzhdgxtB2aVtkQyTMfRdF3hqS2znMF6GBkafX9Jtnk3PWksRFwjBPLhaspgFzhVTfHeoM2hjxM2QkddXyc4",
  "key38": "3XoueV2GYCF6rnUsMHrtjGLff6BmwwijtVyAQnji7dabBpgUcFFmZzcRVQ2hQNxVFroGFd2gmqJKEZLiegH3yPLX",
  "key39": "AiKVVGobXFZkR6VrryfSX3CY8n1Z2uPHyd9SAb9Kpv3nGLpNsHLeBnA5HxNjhQokAJSLyBR3xmNcH6NgUGT7Dwy",
  "key40": "5qjJZF6fCAb8xxNnxWmwsk3rs5LLZT2kkBboEhFR2nAMGyQd4ZEV4rNRuTyjFZ7EeMWDWHzekBgvZC3znTuiQ8L2",
  "key41": "5XgwoQgwqNmf9aY2VfFnapRtZp9Tgsn69FEjVw1MvXdX1FvHD3UL3goTQN3kAYAGCLsfZdS7jEQ1QZXvbnDuTEzS",
  "key42": "5txEPVm4gd8mev4vSa4tZhJPSuAUTLcKVc2AhFKFcjx1vfVkgYu2RtgNeKJXvSuLwXKea1Rfy2cCoEnXzXVZsnnf",
  "key43": "4QfhM8uVELThwXGep9FocGVGQ1FCjentkRFTeAzEgqmZHEkGuHnvzabKgztiHNhmDArYjCznpvHRASww7DoxbX6o"
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
