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
    "4uv81kgPc6PUQvyx4rAdEW59xzazf6FXJaqbdbCsLca5P8AJcU5MFVir4bRqYyAYQUYHwnTwYSXaogVpUUNdUjLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8n5wHaBSTPQANjqsKpd98Vno4P2A8qimfnjTszmXEw81d6jB8Y8mDMByE3iwQaQrmE2hgbw2Qt2WWsWxkfPGAe",
  "key1": "URmDGiuDtd7V723uaMwcNobcpzD3JhYpAJzdru8WZYcmjEXCZ2gNPa6Mj6qB1Me9wrkVAuMYe9Df3SnDLhLLxaL",
  "key2": "3ytg7vrUvtEhnymXHSftuh4VrKCCtdtvRkiFCB2PmjHroBZf9hYnktJVrQpbzemDKBBCWTJQ7qFuTcxN8URgzB7V",
  "key3": "rnbGRuY1tSziYmNuEYEadjeJHf3cak1XzVHNPDWq3YmJVpCf39P4JsJ9uUm4ymSiU2QM4XhDwxCoEQKEK8w4L5n",
  "key4": "5FJzTgNxv3va6Lzib916s8VhqVrXw1offZqgdvEAAsNSt7TzRDMb4D9qb4ZtwzqMJKLLSQ5ekonJ5SJYdjmQ8mZR",
  "key5": "3iysHMeiVTuAwJ9KYmVbwysCvydWhaZSvgbk2FzdGqTG4nLNUceZjDzKGa8Px4nintgsontPcezqEb8Jp6u8bJ2a",
  "key6": "nLVhUcjfMVnSRAzvxajWddZ7qgM1h6VA3D4zmA6heHxxcnn9jJgTDAfaXAUgMxkzWoVyqiHduZXnwoAJe3eHDBB",
  "key7": "4FR6NBcdgCPMAZyU7n36Hpb6SJriLhg949pbKa28yyChVx3kxbuDL6dKNWhwzjvVWgVJEzwZJmH4tkZSPnRaF1nD",
  "key8": "4yetAiH98iAieBwLAxyGAYde47cynN7bLrTLQRvBjsGXHK7E91BMmi3unxRcQwueTGCsiM6QV9EexN4DoUk294bS",
  "key9": "BVdPMr44oEhbJ4J2axvhJUg5RBVnRjXfsxC9TNW8cLUTavfXZN98yqLKDzoKFpbhoU1WtH7TeNotjRMPnNn5mk5",
  "key10": "5QcKee7dXmAXj37NfAq3ZmqT4mLyDHCuMQX1GsAs77JmdEBNSpHB1rJtLj6Y3a4igHM65UKtzvJJeA2afDy2rEbT",
  "key11": "2dNtRnBznM8fmkP19ZiyUbGaXt4ktt2nvi1Lrf89pji4nSPnrP8txNPM987YXbieu7rgiGubGMacEdEv6pWbcQGv",
  "key12": "3hgU9EREAWjUBsb7x6LWZNowGPBXz151hyVnBEq6fY86Saj7BzvvMJzrkE5w8TgFLf3mawDptoi3w54wGG9xW1G1",
  "key13": "2PC6EXpJjKNv1fc3HRXYoBj75hjm7uyRQqiwnoyAE8z1f1eUip6dLU7zcpwEzb3iUWWLx8ishENT9wFCxbRYQmqh",
  "key14": "3jBGScgtBgAjypQZZwCMRGMqNfRab8CymuN74Cp7JuV2qaYZfKtWAxdwfsUooCZtxh2YUCMr8ABFD7qFoTMXPS9R",
  "key15": "5YKap4D5ifykC8QpwECZPSBFhS9HpwRJx9Jvv2dHgHcX1Y7iKCakR1wiUYLJPJFhUkfHAcRjRVt2LKLTXMf4ET7q",
  "key16": "2r1BLQGkQ9WpPb7bqQSgG7f16Xm87ehgsLVYmVzdScddASqV7Nwi6aGVzkQqFL5HLBNxLTY3d5D3PmWTz5EcMypW",
  "key17": "39jdneRfJebm1pVxBTFNJvaoMJeDc1kcbHkV37XWBXLeQjATLH47ehreFL6F4SNCft4kUZDUBjK28gNAUhbm2nBV",
  "key18": "4jMjz4rspE58KSKtg9AvCZ7jr11g3p3LiN2RrfQLQQrjawKtvZP3xrKbd7iaCMt23M92kNDtqFxVsAL9rDGDMJ2S",
  "key19": "5HPNHxwXXy3Qw6JjVTSUEnMn29CVajKQXbJSzcuz3yBDHX9bKrekjQ8yeoMmYxrbbQSky7VmikG92Ds8MAW2MSFf",
  "key20": "65L686xjjTwcpbbgT1wRm4LzVRuw8ShjEo5YSNHwLxy6rwtKCLhC8XqFeAKrBftDwp1Hu4voDBRgLDdpGR6NN1vM",
  "key21": "5SfX8z1yWZq9R3T49rLDSe2hU1tMaQT8BVxp9AQL2P6KugArbXLEEg3fYr8mzgwFbSSa8EG3nbnpSnfV7rn8sAxA",
  "key22": "2nR78wBSjp5up2ErAErtcEUBQJFwiEkSWtqjkjQU5DaUwhkVQka4WExf9KQaFp6hSai6VQH6A2fBc6kXqCudRAF8",
  "key23": "2yHzvsuyqN9XuhAAYCCkXkMUzNkNRVEkH8t7w1JWAmndG4Axd6RFDuHHoYmSrmPFwAhRmKVuUwcVte8Wk88YWYqZ",
  "key24": "3g4YEkpeNEX6ypeuEyGoNDVxuRmfYuspRkhvfUQFSJ8YLmDTCd4EfjHx9RcYHJUPyy3y2LcNLqVqjZ5pARkaSSFS",
  "key25": "3nTqT9KH8MCybV9Pj67WNL6fLsJS783NUQ3zeffnU19RyWqrbmRUCnMFdHDf54AVGPWXf1DT8thYpkcBBf7J5ue2",
  "key26": "5b4yBkq8dV9ZsK9DKhPfAjdR7BMbfEiW9iRNqLCkGi5vAg4NbLvX7JirjYdqRPsJvoSLj29kqMpbw6PoGETqzkQ",
  "key27": "3RZqyYZnMKmAkGMJYq53qsR9geyRVA7AxAGTjYU5gUBZFxFkv3KpBzb8SxpYFWFk6mP3XS4WJFfbnuz52MFRuGzn",
  "key28": "5ofJYnC4fFJfTiLtBw2MHyqbM2z1Uy1kS5Dm1qVNcA1E9dZ29uoh45uVMMK2CPNYCqWVa2JxnxKYLjkV7amXW92N",
  "key29": "3HgcKoHSZUQSyzZgtfdBGE4dTa6a2jkVSRiFyP1SedA5f7SRDgABMHhyoprkhboy2wYFYjMdMAm63Bya9W93TaCD",
  "key30": "55gE6BowpwLbo8cvKTvzP3Sf1jrTnVG2wxrKPNLacSW51YQWFdDpGGMX6GvwPGkJtgzT2sNiqU1ybP4eTvczJJaV",
  "key31": "5ABPuozv4uA2KDuSifQEHMf8nQczWYtGGWFGeEYjij1G5x3iamQgg9QyvpioWTqQuZAEZU6udjLLQAM2xtGnN5ym",
  "key32": "2Pd2LzqWUAkEgdSmHC8sL3vxzkJjokSDDaKuskRCBkpNm9hpBzS9WxZygT1rXzkw4eY8D4fWxfcWpGDEZ1SQxgJB",
  "key33": "BF1XEWTPD7fqmFGGP2wNTnzWQK5YX9E1NVrRjnV7qc5xhiEqv5rMKK9JkZ1LSdoWew2LiMihsaD4WBusotFYSrE",
  "key34": "2boo2Nv2S4gYG5Kxc744RdBwbZy71Uv9K466NLXYc7HTk5dmBc2dnoTA1rgguDXyNh6nxgtkPp2Eqs49AcrY6vks",
  "key35": "5zEwBLj9aSHVYSfcSDuaNmZjBFNCovVRPki6rN2r3s4qSDCAZiHjQDbFBStxPbGd7Et7Asa9ArpDL5LHkqQEgEjD",
  "key36": "2rZa3zVPkzGzPH7te15t7VtgGnkQkz2zAuNotb1BsdZuHzbXcpKh4GG7rVJTFyhZuwMk6yQwPeZbXT1wUai3C5Eb",
  "key37": "Y79UggZEwR6F9fKd3V1c7ipB5ayoWkQ7VBPXN2XXtBM4daHyGH64FUQvNS62EzFust1fS2i1gm5x2nxTUT1eF5P",
  "key38": "Vzg7zH3sTz6yYqxbCq7FSij7VxGAF8uM2E4AGD7T3NgKqAMeGMwwJbubUpdywmMU5LuXvbC1uQMAzNq3pPwfXaa",
  "key39": "2omY17vcj2eANfDonwEfQN3zRn4k1ai4DgicuJKkvh1w2go9QZvE6vAejWZqzFM5dBTiWFQF2fGYsuJeB5GxxQNt",
  "key40": "49zz5wGDhDksxfqPEDwJ7Akjw8VJdGNhsWTqpTgJNc7kt22VtD4okin8Gqp5rKNtG2ZXUU1NWV3MC1RSLdcQ9YAs",
  "key41": "Ry9zpPViewCSHTrZmq89TPC3Bki7Azm13GsjwBuTAhFTCLx71f3eTrSfqD3zBBbyUudWbRQjxUBB9FefsMQe15P",
  "key42": "3Rqg3LasgMXJdjVwgdPjt4BnCyznd7fk5VQNTgtpVR5oM15ZLqC7Ut7BWywywBmcL2P4jVvEeUQFEXoC4cMNFhTz",
  "key43": "4Aens4v4R79siV6CnXQiGmHUBdt94gEcmnGMMCxra7uRuN5gV4x4UbKD2rwqVLia4YJhm6yJwCRmpFveU2FjA79J",
  "key44": "425zwjESj3HVAEdGdtHBpVRu7x3DwKwknkHSYKcbZJuKgBnDtGHc6KsMxWNo88iyg28bjyYX297pDBdHG9Ehaog3",
  "key45": "Z9h4qwXsrGdfuEkGGH5S8LdTjTCwgUZprfD1VoHRtZ5rLetqPGufJPKcjxJrD3WNGEc3bkqoMnJaQJRN3ijk7rd",
  "key46": "5sgEAjjtpjopXXxm6znLZinbMSGVo2RqnZYgpYkkpSNjF5g1zu7SWN6oKWMJWRCfh2s24PSpFDtawfED9KpqaRkb",
  "key47": "4epewxNQ9be4Z1tTvgGRVq1csD6tZMLEJ76LkgSdrR1UN9T8oYeydCNxSFJgz9kzZKCFA7EhUFp1X2DfXu4DZpKG",
  "key48": "2D9pDfBGwZL7mrJGraLTwoGrsYvoS5rKFMJiryaTcc4ZPQ4hmSkGXv5tTQktx3GBNXvo4z8UYQye35sWXfAQgKwt"
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
