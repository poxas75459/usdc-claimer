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
    "2CkyCXqsCf4BDihXDoLWppe8F997yQRCgZXwsBoCaFdoCxieSng4eXk485QUBSP8sDr467WXGsb71VdaGHRiu1z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53uiQ6fAyHfU5rpRfjiG5658JS6hJRggBseow7PdyvpGV78EETf3QZLn9db3v7N5kpjvxUXmHtMjbxTsLpk4fHjk",
  "key1": "5gzddNShMhqZXHSAr5Znmcsw18VoXYkHXXNnzNY8t1ptF5xHh5bjRNgfTTiw5PLo3oP8KFMVUaJhcWFbo1p3krMs",
  "key2": "2674V1wK44iX4wz5n1pNnTqR28hjs93XedSj4qBYDVsfBBi6rgNrawwX6ibMagd9hRLJNQPJnQha5enbagFB86Qx",
  "key3": "pUjdUEY2zJJtprpdiywDWsSWowaYXBXTEBszC4z5B1t8WADY3UFswkqJpb9iH7nEKd3oX9QxNu2qoDDWWFkUhkq",
  "key4": "2QvKsRGhhgcPxiontJaMXaxifgRN9nitcEoTrqRJGS9tv4YwAGmFwJZn6UzFjGwzArYeQsv4nJAv7VMxVxPzHMNc",
  "key5": "2AtkhZgphzmZdQxWtRPvdmtzBxGvJWKdi9E1739qgx2bkh51uofbVSg6RV6cp2GUnwejfw9marpZfFJ6ngBGqQTu",
  "key6": "4vtmfGSR5kaUXRVWEAxzWf5vVHn6WFUQB9gcfde7fWuM5WAzpDk46u6PBDTDyfgDZGmGmrBbEDvEMrgE7x6JB54G",
  "key7": "UXQi4CnQUL3oDmr3AJ2yjqrfCS6f8bFc13cAEMSBGTPGGGe3Ce3gaCDPauy7SQWzN53fYjdkEf5K331Q3nE1Emk",
  "key8": "KqkTkrWAUTivX3e49r338iVvFGKZjtLwXF2zQnKJjdDQrfApGqJaNfEdk2bjfvnTskUM1AGK1jbKBWqwetyPNxF",
  "key9": "62eY168LDDFyCdjmcorsT3DwnJAFbQt9eDrt79jdN52gMwXouDQbr8eH4TsMBM4QtGzi6SxkEeYRvR7CPjN8CZH",
  "key10": "YFPxGHZCmmVzubWic95kiEweBA5pa1DnXKHH1JYGVjoHNf1tF2SLXH3iB6DRJkVeNMC89SfWpLmejpyKbVz4Yhn",
  "key11": "36nKq6o1HnZ1FwvwTpWPMMtDkgMmHP42K8T2DRFJkveK6jrYgFgkyUbpiPLhMSNCaWdn4AiFFyixadWbDordU2ai",
  "key12": "2thEY5TdSwAgnKewZzS7FsgSdcbZzUKiGDYHtqhM4hcrVJ1WYQX5NMPiFDqGjpLZxFq2aU9yxYs6G9UrzXovWeXu",
  "key13": "3efM5tHz9oKfydnwNfcrSsGEd6D6fNjtXwFMkf2pvWUhH5HG8SrcP4KujJzArRxgn8J6hBqRMiafLrc6Rn44tMGC",
  "key14": "o5AjbQAhJ745dGVjaahwmcmiCppfGqgXjGWeTEd7vNKS9D93tvHQpbgr52KySgCcPj18imQSvmRRE2nKqUtTtNg",
  "key15": "gNNUWS7wbwzt7FkGTMjgKQa6gUBZtnm5d94eYnuL517S396ywTbkZ3SactfiZHPhmBkdBheEFYWuq5h74nyoviX",
  "key16": "4E9UDz7zTwB258Pe9No9bjr6t7wsiqJLSPkRkpWnZM9WdtXYNHHheqP2PFmqzZZhvJbajhKw1zEu9xekrPPNUwE8",
  "key17": "4wtLByBikcDnt4Q6enFqSQSfPqcqdPAN6FeEfoSPhCbDrT7zGBmcUhsaRVMY3R6ndXf2aqnDww6SibX73uZxQQZm",
  "key18": "5Rf8gUpSUnQ7z8EegBsqvoUmA887DEmHc6xTFXGHZfNPiAWnudmCZJZh7cF7woMGoKJDfwue6jW2FjPSA76tj4mL",
  "key19": "378CLoQ8dcxjQhJwiac881CxoMYq47BUUHKkn37UepMV5M5UnKjSGpDFzYyUDARejYvLxBuyWGagvLp9iTT1Lqo6",
  "key20": "5Zngu3FM8sCAiXBTvg24xXhqs3VG2BitpVbgTdeSRk8NQsMxH8b9w5EtMSZ4ksMNYja1pMZEwVtis3oQEDcMdnup",
  "key21": "415DzP9A3sYxAAouUZwbCQJMc4VdU6WCacse67Gvq577yC6sRm6KQ4u38rVjHgnu3toTdBo2SBta4C93yo5wJkry",
  "key22": "4LHW8uTwyDQp8Zyyo3Ne6SFEv25h6bFoKmokewboqnDWojow5wKoPyfQfcas83QAZnm2iUKLpTBE9aSdzbXaNayq",
  "key23": "26X9b8sTGJfwSuKv7qQjULHoJwBgGQGRkrmFiV7GWhn7aqReVnNEuicdtPq46FP1cFpyKhAuZogC1QfiZ5NrZbkM",
  "key24": "3JEPw1uXV1aJsJnFewoHz8GgdGxDhkPw4TcNNypL6bNT1Fp9oVWXnB5dRESUgD8m2Jj57QHLgnaebNN96SoHCPNC",
  "key25": "56wCcdrFr4n8iffAEaifBrnJmksW1q11cQN4Ye5DVXPdvuo1177PDpCSsWw1tNUuVCxtFG4LyXrbaze3qDb5f38M",
  "key26": "u97NHAinZdLrP8MqqwSHxnHQWjAhZt6BANwqc97e8PTHvRDp54Y4kvGbA47Yof4oxJm7AFadY7eJvnX2tW56Whq",
  "key27": "2VrvHNxx7tL2BGkuy3YkydC5vnVyUxwzXbq1kAnWASz3ALXHxdEqtnzBp6Wz8vUdtbbQKdEayU3NpkN2VTvZwmah",
  "key28": "3bx9wMVeCx5mVXf7P2u33RHRpG6bXpzJtYrhuyqtAekXeUiY3psQhsfDmrkpPJXU9U1MS8kYcdN7KpwGqv4fj5SV",
  "key29": "65r67TbfuZPfGZ8pVkF1QuSR8fUhzm2yRRTGJ6KnJfaGXjoVXC3zw9YXYn3egdLuqomwVgokbLX29JyppsF7RtAd",
  "key30": "8xf9kYS9RHGBF2auwBcwH6kgpc7hq7HPzz6fkGFGRn6zoTMyvGjmAHgykv6ZsGi4XRFZohL3T9MBXg9TDdTbS8L"
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
