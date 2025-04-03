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
    "2Vxv7vqAHNs9SeP1VZdCiQ9BuX5m2uQtNCnVU86yQopHqhQwwFAyUDyh76RANtk2aNiV9aEcGzcvbno81d6qTRok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dtcWtD5Y45hdp1aSQKbKzYHQ3qSR1nJKLPDm5V9Eo5TW3AhoECpziwWJgUaVqcNdvX9EJJYNaQstyjCh46DibtS",
  "key1": "5bGi9CPejtVih1XnaZSBUYJibBdmaJH62qbEU9VL7HEDkk4eQRycuX5nB2zDCRHthnaJi685rYjofR8JghnxcoME",
  "key2": "59TfJ4LVh9Ziu6bzQnHjpAXsJsTAdbGpa6p2YoSj8HX9w22sfu4VLaFiUWJqLjFy1jVLFbrwEukU8BqZjNRKkMS7",
  "key3": "4K2XmdFpZph7PuUery4AYSyqoN4aW7aDiExuq3GgroezzvQdYQWfNxbyzWYLTswrHDuepw6A3rUcXjBzYrcdzHhn",
  "key4": "4Tcb3gxfE7hb9CDjCLE24mhCr4QzJsQjJk7FHUhVtLjLmLCvNeN1nRaycBwyPfZ4rys2tp6kKuN63pdZUq5qAUMr",
  "key5": "4vwkpR9BENm5z4TR8QUmN513pjMCkwZ1tqaGs2CruYxuvAaPsit9Qq4KFnRVp7sQeHAAiNqjfPjT1jec8o12t5tv",
  "key6": "5NwrNcoyjBCB9PZgPLFwTsT6Zxvr8gRsJy5vGqnXnoqQ5U1CcvfVMAsM7QjQdtJq7sA7DSgQL43a2i7yq3Rqq4Fm",
  "key7": "2vW1g19bZNTscUeGHV6zkqJ1c5jDJfawfaoDqDyTDWBz5kzyp2m5M9QP36dzcCKPbA97Q437ML2NrZrnVXNZSmCC",
  "key8": "5NarTE2aLFCHMhSGXs9AsBSNWdAjjnnvddQmM6NqEsXVgXGxTREKdKLiwD4um7KPPYYSt3PqjXSxVzRjFCK2TFbn",
  "key9": "9CxKbSsatHE42im2RefvjxTMNy4JRRkXsX6ML26ThGdLBSFVsRhWxmyYvJqwgFnkWvrurfsYYwB6Qb3tSRqyqqx",
  "key10": "5i23YwxpdCoPcxKYp6FZKanEahMpRqLLrmzenfcosBLjrLSjM4L1iRS8FTh8rMk1YsVKDqzmH8RN6h87djRwHShD",
  "key11": "3oNC994bzeKkd5gpeYaVkHg86F5CP68ASPMMaqFjDAiimm7mxrmSsXMybqQHqdbHyMz1vN1eFMU8MDBnQWTyWcvi",
  "key12": "58HhLHSUGNhQJDofZsrYxZx6F2vV3TB7MLpxitynuttGJrt3yEW7sE4TTig6PWbLWkSMK9Nk73ZiQCnkJ8S2bvM8",
  "key13": "5UkZNE8u6bq34zvzkcsGWNbKzJXJ31BVaD95T8QQriS3GstRAUPt4MyCtyRDDJW2dv6EwthhFD6jSydth5xSyvgM",
  "key14": "3v3kgTEDT5qqM92dq44gYFdLtALq3GdtbhWfqiWVRXqQa6TgmJg7maKiL2ozVsfLQqB5MbeKyQdiSRRMcpJHxZgn",
  "key15": "3czWfs3VEEMntKNG43PVq4G3hmvHmhYQJfkZHtSzDLrFAaTBmpUW4zsrZsjYYgx1jRZifjoeEjXNcugz4y3cwJC4",
  "key16": "2GTvAmEjP1cSkbDf8manFhtN3hHJUjXRG4xfMeNZYf6CvYnB2A43cTPfU1recwqeYYt8DwV1CXT2of3Jv5mMGBbY",
  "key17": "5ZyM1idTrz3XXtxe4Tcbw5Usa8KfQ32NgC8mXrrM1BBLyg4ctCchLXmcaqpH5rGEpnwrmgJHT4P3BBj8tw3qV5Jg",
  "key18": "5WU33VE1HChHQPaseDiNrJBB3nsHQfaEgN5hLMZhHzXWDYfC6mkdWWXWemgeqnmGGsUocYt7H814aEhB1Bgw9wy4",
  "key19": "5jHNC4sQt4NbuUZg8kfd4dW6KdkGXTwwa7CpvQJ6iCjWQjVdvAGRR7uN9U9ZRsDLVv1nuQoEj2xz2njKHLaeSDjf",
  "key20": "nncMcDC1hCMHGZU8epqjUsHQAeKXuoBqQQgywd9MfGj3qUH7tNJRdLApFAJ52PGZHzzmqmoLZYuJR1g36KoYRdf",
  "key21": "L2AfcpCdVtmNxVDNP5VNWfpLdbWMYWat2PTNkYvrq3nQPMhRCmone31LB8UwppbJxX9tbnUE9b8GKriaLYKtf5a",
  "key22": "3K9yNchNBRDGJpnNxLp6fYt1gSKfqqrxk9wewAQ75J5JWXrcxPePLvyBjqJUE4SYxjbDDfJak6L7bkzR6wYRH5Fr",
  "key23": "KhfS3Royv1r2xfRK4whLsABXHmWXkYDhjnfZicPhV81MKV8g4UMaKX8n2Ugs68RdyfFtSQiQwGqiRmWFBjHGggQ",
  "key24": "3GVR2K12X87Akuo5GyannYfSNsSgCkUtfkVxDaZuyK19QoMJCR9x4jcW3hmY5H1vVMqwXhuui4uo1TuMeMXEyW1A",
  "key25": "464a8nZo1iYCke9iTyhRV6PnfrV3kuvxS3xPdFmhCz3d8KinkHV2FBpUv57gxF1bXU4Hnst72rgz2cSmimFcj5ha",
  "key26": "3mpHPMQnbauLtSik2AYr8y2g3MSCiHbCHQstYwCx8V9iwutQUqVMwF1msoRh9RLo3ENoQpJMBFRLddA9vWJWFfSo",
  "key27": "4wRiRYPcxhKBsvpoQPY35WY2VuMnKL5iYcVUiXeBhi7WCPFtN5YKc7TuB32zh6vG5oX636NG3VatC82Mt7Txx9ft",
  "key28": "5x9PUbZyKXpMYrj65RGvUTwuaKoDHZKLrJyzwSLzbvZYxeZAR5qfpLWVMwZBfpksJ5wzVtENoGQavPdRSag7LxCR",
  "key29": "UCiEPKipqNEevm8KgCaZk2L5jyDXsbkq8uqSS82eRJtLEKjVNKDGwfbr3k8HzMWbijbdkmzQMT7gvqQtBbcJTdX",
  "key30": "9h76Q5HJyMkYFR7vhXLb8AYz3NGtkSoUPxZVoyT64GuBM4WWMZULcuXEs2dw2Rc4S1cZy7U81JY4hJ5DtxgsrKo",
  "key31": "5muzkXyYkWczReEWMu9Meg8Ca1zYnV9aN3a1fcNNAkVyNDRrXQPPRVZoBHsuyZJJ7QTmRdH1xdCjS9UyFf4Jg6R3",
  "key32": "2eZXfoLGHFyve5CbBoG9HZcUcbF8smdTjpXWJzzLctzfDyhnZGc93SzmmLbgVctEMuhVPYtgaT7maWm37a47mLMo",
  "key33": "2sCSdUtR37Z93uXqrSbXJoJHKpg7Yyaqm8Uo4uJJQJd6czPuq8N4c6vLt9iiKMtMuBBW3SP4N8R6Vppq29e2e9KA",
  "key34": "3rhszJ7bECGFXxnigSykRAu9xpKNkSunPauftN8V7ySfKVpVSRPneP57c4mrpNVVSrQcRt574PnXcV7RT7D6WJhb",
  "key35": "2XDYAaMuHqZ5iTshJ1XomnZipZ5DUuDQ1LWwX9mZFu3efXXAmV5eDWPRGC5fGZ2YEmyMG1ghfnZkU9Q9mUgB364a",
  "key36": "cfCNZD8zhh3ug2z1rVAJarGFadMGNcaSvWJy8HP6b7guB2xT57qe5za81CeqiHFm5Z2hP8fkcT3B8hnNTqbViB9",
  "key37": "57YWUwyPz9x66hUVT7x4dGANtdCLBGEqR8432QjV8d6uZBhmXYBm9wzgsc7Ez9SkCbsz61i9jtASb2tu1AvAkd7v",
  "key38": "MJrxHvS8F66r8rUp9DHmMzAKscZA9FnjAp3aYWD4cbAu1bw5gpp74o2Gf4u4gNgHRXdtoTY71FcyDtqvaDNRub7",
  "key39": "34WhQEjKjmDj6MBiFZXBVPQCjMrt4xah3Q4NCqR8oRbE1ZLktQdchhbKQfFNNxYFNKJA6UcPj2Y1LeMfma7hcZS1",
  "key40": "5n7GJRVYkDdYHaqjjjcceZQad475JrJacpyEYSnm5nFLhFpXHcJbSexD6JM4sttypx2pmppTsVXuXQtXsgjDQqGD",
  "key41": "2fETXAh7dwUH3wirL9sZhBdu1nuwhBhu6XZ3jb4roh2F7JW9LmNBvUJUsmnWtuQsdzB48otJ1H65P2KEmxxY4o6G",
  "key42": "4JZZS9SfBEE5kbGkmeCd9HD96DwCHxyWaATpzrZLcAX3SHAhYEHpvh1521HmYzMZByvVuAzfzujVm3LZ1SD4Jd2U",
  "key43": "3JZGQH6fzijEA3enAzGsdxXc4M1FLcZySSZTdcxd3AyozDrgAGpuL3RdCA5MhYtne7LNYrysxZ6DE1bBQ7ScGMar",
  "key44": "3DDAj3kkeuporVB288A4wgLEkYgFCK3dfh9DTzTVs5eRRwQZs8vSWRxzL3tdFvPReNc4tY3x2HHsSuTRMXT6ya2i",
  "key45": "2ygQcQhZdnuXYAeEfWC2NJz2YEDu2GZHY2SYvGZfw9EpSe3EaU5mXP5JnL9oFeD4UcuDGBBDdqWB4gBTU77TAM7E",
  "key46": "31vHozHJaiXxfy4bhnqXDrtV9A1Y3eMqZ85amCxYEhrdrsT4phES1W2evVEzU5wPg3LRRnZ8HiRAZP7D9rYqWx2c",
  "key47": "47YrDYiQeVrDn17ntpu9Usfh9K1dYZrepHK3NHf2MR3VwwSYcpRHyFC6wfzcSjYDt8v2bFayfMEpmJHnmAkGFDN7",
  "key48": "tnabXxfhH49qYokSsQ7S5fiqqZkVaAALACQ2Muovq468sDEr2Bm38zUw25MUM6odZVzyWy3XjaLV9WEhqrX2A3e",
  "key49": "2cA3qCC9dJYpHcetK1oP99QWuExmB3wNrjyaNqL7xrRCuXMnGCAKRkqEUpRy3i5k8SW8Rw9ZXxvy55dqRqSk7RaV"
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
