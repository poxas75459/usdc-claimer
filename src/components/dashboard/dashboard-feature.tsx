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
    "3wBNBjob8WwDmbgYktAEHqzVuhEujsG4vtuFST1bAuvQdYuxcciQRYc7mJC6FDpQXaV36kCYXJQeBRaRZRLRBckn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aW3T28JggCDhGXUGfHcTwTvpd7zLFcGKkRu3r2ELiEpf8ZKSFqhwWeXVvUYVHH1ZKkP8KsKn2PVy1YYPKWjRTQu",
  "key1": "2bCKPzc2xd6H3jBNK11CrViirJ84yYHqgazQHJoP2jRW813RWmzcdEnxyC5AoBHZY9TAqoYcdwMpSbwVHioBGcwd",
  "key2": "4wnULMabRaJ1WmWH76uEPUMYtUMV5eWd5ZiRoKuP37xtJRqgUoDSDzUdNShMo32ntTLZXCqPrXVrKvfzJ4xqDRMZ",
  "key3": "2GTbQSuLPTtsbD3v3x6LBVmLaST2X6uZv4Y1igsD7gYAdyS9zGEXXc1VTAGgjUJQnJQvSsy2iVtHvWbZ6X7XS5Vv",
  "key4": "3vyKo9tqQ9aSxMRkuAbjAwhNcekpSBYaCs5vte5zkXa1KHXhJqwUcF42dU7MJfYSdYF1csZS4gsYNnSKeQMtA8oB",
  "key5": "h6os9KQLqcvwabaP3D3jMkTmdUSTKTXAaHAkvXGCxuoQF1j1KusjqvotZedxCeAW4j3oN68ah2p9PJKB7ZfXfPD",
  "key6": "5Jui85KkDWdRf3p28EcRumQ75FMrNmKAeWSFBQh9MwvbVv3mcFJrT3SidNrs9ySmfUnmhfMzy3ujiDyrpMWBmBPt",
  "key7": "2zwFNqRcLbieWVmpo6y64xpkE82xXP5FKe3tNapc8rS5dqTo979pChFwPQtue7jVbvphwt7CqnvJEiMox1jzkcZd",
  "key8": "3uytGyKHzQYQ4HXT685DUxUMe5NK9xJX2H6k4xqFRLdyrgjsS881ATcgLC1Vb3AZKQnkuJZLS8QU2FcGoAn9QbgB",
  "key9": "5CHb5SNdkaoUi5VzVzAFmA9YBMPPtRg1M1MVSK6AQ4nqVFrXPwodchLMnZHEChZvnUWb99aKuFjrhzMdooU5zRyv",
  "key10": "3mohDSN57TFLY8ydxyYn436VXT5cXALCkHnU91m4yT1GWmi4zxiQUWewVUNAi6bzfHdrNd6M9p4eYHMNvg9xfUTn",
  "key11": "Bw3iVZiVz7TFt9ViSENUrY3omtgbtQDEtCwVycDLJcjKn9GCC7LoGx8mRWQHAVmHzcuwxsyxxXaB9QyQyFKFXUT",
  "key12": "5hHie8vWL66NBfgSvy124RDD7uqS2EfsvQCQZSTj2dCdzTKNV3batrBZX494VHVUwXNGAxrkd6eDdsc8y5MnuG7G",
  "key13": "67iscfFVA1HRaRFJSVURVPuzBHjrbaCExvorAS7wCgbjfNmNvRA83jBa7j1fymi2qnZyzktWadwmsJGLBzshBcmW",
  "key14": "dUhgBvRkY59niGrHAykWeVc9MZBGGME7cqsELGRmnGMVtKrcc3jnAX5ye14NvNqWQyExMVBRPnoJWySBPAwdRF8",
  "key15": "4YCw5XsZT8RZFRet9iz8V7WvFtjn9K9ZRtnLTtvZquka9cRip1adsmLM59vPf3Y2evQ8JywAcGtys7dvLRTCrtZ5",
  "key16": "3pWaG4LMzqbUEE8zYe8VvLJtrNuLwygozYKMoZrrYuAF2f2LfY6bdtmEJxa3K3W74FpNJJr2UHNMF52m9pDxh3K1",
  "key17": "4C5P8YuHtfUTUSRzgsGzwGziWULXE4tpksdD2J4zKQM1pgknpqLWQi7UAqMNvLRJKUQxYJC29E5FfUYbyCj7HMUr",
  "key18": "3HVYnDexVYFQZBiD632byeeGqco32cg1YFDrxvzcPt6xTC5g4mtS1rEwZQmhQPVuBKL2T8AUQHQDKR43bnkzwLdu",
  "key19": "43ocnhKb9evGHFqQ3cKDQRbL76nNBXsEB1vNDBAx51FhfaHsu6dMhyGgPuBdztJnqPpAZnXu571xvdhKRKRsg5UN",
  "key20": "57KY7GscRFAPEYyYtoVqt9AYqe2p8J8BgGbUPghEhVUUMwV7YX5fuvJyxv3GegSbgbgwtG8xmQASdw78XKyVTRxc",
  "key21": "3zoYgv8ioksJcEMoecsY5LiXuJczwmJG2zAPx3Y9pLvGaLU8MCe6gBNi7mBb7qanXYVvnSgfKDVoMgcS2sewvuK9",
  "key22": "3sCydXqUDAA7je1MYGbtb9zuXmLJ6vZNSjc4irmBfaGCWL67YQ9Z9Xi398GkrpNjMZcHf87gFtMqUY6WUnaeahkh",
  "key23": "5DCJZEbFaQkczuwThnkUxrvsVEsESnaUh7MZSbWQjJ9GCLn5xLyKEru8K7BTdHFKQ1fLswHjeVpszHthDgx8yy6P",
  "key24": "5DLMFM7Bz6QPMxaUWE8JRzEDzRVPPLYkMPJLaNvei4icDfbVZt3cyX3fWvSURjs5hsSKS614PZYV9t3dc2HC56H9",
  "key25": "38bCrZurg9JE17bqGwYvhyh84fEb4XmZnxX7EfyME8NXx3hevQcRYxJSLG3NAJiZhZbuwUhCuTv6fwry7KKQcnmm",
  "key26": "5sdVpT3TC3ZgmEu6qkPczBWbwcnjfejfxjVS4r9yFKsiCwHwr3qzjwXFuKsT4ducBzTG1bVrMu36RefLqvxVFR9P",
  "key27": "27LYmm5zsUtMhzoca5juxy5h6JFo4PVro2KCKvL7PEGB97rwA6pLd2BRXHFSD7Qpt9WDL3Kh7WwMTs9mYRQ1GB4S",
  "key28": "hTRxNyAoaTMu1LaNmqLqVzbkicWhojoNKtt7iy3nK1vfH5mSDvAqoLftcEXqsRENHFm9VvrFFMwaPQuyNRptyUa",
  "key29": "QusF81EkvhntaeQAs1ncBpkncciBS3bgxraHy7mrh3DX1qcTZa3DCWxVcR6oPb6mM2KnG41gLnRRBH9G8SZdJZR",
  "key30": "4PRqAZv18pzbLenHbzvVwUafv9mDbBdAHPULg8WehanFhPLYPnNjDZuTTqfxPKjc1fx2ikGbeyfco49uzKLGYe8S",
  "key31": "c79JfhsT45rUdZ2Tai49sjENeVY4wvfjtsTpZPyLKaVcHepkFBWxNUjXKwsek3dsfZM32HSKqZE6RTpmuUhLsGG",
  "key32": "43fToPkhXuoyYwwyjHQJ6stPqF9L1fYpB3AiRoG6UStbnbHrYXpLmiphHrBqRpGQrb3QX4DF5iLVa7eTP8RLRn7H",
  "key33": "5esCTH8PsFHP5Q9XPmDKw8bu3wMTTbGJ838EzAoVJ2aqVhds2cT1CshGxCiUe2Ldu9GnGfxCJb1VQMPP2j11mDWj"
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
