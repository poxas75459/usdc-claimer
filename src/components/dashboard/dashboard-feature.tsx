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
    "3wpTm7EHw3EecqWNYGWcwpS3GrDAQ5V5nKxrn5MPtRACFkTCKNkRZZ6ZniXHUEfmTSc2DE5Ce636f42ck95QecSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHzstTffHPV3zmUxFtQKWuKkvQcoG6W98fSimkgXJVMiVnbE6sVvJT3bHWvcMTanhXZeVmGpCxn83spkJpNAC5p",
  "key1": "5wp6UJpx2dkGvETbx8JLnB3BUX4N914GzveM1E8CLJvH1HFqcTwp6SigLA19vZ6XPR9S6FkyXvxfgMEDjUXtixif",
  "key2": "2iLxdRNf2rQmKT8SFakLYQPZ2fQhFTV2eppkjVFC2tJXaxQRApjeLx3p8t6JfxnD46Z1YKjrrRnVSxmgrRqm3MYW",
  "key3": "3aEA69su149oxdGqvfL1rwDqN3vLT3YrvwZoNFUFjhVAb5PnnDtJfhUrSqvuznBnMHoPQaLvJabKmD8H9VKnVdZZ",
  "key4": "yETrMaCHZ8pxwaSUhD7AWunxpB8RK9p2Rc2ysycFe29APnCRQ6YzrAjzQpeSy69AHUUXLvopTArkLA9WVBtDQ6i",
  "key5": "2DbPChJXitvUaUr5ZtZf9mndeWp8Hv9K4e4umc5VDGh7ZqupRdXUzXqiyznLDf3y953vZyQAMgG4iHTSRmcoaE7G",
  "key6": "5fXVPge8zcwaZQALiwGXGUKBn212TZ9dpKCFCL9S4chz65cPY4G648JjjKuwnYK5bvjpay5FcG8Fii6FZNemJTje",
  "key7": "anqHLk9QaTui8sbAeKYoipZSZqToFaakbmxicfRB489pocexarfkYWRpdNeNJwm3Rovx88RdzZk1jXdMthSeBhQ",
  "key8": "4xbJf9tEBV8q38ukdkcuuc738NZbPQvY4TbBnrB1zFb7B7N2Ara4TVC3aP4EinB312AEnSPCJyyJr8ayR9wJaYxg",
  "key9": "5n5Y7ZYTLHcry78gjxAT1AvnHY8fxFHFHfPbctRPrbnJ9wyXKsie86WXc5Q37RurQBrmcHUNCzYTcnTgySHUnqHw",
  "key10": "4VBJgaM4fwoVUMuedpEQhmJhZm1K1KvMvX3VFyBE9K2Cppq4gC7sZkwTFLMnGTV7SYn2WTcMsHvJyV2rtYwqR9Xs",
  "key11": "FPnjVx2vTwNYyceFyW3MFJD76FFvS4FyGTJadaeiJjvP9wd1dBGc96GhEZpRcrWoKzifa51VGaJ4GcpypHZmqTh",
  "key12": "9Z7WRGZRSsDir5N5xHXDeXBEXcj8xDoXpZmWqLK32gj5NH1Twgq3QhnS6v9zFkkK6YtE6D6YXBtmddMGewj9soQ",
  "key13": "3PqMhawHL8Wuh2CbtytniiB3q1hKDt3Ci5V8Xzvk3ZjkVuYVjb78Myr3V4Z32bYTXLgARMcjhWJqT8rJRbKiJtkn",
  "key14": "2qTj3QHZCEoezivkLoeoCcc6W2Y3BPDYt8DXb99sFrYBu64BFkUQuEgDgdwqXNUUkAcwTvGihq5Q7T7zyAed4sNV",
  "key15": "4BZVsQAwSrn6kK5YC3K1AnUUWXWKc4qeRDeHwNhkHZJ9KLkCnccer9d46yrTSg28b84DYazMTPkTRndHTNmsJeJe",
  "key16": "5zky2SDBYRjgds3iHHBEMhC9krKTw8EkncdLiY2iDWHRMqNLHMye5E4NNWBwNG7gpLnsXbJJajrFiaXBZPU9YmtU",
  "key17": "3w8VgCgj8XzDM9ftdTChTV47Vmva1XoKUBbpe4cxyoSgcntsDJNcCtU2LyWpkV8k9nZqRyUAr7XJG5roia5racXv",
  "key18": "3tTgGkLLdXt6bQpKZyGnDBMFgs1hQPF6iAA71SfgpoTHbniGwvXKYZXKWH8b38QMZFVQtgqsyEp9dWLskjkLmF19",
  "key19": "4scsFUNk4b74whP3Nh9jX6xNBqZvrTBdash142mPa1meqiQduS8cnVE423as3pUSdSfcBKN8RCNPt7jmK915AeW4",
  "key20": "KCjvU8BKM3hY6MikyPDcrVV6tCVP2CRAWUG9S4B6DuCNFsRSp24XVTBehWZNtnnqECHEc7xxuutnZVmNkbmdQTn",
  "key21": "5YKo33yVkhyUVZMyMdMGAmeFahndRRWs45nrRv39ckt5KWWtMmHkfXTvXQMkXDaihvWRpKteRVJPhTs1vKpcxvbc",
  "key22": "5ZQXcdHdQs51VatNESdHe8D1EZNbfBbdfU4ymufQBpe5FKqvr7wYWV4zoTHmo7i38GXUWeThjAL74stJB1qmUd8y",
  "key23": "ULf9aXTw8cD6A5B3s7GGivvzJy479az1dRdETgT1kbkQawPJpDeWaq92StEZLG5HUNHqz3Ea9PfPCj6hsDebqJE",
  "key24": "QRgWDKfWYLMeaHMfsNh8LrKje6YR8MpGsaNT9ypwraXYuxXuyrgBe7LrBRcVxpQXBFepwW8g2aZdvSEPmuXTobK"
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
