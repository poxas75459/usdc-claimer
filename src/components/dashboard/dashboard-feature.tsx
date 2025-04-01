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
    "4gDiJ3BNCP5NYYw59PZrqbLn6ru1d664QURsX4ZUcWtnb5iAyHtjNYdpGcETJF5mj1qsRKbUC5wqqhAJAz9ec6DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S49o34nae39n2PikfX3KDStJNBHf2Tqm87Y7mTkeVRNUBELwLLCYryikHQWK93xXzrPHFdtKdkTVvX9CMwnKd66",
  "key1": "5NsmC5xJ1uK7M2usvXGmA1HUWANAT11y53Kbx2Por41eTfEZyUFBwqB1RFhYvRMYygKu3ArwqbwM5WhXteXCdCV5",
  "key2": "36hr2QHmEF7FkPD7dcSQ3JmdQksjfhyD9W3SiYXvYXJXYPkpHjjrhUt6jCByCE8dK8igg8awhd8S6f9c2npeo3iF",
  "key3": "2NxwW9pn23Z4YxGKzETNKz9BDUUzwXcs7dh69TaQh4CLzh6NQZfqREcHcVEGUykd4Yd7wfuoRvnp9asC5ejZx3VQ",
  "key4": "47VqD1vhRSjGdSZwVrzSDCHRSUDBgUN4iTTaDJHoWGqogqyTLzvCsC54UaCrixrAxFrakiRfS4s2S1GyXUd7GEE7",
  "key5": "DiWMMpqdzHpaFkvWHe9NKT7i5QHWB3kVkehXRfqUPAcvQKj1HnJL9hM2x4m1GRNkj3jGTA36S5eh12j7zPgR4Ki",
  "key6": "55Ec8fnavDygkmmaEbgTenMZiSQ8HTtpqGfkZPSi7rgbZgY7qABHi8nmCQktN14k9kzuC1pNZqCURmWnDjoZZpyc",
  "key7": "wNzDadA86qYuhQGmMCDLWVhf9xtrEJiCCZKiaXBYZxZbtWhaaVtuJPMPEuDZkQ2wqRePsy7iur8kCXQkCPc1r5M",
  "key8": "wozQAPocfjgLcmXrV6yr3FZz6fy7iFgpqeGPMCChs5bqrWKFbbZ3iQxnsruppj2KfWgBbJrjEofYxBFML4N9Ckr",
  "key9": "5Y7yszVLgopLwwgQ5wJjFBJTk3RKNtJCK3NgKe5UDJZdGKGtZUyYh6dEcifnEMnsJhKY4ccj23mWFi4YaRYvEBJH",
  "key10": "3U5dd7JErycW9LXCEGp1HYVCZ9Fh1SbkjxfjuizvcBV54RziSJALb1ngKMvLUoxgu5zTr71V3rDMp5HudUTsTEGK",
  "key11": "5UmjLBfXqhy2PmURM3wA5XV8kRvCXNzEMfNKHErXHvYdDeYhiVBTwKpnRawS2RqB8Efo4UGU2gPKCpeNT8j73SEs",
  "key12": "61CUGi5G7BBCYNffZGrShVHACV1mvXZMzWeKhjnarBe6GF1iqGMed8ETioFewCgTFCsqBFnttJ6T6ZSkSuE18AhD",
  "key13": "3SwvUgwseFmecKRvKe6LVHk72Eyfyv7JDbQgRi2HCj7HTUuqrZoT5rHhaFknvcV8Sg4UyKTps9N6vdsgAREdJZ5c",
  "key14": "4UHydCtVsYRjv16ZTG2qd8JQoug8rwZXbWmxZ8dnCoRuyMF9HXfMZ8CnLayhE1c6Lx38H8Zt1r17kaNut95opNg1",
  "key15": "2rQwvVdC57tTHd38xHxMwjuh2YGbJnK5bHwHtfzVkxbf6GqsGUfs8asdTUM5MhBMQepXXVgyPLFtKsdoP3MFbAZn",
  "key16": "2dxRsoPqJVetHd18AoUQf9TRDQxBucVWpki9X9mfptdMJ2ZSKsZV4Ew9jB6AcinRPkc6JNGbnyHpnr1LunTobcGc",
  "key17": "64qDkpXoJNfNfNFKdvuS8U4UkkvszRABqXnvy6Zn8ZCkiYShCpY77PEE8sqEzZTyuC2UDMfWHR8My8NWyWssNX62",
  "key18": "43SLdKmQDW2gCeyvQFC8SfNeCqSaPEdmsRkx3MbvR2iyaZrNE27Z4At8HseXn3yiYgi5BCPDZhAeqqeR1vD6Df1Y",
  "key19": "23VG7vWPxxvH8UZ3B9TjgVh52sz7XkrNkmuh8NHbPR5BLB2GBgMoWC9g6JXkcsuYPzPtSuUABfhGbu8NXBLbmqpL",
  "key20": "5yu4c5X2dMv5kXCQyXoivveiUgtKCcPzbPfUevLVzXcw9Xie1fr5HoAqRuvVPYr6FEmweBped2Hm9YUKmyaJjCBc",
  "key21": "4cjRRygyFkE1TjZyyjfEe4rGFCHKtt7pSRadFrGZDtMUohKS98jCZQNRLppQ3yr2QkJBno7mj5CZzmKVow6Sw4Mv",
  "key22": "2ryEaUJBwAZUWHUQM9tEtQs5PV2zjdx3fAw2ifPNo7aWapWFhHPTAgxMSQTfgJiKEgkXByrSi6tSKTkZ8k7hBd2N",
  "key23": "3FnWZpzTWLRHbQvvTMWgksaKpQVT5gg2REb1UXdQmyHjREuxkSCi3tCUhnsLatECQ91MkaQbYnKPr7gN5TJnWxp7",
  "key24": "9u26aR9Rj7fcFHKD4VNURX8o8YpZZcXKbARMkfiv8g57cWjvz9QMJeakyfjj9jUD5vkdMfC7ng8JmR6HAQL7YzW",
  "key25": "uYDmPxR2W8inrq5Ndegh7vCNf1C5rsQKmrLbAfR4rizfazT6o3w6MJNX6Yn655UMS8hSAG7doDrNG3TY2sM6bjD",
  "key26": "2zkk7SU2eMTedcawJDiCKraUxUyEaYXg6Hfw2BtgioogJWqKwyMUv6jmp93vZ8NTpXxY4ridx15B44MyxDEgNJj5",
  "key27": "38LoFhwbFywaLByTpyfs4phCPgumRKwKX7bztdeCVUATZcrY2AY2oSjxS3Hu9fkpBziK9xEYtncqik9NZ2d6w396",
  "key28": "YtcZkjha7a3pdZ8HkK6LrNS2dKCD9qKm9uR1PmeuxGv9m7RtnSAMoZgdarGWs8EZhu6gzrZaSvdFWYiY8MavWtn",
  "key29": "4c2hxRRn2pJFmzc7rJYpc45zWn2BZhxJfgVLKhbuHvJ9mBCsYZf1PoYr7aykBwmv3m1oEh4kmit9TjceCXyewpL9",
  "key30": "55D1icVqXuPWPMwV8vYpqUxBhBR4mj4V937wRzm9wDQxCA2U66TuWT8p5oB2zkanRMhPaU4rKigpXa1sK4H5hkJ",
  "key31": "2kARJTygi6GYXfAoRBDeMxvR8hGDr8aMQhrScH7nCt6FX1o1FN57dRbaPC3zyxE8nKaRFeuMWVDt9v1xH559ZpQ1",
  "key32": "5uUW9raCY9HzjrBuBShnEjxYNoxDbJjKb2486ET2Vxe2LAbxFxNNYSR5hkVJJDopPrHC58rJgSh6n5YRzifKubeP",
  "key33": "3nRQmFAWXzpoh5JLFYSpNrzuZ2QQ5sdaJoMCUiHS3H8kh4rWzNzzvNFMJyzr5B8VFHDuV8wBbCUv7YzbV6b7JHPt",
  "key34": "3MaL5nzpKMu3yRXX5v3HaGjnFEYTMHbriSrFS86E4j4tQ3Q9Ym2vfksvbgpHYn3ZrrEe2b7HzBykWqEFzqyaTA51",
  "key35": "62dnpdQ1WvP2gJLkRbcRPVzmVNN4fMuu51fBnt3bdxpb2v7PvCdLaCjSKwWftXrzwynfdBj8a4CgU7GHAh3Ybwg2",
  "key36": "4DCSfwSwqymyGkaQ1hkPnAkRHNPkRsUpeegCbVkmM1iMFRrkyn2cGgByFQwK5cSB9wANV1EcKxGeSDBDMLsLu2wQ",
  "key37": "uYobpmRUFq1MtXpVt7Jp9Li8Q9uj3zhoHXA8fH9H4etRVbAoMCaJizs1YhRrRULsD8v1wzygw6a3PmeoosYVNtP",
  "key38": "qKnbnkCQ8ZouGvQWYdyp3xeUpF7tXUqp4sZyXPJNb28pzx2k2PoMcJTdXhSKEXGuh1SLiu5TwjNkXYYLUFAxssC",
  "key39": "4uBacTvjrmqSz9ZCKZsSaKaJ3dqKjJYaY4WJgXxJ1ZMCXtxMwEGYFtESuo3ypTHVPpkUAXAqPUQ7oY9AFZaCikKq",
  "key40": "4gmBKqnMe2Cb5d6DYtWrUf4fgMC3TGzXnyVgnCXdkXuKmSEQpNqLPefbyXLkD2nJinCFDnuVbsAz34cTXSZgYizw",
  "key41": "3rbaJoPyppzP9Yxs1kFiScgUhqpV33jp2bDagU5wWS4H6ENHwwqfo5ve5NXkcXi8BPp816twZaWuLm2RTaZa4neq",
  "key42": "3u5RGwSQkjtndzTQn2ZLVSQtqaek7piLDymyxrmUM2Y6okrcPfGHrUz3DeavtqawNcukT9ewxhXKhXaP4Lc977Mb",
  "key43": "2TztuzB3ZpwyaSYY1yxem55xind49fiFtjDhfxzcFZ5N8W7Nqm3RwFE2SqHLAG1ACeHfofrtg7TRVodPGdvCQeo8",
  "key44": "5iFSKoBPH3ZhUbJR6PXxagaw6Aic6yQmEyS3LeZ9zhfMkXUTpveFFtGAaEUtnVBZepXxMpXH6DX95tdF86vhuWYD",
  "key45": "GG1bqraa5PkzFAGgsTnvACWLeF4SpqFYDS5eRq9UNsS4Lr16dfZQCWGHBi8dA2KjoKQVL3CC5kTnhaVdooWdVnf",
  "key46": "2k2cJiFAT4bhU13VYEnnvf1BgZAAatTsbPrGqM9722rNk9rjXr1FaqyUhe1Ea4SJb7MiL46aHJBpWNMWs1Fc3Mmd"
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
