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
    "5MpXRqbb7ww5YNH8hdAt8s1Q4NYTe6qjYTZSb3RKjCuMu2Wv9DT8DcVnkCg2M8x31db7QCMyWPyAiG16YYgXrPHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2ud37rFnNyWaBdSdaGkHXyQXDCXGGeeV3LQGKPfPwkowBwPRyZG4GUrNtLmkHbVPtbg1PhNrfrhDndGV516quB",
  "key1": "3qn8QmnDXa6HmLdno6tRT14uZq64b4fz9ZK2G5ckqWBFnAqA2v2BbstJW6yF8DteVgFmWRPqnv1HtmoywsqT5xvM",
  "key2": "m8uetXKwx86czT4wrbXyUUoeQGvovW2U7SscR5Uc5yWkrifCnUTCBjhjUdiYz443n6EmotcWnjGZ8dT5WGrimpG",
  "key3": "4AsVKRQJBc6cALX2yxF1qpvnCy3rDxQH8NjyfVqZ7r91qfRuSiYXyhtnNc65j9vccV3Ubdn4foDnTTc4jG2Mz6ZL",
  "key4": "38Pi4qHUehVMEcXt4yqgAYB5zfb45vDXFS5AwyQ9szVNtqUutoeJHxPL6qioLfKeGicjNsXhQiQYbsEd6MNQ9AkD",
  "key5": "2j6rqFz3SK1aw5mrhA18c5dYTUjCAxuYqyWcTAvJbfACvJM3LPuAQa4k86Brx27YvFsQRCsGHJgqmNA8Kk41sVpA",
  "key6": "5R69nncYnxtQra3BHwkLkik8ckmjEQgZuiFaeEQbH4xtthNoQEoyHPADxJscCx3kZMkQXY9fKyrnew2zdom4xdwX",
  "key7": "efQuQ4amqvHSwC4LeVyUQ6RSMQKJLzYGHHmKMusTbq8m2tTUQMYf3kzQw2xr7biM3LKthNWW1WnJXMHth3dZK8i",
  "key8": "HJK77te7PQ4dap73j2NZuzLUkPJKTNWcRc6aUKJR9rpF2Ch7WXdULksP8hU95F2HsoboUys5W2mkDBxUxjVJuZn",
  "key9": "2qJ2ci6FgLtccwgnbYMGni4W5QDjKEDu4MsHunQB4eyMdKksBPEv1kCfJRf5vqwhXfZxRDBGakbryCAeUfmNwt3M",
  "key10": "Vdujew5ERyqrGTKqgAaEFjh2WDQ8ZjbjiRxKR3JiJ1u2sdL4JzkSSnDUfknSA5ACXLW9kD4rrSbi1cVnBePKE95",
  "key11": "nvEM3L2HvSsFVNnQjT4q1aAxXLoCjrE9UyG6mGBMWfPm4esapWeNSJfyUC6SUViAeVJBDtwMP7DiyCmSdCSoEi2",
  "key12": "3uDZYg7TvtejcKoRX7Qwx3YkCQ1CKosuU2a8LKnrStB3vaiCcLFR3QFFGxKmE8ZfiNihwsDvumiwMQx41enrwNVt",
  "key13": "2jKMBEXwT7PNXh79Bs9y1QZtrZHsPyxJoL8VGcH6s9biBXTAvQRaMDPm5P9xakXNkiMxw5kZGHcMYXxdBrQzN1Wi",
  "key14": "4GT34TMwbABiuTNn2KV8AUUjrakjPWasNF5WtbMo9xtAdZx7qVuR9Cdozssg4AKUdTHrtpJdDFh1fR1vZYFbZmse",
  "key15": "35gh4Vrui91qUaVQtCdAcfeQT8vr1tYJaNjJ1L3r2Bu6zdKTdPShDaHWrf76jJuAAuAPiE1rtgMKJuiqn6czVoea",
  "key16": "5YwBQGofXD11CdT1VSZZnsTr3Qxb2Gv7pjxLWfFDdFzdva4wFwdik5cLgB1XW6Q1hWoufh3DKjniboo7NwAKVcxW",
  "key17": "2uiYbL2JVTiBucEjWYis4FDFi51TF34vxCpbwCUHC9Uy61EkfQfHGervPjpWGXuiJ7T6rZb9DuXiDYKK7XdQCSXd",
  "key18": "2bgtv6e92mo3H8G285UxhqVqzZ2y2Rb7ytjJvhiCCewEw6toa52aekvN5CMaYj7kgR3ZQw6GCoTvAykmBsrpvFH3",
  "key19": "51P2SyHW4FZYfrYyc4VwJuz693Nvw3ZAq51bzQ7ZAUzW9frn5ntE4HLVAmXadFHPVyBxxXkN461JmmvcLradjL9T",
  "key20": "hiF8sMtDpQcvPtzbXBZBXFAty1FpnZH6UvpXhjGYfHiHicEGCXwZ4RMprYxccnVxrXGVYqS1SvZxUnPZwvXxjCa",
  "key21": "31TLbbLw6hYXCmqyYhzcb4wy3jYuwVgGTLryFLQeEWwY5tUg26ydo6zi9pwjuHGk3Xu91JZ8PsXmYXB2WctzRA4j",
  "key22": "2KpFb5fvSchLR4UsmuD1BGZB94KBSoWZVfMunmVk3r9oWtS56hmkEJ4Neb46xhUcknjvfCV7hnsqiMnvMUF4ZEuX",
  "key23": "mzDFw2WCKq2KwB8mKTuEhfK1mQuHt63Vtq8qPEVNBPjorDiwugsw6woes1MsWGAqtvG5RjDLt3vURoei92aSaew",
  "key24": "CLk4g69R1tN68nb1pZ7i8VQL4kwgppJo42WD1f9yE7e7FeRXKry3BdgyBYypNGqFw1PUwd4Uv7P7kZMQKySN6ig",
  "key25": "4KmhMpV9mfR7HxvBE6oYbguWDY6N5dFdpEGoz6GiHV4Zfn4yXRiVcczXMivhUS1UA5TphF98CLvKXkjTMzHDFkwo",
  "key26": "3dyequkUUTarpmUFTFAodJzecrVM8XPXFMz8V76k6bMcwV68pg7j5WaKEHnHRWUwpaHnFSdqECgmkWvQ2hkqUwZU",
  "key27": "4VVgXo4fqtrSTipaJViZcFw2vr5PCcYkFYDTuYkRwNAJgc1ZsC3j5Kgxsmqm88TPPkkzgs4PDnbQCVh7GTZGxLQp",
  "key28": "5YympxFz24hrk44SSUzTxL65Z8FjkLJDzV7bbf9y3Qa8jf3Gi1jreTFNu8Quf5FnBn79XDjfEnbWrDD6idKMjwwK",
  "key29": "4VyHUWVKwVthJMT8mKDZAj92xTFo4bcnC7eiidS6sc27qz2UQbo3HvwZZENmd2pnWawJSEEL3jsku9xWQmss6Dkv",
  "key30": "2hRYr7GSWGucBKrNZD9WZspf6poZ8SXT14fXBUfpCqpdmBMYc4ArARZYdbNJB85CQJf7Wqgw3j8fjKS9ZYb2RhxT",
  "key31": "2jnSWV8XbJ1S3wiMQxU6NRyaDCn9kugdrGkuF1SY5ZUNHD9WX2r6Kduz5yTStHjLVpAAaAdoicMiD96pPKYeR18m",
  "key32": "7FLFGQnbWuEVke19aqDjPRLnqiHVZP2PTYnCfjFpHpVpgZXTk5o5jUVSiZiJ28snCGmiGg7nCgT7p9SA66WMsUo",
  "key33": "29BdPSHBtZYtNvSxoVbFNBMDkp2Jdu49h5ZfBATptzHPqNsZW1kjwvZF72ekFG2kqqDeaYXwPDjVaJLfKyt8RCU2",
  "key34": "3oaeyFsvL9cFUUbZGQYNC7D26iTBb8AB6Hm2quEcyJKR9ifCDjLC27WEuKA2c6mnebWx96GJjMwRgRgEtcVVvAky",
  "key35": "5BUnZAg4LAUE5VLriJxokAFh7tkU6kaBzvnwiWXbhPv9oJdpK7FqD2GVq49rB6wmodhs86jPr1Zh9wpuvpczcExE",
  "key36": "413o1H2sTmEfemXSnnpQChNxuARPp4cq1xejtUDaht55RjE64owNoGvUxYU1wZSLKRvGR89nnrVu5Bi1UPSGKr2Z",
  "key37": "3xVdNd8CvkdtYiHKRWEx9zg6bakTGvkWT7NyFBXe52mFE3XqwxH6KBJgQ6rc1DcEYHntpVbuQjFmqJK5yMwKuh3g",
  "key38": "3mwGy9qen1s1YERWtTKNRH6qqvVAdJt4eayjVtMwzoXwutNroH3THsgxtpGXXKNS25mKs8TBCJtycVChtMcrmh2f",
  "key39": "3DPuaGhgnHP7yvnWFLDow8cXhstrXRuoJRT8h9Qne6T5Ew6eHUux48Ss7ZmNMa23N6RMRCVBfbQiWFrMcHeCSJeQ",
  "key40": "4a3tuF5BNxW2NkJtCwsJAxUX9uE4XUNtDwbf96dCQmYHAxYHscDcFfZafAnSGVRkDik1GufHKy47geCttsVpqH66",
  "key41": "5MPopade9E5FjfvkAmWvejDMNGHPtTpVEDi1gMSVujnaPDjbXVwNZyfq67jCvyu3G4ZQ8i8rb4sb6TRgax5xqGtC",
  "key42": "5D9dRfMM8ZoXgGMmRBLppF2xDmtf1twB9B3szXqMR7sMBPytcvkvKFuKe4XsnHzHo1vgQ3C1R3SCf9FtiDpoanBG",
  "key43": "5ncjzguVdH3eSo5HfwDHkM1DA3P7i6xcGYWMG8r3asYJqbwRrUEaJa7AFFRRrHXpDYWzaJc5Wx3gPEqdy519VBd",
  "key44": "4FFDwnmvVHNb9wzWmS67JoVHNGKYYKNaAU9MRQPdfaKiM8N8AbxM2WiiQS2wnNHzFsx5FK12Eti2fTm2iH7t9BZ6"
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
