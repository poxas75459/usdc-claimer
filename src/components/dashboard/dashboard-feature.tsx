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
    "3Xp6yV5BiXdRptKW4jKey7zAk8zAesAht7zFH8vvQny3V9bow5SThthSfwVz8cYjUiMBw7E3A3igrpwn9PRCeUK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qzQ3SvNcfkhYG5KqKa51DVk9XM7LRBqoqi9w3MsSjJdvz71BEA4LH5VNPdEbUxRT5XQZLTcX2gk2bCicr2YYynE",
  "key1": "2KHyP7a4zLLZK8kyBisZwaKQn8Hh3WUh1AY3vA4VTqNouyYKejustt7RKquXFqhFD2oUTPEz2W5xX1xVaqV4Ehoo",
  "key2": "3dXEugjhi1t3GGu39YA3DYfFPoB9EjcyAz5ZzwBiZJzQP1UawhHuKS9DZpg3foZM6FZuqNvLqjxaJruS9WxRvT1L",
  "key3": "2Dr3Rsqj63xV8QxrpHMy6mLZvnUdaGQKWfUufZpQpLtGtWe7bmx99G99Nfe4B9Y4NuE7Shcpvz99nzNeiU6AG3rc",
  "key4": "2EhVx8iPCdsfupEWf97ugYXU6KjdrBkAbEXMzZ1Q6khsw1B6jx82XDo68pnEFwgp1S3TmHT5A7zU1gt8NcAKYbA3",
  "key5": "5oLFRh8dKdJYyFkG4nyFMUr97n1ZDXTfxsB5yWNyxgHZXpuzprDq4zUM4JWRJFVURLNZZAc7j7WB8yEBHvxEJhVd",
  "key6": "5XgtWwBbiMgd1AYdWZmHt5HW5VFZzeGAyhiAy2yqsD32CcHVH1hZxfDQqHekBwKoyVEYLoTAWPBk5QZS1tWKkNde",
  "key7": "32wneDFk7GBnGguynT4menBjUcheirwBtFXbvaYisommtHdYrA5iJhi1PdYRevxatPDQRBGGudVLdCdhEpaGuMcp",
  "key8": "544jQ45tfjyzNzbQoC3upcEZ3D9go7W66r2bZvhAqGX1L25zx9uzBoa4JqQ9ok4fyb1QPVZY9Fgrh7Zx5xsrkyFy",
  "key9": "5Bia2HRNKJbizNWtr2Kcv33UipmBEFQ8H7ubDjV3AXJtyhPDJBXyUgTNNoZDkV9dm6HStGvMu3mKKD3xz2YnGSZW",
  "key10": "4CzRuMzSc3UECiFjAix6wRu8QFJQQ6hL1BsUf7GRXT9fAvKAVu5LcQTedddNVUBYBoUNhmiwNUfaUXDFmTjdmwGt",
  "key11": "4YnZbiY1Bc8MwQTurjtmebgkhkWnQ9hxJ51vKqYzhKksYHYtJE8HHardLk2QNWFp6fHkT6oTGK8btQDcUhYWj5jn",
  "key12": "3F2x1PXmLGFgMvVGzLcnAcnJ5TDuaVeA6cgUtg4madfRUkE1qWZQc6qoKUKy7zy4bEQrUSiM3MaXwaMccFSusek4",
  "key13": "47a7bBUd3E8hq41QkRLhCW4QkK1m8mAY7DZSQYHbvBW1BnSMUq3Zqtar3TiB79isGLRAgNA8ZRkGJt6w57EB5U84",
  "key14": "5wBd868Sma8apsknScwq1vXY8BPPkCiq6zPTGCcRMPLPmEwzP9uaiWXD191jkRMVESsQBfTF7Vu6s831bohgrhjg",
  "key15": "44VhSqVYhyGrcZMT29QnjkZx95QKCEGu2WPR5iKPNZW3cnQBRvbtdgtpcsYXSEqTxsrKaSNfLb7v5LDLnrYaJqjK",
  "key16": "24j4bkKArJbvj3BTE6Zxf8XYtWQpNQUtGdPbE8eRYxK7uj39YkJXradN1NQa8B8SLh3d5CDNTb8x3LStJVbhCbKN",
  "key17": "65XTm7vJPqvhRJMqpva3eTgiTX8F4ZNnbv7ECWbkgu63mxj9afUtsyzmeWX6VSMHFM6bva4PkkFgt7nQacmMhtD",
  "key18": "495Zsv3j62Jw38fquULA5PtMcrQGx1bta5V1eAGUt4MC2e8s1W6KTmwZhpSeyX6H3MmACpfn79NPurcGcgm5LUno",
  "key19": "XtmjNq57ith8bSURh8Uo7mNNiXdKN4m88mvwVgepgnTh3BRAUsXpuGWsMWtFunzMNfF5opdDHPKyvKXQjJFjV9V",
  "key20": "2zX8FdCgGRe4TeLVi7Gc77UyGj8yzTgdCEvD1STKeFJyenBBMHofb7NWpWDrsg8xBh5uWDvBwUGfsHvXPLr79CmP",
  "key21": "2bQNuw7CAmjrsNonL5sSp6ipqJ63c5RU59eXUt1BuS7pvaMfnkMhQt6tmFDsDCzWtThx3mqDhiTQ3HeMUaTR8qpD",
  "key22": "2bH9g8BMoizR8122VTFScHhPnqdiiNCG3Y3AvPLBLiQXuHa99VrB9TSeWuYAWCuLbhQC9fXWW1x4rpTuktyyM3uV",
  "key23": "5b2y4Keoyo4PeXMKVDmucowt62RpUZgMx4L98j9JFY3CcfSJtiH7854eWWFwiptgDaptNzcbrYRCVWxL42599RsN",
  "key24": "2vbaM4gpnCFGJtre3UWB59smf2Ssxqtf9Rxp1XFkg87NNetL2jRxnJBKo2rXNL4CFzvqet7wtkBFfPgyjDdU3La8",
  "key25": "93QHyByTFsbMNZeYjtTsUQYM8ZUyLtvSQtF43r8qQMUb8Mu6mWiBoWG8rhRtHVMYXPGSU2EJ3JxTMrPN62Xr77W",
  "key26": "2bGitXneqUyKVMisWn9mYbPaPP2g7HDzDgyEbS2NMxhvWW6uqAH3BaVGPPGPEGB2hKxMxP1vDSLNMnPZ1v35invN",
  "key27": "HxyWXpgT2aq1CVy1UGNzeSGUGJrF5N8dB3jh2Nyn3hu9tJ5w8UARNXyD5FptFNeyXCHx13ZV3va9rQymbgMZfP3",
  "key28": "4LUAGHdQ35ojMm3CnUVUoJMHWcGLQQpmMBksy5tpLgsyQaGWQLK5pXDiCzAjMTYQqtvgaChVBg1az86DVmVuqnJK",
  "key29": "4sHLLytQ5avBerNDwZb8pg5hJ1DJt83wUPswFVt57YPhhxGWA2vkfMqiH2WcJkzMz1w5yY51vBH7kC7s6QBzSiu2",
  "key30": "3r9UAhy7dY4QsqwCaKNr8EL1YQYaxXJ6WwTMt5BZ3DVsq8V6N4u3mWBLvHYiuDvn7hunoQAvF2k3TvCN94B7xPEM",
  "key31": "M85RRhXF75fy8GXwpEbAGK6fkWLh91RDYRUy2F3LY3HgxnNDqyvZKzwqZ7i8ACLjEebdvGjwpdWuqmM6wXZkFhV",
  "key32": "67arv5aqatbnyEWC1VtTtUJPzmZs3rSTcDJ8NXmg39z8Vfg9tzCuQSFe4cWc1mj5qrbJhuGX1LXNX9Vv2NwgBe6G",
  "key33": "5wrhibRwUSytdF6nwgHFBKodkiq6aWiFXwCfQaVCJ7ALmgDUr1SEy1e3Qzih8SWhufHPHJEb3RMMxFZdJZbiXptV",
  "key34": "5cETH2EeBkj6iqHKwJiXwqWzV2e6EY1ZFJiqmpVCXLWFaGwZBSne7XYg2kCniFp8mYrVp1z9h6RATw1tgCzigqan",
  "key35": "4dzCfESWDMC5wLGQvPwXtVc6WpTgZsbfdkdMohbTM51q5rTptPZid2txPtRsNzC8MJmPdnQUG1ZcKJaPaNBTgH6j",
  "key36": "BBVGxwGqqSm1YV41ZCz4qdCCWPyD8axPE6vdzCiUhpP2rjoZKubyccHXGKZX1WGWaFh8LK9XSoq7D8Z3avjgfEk",
  "key37": "tAB9ZAoUijMeCr16UuXVdWd8CNE9gPU1j5anydP7XN2RWcABr3hQBTQegTyUJ3zh2UhevB39Ld8czy8QMAwT5Mv",
  "key38": "5CXtsZegzpatGGviUUgEAdTUPAcxsMxtyEwe6pbCkTAmdn7TY6ttu3n6JnJ9v5dXd3GCM8Nmjy26vz34cQDgfG3W",
  "key39": "2HCnWbycCTkTQ6mTjB2CdQe8uf9y4puKp13iVs9TdVEfuCTZeagKDGNvoujq2hTSHeTe1o78UnKXC1gFrfdUAybK",
  "key40": "4irgGBo4bQhz9tQjiGBpFrZuf4rPAzvXdHQTTpzcKZYGzrXRJ8XVGBfCZnhVFJ6mc6FJTM2tFpPxPiBx4BEsgHPh"
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
