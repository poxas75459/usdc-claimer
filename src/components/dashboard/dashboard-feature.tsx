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
    "3rJbHjUh5JSLAtzdugbvvJE3Mxehj3B3eghKfnaw9ocYL2Au77roAtSH5zJSfezpus17xr1hV5aW1viMFZ2SvEuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yKwMxGDPEYBmSdUXv98xRQaNkrKB87psSRk4HtwP3zA4EzU7c9APZpMEVLjXDdDHtQv35sfZwDGL8ThS7pi6d2Z",
  "key1": "4FZNGUNLgVV6tVhqRkwvNBykMEZuYNwDVRyTk9Ga4JKSSUxa2uu1frdqbGoPwqrdYknUjgZPyAvbCDAcP38nDLtV",
  "key2": "4EVmau5HSvDnzFQTXZn1JPqYVLsnUGnbzNpgGDgcbPLqXyNs9CiStbPqiRH8ueVPxnEHV4HfMotNdi939EmAVFmg",
  "key3": "5rGTmLuDk3Ldab2vcPj7NyL6NTragjWS87wL2kGZBxMg4vi8D66qD8h1C9R4BhZ3VdyNTzY4Ww8Tq4A2eJ1m5t4v",
  "key4": "yw3K6ZaVKEAYcBodBrAaXwNGeL1HTWbcndFJmT6TiRKcdUxo1gDZS57TNGbQ1mesn7B49R6FqDMiC3Doawwewo6",
  "key5": "2VENDBo1cQUwKEyLdXYdpaNvtU4v9zGjK7YL8ksLARnFW4gf9VjX4yJfkc7kJpP5kPSTH6b76ioZ5xsGVXaQM37x",
  "key6": "YhLSkfvsXnvphpURtw4pppEeqgJJZPzB2qepf8XdvjiuzWMxu3rEPtYjfMgs9HMfKShbESie3fUhcsQDSwahqUp",
  "key7": "4J9Pqfv8Y2ASvxMrCdQSoW8SKuYeahBR5qi8bsFC7Lu59aAnUScDYHAEMqYnc3m9U22ty48BiW326jfoczmv5nHX",
  "key8": "5yzUhiStS6B226GmhRcJPUTNHFFbyDg4RBHWz7RpqTh1roCkpq2UeNH7o5pPXNW6Drms7VBQmRNHsneL5cSH4ijT",
  "key9": "5DmitGENPFz6i9zzauKeVfAFmk2aZ3ieoSeZPJfiT9R6waJQZzNBuKeZF6wq31NjYx9E9SEjVPR5Gqby9xx8YxTA",
  "key10": "4P2Mg7EzzFtsHxba4ENm2w4B9o6NWXZ1zVDKu77KRzY2CPpcK14gDmGbJ83nqVRdJUnPXg6Bg5t6EQp7DC4HpaK2",
  "key11": "3YXD5VX2yMX5v5QWxMSgwVE7iXGams4bKRGeH7TuU3JoctE5BcYKtS9PjZ9jeADwp5UD4JSbeP5jJqJx6oy8cEcR",
  "key12": "3t5XsoskV2pn2SKy3vxhgLuF2PX7sTMGgt8D8v8RJdPpDXdUZ3S5xYqsEv53tFNXyCmF5i3NSAVCgs5tFirqvMWC",
  "key13": "2vQajRmrhE8Lzt59wcvVcGbG35RgSfwRf2WvfiAX3f7R6HCWpDxWuijrWzv3G9qPxLFVLdAb6YH3kTSz6sX2mKJT",
  "key14": "5VUwprjEHfVUMEivUeUg7ZeXd9LjN5LzjwbPtHvCAhsYPW5QqjvBEXmscmNfxDmQmzJhGbb16xzrYhQgVmhTCXpH",
  "key15": "4oNazHtgkfr8V9scEUT6jq6rbk797MjJ3q4PTmGdaGRSMBjagF6S6avV5k8d9RZhLyUMgqek9Q4kvsk6HDEypFjH",
  "key16": "34n8G2KbTiFEW5NAc5gFicmPibaQFHb5LXCh7gFNfgNrvuzKBwXoqx45yxks8WprdMSCSaGoowBc8CAG19XNvRsF",
  "key17": "39Fr6g7aaPjbFv2T8abhbfD6TVy9bffk8BZJy7zyJu2seqVyxvtoKELn4ohQcNebdwWBEWZAuQpFEYWzwat8kDo2",
  "key18": "2XURa3dQDWV6PC2K8F48mUeLhbWVRmNBQ4QCXrbpM8f4U9TBrYqPgzST9TC77BWkmL8fHdRqsNg2xsbkKEqLt3pw",
  "key19": "5hJs4zXUe5nRwxLPurPZfiEmDReHZqEHzujbdpWytQxporsLNmMRYsFqb4bH4KeB18e2eSczfDuGK85yeHVKwyqu",
  "key20": "5Q5NU3ub8vMpzuXSJhPUJJQRc7iahSu5ChiHiiGvZoApFBB1Vhv9Tm6HjttTn4mnUrqXkH4eyQtfXAYiACmycc7m",
  "key21": "4wmRjvTa4RCyHmgd74koFSbNeQHQcAisC1JFRTSX2k6K5QQ1FQQAJK54KewvFFkGZhgBGYvUa5DXwJT9Y5Vb2yDX",
  "key22": "5yFCtLZthG29jxNZnc7o7zLuGbra9WTWJWnnngyRaMMYQQxXn6TqEBAjw8APdxRJrBQi9VMxC5ePqhW7o7h8AHpM",
  "key23": "4iWbK2xvkvixC4kXMjsikp1Dw5sS79u14GuzXNfNpyLBseum3joFDyTeKUfMdHPoBhk1XhRZM9Gyf1TfEJ7tJ3g1",
  "key24": "5RY6eySWTQRz1hNyh1LL217swB175gX9gmvSAUAm97XrEJwKwg4P2HA8qWRAiy9czTzX3SNmeEQeG8oYfNks2LiX",
  "key25": "5owFuHJofRfsNvornKrF3AnPzCrua43GGEHbjVwVz37LjAdyAeUC1XGqSN7cgHitPEZWcmH7CjYBiUkrHrTSDmws",
  "key26": "39wR3V3xPow5huRN4cfnyqXRGZ8QA11d7yyDWSDzPEk3VaAFFkGaAdLqFKVXBkCaxZCQVKY4CWXtxMwWirAY7hsH",
  "key27": "SBoduop4wWpwP9cYhszzHUsvTMV2wFqdQjubyAWwEfusPHpPU1DZMGVN5oj6hmLBEUc4WpKESd9q19tNgT9i15P",
  "key28": "62VHQqEGcC1BZSovnhSrsfYnW9fPcjwirjfGdfy4qrS1XjVxRJmYKzGWbFBEfF3asTQU4Gtb2XfQHAUpexrwh8Em",
  "key29": "o4fi9RhDUktZzZrbX191kpQfZMCgWE6oBq9Ekc1B7q5m9wRLbf8t8weHHTy9KxsVThoNHPU5F4q32hP4a7LCA3V",
  "key30": "5Gpa7d5krVAxQWLUgjtPDAWKeSkeL5xxJP264TRoc56sWZJedgaXrNMMgv2BcMw6fKDcFmxyjLuNr6PUcLfGfjBA",
  "key31": "2mdMmErwuuyLAPtDLsA57puUy1BwGcJnBi9Yoze8RQpVZ9oea6VLeGUjqkQHcP1TpCF1wQwVrVEsT7qwiHtY7WNX",
  "key32": "3s4qtuV1gCKrxDbd5yfJfH3gKJnfLChsJyNdwi8xwFzQg4dNFHpJj9VpdvCdnZmSx6ejKc1UtbUZqrhF84UnL7K9",
  "key33": "DSYJ1BzZkH18XzWVSs5Jyn8DG7t3JkqPX5og82mZ7ADqw3VGggJDLuvPzvgqyt8jguWKNKfwXfecHRtC3ccrVa9",
  "key34": "3S9uSkYuo5K2zb6RWX16R8oRckiYS7P2K5nL8aeMUbUfBPoNWzNeCKXSf1aVwyh8N616UEv9f6iuXCKHfZ8qah7k",
  "key35": "5pnsYg2n4kysrXPVVP4zU2VMHgu1Pck8TD28sbMJWBZgDdhM6cezHj3hRRiub6BrazWKaezgSCKhbZdkgaJa7rXg",
  "key36": "SVMDbXKHkc1vhzztR73R6s9K1vgPtRkKwguAY1TGW9U3Fe4zSuMo1Jo6SZqGpfWRRn2NccjmppyeJaTaFZsYASu",
  "key37": "269C5mv3kKu8uvJrLakESad3ukQM7EimUjng14gVERZGKVDPF4ZRZfFV4mvoNrGAkrTMxiRrf4w71ZXGfq8NAsxy",
  "key38": "5Ba31NnnLHFin3Pvh5zRpNxULPqMzwxDtguXcoA2WQz6Kz27vYaQ5rntcq3QQ5YvSppyD2ByR5e16UTgRMpfg7L9",
  "key39": "vTzuLQTLM2JSRushrYtAjHn86jdK2Db4vnH9o3pp6HEpwWBpwTJs89GHTi4YLbwYNM1MTwQhQQqfGEZ18m4DBJs",
  "key40": "626BpQqvAjUcFyNohumKZsCKkVWpjgGFC8boZLSuGwvxwBuDoyVS2ck3t9yQUY25XSLnazrVrKRNXyfYzdnBLn54",
  "key41": "tpXkmAYHXNJzhjLGyKL4U47hdShx4D8jLbekg3BJMv72w7hiduXaeXwvWjZ3UCchDf6tSbKJr87So3EU6hzaXFW",
  "key42": "2QYP7ZpG4cTSnbBfeJCw89F5x4zR7bGbomnS3wxF6ZkiVXcspbPxCzgAt22cT7jj1aVFLWqz5vKdLB7RjRMwKs5N",
  "key43": "B8YmR6ouWWxmb4VMM6gMp6pqwhY7khcske6QEcsZJoib3TsMubqUyrE3DZTf5zGfGSNV6C8NBHFh9QCEo7XEtcu",
  "key44": "5DfPEJKhKD6Dh5B9pgkcAnZzS69LStx9DKybBc2RDvsSCeib6USYctQJg5SmiP27zRnp1wA7Xhrb5skaoPQoE8pc"
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
