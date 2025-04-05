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
    "3wseiu2MhqXwBr3UpDxc54wKZLhN7zD1zN4gRG8QnHFa5x9dpMpCbpTJPf9KWdBEYJEBJ8MPyvgSBd4rbptXkq8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65M51V5mEV5Gwt6UJGTHqGVY19AkKX5y41iqTGGHo3NSpqa3MLbvitiqGRfcgvd3vtRWdEwcHjjiFBbQzWjsTddo",
  "key1": "344iRVwW88tuqBjMfKhRKnGLgVfTrq4tVWHgw4zEXXU3y7jht7tS4RqpqZYRPYTq2NExds4WK1ucSEzdWRPRoYQ5",
  "key2": "3hy2NT6BZ445Loj3cYB3PdCLKdrAPj5merGrB61RSfP5tybzSwMCbbfz9MhTC7gno1QqBCZHK3fRGZ8W3xCHHQPG",
  "key3": "5hbFwAjJBxey968eyfNFQDmcwQRkC9PK7nvsQYLUPUPPrvE7Chp4iuYwht4UTJK553BZdBrRDU6oENvug55rXvk3",
  "key4": "3iKUNfs9WQnL6rB9xQwrsVuiGoTZ9XwVhLwCrwZCbwgzY8xddXuV9DNYdJZALAW2BJX5dHPibnMAwYN5m1N2GBXu",
  "key5": "31AegwwovLDiDkMdMfCgJhph1LyUMwMo4a5WEsMK4zjoHUkGSTEaHi5ELKTVzHsuobPhdQ98J4sycrqMA4FeiQjC",
  "key6": "34FeKfggqq6Xni2WvF7YrYbXbeDU6xHtND7nKcsmG52rrU1toP935q6sR8mryCdL2sBoE8HTvMxpkm5KrNMPNyCA",
  "key7": "eAtyCqU1UsYSTnAw3hzxBtV64PAnQWBZBWwKBzfrZyCFTaUFQxx7MfQHgStzjNhuKPPZCrKEm2HmbNtqF3BvvoA",
  "key8": "3QWGj7wqCH3KB1vsS62yTjBcFAJpv3gLR9f1PEgnpiD66QSKkz46WS3tfvp9gqpRFeUNFhGqQS5PNDaFUnD3eUCr",
  "key9": "5nFpKGM82pacAwxYancakxrFXRHPQBD8XQkA5mHUqCD6tR3v7nZoq2oH8TWQsFp58NUayj1BsWU8GpVimg76tD9m",
  "key10": "3xKT86mqqiXhWuqySVS3Tr6e9ou5yoNLeagRhacqmftoNBAvPBu7hBaJNoqy2hVYzgnrUuumHoi1rwKuUSPwBLkW",
  "key11": "3E55kb6VDD2zGX4Nt2dbbq4gtXYjRxvQyk7sxKZt2VL2vwYwYF3x8RDUy4XBvuNSHgssVXJ3hHu1mJ6hjSmfxhmT",
  "key12": "4KTz1fwJAwixkz19dgGT3GHgyXPnuBiqFjKZq7iVucPbt6h8YaQd89u3TwfDPTTkCmscFHmaRRRAY8hNuBYicnhn",
  "key13": "m3vewaqkY6M419gqkjv3Yc92ogT4H3rz4Wi63pg2jrXfZPhWPrDMDN9KevjUmeFKRtPGBooZbXsiBxd3bFotCUi",
  "key14": "wQ7m2rStm28Q4wxu2KbTgMaXVXZr5aTgngtiEvTU2zWY9g2jDXZYGQMu5TphUThtsf24dGceiVGqj3a8PtBS3Tv",
  "key15": "29FU1t82YzZHTwb6dCVoP6H82ii1z7JCu3yDFaBcCSKmwJAkPHaC1r7NrUsi7u9soHdBycffA5VyUcJMJZksNyjT",
  "key16": "51naMPANfb8d5Gr7Kh9sDfeGMtYXDvxtj4YJqRmYipRrD1TciK3b3yTQfatv6hMHLdHPFoFi9C6ZFJ53es1vFJbz",
  "key17": "2BMGAChYZEepax84s1hx3cFkaFcRoFh2CM5JQ3fYZpBVGw83dAm4a6KDhLETTwyqLd1HyywM3M592DpBUCoLNKrj",
  "key18": "4yBaTBkfHbX6egBMCtdjF4NYetEBK6HekrUNeA7XFStAHN8W64nHg2zUTJUnDm9xvX1ixSzAXcUsYRwisTUp8nka",
  "key19": "3qEfNx1AYdP1uvzfDXkPnCGAwuosVWpuc1Q5TiVNKbwTU8hSjy8UNeG3v35ehMx566SzXT7Ur2KqEDYMEVKYTBHD",
  "key20": "2Aj5zwMU2AGoNYxgEzGgUTqufjFUszEdkC8FMSEGtkmDDfriQXJ8P4pDLEDK9dioPicq2sSHVsx6FNoTkbftEvQh",
  "key21": "1aRoAhw8Qw6B9SJL4HLszf57X16F5pCGpK1KDewMJ5zyXjkoVbj4gQFWDtBg8Lo8TazfGH5FEehBLoXhKoDfZ8L",
  "key22": "3ZbLHbGm1Yp8YY3ocMcgvyB88bwBzTtENEU7hq54azoRv9MS7siGSPR998Jw4P7wirYzXgrrnf9SoBtMjaoLVMKe",
  "key23": "5hr8Fs7So553vekt8aHyqmeacHVjFiUbqsttm6Mvaq3unEYQRpkUsH2ktPNu1y1w4TuWcBcLW4HGPavG5F2u2Ln3",
  "key24": "5mW6AehmYoWauyydqWhC1oeERmDEhzR3NcsokwZ9PKbS1VuZnQadsDgiZuZKo92vtcR9Qh3PYTo4Nk6YtQmUQQ3Z",
  "key25": "5Hc2rn2bZ7Xum81F1tb5CUTzFkmsYNYgHbeb2TDVKegujrpwZz92fXLGxBcWJzsAmFjqcgrrFXNtYpyEZEyeSx22",
  "key26": "4e4An7sG7ve43AVdHXNHXdJ54sjK8mptvFQhCnuBM5gRgqZaTzbkJvbmfSxJc6BRuwLgFAyQGsFDtoLKXjfmNJ3E",
  "key27": "4gG8wR8Mew8YYo6UWzbLDedQr9i8BWqpErz9HimB7LPMam1PWzZQJYt8iMuVcypC9DLwq3SdY4PfBJa3PAXUyELn",
  "key28": "4PKzDUYBcYjq6ipeb5N1ZGLk6oDoAfth7M3QGjfwoiBfZrkrY5YUnbPaZ1SneuYfcBHGpgsexrjUSzubJHNGyvCX",
  "key29": "5nEhZaH9cpfVBTctQ4ZYB7GHD1xFntsgZYUuyaKGPsXEF6LQVAbNRrz6gHcXozemvhGcooLtPfQbGoWVemiuy3ik"
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
