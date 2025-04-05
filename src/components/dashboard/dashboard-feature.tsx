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
    "4m1UCJyYCrsq9FC2P8gmSszUE3shQd8hzAeTKY2buKzgWShC9UwinYDTdc219jXgRYuhbaY9xPNCDdre7bUfVG4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZbFtJkvCndXAJ1F2Sg1wuhzvG1pGyiSDSJtAuAjRkULp6RUjgwF1GfZJomSdTBbrFvFMHEcwHeALJmxM8CskLRx",
  "key1": "3ap4oZzQ4bcbtjJxTFPAF2YjJiDsasnKvWyGji9NAFcMB7iAHfHsQ2dDCLxBTLjLVsBvELy8XuGteHFkc4zMbpiw",
  "key2": "Udq6w7VZu9hh3e2dMzUqggpBnzPWVcxRRfVBHWKLEJweD2UtwJMAkR2HAWNJdDvDUe4QfFQsg5AgSt1zYg76xGN",
  "key3": "wpTaNuKiKBFAFwAwiFyyJFpqZh77YwXRLQqEVqcCWVopF2hiPNgZJJ6jkoy9GsP7hzg34QCadM6bkCVjcMe6gYs",
  "key4": "9E9VLn9MURTvFEwHEMfLfNKvhd6xQLdsAvSwHjEDgAht1b1PBBxEt5soGpeU8s5hJodxYkT7S5nr1s8FRZJZKWw",
  "key5": "4gdygsNyPzwDxCPn29hZ2kyi2GNETC5qfpvmZMezYsRE8ve8qyE5UwG6hdB18SuctmkQTBNfG3ECad1KcAiigTwT",
  "key6": "2bdDog4nqRtNTUJEk9eF1ccrTfsD8D8EhYW3wUHmmHzgwpGnjr45w2UJ1J6BAdBVUq5LyjpGiGddAkpdCiTibpbw",
  "key7": "2WsufyZSiqdkmDBhyqw7z6vquaP7Qdpgkm18pX4MpHYu1t7EHJ6Y7EmAP7nk8fnzYQDDY5iZfd1Hoom9dTXLHMLB",
  "key8": "5FxLjo2yxeWAWLqwC5nfpbc5kmiY3HXCoa5osS7SNLJenEfiQ8tR9fAvvafrMy3huYuoQ3wmZ2cphvfrpxCmgJFS",
  "key9": "3hkHaq9dotFH1KPdZUAiJ6eF4fHWGkPCZEznQHCjfW6brYnM16c7RgBswqakLVDirUbkYTcfp9FMhqixaTpYbDL8",
  "key10": "55ZwP9sBJSMcPLBFL7vPxZkvG4in7xnJjZ1FERZHfEkrc3khWerVKyfqSsk2DG7Av6Dm45Tov8ewKo6oYByHXHff",
  "key11": "57UirSNbE29Lhuw86uJrDZEHvyj4i57GWKekFzX1yui5oR8q9mUSfPvGug6bor5H3kJvWhcPnWHyHdLau1tWPo9j",
  "key12": "4AP4jPwYegq83CCZuZu6Qoh6ERhmCKkXYJabDAFmXq5AwCwKLJZ3JSqMX3K5fjTS11qexn5k8bkfL34PQBtqbcdh",
  "key13": "2Vfi1BUoZgunxnZCiep3cgzbxCe1Ggxr1js3qy6gfCUVRw8WzkwWyfkExW4K1TFeY8zwieyJUxf4WFiY14KQ1aSr",
  "key14": "5HjchotaqhqcbwkroMdARBW8Hyh5duvRp3cyjZEvX1mYj3Yp1xNZUNNmeWtn8PCSi4yro7oQM4hHWjvqRa2tqgs1",
  "key15": "3p8UPuDPWhVu6AFft3hLSi8RJwbXSHvEERbbKVKfVYZJWLLbKq2kgRnjhrJw5n3gLtBZy3CcuQFh4sysD9aWH2UV",
  "key16": "2w9D3rEmWGvadSzFYFhzRWyqFNv6qSwUqyJFZDSdN5xCT7PQNzyagfbeFsJSbwZ2GY1vjL4PBL7KUQxmPqsiL7So",
  "key17": "5Vr7JVRcukqfAeR6iZvbR8hRv3Cjw4gE8DMruXaE19ML1tQ1o9oGKqjffYhz6g7mFKzV2fSGWBvL9BwzsUsCQrF2",
  "key18": "42KHQThm4GhFXjU3ghnfRAZyEJoXekrBLsMVTRyRK6iFqqnt3iXmWx9pgbKSszA8K98qnXSSNKEBUS3ZpCCPGftK",
  "key19": "2SQ3uk42GrZU9FrvivzzVgnzESBZyEJjVTdJUW8bpaV3TE4SKXcqgifm9EDUu3tZyq23bof1RjXzJC1Cy3XEdeCz",
  "key20": "Yis31xtTdYrxY8mcmaVjrBhakpzm4y6mXEqnsPmyGrhW118pwmAPwgJ3Crij8sqjtBxmUTrNh6VZ8S8bh38Eiot",
  "key21": "4HXrntQLS1Eom71gFTytqVroUE4uByADLhUv6jRvHTzeRmfP8hhhEaL3biqTVoddZRRuHPDCDJDo5fJmaBbcKxRJ",
  "key22": "5x6ouxkMb1LUVeAXxX1sArfFtM3zUr9MDEzmxMSbupGiTF3c4tTpSL68WUjYKvnsZrE1Ehbdq93JRzQJgPKJAJYo",
  "key23": "5dKLyMMJf5jxhefd487o4yMkgZdZpbuv7qCnic2e6AA3zoJp6xKJnrMbSS5qkYR6UhRGSckZDiokytXRiDAbV3zg",
  "key24": "5hVY4oADQiyvhDopS48Fk6xUorr2Uo2CAJ5RP8ryYmh6UkPGoELXa1cBBcVej7feeEs6PKLMhNxVtYYGm2RBvXGV",
  "key25": "4kgLbGxafi971C6coAgf3SWAqMz4a7VRPEC1GD1ztKtP6SKb11WTfT8KQtCrNSuwjXDRgaZyqr3HEDMAwUYoY8KS",
  "key26": "4uiA6vNCkqwTQd5RCwxKAPZKKSFmv1bMjkV8rTkw3PNEy48KxhvUy9t9hHs2CiCZ4PTpuetk3KMAL4ebN8PtGutq",
  "key27": "LDnL7tDXpKLGCTokq2z6MeojCqoHGMPb1exLor5jhFc4pPtLSvBeq9k1jmYprooyD1yWhQvBgmbgCNEYWroMRX4",
  "key28": "VzHz43Spt5heYz76faYMkWat5Brwnk4h9pHV8XkUWteYvdpuakPFVefhvRytPrhS9j2dpTSA56384iHi1VcDg4k",
  "key29": "2SJdu8r26FzMDD9KfUcLVp21angZBtKftp3LtePa6gtMzrrnHLtbi8u1Gzq6vxogZyUawtfzEA48tUmYMRtS28u3",
  "key30": "58Kzh6Sj2gdpyu1HtE9PGs9wA7wwshi8tKQGkaGerXiw3ETXTtR7go2U4GTRVHLSp6Z5zK9N4FVF4ectgzcwxz4L",
  "key31": "21PBKJ4f5dR3w1TYbcS6bRMZ4YdvGh4Hgo7Uy7aFp4Z79SdeKDrbinDi9eCsDU9WiH378RsjFya673MR5kAJ8XSL",
  "key32": "4dy3dpREqGpBA8bBzBL3uBTqWEw1PuuRLDMj1GVHHDkJs8fu6HSbtmzZJ65KwUzsCnXG1m2HMquyLz1nRiw7gmMN",
  "key33": "3rbMQx2yQLm5ZCrhQPWRJPbwHKCQMw4BttebcErosv6LCLY3Jhi8w8WXzWZW7uH9D7z8G2WxFTdzhHpuGMNXZ8nJ",
  "key34": "5LETo5ptghV12rkN7HUkNpQWWmfGjg5Ge4atuo1iCUJum5CmLBnBzQqQJks6JYcKMSyNFeb28oxgosbZNh4Uy8KH",
  "key35": "2VJj6EMzQPzg2e75Mvopr9mKTtveb7m7ej6c8AJKCs36HbXp4mw8GUHDVqkCUihGyWrNnayLxZ9AiMXSRm2V81jY",
  "key36": "2UU8HagLbXGRKM47UuEAYeHxLftHAL7Tq8aVE9RGNvJrgXkuMAwADQkUFy1xw6s5tpVygcvWarFiYcseKuzrfBCf",
  "key37": "LyMxGJ9Pdkv1BMt3ZJYN9Zi6TQ7avkgDs5436RDziqmdCAgLhVfS4oZbBtHDEEPLBENrRAoJXtcxacrGue3gQbN",
  "key38": "5tD52SZiyDihrFgRoxXPddUYFcNpGFDveouzqRgDupDqyb21giWFoKs2sV7JqE3mwQhd6AyqD9GJtf9WGxC5xNki",
  "key39": "4Ei59RCmN7GZJodK81YvRfgxx4PhsbYCrKAdVYGLBEV6gfSmTiNDVwoaQDXrXHrQzUCo9ETFysjMbzodBjnykt2r",
  "key40": "3uTnYbB43uJ8JMjtPH6Dk9fzEo6WPYY89TKEt9A5UW2D4MWfTqUEbgKujaMyYkdsNjYpxMX2bYVEnwmLUjigmWDQ",
  "key41": "5zUqVzLekoxQRTH4mAV4a5U17G3WcYGWuCBoKrS3QTv3ks8SvovYL9kSKxnDFzKVEK82Kd8E9JsdiXxgGZq8PNkd"
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
