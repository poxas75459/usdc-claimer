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
    "9cWsoruhBunPPG59ekMPCy3tsGkNpzrk79Dm5iwFURhGzvEyjFKpUGZ5ry9iF1wbLjNaJReYhisb2XjVChV5a9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wcQ8JXAquRBDPzBa9nRQuLhq31USbk4vuM8Y32VEMbAUQHqnKFQyZBkY7ubnGbKnNFFKcV8vcb31d9PakvK4Ua",
  "key1": "3nsXjQW8vFUifjXe7su7KLRuQRMSznNNBjnsVX8JkVEHG1igMdVuKwYgJDwGCKnrq1giR2ZXq1kpmQubFY8wNSnZ",
  "key2": "4ENt6j1CPHnMPpJSmJb8Z47yhWv9qtcGy6FdR8TnjsJpuwfDYm7mWELYBXMUoWfVT2yKUFDXEiFLo15Pm6pJWiDC",
  "key3": "4S6PjLEpJR9LCbhXV5feaEhEs52grzxCwBin1kJDS4bbd3s9xdmvzqL6e88PGkYUGhVpkhK7QRbgyeBtrXq8zNAy",
  "key4": "2haoRhjVjMDXUswm6oDqKgqTdafoKWovV2QAoPrPo18pUKaMvzNYxVxhcX4hSS2yimJow1gPWtBEwt9jXX9jyrVu",
  "key5": "63tMB6bEXsjd7r3BBmkN1hxdMx6HLUxZuyNfnJw4EZua47b4ScjdsXtP1FevVdY3zeXDXgAocdeMC7SCTb3VAscm",
  "key6": "XTP6rbsWwTQ9QSmJSzB5fbrUwajfKPTHcHCWAU3oNa92PcJaZwqfnK24XifKT16AV68ZXWNXnMi6SB3yN6JSfKH",
  "key7": "51gmp3L58gjtkBmSFeVcGt3ZhcuRBaN2jshLK1NyNUAYLGzspD1VrVZnTxYK5nUTe7cbH89Y45xxE9m9pHossqAm",
  "key8": "Jen7FbpBeMkNC1wyHQkuwNo6bxNby2zTsvMATVc5RgwHc8uhchWv38ABEdbEFMhGZMDRbikmmoHbnrmwnNPjwyh",
  "key9": "MVayT2KH7ToKsyuaqqF2Ceg9gek7cMhRLgGXXTnwonSANpTCvpfgLBwtN2TvXGzPBRshFAzLi7o8sm4Ng6qM4D8",
  "key10": "5D3SAb4oX7MjZzA7oDAk8dnXDSxZsYt3wX9Nvq7DTuQ9ECTVfGNZZfVA9Z3HWQER4PkFiAdp8SBfXNpyBS6nx5jZ",
  "key11": "3yfeVZkT69vwSdurePg3NtYdSaikVzLQS34sUvADPjnDgrGWSL9uGxBXZyrguu1ExVN9nYJUHR3ZskPrfxFUavXC",
  "key12": "2oiTSLo91Ai5yNWyc1AvrWF8Rh1ZqbN3scFT6iRqD2oGkXrycZs7HfhChvPxYy1X5MFNKvaxjvGQaqaCBHc1shGs",
  "key13": "u2ehRsmLAMjfRmmhbujEvzBFPBGBd8DQC1NnntajxdndkZCuoabQqerxLzi9jbqMSM197t2EEFgbFGqiMaQJSpm",
  "key14": "3gM8LHVeJ2PUn9cTwWHCfta7XhSghfUqWrf1gptopzNGcpcd2WCeeaQHZxx2hEFTvbY5fXrpgq5MYXiWp2MkASgN",
  "key15": "5LD2MHCRU1P2tbtcB19f1xCHw6TBqzFRQQVdsjSGLiqoadZqbgLZt1s17dNMF819GDQ2QYyqy3ZA5RBQDChCp7wq",
  "key16": "45Wa4ieFPoRQwuBoehvpS3aAtV5ezYx6jvZnAvohSMSZYHF4mASWZCFacbJ8Rmyv3KnnoGSmaxBmQzy59LKSdPc6",
  "key17": "THaiquQTvifSv82K56LELktjQH8oWtiUozJmsHfNh5iWAL4qKNpxgJ2suf5JzSvawmWR4tyzaiz9QEZcw1Ad8o7",
  "key18": "5nw3dq2MwknocsxqTgWR1CdpXQuSpWuSv1PoF8CHAHQh69ya5cechsFev1rLcxQmnSzmcXLYLm64pxR4v1eqeCQZ",
  "key19": "G7MZvY1AwxvZNcANcGpEGNBoNcmU73TyFhk8dmFm48XXAUwF3D5hRsQCh9qHGLQBPTqT9zGZG6XwWTFR36875dU",
  "key20": "3stx4HDkF7uaxFLxftLv61B54VhirxX7nJSgjiQNWGsoX9VSsggsbHyVLHMERvU4LBouMwtSRMp3WptbekMW521h",
  "key21": "u83W1uAWWDvhURSEVJsvowm5S83AGS49BytQAqD6qUFLEfwz7sq31oa5cpmjv1zrVozVoJGd342EVv6M2ENEA9U",
  "key22": "5DgRhqAKx815EsbrDomDRBgo95DbyTCj4gDncqh2GHo1A3PuniyiM524WuRqyEzZEAVjK4o238uDnu2Zx2pVd96v",
  "key23": "3fQb1rDyD1XWyHJcP75s6SyDub5DjqDfdpZ4i42hBCPXFfDqS4x9GpU3kTcDcyKG4ujG9NRC5oErN8h2KAysJq1n",
  "key24": "4ZeyGg5RLHuzbTSzm56MYKs1WGSvJUetCdeWcXRqAKrSh8D9NczmggprHoViqgeqBrz1qPogmqv3ht4A8HFF2oYt",
  "key25": "2yj8h8s4ksEp3tiFpZFKNAfyJYFBEQWaG7cwHYPdahdfYWpmYnxmZTR2E6UGLrCudRAVUTeKvHXjjKXmevqKyrAK",
  "key26": "5vPUzthpEVxmoBHR5jFabinhg5QLXCsSsETmMKBQd3Us5Nq2JATNcgF7VEVtuhoqnKdJWCfN1iZfYzkcGzBaz3ta",
  "key27": "2HSpeV64HR8aEDoy3fZBSD2cTa4RKMybA5FXeuniGtwRbrLomq1YhbmSdZpqgn9quYczjkMftAAKCLYkZSqLAsMn",
  "key28": "5h3rGC5ERQ9Sh69re7TuRKmJ9eWaN46EULpSTampLm8VBjVUKioQhLvY4CXj9GbBgJFM8u3Ey9mHMCxoAAuuPrPY",
  "key29": "3Q6zcZxqzXMYno5BmK8ENhiUtmz6GTE2YCFioGk6fMqfyJXXMzBTynBcXxSMz9j7kqh3b3Kc3E2DrFKPhRXrvk6h",
  "key30": "2yeh9F5tLg32cXZSacZQa8icJ1BwyZLjnWLSQ6QP4k7jNAoreuHhSsxR7BBvHV5r2xfVfxGU61Q7hvCUyc4bKgdL",
  "key31": "2H6gTgauCRetwMQfAAtP2uWarMRu3rcumq88XmQ8HSfMvJKsxkf2u8YtXQD6mtBWfFw8q6Pb5NbgCqEBYkGGWU6v",
  "key32": "4gT3gP7x8sFGjbEargT85KULnKhd22sWpY6bKycDBZ9ugWwRswtPJeVZL8nFiew1frusejCjVNqC7wWAT5U23bCv",
  "key33": "2FJbv4muftswMqSBJjK8GnvzYvP8qZShjB34TD8fB4xyfmvBKGv6m8uFSMr8m8cgppSQVyziLw5cTVzFJwu4tHcA",
  "key34": "mNpbPS1RxSXyynDxqoyy9P5mNgBNNB4Je9vddttnXnsYhFbFJrksaHKNrWbYqr5CuwMfs9hNfJHRE2FcwKzRxn4",
  "key35": "ZfzwD3LBfDrxhYhWbiUhTJdZDjqxnvctuWsrFm1w7v5KYYxm1rh952c59YnqUXKJYtho2icWLCXEpJC1VP4URdN",
  "key36": "4ubRZpsxmA1FirFuNrjWdzmhuivByfXs1hvYLBJEXB6rQrkG28QCmZ9H9K8bDjXHeGYtH2APgdyKsMPNGDiFVifR",
  "key37": "2V1Fh7ABikUCi7VLFtxyQpMq3WkbJYRTgbYAdGJbSr4AqvP3uUJv3UkW5X37BZKiJBRui7H4G2aPQixXz4DXhKms",
  "key38": "4V9UFsyGpBvG61zB77x8zffUkHNXqiks5wxfrqqCuhxj7r4o5Gmgf3an1CLZHucXjymQ6ghz1An95WA3YcYK4gzr",
  "key39": "4Szd6GKD7qZL2hDjBpGNGSyqMYx4wdrvpXZJumqTrS1RAs87hPEJtKMmiafvV6kdHY2VnAz2aAM4hm9v6aLY1E7Z",
  "key40": "4dedcYtDbhtEhpi83oyPBg3bVGCLoiF7R41eW1X41PqypJjg146vWDvZfk6gKpRpRbhGqTuWHkRsqRkqaTbY2hdC",
  "key41": "YMhQp2gV6X2SXRKGq8TFAjsuaxaQ9wHGM8TR7MhjwergzRURa9y7hUmbntYEhKGsfY5hPABHftiK6vjQQEabqrF",
  "key42": "2yhFB8WobcbVSGCkv6cm7TM2RtKyFNJTLPdZs3GyJES87o5i243SGHSZASnafXYpt7sUEc75aiz3gEegWNc1WJwe",
  "key43": "PibSNiXtEZfckNbc7YTvzGnhpzaR1bSxddGYVwDjW2ZkBnukB4dNQtkeUoDyMXkPmPBAH5YaETEL5iY6ET8wY4z",
  "key44": "5zW8vnaYfnxAuTAZMz2UAyXUHA9XMEhikD1PByQspMLNJiJkz1LLK36z5nKaiuxu15B7KfYdjpo1RnRkAhtc7YYD",
  "key45": "9i8RG7ZoMe7SLYQtTkyD5uNo1cdK4NBcG3fY3SgEEjKoiE9QKYR9dTCfceFW5Frd2WDpbU7LdDApL5DaiiEYVcs",
  "key46": "3wwfqKSoqZbBYydDXYiKQW2eBiicqiRNHWZWh7Fe93Kdpwi3s1vTJmAHhFXfhup6zupSiNSPzfCxhdMRHJeNRXiB",
  "key47": "5uT37uqH3fizp1YTAYeR8Zbx2d5bmrY3irSBu4gX9gsQ63BjpjTExrJZnN3ettukya2q61LDgPYCrBv9bsd4gwav",
  "key48": "2bRfxLYYSXMueFRgYGww9ynRtQz4FwGARpXvK7QuFpggAVmu5jdf4Sx6H7YyDqTKwLacTsnBReuYcJtpvisgDs3j",
  "key49": "2DThrtVaectnh9qFbdovpfVU8HFYD8Rr2GPFX3P5DAM3VJS2RYGf2d1UpEJSkfPF8JGugL8UtmMGrfwg8cybGkdq"
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
