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
    "4RGZfD9WqQ9tQjZzCiFLERW2FTe3KbEB5vmMxZCpdQ5AczZMdeTLhmYEEykz4jBsFtY5mxK5bUekWeHr8YmVoUFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63vAm15G2UB9wxnHn79xspa8iL9GWZwbQxrwdbu2qFnHZ2u67BQtEKHJa1BJcaSdf1TaTkHzYaHzbZd4XNEKP7it",
  "key1": "3e9jxuUGYEcGcm6KXt1Nu8JLrCeZ7KnpeQ93tSCL7Brs2s6GsnzGCY6ApecqHP9p2edekwtYftzR7tWUVEAVSZCu",
  "key2": "4piFBjpax6QGBut5mXEq8Dj4DQ2dLpo5cyMjTW3G2EsEwrRym1mbCAgZetyf1uu9iKJmKveJYkJrtib1sQCCpcod",
  "key3": "58frt5GAKLpFKjwtKHYSJWdZgWYggQ31txGoS3hvRzcrL3rMwqHMfaDmBSBnnkF9QeMRfcxDYpNZ7Nw74gJzxKKH",
  "key4": "57Dmy9oAX3N4PBgUyJncvftRZphyoRGKGWgqWSVsHqxd6Fw1bRGhqmtYsjZyi4fhHwxqWCWYzmpaj3UaWCXjC5ZD",
  "key5": "58KQRjCkjvcDGYebNJrdbG8ZHAFG7Hg5iK9KZuJPWVPMZp5bowhu1SucraaWRJxnPaZNsRSj2Yzs9bub89sWCMp3",
  "key6": "5tw5dkD7js6N3kHbwEhDbEVJVxT4D1qjQ7iZZGXNWdkhkmxMZkMcWmuWsCW5D6SQsoNvmQgvPtxUbNmW2RdKm764",
  "key7": "5KTm5PAckXqNw7uGVdso1v9L7pjndCptKEZE7qt2wJGNxiQpvxSG9A7Udvy4ebkJvBvAyjbMEhXiMky2wbYEe1uC",
  "key8": "4qbQi6kQL4ePKD5oWCpmV9pvnWawvnym4YjQxDJf4gMeT8phDfuakeVNEPm7ob4Yg5wxRMBBNXrH5ykJkJ4PsjFU",
  "key9": "5HHjKCJL76cacDMhX67VJ4zYsK37XpJEs61Ma4PfAxMPtZxDgoRrhjJwKakCmqHKiGCto2Dg4Cx7RavGHmbQ1AKG",
  "key10": "55RQHdqUM2m2juS57GD3u5ci9d6BbpP8zgS5HMkyj7UCESB6ytAEJbtKLk8HZVyQNSKPrSjk7Mm6wjLN6T7o2V2A",
  "key11": "23Dq1h59jQVDNM7a5onwP815XgezUGuJJ6t3r27twL5st8dXro4i4ZEMySGRJrqi71XBGfEX8WYnttZuDgRL6fLm",
  "key12": "4xuYk6mmdwqwM6yFJcdzBp2zPtGFQ5sizfUPdWf8qzHgnxpxYSyBkR5i7wT8oU2hq2CfBRHeXoZHF86XZpR7tD9t",
  "key13": "5Fb38rTSGuEz366VEmSmV8uhaQQGdvzAhHgjHyp8AkvuzdoFXfRKypGYxScTSW19ELJ6vU22xLuaSSwS7KDvMxM6",
  "key14": "4tRJJjRQDD1V73uUgJCMPyuGaTC1Ae3vVC9maYJxAwnXbBJyNR2cMqiyxsUDdJoryo2QexcVLvHrJFx1FZsMewC6",
  "key15": "4rVsLzBx4SSCT1g6uyRweagbzrvLi86wYA7uKrHr7rRbLCowzn8XMNR6fTVj1csEFgY3woLBmzk3rcVxJNV8UjbN",
  "key16": "2RTq37JEC8z5E2QtBzreK1wP8EsHvkm7wHFdfqCs9frdgFHeSxwJXhf7wkKJ8efDeBBMffjFHU62SJYH3ugX4rQW",
  "key17": "XBpGe8sVeaLsCGzDTxGKfoTWZbJVLbNdA1YnbEKqFnpAQWjvBnrvoWr9ubjJeWQJX7bQmEQcPkZkLg1dGYee5ze",
  "key18": "9wp4PDdroz43vpuD8F1BDGwweSaymDtHszVpGjryroXyUak8HKRPoCkR3MAghRvLNZWB5vunSjXeSzUbPD2Gocu",
  "key19": "2xc8SaUcQHQ9wiwas5hvJNWDzmLhS1WGHKshX9ijzwSV5WWJwvHvjBpgat9sTznEeCDuTGkwexEXFFJZFenGM4MG",
  "key20": "3VxA2qpra3wmQwcxywZJWLCXiMrrUezEWBfx1W6rm2PnJRjt35jih1g4E9K32LiWpDfmh7XgTK9MK5jgGsYoxHf3",
  "key21": "54ni74bqaqA6LWPN8KxyeKzkZEyg1p2eV7AS3zA96yr4g2U4ndix9zPPeQumSydAfJg5QKfMqx75HEsuHjYjDDmh",
  "key22": "4yZMbRniQYiRLMgKNzBQGJ6oiTFedv5R9xx6YnLxnygExgAEbgSw7HWwjj3Gk5Ej4ehspbmF5hcZw1q4dsgoV3ex",
  "key23": "ujZCWrqKiSV6KGeLsbGf1P4bSVhBEK5ftQcpYZmvmDv7yyEXa3qt2pxVaW7j8GmaTuNzGX5oSyfzZYtv5yksVF2",
  "key24": "5XXdSxx5NmDTLvLoQnXoYNjNAdqjVFGmokW8qV7d9bA92X2J22daNpqu3qwHAQxR7DebDyueF7P2YqYxMi21y3FP",
  "key25": "2wAF8bV94tyHGN6uCYKeLoeciVi2TiVRTJwBgksX7kJpnEJEj4yGdUd3PZG23txV4MoBXdMo8idJDU3V76rwg6wP",
  "key26": "4dturubFMw9FCK196HG5JNkReqq32WG3eCynvrY9RPv7AgkTToeatigrLnWatEcjZU6SWiEyefd1nYeDgfckQyHc",
  "key27": "2toTJ7s4zPWSsELA85XcPHjBNfrvUMwh2VoM51FudsNX759eS12JihdErozaXnFxnsCzvUo11GiRPXMVFbY91Cp4",
  "key28": "4XwBRC21kqMcGLfF4NkwVxkyK8MxS6TptKwBpZMh19ehTwyak43TAY2DWHoXazMmPKz7ZgKC1pe5eDYYu3zwjFhy",
  "key29": "c5PjfhsbYD65aDNFD9cWPtFn672j2bNzAYjjvX4P9qTuNaw3NSXyVDg5gVD7tfMtqdABVHnoG6FZBzNVndrjvM3",
  "key30": "3mM7ZxaPFmsPm8LNnQvdY5Vkp8n6qUu9GhimZTmWbGoz85sPAsMeJ13tqrskUbGxQmHBpLhHSGVc2kJXqMaBP4VA",
  "key31": "66Nct5eRkXTwpf3kpxkDwdySLZnsEcZFJogkeSNFZj6SsKsw2Yje4omqHN714Sq5vZA5ajimnWNS9HAeMyjyQ6CR",
  "key32": "4VEgTRzWxumUtCSE7dxjEjoMZJnFtSbvYQV1ec7FRYgwsENFshLqN5DqctotaPvDJPX9j3mLMtAUNwX9WHGtYAm",
  "key33": "hX1uuTwar6A1jHbkRTs1LBmSVxNMjVotngLrxP1LfpEcGyzPxCVPtrXa5Lsk6K6zLUD8BmmMopuzjadr3f12v6y",
  "key34": "Levt4A6cXhPtYwJqzDMamnKTgVPK7d8pUa1744c1bNMJn2h27pTBYpDEhigKvQpQdH9UQZEX9LSZfNVvx3xBqbn",
  "key35": "3QXqoYteYpt1FG5VzaKmFK5s2iim4tjFWxwyA3BzYYU95VTdifRhSA4u3W9yr8HR5xy7WofevxGLpf2n39qokPgG",
  "key36": "2QoK3A6Lv2E7QKAqSuF6pQNiJpQUE6jeMJ3E6dg4atSSSsBhvYJ735jnUtqhVAiXasVrr1G28reSWV1b5F2xWsjj",
  "key37": "5rwDSPtQkaiW5iqwiafhLvhryRM2GfsT6uXT5Q71Jej8tgFm1cacp9F5iDZZ6vXedwfQQ67hziCSS9KDnJ6oHN9R"
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
