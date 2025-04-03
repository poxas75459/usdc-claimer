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
    "9UFjPf7V9Z85fPWPDiJGRpYuoWXX9aXgYA2Tn3yK2veVS1o6azBvW8rDsxudTTBNAJX9J9UrN2CCgKjFSP2bfZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yTLq9UNeNHpjUqLmwtg6qgw8rH7Kpc1yJBZFumXomMj6ggVzX97fhZRxn96UFZZiVDid1T1DPwhDJzrZ9L7NY7n",
  "key1": "4iukSJJSX6WakZhG79z2Ns9rpgzQeyWTwX4aG3HmBjuikxS3P4rkvSaLWU8wZvEgKjqxJkVqneVEMCAbqvihaGjb",
  "key2": "4LbYNXfA4zUKkWvGMvdNpTzSb2dFb2juUW1s1r1xZxAtzJo5XRj9Msm3VryDNLAWUrTaphGzeJpjbMrzv329rpmg",
  "key3": "4Jzn98Ws8Tb8uAeuwr1HCXREEBRXW42H6D2NvXhAqUR8P1BMLz72Azg4kotkCw1kt1s9X2NeNK9iw9nfeJvPgxTh",
  "key4": "5GzTzQmebGwPPb5K1jyKStgf8LHfzLxTdJg7YURVB68FqUTTndzjyY64mXwy8TFxHWVy7nFxteGJJ1yCPPs3r3hF",
  "key5": "2D1CXfSEdaeRXtis5pwjrDCQiRty7u81aEJe9tqwvjB1CuUAq1bD4c1Uf2RKuE68JgeUu3QmMLgkFK8sD2sneMiR",
  "key6": "i3HrmjYx2bGgaSUn4oHndsztWo2ufnvJUHE3NPZJhmSRJqeo6KnUJgHBjHc6SvkLQuonzeka3BS2PFbs3S5ngmT",
  "key7": "1ZvUbwrNMpreJNu6afWjSGhnAzdk7FXzkFmpFoXCuDhWw6zZFVXTDNQDthbc4ZQGcJqgwLjacgU4ugnwoyXry5b",
  "key8": "5McbKfsAmQtqsYKmaYaeLswgP5z1XTCsgtAJrwVAwz8hbw1kvmWPiqa7ZaQKF1oh5aQWhdrYsWzU31aC5MtL4QBx",
  "key9": "3aSH7Q5M8JTt67UxGbwi3xTnkakxAfwo7EoXe7k6ZuL6LKzQvAra66TcLgsuhy9YWThDCWha5wyeeb69JZsGWMyr",
  "key10": "5o4SN5kmnN8PcdFhYDH2bNeaCHqVL8tvR7kuYFAbafUuvd6kGw351pQkUMqUyPgAhKEFMEpumM2RNsFeVyww7QqP",
  "key11": "5BK7zFViATDXfK2c6CddF8FNtGsXHcvXryvwVQ4HytwwR733Je4axWULnov1vqe9s4i1J4mQnd2BfA1gmQUMRogU",
  "key12": "5mazPybJxDWzJc8uRGh15s71h3UJsmvLzYX9pKnTjcxFGnQBfsr4izg4W94c1hHhPvRqw6cwmq5AazikAxSFzYLu",
  "key13": "5MmnJ6Y5gT9Zb1YnrGgoXkBj7MMGxBfPVcd79YVBSiGeDKPxRkB5szM853mPYnq17a2YBfrgzunpVne3VGxbzHpu",
  "key14": "21ftPRQdzF73bwAFQC7Lpxek5x6fDnYEEcf4Bd1onv8aKGkwTjptPXTJiKBVDzGKLLahzeAfgyZJMFryz9EmQfpS",
  "key15": "3u4a2r9zKP4jGRYYjLks4p1NqQkECpotmWGEdAiywiQhvUiVpWh5KnFXcGCnMqXERUbZC5sk5rX2TGrW9nvZfmV6",
  "key16": "3NEqRvTrQqhhUDx2rUGoP5hYXkr7Zd5txMBrok64Fi4huqMGf36JGNaFMpFRBhGLtMW3GahyaPNK5EgdPSdBv71j",
  "key17": "5BXRvVc84uXvUFJPie2u91ySPziUGBxySHis9WqxNcEDu4TjeSS8vMyUk9KYKCgzmVuFX39Ri1KDSTypZfbEdp9V",
  "key18": "EYBUfH5Dzm31uzQ2EsdeC6rnmZoFZ2TLnkJ2i2a3y9Edc4u8dYFXpUASbR5jy5cwp8qsnFfPRkTJTQBQovWUJC7",
  "key19": "5cqhYfmCB1fGvwCJXSx4ob8MavDErdKZAHf4QcyPp8BvKV5VumyE57jcSUMzJYCErMxTGY3qbh8scMZ4WjoVZq7a",
  "key20": "v3HPN1EHr9ksxoPZnmjxbfA7SqLFWwZwthWpKNUMqpkant1Zc6NugVjo3hULP6vQQRWphrYBmqYo7kGCK2zgLkz",
  "key21": "2Va38WKtYGpWjcHbp9eShMGpT8kTY9NyGLT8XtHvwCQRpJRt4hVjReoXpG8K7Ghozeh11YjNSnHXiM8wk8AY5NcG",
  "key22": "5PGQKaMj633jCsWAReN38nq1DURPz3aafFneu8Ff38EXEsPEH4rkagdqd6xroPcp9RFRiKN1Cwg7SbG2E6w7pBb6",
  "key23": "41LugESmFGiK1PBpQcWrvgswN51ZwrAkzUeRgfVw2e1qCMefTawFb97gB45UPiery48SYQeLZrYVhay4dNDo2ThP",
  "key24": "2BUrveCbLZVh1wi5pjMEZ3Uo8g6yA6D6Kqr7xXKqcgqnodLZ7goBupMjgBaNJpXmrLPDBJHtV8oR5s5wVAGwa54t",
  "key25": "5cQAgSmwRvibR7ec6yHvk4ArZuXJSXp98oZbGD5p5ruQ5HkBC5EfEgE11AsPBiTJ9C12rEFLSgGzvkJNuPTry4hy",
  "key26": "5UBR5Bz7gKpYLh4LYjUrGm1cuc3HK2Bh6pB3NeYHXUgqkqAViqV7QsyvTwthSAg7QBBCHn8oEKAkFoNxhUHi6UPk",
  "key27": "5m3YNShuDe8LgRfznt4BrQcgZmypNRUTSzCzv1QFQeqPR6KwuHurPQ96zEsjznjX21EHdapSLb2HXQLnutg8g23s",
  "key28": "29YxqzCkFyS1LPcUoFZNNhTznX3MZoM9AxF9ghDZyXXP2q9kuaRLMNysku7mHBuzqzQXMjshVcWq3oACUEF64KJz",
  "key29": "3eSJ4RvwnXo1aSTt4cgkcWQ4UCvZ7FFPiAcgYdieiVNu5JFcfUfwqHFRkPGmwE9tfKpC2pJzqdcD79Bw1ga6sgVN",
  "key30": "2KY5Ms4TXykJFYSNjKtApGzpHGQjkpKJa1bN5XAq7XKddN6JrZ9txaVogN1RwcxZPoFP1E5NcNwNGHAoWTZXtxLk",
  "key31": "3h7RfvnB6DWsw4R9zwjhV8TkSxtvHHzKMFuRaudKbRchEwF93wxo5EmErw1jHMkvek9aVwW3U7MTDUiKntqRzoTF",
  "key32": "5ic27ekksfXQ1EXyYRoebqabh2G1ZYdFfeFZ6aGwMQMxGS3tbgZRMLbNHZHQewcoczrPCsEKnwKJtt6ZQ1Eje1AS",
  "key33": "21S9VKXF2S9fj3LTGTDp52v9WgojSgJ8mzkkxnFu5ELUroHkKvo7Yr7JVQB9KzCMVpV1fEGhzZWh1vZbxex6koXF",
  "key34": "5LfkXMk8qvyASGvVgjubx7dieWTxdbhbo68cbNgrij66UYoSc19aLSUpg7fdaZdbyBtL5ASdzs5GZUK8PDAwXWXz",
  "key35": "NZZxBQbyncoPQfKGJzc87YVPRCFycwjraHG7d33eM5Lmttrbj3wD2mKfczKodscMZoW3ZoARD1PVPYxGXti69Tg",
  "key36": "4bcwdkUSu3nHKYLyyhUDkqpeBoy7E5cYXvHsXEkMDjR7y5TDNy6zs6SnT42MfnteHC6izRQx4txtxbSYGjR1PsW5",
  "key37": "4i39UfGc4otGg7n6CocBkUYkYHUiQaJkoqfZMC2Dp14ZZ5Eem6BZUMaUc11mtSPPtQWn62ftEdhc7NU7DveQwhrQ",
  "key38": "3qtSBcXdRDP9e4j8Mr5rtiz89feagRyfs2FZc9Wg4jjuoiCmbDUuZcPMxjPSUUnatKG3ehSUHBnBHfi2dLZ8djNy",
  "key39": "26thgW7dxw8HoWUBYDFVUNaE2pKG4gx5ky4A2mJXo5ahMoQHHWpv7LnMBbtNmfdrDtFL2djyDuWMAYwVbxttTFMe",
  "key40": "5KXJfL3fQu8euibCYHzvVEfKiEfos6nMykkouTP4huhojVZEZBBX3VANHhuGha1VdwKZb8X9CZBpExjAtoMG1893",
  "key41": "Qm8D52HJYmUrQjHeFjJMYDasXHtTJE5dUeNSc6JnSFzyUEPeEQpo2QRtz5wJPk4yggj7GzmNCBv6PYt3XUKL4Z1",
  "key42": "2WwU6xvNM9WCgk4WRhuo9uDzMJzhC5joJoCuFzu6AZzW42bhfanXoLKNVYAwXmjnWGmQBT6UCnXkRUcWnBS38Rxp"
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
