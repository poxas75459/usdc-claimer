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
    "hmxSoEzCt4cBXzsiggq3iTknr7tXbiv8mv1L7zDcZXV4hCrVfxE7BRX3BPHN2uwiQMAcYCfgd61wokH6X73nwNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocUz9srXA4ZoAuWQdwgwh679dFfGvfWZ5r2Kw7ebDpy2KEmNkVEWChmCCKy2PiiXb85ncYS83Mxe1HdJnUyEijr",
  "key1": "63Bp98qHFTLg61Aw3dXvFYeZuWiwNZo9RRN36AgqPRREuuqQcbeUVz6DRqwkVv1FHVzMdqtYqrnCqmQ2PShNRc49",
  "key2": "3qNogBFz43Cd1SvKk3fc42Z47391fAKwy83z7UhqmahbfdkLmYdozUsydS2PDGGCevd6F97R19JQD7ctLHvrTnc7",
  "key3": "2FpqNS1TJiS5nEFwA8yFtX2oS9g52YhCRRQG8e1bryE2ujiaweZ1hthajsrgqzLZ1PfHdG4ZwK4ETZJjtd5SEfT",
  "key4": "3eW8FAZbhK26T9NT91dh4r4Jrem9BvbUoiTb2TBCtDL1obL9H6JedBLzxx3swL7dVNVc8n9w86Lf7JUUqiujMp2t",
  "key5": "3PYHjFM7MhAphxxJXn6wRpP8VwqQ9MmCMgHcKLCG6ESrPPwVeV5XCzbY5zaVHBdYwSBENJbEKrgh733FZEEauXu5",
  "key6": "5ef43dqW8DTQdLJaiUPPLLsGgtChkjG4fQduZ7hXwHyenDiJ7bXmhxBiVQkShiXrvY74rpKwb8rDAhGVNKc12A6w",
  "key7": "615gnz5fEfQAwyvQ6mjHzoAGzHtBZczi7Fe4KJophHmiuJTg4NXKAnhfiMXAcbsgRdGRxS8s3FW44edGvcBvJdfN",
  "key8": "3UZnfnqjENMQgcc4cTvPpq2G58Kw1MffZUqSHBECqxXQeoJ4wgrNr2wqhvkXmya1wHva4fYGC6wKXAmMBjzQNWGw",
  "key9": "7ZubSGrsKSamea86uG5MrhKUYp8nLFEEjDRFCHtMXtL96oPAf4yEfAxtAwwqjrwziVP7YTSdmj68EPS969jyrM9",
  "key10": "3QnbhAmCL8evGzDd9jtjbkZVZtNAzBUnx6gsLfdM5We3QCRmprh71VRasw9NLpgd5rhtUSoHaCa9tMuHo3AaXrZr",
  "key11": "5TWZNF7w8yL9RuSQQKogKZG9rHunGvNo1hHDF23J3421r3mZAPmcAy31ToHg8WiQagphqq2pqC9zvBV4doo9cr36",
  "key12": "4DjKZAJdYpdrchDckwXxuWvwRSkmpQfeBfA2dpvXURR6CigudH6MWgSbh6voKeBjqjzPig4TVQJwpSzixbgQ8tt8",
  "key13": "qwGZJXdjYANCpL8cSvpoFBdPiKnmYg5V2G6AyaZyEPFHixoQKrc1xMyEDkZ28xhEtyUBssbncM8YKQjkAcMFHbo",
  "key14": "ri7gv5k4SMYUGo5nCkRASwdpbzdkairGGVxZAVGxdiBywFx4dvnt5kJLkRZ1oHZafYqao26SbeFv62U8sMEiAix",
  "key15": "28TbHJqmjDGEEnC5qRY7TSoENyx9TWPrdXq3KBo2u45WZUWRKX6jTGfhqpzDKSb79jf9TTW4NCYaDLUCm3LFvUsP",
  "key16": "3fVc7sdkJJ6pJeMUhEbzKkXSZjHSruqjSjHKcUUMtGongpXJBwgM4L67iJNW7sVdjJdPmDEfnkDoHvSeNAy73w3e",
  "key17": "33gpiGK1TLSFbyLqzAxLkdTbmE3PCV3nCYzuL4iwwmza259h4ATEdzRTgZLQUCgJr6Unwn9cjp98FKGmnhFJtHG5",
  "key18": "VLUcuuooCHDdaFrV9zsQwnJCJFDZz8ZKQ3UXrCRpAgm5bm2wod4PhY9Lg7sKAzeZDVp7UJqf1QMHNQCHQDuHJ3G",
  "key19": "5XKFnz9wTTvr59jTT4eyrHsnVMt1dvJ5XRrqX1rVJf7s2RyxmjfGGCubCfoowasz6VBsu1bxK44tdTFpo1dN2Tig",
  "key20": "2Qw3UPirVjFJi5LAxvmHuSDGJS32zKiJjgcthDnCbbcfCFwMCjgwUrMUpBbZfaNt7wsrBd3RicHKCgJVZWpcJLSH",
  "key21": "5cNm1BNUMPP7NUDAWmmFHBf3wQNFA151wSiAnqe98zSNHFQhe1xdwDsivF6QFgHqJZTfb4AQR7qHc1JvuGWMA8Cz",
  "key22": "5fXKhGDBtjeocf42Sg42f7qYv7BEwsbnwAF7Qg7BoPRNzB8ejYXB1pRCXjSP2tAMUnoQoAVbsUsbqMdXBtS2hgeE",
  "key23": "2p1yNr5JVCvUv3F7DVCkpGXocJNdYeV5GAQQ8ee5ZHBG5RsMqwggaz3sf9vb9EtLnKKHWUS5hXo3uNXGK4f8aDhD",
  "key24": "3bZ9JUfCbMUSt1zpRNVAy4MZFAYs8RfwMkCk34E5NdEaNq6U6wsowUQNmVudpjXPbopakjnFb36VyzErqu6xSEH5",
  "key25": "656sjyqnwVaScuCvmGSescoyLBzHCoHPPnVk23UGUySq8dPBVR217xK4NHKppFyp94KwqMVbS8mVcNe1ZUcU8bTA",
  "key26": "p18KSFu1QB7q5KyBjhVFMwqz1xtJGeAfVXgLPTtBTMP59ksvDahn4B1DC3XJboUdv8eRhZVZhFDawMXPznj49X4",
  "key27": "4ioSsZ5PgzduVY96c9T6BSM74vCuNy5WwSgHrXq8yBTctQwkNbK3aEZ5kymzyVqbWyczDHeD3MUWZTTbMuoFJk5F",
  "key28": "2rZ4AuWhHvkUAhTcAmwqsaoSyHf8maKBvV1FR45PzrgM543QizzCeXPXHjGb24afBLpAi4Bg3NzC33EhB7jYhdCw",
  "key29": "4ymk1VuigAWzNjLtPqEZTtnv2W7BtzPYnvmPWAsSTzQa2YJyT2tpMREtmk2u6aYJt3wh8a7qwPWtgFJSi8hLm2wf",
  "key30": "tPtnhuAiGuQ8HKc1ApjL19Hi7YpQTe6njX23JpM1dcHK4sbDtxvpZ2NNbfY2VwqfY4DNedmUDhKcqJiG92TLY1w",
  "key31": "5wXCUD51qEUgADn3Rz19HBXpRLU55C5xfofyBjJXkGTeG4JBwHdePi8dDbBJyvpfzTdCnyjwEvhBJEXjDWLCApX8",
  "key32": "5vPk7VvqyqLQpKVsXNRKUgVFm63xfwyQazrb3EDVYvwpYd1SCQ4YgGwcXHctjZ61qNnBnYDKTHWsqETy8LVn535i",
  "key33": "UkcBa9hpkXkrxY84daDpf4Npi24d2piAq93YDbgBNmSJmPo93YLQWjMpQSxE375917PtduSnSnkNTzdcvjLRXgr",
  "key34": "4UaZf45rSVC3bqeVdZAf8FfetvPCU9ff8GAMjLBN6Yx3v9KmquHrvRX39g6KK5CKaevts8vSvSU7HMgSExmY31P4",
  "key35": "KBNyoqU2MtAEk8eknv77PKBvzEC8W9bWoGiBvBZvHKtLbEBVMkVricUCJrmj4v8Hgo2iw7p5qKP7rRazXPeh35w",
  "key36": "533E33zrSgLaFr6C4aZEH6odjFkcuohweC1HQSUC2w5HQjvGp4EF81PDyqWb3Xz3dCwRWmu98ZT7jQoE96sS7Wtt",
  "key37": "2ELFMhLJ1PKsC9m2NEAqPad6EhCRepGTjRsqEL5JfYfUEcVA4zTJwpg4xknp8dSPBC7RxhoRcjh5WufSG7nNhfBN"
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
