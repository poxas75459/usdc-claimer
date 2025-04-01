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
    "2P6BB6tFCfvwS2cE4EazXJCzC4ZWdTh2vtH5UzhyKWk8FBgdRYJ4Gd8kzwG64cCnWmsqmRrqeEDMS2w6x7kMuR6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oD68dKWVxhPghHkcKCqE7MzNFQrCKhs2XVp7HDGBHC4jSMJzWZNwq9Y1M3MrVx35fWVzCUyLVtaEPQdhhiVCxCp",
  "key1": "432ndxYUcAFaq3mLXDkjhgxBZMda5QFA7peJ3QKkBeAxU4qP29nuTLZfT3d5vikxBE7xUVHKX3F5Qkz9brMZhyMp",
  "key2": "5nfnFyqxREkYcYMsjZ4t9Yho6XW1Dx1QPDkBUYbztQir8eLDTvCoRfb1crDeX5aracZkaKNZ2TzM3WEMeDs9s7zf",
  "key3": "4WksyAiFKgKzuZk4jq73gvsRZfbDsc1Pjiqpgqtup2pwAFP2er3YXhAbciBHRsdk9hFcknq4sZ5Gvb5uQ98hayTU",
  "key4": "4xPigq9oUY4RcAr1HiqPMwJ4ZXLBTXuPpMVAv5bVfkumUFQQxZ4qYii9uMCyXngr4TEKB3wBgoQ8EBsBhq9yeDFu",
  "key5": "3mAn77ShDcuw1Pr9KWuju27AoDeir8WzmFtW62Sg5vNvWNKLqA46MyZZA1K8Z9mGEZQv5ioBYSDZ3J3sLy7YDguq",
  "key6": "3bAeQZnQBn5542P4oVNaTRbVgBhz6VbqY6kQEu4jj6qBDA81qCNjmWyyeLyKwCzxoJ6TkgpU9juS7fxmEDm7T2d5",
  "key7": "5js3MpCtX8ep4zVZsQsDGTfpcsZubTf1299HjFYMC9FJzRBdb86hvfG2hNDmeHsZ3jyUqQxXMdnzWk6nHikv5pbd",
  "key8": "3LK8ivVVtjGpQinjpXatJEQS85M1YtW2C7tAAW3CiEpkFn24w7PMPwz6k3NR32QSc3dn6qxDM7TSNtY3jXqf9CVU",
  "key9": "2J1yLCTwx1otwVgXGiMS3LCJruXdTUBq8LzZm4VBbwqpa8kuKFzUav2RF2eLXewK4mK6FMaXiQqoUbGXQC7WCTqQ",
  "key10": "3KnnbirEDs9jXMwNeU8mnmgN1bqoKNfZoPyJvKA45cVPT6vhnWxU1CqW3bcHKfyzovtuNjYrRNoDAUVJhmPJ9nYk",
  "key11": "4evAFeQX6PoGqm3rMNXmSbTEJvsycFVyxMR3MjgWA4ThbGa3Dh9oRHTPBk4C2nFpDkUdeLnfLVvmf2WKWCHuTXg",
  "key12": "62m46yopbJnjZrSdzjo2oL2ZH6EdzncJggGMEcARRRPd9T1KwRC8Ta1ty29mv4Emp1LeqNiXJ9hMJZQfV6Royhvy",
  "key13": "5JWnJq71BahrvqbfGgrpP8AXjqgsgVrfa49W6D8ocXFDD6aamLQJZgu89kgGTLcvey6D6xj7bjyTobDoKjtskJno",
  "key14": "SbV8F5RqqFAnughWrKojVBUAwP9fTUu22NL3T2VqqFmgG2uXDmuJyJBrziE1vm2F7cZnedxee9kcHWqajm4JVty",
  "key15": "GTizjtzbNe2gzmBh3fKwYS324uUK3x59MWjSeuVGT77Srnit15kDTAJNMv8Cuy2cdMW76Z37JVdasX7PfBZrsA8",
  "key16": "31e7jC3fmkZXk9Emb1jN1sykBCiWCR4vrE4gLGnmDNTzGCXaeeG4RWtzLGcdzJ9XzGywkgfYQLxBa6bihEwaPxv6",
  "key17": "4Q7cC7JfHsFfGjFHquBXCF2Be3LGAK38ZvxnBNnzEYNYZHqmtG3WQMA3WGmWgXLinTTuFmRaLhV45huSepAS7EfU",
  "key18": "5rN8x3fViRbMyeuwVVgeLmU9Zn7cJ2vKoAy3yV2gJTimtVEtBufkHAns91mmNERvJxWidyeG6U63gHk3hBRXcPbV",
  "key19": "5M4BZXeVd6yDdSKA6vsEMou8YmhQfVhxvhVpLwQhnycneUKDPwTKkWSfY8ntq6y6nonZZTaW7BDxuwgnHmTpA6dB",
  "key20": "VAsZYD5KfFNM7Z5VX1vpdZn4eYncWVE2ecEMMjPN3GT7RzvGBrBprkVpcqxuzkpp197daaMenBrdi7MuYXc7pTe",
  "key21": "4kdGj555KJ1AFrxnvtaXxsVpsEE6ZwbPNeSVkioiHCiPbh64kaDS8XUyZ1cq4a6hBdRxoeNxL38UvejnMS9zZbP6",
  "key22": "22mQ3CuqbxzVb1F4phjcDWgRLi3P932RutiUcY6b3ncGDma7xDKDDWa71JS8yegeMoG4GGzg1zk2YzxwBsBjvEUT",
  "key23": "2w4HHP3D2MhqJsMgKDs7RK7WKDo8ZpDMxQujmm931dtu5VQ2U3SWYqbPdCv8acJBkbUkRuN7zSaCoUirfULsfu3d",
  "key24": "3H9EJC2bE3WUJMck934HpJXykfnVhtyHbnjmyaBy3rZX71jcLb7WVhLPKJZD1VhMSf3ETQnD8pLTq4KfPqn9Ya6w",
  "key25": "4wwnBC2to3uReUf7gGdRW1bwE5PuNB26E6KMDJaWqdPWzcmMo8kR2bYf3nXFE7yyK1sFvMfUUaM16yQZroVWqJ9E",
  "key26": "4CKuDU11icWvajLtbiGaNSifCxmcrEG5EH1FacF1WNbo4hACgDAzhNMmCdyJehbvyTKYWW4HAk8WnR3UyYL9qNjM",
  "key27": "G3XXxRXmQnfuPD91nL5tsZRua7e9MQCs3i8a5iXrsoRd9qAh8XbELH6anLYXtHnNWjgFTuAXvdQQTXWxgCUuNVv",
  "key28": "5gTKkeoUpWaNmygA8R43toNsiMMqU8HzYXoXrAVFRxqGUHRKdR6q4tJG9V6y1X2bCSaZsub6oqeFEGsDiWYS3yyv",
  "key29": "39tahhvDniQ4yjGyjhgCKtdacHHj1uTTCKVWWyP5N32XGQwAfq1DfXQBrsrRPfTZJ48drpnjK4rA7zypqc8vTmk9",
  "key30": "ygwAUtYzEVQqTRTMuFQxVsLJusySc9adkQL2fSxUGYKHd8jnVmAGis8HfU6JDhaeHQY3eiR4boz6NhLBWHFwxQo",
  "key31": "5mEdzDsjqYcnVVN9qoxtDqtwVBzQsbvgdV69kpjjtL5Wgk492mdXhqw17vR5hNWqX4MbcZWM2N7FKNbKKaERk7dy",
  "key32": "3bfTxhfmeYqsJNc1xNaXZey3tBRnbM5UWj86ow6bejLCRHjy2Q5kXVKUxMNBnDst4i45Jybe1QEfo43F771kkdqi",
  "key33": "5SsJSm2i3Q3BS8tK7aPG6a3hmafJsgAAiKXWwat7P5GhZ9m9FPadGXAkXECKgCbG8hWoyMKYbNsvdd6Uidaf4gXT",
  "key34": "5LucEuM3p79LJqwNs3msbbstFNG1vvK38d2hcQmHEawsMLvG5UzPAiN3ZeM6C978Uf8DfqznHmH7qBoaQgr2o9hB",
  "key35": "3QvCUATpbL96GrKxdY9K2wqovocQGarZLy4wqhf2Ejd83TTnNxo67UHEkLCi5hgEGWe1SVbpsj9fnVEAPJTbA6nC",
  "key36": "4U8zPgikRYF3uxdP7PzwTQ9bPMeBam6maKxM9Cj7UNZ6vku5BKYB1hnY8zRyhWk1oayJHyynMmVmg46nJArp4bD3",
  "key37": "2s3rwTYbZBcuWCXh1Gad5hwgZ9EVUdXbDmjmhWxsV1Ku6FosjkV6FtoL22NnVjei1K6tVuftYzMSEb1oyP8xoSEv",
  "key38": "58d8CohUsJEjXKt5SQsj7Dz7QrFaC3HrhRnjc3yqx47Zpg6PDkd3qxs23DLVQHASWsVCHMGCKEQQydyAm7GBHEjK",
  "key39": "2YQLWBm3maMWSGyGL5MgsL58MWLCKtYqy1j8WkwXKATg4APHCTaxGAg8cY4N91TjnYC15TGGTBZP1kJE1X8m4wJ1",
  "key40": "4tJTeaGJJLPfBqK3GkD84fNT5rjyo4aSH8fCRqjouNB2oxFncQcEZDozfiVPN1hAHVNRTHD7CjG6Qs8fnfpnuUMD",
  "key41": "zr4QrGqyWqvAuRy9H3wvMKCk2bZeNHWMx9qCMSUq5pW9EBLhQgKATzrAMzLdW6MBpbAGMoVg9NVZ9Ax5QBc6sPF",
  "key42": "5Mx5BcZnHrjor1DJGmMSKvfqzPeYFuPVcmn7coCFhhwzwMPA31ikXqbghCRWv4KzkEKUdqtTrWLEBeLAmtSjTNUs",
  "key43": "Gbqz69YGAH5wLBhTCqs1hxvaJG9QNtkvBttcNCiVTzTUVQXBgbr3PuqSAM1zFywCixWocMXJGeighaKMAxwPuXx",
  "key44": "45zpF2XsyZkEu1J7hoodQmzPyFp6PxRx4H9whRdKstH1cHWGkpBKeZmTYi63TKTuLmoTJvcsS8rJZMsqvsVjvHQ7",
  "key45": "3ZHxQ2QzVhqje9Pj1huAT8aX8eduaNvLiWEhLQ7u55M11mMk8MKW81KdLqwobYjmscyvG9s9kpy6zEKDFqHh7MMV",
  "key46": "3abEJtnydTRM9W3GUSY9d7H368j7b1ozWMZcCP1NP24imgQuAiJTir9FVWU4ekDdJUaDp9zG2HrWtfJRmtrNUky3",
  "key47": "4gvJBWhJ95YJC18qR9tYewdj9MvKdqTFFMnduWDLBWYfWH6wwUmD6cx7VdUgu7pgBxwogPY1DckMe34ZTaUNz9uq"
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
