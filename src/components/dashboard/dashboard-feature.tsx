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
    "3QtWpNRmAiMy6eVwetS32bRgBPUmAFUTvKAQedp1BAkuSBw75yhhdWYMSKForCyjecVGVCeeUjbVq8Cbaua2YmA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnCquy4sQzug1WSB8CghPk3b3ro3eot6DbA2Nt9gEUcXoJsQmV2NU5pHViQXHcHF293MspJg1Avw97M5wc8yCML",
  "key1": "3nUCPz458ekbVLSYLiNA5y5aQ9SWfUAQu1Szdb86HWR24zTs6hDcpiUVbJXdE4PjdjKDSRZw3nC8YiY4URPLmv9z",
  "key2": "3m7AiibsvrRua2b3iqvHQznNuq59KeqBY6N5wB1s6cHFLLWqJC47u9Uu5YJv2m7sGp7AnGpeuWYb1JXs4defyv89",
  "key3": "qgrZZaVjwebtTDVQoyS59RZFUgMTid8Lagjae1Ayfe5xZw8ipsjjcqy3xk1M5bSwepkseBMSLwSogJaTZMsfsFT",
  "key4": "4N9Sst28xTrNUb4ZocC3X619AwCuRGgNkj8bRDU8h2FUKG35gCwh3oXzmvW3v9zKLP92zzq3ricVgunUVu97BYgs",
  "key5": "55gNSmuitndnDNMpkir7hxfh8g8kTgJnAzQjmUYUfT3c9jECS3Rp866gfL836ANfJKeozF52mhNgJX4RxyjtPAdL",
  "key6": "2NqrMR5ev7V171xuPMgJfNtn9vpDKjaaeGVSU8UbMii2NWCtvpr8N1R7GLVnynQ5hDR4TegNLzrhz2PMkqNeEQXA",
  "key7": "5LjW9ncDrV1sxmsrC3sXPC3UYra3RDqWH3FRd4RS6dwDJE7nTcTP6s9kysuyokHZDSzea9PoeiBZrptMNq7rsgY3",
  "key8": "vo7G3dkuXX6jDotncyweqDci2cLEBV7iG3snH2fpf9bKwkyYsNpGf7hAfwj1BAoY5HZ6MVaKLTPAFkbBdxsZaRi",
  "key9": "2QY4ha4FdSYeyMNAe94PjtY5UqBQx38RKqGXg4yvvijkMPZKhuiMBYkSwsQxsbjYCTvfnDXbU1gudWW89TtikQbr",
  "key10": "5MHesz5VpoCDTRHAVWKrx9LEMzPkensTAwWCWaExnqcSpQX6kwysZDgc45omFs8SavLGAreiSLRkZ5rrrR1eicG9",
  "key11": "4AZkdk5YgaE5oKgA2vNJEhPAdAzMzcZZrVfqCNCubtgEyGeTjA1AHrM3CsexD1toyGMaMiJHWmSZbL6fNjK1UC2W",
  "key12": "66DdZY9nKi1Hh3DW9WiBnTmp3KLZT6iXsUvMdBobtpW96tauDi6YxKAhhUyBcugQa5S3vyySY8ohTmV7Y6HbGNxQ",
  "key13": "4SNVkFVtRvbfX4RSzpnyqZW6MrE353qjAVTgqyQJdubGj5JGGrC8jPGmcDBCY1WSJC7JB92GjChVpCTZdiUNGQVS",
  "key14": "7yxWRPsKXDLFkgHQJotoXQwsFob3QWPrzFAuKi5ta9e4TKcyLPdVicoM2NW4dGJrs6Z6tQzmX3kjtZr1mY6x9K6",
  "key15": "2p8BtBipEUe9SP3dahQ4NZJKYQuMMzr3bnYkAKXrfYphdz4vRHEv1LXRfrJoGrfV7e2nm7sB6pXJRgu9LTb58GG7",
  "key16": "2x4tFHLEVY5Rcg9NKYGsqg3rFrg7fYwSFAWdkHBertSRyMbejYBw83fAXkQegtQb1r2WMMdGwA2FqPQkQeFav9v9",
  "key17": "5ZJxjBLuUjBB1ycf22MXGxsLWVbqLfc6vNJpcELdK53Y95Pjts9ucYVad8tQiFxT5Tac2cff4vZ8yz24gQQDurv3",
  "key18": "8CiUP2EECJyEqfSwJ9FFSXRfmohcfNrg4Srk23buMVB1AiMg85ZrMwB7vkB5DbZvZ89DXyf4fTpQs47wJqLKPam",
  "key19": "3vRTAERyCbMSG4LKrduptSvJLT9q9j2Zt7L9JkdQ4KcSzX3PrPGpukxWUjiXkCjSPwFE7QF7GXwUdN6pRzagJsdd",
  "key20": "3cHm9DTBD8XnwoZYbS6uBBW9AXmCkjoAxDjf1FHTMvsbFtY5nsfhm7XUrfJ6U9xPkUKPqWjs7TSYAEve7uh3GohF",
  "key21": "9N24HAeSEL1twrbBVDSutU6HEQLBjePZUa4mvGvVEY5KKZhWdUcjsJP7kY4HmPtpfYfiFo8ZtntXV8kgb3hJRAG",
  "key22": "9AwZESfxcdqXnkNSw6RUQgCUNbjSy5WSED51uEkfrR3GFam5cc8hLL95NLma5hTeGdNLJVfXTGkxnfYUpdWFPCi",
  "key23": "5zXMsRiGsFVWz4nhJZEF7rk1mWAt4LRR1GfQESiTFYcQtH3Voyu7NYv58jqBzwXTVGTSrVseJwS6r4WqEuCnndMo",
  "key24": "2QN3p2KWqAZto4Zf4kacaFgejJMND9B1zrCnF8BZJ8qd2tntAwpVB55ncV8S8fFxqXcQT2NCrNAyCboMC9ARgyAQ",
  "key25": "3oX23y5mi3a9JCtm6R9ZVAnR31dFxztrxBjYm1oLgQHNc2ND5TZwDmfYJ4RdCpnXM3E8YH2j3kvDTbs8es2ivQPM",
  "key26": "5YTmVqwseYhCHJdLYzUtStFGgUwM2cvyvw7HEaTwosMfaiocSzTqHRUedqV8a56UfbnHjqWaa2LQzMdLCx8JhhVe",
  "key27": "45GRANXbJ3b95FZeGYD2jE1no72cqW6EAosf3jV9HptiL5szv4nM2Bxne9M5rZSwRcnHfxnD4VsRq9xHo1NY9y98",
  "key28": "3W3cfpuVn48eX5ZkF85Kbjr7xPURNgoqPCoNKb8awUjEGYR6Dk3ZDNkEpn9zXogf6pgFVk3Q21mY61xB98VJxgfB",
  "key29": "5ETy2XuJjVtWXF75JeaFXWF1a7sdW34mzoqaeBmAVfcr3GvNbr21QiUwqobTSyBevLQdY9tQUCoCBP2ytUk3V7kc",
  "key30": "4WWG7yVzA9ok788ycCcG1pem8mzJaE6XiCmwzKngqknsVS3u2gtq7ya9pDEkHFW4b9iaz9r6y7S7NZB1wTF3Pti4"
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
