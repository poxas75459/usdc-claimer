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
    "4rQ6wxG5SBEFJAx7msAM1uByHAyXHQz89Bee7o5QZggzdVPqTdHYcfZbfr5XYjdjq3YZTdGEGFSjhFVj9QVVjHEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53qMsdRomSZ7aAuunc55krNhPiufnC2Coy7dMqv9MCADTCVLmxsfwM1viCeyvR1DgQ6DfVXk3AAmCsSmy9wtAYsQ",
  "key1": "5aTxq19iPj9eLDQ4uhFR49D9W9YRsFuoM9WuKsMy6gdxa6uJTJkDaXBD8PDtBfjgWCJmBXK7GWDZnQfX6bqfiFXs",
  "key2": "5pgsKCasqs27NZuDzNH96kKXkumWoM2w4RTRWvwsHZc4hmkXNsBdWwnAxxxrAm9DnAL5pHdZR6UuQFNADxFBPbu8",
  "key3": "5MyswfkbBmJGsrmFcaeiGhPddbttuYHzJabBN8boAs5xpi7oQ6cWb6MPkvYUNh2SGCtTEexks3qXdX7sHpbmX7ua",
  "key4": "3BXruBFe2FBkJSdDAAfMwAECkqtscAVEybeUa6YKvfq8YEuraEgPb7P8yUcxifFoz2nBZqnZSafgLdmiGK5HUipx",
  "key5": "3tQFKsyX9CQmYb21HTi58XL1qiJdDZVJJw513BBfWDDt2aQLPMdFFN1FbeV7FZqVCcRhdikCqDi9bmP6UCcp998x",
  "key6": "3Gz2RZjZiTGXZRZeBDhkdzwr12iotwVSNSu1qCbjAGPqoejcgd5uPrw2cGeQjbGixCNcS9BNmsutAWFH4z5VwJwS",
  "key7": "4NmfgxcVGw2Sart7Ydtv8cJRVh5snUoQfYhPn4HPmwChNPbbtK6NAFrqMUAxteVVLaSrwrDqh4cM3J9Dy3uP5LRA",
  "key8": "Z2oshicPFVKMAcT2oWLtU66FogB2ThDwxFUUj6A2Zq7KZU3ynXphutXEgGnduXvVYUQjSJp1cKaJrQhx453KTqZ",
  "key9": "4okZsxwhbXVgJEUxAebx8GFFywymAFNtt3fr5pxzVQtHguSQ4pqRJsv647SxcNpWiFJGwQQbnfg4zZRU4DVZuQ4J",
  "key10": "3aeyqS4YKVHhwK9eLKEGdN4jrdW6EV6HExKwcdRVFD1bJmcNv7zjXWuJgBquUVr2T3k9DBPRPmFCVpt2SL4eqZMN",
  "key11": "5nFN1q95yNDDDtUNfWNMzNGJ7Ev9axF26gsssZtGgBnwCmGdjGshkMqhdeJxL1QNGcRfAYu6nc8jJazSVzCLgePo",
  "key12": "5zbhBqdBZW7F4TpaGASzPsrz6mrVQ4Vd58Rg2zPiLqksYKD6DP687q5RDWgZ3ztTBXKqPh6Ftu57UV5RtFk9nafR",
  "key13": "CFiqTJ8qhoJMLPHYyTHn4DXCYqid6br2w21CDWKRwnzFX4PDGwExPajbknGktUfoFrccAgsckeMmyXdYgGTM9a5",
  "key14": "4vCwzuoJScJd7NpFprYVanjYacUjN9T1rfU9KtCd6KQznXdK4K2vvWnNvNR2Gcwe8foriqmBpyidTBRtvB8fXe28",
  "key15": "211Srxi9CJoLJJyhc9GUFthJSmPutAs5m1CUf2heZAFw3ov9ks8v9f5kEqoqTd8QuTVQcev2gzWU577zib25Q9Kd",
  "key16": "2gykuggqzFgNugxbKf5wPsRaCD8JqYE5wQKSvv7M7NWNkHdZRXR1PWz1tQMc12Nw2fubbRj349MumeThM2v4XrzK",
  "key17": "2UBkXpVGfic8Y5txyzvTrELKm6CzjNFxVF5yhjNemBeDmQgyxriKhh4iKpMnXABqkxVaRRjk3C16cQQZojkxmTga",
  "key18": "5RAuivpg4ZD35PaL8G2Uaxhyg2p734yWbyeVH6wWQ8kWam68JkkMxaGnjNBJNw8qeeXkvuixX9DiE4LJcmGZMtzS",
  "key19": "2XUoPPN3VCax3LqYTMgCTeYdZR88ABqyYtNP8xcBoSGDvcDoR4MCiVL8AsTXJJptx3om3mGshRdXEhviLt7KV2ob",
  "key20": "5trCVRHpQLcKxNYEy8bERBtCkH8uq4ZgL2Pnjnzc7AmSvqJBgoXH5GNnawbCp9xL8n4ykMvJsGG5oMgQSN23JGY8",
  "key21": "2qgiEmuFz9Z9Hd8YN9VhPBhgwDcCuhYvqp52KG34vihvBpxgoYUKxKPg3J62fpQz9JF46Cpt13qLr7k8xGvdpaW",
  "key22": "881J6Y8ocEuDv2smHKJ1BZTtmLVKogimsE31wQ8iAiuvx4PQGdxgVqD7Tpu4trxy1Z9vJk2897FeXwBkhceyY41",
  "key23": "3NrwH1FB1GRxaRQ5zUgDVPTrxNA5FFyyeKTZDcGXf25L5kJ73ibSVda4kztkCnYoz5n27Ry6n2gBJxQyPPSbqMLS",
  "key24": "cR3mARhJ537dEoxmJ9vkdwwuwaCiaMFyFs3m6QqTBF7m6LwKketPFuRH1Fzm1aKnpmRydyKhWz21VSz82utqGaJ",
  "key25": "5TrW2LxQ2LoYzgN7prxJB3zKzMAvMk9EjttYN95cETZcUfNshZTfWjRckrHJth7PRbvhnE5SioGcMcD6SB2FhgGp",
  "key26": "3wVvhohXnMi4bt18nEaa3L8VebQuMBKapCDTwVrEag3ANEsXaKjxEaCnG7shYwYLxayY6ch57KPnE8EqBkcA7YNQ",
  "key27": "5rvpmhx3kixsdARCr1oFrgCoiFytCsBwiPeEC1cNs8NPjkxvBwHTW5ABbGk4Q6rgHjvEuU5KvFiGPiGmgdm5Gsg8",
  "key28": "3TfnCuEovGBujNcDbsfqmRZjYKtEdhwrukUndtK2TyE2ku2Jo4QpyBQftH9jpsPaoi8eZXY7ug9bkFj12xbuz66F",
  "key29": "2rCKrzryYNL79ku8b6PdN7idd1gRUbRsqvTWFtAGgBqjSW3qmt4PtMt8uvwyCpuVjHiJCPFvUzMkvSsCxdKghKiA",
  "key30": "5daLP67sJ8cN2k688SbmbXcPevJ23FE6q3oiFSCU4fHWLE4J8ZSbzbWo2ZQMZNs4cJrHm6xLV2xEyofNwe5NdH97",
  "key31": "xchgq133UqZehHViHG3RUUwTzWiDmH9ttnHvkdAxbHAYWPRSJBoXEWgKQTTo9TbudJeGGMw2PzJSm4sD7UVL69p",
  "key32": "553yGdc3xiSvfEdZfNFK9CoiRHe3f9QhZNVvYFMHFadtgGB4s5EPAhjkt8GnwpTYY5QRAqxeVuLG6H2LDcgXwkrm",
  "key33": "2rYUzDrbobg2PJpDBYu9XN2L7MYDWTa1rAjAQZyB6NgXmKS25QXPy9Cr5yVqUuTU5rg8U3VxqHA5tCLooFQeXGGo",
  "key34": "991Yb2CByHLpLxSnBMT1zRD9uDHopWdSG5VLEzbQ24T8mayypxpjL82KJZVDDw6bobUTwDRywhPqHTXUbukhRGs",
  "key35": "tbxJWuxXZwvKjVQpdfQgnXtTUvckafxXH8oDaVbxJPBkALwU3y78ULAKkaH2Uyazi991Rzz9AgcpKFvipWDFUPe",
  "key36": "3MR4ysezE95pq52u1Cazwmg2VXGnwXk6nWPEuTu8HmQb3XMxCi1xbiRohcApArrTtMLcF18qRuQUZgYSogvyRAPS",
  "key37": "385BavV2FZT4oEdnBtMY4ZtmkeAqcUTYqD5XsHGHmTACZS51qJb7zsDRgBbyXbQtqH9s9EwsZfkgAofkaTMamBBi",
  "key38": "so6AAc7PivmQyGKHvpJdJohTxyce3U7HcJHTVCaL1e9AMuAeEDiUF9hZPFPpKRUyxm3v7nPz2i7ioBBBSEzoE5v",
  "key39": "4cdU5UJwLk1jwjHBk41dEn4BqeKHU9c3NaL7WEZYu5vsmTRw6NDxqEaSx55ScbkMTqR6GYkMPhm5VFdRXLcjL6Jo",
  "key40": "5vjAEv5jzxZeskH94skZyPFMjRJf9LtKGLq63QC53RN8P4Case9oogFqk74jKyMDJMzr23wAmLHynDKYarkMKRfD",
  "key41": "464NX9eJuKibiRBSMYJLzj2geYRKuZMXxw3fTkGyzNfGn6zBjn27GALZSJmELits59EAjTjxJbXL7pG5UQirciia",
  "key42": "6533bGEBCzwT5ZYu3VAPd1BUBG8oX4zHA5jdLZDx9VofbzPE2M6YrSSHHnsqf5U5pBzAeg5y8hPe1CvEb6nxzs5S"
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
