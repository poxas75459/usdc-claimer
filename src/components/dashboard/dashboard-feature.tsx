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
    "4fsdSoYTkCbkEty6DbjSiacYR2e8ymzrrYrFxpidXQpoJt8Nek9y9xbQNoca2rAByCPGjN65VuuC6GLsWtcZnYte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R2QAaemdyx1bRU2pLy6oHzhJVktg4Hu7CLze4ipYucuBD73CJWz6qXxthgP2gVkLk18A8XkEWFTAhmESBjy48e6",
  "key1": "1THQamZPSbqBfHBH8efXsb7rNzRCXtkoWFJzt1VNKYCbecacJgiJs9qH8RWb7bkcBs6jfbuJsH68yBPzaqyt2kt",
  "key2": "4Y9oFo68PCqsQhSxAc4m9BMB636HEba1YnmcRzyUn2nV56ckt9LUkf4KozAuG4RfcPvh3aeFjtQcjGUH5YwmdMSg",
  "key3": "USA7WrfRRak6yzcXw1JNE8aZkD3ErKaV2jRuWVoRCJgCc4ADv69VTnvXz4kNqDWz4k23SB2W6gv2fZdndnC7G4R",
  "key4": "4DPhDyMQYNCz8CeAzeefgpbquaxX4DkGwvrFpiWoSuEbnkgdao7AtcuoyQMFzwEBkK3TN9XmxsBNK89d1oxTZAsi",
  "key5": "J8cvTbWChfshhUDKdC2mz3Uj3txZcdJhA6FL4Kx6Vn3my7cEGNKmXXLfvdqo7DxEWcvqPymGQdT1rwC4f4TCVgh",
  "key6": "21VXurJQpA944Q8oTCB1vqkzRmBKPNP7TNQ4h5VgsGFv7sdLGFypoBQL6KkbNBjjKFyL9NgUXAZzekovp4YugKaC",
  "key7": "4nUwbtT7Q8Nn43HQTU7exqYrCmkzXsrxacD6qAymPBbcwZBdb8QdMY6iGVcxBJBvPWuy3sf1iV8XTG15s8xPCHFD",
  "key8": "F7vL9VUW6h6SiwNcoqbYDpBwoios5wbcSLLctSJwkRhuzD4AHopS5cBeCbs4mB6VdBVF1fLQMtJU37BZeum2s2i",
  "key9": "2rnmRwUcnH7n2U56tqj52pczcg5J4HVXd3vCVufe8PGgJoNvY8VhN9A89poJ9ig5LKb4xN4rHLPAgk8Vyzc9wou8",
  "key10": "2FbnfD3Lp6eS4f4pcLxpinbUUXevpshgFzXtoYbniTkszqtQBiYRPZj34JCWQwbLNCdoRzQ1WZk6xx6UtWbsySk9",
  "key11": "5Vbz9QfsKx7whNgtVYk2ky8fncQchnUJazLBx7DxTRFZvhcak5Nq2tYDE9mPPG5edSegnHkXngGPkoaobGAa6Bwg",
  "key12": "4iB2bpABgXe7Xxm4We6mi16nHyFwvhqb5VX3F2ZigzYkuswvUR3141Go2RoAJtuXrGSzUHknXpoS5LQNB9zNQ3Qh",
  "key13": "PsZfM6sKjGcLe9m2J8mqPZzdLfd6BZXPvuHXwTSfWgSfNJby27AMfC2jsPPKQkBCbZZPRedbV9fqAkJZ7GyTtpK",
  "key14": "3HMKYqc5ChjHZQukSAUxaV4w3tczjAFjiZ4ZpYHFeEDytHHschofXKUrmDyBWAdV75jvBBzu3zAdgEv9PtTWPHC3",
  "key15": "5QJmTwU2pYf1wXGgiuTBiyWEB9UMxdM9gRqaF2pdkHx5ZP5V9eAiSYXndNrbCtGrmyC6qpyGwkgX1PpA4VNKFYS1",
  "key16": "58axydwrL8HENe3bGYWVXPUzWmTFiVZ4CAuJfF3SEsJm8xk8eBrTz5nJQqMAfeUHcXbxQJnaFp1oc2YPBmzeXk5x",
  "key17": "4JtTvctqa96JoL1XfZdXRG6yMcKsxuhhpmGQzM2UGyThHTDf6ZRPBEFKn5LvExk6EahxQnMrrpEP5iiM6mpyHUXq",
  "key18": "4u6zVBLjxRrf4KQ7r7ig95xNH7Jb1CajD1CZxYVJns8F8YnHYSzfx4Mo5cNx4k6Kk2AG6k8SZ9fUAm3b7uv4uuF9",
  "key19": "LwNc2LYrdH2wXhDuNYArrFDSRULm1J51HQ6Ly3eiMfogny1Zva9ZQDyzKo1uFNuBXZw53MTynvhMbBrRujjvHE2",
  "key20": "2ySyxV2XXbQcK3p93MNbQmQnbFCk5HT9YVoDaWviGyiHwFPuHFFYr18fLkYsenShKt6GGzkHvrjtQTNKcAYe9tRi",
  "key21": "mW2PBZDZQD2CNdHLumZ79fWK9sPwkayHkBhZBt4oZxvRqr28kbtzX8jZ2NdCKLg7L1PZd5qbHphALUh3tkaDX3i",
  "key22": "334zaDzhgE62Z95i4E18pbKVUys9p8BYTRWYNfCog7yZmKFwC96QDpgLDySKgpbJA4LHo2oK8EMxdQtu16fb1PXm",
  "key23": "3WsoRJiEMktvUJCj7Tm5fDSUaiZ1TuSXNeuRX4bdPxSB3KfXwEZ9qmWKvfy5RN7RHipw7aGmmusnxhYXjxZkj3mE",
  "key24": "jZ55H8HYt311WJAftDoNRTDAcpnoHGqSJ8JsWfkUwMwUanvhAUmPiAdceq5vUZu2zDf5Gv3R1CNR5bmYs2ymEFE",
  "key25": "548YLtBjyM2vcjZMwo152FfUDzBZxLyCzGK6AT58TNSY8TyRd8rAQsZHJQLRCiszDsb24A8DEXgSxRtRQj5BxpJ8",
  "key26": "641ZyCwQyD9n5R8ax9C6tV1VLVpiN5vQtHHjUJZj1MGXTKPe3kbbQsbJtozQrkn7Ghhh8APjy6q7YWPG1nv5PZiY",
  "key27": "4DdByTsmfhEVzHoaQse5VNbPufqWLAHG4wAb2wak2ece58mpvz9fe4iGwuNd1eie6snqizVMYsqC23iA1Y2ohi3j"
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
