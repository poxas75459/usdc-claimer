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
    "3avm249phpBdwJM5AruSVwqoxGeQVrpdvo5Q3Zbx1xhDf5eidigCpGvrqEgTTQGhzaPrFupjRxQ6RDWHL1N6YhU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "569vAkcUkXBgEDkPz2CH7RwVpXFYvMGa9Kab6eLFi89T5oK5j92yynegST1Mo5aE1gvpVgCY9Hga9bErAxhzZe9g",
  "key1": "MjrRyYBvTRQT1SKVKK2JHPnCVqE765TiAqwvDwUTEtbBatRgwp6gekCTxb6ngyyGNF2rSwfA8Cjx9GGxCWQgz2H",
  "key2": "5QusNtEjojzez1ULFmt1MzoCUhxvY5u7r5NxzaBLgVLNfzobLUEru8DiXB7acAZMuGe2RejQtGMDQtYh6yD3KSkm",
  "key3": "24k9YEDLMAn2KLUEpjuFefMW7TdX4VpbJjdiCNSaCbWCKBWQFm1MaEFJdaWhMjwxkXs6FtG769J48FTUznUgfQKA",
  "key4": "Tds4NrJNoQNoqHcK5Aj6reoma3Vdo9uqGMeCwxtVqJbR9PpHPdLpw1NViuumkC2akGskHd5ud7s3m9VPBkeaDBk",
  "key5": "3Z9pFU8sLQmP9R7MEz6zsabKXyF5X16SbFCQShDHM1fSBN3TTAYsvQpE1RSfqcD7GehJqzhWZuvZFVEKSgFYRbug",
  "key6": "S4N6tJWJ1RaVh4Umejo5wgT8CjvnECwkHUpYqcApjHhN9MUxdNNA614sjGbSCd2RrWugvc5PxSyNAqkYjR6MUDU",
  "key7": "4gb4xMAGH7vCfnDA5tmEGzcQuukvo6qczX7ngz4hwMRmwJGPqe9i7PruUA8qWLdKNv3QvBA2Wm4HEtsveVbKDzcz",
  "key8": "53aAtFSQrYwe5nv5mEbUsJroNGMgpQxvzV7M1cdTGZPB5zFpmoM7H2oiJoZhNuGxj7gRnGhMcgMHUt5oE6c3hdVw",
  "key9": "2UdSwXQtdQKoF6j7EtP96iEEbrufm44ph377dXjLutqebha1UWkX3vt1C5EgoXMNAVbC2qVnx6ni9TRZpRnhA77b",
  "key10": "2d6CboVaLcgGX8DDWpQb4cgtJwxE8F2FpmiDvzWFRZgFM31yBRZvFvz7ZxeSvDnAEpLZZLE8mEMu7dnc29TTbRGp",
  "key11": "4u9cLskEg7eewEPiwGwXsLR9Vzt29Wy8dFgcnNrxWucQYp8ygxNGmW4iJFRvJC6C6rhw63G9UiKbzg1TWsATY1tT",
  "key12": "45SofhJbGwHGUGptBLJYPCPzr93MB8ekVF4Mh9ntujKbn2aiV2epwABzpmfR5k6iUCiYEr71k9cCdpr4YfT5thh3",
  "key13": "4tke6kwMyPuyYceXnDz4gpHiysurqAJXeH4gJisF1dpdSCkpzvxvHhnk26c3324jpGX9QfX7Bp1KQ485DSBPZKMf",
  "key14": "HFAXWWEVJFiNLM1ViNzNXQcLRKfwMUsVVdKVjSfjtyQoLn6buKzA3zhdmq819eqhLzTjc2mFH9g2TiXZMrJizEs",
  "key15": "3VfBukAfavWNtw2ff4XxQdneMNS2Pa7nFxhcDMYug6jVej5eNYFu3A9jCfcETGZ9m8kV7oWT5R1ignQnXJS2nBRL",
  "key16": "2x5QmLVE4JnRxGsTfFLwpizvTasapfhAMJEEsesytjrgMJcCcTLsSj9zKjpRoAk9a5piJeydHDdtX3UEN2HQhAUe",
  "key17": "2St3Dc3ECRWYUwGU8HbJQcDN2ztR9J8ufyj3QfL4mro5xWAbXRpVVLm3B3GAe61GZeikM1NVJZFJbH9kcZbZEEBD",
  "key18": "37oaxMMMGL3t5LqLPVBZd6GtHnsus3jvRatgPeKZMXZiMNNenFoigNg1iHPDT2sUBq7g6x3NoWgcREdtEwHUT5Xg",
  "key19": "rZ2Kp63SnAwdf7MyUf8FnSspjYBzp7Ag49uffKtDyqBZBxhZ2tSS2d43qpVu87hCLpDphcwkhw7sBYxfwKqKqyn",
  "key20": "2ri6uuEf17gDkQ9jvLbvXXB1F1bXVUuPJAJMngaixbuN8VZSoVnhTepmgFAR2LKTrJUrGbYcdadeVNKjA52fLDsJ",
  "key21": "5nRhZX7dm26RrtEBXav2gWRqjsUTzJhmUjqZiEZa2paC8awiFFm5jNZBXdY6znEtPQZaoR8TTPhCGvJiYBJGGERt",
  "key22": "nkXeJcGHU3Lxx5L3ji97ZxgFcSPToyG1HA2pdoVRyYFYod6WdLtuZyUjAYr3YAAHrrDufD1cE2zcYBp65nVbaFz",
  "key23": "5r7vALZjsXjomo5Bg4vKXtWLccdUagZJYjZjjyfXE9KJCL5vJUPzEgBbWacsFRHphoFU5aLwq8LdHuR5ZM9oigk9",
  "key24": "5fGgD4vnrnJ4yW18ZE5JDwKVZgk2WcNHzXWHMTDWmAFFa1nPkwSH8F9wyhE2esfCjhsz6G7rPwLhy5qaaNkizjXN",
  "key25": "5THAbtoybM4YjxwHp6nXKay8MVysTSLUDWZsTcNbRMEyFr7v3XJ2NJv1jCm2HNn6tvPk11httZYWMwGF9Qu2Ha1m",
  "key26": "4Qe7D3iT2SoXB4RZNhEjMxAiLth1KPQa7Tx14k7grA4oG4K3VmwDgyuQx2z69ryJphD7znYFLyeZ27jfjHaZCpGs",
  "key27": "2k2joticyNrRCjf1RNV1ff8hU5kLrBhM8y8RkreL5dFf2RphhpLcSU6jJyLCm8tiJXRfLo5UbwQyBWHdWUb6mAVQ",
  "key28": "UMnAAYU49rLb3tiPZrUzoijQUnxXJrASZPk7daqkdAjjFf16Ao73cHD5E7y5DsXLJ9a4H8bFiKeFYKLn3BdyxgY",
  "key29": "3SD9gfG4kRoFvrtz9XeevpiHAHCbfBUrr3rPjzsSffMaZxev3acGBrz4sskG8rJxNS2qqC3B3EpY4eDB3aFsUCAA",
  "key30": "5L5aEGVHSbgiiWpR2XgPvnekgstSc8uicy9MxYBPdvohtdVVbJBuhhu2Y8aLj3puvJ5X3pe5GRMaGCdkAmJvhqAv",
  "key31": "36QGVc92qDUmJufbeJYbPRf254yyEvNgoSA71K6s71wsVBPki5nXhk675c4zsLQthV1rAY3S8BDNuAqoZMTpdnr1",
  "key32": "4EqjAVQRpgpsMP3Lr73MTeFxQqrw45NvCciokb2BCjJESpbdUJtMGA61CtWurVUSDo8Y2jczsbUUi1LWapno7HrU",
  "key33": "4f6sDEQBpoB2hHiRNQJq5pCCkz3XQvoCf7JjhDApMG1eqKzrweG2bCwgHN2V7cqhgnnqUoimiLEPsLRpL9nkZMEC",
  "key34": "3uHqRpKFYzgSU8i4GfUTXwxi3wdZZDDAE3cMWUeJy6DfoN7apR32FmdgFKQ4cQpVzzuG7amFxN7Nuqg4pFaF7Pdh",
  "key35": "4R3M2W4fiwe7EoXEbE6AcWZmxKLtVusDacfmAURj89PJcaBtWqeV24ekwToozAJNY7RER3cyaXd59jun7eULRq1F",
  "key36": "5oLruKKApw8AwoSUrCumtJxXHmoJr2U3SASLSCfNXEGrV4JCNJNP6PZCWbfiNKfsGKcA5ar95fqYJKfohRGPwMGg",
  "key37": "5cAWvwFMMLLF9vaJ8XhfrtF326EqsPK2Tpp2dNw5WjxLGHBgf9AwV6w56qnocyGTwuPCWT3V8DKZ3QBovJTyxANz",
  "key38": "3R1z3YnrfprNAYtP8kmHBXYhoz2r9v1qv8v7a2ivi9kxP5wMyhbG4Fvzp2ZcPXjxB4jMEAuu6NB4XePKJcw1mB69"
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
