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
    "3AzBYQMWFJCzsQaQKMmit3JRAYvTS1SZbmUx84h37xHmrwyVe8ZHuXNN576vTx45gxAdxJkVfLnuMRS8zvobUmzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k5oquVQYXJ8fMjrGWeVJVAVgZpWaRABH9k42N13nKiS2tW9myMJevmA92SjJoPQWE9rGdSwuFttJmfqQAkxiBmU",
  "key1": "5Xcd93C67R3bSsL9SNXaqSGrqtU2nyQbkfH7pYYZKBLEdnTF6hoKhfsS4ffjggY6mESyvFJcAgESgNuSR43Exahf",
  "key2": "5R5k49y1MhMjmD32Qce997L7AKy757JbrU1yPP4iVtsbuYWtwwRg1TYgNVrXjpZ8WhfCeVtv5rDyz5LHZXTz82TC",
  "key3": "2bG9XCenmSk4SjqcsSUkhBiGuuHWdQVQz3LCPr4TfrZ274gwpUTVzPLt6UC8hwm3NLLtHLNBZY2inynfEbyiQNgz",
  "key4": "MKsepSrpiZme9A9pMzzVu6YBdEoNYELTUc18vRh4FwgyfwcCTbLahcjLDH8mRxrchPHKv1R4wPSSv9z7xo7FE4J",
  "key5": "3ws6ss4ur7ixNjcXkSwNudXeBDsk5Nb8ZwHynGmcHcGtqQgocAmSyLWTsjP1UoR1Xu2cgtkuykP7ALCpXp9MwrT7",
  "key6": "qRxeavBqnz2bj3prjh4TQ9N5aXswUBVPjeHiDRegX5NTktQFZfeQZo4et94Y3GbXFtXXsE9zengZUcYuM8SePVB",
  "key7": "2AZafWwmVEe1oo4XhQH62M7XQQxBpbvqBWa76mXbMMMJ9KjXdeFCZM3EvyCihunkbCUzg2i6CtdxVbrAvS31TrmU",
  "key8": "oUDk5FcvDC3NfQExZC4FGSfEFuwfbTZJjjckDBn9bwapz3UH89MwK1SSKb3pNDES1yMkFcrNEhsj8HwVxxXpqoZ",
  "key9": "2pHpeqkwoLNq5JJgPWAs1UNSqfzvp4Sfa5Nkfph8t53u3ojD1XhAkiYhWoJjHUm7T5B5J9XRSW1WUN98YQryGE2z",
  "key10": "5neovy2eeP6Af4TwpYyKyZJe2ny3tAbTweWxJ2UVGJkv2sRjxGnkqMhQ3FVjrD1dN3zS1Qny4KH6Qju6bfu9orX1",
  "key11": "5QFNfy1k2Qb4jhsGrD3PGDLQm9Lqq7NafLW9XBU6NoS8AXAeWRFtiCWs315XSRjEoTWLX7MuXtDkZ16AHhtudAnm",
  "key12": "4GPG3q8D55aFo5eZGS8dkGGng5AfU2oR9QvQFqjpNoT1JS696A139eMsts5RM74jbztSs8gTm6wZxoPdzSmgE11t",
  "key13": "3Jxog2ghnp8tDtLQcqQzP7t18USDPKrxNENRCMnRWyWHuwf6LBNjmzQmXLfEz8HXBgEvjSCMPtZ4M1A6YmDdeBYe",
  "key14": "4DeMfym6Q7VLaRemfnb9o12fsjpqFNdd2wJ6QJGQZq1PcWkL2XdQ6LLpxhFuHiGuknSuCLxbxzbuEiK4GhYiab93",
  "key15": "4gxX4GcdmbnGFHCGLjhXpg37JhWo8uSCP3UuhTwPoYtxD355C3sDcXFPiUgJzP1yNiFCb9NJBYEu3DGNpf6k3Qjp",
  "key16": "mARKNRhovEUN7YTn1jXsVRWzzcup1VYvUZb59hrb1UPc8h3jF7VimYbekVREVWqPfdmEkukedFih4rmwmWeQ5oh",
  "key17": "2jvHo4prQnTEAmiF2Qb2yrCBSowkfWnThfAXccbC72ayPe2pDP1tXmtbMfo6XaNVqpLj69Bqcn8TANiGCfUp2uxh",
  "key18": "5c54VKkb2v65hqrWKWaXttj48ma4gzHNk1qEoRqrRefPEVE5UJYwCog2ZbD16MqWmMJrMZtJJzzcLkSvg2jD5qzd",
  "key19": "3T2kjchXxwJCcbz53HghhF7JtfY6bwsZH8FVinx7Y18cLUmde3XFXo3V1k6b28HthtaoqocQMKMhdCYpRsBmFPh9",
  "key20": "2oCMA9TBayBERJXC4H6dS4LaEtuHu84ECBazRqCvJ6p3PMmVEJ8HmxQy7G1LbLfL9Kd3Cbywt41RUd2AmNxmVpo6",
  "key21": "3gvCMivHRduDDTAVm9vc1tPjums9NEcpVUnoNFkCK5v1CR3Sugxwp6YngaXLmk49wYstW8qVNVh4xdkC1aActCzy",
  "key22": "3E8ZEGStN1r3WuJhQvKVB5wygwyaULsm6HYxeMnHWGWdqmSeyhCXeQBjsz9ZXG4GWoR6PrbHCRLocbxapPimZe6r",
  "key23": "4EYHLuZ1KQwkSkiSZuucTtYt7SBGVmN9tDbdosxdds6DSw22ucaa7yHpGftQRLWkdAWhX1D2BddGtgpyEwEyhhsY",
  "key24": "3uctzaEto79qkQ4hh83TjP7ppGYU2eyJW4uymek74xQg8Ney7MpZRjwA4iTvFA7LJ3vKQ44mdYsWnDbQR8djrjt8",
  "key25": "56NPw5kkVr5tBscLx7PbPsWjBYyeeShmBnJ9Do5AyfmBvTVbbqihxQRuKx23SPh6SH8xgAGQCfEs7mcWqFQ5Tm1B",
  "key26": "3wwxECfeoyEaWSD67r4aBBHyG6Rg9mX4AdDsgJrbRE9BcJRhLx93beJ98ZQgYj1CQ6dppuUHKo3NGS2vDVka7P1f",
  "key27": "3i4PMcbx4zdzBoP7UHWAA7UnEBwLAPRhYijmYdnBvA3keqb3JpggVEr8EbcdYkSnGD3FEDvFGannTH3c9t9TTQ8P",
  "key28": "4iX8BCoJxv9z7ehrHBogZ8p8iPuV13DjdAJs8SD13YcSKgkjdzxN64rMGHCXYG32KJ7esVdbsx1BD3xXrYAspvzc",
  "key29": "3pmPACrot3QScMks5tNjKvytSPjgdtVv6bEmj5vmejQ33NNoMWAZUaktSpojZytbyrjKfZ8dxaJepNkK1XcUFAPt",
  "key30": "4o3FYkooCkjRxKtjPTF21W7KKQrSF9swrQE6FQ5kHxLq2A2fX3EbRLaseqEpYMRJFtdFLpR8H2zQt1ZgsPyj7Z7k",
  "key31": "3jFaoFr9Tn7xoVvY4fqA3SHgfJpkxhPRQZ45aiZmoDmXRhCDmA5zmTVDskMiNPa5fM2fXBd2rqbR7CAgLMemVTnr",
  "key32": "5xFCPJtD3ERPuHiSXuWAjKLvcTfuvo7noXgtsHh9hDj8owf3EUthrUKv71aM7jpAfkEMKKhFrV8w5cikEqurrCUq",
  "key33": "5UejwfxGBMjiEh2a9DF1xcRGYSFMAjy6PT1KRLRAd988q1wHW1kuB7UbB7ahPC3eZVL8GCBZZ8Mnt2HbkBb5W9pF",
  "key34": "8qrDyZuZru1BEFwRkPpUZLZ9tMTzGk9D6SNvbJBy7nkjRKm6Bx93KAunyzG3rCqdViNrjGPn6UdG5ZSdD3omese",
  "key35": "5u6uN6q3KRQgiEhn3qrBAjJK9jAJ2ZVkRjj5WigEkUyXJGCEHDrUzGgZRvTiQWRdYZoEv6B3kwFTJqVUewzwusoq",
  "key36": "2Ek34XgKkV4TnQgSGwYSxgJvoGnzg57B82UNPk81VT89TSCC9WfusXUU9otiYRhjRmTaXRuU62bVEPqWbY4F9RFL",
  "key37": "2PGfuMuEK86Uk9dfzf5PaKGsYTWaDPnopHLDCMAtSHP5auGoMPW7iUxp2KZzyAAh6CReGTZ31taFwS96SnqWrLQU",
  "key38": "4mQGq4Jzz2WhFd7dSRVXDiinAFqRicZwha93HKsfbbFhJyHLu3JWatW983WXVbM13PKypA9q4QLURkvZ51D2zWBK",
  "key39": "3Knumx1B1Hvek3LB1dwr61mV3i6itFJfy6PHVfxCPMRAsrYrY6vpKYEahD81hnKSjUBhEP7d3bc4AwCDWCTCyR1a",
  "key40": "3PkpxKxB3nJe5xX4GnuC6SZN3vhqnWRgejXczzZspqHRx2Ps4qB5PfjpSjCvtRfb74bLARsnMopxSLLDvvdabhRb",
  "key41": "mqk4erzg9cU9421UugRMbwqCS2hvvHSuBbkQa2JVVhBuqUbuboZknV5qNjE3GjKRfqAmHquf4MBcp5sQqLDnZy8",
  "key42": "2MTkXTrw1UzWDKxcS7565v4DpBv279njS1LKhAu3PuKLx9TEysYfw8pBVxULjwT6gTGBtXWawL4Njb5Amv7R6A6Q",
  "key43": "Kt2tujbniKEg1hK51rF3CH4ofaQohXqmkXEJrBxZfj9Gsjxj4CeTMRreympa3FsHxxDYUEAwjWmjYEP8mBJZQGK",
  "key44": "5T7S4Ug1SPVHLkY2BUmi3Hd5j6L2bRd7itUTXUnQQ3wrrcDcM9pP8Hp8zvaxwyvSxPUgK6nqiTiYR9W9pKHCNFT3",
  "key45": "2GAp6rw3LC3zspmKCjipRLYPDDN3MtSNENvttsEk4ruvH9VdVyYsU6Swm2HvzsY5LuHvPywWurCMrXPhpNzwXRmD",
  "key46": "4z1yxhGf16tUJqBi1E5hCHi18BPFaPt7tLTMMZ8DZYoUdtK1nJdX8xbHMRmgUVbo6Dg68FeshjQtor8LcXmnYNoY",
  "key47": "5T1LzpgPyJLPGsurmbApRZMVWHdmEmNrowXLDeSkE8gAvVH5MKXnBKVEPfjQEBQ8hFvUbJxXeGs6hFcdabQNeFbm"
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
