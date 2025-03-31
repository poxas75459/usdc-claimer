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
    "3twcKyLxsTSRh8giXohLGNHM6KufYRLGzrYj8fxaiqED2sHeWKV8ceFssVWiT2S9Boqc2a7AmR1LrkFhBK9asrSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pwxQYr8Q3hrV7Qjqz8X1RcvHhTaD1wCNPoSmh4BwP7aCS28fpyMjfQRcy5HMdobvnWLEWtBbYetzNe35t3wwaYf",
  "key1": "2D9aiqXCH8GgwMey72dktMaA5rww9s8sDwj4cdBnXrCkE4p5TeQErDCpxYerPxWXai2aSGVBDabdnPjYevvHGYWw",
  "key2": "irVtjurL5dk52xefdSJRCkpHshJcAeMreGm1QaMhNDd8HVXFQwRLqXnsUp1vYbUFira5UvSiX5HBwrp4B3dMRjF",
  "key3": "3deVQSBA9xUfkHyitLoCDAQjBc5sTYdLEqpd2LeqR1zpxx9iaASoBUrKGkmUVLSN6crtbiCoAsre46GpDLT3jb3V",
  "key4": "eKrXWDvpnKXrqmixun3inkmzbEgUSrKEBCBbisNvDVv9ZQrCYaY6huv2jJAdFvZTZx8UBnbgPEbPyPzcUVnJZSm",
  "key5": "3XRBh9BKw6U56DJinnp45LJxgLapQ5fcqgeVUX9Wa3aVGJo2mxBPVYPLqJLzBJUKNdUBbjiGS1faDKCkkhddtdWn",
  "key6": "5CNvmJnhytPYRHW8NTMRzXdCeuX6r2t43ByKFVrhxf31VxNtnNFAWcsJAMroz8hHrS3C5m58JUoNNhMweYPN8S2s",
  "key7": "3fWxT9ra7zTn6fhe8ZsLJTF7cNz7SWoSV9bYZSfB7RnRf84GBDV96JhxJtsiBvnyuXaXV6rQ46QvPrGSVdFASEz8",
  "key8": "4qstGzNryGcc3XtPaWhbujXMS6eQiEaPonC1ATUR2qEzPNRXQyhnnC6D6BV2wdctgMBTGhynjTiY444LCtemcBrV",
  "key9": "634JCn5qqXt3K7bVfHAEr5ioHDGBu4N83neUZpyXsbo4YZdn6gqmapi3pvuskx2gbho76AEb7Nip3ZqpvcuHNyza",
  "key10": "37odrun7pmMgmXcWeAGbUrnZuo5AxjYdb5EqAMEMQoACGY7vGxiAb7MfeET9p8uwjdrpTkyFMdynEv2AxeQCgcDH",
  "key11": "51ngmyR6Unqsf2L557rSQibnxni3fUjpd3LadJtMuVZtUotzFeJeYZ2kysP9enKPWAopvkB3CV5NzWYE5BF2AkDN",
  "key12": "4mutSUvYm1LrzuucY6s4j3stxQeNJCjMiVbp5rpHQiem9NXu9rfsZKrhnoruaM8AUWFsFgZsnDdWQHNVGwvSnF7M",
  "key13": "SpfTQK2VS3qK39Hfvq6NCj4TqmfqWSPwRjqtXFmbSR3fZg296VBw5Q4pAdwnZVXz1swiZDbGspzhGoSBcbtv9Q9",
  "key14": "2SNnnD33eYE5SZx38aFzff5BnaJfzWKWL12U2WAsxA6q9MnH4kRBQ47No9DrVTEH2ef2zx5PrY7pUbmZJcjd6Zt2",
  "key15": "fj8kJNC3dgLeC1VMU4sPP8sv5dN8Jcx65b29UdWod397tpsSwEwUQHjc6QgASxu7xTm2LYuedofgTwDSdJjm9LS",
  "key16": "326GcKBGKyWxpq3UbbK3imTNG4G6TPXwUXV9nM56BtyUqf8WrXRuFHBwzkcpoS9BCgpCz82cy7SNDqgUQ3URedbS",
  "key17": "3PCzV3CcDfXAGvGF3Vg8qHNuryKfzvb4tgJjwWvYWTyz8cXDunfeaquv1Arxe2jn5wQTdY8DiNCKPsg4Argw6NoW",
  "key18": "3avDs8dyZxfFfcu6ux9KCdK36S5Fer7rz29QDnPQz3fhn9PUSnSZoH7cxRtJNUMmUSWWu2KDifW4dMJA4fH817vG",
  "key19": "2ofdp5VY6Eyv1AJR1Dt4WgMLduc36E8XfmwqQf5hV6z2tXccWqbXzgGtMX576PvB9WKHLmNWBLRGXk5PbdSrP6tq",
  "key20": "niDTPcFU4i8Rm5RwxKQLYoijTF3yRva4jdJtZAQ3uW5fkrYHr6Tqpsfva5bGL69CVo9AUwj21VRqeMhBJZm6SVk",
  "key21": "8CVaSKsmLZWzNNGFdLwCPqXdyq6Yiinumvtg9mTcWXV3BJHz1VTczqFpYmWNx7bX2DsCjfkiJNSRUeP1kcx9K6b",
  "key22": "9oz4SExmB562Te6zsorVvt8UD45XNr17nHE5XDT3Rcvr9g7qS3EpNpgLMFRF4YrZJmY8BQqGQBYwQgdFiAUneyf",
  "key23": "67sSR3bBMpshZ7iur2EwXzS456zHcTJN2PBZLBMLZEGr3uciNuHJLcDXoz467WgNrENSWxCLz2zmMi2wQi1xTf7",
  "key24": "4Fezkij5FFpBH1C9UPRUiwZwWUSEvcyx6SNvwGXiqwrQnTLVMs1hzvwrdhgNgte7J6hoj66vWxQ2HeDxP3p84yeF",
  "key25": "5jH2cUSDnacg3zFK6zEanQJnbtXqPWqMqNJ9ZEjaw1WhWL96PHgN7zeU8KA6APdUcxYY9dGPbuX4y7ScqSLEahKi",
  "key26": "5nzb2SQNRCbZW9ARk7XqNv341q2xdWv1ZyKk8e8J1oDLhCTTY3sHMKuzRETXPmSM78uMwZCTqADWRq2ttxEKw4y4",
  "key27": "3S2paeK3FpJA6kv8dP4z1Cva9tjggxXpS7tsfMreqrQtP4Y86h1yzYyfuVquM2PCcjWkPryJEYF6Njqgy1VfNTYn",
  "key28": "2Vdn1TqZshvgJfN4KAeomU4aHzBGbmUWer5ZrzkLZVFqujmTGPHXJ3ccUz5mHYM4X44XTvvbsG3s2nABHGrzMYpN",
  "key29": "33gsjRT9pS6A5mz4v1ksSTfB9tnNMitwJraL3ypFLk5yrTGHLMDdQ78p7er9uCZyaXbwwVwAdKGqJG2WV89vrEDY",
  "key30": "N1JYemu3TykvQAgnWBt7BJHa8T3ZqGtXtSxiZtpS9KB2uTWAY8jHXEa7giptcCMR57tdc86N2ibi5dZsPvw47Ph",
  "key31": "3QLpvunwh6PdAvo3QhGgbyNpXsdvnRhENY6cHNWgo1yCPZ2rxNjaAMQVdibXWoWXWq9d8CjPHF3TsPhNcjXshepu",
  "key32": "4DQFMM5XdUe8neQPyGhJToTaymx6p5uBNqBAqkcdkRGhX8GrwvpgxYbYCmngzgQLXcXXCmFCwaTuhfgUV3EJD9h6",
  "key33": "5dHj9qEsfGT3iahq9EucjnhX3pjuH7ZMej4Qm2uxAb3Z1ef1PQoBRAy4Zq6k934g7KFKBY8GZ8cYZfv8dYcd5vEa",
  "key34": "5zfFbeyEuJhUCX9WbFdptPa9ZVhgnPuz8WDMs9AaDcJUa533ayAG5iuhMSueLwufU1Rt7SdXLuTEmeKbFAGeCH4Z",
  "key35": "5wT6pNFDvXuK8PhvBa9P9WAFi8hihA5iUbUxt29iUa69AHrXfBNRCi3YksnAvsFswPeCdk2rtGx2e7J8wV2LD5Hk",
  "key36": "4m1Sn6jHGzMscnkkTXTXJrtZ3ZtwxJ7JJZpLRsNRedu7BVTX2UdYd3WCtxgUN5d2T1wpKDoErf4F5MEQL6fo2SuL",
  "key37": "3RJkfxdzdy1afeUeXsbHrWtj94pW384hEDrQkM2Uums1QwChrPqxtXxL6Lj8ix9ks2YAUXsYmFfkskf6zmvuDMRt",
  "key38": "3EdMsxFFJWwcem5dBXgQuNjwQ6gZZTwfG997cN3B3suoD9s5R6GwaFiW8zCvrMMziPmp826m8eUa6fr5hBnffBDQ",
  "key39": "4p1kNEiwVsnTCVuc2GiFQFAfcDAzoNsn2NV1NNGgga4kEV7BZrPFqffyuXrUsvz12LDivq5KtS2EEJexEXrHgymk",
  "key40": "4k4jgUCHA68hd3vf5tFhBrB1xAVThR9rypeyuMjmLXFRFLgvQrJrMkZULFWrEvggryYAhNqsSaV7DUiB3iktVXov",
  "key41": "3YJJ6A3LtzYxDg9FBbWoyofFtASfy7AeM6tQ2fFERYNLL6NvSBVSTqHrDjN2Ngf5J8CPbNkvGUqyNPEHtcX6h8bT",
  "key42": "Ai3ZmqJbRazoaMJEXcBX7A3dWCwwSP5FBDpUf5sM1tbd5V7DCgWBEpKqJywc57v8xeafgzqzrvTmgs581udvBAW",
  "key43": "4BFZ1gaWmCV7VtcRjUkboLDyPJWdj6VuoLEydqT2W7LbJPaxZVrSbGfyv34zG1PTVTw67iiEbP2ud7uJBVpjCVgL",
  "key44": "2nHftfmKpRVpxsVZ8wuu4Sgve4uYJNGCHMLTcGy4HUJ5rJCMuwVBLmH8qcE6pwi11VqNJvvzWY7FkzHfyp3JrCJn",
  "key45": "3PUjgYhCUA1tSC1CfdEeHJhS4HcNJNLtSFoKJuWrmZWr4hXtJjG8yhuB9sZrzVaLksD2jxyCHF8CnTBMcqGH4r7K",
  "key46": "EK9jkqSvS9scEZn8MBrsJwiMbb8Sy6ZLz6hKijDbpriBDb6NppETX3dXAoVfK6Dzo5CsWGrT3CSNmQ4mFEiPyYZ",
  "key47": "62h6Vs9MB6Awzq5GhEzjhm79ZkvR9MW4Ab2ekbZihaKuCnH6ChLEdhAQpPr5hDSqdrChPbpEGrFvYFn9uJMhQFBU"
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
