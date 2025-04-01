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
    "3U771RMdSoZkcT12enSBGbm6sChts3yqdsRrK5v4aNHnVgFEhJq92LvptUKwn2WsgxrozDfDV6fmKDvwuUQXJ88q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDfGPeEAbBVrha4DqiM9RrcFrEo41X9N8BMuNBBoZ6cjsWVEjRkyyg4nysem5J6B3RhZsyFtiHd7ZiWwxzyKYay",
  "key1": "pERYyAC2Q432g6EendJJm1yAfC2LSHgHhMXSeHBoRWWDGcHTqnmW1UGTsjRYs5gEBBScojE64Yb1uRd4cMoj7io",
  "key2": "XWFQjzKGsRMMr7VFnKUfARmL8hHNoz6tWK6zD9kw1e3LYnw78eor74yNyvaqx7vvUz42pS3eYLeyLXJTaTYqUKJ",
  "key3": "QQPC4mxkJBjSMAQbrZNJDQ8spm6UtE1GBCakYXirT1YvaYdJAyVifibuG4KqPt2merAErVe7yjeFxUwgxytCcx7",
  "key4": "5M9FKZzi1giiA5Xyxo92FoYxXSLEPA7e36BajS7xGx5b7Ajq4gZoP3CzfKMuGyHQ76SUQ8g4w8DjoKbrZnorpB63",
  "key5": "2b9vr1NJSe2GwL7cCEBeYZCRjiVLaV2LtMDD1MHBoEwCh4oryNwbmYM8qdfM81eC6SF5qd8hi2DfHPDyCKf7pfL8",
  "key6": "5kzVyVnWEgzFwnZ4KPMFJhLNT94uMxhWWVGgdXcyr1iGGsmbrhLFMoZgoHphTEJBsLXTLReY94oZy3R26yBfYsME",
  "key7": "5hfpu7PGPEQWmMXfjJRv9oGDx9Kuz8zGwJTbGGP35wMBR6bmtqvQMyAdGgkQTJ912uEM53xw4DFEiJrbTQyxcRYK",
  "key8": "5q6ADCs2b36xRq1gzspfUS2MSLjNA5dBzNPNXUPtc8Z1mt4qK8DSZ7qbUr2WzaXNUyDAs9HqjX4J6YZJVxnySSWg",
  "key9": "3csB93EVXrpixc1cxgyMregQs3xXbntmmk9spc6iHFezcEMYBefapSMyHb9mpU5dvVvmFyZZSXFWhJ8wCVrk7L9Z",
  "key10": "4u3uEjsz1sZZw9UrxDSdWNfPexT1xy2vnvVz1LaxyA9UQHaQEbBfcoM99uFSfgUzTjrC5AcFKRv6Rgm3vJcE6r7Y",
  "key11": "35gN9FZqEaXXkDvbbSdwN7UyQkSqkksFBHTPKfq4sGoSX23XHLoj1E7BrQD9mTVdvge6ewrfGR9QRNNsBRPgbeVT",
  "key12": "53auDEjM14rFN2YCJUyahx8ittiDBZs4wLRRJP94VWbvuRChKX5CqYmzEpS9FexN1eWzq2rHRNxZeEGrYDKe4QcN",
  "key13": "5dWNhLSPghFMSrtiCFjeJmVJt2B9YzznvoEwW1XvgRsHxZZxcQDgC1RamAAiWfTeSf5HVpffbHTL6Y8GEWHgCqRY",
  "key14": "337mWTi1qm9Q9ptWmfcFwn1b2AWFgqq5pRs2QjDJ85RRF2AGSL2YkM8CUEfAopTKcdrfG8RueqX4Ja7mwru6i6FK",
  "key15": "5pDoErvj5QoaEdaF1Ptk2SrquSvbcCp6WMADyLyRKkZMRSy1kjHVq5zEgVuNzqP4EukdPWewiNHpq2dwwPX3ti1z",
  "key16": "2utDwvwnS98Ay7Xmz2HVWP85YNBQWtYYSzkFkSZ18uRZmD4grLXkry3jmy2o3bHD4LxSGyyXZ1EtgPYyavnm8Dg2",
  "key17": "5QtTUpahho5RQVAZN4DkLAs1mBLFQ8kTCd8izxKa513jHWyvoZjwaANu4nKxokbZ398BHCMrBCVVtwJViR8hTDB2",
  "key18": "2Ydinj7geiaS51QsTHzt9LQKtA21xaZsRGbX9obmaurtavPriE9ae99aJdDnTXF1hAiEHkf8Tonq56W8hGpiCTGd",
  "key19": "3v9sq5vFfQJfcSP634FC7vmrCZr1jZSsJ6RjXRHtB8ZXjNoguiMfrLCXGLTz6gUchnLVUErQ5cFYmxRu6cGoQbxL",
  "key20": "36dRQgW6MgtQEr51e1ANjWSHuEeatoNoQtDTaLmkwtK8DTkwU3LMgkvxvRDveNkv4kiFPb8ACEZn8n6YYuReJ3kh",
  "key21": "4zd8VeA3dzzGb524M5zPBDgiVa4J45bXakjnqi3J21jmq6mK4adNQt2o1utQUXLZAbAaV2X2MPTACew8vZWYrNk2",
  "key22": "Ft3y4FtASqrEFw29MkNei3znfHzDv7h3sMMLjwEoeSQxGA6NQCrJhG3e1pVjuiidpXNGWJzyrRm9EcUygf1fFSS",
  "key23": "4rpxPJV8tiMTEyHuwDbyCp5YNz597eCDPqi5Uh8vstdG3EiDjJT5sDXf7ZNhNqwLpEDHRhHEofPcojBVc4UzwXhc",
  "key24": "47UY9ApdvGBrJsgUtL1RbQ8vgfH6LL2XfW3hg8sdjiV6sVisybGEd4mh4VT388Z6Y5qNzwJzxe6r8kfLbBwUqUS1",
  "key25": "4uTxeFgD71sRABL7ukG4Ph3tU8DF6YJPW3kZRsqAKg7SMMyuSzUYqcXRnRYRUBk6VnNdbroQhU9gzzcPrDeurAUF",
  "key26": "3w3chpqQ95PdYQhucUHifuJmKqz4BnbHTmwrmDmCobJ8CEi7uXaZyfL6LfdJYt3CqWPipGhGBVzzvBsZXcziaEVh",
  "key27": "21jjsZFFVxhKziGKYVN3SJPjFgCiTNh5QgLj15SczNUZ1845W6Jdgt4VgHNUeu8e98q9rEcoz37FSZ7uuZLXv8NS",
  "key28": "3NCYkyaZ4aij3wu3TuexpWihwo6heCh6UuFwqdkexq5Jms6QpvX1e4H7hxCVRbV6rYvPgByDt3SHMrqhjMe2LtjH",
  "key29": "4gr8PvM5FAqQuiGyxPk9hAbjcQhZia6htxzC73n6MPQ1vGYgjMKr88SKLvRHGgBN2xvqHqUtFW2AYNHQ8gTH5Q8W",
  "key30": "5diB5Gb7DoXWamZTX1vceECbbQePvuSq9Jrb53Y94WThjL39anDxkUvVoKnc8z6QtnXHooQN7N8Mn358bAaYYAtG",
  "key31": "2sEWfuKDXoyGkLYRPBbASGaNxp4wEZ3bj2sfra3stTrV9b8Hua6sM9MrMLNcMyakHxP5FAgJ4oLnk3rsZ7fB9ECE",
  "key32": "4nLBDedJNcn9yVNBgg2zgk7Mnj8NNE1eMpVgBXKGYRGdrzqReBbY3P1bYq5tg41ebfRPkbZm8nfj268t4kjFW38k",
  "key33": "3yCx8KVqcKsqKWnsHXttZxwGn9BQy652t1rCkbpUt6gebzawNvMGSCJndG5Mku58mB5FbbyEAuMtXiPt5K64KjNY",
  "key34": "2HGiS2HDhMfwJmgxouCZvQ2AtfskLNcz8iMcmcWsHakEkYUzcM1mR8JiudznC5uLT3KVFMHK9yHSDRr6eaHdKPaf",
  "key35": "64aUGQ1hmLEPdMRxSRiAAvVBaHFixSomt6pNA2784aw8T7gRaNJDYM6fBtBiGsoH67ET2cMYwfuC2ajr5s9wKeNA",
  "key36": "4dVQgGhB7pA9QSUxEd7aAQR5WJUxhm4Pn8JLmqkFzwaix6974jK2EcdCYdxcY6cNjHj2eUR7ioCxKszKpWpwPTAE",
  "key37": "p268JxveChmEunUCXShEE7FkXd84zw29eMdDrQxdZ2CAZBK78UKAtyFGq4awojDGEu4jfRA27abvSetKiqrWT66"
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
