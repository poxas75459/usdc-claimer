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
    "2AcDZnSShqCPBeV7xPBPSV2FqBWnhdch67LrTPiRE2eXohSpFVAc8BnYr2cyNy31cen73dVS4YUxEHFL2BFGyxLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWdD4ezMK6LFwVuEs7ba1geuBPkJ4QcRCCKgjhCPDY3nwYgJM5F6o2TM59NAzNRd9B7psyJZUciMfTEu7Ti5Nro",
  "key1": "5F2hDDwa6j4dr5F8KTBzcnp9hwiYG6cQd6MMurhS4RSiTXaRkLLepx4PZgUk3qnjm6hupUj62e8ggLDsyxpjiDB8",
  "key2": "J6cVj3y2Za7sUPLawM2bZqEdMep3LRyqU2Ty5nw2x9XV9MKf8Af6BgNB77kwddbNVMaYJC1ALfqMEpk2jDMd5Yr",
  "key3": "3dnapiqQuQZ9GWocioQeATeVYAuTvjJsqsu3mteXjxqxdNVJkLcoDz68fBtF28xRa5Eyqs1p7qZ8AudDrxaBrQ1C",
  "key4": "3gLX9UMYg4Upck5Hf1wz3EUqG4TRhHUh8ApwWBkv87HBoi57FfsNq9F4TuZgYVaUBGMQkHfg4PUiM4VCNvnJwTKW",
  "key5": "2DF5wreYAsaYU8xuNRSyLbjhjK55hQXxsCxDBJyEvkci2WSiYLzPv4dQwAfeKC3zeczdAcndy1RFF8BZbM2rSNMM",
  "key6": "3H3Mhe1ooBajrVhBK1i5rMRRjbqVKxTzCNszYVh88eoMDwPccoYmtuGQZ966woQaAR4M8x8qp4WoG4Rc495vpDQH",
  "key7": "2Xd4mU2Pd6GsDtSVYgt3gVAAfujNbWhakDGeWTzw74Fcsk9ZYe8wrzFwGgzg2oDGEfEoVHPamHKZWQBx9dxGyJsJ",
  "key8": "4cnSxdzvY1RcTPKGSfrzUrQFKa3cZJYXU5LJHRi6jFc92zfUbt6K5RwVWpApRxeW9KWA4f7dFTzQcHvWDFkNwdQ",
  "key9": "2hGTxxQxcw5Z34ahZ9MpTaZhopecEciivRmD2jZXQaT1rKhe2yPGbntnrFWLLhDNmihYPErJaM2GYybDzU1NCNqH",
  "key10": "3nm2zi6V2Py8EHLBAE9jpwc5ed9wyvhqo99ScA3Qx1cVfYzcDJAY8mkpBmZ9U6ao7BYeU72VSUe7a3zYdwvLJinr",
  "key11": "61Tt3oLgz9iYxssGf5DAshfNHAS2UUGxd8jQexUrsyiWnJmay7L1URvEYiXYuDgZJXfJBPSCYEK9DEM8dNviPm8f",
  "key12": "me9hj72UhfybRvyKEapo4Rzbs1vJGXeUPchQ3RLpEkRcGp8JJmidNu91PCUKYWxeNTZpwzZQsueXMu9EKd7GY4e",
  "key13": "25ouxyQEcXQuJEUfswot2aqfwk6KhJF8hr3Stjgnvz1JWEW4NiXq4ntcbRAN38DYj2bJZ1JRWHK5sJU57BBjNsaf",
  "key14": "56rMGJn4ShXhEcRwa92GcTCRdJV1MC8CYtpK9kKFhyFWQ1bmmi6Kd6F8gM5ygfZATirMZs7Td8tMRjop5Rcxkp7f",
  "key15": "2sRoT3JGG7Ngd3r6ZTzdYkRQVCTGphQm18JQR4XMWsK5UPUoyBkzex2PS8uHwjLPGcJKUoZgBWP72wFjNSBAHBG7",
  "key16": "3X3BY2jMUUmfxTvGpcUpj4P6hdAX6FdcGSJGcfnuRFc4h5fKEZSGYDiN8f5dTVbSdb9P4gbB7P4Cn7aS3qqwrgks",
  "key17": "3FZMg2EFijfkv5KAF7DaUcaqDLvEe4J1yjcAZvA1c1dEbgQyEFNuG85BwheeNmkuumbQNEAuDRvT7sDu6Qvjqi6G",
  "key18": "2ujcK6nPAD8Wvaf7oavMPnhJP9VHXugD8FwQPLknn2DoSHR2C41jm6jXbJG3KxcZbwUvvadgbcwCe2UPqZAKJmTk",
  "key19": "wSiEC19Qbz7x4GX7q6Qt3VuP8oWA7xNy6T39UD63vAbMvazFAGzAVmK6kTqEee4oMr5QH9TcpUkYUjC6UHMnPaz",
  "key20": "5wuy6msqTqE4buGacEsaaYBPWXcq5mq8hip3g5c6XYyyW45Lpo9jvrJMuwCf6Ku7Bf3NE3HyeGzFXRAXQ6wCL9ox",
  "key21": "4JnVfLJy9a5hFNns3qo5DgBfJCpxzbDesvprc4vFLtEiDC5grkq8vB58JFSTWxENzoLwcnV6uCFAWPQELsytm7v2",
  "key22": "3zBFpXGDdGsdM7CG4A5bNKJAHQtbmJ6GSRyPATyCyWZpfNddZs99vfnqyMWCHmKbsZiGcbTUNvuv8zLvmrfnCi4n",
  "key23": "53ETnPhBnKbAiv7LrnRXnpRfHBuUYy9SjQo6XbAsHJV5zpUNfyq4xzYRJLzQy9FtjBqpmPbPPuYQed4GEzSbrSLZ",
  "key24": "3GX7iUHeXrc6gdrp33iwxqDqTrwGWTZNDwXddP3qCdu3qi1t3f5wVQL1xuUyzM8hUoLKQLpzdKFtDSppyJ3yCaHg",
  "key25": "2FZDNRKMoKCkzCH6CrUsRv2oMRfeziHGx2rjcPbh3HGJhT78TABVoAVxpQg57csaMatxRrw2MiquSN8Zgu3umm2c",
  "key26": "5sLZX1JESZRkypVA8nrkqjHnKWa147bgf51rYTSHHsiEuULapbKmp58mxa38C4onMyTwwBeptsqFnB9XdgzwBBqZ",
  "key27": "4y3wJQnasUn8Za946x6qYNaTQZFazUuHhFUWD2sVHeAVVWe8UwiQhHFyDSXST9aSUVmxuiQAnAg2K7EvtTjXRKPL",
  "key28": "3MEbp71H2NKqLj7mcPmiGhcyhtqwchXq3KrCmD3LpFmQWgvV6U633RfrvwWTxxvemuTjFGAA9ygPb29i53DRsF2m",
  "key29": "5Jwuyt82LrgwuUTv3ugzfHfsAMF3AYKf5nUimUPAbrnnVgRMuZD9NZR4Kemh2TeAypu4XCibUov7Rm7bAcBa17u3",
  "key30": "JiJDd8VN3FamixYrPNGqmL9frVLMy1uNQ46MaZHcoZKdVjgcTUB9hmHsXPHTwtGpTSMyQBoKcKqMHBrHRUHBggj",
  "key31": "5PPTBv4pFr88TN46rzN8QtkJu8j7UFeamifmLC5n9J8AurXBPTqgaCoN2zigxqSD9SaPfgPSf5qUaR5Mp2BqCSYQ",
  "key32": "tEsdHMnZg58YCwQ4M7iKvfw4CbVjXW5mUYrhFNRwyXoTCjkbazfQS96MitZo3mTrKvZzmSJiZP8UqvTyCp2oBEr",
  "key33": "2wwcZZE3FMJ1h57q33z9uvVMu9yEBwFoFCnt3gXeRAS2fgSvkXXderi4Q8R489dwzBsWnNNQ9hkFQ7RgnXmYq6D6",
  "key34": "5MTMgZk8cD2CuqnsH7zEoJd4AbMsWvWGsbvREE8ACCxXtoTsJaCropko1bDn7hJycuJnu4nJnCLx1bJmDnQvdjKw",
  "key35": "2gKjACDZm72Bas2QbJD1VgH4UXiorVCjbAe6efD5DoJzZ3Cx5pJyGLKqoWHPdaAGWgGuK4vuND3yWmB9eMGy9PBf",
  "key36": "ZVDp31DnGp4HBnMzq8kgDiKXPuMSexLZds9KxfHeGBq4ymsRuXALnQLikc8MhCLYqqis7bKsskFJkmWNon5Qzio",
  "key37": "57n9FpZFhKPxEurubqiUxuijfuX6Q12bYzEUtqDoLXPX59X5UuVTj5ec1BNWDPs7fFeLvFxSbdjnAdLm6rxyRz2p",
  "key38": "42uLvpiQS8P5Ny5Tt3gGdK4bDTnWpxziVtmSm4fdSG2SE2e2rJ2fCxn48yjbHt2geX2tUKjX6JLKiHrP3QXwhowD",
  "key39": "2a5sb9zgmFmrXiPDcSwHTJ8n99Y9NCGjrtiwkbiSZAHYFS2cXs5yqVVSowbv1Vj89m7nFewKUFod5ia1yEgqJoNz"
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
