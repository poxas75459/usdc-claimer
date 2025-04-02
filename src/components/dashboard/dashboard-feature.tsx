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
    "4NiVs9sRqGKX98F7PjJgNj2mDBvfhD1Y1Ym3ZLPTg6LYA7tEYkdRS9tkwERqwXSjogJd6rKKbuoqV4Use1NUrxm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vEmHycnCPETsGzhEytQqQ6jxfdTkpymHo2kuaPb4YMqV4Epv3NuMH5bXBzHjkQ2cMwZJrt4ubUkSVgiAUUUoSn5",
  "key1": "2ZixZDSeQVhB2Bzxb7ZZX7WZnU2VsnnHc4qzx9L5o876SJejLmmNtoN8CznGHDS6jp5k3u5xxPvndYueEti6tRCw",
  "key2": "623nLabr65swCpxAH1Pi5ExCG49xfcSRkjP5WApWVFCPj5pECZzuuhwQz2gNAECCCd9SXwLvZt4Mm4nxf2Su7v9E",
  "key3": "3BfVcZygKbkswn63hVtm6Rd8BWb3B3eQg1LsF1FJHMKYMVtQQrKSmskDDK2yubZ17sCufGvrPQ6eDwLFn5typ7xx",
  "key4": "DtYHvNMfU8goityBV2dbGD145dtuu7WSQNibaUVSXJTR5ydUmqVhGCcRuFd6B4CQkptYYPobJaUjV8EbaCDM22A",
  "key5": "gTEYXC4YVQDhk2W8UNTR1PbXjtWTRWnjsitJWXXagEYtJn4kgNMJJjBjXLEk4DbUHytgSHWfkKok3MGZXXyspyg",
  "key6": "3h4og2jHbQMN2bHu9tXZc7AHaSWXYAMZ38ubqrCMfhJCpXmjZYCT8sz4SHNrw7wRMKUw6qmohKaJphUL1rhYeFnj",
  "key7": "3VwNmEjwK3v4H5aF1HUiSpFdMnpNB3ofddwvPEaCXCNbJYUBQiZWc1F6dp374HT6uGbt3nhtN6nABCGbsXdVE36T",
  "key8": "5BTFDsoDLqvVWxWc52cNswtGjgEVdwtGP4TqzovH9PefM3PBoFmZa7mMBSMbwMbMpsAuLKyjFU7zq7ZZsU8jeoSj",
  "key9": "63cuyZpR1eMhsSZVw4tX5GnhnL5WRuBU4onMbPya9L7wFuqkT44NKJmVN5cg2hALrRozp1V1QbDecMsnwYAQ6F8m",
  "key10": "4BnoFeh63pGh5wPPvcLWh9fc9FmyenbDNv3bCKLdxP7xp6GcExu6jojiCAKdDd1KpxLWtfdomxwjopxbMJSSU9hL",
  "key11": "4LiHk8SjGMbH7nJQnihnUKAsvs7xW6isiDSCxUk3xmu5W8a71CpLFFCn8SVgwpbiKh7CbZmmpAfvAEWLEJZQT7Sq",
  "key12": "3ez4HKRtNAPj2S5rPQsqQXJi7qDoUCidRHDXdS8EuCxTLQV5B43fVET9F1596uBnNd5fJMnGodkNhFs3J9NbkNTE",
  "key13": "vTk5p3QPtaMK8yYQhGCJDuFDUz6oGc16LzrXT3WPJVRyXtyHTMPtXmnqbe3yEEY3ZPnsuUDyajtdYUmj4wszf3Y",
  "key14": "2D6XZyTarW9WSAcdPrLUX9aDk2isYVizTbozVziMw9d59pGDH8uNpLAFnvU6gdQAHnZKfGHQgtjTqyfv5Hszex1C",
  "key15": "opncr1gzHLaAqs3p81RxFrJ4KA67fu9Y8E2reHcDs7CDShx5ZSKv46Fu6uhJN3LKc6JWdZUBzid8Hv9xaVHEyLo",
  "key16": "2S2rHR6tMMdfLdug3VYkveqSfz6ziQpfkpLFV3Lm5PuFNutH7y1QSn3MxpXbq5h6jAxkHRbVvNRXWdCUw9CynrFN",
  "key17": "YnRQrTNoSJRr5hvhE5zZGLE2b8a25XYf4T1UF1KfEYLRCsBjY6VWT1w3dD8LDNJFGiPY2GngZsEtDFtUAbkjjgt",
  "key18": "YfVbqCdDQaQjkDmH7aKtChQmGCzvkLXKnmY6KB58DoaBDfC5TgAj7koeZyfB79bTFHNcaGoapLCHQhBu1t3Ekgt",
  "key19": "5nTinGsgUF91VzE4RmaHDQBa2X3kZA3vmRsJoeWW1dmVRav4XnTA5ihpQDxjBuST2HMjwFBm8kx9ZpDYTsu5AqMg",
  "key20": "5WJQztUyf6rg2uNtnx6UxuaqdGoA2WgY43hp3KwGUcwUGJ6psLvtYPsm6JFxHZg3eD4PcUJd8Lxw8y2grmTL98Gg",
  "key21": "4KM7PxXWUArwwhdugL1nrb9s5ZFE1VfYP62KpGGevKebPCYz347y9G6w1MsfRgjLErai34M4PBDHrSaqRRRM3ioi",
  "key22": "5hcroNwjAxHXumiHyziiaZ3Ys4zhsH6AZmnz4tCkyhwtS71C7r4Jdgt8omK75sMgQv57aRR7zKQHRA8ea9EnPCYB",
  "key23": "5vQgbzqxqsJtocVqL9qV6N1BmWLq96rhg9j5nHzP8f7uqMLacJD1xj4zBMZo5Qte2XjCECr6vP1Po4MKxvfXvcod",
  "key24": "2teXhEzoQh3EBXLdJd46rVBm8vQBK3X71PVgChVEBE9EXB1QrZPurWgE3HZQQ5tWnDvzsseWo99QC4ooeT7UUTsr",
  "key25": "4q9B37G48idJ6PMRF7BJRGqhaxDySXvA3ddAD2UyGWNeXc2BQ8GBDWKrvrxgSq5X7rRyqvSUo1xtqdAvpjacbZAp"
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
