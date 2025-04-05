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
    "4FGDTJEMB4MTSQHqBcDmmLgxe6D23jp32LPSHxX954i5V3xhfcW5h54NNWQ2CbNC1EYyZAm5XmbEMRH8SNDZvYb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qbpt5EXiMRRRa3RPpsbnJp85sxpmoZ93aiD49jcf6eYTRiE1y2ruKLrRqBwtqcFeAwxgXegPToJyxZ6CQSsqfK3",
  "key1": "X2kdrgsbpEJhKgiF3JT64EG1U4xzT5F53drYie5FmFjJQsv6ATfcymUjdEZ496fmHjNt894pK6Wg9dJLqpBVTbu",
  "key2": "3JzfVvmhLanbuXq1viLeep9o6kVJsZ6tncuWTJciHyJYeNftiaLv8w9xp3fNS4K3yVmExZWh763WRZyN9YTiR7Ci",
  "key3": "5bgUsTzzjUXMXA1f2E3FJahhegAC18vydqny5iGWJsz53qK4BrYnEH55ee6wSJgwwxEUMn8zJwaA8zNeUW8GqfxH",
  "key4": "5zWMG8DrTbQwcVrXudDx2HHqWVCZx5veY978VnRPSp9EWx7upbARriVdriWJnZFK6Zqq5rXKCxF8A8GVG5hvV2cx",
  "key5": "3SVwUKcV67myeVpXADi9Va82CCKDiLHaAgGHQ9z5jfVTQPrYH1nS1w3iTtsS3SLzXKpT4AagZXeSAWFdmKj7aYEb",
  "key6": "HMNuR3KZUGmACm3JrsJDZZWqCroAnHXviXPaG6SKqwVjv9SxgMqrRDASxVe5fA6ueRc4mUxLedBW2B7U9nyS5Vn",
  "key7": "dtTgVngNoHpYkJKHojVEMpKXFCzE42xLmtJppJNqvFXwxmv95Cz2dKxMU19xryeZUfWAhpqw89MH91QsXhWexfR",
  "key8": "4KWMJAyMefwwuEe2SzDXwHJo9GrsikMH8jYkzfcJZ3W64MDmZxpNDx7TxjnFxPKNtbWFAiSHFC9tStXWA7JpnfWq",
  "key9": "4n8EbDsSqhBFfk7PCisbMh1NN582LHagQxxTebWRNSUcnBhSZfeX2gNGkSCoNK9PbFYW4V2FeShLzaj7znTqoaJo",
  "key10": "2fFa49bHcP3CZr6egB5oxRTinfoRsxHJNi8JDP14HWRW8rJ8jQSXCZpjKNxHYu8rzPxMeCCg4B8PSX1SE7AqGtBT",
  "key11": "5p1URegBXmg2JYJGGrK66EWDQ15EZfLsDXvRUj1F4vTL7KpC8MfFW3rHYqY1gsgPoRYsQqqGwE569vecBgTLJSdE",
  "key12": "yiuNd9jqgMuS7ccCNV6SX3pRYixEMLYdpxNo6m1FvYkkCvHspUg2bD5YLBTEEkB861MPgSebybmgTKUTSRt6Kdj",
  "key13": "4FSZHnC7CTgRjjF7ZdvQAB2NDeF9dsv4WAVi5EQ5BH39sEhcW4STrciRcJyzGB35LM5cwX6FeNwSrrcynSMfYa7Q",
  "key14": "2KZtwkrfX6XFoFPKgFHFtkTRU89VJUU1j1sqo1if95EnwKo7rwsgebcNA8hprS9FUHtyCmECngx93YnGU1XZa3KZ",
  "key15": "3sV28og3pEgzw3jAEDL84V2ky4kqgxeozw6LFKHmbeGgJmsXANeRt7r1JYYj64rv7DGVJBwQzmcHx8euSwoBuRHd",
  "key16": "oQm79ZaL2woGKDaK1pjSMb5vbRYctrZqbFNGhEztemDk6pVdfabBCCuPqH7vhm5Ypqxxq7peKChM78m9fr1i7nL",
  "key17": "5yQpxooWfSxJ5Yz3VyXGYFVPhPK16JemFTxdWoyn8R2we63hCJuFSEGm3cQc4e17vJRPLYfTK78ZsPX2di2v2U1j",
  "key18": "5ChqQFq8kwriS6LRRV26XpsnjSMfr1NkuKrXQvC5sQhRSt1Vh4EMpNJpECg3K6wFKDpadDErtf57danRHeAfyZ7N",
  "key19": "4jcyhcPms9knAkpsymM9i8FZxfQi8mBcCe5FDtLMWcXFCZxg38hXmntFGk2dz8CWrLmYLjXYWJ4wnaL5Xpx4MDGJ",
  "key20": "KFsUNUJFFGar9dC3XTVsxXJCKvm7C1NCW9RXNPMxp3ueroB8T4Lg95zNqhp5RAhYaJ5BQoyNLBzsea1qro7jgHP",
  "key21": "xTnkuGngd9udq6aZvCvG34wt7ZwmzPt4NGwNP36RbtBgAGS3CU84v244RMsFEwVcmTswzupYrzm6TeXZ2JKPoUi",
  "key22": "KkVvSwuRbQDghCsKLHrRUGpE65hqyvpxTtJsrrtbUwhbk1cLrfHeUa8dnjMv7by6faBxiUcVtrx1tJBkHJF5c9S",
  "key23": "iycSUA8LhuzrpeheHphrbZJ4RKgCBYjysMt73Eta7uivfRRLGoS11N42dsHGsmM2QGbgbqdFenBJNZdBmmwBpQJ",
  "key24": "2i9heeJTqn4xEkcKmFRdKqA9yo9Sx7MVVA2S7yvTjj4oYUZUpbyoFcwZchqKnMBq69sGwNQGsnVLi9EfAruAgvKf",
  "key25": "4LNyU4W7TFjuDh1bL1tmrZdKrn3YfKrCFDJsqA3yAWiv3dLGGmKEEJuCmcWrPZEbVNuUYinWE5v4LZmhAfZh8HdJ",
  "key26": "4xqNYqrGXBqMGoGuL5K5JVA58mWe3MHyQNgt5MPUTao4hGSCe7dvDWPHT5kLhjv3z5f743hKHRk6Y4cgL5ehhAYM",
  "key27": "5evpk51XDG2kG7coJBPQxQzuu6UyRnEfj3Jgt3queqbX8iKNe5V3uSApWKRdezrKyVPgWc2zqXhjUBm8fyTAKvTe",
  "key28": "3JvihzNsGpGBDaDMpxe74XZaNBptvjpwGpJryy8gksjRyJ2i2Zxp3AmxEuUGagwoUdo9HScupuRAJgdp5mFUchMf",
  "key29": "5Acb46ho3fNzDUwrXsEuFMyz4tTHBhBd3s55ddspP79Yk5Ry5KHC4KovB5kBN6td4EG4FofZ2SUin8Fu3trkZubB",
  "key30": "2i3peUXCVKNbtAcqwYbUCaMZyuge6Ud54iWcGo2vmNr7omN3FjuqZAHbz6NdnmzSTwYeREfghEGBatAbMSqR5bpo",
  "key31": "5GxdEMhNzjzjVygUBScMBiUanqsWfHeW7vb4XzhUyDAUKVRnfTZB3T56QJtDEyuFQjGG1iJNvst8ToaeCMcg1XTy",
  "key32": "2VpTtba8roz14Ha1KWQxb3w3pRBmQKmiNDQZpF9vxmFWueLxvWamUUiKhPpcAJ8Ru6SX7GraVJi9V9ztix7Thm4v",
  "key33": "2uSAAc97i2CFyBtCrpiBgWsrHe5MFMckEVUF6d7J2wU6aZcMApH2zVnqTQT7qM6VZmw9FBQofaFUc7YjgPv9M11w",
  "key34": "336VvWKFrtcL23w9rjKWsAKWuPG57NCjcrkFicDsiuYQpF46YonQ3Vno6A33Sto4tCA4W6pUZPp5Crb17TrL6ZwS",
  "key35": "5q8Mx76pKajSmAz3JESkoTZzVS5TD3YwpfQAXcpyo9GyFri4JuH9YSNEgjo8qtENW8Tvj7SJ6BbeZC7h6DvpwNrf",
  "key36": "4X7sxRwYc3c8P3btLbxWUne5ugLiCTC8uEo5nYhixfYqAGXWxjsE8nYPbHxRu1ZHqUAJJde5UhdJnVWJtJrHhqHA",
  "key37": "5sRexpCn6LnU7aQQAR8E6bg4EDtr4atfis4h21iDj7qDoXuxTFtSvzYtJVYYdzbArr64fqtbdhh9V18uAttaeDZM",
  "key38": "2q2255se4FEwndpstcsLwQt9gV9GSEREGQDmJmcoEgekrNAC8KF5vKKmZXvc1KH9vMUttf6EDAVjedjo2P6h4uXd",
  "key39": "4CL5iV6mZEn17sjiu4tmEMgATrJF5u6T2oa5T612oeehcVmjTYFRbhQWVzjxRg8soXjfYWvTYAfhQZs7qnsmNrX5",
  "key40": "3hHL1gREMFCuZNyrBbdEUpeJcN1TDtX3gsrKyJN2Lr1mh4PHEJrqdcPnERU86pgEvmKi2X3jEoR4p9HnM7vQA9XV"
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
