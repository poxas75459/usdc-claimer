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
    "56KYaj1McUtvwTAeY64bCpruV4k2cGNfSHS5312kKotSJY3zWZnJK5Pk4uizz2czmt9GoxsDNbhve3o4sLG3qWWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGoCcJBUd9HhW36JQKvpW7sjyRmud3n4ahfp1RBJhfYinVTsiBN4o4FQcvoCE58vD8ixjGjaqSVc2yw9GmjG9Dz",
  "key1": "4GynG64DJDNBRGm5eFYoSYAsoFPqyPSfjZZJzjchWdjAa5hat8WWKcauuVL9NjCCAYeDUrFk3q8hqjBnerubcbiA",
  "key2": "5xW1YyLtdKNbPKqiam2UJxEAFw9zyQBqQVv3kmBSjVF7tiQdCmVTwd8LgmTUjF1Cc6mD56GhxedXkXHxz2sc6Dii",
  "key3": "4xpAegQMtmVSLPGYuW5c5PFY9Ekk975g3oAG7BiWy1uUa35CETmGAdhdRJ8XU3nbxs1n6s4kqvk2uFpg5iEbtS9E",
  "key4": "3EtKdA38RNbLXRE7VqjGNZ4Kny2jfjhRGF7nVfTZnQoC8HGYUM5FruTzS6c8trN164Bif5WXb9kLxGF3mpRUX5nY",
  "key5": "48C64goVok2YuNkB28ftmYvxxJqAvvJxM6FCJZ4Q8HudTBhU8YfhGcwngf4EGvN72saSHpm9thiWiqpDPTHYDvLT",
  "key6": "5o6S6mb4pdf6Bs6Rr9vTna9NS63FtdN4UXJGEcWPCwXbXbTmZ5Ubheb5QPf3HzHegVFYhVNU74q79wfJBDLzRDvL",
  "key7": "3pTQKbJqKS3mZSZj7wNrZu9GX5fYZAhwDZPGtsVghpspJJmteeWYx4kNFUVMsFwVDkoi3c1DRg8nDauLPBgpSZ8U",
  "key8": "23xR2b3VmTjyyYJjz91qkz8PAPh3odjPRCHqwqNoXPqM3s8UYtiBsxmXVuAZGT2xcd8C8WFPsbpmpmuQBs2tj8zR",
  "key9": "YuBeoL6pkoEgNmb7LmqzrsTq2cHdfUMuyefZU6yXvHVrdB1PkEvmjNVe5bUTnWoCjwSwzq4sgz51eDbCfVDpgjr",
  "key10": "3YUigrSGY4gyia4c5Y8G8Nvgn2p7mrcrZ2uWoUYKKX6mb6ZntRkQfyB9fPNuTp2Lazz1iMgV4Gdbo3dpMHjYju13",
  "key11": "MNpsJqpLJLdjPpVf7mKvY11k4XBR6sbxWBsUPDRzvcpThLtFxSZBMHtHGyskG2hN6jfn5Nx3vLCf5WCK29Lauoy",
  "key12": "2h2PAWkhyiTKmS7DD1tTQfGJZLkceMaLcEmJU8uU8agzSTHUg5rZFFhosCT1ngkahCctBjKwjxJRenmHwpet2VsR",
  "key13": "4zKUNEV5F7zmPZytdVQzCYS6zWSb7CYrZbvLWVxvzMQzKnoLjADLe51MV9ZqG6YAz3mcGoR67tkvEaSRb2EbFHNV",
  "key14": "4AsE5MLqyKK9TzrQ44jtF5H23xPWfKmeecKZtQ9cos4EPpunrrJeUZASyXMV4iMwnHz3QBPv3hUBKtp4yNHJzYW8",
  "key15": "3qihQYTk66U3LiMAhLuCqujNR9FEbeRHz1LMHXnSBj4vBj7uPoEBpxCfEUtjMFwuxVT3TePjt4fnh5Ln2LUyFraB",
  "key16": "36QkbcR3ZkzcMtZXkVVEkotWBG168HPDC6WSDcoVED2ff7rfaSLMfBmuJgtz8poxs6Zw97FqF4YDE46WxriRafTM",
  "key17": "3k8tW3xR1sDeC5i5qdCvePgzjb15ZdUn8mhbLy9eXVvHe3WvYDAGLpAoQicEjzVUQvW4iGY9hbtf6Qg8UZJvR5Fj",
  "key18": "4xvKaPkz2TKMPQfwG6ZMuxhNq1RcihdxQ27TiKTfRP4j58rf1baeF3racMUZ1uxQBfBGSbLgZqw5RG6hjH31Riw7",
  "key19": "2bLuZ1zuryhugVsqCsHNSVqJddYwYAjWJwQ7xgq1upVJHGSNmVHYhTGcMRyZbDCTodb5nf3zLdyD1v3Dr6MtRpVq",
  "key20": "5TMRFE927Sz3HDhdpw4yYyTY8qkvDhSCFMbrp6iZts3ay3D6QmfYTW4ZbRDJDWA7xWuz8GF1iZwRYJsfQ38Etm6U",
  "key21": "2ZFQ2yjtPu8Z54wzsgNvB8p8UXKScLoThtza5j4s1DedhZuauB736C6evohMKSYHE9o5dJF6TF81HzqCJbNcoibt",
  "key22": "39xwytBQopUTDroh9q92rFfWk5GuuSb5bGSi6q1LeX8nxAk9pirAp2zN3NuZzfjJhGpznTUhNS1wYnp5D6UQdwou",
  "key23": "BdMzohxJAKScvCVhfKRSxPJCmKpqrCmTsKEJF2wdasGEMamuZjLHK8fMCrop5t7vswKcb51LZgES8c7NUEw4GV4",
  "key24": "5Reye99sFsy3CdTZHjyYb7kppRmRb6hBDcoHyhygxGbFo4EpcVpywGYnZAmgS9FoqQpAv7JTjjC51BmL79vmZLbq",
  "key25": "5kiHzr2V47BeYNcX8NrUNew4HUfEuimZgCysNHsFojG7MmC7LoR5aHV1xuAGq87uwUxW7njuo6SnYMFb8W8fZkGm",
  "key26": "5u9TBZBJr9cdD4vrotwZuFjGetghU73XLcGjPrBgsaXTNGjRaC3y8VmmRbL72FfFGGDimQRLUpaNPgLw79zZr3rg",
  "key27": "aZT6QoPn14ZTFQJMJTkbRxDQGUxZetth8fVs2Dk3m6zB9DQK1UCWNsSHExHxR1QzMWfstuPebZC6p5Ahq84wTeE",
  "key28": "36ntAQAWKMX9eGJBYsh4LHbvB49WgLCc9vETsByGNfLBhA1CvyjrxiLim3mGfVda9g82sy96SjqZNYRhs7nR2S9e",
  "key29": "3QVkM1x1vfcbobbNaCvmmyqExYum8BASdShxyP7g9NiLhGSEdTWAiZaW8ZWYBCtRK2GqoCfXzno1F2bhb5xzZbZV",
  "key30": "2fWHShWvLUWENtrESZ8W1NUGmpyuA2y1tYvQ4DMhGCmdiauqmP6DBA41r2rx4nW7viAmyNYif7jxveiKQ6cNxhCo",
  "key31": "5rXhfNLYvKL86ZfJBvqXQZA6V6a2nMHxqY7v2JhoqyNPNrKsFkgrsqNcHp4CQ85SnF9dicrZoKE4gkDBT67Rh5zr",
  "key32": "9Cd46o5DMJW3hVwRtJKGDK3nbAV7NsTHLiVyanHZtqKLTtZenWp7DgvnWwz4feor4Ei8PPV5dQiscLAntnGL8QC",
  "key33": "39LdfDUdsatNqKcFxvSHYr1otYMeWV4PERGrDm9C1BwEz9hRYKbB9WrUsAgD14W1eeVdV3eHo25sDKaSzeCEx9Up",
  "key34": "uCrGhygydrB4VvuaLwEP5C1unwqtVbvSa3b2QU7wAPPK42W23YrchsiFUHDDxsqFf7SCjrhfg6gpJc5atojRB2Y",
  "key35": "Xcdv5Xq5Yo4TRrHKMXd7fh6szoVv88622vgxnEtTBsooEwzP8FjPZUx1CyM6QKR6U2jMKXuzQxTMhD5g23muT9h",
  "key36": "62dcLPKAuVWN6XQWqv91mFc7DoKjaQiWGNEM5yqhTdpqJeKTMXq6n3kUp9jSaVYSqbepsk6nwhvx1kcnK9BKzYz2",
  "key37": "43gUmtVWYzyZW2pxekJf4mbduLvESubJXUMZusQvL9tjxg4yqHwp77RfN3kyXc21cvkcQFESRDUyJjgQ1wTKt6jS",
  "key38": "4XbEDzUNE7wGox5pHtowvTafnY2YKumsVjZgTzrH8JD2SR6kFhKATstp4qbQhLYv6yhgUbAuQPSCpKLvmG5y72YJ"
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
