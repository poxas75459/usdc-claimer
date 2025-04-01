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
    "26NgU2EY6cNSCYBhJTnm6J4ZFBcWdQGyYdNZ3n3wsZW9GRxQT2LNk9gGsbvnB8k3PZHF6SPmqMWBffoTgJnkQwxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51rsu4uM8KiaZr1YjAspRmU79Wn77HPryYkUxH1GJDnC2YQuggPq1mrCsMG6G9freRe3cucM4wGqmrXNJCVNErmm",
  "key1": "3KgFD6mR6rpgjC1VBFbC64T1ML2R5DCcnJ84dbDzz1XCKb12MST5GHiomn7ydroQjj5NLb591LzphNcnDStP7N1c",
  "key2": "2xaCTsdKAyvwngczLsgdWbJTzPkWHsMzUhsEPFb8z2fLkoZx5sZ46bYu1twcCswXtri6rrXzckSgcmLdzP5255J1",
  "key3": "5Yr872cVXy2SUPXQ56s97Uo2ZQzV3AYGbQK28UaJSV5U7R2vNCPqwBq3fJ2d5d24MvznmLsCVgt1tsP2YVtiyHmS",
  "key4": "2fdDbS7SiZy5EiCcuzpcoY35eWw6mWFMHRNqYBnpcB7XQQZkEKAwbQAAyzNn7fctTLi3NKAt6Wv6wiDrhAUjszx9",
  "key5": "5JFy8Trn51CBiG72nsJNWwixn2hGUX2jrbNfmHya6RSMyvt9x272KZAYyGh9M9QcpKxJFM5N7PcAnYK9ZsCpQNi4",
  "key6": "5PJY9X4DZhxkgH8i2TerXwK5BKNmhsmJfu18nhRgFezuVDCS22tmitaBiNMReXuDui3pDNPMYDgDaUq28wBS879L",
  "key7": "2Rx9LLcpXG5wuNvuhbqq1UFxeUZ9A5puuzxGVXb71HMzSJhKLYQtSmP2WXnpM8T51ekfMUnGoAaUB2FKMKz4Ncs3",
  "key8": "5pmHSEQZP7TWJmExF6XwMVbZ7ShbUhgSfXxjsXScjdikk6dhNNC6qNjdPp53yiL5SRNn88uyzCaATK554FErmrPZ",
  "key9": "GTVDzLVUizFHnf52vBq4bcvqiDaAqUd9yzqrr9wxzRfALmLoServEfv2AgRXq7bYc9sV4Poj4npRFZoVzAQDKU8",
  "key10": "3AnGEceKrxwf2yHWu62u42uDGrqU6gYVvyxz2HWp2FdyYG37JYKkE9PVYPCkfUf84RBLH3FeC2bbWeW4wJGrLmEL",
  "key11": "4wLUcXkvKvGVmWu2RESXLK6R9mW9cqaB8wzpPpAjD12UFCeFiyZPq2wnaY3sFSsVve5ifeHqf2EwkMStrwxBpZFb",
  "key12": "4WDXTsKnEYaUw4V76ZNvVu9pctyUTcGmUtwB7srXY4YgoUSCVkrKenPaT9cbLsu72f6fhH7d32XaQk8JoQdE3w4x",
  "key13": "2gJQiJj9rkMME8fkQPhkmXN5stFXFsxUHF7jb77gJqwjgq6zfAycpekpv5xVgDexSDnRR4vxH1HqvUFnfwLiwKJS",
  "key14": "3TGqgZZniYzYBHtnEkv6t5vSAYxUhT8fmYBvkUsw1tbVwD4Zk6b6v9ifZTXhWkmpwR6PGQ264iqLZNRsfaZRS8Ng",
  "key15": "2qANfZfZqU3dk3GEeFrFk41uzMEtkZ9AV4iodMAUmk1tEfHJERawLF2N65TEHxugpzpbuXvUKRvjdSbvyZQDZgEF",
  "key16": "3BtD9jbBGVcaoy6yR3v7UB8vXW4TEcnG21JNLNEai1fqVogq45BGZ5K4DdfM8QvC49SJuqHjXFX1B5gymvx7bu4k",
  "key17": "63RqbuV3SRZU1U9rRPJ5zzpLv3xtTNhHGLBQxY2wQuiQT5RfLr21Zme1LvHjT2zAgz5eMhiZDZRNz5bvwUkboaAx",
  "key18": "33tYxqqRa2azxZCWEdgG1rTZEAWRHtM8qLiinVLPqj6vdbuei6ccc5nNZnrUBTRzBStnp5Wa18Zh8M9yHff9aAvs",
  "key19": "4j1jNfNHMEzuEu77JSKPtsn1ZiYZ1cPrvyPEHC8f9jHJtmzPZsyvLDeXU3ACd87jhUDytUaLoZ6n8ettSczP3sJM",
  "key20": "2g5k2BJFpKxhXcF8c8C6G1fmfk5ymwaMwWMVPwnA8Dmt78wfwYrEeyD8ytbX9rbRDwRBeMUPYMdEdZL3Ngi63HsN",
  "key21": "myFTmjA3wc6UwVK5n4aJ13ZzchWDUFYL4X9KWWuzVPYNGzYADBC1Y8XK6TvQaKJN3E1WczSPsPpk6gcdEgWWsee",
  "key22": "41BsrCPDNjBE1GLxX1zfebnCMugd547aVJ3M298FXMgQ3s7fx4XQaMfpWEbeLSHArf79LkfZvmrC16mbqXRjDzFV",
  "key23": "2JM4YMa5P2Tyt4rPoMYfm9YxTNgfAeXfbjuPniFMXuRfCQ6Lo8JQ8RbBMyrLDxhCtaW9wqeJvbJoTszAVHtmszXL",
  "key24": "5bhHB7SxGu8NWE3gLXGWGpAJEYaTz85b1LfE8UUNbLVRLkg2WQKfinKQAX3FrodJoHfjcNt1jdo2aiihqe4waQ3c",
  "key25": "452CvRDmTxr2DYca1Zd3sXETesqxuALyFW74QuUNei5safnQnEbU22M7pu5UVZfqwhwhwtBicGfTTXCGhv2JZz9W",
  "key26": "4Wn7YtKkTD7B7xLbweH2sX2JcxvM8vturq4vD8zL2dRXXA75GxZ3PdVHWg7RSUabPmCvyVX8LU7rA4dUtomwysET",
  "key27": "2WYMiaSgSKquSN3xAqk57nR7xAeBjYs75TjxvubVHc8NPJ4hNebtrYTNYqdfnvNdDGaVvLVFFgQ2Y7cwcihW4PAR",
  "key28": "2ZJVB6nJBoiaccSpHL2MtumdyP2KU7Raq7juCKJob1hcPoSQmE4tLdzePpH4avUCwurkRXk7z6cjw2JtQGNTgMKr",
  "key29": "4zeD6GmQWPPeG9N2auxhwJdxsk2mmu6gNqcVM2k8TAsPQpMeujCnj2dTU3xGH6aAZ8C4uiU3RjHhrSdN5ZETrVwo",
  "key30": "59Zsgt4WxBwusxQvKEgZ1F7bhDrPE3X4PBh3Mq4EcephAJ2rMRWKyambjBbqx4r2c8JzgiWu1bg2VHEFe1bj1Rwa",
  "key31": "2YUovztP8MHb5HmDQufEeMxgMUDXwAhpQAP9uzmXTeUmMsHZFmGtg1kjZLvWJ4tBbWawGshdBxNPiSJZi7iYi1yP",
  "key32": "3pqaqNdJPar72n4ZWPnTypdW54iWbgkbcnx2ywY7KxRShYVdbaUJE1w5DVM6YdLzBfE6XC64QHzjzHYpCEv48J1x",
  "key33": "3ywRT467rwFWDqAoF7ysrFuSi5RbxDKy64Uw7AWQYHSnghtSw6PsiXcz8KPtC6pbGb94mKQcpmqDqdHaWVRz3tZV",
  "key34": "2p2JVAKiwwMQHLWFZUGAZFX4rFRKSHcQzXbrCWv63rrY6aFUcPXbEfBgwmtjiCeKmZmCewfnKyuHjabv9RNvjwmg",
  "key35": "3hUCjQDck9d4d1yze9M8K3K27azLUt7k588qjoCo7oX3Wx1xpczG2BLScNWB59yNfjwdEsfpArgufAT6iY6iGTuT",
  "key36": "c2FMaccU4egBL9DFV9YC2FcsQABk9XN9WmCLD3i3fq3uX8xn536nXGepJezUpNPUmuoNPWfcjdkXaLC1VZf6joc",
  "key37": "5f7w6LA1mAeZNqeRX8VBduLeBEvqB4a3HDUAvn2yij1TwyJzBzWsxiSSEUPrYUxRuDA32xsZSppGrgqQ9mCU8SiZ",
  "key38": "4n9sLjDiQLMKGXgQZ8v1Gt5SjHVppd5Wb39FDTgWEbUX7DYQ5eGnHxpaJNWLe4iXFimZYhBeAMdFQVCPdqdXzaK1",
  "key39": "uT3MwsqiTgEX8QAhPvmoTF91Fh697uycGZMz3zhuuoHnbyeFMsKURoGW5D6To8987o4Yu1cg5KA6xmPhRxZoiXF",
  "key40": "5rz72XJ8vJrmts65fPh4ECq8V14gQhgWNF3A4hsMFv5xvKQJtvrLP873LfhzLAsSVWj7TNp1QTti1uiYHbMjFK5e",
  "key41": "gpfzBT1pc9dDYBKAc2VZJqJeUU8MVo5UW5w15DPpuhom41tuTWW8A5d7QAa6wbcyUz6Ad1yP7h884poBAmVdrsC",
  "key42": "5iY8UBRYLpBTLnRcwWPS6A14sjWECAFYnAFy4KeQkxyQXG3KtpajK5MvcXNkeyVk8aEt3CV4nivZNRxpLPJiHCGs",
  "key43": "3PHdx6aaN2ytafCVRfZH8TxJdLMvJ1hNeRqbivL8GJG7EK7N4vDCNaU6GBKPav8RNNzrhF5JVqfiRwoLmPS5fdf1",
  "key44": "5ACaqWvv3rHLNvMzams1nRwMKfvTymrDNCBcjayRfBRQduJ8D2TEjti24GCkboGiM25ib6X4z2XbCgjn6HGddZJc",
  "key45": "23WmukDC8d6FdvyeXtihLXcbN2satk9YvmxK3tEAG3seDZdDEHVakvbyMjk5JJMeUEHS4rBvV6SDJthR2neXnvMw",
  "key46": "3Zztcweu8L2xkMHHDcoffURDuF2ys18wQK4EV7eKkEiiQxmaToFeymMtFVBSqNqArfnfcmovQHVLCXmjQiJTJpJA",
  "key47": "4QBA8i8FoDzeQ9tLPxgP7YVw9yqmJK5Yuddyz2nJ36UZYmbVVjGb6bAPUQqfhCad9EeHiWZDkpz3B6hLdnZGRyUd",
  "key48": "4GbKw1ZTZq5tzru7b3AFcbhrLmiLfuadJhayRG7z6C7qB1X6ZgcihWYoyTUnFvkt1uyDwLrcc7UFpKWfBgAjXWxc",
  "key49": "L53YJahqDwRK26a42qkCTkw3WqFH73kZA7J5v6nc6n2F9cJmm7P8cVHbVWMxxbG8dRzFFFD7n9tKbAP2ghn3dKq"
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
