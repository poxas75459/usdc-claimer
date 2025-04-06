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
    "368EfNwVFgxUsqptgbu8nV6wx7n7uGUj2v2NGT1yMbmEoazwukE67j9nsAUgUpVz292ogLT3DuK1Z5bqYg7PMuuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9FDGaiRz1VvXBMaMyuqBimRVyVkdn4hrf83NkKc2Wi5mtArcZXBiNLqhBaqyaZQ9kMwNVgiwE8S2ajGGMEi8h1o",
  "key1": "2Ns7K3bfRk5nwkwdGw3MMY1uCywP7FyWQxog3hRpWb7kxW4XCWYt3eT2FRxEBV85uMCXqT6g95H94dUZVVZoVRWD",
  "key2": "3xzjaq8f42aPdrBmfNwG7eyiKhu1AgCTT5Z9RZh84JcapcsJ1NHA3VGFs9YrYmN9ZVRJnUbcrBxKNa1FM49j7w39",
  "key3": "245KA9fXHT3ynMuBLZdm79B5bWonjAddQaDcGMnvEL1mtdWoS9itwP5XQUGz43Sm8tYuTBdatsYNQcBoLDgEP6kD",
  "key4": "3kWE2yhne7XijMpuuyPhkppQcDhL92YkzxSMkNRaDNKHgTMK6QbyvNXPUDk832pAkph2DmhorNpgMJMyEQxnKP89",
  "key5": "Xzragus4jcCyEscwmf4CMGuw13dXQcXtBBEvomGaP7uWMiUX5Y1Aw1KMYPsL3feXVPWZ6x6X8m945a6DzZ6TR2b",
  "key6": "4kBBtVbH2vzZ7X1vN3EptPBcf2yW3jjzNjnun8Q26BsRwjjWTz9n9pUWxiV3xKqqn8FAAHcWHvXXxU5hvmiHf1Bq",
  "key7": "645edSqttc7rAGXaikwCWevSHZpZutmYhPbPJQTexEKPxaQeJapDHP5F3US71Tsp6dYDKw7RYgBYf1SmfRnjs1Eo",
  "key8": "3cquEkfKr5TPpuwB1UxVHcREQN4XyEurthgoLp8dDnZYoQ2Xw8RbJY8qAQY3rF528aTXC3CAvzeESJiCewB5artC",
  "key9": "5h3HW1CBisxjLeveWiQd1rnEQUmpG5tryJAXPnapXPo6wPgofi39sJ5NPrsWhcxEjTVdbB5H3scSVarMkRTkKHg3",
  "key10": "4MKqJE2FofAGsgjubZUaLXFN3fEa4kmiBoFr91qfrgQ6TTiMcidaYA5GRP412cRz3UGHm8uUBUPAxRAiPe9wPEXT",
  "key11": "2g3dKnXSbH3sK8mynR3Wz1b1sAfSJA6WEUYkfMmx4RFb7oJTfECJyU4kZNcuvyXTyqcoRCg3fBDfxpkVniWDxsxX",
  "key12": "5uD97UDEyF7KrMMwtyt2UoPHacAwRWai43jgr9G31SnWwrwWfvJ2DdTsA2iLDrsHh8LbcK6naPSWDGgdbNJYkVVy",
  "key13": "46W3p6rK5vYAMS62s92aUs277n4Ur7d8eZosRFGmmbUh4PN1R6193eDwV5brpxy93eiS5xbuCohpbBjyvzvHVeV7",
  "key14": "3xyPG2ejC961g6o92CBywbBF6Sjp59edK2Qu3Qa6TAFfm9B9ijGWDb2Qcoi75didEemCs3aZvAK4NMmZmC6NUC5B",
  "key15": "46DGu3cTke63R86WJbZuD1k1ks6v3fEoj5A9CxmCpiadKQix5Jp6LcQ6wsW4nd3uaF8DUeNmMkVeTytUSyGX5B1h",
  "key16": "4fv1pnaoq9pbiEDnx7c5JdtJL7v1VE7PuVQj6hzPtkNCLmsVrgTiEiq9Xnu7Yh8edvcwb2DiiWwW8niBw626k74T",
  "key17": "VSfPxLqzo6vw5wSwC3xZMXxTu2eAX7fp8nDjPcA6baXUgygrPM2Vq9zNT3ey68DxoeNBwkD9nhH1fQNEZkAHJtw",
  "key18": "wYY9n7dyEW16dGwkb6CcJdbBXGpEWqXi2UMtuBZj4d3LUan7tCetJQWg2EmfXV3urnRG3kMtGxgA5DBpmNEK9Ew",
  "key19": "3v8vmXauzJdWcjiDXKF7YuBERoiRCbY2kkpaZutpFgoxDqXZh17d8SBmHHj6PTw5g9dwAhVTpdwqQNe6sFXmmqZs",
  "key20": "5gVdEg7U216PQVn4rPvyGE1PDeU6efs71pCSRLz5Durmn3SLpzeX8EyoyWd7eveQ7zNNZTQa1oHjTdLud8YsvyHm",
  "key21": "33LcxrHoXQD1M7mBW4HH9iXNQcccGQRLiyBi7S9fuaVpX5f5dpLqwf3S6WXuPWaE1BUQB5rX8Acc9BF4uYEYeM1f",
  "key22": "5KM1mk9L1eJUqHEnUcRDuBMZhCtefWH7vmcvrYPMEnYX7yCE2k1a7QrMJfhyQKQpmAuhszwrh1h6wAsVTk1a5g5C",
  "key23": "4Fa6JwzZzuTPV5LpYtJA9ZMkFf8cAJkhzut3PDshn2pExtaCpgDNG1xR4dL4CcnW8Hhjj6CfnDh1zZHMGHMmeKAJ",
  "key24": "3ei6isvDxDizZsQV74RD4s3ZgiDPZFeAgfXTuxDvpojweJU7mYubmGxpfU2Wh4nXtdb9jYHLc71tLRaU8UcHwAUb",
  "key25": "4iTpvKVsT6hm2c5ZRe5uF1dMynbowUsKjySmuWrGVLWmEbYLXFuN7d8bZxyFKyeAcvCuEQfHjbgEoSLSjRXDF4Nb",
  "key26": "4TzxvtrhkxKj3S1bNuni2RTVWvKmSitzckSEs7ncHCFjURWS8X8VgnpYTprkVd9nRQ5ndesm6vAuTe7Bpg8e4aX1",
  "key27": "2qmQse7R12TzFgsNovmidov12vRKJ3bzJTzrYFiwcohR5mSKdM3ehd3VEvWYK1TrE7QhqU5ghz9Ub6J74xfWLypB"
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
