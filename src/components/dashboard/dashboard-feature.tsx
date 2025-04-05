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
    "4fFrijZ8aKGZqumCaq5XGESpjvPrH3wRcwmRnFTKmHzHe82C6aLveV7qVmXnZQt4fvnRQGuVfs8rJo8Xvp4DTxZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5br6txDJn4XJFSXGJSmtdaUH7jZBRS3P6AzqA1xZGh22jiAkSeYE44tCNAf1LpBsos1wibDZwEbTaaBdHhBFyFFm",
  "key1": "3hXYcFvdwiR91BRQEaxv995d2ce7XXte7XXoHjxnfSC1HHStmDgGgxJVjATmFuyAs7zy4m9pnq3WrZN4xqPvYubP",
  "key2": "3V7iDw9CQNgJWaZfji3Nw4dVZmNTgRAVQ4REmjqHdAWL6giUQUuNohgDED2Luy5f7G8buzY9WPcp4a57g9F3BfGj",
  "key3": "31Kj8nHHyaE1vYkuQBq44Gnh9MqW53f9b6iu1VeQF8a1WYCgfoBUVZTPsaX786ELvxxrjhp1sjAQnDpU4gSCNM2B",
  "key4": "5hshjSAH11NYLEReURPnQLawRWJRLWssiw1X6KrPhbmvnY4Bh21yhVfW8qyRUk41QhfA67MigM9qvmoJTJnLJgN9",
  "key5": "2aMfizLQFNB4ZF5LMrVZw7JMSDTNHvjnYTQ9MfRYMjfHs9jEhiUJhWUSX5GNHxFd3GCExt38rSE9uW4pfWsTJGoR",
  "key6": "4KaykDqctuqvhuo7tGyaC9bsK8Erw7LKFBs2A7Pf8y8fjEpu61Gp6hqLY3x7UPb9toE16r6qcqMZ7Z7K1UVyh3de",
  "key7": "hsMTR1ALVFp11SmgBXRCCGimeC52j1XiGY4ahqRQBHdniEvFVXUpcBQpECTqSCWLpHQ1KK49wnWv4vmh7jFgWxF",
  "key8": "4JrsmuJRtzGiVztNr4C6zcaXrcgib3y2c2yf5ogzFENnFrcitfswF9PaykX9KM7SEJ8Domtu7dcSdWXXm5ixXGkA",
  "key9": "4Cam5dYUXadSyZcXDwpqAMPnyMPnToaTbXgmjj7pxSC838Z45uXgxhWtKqUAyzDKq6KRC3hYtgDbHpWC6em4fgTS",
  "key10": "5EKmtVxgoX47bjYu84eNrWjL9VcqmMboHDewCfUcGZ1CyungHZ5c6kD1TMNkaPC3mJ54XQNx4c74Tgaa9Ti5cZEd",
  "key11": "YGRXmhBT2R5qGKKxDJXNcSTafY9G1z3r94Q9vqSDrP2DiQfBd4znTmEpwx7dSkTty1P3fvJFwKB4dCDGKMrEsrP",
  "key12": "2Cby6wzsqDjHEjeq5B8mtGx8XbZb72F61Bu4wA4fmP1jKCHnXmYdNk5wWwx3HXbWTZswoLt68VadTgHFTtZaEShY",
  "key13": "yWQgkvcfDm2SYwvK5iWu3UXP9fu73s5Smeb6mQHJTwfKs2q6W4hzApaprqL3sC7Kcp57YLQCHDYjGJB6K4EUnsP",
  "key14": "5WRiTqL6HGBfmSbjiMbmEgH6p91AEeEJNUWnXnveiXXPWM8uYTvSAqqSxsYRb1Rb4CCypPCB41GaZJ44juVyj3N5",
  "key15": "4dKUG6JjzB38oNC8Hrema1nESbC66mf8uMpXN2HoPimPJ4gCtketYMYXixwKpWzaFuKzeA5BNSK2PtWdVTyxMMMV",
  "key16": "MFSHj1K4cCqagnDnN2vV6rfjreD5z9gYqYm8iq5WzBHK3f44K9h7pWDdNbVsN9zNC7DVeg1PHnxCzBduoqNNKxP",
  "key17": "5jCK6JDy5G6d74PcwQ3RGYLec16M1rDwyy4v9QzDPRLozKVQhQ62SLeaEygVbFt98tnvr6Y81qQPcWk6mNknE85k",
  "key18": "4MjKkf46PbGdA3JaqV4XFovdtgBD8tpebgq7uodT9oFWQJYzHyms4m2fZBkkhPSLmcpRpxp3yMKmrTuqByuZGCFB",
  "key19": "5TcmqhrMVTjAC49A5okseRJrp7pMsFjmHrcg2UJsSS8JSGrehfgAvH9mUbPPSuVkgafaAd2gi611Fis2t58SFA3t",
  "key20": "uzUkP1jKrWbdF6sM8KPS9em7drNkwiAtBr62RiC5iU5bPa73VTW1YGscxch8BdXQzegAx3s4yPMd7U2HxcZ9h5X",
  "key21": "2WpzaQFiBKUiwijGLbtsgqMFv7om83WM7vDJe6753tWNMcFWvdH2u9Tr8a7X4oAmq2AVHGErf2qYUpuyfj7sjExx",
  "key22": "5s1vUUsohvR8CNUTyca8f7fZhr4zgqCTuKcUcvcMqjevLjdmyUoi7rwpzrCCovXDrLiJ3qYPZdX8CUMja881HnLz",
  "key23": "pwY2P3zd5V174VBzXUvY16c6j9nUfFRfzcQfx7RFWVEv4FRT11nVTbShUSK4DeFw5sB2CaPSY6dSRjN9sxkrDov",
  "key24": "2HeL5gaQrDn9YsHLF6jHdtNLWpoj9gd7jbx9i7g1T2VGB7zCqtDH4jL2BKYua8zRVUxUqHBYveMi89WLSx9RVTDJ",
  "key25": "4ydyTD7rdGASxiV57YmxCSAdV7xgv3XNi2d28BNZZb4rbF8JXvTaLz97f3ZJi9qXxMuKustZwECim6FshYPocxxw",
  "key26": "4kr6aGUERqUWmcZsYnw2XRHt31f4fUXWAdet5XwfW3F1MW3KTEUREhgbgw9tz7f51PfWzLZD5kvnzDY4DqbGyUbQ",
  "key27": "2FLXQ7emZ3KyGd48duiiZEmMG7HmzzNRxBtwh7doMXqSNS2ijycRVtb5V8J8sdzgSr1Y7Ms9jrkZLXisSwSJu9Qu",
  "key28": "3RMC2BLeYueFT7dA473YkSFz2YVJMqkjagTeiDvNjih9wfPYs93KcJ1JoDQ42WSVkNjaSGpBJwHwsD81bftZy1vz",
  "key29": "2ZYLhayMAm1ZPwJNxT5g8uixLgJMi91RMXZgWXtQt3iVzrr9iNK4L3v8rcEKsqEmrFuzwLe5c1At4MNhsqqf5mnS",
  "key30": "47AXnUza3aHib55zGerqPhof85UUZWkjok341hMbJcANC6QQ7aW64XLKhq95qsv5N7wKwWTvfMdbyDcVzfeKQimf",
  "key31": "3nPvp2HDpJtq6PU1MUHU1U343t2qXfy1WTK4R4vTf2fYjY3hj1XthzcGjL8omHt1GxHUkR2d5gfqAoui6nnWVehF",
  "key32": "5LrLwSip6LZWNWv22Xt63VKcSyuxrsTwYbMuSVgL6o9QcuSY7zGgDZ3Xe8y4JKLXLq3J8MxeWV1XFnQYkkU4xcNa",
  "key33": "4aJyUvjPoDdgm6V2hpJfvq8zaeiBgskDFCPKkDNGj2R7ocBpDFRNiUEaZ4eZocK4Tar9yZZ81wCz9mL8vt9g7Eod",
  "key34": "jnHHpFDAGQCaxbyvHyWi4Zvq5VUyM2UvzfauSwocSoJHLRK3ASHJYa5qFcfy6kdSYGnSP8eaCkepVC8KYGxUFXG",
  "key35": "4LZQqKSDYq49yEZXGdEVab5VZ5AisNGMpVgVaJ7y4oriHZzGC6VP49Cy39ZLoB5ikppQCiTHnf7TnA6DiSo26W1Q",
  "key36": "Q715mVTuiYv23VAFXPP9tCjYttgmMNKT2wZ4BtgjCmENoGLH8i2hkQrsW8HAjHuzuLTFp9qVRyDwvMESZJtXSLx",
  "key37": "qxL3o4sYJUR71m1F9pT29qB5MAqpryzAiSUhcwW3WBftfy52N8mbgYydEH4QbJjxWqE6X5ugf1YP5o5EPaFJc2Y",
  "key38": "5xqmxhpJEPjftyYfMTEx7LWUdp8nsbTqThsUqKgKZ2C7FD9PZrhg8Gm5Da2mhjXESPy9D9m2KKockcDTVL6gcYj4",
  "key39": "2nV4qSqD12iyCZXHS9NRuuv8y9XbGktBvem3fMwYJpNZ13SGAmztXD8yN6BEskMNe1icWTMLpH2eKVgc9tvpwDxK",
  "key40": "4MRBr4BYZgKdcmGKHRkMNpAxk1ZecVt1afGtJEs4kgvPdoUeLDj6cMs1rYNgV6Z3sJ3rLDHPS1R3HfnaQWEczBhp",
  "key41": "UNf5ZkBsqe4w4EUYS9ptVh56a7Cv9EchJDy6T384pBRXCnN6P87nsJtMEZuVFkiyf2ttCHCm7PKhZZMQvma6iQJ",
  "key42": "2kf6mTEBUnixUm8tb2rZpaJNFwRAHKEhwVxe2v1xkP8ANhCfQjjaF9gGwPVUSQrfp37Qa2VBZEXFAz5CwGR8S1PA",
  "key43": "3spUFGczDkhYN58tmq7kEoDb8jmPyUZuArXhqJESAALXLTcxVEoihVMhbDi8kVSBs4nYYzGUCiy2QzJ7joLG6GMm",
  "key44": "9TARqbSRdgoLDa3x9RnygJPF3wFyabqgDZGrmBHTjbP7D7seaH8vmKMVTvaL6QtgYw5iahwhzdVN55WRuJykfus"
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
