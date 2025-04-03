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
    "2DqEL3hdVDj3HzXeuMXRrvykzADfpKKnvrARwGzCEw9ESdGKfNsp21KVa6SodGMGpR8PGSBX6tkfBVjo6ax9WBiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3m2sW8uKc7Wqe1Z1kVmhFuzYd6FjviQJqP9wakjnuimWBaHnd829N3CZGFnd9PJBFvsGZ6XFnhMZLhCQQ9jsLP",
  "key1": "3v97c4XuK8JHLvbK4J3VoNJsssvSgRajntRpKK3Jodui3aSPhmcBTq1LQyG4WDhQhzzc4KWJgu6VBS45iRktyLG4",
  "key2": "3wtyrQ2z3Bm3wWxCcaPwTfGgpKopZpGsjGG8jVfvUQRQSCJ6AHibRrv4h8nsVXhk34ahJpeM1pEHVNgaDWyb9E8X",
  "key3": "4i4g7gQmvDhe5JyjxFrUimXzkrxaTPmZb5Z2ESxuew7q1fqBeWehPHRw6tUduXreph3mhqroDwP5QiY2m9JS8nzF",
  "key4": "22yxVXUmevBatYLnV3oL7h6euz6M71cMb1yEBEEZVwPv7K7AKdrBP9MZJEmW59UEbygBucy2rDn3vN6EnLwJz4Nq",
  "key5": "2CsUKxTWGxGzdjRbX2yW65oSKcBqd1M8r5q4gerjVxcQDGx8oDYfyBXeyf7DSukLSCzimMB9Te1WJeny521aD2KU",
  "key6": "4CKcLjU5ftV7vUZdRYMmp5hk2rrq7vYtKQ5VSCvU66HzJzdvuScSoe7avMRLybea3ME3ZAaatmvViVAecNr6yWvP",
  "key7": "3XZXvptd9wjBZfmYKedKNMxJUimNHEdbtQcMiXSpbzDPdoF4vrVJUN58iPU2gamCrMRXS9dwudoVMJJ3gAr6BQdv",
  "key8": "nWB2NkkhN48NvS6t2UpSWvqAuiJtGrJBjN8h3jbNYSCSExB5UN7GRvW2vJsc22avprz1yAtnCEB157FcFFCARyg",
  "key9": "4aYEjpqEXqqXuCj3h8ni3L9Q1rhdaKDxqwcUjN8M8ycZaNfmpUs2tiR5fpG4jvy6PNsDFkrJgMDL5ppgQCirwKPX",
  "key10": "5R5jzvXFUmtg8dYUBP1hgayTipN9BqH1ffdxVmgac4G6CRuccPGw2Q9vr6d7XpVGW49xCEgpzKeBANVqdkfDL8Z5",
  "key11": "vjM5aAdqDxmfpX4NnJmFoXAxTeRHGWL6wqMQspyze64USpegcVmJaApqt6GBuKwP93nATthXBbQPNYrJmz6QuwC",
  "key12": "3naWmTEkEJp9JWoaw5RbMb2GtXMY7LSyFrkb6on3covMVZQzkTtwFQY36xXAJ6XKjXFJxjjBPgYFrkXePfFzkT3C",
  "key13": "5ecJ3haC8kvegWN7B2qEUCoAC9NKmULpZrGehwonVEXcZcqrYa71jMop9nBoxyZApMNdtF8NVNECoQDrwewPeKwh",
  "key14": "2e8yB2rKsUKCWrzHFBsQkjqUGdLUZs4TNWyNRei1tLBmxgZDT9JWHR1bVfo9HEMLhj1f823YXW5b6ySTLnyYZ3XN",
  "key15": "4Pp28fwKFeZPaQVR5hQk11WZBQiUVRcQZSaMNKCM6DHx1eh6py1xyuB5pwptr56uKvWDTjNikKKYux6yrygk1oZM",
  "key16": "42Yag8kr6yf97sc74q1nPkqQktPEQyaJBzpcirSfXbjejhhwFwmkszFEURwQfSJtXzK2hHQCYXvc32egsHw3Ajs6",
  "key17": "2ATcwNkVSxUGpjyx7LtmsEniwi41uQfeZh1STfncak1KrQQvkteJCStaTukXhWw8MDVAfutzaUocT9XWj6fQwQUK",
  "key18": "4T33GhpKYwDkYAbP9xeAfjJTi8VgEKW8fT9xiusB4z1bb2chisHABikAENkCagQVmhXhSWSwd3P9fLqEfR8kpmJG",
  "key19": "sTMxxMADjcymKqX21nayhvqcnzDofjQ44EWpyjwGA4bsGrw2imhzdjHzdDLW3bJhkZKBALYPmGaaQcYaWhvD8oy",
  "key20": "4gJs7odxRHDiu5TsnGbbh6XQg5hCerE5E7DnCQou84pu4AjhUzHDxXovqzpUb6Mrxr46GUU9nnLFstch2UgjSv9G",
  "key21": "3a9YcqZKVR8dTfs7gD1RhKrzaLbhXrjKgxLvhcsQxu8skV8Dtt7yp8pscrUQEeMAAGS3PRcpMJCiYJGKnz3BSME",
  "key22": "3oJxzsaJufmqPwEn6gjjsSv41vJMP6GNBbY1bTPx4XdeLrcsswoYebw9LX8WWXVBwJV1CBtRDMfXvJfb6JeSGhgA",
  "key23": "QdzQJ5m8Jw1QtWxA5yJiZJjom7p2a5rHqkZz5d3WM4VdoJ5NG3t2bv53AERHo1vBJxzJhsiVAJtSZfvpmNqXjrc",
  "key24": "H87n73KgoXmUa8tdDkBatXRhTpzbsz2Gcb69qFqzd3mgb3DVbYQStG759emcbSmr9LhiLUZ5LytwAz5vBu7zhxY",
  "key25": "56KmPijPGY9swUqLPyzQvUUAXD8seLn98PnwYxVRQPMKpQLQkh5B1bzmFFY4h8e6pzPy4EDGMyTHwRP9944RdpGn",
  "key26": "28yfNpvGKKzHHQoSs8j3KQotDKY4tCvVvHuQBQ9P6swJ6URbMgr22AMroy1Y2U4qKy757rFh2VyaZPV1pT1dVtHh",
  "key27": "62FVBGaNizxsp5xC3gxCKVpQuKSB4C7cjah6JanS1J8nuJoaatprBCVkuwBGLD4fUAh5mNxU1f6XpJFuE26bkAHd",
  "key28": "5C9MhUpu9ZYz41z5TyiZH2w7A3XiYGRJ5cG8P3UKeH2exoEhXSkV7jFNFEYxC1k4sn9Dveium39Rsai8g4GNTpQr"
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
