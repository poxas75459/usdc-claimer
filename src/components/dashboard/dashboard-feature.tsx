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
    "2TRRbcGruM24HSaJ5dDAzKkPpQ6LCGRGbvDSzELgayZYsDZXNsj4ARxXp4T1EeVN4UVjc1zn3kcyoC5oFDQf8FjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gAWemy8vNWWa8UnGSrc3dZc8RoaCVo8dKeTG6aCvuTJFpq1NY7pbru6QvtkBB9p8tucTKY58prJEW9eWWRbuc9o",
  "key1": "4sXYUFmKnqzdWZR4NJibRFSF1WQeAwWLSMmC9fQNu6EjvW1VJ4vzcybRpfWd6yV8LTAYysnLzk3XqUFHdfMU1S7J",
  "key2": "4NrQy9h4haZXce8NYHTVXNkvwFKupZaMkLW2oBGUu9hDXEkoPJX1mxYRaZvy8gjqX9akHDuAf86EeKsKGZyGRX8i",
  "key3": "65veMrp8crBnx7mLN8HEr62S1mFr6JuFPmWYXxpaJo7ZBQG7Q83gZu5S9UqwVz4cQHMHNnsTnkvXnDUemz7dLGmx",
  "key4": "5F8mvxkX4G4kk9jjGsn7PsbtqxDf118y2y8eFtDjbJRcMDCpX3e2LkaC3on6kCkrPE16niDrM1BWk8XS3K2Kr4Gf",
  "key5": "5vn3eqvTekFpq26cv145ph1UMxijCE14kpokg5mt9a6HsvDdQEw2AdSD12suNpS34bkoHB8zyUNMDGoFTaTPuzF8",
  "key6": "43L8U9qxH6vzPNt1AERJbCY6PnS5jXg4K8zqcBJymbrwxByji31udvr9zut2HMzLV76d4Gaa54LHhNjnw6Em2DUh",
  "key7": "u6KC3dqKswkrcyncUcMNjRzjP1wWzJ4RvR6sLxsnd9wJVjvrUzBn7EKbQ9uPeB11spstNdNL5zkKyU61jp3WM6T",
  "key8": "weQoogExXmaLZzo5asbv3fpJ4ZDT8Hz4ji3rrAPVi1cC3byMCnnTZPT8EyGhDAwUFoDsKkq2ZSun5LPEXxXuXF1",
  "key9": "5bdaDMECu7X8NgsrvpwNntcEEPbmTdXZy4FyhJaVuqCx1jRBRHbUPoT393nr6E5MrPP6X6BdCpXUKgZg1pPJDcVC",
  "key10": "5J74aAnsx6hXu7tKVQeH5yNeXc4X1VZpfRxhiy35azDJdqZeTDu1m6tdyg8Txn9NRZtmSb7d5W7Vr4UmMLrukoAN",
  "key11": "kMGiPA44kLs5VK4EzNGiDdSUEbgJk5uSxqeY5yv1zYwyHLudiDz88Ui6dtorGxV1njU5Fa9Ufs1uDCyjsajdkWX",
  "key12": "4gQ238TaHUnaccvRydwb9BsUqcTrKeKXG5g6d5Xg3V2pajVHJ1Nz7cxR6aKqvtfFhQHtbQHty8dpah42UR7QGYcH",
  "key13": "2aHeo5kRuSqvnSAHSAFbFGyxxDRt3TNjHaaoU9ZhgcX3H4KHionBp9Ntu5LQ3sqKRMCh3oNRVS1fi3Fpw7ZPM3s4",
  "key14": "9fVEr4TNDJuEc7F6n4ahMt6xr2d4Kb2DPkea2TP8R7QD4TRjwKdhpSZRCz2MpdWscyY4qBD5EQpZ2gavDBEZBfq",
  "key15": "4EZUugUKM3AetEVVgvKANkRNET8r7jmbdQZ84aYoDbgpZceCTTAoyqCGTqpL1CjT8URnrqTJyaitYeLV4pP5iuEZ",
  "key16": "24zSz2tFiSUSAYhAZfuw2sKs1YhjhZLb1jFVVj9KVExg5UaiTufF2gxyNbeWTQWi1XQhBhodajyWoFzNE5XgS5Ny",
  "key17": "5yAfAz3bDVzScuVFwP1Phy1U23v5DnC6q1WrezRDk82kEDtapHrXPjqvwAHTU4EiRUTGFb44Sm58EETvJneLkb6X",
  "key18": "43jVQoSRfkBTm7pGqwhSHyNag8KxwXa9gX9pgsiY6F1eo8JzgDr2xcXazMScHECPWX5HDV7F1ck87z9Ctwf5ud2E",
  "key19": "XCqgnTLvv2tdv4VKa15NX6u16LMJKJX7TvTbexeegtrvrBCSxeaueKHTiTdcyr6bgTw555CWF7HGUBBxGTu2AE1",
  "key20": "41Cy5oWtSpikRYoMezamsZGKrTpyagEsBAQa1N8aE79afrTq5BvMFiVUQzsds4iNzLiTaFmMYEZzx11TJtFSuE2S",
  "key21": "4n7szufWSG8XZbQS5d8eU8Kvq5NDvP562geUiMPWYAvSWTDwGdXBeqZTJWqcRPW2jFhcBfPuPNe2SWYBt7S5rRUn",
  "key22": "3cnKWPTELDe6CN6TurDhdQeuNbeSchhGvZMPpzg3Q3UooARYBdM5iGEYRXPxP4bFoQR6WcVcWv9dNgZ4h2vRJ2jD",
  "key23": "2y6tUxyCWKVSrjPxc9rPngNw6WY8eWDrBewkZuBK8WW3BkRiLC9B11bWa5hiMYtCNREbX6SK7qx9ZcVGqQd1SgBS",
  "key24": "43xAHVPnKqNnwppYWoW6C2c5WKkgLCoeVBDGVmp1RhwS83R7D97jJLtzfpy2B3GyZE2mzEdAcJvHM3x3SG7DzEmE",
  "key25": "3Ufgr3SzM5qtjvJ2QEAH6gmQr57pXsPthX3PPy7tH8wFr6e1PNdbxgMSMTahbkN3QkKNki4KySnF4k7mz9N4dwis",
  "key26": "4q7bpWLt31Ds7CD6i9tAepZFAYoxAsRhLNxuxD8QTNCLJ4aXMEycCTg8QCMZcLSJgTXczhb1ykLAfc51vrDw3DzU",
  "key27": "5bo33YDoSjyBnviTUZ2feN7tWVp1iPueV7bshew1qEqEZanWeqNptzJLRLNyMmUTtHHtaUJJYyCqWphbC2ZN5TQB",
  "key28": "1oXAYFrg9L7wHVvEnmmCFX17HNFewgnE7HsFgiBgEnA5AFYPPCKVduG1AXsvH17LiD6pcpgo3uLJqaBZThe18ad",
  "key29": "oBaZ29QSWjCKrQfEY11nNAToRcp7TSLu2tJeXZR48FxgwGbapeUEb8mFmvraEoui3nrLFYz56cDrpgAoMwyq5vU",
  "key30": "5aRnktx1PAQ41ebcuorb5sg7Kt3u8wCYfnacpaooUFL15uHWd9TLTifEhGzE9iBgAE1Dy5LgpPuxaZXG9yxQiEUy",
  "key31": "4VF3ssEbmkH8TFLYHzrUJFNpWrJLSjp79LYhNKihfrhuuW1gNj3mgNBVrakTHfKJRkBtdKcobrftoHzBPQUFghdN",
  "key32": "54BfUKH81GT6KG2AWsNJjUeSdZ5CTcmJF3ziqX8v7XwtmxZj7yoDqLp71mWCTYZosEJVHU7VtX7Dh8u7T163QPsR",
  "key33": "WQgMuat4L4r217MwNTZdvdRXduXAeeUXv5qLWhk1x2i4vGPrUTZ3QNPMdgWXXMmYtqqGYnbp3bo5PQ1TY4kgryQ",
  "key34": "4cYm1CHwFR6SB14oRwjzyZ6fYXdWm6KS5yR5iqjcJDPiS2DNzAkRXLr32xePB8kn8hbNFKvvqAr5UrqDPjww7pK3",
  "key35": "5qeF2urq4nDfBcaRm8QeGT4yLwyqv1tEDdZ9gputHsq9t8VcKxk67Jw8XmUnpgFvnCMQ1aJwhUJBbLfD4jvCZ6mk",
  "key36": "2jC9tVvBBYDVsaqL1rYgGN8ihWtGfoaioa9nduediusjUHQGUeKCsHLZmdrfT6Kp6Nf5ypSYyEGDWUAaXvS8246H",
  "key37": "58E4AfwsVu7hveffY7pYB8mLZoKVvpUUAs3rxUYYFTP96mGbiC7Jv24oxuwRgSA7nmJ9ooVieDtgvBkzxSf2Bmwf",
  "key38": "r3xymCjqzyPAwkrtGVWTdKZW8pmAEdpBBomVfsiRVznMjEvhJYz5a7iatZJ6xJFB8vjnDTF55tk3xQGLVoRUKFg",
  "key39": "3VFcxUSJihZaD4VfqH8DNf84WtWNYcMWnxZBUy3sPz9D98V9pmidYrnLia1f3h8o6YGvnTW6jcLrkcMwkb18JD3o",
  "key40": "kapHFMdo8QSwLdTocomuGaBQMMwkpDJwv8Sw36npvRL6CWgWSzU7Ebib3aBR1o54fkyZFGEgt4fsP6e3YgmWDtJ",
  "key41": "5cvqRmkuBEEHh6nbKK8sPfCGAgwCj51PSUyqRgbuPbktNV3449fHdZmyoEygd6nSNE4A3HSTXMUvELWogafHGnSU"
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
