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
    "QNHEWpP5bxWVbabZrGRkMVWmy8MmsNtJnDypL2ZtQSaadRwXsjwDXNPEWWrBygttkAdCvsF9EY6AtMoAEy8o5FR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B6kNDp3NWvj4idUxPFrWAw28Au7q9ToUCiF61drUBqmFv97xE7GEVZTTYJePfodkg4v5qTmn5JFPfzNX4QQfvhW",
  "key1": "5VHimP2CPaDfbif5333DRSiUp5dRZPZni5Kh4PkeZy7pLbtYvMSAzYY8DpS6R49gGqBW8GJsd9u4RzisvKPd2eJc",
  "key2": "4AT7owP2hqJ4wDY4UQKYnugEkaAQwSuNNQYKNQWYHkLRSyCZev446xz6cpN1hWmZbApFMkQmN14vGvkhP4t5WkHu",
  "key3": "2YjCktmC2qpKhfyrNx8eGmZ9EBophLAWZwcCzK5jbt6GywMKCGmEwLvZpCXTyj69tn41wBNwXkrjjAAQgGtcppBb",
  "key4": "4gps5YR5EQk14UWduL9Dv1fVdCXHSzd7VUVGBKDdhkUsx8Pd3QumPKJQg4Y54uE1Xf4ppHhsh5xAzffZrnkrw2u5",
  "key5": "5S7wrGLn4wsA5e898rEycZLAFrz5PqyhK8ejS8vtAcN8otQuK6s4R5g9QgiAVgFFSD5y2pG9TNuohWBHT5rXjmsN",
  "key6": "4BPXnkcc3HB9FpvMF8GPxeDG1ezcSM2x7Un8Pbvg1BrTwmD4vAQfg1YzqYWA6gz5qHysYpMpYYnsWoTKDCSJUtk6",
  "key7": "4TYEAeoJs5g2fX2wYk6hXPSwW9sznkgMRSdk2HPiwnsr9LvSrgLmSkmwFyp48q4wEyzwfWxWBmvr1g5X2cV8Jb7v",
  "key8": "2VdtVxtAdv8HHoa7jaWrwCWR5XRfxqdBqAsYNC5DGneq9PEtWfNfswLE8YKZwJjynhfaFscDkpMNDh9ioERUnW4E",
  "key9": "5ouJRXtGE5vauTcuTdoJSjv3WTh7Xuu32SW2Z6cb5Gx8E8SCZDpJTPkgLr2JxfGQKg8CBvQDhYtxdKbthyPJciHo",
  "key10": "5sm5Z3LBU5Fh3x3JVnwyKvBizqdJAbbBvmxhrBdeXp45K68FAPNzWULoascDTw5RayqNLAYAnf2bKGvyK1Jr39AE",
  "key11": "5XgUNQAUe7XwQDqKQX9RX3VmKmhNS6Jog8CATMpRFzZumQYnWpBvpTyfruwyjJhaJZjHYLSLP7MHPxuK7BfqveP3",
  "key12": "kxsFWggCR3trqHFwK5U854NKbbK9BQrUTZbmBU62T974L1ENVsLABzKdsbFNYrhncjBGq168jvm4kS7QR82pDtS",
  "key13": "hrTsTQK8FFfFa5qSoSahsjGsqmxFGQE9CEQQeZWTHi7DYDw7fj3fMktidWtJVnaaUZnrXYBaizL1QqVYdc59miS",
  "key14": "2JHHNdU4kH8coy3Ncsq5havqhyme3GGEdCFSUMWhCLGo3k8efeGBoWip9gaGQgtU4Y8CXnwgLHHmXViZrHrywsjR",
  "key15": "4T4mA3coyC8hrtpuwhKDZMbfKszNw42UuEGBuiGqpYTmTjfnyVWULzVTq4FcTKc6wcZtDRAz8s1yiN5BfoGzeZZL",
  "key16": "2LFxXDMy2NmEbZZtQypD5pgu5wDgz9pF19ie6U7HpZiWGjArFp5dT7ubupeEEidmr8qw2oxx7BWBHuFecQa7bE4t",
  "key17": "TUSPgewRryeXfPm4GeS2Ufj76SpnKSgN3CZ2bQDpsup9fqPKBGfk7834fPwFgCSRJsksAcHRj3xV3QASdPohPmG",
  "key18": "5hvzxhWUgZ9UXjsgSiQCTJn9h29HXbeJjZZTLnM5cmqBezNPP5nNT6WaoD8oScca9GLFSrTBHvoAG5TG62jbh4a4",
  "key19": "5ZA3Hq4QRGCsh9yv2BWPPkFiLARgWUizRbCdKdFib3GZmouwYpvFDhWwceZtjYsTF4xqTVzgsz1uZqa6YiBKY3QQ",
  "key20": "5QEG5Q2XAZBHGzhtCaY5X3nzyVj7NRVhoJHwZxgFsQSvhZ5GRCDKVnbfnFSsqDmtiN155K8spSArTMjrpX4h7ME7",
  "key21": "oZvAh73UYuTsrNUBDpwjvgYwFLNegdrq6kxSLNkcon8yTVRhHDnYXeYHBzMyWC2JvseWoT6c8qRDYYuGLzSri1u",
  "key22": "5terJUNkJdHrw9NrFXTyGH3Vfm4gLAe3UkF1kTfUnqPGyJ2ZWJz7oEYVqSAMvc4LekEyzLPqRAzMR7Re38zqXkDN",
  "key23": "37rQCG3EVXmXqY7GvQ61R9p65WCeYswsPxCb2dxkTicnbqB7WftX6VmfUJqC8P5YP89YhZm8LwwDTqM5aBTJK3mB",
  "key24": "5cNmsRU8eQXRwZptkCFjGC7UX8gMqSQgKR5LpN38RN74sBSgan6fVpTh5WM1quMugLqBJG4W65xVhMvWzGBzhNoy",
  "key25": "3zpHfPLCoykL7iNEee11XrmcdoJntDT8pcmtMQC95s1kYxpXp6Pffhitde9BP2Er546fbhbyA7jTNJWxyzi8TJyP",
  "key26": "5pEgcGRPUN8SVkSy3VDXfTBatLLxaErPtwEXBvXEFFxxVNLos4Ue8tgBPokZDnfTBQanuqU43HPEvc5RE78GMjLw",
  "key27": "5TH7VcSNz5AhUab1uJYXD3SbfDeFmCNgkaxh1V67RaKbqB6nyGoGz6c9hZgT8uhPzmfWjrJ1d4JFeYLNVjyH46te",
  "key28": "3jEuoWoB8ayVhbmwN91xNSVx4JGGgUZupxT3Lgh7W6zRqRbcnQ9Mf77T5Kvxi7sjkFpCXCe6J6Kr3LgnHjyJcmNA",
  "key29": "2DhEEmMJAcBnrBeMjBwKwbSzyR1z5FVHG1oWvHdXXAdL76AQvu2eFhGMKea4FevA9fmbZTVzTFG4JdUWDw3NFGQp",
  "key30": "gRE44RTcjo5ts7pKy12xoA9USgf77xrABvm7sMrP6caVxXkPWmoUyjoVBP7aayNYL6zCRbjR26JXDrmFaYepkcc",
  "key31": "53TSUJMXoePs3wvt8BLFdBChxBAbho77iU1e1ixD5nJqjNYaajZXnsuDTYF3ZzsBavy76Zjn5RajQMaDnqTiAz88",
  "key32": "Pi62UwSkHbApKtRRRWspz3LzQjzyUzh6WqUS7EK94CxX8th7qg4yywa9ZFL6BaCH7EeFg9PLyvjEHbZsskJbdsf",
  "key33": "5qV8RFYY2rEdraZ9yopHc13xzRPbG52jKGh8kLAiZfGKckWaMtR5VBRd6hS2ghFDecJzbinUBn7MbSu1qdihwAfa",
  "key34": "4MhwydYw9kGThGFeBGrqPbSGM77yh2HVPkg4aMeSnTGgdQXcMh5wzS3JaTrn3ZdpTGLrNMtBZeC3iBoQnGijLgyf",
  "key35": "3t4C3s9YB8bi6NY5N3GBinV6AiV7fQpf6hqHNaxPDF2r62QMWiRsi7v1HCFYrMK73qrTmNtm2K54Jirm92bNtXWz",
  "key36": "5VkD2NGRQZHV9krfjVjttcXARVsu7RvEdApdngLNN9xfHEm3HXz9SJTrgmYgogUc1KJBMjwU5HXZnkE2SSYNqrj5",
  "key37": "5yPu1bRWFquwyddus7XZShTxBZtTvQxAfd2BK4qb5UMoMB5cLWDXLpzg4tt3LqZ7wBpkcZYXU4h3Yi8Uuo3gwy6N",
  "key38": "52ifConXFdmQzDy6jtZq5hPBXY7LfB2vvRnreKaqYiHg9BwNLp5NGWMPKsV7mN5BsVpKjrHyNxX4f4aoQxiQGqbE"
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
