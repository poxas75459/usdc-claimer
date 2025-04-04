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
    "14ao47VzDsWJ4b33YM9v35kG5z8aRFVuDeLiarDFTpa4TvE8JxjZ16mL4kcPBWxTW3TrMPorJq5FQzC2kU2KCYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MqLwoLUGVqNL17r9cfoUs9PHu4fY38JFbsdD7FFCKNJoLcjqJcy5QybddJ8BunZTE4LdUc4oiGC4pYoe53xuDhC",
  "key1": "2EQPzVJKjym3qEX6e6g3RLY5dWcVgS5Ej18SNZVC7L987So6mv4w6rQHGfZcbcRALUZG9sqbhXiQLNyBxwqD9kpT",
  "key2": "375iPtiSREpcBY2sobZifcRqWAnRUvzmtPiMUARbq6iLEacnu8v6W7C7rctdGUYwvYZhgtUswpuPQeQcbdTbr7wf",
  "key3": "6t673Y5BNNBSERmaYWKifmyCooMG4pQp55UdumyB9Xwz7F2VQHUUSaFJTp5NUNTb7Htb8K9aDmssAAMKBP6Qkhz",
  "key4": "5L2CXrimwvWGRyQVyHZTjibDhnFWvdsekTVRYkCY5GzegNcqJbWazTpR6ZYqbiHP9uWvunTuFgejrVNjRQHkji8G",
  "key5": "2twmd6NGNvH1MFc3qcp4tmoVDEecncfDo73KVYEKoRuaXpkY7HJnLc1FEt8cRz9fZvQiHQzZ2BsvkfSdS78d16AL",
  "key6": "5wBtzYgyFeMSHejew3TN1mz4DekSPe7E36M6A1AUAreo7M1te7q1WVbKpmAXzGP5XkYZWhU7G1t85iajU7ukDZAV",
  "key7": "5HD6eM5mvHoZDVSFTkDaZaCaMf5GFvv7sTpqjEfnuzpbZ4Mf4krxuxwLt9FT1t9RFjP53qEMJaxQMVVqC8HZeqMN",
  "key8": "5MDeJ1jqozkLP8bpDLQUj1njBivmT71ND4fdHYxt7Kq99iS37Fu642ozrz77vqJpmAKR19xP1iTWzaEQ3cc3CavL",
  "key9": "5z5GsSNWC8BTQcFMpqzPAmGfBrUqo2tLsahewqqQHUMNC4ZCq4JB9uvdibLtceqFKHdB9MCKG4oYoZQdsGGonoE2",
  "key10": "37xYYhjTcshbvoQLuwuGZ74swQVjDxgTf7gJnsvd2iTgcHPRhcGQDzJENnAY7rpXKsdT7EkEuG22bEQcPShpQcZK",
  "key11": "4s8RDqAWKEBh7KvQzKXpoy8Z169eGrTit7y8V6eWpABHXjsnyWi1DvihL62tsCTKMdQLuSktRXFvgTC8Qmhomy5W",
  "key12": "49wDobYhHn1rEuwBRwNPYNCLjFbHmQdWukm7XUYn6qXMxWbNrRgKFuYBzckwFs9t6e3eBtihheCMbnxGtX2SSjLn",
  "key13": "4njtuRuG7B1CJsEraR18eBYhMa5vdDsWwrbcj14zP3AszPHzQRqg2WMRYvymqLFPTyh63nDMpgUx31uuvwMm3LVX",
  "key14": "o2r4t4QRKEYLCDWqiKv7ruqyuLuum8AGfBnFz1Y3UPd2cA6w9BrRWaSdt11uLWP4Gz2efSTkejSUw1DhzkALw9i",
  "key15": "5sV8cAqDyreR2GTw6bqeCP9ec581XRN3fR6tJnhC5G6NZjFRTebNMwPPkbNothLyJaAtLfEEGkMaM3MZNptUWh7C",
  "key16": "nMqJKQei3qWPFAZQVU6vtrHEMutxMyvc1TpwoEhSgnf5YpSwQdckFjtAyV4Nfpb7eKSujsebidW7cKNKsqLAanm",
  "key17": "3vXyUGKjeXthdFKwFp2UDhR3dUdq6d2WM8Axasi4czRfRpN7JEmJiX9uBENBMutdvH63moJNTEG694enyLX7b3Ld",
  "key18": "9ry7qPkui9kLyfFMxhmDAFd72s216eohcopv5aH5Ei8mZSEBYA6ANak1voMwR8CSh9JJuANSXLXJb4a2FiT2xoN",
  "key19": "2zLZKBxSo9BsjaVxNmrz1tesBGVxUJAe4aa2xkaJPMHPV4QBdvRWNuUvaFW74vzzmCRcAKgE1zvWy1J8HLQqD8AV",
  "key20": "2wQA7cbkZmEfM4NYnvJhTq6vYdBMA4yehzfNVSxyKQhpHgbsvYQTtP1cpsfFgYPn1pJfUz3WKPPRuXU9ap5S4KgU",
  "key21": "5m8wXxXHAvC8MVED9uZjXmqdpjmoAAbwF97V1CUmd2Fm7HUf37g9XSEEwPQXxLsFcLHouGjKk68j8spEmi15wR7S",
  "key22": "3vY2KuoBsxVxAYj5TnxocQ8AvxZsAfn8Pp5nFChZ53Q9gqB73JPwXaLHYJTM6FaUaABEmZFqQ1AKQAbu7hwsT1pS",
  "key23": "4mwyd5hNXK65ZVR2LeH8QEuqRFcie5G3P4vt1ff7PyUyZkUqbPv5zik7VYx1htjDaqfAixdzHKsXk93V9fgFehnW",
  "key24": "44JCS7MHu4QmKKQHS64qDkkTEd2eR9ixRopQbrBMZ7DsQLUFYe1yGLuAxZPq7u7vrKVzj8LxpQhJF46dPQirWmtm",
  "key25": "5E3AbFnJWTU9EXL8RP1USo2FrBocktnpWFudnVArLai23aP9sk3sJWe9fCmmsRM7zdV79m822qvaUL1mmRbtuqPy",
  "key26": "2Eu9Nke27Gs13ticaw5nwaZVnXY8iBvQxgJxjSjt9iDmF6CKMmE6KWnXBodY7zphK5dLY8EXstEWF56uAj4Ec1VK",
  "key27": "4xu6TYGy7P1cX4XqkxJV7Axjwjt243S2tXPzmVWj2nsptuTJXTygwcmC32TvfX9Ks5BgyHDmQ9m2q7TGdxX7Axwb",
  "key28": "57r3tbytJhcLGz5TjZcBFr1SK87rhggh48PUNagMe2PkHiYjQX9ZzZziqdSjsQkyoUVvxoaGqnaPfKZ3cfQvCX2U",
  "key29": "2MQSUNEzLrNP5LYALLqsuFLNp2BxYyhyhmf3E5U1LWdSFdSBKMkPxEMvfMCEVMYCv3GzeuDSQK6QzMf4qZNLBj8B",
  "key30": "3BCaQLX5QbvncXi9p1bP7BAZ1hJmjKbipPnGbHjtDHAXYt8ZCqFaGLMFHVepA9uL53GEpuv3PY5Hoh4CopX1E3GK",
  "key31": "MEuXX54LEMSheb1fw27p1fzedxpL4ETDKb7deTpgtCmFEJWRAYRfmNSxTagandDTjgnriRux4xSAykbgPMXw2k2",
  "key32": "3cLw6JLsivszZRQJ9XxCDiVNGWu7jj4xGzUqqt7hCwCLau2ENbiYgBj88kRAwXTD8zT3CNq7VC4nYrrhRu4FRvhZ",
  "key33": "4YdCG8Q9vHxuqpSw3ZV1cTo2Sg2zj7ngu4MCDjx7LiDAAmEzt5cnBWS7ToWNY1VNoS2z8Y1mRiWKJpvzpzmCeurq",
  "key34": "4WyAJokospPUUHRDM5z9Uyixnk9f8XRPbzxnSZAS2Q5GridAnfAD5edigoFmK396vMKN4vuRGTTzcsu7vj7nCCKE",
  "key35": "5doLaRWrNiasKk19CcsNqPV2gZx3CoZgKqNmz8vvdZPTQWCxVHHCxNMpZWKVKkBgsS7YhGiQrkgEVYabLaFTCQ4b"
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
