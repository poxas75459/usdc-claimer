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
    "5fafFdgXXYZafE4222BhmXmENhsZsxyJJXexcbRdLJA3ACwXtPZVHsTumfszkQJQtWMK1ERnP2yuBAu58CU92ua8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCarFgLPMmGvNq8gBz9rzb4LKDDDug2ULrxChpDt11MVy49kyP6ckd4d6BhZt3SRviieAN7P8eb1p3fDir2kYQN",
  "key1": "5rytXiLEmT2pFeZVqzu1iJXnaPXpnKxPqorStNEMGT9wRTTUQYWoWLx4n9AqCyYpPTNiN1SKryMqRMTBZ6bmSpMD",
  "key2": "5JZik8Y8z7wTTSSQPnXB5dPzjr2QdipLQ9AT2ZKev5M181fkNnRgdmD4xBUZHwvyqV5o9qzHpnHxhCtzKs1qUMcP",
  "key3": "2kGpmDjWX59oFgt2gJKbLwAMC7aVD1XLFAkQH4eSx111KF2eMyu8tsXajgcMkAjG9DQ53ycqzC2uN8FhJYfFWa4Z",
  "key4": "38LoLzhRaMiiEtTzyqB3fdALCzsRRCujMGysHKuLHND8WjJZ8LkserZ5FGZArkW61wfGhTqaquvuzjMbvmutr6PB",
  "key5": "29qdVoZsbq6PkLkAxhU3tcAEUbrpoHKFnUubLK6YjXUitX5xTXxhuBQxGcpScvDdqQkU26MYegKRLqPejq3pxjsc",
  "key6": "FmyJ8b8vcGefx52eDeBsytfpDyuyhr9vGYDtsZcRQCf47YyjfZnctFXdW7vXcR9BdMz8GbvAHfpPXmh1QrRkVou",
  "key7": "5dHAep2pTFW8MQVFqgEH1veUb5fWXE2NPqASvP7GJAgs4YdF1xD9UACSXtMapgp6iLXZcXQCHcB1mfYPrMuRoHyu",
  "key8": "3aboufru7MScBCm41yrkxbxZ2VV8ry9VZ62wF2wtRCEe3trNCTXwSX6HLNnzBCMcxB6MmsXyL3ns4rKpRyBw9rtb",
  "key9": "3VPQgxchTyEM6MJQxYjZ2bbLK7dD658TLY5wbcJ3BcbKkKdweXMwY2yGjWXdbEkHpJpDzZnSFSQuzwmi1jiXsynp",
  "key10": "eczqPgKhwnfcWQYeBGtJpPN9hb7pALAtwyY41D84EXoTrnR2eDsNekrUd9Ps7BHM4KUapTZLgXSFnrzTtpGCXGG",
  "key11": "51m1JHspR196PmgHVFwFZYdLyKBPq6km1U4SKw3NC2kYthpyMsrBYfFhuWfiTCUxkB67LpaJkEfKT5a2MmyWjk9D",
  "key12": "iY1ZE5ZdjTjopE1Xi9dGu8YWJmGH4jqRSWA8fsx7w5JCaQbCWQ78bVDMuxrxPSyryqFD5nPH62rfHVW5oVH8Miv",
  "key13": "2CDbC7G83fbTuummTUBTPQwNkNuPqrKNWYDQLjSqB5L9ecG8K1eLd5KSa5rgMMNskRxPn6FBBsDGZHZEbLDsMqFU",
  "key14": "5fTCj2zdN9qh6mqLG5KCggvWHhCFdu4WoJ3AXss37qE3y8Sa1kzFeQ6odAK9Xb2SX1i6H9VuXnwkbnkQ4SXD7GT3",
  "key15": "5eiiY2VK3qxJVEmnhZypomXx72TeesAuEj1BVGZ7LH3bvfMQnCSD28vF4HM5SFXhTxFqb5F7MRoHhYLrMexswDA9",
  "key16": "4LzP5tbLU3RRjf8vdu7w5meyvJjq49mgZXHXpzmZLNC62askPLvJUtUoKGoKv8nCAu6mizwQXw13orgWZUcqVKGY",
  "key17": "39sGJ3vFjdUim8XjV2a3VhKjkgmWMNZT6mLvA448STwq3N7QLZEEmQpd81XvVFZp19nLmUM23juxtBetBtmTsQiS",
  "key18": "3VVDB6gWuTeUWXQCm9Gffj5J3yi2vTFk4zvYWj1kcpAr2XLq6NQVHcH6x4Y7PKLPJeG1BYuiXRCMVMQVvimhzFXi",
  "key19": "5fXJ5XgwG3fA4nNXG7X9yHWd9PvFuLzYPxceeDhokhBFCPG65vCe2emrbFRP7s6UbXmLLc2bAWBWDcjYrrC6AooX",
  "key20": "4VEqBdv5ivwAn6k6r5EQ8SiyuuJ3E3K633KDTkwiXWaH35iBiZCF23Lh1d8hm2guGsCd7sn9KbWRknWs2s36o4i3",
  "key21": "3unCE2Xz7oRaRurbSgLrKcQNPyp3gj3FVNiC23yYtCiu75kXD7TS81DmaWGv8i5d2QueoGaLtYKjKdejr59Binbb",
  "key22": "2BT8kapcoPRjqC3HZuh5271Dvbmu38ZGeG6AQsowoaszKdrxStbj7PHkmvpksWM75DLJydGTVRNrYdMPyxgqFe4W",
  "key23": "3Wj9Nj1XDEjB9TuFq6vsZeqKSCLSRtKG2QUAbEbQPM3GCXFzNiv8ECXXBr6wdRUrCQHxUKq9F4VWXUQNvdRTNJVm",
  "key24": "55MtoQ4xZXSCzbaEpnby9SWxPVz4gN1qFpzqgFQ97Awu582tiA9fjetHexXZi8n6VxN2ubAp5NTcyGP2VJgvTo6s",
  "key25": "3CgWgdmyTrtmb4F1JfTSJWoHQyBv4K5MEwmXetg65ENxtwXazszAwKLhXQs42gt2xdoBe5car3kKqoydBtmYMDPz",
  "key26": "4CWScjhL1KY9y4mg7CnLdpyzwqXMM8dYvG7eZZ2nr9qMifKP7QzVggZNASZNmtCWrnFyiBXF1oSMYXh1oXNV5ScN",
  "key27": "2aCzFm7oUDTsyKGYpVhe8BMjKF4C75K2Asf1w9aBmgT2abBUN81MqZyfD9MGMYhSaQXZ3Z19TUiQg7HrTZf9pgGq",
  "key28": "4jsqiBWnx1fsKu4tPHCHPrF3asyLsmCHUt5M117th2wrR54DzokpCFNQ5pHcDLVAAWDHzggi6u3nBu7RC3NBFvN",
  "key29": "3AMh1x24EQekoeuypnPcbqEx432ppVXA7qLZEW8vNJ222UYJ29wMbpPTAS4uXQbJGSgtK5RN4t4SQkavR4qrXkS",
  "key30": "5Zpqug6yvfTWwyupFFhWWN4yYQs2nzRbKHXZoNgfcbDvFA2TNXoYNtaYdt512QtxKU1tnAGL385BNQtsSK3id5Jh"
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
