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
    "3CY45ypiVLAPzUUXBzGrHV2dti8ah9iYeCdehk9tAu3s83n9th8LK5C99s8FAR9rzbKHb5wrVo5PzVMS8N8Z52Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eZsSF2wjUXh5WXUSiQZnzq8PRF8Mbdp65JpyEZs4HDtnsTnAUqPczvUEBcMigu9L3Z3Ma92gGMAthodrkMzgevq",
  "key1": "52Q17muiwMgJ2an63ZxSwpDoKDdCvVMsvagVHDBRLt2aLPGp9byMUqAvkkhg3ebe35N7yqTzpR2KKYb6hKpZHRZU",
  "key2": "4fbupwEMUv1YkW3vv2u3pgamR7ptvLAinytPFjydGVYCpDhyE2EwDvrDUNU8zh7ocS1hLa5yozecaZ8eqddRPoXp",
  "key3": "4CBg4523tpVCfYDEbcGREV7Lz7WjctUEmJ4tuSwz99B4t87zkYuQYaS5UqbSBTuYdbC4jJCWJGmzn9fSrig5uVwh",
  "key4": "2YzBM9Nj5C4mPJW6StkBxcDEov6fzfNby2ps7XYqtou2dTAW4EydUSYv7oU7xtq3jQzccrTdtvUvuXQ2vkULknXX",
  "key5": "53zVfarAPUepmhmBT2MZE9462WALSZUzgS5A7eriVoLYeqcbpsvzHFRQXpWJ6fd9tNttTZSRcoC44NSN6LBDLP1w",
  "key6": "3jGuazF9C21Vgpqa7rHHpeLyoWwWLz6r9JbpdTPdshajwhjcpNeYPiMvyxxyVeNCtUFFkd37YaeDUE1m8hYPxK7a",
  "key7": "3jDuNbwoFbSqLjKn7euvgF1ZDDTAgzFrNJ17gHFKQGtXZRmqQtovQoSDENFTBXmxN7MEeFZZjymrMr1SbCj66sNs",
  "key8": "5h4LVHPMhpaWRpjNRZ3nDW9zKVnSmSJqVFExjShMA9CDVAvpE7cnnPPPCRREKfjPLK7m5jtJrRnnK5TsUTnrwHwQ",
  "key9": "56FpqEBE2Bpxe9T3Ys9Z3REZ7zkueJ8aEx9w7igQGRL3ndwySMvC2RwriKiQ1f3oonF7hZKaV87rdd5wvfZGfuBS",
  "key10": "BF89uA3iKiGpeJAE569NMT7y9ZvDhk2egdZqfhHg7tpoje6X4bWRY3pFmfu2juNKqPdiVBQWG8uFKqJtWaNJHMK",
  "key11": "CZsc32Z4PJxjztS5di4fS9XFqqnNkQ753taExrpFddaN5WFeSx1ZQAfac2TJFczph1H35rEW6v9ZX669yoQArYG",
  "key12": "5h6NFUQ5wLqSAzFwFWBio8wMmFbA6Rj1NGZWu4oM1q3YPCSDTTEaKu8jV4UyyZuaomDXFp1rGZ3VEjDEgDyNUnN2",
  "key13": "cYCMSnCCGf13R2skaroQ8CMLfEtzsttn4WxtRsMDDgH8qKYAimZDjGTDgM5uYK9oLzgiyBwenhRVj43kLzHHbXw",
  "key14": "4PZwzw375webD6cBSYYj7DxqdVVkSa6JGecguhioxd51mT4y9XQyrPqUqSfERi5fZrKXiWrNbaGRfd3Kuq9XPXGi",
  "key15": "5UK9m8LB6mdC1kmQG4YxFyRCJnutFLvPVeyQwPjD9jCsJMNX5WDWWDrDa9fSenMSbmCHG1DJvQz8S5GmKhdDtnbj",
  "key16": "2SYoRq7kbUu7hPWoZqWf6CGGk5FAZseZWHTDjpLmMcdgZUbeNWtnmVEDNAdps5gptaXXPha3tNwR8kQv8bTkqfqT",
  "key17": "5opcUjA91GxSTDsCHdaaPxDf422CgiQmX3L6AG44o9N6J8KbMXLFYPHavPGXRGt3fa7jMbjGCd3PfJBbkMQq2Fa3",
  "key18": "3srut6R6Pui5GkMMNeFfrgp486px82dNM6WHr2JdshQTNJ6Wu9iWee18Bt6Xq87tjCE43D2NeMn6BS1Dovj6tVtY",
  "key19": "4EbpjG1cfJKVkZkF2W1SzhvwPPS7EBG9NNmcBJKyCM16gsQn8c89658NtJachjg1y1wN5hZruFuhnQDfWREuM534",
  "key20": "3eL5qe5wbeece1rTz9eBTbY9cAnvTmcvSK9kvHQWVMeAhbg72xm7XwMriTbjzGnD7z4JdGFVpudJRtebSZ52N2DA",
  "key21": "5AQ3S3djGHaZRCMjeyxsURqP3N4QSacror6TJKB3wJX3pfsnG9EDbBqf7pqMUZmBqAkELqARd8A1wxPY6ryvZSmW",
  "key22": "3XctUS7471JP3kqKxCs2nzRiVX1XPVEPnZagFhWpDK6necYvaZ9EXJcz9oHddX2vmqwdJnZQ4SPq18sxK9Q4961U",
  "key23": "5QsptuJYrgbcL3SS7e6XSMJAUdHjrWvYc5ugtZcfpHofgUjfZwBiQnwRsx2jxB9HnEotSNjSSgKUpaowttbGQuTM",
  "key24": "4ce86TxnmcjwsPzC96Mdq6YhqrujijhheScszRopRp3Xwbbvv7W2t6UeTbY2Vodertvb77mDd3oNvCvXcjqmg667",
  "key25": "4GcgoUsK64CmkxZKUHjnJSDZjCK8QHwFbWELcmR9DpLYq9gC8WNyjHg7sFSfxYNvwUwDP4x8hUVV7ofJ3WoyoW9p",
  "key26": "2PMrT97B96ckuFFFRtum5Dr6WkdrZcQJrNJ2jjyqkv8krhS7BAzAs4dwjpjQriurbKrnsxjjigVuKyXz37geN4bd",
  "key27": "5c5HnwjCGCqJbQR2ZrpysEy92LiiKSH9EhfToTh8ZBkyKdhWcgpXKqRswZghaSHCMs8Yqe9ay2Y2eQ5kyJ8ea71F",
  "key28": "3ai66bhDezYUaYwVzGKFbgaWjgm8oCgRZ19ALMF5fAjSmnDGSNJX2pRXhBXdXQxS5wyGe5Hxa2DsxYqT4uVie5m4",
  "key29": "2Z2HKFazDYwzNCrs2JRCshqRbbzTk54CzH6BzS9uQfBPXhMxjA6qF5yDhVV1vzSmgUUcXpLE8KoPkfr8yFXjQEc2",
  "key30": "67UdmYdiz3pbfWTXc8iGar1NQJmm5j4ZJg1qnn21H2Yxa8E4tpKujLkARXbL1cdBCX5FR9g5X5nrpb6qTzqrckyw",
  "key31": "4U9ceC4YNzHrK4B6F8zEQUF5uwnAtc7VVNzQFbSRmVwhai9UztHDPTGLnUQTaqqSm2wi4NDW6zWgqtEXFPG8Nmr8",
  "key32": "2RHYve7JF4Vf1q1vkBwAbHGfqykrbsangT12qrzTEL5mp4vCBLXSn1FNz618Fs3DUY6R9LqPxMdDjQ2eLJxqW2Bt",
  "key33": "4zNGHzzapmRj9Kd35MoujeqtxSu6Y5YyFiHEH5iHN4QgZDPauXMg7znMuT1fik1v1MD46Ff5SXrKtDCndsgXvoep",
  "key34": "5E6c3PRynesJg1giFwuqy5XbEPxJxFhfxXngJj6YbsCH9b6W8geX4QoJ29X2sc94eLCKXRYQFgiNc45jucbdCET8",
  "key35": "3MnzYzFk6ezjU99f6WQZegP4fW51rJQZQ4YwqaxCNVMESWHJkTBgk8EeCiavsuYThXatu6nqBsZ2Cx2WYQtjGAHD",
  "key36": "5Kp5bEmEeAU9uMPksGYMVoL6Xc7tPK7o5Ba2U8CC2rqa8qTmiV9iXQavodFiu5mCqnNb1eYYbdYYhFvdU3UySQKw",
  "key37": "3xZ2rTa2LgXbyJNED1neSNkymkdhFTx1mAtytfSUwbTCDdr1JQduLhyPQ5bSuvjCqiFBAQjup6mnw1HsKJiR26Ph",
  "key38": "3QBrUqYChbQCYaEmcnjZuzpWYMA4R977yEzgjhD5YGEoZPgJh9NFwoqBs1etqEyi6CanbAsHq88FELAVqs5DRknP",
  "key39": "37j9q49ZHffnoVeKGXNcJSyzasM8MMX96qvXakpvqfeMiby1wLXt6fQGEaZRvtM5szUcRojuoVMtDVndTVCdgvdE"
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
