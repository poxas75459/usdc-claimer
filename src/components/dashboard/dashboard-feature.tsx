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
    "3me8jkJG2A6ERd8PdYNE2TeboAWkT4qNqKmaQ5GcBfnSYiLnJJtbpJeLY8WWkNdXd7kpeSeBWWHP8Lc6PX7nHit3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CkwjqnaH7GTdZA2pdR3S8eDPvtGYBWk8vpy8vke1t6pAVkCXzJCNnEHugzyFtY4LENLSboKUXcY1fvANLy2Lgw1",
  "key1": "2uAZjoqer2MsWiWdQooCzRf6cQs6jGBPvtBUxRKuWLUvh2fpX4jRyPYCR84ntokZjfg9JXZ8uRkM5M1eqdvuCcC",
  "key2": "grj3gzt5HHg7KVZCEwrxG1zc6vKWPpzbFnqYC9HTPGZKuR2tjHBAgEJS3KavSCD5nmhZrTn9wEh4u5YL7H3cfKS",
  "key3": "5hwDNvu8gM1Rit1gB4kmDcYAGHYnxD1LKB1WQKSZfp8ngMNVaU15AokKyhUW6wVwBM62cuLdV2Z82E36i9LE1bT8",
  "key4": "27Xxn6prefJn2Ud9w7X841m4dDmh3SVBSqgbEM64yonmNAtvc45Q2ceZCaQ1q3pWppJxXoErhmWe4a2n3LjRZriy",
  "key5": "5wvmZ4fofRVNLNNeMMsSk4XbaW88Vj7Hnszvd9vFjnygcmZNRfM3FhbdNQ4J5oM3EKwSotbFmtz7bZAGXoMc1ndc",
  "key6": "2WiX1nQbPeEWmmLabVSoyh9pEahugCzDWsHow1rtTExZTKhEZEe3TmXPYyTX3EkfHTYyRdzGqTqdboYPLThTC7e6",
  "key7": "423efVk3TPZAx2VL8MciAHMaKVxj7d8vs2JJmPun6XRkv3iTzP13cWq3FbKuGuEScxARRHq1mLuWNkiYHvzAz63W",
  "key8": "2oZDALmhj29cRSNjJsyC9XTbAyJ8LmzvMa5w6AG7JiSMwLDt5SVEUCWnZS7BkNLwUboJRVQjToXqiVeQm5nwo7vJ",
  "key9": "5s3T1JKQRtWJ9cmQjn5rSrBReoDKzPrmt5QocGKXrAsEsRPMpwYFFg4ZeFboNfVBpK47WvjwK4dKV18bt2PK15tq",
  "key10": "LXQtDmxzGDNd7kEHjXFizkKaxHX8kwufGsGsXDutTXQEn2LeUihnPvodnC66ZuAFPg2KEj3SFuK3nTspnWYRoec",
  "key11": "2SXrZKmGtt2VSpcHPMHLdMn6oqUerVBWntF2z6bsrhEEazXouzrJkNDcug43z9jFfitjZkutRiWgwA4w8Lpu4SoD",
  "key12": "33vGKrstGu1pzd1SJgWzEsPFAbht1DsW5WHDnxYHx5WJBiGui1wuA33qH7ouUGJA5uj7mnRiZceQ3zjWXtXV4p6K",
  "key13": "5WNY18Y8F5ULtJC8SN36UGLDBDZGbWLbDGARYYmxqRM77BCD4hC2nY4dXGEo3btEEaVyejvBWvLdwq4Ya2CZzjhf",
  "key14": "3K92S8F4MCiYDGihuJGw68Dy7L9XKPBNkgEjygX1rZESa6g32AuHmW2n2pta9bnCk8KsDoVzRBEYyWz1BYWfcUhW",
  "key15": "4JdXMHBkky85gW5JMMRv3hnpB3GntoDcpBBb9RCEhitk7mzQtApQBFLzA7ECG1iJxHrKxC95Gvyf4rtFanvk9dvN",
  "key16": "55RvWdhVc54xgUSpruu28abCxaBYFqaEDYJ2g8CN3CzX99ufx2LW9NsisGkjtZFS8aQtuKaxKhkbAhvCaVwm9hRn",
  "key17": "5oRs1Z41LpNyvmA5JHDWcZnbJ57xtNp3rs1FiPkrHxjxCi53XWYkNgqMXzyoH2Sm7Nvz4W1ZwzrBYGYRruwfiLGu",
  "key18": "5S1KYf13faDCye5GxtB2YcPMMuDxBJ16KKJ7K9FywLZmywhZBvLgZSeLoDrzRzqftbCAeKuFiS1Ccsck4SMGDZe3",
  "key19": "4xNot5ahiB3GR7kVmkhhwCAf15BbBMEEbrLw55WM3kaJAbww3DNN46E2Dgu2uVX2qNiAgvtYzJP1nH5Qny7fa9Dh",
  "key20": "4yYQkDdUxXdwDGmFUmmFsqD5WttokwnZWonkJPoUMZ5w8ePmkeyAgU6sxnxdkb9WgKkGRhPmbUUKx6Do8L8QsJTc",
  "key21": "4mERgzDMyYzjqZH4QS692XKtrqR5JiyJNWtSXwx7o8B9is3ux4CRiAG4eBi4A5h3q2JjPuSU9uANJUvkWU1pqjh1",
  "key22": "21hzZJDf3gdxBAQTiVe6HSdqELwKFjP3GBthNAFzuFjz9c62G2ohoAgeMpNV2r8MB5os85XaGnrs55j2Jd4DXHpm",
  "key23": "2gdEpj4RKk2c3DALWLGLkXKFH3GHFNP8XeP2Gfzy7bGJz9mg77MBtArYTAzKB7y9K166M1Zckc3TvQpnzfJmo76z",
  "key24": "4CkvR8ozeyk9oLrWnhzhBKrLeXLNRfmEk6Nzw3btrd57ZgVHTAKzgfaWiTPxkx1kXCioXgqZ6CKjMggerqwDhb6k",
  "key25": "3uMrdZVpBKCZ9jjQosBh1P9rX7d5AakY1xvrrnpSjmrUPPwBTtKXZ1SxcBp16CGw3vHrcwx1A7m3WdHgSRP6LyHi"
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
