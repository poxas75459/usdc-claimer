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
    "3ccta1ntefdvHXuAESYkQLSFxJBgfkNMNCMbJLb5oLbG6WNpnTj1uEPZwc8TwyxtC1wzuhE8kTjQEVB4GbmjKkXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s32WXgMttwzqshgKwxH9h4ESuvAJ2SxbRWv8fx1EVb6P4ok2SP2BcX1RA35GasLr6uFSKoj53T7X2CTNM5n8pxR",
  "key1": "3HPX5rGG8Vz2nRSaMQA3htumDoFmQ3ZHx5rXoG6Em3vU1domeZF4aJF7piK4K3Zjk728G9sHfgpdUrYYPrajp731",
  "key2": "2yjx7jm891FBJqzK6ETKfNLhPA2GCAJsCu9M7oKteFMCBzPFZY9FotrqBELpooQf7tE2oNCkPRhS8y4tJR2w5LcG",
  "key3": "2tqYvE1dukrHbzqJRvXTs4dumAS4pqmPTa6n3frioT2jJC9UArSvA4vziHLE2jEkgSQ2gmhkFyAQC9qBGLw6UXmm",
  "key4": "3nU7CKvD8qSmQJ3xv4t2ENue69epaZfPF2KdCj8x8DygiXVE7xSCcQaBETEewuC3xBeDmc74AqBP2DvwHfjbr5CW",
  "key5": "4ybo66AMyQkhobCBo5h6WxPt2pPVDxCxobVy2wA37uArAP1FjYNZNgb7EXP8AiD8gaBBSDMRqXwauvHBHUFb5sBJ",
  "key6": "qaeJgBmjSghJJCbsh1GJJsd4orQfv3R3jdqyMWAk4c4r8rH3vyfzgBNXRAjGZcRoikt2eZSyGbjcFDtnrMtWCKD",
  "key7": "48r2rCS1xbMtUqzLecnnYDtn6zAhCCEyz4KGzGxeBevgHKMokFoFqd3JQeGdqRyVieyEgcEv4Zbu6mUzn1djjqrL",
  "key8": "2st9aHjeZQ1pqj4Ka9LLeKtfoLHKDN9PotDX8eytrtm5C4zgbg2mv9vo7JPHeBsFLHQPfEqUaGzCj8kHG822aTvs",
  "key9": "4RoCSzgiN7qeuWwd6YYrps649HjZdY56VCDMW81nzr587ePGAYU52eCxGp8ePAL1caZirdeBrsF36dFVn9rxJ5fY",
  "key10": "32QWDkGhprZ2sWQ8HdJpv9dKSa2noBksRfwBVGEYZ1Scbjc9RxYfEjVWoHf8oYr8EA1hjseaNHBfjAjpfeUSLq1B",
  "key11": "sJcAFcZCze52GdK7MXLqLRaMaT6kUm827SS7udKUHnG5dbDM4pzf8ofndpYoarAa6XYkJx5yeNw1dYHCnNaVFAd",
  "key12": "3JbdAbQH2sfhn9zKbWtEK5ftEs2URDC5GXv9wMpUKEXgrVnmmTfucDfv3cJMBAcbmBxWMhuqeVXwoH5fkYSrTzWY",
  "key13": "3qrc41oEpq2zmfGagLStpR3bDM3MKRU7ZGwvQ7FYenLA3HxUQNzsBKAPZQgMu9Zd1T3gR99vT5FkBkxcpWJYjzFr",
  "key14": "3snMo7V2a15qCaS8rLFgZiTMQqJEMJiYWe6tqfTud36PQxETwKXJYL8wfgtF9ifkxoYAP5cpNikFAe7HB4bG75PV",
  "key15": "6213DMGqwkX3Mz5Enesiz74TdkJLvMqd2FscYNVjS7594ZV3YAfkh16u6GiJngwX6wxUJ6zGsQjda1KJG8Yi89J3",
  "key16": "U9N3KVPHDmDXKEDMvM1CwKC2CWXW1MvviKER7Sg7Uc1YwtXNsLStDHE4TDx8ACH17aGcdEbFihovn8RWMsE7WYX",
  "key17": "2GA8JteEVez7XBroqKKLbQzytU9ASxJSZuptNdazGvwMptPKSnMboRvfs85DaEBbuZTe2jhq1ebmdsWio3JFP7ni",
  "key18": "2K8GD2JmznowSgY9JHqqdj86DwBbtpKE2V3GsskuMAXw4tUjrb67P5dUkuwAXSPtauuAJ48getA1hwP5X55bsg1m",
  "key19": "4T2SRYxdCK9ymrYuhjjD3n25qyn7TDhvHWmDaw9SFGEi3QtC3p2CT2dJ4mke97EqaypiaAPgnp1Zs3maLpcJiXXM",
  "key20": "3RDdQjShCffLBjqJKXWRfpUNgNVPGkgifTCSJneUgsXnKUquKMrmYBmpigtn6XGLkohcL5ARLruDadxJhcBMnAXV",
  "key21": "3dW93teFUbVVrt3Wvqe1YueYyFxx2BRFk9g7Biqbszk4hzJke3cFQhmXy1sidHfZE2Vu41du2DcMZNMqybCf4Sk7",
  "key22": "J5Kn1BatmezHhDjrka6PzQEKU2f6Fh8ohxdQ8trUNPHvQR4A82RwtE8nTQ2934v9pANvRU1sF8wVMxn5dFDxxYg",
  "key23": "4oY3a73N6pCMRowNBCcJrFpdiZ9bX4nAp9PBUSSuBvquMkuwgNefcZ98CiUFoc1cZQda6RrwQJnC2wD9Fo26mp7X",
  "key24": "GCi8FKQs7jUxuyfhzhgpB6LJCRmJGmuxx9yFhvb9WrYktokJCHWko1E5kvNvVer6Jq2hc3BVPrzWEp7jYwQ36qT",
  "key25": "5pm32ae9HcsEdtWg6w83Uv8vWGLqvZyq5puHJitDrwfnu6vJCCCAXf4BETiY2bzHNddpGkcCmHTE6cfBma6NgDVU",
  "key26": "2YviKYctiUP1XRo8hjUH9bWC35iymDYWu7FzLgKWbCdB2132ur3a4tXPdiiHJh6B6cWK81CpD7Ljggas4JDzx98",
  "key27": "yo9QB55efdXnJi685R3QdYB9TTn9tZEYsrdPyGCKoxjuhcJNME88pTpTTH4axSPwGpB2oRgo9dLCnnua2t6qVoa",
  "key28": "2sUWZNkzVRYt6F4roYXfBtDZ5jSdTxCkA3jJ5WN2CGGogBZwj852J3DPDj5jfhRJu3rvNjCKuLGs9VkkNNZY2iBD",
  "key29": "i6thcXsKeSpbkXJjqKvqomaPxR7rZk41yk82tWSbUADnxCUBG6dv4pHH17iW9Yo11CwXUyHwM1CBWWpALbuhwSa",
  "key30": "3YUpUcAjaoZJKBmE7Nm8LRTTwgeBeGMCA7PPvUnVAMDWu4prstsQxk6rjh6LT44KmUZQNAJwsnqz7Qo3U7K259w5",
  "key31": "5SqdAhuaoPZswbDQmiRbF9GKR9iwt6cjMxedwhL2W27644D9wEmdgvtgtxgGXLrhrY7nuQW4EikVaawXm3uony2W",
  "key32": "3zJGX82XBUPjjAf8DmiMLoQtJ4HfwsKHyfxr7Af4nNvW3UQ68DMgXMFpWLe6nCFLcCPQZ6yLauqz8rau8TNamPy2",
  "key33": "5QR7RsAK5fdZVKi3mLk2TDfhBwv14biZXX1U34Z1NZUeuJtpJvnLfg9GmqX1oTru6atKz52gfSo4ka3azpstWL3h"
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
