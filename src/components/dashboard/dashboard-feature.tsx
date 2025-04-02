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
    "2ZcegbGQSynwBXJMLBNRW7YrRD6s1FMhb8t4EDaL1temsVzGJKzYDvDcMfQVZQRao3Mf8xJiA9HmGALmtrX4BeCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kauSU3tgV8iHhsBvbEspusFUHrD78PXG7nnSzeFmDQYjfrTHNehgnnxG14Hw4HhUM3igiYhn8MZZgnjRov1RurW",
  "key1": "4vHXcHbhBBhZ893979WpmEMheB2oJC9f7AWak18TpEMtb5XMagWAwSTGyaPdNY5nPcke5byAb7REJ3M3eacPWfR9",
  "key2": "275ePFyBz3nNnBDE8ZHmEhAhnUnzMaADNZPR9Y8wMptNqrMhdvYWLvXQkNBzNcXXupBThThw8LsFH2c9m9saeisU",
  "key3": "3yFbgw1rinwAFRq1DXHzzrreF3TkegBomjLntRCFHKW7R3VxroHK8g9hhvbnc9LWUWc3UPtzin1c1cQZz6T6ecHk",
  "key4": "2FQps2iizswCNyzFKnwbgEB5jhyonoLFtgYaQyZtnwUVYbS8yE6KgzRkp5dEhzDQTNSVxeWueBB9Hk87CHDKgoki",
  "key5": "5gNndf2Mx4d7AVtF6FFXZVWzV1cUBxZP6PF8muoMg46zWML3kqCyMpRYYVc5po6VQVsDkzHAuYhiLrYkdhmqWHhE",
  "key6": "HQwC84qFz7jCw4te5k1Fiftn85KUaDRomgNPshLkozJDGcpnxoC87ctxpkE6QmrfKEZXrcG1SXGnSaToVqVA2cD",
  "key7": "nqR6x4Nzv2daTNpHodgvrGgJySWpmonXwMsxaSDfEQeYQRVbtkMySSgyFepu2FUEyj4CwNgXBT5emvngvk5W7zn",
  "key8": "zMg8wnL5tknAii9Lz8gU26sqi2ianAcKDMSDrHoKSoyDKM52zKGFLEQE2RHYvMMNTJQMuRwqdwWtgnP9CoDLd1B",
  "key9": "3Nt6t246yMdUbGjDPJneVjGhHaNXuAbZSeBo7AeJbGCzVTF9FcfjtkXs8b2CaCf28VMbYgKdqcnBpuJmEG8xKskn",
  "key10": "4WXJrpv7RKg73DsFFVbnSv1mFJZkAr45RxS9okzcR3eaPF9BQXBnsJ5WksFBSSRQ4Ybr8BRWgwNbii5c93TSeDXQ",
  "key11": "29sLQ8PswUWw6q5mZX2WYcTxtubuHie4Ta3uGtN2Jop1DviF6mUCu3YWHbK3EYghe3iB2FF148247wMaEm5XhySz",
  "key12": "2iFrYtnjBTWxa5Fc6FAya54DLQFBjUEiVJVuN7tgqMaXUrsovhjaxj4vr4GHvuJwmbxr1uKryydLhqY3u6hc4LCc",
  "key13": "42N9VKC2kvWwByjEpVQhkdoRHZs9NgqRA85fexyBCYgt4JC6gRMEvHAyN7dWiSe4HUFWS5y9k6xRPCnnaB8ZJGCG",
  "key14": "D4RiRMnFw8pwfZSMuxs3J1RCPN6YhEw11pVBbZycR68nNs86SCX4BEEXxTGJKBKzE1ko9aPh5KME3MqMGjRWgKW",
  "key15": "3tY9HgH8xaYymewH7X8o7k4QAGmUKPmGWqvEpDQXts2V94UhTtxRWp2MjjJkdxnSfba57XDdhSugHUupFij9HfRy",
  "key16": "5uDn2nL8fbUjVZXWcpit9yEYJ2ZAW2izS3YtZkEdbNPxg2ishLGHKjUSEXABiiApPu1FiYYxp4sV4XjTMLVhvuAC",
  "key17": "4PDA6EyrFkkkFPy2qCK94PqyB5tz86NboJM279SQ5HJpyDeA85YmXfoPxXKPzX8BzHYL1KBA6pPHFK8ZWRu3oQCA",
  "key18": "2ZuXxjBL75iU9ggRvTSEbdJk6vSoNR9kjg5wjhhnQiF67N8zeWf2aV9PpfutKHbahacP5Mgo4CELYU3bi61aKTdy",
  "key19": "4SKFLERUDLHnDkywc7M6XnyWTF5xywc4o4XhEDXkyNLN7AFVaS6GeMRKf94TAiQpLR3gA7PAbixe3oFrCoWaHqxF",
  "key20": "3d9K56sBqkKvPbqyRCgEDvY62ixg9VdaSMmJDuRokrDafYXNaJNJ7GgYA484a7ohZBkgfwuETjKDZVs5QzZ2iADf",
  "key21": "4nGiPo5hi92uFiW8z1UEvh975burRu957DFzGPGxYdLRPyr3W59xBzcRQkTiPDVY4BzRC8Wt9LUd2oPxjinqMn4p",
  "key22": "ZCCVShgzWNy51NBusGyPkTQPb1Mnf7VfFkze5MGM3bongAXNCpHYVJ57VSTySeE4S91gmkxfcha3ZhY26NTphdt",
  "key23": "3dw7KFrJofaSGZ2x7Y3YyY8qeUFSqMsQVZWBVZp2SC9ezav1xLEwhohm3bj4kge6PR4UcsBs9DFzQPEk3tFAx2ZK",
  "key24": "3LKQJHLFJCyb3ZWzWiZ9VrYvVH1Uik1Qyg7c5BbeK8o9Qucq3x2XUSwvBsdqKoFw25ZNh1cYeDuhnkuZRS3s5BaC",
  "key25": "4GMcBDPDvK46nv7wq6wibFy88Vn44TWenZVr3hfGWr82wcZjmftAd11PwGd79ALxZReHbq9eaVY9nz2cnHNq6VA6"
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
