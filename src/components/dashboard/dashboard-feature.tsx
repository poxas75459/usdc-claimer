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
    "JLsUNYqUsaK5R5LkxNKJiourMxBD1hQ4PFhYaKyRkKD6AsXNdV2uQ6DzPVsDEgnLfGPmca7hFNGn5fiYzaF8Sqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Z2bA9Hebpfg2BhLMu5QX3fVwKyE79aaJqqorQUjhtzcL9h6EMbMan9g2BPv3ELHDNPBUspwP83YpuquHUo2cbA",
  "key1": "KzbzpzMS2mEtZ9YixCDZQrKeM5tUKdVCGkUSpRdCfCxvjiZHpdZHZC6X1F851M2EfWPYoNh3VazK7FfuwjnkJq8",
  "key2": "2XTLD4hEyr6K4pQakBLC94C36Y6LViG98RcqYSrXd1qCbE5afp1WPqtbE7jWqoQG4uqfbDVQGF5prxhi8TGwn6zk",
  "key3": "98EXu4DEbUdqjnzzuiGE4ocRb2RSbxdLrqKgqyvjovy8s1pAZ121L5Pym47DrF3d78iwwwegBykTiYwTSzqG52h",
  "key4": "rCKouTpo5eG6ZxnkLkAcnkaEjGENjrwNigc6Y7MgFmkQPG6pyEsnfiw2PhHhayDExqDdndnc6UFdYyp6bAwFFjt",
  "key5": "5NfRNwgHr5fnTdCiu1ayUAHsiGqyaBkpYB6wg3Nnk9av9GbFaAHNVdUv3myykSYM7Dzc9xBfPeJXx2CtAb6GBLe3",
  "key6": "4zWv36Zt6QwrZjiwZwHi6a2PeKLQMfuRtcqmEf6yPU65PgPzN7GryRfMQkQFcXhPfqZ7tGPhxcnLtZ8wFt8Q76LX",
  "key7": "ZVumbmnfTp7JVpfsfxQhNtmR1xkzv694LXsesfdB52iugXhctdvhqTVa6nzGwWUQ94s9DGAA71YEdmt18mZM79x",
  "key8": "yyCEpUterqhFEwmwArHxLvgDJWvHxvDDPNCvi9Kv29ZkuidekPP3CjDrCSC4zN9pwTiGZY4EJgUrc9qaXsk7Xo2",
  "key9": "4KwhfusYnFYMamTnwHgmBFsWMW5FRhHMq5vBmNrqsALU6rCXExtVbar8byhhACPNwhzx1hAYf15yEWLyHCMYVGzx",
  "key10": "4kCuGiMAL9FM3a4NjRxqY9BZPRmrn969Bz7eZD1KnZqfeKdowUXqmLbAjheKvCwuRzjmt9C4VCPTihVpjkps2yJH",
  "key11": "127y5Hmb8kNrz3uiDZW4Ynqu2hLzbSEEr5vcaxmowvzWfqVuzXCWZK33uSaZp1JV4uid4cNfUtd4TYijwQSKF7Qc",
  "key12": "5u1w4zw6aFw5W88gtgVxGAVVZYzyABz3XUtbzfviKZeLW5uDdosHCHrBVHQEMEegemcCZo7E6w1Ukhs2bF2MpBsd",
  "key13": "yiPem6icD1SvPR4UTgeSXEN6gq3ax2FBJCsroc8BuyBLBfALvuB4WksdXVxmcQ9TRZBNzNvSRQGA4cftTrcdLEK",
  "key14": "2XV9JSnQGao9EcwiAHY7s5MPp2dp7Nng5LtLfBJ7foiM2Yzrxy6QPHG9yYGWvGbJCsaG6MBt6i9kUFoMuNiKH5qX",
  "key15": "4t9r1qjceiTKD1WByrF3mwjWRdvYnXTRju86bq3L5isCxsqVNdLxwxi3uycXtG8Brr7GCB1PvtJRQQMx75pEYyYC",
  "key16": "2PDYWAQh1xVtqbRqpAJedwqEtFAir27iG9WNN5GMxCDW58W9q6PGtSWurG6mGdeoKA9tzt59DteNDoM9d9daKfT3",
  "key17": "2G2aWmtReDJFtiSV6rFXY4oVKsRWw2HHGiCTcDuaQNA2mqYvdQMTZW6GxPghbX9ai1LFxCFsFg4o959jc65PNpaA",
  "key18": "623HCei1wcXGdmirMyWLLLh19TVwHsmDxBHLyMVXzKp9T22inXYFMgZ6W86LBkFLyyG27WWuSzspAUS25GRY5aNo",
  "key19": "5ZJztY2gR5r3q66r9P3yQZVXzGfHMe1e41gzpkKnw19skZLwMMXqrQyhroDAny11usvQMpfJZNivHQk1NhTS4opq",
  "key20": "2zUqtTzNrvy35mR516QDwZEN1hHrkgg2fLpKfPFqsLpAtiWgmJBBfbovwsTKhiNwJyth9cEo3LDMaTeYAE2mmn47",
  "key21": "3N9ugJYuBiRWdR52z1sLBiSxBCJLuNzZMoJnGp1n7FYc2Y2MAwXLs3tFXQwuHYhrK4dfzYB38r9cueHpJxYJgXJz",
  "key22": "4J9bw2M9V9G2r7RAeG2evvJCCTUeWWBvFV1ji7DBsorEY8wZLDpPwFrr4yMzF7CZ2xi3iLq2uAhe62SLTwG1DsxQ",
  "key23": "gR8MpBUC1qk292vtajCpZsSkWFgNc1m5u8VzNGawp3nytuY9VcXE2aTWzRZvVWWVt4LC5Ktt6yRSzdoMRxV5MzN",
  "key24": "HyMYrgPJoD82fNvJt6FYYRYz2xiERukdTKrVb5CwUTViW7GNoqR3ady9a7yVAEKXbNiNXFEp6owHToob1Dd7YPF",
  "key25": "5EUBsm9ZGQMT4MVTdX7CPPEGR5DVnJmAX5Ww9bAvgpxk6QL7GqnfQSsFb28n3cKwG4NJ8MzMYfBy1RqN7nSNYA92",
  "key26": "PoYsbx44Dmz1vy6hRhMHkSec7L8X81H6kUEYGPkYQNMzujGkeayUYi43ULvw6gJvs9K3FdSBPkyvyPXmD1vqpGw",
  "key27": "2De9yAnjnZPVN7rXV7GtX87a7Yt5cobCpjr5fEaN2NMfskXmfgwL2J5yv8W324gGDN9qBfLqn9UA6cfKbPfX6k5S"
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
