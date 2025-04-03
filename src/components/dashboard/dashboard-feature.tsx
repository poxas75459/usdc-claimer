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
    "4PtGNF9CrP5qzCTEJas9Ye2jYYAKhyb1Xw8mvnA5M5kH2Hdbcinw47jzKzpk7YtLvRkrZKukGq8HkeGtx5WoP2kN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qm8ZYDJbsbHE5wHooi1s6eZj5TY44JrTv83BMYv7Wn1F6Z51WoxMTGZGAR82YBknEm7FAAcupLEi3k1RsQRbRsD",
  "key1": "4TzXDBetWTbvME4EYHnM2pmVGNQNcGnxboJgaCHCpzSYd5Ydo2pHXzXWtWMoC2MYbGS6b9FsUBD98d9jA9BZHPyd",
  "key2": "57Wsm6JpjW2queEhzETWDVAJeWYmruJhLS48TpvB4Ppq2w4aiuF64F8S9TH45jZK6r1f9Jho55MSRKcgKXqoUzWA",
  "key3": "5qsTCs6mCBs3Q7MSEh56udWVpN8FTN9TJKdEdmRkBMaqx3EZRpBtobT5V1s3mkjc1aPxahVXJS1ifwbjyjieBdaa",
  "key4": "2VocnuX8xYVRoFzHgz988vaCnPN9jomyiofw3aPCG3Z9NN3cXmEr1jLhCjFQLTKXvdBYfvre7zUmq3zEFNApa8M7",
  "key5": "2z9ucZLMuPc6umadHzf7gjsGkboAHReDV9J4YZKEwEnzQNaRsz1pf2m4tGpXN1xJFi74SHHNE37w9EiEAZhgs2wG",
  "key6": "3FPufTdiY24jsgzbcBQS5CVmGCtASiui1Ndmgy4UcDq2B9BqDHzYnz7EFaRDSwMCtMobDdMoRpwEfXuN37u6ezLy",
  "key7": "3DreA3rTUVHEqviumVfoX3SgUfEtRUfW75FYgtqkYH2ej5CzVkPn9xzLgvwPyKbQwdVb8jjsWzsMJi1c2k9zvd34",
  "key8": "mbVfJL1kM1XkKxe7gCQJGF3DscizEvfG7TxwzHS6gGCdXmGeZAX4BXkUYLMAp5x3cMSUs6ywTegpGPRSHJzSmJb",
  "key9": "455CKP9myJEnnb2xH18jVorQDJur4iMRSfeLDD8qB75pUkHi2sZYCD2xPxZHUpYuFJPMo1gpYnRZowyMqjRDTncp",
  "key10": "xBUdrqJhmnrNAsywsc5EewC4EQFqBzJ8ofh2h9ziw1SQg72G28WFC6HqmTn7GZnPJc1k6zSfPvh9yeZ7fKif8Pa",
  "key11": "4B4tBgVoZXoGK4iGxzbytxZpFMZedVKju4cgeekBzP436UYzZVqMKLwR33V8iDWHx1CqtfexfCMaqUJRcfPw9wZX",
  "key12": "43TqtEF3FzGWQH4jKuSaz5i2yoHDYwxt6y3kmHgKNMCZzRHi6wvy2c9gxa7oWM2EDdJA3MVeHtMH7nuVPnZnFgEE",
  "key13": "efVWe6duoZWavbMqH6qmvuntWcE1T11bEtRZi96tzoBwFUyViGNMNJSMn9VJiUoJPmZ4tAwkkzKukeRHxiak6LK",
  "key14": "3tCcHecf6346Eat3GUnoPkF8njZsGXmMyHfm5vQHALoKQKgHGcygyoBoxndjDFsQAB7wVc6DnAyqo4tWfod6MEnh",
  "key15": "3V8Pm4vdZwxCWk5NB8MNR27biogLPA14Q9vxHQkk6gUW7NUtrSzvhiWEHQJYZMAEsuK84cfJH3628VnXe1tGktvh",
  "key16": "5zmYQ3bheEnRtNnaF3Xz6ATfMgUMcgfkh57SCgnVcPzJ9vHjsTykr7SfDySUCGSVagqL9tjLCPYRLYTydGxWiEQ",
  "key17": "4EeBbvvzFKxeJTedDFnXCUQYoYnBMxnVtLSJCXMLn28muDwhXB4vmoBtjqpfAxcG4iupCjmUjNsWTXBornZUFJsm",
  "key18": "2fDC6kL8vCvEf3qD3dy6V64egDnKL4ejwECyuEguVpd8WLfTJCGuZ7XsZNYDBfd1x3QnGfJtqbPJK2g74JmqndEB",
  "key19": "uBYeBVZqoh6Yt6sbkeX4wRjmCRqhyANeK9oJk8jG8TCsuDp67DcfMYkESmAWa5Qon6McL1vXDFaECMMwdih9NG6",
  "key20": "4gZdNV54z16YxL3sSWqa4MdvMYTypDrymb2o8uDYFcTAbcmBC6QT3t2vcCqa2jTjBt2xMtoTfwNUYAPQLLgGMujR",
  "key21": "4rpBbcztc434dbyS16rtu8E4yPtsvYepuXFZKJybX5wsfpstxJcNKHm7Ak9Uz4yhMkmLPxKBvrUEjK8V8PRy6iLG",
  "key22": "4acNsFKrVqdNA7vdAUuxRPveHKw9pxSFjiFJUQ66BXjf2qrHQizbc39tydoM2yxB91pz8LSCoGRBms5wRM9QiJ3R",
  "key23": "587HJNXwied2b2tX9gzfEUpr2jPL2K5bQ8ZDcwUB7zgHs4wKr31fhk8NTCiZddjhRWZAPrhABGgdwAUaNRqhzrh1",
  "key24": "35rajkQ2NDqiCMecEi3wgKMs3wdLwTCT76qckoh7o6xSZkjuT9Hn26XZB9YinE3YBUAkRUz9rj4CRfWYnLfpw2R6",
  "key25": "4jKtWhKFbUnkvRFkVy9LCrwh571x2JQ4cgJXkzVmbtqK6BVquodsJLHoUrRWNL9NbNpj9uwYxLZSBFzhDq9KCJBS",
  "key26": "2Mr2reqG1LU19Lv8DQwkvXhEWhJcSPnYjrtDRxbVdnKifmJG3cGXZee2ckF5EKmq4J3HEfWag4JNWciMDaW3ozeb",
  "key27": "5vm7GRiTCzxy7AVTwuirvZMVmQ1b7bLp8xKRoFhpp7fB3SJUKRmD7BYZnjdg56CJSoDPSFvxHh4a6nSVXoSxF7rf",
  "key28": "mF41PL5H91CWJLyfeG51hEwYmBMZmTMAE3oxPSK9SvNkDEow9vGJARjXCYT9vPLn45stdmpdnwwemsoSdgmnDn7",
  "key29": "2nm2NzsZUUbkcMrhCY1tFpihqnGXjaZej1odQtrQYqWSWv8UtCyrBYL1zyhNqpuGd57KsozGAuFxkBYiK8KbqzMW"
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
