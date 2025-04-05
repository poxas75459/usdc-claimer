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
    "3yrVJZP7BmiBvKxju9paqSFXYRyc9Xh9dZQaLzfDLwkBRsgMehnwJbxznyovy5pqHhz5ntH1NonowydDrnihJgAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cU3gkpBM32nKdG4pqX1UiorLGWjwzkcbwWHehyEvNbJffry5A85awqVsNsw5odKcFDtUvynjScLGg4JiKBk2Qcd",
  "key1": "3DyqYVQPjuqfkctLpZAn1bMcWJr95cTo288B9XyjxLwqzqPSZ1h2kNoW4Vw2ALesWn1dU8et1toNuQ1FJ5avPL2Q",
  "key2": "3e7vQDATY697xXWMKa2ErZAfNLinfAEYRHgP1KUor9hBDB3nXadXpxzFyfQgM2oKKGKRQUWkAso7dFPQPfkFDEvB",
  "key3": "4Sq94naDoAnw8Y8aVfswskoCprbayLTJzkEVLy3NjzPer82S1uLao74TPJrxsoF3C5o1f91B1WDSmb5iX88SqFyb",
  "key4": "4JdNK2T42GPbQd3rr3aqQUWPrABCTUmDdT3ujxgyA4dELm6Joz7J76jxEnsGofp8MQ4yGq9x6pS6pZoVu1ihn5wD",
  "key5": "61dmrXwDZF11JQD2YU29FFvbtjzJigtwTCAVw3EtuegSJv1Rv7HLePW9e9vUvVHM8HjM8XCfZ7fDJCHBbsthCtUV",
  "key6": "Tdca8mPPv3kLhEcn3DvYFKxn48iH46fM2HvwTN43RBhe7WpnrwbvdmTzyM3EXJyfBVPz1z6bUhYESU8LjB53JGP",
  "key7": "5LhQYSTwi3ExyGwsPGBa1bgQTecaif8nsy2ZASx6zw47Tiww91NYqjSe7LGh8hLohofBG5iNHCpx6yBzWjtU1Bnc",
  "key8": "297WgonD1U7MPzf2tc6uMFm9jvBksNc8Dj6v9qP1jaVR1rNkb2hTey7uYp3hCcEsg56x98rbjQW2yFBicrGTicSL",
  "key9": "5C1yM159H4gA4KTiKA7SuRkv962Ltghw9UV4odpTeBV3bsShfndnTdRiZgTDyAVrfBTnx6vYDPWP5rwZyieyLH5L",
  "key10": "3xPnDJLxgqN4dKXRajkYsV8tMYnNdfai8NPwttrfQaowUo9gUPLnxzUNog8Rr3qqnC8RCZugUadWQjzQ6qqoHE9A",
  "key11": "55nE31oCBGiE4KnwLqShxBTTxef3WZLrKTqUMh1JgV4dQBA7KXe6YaTC8CnC9oY3gfSuuxc3i3VH2cuX4wmTWC1Y",
  "key12": "33sQd5FN1X9EJxn835YRzwwgLiBiG3yVuXKwsTr4DgWTM85HeFcPepBvpZn74FCV1TLvhzU7xotbQEHxx983pvVr",
  "key13": "4bMh9tfXY3h6i8BUCC1tavoNP53d81t8yQRF3Bs3BQPFmT8YkXf9kFESfcfp7nnJnxeJYGeTGY838cjG3HVJ8Uwy",
  "key14": "38Ma94tLZuRhGRVLtJvNpP7DUPGmuiJDXNkjnL5MVWQnzXq5Khv4eZ9rwMdR6GrHuTFeS7piHY56qEKyc3MotXjP",
  "key15": "4Ut9uWvaLXmCMYZbTpNrXgNUS99m44rBhQZgvCewGPNuCrPumLAcZekrtZiFi6bDe4SrQiKoDK8co4hfnNfcbW3v",
  "key16": "5rc8k4LPhiPkN6MSpWVptnWDdsaHdVxXjHwHGa7WyUXZTaYG7gQQdwpBSrNLfXPFrxi8e6qy2Fdo2vP3D1Q4xXfp",
  "key17": "3cxCWTvptqrUfgvFHtp6N2frLWoLvgc8Upu9PPXurCkzuqqKj3gkwmj7KcDwGJnZk55oEPbNdAL8MBTKZRvbQzWb",
  "key18": "4yVR1QJcjoKWLozYBBnKjN1MWvUHhFm8bn71ZvFuTyDGAAPgLwE3Z4r1gjkRDu7sBqe94j3z9bTe7aFBWSczfypR",
  "key19": "5aus6uy1isgiq4tGTRnuVMvzob5cEYX2eqMbaiDcTeqqZojsHTna7gchxodsWwNM49dAdw5kACpSmVnh889cXo3Q",
  "key20": "3e8mKguzf143Uvafc5Q2HFVgtDMLDv1VZ51qnAnVEbWGXBxxDkHVhCsqLQK18CBD9AJGg4nGxLDxx2iAw8rgVKPy",
  "key21": "3oj821Ko1JWdBQSgRdoWs1U3FvcWMzbZ5NDyZsoZD6EykVSqZVyitfJkYAGRbumfQ95A1wT6f7ienKrWUtmccdwM",
  "key22": "3Hp7BCeeH6VGYcKW6VXSPWRBzUvLA1nM3Z6zjWtajry84DurB86eyTrw2DyxHHHy6D3JuffU9rMeqE5gAyXoTTUP",
  "key23": "5Efhwqt8Lxys1rPVm9V9UJHMQxhBMERbpbJ4qPM5WP4JWA1gbKBjLoFqX3GpwN6YYYudpXG2rYFBQpcQy2QG3Xve",
  "key24": "3kbTUpydiB4uEjtWpiTfRkdqMa7qpWN4zCGPBHYB6ssJiNG6N4VxBdLQ2rUgxUTCFfcmd6kBaEYYtQE3Ge4EQiQR",
  "key25": "5P24Puk5fTaDSr8TBZtiFDauBqWaSWaJKVmkh5pwKJ7ffBDLfEcgSaoNPMpKLN8AZSWryUYovieDMubvexjdTmHk",
  "key26": "4ZWLDAXdmZVvN58BWKgSxKoog4Q2i9R8yiyMRZJoZaffzKxXxs8Aop9avtPsEKgFjN8qnxkZiHimoYsSqnr5aMhg",
  "key27": "71XMCpPVREMgR1UTpsLy32sE7d7DrKVGtvdCgGAkDN9rHcxWdcwDYvx8Thr15MnL6UW1b9SYR3UukHXKsj1M6fv",
  "key28": "5vP3xdkoYnMsQtSGLYhZ9RaPXcpdoB53JiShAbhYuanHE35L1LCE2dRNzjMtSaKJjNR8Hu5GFCAx3TguAVcobA42",
  "key29": "3AX1onnecb4TUfttj8ikzozdPtKeLymnuctLBvqZevpSCqBY5p8Q5PzyD8YQwjSy8LYhSvgsu2JSWoxJNBTisDaQ",
  "key30": "2WPdq2ucWkwDFh7EUEPES25yLbdk2G3CkDWD554Hiv8kB92huACkMqZDKfbgqzdshnuWk8YX44G3Zh3xkEdRBXvD",
  "key31": "PJMhtp2tq7fKTRSD85br6bA2xjUdYwx2jfLVsaiXHy5wTLcR3eiUtyGquRDfgFRv73UCcAobNU6FEuff7gVRTtE",
  "key32": "5oSdW4h45YPD7M3Bt2MwRqZXreDc5rV2Gzk7zjNstJohGXkx8aUWddC6KB6PMoabDAvKJcxNN9tguCdHVnYebk62",
  "key33": "5LRbKyK36qyznM4jEMEagMwTVEKboAAzsqrx9VjKPXdyjn2mdrcSUu4eEhJh4bXicGBFPCej1x25YQEYdoes77DM",
  "key34": "4kc8yjgkQXctEJPKr1CdwTHtWXbmCtVymokLmk8XBRVu1igxjCCCFk2uxjCyGxmKKQbiE7ha9nH8hN9LEQRyrCN7",
  "key35": "5ECrTuLHpNpud7QpszW9zvYBeWQ7eLoP2Mqjn8r5RPwDg2k5RcDkDffDpRUq7qEZ4gf2swAobTk8Hex1yHQVFC82"
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
