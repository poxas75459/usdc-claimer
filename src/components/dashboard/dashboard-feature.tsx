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
    "tZBDxnhzcJVgLGnzJXU6f6MfyGR3oXACWhv2ybRiBNGhBf4iMhkkg9E8VfvLq47ucZyEg2y3K2FiVtgPuQ7FDbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Bjtdd4ptzjeBU8GeuFMSd6aeYUjSpmAYqEqBxS1qaa1XL6uFmjaGYqnzzkxQsto629SXvhKEFoS6C2j4bKGNMt",
  "key1": "3D1uuBEdjNewmEV7LLyaWePjQ44FD9pWfbSjb7ttV6fihVKkhZ4Erxiree7W3ownr8sLUegaLkWNacnhU6z637F7",
  "key2": "HgykKyAFHnghPaAeovYFSC8wFJej9AVRhoRPRmXTvYfJE74bUEzbPLaXx5bQUTZc7XRwUCSdp4rWjKYXPNvRkcz",
  "key3": "5TtoF48HRMNRA35qsHp7fZvoZDAj5ngBVLNzfe9f4JMD5CASJn78ZQPJRAbN9PsoANtaLRMauew75PeGWVStQJya",
  "key4": "5CbArZ86hCpb2LSeH6RuFCxav7eVoeVjXSkkQFpzqtqhaS5AJETaA5yhicj9WftgrTu5MBtRdxgbkJePPB45jBiL",
  "key5": "3ouaXKSnL54NV9ri3PDh3G2gHSM8odKmdXfmeyfesMDvUZ3JPjrn6SobmRpHTxUCes7ZBpYKeUSYZuTf9PewWXSN",
  "key6": "j9XMEQUbwWgLhdNpD2uJKyNZn4C9SuV8Ex7spHevvh2ZR4FbxAfw9PvD9t1SxQbSMZu3genpFdCBKF8Sr8xn1oV",
  "key7": "4FixjZKf21HTbejbeFLMCCPsYnZExVA4Kyf9bdFSgwoMgh9URhBk7FHjKQoxVmFVHMavkacjpnYS6gD7rYta4WtF",
  "key8": "5WhcbFPpdTED6p7hsEskBGjtLkV3WTQZNHcCDVfgWQeDC91CAskLxx2wUWh7UpNddZkoewq83s9dxuHhWQkQgLh3",
  "key9": "4rAQPdyqMnGXvag99yFsfijmQtW7xMQCn4L1gxw9dJZxRdfm2it39juwEDBBfiEm5NmCZoUJjdpt6E2avzMqi5s5",
  "key10": "3C6ZZRrAYM5Ku1PtEVUET5AgZYkvESUxydKNN8RSYChoHjkVxSbY3oBFDY9gJHfHqV3PsbvDyrD1nchUBczd1NN7",
  "key11": "37RiU4MyxCGKfTbirUGLR6X9jyskdW3ByQ96bZpv4B1niHJokFqeUXDUQhmQ58qNjNmYvmAwPihwGQDDKhd9cxMh",
  "key12": "5xNKrtzySjrbhEaMMhVW5LgNSGJVX8A8rXXNmY3JCBa8gKXp4QJpAhrZTKMXPpEgbgDZWXBPua7xsvqQgbGSZw6N",
  "key13": "3hM4ddpcVXhiRjX7b6vCayUsZgp1TYNvShJJVWR5x8mRAcWDgFDzZ3kpj5ErYM7F8ExqFcZfh9pNcAshQpKjAXnT",
  "key14": "3QZSgGkFx5NcjqJkzptp93ME6kriiCf5sM6nGrVXuQou4R5StJy1yxvwFhib6wCdHh8ZrXKdppNK931LZMJHHYuW",
  "key15": "5MrGpii68NSxtaozLkygAsHYM9QgAZCKeps8Kc5bagA6erzNJbWZZKUkG2Vm9EaX29p6H6Z9EpsAgTJXKWYGuaTu",
  "key16": "3rmvJxMuhonAFtXg4Peo2nvWH84DprHzvBzPqXFp4qonTDBywG4GfYkouoxAVhrsRAUUVxjoj9q1teWHnhUhUwjN",
  "key17": "5MDoYPQsLWHxNMsspWckg3m81Q9JUZWJjGZBdnnXNHwgbm4pRoKejuVdmKzekRoRC8d3EuNhsW7oFFrzgnRgXi1v",
  "key18": "4c8FWEfUEDTZGBQfePKY6xYj8wVz9n8WmhkRRyDWBCUAE9rWaEhLJoEE6muqZShW9EmaFbzAGNL46xw9XeiSw5Wb",
  "key19": "2B6XmwHEnuDFrSxvYJ1j548nb7eremb1JSemoHUoPMysTeDTBpMefYPierVhZ9n1mhR6RX9PaS4V9tTAvZAEgPRB",
  "key20": "3VV8q3RqqchT2jKMzmEfH8RFb4Cfy3oWEd3Y6hocDTxQG5Wq4dQqLMzQ16XZ6jkPg2Bu12UqAEYLwrwsqXuC2PgP",
  "key21": "3Tg1ZhthXZPDGnxRQx3MYtA2vrAHTGxeHxbXFPRSY5RAVRvZmPvCVVS7u8A5Kt4vhiH2xsNkCWtxw3dTEfCj4wZm",
  "key22": "4skS6fcxPagqABK3ToFPEcirp8Mctq8qV5tqEZNBaxASJ5AfvE5SXtAH5m7qJnkJLVie6y5HAqJoCsyjEuvT9nu",
  "key23": "2Ma6PjbjgZRrKwJZf4XeeZcciEGEFqpdqRfiuUuxgFFsTdhKSg1YRPsW6E7BRbZTar9CbpkxkYMpcWnYDwUDXVmb",
  "key24": "3eWr8ETN4PPMw3ziPa4ZxWa2aj4gFtg1JXHEmiXaRHHzgEfCBE717GbTHkx4c7QFbp4jf2whu8RsM6hRfsk6isXt",
  "key25": "5oGKP8dVGwM2CVLTvovzm7xnSsppMZsib65KVnSvgjpab9eNNjtteSuW2fuqLPMuwh74o6yqva91adedBUwcNvF7",
  "key26": "4a7dDCjrUYU2HMQHg626SaHr5YqYrmXmmYGaJEDQ2KMGzLDtsBEjeX5YcY5x2RndUREhWnmQU4LbKGaJ2iHa2wM1",
  "key27": "4xSvoMszWPXdmrVU3rQiDkXSD6LZ4EYhT69C1aEfzmnz9KyDFeaywS6zwANbYpX8UaBxnYLUx8wh24ksbbDctmNA",
  "key28": "2XrPUzK2YetfRP55SMnU8ARrsUgZ1iqcAAqM6qHJ7vmGn2apscTws8ftv3pyj1TAWKEQz68hfv9WQ5ngsCZpDvMJ",
  "key29": "257Z2KhT1fkcB4Rm6suqvjNfvEKp17yxPtDNW8N3ntkCrcS4hr1BQDQGH1SBNgW5jKmL5RTjpNWdd5czcxSw9pu2"
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
