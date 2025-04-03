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
    "4oWF3Z24sNqxsg9nf4kPMHqfAjNuM8kGekqQnAQCL3aBoVHuhWhJQ85zZEaR9aDqic2QoTGs65vucxSCYzh4p2d6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egbXUDnMcJLw953ZMq328si3RhBAkYSuWTqfMLWawMT6LhRickDvYaWaumQ5ynaY4BE6aiHYYYQmsZoMUcYUxkE",
  "key1": "5o7DPpcoxjSEWczMWB7DFGGs39vtRcgLBem95GDJffs7H7dJCC8t6ySkSY4thzMrzHjs9fX4AbqtTAwNVYuTW1Jf",
  "key2": "3jiCs7xS7rnBiNMFUekh5W2vrBDmT5riy4fw9bpjacq3C5aZUv6DfGtkqAVSFVqBdjnG7GC9BK1AN3zdNve9Duxu",
  "key3": "5ioXXdxsCcT93qezBcWkPBzhzchFAADsn1UmbDEi9iwAHiwRaEUeiXJREARbHK7JpFN7mcT7P5xuGYCzsog3ULwZ",
  "key4": "4aw5DZS8TJyJhsDHb8swmEYaKHsXpUvjF85gjXYnhUsfwRESpLjFNDKYJNrgvMjywhnxydZtSdEssFCshDFTTEVy",
  "key5": "2kwBTvoQs2N7DQ3XHnk3q4Crp1SKqY6PPYGM5cYGM4hgV7SaU391N9FCWGXgoct45xXLZhnfeuvHiai3Gjx8zivz",
  "key6": "oSaSFLUrVPpzanQpCfDXmzqHAxpg3pvqJyCaFgA6jvSSmGZCjuqRTWidTvsCZ2ML1S62oUHRc8fzdhJ5kbKKQXc",
  "key7": "2CUfrFBvNis6dYoj4Rq7JHfvoTsaQKnSzPcT4eQ2B4XAT2p5VpkkLGWEazDXJAwz4aEaRzixU5T56qm4LqF271m",
  "key8": "Nw97b2MzihyxxRQi8HyjcpFq74Kcv2F6XjUfnZD8RNGziaxLteeffNuURPmkLtH1MBYqdEvvB6otxU4Ua4cps8r",
  "key9": "4awC1yDXBMBiDueNcj1yz1Kvv5XfR37YJpQt4e64F7U9oefrR6JrCeCNG4prqm7fmgVAQNWLVrFNbzanXuFwHHG9",
  "key10": "4UCajWMXNZgRLejBSpNKPCDQ65n2FqW6meR6cRwTqeV7UGKy8uC72yDeTuBmmSFsURVx8FVgKhcPv7v7VTZfeX9n",
  "key11": "vxX4jDGRiY97NNBxzvYtDvGdv7uyi6cVHKw4oWRyEHJELbcxe4MfbnwoQJ26p6C7L6auzjVafPU3AG3GUFYYyqG",
  "key12": "3DExpHh12D64BekggEJJa8XVS9haVUXuAQ4C1CWjS7vDkeFQNbeMduvPtK7bQMEij332cQGtMyjnckpjsE2ox1Tg",
  "key13": "3fSt8sw32PxEUW1dgETNx6pn9wNvRURRGWfAz1TTumsK2qyMNaRrKFqqeFz91GXreQAEVH4KwPxeoSKTmRdfboEz",
  "key14": "3pULu4MexmPmC4c5S6HJ7Uog1fgAeYpn3ecmcWEdbKgpRnuo62Ack5M4taNUQAgAMEB9vBJaghbP69rEng7MECNV",
  "key15": "DhxjgyFhgBg2eHbBrumUkBAHMWdFVKcuCZ8MNunETx6j78tht8MLry71MdohDevCHtu8Xwp3mieGykgX6xovCTD",
  "key16": "55p3nMPuY34GDfawkDiKvN98NMWVJ2uLhFdEF3vZH949uLU64BpsgsvUNdV5bk7ZR4oMUabcGoKq7Xj5SpbPWSsG",
  "key17": "YGsivuKS8Q9iSyaWyR8YXZ1zvFR4F5rnhaNGZNnyKNosDmeCf7h2zDv99zCnjZn347dJqYGhnhg6miFV6C9iYEy",
  "key18": "3o4M5pYNvRW468W2xv8fhiitk4PrYMi3kxpY21rcjzC9VPgTE8inDRJHVoyHqqwBi2bAkfrYUgG5SqFbA1Zz5gsw",
  "key19": "3CZ5V9Z1WALwmpdF1nVQU6dzorbX2WrrtrPNFCKvqPuoko69m86LGbBR1yo8yNPbwiQD27yF6ii9GHyMA9wDLi1K",
  "key20": "2kz8KLLc5XtDvkkRMwM4eWE4GMqkmSPsQ32nRCsnCQyeanc1ha1pE5WZxqJeHo89JM8BbGmZ6FAnKi8bNNoGjxWL",
  "key21": "2cvczkiy8VhxcbUaKs3rZtctuEVxP4xvznGZfcQ4u2APr8VJCBStMuzEBHPSEAsPMJMLsd3FsCY3dDyxnJ72ir3i",
  "key22": "4jML5p98ztpCwQRAqTL6mtr72GcLc5VApZazdPaWYfuduZTD7XPufU6xzTFgo8Scs9LMm4gaDsaXKLt1T5Lkirr8",
  "key23": "67q1meqNzNuvwKPmCXgJzGBMVe528E9ZgqiDtpaw1VKq2meXnsGsCd9mDABpSjRmuxqmAjH7bnS2nQ4kkDY2TRVY",
  "key24": "4Nh9Eg1tG69WErnfAWAaHmuuaEC8djp7GCyQbGZ6XTWFShHE5NGzpN7Ffs7XmzK7LcVACKZYkgMmWeqFziSFhYbL",
  "key25": "2tgZvEJJBFQSoUtsEsBNfhT3pqFsjnByCtFHmNDnrzBJikttfnwC3K4h2VQAeswaMch29Sj6iMQ7kyGDxa8hPPTX",
  "key26": "okSxdreGh7mFyxKHdZmAijhYEsMasxwA8jy2dEYps7CArGWBeXhDN1GnwzRZsaFzBwsDhxhqu8fu6NobD14GWge",
  "key27": "62Ef6bTWqvVg9YNvCemhSeiA3L4f5rMoinDCQsxfTQfdRbBbsHQPJPCJFkRDukTPZMVGU6sNKDWQ7gQ3bWTo8VzY",
  "key28": "3xk9R1xM7j7wpxHtMK6pyr7PbnkuLrBYac7ZZt4xKhSvhoWU2rLnXjAUGAsDGw5DYtn6r6NUi4xKa6jf6JQQdCEu",
  "key29": "3TzPYTxfE9BgQ2pbqhWeKdyZ1NYkueq7JoMEVvDaSuTkiBDb4oT5oTMnZo8NGu6uqBywmE3dNMErLezqAGuKfNSX",
  "key30": "5SMXTLWHWJhtGU4NizJivysrqho67FPd6P87WdqDB8PR8mz1ivdFJ32ugLrfZu6cue6a4sUjsSa2qZXqnXcHPYTP",
  "key31": "5gPVSjnJVC1paRM8o9bxkVmnB2AhNoTEKgTAAa2ZZtA8a6kjFHefUiLrszjkvU7rjwQWVjAtCrvGhBG2SGdXMHpC",
  "key32": "2mNWd5LFUk9cxXTFAoG9YqAFNGKsoSWkbGW8RJGSXREXoKWcxJ7ZKgTAWgWDyKVjYW9D5wY9fzu6KLMLbSWCH2qV",
  "key33": "ssTnqCGtcwhYgwixABD6QrPewiBPq8Y5qoMcpwAs9n6Th2dqYPxZnxtapq3CHwHJBsYkGzFcFm2vqYULtSAfMF7",
  "key34": "5SShZnj7DzizWiY6hzULjR9kDbqdmXEy7ExRu32ADTqBo3YQ81GEThyW4yUicyAyALH1SQbCxL4irnPdUxPxNT2"
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
