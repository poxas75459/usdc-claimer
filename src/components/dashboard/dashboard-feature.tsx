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
    "5AJVGgZKUsnZVJBKcAgMJkoFMjf5wKsVqXuAdywZiFLfEo1HSm2qMT5Y7cwedZRHruQuPt1tC5YoFLDLsy9ppun5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ReMsLmh3nKwnSmazLU7J31wtBtVErtjn5hg4Xw9dgLrxDztsh7epkxLNiMZsiE5zJ4bqbr2eNPPE5icw2Q6JVdN",
  "key1": "3AJ3pSpjYLNbiXGJmtE5XVTzs1XriX8iUZXghhaks93yw1xEi6DtT44dnyYhoPVKmz3oAjiA1qjWPatUsmprd5mh",
  "key2": "2SBADSrFF6JkhuJhTAZRE7pKHQEE7U4969bYZTqioqeAHnDVvXRDqcn9zeCEgBnk9sGUsyzYtHVgWF1cB5afF9wB",
  "key3": "2nXo9FcATrw2VeXmTvtcbTt42WbK4hrJ6h8oeXkc17UAAQMat64LM57ypeLzhocW1uvocTG58SHGRvdewQnJCs96",
  "key4": "54WSHnDoGdm6KvLqLsB65G3VYCnZeRe8TzqSYMDKJmprAvubnJAvBfRW4qommFjrDtCk4goch1q4UAkyqAR7naMw",
  "key5": "5z5PF1iL4DjtmbtjSFnd2Xd7zuyf95QpaYx6Y1y2WfXaJfxFMRSZZCsVm6zrVcDxyzWisKv1Mo3SbPewZbqaCQ7H",
  "key6": "2XXMjLLygX3JwYbhgA1cDn1mKmXTvbuNyV9ERbnTGqJ6RFHMMhgpzyu3rqc24xt1bXjwUQJMDenK4ESFXsVyD7zd",
  "key7": "4Xx9Dprbq2ss9ga3aoZ3yoCWMaeR8uzo5bwQbxmzBbLALJvg1Cu6WDkwxsEUnQmXEUGnvHEtcQPJVVpVuQDjQgv3",
  "key8": "59iMwvKFXNp5hBQUzK4Xb7K2c19GAwXykErnhhaDWMdTajSPwMgFwRdcGSCX5u1khdQBdVJ1FPw3V38DafYBUwTX",
  "key9": "2M1MvrPBGgf4w6rCG1GgQPHBiE6kQuoHxR16kX8d2BtCX4fMDBz4VYtkDJdv6z2f7bNeRN7x7UCBHpz7MHwe6y5M",
  "key10": "2nTs3HeY2UyHWSiaHZ7QdmxX44ofnvDy39MHgqd3C8MUoFAQ9rXZRsEgxwxG9z1JdywbnRUXXwrGqXPT2NSopJ2u",
  "key11": "5WYioSTdjak7uWmLWaGuuJy6BwgZZVU9JZAuNxduJPep3ABzub5aUDZ6xX2jDxbz9pSL9TapGWVoLHoFygaTLLdc",
  "key12": "5fmbRGnFAxWuYfo1uCZpeyEgVTYePcgKwATJMRoXCn4kScyd5KNBChFaTVg6Y8uQiHBnUx16amQ8xe6DNmomys6x",
  "key13": "3eWHDHbC659F2dUcMCm1byTTn6W1pndyGkkdCNV1cLjRXbGMGzzpXfoBXKnStsfgqpEKi2QLe1286vZJfFWxUBUS",
  "key14": "5ZxA4WAbcqEQtC81vfRtML9o8qwBLByCtN6QPKhwy8M77Gracr64hcQZneLvhU3iZ1SWxsLBF6FMsG5SzhbXdPnQ",
  "key15": "4xrhkHcnf7hjXM9wt8A7KT3iEFWAzYsh1Ma4mVEAVhweiNAson3hZfe8vsYdgmofdt2r8U9K1tBxNnzRk2v9igPa",
  "key16": "5bEPJkwPxLzPF7KxriPRBRXN5urqFKRciDduFiJ7DEA216Sw2Zry5o2W2CcnD4FMPZTQH8m5HRua3csN8hkAXspM",
  "key17": "25EWYvY6njKVVZTQeoDsR9KP8pUU2MkhxrxkLFrshzo3poq3346NifvPjwu3xx2AQTZdkpyb8W1jAR8HDV7GEqNL",
  "key18": "fNgxYwCPqZkDdfQ7EPpGELys5Y9s86S1yYNCu68nKmn8nox7zrcGL6eBEze7hRye42nXcCYLp4Qci7EbjUzSfF8",
  "key19": "t6vPvmAMvH3vEebrf44gPzqbyTSA4n6LNYqXCvT8Fm8DpDp8cJpzQ4rcgUQnwrG6kGYCL1YKcURAaQ97X2TF7uD",
  "key20": "4DLivSea3TLyVdBEfehDAhABuftimBYTRXrTe9iVeE6g2cPSWWxe1jUktdY2NNbkpieX4E4YCpBnHXbvGa18Ph9E",
  "key21": "5G9jqqYmZNbReKmryiGELbZMVjpUBbPkpQGrxTkqxMJgNNQMyExqYN9zptryuqke2zHcwWxaw5EcDFi9e7MecgdD",
  "key22": "5exaDjmfWggHQHTM521HwtRyvAsYJAEVvFHFiuiABC7Mqst8cgroMBEp8qUTVzgL4RNe1FwGoS9GzfpUrKzDxtz6",
  "key23": "58iEzNRn42u863XTWBK7ZhjMDxEkzDGUPKCqwhdHwPitQZAWKuEQ7SEXBBWXWsTiVckSPgBYfEuB62JXrstX1Cxc",
  "key24": "24stQLGSah8MEF6Vdp5f7af48oKMxqBw6Xr6HQVuiCLBnY1DyBgU44BTZo8HfAZZAj6VnJrD5dcdo88CP4N52Wet",
  "key25": "4wFcrD4RXgXPPmKr8yTMPyCiEjbgPQoyEzWRwZqq8Tn7xzKU8UiS7oFCRSLwUG6jMHJ6YTRQLk2qdqYoWNqoKv3K",
  "key26": "35UF1PrrVfhLXEFzPbu34tWVhBis4Bqjq9WyYZBL5GRK5SSEQ7zgiHxHbyLrWknsbC4RZ7ziorcDtF8QtuW5Aqod",
  "key27": "22rv2eVBnpKgpuSQ9dsVzadDqV6pmLd6sBnoojQPZsFcScobiX5YHSMTXgiT46K8feAa8WFKsGsNiGSGsAYqpCzH",
  "key28": "3FLRtHcuie8XhsAmzCYkw7DaCFEqCsQyYwDNax1J63F9v1eSZWtsuACyNMWva9VsXDjRocLkFfypyxXRdua4mWrP",
  "key29": "4KJeRmQrwk2wsdUJwYyZUifpGDEmRm26G7EcTLhixFPwnYrmS4cNGJ69NDACghWGMQg8nTT8jt6WUZgVSSPfJW5R",
  "key30": "2VWWSeSACA1f2rLDMdcpRTMWiA67tsYh3zXvJczUJpzq9NUYRzwXmksKJrJ2AQCSyvGfa1QyZWXBJK1YGiePQDzU",
  "key31": "2MBVwkr8Kh6Cp54dCYSHoeYukFpx5wUHmaN1AzTh9JFNfqtWtF6NTHNz6MSScS46YNHwHw3maCvyugfRJmHkWoX9",
  "key32": "5hv2bdKYQhpo1nyqz8FoP98Z5tpwAD9jSQxDnpFYx62F1pfgoWTYp55MmioLrpwAcZB7T5pqgnVLUBfpsAq2Xm2L",
  "key33": "dvcroQZzif1g9xhJp8ZC3arHJ5JFfHD7kr5UrKKnLMfdL937GSyb3FerFDpGUHYHzt2Y6GH8NSBymYwLBL2au5f",
  "key34": "CBAP1CB6nho8f8U4GiejhLncHvNTKhJAnqpB7DFUvRDmqdjADa3vznAG18mN6Ubj5kuLtxwe1tAxgaqHCsotfTW",
  "key35": "3Xx1LwHYpr5SmZ63D8qSAWWfx1kLiiUUL3WmhMh2aWGmW6ndNZDGLbbHruSwNZ5LFRCHZLBC5HBrKUCqRNgogCaf",
  "key36": "3VCEBNcx5Rm4n5ZQEnAPq11yFqgwMYBse2aEJi6Wgf3sYy8UvqKB3g37ssNiLbAgBFMvDJgrnP2XSXqxNnWKM94o",
  "key37": "2eVxCCAc5FR6L4CSMzPxCBMRevQtgzCSAStTYgi2DoTwBA52obPTWCV9uGijxaYrkdFg5gZXRbxenogRBRW6avsS",
  "key38": "4wCY1SKiAYWaNs49fKCwQT3wC7xQ33nXRX1PZ8QCiSYfX9VGo54Ljs89QpubAFybjxwKNGvFdeooo1YBp3kDJEkk",
  "key39": "5p725BxZJ771sAe4tuCMFse1ZqddNjKMLqaKuHitKkUjwPbx3ghEHZhPmBZoJyYUmnEZxfjVjvNSPkBUysqW2Miy",
  "key40": "2FbySCdtvwL8S8nyu4CPBQESBbzricbWaLjkWepkrRNK1m2yEcZxuukqegwsYBMSeLF3TdRX7BKA3fPqMGFoD8r3",
  "key41": "59NatKnzwBSYBMhqNPz9EFLeddgNC9VTitKvmqWL8uXBBcNdJjXy6QU1eqHJjYz97ixaeXYN1pqyqWBtAiCQQ3Sc",
  "key42": "3i8RJdK4WsGJaP3Mv9BjgQo1vZ8FvQUJmtrLmUAskHffHyKbQ6PZNdVtk2CvMccUV15A7agQboYGvj78WVorf8yn",
  "key43": "5jMeCnqsad8nHoDMULArxptJzisW4cXcvmLfFKr3h3gNpkhjez8LUovRsYCLXzkpc5urvLjFXwiJ9KKvQ9CAZQby",
  "key44": "wiVbjvoGBa65rbGi6vFr1CRYUZYW7qY64zqaMe7HGLY16miqvAvsirrsgYGa9N6KjbYNS1skyceQCyDRKnvM52N",
  "key45": "4U38Do3Q7dsL4pRAncpexUG8h9V7sriguYC9q7qTxRepBcTadGjUaNB9HDv29BQGZaikktyuc69YhgzfGAYxKabM",
  "key46": "5bRCt8SEZao9Y8aACPLhgqWN6cZ8BGmJTmN86go6u7cHKrqsCtomDDKrixZbKCf3TKdTm6ydpL845tM5nWb5ecE8"
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
