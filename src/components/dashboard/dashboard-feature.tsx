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
    "pW3W9AzzcMB5j2FtYsAeG2rVf4PmV2BjiPGBr5gq1oQ2YgsRk14q7RQvwF2V3kt7fFWyG77aiVLxE5ZZf7qypcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63P9Dc3KjjTzxowTLepmEEZPVRndrC2wgRCiz5vQxgbdFRJXFysefd1MRQXwFmEH2nUSiGevs45V1L3CehPq14de",
  "key1": "5Y5oR6i2EHjhqXLoUkh5qjgcMkBdg8w7NUCHYPqhn3qBhW7iweJw2uwyfaRTAY2LkyB9a3VQ2jNFuASeyF9NYsWH",
  "key2": "5dnkZACUh9NzTCbTAS4VaQWTWugWNeWQZXKGqKTfpmAdTBZRXoJ6mZFx29CGfrbtZS17oRXpjVJVmBak4TDCNU93",
  "key3": "63LXzgzAiHgEY2nBmidk4t4uXjpWPAMw7q6BBmHs8HTZwVtiMw3tTj8KriUDEPtrskQJynm5KGCme1d6ENoPm8JU",
  "key4": "VxvVaafDiitbuNi1kp31eWDViTZnyGTGUFRT4Yi3mzJVaK8vvbCiVjykLJRHzvJYLq4PYfhpPkr7tzPMsbfVqQ7",
  "key5": "jFqzci8876ovGfCWQ3FUDW1u6AV7x6TSVjg2T1Qshv7tqbAbZTceqMyFz9ziRy9h3gpcH3ex7CeCLS4QCFbJgUz",
  "key6": "uJQuVke77osSQBSiAVXxcumypVcxjhqHJhSkbYLoVPcSpt7JLitP7JHxspyFjBvWGCC7sqzUVsFqXN1JbZBDXWG",
  "key7": "Uevn9hznjSs4nS8iVdG6o2gUSXxVRZZmSHtXaCC7vikXyA7ajBy8fZYzkWuvBWCpJe1gyAwRCgFK9XSaRVSBAGi",
  "key8": "2kKry7HNYmmRRFfpVzPciLmjYMkCJwyJgPMBQNNHNYujvsvrWKQXBssNd1YynrgBwZcsjhfa9vrFvrAi36BgQ2pw",
  "key9": "2WGffDTSsxTyUpE6CpvbfKe76kPo1jFZ7T3XUXM7ASzkL76JmK32a76qh5AvV22Yen6hNn7zjdW644FzB7PUiRgM",
  "key10": "5mhDTu9TQ3vWdMfpTGPVSB5K2daTwej7P5FLKzrjosJQyYNUcWCchBLEmEYe5cf22HDHAGgduPhmaFSb5nEyrLzL",
  "key11": "4zvQYZFaUXa5bkABKhfkriSijQJyAWyomr8rvqdF3y4K6s8cPuxLYQ9UaAKAUgLLnDj6HaSSbBoWJuGky5CHyPMe",
  "key12": "5DBacdmdhS5BK49nMQ5SLbZ629p875Bfd6NjE3XbqcFfRpfWsRJr428LqnTZdQREArQQuuxrw2kHE4HuZWQKZonS",
  "key13": "3mghdPRkMFsAkzGdknJynJAd1o4AVmZLUup7kwk73d9PTaFZkEunmPjEkzmNyygDv7ezYQR5SJrHJk6HZ5u6xmff",
  "key14": "63ku1W9vkMiFypGkNSZmef3wSzeYwuiWYMcadj9BjtiGTY3bb8MErE5WMCRYVpZDWxhDKNobW2W2XTFpsUJTNDHS",
  "key15": "2ZEpusUHuscjxvKzPQheTYa7StD6fmbYCfZVSub1EaLo3sKx3eKxRfxGz1KFSeW3xQ6dqEYKHZhL8QFww5vD1Ryv",
  "key16": "huzRJyU4tWyvP54FBEokrtZuUwTo1TWRB7jzANsGtTaTri9qT2aq8afTSEMRtq1tib6oy38nghfvpWNQ6EhcPX9",
  "key17": "2ApCdZZRpoUSv7hq1JxgfZEwpdj8zHUp2rV1yvP8wcczEsn4zQkfLtwGcnrwvPYqbvPcYG42y2WcV1pGTH7RWJZ7",
  "key18": "DEc3KuPLyH8SnsKHF3mAcTfVpPbbqWcssVFb6PjT2oAoQmPWcHr7STPr7MyGt5vorA2YVppeHpXAmHvr3GSr3Uj",
  "key19": "5e9k16YGyy5d56ZxYRsXzJGgFGE7avBNmhLEnhkkBf8UVHfedJAj9xKwpeNFqZPFQXfrQXYa3QbqHHvvKpxBSNGB",
  "key20": "2c9S76Aq6doqRyhuz1xGvqtKErHszPYe1d8iyaz6qqx3cYLprfvSNVDP1VkE4iRg5epKLJNEvGvJ9qEyukgPt9sM",
  "key21": "2irn7jLr5uZGjcZqzAGd3MUDYVAgngHP272FFewsUDFeTE3r7cMbMFVfys9HD6yQb9jdbjnGRoRshPnDRKJafbdf",
  "key22": "4FXgDJtL3q2Q9sCQzs3EPRGsyNRGaCaYJy6bjp1LQsEJgMMpAbs6ukuGTiGBFrigdD5jaskXV65stwbPiVsHj55R",
  "key23": "32gg9jBqRMdt293JjvrPrNexLuq2GLWYyuxoxYXy7imVnXs9bBhZ2rWaBGnixydt7RDuFzQZCksff8HnTsqKrcBi",
  "key24": "mpPp62BM5w8xGRCd36TWv4RhdszgZHvhVPdVDfKRxWrMD1963usvpANnPx7Fa9h5SGxwurKGcuyMCVvpLynqbuF",
  "key25": "H7uJD9G4EwXPaFRL9CJ548EtJnboS9CqqNkxYe28ztyPL795mSRJjYX5RUgzWS9ggp5Nkmbu9xsRrYWivj5HzCe",
  "key26": "5RiaWWsaGgZvLSBHJuSxxRsaHH26JgaTVCocdRy4VQgPiFRjniingXafwYKCv78big7bg3uYQ3gC9R8EY98ZVMwM",
  "key27": "UesAyyrApx4BmeCZjZk1nfV7AJS7SzCsDrxwUD7LmFUycVcWkJQewiu6uJXPyh99fpydqen2dkD2hMioPf19UhU",
  "key28": "463DHcUrWp85dwXi6S7JRT1Js4cLxej8L693tsdFpTkmSZsXvqw5GpMcAaJQ97QUWmj7UPqG24KLekBx3nb9VCnV",
  "key29": "2jFZHHFuWn1BxAQbZhpV8LcRBJ5tkY3GrFJJp85rofUisjQVMB58xF12Mjf6Xurukiipis7Ag246S1tsozfQt6ez",
  "key30": "3CDyFUc4AZejxBoN9iFB1o1zBWjH8A3u1DTQdwS7dJLNAVnRuXggKXrQgqjUGWSmc6M313z39A19QztQaAqyHx5W",
  "key31": "3c6XStpXZJqLGiPbZLmvTuoM8MMZFJihc6xG9D624ywFHSgAVDtWNrTfmbMfzhYP7Y7t9ymF2yqix8Nf9em46skq",
  "key32": "3kKZXNjYnpWK2h3HCfANmyvR4dy5qkJApKKga5ufMZx7j5RwBGkPFU6ht41kAQAurShqxTRTUAwUV2S9be7PBo7F",
  "key33": "2sZ6CZFL4XbxFC64aAv198yAfcGMBWquTVJu9vj7zNkNBweWsWHoWGNWbMTGKZoK8QtY3ypycuf5CnyuezQGiX8E",
  "key34": "655FiHFTmzaY5AhEYL99BF3hgLaJt5G6n8wpLZSSrH8R6b72gK8X53L3fwgHZQG8bABQ3MhPtCGGQjtsgnWaM6TJ"
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
