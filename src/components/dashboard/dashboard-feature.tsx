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
    "3L5DbcLYNTKUzfP4UARs69Gred1KiqKUmHtrPsJn1Myge15V3c8hnT4bhmosJNUmazWy6fkhdUjJg5gbZhmBBNVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inHGu3sY9fXrLE6uLJDkHkXQaQxpCGhhmEfab9UrU99S7zG4PvstFZzLCztdgVej4DecD4cSWpEq5F9uZnn3A2H",
  "key1": "5pLTggjo5G4Z4M2uwWBcffYGxBgfkL3yxNXVvekYKTypiBsw6QLbbfoNnU72FLPGzSKU7wPq1Eb4QmhGM4wDKBaw",
  "key2": "3DT7EfNe7PSGxdLzgR1CmyCWrUsGCftY7P9pThbevbauJJhCBQbz6uqGHYNqKm2RXW9UjT1jfZgqfaEp1dzfWKsL",
  "key3": "2jgkmftBvZFBiAYyWQJzCxgFXuducEqhDsH1cMCpwfqMsyAT3XB8zxaBz1bDSZPVXjMscTsPhzMpfUDdTkqxrKFQ",
  "key4": "5PwUHgwNd3dcTYFFmjYTCPBgWrjk9QRiktPPgHrcgfHCRivgrtfcvaQ57DP3NKEWjgoc3wvf72CoLGTATXHq2Wgy",
  "key5": "2kraJqY9k9DJUgMDHih275CkwwfTt9Uh3xZR46EGapZQvkfL87X3f1nvdRUr7FXvbG3zT1VgCDKtwTHPyGmPGp6E",
  "key6": "64PYTyW4SkRX34Lyb8yTEWcdGKQgs6Aarq4EThVBeRX86uhNnMtM5k5jyQnQGoUV9CDmMGMFP32AEkTwaw7a3Rba",
  "key7": "RZKjmWfdEnnANQa4CbSKsW9ngqvdJpCUtCCZZjq3znFvqNCF7NdgciNX47q1kZbkH1U41mWwTjaSMDpASWMxGrd",
  "key8": "5LrTYW77oztEQw3Hs19hdNbCLdNC9QGwjTaJCGSisK5SEaG4BNSc73t5Q6Ukp8GDAoyYsFdd9fmddfZBfEzgVnQx",
  "key9": "27wGb9oHccdB9kNu9zvvS4g24VKwLNk9xJTHWQr4C8CHd8seR61PemhY5VpBxodHZPS6wUY9GqHkTigJXhvCK2k5",
  "key10": "3XfXrpvBct3Rdue398AwrKge3D6ovPPN7wRiRtKNdAZtNAa6E63XyRyF3N6pBug92Qgri1nUAuaaao1Wzmu64aFZ",
  "key11": "44zUvcJMCPSG42vwW26mC9TtiLAMvDGkE5PSzpe3YTg77bo66v78CvFFiXUT73rKpoCBHx8NaWWZ8RKH8RpoEAvF",
  "key12": "66vpuz7Qupwwa1tsak6xxr7ur6naMqo9AAKokDVitZofWLxYxVytFLc53xMajm8uQkmJH9biqvecpFPeYgM5Exwh",
  "key13": "3tFP141Y3GRZdBVQxWKzM76eJTZV1mN2XHKu4AAC2hUqKdDtube3UrjFVNm5TW3Cb8JbaU5369uB2FFqfgysoMK6",
  "key14": "4p3UZS1LSfyhfmPFy2EXCpMtXHRHB7HH2QK5HToMn2oGfUoxd66hxEQi3J5h7hWnkDkKJsdZnTunHJXXKoouL4TW",
  "key15": "34EeBfsAaveMYJr4aAJdjbh8Acvs5WNjQ9dTWH2kgzq19ctSMDiZ9caEDDi8KPq1X44J226jgZMV6D3UaiuMb7kk",
  "key16": "2BQwcc72jhXCTm1jkcKU61tRNEDK1uCiiE8wHNfzUArBvC1UqY8VGueEMbEwUj8VZE2EpfXo8Ptzo7wgKAg8Sf8v",
  "key17": "21DnTVGMxKpqX69jsTgX3YeYmTjxdSFZPw26PGXQ3s2QxTtcfMx1Ta4BmoKHMBvVqGBqZCRSAokKwjhr2hFfhfw4",
  "key18": "5kwpAAJPoZN5mC52yNHpXMBAmoswYisJrkdYnW8o71yTxxjYaFbkpQpZn1eTddzf67GoTYHxsJAvKumWtz5kPQwZ",
  "key19": "JRSa55pCs81c3gH2ijfc8uPrMcP1g8vCHWgfWZrkYVcAhsa9ZHDRbskYvoWu34BNe8rZPxZDymv4H9jMuN3ZefT",
  "key20": "2GxZseMXD6UodNeicNrJuYQXFRECmjR3L1jd3a2Mdu7v9Qf3QMdPhnQWBmpoJQzjiAmTFL4iNw3hKE4N9Kx2XGEB",
  "key21": "54zviHf7Ap2TTCheN3zgAggqxY7xnpm1Vk8UhxHtoqJzxo9RBxthhQKgduTM4AyfiMMtK8cg9hBXsUM2NwXmBGKB",
  "key22": "2xWtySyx9hGew4wYFWmJnrz2MSRXcfMpJwATYhpnnMjK946HRzQSwgav7PK5rwQsKnAugeWmJW3ttnWJ5uXdbhZQ",
  "key23": "3J7KYRqpdgxu5PVGqnoWZnZNYt96ZqJn9xeXPdjb7md8uPVuKHk2kQmVmZxvcqjAMxZytgHoPA6Smb3Ltt91vh5D",
  "key24": "2qK5CzXj8bUMHkTSnKth9VKDx1AuumobSaBtoTSN7DHATq2hLqw5U8N8dJd9yMxi2xniKTj4gMDYtKBwp84QuKxW",
  "key25": "2vkjWXo4Ub9TyairBLHyKLwdj5ixkWGW7Dxm53FHDd2Yv2uhXTePvqHC9qUQFJQC44GUn22MqAivAn5sPQwE7y9K",
  "key26": "3AsQvUjPn7MtAvtNATfiW1BhgxNkv5udmQo666cD13sAP214RZ7V32XXYTW2ooXsVySc8mwe2LxrbRGRQ1xdV5tR",
  "key27": "5HpSSU8EhZrA3YS4nSGZDbs8wSu1EqCzePUKPmxA4zAQUM8CuD21tvXCn3QUqB1MeMNJuS3ukMJK1Z3wiLRte3fV",
  "key28": "3hann86Hnq8NWjQWyHNB1rEcEqruZkucLtxriydwvxo6kFTGLPKSQuTQnQB8enZGW3wzNAZTjpT4bhMa57DsqqVh",
  "key29": "5WFKSYgeW6MRpMaiNeDjXMLuD5Ni4yHoa3najq5VYjByvwCHGgwk9pneQ9TLTMfpvL6iMedZk6CNXp5zDRdLbZB3",
  "key30": "2Ku94PJFHbHX83ieT98fRpLVyLzyE2DHmbGn4Bq8PMC2UXnWkZasU5xW5SJQ1JVEwf9C2KTt3RPN13rbAoqzBDZa",
  "key31": "2kTrBWyz9t7fDHxQfWcbLVSbewZU8YMoc4cdBjDwm8kMx9yEbd9TrxqyuT1XAE4usJqc8xnP4yTgdjZdgB6dzcFc",
  "key32": "2dZFYpFB3LXfPJKfHahYXWzbj4gWpySVXLhxywsjHG7EsvhRgVSjgy4bkDmLAHWgMmzFHQwHmgtKeQKKzSXdBa1c",
  "key33": "24EL3WWrVbLqQp4Vqx6KdR41LuA6LQF1zxJ7HXwUrwDpMdJSB5DWR11GuVtvkAxypJ76tyrfL4JoxFyYbb8QYny5",
  "key34": "4hcLWYP4KxTRha8g8G6CfQzDiZe9fSHAuSec4apnLXHS6jSNDK74WCEYiiNnhyVjQfo7bhzEw1csnS86mmg3qeo3",
  "key35": "2EfTyCXF4t9JjK9mpgRqVPUjYtq4VjEvi3LcETS1xedkPKy7C1drwMotoUunkW3ypDnvdhwQueRQSpNNswjiMdgs",
  "key36": "MUmK88h6D17pasWLtw4PwgPYdgQGT3c9yn5QvsPHxDeqH8un21PHyCmn2AQ8yyKGuuvXEZujSEyeQw4SQhNM35e",
  "key37": "2uMmBsSYBfLcnvfKdfKAfr1gCudf7sePRbpm2DnkT2hmQ4oKPTFWRR3cqZ5YC8aWqYnyUUVg5nBVMzJFqdSuvHyu",
  "key38": "2JVYbN1w7adeQeRkUDRKJ4WtBns1YEVQcWcf7RSVT8CkJ8bXWKyjzfnSeF3aE8oaopEfSpLRzSDc9meAqcMtyYTi",
  "key39": "2Tcq8JETyuMJXwgp1AterR8i5eyDE6LVwD9AdwSimvoYevGd8ucauyE4oSGZK3UF5EpfQo9FQreGexteaursmWgG",
  "key40": "fXt94Awe4nNTBK6eCjQXAJ9a8Ti7Qd5VfFBntgSWU1t8gmRpN7o9VQYzmJnopAzvcpYwywc9XhVUhPuAfgB7qiM",
  "key41": "knidP2hc1eCgRPzSVQnxYuQCHG1HzJyqgpP3sJgMw3fpSgLuLDViBbYJL8dmRoREbAD67UZEV4i21aPhstc3jGn"
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
