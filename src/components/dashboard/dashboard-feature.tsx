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
    "4u4CECVPndVbqWcbJsCw1oU6xauDBu5PTF8EZbsWKuVrnC88wLv7DqzveWqCDLh475Gf1pL5ao5SxYNmSAsUe3qM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39oW5k7YYHVdRpqn6KugjvwBZ5ZeEihi2Td5wLRy4WnAEioVTtobr61Bcr5tRiue3GygMPnTSTk8ZUPoHnyDiFkK",
  "key1": "2f11yJN219ZkT2Sc2FdsjfGwod9tEJXufiiVrWXFLMWsTUQQhB4cBnXZUqz38v5euLr7n2ijEHbEWwcMAzL2EEmH",
  "key2": "3rkDUeEaYdcvJ6HKj9kPWJ1xwMpNjb4VJHQKHKyWx4T1aXzURKKJKWZrC5Mo9kWCckY5qJXhJNBuUQLeUivEzErb",
  "key3": "4kCnrMjJpEJ4LjF8uZmZVCiiFSh3bUBfUmdnYoMLCXiCZZN8XVHyjjzJZaR2pdaYosp77MiqxkeVzWSEmbhTjfgt",
  "key4": "5Yqr4dwnyXQmwiRDw4bARwh494bL1bgBvWH9B7j85TFrL8USDYEsbFgkkEGAQoJkbmUZ4mB7CxKsnAn7nKBzn8gr",
  "key5": "4MvhCnL5fmYRRYe6LPiL1cKs7bBqCRyvU7cTw5zdSfz4ts93W6v1tFuMBxHEMGuqnVsZwA9Ke6smY2GEszALXsFM",
  "key6": "43vSQ3jsdUyMMtDU5yayiGjJApi6eCXHJmYNeScnSFtgxxWAnTAg3KvWKx2PuEnLB9t6DRqkSKMtY2qh4PV1XhEt",
  "key7": "4ZbiXEQwyrKaUnMHK2T397iaQybJm8wQoU7sk4acefudegnQRLFKJUtT3S4kRyTWj3Czg7Y8DXGcH7TYdqNXFZ73",
  "key8": "4jRsitiyor3L4ivfApavmpDusrA8nP7qXaUWAgJycBa5k5XNtjCPrFowKPWYYbPKK8X5nuFTREv5kZKbqahxQ6pr",
  "key9": "5ECi6UTnpCSaH8ctXTxabc2fEfqtdNCYWgqSoVNopGw7h5UjhxKck1g9j1PgJohFg663XuwxeUEDoY6aVSJArx1B",
  "key10": "1xmRAd4ftyngf6HuWdtsXq7y6Puy72zaWBbvwSo3YhkCAJF3ofqCv1ef2GKUjq4sSQSKShbwn2cyiaTCQ2ra3T2",
  "key11": "5RqWdCQKAQtF94msSbTxpbdjnmvfPk9KNnLWBdNKgafYqK4boiHqpuaaif6JjZ4SR5PaHv16NwcD3Yp95RWet9TX",
  "key12": "4AbWDtigsTtULKhrt6CqK3b4JtFd7dZRuSXekGbSSrPwxA8cUviaini8TDsiEYtCUFkBYgrUCqHQte7ZaSLaRR9K",
  "key13": "5KVzFUvMBtArUYY2GkjhKnkxxeDEWHFuYN44fzZzM9B5qEdswWvjhyePCDb2rUHkNXA34P2sYrH4XuddJVmqrFms",
  "key14": "4BYfmdc7t9y7Rpfje2FZ2QHpXaDw4Wa7Sx8KAbHNjaHeCfskKVFrSFTAhiFnJMM9BMTMi3Vrk5hmau4BpRpCCd9R",
  "key15": "2p7p4SsDike4jzDVYCauNCSkWsS44kwp8DtUQ8eyAk94rtuJxTNrbJJsQagcA1Kqtw9r3KEExRL5MLtacQdRs4tH",
  "key16": "4E2e4PK41uA4kWoun11Yv6yTtsTWyvpVhhmBnuUKF33PeUtW4nNwbj4sW8Za7yeDcP53NBi4QcUeLwfmbvCgZGp7",
  "key17": "23k9a5qCPy5ohYW2YTUo1VfRhCWC665BxYRVbi3MSpoQzH9yRqVXpTrEieAP2k8aTiht5N8SxWah2pxc9JqtjQgL",
  "key18": "5S15hoRG2WbpAVdksLPTvtmoNWbrPemGhTJRpGHGe3xiwZM44HszaYv5KJcyXffVpH2SjrvXeSJSJCxJ9H94ENhy",
  "key19": "4UM4fCmRL5LJxbSKQWuD5JfoR89XxpjVsRZEQM9taAeKahV56ASLhVqb747yotP3xpLYhohCR2mfVWvc9SNztWFL",
  "key20": "3LZPNJbJuaUM9Jzg73wdbZpmTc9s7iU1mYV5yRCmPzEMzMaDHAE6kC1BGXeVWUvNRoeQe2adfmccGh8ScKPJAkDg",
  "key21": "3mTdoV4LNP31nPC1M3dhVmnzSPS4qUvFjAD3axnECKqJLgBa2DvR2DFtkMyxhBQE3T72Yfpwnms2wUimmdNmzUTH",
  "key22": "5W6w8drCDNWfe9FVF4QZsKLZUgxVh3U6PCrFD51nvCeTJWDTDEzwUfBbnPwKBVhYFrQWoszbBeuMeUrrQCVg8rzR",
  "key23": "553TXHosSa8xTwT3xsU4g6iSiNcrv4DJMJx6JDzwZKFizD5pbjfNFUzHoyrmwboWUMgSga9xq5piHAR5zVzn1suv",
  "key24": "5cWgiCRdLuzXMaMrg1FtPAQYAVf9msHxFSmmRAXSoznNHfFiqW4mQ6wdhQFjgZheFX6bi3pjUJ4Mnxp5qjpFf9yU",
  "key25": "2nEfJeDJFa5f9c1SeUmdYFb54u62Ex7e6gwW5uMT8BCsY2pmREAmKgt8BsiUJqChqWpszmfNXyj4NnU45U6vmSg3",
  "key26": "35agTriehTUieeQJixPSHV8sg6tAg3pbpLqkgEDKmAY79cQg6kJ9QwyaBJYLTAEUKwubrfLP5Qybk9foL6o682Sz",
  "key27": "5kMKCB1NesBY5iwtTkY3yqFhMc8cFjz4xzEdHjXtGGfaHydUGKRtrtKmsptT9vEw2uB8c97pGadxx1CnnsdVire8",
  "key28": "3MqU5MZbuyBdmJrEBq61YEDc3cDVXrLunbxtPA1s343nfe5ApypKhAmkRdYmztEpF3tJjBuAxDpZJpKPg2Qoyx4r",
  "key29": "4mqUNzwoFPFAzUm8gBD1NJFEu15D7SQFGRVMVchmUsCi6z7gwoEsLCaAVyY4TJVKeEUszVDWmKvgiAC7XN8DfaQs",
  "key30": "2W5YZ3gpL5ajp9kwUNsYSnv4DbzB99msvn71hrvwaPCJAzxmq2AyEAbNEvK4cpZqMdC14nac2tCz1MSF96kLkj68",
  "key31": "45LhFCYDj7wDFLdEk7uPeM1LTWv3Qp7GdBEg4xSin9S8nd665x5jKCfbb1xZGCZ8qZibagTauqafMvSArZ6kJHRj",
  "key32": "2YrhynpPAJt4uLgugHLKZpSkDQW9i9WTh1P3hkb2SJTVZutNVfWWEdyKZtGRrjLTSXqFV7VTCq9wgnKmqosXU7Mv",
  "key33": "2maVkNVeQktKqhEWRBeD5FRqRho658jTe8sr86H5zpYatH3CCtCknm6Gpg5XpkmrSwV655GxFnfLBsN29u2BFVE3",
  "key34": "vpZdjELfmgsK4dD6qtmmpL2G6hTT22pdRexRSeJvTXmmB9DuLgCgapihHni5wUGyKb7jF5E6GTNT59eGcXHyUMX",
  "key35": "4f9GJ2ZFYsoheqapXY2zgwk274XoEASjjrWQFpuAhkh555f6ZbrMpS3v7Zk2Dw4wdc98ELHHrbv6MC2AUYZxag9G",
  "key36": "65n97RbtcVtAbRVzsC6n8nxrRrQaYDTtu1Wnt9V1wA1TyPqF1tygRfDar5bEg7G6Xz1gj77QiiuNuvf8ZKECAmFK",
  "key37": "25ipDMNYe1DWfigkXqY1XXD5bwSgQQrK1EeMSW36SQRp7ZcT4vayeNPkAyZLWjD4tvQccNgj9tg9kpXhLh2VHem7",
  "key38": "4DXNXbNBhGLKuagMkUAJp29JECCoxYboXQhDBAjfhkjRwHYwNf3sZK57crLny4vBvnbsZTCYBzR8gL5Z7oBenDfx",
  "key39": "2KiNDzSXBArcDkxstqRFWDvFMsarXv27xoJNLk9eM21ehjZXXnFf897fMrqJxYjj4FpFtfJbEw4rbfLfKrL3zhPo",
  "key40": "5VCkfy6cDK2Xb42G94h3ULPfxhqHLVBMyY2S2S1gniXPL6G3tPEcBPLSUw2WP9qFSPuyCPKPzCrCEB3SVwoZo63T",
  "key41": "4jXpV8YUFfApwtZ8bawyV3czYGPSGBDaCxnca2n67sgPYmbHqpavLqFHP2WLZuf5GQuTysLUYVr22xKJ79kUomNT",
  "key42": "LBDBdaSm14Ygr9PvT43d76qvBb8wNmRTcQcvXuyaZ46uJBJyr5p7NF99oadQYkUt2ZkJmyDPcDpbwBwocYTcUUk",
  "key43": "5UfbLuASHmfwk9JA19T2a62jhoeodEvsi8uwHgu1GwEuD8RERGocDcD7SdTLRN5tMo9irEk1LWPhiJnCGngJMSZY",
  "key44": "5b7MxdUYxUMmnQjh29951DTneVFEQSKmWJ8acESN3fyDvpH4W3x3xa8pTVCYfmiVmEM6EL6DTaBSYPqAZH6ziRR8"
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
