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
    "25aKCn8SbtKxGd1DTAqhdrX6SKnyhmXKCc3UMQYpb8AHYgG2munM7cCxPtdyWMUfiHR5esdBWUfPQWoYpFoYkEnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7AEr4vAeaZQMvMyuzdKTmtuby6rPoLahpdRWwYuuW94KaCwjuFAVisbxAGKjC9TLgyS4xC5Ag8g87KR5J6jiDu",
  "key1": "5mTTASCQKYt4fP2QqUzZQdUL9FszrdCP1ftsEbsKcURyK3eFDQoem8pmnpAJd7BghRitbovE2HfJJ6qKuFk2h5vs",
  "key2": "3heyxMES5KHv1C5x627sKupraVQRLXXvvLL2KXu1nmJPxjFtVZDJB5nbEqZtgEbYf2oqZFAGVXPUUStpkFkMcRz7",
  "key3": "5rpiAYFDXKgU7UxV218mcMJWHkw423ti9L7CBcLZGt7ALWUNo8V1cgZLUMikEPQu9uxSJcFzp16T8L4F6jYxb5vp",
  "key4": "3svottHQgcU3xUrfpE3z3NPQTvchUFoSaYq3RDLc6Keuqdg8LuwsFNLrp4Hka22JxyBNvj4d6cYR53toT6Xz7nG6",
  "key5": "48VSEp8vLsy2ieUg4JC58RiTBHLqWbyqRg3G8f8AxTYCv5pPLNWqNiw6gDc2nt8AZPp1GHQJeYu5TaZcLifhLTES",
  "key6": "4VN47yWhkxNrKmyTDTqZgTDraXQx7uhU5YUaKzyVPqXt8pNwudYFrVaaiVkhhrJoKbiidB8b4oEfbR8f6idf8as8",
  "key7": "2bq26WG9MofPeQyT6TodLUpHKoA3mWVcQGv5PhMayJJxforhWc1CSmP395MW1WgV8uiuXKhqWFbGqa1AgZL9REP6",
  "key8": "3MEJMoPnBVx6iCh8JDgPcnx2iNDTddsLpy4UbWJRM7t758dnnwZhDejb16m5vDSfRz58w3LQbpc1uLTqkjz5Vgsm",
  "key9": "3aS9jBnAddyfTf4n1EVFqLGgrGF8jk7QdUnN4vKZU5r7KiJoQUxXsLmCwBS27Trz2tCQjwArAdiusGhspqvQegbd",
  "key10": "37GysvWwu3AZx44jU4kHCacqsQJLffDwzvToZonn1StN1pBUBxLziCgHvQVXfx1QZmhk5sNxUBnyRSo5PrgCMCxJ",
  "key11": "2dpcxyJG6CZ9WR6CiZSQ5feF9pTr5KDyryttKbR6xoNXgvAjnGrmguBqDAhJtkY2NQQMSGQsrheq4QqyjNFyjswu",
  "key12": "UQKRr9DoRCWPFtNWsfQr4giXX5ydj6onR2ePpAVxQyZojvCoHoM1zjyy2i38voqMSLpBRmsNC8aRGUHyWPN7QbH",
  "key13": "52dpZAxzd2rbZKvsLofQyvFtdeCdZhaZNCQWHkhkmHpqLa1e7RT9DoYUbyZnytBVtexkegQhFivMMcuVgmchtm5d",
  "key14": "3cL5QDqgY3MELG5CNgkWpAmav2njw2HgZhQzand4pdzaRchS5iAuPrbKhXNPax1qhRjuQy8Phtitq3i7oxdxEbHC",
  "key15": "3Edo3aLvxGbqvfkLpoobGY2Wjwz4Vo7Q1rSNdqFfSpReU6pFicQeTi8JK87W2pP6QJJD8iGXB96wU5pKMMfQmNou",
  "key16": "5otRFp32Kp9emyCHtF3bmm6DzAondrXmvErJ7YaAdWzuxFb87xwEw6kF9DXR5BVmCyLJFKw4FnDjH5bZMKcEXo6d",
  "key17": "35Zc7QD3HfNrkJGdpDtQkGtdotUMzX1RUKdvtfRr7UZJW12U97i773YipNdDBzETaenrUSwjmQNQzRUyP17pFk84",
  "key18": "65MACVJRn7MMKycowa4z4qJdtfhnvuGXAE8DjPNk8NPip75Zhv5H9cgpaXwVYTWnFRCkFsna5yosLuriHapXsqEt",
  "key19": "2pcBQqniqUrfyyysgTGSWuwEzKVbRy5G6yEJVqH29AJPE7kqmJGU9DCVfr5NRQazdB3DpTaiStmMEb265CN6ZN2r",
  "key20": "23b6XKRoZDqtwjc1ezH9LUcudJbn7WASmiBWTCNwp9kx9opAs5WycnbEcUp3A2FsAcXe1oBjdZXT11KwcUrQSBe8",
  "key21": "dF6euQEnvVxve6CvShgww6wrVPGTHQGQmJ9otaapVXnHQmoA4L5uoEAfcJiTCnQLZDq1cyF21yG6Tp7k4MBGNK7",
  "key22": "5JorzVPxidP4m7E49qbNgP3J9cDqaq1yTRW8ype2DhBGMJzomZWNmCpTCUWdFyd6gxiHSSHU5KBDZRK3e8AHfVip",
  "key23": "5J94jwGRwkDTUfaTCgjuryQAwxcxwFDvhp54zvaFFX9rJ8xdUXHDYwa2QG7Xr9mabhp9MtJSGmXukYMCLoVByxVv",
  "key24": "4fKknYHSZKPyyDaBsnJ9rBbYfJM7wQQTrzH3nF2snXb5hSZXdv7i86AXBpbjiVQeVZUQcLjTA9Qc6jLhMwoUF5y",
  "key25": "mvQm5QzBWyAswnXC1DVQDtZJZw2CzPfTAVbpFuYnKUE3SmLCt75aNmqKGcGTUZpvAhi8ApdzGNgKhsqieJJzJ5h",
  "key26": "4uSrAaCwisk9UqBhkVkiAso6Sm7gBHxrpeL3Kt44tzT8BRd52b4dtSkAZ4L6mx7REEgiuBQrQExjAgiH4qKxi8G3",
  "key27": "4br5cdWT91stBsurjgEw7eoEWspiP2K5giXjzst38i8wRNGJDgoR3PVwQK4inSpc5Sg1vcdEwGPNrECtX6jUv8Sd",
  "key28": "2a2AN4LqBkLjo3c1EP8ugqPWuh38zqELrXoEDFkq7ke7WNoXdV8J5eBDtYm7vj2Kiejdq3ZcoevXcPgaDaj3gXDR",
  "key29": "4CKZo2vBbA7jmmRxmMSXRK9trBQAZud1GhpBtBstCWmqyYf7VqVEiF9p2AjD5TM44RDdduibdXzty56VvRaoVuP",
  "key30": "4Vqu1iXHG2WRsa9hGBZ5rgHXiLFgo1TukPtVbKL3M1Y9kZnMeKntKY8ovAmKSAenRFLx8xfen35XoTyZxV16uBER",
  "key31": "5c43qd2Usb6JUTCnGmNyEhn5wBAHkmTEeQ7TZ3G53BwJbg3dvdXzixGnum3h2PqqBrREif7PM6bscLsFW4nUGqdp",
  "key32": "3s9r8r5Sje89ewUXscfHkYmFxe6FBTsw8tazJUgnLQ56m5bpvQGGT8hq9fGrEVPto8REEPn4qMfnt5dJekTyMXkT",
  "key33": "kqjUz1CMothGh58YhPDhWXn5vdBMTZ5FUk5G5JYaeHk9yzYvbwpNQZuvreoB2bc7qgtQ5KemkewcsGgRMveBBzX",
  "key34": "26VSooEYwmiZrPvCEEWU7QNGtsjBrZQ8sPBjLg5dVbNh9ZgWYSXLvVMo9t1oqkHKpXu1zxMqY6YYCGt9yuBw7A3e",
  "key35": "PB9ivk6bxZQWCKRWPJPtCzzPpmCaayozdyR6G4jLawZLibrBe7PvLY7MqMPvDVxhiV1ucQRCzPjKBndT7tQ6uT3",
  "key36": "VPHCnGWcAoWgc5ZSkFUELUY3MCU5pnQ7cGUNUGo2UTCvMbZYKtUajAEWHfTe1dLDY4hU3CMX57f376RDu46xSNt",
  "key37": "3tZTWB7wGpJhkXuE8iCUDqNcuicJCDcCdJaCJKKcYiKdHtVeXzEFUvUYQD2mWDHoFRjQMEMfDXUSVQ29bM9cMZEx",
  "key38": "5NaJKGhP3a2emF56thbEHMwYkxkUJmRMnKA7puVKWrMqknCoizP7YN7ND3QEqJnUUxNhUGcEEMKwmtPgPumCtKBj",
  "key39": "4HC3s2tRJmzULao7WK45wuJLFUikPTaQ2Dj2XQs1btww2RSRmVtYzkjTwBptCxnDZnV4TdVCx1DWLTCkCjEJJV5K",
  "key40": "5GQDXLHAV3RqRapr1hzye9b1i1UiwuBvm4WfkJoHX23wHnXkK2z5nU5cE8DTpkygtBDjvpY5k5nba7JjcfPfcvbn",
  "key41": "51i5FBWeps5jQWke8ZhVwPq9P6zMJVMgo5H6HFyAz86CtgJ1PS4QjzJsz6uWoqTBR7mCYUG7LkmA6tmyQf2DoBY7",
  "key42": "5UGXRQEEGZeKEMPzb7Pyp8EGxQSQHDG9DzhJsFFjtqe6LzRpEN9uGfm9EVAp5RnmjfVu6WSeUaeFeX68oL29v5YH",
  "key43": "588DRm2SoMCyG6VRZnpGPvv15AT95eu5wUvhEG6m8nKKWZnfNwXqrRKMzLULZGP6tYxPe2JXoiwb2qHiDztUSUPW",
  "key44": "3msybL9gVPdW46CmwxapoSbjVMYbXxWdZAyDSubF47JfzAc96KXdXtscMMp2eBuYwKuoVRYdfcxYznUdpUp2Leoh",
  "key45": "4U1DVxmRbFGsC71WzhHF88NQFvfJrjdRuPLJTiop5Y1c1RpKS9fn9vd9BfS1KWe6S5AvQMpeaigt73CM59dtEK9U",
  "key46": "5RoSTRA1KTw3sSfdPzMWbjDtnomvX421RUqau9c5xQYKZVBLfTqmouCExG8yhaUycn9agq9LMH3eMZFk4W6hHQM1"
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
