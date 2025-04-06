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
    "2z7f52CvQPFRtmELCGv6eQtbnHs4z6z3g21TfDjEH6ZBjd51uH1EYETDsK2icMJn7mkpUY114zCfhLvELzku58yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Gi1k5oe9ZV86qBtfrbVagRXoqEB1CQaa9nx9tQCvugLmx3deG63cjvfdX7EhW2sbY8ZncqWVZs8u3BsXVyio4M",
  "key1": "2tefK8VSNGyff9zL65zAva49hobcYZWaEoxhqSjRSQucn5enBneQyksrhLnScxWjtSxw2jSLwcAGCPVWvXdz4kT1",
  "key2": "2CipLnK2PYrLb7kdruimTuSi1ZnSEKgq6U81cYvrfFXSTPaHc4teRsAB6mvJMo6bdTAWLunz5J93hYir4zPkfnjj",
  "key3": "3hYveYBXnw8h51aBfRR5GXzjaY54orr6g1r26FcNr5TpoP7ptin7ww6GymuDsv7uoZH3ZQhi2YqyvmUbUvk8u7EC",
  "key4": "5SJD78jUNuaAPy1h8KzxmLtC5CJ2LUWfVvHeMjkbXVbYo4VU5FxUyGCegyaSjNNXhY28c2GMAsFme8R6hEmZnk6c",
  "key5": "5kufisYC7zdC7RS4YZEnwPVdKXydG8tpAUCP6hzUJXEJQ4sVEv4UYMpYptmv4rTjCL2SNXzBEYEsvrCxiBDgmV5j",
  "key6": "3PrFFCDdZR9QffvB4P5iMcVoRvs9XE7x4dHYp5orRWvzZpBhmCAJT2PSGU94GghR8fYN1gimKRFQeobBC7xnCRqq",
  "key7": "39QAJmurgAPC13kbQoawX3Qiuwy8h77LZQj8MnthZM4FthR7UoR25AGdVhecZgJfRoHTxdP1xYYCMkUygDUL1d4r",
  "key8": "3N8txd1vJGB3isF3uPYZeELcqcrpVt1Hzxk6FeobqVYNBjjd96bnveAFigsTNh15dwqX8QJjv9K7JYNVy3Tigtg5",
  "key9": "5Hott36rbf51miS4snh2Vv9LuPm62kKsLkb6zJvkwce3yaCk88vdSzK727fknGbAZeb8dAYTdkDqADYPxydcWvi1",
  "key10": "4a8JMaPhjK4Awvedot7nicPcPcxtPKZ9f3AmQ3oybgr1hEbe5fuwYyDGPqHWfcp1ZpWHUD5t2VUGX8bJWdtgZAv3",
  "key11": "1eNTLTNNt5U3ySxnXGsjJPZ5qxVpAVq3YriedermPvXiSwtx9grMiEJe2Pw84mQML2U736fkYTujyMUGoqQsiHj",
  "key12": "s6nsDX2z56Xj9cPtwtgdQ8NePL5fuR4U2hcm3byVBDh9U1huVabagmgU9pHMc9D58RKbciyDerrXyvzXwVieGFD",
  "key13": "3ygLDS4j9Yv1fHMEuFwCGQij9jo4ThNn3rFVqjKzEBqZYgD7fLF4qRryxvMv5sGgpT2QrLgCxL5kLymBgSHTygZ",
  "key14": "4k2hfWpvusJfQrCVXVDYGpmFTjEuZs1mSDe4vpikkWcaUjKX1wJw7VzkNRnWzmpS4C7HN9TbG1hqE9xbmhsKhtrx",
  "key15": "7UtWWkPKj4fYUo3ud3bGNAUnkVRwJyso26LaAXoDnVrVxyCrgApWETR1pa3wqXQMCL9tKjo8MJTRGtofBAiFxJ9",
  "key16": "Wqs5UUftxzu1fhTU4kbmqfnr6HJ94RXJGJ23pT7T5FMZFrYdpJa26f4fF3FQwj2VJuty9192KbcwKoLuscn56vw",
  "key17": "kBj2XbrZEaaouCGFUfdiZijRbWiP7gwk4RBFNJDnBkqYg8JJBGjNgS3FLJ6gndeNkGEDJJ5brKBTqhrNnVaSYgV",
  "key18": "5PGRWPVd3k9yXjwv2sxUU3Djth1sbWKwd28sigXWjGk256Wv8VjJnqg3EktriV6d2sXzVx8tF2TeqkyoeYjDCRGo",
  "key19": "57xQ2o1kp5PfBA2F43Jzyc4mhFijQ9eeqfn6ravcwnDb1NftFbxjy8dtoBfdfh4tgsvKqqUxh3DyGCU8VxoWTtFw",
  "key20": "35zebuz3ThwtAAdavQhQ3Urg21EFGdGid3pBAtS4QCfaoPdPyRnN6n9FbGecRVVLjmV1gJQqiueZPHD13uSbjDdL",
  "key21": "5wLZAgWeP4rRL6ZJJCL8rcLKX2sHapUSNGTenYicjZkFyFtYk3ikAeLBodfgu2R8c3pTxhvsvKpbXArcxWoWWANk",
  "key22": "2SubK2gZxEndJgY6R6uPFwn9gfNa17bqDtyA95Ac9pk6aRQo4FNQqaDqfB8pP5hzG47qX9JwbiRSCXhFEAv9CMs8",
  "key23": "5DpBaRNkHRp2fN9HoH8SomUiqijQTE9Rgq43DpiXmW8yWYdwHTCjXnxcvnSfErA2QiYmAsps3JRQfsXNRQ9fePWD",
  "key24": "YqkYu7kufFgMQxRiE2sPi3uTMz9u5GGJ39zRKg4Ro4MEL4wXHwazfBVQ1sWaKMm75pzWqJ62yhb7VrK3eEo16AT",
  "key25": "5BfHQrqHSFpiQmS2tWn2NfBC8YeVF1J7LbYkEqsrVPLXcU7YwQky4nErSrb1GC5aZRjPg2trefvKTEcWUHBcPHwE",
  "key26": "mgQVnGcKJdsBGTXeG6p2ZiXrYJ64j7J2UjVBjvQi4JBy7vhjsLfE9uimEhRAUeFyEz4bb8kVT1NDZTo7BNV8Atn",
  "key27": "5zRwjDb6w6EKvGeDcdRKWne65EGT3bCThamKWzvVynRVJeN8QA8GSrqk8gBp3Ni7ons9ihPVX1PkBWRJPTJDL36M",
  "key28": "5eETxp92DYMbZx7dvskdz9XktnYckW9Mo8RjzTMPYm4LLvXPLMGTTGW8dPi4NHh8pqarzWed4xzky4jgHWEVZVe5",
  "key29": "3tK7tq2CXpMUm931StM9LSg7Azosyztc3rBRzp82isnjLwMD8b1CgCgZ14H4qRgSK32tVwKUcM5meUeGZTmR8nDg",
  "key30": "5nNA9nMjyFaLTMU1gjuGSAYoXAShFEUyBZRzspV6nVpUSCy2Xbu1QXr3u6XYmGF5aK8QBFYd96kTvs6hA8XubHvM",
  "key31": "5A6U2xyfPuyvX3t7EQ82UgY8NSAvbo8tHs6YSaUqQqmG4SG5EjvSQ3Kpw1GgT2YVV9tMNpvHaBPpn51cAckH65fx",
  "key32": "FqQFHLpkbdFcA7JbzmgwLyS2Y3bBkTvq7tfJ1xYLq8Z3eqEd78HoEU9Kxv4Pa7tuJj87AkbwkUACgih5jXFLpTs",
  "key33": "2tXFwSPNb4AgpxjAK2WnkHhrPwLG15FARWJPY3powNfNMqabqABMvGPVNJsa4JSxWfcGZynbqNJxgcEJXqndtdV9",
  "key34": "29uCwadaN12T81qMhpj5NRcbvuURG55Ekbq9UnLEm4HNTiVyiWbniCgP6mpbo1KhGyNWpH3vz7NgjvnPaZaeU6wh",
  "key35": "4zHkbux7WyB3GqKHVVjBDbP2HzLfHyEqBG38aEpvL8bb9yvvWwsFzByGq7ifbdk9eYdGsxQdfUmDeN3L5JN2CDRB",
  "key36": "2TuBgEqLTpAiKL19wZKocKaeX5Qdk3N5QtErWfebHwx5LVVgrWAbHLZ34MQ4q2mcbhPJASNMWuBcZLDEeAcbjk71",
  "key37": "2giDzNZ4kMJ8nrY85gDqCPDk9Ge63Rr36VJGL8yEWJboNbhgyeZrinZET2CU4FEqetboALdxMHFYefZLTzjq3QyM",
  "key38": "NfJNcFnrvPyXezQoh5u75128LucEZyXLthQKDEo8k9MZkbeYRXdsotjX26dDWdmjAjvZVoVCdXMX5RhKjqLa1NE",
  "key39": "VBZZJvLsmPfAUABKWk51xnNPYnzisvmQQLo7ZL311Q4xigvTWutDRkzQiUFLVituzWKMkNDPGY79WgsJFXej5gs"
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
