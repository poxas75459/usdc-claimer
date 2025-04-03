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
    "4euG8vpnKMzTUavVbbT9XSZT4pVhgR9xfZzNMw37edaEqG2bDitvpxnieHhN58tHzWMPdGgZJEucHrhjRjN9rs4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3pPjuML2cG9Ku1unrGHi9ZP7kHHv1TjYZgLzqNnu1ubpmGAiXgsbjWWY5GLZeMRx8yXUFLGiLnmNvfTa7m1i66",
  "key1": "5JDr2Vvr678jVGy4oecL6no6kqRFVWP35efyV5tVRE8KvxzjAfkUvHq4rKEEnLPPQpZn4gHWekwpQJpHZWa9xWsq",
  "key2": "KumoVrfTVABqcq7KPUBPrKNUsXbQuSCxMGgEs2uoNsegCSCYNiBgGPvvK8vwg9kGzrFuGvKV2iMFB6RL3iZwECH",
  "key3": "5PK42tCZAuzhY7UUwMWNvn1B9dgBNCqpqsJs5ipWHHpskaFhQEyjgKds3Ywzyx6u6MqAQC1bYpFkP7zb5QaYsN6F",
  "key4": "5AayFCDCusKB7PHzyWP3f1sWf9KguuQRSiU3WUJ8TmyFfV8hsdy7Qm2kXkHQa7uCRe1rKbumvgp9KTKovFQYUga4",
  "key5": "4HuizdkTFWdGk88XKHEPZEromSei59NknmQDm1LKwvMBrQTadmXRXQrXzu1DBfhTTgBVAtSXvhYDY1zCv9xhUT67",
  "key6": "cTQBPdmbBAKVG2TCkxEBkJiH2GHZT1m4idGrvwz42uGYXhniYeKTjTxjjsBC4EWzdGruH3qovXKrvhaNZZTuS5H",
  "key7": "2PDHgaCyGbSpEiADLyrbaZfqSuuBpzBHwY8mP8bkRMqpNGNu1zPj571PqLF9LAer4zFJVbLSYfCAAJpkbmNyth14",
  "key8": "2kobrvKRK9ZgvGQMHAC9AptaLoDcRLwvSk6h9jFdTU66RN3CSYxExydRJ2zSGBFT7ahHGJdAkFSxWMLBR4fXapRb",
  "key9": "62bvp3ed3hYBKZJS1FGMeEwikzNC24wVJ8kV2FXotQ27p2vNL8EaqpBBoRCjU6nxEYP8i6SyxcvqUqrFRFRbUG4d",
  "key10": "29udiehjaHvbjSqxYL7QqvfLfF5smFcjyLGSjgKAiCq32Rv4cQodLQVKUgMgSZMToDBecA23sb5Z6MRghMD2hGT6",
  "key11": "3dpPoonN8qL73zCF1n562BvednZXwH9nMsiQHumFWoGviPm5G9EFmXZQEejEutyMaDELLbrH5n5FVAqTZrKmGPeX",
  "key12": "5PZNBpeiKuv8DqmLN7kR2ZcSuc5YVUDsWdsTpT5U4Xk8uRrzqxUZY9NiAfno3CyjptvApe6XCfUy6kcGbqxpWe2",
  "key13": "3DagkjQ4V6eVD7hPQ67UPQgperSfZbWhHMTHfX6wnfowUFX9HShX1mLEjTwgXJz1DYpSrffcMK7sHrZoRfkxB3Tm",
  "key14": "65G56ZJCcKtukcyiGEn4jE5Qg7ECDFNm83XBLmwVvjq8iAvd2TqQHggaasesuBjgeMWrsRQyqp97N6ofna2xa51Q",
  "key15": "2bQqz4DSK3sq6AuBFyHJqfoq4khykuVdM5HxJtbEBPwTLV3dWSaoCEzSNvPYDe5zyq1etN5mXMAscudNtHXaWDhH",
  "key16": "2u5F1oWSNaATyZ2QrB1875SVjyT33AjVzEnBgtzvQBXyE8U2Y9J4yXkpWV9Yy85qrJwGBVvUBpSCkijyBxmFhGvZ",
  "key17": "4tCNxwjaXa2bEbJpT1Uh9cu9PrWQdC7g8uUSZR9Exho2yZ7S2AZpBJU9NgdaEH3V8JM1Cg22M7DJVJ2D1XuFik8p",
  "key18": "ahczPJSH3GQqWc4FsfupjUaNKiTxVmwWfXuTDZnfLtaArBfXiDKevCschDwVZ3NtaAcVgGQuiR7pS134zkpyjH2",
  "key19": "5Eh8WgX5DfUFyjorgkZkonNcYCXWZEwz9eZwbjM3ym7dSdn1EjkEG3DZaH9RZUEaDfiTcift1fkYt8QRvF3KBiBP",
  "key20": "35fB3Zq15tQqjn9eh5YKsZZVuGgiQbedYQVyeY3ftSHRsr6azKv3FmNMSsuZVCJJccdPYqTVWi2PgJMjJwH9stnn",
  "key21": "4hnCEZJvPQ5riR8TrnWXiRHgf38W6mYgZN7K2zywC5MvQnsdipKG5E6a1Czx9pbbN9GsYxbXTe8Hv9efDX3iJR27",
  "key22": "25PwjyVEVTNskGmBxW8zdsEc1C6TBNNJpoDmQUgRrBXWAhVG8JPsq4yYhA2U6U1SuRHfFte31QiM5fDQTddZp9x9",
  "key23": "62mVcLw5yKunEjUcaAYPgRmJATiqWtogPW7WMsdRdbVcGujvjsmE5fHuVVoAQmBuWLryte54VNsRm7ruxQ7E4inf",
  "key24": "4nYSKK1HWnMVbdTkEA6GHC6cDkJhB2jRv1vi4GfwgftWJ1AcQG2LW4AwTr9rJeQeeJo16Bs9EsCBG9K2rxRnpL3m",
  "key25": "2U4eaG11LpUFCT5ejJSuXpQs916xXsD4VnDYLLuZB3iTMUvhMRJMWj6m6Z7JDjbdt8BGsjhpFBtHLjp8nJZWCcfk",
  "key26": "5VL28hmxWTHnZchEnqLKiSumErbNKzwNS5a5B4Jj1zBYpFy7erEbmrJzqE8LcQCXvUWdgA6SQdE8RcP525yZY1V5",
  "key27": "4SquPqzpYfvnozwywsvpEj2G1hcgfGzqB7F96JbzkEP9cw3J74zqxMfgaPGm9wYEXchkmgjHRou6PfAKjcMLj17x",
  "key28": "5QdzevcyWjub8fFn9Fdfihij65fi4VjE46N4Vjg7xewVNenhbsnHHSEAD1amy3W5L4mD7W2NX7hZUyB1gnpQekVa",
  "key29": "fNQr1a4m7rEwQ9np3ZxAeq9KvjZQLfkMvduAEXpA621R7iwReURrJ2QUyadMU5E8kit4A99XbAhsKpfvYb8nczp",
  "key30": "3i9FVos9jBGXUipB4kyoEeoMENb3EzMiGC1NyCjNTh65rDL6iS43Es76nBQnNcsbFBYmcM7eV2u5iPQvAgiXk6p4",
  "key31": "2u2VnMvrbpEyBPSCkD7dbCJvweE5BckmeHrKRFo3HWD9Hb3cotFm8WY2C7uBs1taoc4jRxEeCW7yHUZ4YhwRNHb9",
  "key32": "4LX9Bp4wcLHBFbLp4VshdWD8JTEaVRyfDVbXszijHnAVCxXYAgojHsPheQJ7XxgtYk85RBoEcZwrfwzAfUbfgFGW",
  "key33": "3D1eBAFWgpTcRxPn3tWP2am8rrwgSDRzKZpUQ4UFSCeKedybZNJQHd6WyN4ZJf6buY3o6BKApiAnmcS3YTaGKNev",
  "key34": "5qbPz2b4CWHFYanjxsk44PWBXStDMiLaR7d7Aqct9ijbTpyuJTaxhNdys12SgKmQJWesBZqoiJ54YPpLN8LK9z9r"
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
