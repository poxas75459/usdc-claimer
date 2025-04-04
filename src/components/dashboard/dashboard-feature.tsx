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
    "sv6MWAzH9XH64UNrRtUEmZycgxtqbvEhFMEj61qFQnQsnJXCweNcF5EXBnkszhFGCAQCr3vNK7TFLtWxvSvJ7es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645qLw87DpX2PHQn1BTv78PFECbyDMF8HNsKgrVq3r23xTAN5Rph69gBWvzonjZatj6nXJvsKQ4RxJ73srNXLdRd",
  "key1": "gVmfNunV68WyN2jFarGdzTitDyMXyFZYkBjRCa9aHH5ibvWyuWEr1TUKCResJCA7v9cKzS2FBiibpeo7URTincb",
  "key2": "2eEmd173SAcKJHYEGm6f72EhNjwcDk75o9GCLUce1gybZnCegyWthGNsafYN3b9bjekxD23Yy6bfRTM6fdLCKWW9",
  "key3": "63HDxvsLmqhm8HgFbZL3xgK6HRt4zC8fHia8otS4nsJz5MVBrGVtavqg2EmewiNocTb5Wve7ZcfmCNakkAbyWZg7",
  "key4": "4XeJK5tYTjytZUFwvSiJEunFLgdFQHNMiSeew4jnxDEEdgcvbMivt1uvoRnsUfyyARwBGbDjpNEKcwkMuxjDsUH7",
  "key5": "4gabPKsiry1sHtCBAFYoLKrRzmWh5uwopKeCascsM6PS7a42jSK2zhGrR7B6MetJb68YKEr6iQ7NaTQQeJxFpdJd",
  "key6": "4FnNa4MA1H4M3hukzD32sTBd2t77vcN6uZED8tcrUySLQ8h8hC32QkZDUNJ5DX4ppokJGbHw46cTUQgaLP4QUtJg",
  "key7": "44AjdEV3cfmNbpeEWvC8nQg8yRCSZgDivMX6X8YUJrPyUA5Pu7ZjLgQJHXgvP3tfsDp5TPMR8DQTWnBsinFqDyi",
  "key8": "47v9zJRfiSAsbdQASToLEtbEvbRUGBTfN9JTE6DRj7nzz8rNtrx9c3AH8vcLAWAPcwfvg65dAwu55UHowxRU2eVj",
  "key9": "3wsutg6A5bf9sYs6iRByKQMqRMYmbCPF6p6TbfTXedo16DdwnnAbEUi929VZw4URaV8JqWUcKLCtyXybF6fzUeMs",
  "key10": "2eZLa3wBTJzYuP82VW9vApvQqcsoTnZPiYZ3YtDzpJQsukeqwBt6mrJ7vLR8QTAof99H66PbMJvEDn9Tyer86jGg",
  "key11": "3Yhb1qRsNKmZD61A63PzosPfemFT5RkgJw855EQcwWKotChv5LNsGQZBBD9hUVvk8VxJjChmzSE9nrTu6z311ma5",
  "key12": "hFJKr4KNn9B2ySnhR1x2M3HQHTcVq2tbtegbeBmZEGxSXoKdzAANARYwQJNiEmhyBGKfFxDirtobwb9AM9NbCKt",
  "key13": "57Ky7RLg2VjbaMsoCHMVVEnvY4s9LjN1mD85aLiyENrQ18bq86w8nMKAauLbawS7wk2p6sR967VmHwWkx1mJvW9x",
  "key14": "5ShMKpfkuva6HUUpouTSzGuWuCLzQiG3PhcbD5eBcLdDNWpcCUWdEbu13yHbb7BDXS7qcexqgVo5iwbWNKS3xdwY",
  "key15": "4mzjFmmQcwRu39kZR68DmUzzjd4aNAKX7jGUGUHVkt2iox9CNwLWX2Qr2aLRAZjUwKW5P4PnmefmmfpY4SE2H7NH",
  "key16": "5yFEAf6NeVdW7DMEiJqkkDaiJXbsVAkMbWxJ7gadqDpdCipy7r7iMpRmm5jvzdoG4SVf8TdQT7Xjh7MnTPkQ4Reo",
  "key17": "59pEiwLS1tdnnM3gbquD7BC9LzSLqbdc1NvhMzDt4HVPg439H1ghhbWNotjXzAxET9QnQTC8xvUz8ovnXAkZZYzX",
  "key18": "2ksGCahKvvFKUV6VSSCmXcGB4eswrTbasvRMZBc7wifxKSnyPpLQ51CH3tJqKtM2dqihkPzVs6hcGcfjeeSMskJj",
  "key19": "31maUgtD4D3ZZv2ZXwqBcsfehqbZ3M1bgjhUgyPuuH8GtEyRGGrsgwvANzcCh3fpZMbhZeieszJ7YFGh9NS3A6Ga",
  "key20": "31vh3bgyDgXHZRresYY6xLRmy8ciM1zA8AVT5PWbTzZVukU2qDhrWnWx86fAfqmm7zAG8HpLrGsPruURtBHx27yc",
  "key21": "49pgXcWG4ZnqFa8vRoHhzQSYf1cBxgUrcAyPN1fWQxGByyzrZj3z7ya2R11ePJHaGWRJ68rFTUWQRVq9YyRnvJHZ",
  "key22": "21GR9G6tRYzo7GFEqF4CkieN26tJTom4X5sDgQEkW4oGUKCaXjy5TYpXqmYyUiDLWiRpkJQSSD7iEimQSK5hvbb3",
  "key23": "64gPp5D7KWncKodxmXMqy918xuSBuipJu6A5b5N3zT6dPzWUKL3CMRbA7VrFdUmGaT74vYyojkgybXGTCeVvUK2Y",
  "key24": "3C6iuYjs6pJ8BjUMfD2N3E7HVrNSvsrcxTD8TaFqpzoqf64CCM3WYYzzQ1G6AeDaT5A6M85QjLr2LbjXM9faiQS2",
  "key25": "2pH3uHkeR8Eg1aBwUTmzrHe6AAoDLqJEjaFBFE3ApFSLxc9TsQpZhRmW9fKrsc1Ahm73BuKayXEZJW9RokwUccKm",
  "key26": "4nnxYycJDpmUDhD6bMdKdowg2FXB6n5DgSn32PdrS4sqZCbG3qf7yNJgbhTtctJfx1MEdxpPLLTatZaDsUza6qKV",
  "key27": "61tNkMgziJu7J4yXsbZMx8N2JnUUsiSmDjysXEKyRRQeSPs5WQjMLqxpDBAWoqaqtSgCaKp5LobggDzfNdkj8d9v",
  "key28": "gv2U9yV1jX7HqVMB2ZXcMCnBi24gg6Qk17Ya1Lq9DogzuLB3XLCZjEPUZ5PB5SRtzey2oCtMRfYKDUoWHomHNgm",
  "key29": "56HYSgZCAufcDtpRCHP1oSFfPDbEjtxzywApCagSPQSvAgK7KKdGd4491cBC45kJ99DKu9ATwAL88efCLaAKKFVb",
  "key30": "5FEHSuxvYfaggA62nXq97CsCntv4Fmyc6wruC5qrxLUVP2yvHjyAVf5ZZK4h3E1iTzw5L2xBzdtxwSWVHLefvAun",
  "key31": "39Y65F16uxYFFazLxYPH5XmHejLS9jEX9KV9a2hDURbUevq7h2zANnZ9a6B2QnVyMMCxFFMSxxDTaDE4FmKCRPKD",
  "key32": "4vVNjjRAEwmxDc15nPFNRiZM4eoiHAWWRqZo3UhHb3YorobaZFUobyW9AnuLCv8xjZhPjpPsJXoc5fj4AqvW3Rfq",
  "key33": "5BLS35rXXzd53XdD5Sn9SSgnbSG7ZB8eyrfCw8UP14hckV5f4MfdSfYMyMJa46WR6g1LxM1NCRha3sDJ9p8hjjhD",
  "key34": "3LSe3XV9QuzGgVwTi8rB6FBNkzrSzJkmCgGuehcG8GFVBJvXF1vPB8EXUmEPNU3Dtd9nochqmV3K6TVkRvvqZJ1E",
  "key35": "okVkf7JsYtaVcny6gP83967d9UV5NBdwLACJ6ds37fEhbgXegoHFbeJLKuDfoxbD9G5bweXXsfwAoae19yBWxKi",
  "key36": "2n1XxYiZ4YupK3si2A2ghM4A8dvhu7m564XXcxN4qpmeJoJL8gkDFwy3xkYfz89kd6K4MAwZ8V4K6C4sCj2JbtJw",
  "key37": "674Pfq8TYSuz61LdtkEGgcKhY7mzV8YND4CWwC2TPepoLNWMrsQkd5qeFFGurB1iNSF6NGH1ULbsr7rhi6vYTL13",
  "key38": "3jMKWWHTKPagiNbE9nNVHiokZhjg9XdWhY65XscMvRTs6TFPLrZeymphivWPMaze8UUxCqv1XgdxnySKQcXREiq5"
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
