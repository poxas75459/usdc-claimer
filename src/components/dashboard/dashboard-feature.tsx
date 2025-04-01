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
    "4EQZ22xBPhXVGU2F5CQ8ynwDLSp1EWPs6UVcMC2BBjucUwSkCz93r2KfR161tctbbPzw5NULQut3KkPiUwRQZYxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jB7CU4qRHuX2kkKcVLAEumG61mJTKLXARDFkpneMJzRjaeTrBuVfuCGhThH6dLAdg2c6SGb8bKFC23VqdvKeCcQ",
  "key1": "3kN8tTkGqdjJCWGRMWVsBQGtQNazdjhPn4qx1Js2yArUGN1imizNkKAnVexm6jueM1xiLFGhRruQRfgTRCY4rwfN",
  "key2": "2e4raf4wURUp8VnHjsUFMYXBHpdVMmdPNEN415GuZfGNu32Mr7zrWEEQngeDrYT3TfJiiMmQkawo5Dci3PUPSz7C",
  "key3": "5B5mSoC4jAT2atLt6zta4NjHr2TL9ACMxx4wZUcQdhNDJZDxcMB5s3YV7fx4GdjFXxfXU2uF8UmiEfKa4CvcJ1xu",
  "key4": "2qqBYaunGDE8RfVmwmETLjf2gBJMsrXWn8A6damWEtVLxdpLyAWf7t2vvd4hZ29AoX3XbWFHLfq73WM4DgJ4LUiu",
  "key5": "WFeXGhffEeG4pcq4yrRyc22pk8eBxyRGfDqvKa615HByeqZVRLqvZiyzDZFt6YCNkLQa1FDyJBAdSS4z6Jpy917",
  "key6": "4i9cx5xDpEp929T7G4pqMLTETLbBv9AmFMvM62zFQvQPGJpmSuw9rLGULXe7fHUZXHFhJvBDZMJJadwBdFnxZTAT",
  "key7": "AhQPeoxBrMLXp6jL1gczxEhPz1Yu6BWXRHWH8Hzn5A3kvyoB1WhpwqHsgs9bapcWfqkperZqM4Ex7YWqPJDjvpH",
  "key8": "WmsxQvZKSYiDsJQXpcJz7F66k2cDL9dg1cCWF8P7tiYhH3TNb9ggPf886TxpptQhZPsUu7g9mn1sSzkeMHcY4jh",
  "key9": "5wf6B9utj9eTBekqxG1XES1mUhaZBDTs5fcGUefPTohNQjeRo7TdZsWLA5ATUXumKY5hPVQoqTPBu1pJTMVrmKvk",
  "key10": "57NDdHYnEXQ9xKJ5mXVN2k4pR6WvHeaLV9k3931Rzeekj2tMBe93qihxFuBN97T9mUjydiQ8V1Zuen3Ke6aR3E6T",
  "key11": "4neoZ8uqmdVPDUo97fzAMbDwspCbVcrhiLyvhPFzFbxV1qNF8Rgs9a32R4Wfo9s4Z9XnggMnLXBaLs3sZWHAascN",
  "key12": "2JGjNj4g6vb91GodYgKvV9TZPPuqj2KCkwvBebb6YPduM2jNcwyRPriisZKUsaSHjTtgDSKcxqqNq8udfrZRGAzt",
  "key13": "5Z7wnNhfSf1bq5DBjTMtFaG2Aw7QJ7uYso9oeEsgczSYJw4LySd26bTTYDv6dAbPGYFsAta8zFfkgyZwK3DUWY9n",
  "key14": "4YAaEdat7Tmqzg9HfF5ADnpSs7dAY1hvh629s5sAneRuXJoSYyguv9MjCgeY61JXys7Y2W1DGPGoBSimvtdkmWv1",
  "key15": "2iteAm1aihfeVpZuPBkUjgAsAWsNeMUNCiYiKDDbUf4R5TybTC5HsVtBJ1Kue5LHAeF1wsmp1G2JM1iz3bTGteQP",
  "key16": "67E91QK8SrA6hD8Vdh5VQqMyJo5NFtzmt67JSttHsNWQp8TAj41nyGmkDv6eus6UMGyoqNQte16WoP3JpcEDhjNh",
  "key17": "2qEG22fFCYHtx2K2R3j3bZLudePo82sdfQ2HFdWx2P1RqVFyincFF3wMinDDGg1kztjiwe7VGsSKZe3a2sEqqzRW",
  "key18": "j9Shjd9zs7vxqTK6b4KdcqN5eTkJfFcGZ8eJGGCnkAi5PahT4aSpLtFRFnEigg5VUTUp75BJCiFod5PCRzJH26D",
  "key19": "ofcgFe4vM7pRrNvBLgj4Rdb5NsTEaJAeLfpE1cEqmZVxSmAkszR6MKXQpJrcrEf1rv142Xq8ufV2G8sSgGFZeWi",
  "key20": "4oAUhr4qz1qTL9cPGdpZ1nrZ3mL5KzNfzmVKWceX3cSXMsXyVYVge1mJanw5qTVBKAL6PUN2wHYpKQfrW6Xnprpj",
  "key21": "quU7ez33MNdKVe9nwcvNJqMZc4FyUN5gzo4HAyAytMtbXHKtQsKff4BVq9UbjucHq3BJuy3tGVq53ETmNpN8x3W",
  "key22": "3FTQ3ji4soTwmQXbgshinqyyf4KPuY4duSWchPjm8fuMn1pDCamd2HdKVXRqWTYK8aohTUS7jYCiNiLqWdxWnDWo",
  "key23": "29PYPjAeKDHoeTHznntSqKekdbdeGsJ2FiTPhJRgXrzuyaDMMv57VZvw4AzVS4yKX3KFxDz9qmJWVBPYnxeP1CSB",
  "key24": "5kbbgmRxosu3mmxJb9SvRZJ5dqXE216BXP3W4KQHw4TTrVAmE6PZqX2mQS7WFajech1FS66DJxNjsHYPiHFsyuJq",
  "key25": "5XXxfDTYkQBGSfuWDixz38ghxXnzYMMzjz9uwj1xadnHJAk8piKai5fLRVYhSgdXMWmCtwtC5Hfm3pwZpfd8ckDX",
  "key26": "3TjBx3fbvKD95gpX2J5s5LsL8HZAfjzKrGhDSHtu6tC9e9fmkdUExKLQzSTK1uFx6paM6iJy3VKgUy5QoN972fyy",
  "key27": "5kE2JY3t5eWfySau4VNg23aHTyzzpG6kg1WrTcSk9FDNFXc5aFf7E6NV8sWoB8r9jhK9676XqoUC5Qxbx7TyKrc4",
  "key28": "54bjKuHcQKkyWrg1cvxPzBNPRqw1tWHAx7FjM3pcXPQmaMTA7TSBbYffWSF9wWNTp83gAokkLJ6G5QbcEF9CcDaH",
  "key29": "51PRXTxKTHUUgFgxNdn6ttK9vNdMKzDKr6R61GgEYnTvCzab16NP9chkcN8hHFpVkL9fZMx3KWjQWEQW12aXnau4",
  "key30": "2itSTvSTE8zAXQLRjsEGyTsNTuyESHAPrTNcd9gynWYkb4sXjC8uq8w1xrCSo6b7yKVhsGfKF9uZKbcaaLPbPQH2",
  "key31": "33sW2GXtAPmxcNAcRpcQAinunijDdr8DVjk13Kgnsn5dDmCFp3fuDXxADcwKbXzBBJCT5PoqDfCHpqhAuTPEj9Lw",
  "key32": "J77bsaAk3GG2kpvQw6xFGd3ko8mJy6xTR86UJFd3oZD9JwwMu7TRv39DzqKyKxcCkmsHTmmafD9mdVoDpVzRvTs",
  "key33": "3Xanpn9dcnnx2BoFe2zns2LK5nt3eHUP5ihMegSsZQGWFrxTU1KhVHRSxSJxQoAZAi2QtmpA3bxUTt5bLh42jEhQ",
  "key34": "5QRoWaekJAoCTNpGqJcwZHyRNPDyVDkua2YL7GBda6xm31d846w2DVbqwZVjJXi1yU23YMqhT9p43D8C9qyCSoQC",
  "key35": "3FoCT2rQYovad6f7RABfgX8aGyS58jSnxSdftdc4BAMYLR2mNaL6dv8EF8vgPZTtY9mxeREpxBTR2zL2qL6ExBQF",
  "key36": "5igEHZ12aUYuh8coMQmNafvcR6uZw4EnYJBuxUDoPurjpueL4DmXo8pi3JjgM1y81NQ6CpMA8ao2MRat2uBof9j9",
  "key37": "5jSeMvXvnZuLZ1tgG6mvXphsx1quFvqKLbMohfzbv9bJNLdMm5W2vBpoBkbmKwnuG9KcJSrPRa9crhZ2b9qT9Qsa",
  "key38": "38JnzNZvwSawxwHLnrzEPcv6Xcqd5nHdHdoiRMStzHwyvxwVQq9sWL9UpK3RCR6Y3H7kXxCo3zSeJ4zpzdLh6zCs",
  "key39": "56yaA41MatbDpKmDPkBr7J5Ff618WnooTo2LRyiEJxio5NBsakL1mEZEoBTGKQMsSGBWNggWomP2sZWaWJPsW7ct",
  "key40": "21VtGA1Y4LNhNz1tc3KJ31FjFe7xgK3duxRMYceBucMmPo6TvrSsEzMmm515y43fAuap3L5R9AQ2E82GngaRKZvV",
  "key41": "CrsebeQKYYBdi1jjB7tA3a8TrvQRqhivtG1GMaJR5vNrZ5mi83uA9Zijq5L1xKSnKzEWK7CeRdys1CqTMTHqafH",
  "key42": "4K6gLjESAUAe34PJHwBLqowhKL6dCVW6wgQSyXu4KfWuLvGgxHmsjoiuv5YMHa7YodzNX3vTmDYKRdphpdGE4umS"
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
