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
    "4GzMjPPL2tM9TC1EGDukmRqwutQYFHZ1P3pwqyKtbV8cvv84h8S9yyHaYLx4rx6QKPRewZqAAuNHUmLAByR3qV6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49K6VMLTnFYa4rSUfgUdUoLTQr6RoyhRGCm2GkcHXgWMQx9mZMSZdb2xfnAMnSYpJ1zF6k6gEWXs6vv2PKymeZfY",
  "key1": "3zG3EKVyzeiz43P6b4EmPutGnymaakz2XxohC4E5ma83qKsoowqmMseMpRhajXA7sehPZjK8kVrUY8bTu5SWzddj",
  "key2": "oSRwfDUFGZd6Q6g5N7tzxsjRgF3F3jL4ad9bN1z2SzBf97mEY8uaU1LbgAFmkALNYwJ2VD498BpFgdYkyCaWHBv",
  "key3": "4HmCUCxtgLeKM9zLC2a162b3e6U8N4ncYacio2KxpZ83Lx9C9Gr162iFSTLRD6NbQekKxWZ8pSSDfxwGWgMirfrn",
  "key4": "2H6ioaErdi4JSSW5Z49ZrGVWt8gJZZWeAwSv4P3RjtEzWZ7T6ddvdY5h35U7sSU6PNK3W9osrUVaUXvCMZSnGrv8",
  "key5": "64opEMtuiUVTj4Jf22Njd8WcXnjuQMkXMCh2GddMBp4KHhq6eTQGX1JtBhUfyyhijMkstHteetnCHoTSPkktnpNb",
  "key6": "4yt2gQA3ZMPFVVYVNgFTPnywXik4aefK6ApuQa74FrWNgJSGdkaLGpCocb7PbMzDJ2qZ4DM1TznWoXZCPfFeUGPv",
  "key7": "6w2g1E1Yo3quMfGdV8kuESwECDLqpw1tHZFSfWY5c4AAawdrnxXKAHD4LEcx2Rgo9NguU8x1bTCQoSMGqtkxNsE",
  "key8": "rgfLBz2AMXAxsHv6Egy4brShcWKeqCwmwZLbFxRRWsxgFQyeQG1MhvsddKQFNjA7V9m7mbqYA6KbwRFzaMWiM12",
  "key9": "bsdotmtVb98U9eysVNF8WcBYvXcJpjBwMqG9uqznEcUiqtrPB9H79a2T79QxdLFwZ5mmpBJJMZUnBSTFTKgcVTY",
  "key10": "5w4VacjY7AfvGNk3gzzrDwPPz5qYTFPPwHUas7eXaJbovmiJZ1hdjbNNMQ9XBm6M1cDtAvDTwnLaLxc9syffvrXg",
  "key11": "5wT8z9eAiEfkVBYJboZjDkFmijZn4o4AhbBvpm8rE2mVpHxomtVvhtE6fJmeGU4pFowqKT1yXHaq8ezLBCmjnnxB",
  "key12": "4fbP3ThpFijLnn5iHAcwfekihrLCec6KZtreUsFtXTxPhtSRmCCTqXgviDwCRx7BekaJvwqzv7YPjYkH6UyRpfSb",
  "key13": "63G4LS81TgWhkjVjFRjy5xWpaUWNuYgoZZMjeHfbdfkF3Xdy8LmYXD1FjH9gNrH4ceH4mhYdPP2eWNYrzvREcUwT",
  "key14": "5vBX4swQMiM3ucX2TwnLN2czmDX7HxzozrHonx7H8Gfm6Xb7zTE3tjsL9rWkXtKKsLaBXQkkjHzZQ7Yj96Y1rrT4",
  "key15": "Dex72N5XHsh8pNeqoqYYecknKiZ95LL3TiPwndA7p1nZxQ4GHRKuXbQfCkcQFrcb7CPJCA6i8sFV97AbUBwWagp",
  "key16": "2Pmv9asTsq9fUEF2iWXgDgWezRSBJsA7xKsqxwUU3EwbSr13qib8McLnn2FeHA41f5VfchdZjNbNAFvtbv69JjAU",
  "key17": "3Za5vHPf7G8xwHP9DrHV7PYUdFvSviPui6XBj9RLcjjZYcPipKYGsy2p5VMqKPibSzPvFmtFzFYqkUkKf2gbn7i3",
  "key18": "3HbzH9Fm5e1vpJMn1Mh5mvA1r3J8h7tD6g29SGXr7U2Yn2eFfBv5g6jWoPnkCUDF5ZPMVRCXGVtvK7j8m1fjiqJv",
  "key19": "39xjeMZaEGeicuvZS3HTtuqjoeGHFeg7DWG87nL2vHU2BRmEvMGj7c9pz6SyPEH37Z3kM2FR2FHBDLWdqYibkH9c",
  "key20": "2e1GoTS9Mx49GEqF8thhyex5ErV9P2hCpoeD1cn8VafPQb3NtTbXSqacC1pJM6RfAYcYscGoAqNBx8d6gdm8KDJw",
  "key21": "512qhVxoFofqt5Xfo2gnGoeigNFkjZREc9bzS3vW9DsY54iLTtGkDHSLwUrjuDEazHTQHNyE1fRzNiyS3Kr9UNBV",
  "key22": "2QX7poaVPVRNbeH2xmG56ZvzQvD8YJtWT8BwJydUEwStG2QLHPY4RmWsuXJJqg9dWVgJ8r2dXC9KE2cNoSWExQmo",
  "key23": "t6kj2eDjtF3YDVQDhEGS7AxFsYj5p3QdZ9QZXSs1RaNmUeJ3njabnpciMci9Nb5qfAqDyvHfdPtSpEU17cqNsA9",
  "key24": "2ZFtGTCSVbKppus6n5M6BtGwp19NCXRiFjCgivRxRWA5jUWyew1PnvdwFLNoGDthHHGGeHQyr9YsQLgrDy2hT4EQ",
  "key25": "3EYGNfb1hrBQgMaKpDxTGH7Bk3gcB5gVfCPfizxRjRgH2RsT5GKFtaGo6Z16tBZh17g759pnc3K4MgCjvp312Hne",
  "key26": "49yjt2me4sijJnLj4BrBFn116Qmiois8n2aKfbDKEnqgogcep3gCrGc2zYbUQ4sH3Ar38spdL4NbXFrZKSyR2mx4",
  "key27": "49pmTS9xT5Yw8Vg8RW5T6ASdkYSRxuhT9mDSrujnRu4nG5CHUGgDPsS2RgFtd2wJtPiQPJghJP2MBJ9KDdS4EMMp",
  "key28": "36GDi45QYUjZBnqEWy4ei6uEvVc5E4BMhmYbp1pgVDZv7jfA5SJEfdQaHWtUs4X4RSfQdAmHgkevS66pgqFSWy98",
  "key29": "2UNetLiGoFn85xdVRJY1NqLpLzphi7XsccVQbtaaE4PZnBFsMZdLSwskYMkSrDw1sH2DPZ48ojHER7s8fNYsVUWA",
  "key30": "4Zs2EccoKLWxdKJZAUpynZNwJm9ygrueiTKBVTczvt3HpMEnENiwu1qatiV9bjReivhqiYajoaCQe1xFm4rcVZ34",
  "key31": "2x7S3pSP4CpgZTxHmb9krsAHK76i382HKPe4ZgRGyypsPxB2nowKLhd3W3k8VVP1sEQb84ruHoazxKgqiXTpcQUg",
  "key32": "51TtpdqezUHbwkBvF1nyYyYVJhfzCbuXqNXrEvugjGCZTPWzwosei6jTYrqpz675SE8JmvjnZd7fafChzdqtYkn7",
  "key33": "er4H1vCSkfKEHFeqsCcJ6JnwDsZoEXVFu735R3dJQjbzP8VZGUw83YWaD6NujSCFtMkXV7yQupa4m1QaqSmxTx5",
  "key34": "2nj1bjcUXXXM89uM9vsZWj5k8hEBf8AXUtX1gga5vvkufQY3mE5MhinYJWVNq8X9jHfKTAdExCgcyvERwdwHVf8F",
  "key35": "3yCTbH4sz2YBMEitpG7u7euXX188BmpdZKw1yd7ChXuQek2QfADwsimBMe8kfdDSsCnaNFqFq96ygEpn6GK6PL1V",
  "key36": "2nyWSjZwnTT1mhdJT8K66VxXaLZnUPsxpQ9VKN3Xmt7Nye4AUs9rKjZ1nTSWqknctZCad3NsBsZ4RMcmuH5Tifme",
  "key37": "3Gz7FYmXfthh5rbmgZqsPaP6MyvxaqZmpCqnXrXMGJPtEXz9xvToPaCHFdATheMu2k418DeSk9jiqQC4HjDGCE8a",
  "key38": "4tZwdbhkcbsTYAtJdaJ59cFAgRSbw46tT3zLrVWFxmYfxpNUcaK1nYpCMk1F1efoiKFNTuvvTmXPQwqRC5g7PMyK"
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
