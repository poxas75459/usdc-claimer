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
    "2rrgonjawzPEyzRSMfV1ydZdCNnfvAwRyHHUkNhSxTuVsaZZkGKUC5XrJj4PmpDeUPb3ppEAvLPe3tTMB3BjaGh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QzFUft4r98Av6XUQLWs5Rbyfwm81otBzVWm58b3C1yYRGx77wFLGzKeXuDNQA2RSni3UTzMe37btunbYJSnxE4r",
  "key1": "2QrmkkYKMQ6eQw95Fy2JVsGqVtKWYQWR4UwBuuVRaCL1DdGNkJ4CJctF5Z5FHVeb9LRppBoY9B2RPdPabe9uBx5L",
  "key2": "3Ntdr9hwLxRN2t5w8AY9phADZdcczFBYo5WCBBBbVDJPeEFJ7FUnE9cBavLnxG5YAzPRRkmzaFfBuuciXZGsDhRV",
  "key3": "4RN8ZNrBNVjN22QH6n8ry3XoSgPttZLW1EZJWHABCgPgJn3a39qnafzqWgRPqdbfpG96u5K7MkbeL4yQ52Dxs32x",
  "key4": "59AMnkXC3cT4zM5pGU5ucU99TZLx32JQfBcEYznSLVeozuCumzao5NSpcq5C6RKLYU38nwRA7bmXXNxX7VmP4NW4",
  "key5": "47mYLe5J3oEgFh5cBrSRp4fpkiJ5CvyCzGLFVZFJ1T8xGtAk8K6UpSefHjjKG1UzRGjRbgfrCtk3aPgHiWXtGGwY",
  "key6": "3prAm5ZMwGZc3gTXDxNq6fDiUuYZ2Rn7TqkMeFpj4bxUosYrdAREE9hPHsapmiQEqgaNN7kssj7qaZNpavZfetiF",
  "key7": "GAxwXM3h1EUQyb5wRiPo7NvdwXoQygQ4RENdZjghe1KxUodjXi9KkFbssWCz3APaAyueGWsyHJuMvGq6PDDt4Bn",
  "key8": "4RfJ15f88koqVwHHS1akxhv7yw4robFLAgN2spabe6Qjo7WyKqWMzhJQa2HKXh5HeGrKkk6fvgJkwCsmHPvHt74",
  "key9": "2f2feza8tKbjCHdp94hvfLLiR8igRdE3droPzg4dgoiPUQUdQ7V8rxT4okgqRd3Eb4snBb1snqELdmjkuyuKi6hv",
  "key10": "4ReJrdZUeCVq3z6X6hysUoVW4AoCiVYKTQemzoQuLmo4vGi6w5VAPtJk3xzLw5WCj86qhEpbgMVvGPDGTjeuaWzx",
  "key11": "5HB9DQhATBeopbzFndGwxmCfMR2jVLb6Wqu8E5w49kpP38ULD8QpZE8vx2aVphY4Xa7fbr7dYDZ9JBNbvTFgsBka",
  "key12": "2NxoUeJtijfxWkDsmXwA6sb2VPYmzCYpuHn5evWp36mBuGhKDHGWnwwtVA67FB8iP5gmdjrXKCdAeCGrf6WKyP8u",
  "key13": "4HSXd5JEELrGiP5ceofeLMkhv4k2HCLGHnjLXsG1ahE97viZximfZBJ7cYzpdDt1WVy9c7yyW2LCxQqCUXyiHmLq",
  "key14": "A9E3FztAu1XtJWn2yRVS5bdRyxUKmDoanYsB2gWBbveB1f5vCMRXPmRUDZrjdHEiFfBMdMp57V8TUcS2a9irArz",
  "key15": "5RjbM9V3ikqRoFrxd9bz5ixVMMTJx8k1qXhUMhmwTMDbcoJK1HH2YfepUGD97p5sXBxDwTAL4NX9EtD3x51tXd3",
  "key16": "YVm6QrXzZnCyDuDRhwfcs7QaoGRxuPQqpAbEqJUucZrZCshQ3XEpkfLUQuandHQSc7XXVvwyxwzBmfGWgN4kknW",
  "key17": "3ddYRAyFmtCWTSnVc4gbNER33EaMahoAqsm8pR2xNUoKsPp3SZ52kwpJxm4NL55ALEMz57JUE9c8ia79mVVCTjzu",
  "key18": "4r93MRcwssSvdrfE7Xc6Gw1QKio9Kjyg1bhfBph9wxkpTGbk3QhQtTTyprFsEfd58EVV7bcV8gznmmrRLifoN7SQ",
  "key19": "5GfG5rC9JMBAdSw79NGPJLmHhBMfBskGn3bs4zhYKKs51EcP1mRjCh7fd2irTy9RZvneU3cEuhQMAyckk2dyvFLm",
  "key20": "32WWbsptfSCQ9EBcJNCDWTgQmXRhr9u1gBgRWRZcvbPj28oG9uyrJKf4e6hyYvSjDYvd6YuEcahFbFNLRpKkpDry",
  "key21": "38Dc84JV2YKgnQwb74QG1J4tiPSZyBoiW6gMBww8brjnQYVZVDkPsxD5ti2EutjDc7QfHAZ8nvG4dtusrC13K97i",
  "key22": "3ZiiHpsNNQGoxeLiWGphXDpGAwsCP1yfZRwFkRpvmQxUsWX5kFW3QtZDvszZGavWc9wm4SrVn7RaPyacp6eZQKo3",
  "key23": "32MnXMDeQqdPP1VHUMcsjrmVyE78kTfDNfYYqK167UuVNHB2yuniKjopKgNK4CkTXun9woL1c9NiQJAhXACcNHaT",
  "key24": "RnJhEj4nYKSxxMbdZ1bBc8iPsSBVXYZpHs6gkuQ53KCT6J1wyaq1DWJCUFcFRbnWTTTyUPVyzHJb5QjCYGC8VVE",
  "key25": "2gVVFoMHbarZfnE6nKyD4HLFNn2YsLrG6s3uiPiSJWDT19r7FW5smqEq9GwtDFdsAaeAAg8aoT74r8Bi2BFK5wJJ",
  "key26": "2Kr6kvQymifLVr7C23vkdpbnDY7pQJLoAT8jW86gLhe7FVhsq4XbFtRN1jxAFuiovAHuVsgDs3fYGxefGvp9wGty",
  "key27": "5x2m2nCwwpmjPBy6vt6jgcwLqiNn8mDmmffzsz76kZepzm3aE3C2NG3JLWR76yhirfMaYJPtsmxZ1d1mXmLVcdAF",
  "key28": "2wmVZ1T4TxhLM6xtSCYSL7QNyTcZsJLTfzJ6MqNSRR9SR5tNENtLRbZBosUpeaThdVAf73nYWWaG9LyiPAF2VVS",
  "key29": "5q3zJ25LpgF2RAKs5f2qCqqBgFCNjisYPWawVEj5hYFkmJF1zKo5omWLeh1SUHVEUbMU28XaMNVHa8ZFPfxfE83y",
  "key30": "7bNyfUNiTfzeHx5AZDFR7oQrCTNZVwhy5p4q7azDMKnEsSRNAmpjac6DQFAsjKBsCJTzH6wmT42LbHVN4mTh7kR",
  "key31": "5wbDor2px9fVtLur7ZhfH8aaXEw2F9gEFKo7YtbcWZxVfX8w3ANC98uyYBXWgQtzMd9QEsFywCCmZHcMviC29gJD",
  "key32": "MAh7UW4CTmeb87JjrGSuKHC7YrTJDAvzfB3isCzvEmNS9CsNvej8GsNkyGb1cde1bpcpqjhYdtBvKRz2gP3fm4k",
  "key33": "473VQHsCztQXZ5H2CDekMXaSSU2no2sS11UfeGQbW65LEjTUDmgd75FuwJWH85CSt5SCLmFZ9cqvmhuUNqRFR24R",
  "key34": "f2hjbgYa4GRaqqrA9EuD2y8MWTFdXeFFExHPN98PnbhVqXKaU9SmoFZ5ynvD7zEQAJT166WE84iSL2BqCEUmu3Q",
  "key35": "5e2HSj3Ayvpc9sj3qAZFESNcQBF6FTePfYNeq4QWynr8eNKWLNANbUGKj1x3ay5oPgh4cbd4a12YnnwWYqRHZbx4"
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
