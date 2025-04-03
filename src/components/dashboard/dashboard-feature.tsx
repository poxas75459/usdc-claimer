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
    "5zQ5GVgY4F2QGc4FBFigSaL75c7VrWkGWVumfRTwXBYGTMURcBMsrRFU1uW7wzQ6GGa8RAwq2KKWUJBhpBu61sxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fN4pvaw8aSe5CevmN5CHp2kQ2E4r8V3VF3iznMg4jNbwAVxZpGS5s8aQg2mgYxSMruP4JXaPNC6pqAXRB1HTGyf",
  "key1": "4ma8GmiJQMGhed34z9zi9K9BA6iY5wDsGohqgbvNxv7JUt4QJ9ZPSUNYJDvt3zMYYU7vWhKe3GmPjcQuBrrub3ho",
  "key2": "54tjQwrdQzU1eE33N1cdoyr8jti2XLVjdizPhGzqjCyEF7ohJKgeER7WKMYmo7a2c2bibjxuDXDg33giFHBzJJko",
  "key3": "2ayXJLhnM8VdFFnkujoaoZwAENqK49L51t7BdN3zZFkTMCPpRbMjraqTMa6h7u8FAdeZPWoz2Uh1JidfgxxbqR1E",
  "key4": "2LgaBAUMvuSckPJ6Jh9aDy6oZGLXKWb36obfVH118cBcaxwCvMdZGzBbbiy21zenWR4V8FRVHoy6XbKC8jmuz2VL",
  "key5": "2r44Vc1zuL2d7UvsYZZAbV23Qr7qswLg7bh8hnM2ULgXCugZz1sMHBjpszKKHzMXyQogZSegsVqDdq3a7xbiPHS3",
  "key6": "L913nh9w8XxkUd4yCk7diBFXBuGEJT4R8T612q4PUaKXU1VTJSitWBHKWmhHHm5BnEvFGfNGz9mY5dvMyU4Ltt3",
  "key7": "2nFx8petqKARV3atsp3oEUXwZ3nskFtddqNiDxRNvpyjJaQ4zyF3cGL69VTCD9ZutLGCxvqxVbmzN6E6xxLoyLUP",
  "key8": "Bx4Bu7RpiAJDEVXZKoHUP9WB6EwAM4phkGtc2hjHjA7HWebmwbBwASaWfqJveUwFjZJBrqn4Cs3SdbTnn6VGsG9",
  "key9": "AYDf8mniuZxHukfgqviXJRzC3maJfkMry6hLq9M7iyEMxD3MDgq497pX6gqWrfncuuq5ssmyTiCdNw1iCyed6qG",
  "key10": "3AB48RZ8QNngCvxP7ekkDS1CWnatTJnc2cpupx6VBwxnFDot6hdu1jMohWCDSsyui6a8NTkYRd8NyCPKDQRNbAb",
  "key11": "5KfPNoJZpNgpyNQV5qNtJr8b2y4xQae4eFCVQ99rfkAoFKGsdxhsHmgcCWvRZEuTt7R4jzYQRnqofVbbcwLjQCzg",
  "key12": "52DroPZYFuFZMQn7h1s4kvmS6Ja1HQhjYCMcJcZV43Ln4hF7AKCcgQv6EagYE4Voy7s38KthEfPTVmAkv8Qg9ot8",
  "key13": "4PFdf1pFCSdjCqxtpGRod5SusZrYfQbYnAZ6NTKuZetCUDzrUJb2MzWrrNkJQvJuxKe5wUtScZETS8p1xiK2cRAq",
  "key14": "5YznkE6EwXUzuk6fo3uYLUgmSCabjchj5wtkPa955tPL6Q7M5rcibaXuU5EW5AnzEDUALVJEx3bESoSGZR7uGx6M",
  "key15": "pfMoydSXHWkNwgnBVmZTigpZmQ7zWaD3ZJYxSF6dgjUXgYYqqViz8dPVyGXBMYFES6rxnhc42e5i86ZewXC46yW",
  "key16": "48XdFeH15zVjGnVuNz5ZtmMq77j3VX5ES2PN8ZLtxWfXhxURfxWcT6QhbF62Gvqz3DCpSZbGJYkuw7fQu5htXaeb",
  "key17": "4SDjLcyCyE3v41s26f4oS49jy6RidxfPjodfaraf1k4xTqK36Tf4mFe55CN8JKSHm4LpAC9cGgAwzdr56tVdQEBS",
  "key18": "43w1UwMvmEh7DqsgdobJYmEubSbxAyFH6pZMWjn7rmcEUmV8oTrre2LzaycRZYwPiwfgQma359w9DuPxj4YaQvn4",
  "key19": "3w7cJnN68Lchqy27Vqj4SshLvfsCdjq4PrGxCEGHuAczMsYsnR2gKqqUvpmtmYPWbAvreLSsNyd1dNKDJkQJmpPv",
  "key20": "zBGWeJzWCNNyshZ2ZbLb8AF75j5Twr6BkJrx6jaA3Lc4X77KqXZ8ajXkSVHvAzPmbWtEDtGAeMYQDp8c8W2Tefd",
  "key21": "2gEQd4dGR6U4y3U9Y3bth1qg72pUSsgvrh3tzxUhgRYmsazYGDBhDP2R4WX4ZFne6C6rrzyTic3WsqZGXVxDXXY9",
  "key22": "2aQQAo2hMSTcYc2nLb4BaunZwAZLz63aWd9X9A89FvsY8PDaadczg4E3PFJ6Te9h1xXp2TowrCCwN96xaNB8dYbf",
  "key23": "4Zytam3c42SywXHgCmqkJdHfGrRW14YWRUTaD17ynV6zEZsTaqVdyBVkSznCrE8jA2DSoDcpFqd1tut9cmgwAzwk",
  "key24": "4JHsH8wzc6Xm6MJiG284pazaRxabdntpgmeBVGuTR9JcPUqCGKFfbQDyWJWLAmhMJMppMNATUSdPGtqHbcKtmiHW",
  "key25": "5rWxP2Qrtk9DLFfvWHe8T9Up9FuzzebY1yCS6FbZREKfZcmusbsG9Qjb4NQ1TL8vxdnTGJ7ZA4Pwm4FyxdZaPXF2",
  "key26": "2qwwqmgVficCPSSBpM2Jq98sPttFThMfStUyqz7bAYXUtABuQhysxWgX6F6Nfj6HwYrtEt4hHYXVQLFs6Wmgq7hM",
  "key27": "qwHtVVLeAj9ypmp9XQYR9XX7DFbC2a3kMzT8MFYwJf8FFT88XdGujGidFNsHph2NqnwuWTzZxCkfNTE7NPNTVCu",
  "key28": "2qty2w162SPNnonauL9e4eCbgEbkBtL3V6B9WixKjPm7N8dEWFyv23ri8JdcLw98DzV1FCWJkZcdDrNbcT6msJeq",
  "key29": "m1cw1z3sGL6KA1dh1Px6PgazUVZBdzp7NdoHb2FuMuXrmPBehv21qTjMT7UTwPE2xtmKjAHKfWqzbW4bhbpZUas",
  "key30": "LxR6eRcRheLzV1LBDXc7zVeUN6XESq2uw6oqFLxGLhhAgfU3MpahfZcqQCWGNrkGmepqYRgu3hDEQ9GbAsowPKR",
  "key31": "x5sZg1mtxUGuUMwL6jN72CgsK7BtRZXuaTbFCVPthzPSPNo8teLwE4eihLp1XoiYoonDTAVjSfxbtnLjneuZn4H",
  "key32": "4KKtnRBuxtGXAAiSzoX2b4zLYXzmArygL9Up5Yvg7LENZciJzyJxoj9J6YwUWM7hDeUUyZ3zWAziAFLCywMgh2mZ",
  "key33": "5oT9hmBU5aWKSChCDRSdqQ5kj8WtByWH4VegTS18gwW3DW9aRFkyvxaYRHEyY9zTWSCxPC9qXEXFFSsfR56R2c5C",
  "key34": "3vMhqdijbXvGdEyYuDHh97WRnR3BHumS9JUbkZhTa1CJUvNUkdJnuPXiBWLyuDRUAdWiSut3MbTcKprnBbQREyj1",
  "key35": "4iYq5GLALAY8U7LZUvjJ3Cbi1v88iN9QKkezUczVKzGYmWfP6fwsb68vjUdNhf6z9PoWRdKSb4rvaCA9sUhRvxTq",
  "key36": "2t1LNgpgV7XJ9wBJQ7DQyxKhP3gL9r6b9ruDRNXS28JNEianxCtQLEi4yPKAF5WNhUvtnAbi7YsrqdXdwe3vcShq",
  "key37": "3cRCgKjkAjN1Q9JnziY1EigsYzKdQG4xw4cwKxWRBLnnrbvH6ACcPG8tzPX6v7yrhXsPqrW86dtBn8ftBsfuijVP",
  "key38": "2JTQ8hRZ3CL8QXrA7bszSuVQZGEsnnTyoMEDSG4VXntqn4fdNQov8HNS9egoNx2HiBzKgjLALh9dsNFokw7Z6xqe",
  "key39": "3ogGn8F7pfyyKkgjQjguai8voBXFfecv4XdgbqxFwJJRTzjeSsjjr3NLGJVqQ7KpqWmdQZ6KAEeVEAmzvzTHsyrH",
  "key40": "3HEA2cyHP3UrmkLHW5t9dZsW4ySkXs8GE3H3iaZEnQYevTo9GxjyPJRwtscJnN2vkMSbiUkxVBm9A2NKLu3nmeY4",
  "key41": "3Ndi5dUtE5f6ejXwAhYxzpqpqffzLk3y78QknxPKzHAwgSXy195CrFZU2KegPfZeNkDB1wF5vVrE6qWDh1yPLS81",
  "key42": "5j13i1K2MAE41fN3WkN5kU1yDn5YeUCEsMYtDxvznYM7V7iBJVLMdX2KsgnzarZnBjngnmBHAJ6evnPWUQdYwaiP",
  "key43": "3hHSq8JvNMwsJgPMN4YaoP1ffRyDS7CnXWvQS5M8vLsMnZUqn4oJQev1X7Qf9XncWWL2xRc1Qutse6GbbCAAKsAF",
  "key44": "5B7vbpCa9kLubiwZmhtzCts8HPFaXAvKaLZiMsNBQJzPAvkXo5rnXsawXtqKU32MaRZDmpsGBgvwJhk8W1CoyKUr",
  "key45": "4QBbth7TVopnpkQ3xEcrtKyCdwDiBHNNCGKpcTp2PBVubtDJoBF7FnBdcycmKQNuF9UK9DaEP7ZgEPEL1FcD2xBQ"
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
