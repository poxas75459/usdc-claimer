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
    "3ng7mokPv3uKSNQEGuDtBazfDTN5KNqSpMxZynohZuzyDyKUeZwDxSedsWHvvBXhUPbNBgXoxNrgd36NCQdY7qyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eW9Nhxy3T8YUaAPJGFCXKqwjowm59mdLeoTAQFJyKQ3h8KQe62BgKd46Bz2sxn1hDVc2pw5NsMBKiMWejV9Advd",
  "key1": "CHTDrDFPCVsJJP7RnVD6gUq34CdyQTMmCdrJV9xw7jim7xc9awdGn3GTKB18yJJ5UfeFBqaZ5VojfHd1xHtHCbA",
  "key2": "4frA2LXsaEPYNM1nopnkFSKw86qrbudU5AmTswuWxPbRMe67bucLYzEcovT9ieW3kqfyXRaZtY2L7cM2UZdhvwuG",
  "key3": "5Wrd3d2vJjGTnYpxKdzELbFoY2TBV5x59itQx2mcFWR3rYwMbYRUshkxRtuqEh9LdFpiTL1PyWiiP6eKRVgf3v7g",
  "key4": "eDNPN8GoBrgMPUwTMV7hxfauGbfViHWynHphwij4i7eToE1dLgd6Ro1cfEAXpFAvGasXB94QRayeKbRoyntYx2e",
  "key5": "3HJspX2EyEPwewg3BEHxJw3wHHv9XtVCsooT3gxRKDmaAq3ACRoMLoL1fwGP7e9kgd2dgfnVo3Vnm4CYKhroGLf6",
  "key6": "siakMKccoDni5yXNYVzXbsbpvGEvgcNHSTFRALoQrdUgRXbMVivM1HQ58oHEt5xaxWcD6ZLM1N9CgM5jFUDBmvG",
  "key7": "4TsDqHD7ZbSHQEiWUeoJxadnfS4FykhzJGorGS1CX4Uhnxx72AbZ8z351Nc9CDQuihiKuny6hmii9k1CyHNXJiGH",
  "key8": "mKB4Rxd5wahXy15swMyKxoAFBAp1fhEGJFQSba6MgMP57S6XqZFuRT5EmisR5R63nQnxxG9dHcbgLyeFopJHk3S",
  "key9": "55uyBQy73RuGcXaawSbt8tw9e6HE17vx7AXXPDb5GoR9yiongtf6BhxKkhQckRopSBQhitKKKUAnT1n9eQ8RPBVo",
  "key10": "3ENCwkH4EjimS8FDDXQkmD3AHT4TMEtHKVSTNAHBrpapGX1JEN6zeKSuQw2eKgau8BERQu3eKj1QBhDiieemj199",
  "key11": "2BXYAHMWHc4YBmXuFDEtpFBqtZZmLbT18EycXRA8yCqxmRCLQ1BmgM7zZu2Npb2VYh4ePud56W4qqaWHzv8tGHkn",
  "key12": "5TSv41fgF8Bksr4tZbGfEPYv9nTYku6MQrFKLHCEW9xQ4dUGEDrg4bjRH5V1fJhT4nbFkBB5HMmyGx8WMMaRXMtg",
  "key13": "4RyoufegoHp8y2vf98jBTfqm9EaxEiLM4Pu1xHqen4DtVRWzeFRizGfzRbhV2bfuDv5QYxy1qivo6JXGhcEn5BQn",
  "key14": "2u5QvGs7DGWPBawuQ8f4akyN9SM68Awoh1ASVrvuNV4h9uP8LZbyksLSEEbcUvJhrN5T6seMv9zm3rtwXSRU7LXD",
  "key15": "38PyYUgQK3HX5aQtm9oQtGsQJcNyCdtmcDzh3M5LtTNEAtvmdbUfFdT8x9T9umAqngyxiKXn3efrPF95Y2PR8ufw",
  "key16": "56n7hnb4DfovA3JAwv17YvD9wv6UC1bzjJsTgLuoqUZQFG25BVwDSuvThMTjtDsUWv9Rb8BSwXASHzRvmu1p85hw",
  "key17": "4tFKw8Pmjd5kiDdzRF6Cx2hCyVHe4V12fRaGGvPVB4fRy8pckZBLLMLXEdgNg4vRjHw6ifq2NAaiy1qZKsfNeoUf",
  "key18": "w3NQQz3kBfjxkrKBZ8B1SoNiepKQ22xToRj6q2pA17ExhXpjTbcqPGa5CEbojGc38X13awUjxkKoxQ6npKKHhLw",
  "key19": "2xi8vbqw8uBTdY4fE2tEWNFSmXnvyzjqS6xVGCkY3CRgXw7n8WEAjJmoy9bmvifhfwqZxiDPKcqgmz5A3RLAaeY9",
  "key20": "2EiDjRyPtGm8tb2UyJfCsUuTjB9gx25T8rnyWAuL7swPVtDiSxnckfq52F7Dr9Efwr4niUdHJKFz6LeVnScyuMND",
  "key21": "3Dcc8JpFP4KiiZa71rPdW8NAqqosPAkMrfEDtFiHHXuWm9mGyJAyWhum1oUcPVgVyhM2F6M41i7qeMfFAt6ztne8",
  "key22": "3oguBnX5VfHPSJQPzmUjabF9TM2VLRHZ1iTzNTxGAppUKQDb7YuW73wemp7rkYYCoDfNrdfEQAyBtpEnp6hkJoBe",
  "key23": "5Zh1uBF8JM12e6ZJ1DQ66p9G68sYfy2JFDtKJUXyp4deEDz4oU7B7tvbe3Vj6YiEBHUTNuRmA2G1EgJ1KToyZK2F",
  "key24": "3j7PzZ8TycBuTqDF4FpHWRJa1iSqfUsUVPBaofAjLdaX2trpe2R7RkzaLq6t1Z7tSQSbwZDtCNhWDRuj28zpvY2m",
  "key25": "2aU6HuwLaXgAknCs73QpBAEgHGgSu64hrd8yJPqHeP9U99jwrhGXxYS4ofN6tmnZJiJAumjKscVrwx9H51NhhFLs",
  "key26": "5wtNZZgz7kFZKRi2bnQJ3kyqRzXNriqUApS6W427FZa9fQBGG3HjWFGit11TTuCAowoxeXdbPJmcBVAhzv6CXzCy",
  "key27": "3dNNHWzWbHoDuCmBiuWxsjf2D2VrgZZUmBUVCu3fZMkGkTLJ917nRzBxRbKLr1iRd2mXTVo17MFkEGdih3BmuuRS",
  "key28": "5bb3gtcbENwPG2GQuPZ7ia9RtoZR55U75Wm8dSH1q62qzJfgopP3dkrrBNKkFGvvdWkYQeGSsSQJrrVcgcZLNQUt",
  "key29": "326yCwdvMvQsAmjhBCBfdLucRwV9QBM3zd5FkNrnAU8qkho6HnmdmzRJ9gQwpZHFvJ43HjG44wfpZZZ13FUx1Wm4",
  "key30": "n1pPuuNDWjwu5Q48eWZRvWJoN4XQcpBT7fpfFUMpusswuGs6AJFtoJv6BJH5bi292vCWen2yMRj1iyhkmjspLVp",
  "key31": "5TA85sCzafAbLKvPi3RRUWWrEo6gSPshp1oavkg6fXNc829XPyUYBXpZGDnFmdKxBFXmqDpmDihz4jXLFP6CbtLR",
  "key32": "5H7HQpCUFCZPBCSZ6QXQL95ANwxKh6uFPPd1Kc7KN8995A14SPpPV8Ysompvm2VMhojpjuAqZUboaXwR7zmQtKma",
  "key33": "4KMuqE74BPykRRgoXFXhFChkTYeeZyFEb9mSf6sPMV5iwk4G8TLyGbmBggCRD4kLgzPPJmMMHvdmVixs8EbY2kiz",
  "key34": "N2wng9dscj4nQGkBUgEApH3BpXpRqDJWResn6MH7CdD9LPFRhTJp4UVVkg9C7NCDCiLxoqhtoRJw77rFLbfnW2A",
  "key35": "37UZw6G6b58SnxSDo2fPc4ke6W9Jtn9p7oPC453Ev2wXZ5oTsGke3sdTXmtn1WG49ZqHxCFWi7TDxNj9pQLBCoTg",
  "key36": "5PQqeQWBim3zfUVf1KGDQAxzkwsqrwEiz4Khwn9rG4x3jyJXejhoCz6bqzpnhpVegHSbEVeeGsnZ3xAipTyBwFEB",
  "key37": "5Xusjc6hZ7CW1yRERuFDiNYXkhZLYttDzewwsp2cK9cH5juWVb2GXxvxyDw6ZV5M943eqx9zzsrsrJo3EwtFhCZC",
  "key38": "DEjQFb6ynDe6jrVPJUkgmhN6nxSbRJHj92yp55FBHd7imLyuNNTd3C6hfbMfcFVmwgrWcifz1qPXx1rCnVfbPCG",
  "key39": "3hekFtw8FZvjEgDkVrGQBP3PaCL7njWCP1Q8YmBELsiNkuZgggaP4NLVdQivYB71KPNwdYxmKiwxbtj5r3ciA3cW",
  "key40": "4AT3gJESLPMSdPrxJUvoXVLxvij6HeCtjM4mbvVNm1i46tgPcCaxPDmxAzPnowt3sKs1f4yRXbyZvgqVShagZYJF",
  "key41": "4bVTQbRnKUKZ13r7fepbKbSbd4ChVxaxtnpiRRQTpHreMkEnPGeN63SBud5bvq4vAjMGcDKFgYr3AyCWX57ejauH",
  "key42": "4RYswPmbrgAJCN5DzCkodFZio8ULnMA8Nme5eYuLcoWPMCJrFJps5kFEEbeTxrsBMN3ZK826zBkwLgfiJzcmhmR9",
  "key43": "3YqUS2HQcRqyourNtzDXqGF2ZFSkxbtMRNmjNZtio8y4YmhbPMAqkbzn6mCzwxLN6QZUKnv3peSde1AQ6UTLqYdM",
  "key44": "2YynWjbwavfNQup73Gf12hqvfidTpxhHprNz2j4D9ZBNHcRM35juGuwSuairgnLSjSqehacL3AQnBnYkE3nirD12",
  "key45": "3jS5cs4mCGHLSfPGofvZx2kA5XQDEiukT2w5GDLJ8zszig77BZYJ3jfwDfJvAWTMzDPf3MzriUQFB4tBvayx3YcS",
  "key46": "3rMNMAno32Fb8NG9wtmS97HXYBaccdsRGtLPDduc9xz7U7tmoKvMKzrGcAGt3pRB72dhwLAC1gMuQMKJvNpYiD5W",
  "key47": "56asinRwmqKbpBv2jo6mshZ1MmgCChw786fEjYGP4QfUvGJyxVBXPbhhPtJEj7NRWqgAKKDpTPnmNCYbxBUXfrXa"
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
