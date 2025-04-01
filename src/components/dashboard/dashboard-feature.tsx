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
    "2KfZeNn31qnLuXEqtqM3yeX5bUkUAkeLsZLLdf3tS4A5PZnzUTegjsEnkA2Fm43KLbMmErNEWj55JynYyvP9wkEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mrzXYFionEkzjhY8yoyVcJzZfiNVtc71EDeFH3p2yp2c6f8EXdjRGQdHst3UKTJ55JtkrjMMaNbVoDcuQ3bVBSH",
  "key1": "38hnYZRYU8x8cG1Xn4tWfo8hoNQhhxL6amPmVveQ7uys9HBrWiEoB3hPFAqCJ1RbxRTwnXaF4shJxeG9Yq4x8Zau",
  "key2": "49nS4qbbTNzEpuyYLZEDDTNXo2Ch1Ago7VWt2NhLWH55yP6hYFnGWawbbpaSZhDs1rKoDSywVj87rKjsMxWV3zuP",
  "key3": "5N9fossNtWNwKQGyER36WUCkCzWhyZrDFsbzbbwtd8gGuJQDAF9VW95YHtNyfPvkC2iXg8gyVNTzYZGi4RDBjxn1",
  "key4": "4ZTaSDyEcS6nXef7QZhXj68edusggmkHXAnAYzh4j5rZJqcmhEDSU3zmzxfSszGLynkqT8kw9Ck7y5tTaKaSnAB7",
  "key5": "4a4MF8nVEyb22pyQ9xYXAdx1v1hAnfZYWRhfy372Ze9smFwZ9RMSK6LYczm1STjuEN3aUmpyP8ADFeGUUEBT9APr",
  "key6": "2QG17VnpWCruE9vHavE1WAMHQJv51e53ZFKkueoFCwUHq2JJmbYmScroEE5AP5xWgzidAmRDBuQKGiX6ZwWoJGk9",
  "key7": "56SHdYPWo4okAhfuDQZEHqhFD37s4Vks3CrNGKriWtwxR5znqDVtLkPa8S5VvMYifCuUaw8JNVXn4TGE6S5G3rEr",
  "key8": "4PZDmVsSAQTwV9peLwL1vpBuwcQw1Qu5tr2xDnB4qHfrzTr8oJdti8totoNFdrwj9f3G5aTywE7vYWdjKP3d9Fc6",
  "key9": "39vnqBQZWKEYY5Ubptk2uUSL79YkofwHrZmtzJxJAh6PTGHS8eomzeyaqSgyVFPnkKDmaWKaNBrCWcBirnSYESAN",
  "key10": "4qcQAWA8p1fxdZNc9kgd5eEeEsYEhvKBF6nZo1Wt1qUMS1cu2BCnVeraDKSsQRHLymNjnC9ZaNWTMoCbZ9BL1Bge",
  "key11": "4MERwhBXjuyuwhqo4JE35TaGg4PNu6CLx6TcZY4uTQtHRFJdepMm3pnHQr6GYxP29iDsZ4BNfwNQrgh2MdkhYhuo",
  "key12": "5qzMDWhHgx24UGzoyBmracpQkkQQ1UPyutJdrdndXHStRKaQCzjniHXTY1T5PSczMVQ5zfEdSau7MottR1i9jrsE",
  "key13": "2DrFhisuizV8pNNvPCLzBvDW6c4xFrbP2UibPnBgcAZrc3kxwnhpdn9tUFTSa47zUsaTXUjRnkhxPDs4mwCXa6t9",
  "key14": "3grSXeDMCrTrRwTAKyYrEVLB3MD7C13hi6ojYuRydmBWehc68Y5uF58fq6agjxYrJFmCQSn3HJZVyjjHR62HyDwE",
  "key15": "2ethSGDoomAVaczhQtgnwtZYKRqeHcKo8fXZZhzBUNpdZZDnAv4swfD6HRv7dGLtQH39KTPwjuKAxwHuQYWT1kZb",
  "key16": "3uQAZ7dGxWhKuYzeCHS7d8yn58DhAjPH5SfBA8Tq2s1Khj2gR5UMJ1hPznPn1uox3y9Bp9L9dyyUEs65HVPHdMS2",
  "key17": "3izh2DYQNMQLkQQPvsYjn5wP36CcLSg7sEenpmd7fe89w1GJMPjmrh1SKD2eyg3RLe63kRieYpo9vZLimS2xKbdX",
  "key18": "3yKkEBpmbcpukS8ceKqNKVRxtsfLdYeyJ9hi3x2KrpB26HXVUgWUb22F3st1hJ9dWETZVUekto1KumZmTzo9bqbZ",
  "key19": "3tNTtGqhoEca4ByaE827vQYzv1Qm3Sd3NxH7SQo7PJ7ZdoYeHumYfxK78hFeiVfYAk6M6QDDwCThVgfXHvMVkN4Z",
  "key20": "3ZnsRLCrcP4uaRTaNW2LBzv9G3deibZGwVSPNnK4sGciHWYN4g3uBdQiYJkBGsoBWSgKyTdv7xjmKQDLUN9aXkGm",
  "key21": "2QZA1LMy6Qqe5LvSwhxPqHqdj9iPHSNRD1SDVMBgeHeWZsBVvLkTLosrsQTr9a8UHLiogNKb2K17hV6xqcyyWEee",
  "key22": "3YbMwytbJYnVG3dbwTbBja4fNyVakjj7H255oXj6ajzhP3m42GjcWuwyQaXMTJSbTgjYuqdmaBRbLKqDyiLfa4m6",
  "key23": "3JP8K1FRVQC4TrgpoHA9LgrdGRtoHZzh2f4P5JYaz3w8oRMh8zrodETURGLP3K8EQjtYNaByQE5ag9qKNk37C2Tw",
  "key24": "3WoHdVpdh3UjYPcyaM9jRc4R8DUPqj9khn4wq6bzokuvDWydDR6obJ8kki71FiQeW8nRSfNsNfnLHQKXTk6om89K",
  "key25": "2ZyGdv9KF7cNePKYm1eBV1FMyQsEBxDL4y19byiAW2W3yk1RnoSjjDN6hTmKHjpyx2Y1e1RAnxasQ4td13UdQVyG"
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
