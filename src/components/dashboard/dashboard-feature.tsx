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
    "3eLj52Xx5yHwoWfy8bGdNDZibgzVkqLdzg5MjFpg2LY9m67JKjV3hqKLhT64aZtCjic4t8fWoZi9w8aAJBUPM7NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htLU88WES2Lmmra4Mu731GKtr6ke3Zi85wmLXVNE8fKtcXZEHT4RMwbvmx2Fy1J8D46tTrpVjJxNkj6dzNkaLUM",
  "key1": "5qw91Yo67zzCN7Rxhti9boGpn4TySPCcwjd1Fydfaw1AHJ1xtNQPDDyTY9rj21HR4eeK17mh8GxJNh5fkw2DjkfR",
  "key2": "y5YDBcLuFjJwsEsnMtkN7TP3su9tearmbJRKKtVpX96P2EdyD8ehbM2pHw64AvG7BpEuXQXdLGwezPhE6byFUYg",
  "key3": "XhU2hLdWhCr3n2DDMm5CLyiswkB4K3N2WFZAxjcc6gCCKpaMVZERTdvxGzbNKshYPjEafzC2vE9UuUSWXGmsGgc",
  "key4": "4nbGXM1UL1uv32EABN43E1UBJHbtzeacA9u9iJ5teumUoVjPb7CzCyJNxy6Y8VkyCfoM13jrd6jAhzABMejFcXxT",
  "key5": "5XMcvQfbmaZjJhfwy7iAvp7DfDvtfCRVYdSx8jpxCBBzr5nRiHDyLwZS8DfuaHM2GSfD3wJZ6dtPQ77nfQnCsMs9",
  "key6": "3bi97PJeAG26kZRMKusDoCW82VX3XAATK1QSmvpnNYpsCGHFjCqUL74nNxZcKKRycWYcHzZYAH8zkivaLaSHvJJv",
  "key7": "34qqn6RwNiq4ZHKhjJMRiXwSpFd5tLPSAfH1coCz8o44PsV4KcGeZDe2LB365eVY3z7T8ZvaPkNmt22Ect1CBVov",
  "key8": "59rE7Wkvw9wzJFgEot4JgJTQbePRSvf3fuDKi32cpysE6VybHWQqcLvXi8n9thYAcwrT9bFUd3nN25LmujtdrnNB",
  "key9": "2n48oG175amWzZnFk1DrrjJDo1EoU6n1yU1GpJcZ2JoTKHZvprGmkBRAaLJd6iowLDuGt89X8uFYzZGK9zjXvsEo",
  "key10": "2FAyZ1qBYd7kke7h3VDeX93jvvwFPVsoiJ4MQ3DRtZr5dbqSodoaPKJbWS2kXw6emyQuPRE6E8yGqMtR3Q7rQvTQ",
  "key11": "65UMg6D1zM6fHhxVNw4QxQ8AAQp5NvazwksqGALCFMtsT3MeGS1ctDVUG7tuiqJH3ygian9VceV5hLiaaeCQNxpX",
  "key12": "49oRF41D6DA1aaYugfqjcqHjJW77YfC1S6Brq2oQcxRjJTA5hxbtpxrr1PtNsgNhuExJVv71Y6EYpErD5zWB3rE4",
  "key13": "27VVmT1DXNdiegXkSFc38oyjb3Fa5e4mx8n9E1rjrYKGGxEuNRS4rqmUcFwPA3kTbeKupjR5PcjvCaCf7yvXjRHL",
  "key14": "4t4PxAreA4V3CQGNa9oFpNgh2HzWw4ck4xuvDZF1ku2yjFvFwAKBSuXYVQy4FLCJ7eMX1dNtdzhVYFyoKom7BKiX",
  "key15": "3qHf6MHr49y1ZH5zqkRGrjZNL6C6C64JHiUzRCSdkXzxqnpAa4a1rpvqLePjCkQJFPpKQ1bhAqXjq9PmekndvZeo",
  "key16": "64pzWjekYYtg13uui6zonxwN8ydDfnp8QQALy7Wuh5vSEQ76TWYwEKYAtZwhdnBi5JoXUwJLguQ4YHBtZNmBLLhQ",
  "key17": "2Xmjxb7WwS7E1xZHNPaaTZviueoJ8t3SFvADR1vg4FdjYm2DULvLo21zeTrNhhZNfgtn37gFSojJmryyZCDWRUgS",
  "key18": "2ziUcFbqvtoixGNduXjeoARpooSrR4jgPc71bXthBjzKf6yQ8BkLPpWrU92YZJs4KSSYiPuKRccHyT9rS6Jo8xfH",
  "key19": "24weEnEDTRoVSo6NNQY62WDvEMv28WirayjNsc2jcHHy5PuYsFKzy1Av7BprHiLQ8F12R4khVTJqcpwcMy17EfkG",
  "key20": "26DSCu8wGNzBZTZ3CiRN7LNGaTBFcmQunLbik9E38Aq8zSNfeGfYvAfb1RNDkei5N2mc4KC2gtW7UnuwLLa51CQq",
  "key21": "3eD1G5Uzk6ZWB8WTP3cpfJa7q78xDbXgLtDU83EtfY25pKcuA4rTqFmyBkAJ4k53Msx5C83KwzdSgqfWheEnaF4n",
  "key22": "2BfS9SfWF8qD9MwQrawC9jFaKkX2fB48SH2hbHi4nQeAv2jdXGzTfzQ22WGqWmhMHgHsU3t672n7oGo6MUr5RSsX",
  "key23": "5cujmxpj7cBSejDxCVNXg6yvv5hyDm46QdpajkvowPM8jHTvoaAxqFAQBV65dmpQmyrnMFhmuiYeP7VuYwqF3Kxp",
  "key24": "56ycVQaKCbVfNFr7PJ5zj4k9HJ5deyC64U8dSnmLnGnPE2pcpo9LERz2FJM6RVdbS2HPVyUvscueqieTw2SmXwuX",
  "key25": "SyXNcbL7Poayy5iRMAzEoMT4vszG3cZwHoguPi77T8RnqXC7JS3uAh4qaWcxNW2WDWxz8negxRnC4Ae6h2jxwpk",
  "key26": "63AhfowUvbqipwb2fJ9gyYDgi68VBUCmY9PV5cfCUKNNu96embwASjaeefu15E6ftFry8H4JTXZjMUimBmRxZLEC",
  "key27": "4MGqyxYKfFqF9ESpU98DGrAjUqeiD3KCJjtwjw7xdxcvSKu2kRZ5bfP5JD5ZVK4BL5XXsL6z7KnMnzkBRzi8RBdm",
  "key28": "2TZYDknTtD4umxUo1Eg439mTLz1Wwgsq71xxMgrJm3CDbjuqsXN5EaUWZHUtxr7KievDpbwcQKJJvJNFnPHtPumC",
  "key29": "it7pZ3XZCDR6SjRhypvA5wdKSCgT7fiSFPYGM6zFqc2Y2pzRR2epu1wktuG3yJ6KouxRZUzvkMNGHZfvzJFDVyj"
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
