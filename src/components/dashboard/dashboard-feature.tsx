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
    "2GprXtsHUnJJdWj2NJkUhH36MJqwAxgks392jvSNcazfkg94EPDZibfbQiHgVFNSp1dw6Mgnd5pP7mvs6aKC8EBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BeXwPscDxvW6kAkLz2ifRz6ajTVkTyWrFwVb9yu7hgeoASi6xh6hnAujPBzV7kY9SzrWSHUM4Uxtirt5HRDcQ7t",
  "key1": "39V7cLDBJU7vQjSYeTpAnCykFAa7LemcKGnX1jfcecCNfV6xhhyACT4KEAbzDfyJSuDfq4otqVFUJ2DZF2TpjAKz",
  "key2": "3eXgHzmHjfJyC6Dmy6iXgU9rUEjmpjKUMtNA3vK3tBPtGSteLjQbwGKMth9nmxdMEfR5uUPadCBeVYteV2YDqtGv",
  "key3": "5rUpM1n7eda3LPTmuD4NvyhPJQwYu68FV2rvLN2fhvpnanYX3198XTBvMR7SczsXvY5FjMV1VX9E4UWySK8YpyKi",
  "key4": "3FiynXqdNcjj3mSLt1wGM5aJpimfdi5dT8Nt9ekPZWpWo8s4tmKvhHbth42L17YnMqijiHT9dBhxBitH3qQcvvUR",
  "key5": "DyKcjWoGKAHprxnKRVDbfy6xRsHzZw2KxLvxYH2t9AKCsg5Q6iqxsbsmJR9mhY97PUVvSiCNFW4aJGwjt7nGNKB",
  "key6": "3A9dKjtAR1HwH18mqrfKGN9ACJKdwcEgdTLDMDBjJJT53eMNm4wACnqmtrij6u6S3ui7yEmncs6ur2zcxy8RJM7g",
  "key7": "2UtPMm6pb5AUPgm9DBe27Hqv97t8b5RvjaK7k1F9uVXTbRwmjAT1hHJw8EcjKSC9GgJsSB3zdygSdbW53w5dH2bq",
  "key8": "4czh8GBDNDYu2FwcxUxb6S1wpeNBwUSxqt7boqJN51CmM5Jn4VF2d5fcGocx3F2bmwJF1Nbt9zPoCT8GsFy3HSth",
  "key9": "5uocTTFNATbU1J4hbCLggcjf4J6VzPBdzw54caLR4eqGujweLSxnWvvttVsdwiRzWd2cgCtTKt5Z14qxe3k9XhH3",
  "key10": "9XostLvzC3QQqKj6EUETo95Yia4XYmExNj8mjwXoYggHJV73XoR5KTNcJb5GybAuGJkKbs71bzgHzU1tsrUebHD",
  "key11": "544hjFjrLG54QuPGbzsZ3hFe2hMBbmMhTHBx6Jv6KxsWwXx5ZfVmDZxkT7gLYVkB1BD3Rhcjwyyp7Md2ump7gtCc",
  "key12": "3h8AqDah9QQdF1cDokjPzEY3LuuTPURCGoc92a63iccHkNesxfrDDYYvpQTJNQ1TVy4tw3SPLrgeispSqDMoudMW",
  "key13": "55NmQjmKZutwXHG9ysxLvb2UeEzHCcxZ7FDK9LNnDn9EezkGbxF2gZ71KtsShsdng3EmxbHfJr56YfjJeiB6ZybN",
  "key14": "39NGBVPgJ3d7m2Gn3cPXStK5zGJj6H52yhCB3fW2fMe9zhbo6a1PYYZfzMYVDGmArjeQxyEqkvhraTG17LhpTj8R",
  "key15": "4pihdvbnaSQYDb4hkZH9aAjZAXLibZm5xrFJbh2wDQsAo5Updv4wepHqmpJ1s3MewG5WLHkcto7kzEXVtDYZKiBj",
  "key16": "5zVUProaz1XbFHjygTmgehVRH27c3pUDhpPouf9CVeLnsPcfgycDBkKwGf1JRbdger3QAviCfUJyjkTrMhmcb8Fz",
  "key17": "9w9P3zompYb6xaVqLkQCUTosM81ZT78o9xrr7MtSgkP1aCJN8u7o9bs5Dq34ms6UHRZb7SqVzY5TqY9BHpbGhN6",
  "key18": "67e1s2oPCFqKdpa7C4z3ehKDG2qNu59DQ9kuf8LT89u2238HdYTLpbruaRsKiPznZPUvHSjR967Qu4VPSgKUzzcJ",
  "key19": "3h1QvMH7Bnb9htfikuovqx1uyLG4ercdhV9fPHw1ejQabyhocTNWT9YGojkLMeRwc4fiv2hZqxvpAbFXvAjprSvP",
  "key20": "5vKQZTKFVfB7NbX3SDNHgtGL7VuYMNHrQ7pojXmCCXB2zKvmbVUXF4UhaToMKCq3zJHMssc3HMq9JkfaqygQUU7C",
  "key21": "55d6ziPn3acNPgc3pY7AoqE7aLojdgA4dYz4rsqESL3ha6vdEYmyHbsFeLuR68JuaZuV8erGCSGN8v95vWCVPDo6",
  "key22": "5fSshpiChrePNWFBxAUmPf9c8cJLPsEz9PF7Kk6mwKnf3ktbRUbqKbY2yjBUFumSDkrFbVj1QqCi4HxpVXNW9PKV",
  "key23": "467yvxkcPdHyA3JhetdEjXghnNeVMV73BXQwEZDWYJodZe7UmqyuPaXpA4gAmp8vz5NBQMas9zuhCTgVa6wDK5ty",
  "key24": "46pntkFr5JgpD34ViEikCGzzpVvFvujzqnw9unonepYTApvA77QVpxot8tca71X9Jd5niq8HRqmoxNJUcAavgBXY",
  "key25": "2hWAp7PZnNu8xZTY9EEH1bUrkURBR7pyTNap8hkLFtchqnqN4o5UVcNQHRns1xPL2Vk3BErmzq6tzV7xPNHxy4c4",
  "key26": "5RtqmQJysa6xn62YWP9U62rqtGPM91hkNopqJCKjdtQSC6yFw4qMsz9Seba8ee9vcKvCyj1ZxgE9qCs6NJdx9Ymy",
  "key27": "41WaoFp1UNtDSF4WogsPJ7q2oeQermot74VnooyopfwaKUr2gKchgWRyipBzQGkaMsWvXv7quE7YHSsFFAe1a8X",
  "key28": "2ePrD4gmdhfWWkb1nEXA6Um8TFcdithgta3gbjGcjmZfNHUjpK8DeAbnmeuZU5b7FwzYnB1kqxRm25cKFvujrwFt",
  "key29": "3ePswJsNfeHjWMb2RBaNq6Pq4NUCBDWEzuSRgFQztUnA6CLf3a2HJ7upCM8jiFX7BZgBmqbgKY6MQt8bNbcWPiX6",
  "key30": "LcPuysRUKYAntdEw1mhoE5jwQt194jDRSwXNK6zEmqcSpYymoiBxn99c8cMsf8eRLuUuQBTs4RMa3UCS67JSoe8",
  "key31": "3tm53y6bYvhHqWqhgnwx9oPGsQM4UtjhGZvcmzHqMHa6UqJddXcD3pCwnCUQ4GcJQ15tCNCzg8tEdLXpVWQwbH5Q",
  "key32": "5kAUzFL9Ac9LaAAKnXRU8xpKT7mZQFkTA9sNwfxK4xyUerk8u2qyUsDRRUu9SCz3rLM1WoaZzkUqd5rxu4zWD6T5",
  "key33": "5BuAUPRA1U255UBZ53dV8VY7GqVn6uiofrMNGU4Fcq9TKQ7fWmXrrdi7wwigBEz1183K8Zgc2yiusrxnt2hDezpC"
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
