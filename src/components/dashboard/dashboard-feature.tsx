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
    "5ahHdPPHGQXkb5MPgVzb13tp5dvScdgW5UdrQGg13mTA24aTZ6w7AuEX3A6ED38iyZd9KgCxtuuqtXCoCCVQStNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rd1UzrHa8VueThLMACnwHgk9skjp7Hg9WGrxa3EA8FAAp9yLqFrAZFjiAUqsAKLaKpJjWc4Xin7RHDJw6CVxiUQ",
  "key1": "bU6FJMrQF1miXZcBuCi7KXHqrZFn5n9xC4xvTpjEZsYnjFPL6jCXKi2XBBS1rB3fMcxLhFizrNK5ZH7YpwptxuJ",
  "key2": "58TuaYpZtsjvrT47fdiSKvgPNQwWy2GERZyXVBPKEzsbDu9jd3sAoWG7rT1TCLNjnj8fFPZXHPEjUYX4f1jjGtaE",
  "key3": "qxn6QSLSUMmMvDAWgvc2zg1W5tZZxAVUbQ8n8EYd5cz6hf8Fk7UiVm2kZtQHU63fPKfWWQ7EzyBuYJZAWYWEfUd",
  "key4": "4VuWYD9pXhZowyYg6sWHWttSUaWzwcvX3epft4gruUQUR8giJXj3ayWGeMy2Ri76xf8wzM74m251TKyrB1iDJ3tJ",
  "key5": "soeHpRDjRJzfEiaNjytnC14BAwToPNXFN9kFxxaD7KDefJ2qDuedAyjZZghX5o5Z8AgZcwNZff3Zso43YNFPy43",
  "key6": "2syDKhzj957S7ScRa6c6f3AtZPEa61Xc536PSpki3pUkQ9aP94tTGUU1kWoGJVvbeULLCTgf2t6YpNjkidiNRnZV",
  "key7": "4rxmtAkGVbZ9JaLZrtbjx11bwhibRJdgSMPpjksbj9CntwHHccm7WZpcoEZxWaPJ1enu4wdwEtPU4qwzPnpqkTAC",
  "key8": "2gQq8VfFH3Uq9RLsN6zbv8YGXq9EYShPfunY8st4WCK2MNUukL9AGJsnpeYkcJ941h3tCHDPBspgNCL98UaMhYet",
  "key9": "2ms33aTFPqbxvExFdQWscr1eg41HHNntCGDoXWYx79wkNLABA8AmVDF7SRp6xWybRRKpgP1uunSQcsud9KZiupyC",
  "key10": "5gECNXRPjMzrkHjNdKkmxx4guHFLzc6dB9RAHsMDbJx4rwT3AeHrdNkMZHYDhERARY5h8RKtenKj2LQ1pnPc9pHW",
  "key11": "2pLjCAsM9teoVcc98KN7ENBL5qVGMm1aCrAr5CwdxRb4kQxdFL7qCaySEyRoDdygrUqbmkWKUn2eHhcrT3tbk3vX",
  "key12": "5QbJp4HiYjqJ1w6rpoJnu3dfEz9TDgRFceiGr2rur7jrBNLePHiHYMhArVECbPqK45B95MFFvWhWxiyStsq8kLE1",
  "key13": "2JcSrnEiXrygY3NtdLzfL6rTb7FkfwFmAZWn9efKua6BaoXPDVRNeyYNmatFkuoMo8TfVNvR681QbNntopupXyaA",
  "key14": "2zHC9ARzbrJLJ4kB3vogVVKocA69Nt6wkgT8qrZPKGRQPHqnFwNTcdqp7n1ZDR2Dw3zYxJwRXZ9BfLjjiDfJzb43",
  "key15": "5QrQexhzx1mByt9qqpdi2K1RWAn9bGXdzun6P3FusvjgAHorJq7EpTxxPz83r64bHkjpYTKKkmqxsyc6P3g3ab1a",
  "key16": "5o9VNcGrWpzky5xoTnLwvd41HNW5SeHCtKRP7fUBKHMv2JgKu7rmwaQwV1M5U9g669kD42wWkKHQXaKU8rEA3Ws7",
  "key17": "2sYWwkcmqsPfYKjEu3vv98zxWWmWnWRKLxntLuNVTWLCY1LJxrKqLVhGmDsk57x3Trpdq35WhmrvD7FoPaabAJr3",
  "key18": "g5DYk8qyLMsXL38ZCvgpEpzfw97BjEerBHtUDC6gciLECgwX6HMdHJJ8Kvk74Tj1hyhoVvNdE8NtWt6L9ELQkWp",
  "key19": "5AgUtXMM9CPMFWZdNzW1tyP33RSZRkGK6g3FT41bwLZYFLkoWQaZpBNX6MNje3rpLbqZr2uTqULkYHyz9V7rQ1iQ",
  "key20": "5VMjZYahtV3W26P98dSWE8jhzxUFTVA9PFjyoFwy7fg3vp5ESVE9s8kucUG94xDGybfo3mgB92zDHNr17DRiTwGs",
  "key21": "57pgpugUCxBdneJ6dxCwt2RZrLdpK3HVSVFtxZ4VajfMo7kinUVmzdZaYuHxxAuoG4gXaokGtU749nTf6xabxFmk",
  "key22": "5akRHoR85JKshadfSMXoNXH8aELygEKx458wxgzmUosgswWQgW44f4kWPA6Tn9PiEg1KCwcAA9VUnnqjG6EtWyXQ",
  "key23": "5FYPwYxF3XX3C4nB2a7nernXBW9XcTopknWM7omigZpTFoXWoegdeKGPGncaMiX9CSQ1gS48btQDw6XCoiZezgJD",
  "key24": "2JpkHrtjHcSnpLajTod6WKdW3XqXU9kzZbuzSFfZV6Z6jBjweVKEV5mMhT533ttJGnGs3y295QghvQjugQHH5JMt",
  "key25": "3LHnqUrP2cDjbv3BgX7cSQg8JpKF3Cenr32geR9MbxhVZrySf2Anp2bfdpXRAoyh4WMmrzUXe58537M7CudXpSQY",
  "key26": "sCr51fM833V3YZkrVm3Kw1bL66gCWB826rBcNm9hJE7agCGq9SHnmrY9Xk9fH5971GCUd9m47u3HTTcp2pzfMs9",
  "key27": "451cpCqzXaWHb2sJ5k3jAmoXov41p8YXKPh7RJ5Tgv1NsAS2239Vw9fM5EhdfqTyjC8dyHMMfYUbcmYEdG2RSVYa",
  "key28": "23X9ssG9iMmvktDZ591Ejo2bKjWYkeWbPCZTBwXgHkrrxeRWx84b4MGoXTSrBBA6h6o8o8T7h7GYmsjvCAwdJFGs",
  "key29": "4MHecgT3wbpL5GLGPqLvhf3eMqwNJm4vSbVcpjyWFGQoqh5ZQp6M6bR5rgryeLnzd5xhqCEec5sLsPwDjsriHyvB",
  "key30": "2sCQDMDSzk2ZYheksauTVDDqpB1yvGDMGSghezQLMMFtFbEDxXGnrks9U5yKaHSWmaZ8GnANHHXA1jVdWyup9WVH",
  "key31": "6q84BEsaBUEqbLKDGy23JD3dsKjbzvAZnHYYqKAmgeiRcfFNjemfBTDtBX3ofZ44JsSkAh2we2Fdt6A7Ba24qC6",
  "key32": "wQxpAj5qEbVKiFeyXPrqdoCQe4HSzxm437yKw71xeRGpPBQ7GpH2Snn1CTwYbjHKKSUoL4n42BtskyJVUpYEdBQ",
  "key33": "4VpcEY2hm51ut6GCV87RqpNeYNzKXCAYDskrVtUPcgYKU3hMqMsjLPJyCZXLipT8rtrdCLXHUXi8R8MnoyczFxSW",
  "key34": "E8MR2PtxZgP3N7BrznoULwpykkJkJJCoXfVwzoVhDTtHQQ4svLkSiwdPKXguzRGbWPhv214b7uXJ8dzPbNRTGMj",
  "key35": "5mjtuUbaWiVHw2vctFJYK6Nom4S8udeWwypP4HydUajYQU39gULypT4cAtjTdWajZ5PJkdibAimspm9hsX7J5mb6",
  "key36": "H8ZdRgg22eyRZzAZchGvr6z4BScQb5nDtf6SnN3n514NHq133sc1unj9LSg4nVoaAuztbDDkm2UP5TQhGJsQxb8",
  "key37": "4fRmG1ooVjsJSW8sUEjSxWYz2KqwxSobH3j8V2GWmqRDyJiNWCad45QSwHbsQwPHMPhEVi1fs87pGD8PGPygivmy",
  "key38": "4yuutJSz9WcAv7CJHCUt1SZFCzvzqW7ZFFqaE7X1DLgyRKf77umCvpCUXzgKN8Jfp4TFYiJftdUfstm5j9XDiZAt",
  "key39": "2dmPTyqTAA9udT8dDwuWL42WQTPnPHmdVAAZ6vuVKn2Fbz3TXEWANwqwow19qvDKoLznwme7ZtXMBccjCk3zChHA",
  "key40": "2JNkM2xV7HCzE6r3Zs6BcftNQhuUrFYKGMCvCMAXaVA9Fb8LH3aU1Bm5Fgq1jrejxjMHTnNu9yHRe5inRLde2JmJ",
  "key41": "48zzMFsBT1r2o1tpGj7QwjSYAT1scB8pcSh56PrCAKfXid8Qc7xMwiARkBSUcPZzSaFFv2mC7rXyrENma8drzoMA",
  "key42": "5JmvADWZDVv31NTUH7s2cUuqbcYdb556YKhcW3qQNdbAsDh53Thy5H2WfhPgaXrYd15raprsV1vAHraQcuXPiJn3",
  "key43": "5kUgY8XZLv5oVXTQx2VEYrrwinEvyfVDwh2mVKRWoeY5aJjeE1A7HHoV68cCDktLC5WRQerJknTwCNZEw6hvMEFn"
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
