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
    "5kV8NysRZ64s2LnmBUvnyd8FYMYcwUtV8FoEXAjtWGqVnvqrp9D8QBTWfjPtBvh6PhbCB3JwTyRefrijHiLWBria"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bj4QVB4nrffUEuUjpP1XpQGDQaNWQDP1nBvnWqyUK2so8pdS7CnT5TdN19REYqQnAWKtek4zH8YzAFyZLRtYrxV",
  "key1": "FaW4N6CXvZWPF3Lrwjs4HTdgSza5JnxdidNndynoCRHDLB3Cj1NR2WT2xMgmj5Vr8xonYwDKXgM2D9trQ5pkC8H",
  "key2": "5tQSAzGtyLub155CNAksGkxQ83tQjTjAbfvaXvxai6RCrD7dBte3m3rKzaNceASBZyHB93fXojKzqM4BPqrywka9",
  "key3": "57TVLNzkmJBuHpUTDVoj8wcMGpMok1r64jQ8Cjs1YWcNvXct1yxVFdVwwQ8wRF62r69zynG2bevdAMQZaVWqrrCQ",
  "key4": "tUD1FADmRsFmWXtr1XHS9boNxq2UCiYnU6Uybsy3pNKohX2LwkBqFp7aQ9pQFJcRYCEfsgevFzW8oV2NU5CUKW8",
  "key5": "3itZB3CxN9rUcdBeG2gmGDyuppQax68zPfk7zoLXCzMuzr9bwBvj71huvQYwPK7oDjoag46aPwjSaN6EzJ43c8HQ",
  "key6": "3cce5aqeLCDvoJVhwZCZWMzM9wLLxmwKaRkpakpUAjGREyWNtdmC8dMfQK2SvhZDwaUPp7pEjBL1crb3rehGHPp8",
  "key7": "e5WX7cqVZSh49NixCWWk55iYEGmmimbiThBkRSS2v3WAyzYJreAXXNyJ8fVXoix6TSghvX6LYY6kRZSdQ1Qt9Ci",
  "key8": "5NyDrziVbCNdWL38kgNAK3EQKHWA6no891CDVvpzjzJsWpozSGupw2o3eLmZwBM6aAG6DWFkPKx29zPjxFLANBs6",
  "key9": "4iBm3cWxKbf6AXf7TL9uW6LfAHrAkWEK4ciX1XYJiw9gHVApHKGjR4JS7tgAbc4ySYbGccwiJSFKTULyRD3Aqnou",
  "key10": "2AJkwPMhzPnZGXfG2RKAwJA5BdEdhPSxaux3TCRwVQdWpztbnJKorswqjdfxVjbmxJ8J8qdhXn1d3xFtL7hncpAB",
  "key11": "3ThPNNY2g9zQ7qkv9vXXECukpdb269rZ3ybx1zUxhqsbGgtdooooanW1Sd9qcYWBKe11pN8xr8U3E29gvNu7W2BM",
  "key12": "2BWNqqhk3bexrQdzFAUA6EDjmQmhW2aaHnK5DgVgCEpEpXm365epDRTwvgz8Lm4ZdXUKefoD17fiYFJsenHEU4bB",
  "key13": "3okj5CSNYUkr9P1cNVx7Up6QKyRL63qqhGDoY9sK8WKLEi4qJgxguRmqPzcN433RsB5Vo1ZvbjXJv4SRaKavY9aW",
  "key14": "3DUjYv15xcrg2EwN7fSPxaRykELpviqJcEWxqpN5hmnT5Ja5r7mu1RY8b4gUjiqFKnwnhLxSanRxu2GPNNYPZh8z",
  "key15": "4DBDPypnWqQojhzrD3fLgiVxE3ft9VJWfBbG3UCChm2h5Ay3rsQNCC4ZLGaG7ANF8yqZBp6R7JwvCY1ePsDY1wj7",
  "key16": "3wh29TViGKyEFNXFZu3f1UgfRPxBTSq8roPZq79VkvuJ4FJc3mZYn5CzUHZ36xCtJZXjrCSQ8iodMKsAmTky6A5e",
  "key17": "2PxDvUwD8HXKKUDAK2qpC5Q3Di1HX5Y49nNPj7sWwVgeZ9PFeoFiPe3vYXHtukZ4WpfzB6yDyrJiuc1s9EkQht5b",
  "key18": "4MXcax5y7GBLHUj8encUJ6n53apJU3iMoisFgSZn6ktPav7K3ZfBAtA3yhapzUmu1ZPzi4NeByh145pNZHoKGxFf",
  "key19": "4darnrJbKs3UaMVZEPdPLgmczb5US2rsnm2yrTNUdwQM3eyspmyeKMYAH7N32PDggVFbEQv16MeVfGqM6XGPmyiV",
  "key20": "4xe5tiwmrPpbBo8kuTJapXVWENHoPBJDpZNuAGkapHe4ba56cbr9SAV2TaN6czV4gZJ15zJpCZkjmC3VK3o7jDiN",
  "key21": "2pBG7x9RZSCZDbKEXQuJQxvHE3E2qWhYiTFJATntCanjYZMHcidubu3qLJKEZSVfnGV33tFs3boa8xJjtKXiso7t",
  "key22": "38EJo5N722Vx5wx1qv26yuXB5NAacWkM5q8etpFfuEgH9L5dsmebuK89d6yoaXxYW2FTiiGRBQwq8xWoDSSw3KeE",
  "key23": "3i6YfYsaiJCo8B3o5dUnMyjFqHXHcZ7h67F8arK5ZaaHtBADhqXBTj2RJYNsA63kTsTUkZqyVSJiqfKYVWLntwTw",
  "key24": "2op7qAnzJhD3kddG8SvPm9EmgMrJvFpT7FxTmSQg7UmP6bgSS7SsteyozKBLmvnsVp8QHaSHt7jtexubZ6Dw4NRC",
  "key25": "qQjcJD98ufSVKdSzonz5UU8XqiracFhzoKgCcY6niBcjNJoWqVAPnBZWBWJfTp87qeeazFfoVxzFULpjamGk2Dp",
  "key26": "3omuyWxuJWWca8yXjf1T5pY7A53bjUK163zzXpd6zcMS6UeRhP2J1pipXaVJf1BdxxxqMv8h532nte3Ht1Eu5xVE",
  "key27": "5vvCbtYQdZ3355Ma6L33wFhaXHWJHNh52wrCBJnapPqQLXsvNQkZTnsRAAdHSwLhTeGKYpmm4BocH4wGzgw9gGnd",
  "key28": "2otXUAwcAezPewNRfzNavPZh457ddouHKkHLgBqFZ7iVmayhztbopnEpMwcJsyzUBdY5ertPmcp572uuKxMUGep",
  "key29": "cNCeiYaJdrL8zcvDLEVqjBdpK6XyFN6DR2a9ZBwPy2rPRQ7P7Gwd4qCBwKesCeVm2kz2j4teg5mWX3HZbxzE38i",
  "key30": "L93PEXytiXzP1JGj5u5gLnTnEdMf9zNdMjT7jYqYtHG1zF5RvZahuG4e6Aaw4hVm12umqVKdv1ivfyYjbECPfCo",
  "key31": "5NupzpK7XjJx4DfQZcdgizmyspr45UUfWr8VWmZp7R9KBTxMTKV18kHczH2VRzgnh3nVvYiwncRacMCaNWLhVSBg"
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
