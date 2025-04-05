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
    "2TNBG4RUK63r5RXzHZiTCqwV5NsKUqNUnWmBaqAqQGJFSfBh8Eq7EWYC92GFwUK7vZnt2pg9HYnqts3ZQvVR7iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iSHcVZq96oFoSAm2fAxSE6NwPqfoCCnRvWdQMw6iMf5GgaLcnqvTcqfA4cb3GachjcnPUL74u31knBdLpkjbUK9",
  "key1": "4C7R885kZevsXU1k5Jhwd52FseNxH45ohjqzhoEvW5MADdnCHkkF35Vjx6A68fDp22Ef4qmdzMRnUHCZFDmxvoJH",
  "key2": "4mwTAYYsrUxHUqFvZsQU4dnMhassoT8ejVPeoATk38iDv4Xj2k7LqgTCUGivDVAU6MFQzvJPQUGgVnjv98cQdNnS",
  "key3": "KXnit8ut1Aru4aWPUDrsvE1rDqKVw7XPebwkKhqGhYMvbrqQgLd3qzQbVDJhDE4tFBEjr6pRftWmtoeSwxPVDd5",
  "key4": "5AjobKhRsxW9qJtEd1djtsKCrT4d4cjL6g2zRJti85eYfcuXNe7W4t6BXsodivfwUyo6pFeLuTd3TeGLbiLDSD1J",
  "key5": "4fWuVzdT2hGnSsPAtq8KeysizoJBHocFzCjFbnNmfGTdwpGoBdVV6TYBmtxLguq1ZzqNyxLJAoUTrTtoy9GKPJdF",
  "key6": "2LrTE4TmYDQTLNhsjFfs4dC6CgeJPiHaHCjunZzWC87qVmiBVGs93WPvGAaPSrA31St9osUJVhwcWUYjtAiG51BN",
  "key7": "3dv2KLACHdmP22rCn1pbaviDv9DroYYvFKpTKo68T528mAww5CvxnX3ranJ3HDqqqjUWNmSBYjM2jyrCtUfN87Bo",
  "key8": "3PptRqLyA2pbH9BavwGSYUdttfcJRAhA73gm7SLeVaf9JmnbvenVw38Nnfi2GXzcdxTjzMDrnae53wr9v75uP4Us",
  "key9": "Ep9XfdvuZiBk9WnNziZFCMVYn9b3hKZ4k8K6t6PSsLzWh6E1Dk7tQowZMXazGC5Zt7qsVZBnuwhShWhrbNB8z4g",
  "key10": "25zQAJHA55gSQUY1MQMYgGRyzZwdhxMPToLE5MnsPCd7h3qeh1w9RQagSagHJFqia3JJDRPz5CwLRSFN8XPrcmcn",
  "key11": "5eyDvDm8Tkg98aT8UGPaDzVtqNEVE7UTmjRJQ1PgFJnCVn6UL7hL34YbYULCb1opAM96yyLxfZCUsixHHwVAmaY4",
  "key12": "5VUwuuXx4heDPj23DZTgLB1HwLV41q8F7zeprVYePSjBRGiUzgKQqRGLY1a4RRvVSQidCbe5w92eBZS3mHHN9Kbu",
  "key13": "3bCtCDUs7FGXzPvaP3fc8Noj4FHSo2yWWBReaCZBozV7uECknHG6hC5FHVPGuF7QoWwrG7DZhp7D4b4n7DQxPLS4",
  "key14": "27762N3QEHjxX9PgUkt8vPSx7DLjwjhBwSfwRcWimWwLjPcobkTjg8v4DBZouLTtxj5yzrcfSQZEozWQGBnCGLxu",
  "key15": "3yn8hWybp1URTbsHTcY2upibGA5Mvcj394gY1BjaLPdu9VoAYYPQWo9cYZvsfdMmUSw8PMxXtBR6mbDxcyXA37pf",
  "key16": "5BvNXMdr5ruWyvA9BRA91QyKVv5JMNk3CRN6SyVvSp6wTSZh69N2GKHwBy1zaJXtwUjLDJsMeRNJprgpcb1WPohg",
  "key17": "5CKZeBANEE4NVyk4QNDj5unfdgR6eVH77CQGnf1mGMLoFJpJLLujYpJTMs18ypMEBnfhSkhBFENkTjzETurHhfjc",
  "key18": "3em8TQPxPvWX9DRNUxaGjF1Bs7poeci3d2z4S5y8Qfra8VMRogMiJ5RB4cKs5FEgFoky3ZQJukKDu7zE9qNmYgJD",
  "key19": "2CtPGNE9eJMkG9HTeFHzX2ajxhcPPwT6Sagus8dJU4ATdhh4JcYyiYTPSDPYu9LCJXrqSGFmJRnPyGzW8R3pdnWa",
  "key20": "SgTPgz5XvpS8MontYF8EcLN2jFnmqq4cxrLQnwisPXAUZz5YZnhwgbrQk2AmELrTX6k336pnF72sJQ9EzgqZEKV",
  "key21": "3ZT97QzsK9FEzibU26V4NrSYrpkuSUpoPjT1pYDjZr13JQG6FHWpoTxXrgLsgWha5jqop91ZxZ2toVfRyua32DbY",
  "key22": "2ZHwhDqqBS2xrgNK48a3LPCeuh8k4KBX9hKGaNmXaBemKv9nY8hNn4DzeJMQqcsJNfcC1fsPz4QgDiVGjnVb44qF",
  "key23": "4qyeDsL8hbkpWVhi6LWuQMn6w8rVhfpBV1YKMvFCwBWCjvbWnUUMW4C39Z1gkJwTTd1HuqbMj9yg5qbExxNy3vzB",
  "key24": "57aXKgmMuW5YRUsCwhvDYFhCwt6xdnYfo4K8sJbFxoUacKZDu2FGaQ8sTY31jy8NnCMWWxjYCEgFn3KXE7unGMSz",
  "key25": "i7Z2nKzgdR8svRDgRfyd42UctBFYbrXud7KqGbFaXgkt4XLf1znfr8STHc1yUohMf5WKSLeeydLQF9MhkMQgGQM",
  "key26": "V6XbCfCgB9PPQ3ynymXXWzL3ADBt6hedVjneick1dG3sQ6CdPhwnDKzaexGKY3mZR2eyeyDs69o2kwoL7xFyVbV",
  "key27": "49WRXZWsqobQy2uXygansmYSfZpmo69nVii1GYyRp9fe8QvqiCKdXYUGaUKFJZYE4V3bYAKAnhUHXmfULcSztx3T",
  "key28": "61SStvsdqmq2k75NW5WZp6HwbqxPVgq1V2FTWNRKt15iy6ZGjMRCFP7KT1MSWC68VRdvQepJnX1wR3n9LS5o8N48",
  "key29": "337PxsLEuqyk4E9FAN9w7SFh2qJNdcFDudNKtB19JJJVCzHi96NGbNE5ZL9pp8wxNt4zK6rKH7bpUtx3vS6k2WDo",
  "key30": "3ZDuDTB76fqTZxmpS2zhCggZkzqeTWGUpxzJ6uVHfa6UC1wGU7sxc8TohCi3UT36w5cBQAoVkVkiP4C8sxUkY84a",
  "key31": "5m5jStHKwYy5b1hX1kJPhLApVChExe45abL9BYwNL2Z5zZNp8Zab6r6bstsg7sGQaKzTaQurcK2f7uQfNmTxS1gc",
  "key32": "5dPDDv7mRP1RwLP9sRwDZExNuSSWmPkgGcrW4e5ocbEQggBvbULtUNAA1hEgMWJfjWYCuPYNZz4kCF8TvfjRwuib",
  "key33": "TwMed4ShV4tW2bw3rE4iD6nBsFRtbxGhoBXU9rEARj88mp6EoztEdE8QFpNqH9z8Z7s89hWjHs5uroNHaP8jFMx",
  "key34": "5P3svmNCcSy38QuHiynY8vynLMKDKftSLm2L1Ptrk9bWky28XnkNGc6AQyBBbrqEpTac6G8127M6z2SdWMNy5KFm",
  "key35": "4nyrEZGcFwZz4rJpBtgHdNNuTdT1gHtZzxFBCxQCRgS9vKdcaqXmWvMZq91xet9ppMbSaBVtSaGHDafB3rwPDYG7"
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
