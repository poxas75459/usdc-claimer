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
    "4bjPoVYs7ACKVWgJkeBG9ZBe6xDXTzaGNhXsg8EVdUevmAWW4zb3DjAZjkXs3TABxSHPHptCMkGEwpx7UwBxwmoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KsrfqDdCV4TPSon91s24p6YpJSYKVZBGLCgbdUzyGrr3jNpoYC68Du6ucjrNZNcKm2uNx2SjqPPqrP19TZWJpib",
  "key1": "4SYuGimpjoQYw2VXbpGZM6BniTaXL9Vnn3QViUCVHm7fF3MyxQFohTGih3xudcQ5FCHA6ActfFKEd9zqijjg8F6n",
  "key2": "5EkwACvvtujxccbw1GCuvN1tDj4KMGsotRshwTsTpGRnX33D7BDSPcuNVNWEspzU9yzJKiHW1nt9255J5jjFTd2d",
  "key3": "2Z6DpSdNKH5pCs8men9fAfHRfohKRVwmPK96rQvKSRSFdLC2Ytqj8xY32f82yrqPCQHAst4gtP27Dtvy5aSCJQex",
  "key4": "3srNpM7DunBHR5FKS5fMyJEyqeStjfwuWjV7g4cWJJ5vmzXJbudaSSWZxRnXvbspQfoRv3Nx2ydWdzkQmqcsGTTF",
  "key5": "3CNc13gjwdgE2P5ehfzU1FUKvgUMGBacUStrrq98jQieBWmJDaGAH7GfbQKPCJfVtqYruCfbfPV2pWrbUL1V6YeU",
  "key6": "4WsthqGHGs9gMbTzgLYJ8AfSMuhtf1XdKcV1iXQ4JDmn24F9CC13cux45KzBfVdvdkiutn75ZBg4zpYLpMQJQtvj",
  "key7": "4mZFuE99YmBnNGtPVDfhWMMF4kT4AqGq6jtvrRC9WR8FFtWmAWRQq7mQ3hFiPzi4EJQ7iYBkoq9TvkgXmUpGfGgX",
  "key8": "4K3DoFidmmczhLDHC6Bc2tjWfjCw2AbFEmXpjHqgZfQYCLUJ5bJVkMUNHjNUuKYhrUKmbmmemjC5aVab4tbno4kP",
  "key9": "5vEKAT5vh8TmquxMuxV6GK5kpvLqbuf4pAcMAU79FyFdbLNhea98ntCwf9DLhBhfLBzmgRTJtEppnCyrEcYXhjcd",
  "key10": "5TT3v1hGuC3V8JAbodRSrcpCErKNT4p25bdRKU9caeiEaPHEoVdim1ehjBs161ub4X8G1jJxhCJ6Dr87xbQzXxbp",
  "key11": "3xaEYvnkTZu8cw54Z4syLNB8mncCRgQrgzCHSLc1Tf3NAuoJGoKNSM7sFV312f6oAwLcghwrAPz7d6Styj1995Vb",
  "key12": "5JcahU3vqigCGd1KF6rXuKF5Lvb82gs1mGQtbscQKaB7oa1zYXUcGkF5AUpxDyDnXU7QxEoEm4vVQyXmPiLCzJyp",
  "key13": "3LhtRck2tG7D8QosjxSuzmo1rjoK9zvC9qTPdfmVZZeFCazkT3kLyBCL8yDeKJ8fxwvzbY85vWU8RLUz9Y6BiHvb",
  "key14": "X2QHWbTYbFCFanG5rJifiVVHv3ptsyQpf5DkjUkX13XQtC6UPMFzwtbx5WX6dFVQSArViYhfpDKrfFo7Cqg2dXf",
  "key15": "2EuDFboQc8E6D57gJFArWwwEQHQKes9nBostrF76RxHGrYhofyaPv3CNT1D9Vtt4sE8TYAKyjnmm9HomBzeyjEhb",
  "key16": "3CDbxF3S9AeoMmzeejaYjmmevvoLLjHSsYZsUfWpoRiDhMXvevbNA3JpbfXapxc4ZoUQKykNFTLxKbFFbXSWqXgk",
  "key17": "8DfympPTWYLcWkAE6ESsJyVroWSxD8Gp9GXLA6LLmxPQ8Hh3hZwqGRpNyWDD1R4989WNmkj9riQsbpXifZ7CYaN",
  "key18": "51QzXjRTtsfAxDqrFgUZhxCmgdvmP8eQbqfhuRWrm2gjnMCJmAvn1d6fpPVApuW1gKz1cQDXx36xHygv6Z59ThfG",
  "key19": "4qzKfNyY9n8f2MeiyKG98kZtWygVKnEUzJdsBFoWESesoqUxPxzYSg7o9pN5BdizowrKYPzZttLiw1bqtZkNpSgT",
  "key20": "2iK1nLVDrkhmDFWjhatF6sHJ5xu3DqHLQLsr6BkoqP3dpqs8HhKjXWcLaTE4cCZ83GkpbnBT5eSJ3ELFnRSLtBwJ",
  "key21": "55GWLiFMZxYXNQ47QYWPfeZ5E6XoCbNVvHRyHkoXUsFHWBGhzg4gatTJ1sfzpDN7GYEA7WZxPrJoautHaBGFbztV",
  "key22": "2oruTXVC9Nk9n3CiiTs9ZWuKGVMrTpc9yc9zfkG38jeEmTa5LX4mWWaSYSSv6RzPxCE1LS4pwCDpJPvLTQNYwm3u",
  "key23": "3kJkgi9hKb4gbx8qAkuPcBCGtH3mhhH13QzijfsAz4o8ZRi8HfTWp34GQjDtwxXzuMShMokpFeSkFfEDh6S4Aitg",
  "key24": "4k2KbcqQpiJCXVEKWfXhVsNWihjMZoHgc6b9k43g2s6VyWUURcbiU6b2rnm2NvppwbLDx8AYHXRR3oQdMBV49VcH",
  "key25": "4Q2UEDhA9tQWXwxFPhiFtJgv6CMbmXTs2UkXtS5t8psRT2gev2WheXSAxoZQuAWMNCLnja3m6otKe8Vut47y9WdJ",
  "key26": "272H4EcFVGNw3mCgcEtdfxkn2qpyeiuvBPDWtC8nT2TySteiL8b5sS8YYL2rQTNwCcW6agm7TvQzSr24yXkkB312",
  "key27": "44F5oowrehn4ANhJYnTQpz9CZBswTBTWQDB7D7hqYLkpribMLwqKXPuQk4BH7cpGKdUrX4zrM4UFV9fpeV2JFWrU",
  "key28": "4wXPbTZ4ztZUvsLi17Nzme5aGAAaG5VEagsWNs59rkYZ6N6VySkaGnEGbDp7pNqLFcZtRBM75PJsSP58RRYomoeq",
  "key29": "KrUc1XHfsBtpHgRsgTLQFUNCTC34s3qZ32HfPyTH5qstxi6v9zHhCmKgkmKhU4hXKhV4oky5P1rTDUu1jH2cG1P",
  "key30": "2cVZNZCbUSyB6pkeBB3pkyLu3dj1x1mUCECD7tyjzsxfVbcXpdPHJiPgVEzxF7REsQK3DBfrXS2gxKfNSUJDg7e5",
  "key31": "44a2DgSqnK4vx1QQZNzycog12QUmtVtjNNSDzuvZeiAqxJDx2GVPcFRm26K9V4SaGgoSQoGiHxVJ4wUT4V72jMhz",
  "key32": "5tTKvWnW4xJZWLvpaxKj1Yj67JRrfkAFn5pXkrMYpw53Wr9gM5hqnxVSyZJMG91oG8HTdFgpw56UnMp3Y2o3s1HC",
  "key33": "2tdbGV8itS6wyqtBRPEJV5adUp63Kx229dEke7K1aKsdQtfXeh74ZiNZBQ1oH1Tg6EJ574ciaCvpfPY9XS53sEHA",
  "key34": "2STTkTG6wLuajAremt83uhQpDirzK3ta71JEt6hH6CkJk9j69fF9aNa7sD2scMFDyd2w5qGhM7a3yhimSKLxWf3G",
  "key35": "2ieNy9odWiBvqpJ16oPHf4jyjoZ3TT3uPKnzcwWCEV1Wmkxe8D34AN3EJAxapRXsCRHECrkHqH1kPWh6B6cqCNkj",
  "key36": "2jzCHUw7d7zx51Cipe9ABgHvVNYR9DmJKnDEDtft77sovjTAf1mrgxTjgxu4DTjXAHArg7NfyffYu7Yb6YvkRYeV",
  "key37": "5BWZv73GTN3UaW4x27j66jGFe1Rvx19vkQE7ciNd3AEwXAR1v5KLJ7VnEp57qMbPbLXbQRjE1gjgrNdYRnCEnQe9",
  "key38": "jJvmPkb1TGtohwUcYRtC7TKmqFDoFajWPgw7G81RKmVMYN6pxFLycXPAvU2joe4jUJCF4JUWDUA9AUwC2th79VR",
  "key39": "5qnEADD48TckL8Hfn3VXkDWexH4uhcDhUTSk6ZN4zcyrFD3y5SMFDmW9NAFNrbH79iCTk1Sem5M8eXt3GHMZMYwj",
  "key40": "4TYz8ACDer1QEWEMQJLeS4iTtYProbNHd9zdokji7DrEt4izRXMuVm33E84H8h9qqCmBiWG3Eo3Bnav8TnRJYgxU",
  "key41": "3UKzu2YzZpzTM5cTes2ztNQgpnnbAFDcWCvZxPq4zqgoZJvC7X438GdDThZM36mm1pTpoZmbiZ6U5MvVxMpyf7je",
  "key42": "EWMd1vEhvP8tM8MnBfijRcdMmFSkKFWsojDNgDUs9dSsuMDhpiKDXBEdH2HHkx6LjazDgjBCCwkzmk7NjmZHGqP",
  "key43": "42h3SbiJeiK6kLSQwicbM5eSEzD8FV4ymquyLDacRuHLnqQyVXb3Fm7b1rk33o9ySTcC2V3AeFDUbMkXiJudATH8",
  "key44": "5m7AKaMhpmjDLN2VaTWgtzdjCMgZFryJSVU36Kbcf87v2s94u51Z6ocmFEx559bkd7Z3FF9r3Kj76pLDLaN1xBUC",
  "key45": "wR6KghkwWXtB7gDDxYBe3ojw1qh6iorx9RAkUr3aJDHZ3DZNepFga3QBJZzRhnVHs8b5Dnfcr13FkfKJ6ooD8m3",
  "key46": "5JHgRkxZrNW33WfKrrE4pTwq52K4zJ8MvSWLvKY6pffYM7UGpK82ueLA3eD3ZebNRk5zEpWParvzUKvqeace1tTk",
  "key47": "AFqsbsuxG4hntGbiNozjQjDX7aRcy961hnqvCYDXFQNR4s2aHn35vaMkr3EgaHMmLtbkM6rhJYGCw9Dibud3NcG",
  "key48": "AKkszdJrFCSa6Vsf61QmwDmcASfvqmRnEiXSJ51qdcizcUzdHEQYCxVeHr5Vz6nongUs4tuaGJ2jMhK4G8RUvpz",
  "key49": "3c6EUwK2h5EPDVpE9QnyudhbLnvn1wZSSEAChwgsK9EcfHH4Ur4FFzbzaYjiui7tDQUxcsQVsg2BTdwihE6Nf8wH"
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
