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
    "4ubHF1LzeKKchPLmbhyRFdyneYoHbXGw5JPrkHShchbYDprvBAmZCGenMFVHSk48aytt86zoGXNZo7RV9e9HsMN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kE2E18CP3akoi9ki7tLa9aVBYbGWD7USHfSqMob6N64L43V5AevitsPSvCrt6uAZGqPPVFb2yXabB5q76kevh5v",
  "key1": "4YR1SV7P2BMARwNWLSKAGJ3XFDBaUmBgdkXptJnkRMrJ9gcfxDpXhsDkGZCXPiinzi2eiBgXQ5V47Lg4CkLLuvLz",
  "key2": "2DoTtMQ4amowercDxo13ZhLHM3UF1kLm4aYdwCv9VsyCdfiwFDEnZaEpfmTjqqxUvLeAgTJpF71X6fXrMR3zkFsx",
  "key3": "Ap1oTDJmPvB9nmQh3c97A1TjyiQ5fEAYuXvLiteMaQbE9gaLhTaPLgWn57QcFzYxqf59uh26JwBdyXqRz97TpCz",
  "key4": "4tojgsx4hDPhDGsKqthjc78tkQJEsUnYko6skWtA75TDTMYnCcEruvx2t48g2sbepS1XXH4RQhY5hg5GjGT5xkSt",
  "key5": "4XYmQXZhseQGksoy1W8b1WBxxjQc8R4j3Xy5XdXrY13rCJdE7tw2CZjnLoL7SCpPjoC4ibrFYEyzWS1rCpXSL9oe",
  "key6": "5Axbwfr1Q7kveMnC6yzEE3hG6UkR2F29dYhZyYcLGLT1YrM67AYuAKjmH1jnJ5Ps39zEVqer7R9M6mfs3BjpRGoo",
  "key7": "Ri8DsUhG8PndvXgj13CEVxJqUE2Vc3RCCpGxhinnaQdaGFHnaRz3NoibogSqLwjED6F3ReRnpq2BFFTfDM1H7Ao",
  "key8": "4USUQ232Eb8inQYGvEbmSGviX3f3wBojTh4obfkVjx2rSMQV54fw8z1FxzpWrtEiaCxa1rknr6YjbFuN1S8x3Bwe",
  "key9": "KgYTmke7FwEqxdewm3RVbn9f1QQmisN5drocbFwutELf8AQAs9JdTYSAKHzGabm2M3G1qSCb5xwBn2MeW5XFDR6",
  "key10": "zjzLgz7jTStbT7XVwm5CfhbM59xVdJZSBGwprave4Kpa3k2QqXFMBgyv1UZqwUQPSFcDxEzGmJgnTy25kpRTakr",
  "key11": "4YFGND9jRWq1vgLi8TVCF2dymuFGqC9Vbv4GnF6E5gcbheXCVpyPyqELJ6hqSMb8CZSEVP7Zyso7DBikVDFn7Vzq",
  "key12": "2tf6Aj5RkSw4LJvseWheVi5UXHNZSmnyZ47X9Tdg9PGkgn3mpb96upzkkZXVnXZZGiK8vGyqtsXda7j5YKQfjgKR",
  "key13": "urpG4jWqtbaDMpEPZqCusW9nHzYrAN4d49y5VXUhgnRS5FLU6vP6pnh2QWReZvb7WZEvuoPoXe78Yr2VYTf96o4",
  "key14": "3BepkUh4EPuRw9oTPh93AA9p8eZASL71Uuh6LMygF6Str21yKWS2R6yih7iNAPoATJeudcvavz3AhZtY5p7bsQvW",
  "key15": "2ywXDZ9Ag8FpJuPzA1Nboqi49zAQ7MU2nxBRUn7j4p96DqM8p4sUo2DaqGYueX3ANGW7BtTVcCGjgFfwBmbzYkza",
  "key16": "5L2pUCgYpvwmQ3V8DpsvT9hWGzNagVehywzyQqTxKntmYk7fXJ9JcSySHiymkgWhE7M9Rpaj2BWZGmibwx5PrGNt",
  "key17": "3VEvrUusGtUo8aoVw3FPnNBdiSVwvUJiXBCETcxa5dPMDm1BfQrsTBZam61HipsPM58gogyeRbvp4Bggq3qWD26E",
  "key18": "5YABvzaScxRJmsa7W4J5a7PfawjSBEdD7Y5WzChmjwMM3naizDKRknXho5u8tZZA9iZGdd72zJu7seufg64Xmecb",
  "key19": "3i7TCjK4CyMJXGEFxqwEvfZxRsDi2qqKgQgXraKznqXrfAqerSDzihDhgkivpRLkTyD2S1ba8CYPeKbrvtYvVeKG",
  "key20": "SbGicfd1buUdcLbHgRHoQbeY2NBrddzoGBdpQ3vEjpcjzoD7RRdbrKZDCK7eSAZZFQsdF7VisVbSMKJr3tQWtDm",
  "key21": "2zLaubZkeUViEiwWF7zDvyKZcDGhWiB3uFAfzhGWHjrfq2qKE5UwRNgzgyQeqUdFhVhpQyFFYcmSZsi8qUHi1a6v",
  "key22": "4bW2bNHA3NNscf83eAbQqXB5pBJBDVnyLJsQpsnQS7B3yp2vry7y5YTV9NrvwgNqeCnCENYn1Xa9W2T4g5gtUzTx",
  "key23": "53c5DCtpPCuKRuuRL6KoYnax38rRdAz7gVZ76HAN4UfivfQFXM9winszhzmkiDtqboubUjqpjTKf8DNK1X4WAToh",
  "key24": "2RuMQt8H6aBoMystbHd5FMpUYwbGPxyki2ncMZdBJzcDuhELdD5ezsemsq6doKMGh81WSp64Em15zEuMBLyfgATd",
  "key25": "4Y75o1WyVB7zzsnpfyg7p9nwmqFHqz2Rir3ooNfPLhHUoaYSZj848zPzAzYbUrVTbX49zR85uD7cWPLWm93dtTKM",
  "key26": "3WwKzc9VyGURZmQbadVgGsVaL9WJUTb82TLpVh77hDZVnV53NKJoLcMqQAfvibGMszrJpKsvwNCR15gqUNd7aw6G",
  "key27": "43rHh4pEWnEYYxMHJWXfYozMAp6GeqG5LMBEzfqJBHZZfCHLuSwRqqdeYvTBCorcgD2e8ub5ktkmnuHVGyP66Zd1",
  "key28": "U3vfh9BbWtivepnwwjxefw2HHwB2bQGfDnyAdmt9w7o6huaHvoM4ahBFE7Yu1pRkqRqnNTqo6Lafpd4TCJWi1nb"
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
