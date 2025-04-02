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
    "Uh3SAsrHJkbgnKNyTPomUJKqLeJzS3GbwBP8WmrPr8kVcTxNwn9gHvyqdtzYhbpoxUxSdPnoKZUMDMhCpu493KA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W2ekXAiuvoTKYpJrTaer6smksCVM6CdoYAsDbDStAcqrNLQaL4GWiwCGpjypNhkm3bvyQ4fQe965ehnPYShuQ7z",
  "key1": "4oa3QuXrgYVoMzjbEkTEqfJmLYX2dobPKGqwPqktWXKEXdPF8tFtubb9Zfj8wTroMJtmaS5F9Pxk5oUJq5aEQ2TX",
  "key2": "4jkgMzDrkTLnm16tTswv1vyoQfzMyYwYTVqEdRsjDXtdFa4HQd9DYkt2iHsmD88ZeWV3xijN5Cy7ZGC5HX3MzNHi",
  "key3": "xgcBQCSdPsatJuZXmQw4QUsPdDK5kU1TMDcWmSC95f9Vonq97UpLa8iQgPL81MEBAuaaZPvyJ7XQkPdfFNiWf6J",
  "key4": "23953CuDDsHcLGb2aHDTNYiM2FdjfbVnvQxVYSqRxZ1HkTpzdbkVQa5RDZ5JECLZqDCz3BjJXnviAvsoMwkm1LY5",
  "key5": "5bguSkUrNYrvvQSsHhufssWeUrPfM2FHchurnYiSDatsNH2d6tgGTMhVeJjTdmZrYyFxu3Xx9DdsYJ7Neqxdcv84",
  "key6": "2XzYVKNT7enHMQincskYCP98vFnABoqNh7L2rVHN7yFpH1k9mJ5xEJ9gX53Rn6sX6Vk366oMyraNE1FhJn61eWfn",
  "key7": "4eDYVVtLJtjxwaZKtXLkE1N8nuh61vLUoqCCjxPVPRZPjfzXvTHq7HjhLSRBP5Hbf7USmDVDRYpYqXUetMtPAuwh",
  "key8": "jSawRJ82KDwaWn2LKehD88FgazkN6KpYJUXzQUBfcRQCt51vHEgBVS1ydJF4or5VUBdggQxZaZqNM8w9TdmY4hj",
  "key9": "3BZRvdgL1r1XB8QF8V5sGg4MQzhzGWqfLGfXrxDC3oriLynwMNsRGxTVb36z8fRMkPzbLKZAJQymWZEeEcuQFw6H",
  "key10": "37QmCWqhRYZUCcCzVpJxzarY1yGsbAWfL2DXYqSrnPxkZrSehTDsGmq8VRVFHo67YCtWbV7tYKFFkUtvXfcqxS1C",
  "key11": "4rTrbCNQsdGuixM9WNNYKAub6PXb7uAnCXrsz2XwoX8b2xaH4W6vzBkVB6j35RdvU1FwaqjLMcPqbwi6V79rpwTJ",
  "key12": "2r3ErEpATUc5UNd6WP2sSHJQkYY3tuAisb7484Sbv62cMaVhqN1LtC6HjM6xnNy7dTkVbwGo9g5veSoovgvvjdqR",
  "key13": "22fd8HR4B2jkNsadJcQ4cebmgvJcxm6GQFiRSmrBwzPEdMuharySU1HK9epbZuKtQ3vm7m1xZJHh3Ew8QuCmbG84",
  "key14": "49DfntJj4t5WgLm9FdLUUMSUqCqopWfU3VGgJKC7pjZhNgW77MFnuDiRikeKiFU2BS3aCdbxUJrPPDKLkdkjofqa",
  "key15": "679MgvYV9UZTcoHDLcuT1Rbp5og8pRrhCen7himjUyPyQmrB9zaTHZCTuPTACUcVZdWBeWaQ4jZQrXn1f7x2NjhJ",
  "key16": "PXZ8A7cLqZ8X5rg9djTbn4dv9HECqCJQAYkWiAvycgwpP5fM6Wd2BwHL1DU5STFYtow9GLqcnKg4fHkHKw2gV7o",
  "key17": "35STG3kAuwuTxUMsXg5nWSmyXLsEYc8PTeEv9o9CdebDi2AFVbN2vKosajdHta5obrJexywdAfkJsqYuUEiTqucD",
  "key18": "5c69Aatj4QgQVRJ8MuifBryoPUUVGmsADuyjWArLPDpTqV9DE4DBc9yfB7euWtrHt5CwFuQ2unnW4ExQAAAD5M9j",
  "key19": "4Cdj1j5Sfk5Nhk2tnf5GnW2jrtBd5Z1gYDXx2ttwYhH8qRgLLMQ92s1JyNKUiUmX24K8o5QFrHtX4rTkE8VfcGKQ",
  "key20": "DyoPmnDhyy7ruvyhauqMkvnDVgyujpf2Ves6ageLyfJsQLRtprzwrMgorsw24qKqLbGzoimBLRvhL1xK8JkGLqE",
  "key21": "b3k7LBmuhLz4hXbztNeTa6uL95SA6gafbmqXAVdMt66YmSZ1TzF5Mte44X5hWAGcmbxDpAKB2JUzVe7SMDHzn1p",
  "key22": "5cL5zR9YZkGrKpoHPza1mQ2dj3isyKeZ939Rvqvoi2p8nZH66pMTUQ6H2mtYU6wsgPEgNfMR9JpUMTotGk4P8Jsi",
  "key23": "641fzC6D4LJCj9J4vJtd99fzt4ZHBSqzrxRHLVDVJfU1RJyucodRtFa8dEiw7CVupRQHHgTTPjJGRAbz4vdV7oZD",
  "key24": "3z1NkjmuC3zBx9CKrWrkYZH9a9JmCx4KhRjCWECh3ZBFtJQKxmdA86goyHgF4ZFDaNfAD7A3m72TwpnPJNHhoEgw",
  "key25": "4NNn2VozxTXUpzgzM2X71ChZyPckooKQU2WRgxrtMbgTHmuowdc7ZZc4ryqogRpGPzL3mf74rtWRmgswqDNRAfj4",
  "key26": "5uqPfx3Qhjzxr4DdTBKF1orxSG82DnePX195XV5D3heWtpim2V8M7CUXg173AQUiGMYcEArxx6Nm1vP2AVKKAUhQ",
  "key27": "3UBHRPUiXZxM3EXLkt9zaMYe6WkzzTUsGSNWUbAJRPUHy2LXgA98GkPim58dEouZnWT738JjEqKYWEeTiJYZisYB",
  "key28": "2j6HHnAUFJJuxsqRSVmeTcSzY6ShZ5EQm11Gji2YmsAU4U7P5sWHirH44xaCAdXr6AVYANHwKNGcyZahrSNL8vMz",
  "key29": "4B7M5LTkBkgA2D3yXopR95ZRmPw5anVYRvKrMLVDwNKbeHi9tEgFJmoy9JWp2Dnhw1U17Ep81TgWRtwYPYZzVP6y",
  "key30": "2hNBq4JVRpKPb4syFrsT1R5wgFGJ64BULW59A9fWMrSnVjcASYLJanjYf1Z4PhnW4dHEKCwWBhHPeQbebxFWfTCJ",
  "key31": "3uu6caKJrfRqfrLwrEj9wytuUSy1sE65Unudg6bErUJLSdrf6uf5AuyJdAS9jgFXtDt9cWAAUQ9tb2fv2dBp4wJR",
  "key32": "2GbyF5qmsvpajKDLR5455mK1u7ixKS81okex7fMPrtyVW11EPzm2jVe1PD6KKxwVewky3eYzCjakqKBdb3ZcQLaU",
  "key33": "4MvHhJ8YyAddU3rhgJybEG1ZTNj8VJNWcnUjnvaYPKege3T1PtEyJZEhz9YS8thzHCg2hxWFjyKpFmmFjaZc9tza",
  "key34": "opFFiuuhEJ7HjAUv9YnTDULpjr1NXHjPXyKrv4rUnqZJHj9rmAYcmvez58YiS2rsfgTC22dV5Ahjhdn1Nhz7VcX",
  "key35": "3bjsFLgR7K8gCm1mU1mh51tYBNiiG3U1t9ZFhzr5MicQGhHhyBvQ3dJRkkTm8sac213PT95sg9xErHhD7hEs3szR",
  "key36": "5o8rrPqpVp5BAiGftwSpae3jxs5qcjZn4oLoJhJWJtV5DZJsDtkKRXonLxHsKxAUhXHJgFuFg5WTZNKwaSvWNoNt",
  "key37": "2cz7HjvYSFd3FxN66VU1nEy3kCzrscTcc4LHxSmLVqUyo6JjrS6zMJp9nx1YhdiTXL6M4wCVQ6JRUfrZSMAyuYRW"
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
