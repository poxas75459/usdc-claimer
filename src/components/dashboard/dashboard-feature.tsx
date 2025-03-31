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
    "YKYsoKRxPGPB8eagjoc3yu5kvrc55mGHanruTRySnhCbqPZyV5djZzVpWviAvTdE1zgjffHK7aJvULvx666ANG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XzZEHRxFHRtDDATbvU4g6ZzDZdQvFtyt6mTjrXbpMN525bkHya8oTbgGoURGNr7w1opWoxYKKi8FAfGyx9HoUeJ",
  "key1": "4eV4dsut1EeFbnu4vNyphtohejDc1K7VriBsW3GRUmeaZkua3b5DRXFVzxo1u2EBgQdukSMgv6EH7kyfASMC9St4",
  "key2": "2aTf9Rm2Ho1DoJmnTYwCY6fbGXkjMeCXP3KoU5DTANK26aayDqXeHBYHc8pFGDWoBJxKW7MJJwCwyJWGgJprykhW",
  "key3": "ezrCoHKSso2Mr6eSJsHyH1Sscqqh2P9JtbCL7YE8JMqbQPgSMcQNtutD3ufzYvABDejafQP3A2ivzFYb3uHsL7w",
  "key4": "5R9xrrmwF2edbCMragJkeoPNks45Wd7wYy7quDcCJUwsiHZ3EhavGE9pKdL8MnKNsfJEJCnRo9sqMey8guMcUNV3",
  "key5": "4SLPMSBky7RuBNqayjBcbJS79mjM2wTXnhNP28ibnVgMYhvM1UHCsFZxV5YzyJYHqdZDUqGvB7zEfxm19bhinHXK",
  "key6": "4ovr2DvZa1epk42bjZFHn7wgFK2o6CJ1tb32dLg6RwkgXJdjDM2nmLYpkerTZhfk7uzCSJ25AKjEoe7XqtVpYkaC",
  "key7": "WNUpdHKVFnU4WMKHn8Pa2oxKh7QFBtuJ1h7sWMsP7hd8JHYHKSTMuw349x6oJhoxdA1X593yPyfCEcMzxwsFHQh",
  "key8": "bz4C7m2aXQGVUTyXnwMM8z1RFxWv9vjw4jRbS1cLxQvRbczCm1ARo2hVTbovB4s642GRGiNxEJ14bP8QhALNrmV",
  "key9": "4crGX3seRuuWRkkp7Qgvh3A8AbbKHpHyBGoTRKxF6zZTFAxKyLXBKkpD9najUNW7PPfgE5vX2JoCmf81QMQ2XQTJ",
  "key10": "4sK27Qqajd79NvXCTCwVGDeZTshuEdLMS76jB1xzVHugTnUiGJxtqDcqok2FqnkVc3LkX5ihr9ZmLQQQTj1YZE5C",
  "key11": "2BDiskd6hBZGQjKYWk3ZStCZtMby57NdWpieLe7t31S9A9uyYvvBmZaaNpmAU4U3w6atq84WamGd4ZJTDLbLgyP3",
  "key12": "42xRrLCwXNZh3hict7hm87HgsFhwEpgvkn2BVuqs8VQyjD9nRepFBRzhXsxjb1EAQGe4UGSWVZLg1DMQqA66b5Jj",
  "key13": "5h7zWbp8J9PPDmqqiMFkSmm9f9eZfm8ddhPG6j4cwETYraQtZXBuUJaotQrnzwebZ3bE5Jm5PzamudSeh7soRw6P",
  "key14": "4MLeEtLvYe5NcpMTcEv3yE2VhHceEH21h2juGsPKDHfWtzpyQ8LXZ5BgwBrR9y73utNqjNRtozmrUeHpMP3s5N74",
  "key15": "DdgmVpcqAy1MRWoR6ACcKwThUwNfKRoHA4R1qj2pxatgnZKN2mRa18xeFBjX2oeMS9zHkPiseZt97FFcZfPfLGB",
  "key16": "3d4rodrZSF2AH9LQthhjrx2tGoaQ7jjpdyMnchBN6S6c3Q5EhvmVd4R8wnh8kn9yfW8aTR62prXc4VHya5yJ2GFJ",
  "key17": "Z7ic5daVyjV8pBYzYDeszLhH4Dexdzdoie6wawCXNCCdqk5KKPgaySP6sCPfuXKQjDzpnVGNRbSMSgske1RurrZ",
  "key18": "5rAyoisQr2UKVfngCD5QM9div5DTyKtLyT1NvawieaVpQvia4Yyt87MQyqGiiroDEgbv8hqvxBi8eynXLGVPA3iL",
  "key19": "53ykbiTnFxvyAk9yyNsDrvoKH33UFscKCy1pu3KjQ79MiBSoPDPCnzk1inoszaBUFcrShSX7oBRdTHZWs43ui82p",
  "key20": "664ySubDfBg5xogEv2gTU74fwKU1hy17369jGQrHbvjqxsVyRidvbiKnRuYm5DpoZ2anx6u53MTtLHX6B68d6Yp1",
  "key21": "X6nnFhnZ4g9qaZYBsFdCa5zJ416DQZ3Ba6daBonFqwAgSbmfWAvjoBheKm2BeMPQJeojQj9soFiZcmdkFWcLvni",
  "key22": "5cvfXKDehMi19ijogw5rpiejVkfEhwMG7XvUdK9qFAmV3Upqugvmad4aCxRtZMg4RkP6MTdZAvgiPQ996aZcqu4Y",
  "key23": "2XYK8dtTpWwrg6hcav84vqJDUG2WNHzV7fLzutYHkdWtpz4Y98WXjBV1rLaercxFZao3DG9U9Ej4zGkZVK6Lpv2H",
  "key24": "2aFaoN7S1RpunfHc2RMxT4RnF6nePgSE9n5hbmVpk53BT7SRTnnTKBVJrDKxn1SpJcXUwpC5PoERWojCFBbR5ebJ",
  "key25": "21cqndiK2QssTTpxnevYRAetR9bMSbQy4mmoPJtcLJ8mphZfQT4QCDG1jqEF3uWMX3BnAYuEJr3vt4RvGdk1X3YB",
  "key26": "2wm1T29STpBr7bHD2fEBBSg6uYwHBALgwsP1bXRRJwdiMQZgW8UFYrAGkVapg7yVYe5dWaq2jwBvqBzstUqba6jc",
  "key27": "4XAYGq87wT3KrvMPBYxKJcbsU5kNXG1kqNXaLGMbmwFrU9PMArb7YKhi1BLM1Ha6roGM8VZEUvcrd4z8ox8ePXU8",
  "key28": "4EZUtyMzdVsdJABHetHSQZZ9QUyvJo8ufDMrHQogAMRCsyWRN8VdE5usGkCKJpmB3QERGRTsyyqmSiPZdCDkm7oa",
  "key29": "3cVXXhL6UAt3yayZy3vhyEBT98UqUekJMffXHS6xczymJHYvQqmhGt82GmZ983gAj6fsDLhyrdeLK4K9gfuamJY7",
  "key30": "2BjZtJhx2KaN8MfJjMru7BSmhmXdCSUokpmYshGVSEks97AQpiUwph66a95MrxK9N1VcSRJ5PYF6MXAroXrVcuFb",
  "key31": "54THf5y3KpSJMn9pQzkvzWKy5qjXm3DJy7zoRwrzn9J6zRvepE2Wvu7zFed5pDAm3Q1v9MnFRBH4FZ6eawKWhepb",
  "key32": "45qMLCdphKhNgq6tpVf66gCoGDZ1MhgDjgtUL6gFiLXG8GnECpJwsj6vHHtkMqbsB8SSkFaehxt8XHcK2j2DgU8e",
  "key33": "2EzoUvdBPru8xTr8yGMsa62u4rZ8r9DkSD9yfpx2qNMKJ8MbivaNWobGkQwxD9WgRFSLqYrHVaHE1AY3yK6Hqe7E",
  "key34": "5iMauMxagdv9SrtdwGkjH9uxWJbgeKbbpa2KBZdBjpCoULTuQxrX6Q7b8XawcL85fnT23CYYR1A1WNZvvNbpmmqu",
  "key35": "3qrFkcwBprq2NKdJu3nNdhBQjqxqog8FjBEsQWaeNUknBUJypRYQuHsesLENYCikb6C4R47gQHaouapiUhHNCzV",
  "key36": "26dpasWkBQ9N2DFerLugjDuS2TZ9hRioagUPkrgs8otuVR7QRAjvkrYFRwxVkJDJxu6pdm32s7ew8QbpCz1LFjE4",
  "key37": "2DLW2sjZHNuyodFL6w698TPPj6aAecXkoPoqKMRkM9jTXfUBmtaVxm8FdqbrB45G8vqQAtgMoMCm6tT3An9JMGLZ",
  "key38": "4tbHx7CyZtsRu3kbwNbHGi3svWGaQnBzUeSctCm754sufAhbakb2wkKE2ZyxVcJov48woUpVyV7rEUwAJA3pxKDv",
  "key39": "4my8YCTogfrAqcyL4PvEtQFooxo7RDb4B9eUr984weynPgwiAde2WpEMJ466eAQJGSHqs1sc7Xz7HY5UcjEouWu4",
  "key40": "5djnn3XCmKv8ogZNThQNcLUNKmmec2hh2kRAagEaGXhCqpJJQQ94WpVUGhAYyZc18S4gASPjzrS9QGPcuzDjL8V6",
  "key41": "5F4vyBaTXNtYt66wqdnWbWqNbhVRNRg7LvoHGQMoBgTpZWSx1gvuQRrFwj7UygKDKA9fzRBSwX1N242wHUYBdkdg"
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
