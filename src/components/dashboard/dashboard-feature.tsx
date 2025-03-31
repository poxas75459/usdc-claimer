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
    "67aDTpoUBMDYtjDd6PVXyHJBysRQ7XwRYCSjsjdAFA4yAzMke498SdaJPXqyAgWMweHhADGeRQehJ1dtxjT6VuC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33CwbVaHx9rkD1Scrg8EyWjbwb7VNEG7947gGRutSQ1eKuBwZzBEyr8ZguDwxuFqxHfDbXBfnSEJRQpjbJb9veq7",
  "key1": "4o8AnU4R2bg5xHUCSAcLTbdc47pQ1qz9xssDW837AvZAh48r8iLcfHaLc8hMBvDsGDiqcjoUjaS6wTGRHJvwN7xt",
  "key2": "4d8VDNyqKpz5URh2HdoVVcqj7tR49YgxAmmWN56i6rcDYrcgdiDZbtc5ncgYSu4Enbc3v6bc2LYBbxTxgt5CGwGj",
  "key3": "ar3i4CqpHBknrQJfbpRdBeSqVgbjQHbH217Wzx8feuuzUbKqzq9fMXh6kuHwtionP5pWNmxC2WFwbYpopeBVSLL",
  "key4": "B7HwSPCdhkYgDg9kfcDyP4hgWDG4Ws8sGidGcHwkhwRo4nrE6SYUm9ShN2RMHK9JKzErn1gJVNUKE8KENeNB6Dc",
  "key5": "2nDQ4fATjNJoxLtG6vRWXNBqNCspDtiDgtnP1JxNvXbtAJPggH75f4waZLj5vVXA4XPbcUKJB4HMMgiaD5T6ah2N",
  "key6": "vTvc4LhtMW4wYwkhULueafUYr5nU4nVtL5nULE1nWGrSrNzsAPrSTkVpcSvP2Af1w83vHNzuuETCKJbhRycxkU7",
  "key7": "3cWoK6gnrMbc83DH7xfSPm3YVNHZ5ohBGZmna8hHK9eVNJUQPawRGksQYH1PwAYizvudgEG25HFLSfmscBe5D3EA",
  "key8": "3wQbFkvPTrZyc4oepW1gWN3ey1F71WfhyH6ZSNC3WLRmNoJ9jUc1V2kGmjQwvFTUQqtPuFhapm1Ed9iHBjXCuwrA",
  "key9": "jKFx9WfY7pykto3u5Dkd9bAnVLVaR45SnJeB5W1Lsqnqu6jgeKMS38Ef3eZQswp5v8DqL1uHTVx5wCUSWNHGCiV",
  "key10": "3FpTMepDDSXAwLrkDFtdNiJVmkANYo7r2JzyduWSSf4xDhTxSVEPXvxqjhGFPSRfiEkmVH74Nqq1Wsyoe4sduHAf",
  "key11": "4mcdnq1XisHe1tpXHBhfLwmNjeVoCnoHbjGcpzRzU9CoUSBS16cqkqReem9UbHsBYVX24ic8nRBYiC9TRFPFVn2z",
  "key12": "2A8Msm2gHsyVyoT6K8B7b8PZ7SNJfqn8EAMDUr6jMT6GxuVysnfZ6cGS44jhUcMiZCrUevNxwaLvFAYLF4iFSaLD",
  "key13": "5RBsUnR5CgZUcFD37kTn5zcNMttNVq1eaEtHpNn6HSuqMR9z82mKNRMdyRqouZGRu3Dwo7VJ6VRGvEu2b91cicz7",
  "key14": "QiA8rUNJ89Sm8VWCoS4o2BwXNwE9AZc2ScRVmUX1enRezaE259H8RvdL13jvYdiQA9SajhkHzJe6U1e3ut6xV4q",
  "key15": "cSVcui3FCCKokMZQVE8i7FuH8vjMM9KyXiU9oBqvVU9iNNtBvodecm8SeXyV3BqCosH1TP52PhjVa2Rk2vEQCEq",
  "key16": "5NRSVNBVDzRUceE5GCWrPcT86oWaDitCMzFV79tmsfbxVEkaDUxEwVNPX2VGQgidVr9gz61cAkNEqzvjbgGzELd4",
  "key17": "2UWXsQ4Hr3dY4WyP9UUZndLZNjYd8HqndU4Z21iVWBGMLCNp3UsQDPnsF9eG6rm1N5dCCbvgPkAALjF4522Y1akW",
  "key18": "4xx9eB4VUAfvRXTxpHKnVjL2voDMUDTjw9sc7nw2nZp1fogVcZTeHepZzwJF3fz2fHb6nHr3sXSfxVvvTXwPTqim",
  "key19": "W1MUoD8anetizWroF2v3WEaSbkwHBLX4Fy2nAhohteN41SjUMr3B61hcvTzq1XFCcA1RfRBWAv8qRwofnZ8ydv7",
  "key20": "3wpovoygDPPiao2Ravm2izZdGewzp68mW2W9bJTPuN8okNx8pwCgrwkhSLmq9wfamw1fyEKKGjwXAkM8MTXM18Bm",
  "key21": "2KsPc5MwuwAZgY1XW6yDzmsuif84ygdVVTVBpwBoDHy3XE8km92d2KS6pNTxbKcDVPeM3jeCfNwkXr7ucA56KiSU",
  "key22": "2BmsEx7AfvC7m922DRxipMsCxgXCBW3zALXNseYzjtWeQxo4rJroxHcY2TdkXjJyrQR4KHtJCRQfCX5b8ukvuwtY",
  "key23": "qnRrougj6LtG3wd7X9AysznvsKTHeXDJCGHs4WQvij9pnuUwEDtw9ETsWtGyfzCxt5xGzxPbvHkM7geyD5c5jE6",
  "key24": "5v9JFUzJA7EYMi6sf2AqzHrHitWkyzB4s8Cs3mh3YDRS1YqMXioA2i4YhVQjYyKnro66ejBK73dk15NDvicrh1Si",
  "key25": "pNxfEjmZmtvMvhabQRQ4oP7xRNNvxeMhHTv9sJWZYRDN9AnHYTzBtifXEADBiJQzCbXisKtW7Y61nzdGcZLvWca",
  "key26": "5rQw1Czy8pa69oLKLQVpHHPP3t2n4pyuGLYLYkkLwf9CyTL1Y7bJ4QLzDVaU2qv5waMufkuvKzCpyaGnkAd8riGp",
  "key27": "5vNgdpbxVHEbET86eF2pjAgzW9kuii7nFLPpBH1ktQc6Sz5ituhN8K8E8zgwZyynjfCBvCm1q9EApj84HtdHszak",
  "key28": "2fEMY7fNxN24hdNfHvEoLaWWjWgoUVBietLxeJmQwNyCC95A2oFiSw27NBqyDXZZrDz3GtQfN1zyoZuczD6dmKEY",
  "key29": "63x8AHwmnpqFHnGUuRJfXvqn6bRpcwvjQEgz8FMiG4kRFSJvu1GT3VKCjXwBTaeUKZo4Gt6w6ageFPtAVr4Y8ewF",
  "key30": "34smY6G5GdF9f34ZDELr55YX9pUu6a5Rk8XoGfF2W6V7YNB13Zkfzhg6Y5qYcwDF1upojEbZHAhpEvTS8UmYxMRt",
  "key31": "3aEgvmMQ4pHmzSoG9acGkmAaMjLzzUyK8R3pADi1NRhqPzWCuRUENHJPTPEdTAJ6PQTfTCTxCkCRq9whHvyCUfMP",
  "key32": "4kxxYtjHLPJogL1G2fambNURpTmaNqukaiXZcahf1mgD7wUG9CYyaSKzYBbLSufFss2WLNDaMXZAUzz58BuYLtdz",
  "key33": "5aNRxG9SQ9jjjazLjWnZB8Vyx73QxGuWe3ixDHiYpszLkzU9xtocPGKDGvsCNos567gsqD8hZBCnPYRhikahuJGg",
  "key34": "61NvtZ84XCpp85XZsAUzUx4mnKLjdeVeZntwUKaEBQnewLhEMrwUkXRd71DLGoce6S39FmaoARP2Rrox3YZQhuxB",
  "key35": "NRJ9AAcxk8GFK35MCvTxk3v953phxsAy41qj3z3rSvk5guc2pAvvu3mjuYhRMYHzq2dTPUq511uUsyFcP6FPXBd",
  "key36": "3sXftYfpGrxgq5cU8VT99sGh3SANaihnVCkvgfPsTJJB62q1EVxSBP9cSKRjF7piqkbPtDYPFGmYEW7vFmD9ECYj",
  "key37": "61BEh3CMRQgmhgRyiQ3mcevcSz5ozyXaRGfv61uHbiE5zDec5T4gDuYSJeXF6txHLuijPpnwCUPmD91FfNBVEKGM",
  "key38": "614wj8ohmHMTg7J8gST4QMdkxUs5EXZ2S1s2rt5BcUTnJjYv3Y4Mjs1d83jgzEs3gQvDHRW8V6dfBFbWNHS2NFcd",
  "key39": "5EMzGDYr5DCVz1wAXTXVTXf5zrQAqKfhaA268XmNM5t3Qta2Efiyw5zTmKbSqTUESdZLTLVhcFdmi42chmQZaEfh",
  "key40": "5S1gaN9fzN8qqjeticigtRcLMfzitF9st5obyJYNaNxmZ3DrRNxiXzyzXK85GU7gMPaezmiiR15ZKd4JvoCpeHzz",
  "key41": "njmr1ppsY59qkfoEMBktChXcXRJubFfVXbeokE1YB1DiszMptzqrRD2ufJuhJBPWtgidvCy8wnxQeT5VTbgvAf1",
  "key42": "3iSh38nn9X7gtCkDZLfL1ymXKFMxcLxQ3rFcrysMwH3mNNrgF3z2VPfZkgyFQPYbW19N1VeXM1RppNekW6isUB8C",
  "key43": "4u2Qupu6NL2WCNTsWjyiWtfc7WzHWwGCDPH6e4s5ambfX9nkRKJVuKBj766dvEXYFioUHPrdpAwLvMZHCkxnbayK"
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
