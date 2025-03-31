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
    "3mGB3UNwXPedXf3yU9W6o6jxQQqPwRwyzeg9QLFvTbiVMSrBa3xS6YFmiRBH4npeXPV36EhyUFpZx7EHJGPLezeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zvqD7Yomyh3v4ubyzgcnK3jeY61ZqyatkTjaWYPicMJMyaFR2noDk2SvEZqtM5GhfSu17cFwg8ro7gX56htJoq8",
  "key1": "4gg6hW4hWhbGviJvH3GzM6gUtvggZZiJzPb7r9TRsDntgNeiLmnQFd1Ea3m3uMTxx51w45EaKkTPBaasqXZayFYg",
  "key2": "BgyjsUYBH3w8X2wJu8qWc3kPBfLAXnzCyXRQhtVUyU4Bq9PVKJbL3w8W34a6njeaoYN3f6iNxjbwTQXFhqSyGmn",
  "key3": "5oSv9XkKuC2xiZEfuF9PU7Zaf64tBPR3ELxEefj5mMs2BFBXAwk7UoeNab47RSHyD8RqS8CSXEuG3YdZJN18oaD9",
  "key4": "2APuaKnZemmAfJtVLWr6gQuVkGJ8p8ND9AwdEQmodFqjFTv5i46p5DLAA4SdzUBoFmE9LHUohJHTmhaELr8FJ53V",
  "key5": "5J7siC2cr3GPctvdjcrAeRtGYBgYGKYTabJJSejvAZRTRELTVv6KgqFa81W3fpS6JtMiYweJg3knuXpsGexS13t5",
  "key6": "59Wj4FQLrW8d4yAWmH1aWz7oyJNr9YrCkxKHYBfng3JmyQfXA3DvfyB7hy1YCeGomE5AeN61mv7PQAr6ri2dFjM9",
  "key7": "4Hirqfbtke1BDRSbYLMgjz317Hgsj8BE1SuLu74fUsJw7DEkeBzFkT6hhv36v9iwaFMtreTJxZjDdxphwp6JGQ2n",
  "key8": "MvaekGcyKWdbhxWsYnQiBo3WV8j3YC3k1NQjoAZ4DhcQTrSKsutBUHC4DEK9tvv7Vq1LemtVZJKosPhVCVWPrTt",
  "key9": "BKdL8BaQ17pBZGzYipx66GAtrRP8L3oG58Y2oeck1MRDY1Q4Dr48WNzrX8AU6yztsrZyuHdfdUqB7wTch95c2Jy",
  "key10": "67L4ssswSv3PXLjQDSV8Q3a2QubGbuPKNtWSxs2nG7FhCcyGewQFLcsFfgF1npfJC5TSEXn9szWDsHggYJm2i5Et",
  "key11": "3paQCvXZU822UTwnBdazovVDwmVMn5axkgdmg54mer5HGMQEN5mV79KJzV8qfKUry575Q2QZRhYEscFKLK66Zu8n",
  "key12": "47BHc55YuwHkQd7kqGzeXyE48JTFXYTXe68zyjbBcQHwjusF3rX1mjcVkbo269myuJHdfwwNLXjwTpdeTgnbw6Bp",
  "key13": "2xsrgD1pxLxhKbR5VioiQAFfFuU2AdBhYivdaxNc1edMisnK2JTpUoGnP5zMrTP4trNhEH4JrhATEEacHTEvS4av",
  "key14": "22Gkvp6KwEX6vFHr8cvti86d1zTBA9JwdysPmozq6fcsJzt4JdsNRpVD8spTDnrqrss6Vg84JESeCMKd623Tp1G7",
  "key15": "3GchyKE5pNzwMdcCWZPXxcdhzEG6eFBmmQzLiFVeocs2b7fuyCHDeaaxfrceKMBCQDVajQBFc6sNLwwQt9DCcXCV",
  "key16": "21bStGG86zyrU9BobFQChBtcaUavNbKUAGLKBA1QXEAt1c5XFBujMPwWrGXkEcsprKs4cZH2FCriuiQEJ6wZBDhX",
  "key17": "4jrznDTLMcbeezoLKbUrGKzYVQYgmienyAuwB1zbpZh7QyWf7wWVad6twm7oNLUjJsx6fGXELdQLASsVQd1AFiDJ",
  "key18": "CoB5Afimeb5YwPUKWy3CQw3B8QRUQyumeaaB4JLqxHrHq8Qv2A1QgD5Xq3HGvaWKnFwHwpdishVUBUSy2r4q9T8",
  "key19": "62biz3Xw6WdZDgoGLojjdBZbJYkb6t4vWGPE565CDrTQbog5GmqsB4goQm7hY87175C7pEasiPwM7hWvtriRwSbK",
  "key20": "2RR9h1ewiRfc9kSMbKivmLXBAwo3oLjETRoLFyu9mPdUNfQFwXbPc6HrrsiTPCvxtf5qaakJAD36McPbsPLtiv7S",
  "key21": "5ACTEkK8ur8Y6JCZs8S4qsGcTMRWzB7kEjSn3pK6ikuNgJiphLzEdwbKJx9ptXfnYQ78BQSZ34yGphGB2eGvSNV7",
  "key22": "25MXoU9wG1txVAZ77HULPyryNHehvNdCyaDJvez4uNtC7eVCev8cnURKG38emszJXceQoSAofhXMqvJwE4YxCUzk",
  "key23": "2MDwkSnwHDzuDjPPFzP93zAi91HMDWdRWnR4u7a1CKwnUdjDgYoDbT2t1wbFZe1PdHaL2YGTfpT2GcqDfWDWsVT2",
  "key24": "2qWp6SBn5mhKR4K33p9eE3DYSST1nvbix5tCURYnGscduBtAdPCoTihFgL5BYpReJFqMLuWhP6NGdLBcpxq7q8z5",
  "key25": "EajNocXhTKCfjdmyXGT2BCfJLaeLxF7Yv2sdC1U3MAePz8zeU3UonZcorT1FAPrKEpyfmT6ajL67P8xvFnjkPXm",
  "key26": "4h2J6LaJZ4wizdozzP1zd7cmkE7882iYkjFinNfLiw53pT7NjcJq7q4tXXn2dX3mGtrjDMRQ2neexDokwYJkN2yK",
  "key27": "5Db786aKqZGvmFYPFfXrMp44xz1HUfsF9VKnhFfJ9BgCbtqSeU18tszujdJH8BCQ9drDGPmgcCPAqCA6bzJhDHTP",
  "key28": "3cp34oFzWoorxz4XKu3DJ5UAYfwVohbkCv7L5HngCDCKkJiEpJSevNdq4xZTTVEceGQQg8tMJiuFDUu4vzXCmYkF",
  "key29": "337tmjfixiSna1QBhdxCEeEdfBUSBcHFadriZBWV5KJqjeM7Ybq3Uoz7Pu3QCMSd7LBf1zGp2xvzdhdkAyUBVvTj",
  "key30": "5kVMPeBRFeAaQXwLiry4ML2afp5MYih2kjEp74ERzh3q99tBVUyWNYiddrRQ2zJ5P6mpWErcednSpmnxnkvwBsU5",
  "key31": "2Hz2cCLWLuyYBGWjN6E7HsQb68bybpKzdC49mEcgxy8N13FuWRichobaUgy9gBuCMR3izonBqX7MUzwXM7vy78C1",
  "key32": "2YtTEc28FM66gTVBymEJ2VPXtmrbFyjCnLKTj9ADENzBRzbbzWVbwFHweHA3vp4MJsjU7b1bwWQQHChF5zYwJqFJ",
  "key33": "4oWL6byuu3fDtWtLJMfAgTBLVy9uhXkCagsFgaYtL11nuNPhLHdaR8wR2GLfbCVYbjaaFHD6i4MEnVV43d9qatr5",
  "key34": "4ZmwczUkhNoq8YfcsUdrCqs7jVX1V2U5tpM2zQc1paUtPGSRDxKCydh7BNT1GUm2dHKqdXvkjSBNrcjyNUxMrUAH",
  "key35": "4HazfZou9GNbFraDddZWh6T3444ru5C9vdaJHr1PWDFnmmjssxaoPCnwGXKUwJsvGE1GysXCpaJQHu1GJAv3AhLS",
  "key36": "2vWaxmHU2dhJ9siEYYMezPLWcfGeY4vzbxF1iDveQ3dguAikLeX3gEh9BicxHSvpoXnNSLeQFx84je73RQSHkLQW"
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
