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
    "3dfSMEx4bgY4sf9Ae5yHRNx8QbYGdN7ZotSp6y7R1gzVwRBYmtBdgwDsFhjYDUzMN7MYdVK6VsVNLTL7nHQzQqRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjBBjwB2tWezBEwjgzMLAo2uUbLrhfyadjg9EF7j46suN41XkDxVNbLHKS1HmbWs8BimGCyi24e2XK1T9xmi444",
  "key1": "4WrsAmdm5hNrsXq8GExk2VEKPr27T2bX5dJGrkE6xqVr55EAix8upiom63UUiYxbzmpAsj2AC2eQZDJgLYDzdj81",
  "key2": "32PR2gPkNQVBVpLn7ghwzCyuk274Zabq7wcffQhVowD277YBJ9nSuUMPtKAxKyW2F61y47wE4RdhJETDHApP4HUE",
  "key3": "3tRUeRqQcLcsPfpyYNuRKuB5pHCy8JcdAcoQgB2evs4uKzURPYGAr8t2whT4TdxnmVKCAWWmx5P9FAc8rk6F48Ry",
  "key4": "36i5HGQixzaKeVA7VoCtFzvu9x2r5vBvPm3j8cb3v8N1BMYyRrL7JwtmzCoByWgPBYdr79vHLxLPiYKNYzoT3mNG",
  "key5": "2AaNPTkfTZGRcLAoGp1W6R8nAqfzNXVebWuM9yg46FU1Rhci8pB578GL7Y31R8Fqz2GRNCMc4edWLANM6f2Q57HC",
  "key6": "3YFsLXA24EM1Cx2amehuTkK6MZ2rk16VwpjZjkDtiFXZBmde1z6cuJ9WGMaNDKA4RFntE6MaZTzNPDjRRkfqVquZ",
  "key7": "5hzbwCjDXiSiVvJFsEEPsBQjs3MoCj9Uc4jn56ofTcLGbL2n5F9nU4Wk2b3maqTS8nW8LHk3y65CkJw32Sv1cok4",
  "key8": "4hwcfFGtYaRNrsjBFMTWmASRRJhmFFqrN1JmYDakgYiNAJRX6Ri5tgSj3wmZ8TmqvrS1GtEdhoHF73CZv9T4dZtU",
  "key9": "2UcjDJRhSEV6eeFmVaRr4NN8MKf8naLSU1uHn628EzbHXcQWApWwKwnkhQMYCZSi9MXyW4zD2TfxrjgsSyreyEox",
  "key10": "3tCNPMoe3LSN1CNshirGfxKccV64nJMXeS2YQAm5WbdAaTjGJpMSgVE5iqWSPZyotFcZreNA27KfUFfciZFCwiDv",
  "key11": "65qU28qaAA84CwJeunXDDvQ16hpEZ3MjUMSz5amoXNZfK6TrYMRcDeSVAD4vSn1CtPn7JSNMENjzWzP92enAsvBx",
  "key12": "2gJUDeL82MhQ65V7WKW9qmzgqZeiGYTSGomiFToDjCAsHLUAfHjgWdmiA3atHLES5VigBBJu2BJGAMUDCRTz1cQ5",
  "key13": "24koei9fSDTZzGigDZPeC8XPgRkWb2x96BXDqp41fvf4gie4gPX7SL5wgqAB2bVQTPEHzcDeUTN2sGSRcX1aKTgs",
  "key14": "5HqTkYfe56c6za95DxN2NeEH3SNbwNZRW7RgDtBcAoPmYmNrW79koYoMo2qRqVpXTjhVoqKK2MHJnx8UYHvZUuyz",
  "key15": "2MHz6NmsvXg3tsEb9dEZb8r7PxAeCpujJLiyG79ResYqa8qWyzPmrRPS9oJjz5jBphJ3qFV4dLzCf12RWdVp1FVu",
  "key16": "47m9T12Qc3C4aVmDqR1YsdTMiJ7FsjfrdQLBP1bfp6md9fc1t96BhNpaYoNDZxkaby1rXsko3AcyyPhJdAnswEDA",
  "key17": "4L3wT6ZD8rMb4R9ZMMX94rQdH1E2ndrm95HWFncdBJd8L7CK9yScccab2odHvLEgRcdsx1C6kWEmtWLsHihbYBDZ",
  "key18": "5j6fqArE5dEWuJ6JSkGG8VyE3abT1K9kwiDWwgpFauRmXh4frkE2n1iQZRhFsmFivjbUNpqw48es9wJVvHg1hJtr",
  "key19": "2H7j6jiGmWLTdcBf2apsWTJ9rJKzGCLH3FsxAGVe7b1eALSkqQfRybiyekBhKCbYDUSjTj73dccyTEbdqHvS6sWi",
  "key20": "2WJWX2zstXPqzpe59TcKmxLQZ8aJcNrAkUvvvjJEiMCyw1xKwcZsBTe18BmBxYbvGLBdEjdFXzv4FsMxNJp3XhjP",
  "key21": "4t9bEqHx4UYHyamCjgdDXcyQYzwpV4z4SnkKSZen4rpzaW1CMeXHuYbfUAeiALnZadhjVKxy6rnj4gL2v6LnwjYS",
  "key22": "5wApoeWNorSktmcomWBVngPHzq2AFvz8UiTA2ShpcPahP3L2y8oBtonFiux5T6bPsS1rtpzScjQjqBLaQhyGpjSV",
  "key23": "JqWKTSb3giZRztzJXgAxd48MAA1mfbpvqTcpbcjw4NSZVdsDQcu2RWzV5RUVxAPjiHzWe43if4nKizzoxNs6K1S",
  "key24": "4sGj135FSai5dBBNToieHrB1YFbQs6fJbacUj8PNTDfPdqateqHi6zfnKT2Yfg97HS8S6xNVVUmsHPjgDJXn4v3Q",
  "key25": "HyssVk47VFNKUE4NmK8D9dc1x5Z7wte2CZBzuzJuErHLpzXiJxxMUHRB9uJ3PWuTa9ptnrZeC54F37GnSTkjq8L",
  "key26": "5Gb5enLj9ZtExLtDqUPwoiPiKTYCWGWjcRxCfYa85wbXyZrwqkc6dC4Ny1z1SAqv1djzT37oWY4AdUT8rtBvonu3",
  "key27": "3jLpXQihs2H2bn3Ucq4bshiKoy7aJ4tabwESU97m7ytYwrvNoyp9v75gUpG1qaCBJuBiVCnaXBCFQJTtYA6o2ead",
  "key28": "4sq8BgkBwDMnpqNRpeEp2RekYWeCkhRogAKGpozwz3GRwhUnbiHRinJotEXkBogxrXQ3o83wXQQREwgjXkdkmKMd",
  "key29": "43gTKaCc72NFhFwbKT44FKfe45X5dcNAsmv7SE5zk12a1yLxumAPPWLzebqonZwMMjSAZHJPUCngGsRRfdSfTfMp",
  "key30": "YYSDr7heBECu8sA2XYoAX8RzdBUnHwTmaJznN8W8uhmy2uX3sJG9htkvqqSa8XmBaCP2TR2Knc1dzLhBroEDDTF",
  "key31": "3s7VJNdbaGPdC7Zkp3KDjePSzdrmcozFnWYXRT9cij1Y8zmkHCnQwvCnMecwL6DedHyZA3Ege7Vjgez9UDCgpKhv",
  "key32": "5rkEG5WQsXp31KjeuEdbXUf6hkKBBtYTN6uXdr79HE15egHNYEhcKC65oNnC6yrVDEhARQpLMUTZvcM18Kai43aN",
  "key33": "5JVaLGijzcYh9yWaa3VK1MYMABDs2nsErYdfgaK9YNDtaZ3CFrP1pURms7eoXYmSadUXz7tKvaHRMfm3UvX7EYR4",
  "key34": "2GcbdnjMcZSKVKBXQWq9aotE3Bu4vZppPv9uC9SWUAF9Tk12AVmAF2kH52Qg9Y1Ee1CvXz5o3K7keyUPUt7UsKju",
  "key35": "5BHixWjj4VsMzv4xnB8qt5KPHe4qUB7QnnZsaC7C7ZfEzKTEHEjmCVkGQSthKaNFL2g6S13c5ju9Hdnvb6omyhG4"
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
