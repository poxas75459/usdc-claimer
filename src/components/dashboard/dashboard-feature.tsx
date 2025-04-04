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
    "WGUpMxQu4GPDV5vZG7aU3odL7ea2rbS8Vq29GPhv8FVr1mqqtdAFjnYpNocRaN8eVv8L5Gc5uJehCFk8tm37x7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MgyLLwHLqwZWNUtDCwNypwE39c1Age6p9T6T8FGk6vaepX6w4tXwh3zYuGFh8FGZ3wDTBxfEWK1F3TGL4gBvPzK",
  "key1": "2uiLm4Fv9zNQomYpxa1wB8SYH7F1X1s6tNbs5FwHSBkFyKXQFNo4kcf3nwwEoz6oXkKXXXny32oAzWpjv4Czuat3",
  "key2": "2xh6YndpUKgGvBkcakTpiXfhKMEuXwnHZmMT6PNj7wfQ1E7GJxL2wjdwrZo43RfZqksw6HKQSvv344mUiAQqRBVx",
  "key3": "5J6wGEx4gzLr5MwvxidoA2otXwZqB8RnMZW8jSzWrAaWGf1nV88RyksNjmLvVsYeHstrdQrQonseMeabKi2zd4u9",
  "key4": "uJVgXBkFG7MFJ3RBNToJkk7DZnTtVjcvBAyMxNwvTPbEWqLDB7dbD6MHHyYg1sbt71YSgRYjxP16n7S1gGadg36",
  "key5": "2PGC5imdWnmHM4DMYUDQta68GgniyTsDNTFSwxYAzkTRMSxiVm6goB87A7jk6s3EMsAuaRNrsX1G58Pg6779VtFw",
  "key6": "3Ai9hUz4K2X1nC3HSfScHs5bMxdLnobo5fL9Sy3Kg2wNYWrVN5GRxCWKLdwTjQ5zfE7oqVKuPYfQgZV12mi3nj3p",
  "key7": "4KssnAqEEx6nL5psdbNfpaYsSsFWE85xVaMN8zQTiVkbwvbLm7kcmmAUkzKF7TSU2JAzyhhaSd1RkLhmwUu46VTY",
  "key8": "5dDmo77YELdbLDYZ4EWGgRcTJVxBzqgnqn9VDqB2FrN5BMGMtSoMc1gAZMvJMTKjc42efguS2GZaUnoJMWFpFjs5",
  "key9": "3544i3QVYFLZkids9QzqPeHK49ore3ZiHtdCg3vaC8FhcPrh2qCd5YVg5Md64CCyQUsBBmFCX6GbqKetYiKwnbJx",
  "key10": "53r8ptZcgsuwk5aAonAmbf9kACzt5XUCpezxGixcY9K9moEDE3AYXfAYuujuCXRM8ugSLDfaFA498WjaZz8x2ZP7",
  "key11": "47o7eGGtyci43hyegHreEdqGfZcsDFTcdF545QfkuHCvXtFoj5rUpAepmStbf9Khkxmks4WFN2j4TtgUdALjTLkg",
  "key12": "5h41G9Ho2YVBXn4DdWtH25z61rzX2ppkwywayd3DZTDFnzMZrEtytYZnzMESSbKNsDgWygWgR8onarqDaZi5X2SZ",
  "key13": "2CKWPNjcPLKWHh7B3noDP298rcmXH5xCtNF4a2V1UNW6KReRCmVGoS5ciX4zbtyjKDzdmkABnWvPa7zvrBybJaST",
  "key14": "3iWZuw241UT36pSrZo9ypLKZEg6zMykQ5xsG6xmZks6ffTexydWd3xKog2dfXPGxBNLPDioRYTVd7BsBbXUvfSTa",
  "key15": "Ca5r2Jt7ZPnaxx3D53vh5FYftbSfm3c9UzE3ooJzdcJ2HZq6pA32uiJS2g5BJsWb197rPmeJPfbptW1WWj7cZWu",
  "key16": "25soom1puz4vgUMcVYGUPrCBJGREtxP2pdNntRZsEGDZKKg3wjFdZ39bmBbSCQz8Hfj29ATdjS9UaCxxMgUaPR3h",
  "key17": "3oQ8RqeZgX6MkAyNMj8YzLbioV1cxgXtxeTcwgTVPsq9VQn7kLqwGXExwCZ91y6MoSmbJy79Be6DJCiwPHoQYgNG",
  "key18": "3FpUcqgo9V6gJ4MX5uAZD1a8kfdsRADYQeYCPNZdQjeYrty9S9p46i8RdCUqLjLe6soU8TYxRgcqHo4nupwPLE4j",
  "key19": "31zWqcSjsF9CEHd2FWaawb8zAYTQixDjp6zex75cEzEWommP2cDEHhfi4GXyamD4JYKJYYiYZwe6ivfew4xESmuo",
  "key20": "5yG9NgSCY3D3M5mwLgh4hhDM2vgPgg1E6x2Ta6UzGuBmqa5ZLLQz5VbtEQaUHhve1PnQuATKXhQvb1ni6AEviGuU",
  "key21": "NCfCL93wDwo9YmBTq28taB3B9sGfNEdgf66gftC6mZxdbRRwaprQEAeXcnMm5AciG6wLWbgdYwg4i14dPkK6kSB",
  "key22": "444ARoT7KrdMDNqCqjV691Crzx4LkEWn2fPHpBsEid6NfJdCL7y36hpt4PBF6kiwWEoyuq71JYR9LJW3qsuqfqSe",
  "key23": "4z91uL2pEuYfsuigEr2NgAKizda42pb239mjEjRZNtEsfC1pKU6Ukx7ebZe2uYQnX2Dv8iEFtYcCY2noFXamBa6e",
  "key24": "4GeQYbeUge7fvDrQbxyXt8A9h93vSnrPcRjCSk2DpddhQv2gh5pvgUJzvU32iyucBqgHyq2C3zchX6dBSFs1wLCU",
  "key25": "66qmV89onnCvPbnNsMmoA9jEEzsGdjCP2Keow41vn9nhNyAJypgkX8nPrrpgnWXfsKpLHbGuVEKRcmRubP4eUjqu",
  "key26": "2iKhnk8erR4D7EmBAwKSc3Tv4RkNv514bbhb4drcSYyMJ2M1f1mJcnFis73agomNFiRgG5B7MFWkWkEhXbD7zAce",
  "key27": "33w88KnVNXcx9aRNC9V2KFstcrtJEYua76wNK7EcQfQcgfFZYUBY5qqGF9RaVnNMsj4tATxFKfCWLJRf38jXjLN2",
  "key28": "53jY3P34PuiT1wD1q3RJhmJUnxyHm7c6b7r8gDUUbmcnPf9pVGdC4jJM9dXCGU42NVhZdZveF9NGff9GMafFcDph",
  "key29": "59Ucr3WYPrL8mzjLrSzHyKREp5eesZ7a6F3Vv2R3bCyvNkbgKSE2euep4hxw1r5azHj6T5YCsmgBwRTspMn3tVxa",
  "key30": "5CSPoavBDhNKGgz3cpTDxuuRAvkikbBYYmChMzUGi24NZhDvXjNRba3CbLJ32bKNb1kNAJMvEniTHtFZUDKFwcp4",
  "key31": "2sQLfyojGKi5HkbVaQnAJEsmQXRVDwSiL2mFKC6dMyc3ndpGVxF7f9Ka3iEXWJ3SFJxYvFcYCv9Giw75DmVNZQjo",
  "key32": "3bvMZe9BPMUCvPn17B31zG33o8AjB4Zp3QiUSQub8WfbiNCM6o9dKAmCAMwc14J6L3twcKnwfNCf4SL6oo6bCHkj",
  "key33": "4izCadwsLtV5U4VV6nzPJ78gVNFg3TxEjxv8TbgAqKyzZtkqsRRL9x4qCB5msTyRqLzL5NzKKLj3WBi7CXjuUkKP",
  "key34": "53ExjJDwVY2SX9sUWxUVC8CRcjTHky9vrmPAA6tfcoqENLucBWKPFUxFoT6P2XX9GHRhzStHoArqg2bLKbfWD7Q",
  "key35": "MxNajSXT17bUXtrb8HiQ1khVq2oksFt4WcRCzFxePLvUmHhdT823fPrZcFWfh3EY7emEGpmqV5Fmmr9PH8LdUge",
  "key36": "3znrXqH5Frfw2yMPCRgFpNU2hUzVyP4oSeqW6M28mXU9emT8v4QNBH7TN9GknMmvnoa3hbnMi2subkDRF8TgbJHP"
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
