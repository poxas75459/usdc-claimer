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
    "d2ujr7d7NXppr7ZoYaW3b34XcRbZWVr8JDQjZDfE5qo4MxkQy5jkVUrf2nBQ86v1nMpuRyHpihA3nwPDZ2hu8gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVDbvRex8hEah1DQHChDzyZmGdbz3iHcyQhh67LRj4ZihgtZPG82eAcCvu13JVmhmbRSD3RGFnJBsPoeqee9Ayy",
  "key1": "2sqLMEtUA5MeBN623jCADhaHLxZj8FLJEzHjP3hoGC5wmHsevw5p7ZBQsLfsuC7HXUVKxz8pje6WUhYSPLkZihTR",
  "key2": "2w3hj2MfLH9Uu7cLCKP7r6hPoz6VCp439B2v3wPWRjLJvD9GX7a8DCi1fhDCsdiosCaF9w1Vsb1bGGCa6RwixWmK",
  "key3": "GrzJjjKao7uWo3WL9aNMwajVceBu7aGoCkdLvdmWzEpZ9yMEcW3m3comfnCmAENCUykDXGkwMBZFtvUxv9zKDB4",
  "key4": "2XPXJurG9aL1xFuPEzWufZWNrSCGN2uL6svpHeFCPoXogbjToiitRKC256qr8DHRtuLvU5jC7e8bAbCt52zdmg1C",
  "key5": "2QmHRwSUJPas6prvFtN6APtY4ZvHAUmGKgrx6TnEqWjXrHr6mDPYGwzjBjVTtkkrQjVhey2eKKV4sUdojLibaNRH",
  "key6": "5NGW96oBoEJdQqGaYDH5iBCg7sGaWpuQ1iHLPQBwJVSgzXuRKGSqxBDH3zdqY47H5vHNCMte8dRwShCrHrJN9zjg",
  "key7": "3KSiTnZMeazsPDP3U7iujDhqKZ5Yz6uULKQPKh6nqJ61tjKZqRN2J8ABuNAy7LV1ehEu4c6H1HQrKZy4RGdnKnE4",
  "key8": "3p26pXF4gJgspVC6fGgL3fhD5kVyuCRzkdt4rig68z5jRuP5ZPskMEXDcxfEH9kyrubBagLWWkHaGWswA7u4EwQJ",
  "key9": "VvVUBMUuTwuGymHVH9FLnE381rPFVxaGywN4dMT9WUeVpLJEYMpY2ioGEmETmW9WQQeLvLGHMJY31gP3GfYWufR",
  "key10": "3gqiwd2CeHhuPzT2PHqRPYNgfCRJBrZbYVLE7fr2ZZ6HFX4gHL9ZToLLWphFpgK2ikpcBYAgDiKAh6wbHzi2CWeK",
  "key11": "421jaFTzVVJCw3P1VfBVjRUHyNTAfXJt99MaQHeon8ZDwAYwuWgFpdPT27ovhaU61b7HwbM98QAJNAwvgHeMCwvi",
  "key12": "64uFRMMbGhHNBtFUqHShgDMwgemYwcDqLz9pRCjvqhPyQntH5Bhb9YSu9SPYY1udkXFFmzUkyxN3cvrciYrxMLix",
  "key13": "jDrmfsdhmHoCPXcNzJJFzaoJjZWA5QWNAEQvCK41Epgfeuj6KfG1U3dzYg1N9hH5XC42miFimuAghTZ89vZ2gao",
  "key14": "5kfVYokQP5Cm1ZqNKgoY8Psng7PNMPe9F7AuvAxivXKbszAjqdPkHwzQMbGRkMWJPv2G5CwfknknBWgQ4zLYZm74",
  "key15": "4cfQagNpFsE212jB8pKBF46jT39tiy1KxJWAPW3SDAeXtkYBWkqsdiJxH9jGDn7ajTK9nPqkGWFieudD5J8fB8gv",
  "key16": "67Ub8GqUVtm1As3AKK5PKSXdwuSx861ECmX2JXf5ygJv7Ke4y4EXwSNhxmN81u1fuZun6HvSA4bGeK2BMqJkeB84",
  "key17": "4J7GcrxXJU3dfERgqoGxEPXGrxUsc8zwao1nwSGyESn2MPLcixLeqQ8yQVNFrvrbnKFTT9XCRxmwX67L1qQqcFpY",
  "key18": "3fETDvhG9t5QHs6gLhjpXyLSx4oqrAJwqEjhKkgbpth3jhJzwx8G3tjhXgGMzw4trtikxnzN7ptZxLTmHeYVhjga",
  "key19": "uS9fk1cSGrxYXW1hj69Ym3hW5s9ghh4vJpfuXsaBsyjFWaK8zK6XV9EyQtiAZ5oD5A9xRmgasC4TzonGbJj1VYM",
  "key20": "4TymN1rLxJ6Ad7wnwZo4asPBzGs8o3yMxWA48hFSLKMhDMCdY3V2acN6H6yU1QGDKRceTNnwfk4iUn8CogJ1G1qZ",
  "key21": "5XqNctz5JrYKrkTJF4gjw7nBR1xwoKWQHuGjgYjvPat1t1GurhXe8KeZMzXQyG2d2H4aKvWSXb59m8nkZBgBrR5b",
  "key22": "5C4xRc1SG1oHqj1L26MWtru4xbKv7voso5kqVY51YaTKhBWbq6zjdtbPRsW1AhMGLewdqAmPWzoM62tDEBmg4jnp",
  "key23": "2NgQx7n6wnxFehbVWmbwPxJwhoBJDvXN4XyBZWU1FAy8UCcFSoWjHgFVr5ivKuUZpw1KggVdwpBR92e9Wkp2J7rX",
  "key24": "319WpZz4hYBbioatTeExENEkrzobEAhAyFKwaoKdSwy4Z1BksfGmG6WV6RKEqdvfwMPao7hdypC3H7CidGqrK72M",
  "key25": "GLFQ4Ejya1yREALmHjtPR2E1o7uE1aFJoW4AF9v3oXrZpasSaUUP6mxuNBgbKWqU2MembWsYwrNWj5zKZcetkjS",
  "key26": "4S2AFs4jbxNJEdNDMjWL9pMoEat9tykEJhLnxY9F7csHsP3XXRkAX5ocwy1CGW2qjeJZPYjjS3jwXMibzBoDMa5z",
  "key27": "3XnCMFcUB3bwcgfUGYYMB2t6n9jyzabcercjoG5zqfrtvKdcrmEzu6rfW9T94ESHZydogdSKr6Se2SMVidvrss9W",
  "key28": "3TNChWAbnD5ypWqTco66FxXJSCfKhfcdPSqLSD7k2YSfWRFsaH2wPVA15kviwXy2c7aiEkjiLwHTtxS7iApVanJr",
  "key29": "2TBnJYkUnVvHHwSTj9Rqat2oWWBLouzL4LacbH5YUiQpMDSs7nPJWwbb8HZnD3KwG4uU3nfVpsfcVqrp7tmncbPm",
  "key30": "5Zkt3m1ytPS2vDrRByW25Cu1h14ztgTegz4yFpKHFe77pv72DbgR3tdrH9ihrStudkTHZWP5yDexweXiNE6UR9Qa"
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
