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
    "heoyq17FqoeqTQK7E1eQiZk4CW1ZYWDsobsQwDax6MAh6XQ37Mx9nuFfZa5RKF2M2D49swqaFcT7YjbtfPyLPC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8Tcp59dL722teoAojMMQX95wfx6R2BNBeXPE9gWtDSndaMtH3pEbir6XNL8QRdcvLsBbTcGNoSXTdNdVrCGRPG",
  "key1": "4p25DQADuf6shVz9sxwpyQ1SDKHzwEn5RmnEEuPVFCze4Gvo27pyZ3YgRiQuFYy7Zk1V9PQ57ZtGtte3rRrLAts3",
  "key2": "2es4hLYhn8WjPgZVz3iG9Fa9aPevWwQcUVpzmgYUBR1hHk5bsuVyH7eLxpx549fA28puUg9R2AbXeCMYNx2whodo",
  "key3": "2na6t3jTn4nv3bsywxE4pootChV1ye5wFqvWPeb84FTQk5cTsAt3Fr9jc8BQ5f7k6MnEhBmg7xCobDyYbnbbz9EA",
  "key4": "3hiCzf6av4AENEYcSfhcYeyjEbHbrpHspNmeKmkCqU7WgfqD881vYLAULQ6fBx1RsFnTunLjNtCa3ZBmSoQCqWYf",
  "key5": "5NEDscRxWyrjuoTJkvvU9zWqF2P8gKSfhJnZgDvmeEeZsgCn9JsFXmjXQoVw3saLmEnNyDF9KNP1hEmmrVtp3ZE2",
  "key6": "4UQThuYFgoRZorU9CMxrQw2V6BFmYTFtayuF2gBXW83TooSHeZVTXJK1iE3wvTjzxgNd3dShjwQtBCiKPtHMB7T5",
  "key7": "3RjU6wtSV69y4XLwZh1JPwaEvacihNypSsFfJJKyXvXxqVAnQm5ZPjVUuzWuAE9FVvsbXkeQruyLzJQLEqNUEicQ",
  "key8": "4BwncZVcgRFG4b73VkgFDjyEvtzBAnV24xuqMQ56nK3aaotzG23AZLwjWZXhxJ6zennu5dDptHTJDKmv6sf4EAz",
  "key9": "jtzTVoHLStkbsipXFpmTTVC3cpp5NndgqnhuFJECU5ysB5BiJbjrrnhizaLJHxDcTPoFw1EXngNW77MW5Ea7Gf1",
  "key10": "4ebVTA7WWoQWAr6Vyaz7mnBtDtsW2HXq7eybwfN18sH7mbWEi7E6XraEEqdotdveHqw3TqcfN4WpqFxCGTcozFNE",
  "key11": "2JbRo9S3FKV16uNsEoYp6BfswbksPKMyBYVhiCPBzz8VFcgCYaXb6wpvhybzfzDBkpyWkWVd1Y5xdjtrvmwdZHKU",
  "key12": "5jUbA9CP2jNSuQS6pfDpx26bZzsFDDrS1Sz1G1bYiE1yFNdSR9UX21fGaR1JstTcZb8Ba1HoRabZK1DRSBgR5LQu",
  "key13": "3FwwFBiqbqz3nbNddCRQSoWNLRNmKo6fYCbdeQojAFiArSHdGzqcktUiG7aWQCLQgy7pcMmfs65TCyikp9xobom5",
  "key14": "VGrVYCwbJGt14dDHTjBdaNgTp8bDTPqkGsFnHfnE2m3t8jVYaeZEEKnSPhTTqTHGqzaPYvBa9dWrxwHMLxE5cZM",
  "key15": "4oRYUPYMogKTUPJ7urKnk9qTH4cYTc1aAZgJgoAxuxCYJ7vkb2KsLuMPffZ6rnAVWzWvQkXUFuo5Kb6nxJ9XqAnL",
  "key16": "4cVXrhbpZN7C5pEfwu875YjiGJAKsSdHFRD5nukRUBVRBAEaptV1etcLW1m1vER4gkMmzS4Zji65fuBheUtKgmAy",
  "key17": "5iCwqskb5fiwKpc5RtHLA5E7Ey4o9h8WGSt91YkwRwcakJ2Nj2A35S22WYbNht9BpbQ5tzH6NNyHBaPtHY3NmbWq",
  "key18": "5EqT1qPXjHNgkFeHu5SCgnMcPtMEvNdwp8HoeUkPjEpanAqfkgKy18ctfSZkjF8tQyvMnChY78aiRo5LonC5xCYF",
  "key19": "5Pi2MaqPXMYdU1UjhDvDZT9sZaJopGcai7jBvesHLCAAZyfAfwqpsyiYSzka9x8W5nSLLHCKtANNFfb5cEieiuCp",
  "key20": "5Fsf5qQpWU9t3C6ZKS32JYd9nDpTVXBFPdUt6kMKvDZBnK3q2FZbHACRBP7ARDgmFLKXooTiNishmQaUDPi13Ehy",
  "key21": "31ifbLqKMME6s263j91cDBBAyaFrHGTSBpWuCcEE7qGmC81jXoWkKdWTAoESemDrC8oLz9k5Msfj8MzEDtafrqhD",
  "key22": "5qmpSTzJByu9DwnZ6ShHESTRQB9Ej5XdxR3o8v2fWcUQ2j9DTJGCV1jh7q9FqH3K3ZsLQ8FzEnfh35vKYKYKeZU3",
  "key23": "426L8afnzqcSjpp9DdwhH7VabQt47AqQnNHmSqtXLBcakhYf68LpcU8fCTE6BZXrptyzVFqbiYgFwzRLpRTDJ2XU",
  "key24": "3XuaJBaSgWdK63Xwy3EnWKzVH2xn7DMCAczPjBUHcgHjiXGPd3kMSyVqhZuMAwqLWC4N9QKPhgC95y49Q8AuLJUe",
  "key25": "4XBMJo2PU3Gtb1NJ18VzTfY4co3LqgmdA56663Z5uhTRdJWAZHDuGUAYV5UGtqKbrqzpnstMdSN88SFPSkRVVsZn",
  "key26": "478ya52P5Kr8TwPCd4dMjRcf6iiXj98LspVfYmBQsB1exQR1iEf2S2xMH4ZFtvsbHUWAovspc192VqkotdyMvbQA",
  "key27": "32ybLjatC4kXiJHZfVLq8E1vtbP1jsF7XNtYmeahvtVdyAvhPFsJgKvaVW44hzrRRWzoTggbKSXePXugDUtCXGgb",
  "key28": "3N1a7URMH1FauKkQHmY5pK5FFdb89o37g8swtMhyxAoK9rTnQRz6kVr13y3pGcZJYAUZyBvjJnQC3DywgEdY5iAQ",
  "key29": "5U8TiZ8evPsKybaxqEAKY1kTRGZmA9iaSczincrtmeZ63xBXrRjgJVgTXceDWb6LuKuMZF7aQGtKPKGqacNaTU5m",
  "key30": "41MH6fVrAgsAZADfxiU4kw8gUc1zWWy5htCMBawoWG5ruaTdvE9faiHSK3g46i2w6X1xH75FseCUyX1uToYqsCF2",
  "key31": "2GBjhP6mMzfxQsJv4Lv43EmBgw5zZUSisC8RjXmy4Bdau7Z7dv4qjgNhYueGFYFVaWCBS3Jns2Fryk25gki3iwkm",
  "key32": "KFiijGfCWWPzRdRH7RJC7DC5nQGBzczLUjVPwPmuosSwmfFyeshoR5Mwe3vtUn3ey9c38cVhnqzuXTPm9vx86Pw",
  "key33": "31EigX1xTC5RDjWsfgqsE8u6rZrdekbp23gYbir6vEBc5pRQ6jVmgkiC9L4N1owKgoGXEjSm8AXKF869iyh3kify",
  "key34": "3ErWsQZX6WpR1J4ToAPyaamLZJNNV8u5uon1hbdfg9P59c3K2mKDiV365Sh6jCLoH8WjZgVQbNDwsa4jQxUWYVer",
  "key35": "5DLwtf6Csn3kZfBHw3ca25YxtdnqGhPTd5t5qupxnxeKB1PPoHUgSVzQJxkAd49Vnti9YJwBgcvWekSLTLJAERRr",
  "key36": "CqHVDwNfUXKLRVznEkkaG4cWFXtAqca38FE8UfifsvpJKcsknPZrmqGhJZrmNfFpirvpPxrydUTxghCwEm3TqaM",
  "key37": "42Htvr9L3RobRafhmVwVSbDu87233GVdrr5h1ro1v1yAiVDhK7jm3RZ7z7uTzG9rHqBZ3qVc3GTXZKucnCSyX15G",
  "key38": "4F6FyhA4tjN8FnyyttyPatB31Jk3Typi9BVAsdjVbbETKd5efUZQUC26Xyyx6P75cJ9NCJaoZELiqWBvkSEmMJtr",
  "key39": "gg3jep5wp1vpVupmN18VffVXdNC2ojwomqH42EKHvnWYE1deGc1oG3zPce6gGh5k812HDeFrzkYzjQt17mY7rM8",
  "key40": "3BANFbrD5yvfet4Ytur4XNJVGBHZL3quDo7BvhNNGVbL6kyAijhQmApDeVNBVhVx9oa3rSAaBRhiAyj8YFrimrE3",
  "key41": "4b5oNe3bmc7un695LXFMAsF5V1YTqvV6uWELBzkitDNTFkire2xzWooGe9PK1CewZHRCxWW91JvaZviD768kng7B",
  "key42": "4R9WbqKJFRXjMmZGQwvQsaLdHDKrpYqanmanMHGWWfXhNqVqTsSyYYYQ84vodL9yf4KgSA9EPyk9sR1dc1xk8SnN"
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
