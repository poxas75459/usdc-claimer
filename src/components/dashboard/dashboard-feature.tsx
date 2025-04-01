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
    "MBZmzU3h63scffbEMJh9rnBi2FxQKUfrg8k3gQwyw8314TEoVcZP2S4ceQxm2KuAd3z1zbXhRC8BEh6RgAxS5CU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q8fknTNSzF6xPKerKSNqA4ACuE1ZS17mJ3fPheHPCye2EzFc8keobCRJaRat9ez2ydVBDkcSwncj3gJCrTaiCeY",
  "key1": "2b8SKp1KNVSoQdxKoajiG8XCL6WhCDgb4YuZxAgpH2LTsXWy1jGK9QpvrDnUhLedFXcWixwqVevVNFoZzjTCKQvu",
  "key2": "3m2FTEvggaody5dHYQHEFRPSp5PUKzbuUmh5dA96J4X8B8pRFMRf7pbXtQZy3hsQUeFwmXXTicth5kLeZg1JqSTC",
  "key3": "21CCidKgx38SF2XFqyihEgVtYqgiHSoHDqyJbMQ5EPMPFChJUhmhZ3JQAegeZSixJcqgLjxjXu2YsYVPptEnZBK8",
  "key4": "iy9e5dNV1FtmjHrigmdfiaTDwNmZn4Fer6XDx3N4BWfMzUJhozXwf3exQFFJE1i7qLYnfvPz1R4yEMWdddQ3dte",
  "key5": "3kTmYcRgTuQxJ61jSwKu8zTQKPCPAvSfbzMDkxf65NmGDtTyq87PvnPcmAx42E3S7xdTB7aV2zL4vUnqG2QB2boB",
  "key6": "3FH1VUYaSx851LjCJvUq2ozxThKBX27MBN2YonLyUv5jAkRHLRLQiztP1xGfn8vtu5oCzFhWFVtcRNV4nFh5bgnd",
  "key7": "4kPWbKLPoLdfhS9YfRTreEkfzxBTk96sbSD4H3SHeQyztQnrvYspovcCjX7STidWYUZQWQ7pEw3hBUSqKSArEj6r",
  "key8": "5V9Sf9QExA34ixAbYDGWnBsfcxifr1H7HuwNEd8tXimkcFQ84VPyfbv9HRF7bm9WaxAajyS1obGw6aj7noSnEx7d",
  "key9": "42123nTTe9t2mtR3skttRorZc8reU74iULLx73xoPJRr2y2EVvqMiKQPQQBtpp9gHe6J1WozGfhuW1ud9mHrY6wt",
  "key10": "5Z1UF9dYoNeAff4ERyApogY46yyUPXxfgRvZCiuMtv7899sbMY8qP5DaSYVFTPcJT4UcWTTNrsYCu6obH5Yv4CGo",
  "key11": "5THMJZnA1rhq63DTS7SJUMWLZWf72X3nnVeox3JACu9yzFpvJuABS6Q27RyGmMuLo1P9hSQ8ZLX1Xia4H51hJpEJ",
  "key12": "XMGvNM5U3ZJ4a4rFbG8gpwFnuyNifxVLWBnDN5CmA4at7GiswUrhWA8TJQUNs4pm3745Gc8CT2TnCpHhhnL4DL6",
  "key13": "4B8bxoq1HYimT67GukPVdKD3hquKpdd5yNVdMZbq2iQtLoeXdrCbaiR7iV7wHPTVmvS3uTbPPJAzyahkNWJyMpEZ",
  "key14": "55tBPYSVfjoLS9isSakC6zhesoA7cWvLMjbUWdD4owzF6BWb8M6phqK75habZF6hzB6novxZM96YNyFRPkGrAxsw",
  "key15": "2MJdZmEqMeXcors452ykM4EWqLnkKVGmc1AjmwDDzcivry3KQAaKrj1L4SYtsXvJmhT7fXXxwVWzqjbrGMAXR2Pq",
  "key16": "1iQbrMbLW47XUqscWhh73PkhERUMV2XtHCFyhQAzvngkz3MpVFybJsg4Y7FaxNsJEmYvyDKW857GTxBAmR3eThG",
  "key17": "4DnS3fCXYAo67L3Q1fPTP6ythTU4CEnrvM1DkN6op1dpXcLM67y187e17vCKKi22sruiS9d1LfP4jz9YVpaMLsAB",
  "key18": "2GGkMzTKRQj5T64VJDWFoDe8mGgaYpGJcdGTH9ADFNPSWDMZyVJMztmL5dX6LtTBG1zpj884m9smNkN9PXRuTSh5",
  "key19": "5RLE2vJQXCcVcREk2vq6tR587kUuhHGCGGx37ucif7S6U9YsMtQ8uFb1sDqe54XWkk4nR6ZeJauWCMF34YTR3Nu7",
  "key20": "99TyBPuiTsRKC2fixJf6r6c1N5BsekcA61NakFJfA7uRQRG9rm9gifJDVUjTHmVKHoP1yt9xUhCtCmXgyQUcrBK",
  "key21": "2Si9JonCibJNnVQkkdp9nL7ukV5fDgZDvXmNo1Xj2CYxcDeZCvizyM5b7hHRBV5sLujuEqjAkGVRpmefENW1qo9V",
  "key22": "3kKwSADpFqBffm6xBd18TEujCcx62nDg8omEVh6dUhcuHnMwbQYwY7f42Mv3uYUfai7Zo4ptZXEUMssQWtZAdH7V",
  "key23": "3u1quUzZihctX9i7f87ALzAVvE7srJg5FcqGdZJugN6BBrnENKLYTKAzcqRqMsGhVcdinWdi7kNh72pEjwWUnsDV",
  "key24": "5BRQSWXi43MTYJewfuQcBx3UGK1EL47bkzCUTcJceiKzZPq9wm666Z9pSUZVN2vvbZAq3eny5QdsS5wPnchy6jn5",
  "key25": "efto6Gy7XmQeuYL1AsfsnHBn4kUex4uepaqAb1HcYhR3KQ3ekAJTC91Bp8bEoEdqmMwdDMZ8XAafBQD73obwi8v",
  "key26": "2ytVKKLYAuVB61897LVbeyv4WXKCMMxYv2n8T58vBEsfZx9c7W6qemUriZxi5J4QV1snTRx944kyTCpxGQneAt5",
  "key27": "2Sxqp8SdaSxii3j3uu1iL2Wtjana5iJqHN5jZRbsXWSLxThjGXU2AGT9wnyV1Y8572M7VxgarchXcN2XHSiPY8Ba",
  "key28": "4Z8hdLJR8ZTYnWfkVvexsJZ2KmUgqAuj4B167nDcQ2Dw4U4uqcq1iYAgoKJ95ZhTYMXKmjWXPiBaca9WyvRZxmaS",
  "key29": "4raf2ZPUmVQA2hkLyExQSWRHaaeb47C4rLvp8bEqdquzpZJaRbgvzrJ1yjg8uvKoz1QEigDEknDHPKhy54znr26J",
  "key30": "5A321cSrJmm4tKDghosLTSncd5VtYqVs7MMj6MMtkGW5GYXK2HVgQwCcjm2PA4cZRapyoqMbfrHCe5k14KARXuSj",
  "key31": "2YoZh5mXi9i31fyhEvXjSPqPiVuEXmBYKfcgmkjtKZpWGE6fHyUCiqpQZT9pQCejFLuxRZqWvwrmQLkVfAKxNNbG",
  "key32": "4zNHN8oBUrhdoE79RfqNv2rXDdUwCpM6U2cww3hqb6RXo92Zm7CvDREGFH85Aa3XzK4XVuTZpmPi4LGLzbTNMXie",
  "key33": "5cZQmECFna4rUFq5r34SSi2uke3m7NUXdvTPRjJ2sckH1mDfyUuzknB4w7iip5a9U8ETUuAPs2AAcg6wDAR9NB41",
  "key34": "1MMV7p8iCnLK8i563QRtYgA6tyS4fVe5qmFpnbLrCLn9Fwu7SpC4dppWXffNECCap3iXC2brcycPfehjsMToUUp",
  "key35": "3uoNqrddnh1eLUHXoXKqcrNc66SaMnJ8rRWPjYVJwXzHm623J1u8478PmF1NgiXNWvsp6qcnfZw3s5ytM318U3Ji",
  "key36": "38PFx3jZeM5iEgwi3NuDgUY7H7yVfDDk4ZgAw2yhs1fKr6UcWPLMxcGCzLSBPT1HqJt2WQnCbJtJKGJk3twhqkMY",
  "key37": "3u43ZxXdM9HDbnMcP3YyuhqAWXiP59eQQbDXiDE7hXW8UooCmS2vxRGeNb4sjUVZ18pK2kD7SM5w1iVLoxoau2GA",
  "key38": "dFDt9xviKQ98QqZ3h85e8J8a7K9gVAXj2UL3LX6Ph5BMZZ8fqnx7w6gD7HpPVra6QgGfQtkPxwB1LiTtG8b3TLc"
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
