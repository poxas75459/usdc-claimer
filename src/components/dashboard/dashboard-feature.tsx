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
    "tpmTXosebr9dm7nUZ9SY9JqmhNVAsjMsazwLP8vW92q5r4EQ8cQnUMVd9jQHvjp8kX5sto5G9mHuGjSV6n9UvYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TCcqyyeum34F2JtWoqaHhB7tpJNhwRsAq9nudG5wmDmvwcNATrqdXKnY2hwXhmB3tEoBDXsREdDCVaJzSdE9ZKB",
  "key1": "8Ug4Pe1c8Goqp21eL8i5bMFFrPP6NqJ7DQNBcvKQAaQzNMHp51Ee9E81vQ1PqDz1jrUR63A36QbZMX7QkFg2qvw",
  "key2": "ZGXEGLMXNTYBTpPtZGEFwZysZpzKN5gi6NnhZMcacnFF8rBiqYMybwHtqK4qpLmXDnU2QexpPhRwisNguKNyFXb",
  "key3": "WpUGyNFBU3iqpWE5SdgGqWviGFGXdpAp1rdjyu1pwAxXvVXahR8HY8peigTwZPH3Z9Z9SdXGEU1KBwJw5ctLFvq",
  "key4": "5mNBj5HZUpfrez7KRNzRVKt43JPEp3mpAriCuDU8ab39Hbp9MVzAJYDjFNB5mY9439rac2Kh7RAssc9msguXDiXd",
  "key5": "4LKZyXhtoLCSmAG6RGH7EqPnSg81veuYiohRpiG7ToSN8zPZxgwMa1axtt37bxj4Pgijo11reYMU4ykZysEswEcf",
  "key6": "5pNLTKk65CBLCFtiVNJP6mohA4fZJ7RFMhUrkc5hkQgxwN4bXstmfPhkPZ5q32b1NwZyMTJfTU27fF7bA14K7VT2",
  "key7": "5nbehp9EZm2KjbsAomoRG61i2qx1fZab2KgKtW9pDc8QYjANVr96JzFWEPp8ocGffvqFfxXmPk4V5TCDM82fXaNq",
  "key8": "4rw6WXDEDEvct2XFyZHmVqeRK6g77jKWTUZHDn1wXb2xGsMfKhViCnRT2XPADcGH8i3S5RWzXfDNftnZtb13QN2x",
  "key9": "3spViw9hNJQS89VuzyU31vwUbsdFrJ2e7T6oWy1dAtUXWwkFbEiGRBuw4uibq1iBiizZGRpHtt9295cyJkh194zk",
  "key10": "5Cca62xR3B8aAZnVuKwm1JvNZygMUwnhjXQmr9FsU5R69ZXxfxcYdvtSXjvZBZJ2UW1vMffTJcfENYqJTVmU1RGe",
  "key11": "5BW6Yp1MmpAaspCrTTMM9EPT8Pe9WWMZtA1u3KYJrZo91v2jh9jA4M6sM945Rgt793s4cuNAQdeJqr5rge7VQXRr",
  "key12": "HhNhuoZLjRGTyt7MoxdXMAxsWBp5Mw1791TedNrS7JnSko6ZmBbkS4bPoofCp8F6VJ2cbRRCq6uWzpHrrSMAhEj",
  "key13": "f1c79hEhjbd9mbu8EfnKrckDERDq1hG9khNGWiyb3LTTBiZjDbNgJ1tsujriyw2M13ybCsfU3cBeuxQShBUnhqu",
  "key14": "3AQPhJHA2n8SsyPYDhRdCNTCoHH27TVcWzB3ELKh7riiAzVYaHUuFs16LyaYnmefgCHoEJx9mfDxbYw4fQHT3PaU",
  "key15": "47qUPy4BAAJGtChURmUTAAhznYVa1dv5vfDBiqUhvk1cpfR8JmKLQKduGDbJgyjjAHee7wfEH7JxDNN1pyBUBVgi",
  "key16": "2ZKKw9HACc46SRGfBxqtcTsJHVTt13sZpfuyH8St9Df2MocWt8T6vaU5UNMwaJCk3FLvP5iEDo2yKHeJX9Uxbvv8",
  "key17": "2AgpoNdJb2QySV3dsKF412SNJSivaU6SAk1rxKdRmv8K2zwLXZnHor9iFx39Xb4AgxN32sdKeBbzaTEAu8kFBDFk",
  "key18": "4Ab8S9SdWNF16PxHsWVA8F5vdd6Rpcie3x4ZHPfB1t4HvSum2jJPEpA3QqJQpzh3hYokviZuN1hZdqmw2ffXNTsK",
  "key19": "5sXmVxqvRZx5RXHaoebvFz4CXiq6sCikEtTfrtdK53CHEsrtUq6pFLWrCUrj9L89swmVwHJH1uctravDoDLB6yof",
  "key20": "2zzqSegVCxPiL33XS86wH42aufgwGGDvq7sEDU5onAvVKooNhBtCk1iEEPWTCgBpZb9VyPXUkDyNmH2fKbP3nBB2",
  "key21": "3h5Rrp3k6h1q8zprL14ovKaGVMH65LbJBw9weZsfevUBYiSmrUoFEMfbD8tF1M9uyTYxf6tjTwWA9e1GXNXD4D8H",
  "key22": "5QFyod3pQTy6zHW8u23MsXLFZwbmuENdD7JrRjpsSi3KamcuArfmBeCg2mzKwu1TqE7hi3fixfXpJoPp9X7DEYW3",
  "key23": "ggmWoGmGaLvSYsvECVN32nhN9LX8nEXKNMM7TUT29FywcbMQaoW7gTnEVwwontcT99vGideLtHFC9MXmHbPMB4J",
  "key24": "519mSuohMheTFPFFvT1hme8Z9iVCgktTxMLgcgHiS5tvWFgNfYsYp2iPQsoumKEyLnLVj2CNnLSJ1R6RC6nJrQvq",
  "key25": "3nLbMH9jQUo382zC62b36ZazZiNw9nmHyQvFFqbLtZPmD2pNrqgfGSQwVLLPvgFJ6yTfks9KTrwZGrySLgUKLsJC",
  "key26": "bBxdmKTWt2DwEbam642RPN7VbbTePciYfMRcBVKbimcrkZhB5e6hbTfL4zx3oUMK3qXtwt2f1xshP3BwCiFbipu",
  "key27": "5eNqdcYZHQ32HNMkqx3h5RHH4cAGoCMuwvLjV39pk3aVc2KfwyHvuHwVc7tPEA5D3otLR7bE5QffWHhV71G8BV8y",
  "key28": "2n3PMcZWvg5jRqgJt8BvYbFdTw3GnebkeHjdv4JgPtpfoTrVSEuQRLyzJqW3WqUgNKHgqs2yta8fB1Ch7LeqmcGB",
  "key29": "4okWMo3AWYC1QiSeSy1Mfy1YDLc4exUfLtpAb6XXNdZFffwN65G9YJWXE6SSMmFZ4ysefULf8hEoLHSmhryMBDYB",
  "key30": "4NJt43ueVYYTDwDdbZ5VkgMPoLqBQmebQDtUnzgP5tKb7NAMTJe9Mz6eAQuhV3YoDaMe1kqAGE68LesFGKEe7KEp",
  "key31": "6Sf8FmX29zCTMV76a5bMZDWRF6HYXQDMkvxDdyWGUR7ReBidJbanfAjyChL5Me2VSrrJBq8iDnGQ2XtjrzLhytn"
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
