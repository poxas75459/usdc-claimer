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
    "2jozawKqjXo87c6ndEFcqDw4HxWvbEqH9657gmXuDDYGwjfc9uhmcpgBZxtKay8Q6ktshPSK6g929nWFVWKwDZom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMYaUEpDQxjqzZENXmqicA46n5hF3BTmfmgJ1X2r6Zt739gqkoFQ26kiLZKshG6CzPy8vrReCJhnjBeBDFTKcf9",
  "key1": "4TPoAAkMirsq4grbkjZgUPhLp3VGPqsFjasnWYhcej9NvHNAQdfEKVT8Wi6YaaBe4vBprzZ4vBaN1vYPnEy8HFcM",
  "key2": "a33rQvr1wqxCX2JbzmdSvRVZFk3pkpTkpNeEqCcpvrNzSLfRvXoUE3jfbMK6UPV6d22tmNCb8A41kFvspMTn6jz",
  "key3": "3wi1EgKTiov3eAvkCp4ARf2mNzHp7FgCxaAXH1z7EgtgLHBcXpVp6vu1weEiWtCDCgE3EocsfoRxf1ysKP5AFcgN",
  "key4": "Ks5Y6mbJydNk2XmFXaKSi57vKSo53HhDCF1ob1wH8Y969QUfrDcVb7xsYAtZEioBDtz9WARnSAbCMNQoGhmyaMR",
  "key5": "36gDg8HtqWyxubmEmdX3ZMEMsjB1LtPqHX7qUVYzZNfRErikNmNSjE75irVqZsMeqbJAp4T5W2f8z47gYt9aTEsR",
  "key6": "4s3jNw2wVFKs86vZxAjMzGeS8reZLb7Bj5mChGp86PAv6JG6dxeCaczyFxMdqJ3SCtNX6C7qpWTfF8uTKxLEjhTK",
  "key7": "5rtw2hHt8hGBbx6mtkynNDZigh47atsAS8uHa1H4aMmhjN4wqRRzR6gjFLrWWKSXrdu71qHYVrCQ4zrQuU5yaGrP",
  "key8": "2TWcJWCeXpi8ffiPHPcMkRYTMVFNWCzdHPVo9sNjiYiK1YcX2HFsfwQouapby9HuphWfmRqJaozZcCmn4fn2edCo",
  "key9": "4vuvf4fjC4F1HgiHrfscG2EvFAZNxHuB5sCxirZqpBEJEQgRYZHUZ1FG1bVdZo4wN4XnBnf6nSU5xXV4ZRj6hyiW",
  "key10": "3dzT4aKh46ffEm9mVQwCQNKwoTtnYbhJFEiDBE4k3Tat8XSd8zpQbx1k6HkgureKVKCxub6HAT6YVYxrSDuSpKpf",
  "key11": "3nAYRCnrdka11rBzspbNcw5kKjnNGcq8VGfzfZ9sFGwHpgPbVtw1Kitj5iJHna3ZSC3SSw6hq6cTCKwaWbPsxeTP",
  "key12": "3eP2w1vY7X9U8YRbXgX4zV3F4eMg6byAokCFabfRmHGPrTdSFYkjsC6gqaFsL2N2q2CF9ePNXAuv8AgzNMms71yA",
  "key13": "2y2t39et6zYnorWBxcBXuBJEek6jBWWdmgp8M6NZnErXHtAuqLbY5Yef87j63MixRaBN7GQVxkaXy2Vg9Jg11k3N",
  "key14": "23x8qArNnj5dxRcjtrpTRsRbtP8GnzjVaMtsbpvGqeQ4gNmV4i3PDDiB3wJf9AQb4s7uH3AKPJ3rLwAt9Kt8wR1z",
  "key15": "oi2Km58qAYVvVnE2HtNgtQFHB4YKVKJBv8VF2oZHkdTfowFhxXTcvNRwLR3WspakXNKPDh5x3V4pCj5YBsKsUE7",
  "key16": "22PjxLsBes5cjEePJF94N7vDEwx5y27jksfNHNMPj3jyFufD2hVwTioYVWdmjfywgeUBrfhfJGK1QMaQCFhV2jA9",
  "key17": "3xUwU5U5qHhsjNQZfBnD4CpDqbg532P8W2nvtbGSxsX8sGUVdJoFgATYPKvAWytRzS21zTjxVXrsQZo6ot9tP8s1",
  "key18": "nsZzRUfJbXG1d1rWCzW4m7NfY8U1xwewUK47YtT3HMqSZW7qeEiSpQoCuirPR6oWtMtX79PrGCTAWQyL1MVS3YK",
  "key19": "4G8hSNHu6u3EGQBL8u3oeM7LEpLzcxXaFu43dV1M1Lmz9MeZNauojsP4uPTQ6jgPaFDA683UC8kycF4hSc3pkex4",
  "key20": "5fEwPKVUpt82UvisUbMVJuXCaPWN67iJskJaXHT9GeFBd2ZbmFLELTBUKgKK7Aj9N222nvdZbnevSh55oTibHRFt",
  "key21": "65znU5joVhTNDZkvA8mpNqASVmxr4wq9RBEqjEL4sGGDDnRm2YBJcQNAbbcFdymZaocJ9EoR16EVE8KrFXfsKnGh",
  "key22": "5GtrbWhxyqsUT1j591sjCjVnaPxz59FGaWn2f44Li4p1uMEjhwk6u5uAEPJvkqXnbSFEe4tUDtpapKVQVou21U7v",
  "key23": "3venVbp3oGXLQ4oo5jyDRgo2LHpcsKDPfMaL2TMN6LGBh1AZMHFJGJKv5VuNT8kArMLBK9Pc3dnEe5haoMgGo9R8",
  "key24": "5thSYzhwPui8AxmxdP8EjeXMh2RrpY7qxYYdPTDgj2NHEWhQzG5TGwRxmLr3LahwQM5U9XVYrfNij5tLBQYEbPei"
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
