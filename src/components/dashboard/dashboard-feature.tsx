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
    "4FbrfqCe326D6a6EzBXbUYe6PJvAPaXcLurYeirabjwUtLN9LRitaT1rBxtGi3bvEJ8k6ksQocjpEnASmsgTQA96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WHNu4JF5sv7XofCDqk7nE62Le3aCoSuJYMmDJWWKVxWdWqEseRgUZpkcf74WDsu2s7bvSbW9kPRutTcB62VdPxL",
  "key1": "AeSWaqvUaGsekJz8GBQsAuo4m6bpDnuEzAcBizsFcGAz2dufxEJ6jQ4ArcRfc5eTVehirWTNY6CSFDrgUk9g2nt",
  "key2": "3hST3DnwKAu9PHyGsH1QnGDYJCo8Mw7u5MQks13CJvTsw3bGXyxbAUBjCQgMmrMciXZymNrdDzmuxGGEmhrFZMt2",
  "key3": "2pmLmNzjh9Lxo3v1yUcKrXBeNqHhqUr7hCX56E5DsiGihHnLr64KF1oiVjZWvRTBo3sxHJL3TvEjQdsFx13XVNL",
  "key4": "2v7MBFrgEw9ydC7ikjkXXoPzLMdh5fASGbNEzk8phMmTw6RNSVpLhZbSPYVAMc8uPzZKSU2ZdX3uyAwzoJwfGnyh",
  "key5": "5YNa45x5KKw5NHCVbsgY6HYBDyeYuzZUY3LkyEDX9R3pdH7MBGaPjUfqxw1A6iYfMzXpBvjywKRvUWpScYUdZPci",
  "key6": "4A7u1TCGFBATih1o4s18kZVEzzQs3UveMBzVreuPJZ3V4jFAKNGKjyfrvpEXT9wv5vfVT8JkP9vBhCKq74Cbne7E",
  "key7": "5U2zH1sRBTPYeX2S6wSTCvR9B8uR3YGXAGrpsi5CsFeTjz8GfFb9wmEFSk1k2qjhdzhcXAG5MiALEBfvUfK5NEXZ",
  "key8": "3C7Q2R1Qmsi78fqsobc4WaJgGqxWo6QUNKxvYU3b5e6d5L4kKMp71TjWnNTWf76iJodu5N6TVA5VQZwvWpzcm1xc",
  "key9": "5k8mq3QaPFMPCirLGbDs6XpF6VF6Q6MMP5RgCHFSmoh9WgpJV9PLcVnxPGvwLgYSLuH49tmLChyhwFFoaNX3vrVm",
  "key10": "257uyfwVQAxcLbyQVahRDs5st9Q8E8JcX3ZJAaoxReRxksErAxhpSeQiQC3f6SzKpprjgmgsR8eunWWoLrN8Tv6j",
  "key11": "3SGi47UaoUC6gN4ZEzmn9yQuFLpSudMfkuBfDzpSe4qcDswu1VAHcz4aadhyyKqG5xtitTAYnbFUt1qguyrVAsCB",
  "key12": "5ZzfbCPM96ELS7hRexPeiBjYTJ2Nqx2RRX8c8e7jL3bmQbq7tv6XqMcL4cQ3FpkcHQrszskmTVVq1e24Wn1i4V9V",
  "key13": "4z3seVk625eLf5tr6idjZncYENANEZSoTgURf9SdMoaBUnR7BPutxTrnrGCKSrZErZcQo45BpzmGSfs7PjXwHynH",
  "key14": "iwoh4j43nUmc4GbFvVX369bmZhNjfhKEG7gMY5yFUKnNHevuAawUikXSnDtBCZ3RXJstbYQdRBVzKgZgRrZ2UrP",
  "key15": "E1LyYU8xc1wUL2QS143jfm3M7NspZnmsMQLtJsvgxaYEF6v67WCD6YeC9w62Y6JS6hcfpCCr9BcR31taqnWScy1",
  "key16": "2eayDkZ8DhGu88tgHDpgynwowCqFwFPgwNbm88SbsQbS2Y8xmAUTbrZuNKSr8o7NG5xMSh8owUzQYTJZgRpGkChs",
  "key17": "5FTxDDStXGBPuW81ZGaP1qVKDUERhKkve1Pr4W4QTx5way8P8WjywFJCXsVd61DtaTZ1VNBTXC4GX1E2pYAaCENJ",
  "key18": "227qEX9ukyebUsP3Dvq823tpfS7nBe9QyydPn2FamCnzViWKP6QetPxqxaaeokxWCLkasn6AoviXiuPcFXVR9E1B",
  "key19": "5awpQ5yuZfSzs57j8ewPYiW4V41ZvE3PqT4ejhZi6ekFZY8ToTWVECbgtYiqRmzrdmaMGdn5b65PfLnDfypX43FJ",
  "key20": "5NhZavA3yZTztH9tpCV5737m8tW5zFFXAHW6Kwz3SfhVsoiHQWCzRVkZW9WL4RhmXpyhZKABa2Xg8YTqKYNTR2QU",
  "key21": "3KeNsaA6zDNjEZ2pMWDUYhbjvDriRv6KekJuajBkKNpxtxK69HivnS2NgRrq78W4YLf3tz2Ph5YoGALeEm6QBmBo",
  "key22": "5F3gonfLEB1gykZB13exDFoWnYfpZ9Y99erGps7RcEuHr49ZyMneBEx2uKYHbe8tZtfMVtPHNMzStjoz5uNLpu2w",
  "key23": "5Z5ZpVaTMuLTEcA4EbbZakQdnxGb8NXLi8wae1gGejSoGys6RjzfWvm9e2yiPdsdC4ybpKKEggKwRnAym6RMZfrz",
  "key24": "4KfTG278nC97JfMqAXxKyz8xjaKBzm8TV9BvWJbdcbnPDHNcVYw67eLe3AEocSLv5xW5UdyYHxFPZVVfqscnB7nW",
  "key25": "3DyGEjqutAEDtZ6TmCXz5dhMJKAkhHF5jpW5epBJmKMuriJ7t3YvSWL1ewQb6LundGVXmGpbe3pUzxAWn7Gnikbp",
  "key26": "2CpLfUcfTVhjSBrrjVYVJhHHWYApKKaTaV3qdVH8EXTqXgGiFFP4RrMs5Dzth82HoSK1c5EqDgzwZx5cKU4cTn76",
  "key27": "4ioXSZJVJjo1odnBxBVqVmWCTqzYoDKs5jKjhcSvjq8h4GqdA3vUaEk8cydkFYD2tQWWC99qxQEU4JmKf9YcUxr4",
  "key28": "2ifNxaEwxiA82vXjTJhiK7nCT2oKjjEJvoPkhrBsQFXVJD9fDMARfUbTtybyKUHd8Bi47jcLMVQCJavBRYePHCvt",
  "key29": "3mojhuuMQ8Y7FaJVbXyBvRdqffaekwaGsZcAqTenMx3CFBBrG1ywrGeAnFnmEcc9akNbT1kaudWLLgXQ1JpLa4fu",
  "key30": "4dQdXucB4vah23tLWrPTu9UBD9nEC2NvExEmHToW3pw9cKPY8Ls28ZRWafabnTmizA9Nbvr1iXueN7xcTNYSvdaH",
  "key31": "4gKUeuMr7atrw6WpvSi4soz5jCax14W6ch6EWvJf2aTTeK7LUg5sa6fGrRYHFuCLXvBF6CEyfpQX1b7AQJjycnvt",
  "key32": "31rAMWK9AWZAM9eXrztWzSwANfuaus9wR8bwMdjmao7ftVZiAabJ2iDETBSY1aJXVgbN1NR52kPL7587TvekA2T7",
  "key33": "4gLccJgekXCJjZimd3SEsQSvCg7jppc72ZpNrxAaRasEs3m3BCs213dqjdKtaQPVj66sPLHk8b9FxQhQwJYgm56C",
  "key34": "4n4MHf1HKdj8B1v5btXELRFXrF7dpbGiv6K1RpBKrmvJ9pAh5MhTee2uV6Qxt5fx6KsGM21eXUBBTQXT56qMVbUg",
  "key35": "2WJQeupTNwiXCPXxAmWq22KzXoPcTLdHPDLpF8miKxjjxK96efUQNth8JC5nxYscmrEuxo9ZxJ9bwwYQd36UJjaA",
  "key36": "4dsBCfJg2TcBt1PEKoBDQjegky59nQZA9GZqdCbWftBFMkGkSLXw5a5BdsMpsMw5H7V5mNdwnuARQa9t7g6kh9cv",
  "key37": "jeeC3FCse7HrSQ5NowFK1wAeTUzvm1hwGgo8k35PTHq11PA14bXyDiXz6zFbe8JF82tjsFALJcZ24dJ9uHZbePv",
  "key38": "5B5XinmiL5MB1zBRHfUHYFwiUtJni9Eg2WZyJAmdnnft3LvcNTHamnB23vDtSchzP7fFXaoceeeTobgchjZnWwih",
  "key39": "C5RHE7tqRwB7RXGpGDZMDe3t8oygkxCrbjWEjBQGQKmsohtX7jsMzcyMrHi5jSmndWw42dYE7iEKJVbVyhNQ1wH"
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
