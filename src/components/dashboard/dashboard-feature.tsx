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
    "oq4y6jH8N1S9LwShgZT3hyh6WUXJ7Hh7zqChojzALc9qVMKga3ZgubSj3PJEY8vx6ocZM5ZLK7nai3kG8jEuNFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51DGeiAfsMnNFwxKmoaiKQpi2foimwnS8j8bhGUaafUCejPHKjB3v32Tif3UAAYxwHJFUAa716qunkaLffR9hwe5",
  "key1": "5nqHfN28GvK8fcSYf86js9eNGKR5R6emeZNe4ghKahEFiN6u3mxobC92n9vp942h5655i1hUp1qW8pB79ZX8uo4G",
  "key2": "2aVoJzGWJT9Q9ro8bUBsdVALcyEyVgXE8tCqE8fHGbFX7towKE5Px186xG8SotHtL19e3KWzxAfjk8WWeoA1pX8F",
  "key3": "5odB7X8Rz9Tj4wKbcFgS8M1h3RTqPgaTzTEf1FREN5uhFrfEW1yAqXckXA7nHVP9oRbpRMvERiTPN7tb4NX8T16r",
  "key4": "3itCKqswiXFV57BYHg3rwuSf4h2hqCL4mF3PuWXAX9DDizgCKUJ8vH9LYrVP5JECA1baBFV5Q7YREL1E8z39SttU",
  "key5": "3L6LxRg2EvavA9oXPDc85PYRSRgpzqbDmRpdNFnM6YDkpLrKvLpcjJmmgBmV8QurmzcPYrkHsZ4XKa3cyGVscJPo",
  "key6": "2c1CEHB2gJgHU4sL3nQMjuWu41o3iT1uCnrDaDiCB3oncXzswKwsYsjBnD4ZT1gPpTFSwUDSye8zmUDShPpNh1aP",
  "key7": "3rbLWF7a7auzvW3Z5dsqh2pis8pviECumZP756fbs5AionM2Yt4PVHhdH2qXzWztFpewpvJPAJnqXgL6oEm7wNas",
  "key8": "nQ6XPd9PY7nqyZuXcRE8ffWFEZGdkTHaKL8HRdmfcLQgXbYSJ6bgfJWodc9mzVq6HYMD67fvnBMTSv9Rvhc6hgu",
  "key9": "KFfkSXC6gvCc9uW6veBJVeGENU284MEaSxAEwiNFqVrWMmBYcc1u3C5mGdMksJwVuiUciMFvktdFysk6szGjxK4",
  "key10": "HYPu27Vg8qBcBgGhwCZArTrPeXqQjnFFYnJM3HU5NPphjpTSFbwAudyd3ibucvqmZ2DiajF9JrNDAGdJPNwVj3e",
  "key11": "VnJrYEgVevQYebhPudhoSxsiP93EQpkVEB26JPYGT2y5CygG49mote46V4NdxU4LcSfBekGFny4tdm5g4ecqh1S",
  "key12": "DfQSD1iMh8S31skKbbGEUZVJpdSvffLfpyZhxyyYLxddyFKo6o8wVbKTjushqEWX8qkXue2crZsPGawUFhmudv3",
  "key13": "623urfs5TcXDM7D6bquWhmeBSZ6CDhXze2sFD4hbgdLAp9F5EKdAXrES87t7SXL3BhE5eRdjSY7Yud88NcPrWgdQ",
  "key14": "o4UviKLGwsiJ3ZWhcw381HHuZKFr9tbdwbSaqnAAv3SfsYKVWPKTf4NjQNJc9X835RznDbbArxXPf3JacMUQgTe",
  "key15": "3NoLxF5cJ3NR4ZGgmXBRFP3DLxsGPkzP4LE7sCccYVP5kxMHeyUE58cSyynEXBytsLJthvEKY36iE1ZamwJmrqaP",
  "key16": "FDeRhXGJKGrvD5QD5fEJeU1o2F3Utut2ZX7S3sU6XXvLKSgCzAGPcU8GQTiW2p6QJy4JdbZbCKqhqtvpPgeBTgQ",
  "key17": "4H4PGfgKozpCZbDoyyzULi9UFf6k4Yu3tSZvqCQJpNZe8Q2V13gZWhwgWfUYV8RSBngnTz72BGfvEzXsS1P9Gczu",
  "key18": "2B8MaNtSSiLyc9mwWqW9XYqvYXxEiaWTAPhfKNCXcku2rUgyuQq17wCbbvU1uYyKwdJyz2YVR54NzS41qzGraoZu",
  "key19": "3PehdXakZx5CKLrM9TvnHh89nWgyVG21VfajePuB8QzsHxtZb5hg1Uar3XvNixXbHhM44SX77PX2d3EAyH3m37Hj",
  "key20": "3FwNJuX1n3CqMpSeReg6fW11KhbfLvC1CwxQcFybyB8hEX8xPZR4wabKUHM5XaUtRijTXUwRX8kRnHWCWyY9xmEv",
  "key21": "4D1ksLiKSGcMxBvR3rmTv33hPwunETA1pRjjAPjNRV55mvQxjbnocJuYvSmYj2BnyVFoESDreR4noMm1x37o2BUq",
  "key22": "ZCzAH9HQQ7hPEb5gNbmKsKNV4RLCMaN7JwDF19oz8aH99hFyPAFAYAfyLHU26eWNscZZqJxqSMwGa6DRdSSFNkj",
  "key23": "wVVT7FahZG1nioskR3qXzQ1TuMq4mJAHMUAghGQ1zvqs3RjxLjHAsRDxmv2cYLmnfGeFXV9iFxwLYo4JPi3CZSG",
  "key24": "3DnCGLX7pJEfc6ARMpEF6AHifEzMyhfZR7uFEQcSduncQfUM5T1rkMMPwtSXjZobfUiHV8XfHnAV8fMiPwdPDfpA",
  "key25": "4fcVVbTEos2pp6HC14ffAVVQM2grn3V3bVUxAhNKx2iVR149inyPjv9JyyjChgWcDoDYrq3pqLTuEEwnJ28ERyny",
  "key26": "4EtLCwGvgbB6eCvC1Uzve3T7tAcXeB5GTVVgxHZBdTUaKSPdGtkh462faetp7xvrbeCfN2odFrTXFg8uLu7NELS1",
  "key27": "5SUkBzLTSatQwi1rXjtMVzSBxNVAnzdXCjww3L8MSdDabDjqBMa8RDrsaKgjptsfNnzotqZEMoaSqQMCueZLhvQH",
  "key28": "4spG2LBxc57RHkHe5cFAzMd8t8oVPYkm8gLAXaQTVysKg7woq9xTn36vg1MjayUFsC4VjwdEYHJeRmsDJFrxq3zy",
  "key29": "3HPf5E2wY2qxBcQQtXN5aRcxeE9RNitysvNxjrqfTYkQdC5gBRZi4dYjSkLNc47CazfwNR7JVjWFGxpVu31GUTAb",
  "key30": "8UrGv8m866D6MZrFe2xZDnwsdAUrtRMrXbhQW1ezmcWnxYiaRZqmYfmzvKVANsbSsu99K16YzPVb3hktWxiSQJa"
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
