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
    "2xCLLd8kEihhZkynTivjUvaYNQGzMhkU2dxELpXv8Sy7fBh2PRDTWfptiYXKFcnu3G3EELq12r4NQC3T2juc3d9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33FHoK6Sen8XLuQvty46fjzH4mHVVQTWFLTbxKQgWTKWy6DtYA2z7gfDYeH1xei2xSYpCpXFXyjdMHYkq6NyAGMg",
  "key1": "4tZ8xzn8p46woZURUunDxUTWq8rGVGma5WLHudeqjMEHseGTKVN9q3KK4ygELQUSVnczNdJieS2E5wCMXiDLYo7H",
  "key2": "Nip7t4Lg3qpr7xjKRWuxC5txB4fXbze4HYsJSakTGnpqqAQwM7VUQYXiWP48pbdWkcqzTJXbze3znGSq3EF6azR",
  "key3": "4rSjKPuEEfiSbRJTegqQn5wNtZAE3dP6YjenqV4KooF1Q1MhsZsJpvsYyQfjrPhyXNnf39R5ChiUCEarvL8v3RHi",
  "key4": "5TkadStAqHHgERzDp442ajBXHR3PUit43iV1uf1g6fuPGhV79FcqE3w74Q8GSoowAXBRJLBwhrBXza6gBvTfNJLP",
  "key5": "4WYisqxBXPeLunj5oRTACNoHSdwFTndiM8TdNLwCXnCPLaJK97QNqHBsxtjPnUZXMDK56UFwfAG3wcJx9kAAREwb",
  "key6": "4BadUomEWFmkeaBec1Pe1SMtTwcg31qYqKKUDpHo1btcnK4co1Bh74nZsVr6JoxRbRcHZYrLZ9UVk5j9oF4tDkmR",
  "key7": "3kzK8he6w5S3A5SmgL66LRp6VgqdFtsr11HCPbcGgDitHS2ys4CHfLjmcb8kQe7TJiVuybkm3Fx5CtANJpwv5ojC",
  "key8": "5Xy9eHcdQZJ2kVmuw1f29voAEo76vyzR6Gh7DQ5S4sQ8smmfPZiLGySyeU8aJC76oiywZeKc2QScmRPw5e3wTN8K",
  "key9": "357GFpVeK7HpFiYcEaGEmV42kQrXM3HzaC6Ab1AEEfuRetcGGTvjUS9PwhH4FMbkYppKSHmRcPH74ea4rzYL229x",
  "key10": "629YFK2S8ruVAumr5ASMcCjdpRtComrwnwDv9pXyYhBsLRbMTgKr262ARuJxqGxnWtZwjY7iWCPdswwBgu1Ltd6x",
  "key11": "5FvuwSBx5vtcKdHNwFwEVkD3Ppn6NGTKgrvGDSS8JAUfHhPV2d2wggJ9E36iXTrbXEqxbctf3hPMtYFByKM4483B",
  "key12": "26pJTsvDxLwEhnBQRCuCjnaW2kqcyWWoM6k32mD1Em4VEcmYs6qSokJVnPjJ7ugrx3Ku82hWifUNA1Yq5q23wQvB",
  "key13": "nba4ayw4bMkxNoBGytTfGjNJC33mTJZmDU8JAHPLGDEtaaB5F6Ptm4125HyMTMXSCDDC4FEAA8s1CNAxrUpoiPw",
  "key14": "2NbwpE4JpjzBec9HNbhffHMGbYrCTRvWAm2RN4Utbk4UsSmf86H5tgGEjgob2Zio7ogGwdKWv52DHYSH95Jv2uXZ",
  "key15": "5xm7bJatNCNSU2iqfjmTKAXCvUM8GgGbAtZBHvFCsSjrx2npqjSJ4mwbgXXE6EkHpV2jGX4Bwa5c8ATh5uazYTWz",
  "key16": "3i9k8HFvwWRmxBbq48cCTYUM66k2ZZDvU5Nwn23RGeLwQMz6x1Rv5Dy2Z1xhJRcJViv5K669mRo3Ds2CmQhp8Gb8",
  "key17": "45LfgjTPHq84kho6KsySQuuHSwTg8dauJDBYERF49y4NCgus35Wg8422AqPiSTZWgwBbZyLhoisK8kHjpZqm6W48",
  "key18": "bstLsSRxR3V8Hn3u6Ro5CS3Zh3fmfAaesMaNwPcNJ1oUePBzmwfJxZ6XhZRszusEtCnCjA5se1gRFNazXaPDB3p",
  "key19": "RhnbHodfBjxKX9cyPWiyzcn2ne4kvmVMdUD6uVzb9XDoqqeK8M6Vo4SseFCKjvMjbCh2b32y4cKJd8KrkavyPc5",
  "key20": "5bXcDYfVAH91MTxapqGzJnP6n6LWAwHW1UTa1u6C3fCoXomYLkajhBmWwyDVH99vRa8JwYySfh5bMiEQ2WDFypY8",
  "key21": "CvqLs9aFXrCPoLFApSkcPGLVSpdLKysdnPaqxy5P5JYYen9HqV5cd6uGfXPvnAUxRpe2kYFDobgmNWiSBDcfoPm",
  "key22": "5U5ExbzVMFpDF3wPjg8WacB6Pc8uSy1WdooHsN8LM3R3aUXEvhP4JkD5WFJHKv4gzspqD9rHmTgMVisRkJsoRo64",
  "key23": "vuiuxbF5NT6bJfQEf6vjAWe6yvs8D2j1NvQGFoH9Y6G2fN8VR2RHFVAtDNDM1FVWMCGqFunxeqiovPCg6zUe1nH",
  "key24": "6sqGk3jouUyS13GHADyAEzKCEsXYSPrmHPkjb5PdxbaQ7VVAmbNiRrrJiqHD4WPBkwojGD4gbQPXQABcsDkifxj",
  "key25": "fKYpf6qQrsMLCC9RKjipHPYXrMFZpNhyR6CyN1GP1F7P3V7Lzvr5VeZWPJsoDcVW2Uu7VzeTgXkEbMUUquzQMNn",
  "key26": "5koKoGSeo8XdDawtH8U9rwtMJ5FKFiZ4hM8dbkXyZZaEdqBy3YTriiAX5YkDHZMvPSHqbraRyEwH36cLcoomYnig",
  "key27": "5vjuU5BzshN1Nj9SWkb4EotNwFmdtkphXjt5HdYfbfqNz1nszrmyfrZjmkU7A66awnfMy59uCuzrn8gVPSoCHRY",
  "key28": "Spmkrhtv8n4ck2AqzsyBfUF5m6zG6KAmM2jiGQzR76gUL8mYy2UFjuqrDj2kAuyhNJqA5UPtK9CH2ygd4GqTroC",
  "key29": "3Lfa2UqKJQfYwd2ggWw95ykFL56AjjoFFaCk74pb6PRxW4yr1cjHRdKDJTFPyo6kH87J5A1jLDmrJesuemGRZiXV",
  "key30": "5MK1WU8HdKRQU9DV1j5pUwcSvomcU8tZih46u3oazQQ9U2zw2nVQzxa5H5qbgkADRBN2qrsXs5TgRbpv5i4nJZbM",
  "key31": "56WMk6mqCGB3vPAAWbtNKRiPJVk1fCsw9r3EdKchnAti9yfmVpkGveHgndKNK3dHE87QvnNhH61LrnWPpkE1zBJ4",
  "key32": "4QGJ3A6FzHnLrgTrSg5Coug16JrhPiTpddhmPf89L5UAv9BeG8FoZE441kxioYTKQHY7UyEdQhgznEFbj2hRYzNN",
  "key33": "4ugBxAsfbMragfsGptw3DBDHhjReYdSzDtLnBCiGYq5N7BhEaohssmo3H2Q6XXrWbhytaS4gcbuKBRQ8kVT7LYdW",
  "key34": "2pJdRzAVqLQ6HucRfhCEqVgxPtK7djPgfsfSJkQ5YyMZ4LMVww7ReC1vHZZkxhVrNL9fKqXnQ9TJqcBzcPZtpcPz",
  "key35": "3UBEaUBoRV1KJxQMXMg8z2uC4ZA7ZE7PYQ84o4aw4GaNj6Qvm31bhByeVKL8G2USkGNAfJA7taAaVpaxDP9FyTY4",
  "key36": "2bdoztLwbo2rqRBF6PDToB1dMFQj3Gb4QEz4SadAaDh1Ka3DEcbXKvVMvk6c6xxTT9ZjoD3KwXTnMHHMytSjgBL4",
  "key37": "2E45g6FkxujXeBT5hQP6oDwJVsrprczXvjrZcPxVnEiKryhdRm8BZc44guDijwSLSW78RraZAeFAUGB7cPqYXGyh",
  "key38": "2CEE3xBDPziJtzJg3ergR6L1Dv3ApueDwftp8aWU27zRZAcPbnyJG9Gr9Vw4ZyzkmoFtjJwE65vyMfPNzfTdT9rC",
  "key39": "3yKzUKPPj5dgjdr3ULyfua5Bw8bFWiqqZfCf6bgw1GuWmNxAEkHnFWvriNnvzYQWNJyJAPdGcBZwTsjaBmTc4uiS",
  "key40": "3F66miv7bqgZnt4Wh2EUbbjHpFH3c2o2kkchydjhcEsjCefrCUKWkg9FbYA7YmRYU6SHWn8xo4qqUEAXsyDhumYz",
  "key41": "MW5x7t5CQ5V6w4aDekwnbGQyZLWMijSXYtqeNuwujd9wPwJi1LZyrswkLxcYkhZSWgMoDj5F9K7Uasg54n5WevD",
  "key42": "355uA4q2t483X7sYAQYRvxsxY1cBPoaMebDfEkwNvprHEgeham5XhfFNkYNbnCYkowb9ThVFLz8m5ZxsHcGdT2ho",
  "key43": "4Ytvw6skc8sWfokkFGBupJgzjzKqi4BtWUMc3gDgfzVSsGuj1x8Lg2ub2XRpLEbnNy8v2zNsA7GFG9Qv6hQbYPFW",
  "key44": "3PZSxaN5uKCAwoVcQWqWCeBbBv1kmgUo5xRnfmZ6KATnU7N8dbCQUq1ZZoNMQ55kBVD1TCnDqABj3zUxAjM4wNrh",
  "key45": "3puC8ihPDQ6M1Dp4FC1BkXKbJE45eALteCSe6XbjY2gRy82bnRzLP8GhiVF76ifhMh8nfmsX5EzMeqzaUpR6Fmxg",
  "key46": "4ety5qXaLXPEVZHpnvomx6BRa176uXtXfDNmSvpu67siv1W9gPQSRif1A4XqnEDXSrvTjPvFUeaFMdsJFWP1fFSP",
  "key47": "3fBe8kMCuDkDgJwZjxGokjhhyamc7B6TD9qBtBQy8pkVmbf5Qug3fQUGjo18g795EcFF8Enj2wjZdAY91HHg6y9w",
  "key48": "3B9VdW7MUSi2x3SLRiGdPAa72FSjwLBVVhGbJ6ccj45eWUqstCdVYcZeukP9Wwf2a4tYPt91hmgQsZp9VkPBLA76"
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
