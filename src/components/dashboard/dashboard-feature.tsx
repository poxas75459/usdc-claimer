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
    "3PVj2G9c6iWcqzM7g9YeabGu2JdPDrAymWMdSXsQBuMfSU4CK2VoNWV5XARDd8VumqNgMqtAJFxNVCnUMZ6DFzWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36nZDZDqZubGCR6FDkqBhNsjso81YhgHyFJmvKKfmQoNXfFmQXHqKjqBHdHjseiSRFbKXy2sZX9cJmfo5ZxEr4L",
  "key1": "3nfsNLYSchoYEpoW5626xjvtFjB5VDpNWB3pP47UgTvuEKep7CiqomQJhBfygb2mWfU2BoH68y3NsJdMxSQnmbMs",
  "key2": "2WwCYL5sFTMZkLjrg56cNGx5Jha7eebbYh5TGdppbxFiytGjq7CWeXmVZpa9AnZhPa9QRL7RYeV8yaeaQRaroX4Q",
  "key3": "4r6MZft68UTiE2v63Qt2CgtKSRNTSrx58QkqHRj4SH4Wb8NS7a6GsQLpQBfGiUhZPaqYb3xL3ciAzjXjmCRmdEhp",
  "key4": "3miurrxhLbmSCv8CEc8ZZSXKpc23LMWxzjWLhVLCTefLX4CWES2LhQ9jmy4ZGMa2GbzTeT75pAKbR9MWzpaehuhH",
  "key5": "KoYa2eigUDrbKXVqZ6aQZoxL6yYAZCWe5sdApzn9pHUcFaMZoUbJRC2dar4V5gG4nPXvi63X8BX8o7At3wsHwSB",
  "key6": "5aamNgefEFx9wB4eBGLev5kThtSGjj1fteZeJy8ej3JtRdJj1Vn8qwjFm9g5EZZmecxEQoGZigGmCW7oZHQPA7Gg",
  "key7": "4Qunx1rLQSHhgemUSR6oyED6QCqSLCg4VFm1drs3PD18RMuf5Tpz2YU4LMdUJDnhvXRR3fYs7HdLnGqA3JVEwDT5",
  "key8": "4cprwW3tsyP2YmLkBDnjRU27oz1QK85XeiBhnsf2XgQ71d8mGvGMgi7bTBMrEneC8NhxXkRDWMc5TGmWVHuyUY9d",
  "key9": "4DotfCbTN8kARzTqWiRzV9Nzi4ipJevnqdRE31yCU6TVwVVStdNNn3z2azbwugMedGnAFwrkwCrRjPgpRKHBFo8q",
  "key10": "3tUqEkF9dox2ymDUTerCCJYgYABoUrTXJe4cVuD4U64Zw6osWxGUxocXLt9pLVkSTr9S1jPvUj9ZRt7D5dMg9F22",
  "key11": "iJCnd4mgpwpnrF61NoK6ikR4TMA8Zk9kVKVM8R8PfJB8NarwQ4uxgj35mrpCEaHwUzAqSkm9GKz8vp4tczhp49B",
  "key12": "4qbZBQCJ566UdpaByb2jChsi8RBmLLZdy4ycGxsVhpfyEp1YFsjwc2KvATvgciictRykZMDT7uhMb3kD2tzL3T6k",
  "key13": "42zy3pyeC6QbwGfCUwqZKGtvNPTgwdnSaWNc2UpG1R9tcqK7pnoHMU1FJVpZrXTVNxpwwxTp7oQysHEM2fok1hPn",
  "key14": "51xgbfyAnCCG2LBiXoibuwMyFpE3xV8RFQhMC9sJLcLa5aWX6SiWLA6kgB2NDzHfSiKtTE2fQzHHsodX3taWV7f1",
  "key15": "52wCpBFB2nrq6k8DkDS52Lj3ft1nEV3Budw6Qk3GJEpfXYspzPkJT7U8uwMSg9HYXJ8Ynu8JyMjbJzwEcZrpGjhu",
  "key16": "4VtwTF3aR2YejHu5wUrg7q81sPcsGnbYkpkF2o5bL8HN8MXREek5QRyNqbuuNMKfFZ1SkibzAccVcm5QMD4uPZ3T",
  "key17": "3tVx6sX3ZWVAPkPe6PCLGtumy65kwhc8pL8wMe7rVC4c5VHQP1yk3d9PGa5FMPm7buga2WAoD75aZh4kEHcqVrmc",
  "key18": "8Mdq3wcNqjjGeRh84BckD1wk9U68sDCF1BKaTG5mWA6ckpZ1izVAtPbo2bU52VdKhJnCceDApfjXRupTe4vJoGy",
  "key19": "5pmcs2ryV9ofpiq6nDmkKJwDZ73QhiqosvxtWhkEVJxG38EYW14GrsGcji47wGMLai3ADd6ifStDyXiyDMMgCk2",
  "key20": "3tmt66t7riSC2rVip4z9JhTzBGGnYomStfXvJvzTz4dD7koQaCKthXJuSypQpwSBEz7D13jQZirRGCFt64CcyKxJ",
  "key21": "5Y8YsEccZwbyekQG3dz7zJzBLYwarUnqaahRL9kEgUe3KFVwXVezHFCKMmcQ5vzx4kfPnEjff6XWJ2NVpvtMrQT3",
  "key22": "5TxXJCokVFPe5ssZQcjUitG34BGaisQEPbyxqaqAz5uqNiqzH2dBwyFivRuUzEx78R7tEzs5En3ZtiLz3uvk1cBM",
  "key23": "1597RfNAiup9e4XoxEGYbLZxMdmKfrrdM7LX7onHoF3HEcaaCXvrzjfNrL7gdhZiXyuE6skLDTWoGgjiY73bw82",
  "key24": "2hfkj5hbB6QQVjjUjizYRfgwTZgwtKPTGZkjEm922SSFoB7crxzkbUdvqhS16p7JyMiY7H6qw35Xa4FHZmgf3vzK",
  "key25": "2LPXggfKwseQBb27Q4S3rYyaN5WzSkmXZp2sSf6t5opUrRV9UMGUmjbgHmEyUZfKnT9LKMmuXXEzmR94SzUsf3zR",
  "key26": "2axsTjZHn8RChjzrdTNCJaeFVMefRPycw7ym1NagLMZEcSYtLjdqgjMuFRpJ3umgw6KLC5Jd2zWB5QiVhnW5d3f9"
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
