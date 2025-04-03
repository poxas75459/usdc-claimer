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
    "TKKMXExNbtnAFaCgV2zgbVRfHgyAiQMDHxtsvWYR8aqPodbX3sypKcUwZt1Wqugqxh1R8vCJSmAfn7n84r6Lvdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bsXpc4YrMCtDxMP2G9XVVnBaCcm2sdqcNw7LywpgbksoQHh524ZHVteE57uF3taoJV5BhkEqoTWsixsUCedvcSu",
  "key1": "LGCb4yLUf8x3uPgJYmZYDAiZ7m1i47e3fcqufEGB5ehsiPnkhvHah4tZuEqW98anmWuxo1PFHJWMnm4T17c7h3J",
  "key2": "4HQvzvCx1SXWFygwQVkocxzRbD1EpmqzV1vcrcA1NuTdF2g5RZJJuWsqUXbeTsB6sjRGC85tuVnHAAuHgHRfssFj",
  "key3": "2ZjEbzSSfmuvJCRErgw2m14xmct3E7hcQKfvxngrnnByXt8bs2ERD5AH3EXZ2Jb9Pm8TJpyTewSUJoj119qEfTF6",
  "key4": "3tAp2Jsz7bH7TmFPj9cEd338uNg73LaoCfZ8rsUkuKAevcwtgreJv4RSd8Ur3Z6RrqxgmzrPvzgyiDZNtALBkYqc",
  "key5": "4WJD2ZJmuMRLxMUq1SZBtxebB6FbND9GBxJw1v1n9FdoRQzNMRDmAJNP4DxmdxSnCsYYEVjEKjdk2PXbowuxkHv1",
  "key6": "2h7tsNXhoNg6oNsRzZjFHaq6rHwvzbD6t4uqL8tMTZFgiXbJnQsQtUv45LHLTphiED2EYWFG6XZueSN3xPUDMGBF",
  "key7": "5bFbfDmuFEtXxwUVESn1gmMVWL3D1d9neNNAvt6UdYc1Dz2adcReXWaBM6ApfGcN6mBJo8S13Djr2hTqmdyRPfrA",
  "key8": "2mq48KwzLzRaoUQQFKBpmVEmusHqScRcWhYDe2Rb8YRgaV64pBniL9owTmmyfmcENyDeacJbHeNRB6nJ9MGRr6qW",
  "key9": "5S38rub5B6wmP2BNbR1i2vqufLKKjRgcUaaKMQy5XvBY5ujuNDcRE7sJgPHvQ8fxzdQKPiKQLkQPN3K3UfdoFndv",
  "key10": "ALJ4zyxuCuAGtY9hpvfydtKrzidnpw8pzXBbQaa5K4bsRSvyKQtnkbK417rLBBJvHoRMQLGvJnyUSk6HGeKj4Tn",
  "key11": "3M2723EMJRHUQhKQnz38f7geseu5mxewFWKyJxaFNjS95A33YcVatio6JFmdnZnQFCFVVmDabq9twGWWNXbBuzHN",
  "key12": "5s2Q7GuUmGNU7uNwQWxe59aSHBL2FdZUpigEcEmZ5eABDijANJztsv12immLLAhuErtELZVcvJWTXPSJG1YL1rRV",
  "key13": "3nAMoP1s6BPxpHCnNYj6jBrVa5sfvstmfH2JV6XHfxVAYvk1hMUEC3oHVnnreEoRHazWYMN5QGNBoFthL8NiSH93",
  "key14": "2QbbgkHdttbQTAAik8oXsnXkrQdHEMvS42kaoEChWmRiWK4UdHVo7BEsmd4VR4STBGxuqc4VXsPNftAa8uXromk1",
  "key15": "3rnA2zhS9pRUJ5qBY4ZAQLeZQyWZj1Raim52BmodRgLM9iqkmQhNHPYoQv55ekCnhD2ogi989kqzFzTZdpLWGfZz",
  "key16": "3Fye6cE9XbgdWW1KpFSvsfnikWWa2xU3oEi7mmX2xWYTtUaQ4Le4wNqbA7aVTkr4L1JxXTt81zEJSZJfH66qnaxZ",
  "key17": "2CeAR4cLiPfSoc39J6AbtAHuoXQeqNxxzeR9T5qdtvX6khHCjNiYuomFWHa3LyFrzXoZgSFwj7FMpDUXCUwStfu1",
  "key18": "5U4L4bvbLtFVyBYPbarcLtabk1wTM5XrLVdJbMxzkctVBa8bBtJ1h5XaWwKYFYcDqxy6wQXa7Ld17fP6gSKfJp9a",
  "key19": "3zPCjTAsWe8JPY82uaAViZA2yDBqL6MAGHhnuNbVwGqhK3QejiGFj6vCwdwhBqYNZMH49inY7QpYgcBZhBtCLEFG",
  "key20": "4DjrAhsDQteXwGTRBS9yqKv5iEkSEaRYj6EKopdXkVV3mqT9hewZG25Yium4JdL5BjT7UoTjL73cQp54cxuYwhUv",
  "key21": "2us4rUWDHx98gEs1oFHZ5BHwHYAZGNkRx4kPR5yVNA4noRPTAWZRHBTb16nEESv8S2f1QNMPSf8EJ7m1pBduUtRG",
  "key22": "2CZyxXA6YZKhnKr54wxfgAMMKcMrEgWxBWWyeVw8M5q21G85HdsSuPgP5GdrrXaxTBSeEzriCV8w2NaYU59ANRLR",
  "key23": "5MmtemLcYyojhys3gtuF5Ggthf14sZBxxmncFR48RDPPEthygECyGzzdMRCBC9xZxxC5ycbF9Jnv4njevtQbjsKY",
  "key24": "5VoyjUiie7jX28dZ2uauMWjR7YfJ33YYCijTFmdvBxpc2RJ9a7GZFwZSYGH3DaMwDxS9UwENSAoGvxeY7J2DFWcP",
  "key25": "4Y5PgRHLKJKQdJtvvXjeW9QKhpNvKsq1LtSqp1mvnRrxo8ffBryT7UoxuWez4GU1rsj9mdUSxb6qgC2b31hVfF5y",
  "key26": "iMmZkJZCLNPU33Mz186CeNHoanevjYMuaYNUQ34n3ECVDQD8xM2z3GFQsYdAPXCTtuTMtohRQBNbY7orumJcAS8",
  "key27": "46bWWG6fESHVNuRvbWYuw4U4szhiE7tz79BarLLHc5f5heMgAKfoqe9ut5vNTZzARwacJvzjPWnxXVrE1LpjwwsC",
  "key28": "2cNEkYfqBT3axzfwiXN1tv3DwJYNeBdwexABFq2QfAXWdGRp3vN1DKueWVU26nnMmpr1cQUkcTDoaCkT2kHtjcx2",
  "key29": "4GGYareoWmDyukueR3yPvxGJuBx1thkkHTv7JAz6WnActoxcfgiooFxbGmRQkE4XrzkSowP1qhEdVjxKeLgDtJ1p",
  "key30": "3yfCUfecrYrYcCRRyRaxgfdCn6uxF7suwtWK7U4py9xLjMvERvjFAv56UmuhKVwokAsQ4fduSYYVqoZRm1byCwR",
  "key31": "56HkGqW22JL89iqpn3uTmeUGjQVWL3sZXMdDBGqy5bgYr6iZDvNSVQyM7KEfzgisVBtX6nYsjFLWn7BPmxYLunZ6",
  "key32": "znDEMdSZS3MnkoZ9MVzs6GpfAoeNyAt1bSHJQqGX9WQMkmV8GVc5r8PK17v1i8pm9KYTXqcboG7QSXXjtMJkDEE",
  "key33": "3eRQUfWabhQ4wwvYWxzafesAfedq9oBUFWcZUBtgV95d5KgBknVuD86z9AoDuh95dzETxeWxWnSD9V4AcHkQa5tV",
  "key34": "2nehCfWvwoXKETvRJzPTqN7Ngx2k8A2HD3PUXFJSh8WRP5wNjQfMYq9LNtSzpB8wJnetmSnfBoKG88rQqrzgvaYM"
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
