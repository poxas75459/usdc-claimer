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
    "zgH6gQJ2waMHofdMafnU7jm6jd8gosryThomkCQBnRAyEE7q5zkaGTMupCmV1KnSEjMS4BMtC6cn42qbPP5jEoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5PKNUT9bSuY7XN2W2KChPykVherE5hhRvgKBuU2L7j5JLTQZS8QbFwurq62fUX6XNc3R5UaTbiocyLhzPjK9tm",
  "key1": "2Ht71yHNt4KQoPKphPhW5ycN8v6HQ6jay9CgLXiX5f9ozLvChgvCPszpYcenAJP4DK473k6CnETTWtNYud71sdkP",
  "key2": "3zRj2PMgfXHh8Ehvu8gNZkvqn6kPHr9d4hFPDzoGZnRdB8gkgJUnXCWgKLtzFXceVwV4rLq69h3kZTh6ptXVVxQC",
  "key3": "4pw2adtbi6Ly3FVQtyht5zVaKqAkm2HupCvDAZfrN5hcHuvupApDg97pEP69T8L66oRbYi9vDxeEojMEvkeUbKWK",
  "key4": "4iHmLyyYDYJVZ2iysRTLJDdq7q9nKUmUQ8Z6p7D38Nf2KPsyE223GqPxJuYk9AWKXC7UUaAc9S2Md5Dnk1fXu5W",
  "key5": "5sEytgPJA8XE1SSbQY296J8Z3FsbM1VZF5SNCmevjnDG4KziHtSFy2JV1Sjm3v5Vc2Tvxa2qYdZ1NCcDxLpupSZ5",
  "key6": "uAZoNSWnMXtZdymf3FEVqG3hGfajdDxMoQp5NfJ6YhuB4ySKZUHUbyfeH2fW6DTnJon4Cgg3yuQp3x539at9CiZ",
  "key7": "LyVqUt6HALDbD5478oucWv1vYc1QLzqngtx92EMdb2VVm4TefAmkBWfRjb7e5kX6ZeXfyUQWNQAesmPZqrVjutR",
  "key8": "2k5pVQDBbN3LMwkNFC3djSKGw3vsTV2mrVG7hQkjEd9p87aHiEAHkBwv7wnpWeP2ew45GLCEutd2NrWzZEfsMRcR",
  "key9": "415uo8zhq8fUG2R8v7DTbFcJcVBoenZgPa8S9siuhXZc88WpJ4geABfjVs1etYLuB2oTHZfWihngCdyGSrWWwjWo",
  "key10": "Xq8XaxXQ8b9kq6H54Qbmf4qAyAhjs8zareP84XnKd6mCpBnqLhPSdZmyKMQmUuGekiVLBLhoMYiW6d9dKA4zvaj",
  "key11": "5GzoMwQuoPiEMXgvKaXMCaHUi9yjkSH3f3yBoGeZutz444XSb6E8Ve7XWirth4tdVrvVoAcadacLLpo5FhTUtRu2",
  "key12": "54KCQuzkVQJXbr1LuDYzsAfexGeMiTWRRz4dnxfGNiCB6ehse5M1RFBvArFWYsJKFewPmmdStj3K44JPBMFKGxVZ",
  "key13": "LTYjFnEz21CLmS67x24yvYaiTA4zRNYA82EGnCQkRJ8wA3fp8dxKjfRSP9rtsKubnmDZj4nAuesnwdZRLqkEtbj",
  "key14": "TEgSTXkpZn29sKt9Uu9YdWMQM5F9h5LBH5z89emjRvHFknRpag1QufHewmg3ctKByENBrAxuKfXbf61dQhwHLgs",
  "key15": "48CuPG9yZVoHMv66Epe6i2heig1tjEKcKhJUmmMKtcRzaubBUcFdUzwn7dcXzy6xLUnMbK8S19NgegN5QKyAxwF3",
  "key16": "2pNjQChKYpdP1y3FyWGdJuuvA2d7K9QoZurWowaKfrRYrxs6nvgYwkith36rYTx2EemrTX3cz5rdazqXCpsmQe6C",
  "key17": "tM16nVkUq69eDGDi4vRx29AobZvRE9r2ZtaBM8nRYM3bvZCPKt6Q6f5j2dgTbyi8QZCWqHheL8xpnnoxmRPKoUs",
  "key18": "3NQL34QAeYYVe6VJKntZvR43K1SLeu3SGb6KAM7ZmeWetcCmCwQF1wLWsFaePXzrBj4x4Jxm16UcTJ2sAwpfa2Y5",
  "key19": "3zfwtkm4R5PVg82X8UPj41YDN2sFxN89gXBop4AZK7isTkT9QEgf5XGoXqfaS33V8nsabNk4w2UXjW6VHfyv7AFW",
  "key20": "2Syo4vC3NFaeKaVFnV3RM3bn5Zfihex8czZDZme29uYDvEWpQBC7357W553rTuutAQMWY3RNvpsfhxvTVbeRWLjm",
  "key21": "4j9pVJ1tgNdq98rpDFzwD682GwAXpzTJd6GongQBafY48uaVXmkzy5co1K1TEQMD5sMdbBfS61wsT2pdV1SPgeEr",
  "key22": "3QksRhtqeFjXJWkv8Ju9AURUs5zFvxz5mqPgqWtRTSFh2QUD9vXv2gZPshErnyGpiKTDc6Ak3xrfmrNrApUPqviD",
  "key23": "4sWV4LXKVuHJg4s9RjWLvZhbNHEdDjw4nqfCFaEKAbkkBkNbVBtHapPkHqZp33dKAzKmHy7DqB3QCA2XqroY8nA8",
  "key24": "3quTvfkZWoEKCgWfy4nFXCXqKxHYvaRvQkDUSsmBRmoFyHS1DNdm4yRkrwaoZ5wGdZoPPfQYm3UQkkADhNJ2DWJt",
  "key25": "4jmSVgt7db9uXi57SE1fftFc8AutHjNxuqknEHjnDKkn7hHk53yjpakD7UmqbnS17ytpvaeCh5AznGCmE4qo5Qkv",
  "key26": "2R6dbgjisvyLBfkCAzkjeWQsNJRsukoC7xVuRpDrbuE7b2KvCveWmi8mYdk68N1oGEwkUQfzKbyFrfUQ8LRQ9U44",
  "key27": "5uDpB8LPNqZse4Vm5TkJk2hGRocoNS79NJhQBLjHhQyzocajVj4PTpeYWkwXC4KEA4CviFZUcPzmB7RgamU5V4P4",
  "key28": "3sk9v8K5dLPLdGfYWmMP9zefsjkb9iKchB3Ro61bmr8MaDxwcJkuvtpVJUZDjRqdXkYAgMWwZ4Lyv3RUFedJhuLe",
  "key29": "4Q4Cxpwu8CtNonMAsoaxEesqP7xRVeKLq9huFv55crguXVv2bDvEvBVw1TfyXdx8QSJQdpTm8NDseCKuvXoWNuwE",
  "key30": "3yqB6YDk82jmXEuk7kGAPsPErBVhSjgScdUaoZfCTfUZfqJHfeob5ifDm7vJp9PsYo4K68Z7qmy7EyThqoBc8XAk",
  "key31": "58ihzJ1VJ8Sq1JYcejpSF8JNpLQ4aeVuLQmDEFFsTD6YqJYK59ef9gWL9p8y8fcNTT7VHzWwKDd45sw3tZmuCgx8",
  "key32": "4iHA8a6wKQ7uePpW772wfmHPE6n22TzfkDobQeLsbQMeo2KTdb9qAi3M6auQMWkFyfuxM9oftWkZacorLNQqBY61",
  "key33": "4US6MKA3PfWYWc1bxma9HoswjLQTQwuVfWeVPetu6Zzh2JMdV4DvdL7KFm9KzwVAoP6U36co7HUGzxQ3XkuwcBTL",
  "key34": "3nTKeY5vkKpvNm7nkTzH3SUSSUxG6vbbN2UUAU3iPmhUveqSjx5AbkGCSwLJoERSBE1QXHAfyyTB1Zn4RUUsPLzS",
  "key35": "vfLMSwqGRHQLJewV97LT6y6ANgWSPgULweXPh5pb7921PUhEWaTAxqCvYU4N41WkDaYUtPvJuFmQZas9WCMreGU",
  "key36": "672qk7gHehLCW4tKh3iFeqdonCq3nFwaM2Xa7nL669x2r27dPZPDQcH8C5sVDsJvmCkQsLVmMs4FjeXv5n1uttKp",
  "key37": "53qDJyboTGdxDvQcXRrHkJ1sEimCsm3WdoUmMBdyfSAEn2haR4ZkptG3JdEBof78yJuZSvzxqGNX9sHfpQjsuy8R",
  "key38": "5jSYye1gugrA37mZLbHVgL6VMCqhN6Tje1joggC82pdSg7CKzse7nATKX6assspU9kTi8CbY2ynvpHCH2MAq2r44"
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
