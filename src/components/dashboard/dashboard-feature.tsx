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
    "64kGSRgsrs4VUB9LtkZbJtQ7Jk2SERDEtUtuEdFkrSnLqoSvK9bsH2ahGs6Kzat4FbFRaMqvkeiRgZ9GocREYBcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DebfcJprVELePgALzp5FEYNiyxyDLq9GaUuvTuF415TLqEGNAiXV1ouzJXmkoWdQ2qEYZRce2AiiTvmdE81hKnp",
  "key1": "49qV7wYLouB2VagXRC1XRQADdd5wRE6QzsjwDuxSxAVrYdUqKotCX2cbtbw8vMZAENUBa8aJ9BeMXwusm96w4pBZ",
  "key2": "56KP4WBKwzsJyHHd6GEBRwcxsV5m1X76yzXGymfc32pBQGjLSNujGesbuymqYVmMDZ1MELBXtsRVPtv3cqjbcvy7",
  "key3": "W15hwJYv153cFPYVveLpHBhXLXrAxjTSkCU92uZcPRM6jbZkEXtzMKHMLWru5cE9NyAPkEhvAWoJ92fwTHMiAP8",
  "key4": "4DrEN5f1QhmgaevjwmMw4B5Jh2BPwi8uPmWtKZpASBt2gF42hRJ5udWhyFZUVW6289J4yFHj9xGLsR44Dbe1hN2c",
  "key5": "3pxQpZJizvmdavm6NPrDXLFZZNxBJeBPuTCTq1zpaHg4crH6vbJ5k2YgzTMvmbpvzX18vqZdJqyXS3R45qNAG2jW",
  "key6": "5mUYTH2L2C28nkdjCZWKtBeCaa2mkU2JrAfjUrsMQSe1hRH7ikDMcTfDaen4hNw8n1QshEXwQR7waHa9QJvzV88R",
  "key7": "3xj5rM4k2oBc4ZWGtMTckANRS4jio37nNkj7bateNi7acwwefTNR2VjeStJD25ibNSHtTKes9Wz3eH4iK9MHyNuj",
  "key8": "3wBpZjeHuhSTEajjTNNXiYYDZrcf1qDwqc8hZe3SYX5owQuMvTZbiNatwHhaDE3jekeVeawL7x1c5SihMvxzuBdj",
  "key9": "399tbAyBhUmAREw9SWRvJcrZ47zk7j4hCqzyQ2oEpv4QYhQW7UryZ4BEynC5FUgwjQSZgmXhXg8wMQnoSEvwQoDU",
  "key10": "5T5kvBk4iF92hVQb6U1ukcn9S1y5mUfqYFmMrTKf9rsf3YnNZQmJ4z1fXFG6J7vQKYYedEh1cp3a4ZArGKzxzqgY",
  "key11": "2uMUSQSH2xznSVRCDFGBXPbyp6R5eznPScKH2ZgXjaZ1hq3jSjkkmWJoFm7QBhGPytMSzauXf2vJsJyP87fNLSnf",
  "key12": "3b67gGCs1fdN6yVaAvBZah9FTHgzHwHu6tA8xKcf3G28RJL3DipYBcHKUGhKuCuLfBi2q3muJ4uk6JVLxg62pPux",
  "key13": "2EekaSQAb5yLg8ydpc1A67Dar64QL4XqKTxsHq93u56GHGtp2PHSB5HwSDzqf6DGxwUuayCnzf3kBWDrTTKDaG3e",
  "key14": "3sD44xmn72dC4Y4XNZb22rsGzYg65ZPANcX3SUZWPsxpiUibBumQCTfigpG1Z6FTqB83eVSGcdUiqbSuRGccqcRm",
  "key15": "WLeE5rMjSfzQy9T6jugANUMpzN43VKvEP3yjtxDRN8fwRhQbg7jvXbvMnjCenGRgQ7hDVZHexDAY5PEdPJLDDXa",
  "key16": "3qYEgD2V6Ujv4dE9bMWFBwYHtPU9P8u7Uu5o4EghNqYYwbpeg3gMRCEPBAe3vV79yaA5A1Pity83gY7Sbj5DxBys",
  "key17": "2NXv6k8wWuHvN1d2Q98sbrTQaXSgR7Yb8hwvFnUB7wudRGDrhqgGxEZ54DigMCHkSTiJLpHZTBcQUs5hPsMoHgRX",
  "key18": "3v486SwXMMzDeTg6NoZLGa415qfm3B6RB9NqPMG8yJx827YNyXi1YUQKSinnPVHaYisQVztwEsdNfHYz76QcRmq",
  "key19": "5eK75aWycmjYu4CJLetTe6qS4gNxmEfvzx7Ayy8vTinzoCFePHAAoWTN3pUT3R8eEZuBxUquP3RUcN6uHTDX6Cbb",
  "key20": "22SE7roT1pZ2Bv4Uy8Jge8roAJKYbR31HSxqYEdAbKJZ3MfR6sEtTeL2f2MdJGQJNCFpBHqXszVYXmSAu51kVcAe",
  "key21": "4tjBGzXGuAGgaDDLZ8dxon9taUG5h7i1Xc9HWRMoUJhgZ14ht9Q2A2AZTpPmryRqPARj2zVgHY7os82F2hDWCnuz",
  "key22": "WtcHpbE6NQBzRXMWadaL27LiEH7b7JNStKWYvHLJsqtrU6VK5gEAqyCqnsh13QQP8RD59VVAEjyXv5XTjutrttB",
  "key23": "5MTZtoe6LuD9CeaAekdkvXJWBTV29UQ5jJarVva6zEk8Bm8SQri4QjR5ajtizpNE9fbjnz3vEwMepfUcTqta72H",
  "key24": "4CFND2SQCNkgjDvYuHrW31Qi2XBHr4CerE4cWghfzySJf2KhAaYnACmemmP3F8QA6hPiy9Q81jZNRDL5r6gLbXKs",
  "key25": "3bXhWrCgkWLmsCuV5LpgY2MpCEm7eNEXRos31thSMnnreTXtBuirBMBTA46KBZ7fWSJeZppM8hnCYc9PqHGVnoti",
  "key26": "3uTHZhppgU6XFHKLpmDbK4HQ7EES7VSTVUdJqWH7Ez5evYM5vRApqzyJ6Ni9AaGv2M28WwRse9dyzeLH579SBbPk",
  "key27": "5DDuyzy46DkVrw75nWcA2Q5snrvdiZyVMjvdRfcfTGCe8mK7iCSk5CLVV5Fh5xf7foPh1r9EBAN4oLudFt3xZnfB",
  "key28": "2pk6cr6pk9xWh4FEZ4p8FaHTPvx5gNyPYnrwHp2ah4CmtW3YfhmVyJdC7weor1fGMecY5diSsa31T1tnJowaouv8",
  "key29": "5b8g8Ah49LDCHAnojvs1HMJ2ArQQBBYYzCLmUin66NpmSZ9w3qbUaUGo79YdUjUSxL8dbkQySDt5qU2o2MzcgRuy",
  "key30": "4oigW5Ti4kPpmEcoBup6qcWEf1nLj2gU6vT4UuiZXvmnchoM22PgnK8ZsqvUmoux6M5Cxz6YNHqKoxGJ5TUg1i7W",
  "key31": "2QYTw5Nsrx6UtXvAxvCzBYzYYqEJ6axQpMjLvkQyLku4zCceAAQCbJ5nLsxcYwCQVxGVV6NchdD7KxcxAeSBH9U7",
  "key32": "3qbxPuzET3krQSLTH6AFFXM7BYFPBXLZrNNeY7dfPNGuMU6MRbfsFwtDc1fsMH7ZVMSFy8bJxzQDVzxpfWgaei5k",
  "key33": "5FutZWDoyuEL88azrur6wVM7bYEk984Rg15c9jigRT7c5BbckVtzJFgWgqwUXZLDDdsC3tZC5zSNjLkzhez3Zwk2",
  "key34": "5nNcuqpFomuVRGp7wEeeM2t2xoBkZoo364E4Jt6GcyFWfLUaYCXJHxiFcM8UK8RnWKDGEijGYvqGWkjtkHD6AGzL",
  "key35": "3x26HbXs15vi2qVsx7qrrjvr68aQkuwUZD4VNHtN4hmffHCYvFKueFvHtDSZTogqraw2VrY99NiHwkpq19KFE149",
  "key36": "5dqVjgzQgQeRkiwcYDqLk3EVJcy1ToE1fduAKQ9hTTiXUrLAgjyFYPugQsHa28TXesfrtmxUxZNcnbQrcJmC3Er2"
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
