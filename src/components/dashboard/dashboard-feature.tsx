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
    "5N79dAY6XEBAZ5sv9siVVnH9Fvz25bDXKJ7iRLximngXx6m4uAFAha4ax1SqUd4XSudPUJxJrn7pettdPYAFL9DF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KzFiv9zXuBq3TsHJHDSXnP922hkMXiqaqfMPCEGP8pRopMfp95Mme68gZMNJ3hjTM3e86SjXCZpamtZNrnx1UfY",
  "key1": "57EUxPd41xXGHWEVXqzg3h1i2yVeney2aLDrXAmKsZXSFNvUKtazzVMg4XRCG4LEr7TqrGC9iS3FVYWLdLdnjoLu",
  "key2": "4az9ZpfCFvXp8qptPmhB8T8a43dfu14ApViySSPpXknanpdqZqXX2XrQ4D1prfQ7QbpoZaqVjAZNH6Dc4Ziucq3Z",
  "key3": "4wjCCwUDKt35ye3TFoFtj9oWbcHEp6ww33huuusctaD9SjhTaQkEqQJDpBqrspcTvtUDJ55dhDwm1fnhzsiX84N4",
  "key4": "2sDZtHYNRdYWGTtd5JC9ACRHriFJwAUSmzvpbc5ParGefmSXvJWwE8Fv2GJSTp7v5nL93BfjACKxqQDSVtRAqqXh",
  "key5": "eCgiJ3UgnnHPpZbGsEdc9UbJMh1WPS7PczHnegx8kH61uUvSAeturjZ4fph8X6Y4JFpj1RZqoEKMNpRTPrtK8j6",
  "key6": "48gzqGwWfErbYv93MepvCwNAxuN2tW4AyneNZhXV8Ptgo5eX2Yr4uEmmDRf1H2Aw1LDiQJbHMnYAD4e4s7z1QhLd",
  "key7": "iDsuBQ9Nqa84nmfcN8FKiA7gUYfgDAVaafCJEd91DMTDZLb2JUfBhMUxqhbYnQzs1zag29CoYgyNBDPcY6jC5Pe",
  "key8": "4s67uKKxeciB2BbGjsqJbW1wqQbmHyupbrnrYqYekCfNajrf9AaQpFsgw7MmAKNAKCghzE38sP46SBxpu1Kyzcut",
  "key9": "2FWz7muVMj2LvuNkdHxUvn9gqU6BtAhURyXv1y5bccGpaZDrvSx9rqDqQzCeYiCxHgi4YVGxwywtqvy19S56QU7W",
  "key10": "5eUtVyqup14xCSSmkECc1YqUtgB7Cr3Npt5nPQuMRmQizmz4gccvEXJcsT5ENEv3ALjxoadmNsDbyWL2RofbuG4g",
  "key11": "2ZH4jGy2GZRw5zhfx25rXwQitwtZSym3wq9yy32DsxBDBXsS2yEcWp1rNeg3JDhUwBSqexz5mw1inpUMXrXCJ5mi",
  "key12": "gVZ2rV1EeREnjhiQsY48JFhN1vWEvAmuF2dtFvPpvTskPCtsUjG6kuSbAWAcEr4iZ4zsjQBV2PATE5zgTQVrKjC",
  "key13": "4fyuA8PfDdum4SuCzqffUmzE2U8CKYCkmg1yznRPCZgS9auSMbUkZizZNvBBAq8s3XciEym1wLxhapN3jqdfPuRc",
  "key14": "2Ls16c1o5koFQGnrWsfX5KLxv8bJEcRGcLczFHxdgUqheqGEqsSuLM3dvkhkwFCVuVpdsU1DiHkJcT7fMPZyWCA9",
  "key15": "f6z9RHz6vavmoDz3ynsRaECyoNkYuUSqCt4sq6yGx8LrHjp5ccrPcvrBKh5ki18VCaX3wZPNLuUQbXCGY1FCfih",
  "key16": "3Ta6uLgwQKKQ4oNfcQ3nf4mPvcUxYSUQMVmcyYfGfyyjBXcq5LbriBQBRP21Bb2fnFCadwnpeDTRH6od3kGv6Rew",
  "key17": "5BhpbbKy9MNe884aHfn9RysPWrMPf7is5tHHrF6nKYT1FdZCby3PACsHiQMuU7k3jNeEYv93YKpGvyhdMA8qoFqF",
  "key18": "krnPtWDcADzuCKBHoiWu8BixvHCMokVrhFZdDJARsBbHFr8hXLatMCoZta8vvXevAUTuxvVyLV89oMBcJmvLi1t",
  "key19": "nJoDxxD4hXgQT8T1UVZjNxVsJTYtis7ZHWJRbMtn5ad58aWemsNCg9dHkGC35bN1G976Fbapw79go61ocEbipFk",
  "key20": "2jb6zM3yVTcG1o3UHvbLKNBZVSosFZhpsUZaT36poE8Y1QXtU82jZ6xfnvi4VE7QwmqkJanVw5D4hrMivTLg4LhN",
  "key21": "8DZtcvxXgqtfs4bsn1PqKb2T9jYMBvYYnKDvaf1rNDMUfDTbLX2VeQ6oqqGeo9CTKqvy3xvmi1p7yxs9r8Mh5fg",
  "key22": "3bbWq25dbAz4AbcshfYAeR4MvLJuMecZKM2bh6Mim8TqMWLCEbYPr3VyqpzByxPhQTg6Jeb9LjvGFCtQqfpx62rY",
  "key23": "3FgNLGJ9vW6H27uwQqCZ7k9NGmufDMDsB72gseZNyF8Qm5pQNRX4cmcubiw848GWZwpYSix8JTXo9wDkpLGhBuGM",
  "key24": "x5zagoTAJ4ZiFs6YgeGwEofWJY3GkzwUKt1BoEFd3KgaTewchQtdHTmspMPNfkXB7Akexc3qGtTW5JNwWp3bAWP",
  "key25": "4hWhqeAUCjSqf8aVb4fvpHDkwgvkmQg3hJGJrPEZhLwJYwgZeAajSL7MWjL73ruDdVg2bb9gHgXhihjHE94Rn8qr",
  "key26": "3CkCVStpSKvjukaqyA4ZFNFerJ9e1bebuR6qAnUzhkjg2bF8MES1a1uoVfLDgaQiHWPHi993ZiWiy4VQdnVdgL5P",
  "key27": "5KvPyCrWWrWsjeiVDm8ft1GieEcLxXzWgocy5rKSfFqzY4A5rnYmuqgaUQQKkGnqk7Qwaui6NUE2EswPJT4nsvjC",
  "key28": "521XyB7DZwAXRQK2qkKeRHDnA2QPPgh2YkKyUFrGeZANQcxfw8bKnfN2hE7VFnsSFibEH8eRQH1WKw3MmM6JY6kv",
  "key29": "4CubscKNRmUaqNVNQbM9HEaBPwJThya9Emn3GNuFqk2hBck6fbcS3CqsGohGh1fe9jSHxavERYpkLeh8CCubhtAp",
  "key30": "K3fkCeYoivYD7w7wGyAKhEjka97r43jtNb9vYDmDEhiFzuPUCCSPjD4SdaZTE6znCtLMJQBaaXkeszyWaQLPaLp",
  "key31": "53Q2Hwwx9PigNuyPZmChetk719GNQRKtqLGK4HgDpnv17y8iZDR61Ad2f3ePAPCFm2KHK7NgBAM4nPEfT5HBFXg1",
  "key32": "51hPP2wybRp4VJARyFWaLt9mP7w7UWYnYYTaPcXtTkhZZRjoAWkr7m4kWFt7KcHGLZMvHsyMepLRvtkgD2xbzHek",
  "key33": "cfoWPdCe4biuzxMmmUZsMLeCviVCKUyWgQTRcT4y6fP5VXzXC9MEvR2C5YEHe7MNi6BmQrZ9L2YPnRfy5yYiUfC",
  "key34": "38dqXYwnqKh2d1rkS8j7Zg2oeNhGFnUCijadbUF7vN92RVWLzjCvR12V9FCtAeMhxB1DPRdQZF4GyHYCebAi7Yr1",
  "key35": "gVPJUNV44tqmkWD7F6yJZNicGSFRy1DqiLTEAZ7gf7eo17NapxqdShVy9vuFjbwVKLS71wweMHjdzwPqcJ5TPLT",
  "key36": "51KywJUzgMmcE4tYujCPafiv7MPNEHpyATNN41SB3bqe4tLui5JTWquB9g5acQg4fnckQuNDhaYywMCBC6N1oLUM",
  "key37": "tKtcHSceMPvZECH4hsG5y46PRMQQcCztVJFZNbGDYDrhBQg4oXq53yRV1EePthAgjbM8zpGWkrUA3NGmw6yTEoK",
  "key38": "39bn9sX3SrSpNXFAM7ND8KNU7LkhHKzxFq5kRjjm9RpP6BHAwj5aG197TFSQBW6YJLrS97qCjVE7ctvKS2LUfyDA",
  "key39": "2jHeaJz5E5sc8Avbe2AAtoiZDDECpE4KmsbRf1xt22tXj7QcukmdS4R9xRe1FKRvFmoMw23BfhTxCrmEHCKMCdBX",
  "key40": "3fVFeN7DpgJgkdsAZwkx9djVK1Lzbab9YmwFCAnnyWDeyz266jN9bzpEJc8ujHA8YJn4QmUQa638Y1TnVeCFVUhD",
  "key41": "4WyZENQC58mcPWLDhjCioUJ11HkU67RRfZzhez8Kyah5Qy33cRsHu6ARdX87B1ZiDsLKp6voPpX5JuPXntipFtM4",
  "key42": "UUMTwBgciV8N7Dv2cehHaDrQnBVu9e9CvSsFafx2yin5JgyLYqed1KcW4CXHtRVXSFgxhPz5P4M1Qbu5RLgEQZi",
  "key43": "2D6EGDLD622xxpUQjptHkRXF16petVwNeGXjttjoWDAfDFSjyxgteuLK9E81gWU8VQrnyZoa1YNLofJMEBJr5uSG",
  "key44": "4C1ZRWoMRVnmUXeHQnnPyHXRnWXWbHt6cAcV6avqU7pPSCxztGGo7BC4gmRTzd1YCbCb5RV6vLQNwJQ7mQuD8Bna",
  "key45": "4sjFpU1jcu5jSuKydqYuBiVpcUZNTYwkT91G4J7DNMu2ib68zKgzpWqhPAYBe16YT4LvsQhRDkKQKtQoACGE2Ntz",
  "key46": "4ha7pMdAZdtSasuqGGddwrALXrzJzSN7st1mDc6PDRoWzjFpJxkRoBmKGtm9BZ8NwS163yE6k3fhavxgBaSyCB6r"
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
