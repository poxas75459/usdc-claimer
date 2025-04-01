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
    "KWxMTx2zSi9LffiM8YwERqJ3An979oN9WTo4x41ioGG8BiR44ABRtDCy3eG24xGaH9JkGLCJckZCfa9zEEab5iK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QoMtugh4umMfdwK64feTAWtigkuYA13mYwmVEhzJigUch4oFiXFFTEGsjNMPQHzwnBzaWiBmhZvKGnRQNw2DDbx",
  "key1": "2q14QZBHkBBaSDuebs4p3Xt3NCxLfhnaVoMSbK9iVZ3tCnT4YQF6nBvtxBThZjf5EUGnLcQMo1uPVEMAufGv2AJk",
  "key2": "Pn1k9gakZW2DbkScMRbrF9uSronZFiMJPqCzag56f35GP8dK1b7zpavNq677HKz2e2ymC6pHiRB4Y4ViA2UQcVb",
  "key3": "3wixT6EPqQ3CrNmJ2mUHFxW6y9BjktmbCPFmmmnYY5oPrwKjW2K5heaHTnAkMx2TykztRGNCvYQvpiNNLXrySrRm",
  "key4": "3q7RbkkHre3FyLxxCuLqTXXdaHXqJrUs25AygA7HqMJWbfWfGzMt8n1BiekEjX3fKkwmuqyXVm2NK5JZ3J1m3x3N",
  "key5": "2hJ7rzeF4MwaY59FVyuanLmtMpqyAyeHs5sKxw5c1gAsGaxd9rm6fyRiVbyoKtb6FiZyRBxcVV5cRvqBCFwzUUG5",
  "key6": "55RqgvRCiuuEEH8GbPg2us3JV8g7ApbpGtqKbbwe3m5wcU5RBTWEuPEFMBSPrQA9qfScKm4Gzxq7sdaHr2PRtMbb",
  "key7": "4YVYW24wcceReoG8fhQqkQUavPxsWdHVTTAbyPdRgL6YYfhX9RdErk1fXmgWh25cvyfx65YqNMPecZcVkMJjogHu",
  "key8": "62MQXjc6xKP5qArKqcvC4eZN5H9hNECPGm61Hd42x2Bb8XqWiuHNF9xY7ncjhbj7CARQLGh4gdeqFMK4NsrYX3AS",
  "key9": "2pcLaP4uACuQEegjDpuc3ED56CT4DYNzzVdTqJJ5vJ7mGA91av5UjvNYQgxJAcBFjXp9tFZXUQYrrzWxN2mqqWKd",
  "key10": "oCeYVgUGnq2H5Q9HV6yF9ZEvpNLapqT2Zqa5Me57zQjwZiqNALYyo95T7BX2fm5gXUZ58MAf8LyNLZjkWi5Vnjg",
  "key11": "4WJZYSgGBNmoUwydWjcwiYLP4REqdPUDmNcrmHhZsDVX7BfA4zjcCia782V6WNxup2rQjXTw1st2coaeJ26skC27",
  "key12": "GFBpUSiWDVavtvi7YcwrjDtk4XiH6HWsGgCCigeFpJkN3ji9Joo7RGebmsYE1XHkdp3ovJLYm3CLp2htq6vUKkQ",
  "key13": "wu718CakwxDz6UCvuNS6HzC9ne6gCufhMcnPkEwgPgHCwzV3We7sav44ZFwmZUxbuKH9biWJSz5ri8ueYR8cpyH",
  "key14": "2pDZL5qeKvRhg4cPwzcpUsUb4gxwgD9WH25L3t4BwnXbUoQhXg2RwgvJCT2mkC5Pk7fk8h4AdM4mtKKijdZTGhRL",
  "key15": "312fqpJ5LQvhmM1vJSKGCgjrA1JWEA5V2UToBEZDHvwNdYhFkzoruVGpiqBTCdEzxvcTDYTqjyhGMiackrNxNnPb",
  "key16": "3uwJn53jivs8gjxHCWFppHHqPj5oGRfDj43zbrohHud9xgZoV8geB1za6b3wioaDGZZWfvU7bnmFMdGd42yMpap1",
  "key17": "3W5GKHwbtmHwkRkVvVQeqGz2nHWHxE4NGrde9So1AfMmPaXdBjs8cXu2723Et1cWTt1j8bZygfzw5GkmUFUivSki",
  "key18": "4sKH8vSkEQgQm7o3nE98ZufDHezTw22aWarG8Vudwt6aH95amyjbazjdoEWVBKyiLPvAmG6XXX2cVFrMygqWmG8g",
  "key19": "3Gd7WN8Jyy7qEAiZnc9dyHtyFH92TaoXiiSHBGf3RvGA7Fca5qY9Z1KyZjB5JZYeVAw5VTEjnNFD6bpMjc3R3eUx",
  "key20": "39ESLtn3h5xdBErPzQMmcqtV9rLKvrDJggfCCm2kPgPtmymg3BmSRsEoxepLpqccm9ifFPVBhRUfiJhNQygmfSGB",
  "key21": "4fQB2woicoDLyNzedNGfPGL77iNvmX59wfHAiS2mC75NAaKuT6YWQaCyaJTVQAiyCkv4U9q9JtKnaMDcdTqCdTwr",
  "key22": "4R7PKZvW4U5i5wiwoXSquC7cVQTb1iTey96cB7XaS7L76qUGgXuj4bE4tz41AejupXF9Qoeo92LDDJVXYSFbHes3",
  "key23": "67PW6swhEWPBm6hnucSL7ehMDa7HNPPurUg82CoPxrh4jdq1D12yKVTpvGMsvcmyUqiF9qKtN8b1qfDywv2rpgeU",
  "key24": "KDp2fmCALniCY552hzT5bk4iKxgytPYUs9gqULRqjnUU7dFg2sm7BbcNroxxf3L5qFwpXzoxzEG5nkau3QgGtjZ",
  "key25": "21S4R8Z74HckbFmeLY6njU6YwjpaQz9pr8Gx3M7kzFBYkzUaRBLe29T5mMpqEBB9v4LRNhnpzkB9VvKsW3iYNw7Z",
  "key26": "5j6oCZwNc6qhLL8hXfz2jtpkK2rrUkFz8ZUKqJcQgsrXUEcR7EfSxEjtdAsoTrSV29MJardCFJDCp2nLjmn46bcm",
  "key27": "2sWZJ9EvM81UU5JF5L8DoD5J2mCgJynkvjYNXdYvCibEKeVB5w8fZY3SQ1GpTFfyWefHmYRSHZYcQQYJ5Ua1ELtp",
  "key28": "43KTDXRnAXAEyCr8vQSNzj2kNqHE2uh5E3zipA4J3eQDByqxBu7QfE4TAsWwoEKqaX9yk5kNAZFoFGvq38wgxUiF",
  "key29": "2vHiQEukCaX8apDEjiV8var95kirV8fZa8gRQ6CNxpog6HBbZPLF4HsG7tn6j1zS1wsfMPN97XbdeuJNuUhsYWMW",
  "key30": "4M6A6Vw9EBJmpgcmVqapbefrFA6dFy9o91TxRqDbKNVUAaGkM1xAgQvhpfa4dHc8udBisfaqqkrEQJXYMHjCZsJT",
  "key31": "4AAaHWuCQFpn5mBx9JVkXxQxDCUkzqsdSinr262k8sbJCUH5MJmvyJRRPdfkoNXhztFYZioMkY85CufiXecP1RRb",
  "key32": "3kD6pthwregEo1K4gTPkWLeLVjQDn14HGBbBFAgKqGoHPMqDxUg4Y6T77pamBKAmdKEkRX4PckANJsLxaxD1cHQG",
  "key33": "5EQTcfr4JVotK6S8fs4VMBb5RCWvCCWDbadKa1kwJLH3j4LJDcrhKMBzKNjjhAGZGYVuhkQKsm2Pp6LA4ac5uM26",
  "key34": "Nd2W2jdtB1qZpLpGfE7hgKHfky9otnvJJphhG7y2RgfWNFGewTfSrEx9SV2Liba3ijt1KAWzhvkZQPwtNVSQ7cp",
  "key35": "7s4uejsDAPo2Li2xagVhFi6RKm8ods1N2gciWmSTsDsWbVVEYGBebsy5NYQWz6ogjYiFkW4GrG7YeMquUybN5PV",
  "key36": "n83ryYDmfAGAXHUNjvfgx6ZD5xYrB2yFnJQMi9FFfev1t3hm9Vu4Au5ZHr6QwaZ755SgvN9siH2sfxD7dMk4ovu",
  "key37": "3sXyGvTapg7veF8ExWB6MRGPmgtXT5pUG2YkmnyyCPuVJKkwYaVHSgBkL5HSMLBv9vFS5DUyxgVZAW4GxXCw1nFB",
  "key38": "2qqb4hdq6zDUgDYH4om9rYY9xyckoghivwxaFjJ2ur8AYnXpjBkg4G8ZkQbvx5jJE64dimNFBxnEBwqipfWEk5jB",
  "key39": "28akkQb6pQWoYJCA8nUp6ZFCnXCJUFiuDjsCbd3JDkfTwV1hZeQkkY5CjhKisQEDrd7GvXmZtxcAhkQp5ZH2JFir",
  "key40": "3iHjXQNgWJafKKKvUiMQqMTszW4yMEeLZa8zv73JGbtC589ZpG5pGXmzg7S5VwupGZE2p8v9VQpqEFtf1FCcoA7n",
  "key41": "3X4CNFEqc2hGBPaq6X9oFPomo9z3mYDtZmGp8jvL5niQzXXmBKW7KVuNfh7ahjWJzwcVMEfBDvN5FtwWy587AjU",
  "key42": "41439vhWmaFjEAFReEWuxS6W9sDNZK5ZJd5kZnRUpuuJsUUzvUbdyZr1r3FyJoEEVCtGVqzJ4xndnxVVFe3nZEuf"
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
