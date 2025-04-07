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
    "2q2ZsPhUBF4E7a578Ui7yEEMSJ9s58t5EXQkC6nDFx43YNv2vACSb2adA2YTfKKomXZVDrn8hdvjWUuJ6QKHo4FE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HJAXuAj8xiZjx2pf6DUDdVuz24Qeo1GrdpGUXgX4MCsAb2Ftch3DZhotMZ4AwDwHUhhqrJ3SZ5b5nycYTDgYpxM",
  "key1": "2a1AfKtViHVmoDpbBVE2ZLbAKG4w1J6oj1GxzRe6g32ocUHW68sLfxjoRU1dqZUrvmUKUNw28CTcEi78hJBHFYT5",
  "key2": "3cSLTZXqbsJUznet6WKG9obn5UQAQvXgHRJDyDhFtoRexJ8GK9nx2qCVZFW2gQPwp3m9SRhwcV13SHBpTKs5pcLp",
  "key3": "4KfEK9ecwYwiKp2WfqvhJponJg7gjV5jEKVAjkF5CzpiK3xepFADt2zTwE3jRz1829iWx59jx17DRCmb12PuWkqs",
  "key4": "2T7ZynRWoa1QuZdawvFtDhtd33ftSjqA1daLYRhHojt6jvAu6QmZohritoQ1qmprY35K9XVUBSsaGcJZiJPZahr",
  "key5": "3tmg78422c7ywugyDvwPzgFcUA4ZiM8eYFQLwA9P1zC9bAErUoY1NjfGwfZuoiq92MFqeWeQyUv82HLGe2anyw7L",
  "key6": "4BNYG4KfYzpiRym47ztsG2aNgTpDwaPpSmMtaaxhjtUHwiC6qe5Uai3cL455dzqi6SemeH7T7crZATaiXH7FoUGi",
  "key7": "4Jez3ioW2sB7ry5p8dcQXECkaxjyD2a3ZjoRG2CSNngDQbxG4oEkkwGT6mJpG8CP7fG3S1T5HdixQeM2VMWrSBqU",
  "key8": "4ECTn21KTTJLzjfxL3qTsJZe6pvPF6vv1LhQjk8obs1o5wtKtcMwN7P86uhWeHjH4EsJHWCLMbEAko91uVYQMGRb",
  "key9": "2JCW6eNeY3CnkdavxmwZ5WaBrUyAwjj1814C7Vt2epxGKRMLBi7vUEhnYF7XK6MYVtZHfrMtyBMpH715iDd1CAnc",
  "key10": "S9HW3gMVbWJUBprAq268kEG3EEeFMZMJkiGqW4hHb248J3z7qDwgsHGqB5NtEfjCJpeHmXzMiuB3QM2mztXKgW7",
  "key11": "2hVTyQThXtGCnWxmKo9cwtZt7NSqJ8BvhpUfdDYasv33fBxJGBcTubGUybEruX6TuZpBvzSpqEreidmfeNQ82NDT",
  "key12": "kthSEacumfqfNsugtmepq3uwem6Yfhxyrn2CSaBmi3WAeNcyXpdpbT56nUnfFvywWrKwAFLCuDomhSwaJMrHr12",
  "key13": "dKZoHgkquKznVYUAjouZyLha32L4YzaBVhwRhFKf1nHuKuB4pUZRGes8nsd8kaxqvuwnPetReidqyBvnV7xAKhe",
  "key14": "zx7ymeqetNLdEpSf7aenkV6gw2ZBFFxGtYyoEi8YNwHzoih4afB1RNqj2ZSHQn7nLukq7tBk6eF8eXTZJMsWaLn",
  "key15": "5YN3DafcsJ52PphXGS7qMpq1aRSWZvZBNPxWmFHVpZ6Esr54QUraa39Bokv6xeX7bHdkQz9iJvn33SAasL6HYu8V",
  "key16": "3viNAeVcGfT7iWVneeuD17yQ8qZr1FaZNTZ5c9pUXcq4D23NZ6ETEZ8dV22c2LHBdZAtMhqH2US26CqVKbtabptC",
  "key17": "5WPUBVikRw6xXCTQBRWJoBJD2uQotRM4ft8FTCFCykwu8iH3dsa1QzrmNau7fobZLdxj9SaV4s2K8hfKv3objn3B",
  "key18": "Ci7PExUEo3QKPBLeTbHKLgESny9D3hjafQLzCjG7vprQEmXuM52hkieFPwTonsq7pAE3PUt2GpYS7qfsXNpQQrn",
  "key19": "5dyFHhC1hiZ4mrpDFoTHeajb6oTXnZHg3qrFU9mXD9uuccdeE6puoWbqRdvxFzv8UcP9jEkHAroWb6uuLZdGJeLP",
  "key20": "4pmv4qFuTiJXtMLAv7CybzqzbopLsVpYbSEhSaVd5z9LQFmbQfnVmGZXRVdmUh1F5iX7cYJ7b7yFU9r7WHrCBUw1",
  "key21": "4BLSBoGbm72nFXuHuksbnQ2tPbjoXDZhYxEwBs7WS8fDy39rNWEQjUztNKbauBJyxn1anURPFE2LgUG3Dpcymw5i",
  "key22": "2yyxNTnza1Qv7pdkaXkJE6VaSx1qBgNMqmZe7d5MDCwPGvB6SpMpSexCLhMZURb9gzt8vdqLbvdiSj1GLFrvVuvv",
  "key23": "m6acuoopRNCP4ycXi1Qjq2mAZEojBVTwptqLaegGd6eB7o2XTkuiQkz32YDff4QwRo7anhTYUuh8eoCuZxpZryL",
  "key24": "3Z6EBFfMZNBjy1mEhzcg6vfdbB41kEj2nyd3cuAp98gwr6xdtGk8WnLp2ScW3NvZXVGM7Zd8gpegYwPwKa4v9C9r",
  "key25": "3Pgtb4Sp9crFqcNCd7oPTyaBCFjuqt4a64qedPQpXXJn5mnkhDqMaypG68KLCnYkYs6BkmCxKeJawV5a5f9yEMbJ",
  "key26": "5SJWco9ZGiM1D75qDh5vFm2CLqLsDXffB2DhU9QfwG7md3JRExznK13W7R1WQaGquj2UmUE2FWTDcWhgtoM5n5WP",
  "key27": "4qTAY7RzmVeNBbxiQtdVBmFP2MCAdXeCM1H6v5fZ4NG8d9d15APies56hSdPvUygmrRwyf423gtEqpYEFvNsVABH",
  "key28": "2RBZBZybxBvwgjaCn7pedhxd4Rpdzqe7e2nnARsLyuKRBz4pRc83DWTxdft3SMi1P1pzTTtcP93AARqhXbU9o9ZN",
  "key29": "T2tJkqa99cTq5o1jYjd41KtrW4NLZhKoQGq1fiKDgu3WbZLLwAvDVzH4PJdr81R5edRR2D6SK4hh5PmmL3ZNec5",
  "key30": "5pQPxTuotyWyU7cK6tuxpTwuNyVtZ5nc664mP27n8mU3AoQzzvf8YkX1p1JMUJvpCb6K6VGFtCLPvAkQJWBW5fFa",
  "key31": "4GMniP8govxEPH9pYHkv9ABjDo3Yp7CcPf35ScjLx9WTbcuZ2SzmJnxarSnLixcWdDQHUNdpiF1o9tNDTxhTxfk4",
  "key32": "U38ugoWEPQeUvVZsnfCayCXdUEzNxhNbR7ofj4bx8bdaJNY6kygxaQn4TibCWQjRJiMJQSCCAo3xELeYLBF37wv",
  "key33": "5AnMvia3fX8eXBJ77iu7o4JRtRQstpYcto2FMuJ4aFgcmcEDjswaZtMY7Y4hX7JZcREuHsxbi2DGUuQgGt455m8p",
  "key34": "5o1mjzCwcnoDzjVhxez5YKPk2g3ooM3tJt9NeoatfrYPFkCwCPHmAqPHLXgAVTr7XcjjgcV28ptAaA9SrdNay9mk"
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
