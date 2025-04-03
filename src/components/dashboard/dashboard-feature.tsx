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
    "2nx16jSpmGPEkHDqmJXqbn1ZM7Q64q68FsZdaSGPjhLvFmLUUgCXXsqgwy5A37jQbyhMJZRXFjacbkpFBCJfFGTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JeKAb1b5jssR9spiVYsQsPDKHXQGYPvfCQaXLn4WrPNGS3GZ7AwamZ3zySj1RjRQN7BpC6eetcRGPSfNnsUPpEg",
  "key1": "45dehoUF9Ng5rkY2LEWcYqWK7gwPQirwLbUXCunez6p3W82h1WZZLeZnkzUvpNRW3TxhPnLAknziKCiabFbiWYkY",
  "key2": "B65KHzJMj6aipcPVwgRBi9Jf25LUfeKeiWVTEyPAmFC2xM4yfokZAuwhEMg9hfm4hmFReQWaXZtbgQsHmhfayXw",
  "key3": "2j7Z2R7gKW2geiTAkHAakDzMnSrhdtdtp39u1JysRP41DtvahVb8y314WbmroekKNUWjkMwbtafmsjN4bm2zTcZq",
  "key4": "3unws9hvmqPVz7K6aTBtAtQb3xu6C3z7Py5gwQyybe4Ao3mcwz2z4zxNxnqpNSisiifDwNApdmnyFLokHNxqK8KS",
  "key5": "2AUBY1cZcNtedvaNQwCvD7hoDJAZTDzBcCAHMDL92v49mU1bPRrKxCYJYNNYmZ7ph6nCzMEe1Xp9UjLbLKdgMKCw",
  "key6": "416GxHosxxpgJgtoEcEdZzNS7XfoDFGyaYi6BTBDt2mDCZy56uaJ9FTAPaqFSyyARR5uRykKBhPfH3ptGVkQByW",
  "key7": "4y9VcnBXRWtvnYK7dwHwCvQS5vUpr99YY5kRKypMxoQyFM3E2i72T2QmfVcuxxuJtvF1hHkKYkeeY3pYHsFps6ZC",
  "key8": "4c1JDwN2SMYm9rgo3W122hBhhzDozG7Cr2XcP4kuzZxAFHh5QCzvd2e4PmoLydWqNGuPE1mSCxNNEqmSkd7NV6fL",
  "key9": "P4h4ampXpfz4Jqk2Nz2F1tKEP3pZsYj5DKtda32Zib5din8mKfnsNcYrBsyBPjtBcRr8frStfsk1LAGRKy5gmWF",
  "key10": "39YzaAQ9CZFdC98ueUfmVjQfFn7hs5xgRAEeUwq431VpAdUhfz8PYjRqr6KvexHx4S3pwP3GdbTTuhe6nN6AWvbP",
  "key11": "2EcybMjZCs7M12AwB4UrqwSZsHEDvNV2ej8GY92Q2n2BU2ysEYErBqXeZqbF1m6Jq2Lmr37eqMyYV1sBV5JNx3cY",
  "key12": "4hgTFungnWmemwnZKXv19xUfG4Gyd9cgziVvdeKRymUKT4tqceohFrodtgMr5u2avvTiAeMv7uDLXQJXrwjSyuMA",
  "key13": "45dym3ueARvRkCkuYF8E4EmL7eFFBppn5UvU24QZBBFaCb7jiSWK8XpY8PuLo5bFMau7NhhcFdeB7BC4bfom1bEW",
  "key14": "WP4jMK5atj9ojkz38HsSq3FsJj3Sks1QQPm5LJRkxk1he7NULhBoxwBfVMoX12dF2k1L8PvLgeAkcdtSn2HvSHP",
  "key15": "sKs2Cj6FQ9Q65aa2otPheeT15p5C9CTVecsF9hkrEXvpR43z67ypu9SL2JcLdKTf6sxkdFGqaTxh316MTqj7Y7G",
  "key16": "3os4Ph6ixgjgR2FELViuhNzQX3idFvRrxw4TTjHKob2PfDZbQ6LB9q8MkCg1VPkDt4fevjcWdaNm9aPqFCvBChfG",
  "key17": "2eMeQXxeZGtv9xionRyXyn17XpGqLzXz8y8auqzz5FE1MJ9HMNhJZE7zz4DND4r5myPxZuuYUVND6r76NCMWCRri",
  "key18": "4nkjDs2kXxSPh9MfyxWrc1chzxt5eWixXDEcHCrPhSDfeuGronRcCfb36UAqsvNvMEbtWJawnx1LwVYbbKjD4Hq3",
  "key19": "ZAW7xcUkPXEcJrv2SBDdWhd3NbPVbYQJmz61y7YRYU3CUr7oQekqWh6LPgMDPHBriEwmLsmJBRFxrsEUqWNvDKs",
  "key20": "5UGsfiMAhw5Li5DmT6EnLjxLzFuZieu9zynCouosDLKmcgq5pUtxswb8KXxgkvmi6q4H1sjzHHSFfUoEXhRUGYod",
  "key21": "3dV52qCaMctzjJX6NH6MiCVJhiEQb3pVRAV88Vt3CYBaGKWhH1reqqqYNeujHaixsWTLxbCwwsjhce6XGs3yNpoT",
  "key22": "2dypZiC2D7andoNhj6y9enD9cmmZVeH3drbr34jFCc6zjcfmi5PVQzbiTNsYXT96GCcZwRCL6fgLD773dFfxKvZc",
  "key23": "4bQPb1opU5HpQgykrpNiWZj7xFuGZURkAERtPQbpzYd6psCbQGzVw2fwr6YJET5GmjUfFWGbugdRmiWmkYc6f2va",
  "key24": "3tCH1NXs3MD48XAZzDkrkFnEeXGNC9CsnE1tihpuqw2bPZP3YRznxEzTcnuT1M4YjCHy49LidS77YTn3VhspHNvb",
  "key25": "4WNEL96Xed22jmXBHXjce8e1BgbpoX6WxUX2rcmS2nZGX4eEabYmoHhFD9jzJRHjaj2zD9hGdYBWSqgDSz3LTaKn",
  "key26": "3RQFFAMQ6iBKqEVWoLySdogbdSLoCX2baRGbzaxtpKdbLDyhuygz4ib36JDNM9EWw3RPh9cpWwnXk6mutN2wSdJK",
  "key27": "62UKE1ZiLGm2nE9B9NSAuC2Vzh6tQG4S7Gp8HaWPESzv9DURwUgLsVbNdZESyvRPzwyWMBNaHVddi4Wg24ud5p6i",
  "key28": "31gLWaJbvrEdBbWoEgdKy6h26oxG5tA5CtRmzXnDZNGX9A79mg95cTARDxoCF14gr8Da2zBvCkn7vvqWxDG4EoWq",
  "key29": "2n9QCPho4uSTnhad7MVdmvzQaGr86Xd7MXNi6UfSf3coChhUvxLinKxKc74cr3L9S7S7B9xQJdA1vSd1gXYkZ4sE",
  "key30": "34MbfV1hUNQuBqFjH6zo5mkLJSo9nftxtEn5gLzHA9cCRHW4rVLNJUMX9SkUZsku2ogfXnfhV5axsoV9hE2y4gDm",
  "key31": "3RAVqMQ5aJfVCd14avTa6NTJvJqxQPTiUjKvB94DmkyNQMrhrQL9Neqc6dHfWUnj9EzNAgN1spKg6quGo4U5x7oa",
  "key32": "biGfXR8qcrZZqsnSYxt7TCCHk1XtdCeekx8WyLR67BGnkDR73TNrG8YA9J6UYf1mX8oWXg9vhcWWy3B1pDcQBSh",
  "key33": "2FXAqbTt1U724rBst5Gk17UX4oqWDCwCutbph2oFP14GDagexLEnikJfPzr5g34fX2UJzFsF8kiqwo9g97hDZeCB",
  "key34": "w8eWtADrSAN9PKBxjD9ArD6YW8NvePbC8UpzUR5BYDi5BeFVGqaUGRxBPmmb67HBnxoAP57MZ6dsWYbM2GG5hWz",
  "key35": "3uftUHHxV5EJSJJRgwPGUviuHjm11fuQW6s1VCBCmicPtcNcf4ruRKzxtA7WAEjSgVd5rGLKJSYg4Z2MYxeo5Fwy",
  "key36": "3X8XetHvXAUAqrXAWpDZv3QaEUmxazDWc8VxhwHpp1r4P5DrB6easC7YuScqsreVQdLPBaNRAycLoAdZcWFJdGnz",
  "key37": "5n9jrd22TEXwb56iRNx8xrJoghSqCWSLtyyUqEkVmrCSHtvnB7iqHi9MdttUyXioFfea1ieoH7FxVCXBo4oP2bwP"
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
