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
    "3Q6dYWgEDidyJ4PGG7CiTGmTaPwe4DSzUYSjTcSHE9oxP2aUpdPxUTbvpRt1YLSjDKhcmxegzuJFQXzR5tpRXYGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E5sNPVbH7CGPMfzmBrZ26DmgqNdeueDZNsj9WCzZaLvX7DjeL9s33eUkuYuKQHfiPeAdA9zig1rzRdhmfjLp1Z5",
  "key1": "4TFCW3Yujz99zKGew3fQUf2FAPcUHfYo3d9kyHeN5ber13Us1idi1KNNgaVZKj1cG6G6Z3AMb48UwAzvYFxQcLN2",
  "key2": "52jghXPkz9wCexez3VZNjZgdz3LYgyEdjQPhrm1Z9QJNWmpqPXQuiYFyCTpgUCBwomLeNPSy3VtiCXmHCkkN375J",
  "key3": "6CSdjsXp3StS5AgUA8zwCMsmJhZtz8bV7PukPAfDvjqKvPJQewTHm9oj9Bw1qk8KmqPCPiLW5afbekZgDdS8gmx",
  "key4": "5KYrgckxG9P69EUYarBRYD5eB3dcWVjvaxZkZhDZfoPLgPBCi2Qyyss6B3qac2kMX9sufeu5m3zqtXFWUNAH6UzQ",
  "key5": "5wgSWwFLJ5M7pntVqqHADJY4XHcAV9SdotcwKtEJizv7RHmunq2xq2vW2nBbYMr73e1dt2Uurqc9XGFk46tZDP2S",
  "key6": "LCMs36i4oJNC1jr5RC6JGMcbbLQ2wvvyTLyVTFssVLRYFr6A7VTUJjSvC1e7xTyW7xQbvzmG1ZbGuhSzjH5rWbA",
  "key7": "3QUs5i5kCmxkNN6aTA9poEyNoKt27bt9LbgBpuEvqVBreeqgMhg3jRSeS5KDv93jDmomG1n1cY468JoaBJUcYRTQ",
  "key8": "5bWfBXmnnPA4m3VqXNnZQcAbou585Vfqqa5M6ytgWFrF77xwMuQXjGarUc1hx7hK613NnyhXNjdEyf8jYWptaFkm",
  "key9": "3nDLYhMJqF7N2Gstcisiza3Tovk7SVzCNnMQbgd3kbvNwqfL4FCea9rT7zm4ZfztZgeMCkcKxc46HpUf1G2uPVf",
  "key10": "623RuEZ2ViB1dzQ7hMEWAM1aKGffoo9KU1mBvrSapy5cixVQpzrvWMCjot84c58oYZpWiNbJkPns5vRQ7Eb9FjsX",
  "key11": "SrShjDeufVzMnYn3tP6rhqQZfjQZbViNYGrmETZvCzb8aQbJ3FR7vjZkgpxMeF1Gw7Hfc3ua7sFcEeSSwp8sJw9",
  "key12": "2f4CTtb6aCV43zwhP5sVRJDFjmtsStCRL4mxNgMuwqGRpfWPqJmmh3yoDeeU9dZaXeupoSrPYv6Jcn9JPHeWwVMf",
  "key13": "3LMCu6akVHSez8jmTL77tLtTYTw9rf4VTLFHPy2Q95R51HwWmzhATD8WSHWyZ9wmr2mqpTt2M9u8euMaeEJUk1dH",
  "key14": "5BQv3wze1iSE6216MpWse2rsL4mu16ExTgndyLfZ7f8mQQk1MBRWDVZrvbML6bxqgg1oec5sXsxPJ11cXfz7XTZf",
  "key15": "5u9taJGjAeYEkpqTcttoMGk16FKFcWXKz9hSBj5cAeMLJh6MdvG175VxLpHQBETFsXD7ozkWtqrctrQ2s1x8CUof",
  "key16": "3yLZgfv9CfyL4rLRD6bF3k8RaoAfLufroB3Wdn7HE3Ldkm6s8ANJ1ApagXkc7vs9rsLwkU7st7dpaL7691K3qtmK",
  "key17": "59YLZHsvF2UYL9z7tta1CZLSBLmHGPCUTnwsy4TVTCH62zG1moyrSZtvfrnUsVKSJWq5JTJMtbZ72T3pfwDwuBPH",
  "key18": "fMmkhms7U8zxgCLVGP179moaJLj2ygs2xQqS2b2PsxuLesPgMvVF1oaGuf4qdkn7nnXGQb1mappzKbMnjUeKEkW",
  "key19": "2jTpWc9cjC8MpV9E5oerTvxoaJKZmBCtnpJ9BBDvpVVqDaWw2JebcTdFcvABH7GLFt9pk6ZgoKWib4xVgRToPfzE",
  "key20": "56GpKAaNuhGJcGkCpfR2nRkPCB6na4QDkRTBsh5RYSGsif9nAYAsD2euKbnKdXCAKzyFv3Dj37btewDSK8JETWsD",
  "key21": "4oAvRXeV2xymGsmrPTJJnpqoSnpCTor3sZdQrJmeVr3z7qZgt6RkkhNwz5osgbA7bL7GFUzqBM62dTBhptLcj4yq",
  "key22": "2jesKTWquLyhL7qbuv8h4FSDoSy57B94qopC5PLRJSkEbHWgfhrhiwK9a9cJzyxzzngVBVPTfBRD1s3zbmsTJg7f",
  "key23": "57Y7j83rtqy4bz2rCjfGrBxiwe5fntTQRdaBgGo6vNz8UzE3q8qZu4TeJdMhYETxS4iZxpjaiHqKb8ZZWQgLcBP1",
  "key24": "2RH1DPH5719mSuZUescdoi3nN8A81j5zTKefkK7WPCgDsLBJ8RxQmGBdbwwz3Xp6qKBhYR1LmUfhbfhBxedjtFJY",
  "key25": "3nxxZH1iVX9GpQoaNqbNsWGqM9rckKdyz7oa7yGVTjZd8xrXnviQN6hKfxDwZfk5AXGAbr4wLR9XnMFqGAt8HFh8",
  "key26": "65LfzzmZwCGzQ9MX149CcczUDnEo3oJvYKPNcVMo4Sy1pzNUooQmhG9u8rPrTUzvy3hJF6WzCr3JLavJxw1Aca1U",
  "key27": "3YnJem4ejcSTSsBBHVNvhRd5DyxLkZhucHmkPQ6SherdDt7vrwtP23ipdaRMe7JSjouNzAosfG9FRBfu4U14RYvq",
  "key28": "2JPxG5w4exbBNQXdmZUTuaeZ3MM2iyw2K6b62a6uQTmNwj1cwtH8dkTL3D6kTREPCYThVWSpEc9EiG8bAwfgPxGD",
  "key29": "2wrsvcTcShUMPM6MoFSWSveLtMhL3pEYi6BXW8SaXDQr1qDjM4PaXVQohhspLdRZ4d9YHBbm2UgAwWmJreyrZQzD",
  "key30": "4cqnVU8VwAgbjuoGxXUnMn8xaEpaUBL8qSYQtXLQXByfh9VT6WTMQfjiJ7pQtJkKpFURbz5Wqet1nQXmtKS2zHzC",
  "key31": "3fZBMowQ2i2VLyefEytDVQNp9rq8XjFy3Gymt75WcyN9YVtawehV6XDREMaZ5BvKuGWQoZo6poWeciXanpspeA5Q",
  "key32": "5WPvtpzn272SVuMYovHMZrhKnY1Wae55kgqCrzCtkDvMCY2E7gji1mReT8NHVEc4J5YiRUHg4dkr8Vt68MM1LnyN",
  "key33": "5ww5sjK7CaYvqDigGeKZEGApkFdMMu1vYQuurYj5W1hPLLmYBma8PRv1KGL3nQeJPLwmoubrStJaUwd7aM2atVJz",
  "key34": "3E7fx9Fy19nwuZpqmQ92f8B1NJLZwyTD6EQRRMsmp1EcMJ5tBnZbc5EkNkr3egYieUVwqg4XBwVd1fyyUVaqm2tY",
  "key35": "3bnGFA92Y9pkZwioZszxDe5LMLRdc54WeS9miUscuszukpnWsu49s1bonTC9mpNjM3esQ5GZBcANpXH5szEVAWGE",
  "key36": "29pdJD2JyFtQYRLLcLJeSKRrNUuQTvEBxf25fzAn4CuVUVX6PvrLXgNRxreMRNqLT34CK94T7MbgVZNuJ9FjEGUP"
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
