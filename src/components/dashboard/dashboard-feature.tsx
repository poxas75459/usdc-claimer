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
    "3JjZLoLKgcF3ebHgXRNuKvzBKzQxYXA89a6TLR6xZ6hkAMYoWaA2AABjrTPB2afjjAfifFxExuKZdT8TEQtfPeSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pJwtu1QSL9ueaDCV31rkdS4YaQbXSkTjs15Lt9c2HCnypXXTzZuEoSyEb7JaiPtxwqxrb1nftZLJ49zjEjMyEGE",
  "key1": "Gr6KeDGN5aS9FD4RhbjnypRqLqZaPugsu5Botjnfrx3LHWnxdEihssenqVfGxpkx9GYsTeMn3DTaM46YjHvjJZR",
  "key2": "4kRGEjS838QQRSUtsEbqp8qWQktbSVYufFw5RbfiKBzdZBjutD698Rb6f7oqoAqiw3J4BuUAn4hXxJ9PfVQbRTgR",
  "key3": "3PbXA62hA8JnGvmWQdeaK3a8D8LwTW1mxPCuVPEGcsm2w59MwVE6mb1EnnrN8zAUotGQRbcte5wwmHDofbzpK4R2",
  "key4": "gXdET64o8XDSF7zVn59peoo6RQYxZaVbcB2appogBbDRX9H7DKZyTzmtGpYbq3hBFVWGhwHWipSf424rkMEiTyQ",
  "key5": "3XhCipNkuhBu6LhTRqHzxqQCpunjT973KfohYNPwQpvExzcQQd1YWd45Wt39tYYn4q3USBuwdFFSAF8nPuvddKuc",
  "key6": "5UULFgsc8ygFrotD6aAHSCrr8B46XtaSPzcyG1tNc1UtR9MRxgozwo4BZ7DsTis1tkpVFPmL4yYHdbwcpwzatZ1U",
  "key7": "4uLSU9pYRF6EvdFYTEv9vY792imrxCSFkr8DFWEJDDt7KjpnFaFsAim8xP12P34YfQAPdugYrxWounVB31SBFrVj",
  "key8": "5xpTrGrsesbevXcKuzWZVN6e3mK4DYe9YPToDYZTy3oQUrGkwNZawRi3d1U3Jm8sFAWVK3D4YRL7huVCnW4hykW2",
  "key9": "294RZrqEk9os5GwcD4SCZc3xuYBH6ReN1PeGfJtKP4xQLkjk6LSLbUjQWSWTXHQd6WZoJSLCEiFE9FoMw4wmj9QJ",
  "key10": "goCFK2S5GiKsM7y18WKp2TtkzQJmJC6JShYZXnJznRHUCYm4toUyWN1Gd14R9sPV8vohHjF3eagP7NJ6aUT9Y5o",
  "key11": "2qDGRKpng2M8pNbgu3ZhhjP6mourmo47xz6aTPSHv4zQTkvxqVNCzB7VYUCZbkCB9PxygizkVToe4Wbnd6koRea9",
  "key12": "32ed7j3FUkL89zJW1wWVuxyDYKWveVNTQh29KGUKPr3ZEcyCXSHEhh8CgeUcZ7W2vE3WsQFWXLgwUyw2zAKaPwfT",
  "key13": "4ZE3z8WHCPSVmp259S5cPWbgGTsFRitAuds1dDbFuGWyAS4eX6cuHp49DoHvruoPJscbkokYCH2fRx2K1ypWw8ju",
  "key14": "xLB8sS1sRd3KgEg6hc4NSxyGMSChYD5NLMo7hYWSCvKTufiz7ZexTabkRR7dKzScioYN5QqWjPEFuZ2cqYKysqj",
  "key15": "3Wsewzt6bb1fpTRiTmtdg2Hg2EBKq8CEdjGnyx92U1wNxqjz45bnKbXstu4peJw4gJn2jcb2tRnQYhVcw8DXfqsj",
  "key16": "5BYRjp5nurvq9em3FU33nEUvMBe47a2Z3hK4WHNRXpzum9EyRRJEwVemnGv2v2g8gQu5vpK5tDeWKMa5KLR2oHZP",
  "key17": "4TsGbkvAe1CWPRvbeFv2JaNG9wTANWqbu2cAgf21xnoLqmZAdeuPsFYi9gBZVaxVvCrRegv5NpSFWngiDWPyDD1D",
  "key18": "5LczGrmbkPXmbv9LGrVg4ZWGDy1NoF9d2E94QijRZFoY3L78m75fGtaqaxnS44VoSQRh2HuHaGHUcnkBjq2FdZQq",
  "key19": "eaXm38ppFGgCxQeBozFYRRFR5LQnJcJa95mWwNAHzsSbNXX5GsDLub5nBxnV6z15uhdh4o11D8EE51fySPtg5kk",
  "key20": "59PQ6XsG2zitFig8FyGPg3JWT56BwLBZ9CkqRVbxcvzhks3ipjCDpaRvi8yQGXreUS5UdzjJbEys8HPQ53FzLwFk",
  "key21": "k9QcPeVKBiGbqmWYT7t6WBN754WhtDMxxZiz39q8T33qoYu8KmGDxecbDJfoQ1TnXMMRPon3mPWP5mwHBEgdapC",
  "key22": "LNY2m7d7XziUynaW5tXFMZmr5W9BwLp89q8FhMkhdRWGdw8ZoWKTKYY4BP97Edkmf2TeqxeiUnBWETiFnruyxhv",
  "key23": "2fazKrqae3cmBafZiTv6URTihhoTsvBgMGh21nzgQ2m1VTN33xXPzsRomR5zyBQjzvpinTvBbAuJVh7ULZtTq49W",
  "key24": "62St6W833khLRjAiCz624Ekxhmif9cW1vCzKKg2zjjk3BYNeDKpAXaAp8nM5p37GwTMQNVUHvhy9SShMUVnjhdaW",
  "key25": "5ThZBEXji7nWgCNp67yXpKFhDoz8hpHQGQgnc5h4Ud2WDR7SGLLrxpFfyhLLgWHWBY3zXGZDiyzPxBLjg9AW3z8v",
  "key26": "5Wqtro2xGaTwsbZ7xtwndqdCPrzBsX1d6Dqs9QxrQZmwQiQwK4PYQKznzBT4pnRTLyWiAPpvPW1181e2ym9NNtmU",
  "key27": "4b79PW8dvvg1KfMdxNjMGsWjwLzGNLwL9FHkcuGTCxPf4FFtEXeyztsDi9L4GfHR41z5ixe7u8gpNnH6VkiiSBAC",
  "key28": "23d1JRvzQVp8rubVVLcLUUagz9zEHoA78ZuTL7rrgxYbpgX1Gc6Ct2eYPu5W2deTTrWfnBF4Db2D7ycjQLLc5cSZ",
  "key29": "4QCBG3qSC9FSscCDgF7y7xFeMfQKHaZrFJJffNUcm3S7cj1a4c8hwStHhN5r4RoZT38dddkoDF2Vviia24QAYZve",
  "key30": "5j3gR7ANpf3dsuafsRGq3sZ6YVLSiTDveT1cmjk5YecPkW2aWTwNmruDXT5ULcvd4HMgPi2ykV1WTY4NNxnbcrg8",
  "key31": "5Y3KTrrQbBJVHpMK72GGtDaabGVzs1qm92g87rkMnUoJNTjfULuPANARmYBgJddR7kkSSxCQjeEa3bTBRjWxKFxW",
  "key32": "2xAECPZGjYJCfeyL1SCbLJA5wRCQyEfhjB5qLq57fU8MgYLuZYosRTRMA6hqsM3KXvFZdtPWbKJs2dr21aho8YaE",
  "key33": "3cMyivKb6yuD7TpgXZbQ9NegT8HNuF4RCmDMnh3rw6CojjgoEgwPNN3X9RMzicsJBn2n8ta2crMvmhEHMHvUXw7X",
  "key34": "3ua43CeYJEkAiuELVeRxoaZ4w6wmZWNcommECHk9gor6L4Xo4fmccqp1TsTHcqjDefa9gyHdDKjbDU8ojjHUioE3",
  "key35": "38QfAdosv1HpuHWHkKbd1AKYmLZxWSe8oeBhFRyxJcA6hErsNZct8RcmBkBgt5EqXabzaDcAeTotEvYpywtLczg2",
  "key36": "2Wm2kzp9PZzkXBbX7UHZUE9syP7sJffhV1sA7MgT2qMR7fiRGizBKty1L8qp5vdW76pNXnyzQTGA618tyXH68fos",
  "key37": "5feCc7t2AszZpp62UENfsjh5mEjtQhejCzCGAGQhHRsRHAgbQ1AD2C23cDhGCYmkAZhxgGmPkbLujcPX7zFfWNh2",
  "key38": "2x1tD5kq5M42kQzjQBjoMV8tFGSxRzqnHsCwe8CDLadwpkEdrTubnjbKVqL7RquY57NXfsq4BbJxvEdneA14RCdu",
  "key39": "2cSsPJHp5Z4zszkxRFZty51FKsFfxGT9rDYmi5Nb9nXWr2zLPiPTigXSgg9zHT73c6NNtTadaQoH64GxMWCFccS4",
  "key40": "5FqYx83WAiTAoPWB9yMJaHQoWvSAx6M2pxKqqfF6hJkywRq3wwzCNuZVBm8e1go2onrDTop8RVbYMSGYj6spPnB9",
  "key41": "5qcSxKjRKkNcNacR2bt1iuHM6tyjskWA3AuW8SXAbWAQhox5oFF24X62w96GLFjrS6ubn77NLDwqiGQCgn9Xrh2Q"
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
