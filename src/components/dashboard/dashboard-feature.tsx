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
    "v37FbFk7RNkV3jp1PEKNCcE1cbHxKFEZEypGyTrJiCM2rE6WeV53KYngrUvGCvvPSfs2yHUjKdvRm4pMb4oD3rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VcGXnAPUvRzpsgfQA6TwzVAiksFMrmYhLivXeqXY4RQBug8wyixpYurxWiEhiFGaJvNAPZ4vaAwetfLyWRstSWJ",
  "key1": "4TDZ53CdWJ3954wsh6bLhvHQicAc4G2KAMRHd6TwbFwBcZWwcsLzSRvynJ6MiJQhe5A5YYwdkZuGDz9nz1M37iBZ",
  "key2": "2HVGLJM6ZE8vcPxGm6f7BbMQTd9oXfFdLT8eKirdt76MyaF6fn3bDgzYFK6dbv1mZzksM6dAW8CVbv6UWAoUxpVt",
  "key3": "5WxLXJAHW7TfUexiSv8xcXQdJhNtPUKo2GCzBDUGAWVmkmMHU8DCzSWxysBXhvhD8GY8K2jQB3Y8QkCLkvUEuH4E",
  "key4": "8QMzr3yVsVEmqaQmM74SVzFjpQdF5Jc88xvQkYGcvbowZ79eFC8JbS7QrooCNRbJUFrvjKpPDaidUmkFALpgiry",
  "key5": "3taHSU7rUMpgKSV5umDFSHqGQBYNLFAX4HUAGVQbf7dNjNZY7CzVXm1m48JLBRA21ZxjYZq6LrwFdMo43cWZn9S2",
  "key6": "VjRZdJei2uzcobKf4HsG8u9yq5azeS2MeKzvXsohgHNm5keiEiEfkEv1enswoXQqWX8PcWs73Fnzxt8uXg8pZVZ",
  "key7": "51im9BM9i1DpYAK8qPw2wrcx7wopzS3vZtjoCLWDabvxPb4sG2peDL3SMLEfdmaHpSmvb48QPXWNwWnV8EY2JDU7",
  "key8": "5adUZom2Bw95YksPjxrLFjcEQGRrGnXdDk7Rsw67KZKPKe1LStaBTwPAkhx3Nnx3uLypstJSUorY3JhesnD4enqJ",
  "key9": "37m6zbmjpHE7yzTf3r7Kff8UyCSeYyGDtCBCA2tLN3LSxLKyxqrfjqXrHvxjtJ8zWZywvRnVQJSxWze2rvKTRri",
  "key10": "2nWe5sx6iczhazax5Tcrnx31aMejTYbpenSq9X4f5W75Vw3iaLPCiPazbWeGKio29FbGNVUGNJGQxZuEdcmrm5C5",
  "key11": "5iHsv3kTz147S4vyfPkMAhLAuAjyXv3etcvPukEoq7AiMqjh4MJJoXN6iSCGo1VYxHu9qQuQDJTmEz1u2q6jz9re",
  "key12": "A1YKExCrYK4TymaWvQber1HQ2bg8Yz6iSVbFHpFAt65Jr4mWiZjY3q33FLFoLw94o6rjbqtfCRojkWZLXPasv5F",
  "key13": "61DQi1jmXpYiWXeNtD2UzxhMcEyvo7dnBYqJmCJLaqreK2uZT2EeC6mmY661pyTz2xQiiDCbx8EU6tdbxKmrwM7W",
  "key14": "mwkNBxEHWxTY5AdrBghBYQSs8DCvwoMb1eY1KkcGpMsHJ6D1Ym7na2hgWo1LUp8qaRGqcPEogy6cKQfFvrHp7NY",
  "key15": "5B8Z2ePVbHgZE4whU3vKceg1LVrfRihzPg9hqJmRnHJVE8vZRRM296NtKv3GD7oLh1jRx281ZSb7g5ZRNMRyCZyc",
  "key16": "2oGBYiAscmUs8ysmAQ9Yoyq2Vo3x2Z9xuwv6oNUGzdPAkpo1QhHsnkVgRrjNKN6FRsXvbeuZYKDiBn5gZgMKhpv5",
  "key17": "4KMcHrzYchbYMJHBTjZ4V7XpS7DjYBjFem6eiYKiiFs8MF5r2nyRd4v2CHBE574BYgruKhMTp53NNuPbP9XzG1Ta",
  "key18": "4Frg76LgTkWKADqnDuRYB4vVtY2iKgvpGUrvRq4EjCLbTnsZ5G9RQYdubTqGzofCuhLd838c6HPPbNVnks4H7n4L",
  "key19": "4vGgf4KNzSQCuruzgLPQvY2qKPwJDdc5wxFdK28FfyNFw5WA8GxURU7jJqU3rrCgSA313ZMLeoZ1A8ZTNpaLFJ6G",
  "key20": "5MQ6Cg2NMQW1DCg2qQB1ubPyPCEBtEzYvgKgcnthT8FKqhAoVJW39YttQzD9ponDVhAjpvSJ1U5xuejUnDDPifh",
  "key21": "52gqZNQzCNTq5rDd6MAEbq3WvBGmhNBtyfwbXMChSiAHBCm4tJ4VkjqLX9Z1rogokrU9NQxyNakJ5eYhUBa2oaHb",
  "key22": "3JYG98vNmFRriboppqGwQay1JYRJ8KgfTef6Lu3tYEaQAx9LSUHrQqYmy462K2cNMn8S9433B2H9duTLBfEFeFcP",
  "key23": "1yi1gNufZN9TFNyaCDeaxP7o6R33JCh4qjrkrw87jbzMQsWXNNCxxPpowTNDDNphZYsk2MyoxYJ7nZPgdMSdj5R",
  "key24": "KUVVAZ6ZyhybFWH97EsABgSDQJnonysg27R3L2HP6LJte62Nu2xFZVekVagyz5vik7giFh1EBN5n5UKfnoRzESY",
  "key25": "2pCduAUFW5ENBhkFG9S48MeHTaneZ6xL1UBegFgpKAsFPzL41kpUtMPbpuRw12N6RKiSXF1X6LeT5MpNwxz89i5j",
  "key26": "28JDLKNcJL9xq3HLRwD5kuHJAMWRZ7UCiCfDYSJ8tV4NtzpuGAhTbL7mHr1PSxzvE3qM4tfCKpgc2sVz1So4PAok",
  "key27": "srsjug4S86tuv9LqVFe584Zoej4pxox6w33u8eMFGVzY5WxPPMHoTgGK7dn6SAtTmAnjevZJxZtn5QzRwJEWrvs",
  "key28": "2waChNVYwohBqdQMdU759vZJeKcFEQzj82uvY4EWGMT1yC4zg7v6mnZqfXakMJAd2CeLufrw5xL8EnmyLnqQgmu6",
  "key29": "3oHwnFxadD3HegcDkMv8HN5bosGqVEnMjEwK2ha8xqJZeuNt6cqXzhWgi4vNEGPzwyRUsDcPoreeU538j4u7bxQq",
  "key30": "2gGYR7LKt2D7QXqNaJM2uG2o3WMb78QpkF3QJZ2e2bkcmi39fb3XeRS7VjUyzwJFXgxxr5Y3HnyGpyfqrzBkWNki",
  "key31": "5yXJskXiVY9AXpAC7jGHHoNaYvHFJUJCbAdrDWFUL2huu1nFAW8rFq25kNAQ1PwjAnn2qQFWbGjLMVmtAXk22BRX",
  "key32": "6LQWYPwuxEst6MnWcXBR17QmQVHUNSs3DTzEcJxsszLj9P9KZjXWc2UkZEdMBs6zXawYZRiq1K79iTms4bHDKH8",
  "key33": "4S7u6K4GLZs7UWgUjvpJtzZpNaJe9cYe5QU4WxTufvzGqHzFKmQRD7XCo7h6RVYV9PZixM8bUnGvR8dLrD6E2SD6",
  "key34": "4hJC3Uu5fvcgQq2HCG5ZHKZ9PQajWjHPkUEcYuLvcFo8MhQMwNe1NsDpB253Z6JYLKk7cZ5jMYgUucYjtLnJECHy"
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
