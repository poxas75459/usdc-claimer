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
    "3kFXcJzQuhqDoJPcxNj42EGmDxqodf7M39ViBeJ3GBnJUPNqt5ZMwSj5VRbAaNwSEYUGJUFWkks5YTFxkJa9uRNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mk3sTNur2iQqWtK3DpkcoNLmVyuVUVK7LSSDciTa8pu1uohLj791aJHYkFnUNcqAH63K4gPM8p4Hfatz2Z67NeR",
  "key1": "2vdu3w3ekzLWUspSQYXtHTKnC2j2xe6gBuM7Af5fmKQSVMTdewHJ2YkS48h522nYoj3vGYoFYweoarFH8ZT9MEpd",
  "key2": "285nS6DhzdBj9VzSND9FYarm8YeAV8bZXucwFttqo134eywdkFd4WKz6itXp2MWnYfUdiEf7zWQUdu4fVVongsDC",
  "key3": "5Nqv1zb4Jj9FUwJJJ43msxMcrKok1UQPnmZoDKNx4VX6CK8JDL5bw5osb8H5QDqSLV8uYN91gSCVemCerY8KTmh9",
  "key4": "2CaiKEVLSGL2TrrqyPT6nZVxxgD3Zkypsqhi8QbhjNhYkLRbtSaBq7K4mvWhumd1kovFRKvPEGRaNwAi2kGc7Wwn",
  "key5": "26te7SmNdFvMDfcAhxqvxASTTccNM9K5qVswLWKQouvDJo2Fy65a8akjYbED8cP55r9cZX1Bep6n31z1CHWjX1pU",
  "key6": "21Vt9M9HMg7NpZyKLkEikhG3fNxr9GbmEd7xi5EfzBnLvQVb6f54uq5nVMMspAtF9uDhSjud4cVkCULKtFnpX7SD",
  "key7": "3Y5tL9TVcWkoHKqNau1uzramLadLTPjzxAP2LgKNTroMdxyZSsmN7U45c4LigHKVsxc11bRh5cxgVqpciDoASYe1",
  "key8": "vCG51aphjnP8wLCjvwofHQbVuUB5itACRJob6EFFakwi4HSMfZBu9nXSWBxAhsJt3Y2tJ6J5yav9ZqKTF1Dqpyo",
  "key9": "3jjBr3dreK2QygzH4P7Qd5EFt3HuAVoTSRxozp6gcSQHdatdAdDEc4hVDej6YzMen1QruMEE5gPv9KnLhg6ULWen",
  "key10": "28JmrHPfgNZ5gmmGhHkzV1Lr14LYq5V8fXhVDUBncYnecsKUGkodLQWCkC3Enw6H5acimFT4SM8F6w23gRWkUYdS",
  "key11": "4P6b5mChXS9L3jC7x8oBZkGgJcVyptbx1Fu6CJ6M52kgV4cUKGStMbMxWeazWgPYY21Yq6SFLJ6TPVWb2JWJYiAu",
  "key12": "3zfTXRQKwifHcdVUFMPDPAwRPT1orsNU1nwwqjHk7BhwrHfSvWGjs7kFgpJxehysL9mcUQotS71myMmSaGsfG6i9",
  "key13": "588JRgYkVMJGx2dYvWBXHynKmLN2qdMwpEFG7PX1QR5WwnbG2XuMLJSG81k2JX5G5rZH5ERFjdeTJeNivWiFJxyD",
  "key14": "2SywX3oQgC56x8a4nBBfj36JxGg6zPK1YLdreqzt2se96W9q7B3wvTZpXLY7c2tjtVwCJvZb5PyQcM8Qf9vakikX",
  "key15": "4zDnStYukUpDVgFzAEH9yha62u2VyDVmCfaf7Q5vK31ZcZgghgF6RjjV15GXySLeuSe8M8DuQjHLy6sDemhHeNWQ",
  "key16": "4Vrz6uEjhcbxPpGg9SScmzfnf8W2oWK1aQUZNEc5TF13NRDvwyQL2Fcns2dsnUgb3kffk9u27d27GWghopJYpu8o",
  "key17": "wWdpTLmYrZbsAEZzn6Y31JPmUh7MzZVCVUG9cYLnTirXyVxXn9K2yfjMkrTJAbXkkPeKzSryHZc1XSyhVX6xKj8",
  "key18": "2uijd3iaGh2kDf4PiRFtQ5wT3WYZgjqipKekQPWXmbNvaupyq7GtaeNDBnTdVhoDNr2V9M5jfAEwMEn8m8mvfYT8",
  "key19": "2xu16BE12kqGkrvNtuTPpKrMqc4YwMs9zNwiVdZJKum1su4dH6W8KRDHeE9spLc5w2jSoYLvMMPGj4xeDhB9zCry",
  "key20": "63BqstHDPsQaGC7sC9iXp5r3yow8MZxczfosqbasfE2RFraUwBVpikiHXma9Nv3k3uZptiYMKVn5i7JGwH6ENtSn",
  "key21": "HqX71KC6mqARnirXtJ7k8oxFJVs3epnb1TzmZJnCtW18WXXSQ2dXgZ6xg3DTXSgbdwN3DVV4C3Q3PE7NvoMXpNa",
  "key22": "2A1L5JJv5oV2VGqSC6EZb19XtmEsWtvARgwJ3fhoJ3NZ7VTQPxVx6HfsRLVVcpfhhiUX386ZbxBCFm8f9whG5QnR",
  "key23": "3LrUHAhtDjYYYojEmTxq4X8fheWoimJGh6NiPzqvLyY72o3vQyjdjvowmKn37t6QUbVMV6hBQCz53tvcEuZtx2nB",
  "key24": "64ygfa1Y1jn7oYCFmcqwk4GeJjmo7HbZzaVJwjc6ffKLpZTVBiMmCYekQdhPkEFsn15TS9XA3gPBmqYD1Yr9dPMq",
  "key25": "43Nbs5Ewwu3xKJfNnLRcUX3xJGk9zfAfw9zngraQh6xyaWsPLcVd3B4raDJ6vMxHnjeLN7fcj44Ei3jigFaUroB7",
  "key26": "3W6ycgPpXQhsLR6LQ73HA7ik1EiCWPUzwXFvGQWxNr6Pm9geGWuNexoLxhN79MfdSsbfExFPNqP7LXCBeEAMD7NG",
  "key27": "weC8ikeEXPNym6qBK2SUZ4hqKGL4bDajWfg6vwcK1aoqYiH7MTbKzagDfJTKDX6LWuh2Dc32LUwBza25qjLYaRr",
  "key28": "5CYApZLBJPfdSHERUG5azbNSgHoBw6bVnE7fDbkgUXqE7mX5DmtmPyyFKLZXBxiovddPHn5tXKWpmvtQehs9ZufP",
  "key29": "4EnznAFe3Z6XGseEYEgAvoDuca4AWjA3iXpYNGcwcxumXpCws356xxtT8Xw9VEdCnYNbphUWva5o3vKm59y8YWLa",
  "key30": "5g77TiMndYEJyWhp3UkfHz5hnL9TrmiKMsqVTExNLjSTf7wZyT7dfDPUhdqyjif2YYihzNghNZL9GEAe2KbPN1qn",
  "key31": "5fRWMRK6cXfFPdqXuBY1UJyRrvWLC4oxUsknodVyQctgjX4eZZSj2eUVpfFkTRFB2riYZ5E3XB1iiUxAHjVtDniP"
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
