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
    "5GeZw7aeMtDaEj24KFk2bFg13oA1e8FiLKcqAZky5e6mDs9X2vpzgkHEHCtGMdXYuocn4wBVd4ZHHTg29anwcMu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p56HqXSD2nLJ6djradsrdTVf7aPhx2bytcekHygvrHrvj9jjaXJfHK1mT8NK8nCGyaGee7MMr3fB5eDPcwS8dk7",
  "key1": "2SYKYXmvK621acxTtZf8XoVT5JpkLHKJ5wNbEuD1zFHVnBe927fqqVc9XiC7i9oTptmspusRAH645XWaqCiNfxBP",
  "key2": "5Voawxiwaid5gM2BxKcp358kmvVswmDfLPTsxg7oNx3Mh4qtoNxSHXLZ24p1arByDrsugUKUQeyZ3b5B9gMw6TeX",
  "key3": "5JDxMadGjuyBNodRMvYtcCqQc9Q7wz7Emr33rNeedkRCmN7e1gawba1Nh78ofq4oV8zpVDkNQNTdPy6WqsfrWdow",
  "key4": "Czk2LYhc1RcWpKfyMsyuqo4L2oFKJvpAejZVyks3T9vvyA5EjEA4WggvnrSwLrvcBjfVCzeyQoyuETNkkoJVC6w",
  "key5": "2EtvmahPhSdBdxshwZr3NeZebN6z2urbEWuD3Xeep78BgZZPewxNbBcNjkJaQKAHGAvgATahpRNmGUD3QyJa5M6x",
  "key6": "64Lx7ETBtdEruyH1qrNhN29wjVqtd9YtgNc38WKaEUjBwuR3eHY71LDmb2369t7AnjcffkYKmaTztADCH6HaqnRG",
  "key7": "Vic5EcNmUXrKHFG3LAWZvFSGNWssXaw86v5UqDPLo4fRd4kSWDL4ZFrioeCmaJiW4ES3pTW1KURmZXZQJPNtNVE",
  "key8": "3CvRHFECr5qC2PexXvwBmwiR2QcTtD9w5vrVHEvxRzo7L3xnNjRqGGn963xzL7fuj2iREETPJu2cjeAHWEjCrYHX",
  "key9": "3jyf5AtUuUVZHQWpsxWo8rcuHqpW39BLCvxUKCiYouJqtdVrsq1PQ7PyNNtY6z4k9gbozPARDcyn8BsHoBqqbbCX",
  "key10": "6zkzgqxAyT3AjbgHcb3KA8Eu5mSYFM5hEodg1zuj5dxfqtx6qSX7CorFSxbhf68NxpPcKpp8QibP1AtnnZ5Y9cG",
  "key11": "5DBdbWGmwq3Srps1i5VCyQANhMUTvTxMuCsbNiptL4bumgvBDE9afu7e69GhE6Cu65XyeTerEqvxUo4XRjdGwS3P",
  "key12": "5yf2EPo199axWC4jRsM6Ep5CmXeUwV5Lv6vypM835VxSBXZToUbNYwVTvxVpWqPPhvXmWDbzKs54SFPuoMEFZvpi",
  "key13": "32cW2yRYsT1wX88F7gtYw9uqgChrhG6doiePtQkUQeJihaLd8Sqg7wHmxtmS6SzN5CeMNCZC8pMYgq2oMsXDcuNx",
  "key14": "5wLGm9niFq53ajTynyuwY98c66hk2TX6AAnrTC4mwgBHcSN3r3PCbky5RzwRawDMDnyJX3DDwcH3rusxitiddUh2",
  "key15": "2M5KaEpuh8fZYpnSeizbubRfsQajCTNYtwU6RrtwTasxGY7hbgJz1cndurqrBo7n1wB6Ef9WDEBk7shcgreN8g7V",
  "key16": "3otuHAsxCrFXDKbs3VguvyyLizb6WX6qGQJ4dtjAHXnCGbQHwDzQKgZjwu1mYi6HFX5PXbsp6bgiSvSZQESU8ssd",
  "key17": "5WSKhgrHYcTxzyubkK7AuYsZN5C7dPu6goKo5GxeDbmNWKdfbgTLyWVjxvhD1GCHVoSwyjusNaqMpM2Z7Wx5nU7Q",
  "key18": "39DNfWXV39opRfXBg6VwnHjPqZu5Gr7s6tg795JGWWhABacd4tvbP8ZwY67JabTjVbHXVycitwMKWnudwPFQ73CH",
  "key19": "3MpTH9XHzCCd31fdMSMQkN3cCZW9BtNuUfYWoMXoh2fz3YuzQLgfYjbodUB23hFbmjUeikLZWLgSCu79bPgcFVY3",
  "key20": "j9MU4Rtu1EWB173JQNFcLrJ9bHtqgLYeAuEc1AwZkkJEVNC1TkwYP6R1hiDqkqs1VNxyKRVoDx7Ygyvhaq51YMw",
  "key21": "2xyvJg1HZGURjyoXDwoD9bE6VJvfssF4ySEocWmcLiUeXBthG2gEMejsf3uapgo6UgRB8nByPVfP5B63FGiNELe1",
  "key22": "YL5Ho7Gh7JmGX3oLzvpsoQK1dxuV6ifkqsb3k4UTTTNfFVTagEnLVMd195U6yGPWAVdn53z3QHTvzWXwYWdaqjN",
  "key23": "23hdU3BmWjkQzzxNSztzTy5MQESZS48J7HpFriPvCnc3aBtJiZQaidFyDmLAALP2soaYdU9SPk1nJPQc4ZdmsQou",
  "key24": "2HjbR2qMpZbbNB79hz2SfVvTPKho4pHp1GKxx5UUS2UUumtgv9UdQDnvyVGfb2f2CY21kK16yzP5fmieZKVMNZ4M"
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
