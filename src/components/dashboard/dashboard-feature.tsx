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
    "4utADsywt5dm45miJda3siZaT1RWmScqBvrCzQmjqfNA5mvqv1csRtXweP4Pcv5LwpXy9gYLeSCc8tcF3MvbGL3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NqD9AUZwTfUojAfesAMbTmmSYNcuwX3FB3PF2GgZ95mn9118yFdPxi7GxGXkm9HpAU6BZfmTktL9pMwBa3SBpGD",
  "key1": "2C14GjWc2Z4aNvey9MkzMQW7bCY9ryFxyF1SXxMTKmLmtK65oAyKJE7BRmLaMoubq1D5fEYiBgDD2sNEPeQ6DM5n",
  "key2": "28hRupqodA2zqg7UGjoF2RguzDG8zkjkcNBNwMcZHi1qaNeooFfqwe2G9gD4HRzfnjeb1j6VGAuhusFLBBPxmeaa",
  "key3": "fvUPhY9xxR9ruBYsTX5zgrwms23JLidc1wM9YcKybT4JRghLuYUUzJ5WkVyxkFpMLXPGTszrBKXFj8hMscFWfB4",
  "key4": "4SQW7mNeuePGVVBog4HSDqZy1mWkApqqCezRoM2ojzCzrrGQ6XXxHRbiVi2AP9RUmwGeB4Td4ZrDvr2wQ4LzwYH2",
  "key5": "3UZtjaYjtQJvLR9vRucgPizTMo3phzzM4xHYH4mbRxbdzEmRxkkWZCQihfPst4wYvpos2KAWzCwHapTdQdm2cMst",
  "key6": "3KVjEkZaRanknm8JSkDTDGXpgoav2asUHRYq3eDSJtMLxg3hreahCFyWHALEMk2r9go1T2aopZP6hatWrbT9CmyY",
  "key7": "44RMEqvgB6JJuNxAdBUmrsdWuThRrPZVdWTccYR9nZpxPGkJ6YTNpwtCB3Jvup4CNh7imjE4A3TT1NnQJggFDpC3",
  "key8": "3tjyj4qCFQoV5ounyCajNoJsoi5U9HjSAC8VPKcZJu37XVh19cMKGjL5bibShUNMfaQxDDW8kwgiKDaN4JrPvs59",
  "key9": "Y7apWnbpCkP6yjPqwVaPigEAjDirUsMjfJDhC3MUpFdd8YP855Wf7hsNagGXT5R5ftyUqEaJwrJd16E3HhXK73v",
  "key10": "57pBGGoWdjnJ8SPmhZBSVvRrPDRs3jojQ7ksqRksywLSJCbNc31MBTEQpo92udTvNKmQ1Q76jyiAEm9cNe2vg9PU",
  "key11": "F8PZ2CnQYBBg3YavYJMnHMmRkGwRb3J1CnELwMEXGAfex7cfD4qm1apoAQ6kncAJxRYB32iJc7ho4Kx2VEBGUyL",
  "key12": "61vpnmi1gEMFCa3dwthAqDAgmDQtpGfWUopdi9ML3yYLKFQfNSGhbFMGqQWZ4Jz8cM9hFWrBVsQuzMaRqF5Exp2j",
  "key13": "66ZYhTwV6ogZsF4UdtXj7mxMAW4P4Swmzi9jtL8XHo38NrPmCtDtmLQ2bNgEob1BcJRDBqFHCm3qqg1c6nt6a4Wz",
  "key14": "K3zk4pWzTGZ2upAdbDMTPq85R7dtwEu7oFMWyzmsRQq44466jedeockxAWaML3co112Z2rjLTtKzPWVhKk2xcqt",
  "key15": "4pyxCuKEtBU324yUJWLurnv4HEiLoQ8JsesuWdZHJwhAUusEEAhf2m5icKC829nqfaCHVVSHJvHkDaxVXCFUfmAm",
  "key16": "5MErzyuWbZNZZKKB2LnAPZZXhUd3ypZxK8J2QRDBwW6CiKzm3oVyu2JdJmSoepmpk2vz3qyJV1BpHLQmD14M1PrD",
  "key17": "5S98GBFj8bDDyAtW7uWdtPvCL2dWDWNYZD31DAgFkVbEcv1QPC8ef1Ag7eyJfvf7tHCGEJ2DcGh2NoX9FteALEWm",
  "key18": "5XkcPPsnuD2XHKRx4eCBGY6zp66yt7KE4cwwwQMuHwRR2WB4srpju8TnwQo57xNZZdEXTJVGsoz7x3uapNHrpKcZ",
  "key19": "3QLWj1gE1k1HF54n8Hax5NPkiSUrFXK4HPiYgVFBh5Q7cF1ijxQKWAiejzAgxfCXcfSxkMxaQWPddoQZ7f24t9pT",
  "key20": "67aUAmg3t6tXeTCCQPQWqYWJ14ZKjLYeH8Qiar9pZEE7mToZYXQs5XH2DqpXP5NHSxJyjCkh5c3D1cmaJpuhUYzY",
  "key21": "2umuNA1TmvDLobidojYF6d8AqSAqa8MipyRbjhzn46MZj7gaxAJhz7245tkgving1mRCEdRLbxzqiEpd7EcSVsnv",
  "key22": "PSyh4anq22PbKvZXGfHMntcHMcMrPNbGti388oJP436SEZ6vrTQgPhW6vMbw2gjWzyG3D3WnXLXjsKVRXWNsGBU",
  "key23": "mFtBXo1uEEaR4ZH7BcWa5F5b2CCnJ9eZFkXGfTgQkWgkJUiy5dFNjz3Wqv8WTRfUHgCQ3cyoBUNmw3bRAJ228D8",
  "key24": "4NBQMun4hnUSZoo8QfHhu1MAnvHMnDaEQnMu5bhhvkVDtehcgCkV4u9o6nATjq7XN97iUc5dtXRrTTbvUhyEa6xr",
  "key25": "3j9wYkHP9me7BoyrUY1VEFgQthnGsno1w1tvDuUUe4QUYN5rro8q8NJMm5g32fnmoutaMMWFvfUK1DHaPMQ9x7xJ"
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
