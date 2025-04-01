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
    "3oinyVp3WxYQAJedJ81RQsCtcSFTbtuYoLdC4kdSqR46GPMqRi1sPvdosFBQALQrtVYpssPPhab6h8GzHzUPABm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DTJqoKudLkeHhR9SDzVkzY5xGo6ZszrMgYy33xBiCqawXztuy537WraMzAyjAN1mD8TfcaMk3d8ZJ2dxjriBi33",
  "key1": "2NZMA3QS4FhsLjFLq5YSsqAhwCuba9A4HmVhEVLYTRb8hz7acXuJ5eEDL7Ypzbk98oEpow6EMGUfs9j849JSJt7b",
  "key2": "3tXi5brUrD6TQRB3ZJRsD11V17ny21zjvXyxmqYkRKhVsrUbFrut5AsWJDHFDQgqooo9Hi3Dz9w8g2xhm5CMjB9t",
  "key3": "3p9paCxkAWGbmcbVcfggb7ZBpsXfqTtVcCY2U157qZyrVAmmLgEMzE6T6dEsZDGSEQsdove4VJsK557bgFA7dK1x",
  "key4": "5Xca5Ki4CmGEWYt58qqiiEuU3uBhVtHUNyBUF6rwDr9LhYqeApPcLoxwyzuKsiTxPBsWJD6w7Vo2nUHw97r13CBC",
  "key5": "XidMTVdWV7Rmqe7Qto9vieCSbUvMsnp8A1n6MhxqwNHxFPHYsuMeYJtrFBiMCgk9MjDwySoGBCzUy3Hu8DZEQHj",
  "key6": "2B2an5FnPA6Z31nXBR4ESdTyH3w9shzC4qsc5fnvfvstkvjcWR1UPMsJz7dUKMGVZz9Y46wDwhJ3pxGYzn9EbxSw",
  "key7": "34R4EcsCpNDTkAWNDDLaRdVvSUFtqKPMwddmHQ4JvWVB5sRgZugA44E2Q4akm8G7sQYgQVs5U8xMJeZHiozJMpK4",
  "key8": "4BVMNbDAhg6AGsURgTozmHLEDQcUbvX1eTvoXDeGoN7roJ1yMTx8VXnLz4TngYqsWfUrVELURL1Q564YxkUN4q7Z",
  "key9": "5zriosVnChyfU9scRbfpQZxG2GhDcEPx3bZsumnBpxfM5XuajaSD7RqLEpN9HKtxWw3bdrM3aFG818rQSYMpsqrf",
  "key10": "NA9z6Rxo4YroZrSXMKxFNZxNCta5siy1hQaGwRw8pfYS9Gq8BBhmoXERktHeCiHwteabCJmuiCMCLjhGsMSMvit",
  "key11": "5rTnCq2H7XsQPQE6T7obe7UTKEcfq3jGSCFU4MdCakqyfssS2BAKgzVhqysKpwCC8LUCti9ftxYoNbWGRhfvLZ5U",
  "key12": "3YuZXz4mFvmJoNscK2VBX11ci5NsCaMhwBbyLYE7Qtyc3Zuf7VrHHWcgKKkdope6WauzZdEgqyEn6PGbbWQpMCyH",
  "key13": "5jZ7hGNhuRadHPjfemWZZRBQdWrtLLi2gesvz9hRBU4zqCU3bZ7FX3uKYcPcrErob5Ex3s2SQNXDPRL1G8Dgwo6F",
  "key14": "3R7gN4UzYjWS2CGUjdAPwWDF4YJq9fqFxseUgpcZQgfga3Eg7xcgLEiSMJjvKVJ9DUtcMWAk9yfPcUwZYcJzyjvQ",
  "key15": "2Uax7WeyH8rz271FDmmZK6mqQousxzBMZSJyST8FasnBP1vQiGDAT3CvTeqfytMPTstcdemGsrRgPtyuUzHoWbfb",
  "key16": "5nU3VoAj8sMmZduzkxN4UGgK69VVezh6xnJwqpsv4RaQNHaRAW4GoxTJ2VZVn4ZRZtjWV2Wv9fBFPa37Mq98YyF5",
  "key17": "tfjVUZHefrGVbFiauDDjVXxjshRspk1TLHQchSj9P3W7oE2sy2itzTA1c4yjG1TpxSJTB9LZsyb5M8Zf14mekS2",
  "key18": "2aQiLRN5U4iwHtzckrk9MfVeHZyy9gxHJPrfsrrveuKNVP4oybZRHC4Qqk18knDhGEMy13Yccbdddh5p7w3GPbum",
  "key19": "3eyXH6JsbtBNrpDC76B7yQASWsmQoS7tzjGZfy36dVPuZes7M5eUbZKsbo9wZ6N7YbEBCCBYxyDSR8jgtfAp2wvX",
  "key20": "2Pnp4VZa1YjuShkzSk7rTrrw2TfZP6kgBhBC8hnMFYNRAX7u2pQjq9yNBRnuCf8WrH3Ki16VBRWTAzY4MaiXDTpS",
  "key21": "55bQEDDKL6fVeQWmKH9937UtnujVAwWVwAKvvxqTcKyfgF1ZvW8SDW7tVymnVruTWg8AUG3prrVHdXu9KMvYF8w3",
  "key22": "22StyadPLrnUmrUVLqgg1C3Pi24TMqgRGhJ55o6becjS6a1n9fShF57ghHWRdmscRt9siPVUjwenGHa5sAfPvPJ3",
  "key23": "5jojPta5dJDw6dKxng7sY7kQeCWG52cJfgwPmGsFoK9ZJ9hAyQXUGF1AUusVctYhj4TAnN8X3EDovWKm1qWYNxbw",
  "key24": "2EQDhQsPZ2UQcdoQtKVVivn2EfnR4Dkb1H3NxYAyST5tfwKJaxREDiPgo3WjC7jVUD4QmSPk3mNHCTTECXxCY9sS",
  "key25": "5vw72NFCeWET56qNDAqYU6NAVSQuosJJCRiVELumnUEaZioUzUixhEvtNWkGfV5xHMu54pfDjNRJK5TQP2seEwrL",
  "key26": "3mzuq5EKxQM9tYJ8tLXSBD2czRCrCdVuAimdUA2PzXHasdbM2kjn2RvnvyDaEdpeyh4idQMsq3Lk7VWRe8nkMb9K",
  "key27": "65hzbfWnrfSEV2Q9jqbEgJ6fixmwZmJYRvW5Mf5vKXqTsPQUBiWjiDDrgW5o4Bop3KT4dEzoGqeCFVxZTh8NcBUM",
  "key28": "4EmjHkVahERasn5mtMV6vtshAnYDcue8zaqyCfmu7zsoFqyrd5S3cLNF9rRygU7ZDWmr2DPrqVx7YZo61x6wAEG8",
  "key29": "uLxUKtc7TARxgL6HhkVuwdSJqjzY4MM7bRAQozosSrzvSUdmtasAaFiEMGdVUnWiseafofuMcEFFNkeD89Rn4V4",
  "key30": "2fU4jHNSSzrCzSqfLDNUy8vy1L3JEXELB9dFj7DXLnCV41eXPvDP7eZP2W7ujVdJwZnqubfzaYkwgFmTzXK18ffY",
  "key31": "ppZA4X21wEjLSUjjVQL18ew2dD1g6VDvBbwytz1NatQ3oRSAQc27JFP2ZtXiGcX4TtBdKpzr7JXTiMqVUejD9Wx",
  "key32": "2yXq1JY6dmN897143ptHdj4X3XoJvEZFBfX1pGihdvH2aU4rMTyKEfYJkvy6aQijDgmZXaydyKagkJknCKukj7JY",
  "key33": "4yfauBSGT6yeeQPbk9WnhVgQLXGBnX6dPud5FWpLHWZfuFDRdMXKQ5XV8b2UgZiXAjtzjxZP2NPz2pdQWDWdo6wF",
  "key34": "31s26hxsQJfHLYb116cummtdCu47CMt6HZEiUbpPbEE2hbMSormUAJdXYZuhZBMoVybYFLq4aa8xZzTC6bYUrbMj",
  "key35": "3qnjRAQaDhYUzMryaKHtFLepTzeJbojoWMqj6r19kt5psRRtLPjLKLJhVaVpBc1B2p1Rq4FNQr2vvtzrXmVmfiDF"
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
