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
    "51dWrNHex1wSmucJzBaTPSuHi26UnoGZhdJjR2p11NSB25mRY7KGNvppd8NJP8v3NbzzLWnwBeTxafx4oMpWNS3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FrReCaW1gCtxUKeCBCXWiRzqyWDs4VqnDHpa84Qokdj6QgwEffDEgfKnwM5uyNksqVxeCWxnwxAmxGkieudxcoS",
  "key1": "3zkkhSTpy6GsA5eAXtp2FtGUk4wvfZK4xweb2YNihrf5prBL4GHuU8EzKxbFJTebWtyop6CUDE3VkmKH6cZ5nZQ7",
  "key2": "3eryZ6dRRg3QDAEr6KeqhXmyqWartGubWMHMCDCSHFRB7rnyAiH1p5TbYh7PK2Zyd51URJY1zHDzgSzwe5DJWpfk",
  "key3": "B9PbEPinw4oSntrTBK2qrW1fzXjaou31pVZpp8zrGUTjKBmhvmr3jjrYTWh1PEsM8Nd67JE7VnRQci87rPvEoS3",
  "key4": "4zhoCfjDKAtmPSXzyZvgwPoPAQDQcTQiXbdiKQtn4e4tGDbbGpohXi3vTjMEBmj76DcAk9eTmHiSkAbbEJeGAJz9",
  "key5": "kFT7TYDVg8n7c7MGwAE5g8SFWgexNw6MTTv3fQzdTSKeSoJbq39chFQEW4kXyGopLAQMXHC8bD9gpmggysnUbSL",
  "key6": "22Bq1rMPJ6u3YEufEtXAXx6g7Dbfg7dJn5jvYC2M6YF6FUhPNibFMMDYGuu87RxyGkoL7s87keSZT833WzCFUxbz",
  "key7": "XFHokRSdLo35RpiKoffh7FpRn9gVXZ3VzfmYfyUuLqwUxzA7RRyTkCAuAc3nzRfzenTbbYTbw3dcrLfGGE9cC6t",
  "key8": "36MorxkRV4hqtMDZ2ZX3NRzjV9b21dvaUuHdYRbKkdTewCHwz3FVFgTtEJTDs28jeWxMdE87uhVh1MX2gu8ghqNS",
  "key9": "5rtUSREkctJpxLf9VKgJk71YzbX1kWFCFA7hAXF2sK6QQzVAjivLMX3sNktPyhrFT9vEyoweRf1GZqPUwMuxgX8r",
  "key10": "4CRxmoD4847ukMt8fYwqR5s5BmhZMUyUuRavgZ9pdDToML4gMNrv5vkEEVBWmJH5qrbMDpkjWynZhkAhjZF6Ft7x",
  "key11": "44umqojwtxWAwRCEfxcRHk7zicNBHYKxn6E8Sh6LGGMNCL1aD1t8ntZzhgmPGN6dkufaPF8nfdvg5DRqW3JoH18v",
  "key12": "26bY8FDdp9yLNioYhRddVKqDYkDFBbf6HAjjnxah1JxXa5w3xg8LhahBq6RwjzPghp7GsykmphpEFCUtVAodSGEK",
  "key13": "5H5EADxqaGsti367rD8YadCXB4p5BLNrZpMzo5j54Q27g6hdvpsu9KyBMSrQxRrUwsWtqK676RQzjdeQR3bRtoc3",
  "key14": "gEzBGcRNsxKb62FAgztZC4rc4PRAR3HE8tihTn9wb66Tt3QdHBaKtYCiLA7iq4DftbNVQB2piphcvVhgekQmqmh",
  "key15": "4symUzPeDQmyoamuJiVEgRJHGiqwZf4ZW9Aka5EXixsuCZSbdv5CcEWWkWK1rRCis6Za6j5ZZRgWkWk2uoenHxfh",
  "key16": "2QDqAEdGGNAeQJS81rRTWXnMx3FEeqFskXFEtBREpupuPqibpiBQZoaTKRiS1NJ3GqJ8YJvNPD9Szi9FSjbRPno8",
  "key17": "64bBP3DThW5YyDEZ7TepNBZTJf8YzN8UmRGLQTmoWQTmybH8acL15ye87fUk1sfbJ2zWTTShsv5dA2XGzxjcmtZa",
  "key18": "4QmvznjdsXkAD6SqrWE8jBgDFBuWxcn9NJ4xtRwRbNpUdEYb69ZKSqRdop1QmehPYFSiZh8haruzAoPjdTYKLm28",
  "key19": "2Cyy7aFhX5nYKmhxzgcXuJvgYybrEdUqG9FSVAPySzv8hNHVF8sHSTaYcX3YXx8ZcaJvjdGCP7iWqNL3oYeKXWLF",
  "key20": "48MzvNaQEGNpCXeLvTBURhBxjLmnX95xYmPXM9w7vxz7AEZC6VbJAf8ni2kBeADwyKARMkd3MpW6ZZmfExe6BLiX",
  "key21": "2nTgQnqk33kDnJuyTDd85TKk23tPSJVVzxAgTWFVgpJJ8Sw5bMVoEoSmC7B5W6U8SNmwvVUtTU1UooHG3HhKNPf3",
  "key22": "3XXSMKqEzzJ1eWp69Tqo8B9W8SwtSNG8kMAZUkfXLJXtYhWLF6A7sw5LCH8DwPLC6d1fvfwcYPgj9bTQ28hMzTwT",
  "key23": "2ooU438pcnx8WTUP5rzB72rhVTEycHiocQLfYcDhZ5QNd4aXR4RPd9n2KCypFroNtTSnnQbdscKhRGjBh136tU5r",
  "key24": "4udQPkmxe9XwRuarxf3SquUAhbeEGX8Ze7P6jojoLjcaRtY6Ynriw9BhPd5vxSDp2CYKFFm9VnizQum933XoubU3",
  "key25": "3bns3EgsGBNQqAbiT2zNmEp4jc22ncgS3cC96ExWiLqoiopsULCankYLrLh9Gw8boXktkHynrD8yS5SbGgUiF494",
  "key26": "2rJkzypx8w21pyFAX4STF3ULenuMkjGTki3FRYuCrm9qQ42Z6VRnTtbZkowxxeTWbe9oVQcZbJfXf9uzpFad6Hqd",
  "key27": "4SthcP7XDZ718V5yhDcbRFJX5AGjAoLGoKyKNtbpK3L61nzykuDfjQjfUcN4AsRsie1H1UTtTJwXb1vXhdxBrtsH",
  "key28": "kYDhYjZUcaiNtbLtdcQwM7uHC4btNjsm8LtohbnTHYeH7F2o2otGGNGtAij9MkgRBqmmSXF5aTQz6FXXCDUuQx6",
  "key29": "5b2xCZyrG94npcj9ZxNofsRqwSJoSLALpiCC13h7jx4zBob4rRwGpSWnVJCMQJSUB5M7E2smyTx7ASWAqwFN1oX4",
  "key30": "3iE7v8knePEMUiSZi9kBm8UnXCZFkjfyb2ZTQeXbcGg1scEunWA7b1iNiZATpkc4t3gFdPcxDkzpgesM28vG6EbC",
  "key31": "5sv8wXwT9WEi862hJREXX7JTvxxBT2eXCUf9GBmFqy9bDaMkCnWN5PoLzcdRWiwQ27bxAEpForBhPTmS2n9hqc9z",
  "key32": "65H3keuWFMsozqrq1xsg1zXqhViCNkwVJhsk6Y2WJzvrjQCXjq6ENzEtRh3Znvr7RCqkkgueFr1wCHNM9TF9C5C3",
  "key33": "2jLbgJFv32rUk7X9Gcdk1pijjVSGu5o5ngLYdBoMsGcjDbobg3xNbNThsiJGq1dsZqk3juZkNN8PdNvqdqmxnzsu",
  "key34": "uvjhbPr8zicwdxG5R7xabeqR1Jp8dx4yRh3uno4GKyQJPDbnF31YcfmBLE7ch6E4g8b4XyCr5H6WAQpDjcgviQs",
  "key35": "dXpG2ojHfC5vJ1GDqMJA1AWgvxEnagxWKVAqjQwyBF5DEFeK5hp3XoPMpR5GwRsDXa9bqa9aynuUH3Vymw6wYCD",
  "key36": "3goLC7tLfCM36z3HXFyjnVgfR1rNGL6LCQ1pkDqYQqnaAdeD2ciFGc2CCxgt4PCiRU6CUXxx5Yw5iERfcQ3HW86k",
  "key37": "5syMsgYjD8XFPphuEk3sWCBHHa9ME6eij4t68QDPdbfw6cesuC3qQUgyZ18uvMx97VvnFsxhs1ZgrHpi9mCKcj1j",
  "key38": "3gYJ3kABih4HkSHZLSzQrr1KyAYEWWPsx5GPaepsaXyRKJp685Zitwrg3M7H4ayayyE8THS2AKYb7ugMYkwunLk6",
  "key39": "3NtY4QxX3FVARDJ1f77w5iFPQJ37aAjif8UPLk5bPNWqpyJ7waCaqPZvpe8jjAeyCDcBynyn2D3pJRx5RY3ExYVs",
  "key40": "4Fcn6F9xF8ED857ywbmWUttPJdDkjBiNeYy3VAgFUWJGTK8vKN4bm8T2wdcBp6dkPErvDQsFZwboYVyqDNfXyfeU",
  "key41": "5GR1kvxU4mfywxkr4PqVyqmpxEwULkcb3RT8VQyMNYbqj11xassLzTdvP5HXwqT9KL114wqqWDdZyPa7LJ4NbTna",
  "key42": "2FrLRPZjXekQWLbgtPUw1uscWaSJG7cmCqCx4uEN38wdhiiXhhBZinQxUTD8FL9FVLp2VJZ2ZWWxCP2y24RqyuBM",
  "key43": "53Bc3wwppb2SHkNCYUec3xx8BVitvu3DtRCa17chdx8LexwnVr59Erm8Diwt8q4CBSfGrGR546neXn4giehmJUvP",
  "key44": "37n2AbU1Q5TQkjL6abNWoxBb3ASeHP75CBs6BiqdsEcx29E7tLATaLqrWNkkDbfjw7NPkZGuK6LmchUJ3doBjC23",
  "key45": "2jerqLdN4QLsueDQ7gKw4Uj7iuwXyRH1twYkMbt1bfinVBJAtCV43TSLPcWzBcKdpco2rtet8ZLDgPXpDcY8oMCP",
  "key46": "4JVwRb85DuPDZa5SWSQAMptRTCpyWNiJg8qUA8ohqx7GMTq986HCTp45xy7xFiArXpmiJA7tk7gjWV7MnodZh569",
  "key47": "CDKcLrxKnioPpmcRnpM9QZJHFC1wJvTP7JAaNAFYgeW91DgEJFcUvqcoqPB851KRWrjDVagZW17CSoZh831U3t6"
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
