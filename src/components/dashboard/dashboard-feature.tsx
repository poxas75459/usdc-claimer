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
    "Rq8SXWfcG2Ugzv6RwLaEt6FW8837ByfkLjX4GYHuDhtCyZDKQa6gLkD3PsgDdWJ1mmJuPdAYT4GwGTxX3N1wz2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qxQHeMuqTRtfE1jvZdS4oAztx1qey2RasuEKEEaSN7fHAqPg4a4jf2zk7d6pPvVR49Nbppt1GVFycTLTKGkVVjs",
  "key1": "4b2PtvPzXHFeku2qQBUQ7t54UGTKA7ZQ2nYVFzx5Khi74Y1fKgvXUWNkAySwuvmVAsNdk6xLG312poEGAV7fM2Bo",
  "key2": "4pEWR9S9uVRg6uFy56j6YsyQ2NGeB5tJzYSQennKV7UeYw4Djvk8gXAHKzerFCheM8JYxBuiNv3amFSkXAc1GzSP",
  "key3": "5F5MZUgqcwddRnPudQKDfGF1RfAbbXrLbyfu9SKmwzy3bh6GD7vVyAWzd2bjN54DVC45XpGcMNES4qBs3MVivsFD",
  "key4": "5w43TQ7x1FwAqB2QDi4qLAoAcCEPcHJeQYV6BSpYRexb2A14r4qLrbBggYMQfh3e9zSBa46ygdeef64z8ujFG9C3",
  "key5": "PJ2X1HEaaK42U1xkKgLhojqyAdajid2yHwV514SEpC5oSvY3AS3SMYTww9ZBqHBH1ia7ZfQS6jfDMscjtUwEmHj",
  "key6": "3LZHw1shXyVQ5dyyHSREXQxx9x4HDTqcnp5U2SM4GxRTdZ8QrYtPvJLinfPyLvEiaf9YES5uW6P6Hhzsn6T8FWoo",
  "key7": "3aEP4NDo764zepkjPmBvVsrMCGmtPQb6vNV7R11dfA2c46JsayBQHGvtRW2NNjVFsn7z41xvhSRSU6cjnQArn9Pk",
  "key8": "2oUqLFkn7rFLzmG3KvRx8rZ9oiqNB244YMyBrKR3TNh9NDwGKg7nozoguD45er1jQ6dv9J6fqt1swB49L7rZkQ2E",
  "key9": "3Ppy2sXJDmhcKvQwitUjC7BPSvfWiNUdfTWtiz5NgSdQP6qh2DzWmqsUTq3oZ4Sru37xRuvzHDnxxYAbxjMrt5ZZ",
  "key10": "5zbZ2KfDL6xgjThBAAmw31KoTei3XCRd6zGbAyZq37dwarMS4MD2snhTAxpM8GDAfugTVxTpC2D9czdbB7NQoE5B",
  "key11": "5BMh75RnHNQu4YZSVsgKdDDepNKdhrGYEpNLRHkcCMamjYwUcU4U7bszfd6i7waKeqTSminUuXvPhqUfFffeduqt",
  "key12": "SYW9uFgFbcX1NwyTXTkKsNQCmtoEUuZ3ovhKBK4KWkgWudBqcDYygETrSdyZvQk2WmPtu3KSpQ76QJpBUyrVgRL",
  "key13": "Z6LedBkBDhmbHU8eAWVG2P8R1dwqokNtdGpZWrcgQSkhL1cKann7hwdLM5Qs2frYh1dK242uUWSnFK8KDcfgcrw",
  "key14": "5hDmcKRAvmKjahvgJExzUU3oEZxG55fKcrwAvEjykz5WkX1sN23vHQUtJ3t7rvUcGEpt1QxMArnSQ81Dq1VUnPby",
  "key15": "5BiEh5xhWS5jAWyXtW7wEtCzf5k5cdPZVzfsRq7oZxkxM6Ku4DhwStSij8cRecGLjf7iGEB7PAnQaBDYJMWe2kpE",
  "key16": "4QstU4KANfygRawaHjt8WEHX7DyZBUiz3VAWai5BbhZa4tiJtcGUp8Ms35GmAtuw8XrNqSbMXqhiKvCXVqDiqXkr",
  "key17": "5Qjk3TmoUq2GDDT27XYko48KU3Yfp3bmbqAogZUjKKsZSZeGwEKQK2o5NYHKqgbCzGqsYVSi3Ju3S1Vaj2ZtgekQ",
  "key18": "3gNAHv4HGwFCjjHdsnyfFz1soBWT2d9tDLfrV2PqMoqRjqjRUHDUBh9Fy4dYSxuzwxmJucatTSLjpBKgoqJgRrwh",
  "key19": "5DaVUPNJdSerKfcLJnLZJjSQ7SvJSzVesURyrPfYE6FmXwxRuDKSzUgkVBi3bzYCgD9xQSAK3QhgYYvfyMwaZGtC",
  "key20": "5WZQbEDU8qzMePyaVAvj3DhAdLw3eyWZWrhYW7Ma5yqri6i84BzQHYPNP86Wih8RC24SgsijSsYknBKA7JApUKE9",
  "key21": "2vFFUheKvHtFP6TMo1jamdqgtWGJtSxQJg8KpzpnHe2zin5YuKQmJqbJwat2A5jqdWBCNqMX58i6TD49hbzEnnzM",
  "key22": "27Frg251ocVDGsoXoLPPvPZA4UzbBWkjYo65XEBKqLPmHKxLrFL6KuFfdfxauVUnNyoVKxc7rKZxfy7bcLUXaaup",
  "key23": "5h79SPUwxnVG93mfe5TKF5v4rFWmCutqbu5ShA55Nyxd3KrTku2EPLNV4tB8q9jFdBJETP5rLBCyyhQr71nbEfnk",
  "key24": "5XamfcpED1uQg8QqF6HwwWGZCQGdo3mXaoM2S2aEVox1XCQbJEqKqeDMYHDQ47AsqRu6PmSCnKzMpyoP4VZZXWb5",
  "key25": "2dNt95f4gZJ75gQbyLfmmKCwdncAb5NbQJQ1w2SCYwsownKzTvWnNYu3KpWLeQ1gccP6bKwbzFixetaWPZPggohN",
  "key26": "5aU5GCLRJVfJyx8NSfBHZmkB2svHp2U1xsL9GEQPnq2yQaWeLMztFc95erR2BijMtCYLacM5CSAaCQKexazYZEtj",
  "key27": "44DbLj456pDGzGehFN2YWu8V9nEdMSfHvcUEXEfDozbabHgp4zMkRMBNAHyLPnokzzPMY9kiPy1BghHdQfFc24RG",
  "key28": "28i6RCnsiJUY8f4fvqK6WAyedb9TdoYUDow3xQeKYtYSxrm5nYG2yBZBARh1kT9Y96CKpu26VRARmW8D47wnnwB1",
  "key29": "3Jbvs5mQps2sX87RNH3R32YFVKF3B8kg8wPxnYjpkD3BMNh3cDrm5C5Z5ECg8piJn1HJ2WWgBxPD65DZYaAmAMmJ",
  "key30": "3eUvQPP5CK57VhBgKGYS41cChyjk1i622BAV61Gu1C4aQsiSztdzvbWByQcWBh7nbDdZ1Zor267o42e1AV7XfKj7",
  "key31": "2ejX8GsW9cq1QCCo5i3bx2GLFEjL9mVxSy3gn4rAPwG2uX46a4K56zmVEZdcN5EGPNh87k8rR39j64v2ZhKoC4ru",
  "key32": "5qVTUy7jt9h2vqxf3zCpe6JEsyW5YyoxZ8ZQWwjc8W2JYRAg57mRYR6oMXccDRvHhYUxueSJ5KFAoNKNVuheGLXw",
  "key33": "4vzxsR5kyTBVLfz15HN5KhJpjQBWqDVa3VNi9xW2vTUQzXMvECdfX8U2r26fwSUTXEUYWkoMYdtQQCHiwTbpMW9v",
  "key34": "5bEimGastqrygc3rzHTN2KVZABFAArzHFJXDNn4ZpANa58pn6P54ebqq85RH9JYff1cuMd3PS4EerHPD6tTcxEjx"
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
