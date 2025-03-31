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
    "2MAtqugfUpEJXfB2uvfLbC69PnQodjjfekC1beGGg1ri2PPiCSBjfthvBNfuvvMbW4iDVzMhK8BdEkALcUDFK5dJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTVKMbhxMgjsDbJzyZYTi2fxPorWfnntpgzW1cdoE5E6DoofxcVEoC6TziHNZ7uL7zvUfSy2CS2qJoXPZdDoHs7",
  "key1": "5kwKTkrgWcBPrxe1g6GRGZZkWV2eRm2ig6m3r9tywS3m6r5Mi15EZwvWM5rEAgrgVPvUZzwUpq2gRijGQks2HHsZ",
  "key2": "44rCnqXU5zJu1wAYuGScVK4okdWCCQHDZgUESLioSrRqswxmxPEDgpi3een4DM4tXzWKWph5mAR1SfTWwJjb6LtF",
  "key3": "2RRXhJsaQrKTYyBcvAcqn7gJKz5hsTagqqUPZTSkeogF3BFriJ1fkv5C2dRWp9stms5mC3pvPnFR7SirJNCVVtHA",
  "key4": "4LwEzYetPU9b3aU8kutbWDmhPTj9k9EbmtBD43N8J6UCrgyYyfxSpdanJEYje6Az7vJLNdPkxLdJr4h64ATb8tpH",
  "key5": "33WJ6CL92uPsnmiv7NF2Lp5N1gJVQe7J3Y6LLPYJxkpDe48ZExUQPYKD2HuE617Mv4Pzc2hZSCeveEz7ZonDS5mY",
  "key6": "5hYbgw3PwhdVmBgMkzx7E4F5NfUYngPFBi6XLMdeUz5qEav4mSQ9ReiMEynFm28FEDb2DUPESeevPBuLBNrovi2E",
  "key7": "5rchoRM1MzorLDi3sq9uEAMxCWHE9MRes5giJpwYVCGUQQx9ypVZZmFWbrFbREG3Em5zK7CxyfAzFykawGsGMMY3",
  "key8": "5jCHMbCryrLhaU4Pi98GA2baczr5Lu1TE8PF81pFPkrsNsm1rhxQGvUbkPPRnDuCKHPvWw8gNaC7ZMfZ7BWcFMEo",
  "key9": "2kcm2eit2wgUpNN2hhfqzYwQJPpidmm9BW2bUNDkwx9XNU2PhriJAge67LooonxeThjMBeR4vRgay4y1gdMpkZSJ",
  "key10": "57vGDL7PDu8RdBrFrpuPwSJhVStU1dgG8h8nTAFtMZnow9KEQBQ8ti8hPeiCkTxbzYWFhM2jnvhBzYPMNwhyPZvi",
  "key11": "3dX1R7awNBDT9x28dKPwALYVdnNSEZmgMYaRMVN1PNpb3cBS4x26UCBR9WUrSvbhhCoHttgBZSNWB9mcvSkKWobL",
  "key12": "4LY5D4qyQ5naP5iYDQL9BeZcxcbF9vYWRUnwzkWoX5G7hnMLhN344TMcLZhDQ6zQJYZNoSfyhZV5e8DmJK6MafHg",
  "key13": "3hUX4KkkyZkso8rCytkUSaZoASk6zHfQTcF7QEvWdJT9kC7rRWjJhkpmkadz9jUraWRj1fJNVi4MPKqnbuwacEPN",
  "key14": "5oMA2GW3auLZLDvz4F68prnGDRcCYh1KwWpu4wfxQvSCJVZRNqvX3iQ4bzso7PuT3GdKYPFbUqjTPNA6vTmb4Dh9",
  "key15": "5kbcUxRPKoLzt7mWBtsH83PVvpuJbbpsF4LtsW1nxBHqjDDyeBfj9wr98qym1y5xMQBX1jTzc5srwqJzXp1rPdKK",
  "key16": "5d5ZA6JvTbAb15nSXka9oTWrZsNUKdTp8pTykiYjCCqNNbKfshv476uAMLyDj17BUajq73RV9A2cugNmoJUVEt4s",
  "key17": "577oNsHNU39o3z73qcWTfEz2xp8dSgAHxktnyYLFEPZc1BGKPTStEkaBUBf1k3VM43jjtwn3GNvFxuJGmJYkZhTx",
  "key18": "ZbU2q8PZxgKXHAgWTszLJKeE73FaamoME8jJeRaC6wbdabu1yN1mcYQEALfWx4ws1VoaJkUD7RCZRPk2i9EAwmF",
  "key19": "4khAk3GFCKfE4qsNBCod3XatxwdKYMw34eBJfPE18C4FUcUgKhN6zLB3oeF1eo39hqULp64Q7smNc6dB7KvLBzG3",
  "key20": "3ZD6nYM6khyDhWzyLE5L84hUM2AsyNrfAiU58mfG9EM3qvv7mgwHi6eFgBLLWXe7AZvL3DjeZJEQbes1FRCPeRSC",
  "key21": "4W8kqPX3VKBpqFidG2rLyJQ4DEgZq3wm5epCJeQi6PUMFHnd4pyR5yX3F1faE5PvtxHxFJkJq3M2JaPcivhXszZG",
  "key22": "fNsYqKaDG9qjR4tRzJbfDvp3PQoFLAUb1DoU1xjDqTPprQEpFswdiiVhCHobXJ4uS6dFULd6pC1WvxQ64PmSHZq",
  "key23": "e5pvMmwG5xvtxbJqn7mKoid3nYcM19X7y3H4PdPhrGVbfqZLyM4ALjD1ka8xScMxTJPB2H2q53joTLxzRV8R7uS",
  "key24": "2asyFp9cDrFUTUKm78w3SLcrgtmyps7qptWRYheWMM5qje8KJxSFSrv3Dj8RGMFBQmJNqmY69smgKqLwGJNnG5Ls",
  "key25": "3WmsBnvXPsEgTrsFuRRrT99tTPhZjxEUmT5t9EcSfbsrkgFDcqMG8ojmb4ADhtotC4pZy5ddJepAgAQeJgJWrobp",
  "key26": "8NMUCrU5Dv8KphV7WudDJUa6aPQhpy5Kwfq2BdMnREDdqzRtdQGQQGbxswDyZX2VT36ncjr2Daw6cozVe2sikMq",
  "key27": "3B9XDYEXfoQbpgCeaypmxReQL6DnUZoGw9D3w2R6W4tzBsjPD9mrxj44w7K5SCKfKGysdtEfGQNJutxH6T3S25ZY",
  "key28": "MzYS6b5Q2m9nPVeNhyCCxXSxHZCz6UwYjSdkyhoW3xAgy64XqYNDyEfTNCbaF37T6Yq5RoXW4GHmtWsg88AMKZb",
  "key29": "35z5bHc75Hd3jDbu3n3i7AVxF2FT8XpXjBNnXri1JpKX5cN3uAuBGvMhV3bSe9tAoKowJ8bYV5jerPRkJV8JSaAd",
  "key30": "4tTCguA2qkWLU17Tc2sxnCjwn3CVfv423tx1H6K39UDZ7AW1FnrnwZz5mqXhWW27e2Efp4GHgqNDEcedxaP6oxv6",
  "key31": "5cgSPSLACWG5ZHhEW6UwGHCoUe66W9wQWfa7T72jd59tF1yPxYS7yuDsNWAWTuLs8uipVgDXxiaFBZTHKmG4jr8E",
  "key32": "4oebhjap9W7cPWiGMtr33hydemHRQRmwwYpBJFewFG8qQZWUxTcucQuNNyMrqkbUhYWmHa6yr9FgBm2UorDnwJPa",
  "key33": "2UjFoMnx4DPs7cHPwy4XPDwrLrvZgFuBWPpnP3TsMvKsp8ms9KhqvVq2hvyVq5ZsU6FxuMwvQyaWHp3X87aDykba",
  "key34": "22fXpXiugHz4MGoPCZdZASNe3mhpjmkxCpQ54TQg6m8J2iJwNivWcoR2Ub4if1KCFntUs1QYDtT1ToxYNEYk7cQu",
  "key35": "3QgP9XtzSos3gDkSdvRy2M9zKCGXPUPRJHJmEtytyF6H6DgZdqjYEyUtWoGsmR4q3BeieD4MH1Zi9j8Uo5BHKFTx",
  "key36": "2emkDzWHmvqGUVq9hLUPUYrD9w65gcdDjXLGrH78LndypoR18w75qXAt9hVJo8tsxm2drCTcs7iSNj9TkuJ5aygK",
  "key37": "4MRRTkVVL7Z4wKNUcA5V8ufKTPT4V7jdqPY9fH29nGpfeisDT4tkS42waY1tTinyyyJo6KTaNh3hVX9oUkGp2g6g"
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
