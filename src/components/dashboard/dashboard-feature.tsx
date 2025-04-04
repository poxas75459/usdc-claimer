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
    "4ZzSoF6Kc1dZJ1G7gTG6J6h4x35M2PrpR1q8ucr1oKZLRwHsm6P2qQEWFqj1nPa4ttEp4hNShE1yjGw6GRn6equL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41DuytqkwGxNEEMyyxC2jqRoRLm8pkc8GChbt2hiE91qSYDG24HLcDeAkvRyDmNnG5soLduxRMKtw8e3kmvsYujU",
  "key1": "4yUYBQqdnEuhv63TE5hMvk8zd6spD6x1GHRiugaSmHb8KyxtM825tpSMxpnFThu4gBxwSdNNpfKtA8gedf6vjuAq",
  "key2": "63WAMdbfaarVpV7btzmwu8kJbpYApRe14nfsShsw7oFieXRhGi7VgcBuHdW9mQz3HrGNpn3FxoYrkcpTsF6sWfWV",
  "key3": "nfDJPHLUeMurkUmaZGeXNZUN3YE77CpPoKgjZf3CfMf6HBs42J1bV97VaHcVSBK8QhSzNPNphSwZ2tgvYq4MT7B",
  "key4": "qE3VyqABBcN1KGUFW3naDJHk6cZ6ECVoVn639viqZfygUUzT2DGSqBbNeZNiYojxepn9ntn5TyLrMgt8WdrogRD",
  "key5": "27n4jjicVvW6V5VtFkqJHzHC5d5wwBAkcvtoYuVytrvLqzAQJHoPbxvTidNpWY1sochT7jjrdWMM7o516Q4vBrYH",
  "key6": "64pdXysChVRvo4L8B6j9UKq1JthXcCTb5XeMGiw5bdScCj2nSW8bvMPhJsKYLDQkJsTY8KNxwHBNpiDtWfxJq9dt",
  "key7": "4ygyTX71TapdxsZqsoQruEVEeadgLhztEcHoiSCRKt36yu2Xbi1Di5o4UwvJCnpvSKnNsCr9cVwnTMWofzJrrsC4",
  "key8": "5GumHb2yeiN7pL6DbVKYgCAT27NBjsanG8U4fRMg515xGwTGChUS4dc1oKjNpg6bvfXJMr1rmxZYqwyq2GEZ3P16",
  "key9": "rAbh66tfsuzxgeVQDBXzyBB3Bf4KdbR4ASZWJjQRxRe6dqWKG3cgSeZ58N5a76RT6WN5dfYtQCSxm8YZXcMv2Et",
  "key10": "2WYND3zHxntWK8V9H7Fbm1GhWoUAGF6bB8NVKm9hEXPkP38yJ1FiXakU4tCK7iz2QcG5czBft5qypKmv5JcTrX43",
  "key11": "5ikcZbgugjz7RKSMmVWqsBvAz3Emt9nmPbnqMsSiw4HZ7jfbnEF5GiorTHG6U9EdZWGuTwQDg67pajQggvjheLfW",
  "key12": "AW7iepS137CSZAw3XFnGAG3fPwqzVXdQqfeHYxTrgfjPydPNR11LhYRes4PfzW385Lhb8WfQzPm9FvDaWG5jzPH",
  "key13": "3SrLwks2vCWQdf5VEMTw5T5Xi7N8NvtnzS2bnziRSWKKDyMmgFkyaMY5PMWea742dgMCKP37yafsqivxJvxFPdCj",
  "key14": "48xE1gzyYbQpVsepEkX6zn96Zk8pr97zZvVpmwucuw8WPCbge9jTPP4txM2vqUSmZopnY6Zwe6HeRnjh7MGKXVZN",
  "key15": "37DWvLiHVYnS4xm5ZPREo6sjvWztFBKxrXGv7DKubiTxHRMtecsSSu1WCxqV8qsex67LaB4UaP3tXNpgHRrtqjht",
  "key16": "dJf2nCiwVNsuXPg5U2e5A31FbhuM4Mu5pVe8S9HUAtzU2LSdWS9dUrQGtG9qVeYYzoeFVCuC3TL6CerLqu96Jd3",
  "key17": "4f1rC6HYdj1Xs1V2Ne7iwkhiQq81gH5FhjAHkyjmsvKep8t3UgjPGdzt1CcNJhiNsqyJgnuVX6MoWLcpxsqxWvDC",
  "key18": "53kLN8vgjosW5RAYDDrXxNPocNGW8pT7tbHmWDUCdbpY2JcQZ4tqDT2afV6JMQCCM35oHdf6mK4dawWmL1HmbewS",
  "key19": "3bWtWrjRrjoMoSFXDrM5zXrYbyb7hQoGUEj9rHXc5v4ronxLni9fxMYF8aKiBSqGhnAL4fDSBd9qEwjVam2Bdj47",
  "key20": "5WhQUhcfUab6wsFJrgzteAL8ThxT23srdzj68JUD6CXTciJ3ArK1YSntxbqrHjBuTSoqFYDoLJ9J4hrVuMZibu2k",
  "key21": "5grnMLCkR1ruL9uNeptGx7BhuPM6ekoC4XKJGVBe4jvxdjeZ3bXZANv51Kcu5HdXokgjXY5hTAV48LM8wtJRiKXS",
  "key22": "3xhrpcRTiqCbrWs3EKn8vtXSXS4bL7Pqhi3saTk5pj4wYp9s55uhunrsZS9cgWpY5FdN2uVnRcWdhWUs1NkgDTsR",
  "key23": "3igx5M6T3bUCQrcinEztrHj1E6ZeM5zvbNvVsLMXHeNV11WpTqW6CnwRwjtWifaYbmaD2B1qhsRgA1PfiuktnFWZ",
  "key24": "2159UbgZw1bUBsUTKRxjquxBs6vfyZag7eNQ6NnWY1pBGic8ZpDrp5rFDHaugtwYNVPEnKFt8W7AkjoYFAGYPF6s",
  "key25": "32Go8wCcMbwc4EPb6n2NoTGRLS98UXPSEayJN1eCdAwNXfUi6fmyHGpN7mVfYSGHnuhjVeP8PdCbY1h4sr8jXQ5s",
  "key26": "27XZ6Rw4tQ3n1CjMnvi1QgmnhqsMRFTEBhCrVTxSsUUJdFEqkk9dvzeUbhKynkL7LiMytmZ6VJ6sVNWnLuuuuK4a",
  "key27": "3mHKQX23ARucWbpvMKJRZhPrcPoDgLt8QvuDmuxLcdhTcwQRKhHmt4fL5MYAqZauU9RQ9csbBXu1YqbjNRs9m6mo",
  "key28": "4yb9RfkhfPkJz3MHCDCkdrvfKdM3mDU6rLwagP6SnhGtnwq3DeANZYzKPjH6WLiZj2p5vmk7Vxpv8wcKNmAS8HyD",
  "key29": "4wJbRrbsrHYybhtApe4aLTYDrHMqBqKNoNUf2Vd297SLLYn5NS2AnKAmRY2WU2BYNxWVyobons1YsR4bATgNBEV2",
  "key30": "3ydwi9urMKVYm6UkfVjxPixs8gHZ5i8XsdfxbpX5tqQk9HAUWDmasY4dSqot8399WXfrKto9ivJoRvvUEFAcM8Y1",
  "key31": "2fVHBETeVSXU5bxoL44sAtHYmh4GKmuJDL1KkfAT1UCAeLP9B1yfWVBphcMtreuwisqikumv4QhrKF4qSBsSAXML",
  "key32": "2dpzjLHdhxyTM7j66mR1xh3YC97NQyJCnxW2nqm2SwDxuxgjEPyByLS7Pj3Qx7dsPXZehw5DzeHjrERz7wFndBsj",
  "key33": "4Aoaqf1fNomYCnkgwQZEcQHB9Bpwud3V6MqQcNBGq2wvHaeeNNuhCxs4ZeNarV7tGmTrSdCogRAMCN395BJ4Q3u2",
  "key34": "66ETYxgQuJDB8bCyiUbwJ58owrdJr1GF22eo3sixyqoV3b52GdWCWwfD2kC8CwRnfcmB1kEcWkUDtopMNk45Tzo7",
  "key35": "2hxBxWAhKxH3U8adHjwdDcjDesifj2GGcFq7zdoEkrSCbf3wSQFiX36rRxnE75AkTMY5kug6DJ4YsUMejnvewsJ4"
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
