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
    "4yaycUz5ZmARbuV4now2G6eCHSq98ax5E4g4teSe9SxgEXYzRzYFbXSBUXhoqm8gm9jPnAKZZVhKxvw6LgiHi5cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dh6e15hzfoA7PAVRFqXoAf9KSrib2aeViKNpdCRDeZM5NtFfUbEnNksr5B3N1cqDSTr28vAoggTNUzD5yDR4p2q",
  "key1": "4RCREMPSVtNAsD6iYgPmy9QoVtaJ5sDxaUm3gkzJZwVmdTcGDAx6BsoZdKaUJ736CYh2SMkFhvyJ8BZucgY4cXmj",
  "key2": "5eK3yxN1uxAV5WauX4BcfTpYKHbi1hF7z1rszptusCbTSxKfWryzzX2fSKKWH1T6JwCdTkMkK2v1B8wW2X6nsjzA",
  "key3": "4B1S98AtDQ4w4qzmh1oDPD6yKznBTJ7ybxCjL9vNPQQ1QJmGWrs4Y6wr5c1nHzhFW21iMUS2hXF3GVePpVgwQLhY",
  "key4": "5mwkpLJQcq23oWG5e5aRkeaTvjDnoxzoXe6Y5J7xJStpmC654syDYmajnbYM6MD6T2Tm3CsbctQWas82TADAKU9R",
  "key5": "uw2bMK1QPeimgd1cf5Qm2VQrV7F8iu9LxR6H8mZABTV9HvqUzKCh3k7Tsm8kwcaBQQ4zjLS8YiW4rqVBfdt51dw",
  "key6": "2PVFNuorRUn8EzRLnq63To719RqGeZanMkQE6Vu7m3R9r4ewGcjS3wKvtgtcs6pc3oiQHVn9r4ujWNjGmTVkkHFu",
  "key7": "3KBZfzpfCmr5SSMWduNKtPuACTXf5gsCWFcRjKypnF5rYH5Q8BtvaQUPJD1VRBmcTRwom6FVPkkVudmEpfiRzQYK",
  "key8": "3GimJTWZS1hTvDYfXKqqf7xPTm95qov3jyrXcnhyiJNrWiyd6NfgoyZ4q9yfkLv7zQAccFEJdUc5St41XbUqQrY6",
  "key9": "4rbXAUqQnrw6YWVdCFE8iMfSjPPJJpP3tchSSSP11QH462K5L5ET1vr6JUWezdSuc4Xf881H1RVDb7gL75kbGXXw",
  "key10": "4MsKpp1yEDii1oRayiKW1LRv5pexgaTTxEHu4cnX6GTy3Ruq7vdE5oYXvk2SUJtozPzTiaYg4wkaDZcg1r166MH8",
  "key11": "3Bv2CxtbM5yoNx3DDekaN534At1EYTjDAcLdhAnPpuCdH1BTcmnufrUgrST6jL3HZ4NdXJrqMp7WiDApmVf422ma",
  "key12": "3Q6h5zQpC3KQJrZk8PWBJHC4k4acaeiHu2Fa8qBRUdki4ANDq7iJi2wXxaCvXUMydjgT7JEHajC4fYpnNPPpeDad",
  "key13": "41taUrzd3zUrwsHMrRggTsNN6eGxxGuxXoSqdHpBuRb1wyCZEMJ1znbyWr8twTybHEwg5nDbK3FcTD3tNy4sMWZw",
  "key14": "5RwVYNxYZsvndZ4vPaNjDPtyqzcKJrTBLVGzYTkJteszo1t2b7qVXi54pTvauKyYmEpBxnbU5ia6YphPiSAtPXrh",
  "key15": "xMaNYfSthq5CQMUBLLg5Znd9xnty9Bg7XrRDQ2pNQdfKbtwqpw98KArHDLxJX2UYwfvb2wVZcj8PMWuSsc7a4an",
  "key16": "5uAbsJ691SMHooxTa2xALACTpRedKgVnZWcVMvSHo5dMtpRNmgVczCbAoCsPxyiy2daJDBnyPPAvZYPdqbzhnnyy",
  "key17": "5ZZ3ga91z9hsPuEKyQxcbxk4kgqMNs7gkjYNThsGLxhde6n28tCFmpZNaifGdTqyCg4Zjt22XjuZ7kMAhsrv5LGg",
  "key18": "4tocBKKn3n5c7xnCLhGdu8HGkygNQGZsTMwiaaRh2V3bhPhQ7FWGdvHgGY2gYmQuSyXQczWcj2h4zttDvji8hQLX",
  "key19": "2RKTJ1Hj92SwLHZx5vcF7KiXxBEu44rqvjAXfBmmWZzj9rwycUXow27cSsuBxcuPLj9rAEo4b92FCTyxYhTUwLWw",
  "key20": "48RMszP4U4oHndcnzaEYRdVUmyGPLBwL6g3mDq8zdaAbNKhAvY7bsBgn6TxQ6JZKNYrPifuJaeAhA1xWfdCuAV8B",
  "key21": "2NNzkcq5L4oEJbp7wpvVm9WFmTt2yjYQDM9RaaL3AYUxGKXadRK3Vq5Lu4ABwsvn7nQQL4UqMNSAF9J9NcxHTJcH",
  "key22": "3ZHWk4zrhzP27AEXB3m2cPF2FFaMCRY12PEnkJ3uR5mBX4h76qJmMgHoyQS8Q5s3Hetc7EpEDs2dc6PV8Em5bQd",
  "key23": "51DpCKaJvXqSMfqPPv2MMw6X6ngoZ7WNdFszo41uFT9X1MXzkYGGAVDtbRyihxgvn3DXU86cMYzQ1VvxJKf4GeLE",
  "key24": "2yA87xWq4f651jETmqtptjb8Guo7byQDmKXeQP2JBe81UkJ9cKhFPZRHLt71a9r9vbhskWszbc7ssrPRvaohdQkv",
  "key25": "3rMnECriqmh9TuJV5UN2JycH4M4fU21ZGBV4tV1DsSvZWvmfuk9WnuDE7bFKp3HSZGRQqfndXULSQEYFxDtT42Tb",
  "key26": "63vn9RkXNXM6hpb5cPHw8grWNRpNrooXJWf79Mj6o2GfRpXrimSaAhKii1FTVh3CLSj6KangbYhDmjYiCbY4Mk1g",
  "key27": "3GKddn6cqFNobTaKW6qsQFhyuV58wnJ7TfcKRVVms3uFJ3qmLxMhtAnuabjY8Bp21Vb9sBKZyVMox4ynGYfZqv7c",
  "key28": "3SnyTTumyNLnFZvwqvEWX6uNdnsy3maZjEzs8Xn3ZC6ZyEQFdiaK74oR246z11SVbg8m9Lr3F5c2DFLuH75V9QMc",
  "key29": "5hDcGyA61C1f8NfUBUAwot9JXD3YerZSUHUFPh1sq8eHXRhQamUL7uN1qbdQTFnYTJ3sLfRnnqxXdySA66nYPrdi",
  "key30": "4P5fmF7PB7uQUHMRPGckFVkvhMEowXfkn9cczcHmcg1F46AW2MhRExNEo3MiU6gj3bgTTLoUcZBnUJenNFFx1B7b"
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
