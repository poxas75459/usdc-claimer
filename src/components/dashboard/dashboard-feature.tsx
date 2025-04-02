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
    "64yKNJWacoZjES2RCNRj7R4Jc1KLu86YNKS6HThtd6uuFq7q5NWUK1xVa9gLj6id9T4QKX1AHx2dtTAJGW2VfXPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BhtMNWz58kmSwMcLcBz6Wci7n1iMf14dUYMYXZYPnjh1qxJ1R22YzT6NViVKumcTaYiUiq6qMy61R5k5gXFwbmz",
  "key1": "27tDVCHrte3FVjnZXMub7qaibVpughowV8wKxFyRy6mPWE23pzF963F5qf9nXMDkK57wBg92DH5ALM9tCr61TmR7",
  "key2": "482bcZeekpHF1kCwDo8kHYjcLPZahAaHRzpRfUaYMvx8MTfL6CkQyN3wUNq2HEdzxMRjsJyUuG7rNfK22YbZUxkc",
  "key3": "36ZDwWZrf4gRHzyog3SScYGFhvGjxyZXECLgk9mTbS4iczmpBesRK4cKuWPo1mcqHfZYnbabZ4cRpVa2W4zgbhaa",
  "key4": "QKJaYHzDxqGmyjBxKVXYTQV8V7xEpJdF7PWKMHEBoHDP8j7u2xvsG4SGn5rG1Ns1n81iobmgDZ7W7Q41nDTQj6s",
  "key5": "4AtJTGXbEdLj5NPaMwaaWpgPeRhMQyzZwguJLCGZo1xxdgxZdsLgcjhWDJy1AxYG7pNS8tQ3PLY9D5FF5hmAVR6R",
  "key6": "2Sk6YBzogq6KfT84DrSD5p88Lnmdmo5Kk6t4SmyU8mbJoBeexPBparXhqds1bGmjxeqa8GzkPNv3oHbQ8Y6hSmSj",
  "key7": "66cPnvEkcjE35MS4JyAfN8dc7MtoTasSM6mzJysJGSpDzUbv2tECphNzUXksqkSX8xZcQd3juJBMi4AJpnRtnnmT",
  "key8": "3uvD4gnNvMvRxZcwVyTya8foW7FAhnHMNfZp96WpyUK9gN22pwrdLJxMU6uKXY2DAoK2w8KzzaBVg1NTeZF7oHoK",
  "key9": "5KJvNB92q76CZco966Nuz5UdZm6xDfvc3r6EMYcMbXuT7GLeWNwJV6BTKBmp6wAh71FVF8mh6uTEaiLkdretZDPJ",
  "key10": "2iLLStPLFW7LAFusSveRrbdsqYvtvn4zHovGKuvo2D2NvApH4GwjS9CbAr7hH1v6rXfG7iuVoaLsjV7FyhFaYiF9",
  "key11": "4ojWxyNbZ4JFxcgBtY2LTsBJ7kHmQhbkrq4v1ZR4GHCLMWVTQ5XYRctdjWki9JcCVQjeMoR6dEsP1Z5Ge2NMPkxJ",
  "key12": "374G9mPPxMpsfQ1oYLpVfJF7ywxYXJ2XD6jvKyMvEduMAx9Abp7izQ5Zqv44pkZZ7S3bsdmGHoaQVsfdP9vi9iwo",
  "key13": "2YVuhd5xCUWAfaFMYFa4Afy7K4NSvuRqpVXB7tDxa66B5iSk6yCBcp3SU8Qs9HiFNvnBzwkDJwd4MJ8cxLnnJWHj",
  "key14": "3Yycyp51nJtvuvPPb4NS3XTXjnw7Cn7yFdGVg2BWAjjjCxDHsCfjeXwaqN5avZNpa3o7SNcPUSewMd8FK3BfhX5T",
  "key15": "2iNKNPDFCaRCs9xHLrCzWdSVUeUdebqcXbEDMPzRcMBjgVUghkihSyFojPhohKPPJdQsbQvCmXgdtHA7L5dgaCms",
  "key16": "5MKxzu4RiCHyEcNtbgMUqPaCitncoPpjucMfT2UW1ptdUPxWru5kP9Zv5CnqUE7eu1YXMZ6MXbs85waM886u95ww",
  "key17": "2DiVYLaGcnBsNsuTckbSufwg66jGS6Qy56bB1ZffDDvLHFYYTZaYeHRHaoTKgkfuqmPcPvpCYe62enfuiGU2MTZ5",
  "key18": "63dGuMDw7fnHrAuJ69gZCpFMxkNFDbbjGMegMA76GarexCDBsaT4tpKpAa72zJ2r4xrpyYR3qYZJRMVLEHA8pmqd",
  "key19": "4hcYLqyMXhzexi5u37yzHkNYVV44ef414tpGmLMxzEaHypuXBmyHLREMkJCamv7fMNJ9kn7fwApStToE6crHvGSe",
  "key20": "5cNhv2b8yQ3uKjCyqcp6dNdCZLy3XGw1ge6wbSaQPMG4yKupxn4fqEB5Uk5z8Gsg3vUVBystHCUJRCPyAnoGH4CD",
  "key21": "3svephLmn2CPX87xbmDoeW2Y6LXqsEbcn9P4d9DWmjFDBqwjDFwBnHoT9ceT4UZndp66yvMis1oZsh6V5L1PQgSb",
  "key22": "NthkSobiUBDH5X5fvf6EcVmB6jEkiApd6LeQRxYoGmt2YegkrL8R4dJCByiyw26ffdW1GHC5M9UBaXQVwRTnBHh",
  "key23": "4KiMF1UE9daGNz7KU9xqfg6k4RA9u39yhakH2CF7RKr82kXCobZzXprDQA9A2KFJRQyaoRrG8djEu8tgtRqgfGV3",
  "key24": "4cJHoZQKp4VfpfT6hHFV6148c7QsHRgbPVNfjxs7nStn7M6y5QYSjTocAcJHxYqZJJtf9yScZgLmeEhKT4S5YfSV",
  "key25": "4mUftMEtnZyN4hPDAjgDUKkaPaS944HHr9v5vYx86e4dAEPtfFgGAhdq8PtkKorSF4mE9s7ERQ6pEnrcLEY3BkbT",
  "key26": "5hwCGtNgrYqRPRB1jWKsbAZPU5i5xmjQ4D99yoo9YyVtzWmZSZ3rqhRKL34RSJgPgPyWaUrpkBJBNj4dFM6YvFhB",
  "key27": "4zdSRJ5Pkq9BvJXuCWQZf4U7zMzv4CPrVnpYrZv47Ht8U2PhsFK9wZv468fQwrkVEBskqCXTpwSpee7whYRyhUHo",
  "key28": "2fjojkb2oPe9bRHvDw4MQ9WnCdW4ejuXqzYEQ8srBHKN9WtK24qn6uAVr4fgpcBuyHciMxwzbtJS9KBywMHZvPdp",
  "key29": "3H6vsKZ1JcNCQGDaYVsUbqvvHLRYoz3q8y4EBBJtWTbzdP5hUGCzZ5C1qaa4V8RBYkQuzfbLq2Mz2bWKudbw4x5G",
  "key30": "4RhZx6NekUv6bmMc9TdjpfhdoSP784fWjtwVsJmidBJwP7hDEiNKDRq9hmjzKC5h3N8w4uhFNrdGNkMsxNZuVpsh",
  "key31": "2yK2KdncM2BwoU9jWFGPULRN6pmmngte79vdoSjozcD6GWgnGs9nmuRQmLVwG3CGfWB65kDmx7iZuMRTjtBFGuTN",
  "key32": "4GVj5ZJJTi564AJRWg5A4nNp1CvGQ4L1voovpA9rf2DThn4ck5ffK9xkaFWGeR5KYpX5UeY88JBk16wy7JjFgB9q",
  "key33": "5XxvkhNy4p6nDuqicPMDtgJDuZ7BRRc8vePaYbg9nRSbC7vLJ7fFsWobNAG2V3DRpQoAitkGcKz2dkeoh9sRPGjn",
  "key34": "31WDkaEkziEHm8jWWPUCdnESZ4AVddMTmTVX3ALfDzAbpjvBUo7Q6cbWke8DZDo8k5cZsTZXXB91jDXauC9QsEgg",
  "key35": "5LL6ZCj4mi6MQuDokoCCMNkqZ9jBCHKQedXKGjXuHqNNJLLNHwXMBtxMYmpEmvxaLDUp5PoHdUf22Sqon1KHAUgF",
  "key36": "2wJcSzPao6J6bxdMQKWRXVxS4BXaWYbM47R4N6kDSmKCMnTysuMz69yKSCXNqcXw1PjYbC6vUPekKzoegosv1nhu",
  "key37": "HJ4y8JCAG58E3Fh7eBNBjzVit9FFLKSRRC3jVVVSDVV5YarnwYrYvKptQBFr21icm3pNuvma5CDa2yoSxGW2zX6",
  "key38": "2856N2sijq67Uco7cPx5n16YbTdS5WEvvrJV3pTevXBJpaMHbYZYoV7kPVyR5FLFAE9UK4QeGaTfFgvVssgynxBz",
  "key39": "4dfLNSKG8rWbiY2yXqynRjcBo68DAiyFJ8NpDApm1R955poAmW4XEHWayknekxWat9edo9dvwkx6hxRC9DFJfy1w",
  "key40": "51SrPtTTSUv9mqapp7KaugHkxkoTaseMCx6UZC7K5V7vsH9h228id3XbCi1fo4kRfC3LEfx2Ybpvi2q1bcsgRpZH",
  "key41": "PRi5ynwUtTTvLH3cco2pP1SbxcUkwhMQWuAtbDrLmivmmJvGLZEVnCiZ1XgLt4EqASLXFrp7wKzCCNTFxz5MBpv",
  "key42": "2U1oxNEcqU1ZeU4DmwimkfwaxxcrhU3rh9wvd1UCvJtFyP31UHcHsQv5akmiu6mAUKAhLnSTtjzBr2eig4hFEsQL"
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
