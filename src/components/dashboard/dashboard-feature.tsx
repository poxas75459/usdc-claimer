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
    "3Q4epTbV9MV4ckkhTvv3DpcUGt3vM2yrzGBETuQvVJvttcZfrfyBZFq3gxzKXv9tMAH59h8fxpQ7pGWv7AA3us7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WgbuVWbqsMrSMessd2KkjcG1XWHSPbmRiuA9CDYZXfZtSG3h2Ud9j77kkxiuKF253ZkFE9fG75g6QuiDVbYymf7",
  "key1": "3BgMJxHvmNq8EPaWhVrdK1kESZaEyMx7EHT8Ker9zgcYzZvSbU4ftaVdAKztycPsPembehrqK2XmJiTQAFUN2QkQ",
  "key2": "ExwzbQh7ipUYZxuAGA6r1h7eWH5gbNUb8SWZNGVqMVa3Vs1g3oURZZ9Jzp3oXRFNDJHufxgznLSuFAQXMeqwhwv",
  "key3": "5XswLrGKA2wpLacBmeY65vX8s4V7PQeCQJUikkEo8hdCjJp2TTxbyExXhqqM3VqERDkLWQ9J4d4BWGPzadHQUB32",
  "key4": "4YBCqKA4KbjEuTLSPxuQd4H4V6YRGEP8UtZUSPTsUTtCiwWD9ZXmyHQarxN2Lt7M91txYnM7ei31W9ZPFyVRiFUK",
  "key5": "3MAXkg3Qp3opFmRTXDRnfVebYhRbQ3yfScb7VHkp3tJJsLULidxKJ766FUbQ2j59vZyTg1EuSZsQRpdA2aiFcP2b",
  "key6": "2HFi1KF7vLHqGQM4QykMAmhtERcRijYgrgN3sQMU3iCjbTJ3AEX9GyT1xspkAnj64GK9mB5Bgc9GbvH5HcvXjRrx",
  "key7": "44WhhMusLFMe1DoR5N2uLf2gvW4DNugoDWNrjqvRtKH7d5bHnNuHw29Tw29oFzqEMRJL7iAW548CZEXm1XyUmAdS",
  "key8": "4f5MRYNVJo1nFZ511rwwNDUbiCLiTXZDC4L95879h7pzcspUdgErV3iyveJ1WiQQXjAWknjCs2qJUVoCBpzsQ48r",
  "key9": "2CDaxq6VuxLarkj5k2fVpx7toMmVuxW6QQh4Qn9qPFajQ93yWU7gVK3jyxqSBx2dT8AWgQs7K5V3x3o6WV3mvx91",
  "key10": "5CCiUr5H1fPAQA6zL1qCMPPcA7DQRbMouRD8WrdiqHQeQ9FiCVh61JbkZ3yRhhphUJ9WTN8pU2NNe4wXuHMYFn3i",
  "key11": "5PVGXx1w3PnyJycx5TT3sbURuRttWGMt9Kq24kLMGFrwWpMXjipHPbSg3HCWVPvr5ENTM5n497QUsq5JRgiVjcSj",
  "key12": "3BZb8sn8RYLbvM7YkBxCnBggSgBQszyPCHtVxxRK4sBJxrCBidUgzSemX4ZmE5FxJaBY9Gy4FNcVwx8tkr2hoRPx",
  "key13": "5s1SitJoVjBR84mfpi8H36ZQwYX4Q8UtVkHsXsnfjRaLHTPoQTCqu9i4CWob8pSeQGTgMY99dVBpLSuDP761yVU3",
  "key14": "VNDKz5h5XWXEcqWy9Yuv4BxnjEk56c2WPpcQQXURQRdzyDCxk8ZYnZvzsyM2RbicKgrVaGf6d9KD93n4uPCcejh",
  "key15": "328fWtN4cJ9SWy5kHYgbKowuGsx5P6Wvq7Qd7jx77RHgALemakhEm1m6uNdu33mQmwR7uQnL7Tm5tF2mfh6gkNsx",
  "key16": "2sopAcFh55gqJ7kq4oLoNN324Dxfe1qzjj51MEWs4hujMLaEDnNz7pCtspV3jaUn9RvPJxBMdtpMKD5BE2W15yDB",
  "key17": "T1pu64LWm6wcT1hRB7f4yvyu9oA91iiQhLaN2ooVo5uvFR2v2Gtm2trfmWfDAc7xrafqEFhn6rr4Un2VgbdCBFn",
  "key18": "5YQMkfszUd5QSHdJaDCZMc2UesYorCh7WaLJEtsBYWB1ihZhyGfHWPSLpNcmnpdGTZEQgHR66WCEymykR12uDr8x",
  "key19": "3p2dBFuYBHoe9M79J62jVgbGfYoj8anarJKov496ja5kvBwrujMHB1DMNyS71jkdpWCrGnaSTDoHd1992Jycx66Y",
  "key20": "4AedLxb98vCRHc5SWPg5mSYFBNZuYVp4NnMTXDqpDYmg5xEDd38bef1eDnB3J1Eu8esUTeirDhhuZLGFKPaefPtd",
  "key21": "5xDi2WUx5pezAQbBkBQVvH7UXn2gvZHMv9bQgoZtngn5UxdF9ZNSHrWqVCBhtEsC8mKTfp5bKuzARNQqEcZJRY6Z",
  "key22": "4xh6iq3DDrByZrrGimtqqvt56TGwBqGtHx2Aa7v17BcdfCHpQuD6HHjARiGMCPrx3yhEuFzW2cuJJydcFGcp3BmQ",
  "key23": "2o8sa8hQquduAZy4yZhqG9An3ubveK8oWffD3u455mSoysrsn4UdS4mihKbkgBd5yKEq68gD2SEXMmSAwmRfPZmP",
  "key24": "UGVWD9RYDNyAT3Vw4AJXgduG2bmHjcPeUP6sRNprGD2ABbBsdkrZsTNtwsCytJ6eeL9o6QtSNFN6PsVa9H7JB64"
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
