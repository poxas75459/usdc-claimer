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
    "5N9bbstWtH6YQYuT9D6NHF4cM1XnfUrQDM1sfG8xPe7wStyBB86b3RnKEiit2Cz7yw3HyESmFfDMN5raTuM7oAV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ZGZpfPT99KP2Bi9KcMSwxaXsNWmrDioFWHaWBBiH68mmFTMzTzex8HsJiUaUrwv6CBaFXxQ9KxWYj9zXRD26gB",
  "key1": "5fPeaZ1Gj3nzyXMiijoAfXjv3YESa3Gs1So4XwCnJb6NF8SLvAYiHx9ssRnYAKzK78TXe3Lj6CWFyoADUAdbxic7",
  "key2": "PEbKKVvTmtRHBXmbozR55ci7if5hBNKCC82iRoPX6A3dtQpziqJEXwBk9h8RXE4P7apbBvM6gWcKzaoLV4trKxy",
  "key3": "3eNtxcpN18g7Ptfmsu6bmed4nmsqpQtbxt4JcdJhkFguKmQuDmzyS1a2WChtgDNGkR5HH28cXWgxDipWbj5XS31B",
  "key4": "4k3k1isbnJvcWAAfEbnS5H1TvCMQDhEqCim3vtagTENq8xtu4deF8Nj6m1XdaqFE9Q61B9RdzqTGUfJgcu57bb1m",
  "key5": "5mLFy9sNpvj7HZy7vq7CuXWdRZaRWV7MB33FnVBr4j8tABdBZhWfKM61iyS5Eh8UesMiUJVSb9c4vuGWm33UaffA",
  "key6": "67RPdNhBZNgAtX1eoR2iZbf5rF4fFnFvocpM31Da6oZnWcgmeGfVkdwv3pwq43htLK52v8DERSsr3TXw76TfoGqR",
  "key7": "3MNbqUJH8LofaP1Bw4P14SXzWSVSkUvXwsjmnPvXXCB99ajyG4bweMzA14dU5JwvL1BrStaiM5K8XDC75mCNGLwx",
  "key8": "SDzEjBfBYMzv15bYYNjo4S6bAVoU8srzbcGX9Ho2YCRfBZK25XTMYWMo51KhrCHKbPNknXRJiRAvvrtvVJaEuih",
  "key9": "2ZMc7E3S5GLd9BteNHiLmcHc63eweRdCZp1xGhs7srkcftuBi28W3TEPvMvR6UzkAQ48xseVwaytahnbqSenRFPK",
  "key10": "5ruY67Z4uLfVL5YW5mhBxT7odueBm8gLqr4oJNxTkTba68eVHzog4Hgg1EgwSVrpMN4G3yadakjKqZzaP5PHTYUU",
  "key11": "JjeVCg1Xx7ykp2bj9pvMuQzZQMmQpiGwn488vnKt2gRK75A1Rjjx5dGUzNqJ8AnFNcNaEMocCC6F9z7xU2jbCoh",
  "key12": "2dURe8kwstgExTNY6BGZ3PuavqWvV7XC7JDj9b1CrVgLTD8Zh8br3MXqTpCzd6qQi8o2P4p1Ag1xFxismXAiKCnV",
  "key13": "aHjaYudsySsvaReE2VFfFyrZFb1ED4DdNfkyAtiS35o1cvrQ4c3jaegvq3s8fRhndH8xam4bgNsDVWoKQdtsNg2",
  "key14": "5gHAMyBeRTQrtRGQXZGCdLYCbWvHtZ4RphHCn65HzqGekryQaBfZw7j5eZzmhxj9Vp6qmW2aGFgP8bVJtok7Qcnn",
  "key15": "DZ2gw1apRhHDNNXZBtGDxD6qsBZvqJ8HXTH89cZDFQaWrULtcYL3kbWagywWYPixtvXNQNtrKfK2EFumyhL2xKc",
  "key16": "5vg8K7yAxdhKgvxEUMtRPv53tRF3HgsHkVpRMxBkWHSTZx8dL3u7RWcNGqLHoCmwpwmF3odphiVrVmwB9JrBh6cM",
  "key17": "3NctmfKFNw3u45ADT4BVWFVLNGadNzhbbKvRSkB8K6J5bj8e4LRrzb4AUkaFmKpycpqG2gpN4So8pCRduQzATAiv",
  "key18": "2GYK7nmggF64cspHgiwJ7SMSnz9oWxkY4b88zK8hpHzbTHyfUNPgKQzeJZAjNPZXkoWcprudurbrNSUFkVEWfzAe",
  "key19": "3TokhRAemuk9wj1GhvUm37Je7pMoQTJJFBaytkqmjWtNhfubC9kDST7N8G7o2Dt73g1EkbpxFfZFtoXskhqwexDk",
  "key20": "4dcnNB6P1eLLyqEJ11LgLojXSHzLqDLWmQZnwQnnjF7PyTi3R4Dd4U4TtYCCEWeuzGKGEEisYT3UtRfCsjM33AHt",
  "key21": "38ULFaK819cugUjRG1fCFwQqc5ZrBSPo3g1BuM2ATP1ZoWTontuJQzcGEZBRh64bYWQwMtKyKMXLeck1emfGvEWH",
  "key22": "yrLhBdYgG3gDoCFHC2fU8yYhuEv8EMMgcNiaUDds8uqUa6oiFg2qsCcrDnpWgirFXju53KpYZUGnbejBnNyoQdw",
  "key23": "3BJC8KJtt8wBHX9gku86YvqSwMoUPJEEyoVuC8PRWXWcE2c22tizJfnUwD7wvkqKMG1T3zU6GuM8K9QVSYWawtMu",
  "key24": "32CqApAunBcCLCLui5KQVL8pzYTcKcBC8okMN4dY5EwY5cDtXL3xo9yD3nFLYQkaCJhfhKwPv55kb9T6r18y2Uda",
  "key25": "5jkrMhb5zsNvm9wU8NadtYQMUHrrCviEYBeQgHomDmsY3bB8NgXkrPBKuk4czfAzNEahJBSNsxKKSwJkeZ2jpczK",
  "key26": "3uAvHnBhVs2zKy3iAnGJYhkfs9ppuAeYgyb9gz8YBk6s1yU3Ey2X8QHXGuxknTzBRpNZYQXtknZPziNpQZrogdjo",
  "key27": "2RYNKvpTT4pALD3UYFFY8LUNVJmsxdE7xQECfYyB7u1cuLkQoSeNsm8YARyW7wjaJFv3nwpSM47P6DECfLgJKC3n",
  "key28": "hz16eUAHAWiLx9itGDtk7jomfDFs5iGGtNFMrGpurNSzEu1CxztgEgoXvrmD8Hq4wW3uQaDwWCt9aXgSkn1g5o3"
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
