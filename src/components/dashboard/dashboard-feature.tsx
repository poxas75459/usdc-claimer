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
    "28J8wVkNQvzHaeiaVsVRwStGehHst89juwFbmKSxhjzDUASqGSbeSYZXEaLTPghzJSd65mLCoqHqjR1npz7Q97GD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLxbpB1sAmiWNrF9GBkVoSdVoKeymKWGcrzG1EiYTS3XLqaotGu8VKBAzMwkNJNLb1JqDtcBVHrGT5H5JjDTqyQ",
  "key1": "4CmQUkoqf6cJsZ7QwSNwVSqCj8jowDPG8yWAKNstZ6mCXbXhQ3vABUYQkuB8iaEJ1x4WY1C6rfWNPdRFWfnqGS6N",
  "key2": "3ddRhFimNYuyGXV8pS2uAoom92NR7bnXfmADmx1erAqk6eeaeKfrnkuwAmiv5qKJmYJPDRojcQ3jqqpnzraWCZEX",
  "key3": "65K5pDVEJuUCQocH52hSy4AXZ1Wfejr9MNxvwRAA4aJqe228dgzpz4mshvNdadSU87BzpnMUfESnDRsoR2kmrGDE",
  "key4": "3oYZuCQ7CLjq8gKCopGUAKurJFYYyi3CkZ7uxdAKGXrLx55yVuUkwGsmVrFp7CigXQ5RuvhJdC56D4Rt84uyenZE",
  "key5": "UeHJ3Q32GEpZasRJ9vZs5Yo74ZQtqHqRYzUuXujYnNn931VDbsBUKHAjMR89wNua9xvujwJN1Z6dcqrAC7JbsW2",
  "key6": "5Se9KP5M9oXSpSrmoxcuw1QFbfzswgKVKzbRKwUQ1t2QeyC1JfnPgmGJ6yrwSZvqCB7PKeyyC5L59f5VQM8aAWdM",
  "key7": "4hZ4HqAPqh7z1Xfi6Qy4eazmq5MYjwbdQ3DoWDjQM9TqDcZ4z1wSyPdEAM1pAzhCzh4D6h9NGs2MZGbFLvwN5GZM",
  "key8": "8699kSrbeN96bBC2JLjD61LQK596PPBdd4jaqJTB8JYnubrG7XEwFenqXJmS2UxbB1DUzWGzddQTcoBUNxyEFY7",
  "key9": "H2VSYCAXen9F51kxLYuCQ34kMng1yZJCk3D8CVz81yEV2vawStKWTdYhbSg7BmZn8w9CRbLMka6snLfsXKoVJfF",
  "key10": "633daU3j3TEboBwgE7aGwptPUoZfgVAezboEibbiFGqvZ2EijN8ooNXBWDrtQVXTXr6Dxyqt9p9NS2TtvtroAeo7",
  "key11": "NW6NLCh7mcEdsHscHEUnCe1iFAS2V6foAHbrzYq4QB7evLKoqTsDUZhhi7FfRt1xeorA8e3VY5cPmpTnDjocKA2",
  "key12": "xXNVa2BsRgUE38TjZNkK8dDGqt5sCHTf69M4cxDLwNZAWDPLxpC4YLJbeMX3SMESMzvEPFfesKJNCDcq4sSNLJy",
  "key13": "2KtX3xTghS2RDWi2Pi9ng1je64jx49fdXL3LcvSzqZ4Xsdo1VrKVER4uGv6TygUE1QS7gh2TkBrmEHn7FExoasSi",
  "key14": "648APZ2CzHAE5qUfCmCY8ftyqu8eSoWv8uXdcg3RbASx5waXmMMjUdWYuzm1YKnnQRYHAaXqh6wVv1X8rY5tF8Lm",
  "key15": "5ioJ34gWZrKxMTx6KPw6CCoestBJ8kELPKCaedBpAzAXXcpzWuQe7jSzbV2FDLkXu1gGCpEkVyyX9z6zREcXj4ZV",
  "key16": "21CifrCbSz6Bz6Bc7juAyes3pLnj256xDxKkUo7fD32Gy3MctTdpB8P6dpoodbdk3qJCPVdGw5fTfH6MmaCdP2CN",
  "key17": "4hHdNN8Ah8jsaSRU2hNHvTpiiJ6MayaE189ZhV8gZyDVj99W1hXX8SY3dVYLJPukxV3GcUr6rTEFzKXqCCqxVkoH",
  "key18": "5cYXrDTivZhttKeTCaGGFyrNMG2i8m8yeSgdMZ7ZqaTaHc6ZcgJGTcBVosHmuaXkcynKTuh2epwsPw5DnQZyzVTQ",
  "key19": "5kBgDq6zBvVECAB6i9HfZWew68uudfUVduhSVJGBqGaB25h4f9Y3UqssQC3i66RFoSnzEq3c9bmkhvi2fEsfjtQL",
  "key20": "5Ceo8V1W6Gkq8T6jB5RdG62SeHqwvAbKN1L83GMvjyuHEP5f6SPZs58eGSSgivPTf85zi4pgxe5YuAmaj6pLNkyh",
  "key21": "4Tbs6kdxF5E2xQqdqcv7WZZiqJZMzt7X69bL4dZhsH2UK6NsWxm7LhzKKhWyggqdbdG5BpuFQjUHmGFmikGL52ro",
  "key22": "myZB8BjYX8qNQEv5FvBfnvyqwHoQBDRf4FrjtptZwUsspYvg54Wvts7dVkHJHHtQGQwKHi8iYEfK6QrYGBEDQ2r",
  "key23": "24xBBUNkUvg3yVhrsRagpT4akNTbXqng2jwH39PSPBg9dW8YHtaeYs694u3PeTJuyR8iuQdn1uthskL5JsJJXCMy",
  "key24": "5448HfUWXd5qaYeQXi56mccuMkAskopGjvFh7b5zo6qCD4TTbb8JPEiWWKAFToMqx9d1tHmXaxb5Xy9tQZLjJm26",
  "key25": "2FpoxMrSNG8QoHxMdbMsMXUwnD4eAzyU3mrwEyAquDGs8Qp3sRyiNRcj6riKWk4h7zvWn9LXNCFT1wULBozGqihN",
  "key26": "4twVgEkgbjQToBfx73RMidYggxNB6kiBcR7VLA9BHVHq8JEvMVKq35WbNXM6Yqzrgp7uYKa3vUimyUJNkXQt5DQL",
  "key27": "2rSztyGfmaC256fuRJnfuQ9GDuY9bn4Ak3qXUUiFPjvrGXuFdvxqgK6NYCmvESD9XBqF3FbW7aKEfZWhNwPfNa1s",
  "key28": "5ujcmwXWAzPnrrZEtD563oSaYm2uz1gD4Ntwmey2mzGZVrxBbYqKHRPv1VZeM683nqyWnwuyYof922CtvAxQqU5j",
  "key29": "5LTZb2UbYHGVwo22vcFaWHUp2DWgZ3CTxRrAQmR2hTN35wxd5RNPtWv5WPBbZdgTKfmUFvnpUfgcrehKxELsHQud",
  "key30": "3bB3CxC3mqdzrqdS3GnawNrBmfNqX9yM7NYF7V9yPigrHtyqJtCZo9KNtYnFajg3v4GCzRqmR9z2YzwwcrbqH8fq",
  "key31": "5sxAfouDdtHeXLXHXnv1umdPGGNaFSA9npyEy4YgEaNeP3Tu21114obexDNcfAESN6LSoLJKEKgVLnka2Y6ijdaM",
  "key32": "25HP64FmKZqhWibnLuz9kvA5frxQ4w814RiRuJzsh27zs3jhP4btZY6LrFMmMjGDZPCKGT9GqKqQox7bCmEQpijm",
  "key33": "5Ennq3N8trVvtfDCv38kSXfCCBXf4TiNV87cATV3ouVQsK2TmYMp1MrW9KyLfj389ykydP5AMEqT8yQb7WPEfNUC",
  "key34": "59dbdhzSEXbjSJHQKAuin1DM3H9bBLYphpkBJjQtpFpazcefyduVBnK29iA8wDxsbaqfVYoqE4zhq96iPibSEzLR",
  "key35": "4CwGRmCrnxxPYCHFMbYPGCYj9HYtrBFoj9i5KuDd4ZLnb2zeyqrgFswC8YUGEfR217EBmuZm1jLzErhQMvFr6myF",
  "key36": "5DryEkfhBPntBu9TxvATAyjna7b32Q8xRvtoa5iHqa1aTZJrKx4nYGWd3RRGVfEEY1Y17oW25a6tziwQTW8qQHAu",
  "key37": "3zf96bmRQtGP8V1AN1yZYjZ5e2sAfBrK7C5RmFc8q5bWzjhCm7HLfgtKfxA8MLEmUepqUztPjkmSPCivqSN5sakS"
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
