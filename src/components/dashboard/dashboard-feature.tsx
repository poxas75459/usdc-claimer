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
    "4G9wqBLtRH5r8DZX9F2hGkJxJAaCGijFofGzNANZH2Q6oW9oHonxqMBnqoQ6jHY4nj4RTe2d8zDDT65QrZ3iK8xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ywjm245NS3CwgzW8KoN8bjgesRcXhT8jd98DqQMsV2tgoDe6CAmaPdfjnfGrT654Vfd4Sdb5reZ71fsmBnV69Ky",
  "key1": "2VsKrtoRutkKJ42tTWME6vMCK8ibCt7ESsQSi4t5GoUVPnSeeib69TCx9aDni3vJvZ628FvNvwR7XjC64AfhXEf2",
  "key2": "cxJjYGyrkhDpdFz9REicEiSMETkm8YmDHCe8g9oCF1H4o67EknGFpUbdq56ojwARXMYhePMK2a8PxgtoVxjN41x",
  "key3": "3Jsk1XMJuoonoa1EruUVDWQYX4nzZ9v2eaG57rM8kGGbYdzYYZdrNkZ8mh1125VfX7TSMFrrWBoo9ZMu2Thz6zF7",
  "key4": "53cwhLb6RXmBbQw2wXFmRfvpY5qwh2R4rXtn1ZzKbMifptbo3dd1Fh9ZwhMQZLtPrFG77kbLzEwz2HxoTfNgkSR8",
  "key5": "3n7zKhotMv8kSkFeCjXKyo9GT1kYpn7DyK2ibp6JW4hpfdupgtXRs73SWwcgsAd2Mu1AFbSf1E4xJuNE7zrNPJPK",
  "key6": "2tiiq8ygRQ78jnSSxiXJ3AUnmzQiBQZkY7EvZCXRNus233H4ycxRqc8taiDX1WUoo6VhuHVSzmtr7A2eyeVJi9GA",
  "key7": "5mimV8j3DeFo4TWSqY34EQR2QKkq6pV8ZotDzJspVA8WCFPFsomjmo1TX3Hu7nptQsbBN3rYH6c3cWrB3qo2mvuS",
  "key8": "eYhZRC4JbcmziUKKFJDgcuaBwy5E6eUhgaYYRWLNBdxQpmN9RFoRmhNKsyUw1woodUdTbJGMLn4mdr45fheFaSx",
  "key9": "4yUC7Wd1fUKggA5ZUN5HEoFZKn6eJrYva3eFmYgm1mWxhJ5sgTqQDBfbNGh1jRMnHNnq72Q29PHpZNUdX4hThGhS",
  "key10": "2fBp64ozeymqSVjBHrzj1k6btBg5LF6sYkT181Px35PpPGRxUfoTrctPmZVWzzet8kAXB7vHThw7PSuawXXp6Zi7",
  "key11": "2tVShHu2UFzoSn32Fw9tzn9sMWJaERvx7S1gM4sE3gy5DTaZwnDYVhPNY92Nc6CwZbnv9fa5tojwes8Cj7DTXqWR",
  "key12": "4fqsWNLgNTG96ExFRGWuv36GfnuUD5hjxctvbW87LmcL8yyNnXhLkv9QUtcQZ3YmcLfFcGMV4jQUadeGaT9CZwdW",
  "key13": "2QcQvxTukWdbmV8zvPH1oejR17WhAoY5KARB3PxdqtDjiBS1XGCCLz7j2b7ygex6JRN6awEzrkofnWkEDDuTbQYP",
  "key14": "2jTN7fYRRnqAg5BrJLunwW74nUUh6hmwjg45BjHHojiYJUoYV5a9WT12FRYeTDz32aowCTQhVdQduQ7etoL4uVQL",
  "key15": "4BQCjPY58kanprwGDceNKHn6tfW3zudFzJVvvDiM87jpKrVfJNGKa7481yXkRXNRE96Anwh4LQ3SynKhFcJQo5gG",
  "key16": "1VpvkTPsKPiMWCWb9dQwJnTs9t1RiPi1ZMmrkCqXuwB9PnJdXhjJQnVDh76wNLh32nbSo9Tp4SsD8W9tTy4seYV",
  "key17": "2gebhV3wrrqCoT3cYXBynyjnYN3cbCjqTxC4XRqnCkgoHzL5WDW8mD4BzfNnitJ9DSWWkbxY3eTrLVJLrJmsBbvD",
  "key18": "67JnxMN3mQyyMAcvM539cXkzGBAYqdHHvzGKbWfLeBPLYQeuiozgmG87rwtvRSNKngvfUqAkJieMGBY6UVdT6UWL",
  "key19": "5YiMdBwsPpkg2YP6iRdCfr9CZoSkmkQmtyYUMpmwXm5ZEgY37bt8k4V8GpQSkkGArLzGvPvZXBNYmSwYwYsQLJ9E",
  "key20": "4ud5UoF5edyCzSJX4tAPwDmb86QPMC5mNtU49LKTnGJtaZhWayBVqNrwoj3rs6NbKBbWbE2b3eDfrU3iKb7NBvCJ",
  "key21": "5Ws7RqMzT1VcHNzCgmMX5yYBe88UVHgyn2b9h5hB1cPGHujDx6d6WYrte8VmhDoSY2hDUc1QzqFZGYHZRduDh4DE",
  "key22": "33sFVB5Cn2nTVSDLhpYjZsFnUBKUHDSeLZ5Yuwo96Nm83cEdwiB2gKd328KzHgCDi4epq3Yqoyp3GJy5a5FMvwMD",
  "key23": "41wb7AEqeRjrWVFqYTNasKyphvp9vexKTQTAt9sviYATe7GS8d8FRkM39RpuL49vvyuiY9uYFUJAE9hNbD6EBkrb",
  "key24": "2SwqmzxKJSuKYz5X7pLBCngWTaFwoGk9q1iNEq5LWR2LmaZwoV9iYbDpNGZadAe2mz1Y7quDrLY8UJNTadZKkAGe",
  "key25": "4gHKG2qXrdMiJhUSfVhDyr8bUfAcxxviR1WRDpUK5yzdZx3MkSc96M6RCJbZc2xkoN5bKdmL24LJ8ZP1ENgQ3fy4",
  "key26": "5YLJvsWLbC3a5Pk9m7ZgN3772TtWNRrciSfEPMUDkXxtrWEsSJrXyM4UYQjsVNMsQRbLJrG3WUBcoqzWzaGHCRuE",
  "key27": "3Hi6zs8RYjQySmqmd1rRgNkyTXb4oNdwkiR7LAUgkzuoiTWBHd9sw4PBZ5byywiJZqSSAgUUwoaVnmVY3nSJpgsZ",
  "key28": "2MpVsD477mS2a9p7SeHaSs7iJN9baJK24UajqK2PKnW4AGSfxoFLr5EGD4gU719URuJtQcfMTETkrsxZDNYHX7pq",
  "key29": "2YgRxNFzsEHBVL9A5PiW5X7U7X7F1VxeSb97GqxvzWh25BJR4tGyiNsCj26M8u11LAwmqSf228aB2NcX78J7njoG",
  "key30": "23We79EcSYxDEr7sLM5pkUJegvp2nFPq9aPDg7WpCj7xkXKhqQSWBqaBsyN9VcsyxKhvnnc3jemHh5YATnghikN4",
  "key31": "2wuEDaQHFwxFTGJbxn4kbSaUw81REMjXfFFycG73v4kskpA9NtuNgsUtgBeDnrf3nFthXVrkEPtTUHiBKTUcxTk9",
  "key32": "5HeHcfKyunNqKAWqdFEcJAVDHVKyDCX4tbxuo6JsPaYonoTaarSCfc5e66NKkbJWRhjqq5Vjo4iSCsAKkUwyfJkB",
  "key33": "c4Wf1XXuoh6VMb6a1jsg4V5K4pRGiBAUDxVFzYZBpW1HEGg5tA412JVpHUEMUGqygJmQEjk1FQp41J3ENvNpRP4",
  "key34": "51oUbaXZGUWrzcxJxCCqS4pAwptczEmjs5LCCuJJLALPxk4D76sBU5DMN79GSXFQpHDgB5JX7aFy6KEs3fHDczpF",
  "key35": "zHBWVZoAcNvjykM4oz84vdbpzXRSSxSWcFbxR2QbmzNn2bapgGN5B9wphmUhmpDf9aFvxsqrRK9SH9vrDNYfyQs",
  "key36": "423zfd1YMyTMjKRLpHBReHUk2A2FyVnLuZ3mZ91nLaWUseNpB1sQqMQhc5BsiyyC9MScbyUfSdfyxGbNyL5qsGYu",
  "key37": "3VTvEezJ8aqGZfRV7KNvYueYiFkTKdyXcpt2GZ7Kyi5564B2vKJCDyEdGKunnBEat7fgTiBVSNeiM5ah5qC43kwr",
  "key38": "44Kkq6gMYY4qgVFAVRFCXJ3jraZ2MrfRcCVDcBymLxvfEamwSdwfoaGbLnLybDw9R8vi1GuKR3TFXwfcawTGnviY",
  "key39": "hWJXNwLoiBuh6RQ2M3cziph2DkggjodqeZZHPHNm47Geb16fCMtaayaMHKzsgE9wJZS98Wv9P6PWDMeRkHxQ9rz"
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
