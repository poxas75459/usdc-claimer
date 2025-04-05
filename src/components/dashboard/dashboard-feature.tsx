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
    "gCd1Brave4ZCstN2PzouQjPuhA8M11TcFVn8XmDNFJDFJLuNkNLFgGeoYx6VKkFUegSR9Y8HbY3xEmjF1QhHmEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61NdWU8owH1Jz96Ev5HvbiBXm1wcRKRDDSqSdQPjT3PnVs4N6HRyEL2YjDBLnnvzQ8PiMCXTSJFg57CiAS9ngBHr",
  "key1": "4JQoqZNBjrkaCmiRj14uMV92KdBumGqrMqLKxY9BcZoTNQRtPBta8EiuGD3TVEyBX3PjVtZJgVvL3K8RQmMqFEoC",
  "key2": "cH3NYc3x63nctXtNXkEfcascgaXwkLBP1neUMfXSTrTyaEPz8Y7U5DtWFXTW4cFGLPqGKgQeKbteP9YG79vZChB",
  "key3": "4NCa96QeLiD6G7mjg7NVtyLJoBZHDQ1Xq53EG2LjY3wZER8K2YR6AU8xa5JzmwgAj7r3Nw4J5sZaNi3KLyDDvwWu",
  "key4": "42zW6qKqF56Bg6kNSda499FmSNLZBkD8Aykz6JmgA32WBdGxgtLfq5fbdynPGPxfKax4PBtksLL6fNgVJmRPm8ub",
  "key5": "3NUh8Uqs4vrL697Tyu3em94BTJu5zPjwnj2UxjM2MvodMTV12FWy7i9fV8b8a4RDcApnAR8mTJHVie3v3XZjiXJ8",
  "key6": "3rJ2zCSHRzNRjcAA4jzFFsTaCBZguhTpDPUtSMM6SgaytbV1w71NB8wJsoeVrtMHTVBzTmpMHMAduXJRb8axqXbB",
  "key7": "EQzUz9MsLsbXg4DQ48SGgwvNegaYbpU2B9HXiFPr3jMaCjuUV5VR6upZQKuFzThbxwHMcKNDmebqmtPvadGXUFp",
  "key8": "LiggYfg2tyXJpubk2f2814wpu2PAwwby5MvD51X2aiWiL1z1K2N9UUNYu1cL1f3iLfrcfsaZtoqaMfekQgbsvQD",
  "key9": "5SYyitCRDrs4A8DdmUYYsCXbSaMKQS4QMm1zmW6Ym71XVPw94CeSpKxEYc31tSZ3uJFVpX5STkkBFfsUtGSWxMod",
  "key10": "34GnAAzcDfCXgsZYLgUS5gzQbBxuixJ5gvyutJT5szYmKfMsjJiJ3G6ezbQiJhzro6DkH9ZdZFw7EsxSigfnUAY8",
  "key11": "2ac2rFU9sbNGFCBzmvbLEqbUiAGYcTYxeismaLyDKK5rArRwENifCwrS9T9yiK8ma8933Nm5RfMZmpdkcuAnM4PM",
  "key12": "4hLDtdMyAPAHAWbQeTshrgTAVvUKdJ4u7teicBXTPSaLYfvsTSTga6cb8kvPvZVG5dPY7fKAFr3NWuvr9Ws5NDcK",
  "key13": "2N74QxfqxSAKGueF3mdDRH4zsGshvYVAUYCHU6hbQfX3Yo7Vj5vnGzXS317hEs8X6fFVRKos63Nnro3wkvQPEaCp",
  "key14": "4L2agjreexLfxVXxXHPqdzTsaMYr5Nx6ggjeAQgbU2wKs1HEnCev4xHWsvkASFGzXTdDmZ9kHgF8TznTsoA2Tq72",
  "key15": "3C3p9TWFJXa8jXGiQesqJFQye4qzELXA6fGtk1vbfEPig8mYKuPNpyCgthWrsTjqpTdJzb3vUEoxQng96kJ9cqFt",
  "key16": "4Y3wxb3qJ8Yb7Uk4tsWiTDooJz1HFRwfH6A8oSw98uZsaDENk4UPxyohh8HBsk41xrdJNPMkDpAFkvj6iscPo2Nd",
  "key17": "65tS1upRRXfbx1ftSGUPx5Mo42o5iRS2426WkQMN394RhCBmsPhhvyue3nWUdbsVNZXFMN17cguRSSvFH5B7hzkT",
  "key18": "bgesvJw2U5Z7ma5Q4kZ4LSVtif9iFVg6YHmd2HkJizsVyAPU4T6i8Vw7jVey8hAxNG8rveDVEgLrD5JKM4A8Yqn",
  "key19": "5rzuXw1nT6XCayEuZHzuuvHE4GE1uKvBtmDxAGbFM8Fc5fZnUFVxSzzMSuxJHmA3Fb77THPf8CLfdNzBG7fM5RpA",
  "key20": "4ubiKMi1MUNXL89SxeqyYSVVa9Sz5CfirJjw7cY4HYoJkkbtEuwMmEgdN8NcwrHKmrBNciZPfxAeeAhL2nJNoHEg",
  "key21": "5yQbVBR9YATzjH8v7a4hdXx7kpcaEEz7uc7jfQ5p8YbrVhsd4D1fCpPaXbFzBqq7NUarkw92JuUxGgatbps8e4s1",
  "key22": "28wA16yfxzgPXXrYrMsZkXiBkDRWdfgdeuik1D9E4HPFMpZUciCw8VAzNqHnBAm2imZeMtuXQmHYHos8QpJzQZGu",
  "key23": "3Ms8rWUVUDhAZTwTxfKhi1xgsj7XtWoLoUo7PoPau4FgR7m3Rny1smXT2cdQ9RdMqKC25Zz9b4qmvZ67Q4sCX3SD",
  "key24": "5qbRAifa8uTMGciLf4bN1DuUjEZpCVZDeW4C4qNp83fQRdXXE7RzMFKS6ScLqzyWR97FF74zcdR6B8dJZWXBsXDf",
  "key25": "2moChuFDDdoN47q51Bfp5aAqqcTVg7jm9yLKcTKfUUybtWXH25NtD7vhPue2YizSAhQwsWuvVqFcCHJB8qLnyrpR",
  "key26": "3AhEB2LvM1pb7bTK5rruk5KRUNxVAHm88Js4pTfQ4ZhrQmnQKXrCpyfsxoXQd9NqkcGB45agypJuwMLVuRkZQxvu",
  "key27": "4kDTsbuMvU7bFYmuYhkesp3turkAtTFufuMW5Pxd47TzXXTUXX1Qej9cRdQXpA8tkERzHg9uWTegJQzGfnQ3ySpz",
  "key28": "2SdDENsY5a7J4WZnY4XAVwWPsFEEsWKmYM3DEmPxXBFFVvmuWyDZuze4ybUoD9GUfLPEoVJ8pAyA1Es3ba63ACHQ",
  "key29": "3CSj5mrZNJP6Su1kCKsPynQMKDiZXArdsXsn16yc4Jd3iAipZ1xneeReEunDgPZfoAvGVsb2NiURSUNYLsLYK6Sw",
  "key30": "2ftwM2ad1wk6MEwvHJxYqVMD9ZMvXb48iANSyTBKKPmYvuAwaJFBUxMCu5g4wQZZzMuaCoYtfm87TLj4tQqWW4Bi",
  "key31": "drsnMuuEDkRmXoHmNp6bnvQPdzgeyUzPBN5tmNgHwvgLxg1rtdUrEs9qDZ3kqWPA1j9y3boh8HnrDPXsxcwMFEk",
  "key32": "5vWt3d8UNbJ4LyB261o4R1fMjyrAM1TrLSLtCbBHEKsK6wAyUEk5gMiL4FYRqQRKBY1oNbVGK9DgLK312LXUfB7n"
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
