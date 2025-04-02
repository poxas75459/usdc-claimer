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
    "3MdgEjkuEWeyYcG3xvLiisvH2uUTLCUsazsY1jFwPW3XWtZ5u9WSBYBENuUgGEY8eTM5MH7VV1W3dum6aHY7Pntu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XMgebZDvwGAtVCCQpZjtBRLxWcSpPWc6xEpNfDyWZkY86t5Ls1XzeYHLMbvi3nbTHTQ1qFzbYFjLubwoRkQNu7q",
  "key1": "4Eg1WgaF1P3ofb1EUq5PHYvEjLqrtQ1pt6C7YtZhxUcQZNdv5DAtqcCkPogXjk6DWc5Zg1XuV2vLny7Y3wRcohii",
  "key2": "2kjxF7d4MNgDJY7iNfunpCnKBvey5xBGKSgNPBtKfodk9NKXm5MT2NnexEg1HWz5Lmaqvo2ooQSqvaen6AyDP6Xn",
  "key3": "48LbEddwi9xmG5QMDoj2QLVQ1EEz82DD2BUkEZoKqhgdyUaespaqYUNMHs9ureETwPPky2Q5FDZ7MakYthDsxxdC",
  "key4": "6QR2v1sZPHXzC8EjLbbZoG158frqNfkMyov5q4omkg4Qyh3dTdMZ1Cb6xP5rXHRd4ESapxU3DVtdxCQKfwfD5bf",
  "key5": "4mKzu6PrW4DAzQRvTxZjcw97HjvLiPfwBCzacidA1pbyTxsMqvTyQyAM7qSVp4fgBLbmf7HTsGv2FQnwHhRohG1g",
  "key6": "xriZ36buzYi5Q5J4RQkxukQdeBJZSidhfkjS74bT15vLUMF8tPX66txD9xNMyMNj21vqfWpQ8JQuPdYeaNeKjD5",
  "key7": "eA2ag6sQJ6Q34Bg3V38XssmZrWKzBTM6CMnDWrp6p3dLPWrpJR2A9zA1MB3irdbqpZsHkdndhmvoX9SXmgbMXsn",
  "key8": "Z7oD1p9eMZsZ7XRAao2Kgz9rT1uAXfV8g5aS8T9qv1QfFHP2PLaL3nzE2nTNELRFViJhMrFKy7D4KytsFVTKuSz",
  "key9": "2ELjjeMvkskLXhaJMXKvoEbQ5WB8tV8hDcxvupj9UV5fiikMEAaF5PXK11QDFg4jGGRpvjhbaYzuFCpjMrTrBmq",
  "key10": "5Xvem4BEFZ2BKM89DVPYXL5J4aJTq8bQv6MC9KSRjeZ5q6VCFQVuYkLgN2ZH9Tdvwu763dRjTjSHkbcEBh8ngWr5",
  "key11": "2Fq41bDtD7j5Zc2p4AuJSLZ28my4cMJj8S2JD4hN8yr4FP5569n13fHmxjmdhKSShYVewocmmNjnLskHKeDG11Ky",
  "key12": "3zx8ieQd5fZ76SCM2EKecxaBCCP3mWpWbMSoibMbEmFAn8Z6jWF3eun1KSijPMp3J2AmixkrzfYLa2uCnzNJbsoi",
  "key13": "3hPYmiZ5CZPEeun45oR3i16eF9wne3gEigpFtVYc3PwG2rbWfZu9QutuuVCezR7R2U8NNXHUMHfzsnoVtVdW8UGg",
  "key14": "4RnMoFRnBMKsZ9byxnmjPMbSzC5EXK9wd2r6WKvsZHoQpAayU2k4nNVJv1UREr4DrnRaXvWEDcFgifQa2i4xr5Pa",
  "key15": "3YnuB8ENpajVR2MWzVZumbr1PE2zRr2a3jmAhYvVeVFQC1SiLvbgWPAbyzQZgn68xgMzfDGD5KWZEw742bvP9J6t",
  "key16": "4GN9sugw1aMSH7KKVo7ubQUXeKh4iMegYpmeNnkf3mz5Xjdd3RKtQ8kKzW6Dhw14YU4c5guk4mY7QKJeNccEsYNK",
  "key17": "2kJtkvNvSVj1qJnutT82eRQ6snksQXGsc2k83UpHiH6voDUuCfd1wZNexvPJ9s5Xc95BHrGF5FtWMFDce6Ug1Kzt",
  "key18": "V732CJ9fnfjMGWybG31hYMTDgiyadNaZxSw5boWd4ZyxJB8Mojwxy7W4Bm4Uf4GcqHiLHRArqz3oySuiqiuayXs",
  "key19": "4DBGEvHzq3Equ3durD5Lexxee8iqXg25MpAEHmzites8zc615scMUAFvFiHozaxXAyajcRo982cZzSzWAda8Ze5A",
  "key20": "4wSD11UMUsJ8LX7TZyvCTW6Yv22z9RGrEyuZMkF17FiXB9TrA6jZPp5RHmQAbFibsgn59VvZqn4bU2bEBGn2pmgg",
  "key21": "55YKHAtL2FaxaJCSyrwJTEw7rmsS8EVbt4q1wFaj41u6PdcGtx9veyxmRteGipRfvWp7DEPVq5hB5SPiEU8Uh3i9",
  "key22": "5t1zaaiSBx2C8nBzQy79TdkKYa7LiwewogYt5yLR4eC3Q1MKr44pws1WC8z2WeX5sarJeNiZAqD92xSSYCzrdpDV",
  "key23": "2fbKjFeM36MQ6ZmhzYyTmV8fDyvUxypMqoTP5L1XHKWb1wzVmRMyVLPHVF2CB4LGRTdZEW8JUg2ttKbjCSTWYLZe",
  "key24": "yaArog3QVy2drzVATo5ddizMjuS1i7TeUicrSk6F7D5guNXr4zagC5R2xEFttjaMLPDbsqWzyFM622vF3xhpMQf",
  "key25": "S8FSfDX8jD2uiAbYmtFbSYw2uRiPGzZqNYMbJeJ7i47TFtwinRMbm6MPdVromcFbmxML3xtqoEk6LdaqcLByFvc",
  "key26": "5RvQB2RN88XTcjXM335TvtFo7CJ5Z56X1ak9u3myYRnxATwkJNfDyr7V982xroXzGbdTprZAuq1uSv7Z1L7pZYVH",
  "key27": "343YpkPLjYkouM4Zfn9LcVAZVQtu3DSwxaTSdBSM1WaKNpBXKtCoLePjdUzJGyMBWGb3E7b5jno7AHzK8cx1smRZ",
  "key28": "4t749QGfcv5h6hAy8FBVUfjVGegYRdJABVoEDQhTGyXUfeA5codQMDrEUVXQciCFADo8u35F5jnS7mCkvGKmNpfa",
  "key29": "Fj7yPvb58rK51UjjBPUWgwhVh4YNg5hzPnBebd9ZdXpxcZzws9CtNEPfjKvigTKmGit1S2EFCuikveQWM8BRwdt",
  "key30": "4WR5nePbHLMaDKwagvZTS48wdmBbbFtLDsCyuESv4YPT91dJW24t1mKzSSntUkcsVCC4nsem9QAtG2Sjg3M1KKND",
  "key31": "4z1mcvAyGSu8NwFtZkrVHBxxttuP397iHmipaGEq5sLi68dmnPLn91wGvmn9o3dgNxC4NeM4y9rAWiGjNJA7gTYr",
  "key32": "2MtKN1JXxssDRurYFfmsq5ak3LaU3R9P9WstgqFwbLq7Xr7nLQTCfzTYFJ5bBvzemBj7NCjjK9r4cmpcxnFGXzvL",
  "key33": "g88t8ACP2ysw6ZK3AhCCQaS6JRt7mGUAHDY9PP9UfreqEizYJkLfRqf61qTJaiEsATkmBy3ofAjtemsytZkPmZu",
  "key34": "4W9UNe6y3eTYz7yftdzBCbbfJBX3Ga93dQDy4Wq9vx4Yb3YKLyDYVaJc8hK5sqAYYDnDSnhyyq75fuXNHLdzmKJc",
  "key35": "3wZQ8yERX3Vh8iUQW2ffTqzbxM1anYLZkCrhoLCMAMrrAX8z6LPkd12C5WavhSPMDL9SUztrj2Xa12Nme51LrvPN",
  "key36": "64MA11zRXjGueKuGjdH23p4TSwUQaFsJtchkEzX4mimhkWC7fuPWrTyCp5MDXkL33hBVFnq5crf29LFxpSGbBUWd",
  "key37": "5uLEYshcXM1N1VUJ2FZ6NELhUZr7ZMVfrGL9hHUWBd7GYmqTsqn7D5yA8f9CNmFeNoSyJJM7V6AJymw6NueWRNML",
  "key38": "2fykKEwBi1RdfYHqjfUDSBvKuKwGsmMCAkP4MapdLz3b16H8bazsWnPhaKEJVwxiVADeUieodM3RDGg9XUf3utpv",
  "key39": "3iy33TKbvCjFvKGANJWLXCjPci9rsngGEhXNS7qKDWtmwu72U3Pf5sqNWucmU7asy3Wdmgtir1jrVssP1GS7hWRm",
  "key40": "5BN6NPSQWb4TxSdsAkWZfEcLckZFRsWqEkDq3F4V643kQU1yQFd5FNdPGzmiAvnsCU1gEhi6CzCT283AmhMdsw3",
  "key41": "2V9g7ZcQbNPX1PnsbPL7fSZp4vLwcVxp1CNi1XkD4exmWrJmuGGpuoWYNXD4JHUF71CTgiCgoe2zrFwxpB8WvNdn",
  "key42": "5bvD6nLBooEEByzxHaopRYVTkJ4bFRFy2nwD2aj8ZKUc486DUFcHQjwSNxuB8KTKZf6NP4sVJ6fAQv2Jg9EEcJUK"
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
