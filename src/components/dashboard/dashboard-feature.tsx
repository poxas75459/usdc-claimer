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
    "5fLQYs3NmE74tAeRgU384CQRYKQXHD7hdv5PWT3DWY7AqR18LmD29bMyf8w3WzK5mhdKQFxzr6KTm86Z4H1XCbMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s1KhRkWPXVhQPearoqufbdb214NDjxQiLg7ZB27pNSqTKu6T25eH8M3xGKNAsQKYr6cbDAsLETTbMfxwiodnExA",
  "key1": "Kqkpw4fMB3GW5y1yg9KanSeAS5aXTz4Bn12q2YPxpQZaqrt3e4BAYzevP6ZjkmhUoqrXAtk3NYjj9c9cs9DHTH5",
  "key2": "5cHN1sewZ4KmSgGQozaP8rEvsa4sHqJzMWTUWwXiaaRHAfW4yMCdznNUFwgmKyhkHyhmCYoPkcpRezPkhjdrmpdt",
  "key3": "3AYGb9xJrcsyKqoJuF7acJKEUWp2PqbpTwiEpED7zjJ597hmKNVs2qJw1TZkLZLJUhvT8C3nYZGWy3d6gRQ75X7f",
  "key4": "3xxiV3f2h4dpBsJE9ckaHNCyXQWJSK7ice7Y7kZLaX5oWtjfnBZYof2FbJQg333jLBHcvt7AxETo3eC3gmKG2szd",
  "key5": "41gytAnWWgW6Qdk7FQzmrss8KY8BpoXjCiB1AR5QJKPEquprMDjd2Cc9nf9w9ouVgGz79yBAD8QnoGJdYzjAWBGf",
  "key6": "Y8yQKmZVwhdFSdRxcof5p5mQMeVcsE7DVrtMhnz7YDkp2boGj1aVD9pFG4iPqdmarVLE4Y71HLf6vccGG1J4HNz",
  "key7": "3nnXa8o4s5ShCD44ZffBUoSgb5riNWkjs7F1YKHLNs21dJenbPkBtzTDAbrCmAqX2yjzWAe6NXuhTvU55HgbHQ4Z",
  "key8": "2m5CohokXfsmVHpeu6d2rCB4ths4cRrQwzkqKLw1aFJWzzS19bQPQVeTkUhPWG4xaRoaK4i6pTshw2w56r4apMqw",
  "key9": "3PZy7d1BUup4bskv4k7xK5Skq5oZYrmAw1AWWV8vo4jC8iomnsHuACmZCHFpF2c2Lte2c3etKdRotGyZhiSkmX3Z",
  "key10": "iqfPRDpvwvdc6Z4DDeQUXEv5ai6SddHT19c5d4SCuKgPuJzehJ1gyUqGBmogskU1KXrNAWc7b6T3chZDwLvq8ES",
  "key11": "3QFFijaiFqP29GtDVzGfLN1hXMmg36FHJxTPpjUirr5dmn52HKQakkYjtTwfr8viXYuMQVxNDVLtjJX3RF3jeWcz",
  "key12": "249fV4te2A1RaJ6ex2smP9fiZeQkvfzjRGqFuxfjBMnFLhu9HwYPfSyBX8sL36VC2BuXGmet1ZMfVkADdsQshwHU",
  "key13": "3wiMwYfaw1jQK2vpVxEw3fFSHe5xwr3EHhAzvbBEpeSYv5rZJ9Y7zpCBLeaMGAjGLReB4zp45T2aEFBr5ay6wPXV",
  "key14": "5a7KzvcA6JhnsDkpJjc92JbwoM8v99L5ah3jEoyHsRhFrkXPfvEy9TFgytE6ekpaaGM5AD5CwNxD6NrADxuK4xhQ",
  "key15": "4xVyYZKao3MVLMK7VnRyXD8hQ3VysKKU4XUb8fnD7TcdGQWy83vTZbvgK95ka9Uvj33ALkjHf8LRJ2u9iCzf32Jv",
  "key16": "5HKPya1zMrN9ztCDPME4j3R7kn3xBiNj1rdsXKM2pF5nogcffSszDEYopkRoFJ4epfgFsayfiZj2nhpAYDM88g2P",
  "key17": "4YSiGSVZVqBTyXA7LRcow7py48hnTnuMVKVxyWoBtcJ2qNbhqSEaP8vjjsd5pHYeqq5PkzV6rXAtomMCzUjNvpKy",
  "key18": "4nBA4E3aHvnhHBQzhMADpYHz7sFcAFExa42SsmLjGZTGQrLh9TZwYdWnMaFD4xcxQKcpk73vH6yDnd3XtUE1fXz8",
  "key19": "3s8CnrKvsPPsi4GardNHqjE4swcwKY6BaBPoxRzn77ntAZdiVrRRo33yCjYaJNeFURnTmHmfj5VoHhCffy85XKFq",
  "key20": "ADcd58TDGkhXQ7dLYrvgBeWCHqNkbipC7VvqRubDmQq5NxRf72BrLsV5fDTvgU3MpxJVDjaXJf8bTZWXzgECpY2",
  "key21": "5ctnkGC4j81jR7VpbWwL1eZmcH7ALkf6FFGBv7guboWCC4UcnqTpPjBQfYGe6AmrAwV6XS1MGLt4UZkx9AQk4Ab",
  "key22": "5A6UtfzhtuQtixPm15dUJAmsJpJ2Df1a1XWpuxXCHi6h3HViTHr5aeAeoSvFCotQw7FSA2tPaUJUYzUZ3oLv85Lf",
  "key23": "31szoyoYxuos7KdQ5hQwW4tAdbHB9HYBSnis2VzA8ksoCMMpv8i33SJQeX2AhSgmJiTp9xXZ4Q71ieMbTRakpMHx",
  "key24": "HfMw9eKw4y2HoCpY148q1BXchiachaYZr9QFFHFTZ4rLQVDsgw8irKnrRvhKcitxKuqFZ6wzucaiPmhhh3b5m7M",
  "key25": "5SBb2miwFeBKtpnLUVRnqGuGYdCeefDezxH1rBn2Tog7bwzSuwtaHFQfF53mLcALKEpcfY2MEKNc3jU2Kj836aJA",
  "key26": "5UidPH2AVC36MWoK4duPyxiwSivcAbu8bkkCz3pjmUTm5ow6cbX6stwQvgZNdbpPWZYV7EjmMkGwuDchVK8QWTnH"
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
