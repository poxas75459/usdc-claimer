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
    "4YLPaR4jkpkJsdGhtcvjBUFeZMipYyHRKyfJ5jt6SE4SVc4j6DsBkzkjW413vPLMBeJ4nfYre3rRChzFWpXHZaYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBLQpGw2UHVorXHgcTfVY6wJSxV6bdfvFhvseAtecKGiSUSVTWCmbzjfwFgdzousmykeonoYiZ3BT6SS4YqWN9N",
  "key1": "ESj7MCN8Rv8uJpyMo3wKCr1MQkdffBrmBeCLCFwcwdGJS5h51kcuC2aGpR44DcxbMmK7vB2FcsSnki9NYTRL9oG",
  "key2": "2ddNbNHgW9mpxbkkD3K22SWdB9RepvT65GLEGUnP2GQJ8p7xDEfXYhMXN1CWC9VXS6kmeJtLWbcgxFsqZh6hscWa",
  "key3": "3CYLTRE4tt7v9W12YUaqZx2aADDeBdr5mBgQ89Vbx5vXUcrW3yb5PNDniHkFYqCYNqsSUgoYxT5fVdyyP3y5Vh8g",
  "key4": "5GRGDbhztQ9LKZv7doqsFN85yYAzTnndd9hZdeKnZLehnqYsNE81TzQpsPzLy3xW8NvZw4Z7X3PBMaYzNh53m36G",
  "key5": "45QdCvFHAPktCu4eEKHnLSHD2ht7PLtZ7PrPHHfW1D1P3FJy7pVHtnHgi9Wgbuo1nRapvxjfREi79yq5xEQz4gku",
  "key6": "5VdGDtMq7cwGDJsQFTHGFHCy4oXtdHHuLaxZKvqr9YF6K2fowphMH2ht5Wa6d2UqoTeNsnsa63f25qvJcfcssw49",
  "key7": "2bHwu4ojn5dXrTwXHapw54ZbcxWZmnjAtU9Jb61eo9Gk6SbCvPte7XfW5skXmhQvKoubvdyva98oqcVbexPv9jxC",
  "key8": "Ejvj7DcxhsKBcNipKbK4L3gRXi7vs62cvJJqSLk3gpB2TdBMXt7RKDfGi57DJPLUZvTdqVh4SySAyYNZTYPhmxZ",
  "key9": "8Hzt1VctB3mUhwGg9CgrBxJyqQcjPo44soykJsRzWRyVBfdnoDWTuViPvaoTtKTFmzgZezjamde4jVhjvNNMm5J",
  "key10": "2gP9xv3KuQcgYUuPHdXcVC8JYP2yzsEku6bhNRm1vEGkKF6rL9S1hMaKBtNPggqNtc5sSiKqhTxVHbNoW6tTdwrF",
  "key11": "2AxA5hu6t1gHSgDkyqFWUcg2Q7vn8VJ953AKwXu8D5TitgGuKs7f3PvExqquMae5DerQub2kz91gjfhUmEwHFsuw",
  "key12": "wufBHDzKYJdBJcJXNmct9axKHXiSBcTRWexDy38rEqoAax1P18QGcjqsjSBJvoSrDRn62wTTUrHyGshiev6zbfP",
  "key13": "5e6FVYZbx3MMRhShkdpeVcGTC3urWs1eQvaVY3FajmYGZEGiMpWsjntmm5pKuM8V6WE7aHMbosmezeEp1QSjxtMD",
  "key14": "cst2PsVq2Uygcjz6jG72S543ZhqhNDrtn647v3xFs3k8KBs2tvjjtM8q7zxweCMma4ibkQJY4Vd15ebJxCjSnBS",
  "key15": "5D1QUjjWYPT1WK6du5hFz5DkC8xtaS6enC8TzsZMaMrP62UL3Y4e1yEjv4GqYrDyJhFEpp2FoikiKVpbkMp69JuS",
  "key16": "48swrzc6a6X3VG8QphFYQ78qCwfnoCzp1UWjuvYTT5J9xkyDnGwnCx6xUAqHUGZLE2eb6Hp7gVoSGwE4kXwELQgJ",
  "key17": "4VZujbtsVJD4mWkDs4fQnt8uBF7fncopDpwGzRQYjo6UMda4sNvpwwgaumtJV1T8XgwGFJTQCabS8i3v5xzrHGP9",
  "key18": "t4sMQHdgBxKjent61mceEK7TJNEsjdbKEQCRQAhjMqjBjp3UEmxQZNRBn3xTgeFEzjwmVUksgV6gWx2zzxzr5uz",
  "key19": "1gV9NsfQGLF9Zo6RRfHYmxCKYZJS3oC2WE9SnCEzjNqtF6DecMtAPpzwKDc4jpGgybgR5ACJuUbL6HYK97181d1",
  "key20": "8kiezXJkSReGuKbHSCLBjbmEFnc9xmSsppSQs22Qh86ZJ5jJWLJM1YdFgRMArZ7GYBckdY8FNTSjAwNGzYPoVXB",
  "key21": "CsnyxpRVnTAWBPMAxorACKN8xeQHmHngbPMP6BWupJNXpSVqraUScrYZ6ihjTKTnLgfdZj6N3HdRjzsd4ArWaYN",
  "key22": "2go2DXuSJZP7St8e6hzajKcFWSF5TCLQ7H1sXSAETRitUyWjqZzAmGiteGKPj7sj8nt67GBfwLa9o6Nfku8nqmDE",
  "key23": "2RycPYtnxTYDKx6bRAzyFRpm3sexdw8S6sUPooQbuqqc9XeWeQnGFub68NDU7UN9kwrjzYkGe1YufX6o7JYRBrna",
  "key24": "34c8FGsQVLyvTfDuLHkDCUC8qRURgSAVA3Uui9kxbELsiph7QEA57JU8QPUzPEuvJ2vEHMBF8bwGcXMDNVq5pCs2",
  "key25": "2KYFZT1D9HkbTTBfuhKNGVFUpiXCvuVFyver5bzU5YtQLMBTxH6K4VYPoa6Ht7sa6jPqFpsDzDCC36iqF22gx7Wq",
  "key26": "PAgdUdBCzh43suYMFeXmw5heB7LqX4KcgnjtcLnapCD6eCRa2WaXuoaxgk69i2MHdjTbz5BGwnr78VWjMKwfwoF",
  "key27": "3FW2rXVYv5oKHBDakfbXRTKHkBupqtxgUmT4pfGoY672Z7tFJaom4wNVFsFWaALpiaiuJgmXG8rGc63WRGQPw4rK",
  "key28": "3SheHu13ahCSa92wxuTqsRSiQDbHU2WU9RezNqVkrvtALEBygZREW7dK9TuweYdE86kWD87RExwLpQkwFJdUzPi5",
  "key29": "ryNX1LWdHsecXrYSYAEctwmnDS3YDuLQ6nWR9aatrC3kv3W35St7iXqFkA5pdkVqWpWUARjXpGM9LTt9WpctLjd",
  "key30": "3muDAaNM2oKkafa1dRtx7Pk1gi8MoRKnh9SzH8LzAKRjQKSSdxG1VEL96vYLXfCH658w3jJPNVCiDE4a1fSRrvkp",
  "key31": "2hvVAJSAB2wa7yxecVUA8vnRFUM7Veu4NREe9yUvjiJWFfA9G5aFG8ZBbpA7rAiSBCRG9GYrDL9ZpUbQFSNi9axu",
  "key32": "dG9s7fuw9W62HvkgSpBa96DP7eXAAs5BEBhqRxsz6Aao3X8oUD5t6cBpZxjE4ustYcLwFCFFbZcAzj58ZHrANa9",
  "key33": "5kedU2CHx3VcahsiJQfp4kY5Ymm4RmeKSsAkj9cK393fVhri12oftJ1S5b9fSfX61cygVvKYCP18MX5nezZ9ABkA",
  "key34": "2R1XE35HEWg8dHv6saaFKkeQdFuZkE9U6GGtAH1gJ8TBthZjfKgtoJktzhDTk42speGLfcadv5odoM6ZiiZ67Won",
  "key35": "5sn7hLr1WPwnoWMUJMjE4wMrPqebe3WCy5J2fZA7XMmAHNrw4stX6KMBdKAuRWGuVnipfg268FBofubEcDVfqwgi",
  "key36": "4tM3Ehta8V97wAebwhDa7GrWLj7tSVNneyFsx1BsUGffvrF5paskLEYsehDZ8Z9woqxzDXoK5rAZAkSPjL6dCrsw",
  "key37": "3RSHPcQkVk61PNmUwYKJXrXhAdpgPDy2uCbBoVe4M5PZk31YDGWwGjhykPXzZrY3WAG7GwK3EYdFkSa1KTn4KDfx",
  "key38": "4LG3oQGaYXX8MV8yJPjCKRg688ybBdYH2ZHwzeCYpE7kStgEc8rLeWSgHzrVH6urbd51SjpxJuYV5CsYhPZTFDEC"
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
