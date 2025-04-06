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
    "Mj152Ky62jRFaj5mvdaefuwQFz4wUpxVwyubjgJGGWkACsnKSZZAb5jkparNHZ6Gacq4FSzZY5SPJZQA9LAfeuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y9CA9r8FR7XgyTkU3hY6jeRfCsH5wa3jGHV6DJMBmNLCbzQE1kkeD6BgLJ89Uw5W2xkSj4ND44QPxuri6DdRSbG",
  "key1": "25qJcbYRh4St1H44VrMygDuwpoqMB6sTVq3yfbUNYgueFgC4bcj9rd3hxcBhJdWfAYc44N5Jm2EhweYzYQRBAeUX",
  "key2": "2kwszY2yNcWCBWTYfXSoowMiYS2Dq2fjgDLC7S3U5oVWktxi5sViGLXfykSuNKtFjuKtYsAqSe3CkEar4zKSvDkN",
  "key3": "3vyMe3EVXSG5onA57Lf3X7eZEaaTWk6QKBR9X3Em7tmWPMmdToswN9YEUm82aFoSGscqpGizq7J18UozZfJCDYXb",
  "key4": "3WjqSpyukc3Zvusv9YeWUb9U9MeU4s2fVrAH4xGFUJ4MNNuSWkeqn4UBsNvjdyCC1eoqrh3fCew2P3Bd7Cvkvjpt",
  "key5": "4HR83uUwVDK9PW2EvhaczcGnq2L3kHDUgtubSb5pBMmoWS251GYc4mJYCFkpDSypSfupwxPdYY2cNTP1GucsBN2b",
  "key6": "nKmw1Tv2hqnRtoCXT7H8boMJU4mRwLshBCX23xbGj39ruq7QBq4gp1Yzx4STC2ko1XZP19A7DfuC5Y8yigEBhqM",
  "key7": "5ffyCbVvKd3NqjFwHdgtoLsezdZfoDF32TkjdcFZeVaYuNriGCkdwnn3yAqoeqwimunzgSExZNJw7qXKJ1M1y18L",
  "key8": "3ZtG1bjRCVLMYRrQDdpkbsPs7WVppnJAd9GStcSTgn9d6L1FAwXnXaDWSrj6ofGvgaBAYhvGveTQN6PfGsZa6p4u",
  "key9": "3DBo4bBYYm1SGQ81usQB4kTzNnPHzV66tCLunA2BkDma91W7C67YsYpUxAfrK7mi4P5Jek4TcHp8Jzb8fAxRmZrf",
  "key10": "2MLCEchtSZ3xQ84wTFc6UxBGJ2sLCHhRH7C7cY3rQUx2FpnzNPAtbRLjQRkW7ZLd9wnyodiGhks4fxMw8NB3yptn",
  "key11": "53nPGQRao3tb1dDSJpnTCkDCfagqtercqBcyJgAKmnRa18ShD36sP1PcyhUryGkf3Vt5eXFbCfX6p5VVaScjW1LK",
  "key12": "3rQH4DARrMTiL2Z9jXpB7z9MGHwYRZ3b7mazUjDPxD33jkzZKy4sHgSAzct8WwdJngofN5rPGiERHWq85ZRWqkHF",
  "key13": "5JQ4pgXdDLdNvCWkRJk8gGYGdCxG23JmQpzLApcwfAozqKhjdtXLKhFwKPwUXiz1WjbjiMm5WkJqFxdMx1YTULXW",
  "key14": "23sN2WzvYJCw5zueZusHSMuHVSkpaSVtkgVn4NcYf8n69iQDnKm7gv8nWZpyrjWkea5P6AoVH6Umjht5LLCZrezV",
  "key15": "5MXAkoWp3fgh8pdYxnapqGeVBngpud5dDxNDDWtWj46y89x9gEKCd2yU2JWLZnsZ3E7vYvc2vFoyDKSj4AAz2zFr",
  "key16": "4cPCTvyMApjyEVNPj5HwfFGJYsm5H4BCrvdJb1evFhDN6VXWaGajjQLajmWnKyfzQybZgXFxtPVntcw1kmQYfun9",
  "key17": "S81AW8daU7hDKsyuPd2pzndsGY3GJTXey8ShPq12Shp6WafXHWVurZEffMJf1dHMgZcrMoA4uyk2ZvppwrDTpZ9",
  "key18": "bLeXirrncPD5MUd5HaMz4RvXugT97Us3QhLdxsg3QDukjfXTuamHmzmUzUmQcaGAMLa3GsuPyvfx4n6vmW1mZ6E",
  "key19": "39bjUzLpTdjmUUM1RwgEXUhAqVRG3KjmZir2t8kGvt4b9Xx13FwnmUPNpdva4WhoBFf9tDGf58VUcdQH2PT6bWNU",
  "key20": "2N7E4hfHzuT2dGcd5UapxFZStXmJDcJdFBCaM5DPhWHDJYpbfMtwe8qXTt5va2u6nuDFJ71XpscuR6SZBvaBirng",
  "key21": "2iMv5wZVTiqKkvLVKMHiEjvhL6phHAHmpMU1mbP1Jfq5Vcbc6oLzK7UYnQFrB2Bywn4xW2NmsKnw62698eaUztWc",
  "key22": "TabvPVJTLu1SJn4qvzXUPcmMRsCUbSPZnRRxvFBhLKNhXwxtak8F1BfSJyfjdKRbnf7byMfzP3RM1eLWDXsfBoG",
  "key23": "4J1mHfP2VzpBXDAkdnx63hJGiQkZRCfXsNZSGhg8d4N35QL1qbH4x9TuKPxthxBU9jjFK7HviuKrXJxmNX8vgeH7",
  "key24": "YZUxkKY81ATMZre2hCBrmACmZLTaBFDYkdzUAoucmCgmMkxJ7RN2LFW4BcPr5qkamo5uXdHjMBc8YdvpsdHGgN3",
  "key25": "4htcWzEW5beaDt4t7uTLCuDDRR1cZ9yiZHkTGXbWMZgTmF9HbcwBG8TxbhYBKYgPTSZ7WPDiyHhEwx8CjiTUGiBq",
  "key26": "5XQJhsS1YgrB21t7dycJZMGzapu8tdbRSisLwR1igT4dJWfVZPor4pCKShEsECKCqdsiSvU2SqYAwS6FtCYhDBt2",
  "key27": "3wgM8fgshtBkBkKBxUKoxS1BYHFA11QnkM1K6qGxNJEUGSqtcjcJC5sLq45ezUJRmUZVCd6LR396Zm6hjFBcmbVf",
  "key28": "4qf1ENXmrvm6rEnR53AFNhYqMn97oV1FEhtd2heHGEWKcx2EoEutr6gP8S5Ev5HQUBPVVsud5KLqwZwVjcTdSsqb",
  "key29": "36gDaQizN4pqKXsf3WZss6J9UpNBKMmsYQB9QDDiWPRuE1x4pEDBUK5ciH2Ubwxf7VMPxTFJxEkpES7BzCzGjyQo",
  "key30": "3kQpCndkrhX8KpEnFt24BBejteL4NngHTYUABFnBBuNxZZhwo2B3zqKJp9vjVm5aFfhooB2KiNhy7bfBRRVjkdBY",
  "key31": "4s7MCdaCKEUbbe5ggkiFZdDoYkEAXEFTwbWt7BD9ncnxBEqyFKuZViVMpM6L7VsJ6aJZBxnbD95FLzwDMepE1pDe",
  "key32": "3nErFJC5Z33Ypdh4bx7XoXAdfvtizJZmxMsFXthJ7VtfmM7vwptkWHVj8G11dwjshD3NWbNSGQxCFRH1tQtJmc89",
  "key33": "WzT3Lh2R6hzkn9Xu77wJ8QkWCjYxRMgBeLEq81pQ3D2gRttneBFXvVukNNTkQCQYQ1DE1DjPH6Bc4gPw4Dqhqf2",
  "key34": "4uho1e1bYyWH7uLbi73qEnN5zPkmT71JGq6sC3QhesSpVWiSo7frEP222sQppuiumvz27t9qXUtq7ELctARbtPuT",
  "key35": "JnA4nTwnKXW8kjA3vbFobBQVC8Sxyve5TnRTYzKcoksz8YNKQH8GNVHbpX4gPJxB9M8pxWPfFKXm12GsaoSE3rw",
  "key36": "4dnYWuPhFeootbHzwsU1NTufMTxutr7SLViFB4CQvukb3n3sov16JRMa4pLTbfZzJCqFtCLPQN7TUJ7p2nxxkaiX",
  "key37": "39dS2J8NkSsciALdPKbERoVFMFv2C5Ee7KyiTibDU3LNrxXCS27yAXeZDQRgbACwMrzXUJwCBeYpKHbvB26QnpbU",
  "key38": "3N8PVE4YZH9MkauuVthjVWQpRVyuHU6hpTCxMUJmWKZmhpGdLwsUmeUXYKXbm5SWaAHPC19kLitPAmQiPKQSr2gp",
  "key39": "5tGRRCANDH3Rf3AhzwxJUjQrwFDKjGC4L3r5eEhoqn5jg4kVTdK6Eo423Xvei4KbbaX64W65GXxUUgQSAKoZ51GD",
  "key40": "5ZjkyeM4YX6d9Ub5JgJVEVzME4NRmJ8SEQMGUSrPkBrnLhup5txi4mPMXtxwgNRsG6znF9vkLzonCvWh9rUDKFeD",
  "key41": "7RaZCXNQXuSKTCB2k3zVV5LCnizqL3Jb6fSPQPGZ7zPT1unTdZD8aFpPfVrTzp5Wx8vGVapn6H3GrBmRugPYAmY"
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
