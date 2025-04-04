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
    "4GupvBcN38XmYYXwS7suBj9ZQ7A5cRVPua9eGFPMHLstJxjmGguvyVKwAFvHtMzDfdWv3znKnygvX1QYkgYh2SNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RbFLWjNcWoin3z6RM8zvJDaLxBcbDWjSaWs5QBVhw83L74w5hLrEpkCcrDuRnQEJSafMgTSWA49DZvqfrJTpzCx",
  "key1": "4cMbb2S9gpCUuzFewxmVtFSi8HoR3yoB8a4QqvrCo4GzYnk1fqzrQgbs33SJ1Uz9ibaP8gUpwGgHg4BahkrfZGRX",
  "key2": "4LuCk5YWzuhN6EST64bwXSdorn2rdotX5A59ibLBAiM5bzALFHwPhKXiLU2J44ZbPWm6HheXyTWFxTEPoKJSPcmn",
  "key3": "2cZsCnZP3ECEjastprd8VbpupBJSargSRnEgpBqtYsEENFXKtx9ZvLb4kbwXKD8G7NMxVwRdcPNUngMftAYBZ94t",
  "key4": "4hSjsQniLGVTNqRUvkVTgzEdwrEGyBbHJnkKZp6KNv8CRiR77KYYvYmoN27mtRQxCh71bPDxrkZ46gRofHEeCemu",
  "key5": "4fHxUpka9EPFeMj1pqYSS5mTW34hV5CHqYGv2Prk1QDaK7dZiKjSdXUTUQop83sm2QbhyfvNuz1gmZcscPAUsxWK",
  "key6": "4LL5Ptpa1cq6NSBPpQHq1qHctbAtEJpyYqRoQiytSf2GNdNNrmHNeJenocncn5yrHUM5tC7QdpGgq3cjDyK6g5Np",
  "key7": "2efLH7AgvRHDRHHkSvVsSZXfvV9qearczt7GnXr8EiQBPpfye3wGJQRHE2wPTcioSTngpWyzbVthor4EWkvyuFFY",
  "key8": "4cQ2CUovxsHfuk8nG4hj16hCasNZNeQarRGEVK24iEbtsTfF8rqEzrobZwmyA15NL7RPg2hqFw5dQ7CDUm5zHZo8",
  "key9": "28dnLpKDDK7oQBMPHRvWrKGiAi6qovTP2ceZewzvym3BrGW4CvQfHkQh9e4j9Psc4umh7Vv7BNy3vFA79nDiLWSF",
  "key10": "3iGmRYSH8UhPPh9ZxB1Fq5hk3vyw6NaxkkJiQ4JhZ1aVDdetMCaY9tkvGuqK6zohGEBgfqA3LNtVBBfLz78gzt7f",
  "key11": "BCCy7KTV5LhboDkMcCbQhoocRQLcqnHXqRUZ5XXiEPmbEwPH1TCbGv6ZUKVpAsTMGY2Rnpvnxwr8pwZ6ZWXTXvz",
  "key12": "5bJHLkvPXPPvG3jNBs1wJcWAjcFJzoZSUgEZ1wwkTErhyZCbNP1KegVyqmkEZhTs42wLJJ8N6Emux8jiZWfjSqdG",
  "key13": "5G11zkzBnLMhD5HwyNdLtc2S6tVkYZ2wtbtFcSL5unzt5kdPz1wVgAKKGXuqseMfJ9CnYAkE9E6839RecJjFLP4v",
  "key14": "3Jw25PRodUA7AiocaEgpyxQUnDfo11FPdY9abXTGbmPifGRWc6y6AqXAJBqaAQpmmXiLxZmwSLJuoKhYWjZYuVhS",
  "key15": "5XSbCsmjX4uABEebXLUkBPqtBhbGMxUDAnaWhUUZjWovrJxNbwEZpgoN68dXotAJ9e5yepp5uT2MhiHe6ihnd1bS",
  "key16": "4P7F1hNjhhJFinM1kDuusKBkpe8WbK9DvWLXkBPbNAzhV4CrR3Jxazd4rE6tL18auSyDAR6YJ4dcvjRFJgWmhSS8",
  "key17": "24fE6S1enJmjM6L3H6q1P9C4w13JxfLNSzDEm3gY3wVVUPYzZnmoCdow2ugvuJVQQtN9R3jL7aAw6PDd9JZDYBcK",
  "key18": "3hzXvqPx7jt6JfuriFUSkAYZLSfuCcSaCpuvg1D3B4NGZBw1Wd6bApbxJfCmVgG4dzZf8ZXm4fk1E3d4fi1QtthT",
  "key19": "5WrdizRKTmU4CPH6Hjeh5MRUdNhWPmTVnR36zum2WL3u5E2VJSATcMSUxAF5H8DTEpG1fa9iHzjWDBe5JMJbepdn",
  "key20": "5aAdTMiaA3b8EVuzMFFhjmV9BmAXqLnYiVJHcKi7QRv15BbPu1q5s4WNkswyfx3wivST45QXmPQuFkJgNg3mkX4R",
  "key21": "5un5WzsdVYGuCSxTzKWvaFy28ossSbZ9qrSEjPhK2YjBUBA3ynzuczivEC7xScLnXbvby1hfB332sy3K2TuvBahx",
  "key22": "5BtL3MPFbxsYwCnR873UeRD5ePEsruhCqAgmvowEesVqiD33DwTrn6J8mxVMua2tLwuLxc6MWRg8EZfJPD5X855v",
  "key23": "4K4J8gU4orRUMdPBQWdq2sMGMjma9uUh2sT58yCRRZoTkP7ycRj2ugKTV6obn3uZXZRBP8YSZ4qhq7Yw9BTvRHVU",
  "key24": "2DZa6jtrewn5cqUXwAv2tmYiQ88KHM5N73WJkmbE8whQu2jzmnox2Ax12nPZfpRSDsg3CNSUu1d5FraeDHKE9u5r",
  "key25": "4k7kCLczYe7P8yKZgDbaHKoND644NwxJ4rUMDSnBrKAwY5YfazpqrTQgmeJ8sDynpUvhBRZRmQPAfYD2obEAKxf3",
  "key26": "2tGs2nLMfwiau41uT8tFN7TKMxsxV4xwb2BYdgRDvvYGL5Fhxn2gVsagMK3CvinbBajdwaNrttBVt7MCqUgeNGq6",
  "key27": "3Z9bqrUwRRaXVwzafbR62bhyGKBXneRj27Fakj9FHc3eEJNgcECfRDoG4Pmw8gKxxPqpq2mCWDDxKejdDbqwhApF",
  "key28": "22yKGYknbuQRjBZiY4WodPTXK3e2Fp62WuyQeEoDFJJjnYnE59kfuWad4iT7UQqfy61kn4qtbZkX8ih9vimX4sb3"
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
