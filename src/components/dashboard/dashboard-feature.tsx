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
    "ukaSUUhYYavV5teLeRQGFJH9K5P81WemY83qL69wc5NGZ8pCZD3Cu1MHK7VWfgjEPMsWZKsPSoC9LQixjUwmZiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wciimUrpQhnbU5VaafQKVS7WzK7ZgkHrMgWa4Jk2RbCs8oV3hJQ9Kb1ZAaaxs6wD7kX3uQ2F2p6aWz9GpstW45X",
  "key1": "289qfxLvK6CMu3LhtX3X3XMEPuXMBKkPkF33fqGqTghb9ZGMCtyPkskKwxq4dyk4RktEz5VbDb9LawG9fh6dM6ws",
  "key2": "uSe5ATzGNXFw8RGs2JpoLvq2hMeFdSKPmgTWZNeY5JFdmwFsg7LY7aXcDUYX8GzcnoPtnGXXoY2kXkQMDfeKL69",
  "key3": "KGFrJtgKiNhZt7Y8mFpabYiFwSy9aYqu9LmAt69AwZsZM3wpqKSoh2RqZFexiuufeEH8f2CVTeJaseZ3dT2zsju",
  "key4": "4wn5oe57hT5AhQg8QqpkgUmVrj23pfzr76n8rzQC2HcH67tYZuAMxNVhJEbxSoDzmGyCxipPs38ETS3HdL4TdCCZ",
  "key5": "4fchZS3nxWpDeLT24suPegr96d5xpbTBnAbmXHepDHD25bpCcoMj2ym9bffkwxXwjV77NRAJyUZ2ZuJDVHkUDNVR",
  "key6": "4rS1WGboyj65bAduUcduCnubJWVgfB88wqJwPhLHzpJcg8ZJNCuPGkegUXNpeuVcRFW2JR7Eg4EjYizDkPQ7pybf",
  "key7": "5FhVPAQWVeanWzCASAByDPcpXD97oMRnXoc56JBLTJu2GHLwsR1xyw2X7i6sfGRstks2wGcDmZgS3gRYD1eH5MYo",
  "key8": "2mddbAVu8M6kUBzg5cocNZgiXNCgHYmWjhVSEGiMpbEBj6VEHiq6UT9hR3pwcjzSAL35SGZaPVrQaFUMePUZcdG5",
  "key9": "4su53VH4bkq8bgcFFG1fe3NWoj9EHSJCviWDuNjU3pkFmJrYoHM6xSZr3BEWG5gEKUVF62d5iNmAdgkDhaLv4tb8",
  "key10": "d19AP6Jbw1gwFW4keftDv7BwqeC6JVGLaipCkBe7nu6aHdBHeP9EgvVmz9LinNCDt84vKWS5MHdCqHQ5PRr1upo",
  "key11": "iD7kAem5yCiMo1VWHbhyFvTH4rMb4gdkPtLMnC1ngSN35n318Xsthr5W5nratqfrECPsftr4fpdc3CQuSMSfXjB",
  "key12": "4H2brSjpDBbVoriXHybdZqT7eWEXo7rxKCLHmGdNHcKH82if9bvVHuCxrfkmyuQJmTdav87pBEzy3V9NMWef912x",
  "key13": "4LyLzfxDqm4uogNd6UuYacBDm6djHsTP7AeZkuq2zcFAtHqK7uMV69stmtVmuqrkHuYuGpruVjF9qZpuYrceWdpU",
  "key14": "5XK1XmHDWh91XxRbvtpGEojUvUnLAnJq973a2cGut6LETeTdUd9esCfXXqRSEF4KKsWQ2Bk1pv8smDtQ68YgQWWw",
  "key15": "3xJcSDkFTvwtSB6n8oB3UhECopGZExK6Rh2mYkxBds1ps34vcASwLhSUeACjnvporVyPYPVtJoftfsFBdnNxFdxn",
  "key16": "2UPFybM9X5pk5NkSvwDW7WebWPngvCvR6wn52DYhrCb7EWL5cGFPU6y5ah88oaf8e8EJFm7qoknnuCAzzCRvE9Xg",
  "key17": "o6SnyXLqtEqJiEpDmRKcJt5WCPEKpt53UGsWsMiVrBd366j9Pxh1tQ6Gn2D5m2AoJL3vnDaXZHeKgoEtF9FgDBw",
  "key18": "3V5xqzjiaMBafXBDEFA9iDcSS3JC3VeqCoKiLUxkW5JByRhfFmJvehdFFas1ZBsqAMAaT84GzyYRj1N7pHPNfJ1o",
  "key19": "5xTPG2gr4FtxApkVjd4TpEvYUxH53p2VTm6eFpz9y43uXxq5nxsqn4Y8kzEpVPDyzK3YkLEyb2rRXZKKjpBM79Lu",
  "key20": "bUMGjPGNJFsqsYtAJpG2NtCUognTRkbtQgBbHFsGT4EaWjaasmuiW8krwUkqrP4ACYTd3AgMHXwXq2Ek2EMVDjE",
  "key21": "P4VqDbSqJyazYPhMJHWE94in5KbgKjf9nLoRCbT8aWCRk5ubJazdfpBUWFqZwES2nVwBW8JwQqWikA86EVEWY7Z",
  "key22": "3DD9EDz2uwXSzHRvZkNcrEw9sQSmTqRcxBk43d7MmRWDw8u1nzYs5e2YjEjfYRngSBYpmBTQgxwC5vUwNMft4YyF",
  "key23": "3a1VZceTdWBJy3jN3Tkq27VciFMR32EXi5nJqTwzUmu725yJxszKaEWydwUtYch5iJ1kwtVTRHHXqv19gugrYNFF",
  "key24": "66dgD2MzEFwbx4ANEB52yRsxyGAMwjKse3GZcsdoo9GSjiogruMDNoZ7M3qHLKmb2QSDRFtK6JknZASiAVMgYjBP",
  "key25": "36ZVd3rVfxydodCe9qv8h3MQBfpJNKzSNFSL4aGD8LyaibkqGFjKNsA96tsXmCAeYv9SfAvNDndCgyqj8J2F2kKS",
  "key26": "6TTVt8Kuzu1Bk9Dwimk7Ayo7hLuJfdnsvNyzfTHLB4ghXFgquK4MTuGxmSNHBomXb2HGBz2h3HiHWuwQEetz9LK",
  "key27": "5oxeQfqy4j9JJM1x9EoD7tanDnLhcfQ66s47oa5YvgCww5QuR3xUvi3s5SySxPFR1We5NicjwsRTxpquQayWyAkr",
  "key28": "5XEdFcPHvWjT8PMTNZWoeEj9P7WxfMZmm6QLEuEdMakwrrSDebZ3PGDiVXyM81d6F8cXqsvjwB6K4V4sbPxY1Z18",
  "key29": "3iAN5RcE2RmEjBqjz5ezgbEE2ERsCrsumqcQZYAscrjQ9MGcCfvUpVu6i6orcHQRDjvepzuATujenbFcDbvohqLg",
  "key30": "usVvp5ZDBUcuFUN6wNPMZNrES1KaEBcN1PFX2GqH4hW4TjEQSm8jwme1Hu7Pf38SuB6YavMrsuDu5y1o8EPm7nP",
  "key31": "3wqnU6BMMg3ScSvMjJjJt6PbgUJ9ck6sCXPgXd6X8SS9mxnyJzPXT7cZ8hGDnsAz8NKgzZWc61U2QWarL5hEeq7K",
  "key32": "2S693Tg88DZ1qrnkxKqXdF2n6UHnX2xqyE4XLJ19YXGvKR3HiHji8YxUStiJMLUPTJoU3BZMk8X5LmxHpx87SBiN",
  "key33": "2qVicgHB8Sa1YP6F2z8DsdwX1J7YPcHDtcT5TipytPjf6H9ubTqEu7vrSQp2CKnMtVAefdJTKK6mYchJyvMa8YSi",
  "key34": "58yAbjTRzQSKQmNjesunaTf3xhHkCeY9Vv4x1cq3ZuF2E4HAgPKFmnzYXUpHTSjDZXTKuhmpL4wHzBrS9AEjycr4",
  "key35": "3isfNVboXvdHpZJVE7s2FeAANHx2CUZ6GB8JrpqVf2QJwQMhdcWqyXXUjZq3gSBoj7bAJLhri6rvphtPxcgdcymv",
  "key36": "51qBzxqeB25cJKCgTMEWfosMiuj5k3cdzYNqGY6sG1aw7BKYjsn76FuamzYB3Pz8rkDQWj815Nsx4iGsQPa7AhJw",
  "key37": "5DAQ9GVzvJw5BPsxjR2AnfsWbkdHZZaxD3ihtz5RtPQCBmN8TFep5J67VTEcgwFAo6vSwsYUTZeQVg37HZfYCBuU"
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
