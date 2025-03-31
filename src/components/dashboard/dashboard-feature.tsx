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
    "4ceJSzeSa5XLBNMXTan9HT9YcUmtKsxchKyVUBcKNfA8bbggBmwYho7trddzvGM6foBFMDvTH1zxZKNcCF1yw8AZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wZ9sTsRD49HQ5LNB2q8NBCajEbyyCwTvQrq2ekUKhmKgAhffVqyhnBChAvkDVasqc2MoevcRU7eDBLJ2yASySQ9",
  "key1": "5Ugsq5sjcQtaQ2cML4uFMximTL5zYvxQDM24sB5kyWM7YjuSak3sT4dyUZW9P8FryhCmsdysWmJRQjuFNgKAnz48",
  "key2": "3Ri85erG8hyd5fw5EcBmBsDFsZ1DR6HhuSeGvxBcFJmaicUxFJUvtZT3d92Ls9ibJpQuum2478VSCFs9WyuoWSM7",
  "key3": "3zorCrhN9stjJEXTThqCWfU9jGZxkse8VRkZrtgNUzPBz6urt5yanE32riGRSeUmdmBKF5y5P4ibFBGjDFHeNRPY",
  "key4": "2bmkNpwnMj7o9W4ZXNiUSTc7CLWUarwDK4tDhjSFHRgNdryseGwZQMj6NyP9YziGFj8UeNxKtVzLeeAtcgN5Jr1A",
  "key5": "4kMGre1vR2xSDDWdEReQ11RB1dQ7cFwbuvqSe1NiheFuA121qwqhQgVdcirKsz2xsXfqkwUQfKF62HZ1aS9hrWHU",
  "key6": "2ufVHjHEYiYu1uN4i5tVmUyqVcBnKzntxbgaYHJ84PFhRTiefjvtvUXKQTbcSGvqAAwU7vDs4SVEg9jb5isgFAhN",
  "key7": "nsdye4AcSz2Wos6wcst7Vz5Kmd1r9MysS3TwRV7D2TKte6bqEpLHJbKkduzD4KhkzxKw6jtdvzEPphkLmcLK56r",
  "key8": "oTo7PjiTwEh8FhsovhRtjR6kP62CMJrRbpJzuKkuw1oMKwr4ZZE1RNeeLTjASwSabfdEMnT2TZRy9cTFyxdcgzK",
  "key9": "22NHBAgc2ztyfTyVSGjbxsm1Lc4DbvqMi1hqqw4WRAz5AD3zxUDubVMKLEzMzNrraGKtPBUqcX3VpYBDMWpetB2n",
  "key10": "3aNF63wqtB6jevW1vUQ1sJYv4vf6VHphKh4JQtcD43PseR8gybaQehP8TBARpXmgBGB5BnV9PGEeMin5bzVeicxD",
  "key11": "2t3rwsm7nALTkiyCVyAVGFUrdgA5cNLM5gyx1GLuQPvAMNSvKGLhnnDoTdagYZceg62qAdSinYMx4BGRjwWpbnoW",
  "key12": "3YETJFoBh8iYgFNZWSVEM1Z7eYmarKrDXXJ9YQVMJixhaTqmz3P5CCRq53vYmWEWhKuNnbgJdCrMp88b2ACgxpjE",
  "key13": "3AYDRJ1dBDUMYWQuWGVxNam1hroTUwyaQUZVYcAXoWLuUVaPAm2eRN3bkEpR2jzeRo59iNySSw44Gr3JMgqyHJw",
  "key14": "Y7yoi8ydnFAodcnEepmsHGojjhCCcHjZX7ry5AUAqDjnVhV22euSBsYbyd6xyrs9u9g8jYcV4uRp5VzDezym5dM",
  "key15": "iGEEcRTt2MMNFziiAPN58uLnae6RnwonHvcr5nyJ9vYfwQusc1UKyd2wrH2K3DUjYsnv3Q3UNWY2iD94rigSYor",
  "key16": "DCco6GPGkD8yYXSx3QFchPa7KJFP6RGMEnXWa7RKLtX4BNrCRig6qqeMXghvQ7zjGgDLLm4J7MRWdhAncdUVCZz",
  "key17": "A6pFSKsPmSomhGj3H5LFt32vUwPqtZCsD9v6Lu5qwGTjEzfTbrofTpqnthbNExkPsCG1LaihCJQNyVoQc1rv5sy",
  "key18": "3YcnYfrSnBGnR2SLFgDL5FJKsFpZG6VJfw5ubq4APQVG2i3BMsLyPGN1XZkhmwcGkQciS1NujXwU7pWda3GZpqkm",
  "key19": "2Ap5bicAeMsn7LnVKPweirDe3wViyDJGjuUHuDBy1CB7PtRqqdWwNm16CkpBU6Xk61LXvG5y8dEtnXkceGeCYqS6",
  "key20": "33gjtB8yRGZUe8Pfqrp9dmE6Z54vW8rzynJY5Ehkp6PMquP3uHJfUkfCWQ86aAp4PSbSr2DfcVoycbJE8vpm2hmU",
  "key21": "46kDqD1sAC9FwrCj4ZjWJW4nKHoREY9yWSe7JKrC32bQULwjZwxtLhN8Kz5JvbqQpsPUFkBTj4vUgWmD7VBRAMzv",
  "key22": "5yF1JuxBBmKHFCaEtSLnUn3what1MUsvhFwQhXEBuZi1EDvHu29K1532kUrnnzENeEG31J9JtrK1Q7vcpZbW1yQ5",
  "key23": "8LtEmAtU4Y1WyzUDnPidqZZhjhwrb2G9rXZRzjUeV7LuxCzt8PbK8TuJfp7YM8CtrEW3wdGqfW12BX3iooaVg8a",
  "key24": "51oJbgMzbZHeAwg1HGUZuMV91iGjRSqBKLqMbfrEPGNvrAZwD46yUW6xvWkP8cWHxdiXiUYaqWqnvMRx4NmQcL3h",
  "key25": "5GkrwL7EgDYPMb17sS7BjHCi1NJYqo79iam7o288yqFaysapVY3z178Sd11wm9kCXHZu5S1B1DvVpTxeTmpW2zAP",
  "key26": "3C1voCuA7FqL51P4darpJ7o7w5r53y7Je2JUd3SLmjcUs682XEASrFkN9UHrDWf7Pa7Ypu6PjyH8gkapCUnRF46r",
  "key27": "5QMpzoEa416PfprA7CfKWmLb8vh1faPAeXEGtV772JU3V9cZQfa8yzkvtgRM3esvzyVvrpETf1ZhdTW5vq3hzy2G",
  "key28": "3FjPZNdYZGUC9oHX453oMvVrKXePyc6sNwythB5WScin7ZiZEjHJkcPN4zhaKCGFmWmBmS4pizujreBXdMqWz6Eg",
  "key29": "4AJ2P3ms3HwSYSzE9X4KkQhRfpuFkxBDBuZ5shvZMRxa5i3w96o3rjX63yutdbU59iLRk1RTcWucD8hdVSJtxbKs",
  "key30": "4Dg3dYhxZu5fkmRu2AFKCvKrcmkcfDTkpBj69CtGJ9G6aEUk8yX4z5kQgod3ZCQRRbjxfrHcjDkPfMNPkujq8rW",
  "key31": "9YqNSc1gkt7RsxgKmvyCTEcWmfEPWojhfDsVT3Hmm9aJwEWxDQWJkaSqCr23T6amJghLiqeCwViVV33wRLTB9Em",
  "key32": "25FbmiRi9hNADX2to7SuJr3PWuBKvMB5pUj2VZ6TG5s5kcSsreY3qYCiHAKCC9zPqr4a8Xo5XrcmSE5MtJF3pzfe",
  "key33": "4XFPnxPfoUysQRgohZT8s89ELHfgS3GJtvqVGEanFRPhMCbtdbh3jzJ2c95YMJzxfLUbp6HZcErXSsHjnfz2KuaA",
  "key34": "2sqDCdsjQezy2pzwwfuNuy672eEpBSayDvCVn5QtsrK5xUE2j8EQjTXTwQKxgnQkQHNzpxB8ArK5WVWkUYJXFbZt",
  "key35": "w4PrqMZUDRzax4k3fZu5b6kvnQzcMEQvMjpik4FQTKh61R1kYiiD5L5QiwonP63nqHB3pZgfx1beoLjndubQPbX",
  "key36": "2QVZDRmG3cKQd95mK1B2mLdEW9kYkyWyUhakP81ZeVPJeo6FYDSKXq22gzmnY6KgJ3XDrFddpHcsTgqyeDaZHaKD",
  "key37": "HaZCcBV1nAhgaGjf1YV4RNAn7bDibP8HcipDBVYdJsP5ZztUUY14qjV8RYZ9m8fPSjFC8TxPDzShvUYuvF71Dox",
  "key38": "3xCCmzTTYVqjBVQCF6mwMCzoNVKrPGSg6rUkXUCNX2GYQSaETieYojBfT23AxpGWQhNsS518aEN6SnQohnV7bVS1",
  "key39": "4oPVX8yELdHc27hpuVssWbsio2DC7MQ8ALJNWQqDpumRNHtasQbPFvwVNqyQwcbdh1HgrgaHoRGGKEcBWMb9DeVH",
  "key40": "3DCkVmAL4jrWTC9F7kM4dpadVb58cvPTATtkfT7fJd96Kwq7qs2C8xUMHFUGbfHDpRtU5a6SRu2pBHHEZ8xT3Sfn",
  "key41": "5n3aj7hup2pszDzV2Yc2PVho7pj7yT3UZ9UTHeaXKctrraAP8X1nnVpyDpxfsGRHT5AxzkYFWY49UbXYEmh9uj1u",
  "key42": "3NYmL75G9o59rk81fvJs4EJY3NhCZZnciLdAsipbQeHrhBoHZf2MouH6gA2N2p7eK6mda5SkKzMGEXohG7Pfo2Ay",
  "key43": "43eZDM34b8STipbmp38aqiFQZz1NgveRHMTSN74d3QnyXHceMN7MSnHrTF3U4mjfQTjmE8VhMjp48czwSAeAK3xV",
  "key44": "2XHSqnsghHKx6TjKCkdCtYbCvsyhMDzeZTFZ6X6XCmG9cDXvoDLRSUSGdRms6iWqwDkby6sSSJ4TmbD8q7846U5B",
  "key45": "4g1SC6ZqrmB7Y3nd7MHp6xh3HUhPpizCJE5RWFSxXrLvG4mn1yWoKXbH1MuoaJNeGnBPd1mJETwDckwkCJRfqBPw"
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
