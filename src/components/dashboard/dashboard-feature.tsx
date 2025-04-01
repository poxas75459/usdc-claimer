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
    "5GYJJYDBgdfxXvNTpRm824DY5NnxwveH71oaTE7Y8EQeCgYWNyAjwhTPBL9nWTVDYYXzYWemRzsf37jihaJfrZW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28CstzuT9g9TQnTTMns19uGQkJAo11HXFT1a8xJSGpn7bcSf3N1ahBDGemS8xnm8fqwqKMovURekFTLgFxeDzA4e",
  "key1": "5aT8Bf88PyLt7hZMFyxGsgxgJpvPtv4FGQEsXuXyZT84iX3bTjhz1JRUqYytnQpzApgE5JhudeVoUDTiKistFBYr",
  "key2": "5LKjUjUSBesQDyFG9YjgDYComZ2YUHSLaN42mChtn4XedetefGcovtjArMmSki9oJfomWktwDDxdGtjnkmhUahQT",
  "key3": "33wS5wJ2rxdc5qE91qZA6vpsKJs1xuqZ1crzQpLKhjxBHof4h2LwxwgKwqTFSzvCtUe6F9kmu9hhorHRTqvNgNRB",
  "key4": "2sV8mZT8dVpwFzcadUP9inoRbirETBUfaPDmNCwtfHd7PjYoftgaMTQQcdPAUwidt8N7UkhVaKV4d39p5AuNp1Y2",
  "key5": "2kiXpCQfB4GDDoFDXzxcV9jGww9jmYjZzVEuwtvxWGuFYoa5eAWW8f1yRouvHRWCuDWfRgNSRjPdcUT4AqHBKwQ3",
  "key6": "4cHTcc1h7zYCt67B9bmXrgjAumukZ2mCwBZewqkzQXX8iyWLmLzKUfS66cLTgFS6s4HXy91u3dcgjDEAJDUx3A3t",
  "key7": "2efXFzHSu4J28F6v2U9vs7Aua3ydYuPYZ3Xh1MyVeNxWYmQuRgpWxrbqFvPgDsZzQpNbBUCV67xkptUHsiti5eVR",
  "key8": "2SiRNj1FQKF8U75i2TRh93FJgJ91eif6CbJGX7CEjNpx62AjSkAsL9Jy96MjJFTXZjqyszjQhNHLThBSnLTgxEFB",
  "key9": "2Ct625N6C439YLCa18J4XAwrafx8pZBTvtV9BjamPJ3hoJ9ertE1VyaqyHuqnKp2boHSZfk39CZqBknAzEWtZbvu",
  "key10": "2ujK6utWnSpjfA8YZVbhoHigB2Yad4wCiVefLEPBWtKKamZRYZnRrxB7uFtj4Wp9ZxUvAnbcZ5rkXp8Seoq2PMUy",
  "key11": "5EcJSnsjfojApq38P8BWiiiKSzPYXBjwUDdzbyJwpj4StmVexb7zx6ghwxtT5Abeu7uEKXiP1vikk3zyqJgqTGBY",
  "key12": "5P1yrUVFhS6zXgsM7Rd15toKRH9bvLddjVFbiYJirgWXgnH5jjqq9W1ha3o95P99GPyuUCN1THaygaxNsQC99xxG",
  "key13": "3wgX7zbByHFS12EsFxY3Q16PuFE99VcySpwJskw5ZenZFRMoWTJQ8dxEaQJcsBogrvpoknXMxmJJAjY273Wi4gua",
  "key14": "CwXeN59Ri9tfxVSSkuDVmpKA6Z3EBBpvYnBugDHb3uXRUniTxawmgQn3QjpHbqyq1FyR3n3VWNdNVBFV3AGDG3W",
  "key15": "65ptLxQL7QLeYpcZVizR6TPTe3dg9odgiuR8H34XkQJi48g5hGvwK3dMKN5kJQ7C5U9gLqs6RX7NmUgP4rbBTtUy",
  "key16": "4XvRzvQbHree5BEMqc9gSP1eXruu19HUy4kN1Cfiit2fKG2Un2mjMkDJna1MSedEdC61xBztKFBddoicQ6nkqH6W",
  "key17": "3uqkc375hQxLar3YKLt6UMQLk4pE9Fo2TMLTfM8VygBpnVjoNgjV4bfLGWb3y3n3fFzG7ytxmNNUjnEgnfC4v6e8",
  "key18": "5Kdif5MraCbkcim2WLUmTChUGBW2F913AKv9hv8WKu2DjtF848Q6JjcNkZVnznLARZ53BZ9s3WxJ7WgtX3mAAEzJ",
  "key19": "2JxJNUPwqhx55BFzg4f5QgB6JJXaXwn2n7DtbaSZ7nh5gV4t87rT64VWygLvrGgRTDDHgZkMskzWxP4MNkR8c8vp",
  "key20": "3Qt4tyJXSEGHZ8185MJQRkHe77pGu7h64tYVZKCQFVkczKN2C6Y2LoAEoB6FVsisT8WmPF2VWhUyVg5Ro6VvU446",
  "key21": "5zupeKKER5Sa1tkN4F49Pz5WyAUEgLHbYmNiNVqB7WrZoNLGV6z1UoDqAZzcidyaCnYWV6jZm2t7P7L8wV4aN6sh",
  "key22": "4mypboNcaTmKqzJQQ394z58excmAZSDMurqNnCjqeLpcWZJPgTgDmSDy8BzEMcGMdjdS7zJ4Pn8EBWR3YHbytjoY",
  "key23": "54zgyqPVKU7kEdpJaMEaRDTy1TkQsL9TawEMTWitZDdGuWLr5cxqu7mXt7gGRsCnzJZx3MbeMz2MHNNV8cA358Dw",
  "key24": "3cxthKmdF5na2fLsPM9gVjW23zrFzrJ8Hz3eVe5rVHkNpVfw5mAqBWkHDXoAHUenFG85EZhrLjHtoqCGv3QKG2mV",
  "key25": "3dGYAp8prdRoLBUZ9qTHAxfFH1iLWn5WuwH6JBmMeCo4cgVen7yC4Zwg97KBqfcNFuB6VnrNkaF3Pzw6YrRdeLM4",
  "key26": "4T1cNvHWgo5ikzUnvPpJsxo1VvGwPvSmTp6QGhAXqEBLCK7tm5od4rwPSCQxVLMwByufZgjNRskXa5fzhqT74nVY",
  "key27": "Jpsfsn2vtfkYVZ8d6rWZbzLWubw3T1Mo9ykfQgXvUWwH2kNR4EgLTmocG7y9QHcrFtnwxp5VuG3iSaiWJY9EScQ",
  "key28": "52pneMcVz6Xh5Z72u1YzMZfqoHqFw33KLJH33qcoHkKHETUF9LsajEzadSuV4TjCgaB1CCYruE2M7N9t5BdEdWxg",
  "key29": "2eNG3kSHUhG4BUqPvsWrRoLyF8AzfVfoB6RuA8xHinwVEVCHcMN5X5naLUsXCsnpxFijQaTJPoAQfMb3QTZY2GP2",
  "key30": "5u61yCDvB6czikUNoLJD3EupyZgvMo5677oVgVCwPH55WhRRwufCknpigMhWfhpnVzohzi3y3FJbvkjHYrsaiGji",
  "key31": "3UzwRhESdmndXS8Az8dTFBZX8Ncu5GMpfN1Ek9AefzYqtooHGhSs9t36N24Y53pYgQKtD6qcmHAsu1L3pqSuJsva",
  "key32": "jM9NMk6jnRXGQP4Jm2nUVFVdQMnZLExuTth3kbCoaTvd2LTz8ikhZtUwemrb71JRCSjLoKN35jt1buG4zYo9hMu",
  "key33": "4qqUYv9t4sUBg8QcB1y4nDhrHcmBYTNdeCPEgxeM2fZTiduY8kzxbsj6sjKnkVrycFDDkzJHkQQ6hQZQt4nKmDLv",
  "key34": "5qECmef62eT6wrq9yAL3iqKGxddmtHr1BUFCEqD18ytpyZgggi6jjkG8dmYATktcVTptTjV1hFnKxpG4zBqHsXTK",
  "key35": "5jVUsNqLbJHq8Hw7WuqruUNnc4fQcPNJv3g6UE6f67ULDrDqPwZbqrHUqnHvEBnQmvrp37nNNEoo3XRLDJE3ozBo",
  "key36": "rfN2wFvPsGdzD4ATeMravde3GifGhbqH8ok3MHxMsiBk8sHkxR73xrG2dWwvkz2jM95oDE3Xw2Ek3kAfEcJFTBF",
  "key37": "4jrwZ4oekj3XbrWcB2gx1sMnYuqYgknyXxCS3SQFzmvcdEg96fqVyQhpaEuRE3pvQd27HfLDSpC7F3FtYsEPYuqB",
  "key38": "3RUVUMsVU5TcQtH9751hPf9nDgFPycTPY9KuuLrPkLgtT9ffBmS1v5DXGdrTU1LxhEih6pesHrKqnfqjjpiFmQ13",
  "key39": "SBhMgkuQdhAKzUafVMWUCrZwgyhGdMNeuY6sUrvxs3c3iWY2Nt7RM8ySYmdC6PjzSmbhcmr9XdJPKpq6dGW8Ayy",
  "key40": "3D9rr7FL8bYfkxj1vRq7W2He67knufJ7KrPK4pGXz1MEDDUuNfsGS7fmrdcYSye552e1e2wPFxJNKJMx6aiJjGdT",
  "key41": "4szBop2gn7AuNBw6Zv3kH6hkXUR1HRo8FFEPc8eWHqo8RFcwLcELz3k9G6q4ih8rPGA5cx39etYwBT1b22HsqAQH",
  "key42": "5G8rtdDv68PEAuAJ47cC3u1Dw99zUGgozZ2KbhLXq62MKPcpHahsVxUux6Ni3jxr7svqrSjBzdfFhB5UrcJGc6xL",
  "key43": "4NGuA8sZHEZzhgFHURFyvW6mb1FveQwvJq6B1Nys9Vg1nJHqwe4WFCujujjq7sYmAe1e7csv11Tf9h27W5sDc83z",
  "key44": "2QPwEfpyEpB5dAM859hExGiUP8GomDPqTMrLHqvUVCU1FGyjzosAwWTQRMVjjq7g9SMfdtDeeu8FeHKxrXR9uWFi",
  "key45": "5RsQY3FZRGgXHuFEDqH85oZAug8gpZXLjdjNP8Cdha8wLrr5368GHGCVJk6rwXMt6EEBzWBcEzvNVNvHDJf4gbEY",
  "key46": "3m559p8QNkEirowu3GZJMLrAYQ2ib9M4Dc7d5PYXikhtMQPc989oFdn5qW7QHWPcnRvQKTNerXseVZLqY7wqouS5",
  "key47": "4njPzBTEzNvZZBATvRwya831DJARzwhAUawnN1cjP36hQYqFeE2rWTo6cHFs4qaCs9WN6BJ3kziDCKsd1jzQkros",
  "key48": "3p8UV7Sofv9Jeh9oKgWVQwDhGMcEPgFgwvtzHepM48TFkyAEuJ1Pi9Lu7NyS9ePxP3wDzHPTVwUGgteZWsPMrGzv",
  "key49": "DF16ATQ8mzsRn4b6D2k2L8bHA8qjCQD21AxW9QTteW9YP4FEDcxB6x4MeNc6djkbyPsiAzvT4UeJ7ggtCfP7TB2"
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
