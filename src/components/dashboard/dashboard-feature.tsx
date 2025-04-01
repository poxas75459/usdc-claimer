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
    "5XtiTbcdWp9fDvJ8UeVK91dMQfFKgJw8BAisTfNCH6jJu5V7oSheWYae64Zmp1zj58noDTDtdv4xhXZDEwEyskCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42UWvbaBUjHvw7Q92ei3kX5Ak9vqXmi3xpahd1JMJJwnmeBcyYfATUnALGEpgCRW8ALgo8YRJkYCJmC7Y1vnqVZ3",
  "key1": "56d2kNGnnc1MTYRb2YV4gBLGymkMP4jMTXYtV6XGEbTEGhsDA8uKqgN5qNqZRDj1mPX9Wq3rxnLeqVHxmET8oDJT",
  "key2": "3G8jmP9e8SuYLErD5BRfZ9ev35kG32QFeJ1jA78RrehJ6bssn3VQdv9o797oUGpeLCeFKyzSF9xxEqNEphVsmMad",
  "key3": "3gsZs6f5j47358GD1xU9YZ7DXtxgrn7q2ptcDCzH9ZqyYzoGY5wXymQRujU2idr75ZKMyejpCXDjy6VAQ1stJ1vm",
  "key4": "tALsrV2uELAdo5pjjsj8ffhbw2DcYxn33xjb7kJML4qybo7gapvjHsXAkXviLYesapFUFJjDn2LuLGsDgVvruaz",
  "key5": "3W9RsvqWRWppr81e93rfdWiwdABJjsGog546RdtjWdRuFmnEcFcnUBCwC72wLxukpwDTauVwpkqs5vP7RBo17Nev",
  "key6": "4P2fzeUEuLozkV2NQB3Ca2Muwd73TADz8DKBXerzMetSGqiq3At7f93Xoctefu3bNDprvDxW8GPTa13U46oWAsSM",
  "key7": "49bkEHHQ7d2gZq2HNgvRYr6UXYWGo7Yhnj7caUJjSX2Gtu7LS6QBhgk9bcssvmZDbwnRp4LomozmmyyhmXoM6Bm7",
  "key8": "SBJX6pt38r5JawjfqSkdDdYLNEyvTpgMU2rP9ZyukMBCYExM87N2uXVi2pHnmqzdA4jmicTxWswsU7GjhX86uUh",
  "key9": "4Msc7nbiEmSuDWXsRS56y2VvTVZHk7bXT47XkhHMyAZQFuSYEo3zeCYD4SdkboL3AiCeXi3TXfXSFovQQRuubc73",
  "key10": "26fmtyHAkWEZN7WtDW9bwywWAnS9y7qWJ5xVSCxYPzc8XsH3EG4bEkELPerVnkHVZGyphRSSfB98ppjzhDLSZKBf",
  "key11": "8xeXLxc7hM47k921LKuYHSGb3r21PLeGA9X39vMKpQNdSog9doiiJexYv4FHdiC8tHmKoDmdhy7Vt6KSmMN571e",
  "key12": "2xpuqR8tfKcjaHNK18DhU4LMJ7YTAQbKFXpxADyqShYBoLDwe4oMCveobPQitLEkzQXDcK5Xpt4CE5bZK9jaKjNM",
  "key13": "Cramj7ptQnKBR2q3VQNo683N3TXZ27MQR2u1xKnyqzgzwYr5HDTDGbVBavFrhBo27qpNYq27tPTZfdoT9Adhq72",
  "key14": "4g1dVL7evm8LpeFBGDx1Ztc7zzarBt6DZLi8byiUvSuCGeb5KFnYMn5WwjKDFiukA8gVk5Kbpuu5AzvG9s3YfdCQ",
  "key15": "4qTGpCuHWhkZrcQixTyK8JbvjwZC3FEfB1kS6keuzR5E2vPscDxaMSd3VtFtsCEnMYjUjnrUpKUDgVDQP3sMzPQk",
  "key16": "5er5msce592c9M95xHPszBYh5izdd8aBMwLLLgdMMBuAb1K2V8fcqW93ZYtGQwPGrXJRF2tFHmYsThdPKhHStJRe",
  "key17": "2kSaMBp28GQXs7CFutW3CsujcE7PJP9ChFTJgcn93rmWSPH2EgBL7H5gP871caBoxCWQFnqjjRWdPuyyuX15Rc4j",
  "key18": "unqKEHcfow4beny3KQKqRe6DQHWAcruKNKMcMEHQQuEweN1ovSF4UobhhWhBmt8oiSLMpuDzrzKTsrq6wWnQKfS",
  "key19": "3J7eEhHoVTqnfsQw1xvw758pJRgab3YwDGZ5o7CDNiYV8hHhgLwpZ6eWU7TLqCGArXjPg3Y7DZ96N1nBCR2RCqex",
  "key20": "42wJfcJA13CbLFfm1bTZA7vLkDTzfMB9Pb7xeWR2Cf8LECMatZQgNbZMZGF114gqf9gi4dnSARxU1p2zpQ17v9qn",
  "key21": "52TZY6oTwepc6whGVWUvHfLQgvXVqTWfsfpST6bVun1iRtNsVGV4BsdMhXJNMsBhGCrpAsdUPrAMKZCPBzpftZGw",
  "key22": "2ow3YKTzvwxeKmuTL4hj9zsQekAQDMuGSHnPP1CdcBtTzunB3CczPN4vVBUktVCWejjs7ZVromgw52u1CiLthdJk",
  "key23": "3qX6gq8jbu9TZf8jcRfawWxvJ2XCvHciwbv82WikYpK7yzvkpiXLq1gFXcPaepmX3DAPfphBFbWjBRrvw8nTKNcN",
  "key24": "PKScXC7DFPeUTjMcWY6wm7QqkcRopFUf9MR36NXpVQLjSdu6JBpkJyte7ZswN3FY4fue3GvPaTZdY6rmn13nxL6",
  "key25": "5AKB1mPCjDWsgpMv2aNrshXVtCPvqAVryGjDzCAaaJYnAKg9wLEFjadjJHyS7z1FoykANLNTVNgtRy7nfik8xGRx",
  "key26": "2N79VkVZm6qQCptGLtJgato5cY4d49T4mrinuNZNRrq4jNK5AWoeuG1fqJx6CDVkxf1GUFhnzJ8CV8ZrEnXStfLn",
  "key27": "5XApyqzJB8J8ft5dKA5o9FqeAj7oEVB6u2imDAnYb5oycmwivEohyuXaGWiv45g2VaQJQdnvAb3dzAxbdLnhXKSz",
  "key28": "2Y6cL8GBhjfmR4JH4tw432bWUeyDYfpoEMgz1jdQVEgyqZMTPVurdanpPgaSMoS2wGDLhXrqh6ZoLcT9RHhZZVyF",
  "key29": "25W7vdooGDcW9XxW2ye6VhcRYTvEXxwhJyrbc35pMNYfTiMnJF9ofFyWzayN7TJ69qgmcHAvjqMQwq3nc6Ui6Dq8"
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
