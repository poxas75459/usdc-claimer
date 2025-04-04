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
    "4EsKdrnFQuDHgeKsuDB42yXTh4oNU4N3Ao3meXR9sT2F8tAbPXTHBNqGbECiMrhLFhqrw59T8hTwHSpaTomzNZAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqedH1x3dWoNi3vswCv6QvZz4jfJiiPN9jCvfRbnzpinkZq9tDP1xoVvYHAPrn13TXLSecMWGLWKzqQZF6fR1jR",
  "key1": "HXQnrRVZeQ3qbYeyFvkK1GX6LMHdow3f5gqngsXW9x4kKY5PyJndbv3xwWfsiZPXZGyESg2Vkoysx4zc2u6aZjZ",
  "key2": "3WiKJDKM6GMLgtVHpmE8nvQYQdjPwv9Mehz2RpHBdy5AmDRZQ3btvpdsQYkeXFs344Mc5aChdzV6TmBaXat1KH2r",
  "key3": "21bXGYrbbBX1Qdnov4uRx4EovohbSV5MWBZmvNrAUxcXE92J5b9MjEoPfAzph6KGsFjcabPbY3XXiX79amHfyymU",
  "key4": "ToJuDzEvafWHEDDAEL42Jx3EoMYkC6ci1aMuGbBwCEmuAYWzLZV5uxWPFEceM73zV5Fc6sMRw9ksf5uJGkdoENK",
  "key5": "3sWD351D8zDNkVBWsJSG2uY2eBuNvLSjKmZcCCEy3PEUsQVf3eJS39fyXm8gSRrgS1mEqrxazksdHL8rBB1FkgPW",
  "key6": "4CnpTWY1yfbvZnFBVCpy3vcaFz9QYERxV8Q7g1ScuycPdTwKupFjR6xdBjSKFucY79EQpfAbQybL24wFpRTSajPi",
  "key7": "3BK3e8wmQMdoHDxV9LrH6yMqTSt4M9ZuMsWxNj2Wx2JHCSUtPJaMgkH2KWT97EhSzUQ2uVEYGnt2MFfKT5wRjUxG",
  "key8": "5RcwFZdQbthN4Q9SvJRtZXPKaMVffLqfHjc2LvKi5qPx1oRzWyVaY3pi6icjB98UfBFsEoNX1iNubT6gx1XK3PtJ",
  "key9": "4GL2ei3JVDYXpWN1S3wzk9VA5LEigcPNPDNuX1gu2P42e5MHy1jj7D2wwoqX9i7N1CUjA14YY9FFvVjZMkWSZ2gu",
  "key10": "3NTCbJ1QYFhEeTvTjcnJupFnuVqwJopLVuYA4bnAEovsZsPbEfyBkLvHEUsipGchL7cCP3X2NksKjBQ8dy7KDjKE",
  "key11": "5QBuNJkyYfj7zNBk3pnFLTxtUsgtLAZjqsQDMknrrBXKVx6iL1obJo8rs79kpRytt6ADPD5FAjyt9GP8y5kPLkcZ",
  "key12": "56vccfJaKrE4R726fA6Hn3CwyNkD2AWPggFKgowEgwSEA7HA7TtAA5GFVisQnK2jUJyEwL4M1GWGZ7UwT4vKTdfe",
  "key13": "3nzRoVMvtCxzug73qMGqxsrSf3FQ59ieY153aZx3aynBRK2TsAGfJJwmiPZgtKszNjLCriCWg98Uc5dRJQTfBi7J",
  "key14": "3raLJgQpUzEjK1wVnsMni48dKH5BxhDk2zoAeATsbqMCFL5ujHdyneUD8qgeS1vbKRfzCPbHU3ncyYquCD2Rm8Xm",
  "key15": "5UesHfWyQRoodDPQ3YYbFnzLHyCaW8gnYc8mBdjN8FUezAkSXEAhcLmFUqa3yVth5ZCMZrD9GBdZSu2DDtcJogPc",
  "key16": "4yu8DigDusJQarhF9FfezbDD5mDMngWrL1RkL3GCHg4YkDLztPtR5bPHrsmghP9FHVw1PEDgwv9yThw7XftbCwRV",
  "key17": "4MfsqAjDwM7jYta1FRH5VuFFdBMRa2tFozS2ug3j5eWsHRsuNaNb9XrFSzQ81u2DeXXeTM6oV7R7wQ4iRsAvjbyP",
  "key18": "2K3oJecV9SVC52eUbXzXWmXzhWaHF9LSJLUG8wtNJBy6cRQW8YT6yee7krBS9Nx2ftYrEV785yiXKBWNja64oAy4",
  "key19": "3HMqHu75KAyceA7BiFUkqrMF9jyqqLoemaR8VqH1V7NJcR5JYPXZXsENg7pXYCKAZH9vLERch2BRdf1pDaK5djvT",
  "key20": "d9HqK5vz6q6zXQVE2bbxuBkubEMivrHekZ8kZZgaZnkSohc6Dr2QwWV8z9b7wdqhoa3MgxtcAjhR7rtzyryX5qL",
  "key21": "5HK7dcfYXpQbcHH7ovVMjgjywJwxs8gMeGTPnDjgpdGyLUWcbHKSNPeMYUtFvo2YubrXxRgp1YJ7dLmQ65RaJS8c",
  "key22": "4QQjtEVonvW1pQVjj5EzXGnHFefKTt3uyZnJQcei7QbZs2ywHWbLjgTBcdW6e7YPFPy7AyBfto2fUvbB8kM6Xc7",
  "key23": "2agEXDzkftwvmYM16VGzc8JEcRFZriYBFLvtmVL1iWuAFqPecKnmh9QGSwcD5qZAFB1LfREvezyXuJG274isZVkk",
  "key24": "5XbuWZb4giRosk7A9S1238x4ps3PpKvWcp4ocwpjJuvxde6pSJiKpSSwPaau6cJDy7eZXoQm8xwAMHuQKu9aaJZk",
  "key25": "2L5BhCEsPnVdqY1xAA27vJG36AaYFfxe5jJCUUNsfQyPeSyBdsAfxQSKm47vCDtFj8kAeuS2EjY3PvKs2ZUyTDTB",
  "key26": "JHrL586T26UBWW6ygSjMKNpdrMRG9PL6tDdMwUjfYhoxtBbbmak1XtLhFriGqAaAtzDYFXEr3iceDgCypRWVL2f",
  "key27": "51w6CC1yTr7gT2S3T3SbjXoqn7F1zXmVpGnQpVNvXogeJEM8ZkmbdSpqNUpoZQBeCVAVwVQ7gHeH92sbBPkpZ3h2",
  "key28": "28H6uHZbzyfVTabhxn3wB1zNWLNEQAQZy1m9jRP13mnpsD2LTsGaYrvZ7Gf29UDwr2R8eHb37xK7yZKTzJKCgbRo",
  "key29": "3kuj6XSr9HGr5PhJgUdpskDQHZEjJba2s9j8itLmMi2dHgSQT6YGC67XDagmDzdh8uQ2VwewzJrFuTom7yR5vN1G",
  "key30": "5oL6bzbUFNConi4AcfMoe8EBuUiUfYY2mHRyRLLFAFgxdSJtooLYR3jYrKM8PbcvsBNoy1DMFHy1spkCCXMFhtzC",
  "key31": "4BrgS7NiN6iSxHeW5T8i2oRaxg7Si2fZ6m4w1eKRQX96b44RGPyzPf4QNMeqhp5q56tFXjP9shGiFZ4Du5nSiRjA",
  "key32": "i7oVM4AtxTgctjKdhLN6JeR5hpfbWephQ4rAJDZ6Gvv1LgYbNHyZj9frGRkAkrTo4SKoSoJVvtDu82zg3xYtaxE",
  "key33": "GSgnqUnESNukxBUTaQUH82XP3ojV9YjzWFFVi5EdwmcWeyzKqtqqS8MJdGiMiHUUHxENQ5NuSwcbyRJfErCzZ2U",
  "key34": "AEqB5RzBq6CCfuY1RtMa3Xgj77qKhnhNkmLW1fD3HXz9ReemnQiVDfLgnHqq4HCqTAvfutcqjgRFA4tEWx7ZzHn",
  "key35": "3wTQmtrjoemCU2StJCtWPHEGUKQMNTX3nVC5EsA5mLENVJKUFhV4Z5ZHc7rtxaRSJcphVyxvdT9CqV7HPtFtpoQF",
  "key36": "66z95oL12zLzj22D69g7EiJVNq4UwJstM1Csm2499qjqaxVMvTkeurcmADtQwNARrsGy6D7xSYLhbDKK12FWjQbz",
  "key37": "DcLhmQ3n5cW86rhXGpg4C5VRAXpXqkYpvGcQQhasLgoA4v4sTE2DaQpchPSVkpPDXDyRjkZF6oxV5pfaGyrGTnq",
  "key38": "2otZixU6MMWg7wywsmXeegPVcwu9WHGRJYJzQbYXjhPo8vSus6gqsJ4DGuWx6KW7pS3ofoVmzBNSKajKiJygHmwD",
  "key39": "23DSEbyLVJVZnwf6HCSA3vwfrkERAavGexkJ6Xo2esTq1bP9fFaR3Cs6wMMTeMkz7aPnhmirorYJKzV4EFW3Kyz5",
  "key40": "XkbaKfda2DpE2MvTsCZS57WMuDbBc8uERGYxjzVCUc9JmPXwRyHEDuGBd3J1Gq8XUV5NSegL9oCt3FRBGtAiepp",
  "key41": "GfD6zVZePbPRvyHgPB7E49dPSZNj1cuJVT8hMWwozHbC8kRyZ4ZJaNAXDD6RQ1jw6wbReDchCwjYifmHwjrDPWS",
  "key42": "eYZqWGF7aLAVYfhg8HyWQ7ehfP7PNzAcppKf4hPQRN2L2bhCTW9kVhYwfowMS5ogESeiikEkgp78HnqnuhUZ7fv",
  "key43": "4rsb78MCrWenDsKSwKHaTohnsHSCRtXWBdeuU3LaeNgRqxxoW2x5gKMzEHDGcouMgQfuZBN6deQmpuc2fU1E9VDp",
  "key44": "2iVbKYHZ4NJ6BP6kHAGsVzA5zyw6Rb1YtkkMyqK1JxYkuoq1heSYYprSHSYLsNq8V2hALfE7awMm7azb4rBZ5DE6",
  "key45": "5j76vkLHLu3dqz7HL8a4Pfxwiv7h3jpUWJHqx5VnqTT5dn2fYkaF8N7duNYtcQXH4MhqiqL3pUmYki9e1UR79Zqr",
  "key46": "4NLa7RUXJ9un8eRaNfTxGswMUT5gMicwPzGPPsUb7CfyLUCmauX8zvVTqqGTGh6r3yWeW41bcfmbpmeTqeHgszKP"
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
