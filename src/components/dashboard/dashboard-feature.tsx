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
    "3jkfTKg8B4jgseGrdtYDeqYWGWXJpHb1yD4tHALCA2Xoz6rhJcWpsK8hyPH3szf7PQdfaeL72sGGrN6w4dRSXgS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aNebnaQDVdW7vawerUNLtNdC6WinEWjSYRdaa61zkSv16aBUBEneeCk5KvEgz2gyV8AZ5NKhE2giMpYz6jB99pf",
  "key1": "2Dd73AuapFNjjQKygovtkoF6BaYcgwn9o6X2p4CpefnyuJR6wMdHxvFz8hnXcks4RaHhcEKixZyHvJ9KRaJi8Hh1",
  "key2": "DceKgdPqC1Bb45zN9ezSfiBaaPg4BepF3sdrafLEiarVfaPPxjx7wkS7TUD2fzNJqmmCUQkV9AgYSEBAPruY9DX",
  "key3": "23wudKHSC3CgkgAYdEGD9TDi4rFoeSeniXLkJBSfmbDYdeuTzzh3WWaxssnpPJ4ofKbsP9VhgiHyT97z9ubMd4DH",
  "key4": "4kkn1cfLoL932ttbxgaokQVymd2AVG6yhSsfCLbpn41GPd85Gz4JqMBXuybkrThkL92SLYNYffwkAtDGhWUo9hXb",
  "key5": "4VHfcj1PNf2dMDpm1d7TXsnMf5gU8MHWg5F6viydHFXENihBAgukBsSMkXAeWj6HjABXZw9TLi37iHxuUB3rTFZA",
  "key6": "5mXweVC49TyMTbWsMyFFYVKgeLdFh7C7iw1Be6xoA1hjYsbqzNyre9PRZ9RsPaDMMjG947sRVVDQEDFxvD6py1hz",
  "key7": "bMY2KiUwMbagc8ibsBBvzJ6oq4ott37CMiMnngQZsSgsMbjGKDyHNxvpYf6DXLNa1gUjxVbCjaBo8tinotz7UgJ",
  "key8": "4YRnU93uXrjRzdbMtyHm65WRJ99WuL6bEeiiZaDutwjwQnKoKyKsoTEPw9RJhGVTgWPcP24TFv5PXhxU9XSme4ZY",
  "key9": "3jq2co6iAo15TEEDZSgtjCDWpYQZvjYacHSHfPLQYTHvmKMmpBwXkfgEFD16nBbTRBd7uf4T7ArXzFANVF3DKHwh",
  "key10": "jzNLTZCsjuFQoZ7vudicKPpT1Ct3tKLdYfWS7wRG1dhTVbzaT62z9xBmqgoRG29ierDQTMBqNkW9MZiLPdiFUfR",
  "key11": "S2Z8fgWfMJq8RoKDAL1qQcNC8uHifcHQYQM3yM3zWSvD8KV5ppx2Ha5oWStiytJJhAyiWciF7AxwHUXURuPbzzy",
  "key12": "2JYZxEk1CdgUs31HWD6TCMSqMcUFkpeK4zei2pE8WmNZYb8pyS2Zp4gxx5cm1vDcux2WvoK9cqomSagvxnJq2F6M",
  "key13": "5jFkTQAZxEgh875cSrhHiDeWm5qkMc2fNnUqPLxn8ogqUA5DnrYfNhUChKqdPtPEtoJgvaD7utfLzq9w5g9NRCLt",
  "key14": "2dtfHAa7ABc4fuRcyJjjqDggC5maK46pbroL6qmfopPFRsFyZSUHS42nMBuiAoFmrvNhtaEqnwyZhUkca5D4oZxK",
  "key15": "3NRPCYAnZm2sRnvd4vuaamre4XxUzf49RTvoNFtkp11CaEsUJJkK5rGUuWwTtVvLfzcpxqUo6wZiYvs3fCRnzGcB",
  "key16": "2mBsLqHug3xy3WiQpJqp9SN9iZPo4XvMwLe7QuvB72SPS8GNqabiE9ttypmCL19rndCJaxjPjS4JWipTVpKekazM",
  "key17": "2komBtNNxTwezZc9R2k9VTy2ZCu2Ud666kfybTRiVth23Ly5kgHtN7oio88NFYuusURVUgnM8N5GREL5e9f4CYHb",
  "key18": "Wzxw4hi32Ewb8BhEP2sFX2nsZN1ophYhrhdcaymZM2FwtSKuP1khmMBNtHGhBSKL2vJMUPvBewbhWSuo1StT68T",
  "key19": "51PuZy2PK3eANeXX8SKN2RxCPR4gZUSLtLRtRLUH13FsrmEhy7bG475EN6Gf6jbc1WwcSaPeqiUSFXYmu6U9dz9E",
  "key20": "3jVqQse7tEcJkVhat7Afz9wHWdJnHDXUTaNu1fMV87AjoZfKj3caSndtMPXYDvpVWaXN6UJwW4wcwiD2j5TAefUp",
  "key21": "oGFyWGZAbsbomKTK7H2mQbZTqmRaGnCm8Sv28UdiizK8PQbYjvbQU1gdRJKSEB569WR2XnumtHi6DBgqzbcHWDh",
  "key22": "36S2N6DRVRKbezX7Q9bRYVd78xxK5V1iNjDHENYfSS1oqbZstHBygtLTQM31dKRrBW6h222EkYFwWRcceGWU8J2J",
  "key23": "2bcd9kcuPzwfHHjJ4ShyYiWwWNUEj8Koxz1mWQsJzZo789TdgVhNnPkszVMxVqKMa1cU41KTeN8fiFomMTbjhTMn",
  "key24": "EaJP3A9k4DBrm7smpqnmZzMhHyQ663AuUmVTRDyEU72VYZmsnServVD2KcKMyUrqeJLzCEBk6ihLc4RcGnEvJ75",
  "key25": "4JmVzGrPf21eUWN496TuSs8qWC58wJvXVaPWf3FCT6MUbmt8BbcMihFp6XfcP7tsai1Akt2UKhm5YuTMuxUsN3ZR",
  "key26": "3EwnF7QZzWiAZ6CEa7vg7pTzKbGoXPp8DG7XYVF2B2VbbovDgiUvLSqpJhtnNDGKjnJ8zVEGFU83EhEJ125EhtuT",
  "key27": "4st7LYmDdHyoXba92FN2tPJJ98L4BgkKz5uUn9uDX8dLcWXEaZvQE4MjsZD64DeF8D62YC65p5PpEjczWfQMCnRU",
  "key28": "4mzMXqCeEGen2Ehz8s7Bi3iuKDZk33Zn6LJ5uSqzVGECa1Cj1soAnNUBDocih5v6158fUe3a1hW39YMyFjqy8ihz",
  "key29": "4gKChNSXkDK4u1MN2YbLgrNthakZx13HujjtknS2B3jAYfRFktVQX2hC1yfZoUz93TL5oBTdGAW8tGn2yhonp1X2",
  "key30": "2EVH4cHtvJtbWfLmZ5JbQLaFWqWYZqCp5NsFSdeQ8VNypUzXXjkY8cPZK5fDmnwCm87aC3hK8VknXjta4vwbngzv",
  "key31": "5QKP3jwxSn44N9QvNXpXFC9fEZYtdJK8Xv9zo9jsFkP7hsm83EjskwjEx5DcP6hSxxmMmH6viXZzDuJYpF1XhDDH",
  "key32": "5xdTMf1CumLZG1qDjrjVuFBNR9w4BXTx9mZgLxEGszdJ2bZ8vQorJ64htTBwZGq7LWP1R4F77uKGKJebPiNos8NL",
  "key33": "kDKnpNFhPzE1w9vLsDkGEJteGyv5KmPSUCQNKXsNepmUS2iMX7bfpQfRJp5TNhRar9soMuhrVmjcMvvB9GBhezC",
  "key34": "DJiAGHjfX6fmVR96uowhM5Zw4JNm3PLMEyh2GxRZExeZw3pT13Bd6itDssKYRYeZLBYK5mk9gRGUbZTLf8ak5Zg",
  "key35": "5UJ9nUJqgYYkTBGXgzDWXiWPDd1ubkjP2U47UuGcn6jK7X4WgWEYMs3xfKv9Ecdz1C6zgQ48HMoQqg6frBgrcqr1",
  "key36": "2Xdh3Z2piRua5zKVyedye6Eu46jwhp47iug2BxF3oj42ViddZEswCpPpwq1qoCZx7M681oux18aoa7Xv8NqHjsEF",
  "key37": "3bPoNWdaY9FDS7vU8kq8a6X9xdDUmQPumMqH6zoLmusoihFBQadCyCfbgo76V5C4NbKZ8wbFA5BRdEcpK9MFwYqG",
  "key38": "2hY1s8dbmGqTRA8NKD1agfpA1HeozY9yNfKdxNtKD29zoBXTA9Jukod8aY5P6ASZQ1K33HDoV4wm72dUaBy8m6Dj",
  "key39": "68tceSPWVxc7bfh7SXhkm6vECCQziVZW2Cukzpwhr4X5HbXaoqmLg1tHgwwC5P1jLaz8ejvBqa52e1RRAppfera",
  "key40": "5qjtMkFDw8vfin5rr9RYdEXY9ehxeeAbWPpUcpk8kq89ZGkcUAfvDTxZMEoy3ZfVYgAkwaCXRtFUJBf14NBAo2yD",
  "key41": "4Qc2dzURXLnGB3SYzKjjzjc3UBxFdoqKmLdRSoM8MsSeigdr6kpVqFjcMEaQGV9M6wuUcoXxXjYQzLrkNyeihUei",
  "key42": "4DBbMTMxzrqHY9MnsRxuPL8HnkddzG8x8CdGPgxhc4JN71vf2HxVDepiLV8SsHHM3iqtWiNPjVVndXtqatmbeVMN",
  "key43": "56vWg5SYdgmSqkUShAkmTkR8B19G8BueajL8vNz9iYHdUs3UFQqsxpBUWuYBaYZthxYB12mtuvRffHLYBvicuRys",
  "key44": "MVw9vKPWJNJZ4eGoAVfsSMQ1pSoQJSbJQEfyFhy74hFBXguKLkwmrfayMNDTyoW5PG4rRTUAevZerK9Lu1vdW9c",
  "key45": "5LZaUNuMB4Nx6C2pQCQZXGxj7WyV9cbVK3bPZkNx88yYo7Vah1mQyV3DmaXQGoFbMHgsqWtMAhquASzhDbyedj2z",
  "key46": "2trYsijYJvxvnW6FgUw1ThceHLfHCEWZGTCiK46AjspgcfLghoT14F8Mmpe2XuJG9kkXSzkpNfbYzndo6nq6Kbnz",
  "key47": "5fgSGbc5vTEJnKBQt57hzCThHyXHBcfPrP7ENK6N9m29r5HZqK9RMJqwpbYKMJYZvywvBX3ecoDjdK9KpJTdy6q",
  "key48": "5zR8CNDRPx3Lq62CrjiwNrnhedCYDfmA3akDhKcxC1rkh6WE7WNY37y5UisDUJ6edYPbp21aX68WYE32u2ppGjD4",
  "key49": "5QLBhEUkLCca5aatC2RpM1Dy6FQRV6DZpPk2jWb71XrKn4SabbX3aufafX4TiYBBeryoB88DZKpQRPn9Mkw7FpZE"
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
