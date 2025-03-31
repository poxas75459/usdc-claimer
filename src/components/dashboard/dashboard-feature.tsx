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
    "2y7tEYUwdUcGNiGVMW3ssqEvzyeGpASofwcNg7QK2hRRPcNB74AdQjAWYJ1vDhEg3Qas9E1UtPKTUPN13JZTZmPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r2wRvvLodMzZ2Jm5Pim4Y59f9UjkLX6jyH41YVSay8F3DZ8Vu9XFyAWzqsopvXhxyS1G5Q5qgfuUNHpSJAWZG7X",
  "key1": "2v7RDSfq1YAxvj34gQTdGZsd9dMcZJaMNjz8L8XtsE4duJ4GjidN1Lfe2jqZqCZyKXKGAy4gMKbZpR7kMRgTc4m8",
  "key2": "bz4zpZpUoLZaJyf4uL2QvafQ6rWsbfHwk1xjPqLMg3J61grTGqovx3ScmXrfh2A4eEj6V2r5nmpL2bPXAWoGWdR",
  "key3": "2gRfoeFd3TeXKFow48FCK3w4w3uYk95W3Mb8k2bTND3hFWtSB9iG7NAT4nijPQ1eKYGMkttiH6aXhY2Ke8TjGe7L",
  "key4": "5sGvHdh6TrWL2JhscG6q45N3xcnFoYkw8WZbHk3FX6UD6V8HqtgxtmfEwuS3kCy3kEZpmxDJuceuTFVJiVEoQvgK",
  "key5": "qcuHyYnsL6zrH1zYCZW15mj2PP1hjDuRXc8Si2XFnBaCY9RKQQEAPVn5jfwD7K8FgoRT78Ss5gwK6sHpmMksJUe",
  "key6": "2wr4fMSC66Vfrs1VSFB6LLBKq2te5f8jeiKTpsx3zJth19gGu7rf5jH2nGzjmtpuGoBgvyPxBjjMKQA7pfPG7iPA",
  "key7": "4Hq3RAzKa287zjuaNE8nYHur4QCTtFdd5mjoHTd5V29MBU4WmHsKZuRdgAXGWYVEZBCRPNdLchRRzvibeQ5Hexym",
  "key8": "je6EjR2gwmTY9WF2dmyLzoahZjsNCw89959kBfLgp3oLjyCcv89TueDKk5cEABgZP3Jx6GCzqVRrArbr6w2vL6B",
  "key9": "5ZnnGi7gAiv8xAcaJL6G8drggwpfxY4jkCs4fiWdzxMyj5oBHVPTb27zPbjUVZe72SB864WiUTQ5phyXoCVPiQcc",
  "key10": "3rG954VvVMsWUuj12YqwcwgEwJ3aoqiNcSMbP4HyhaMQ7A17xF4ZQeguNJ8zYDvTWjq52WwUn8SgFA4KnnQSf7ve",
  "key11": "9koWFjpkKYgF6W3Cq62eVMf1XjnBtRCcVLTGZ8X7rh1Mn8kvsjrPuh8qa1uH4eciYkK96qm9J1ZPvD3xPWRaLXr",
  "key12": "3b72Hyg79oBmeNbhZyyjddqbhbcGk3CR2jUnueDnaxa1shgtbLccq2KoV7LvsLw9ByVYfrect9x7Zmdsp43omgt",
  "key13": "gCayk8tXNpg6XVLt6X6GkbEo7LmqTQUBuv6XRdgj9rWpMXueG9vNAAhrbDjDPu1mPjKDhyZ5GLXg3youi64Q3Gd",
  "key14": "4qWYLAP5SRSLf5psDnUuXD5RaReT5TbgQcyftCZpxtHGFQJW197xAkesWKqD5odPAc4Zqz2PP4koyRmoHggZWL4T",
  "key15": "3ymj3qLqbbT4xfXhMMaqSYB5rwMG1S5LcAEY25kFZhm2Zhg7YUgE9DBmFNX9qiBkLTJqS4JXiV6qXFuzLBss2ikL",
  "key16": "3DxgxXgAazDjSUrDmggdhxy6VRLuH2J9pHM2DFpEugzfdPaU1yriExJ9G11jJ3kk6NK729y6av6DsnY9fzh9RxS2",
  "key17": "hKBcrfqmi9t9dX8Mupssv1SGeyARJGqP1WH73Bn7CKrdzyXURr9pir3yP1Z1RjC5TUC5kv94VucwVs73w3qggno",
  "key18": "42AZ4jcsst4PnfnoLRSpvm6hN6nWDod3GtLU2HgLMyuiaLoprmWfUi4zPkBDgKeoqhPkjeo8xp6ibBmMKgsxYCcm",
  "key19": "3TvTas3vUahLUeiahckjPyHPZz9JPjjSLhrYNpsMknisxXSRpWZohqWfjjwRTEbA5AyF5zwPK2XoM2p51jrzJfsq",
  "key20": "ZZhswEU6eEqVho9R1k48FahRsLrFzcL3gvLhkNWtq7ajUffFgGNEATm3sr9HdmnSzc4BRPQoTdU1AdxDHbb5qmP",
  "key21": "QCuhhmuGY8AWnD9pDeMbcDJPjN9vPME96P6aUhMhyWi5gk79YuP5aThAnruwX21WkPNc7Zj9vaCMwrHfaMB1s6w",
  "key22": "1k5Efit5yn72aRfArXr3YE1NhYT6TnGDzfQsKGwhgPNP45F772goQ4bw3Vs9k3yHte9WBRmJDvFELRNE7nX754K",
  "key23": "5Q45yebgpxPPH8XMFfpWBBDj5RzkKbVxBGW4p7q5Wpe8obfnEB91Ld6fghqM48cNSYYJxhZNS832JA8MckX743Dz",
  "key24": "n59YCLM8oAcCsQojdaPuKEPcJwGCGvRwFxrpVya6XzFF9vntk2CiMuC5zaa6QNaXFgsQLivrFNoEDvjiew7Evy8",
  "key25": "5j65MYQtxjCHJJg9aziUBisWvCfyUetmZN4mA6SVLdRWFtkQD8NFQrQHXQmScoEH9e4sb8KJPHNgcjThnQwnnVhP",
  "key26": "GWnbQJBTbDonkxDfzaXqpP9Tg894fADY4PukzyWpXVpCe92Wrf3rP1qYaUGpQVs1JLdXy7EiAYEztvfnbmFxuuu",
  "key27": "3ucFfs5ESUaXm5zTfk8jAsxUgekyXY4CjakdPp4m6JFYUHrBmTovPkcUE9GW2mWsUzq3vUeDjbAw4qnXvwDWBnXk",
  "key28": "31zGwjKN3kQ3SLkNnwWq3stN5CHWbbERbvvMAVmhQuLYRa54VBPLvZSi2689FUKgvGLx2znPpfvvLAJHfUyPyQCA",
  "key29": "2LUKPNmBm2Vfj5dNNkrGttnw3kqcpcKsxRvFZaMwcr1A6Xgysc4E5fm4gSEEco1pWfNkMQC5M2TJoaifa4FTsLJD"
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
