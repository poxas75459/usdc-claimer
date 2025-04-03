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
    "5y5gYFYW9J8Kd3K6FRMzvkYA39mTcFtNNvXZD6r9pf7p6qpWr6qhHkrSRBp6UVdSawaUu39PCsNAH4PEoWYeb4zY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdL5tCMb2dvBi2gebFfLwMmerntFrtCDFKxBLeVcwPx6r6ePGuRWFtvSgG92dhfXWgR5wYfqgFVFCSsmgutr7WT",
  "key1": "GCWmcnFzCMnz16CaM4ZLJyrEQaz66qwjoDujveMGYJLRYoyJ6PpApzh9qQ39XxjNjrb3oekqCHUaZrGNCJchNN6",
  "key2": "57ns3pgo7oL9gLKMnsu6oYbkoxsy9uDkSrXH14QMfvpCnbFWshjX3GSkqbDih3cKW6VTQfu8xhX5W7wFN2z9XFFr",
  "key3": "2GuPwrtwttyZjNqfZqfjetMjZyJ8sdjwhXW3uYSR6NQhyXnRw1QXTY8EUJnK6pEq1efKTHTQyv4Cgt6NAnoik6Pw",
  "key4": "5RErWR1bJ9dEcpAycgv3jiMEqommcRvHkyoB1EPkW3mAU9hMnCUbf3oVHirNUG6Ee5Pe3rfG9T6uyVk5FuKdKfeS",
  "key5": "4vPz5NrYCE9BdovP3uYX2gZ3xQZqpnX2ir95dYhJkSVP7ifB5Qa1xVraYCBrQsFdx9Zyf31Ccb87UFUENZdAK6eu",
  "key6": "2tqWnja6heBZBUE1owKGRZTGHGRj9e2XNtmGJTMDjyARxzaH7ejanjs6RCL3g4ns49g8dz7YAWU6ccxcLhcy8FqN",
  "key7": "5ikcRxx8TQ7Vp8FAnNUdYGTF3SEKyuc5gH42ZBkPvHZfBmCXckL82BzzHs2wGXq4B2g9cnavFLrUNWe8eRzmQNuC",
  "key8": "5NouabAzP2VMMZ2knTTjchfNXckM6wSTcQkqP8gLKxAt979KZeDF7DCah8uvgexn3RRRT3m8dC4jvPLodqwi7LRR",
  "key9": "5HkyojeehTvbcwGwD3Rtur8yF9hGwvV5y2ahT99NVP27XjrMKnRfG4pCTgHrM5nTG5VZZJ1mrVRwAuBtmjLSieCM",
  "key10": "2f17kTcUYinPXX9JzKCs5qbYQMwM5DxWALjqjbAGNUuwWYH6cnVag3fVMffggQGyqCQYKc3aDNoMvahYB1n4Mvkh",
  "key11": "4XQmnqcDAusfEcZKPUz3n4ZWJhiT2cN3fpMGMdJ6SvWEXqWRf7wKJscZKzYoKUjJQASdnBFRuqKVWv9PTKVWBcsL",
  "key12": "DTj7S9cFwUXEZZ9ywAzt5PSwdgLbKZNudNqddy1pZ6nnrEA13K8pVCPg6kNRhPdKSJAJaDjM4BgmyPzCwtfZT94",
  "key13": "294hBD8BHikQuAsWZ6DMNds61r4rGfSC3VP8znRzHubZg9Dub9oU31JsCZKUtDhjejdMzFdxbJhNGv86rFEqVRNi",
  "key14": "ePqvGzd1ACDUCXjMBCRnzLFTw5qSy7Z61SJxPzvULEQYTnhgfzjzaSyw6ExkDnxgsFXkJfi8MWTh86Nfwh3h8Fe",
  "key15": "3eqExpq5tPJehDDSU3Yx8gVP9nqAHiUuq1zcoVivPxFo134BdxvNvxHoqxJMqNTpV5YkFet4JjQbMjgntMzS4iTA",
  "key16": "39wqyquRSGstSgyvL9dSKsX15dniorMTYxHbSZX6zL5hm8Dkj19eEKAWvaqR9j4RDHLeGKLTQ6C6hZtUt2W6L9iG",
  "key17": "3NNjTTy4pL6QySwM3wcYzFyEJTUdkQVpfi6VgqWMytLLWNZK4BQY1ZvBsfSaqngKzZ6DF4g7jpV6uwUeRCAym4uu",
  "key18": "5rtGTnJMw3yoWRRW8XixUQQwzET5KnPZhXddkyHUc7Ca9gJbeRx8A9WHjAFVFo4GyzvGnss6B3XqiCYGTYvvjVVW",
  "key19": "vGxfNtHz7NPEwTDoUFFTS6jdnkeKEVdfEQTTx4y3KW6dzBXAEdkXTQbiG6WHHYNoBpCWck1LmihNPuA8CfESvKF",
  "key20": "2bQ4Pw8fdeYwdhVoZmMLM3CdySapsNTeZHv8MbAHGFYvQJKyukH4kvTSBudQ5RUUvwRBYLX5644SnF3qf4D9NiKA",
  "key21": "2mWVoj1SX3Mk2MnkWdvCGQKdLZizZYeuVncGCzaWBa5F2tKbF7VebMRvip1RHVJSotKmP41obayR64nrCWxB62zH",
  "key22": "2L48vV5fKFVdD1pSka7mssukJok1vohANxG5Nqm7KTHkW2EmgQXRkBSpxfSV8zi9XCASocHP255ZDDr169ZdjZyn",
  "key23": "3aNXov88e4ww4iLJCdtNjU9fEumcja19am41xLDSyavFqhTJLNzts3cPgS4s9HxVACEx9W5RvRpqK3kusjvXuMNQ",
  "key24": "wAuAEJME3WdmtB78MU4GiV4v5CE4oqbGyiWDrggzfJr5sjtkPZXYXoENwP3h9AjzzvJi4kGorSZa3nEJMYh76Wj",
  "key25": "2kTTLwmYini46JawrzDUUfouWMwCsWwMMSYk9XKwW53Satdmv14z9NJonvzo6h8BqgL34FvwDLieteJVKog594po",
  "key26": "4omGt3KoPqVnujDAc4TdcERYLRmfbiNgbNRWFXfr53CNHZchsETap27VmarHdHon1brimPDGCpJhMk3kmuDABoCU",
  "key27": "5w8jYAiRVJfzFnUmzcK7V1SWjw8PrVeanukPDpDxBpadmeY24DdwWrQSQupxS6pKZ9h5JCafsh8F6Aamb6v5P2R",
  "key28": "2dfh69q7RcGr7cUiW76ddWDPZq8iPUkz3mquaxzcEUh4NNPZMC2LUTRNtMMxVnj3zw28NPJQvNakVgL4RoDhyYze",
  "key29": "47ntZbWa7UdhwhKt5z757DGjKLx8uBfPiadSdQST9puyC9rf1UJkT6pGPMbPajjXD1REbBDvKCdXeeMhcXyJsWhS",
  "key30": "4pmgUkgC3tLggMtStFZnW6FZH5fAtoxAT2BaKCHjWdcdWnqyH6PLraNML89MEQXhcPa71Fqt5sKzGPBL7GmzXx1c",
  "key31": "xepdrA4LALq8WvXgt5Y4qdWY6xrNxB7kXYoH7bDdz57Rrh3Vwqd6WbJKHmJzWoMnnbLwJNJqv3wWUmBCq6vu8LK",
  "key32": "4HJoG3Rk6N913B5V3AW3UpGviGVhuiB6JvGMTnHmZNaDmFAhrWpXSdgEZ5CBunSviNd2JUVu6YYcr45PcsFfezLP",
  "key33": "2F8MuGc56DRksXNRjeT85XnbZuqKnYvUpbDMadLULdB66spnvywu1MaVGnnkzCx1HGG2SetXfbm5Ki1L2sMTuE7o"
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
