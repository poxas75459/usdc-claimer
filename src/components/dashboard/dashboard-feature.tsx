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
    "5xdMVwzj3uhUL62CazvEcejx6mcWxXY2QYRXGaCtwzsKfKhznvtqxQLuKA5ZuecCQPyZq41a87aFCtSbEnawym6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599BPM3gpZp9fbweZtE2Hxdrn3hz4MoiH3vx8KuY97rNJ3AxjNfcWsMc5Pv9ktrGY7GstfYUSG5rT6KmS2HP8rL",
  "key1": "kvvuCGQoM3vJPhFe1VGtpZGktVyPXhwBDMseoj3AdHTsUZPGsy7kwNLERypkEFRah7W1juySxXjH4Z4Y5fWdEvX",
  "key2": "2GddvGZ6gkUYe6YXdUGJ7E1irv3K9tweC1Duttj2gqJE1CAqxNyJz9EgM5khpUmTod4hsyb7YmmpkVsGik99iA3b",
  "key3": "3BCW99pFVY4xw7kA9kH7cLaFanwEYqaFCAhppc2mDrue1WSi2Zjo5fWPEvr3w9v2NeFC74cg5aE2SFWSRqfnHS8s",
  "key4": "4nsTuoHfB7qosTcFW8exqxxY44roVGJBeLX54RsSqVsV5oFr41NGHPpu4JZt8pdeCisYvN2pJJve9XSWzCrWxoFj",
  "key5": "4RcYrRrbU8uatvRTgibw7PdFCJPEFTMfqc8YZAooGZSgmTF2cHf1FNMEBcbDtiuL2beoWZ6YsdYqW52E3VLZowp8",
  "key6": "63A3ubpGfYnBYv6qhBmdoNvx2CojxPStL5cbM62H4wred8TWsoX5Uk1Jhye95CML1YSqZQN8oc5jS4kQMsYNXjgt",
  "key7": "4M2NNNiEmpiTaN4b5iWiAi98rS1H537h821VHXbtFenG9eJdHAVixHfhqPKeNk1sTGxb1biYsMLB3XB2kYj6HHUw",
  "key8": "5VkZywjsJ2S4z1h12ptsGQ4DzWX3KLKm1CaCBcGwAvqv24qHDMT5csY2Mqxc6bfbZD1YvzTvgabsYhTKqq6XfLer",
  "key9": "2nUpeGqWazALijMLo5ZyGW6hkV5xaAvE5TnYDgTzZiWbK4mGAcWsZrJznJtUm8HMEPobCz5mizskA2aXAWtHwMQk",
  "key10": "2GcHSCM77eRbE6Po32uqGTKad7YmPoFvqWarXqtXFUtB2PSrn3apXJc3VfAYahLRU37WLi2rmmowC3Dh9qMEUULb",
  "key11": "5hWfK4v28P96LKL8zGtpAAV9nbaPzo2Cah5NDgtScXL4rNs2UP616ELAoEMtRQ22AyDQ39BEmDH6dxBUY7fGjRUG",
  "key12": "63v5nW4SMgdr3EzKLKDbviAZFqQaDbYQ29i3LkZxTRgLXxQhuHy4SstyQjWqRuBTgNC6y4r4HQkzUHvLuLTXNrNy",
  "key13": "58pLhZ9jD3HrrN43oGqvdga83y7qAYWXxK7ErCtsfwKKPAnTKZUZWXUEh8SyoRJvKsffxv94xpvaWLYrPvHM1p9k",
  "key14": "5NcB5wuEWY7X2YuM3anUFQn64jKzpCfRQ2bdyMdYbL9SVFZnRa9SwLCTuqPDzg1pGjNFxp9TtUcsrJnNFweb45to",
  "key15": "5QTJjguQ1bv7MPMhjusWKAPjKniVgTu3X7neM6xHJzTYFQq9UAF9qn1Cgh1uPgB6oh5anbNyLizBD4a4pzBVcgK1",
  "key16": "3iLrg2we3k7kZMyheZAxsvigvRmdWfNhyS2Pgyb719YtA1G5xZG9DhVMS78gJXVHBgB91m4N6AUyWpVyVu2XvM41",
  "key17": "2nPo3ouYzUgBCh1Gyb3dEnX4Ekyu6tZgzHSJ7b2ovqRFYtvcXhbWCVvPVMh3VdWwDvbKS2YPHC2XjxKkkvBwYT4N",
  "key18": "4vfBqQUemwKrBt9eS7VWdmKn3dQGMRek47jsR9i5doToxRvtz2rcHtkCLREjnEntkpgR3YFNKLLcYPagjTc92BeM",
  "key19": "37CqakhxT3yHhHSKXEKKiZntfm6cTPqiSJBcYRgHbud8U7qTvoiXWTMbGdB19hxDiSVNJCLg89DVq9CssPHXmwoP",
  "key20": "oiKirwtErXDfKJrh4SvHUyvzkpohifMJhAHVxrhtntoQuD3hKB7qvEvdXbdVCgWgTBK8p8pz7inaVzahjTfBNCf",
  "key21": "3zt5YHs9dUsxYLJmwVQ5hjtjeosJ13piu3zBQ3MhQqtYUChjjHeEJpkroQggaSS1thS6mvc5pYHzFp4fuJx9u5d4",
  "key22": "4d4FGWbGFY211E1Q9s8BLaAFCb9sEt3v6PeiAaCLiXM957vTKrSWHF6TRH53S4pwxuxYsKPdjbLq2ro1c2dfcZJt",
  "key23": "4t5KskXjmVPrvskxCgbrA7zHDUBJpQFQw87pZ8Cg186sh9YVCJL8PE319prceoxtCciZbN7gDLK3N4vTZaEMQVyh",
  "key24": "Z89GaDotwWUT3er3aZ4eiJmY2KNqcm6yCXbheEYU4wAMpf5gnHiZ2mkYWTxmKYS4iCE1to2K6ShdhcaNqSY7GsD",
  "key25": "4wRWUwnkmBqdXZsAPuLV6WsUCWwLDRj464vrhMoF77nVgiS3PqLkKBC8LBDNxEQJriQpnfuB3PBb4X1juPDYSGXu",
  "key26": "46mLSLGmAGFE11tiPZMtYcTcyKHe6FRh1yFti1yXwi94L9KpQw97zLUZhudRM1JFdacY8GPu4WpKBJM9AvkKUFY4",
  "key27": "49xkuXDREAo3Lk45Y6B1cqcSiUQN3AcvWrqMWmfejP6WDWa81HogwvY8sJyo1dDejZGLs5vhDsrg7fidrA9xwGm3",
  "key28": "5SXH64DMFgAwmw5arc99Y2Hq4MxxDjiYSUrB8yQHMXkJNrt1xSM1szsRAjpWqWJozRavd6Zb5hLcXQbtdGKLVNBZ",
  "key29": "3XkCdpg43uvM9Pe6XUX6JZaAgeFLUdrz8AVauZbUQpXfvUtv7cSpWXVxqortqcUkVKzY3TWhCDY6cPxNxK2xb1HC",
  "key30": "3vtSNCq7bsr7wFTVAS6znvvL1G2sckygzma6K6ksnggnsKNmEbUyrr8wdHG7XDYkna4g6tV88aFCRpDse5Nwc4Pd",
  "key31": "64zcPuH5N4sVnzDX4eHocKDwdYXajWA8Tw1fSVjfwWMrGLH69bRsx8pFei3hx7VmmrC2bg9BAo4gAXrbjB2fhP2s",
  "key32": "HqZ5jWcweqToYJJMcTBLQ7i2u9oW3ap3c3pvoEFT4v4eMPXtDuBjKMDuD9Q7ZVhnVAjwhm1e6CN7eZcnF96vkDb",
  "key33": "5BzvYvayWNoinBr6B6GVC1ztNjGuykXMSRs9JvEzDR1P2EQXsD42nBYdjYJwsaipK4hbR4w3GAu216gKqdBNVt2a",
  "key34": "2UNw1pC9FmBc1weEKPc8zCN99gRDADBpBQEiTjSqrpU7HCw8XZSas1aLgdVEdvDZWT9J7Le6LWi1wHgbPK9Vd7Um",
  "key35": "uBBSYTJvv3aBxDZbCJdjkEozRquV5bLqNAb1rUXY4oBd5KL2WiBTcMha5JPL6w6JKBpNmiruHjMSw8STXZaRMAz",
  "key36": "3KyAziQzrcRpHDhhEuBcBhmqF38D2bp9U9WG9zQeiubsb8gohsTPEfNXTG1W7EVZexYqXpvDhqHGxuWdVtdgrXGg",
  "key37": "2idoSW6pVL2fJRRToRFt7f2iFMLRPWpwf5ewEdz7CWDhHZ1iFh2KcbpoccFovcipEc6cnYcdKer59mdLaqhs4rK7"
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
