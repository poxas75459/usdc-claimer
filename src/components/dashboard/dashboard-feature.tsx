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
    "5gnUCDurAxkvGHG2B7BU8m6PLhDd16fchYRDSsGG86fVMsP9k6h1sZiKnQ2Rwr7DCoMCSLzpsmEWkM5FW5VY6aKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FNEYSwU2quJpsyuXqS9uBQJqrjFnvund3DyumG1vZVp8rnNp528pMQPz7tokh32fh8YRXcCXkX4CCvrLUxmMspj",
  "key1": "2SrvN4Aog5BVyBtYF6dP1EHPtYyAKwxjLB58M1yomhLPtBwsPZ3Gs67vjyAsNVXe2XmorzbH6ehNB3G1Wi7cJGCK",
  "key2": "3vCKcfJ1LLUhWsmFUz4DPvVfy8fDj7MgCjwLt17De5TNRzodfC1HtDFzamJZo8z2Z91rTzpaDTcuDLkLs9QKzQFx",
  "key3": "3jVrjAD6J8Mj4CwnWEjkACqbqtRAQ75APJFPpabosfwmY3GTtGzgHqNHss2xBY25iphZ9nvMY2naau4fxoGRDg6H",
  "key4": "4rFySsA6GJywJrLbaq3Kq6Sd19WYeTE4fm7JPjetQNTuXUbjvPPQEp3zLWaYNh2Pdqxj4QPsfXw4zQ9FwYR46UDv",
  "key5": "yRzj9JRo7GwMRvtgmGQtgRW6tG5uDfWaaQfzqZk6V8kRzUXpke8XTWi1tPTco57VkA6MZ8vQuTTumjXEu8iPLKM",
  "key6": "bDWWCzeeM1fKwuWBmPi2Bz5MWtLJRwXPSx4cMpj148AriF5BcGEipwdStLKrsmw7yEc8HkZa7mjtcDQTRKk3q4Q",
  "key7": "44tiLoN98QYmLoW1BxYEYuJjtbDDgNE7Hqnev1uaJe8H874FTFr8RtESQiojxDwdx8szgQYQcoy4PdVmzv2uNF7E",
  "key8": "3WwY8spMafYfMHBxeNq6SmEyuwUEy6QmCDoiNXyc9rYZJUd6XDJNU5HbdzanrukuJ4vnvutTAy9rLXuSbdNXgFgo",
  "key9": "2u1HtVNW7MZFzy1nUmVaujouWXb6G36PVD8c8cZw2mTzojkrfvf6Wz2FwFaLr5wa5HoWQVtbCnSmdbMsWCRZQKNt",
  "key10": "59THp1kEoLkUN6LBPwuhUW6ue85bh7aiasUq4kHadTsvFe8WBWKrweGFRCb9ajX9BJKL9jJ6q5ZbozMxqiJV86W5",
  "key11": "35J4GR1WYv96AB7Z8YAXwtjdpnMs38gBmNsoeR24jhZLeb3J4dHqGF3M4DuMAfquyk5K3JsJHHgR8MhvxDkaqwab",
  "key12": "6oXgnTuw4jtMTDoLSRzCcJKCtCjc71jE2aQVCggLdgHnSFE3Lu8yxmDhQJy6T4grBEGqZFWd7ZDpYWdM11PF41v",
  "key13": "5BzxyjwRhPEQv6guaLLtzKK6x35VEKtazmo1NBfKvP3g5H384zxRbh7Aby25vSe4qoz54JpoLyAb2WW7We3ik9fX",
  "key14": "34dKRj2AzMtewC6zLhnhSw8qntPBC4zMsJ52dDNdu4AXYivTfXMEbXr9CB9StYbcpmShMppFcnWczRqDMd6xbxAV",
  "key15": "5gC3Ps6PKoB4Zg4YmUUZFUnSsfSbFgtEvFPXRhvXy3kfBnXgF8nuZi4tutftDfyREsQ6d15YfpsC4pTEkb89RMt2",
  "key16": "wGU9HfWFydg9W4WQPBSqvK2w7vjHJWpFCkyiG51NfinwxcJaxcAHDJRL35ouDyFrrFHWK23ELsdv5tRpkKMhP8h",
  "key17": "3SZPa8DeeBR7YtPMjffAcF8BB9vD56LSRjB3LDoabHh8t3Nu3opkmULE38WTBxxSkcQYtJVvngAYKeeuBQNwEwN8",
  "key18": "4v2Mgv1AsFF738JZhzy29TTyeHLyJD16cFXfjRWE9mJuG8ravzzaGdsjH6NMwM74ywFWBtSDpPnQrfXkStY2jz5F",
  "key19": "677jcsz5EkVK1PvGqAStBuLQH85Huiyx5He981hMyt2bvSfCyWuatE91JfMvrjRfQ4G2KbdkLU3dnCfWSqyf7694",
  "key20": "52zbvFVSSP8gggbucHzfBtP4cdXT8sw4mKnB6QvkgtWP4U1YYTtjxCYkv19YwgXJKaMTdyynpsM18KYdqXUQB2sZ",
  "key21": "26EW1SPMc9ZkjgEfDXcjVYK53gTdvP7SGekNgbL8juuKgJ5Uvj55sgBUkWt2spbEoLncEk6J1ww7Zf56pSDNUkyj",
  "key22": "4r4VcbZgFXxRjudkmXUkPgazsh3sqUA4npLeW8ZzciFCj9DJiH6X6oBm2fvAp5T4FFBa16N8bRkJBLDi363GYyjf",
  "key23": "2H6ycBaLqtBFYbhabYZNgRUYMQQ6mxzrpA2rgQkLVvcHkwMqki5Kre9c5N5mDbhvA6y3d8jRfbu2QkawBhvkAPwW",
  "key24": "3p4PkQC6h5ivmtR9qCuNyB621aaF6aKMTYsDEorSbiZJ5GsLNSZnVwdEDx7v1wFGdRanQwBN6aRJYqVjFvDdhm46",
  "key25": "4abYMTcoSi8gC1AkeDKbmwaQMAQVNGu2Hs1gQu5sWZqUW7Lhk2gd85iTsRn6gvttM7mbQ2K8oWDNjvvyy7SUpsP6",
  "key26": "3Z2dDe68oqoKJ9xTLBcYzbrHbmhCRehyAYZxthALWHoN35PgcnTkBafNhqeqceSnQX88agtk87XT823fSX9vSpMW",
  "key27": "3XF56L9jBaqkR4MibwrW4UeznD8Pmrb8VbZPANDH2EFk3PkDTYNTaH5SP9Ee91ucT66P3DLggEmGdFAw4AagiSJ5",
  "key28": "2NjpDAS5UFZSjzGPUE1coySPoTYAYM6YErkQ4edzoSMUgmqW5VE8SayFrYfkwx4kf9eNEh84JKTVRLF5rbwAangR",
  "key29": "3mZbmXGq1fH5Shs8nLabgf82JAd3EVCXF3t1RLDagUbuawYJc8yjY7vi3ZzYRxq1cbpbWvULv6tGj9pWt3Tq6HA2",
  "key30": "38SrEkhANjeMaAmeDwUKWEr472PDNNhxuJwu2LR8ajAap6gHMLtKRTWZYZAmtWNASQJqcyvh7CTVFQTPh92HsHhx",
  "key31": "3jPNzFXoC6ipcQ2LEPe8UiSCskPodKbtgdHfZYPYeVYCmSivcw8VrDgCJQQiGHsbfSFjWQ1FonNkPXHDjhwcmoMD",
  "key32": "5FGnRqwHPusFGXCHNxgokLhakxSt812EvWgwkhwokiYkBWafPxXKGgir4aDsGzq4PLA3cAGkgvSSbAPYVpmQL3W9",
  "key33": "4tWfnSUCogxx9q93EPz87kaHz63xH5SgDN6KpxaAeYktwdRraTYtkHurM9YBh5ibrwRxcQBcXZ2r6WU8HaJqVMog",
  "key34": "4skBEVjEmZQax7S2pagBAVtSsBizXVjrnhenDnLzRqRVdcHczjV7sH5NitvmfrugtYS43yKSyUUHnLygGSrKJbaH",
  "key35": "2jbMLMbjq44cw6kKPuBjreC1wQFmFEcNC2giZx1fgcKyvGn8xpAFq7JXxLJkdhZSdKNpmEuwCTx5TZEWX2E9YpLP",
  "key36": "9xghdqH5EqeyYToyX6NWxTkJYQwckGFo1mpKnHv3MKxXuCyduSdA9YV5VczARmti4HdMvDyKswpLpkTDokwHfC6",
  "key37": "3HrS87pBZDyXBgZnNN42LyUHLmFAkjExCkgFcJpwX8eUgqnJzg5awJcCeXfg5eGqKM17rByXMhbREuGTKUyN73bz"
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
