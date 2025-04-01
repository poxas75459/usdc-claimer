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
    "3pXu215CYceiSd2DCspeNsfhJjaAbLikiKJmSigLSNsKmDqdxViFEEibaSY158hmTQVToPc62D1MihCteXYnY8ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oa7Leos1ba5ftUqzPnNijwtrornHDcrPrv6b3rBbcpYtJUH1tLRM89HP4cMUybYkARuaW7EDvcKnKWy5KaePNLj",
  "key1": "4ASoK5srHxX6x9aUS8Et3fqdHdvfD2mAXTELcUeb3DCTZwZMgbCPirgVqNUnTXZ5bhDwY2bMyfAyVhFzqcbSBrDQ",
  "key2": "4G9ziocVeUTT5XtFeQx2ETM9nzwhhxGBCjMie241rSqMiUozZUJwHT8iFWe67uWj5vp2Sb54hLeGM8qxofjXKKoF",
  "key3": "2DrkXwg3b1pb4bbgJnjsr4xtEQ3oRZ2jAJGo2FD9FqQTJgccKUk3gZ6vDvwshk6njNP1hZSEfrrsdC364ziYYehB",
  "key4": "Pe5dooEd22MZh7KQ2hL26K47iprLxHcPs2AkdSELAeMhXaaTkfeeyBF1h8M7h8K6HRSsHAYEgvZ5mZ1RUX6dr5D",
  "key5": "3woy9Uj1newbSB9KT7wSRfTVEVNvitzY5YMeiqQfgYgD14f6oH6sBqLoQWtdfqha6L8QGh9Pe3Y4zGn4RuyXG8tN",
  "key6": "Rh4HNv87XLDk5gzvqn9cnW75CRD3sb2KW2kjM6njpiP5zjmAhrvfRQMioyj6dU8R6hmwENYKCD3VXfEfxg2AHfm",
  "key7": "4UWsvHnhjY7c3B1K7JT2WKNiSufoMjMWbMwBmh5dBacVenWu33gCkDYKchsK8Z5Fh1H4VUamgy2LrymFDMeikJxm",
  "key8": "2Eei87Fhh8B81z73hZ7PAMAM6Eb2tmEcVcTuzWs141Ah9tHkyjZJS1vHiKdtUwQNtBc3tCAhRpHniWS9qKqL2k3G",
  "key9": "5g4eDWe2tKF1DKKQ3ZHdXCcwMjpwAvaeg1aJ24VV3q5UDnPz5nwd9CWNP4n3fKrqsbZdj6Zm8UZJiUEGSXDbimdF",
  "key10": "6Zd7FYjtwm6aexzFHM1nKFd4xGgB6fM47M9b7EHZ2wtdJsgqiDaPLVKfpeoYFSGgZGNZyhMdxfktp4h4ydbyL2y",
  "key11": "5hmnfdTsjFae1Xa9zRrP3o82yZ1MJ7C2CVW2yk75QepwA2BMmQ89cTuHtMx3Bizt7infJeDdcnaYitoxvQd5QGxU",
  "key12": "JSaKWda7xTvUuxAxEVfKUeYG8W57vR1bJoMpXTdMYaMgnh45YMRzYHumdCFm4fHZdkdNHHWhDNWJBoriZMRXCNr",
  "key13": "5Rey8THqEcTiwXY6M39pfu6nxUUjJdBFsutrbm57Sj1eLQcUnR9UxqU5uL1RMo2f297aDMtz2ofDDWSKD5bGGTPo",
  "key14": "4im7e6w275JzRYRXHac5bCFPUWJZgrMwpXaq9ZvtGoQuGo7drRF1ua4Qo2dxUyg7LRGWm7G9byFecogsQ4fwDfgm",
  "key15": "RXBsDfeerz7EZGs4dQPK9e85834rVmcW75yhfmG2z9R64v1r9tR2Ho6cBdkHEmGLD3JULznLV4PD7phzrUvh7oL",
  "key16": "3CZAhmEaigAuuPfo1wxaVDfNTdLJDxABpCv63st78HRLzxuC6gv9VF4u6eQw6LTY75KFM77fU6Z4FXef3K6oddXR",
  "key17": "5qFwrQYog7ASEPtCrmmKeZyR6F9qWHJnFa859WyMaXUExd4XdVZcnzDh4kGzbGECTNmuUzRvZHSo21LyC61p4uWA",
  "key18": "29RaUUUdKoFeAwcBBekQYeTpDAQ3rwgYu7q4ih8ftKgotDNk1F8Whsi7wLyuQHqHtxcoEoFGkK3B7SDr9xbUFydP",
  "key19": "NiF6N1vckbaofGxaRptu4pjgN1oeaJPYa92AwyqMKrNtHfNwhPuvWAweTcJmHVUnV3NXTiNcZQLq7neWCEcs8Ra",
  "key20": "2jtZsmaV42H1i48Y6hWWLbQaumgtz5JVXecwFzhKp6Pboaouxh918znrQqvqm3uu5ozhrkC523FVfUkcDZmcFg7E",
  "key21": "5koWFA6bypbRaSgWExsnxpAVYxBhca7QJU3yU6udrhJaETqAeeFaxPZC2DrFFFQWqz7Wjeqe74Lx9ZBU2JqsxDwk",
  "key22": "4hTf8NwURzWuDrzovEderakadcyQye3Po9MrqVUn5PYoesMJA4zECBEb4WYjPiwUKaavhAVtd1pED8XQoFtPByTd",
  "key23": "FFME9b6DogCY4Gy2eENy9S6n5zBeS1DZcQq7vae47Ej9oVdrE2FwmKnXaWHSRnP5xPNcHBxwAXVw6k7J8iMHKBt",
  "key24": "5wfAM8EsHRjQHTgu71UFnjhAhh8RFFTD9HmJiwBurCWtXXa69AUYb41iyjYw9VChrSkRV5UUipuMZZbjT97u9LP3",
  "key25": "5hHAykrzp4gMXF5729vWNHxnkfdHRmGENMRFh9A1VhBAHKa5LdJyBfKKbqqSQT4LsiJ2yJJ8kAEti2nUoNUJdV6W",
  "key26": "4RUt6XHLczsvYGEJVXAtzeKkDJaHJLv8mKACDnUHNqnA8rbF8qPadM5X9Qbn2jHkb97jJsLyzn1a5v2Ccr3wSBZo",
  "key27": "VzCGCVJtmN3VNM51AQmCcxDhUZ6UaEU9vGGDSQ3SBpGvTMM52XoLuMfnrbjNFeCpeteTe2yauKWdQWqXTHJKcZj",
  "key28": "4KGm4U5yApJo3iAm7Zih82RYWJntCpfSM8ugi8gPML6GVp3k734dGAaf644AwdL463J2Dmmo8Y8TAgHJLMMqcSSy",
  "key29": "4zbX6WjY9Dx97WeRU2oBrgAi9J8xZueX26YNUZSVJGyXcNpNVkRdXkpCi7ty24ukQVjoKmA9fsZvj6qtq75MFrJ5",
  "key30": "b2ETZVb1oTn9hqzgcDUiwBpGapRV3cCJukqhvijFkT6qxmu6CuigVxXRDhQqBcCJfLEkds12nkzXYkU7QXBrEJH",
  "key31": "3YKtzwwm2f9vP9PxZfu6rUrycjP5TayQjoEyrEf7Ja6npdX1vPdc2GirbH9JHudZbR8rvfX19VxyokDNg2rvpkib",
  "key32": "5op41FqaTExdkkdSEMQPGMSWcXDAx12U5ubgU7mRe14itcabdjac3wMbB3UsHgM7bUT2f6A7zLbA9F8rjnRytuWx",
  "key33": "4CNanP8DtzTe93fjvXUpvhiCRgcedPVKubGAEzKbxQmdrarEEFPCV4yemVZ3gugbj3LB2wM4DqsN9DjBcw4BkAi3",
  "key34": "3YGhU2qiUhiQfPxkEyeYiSL6KR7wvefDs39ZtYQxEW77J1hCzBsCaNrpyjq18wYsWtfMEFQ1QpdetCAM6LibkQHr",
  "key35": "Ha29XsoV51VYoYF5syFGTJ95z4HpMze8GfJBPSUsD74aGhFuGMtLx879wFmpJYCLKczgWw1sxZPWFrd4h3ZMQsp",
  "key36": "5yaRn55tfqE1jFNMnYKQcBVDQmAzZdC6ehKiT4jWuV3rWNJU8bH1AD8HfPFBoUtZcDXPEeTQqsabwJPrFujYQJJy",
  "key37": "5tFo763V9vvq5ELN7VKVAXi6zhCAkFvTYNEaFwhbuniAqEK3ArtQXYEDN99jA3FpY1DQLnFQdhFSyNvqxuAhY58s",
  "key38": "33erx7rcf8va9jpd3BSTScGHFCH5kK7WsXh4NVH5PQH3Ph39Kief5o5roA31mbXMFWyYYpJCGmkRwgeVTmfJNmWj",
  "key39": "4pja3tbSidkZGQhnGxKMmppacbn5tLD54aXs25v3HApv4v94VhsJ2ugL8b3SY3sggS9QoSFc3q3PXggVzQxB5yZB",
  "key40": "2wvJFmTznvFwUSKx63xDQpXHSRv184RmmGVcyt8u7v43xGozhnA8vUzXngwHc6TGo6XsPPuMfbjZeTVJLxfBjutf",
  "key41": "4BJEWdukqd7cxqNg5P2pFgzi6nZWziaLCGMYkkYL6kBdpS8dVHYn7odXNyypEop4USUtzDGpMs2ojgm6AKDfptdC",
  "key42": "t6CohnEdxmAm6CehgobHjb4JJwA1AY4eXgbnW3dsLF1s6owAHRg4ZzTayEuMwk4ToTKWmyddyZ9zP61tGupjjJs",
  "key43": "2kEEMngkJmBJL2D45dLtPLtxBgRG9iMTSSVZzaQtEZcjHEXu8ZgnP7cubZADEtXTkmz7Bz4ntwsdRd866CAexgAG",
  "key44": "2azGDqeDAhEeDyzaVo3co88wFet2ipwNhCTZYjxeFA61B1SdfdEmsNGqMzna1fwGyZHvCg24ahexCKcqL5UuKfzW",
  "key45": "3bnkirxeh6hmoobkvumr19SFEhr1cA6GrKQDshLwRP3vv2gtfjHwZcp5rTUo8xzAQ6bMw8nYRqWey2eUhvQTCVTm",
  "key46": "V6ZW5fd4uLAqBkbzCfxCtU1HhiKEJJnDC9UdBgJPL6WobRM66JvYgDb9vT8GGxKEKMzRAH7rQRjNNbfgug1ZVqe"
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
