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
    "2cj4EvZKDNBSAf5NhhTGKnHzuY4yusH8S6dXNUa5JJ9B7Dne4P5Hzm1F2Zr5t59BFT8XXvwXojLUoEy8bSHMkgQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFhXwPBZ7yPMJufiSVu8HvetyiHHMYLiX7BicQYasYosnjgS9HsdsP4r2EQpXFLJKRYybHDNBB45BpqA7Q5CEp5",
  "key1": "58ygMjkBuPtmqjLcXZkQmnzhp73zBLs7h1AbA9NXS1E8gbVAHsmssgc79svE5xUaJEZtdKkNujQZo5C9taYbad9r",
  "key2": "3N6NgVePqSYa7B4PQvcow1Hsui1bVWD6t8RtrMTHK5Ee2spCEahY8Tkbh5ufej9ztiao5ygfEWzqU2QMdcvhpP88",
  "key3": "3WS9n1NpNyK9kbouaFq8RirSkevroHbcQQYF5b626LmPkFjsiiEPZfV5dcMfdo2LFPCamm8QQykFXMw6HHW9KYAc",
  "key4": "5sQmH5nxskkBodBaNTaMetGYpV9xFkYDgwrNnRZ4hR63KCGdGo1bqWHeCZQPryXgsBqMYFAomFzKWEovbPhGY6xq",
  "key5": "2RV2GoJ5hz7tGh9G6vH9xQDFiDzQVbPYPxhrLHP8xW2K1FKJFRcmzTGDodvCTNyMUMkHYS2CiWyvunk12JEfFdBk",
  "key6": "zbxHCaxhYBzwgaFTYRyGtPrUVBCgGUHk9i4dtqQZDLHzCvfFZ1UgaGgBrzxBxHqm9o8GwKRmubakvjr7ryPxk4A",
  "key7": "5r393PFgANFq9RmW9oNmcXXm1XtpPbmLNGk4MK2iQCxMYJUj52WX3xXrfbwhrnc1gqV3hUqRCVtEXoXwyCF4h547",
  "key8": "4QCxyBq1Xw3j8LTjUqHw2Nej6wNozhSiLmHSHYyK4YEnQBfF5KhcYZN6R7gFbvByXxcjwsRrbAJvJeAFKeaxxBJb",
  "key9": "svpcgJGH5Wj6phQHXwoXsaPGgmHpPS319XbbcHCL5odZeN8ZyapZHgGaUXDagjidi2NLWR7sdfgCUUbH8A6KaQY",
  "key10": "4ECh2G2EGBppucKAVsBa6XtHYppuTEZEDfGESofAcdJoczB7qrgZPGnBX8MvBUKHVgA4JErmjT7oSD8EGFrnhS7g",
  "key11": "3261HowMnMqW5bSis31rTBW6F5MeSX73Cy6oGMGthRVn5NNYNZqHgVEchds2Pnr2xQr6nDAPbVo8Q5t6k7kcvof9",
  "key12": "n29uRQJYtM2CaWqaEmaKp338UqzJLQfNr4Qij6Knboo4wNFrRRkvHfsCJTeD7uMYNbxVAU6WxMG5RxU8niMAre9",
  "key13": "76fc3G29iymJLgfLSdsmBTD7aAkrY1qpvyQQ8VcVcokFso3YV2RtXsjsxihMJdAL9mPTNEqTcv7SxWXKznt1hm8",
  "key14": "YVpEJUq1iKKkjT2Q1rnWUyAGMRHe8n5LTZPJA3991dLV9RvyghvvuRRxT1YJK9BnVdQ218i3Q3EUqjik8m16CxG",
  "key15": "2mRKHgczCLJWA7VSvQitJBSmzSt1bhuQbVcaWnjxThK7SKvySBnfgddFerSfkDmdRcYe2CTM2GnR9ejMmJnDTgCC",
  "key16": "6WBcxEZ3AgFVmNC9reAdofULUZkrgUNsPcjpswxRYg2G2vznBsfutZasxdKS7tyHmHGuXZr5shB77zqpxTrQ8T9",
  "key17": "5WMdKQpNuYGTt32E6c3GDpXCWoniUVM3yWR5nceXBehdFn9Qnq55zuR5Zzr7dxZnP6uymwgBetirWgNyKWWnjd9x",
  "key18": "3pRwX6nbakbHChHVwsH4soutshWstVhAVEsLjEx1KSpeJXKspd3VLo4za8HQtZcwHTyTGctjsbtZAfghcNGneQPn",
  "key19": "5KMp6MBm9vLULHsnNDrvZ1jXkTpiAA33udCWRHnJMerPj9A46Ro15c7vuEWWuF5FFp52A9zq3VFeuYZpDoFcnqQw",
  "key20": "3zH5iCmoUsf8P28S5rv7bW6NnZgfjWy3jpcjrocqpHVX4WmAb5EAvxkSCnfsX4USe9wcQVwBnMq3S7TyKgNr5bP",
  "key21": "R7MAoXGrJe56R41K9Hm7RqGuw3cy74RXq68cMW8PyZPS7iJWKKSHisisp8KTaJ3gXkjxWKYC9rgosspvh3ZF2s9",
  "key22": "PNLdegdPrb9nxPnuFnmpaaohHK1VStSEQakspRaThf8xxmz98p1Ev4TGBxuTAmgpwJ95qSdteQ1Lu3EVtKyDFyc",
  "key23": "3hpwm6iNE8pZ2VCw14n4ftVe8z3ZS6qRjpjaqdVGt2kfGub7UvGGEeUKLboVaWTgwgfqDug6qgAwo5inayrGQGXb",
  "key24": "5PQYS8tfaMREn3tZDg1twsGnfUW9FXHFXECRc7qydjL5xf4M8R159h6hTo7iveUM9qYXJ5DLoirzW3WM8EQgcyRS",
  "key25": "42n1jqqGDcnEM69x3Dy8KPcY2wV1uCsuq5oPn4eszzftGdFHV5rCwGj2mEbatPi8FLd7FyqMLKNd2xbRPiTfbhnU",
  "key26": "32gDWwMHmxD5kS67vNtGm6zngjcePj4ypB8wsPw8YRg73XYhfd4LgVvN3sukRQdrEm1fyexC9v3bWZCfw6cFVDeu",
  "key27": "2A76tTQdeKAoZsjxbNuTbabPX5NBuw951qkxshKwtnCGfsgXazZosV2Vu4PS3pNE1hzZrn3zYLYN5SGd3eWvZhcM",
  "key28": "4VdyR71qjCUnPE1J9RWsBx88Rd3vwyHsWJE9Yt6etymD7gpnQhJewxC21aaniN2Faw2zJVsububHmaXgCpPN66Pf",
  "key29": "4pXaa8LSSLRnxn6mBcqjjqXDbL1YygF2o9WXXaxdEgUyC253zDMwLkvEv4abpqvjqn6HiSjVJiwTvJbpc9zwcMQi",
  "key30": "23iUXErJq59PrB3TzNszWwfeJMXHayeVdnXtonvNjme4AUyaTjQxriqSZhVa8FYR2GaPu6rkoSUFVrXC9PWSaTqe",
  "key31": "3omFFBUUHtTXTk4ds3bPtWrS3f1Yf4ZyKp21UPZxR9DvjAUDk2ZmaTMLDdLJwva3VJUtUh6aKFUJAewWRWZLNc3L",
  "key32": "2Sgp8XBNY3sVSTLuT2YPt47i9acns4nbjVgefA9yiVSS8tVwLDHgCnckqMATKZFxKngJBD5De2Ng481HWkJrpkrd",
  "key33": "2tDTSBffbAkgXKQSfrAnTkQB3teUJZdfYa62N1swwCttj7mC2ZdBLCh8EpXpX46hQKSaurkfpjUW8LLWF6k8CBwL",
  "key34": "4NyqwRLxLxVdjPQa2PGG4H8C2tihkMcA7YuJKEMSo5ziBqqZAx6uiszpHN44qZSJ8MnKvbXBptyu56ZesKfbmoL8",
  "key35": "418NNMyJmqJMYHF6p1WkCX3jJPjhpeBk5GDvFdm7eHT7mPsDjb1yJFwsSVPque6X34bf4fiCdoxhFY2ttJ1yophP",
  "key36": "66WtB5Q7N4ad8iqXpru1dah3sM89JJgxM6Cz7mpubTKeeDiBsyzDHxX5Y7tuecmTtkKPCHo4obQZrqvEcZy4gx9u",
  "key37": "5pQrYmAhxsz6QfBosnFjrQtSdaWFc7SHczuzZEnEqKK2w39x6DLdHjcAVMogPoBH9jqeggxPpJAYNh7kTxv76G8Q",
  "key38": "4yVXzYtzn9EDr2ny4dTAr3ShnkppsrK9cS18MfRGgSTGE7y9xndHWsr7DF6qaDsGPdAE8JbFZLgP7yb28WzmNfNK",
  "key39": "64XRLQgNFeqRgECSDLiCDWUKrzVHWWQy77Q9NwiqfyBsXJ6LVbPQ2gSEpXmqYK4sJGWEHCB1DE4mpgm91fBQJSYZ",
  "key40": "4qSMfUpL2k1CPCNFEncuSKxTn96EyBuEWzPtR5vex3pfYPX3YxePxF46G1wiZSMEgUqBNMKCR5dLSMmfbH96AfYv",
  "key41": "2B1ND7Rk3tYWwMfSouW6XduaPkJi3NvBJtHC5h1HmQvAzxV911HKN2SGNoTCr8yAXPVYX9YaWfDKvLQwmHpmfBrj",
  "key42": "42v3i31yNJ3RsjbK88eb9HMR7ErULGd1tVeCjp3w7sYrCmmEj6LjBCCtHZHAWdcABwGvCG1181vcpur5WzR12HG"
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
