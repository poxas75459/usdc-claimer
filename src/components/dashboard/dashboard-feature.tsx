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
    "48JxHQjSY9A2vGqJNCneBTWwf46XRSk5eDqY9XrYsCbDKzd5CF9asXxqSxXTZbWGA9SktK9PiaVH8SmZ5tu7GP6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXAfCtU2qtBdGinRyYQk4w9NMn1YStR5ZrryrKKjs792na7saQ9ePxbGnzE2cHLnBUoxqt6kdVVoV32Lfnkd8r1",
  "key1": "625Nq4aVZf9vmFq2nykF6XcmRE6D7k6JgXmEgKT226e3Uuzkoj5HQAvroXbCRqvGgDs5RZ2x85A3qEDQ4mdNvH4J",
  "key2": "3wyTr52qEWWFbg8Y7u7hk441PcYPuU7kn3RHc7WVLBTVQFwEK4DNfpKbceQGygH3niRvqbAfCvQmvPBe611s1JFa",
  "key3": "4ELbATMA1wK6Y9sJ6z4q8nrLP2CnBgzRwcSRjUQv4YRb9YT1cGkFcmYUrNjvSmXhrTnHjzyXs6LPbVDW2xBtoT5z",
  "key4": "3gJM6vsuBRY3RszTCAHJanG8mAUTGu81cu5VRLbd6mEXPJX2cTaskniMPg87KsGzzHFr1iADfPiYfqkeYyA3VSMy",
  "key5": "4UBMHr4TTDtKf7XHDvoyZfjeFyybbM2QjCBB9g9kPZXsb2PRGEgbnJqWxh2Uqu3cxSXwoxn7M2iZjFZA5H1rPW7b",
  "key6": "2Kf7YpozGQpRkX5MhjzKq5jxyp697K5R9yPtwhMqMUwTtsT4LMdbe7P1VQ8cZgWrtSQ8qNHhaD66qECwkodDC88u",
  "key7": "5PV9PF7vV8CGXV4GwiBL7EW5iEyWuxBuS1dyCaTs8avTELKBeNcz2xVKyiQK1gLakRxSxCzk6KbH31isv1PvxwLt",
  "key8": "5yyW9B1mPZS7b16nLFGpVw1rXnHq2huJ6KSuGaJTzwQy7M1gzSmKiQ3Gaattxr83QLCbzdXDiCmRmMSidccGnhMC",
  "key9": "2WWetJjypftoaRHFW1K5Qd2Mwk1s6Dw9djAeCDvvKoQpwXm9M6guX3GDdbaG13cekJgzzXAQGRSx49TszpQ9sK7G",
  "key10": "2e5VxXJaxR8AA8R2BXBXduabTDWmLdf5MsSipzUDo3Hg79V6YJAozGPFo1qSmBpzVUy8if9bq7Z4FUnjNd43VVDo",
  "key11": "TnTeRawm3LeHKGHZKfyYFXjzcqageVfYiGRgTB2UpeMjfBgZb4M9fmrARCd6Q4ERFVU5CG1zNrHMEJLytpfUtF4",
  "key12": "2n4jH1bZ3DdjPQZpH85XpBLoNcMrWbwRvgr3etsmFo1UmEnL4A2KnnVpc3758JEfoG9NzMfz2qQaoXRq6ShE9CbX",
  "key13": "gWcuvbXoTb1BoLA5ZskParpHoV2SSKCPfq43Rk35mf891myD46EUJLXcXj8SEWaJgp9dBCEfUfypK2DLHCxyvNE",
  "key14": "4DUU7Xtx1vdtAvT1YpFWeJ4xgXdf5v2inJrLYKsAaMhnrYNZNqSGsqDCAK9BT89zBpsCLLhnaPVQ3NZB4rtyBFc5",
  "key15": "5STsH4SSATJn8UsizCY5shfdTtHzZE4czyabQcMzvLuYg52zUn9MYKFfm79Pty77XACb98N1TpXtQXNBF3MdAELN",
  "key16": "2me2ydrj1VTr9wwo67fSNi6ErUYd7gMWX5qwj4aDhkySRcT6zpjhrq3D9UtaLkS9PT5LGmf5FTz3ucYrMPS2ZoDQ",
  "key17": "27BDNG1YGxaeTkWy2YNzzzB2XzimwmYuMsTUPd1A3NgVVArEnqXJmwQbbKzssJirETKDEXZ45LYwJ2bKyi78oFGi",
  "key18": "W55Bd5aUzcfnTtrzK7sv1MCw4kdNynbgXGvJVi8Ck9MipViZWsdHsbuLnMEqQ7WQcMD3msWxFerVUfcoZiCiDYG",
  "key19": "2d3AdPKtDeHf8odwWtW8t6hoRLwuDz6XwYp4UdHt6wzAgJMrb2vgZGk5YDZANj1xvG7wJiyczS51FTSzKFok41oT",
  "key20": "9a8zZSrxj8DVeoe4wKL6cxPWRTJzD72fmpBZT9vXySP8kfofpaboTF8c4spELE1wEtBGqHPpKRWfmpHQpCUJTGP",
  "key21": "3rfyVG4xDE5HxRs341b2KtH47xXCEe1rakZ7iTbvSqCrdENZ2v9RSRMgqdUXGBDDZquCKdEnLyNpohUjjdPMYhpE",
  "key22": "UQ6GegcJKMamjpaAf3yykJTurAgP5ToBsnak6dfRvwUGx2soRbGPxo1DWTfzYyqqBPJgtoLPpnYPbUX2gjM3Jek",
  "key23": "5q7eBuqzpChHH6HsxGdsDDeLw2UWzSdFYw3Ufpae5LmYjH4ncQJJMBzNUNMkfrZTMcyw6hGCMM1BBzZnsCMkGaTr",
  "key24": "4fQCqN1iDTbhnSmdhaKqM8qEuzovzdhPxNAMDDgSKLEKs54mqfwhDhoQQr6w6HsMgcEELzwyKcsD63MPndJD3YLB",
  "key25": "2e6oJjeqAQbLa3fvZ4LAQduXqnDtSBXQkWsHmiUt8zRkKuRQZwKJFi3646YjfGoGgmkoEfnDw886cufVwqm6Qmgg",
  "key26": "4cSkvgqMYmYzi2Fz5FzZTuM12Fs3qGyrNM2q39RtiFJQHsHSwQ7f42Q5S52KSuXcMcBLPiKL84PtAGvniWHUgyyx",
  "key27": "2ZzBmaBKeF6tptmap8QeK5pQuu8RD4HZas6w89wB3jnxMeHkP7Yp8CpmauqvjfwfTQkLaSfhMFeHbAkBjKErXUg7",
  "key28": "7tzYwfPmuYDWcLWcCeHZeAfMuiwbHEq8y63dzn8areekTJCQmcs45jUiLvtSJtjtQ6G5bgyst5D5WkfYmSxn4Gg",
  "key29": "3Ad15KEP4WbG4ZTUKdYCSD53fjrrk7n7zFoatcyut3MWvnJQ1Cn3biCZYaEkLs2drEPLJFowKXXdkU9DAujJZzFT",
  "key30": "3R3tdpxv68JRkAq3qK7bJiucL7UvmfLiVitzgApWixraiGSPLNCeGYJfP54Lbq5VDuX6TNtXhsJTBxCr4xZa2Y6i",
  "key31": "4cDnShaUvr9H3CnNivX38CME5nrb3XQ73ouxG46Teaa8CseMpY13xGX9s7ZMyEAhtAjfrhcgaTQ65JFYHukhEGC1",
  "key32": "AqV2MSAG9YRW2LPmjB3EYzqhqqkBDuzBKLkon2D83SsUpkXwuBB4ZLt6k5iASo9Ym8erwu6Ae2zHAhAX67v5m5E",
  "key33": "5fk7EHUdekN61LWgWMrCLyCxAajbGaz3KWhybZbEPqmnLmTdUV6yJHiCuUTYFvxLRAPjZsoTzLjLhXVDn9X2MMSG",
  "key34": "2UJf2gASJEQHKrmgPrZMgaPrfPwZhDfg9Yz9cmyabfcmw9GVt7aZ2VBAqZ4EogE4akpLc912JfLErdR2sVjgL7Fq",
  "key35": "4pTFYwtBwoTckzU7cG1cMioRWE3gcrwBhQedepeNBKZPaWV5sqfhMNLLmVPyC9kQMW5W2n6yvTYrsd6SJbguyHzy"
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
