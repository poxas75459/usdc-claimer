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
    "24hEH1ddYawHJUKiNtYriKbUikv38FMVZU1s2vGiP77BtYtXocybGqEEmX9uw35Ch8mKzLzpapiR8NNda5TtucTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHo9PNPt1XVomMWavgpVWMio1HHgRhXdNnWwaTpA1kYMpSgKoXUxi61VS7KUu61mGva993YCP9BnnoPPURPfv7",
  "key1": "3WxFyPVdxLCn89VHRwV8qpG7u7HyrWYkKkfRqSfHnEfeVondFVguK6DmH9rfFUNA5KBoc3j1MYqCW1ut9atManef",
  "key2": "Rz6ChKmheGT1r6wjNAhUj1gAUX2VaVPM2KycwSS2V4gq8tY74D35BPNsMY6u1rXdDK7cLRFktrso5u21r5UGWRj",
  "key3": "4wAJLSGCSuVvvnZqruQnikUQSdRCxfx3wkAWojGE7poK9vfDfNb1Um69gRB1PGg2bnkrmWrbhkvNjgx7uQfWeDS2",
  "key4": "42zubudmwNXeRaGCst4rGiwjtqocqXGzhBJDGao38tFwKow23XzWsWRm6NWLKdwRKSjzKeyR4s99M8bFSrtn3WR8",
  "key5": "5CYEhqXMppagKSBhuEF9QpLHxN8bs2R9JCG51rPjXRgz1wpPMijtNaFin2mXCDH1LDcTELjZq3TX4RqWvX3DDrPE",
  "key6": "2PY2D8Z983D1ZuDLjQY1BXJPC5byWPy6Enh23gZF8JLKGE13nu6SC6qVXTVF7yCt7zrbp2Hq47JspSc4UprLKfUn",
  "key7": "2ajTah6q8sg2UbNRtrHrneWAJHRs2FgTAdzvxTXe483wH6zCF7NBEMeGiAcZDEt5BnrYjqEHqN6zq2QvD6zRUJN4",
  "key8": "LxVS2V2AALsMCQFXk9rhVLkUG27CbUnibezk3r2g3DPjPG4uDRcWF15kQt9StAM3NzWwmukdQnbbYCRMdTyB9J1",
  "key9": "285L9j32T8CeM8JnTisaSSYPxt64UjGBKmzzvJ4vh1rRvK8KyrbL13W8SujGKF9pabkYC32PeYRUQhPNEspMPyNW",
  "key10": "3yxQBHLi1rDpE8HrNs9Q6GrLvTNjgrdPg5s51gkauTCSFR6uyacNQgGFsxbchZRnQY9eBjR3raAFGbU3EWXsXS9c",
  "key11": "3ytwW39NwE82JhzTzK8uVdDy4huYDT4SrSZbyvHzPjcpa6EZ5pC6qGjb7UeA4XAjsPkRAo9wUChK42TgCzNQygR2",
  "key12": "4Hdyvasr8kxP9iyzTVp4SNyCkA6A4HWrdZtJpWuyKvauFs6ddJyqNizxd6k6HLKnW8ymZdtHssBzaLLUjZvAb91G",
  "key13": "HGL38QgBxRgSK7jzt9wqLqRTiyDacXxKVpjT1zuKh4FNhCnH1CmG4T4UcMaTVSi4oXx8ZEadrLQDz5TW2xwG1Tq",
  "key14": "2tfs7hohK7DzPWVknhViLanL6apsNYJfBVSMZsu3PUjZJwQyfcsXUBNVo2BTuqfGX9rGMAnvUrrdpVCBfrVfydHu",
  "key15": "UoXy1dtGZwJmRwYYTPcUshbzm51d7dV85L2haZ9e1NgQPSFX75t4d6VNaR3SceXwQUWiPRBPZYoTuUJ4Th1Sfvh",
  "key16": "4BKnitbUveP1AEF2kpZ61oZBKhkfVE7ZhV7pVc5kCkW3cVSjVaYJN5cAKr7BYxJPoJZXydb2RMXbJSpZQZzFZowE",
  "key17": "5d8fnqNWALGWc1CeoNR9aEwm5WenGNGyXEXN2boTgexJfaRaQ5sN2mxtKg6D6H2mUCYeZ9457ePBxYrWHH96BtwD",
  "key18": "4FzTo8MxG9nfteRvFerxC3dTjZccxjgPw8e38U5sXbftxPpEJQDpWqpxQXUy8TAjLLqANHCZ2gp63m117wVP7Sz9",
  "key19": "5bUZkinWzLXjyJYvCoYDwUgNVrEBGGW5CGu8TRA2STbSbYPomu1s2B8aYZ2AbQiB7ao8QHvBBUJP7AaQmAEPk9A7",
  "key20": "3vfH2qja6Tx16bAs5yHB3J1rc41app8NdqRHNVuYBYmUsdxJHaCBwsctiUeertA749dUvAfh3nMsvfigZ2YK4xB4",
  "key21": "2cxoNYQDM62wjERBdBGf73aQdnFfqAS8Q2bFXcCacenEAPZAJX9XQ6WLqvbDC7e5VzAExsN3nApWL7LSncGdySy",
  "key22": "3qs7h5rzSqFkfQRGRXVWv2mSceLXg6oskUdVKWrvHu7hDXsFyx6teWrdUnjpmH7KoiPv6XLzoYiuMXFrs9QwE2pP",
  "key23": "YRhKo9yiHmBAEUeUKfAP7DBVfQm1EWuGtiLfJeCbJvdFvDvwspTM4HeicfMWgXmRAsWjHfK4gZN45ufxhchkBsi",
  "key24": "4VuGxXALE7gDYf982HbGySY7B3gNPJfPnxmTFTt22XGsZyziZVfWcCxm7hV5aAYjZqVxoX9bdERhNeYcGLd7CAfs",
  "key25": "3ntEjzieXFVPeSmh66M2pBmu3kMBMYUY53eZbcar4GawdKQZHLPnR78uCcbPskDC6tyHsz2Nag12SH97ffPj6x6k",
  "key26": "39iy7gKKKRwnVz8By9e9zYCSY9TjfBTV48Ehe4Q219eEgb7mGJDHsCeoUHqNE9eCaBFLJSfbgTEZFLTDU1cQSzUw",
  "key27": "4qbVnRk5iRrrusU3dQeNQSGWWN4GgcPdcpVQWNB478b2rUtAGGpu83Vvn2gPJimbybgYq2fXoNPEWQzzhzRtvau5",
  "key28": "3QLTY9iwxavTaYkaztiJY39LBEJXceKbXBjroPAF6PqACkXfJDaUya8aaKbeNpqJVLydyU2z9HEb1TyNFBuapVe4",
  "key29": "2fdhMX68WQGiyNhtxx4jKYBMtmvaJv1mzKi1zZcRrbF6MtFhwTxZSWRYg869922wGLspTdDVau8u9DVWVSMbAwJC",
  "key30": "4buqW3BrN9socM64CyxVWg4SDugsNmQg2eoeYbuy5tgYf5ydpR1YkR7o9ud2hFVkPRq6sHAiZxzbYr8BVcLciF1w",
  "key31": "4FFo2Ci8nJPiwTK8QtjPgjjCxBbtDAYL8DWWDnQjXLXZA2qtyXzuuXEWbmivbgXUZZpfzoA4b6BSbbNvpTgvEasF",
  "key32": "2WmsLv3P7ZTMjpjoQYVETSTcZnEdhKLsdWodBZa1SkgAyWgnuBv4SR45D5bnLG2TL4RLoXAseWphoh4Jn2QaBBwa",
  "key33": "5ozm64Wv3KJDwbvmP5Bgd792KaibjYyDnKxPPMRMJBviDAE2FbNrTiAct6ZjXAAA73aJuWKq67zWVkkHBP4HWowA",
  "key34": "2XaELctrdi9JZC2VGk2cJTSE7LNJMhvivkHYS559FCVDfZYaJfn9tKgtLHgYgxVvWEVZdepRserxgFHorQmqAYxA",
  "key35": "2rNrLswwReFtLZ2djzTDZZW1a1chnBXqHkm9cbRXxjJdwZwQpsi383V4AYSHK4siV9ox8DnZpZwfSJgZRpd4WFUh"
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
