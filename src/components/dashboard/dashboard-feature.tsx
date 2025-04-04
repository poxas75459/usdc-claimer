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
    "3D1fpMXTFj1tKLcWsnCV17YrNupxceqTBvFBhxoc3xbjvuYarEVxuX1Q7iusKN4FbgSQiHD9SAMcykacqn4Gu6ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fgTCuFenoantraMHGKhR5EBmd3dK8pgmcLKmzzxKqTBxsiiAayBuyaP8NWdhxHV8s6WMQzJdWPBz7FjK7oDYnpJ",
  "key1": "34a29rTYdnqxNi46DgCPCRjsmtBQ7QQEZi2AgcZyb5Lw7f6Va6aMnQr5fsk1rsKwW7dR4XZAQZArQNsoKFGPj7TN",
  "key2": "3fEmCeAjNPgj3WjeUJGTRtZLKEmx9Jr5HE2nS6AFqzJw89X3aiUFktdQ1UTPGEVh7AgcXnXqJhrZVt8e8pHZDr9i",
  "key3": "5FCTP7gLYTbjTXLzAWAcHjrhhdTvPjvb5roBXgK7KGbec2BUyfuw1nB9qh1McQbNtXBuV279uXp8AY3cGCMvuNkP",
  "key4": "52D1A5KoHiggPav3oh3P7s4rnGcKXNVsy4jRyovHvPW8uPrKKrEdDDHWv8h2UQDyvQV3EqeB5s94862CiK5RQkSa",
  "key5": "5K53xgZPGXVrXx7yVTB2mMEVvbiWEBsV6SMBqgGq4FSjmYF8gzRrYmFUgczjsUMFq4kCJnti46fuMMcqZhkbFTrr",
  "key6": "4DTycfptLTp5obbFycJZFdS26HekSY7EiCQU4B8LKhFHAAW4fSmEZ5D57rQSPMo2ebSGt3W7F9W5unV7HGW1cpn7",
  "key7": "4RYnz3j12He4mukL9dEKa9PsL6wxEZmm2C2nxrga4ZPqiCh2siCwhUE4pH8dU5S8kVh3WLoSECbccPkFwPjGVTk3",
  "key8": "56yyVfxMkyv87Wy5HHkdNd4aNxySnq8r2hYgsJNuG9AJNsJp37F4LWdf2E1FwCCeEAvm69jPQMbk2qeieyDTv89H",
  "key9": "2cyUtsAhoxVDiva4XRhBKwymtpHacQLuWbkVj7CHWSV5mDdEaxEpBxFnRwCkyWy7BeqDJLgcoLrPj2M1W5zKcpBf",
  "key10": "2ird6rNEtgsLBL67uhRFGUCLW8HW3jaLbowhiCkhaBEwN6GNLDAdwyLq1kDgjZpYZ42zp7cVG9aZG3PHoWNGp6E1",
  "key11": "5nHq4BX6T3ystYUvakoLhbtVMsnPosPbMzxdBUquqxorsT4ndQ2A9jzkkSyX9brsXXJdmmzceYjdXFgDP7JQZVat",
  "key12": "5Vx85w5RGLBY13CgVwCb2YG8hjf5344MNPD5d1PSQrRmA9r7fYsxGWL2xqF1uv9fB9u5n9wMA58mmjdvvbQzAbTB",
  "key13": "65gz3b9tC7DXvC6FUbtNTsyKjLsXPjSNSMU9HdqTuwewEQTQP6FDowbJmMyjkFtkQpv6FecnFML2NsbTPCKbZGDj",
  "key14": "5CA6nyS22fy5Xf2WY6isrdhqWjkqALpbo2ko7JLZFUGkGMa9HzZpSW6GPZEhxR4gvfRXSGNJqdd5eUiqveNnVJBd",
  "key15": "3dQQL2FajYC3oE63KMCaNZc4ot2LMvkNjWA819gNKeULZWBRuChrX9gvFDajvRGGtsEf2GX8ihukRY7kdAnURB9k",
  "key16": "35WaFW8XqqF3CaMM2sLwAAKLS5h4oMYoekepwkhF1bFr6shsYYHCtWyG3Hafm9hCc5ZumwJHARkWFGVW5ACMEFBX",
  "key17": "29uYQuGSPnSPuRUBcSXvoito3qK7w5Bqpu8GaNzdYbYGzRF4PJbboZXCwbLAi6guKkPhfoBRpqFvoPr4TcXNLYUd",
  "key18": "4cv7YMvR5BFqC8yCX4weQZzmX5U8QB8csJ35jnk1cZPVFGLspAKjKnmVu6EU3nzchpcsi9QYE6Ghd5w68uFnEMLW",
  "key19": "4PH29JPYuxpac26Lgo4urkkZ2T9bRcfWzPdqSHCGEwwxPgfP2rrB7mou36gwP9mDhjTK3Zi5PnZcTYk6C1fyYd2r",
  "key20": "4fYvQKTwRTjGSpryGqThCZfuFgFj71eMNpgFYJHPXzNizYKXBi5EYA1HuELXux57wWdKijAMnwiT7ZpAHYJ6pnSC",
  "key21": "5gQ18PvMSizcyuTG9n5ALmp2u7vNhzteWeoYhkYdctXGJ4NWQeYgSBSrxcR7zTS5mxWqZsxyiuzJLaGRyrpmKmJA",
  "key22": "SfL1x7z7gi1MuK6BJWBQDhrvxeqAxHKH7vraHns84g7egBWWxDLTpcLL9Zomq2ib8PL9NEMTRwFMxtrqEYMawYZ",
  "key23": "2sbUzuN2UwvsEqDNwmfohBwW9ZqxV6ahFcjY2gogHmQxADTSLVvmCBWidzcims7pgmMadhHGgqzHtd4p86Boeo51",
  "key24": "5a7ToSfrMoxGj1GsNezZ1X6hwUYrF8W9na8BoWZvrTenkP7AVchRUV4qj8QzhndF2eidj8PkawLUy93wVBZWwzL8",
  "key25": "86iJHRVrJT8oTbXu73w67G2NTinrEWGEPUVfj6mT2dKHk19ws1bfucBq8WaHAc7RQNdtYx6c8jzTFQvhnPbehNZ",
  "key26": "3WZ5dv1Zh7JCgPT61T2sMmzB4zpuvasfQkCqgAsoRPxwhtawwM4m3LHAMXFS6eSydLQTbKtAhJn47aWYrMDrg92c",
  "key27": "3AciykGuVmWwgMgqLQ1gkhTvNcC4WYGY1yPdCDECLvXvXwdB3kbyCYYc3GG6pBHEyYVSJmcXmtZ9dM5TXdUt4zj9",
  "key28": "2Xaf2rGy7XUpKcBaYP39eKqNWYBHnVniPYjbFRrgqqFEvTGzaH9A3d3u8roh2b6C2VQazRja3bGwfYUeEkaPvYVL",
  "key29": "3aPW6MKzhGwB2oZe1CjiXHyAHKa2yrStfj9LXmnXZZL3eeYtodSVabMjCq37K6cScBUpvMx43VbHkPvrZMWha1Tx",
  "key30": "2w6f5DRVGa65PnbEz3QpRivPJaYwjyrVwxd2budCNwAyRG6ZkNPYfFuhiqcQLcuSbmjEqrmHRaxzAt4Uvd2BDdjq"
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
