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
    "61acptDuprVhSXJJ1u3bmpZemU9f8fs2c6BEUTuzygG5jGkAMMtw4f85iN7m8Cssfu2AwrtscYKBe3FjJRpYUpys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64qboySPYKzjYvUr4uF8nk49HL84C67CsX4vDLMfBdaHpKrTZ2NYTQP692U85mcYS1vaphWa9y9K9RmDnW4yDXrz",
  "key1": "M9CTV6KHthLxncTN82sqDT5aCB1rVEmCRcuxk8gHtc1L6LfsuvnbCqN997MiXacS3kFr6XYhzYPhxuRT5ACxoWJ",
  "key2": "44eb3LKQVXsJheFkztgeA5K7j4tyY3WRbQnp1scSJRDjo3HEZccHStsjf1pVh5wWQESSrD5DEDAQ5tuzv8FvQJCm",
  "key3": "5Rmo459A3AUMqwKNYJVR8svb85PQ4Sf2LXAtT9xdaBHT37KBFJo6qmxZwnnNVvfXg6UxoaMhdnQatXQH46GAGwbe",
  "key4": "2iXfscWR2JQRhz2RDJdGigbi7SuaizLdEH99AoZKNnrKeRXuU4wLmmwC4M2gAL7GymWhTfeFXpSbncT7SZRJzySt",
  "key5": "2g1VHhzwEcgEAPnmgim7mZ8qGY3vi1EzvWkxFw2eyK4x4BtMHFYGDvhCX8qLdkkoLYxmakaAKFmvNjyhQ8tY4sog",
  "key6": "25Sru7j2BoGpm5tEiU3ZFRvdGjRZ6fiRZCuerfWosJGG82FGqoGAmGXjSRnmpgXBTpfcDEq4mrqZdPtCTALQoT4w",
  "key7": "5GQfME7YKCTn3vmhKfzmBPG5awKBrdM9v2qKETrSS4MAnTCL2Wmtd3c7ALE7jYNhETN73zZaFHyx5hLwU2PwEd1E",
  "key8": "4XZrY8Sj5Dk9LsN2hT8b66mcrcjb1akP8o62cicX69B2TZRaKTaaaAALxseboTvgeyuswAs5d1z5ttvSF2aijZJV",
  "key9": "4VRRSqyCFy9mWuLUcL28TvibJWZpnuxZCaZEGuoLFKNp2kk4p1ime1JasQppBR22KZov3py9VHSrEmn8ZAQqB97Q",
  "key10": "3Mme6au7uTHbUNbDwp5yBz9aobnpegn2qSYb8mrv6Rx5Ahyd7rPjDhkibXpXCBWfr7MPRFLjBKiyoMX5XMo7whgy",
  "key11": "4wPyPVV5knmTSzc9jfT9HaWXa7rxZamysBrBMQXbonS7zh7uVnfFyZNGdftLDbj6SDXQpeBZKEV7vbTrya6QzgJ4",
  "key12": "2opUfoTaPE9vM8ZzkFE15uHPrPu4qzCHrtYbQZYgpdR2RS4oapwKHjHGd2z3dvXkgWrznPH7pPw7jGo7uSqYY9n6",
  "key13": "63ZV1d888meSjTQswDdNmUzKo7jXk7o4qKCfFCrUhxUkSR7e6xk7wKPAwPRm29caGTbh6N8fkYkFRkJTP94XYkVv",
  "key14": "22MZoVKbo4SpaLmcmAiywoxrMZFNNn4Vcfa3boZPPqoSATJszG8zTK7rzwZqNiugXqEBwLnrdTr4kTmRucUgQDwt",
  "key15": "3QhJPLs9bEDVdG6t18rhzUfkTBwF9uptPhSRtrNFoR2zvpxK9WewXFQ5qbADi1ndXhpZ7WQ8UtWwNtzsxdgxrxaM",
  "key16": "3LqzbvHMroGYbjYhvgPAKnE3Lz2nG4g8ogz8G8hmWJ8hStp1tgwb219AA8J8e1ksgd9LVNdW2BqaF1RzMgrxyB7v",
  "key17": "hFaspqg9bXcQM8mhx8FsVdg3t1ef92HL53YhHDABiwxbC3xhqh6AVgkNhWgd71co9z2owgM2Nw5UP9v5sELGkZe",
  "key18": "5ZLgxaHbiVh5g3HWtESMqvyBfSLCJBs7gb85VMmiXjPozZPqV9SMTt8AereJMQyD4wq8GQiDoKMfD3jT4RKoShFY",
  "key19": "253DmW7tDzYvL5u1wsS5SQZW47QabmGMfhRZcHQSgzRKtLtWuMhAvHiz94vHbh2mBdqNzWpcx8Rw814iPTNCKdAH",
  "key20": "5DnWyhmPLn3W72PpvXwdaSxdEUvPdKpF4AMr3Zc764Kc34j6xNRizE4dZwCmes55vxYaNfaxhFShUr6D5biQvxbe",
  "key21": "1Wkc1cBjW5mPpokj7gpM9p41LYSetFYzVNGv4VNiCC65qsc9fw2H1nwJMAhmPKMaMNqZSfzmpAJcc1wwPscHiV8",
  "key22": "4RgnE5Ej42Tg9tqwSmPG6pNNZSoKoUAy8ptKMgfUJu33vnPDp6fuQZhiUoBBKMVnitHzEUe7S9h45ai6MeUg8br5",
  "key23": "6ZBFs2vuy6q2zMeEg814RKCVwAA9P2WRJFVtv4H9AzcjTD4WDnnfkWpHHC6jiUBcDNDRWLxbaPdhNnF9g87vUs5",
  "key24": "5gmQAfViaWoQRPVXJR1T7AgNhjtYwDZqTQqPYf98kXD12npKmUqyyWUzbt2PC1fxXUxz2gmg38zHYYR5Ud9jbNLv",
  "key25": "38YrnctBnsPnXkaXeFqdAJ19Fw39mM1th22mz7LQ5MLjDpsEcoW4wJimzNr8nygBqX8A47Dm1SF7aUP9fpdReTY6",
  "key26": "55AKzPEbiLgjGQqWBudP4cmvSm8nqh6xDoEapN8dhRs8YCQwPn6y2eNZ4wdatPKzJgmhhdV5ftp14U6baC6GLQMd",
  "key27": "4Jtt8mBNYoRT52vLoFzotDozJuj29j6syKuoYfUCNuUsFeTiaYNt1dsm4H2AgBJEZGNseXpmrfhMhS8YDRuKfT4Z",
  "key28": "4MBkfogGYPM758LE11YJ7RBspKNKMWvBCoTCBXeHq7uwacxXCCSuVfU31r4Di7Ab5e4dJzgRg5vp49KJmzmBESNS",
  "key29": "2oxw4z9nick5LgTtNUZJj5FU4uizCrEBtEaimz7sa36Rd7cqnHNcQvj8FXHH32jui5MiyBVYjTvao3LYNtCJCzg3",
  "key30": "rkUw8fWG9hkL9S5m2AQ3DFRLxGruohpYQd2zLagTwQUaQyybnUmTnpP9NbxAoQZNAijDFZd5qro12oCHeBAewMd",
  "key31": "2iaEXXsFe9BhiRMtHkLEsAQ6BKhReQZV8tP3h7UXGneXG3NAekTGUDLrQEZbhfZVLjPdUxu9UGE1UZGP6uSYPMFL",
  "key32": "ekx9Y65GzKZDL27gF4wP1RxjBRB8BqqcfJnYf62bhMX8UMxTrMvYp58E2wSJiMHB8sMncCkUv8szbZYvBDKo6f9",
  "key33": "4FTJqZUBkoGbPpV8KjdaS2WWFdzfyW3RaRSMDNbpmug6rQDh6EGnZaqyLyxXYy5DPBCwsRMrS4H3fqvxnSzQF7W9",
  "key34": "2UguvnghCLDNLgiwh9nwcdcwbfPWj2D6nmipQgKfQdxqhJ4obr7Q5MQPttycvaRVpe6PDApg5isA2qqGaUbA3gXh",
  "key35": "2SMaBeK9E4vkRY4NXJPMXTQ1ebbqbZbNuJR55ru8bpDKMxEJPW79uVWKwjGmASHQXsrQ7HzsLphyeYxp2mjpSGo7",
  "key36": "iRLEMZnEvrrZpDJMRSvx2evfpTkpxHruny8AmGYKyiQp8t69cZ5JuUonoWEV5CNVbKtcFz8TExfXQ8LuMUUv2Fb",
  "key37": "4uBoUKSonHniKs9D54SRgCVamqWd5W4Hi3Yj8KkXABgRg7PUmZfuuPu43SyBnvhSpufmQjdcsKJABo6jZg6qVNAM",
  "key38": "2c3ikExBY7btTHWPs8nuzgVbUDZLjwMUz7aE354dj2G66tkEuEHETdc87EYsTEmkDeCo6zYSGpYBC1hgJfnuvAyw",
  "key39": "2VB3kGm2WmjafYZ52QkivuWJwEaEh7AGTe8JLudsAQXhivpNiXmBDgnxVp9ZBNnxckaNZ8jfmBpeQK73X5EYnhQV",
  "key40": "hRkYLDrwnnxobUAwCRs6tWDMFhgYJAPNrxHNnBeZ7Ugirijy4jWg2FmYePtjnYubF2gDStaZ2S1z5uv4hgYjgDn",
  "key41": "HqzVYCZi3uWwLqi1sk3CqUpEAva3b5NrBtvXFMtajKcAesZ5uEhpPfuZ6WmH41R4nGM4QKaXVYgy3tH5Wj13Rft",
  "key42": "3TuCBiHcZkv2mfa2zw2MFdAkWYpfE7zYF1qQRSm4BmtqQXwnGbLFQFMcGSGC4tFv8Lx8x2VcPWqAtomeDJW5zM5R",
  "key43": "4iiHRNhh7tqkCiP2eTbiBdogRjweXc74cYf1einvfrV1arbuDref8VqB2hi4dRuNr4Exnr8w3PwDe4HkYuc4GKuZ",
  "key44": "3JNgmZJXN8gXCjcJMQjt7pGTm24wNFyyC7ZHU1GZnWQYypPpmwk7QvqEccBkJ3YRjDYM6LTkELnuNBn7dGe4Rp4F"
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
