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
    "fXPrnUuUzLneZP7kEpdGU3UPfNRz7bHMMpFScFmDWHBn1ZEmBeHbxGSbafq3g2gNTNfskFb4HB1NguadfoXDFDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y2mX1zbUT1LcjrECDfP4RAggj5s5kVurCVBvyrtgMgsZf9EnP4cSedQf3FNfQkKJa2T3go43Qb21gyVQS9Frui1",
  "key1": "WohQ7NaVeydUPfVhCoNbHHcYFepFQPynFopTUavzKz1EXih6fFgeY3VGawNKGjzsNtxmvSSsNWEmC24bhJ3pMmZ",
  "key2": "Uzo4NCgksHMN4JQNDLBu5ZWat93K7dV6rHpbisBYQyaFvh72WNPugtuXcwigJaNnt8qk2KsfZSf7Z3FXyRZ554Q",
  "key3": "2dYNez3k6UqgxDCgFuhaBcNgeRKbwkXu1satbCkp6UqmHt77U9r6rvCcMiu3P42M6txkkDHWUytMSDE95LQ532gS",
  "key4": "3iriacc8iso7WeixiwMUEWTn2V2qQDvjeHegWDvkxMxdz9fiPb4psmrCzkMYrjFLvMca5Nvzfi317jCXVYmN8smC",
  "key5": "3WzRcQJsMiN19q6j7LT41YBxH2WJiUQSNXsEAVsWmX9jFmgx9ysKu1eYNBC96Dw7gt6rHDsTtrsKEnA8G5pFQu5C",
  "key6": "fHnS15izc7kMwDpSpwUuzdz1gDd1ecsBTfaUGGRHSqrMXKcqYixgb9WGtihgzTVickgdHEuiYcpxj3zMPp7EYf4",
  "key7": "ud8d5RJhsS7CZ1rxUn7Q7F9zFM8AvMvPjqAM9aX1E1KwtJtMhDFxjDxjbMDSz5HHDag2RbbCsPaFwDLWTHpG6Fm",
  "key8": "5moB5gWsS4sEBFpczAQPgKLes8GfCkmPiQNSEPZKFk33vJPLU4mvxTKFWp8ZKT6i44fJ2ecpJv2PTzAYwqWLY6Zg",
  "key9": "3XsTFX9CityfGaPZmo11dFTzoRAQsR8UETFqfd3Xqj69aXFRCBETq6vQdZMLj572f87a5QDwAhVE9GPt7WjSjHe9",
  "key10": "3vLmMCdkQqqEhSDjqF7vhHyENib53avF5RFUbZKdSs4fahiAoHaTTTpmnovaYQBV1w9efFPicLHicJQsmqgBrRnv",
  "key11": "3aCHbyrQyfVwUUJdywzCDc9ebSHGbdxDG62qFEuXzzTueXpxKQfEunsCi2dbjUf62m9YfYUJEwQC2BkwPADigK2g",
  "key12": "8zxspyGKmN2afWQThkydTipou9mfvFuz2qczQUiNM6FcEFJGwFPXghEQQ3n9tjCgjDaN9FqR1R4MbUoXgVF9hYg",
  "key13": "5wfwCmRwSMV4xvd14Ax4hucDpzebqWuL1z29E6bq3iFxbVJSPfZzaAJjBYqP9XUiPVkGGePArN5cjtmPvntj5MNN",
  "key14": "Hd3kmXwWNg1sPxpYgBqPpEg2ksshMERJqFDLLh7WQSscojgD9b6w7pHHVNsHdXbuSJqRxCFzMYv5SHFvGeWUbX9",
  "key15": "tGMpA5aMLKCg1dirCQHX5gduN4Wj9CH5Jxj88pnZkBEPcGEcFgVWj2HZ3FhSsC6AGjPj2wNAmeJDpoLfeKDbQ3y",
  "key16": "65UD3TDnYiM2Kwj8NCEyzj4i7vPFxMw7X6VfgNRqTqAcGDNaR9mdfJ3cNKEGGXV3Z8v3dhHTWm3dqhwVtK4AF2az",
  "key17": "4fwhXW3GaJx5Xroc2Gs5MA4JwTGiLbhxVFF6Td9ZJCY3ezv3pS4U3YrJB2DFup7uPQN41QArQwiG2ddpCyj3MqFg",
  "key18": "2VfoXPh3JwPVozrAM3m83bvNxuixz1X6cjH5ZsjE8QSAUypEGr7A2Rc1qegSSZ32VVkftHVUYkmRk34HkPwcDjgL",
  "key19": "2CvqiU45GdvTTij1Vaam6BoVWvACpB2bxb282gW27Mp7ZGfg8V6d5fWGztz43bZU7CpS7MDm334szkxGUiJQqaFc",
  "key20": "4JXk64ePuJ8UmkhmP5WL8rFe9EV9XVFpcnDHquqFcv6B2onedgLfFEKB3HBQo6K1ATe5evkUUcDeE3G8pfJ1TAFQ",
  "key21": "gt42qSv7KLrCxKd1u2V9XWKJcXuR1iyonRuJdsQ8jPQqVEFEVVRyhHtwi42xskeiBisRwjF8YwVvvMXcd7F3Hdf",
  "key22": "4yZNZDVaGBE3Tyqbx8GzAvjWk2msAsMviRcFrHJ5zorF3VRC8AHgRDJ1KyudNcNQ9BT85pXF6CiATkRuVpwWZQYv",
  "key23": "3NNdcp3Y3SGh2P7wcR5hZPp6sRwHc9pZGRNo8csc8PvHC7UfUpVVUY8eHjAqusFPSsaSxz2FHYXV2gccmqBtZivT",
  "key24": "4jLBUkmys3Z61MdBdSy2mr78eNet3q4TDfFoHK4aCPVNZnZDN7xMD3k217DWuCPrVDMMTb2wPjPfLom5xGGMsgS1",
  "key25": "67U2soLyATfi5z8Bn6uwRvAbzo7VaEdBcGyAq5N8cPAaBXdJzk2UcmFRt4SZJmUq5NenHccLjAZsWKgHsy3vuxrW",
  "key26": "3R6EGNqZvjU1VKY7DTwDYCADs7LCpFpjy4PSDgaZZRqRA9dMKqqzWVyRYKibyhMSGqWSR6uNmbG3ZJgg2U8usNUD",
  "key27": "3Yw3P2NiZ7yoxAvPtjUF9iatF2rr4ZYwz9kDVf6guMgQ4TY5xrbgytJu3ngUAcqaVPc3j47tAqi2WFsHkKrKd13U",
  "key28": "34FMCQWqs47GigQkhS2dGyyqH9DMDy7f75kFdNyWHxpVRqriGqeAMHfmzT87hPBpaMJtysC68qcFKn6nG7KGdD5x",
  "key29": "15e8KbWzmn3fUvifsJ89S223vPdxYUab4YYbvFYmFq38J9qi6KbX4hwpNJ55ZyDzYrwPH86R4AcndwWJC4Q4yWj",
  "key30": "3jWb8bydw3Hbs9X9fnizbBzNMSVAaqVBAniB9NBuhojQhU1Gv7qxv6ALj8NBCiPWYsM6dVbK1PLjseLkzYun7gUr",
  "key31": "3TWDwt7izSKCXfuBSBeXTbdRTRr7mYvVAHFKkoPqGFQRZnERaqcUn2Rgqtjm88P5yNJPr2m1AoNEYvozWLQRmJCm",
  "key32": "4mvqQu9fctPaT6YCaBVe6MuXjUzR7AWaWTerS9VFEXFmMv65Ln6UMRz2YEtyUSVTSKDh16QbuvvGcx14ktUDD5G3",
  "key33": "2S3Nma5WhfMxerz23KxSiyou9TVsC719Nq1GyvhwLap2StixJqdqSUmEeETiYB1dLaErPdtA6nXMaz3u9Eaa8H8b",
  "key34": "4tE1jafzckEf3yJH3vbzmiTT6bBbw6MbYXAybUCE5UCn4cCKNyvVh5WZsGrcW9WDuA6DkAfjDig9m2QijHwJHZr2",
  "key35": "dPnJnA4y1QEkzrEQJcSDRKNVngB8nxfSiH8QcBuj7vWQFSd6GvVYL9L9kysooPYS8YqzgvLJcQcMWgHJ7mwnv3b",
  "key36": "4dyxDYKBbDxuQeccgKzABiwhAgjCvsVV3p9irhE4dCi6ZERHnZvoE16M4XcsrzYVssAr2AHy1KRZdzXzs65Vwe2Y",
  "key37": "owHXx484Xx24EugBa6twBL48NUZRmrmmZU88YWrcGeS2vttcJ3qzygcGwT2GyhbjfqgHDzZKo9VkRj8R8cGb4mt",
  "key38": "b5t4bEoa9beUhQAcPikv4mrgkeBS3KEmM5hxZP3EuHvLW2MD7Wt3up6rPCrRM57e4e69tmHZNFhUQL7vEv7MYt9",
  "key39": "4ssUAytm5zA7evpond8fw72xvhkJ82cXRKWmHDFmgjC4AsiCgxQVWqfvem3eE7JHaceN1TFgQ9fCcmVsT1nnZH7o",
  "key40": "4CUBMeVnYA26oeDvUCeYH4gCnE8GU8KpLK2pqhHNJKpSifVtUh3187uY5PmhNC6XLx2TfqvaPUTpcDHH73iNb5Gd",
  "key41": "25rGXikmmwcXNUpnKrcRKcDjaoon3hSn7Zh4Weody8A7MDrtBK4r4Vr1Xi9HfbDfy8KE5siPHyro6BzpN8nG14G9"
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
