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
    "27GdLtbSQ4SCGJA8aRw3zbmVLff4QSZSRNsG6yxrSkdptqehx2DoGdfArwkbCpNhP5SmZ2mQCZduzGcUnZ9GmH68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p2C9hcTcgobyZpwEqhfMTRoehwHXBLzX5WFmFukGwYZCoVpx4fSfiTqEM5HowYNJG7YczJAeTGELEzhJwmPeBBz",
  "key1": "53Wb6TwkVFUL73hjD8uQHtq7KfHH8TVBZxuyQHaAvzrwMdymjPf5So2fj2ig8dSeZLLxvPPSqtyBhcrnHC6AKS1b",
  "key2": "32Vv8JpXWhibfVwenjRUeSFpTtySJPVdEkL6srne4mJ6rk2XB1U5AEXTowJwi8UdYXfVRppUqpf7zTChtYsqF7mA",
  "key3": "4FPyhFwb4sWVMjReyuEYFCRJ5cWWrBRKnGmsHw73DPSuz2r4QJF8MrwmEuaUJxJVqetxLaz2b3itkyaTAi6XXpLy",
  "key4": "5VKJnWULq9zfQoJQpNCNubSeZuVScfr4yxVqjSJQN5MheE9Nb9TZxLEs1FD3EA4fBsTSxnU2JvqBQhWHgirSEKF5",
  "key5": "3yxzjqECsHyUrhjqXFYXMP7LfmkQLQKxUqfvJJRiQ4e5bKEnwGm4ypitfKbiS4BJE4icVSvE5tEokz2Zm2xoYpCt",
  "key6": "4Y2JaG3d7dg89yvoHkpGVYGeV81Z7KAzEKmYMJTb3jCtcBBgtzzcKsfqQ7ywDHPLjwMMmu1gLSJLfDoSeFvmCQNj",
  "key7": "aXV9v25DsEzEC7DKvt5t3JBqJNdx19BebqMPhd6nVmx5TVfMkUHGpyo9Ne6meZyKS1EYK4U3JQ39G2k7cREyub3",
  "key8": "27ZppW2RPNQ5RnBrovDdVRLzLBXbMRHXgVtwxRg52WvXWeBniF3N9Z6JBYNT1JFU93RFXbW8SxEnamBC4BM9GbSU",
  "key9": "5ffs9GVa5b6QEknctUhZ5AE5vjLn1RcLW3rAUntPESC4vZvs7cZ8r5iQFo7WsVuuAH7KYbieh8txCvDePAANGV3B",
  "key10": "2dqL1g4PYQ2DH19GKkPTfKkw5nmH8zh1vAQSkqykNuKs89oRmFWvKnxqQjc9iPUJHspT9Bm8XRovfDSutRtqbF1L",
  "key11": "5K97Z9YtsMUG8mapuVPDH8QmNE2Ax33UbqDyZChrS1KDK4hKKu77NQgt8zp2FuG2H4VXNrDrNmTbxXANhh2RCzYi",
  "key12": "q3QntJegBXTkKXXFQBN3JtFzsnkPzSrJcNEwCwgHT9s4oZa839BkCfVfV4pn5veo1bCHF4M7V1xfngr1JVrpm3H",
  "key13": "47DeFjfjbMc88cHihrCeAbjvHT93JVNQ1Po8M48XyiwPg9Eo6V1mEFmB5kXVvrDgvHb2BtVpiM3UChT8QoVT3cuk",
  "key14": "5p5YETapk5cXvbB6XevaL2ucpgxpeDbDESyGscVWjLivH9LwmNs64qyZ7o18vLwFr5TqyPTFGCshhv6A3kCCyk9t",
  "key15": "2JMYGJMnErFbYM9oY1ngaoBmPkbMSH5DLptjdofTp5FQQ61mraFnewUX7Kait1qg1Us8dgytaXbGct79iwYgzpjL",
  "key16": "2xmZUwXinmFVnVszzwLwKqxWAMtLUD1261WK1bX4EeWT36gJawPe53i5XpRn3CBWdzYD7ZZxH91VMdeuaDujmLw8",
  "key17": "2mwbCjwRkHh4j13frABFZ2FJcsKRaAPVXLhy723aRGnfofdpo2QPw6xXe1RVsjRbrajBUGsBQP2iBAhzZtWLJWXV",
  "key18": "362Z2fAg7V8Gs3jkJFn3RmwdEywkmPHW33YD7tjaEwHwVHoRkjXthByeDgm9cfnRzSg2DRErJPaHWAJuwzWvrpCS",
  "key19": "2dmECcM35qznDUBiTBPGQb38HAbAg2qQYEVvT4pYsCsKRKBVvRLvknPxDaW5VWBAm6jToykAZz4FbYjMarVTJXaC",
  "key20": "4nVke1j5x6Y3vqiY8QkXRoDgcvPSDVj9fAZ8fQWYiAopsfgj9eR9HxXztF9jHDkxEBHxr6E97Mc1et1gjzuVrJot",
  "key21": "5ViqKXqom6J5FRbHYtYNvb9W63onhaB9rRdvz9npmPTGDfby4n3cC2HpMzHYBN4ZsWxPHy1DBfrXtRfhy6FgD1Nc",
  "key22": "2FYuQBXw3DizRFb3Bur4zpXagM3Bq6uM1NpjPoZoLS86kH3biR27vY7LugzvcGJRpabP5sqqcQF9xVyeV8vSKKb6",
  "key23": "ecDMgG4cLPAnxbdYWGSxTcsGghv22FhgPDPPpxD9yvohbZqqR4PCeSyGir3LoGp6qx9cuZF5J13jdqw83CccoXz",
  "key24": "5amaTzP4pwkNyJKJRRiSQ218VqRp7dHm6ZiUVCXYwyRZSfERmDdBZJDaFGDtjoZfYYQUzN5NcoroStm84M2tKsnX",
  "key25": "2JwJyRkjHxFh3z3VnvsfoJ1H6dhFb7ERY4rDvw2SqBYDbRFxbbVqNdh61xuPyJNtyCcAiDdoAQp4LMwWYF1wQfoU",
  "key26": "4Uqqv42Uc6hwyveYnxDGJYqg4y7GkN4epCMA84bui6YoTXy7HXnxiG6CfF4NDFa8hLZfonkyt4ktfzg4jpSMmZ4t",
  "key27": "qcYnikxXFsLLaPCnFMY83iDCKTaV5sLRL8k2SxCSwcp6cMKqhw1K66x6xNpa5Hz5EQgbiwjk5YG9T8JMEXcbThM",
  "key28": "3KMwtrdMDGTofhYscYngoheREugRokhN3ymxnBBaPQR4grBbAq1evLnqHCHsvkNQMdE3qc5Ha9hkiDjqdHBUaBUM",
  "key29": "2DSzYKGEGbbBoX2T3goed37bhzGmyj4HeYDV9bB8nG7HyZs2sMYnSfowatM9J8s7wGx5NZrCSvbfezSFtMLaV7eX",
  "key30": "4UuLTvMm3yFfyC9qBmHp2uR1Ao7oY4ayQC1yktHMsjFBH9AudS21JbnyUgBfgGWLhLYHzWuheuVMTeczJEGeVdfb",
  "key31": "3AoGtaxTx4h6V8iXHYkg3qprv1384Zb6hbfzrPunDGjr9AFuUQcZLKXrkHi2QtQKNArf3kdrnSRLcEtsJwAC3o7k",
  "key32": "RkmV3N9LHy29Veq9dNuTiT1zKdFfxKM4dNdPxC9isugpqdonXjyb4ThHg4nVcR6h4tUfqXYN8BfHoZ4mr9wziN8",
  "key33": "HGt9uBoZtXNZGVCcfc8N3bGXd6sFhQSsULSuR8P6wrvUAoUZA4KugrKmamWWDn8K3fWPB7zi8EmEp1fr2DgJBgE",
  "key34": "2JW3PEHodewzreAVDcP7BxbkwDxFPn4hGCBiH1FneyuTKVbRW4KBqpbCG6upovYqTb2pZnFPDUwBVXvCD8xauhy2"
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
