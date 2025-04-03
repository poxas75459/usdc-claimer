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
    "3GogtwrMvkrYwcacDsCn76zfnufKQb1HYUeeMJeHSjTnwGYtR9Afm7WDn43bhiM8HxtS4r374eKTDn7MQbw2QH4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSiArnenFEHpaYpHqUJQVtBaSubgztgS3GepVcspNRu5c4hkWTTsxpML7zW6ViFyxEQkEHE7tCV9j7g3upMHnEf",
  "key1": "2Q2tGfqxocF2vc5hU2zARtV4J57qsB9GeEwP3BKmH49Psdip1NeccUSMCTb3bjyCcCbGnNXbUwqeo6dPuNrMTsK2",
  "key2": "4xmv2crEc3i4PxxKn1FBTyZcB1DCSDi1L3pwEqiTfUKG4k8RZaMxUoMDeK9o2ractiHQDqRy2ngMAFTz6e7tewd4",
  "key3": "5GgQJaidQVHbwPgPnpGdhYLAhoS3fRSQ89ZcULiHVrpMxuChWLUM6R3DyaigckzWW9EBfSBR55caccKWLnWGqrtA",
  "key4": "hERfRqiEN3pRoot96tXpw7XSQ4QybcyGAWitFndhbxeZ3gYWujeG9pKTWsuUMo1sdgx2g5udChWHineAvf4MDYg",
  "key5": "gpg2oJkDFt2KAU9BLs7GEk4YWt3RN2pHe3PQRGZb2v7wiEsPEmQ4KKVEafa6ZDREqPAcjFfVmhJABhxf56JmE8o",
  "key6": "4UwBZ5yPSbgZznoarrrkW1htk7HDqx2Yow3djWn47Eie8x1uLT2LJvXDSaFLucRaaZXzqzmjio1NUtLPjm7Whgo",
  "key7": "S4WB6UJCwiuZZTr7esiTuA81DnFfJUTeV7nTNyH7Sm65m2uVX5WVB6v49WDSxjUVsMA5HjmTtxhQqbF6KyfHpBZ",
  "key8": "2Yss2WRFhnDjskkZGc9CKovLB59rPwhbhjtxY8Au4EMgFrELe9sWHRiJMwJpe3Hh6XZ6Q9tjMTV5CNb6u7xcPHuW",
  "key9": "3qYCpjFzVqHEd9SC1noV9Q3LLWSXDmpRkNmuNebw2C9e8QD186aLwGF9HwmbryN4bvY9onpF2b3Hk8HNMcnoiwDv",
  "key10": "D8t6FGrKuWV5Mp8HJQzLXUoznKDqnA91DvNjxKdux2cZKenQFtnesodcmrZcCCZ5iCgQzbEdr5Gzfjzae4ThBQQ",
  "key11": "oAKMxWQBgdKZv1Fsv5LRtKySuQpj8jXPhwyg8MgZMrEGrjMPCMNhb1jGCQCz19JrzWNitnJiWEEz4XVfs4cbT14",
  "key12": "KZiS3DbFv8KVVbLZJHcAvPFZRhaunhX8r5nWk49PKUHwmMezXhZDpTF2gcNAX8jQM3mF4EDjPoyzYHKTrd2WSFo",
  "key13": "3sirgLrwRwLXaAF2wvmeLUzxtJTKnCrUdqRj6rV7Yc3QCPUXLUxoHYva5dRvmJJyQjxS9Bfpp1ELNUjuqi5ux4Y1",
  "key14": "5Q4jdw8SsxTXawWfUHJh2Xs5p6VZwPpEirRgTB5ZyjmhUJPgmDmQeWwfuGCKWvpfLvbadvbHmpViRpo7hTUrBJGU",
  "key15": "31xKF33jM7gvrWgvvWpFYpSNS8XxyZuPhnGZ93yexZyEEDzVDHa443prKasB7DxtTmero7pTZLRXnDQp6Gbc5VBm",
  "key16": "2iboZ5dWjS8L3DoaTt6eaY417HS5Dp361ketiTeDyh7oSSEzH9bX2d7bwn68NjkcQKkrQJRVdZLwnuf2W6R1aqDn",
  "key17": "jMGNgBgTL9Upo1GaGpNPbbFc7pPLiqCSZBZS77YPethXJLQvx5s5oAQajicUwpJtMm8GMZzy3V3ETvNV7Vx54J2",
  "key18": "3hTwpwgfGavLrnpjnLzm2L4omj9ceQNtoMsUJCqDgbJZ3ZiSwQgjSjZ4j18qEMYc6FEvEZuB3zpQRFNRUjFvSkCW",
  "key19": "4gm1R1HyQfZ4pAL6sX2antw2Vqzwo5wZHeajffN9kaF19mKwhEjdudhXhHid6dUJ41FpGrAfp8g3oD3YafBuB3n6",
  "key20": "XhE6J5CntpEYhwvB64686Hky6czPcNy9QLrTURjn6HNNLjXxdfMXSxN9yQYSVG1BNSfSpAkxcDqyEDmFL9zw8qF",
  "key21": "3KczEepMJfayUDFwC5whcjnstSi2tUaXrQDqbvnktXcikxfiCCFH4bfCUz7awmnWFbKnJscJgUZynT9Sxu8nmjnV",
  "key22": "2Bin4awPNd9T47pCnL93VeAkupKtKF7npjCcYAkXc95wKaPxoUNauptUQgpodq7cscTfFnaUG5ruBEFxxQrp1Arr",
  "key23": "2hsHt83ytGw2WE7CgYm3aAAUThcGquzguXEpyzoJYmBy1N8DRkY2U1r9fTyCP23yYYEaDP1HsQbg3UeBjArgycWT",
  "key24": "CPMW1frmqgAsJcbfiZwRNLNGFP5se446TSCGNNskBTB7pzxQBZRtk7xjX8TX6Emf8ejJrYRNiGeNCxwHi7MxxJK",
  "key25": "3pwm4YiRq5w78GR8fWkNwLxSLzcaw5N63WvKS8o2gaXa3b5CJuGngYJGHFrG1Peq32GxnXoBGhmEFiEyserxJiid",
  "key26": "5jGyTNnz9LWvMjbjBdXZQhG2eJz5itJDiJdsgtsaLXgnPJYxAdDkr5rkSep1px13ffraDtVME3Ze9RgVh8bHCD1m",
  "key27": "484C6dLkMeWoJHYqdmJsRzk6Fhq7mxctrr87JMv6DXNsyis4cdWb5fpS5NxEisjL2ZXPeS42HRX4fz4br7nBpFGG",
  "key28": "3Urn2GnSEvnyasFrULdgANMvRqZMhnhugUu6ZLqqNTEk8WBaRsNRmZmWT4Fm2CgushrtDaf4DTmTabp71YJJpN64",
  "key29": "3f2SrqwNnLgeVirbhXPgyrS2oxhLTneatfNzfFYsXi8zjQLq6gKkdgSFdQYTBvSkCmk15qBmwgmGtYpthtCXfwBu",
  "key30": "2SRdgdRRMLFEY87XVQPgv8smJPe6Dtrq6CysQU4LpYeufEbGAN69fvFRnMDh46cM8BYwzjdCEBdqXeAn6eK8SZ1M",
  "key31": "2jGR7bGeBxm5jBtoFAWu61G1xMcLmcZH1qbiNA4RGtNh8SsAwo7AzRd8kFJ758dUUwjqfPLCYjggCXx2yuZq8DFT",
  "key32": "5Q24bNu2KSZQX1jZmzJsst4M3bHmyRkuZ3rP6BTL6CAyCrCKbTcQAkkvcJR3DhKcGPDFpzi9iXJFSHBW4fBvkBHZ",
  "key33": "HgTtgp96kkNrJjoxLYH6sfc8iAugLzCCYcv7bt5YgF91J7yfaH5iPsv4kpGjpk6DjgGuRKZjRaSBho9DJM363eR",
  "key34": "2yhFFBjks7q7EeGDrskdjjC1n514XFRTMuioPviELLZXQP4TZjsjSP2xFErTxWsH16zmzLAxwiBwGTTFygAyBLkL",
  "key35": "5ZYPHoQyMH8cHp4T5puwi3kUnt1yjqqddxRZBES2oYWQbiTVX2XEJTtnJ2MaGkFhDK3QhJyJmHRk6Rjv6fASt7pW",
  "key36": "Yea9gFxKT88JVA3HBapoeJZ1QzKppo4fEYkvP6stVDoRhzRBw2KFFNkm7dR7sPQNbhPayGQBAqFPBMFELMbKEPQ",
  "key37": "4nWfA7JzrcCnSxUYa1CWLS84WCVvNtJTnAmUFiiUTDfpMnVsJtkFv2Xxuq7PtbETyu4mCz6S2UNwivtXEDcz6iUa",
  "key38": "3bP8eRqGPocJdpeJL7sdZdFPKXU6FvVQZMzipyj7fa4xUPUauRkZSJa2Jacg2GB9pfQU1euELEFhSyC8LPz4Ys7U",
  "key39": "3sb4uaEvTimYzkaTLJfoP7Q5cn7HevbQz6h9fB1dF6r3FeBrfE8GfAtrEVAvos7i6VCaVZ7QQBSwEUWTaDXnjRxy",
  "key40": "fTevSJn8qkCBsCabrHPpkkEssYVz5yNN2eLZcdAJ12r8MC9sazrcncF2KPM57M8nxNXRjJhPsQMixUKreP9bLPp",
  "key41": "3Go8GHRA1nAYadB2yEdJPBmifqHJPBrJNHDs9McwVXErbib21SnjCkPRttmhPzdg7cPVpd7x8NwK4PBM3BTLMq8W",
  "key42": "3HJEmtBj4KJdZA6dLwAjhFtHuSDXeH9AncQU1G27FAhNKaarBvWkS4Di6jXAEABWyeFQq4pvgWmvBhAVLYoAHxsH",
  "key43": "5jf4Q4irjRatFHveT2rQA3tQuMAQCu92xRJa8D9rD9cqoRHEHKxxNJy5Fj2SrZEp6WtQzegyEjDguaLACc44qUZn",
  "key44": "a64XyuAjZ61oCqJRYrnB8KLzA6JHzrCw3rgP7BsvDFrdETDASrx7o7g2nS51xx9cT3EfGnrZ5n7cUaqnjNF6J71",
  "key45": "T4WzkqzgWuMzPpnuy1W1poKxDFHwvcrApVcUojRTXzCQxnePrVLMqAHdBHBDG7NK1PDu8pwfgT7N7wJe3uAfQsg",
  "key46": "4Md8sjh7uHAZwqeSvUEVta1aaE6PZL8u4LnNUWMXaN68szD7fZ9QBeoWzW3RicafxupQZGpYygbUBxVVYjKbarL8",
  "key47": "3sY3YFsKRpZHcnsy4WzYWwm9i7srQFhZw8oWL6ZaFQqBpmeZkUVemTNimvope7wgdaPezfayNb7R2ZFedRzQ3Fy9",
  "key48": "48RdmwDJcAox7GSDQCnC8aGNQPNkWd5nMe3FWuyJUzjT6KaDVTeujMCVuKLaHyahWg3yQj8nkfbZFz6gKQvuGAVA"
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
