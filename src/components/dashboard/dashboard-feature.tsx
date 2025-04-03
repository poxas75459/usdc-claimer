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
    "3apbJgxoERUNaWoWqAvtQjCK6THVE2LF9GHNdywRKynL27xhnMdphF2KLzSqpMUFd7H8ByUtPz79Tw6y2HHc1xdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1EKTvGZBjzuDjQJxWUYJSmKbu7Bu7md1iKcQQ3huYLoiyTrc9gEyZvFYiKJJEmGwQx96eUxkihphSBuJuNG2oE",
  "key1": "4MUibhbUv5N8sQ5HVJns2CAfe9AecvH5WKbTqS3CS7ZC89TgeGDCUmmRpBz1FTSALNG1wUJ7cVonhqPGk6V13ovC",
  "key2": "3UhnL5hzXEYWygrzW7yTtt2S8W41BPwFGvXwnmNP93PM5xnhzt3t1FLVTjcKjqSWktZjtKSEmaMFhgRPgZPi6Syj",
  "key3": "ChkvHsUhC8JE5LJRuvgwJM88aFWXZm7m78jjk3bTaqNemM2UwHDPmYS8qfvYTF1p61HqUysfD7yPiLRGaXUh6PH",
  "key4": "3Us3p4S5Ey6TJTvFJTCQki1DSMnMLo4zyezAWc57ho4dS7umLjFC96bNGq474tzGRs8PSKkgSBVvMgFi2JfUxZGy",
  "key5": "2s61JJmtujnDufFHBVURhV5m3HFmZZSCcr6NVAXmpLbdUZRAexn5detp16hDWJEBrh9FUoqwjPtDDWurZZGasTSo",
  "key6": "27g59PndQBhJDvV4Mht6fz5AcaJtxPTpZ8fETLChr6wBtX8hTkdfHJ7Q6G8hTiyLV64UJwZaiRqwqeBd7mc4EdsH",
  "key7": "5v8rfQYYZ1QoHtSHDBqezjJVVBxi8WWDVBauYcFp4qYRYKZCXXr8ja5LQiMoc8CVmTVNUittT5qS6ozbFy1DMxtK",
  "key8": "kJoX3zu382s1h95SYH9icZx6KuULARRLnaak3PkGbME1BpGh4Y9x7nCpm514ezxYJnLAgShH1J9ykCmi6HuujFb",
  "key9": "5CYvgc87VSJgNzSwtT75yeKvDnZfYSdxfoirG9XqyX6ZtWPx3rz1T129xred7Lp5bfbjRbwTj83UPFhxP5QzNnF9",
  "key10": "gH1yxC6rcudAFhYX61WXFrs9mdymuQmfyYVkEyiBjUgHbyFPcpYNQHigoFHBWCmUJCjmFB5jNNT3Za2ebauwHV2",
  "key11": "3HQNEdGzTCwFpczV4jJuoVFmy6tH6kMe7JrGhzhxQTMh1tG9vuRHopEopwYEns8tDUNTXgnjRbDW4paQbijnvSrZ",
  "key12": "4g8L5k47eNi6Ub7cBSecWuKp7vh7tumMtYqo2e27htqMzuaEKXcFWHWCEzbrVd9ZZ2gMwqQzTQYFynueHpya1bfo",
  "key13": "4UCySYZfovsrys9WJgFaLHtXurPV4SAyDn3gzG1tFMnyJ9b9iiirRzsrr2wiXtLrpoQ4kSEW2hvdwjFeQ985K9nZ",
  "key14": "cwe1Szg1BcP7vzcyPpgGuwn7MLE6NcyaNCyQe4H8wLjs8RCqiPv4xC7BS253PokEN6kXhd2QKqr3Hz7RCsps8a9",
  "key15": "4BBtokEqYprAQuguv678agXNRG67ERzPKfJN8su9L2YVJcUrKkCZWYVvk5oauctB9RxsZX4WcWs12ajRzKgi7r9k",
  "key16": "2okkNJWZCM7oBqxhFwByQZ8oHxYuY4uXhi7oWYECgcZRVKnjNGVVskaKu7WbM1425YChGfK32hydK91HT9eYN2TG",
  "key17": "5ptkgoN3ifhK885yscKgFYJxA4YTRd9pr7DgCLoQnmpeRBTmFndmhHm4ASucbM4N2oNw7JcshF5ZFREd35Rza4Sp",
  "key18": "21Lx5zM58LXH4EwVbLz8h1uLXQ1dwJPYn6uyxj52KPfziLj9oxtXLEyi5G5yMJMYx9G9WUVZZFhR3bbHrWUcgngE",
  "key19": "2RWK59z2CoQnDe1aRukgqpnKaTkYckHDZxgAZFSkeJa7V4s7zn1T8XpCXN5QjsxM2BHu8hrnMPduLm4VY4VwEJZs",
  "key20": "2FDzyqAuG86a9bWW5vwohP79cnnVYnvCn2nEE88TAV61DHjPXBU2do3CPskynfyMUaL3hxZTMcTdVnLjjuCmVr1G",
  "key21": "RiY4LDwvWu4hAFx8mQXbZstHwLbp7M9zBdCMQuuYVGTx8Dsx5bENTWGuvWs7TxiXQiFajfUzTKRgMfrL3N22UNn",
  "key22": "36QWFpCGoG4ESLnZkLUBWGw2c6XHJKcjzB1QfgJzkMz5X2j4jWm5tkXkd64v15L9tUg7A18jS1y4kvHBxcSfZSpA",
  "key23": "p2FDNGQHZ13WjigVqMuVodASq8jzbxm2cr8G1jsGeUDB3jRTajcCo17R3xzhzbYbsuCcL91ga7jbmwfz1EGUBbr",
  "key24": "4Q7DKj9kg7jgoK1gDjQ2YExrVFFi85Yuk5SWr1KEQL787RXJuG9GQRNaCjYG7goiQC4q1GAMWzq6oATD7hnYjFD4",
  "key25": "2746VXbRKXy9YHYTYVqhfDK6miWEYYGeajAPDigH1ayqCQ93Uu61wXqbBwwEv7oir4i1SXWfKNSfjmf4oikLiK1Z",
  "key26": "5DdSwU9UxNsp4cvrLxiXkDPH75eF7EWBNqx2PCrFTDNNz9wwzZJ52oN9arjJeMFHq21hxQoB5PhtFUyPF6uUR2bG",
  "key27": "3NkvHa9Eb933mafYwKHWaiAo14XMeuaf8hpqZ1JuVBcA2NHhGq3DVP5Ep26rEfmxivP7DAZU64F1jq2npoBLxke6",
  "key28": "3jhPvsHjYDQS4ZgEMKpK2TKwm9kJS7T6y58Ux1pVVQ9vqHZ6ZAZHQUPButxvEJWKWjgee9baPmZc9cSXhbcnRkn8",
  "key29": "44Lr8tP5gCPJArM7eF4F2GjYvdTx6aaskQuu4X7EQqqDQeKPacDDPkXDkjhRzniD1MfsrwuL6PtyC5FChaj4NKGv",
  "key30": "5Kqev2hj8LxPoPJQHnTwoe83f5zjRkom72cxPSytGGUCfFAprNSJSjFo3ASC2WZnQEZxAnuEzovgECqdtNe8ACzZ",
  "key31": "62XLAktiypsbpqqAbnxm8zoH5EquhQg9LaRTH9bCg78uLJfzsVnhTu1TfeiU6iqE5Du452j6NgjSeyy8ifCm5Ets",
  "key32": "3jKzDai6jgTQednX4uNCpNEmJfXwtz4iW4RJBMph1tayqkj1PGRPPvs7qWHjvs94VJC6cAN16SMwQBbsMNrD2v7c",
  "key33": "2zF37fjL7yGVsrEcw3eKmdNu6XkM7T5kkfjxn756ckxasNhTQkKW1KmYQjfDyRRUMDxqn1ByXJqiBGCvttgyGK33",
  "key34": "5QsGjYCQheUfwTS7i78fAL6LZYmpqGbMF6PYhPTFp16D7j4YCZjuSNNhwUZLg8tJjAza5R9JpL7FXUt5VEjToQ6J",
  "key35": "PeTVXHfvY4B65aEE1vDkmbnc8fqPioysDk6snQvTUiNqaegZxP26EoJVhQV1Vm2bRgfKwwPG8Jiui4XA4yvewzW",
  "key36": "2FKBXMqRbBXErKaEgxzLG1ci9zzwBLim9hjY9YP8zNgY659t88A1wdm2E6V9aBmcQJx7Z9sXxhrq1Sgu6NKhoWjm",
  "key37": "3bgtKpbnXUSEtPbosziRZPjtYWXQyRjb2zBjK3nL1qk2jCdb9KuWkLUAXAjsRsLp2khv1HivrepvGJ4PUHp9kKpC",
  "key38": "i3ndnwmyMthNVakpvxvUzwF9AcHorqG2LHxuH4hp7KGWbtxppdgsUsHug98nwWn6devjvy22Wibvu3TPae9fEEy",
  "key39": "Si4HiLrBQpB6aahVzcsHP9JjuZqUq5geyHhM7JPcXXyUK6rCNNEdMkveTHBmNXqf2o84ew9GwPbKRDnco6ZTpaB",
  "key40": "2F6Xm6T9rKM7mG4y1NivridFqgserGw87t4WCZWjE1AXwTX7eq2YtGDdHAja4jSxKzghwbsrbQg4e5sB9M8LNGTH",
  "key41": "TBdB6qPZTuqR7CosargK9gJtoPxrQE6uQVouQ3mcHztVsFWk8VUsAc2wJEkf4DXXrKrVphhQyB4DtSx87RB6gCv",
  "key42": "3VeV5VNMsGUfPaDDQxdKzj8oew38SRBMnvAGX9pdU28SfqcKA7hq6bRSZtCnuX9x2SN9VDJbB8dMBkFbq65MYxVj"
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
