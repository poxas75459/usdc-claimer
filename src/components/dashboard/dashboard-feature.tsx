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
    "2bCEFtdgQWNmA5rtca6SzBk61p1eSpzB4aQXwKiZMT4ZspR9Kctzbk9CYsQuwq4KCXJ2BcGoMnB8xuZcrS54PGM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UFe7M83LpaQRsT4QZW16J8aXY2osSyguryJFHoRGh7TGk9G1m63BhbS1sKpxzqbeoKEdpJNBsL3LjDZn2ceGyeL",
  "key1": "49cN6Zitw3atSA8E2biMwjUZFVr9hXqqxbPixRTMdbMEhL2Guq7ACjDJhY9pgjGJbZ1DFzBF15Hxpti2KsHpWdAb",
  "key2": "4mVgBLaC7y3Nj9oj5bXaSRaCV17jYf4RNZWaJ8HDfujqrZJV4dVPt8rMNtd5bpSYRvQ4Srify35AZR8qwPHU1J3d",
  "key3": "5wRK9SqZpTr28re9aAkxZPBo7omM7spy9q3gqmxmdoTWYoKXHgVyt8n4W1cXkgGZZWF8hdHNA7dubf4GAxDjCJYF",
  "key4": "5xU2PZRSGBJiYXAM1Hj4VywsMJjtdHqkLszWSgF54DtPLAiopDVaGp12j7B3BBUn6SRF3wnfaDMAeyAL1naimtjt",
  "key5": "43XrijjgyzAUmQByXatABRcW7gLcLzcwpCpL9qRRyZX1oDxsEE8AfDjwdfjw2sAGmvSLDDwprgFAt4qDwRg2kZY1",
  "key6": "3vVhiT1rCDRgMNxxpFehzTasBenAbzZLdz4aVCjZUK9uXWQADahq6vVGFC36Q3Amx74XFS5FTdidE4JUk3pH4RaE",
  "key7": "5vPRvLpooFdLCxXBGz9XFiNK8BHGpmne9hUR2cvGzM7hqhXoPiE2aHncAyZgk1pRW4exg91miF9XSETH3T2g2JMu",
  "key8": "5uvACFHWzNNND5iUZGi35oV2ToytLjnzg5oE6AybQ4BGRE7QzHc7w7yXH3CEdMxxKjY5MHtuVuPAYA1Gtzhr56Eh",
  "key9": "uY4bReD2YxYH3G8CKgvAosPVkV3hMYrqoYc1LSvd3qAuCDDoJbi8jF6QaHC1Dkuh1Mzbc5JQ8LegTyDVdpXsRPP",
  "key10": "5ZSkQUrT9psmNKHBfnQJYSMPn9utF4h3jrrxCmpZiwbxhoagv8jWWoP2LrcNmfY6cHwvFaVYXF5EZiT9tQF2vFdo",
  "key11": "2itxVU1So9KTii2SdK98QRdRP88QqgUb94o5pXhsbN4sKWFuHk3iWLrEGGQ3qRRJ1LTqbFkzyPjWizRef4ZiqwqS",
  "key12": "4rxdMrEwQuHVukBS2GMmKqFSAqnyxhuwJY8mtv7XeTyQBUjVZwmhLSrKy314secWQ153Men5ifvRrtZL9QzunjE5",
  "key13": "65tcZG4WhKJnNNhqBrW1aXSeDKfDR2peg9msRnhP3zvG6fMqnhPG4PQjXko3ak2WU8V7E3efKEBKVatJskMnMtCy",
  "key14": "39Dauoa9AZKkrLEabgYE216kNEk1JggzjyF94um3yjXfkmSu6G4afJq1FE6Y9s5sB4SEDCrpHMt8QRTuxdAzGdW3",
  "key15": "4UZ7A82sBherwTWfE9uyEj1QFQHoKU2abnVhnBWMCV2dmzY32yP4h7hbr2tpwBFeVancoFaQxTheEoDbJ6rhQrX2",
  "key16": "4zZGFbQMRYXost75XZr1KKkpaZkMjfM5vYCzP9pFWBa8SPJNp5XV55Zdg9ms9kNsefj1QABmVrPYgHuzAku53yiq",
  "key17": "2x1V48zFPgoTjfMqSH9cNdvyknKhWTqgrEiW2RdhtDJtuMTfmvEZkpSJbA9yfg7rQEjDDmrhVXUjogo5yWpAypYN",
  "key18": "4Eiq3CXbghrBc6jwTsneSud5C7ASZtZazXaXtDCTQaqmziYgWUsYWUMqH4B88tDHKKMbrzLdnLbqyhVgLo1M7jA5",
  "key19": "4g7jk5zS5dYJrQsHHgJz6kqAXFM6WPUtKvJxR8THPQAxbpgbE4u2VmWRttVyeckFGLseR2khiGdJcXipUd53SEPL",
  "key20": "2rfh7GwPpzzcEEDSWCRAHDaywNbioinpjDpmqUMgSSPdN147gCYm9srmupg4FtebXQHEYRJMy8vjx3PGfkDTxvUT",
  "key21": "47VvceY6T3CDGH9LSSMrL3UfiCpiWSzUbVcAESk7LnJoKGRma3E9aacWhs7PWxbXofdNQnNCd7ay1NzPvnbVDZWF",
  "key22": "R34g7xbKgarTPQg8GnL6LmrS1EAjZzqoCct2UCc2tfSCHnNtN6UxjbevHnGNBEkG8mTJNp5sHrJpxE4ky1Ywwk8",
  "key23": "8BoaQ3ZxmxfoxbbM5gczwusCZ2YbeHxSZY8JRBxZVYBEdhe3dFH8s6UsvFQHgGwquic9jWnC2soyvpJpqpmDoAM",
  "key24": "4juDDtzkgzT8JrPg3diUw678PAfzxhjuCHmgasM5EjU6BfZqWZhT2uLDuaRJ7ak1kVpfBKTpH3S7LDPYsKt9mnoA",
  "key25": "4a2dggRrFh4LZGFY4sxehshZ9weWqk7Qa33LMN2jsAAFeQmmbmMb4tUeNygfouRhJLAwoDgTAG4iEj4PU79auAir",
  "key26": "66XPSbmRD5kNp5YfTdkqF5FpvJv3TKUE8NnWMH9Y8qopSD41ssokTS9zsNAVeL5WCsbCBcFY7tNQ1WZGt17Eg6S2",
  "key27": "4kMRwqoVsjb3Yq4ehDLo45Gzy5mN76heHQBrhEAKv3uxnuUumAzHTEjbetLBZYFbgYyCJg7g1Sh71o2LgREKU6GR",
  "key28": "6448Kp35Q5carfwaFGwCyAd8SbVkdJF9sXat4Xn81Q95tynKe1FKfTBdWZffr1SbDXssPd1jaWyAp2JFRrT9M5uK",
  "key29": "54KDYucGjKcZfKs8uCmzr61wpnvZ9DPdAM76P9yaLzqHSaz2H8MBnQQPKhdkbmY4mRknyBu2bATWwW8J9S4UYLg3",
  "key30": "Rd1roEsjQs6h3H9wejPc47rycZu57KBgAWH62bXyyyPWyUMReqSHMX6uLvSZQkQFRNiTSHsud93bX5Ztz3ggVE1",
  "key31": "jZU3Q6fsxQvUXKnccQUrey8TqcQAG1UVuEPUNWEF2yUmQLE6tNnkmLJSc9MN4aFGaGbTNNyG7o74HH6tTvwHBMB",
  "key32": "iqxQJsVM78hFb9ZemyvN8LfSWF8Botu9TwFsWi61ZpAqapFLQ9JdmQzUEK55XmyVrpcwxCserzZ6B1Ce4EMtSyn"
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
