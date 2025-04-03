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
    "44fo64c2hDMxBh5ZZN6FHdV5cmNFCftmXswLErRu3bxMEjEJhEP14HXFFvoAsy7yqxTj8aA64DrsNguS9iadaKgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8HvPtX2DNnZbAd6w8Pq1ff6SuizWCQbpxKUHHthWdVVcV23U6YpGH9L8U2VTZpTi6z8RGZU2Qimz2kjttsSfiK",
  "key1": "4pqR25956F6KXcmDNNmjjnPZVaqPHX6xq9EtpjfLbqBNbPesuLco4zR54iUs4aYGaQy52K31qrA3yu5E6BjgRqns",
  "key2": "3AyxZeBxMyiFd2EcionkSxeHnj7Eo3no9uERjXvG4sPS7j6vzfwJRjWYkCMo1vDeTcPYHWfh5HqkYCAbuvkmR6bf",
  "key3": "2boCgizRf8hPPW4SeHmE5J42VGrnVpJAqQ2RJNhMJeeUGn4nRX6oXPbpEF8djyBpgx9zMn9D848DbC6qhSLKCuvm",
  "key4": "3oQT3P44juFbNGueYnXKtetBJGogwiQLHuCYPYHyvkCLWNaJmcWJtc3powcK8CiWcctzDApFhaDovQn9nDiQbe6G",
  "key5": "jsfmPb9qMTR2sZpujXZGQkN3SaUv8HEMPMRzm67pbTU6iAQVzbmeLqK41Mom7oN7eDWPRUuziua3RrLkExh2c6n",
  "key6": "21N2ZLKpmDck6RCNK4Arr1dNhFZ632gW1XucSPopXD2SVdxU9S7FiJ4ydmbu78wgQWyrKN8mXFCnVkEZqZheMA1R",
  "key7": "5KSPtwJL8PYGLS4q5c45RFqVzUn8zsSWt6NYSyyu62PJYwE83pKtGMjtAfprj9ca6fxfNNDrG3uCViL2twdqE214",
  "key8": "4aGK9mtdHrAHapcr8fBvnXBSFVCoXSQKToBFmZK4ZZENdr679BVCBYHYNjrNessNvwM1kuheMYfVKqSCedBbvWdB",
  "key9": "4NG8iC6NprMszH1pE7XWk3k1uo9TZy5ybhLNDMu7kdheKUM7JxH8fwnF2eL3iWrx88aBuaqHMoFquRC2kwHuwfGD",
  "key10": "dGzy4nw12arMdWhsrSMhUnqkmgEmt21VquqgaXvr4rReHdFzWNhJxU4mz23779hrXf82j8oxhqTZX9NJSxgDmp2",
  "key11": "x6QMSUSSHqqQsVg38jyBYAfvyh9MxcuD2NJ6RcKqbwPTRMi32eghc87yMUgK6MXdDHKbD6tG9n2BXhcuU2ASGoC",
  "key12": "5Fmp5goCDhsftUsEpMAFiV88vaTiPFoPDUTGfiLPWfWei3z8544xWzX16EyFY9fZxcVMtEnwXboURQCiRWiSXUqx",
  "key13": "5YPKTAPx1k9bayHGVrwvYb1BaVFLGx1Q6HcvNPuzbD8QiSdwomqvjj2PiVP7PVhR1Ug3XUo4tcLAcdyq8jLZPAL6",
  "key14": "5wNt3cryfbbKmZQJNJgZtfBsLEJmKEeJpe39TF2LJznGfjeXURBjJw51vLygqCS8u7BJBRj72DNHb7by6KowC8GV",
  "key15": "2KuJo6QKioSReFKdwB9c3L6P6q5VecVRgSkfyAnnAW4RKxdCovav83htzhYd51o9DWN5sUubfxUzbQT4QrEUe1AN",
  "key16": "jhX5qszHieNDrqCrxHRVTqH8wUwUSB2SKtEkedBM83CuDXzp7V6F9nm45r6uVsG9qoRMHxLhuGgxZR3gSLf23ht",
  "key17": "62BAByQYBy7whoMEkGoZfqx4VWZ8DwZ6UyEhH1DESGVvQ1kgeeK5WGqcXCDSgBqAxA7rq1nf4hPB2bXEVggNcreB",
  "key18": "eNbDg51AXqngErvhpu73WSYyQuftboFvzEwEHhM9p3ojoLvNJ5qdzWk3x6J77ULstDQ4Vogc2uRt8dR8uMHxwck",
  "key19": "5bVMB1Ephqgij5xRfSqHzufhEYQPxUkHNni41a41XxCmb6UkkdiVCPGCC9Yzv8m1o7QABpxMJzuWoG1k1YzEJbor",
  "key20": "afqhY53Qdh7zQ9pttk73WdL5cBgYLRU6DGzAyaiCLTmmji7NsLC3DBpQanKMf3DDCscQPt9uVKaFVsyuD5DReF3",
  "key21": "3YSDY37544RLeHF26F1cswBbKXS6rc76Uvq4QJTrAn2tn1G19cqfx2WcBfRLpag7Cv2mwx1R2rRP9PKkbZckwQrh",
  "key22": "4ZDdAqdc78ZD5q3TyzGvn3Fi7gnUmPyRxVoKxn9ThiZyHxUsvsxXHPAU685HAnvf32iWBDuvJbZ7PRB3MkYvvSB4",
  "key23": "56ZkygKUxcnxhzQ8tpF55s6mq5Hf13fZCFwGQgkGnouRgWt3yWcWGArCzHGUBEvajBEFUuEJ7YBrRXFzP9KazDTH",
  "key24": "5YHJifj6y9RJmvLAmFUjVA6k31TtuVUHJSCWUDKarKkxzbb4iE6NvsimrF3gbHRenQwqX7knTrKWUDxDxF63x99F",
  "key25": "28JURRNLzZkKMCAJmKn15UnvSPPCJcFGw4arzRGdJKWf2Co1FrNbAZC7WRN1L84spmEehBjibUgGNGfBzhpBzoHm",
  "key26": "4FUuxY8TaqMYAgfLEETHasokKAo13VtMB4iNy5MqYVypb21YSV181fGDeVVcXmta7evbxYNtMCwVoqFCZ9Vkvey1"
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
