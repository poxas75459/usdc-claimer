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
    "TDfiFuwmrrV4SxyoJNt6Q7Fc5bLuCxSJ9n5pp9NBMUX7VMv75vnCQ8wBDYFNE4fusBaEY9bchzXu2a6GLEUJBs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vfgvb1tXPrtpABcH5DrifHm3KeUJgH6T29fL8WTGs7x43CpT8GLfC6kNDkXLaNSSo1W3aHCYmYcTwEuGCFYfN8N",
  "key1": "59xrhJQLxFBZr4h5Lrht2TucRDAjWKmuYX772ow7SncTPH12ovFdFiJEL3Ts9DfeYeceucUMThZUwFhPV4rA462y",
  "key2": "3NJJHbc8goojUV9yGZJnHa6pYT7GeFnmqPSRtrCb7wrd7JjzCEwa7SV2WQB29GMCvPdxJNvQaZeY7i9ZrbmSZgYQ",
  "key3": "wTCjsfgPK9nmkFSyQN6sXudEG4axzE9K5rxqPnhpcBkggezCaNbxjbaJT9htJ9LESqM8LkE32tzsojfXnLVYJ5F",
  "key4": "3E7Lghn5eocda3P9UGgPgpDxmLbcbQJxjDN3wYFP9nNLzGBhXFNsZZu9k3fJSTdkdXY4jV6EmCJTQqs4EEpKKLoQ",
  "key5": "5o9axMK99HGBE6Hqrr24KX41dbH4tAnf6jhCnYkGcUG12mShTRrSeov3bodZ8GaoYkXfMZfq3UQWDWg29Z2e6Ny8",
  "key6": "41PKuM9dFP2G5p8pw8m2CE1rHicp11DYrdTMRxpkUTc98D4UF2wE5gTgbqsD6vzvt5oFBGPTM4C63YVbPKV7QUXe",
  "key7": "e2HX9BJ8cCcEyKhr2AM9NY9mAynwGPFZ1HDqpkPrXtPYRvsSFoEKewgp2UC8HqvxmVj1qJxn4xURUVh49W14ZRv",
  "key8": "32DhygUpKNyaC8zimrorfhBnKyJuthGvwvxjp7ZB6UejpRxb2GBBWHZGD8ztM4LchfehxxNUxL2HEEhCVzpAGheW",
  "key9": "3BMmtWs5hcKz1W1icy5TJjUzh8trP4HFGru5d2reipeUsMdWyqqN9YCBTZ7MjhCMoQLXHcJkenKHkkj6ejdMSXbL",
  "key10": "gDc2D9niNKav4Ab3SpcN64hWWqWcV8kjwejxLJnpy7NHNHonhuRVk6NcbVbmR2ttMdqp6x6qzBs2J1jovEpMBUa",
  "key11": "21y6Zgg4rAL84gU1pQ9CUp19sNBJAZciRt3JojBde8W6H8JbxiiJKezfyiiycna2ZZfHQU192hYyiLM7xy4Ao7U3",
  "key12": "52ePaQGJxKTHnwvfeaHQoecasc6iUHGYUmBjFAnWr9yy6VHL44pEGVSDtonnYvj1cR8jWi8sPrAk5E3ym5TPEzkM",
  "key13": "3KPN7waTYvvD2zF4e4fLdzoAvu6iyGLyFRafZifJ4UydTNjBRb4Caj6k79eQE4frgLVLdWoL24aVQkT3aVUBAKQd",
  "key14": "4rQhxbNvPsBXX36ZnQD5g9sYBaVa87dE1hQzNjyDotdTGDVZetapogrxtgfcBK8jbiURNHrzmkqgS9orLgMQ6uWe",
  "key15": "3cjcU6SCQgfLzaJyMF4sxcHsj4pXivFrjVdwFfupLSno3RDevgcjPV5fNrtyCYar8YaSsFJNLaEkpcQziBHtw62a",
  "key16": "3jrAeFtiJnkPwkQ6ncKhAmQdWmEMp5jGaCVY9QbjSVmUw9APkL4EVC32B7vV6wSHD7QUhx5FEjtVrtHCtAGoBbM5",
  "key17": "ahp66qNyDLU7CFNn4TM66xxKFYfq9gDqBmJtaztZfKUrcDugy1UotucgUU3JupHLE2SQS1iZKEAKEMN2uMreSPV",
  "key18": "4kcNUPrR5vxCQQDk2ZNMeYXnFuaN6kfsqH4zAkScX72utXiGpkuptikBjYf5gV4uztz63BidSHBR7gKmN7MtvdDp",
  "key19": "31vaTUZ8ZL5i46pzdUxFZM5AtfDuMM5TRaP4WPsSrooA7rWyREdzwxaiUwoq8zvzfNDteqkXuRGCFSe6T4vh12ss",
  "key20": "pbMrK4cyrjjEoxZFm5zk4ZeFLy7SjQN5XbKo7qX3KuXKsAAUDShYfZNtj1SMyvLvmjn8CDgw2pLjfP5EY3prb2S",
  "key21": "3zhfsnq3AtvSSUAa8HJuQFTyXx3qjsn9Xn7dWMyGnwkyMpe3rCV42NjVdhsMqakmR6V2R7jM2q7HYDtuCvNB4g6M",
  "key22": "4AsVoHihfMgwtn5g6UW1BorbUzShsF8AjksY1XJXLtTiRtxZ8XNZ29f4fkKyU5xmUtuKvmTqd8mGRD9FrnbVEZhU",
  "key23": "2ZD6sEq5N6YBepKgD5jnu8zWbPejY3SEuSgQuPPQCQmEiZ5pqFNgTdHw8GYzKvV6kv9Q6iKNCq3nVzwcoHBsMujh",
  "key24": "2sBFSxCX6wWpuREhLPjjFUkxPMtTFnqVLCfCvivkj58ruVFdHiaxTVhVbC3D1jjk55poxc1kecAwzr4J42AMn51s",
  "key25": "59YsQ9NFqdRfaHw93w55CL455afmzMxWR42kXxNvCTTDcAGjL6DuWiYUkN7dVQZ3ubaX9Pg56L3Sh146fuaXrWcu",
  "key26": "rXBpJTSzkabYcfUcUK8hNLFNRAmdFpGmcySAHFBt9nXicokhuLkKkzj2t2CCL78Gnfan42njUjFesjCgbq5odrw",
  "key27": "jTJtM8DJzibVvrQohJwmJVRhTV9oGLp8d9F77oTmR62TTD6XQqVGBECPbcJUBNWxsYuc3aV63u5bTytTBhnhs7X",
  "key28": "43beKsT4S4p3vaxpKzkFj2vkBgXnrRu2Z7pk6CiRxuziXj92m42UCujFtDdxekkYZNchJV7YHwps3ZZqTjhcQFoA"
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
