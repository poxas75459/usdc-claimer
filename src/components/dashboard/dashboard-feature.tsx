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
    "prY4oXev9un6YNqc97qYU16brVzRrjYM4JQTMgRbuWMqpepdqZa1XSBkjJhonxQrXkQ1PhLjKu7qihCjXpyjcwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tq2yHy2tTNbhY2J1zXPRMyR2LXiMKgbnWqpUyb4TZJoC72kAqzQbNDnrph8xDhHrnXzLrcisJHhE36HdDk8E751",
  "key1": "2zjfHWRjvqXF5h4UBqPT49Co15HoZeknwjBDgt7SBXoWm5eJm6MN1EQvt5WjyP3oN5iyxqmzQcNC1Y5n4XqAPR5h",
  "key2": "EW2yFcmQsPzmvEecWLB1YDPJpRZc3VWkZti1VLMd6mosm5x38hYT6M92t6HHQk5AQixvcRJqRggUqmXs4hfT2Mb",
  "key3": "3XjWSYs31929A78avCVqGyQSkPqzPj4HetDGiTdDXMFmQcKF19basCFf1YPfE8cVhk4orA9Lcv9Da4MPUaShrVot",
  "key4": "2zZzRaLRN5PNw1ZB3PMdxgyT98W5wwh6kcgWgVrRhYGjfJ1FedEwC92WMnJyFesBuJg9Nvq5TDcSxiQHFEuDai72",
  "key5": "59SHutm97b63g8XZtdoQYGYPCezRH5F9maboKbHpugNdpnB2YqsMzo1CwKzj7af6xuVuy1HdjHBCHA82UBTTRDGU",
  "key6": "3Z1eXj2zR431SM5NAPTwVeqgisuzZTGyKsfwx9hKBY65MXD7fh7XioFuLu6gRMpxuUfDF5CbxeFaamFvPtE7GjsC",
  "key7": "mKDLWbo67LdNY4KBEeo8dLrDsmjHdeqaspYQycP15JrBhpCpFXPuxVWgvbeEquAozmZVLGXftTQhHSdoGvuZNgh",
  "key8": "2i4dDeG8unSiTJ9wfGmFmEdfKNUt6Lr6JG1oA6RzE2wBLX93rA62weuH7BPLmDjCqifgdvuXUyR7i69mniopxerh",
  "key9": "5xzYfGBx2yKqa5qbHUKyLT1Bx9S3ZNoDw5UTmVgWQgSyGT1tRDjZmPSnZYkFTzMv1etJVxP69QcRkmMKmZQc2m7L",
  "key10": "3stSj3yc1esoVP3nue97wQdV1JmMZueeTVdbra3NeHq4WtH1pcxwWyBCaVAbZUWhbURbGb6WEVS6Rrm2xw17ofWf",
  "key11": "5bKgxEXy7E9nQcjL1hg6yq3Ck9iCyw7QcqYB4zZW3w3Tr1HjQCkcUvkzbm5qZuWY5RY4RzXEY1T3hV8gA6tbX9xY",
  "key12": "54XjFb7tZk38dBMRk2h51YjzgiWicWq2ckNUvTwj9YGf1jDeLnBdBAbQAFpKqZrbh5bDSbWPDYwEeuKWXKAd3Tg6",
  "key13": "49YRW98x7SEeeJS79pSnqGHumoNCVTDEzGmLA1pCea7AqBDedxxmdZ9VNS5GXn8c3NtkBTzPhmrYET65SbVVZxC5",
  "key14": "57KYBiMvQmZ2GHe2RmBUMBbsY5UyvvYbfj4nAGUP3HfQpdKfdRGgftwRvh4gRyErtA9YqJLkAJPaJ4asWeUcnwor",
  "key15": "3ziZ7hNLpPDMQv6w5N5v6YRNfsSyHqoojN1d4RvCNcUfQtRrv32UogSrCDix41C82ET34cDUhBFm4nVL8KsnKmb6",
  "key16": "2babRqoLPhUSMcVYEiyg82zKoRbhgJ76wsmwbp3cETJSnKs3n5mUdiFVCQB2SDa3XSvwS5AGorNKjJXjTKf7zbSW",
  "key17": "532rRVDSuuHt2DjWmDrmpRf6voz8hG11KKysuunkTcee7BVUNena2bmueoE4xd2muizKDe7LHmea39JoNBaJ1Zhc",
  "key18": "61VnBwfeMV2Y3WJgvpPnMgocY1XNLU558wovvFG3EzoFBBPJ9fi4zWWfQcD7ES6ygKQ71BoL2DrvZUMoPXG6g1FY",
  "key19": "3GqDZfR4sYLo6LfnD9tpxkiqhXBRjizwALHGfyiidW4zTCvrcfHwq1R1VnRrSYhvn343ELjg3fPeFVcjwf1jJVyT",
  "key20": "5NFWdC7DH7gTyEZdPYjae33qCzxdpZtKkhpd2Ssyj9EG9YhotMJD99KWWiEo2bPfqpTnpFkmtB9Bi2kNBWfsPYzM",
  "key21": "27BeRoTwmbCKAeB8fqHAbMGwmj8UeVNMBfjDvmPubpVcUGTTvNU5msL43LfRRgCS1AYJNXEyBwh9LAsG9MqGPi1f",
  "key22": "4hgXd2io715bDrrrb26ikiCZdQMEsZnkQLQks1yVVyZEnELitp1ZNchsZEfCvw7oGiwLc93yJUKSknnX1NDmKpGn",
  "key23": "2NugHswjPVhTUUCZZV8qYyZBqPpkD1Uv1oYjq7Y3f9dBANk62GDEM6FuTGLyrA4S859rjpodeSnJroMGNJ9niyCa",
  "key24": "4hMgoHXh7wpTiBHz1nd19eSkT4eDcQSdKDE9AvsSDVtoxbW3PqXWRjdDUpo5aiayNRpqmnC4J7w24LE4Fo1U8PxN",
  "key25": "4EG3GaQ6KurhHyj9SrgJ5iMnv4VGGDjxpiHEBttPAjHKVb1K928XonuJhWrHZEZPnSZXpd1FC2DbXLuZ1rYhuM7s",
  "key26": "23k7Vhc4LDJG2HahGLvG5QM37exUFDZfw2svs7uwUjwMo8Ej9kU7W6q5aQ79GYtb65TZ1tdCH8kzshamQcEi1TWv"
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
