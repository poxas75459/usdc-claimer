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
    "5D64GAksSiH76Lkhcg2nY86EV6djkQxhAzccvMo7jHkfAXmLmJP5ZQxNTY3Fujzk28N3ouHx6bMhW4HTQnxHd6e7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rYjEWQv71SZcATwiEAjSyJu3UpwotVSvhMG9VUi8ZAuXNGEngjbG8gnnsGNKbjrn7jKS9pyNGsz3isnJFSmHvj1",
  "key1": "2mnajhjVvVts2xwLtFCYQG8ZBdjnBd4XoL3NTYFvJAmtZ7rUTf8Zyo49pYtiaF4U6oqgKTkXyrAyNdq2RwFCtCoL",
  "key2": "2EupZ9gWQwdUenQPNT56UkYKG78K2vPAjT9AebPF7U87PhGe4WX92MEWsiv5yYoYrnu8kCemynTi7q6S4N1VoCTv",
  "key3": "5PuQXDEDGMEdpCfHS2AvmqEpHy2KfYfKDgY2AZ8eaTKYPWX3Xua4dNvY7RczmoMV8NCqjDSimjD5296hntqzoAsj",
  "key4": "3VERVGJqQN9tN9ei7axguWkvUcpirb9ijM8BYmPAkVX6XFPY4YtpoaArUwV52ie3JjpXzTp27AaGbHqRZ2c9DPBc",
  "key5": "3UEqTrSqi6sNdnyypNrMWL9MEJrouaQzHjnb3KsPtAWmgcYPUuxnCVXH1KatrFBn6XV8FtVM7SDggymJxFjEPCvA",
  "key6": "4eD3Rf8UaNUJfD6bqEpsjAC2HY6QpQZ2vMDciRU6n2sYr6DBHsQdJW6nkfb5TuXSLhS7DCjEf8NeWpAuQdEckeny",
  "key7": "4HWGgNgGdYZUbJqUc6fB3fUtTDNRutbgq8mHRk1pfdA59tFR96bdat6D4ow5bsHfBJhEmNbQDfSHYo1oZedNM1fr",
  "key8": "4mSxsAbyru5TQJNdPt2tgbRxQTwFjru7xsNXmbLjSRAkf5XQ7qQRXaF1G88Q11GsR5TgsQV6ti7RVMwZvMLabkg2",
  "key9": "WyvJixowz3oiyUdP5qtRaK9vDRRUtDqRCT5gqNv91hMsJm7k8hphq1no9Bk3xJPunk6uvEe9j9rtjnhPds8CAx1",
  "key10": "3DKLzwwZp7fVBfkrWCUTjAC66AFk28XNaCrNqXFKYgYzZBACb25THtNEm2xameV91yDomar3EBCJcvc8Nkg8fd98",
  "key11": "5vy6tcnCBZ7Yjy2D2L6AJsqnkj79VmhKMJAfYNrHnThyQXwkbm9dE134ojqWnD9EizEXcHEKcamwUNQ1hVNCJJLs",
  "key12": "2gJ1mQ7SpH75gjWQj5CB43JZitJe38Nc1HMaN2WnuzXrhXP2znnkmdC5KrAFF72mbF1qkGcAsN8Y3yHo6yWqUf62",
  "key13": "5L8a4S5MRDxJ8xr5od3sDt4VXXwNkZD99NRXkihYo5n4unvsiVJJoZhNBnmA7iZU4QKsQpqBfjvAHwrgTgdACtjK",
  "key14": "2Vs1oT4VpBFjCrsQkmuTNvnUZ8Mk8ihHGoWjfkYeg8wHK51SF86qmRk5GNxwwAku6Jx1nZD99cWEKSE7VDeKjUfg",
  "key15": "2y1oxVaysC7SLjJHnnc3m9dM3bVMYcTS6rfYwr4ZbkN8YwsQd7L6P66fMvLo6NL6oSuQEeSFkJCeegeR2kqA9VVW",
  "key16": "2WMYZgVqakgaoQiLbEXvZMwigZqWw8KBDCZyfuh18DLBBQBpdAyyAoC8QENY6hEVq8ZKHFScHwh3RBNxHwk7Zxpw",
  "key17": "2vtfy9mBXZCu7TqWonzNQrqWfc3JMh4tf4UXQodTnUXXY9od75WMhUwAeezC8Ak8JtJHyjsHJcK7aeAewmyBA7pm",
  "key18": "2MDmREoUAcXmeschWfeEfftMAcVfUPoPb8PzXiAhJZWgTe7YSPbSw7JaDArGUzgYQ7x3TAcyw5jrr6AashtLCuAk",
  "key19": "4D1dGeCBt6batP5VjbSGSy918RzEf4Z19kKx187y6DyDKyBZJPuynja68x8vggY9kX7BJSepvo3DiVff8n3uVVsy",
  "key20": "4eJdJGaYLoTFruSfrxoEr8axFPLB9TpuegLCEE8vaTWssthubN9v6m5wx6sXVhkVbT74QDMquk8nDu5iNamRGCgy",
  "key21": "2KZ5ue58VpSZ1pJULFc3tvBFwce32gLudQ9aeSbBPzga32SVJyfUDqhUwhnoTKPYXzK5pWjdWYhpmm7SB1DRarz7",
  "key22": "2oJdFhpseEhFk77U3NRL72jqm4bAh2r1qByCHBC153AZ5xGd5YFyogphrcsvirxgDFigHhzxKp4cQtkXpeZ9EBUT",
  "key23": "591TjWbXNK8i46ekF841w3DDrDiDMFwbr2xD7iPmY1vAxBAXy6Gk4V37UUTzau5B4tBHfGcJhMuTFwVeeBdV61E3",
  "key24": "4baeVURERTX88fSCsK31xRRE5mnenbx1EfDgk9Sq7Bjf9Z12F2AinBwigubJibcumLozVyP6cpUAqHL3MQ8Ssa1X",
  "key25": "32TSBKo9V1X7Ada2R5Zn4STCJtdrf9C4vH8WgLs62sbG3owrxBP7KTxamxfsi5bzM49Ktsa37SQHMzed2zLnWhNj",
  "key26": "ZybsHVWAeLxFi4DYXD5xU79Mre9RJuCvKAiJyuKPo79GqcJEzV9gP25FD2U7EPsjbGevM6t88CKdLWt4vXPVHES",
  "key27": "4Y6YE38nK7aL1phMFpW5xTPDSAotjMbMprFBJMynJwQFcL4rVmJ83BbfrETPXXXD3CmjyNTeHQFWRT6ULLCZQCcU",
  "key28": "4VFrDXtmBYm4FFwzD6QCcd7akoLdsATgmPt3SdN5KTvf5igFPojq87Ef96bLse5Mss9ugdKZef5X3AbHHKqkbNV8",
  "key29": "3dNbCMYMhCVnW6Va2NN2h6WLTXgqwbFRd3u7RAcffC7GQrWgfH1B3qssVssFmF6s5AXLYdMbtwaCiceKyNKywBgP",
  "key30": "4qPoYMVF6D6MRsLvnANUQS4tHtcD3dwQWXqsZVNNnAmLGvtPzYHAZouq9nTzk5XqaXu3udvKhCqRymBmZrfuErh8",
  "key31": "3ioyw4hUVKLWJktkSYRvZBieeYmZDk4or6XsHFwqdeHSix14QDXB2y8y5KerkFrrcmUrZQHysE8nqsCob63M7VXX",
  "key32": "xjZ4XTPPE4a8cNeeSqEXcqLEEWKZ3GQjdfatzcdcPhMXbcS5PcfhrHuRzfHyMV5mfsJXHFvEj3KQa7snPeRddHU",
  "key33": "5ARLyyVFFp9TnAQL3LeuvaNZHhNULJsgk1PSXgbmsivh4tB1LabvF9e3B9CxJZuptRkLKU9gwVzReY1bhVAh7mbs",
  "key34": "4bL2ypXByKdgjzsBw4vaYYW3GtL2fwYY1y7KopPvZUAErUyhCkV2KvmgD9Cwut5d3moKs2SKK6RcKuNVPWCR5LZv",
  "key35": "4FHUAGoABtDP3WAwQvkM7b7kq5DYQVqQfmdR2nUUv1aWUQmqfobHZik9RjW5JPQHhaxp2PrFs72V4Gse3HNM7whs",
  "key36": "4ret6SWtbQZnCPxMgnkFLBb6TT2y7yiS1Z9saHAWwar9NCCb3QDTGeKKBk6skLEQuzVaitYDBcCGr3wYoGpj8v5d",
  "key37": "2J767fyKMF6fuaixMe9fsF7RpmHX1aVJpQCMpe2mY4fQaEU1Yg4g3jL9gkwxfu6URca34PejnaGvY9TbZySxyAsX",
  "key38": "gAhFQ5Y5TWuiVyLXdsRcPgqvyFvYnASAkDYP8ousxLmDzuZFzWN5vT31mUEM4cEAyNitsS1VHzfUQx1GouQ4zMi",
  "key39": "4W8vqvpLeEKA4P5kNvb1R1o2TQR5ayWMpm16jUAhzqoSamSW4RXKFDbj9HPmYpuoYuxwyaHhqVxn9Jdb8UdJnG2x",
  "key40": "oh4U9EDdXB4oCWm694ckZyk9LdPqJCw7Wr4kDqoXchGVsTrTR4yqajddiUDJCe2dENz5Pu9uVX2fcQp81Ackt3o",
  "key41": "5R5kyPH5MVAs2YeLFE5vypLT71AAQCTU9UikD7otGYwvRooYdrVqoP2tBu1A4g4Lnyd4f2UPKsgk1V7E5MpqKi58",
  "key42": "4BfBPR8SVss7PpBYanydzubXDBLwmKYH6kwkjaP2ttuCJFbjhXao9VNFBCDWGMbnA2ukAxz6tX7gKkYdJbJPad7q",
  "key43": "3RVXqAA33BUZaGGv8tyojEv1GCtgMfPUX7nyBKkPF8QDem7Tb6u5Ya5LcNG3uHSHb7Y6uPduu5FpTUSkPEnVfq4U",
  "key44": "kXeb6WnN5Gfczjs5ykbEHidEgBGauPz3dfP6PT7XTkV2eG6EQxtN7BokLeRvPUonNfLAYUsnhrvnTRmK2aNw15p",
  "key45": "2MTdpZqe45zHHu6hjCU5UbkYY1D1KZFRNHczheauT3uqXsjPGXV81Z7w1U1jUzUAVdGKjWLLijDi4uVvUJcYbvFp",
  "key46": "5Lgqvd94ii2WuQCxLmWsPPBTJKyQvQM1zkMpUefpES4aWd5VYm23C4b1ALeAYzQaoKLwQ3GSV6zDTvq5Y5Zqnt7P"
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
