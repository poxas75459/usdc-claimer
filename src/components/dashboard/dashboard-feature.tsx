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
    "4F8QdVYtA25RriLvaD2LKdLoSg8EV19j6xzqoGA9SaDSL8Co1NhT3sRJbCVmxCVckALqf2Puf6RTmQRJazHQjoAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jw54ZKA8GdXJMXZo2dTe8SSzbEzcWeavZxYbWofoMRYZMo5ghmM7oj1kJuhKe4wjGmns57nYBuoUxS86Q7DUfdi",
  "key1": "5eYVMkRqi9zSat1efcgp3AnmtrC1Xi3fDxbBojPA31ZSxrNV4BBQ5Y4UrXSBwMsGf7qXiTgQT7Q9bS7Ly9tYFA7",
  "key2": "MKdWHS2AVbQSNiFbMQVWHhyBSjSBTChR1KUpDDf2sBFuy7y7uCEUWuG82sy1D9LZwwJAhnadKXXpQni5qw3xPDf",
  "key3": "2Ch4EwKCWW4CKjrW3eCURfCtK5E68QpJfk1hzPWy3T6NYw2LssrPLfLGyJdg8cRtsNhPTfUQc8kz5NPLywjS2Wcb",
  "key4": "3mEtCAbKANhEjHuEdxWsCQsn2MVLD9cDQMv28aABtMSRdyUu5a6UAqkzjTvzht9XLCmGwZc4Sqakemne21q4d64D",
  "key5": "3J2RHhnGVRUtRfMcsT5JwKYMQpUhENKiMFnwrSWRYXYRRNf7BhMEUj3Rx6RPmYrS21hhvB8GfJYwCtPQBr9zo8NL",
  "key6": "2DZGTLsrgbnFN6B31boxuKBdk24kS8mohmFKJVcGpRNo33i5Dz87tX5wYKm5v5xwiZ74HMeiG8YAi5EPDenP6L9D",
  "key7": "2yKruPpAzLFZekPVspHcjwfVvqhB6Xmk5J8fW2fFf2ZU4ivMMjUBCtxrxZzGv7VU6wfRNsRitnkWRHzqhMKqPLZ9",
  "key8": "NtdkCLNnZ5hZByhApDH19yCH3z9vKbzWNrqMiKe4yHP15wc6fmxXGGF1cKhbP1J5vucPYdynHapVjPZ27omAzZe",
  "key9": "4YVgdtjeVYpPVu9q7ZGmGHV4UCmHkvyHcQfPar6eQzDbGHdb5AygyadTsRqf8KUrim94ghQCpTrGe2aZREtxjP3y",
  "key10": "5metRsD5PB6zPvf7wg27kjEVMszQ6hNvmTRGnxgBf91L2iaCHhmxHVzVxij3ZNUqNd9vTStTr4muK8YAAZ8cVqYr",
  "key11": "2WrzwpabwkrckA9k5EdTLW54AvWN8Z5AUxDD92kNqNx4AbdFnW1CoNqs77NfcExs2EAHD8ohZ3i6oKAF3AkjXq6t",
  "key12": "45sGWmgzkABfiRCr3jL9yLjs2Amsp6sNePMfjHPvBUo5MymPEmCqzwHcTHCKsUWWj5BbL7WTh2CsUpAJYXtSPGSL",
  "key13": "PuMfMf7uRhHcNzruzYV2mp6ET7Fca4kpZwHQHiVhoUes8D2JwrL2VUUGYVoBQPczQiNXuVFp4VxUDvoTMYU7mZ7",
  "key14": "4U4SQctWzQuiPu8KosRYM8owz8xLixf5RW9bYWsHyHeZSxb1SP5JQ8tE1LPnYvvvMxs6vdPfwhcxFirihwq85mrg",
  "key15": "3k12m9xhX6s2MEramN8Wi21AkskrZSUVeaF47CyktrGY4LAm4uEKtPUzXEKWCCJwcuKDSFCg9jY9KAjFp7Viiq3g",
  "key16": "5stSbJzcacQyFMobrmisY1nYABexEm8FxxRTR9KrnHXAfDbbxCqYsZSLf5uQznUvCsFDu4iuf25EWgM7Hqp7RCVg",
  "key17": "4ujgXa5NHGW3DqeXrutMGWKeJqtbR5UdNNDnFsyQMhCZG9MyJamLYfZogjUPcbBmvoUjUE4JTsxUx7ZKp3QhRWwx",
  "key18": "2QMLR6z9o4Wwu4Dpvs52a3TGwNaNqrBeDFRg1EXJDk9pSphYBAFkm9JUsRWMnwefWuHSvpgd3m4Ko1XAgzttR1JM",
  "key19": "5MbCZm3whNyN1HUynuMVD9j9L9DSvZkS2wnA7VzodgYLWhMjoCjQaaWZ3yYrKXfCrxHxbmXGMtAYwgGqYSLRZ924",
  "key20": "rWnUDqkfSBQLeNx4CwAmSDWrYpiVBv9ABXU5fyJzL1rerEarbWdFiigSiSG8cm3t9oP6qB1QLXFW9ycECh3CP14",
  "key21": "3fzYQLk3vGq2BwLhvMH9th4N41AQkEk5XTEhv2uZ6NDmsSBWCD77uN4LVMZ2hpxb3d2AiR4dqXpTnaaTaGPy2sFg",
  "key22": "46m2NjurmafmTo7DR8sfxF7nH9ezEXTK7Gxe4Mr6Prob33Z2JSjD9hPTFyyoP8CwK31RQheos5HJDWHJaYL6jZix",
  "key23": "2U16EgNEgKbiJUwKAepxwiEZQ5diTT4JPAW4jETmUDxS4DCwXpjLC6YxTpkesTZhhrP7CScMzgLC7GPsPKNK6UHs",
  "key24": "5mA1jGvaufoKWSeHXzDNJSu4gDt57LQKR3WY7ayjh4KA9gaHvbhELDwgG85KvYPCFeeZ6UbGifE7GRJnfzW3xf6F",
  "key25": "2yTXXVjZvh3hw7TXB7p8TmWPQheYpshDqZLyw2guetBpBTzPAp7e1UQTertvTonC6by5auz7vHfmVUJW14UDKTPV",
  "key26": "3cGmPDaiYcNAT45XvSqbugDouM66m3jr26xEFtUDKZnSMbAm9XxvTTq5gn6A7oaWTWXWPpJR1zTJPmmtUdAiWw1v"
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
