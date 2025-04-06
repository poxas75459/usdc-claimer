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
    "5gzByfsTd82Ze3EobC3G7eNFgBEVqznt2r8BGCzQzuPmZyMBJthT8LcbcKm6poyKmL8LTwTnouqV875A4vvy9ReW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NjCbwgfkpTX1VyVJc5xdrUaxnXYwDPV7GcrZdi4TfmqTEh9Kr7eZN51r25wRm2wZgSMzJaH22dWXnYJ4Bprpfdu",
  "key1": "4H6EhHxx1ueFtYWv6t64oj2HeYhExup61TgqXbQu7jLZSUmaGKBEQCKHbvyyLBHXxPDexksGpqn3EkY5dqu2DSof",
  "key2": "2cTCWMKA7iiV61NYTquDUkxnaMxCW6fELCQdhnEt9QGoWUGqejMbfaB6eSxkowCjBmui3a1YG6JHjcagvmY3oW3B",
  "key3": "32NrJifZx8Xu8PqSXGnCTmMcNeKksb2jANG5NUnGEezxWt3bcRUKXj4mCZQWtusja2ThacGEzjzG12W5c3tBYfAb",
  "key4": "3z1UWxfJQpo9etHHb9ysXCNytBAMRNVGQsivRy4FJ2EwPhrwDedYMqzPByY8yHF9mLCjt9Q513DDX2VmA1phKfNj",
  "key5": "3cZnkQ2tTUb63Y7b4iGx1zwgn7Fy8wXHkqJkr95uSHpUXiyDGNFrrxV3BH4PjbrCf5HR956zvzVMAy8M9QWE5YHS",
  "key6": "28wXMFto92iswezSKhoXcsrw2JtKgzY4Y7t8f3UiF7bHjSfjAJGwXAtXpJ2cDVUeq7FkRSTSBy8nQQ7YqCbq8GW9",
  "key7": "2tSxpX6Qog6RNv79m9eR8knA91QG1M6scjDz6WB5oLHYqXkZbpKXfVM9bZrFBJrN792hP7FqqasUoinzmppVKAk9",
  "key8": "4UxT2ANSuzHWNxqGZ7nk6jgm24gx8qFqgKmdbModwh9go7cWjfntc1QubzfQTLfy9it6aJU4Upt67LLodwrwbStC",
  "key9": "5wTmPt3uKHo8d6NWzdmBybZq7dtnEQj2yk6kCswVrg17rg73ibcxAfj1wn8BXZz4XN8gZzkFEcLhhhGhr2MMG1Yz",
  "key10": "5uxprmY1bhWLBH2XoMqwcaxLxrd4w4d3jxRQiyVPbr5ucMBKTLqrYinBigbv2B2BewyD22hxdG34UktqZisx21H3",
  "key11": "2Ydf1WucNdBTrLpsaFExoZwSAPqE4JMkDLvUmaUunvuhmwtTxAhzzjQuyP3ZTMyMn79x6t8WMW6sWUxW4LNxVmkM",
  "key12": "5sLPtgTgYgPVGYNGeFPy6Tf9yBVt42wchiLghuz2MmvSpkjRHuh5h28ZkWDeu9pTY592QryBV5b9UFCEJH5ZPWD6",
  "key13": "3yNJmND8chj6UkHmvEsJc6EyxNJrWka4wNckF5eVBshKcxUn4A7wZgK3YikqZeRVrJRaydgxvemP5wat7Xs2K53E",
  "key14": "Qvgt2qSQVBrCuurTzC6sdWVqRrWMRH9wuzRy6KvsQrTqyHw365v8qW63tu2U9gxXBWyQcqM67eBv4tkFp3aabua",
  "key15": "ymBQFFuwMX4c8xsep6Vn5EEzpvgU3TMsc8eBFjMqppyoJmYkh5P99yBNmuEXDi8ywBGvqbSmcy4ezmhJ7RAqmVw",
  "key16": "3jECHiYw28NSGF95iiPyQFY7kYx2d2HgJTeFtNtjZojLkXRdfj5a5RsvZvs1uakQSSufysYthLtBiZv3aDkHvMSY",
  "key17": "3ZRBX79VYJrYuK7kSSkZFkk5JnKXyidSNQEyEyPyJ5mt75EN27G7BRoGqGu9EYxXztQPFKnFs3UoHkrrdqQ9CxER",
  "key18": "4sZwQRz9bkunAtZnxWGCzrpRqVPtpr5MjeBGz7PAJxZVLhujiNiXCwMr4MiNzbhbKShrYMwhR3n6sn3kxXm7pGgN",
  "key19": "5fD7ikRDktVX7RcwUzyHYKhz6ysg4dDeEm3U3D58MtaDvQaGL6k1ALMFjD34z841Kse8EPrjWmncojVZ6hpcZ7jb",
  "key20": "Ky7oPW9pWh4XG7mi4y5bng3yafcbx1ff2X9jh2pGX3pz2Ta6W2yp2L3CjTnrLTwVditv7ZfDhea7S3Fx5ssiiro",
  "key21": "2TAf4zSzxVjfM14trsiUorPeDnBkzZgy9GigcJ6V4drbNm3xKQBAU1LVycigXLUDnHvfpSJfQ25JxCPr97TYAwV9",
  "key22": "5uSnVJMwCrBw32KRPmhtNgfbcqUV2MrMXqj62ANWrxV48Wsn43bWGDQXoEoCVFKG6CUhEvTifXoeeLDworjsHFTZ",
  "key23": "5U5z8oaWs787gRg4byjaqkjA5Advs9ZqHk1LnhW1X3ytDeJNQ5MX1BsCDfe5tN6S8VvmifQMf34j8iCx5f398hv",
  "key24": "2j2ZGU6a1ovFkMqp6vzbfkDn4VWccEMW1w1yS4y5syRoB3VWC4jAeKV8CmRoUfgqhfmK55qA5sTCuyiMudYgXhSn",
  "key25": "4GF4dtd4yMX1CGJXvJd5menp1Hw7ZojvxvFJC2mHQD7U6eifmrDepi12hxHXTaKjGt1mSQp8YJPdyZBXaAX1JMXV",
  "key26": "4TrNiyaytivnBnqqwuXL22t18xmm8MgBBYpGhc4J67g8kss3ecAEk4ZuXDc8UAccjck6RDzvtXbe7U4D5xMf6DmR",
  "key27": "5Uog4PyKothzEJKxxpViDMfu5qMoDsH49wXZqT7iGDDa65rYQ1buWFch4mcMjZBKJoGCqgTDcpSCv4uNosHeRhgw",
  "key28": "3gRkE92xNo3dwzpUzcK7kwChnzBKKkRd5gd8CpnR1FHEF9vyN3bYEkPxBnKYQ9Re1bp3GGEo5KqbeZ48b49CAZuo",
  "key29": "2dDCwcysBMZjB28iARNoKsDhDroFUjvvGouMm9djXAoP4WLK7MjsbSMDjLb58Ubr4UeNg3kSweFNfc4BviteJGZc",
  "key30": "5pFjodBkRHBg3MTVWuvBsbR4VnE1UmDrpnFNWUi6bs7DBz8iCgwiBZrRHyrkyQNqQ6L3Pf4hBf6ERbziDRVszTk3",
  "key31": "5ZtCxTiBX3C4txBrvMaGRjR5UM4VfanjPrMuLrWfnnBs4NWfgnoSWVSSJ8cLE6sFaRKYCBDb3D6b9nVBFWc5B9xn",
  "key32": "3dkjPcgqyd2S7WZ7W5eS1wSeQng7zZbgDCz7esq4fssfpg3Tzmgt3TroSPR6b9oRsXpJUuo9YjZxmzz8DAdYGLR2",
  "key33": "REGm8Tp1XARzcEnsp1ab6LPS1kdR5P1gqAB9X7TWURGXLud8V1JGNvD4mY3gZP3UGsoWkm995yhbXSRvFVtgM2h",
  "key34": "47HnPYKXB544xgb95wvBHHyPHsEKgjdq2nEr2QEUSzib9BqZfG2qBXvb6od3pABvX6TdHqEJ1MfA2wTrv5ZYMXxy",
  "key35": "vkyEbYWhqeRz4x46GvbmtCdY6WEjwantd1huQkQnxdQcurMrSrL1xQjZ8mhqeA1K5vDJfksr7ESGjo27ksVy7UF",
  "key36": "gAAyQhVe7L1kdPN3Gh7gj3NheyJTdVzEjTQPsWkzHfUkwhnmCewWpN4PQgeSKm8vsUkLaWNrEPACDpEZWc9yLaK",
  "key37": "3QVyMXvNTsuLBidv2Wd8XsNhv9D5SCgVMZqr7APLgvcWfQBbVzDrYv1tcTfETBrbqgpfFdVLZAXfTcEKmZsqwHLQ",
  "key38": "3J8R4pAiTq5E1Ay721hGCodab2BQzTLdtqxekeMn2dwZPfpTerEy17cz4A3r84x5aZwtJXWZt9iSuZMMEgS4tXAM",
  "key39": "2oSo5K4E7M3oaqYa7M6Arn1EcM9yXfornsHDUTk7bQV8mbptktAmnrs9bF6AvmkHCWydPjrGFiiF9RMMQRwgxH4z",
  "key40": "2kGUn6qNwEXWMsfYcTqV89pvKeQeh8sLi6diVvCKFeogn7CBzNzyevcYFYYC2TBM3TukK2f8nPTvcc5cxz2wFqWf"
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
