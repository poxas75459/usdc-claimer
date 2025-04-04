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
    "5rHY2bx6SbJJgDGbk8HuRVDHbXLGpbGpuGf9J3W7w17seq7kLrqwaavPLFZAjcAgjEKX5uPzff5bHQPAG9DT5qNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WmUpBo5fBuN3fYSGroaARWVkEw34CRzAgt1Xo6Qgjx18jLgE9z9WQcHMZXPJhmduhrX38CwAM65Uy3GjRy3GkUW",
  "key1": "vH55dUx7hFQB1djp4hy4kdFstQtqvGsebZEsFkdTJDUVasSz1h9fovpqG6dXuvRzpss2BK3NfHmcyoDtBWCbXLS",
  "key2": "3ki8JTyuEZvXsPh41NVjzZzmyCLwGHBdCSpJ2QzVEr6gyvstjXcEDC3vV6TBA5DjWHagimSCFjQMcKeN7YTUvtGJ",
  "key3": "5K5vGSeEJAMbu1SEghSnEUHQjTWD1i1WDWxnZPuTCNMgCT2edEHX9dcSD3sAjRx8JXH6mKxRofyARLcSSzUUNYMS",
  "key4": "5xUqs8jwT6PS6rd3GHUASymEQ9F2CzFDyz5pZEVkhhBk3ZJAejzaD8hPvno36FsskJBnPy1ttAtPVLru58kkmBwQ",
  "key5": "3aTtnmnTWbVZohf6PQjfZMSryiwMXdwa96HLuvn3RfRvQx81fZBovQrwQkHgjoPPpC2Ki3JyfNH1gpxpYn5yPQuh",
  "key6": "4mDYVLkjMKFxVV8W3FiYhii1bv9gyhoFXwu5EyuR5ps6qKMCfYYFCM19b3gEMPYhUwLLyK7gnqF3FNusse9YTfQM",
  "key7": "22nLc3B3aD1WspuEr123ipJv7bnmmn6FYbEhneEZvPuxVFx7U1MY6Xpd1BfRa6EY3W2V4S2b1zwM9nSKqKcL517T",
  "key8": "Bzz9UpwyZeco7b2UkyASocUDPdNCSn7pZEkZBjgTozjQWbNNbniKR7qzRQr2pVxHTWPBC1zZeveB1HJLAxzRUd3",
  "key9": "31cZzDF3MHVHtzMStbfNotwqmafs1owfvw2Zxz6h9t7cSQhLk8MpeWYrLPST6AcD5mvLzL4Sqj8aQDuNkchpAeLL",
  "key10": "3wTQU9EmgVAfHukaamLn6ofeWDGsah8ECwVrgWaVbYTDpRKfSEqJXAFQpNNUKumVsoj5XxqNzE8HdWPsFtQf5rqA",
  "key11": "4xxeU2raHrTHTA3ZKqbewA9dxgWinoBGRxdaXpgA9bZaJ4RofeHFwufP8yAUX7sViiz3QvxgTciKPYTEXvpQfk5M",
  "key12": "24nAUVxZaXx3pN5JvuVY329z4P3YfmWaz6oUBx3GzHuJKisBEcyJWyhAHSQ4mWLNwZ2ueQRnZFhHpCXmqbq9DVWg",
  "key13": "8ct92Qh7ETggQ9Ucd6yRxPha9pEWEhcwqMJzP7vfxHmUnWrpxbyH3pcvXDsMKchTUDH2yXuWSDdjtq7MwFfnVM5",
  "key14": "5spEgsHSM1c8tYoavjPgmj62syhjHcWeWUWBL8Pf7ktRLQ6Byd8zdYjWMP5aaVWGYeqqGrDasPNi2wE2TkRHvEBK",
  "key15": "2TpvY4RR7zciseZRdyZxUZRmwspTasgjLmRUrVQgFCTtaFM1V9EcThxvPw24qmQBy4TMPQTy54A2JXdwCCJ4ZSaD",
  "key16": "658YqiMePdcTfZbc5YPFCdBAxDf3tk56wo9a4iwKvtqduoSRgYM9sCbZS6EUMjSJRjSbR4LtDswGfeLs2hjCxHJX",
  "key17": "zvAPpy1JZt84oHuhn4j26hfuFCHXZuBLaYF4kcoH38ARvwHLiBH5CcMPHDfx2QVitBFcJK8E3c2yFLeLBZaGwFB",
  "key18": "2WeU5z7vzzpS48MEkp4hNJefYhfdF7RBmnKPQYxRwko5MfMvMKrC2g9BgLBRrXDZWPQxcZaaBV2iqt6GQPPxjL2j",
  "key19": "3xq9hCyDVDKJ7ijoHkReCvcGmBrGnihhDvXtMn8NkkNuneC4U9ATSqUsGBSMahPDcWyjSCLs7f3UStdzDPnDBadf",
  "key20": "49ASnREo7ugzJkJKDCdb2CUzFac8o25uDeyHmuF5mETNPCv78v4Fo75K1v2ox3N4WnJ79H6Hj4QR4HRWVRWsWBfw",
  "key21": "4xUHj6GjWXJjTfyE8voh3qyMjTnfLiDLtpVueoY7UeyCNvyuhaJRNa5RqCFi2j4fmSTVyygcqXEMwnuu7M1s2o2s",
  "key22": "2uTbDAYH3UJYSXuPCWtUWL7ZUpGjSD5Aqm8JzZHyFSkKi6yAhKw8MQTjDVAAaS5S4WGhs7P3fEo3GZ7cW4R2Ykes",
  "key23": "iSJGEWt1dbo6U79iwzLpvQZq9FNGwHmmdFJMCjNNxJWMJPF49ZdHH6zcgwHWhtmXJpJY1ZtktLTYhb7QXwNyCad",
  "key24": "4QHZZVLjPwEFBvbZrEwCTeh4edKGMHb48bj6bk32QdGa9F84Xfy2yCCpBW95w3NNjD11TqpByukgaNQgnJz6VsKW",
  "key25": "G84KGrY7rCcqRJQmToXXjhU9HBUw67g3RN8KnAZYRPXUZyfSuJiK79suv5mimU1y8jjasyucrYgYdHDonbdXXBS",
  "key26": "2QvvipiFVtXDmsWup3RY5ev6X6oC3gbey4pyfMf9vqAzeZzz8eUNSowbFT1xEU8kmZwJavgdjvtqdQsYTVyyvZjw",
  "key27": "5trzwknyTTvaXhUCiHrdH1iU1VVNzRSUEuLUQSevbEXvJoveq6KnRzESG3v2b6u5qRavdNTk9jWGGWy5iNpJszXd",
  "key28": "FCkJoqGKJZ2e3YVzzYn6yMPwxXmgfqdYd6PiZJN7dRHc59tEzgNDw4Uy6f6qAdYmvEhgcHBnxd9Vb5Ni5prMLvA"
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
