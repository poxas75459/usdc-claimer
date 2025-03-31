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
    "5jBXHFVFsvYPKUfVViHRWHnYg4noygdXWfCE9LFTB2dYCfo3NfvBRQgXyxFoaRpokM3nysSxoWFZ2p91XQeC72Xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6XeZGjhNdsooVB9h1MtE9Kcy5txCtPY9x7KVkBEom1q4XQSFinNsWXemUehPbUYEYADQKh1jRA6HXQcSjkg3fSZ",
  "key1": "o9QqoskrRFSM6YPEYWAstvThb95d5AZHv6nPA2xYjfB4BtT1VeT2NKrJiuSRSWn254BqoUmK2CXY9G8higa6gXR",
  "key2": "73JPfNr6dnMKxCBnZ8rU2w76CQJeeBSL3jcQM2Vg9ebWs6Qc7AQtLDKaZt7HiNPUiKzwGrANQem6WjPif6Wrssu",
  "key3": "orp9fwNjF3ZReJUCRUVkvD38Wd2a1ChNPmjiiN5dm9AiWDNo9uZokhsBmL183uqxyAMfhsLfHqASesgZxU2Cpov",
  "key4": "31WJucGza74zoY7UAWamsFYUGNLWKEb1muRtSDFqasEeCje178F7RnxqtTst9MrBtiyZEpd4RnVsXYrjFbM4CHhC",
  "key5": "2jZ4oMHrw5aJdoajkZe12vYPDzQr54cvU42M38JpYoh4dM3rU5YY7N5nHtkwUrnhG4KrWsQ82NdF9EJEjP1gchcC",
  "key6": "2WbgQzEQL98ggmD7mpixx5M8JgvLtag8NqvnkeE7CsjUQyneP58VYX3CTaHAeoJcaP1i28pDXPXA3a2F4ov8KeJb",
  "key7": "43HUxY6VsqHpiNSnRCtjjaDJLK8mgqzmwubd5ZS1dSXThaqGwRmaHC7in2xuRpC7dSMtczXtSwfR2WnrWoBoVhjW",
  "key8": "35HBaEfq4c7wLET6AKXEer9ebETww8cqviEJK1dovneiHSZgDf2sGbMv1U2q3yDF1hu4xuZt6ZH5YbD6MPvKR55A",
  "key9": "3J9keWazX2oQzBjLzqVjEn6GwFxEfdnWAQHNJ6fDujLP2NH4qXHC6FjgmdSXTh3ZF4bXLKer8xsKhv6MBmTTCv2k",
  "key10": "29JxWAaLNrckWVSibCE6BETj1a7giscVN6821u8SECBC7X1HkJLj7GP8g9nTrtBTfqF11cQeCEzH4crfof1Zgvng",
  "key11": "rNejvzKrpXY3LewPTFatf6ewquS11KM4nqPtXWUruh3nJkwJbXSeRfKfdfpYRDvKUuaE485ghiw81eDgPeEtut1",
  "key12": "2CdvVsi4vSXKboXrZDDQ8LvLjC3jbSSLVfptnphP9mfYG5qQNrJ6WuUcub7owM8VnwavDCFsBrVD3kEmPMtmayJB",
  "key13": "sRJaP6jL6x6fhRMD3nC7FYY1jpfbmTJPkiMGSRm2S1ZZBGTk4RZoHtDsyfr5ShkiAL43DrLKt4YX82NGdDLdRTH",
  "key14": "sbwBxGDiK7UHWKgDnowENLP48YH2dtCU9LaJ32VCovSdBQABBnB7jDSUm9YrkA6pC19hhNB2NyKcqQor9jhUCP6",
  "key15": "5ZFpNkhu7VoyQeb44DM3S8ZbHydBGY1DhxPMkREEcodrgXio6Ar8gFjnUWjmSFj979S71AXszs1fWZhqjn3mKzLD",
  "key16": "M8D9NoN8hGCjb1G9vF8wQm8BhndxRLkSxYAFFofiEdUABvvyd8mtH9XKU4R3Qipp1ucbxGfbjVq1YFkJUo9wrJG",
  "key17": "5j9b1dFJSyNRZt4umKEAAvfxhnq1WcKBBwsNvt9jtTzpZRMVS2rsYuUwYUXL9qKM29pBEAMNLEU3wrLqMgpaUis8",
  "key18": "4hUnwdstWqXXeZFzRUeC5UZFM4iDKQCuxFSR9UL5fD5pnMbpLp6kfBGvmhfwqnCojQZ6SXPW9B9dBaFGKKHfAVtk",
  "key19": "3xX2wfzR6Bfa9z4GTEfZsY2okrwuzmLEdPcY6eaj1nZn29F2Ptic64QkzV9w8w6KaBjydHmmBU22RxDM8hzA55Ht",
  "key20": "3dQkME49WHjs1k1gwhuqY3sPa1hHcmf8fR7khNoJeEZkiBSquNHAzYDcuDyGT1MAtiCzFxDW6gmvN7e9bBDa82ZA",
  "key21": "F2bHj592VkvD8KHcwt65kRQJrU1HYngRueKYEDaX3bf1bBEvvWVZ4wRN1n2TqJYoj2yeb3cZGrtW1YaaxAcGY4b",
  "key22": "4kXGMbrUSbhR5ydTdftG63655serbXFXG4rZHMYtAt7GAFiN92BtZXPvLnNgZUJ2BmqdQAk2XKLTFQku6cEFzgLg",
  "key23": "4137LAv4YrC77ScvbcwnUDqXHXZWqhhL6rrEiqU678JJ4iuj46rSpeF6ttyQEbLHd2bk93LK4JkwRqvjDtb6N7My",
  "key24": "tGZRsjXf2pE4mEyhMxfM6hHJF3iHwtruejmKipmSFUKFX3KDYGe9uyRb6ftcCE3UNp8zMo3WTwMeJY4SKM7Jf5E",
  "key25": "3C5WUqZhr326FPVqZEWGkBwNSK716VyoaXWB437eonVv4naRULJzDMF8yhcYkjpaDJtUrxg2PeAga2L2sWgr4FQM",
  "key26": "27wcFcUXxDKkiJxdFkmHJ19dorGDwmoVpRwPpyK9Q2ujTp1EVybfivD8m84CAFE95KpFFFHo5QZf6Qza9rLNct6N",
  "key27": "3phxb77vS6UwhDBF8fEjs4KasV4uRe4tM7DjGS1JY6yXL6unN2kjmPByV3EBm6KrFvCfiabz2JtRQRy61Ue9peuu",
  "key28": "5LUKnU6xWyqEqngC1ognkhseYDirRGYDZruBANPTiadvc6en8STfup8fELqap7mCy2PV97JNQKSMicUuk7crVkWN",
  "key29": "Yc49LimnFKxPsy2f3A4ey7t2mXd2NrrGQhVuh746pCL1LsXR5Y4MWjmUSh47xPC4rehroxkf3mXGKGURbYoKgi3",
  "key30": "4ZB32CAVsxaFg8pu7MD42xCzQ62wYEeUneSqwnFwJtD9NFaagG7M7qZoJYF3pyn8e2fQxAua2QgkgDJNwJ5qxsc1",
  "key31": "5szr5DCNZxQmgAoUtwqYghZJMbdtNi7odfx98z7ixiocGtTHusTfBzt16iz4zjpr3qiyNK61FVTCRn6En2U7Y6r2",
  "key32": "zhoLLy9KDfjZeWRDTcTLxVQExKN2AVuDD1Zjz46tFtTSWifaR6i5usZj3FMMhUEZYtNE1q1SXzMJXjZXRvgBDDm",
  "key33": "5cAj2s6DzFf11aoL4eRJXaFYZCbgRDDxHToenpTSMnaJoNG1SHwNTJrYJvSiZ1DLjZeNGZaA5ssPo7qVTYMiae3N",
  "key34": "5sn9Q2ZtEtxsFJEvcp2BGmv7dqdmkC5goax9ByVDkZKNk3eJJ2NvRSoBrKr2gAt3CQ2yMBVv6w241WBpTRQCF2o9",
  "key35": "z6Qinjx5Zsuffd8W7CJmZntaTLAwYK2aLRKx8iSDLhh8r7inFiXDGp6H5VDFiwt7MHKKi9GbLdaNjtsmxRyeco3",
  "key36": "45ZZCKa6UdT1SpmXpPxqe4dLirxBTx5CnabDY9mBvpMz7qxd9AcmRhaqxiS3dZEVTL6QF3CnDCPqzzp1BEympGzU",
  "key37": "4ej7omDQZZFvNPntToMWh1NcrvjZ7ZUNfwgfikozQiCFDgc8pbmmcycZCmdpo6S5QMLe5YTbtQVydh8zseJDDQXZ",
  "key38": "2dZ7M1yczvh6ruubrYXQCBVerbARTYdCHCcFc4knPQb3gZzm5LF3wRrwZRL9fMFdo7mg93T8TnvRD5pjj9BnCdC6"
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
