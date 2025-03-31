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
    "5YVN2JoGMyxcmtLzSbkStSMNHQt4gzA2rTRdHxDzcy4xc4akeg5dM8bRmowiHgJzkdF6E33xoJmpZz389pj79vok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QUW8o661rrt4g1BoodmMMoEbWrCtj4KtxbzwqMXyQ3mD6ZppsWDa3tiMhy11zrD1to1bK7xShEeULE76AL5Dj2",
  "key1": "53kWXeGqsZ67rgRcx6FLG41c5LXRqhBxPbdQqY1tDXwKUPKCmFkHT6UmdKDMY42Xt2ruSX9pb2Dg3EDb7icXZMwh",
  "key2": "4DfNyx5rm2AQsuLwWQdvWeQrhCERg2WABVT1hDiTpeu3YV2XUSUj9151CjwifgyQwnSeWNJAy6TiGJiPNMMuxu7s",
  "key3": "64hNKX8De8PyFZ1wYeXBsaSDXeSneA6RBQh1ckQumV7qcg7KX7rSq8MG744KVBTrqRkGcN7YAroapqsDa5rfasxx",
  "key4": "4HcUoBdRAFUz5H8AzPTUiNYRyVJmNDmU9DjHhgoPxveaCB9pi4qGMsraTGS1DWxBf596TnSicfKPQpxfo6tt28hj",
  "key5": "GWCJ1K2qpb7tSQ3Dv9LvMrjAiAA88U7W7aeqpkkn2W62tSZQpvvBzDaN9uuqmZZPeGWPpBihcvgGBhFBJycX1mS",
  "key6": "4yp7hQhxSuj81SG9qockyQELvTrEqR7aSnrKuxx2qMn2fH175P7drmfyzuRP7njfC1DBf4Cwhdb5rZD64fv827SU",
  "key7": "3kyDJLTKrrUwz97GiDX9XTDgnt4jYREupCrrzpf5YueDzk89xgirYdmkTi2HeG9BPR3FyfDdq1vMqx4hXTvqWe4p",
  "key8": "UsmSJiXyRiWjgAamjm3iekFPWw9CLw8rVtsKfM9HBQZJnMGowdeJYJrRAYMwTJGWMJp7kdHfoiDj26ncgoVKTNR",
  "key9": "5jcJQsyYmxs9mtvkxiChKFAUd7dr6qsEi6hhXD227TQYUoPuVNjxm8nUh1miZPxJzgxNnGzn2cykJGkaQN3Qjzy4",
  "key10": "2fUknuvNg9rUBxt9cMiBGBaC8BA7WhTfVri8fL7qnjXVN3xKXaGP3ddVGvAmNWoTHRwfrn5qhUAwKaooQbR9PM6S",
  "key11": "39gqWkJkJ8oPJx5pKHqU9zXPpQDmJTRcXJ1a3LvW94qSZ3V2qoeKviSdXn1Qdm4rb1zGcBMPM9JVATkYZL8DmGy6",
  "key12": "gTKf6yL1aFQWZ1vMddiRQ4Eez7nDYaMEDn5itEnHB5zqmh3GgqLYpz4wu2sM3uNWCKJrLz48Br5mgp4dtFs4xgY",
  "key13": "2N4pF83WpmEq5eEuJ2SDfmC6PjAYaiQWamfdWLx6uMRgcxe7eUR6zyND6K9HKNHGB8fopVUZkhHmXtFeb1ZFoSK8",
  "key14": "3jU4tAKh4aKniPEG2ocMBMcob173zL3djnwD7NRbZw9478sixskNEyYgVzoiQ4HzeoAZJ45W7rvjbJsLCZt6pFEY",
  "key15": "6YWhPErXaYMZVmRjmgLqfp3kHCiwkAGBv5s23n8aYKHZqmjGKGhonT8SXLfU3fGTAVAzxaYnUPa5y4nwf24HRFf",
  "key16": "4HHC1ToMHnwgcbW4d8C6kcKmkap4p9wdavkcwViJAQedW8ZwuTfUzUtk1To9VbJtxfwNvEjJP6AXRDEvsJCqEfSb",
  "key17": "51SSawE22JJvXyeoz2eENd112EcijCLjPKALZynfiVXeMGKA5S7V4nKqh1sgTYKRju3gCiVKRNHDsapb5cMjzsbp",
  "key18": "4PCT9shohPfJemSv6Emc7CQG2zpSUT84UGTCFRzuahrQd2AtHGh7CVwpfxuRfa47c86VgNQfvdAjVXJNaTAqNq6d",
  "key19": "5rFGfsHyVrwMTRdcFYx2DRotjutWUb7MHPShoqSn98SjMXqNP1a1Ey2Ei6P6f4RbQJ12kcXm4A3wGYVxhQpNy7ta",
  "key20": "qi33RctM9RFR1sKf1V22pV8imbFLkEe5uZUicZfy4eTA5LE5ZufPgsh7FV8FYtEZMTwXWVT4yfm54TKZkuakug6",
  "key21": "43hx38T7b4qE1DZc77dBKsgRoyqDFw8s6CfFrMa5Ej6NhtQLn3fCEZkTH2xZ4HnfV49juFwsTSSULowS1nVzhjSg",
  "key22": "5C9kZ3wmrqZvuCWQFACw5YjvuR3Vj4rR6kexGccXiwzDsvSAQu9ZVVZfjVzsGQD5Ks7LGXHx7jQht4ykDz3V19ft",
  "key23": "5RDYSeDckbTo2Vv2qEvZrQ7X7RfgE8PhjmRxvVfG6FosZQBScbWYQpuq7ZjsHPEEjhvmr6AqPeaurp3zmPwEkbdr",
  "key24": "2ZPyDgP2KCVW5na6a2YKgqpYv5qeCJPRG8qXSxVNVxLRS5Rr9TxUwYWdWsHis4uCoQ9azW3CtHTgf1ZTPywpK1WE",
  "key25": "2CtF45iBECFJUz5kYZuphQpPXsT6XJ9hEMvB7RrKSaFdFatz7tKAafF4vsyMrFxQjGGhBrM72SwQPUBuSB7Dkm2a",
  "key26": "Hu3YUQBmWf3T9FqVprQB35m8GrhVgiunZLZkaevXapmfCuqNhkdjDZAAAoJCkWKNjyinRRPvYMEmCAbgR2qnGAm",
  "key27": "2UPHNbp9dNh4oAbj2LkEjBezC36gJGTaeeQQwwXw48uY36kABfM52pxVSaVUUxqRq4QUPRB4Dk8JdT77A2Rw415f",
  "key28": "4e4u7ZAyTqYF4KBx89v4eSpXVnhohUFmiLqXeSkpsSikJcoVa4NBcKYQH7SVSAUmtJedY8onaDGCaPR8PEjW9uuB",
  "key29": "42ZZvYbxxQwJwW9kPsWrxWaWsZghzKyFmAJ3gok9VaxCVxmJ7UcYbAV5BJd13ffEZjC4p8yFR7hsSkAc1yTLqAvt",
  "key30": "4p2CJZd5A7QhBjTfus38BakEZmRuPDnTCvENNnJ73fcq96TVpFzzgoYEicTi839zw687ngTW8jbjk28t6prXpcrm",
  "key31": "5GnrzVVTVKg1snjHQHKusihCBwb3uh2yFbeUtTm3TEdJk71LC2EeUauDHYgJHpsVhkWcv2oKDfzpofqYWB432vA5",
  "key32": "4QcBSDqQRPrLZSFXuCJRqfGw53rQcFVjf1wvE1KtkX38heWxt5UB2pgFgL9kxHv8FjggJ4BUMjrXvBKDU5Xu1Tqg",
  "key33": "5jN2T7oivcVNBHHD3VchScY6zi4ruSxhdGCzzKPxC8GaFGkyLdukpWaCdC8Qv5u4ENwBD8WiALGm3NJTKTyVJy6f",
  "key34": "6SqFsh7AV4BbggEk5dzQizK5GLsbpGhKgaVbiDLu5VbFZEDmFTizCX9PDXDUo28tspwF66qk3NLvKyEB5J6HJTi",
  "key35": "xKLJaM9bpPV8EZBXiosiptrg11EGNgiXMaTFe878JkxwABGw8EwvSb65f2E5zMGXNexq7gU4MqPfnRXmQFK9pA6",
  "key36": "M4D3LmnRVusfcnh9SU4bX9Svb3W7MBLb59kaNwjgMLfzwg1mYzL7FC3bSAvqrMMPYpToaLeUshtiMt5obyRmPBF",
  "key37": "3a7aFqStubpqq6kYxXUCLtjrZQjDMyV1DnCn7RA8VsVok5uxSQP5hyfMPVBWqxihYKZk4FxMr2hp9xXTXKXFEGuj",
  "key38": "5gft3j9fnMBgbvcogAoUeMmgyYVSNqC9d6gyEqp9dsuSq9VZfsQDzueR6dSiaqHBhSV44MKaC7Z3M77qKUimYRQh",
  "key39": "2fS3mDpzMLRzueyLwzCTyxGRRpt9n8udVtw8X62HagiFa4BRJrNkAn4Aao5B61N1o714TgC1vxuj8KQmgFRRBPyv",
  "key40": "dh7PZqykKFT5xj2YyNayJDxE6R2oYujTxqRjCBVJmyEgD5G8tJn3moawSnH3PDcw5FtRWmBRYbPpUhxxquFEBJe"
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
