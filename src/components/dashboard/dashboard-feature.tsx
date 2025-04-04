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
    "xcbJrNbfTiKsPLgJH2Nheh4d2nwkdJm4oS96Toxo3UrGueKg9mdGfq4hbDAyZtGxdNEwUtsMJAG2pBKcMp85EkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dKEEaUGwsJXocvKvXXwepTmkz9cnkpZ8ZZEfKsVQc5XqkpXjyHhFqehAF1zAvXey45b4dGQ8Mve3kZBzkEPkkrF",
  "key1": "3Bx1P4zx5jxhMrFZmvYYT71u4zEEfQSDnycWycaFwzdnMLEs6dXmc4f3r9HVonavrYCPEVBXTKLVTZeTFTZjezGq",
  "key2": "3Qybb5qtFWEbXL7MDEChh5kTCJTNqRoQoxT5Dd2hEDVRDwtspDY1FecCpJDwASV54H11KxnWugHZHryZDjy7cpqa",
  "key3": "5pB1a9xVbHeLomxSATAxWKJNVXNUibECWpXsdk1jmW5BZoEGpcLTaGmvVcXJWg33XXqdbU9zh1ZSWEJPj4R1toWm",
  "key4": "3pM8wG5bCUu5CNiRr61kodbkqJykutTxguzSAvGR3wpRKFGdE8Ms2dyZoPEFHQTaozmbUdf3qQ8o1AXcJBSus5Vq",
  "key5": "3DvVnVXUUMPMCNPdPmVMbVmR3Hcq4LKZvjTeNCY4QqfHaFuMZTtEL42sCacHqdUQL2frsWdVxMBWfFpVB77HEvLS",
  "key6": "2EMznbkCDbjqyeC2tfnHdUVje7PxZdoXGsmiuCfuJN1unBVs1u1GTUfA6RDV1x5iRjZUUuLRRphJCzotyQfnVsTd",
  "key7": "2nGkNP6Ak5zCxsFda87LUKzayRumSkx9Km76dDFp6GE7gLVkVv9viKUGndwJ1xRVQxh6ZHm1MCKH7UmbJeau726u",
  "key8": "4PA1mR2frZBS9bthbEeZoSDW62CF8hgXedoKZXuj1Jq7J3Kd9NjCMFvnvd7etQLQHW55i79jZqddwn2VgM3RPKEH",
  "key9": "5woWsCnuZCGyWUk5WNTM7edzFNVXVh8nwZ4AdRb4FdoBZsvchN3druuLNDMDVfRj9xNjsYox1K2tP9mr6eV2HR9J",
  "key10": "2runSEJTDwx7z4TE3x3j3ZAU87z1Y8eVErfHSgoH1WAKgtEFjeBKr961MdWBcSrsvctroZPbjqjBtgCuT8u2xseN",
  "key11": "Zxf5R4q9YuJEBAFhuCdbTnpqmVRkFb9jpBAMhA8V82HmQSProUnKNt6mknAGVRnjnE4ZFn35binkmeVXq5RTtKr",
  "key12": "2hXsTGF3m4UHBrnC1ugNKZ6Gjx3Z6EiwczWdKdq7oWDdmD82vTJDFAqRNew3p5F9dQtPGewrVgwVrckQmDmMSZRs",
  "key13": "5ujfjz67zyJyNEi6MAVvRFpuyC3nVAvG4rnv1yjoyuKj3rY2wUMfgw5Zs67rMSTEiibG3Y4NLz4G1W6V5Vcm7mJS",
  "key14": "3kpqsQ1gvkq7qKYqqRhvkNr8WrVhk2SpoNXiEn6y3y9GpLaTccWprRJPHhQxLqGt74KsLFhzwBRT5uocaREkWAnZ",
  "key15": "dWPo7F5Mo2esgqsUrXTwYvJymndtg8Rk6JKk3XRqe3BuZmiohQJ3JZoFvpASxbHnMW3trtcTsjSxq99d82yuXBs",
  "key16": "2HcgeEXDDtNbCrYYpX2Eu4e3oZsmAYjnFmVMakHj3mgbiXSoEA7hFwLBYh5TpqJNCD2LZCeat9MmH6XQ9eedmqVv",
  "key17": "2TRSgqBqV2qdbDAmAcJfrwXFF9cP371gAXdfWfug5nZCSLAAXhj27sVUq28UZPzQCPpiX34ZQW5HqSLH7jFwMwWs",
  "key18": "4dH8GuTvegc48duXwEbcrH8qnZ2CVnZd4fsztFCRtnKVM3Fvs8jLRykUR65uYwLkEY4c13V2pvn5aaRThzkYAUpR",
  "key19": "rtvvKbLN1gN828d5NavhFw1XkUUNev4YDTrh9Xo1ShLVrQ6tqNxTNKpkK8WydK758qkQN3s6xQLkogdw4ezMcav",
  "key20": "3R7rn6zVT5GBwkzwzaMyRxVacmusPNKJobjgmrTfae2hmpp6sA7ZWKdJGU5P7hxrP4fcxbFvg9jGmxURJ8cxbvPU",
  "key21": "5GvtQx5cPNgPKfjCeM2DPyTYj4iAcjZKdZegJ5fWpAo3dGPYgiHEou8UMc6LwsCZWcsvSyr3nZHSZvB9oWSV6KGU",
  "key22": "5EwBfnQB6Bc6Wk1nkojzjSP55RFyfPKAbC3bfbD4byQ8M4scKP9EKMP2RvjTzsyK5TXEJA4nMQ8bKEGgzGGeJjP3",
  "key23": "4d1JnT2VvuMLsKQU4ZTEwmkcBmLQyUWapA2nbCyZgfbTXGq14928NkzinJSP81wqKDgnkwx8WTYxGH2wRAEo7EAe",
  "key24": "3fEubuDU7dD1bPSiVajaC6dQ57dGsDG2pnekdAKR72D39x2hTEdz4P8yvetwnzqe4GZpk1rgUHt5CqXygmU5cdVB",
  "key25": "2gMnUwt2ncBqbjS9caZaHSQEShFYaMKzdjGbET5RXknMWD88TdBtfa8HXjqDSo1KtYZyt6MH71vs4qTwjeaDt3Eq",
  "key26": "SuC62Kn8WKACUQ1RGBBaQoCyhcUBrohRJfaQTkfbPqhQZw9JY2BUeixwQvYJ6inbuRWfLR4ecKCD1pptSMHscE5",
  "key27": "54ve9ogX34yz49qJdtEWUX7GXxsrc1QyYMeQgJh2ZMUv5opuKtsfUF1kxRcXezJhuQyJ39VHsCkV78qo1EKUj1m3",
  "key28": "4BCpT6VnQmsspSyUU7qPLT7V4aEs2bbifoUSP5h2qxPSHe3WkoYgBQPGq7qpfYr1B1WvfqhzkyijRVgHQBwfw2X4",
  "key29": "3PnV6rcRRJezuLrAPBXA9HzwLG7uwSPuqCcUbEzb2CJUJXMhdDhBJcWj4kUepwCzeYEnMcGUFLaACwWyqovGryP3",
  "key30": "491vGhx8iTzt8D6mpodSSAVZnzMY5ViwuyYexjUjpPAP6NVNY5ipmpg4ghyaXFUWZ9CMCxRq5QTUN2yxGhfvX2Dp",
  "key31": "hJtmXqyCCYwve1czif8F5RoT3ZcDKzB3wYnDB9F8pxPUah37BGyoHLzaDRbYNQL7KVxMMHXojVdhqgA38Yh55Tq",
  "key32": "pNxCUNP2U9jgTWXoWQowzL9z5t9hR44hfhWpg5xQFtDvSgXoBgymAMomrEYxvA17hiLu9K9TLu1mBy3MM63YqZY",
  "key33": "4RuxLrJw4S4nfm8p1ENtSwi561KTYfy7hAeEH7MoBgMNGe3oVDHk4rNJgAdLAKzDSNSR6bEnJXca9EPuHvWe6AQM",
  "key34": "58i7g3eX1dQXCFhboNr6rUcHSgY9yhfc9fCvYEZdfx6s2kCYfNoo8ULUtAcxkK7RQ6d7pTHoMF6TPNLkopebTBJ6",
  "key35": "5vKLgAo2mdTBKacayaoJkVTvGZZCvTPYBFQdFWrxKRHWeJjyTRb2UuBJzZb1z7Ps3PGe515akLRPEFAEM46AYyPz",
  "key36": "2h3LSL8Wkp8LM5FiB5VFD5QaGfGRZHTwJSGgEGiJWMkW8uQCRaHcHsxc4We6MCRaBBYkHf2uV4U8sjH93UnVAocg",
  "key37": "22v18J46oa1kmZ3pTQjSZvEtqfbzxqw2v82QbzuCUDdo67Qga8g768smM9Rt3VBjg8Yz4mYvBfDAKwM7AEMR6Vdi",
  "key38": "5cqduMEuMWfbDsdoRwMQEds4QU6YrSw5fhGRa4yF7trHMejJnyJDBgrayait16Kyomm1Vme3ZPMH5eWzvnTj3PmG",
  "key39": "2cDG9RtjU78jcFFi4D1Mvh84QswfWTnuEWxrkTRVgGJrwJejrn4nR2oLDhRXd9P1v1fJfLX4K3XpKWABAcTtv5kv",
  "key40": "2CdDVErd5zseu9hpy8oEbvsu5pH9fK7shSUt36nkMTdSVU9qtjt8oHWT3KWq2PFByVvHqxfKd6vHjPpaLRiuXnq7",
  "key41": "67ajAcV1yeWdPs7yhXYiDC6jar2vKh4se9iF82cAwwbMy6BFaP25S2PgSW8Gy9aDfsppoMvwGQK2hNrX17N5fohS",
  "key42": "671pFYCrU3FPz9cmQcjr3BLEjgc9Naz7J8owCcKuL1gxDqL5w9VHiW18THGemtybwxPFTzPh4dTyrxwKExmhho6m",
  "key43": "2wcbGcf9zuUigaRMqgGbKMiNM78zN3trgfAFfQnPSakvigt1HWkJz12rnyB8ZXEL61tY1LApVhzkWcy3KSXVTZRt"
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
