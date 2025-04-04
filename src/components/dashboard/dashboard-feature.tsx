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
    "y29Rc3x2QmtE8HADi3TtRPgMcM2Ra8wYHuojYLmRtrbzTpsfB2tLNZV9PZkg9DccZ74qUsD1BUNoZzwxc3jsFYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBoqncVovXsqMVCuLmbwTn1YGt4GhCiZuYLkb1CsU6QgHhqZq2A1D5vWsMFc4aJMyCgT1fT1jhaYJhWDfu5hjZo",
  "key1": "3WRxUXQWiJo3GmRPkAm54ExVXirArySC7xuqjDP8ifQJYjiwvmAFoUVBcEbDCWQ8TGAbBmZz6pQuB4C9GW8Wak2j",
  "key2": "pH62sBMwv7eFH9jZFocuEzJy4pxpw64HytyF3XTrSLemG9nB41XRmPZ9MAKXdsB3J2ZYmh1yRdSMQ36FV6Aj9wZ",
  "key3": "4woiqArijBJ8LB1o9ZrWzxmSEGNLsQoQH7n71ZLiPFv7BtBy6PK9g12KcxC2M8CCTox6jG6pTah1GKSMFcHAqHR1",
  "key4": "3E12sQ356e6899CycD7UmXghB8TLktxuHUZhvzJq7cTnxPCGVgQQqvgWh73yF2HqAN6DiAsBk67MyXobJceEXZMs",
  "key5": "59XQyZGgbT5Uw5m9uq2D7FtVeRSQiEvYWquhZXbJWKTZbyKvsci7QysBpXpGGAWmRv78qcygUhQbokUV91ys3Hoi",
  "key6": "66HhaGXFXSHjorRYC2CzJT4BRY5YvPjnednW8zi46W9bRA7SZTGDmJF6BiQHZ3PzuJuvdLwUYKwHeQbRb2JaTFd7",
  "key7": "54sLhoKFaT3tKrA5LsiUYNnBSbCTHS7MCv4L4gTnSgqzscP3MY4Usnstwn8LoEoAcHnzmg343LJw4YJg3XRtmsXc",
  "key8": "4UVetfDK6xzXcbd3cCdfsEnNiQy3Vh3793EKW6QameUoPFcnQxXZeyZNohmgz27pYLKVkcjqFGVi2zW9wx3fbBTT",
  "key9": "txaatYBPEUetUN64gVPsUxhHMcZd3Hdhe66D4WFbmTkSvVd6ipsQM1cfYWr5VoY8wKuGMNNPJgKKKzy6oBPFG2u",
  "key10": "3ydaePb73K4GzNRMeRqYKsteNY3YzJZBUvtJ3mDho9qMe9PwfBTPftYfdhZa94rxXv6FxXTmG4LEkVXidQ78cCYc",
  "key11": "4HM7Tixb4fN6E7pi4jtKu2RQzVJvqbzLtKRaruKczSdvn8uvCeoCUdJnnXPVg385ckCKYUAreaFM88h6GvZvpWEo",
  "key12": "42HXsuHwtikPXBPbtshWAqNTeuPDzDP9DcLsdC1kFB9jU6Z2dHjTCqMm8sov1VJKmVbfDDEVSFRUVs87r6HDMULC",
  "key13": "4Wwn49AYbDKHjK2jfiRdR7ZaE9h8nxPtPge9kfDUduHMidpaNTjxmaLhaYoKtzYJwLnB2MhcypEBG4U2NY48o6sF",
  "key14": "2tHHUcFwzsuew5jGKVWgjg2Ards6PVfJJVpVvjaRsPAYknpxf9njAvR6nqu7FywMGV24n3EN5V7keBxUF3ZB6xHy",
  "key15": "35sJKsWaE2djcdJjmbZwpp5gEg8bGqjKX5w88iisnZeWUacPt8j2qwUVdJnv5WviurZYMEAHcE5UmnU4X3Ge5BtA",
  "key16": "4FZRj8CwE1Vkc5jvLqoULWehgeUnj7LKDjnEmvN2XZwhi16vwmg1yVvGzES8TsHdcz9Aj4tZJE4n65oGgezVTt5N",
  "key17": "3GSojs5x2r8p5r2s4sAh3eATGaH8hNBMWpTCKXD81yL1vDmjMYjfUXZVRLATVUR6pRQUGuApmvAQVCXkh3tpVsNK",
  "key18": "e8wFx95cGsB4y3fZ4NgMfFDKUC6weFFfWxscNvq5JFX4ZdTDCcgCC4F9gbQLMzixy5SvRkUzJq4V5tpJPaVYq9V",
  "key19": "5fS7x8U37jY8BdNpqiPgyJ241vXW9tYTXnqEb7DvEvCqHEUeRDo1pLtggHbLKQVfPesHpMhptJabErLFnAz36SVm",
  "key20": "8t26YnjY5xZPm8h3PFPEMXFhiUfEj7skzZi354gtD1i8XiWEGxDGqHMrLNbJSEz2hjvCoAn1jdc6syvARG2KpPL",
  "key21": "2MUXxq7o9u49S5pZUCQZaR2inniEsZAtFBTYp8YYdnw55HqLyQgPHky7JrxpdXUr65RHSz2caHBjLTUkGpHTUdu",
  "key22": "2JcRoeqFib5pqRaU7A1FLP5CbUg51uLxvUhqKiTwv4jDjVQkmvdh8Lb236Tn72bNZZczxYYimq56KPykbGZhZwu8",
  "key23": "PMzhCm7rBvGmALQse5QxPuSkvNgSW4o1okhMCmdNuFME95LdhnQMuio5BH785VktUGfZTwEFtX743NCRpNGhdhq",
  "key24": "58fZxgJVU1MGftCuHAPp4vtqs5C54LMH4eMuRKN8wygnqdzi6Yb4VaJhdge3frgDFwj7AakoHpNGFvpKs22f5R2C",
  "key25": "2ZdNrLNWm8bn4zbtQZDYWn78MARmjsrn4xKFBV5R7aM26VuojDdNRhXGsmgtMzt12THVYYuRuFxEJpF8mAWyaVjL",
  "key26": "3yM23G12TErc7pRZaBbopJJ9FmbeT7CEgyjGcsBbBadnZWPwifhW5KaxcVRAiXpWesjSh2Rb3FxnxuaXsxJJsVFM",
  "key27": "3vuWuT91gXizVw9irreDvFxkkg4Mgwn1H8iFybSmjvidAbhCDU8VeS3XMYUYLCEBGNvb4PpcR84mgLUwD3tdhtTH",
  "key28": "4L2JpDvEuFcyrfjGfioyPCujjbt7tyvtcneJhrD4ucGB4bmNhJ1DrrkNV8UeRxerUWu1ki33mykur7roGLsHibQu",
  "key29": "QWmVYW2iSxgc7oNTAvZVe81Ksm2dh18Maohv9RdcEySrCpcN96xv4efNjrk9YyYoHYoEgLrFgT6X6x96uf9FZ4r",
  "key30": "ds3s63M6RjfDgNebCZFnNgPgBvX3etxxJqoPMxFFPVfPPrpqhPPBwkFgcxF7neXM7Eu8DKx5mawqWYEpbYjSutH",
  "key31": "4CMyVXSPfdj2Q2N1DsnDkUsoiXTHUvvTE9LPXfNGX68GneB24NepsxC1KiuSFgJAoTgFGY3kUSoErDbFPMdJBrfT",
  "key32": "3vmP1wWmfyWHt6RNTouJXk5dYD4teY4oWxr28vNMYmzkfGuPu6TdniXBos5hjgbirQYf9ARMY1vwWMNFbnL5VjZC",
  "key33": "2j54Nh1TRhivKmeUaHp2N5ufwsYZ4c6Am3kpnKXAuS1FVPMaUGv9YGR3Didfz7WXEspmVb8kYhUEfqDqoYGZ5BaH",
  "key34": "41yrhKzojgqjZfjjtn6Xtge4NZsCvgAqVs6CEzMNXmJavHTQYztaJUSge6i8GHgoFPHDzY9K4WGDdGmi3BjKczbi",
  "key35": "sjNFgPXwx1NbhZ2iqqUV6Kwfva41R4eqHfHMTSbGDoijHqbHC2uDqXmKdGn24uPRzCm7prXX83wDFanvPYjPfAT",
  "key36": "3uY1FcNzY8ZtDppBHN84BA9JfHwQtNnZDC9hV6fb3G2dQrk4E23UnjfX2XxpzAw8Ajkyk8c5H7FV22R2BtDPHviu",
  "key37": "3oBmiFmcnJFFqzuo9igrgNDEjos7sCWgipjt6G4QnLFyDCqSM8XYruudq6c5uPC146yWVMbiPLjasDZ6nHPsfrpa",
  "key38": "5QSYoaBgqAVM9sVHUymigbJmKW7DkBPFY6R97qLWRV875iM4iNv4w6KNun4vVNBT1px2XoKF1yncNA9F4Jb1SyMP",
  "key39": "2pphFWr1R4Yee76vvXx56Yh8gpJMsFHFA2f3aCGD6s1Uo8MeFR8Zkzk64W8tvF7TYHgoB3aMp6og1pK6YVuqsDgv",
  "key40": "4w5QhRwJcscPpttXXJzQ4H9VJwjDcNESunxZva1miGnuuV4FSAnkft5xsTHiqGZaPddKBwWN5tu67QT1K2YSdSiy",
  "key41": "5mQGUTvxSQMrhkHnSy6rT3JJxLb2chNqnx2UJfHjErusigCppCum5L8Qesehix3BbCWvHpWHJytdqE12C3dLktFC",
  "key42": "5xTTdx5qR7NTqv2sDWi2pjLocbyJMQLDPVw4FWGiSTJHWJ9WisWn6sJsBvzfp9fAKfW3VVDhMWvRFTDhiZNtzU8N"
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
