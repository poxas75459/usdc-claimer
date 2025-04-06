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
    "5W2JfThRCGLizxrsuGj54AzigB6SLGuJbpegLTcRUqBD32dMjyipXzJabUB3kbzdXiQ81WVunwprmJEu1o9PUscz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pNWkNajKkpBfGkCVEbad9t9WuMGNEPQqjt1XPp9wCPsRKyAS7ufokx5pX9zJXQ9NTaT9EzKWsVM4zHSmjePWqd",
  "key1": "4njhbYFacHFAWyhoVcangUJBzghPudfSj74ARkvsDSG3dsf8kgaQjxpMMPCJDYAybkVNH8HFezQj2RGCo7HKn8eG",
  "key2": "2hbecC4r5YPntTrNLNzGS6LssWkbQX5CxBxQ2HL98AkSw7MLFzKiYHfRFiwki5AFp2aYuUFj1kB7NRd5oCqBPxWD",
  "key3": "3B5DgrMeCVo2pXe9SYoWXvFAjD9zYEZx2rQ22BAYo7CH1tgXhKEKV3VBEfvuwopmWWr5AmCjQjRAfHL23vfriHuf",
  "key4": "3PhUwHEyjjFNNVVwatwMPEGQ3jHdW8ondWktcUxbSFTqBHeaR8rTu6fYbDFJNChPxtkahUC5vupCgiaPRDxgPJ6g",
  "key5": "4WXbCukYnfzfAfg8ycRE1zaijDaux5McTPdriYcsjXyhdud5BHDzXhYRtLoCQ7oSrHCgAo1ytYqqYzLgmDA5C37d",
  "key6": "4MoosYkzUT6UHSzToBxbEqKNiMqJzGR7QzKR8geB2iZCkAwBT7Rtkuu5tu3HvFvG3c7rQM24s3VTWtMdkv67Ygnz",
  "key7": "337idkLGeJRtJWyFBe5xYEoe5JNmCjfwEk4jRHMJZ8ZNgtStEXX3YV7Ep2x7xNPB5L9KJf17FkFkntRLZdVXFeGp",
  "key8": "5Ze3PqqSAegokibXLUbswLSWYj5w99ABTGRksqbjYYcut284g671SZTXJP4aNXjJoWKhiK8ZCrW1Ha9ew7Uy52am",
  "key9": "EJEYvy1CqQt3C5KZBWt3tqYhZJjpj8rm3kpmpFbHtmSnYaFPaeCahMLZrktaZ9wUwM2KRT6LoehMT2GxrGgr4eL",
  "key10": "bqaYWBSAnEm77vFXU9Tz4uXfpe5XANVroRCX1fdrrEjMRYAMJoPACCGjSqy8DHHRszrXRYrncXGxhjsGSKpSVCM",
  "key11": "4ZqsaPxr9g28Ua4dfoihr1QsxCqxj72oyto22g7RsvBPqhRsAD3c2qvgmu4XYm1LYjGfL5ikfTWXaXT1vnQ5sRbK",
  "key12": "3bHu7fhvJmqrP8v67WbepdwGJrKaFgoKHfjrfDPEFFMHu67a8rfDu3E4E3tqdBrTBqdKu5GAdeeH1Epe8F5Jc1vc",
  "key13": "5ixUU5i2i2Su4Yhs5DeAEiFrQmQ5mWYRTrohXbZEJSzNFBRLgdLqP3mVQaks3krdZh6489E8BmR8EwK2ga4ERVs1",
  "key14": "4Yf9kxSRn44rC12JHisDfvuJShKpoPb3Xts7HtTmcpMi9o2iMSP3YtbLtDwmZ19SDD31xcQppB9fyNEpYyViet1V",
  "key15": "3eztowvEGZSYNpoU2SaGPEJtrh4ge9wJiJ2uG1BgU7S9Gyq86SNLwGMZyyhU35fv8cdGRXY2V3zcCuLBT8DZkHF7",
  "key16": "6298Ka9fdTSod7vNTg4s2BQBcMAwhLSbwNQaCrhfrBtFBxhzwRwu38juzna5bhY6QdKBK3o3rLhLDKibn4FqDvNy",
  "key17": "4QZKhPcGgR1y59zyxFDPhamf5mSJGfYEr5JyFLhFAtdexHogmtrTnp6EfS4MQgXiQPAat7T3JsN9yrxFTPYdoGWn",
  "key18": "2hmo8vc5CUFaUdH7p69nKExTrhiZ1b6pTEjQEkxn3gtdc5yLYgL9cczssLy7UzCRp77wq3cDyiPYCPSkYaz3yyTu",
  "key19": "4EPLgxYzoV3b9WKmDDht93GDayM9FGLfknFvZ34ymPq4WQsw5iDNhPVyKhr6vmqz8JsLzXugBrxNKCNDRjC7u1iu",
  "key20": "5qNtFSwYNjGShFLmaYyRbfCz3YfHV67aJ5gzQ55nujp8s9ix75MdwV6dVqrK2M6Gou51oEw25XWgXtUcMtLx3BeD",
  "key21": "5zuEpTEz658mJxnHESJtDMUbdhAP9MQed7FgZvw6aiSPfDWXP94JUzUYYj4muRcBbmmeB64QLotrsyXMXtNH9Hcy",
  "key22": "26Znej85SLp4zdas6K3kLfgfM2PvfoxnEnrh3NLzHSWA9Wcm921Jdf8JtUPX71EwjE25En3PvpyKWQSt59VpCWTx",
  "key23": "56zHrRXhLHBbirQVS3TnVEYq5uAy91CcwrLasxP69idoMKXW7mJ9y643fnw5hGBUMvTUAepJFvNdRCECPsVon46p",
  "key24": "usESXkXt4VREJcFBAVx7rtGVxXaTvSLo4bnxF6hwYdx9AQbD6mkREfoeHZ7okENpFuh2ZeYSokXodUeQnhfpPwM",
  "key25": "Pp2bRGeKZuu7zMjjjmWUDh3XRpTKBxWnsmu5mJPgs8EUQH2Dt2Bj6UB2DY4HVRKqCg6PdfV8ke4BoR3s2Wr4QKu",
  "key26": "4N5fBN1Styap1wVQEyHTpJq63wJ5SZ334MTnzGJfwd7zW2zA8roANksPLUs23kHfC2YmJTn3wHRH34VFvEe8UGHq",
  "key27": "2RFsEF9J5hG2LXXHvyUf4BNefU4HAQ6x3FXSqd7XXW4Bnj7S7sq2Q58isE43wWiGsnJTtn4eKNE8dRvvoEvAjzyV",
  "key28": "4vBF5FMEtnS8peRam5wXXYu3YnSVySM5247S8A5ko42eFQkUfBBHvYXD48BZWjb77cJotoyjcLBSyNWzM5DTVj2H",
  "key29": "2UZtJP8KHbU4HbdxvKfb6TtFLryd8bP5jXSbVPuwV1PEeV3X2hiVxtvqigGridBBQRpZ8xv5uLkWFWkwNGPqQL51",
  "key30": "5zzXSxuiejrvLtW8nHtWtur2WGTMUc2VA8DEQ3CzNA3XqUWy72oNWDz5g8hPByFhGVVvhX2EsYsY1YbAWGRJnwsi",
  "key31": "2gPikfk6gHyQmjGdmarPzcybBKDcodm88eGpTSqEskmAEkLGVZMcMnAqEnm3uRYTgARFfcQjEtSbaKa4BTDFbQ76",
  "key32": "3hKLFCJV8hwPu8twZEBQ4fdm7Tsiih7gdby2JsvRQCRRgVWwFVCduD1EK38BBCo5djC1rWJdrgmh8RUVLXjCWtN7",
  "key33": "51AR7TCbw9MU9QCy6cZrUsiTMR1cBsAEJahEycxYsoJTF9tT3f5Q8b8iVGffx92CftbxsznCdAJ3tTvRQ53kCMwK",
  "key34": "5tsb5mJFGoC8uC3j9REKNT3RMy53hhuSpZRP3ebvw9dK83NYcHhPkrKf2ffhUaAi5ZAYCaDT49gmrzwZotTacPWD",
  "key35": "62XePWV9pHb5gTyUhtU68Bvq5kzJkFAVeu2R1XmQ7WDZhboqa9ZUGPJv4r6CY9cWdxnuJSSReb4q34Gx3Y4t1Ek3",
  "key36": "3VfsNiBrWdtgXKpAXJ36ndbnfXjpyyFoWMVfHGiqWH48jSMg57pB9Z76yT8LYUTLUKHwJnzRv2tRTdjpfQKVatx9",
  "key37": "51VVgikZDCHGoKfajYYrA4q6Q6gsBrmEyJ4tT42RsNKPDGYEpUMj9q6T84odx2YRSUhJPVqLNPVGxsL1FMELsqVP",
  "key38": "2YAfo1GCdGf3KJQZZ1YfkVJjyb1Chj1pfaxg8F1b3GGod5BwwoLFNkrHv4qT7u6VE1NuDepznVKZfD91AdJ6J7ae"
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
