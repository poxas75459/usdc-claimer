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
    "2Joc9toRx4pb8yqLic5Lukto61yUVJCgxRkuAhFdCj74KEdSyJyFrccD9D2rDQhsxpPhSpwfQXx6hqq428YDWExj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SbTRW2vD54HxhYw9ZxFP2dHBrDyxeipo5cZcRaxpPybrLqZ8sTfhXEuYj4ydRejeiJqP1p4QCCDDeBvwQUiFF4p",
  "key1": "oQ14M86EvtNr5Y3gQVdWStjn1TNH8j6fXwUs89eamobNEQXkBhwfTEHYzxtPPgEvr9eHdCdPFnnDjRNY1RGJetA",
  "key2": "62T31xnH6eK6QaZZMRVHp9T4h6w9mz7cpXpKf1L81SJVkjmvheLtN1XYXdKEVAkKyvUmwDZj25xBRGHJV5uUTPFu",
  "key3": "4J4S6YxAtpoHWpLrGH48D19WpXoFmKsbk87WPgKVPzp76WxazE3WcYohJ74Di67dyeMxLtqPxHj5gTLfqCxCRFkX",
  "key4": "37J8eeEFESEiPu4e78W6x4TNQ5GWku8RFE4Gk5Z9sFBtQroytWuBhkC9HVGKePmE4bkuEACsPqT6cBPfj84ofPwj",
  "key5": "tYjvF34uaBQmZZi8crwQS62451RFDWqNL1PsxHVj94g6qJfA8Bm7ABrUaTp6tor6ie8qQ9jeorgHCJKRkceiWeo",
  "key6": "V4T1BHc6zU8yzRSZiGg5qnr4iupDwBRkGzpKx9WQ5snAYe4PTWcnpn1NZR8hsAE8NUo4YrjdN5d3XqoDLjYEnNc",
  "key7": "L3D1TVPmgupZfiHALoDFPPptP3eq7bhm6zoqQz7ekbMpGYvz9ohnod7aoiQoq789ai1Qe8P5pRyEVWxv2Xut1Ho",
  "key8": "2rMEGvtbBfmnDTBTJ3R4tnZW1MKi2MVPyDjiWB6JPebWdtC6B1xdbU5m9YjnRACA6JqT2bHY3DubAYWsUo9PyxeD",
  "key9": "3sohEjrh5t3BZPrFLkEqELGUxLaFyhF828qBekQddHgpQawzwLR8xzwhoiuk3wtpZreFy1gqsbXHNMEqP3ZwjDBv",
  "key10": "3nVdvpASqxVo6nmFToBCkgW8LE2bf8sxB1uybxEcoy6xW7uxRDUemjtPT99q3ijAAbbhAXaqkhk4k8bx5j6b5nEp",
  "key11": "64phiJSvQ6Ko84b463dHNkVvP6Kt1DZTNZsDhaceBUwfdKPes3dTz7JwTQcx1M5RzGXQcyz9TJDJLXnbsh7SCs3P",
  "key12": "62tvov8LdMeZq6Wh5Gi8uoXGxVq9nzjyyYp5duas1gB4PAfrSR5F7AkjrTDEScyFNDWeJaDP163tgyRaGubujgVh",
  "key13": "5vaBWeukz3EPmzBWaEeUZDzXvxoxJJ4j8cgXGr74JMvpycBo8JXxGTafkz2uyNpNof2C6hL6Z8k9purBWRxX87SU",
  "key14": "4vgA9gMtMDUoDM7tcHpt6p3w7U6XPQnNrjbDqnHPrZEoyzrSrGFTEvohxqwyBwzWupoiH1UUqmmfAg68Erfh8ALR",
  "key15": "3fDxjv3QbpYeQNbgf1p6sfotTfURumMGw92F1V4Fqcr4UsCvLRNymPWUeA5bsXPHvVzNRrN8eMmSBBGkFMFqqomy",
  "key16": "4NGoNCwVVmTsvTVgSbdjnXuuNoYUEvcxrFPbw2bL6VTgBHj7vv2Hi4rFr2q2CoVvKCUhTJcKumDnp9yVUhRTi5gw",
  "key17": "5o2NQxm5JB1y1uyHzLVkfMouWERoLhxKginzu2BvQzuRKffa9Lz8ZebGytZDvJyjb2AjkJkGgCd6MeMGHzHXdeyx",
  "key18": "4e5XjSVruoL7QP1GftRiuZQzqAxy1Znx7eR9duswoted5Wx8xNXaEVe3W9cXHoCCz9EQ8SFfNNgQpigANEDAjbtk",
  "key19": "5MBztJwnWfAEKkuDVsTP6D3EFxH4ZdSyrGZsVS4gMeyWuMcjkQapq1GxmbwAbuKo8GV2BRZqMZ3yyxwbmWPwXbAF",
  "key20": "2xzF5xR7LbvCSyypy7wBGhEqpETdM1vFVKiFfAgQj27w6nvSHn2KDchUt9cUuN5F7fVLmhxFWTNmg5UqSN3967MW",
  "key21": "4uaa2jFtserwrHYA1DCZSAsN3jVQyvPAPKrCmq5NGHoWBToGB2oNchAXCydxp14tugd31oKJuuuY9nPNsrL535CH",
  "key22": "2XCUB3cKSNC9AeTFFK6zac2ZhL5pbEmSTkZrmsZnJ2rEG4Ntw1Mm6N95xGHtH5qhvGxAdCkUJpPKmXHCrkbQQRAv",
  "key23": "5TW65HsixMpep9maNBQfuwD6eSWBRo4hfKGRZJQyy5rCt4ssvmhzi37T6tF9Ywz1eTtmonTRw3424DuAnTnXvUQH",
  "key24": "5oQQZ2Tipz23VEc2eFq7pz5gkfsMSXFZJui5i8TrhuY6x1Qb4TwkTeXy6FxtqSYsv83k6Dv4RLiMS1xqybcHh2fJ",
  "key25": "3S1EoxGS6mtEE9TEB5LbCFyMMdTv5T4PLfgDEHvKttb3gVt8jXXmYp1gNrNKurmnwiyQju9vr8TbdPyhi7apzvgB",
  "key26": "4WjJcdPN7Q7djeDXXLFzE9SR19PXP6sW2sVCXxPUQEJRiW2GMPAhSZpz5vKWNJtcvMT9jHmgSRUj8fgjvTUXKyYW",
  "key27": "2dmBrhTAmdNCecEqB1rsanPwAsivuVh8k44n78WaiV6tiGHJFJibdR4uqzgvSJz39DrSvt8EqndaPpbhqz1zDtY7",
  "key28": "2PirqmSq39eGH67YdiiiCbHMUuUXbc2LFfgxH4LfYZNq78YFyhdNNv7aYXnP9UrwJ7CT72XszXP9XY7MVDEoQRN1",
  "key29": "53wycFd9hoXokfojow5dkMCM2A3ptk2PT71sB9v5ifvueKNjkmhhpLDUoHbWFaj4tiWiKcwmcnVn2VbyQuf5dFc7",
  "key30": "5rpe4DyHM8ax2CHGJjtDD9QXwPKBJbSEWTkbyQHs7Nd7ZgZKUFqvHzYPj7w8ywpHahuzMCbhzPXxDYFw6svmc7zL",
  "key31": "upYfJ5qNpcbR5UWJJyzfUm2BDPUr3CaZ9skq4LaN2aQQzStbsrRPMprNTgf9BqAYgUDi8XT5DibgmXYHCTQ6Vxf",
  "key32": "4oZk55DrNhQhKm2uytwNPUt8z4hFCdffYh6gd7XB93bL7UTRydDbqCZVruSopRmNNMFAd5sH4vU31YWsY4L4qA4n",
  "key33": "szLkNNjSHscAsHsB1jNeTaLTQ8ueQ3Dv7d1FSkJxmUiNWPtEZmZSv6zNSgCrDoVkvWmgo7wDn4d1WHUxxiJsovk",
  "key34": "2u5dfYUGcs8bntVP95mV8DQFM6JeE3PZDca4gsNG8WGTFmENABmyqLiwgDvvFy2b7mjNpbqxzAxwrQ9T6QFeiWit"
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
