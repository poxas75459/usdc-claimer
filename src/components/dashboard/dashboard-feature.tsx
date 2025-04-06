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
    "396oWr6kQUFQpaLBZ7SkGdXHSis3LmujMpnosH7W93PpnewYRAZ9evBUL21e9ywnFjcjKZdUvSGxvU6vDZwwwvGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fvz3aBJVJFmVUWrTbdBSCzjbqE18Mzni7yWMVZLLASMKt6jMpjgJ13gozNmBqaHBVvr5YxThYWpzjLUrDpxqJMw",
  "key1": "67Nt31NTMsu9aXbfSeZvxCK46Q7seFWbQHfScCpZR5ZiMoqEncquvJqrV5nEtgU1A9QC5w57zAdqsSuRfXpkEcaj",
  "key2": "HiMvX9w67muPqtYs53SmuHVaf74eFRTgUTVv5xM17Y7WBra3mki1wHdKSccH9SAuWmU5qthQgh3w9DKYvDpK8zc",
  "key3": "7dPmhj9FjMRP5knStC5rZQwuKFwydBM56fNfRefxPm9BAMyUbXgwvbWuJvXNnowedT4ua9TxBwCueK3kwdXNEGU",
  "key4": "58T7sKvFiWs59rDP6q5k8wLm2QWNiERUBbEj3QWnzKbo8eQgB7RJ7mfVPYrZhvG8bHJa8EXGCDuwuWudt7HFG7h4",
  "key5": "43iUKT6Y1EVUb4j7dEZa8R5n5xeQ5sJNDwruhWpFSb9JoPxoQduBonGAeehVZeQKLKncECY5SgetbaVT4znjs4t",
  "key6": "QStovzrdWenPthJgZrLGLFmkxdivm32AqoFqN1pMSnQWGtTH7sSthej96TPXuYqtgkhZGGQriFXRtbDgiqmk3ZP",
  "key7": "5a8H2mfDSG5mK4rwo4hyYiBEjaos62659mhB6gmchFTPShLcQyoRLpsV8fbdzWZVYkvHczY2zKiE9y1JfQkqnXhN",
  "key8": "4Ci5H6JEHBTR8afHWZPhut58bYD6qpbGQKNRCn9erQ4GWkTXimMpqQaghMhAVXvEVYYZytXnEuW2omtWYnoZeWTA",
  "key9": "3syoiffzA8gn6SDswYDRyyw1GS2oqoacBJaqtiRnkpjFUBcRBF7PHbDAigqKhFxPJShrJpEhQpNwPfvFB1fL2etw",
  "key10": "3zLcJieSxEM6PjXVwmMxVvifrDr2fe8sXVjYixVRgWr7YFSBAXyxvs6uGp2ff8Z8prQmQvcoToAEeNnm6YQmYYXR",
  "key11": "4auvBRbrYreRRNoDKuoE6MNcnKZt9WDVCxyW29m9ejUwCHF4XF1mzZLXiqYsXstAQ4DcRAqtu2nfDf6v6r9bZeW7",
  "key12": "5GxKU5f55urnMGZMwYwbBqSm2JLgGCcDvbGKbbCSnSqip9maAaYsMD4g8B49pdKzBX4bTm1Hj3bCkgFm75gvUrVe",
  "key13": "mofv8jBvRVccu4LCgpf3z5t7z4NbnVnnGkXhnnrW3HnyE6xPY7TdwmmFbfoG8wzuCpRL7eFBpXneTCcy8he9SVc",
  "key14": "DktSnYPLspGC57LV8a8SajbGgBozMDcvmoVyzFu5iC7JdSy82BY9Zr7inKKDPmpUseacPmsCE8GsJNv2RHnk6hY",
  "key15": "2kLK2Zo2AdzdHgoY6TZh7XyRxAbhTppbjzpcoanKmPp1yWbHbxPppMFFmtWt5MBHE6cYsSkAYr6unbXB6cnaXVY",
  "key16": "3kLJzzphs9gzrHtXagrRBVpMwqnfevBbhxeBAUwoaKoxzwaLTHuSTNrRMfYfgmJNWDbLoueMEMscXVEg5R1TdsGq",
  "key17": "2qjmMvWj7gkijGfSupFeqiYoCjh5PVGNBi2gfRi4nETzgFVLeFgCPwuN1yEUjnxr8V73vAe8CYwdxhxnFqA9PTBU",
  "key18": "5G3kJaBSJq2BtaipNvoEgAhLXLnXb17QjEmYhyYBAzjotZcknJWkw3pBHEVW9GrUdXXXni3ekg6MRZgTYkqnr68z",
  "key19": "3tAA66pRgUGGa5E3ugJWtxNin6S2kbLtzqx7FYj61bibvq6NEhLaCGAiqVYBBYs67G8Ckk1pXRBAHnjRMDzXcmHL",
  "key20": "4NeuvirCJqsAqp1nTZdiLNBDUzEkPDWYq2guhfgRZiynizGs2ey8yYjUvrWYK4h4THfRPomtVmPiDzdSeGWQb1LG",
  "key21": "3RZcst8JagWFWnJApiapoVrxXFLJNWYXdirvwWQ7tV3j8vQPWrXU2ceAhnjeyAkTZrg7PeJnh1HhMyD2XHLHCuYa",
  "key22": "3feahAUczyhPm2EMvSZUSuunos5q66nLNo1k97THS5rh3Jqs5nr6eAvtePQ1Ha6SBCVk7YTAFCxKWaqfiWD2UM7c",
  "key23": "4sU3fWDCEU4GoinJTvQ5Hc2Fa1ZafD9ijE8EFqnw3F88qjzZdD8eq5QMbW8LfTvrr5HtVrwxG3ENy7aAz1WTYop9",
  "key24": "4RBQigrnJuUvR2f1vzJvU2datSoY4eBQCPj5C48bvG6xsp8q1rwmsnmL26vMkuX6TCCP8qxV84kGJxRc6nNMsPfN",
  "key25": "3nM9sqdBYvUGvN1BHe3NHU76f1nsGf9RuLT5HkXvANbXPfyYz8dU1es9CKkE5c9mnceXTHNMau1UkQdQDUKPbf4S",
  "key26": "4GussrECXFNKsfV8r59uJ4b12SQN1kNjZDRbvihRmB6A4Ti1WBMbqHNrNCPFwMC7DEx5nEVzgoJ3S22SaQcFG88a",
  "key27": "4KqZ5h88x8y5EyhKV1Jkw3tNxkN16NkMTzj8mJ9X6kRJTiHgMK9dePDUHYKjZCc38XPy87dGY1n671Bhg1L11e7V",
  "key28": "s1F6e8MNZEshsCvMnT6bJFRaXvP2iY6UDNsDucmPadJ5uLCvcN7WSw9gTSf12N9Xh1VzNJUwkH8zVZhn1duh2Ny",
  "key29": "5Zxcr4kWE8WpEaZFoTLtCo4CYSRSw5N7wNFoeLVCtJj1CggMAfFsHGjwTzdK3QAyyY87NzHyHZn9ecKu49MdKuxD",
  "key30": "jvZGURn8uGoUkS5KGC9Qn4RBAyMdCSWYzJwbNMBGkb3MFu7Hepjw4BSjckK94oMnE2EYVzd6gDMJaL1XR8NYUKq",
  "key31": "5AV3GZcZGbbF11LqAEcDNkwcULV48P8vhCy6kLdZkajQjJ8smETPHHyiifUheXqNz9KUUnxKDJi9Pc3TeKVrh5WG",
  "key32": "53Lqro2ZAMxYnA6TgP5iL6itwu4cGYKakhmsKoREFiihyKUjgj84AYAiKedBV3r5Mck2SNchELEgzJyWKuRDzuTa",
  "key33": "21iA74QsJDvRopdpffjbDvEHJRrtQnetnryein3MHevXzvK7D8g8qspsx9YAmwbHbZF6VwUbgkUQ7Ewt6J1cvCTw",
  "key34": "3aExXzf9RJp6FC3ZQPJwPiShQg7rPRyYpKvkvLVPKQetbBgXCgR9LR848ziesjCn9uAy3V7CBJkWXbxjJBi6H2zn",
  "key35": "586tMMZTwx8xpHa5ko3T1f7rRXQGREdCMv1cXbhLeHZR1xnxBYGyEaQTRaFeSvLdPYHBDVAZrKSTNbuHcz2YyViz"
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
