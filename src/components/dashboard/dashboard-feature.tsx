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
    "36oYkbsiJMMX9HLicgAFZUjrEDLhR66vgjr1jyQmQzWBtJmZJrBxPKNXJtRyWFYPakR7cPEo6gK5q2zeZMvWzykn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkhuvfyN41j9bE6Wyq2Yz7VxQDXf2vgqJAH7HNyj9hhH6uSYynXb33y95JyYgwE9BQbVmU2BgqtctkpRtaQEL4J",
  "key1": "5MYqzUXwhPpdiNYCpLV7GbgjDJwVsfXGtqcv2GGkGfXhxPvmGthvpMpUvuLjusd76NKTNLfbgXW6DoR3uVsPdbQj",
  "key2": "5ybb91md1qhWcXcusARVgiAHmZyhTqnRXRj5M4NZsfKL3XXxhPiPmsRX4zvhUiMM38YnqJVBp8RtNc9snTQ8xjG8",
  "key3": "tefTfKXFUQ786o7ZgekraVMoTHBTMQAaUvF1nAxrmC1HmnUxXZBbFVncA1DUKSTwuHSC59PzegNxthoKivxVxNV",
  "key4": "5jS5j7iUkuoKHUPcD81zBcmTnzBY8h95DZJSA7923Tvd8gsHcvXd4pszXgsBQAGgVZRsMA1vqtCaaozz3s49HmfW",
  "key5": "3fQ4m9f9tLuBe9MkWqWaM2XJgHU5Hh4nHDdiM8rsyVpcx4JAftsKBBdA4XGeyvBRcnArFoZ4VkWB1NiY12SzV7pn",
  "key6": "35oyyt8vNsdesA6zc8JVmjcAeV7xxUb7epXJQsDcQMCp7EZqtzZBikfeF1dKAH19zUk1TrU4ASTne5z8BddZb8hd",
  "key7": "4SLdYbkf9A4EiQNDHpEeRFMwGjWhnFvFdubPjgNEKRiv4yb3uDbVePGyoFneuaC6yYptKmHDuzsxaTjiAQouVL9N",
  "key8": "2tJgLmZqhQzwZUhFSM33q2sWY5mRa3boP5HWVCQ6kum6jtzbhwUqRW2VjGXuy6K2mviHt36fzjwtMGB6JKPJ8HfG",
  "key9": "3SFxvDo9ojfWxCZNV8pjdkrQojNKDJSvSx8t7E9nnQ7DvPVhtpnqL3oeMQYCL5uakKQmFxyyCFfh5EXg6cUJCwoU",
  "key10": "59ZsACPwTEcZHWQRyUsXepZwwZhEt12bjVVQbBtNf52qhct6H3Rd5iCGToHoeEUwGwg8NrRCYejFW7WdbNLZbuZB",
  "key11": "4V6meBHT7c2MfyephnLPjM4h1eJHbJRWJFsnHvXZHDNXHyeHPGHUjNzSHPQESBqpQZNvgGnHdQKG1DxMY6DKDXD4",
  "key12": "4AXsJEQgum5C1HBr8kXsfv5FE5KxaVgTf4yB7aZijnTgeKWWfxc3EdQsp9xguxAYmheRQKLk8Q6h53edi7mYrCFp",
  "key13": "vzKNibmC3Dg6ezrcXSFAJGJgNyaNewqg2Yjw2f3JN8tyCx279KVkfbT7x2biUTfPJ7XKs2w41VZtEihMdiXwj5p",
  "key14": "28nAVTE1PVNfuMoCKvP67AAptr75ZPPD2sRUdgeD5SvpZAAs4eTLbUjop5N6ke9AveyNmB7JD2eX2nhqjveyWMMA",
  "key15": "4xzvVJREUmZmYeiWMCkGBX6xxkiyG9sq7vYmUuze2oU5LXGqaJ66PFvAHaobHDZHkPEHZ6URChdSfwcGEYwwfcCc",
  "key16": "iDmednzdWePfuNjQ25BKkkKkkcDezCDdCpHqiTam3cK5nRz8FtkxQo5q6oh7KYN5fUwEZ2fKpeofUyYBDfhqHHP",
  "key17": "3RMnq6aDkQjBLBA98Bt9erkx9C2pLWfWjrpS2162p22qhNdXk2o8cmVtkLvYfReVRW8H37JnB9cxecFafGgQhvTd",
  "key18": "YJwxy8Zw91CkdKMkfikTW2irqHVYDVyTp5w4UBUvBDtZ8NqSMojGf5uuquDQgNinwi13zFSSCvrdhqNH6JVgkzK",
  "key19": "5J4238db6bDNpH9WZuLpqS3xG5N9ULcxGjNaYwPu7wrEfhMKm1RkNNTWq9gWF5jnF6pj313Uk5PUSScjK9KTGg6S",
  "key20": "2LpJPFgPb2zQzKZ1gKna2BTeF6Vdpj5gyjoFhNURxhpWYtSLFwVndD4SnjgQT3sxDpTDbgoph71EYYp9rxeAuZXW",
  "key21": "2SU3rwbLbZTCpDeWXcadUKHAQSJNK955jXZgtY4BqGbTV7X2QREN2DemiWmGupX8VuYu3C3eWvoh5ky2xzRATygS",
  "key22": "4xhoKEuP7CV2GXPLrAC11sJiZ6gYwCwya8VGbMitqAT2GkShyxFTxDooXj3MUz2w27BgWZeQrDpxeMtjYRbrnncH",
  "key23": "4qNeYYF1ss5hhg5ZZfhorwxGjB1uQzteyQZtJB6ymZ8UpfgtAeDmzFLfomataixmhmeQdhdPgvJP54LXyaeTpT3M",
  "key24": "4fC4ZbVhujW54BAYQuMN2sF8gFvEnZFWByNU8VX6cAkULyyFsDSgnABniXDvLL1g1fXB5bVeqErqemSLva1P3CSw",
  "key25": "2PnxST2DuAShHkTc66YAgUsoG3rrqgaMjdwG8cSbvrvVgpZ3q6FTH7zZ6fVQXmPMm97WTeT2xx6AhvYhMKMAhC3v",
  "key26": "2LP5WevPtWYvLcXrjVjcCXXP7quXy9WSnE79xDorrR67YXjhZysd1GacSnZrvBu5x9v8KPALBkvH9Lhr9oraMCbA",
  "key27": "5LsaaMLiL4cFASGXmkmT8rZFfDFVfRB5GupruGe7HnmiQcTXsKXofhLaYVkzWM2fmgtuVN2fqK8HvHoDroP6yFzc",
  "key28": "5iM9bdj3qPU9FtGX12EhbRZGNuEZnkCE8oKmmVEMV4aVhQ2k5CZxCpUwBs3F7hrbDXhv5xBoFj35nGQoxBP3QcC7",
  "key29": "W9nLLNoiLw6Wyvmqb3FiUUnixuuNtAM792rMxpYwVWG5pcVdbVzGGndfuzHdpKV2XuDyUfd4ERWDE8EPLg59xT3",
  "key30": "sXAiddX95YcRaCpxHgVvgy9X5oapWTFZZMi4eFyNx849Un3e44eCKnSJGqW8VpfJ2zVQ7MUXhCnFbUeH4osCsHq",
  "key31": "2P6WXag3LA1s1xmxNgWj6HsWYgPiTTHVmE1X7NHyyXw33VjShC2nJcPqkDM1grFpCcKgDR1M4mQDSYoX82TPwYTi",
  "key32": "3FNAUSzdhKYSxNC39dm8cJceT96UMEMppJaYnqy1hbHTQxLCHdqH375GyFoJAq7WcqzQrfLNV82V4ux6wb6dXwtA",
  "key33": "2qUQ5hfU5MqbyNTXBPZQh58ey8uMrFRQ5eGiuFr1jELHf4KLczJJas2S4CqfWQ3R3X4efWtAY6t8uNoydeA2wwGQ",
  "key34": "HuTH8wqTCWjGvivUTT2S61BNA5oB5ck3B3a2abLK8TffU3vHewZmuEzmCrMSAYbTukTjYpXGqKvEs6tyNzinbMr"
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
