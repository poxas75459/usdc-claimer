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
    "4RAXCJ9xQZDdncDMhZE9UqLWQ4ZBJ2Q9XtxtJDVbfvpwKrwDUE4DVXADCVKjKG9L66GzRxA1BoY6CHLD4eMRY1qC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G5nwAxBynttAdTgyQGu5FyoLsHJbgJgd4i6ZJNckEXRg11VeeY3w14CHLCnT51Uc5TkfXyhaFzTX9YmL5zibiev",
  "key1": "59hzDwwEKtJurerQK7o53nCRbGeqMb9v7nJBx3LYWTk7Xo4cJRTnxbC7NTN96i1dCjvso7swGLe5bVS8tSHe7bLi",
  "key2": "43wiJYPQhkLNE5RpMPs66u2E79MaAM864nv89sShDzyXDLzYy3WpwAXnuxmZrpXxCtWiRBxg4kAYnT8gnuM2musn",
  "key3": "c2ydXYNDAyBRGEGPMg6r3XkcLU1MXzJZK3ZmkMuYinFvSpaN4zGMir4AmJt2uXvE8c1otixbtpRTBxG1jzvLqfu",
  "key4": "3AaBCTAnR2EbnB6i29fTHd4mvq4onXaMr6fUN7q2qQ7pJDhJUoX7buhS1TrnPVM67bTtSaSYxWNXpiQLz1Q7LAtw",
  "key5": "4RmDSkDuiL8xtq8La7X7cEHG5whYxmPzQoWyTdZRrtQUSmtrG3ziCeF9ZcTgn1jw8VDVbrcGZuYYfYQabNrP8U6Y",
  "key6": "qm2ueWdgDNRuxD8UAhtGG1gNzXhXdQcfuFMS6LBvaYwQAtV9hVR7LqQMgTBaSpqi71yEAdnmi6Jmdr8Lt1xndPE",
  "key7": "3NqnMtXeEKfTZXcT9Eg4ADnuibJV2ZAFKEeYBdstW77Yq2Auwr9BGtzg7YAbSC6uKXWR2YCd5zmcEcoSKkETv3ZZ",
  "key8": "5pc34J5Mjfzr2NoArdS4BaF53rNzBvgkXY9aozkPSHA1PpYYJo3uZGCEJ7RmSFTj6hzawbNr3vn43RVAPXtb6TB2",
  "key9": "4qFdVtfnnSxJSbFVWKerjiPVyjkakwv3959uyeZYURauukCF99GC9cZ3mnMCLrsGbRc2CF42DNKAbKfbGiVRWv1W",
  "key10": "aLCp8fHLFmRf87FcX4NwYcEUTP5wrm7tkLUBKJbwV7xfjALou95UT81E3ipRCXht4j6oDDruVDQtq9u8XbX4ZxN",
  "key11": "62g6ximKxXfNw3dJj7obwkktw3rYrLsjRoBiMCbXTiZYsntp5rsYeh1moLaWndy3HGXYgqpm4vvEqrDEjGGWaaHx",
  "key12": "4Pcot6YDv4oXnk7rsX4RijxHb1Hz5t66AcYe4nSwhkFKGam2pAQNcnAsKMK9VMpffjFh2qkcjUsaXKAiJ5E4YqQo",
  "key13": "3d9wMJBLYLcnuX1836jWf1boHjqBZKfdEoHHTXzoMknKeeQrfoYpdcKDNYMR32uEosaMo4vZU59b1nf9SGbJGFhH",
  "key14": "4uNfp7THu5NLQawRUVR7768EWfCS68xnqkd5LRHzbzCnSAAf6uspdMjjmNaUSpRuh93x5MR8chMuqFE9AyX9y1cY",
  "key15": "2FkyDY7uZnCLSVzRum1Hgc2bWFUEPTKMFCe3B4wJLHE3okNibEYbuM7YxtXAoZ7D5GkN4ZxTysH8BSPsHK3Tpjaa",
  "key16": "5SHM1qTFBPZFSWQ4NcxXzR3ejNM8j33zgyhZpGgfzYFVJxYny4iG8cqv8FUNr67fR9uWHmUuVA9yKM5EByM1hQ9C",
  "key17": "4jtYP8XjUXCTpmqDuWYz1LbLd3KoL5iRqFrqVKDjY88QV4h3oFfvF5udjuzxsXg64CEz9HdNVuguQE4LDypTouFo",
  "key18": "28Wj2WV5bhGXwg7tsZhbkmJfvn8eUxYwvC4mkXPLmqJzzKmLCFWFhhCVY5M8x8HfjGSUSaXxJVmhvKjnERP7ELyw",
  "key19": "29Q5pYnsynq7zmYpJzroP6enBWYLjnpguszbUS7qn9UN6yGuhoSAiZnYUvBrjzwB8G8js2kPuiTQYb1SnWyYzAAq",
  "key20": "2vQQzKVN4BQDvoYZvQomEZYh2wUqg9FvKWbo1raCEDUGRf4vUQ7V4TuP1dvfWMoG16ru33TVYE6KLjRHE6MNpG7r",
  "key21": "4BKnoubZgkSYYwbitAcYZKZs95QiaL9hxcD9Xka929ugscFGwLh9siMRn5e1wVU4FhyYUSZeYejDeuQd8GGJTtJv",
  "key22": "2CBiNPuo82gozkU8AHnHBXrwk6Y1fY1h5pc8JiAUVn23AEZZc3N8NQRV7evMTbQUdScMuDvhRuGbm3hqR9PRQEob",
  "key23": "4ZRQP8Brt37No9Ky5wf1A9pqiRUpHd3Lz6o5V6QAaMSUyVyxnPUrwDYeTbHTtshXroQLEyah2pttuiGSEc8XDqPp",
  "key24": "4sFoW2F6NHrvUfEg8djooU7rTkW3Jw5mpbEz2o8R8Qtcykm1aFxVbFuSw9xyqNFqmhs9KFAHnt3WU2T6d7CAXVAd",
  "key25": "3FCXskf4AMEYxuwSPdocYrVoaTaf2ftLPn6vVMamcY64KLPrkCk3ewLQmNwht34WK9jGKehFtHxoyM8w3wV4kCqQ",
  "key26": "5u3qKBnfNi9qdUa495yKGfBQ6hg67iTUMyo4WB2gkjjwXL9CzbKYejYRRKG72uuFLHfnfxnyCgRCjm4jQY4QgRWH",
  "key27": "AFjym2DWQasMFGHjFPAJktTsDDLz39edYYihDy3oeqbhUFbAb9Mj5P4b3FBQvTLayMY6krjnVTYNw6ZsBYxZDkA",
  "key28": "4nPBankQEm8hjxFgSaknxyzNDqqUrSQAk6MvnfLc7bRuYkpyt8UjBDX89H1psWwibN5Wgjyk8kjXdoinoCpmj3q4",
  "key29": "3JiqNnYx9Anuy94i3qNDjNGTbKnPNm9eXdWCUMmeW1f8qdcQUk8aog65mr3HP8cJ2vbKdMmFgnXqmNkSPGq3Asim",
  "key30": "3x2AMtudpgxk6hDhobG129TCBNKKazxqAEmsuMtDiny25BzqeHakBLSJBQFPX832tpHHnf93kH5nzF1NimSHR7Ef",
  "key31": "2T5N1wCtdCferScskyA89NyLS8GdaiG41hbUeN3oKQ3uWwwzQUyoQqTsoc6eRiemZFbnFJh3K5KX3UoJc5SB7t6f",
  "key32": "xURSYYz24ZipXLEWA7WjGuK3n4MWqYfsyALx7VdXssoAwBZxWdKGEz2fkWd2EPyJ8jYzqAEm4BV9uaCSECNDprw",
  "key33": "3MKGn7WFMyFHvJ4bXQHVe4AKFjzEaKJufDsJnhK1saPsQVqA7XA8UbpMzUQQ8ARntiUFm7c9CwkASa7R9D3sbk49",
  "key34": "397ttrcwKAP9t1pTUCX6fJMvP2G15m7zJt8qHTpuBBXQx3wb4w51TWXV3x24JPvXmczM1RaSkM9eeWQTQk6LnjA6",
  "key35": "32uwEZxErpWNrGk3NuVsF5GUU86YWaEZaBphF6JvCAieHiRtmAnQNmCoiViDWPd1Dx7tmr6ncQ2Zd7e1Zistcmfn",
  "key36": "5VZ7KLyfH4zHsHq42kNA3et8kPqBRGqT8mEgdcL1bUN5Crx9EZ8FgMLVwHXmA87uoLd2YRroJaeSQ9nfWheU5C4r",
  "key37": "2uWoTf35YKjVFtnh3doPBSki1CJ9zVC6RHk3hSdFD7Lk45tqkXjQtq57VLy7K1XaA2L7YhSDCjYoMjboFWUCfv8P",
  "key38": "8Z1kpipemUid8PE6NUKZ3SQvvno3RHt49CjVaXF6BRWiG2uL6Yp3zxRrT4aUAgs4Cz43pJSwoZd6GrKswgwFX6c",
  "key39": "2g7LBTvEABHNaeKpcaaPQUKMtUaDeVoy2eyPQQDuf2mrgc8Jw1hg1W4junbFUpTEpPcTVEC7Js9vj3vbBkWDkeKg",
  "key40": "3N2udTgW43iR6LbUyCGndFMQSuscE6QsyYJQmtk1moFTA291DvPMSwiMk8zyxMnpPCbbcrgrzbRbnzpDk9bHr8iW",
  "key41": "bzSeVR861sMqXTLkxXtX3MRguNg3aDZtTPEg4YifgEkfoHQXuT2kTjn9Cju9s6mCc7LyD9a7NYbmPccQ186dRiw"
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
