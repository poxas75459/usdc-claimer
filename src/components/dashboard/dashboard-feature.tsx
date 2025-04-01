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
    "3gCEnrc1oF2FEFsmdHoQewL853npBYkszqsSEXxbzxCnQiSr7vmkQRdEhmCXSfeQMNNcwRUNJ4ntDsdrbkor4USs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmrCbfXV6Yof67dxGxn1v9YZWmeJQXnc56rYQJN1SVoAy8Zat2cjDnCjhWLY5D8TsDzmoSfLiTFNjQmY6QDfn6b",
  "key1": "29iKHCffiVF5fKnpVHhwiZWzSpXAtCX1EUKFHoJw2bMAUpSrUFTLh5P16ieDT8L1W2j8wqQ8ceGXuA33BJyfqkFY",
  "key2": "3YZCXzNPkRgannzZ34G7borkPtCnzDRMuJwNedwCC5aFL5Wktp6cFNeuyZQ5hZ7k2XAn64Qp743XGf7oDCu9JGGe",
  "key3": "39u8uwWHAne2yZjmUei6uHNJxWLH6Webb662gRGzUDfSYEWjXDqnhyKQfYFHTqatzcT1mZEWuYxv3qXGjDummrdr",
  "key4": "2Ava3QjAT3oM5fPgXf5tAgAn5FXi3CSSQ34iniPAu2ih6G8iYukvFwebwQq6ED2Nhqw1ZMSFvecTxrr3nkdFsXab",
  "key5": "2dNQACZp3y2RT6eMoGiefmQ6cCxB6qzeyqDBpR6G2HaM7KP4pL8urUjBQFSDYPjDobioM4XzfKV4AT5gZywyurxv",
  "key6": "2hgjqaAEKjTD7XeKpFqWjbJ24na1gzJw6pzz14muqfNRH9d5HzJtYiHkp9Dramyfs9rndbDvPRKU7Apna8av1gST",
  "key7": "5y9WL7rNUtmwKS3ZXsYEZDFRkdcTXeYBQvPb3WhDJYSNxrvpFsEeoiFDx5i35ZZiGKhGa69hs7AGWDXYsJjP6Rru",
  "key8": "5c2m8Fz9Abx6qjgGdS9SMzUs41Axg15MCUYhc4mmgnLks36XYKDoAAB1uqzGr3wsZgrGXoxCeFynBd27PAAphzwY",
  "key9": "5t7f1pESz8ZkhyRuWBdw6Jc3ZjibLkx746eMmcneEsYHpRKHqEh6p8StMtjr4xLHRTs6QVZq2JecuHnhC7BTPVJJ",
  "key10": "4W3fMmAhFSnsgvncG95EYrFeXEUfNHdmS9wRdPnAD2GS3ojjRPMcUazu3Z22uKnQ18moGt1bBsqBX7s7VLSc3Cbg",
  "key11": "4N155bEqBq3AuDTxzVXVNNC336HktdvCUuhYkeNGscMpNRCE76zfD16XXq9ARwGG8NPB3626UDnQskesQGrxP17w",
  "key12": "YN5GGZWwrNkpMngFVQGxV9fDmptKmo3D9HAYddFrY5VbWHGVxwkPSyvbQKqyYW9NQ7LTcVRQYQX8KK7gW5NwTkR",
  "key13": "9VLz2hxMFGepsBKGoZfkSVj6prEQ1C3Xv6d2XNTRakkYUvqjXGa4v71ui61qzw8hsQZsQrJxu6hvvZSRSDdU1GA",
  "key14": "2VBNY1umiEbpvr4Fr3HuFfDrhuDHuQZjHjBXnUpseqt1qMBJbsnM94dDKikaLB1Tdztb8wUvs2nHY4fx75Xwc172",
  "key15": "4gMWSQ1MpW3FTFWa45zHzERugdAGGVNpckkV6Tt58depEBdnajisAinyxfc4rxxbx9sSZyeQrHFTfrf1qZrHMacy",
  "key16": "598uqq2GQGHWC2JtMPonZ1kSDuy1fRrJrMwyNeeiRVLkZ585RX6CXHtJjfZVgH3sz9kh1NBztwDoxSTEFPjLpbzs",
  "key17": "BRfQPb9TUAYnvRSrbwJMkcgX85Vr2tLxNbtHoUaMW1EYP8WM5NjbgQPA4RetKRPcnSmc6xLGZZgCc9NATMv4GU2",
  "key18": "2YsxM1uZhC9nn21TxiTSr66mmF2jvEhGZZKajMFaj8YGycbmr5prRGAzuyXdm6CvuvCAUwMMvdW87aA4fWJ3mQqj",
  "key19": "3s9dX5KtcyE7W9Dj7mguWTbAqLT1j4CHV9ndXcQv7B9CSxAWM8msWHSrtZfY4PrZz2DhjywC7UP3B7b1qratVXWh",
  "key20": "4xm3mMkVYN1fqKv74eUzbLsS5pjkTxWxAsdwpSQgXc91bVSXPLsU3grzT7vzZ2jTk16y41SMLiVGrCAHb3FoG6f",
  "key21": "2W5eneDQVVpT9RttndGcjn36tcdRWcFcpT1ZZU1fiT5U8Rz54vWaDU4zKEhR3CW99zvMojUDdF6KUNQuK4cveUYR",
  "key22": "3SpkcwTUBgdyWCvwkwPANY3TBm6yzzUZR994UmMJkNSDd66MCMXTQDxwNwDWvfCxuSmKKh4SyevnfVwrLr5iv88b",
  "key23": "325tyWuXym4gugg8pzESYxhnntMK7ZDugK9asnGg1kSrhnEw8vbEp81qdSPmNnHbq7YbXpimieaCnc5rhEtfU5CZ",
  "key24": "5Tyha7oFka2YgwYZsDjSz4VvvG2RrLxJTC3dEoD1TC7u7VPoLxtaG1LZFCrJ4bXRU1Uvf3FG6Xddu4pXm1K2gFsM",
  "key25": "2gi33tiTMeN11fzFf8ZaUGfhbYNsGyGcf57uJjidtdrnGoZSVvi5fQimZgS5hynj54WnE7d5w72CgPqh3qU3NCvP",
  "key26": "3mTa9rBLV5X1teXKBNXaQf3wcGkfmxK2E4RE1GUERdMJqVFSgo3XgihfBtNuvde5ZSfqacZ2bE67id8vc4THGnx9",
  "key27": "5WZ3frutELptTVHvn3C2223iosvRD3P7EkRdGM7qnV5kdrLmvUnt1qUE9asMJie4UrArWyYntPF3BzmwTKjHrrJv",
  "key28": "3ns8NN1USDAUyujdSVdjMbK9qaEtQtGHH2KPMD12M3JEUL72GLLd2rLBhRuRCFnZiQdzJyiyqjHXyhtvz2t2N1jR",
  "key29": "kxVhZbmqL815QyXMaNKG8aG9wVqDbLMqL26HAFUP1muZAYE585YpdcdRSdSjuHbBGpN3Y6TPPUGWQu9yfFXwMb3",
  "key30": "2CUF1uQKGpzh6q2JjBzYQYdBnsLahrtGzzKjZGapTqSmUXruevGEQ8viYvu1gG6gSqnoAWV6ieMeTCCmjVdi6DW1",
  "key31": "9FADYSLP8FX5cvKrRX8xCmgi2g4Yt8jciYWXsmdiz4bXKJGCgpQnbWzzek5zaAW55UzBhfm82oBZ8ZeLNtPmjUd",
  "key32": "KFGwCJiKTB28mZPJFMMusmAWBTrt7HdxYWysPiG7sPvGe8XrS6TY3ZUAvDoVXvrDfaF2BXaKSwNkATFAmXqEAXa",
  "key33": "p2FNRpZnesL2caDYytjmYA66FwG1XPBo9m8DM6S5VuXKqJxJsqw2df6L9eJ3X77JCaPuMcJfdGfW45Cvv1pBfeE",
  "key34": "3JRBBTifCKj55gQpxBGZKsjgRBHJFR3jGR7KFYetcdnHcFSP7jAE19BPVkmBMUhztX4mdTucjWjWrczSzchUMsS6",
  "key35": "XCmyoxqigjeUDsKjnnsjVndqmuMvZzWB7jsVhei31rpJz5DFhjztGQSnUappsDPHkoPsVyTWV2A2kPST2vf8h1X",
  "key36": "oCGoWVrd9cBaRTG7UDiHpDpTq2aPHr2ohRzViaK8rDyhiRqn3ceiMTaYfzjQvoRRc6TEh8H12eKYiJBjFDSsDW7",
  "key37": "3wDYwD4aSqZ2112aL6Em2E8cPyr2pcfp6jL6CMXznGLTp5mzUJCZWjd5T1SBEaUch7hxTYyernk6Uh4CYFYfH48e"
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
