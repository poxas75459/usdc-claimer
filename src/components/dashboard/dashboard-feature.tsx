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
    "2NitTNF2dNE2XFctKNiGf1bB9sbwNeizkRVKToL9g4fLvpgK5BDv9x7CZ1Qsq3mvEpmeG8mUWdUb1rLzkQ7dkk32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfq8125xuBuBbg5vi7TD4zhYYBCq4gU8WWpJUzdJZPkYpgqcsPUy6N4bRD4vt25WX1zzTFMoPgUins9e1HkaRSH",
  "key1": "3PZZVMp9rkeXxM5b152vP7QwbYi2XgE86cqJwPdjhK6j6G4Pk1JwJQM96CMVcbJadPtBATcHHfZq6SpvuEUnjE2x",
  "key2": "2XBgsrNtu4pdSnF3SvbVhzaDLzZpqzhdLcoHq3Vi7x2TFL3tck7H5TCy7U2X6HbNwraYB7sT41Y2L74zuAmeKJ1C",
  "key3": "4oeN5vGkzFs8V7bVQWyuDgsKFKWDHxgcKQ75rmGDweTtXbnTc6CNw9mgbBE4M737aCtUKPhVbFoGFSXGSeSuuBzz",
  "key4": "27hvcRPEsjueFy6HutHxKKGyRumBmoAUmmk2mEJUDTdCL4XR93y4isfwWkbbA4XqDkPWANoaBzEmaRZemkHPiETk",
  "key5": "2a3GWQnRLi3tMUFyTr74TJgrHJodhno2eG79kSx94PPVcrZF4u6gL84Uw5GaHCA171ZnzEQrXrR9hEr6J36ptu2r",
  "key6": "2TDLC4i9h98cyZjJUzxb3yHvna9nNt7urTDrtcLrdCiZuP3yiZRpLZDYts7vroECHZXkrrZvNwZLLunARg8ycdVQ",
  "key7": "5mJx6H1AcPLd67My8Di2acV7cdDZGanJsfABk6M4ps8ju9yQYPG3bQGUW72wagrFjAihgZxYpKmYDrdEREfc1LX9",
  "key8": "3b698FPTiwv5Gbtnw3zBmPUee8EUVV5FStagiKLY2Z23Zw5yTnfEvKBvo7R75eFA67qWivvNptG6a6hQ6qj8gmeQ",
  "key9": "3fZCJ3xUm73gPz8wxSnYQv7T6mDFrt4u2do3zJSm8ciY4GyUQZgDCaHsZBpwAmpcWR3vE45XhT9HuqWxj1BtNrTT",
  "key10": "2QMZAMUsLGaNyEv5TNYzYoiZkiPPRfDGs9daVqLVtACtADBbBbNwH24CAtWMEF7iXJBBjGsQpEyqzCyyTfaAhUny",
  "key11": "gZKgBsic2RvDpn4eSGuSaqNeJP12WUo8Bgaex1Rk4sisu4JoARWJWS1aPeLDShA1cqTh4RAh3NYRdkEvFG33qLU",
  "key12": "4R7xxkG5ymYFJci7CZt5tY8t8bDjrfgHAnAtQix8ByUbrcinL7k3FjNHPusTTQDcHeYQ2o1vkPMthsvpQPngin1C",
  "key13": "qEYNbsAqwHWxZqwMv5zfh6juYWAC7ecVVjSgLnRqyPuVuo5JrWWnsTXxTbAgsyxPtJk2g6eVMhAmVmWr2FtqaNa",
  "key14": "5feACit6ButNvD6orKUTzA1PRc5o4dNchXNdLrmPninQEkFfN6AZZtGZJ5o2qxUkTXg5dyaMCjfeiR8PjdZ6nLkq",
  "key15": "F8Se4V12qdPggJgh7otncjP9XJ6FvuWPvDNNsz33QqpnhhJmmDeWUX93Xaz1k4DDBFej7KD4LzNVn6PQhLH2xpq",
  "key16": "2yGNuCPR9k4vv5p1ATjymCRuGF44H75xXzjcafqHtjcMEXGDDKHPKcuoYkzv8og8uZTUMGu9rEkc2a7agyXEED35",
  "key17": "3FkMEEL6Q4ob3ajbvQRmaC4anqgp1fnMTPQMWSmVKB6eCvdNjJyWKYR5RqVh2QB4TjRwApT6P9S6dZ5ZPgw2ZysQ",
  "key18": "LaUd328ETzLn6vK2SvtJSAQ7tq4wiJqCDT14iVgEXTA5cqPz7RXqPDNysd12WeaqJxnySNafRQDdzcEzZgfDerp",
  "key19": "2HPuBbzDCM2FXTD7THi3SadfjQSpXSuvotdcwfbopwTWobPzTMNPuHPLSBC6k99ciWBsfoHvANp5KVkovuB3skH5",
  "key20": "2bSdjKX1MSqhhTFzQ7x6Hnk2yKf7YdPAwbijvgPBFTacy42S2HZbdEpDAGVAdzdCAgiu1kFuqu4r5UdnCF8xuYNQ",
  "key21": "4kpSEK2eHJmvimp7WCUMCSJqcWUzdL4ms3sCrPvvDZz9rCLDFA8AAUb9PUKbr8WTuqGyRPtMM4Fuh1nCqB4GEvwC",
  "key22": "28brCKppujEV71RQPUfVqhDxBnvAZ7rcCCtTYdbTai5p4iM2deiXT5i1S5oYrnYkMT1nUTFJjWYVoRL3q2Se8FbN",
  "key23": "5LWmC1rC99K9s53Lx4ZFyLDGuL4Re3j4YeqpU2jRgao5Rz9npmQDqMRp9pK1PWYYdHrLMkV6FnubtLawvk4zYxof",
  "key24": "42UxHHGNfLeydnVtEKDVoc62aCRub8a9aukgsMGEvXt1RWGSG4Lg7S97QEAFyGCFWj2BNrQBM5MbVXxVeVKRd4re",
  "key25": "2P7jokqf3i3LGFse62FJ8QKPzSk6yxJVf2vW1yr25BwMTCu8FegwepPXCJgLxBs4pjr59btNqz82LZKYEFKLMuCR",
  "key26": "3F6kobVyB1nRFP9GZw2t27n7J8ksGUEsSd5Esw3ibEpMSr9dqqizkj4GksgR7o1GafhVjqjaMDbqaMTQxUxQR9jr",
  "key27": "wb3htHJACse81y87RT718tnsdPv32gTVfM2FsfU31nCqGcNojxd92wd4pH1zibRonZY7VpbVoiYJPb7Eb7ru8KR",
  "key28": "2MSFiPZVohF5rtoPaJzyztNwDWiPSuXm6Gszo3E5yUDE7eQQwpnxLeWe1yAih3y6vqH7HrfoB287n2ZdBpjdUmPM",
  "key29": "3aWt82SYBAFRxps27JoSbBsQMspbp18XA5DGLirYsNvyBP2sT4pgJojv21qRzhqjtUeoZVmJtvtJCjMKj7bzHpos",
  "key30": "2D1aZUFCyVpUovdz9u6vRPv1LqZQAQ4oL58KythHGhQ9HgGdv3r5W7TdGUMXaUzAeQbvymUkqY2BjC6i1s4meTSv",
  "key31": "2E6GNXkk5yz2PFhmFiiYNmQTgmSo1TYRhro6rYgfA1qWN7ndJrau6mwKVJr5TunBXoJx4MboHXgezXFxWm7hjF63",
  "key32": "2U6EmXeRPo9gQvDmzA44kFLVsio87fyo1rBSf4kWo4Nfbe6A3x8pFdXEr1W3wYVWM4Sm1WgiFJei68Xn9oKFPi3E",
  "key33": "59UB3oa1bUuZT5un4CoM2hH8qK3fByMpJAWyekbjzCi3Ajq7668y3VRc6iAYehr2AHuq75CHoWcUcszAeKhfcqY9",
  "key34": "3eXg9trtc7vewtLDCsp4NiPbSEwBHZaEyYmVLxkEF1ir4fYZ25KQAoAdPp2LeiopDv6Qw7e3kEeyTUSAZjWdG5j2",
  "key35": "2AP9xV9FiQ56NpNdWxeERvFgczZCVSxyXgkWdJEUWgiQXDRv5N2WJy1JpEdrjVXbaemA2wKwfm5FQfmQoZds8Sw8",
  "key36": "4g5Z8Gd5PUZBvPQ21DqHpNSDX3QZcNzdwgianV6HJVq5KGK8e5rbdGtyAY2KbUSoEwJXLPRWovEHy4d2pHCtSBPd",
  "key37": "SYX1kKwxQ5uYwWkxLnzdr13ZmEbtVGGmWGjbLm4n53K1Z1FPRWvD6AqcLR6VaVba3u2M7bGTYPsQSoWaC8xeH6D",
  "key38": "4bypFCn9dAhb5GxChTosn4Hdp4ZLPrUK4U4gtp8vjcrYxEUxy9a4bKooQ1i8oiFofYx2yn7Lsp2WAkQxw1EiMABB",
  "key39": "4c9xU12Rp1qLKY5xSWUsbBBShNCwdpPp7gzUgEAvwaNEhMBoXPss3rhH3dvc8gUWz6vyzBnQnR5LyFJB6Dv4HSv3",
  "key40": "m5CraWnzB5u5S23aRa9ENLk6dYWgZHJCNTs73t8e3XR2Pp6r8qaXBJeHevvdYBzYiUKLrC4EpDVvgPg1fWBxeqd",
  "key41": "3ToAE8YttkLRTtEgBVjuKg8inFWvDprQhodLfTpSe8FGoAKPv46tFJPC3mHdkjg5NDoM4PBH3mp8pvABHnFSzuYX"
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
