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
    "4nZaaZKqPMMSmdvphmLtFsvYT7vf1gif9Lyu6qXsKft2wtUQLkyM6BzKwLLHZKQFd584yjidDZAW8poGcGGJ3GvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6uLMmaNLtgQamUodxzGPHheRbBTpCxgGHduFjavpVTYyx9ZC49wYGAWLFCeWaEmZQoJZFjE4JjyquZDZQJAN7h",
  "key1": "4ubRUHP1waNbfCoLdpezLZ76tNXaG1dNem1bFSXfGKf3YydHcTHjn8W5ReK2oyfnoQN5cgBsP2CPdyRSeKhHp4iw",
  "key2": "5mCkc2yBzQ5qudFLjiRkZktbz2hRfNWthrgAsZbLBteV4bLL6nn29JqQ9hniMySupYEMf34K1GwXE1XBk1unh34Y",
  "key3": "2242hQfrshg3RNMva2x2Eq6DLuZFYbnsGTytGiru7JutDg6xacnBtrsqZN341kB6ci9DumP6bcgaWA4Kqs1fAkg5",
  "key4": "5tYq68eQFMDEN8yBKJmMAKjxdG6X9jNrgy8t2ugEeVTPi6BaQTVQTxcL2RPJiuAJgLS14aLErp9Q22JZG5qrV71C",
  "key5": "5TbcX5e2CVXvqK5G6d7mTExgwZGL6aZKHjqCbFGHLErVCN4hb3HRP6Sg5AF67haEVSBuKZaceNJwHFqEKD8JDMPL",
  "key6": "2pKV9GUNEmKsYK3qwWaSbDvDdrwo9BoFd4ARZxLyZVFoMcynS5d7L8DjozgMNshLXw6NTHsyho6dAwPHHtgKV9ou",
  "key7": "LsW3aRqhiN2ESfb9sc1Rpgema6Lo3BxstEBJxc5po41vbpGRECTbGq9pozAeHPCWHKRiKS6AFY9aZSQQrKBKuz2",
  "key8": "Kv8b5Zp4JwH1F33sBmJDkDhbhcJcmEEmKLw99Le9k8SggD5ocR8vN1SuEovNDNoB6ktuGDzyHTUmfu7cDjQnSF4",
  "key9": "28emt34L8kri4xGjArHq4upt2ZGxh9NjbAm85oPPv8R1SDNCEQZWE97u4w4QN8TVkgrgVU5KBERA3vtPpqpJdr6p",
  "key10": "4pw5WnMDcuGUi7aetmGyNNLhx37a4mHKWvktEceXUjNi5QLEGSgVESUXWMQmJe6x681xbkL7uYhMwKCaG1mTQF32",
  "key11": "S2oni3s2u58CW5KZxFxBDkSuxdozgoTgNPJD3FQpXaNuhWrvkvNsqTvSXKsSSxH5PDLcUP9DitXu8USWvgTexgq",
  "key12": "62fVuSFYjcK1ASHABMRVW7f5WKDbdpuNcuQXsQA4mqH7eSVpyeEs1TxrbecZiJJJSb4hmCoExfepr2zqV9dKwANW",
  "key13": "vESPMkJKxMWeoWWCHaiUT49dUubZLg6yWzLdqSKE7sYbTqVhuRhQXtGGcsWCiWbDRQ9TkhPEsvqchiYce5yPBHP",
  "key14": "z2EXPXnNFjdzZFPyA3ajCQfSS227wKKUeKT8s4PFf2B1spupPkTj8r9hyhsW2bhxCzspF3hZ6rx89cDyE5A3Z6q",
  "key15": "3EgHVTXXGVqm66eAuT2W9L87PyM3q58SMvWr2RGJTuaTqFP75x3qhVLFUZWi5BPaREKr1aJpkv553AoJH9329xJJ",
  "key16": "3mJWtxLQG7CWM2W1WoaMSqqfEhUNqojLRaGmKYCdBsK3nGRmRT1wnZeq5huoBd1rHZ7kzhnRDKYNermvqhLr356T",
  "key17": "5SWMW1Whff4aduCxajJQW654MM8pSiyo88PAT7vdmeyfuKGvmXUStndRi4h9ChpHqsq2ejrD5yas8hmwWYMkvd6",
  "key18": "614mL4rem1DStx3uyeCmAhVnEJjrLJozy8mVzwKoNjc4zcaiXuEUDm4HFZrVhtuXofM4S92jF9P25ra1CMjREGTb",
  "key19": "2ZD7s4FHYsUYd3zHSK3MiD8vjDKaa5TbUka8uQxUkGWwbNWdxtFTB3yjCgU4FDZKPdB5P9oZC3vARAWABQ9shssA",
  "key20": "iCwJc1qNCJeztXkNKX2u8YsRYbrRh6kVExX23kBVBkoV51BvLsioQyt2ZSqSfWGBoJMWXSwQTPHi8QLrrVhhV21",
  "key21": "2QUkp5ryGPc5YCzCjgqknN4T4ZucwsYQ7rWPyGA1gveaohyFUXF5eRwvHznFwBxtub5HqrBRfCGoGWM1ovFMFr3G",
  "key22": "5PWXqRLGht2wmfAN5B27iwEa8VjTwPhEAg229VEB6FLwVYcdRjXJH1oKkqhMdWr2Rz2u4AfiKt2Vvhi5725doQ7U",
  "key23": "45WGv4nps6mKubEbTCBVMVd7PZ2kHJAGCcsW94pyaNLXYeQBtp3pQmjrCFCwgiKMvGXwhTwwd13JHVghg18SAusF",
  "key24": "2LkQ5WXDLTBvBmsTtHk3S252DFTizomFbBkv7o2xfHUoAW3yLbrWgS5AFfDaRaYJdwjzQGEbCaURXMkLTa65Hns2",
  "key25": "2EaQ38GV5Fd1U7Urx137m6E64worCBw8iMu9UGifyoGjqH1FbPHFzovYBPrYCwmyoACHAkLV4vTKtnbd4mTSuRLs",
  "key26": "EuCZaj9uvafBucnVECUkiNmRib7JLhQA5wzsYFpbSmWf3ayEsCqqZ4ogT8Hcveqej9dVqugQKBn8hS3bUnSRwoe",
  "key27": "52Nm8J4S357V1FYzq3C7yTmvnL92iND334Gy4VEob5M5RxVNXgJWubvrjVYfar8J7LBnShnWxD5rvyQyXJ4LCcHS",
  "key28": "61FJYsRWx6qytH6TqqkGaAWwoyAMMZqrAGoipLouwzrbnbaezgUvzLTysoSdhzWGTxFJZW3ZHWfBUvbDQR3MQZcT",
  "key29": "3cSzHfrf4BfBm92KHfUXMtuceYuJayKgnCWyq1NkLkaYoAbw5RWSTkacwV4tB3ySECSpuVxBXKph5QzaCdcAGVVH",
  "key30": "3weMZ496yGVe2PmTVNkZxsASuTcb4SV5WPDD3A6XjqeUtawMkAkuJpHvoMt65RmxU5FdEcHM5tjCBGLxzFFY2wnA",
  "key31": "4J6JAQg3RwXv7WrbGzr3gjHxZUarAe14NZM4tk2p6SxyHAzQ7yJ1gqyne7LFV7RNLod6XHrKFiCFPmXb2ZqK6S1M",
  "key32": "WnwUrcr7msycTCDQBRk11Ek4YKiaTCMwNbdGmkCqoosRw3GdqyRswKDfEgUkfoWDkmdJ3xfa51oTo4qPB2RJmwF",
  "key33": "5LHCtn3PzVJEqAmSvSYBdigZatd8kn4rkTJTjxMh4VQFW4pUbX1Qnx3WCDj7Uxnhxd1vmZ5UfdMf1HMBmUGab27D",
  "key34": "3urhL96cGUZvK3hSM7GpUUnJYonLhzDc3eeC2i7Nb7AfPPpmTEji9et9YRoVtAQ8LNkxUTPVNpGQxaMa1V8SZeC8",
  "key35": "42tmgAqQjAWrK6NsEC8qMS4APkFyXpFReebvx7svQUsSLcHbbeoMd7M5hapJtkFxhKMJXih7d79KeeDQSiHQa4Jv",
  "key36": "5vRSPYu2rnMACendU2QirjsFXESBZwKph4QvjBy9oBVA6pxPnNZEhBi4k65Bw8NpqRRMbUDBRPoK7quawxXEQAGg",
  "key37": "8yCMDZB44fEzg4qHrQyKv7SnPibfLA2Tv2LUE2jJn7PJsu2WquPffFVPv1rNugaazAVuCoBgKyEZbspYF6Z3MVB",
  "key38": "ybtmF1adVjMtUPbUGD9x5hVZTxLt5BhMFMVqQHkR7xp93cEH8YD8btb5C49d8YN5y3vtScKxeF1JDHNc9oBHYx1",
  "key39": "fVgLAXiDExaVXPiWLvBUuBtpZBRYPcChBCGaPiuLhx8Pq375xjURQJAtM2uK7m3S6YrTyGEw639emLFFhB83o79",
  "key40": "5wMdnZ3RmzYqLAr8a5a1GorszzVtwRMLk4jhoSYWFEHiV12houssG3C2EadqucNXsDbEVxPh9y8FpY34NuyQNfyc",
  "key41": "2ajHeSz2ebQ8T9wVwSR4FxRhGo6BBPnXjuRAF9R8VAnkCtrvxVZd4eGB6NzGLT1bSazuEpiyW1gZN8vLmeVaqGwT"
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
