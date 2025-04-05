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
    "4ywqpriJtyWkNcaXZdMaSi1Uo6pYnXwLQ2uhZRmMHYDWQmvbUtbjYez1Lu7tsj1L5xKZiQiKYHKC6xDR4RXe1QCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qhm27NQ37xDBd1AcENnjQ9m7kPvqvdaduVGsMY3Tj3mYVzQcARPt6PyaJXfJVynBpShPBxxvCb443b3ZQYDuxtU",
  "key1": "JfQkM7AK6LKBzREzKmXE3ADmu6jkWaUBREN6D1xoZkKUTaBTNetEEEAA3KtgPRDeXp7hHh8knkh2NKfrPdrobRe",
  "key2": "2mcASdmHAxa5Qr9gPoW5Rsk3HCymXfawoHDuA47d9dfiYbJcSqhR529rN6g2qpBopAKxGbycdzbS3v3GrY6hZumG",
  "key3": "52VVAHGmUPR5963w3KNj7o8Vit6R36m2oEuMzWD71ZwDxW2jKf28N7rbhA1TXT6CSv7maZaoXtNxrM9Wp1Gy52Ro",
  "key4": "4bdrTiQZfe5MeUACfYX9FspwMefA6aqVmzNvKt33GcxFxJyPMX3icpC9GJLuWFBjBTxZTGUyBLDukXQ72Pw5rd2F",
  "key5": "2gpQtTqyGWMFNENCNpuBrgF7qmm49HjrCRi1oRbb4cBNi6Dr5twf81hSxnudnzC5rmKbNTTMG7rUPdqpjpee6PSA",
  "key6": "5vJcZQX6unE9F72vHAfgDXyZtFt3XRF6wc9ZhDg6Ai6QV1HEDxjTaURmoitVEsuYsN9oEBn5BCeD5mVDDAEadsgt",
  "key7": "3Ym3tyMwsjYvhwBWnyiGhrmuMdyiCAMsECR7ELpmkG39ReqyLtbuyEmsnTYLsEE54m9LxvwQLwB4Q2wSy4wM37Ay",
  "key8": "2q3ygmrfBVSCqRX4FAFKfERmhxASb1aqM7NHxtmELRjmPLck33hkKHjRfVAZKnEzhyKMVHZm2qcb7YERxd9JqsQz",
  "key9": "4yiHdT3skVnVDBHPe1PRM7K7BfVBXZonXVh5cehbAMoF2pn3N7Nh1AqxSfpWeoAPNBjK8yuj9jAqH2oyHe2sFmS1",
  "key10": "45JWvbTDi1ion5asRVkeQ2rYoi2wFUXVHVEuQHRpAJb4yZs1eErDJaRW46A2un17HiQtrhtM1VZojBkrsuJa3MiT",
  "key11": "3MuEUJqi4pRoJ3VvRFo3TdVuBCitcJsozvK6hanaJSy8TSZsr6NcsvyGRA15SCY4FhWR2uGnEztioPLoiM8nKEeL",
  "key12": "4VGan786HJauRfeHQ9K7fBCSG1WbjdwniGZdKSkCyDwV9MUSqv1HqYG28tHMBpceNV9V6Eg6MKFLLfhLb5UfDJct",
  "key13": "51bL4jaABbaDZuwN8gCZDTu5SyppqPWhbJnWRcJBvHLExbp4QZWYorbzR8hJRi4dUWE7Wv1vJJwdXqxu7Aveoqnc",
  "key14": "265uQ1XZhfWibP143XN2DGwTJAh6fEMPokV7QxoUQgiBi97a67PugNTHMMYbnpXH3Cd9T5FDdFPDXdWf73GBarNN",
  "key15": "DnRsm6gnoZ26bkKQZWtS9Pvk9sJeKCkBpTVwJDL5fcYKR2kBEcBuoj6ShcYRnZiNL9CcZZknrJAd946QwQQ6Hhs",
  "key16": "48Y6KT2jWdSaF92h1dBBR34RpkAzt6MKFyFehTEs3vJuSCJ26cd2J9yzXJg2bfLD72mp7325bJ5PkmACopGe7SD4",
  "key17": "3ZiqtBjSUw9gZHcsUguCAZVJVnUZHHH6agQhbVSdN7YxHntdrQRm2aEMFKerNhF5C4zynN9Yowm2sJFXjBj3KrBJ",
  "key18": "2CxkQbeSpaiGA7gfWgHVkWGkeEfb3AJ1CxthcuM3Bxp7ZCdJNC4uPyr1SZUL3soNT28xEC8p777q3EEPiX5Puj2L",
  "key19": "2hwAGE1ceSsmq7bAY9FA1nDcuHZv2iNZSREN2BEbdX2FRvJUuJjw9LLQy7QjFiZ6V94frisv4ANET2iBZYJiE1J9",
  "key20": "2iXoFJrsSLeiSdwCMCZ7ekhT7Y3eyAVWShZk9MfajMdyTxia5J2xzhHvDJST8ajJDtQTUbcfAvWrt2GvVYjLXsNh",
  "key21": "5eDH82fW3dBs7etRfVMaQftMTwTQxWyRQTGPqcWa2krvNv6boGBGsUaFhG6vdBUtTZ8sAXmQGNd4q4YYKNnHgo3",
  "key22": "629eXfHht5kY4Z8RsfMNzV3SpG8eniy25czQLH6iA2WpmHL1a3fqPVuRBfrNczvyJUvpBpAG7BMjqykqbQci9sNJ",
  "key23": "35nqVDSowEvS7AFDecMwxypfPrrQr5nyCHCAR3R4ovL7k7zvN3ojcokijwhfNrbED9oTRVUhGZm7eCTuuVc3zsUA",
  "key24": "324DPGU4Bv8tSwtQgXPdT6P7nh67j4pay9G2sDyPdebQQsxLrXBy2g31VvEVPNKKXK979daL6qLbTWBPJWKB7YYa",
  "key25": "T69Ss7rnmW42gC3ETSJMZHXqNTd9j4qz4EWzWyaxDFGZJ4KYzJFUt8aQ9xNejiiTjbZJ5aA22y1wbU2DC5F8m6Y"
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
