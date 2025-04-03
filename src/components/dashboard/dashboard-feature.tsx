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
    "4zErQc7q2XPKwGKAj51E59Bj8Qze6YVJkcckqxJLTQaCWbGkzDqWGoBck2RvzGyhQw64AJ7YX6qEEvZT5k66koM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dbXx9rJdAJW6X2mnZx7RQLogkQZJPYZjXmdvb8FhSzMhUG5K3McHg41DhwCasdUkARt3dLdpXUv51YAdzFZ17Ms",
  "key1": "2s3wQGE2Wc54j5A48f1PwSjmx7LGSndzWfpijBJi2afoK2pDw76y2whKm1cPtsXyEz7ekU9RiQkhhEVQrwR4qDny",
  "key2": "3gDbT5SMvjEcFhmdp1UPVxt24RjZcXDDLDanYRFk6R4Hto55T9nnubX8Va98fWtXakfoWsrQKm44KDeuuUPrGZiB",
  "key3": "Rta7oAyx8VPssVzaGPHbsLpALqLWa52fBT5bkifiv8TzvK4YAWheMqAsxUpUUidrdCFJLwLm6n14FfuYmguCpfd",
  "key4": "4gpcXmm1BAXTLeyzGUnTHrTAbTafriMNfakAap98E6iKsnTAPb1ET1RNmyPQiLQSHTzNGDsTRjwcC23YPCdHjge9",
  "key5": "48vw4dKo1n968iTKT4ME9GhifmJ3ZjA4ceN6nxSJadAsWekduwneRQWh9d8nX3dTk1mDs7fx3WaWXRMWALyCicXi",
  "key6": "4e26PUuJ3zL7Za7SWZ7fok38qFZAeaUoQr8ErZnhuRyEcXmN5ev1X4X9jzpMgjLHijvWQCEpmzQRMhEbMaYP7LVs",
  "key7": "5NRysodur6TQe84MzGTGHzor2DpQkTC3ybPdU9CmKCKfrFAAPwTJd8sG7RqE5pWs1DjyAShwksBGshVpNAanXC3",
  "key8": "pJC8TXymhJSpjbWtVuQeDnABodVLnRvnwPXF8Rn9oWV3siMX3cABmwhaJLHbc8aWhjcFUdfokucXyuYstLcN5NE",
  "key9": "4G3Knsnz6HPEwUKG5GYhqwgwfLemqmVk6HUWXFmX8Y8RpXkHrW78FjiDgEAVkwmRzz27WggpMupF6Ahrq5e1Enn3",
  "key10": "GCG1cn5PHsUkqiVMVQu66oRToYjszrmezYMDXaE1rnwLE9MdX4jQPPvjSnp8iCaLABVVp6cap1bYrmjutF6FCyv",
  "key11": "489bRu249Bkf8UjqheSftUJz9xkXMNXxzrAroPKgQLufy8T3PZD32kQecevvXjXuu3nsSDtu84vKujSVjCJvSCc7",
  "key12": "2aL6p9UagKEPMxLRj5rr1diRzXwjNpYWmX6TF5b6W3n8ihd5aGahgyLnupSAjQh2yF4UivzpeyzVDtHFrxMDQp3R",
  "key13": "3GyXzvADuDFXqrZ4c5jKfnckTvKPAUMvu1i726AhPAHqpJHEWyvLs3WGkzkdJ9ra1nUQLh5WDcDtQ5QWJ4RAEoht",
  "key14": "4dRTzJiQsUp7TEVNkziYDX2bZTHXEqtuS3bs43PuZzu35MrxWjSvCK8KS1YxhHoCaDAtMyhATpGje66FestPm3RU",
  "key15": "2ShAC1nzUysQSpzKMkFr2sro8C3D9GXEfeb3yomqupcEJwgaj2L2YykzrM8Nrf2SQb2zqyNJbkNrhp1m83eukTGd",
  "key16": "4J2XbNXFqxkv7hQFuG1zDmqVmgBCxXHEfukYYFcb8S2FBgTXbHAeDWsxWUXXMDftjkbHXsdtoDHaYpayNsP1ZcnE",
  "key17": "42BRqHBvsqP7bS3K8FfpzKioF9ksAAsYsPH4GHasyU14Yui1TQJ3dRybNFgsiTEN26WrUWPB96zZRdu3DYCJHbgr",
  "key18": "4mzTQEBJktk7rzg5VX4xMzqV8Z721dfC7iQ9BhxmJyAUvuNkv4N3jmCtNurJD4QnbH99J8qyoSBp8TsNjagxHHHs",
  "key19": "4LqK63qmEjYZv6UfaEshYZrbvQ2i8pjS7qt82EkFbxerwc4jdYCCmZLbZMwmFaRqYZWb49uSnqQ4rFqdm6zTQ6RG",
  "key20": "3PVUJmCyucya7nSDZEN2yCewbdNzP4TBxqpFpomTSv1Z7vKwyLZxQpavDYTkCy5DbEr1XzGd1U1E5yJUcx8Bw91G",
  "key21": "2xjfdpof38r8prGrmahhrKfT6s2xd1fGHhL8Q2RWZfwGELDsZQ2tfw25QaACZSwC88GPYfguffGnsrtFmyW8wUdm",
  "key22": "63ejBULx5vDZMs4UVZvXzZaCmocfsdajoV5WWmCGTaTCYVJumpzBkyFedut6LE4buh8n4RPSmMMwcUNk27MXhybo",
  "key23": "5jAF79xroHvvzd7ZYQv8cQyXjmKEMaPJZwgqCTw4e22sAmnhDvhLow35SzrVxW8K9B9mwAyYYJSSVaJmRU9Pysxy",
  "key24": "mGYKei8RTQd7U92fnSRxtA6c89EokFD8Qk7QzsBdEv9oy6xQALotqNXdpPDdrwqdcWP8B85rvfZBYjuFroF46AG",
  "key25": "2C2S6jkhtyjmRM3SRTryRDWUsbm8bCJfRNFbcdbicuxm93MvG9sXdQgou4vT78Sh8trzsYmP8j1zGTQ5qQJYFy8v",
  "key26": "2FxHJNRdfqfj9vJAYiiaZm2yB55L4NbRwjJhJHDgzbwXijUh1Z72bLPgQpHvSZX1xdzgaJVkv3PfojxXWGDXMevT",
  "key27": "4QAoWpEwnekHSMU9yDECjsBXRoqoM94MqbvisQiRKABc4ucQtkwoLMMotRBmwADEcd1YXg9TWfv1ShCRmx9qZM2V",
  "key28": "2nfpcjmTPL8qRDSRDCtAx96A1ihWbKtqe19VsLStvVDDDmMEf1jtA4Di9wQWoirroDb2fwtK4WrJXvc5H7dGB31E",
  "key29": "3ZiE2YcP76XX3dcw4txKJE9DrEVqVeex8ehW1ZM6iX6s38K5Ux32R7KUn4H6R1nqMiL7veauKMYZG1ZnnsATFiY6",
  "key30": "31NL9wCNRNjer96RRG18AV66AzQT7vq9AbiB3pWzNBuTEoRZKJeJTAXRC3BYfUhBjgztkN76uc7Zq4VLduPjAZWn",
  "key31": "5SDc8hnzjCgPWGokkhfe4qTz3V94L8e1f2nQERkufxfcKQJzgLjtwkEkyxTzdCNcNaedHxzKH7wE53awkvHkWw2z",
  "key32": "4jTzZUwQZ73B3keKe1j2Eg79tnwsMenuHyFdXUoquLsYXiB8xMeJudPQm8DFgFszPcgFz49QthBKHjJqDUFLpaiW"
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
