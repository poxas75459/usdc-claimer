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
    "P6SPEi1ZmHC8ufc6ufSQYF8mTHxpYk9BqfcWRZR688TC4StFa6ZfVNGUwDkKqrDMWzuUat8LtHPebPnWyDeTKjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CQxhDYBbnmD5ZUCsSeaz3gfwU9t9XnEuE4ZrdHve14mstF8tgwP3AbjCxKKEHus2dX9BYwRMxwd5frfGuRkEvfC",
  "key1": "2BS8j1HVEoR5CRzrDaj9G3KHizjf4Lr7iRawnxFocpreqTPWhJcHcNQyfmv55piWQE8jMPniXWhkpbumNJHp5edM",
  "key2": "3sbUfaiNEcVFVFhgC661NDrMoP9EeBmkhhCaQn37cbneGxkS6KH9h77UMpqo5YB43Nifexn5ju3MyACnvrEr2Htt",
  "key3": "2F3db4qPpdekQctYrxY4DALoYQzwwxGA3qG2MnGJ7QTNDAiao7FFXXpGD13SgZxhfUT6qML749ozuJwHpHRhzqN3",
  "key4": "TGfiB5nav7g22QHGjFQLkWU7K4WFYEFq6rkGHDWN6jVhJfFUnCichMcVBcX9H3RQqKFyqRqb3YZmUv5eFVNNr6S",
  "key5": "4PRmJrH1uq3pVQobKoup4WVeFSQWQ17gt9uLbxMQm8yCkDVwNsq9BynwvAcFXaQ3FDSmGyR56VYW2WXSYeoajvfv",
  "key6": "FTQGLGzAtusnxvV9eD59rZNJKLFb5dbqMMd26EaATEpCxBfaAWfErgVHv63w5PzjpvbdztdCw7qdkXusvkD7tDW",
  "key7": "4QzFdj3Hj313wSea8FjTVtKEpCH1ChQkuiNeAhi4ni7XKsyuX2ikkH399RCEir2nV6guwLDwcUyJNfzeHEGmWG37",
  "key8": "54LooZ2AEEjDpBAhWSpCQTi3K6o5iJWogFN38f2BV2mML5L3BHvazXG5LdYy2yKDypaWM7N2VL5dWSzMvF1Fh75Z",
  "key9": "222XMg2QkuwcrR4jQui3hp9Lj8wStDSY6STDqnmNsm3QWPLfDyi66Qwtwsc6whHFdfNPQGQ8fnitEjgbNR72eFCk",
  "key10": "3Ed5JaQ7YTphg6w9wkkCtEgfQPmSPFyNYLovJHY4Ep3JiDFQ7eJTU6yCzZNrVvaQYqyXLh6LUk55LGtnNyBHkRQn",
  "key11": "5R2eiZwUg51QB7Yqud4vLrg4tmfYErbKtVqPQRcj24LVcEsi4K6PptVSLsJyijeyQMucgwDJhUvm55wPdgFg6LQY",
  "key12": "5x8rpGN1zEcJYGMhBQKuKzxfZPHiRZVto1fJ21Ussuxr5WhQ6ia5BiGB1qYVuRWySgqGJWgzh6YVf4rBrjb8sAMW",
  "key13": "3qUxC4bSJTpwwcmarCPNCk6X8UzudfyQJugS5B7wDKYQhmbyvriYD61cqBfQ7BkQQBUBV19qwccQsgEebAzeMgFz",
  "key14": "4PJ2uwMBhza5EdnhAmPWR913QLj89KEdFFJeXJaaKXSLjUaPVoV8VEPbZ7yrkgFbP1dadBKMv9a5xPLM8wX2QNGx",
  "key15": "369tqgaf3wJ1w2wKFmF6eYgTRy9eU6dgToLHG4rEfycNxuy6x9xdhBuM6VtkZd8MZavT7bWLR1FVKsvLwrNAsM5p",
  "key16": "33bBoeHo4gtCVbXsJRzWYNscfA69VFPnZMNquYMGKAnwapVoAWCz6m137XrwEtiLc98zUSBUGYd34uUotc5kZboJ",
  "key17": "4uuXiwHJr1D5pEUPz9RvS8dQSXterEZ67HT8KUjwsUn6TUzdED32PQDXzW2GFqxUpHsfiGrS3doyjn3qgTCs1pH6",
  "key18": "CzeAvGbPm1CcFu73VKHQxVHEziqRjH2pEF4Reyy1LAKjxhvcHFT7jQakRrCu9ocnAboy9BcnoZfTYFpyZr6HYz5",
  "key19": "4cXKQdtEKebVm6Wg19fxgFjuAsYp2q4BYhYNYTxqCcRNzUsjWXWAbtaQLWAfTKmNi7kqnfhqk2wcg6qBujjLCtVa",
  "key20": "59HgesDpx5N2ncAm6J8pTiAhUwUpBEf82dp6Rd9mCoaGE4r2gj9K7b2vMe93XuKbbSMJBLZaLLEFfPvhn9tPRUzV",
  "key21": "5tqz7SjHbYdaJZFsJPCC6ZgYEifc4FFrmYyVnjrpiuohJJVpf7Kur68jKWZoJjbs9bUA4yGL3VwG6EovvsrWk6L5",
  "key22": "48tNXxmT3vaPuLPy8HiQ6SsrTKo2aDdNdumCFczdT3KpemNcFhf4zh9tFKSQPv8NkBEqq83hiWbTkssJkJ87vMnp",
  "key23": "5GdKj7qRxjABkrnVYnkwKuSXyjqhhzXV6GunBxw6pBDnEeVHu5eCpeZDagG9h6XgDBpKuyaaoG92ufVnkwtbs8WY",
  "key24": "3iN9P3TK7piEiRfdZv7Wiaqjh2EaMYP4j8WHmauDDL36sPEsA5i6kKyD9KNiQvPd1CgyFSw9CGGJpxxw1wSoi4TQ",
  "key25": "4GMmf2ww1WStiHwVPWqSV23icynoNfXrtSfWNYZsA6T8MXwWGAeCMTUeTarTK1G4fJz8iXFcVuCNudR5HL8Cz8Cc",
  "key26": "61nvqRmZDEzZbCTrywdKQi5bEQyJ5Uk63NgVNZj5MpHrKtZc4ZAv8eYtNvFnKprSdkXKsnwRQ5io53Lqsktg8ARh",
  "key27": "4szTNw7ikh9zmDrEZQbk3a941Wq9wy9RDEJAXgDbJ3AuXZgt9S4BFj21bSATFK5foUhiZHiFnKUfNXbCV37ssD83",
  "key28": "5zgepXDTCqymwBjVUQFHVK342HM364QvSZUsZV1sPBoSq7eqA1Rgqn2uFuTJ5c6GDEoD7ofpbJ9HZEbXaCFkpFty",
  "key29": "3ERUMvPDiUpF3wpfQKuwwhNpVVmtoH9zUV5tPwHXnApXESSo5wRtUGqsRprZF6KNCvjXaCaXne4hRSRHt2X6EoRA",
  "key30": "3xwPeZ9kdvEbr4R5KdGZhWi7jcKZZKJyY2wPd4DB3ELretqR8cwHT5VoGokeem2AprjWHWYsNNNar3XUe1bzC1tT",
  "key31": "oCyNgxsF92EZHesW5E7jmRYudpMEfWyFbnxFXJRhYaJqEdhWtHMxbhdB2RzUzZbgEF8r38akUq35zZs6F8whJ78",
  "key32": "2zAhpmb9Svg2RprsWUiGbUDF77msTwu4E9dNRDV5umwkVsrTWvE6tf45WNkqUCk2P24Ae7UFuf74jtsG6gh7n4E1",
  "key33": "333wdiLNz1svx3vf14XwKHKtK6eoetUBhmmFwNh2oi28oyaTLYT3PxzeUa7HB8HYpv7fAbT5qrxBUH6Zo1MCX387",
  "key34": "2RCb6H4bZbUVLgwQRNKvdNjxxF3bxjmcNmdjuahTVCi2HgEAXp3MqWm3DayYcYu9bPTTmEBTNMVmWocAKU9hESu2"
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
