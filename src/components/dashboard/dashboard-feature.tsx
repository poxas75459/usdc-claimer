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
    "4K9sCACyfgzdN7dGTU4X9uMZmkUSbGqhynuyAgc9FSMx9782JzU7TvEAya3dBF7tMGjDh9SvpVNLrjSZGa7cU5V4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fCa32Z3rS3YCJas88NiLAThhU6rYQaHhunG4aCc8M8tmhRGYWBwQwpgveMqYza1ULRGWkMQa4dysgFD1ZAYMYNc",
  "key1": "4iyaVj1eWW5bthA3HxN1bfW3jqtQGrxNR1fCcjHCny7YuZmM3FVVNEarG7kTyF5g2nrCHRnJoZhtTErgXYBpbAzf",
  "key2": "2TZbHLdowL7tpw3Kwq7RBob4hgUYexz1rK9amfpPXDKnGnPdGN7zSupv8VR7axSN324GPQDEv3udGrbiQsLSTGx7",
  "key3": "BGeTqmrvr7wvPiNc3q8whr9wEct5Qtw6gTwr4mq13N2ipP35CGzswJT5KmSbjARt1PAje4aZV1YzYUYppQr5L3G",
  "key4": "3Pq8QygMGSoyKPcHf6dtNyc61qW9RjcR38dKNmn4KMqWSrXLZZ9ySnjgL32mtBzYAwWwwqMSEQdTpzjWMqdGvexg",
  "key5": "42dRokN8n87u2mCDbFZVRMYrpJcicWzBafHScWQKZNXDR3tJJrtpdwdV2X55AdYdkG1AdZLUjKSfcxMTpewZKaVG",
  "key6": "5zHa9Nb4ie3DmwE1Q2KRaFScNkbE275auoS5NfPeu3TSEU7FvgavePdLY9XVtnZ9pJW5yDyQ7frPcYCeMeNFSeeU",
  "key7": "5fTLuCdmJc55cZPNFwm6XYY1Q2ZcqE7uYeHiVjA8rXRDRyQy5ercn83aJh9BVpVuajyrqhbyGx1D1s5dbqH1DYwk",
  "key8": "2GzA1Zc7c4miCejKWoYfMkpD6bqQtv5tL2nurfNdABXFWZrucX6Ssosmcxc42RiBXT1Hts34mc4TRxYntmTXPBCu",
  "key9": "2JHkndjJh52ynqSA9eFt2BTPS9uAgscKw6ggmcdjhz4pWj75KZZAeHdAyRdPxxVd2RbUWRK8WuxcHov5vujwyfkx",
  "key10": "2pztLrp7Hw1yVzod8Zx9NRB1BCfLXfZJDpNGY2GCx1fgvYH3tXsBjsSAPu975Dhgk8nN2xfLRgJKfJYqW9Yp2moN",
  "key11": "4riuP2JbdHFSTFCBnPRAtiryjim2gyvqo8G8c6gmpX5mbFaAopHf1MxvzFFWG794L1yPUP4VpRLuST8PZaYeh4v6",
  "key12": "2R2R1HWBZKyeNWLeaB7f1k7hnufkAU251aPt8oSsZq5Y2ZJXjF3xndb1cr8V4uXoDevK476s9JaRWQ73RaBhXaxE",
  "key13": "4APacJxcb3QpKN2KwvRMNWLUS8o3cfuHRrx1iW9xRTmbe54QS8xzfcaAthYv4Gd9LAy4n93cyfhibUGJHogVwH1u",
  "key14": "42SoNu733fWnA3wj1eb4eNjeRPwoBtkJ1rUaXPuutJK578Tj1Jej5zt4h524H22sV69N39LgGNqPjxtpNqpcWgsG",
  "key15": "5YPyor8Pzg1KxhkvPixrVCcRiXDoRsY5uRJwzKxocTPUcubmWkYqjJu6Zfd7H4FFbkpFk5ACudd27oBpfJyT1SBS",
  "key16": "2ZQdcetxpojcnXdKrcykNroejKBhrxcjHc4Fzua3Mim1j6RqetcCHNBBgsNNnUe4b8syea8chhEhiJA6UWgVzhbi",
  "key17": "59o6wU7jgoH5nLhJsWySogvDT2Wyze4v8CFqP7bm5rBqgRy3eFGsEWqmAMfay82X2hW9XvV6VYGgACt13WbXHCnJ",
  "key18": "hEtNN1BEw6ZSW97yuFXwfKVhhp7xyiur9x9ePZRa9Yjx24UGTbfSJX3GfsMt8FHN3EveCXLuYvE1hUvcGkKY9SR",
  "key19": "4FQBXjmKAWuZkDyFrUALkEpGVuPgAHBXqnTDuNYEfuEQBP2tXDuYEECtSjFjPDDPWEhVddKU6QTyaJZwmawBvTgk",
  "key20": "24CeGDxsqgFX2fTkrUh7Hz3UF3vxkiRspfG6d6KPtkxjYJ3w4Kqffe9ED2p3zGGv7Q7YNiHJ6GbdKSvPnXjAvrpx",
  "key21": "2r7tn7RpGnwQTA5wSzAnnViX29YcUoB2NSJ4tecEqdZNDGAmcPxCJLQPjpd9YJWjJnEg7UGrceekcCQK7Hr3aJt4",
  "key22": "2M79n8p5vK7pcph3o9vnLtURS41evkDYhq5JCws1q4abUW1j9aE54sUDoLa6a5pLM62V3yakLSEcTrDbCPcYELSN",
  "key23": "3f94CuPb2hiuinFbfg5pe4JxtyUPCkxrfMxWq8CFBURcabBq9AghFHiYvf6srJYtLRCrjjNj7e1MMdQCyYHLXy56",
  "key24": "3raTKf1ey9sgyJptLKBPuRZoW8vVvqojoPjZGK4sQG7Lpt3H33qCkZ2A8jjH6MywfWHvVkqFEuWDAEywhaavjucU",
  "key25": "5ZGhFJmTHvSgFsA3CwY19aoSJ12tg3seSJnJknHXpKvS2Y2FF732W1TyXwnSWiZcMwL5ehG3dfvopHZ8XFvpzU7p",
  "key26": "1VhvD9JsZ8biBTWv4WE4SZfpdNdNa5B7MtDs7bNaZvCZEYxZw83tmtpqMT3UaE1rtoCGjahKmEvgBGUGwPqmMAR",
  "key27": "62edgzfxnwX2rYJZFwygoMdYirkX2Z1tWYFrut2ZPhSrn2iWDsqfZhmopTAvCv1TpTmx5ukCw19nQMGXh3LMmxUV"
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
