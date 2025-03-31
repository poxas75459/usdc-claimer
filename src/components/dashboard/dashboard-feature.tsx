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
    "QHoXygygfEvrba9u3SYSaQhppKjAHWUjS35zJte7KsJ7dzvS2YoRx26PxdXyns9F2Rugf7CNC7Abj9zGZRAg4Sk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44YwRfhrsgFAh6Qj6oHdE1tkDWm5WdrNx2F9awL93SoxbnpgiTuKYnbHD1D5VD2uyiU6NNEnbk4bmrK9kTLhxjuW",
  "key1": "3vXBGrf2yf6zn7qnJxrybKjNFcDURXb3YgMNNfJrrDtzbP8quPsdUWAum411mfbVjep9x5SM8YjNkJ7s3RsV5As2",
  "key2": "5eyQp2cBXfXeHaE5nvESgc7UY1Beu76742dn9zNXXvyFMq77tT22uodjhZG9rUYqun7ibUcJ38ZS4dF9USNfDz79",
  "key3": "5R6fupwcoECrvPvuqHzxHHo4CZ2J8HjoY4trVFBPGu2YjdTPE3EeqPuCpNjc5VR1VtCg8BvcUspmCqgrqiJqnnSt",
  "key4": "5wHwgXeFkuGi8ztbgyhUNApAJRKPeNAUErBirgxeFn4TQDiSQhHTuse8nYgB5qNxympL2EHp8w3KWTTBo1xyopM1",
  "key5": "45co2HkPKKTrYv5k8PorKG7zhVEpAuzET8AtTZpAc9rNJDFcuh5AhKiqHpAbS9c3DGV6ofuT6WjyFveWt1QVTrqB",
  "key6": "5uzGbkEgWhzFmzMbvDSnJS9aucky8ih2Sc3MdNNwARc3hAf3rqhdDai3CHwr3AaRLh8tKj1aWhuARyt4k5tZSyCB",
  "key7": "5zuRsKg1y2FseZnQP2qZz9J1nAtKp1NfjYBJjbx1c2WJbyHCWBxKxZg4aTs811tkgZgUhKUoDQvWQJyg1zcQ8iUq",
  "key8": "4gWpH4DmbosyWTo8ecQ8ZuyxcFWNcQfMvWMdrM1mqcmNyuzTyGjTM3DEZ8pSPBPBmndsERPmRcoPc35ZTEgYmCZb",
  "key9": "4KXmwvpEodNv2RAaYXVRuxUrmm3doHpHxm7bNRjFiKQcP8cNwMUXuy7nYZDQnt1vQCn6bp6abMNJZb61GLEYDecV",
  "key10": "2AePNDTY5n3auV5CuMMT9BNR7EASk7wgX9T1xjADiHCmXGd5GXVmRnT9msrb8Xg62VgJd1AdkScAphC2bCiDQZ6X",
  "key11": "fvXvNGCBTn2oYeJjo7D2XLS16S3kkx8MwBZfY1c58XHdDZPa4Y6tUz5tTQNcBifJ2rXGjAL7aWu5S919U69xi9i",
  "key12": "415SuTUwEmsHXPK5ypUFhgejfKKpG3zoBMnZrTxntMq37zH6EFD8G1VM87ESKDWnth1pPGYE5iEg3WJCYEgC8sir",
  "key13": "3NXgsDZciN6WA6d1W4RFn1K87BFeo2HVkWqkCvfv974QR8YQJm3xcrgRy2VY6TmKrwPsYX3FLMipSWTw8GfpxWEf",
  "key14": "4kgdhz4YjpJw7BvQ8eRSQU7QKUYGRVJjMZnfwU9TBrB9zq7nM9254SjD4byV1RVRL2ejDaw42SRKX8FeBRfr7oM",
  "key15": "3FVDpebxYeCPbBHxEx2BiJsKRyrtVMibNitGxXKnsEWF3nyQpEJG1xoTtSwPH2Q7dUf996rjkx4qvoX9dF6ntZQZ",
  "key16": "466FZqPLbAyEwCda3nucBRT5FpPqYH7EzzJYLUHm71PsmGHYwSUjrzVQ1tsHtGgUuhwPwrVHNdE4YXZFWkPsAYK7",
  "key17": "4LbNAaJqYoAfcsGmZxmTKnckmHtryjSsZPkxEpyyg5zfs96dYK7nK1BE98jdbgA2pYFe8Qj6korxEZC6tG2wtpum",
  "key18": "fdsbuTMH8tbiUUfMLqXCzFpiAL35rTy3zTQA7ZJVVqtMUQoAdLo6f8VFtPV47zgm8AtwdMb5Y5iiphboHmfhFrn",
  "key19": "MnN9BYgXvypWnCLELoSsafNVxVZg7wiWdUPmKEsRJgE1UJQeDrUgGWqs31JtwGcvpkJvMdUBYXgEog5miZPe2Uc",
  "key20": "3PatgvNn21etH9iSV7q8PwwsPmQ9E7yXL3bxD4pDxTyUThfPgRoSsHtgLEaoLtNEdMdXaroJin2m1R17Ji34x1mJ",
  "key21": "TDCnGbHjRYTsQXSFyjU8DKN6wARLg6yamaJXAEwdz8rTdohrPRrSGkRnhvktPCfj7xkVGGCpKTZVeQocLSFJ7mP",
  "key22": "ZDVd9LgA9puL166chyi3X4zVwESqXcSVuuGTDaeabXLKJwd83vH1rbusJQFC3QvXawUhzj6qikbEnK87ba9STCq",
  "key23": "4GdRbmi164wJeK21RctvVB2q9cFX24QGFPYVZ4xufimxp9zHhfEMXNHQMEavcx4HYMB3ZVUzNbbwR6Z8UJYgRryk",
  "key24": "24iWYMW8ZsQJhkhzLDsQbG4njBmowgN8Ekv8gZTJ3XcAcY4HYqMUc9wQwztF2a3SeSdhzrwKCwcS1JgsCo3ApGkT",
  "key25": "2zraAwiyVZ4qvYw2WXA9dtN24fe9wqubqViZm2AhJFNMEfwU1SAKvWJT33cdi7ub7ViZArtu2UP65PTN3UGhsVU9",
  "key26": "56SgKBBrUP8NJ7PF6JdvkkDscdKmZ8vp6cVUwU1RzP3CyUFC27fxANMnPsuX3KJqH1Jcw8bWaH13kjSiFtPB4gr9",
  "key27": "aQ5Y1gd7cS76zDPRp9xMxvERqn97Ro23oYrb88PQMhHzTfSJVY95q1axudfqxLD23jAoWbG1Hsrk56m1Yg6NqQw",
  "key28": "s9NcqvL8GaK82vLMsVq4NtVpUEJrEHuBnTXx27iUAXYdznZ86JFTid5WYcswSL67Ruyd18Yi7q231GqK6S2xRQx",
  "key29": "4z68Uz8U1ZQtV1gCBPZc4vvHccxGS2NKdHSbH42YKVQjJkbrSowRpV8E43wAvqk8B21LqSSt5MkaBkwZJAMqkGGC",
  "key30": "3NJLVgwTwjV9C9gL5z1UrMQhqRQGm5aG1J51fnNP2vmzMySnV6o4uj5zNRZs3U4C4PMQukNvbECCnj1FkPM2aMHi",
  "key31": "2xQSTvLqvD2h91yRarfPq4MFpWBQQ5QRVs7gX2tKdgKccTt1jmWCMmX4kUzKhKzzJtqP7U74WokvjtjyjsovksN4",
  "key32": "XyqCTLVXMg6EarHcyU6DnapfM4kRACUZe9nPZF6gvFeH2y8Htrn2w289wuwsojJHCf6zw2CGehm4WKqscvAUY7R",
  "key33": "4YiVooXsxTWnbNiV4x692w34fwCQmHtAAonaBkLPsyYC8RRrrTWk1KurEjjuyngfRzaBbZBf2t5NwvRK83ofSwtv",
  "key34": "4XGnk78JZq38G8wcv2qerxfJmSpTMktV59hZ9quSnoXHnkkD8CZ61FGnNfwcqz5scfxAeWZJWmqy8AihN1hCc9f4",
  "key35": "TJtEMc9GUYVgfSx4BBXrrizeB8kkZhAcYTNPaA5vcXhkWz9euDmYDxkJt2HRLovXqPCT673pdMCfd7yPRkQrBJE",
  "key36": "4aReWi4joTQK3sdHEQ8uS2juUkx69umZEyZbtF2KoFVD313USzWPyVauswrM8utLLTaGYDbsLiTxz9kzpEyCrTuK",
  "key37": "4GFRuZCeGPNhEVzDNL2J8uYppTWZ8vT2rqVhfnfYL2mcnQbgxj8NdyDY9LtFSg2f1tAsDGHMGvN9jivsixP4WT4D",
  "key38": "6f9HdXgYwpD8Ti5XCQ1HBZ3P22avF42jL775TmU6564ekLKCDasS1rf9WZcicWcEGX6DhW57i4QvaMHFrTVQUeU",
  "key39": "2M5U69B1XY5PevbASKGBeCNRpmLGPi9X6nfUbBMHRNY1kbzkPiTvjQWYuv2Kch2TLyFX6Ar9DCkgPvzq8fKX6zvf",
  "key40": "3UZZSFSkLqAyDcSYQxidg4Rn4qu6fwM1WRDPJXL2cgSdhY3t6kZ9eiqwFdVeBNVyg7JxoXDhPrvPFA5vBvNaVAzu",
  "key41": "61gBbF1Ycrams7kLyeu8DNp67y5QwRKNqywFDkvvEPD4GJDMVR1cDbJwQ9WBDodggYwTWbi3pyUoSePBsPw9gFuv"
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
