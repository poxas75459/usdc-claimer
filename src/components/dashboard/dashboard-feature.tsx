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
    "2af7t9iKBAXJEGXqpdwLKQtqk1ac3g4FG59hsmvfEEqV96LjQcpf6RgQju1baeuvyTwUZXvanAnWLoX4HaT7yDgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxvZrg8drkLD51pQiRsqWyBDrWodGcBBpHvHoqub4wCJG3SsjesvuLGyT8S4e96Nfqqww65Sqxz86B5wCzaqWLv",
  "key1": "5oPpyJfHWC5ggbxqXVTw8e4VVnm4P6TSAafL4tZtUTbZYUsAK12ztfHWiWTijj4aBEkf1hUrzQkCEfJk2tG6RcpZ",
  "key2": "4LERuWUX5vs2h4jdQCBVMrNrx4wTH4E5b3TyYXB4D2N5q1v6e56nTp1G6EzXY3CC3YQUeMB7dZFAEaUiG29h3QNC",
  "key3": "5zR7mRQ5e2YCJgjyUKhJS3tzHUVd3PVLTVf24foCqzr4KWy3gpPfCHTUby6Z5FYXGk2KN4pmsgmc1zGWeNGJavUp",
  "key4": "B2NDa36DEZFcWJD2mCwyny29BNmg27Fdz8meHmp6mLJHXgCs1Z4LJgLyYYwUNjdBCh5Ne5pGLQtZ3Xe2qTd5pPN",
  "key5": "cEtG5yeFMGRmBQvyGyBd1t2V6tcrtrEGdFnaTeGGUvW1U1pnijPkJ5TduQjVzfHW9Loq1ztYZyWUJUWp4oGMk3n",
  "key6": "2yTSwK9TMkZo3L6Qh8iwT7Xsyb3c7ew9N6VpkBthBDjjdm1QcF64Bvzig33YhJvYGx9GfZowo4pooWGSuUxGyKgM",
  "key7": "3LgKGxdFKQ83Su2CFJpYjWqqKC6AtY2DFZiSU7SbTDRibrzt5ic4Dww2zsqpKPrCWxttjb5KNK3huh7LSmPkGpTN",
  "key8": "woCBspg6Rg6qALQBezcWq4ninNi4JWBq1aNB24Too2zdPU8KQJ4Yi9HxXsaAQ5yDAqKSXTV2kQH73JjsKeE4D1m",
  "key9": "2tRCUTm7f3PNv94hqCzJk1uCWJ1jy6vagk3aqNJf8twMQTrgzoQXprNzFZFC6jjkvM13o3d2TAbU3gGYuXwRzBC7",
  "key10": "2nAiBVYazwZQEfwcsHBUQ7v5pFiP5eJnu8BZHDs7N9NGciiZaxCTuSbN45D8BHj5iXttE4C6rWj9C9fbWoYJgAFC",
  "key11": "5YkyiUHewS8BsKvyY2pmtCV5GL2RmzzBPW2MbDcyT9Bii9fBxDb2vqugkfz4ooyYdDRoL3ioRRV8P8VXgeVv73Cw",
  "key12": "3Mv16NGw7RnwEhn6if8EwRnMCxS61fwudmNkyE9Z9UBnEut4UNVPD9kBJcuLTXHS9vp275Zp5J8MQp8UveiJckH9",
  "key13": "4KKoHhf7gqtFZxMayCdH3L59Q8q2iJsW15u3gBzkLTG2yKBWf3cptLRkn1fSsEptvoXoDrVnp3jKeJMpC5TEVqBd",
  "key14": "3R6cskaAsfkqEQCGoYWrYZsa3VBgrtLUwhWfToDZDWBU8TebAwgTitSPWZDU23ENQEb5pjLNdz51P27irohDK2VS",
  "key15": "4zKVHsWSn9hyM7b8BkrqfxasLonDceQaSHSD1vreme6525aGyQr1kLyeFgnptTLySoK6Lws1aArEFYK7Lb6EDxjR",
  "key16": "4AiG9M3yiadKfHHu9RbSFmqS9ThqZWCMtMj4LV6qHz2YegpPzifXsMKA3i5knpPtEqDfnk2Gx5YFYH5E4DSFav4j",
  "key17": "5wak1GeftHSRjJtiZFokvztBFJwNiQqfetLqSVJ7ogRw5gv7evXJw2VpQHnfnSASEdkp8v4J3N7hp6HBSABiQpX4",
  "key18": "52CePkeEMYm8DneG5LSporzxNdJSrLvD8QekF7QNQzjWL3A1FKWYRaaBazxPJYVvuWM1r4ihNWohFCProNShqBPJ",
  "key19": "2V9aX9fbtnWopREkmsrHxMqNvgajpBMh2Ef8y4Do8MeRFcdZo3qcx2D7vovbjeqB2c33kz25LAoWWzKRVi9EoSka",
  "key20": "4n9iHtZjtXYFLBqJwzi7yV64Ay5w6emUVqdh3cVCsCsUJhuPNSs69pq8QASvqbVJ1iiRs2Uqv4MnJqPHdjRwJQr4",
  "key21": "x36xJfPwMkefvJfnnPVaMwu8Ai76ThkQ7WD2qMdDu7xJmaGfSz8C4D1pGhSXE5KB8Q5JoNT4Psb3Ev4HWSZUvvW",
  "key22": "5m5wNfPRcsbe8T4ccruTYi5RatZz69k684vznXc3Bi22VWVeHibtqsQm6ctapsR14C7WSEpaja1QgqgkjwCinHbn",
  "key23": "5G1duqhka4cRXCNZipf3ueU2JCTJtwFZKoStFYtCjSxtHkCRXt64P6gWGSrCCVirtYwV7aGz8cFB4WRWXb8XmfHv",
  "key24": "2CVbpBzQvrzEZQFMYAdLU9p24b3i54fLBC5NuUHahpTaehGcFcqUPDFY3A17L3Tvos4V6SF24MnBpvLuYkqserrA",
  "key25": "5rq6ubg5H7sYwoJabmMi7XFoMXAzdXZr6NZBgfgd2UE4a4hwJirFGSAsrp9wPjcjx4ZkAEaKvDz8h3basAkHGeVC",
  "key26": "3YK3DyPNEsiRnTtcB2qndgQY5eEKzQGdMZe1Wte339RL8nADfM2GNCuPLyeBuuYUVchXq3CoyB4JUuUygk4fKdx7",
  "key27": "21nr3mQ4PxB6w9fLb4ziVr9RAqTvtxXFC3iS1YWBifAziTPznHqKJnbgbL42fkKxDoXscu8ENFcLrym5mU3tiDCL",
  "key28": "2MbgbWdtQEJ974638GnL42rnw77NGKYxwJrBDwS9U8jSDModbkkVSgNH3xuJP5GHFMqi5WgdMxzqHkZJ6jXzWo1f",
  "key29": "58c7Zqf3j6VtK4ja1wowHx63pk8uZg1jVvQYtKyospbr5pzjikGm85KLLUNBXdPKc8jBtLe81bm6hG8hK9d4vb3p",
  "key30": "3xK8vokMThZ2qSHhTGZAdzSxhqfNraVNshZVgpvzih8YnwmGVg4jdmDY85ySjB1t9Q9ybtn9qriBKWnd767LaNrc"
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
