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
    "GGbXVzUsF87r7quP9Dm1ir3rpRGj288DWKCrQCtnYzfGKhNh8FL9EN6YW1tw6FgXVqbvrA88BmE3twivDB6Ve3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jTjE5vC9PjtjV2hbRZ8tuqe4GsCWqGsyu6cgzJ9ScSaDmhNey24N85yd9KFqjX7T7iXuyc8P5Q8ZnZMiQgUh5dF",
  "key1": "2L42i48pQ7CNemNae6cgh3NA7Lgp6C9eJU59GyuE2qdTnRZyjVuNUPzgve9QeaGL5E7wNTxS4Cs4mjXX94aGwYcY",
  "key2": "5utyxboC6KJqFM9Gy4VLiFTfqwZsbaTREN8bsVercgcn6vzCVR6RT2mvspUUDQMPv2qrULCHVdgVepBgq4VX28xi",
  "key3": "2DrT7VK5vZCGRs6p7xFRMHcdV9vXy45TaQgnfCcrMaAhFWP5NQ8Y5cFPGNJTed19nNXKEoUviKv4jw1FQ7nmFMvz",
  "key4": "4PxfUXiuDbHvVg7jHX9m7mfZ1WcqRetjh18Xcqd16SpPA7UJFrtLcvVizE3WbkZen7udAdoz8xgcZfxbVvFKKKCq",
  "key5": "4SvyMYfo8zKwn8MWY89eBz9R5JaeXq1NWV1oqDegrwTZtfM2vUYy98dU3KcVaffvVfkDNV4VosR5zUM7ZESGhLqS",
  "key6": "3tgmzSD3eZPa8Ph2wq9KVE8bQCjRuEbPaHaMxnRShytuc6dm48ZxVjtGWDVXaFCpzZ5h6GhJPzSNphG9XyhEvPCz",
  "key7": "5jy2H2quGy93idfVPm4K4VXuWs62uQrAqJmZQpLULSqrS9tsuRgZtzeATtqJbfND5Jjdw4Gs218NwgGgiebdCPTk",
  "key8": "4crBRHF93gHuZJsvy7v8ZkmWFPc6sREXqtAYJHWVbhRbuBkaF3CvnUf4Xnnn8cC5gajUmqMAZ7XF4Bc17sdjPBf",
  "key9": "4nV7oiQDiK8bbPj2xunCSFUdxR3rQ4y1qiizqippbHMqE2BxrREyr3p7KyRGhDrxa7x6Psq1fEQggCgc3psj7QS7",
  "key10": "5v918T9V6oNGTUuijt9aMcAntXGGvGuYMrLigeJNE9ggJh3C3AiSVmHbiirqJpKmvsNLFCV6Bifs2gNTfYqL84o8",
  "key11": "F9DgvsHTD1pRkEwSjpVkvj252f6cAyr5Ai6iM4vThte1mmi9aRuyiqpLj5DfqeLJ1DTz8dExNGLfXzjPyxgNASE",
  "key12": "4gZUe3F9tEMJFsj2czKsTUurCDoZU2ZSyKAPHzWUiUNewqGMD2YWeUev77ChfLmeyznissQxxLw4zWTFuiEb56xR",
  "key13": "2WffT2DWcWLD68BV1R9j6ftmKYmDxzke5H3dgevByTEJwc2xX9pqZrxALSWjbMrUVjprwkytQ22CaZFroZJ5m4xe",
  "key14": "5yeVtKNyuXPyrzLfpwEvXEw3qCweKGcmr3u86GHy6JuPvQsd3DR96e7SQQLefLvwZmnM2x3rMS7jQ8sjgCCbUx25",
  "key15": "52f8QqYEtJ6WwitobLKewStyDT4KgZZFjQA6wZLAsrP3o17Juxpr789PMPx1XydQ1UevksKNVXxu2nKXyp5hSkVw",
  "key16": "4RzfRDhLXMErEEWoqKT5bVm38znjtX65Xh5L4TKVhEv2s4d15ffDwnBE3xnwfGnmjZRJW7PGCiuU8mw6SJNDhK2m",
  "key17": "4Vya4tUbq3TPiy9MJgJkyu229tVY6QMaLaC72bkq2kCMC9G2wXwLXdCpKDZrzMinZZj2KXfDtd8LMRzXJnGFZ1r8",
  "key18": "2fSdEeaW3upLmYi8Kqa4vDLuKa7agTr9VXTN93ZXxZ1Jj4MAPKv8oGKr36xe6vUkhurW1Vf8NrE154Lcn6RxmCkt",
  "key19": "2n6FMVPgiLWMiy4mtzZ9RmJYWgaXyiTcUbaFwwbtsJngRX1SMAz3AY8i7QcJMX9qiZ48yUVJjVSz5QcLtU2FngGp",
  "key20": "3djA4SDnhDn1xT8cz2RK14RY9iziYLZ7nVG2adpm4HFds2dhatE2DsLD5koEx1kbdReVR6KALoYp3tnpcXKBMvdG",
  "key21": "wgErw3sW3bLfqb2eYqNMptKXDkjp4hjMBVoau7mGidkcw9S3Qyp52XHkw6LArmpkijjGiRma828TpSMruWV3GJc",
  "key22": "zQ9a8GNay72ZkYLgfLaP8uUfopiZy7nF3wyeqQpHGRHqonDymUsREGaAF3RNroEvFUpoocLHSccisnaSSbqNy1U",
  "key23": "5oV8STKBmjmS9ateAhfBPzvyLowkyb6ru6agb89iSK4ejxVauZmp44sEgJ54h9bqox6DRS3bjfodwZtDHxXdKpWZ",
  "key24": "4WrMhNhNaK8Kfuy1EEHhiDci7wvcLn45WvAHKYCPgKVn4JwCbZenpczVACGRuR5hwaYuT6AZCmGGjDbx1wXZabTn",
  "key25": "3PCbTkiDWGmZKmVoeqatKWHztTXa1jNe89kFcuHEtqHQDubzd4uX9rDXfLAS2Dai63MuWnav75skPjmwxew8RKni",
  "key26": "kHMc1zvnKaUZ5jBTJoB3hk4RmrLmfybsTh4fQcjLZG8FcQsquSCXEwkpeipztkQUc1fVJRXNJwTvj7mN7kn6xJx",
  "key27": "5Auy3cKpr9Ag8TrSiSERB6dAnEUscoF9mpm4kCPSLex5f4aaiYW4qV1mxoVBjnfT8mKQV9nxAbUeyJAuoCaCaxk7"
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
