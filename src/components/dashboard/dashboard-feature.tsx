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
    "41TzejwewuN3caJuBfzZQbuWNBzpexZfjwoUYx2pEU8ZK1tQq4WymCxDbjWHn5TyFMQeWwpmQP5GmJnekQYbnJ21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FDDRc6PQY3mtGEkpwVisBpBBmiLP9bfscYKjKgBFQzXbFWKYLxMZbjWQT2Q8mueFrmuic4FJdfXCWvscqmGcpNW",
  "key1": "37NcuuxBsinx4zwxnCS9VV66VgP9LUN5pB5yLncBovL4ihYAfhtAkkugboiCzeuXSnj24TeckaNfkYdNwJLjHZFg",
  "key2": "5dtPgTABavNZzMiv2WpPoKoLxiFMEQRqU8oNLEUx8g4abTAKBK888RA8Av7LTq7J2ESxtg3XSYu7QWkmWy2v4XgY",
  "key3": "5o6T333D7KLQ2r8UbB6HJmwDm4ZtGbNJaWCrJGA3F5NFMusaws41xucff43MQqAkcJ4eK7Q6zCvbYR8DxcLhetiD",
  "key4": "bKvyKYLsE9G4UBRqRxJinUKwP8eCxoLRsW2fPrYmRYXpDTAWiA42MeHiq3dHzMgXRkYikHV9j5wxQiMYiCQpSEr",
  "key5": "66xyPftf2QFEUgoCT6DeTZBbPfqUFzwQjr6zkCYStpZdkjeCaS8QEUPKNVbH1BeBdPn2LzCnvJSw8ychbSDzPJr2",
  "key6": "3BWRoKkinQbk1mWGoW5BGWnmTnAyi2nGvJrYEqFBbTmu8reHY6NZwMAndhzQkyykTaLxkWoc5T3co24xaWVpYj7Z",
  "key7": "vx1ti84fjJx5Y2QRNuANQxJTdmnUZdC5DEMkWiSBTL8v22nzGKu1cYejGC7qWW8VxVe1zaNkQ2PeMvnmHNLHNwp",
  "key8": "14K3YRg462MBaBpX5YNcqBM8QrT4eMMyYzJcccZPpLZKqNzZZBYYDFZ5SgVpGgm9MsQyrAbEYRpBGi6ucYMpYWX",
  "key9": "4hHpxBNbz6D1rJiMB7nMDiNCLdEETnGxqwQasCFjUrXQm8vVNt5zyJ9xt1YYz8ht8ehP6tpHpFc7ifyfDSk98K53",
  "key10": "3gygRKpyKvNUZWQ1d7btQWAGKwd6MKobm199xM8PUeXW8DpksZAtomLsYTtqbCrXmAywYYbJ1uYkeAT59RbmMEW1",
  "key11": "voCetSXbBz9JvqfMXzQ8BoVMschDk6ARkFyRKyRauhs5bttDe5aPQExjtRZuvEZJnuwR1d9rD5EXFNxyXtCpsxd",
  "key12": "2cbm9oeaLgs8kWB7J8rJF4EzU6mTj5yzRrLXesbSYzMnKJmYUEc1jhoyrnUVbZ4dZ74xDdSoDuZaRauAqGrvJTAz",
  "key13": "Qj5f2kv7Ztvfk4ZK6iJMenRx9k1Y6AqW7g7Ja2wpxboYBNw7J1peXQwkbiW4XwBDybyciSptAiRdM6aHY3GpZbz",
  "key14": "3NXiUrQeHzKwvW2ntfx3K6Kk47yoHpGWQpTAnoFCuKeN8QKuFvjynJL7ufZURFv7vMKCWtw3ZKZ5upRXV8xs72oK",
  "key15": "5FvtM4kRYTJhpx6oo7MXER6j8Ah4qXJAXcGuorJibjFN8TwBqq8E7JKfhfBw9yzrvuecZLETzqMiepjXHS5h2RRr",
  "key16": "3T7mYmPxo2pzN2JQDtNeKfgXmwqs6H6427CjbrH4U4ynBA5EPyP8Hk7BJmzmZ1V2uTdhxbmvFGnhiBDcLsieMrxL",
  "key17": "3b1XbNGHmAPfTc436NVviNXKHCTY1c7TwDjQZX6qhqfoEbseogheG7rjE1Z7s3kPr63ZPe9KnbNpkZ2AQqJmPe1X",
  "key18": "25VcGyBLzoRpt2F4SJxGVD7EVeCLSaa4DBFjRVyZ4gp7RK8XB7ZRPQbfStdBE5ac38UEjGWStyA9FPn3D2MK8MXJ",
  "key19": "2vuFRQAUWUxr4YjxvY6B3eH3SoYGw3VRfhcPjZECF5XQ6X8zuHMy1vkbivBPw6MtbpECQQmcRforiH7ouByuCguc",
  "key20": "4meVJmDkG1BA4ve88aFQPmQjir8E3Nj7FDGb2kVXsjNZ48UizCfPorsrTc9J8Y8cjjU4tVe776zCFdcgdgyHjE4p",
  "key21": "2qdJ4yRfNnhbrvMEuqgAiMxLh4tBvT4kTHJJrmqb7rRKfqaAWrLNubqZyF17wbtzyr5YHzVa1kGDNrtcXBdUtRyQ",
  "key22": "2TvuJJcpUEZ37HurgLz1RwMpZwLsgXRUDDg3WcF4qFvktLkMw2F7rFzZBs2uT5VsUMUNQgm3GRLxXB8MkSmHNHJ7",
  "key23": "5K7hUxiNnXeyjT5aBcTJ1mz4fB4Src7CziWHHg6Gmkv5dqNY9Lqga91sm7LDezW9tc9Kvm8qH9Ku1QA1ouMagoKN",
  "key24": "5BQcUYvrKPkNNs8ZWBwYMgBaPP141PLnTWdzirQjC2bVBpenRyENHbEDEhAKaqj9WrAwVxwkx8mhWjcGGWcfcvbR",
  "key25": "AovYbck3ezocPRD8UBCwVLnExT3zdQ8fyn3YrYzhBnEymTbASq4K3PcgU2kv6TPZxvra8G1xU3LmHceN1ikukM2",
  "key26": "3PMnkMLH2E9SA92CniJV7RUKwuPyHKmVN14ZNjMyQ8ZrM8Y4WTTGXx2R858ddXMkfPCZGKdNgKEaPa1y9Trawnc3",
  "key27": "5ZZmmzjWAyQteDmSL5AKVvrt2BXQYLU8ReYHGANZyCfDtNPFck8EgqVzZXfNzvoaHm8xKeSbxoMW13ikt5QweYZW",
  "key28": "5W5nB9aJp6FWcAJL3L8m3fyZkodGwT78ExmA5WfbwwecQJzpcRW871wQhAguoDMkxSNZVscythy3n4oTy759uTPT",
  "key29": "2uAj5TBQoUPavLELbcUx7ehbDztiNKE5KnTQs9iFBdNnvG89AnLLEjTV227JUy3ZHt3PVt36HWj2A1SsXwxJ363k",
  "key30": "55DAFrRMjxvVRdpfmbvbnwJr6D1w81nHsU1PQViD27N3v7TqYBWw4PoGVu4iWD6AMXMaj8Lagu8Wiy47AcLLFowS"
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
