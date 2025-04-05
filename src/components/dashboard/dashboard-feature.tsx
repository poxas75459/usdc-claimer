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
    "3GEoQUrKqU5psE4Fwmfp1MfpbHqASr3WNxHvnvtSNG1saccw2pNih3ZtR5GvbdPgDkDBYipg4hkyo43FuA9uxtHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCVprEbKitZAurXQ7RZmKQ8onbL5y4MFMtAsZ7qUeTdsyT6xK1fBcA2f94MSAzC7rwFGtSBeJjFutyV8wJMiU3p",
  "key1": "451PcXUuU8MvmBhB3Xuiio6JSkq2o6NSY2sjbkPDB1x15i3BygadVgjmyqYssaVaVzSozPJ1qdSAheA8rxqasejy",
  "key2": "48n8hikjCmRx1oFm2ZMRU6G9zdUE1bV51ukAz6kcUawygXM5R5mDBQLg8PQJpnK6UP4Mz5pX48B2N9ubdmdHHcDr",
  "key3": "KMc8G2otRiRT3TxbVXsqQg43VzK7CpB7zguWhEi7B71cnsezFE6ScY4BXYuZcQQNE6p3EZ2r2DJKbVU6QootAwr",
  "key4": "5cTBMybFxVhy13YFYRRFuJ1C9PgcZu5kovwA2FSETwpqtppy9uftMdTDs8tueHvwuPj6yLyqNUMbqcUmjHjptarg",
  "key5": "5nrLJBprj45JDbdFuHjvR29spQJ1uBrKBr9U8Fb7bnWLeZNgitbvW2sMmBxFEAqFecTdStyVhRBTMwBqddi2GLuA",
  "key6": "5CudbyQzJF2FWW3SFKEjGJjePoKbrXiGtpceThQKsES35Ttzb7NM7h7wSVj6NiSThSndLP6bmyK7u2BoD8vCXUK3",
  "key7": "578kfLEmtdKraeHLDBi7JTELTwJGaNxaf3Z2W4nDUZLeNzhNu8z7U38a1z787gUUNC5X5md5VBUgZe88Qaq8UELB",
  "key8": "AQ2sZDD8uAkctVbsRetj38FK6aAt17yrCGBn989wZdF8h74em7vEB4M3wU8quXUzoi4sURCunDH6FekT7PkETrP",
  "key9": "3RtmcFw7EGzimuFwYqYBeNgjrTbsoyrceRkphXR8vmJLPFPT8SfKigichZgFP6fp6repZQ6DuvsJdnC9AiPa84pT",
  "key10": "67B8Vxnm51SvsdZx85o64PycEMHcWyLTszsYCzeKMJjqYMNF5z86w2Z1Xsj7pkgNwzdHpKZ5VRRcZ1if32h9nMKT",
  "key11": "3T2GK9KGJq1nof1j8nT2XnUSFYNU6QEzhnHzAhQE8VTRVCdzSzuK82f4GtK2uEV5aFkpGTZYVMwki2U8QotnUxYZ",
  "key12": "4AeBJ9NCUs9aczR1os6MEXaududUU6zPXEPewf5T3jtZjB11FstD4bh3eXuUDxBD4TXGrZdqxs6jCDDg9GsHqXNq",
  "key13": "21GYw4uC6REZQv4aiQJV8tr6GVNmFj7rWpEiEGtk5BYM1Gz7S8M8wXN4Y5TZuq4f6cZACc7wPTNWuHfWcjcvTsLE",
  "key14": "3BZi6Y2fGKQRzHRwYTDff7p9G6La1HPTe682rJSTPX3g8oUoADacEYeF81M8sisgrdFnM3QQcRYt6VfL4sbAaB5V",
  "key15": "5PbMNVcZimHN2Caj3uaPab9puWoTbcTKPLTQxygGrGDVJLos9vBpHWAVp2TRgVV4eV9roT2kbc4XsN1wmhVBq7zV",
  "key16": "2J3jd2arnt4NJEiABeu6yxRK7y6hX1YLNX3zbQ34XWzhmQ4Va1kpFmqdfhSBMCsm8nYY7Jzvtr4cnWi95icHgHZD",
  "key17": "2TQQ98AV4hrWpFzsVtBbtHotK4B8ciZtamCozHtcmEd87jdVaHeW9A52SZmN6cHX9YMdyJ8UwYZ6GaehLTdb3NVS",
  "key18": "5FxDgj1n8NFFmRTbCLzh6Z5M6SgZtCHWiNCPZYKhFxjD7V1bJ7tVqL6LnXBGP7N7213us5V98YaD17fW943Yccgr",
  "key19": "2jv5FLotEBDWq3MJs6dRxkPdUaMg3Nbv5in6Dfh7Z3qK8wU16oydhAg1dW1kdsLuzTpGDzwbM1tg9gaRUKr2SY4W",
  "key20": "4kyNVPrXk4AV8rpMVuxcJoicKXFjk7bW4k5NzwAswTRxXWYvyntkWi59BTTz9ioys63rcQeef9MyPZHDSrNTFFrP",
  "key21": "5mDLCyTQB8gg6CU2rNfCcwCVtNbczHpjqCmzP81LQK237sfquS4zjNd8ssGefUNLwgJTygDuMbYhXCUfQni6sj88",
  "key22": "R7XhVPcuniHKA1y8cwh7et8rsX6khvg9YGH5bTuFJvPxADJhiCWZNotrEBjAeEwbYpVCjSuLGBuQ9H9ELVR7vYB",
  "key23": "27o6pjdwemqCmPPcPn2jpDALFs2t9ZzqBsZ5f7o5E1SBzJTsbYutVPYwQL6WdsQy4j1Ndi14rPEZsYCcXLZivbze",
  "key24": "64EEeK7J8dRMpqMQrvCqBXf1baBcwYNc2nG2TqkZChbvN4q6zddyV7Q3xpyFKbMn1FFketLBZxLNtEMcKAWC9dL6",
  "key25": "ZoRcTjCb1yQxHf7BWFvDg4TJn8VSwf4Rh8yiqijSv6wkj4iVRm9YDqt1HVVDvN2tdhomBjoi8AU3ibb9VYxLVeJ",
  "key26": "2SgGPYsAxr9xX5wwP8yKrxWssSGDr855aiFq1xoV9b3UCPbeU4x2TcYh34vinqN6DFGewApGetbmVwPHXBycrb25",
  "key27": "4pKBrJ5b2xWCtKWqfsKsQvcyFosC5qzBNoMmP5NjDT4nz8ast7upd7nCXc6eJyQ3kUiUdAnDLKaCf4mv1NJTHUwo",
  "key28": "2H67R5ewHgDKmVLYZgeQe4ctmBMPpkTAamA9aSkbRuT6dCU8FRuKCp4JYqTyQHuKLyg3Xw67XrtuBeHMFb1ri3po",
  "key29": "3WedtkmEuwR2H2RAiQ6ZfT76dDNQG55dUyE8vW5hgH9UV4hVSvVUZ7KrKTgyWWKSk7nLomBLenTfvFATkyaEdW43",
  "key30": "3LhQUBU8nVJ1ue45nMBW4mSC2EybAcGyDRaCEofGkDqHsV6ZRmAjLtaeTvR4QApCiB2B1X6GUnymGSBZ4gNKALFp",
  "key31": "MSVzKYQL9EN4WcTrAdgmhLJXtpdbZ8ezYm2S3aQQmdDPATHQ1XkcUiPcphdHW7LrXY3VgcAFgSPmEvsgwDDPawS",
  "key32": "WJ48bZRtb5REyNMhPwM9MhpszDVFjv2S6BnGmxe1tRfNM1Ki1LyeN2UWLWWF1x4DFEcDkfvtcD5FT7xhawAK6D3"
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
