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
    "2jBFF6BRwjy2VqnHeJZ1bZLJboyspw4iSBvDJpwbT4CogHkYVCAQiefeLC3Qmto2tGRDU1MASpfxeQ9W9g69xqf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8BANwLNsrjfBhdrWHKgpMRheNKD6py2hgb4RJCjtR8ZGopbaGJJHKpFAWaA2anXwqnk4f7D7r2ALC12faK33Eb",
  "key1": "UFmpVBxtxqpnbEzQcRQheXQPfT7QJCKYY8v99HPds7nxb6ZuD7bthF8ySEQdW5aC79EkSFEW2svy1jSpHmB324q",
  "key2": "2ERty1URZuEeHdRjQB8v6LGRtRSMCrVvdtEHitjS2n9gWHB3cNEBf7ECSrHDzMq15s38eoTfWGDr22jWUXEjPKWT",
  "key3": "5BEsg6pjhoFgC11W38YjLxAj8iVTFccBsFn3M6k1uzBDyHB1JUvcEiFuUrcu6qSpKZkqKMyhRz1UwiG9gBsPoZZS",
  "key4": "3Yo6QPFXwW418kHpva4GiE7pmNuh5sCyAUv3tdNj3gQZYBZ8HHuCCcnnGrgdrDfDKgDBGB7f7JRTVgkTCxFuokyX",
  "key5": "HCrsd6NGS5KVCY2UBj21Qr9rGduW8ny68Gf8dJbziAihPhuMVzJaYHY7p8QkAiotWB4KD27FPrKitTTcVQp6y61",
  "key6": "5a3cLKzjwPtBFYcydgBN37sHj77ZkTzHUjn5v2wK4zqhMhCquHtcFC6Qzinj5ZJ3a5WcAYGZbiUopWdh6r9dG3s6",
  "key7": "3hkDHjL8Jb8KqxDZHrYaGoDy5TZ6L2uYJ792tRxNeuMQQJt9VngXLEPrBQ36HeMntybPVKsjpGo7WW75eMtTKAR2",
  "key8": "2xFMF9mkiXr9c4ctE494mFDWE1pVafs2oYjoEqN5E787vbyyAq9tZ8wEqyETA5gCES91aWRRpNmxgjyUsmk882ho",
  "key9": "2A7fsMUJpM56C43D9eMYtBmuDFWHxFVVHWvks61eNY6ZY4QtzzZ97M1SWGENewnmK8eeVGCx2uT68v2yfZXB9zCp",
  "key10": "ufbpdqxUuPu9jn9johXGtBf9cLHZSe1HqJCKq2JS6YNHNAdVmeyKVPSHb19UXM8XBKca16mUKte3kBGjWXYV8gR",
  "key11": "4XiwyRSoSLrT1bFDu9RnbrqKXwBjzZmi5NwaMhdsQ2exvZpuFSsarbjdmqHH9xt8FRVLRkcTtWaPGe6GN3eHiNpu",
  "key12": "2bgs6ikmscWaRdq3mSruiZhj9RwFo4p7AgYU1oCqBQYgp4uC6wRBXSGMJWpfYXb1QP9iBqtcQfM4FMBSZsXJB9Kn",
  "key13": "4NPX3nK9eKUuFFSfWEUVUw1atCJVe7D4EWacAwrrjKebKpW1DiiP5jJqByz5zDNVCX3DbffwYNa9JTPdtosYtzzc",
  "key14": "TyfVYVxfYPDxMwyCoBYj8Vw8PeWahJGP1KPmreLjZQpv71ViKy21cgQp4XovG88DsWXmbaY5oYVRKVAmAyt2h3T",
  "key15": "5rK6TERb5ZPLDpow8BMLx1ow3Jh5cpwkqLFcsTJUL9WHW1krzKEdsxWyMYDkdjTMajpUaBTVpHSQCVLtRiZ7PcFi",
  "key16": "5G2TRBHphPBqHnyNeXW5mfpeU3rvk2SSpe8dPPRkD29Rcp34SQc4YNgcQmo7HhkRFb9qeZTvn1Urss6rSV8Jt7dP",
  "key17": "3jkS4bhvPfhNjZzXJMTwvsWfLZWfVe8G43pvUTgf9pPC2m5JR6BVEhew8mXD1ntYAx28o68TQBy8neqP6Ag6k7sU",
  "key18": "4PbEczxxcD8b8GiX4po1riPi5mEBiYHyq7tTn2UVUwpU6tqpD2M8QYXmFZRPhXBKb1gjzxDFXhbJvqBgiBZyuXi3",
  "key19": "jByCMpF7FwQcV6fJShmfX2UE7ZEGHaSPXxtzm9yKeir2pt1mkXsah5JTiFsxL9oJhpnhx4iR8oveXefeB7Uwud6",
  "key20": "41V65f3HwpuwcRN57u8EyhQeUtYpz5Sg1MWkMzgvQfDDXQQCsX3qDqZmKZ5drCVy9dF8XC3MVVHTjBhzKdvJbJc2",
  "key21": "3pShECvYXAwuTpLwJgiKihcjPJPPiz5k2ZaRTFv4Z9kKcdPAVsnBUpvntEc1RxE9dXdMY5a1LSc4o8NqtXDJkoTf",
  "key22": "XriXJeMeFNrd1yw5Rd3CKFn4xpd3EMjne8aHoffRbpR6mue7dH4kMp8y35vfwkvTPWWJV9GfxxrxYHC35GrvKjb",
  "key23": "2pp9X5m7cb7dBTGhxEfG9JB62tgmf6mZdqLSxktDDKWym9hAWM7ykVLyKfJvXxJX9FvUv1awvWSnJkC7EhrjtrE9",
  "key24": "3j6hxPUpNNfKq6gfTA7mHnN7tkMcWXzfw6wPkDhGFbwupNbhFthgZAcqU47kYrQ3X8WHTouFGtmVqKX69qqs8B48"
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
