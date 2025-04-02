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
    "3cyHR4Ncsaz8NYWLJPYU6z4Udyskxc99iBL3umtyYLiQNJfnboySzYiu82gmTXDG1BqNRFxLgPmpTPXPGXdizTi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45B6UGVfLBBQm5YqaKGWJdG5zXyUQLUzBmkfifvr9TLdwh4dbUwoHdHWv1L9v8qhPDtbeUxXDuKa7hsk2Harx39q",
  "key1": "1L84tbmdQ8EuPQm54J3whENKUVh7gZUS1uY5wUEnwKaJoc9PRpFXjYAVM2x57zz9SzFAEoVgBc4be8MB3HpumWP",
  "key2": "2sJdDWq695K8dUisQ5gZcewrtgMMbck5SDUpxZNyPGTBMVCw5EFbNgRYMQf6h5gpD7GqEjwUVx1tn6KXhU2xhXKt",
  "key3": "4n6JFJ7Qk3UrtRHpP1UesgF4tgKsLixEvS4oaScM3nDHSE4qTTe7dqq7nMUjxhz2nuVWV3U934ZNh2bvDfQgMtzu",
  "key4": "Mt7vHPvtLa2dmn3A6TwK8HrPGLyEHxd9knFn3rckYwdqqrtU5kHryTwBTHGsERF8xVj41KDKViNApTvcrEY7VQ9",
  "key5": "4FxhmVKYbQhwd7jqYPBPj8585SsC6CtUya8w8753aGeccj7YHpjPcqNAWv242wZ6H1Zw1CxpAjDoZt8cnrrrUisM",
  "key6": "2EG7pjh39n9dwfuWkXMFqVHnpLagkekK8HAYM3CtREenWwdvjdpgYHU9Cwee8ohtBiV4r3CZYyguMCfXXW4Z6b6y",
  "key7": "jmnmVb2D78jMRuFre6i6VGB6DSNZQe3Sd5dQKHywsBUkW8Vb6T5wTzbo5RQTii69ZJ5uqfGWiSt7mu6GnzPcq8u",
  "key8": "8dLBJ8mYdiAf1KWsBCydHVizWe2uASuft3qRZbivbYh4ZuAJgHdw4KcfzbLMRAXXedQAquLPQ1vcStq7Gav8bA9",
  "key9": "2FniSNdu1AR8AceZ4JyV4AMX9FXFi38DfokQUYHkicAfZKaGb39PPvuK13S6rMfVe9o75NNs1Xz4KMT4TG7hegqQ",
  "key10": "3gkVHhnPSRYPjKwu1R7EQ23tmzBFXATH4xpcBFCDAvuFR76MSdNWLWCuFyKzJjPPUm6AJqVuwwDpwFNjticjyVm3",
  "key11": "fvdesmBGm2AnF94vSctpdqixFfoGkCNFy38h8YFvuV8KMwPot2tDVVhhnWqEuHsYkBRtJd4X8YbPaK3g1apLZBo",
  "key12": "5SZxSDtFRPM8xbr23y3KLu9XAjYAFbwGyFFajdSGSMszcy3y4A4YECiYxGsMctjvNShk8TZmnxWC3n9FdgfLWXS4",
  "key13": "3yKL49cddee3Q8t4vwai7DbRaQi3G6RzvhKc1VhiY8PSW8CcHYVsECowRs5tu8y7u8U8ENVJsxh3c3ukeixHUm8b",
  "key14": "C49Yxc1LCjXvDVQepLHR6mhNLMuaunCEnvGT3H6ZpUVRHm5Gv9oYx9gaS9KVexrqf8yPWgAau7xon4LYD77fVKX",
  "key15": "5PEF7dgwuiRMJfxdTgkSDcLX6JKjtRr8xcGC3iUM2BfD1jK4u7u2hFEmNA65BUaZh7zuwpzzTikK6EanGMCr7Kud",
  "key16": "32HYaxjCvQPRjiudh8b88YeLQ58oe4xYSsyVp4x1MR9dDU4SkNLyvYJfCoivub6DoNBT2UaAibwEUmJoboNs7q5i",
  "key17": "2KZ3aTBueBZCB34HreCBs5d18TjFJn5KtFrT6NHqfjs8LYE2HJKFjcGwDrjfmEJYcpoDnMNMyWuM7cDQjq9JfhrJ",
  "key18": "42H6A4yuJU8hvxLByzuJeKwnrrE5WwAf8dW9PnbdJPtK75YXoR5UJhVYGZAvBE39oJMSUFMJgFCMR3CEDfoyTuF1",
  "key19": "3Ey6xtWpD7EmDjPBsDQpdFo9wo7SFfYVoLxU4tzyXUY1f4aGrwae3q1ZuodAnipfg1EhidtsycioqWRmF6gksXGK",
  "key20": "3XHYav94Md1Zh5K91mbiGHnFde12PjLzPZWawQmjWoPWiD3HLgSoaPmzn59nf15sfmjPTXj1ZQjVnqH5g5EUWwJa",
  "key21": "4LmyQKDsKvtS6D2Y315F4qUPGaQxHMHUdPWMwAFfWqPf8RwxpejQjJXC8ekHjr61HchGq8i52pZsi5Z93Y7c3PRF",
  "key22": "22e7hLysJZiHzN38YAgzxw3bmXhpJZ3hjhsytMttpKKrVtzc1nSgbdgTQwpHLLUiFcYqZSrq1eT3k6YBgtJ7sDsD",
  "key23": "65ataB2NcWVEALGTZ6pvs2kzsYQrncJmAMU4hYKnALNTrzaQ9AJRcW52FtFQYEPUk7szCgdK5FUoNrcfgPy965h6",
  "key24": "2fKm4SejkCUu3DHTLBv7VHSk7iz3ji4BgvTd8XuNfXc1VeeHA5vJRZhDiSdBBKwXgMu3z7jnxMLZkm2n914Qv5Bf",
  "key25": "4ELJUPRycBqfDKPW2cR1v3QaW6nfusbt1M4TkKDnggKWaYDcCstdkMyJdWCcAWofQHGso7Pqhz6Pwyc1Aj7rdSHy",
  "key26": "3WqFD72sG7rN819unLyH69pHUTaC5uj1YaN2Ha1qBWmvGbGNc6nq1x3Ynj8Bzd9dz48NAaZM9mmRiVhkEAnyFVse",
  "key27": "4wfZoMHshtUywNJWhXNhqc2idiF7gUXWwRU4S4R8GSiUVRj3fKpZprgZGWaVY2wWbdMeHP1pYLAxujk3QznqyPF6"
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
