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
    "3bnHKzG1SADdGkgWm3TVvtdwKzY87ab8YWdGLpCVB7UMht8pCkbJG67h5jYVsG9on9pq1DiKDPJoX7ZpJHawtF5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpS9D6jTxjv1e1LZtAsCab67HPvdw75t2147FXp55QBuJWFR4AT9c1UmTHbXDgsU69CnuX6ZpxqAMRdQvjtC6Qe",
  "key1": "5rDx9cEXFCZvukqn1b3sSXoYmRRkFAYRkPo1wPi5ovhzeyLuhaihsNh59bRe4n5bVee3GbukTNPvuqwmD71Bsox8",
  "key2": "222oCizSrUinLFRZGDqwfLrbQy6h6uNcWrpZyDttxqSXCRdJqXmXxZ6zg1YigMPvYarY8sRWc5rXehieoDnujng5",
  "key3": "yksR8MJJLtxBzLEgWddgyfnEdaETVrix8ZZFriApF3diNk4T8NZ1WJ1tDpJsPxS1R68vtSkNpLunAVRxbzbbwTZ",
  "key4": "3u1L6BhszJrPPHMWCXPT3LWu3gEf6DgRhQSu3TACuAmTBF7NTtukh6VLaAFmSrh9cm2FeLWsiDJYGkfvLW8jR53e",
  "key5": "5LtioSYFC2bpciWmMWwTsra4KZjeZ1UZwhg5ALdjkYsBT3LAqMwP5DXnqNc8k3ex3fGLBZgXG4Skmshbeq7DZKMS",
  "key6": "4b5DtcJ29uPFGHCXEbGnXie4SKbD7XZCop4CToCQqvJkRomKqYkETdgdkV5nByNYG4zSsxfUypWtG5AD82iBgMJL",
  "key7": "3t4gcWmJAkqJcH6qkRQoG5hWXUpYk6SrQrSdTyLg1BSDjuyiP4Tr9RX6taaroi8d6K5KiUge8h77Xp3RySYbFvRV",
  "key8": "dc8jQu9b6bgN1iB9qYajnC7aM2vXmXRFPurDwpmR1PwrAYEtjvDrz65AT5SsztdHsWJPATYkTfGSrCD2zRf7Gpd",
  "key9": "Sb8nfudbCX1oNZCFd3YgBMR4sEAvFP8kDJ59PrbpuY2HVCftaNcGq81CjLnyHBhEmjUEH6AzxYREUy5nWRHPDTG",
  "key10": "4xfR2k3nD1CmWKf74TqeMGMidRPSF3YBtKPanD1hXJYciJjYv8FpCCujCyR4kwgny5C9UDwH5rhZFXM4hXRV1mzq",
  "key11": "3mRZVLtNxPAg5gAtDeJxKohX2K32y7NKG7KcqHQAyqd4d7WXbeQdDc82bW9j8vc5jSixjkxcJdVwkrz8mEY4VKfC",
  "key12": "jX6A9c4jHUEisBRgoFvedrKFQAENBRUbLuHSLC1Rt93ybUoKAwYmTPT2QTLKEHxDY5aNgVTkB97rvYZMY4ANvHD",
  "key13": "3zBhy8xJhuUNYyBcWVRXm2vhyXPMRi4EpASKUj2KygbDyFhbnwDLeGoqAfXy4tusF676DPeGnpTMsRKhjn6UK63U",
  "key14": "47Eq6kSwNpXVobKLGvCF598vZghVnKQtE7F5rTPeyajnaRxAd7Rv2saXoCPAPnr4MQp7tXeZs2QLvyxpKcsmouLd",
  "key15": "4eZaDsED2ZyBpGMNxBrApEZHXj1DNKRQAM2HLeXKQJjGeMc7SiXQbfvjwqVcunVX5dM2tAVCeLCXyQ83U3zUxoB7",
  "key16": "dKDTPkukqn4DsNyir6S4oZ3oUXitotq1Tj8n6P25xUg4c7A9Ho5nSSXfH5wBN5jkC82GRU2A9jh1DPT2Ucgo9mz",
  "key17": "2QBE4NDPfmV3kbjRSyQGFi1m4TkPxnNqzvSkTac9zDKKb8mudq88SrBmQ9YKT7rucb1LKfdTdxXWrjUAxSoTa3W1",
  "key18": "2mJgJpVwFy8chLa2HsrMVwFc9ouZcZiXXnSoS26gUNDVCYfb13ACvgBRCXxg38HjYjR2Z7CqWS3UowFZWoHpNPzb",
  "key19": "5NcVKmQKrbJnep6HXdix3D8yZpWca1XuLCKnUZ3vFS7614PdXDvMBqrLum66ZduLGrbbrSWDMKG4Vyu9YqrQKnjf",
  "key20": "5jPgh7SFxd16pph8QMcNT4STe4RQZ6kXGsAaM5PjypbrctKDG4aQquR6QVQE1iU1ZgJnBxFriSqNWJFmPYjutv3f",
  "key21": "3F98i44FbXsDhFxxV1WfvJKKdphL3dB1NNDS7E22MmgpF5kjgfYqmTRyfGXzMezUpzL8A1hQs95wiuXmDecDPnGX",
  "key22": "2CzPPHf1AhWDkRx8fKiGWiJfvR9FhqnoAUAR62Tzgf1gnP4deed4K9p66ExNYt5CCVcgprqpNnEsoU5A9TzDW5bK",
  "key23": "4XASvSCvMYXhRXVUuLVvq4Lu62XW3V7iC3j1ZcDFzxxJx7c9HPc2w5YnjLCwmaKWyUC7vh3agNDarpmTGfmpHMia",
  "key24": "Puq74GxXTN9JjFvqecSVvdpgEcUMB2EiGxwVG8zrXKYgqsLdo8nUknDY4L8G4WgZX4iNJvZ1WLCewknaz7MG3bi",
  "key25": "5HsH4vmYjW7UBXnu7Y9FeHN6FLNjR7mCcJNjzJAhQ17ifmGum1b6QA33mgU8ZUEyrUpeKm9EJJeoaJv8cXq1SSgK",
  "key26": "47g3EaV8caEMkr5LsaQPfW1FJFxJRwM2vRdpzLKGb6YRSMSECFT9AUcYwTMskDSNH3hUk1LB5L6H74bkycDh7fQS",
  "key27": "2BCQiiLtKgUZ8QhmffTSjEjZwei2NWsmNQdNvPe35ZmYKbJgKEv6somBqwL3RPgAYgv9cEMg1xc1vp5JGfAwfUYP",
  "key28": "3gfgqHbhaeNbgHrqxcKRAxp6VTdhcp4C3pRc23atEVfSNnDMXWZpxmdZ67pWG4Mcxw7No9JVRNYBBvnTxcZDWTn9",
  "key29": "4XWFGxWEfTgHhg4E5baf4qX8GMjMdGLmHRJqY3KDYz9oCR4goVhiW8HCuPJgmGm2SErjzuU95y6WDMWbsGwMw6hD",
  "key30": "57ZDxXZrSQBw71BV66GF2vYgap6AdFQcqG4LUQFNiyA9eqPPb1ycdYmukeaWHpitcnDnPR3oDixJ9q3VaAe2URTK",
  "key31": "4ADSQhcK2RsEWqcSe7KozhCuFoTEa7B35siWCNNt8vrJxTmz6csXKvePCwTAG6xik3roWVf7KU72AdWqMPT5c4Rn",
  "key32": "zh6qaKkgHQFLZuJSivsSCDXMsfYweySHoyNEd14r3dfSQbvDF9X5HsPfiR8fyXoUsG9WugbkK1114i6HoNhX2t7",
  "key33": "5hHywVRL8FNTKnmc5X8M3shVKaRMgfzu5JxzZzD2oBmq8zgNPgSKgAaG1eHMh8LJdikatArTJV67HEX8qcv44Rbu",
  "key34": "5YVXfzHw6EJkyYKzBa5qJhj78m3LFSUsaKRhE1C8hT4SNBH1scyUDufKpHaoSbDQyug5GQPZcZmmW12UmZb1qEQg",
  "key35": "23Rpvs9LbEDfXwuY6Z6ua3jMLHFjFVGU8aC3f8T1P5WYADztvKLJRYD7GbWF4GePFXKXk7PrUn7q5P7HCZ6rwgWN",
  "key36": "2GZvz1pbc1x9KSWBsaXv1ZY7UKyKNBMZkDxxY2p9NzkjtVrZ5mLY5qPKvn4QDT2K4y7ztFSEfMRf4cf7ojwn2eoN"
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
