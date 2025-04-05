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
    "4U48phZBk7GUioAyBtUeXtvp8tAMD1yHEoDQjEryVZr6bM7DjsmPknXy77TNahbQBpmQJzprW29t6Fxgvw5RTBx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WwLA1FKaQhnVYgZTSg1uVHYbCUsJE31hMUi4h4oofnVZGCCTza5uoQq1QkDH7UNAtJQ6Z4E4ArfgPGDx4bU7tPs",
  "key1": "hjqNJW3jRJPcxtLvL2nqdsZv7Q9SRvqfB8zD6Jg2GLkWJpNZCNhaAxjDh28hw7GmpGH47tYFArZgsKdPDaxbbMG",
  "key2": "6KAFbD9UAs8Qtyowbnrf3BYrESxZdQi3JwzpPjAa2efk6sJW3NXGqxZj6bs9Y8QmczAKasp4cx9yRWCVfxFouQs",
  "key3": "4ab84yLPgULFgngkwkVCpSKGzyGqkwaqzauK2WdtX8zxenH2bnd2LeEF5NDfJaJK5PTywW7qDgwBGwyrdaSgUAu6",
  "key4": "2VGWKL7mpvVSWMSXcb5GzAn8W3tzqSbVTH6MUmzNpFzvpMwFCARiHt5C41tQk6PWmAovmQp5CEfxhxrTNce25T2F",
  "key5": "4JzAbpgKH5SA1gUvCgNFfHHtEZVpVFv4jRQtUzeP6VdAwNNz4Qj4xjh4fPzJK4vdw56Ey1FuZGiLeYdmcgyck55F",
  "key6": "5ddbLRmuEWQSWGCpKA5ytp57zjMoxBAmWZ6NprSvLdyo6pQLNKd7nfN9yF7humsfWVEm7RJHRdk1SokVt4PDDV1W",
  "key7": "3oNpJEgY1V1YqnsfUAtEEz61toUha1DdQ7YYMMnQk1vXPgvRHcsYTgBC59eZNYr5koWXgrbRTysabjkUFfWf2ojM",
  "key8": "3XBHFm728WBweVGKRG7oS9VMJQ6f5eTbKEqB3omsupKRyjHn933CiC5st5gVhk1BRjKQfwPpbcRQeewpULTQRwrm",
  "key9": "2qVmCNTvmFMVrxPZKqHK21NExX3U1MmWS1KfLWH2XH23QfTAH4CtMbkCJ6ZT4RyDm9fWumWK8RWau8EvkoDkfBK",
  "key10": "2RcakU68sf7KCaYfeTuyNKCUKXfwS3yuXaxm6phLqqD3jUjheUCmuPMSmWtNyC1GDUJ5Q6agfQS5YdqZ3y8g9iti",
  "key11": "4XB5ihC1y5oEvUwVbMS3csHNDXQSDUZF654dLGDpCoQnjywWwJTMk7pogCvZb6qq6MRJBk24DoyvQ7UNgcvYhD4P",
  "key12": "3cFemxfmU1B418rnCPVM3Q85vZijgxf4JaA6XeJe7vosb45Dsrdw6qM5TM7Rr1jhWbNrxpF1PWWotF62CCjahvtT",
  "key13": "3Kfh5ZAoRjrWsGUzRJCoQZJdTyYmL5CiHZPLFBJKEdKiAQjnfcvhXcaJZDXh6249v9f6MKkQKn2nmwhnJHtJtd7W",
  "key14": "2PTxTzEmJ6TuNYGjTkb2v4ng3Xk5E5gXqxQvSoppkGJa11dDZF4ytRTbnX5ocB7nx7FaLZutN4DncFKuzNj5mrHx",
  "key15": "5E9DWfk6q33h46uNX3rVjL98EpfhHj1n3YdbPhJ2eFLUKGTECpxLAQKdgEJeXj3Ua7QZDqA1cuacsu19FaNQZSec",
  "key16": "3wR8v3gG51iuzDaSeTRNx9WRgEmqEKhav8FrWcisRh8ncM52z4ixmP5r2VptdEq9WZqvKETdSUp8tskp6LXMqztm",
  "key17": "2T5U7Jnnp8SPSxdu86UB8Mwxq1naPmVE7G3MR8jXB8GxfPojrXCSkBbGC9JwGJC7YRWfbzF2F8UvCnBJyv5MsRw2",
  "key18": "2o92xRpC5vqjrehkWEmFL6V5hFA35YWH7D3vaA5n6qYuduwBPqZBwwAr8fp5Sq2pUhMJE32A4yqDdLAj2efPEiPP",
  "key19": "64TGzoidvCStbVMMLmXZd6pZadjwC47wTApmiyJ9mYqroGu89LY1fj5NxVe2JwRUUjtTV1EpsLqNJoTMkmu1Tap5",
  "key20": "5WccBPmqtaZgMJJFyy9XW1zwer25A2aPnVhHypsDcbq6voK7gj9Na9tKHbZxfSqLDnpf6JH1Us9o7kWzAyxB7z1Y",
  "key21": "2JygMyt2MwXD2TgMmwbt1rzrhWAGwSFSD7K4ny2CUaE6t8zXuPRzGoEHSCfELsTsJRwX21GhPY88T379g6azWLHB",
  "key22": "3bhtWvQvr5TbcXQYbrHoZF6w4519qeBGvkwEHtrrPu3xNwXL2kayWtwpuXbszbqGzT6qGsirPJc9wpqXwXQxw64g",
  "key23": "4rx84xd3tyxbNzCUpBHPqFWPPzur7CHGK85VDjAjBz8h1JVkziiDvVw7mPqJxgYbTrxKH3Rng5P2zxM2gF6jNxUu",
  "key24": "5ZvpFguYRBtTdDGa4wL5hM4xQ1Xc8cjfswmQMPdHpBEpH8xEDteo3Etg7Q6CmHJM1pn9nHXpgjF6ZRBnQs2QQAWE",
  "key25": "3FsiMbo2wTgmmgb51drCoGpoEfMWq2UZdfAJKvKTUY2DMuvyqSZFQGfeTghvtcCYmApTyC3Y9ythBoWjA8xt99xp",
  "key26": "5cqRqiTypEAj8wqMtKEPmty5SfjXN3xfwJTrNgkDpde7xQfuAnRWv37tz9QnaEbBczExxn9dTcLFiRMUU4UW2smL",
  "key27": "5dDS2kyxyMbh7tisJiKXiRmSauM7VomxDTBaAHSqZ9X8zDDVTDzCHPwsE4631wzd5niJnEVtZQ4QahczcCmLWr4h",
  "key28": "4HhRnZU7uGAoNKNPvnSLcwKozN4LJbrbMcUhmtct7vYPkNX69uaKkU8S3Ks5LmGfR7CUYy92gxJ72s7kEMgg2BJD",
  "key29": "3rCgv7JsEmG9KKTdwNNkQKJsu9B7iFBjkFbjBXCYpcic2LLVxsnEWv1gUDKLDPMiNBkcVDosMMfMzBE8sA5zkvrd",
  "key30": "3bYJHqJCK2xp823h8x9wjd3ErdN5mC7CEmJaPSwjkzwtDxWYFZidkpeVda4pJTUNNBizCjxjRmzMT34MusCF1119",
  "key31": "3BCFq7wYes6JQ55KWN2GuD4KB9DRKtQjsJovpwYWwunm4sxQgWH1NKbVALNHMsges7XA5o54ViDpq49y469uLbCp",
  "key32": "2UDA5Pye3DdJ7mp3nnhBNKRL975DWr3NgLwbr22HsVeDcTqDbevZoMSwhyMqVtjFYNhX3Z98sUoE3dA21A961T3W",
  "key33": "3sfLgjiqrFPkcdW6w2Cx4jeSnN7WTd9QSDFz22UxpPUN4gWMF3CMREcJB4Bb5869RuBMTtQehf8shfK11q9SDZWU",
  "key34": "3tNcUPzG3Kj8aEoghHz7C9nXWtU5sQgWuGQy4yJCRSUuzfzsapi7o3Ly4ZkpQfrYK2zw9F7ZmWh8gzRWRdDDsnkV",
  "key35": "nYYdzzxDTM3GL8v9twa9XctNDRSsftVCPih5rL7Zo6VB9dxUQBL2QN41ihE8kneQfkZWPEkFWYGnmervRKAgxYn",
  "key36": "45XMxaHCD4ghZ1htoTbQ8BG28f24vPU6HE1RVi2Sj4RPsqsfdSMzym612uF5jtkXjnBQmb9Qte3ySk3KHq845u2x"
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
