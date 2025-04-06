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
    "2EV9T7zZgtRQR6AcxAEbA3nZGXGQCGnMGWy7uVKcNuijJcoQmkAJviz7sCp9DwuNWAQ8APWibZM4T6U6Txrceyp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31aoHzC84pEwswJxobZYLSrY7YbAYRw41desNFrdgvZqgsx9NevSWH1T4cnVB9aXR9krNUBRbX5ajXuwvPDqndH9",
  "key1": "iGbURDngiFfMcaKbSUVhkbozruQgZwaKroXRtitL85zEVuNAnp5rEvPuXLvCUwHfh3gr8YWEFnyhxt2Wx3WCgjJ",
  "key2": "heRdnaM5e47BsTM2mguqsLXkwpaJ9oPq7jVvzcURQSd1ycxgt4neryDBPdtFpkbNxg48CmeRkUTvU1KkKdGL4jW",
  "key3": "3yPDgjNLWr27iZhrPAY2dq1H8Aytcf2D6BzdjqjZWKzQYHYrQLP29X22R7Vo3AvBLURrX259y39TWdBtYFF6FhS7",
  "key4": "3NLQMZkoLoj8hJaQcJjmmgtyJWdvJh7xr8LpM4qNxjutfe32twtnNC55N9S5R5aKQ1m4dccEPDTyXMoN4nMYuV6Y",
  "key5": "386ApBpPHUoS7FgQ1F7qTLXR4NXp68KuazvHpbK3RLbjVr4Lbhe2MFUf7c4yRahUCyukBMYHzrAJFNPLBnsYzZh6",
  "key6": "DfTDPfJWLDn9N1pj1d3nu7Hk3BiBmRp1AsbMYTMkAMPPj8WZpkqAXDPRAXLF1FvpntkDXuuPtPaxzSq4swCZTU4",
  "key7": "4rh6Ntk4uCNnCRgGiwgNS86q7JH8PNHhpf2CpTpJfwptKjZ8EnCgS6KJYy1dvJdbqxX4NiK1WVQQKLqYKRrKMayW",
  "key8": "nqZhTVAM9y4KF631roLU1Cr38vb7VQjWPH9WJ3QPzmiZAuLUDoESvGt1fgZVyGG4MPngnRM1yUyNw3FLpiCtt1e",
  "key9": "2NnawsJq2ZskuoFLU8iBJDA7ozGbpdMrYhm8dZzHgCyaUuF1fWcTLh6XzJ1xfs8TCtiiwFuxvxt2iFYGjesca5W9",
  "key10": "VgXqodLbcWyJ3P7ZVrcSLRHWyDNpbYVBcqw4KE1HDfwbJuaNK7fMc8PmVnAR9w4tFhmgbXHxmSMVbjZ4nz9L5Tc",
  "key11": "33jaUoKzvxwVQXPpq4PKyyKy3yGx6mEaTJEjz22CKSCUpKsXQazu1M1u8LJwSCgCGqCRjdmCdfaNxTsHMHXcVE6E",
  "key12": "475gEJxWXx9UK5gJzQCMoMewC7ACVQ6AnyokHHwBkXV4Kf8MRZnbpEXe8C6TxW45gpB2hBDSEkWjPUMSeM86TPZx",
  "key13": "66x41muhT41WQ7Jj3H3JmGG9RuKDtMfM46cr8dKJR3zSojoxtiZtbuqg9LNALpvdtJcfFem2FK6FksU7sa5CprvS",
  "key14": "2hZCniGNzZy6Kmt1mqUZezA3dBbwJ8HDhnD56c5ErtehZAUPZ31KsNxNTo8UsBH411SgKhZffFfLigSRUMMNqMJA",
  "key15": "5nVYXqiBfcjqkhr8U9dnF67QhqjdhRjwQjegvh8Lt4Jr6uXWheXUa1TpqVX3Mkvyq9wohL5g6xJ9YkohKUn5Stiu",
  "key16": "3MVVAiRjnxGuF7pi9N3n4DB2rz2Ux4NThNrwa8g8ot49LrbwfuV1osChg2tVEKG8QEXUaUX2R6uzL2yWsR8pnCZe",
  "key17": "2eqHg1AqxczwrxpivPnzn2f9wf5KYAd9mxywE1f2BNfA2Hs6uuUu6hQDEhXjmJbmtLT649gC4HPbyNCRG4EHd8ND",
  "key18": "3j3exv2U7q9gNqvvDJPHhN26bixbhThkvK1usWt5DLi3PkE717HkLdYWXpiFfLiFXbyDx1QtDo9jeA8bP3YNfd55",
  "key19": "5YP2UPFQDFTJNw6BPNvg6FxVpkKGx6f4RUgg2n6LNDa5JFcCPwS5SF1M19KF2UVh7do6wJor25MNjLFBfdYDzzaZ",
  "key20": "37ZZe48p3kM9VVsjoHLW82nQxfs5reDuhuW1cke92t9ZLt3iPTSzFsF7WWpMeVNx4Zgekj6GcZw923phEV5h91rV",
  "key21": "3TN1tGMUqqcdSH8gWhqtbrs4zs92JPQXN8uyPPLJJGABi38t8Bayt937SkDCQFTfA3kf2Xm1ubBqJGxDv8hJLbRW",
  "key22": "NFg98mBkpjrzwo4ythWhXz1s4yVEp8gc6nMH3XSmb2fEdeZdvNbFJXCJbREhH5hfS1dzkAVN5inDLaVQBNki7Vm",
  "key23": "7vJWdtw8hp1YhGeZVfXnspVWSKEGWFwgc87K9pxJtXNvQFmhkPduK681TP1WCM6q2Ef6J13ZX8rjeDepguBcqLg",
  "key24": "3r3837aphcy9mvDiWA7nufJRoymFvkKPnsJPLgYvNKJG8bxvsLEu627pCw4J5pdhy1yWGksiSbsu4Azz3mPqAydG",
  "key25": "2vG2irsvFbXkqqWq7ejXD4Zh3TFLLDZ3nHc9hUmCmtsHNt2XKqU6cwMMFxX7FTXmVMpHfgfM2wnNKSoL8ztLqSso",
  "key26": "58145n4GW5eXZNstMNH5Cqm8i6KJvkjh9tNWHjzUdUCjHTGXL5StP8wvwNh7WLnDGavGL1X8uzEwa6cHJ4QDJMya",
  "key27": "34hfsWhf5XEi2uV7hvTVzF7drRG2G6u8C2Wh1Ee1EK62kWNi8KJRjZt5ry3eTFfeA4qQtAasYJLMkLKxsduouARA",
  "key28": "3jiLYFdAn3kzfzABmqoiDDskui5tqXhWmL2pJfmb7PuhZH5kc9QTSsTDzsvKDSkPyZm7vnyKjkr54huSasSd3yLw",
  "key29": "4akghXzN1s9XRbBEh8PLQeido98a67JtG43kFUtdWi3HLk5CQevnt6K31qmiivH24nsTRUReUhgYWiW24Pi8eHq9",
  "key30": "4WiVXCvWUShHhhEiHR45nzrH3zNGgF59dA2rrVBnidFRcdvuk8L9RGkqtCQNRe29i7ABLaqE1D1Zpk5WUEwdLNHJ",
  "key31": "3BRQXxum7Qw39UvgLmbQ5y9gZHLZdGKvKV2Zo3uAsWciJAkemLkKT5JcaEX6TuSjScAvVLf7kEsqVvvU78mzJKgy",
  "key32": "66L9YpA8TNfrpifGiKoczQxn54sSLEv966H9jEhCaceQ6Nk47h4UwbhtB2QvACCHR54bt8GgWbwgGDuuuiGMTUT9",
  "key33": "5gQME659hNuRjJA6KfwdvDXVoosnAsFXF49yQ2G9HGtDUdWknbBFj4hj82vJrqpyPqd6iiFLH82hXNuQwTRjS8mc",
  "key34": "3Z8DmzDEFKuXGCiuvXYJECUw6UzRMbHndYMa9rMLFcrqUFSV8Mx5UAiNpY2iGSCMBEUh7Hr5MbT1kHBWV5v4ReDx",
  "key35": "2TGejJkmX3PH5oDZ9uMqVw95BttAka6ki3AyjNkJeg6JNcrNCSxmErkLnbmizsDYZ3C6Rwog6mAQsgyodorJBeNe",
  "key36": "5ZzCE8HskxkERpVX6FzQU7CAWRxewSsNucrFpgaAL7R9jEVnsYVoiAXuoUQxc4dsfBLf9TpaWXkXLBebbHKkmZu7",
  "key37": "3cUPoYetpD6VF8orsPCKCa9Dyo2m2ifKU94L8dkPUXpMdVSV7LowMkEVi33yftxod3fHFzDTAr8fM5Pmo9DTK7TR",
  "key38": "3En7khk7wGyF3sX7JSyghhKmxGX4peauqCumquc9tCrhwu6zwGwtn9wMSxc2wNwPSKAyWsieDWqXR2VxyNvkhx8i",
  "key39": "3uoKo9qQ4mKEsVJ2EwhdqpkZKUrV9eEgDhA4gYXpkbf3esS6ARgVi9dV29HkAaE7unDig9vWWnopAKxZ4kX4cy3T",
  "key40": "38yfdA9xBtHuV2csYB8fXTWm7ejhE8MeJAzJ7R55Qj8ahhQMFLo2zAtBYAmC4TW284bU3NhRNRCp9U8VmcQNbjPo",
  "key41": "5pjss21cZ16CUYy7g9fNQZUaQFVtTfUYMdrXfBLmoJVWUy1z4utjT5opx8zvqRsBK52jPu1F3Yf22xsEFcqb4KjZ",
  "key42": "2NtJi4bWWrB9FgbKFGLZeMQbv3NYgCremqtQfsYPjRD4MMNCGCY3qVSUL1KHmyFGrtygcz4V2HJoQNnsQmc1nqnk",
  "key43": "29UiJxmGnpaaoe17XeBFJgs3bSAV2iQzqBiQF3uPfBXESwGTqPbjRdYGjj66pV2WnCmw3pHar7ScDZ7F29fhrCHR",
  "key44": "QiRouCmbw6w5wHPvjHnup6A6JSAciyNsqQHwT7uavRDWjaiUzdyCKoLNbYxWs9MbbaFtT2dHSM9qWPZuS9syfdo",
  "key45": "5GocomnHmFUBUPvBgtvtVeSsgcfDmr9BpNe4Y5RRK9qvhruUF2Na9fS3p89V9bxsrR6oJSsMZTPC5irkQU1SPyEf"
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
