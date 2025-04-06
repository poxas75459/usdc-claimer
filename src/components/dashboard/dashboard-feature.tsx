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
    "65XhhyEAnjY8ctBHmvEn9ngYgcpaTJuBhrxBT18w5zt9ZpAjxpuXzZ2pJUmUEUf5wMrsqvZ1udKKmXcccB4jNTPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irbfUMZ69nCbEMMnyHU97cXjFwbHjMJGfYjWFpVcckjZ2jdCTotdRZpcesVYHgCfJo6bs71ytpG16ojxk2yfDK6",
  "key1": "5GWz4QUhx5iQdQZSPDk4mGB5z8kq6NuoQNh8743GqXiN1hKLm2Tmaj7DTtPENEQH63ZkPbt45m681cPB23on2KVK",
  "key2": "4iiHncMPEGsNaqjiSJovm92CWJJP4FwzLfgZZp8tgDB2Q4fjWJshjft2foYCDFm9h5SCHTsADra2yhn6efEiZH8v",
  "key3": "5kHNu6Vc35uAv4NnMkhZHpjnd8Hhs9WQipX39DtgBx6Nr7i1dFD8oZGGXyzSqrUmBbTLxZ4ZpGeRojxrDW2nzojf",
  "key4": "4wouqAwuuUpgivFHzDfTnDgewSnCKew5cnxj5AFnoB39merPPrJRe2RxzMbQ9U1DakpfQbYzNMdob975qR61VNfK",
  "key5": "4CUpGFry4f7LetTFxyk5zhvtPvih6rvweoZkPwqpzYQfr3reBy21Z7CUm6Phz3ikWtoW3KzpjDrsZFNp9DrR9EW1",
  "key6": "5ERvVofnqEoJ66Ng41uTi1Tu7n9xio7gJZsETfg9HySrA9Sn6wmpnVPZKBRYvK7veasu6jmX5Z5YC6v5Bcxo3PiE",
  "key7": "2WkDmKvsDokkxG4xvTASfbW9zHugsVmck6ney6M9rvtSrHopDxXREJ5qc81QZoW1akCn1Ub15qo8G2h57SLPK3yf",
  "key8": "CCTYBMP3GRw4wEJ5wxwWgR5oseLfajdYszwHrQDhEdh5NbKYTS4bLBRykvXZvFcwTu42LRLsr7uvV2FCFvt3QA4",
  "key9": "5GS4nK8UWFgGTPwatcGQSP4m2HzKgHrABSMPbF4u68JrwXV9ek8bHd1ej7xpLJF1yJmiMx4eEfPgQDZuwaxkV4wg",
  "key10": "56RARbswEtBkao6apfMrGtkybEGuuBaPiFmMAJ584NHYx5vV3kbeQuSR499etWPpwfKw7uxoMB4KiwVi7iF1YTYz",
  "key11": "GrU6zW76Z2EFieTTPuj253Yrcfn8EfjSMYSfHYmPdhW1JU9YAk8ZefzMsQ6A2fBTLsgnfRFNz3K2Vr57EZECCUg",
  "key12": "2wGaEqUcqVc4P9BMFtp11f28n4yt7RTZK72is1Sbspg2qtMro6ZJoARmJrCqF4cgq1PecrA1q9EgyyfDhDHL8vte",
  "key13": "4GQSbB5GF6hymiuZ11bBDNkgg1CukUMi2vVSk9tSvWq1xTsrjWeNnhRrPd85U1apbigfNCyhk3FAADrCCrqWwAkw",
  "key14": "29NisVSARaxtcNWF2QQXnSydE7D5832s23tPiyaaxjd1WXB8vujuh5CN2AS86ztwCEomDn26AnyYtqUkqnQ1ycuu",
  "key15": "4kZxvYCBufQ46UrY7fLLj4xMqLrEtVcr8gtM9EthJji1xAi2rw7uCBqu72Jy9tyNGNxG2GdsEkYWJHcCxYa8PtUF",
  "key16": "7mywS3ghFhdizfxM8jmMALH65nfvbFXa7iJSgKewHTBxG1hwQtPaBr3nQo6joPwZk3MFDgxV93y7i2aAjqBhUoA",
  "key17": "4WyNdehnB1YvzY6gKhVMdAUBZnuf7r1A9pNr4Kv1bQVnbugv83aUfbJ5Zm7dRpsGjYhGsTa3HNTGKr9PsEd4wDgK",
  "key18": "3hdQG9gzwx6ZGNGHjji1ZhaqtUxrcuKfummUHyCtXeqhgm9KBcRAGTFe9Krn1ALdkNYRdCCSoHPtjrChnDxzLgd3",
  "key19": "4MmFj8Rp6McXa59AezXVKHzRe9gMmWj9ZwDWeyxHYaz9FUCSkz2HLKGX6i4KNRucPo2TY9sHb9JLHb2M1bX8zEQX",
  "key20": "yCrCJj23cA8gmEyGkWpUi9wzPBL7r1QeDF754nsensxUacDzy99tWLizgGs8ddwai2wyYBYn4h6MxfwNjcLTxVS",
  "key21": "2TeMGE6bcGha5BAjjHEec8D2Q7pyvmCk3oqLHkQnjSkZ47xkKWb6FJQsg4JUijnP6r4osMk6JoBrM8G7T3afkMN6",
  "key22": "2NFn447TGCj86QgA7LRF6KAF7XeWWRB36jjvdpuwamb83jrH8fQAkqN16HwvRawsFnLahbfhCxPzFDopvXn4rMgj",
  "key23": "6QymjtSC3NboABzQc2XmDmPs8Veq6WAsMzz8RnRw5w5KDGCf8A53bS9K3rgsJrzxppS9QEAwLy86iTBkoss3h9s",
  "key24": "3eBaXYFKoRAUrQstHpTLfucsuLuu2JR381E81DzHsvF3ifKRBxNPUMUy7Fg7Q8GZe2qqwpqvTczNkDgx4yfadmw3",
  "key25": "67ASWRX9QD3eipSMyDMwss7DBZ6eq5vhSuoSBCAqXaoDumxeSpZZNR9hRn119aGGfffKN73BGe2ApzmxJWpy4FJ2",
  "key26": "47w96VY9SAX5CTcL3fRuERFxcPmvMSYWrxikFXAt5ggN89GVtJSgSST3XXJn5Bk68tifNTF83mgS319SYP5jCVN6",
  "key27": "WwiN9A7tXP83nnmVJFEujpAzBHqhtJCvEsotahg5tKMQmMsKSiDrMkQAVBaFeSUrE4RnVAaC6MzWAftdRrup1cX",
  "key28": "4nBrFDVAMRQoYbGAUiEv4UaMDPbDVsxFWPXUKvwYd1Dejo8xK9hnpkJQATAmRjcFxLkAx4X7eM8sdiU5V2xuG65Z",
  "key29": "jsT6fwVgkhCqugfx4ubyUg5FboHT6jUzPXfRgE2iSqzppXvsnjYr4ehRnRhjHB82qWJ5DpLGtZi2E4vtLm8Xbr5",
  "key30": "3dfe78QLx5DqNW2DDfMBhCQqCsAt5SXFPCZpjZs94oVMBMWpU6diFWzGWo1ZG9utNR6TrkgQTgj1DrApm8SvUSgN",
  "key31": "3jnb3K23w16X8zJ2pNYKKbZMups77P7z28EpEias4Xqj64kg35uFcW6GZPT4yAHv4nrQdnwpjjJUiTpSxNpoZXB2"
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
