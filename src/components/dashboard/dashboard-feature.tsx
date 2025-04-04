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
    "4AkusPWrqf2D1ibW2LwLHXQJThkoqK4kB4UcjyWFXmqedNX6JDHSMp3krJnsj4h6RU7X76iqFUYCjm4Jn7Tm59sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kFCh1hv9AanwcohhoUtboaurEwfPX6KkybKmyJ7vNv4GL6712qYMwuCYRgCSrseBXgmqeu5M7G5Kbg2HqBg561H",
  "key1": "4ouSmZsxH6yykj55SAuxpUZZU5nB1brurVW6Jb82TwumQ2pxE6LmWvqcLHs7DEuRWaCR1CiqSWW8xrEtGH6Ki77F",
  "key2": "4fDGv7bR6GjjTwJgYsvM1RUwY2RGe8kQFHGPmUFzAiNHX6aksrfwfFt3VUgBhAQAh367nsfstB5bRwqtZs58zLzu",
  "key3": "cBA734bWGbwyYjsVfr5xsJo6Tz25HZx8gMdLEbnnXzYmErxaPqSsAMjY9d4b2gWrYBjLxdyMQKqqfs8SEHgvrdZ",
  "key4": "5QQfC8Q8bZPnpyPw7AeDYCj6Bo9giRtYouAbMVwzwHnx1WNLtnSEUqKyR3tXKGQ18dYeupg98wbgXt6fZgFonmZD",
  "key5": "5ES9S9WuT2DA1JcKvbBcPCqpV9caKgV2gaKb4MTAbhUhoTyfDYnQmFP8w7vKKGQC6KiA8gFYJe9m6svwkpMuZJ6K",
  "key6": "5KKTBcNoYUNMNkULKSk2sDeev93LyegtuyBoUn3shqqd7rBVgHfiQcKXqQpe1F819rGKbaX52RbFc1Sz7xSFqf2R",
  "key7": "2MhVYmhnUTceuoNV3Vgt24oj4L8PbYkR6BGYTGxZNfmYDw2DMk2kctWvypx2ETFiyMs6ccpPWPjPMefcizVEJ9Ks",
  "key8": "42BqTwngfoZY39Nu875U1BhhkAYKsLjkBEwutPBK7mYuP4MLnC6Mv1Epf5QzBLLyn2EMHKGkoSj4gCdPWZNqbtUN",
  "key9": "5vz3DyTzxzZd92nL7WkFmE3NNBXLBwXJwYvf5UtjeK7KQSP5kN49xvmRE8Bo8BxFLJbKCSUwwcYHKZDadWhdqtst",
  "key10": "r5fpi3ZacZFCBSFSb4rfYpwokhWA4Udj1qXmksjr7Uh1gfaD45omc1eyQAvukDxPWUHb4D9zapDAPYQbCNyKXn7",
  "key11": "4FWH92StSp9odo7ENK8wqNLBX2j5GnL7a5NjQCD7WQcpEeYiN2GD5cqfqXDhZYycZRqZVcMvMYwuYpQDYNf2hiC6",
  "key12": "2UsX3RgBNwM2bxoaUA1KovtLR6kZM2ScVqSuqpXtudamzKEM1UjsKF58cAp2MeMgNJ7QiwSX8z5Qbp12sK2i9hTb",
  "key13": "5Vfw64A8BaFbXE1SsdnTYq2d3dsbx9v1rNr1sBmjaCp1zuTnfZ1QcxUJRbcmtCWgSR67QdLghfAg4knYEZQw4WN6",
  "key14": "2NAhrYwoAYxzPCzf77wia61ekYFSvmYRS7n5F7VrtXq6JdNnipvzBsn43NGUqoKL59zTqU4tEMtTTQHdz5QozmuT",
  "key15": "ekVtetaEbxNRMTXc4DeFkRjF6y3T29UeLaxgewDFfnuxwoZS52QtoLoyZ3za6wKdDr6cpuofA1Cg2W9b3deFT6d",
  "key16": "YZGWdRPJsNtpbmdQJ4EFVy5opk5vP9XCDvq38HVbgo7ZevHZMKNkLYJ9wF3xsyYSeEpyuQcumqJWrQxpz1niUD4",
  "key17": "2dhB2MdL9NseDgDa8d5XKC99wmJZXKHia7Exk8ZEh8BLiQgF5xZv6AYpPtfCpt3yyKpaZ151RGKhDEkDLmwBaZS2",
  "key18": "8hya57nZ92F5ShaEh2NntSPi7GBB7awh1NWZ2UbNxqaFbdmuWBT4oVviqabUrj872Mef1Ei1GhTCX5AjiW5vPch",
  "key19": "4C9Lqcj1tQJfhkkBpd3ngmUSjJbzM6XabjJvwt3ZZKfuqrr4djTXqgTbtfre4JcRawXDak7gethUx8f174RU59c",
  "key20": "3mieooT52SLdpaKgVQaBmgtJsTgBA7P1KNsL58LGRcwUX5fp8Ci6t98D7XC1N3V1AEcYKUbo8tybZwFSVGnv9Poa",
  "key21": "26AXwf6Sci5CcpiHgzn9gDpzC5gLVSrbcUiLK6u9KgpkNh1WpcEY9RC5xEYvbfJ3fJt933setf27Ny5ge1DinAbp",
  "key22": "39VH5yVjdwCvh8Zc8WvgR8Xitsdfz7jYnnHWfJYsRMJrQsMQN1B5oooZpkASYrnFL2AWdPMET7Pj3fvz3ZRxvUio",
  "key23": "5ZDNy9ukHmKDsDTDKgtQkhPAyS9a6PDtcrRvA3ua94oxGD28pWoJuZ7Muoeg1n3JzFECex41URqtYVUHTqgrRt6Z",
  "key24": "3kGvCTr45Lb1ovcq2ZDQzDxmWLaHsABWR16sitKmdGsMc9WVCE3LavWvYZHpEfjKJdr4eYDNd9r8nahMGw9mU2qC"
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
