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
    "3fuVhJD5EW8jwoCi1J9wijYQk59gq7cxfhR7nKMFT9xh7Wozkh24iST46gYptv8x3JeS7T4cwYvvZz28rH3KG6CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kPuEW8fDwifH52PJuceorPFapyjSs7LQRGvh258LTQBPmX59YuCpcgragK947dRo2ZzWgGLJ3zVS1wa5zYrBqVi",
  "key1": "2NcVWNzUzijP2vze7d2zVYTbNsX2HD2q5XhTxVforHUB4mmDnyqP27qRtxpGWfKskiAzbDyLPYBkvSNEjj5sGi4q",
  "key2": "5zepLhnnPobMCehHWDDF7aBPaW39M6jiENAPVRNPs1gQQwWQhYgsW4CHvrgEzWnFtNrsaY3eem4iUwu6HyHwePgs",
  "key3": "3TaJKEeDHs8QNLECCzjd7DaWqBYnByh2U3t1zbg57B5qwv3kE7EmkvXWEdDaH5vviqQvdsqRKUsYa3AP4qt6CPEB",
  "key4": "4CDhrmqUzEh45sb69jDqT5p9HD2EG3PST86GW6Su5diJvw4D5XFVbEU2S2ZxLtGSLWk2iiQrhZfyQsfpmSVsyhEz",
  "key5": "2ZeosJbohbi7MSTnbswLapNgMM7hYrd7dLXzoCrcfwHzVz8vkeqFZRnfVYkkUAQ8oz3XNLP2vvHLukWZvEFbrfeD",
  "key6": "3NjfP8rXFsVXRhU3sct1ngdae7h34AFU1pbnQpVcvVhmz7kDmozR7bWANE9qqXij7Njiuznn7YWbZhdC9HtzCz5a",
  "key7": "5VTg6mpPnQRqtUEMN1MgEF3mZYaTQNo3JXM2DrmaUUkWxsBnHYHsLkpa7GP7yfCUJAcFgNdLYcqxHbcm1idDM487",
  "key8": "4BGKfr7pupKzr4Xm3bNNSsqRX2r1WPzUYC7aJ3F5TgbJGA1XLDnDPJKqGQhStZmaRJtBoxdoWS5HprckeJnUBM55",
  "key9": "5gYDCfAFH7erSymvALqqjhqPhiTJEd9HBQYaXcQED3mrVTr2NxzyifyLwv7tiQKenF2hBApSpgsdv4NxW9JdbnbR",
  "key10": "5Ns8uJTbuQGbVz9pre91rUL7nxcNzUeejWMyVD8Uz99USNTgSz6A1nyamnygwXLbgE43UME6sPRgKTKmg5T1MUyG",
  "key11": "52wBP4exw2QEKBcas14JJJgBNWYEbGZpV3vVNXwe5HQsd3qwLt8pBWDaG54pUZdxEfqW8gf11NWf16fkmJTjachg",
  "key12": "2gfoHQSofPnDRLS9XQ6CzNogByijHeViWRoSDYMifDmyccNwnFwtKdzRano2dmGqLkYkhmYh4FpuPW44VjtTJjp1",
  "key13": "275RF1WDFmids25FHYRVzRZU1NXS4EGiGaa3HWozbzT5UoPRJZXaTAFm2rFnL1rn3jLfAFR9V76b5tWtVXHvfKPN",
  "key14": "2CXfghqiFJiAiszPr7kNp4NH9u7AbsrNXmTAVhTd6vK6fgDnVSLLP81uqksWtqyy2a1MUWuyCsBt4DpCCvBo6A2t",
  "key15": "3j5W7cyLtg2GjcBoxXCQQuAeGpdz6iucSWAcu6kxgwEFfqkw12NQRAnn1iXgodke2SRfU1BfDvUPotRhMRCG8FuG",
  "key16": "2ZUHtpAsZ1HRasRR7rnaZSXi3uH79pz1CkVAbJvqrNPGzHqDzSg7VRXpAa9zGLoknnZDjW9YoddiqFzoGJng8NBN",
  "key17": "vqgssjdUFCgh6DBc9vWVeY9RXH98YBf4zyU4Y58kKeriNpxuCs7jY3DhzbzUjsXUFoZ9y6As9x9FTrqhYiYDFLZ",
  "key18": "3fCNasHPvtyrPt3K7WmeKmDMsMs68vpb3Vyhn6rnceGedPAyhSnpNe7zCVDcfCgcU4utr6thkk3REJefCcmjH2UQ",
  "key19": "2BSBJLiTQtyzFgsRZJkkUdhoe5jfegfxNftLTSkgyuwNFiKV5WHgTqKB1MizK9weDHEUcokqLRbCqrTG9stC1vph",
  "key20": "4G2M3RNn2HDcruCAbhsfnVWBV6WEfnnZBnd3dwgWXZVFZ6y1pXRC6F6HrDs6B3YNXrv1zb9SFY68PK2v9d3QnP9e",
  "key21": "3ptCTDME1eV2K8QrmaR7ughQpDDLKYiz9baKyjyNi5w4GS2hc1wLLydvSthyWXWfyrQgzZmvsy8mzYYK2cDekzp9",
  "key22": "5iRgXKrzngsZdrpMRjpKF7GQujR8UtQAgFkYwJiwGCKrSg4XyuMtvqcN9Sxr4h23giJUVEHYPdi7GdpG6XTpHNfj",
  "key23": "5jj5cJduJYcke6PyaGN3sLY5rjcdoEhVSGHhCcdYYqBaHbCxLmybLFVFPKEetSFtPGkTzua4KVPFkShAz1rG4MAS",
  "key24": "36TGEWvCDscdqkukLAa9aDfdPUCzCa3dTngc5BTSrcTUNA1nGzsXjyFuB7CwU5VVkTSt2XKLMUdkDNtFEXSckeae",
  "key25": "563TrF8oEFTfd2NRm9z79HALgdnmsxBauqncYHvEqhNXPkyFbwnJDEoQRM5VFT1tnrC3gYq1MAmQipz3bsCfbZUB",
  "key26": "2QW6HfPriEkFMfNa8S5kDqP7ScchJodXoHgesDuSxQxG1FWQTZvK5Rsr8AG5VzUkmKiBmT43tcVypMM6UstmoQBj",
  "key27": "3wcJmKpLvuTgJph585bKZAtdV1z8uPaP17UXZCqjeCZ34hdLF7NhzXVtKg4iR6mGNoBEYG3XHBPAd8iESTgFEFzY",
  "key28": "2UUYw6P1uEYNxtRJF7Rm3AYB5shaAqKBS19pLgmnR4VYNy5jPNczkFsircv86NCgJnXzagYBYzHGmZeti1cr2v5i",
  "key29": "3u2hAohJfinFrsZy2RK8qCZDefnKXbEDUvbkjvutP1h4NNw2MiWVpzmL9GApB4EgeEUnAEa5GZsX6SC6Pd5fHsC6",
  "key30": "5DhfBYfta1FNcW86jnbnpUZyGUoyfpyt23NwnsoP3g1g5RZunesa9Viy45daMmDy5RrV8u9toiCmzTxSYjbkXrDJ",
  "key31": "4ECTTcbN2vPxrs6wNNRBx8gJPmqdDgtLQH4UujHX15KRhrLRZ5mHUrvkHThWvEP7LaVx676ZvX7kKxxHRKqf5XPC",
  "key32": "2Fwzxhq8HmY6L34wLXmvzFJu8T781ujtsuJw1j4DooeFGZ9HSPa5djqGzW7um9isAs5zzCssefLz7y1w5bDJHwLc",
  "key33": "41z4WqnbjMkurZhHqfjkYkufydPvyk3pG6rapiRvbxoaNMF6Yd781DdWCoDhsX5Qs47eywA4PajGoyntxvpoobz1",
  "key34": "3sygQcc9Jcb3MQCL7mgqw5GZ4gkQdE8WesWcwnQgPxy927YdQJnJRLoojvGKACe7V8S6yfD8BkpzaykzbAGRcGCm",
  "key35": "2Wpbe7Pbej3doTeznkQPBX2EJ9iW9ud9yWBN6qXH96PGpQgpV8BUw5myhFWQWn4cjhPYJmgFsfkStsASR5paQT59",
  "key36": "AiWjxjxyM18s4HgCxr49m1VBMZJ6ztzpw7j2VainPBJSxeiQWyxK2sGhRqFWkUaRSkTgSnZ1eQR8zPYVNU7t1q7",
  "key37": "2LDuf2xyjvhWVgNaL5Xchgh79U8ULu5poj5iQqbPXYrBXTkdjMw5RK4wk2aHk2tkAacPRSwuTG4sMhjR6dKd1xpr",
  "key38": "5aMNyz1gj57kGhv3gx49giL5zVmNsupPnFPh7bKi1HjXwgDusTDK2ADpUT6k3cwhSoXB6opmVYUnMTDFU3xTCWQa",
  "key39": "3v9xG1dfYHMNSWU3Cs2dUA4FCfD6eGUT7gFS4uvbFZ1tTFk7QZsVYsVPEThPWYGa95RBvjuJaCNa3UGBYeResWGo",
  "key40": "3jumMhBv9KtUqgCBawfLeyT7eV8QdPaiq19A3mWLhjyfkKC56Nt5EGYM6dDovrNEzN4V2r6yFD2ob6iSd8tV8LJm",
  "key41": "3F9kFKNsYimpkKmrAmpYHcaLZQgUmrYSsxz39hhPp5wqWq9fCuRbtaE6exn4zD9K5F3NQdTsHgPperN9KYp2KUFp",
  "key42": "38qo2mc9yGMLwqsaqTmjyS7ywFXpzkyuLm4cXVh32jW1XhQEKVnPmFeBPCR9Q7RsgTQbgdCanYvoh93ZUoYBPdDY",
  "key43": "5qbw9X1AZHDLUsro2hyhsLjRecCJMswB12LGkc9q66mKqHfVY1WfFserfTwNPSAb6PSN9BPrNCVZ9D7VTf9Yhq3y",
  "key44": "2wQ1eAFhpDcRzHbZwyTqPWvBYMaXxGkreE96fgdJ4jai1M23AFs8nhdPrTAEcVpP4Lf6PmXBeP4XSw7csvMjbqLr",
  "key45": "2RxppJXaTXL3Mn32sXcWgGiJVLV3YquyD1mHsFXXRoXZ33YE9jz191est2S7XgCNWUQ5jsF5ebcExhfZxnESvUXi",
  "key46": "4Y29iFoMG4YRGffmppgHSh4hbZCTmu3VDpigRNwzgjxpgL5wP6LR9BT4J7zYCabdJFRZYStpdQiV74ZKqfSZ5ZNb",
  "key47": "4ufv6bSAW9wGMBvyDziWNffSCAXfsZyUtYVJ6GEv14W2btePyxadJuRDzC4JjhqN7BkeF85JRfHSnijMNLjeTW7o",
  "key48": "3N3R7GM267xiKDowmNj4tXSLUEgV9iaBZRn6fUdsj3gdyYaVsKWf2k5n5agPrSUWpqKsgE3SYKxLQj1gN1r3AbNB"
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
