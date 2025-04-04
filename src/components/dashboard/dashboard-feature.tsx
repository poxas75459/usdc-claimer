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
    "pbjrBuEmtnWqcTUmb1wNDLiZziwt2C5kJparsh8PbdWSyRpBqTHARFr7X4ks1X5ojLUKeqKzzPbRi1eeJck6PmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNHYr4sAtcBADqaRJBP197y7oQhTCNMwfUqrSYunc2Wdy4cSwGiuwaqE5pNDPYQLAzdhgiiHVqaXKZctdxqNX2q",
  "key1": "4Ny6aqYd8iJ26Q29kprojgbNG4LKpihegBMan57xAjetUJnXVvY4wYgwTUTpRiGePdkhFKBd1Vm33HFCAjFDzhkW",
  "key2": "STdsZLDc92zJLLPZMuLtEPoCn55fEkiyrNRMpXLaXS3Lk1XhVn8342JYdRoqxqPswuLmdxGLDkseYtZDcJ84v7w",
  "key3": "5ERBJY4pXovSiEdk5BMjHRaF71tx7igS8aCjjbLvJwz6M7oBtMFfCWbFjxAYR3sQPkMoTpMPULXUc3Kv47oKhs6",
  "key4": "4bydENEMLWDKqMtPWtuSkJDRSKsCFNHQnFQVY7wJp1BRRrPWDBLRtxuWwUMPvjmKCiPCRrjLfqqjDUepsM7EcAmu",
  "key5": "5SymkQ23hcRvQbzgmu96iKS7cWiAYRFAjwY32Zp6MyaNpYpEFrTAvnGhn7hoQHF6hgRgzGiej62Sz3SV6bPqbM7x",
  "key6": "2H85o9eAYnYEfD3EdaofS52CAQ9NTBRFgyfZorvS5rnWPwC9vRJyMpk2SeSJhwHjUqUEHz8Fymj6yMAGKAHPkun5",
  "key7": "2CfixPMjRyPViKhhHPYeEnh97kZyoDA4fZ9XTcCgpZFfWe5Fn1wGEhuf6r7vL8prVK8mRdJutMngvdashHppZ1S2",
  "key8": "J1ece3KGjeSk99xXEjRNPJtsdrazNRMoMuaXuycaZ3qULNwZGfMLFTf5rPr9K6QUN6Ft8HzJWiuZyzQe71C2mjU",
  "key9": "5tYGwXYxAQS8Zu8nEdbLmsbj4YbphXKwjJVSmHEEqfRHb7ccr3joiYdGADy33dfRvKkv26XkYrjFgNLzp32yTD21",
  "key10": "DYUxqfo8h7bD8ssXvziatU7bU8DJQNyayBRPeFzEBPhRsPAgmCut4fY1SZk1pzH8GC7hDhFEcQKVGECoSDs7HBi",
  "key11": "58x5tNdpY6p2YTReEFXnjkCWbzCbireXdS66y1GupUHR7tohuSXMAY3eQ4jG3Aob3ZJwN2XNg7GS641wSSsxJFaf",
  "key12": "7pMKQVPe96jGdKvx2PrWkp1TnKm9Fkc98JrQ3V4CbkooYa5TM29TByqCGjUR4abLskGgQBBJ3WSjVBtpgbonGvc",
  "key13": "5xE7WoPFv4eUHX9rxu1draetP6w8Kt17xrm31MFu4Skk8Ddj6mmfYnf2zhdtM9RYHm3jrcjspoEFp6BZ4vtYyqXF",
  "key14": "MB2ZD8zg4K84N8YSXE6UXn9XLx8RdY7oAaVe4TCKVoENn3DVEPygmtQztsYUWQtGG3Jzqjiqnj7Zjq2uXi42seV",
  "key15": "b6HnrhQpy3wQmDZdqbT2QtWeztjjSfG9SaV8t6wPxPP24mfuDsYrUYWWtFoi2XbN58BQ2FjYwVKZQxrV34GjBr8",
  "key16": "59S54WKAS8fiMySjbMmMuLNK26vsSX6e6U7yqTji3MTa8SoZLoHrmN9xvS7VJK9o5TbFB5v8wixjABk3wjsUUPkb",
  "key17": "3YNW6yrwxX3n9Lp3behBi7u9dYByYQt24bw4GZAEpyRLmXLppFVXC1owyXDD2iXbR7QKLGJuQjQiDv8PpQkQiLSE",
  "key18": "3CveEitTvdAERmDQ87gad1cifodfwfnDAun14XNGL7wpNTGvFhedx9H9A1fzvYLGqqAFVRBjpxNaQSLwdiddsSzw",
  "key19": "5pAdeqMbFRbozfAijyqo45j3pnqwVqfY4zrsPzeA4v5VpWteLZ1eBiizYAXCnp8Mpn3TAr2Yrfv7aEw6eySShuv",
  "key20": "3icwumfsNH8U4rFCRZ2PkkLFyo9zcLv91e4rfWo7f7coKgGdwp1WooRbgPZgcdCUc2hJAQXim82rodD67wd5uXtD",
  "key21": "hx5wRMJirVBhb85eeDmkwyKwGUsE9zQZ7AHMaLhEQZCrmGjumui3aJVDYPxkmRLQhcJTj8hRmhY7p8UDprhdkWm",
  "key22": "5HBjmYRkgyESMCwTbbmTYJ8okbTyEfkomrwdgY1uj3MsxaMMfd98xShgVoy4J6FkFufEQHqMfCE4suzRgF6A3xsJ",
  "key23": "5XJjacmJXSgbWC8KftC4W8FjFxVBtur8D8MusGo66p6eGyJPwKxXzPkhBFPDdCTi4X5fXsgBCzKiY4mspmntNyNC",
  "key24": "22nokxc3329QNY9J5N2b2qs1eKdqXgEAGkGAZNbxmaesXP34oJ68r8wMMRHvFmmkNvNiuFKBgjQss7GkhvyQ8TQn",
  "key25": "RgpyNnhKHYisjdtBRiTs5yXcqkdu599y7zgqu3kTmRHhkk42DMrxdvK8GpiRXAdcsAJ8Hitg7Dki2mHR2Medqxo",
  "key26": "43Ptw9cKycxUkZAGvvnU8JUPq26ZpaPNkEb3ok6ttvvZwQk2r2Wswu6vyTKKyvA8soXiBLtrErmix1NMB8Db2FJQ",
  "key27": "tDTmDVsxVHZSC7nTnmf8NTXtTMmwaYrzHTNodbcCRYB53KopbvaynTDnY8wQD1cV3mSWb1Vpxmqb5pjSKFPrXqe",
  "key28": "TwoW9Dnf8Nmv6eLAcun7NebqM4LLpYQK8ZhbWnLEpVAHUWeijpXA7TzP95HLgRBcbhRPV2nR2oUq6oYTx83QAe8",
  "key29": "3N2ErEyavLJ7AbcRambi5omqEMsQz13SHngPRXZvyNvE6p255YhTmg66SW5qdMVdaM1QvCZgEy4SBYo5RoWTWcJr",
  "key30": "2JBgaEE6mGiHc9EkQd5PgKcvm4L6eHmaw5cDqZxVBw3kEdikNBMpzu34SS735j2sRAExfFNyJqdyj6yhDmBvUJEF",
  "key31": "2wUaVh3w6mxvtw1rupLeLind8vvgLbBqpktUjsmsudYTVRP1SA1UtKHwVcfKAQqiCZ4vHePLadPV6j7DjZgfX22b",
  "key32": "4vDF2jCub7iv76JUweKyXcVzCcnp7s7PkGr4aqJc5pgEgxBqWDRTFJRnPG2Aj3ha6Tqax8KA7aH1p4pZTWbxpyKX",
  "key33": "tDEBQUQUZeMeUJPmg6hat2kvuigXsLBWj8ghjhw5CG5PQ1ckJ8e9czmKzypSQgWZY41CK7ScZwgcFPoe5FAF5Y5",
  "key34": "5HGv5QhrrriZRF1R8fyyjwMVnNXaMEW2VbayzkkkXg1dNnbmRQcRhD4rTnZta6kF1tdvyWTUY8xCv7hMMVJjnFSi",
  "key35": "41442WkcU2a33qeMPMkRG5qQcgG823ibj7Q7qE4ibd9Rj9TBmLX2n2pzV8D2q9NmEBaNRY3FVczkkEyaYLVt9tPv"
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
