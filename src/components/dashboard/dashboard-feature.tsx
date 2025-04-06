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
    "2zAhgULpYWxCZDeKp1Y868RcYWbuXJ284cRabqwUjZBtWMhaPQBbq6BG4hnye152dyohBYVuRMTynkG9yRmA9vC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9435Pu7uGKitdLRo9qBenrAVinZjoVa55qABE3jRVMUD1i7dAjY86nGDE85uPzhCWmnyEqehGG16xdKZC5xgbR",
  "key1": "2cRkntqEQC4KGupLGkXkD9y6QJkU5QM7Bdd4EVkJKoYwx52u2sdD7vo1oLwCuPbpwj6Dcdf6NmwGGPwQPvpnQ1Rt",
  "key2": "3wDNGeJi5SAero1fQYJvp6oXBEAJmyTbW8crWcYj2yDtx9tgc6F2tD8Zq7D4QnExowGNJstZfcxPJCTH7rkqd7Xo",
  "key3": "5xMC3FNox2mRrjuMTkBHREf2otYGzkkVazdiQEDaxyQ1zPa7282sKttDtftrqziQBDuQPnrG6wEuxnBwyaPvgvgk",
  "key4": "55Ug3sb8zs1j9ncaAviBrtjiGoBZFo7apJ5o5t4fqdcZRDF2vs5boEyxDy7zwiGJpswPTADw981rBdruuf2mqNoz",
  "key5": "3SWxEoMroDUopm8Y7XrSVLmkqfbGMvpdRPQgvN54HEL2nW5QZ17nmuaXNVMi9FmAQrA5jrJhHJM2CE5w5vKgjYYN",
  "key6": "4rLxfS5tpwaPcqDKn5hUzHNPHbE7QYRGJXa4VzfdJFL9nYdYTbonx6AuK6ypo3yL37T235o9e6aRGGqYYCs1TBwL",
  "key7": "54thaQjWdta7cFghg8dubLW7zkd5Z6Gg1Ntbnnp7dzhjNBcGZ1ZsuFDiFhZrSyFo7a88AY3udaV8Nfgmx48oBaVg",
  "key8": "5Cuos4L9bXXuDXWT52rfHwbfYgtQdDoLebNXi9PnSQkKyX56Zfkr9kCb62q8XMRRaUPMurRmvbB11znJBVhXxwoi",
  "key9": "3puosgSFPXd893n51HfDFs4Xke9cUbkrRBzxhPFDTSszTDgxwAPy51ZYrN66VD9Ge3E8eF6Jnh45DR3Pkj8vW3Cx",
  "key10": "52YctSyF8F9vQ5KroWdsoPwgnmRBMRcqM2xNgxNYa9dWUFCDoGGNsfDoJXkKYiBHttofWRiG7JF1QyVLNnMmBKmU",
  "key11": "2cxZGdpsEZK2WeqSRf1fKTFs6h6QF732N3jWeJjsSWd6qTqaJzXCv1fqYGCynuKtttRDUfxcUG2ivuCdwKVHP5PW",
  "key12": "xVUMUgV8NLmxwivTCMWJ4xFh7Y4Tj8csyNufYTokxv6N3LnBTkYbNrc8UzzV1qQhAg8ctaTenpCiwN7WdXQA8vu",
  "key13": "27RgyZvufQowZTbCsyekkPvUz7SnhRA5JWXn9N5ZSUz85w2tAaUtPCrb1uuvnDFJbJvWnvmHxunySXJYfVYgxmEr",
  "key14": "528NvXUJEPaoawHm7MEdyNYrDLRqFXZBY7HMShb6NwofWHDVUFHzC4aaAFpWEJUN7FEKhdp1SWY8E5PEAnxyyFU8",
  "key15": "5fqLf6NzCTyArppCrodeRau5FZLSBeUL25DHrf6fki9C2P6NhLtDAGJcMLTtD9XgtpFhdsfhLEsmZNutHo1mw2nH",
  "key16": "UG4atnLLWa82YqCbYCRqoATx8RVS5zQ7NDhsbKipKs8H3ZQGeqzuEG4UP5exeGZAPqdz4EGLtbvkzw3oFtxNu7U",
  "key17": "61pgnYrZqmQw4eaaxFEoTVi2SHeWWjKMsZK5tPqe8iWiABNc2yyKNYu5poyBzGisr2ZTQJDTC9KV5ptSpe468yTY",
  "key18": "e113xt5DGohWxBjsYoHC69CTcnUT8WUTQwiGgvtSBgGaf2B3DspxvNzjpNtc2hNcKESKNEvB9SjBcQkYrN4ccpz",
  "key19": "3ZyB6rWTGQKvuSNPf4iZQK4i34iyZ1RXDU8oKktzjHCJrWmnFEjS2S5YriP6p3bmTgkFRwKCB7cmVpgz2S4gvCVD",
  "key20": "3xxpKAcBZMTYTuhWaRXtSmhviVsmuN39eya7HMX8Pm9TnewAuebCvtZUKmxSvVQxeHwSa5E1DBZwDkBBi8mKsm2o",
  "key21": "4ZPrmSpdfUGqTsXfZNER5g8cBGo2u7T2VguBQa7DyyayLVHESfRiQ7XEusWdVucnzSdCMghvvhzpkKaGJDR99wWL",
  "key22": "62FdwKhkRkq2D7QgeCq91gD7EZD6WxRfqPJREXGhEz7tnK34cPmSSeyPXqqo9ChiwVXbpoePh5wz5ZwCvvP9VpaJ",
  "key23": "22zZWeUFPUYZi66x2EcW3ifzR6uGGFVd4ReWTpjRxVT7CGBwKA64SARj9DY1FK9nuKnnYvXz392ZaPcTSXeAV6qm",
  "key24": "4YaJviKrJ2YiBK3yjuvRoUt3zDR8iFxTGopZBi8m87GpxEnNifg3txAdLPhepxnE6ikh2Try6H6Zdew8RBx8qBn8",
  "key25": "4NPBoxDT2a3nX9YA4gQqxmTQpjMS95JtQ6uN4avDWHwwf4cdcgzZvnunnCMfihHn5nz5Asze7qz6v6xaTst3cMmZ",
  "key26": "2eQ4chkPE64naXsDZW8uM4BzUDboE1jkpPaVYsQXgDWijdATh6V6gFY547DZzkHw7eQbhhkUpymkSJaiSCT1uxeS",
  "key27": "23UEcBavXeXivEdLkGDW4GGYAa7AdKNTv1LewcaogWJNU1JS93fPZT6u8ss38inbnM6d7WWzUCprXEXYSsxCtJgk",
  "key28": "3xUqzrTf5akgGCjxUDTAAi68kruiGgHRVj8YXmzfALdpgKcEAzs7PGNVrVNSbVeSEgwYozhD3bvQP8u5uc7bkmpY",
  "key29": "31dk595ZmEUUNLPMAHBDWk7QXZB7B7DYPiFZmHShThjC8b2hNNRBB6fD2Fxcgz8JZaSwm3Fg3UEhYbdvTa71SZpG",
  "key30": "4dh1w38FH5aPW6oYuujDfoXwDHvuyPyJTWyTSeCGgHEyRVwz6dFPfGNbKXFhLQnVk4jA9A9FCC8uqNEa7ywsPhsk",
  "key31": "2J1B544uKqxFCXyddMRW7WQ5BXgtBv3j8yQsK4Xsghk6qYAUuE5aN1Rv9BjWcNwRiYRXUc7fXtJc9RpuQ1kNeJnB",
  "key32": "3n7BjyyPXjMBgYPKM3mevEB2Eqe8hD8yjdnsMDpCDk1WeCQuM27x1rWFfFj1SsN7oneB2kSmhN5CkfhU913SLDbY",
  "key33": "2HVLGxkJPctjPdjXs5mWXJE22ntGqMcrBD4HuQVBfVGCdmvrt8GV6TRAj3Vw4Pg39247dRZujkPqurTTGnaFrf5z",
  "key34": "3r7xKBDCo3mCFwQQkPUA47ZoDdvRw6VAYsATfKcf8V6X7gvkaEUsCGHcwvXFndXFb3e6NhApezhr3qJzSm2WTEv6",
  "key35": "mubaRH6LTqyMHN3MdfpX1qbEFCDuE4oMbYVHk4ZXmsP4Q666NpPZ2C9j5rE2sd7MMmRde1uYSWznJ1CWxPfFec6",
  "key36": "wfmsd8nJ2UC18ptaKZVZyrQEiUEuvU9JzvR3SE9qH8AXC5f2TvB2wMZ2y1fV5U2rbDWangvHx4efx9TujQkaunE",
  "key37": "2cEX8sj8gnGy4vqQoGwCRhHWhzskJ7Q9Qrx4yX7ywHukUZuTBM3memro7H28mDPsUQ33HYV19Fx7RXzyQDiShH4e",
  "key38": "55PhKz1XxuURn7ZsuoLJ4W1PrTF8xxCNTWDyNDyjVPXXpv8SZbnUzxeH6F17EQ6xEQ2RMwxmNGzwJCTBXz7wdqvL",
  "key39": "4vHUU2KWqjuUbnTtKVoBXv9z6mYRp8hFjk2tCNLMH1nBok1vkERkAg2y38LsasBMDdSiuFDQdVBXPGkCcRRHeZLH",
  "key40": "LmJ3999jAjZkfaDwdpchxmAWr1YrmxHfqhbKL1xghd84pMcTNFjxi2v6g9M7rfeToTYt73puPLsfQdjeryy9EcR",
  "key41": "2fhYhLEx3qkaRDMHDcibT8rr8M6LroWm2dJe4rQZ7hxHAEcraZkDvhAX8dnNDw1PGCWETLJDdx9UM2LdT6SS5dS5",
  "key42": "542v1yRrrMq7nEvtqzMLZ1XaudXwvANFNqnXYSKcAwjyCvVXut3p2vGNctC3X23v8RVAjfKcATtnwJcDmspcaKfY",
  "key43": "4jUDzpfUnH9FSsf9qNRPMnypHdAbUAY4eo1mV6WhRS2GTykBfxekyrd3V2vV51jCq2EcPpqcTeBYgZz524n9atB1",
  "key44": "2yQNmekK2Jy2P7v92vXfLM3TCd8C6dB7R6gC9a4ZceY8amy7qEWBFv3WygQt5CSUSPoT6QHDrv5kBf4SZ1ejkr5F",
  "key45": "67iRb9RiSd2iWuFAwj9ZokECBXtseuHgqyoo26k4Q8zJDex91Qg8ELyvmMFv24wEHN4CW68AayC3MGcd5nf9M9Ka",
  "key46": "2vJSsFJ4saqva6LLjUr7YA3qfy6goLVT2TuGj3jc8WHCJPPqrLJgUuBYFedyEWWNjKBNSXURFne1Fq5MpJASEkC3",
  "key47": "4VxPjEea4c9ZRhrfiaryoCiSheg4ALAozKkGfN3PMoa21qLKXd1ru1MGrnjoPAfrDESwxK75K3m2Mgorv8GcZJ6k",
  "key48": "2TVvpy8NX7DNfZKUuXzM6uBEFfFCTeaepEDAvYZ3UEYUjW4joBszQyX74cC6Jba4HEvj7nU2uiDEAoEiJQnypvAT"
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
