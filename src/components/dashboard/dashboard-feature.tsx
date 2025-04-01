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
    "gRWo1R2GMcTbJQFdgwmVkvj7gcAVJp8cWLW6KnGNuoLNFp9JUu3ccHNeP86wH1yMBfn4WNnrkyQVyeZNceqYSMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WNCNTzbq1FUqH3tkRySafdTCyR54DTryeiq2a73UK73AbKqs1E8Nsrczy5rLHFCxU8yak5jkzRZU273NUmH1cg1",
  "key1": "2u9Lxzk5eiKgbQDLTaKwzh7Ht34PzQiwHUUELM3w1cuW3kRDhWwCfE2m4fo7Sxye5NUf6bhQDnMce1YwsqJdEggT",
  "key2": "4DDjkfgqzDg8qZ4ais8mX7nKhJGBkVLnCqh1njeK7nMJJAfFUWotuzn4zsL8y7p396EzvHsRKd8XqGNotqkgi9PC",
  "key3": "4R2QH1PcC1eK1PGHR5ZFmSYWMYNfHjxBvpf9cg6XknbNZ85GZ1BotYcbFp3myUbPYytYgrwqgZ9THBskninv6p1H",
  "key4": "NEafMtbh16SgzXLBxcS4PEjS3LBvZqbGX5AcgoGH5AA5NYDkeAKtBrscn6h3LcouN3KjQNY7p9v2tVCMfRYXHw9",
  "key5": "616xtnwPVWF1QPyhrockMB28TkAUeV2jnPzCTrBXoP6PijoAndzjCHb6NmJjnNSmVbPvyCQM4HB3shc2CTf2LL3x",
  "key6": "4w5Z6jXBbUkwwb9xgNRo3DG45ZXD59xdkWNYYaPTHvzBcwXA5ehbSAKzv2D5uQnTZktYfVX3FWi7m3PNkK3igteE",
  "key7": "2Zbdw1AKiJjDqaoBDnFbyw5iTZn7SpAYN4BvZxBLkqik8Hij1CjjckxHSxEeRad83asE9MvY4QpVYaniaLWWFeXG",
  "key8": "2ANRcfBofRHytEyoXKiqFWjvoWCKR26oYj8TPmZePkeA4ZgQbK43bnY9mafLyRMYKNkxmfFYh3P71fNZfrxWnPug",
  "key9": "3aGhebSTPmXdNQY5UfuN1UBRpbStPs8pwPFoEPMXwKsxhn9Edd6n9cXB199nUJ4JHPstGQP5G4KyJBdfvQRGPkJn",
  "key10": "35vNEG3xqzfMXUjpH99k8Y6DyemtXSqK5vhg7Skpa2DjqVgMLu9zMdGynx69KHgbjmmVXrR4dPwMr8qUTKXBfp83",
  "key11": "5AyKiNnEVC2FmAfJdYDL9PAABLR1mwtT9wrQVNUJ8Qr1WY9YcNirUt3SLLfcHjetZdTTKitDHeuuFuYpTqU9H7Ss",
  "key12": "4qDUPjs24uUJnCeJcM443fXrTHV4d1s6LKC2UYWeg25yHJaxpAgAtm1HwW8pbM4eqKPmD7HznUrQyxViqcX2n3hC",
  "key13": "5tX6mjXPJY6uMFA3tP3WK4zkrwVUHFwaYeBp62jkndWgjqNXDnC5Wb9nNdjYqyRVJq9jV9DuyKcuQ2KZNMMZT5yT",
  "key14": "248LgcUcDWwsG6YmNqmnjHG5qmG4b9eguQsGSVoHEDy5PU82Hv4Q47qTYneSLPfRhFCpmhDvPMbik3xc4ZUGRAvU",
  "key15": "eapSMMrFdjyyd59TDhhGN7FgNEZf6yCFdWo6vCecvkxnAfTHFBrseKUVGE3u9qsiCY7MmjV18jYjKLNWHLKHa5A",
  "key16": "29CUWJjcdfJmR51xaQdFFVy2BWHbP53SPzeEVnHKmMme8JEW53wrmd3sw51WKsTafUUe3qTtBDo1iyUbGTzHeHvQ",
  "key17": "4pwnw2VLokQvuTkoeE6Vwux36jaKDH1r4EnXayrTJh514jPmzrPtioASWegxvarSgebQ4SSoLT3fWWZpUAGKxm3J",
  "key18": "3K6Kt2CN48k1qSeP49wTtRY74SKykkJwjwxLRVgmVzAcSFmNqp5mkfJDTRc5LR5wiUoq4LTUh6Ke4dQrHcvZzinz",
  "key19": "6hyMFTwJxHSG5UN2XZXniD2oxk1kVQRX3eCnQuhL4YDv9bL6GYPi4M7fYoa4D7Yeb4G1YVFP17nc9bWpcZo9df2",
  "key20": "2TUufJm7KbQaMEP5EevEp1tzLd6qzeuaEBPhRwYB48fUMZfFRGbFCLpuxFaXFFvpf4B3qK2WdTpLxSnKmykRHpwt",
  "key21": "5Gw2HBBDfncvut7T6rjd45HoETGt8guxLzQNqLgQC6rAkNvtW5gfmSHaLVnH6sgjjhRPPXxaMVpwizbJK6p4xgEs",
  "key22": "4pBvRVreZbgKKPc5AdjikaDkXuLgjQLx1CgcpWU3BiMPs5D7SAbUQu1hQmUMHuS8ENxJ54fQs3b9LpYNba9yWu8u",
  "key23": "3J3vAd4LpiVi3NmQmC1cJbyDjatsUes4DQ5rKQ3RmzE5hDMw7GYAkVSWHubfWMCPFyz7HS9mEgmdMwn6kvNzo9RP",
  "key24": "5jS4hVewAGLxu1PNEFpK74JPEFuVyUSjSPJ8tUjMFpQYgqsx1Qw6ZDupedGXQjxWrfUibHPp9qRxCmxootx4dqnQ",
  "key25": "2CAYQN84WpVGMjCK85JP6vMv2wnikfaUD6gR4miz5QXGD8hJirJHYfWPSFJMZuR4DjdT2qvkHxhRaWNWXaxTwa6A",
  "key26": "tUqLD5m9mHuajisSxHeEjMwcbHeDAVsaXHLTE2QeRa9La5WErZRH6PYUHBMf3eid28JzYsFYtVCbJhE7D3FjXEf",
  "key27": "3CQ9zi2ZyfaSHbQWhRosu7fYHHE7GmEu1SWhDdzGxncmT4Dj7JrxBiV3kCqHxzDfbdPq8dEk1DfQwKi17bELHbAy",
  "key28": "2De2M9HbKVYYYd6DTbaA5kCB6ksoPBMd5TcU8LVNMF6tQkuCiZfYqEwEsx8NRzFcsXUxvn2yPPpcZ3kTfQEwN3pn",
  "key29": "4WyJGsQkw5JvnUNiA8KvyePqP17i7aK7jbxeo11thKevKuLh3KB4PXCvdNBFYGh6kNzrWzfo5eyUED1i8eUCqCkn",
  "key30": "XshPUSVc7sRSrdkDMj3C4WpLDwG3B1m8yhvbA7ADmXrLSMDNuVyjrWfRRFHMvZxXyokL8kiYwon8yuTsYAkiEMY",
  "key31": "4q5SJh5STM1uwsknwMbGvuzZzNwnD5WqGRTUPHx6ceMMWLziQsrLKjzrmZqRwGWtZuaHhQT3ZqVAWwNh4bcwNP8P",
  "key32": "4reZf9vWJdfFFktjmf7yvz6136E71fkAmfUmqBSjWx8QupM6Eak1eGmds1M6MsqfJU9yJdq8JaAB9wv2atma9RTA",
  "key33": "iLUq2coTJdkNDhk2Ua2qB7xjLYH1GDfjGkjheD6xJ4HeJKQnU8ukfbX9gdNjRPv7QD1HLKS9ntLwEkfyoYumvfE",
  "key34": "4DaXm8WaZA9EZmXFQzNzRxFBKy4qXSmshsqz8hXN5RxVHUawqL4f8yAqsBkgkGtX7ixDvAqQqLn3gTEsvaZAfAuA",
  "key35": "6JfRzV8knUnmvvNhPHQMUz4q9BhXxHmN67Vr9mvQ2WmzPJxQbtQtuSr3ZZMmNDqqTYbDtYxnh7So6NkwHnq8MFs",
  "key36": "66Dwbmo2uStCL5vqirPHSWiQxLVVnc6DYMmaugF8x2EmVdoXuN2pmuFSeeu1oUKkzb3kwX42vDmckYDKDD31Wmbu",
  "key37": "3keTU62hn62FEPoJPqYHmMV9RvBq1tLbXBqXjs2tDeA2LAibeqxFwJGS6TGoUz1vtjUnc93yubdYFgFEKCKPHi13",
  "key38": "stnRLQSWR1SuUqWWssViSzy8qRrCzZGwGWo3dPGkdw2ER4vGCJgm7YeCkndJNpSbGiKdPYkCY25GTKVc5JMDmPH",
  "key39": "qUKi6rJVq5nzKsudX9rbpd9dGpqwDrercHZJfPnRkDcz3NcJ3tLGnQ6CtJTsufeqbWt527QzGFLiAyaNxBmgHG8",
  "key40": "39jBgLfBRK4SN6SpaDeAiEZCX684XPbkXt6HfXLL4ePZ9twKKzHT7kDM49rg5E4fmasxY3U9enW7nXHTa3V5XR45",
  "key41": "61EFQKdetneMWARJwuKfE49CtQhgxiUXiEFLxAYPci1hW9Ykr9kkvy1kA3Y5jvopNaq8dgJzqpMCyqYJgDpSHrRh",
  "key42": "KHfHNJRqzySVfBqsiJwPjfBijzKfBNCoZWEYQ5bkEzsMprakfeS6VHVF1iFpdxSfBTGsMgPbqAJhTBAaivo3G1S",
  "key43": "ijPS7YfRphCrKFzBDRHQPLaMncg3ysJQ2hxyC6H4kxzxsFpERxzYa4FHo9Bv8rTaSFdMugYXjtmk6XAMCc6oq21",
  "key44": "4P9eUzHDAk1C96JjUkC1iTrMudMZwuRSMrRwKjAEqvKw4iouP83Y6tP5yDRfKnLnBiUnV27xxtdrp38Pue7q6rkm",
  "key45": "4MSHyfrfTiJ5TVHms8edA6aNzV1UTGtDdmw1mybvPD6aKQ9gwuqA817rNDsMVYgTWzGYbGpg4NsrZrbMH8pdSvU8",
  "key46": "Fb9Rbu6poH6xkvAswCWsA9i266rKvo4usxxn7bPbAP7ZkBEFywbz6aVgEVXEmHMBkmG4epJGfXZxMWr7as5JdF5",
  "key47": "625nketbX76iDofvXYf3M8iYUGuBYg7ZnWXVGxEgAxf5EUGNSas5Bs8uGo67W36XUbko46aRkmEFLTzTgQgfd2GV",
  "key48": "5scboH8ZSgK3XC842MPqCkBtCqBKoeXbBhLaLLdhD2iGNrUBN8ciuxVCifZMUqPPM6MiAHC8cTYw8Jy1NwHGVYow"
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
