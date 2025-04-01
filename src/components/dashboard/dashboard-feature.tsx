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
    "2a4pirgt7RJFJDHGCgqgW8XQY2PEipkASdpxCR4ZvLwsosKFCD8ZBSbTpBPJ9KR1d2KdFkW9cxmfe5VR4VXSpskJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhUs9fQuGC6eWZYNCLpWMHaJWpLkMZnvrGN4yDG52HiqPPVVf7eFxgekdbsLnsbkpioRgnqbVUhosE9Dck1XC8B",
  "key1": "45ieSECftMYeYaPPnmAxYpCcM8kocSaqeStEoENbhP2XN5Ssv9FkrKEKDffjY9rGr77JxeskLBtVUTidwnc6QYS9",
  "key2": "5p1eM6fphavSx1KW7SDRXJ4rmtsUz96kp83NTMSNsLu2CTfGRBudFeg7DiT337ovrEwhNX4gtvy5JnSmfMJwnCXv",
  "key3": "2J4sBSv4UqqkKz529AAFy3vJ2FmMgQGW1QmfNtSEHDFUvy8DEWhYxKnHxYofyBuWqkJ3jLTNaaKGFDCZvDevkvjp",
  "key4": "3iXcPf1qt8M6M27h9xCyRQxuMVLeatQDabpA2m6S7DTWaKuuywV8HZQL8j6P4JFTtWoXWVG6WapoDwrLvS43AuKG",
  "key5": "Qn2KFsLWnFxMAprPZqY78BhadBGwkrJmheofAEfBPjtNN4528EJSJQzXmpRqJAdiJwEnDz9sVXVQQepdhKsprz8",
  "key6": "UHtfvgq7GLRHtiyyjQ1ST2GBqCegjpaZfPkFKuBPBfzBJgnY2jEiZMz3tS7XgF1MeR4raopTvEbWnF7xqw8uHcA",
  "key7": "k3jDs7C9avKDTu38QXtG9ggPTZH5Sa3XyUoVRvkmZaxU97jaSeXc4SZjLZCWWxmKUowCR7pip9K5qUqQxbTKjgD",
  "key8": "2hnX43r4qCvFUaB9PgGTC7GVVA53Nd1MHYKUTq8aQGBVG4hf2KQY7eLe5HiajFUb2afENQWzufdHm44TDKGvLDmr",
  "key9": "51ZgvFXzk5xipNGFMkSg9iv8ZJzmuUv8vWTpE4kYqwGQTzhBTWRJTYRB8HKJqDZptEoPQmk7Dm3d1e4YqciU5NtT",
  "key10": "3R2aH3e21AnpgBW1CXCBYG7Mwua9WBc7VyGKqhfAUmoiwTQv3ctcDxBWErP7hg5h6nhmKiHX4m1vQao22Pbb8vky",
  "key11": "4BjXadhdGC3yCbcRr2tcJkz5MnVoHuxZBY3nvmdCJCMStdrp9dhrfRstAk36wcKG3mfgfvaQYzhKTdU4NHtoznky",
  "key12": "gX7fuRhpNKUm9K1958PNWKHovKB9bvYsnSrdCsPiZf2XmsC3WhySWzqfeTuHa349RZD5vuCvBdj9PWn3ZWRsHm3",
  "key13": "3SvRFYH96AWgM4sBqqLXJrSWE4pqhouuFifQ1Eup8rau864xabC7DymREnuVMR9hiAP7JLNWaPU58uQrheGcWnn2",
  "key14": "2imHBRKDW4Fx4b22sYG3oc8nhQZywuZ4LrqUC9HHc959UKb3rzjuCVpRz3C16pYEzhSuKhTZrgfAfonzcV893AG3",
  "key15": "3mxzE3TxtXGH4aDWiP9eCDR6sj9Ph27yNsPhQGEoj96JDceShziLUBshQHcs9t5hvLvei5qfF5mPyWnPFPecjH7n",
  "key16": "2epcjGFBpoSNHbCGxRKmQaYBxojoH3T1rULAYnvsgK4zVtv31ddFQhANPb2j6V8z7JjcpEZe7zD6aAwCkMCrms4Q",
  "key17": "2RZ4GoixeXMpbs86DUQQUvmXN5Mn18wCPBJtLpauZMsz5CzKkDYDAzvRYGHqAnGGrvh8ZfnT9mzzKPtwZsmRx5BE",
  "key18": "2xaKjwvdfX7bPs3xhb6PAxq4JcJJ1ABx2ZAU3mS3Cu9XdSa1REG9vCp8MV5BBgsgQc3JUt2fVTN9ebZcSZ8eTe59",
  "key19": "566U8EJXzHqVtSfmLYBoFc4dBKjSAvpz78YYRxZ8sV2LN1Q61CreXTzb8ztGEWPe75tZf8mr7pV25u3kZXbXLnFn",
  "key20": "5if9tZKfJ4c6zPXyUQ1YFYpibtDjj7e8wzEeWfVPiotcRZXW5AYirjYW4yRVXWKkpHNj9ECMhptazmyLKQVKtPUs",
  "key21": "5bTFrnBMMKPsKhsok1ce9MY49rN4jXhDCg3ehFCHubxSA6i13axDvd26mC9wtvUfNTVxTPJBxhMq25EZYdQCsxMX",
  "key22": "3zdojHizA4dH1UjhbMVQXpB5PpYK2TfjEuHt8y4hr85rsZE9LTeGM2sHCFiaE54gm9LQVsQAa2BPSg6tHyMPJGXH",
  "key23": "4bjxp3u9JmRBkcaDkcBxVURoDdPg1z5eZaGyeKr4UmWdRYo19nPdqBpzN6brn61ZTV9hqqSkAvihi1WS9WYJZFeg",
  "key24": "3V1mJ5u1Hps3z1MVL4w6dHvxQyu2q6MWScgqBNVtk4KmmH1FrN6fEPrn1fxSBkCFuAfurHdG7g8dwU7WAqZAUteS",
  "key25": "4aKXLmcHNof9ApNJDajKjRSSHYShXTHndpiGZw78dt3hYVXG16dTqi2gzGfGjcz5XMgoVXi8xRxkDXAS2Ftyqd7U",
  "key26": "ez9mjS5nHq9RjzMYL4HkH3HNi1vo5cAdhWGKZyYXdteFhiH7qdTP72TudxCxZmGUzQ6YGqLeZjJMS1qpJhmzLWq",
  "key27": "4GqwYQiV1MbShKJABZg6Rx8nrHeUXjMM2oXdCgzqAyarGnSaWz5B2cXYa9Cb7CsGZof3j1nZf7B4w2Sj3tLyu2eT",
  "key28": "2iP9kZaiooMea1UVAVoE7CUFsZw5csNpc7Pu6wHyjP9ZRqcsatHx1GY6ZAzvindr3MuPYpw5hLjJ7RCygtyk6van",
  "key29": "3yRtYMCWvq3LbYEKw4t4FL75v2C7CCrcwMctED9vBUiXdQP7noSXcPhv4cqv53teniQV7ALLeS1JWQRn8sB5Bfsm",
  "key30": "4Rhxfe1H7gDwvm2DwASpxhErUGvq93Qpc8CwPYJGajiJ6rnRzTAZv8Uz81fPRHFHBA8sKSMPAgXJmzsD6xZ64Hzw",
  "key31": "5LBrqojYoaiSjaSFkmNxSgCjiBoxuMhwrmJZ1k4HxfKHoDRTHkCQhCsc8MMLMXwz5PTjSnqcLXZJo1NdASW6b8iy",
  "key32": "39GNuoXaabukcWADeCE3iUbcrdVdshGbxZUip68687Rdf3o4gYVyTX5YtocRgy58N5eXLZeGTatHiTrREinrY94r",
  "key33": "2MFdZnANazJNBET4guxBCjNGoBp8uBu5HHXqGjVgYYLo41ogWCb4B4rbdNeKCYTUAr7o4EGWYLvTiuZHGmfTQYXu",
  "key34": "31uBZMauUCYCkisytSAsLgD4btanCyfDAmokemHNDqHXxXG6D1SzruxQV5LVWFQJp7JjAwvrdSRw2VmaGy1756o6",
  "key35": "WWCAEk11W4E3LaTw7532QGmB1Mmi4w5qoHGiCeUD9kgj2YQvTmpozgJ5iNVbHzcSHyWyTHNvegYQaFPFCrePNfK",
  "key36": "3PhZPaR2sicgt38ufU65ErErhahA2jDfe5Mz8dn4dQiMzfXRsefvJsXoXnyf7S8SwsoAuB5Hd3S6LDpB492ZPZnZ",
  "key37": "2Q7qomw6fPcAVMCR85t8jo9ameDJyXSEicrjJgjJLdKZQKivwdiquGhXkm4mmefarqCCZeQzDKTV2ezsfQDfKFcq",
  "key38": "fANn3yPHvJepSpbejGW4CuHyQcJXLerYJwnkfSihwG5mn7pc8fz7KhtM5tCCU88fA8LA74nnQivj27BptvL9iRX",
  "key39": "3ANSgNh4i9hCpqsvCX4HwuVUfPAZSn6zfSD4avdC7jvVovNhE89ZKEBgj3yEpru9DKjxnNFNLYWgCSWCsnaRDGwr",
  "key40": "43R7tSrskmRcH4Xz2AM2UoER7trdYGWDNzNEP5CidW5a41am3tjR5uHG9zTQXEeQXrPes6JFipJMN12FoMWAWqUN",
  "key41": "3miRTnr2K83BeZRApP5Wm6tnsFJduSrUywvvFNUi2tPJLmCMc7SAMLrc2PkXr5VSkN9oD1jFFHtiUoVcvyxDyPyJ",
  "key42": "5AtCSju1wQeVZ61xoLUYuqtbdyuAhEQXk4ScZMjtV8V6feu8UsFHkqyCqudpaAMUSHytLpfHZg7eB58yw8brSwKj",
  "key43": "2raHkbs1m9kPbYhqvgqGKzVm2G94dJ4dVnjKv4PbEFfzo4s8EDziYuXfy5MmMNRQnkGsbkyvJkvdaMntpbu5HkXD",
  "key44": "3ot4LT7DtVkG9rh3ryibNfnkL1jfJ8gH7TgLcpdkdPi7QHvLSfEb3ZjGdrm6XwZB8tNdoPsqsw1mLbMxsfGcS7Pw",
  "key45": "3SujCzabifh12YQ19KEjM5v3usxH3v4Y2obPPhVYtX9J6cMe9XQtFcu5Y7wVjn6DYXpdjXyRWJthkFr63EwvWLdX",
  "key46": "2vyekhhwSqjViiZsiUeJbrAKHuebYCgkybDHVb8mjZ7CGjwT9d1wBftFbddQhPJQAUKPJCNzKTf94tnenx8HPTGh",
  "key47": "56uqTkdDDje2r5GAg8bL7DfgsPdjToArjvw9LLJLCSU1byodYnouNsHWkGypzPpohqMVwudiuCCj5isEq5KfU7aT",
  "key48": "58sUWmLGgx8PMDvnj9woqoyDVsGCZHcntmWTQZRukppfF2dv2r2MHNU1UoxKw1BVAqRcjTFFmVhf2wNvxhmCv6pY",
  "key49": "2vXi8VHv9kNYuRzSuzjtfsBAkJV7x7U9xZN48JZoXkLekP3ieQRGQJr4w3YjchY22vCekK5ftYuHHYXTfmsrWD74"
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
