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
    "4ndeTZceaGXJ5FahuzmQBZzF9E7qvGRuMu7FyHNhjUuvtKvttrNW34eVYThmpfzjWKpxdXNoJWRYia5SRe3Rzajj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qzxcSiSXAjpLzLNV6RHeVAwjSxNC39fz7qNvn9nays6ENwAfCcpttcE2QFAHmiatWq5hecajemKYddGSZvjtSGv",
  "key1": "FciBuKNn6Y7TZLQzc8JNvkKkR79TrgLFCEo5CynSyERYjUtPbs8S2tqUmarcSBhFTfVYgEX8mbqeciJUTdnL9t9",
  "key2": "3Nw3Fjkk8JLNahVdxXXrFD4DnXJWUNqyJjYq5eiGf5US2QT2Xr6CfXeWGqK2LZa65YzG4e2dBibz95xD4STENco9",
  "key3": "27NGZXLci78i9sWSdaCizk86n7gURgksApKShC3FPMe4vx7vsxwPAKnpXjiB4r1N8Ub6kyYDfvVjEdBsXLGa48XY",
  "key4": "25V5qjqzw2HRGCDLLj4VHw3i55HXMUrFMDvnst1mpP5JJTnLjNHzGY371xuDhe5WmYBc3JSnyvEAKAboop2F4Uwa",
  "key5": "2WW8qhY2nFtXz8BFhieKVrNZNrAmHdkMVW3RuMDUT3AqA871YfhnuZiXmp7mGSH4mXpvNaMWavEcmVBr9EKwPYW4",
  "key6": "uRPA1rmJiLeiNcYCxiYQW4hSQXnyk4h48VH1bFvzXPyWAyA1vB7RJxNFNcFpfDR62WgKFhfeJSGiXwXZbXgiKS1",
  "key7": "3i1MZsxpyptdcTCUh2nVDWoWncazfCBpGtrEskV6j1BVLk5t4FzUzL1arfYpDPcDFKwjPVbj68fFmadhpPzgecwC",
  "key8": "4fB6sfk6CT5GodztQfiZmyFMK9iSnG6TPFvnVDtLswUxeFgM6JabH6rN2QemR8Z7kq48iW3KGBuCxWpaVnHRKKPR",
  "key9": "2fTWo5LprcQJKSnLfSffasS1v5VJEGJ28iFeZtTv86sbhYim575MN49x6oUDupKqhcsapBJoLBJ2vD8sTmrYjCgR",
  "key10": "3owUhNw87cqt2HVn6LBnQ3Y4F37mgPzFVT7HErYphK9bs1bX7zEAhdFNzXR16199vCSi8pHPRsrwM8Lj8k8iDQzU",
  "key11": "3G2T3mWoqmUGX6xQNqwjqTePptptD7SJobzW1tirXvLfwYdm5zvGN6ANhVYv9hjfRPaYjgCnbU773tvAWhzC6Sii",
  "key12": "4desTsx2AU9Gx667YgfFS7cG3BPv7z6Kr8w9t5YadhyTom6p9nwNdc3P8efsKb6UqHYCKQtb3avqZczLsMCbudGY",
  "key13": "zWJk7PZ7Vgngs9W4kcMnf6umBcUQZCc2zUWQdUZRWzTFiAKZLfGsF71Cv5EUH6GbC8C2V4AJMTNeUDTLtFXDAnc",
  "key14": "3tXZHuGi7WPmV7CYERdYYQ6yJoB19SCAmZ41SnFPTHGuqmC8hVPtYFHBiqtUJDevEdaaWni42YUYmmLEDsTsH4tE",
  "key15": "3NPw9Q9S7izLJ6PontAoi82uMAcUaKPYUtoos3ZUjPSrZuio5kuyaAmCYnyAZbZPxwJjrbPyJ287Y95n31R2X5uU",
  "key16": "57XKZnrrypwKdA97BCwXrgHKyhBAJqVDYqo5wNd6mcY2uCJfvNexd7NTopNS2TRDTsARmEUez4CeDtW5GE4wQewV",
  "key17": "3PnF1AhcVgb6ipfvwECqAEu4fpd7ZAdFNscVyaf5tkWLkyAjUiyPMVmpVuGvbmnXLxM1owm8Gb3d1hR87g6NuLV2",
  "key18": "4BBV7W4iwfwtkwurt9tzcA4hzpVhNQTJQeNCLbs9X33st78sEEVShg8DuNx3GbYjN9UeeQNuWEsQME8RY9uSNSDr",
  "key19": "HfYGpcjBg7tgXSeT1fcXgWd9WASinFHc5bzyDueRQx45XQ8sNrd8KAj6AoiRdgieYexFWpBw3Vo5nLEjsXwE5fu",
  "key20": "2krRCr8TuqwoQHzo4hWRiP6h3JYbvVMv5C9cQACzZJmPxhL4ewrm3HsSsr61Gpqy3p9soUVvwQdov5sNqEWTghBR",
  "key21": "5MkjadbdhGnXfxSsKEWefXhuVUmDt6rpeLT9QtUFNcvnqgd9ikmEr1AXyeSaRFtmaCsvfEWViYWNsDGsXqogakV5",
  "key22": "64didW9pupHtomtmbLGznJewrvgyiz82Z6qSgHCsUkJ76wXxAVjAW6bXSaKh7iWya8d1KPx8U1GXpseaLfpx2qn4",
  "key23": "5pzkJcKDBMu2mk81F3ZVYMLsc4kYxToVZX7PD1Sfrem4QNtU7iwohEQftwHrcdgN69NXuJJ7dAritEMaCkkKqyz1",
  "key24": "23e3CUpq7CZWi6TSKykUEVPM5M4Qu6n2Zg2LqqRXi58b5jpFt5p47KUZdvg6fwLS8MnvvRNHet2gC7cTfsA412SS",
  "key25": "5sgtA6nWKtHhb9FsWxXC7SpVFgfNjfSjbEnHxmrPyCEqgMWhydBkq8qUuybUoPxogJQqUze6QdDRq6phhvbCshbp",
  "key26": "4LcxHXxUyaTtarFe44Q17Q5a4ucSDn7R2Dns9pyA2EdNuwi33ESNpjRVtSkTRGHGsa8kKkCJL4xN59zQcGRnkaNS",
  "key27": "5cFZZM47x7dH8e45GJUy9tXiZvC6beNcUxzWXgQiWwiMvkV4HonA4ZUfR3aS39kFGxrmvtXyaVSyTDQr8GuD4guP",
  "key28": "3yDzRcTsEEoxtUEwLtegA3eqtNQDQxFA6ZTUKk9Gpw9WF66QUDxyu3fWzHKH6mpby3X29uYSK8ZDPSj8v8qjJEsJ",
  "key29": "5tS18zwUNx1ysTLscPMHtUzKoJryCJXekjAn8PEA97wu5pSHAsbheeFz6zEwUnjnjYjazRh3LEkAXJXxr9e1z83Y",
  "key30": "3ffUhP6i2uJobvfFstvsUx9MKhvCKAbWvU6YaruYfKM2ZgvF4Ew7bN64vgexbiD2KyMLiKq65sEw9t7q26GQ7YyK",
  "key31": "2YYnvo3EcHcQRF921yFBVbr9pfdUAihr8C1gVKd7uGs5EYy2hKRWDX4MhCzDUTLG66dGacP7nScsECXmtBuG9TJB",
  "key32": "5bER4Xj4umJoni4UVYaH8hngNQ4BAhooiKBxoL4jdwsKZzK67K6ynGH4Cjk2HynrKpbkY5mgC6EJUKxanZbULkpk",
  "key33": "25oUZgi6LCuEGWsPdJuWWFJwMASeJUQmFSP8S2JMs4SroRvtkYwJgUx6LFmuNGqPYbSiQM8EQcVFUngUQ5fuYGXU",
  "key34": "4aN6eQ6rsaTUhqE9dCJ4HgtHP1uG16uhcpZycEL5C9PCkqGypcZJN1KBKAic6dNHYYQfCYkLEPN8YWR6PLHrVkFq",
  "key35": "5xD97GKXgUpbHFpWZnmvifqHqxawwLvoxwbUAKGiXG34dNMMdgtjbUxnaY8wHJ1QqibkTUECsjRCBoiX4Y4XHwQg"
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
