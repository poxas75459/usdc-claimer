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
    "gakpPpHmoEpC5M8pZd7BjEii73VnhYRWq8wbNnX8ZszrpqLVJhtkypZqgsLjoPQjNWwNHcS1gnrM5qkQeSU1k6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZbdtogweRS97bBFW2p4eBvA2mwN9vTaLdK79kgp61KHhipyevD9riPNFPt9EBY1iGBTtUqP3ZDNu9MKgBaNRF2L",
  "key1": "2eB12kKD2fCJF2nDcyfxh2jrPqbrpXNG5nkt9yiZnUWn5TLN96k6VCCBuz4NKVrEYd7J7Kd7ACUTgh2hiwskeaBs",
  "key2": "3dh16hzYQw4wsaeogHtVuy5bWNs4DdYpo5MLyn8vSdXJjrZbGWcgdXvfaeWeTgDDDvWKr9QNwaonJvme5DDbsEHb",
  "key3": "2YTh3pzVxtNECKmxWNnQZqzmMXaPtod2G3429Pms9zAxDADUE213LXNYop1P7F3nxdwCwLyfEoB5qBfEF1mUjxb4",
  "key4": "5n7rFTiLvKEQmpPXvzPB2rry6WenBge8CK9nWUX3jkAsCRU914jryqLu7sY68KVzYhSLmp456CaXEuKGwmaQoPy1",
  "key5": "143edwSVwaJ57VKu7DZB6TCPYKp6qbcBEzegP4Ly4qqYijSuBMDbNbpGoPJ87XU6Uz3uPBiv1gEdmryxrR3WNkP",
  "key6": "4TcqXQfFxVKXzjR3Yi6enaN6DGwS1UiHXyJT7x7pcNfgRSj5JhswVQFNuZNsNoSCPS8r6teQtFWpgBTfzS6yGBt2",
  "key7": "3yLU6Wb2JzZUGdMm7z9iWqK1VPiEZosRCR6Y2a26Z6hKjZvbY6bsE2JTKpU6kkVUD8s9FrHzSn9KZHSwtuJ1tQjx",
  "key8": "vKrmAAVCfTPUK2nqDiSkuwuQ1SSKtdPRa4gihfc2YhftCANDmrWBRupEs4FQQ4kPadoxTSfXoaA8HC8jqMQBcYC",
  "key9": "4inJR84uRMECFyWouMhwbDDxxXWv6RqrXWmtB4S4azmSPkmVLDQh71Y5vKQxMpCqKf6KoXinWVkRhCTdPRPs5yb5",
  "key10": "5znMkvv49qYz5qqZws36VQtNkTy9xWDBEDGrnosRzz94Z2qruveanh7HkkZKH5Gawv7F82y1QDeErGTd2mLXheXn",
  "key11": "4DQG6Bb5gpaDs41inKS16EeHSMJsydnpXEGQcy12CnduajFpWTUyqFQ2QTiUT3Dn9o26AL4f5dBAhJtteA9HBgD",
  "key12": "34LK8jG9QykMBF9fmo2fAXpD97x8kGrphg8XAN8CSByiEBynJiYk2mPX9k7vukWtT959uZq3wzTHxN275HS2fQ1L",
  "key13": "52iMB3CMMuSfYNCfRi6rpzUprvfxcuztDYPMUQnJwEz8aq5AXQLoksmCkX5QuAp2NH6AZZhNmS9QutgsDdErt6dE",
  "key14": "464tRMRLSWexNwgdbft1Z7SoD3LqdZEu2dnUJ1xFyY7Pd3sAiVKQM8V2QQR8jpPc12Nuwp1qZqWEzu8foQkzDMdh",
  "key15": "2rFt5rc1QHokehUkEkATjGFqWVMbvctwaZE1UbGJJD3Z58pbLHsWztkpYvrTxXwb2UiV9M2PWfsLhQM85CcZYxFL",
  "key16": "pK2DXAWjteMR6YH6LDx2tPQgWUVoHPH6c7QExbWiEauRqbgBpaxmNhm2nZMYgY6aSWovAWhyhouh9yWeEFGbE4J",
  "key17": "4itQKrRdQpm7Qf19rt6bfMspAVaPAKnAJm5VZ4LWfZF29SzWoJBxCZxw8P1vUeLVXomjuwdNMYFHPvApY6k5U8Xd",
  "key18": "3LsYR3GLGwVFGNXXCZUuuZhAKMhZjJaESpe9xgVpzmgs6zzRuBKDPFW9j64CvB6wykyQ2uqhhfdybiBM3N13EuBG",
  "key19": "2JVQ7ZyymejpYrPhJbeC3Sfc3ePCRgHtMh8vp6zGVDyi1V87QnQviXbgjVTfv11DLmhKNhaptixQiGu8MsQR8sQZ",
  "key20": "kwKs13CFrYoiuwTt6xqE6UvreY44BvxpqAaX9YbjYJ4fgaKw8hJTjUtRx8mk78VLEkPCfURkQ5nwFEoNVuGPaf9",
  "key21": "y88n21b9MTk8khcEcwhCMbRSP6kUQA4RiMtfBvhZN78hgPkfJsNPWaNUR7xh1bSYXqe3EyJjhW3Jayj4ENmmeaE",
  "key22": "277vorgKt1GMNeRLpY4PtwYKMHgMQktvWnM2zPRSECDx71jBVbdE3JUmTm6CfqYHGjLHEDZv7X7wxQu1u2749X6t",
  "key23": "ja3KJYgP7ZxHVkF8VmdNmHaGn3erzEKXLLnqwi9yDSfs5GyMmZcmn3HrESzdhCknTtHJzzhjq8jrDN4MsTgUtB6",
  "key24": "4ZK6SmrzCkFM9yCoCJFnh4PKCQBU978oVjxpddWs6pJ2YAiUfsPRpkPjmGJYvFSeU6PovJ6ySgCoTmmxLKyKQkFF",
  "key25": "5gYR8AK282MKNBymjy67pgetXkxmMm3dzTL9yjz1mKufJbKBaxWCXVU2bDGetcdqgJmWvMKfvqmBpjqSTkfyQDeF",
  "key26": "5fMYVoQ6jUvC9DhJqB9V8vxLAiujfRDybGeiqUDYNUbL3K2p6zrvqzpEgSvQTmwL7J6VvJy8EoHJkH3otrB8JVMH",
  "key27": "5nqGQwvKoLYbTMhLM4GXBUKbp6s6358nKCzcn69usM6UAo83F2rajjjve3zHVvrhRfYEPGX5eXAhbqYkwkTa77ko",
  "key28": "mU5x89jxv4MKqwyDpydFo3kRe3mZNU3zmkHkqvh67uH6LcoRHo5FU9F9WG3JApcbXEiTLWgw7zJ8rKpsQA7Jt2M",
  "key29": "nc87gFaBYs5pMfAYQGjonK5mhD2MjhDLNNrvocfp9X9hhKDGaxueQJA52Z8nFe1tDDTasZQXaRRaZt9vBqxXM8B",
  "key30": "5a8KA7neoMPnCa2HHQf4jPJW8oy2Hgn8H7so546acQ5w3HSDbi9je96nNFhHHgTbYP5EAhKMZVJzrsA6ycryj8n8",
  "key31": "2YAnTmfWQAn2G6ymk4tCocKzDDfHwqiCN9WBGJjjfCcfV8cpfQEvsj3VPwuqfX7y9iXcihg5SWeRuHEnWQN5krKb",
  "key32": "3eprVg8wooHmZJ87njWjiYec8aASgdvPqZ1r8ZDGUXDjPmFBbVZA2FCRVdDyjenPnqFZASLKCq3PsoZMqSJbFbhZ",
  "key33": "3u25FZ5VNNqFvSPR9MMwe6KCZKUUo3UzY3iGzUSJPqQLPz8KHubfnEtCsAzMp2ApcQuzFAisLvDyKecJ9gXctkNb",
  "key34": "4qcMhMGyP5DZtmQs3wYrcZ6b5uApP7ndNuS2GWMKYBAhYFh9z8fAcu9iBgXEhbbjmK3zvJMFXzaBMxn4bJtb1UAB",
  "key35": "2RzZmaon4n5XGKWJqr1y84nPwgN3U4GSxagzag4VJzZvocjPmkczyLT1XpPYEeR7ztPRZ8c4u5WewRTJ3hniknh1",
  "key36": "3Aofd4rGG8ujHF7NPEb1Nj5ZYCuWnwDmaXrirVpjBYB1jVk8VcsWDwyBimqCN515W4AyfiZcg2ZS8LMmoBR5r1sR",
  "key37": "hRw9HJeSTPWvqPMbQY6m6EHmMz2EC7Pr2piPfAXA31dq58kN7LrwiK7DQpyGeDVCCg49cZrmVgYWPNwkMMjLvwM",
  "key38": "2vNKkLSaRqUYmLSsgCin6RD6iC2uNrX7LwtbjtnEBrqTZKiWQCTXAupbkECQTqwVerPd83wi5EY1jbT3SvoL2MR6",
  "key39": "4jfULim6um8P7djFo5fLhmKgijFsWuVQQqYRkL24qP76M4W7AePfNVJAWaVWHZbj8Dapsc4hzUWypztNZhkH47jL",
  "key40": "5rEQ7UR8CxVxdEKv6XDddT9x8Eaie5oTLwsoXqZSN3ADbtPXF2QipnMEDuq9K7m285WvEAWiftQFWcHtLqiJP7U1",
  "key41": "5VxPBBKmkqws8xwgV3nfbPQYyDRVi8UxEHpYTdCDiGAwYByXjQozfgbtQ9fbX2UK7Se3XoyB5EniWFtyonVdZu6w",
  "key42": "2zJkYdShSuDj9HzwZ1S4kzHjAMnwPRAhTkqqUUiW5yEMQjeQ75TCYnvhGSGPFnGZi2Bpc5R4egToQBucAHk4ETCQ",
  "key43": "2dPqW11YcY1DWA4pUiBxtV1LDJffh4Eu1n7PPixV83o5ZayZ4N6o6PgjVuY5uT2G1qBJd5Ds5WkexPq5GLWaBjEE",
  "key44": "3YR9nV2vv6tGk33DpcsjyHcZzyZxfvr8h5Zwg7in2Y44MxrbKxVus9LYha7jyKyzp9dyYddRzc3X5515TjgwkJBL",
  "key45": "gnmR4SHGRYBFH4THfCPXKD4XNBqhzMdwAZ9ZdvJT7ufyQZ6PK4WedWE7VRVTtwL7CYdhtAXatqm4qzFkXVvCqTF",
  "key46": "5nN5ftsNCd5CuhB6ZKgGoAmzC6op13jNsCf1JKErkP79Mi7uQuvMxk91rvecV9azuXHLrcfMv6viGWZf5L5Mj1dz",
  "key47": "2NE7KvztXvV2MVJRidyzCPCicddegkTBST7A3DCqBxFJ2CncDyMdHjPebzKZemeissiF82sHsXg6pVhkcpYRY5Fi"
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
