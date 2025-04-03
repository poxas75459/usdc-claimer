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
    "4amrQW6eorxaysq2MY5UJHZsso8EypuNNVt5nrVQtBBojrbLaYVcqVJBa9Me5XhSYQ6RaoHqf8G6NCFqWbQogARi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WkiFsyvq4JCPKNRrr499aAxtdcANdJjKgguVHvib6MkwFWKXzWs3CTNWLkiMYyJesnE9CNduGdo3Wxc7cz1r2CL",
  "key1": "4jZopgPjW6U94FGVCNaC735vp87iEzwYpvLre3jgZGY7mPWJeQ6worKvwaVEwm1NzXApeURhP1MiVpEoeRv1JwGT",
  "key2": "3kvjP1NMX4bqXHPAFaGAFRc41u13MfLeo73r1jafL8otF5cQ4PQhscFcUBRZfq75jowQ4m9tqykmQ5r4jK9LNXj",
  "key3": "vghBsCgAiA7RMXaCRfZFNykCnSYUWMUs6yfwwdfGy4zAh23LTg4eKzA1W9BJ46xU4mimqf7vt8zCKtjxMWhY3fW",
  "key4": "56cYp7XHzLwGD1UNDN2f1GW6JBPP2HriCj3YEEhPBkPSJgT1M5fNrG3A6qeVJzsmTgqsNp8d5R1nLQh3g42mkLpK",
  "key5": "5XhAM7Zx3kj8MSAuHC6rNLrt92RTmjyVEEKb89vfhmM8TtxMpu5rybksfzWPsFoZhban2HJapwsTEUc61W13A9p2",
  "key6": "66pa9dbRcx3x9BZUpbpL9iXHfbws15a3U5czQTJSiJunVZUpT94Ricdzsdn7yZ3UiKctCmmpx5WfWH2cwVyCbQ8G",
  "key7": "3xUu8r7zoFJ9vE7spfVzExZzbzKz7MddqNfJddi8nWEZP2NSBJRa3PMr1NHxorK7sGkZjoznsAHqwGuJgdpTtwow",
  "key8": "4W3DF5twwJvgu78img6FAgXMWbvXkL5x8xnZSTAXk1fJZEFUW8GKn1yebZk8LLYrhJUrTVqUFhpuK2MFTY9AJXqL",
  "key9": "4m5wxus9wxVgFepip4cX76h4DRq2tYar6uWdNVBvgTr7JqSaki4eEYSGgBduaNgn8Y8mmYc7sa8n8oP6U8EwFwtw",
  "key10": "4EwTQMsFCJKpAVfGG6Z866dQpXbxgx4Jkxq5kuT6LK376aSh2AfeQKFLPvFNdSpYzJUfC4o2JXuC4nzQZ5gt9oyM",
  "key11": "5pLFNzbiKjcsv1N9XrnKJm637cHjvXwUokEu5pJTgMpsxrrU6E1wquahXrcQWfFLsAJPk7ftEXePGoL3jJr87JKA",
  "key12": "4yLSN7vU6rkRoiB3PpAHj7wLEG9y8aeCsttryMnZNTG5BzA2jvAFLCf1aaZkwxt965zn6JNpugjKxWpEmicNYfjg",
  "key13": "3S8WqNofMUJbma2vwy4kbDmAXEGdYgvqkHL9cqiQAWd5mpTzmVYcixZEMyzXTme9Y8Cw39NT5w2duxZoXZNCY7M5",
  "key14": "5DpuakEXS2eBScSTpbiLkMaZhka6h2WcVvL3NG4pgyVuPEj64MSJmdZ2UyVvRdwu6B79wbFHrBdRSsUscXnGUHto",
  "key15": "2h4MN7mbveRFqczX6zUHeptde7KeCnwukLVM8guA68Utsmr5JUEQrpkJ7V89pWSNyxr8WbRytkz2v94BNyo8QoGH",
  "key16": "2B9D367yjG74bjVaHgruV9wNxNbpUPEm9mMRrb9ERQzbb9fQxNGvo4fr5YthbhLcp8CASZ4GwQUdLqbjnE8EBTvm",
  "key17": "4sDGXbKnXMM5KuHdtUJerJaQRMsGi7SepCVEzCVFi4YHfnketwJVv1jq3XLa5twd13pNma63XQEMmgMNyF8cNtVK",
  "key18": "2nbr5CPUo7r475rstVeVr8J72rBn6jcc7hJxxFjAmJPWnS9MiLuHhJ4UvLk1gWAefzSx61dFM2QSdRBzDLM6Gpke",
  "key19": "61iV8VxeQjiJx8Y3rNMqi7QHqPScpivQ7wusdAQySsLHmkMESfYC9XWCYyK76gBUk8Jq6kd5ZFYfWbEc2qDwFzLw",
  "key20": "5pj3MXJ7xLLK7JAYRVNbV3vjU3vjPu7iz19WU7gWK9CBEgsifcDSwWzvKy1foDcRUCovhpjCnqicuADGZPKkc8dK",
  "key21": "dnSGZ7YCbRDsiyiEskQsqotVUgctNF7YSZTfwZDwEfqh8dGrwP5Lhdui5xS8PFrkxeHkXsVZ1XqcoRzxKU1S63h",
  "key22": "3DAdjrRw85emkNx7VRGXrw7ojz4czkGuXUCngavE8yzHjKDaG1K3xQPDgp4sSgnJhZMkkHuXgaYtFBqJJa5sXsqo",
  "key23": "4S2MwfFyXeEj5L2apFGaTGyQtkrBcfhe8NkVUDPWMYDMNaBxutRe4dKYeCUhzypD6XnbJD9qajC9Jd2CgJ4WxKzU",
  "key24": "5Z3w1mp5U1zWNzJG6JSQbwpL6sENiC9Cb5dnbSbedRujk35VEe2wtLragjHv1HFVHsFohHQ7c45L1nfb728Bg3AY",
  "key25": "2zWLm6pqJxmfsLHSMztMvkmGsPHbipXU9T58pxf39mTWcdTnw1KwbVBhR1YRBzF9v7Hks4nhJzqFxkUKguzpw7bu",
  "key26": "if4Dhmfv22KPA5nrABfre6KibGfcZ3mX15r9QbNcocQJaAjxKv9p47uy4q3cAf75uVDUU5yP6qaXFSHsFBSsqtK",
  "key27": "2pYKFeTRU5BMfZ2LhLeuQVTdTsC9jXtVi4QuWJtYNvTwz8YA1k2H5f4BYt4FNcwea6K6cPa6jmat836L8q7ss8JS",
  "key28": "4eS4sQNip7eNxX5L5BYbpgn6n8CgYfZiumsuLtQHy17AcnYdo1YhMo2DxUTgVkFtnUXCMqHt836P7v9oWGa94L1Z",
  "key29": "3Bh5cyNvqADYisWtMQx4kSJXb5NUgHR5rhTRWACrvQyKuUwotojoaXQ14NcJf9VhtbtxbNZrwRu13QowgVDd8QwP",
  "key30": "34RtkVx5MthKZjni7jDmpCh5JfDzHbJyruGy1Fzt7S5hjcTTuWBczaQaKuNFBYDjtyBw6Jpdi9qjCCtpSw4VF6fU",
  "key31": "5GTAF25Vm38DzKFnWsNhvb2VHFWXVPFyvVTZcsTUbXuUx7JhuRZodLFx7VdcDi6tE8QYyuMDjHT4DLayjaJXQZLR",
  "key32": "2ijx74gsJNMBw1vDuXCCp63ew784FnkvQbYzuLpZprJCsspuCjQe8E9QYP9hJUtKLpZHPVZaJvS1XDUEorFpXb1w",
  "key33": "5GAnbgqy3TSc9r7VhbmJ6wjmog5jjj1PY1cpwQy4EeHdZGnkkGcSsrErL39aFWdDAteBHezD6tqDeP9h6T1tU8AD",
  "key34": "3xDwasnGPFe4Eqb8TWdFsqzw3hA9smq1LrbiMDn1xgHx3dzNctkx1ye7ubR333tynqDKXiVzy2ddBezVPPyacEfE",
  "key35": "4cpHeowYSZXbLL6NHMc9pyUbtuwAkj8QkxZ29Nbsj9NmikZNhCjTN6WZuj6Mz5Pn1fqNsaGvT3YzELwersV92QCy"
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
