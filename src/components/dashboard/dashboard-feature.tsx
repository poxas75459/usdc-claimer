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
    "5iFsSi4hagRCD9aoxYrTDXEtbuXLjmjY5wdfhhPZHrkD7n1bmbdK8S8QckSfrZ3H51GZ3nfyXgHWMiJJ7b24yhxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5To2QmGawx8FpdDAT9dmLAgQRSVDyhEAwYPqfJVSAXR8PCCYLnqc4bCarG2QG57mXv7ZpKRQ95XkwHewefop5ZF1",
  "key1": "5zPZyxaBVDcMTokjA48XjrEmWYgccM7NQrZcNAp3ZtptmdR7FwgFWmJZwMg6U4mugABqJRsdP2zwYxy8eYH6RAxa",
  "key2": "3J1Dih8RMr8csKeQTA6AReryctprTx2247zCCPtbisZ67XSvKwrMjx7XEkjbLszAs92tPGukY5nZjHuGd1k4fCHy",
  "key3": "4P5F9qgcSUshSpnEkQMR8V59DryR4DziWDaoDu4Dpc4y9QZFoDodwPeFZ8sL43Nv4SDq8Zi8SBLEit77KkX8BAHx",
  "key4": "4qfLdfe21sbVZMoRTMWHZAbVcEEKtqZPHQBFaM98ifQPb4DFGPnTeMUL7eSd3Ku1npw5jKhvNywCcKpp4qxe98gR",
  "key5": "6RUCGmpnNtoBXDA2gYdZKURerjE2xV7vWzii1PXB6GApCEJyf1CyP4qmQu7zQnDEVMssF1koFvMQdhzm44JfvBS",
  "key6": "5EuBNLrRN9uJuauqjUBkjZLFh1Dc1QX5cQ6FF8gK7nkSSHG2tz4ygGWGtLhpDE3tUsZyazV9iKyGTXz7dySf2FRR",
  "key7": "335jFxVgStBQtxKkUx1EGBUKWWb3CZa9uEEhpwf3a2zkakFmmJbSZiArACHuGzj8qsja8o9SCCZZUTVeaK1HyGWt",
  "key8": "44cWSP96Nt6pG6ZViTyZrFd3nupnAYBrJ12Zq1mVYmwwiJ9YQXZ61roYMMFMUGv1fHp4tHHuLWkTMFWLDGiVytsU",
  "key9": "54QPukF25d3hTZBUjZA4DdmUjjfwR7GRBdtWUzM8DGbi54qfToufp4osXWzvkfs5maiiuqEL6zjRMyRkmjKSmT56",
  "key10": "2EKhHgtRq7UWX5BL2Nqf3F6GRvTuGtV5dv1rDubkeAdGRPWRcrDzVKrGFuUBtL4q16NW3JKRmcgYgTRwBjtaAYYq",
  "key11": "27G7C2ZxhA4nLotvFkAXrb1EGN7vWeoR1BUeUb9JnmpHPXE6FNb7zZjvmMfJabrwhvb2yNMhFCedFzsEkEjfWq2U",
  "key12": "32s62sQjaJvgGLVFPzqBx8v23MWHdTfKBL84on8r1kTDZdYrW8t9KthtzWykCWG8xuBcgA5aUJFr1LMARrKeRM6B",
  "key13": "63mwUxUSosFKoQNjBD3Bys1MMtKEh9agqjhvhiurFJVzTx4AF6C2WNhFTUjwYmFkVp7wF9oP8XTukLEPtwTfnDna",
  "key14": "37CEU9y6CJpw4k7CU6oZgbVU7JtNUJZxddckEL6P1n5q7J9ZSyLrec8W6apznwDAKAG3Em8Hn25q2W4Vp8Ube7TZ",
  "key15": "5g6LyEE5dGRfFwc5BWvhLRtB2a6pQEosHbvJfmDJwGh33pRJnH4aJqUS5jySKFiVRmRzDQbW2wN8V9kFfH1rC5xA",
  "key16": "e9xvmjZQk8EDMvriH5NKXTeJnU197Dg812APUDitdhJTApJAztyk6Dyg17BYRtfVyS9Sv1e7ohNCjtckWXNUavX",
  "key17": "2dn4YJTgPTJfkAmBAk6CmHbkBYbEWpjhZY2g8yFtpaJLLnhcaqatDbv6AmYbTy7Eg4vGuoJCJ2wxW4iVf4hJF52X",
  "key18": "3XDmx5pMuzoAusgb1dfXs6mTH9KgnGBRmDvcSd3auce3hiaDCnhDDfWCxy2Ag2g1nyXANADcsuSssYQoiSRsP6Wm",
  "key19": "4J11YFrrArtvR16uEpusgmZhAeHewgLJEU8ogRSU2VJh2gHM9kAZcsjECS8mES2Qxz4LxvryVvzz8mmtQ9W3VnzQ",
  "key20": "5Yc9NSTrtgURdnDwZfhZ9tfcGuG6aQmNW6bGWWB7b6okqrJXtJ4Y8yPH1d3o5jpaFoNyCdpnNwdrW6YvdrW2dKtQ",
  "key21": "3HS8KG7TzNaZsmsQeFGzYYkwJezDtqjd4q7Dw9rhgYmAqoX2xvDKs4249eZsxp4fggY9ytd4ZRFMaqeCPsPLhejd",
  "key22": "3K6e2ZwMgYi67RaARusPvPQ4fasN2Ji5P1SoVJKG5mEUQo8HAzkoNWN8tWjLguXg9oLCuCCiCgYAWSxyXSKZ6Nyv",
  "key23": "2H7bMa88RS3B3RtYa1HkpArrHt2HRa1WKzZWgRrWR997oQTWbbWhWFVGjzSy6YpHR6h3gnZoVxWY8QwVzsX73Rn3",
  "key24": "57Vvh1XKF9SRLuZCzUnZei3cvkMQkgFCwDXXAKseAMpH4KUUgKtLRz4G3hjEwCxHpua2NsihzsfWD9GdDN1yTnru",
  "key25": "5ySCZimmaotLbzvsWAnQk3oiNKMBG5Wh2rug6ZwMy2t9SJ572FaE1YjqepnpphLScfQBd4b1vzEsavZ2k8HVQVv8",
  "key26": "zV9yodUzJ6niSRDE61HQBhy65xPRCL7auK34Fq5KRqaFQFQYDHeTdC4FeXu82A8jkYaovigsYDiJkW6NViN3rCE",
  "key27": "3uyG9DLzLJx4wXQ6UR3wzmD9eepx44gve6B3F4VUHUD94wPVn1bWhpnbcdKuz8FhgNVeARh9fiEsbpZuNDrSaBcy",
  "key28": "64CqjdWyPZh6xh7L3Z2y55vWJtL1vwGiMKLgZqVxrh9d55wh7f6NzKr2yY3me9zwajRXVN2rQLH7uwmVoYU7ycNP",
  "key29": "2M2kuBsxCn6b2i1znRtSQZhqfRoCeU42rbErzDsd7E8nh1kGHsMrVmA8YpHq5WRdgqXZS75GJYuqh54PTKmaGstq",
  "key30": "2KJy9YHgUMh3SRxBPxdr99gMLiGrJh9fEKncbs6hwDF998tRz3bnKqgBVQFGk3UWbXGjieWQ8mMmDicEAsXQ2spG",
  "key31": "3rp39FEpL2tgVDtpK2FdqofGqiL8fNUnWNaV9Gmj8T9mxGAoqEJ8fWXrR6tuup9SHNPF93bQbGeN6qMdXuHoQmWM",
  "key32": "8hBhyaQ5xKmB953bL9nvc5cKoX6LhJkiqkEH5Doi6nRejMq8ny9frDLejSXgFMXGfUyYsVUCUp6m8vWT2DyHMQC",
  "key33": "3VyPzPa8x6mxXP6fdfPwoF7nv6V2RRrsY3JLj2DzA799va74upRGDenihohzMzaoNiNjbkFSsfSsfpB6CS3uPpZe",
  "key34": "3oyui9msVPbWVkSjNoCz14M4mSf7L8fPKQwc8RhXarJS4XrKtLFD6w3Jrx47FTtUrKVdj1EPgoYEUfHKm6gNXk8k",
  "key35": "3rRbCkkktEJx7dudgdL2t2ez2jkvMn8aeZ48EqqSXyTH5xVLeTNfdNQebZtAohiBrYWG4huLkAu9GoBYLfZB8AAJ",
  "key36": "3JBXfUcSCn7UmMVDskEAWr2HPHRCwFG97E8PZ7wspsKuMy6dZtkiTpZzNXFibagPSfeSSDyYfz2sE8o1sRf6JBoQ",
  "key37": "2GRVRgtamKujzCC7Lw6Rfmy1mfePtJ8ohJ7syYjgVrToecr42nYNwoUtKtcx1fXfswbxWiQaFp6KZtrxmp6KvvdA",
  "key38": "49vEn8ZP2rbBeHYFGrYuqeC7QkPBrzoMXcxdhcFcX3o9yo3VR4ECvGr4HqhzqQFRVutgSfuw4kbB7te8QUBkPrdJ",
  "key39": "3rVNAKinVoPwi95VtDcQGKX8mS2q85gFL2Yp2mY3CWJxfbpRKSokeAb6fU4TayXbuFBioNKdr9WUxUTYM1WL2fRu",
  "key40": "4UnJUwhsTrZbFBPioZBD2iNUBzwoKrHrna66odtG2Rc5hxDjBeoGSezyuDhw2B5cMLqhT8KvQLiQN8ZTaSZCVzqm"
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
