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
    "L5zuXPB74tH8T4pGyd2V2uMsNrrZQHn5jDbkeM9mjAFs2ZnxdSfhWzijv21xdHLr2snrDqGByYhthUK8d2EtXG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bavyh7ViftC6XSk182kJ98UrCZmVFqhgvWAxoBosEKA3Y3ki5A8j2iy128aEJSSYZBp9TqnNd1jXXqPAfUsbrTr",
  "key1": "2FYCigcaNc8EY7Rz2VtHoDkCsCEbChZsnGGyrUuDFrpt769dQMveKwtJ7Vj3SmJgEfpyaNrSih9vzh5DdRfRsvUk",
  "key2": "53YwsMmi1AuzZxmJrWLqjevHCPv3nAeKp3rafY2aAVumddmm7YgYCrRCLnbvQ9pkMamKbU8Wvd3n87d2ydPW4ifH",
  "key3": "4rUiFfcxFH55wvJVLFLckLKthboLb73JbV42zHHEGuwbnribuMrBjGYqbpZc1UMWf2R2bXfgzB6ctcM4f2Zh18Av",
  "key4": "tafXygoGdaFXuXNqagLMRX9o4wLC1xnGKhpEuj5raAKFLH6EzPt1bSky1yDjZg7hqHYRnip1BVa4jX4j4EPo7ie",
  "key5": "3HRfy5CQWUyhBmCWk7CS1rM6EERCjTjm5x3uUJfrx4mHh4ft8DY2Go5xhUBUs9n4DVzEbJWRkNXCE5X4zHPa4DKu",
  "key6": "43fLZaXQRQ2q1Tr1A4w2UfjqYWgxvoifPHvY22BoWZ1QfzETZYTWUdYMxEVvuHe5hUQ9Ymvzo4DYdc3xfsM2EGJ6",
  "key7": "5HAfjJ3zHVjZjteASyWdrbaHZZwv7ecFcYdLP1PZtHxm57knE7e74cCm1BBHUHTywTjZuX6SztyyxTMFMhpuJq4N",
  "key8": "5HMbf9pviRAYPbzP4wxzyLzq52HQtK86TW8B5tXtwDvCgbeQDYg5TBgitfnrkwcMSoTU7oE1Hy31v1NgfiLTEQGG",
  "key9": "49oSf7E5YEZajEjSWPitdMxPyqUKos4Ai8xJpKC7AvE7xUc7n4su6krYShv4z9c67GdaettEPQk55kkmf8iZNkbu",
  "key10": "4R8CsGxKiSQirmf8sqfQ96ZKUtry6kiU2gMPNQXrfpGFebFyTK3fiTamF9dk3TB3mq6ydXztywJsJHm8s4VzNL6u",
  "key11": "5oaumpuEqCXAPZXtKh9cdvmxEZpTuYZ35dg3ka8dRL386Y717sXKD8ZPm4LZ5gxFkJNUD2LoSh7JiAt7CvPfpi7C",
  "key12": "4AZPBCv1yGomFLZCTaUBKGu2vVjECUbbecA3yZhQTntMPTJuSeipRsozy8cvqa1SVoGybjbrRK5M8bXRioZXFMi8",
  "key13": "3hroN1Ka73DSKVaY9kuxutUoVEkbvXZ96Bvcjw2o8XkYri72f7dUoG8dBeTFZbQcdxEpqPQ5jKfKA1KurjHUhWV8",
  "key14": "5DnitgtfbPdkDPvt5LEaqcpMFgNBi2NTxUo4NAMUXTQKybYmuyJ9NDDSqnjDZKBhSfwXMqwH6k7bcrtN4qYWqBfh",
  "key15": "3vatcNufWL9mZnDyJhJ4b32y21QUW5c7tZbe3jHVRbeHuwWoF4LN1n9tAVspk4WrB8xqGoHGi6CPMaMqeT1pwcyB",
  "key16": "KoVrjfzGFZMBXjRek1PsQmedxTA2MB3haw3ER57Zr9yDDH1ksia4LWmZSESb526sfgKsHuuHKrR84GRgoUyf4y1",
  "key17": "ScB92TFWPkM55WpwhDg41yfoFND5CY1q8i4JHkULgUYdAj4yhEk2UaBYeEeke4einfkZ7EssUusTBaEpVNjCeGK",
  "key18": "4nVR25bLXynGxZuq8Twcyb2w8xu4gFPL9o4DisTwAZaAhRB6x6mM1Efmjqbs2ngiPcMQFE8TckvhJoUDfnsajZVQ",
  "key19": "wffnaci3o2s86yZxFYDH1cs125hyZbRry9iGQGcN2m7r1ajfCTqJfzL1rAfio7dAF7WUMvdCDUC3anJEmUXzHXr",
  "key20": "2xTKpc4ATFSGhACUJeb6DxYak35wVNMDi2zB5w2pWtXHGtaG6cyPDW95PjL6ock6PAThLt4peDybvhaVXVsaEANc",
  "key21": "33kabmbcPpHMi6hz2yhkuJSonnSKeyp9tVHn7t2Emet7yxYQWXUWaq3iQ9jkwJwCn17as8ZQ3v1YWAGGvmLvs1UY",
  "key22": "5oDvFbQBR57DBdHNRvw94EUyk9nVmXJL5yXvE6gLbrvBcQjEPPQURgueBLj71irSDqQ5pHW3S4fjgrg4xtq74kEP",
  "key23": "5hYU3VEeRMkSJih8abbcSrrC7yeZyQZaw72rqe4nU8Kc2wX7oSbxxpnimLMe9AUuaxpwEgaYWYqJkfNWhMpwKUvb",
  "key24": "4mK4cYog1yNGnDuSoKA7YkeziVYev3A4kYAspR7GKZVHaGo43vtzCDThZPGDcE7GrvwGjh32Xg2UVYzDn1m8QP4t"
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
