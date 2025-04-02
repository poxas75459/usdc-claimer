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
    "4kTpTEJySaHyxoDJbx29vmdc6u28Ptidca3FS8AzDK5a72CajkzgJuVxHg12NrG15VQVt8EPcsQoJrUwAxM8KpQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4txHdjuSgQoFtP1hF8B7vNB366T3Wx2R3R9Hs6WXdKVvPbWpeVDbZJLYD529x4fRh4A1a1WTfrkgUZFapsF6vkm6",
  "key1": "56hexD1QiFWQqUPfDLyDwdNPaxBU2cQiGGiPzKgREK677wFsoxQNDtfpAEQEkWqW7z6SgCd32by7znK714z5jQSB",
  "key2": "4UQ41aGmr1nrKKX5y9X6brCT7UsgtWeM7QhU42ijbkMCgJWw6oDTQLKbkXRsDjY5ksCbXLGDnwyFzojpwNjySGVD",
  "key3": "2qWyYWxB3FFBX8HWEo71GxwVDRUzwJ9B8zsWXL2nFadntRDYd7mCv8uRpT7eLg3tvmhzZGKuGuWh5p5Zfn6LAANU",
  "key4": "5rUjQeYYfzypcMdKEMKM6XRUyGJ3wDfdbpjJv43pRGx98HqRV4LPmVmB7SqzzggbQekp9L1foD3Undd9HBNqfutR",
  "key5": "gESv4YGQihspHNMs28AJoFaFHyVRTGknL35ZzUizvKxWLY5owBpQ5MgoCY1MJoJiFtK49GGyxuvdkFZgi4vsPor",
  "key6": "4ApWCZqHrN5V5avoQvgMcCkgJfu1dyUbE6mikR4ifP9NSp8NzFwj8DbonHq94hJU3pUnbmnKhK173f9ZF55bQnjT",
  "key7": "5aLCMmXh4hqoVXfSqW8gSNzbTsst5roEzeDW4h9zybSDcG4WQ7TyUt6qZZaGogA9nYS6M2sp3s4c8F1UqAFnQLn7",
  "key8": "2jujocjmEa9jsPvR1JwnDVbRhDF89FB5vkCUuMEJUcYnqN2bjw5GmNdn8TKBMUr2YKomyfkb3khgKgVpSM5xo7bw",
  "key9": "29Jyn8WXyUjLzinzmtRGBXJWMJmdsHET46byr3SwUSXGFF9QSrRpD6A7mBdkzsJ2nUww1nYXTHX6BZGnDnWpA8hF",
  "key10": "57QCZW6aepGJ8Zb5azKBixYFpAsEiEb7qrb8BJtZLXPEBhtpYnKMEvVzTDh5xpCfha1WpX5ymX2WP8wR9Qa1JUE6",
  "key11": "eFGCmXoEGwdZ6YqmV1j2CPbhK5qViDjUwot3Y8LHD8EQ3yTDhtuMbtFVnMb3Kk2D7omqUndwyw9K6pfwvQ8ffq2",
  "key12": "dHF5Dz3PJJ9922ktyrosTtMFL6gN5FcaWR6uUWE8TSb9kP86TkVtmK8sb8ohChAVWDZUoxktLhZqApcyRbYL3is",
  "key13": "5ZbvUZQtXBZWCUqd7P2sL9617bntroNveVTzjxBcXEupPWQJC4WPJT5vDbdaqp2B2teQFfSVyo2i9wT5Lj7byyDj",
  "key14": "yeKESM9P6x32rFCBrFJtfDqb7yGFEmcKXB17LLcWxTrVgPJLEahPEJ8NTMZGett3QkvKfuptkmwiHatdGrtb32N",
  "key15": "5XtxAJnfvLGDAff71G9mkSMWWTHBQPtiKsS5Z2qXrhLB98j2TdLt3sjhUvrZxYnBwBRQN92DAQP5p8BBw5LnNmCz",
  "key16": "5RQ4WtHqNWhAD7W3oob2cS8YuM1NnszN2UBdPTVY2b6LpLzbBNciTFPkk6sgvzzvmV33CKeynvJWo6keKjisULQr",
  "key17": "5TWx6bDVHLcDqxjwVYm3ZDtVieYFopyNJmuyZ22UwKFHGWCGCJNF88W1QevT9e8SHABxbUEkxs3WPWrBoXpuZW1G",
  "key18": "2WBm8hBF8excS94bnxaMB6wXRYgxgHwf7fwGxrKDfLLwiJs4H6Eiwsoe5cV7HCb1NKpqkTC9c5PcaCPGwFB9Vsz2",
  "key19": "22wjcYsQRF7jwcrCu3pJn8yV9MrK7Ye5uwx2rik6CScB41AqBFBCfoe9wFzKUV7kX3ha1mgrfFmvCCif8siHCuzh",
  "key20": "ew9TBjJ9zM2aAqZX72YeqcyhasGiw6qRspZVve1yLToRbGsmYi3aXMLRc3dvwmWxqbayvRq8YNqQNGzPYqHwZJd",
  "key21": "4wvXbVYddnDhKDc8oV8b4RWEh737AR2BWM3Hu3ouRjXafawdPWnGa3w522wbJqJj1cDv5w43oKTHde94FRqFLBEk",
  "key22": "4RiZBF5HAKdWqcJ7ZhvQsTpju4fbexetq69iNcf2p6J5kaUvc4WZimUfbu1LJjypmvuhkrpS1htEV1WQoYT4NkgC",
  "key23": "2aiMpvL5hc4YuMSfibiNGu3UeQZH4CqhRLGreh79xzZRhdhRueeBn9yVVZSyMdeXkDRAV1hGthcPU75D7vkqwNPj",
  "key24": "grsiN7CZ9tqTTS8wZCdyRmiwaCX2pU1dk3JMCSWcshahrBvRp3Khcb9dtzTWaWkGLBRggegikLtN7Ss6GaLDY6W",
  "key25": "55chrmqmt5DTvpGufcRbzbZgiafBjwWstSdpY5vvNXTbLmtsDUSVCDCPBdnKewJZDyHDzTu1KYwVQzEVMNnezzqo",
  "key26": "4arieQCs6bQCmwk88HUFDNjbq3LzLfcSoNgnH1u22gg8iR8N972q7HkTCxEN64PYrY1KGjQ77QV4aG5mpYtGs1kN",
  "key27": "4HUYL7x2AADGP92CbjgPrWuT46JxCXjT27MctLEXwDhhje164Q5pnrdg9B33YueRwYLfQ89xESdXbyqVHnPgK1ez",
  "key28": "4EeNDtxZuH2HdAvKnFwF4F2uedwvwxzbwjw5H54XwHU28KpPL8Sgwx9SKBBPAnWyjPntYe4dRmjdKoMSfRC12y2E",
  "key29": "5wcUjAi7AjSjnJs71wR1GAgEW4ThnYeAAM9eTpAYm4PXjDfHozduuU79K8oNcVCe9jdYLHhNkyrh5b2Be8CfaMuj",
  "key30": "59E13rE2iSRzAcZKzPL3spDd8k31mFZPD3HLMpt2agqdxL9KMRHSquh6JzeV79uxXz42wZo5674Fm2Ht1tSwDbdj",
  "key31": "4nAnDbK5H4tQQKA5dN2KFGd1ds6SZuHykvdDDxrnPNcNJAEVKSNhqVbaSMevap7rjzFwdfvA18H1pkjY1SkTBBCL",
  "key32": "g6EhBe8vG9YCUgVgwFspTACgfPDwwGn3YbwSWky7SYAn4EGxYVnDhQ5UMW29TfmSZxs17nM6MmvJheXcQ4orwTA",
  "key33": "E11AVh1wVLopmCpSwMpcyBToWKjUo6xzWcZo6MwDqcCB6sbGH6Y9j48nQumjEwxo1pnu5pWNTJg9Pt6dbYVgKrc",
  "key34": "5UiWZU4hNKTiAVVBriaBTcJ4ZYoM3KHqTbdjZ2bKdfRcLPud1UB5MDJNeRGudumHygwtJC5AP4pa1epk2aNSATtH",
  "key35": "3c2kLZpwXQCHZv5GsVGatTPkTswvQaug1jTzfPdxsHQbuVMkUQGHy1pNsoJ8YucrNP42pWZoJET8qRB33ZxSRoJG",
  "key36": "47hDEyhzfZjH9XsTTPxkEpJR5SA7977khtHfNQBkF47ezQ6uewR2qKg66epZfBDLPF7pwBGdraSPiAz1bE2SMhTM",
  "key37": "8EtazUERV8uAkQMHgSJKZH1tLoigdYurrBaBVSZv5dzZEZDercmc3yYAxa32CucVmNuCiRTNNpaDbMzFStggDRw",
  "key38": "5FjgWdmg2zgBa8xAW1eg8xVFgfGs6yLn9cj2MBzgwp3WMJPXezzcvMEfGu1cwupLbtPDTbjtAuME5ccK2G9THsrk",
  "key39": "3Y9bJvMuzWYFUs3uzzqL7n9t69HcAy69tT8YhsLo46oqBaatJdFGirDGhgsDFayWD4QmaKoPgyLBbz9FrpJDZedw",
  "key40": "3mSLjhNMrFxVQMaHtLPs86s3xkUtAb9jrRG7Zh1ujafiW7iwZeDpy4RSuy29kZuPcsaNZjd2K2jNwa9CD4GifmHd",
  "key41": "4BVbtZNuorMbLMXNmzs8Rz9S3zP8N45hhDWgqgoHikUhSMTQgygCEzVP2yRqVbRS1i7923rCmVdezCPwbXam2Gou",
  "key42": "2cgeAWsASHXbbgy4D4QY4W6W1tBfXgNkwjnmE5TM7uyWPrbSJFQZxmXWQ4VRgb6pW8WmkkuchehPBdaCE5dCnuKZ",
  "key43": "5SpBaxez7dRMvtbbVxbPBaCzsdBjKik7wJdPvC9ZkH6BMP14HHcgcViwJtwrEU5yLDQZT4L6QHS7SgC3xTacy1ZN",
  "key44": "4Jcxx3sYkekNFdGs5euYVxMeLqZ7CjXvLuKDHJkH9TVsQKAUdWFciA9urzSuunCMbwBKD5iq4G46gTyguw2vzn26",
  "key45": "3oE5HcoJWLah7UWBoPocVDZaMr4Kouk751nwcj2hMc48ZmZWUwUiSE9z5w7aznHMdD5jFHsMXBigq1gnTjHT5921",
  "key46": "3hUuAoy8irLpqrgPFjhVxMwVZJxJ85oL83u1QFkfZn3EFYZPU6r5vSoTCTGFCJqJ1M7Rr8WB5ejTPvH4j12QPY2",
  "key47": "hyknbgCtVwf6dwJydEseQ4FQtLY2Sj9ZnDrp8CQzBAUrQfMrzeUPKcFLzypHAFCPNc9E6NdBPLshpArz6kCt8Xj",
  "key48": "5E4SUzPDZZfcpFgJwDQY3Jzw49JzbyUN2Yw1jScFfVPiiibbedHoPS9gHuKM4Suky43JYS6CRtnHQU15gxEefzpL"
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
