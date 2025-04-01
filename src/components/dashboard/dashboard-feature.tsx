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
    "2zqvj1dRsYTc1e7M5P93KFWJXd6NeRD37D2NQpUgzL1nit9GzJJLFjhRu71kjPw2BM3GFRSka5dzYAhH4Ci4dwu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewFiiWNaLmedDVvwF6JR6EvGTfqwXUgLYpAfqBkpFjPT19HUobTTUFFwXFq5pPTpMWmWe7HodA4W4ExJbrjcwsg",
  "key1": "3xYGQ5wELbp9S81UifPwC8hi8ShbdrsPEMeGRA848PH4bMEtremPeQ7woXJeeuuqjw72SrD946u2qWjNCnJDMUZ9",
  "key2": "2iC4Mt4rA6zBMmAx6yqkTX2x2sZg7yUqTfChtjbDPFg9kJqnphKPWuEgH4QbHfRU1EDRJSLQn96nnv1wuAwCFe3z",
  "key3": "4qMfCbKE6ikgKa2y1dYBDynW8y7XUuWCXGqfyXZACzv3DEwdUgKmWMjRwdFzy2v73trfU2956sRKuS1GaD36UQZY",
  "key4": "4DyVmFm9eGonZF8JAueRrhqPUyK5JRQ2DH7PcxMsgyc7n8Djdye7YJfY7BwTmS8Z8tS1i8jxVtUYmjv6a9mmRDCe",
  "key5": "4GqP8aUyvvjMrkue9eM6HYv5gZ9sM4ekxtTKusC17pwmvMkMniJq1fsFezRebm4DmKJhaMB7gztAw22CqcvEjdSw",
  "key6": "5BfMLBUoJQwhkeaJRCwkdiTB4wwpm6S84qAgEnKmh31TYKoc4Axb42Cg4o5dxXgxxuBn2ebmZc6o4UnNvyKVcmx5",
  "key7": "VZHnQo6k3pRYx88rpcJxcFgWYcfA3irt4FhLTa4Q51kZx1yH5TUyYtN8drV7A69WU8K2jm1hBULSkyCGN2xSMWF",
  "key8": "5pf3ykMwbhbvccTte2GN57JH9JbFK2JL942nA7t71GqrnG6RrMMN4NT3EXb8Bzm2DgdQL9uUgWsAaGviU86DG5F8",
  "key9": "5o843BdtBBXVxVMBN28xkzVBDmLR6zWWJ3qxrQxafbupMqmo8SSQJM5emRprz74WAE3W2R3JU1qFKYnw637LeLMR",
  "key10": "2L6swB8EBsNybSvZTm7CZwLozLAPHYiuebvozxewpcTadoB1u4UY1KsEN5fw23uDebn6Q5ej8adLagVsVJ1unQos",
  "key11": "48xtYA7pbvLNi248nA7FahC9vgyNYaM8JuoeRwQKbnL2XXvrgQneT1UYpRRnZ4PaznYmnYoeJc2dEQQJ6sAbv6gs",
  "key12": "3FxQvKXoZwbBf1xBeCxCuFNkZzMVWgMXzaqfuTZ272YW46w23NA2ZQKhrAXfi3ynHH3Mto3A5tybb8SVRVm9g6e1",
  "key13": "612JyUXeErLJk2tqe8Cmo1zc6foXK9nxabkXPzqim2YWMYWm349rdcQ4TWzRrrLLumJBEG2Pe4LMUcQh8EKHM7rM",
  "key14": "4QvzVdqr9MxLe2TBtVEUJEJm5pPGXM1Q4Bq42vnSQdr41ihDMJFGSZT1XqJPB1KmaVpiEYqHzcKU6UZSWqKDFw9G",
  "key15": "H1Ax8qTu97cmmEG5DNxKZTPmvg7PTgV8VAG6eswHDyAqvALnL2GpLoFiTKfDNZxQB37aKREjXDxBtKa4yMa4Wmn",
  "key16": "TfKhbwdxemnao6DJbaWBk1DBD6Zao8Ub9KEDkptrrJPkDpYxoLMCR1MU8zXrHGqzmQYW8irL55tc6HxzYFhRnQX",
  "key17": "64qA25GePtMfTc7numDWKtTjvLGQ1LGCQjictSNL3nHGz2AQ6J4qzBW3V62wGPE5aHzEoEXspw4qD8bj2SF6JkhM",
  "key18": "5ujVw5tnWaBn5B5vLBdfxvmibG3orrVBMiNLc2jCQ7hKWa3UbC9jHoanDLMkC8yxeTkMk7HewTGACj7532Ng9iGa",
  "key19": "3m3Tz7wR9uRTGwJ5TVB4vDTmEc7E54F653JVqc89UpGALA5FpFSHJMFK5EZjGHhxE7HZmKnQ374Bjxt7ftPhroEH",
  "key20": "5gG78RczswwSwGqTtPAv8ERDsHXyGFfW8u6GbM2F9DuHck7DER3dKVdkpDv45ae6Ct6imHXWQ2dWP6pM4tX7FUTo",
  "key21": "57qwE6KbagAbUGbAm4AVnDSn87PjtdwQKTFt1wohYJvTa1YWuuqpWaHrPwvngJnW2WJeoBBCvtvRp22ZfoNW9kP1",
  "key22": "5uvX985pJDZrMGdrqaiqtFjkVFxm5AMKFhDAVFRyfmmkacFPV7Eqwb3YEx9rmLhwNz49ZPa3MrngoHe2rAZEQpu9",
  "key23": "4EPwW7Uf5VokFutjPhGjLJQ2PAN4ivapg5sCjJqGn5twZYLWXcTTbvmjHA4nFK4w7gGCuNFePB8ZuyKFEiurEXTu",
  "key24": "4fFf6uuPbY8BRM2aPxurBU9ta89t3qqFWshr8aw1iMVeftp4qBiBHHDJsBRcqxFww73sxn8JpXk5XXM7eVsrCwzZ",
  "key25": "5vgcj9pWG77KFup5fB7gf6BnYjD1WxXUH9sjY7aAVAj34STtz83pV1D2RUAsLwcQ8FrjmgvddYhsd9bsML7euVoe",
  "key26": "4fEmSVL3CippdMzmzuY9oXiH7ghC8CzkJAwjFRWpaVexsH9SpBnudNGmbhq7L5b8qj457dpjahNXbF6paJVxaYG1",
  "key27": "5vJk2bxZ88PAeRnG9t8DpKB64sYKZFW1UMybVdArvPuJcQJ4adCDSeKD9RpooH7nDSLPdWpZ5wLFwANWAZqBhBfw",
  "key28": "422UvQG2Sb1KZc42D6xJoVprE27wHkqYKC7vMmH4TehNqTo2o34gttaGRQc39f1aJFhd94gDpXWTyi1QrQjGmd6L",
  "key29": "4ZKHczPa5XfQqy61V4UKxjArJeEZYsXYC6FiRuji319NXjDrzP9oq4qwC6EhvYApV2LpjidzsbAowPYyu7raRTLE",
  "key30": "2yqED3dTCAYMDtGymTQfMWZd4XfdSAsnK17nP3P4mMYaP6TtnodyrvBt5Wsg4VVt7giTq7au4vr2UfrvHXvhiQNY",
  "key31": "2FYFpTwfWr8KdoFFJ6L9R2tgpCFQCUC2g4X5bctxBWBoQY5Da31ob5BFsEJ7hhdk9UtRBBbXzaajSR76Xh5ScMBs",
  "key32": "TRiYx6vbPgfkCekDoQzC1MfdKtpCm3xCqFRmwg8QCX3kYTWyJ3NnwfYpBjx7YNiA5av6mm1da7yAS4pYdSqmYEg",
  "key33": "3ME7kmU555NpCK7yHsPN7TybNM4jWBSPwxVNTfhaMENSZn6UUAAEXbZGcnPKq3uMQG5K8qkrpvedgoUvusTYFRi7",
  "key34": "4aVCbmmVrZencRi1HM2VNky9yCtcviwpaQcDKiyKrEXRs3jrn9J22GU7G471krrJm8cK8ysYJsup7AQd2nAZDpZH",
  "key35": "2EawzGMci3VA8D9RWLTyM8h5fdgoKBDfXFdToxPFM3RYShgofYawK3szggaxerw5UYytnHh1HCNaQbjK4uH3jShp",
  "key36": "4Lq5Bn139U1pzkWNNTwkvMTsPNgm6JSGn7gE19TUwJRPhNFpyp1KZkYrQvM4v8vWHWKJqKY8YtUXfbChe8qBu5Lo",
  "key37": "4zAKACrKfKgSPwgiCdiwkn6oQ6fvcttqGzXirFi8qZQgcBhHY7mrsHv1U9a1z4E7Rf4KgQkjnX92jw7A2D63jTrN",
  "key38": "FZSjCwu48JzDqcYrbZT83w4vS2rzexG5tJzM2Tubhc1w5GimYFUJjDaGDwyRoGaj2ECcPGsjde8cQHbsDN6se26",
  "key39": "5n9cks6hpnuioQeXqLc3xKBHvEvnxnecFUW5djztxXWZBoiWZsdojE3bEkiZgF12LZ4dwzyT2vYWnsjGNwzwWniD"
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
