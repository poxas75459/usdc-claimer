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
    "4ofqqj7wV946GkxKoP764b4krxyfhPnDYbjTkht2Se3aotEoBUkUhKrNGkLLHo9ffFKtrxz4rZcxYJzPprAJQ2xZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33XSJyJhryV6Mn1k64BwHLrpH7JpbJ2v4huaFC8nucybwjPcrMHxcSc5rL5r2UhZe5fodqmiajzeXXVxutjnaCgF",
  "key1": "4yXfUtNeU66sZ4SjDzbsHQw4DBesFVh2GBtpTLGGc5nwkfLAsGCDRhgBkngPeLnvcsQJYvoTdy99r21xHRnxi4aB",
  "key2": "5PV7MTkMtrvFTE8AmPG9DqCzzi9iesAjo7ye5wGC82ryC62B45toAc7kyLd5An6wLdGnzYgyZhqbPLvhxaZY3cPG",
  "key3": "5zURUpTYLpibJeZ43tKhgAWQACCp42JBF51RrJZDxN5cAeTcSiTEbyHVPbHuVxqTJfd5RGuJWnS9ZbNpZkxvR2kX",
  "key4": "wfQfjtxHfdXcRgVSRQMLYXQji8fKLe17SdDurPV4C2U61dGCKRj5bsZkbcVGZ9DctwrrcCdq4pyHfmJdYqNBJWY",
  "key5": "5sj2kCaFm31eupmWNRG2Za6qx85zF9bKcinZAcX62F9aiEUspfHq6kA4vyBvakdGtck3yKscipebt3mk7zfDd1W2",
  "key6": "2zPo6q7cxWman7bHzGQTq5a7n4XqRyumGYTErxpaWKsZQMwg1HFgnZWH4VUWckgNwoWEBE8xjiHnfkkCHzZXqtvF",
  "key7": "h4bkGky3z1xibw5HHvYaa1sgPBdtHFgMFdR4L76aJusqYBcTKvte1x9p6PFVP2kicTzLtgLnQYPzB7GSiA9bAcQ",
  "key8": "317zJy4tvKtYi7Xx8YkERuaXjE7vwbx8u2knzBqD5NbLn7SovYCe5skpjnGgUiohXZg7z6ti8YnAA1waBeh9rzQP",
  "key9": "5xSpCQ1ps49xMKWa7NjajnN8CA3jF6WDtCC374nsXuQ6PFvRTezE3XBNDgbhbtcegPNSLtWg8vWiMcoVwre8Nmg2",
  "key10": "4KAtyQbkgivJMqnbFWHJeUdJR7XaM171rp6cwKgPqnPUqv6nMsFZK2K7HNwZRTJ6ixu6QtsG3Aq2cmnrJo6Rmm3J",
  "key11": "4Ew4FWDhKF2gSD3z9qTvWfgkwqRccgzWQQw39uaCmQ1wCMb83JniX7ege6o7eooZswjSkReAtimf1MEDMia63nJY",
  "key12": "7eHTnyGmCHxzQPQP2P4rNtdfqR42zbtnQvj5635PaZbEdLFFJ3TD456npM57WEWwqTBpaBwQeFothwXbCy8ApvL",
  "key13": "HevqoUuJQrcSGqkBQJXLpgESYBTVRnkrCmqTPVKo6rFEtihWshRbZYbumD8ecahfedTgyd3A5oWNFGGVE7zpQgq",
  "key14": "2Cf8rwTgzfFNjxsjsdRTixwD89d14aG54yRMCoxhUu14oxpYZMTiUoPkcuegHLbXVnNi39zmDrCbLgPmcgL2qwyp",
  "key15": "4AQnDNUE3a9FWjth1SW1EhVcMKGcrzFEY1bXNKZh3MKjW6HCWuCirGYRvi6vyKhsrrsYk385Bc5JvDZ6GkEsHTZs",
  "key16": "ZBU9bfS2wXaga1tPwN38zgieYCCMeF2aGpZSwnsZAWg2dg5QrghXi1UicZ2ERFzssW8t7ggZR6GFeNXM3DCSxRp",
  "key17": "2UGfNf7gbCeokdQiE2jgC2wfpMLpv1n9y94JXdmFHSWbDaFpnrtSt7udFkH4ty6urtP36ugJEUWDjYT8pADiEZhz",
  "key18": "MFyNWC3LBr9mPH6c9dMvFYYH4CxpF1HEi2Gj7m6ZLXdYVLyzppzanQXKdzMZKs27mWTsKiEEAzSJoqKMLuAnmFW",
  "key19": "286tmyZnpBW8XsEHDdX3b4vUzVW6S4Faq5aEXqS3PnSogoybZjw7kzbVWBZMNf7K5dhw425KwFvH1hstLy8bjttA",
  "key20": "JZ2FcT49n6r5JwNQaWPAHEtmHQXiGDNiJtNmaHfcv2EDbYveTmMTv8CCPthK3i17Ka7AwHMmUBdTq2m5QY6NzAT",
  "key21": "u3X8kvn7ZZ6X4o5ujyjR6P1AEjYaXnSH4wvaxkMTFZz7A9Nc9WsXDucRhFtQmK9pppBvvyNzzV85zDp7FE6kN59",
  "key22": "4fV7WJ76u7tmK9MVvevbgoRdn8M9ZWXJXsaR65KRyRdX5SWTonmGgmMjEeqFiQpQ3xAtDWrC1EcNhA22WeqJA1tQ",
  "key23": "3q7wLh2NvQey48c5sgqzSoJ7emRAD6oVBEESW221CuPX8BM3TCqmhqACDcvwgSjFbZjCD7oS8iDx3MbYSbKfk4DT",
  "key24": "3czjFPdann1EhDRiqz37WvWgni6G5VU2vULqzwWJW6hxsB8z9RZCq4b76S5UCu3McRocjMZHbdWsfGGAFsWjQ3Bd",
  "key25": "2cLox9ifah6w1jiJiZTCETG9L3DnncbnNx1gfwJEkczjdCrmh16WeAf2Dgfmn1JhpJcMLGKWHymuERFZuRWRssYR",
  "key26": "2BTAt1e1b8uo2jDE5s8imFSaDSAkSAyroQY1VPTCoYYpwpgpXgYWJSC6EGSbYeQHB9Cc1Y3L1d3syVTEL3C9TdkE",
  "key27": "2r8g3efgWfS1wSZNj5wgG85ysCnchY9L4TqdjGFbj8vHih84HDhc72PLHm7DPHPWJUdLidyvMGUuAKXb68BbFAge",
  "key28": "3eQZYNRbYRTHnS4GjCYpABrmMDco3uzmxaHn1vePPDJcFkkAzE2UiZpXkztDHMhyPQzF8pVTqbrwCDXCLhyT68dY",
  "key29": "5swZ8yBNqgF35j62USbR3qUvMujHWsNn3CCPWqVt8SaDJWYdxn76yNiyt7e5ktH3tCQp68J49iLhLrEw9e4SdvhN",
  "key30": "3QGaMzexM3N7xfEcvikSTYKqKMecERJk1QfEkrt95aJbGZKsxEw8o7RfxhBDT6g8qThwSXdwCc7efXdzfFEe2QdE",
  "key31": "3AkS4JK1c78rMWsXab2WFBzZL3N31LxSaA6HU4JBgg6B4xddGC8PvYvWMphq5f8vrRoEHfMEpgmtJES3iYQvs5hM",
  "key32": "5ea7tVCepyRfbCTcDd5LVDozwetSWTeYDYV6VsCBCnV7oUMqbT6Su9uD5h4P39WjHjny2UVDwohZV4MxJj4Cotnh",
  "key33": "2M6XuuhJFzEP7TXWQ4eWHCLHojPsDUpRoSrZxqsY6r8c9NKCVYAhitaMS69oBQvFVHmMZa6fYZ26FBMx745Up7t9",
  "key34": "3cUdvA5C7mUJ7XmBi7VNsjbyKo39qsQRQP2n3TmnnbeFRrGanZR26ePVgFkcfM1gE5jY1awRMEZandz1394fUbyE"
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
