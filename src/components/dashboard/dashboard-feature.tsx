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
    "2daMuN5FbzfoKb9zjzRjHct3jfkvkZrqEgA7d5LxhCNNThXqZvd7eZFvMfe62au15YkDDCp1hcGdXhqfSG18auj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wV7wJUaFNXn25ozo2JShhQAQqiDxmG9X2iFi9EGQWjEvbASFmvzG153n35JzwPkptcZFWppnCGSLif1bqP9Xhp6",
  "key1": "rccY6LqrqSVnkuXKGUNN2ALjJJFxPFn78VToYgxEDLjWsmB4jeamVkxoya8ntgSE4YzbMeXhcu51NMUWENQcRD3",
  "key2": "sqyo7xceD8zijAU6tEA2YsiES1MJBu3VPkPFFfjchkayShb5fpw143Pr4XFvoj5K6E7SVhPe1kRcXs9j2AbF52s",
  "key3": "3cD68cDLZEerbM9q6FpHy8c2knoFgKVuSThuPg6Wdxt1ou5p7GU352qQUsdeEig6jkPerJY1v3cebCHRmvPcRmR4",
  "key4": "4kCWYYatqLKVR92QLsu688tNYnXKwjrksFaUVCaQJBACJKfD6oVZcXk4Lqf1PsRNsoWfxa4Ya81J1Cwsju9yqubY",
  "key5": "3AqWQcSBbmgMt6JZ5NT3k8y3HEGP31JocZjVWFaDhyiqPq1qzfL8bZfiz91PQEKnD2gUVzXMzJiS9EosVWZkzYVD",
  "key6": "gHEQEVRsJaz1eeqoBvjcHz7HP1odxE7DpwGA3HqTqn5BkLfww29GveoGoMwgn9YMZ5dPd2R7XJDSF27X4UBT4qy",
  "key7": "3JhLwMKYzFvxZqP1y3TdePFhHuJP6YrJXhKwQSNWVCnDWWKUXVeBtWLfFobbUQfKMqHb6T8rs9rqyieRaoFVdT2t",
  "key8": "5HN9jvyh5BW5apmG8TZzF7XdmoagKyHXZx2YvPGAuKrXChoJhgYozq4jv7hQLiL4QtD8RxzxmdecWU4vBWXvRN54",
  "key9": "fo1UwDh3TSBG3woxUJn3sBZNNeSVXEtUqsyrxL3KPzZYxeE2Q6hVpXk1CLJr746Uj4FTEhtn28p65FRyF2BWyaJ",
  "key10": "5BhY8VT4KabPyoWWdursng5dW1NXbqGp43pPLAxAJHXdE81BGKBZ4QdAUyiNpULiTeVeZjTvTFr6Qt3uoM8HzkeN",
  "key11": "5zcPbCTApdoXvKNU8XYh57hi2cRzEaWsZ8E3R3kz81J4i7ugwWkTHMswKNtz8FDik9BJHbQuhYabdaZgNu1mhFiv",
  "key12": "5XEcxwN5mmRh6zJkfnP28eAu8Dyxwv5CtUes1KAAMNamdjMosutnaw6JmUTTmTEugjqQ8zhhzKWJzR1kmKtxmx77",
  "key13": "5agidperxzef78GJDbRA9Z9HG6whJ2q2hHD2ZMR9P7tMmaVHugqxAenLXDi1NZnW48RTvr6rZtAKKVhkfTFc2dW4",
  "key14": "3Y3dG532c15vL3MaC9ZXnEs5R2jHGLs7MNTz5GwjwQ4vCbWeGABEV6yGwDcJSyMhYe4Q8wsSHdzVuviM3mZ4rNyb",
  "key15": "v2YJwN2D28krEqih9wgMGpktBFeHqrvEatUyUUseokGjxKJ4Ebnfe96n6pQ3bpYUVUHCD18hWnrbyAFj2gRFDVa",
  "key16": "2Kyu3rXA8s7aYggoMZ8tynvEq9zGhHENSs2WWNHWmKAE3Y7zNhbzYjMVhPyGsYdSEkS94k4knZUs2afHR5nC5ewA",
  "key17": "4VTBSZZXSRYUCyC6qWRxaH177DSXzTKqBD5w9SxD9cXwcuyMV52LUtuFjYA2iUAnGVE6XknrFPUz4aDUCvSg8Agn",
  "key18": "cohJX3XNLpfk8kTptJTX98RT6Dip7DsfZ9DAZD4GrXy6Fk7F8cFUk7GNNLYMD5sTwGKHa9a3ngsxFFWKLUERWc7",
  "key19": "3fS6W8naRVsi2zUkPFXgNSHK3S1LKTnHbdwYcAdRycgni4BTe6V9nHutaFKySa3sUMxgcDQhDg6XLFaBNyG8JUFB",
  "key20": "5bv8B2L8Xz6NcZQDYeGnvvu4NovQWTyzheqVtvfR4wX58p3J3jQRJctAVa6Ww4B8ZFgDA9cgSaaskir67BxENVSP",
  "key21": "5srnFK8CaiwvKSirHzAeriwHkMm9Qpvx1CDDkPTDcHqoMZGuoyHGbZEwKnXJCPYZMXNSV9ArGnXs2fF2Lp3WkaWx",
  "key22": "2XErN7gbxC8RBB8iDd4P1ooUR12cB8eHAGXTH8SgD3QnG8ZEkLYNA3BDqqpKDDiAV9AoqhQrcZC7ttHj4x23iq6C",
  "key23": "2WpoC9gtWqRGS5bMGNuJ2xcEKitiGSgpUipzCpTtXdFcpZb5wXitA3L9n29WMTs5CBQNYCNEsYqsdnQJi4b5SQQ6",
  "key24": "3HgR9PpNAC8vxUC5VRbspepq5He1gTELBkVZBaxkcKeTnaKbHjd5TUWvLFYd1Nzh78heXHjpNBwJ7HhB7pYzVeoQ",
  "key25": "3MaKnLGGb4S48mJ21hjohnEUeXWPv4LWZdei6644e5JE4spzxfpS4s3ZcmS38vBGbc6it141YQ8RBpaWq5ASfcS",
  "key26": "4a2P8r61N839X9seCzAFMJ3rq77YdA4A9RwPk37S8tRRHMLTGXg8ukmeKrGPdu1CHn1heXMMo9kod16RK5GKLLQM",
  "key27": "47oYHFWj2gEJccQi7aYBAgXQZTNVts5gKzYKMaYjT4F85DEfixuBvsJre2Sb26XuVJV9V3HFhd7FiEV2bCzpGR99"
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
