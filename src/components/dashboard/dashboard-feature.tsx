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
    "2RUgZQJRJ7LJ2pEP4rBXVwhXVfHqneob3nkc2WByWYQXYM9CtMmKarJDyqsCSp848un2iaWNaQV9dcmGaqHS1Y7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jESpbz6oeHhJgFzsxJtZFNVSr1RSp6whspQV1SRvGz8Qd4keW2CdASaEDikXYnGYQg7hYojaH2FgXE3UGLrcpW7",
  "key1": "7cp2M6Tk9d8RbKTqVpKy5dBbhSZTanepCtxUoGrJVHCYJuu3zS64NYoaDSeFxs23viX2kEJM9L7LUSykj2eD2c6",
  "key2": "4twvxE1us25EvX8rzYAhUSKogRR7MbQSyXTkAUBuWgrySYweb68nZRA9GtvB9HyxjPYSyPJTe6VfLxx5TzSBdNpF",
  "key3": "4CvfNLaK7EpeZYtJfeuyF9ZvYJWnxb15PmoUNr2DPDXDrJKjRbpcZE1NmXmD2ND3hEzLZXyduLrusHNB3tHnge2Z",
  "key4": "4rMknYsSJh7fihEBn16LJ6zTjHbmiiC1rTvJuankD9s3F2wUfYZa5unPNWXy7wJgrJZwYYcyXMhUJBs7PbcFbT2L",
  "key5": "3kWAVmAJ6m9kwfrNmgNgab6gLqovrtFcvRzi5UnMW2T7EFNujHyzJQZ6bAt422CNZ3owDi4YuWK8byf7Se7f8hof",
  "key6": "nXjXbdmLBbKVcnfRjh7jv4a6K97v38YG4S42e2rn3WjcW5EW1HfPVuMkevv9BS8bDum1xSdumsMsLcLvRfatpzj",
  "key7": "4YaKhHAQysYdG1eVUK7P8oZnoJcV1EPJqV8wkdDvdmBhsHUbFGQ6ozmGsegdb49YXjK9ayZzUfxVhLQVsyHgZmR4",
  "key8": "fPdqZk9wtauUdTaFnLer5tmbWPhPs2vuv2zTtHt89xSiZpNK9RuHr4UsA7nGHqndes3JAzN5xp7t3bmhP6iaWj3",
  "key9": "5SZuG6yzEFs3vB5oLBXxxT9Gcg7xBRmBWXpbWDFibEVJKrvhNW7Kno15C5oqgEXSFJc3ArgfqTRBitAJx5QVuSH2",
  "key10": "66Td6TmW1bjwZRxAZFfzhMCiTG71AK2efbX1q6He83BdjqWnw5gqPmDjPQAU6dQ71wf6vyqgDVgi2KFEhzxBaB64",
  "key11": "5fZR5NNYXozRmM6nK4TDiFjHzyvFb6Wuy4mGF4djHXEzozWz4kbQPv7AG7bQgj8fCc2mpoXywgAqctpUeiqoXGBA",
  "key12": "3MGY29HiKqLmJR2AzFLey4Ys5iufU28V1Jx9ePPAJsLQTwJic6xydcNgAxUkF4wP5d1ihbgEas8Ef9wyms7pddaq",
  "key13": "2VvbDQ9BofgFGS2STZB5sF7qZT2Aj4pa1zdZekQGXTyWtLnDdKnCv7MNZzNWZpj4ftgLNeMHQpG4b1ZVn2HKFJDP",
  "key14": "sSCgU9duriCbsqJLJtx7D6LSkPo7cu4Jowzw4gF6BGKMVeB9T1eihtHS1ga6NTEgpSheaVg9XAYn5Q1ACpPqYdi",
  "key15": "3pyC9j7pq95tSPGNdz4M4uSZgA6GuXJTPiirGy8JHfdGmWGFLtmtbc8xnLRyZKvqHmbmimQ8Ws49Z4XPMXJ39iY2",
  "key16": "5jLyTDmzxxwhrZVVzTLPsRbGNZQiJZG5yv9EmiLi7kw4qFwgWC29C7nBzhWLtbcAwKGYmrY1nNeBBYso9Ufw6i8G",
  "key17": "5BkusEzA91VdwpQY3CBusXHv7YmyT44EV52ARbbH29ZccuebMGyw4susrtzzNpQg7PKdAga1XHAdXB24diT4Axjc",
  "key18": "4jea4ek79WtBFTW9FFQidSpUinC8rDa63GN7w1SqTLibmCfZDWeNwoenNBJMPAqVXHWSThspEBLWFpcnuqfLAzXJ",
  "key19": "4xXhKMLAsUgs71cMho1e6GfdLGMTwjsNVwEraiwNWBFDrAdcfoFxM6GfPMp4R86k3nFimJFkpTHfGG8vRA8kL3s9",
  "key20": "5MM68Yu8FpdBB4o2449MxtJtsMc7G2FacHLfzTu3GBMXgcADKki2sqTYPW8JLNfPEBPC8NviYTG6DiMJJCLkGAEj",
  "key21": "gr7N2WyzFxVqh61Dr3p2t9D1TSiEkrgRFbVx3potitD2fGBfqV8a14M4Hm12H2XFJWEFWyD1YcPsPcYLomkMgCJ",
  "key22": "4wEmzeJ2k7BswyngZcHBNQaDEbjMg156csUVsB56hAV6yZaHtS5Wdk8QjY5MDY3HTUkRW5FLCu9qysbZo8CcMFMc",
  "key23": "21xyjBypWGKQ2MnwZVZELVJjpbu8EvuVg9WCTMy5zed29rGsewmdZzUwcBeKp6cVmTGozH7VjRmugWKnB3isycsv",
  "key24": "3dxnEVbYZsUpKo1Kc75LmBRnxLG15h4wN2NtVxqnUy3PuGpe3pnqRNdqKiEHxQjA1MRgkMJPbtL4jQiFf6w2cNBo",
  "key25": "FJH7N9eVNNq8WJZePcRWHF1F8oBNASALq3e8it7uRzijcuNEYYfuPfojHJZMQPYnYDB4XWng9gQiqg5r24cyyKi",
  "key26": "2EY9NvcPrZ8bwD3QdaBTTHTRiHYuVF2roLTk2PxqkKuNuUgsMb9N7kuNMBs7dMkAxUHxLJmYwjMK8rPnTpMX5s6L",
  "key27": "2fh2A8eakUSYZ1hTtjvhBQn9BCh3qawHjSEsaiUhK2iUZqB9cogUWtANWi8CqityYwgXesLt6NkqQu6WLZ3pNcbd",
  "key28": "5Dg7rANzwNcH9Zi2738BKjKLmq2pxrseYFXaL4MApzASSsUfqMqwGhp9qSSbRqCEZior5KuRyv5HkKWWCr7zHxij",
  "key29": "BCXweDignm3KCw3cs19dHpEKa8Xf19EjdKJHQie6KcVtTWUEq3AoxKoX9HX7kx9AkhJmHx4PPZVqiAS2A6XJD52",
  "key30": "WKq2fvBQ73sk4gBGZkwubFBE8t8fxwrxi1Xq9eNffSifvjZwKSpHP4qgZjxWPihn9ViQzxwGPeFYhbTriQ2RJof",
  "key31": "5tDqyuv4QqMXjDnDEeWGzreVp8wC2Vn2L25zqE9V8iyhUCKr2oiugNWFUrTweo4C7KouWTvEnTzaeVzf5ZQygTzu",
  "key32": "2YtpJPHUtoX4HrQo2Pac3YL9gJK767bAZQpWC7Tcvyw3rQ6AqX8r6eoiGeEgu1NC85VM3gLogCnisrSmThcVsowd",
  "key33": "2WPRKbaWRjhdkqXjHkaY6YMLwwob82JfaPp9fqTdaw3Xy8ipZVvhZvu3EWF7Q9d1sgNc6gjUxub668MyyxMfQj6M",
  "key34": "4hoyiX2mHRX7jqWdjpphdDgVhn2DDZjqWT2HU2Y6txHNGmUrtJ1rBhkmHZ9pceers9pgQ1HVQpQQVAawfyBBgzJL",
  "key35": "5dLiyS8g6572AyKTh6KsrYEsgY8fXCE2gEXwh8ZvStqREVKb41EioNtfZaoQd5ft8gQJtqoUyWYXDUuY4ZynwgM1",
  "key36": "4NvKG9TmJxnP98VfRPKqBBaXPSMKDfCsgaqkWauDxY13iCNE1bTwvWndLY8sTYKxGUhsVpWm18hwU5Qg9KyorBEP",
  "key37": "5bv61ubwH1ETWMdnR2U5AFtWjoEQB18xobZLFCwL9ikN3jKaCGY7eTZtw4L9ZLP8dY79zf1BjRgFyNQDKWgzEWWN",
  "key38": "4QUdw763FzCZkS8b5utMQP1pEnYPc1mRQdHYJiNjLEgYba1Ehxkt1o17DSxFFnLwca3q7XrwR4tgE9jf8aMPLuA8",
  "key39": "2KGsYYgGCHZsMtBbwz61pZd6yWbRivxgX8GMrJSeHkyRZ1ZRfvPfrmhVK4DnPvAmGh3aihLMoyXkx9SSFU4hRv97",
  "key40": "4ZLyKg1geng1CRG4odCMiA5UBEZXDfmj5QgaUdywywHqHXsGcWoHj4Ce933NsUyumRKyPUa8evcWxZXnekGp4hdC",
  "key41": "4PSuXm3xodPCGBpjK2c7VTcFSD5fVyaLWas4JvracRLJAeA1yjfqwxWUhg61iBiST4tW9SubbQjAN8nuFN2vD3Ld",
  "key42": "5GXZmJaE8s61sH13JgoGwvhahMyu2iq8cudfFWbqiK6qwUJNWjNLf2gj6j7aCENHeDVRqVqRPDxcjupvAndoemao",
  "key43": "LrjT2W9dKcPiSGgQtbH3WJN6TWWCuUkvjLUkQ4mFfJP9nZns3CGAvn5LEznJXbULPDQVjL3ey4VH8XHGr12ERSU",
  "key44": "2HYhrHySYPu8txv4ATrztvY2QEVuqbZUt6epNX8ij5P6tgCfTHj6p9mGbQNi2qge46MytyNY5Yc1kfYTajUY9U8n",
  "key45": "3ietca37tnNbeUUS53BdmZLdmGWvbNwXrtsNPxxkYnwfxAAndfdfWeHPxoBok4ScdWP1qM5J21dGraYqhUhR7bKA",
  "key46": "2SMBEnHK61pE4zi4RucYyMvWpCEc9kQNG33mAALFbiKMzVsXCiDjToFMsfBEw2dyHGuf5PXbm8Coqb29FtTB6WFq",
  "key47": "4f8rHQ7a9Xyunqp9kG5TkG7eWgjfDCEaKpgmsQ39gKedaA8m3852xPRZQvNQtU2FULMfLC79fHDQoZfD9XReYVUR",
  "key48": "2q1VGJTEhW65ufm32jt737NV1QVGUsRBTFXiiqBm4vn6Fs2uK1BNxaXAFUkntK94q14jNtveooqfi55pJ1rGsAv8",
  "key49": "3VkUgFvYj9VZg3bkixxkvouuFCh8V6skAp9knqsY8BMyS3Vv3xzcjXYEQV5Bn7xnnhRokusXeBZYN6yzdfAsu1EC"
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
