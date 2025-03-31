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
    "1kXoCwk4B9zBKjDXDgGpZnvW4HG42cyLDjsukYwtfsaW82SzB95JFYUe958fLV7QHjwRZpEVjTYzif41o7MUtHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7kJRvdw467hwY83HDcM67n47VpZP8zC9dK9cwMCWBnVvp5YeV4shNYNMP9oAn1rTikZvMi6kD4CW3ExxEaxdHP",
  "key1": "5HfhNAmyyxYZaW7FibXJ2XR6wfaTMEBoHh2ppW5Qe5NBgJwghxtNYmAPupddiDwW6aX52mVTCAeuDEm2i4heckku",
  "key2": "4PHmjbPMF4SkuntUCnhhBpJiuYc58sRr5wy4efohHv6HH3mJ8feMhbvV5DRs9ZsKeAYbUPxP6SDvDqPhhCGEhLd1",
  "key3": "37xizSKaijmcT5xLjndC3Vh9BfyBsvaoshSzM5wNRrSmBXsXfnhrTmyZx9hjVdN9ShuSjw5AHGpua9wbSzoZcwz2",
  "key4": "4WHBsGrvwa1uJfLUdwfX2itqKXX4qXty5b2tDTugB4xVZ7iV1HnfrukqiVEoMXv1YSwb6wWghfvohY8dt2XEJuQP",
  "key5": "5sW2S9xp4hZrJ3rBNVLnjLVdM5AKj2NP4geN6Jd2Pi6tjZf5qcAVwuad6rPL1PQnGG75asHZt8bB5pVrLax7tchs",
  "key6": "4uTAkkeupR8rdNcZmKFJSELuqN1339y1EKBLxbwnoygRPugbdRdam9pEAk3sJxVQB4P3ZdKnWse224XcEYFtegzJ",
  "key7": "wpyQ9hxw4YGBj73E8owNpqVbbmcJb94TsYNfKjAuB9nFjU1CDmLzrwBwZroCzCQESw4wtfRrA6Zjh5v4Ehbgbg2",
  "key8": "2iBSkm1t8HyNSUH79TqnrRLo3oYbSKDptn4gz6DWnxuPhn28UrdogSrWudEa8Em6aihpR64ULtB7sH23tswChe8Q",
  "key9": "3SjvBCLTbzvA3p5LRoH7jFhDSR3VTeUfuufKkRj4cpibgXF5pzxAcgHpgnHTfMp5EVGbweqi6LRgKCdHwMqSYgw1",
  "key10": "5mmhhVhn59cuhRaxs8uN7AJ4pUsHdQJTgy2QEJrm3Jy9qPaam3cVwFjBM49SgECNcZY1pzkrNEq1yvNj3fHbu8aT",
  "key11": "2ZhXVEFcF1BX2zsrwuuZGTeGH814xVGiEYXifFkZNjsZaaAs1scnnJ8bqNTiapSSbXGrRPe6gDdcb3oQVq9uYAwn",
  "key12": "2QMk9w1asaRsyHzaRGcFm7WkRHnT67Han3baaGZygz95dH8hzzGmxceHtV5v28rDhiNyNCZN8fopdMXRQ8R9TdfT",
  "key13": "o8i3xPZi3TduJHTWFfsgLxQDNN5n9JKVD6J33LSvSAfMctsNGYxqAwSB1eX8iiTC5YL14T6hcHWBDCxTAoS2KRu",
  "key14": "4fsRb2ARQbu1jBhH7aHosXZJ5BzsXMUYJygpeJHaQHsL6ANR4YUW6T4ct6upCPwjbQfKsAsjxHRy3pkDtT7JHdMV",
  "key15": "Ea1pFusTpeqGobvykF6qhzaJToNGKtbrNtSKhvpTjpadVryoDBzZHTpbM5VvvRq7s3N6oVxPEWMVjpDXM1zTYyK",
  "key16": "53bBPzki74RiviuPp9KsJjBK7fyvJwJTXRtjH32oWaJnDh5XcEzt9cPQzReA9J5BQHDN3SNM4qLNT2Nhhsr6R5aK",
  "key17": "5t6ZoVwtZagig6wTCZGQ7Q2WEg93egjVqRV7HaWZUJN9d3xo8Y42ptVaNTuE4dBEGpTeZdHpj8jDxpNNHzNj3S9F",
  "key18": "243V4TNZSfXBtz1Z6aSntzmhnv7dWwGGYaoe2uYgvmmRbJ199Rsn4zhbTkh2bZPaT5ME1n3SuiFNNGZeehhkyXeV",
  "key19": "2S4DDaa6p7vgrbJHBwZAZWR3R91tkaS7rp4Y3sDYLPhQmT46XitkCeMtET4VJ5rejeaL1YJrchxZPriG2hFaTHSN",
  "key20": "23C6GLCaD5o4VdJYL6CCd8xFsQfoczpRZ9xhFPimEgGiRvRpd2xdJdSPGBiMQRgWjieJ3uufHwK6eKoHf6gdhLT1",
  "key21": "5aitCwKvJWwhRPDzH8v5UQarVrHkkxxcCvd2wQ4einrBURg9u4TETAgr57mrMA6mV3VNitGsm9srkMKYyzt68cUd",
  "key22": "3jbLAsmreYEqdgUJYQho8Q2ucUDbwuCn873GW4dPaQzmfeV1uw2XbyKvQE5XYW4NaAfkDtCXjdcdrjY7QsSCQyGZ",
  "key23": "ADsk21vq4iiaAHJNGXSDXxh41HvQUcNnZz9avjJa2UeUqL4dtgH3qSTm73FxxFR1b2GXGVcyMVCKqoK5Vd9gXGq",
  "key24": "3f4uwkJNSN9worLyeNKdSx8XzigTZEvxsCsPRZ6AjQVKTTuNdSSsKo1sSqAJuBjE9Maqz9FhCkLfMhP4R9DQ9YH8",
  "key25": "3RLFQTZwGyMoUX6SuGFXGzm2u4Aakmqnrv5DCZcBpZvaYpdErEkLnjMHfR7t1DdEGZaseh3chK6HkwkVVrWBz83G",
  "key26": "44SPLig67t9PxWiNVYo1wvJ3Zj2qTdQn6gdgDXciNaoMgAqvMSqCKkRuz1p9m7zoMNGNKBkdAxofhskSu3Qrv93d",
  "key27": "3B3mkBFBHEm87yrw8tZbRWKUeEPhk5VxxUBowdzc4C6o6LSTwQtgVVTjTNxPwdmTqB4TjY1A4QNhqE98uyuKeWeG",
  "key28": "NpzMjp68uZGsRyKDjRasDKBkXcBRqqKcxJKD6c59q1M2VyhiMjDN9En12eB5RvGtW6o4R9WwsnqbWrwUus8EUVU",
  "key29": "4MUMNb4xcixNBHrM9QDTarqhfooDd6KkN1GrCpf7VZ2h4tnZA5ik57UiW1riQwSs3CeDd9SJKJEdFqzdeFk8uiTP",
  "key30": "5kA8dbPWzbsPsmQ3Tk5UbfwPXCZihbcKjBPTseiA2BStmAgp9EcFVryLLf6q4gmkPGAHe8NQrY9NkqBgVm4LKExY",
  "key31": "27QZc19WaGaHgiW8BFx8MaKtjGjvUE3MiQ8Cf7zsnECasg28BCf3Rsg2bEgMhuatR3pjUAurGXvhVDFvxzt5u1zp",
  "key32": "2nsF3L8crftPQVvBemPWYpro8S9BHySw4hNnGaGUp6n2uNTA9a5MjV7jYfqaYLoQAYzQGSMnwmia7X7iNhDqNge",
  "key33": "r6MJZH1SZZiCpFPELzfaKgPgQumGPFbbNmsBThatpPf4iPKFUnoePDqwkmEXFvofssJPhT11Xtjj4bo9MWcegfN",
  "key34": "2ra9xUcZsSeQGQuNFdezhvr5YWKt2YXgSHQ4FMHMS5CnoVLF7m27stdWaVe2GYMtiaUDKNuzRSFaR7Te35MdJh9k",
  "key35": "2todB7nt11PD1eSid5Z3d8PQ64QefecxFH2tHnTAL3hVfwFzFNgRYbb8A9gzFXptyHt9EqpJk7yoJvVohC4ZsW18",
  "key36": "3v9AFyqRaYqT8TgF1Hncg5oQxbVBu1g7dBTxwYbHNdwNwBuP66u3nLR2FxXF6BvsufS9Bykps6czmr3d66nfusWJ"
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
