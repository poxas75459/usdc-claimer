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
    "gSfgZSwi8c9Hv37adqoX7kuk4Bmq8DqLjwThUtNpX42BhAf4FtcTzAaTs8cYh1npXzZssS8QUStoAvEi3kdCqfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fiw9xqVVNeaRRXi89X4UpHUgEQv9mjUQ1AGyhWRzqCVF6KVGESJLZw31sNS3zxnWnk29B533fiBEsUzVVPCtScs",
  "key1": "p5cxviF16wCTTfTGn9HqxaSYACdS2vUe765h1VUk4RcQh2LWwx7zHrL5U5FuKgHKnKJykDLouCoRmqYmHbc8Mrq",
  "key2": "AcRZdj9hkpk3gaidDwtfJ2bjXh5Gntvm5dt3AC7ytpfiu4qVB7whcxmVJhp45ab9fzEWXuUzSUiZnUqMKdEgk8H",
  "key3": "5TBVA94rfiMokajH9yA7m1kXb7Yu4wk6SmhdiujoToGqQUBhyxVvkscd2ubWF9uFrkCgiQax8cJbVUWSnufEpfCS",
  "key4": "5FJqGQfzLts8yzTZ2cyYk88DrDGPFUhNj7VM7SN8rWHr3PKhwrSfMe79cK3nQLGCYJGDrjkX2NtUs7Bh2wALBcs1",
  "key5": "38wotuARtPFqs8K9uWbSPvCSB2xYgmjCWMGtzyySy1S7mPkWetAsoKbtZ2EpN8EP9fvmM5Y4Dnm3ShvFB21KKX2g",
  "key6": "4V7sx9vBgR143RGaTT6ijrBLpBMg8wiW4cnyVKgN3gaMrhk8FqUBfAQFat3beHubdV76twb9UYwk82DudR69wYRy",
  "key7": "2ZmgQLF8DuMq9mVHgGgLe33quRoGCAgyhBvdtoEzfW7258VRx88NL7vTiFg4DQy2PGZBnPHc1WapbsAjxmvJzqLe",
  "key8": "251PbzM3JP3aUnHcEjAVBHvbZCCqjaxwppZ5uNetwSFTVHkF9Hyq8dRTQNPNfpce4igKQwoo7yZ4gAsvGVZVnEp2",
  "key9": "2Av9eXQUuj9tszn9AKhzenVVpFTatiu2hxLuET9oNC79DYvebsqTm1zFaZERvcVeLxEw7AFuhfjfMx8S4ccZ9moU",
  "key10": "oXjbzwuUGnUdq7vFeYfgonPA3gYsR3Pe6UB89APsgnzNxhb2vry7UGMGfGnas7nHM9t3ViYkvzpr5fLHfDX7hav",
  "key11": "4yEenykEi4g6R1LVviSPcEPGRYtuUzNBD1iSkQmx5xSXTVxQxswoj2YPZhPJafqNz15e8Uzh2GGfwQEm32xunXH1",
  "key12": "2ReoKxYbkgdLUphCwKmW9KxkCxuFTRYpThPiRAYcCiLB3SrkUBSQ5o9gYbCzNnuSX1yeN5P4TtXqsPiyCkMg7z9P",
  "key13": "5c8zi1zrjBHH696di9zMaDvw3et3ycy3QktjfQNwgk6uWpSEFXLqoSgNeQF5TaTdtiCq4tNBzSs4Aw22KjjrtyD5",
  "key14": "4JBih8d5FxWLCuzcbB9aChTwTsACfwQuUbvvFLcUz7wwtXay7ex8onKxwEkaFAVv5Yk1bdTiYVEeNs5itsHruZzN",
  "key15": "2GtJ7ZioXkWMebVy1Xri8yd2RD5vBwttarFLCn9M6uTxqEszjEXiohMjtmmJXketXVsmQ4BzDSQ5EZQeDwGLFro3",
  "key16": "3XxqiWZ9qcsA2YuYhvFUwgLrtdFtjkURx8j2ShAPTpWoF7zaMXQLv9x2kpro9iNbDHQWuqkRaiyvgsbZ9zS4ib8c",
  "key17": "5AG4JbAJA2aHkc8eMGABqJhbpzjJ1hjd8ekA7tZhVuXFifDmXVsHSVxp9Mb6JCDLkwSbSYNknyvyWVHwSEk1Maxm",
  "key18": "4yNGxmuBXAibUrUJKTMqT2Lj8rKRXM8xnMrmUhYgFm53qVAcNETE9VJdX24c7tRuEPCq17UpNXPzrY8mz9VQ9HpU",
  "key19": "4wYxctUykMobjC2Z1skwaJot64vUeEFG5nX68JpKpRL4Q1boq8f1x7tqb3eAQzSyFXSPMJXeG7WdgCUPuTvfoJeX",
  "key20": "nzeqm2TggxZkKUxD8K2biBMwvVBKQ7YvEY57rG5WMX8JMdwYNTRzKsisJeZMu5ZErQXkqsNdDWJgGBT7ak2JotR",
  "key21": "4QD1rrqZHX6DAMhHsbzYQzRdBVqzJCBv9BZWBjdZe1REHERWCqNUBpdNXhqL6A9sQSPE7FZgVy9oV72p68wdo6Ms",
  "key22": "2x8D3UrXcsKfgLsjgLZqCR92DTvpwa8ZomJSDXJgupBWPyBRxnjsqR4GrZtQfHTMoHu8UXaWRW1V6haptDk1Dvhq",
  "key23": "2GPFdqdhc4BsJFdBib8HKncz5ZZRK9bgV123VnYpTnaYgCZyVvXJCY5KMuX7FPnK4Sh5rxTLrw7GqKHGegApjdfY",
  "key24": "33vyaU4Gha75ZK58Yo5C7v1AWhBaCaB1YLexWaN5EfiEYvBrGewRLC7GWrKYFQA5KTpQrT4s7kzxX7zqEryAsqKz",
  "key25": "53HtveBzPYZhcqCAtKVVw5bWfg2EpcH89fdoJoYyxoH8BV1X6MUtgTzJFzTwaf7EHZ8EqE4NxXqJq4oaHatWWxHf",
  "key26": "3yfRbHhg3PWhYmVfwpmPWYwjztdC84Up4TZSa5NhbXfnBuz53odZizg27zZoQBm1XZ6SV8e8jHdZJt11rcKxVrEe",
  "key27": "3QdF5PVXFnH2NGc5xgSRkZqdUr3kuDju3s5uJ27L6nh8Zas6QdXkCrgSgSeq5XpoywafwHWizZZ3tmhdtNACZV69",
  "key28": "sQPf6HfFTxxPZY9jqwe9zF2AbNoVnE9M63G1WUYVzX3QxKxU7h9Jmw6HegdwinjJBRdENHixBFgWqUcKPo5pudz",
  "key29": "3CDf78CaVnhvnmiQsqs1moGxK7P84y6UpLyEyeA9fPXk3Dby82gVGPuYkF4xrPkUr4tqhQJfpp9fQPJMRXsvGxBQ",
  "key30": "2SvEERbjsahXWJmQx5cBo4J7NUgfKDx6WM4QUTsT7wGaXGJuvVEUp4GMHEfqvADy6iAzXzsjNPhJfKMovKRvAY9f",
  "key31": "UXZArTPoyTuUCsLsVXxs6aAAd5uJDhCbAKhByHTL3wC3fDo1d8DjN9usz55oGk5KmveE9kCA43QaMzW8Rju3wJf",
  "key32": "T6kRiYYRgpRjcQP6ypBBXkm1bYtqRVASUnQsJJNKfVTbunMxybMW9qPzyoQvcwNLoDsRYdeZb2PCBoomt4r4tSB",
  "key33": "5BagtFD1bVgXwzaEMhveKgMh24KfCA9XjwEPfNrz8Rqu6M49QzGqbrJDiW3KD3jZLUAKLXce2d9FLi1fAEZT8Z6n",
  "key34": "5SYns3ef18aZVW3XT1KKYw7pDivkT5BGbeTcx1DsVGMWrBAhwY6a8hJWjYaYJVZ8wiFBGg7LD97RveBURoEZkLSS",
  "key35": "4DMReXdDjQZbQUk9YwpMNtnUYH3HtJ7M8TA8weTHF459ZgwFLrYgJhvAV5StCZxfehcRnp9RU5yhuzHi2nVuVXjN",
  "key36": "45bQ9PLvBHGPvSSMoJ7ppNfRuDRW9w5VVvfvADpmrPtz5NfrReeNP1dzFTg7xqTNuiKDorcXgjue4dqp2wvsM6pm",
  "key37": "36LyddraJ6zwhWxW16QsAq3Ld2KiiwfRH18nexNAwzFmHxdLjAZ6jygB4LGnokN6qS1TsGGC42QTF1HqiH2qBgo5",
  "key38": "4m7HBpdmYvnGHKRDPDK8A5cfzF9gv9QjzuPWNubaQcas2JCTWBBD6QRYwHWeDBF1WF8EuQnRx7NVo5Avb11JJ41B",
  "key39": "2wdBm9zG1zSiAxKcrPxoKK8fi3B7ZNpFYpAbAQ8rc4SpTh838urpVdatwgkP3C219BhGZQhpdh4ibjzQVRrpHXXL",
  "key40": "GkjQNRQmVAmw9QPkqV8p2GiEXzvXVijmcAMQmAApMivfX4u8Y8ZxfSJz2RRFcvDC5ba8NxSXeB34Rq6Kibn5RZR",
  "key41": "4wA8vPsrQmais8xyWjJtZoSr5rM6xbZL52hLbQr1nPePJSKw36bW5579LaeXVQwVHxp3zfMieUcHYpmURL5iTWWN",
  "key42": "5mdTXu3ZTfARHyTC4JHMf7kgui9A2wboH7uAy4J1QKAUrYbATd5nEnEKppPBxxC5Y99vkfHjFRLP849KxsCZxZkY",
  "key43": "4jn26WPFgHkJURBYhREuqGuzUyyTK21qUD6FD1F4KNRBYJWicayy6temQb2U4JQLFyTx4kiQz8Ubqjxms8erFpq7"
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
