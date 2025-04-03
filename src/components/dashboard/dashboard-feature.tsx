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
    "3W32P3usuwZxG3p4Hh3qdKmxUqZcxh1nVkm6w9JpwhB6TeNa7DnTGkbTzkMbUTZiT1Csk3ZZ2yd15LvckJjYCLbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RtijJMMRGzPCJPm8VBC1p8b7PWwYREf4e6UvDz9t6efrSujeuGSpkjyGSE8E1sFEXujV51hwTZpEaRDrFhycWYd",
  "key1": "4wv6DvBiPMzsHWa8VVoHndmqCGetJGSfounXFaMrL4q5iEUjGEXxmcUcPZVgbjshaXHBMF2tUXva3dGRNE5StdQo",
  "key2": "531meNMhaMuB4SjLGofBYgKX6M9P8qAnxBiyVeUFYoLkdGbybkZyDdL4a3FzXuZjoWzUkVHfPKFWEmBRoJU9VvxN",
  "key3": "3nXFyQmt78XiRa1WwcmGBZ1sdjBRhzMqJviB4MER5hnJiejPW5oC2Djxpox3r5LrZEyrjFEKhdhw81iVW3U6bDL5",
  "key4": "4C5x53rzHBrmLr3qy8VJtqfk521hbjDfKvfWGSrMcVjBu1wtaGEvGP47fvQPp8ApJ9SqSWCyDU1jsXbvuhVmxBk7",
  "key5": "244KGEfbKk1CzCFogVhNC7bnEz9knEhSEBauz8vnsAC3LgpefTt717zkKmf4fJwRpUciWKPmF6qE6rkARL94fLv7",
  "key6": "3GmxHedT19AZtwFaPDAecFrBEFpeYUF1gGHTaxx4WdZHjvTx58SCMPLA2C22HN5srVf14CWQZrLWS8LqMDmA59tm",
  "key7": "2d68srP18sfPG6FGW8CmTwXX6yF9qE2C6YaX9DqdeGVHeLfXdTUh83g4XwPbe85J4ZeyWPybb12FytAesMewoFbD",
  "key8": "4tEjRGYun3xi2ZsjinssrzACJooVJzAKThfBr3zTtRhVZH75HasKc8zpqavKihGPWYBNbGxnrTDpb2aQmoSLTnLN",
  "key9": "4dfBY7CJbZF6cHx9u3pMT2wn1aae7Mw3BKZugmNsAsd5DNES2ZfoDQnTjmT61k6njdWEKhmeL9E1TL9d6ERxN9m9",
  "key10": "TQzvsX4fcSTQdgEXGsuCdpeb16RkMjPB2RL7vizT1YUgvoVdFSeZBeTi3dwdDLk5XvNDB2Zr1PtH83vpqziy3ry",
  "key11": "XnM7A1W3MRCae1eL8yt7tNF7KrjiQPpytWuYFM623A4xUHjvKgFcgjiadcsZusqNsRawYq8wJe7S4mWrPNiV2qH",
  "key12": "2SJNkwZ8ptb38STCPRg9RFEAUg172d3SyA9doTqJSBrJyfiQi7i6UpA6XSWCiJ6EWrKuMgTJh924zq5iw1bB3v9h",
  "key13": "4D2mBKSZN1BWHThcrUdavrWYQZNcAQ6QKEG5Ztiu6DPsDjaEDVF3aPvz16iSiHg4JDgWFbLjMxDFvFiTH8rABixc",
  "key14": "2zLduA5NBsug4WNCvTs9dYSNpXRL7xV7ZMZBMtJCB5Sj14kYSiHbWcuixmZ5gs61LH1W8kMktnGzeEZRSYj8XLoc",
  "key15": "4jPYbYaQaP3mCWyjjjw9EZjQH1R9144n6ecCEVVtqgsJXmF7BLsWTEQVyXXqQdhf4owXeQEZmnMC5gif44MtYrKQ",
  "key16": "5BkE6ufx6LWf86viQKbPg68WiscxkMvVSn3mLQxtQdZeYDCVhHz3FgG6QPTTnXBDsQzbZqRpwzRdHJhJmT96Vu3e",
  "key17": "21sVw8PxRr33V8B9ERB6unc8xA8godEyy7v9dRndVigkne6khUQVExAneTuLuvhQrwWCo1W38bTg1sV9hhbLh9qu",
  "key18": "B5xkxA5d2wut337rtkwzzZYpvfPAERfzng2RXsdACTvM31CWAzCe8raXySQpJpyLcrQVp6pgiZDttKGLDnUUJsV",
  "key19": "qwYRs2At7GDjNKLKZCFkaVo9okioahzmAdnJfichhh3UE6T8FfY6p8Zs2CVepQfoPJo7VjZ2kKpu9UR4awE7pSF",
  "key20": "5z2UYEvBpJ7j9n4ZbZgH6T3TZJw8AJiDYxsCJC6D327XoCsrMTg6qZ6Hvk8q8ypWcQr9cgdwQbyXNUSevvF6Nsur",
  "key21": "5Jybt8og3R56GnKwh9n2gXsZSRS6KWnCrFXhPNNLXS3jHCfU1NtKWUkhVrmYBZEZ9RsQV9Kx9QkS3SWgFZKCCEE5",
  "key22": "4xTTC79B6gYoCzFPwhpbYhJR6jdu4LNPkib3t9UhAtQvrYQTXxaSSZKR3GrFFch5u6KyPm6ZdTYoCXRYh37Wg3HY",
  "key23": "3wVCtduX1fNavP7VgzdE1mHRrfvefJ9uoDE5Evbpgr5NoTyEgEXDgPiPuwNhTNQRoqx9x9mtqioqKjgAaX1oUVgw",
  "key24": "5avyMRimPPdXASo9sK28LyU2fcDT7XPo1BHLcWFDGvtNLuycTpqyhYLYEP1inu4Ki8TFwPBsNU9w34AbaVPh7s19",
  "key25": "36Er8SYFnELToAUu4U8J5qXkqYDeWJHnGHK432rji5TJsXQF6qBRUK8FLF6iE4gPNZWPXpNoUr6iFLiBFX3vP9qK",
  "key26": "2joq9siUpEcL894gNVjkkMzU6PRaZLbRPCpLWqDMt8p8xxCDRxyp1GSCRseY8CDNU9RF5PCSBYZDW7Hc6S7RqLSR",
  "key27": "41oPygtZbo4WRA72nAJYEP4EAbTsyps6L5jLT9JPoFAWhCGw9zDr7R9SQuHNY17PM5HACiicHmVjb7F77uGGGvro",
  "key28": "3CEaubfktp8MbtujTQ2pbX7iWFJzNF3QDKWrfcnt4P2Asob2MuJcGnVsgjp7dFB9DSKwpJXusi7yWFMGpRYJQC7e",
  "key29": "3GJ6gbggLVa21fwTFLTuvqVoewSxxzT486r3mvkCQfRJzq5WQANvLyA1E7fekYLcBBNVKnXm8PdvazjtJKP3cy1A",
  "key30": "hACGPWsCZm4XTWJX9G8XnPRjfyGPkYJhKLLaUwYoGXVXoUXhVa9Yw1rdxhoHmKdfk7ANuiVQLUmZy8csvmF2hNd",
  "key31": "3gLcngyzyruVM3gdfPAqS3ErDHa7Qsonnk8nz8SRbNbpzmE3Jyb87PKW4YkKgupiiF8SZ4thBqoPL4g8tA8iqFa2",
  "key32": "2urrwXtFm9uNtXup6c3m1WUG3tmiBzZbhbCqBnYYWTpkHHBVCzzVnvVVt4wMrkAqXs9axB3FrsGrfsQFxCiGEQyG",
  "key33": "46op8XgW815TZUkqKrDZYsh8W4PFqHtcmqAxXPRupNEmi311o5eqLFh273MEnWThmpVMkkJiuba2ivAHFcpgN7YN",
  "key34": "3irvxgNAzFVoZe7iUPeZrPgUCy65vN8k1defFpN3xprRgrFgRieMRpYAYmwr5dyn186vG7pAQk2sNu6TDWPzURdx",
  "key35": "64QNgmpy11xc1hFg3NHZePsDWG1BjV7WD9mKZnUSrFVR2bEq1trJba1NKBnn7hJjww6GurxvzXpPx9dSNFakxBhf",
  "key36": "nR9u6BBEid3qt4vGWxLmMiXzkSnEgW6khBQ6vkZAJx6rDDcED21FTwWSgFGQ2FCeeGbWEPGJLV9eSf22AwMUhLp",
  "key37": "r2WpVoDtuthmAJ7U28K3qu9wBDC2G7taWcYGkbcFXP9fN7Ls529htZsetmLnVD4i3aVKqqVyuC4vy3MdP1z8mHa",
  "key38": "3Z5fUvVw8XdZczupjzUpMPY6o3XSSBnQF8xgLJ8Zgt9Dm6gZ23GLnFizc1UU8cBuB4DLzvTLfnurarzdo8qWpdeW",
  "key39": "4kRBWzwh2HkaZxrjccxpcrbqa8j1VBHgbVZqp49SHcMfQN13tzDtooaS92eNvq7asjxHFC3GFSBw3r3bPnNveHvA",
  "key40": "4FMsRNyaXgA3NjBgFJkCR2oJcjYgsW3pS3wJBf5HmfqPZhphKF9q6rpwyjrLnMSraMZHtNzD2pTRaMm6B9P3oDuR",
  "key41": "2fv9xvtEJco7EKhfjkmna5A71212w4C9SWXezebZyyceFBUTqPmj7vLAGMeoYrKXJYRQshq58vmSeE62qUsrfquz",
  "key42": "4SWNC9CSYDWAC41tbBHLPngdcQZgu4LRKQ5XHLezR1AwkbY8XYELbPFmUEsvzdU76myDEYbgfWseRPLgejCWuHyR"
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
