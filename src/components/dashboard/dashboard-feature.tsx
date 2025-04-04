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
    "HVp8uBTm154v8H5Rcf2NRzc7ThSc6MixaBUTazAr7CNP7WMuSYcGKvY3q3KT55vjAhb53RaNsQFDfbotUW5cuk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SS8oysQPFWGcujcac5jLH5uLWGYZBBUAxKfSR6N2nKANAnm2FRkE4ZQYFRrXpTCueFwG5uEtkkYFH6Rxi6Nz7we",
  "key1": "2stUfSSDYWC767jVqeumT19pUNYm545WkNkzrbwYhyj7QZ9w8FTDfTYj6uUwxRrHZLuLAwDjKq3ozMTMbx2jR3qn",
  "key2": "QcawN4AmbTn1UP8fDq6hYdhcD5scE2LP79XxY4qnQgkFbAQsP6dqQgEy8J5DDWHAhVABUKkhNgaVrkp3XmtFtZ7",
  "key3": "3Sxn9vNqXp2jKXNGRbKo3JiHxNZeQA3NenqMAo7MCaxJAn6F793H5CgTxyxBGCco3jAfCMVnWhtPcE5VCJdayhGk",
  "key4": "4Hc7nWRx214WL5SUvCQJgs67PUUWp6da1kfCkXomtMSxfBKioZ8tJxZgrGK1CWKTpKo3VBXVJhRKCD5w5bANPB26",
  "key5": "4EXknrKVPQaQmgkNdqjV98Jr3J7Tbj3vyECruPjQt6fCnW1bZNWWuLwiFzSjF6D1s9vhwF3jxPpWET1MEKe1EVyb",
  "key6": "ZjuAZ2mJqxchKzkrA7NhWM3b2exEXEnV2dNs2HGfZZqHiBrLutNC7yrpxejRdBPXQXsvf4td9HjWihdmN3Hy5j7",
  "key7": "4GgQBRqP1f8Sm5WzeXGh98snmVwi81dUoZ71EN111fgX1qyXF9aU3CT8cxqi45UX9Ws6TZHr6g57ghDHbRP6Hy7n",
  "key8": "51LyGxjxUghVSe9hwFyZPCE33WSYdAJ1mKw6wGKAMCerpWECNzhVU9RFbxFBBgF8KvtrBeJeCepZoSx7RRe2AnNK",
  "key9": "2r9PtgGWqAETspvf9LqpVq4e737sqm6WTnr8yM7Z7zPRvbgDpnfxrhrQ2vhNDE4w5n21t2xEz9XcMbWvaXkp6rhE",
  "key10": "3JEQEGN4ELqyzDUrg8veVaiFk7RXKpfZhRwZerU3QZ6c1LUfWZuMnKML4Dvhyu6A6hqRJ3gg1JscrSW5E2iWLcJC",
  "key11": "QK9ekgnwceoBLGKQJ2QQz1HiPaEcfUZMUtyGAhFrFekkGt6V7B3uqjL4pC23ySiGGQSQpQ3kCd3sSG71tousf7J",
  "key12": "ecWDgBbm8MovoiqN4wdhV7nfMW2MVgHJimYWLAvX8xg5RivVfFMKKLcwFPGdiFus9bk2kbyFxSDJx6XTSoxp2Nq",
  "key13": "5aLoHAKFhzi5BnCg3wf9EBgAHnXAqmhVLk1b6khHRS1EUXzCSC5gCoy8jSe16Uy7fd5hma1JvyQisHrkuoJScEoR",
  "key14": "5gEsnLKcHvGHs7QK8D4iNjSVn7nM3WgsjVZfhDvmyyESscooVDfku8MeTyDUTn95TNtBekSqcp721RZfLphuHo6Q",
  "key15": "5t4rrHWrhrUVsF68V6WzPQ2Phd1dtug5ApBzxStW5UdMcciWtR9azoLK57KJrrDBG8Y2oN197dpHMpobNwDWvsgk",
  "key16": "56U1K381qupTTzL72vAQoY4zEapGsn4momanbbEaXhKPFJ4do5V656KP5LfvLQ3gYn6oVScQAMVUZbbuyR3dTtrn",
  "key17": "3WEdNWJrVJEUEH4E1Hfk312VN83CKJGymy3Rgd17LV9WA73wiCpUJUQWEkxFyWuHqn4mhUiyDNwx8awRHiSrkbSX",
  "key18": "3bnVMq1976aw3Mbvy7qrgHqP4NojrSYS4rD6pPuZRfUau7MXCfvMRWegrSTjGTK1zN21hbQRsRxe5d9qccvCA8UH",
  "key19": "5Jc8m61BjS1fM7TfbtS3UfmwHkA6DUZFHsacKESHdfjd7GFZBaxh1HKKts1BExEPHmy2wk8aBztwUwLRqzcSG8t9",
  "key20": "bFaLkUt3uyetp35jzzDGkXVGDSnpofdGWLU86fvao1yyucuFko4ZU1jLZVCiCHwKHczdEDhcHyhNDdLM2wpC4Ya",
  "key21": "2Szi9ASqjyziE3MD1xJseUERC5EEBNPrukGM27grJgbQhkCgnkicKa1eNeCSwFU8RKat216WmcaaqAnkHMfb4Cfy",
  "key22": "3RVsThfbzKT3vHHR6uD8Qf5bgcexVVyEPTPhL7hDp7egiAtJv8d6fa6EemsqAhf2eTkLB6yMs7qtKKHMj7nASyvo",
  "key23": "2erHjPh5UoKpBtv6sUcD7RXdEdsHShbgbvNCqZTw93pka2gLVg2RYmHSFuKvnWSTieUYVvKTv5sV1LkUbf51UzjJ",
  "key24": "3TG7GcUHBpMVb6yCNsLacPAyA4qVMdZiT3KJzWxRNTJqk696kvBqfKaTjKy8ryPi2Kbq2o2HK9u86kRJvpk12yU9",
  "key25": "4PiM4KdLAuHGMQXfKvBM2PF8nH98bpz1pM2h7bpG1Er8ibRL9muu3FThDc7B38onbWHAEYHYStkfJ2NSU5u4gBom",
  "key26": "2FPNSn8rHNpNZwG8S1qBGEJESi8sCuswFeivDnEys2siqZsM8RdVjc2p9ppwiNS6WjyimntPVn5Wzdx5wfKWpP6z",
  "key27": "5GBHDdyASWqzzMnCP9oX8pn2hZPjR9nJU7WNv9pb5RcssCTcaAS7UQjWKfkKg13zcqAAvXN7ZCZrLA1ddMuR4Svm",
  "key28": "59wzTS98ENv4ZAWtvAKBCevA999DCUyN3KhtKp91Qs1kP8iQ6BmGef2EYvieYGKFtnziSmJPL4EpRn6CSw6Kpbtx",
  "key29": "2UT1Z9ACzYDnqKGH3LEkXeSKXEyUcMZjP3HC1EZ2DGLu3CyVbELZWUB6uCmRFweNthVoUyXAtiri6aCBuQYDdPMK",
  "key30": "3Bi387UXNdkGtNDAL5rP3dLRwkgAEFY88xtCYV6vAGNzJqWErdXBVNxYw3bYY181h1sFeSAnaaoQq8AWAZRm13qT",
  "key31": "ccpho8zbgePW3DY7YoQxApxKwkP9cai2GAwFHLcnHYRTrKuHYbZLjsFwtE3GTJiGhDhjaxNxpMSDLmzordpw4MG",
  "key32": "qjCTsKBJ99zdHLb8dPC38LGL29qqt7U1wQ17HqY4B8t7S5hCa9YwpREUCYnvHg1RRZks8C8NrJ4RpAwo3Tvq8Jw",
  "key33": "4BNq66BDq8N3tWAGqarxnQuoBYvfQ5op2U9L33Dd4Yd5ZDvrticHPThgEkZCLthspq7X6jWPchgZLWK3oum3FMoF",
  "key34": "2PWvbDLt9LQoQJaoqdoeu8vkivyf9mBcfY3fxDS2vhiUTGJPZiZyS7ftQ5quXSeFQzv7utLrPRUjx8nbgrpGpgZy",
  "key35": "3Ra6YMNqJqeHzBSVxfDabBdZL1UoJ8TNPnLTbkZaVyJaceeoetaJA7WmL6f51BCUn1jwQcjFeNxd5dzQPCxY5Juy",
  "key36": "5xYvcRgGTkQxy4ZNqU9xsXGMBtauZYgvhbjNYq6DZGkB2ZT62ZmsvWMNC2fCeepW7Qx1v9ewyVUYjGB9C875aVg1",
  "key37": "2KeeF5S9sjJFqUFJm83Z5yqkf7yF7ZfVtAHGt8H8thrMnsg4DrBYHbaG9aPi6cBHK55qxnY28iTKjs9hPpkA9fDZ",
  "key38": "5iEcgHUUvw68Ad2zXHLLvcAXj2z65uuaivX31eX2nFb4Sfx4Y2Fo2rwrYM4d6mpLbeF4GdxaZCNbzg4Ab5FUB5Pt",
  "key39": "3zgE2FzUrNtQ914CQ4pUgGu7GF9K9fQnosH4mygxkNBb28xnUL3UzZZcMzpRa9kixtN8BAYEXfbUkdS3axiNLEah"
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
