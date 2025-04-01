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
    "x9jNxE8hiqLNKJMvZ3VQdAzwJmrVKpjHMBGhVFEN4BRd8HFMwDpvyqYqzdjhJ1HsRjMka8t5cHwBzTKHt6wdQZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FZJ8efFNs97vDa4Hf3snQ3HtETwq5KKxqz575recVAmWN4bh8z1eDQehbLjxHXgoKuEtJDZor7S8LePvsi43e7C",
  "key1": "2HxRyBmDNLTUx5wLwy8SiZi5SwjKxxCB2UxVESLBSVu1aWXX92GHZ6HW8A8K3495t9gMV9VHJRx1cF42Z9q8JFeV",
  "key2": "5mnFyBVcAV8nmo5aPV2qrVxFu6ZdDZADsYMma3rcVmxHGtaC2WbgnuRa8DUWM44qf8y89j7gCsw1ZXjLayBPvN2Y",
  "key3": "3DiwbifwRSuiZAXHjCk33CfGLVEgQudMuuTyWR7R6dG446ReZaSJtcWURG7Em65NBeAt3on6fEi5zdqtfjTFoZL2",
  "key4": "4uKeM5aCgQGpmQ5rvMLmtHrV2BEMKoXvGoQeGnqYy9i4aBjZvqKNhj86193D5TFXokxE7AFXojVbLkyy92Szc3dS",
  "key5": "3QN8bmqdUr7vsyPqGs6FgLWjsPCNo42AL5fRePor9f6UueoQmXziudiTBabYwdhaxE7Sby3LJFzHTzXxDcX8vYv1",
  "key6": "mNxPrrHc3XSMuqUSjq8DmWS1LqbJL5GNQoRXHsqEzowj5gs9oDuAFgjTxjdkCcjato1bUxVsTqN6DEcZRYbrZ3m",
  "key7": "4ZZ2zcPMMw8KiGGcoHwvaz8jcz7RXm1FF3MVNXXqVcQwEnBGXNiNScUAYFBnvG1vGRUKLxnG6iCL7izHGniTzzgD",
  "key8": "NDsSiMdZcVTf7u1Pxmuh7kpe9Y41pcen5tZ3i9qwzmZWwQKbSwqMnniZnXdFXK8KXEDWyAZk7eVHZ7KNDEyzAjk",
  "key9": "2meydAYu8HQJApvnK93a3bC7hXc7xFSSJPSoCSDWBaYbQhhHSs6PX7DbbpgkQqEqByAeEKRSt2ExJvaEgZLEQMiq",
  "key10": "veaJwcKFc7Tt9A5JvHk18ZrnBsNVkTcZXzuNes6BDH3h1ZaPi1LXUJojbW5EMFDg1JsEQqqdXWu6DC1mbBWuceZ",
  "key11": "479DzsfERfaY3hgKRU4cJtfpRqPRbpon5Qo4c8BXNz1dFBd32TqJMTftiwc2FEeTGbrsnZ63HXxjZx9dPTX7nfx1",
  "key12": "2GMfcCEdy6b6QyMJseCz2i8R3L4zmXSnUQiosFfF9AmYbxikwPJ149MrCyiNJgqqWDtFSkH6hdYevpq52jmJbSe",
  "key13": "3B61c81tc8WAYeHxqiKtfz8VqjGVYJ5sn4EXQnLrqWchAQ4sgW6Mqy4UtDWqPee95963iRZXyBn8HnsMggicsrwa",
  "key14": "2PPP5YTKeNr4ku2KNmHYg14WsVP3KNVJmiJxZBNhtDzgpt1hPTHMaostSqcTTtqnMJKEHFto9q35DUjnaG8FTWfE",
  "key15": "63qRYb1gCQRQtmgUE2FdEWwkYmfwuaQ2aabc81octo1Wm9p1gK8VXSVMDhPR9PHFtDgYhscTvRFtuzSzqbqNA8Pd",
  "key16": "5XZoK5A8nCinUcy4uTBeDA1VQnswqtJ3SDzSEoks2Hsg2uE5zDH3spdM6DM3xrzNvRnTKDbLzuA1rhnpY7AhcLm6",
  "key17": "4WbiC2mTYf11CLaQYLf7AHNx8Up48zCa352L6AWEDYFLmAXGgnzoNCs4CMF71Ab4hnSg6XgchE8QYYVvkuv5PhCj",
  "key18": "3kgGQyhncfcGUE81m8FRx5Hr1epN1fH5L1XTk9wm57VXJu6wdKTbefbdrsBN5Kf9skTcrBakPm9zigb88qhErxS3",
  "key19": "5i7RfTfTxjMw1GBCfv2gtBNNGbNjGwBXvgZhaFi5BJxR8zBjM5PRs62sP2AXaGurERvfW4afYEhaQsoe59GeSzWf",
  "key20": "5RENtbay9Tim1rSJfiyUV2ixyMK4EbBcsz8vxMjvn5w2qeibbbhNDWEJBWvFnAB6WKUWS3p5oMXL6hg2Lc4uohfW",
  "key21": "J8D6g2AxG5s5Wy3SNYserTkGJQ15tsiZUwrB4hdmHCUWH5pbU8apVe81cRVUzHmq3j6ax4gPtQveLB6PgEsRsH5",
  "key22": "3k4gtfekt7gDjsdff35rHdQsNkEeFbonCkGG3twqpkqmrhghhN3BAzn24UynButPk1RTsryzeVfZcXVvpqCwPcCm",
  "key23": "crvxYRpnDg8MrbN9NXxD7rjJtNxqQ2cgN8144WMjDasqiy9PbxEvKGuZDccrThYRnGZkku2ufVk6DZcoLaY2zKu",
  "key24": "PGpXv2iTrNKfERiGYqBmV9J4Xhro2qsVgcZoNjnLUAGuBY9iovJ6ekCqrNVY33TZWuh8WR94cifv4pxDXnYovkj",
  "key25": "VjX2eKsfHNfuyG2w3zZMr75nhtsoU1WHPUXM8iWKvfEaouwE8qGYSTxp1xoDjA8L9W4ZDiuRvmF6igKRk7Tg7gV",
  "key26": "5rNybybrqoXK23dpD4upGhVKFWqneUr2XHbxzgc3Mj41BfMQVerKExitATuEHxEXhZCSXstwQJ5VGbmL17Vr2kuN",
  "key27": "LkpmBsS6J85VjzArMa2bkcUPE5oiyYimeJHxk6e51jFjhfwJXRtkqac4cMkY1UTok4DDRR78JeQyTR2exbdXtqx",
  "key28": "2Yi1H4GRSptgGkrS7VeTGgPDAY54ZxW2mgACRdHmpyDotLyWF3XVZyw8skhzCHdvMcjtN15g9UdnZhhfZVPSNsGV",
  "key29": "32s3efGpdRSGHFpyrv4wYp4q9VZGsLaKJxMRGxqkvKqHwMnnUjNPTNtxzzziHFz5a1hJzamKtrmVMPfiDwWCwJYn",
  "key30": "dnJUpVULxjEb8Zp8RTrnkRJnnJh3ssaqPgBtQG7jqLyZSvMpzeZXrCueM7FkK1yCTRohfMqTYvEzPBQNZfboM7o",
  "key31": "3GQeDr76mJa18UfZiDXtbwSX7dzLGp5XeJ3snXNkcsVmQXEeEALVWsinb96AohWwwxuyLR3pXG1Xf8mSPruJExbV",
  "key32": "2b3UUyKQ5PxcTfaBa1bx4NWEDDmNoXMRpx5GwJtmsVXmR1vAvqTxRPxxu1hqSbuc9ChcHToie6ag3i5EahcGcsgz",
  "key33": "5j6AhkGgnDCfaBFekEyypiE4qDTZZD939JsGfaZjtBiGfNvXD1QitDBJxwscUuDweVSQKQ9ujDT4Yb2ggMVfGzNN",
  "key34": "4gAL4WLCKtPd3F3juCD9zfFT5fwYpvXraPmSqm62JXhgSpm3M2RP7DQTvzbaq93eEXQxm8Z4ASLen3wLUNfgAbxc",
  "key35": "QzBhcfG7e5j2fyiofHDUxgTGRv2fRCuokFPDoLZZghcpUFadAsL8DyyHEPh8Mpp2fzYUaZsSHsowhbTGqwmDsti",
  "key36": "56bbCVNFzmMJ78pkmiabedb7JHcYvXXA8QFLT8hGSZJVjEM39AciMxfNKLzKhbCDymFsC4iaKhKERPkfAE4SLTRA",
  "key37": "Soerocm1KGYHTy6PHWWWSsrY9vjGxPBxJndaxSxAr194Z9nXzd9BJ3VoDUt29v4yHm68eWboLDLkXFsYnNVgvRW",
  "key38": "3aH3n3YKERGiqUiYWJsTC2ybKXWYb6CeqvWjGt3MBB4ND3NAzop8qmsvg7fRBy5BfnNYiGBwXjeYDrNzfGcXWfE2",
  "key39": "3T77zQh7S9C3EAgVE9mFj3cWbKe1jhzEHGXykXeG8HhkibodMv3WnKagYdDh4GLCMqY8j8UYZ4iwP9nAyBvPQJEa",
  "key40": "3gHUrF2GCmUbaFV27X3dmnipuF4WZgxmz89dAUdcqzDXaejmHSP3gBXj4HtTdnkuc6GszVaywRgXjr1UvMfUTTyd",
  "key41": "1TPBhjvQ2GF6PRLKoxo8x7hVc5dgQvhF3k6VGS6wcoeqswtDmSb49Y3c3ms965Bxbzpd6ezEsbzDQ7R9JvnjP8z",
  "key42": "EDXfR94Qz8dQZEJTUBTAnuQD597ZGEuVww4aNgz5TPBhLXCZJQ1oTyCMGDZujgPLrr3gd8qXUbpTJReciuwg2BK"
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
