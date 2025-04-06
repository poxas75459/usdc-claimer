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
    "36ctQ427YZT5tKPduKwdj6Q4jkVeFNPWJffqjguahh84Zse1dAXCM3ekE8YYe6dTninxPC3rGrocSWdywzqGP5Lh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mievQWBWqfyn6d28J4LEccc39gtdguQFDQnZuBcLnXHYWemKXYzzJuzo7zhekgzpuZ6xQZZakbhKSBNw1ZTG5Xh",
  "key1": "3x1fVyFjHGuNBhQE738zCtKGDYXfNkc24vcy9rY3nNXZSq7dv7DRt2151ViEcYwBiNgzB5vDXmqQh8Q5KfWRZHk",
  "key2": "cYfjsnRgP9HfuMuhvRLmduoonK5tfauHF2u49tXyxrKgLjXMyh1o9YiPxdxBUo7knkP6gMP4abHbG1HCgTRqCjj",
  "key3": "4RFJSnfc1nZd59fP7549zHscXHpgZB8GtzGnUZ5cfexBafaoChvmdoRCdDFPYmMop8qSoCfvopz6d1wSeqE8nheN",
  "key4": "2hvSiEWfJyfTG7gt1aqDCnfNEQG5ifU4aQcGsPCdPkfCdheedFiP5C1YaMXo7cddZSE71s5J1vf7tCUZ5vnY7XFn",
  "key5": "3K7A1quiPJ6xGErMrtGLyQ9Xd7TJnC3ASpStv7hS1kZgxiezAtr6oeD3zryT6C7ohqQ4nWTduwsDWEjrEruyCXTN",
  "key6": "2ssyzxukQR4GGHEKyj34XK3ejKrVD7FLFSDuHNYwVnmsi2erjn8RLRkoS928h8yk9PzMjpTRrguRkj2TEQ1MqViP",
  "key7": "2t3FCt92UGvGJPRZt3rMA8VzeRqoeP4PifwjNna2UTTeJZ8MWeqpu16eg72PxSNbAoWd2ThD3ozhrjWAf6BY5U24",
  "key8": "4CNTYurgSVGwmj4aUXmkdgh4pcLWcq98Tk7nuV1sn7ZMTtYDWBKsWgJZa4DVuMdW1E5DHLYVYDBMCMLymA9vkMDC",
  "key9": "61UUvzq9AujQje7XzxNAJRdh3s95dhqVNrnfQv8UWQbmQUG3S4VAgTPxvwtGDjvUaYdQ6W7gWfN6BYSN8rtuaVk4",
  "key10": "287XNnjE7iNA9JHUAwNxMeu6KN6Wd5VQzTTUoZHdqcFUvb1LhtqJePufY3ueU67JgpgobUHnFAQSFSySyH8gyzFF",
  "key11": "5DzjE2pzDpxS1NHbRyotkCSGqFmuX3KcwfDHVTuESkd7MbhiDaJHRWKYQEiMfqv5HEfVRwRg2KgYepxkgZHEmTA3",
  "key12": "efzWqkaPuVxbv1U1zQfjoomWq1PvqrRXQFkxh4mP2BhdJB4QnSAjZxd8hmS9AHePC4SyGogPCwsWrxPLtCgaMq3",
  "key13": "oPQTtDecJFrNicCXQQEHmJyZy48qta4GfVSPhdeBYTD72og2pWwwaW6JqjikLPnr2wNLtAq4b2bksiriUN2LKJ3",
  "key14": "5miyPvHh5buoQmdmcmXHPFSiw2ibfozRNNLAnXDVk8aYTrJ2ZFumQEbRyVRFFH4j7LRSmQJE8bbEEKjnpUN95VXY",
  "key15": "3ZqTJoyT4qLoMcNv1KNYWLAWXdPmABSeHsZyMyqsFvG5P6nxmzCDTdpyeh3weH4BA7HCanFTMNZWxFJXE8Y1psM1",
  "key16": "2KZEkhkdtkTBDC5pNGc71dXJ3rfEvgEK9H8x9gAN1hCT7ANBq2TELS8pGswzyDvsrY3Rrm5ZntKk1GW7gPrvV2J",
  "key17": "4cdUhzNYokAQRdpFjG8jeheqjXyubJetnoQmjDHFa2qeoUeJGcpxzbsRj2TGvVfm96JBACsTNjuKimVgHPpsndGp",
  "key18": "3TYQuNsoFhv8Famrj1DxuDYSMKrXSviNQyBgnGdMXK6QojgvhSbtffUbkmh6RG15D62D38sLpEDkDNDHnHXssUA9",
  "key19": "2jpipETHwBcVGMacu8NS9Sxm5Y8vMVvUejZ57oYVzi7CM8icP2m1WgzURxcWDP57eshJc9UVFGokxbMA5LbLsDdw",
  "key20": "2zXBoArDnkAH9fVQHVbHEwQ9BiMVixMS2utRTWbrZs62QkGogYQJi8HDEm8i9KgMM9fEHN1jnsbpVZQJ3DnMHCEi",
  "key21": "ehFjtLruLuFNYSzYLj7M5Sqs1k8gJRByn8CsVjW8jkt2UMHJshqKeTv6jSdPcJXhHzDykoGhshq34HtD3WEVbfT",
  "key22": "3U5WgbWRq86HVzHEzqoa3CsEW7si3GYmqb5Ra5DwmiYqti9AHwG9XSRjqxwEmbodarsioz45SqCKfkHKfMeAPWip",
  "key23": "4qBPwukmMjS4omqNQUxcUgNoadKpEZL2KixMzcQEQvLuc4swdTvb414E2qhXMr1aY62STFEd7uS6YAw8NHv5naHY",
  "key24": "2UPWbo9bscbNrcpfL6irerpmWCQCUVRNSzzUrKWeD96uBZShz3Cd85otM2mHysRB9UeatujRg9wjrcfS8JxKESjj",
  "key25": "4DZfUiSH9oJFEYWe4rjQL4snAgBFF1du5bfg1CiqBHCtYLxXRrgA3LZcDC6k1LEEc8z7vww5eD7HV15BNNpudzqm",
  "key26": "2hqNUWdJkSXaKEE35NN3vmfMtP7FY5uZ9wdgCS2kdFmHH6pvoPMoWauvNhMXjDh3t9JW89Rjtt7ZC4mnb6N2ajBP",
  "key27": "5SL4ZvT9oY98p3cAgr3P4UJC8Vd9H1ppuEXqdfZUVnRhK268hZGRWyuqUR3tLvjFSnhBPjqa9Z3MM5gQybKbSNSR",
  "key28": "41oEohZZUFWia8dz4JzSgfTNCLXUD8SiD295Xw9i2b3RZw6UnHt8oYUXFERdkYLoH9Y44p4cseEZZTzyrw1LPhME",
  "key29": "3cXtrgEBAnvT33zP8TmLStuvtXaoKjBn1NZegS6cvBhLTZmeJxRQ6sDAkjA6wRUb3eNMV9uX4DkH96P2v2iAfyP3",
  "key30": "SXbcwnAn3BBKWhy8FbmT1CHvBiv39aKh4qAe3kxLFgQcgW4CDETQSHR7ToCPRhztnPUTeDMPRKqSQrkzP2UY4xS",
  "key31": "5tjGMXzCtP7mDRo56WgfofEQqoZ7JgaVn64XtrwtYRjzaDS5M65kj4kkHb9tgckTN7UzWss2NCHxK7TkaSYFvpvX",
  "key32": "3fDZJSNaWaoEHBZ5btPWu2ekEUgEe329qxVQpFd43NofNEUKamG2DKF5kZdyJY1Chg3rZwE4o8dr4iMe4H71UgBt",
  "key33": "2xq9tZ2XXGYYCsUf3USrcz2oheFKkkjyAdra48dk7UqaUCrt1wGuyp3fWpu76kTs1bqUwi1ZARSa7GRg1Wf97CWr",
  "key34": "dazqFLBKotXdRH8D8bNDPoe5sZ1jcrh2BAiBQFoxvVepKTXiMrXUyCAMjCBhDx4FuVX7YxUapfafysoFa7kk3cm",
  "key35": "4sfXpMYZeWGBjPzaano49JLtCfW3UuFgrVgdZeDG6ya4GmWdvNiWFJKcEU2jc7n9PJcSUEQmgLBeaUx2rhKpiTTZ",
  "key36": "dsUWihgv9YtLJpJfrDN5fmvhcPwXSV2UYLRx1aoBCq4iiqQpHDszfU4GNDbY64Jg8trHD9TtK9AyvtKDDwN8NtV",
  "key37": "4ZtZ4gN6j7CXdjKFEJ54JH14nm7Yjye3w7RAoKdEpW1znd6WpCVKeyhKHKrXFZWazHMzvP5c2fGvL1yvjGG9KaJQ",
  "key38": "45Gqn4VizxSrtBL9fFQENgFZfnxcv5XxSVpuP55u9PiU2zaSsr25pJetGAf6fjgZKBzaoCFN1PDaFzyPAnBagmzE",
  "key39": "48QRP7gH57dmoTazokmZ4w2ncJQzihTKY8AQ65ARaVt2MVZuHpFQEK8xhpRK7TT5bDChCHuvX7CjJooTQx3JpzqH",
  "key40": "3bnqM2yFtBXJ18UAiNaeKwa5j3uXZFbN61MVmBBMHsJWqFVYo5yrejFq6k78TpereYWAQw4w5pTsU4Da2yBemKVQ",
  "key41": "3i731dgZjp1XRCGN3tC2hCXq2JXbmJq21vEHi7HyJsK82CM5FiLgbhzFQAQ5kr9NMwD4KyGzEkmmoHAkP36ddwWr",
  "key42": "4BnAU1it7NpX3muvpucyiX4nTinfuiEeTYy9QQ9dUq19f344mX2j1ht6HeHP7oQLjj8DSwZj6AWVcX4hdNnLs6Wz",
  "key43": "324oNeiiq9x7SFMZ6EQfAdHDvQPMfdxNPzZARXibTyZ32cvGTouNdswgPYraACBKBfsZsWskAjBgHonChL1asc9m"
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
