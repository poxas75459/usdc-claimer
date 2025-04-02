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
    "3RsBAmRJitA3UYjuAX2gcXh6wKjdPSW815jxn8ciZuzDg3rWJCiXSmmXrhGoZtPyHP4xqswFa3JgS8yAEZTKWqD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VnMgaQmZgxDMJgS3oVWwX7yTcpaMrLHLzkHcjLvG7Aqx8owXCXPeEUY9ycQj7PEX23ynB4b9qygJnmkyRBSA7Vk",
  "key1": "5GuvNcJh5MaLQzf45ZMun8vPqP5UvfNNA9NmZhUSDhkEzvy9W2TmsntquR451Auoj9BNAZh2mrRUQihRURFJF5Hr",
  "key2": "2pfNDca1UFrWo8Ubn29f6SEhV5QnG8Rxbr5VHSRs98w48FBp86u4tKj6xr57oZiVwjagSZPUrPpCCYGsMRGpYsZF",
  "key3": "3EgGh669hghpjbrTzC7dbwun4GLZZzwwmMz6RWKrG6vqYeq2e2Mzb1PxjaRK2X6m6GkPSqTP3hASjcDkVDPRuoNE",
  "key4": "2QgMU4GiNcszxV8uhCDpZnVqeC4VCmLqN44aLWupZS8ToLUCjQR9fWrvqNmJ53QV487vW5b965WNyR829meeyoGE",
  "key5": "f14eQw6iorW1p4UAQ9BUSux3VkMa8koKDXy1pcyVouhhEqFzpEbu4pRzPMtGZBmFThN9R9oYx82NHFzP5uQWo8k",
  "key6": "3XuPGtUytv2KNxbacV5iqqzCqz2duLifssX9WsEbupwWQLKZKkPU3jR6LpNNbQemkBPbAXyzAoM2gQAdHm9J9wvU",
  "key7": "zg3sPQh6qBzdFrgU4zdyw4yMBAWyjPoSYUp9ETBrYFi6YFR6xjM6bZsb87Mp3jScAWJQQdmGgY7UdHj89CJGy54",
  "key8": "3oRetTWAaWzhEh5Fpvh8Af6fE4YioxYbxidaMa19yMZFdZTk5psSMJAsHxHEbRNKoWCreHCCGRBy62DrwgeSYLUX",
  "key9": "4ztV9wzaVkcStCEQCSfkBtfCVReVFsFEY28yRkVjSN98MV9CLRm16SBVrHkiuanXNqCZK79EoB7WM7H28umjYXV9",
  "key10": "5LN1gjmZ5M9Y1dYMjkqCyziXRMrrypJ98Q4e8hn9LYh5gUTzUgpRfi2F8394wVJY6wZKpkf7RTCgHFKutZ4soo6z",
  "key11": "37bfmCcGQaGGmR58q7bnfFVrtQDEnk2CgqKiCTLKCA3XQmobpNjV3j1YmM5pfjRV9GpXeR7EBrJ4Efu3HdHGpbCh",
  "key12": "5VJpTqTW2muQALHHBC5St9chkRiQohovFjsSZzyZ1VXXfadUt8ECLwAsGkQmt9cgGX7Lj5aqWDPXtbTeG4MY8xQK",
  "key13": "WZGWzgzUXrWmtgEvAXTEoMbTRLvGvHe7KcoAJ6Pd8RRuDxXL3o94y357UcYCYwrEV7S85MdEmLgs4GnnQ6GuSX9",
  "key14": "32xamGRcB2DWiQF5iuSwAPWhjFVupnEKXmjJjdVRCGT4mZQ3ewbgpTWJzVUxky1ixpofpxHqePMr7eYnrEjRkqu3",
  "key15": "2AP3Un5EDUxoKwabJ92Ax1zhcWvXZYdAhNawZGXyTHcMhrG6JptErzwqf9NLjuZjWfRNER7FNG5UXFMtZTSBAang",
  "key16": "4oxnBqzStRW1SnWCLerrTqWjBHFZKM3HPY5hwPgkkNNjWGsLKVvvCNPcyEPdiG65FZhEEZMBy2CviL1uLeTZVDok",
  "key17": "58jm2vpxeLk7CoinQBHiiFqYKxX7zWjKs1A6TbJrVtz9HSZieBkcYJLpdwPEhpNv3EnGTFb8pELvRGV4CSnxpiRK",
  "key18": "2GKVFVa5YuQJ7ovVcaqBkEo6895B3MQK1gr6puq45F8WhDKBVhv58gJFjsAbAgUnBq6A1oYfpVe6sBwMxegUCTCA",
  "key19": "rzHyeTgiDaTLEoGZqJ3mZMLH9re4bERwyKbxzrqT6jbaYkT8bTaKF4qu6H32mhxJQ2oEzDvumqoJ5uwBKnezgWN",
  "key20": "2dF5yGLJRm7KPe7RjPcsdZH1s86Scpi5apG6TeKvX1ho2j3Fm3TVoxxBkVEA8pUtwyzJs6VQ7Hb3L6xDRKzqxXN5",
  "key21": "3yRiEkdSFnS1mZWUEckKdpMGfRQp7jYQu7RRSegYPF2UQzyBDwvFatFmd8Mwv81pSxdhTmqRaJkswTzycXuHfqFW",
  "key22": "668Zuranu392Qc3QVrRu55MD2o2wjanEkF2gdZrbZTsuTmx934wiFcdxmuoKv4RbuXAeBcTuoKiqsvtaFWVv7zYn",
  "key23": "62KSs4ycu6s2PXjtXH9M8bAYYTGnuwABUP6b8X78qNaqjfSdW588ino3Za9zWgpVBn4tmgMnD4oSdeTEpy946yZH",
  "key24": "3vd79LWGNJuPQpWq3eekz1uYZAbx86iRBDo89WPbebURHacoMSMcV3RpY9nq2epknZbUqAKLKBs5QrZzKqpi27gS",
  "key25": "2AQWVhituDVckjyZtAjRaxFUbKsu6b4R4PuL4wtBSmuPAMM8quRhhHHfYQuUNVCmCeQTR896MrpqDZmpVnfrwm4B",
  "key26": "3TYEtkTaUx7c3Girz47as1z157aEbVVcGFvmiZNJBzG7QrQS6rZNtg7oiqXyuKs763ezsr633TQm7hYmeujq3Nt4",
  "key27": "4Y2hXrtyGtWr41WboSbA4yTrUFrUSvcGgPzjtXaBfeRLSfkqyeA2DsShqhMAXxgToZdAEPHmXr6Ai2Rh2FgNNcnq",
  "key28": "2STNtaJsE2MbuTdhUhD87tPxkMyC5jc4tkDWeb5HpTqqK5R5BQBMF1jgA1vcHsqSMrAk9YFH4VdXN16hj8211NFc",
  "key29": "2qgPrQhfY6e2ndajoWNXFnNbMDxBQ3Qo8uRzhHhVuDFxpaDTqqcYY97KbGhNR6eNHNQ5W72rUPp4VV3HpeLW7hK8",
  "key30": "nL4W2maF5uDcqRQufTniB2PsgHQnWLv4acEEa3NtEkyrET6iRdg41xb8gw4mXDXq2v87VbRy2Fi25FLuwcr2KfC",
  "key31": "2hLjDVKtGvXjjsaLJfUbQXWuqUhNFeLNPXXXTvdGevX5BdB8Uigu1sBMEJz9RYbmQPkJn6JihyqQcmHdzaHgAh4Y",
  "key32": "55Bd9aMtBBaSSMg2xzHVgcCBNCJrKVnTGmxFEbucE3VEUgoLRFRxoJpzNgq12Gb3BqM6FJpHmJT6rsxtQQBtcpeW",
  "key33": "39FoEb6nmbxm6gzp7TPnX3GAK1YHM3fuiPGdHaNmupMjfEHJL59DkNYkQ9ZehAetf6SZ362ZMmCbhP4TrrKVJNds",
  "key34": "zafJLetwin2mdSTxy8y57jZcVQyrbW647GBij2rta7U8u9gN359FtAkue2sje75eMppQaESNWtm7A5dsroC3hdS",
  "key35": "2SkdEnRA286sHrKPnYQcZcq3m7i6wy1kU3JdTTpdGo7yLAzFfYQBvxFR5if1ofDE9WJ5KAJBDEPjrzbrAkwDcrD2",
  "key36": "Wp19R6ab6b8cYUpXXj9VQBSog2mB4cGHmu6TYbMthypMfAZyXr28NFQc1XYLCZcRwoYdrS7GfZh5KndfTanWx3Q",
  "key37": "3qPCVeBG8VFCtSjEodmo1NbKeW2XqmLUefMTTnVqPLuoXKJFgAGLmSwqHS5Cc7WkhAM6mNYD2WCYGHsiQtnfKvur",
  "key38": "2doNfqKe71dL7L1GJ6ZRuizoSYHq7Ae7XMAbrpT2xDbvBwXWZt498UNrSVo5RbWxqCe1XXMFqYt4NrLEU9rTN9Xg",
  "key39": "5AXKzGJE4PkJrpwQrAWJAp8KgjRT269j4jEuG6QcSQB2BwNwem73A3kdNY5rudgM59z2PDRu6T3gV5sNQdCa8mue",
  "key40": "5fwAXLy6sHhHrkcwXHGyqh58q7JxFRAR4usYfsLP4ZUD7BV2MbpuPahrNQFQ26pVLSv9LQutj5PNwK9XwqTxA27e"
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
