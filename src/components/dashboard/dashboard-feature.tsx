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
    "44j9psfU9N8W6HL5wF9Ztged5urcBCP4ntE94gNhNQtenm59ik37JnqELPnypMih7AhLcZczYkDCY7nfTpLFweH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Lu2Ayw416ayRyA4M7oeKB6TwJ9xLZVNbDrVdL2kpE7zMsBjGFEza36zspQNGyrSDPihtkC8D9MAJHdnbhiJLv7",
  "key1": "5gD3KJrVSz14o2FdJUewjC1t1SnEMtxSmgrPFhhGMvbJp8pvEFQtcyWTpyGn2zRaRnbbQ8EDUvPFu6GLGtCPwwWj",
  "key2": "51p83GQEeVzWm6AV4neqfu7E7Ar3uonYgcj1b912muXUu5NxSKNYPVPMFZaf9Fk5oeLkaSF7CMjqpmwXi3tstRWT",
  "key3": "32b7tCc7dTH8yM4vWbUKpBcPMJdNxY38m4oYqghUhXeQDtd6G28EdeStRFh8iBAHeCxVD5jrNiGfcJPxsPT2wn47",
  "key4": "WTEEiwKkox4nydzPZs3QbVofuh76o4NSWPocpPhjva1J3CX3xja5QggvfaV8WdqSRaD1LPh7WaUwqiz74E7P9bE",
  "key5": "2UhUxAErAwmjGSyVHsZd5Ukt3N9HoL9RDvG5nP6mCrshZYVfYTz3E646a4bEvtsHPXUWNmCGABgeqxAenZsQQb83",
  "key6": "425DxY83whnw1L96AS3foFwn2u6sS9iNuJqi97vVKY6zpdHN97V32vfqrCPry52BxBcG91P9rZBs8TuWKBPaQn8t",
  "key7": "5nwF7NEhUvFLXAeNxS5Gyenn2KJ36qr9mw7t8TLQV8Lb2ViBc95am1MQZJtmzZCFrhY5oJ6f6WJJeVAJrWPLH6Rb",
  "key8": "rT8eMZpuTRHLx7T1qoCo84DrC5yoUXSCWisKEHXc1Un2bo2ztCngPhFDexAZnNGVKe3j3q8T8znNS8Kq2ePZDCK",
  "key9": "5QUsmKRfnVFbq6HmjFYpPHQ3jb9KUDnF6sgqB5phgyRYhquxLJHecEJXd1HL6wm1X35W5PXpLCoeMUVyLyXHG9zk",
  "key10": "GgF7QLmo2VW7Y6heWaFDtTqt9J5kkxaTs4CKRfELxrBnEMknGegQx17VnkMknSkRxgKCfXX7SRgphNezDdFdRRp",
  "key11": "3x7C9VfTVCQX19XFJkbUzydskC6JYpBLGtuovxzC2VU5Qf6ATYgtnGuer5VyXBeSQW2kXQbRnhtjmc54kksBTkrX",
  "key12": "2PzmDEygAGaWGpjwc63yuP8VfS5JHBsMvz4smrZLDGa4cciXpLg8gWHBXFMq9VLt47YpUDHa7tT8FZsXGZNFYXwC",
  "key13": "hBPRXVZJar1pxePATVA7T7FDoZ3BN6AyJLsku2wdQq87eT2zoJQMD8afGHw6buGUccPh3wbXgsWq9ydm1HMsEYy",
  "key14": "2wJxBTUJp2XYYTWXDDdyf7xTx1LcCP7A51ShJw4LdgS2w13NS1EFqAkkENUpzs7mhjDfPWBx2WPgy3Urp7M1QawM",
  "key15": "7JL1eKGYFcECARCfAbbzqhUen6iiAUTaoEb6k5H1Ej6QoDSxWBbBQLYvHiYmYKvd5eQVSejjKMZhQZ8VsosR8gy",
  "key16": "5KNG3dZrnciNoTztBVFgZkZgvRCczoB4ZEkAhyS82ErVfatZncf8hruNHGZpkDbT2sqzkLLRoxnbhwk6HBKVgcsu",
  "key17": "2XojqNB9vv5MapXe3maBNTCa1ACTRXGtMXm7TJgzCf2U8jJ8S8KsJJVo3JmLmcKLcG7pSyKnRcaxUsGLFKfp2mfu",
  "key18": "FQPxUGojRtNwDhfFW92Cm8jVfzpHmJ9aDK28vSRfsVSRxpgjtDaZ5S4hNVG9MziNYjTZzpSEaJtjuF6ibKAo475",
  "key19": "2BPL75q2b2HqppeC5thsXnqmy17fvW6HWR27NpNsAfswHTAwC7V7veR7yetuFhDmrhE9jusCr1u1NSGTpTRbNd5J",
  "key20": "5prpGCX81siZLZWBu4iYUaEtDiuw5eLyNBmwgqPUA6dJrM2KWa3TqNN3Wm9jVMqEF3YKyVRxGAJA2MXf6X3Bntoe",
  "key21": "47uzbQcJR1DabioPCCcbSMdqZKd6KHYQKRRSBcBta5ms9M2trcZfMcRLCTZSHAQ9dMXSYvjRN7z8dKqSs2r7WNXC",
  "key22": "37oMpyd5A7PhugoB2MFpviwfZU2S59CYAPDSM9bAyy3fh7A8kcfmQCGHGEG7en4i8Jxt82SirBL158LpaYxxaaXD",
  "key23": "4FrwEjP927Wfe2K5tVPTn2iJUS2Bzk82T7S2Bk8wzxKXkVmvsit3v1f3sjXLZnE1VbGcwaD1GVYdDfkqYbqNSZzv",
  "key24": "4TxdDNd4C6vH3i1PxFQZuwJjUfLcYjhs5AsAku5u9J1q5aVg2qCyrTv4B7oFKiYxKqdu6yUNFeESB9iUyeZm1EEy",
  "key25": "3SUYu8qrgN8HfR8uzDPynaGW1oEwQEtjn8BeHZXxqM6qBcktHdfhXqosN95GzWUZoND7WkxvmTsnZoYmowgQZNpj",
  "key26": "3siLHZGFeYCYEjQi6rZ8VXTfcXxvayfmXBXC3QM1wtnLbfWgbWCqVok6Q1PswCfXDWxwTJegLATMRshmtpLpuCCn",
  "key27": "3eTeWMA3o4xeAXqGG9aVdnWrEfgY6vjsVBz8wHdpFpvy4DXPFVY9AWHk27StwywKttdVSxAURVFccKEdsvvABhkY",
  "key28": "2qyavwygTkFSoYZ2mgv9KSvyPQqvyFX35qyScTucmYPdKSBk7odk1MFmehSXRjtM7VxurAUrpDjUCTFZ8y5YyqXL",
  "key29": "4EWcBQA4Ua3t2Sb79cn5EPH1wi2jxfbx9WSygyw2be8W98YF2nKmCZSWr9pNUs2c1a3rftZPvpjRgfskGY3jCzBN",
  "key30": "28KS48Jt51rtkGDaqH9psatYT35Tm8HBksgYLE3ut7WFwQbLtzmy8zUjzjDijvhsHiMEGfSJhjznad16P9W7bA5q",
  "key31": "38SV2xXSrjrgN4nEs5EaqTxXavs7sHHrCucWf5TyhxUxPz79CGNbUEKHjckVvkioY6ocMPGPWD6Nrz3k2WgXYJPe",
  "key32": "2eBn5SSnPmj79zXvs4EH2MoYDLVKCx1Gms8MVCgyfPym8LAX1QuVFGuKMcHHkwkxrwQ9uDWZVXkTz8YoEH4dc9RQ",
  "key33": "2X6JGysLU6iiqqCxq9x8yaHFpzNyLS83SksZNCSV1w6wC9zxQuZjNcVEspWnyvyLiV4m6bgtqSwqeR37GfeyHRnX",
  "key34": "Cb3ZVLjxew1fJs7kTw8hDS9jrk1XMMmNBhaB39iy1r1fMhEcFTJgL1DzBrRWxERh5rc516XkiN29pLYAbqty6sk",
  "key35": "4SXSGVG7L2RL3WHV5h84K224Vjtgh9vC6ixwCFMnpx36Zyr1hMru8EhgVeNUr4ZJAjZTJkeNPLMA5NLsrqaHfQZP",
  "key36": "5iMUo3kQkVh1WBd16LmRy8yM8CZsxfborcTZq7BfL8Yd7tZAzqzLmsNju3VXqz9gPsMiqZrNNDiVysNhJ1VRYmeC",
  "key37": "3et3te1K3PrnTnv3DiiLgG8x7ohCY1LnqfubtFUbqSAHMTGBT1T2DGhn8zPYtWHkzhwBp5cbDgqUbJWtBeWY4Ds2",
  "key38": "4VbxNfRDc9GBMKf5zMQVLbxcTTB1MCucFv1N5VeGLXSWAvcYGsm3WCAxKHUg7jJjVc7yTHCXoFaGsX85qhTkT9Go",
  "key39": "479xsgrQ647H68LGX6tUaEaxD62GYh4jRt6McNFtiWJCEC3dF5CLgGo3GKHrxZzh5ZgZhwrGmb3fswp1KAMn2HsU",
  "key40": "2RhFmk1RpE7hjSwfVuJSEGkSySFgwDvhpExv3RezJaUTxHuKMy5W2Z5V2yQ4Y25rJjNSryG7tFivzCNGZKDKRSZd",
  "key41": "5CkSBMnzoxbdo5PSwtC7MTWGvp1ZwoAS71Xm9PvqyfMqnDZc8MRKjK3RA87TPPJsGrHpgGouZ8gHKy6c52T9GvJL",
  "key42": "28YJiipUGEP71uV6URGYpfZjzavZ4KmYJ9wsnRx1GyiSrWrta17AXz28YFh9hPjjR9UT7r1Nh7mL6MaUnCNTonYe",
  "key43": "3J7NirKQXJJsJNeHJDTzvhWBK1VsgEZAKbFoyuyVSg7TihC4M81k2AsQ8ECo8m8fCZUZevRnoYLLy5mrLvntnMJ2"
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
