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
    "dRoAmHiwn5uGuxxsmKdL6fnJPWcL8ZAbfQHFMPZfLzUmoPPnTgouPxJNxtXYxyGb9X3mfdnVvTfjY5BsmNULDgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xktzk2BDLkJUU1gRTfYSMvPXn6kNZ9ybKVXYTPQ4ahJ9u6JMv1y7fBj22nMTjqLv7vL6NFZCam5LUjL2tNrnoAL",
  "key1": "4tTxFfhNsFQiWLDc99eBNLrKdnhXLU2TfdSuDCYdDf62byaLxs3aSQn5oDUHnk62yvgGjAGfp7ceKTicBM1tUtuU",
  "key2": "xKRrMUrXVDkodVjSQtPVfnHAkCmGPUCJpkjzv5v57ifwcwNW86utbsXZvxGxZGEuz7FmrqYPoB91y9UsFvuEJoz",
  "key3": "3rqtwc9YEhZpg5Cro29VEW6frtsdzRw7kMiKNrNRsrRSWu7fnjVNi5Mf7rrAr23xySocirg9A8yC4ttsxQCCXHEb",
  "key4": "2b1oWgdng48bjbygyJ6Mgcv5C7PsAeAeLat3ipftkL3wGVpw431sYk6Q6RpQU9RSzvpQLceDeVxgDHT3o7dxVV4P",
  "key5": "2QYxNdFZgDDjM2Y3jEVuHSx38L564rtSTMLo49Xe8JmsnqZDCdQnL1QsuVUsgkBrhGjhxdHzKHGbBdbVJXxiNhi9",
  "key6": "5zgnSemmZpVk3BaqndC5BAHT7ev5tjkbUqm9w5EdEeAQuKdQzkGMsn4f1keq3kAoWqp2s7LM4F4E8Lix4oB6eVaq",
  "key7": "93KUb2VxZriT8fs2BB7xX1NJpwDprG697mbEvVaahfDExCCajPJnPV2oaKs8wPWjqMoh5upntPxZQt9GjPopQuJ",
  "key8": "2FdTUNLAXKpys1nQtYgq2dMwRmVnhRKG9TvxVgMK69Qh5kvjMeU4mpfhcR3JBjo9mwNHHJvsEAprhtr4QaJ9mYFy",
  "key9": "xvxo56GZxrF41ZLG7WrB7Hpq8gCJ2i9q5DoH8Dy85TpoD4b1BwoKKA9ZWTQ67xgMbfVX9QCQECWfqdgqR2qiyyk",
  "key10": "3zBvZark8fMQmAgmw43sjAMYFzTob4xkokEi5QqhpfFcCvhrR1vVj1q8cEY1ZcPf1Xbe4oVHo22JoCx8Hh8As95z",
  "key11": "3eD9WThRpQtG2x7E27VemVEkoymt7724JfAnSkk8JXskBHzsB9JbvSu7TpiV5bGZ1yxDpR4gCqRqfR6AKiYvV7Y8",
  "key12": "5zVWrS3DPMBZ6eqANEtr5JMiKZQhGWrJvx2vYNKvNvvUu94rhHXHjdk1tFgm6CT6z4xjm5YN6nV7Aa4BseVcL7iL",
  "key13": "JF7qtBNAjMYdL2eme4TaYAZz9u9bFXH8MRsmmHz3j9VVdo7psgG7mgcyqhuuvSeHLDFD2uTK6n7wtnXhCtbAwJG",
  "key14": "wtnnWrBXYiHoM4kAmfw8ufeUjr6XngqB4pbSPqU7zFWt4dUJFLKg3dY1Ph4e4BcEqwwjywwzyxHPJCZvxcAXAmf",
  "key15": "rmFjn5KEnZDY9R2nBoDX2Mp91CyA6YS4JGMJRNhv4pp4nstBXTQ82xC7YC4P7wZnE3xtmMcHMu8WoG456qaQbmf",
  "key16": "2TkS3ieLim69adDE4SbeN3bWNzzG7VZKVU11Zpu5sKyC2FUHYPW2p6pe6vvbxEUH1Be1ZKEQXnGNvNpDQFMKRV4F",
  "key17": "5uHmx371gsu8rb3iP8AA4avbLLmFM8e2GvmbYyGAYtkXa68x45WpeX3EYkB9YNftMz3kxEkfcjDEWcs7NDYfCxZ7",
  "key18": "8Pof4sbcQk3c628PmvUtkv1bjNQCh1JDTmDPcV6W3KZKWh2Wxm2Y1qcmrunfUtNQvQ6H1M8QtbSqbumi9W8QrqE",
  "key19": "4fdcWY92RNTKsyZeEutKQTT5ukaabibKXsQLPs21twtVDrCniBDzL6CgJ9jFuhB7rJXvXjiTwiAxCeowonSmr8c8",
  "key20": "2tFsFTxRK6ZvuLTczudLFnW6YdLa9xWLXh1LE42YyMTJrtP3S8WpyhWB8XQsszS3DkXy52pMHw7xHwCUPzrjfHQM",
  "key21": "2GG1TCaSh6zYYVNGEH6zFLhYHcWSnmiF4zC7ZLbGJuYUYpxwNxgeiVnD2AejMw9YBVT4DNMf7kE5PPjJLrde9aYT",
  "key22": "3TB9xxBfKcjHKn4UZhCQEc5rBB1kQDJnUeFsR2z7RkY5E39e68ZnCdW3vrmS4YPajwdiwmtH4ZkN2gWNKHJDyVi5",
  "key23": "4Ny1BJGrWzCtM5CRV3LxtRk3jjXJ5omKuNVQjnNxwXoTxvTrDvuMZciSKqJ59WLy1Lxjvb46N3QMx5iCDkNpLzdN",
  "key24": "79LuXudpYx9XTw1JNmosL8mG7ax8Q5Z6Doa4fCcZuWwwrfidx54ToNEYznwnfsHJJRgxLzrqJ6bAdbfx6ogtTPR",
  "key25": "8beEqPv5zSEW5oMt4QcMjerXbcaEVrXBMrqEq3x2eSVYxajhvMzGA1r3SGaKtQskzqAfhqN2b8oKdmSZRRk8vbM",
  "key26": "5MEqRcp37CXetsJ9XMz85JSNQLQN3LoWe3jDNtQUJZ286fgBymBKBBPZzYY5UswNVvpvpwWr2FkuekpD1Yj8Lhjg",
  "key27": "599CMRLRAUJ7GFE6Je2WYJgr8dm88oE76SXWSKqAEYVb9F1ZUjasPLHdBk3eyBZ3aVTysRQPSWv54yTPGMh258ti",
  "key28": "3hyBQxi35uztNwJs4AZ9fpNea5YkpEY74Yn5H4iybcede2qUzau7ZnPBUsZKmkh8ytgxMfyMD2kLwEwfKiPCnMrK",
  "key29": "4wxUba8QAr2W8e8YX5nBUjkKmhx4xBQu2hT8MukxYp1nm88QN4bVnNF9foPsDWgFLxnMEvKGFYucscRzoWTMn2TV",
  "key30": "5QwGunkbayqAPJSNSai9tBDBp1mtUiaeA5RZPi58jzxs72W1twjAyRiDg6wckN9nduhi1v4GfzK55F8UAJ2zXdQh",
  "key31": "DhCP9Ama4JYv3zgBVDbSw5qHJ1AK24A8fNWBphHrKG8UHvHzMuyFeru9MEBAUSeEjpMJWPCNCCEkSvxwzx61ZTi",
  "key32": "3YH7b9PP7H79BbdoRzhTTExwNGtxfzb9VHPqPf5jNaNKTwV71bmPBRQnrc3LtvYPYZE4MzDYbNohLF24jr5FkXub",
  "key33": "64UNXozBHjyQigRh7qx2RCG5vBLR9aSKhoZxq7xeK2UYdjyVY7uLcXvTWo6Z9V1vqsXv1jQuX6UoLr6FcSbzc6v2",
  "key34": "Y3gUHQbX5yJjqxN6TDVHB2vBA58uKJq5yYHgA4BQ7YEgEAAUrMPgqL3jgsFW6ajh86bVkGHoEz9jSGpThxvvU59",
  "key35": "62jf7B9UJHuGurxGzDXe4zMb81p599yGqRBxQn3ViRA9tmqQQtFSRqCss1rhP1vFq7jWmkpmT8JgMUirZTvcXNNp",
  "key36": "2JkK6CN9oNdgFgJNXG8w3qqoTsaTab1Q5v7bf5iQ4UtPbRisiKRm1VPH5DirGzaa4SYnFZUHteURQaqZFVNVLjZ3",
  "key37": "E5nsoYjBpionKkC3rUTZKxWSgDpyuqrXCF6YHx9un4VkpLzwEvcudqpS98xXn8neqADDpKWzx35VaSqfd8RTHqB"
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
