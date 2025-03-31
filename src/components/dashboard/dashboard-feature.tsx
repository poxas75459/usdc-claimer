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
    "TpbkhKwBLJdYcz7Q7zGcyHu2tQCt5V7DhrUYxhyxLPN5eSHjRKwY2nKBkPcTTFPdepved5aX7gVHytHkZeNHfNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YhCXFsH7pkxVDRFPcgm1MNUUqrABLbjynFhMGFANaX2BCnUeQv3ejZenwAh5vXzKSvSxU2VpW8FteGNu2pMHwgD",
  "key1": "34aHY6EuB7Y1Bbx9zWm6aagFQ6R82eze92R9xfHvdWuPg7Hc3Motdix8g6MXNPYmtseYGrqWkbABXBfAxDwzyBoA",
  "key2": "EMytnpFpphrn1LKpZER58p1JJnhg8vquoJtav7KWtSAXNrafTfnNb3eDb4QpbNFCRrRczHJvZ7Bnt6vnpvakUDi",
  "key3": "51ASYdu4Qcadcz6qQppWxAxcLQPjwCcjfGU8yeyzD499YTun4HdgdTLQ8YVdgD3sx67xe7DiXY9pAVEgCuzdPqxe",
  "key4": "3px4PfgFrgwce9AD4avNS5DV9h1D9k12KQxUeLNuYNUodpW4gA6Yga6mR24kmrYGxQfQCKbExqXEwYJBaXEce7N1",
  "key5": "46q35qvH8CJD3D98AQrpgFkJZgDxAmL6KkzdBTepv3MG5b3LEJDMe5eya7JomEutEANPMKkAojMAgyN884TYY8q1",
  "key6": "4VhwnE82EPwQw25ncZr8u51TrNYDbyHoQAEu9AL8cXatrLB3qKsiqGZaphDY6b1UMtaSrPXsGYm5J5k5o78e1s3o",
  "key7": "3dcYsZaTZqFDtDvbS5Nt4FHE3tpaB8KRCGoaV5Y6KNZ1QB8AYqXdV6dBLzrAxCUwCS3DVKBW6DHxGcqUpdJoLwF1",
  "key8": "5iHB8PcKRfdw6dQsa9Gmyq8DeDWPqxtKPifvCv6vG7xRMvVzrrRmy3oyj4ka314G52wJE7biZhWauJWTJXf7FUM7",
  "key9": "3T6BHwuVQqa3rbMSct7yh2sQo6v8DVwq8kLAKU3Cr9LxDiUsTsFdhXMTUSgXNUM44dv6EFV5YMj8kGX5iEutFmzJ",
  "key10": "2F88FxR5RUBXYaR1W3zaRAZS9u81fA7aYQJWCC96hMMd1yXhrUx6LWAdPsG3zTFP3FPzFKMWr5jrXeAeDKKvYY4F",
  "key11": "38uMRy6NcocEfcn8sSvwxp2oTpSTnLikpRLodbEwy4HnFzTfkHRkWptRMrysC1hwALsAUbAwvJ151CCZwSFPixM6",
  "key12": "Zs9ZThQbc3fKKiwVimacpRYuw7vYwwY74pwRJHn7H4sefiCa4kT5mDF6c5NGF38mX7hKQaNptdG2hVRQKagpzoh",
  "key13": "54SXGZsfUYTk47YzCiTAdc2ESeA3NjbrRJdWXknaV6a6uMEM8DJHo9fuJntvUPxBmrJjBtz3GccPRrXBGiowEeMJ",
  "key14": "4pozjgeowNdtcFbC4TV68phawkmJz1h3SHmnP3Q3gKJLQjzF8Z4BCbfcsJPnVhEJnVTMaDK9YyAT7HHe6ftJG9Qn",
  "key15": "45jNjNeoFQgdEMJy6kZYQYUossQLhjL1DEi76HXxASRhFXMJCtmmZQxVigcf5bQue5HYQzv7nS9YignWU8A97GJL",
  "key16": "2VdvdyegrkGwk7C1CeLsgE9SLGhE5BM67Vr6kRZ4KNCfT3efPyiTRV7wpFmLZqCZYNauqEzkvHsySmA2P33SZ7T8",
  "key17": "33E2nn26JJnW5yd7Su1zjrx3ufcNw6GFVC9K5FUzGUhdLa9a59x5hSfqSoQb6mZQXqjh7ymkGf2J5SL1o6DfsPFG",
  "key18": "L5vxQDhX5k3ZQbBSfcScKSmxt1sez8NtpTxmTjV5NiRWuGKJNGrzasxTXFfumDqKkjkmuRrCtvUiBbHUgiHjHTN",
  "key19": "2KuTkK7a37jTieXDxuXDqS9Q84e5GhKA16WACn6nPerPhfK5EsRLJhyRquFw7oQS3heeZPa5rtqRnaEk1sJFDYnG",
  "key20": "4X6dckFH1UdnvqCn7pkgWuPu8YirXMiAJW7N9P1jHPLyMc6iLP2TDYXY5qfo2HKozg1QHo4yi9hWj8M581BDn8z3",
  "key21": "63UT1poB8jRePpTih8dsUfcdpHPG9jFLnghyxvvZYaa22gZUfeq6Dh3fkxvFPotvpoeTggjXBJoqpjMrpBa5GPL6",
  "key22": "5eSEPXKK7oi7XXMjq2T5ePTS5K34SSAkCksAS6yNpa1SbkVs4UMLDvNrAMo8u9X5Vuqey4oXVeeULoVGHDoNEwSK",
  "key23": "4f9BndE8eFpLrFcAMRbUTW98KRZaweru7tztwfoLkJrFxnmimLvWcDZ3hcyVvy1mCTBvPDChUCwUWx4ZUdeczdG9",
  "key24": "49RT6Zd9dTBnqqZeYBx3NtQ6MXX77riLNAZBDAfPR63AxYyHiB6gGiSWTLzTHUEpUjT6NFY9XMT4a8Aw2p4t48h6",
  "key25": "57jXkSZqeS3yDfEABS2bpnnbFBnxQLyUNa4mJSzwdVftRbguRratKbVcFivZrpnMfKQ6jEWuHiAnpgLuozQjcEzP",
  "key26": "2FUpNfT4ahiGbwiomPT9GqQyDuD79Jm3xTTXgv4azNgCYHBssUaneqwM5wMACzATvVGuw5DJRUyYwrTKYQpD6gcD",
  "key27": "3tL84bTWhe8LUuCAk9Jk5iG6DhBpdHNCSZHBVn6kKmx8v6CVntTcpasMnbQycSY9UuKdhD3dJD33WxcHRkMhJW6t",
  "key28": "4ZAWih9nTEdi6YMtD99CHGXcVkqtyTj3xZLPuE2KGLG7CKDhoueyhyCsHLPQei4Q183bQ2TJ2S8fXrig3pXhtLiZ",
  "key29": "22kyKcK2c6pnyzhtzPCsr2PJNs7Ahoiy1iDyKLd2tBwukeE9BCeAa68Djt7s928R9b5PpSGwJJFPSkPpPi5u9sQG",
  "key30": "4pp4pb54FsneKexsq7DBn1siV5ANNtkpgXjRkDAvYGCr4KYXTZofvzsNGdcaS96wsVeuPKMY9Z2G3yH85ZpLm2DU",
  "key31": "4fN6PhUfpXZBQSAUP8YJ8aHZFxfaQ2w4MgTMD2k87smQdhckuorHoAP9oCJpKPZqUdVL5Ba6vAani3HkMidyMjDq",
  "key32": "2fEdffiuzcqjJSfaanKxgdmY3V3avHm7Rtvshkashy4NiSfXkTajcYv1SvFRsfo9xsfxinRvMZiFyz4WmT4WwdwM"
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
