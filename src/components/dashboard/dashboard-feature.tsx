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
    "65S8SmHTm4pPwi5HtFW7uPhFLMUhdeXN25ZYvt5NoCfZeAmg8RhS47x3ucMpoccRmUH3UdXTXYfQqjUwB2G8kRfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "225fCgvByaNPtqyAw1ExQMDgMjQLh68aJdHE6kboL4fwWfhGZD6ZraPo5DM8djhTh93wvjEZJgzGNPfvTaiMSjvp",
  "key1": "5476HGeWfXPRXXv9KufK2nJwF3hKgXBgtwHTjb7Ajcr7xYgE9qW8JCtdjsaCfV7h2eRn2fzbncoqdNYLn1GsTxoL",
  "key2": "3QS8BM6usQXfa7sjpVADbphxvZe6LCfjdQySND24zqmoHjXcWyT1m4aHKp8eeEvzsnqqrvQZp4WN7wz52UhfWxpb",
  "key3": "ydrWXMiyxTPr6yZahEBFvD3JAY1SwQdDiteCi1YTm9XnYnbSPVrYY99D5EHVegrzNfAotXXrmTvZM32dvwcsdSD",
  "key4": "suef9Eetg3ZnhDfDKbvsgsAzmX61FXRmLPn9BpRLBvQf52GeT2Th2Ctsjjx8HYJ8UnhyercPStjAwPbawpC6t7b",
  "key5": "2bzGesPz9ujdV5HN7mNTRFWnfkd9vRst1MyDbhKBsJutLEuQhLpCTBbkiUqY4XuA3zaCDj6Q1h1JJAJp8C1nDwe4",
  "key6": "2a72MPMoNZMRT4p5Go9jMGzNXG7Y4bEvbacDXErDH4YQXhJXbwwBoosaQwj1MQr4FoyYAyXUrz9DqjbJDXijS8zc",
  "key7": "2baLrZi82NHUmWSYhq7XrST1w1PZG3mtrL24u7AHvapoRxyEaCp44GE5bkDx9k1i7RrfVexe2iqjABfk9ybYkP7w",
  "key8": "HyzwHdBdDhheZkKKExMxWyfA2gntv7WWL9GascXX7B5KiGHVkTpqjWp3im3sspP4PJD5q4Qp3j6HghX1te375QP",
  "key9": "q36RJrkkbHwPDCSU6YWzvKK1SKiXQAoYpdSnmLfMtN8hhvNaQ7RHr3aCPeF3HBXj4FYNtKm55v7GkGJWy7eejaZ",
  "key10": "2DHz9oLUgszebdpEWfDSrNGvYz2mPDFDCqRX6n7SNwfuoQs3LW3uDZmMk13QbM5UeGk3kFJ2MQvgqx9W33p7D7H5",
  "key11": "35P9SQTeuBVPZv5ELk52zSRTbTkPYt5BUR2HJDvvVFEp1BmD58PvsnBBwJa1YA4bUQq7Y8s3FnXaSHRK8X6Rryxs",
  "key12": "3nmEyJjmLefEZqXaSg7mFzj8bBa7DeEzLGFEQQEWZNMLBkRoUqETxgke8Kr4vGp32w1CHzSuUqycJJ5jESi941Nh",
  "key13": "3oSPypoFFWCLrFnmx6JWxSwUG7mc6Lm54uzatvP6W2KPZsMxZDZ8MUGU3aAyTfkekE9KNqoZWXqyd1v4CAQcHF3E",
  "key14": "RFmYQ3GN3EzxVZbWgUWtBPHgRzu7mF5rc52ERcZ5i25GSxtQCvawNuNtt7AVtEfCm6Rw4JbgzQFAV3wGb3Zh2cw",
  "key15": "2WY5gTjU491bKshtRZEaedqZ4VfBHjEN7iKLZWDxCppYFKkgKaSSHzWBKJw2fMikzyKiXwv9hktLKeF8NfLmdfXp",
  "key16": "KXvFa4tUpKFJKEKaRFb8oFSWp8XWCeG75M6rtfEHLjVPM2BrjrNnyQ3jzbG4sF4J2A9X42Dkaoq1ComHAWetMU2",
  "key17": "B5utDdCnyjGda17MbNaxdwSpo97NTYobuTjY16F6BBCXZkm7fA3mUH3enoC4k1rACsWweyoJPkdrwCnYAYAKR7d",
  "key18": "2StL86wrtQP4MGLBJX9zEx6XvwqUVq9njHYRY1kv9H3QBtDK8XJDNd4MAdBU54cDU45rKhA6TqEB1jYM6B6rpwb4",
  "key19": "aX9UmxLpMEekVQwr3j8V8yBvcaf4tRxAiHY5Mm3fG2MLFTVdbJuRC9ETgG69F43UWTgez8zfRMAgy1PvMbzBvdz",
  "key20": "49hnxFoZm9aV4wKyMiv876stZ3UXhWFPcUyn6q3PzrZ6okN6Z2mjzPyF985DRjZNPgGiTg9VNbUXcHcq3BRmSYno",
  "key21": "3wsK1AmUkQDYZgXp4yAJjTte3uUF4wRGcBPhd5Rhdb1G6ZWyNbb6UBrmkRb6cD86ENQvwrTDzERW18zDFZtCW1at",
  "key22": "6fWbzBhrXrjofpkuYiXoEz7mdX3TfvfNmeGkvt13xZM3eR76JroE4GAQQkapWGzYXUfrTyad2PWL9uMCAwMLX1V",
  "key23": "5ALTKH7AAbzuPru7RbvuFnce3SxnmxM8f35sfusBhmGdbECdz1rC6ubDRNV6vsygaPQ8aQ2nfeUhdqMbQDgznHZQ",
  "key24": "2WV1fYU5Qz9YYE4mqtEqwBbuoDT8MankTBypARFS4wtoVkbCUSWKTUF4rZbRQUojJJKjFSXpkb72mzXF7DfqdiJM",
  "key25": "5hoyaas4YM7N2JqcdaMcn7jpX6wpNCVpEdsewfJ25dD4imsJFntXThXkMSofMhhy2b9GMb2ZkUeZX7Qo2BdMTvMz",
  "key26": "5kCnFjSepBVX8b55kAty6GGJRbT8t4v4KEpARkt3jwm2VrX8WPcLzr5zPMwjHrxtKrtcLwUppFw1svdk4SVbf7jV",
  "key27": "32FKMqvh19awkXcSn6oHBhhXDjjW8LzL11zoqSWZaGcSHS4g5wERT5uKdcDnkESXnt2r8DKirZe45fxBQK2TuG5q",
  "key28": "vQuG5M7jTyNpxhLcwsa1BnQCw1BtyZvtAj2DCvgn2QTHgCLTWc8vZzfVvt8cm9fjcc8QgZ2d9gDae1yknokoNUv",
  "key29": "3ondV94ctD5qoTzw3ca6ga3DqcHiY3c22x5iJKhaQLpbvzAnEzdDqfhKjDUmbdpCDihrWsBKi1UxY5g4CbAh6kZp",
  "key30": "5hsTEUCEAfspfnbhBo3ezPufgPLVGGVszdJUnfkQ2nmz43xuNr1KVTy3SzfB55E24q76D8fBz2dd8HnwmvgC1E5y",
  "key31": "2jqr44DitLN8beA5bqMQfmHoTzjQg2KHjmFwSqxnhJ168dH1LMh62DS2KFg8Su3RLSmEmMW7uwdSR5fHynxzSYUv",
  "key32": "3Uw8zskRkP3B4SjHu34Cz2E8rGWiNmsJcEAgPUHv13fACa3wYyC4BjnZMqRyAvpEYsqfZJBYEtkrFvsGN5L6fRzS",
  "key33": "58f4gFjDkMjTXjb8vMgcc2qGZsJynwZd9xeNMe2sBHMU2T4wcz3TZyn3pw1GBcRxzKQe4G6F7uGTQ7KdsdpRjDjN",
  "key34": "2RDLxeNNsFfosVRMCBME2tVEXKsSax8aD3Lye71WfqwDm5Vp7pR6UEXMZEjwj2fK5udzuaKwcuvS8QeoWubXVNSW",
  "key35": "3C625cRAwhzsZ2XAxCpgHxCQNczUNhcRRLqap7iESWQpowLADnqvBnct5GXfyQfXBWncRP4kSwdUtE1EwuYRhn8p"
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
