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
    "4aWwFjU2e7n7Db7ZwJAZeCJEc5YforEPnBfB1HFPhVUMauRiRjZLp5fqh3oK9WzvNAwACrKJSNKvM9UG1BNP4MJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KTJqRHAcztTLCqesCFkYhhhCHtx5uh9f6XAkGMyst8QxdLT3j1hw3DzoNd7q6KFxUJUovaVT8UPT6na5tMQWDcc",
  "key1": "3PAd3Vg4GzK4AMywMq7abPp9ms71bbu9EF8Nfdn8awDyBbrudk9qPrSfvED6HgjDrXV9i4fPVq6rqrMLaY7LvmPQ",
  "key2": "21H5bsW2CAeQdUYgNGy2cV44asoWmPkGD3mzReo3EBcbtJRuBwZxcoyrcGNTjKEW2nwZWxuRAyM1v8VtJHRmGC9D",
  "key3": "47j4hHTK1AzC6gdj2GrARrYoU1x8iJ1QXUHcjPyJqNHGyy8qLLJ96jd3PbN1THy5eLVR62weNV8KjCZWK6hRHYhS",
  "key4": "5gBKgaAzARJhqtwNYHk8hkDKx72tjQarnyNKqWWbYxs2LLbAydyJTBKB1v4CWnkg2pHHoJ5pkzntHwUnDAsQH9nE",
  "key5": "h9wd1dmG3eLdq4ywzw8tv4pMYxtZNwiZoLMtANx6kJ3DukFkGjhocdwydDatEH3w79yCiFYMatoT58dDvUDsZfw",
  "key6": "3FibrHrndG42J7LxCQCbxJqXcCHigZ5hTgwpFW7ffbS9bEF7DQhJTrjy7K2JadZWCyhzKGUAgG2mLQa9hFUUq2ZX",
  "key7": "3htSt1hBcs6Y8XpDKKGKnCUKauWsGkaPydCyjeNUXMNgBhJumXyvt27nzgmxNsL1aHees7oChkE6tgyyfQwv6D1b",
  "key8": "4hd5iwK2bAkLDXuAHzzkkvMotAbarrBzU9MF2xPfGeT8BMqpVNa2AMRMBbD6s2EnTPGMnfjr9AVV9mvtQXsXfMje",
  "key9": "3z5WbKt7VW4vaMzMDGeLM22kz97jxRVtnMQPpDUbD5AeKHfWwLLJssc6ZEcwDZcTeWqN7fyMn7TUYrdXjatUZLcJ",
  "key10": "3ZdTTejFjkaQTjpuq1tLLZy6qHBf57ECd4RHbrx6YdykU8YdjgbX1xzk4jd91gbTiXSisfFvpYxmFc1UHY2uopLZ",
  "key11": "3FJeh78m8M7aREXF3ZECWGX9i9SWp6rw256KoaJeKHuYvfUqsF9P3tdfRSp2fXkdSL5osGNibFW661ZhFZRXcpt3",
  "key12": "awxkfjdDCX5kdhzfNevy7S3dnDKUH95vsHsJZcJ3yv9fWEWSwVMaHqPTduYuWaS8N4dEpvo22TSxuFJRPj9S88p",
  "key13": "4fPLMp9funmNM2VNxM5mASt8EfTrsRKzFr8x3RUVTytWi9n74NZXo2vvGHXLm4WHTbjQqWxYTnHuqMvgdVwjJoHH",
  "key14": "61DFQ1N9dzBhFvAiQQiu8SsGtyyCKiuNNYsnAXER23DJuiooTgQHjh9QbNdt45CWTRR3Fj7am41eqineKHDhkZEN",
  "key15": "5ADfYiTz2AFYHvxcRv9HCDW838EJdNSPknKWtBiZP9t7g8RoWkcZ81f2wnBZSkZDKfKdRAGVjLSw9aHAmPdeecWQ",
  "key16": "5GraK55wyZu3mKgcBukF1NUAVse3uVYqssJNSegjiNu7emEjAvJopXinu9Vy2YwYGGd8twxCypFWcAkhkKonjQRE",
  "key17": "45h4FNhtqMJpDA6jV9ptqCnrFBs3aR3tckcvoHLLng1XoErir69KXirHeUHoNxbjPnXzSBLeE9mSSfNc2PHkAf9J",
  "key18": "4DTXgUEoCo9nwqQEpH1CebP3AU6zKxUUUkwesZjhi8N5NQBHe6GDnLX4a8jrbuC5pLm9Bf2T95X7pcwUtFyyV2Mi",
  "key19": "2eYHfXVovi9HJEnwaAfZHsDQMGHWvanUnyAVwWTpnBbgRkoyfv83EA7DRGoNFpmqoMgAvfB5dN77sf46iT1y1ok9",
  "key20": "H4bJrxmjhKa8mXr3w26PeYnaTG74ztp3Wb5Vt6JTnhMRDQLUEH6z1QfyKskRi1ykpASeuPYKmJ6ccLHVwoV89KG",
  "key21": "gGtdGpRAh3PoDnyiSG2aNUbaJxFqh9v88pgu4TS9oYfg7tPRwTVGxySrw9258YcAFZf6dHRjHpeokUhMnp83FEf",
  "key22": "4qXztBVAVARAwZtgKKjT2XYbjBWVpHaA2QTNi7D4aroUerHyupYSj4F24XFUS12jyRsUVYsHnuS3pyeWF8tZ9zvH",
  "key23": "2ArqANrVHTdWsMBzNx5gQTA67fm4aNEEUaCMnkk8S5qCTrMXj1RDyT2SG2KSJ1CJ4F9wTTHn12jeqQcxgjWk8DDv",
  "key24": "kvhnGSN3R1hCHecTdabU5qcgxpVLAR3UfwiZpt8Nnmsx4q3tKhNbp9BcA3pasGRG7KUpPsmSvigUFU9WyTo6CWc",
  "key25": "5hveof5cEdE2PvE1MEFA9zrBuVoJxrvuaPRLWkgrjh6mPz5bChiv5t9WNTkPbefhTv5SmdPgJ5ifBodZ21otCMB",
  "key26": "2eLokvi9Wa8QpvPERoSSbizRvPw8djbAhU61aKai1iFTzdkE4T7aVdYEonbYa1XgaQWFnCnET7czQRKZtqsg5Ztg",
  "key27": "rPiyojJB51te2npaqBtgg7M8xwkx9eDCEqPa6ZeVuzgvem5sSTHVKpbVEus19he8QqKBwPxL34Xye5y2sDYDzdb",
  "key28": "4RZXJXtPvd8gVZgDLJCQtx3bC7im25YjW8Ez6zUnRQC3bw5UyHJGzM1oM6edzzzGanCZZobCYBHbRwNnvS73QkDh",
  "key29": "3kWtUEJRvXrKm36Rv5EGRgtr7hpziKTZ5t88NbACfQEDGcE2gzTyC6toLZkAexsugZvrUNihycCvYRXdvt6EnyAw",
  "key30": "BQnvLQRvcj41b2kZyyooL1SjYE6xa1i3JMz4FB8JUEK7CVEgeqRBuXKZ1RH7kdPPF8StL8MTN2Hp2vZKQBp5CmA",
  "key31": "5LNeWek88n4BQ3GNxq7Ro3EPk8adA3NLgkTXPF8yiAq7HWS8tKJfkLMH4okaSPLurvgLT49aNm7airiws6ZydFAL"
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
