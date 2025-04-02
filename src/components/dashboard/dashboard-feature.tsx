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
    "5THAdguBgizKbeU6t42MKpsjbUr3Uz8xZCFxvRdWwVGqJ8anMDkNzGSQj2rJWyxnUL9M7GgZSFV2Aia4xZENmyb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KXtWHaUuhiD4YCv2bfpxDNHGhdGWPfcKUgZGgoGgQSQrpwgnbxLgWonvBKjjuueF1R9xxezdgBGjx8ySUkfUTZs",
  "key1": "485LRVasUaYZ3HwzHXXtJnXXBYeTBYLLdPTJYYowwj5nPHH76GAAYK6pFtzowFmtLUSX57QMC43H73yFYMoDx3zP",
  "key2": "scWaZozdRVviYgXjkXtQuvMnVS15dhZgAquQmHFMPCpmFKULupXHGNW9CrVuzEX8oB4LyRRQCDzd19vEgGq7vG8",
  "key3": "V24dCihuD7urYqFVX7DS8wrY4fEArYYA8RVczFdEV58mw4nYyFVJmpdSsLGJekTJzjPmbxZBoSzamcry4GxS59X",
  "key4": "DqGjXYwvuB35BWRhhhoj4jzQyTDexSZ5iiYqDspKeL4m5wGfo8bP5fzHUnm1FNyPgSaRTWSiA3uzqsaxY4KsnUX",
  "key5": "5gjAa692xK6kNyPtQ894Ru29FPyZ82ZphMNdukPDfY8L8gisSxafT9drxAHXt5o1M6HqZGqRL9w1LWVtkaW5YMdH",
  "key6": "2pfqaQxw1eChYac7iSpZYQEthpddrJfwBJ7Y5JeCoBjtgoALU6P1jTnQcts3Hr28EWrJ115apGHPL6u9dvr3Yqsc",
  "key7": "4pkWxZLBTF7rRivrxdykvVB93nRYgkKcFMQ7gq1jLSQTrYhhzLy947ugqFvKytLDSkvZ7iaNrXRfTAA4L4CqqnYL",
  "key8": "CiZ2oKXr1z6yBKMkAjCFWiNeks38FXk1pvaCfdHkMeDzMCpayC9rYgnttEwJFs8BZWpRsdFpBCsf2Bfzg9uqzP6",
  "key9": "2Fio7meGqkurEKJNk2GMpJyov4uFC4WfWg4VhtpfH4bw9EjheN9MykPi9pNSzY9qZNGfrKgLhgYPUTseSKR45DCe",
  "key10": "LfQYFkYxK5VzkxEVR7JNnheJ9yswUGvEvzbmxiEzXUGzxQLAhkRsWYmFSBm8qprUCCktwNMgVCY7NM13aVy2ZKG",
  "key11": "5dFuYrTgqEtd5ST1fYhb5Zc25f9omMqHh6xKzYYd8qL1WDa6spmqUnQzkKzR7mFjZ8skpjdDKzUdyjCvGd1HaR6G",
  "key12": "3zt6ieazP86H5CotZsZQz33U6B5PiH49KLCYmCTbLDS9m4xW9niFwQY2Q2ujzESgXvcFcstE2THbMhBjfMJ2ECJy",
  "key13": "5LCPL7egFGtYbGb23M5rZuobYT1xjxrs5osB3PSuPTA6a2MFhRF6hPeaDTTX46pU1r2Gvrv5vyLuuUj75Qu5Famh",
  "key14": "4KUgE7eG2uiwbsH9EKXrdmoqpVkyMcdVTRFe2suSEvbvPwebXt8WCNVLDA4R5nn3PLMTmZGc5c9ftHgPBGZ9K39h",
  "key15": "6363SrbzKfjuWAvEuAwpxvQUsQugt1eL1cRhMwcftr8UPdVs1xFN4ac3rMKLmZ91miAgKouq5Nc3tS2vifik4vGk",
  "key16": "54bVJZ4Rob4ijVSntsbdUsDwmZv2cpwArwevvqw7JpEgUAyiBDx9JjM1dShFeSqfGhWKwUdYxNS2N2jmjJKtm53J",
  "key17": "eyeZS8ef3dQt3e5GJVpCKb6ev5KQg8fzpk6aqYAJZryJfT6Rj5iF8t1qUjyp4Brq6FFnekxCL6JsdoRMXSaE4ht",
  "key18": "5jkV9vFmV6Qd85UJ9f7Jw7mPsmLxaNxkKEmBVc1XePnGKE6HYxU4pdMWuoD18Xy9rqZ1iYNPz6NHrjarKiRPSSdD",
  "key19": "3mZE4PLT88Rzxz78JNB1Ar9fPbDDPHbKQ5W8rfxRgfqJWemHN9BRXVRYuPqyTpZxrjLCV3dhPyKoQyp9CD86tfqo",
  "key20": "5aNeqFtJMR4hcG5awD79WhEjrh3ZxUmH9jtYjTnPHqEpEsW7CAZ3MSR4WhHg7w8pW18gVqAsGPKfYmoKLQHSMoJJ",
  "key21": "3PrWpQqxezcxrPLM1opdnoY3mxpv1VRkKFqvRaPhbvfZST589pUgY6m1Z2crYDEhAdbT6NmKBPTRUxsH76w7B5TH",
  "key22": "22R2Grxv5keG8Q5xQdRrnJNK2n9iMJraLet5gEPJ1A4YiBCmn42m4tuAqWpj7xgBk1ypx2gdG9GSbkuLHxH2XPyH",
  "key23": "5T6RyC5mDYQBjTa652VX9dvFLp963ZKaSSeNjWg3ZUoC1wNKMc6eU93G2vQTV1Wcsrq2mN5JkjLCh3L1FWHudx9U",
  "key24": "5sGzvFvkg7YwzvUrHkAjSGkhtWZtmhdn7ztWfeaxyaVHgYJAiQKNWYSsL73V8b6aWHdtWRkv82tW9JyWD3wb2RLk",
  "key25": "3BcKwx3bUDi2cF428rEVMZR5J6uwmRDVeE1AsVRBeg8Y4NqufnqK75EKxbPMZst3vifdo46h1vu25Vvx3LAJaUfi",
  "key26": "44A39bFx88MHhb44JLoUm8Hdb9zu5qvYbuu7LSu9kBJi8BY2J8zvekCwAPXrGEJbC8RBeXYzkDMifD5J419c7uDS",
  "key27": "29hSHXv6jgQUMvTY2muJXRtRW7Ku39hj9Qo9Kw8qXqWdL8aLe3NicvW6GLvsg3HmpUuE4Y95dAYJcho3WDBNynzZ",
  "key28": "ATpUHNraibeZErfJLPVxGrRG7Q2WyqcaCJ77uvEDMrwpeUYVf7bdeMm1qFxQxfzar8hyCJasuDCSXxbENoXmRqp",
  "key29": "zap59z1N2Ux6CrFn2kJQTEQb3i9he1XCH6uPCuRppztoCvjVpz3bRfUrY5kwUYgV5ohrtxgokXcURdJxa5Stmya",
  "key30": "5SbvyPUCUNeqHavzkxGLUQsQB45uipG5TTLt6WonBriPZqk2p2Pfsr75Vkvx1J6j2c8b7cSRJR8uFzpLfhG3fxeQ",
  "key31": "5urazAHrDaWMQoPs4N8UEwMhHJx3Tq7k6u8kW5a2m4bMnQwK7KjTDua1NgJZUEuJ1YgVCmetevNobGk1aBH5364W",
  "key32": "3p4oTKGrR9ydgUscG3MsZYMt3kqn4EkGDMKzrmfoTfPitSRj3f27qcGkDiFhT6ymxKjkuiRA9WMNzqat5b6hBzfm"
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
