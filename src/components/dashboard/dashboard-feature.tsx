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
    "62mUCrmZEmUP78AnbitoyGbeRyFCLWeszBtGcVzPiqbDpc3AUZmzURUb2SiShu1fTsR9Zvc1AtZWy7J8xfC63Mja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LksEbn2vaJjUzkVuvJSUXDmfr9gGdCobZ8d5sdM3JAA6iN2JGwwV26DjbgMsTMb2DCKyk4ion5Ltzk5FTTZYao2",
  "key1": "48kLyKkJSca1Q2BYxkGD7tDkBXY6TPk8vid3HxcdkANuPEN7Jr4saWcHT4nuoVQMq65sRcFjdwVgRHYPrsX2egp6",
  "key2": "51wyiNUAqA7xcwctUeTDaSH4F4iMyCPerjBaeqyBXmABFkSEafjxj73EhwaGfEiNkMtQR84TkiFzUF7BFK8mjTbX",
  "key3": "4xwjKiD3ipLJemCnfsAQ5xnfe2ihqxMrt5pBdCBSUzmS7Jfjqoh9qMUXP7LiEUnw1ZLSjnJ9UUdzSV1rsfXWMs1e",
  "key4": "61qVwZYJTnPJB2LzHHHXDKcp6UiVQYQPBgwxBRtrwsTX3KVMptUWqq9431ZfckmyQb9hfEyZmf9iv2cuLbM1wB3x",
  "key5": "ZkZrtsjMsjh3VnzVroQJ3mr1chtwDueJ5yW8sc2Qh2JzoDgzeAgw7jea62hXbngU7pKEgWzpSg5ZJRZqdu5uQA9",
  "key6": "2UPZ15LxJjfcV8SauHgXqv8dyoNYts6jBUzSWFh87Sba3FqsFcGbeEmpka2fG3fnjBPHwinhtxmXLa61M65D6nY6",
  "key7": "2qMss2pT4gnDwYW7gVn7AxKj4cEt4wRHaJUbvHEd1SAvPzxpTkYBENnUE4RRKNiPgibFocJhN2uVT2NSJVd32jj3",
  "key8": "5ieCLB2Xf4ihWP54mmV4nZDrx1meLaDVAyjJ7T3bZcPJUyqDt97W2cvnh7oagxj77MJbknPHAovLN5VwZq4USNji",
  "key9": "5zCBs4rA1J1WNvmbuZLSpjQhoGLoYhupUbvCMBNaQt5mnmuqoBJ25Z4rWZps3V5hfqryrDEW9GWSR1xwZxx1YqMt",
  "key10": "2VBRp5aRSiPPtXwey1YHogTFpU1mXRuHiboynH8vUn37QDdMCQhaDXfW3Lms5rwiEhfHqrpqoB7VBE7b9duNsB6X",
  "key11": "3rH7AQxWPXQod2JKzRQR7JroNXADc5xY8FmrhaYi2y1TTgAxiZt3mhHZjNHexNmroYJQvsjkTs2H81o5C5Xy1dnm",
  "key12": "5jq5m6Ac62pwvvLseEs2zjuV5Gnj1e2ejrckd81S1sa2R3vA9DnZjtQCwAHNRNKGDvEndq71BXWWWWyQeJQzCYcC",
  "key13": "5gSkcCuhnYhhQ3uLcXAgB5Yows2dvEPE5k7miNyUCyoE5sKknjbjEonr2reqiQNwoSFL1rSjBA7QaaCD7HxqSFJ",
  "key14": "3SVTjvraf7gX466dTD8pb3RLGgZXAwjKnQNSvFLcBVQFpfytv89zwRdQaVYyvdEFWBbW1P6j8xatHwGVuh929MJ1",
  "key15": "TELez34P6oRRWMHaL4snrPAFTMwFcAnoYAtSXNQhfQAkyp6wULZVNVZXaA3Tg1aAw1qUusQfBPZaSEqkPJACvDd",
  "key16": "5sA4hegSBdVPte2FhTV3Q5MG4nJVf6AkeGv6kGMhwt6nsRy5JMm1q7Xzn31tKsaGDAqy8qtAo6jqMsKAcb1tdqBf",
  "key17": "21b4iVzxKdfyCygmkDFUgFyup7mULJYxC2pm8GoTzff5WB9c9Xy5GwXjw8QfPa6KYkicehNXhsSy3xFz8MwsQVvA",
  "key18": "gmKxpMfHAyYEGv4Q7fwjunPqSVUTLtMKioMzr2mL5W3XmKRVaW2CN36bjKnQST79HPsb277mjQFUebp3qFqgFQ8",
  "key19": "bHqGZuYcrPJ4Yo21dnJqBFCxXFPFS4Q12Ue9WjrEd8X7SHsP9yxkMcYrV5X8VThPVwhdDaPRUqJtKDQNb3LeUUP",
  "key20": "5e326UQRBbzY3bB6dLb2Q5B7Bwf8nT2UpxMJFYGcWV1pXHmeo5b4xzegvU9rBF8CMombxczhjH1cQ11ZcdqEZrXn",
  "key21": "xrCNenFmq1WHmQDWJV3fHTNHg47LgoUZjkD1J3euX5eSXftcjNfScSokPm8AY8cZZ26Q6wEX7osT7mFDBHTx6Ae",
  "key22": "Gnez6RiLh5Bn7LsMwVuora23UaK4SuU7M7ppDHHTp49RYsvpbRpdJZR6BHR8YUeBUojfjLzPm6P3JSzqzXuVMCa",
  "key23": "kyAVpYXqdLSwYWEgSstH25P4yaBQcqVK2jtuqVa9MkrwyNekP55CVFaXPGzQ9toDCjdnSbDDjvry19hmSgKQM5E",
  "key24": "38YXHMTUA9jfGcYWDAKe3qx62HKkSrAKygeYxK66k7FzWebKqdogj2dsjCuwPRvm6QwJwYneWUxePXqTDvjB8TA9",
  "key25": "31pjRaKPQ4eVuDpG6GLwLHfh7ZHNWWBrgZejk8JdVYFjrJRfd9iXPUdDf9qFNdsCUtwLrTVaHphUBYuaMbn7dP3x",
  "key26": "ZQmdRUBqiXe6w3kcpbQTFTjxPs6nDfPANMwKD1bfYjfHqiEJycdhqMadUBzm3SFNAPbQt4CAE2sKpcrZmVYbxLM",
  "key27": "2GtXULMRsqqGfR24A6KLMSQSSfY6bQNforeC3k9WWezNeCtAy8xwXQxFnk99xtm9NjSzMGfsRZvDazYSujzQD7kx"
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
