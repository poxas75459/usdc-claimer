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
    "4vzh7SLWjwd2VP2Rwb6hNBTVNq4fwWoVgunBZ6PAvgzh2ZSVrHEzXW3VBJHQ7EawZFHEndYRSbzVAcwXZ2KQyxC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzGhhBPFLsyL3YagcfoPvWh16TY4r1QNHCfvYZd583q8nYjP7oybpEsJ1vUF8QJxAKWccGN8zfqg8PK7xDHRmDw",
  "key1": "3s6Myuvq6iUX1nV6BQ1DExcGFHuo1rPPnX1w5W6QmsnqghBb93mqKrDhqV3ZqTfsWjswoM3HgkefsZyGkELo1646",
  "key2": "2Zt1nERTUVeDfdapJ6Nspbojb7iVGCZteNCLYxWZKVFhZqUFy611rPDKEEPhreEwTwPUkxZ1odkvFx8renEjWSD6",
  "key3": "4dHWtrZJU5EqDD5FPZf7aUf2Dc2QPo8G6NmJKcUzLPYyqNyhz5P7toWg8tgbTNjU6uR2oyR3LCapmJEmpM6vdAfa",
  "key4": "imPL2WuHwCPNnwd4Cbp8XzJhh72fH2Mc3H6LgWYKmea3ZwVUdB94dzRUcTRm94s7TXHThPSMjtPwPh7T1fzescL",
  "key5": "2jCAgWudbHiuuxPUZG3vepVWjjAWUPmnHw7SR9LxjTcj2FszBizkbtv3q1pMtq6pAhkCCnbhqWRzTDDQ5M2gHjKH",
  "key6": "5D7rXeTg8hrJdKZfKvfvzSPBSYRuidRAHSt5KiGAPJVVJJvTmutGSJpdgVto86CRhQ2i2P27E5J7o7bnv3cFcWs5",
  "key7": "3w8oZpN3m4YBsjbwA7fMXdJQ84oXsZjn98oAaY1JjMd3cs6kirxgTEZXgzQ7GDooNHTFyyMZUY84d5m7KSgfLAsP",
  "key8": "5zHN6Bb21CKpsK9DDqJuETKkPaJdsVDtSfeRnSbvR97DuZ5KZ6aMrFt5SAKxJGiYKK355GRpg4RYR7EH1pT6rvrz",
  "key9": "2xDnzknMuwYmndpeXHmBzYosxuWd8posBeBVS2FtGX2LuLT8uVqj6riWYkz3thFeYxvRXgUnfgK1C7ouMapV5Kxx",
  "key10": "587bTojBcC1ecwdRhrN9VeS8TpzFDuPZXVqneTrwBsfLKeQuDZUnXzhScVmhDvUG9jMxAmEsmLc4CRvZuFs6S41A",
  "key11": "aCLkr3Lxse26MnAxJ9Fhh9aHE7pnSSLeBhUgf46YNm7vRNemCmv5NCBmj5NQLNGJWdT57ESQy7YNEK93sqb1jhw",
  "key12": "2dYqAyJtUzHWjqhfqUSm3Umcke4NgRJ1XKu28LR6uW66cZxMGt3a2z2pJtf31noriosVHcY5gSWhd8diXGV9hNBa",
  "key13": "3hjvXiyPyNRp2cHHjwH8rcX7QGYM5cZx4kHcQBxSRYE6khczQxSxxpuGP73VXEdiFPgoH8tEvWCjghmaCE2GhAiz",
  "key14": "5j8hGYhGuucdgPY88yy2wntaVkcWTkEMCXmrmb8QegnUiumJN8BVjW1ebm2D1veaZ3f5DQcYjbyb8CTufsEQ5cNM",
  "key15": "2XFDFnYLgY9Gh4f3HHmkFwdss3zue2zGR4qoy82y5ubEWNAmvu3y2vrU52EN7JyZfNKw1E7Pf1tUjeJ4KpXxAZYa",
  "key16": "3vYwXrf3ThCMtgyH1ParHLCsi3BjUui6pPykS6rPUz2nwr653Wz56wavY2pDY8CB6AaxGRrRz9eB7eViz29c5Ufo",
  "key17": "5oby5fyoDs6aCxa2i4K1ZF8sNexCrTAzXwwsE7hNSoH54YTTT1H43gjJK3YzcyMpUEHjczrk5x9abCYHhmhU1uvG",
  "key18": "5SQQsA6xVc5extBuoKeC4pUAxwdxBGpozzQBBePYivCU5uhFSS6DVEPf2HVgWL18dohJ4EGBQ5kajz4sCRUJpE8p",
  "key19": "Z4Hx94L6vTi8ADrxm6XK7GLVAsTmffmczJsXCXAYMFub5djWoPnpUA5gFJQZyosXyJtpfJMk8JyHM7QrZiyyaXT",
  "key20": "jcjq5HgaxS1TFrm893EWLHg2aYbuULcJSnfmRFS3uhqs7zezZLpCu6GhSJDoksn25UwotMFayQqWQiYZkayHhVo",
  "key21": "3u7GoBrxRTLfRzszECxRVSWSyyZq9DBGWijeGMFcWZs5HR5gsTC3m3ZVJqomS6ewjY3d12cB6wtvodmwp4c5Szsq",
  "key22": "k7JBq4KHr7rs9787YXhY3z11TtYYnLzPHNbUCgsqGX3EwA1cBAQaUwbgWuETgkJ98JJku2b6vJEnnyPygsWqvEw",
  "key23": "3aDPGZh3Wq281gPH3k25KPVT7Mp8wAdGQTDeMUdAF3Mo6jeNeE2eo25CMzqQWB8ea8ybGp6Y3xzPwSzZBbf4THPu",
  "key24": "4VkUJruPtKXeuefQsEV1v4sXG8827vRLe7Xq4w5MYdkpt4NvTFJBTVjdc3zgTniJDpDkZHWx3JCZBpyHJwJkBd2a",
  "key25": "3Gqydb3v5uHWo4a79fCNVFozRL961SVXubZ5sbYNJ4ZLHTiVJFrzrc5JmB7hv6PPAhgEgaj6SgWzpSayarz425a4",
  "key26": "63ic1g64VMDmensbjnfsx5KeTrHcnrfSVTeJGpAXkCRkNQePamkzmCeZcjzM1fvEJgLUGCb4fjpNW7cQ9XE2ztnH",
  "key27": "KuCYF5kCKGubhf9EeJbmXNDHGso2YxLUP9wgprNWJ83DSNts6tgcEvZrrUki4yXgFCeYNT5VA4uFFsHBFp3XoGG",
  "key28": "3GMV8VbWARxkQoGQXXxWonzCx7dLLTHXkSorgSUa2vFd75dRoH7gQjTYo765ZP3iyaz8vS84bKVjoYBk7UUUi5WJ",
  "key29": "4xCK4xs6hcio5XzfPMfXrdK7ehw8FxWAMyAuuNHHL7A5S1b2qH6AX1zXiRsk9o4AFh1K44Y4JrRuv8NwB7hPZB8W",
  "key30": "61xU7tUHrbFj25doSmWzQMjSQSuA3aBpgni6rt7dvC4u1T1RX5PB7qmH2B4UEou9qFDTqVWkm5GyYcyZSTi7jxh4",
  "key31": "4Y726PL2gV2uNnEHC5br2moAdAd6nsqNEYeLQAYYudtYJz15iar52yaYaWDiSJyaTp4AHoqV61Pu3BVKsSoBdW2b",
  "key32": "29z4JbxpYJnGzLhUmvuq31VtN8BTyxYbcMxgWqoQTUXvGjYN2LaMmtoWoAeTYwU8U4fYA1PghArAzfcZdyu8ypgf",
  "key33": "5WPYcCQEChS6E7UMWZX8yuBefYVNgoMS2VWwtsv7zC8vhm9PARLRsUUK1zBb64JtSgeV8aXuTF5jcWNU63qqTehK",
  "key34": "3RyVAGr4rUC5cSg1q65jFGtyZfC3HzFDpVVuJMrXb7ZtVXYaEZvtycEBPnRtuoFtff8UWGDA5MA7JwXqqYgAsU9V",
  "key35": "2dT1bbo7wbd3jfEA4qFKwgqPYVcPF5aKULsthLZ4dzhT5YT4az2P21KCdtKQMhAo9uUQaH6vY6Q99xVW5bC7tUjc",
  "key36": "HxXSfDTQDEa1C2WSoDd6ZvvRBwaCRRSNFCkEvraEvkaEUihL9UKUwgwi841oVYSzCDSoN1XDmR815RGgc5jwMXj",
  "key37": "szqoifTDU632NEZGNbNRcZtqD5QCcjbBb4u5VmnxHijbYg9aDseizwhVvnh1phMHBkJZD797qvzCPhGfR1o6SAL",
  "key38": "5QTYyepo26UHT4Z1UUvGpTCZLSHo2ADLwYt7u1s7cf8ng2PAvLRtaEycjkttBUdmyGeR7EYEZ4Zp7uSHqUgfnkiu",
  "key39": "53Y9oxyLYkwLznBbgkBWaHrKYCj7MUGvYEARAzUh9dVWYC8jdkJMcqiJieoZyrrargJCiDBCwv3QP88fGBYvjjJJ",
  "key40": "2WNF4dfjMhZK2vhu5kqDNBmCgmMHBLbqQBsTShcP2Xj6oCrrKRmBo9UaXRduUYtYPBgiDTUnVNMt4BPny6FjLJsT",
  "key41": "QqhzrmBJhUgjd6gvaWfTe6iPPEj6YYdZAd1RNoqPeSUAYz3KpD2fCNUAxCgAvvhpGHAA8Zj3KnVoMt3R2YgZG2q",
  "key42": "4gK1FhyGsM8S1kJkUsfCZLWBK9FmDgBc75xCix2ejnxmBhx8o1kEBd3L1BHVTkK4nPqYqZ2Z6eMxVFHdiQCysra4",
  "key43": "5LBUwGwcyhYjwSpupKGCeJv4EDUWk9CX5KZb8XiNHytgqrRZxC28GD4RJMMd7YZwLrPaZMDrhRTitEib3M3U2dgZ",
  "key44": "PbCRwUmhSxZbhRktKeYTG8osM7MMbZXZeeKECwUwyWZH3Qhshbo9qyAkB9RmmrgLrnwxB2eNiSkezEzET5ypdJv",
  "key45": "5J6crXYnDqnJRhaDaB2ouXwWWjv2vfYvfNPo7muzrNYQ8LdhmNnSb99gLHi9xPCTQQBhwL35apzRcamnnJDnHT4K"
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
