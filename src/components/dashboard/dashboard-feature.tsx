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
    "35yudwRHryhfnLfzhaviwRTkTWcNmxbUUyv2qWgXLQ63GDNH4Gmbp3seUZUZ9XUnDohEKReZyK8fqRza8jDbhwuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NTstgWirQjgZwksD3MkUcd637Q77JJiAwuKznvk4m9cZw1kfhZsb3bTihhbvV9S6x2yN35uNhLKT3vWS5Qtn25w",
  "key1": "3oimyeVzQtt3pduyTYuweNRusCMw5xmSzxpLjKtkKrNdYVtU5qSefWTPjhbZ8s5SrkmAPFGduv7Hdmqc7BaHKmAa",
  "key2": "2UdT6W7wp4aeMnx3woBbnBnAg1PNaCMDHDk24s5hkZqrzRfPh4VudV3twCcPxR4dqPNWf9sfwsg7idMQ9Dt6meP7",
  "key3": "FqJTPN8kfRz9buuKngpHxejXB3LtAK2frDuNEYMnRVsoP7PQumQdFWC8QYUXvZ1dME8QWChrqfquMgNrpK5knC9",
  "key4": "56AP6ioPmjKTAnQmFia6rYGCmmcWVmsrpvS273uEM3HZYuQ2cCy6NLytcH9Y7RnrnsewhreKp4QcuXytvP4miQSQ",
  "key5": "2Nhok8bSBZ7XPBmsKjcAmmgF1dTqF8FhSTft566pYcWnDE7rXWXFRc6SzA6FPAYtERZDu4xzcyp4zZE77nY1rR9A",
  "key6": "56M92XGsEZeVw1XerJjvFuSHRV6pmG1NA6VtTCEPmwArTEsw1BgzG6Xo2proroaWbYo6vU5T7xPW66LpbDPqjEPu",
  "key7": "3YFmBATuSaAdUkSGzooe2575VaqVo4AXsnEk2RwFQxHYJCxvT9kS3tvoyBcGjGwygUFpFPseGSu1HXgQyp41Pwif",
  "key8": "3PweuFpZCNLmk3QzHYfsww5YpQfkn56LW3PKEFgPzxsFCCYv3bGZzAH1QXDSqVBj8E7iTpBx2BTQw1VeD812zQVq",
  "key9": "4j9jxN7yqgiNDBrKBnwwxpR79XGXauVsYN94CxbjaHVXFx7ZErCf8CPBEp5GKFKh4vTsFsKnLJec1ZPPV1L1VD1s",
  "key10": "TPbjdYC5GXUAG56bLE3s1h777xLaw7W8h7a5KgzP78dgjhueRAV9vmTyTMTci4xZ2hGwH63eGRhvZDQ1Vi3GAhz",
  "key11": "3bgYfbqr89UMrBwSG4w265B5SoH39BfGjCb2vvMF2XzdsgBCoXyXYvC4Wqofz2U53HbmANp8TwsvqYS5M3RiVwBg",
  "key12": "3fomBWAsXLLFCRHRp6UfVFmuywhJCjaBiqEEyXYeDnq2nd192vo9ZrQJ4a4MuztKvkU7mG9tYY7sexk5rrxkKd4t",
  "key13": "4gnHuG2Vg6LJwSDj6Mtqq2H6AfrPfxPfUydxR87coB6i6r8fUcSywfVx4wJArqqkJRJvQQnF4reJDQZ1TbvvYgcR",
  "key14": "51RP7MbCeDNxjNnTXbbjM6TSpC5YmxUvwK9GsnzwUSTyUcxstVaLNHVqSktkk6FJK8NPECZ5eY5ff6aevNbUhEp1",
  "key15": "4jju1QwPBDJFQmNWGY57iZqSffLMdd9mYhUKGrHTkUjdp9va8nP1e8yYuPZUs1yU5hpRJyRxsseHzn1MXTFEPS8j",
  "key16": "CZkaVAh5xXkawfhUVk39U2QuT1G5vnHt5TfRJ5J6Xe2vGYqTFjdM8WgmRdz7F2XyvxXgDYX2U6c8HLauHy58Rnu",
  "key17": "2kM22K5WvUZdvpFYuAr5jzuTv5fxuGqQ4R9YCy1zusQn4seanZpUL3wS2Jjyhs4JwnyGRqE9EAsYzQ9Az6tX9EKm",
  "key18": "4bAGYP3p1GXgCqyuA24YPqASL6okNtKjLFJVUodeNw6HCVNVN36Hp4HHoHjpuquG63ysUYws2oSyD28gF19Ne2sv",
  "key19": "25FQbNXfPyBcPnRWksSV2LCSGmz8LErz6gmfLWx9vu2e9PhAzeFBQoGha8jABNNHNFwGkTFdR47ZGQ9xmaP2rXyx",
  "key20": "5fjVDMRn1mq2RPPi81EEDkekhtRoFQgtpzQj9HkpGyMUBeakZfqDqEQU7Kh7sqGHorvkHCvBpBL9hUhfuCbmE8Dz",
  "key21": "4LN5wej7vNwC2WUxhezwRSb96jCtzCB3QqJ8wjR7YvUDcYBaPsU7gxuAQUe5UEXpvcYXHjz7XV3r9qpe4vFkoLs7",
  "key22": "pynBauuNDevFZ1HCxkFMYbfpUykDRBG2RhDLibyXSjA156dwDGFWQzyshBrVXQWMfFHsVfuBxtstmwQ2ZHJgwCJ",
  "key23": "45WPjFRNiSfEGpVQhgdoP6CzFCjaZKHyf7Pk34RMf8d6111emEpaxK66EnT3YhTTV4qjVcacHqbVCDKCWACmXgfV",
  "key24": "3713Q668QnJ5VffvYduuFwQcz7SGHnTCNhRZJHYTDMh6cQH3ayhMXYKN3jxgUdnmDevvR75uuuNWqeCnebz8wfNo",
  "key25": "5Sd82mRtKmZkppANy15RBt9guZJjnRL1f4K5AXhTgkV5A2m6Fb13aSqXk6bQ6EQxG7LdLmfuGrHfnwPxaymAzsmp",
  "key26": "LnEwY8A6CkJ9XfwDGe92smYZGLGAbnHQH4pS8PpQTQJvTniw2eXfi6mGVCQ26RGZQbgTFm759Ep9NPKCDGZem5C",
  "key27": "dH2a6ot5it72N9ZQ9GukR9sgJpUczPBLaGKcPQchcZPeURJVYTzd9Y9hdoTAhmdrZsZ3DEQS6fbMLQhSTtvWQGU",
  "key28": "4v2qx6Te5VpjViPRUpJUhezGLu1kqhZgske9XDnib79RMwfZLvqQ2RF1LtB72Ew7x27bmYiyZP7qxABi5Xtidc4V",
  "key29": "49ndNL3AyjeUxLvc2Wnkp32WrKLTy9RcqtzmovfGznnVwUJmGzAM4ELX3umNFhsh8oxAN4UbBXLFy8nn2eN82pyi",
  "key30": "5LnXzJEjqy8AmnCofTF6yQZtM7rr7tUqF8ty51iNH2i3qjofNnr7DQr8JB6VEHk9KS7W2axGicCUdbtxTyoge6Hu",
  "key31": "2E1JAXdtHvwzNdZofc9hjtptsdMHFFDt4PBG5AfLeCaCqu9bBYk6jErw8a2HY3fL9rJMmcr5rt4zbUNTyc1StoGU",
  "key32": "3z7NqEozfpGgd9B9eBCz1dgRLsV5ipt6jfQFnrufn1ah8SrnB9maLfoSea9nMZ3CuASPqMUAEsrg9H9e3ND2Bngg",
  "key33": "3jbM62GG8b1CVzPYvKaHT5r63gKBt9c9wEsVh8cNWJiGDbSL9TS7eDLGH2QWKUkZ6FciVwijzZpi6ndZyWQcgSnw",
  "key34": "2ZwK4qPxAFSNmjEnKALV3gM5p6DXWVUBTXwA7FZPGcNJaCSNA7b4gUddK8MNG3bP2cKeWF6e5dvsAqUPJym65XKK",
  "key35": "3owNJ3vondKJ8DKhzSxcSqiMMk7wfApRDZe5ZYK7XKN1gPMV4yc33zYQMq5fh22F12uSUGWxchBBhDWBKwysmt12",
  "key36": "3SSoWLCdQaKdYv6EqpdKbDFavA2pmrRUYKFckBKWsUaW35gvTESiFt3C1dGPpk1cV7Quo1oHA2SpHjPGJ6X3MPNb",
  "key37": "4Mqg6gctW5Q7sL3mGeUSRQFDYj29gtY41JGumBJDZWZJRhpsyuTjRgcxqRk5NAQVzoUumYiwHLHfEunwSv5HiF6G"
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
