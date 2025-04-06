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
    "3PCcPeRRzmuywVYCi3auv2dWAazqaSzrqtM9XQry3Dd7v8uWgsdNoUfhPc4UwP4ZN2gf9fMouzKJ4TfG8CVLo9Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pLa7JbioFw2HiWYTuY4zxDbuWrWw8pdreEzeAdGCy88wL51xc875bskgDmn1NEDLKDeMaPNdowTYawbzxshvNgm",
  "key1": "5DUgpVyykBb1Y5yoWBw88fQFDjPdcUH8uVxQUZPd5xs6PygGAXajSxHHWmVUc9H1ymKkGqHJjEeapG6W28DFDXec",
  "key2": "67V5iE8yCC4PNDnwyUXakvVEzrHnPxg1okyfhBH1qESWhJCwaWmHgDfHndLLF1D9N2c1Lcgo68Ahfb8Boi1DMZka",
  "key3": "WW698jecNKJgSReYvGoS25wZzahR21dkS6xn3RdxrBBgN8bkJ4EeSCTYWaFK5tZmyvVrh2tjdM2DEJqs6bekVkd",
  "key4": "3d9sKTUgrayK6AVwPkBZRtymafHAkp7rLZY7Knhn3vxkrPF8m44qMSeksomBAfeQ8PRVFQdbtHkxvqLGpKJTzw1F",
  "key5": "56wGqyLrPn7We4f26nnEF5vg3c3QDctcocdwU9f79zdsLicLMKh5PCpbwvqak4uvih67PBGRhhrtmVSdq72juDpJ",
  "key6": "3UUbY7F59J1RqFkNFSVKgCinmcVYLV7YpfxtDTQ8heph9psdB6ZWRQYPAJYMTMtuyX1pqHag8UKbj6FPdXmkdFgE",
  "key7": "2HYEkrJSK9DQsctwmvphUgYNGZAzkjj3CD3MCPEjsEVkAzkUXaLPWSuB8aVonMhb6kENsfc1z9neiw57iehbNXBA",
  "key8": "413Voa5a9CWXqBL9YUnzF6U6AAp5oX9jHDy6KGyahMXwczq2kG4VwSTbuzVtu43oHp28EAbCcRAWoRQvr2N4NFa7",
  "key9": "34EFgjVRttqjvxRRKrhDrLc77DUfo9vfChhRhuwGBU8gLQsAVK8uu4EuuZhzP7qu6TjPpyWs1S7yc6mLiMyCsgRn",
  "key10": "2oBeac8gRyza4WTVB1Cb9pxZw4UMthAHYtEguwHqsZ7cye6dwr88A36rQBNoizhR3Csvy3xAy84rCgfSXPoqYsUF",
  "key11": "5vUPncjMaeKY9v18KwqzAcrBC7Bsz54uR1p21dBbdq54FG9MvJPV5A4a4ZhNH4Bbf5sYvb1iaqejsMLrSSt8UnQH",
  "key12": "62ycnRVeQwgFU7dRKcRzLpmjpYLKFKQYprb1iCya4xseSfzbzsZD3jxJ8msByt2dwmnbdb8AFackJUEx8ABctnA5",
  "key13": "4zRXeyuW5Q7i19MAZjhsnG2HKLt3YNoa2UPoy8Bc46hMwJfS6vVUjwFw7xdEXsep6zHGFYZQ2LsF9KYKnbZYGuLQ",
  "key14": "5FzFtCVUhtWyF6h78kVtgSanJy2NymGQhSXAcrLFrBZP2x744whrSAW1TdTjLjqBwgHMeyPtEXdAAXyK8MzdoGsB",
  "key15": "wYL7mQTSozp8wRotLhMkuVfkSxU3gDSaxhWoH57tnjxPsko6cH3dspxRjcSms88vERzmGiL61ubih8rdR3EZ7cW",
  "key16": "quQK1XFDRCKEQkkDYTKjgv4eW6ndQpNRrBC7SkMiGchuYMVBeUM9s4pvYDdru94dTxSqdyAr4UW1m41FxqcUvEW",
  "key17": "5GgRFEDyzqcbPXSb9yWZnxtNFrtJNRMVXuJ2qA9EJEsCLvHY952PVrKNwJdgR84XGtS2gLwToGY6AhV59nF98D1f",
  "key18": "5hG1tTo3dq2sHAcPq1Gnfn78sgqy5GDX56sxd1XhvesYGWBtVLdJb9xiihPHYLdSfBHX5VVxjnzfYm3aJtHBEVuk",
  "key19": "Py823qRjE31eq2EagTEEbwt6M14QLReW9SHsGgeAkDFSsnwt28goDMc6e9saQ6TH828h1fHNwtBd1ybpHPAdWhs",
  "key20": "qrVKbh7yjm7G9Mh44cSznnoUU5RbV1qtKfg1uYiQGNLUoeM7J8sP7dEfisSZSgUNxpBGoorex1jg9LLJ1tCZueU",
  "key21": "qTSztgn8Y62TjJvrqpULTkd53Abssc61ZxHoEGes2DZMMukg7Ro8Af4Sh9gVjwgqpXc5tJBW6DWEU39UWYzp4fM",
  "key22": "5kowxqfTHmm1wZTJBkDvBogqoLhwFKWjeMLpfuBj1x3L1cda9fjDD53vWe6TJVw369NxZVkX3qc1HmJxKdT3TUiK",
  "key23": "2atnUDk4SYySJQL84FuzLzdFzmfAJiuYRXZfNCLKg6ZQ38LcWi32ogL7jhJkhjPU2J8c1m963H75PZqzh3HTPxY7",
  "key24": "37sTAsCAvYizVa3ZykNVMaZmTLpPqYe9YjdeP8jf3Pu9xRueGcfj5eVcmty1qs4NWjM4HtHp957Ky8QKSVwP7ENm",
  "key25": "24cVBXQPPy1JnRDA5yURrG3RPL5WTPJpff2QCPXTWhZ6TQeHj5P78oxGssQq4jVPduegxgHkMjWbntFmAV5gUhxW",
  "key26": "4M64zCJG71Vcj3nbzb3RaHB5FZZFki996tPTFgBdw4w2od1nxUdArJw97ttWH2YeVAuna99JtjFkzTXceGMUGjCx",
  "key27": "5Lg1CAHKxkuK7SQEPrW4KFPhrCaK3vKT82ZahAPMkn1gbyeHpsvvJiF4M1V5zVJUcehQxzAq3zbAotuRjGpX7wDe",
  "key28": "2AmPsL4k4soNCHmJhBa5nHCR5k6CmUYQZZScBQPwZZDmv9co6KCXajc8EDBzi6jasaZRtDYv7aT3AFKQNnmfV1Ro",
  "key29": "5CoczwrvJnFMkMFiG4581pi4bC7LDH2dLjQNDQwbpVcANtLxSogYknVAom6MvmrJoHFHNqU59a1ZDKzGCvEYdZ9K",
  "key30": "4WcZEUksspo6DniUBvPENQF3ie1NNctZ2Tkh8S6z3T4sKXMrexUeQpHKweWVL2Pdb9hUfcPFMX7WF1W7ip7R5WJB",
  "key31": "jaZdsk5oroEvxT5zir69NfiM4GHkndc2otNG9VrkMndTJUULZB1my7KktfEkKsnNsrSgmV8sRDng2iihGScKeXR",
  "key32": "2HchDCNHkMiivM4sTbpNKXbogsWb4NMTx6MbXERutTmh7Y726Q3sCBppsJ9ExKWsvuqd5PJ7XUWiF8W5cfLLf5ZL",
  "key33": "tzdweR1SjV3eCcR6erHqbVHDUghXdzWjJQTsF5zVvFtbRdAkzjSzrg7zdZBTAQabV47nYzFX7RTAGHeZyHqSKD3",
  "key34": "55GX5YQZqxsRtPC36J8aXKCtavoBu2DLEdZeD9tma16C52u6KgfhsF4orV4AhPQrS8XidUCPwTGpeAUVpL3EkGkf",
  "key35": "GgTQ6UPhSENMvFiHA7jdgprTSEj8WPQ5dJhnAYA4RiGYDh2tw63UiFcQJFVhgHFSm419KMaiBbmeDg8gEHVyM2K"
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
