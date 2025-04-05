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
    "JpQTZD24J3U6oF254Wp8U7UQdefb15JHHvL1nYqd9bYFqyFGLBNRPhR583vdcKRvvm4ZskepcaLs7iKtrQUP4gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DrLzsYunzscHt8JJDaDyXAoEQeVPYpixXjrorDroeMR1T8KvgCrVEhwMkZzRoDF7LwAEPaaEck6XFEgu61GBVy",
  "key1": "64fVJCXDuoUfbcEUbCz2zZsTwXmRYmyteMZxroAS7JXDaXeg5RsoDwrXMyLNkiAvwocHCfwHbaB8KFAyc3WzCzyw",
  "key2": "3PJMcRDmacLW29YTVWLZHfeRiwURiivJomibbYhZBBC6GT759koZh8s9hmDaVkYKbb5axRrwCFCWhUwAGxwm2ByU",
  "key3": "45Xr1ua98bVYztLxrvFBGyFCQaAfYkn2hPqxvzK7P7UoH5fyvgPY5x8RgdgSSuHhRVtHdqxMH3gAm7SMPRBG5MmK",
  "key4": "2Yr5cByNkCHFMVzLtqgNmkHj4Ja33VrDaFvde6D1jB5WdFWAn29hzi9rWqJKHbp1Njm2nP5J2d2KGpSW89zMhqRM",
  "key5": "3oxu8vrKLkjdCbawXgmMYQ5w7mATH9UM6bB7kQfZU8MrfzYEYQXTaw8TpLnQh94EcNjeA88jC9VzM2nvgxLNsNfu",
  "key6": "2UtXUbDjA4o8MFV2BfxFjbwenQ7TeEE1tKwoGWmLa57DhrxtoNKRV9m6s5R83JBPn7dNGtPZ2GDYsuH5MH2MnuDy",
  "key7": "eYirALyHWc3Z9oN1WehJvreWJZGZraQW4WVyF4LeowFnw3Pm8DyfZg9YHAkZe9ww9ZxTtK3HVN8kxixPcKZdwe8",
  "key8": "3zQQm2zJUDj7Jz6jZtMZypoiL5qA8Nt2Y56ovz1B6hcctsjbCLXyYncWqoBPu67ZFwdjA3XHxw3wTTJmrwyE2BPA",
  "key9": "3bnDg4KZA7v4eVDziUqcE2dDREpikKH6nBcyPBAm96aDTbzW1FGDB1M1B2m1FVPT566rJ1Pf4kPpApnAnDm6hjbc",
  "key10": "2kwqwdC3tie9Fcsn5F2mr3RAugQtGpjcYE89G8FfBYJmYFibpRWNat4e5CDxN2ccRGqXRjqghunD2pszHd7QuFM7",
  "key11": "64Ff9u5zjf2hjroh4QnBs7Qs7MxegPwScQ9ZvHurtxEEoREW58JTfr5xYoHQYHa19Vzg27UeFR6EgEatM8aptHmN",
  "key12": "4y3cCRtnJP1mt1judWwHbLaxFUZcSBTo4hNzwKRKAnS8JR6QCNJDxMBdmCMfVtYfeZutKZRDe7t6WypQh9N7tsB",
  "key13": "224T6bQ1NKMk8g83adsVBnvoRD2w1P6oPSPQ9CnQVzdKuRSfP3gtSkJBTacScSb714K1msQXFFCUrtAmqc2mnF7P",
  "key14": "4ppF9qeFSE9TccqNwhptibV4hxZoNaZZfjTeKiqJXPkwp4JEwXuWqkuy4dZUSijyPtDUwUny3iLMHWfVcbR2aqVd",
  "key15": "5baHD4x1KyGtFEYJNY1LU726ULUT1ay2XnkwufysSvETPPnweX7ADHfv4v79mRorwdQxQEQ2XrKGJbwU4TTrSveB",
  "key16": "2511nKtLV78HfjAJdK8bcbq9rrk9ZitjWC6HHd4xGq1B6NdLDoymQiGehv4oXAUnT59tVrWA8udh67KP62K5SXHf",
  "key17": "2rm6EhVQAunzN1WLBZowz4YwTjtRQYS681uwtvrGyg3HpfQy6GwiwXtVxPs2HxYXAdaLjYbAdAtaNNehmKjuziJ6",
  "key18": "36sC5TUFFoBwsLNWDjDZf4Vc3qP29shLetxcdej8sbgqsJwAURX4vDAYx732bigdSzTFUa3sY4zkwDk3ZnKv2iyc",
  "key19": "5scYd8X8p3y3tsx4guiAqHhVGh4P3DeWSSZP4rbtfPrtTw48wPzmpGcgFL9UMyiA44qx4RuUL3KFs4yfkYP9Fh59",
  "key20": "2BWPLohTe7NcCyzgLfcQUaaCtr9k6TExpSbmNcp3Nc581yEYEpLqgEwmD3y7X2sRRv9Cj1rn3HKhuBnMDEyjNzNW",
  "key21": "26EzcJiArvux9eU4fGvrfAAZHAZVrDLEf7ytNJpqrpGZaX3MD1N7cmp5T9Whuu8E1BrKiwZv3iw1uPSj563BSup8",
  "key22": "4gYCjdN1pR7VhU3VDvwmGQfVYSD2NtD2486MatPzj5LjxR5CvvDvDuHs9sesqyXjbqjKzSZ4KgkqcNLBP2DTbwq6",
  "key23": "3oSGeRMq61GMk83qTQaWpsEvq5fzvJm4ZVc5tdc771yHey8vFrzyutBhVyA8P6641KD24Ahd4KPpfirYCp9X5c9Z",
  "key24": "3KeGWHg4f5SfAfUbistYQ51D3ewjbetGjUGnD1erz2asP4xNUJJETBnCcCAjXFmFCtYPPr1VjtZBquDik1SnsE8a",
  "key25": "5bJcin69L7v6vfPFQPvrwiptAXFAWhPDTGJYXsspDLRd875L73gMp1Q15QJdCnyRc96ZGs39vqLpuaKNaWqXgLC2",
  "key26": "5DWDTopXDpthMsH8faLTmFFxC8PKyGkDCjHeqdQRET85hYYiNFnzSvdKE8MBJfVuK3wAqaNGJbRw4aWXFwrsscXS",
  "key27": "3iyN7Z1RBxTjvBrPw6GMcJAxg3gmweF9dbL4cTvDaqV6U9Jgw9HNtYGnnAaEx7uovg6WTTREzqmsCGyezBb84Mt9",
  "key28": "4U7sowy3w2oGujRLnkFz1uvkzv86hzvsTwv9Zx38gXzrAziJwXBWPwKgD5j5678VDVDmoUL2ySDRFWreY5fCzdmX",
  "key29": "dNGVGEBoym2cWPSL7EKrFGc7nPwY5WS11cHgH4UiZVA9A8GpVhM2adExbh7a3V8nw8v6cC2T8R243MubaTKZcdQ"
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
