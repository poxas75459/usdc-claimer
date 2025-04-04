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
    "41XXFDFEy1sEq1bxhiC7v8G7T8nZdUoqi9iwBPKbEN7hbWiZUYiuv88b3yG7EKzeqyzWLMzJ8BZMJD3AbHwdbmFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CYCoFG47egmLHvyPYc6nNBEWsU8XmJVrNteQTEi8oPriPpaTTrtGCFH2H8GjuCJCSB9ZU1TCFzqJ4H3yqoARYgc",
  "key1": "2g3eBCYtPx7AMsSdCn8QSX2JQZJrx3r7sBm4vgy2R3svoiZGjG9mrA4wGMExTESydU5tkLC7K84V7AAoPg7yEnnS",
  "key2": "2imSSZ6V7QWXmmprvUqoDP4msc5AsMhjzToypoc2GkhscQ8uDrajiKYJMfi4rRye4xzDt53dk4mkLuUhoZ1QFGuV",
  "key3": "54fAKm1Hgy3oukp5NPyHHdAbXAt3rS9Miw9j88uYqRkFt9nvadtzjzTLo22J9CgjCvfb5Cc7UDGveszKyo6fKsTz",
  "key4": "35DEHNaE5MsnN4xKckDxzmWNswiFSPXGVwZNERhZYwQ3242jVgWiwtRa63wZmGHjxb1pQBxJr76wXFzGvjaLJUB4",
  "key5": "4oSLRPNN8HPnXT3NbgaFynTUjmtvQYx7yuMYPjmPwf8fLhfJh3JTKHD4mz3kJvBDvDaFXjMtuDNi39Y8TYqP12Z2",
  "key6": "QFkTqw1FHbuyu8zo8RQk4FjNwhoDoPudMDMnNR7XcDhFTJRWTv4qCg4Znt92Mbm4sq1j42Ft9s78RTUD48EtEPt",
  "key7": "3WpDoGfB6NH7ZwCr9Hti3KL9U6w5JP53ZMQ5xPJvoj3NKxP5xyaUUECoXVM22DAU8nkSvC925Sp641eZ5XhjfZnS",
  "key8": "3XbWwUQiNkBQGwt6Xx2xeSuKREGCn7mTR83CxhZbei4f7tXiUpCJ5mthhcBT4RjGhvzwSP9VqM7dBHEjV58sfY5x",
  "key9": "3wjqipiL5uerGUbt2tdsLL2uD8sohgxy5Vio1oq3ceoAMHryMXtgdT7GfmYftfqoDAyscq5zGGvN3jUmT2CTjTa7",
  "key10": "2u6ssx48nvNSn8Q59LVnak8teRVK27ky1gbdPbE2xcM5fagPCgqhQpC5znwmBFpEA5JBER5FB8Cfzej63k9KmwT",
  "key11": "rKBzLNK7Aoi5syDtm534JrtRJHEYhuFQwkw5rQ51fiUTbLPNpqqybX5mBN5zD688f3CPt5LJCDyi4vfTsXer3PH",
  "key12": "bUWzHqw42JDu8X6nsern9QaSH7We8bmGu6qtpNrCiNBLve91ejB5hhvn8kHwLatY14RadHMrVjPvz9Ugza4iybz",
  "key13": "49zP6eXXnBNeB3xpFjsReuF8oa14pmsXvda9F9aYsazbtRY4nGk26vUgxUQJZEWVGMopr5378FuPGZonHqB8Gp1w",
  "key14": "65G5tZg8MNoBN3qUNzYdsbXv9TgAc2vdaXwuRhmYJ9AGEbUxuT7HRdQtQSmF9iHnP37Z2m46diTi9SuRaP3ghGnK",
  "key15": "2GVNF4FcFn24ApodvDgjm7bC2ua4qUYdyZ263ZidGj3osEvAk8QGKrjekeDMaV7p4LPfWuEjSUttip3rdjfzekYa",
  "key16": "2PJDg5ACKsoedb4kieFhVb7G9vZamhWCxqYL6sshVWmoZF2UpQFyUsBmntnRKqzmGC2qNFbf8DFiKHCcX84RgrzP",
  "key17": "zMHkuAwFJEprJGzeX5BGL1AWfh4f5tJb2AZWtsmsAyTJVGqMdLvg3gM5dGEMTf7H2mJZxQWzGjJXHgyfWwavxJj",
  "key18": "efvoM2HEmo8vAEZkvNh6akgUrs7YpUiZ1NLahN6mUoYdh95kM8BGd6qzucnac25EAayKi1ahyeU93nk3GAQvvnw",
  "key19": "5z5KvNf9rN24ppPzKHMZos6oVVdnir6oHVgXCnfd7qbVpBLgbkGYvNvH9u7MTTaXeT2Jcs9tCduZkVgQx4DtdBfi",
  "key20": "2Tjt2CdTbH3WHDF49V9wbovKxxvieWowma5WASV6sqYT4MJvimj6mSZHEQ6Zbd1fYBX3zpgG7LDMbGJkaK4K5UKt",
  "key21": "3RDPGsB3DTzArcZBiPVJ8q3Fs6FeKQuLwiJ2UFLsxUeTsg9qLGrfajp1w2ayDK6YvNeNx92aDZhhWpHQXZ5vRav3",
  "key22": "5g4ueWB8rcA65iD6YjG9nDQTeP58tWzvBeigaSyBAGrWdrNusV4NvT3Kriz8tBNxfLyd8qCNd9vN9awspJTnza7v",
  "key23": "eAHSbK5jpzXbDqmqqv5FtxCYQKW728Xn1gRqevrCBFEQxcmD1bWH1MMVmKAwHxRQDV4gKNv5kHoSe6VkzBQ1o6r",
  "key24": "U1cPB2axzP1n7GLyeXpCYmNqyLoKAafGJinC3mtKa9gpxro7Thd9Zvpf8TKn5rvGoB1zsZhYnEU9Bb7ebwhUVuQ",
  "key25": "DzjUXz5xrZ2F22EjHRH2WqfiKbsEtnRKekbiwtoux3NiPFoeoedoXKAjkhoAW6noiwvD4pTvn8FxTy1NcY4ynMs",
  "key26": "2pD8j7zZXzoAdnNkXiHgvMdguuTMP73j1hn6fvPZ7bupqki63UPm3xnTtZ59FEjRMavhZM23iVgmgsKaET4WmV5Y",
  "key27": "3Y8L5rRJw2KivDM6ww3mQVU1UqeqZC1PHv5x634aRTMxBcBSV4sqVEZYcwqRA7SJtrutKf7sRdLGvQ6tdZ44eGFc",
  "key28": "2ZbiFMBWxkV2BXVtPNv3fNov8YabVAypwUfPsJFjCHovTFpcZrY8MfGFbso4d3cvFn1KMQivQue4Awk8L1PQaiMv",
  "key29": "2GJyEQF84vCKDRPB74Zvkg9SBRJCp5RmuvLaSTvCKt4AJbd2dsSo9b2psvFwae14eKCvJbWgw6fDZFHxhzSfVrgr",
  "key30": "26wpLE4QMqd92muqgpTqZJFkx5mgD9WSFpGFkYXA6E2cyEvDCsYkNzbm83WD4sB1TWMsXV3D2BBshu7DjhCQ6L6E",
  "key31": "4WQEUeGK5U7PtYrAXAtprpzDg1SRLr3FK4hJs9DvKKHuMNaC8SLzzCK6uEzcZ1Q7dFDBz4gX3wvQsQioSfMULHyG",
  "key32": "uczh8etK7WqasbekvtHY2Lhzf6pNtNEg3FBuaWaFQs5RfbDEWMLsfmRHkn2RkndgoaVAMzRkv5MAwQNX7ZNmbt3",
  "key33": "2YvqukCFtxC9dSzt8Wu1T6JkkbkeV1TLSv4fAbcFAABiBP7oZP33mk9xfaw93gVeuSB7Dn4J3pUEchPKhFUUytbz",
  "key34": "5MYhD1vm9ra9NNjuSMcpzrmaiZ1kfWHYyYASc8nDFfuZa7DopoaqKEZeVm3xJByR822wKHju3HcoYMCuKdp9Y16E",
  "key35": "5W8Yobq18EoLghT8TF2UH6GfE2kPRmKWX5QF91a3qWSyLrS9bb6pAcEVSf5TrVmtcSEgg9JmfaBsa7ktTz3Wxvc7",
  "key36": "2pwxad1vDiR9yVbS3Sk24WWZcFiJpCtiNHCQRKGypYtABdgKjZoENmdcYDYnBZtTb8XfYhQVKmCzEgKLukDhjd3K",
  "key37": "2M8hRdPUMCZvBSi1ikr37v4nE4SzaJy5yRCjAKsTCSX7H4EgAGfjxqPVABANMzKqHJW1qLdsEnSSNpYkPyDJLZda",
  "key38": "x5JghMZKSS65Xb98KCK9owbyRaHLr9e8J8WBTukBhetSuD8XWLpCNc9L88rceKoSMtu3r1bV1yZeDsgewKkHWNS",
  "key39": "4NUfDQ7GV61LovGBeZLD6vJAeULXpiwKiqBxFRJiHbpKrmmgEi7GvaVaZJ9o5E4P5CS58Y4KnyRzZg3H657FAGfh",
  "key40": "2yJrsN1feMM9tYvJeVPRU9vRMEwzZ9VkNRFwykf6jkfG4Rek9byLpNmDKw5YMPe4NnABFKTn7Y6YhxjfCBhsTGD8",
  "key41": "3WEmAVB2qVQnEKtfucPiSFGok1esmXA8MQb5giarP1j7hU6F17NDxxYCWWUZnYGXrs7HDDRvyY3XPj7ThcKfVDQq",
  "key42": "2dnSVtBNaAD97WnqsYQ2ZA5nmvZBPbSmmgeNy1s8Y4PT1eaeccxstbPkhDAV4L7jscMyiSYr6t3Ueq3QZEwYxkow",
  "key43": "4emitsSY1TpWvmoCecEjxspunLYipPFxs7NJe9bqy7S44QefcVHyqrVzhe7r6c5RyRSbUwPVgEuV5Hk8A6ZjWExT",
  "key44": "3bn2ymQT2hjV58F1S5pJT5gFwqhvASnMFqWy6S2oNYkbzcmRgJvUYGwFun7AtdhYqsHVixFRVvm73zC6VrJ3LYXz",
  "key45": "5ZbEMJe8mq7hfp2iDHixVuUwuru13cLT7qsMzdrb2MKnMPHLjL6rkf2hCLXXWJVVnyRJm5oGyVFcguJ4J3RwBiMf",
  "key46": "5S2iHbDjXXs9DPQuetXm7NL6nc3vVayajWdyqdEiQ6uNXKvTjHKFizXypMtpEjT6vjUUzgNbPM9LboJ5oLnKqBxT"
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
