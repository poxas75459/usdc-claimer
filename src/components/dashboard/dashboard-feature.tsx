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
    "2pUpKTku1mUT6yPmVorkQwPEVNSrRF9EKmbqDu4RDup2aPc8Q6EKXTjzwvrKYtsxuE6wqGo3Peofa4QzpsajeqiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZxCr6ASxykR18ezBtqhW9LHXJjUHqpafky2HNL82Dh1QwvMS4Suuqvg28noBw2c2Pb3CArZcrcCSswxbZiqFuW",
  "key1": "58V28bdgfERUy39te1cxc1VxYPKqN5f35wuW9Uzddr8XPH8BwsX9Vke3p631coTU2SwsDG5hzAqgizb4Yd5Lxaqm",
  "key2": "pqrkdKAZLm3AkQ9gSZmuvCZXj5Xe3EG8x3Pfn7jiWVhsHxtkWwz1312ZMwwkoCbrKVR4TYrx61HiEZZrg3RRj5c",
  "key3": "4iKn8knorUiHnQmfN4ws8txcvertgygwsRZCWCC7jKoWwMyWgif6mDZ98za67C3PhED82wTQ8WPB8Zt6qxdSa6AB",
  "key4": "4qh6acXPDwQG9Zqrvc6F9gpeiyjU6qXZVHYfUzQ6eSzkufL9qB3kmx59Z6vwDHUYqGytVfoqR3n2N2nRRDH44DrY",
  "key5": "iipgQmaRyzm49Uswro6wFsdv779sSsCWYmPNF4kmayWytnhHFd6Ffi978q8gPD1zfUtNTsvdvAN3kkTJF5cXfbK",
  "key6": "5MKRGddSF1pR7gYvSzfVphBbPoG2pbH4DZHw7Xkkc3yDxfjyqHSeM8RhrZHNSNGLuJhC9cgZ5msA5x1zCq16A2rB",
  "key7": "4dj7kkcV9o2GvmJ4Q6QSX2rZRw47fa4vknfov49tN4J9vwJSKwR624pvjDEsZCRt6ZYftDAvUSbk71sgdzfA86eH",
  "key8": "4S4GwFmxCcxwMYmEpQraPegJUfoCttayMWLidxk2Kdetj78opRQrATwALQSGvLpibTHzzRPXAjNvp2YhEahXL1Wg",
  "key9": "5qtWEGroSqjTR1xp4Q654gpJf2ncDqv2UCxqBuxZqfF7WjzJbVmtvkGCHBz823hBrd6EEw8LtQboZQ6kx68ExPZq",
  "key10": "66j9e9DpPbq46QoCUad9iTFE1keViK2YWQfXz1i1g4Mfb1gvkFU2Jn12QRKRH56FdT9f2aqrz2zZhxFgFojtnnsd",
  "key11": "4VCE6XdW5eV3K6eqwMTJGy3CeS9631kqk1DBLLYyeZB1h9h7Cuynb9fQ2jAgfTF3DXxRpWxM4Yz1XH1LC1Z7r192",
  "key12": "1SYXxLy6Rws9qcpKbgKQQHU7jAsaeyiporVJ83jg914BwFqgXwzowg7EuMT6bfWzJVaDEoj85mL9Ei9yrX8LyHn",
  "key13": "2G5Kv7v67x278dqDZvpF5NdfVgJxvtoxwsMqoEwoFL8RLUyjXTq1XXAB1ZAyKLSJheazgPA7yQLL4k4MnwQSZm15",
  "key14": "3VYhoWQ47ewU3vtqkAe3tA2vQ37BcvvxTebpzKii64eHqma3D8PGMwrm9XaGxkRe6JWDYioV7ZX1qDpoZERVvkK6",
  "key15": "5agQJpqcAEbWk7L5H6rXAgdzTRXtaBLMftksyBG3JcHqahLFEUSMQzi5oMb21X87DSh6t4aSqfTcnHpeppWNvXFh",
  "key16": "2uHzYyPE5J3Aw2MzKnTWH7ywE4sLNGrPisuwxRMKt3Hu3UQWadh7xx1dwHSmdULPe86oo5dba8dNhxdWgfydBHJC",
  "key17": "vHwdpb58nKfTVG3Atf2zoDvJDJzmDLSGfL9FHq6XFPMh9Eg1NbwyeBWjkHZwqHEgpiJSMgrGwHWyWRCLvM6rGco",
  "key18": "h76xxfH64yegWSGrKkDebXN8jeChkxKDeMXDz8Q39JXjCyyCPr95bfiZuuvjjUpL8cQKeM9xFsF1bNEJA8VA9uB",
  "key19": "4Ga2DmwemKSQWyXdWbdgE7cXfyTMyrkYRUcJQC3JygmpopR68twcpLdzTysHikhWo25874MCUJWK2J92uUmc2pgT",
  "key20": "2e2g2CWmwi7rrdJgDHM2iwdjNq73KpwoUzrzZot1pu4JLntMKfbEKm3HEkpCzsXS6tbUfZETfTYx4Ct3eYzndRXW",
  "key21": "U3ENaXwUPSTWG1TCPDxoy9AojNYMZjV9KGB5KbMdcUR1XhLwie9oEQJWd5BSJz9rsZuZshpWD7MtBPAkDa7QMMo",
  "key22": "31t2pkHAPpwvZLAz5x7eKnPx1RWjAtN7ji5nsDn6vgcuj1s5AonVGHCW7ZgUYArMhKivPLhzodwDZuAzAqQ42hkE",
  "key23": "5iWtKH95w5WNwdmRN1amQQe7Fb4GvnG3fW98dWFzoa5HY9jNQhDCSczqRr51obcdQoeZyhPvcSw3R7cW86JWf12N",
  "key24": "59h1bZXmZDCSB3JAYiJsACJmGY9YwgBqBZsYPKqFxrAM9Bc5UYePV19ii5UCMY1uRmsdJjvkCs2KmL2MBs6ZqgZT",
  "key25": "aLZqvss1SeA1VKjQ7vbrDfigYSuJueescqjmk3MTSy3WsraxgkG4ENTvfjPe6sM6uheAvZrfSEfP9j81mR3u8tx",
  "key26": "qxvhKUqV4x8Hy3yds6wCr3NJxPuHuq7EgUs15rnLDatyrcKnYcaTUwA45BodUgWHfZV7XUKiERscKM6RtX4cNGz",
  "key27": "NXbccHorNnUnh3i1cdYcCYLzQ38yGbWEqosS9iMUgErE7oHrvvC21KG7bRrd1ACQDRh78SXaY9pP6xSEpDXjJ8i",
  "key28": "3LuzodqriCJVeP3WPjzjbHrAEgCXDZJm7CuWMJvx2YAog15HksbpGpRn557zbKKw4fVaatjVG144juQEeVS3sGxz",
  "key29": "3j1zBgQ5MJUR4jBRQq3krqEycFWiDpHjPdfj1Mj8LbcFxyrCxZDfngiHudcZL5hiG33UoZgiz9dVfhpdCwy3fn3V",
  "key30": "3U2MTqoyszcFPicbJaYErfCjpzka1pTs9wYECYwpKJCP3xVPoiFpFcgJBpjRHMJyzENFaF6HgX1U89XeuP9eFSZS",
  "key31": "dd6MUgoZMp4Vvx8JC4SRPm2E9rfHhXAzvEeh7hrj7JHQJQaHSYsqq3BBKgPMM9ShaNVeR4A75mMoJSSGFgrjgkC",
  "key32": "3oQBwztfHm8i61Jaw9Py7B5WVKwkH7BppXofBFtxAbLDKE15ChLmhkf49Gmkh4QCkmM9aaaUnKT5XdMAQRZ9aE6C",
  "key33": "2Ck7f2XEPJLjpkAYySVaDTBeHdStZpQSkhSDSNy7UT6QgAhP2ucwYFPyGzwStrtSzd3JyJpqXU8vrrvwkA5if5Qf",
  "key34": "z4cpR4hUJLTNct6bJ6z1P13FDQAL98qA7tqah4RoQ3EQ7uTovezAPyePvV3V33CUEuMnxcySKcYKGQFXuV9T7Kp",
  "key35": "W7YpjCw6LKE2STFC6gJ8dEUbXPqVNHLsbCXxtirgYYwFJaNbZwFDArGJBzspeiuoFpwEZ59YFNs2KZ2Tyfq1XYr",
  "key36": "4pYNZEyaAvAKskcp7z28WdQY9vYzJNwLcSXBeodzCAC6WGQcXGJRJMyAGaqtiEmwqX8cRy5kUvCutRf522boPmpc"
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
