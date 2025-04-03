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
    "UytYnLGnHjMH6frYdNZ93xtot5RA3p3AmLdeR9qQspn3pKhgaC9XNiu41DW3xwgh8yKtSmpThMfpfcqwz6JEtJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b8KRSquV3D3iG5S46JfnQt7CabiVjTcF75aECFUzSrSvHuGSrCNtgyaRzK7fmp5VDisJ5qXYUUYe7E58hx9wUMt",
  "key1": "5uFvQXXemReGp1fRqmyQQyQHPknG8xVTH5frWYmCuEQCKZDpLukfT5qqB8sfkZBS3Njt5ggoQGt4wWytab8Khvir",
  "key2": "47YUx1vP7DLvPsFyV8DQCaVnSXnKtyLECBxZ782A7kopNKymVpJqpJGfXpTTEFS1zWau4exRx6iZ3xohtkwnVe8D",
  "key3": "58q7PFsaTPvgnVuoYvRGKHEFsZRiqwEMbWGnv1wySHsxj2tCE4wDRtdDU75aNLfeW6QCpkHkRqq1CisiGjPEhmEp",
  "key4": "4rGN2GgpLRmgR1gAqe8SnduqVySkdy8KkEvvFkHu6Pk8cC6Um2KLFkHfo275HjLiopN1gnsSuv8c2RL2AiEzFQbM",
  "key5": "2xVMSoSsSy6qZxEfp1udTr7A6hu9De6WXNwMCqx3X1T5hfsjHRAZpUr2NLKi4xYue3Y5B2xHv4KLnUNe2cMHUZqb",
  "key6": "3k58s6TmXREmVWSGcmHgJGEtSvtVtXgnhh1CeiRUuGREuQbUWaWtvhEwsr1arQy6Wz5TLh45yzfDfgAPGj3dTeFx",
  "key7": "3cxRdJEvFr9xh8HoUuzJ1bCWBY5cwNc9gQ1tERx3n3Sh1jDLZuXkM7MZTzTAawwygETE2VfmCMz5yqi3iTScd51J",
  "key8": "5pN9uN3z9BvEX9WtxvWa8eQQAysA4FxHBJKNtu4gq7wwXYjKxvib9TLsV86JGeCM4RHemrxzFUK8B3QKUXijP2xf",
  "key9": "4CRj1KXB3QdJnhaTq3w19nvhK18UW5XpUWts9Hdgtqp6hGUt2LCiKv8WCnWw7qxu5jcaST7DFDaTvEy1xiN75b7j",
  "key10": "5jsFtSpmF9d8EYh2rpTp6wJcrNhezawaarWDctcye1oahq1Xqi6fXRy1gDhqeBMd9VX67b56j9TfCNiC8YHus4Hq",
  "key11": "4DZRkj9JbnWinH3wf7s8TfL7hD583NWC3WYtJadNquiMJTmSn74bZaHJGNhS2yKX4CE6ShajPx6h5tSXF3KzCMUJ",
  "key12": "41GryaxLnPnVDGiLeraSBi7xe8jcuiwjSEzGNs2Sbr1qaj9GLKy4mhDX1YZz6f7Gy11ZiyWzq69XTbaMJRdFEjXM",
  "key13": "2Z5sASuQhfBNdP5C9hkMR3E8kWuCPe22aoiBSx3DozWX2iDL2cWV6PQ7DFAxQZXfavreLa3qtNbdinA8EpoYtAc8",
  "key14": "4yCjgXWzqAbiqukoErknTgk3HGgBqNk3bs5Hioe93TZgsDUK8ceHjYfcLxfomCVgfaeX2cJvuqAD8fVez9YikmxB",
  "key15": "5tGzMRtMKVBR7pQjoZgWr21sYcznBTb8NFueRKKhLMLNUS1Psxb2b9bBY5V7Tx1o3ReASKzSkM3D4PdzLccwtgqQ",
  "key16": "5bRuSzKo7HcJ8MZBa6NGjFeMNA3a2yhCUZEQSPcrFgYbBtQvAduvUtY8vdspzdsmRsjp7jw8g7EYHb4Wkec3iiD8",
  "key17": "5CcwN668qkbrRgpxBPBjWMDTdfrPFJ7dzX3HCCH4aAMTYM1rRagWywVcchG9oAeyi1B8KmbW3dWTYqGGXpGx4xYf",
  "key18": "2KhPBiFsZZQjtckh2FddNK9wMtuzKvouvrFovdZQim8CD8Cr5ygYfvc9stVHUg55GSnbTevmLK7ayqosQtL52oNV",
  "key19": "5kNqoJq9GFmKDc31M2fohLdCsEcjwMArgT8dvXjcFAM1KKDFjm4AQY5Z8GE9e1V8LL3xAkRW7jTPdtCSV3kuhfZB",
  "key20": "3a1WavKffmeqdsEsbsW7Tsim13iK6pbp5drX6opYND4M2b8EFvjFE49UHyg7PRWqAL95nKpUfpiBcXNXhoaNBxhb",
  "key21": "scP5sXASgk37t4RU4zkDPtFJ1HPR4BeYTKWD5SGvYVTj2yGDtmsEcMNxh9gNQEcHe1r4ET4Stsg2FVxPUrdx9Hv",
  "key22": "4mqYc5qg1pPxd7odqsUCJdLPhGxsHHKLcYAZ2nQLwBY1jEPUwdk5YYqGp7gb5Dv47eJ4SkKnC3SwXuL1k1j2B2ov",
  "key23": "31rde2Dc9ypigb2btYw9MLDqtHhm3dcgiFVoaPxkohHbokJzoruGPDoB8nhuenhY2EkvQNdTuLpBUZsQ6fyDtXWZ",
  "key24": "3E72eDDq2aq4b56WS3AhUdTHyeiiJBb5qrQPJxCDsLKuv2a78fRog4YMPbSQiTP2UX39pM7jSg4x5Z7erwyB7XMH",
  "key25": "Zz1pE5751SZnwnMBTHucd4s6ZUri8B1ZXfPCNvYr4a8M5ccumv7HuUenW8f9v28HqZ6a1cDMkU5gjVBzZD66ddB",
  "key26": "3vX4sbVu62Lsvzr4SGJa1CwBzVnwaruVUP8vYfsdv2A1JiRdofWCLAS76T6icgYWSVHBj77gs8Me42GYteT3Q88c",
  "key27": "2KdVsN7tk79dVu82vsepz9S3mPFt2cCcFYUG32UjgxN3GbMoUS3nHMmR19wZQQCYCeSV9q8a8FTBsafDfkk3mj26",
  "key28": "4LMrNNqphupMMxiSWrxdCnCUa1GK1XCbLwzRGBtLKhKMcz1JjArTB9AwyzVNwFc4wfg7y6J5z9Hd1ePgjZWSbEnG",
  "key29": "3qnKgVGVFYAXLTE7SYixjtZEUGzsv3G8XdgBH5ht6XHaFwujc5Sat2hrPGxZdrWP2X3iDC1nyYjcXWXRh3TtKZwy",
  "key30": "4nVf2QAi1E6oSquQ7P71NGdZJgp5WnAxyp6NbwDpFvqJUrbiUqkiBAoZi2fNGU2YfqKFie7sJ6dxfXqmD7xhYHfb",
  "key31": "2CeGk5BQEnkVScG8RSKKnKTm7S4cPih8yWUy9RMjLPY4SXVHEACPQATfhAy9gxjvVMn2MzYfpXJ2eGLgzDUwBtzw",
  "key32": "Ks8QNXEYkSrvWUEgXEmwHSWN1zT5ew4LdhnoG9k3eBDj1C3bpXqgvTgnrUcM4bW4Hz1CcUjikpRbFBzHxnr2UiS",
  "key33": "5vkG463C6jeLuf7wyj3diDrwekDeoV1iprNb1sHUs5A25aN9EGW2kb54iWVCtU72RhusPSzQEuGHYg5vF89SgVBn",
  "key34": "5XzDgXBDi4u1wCZxWV2VFjLZfyYE6Uf6LhFaHEE5n713jBZ573y83v28ZNMbkwRsxdtSRsbhfPknKSDmvHUsRVJR",
  "key35": "4W5BA6b4hoe6pQPZzWgAErKbKDzfaemfNtaj9TujNZ2A8eSSgT8ZjRR4ot5wQU2QqQSLSVKNZC7r19khhN8V6fw7",
  "key36": "5dhK5A2CtWUwGcJbvFKvce9EsGnKbLXErttSCX1XsFKYXRWgZL2yWbsgnecWmh5svbC8HypX3YJMDw5qtzDys6y3",
  "key37": "PbHKDcRBWrbrNabqru6nkdcuhYgpviKf3LqT3f3XwtTBG9QcwWrfeGrWPNMimZTtSxGSSydZMk5YiD8BQ8oeyBC",
  "key38": "23vqtmuwXEEDiTveF4vH9trgz4Ndq8WqER3tXe2kYe7JnVmpnVWjjrFoLWhdEpYZNisaLP23cyQ1ypKEEAheaWS1",
  "key39": "UuPzcc8MSsqHsvCVHXcfy2hAsg7GhUAULPdSR9XHJmSwB5RWfULKyspg85jfgVC7DbKiv3qbq5ezZzJuArckizg",
  "key40": "2aAXT1zMgDJ76kXQkxmQN1jZ4xtcCD2uEk4Yk1byisgBhJ78uoAPG5MwAEVMC6c6npigd65bGguNERsYknPkfyKr",
  "key41": "cdvpx3btsdzjKZrWfCUe7s5oucdahVSY3LELGWfXhpXmQih8zKQVuxkaCHNkVwma34HsVgLXqRmVnFD4j1csUMp",
  "key42": "4MrzgL81iW5uA25tVNBv9FS9Qy7z4MV7tKnAHv1pjRZ7bNGfCHjtAePcS3xe3MzsjckopBNUxM2JEzpiWh9Ee7tj"
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
