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
    "4oHE45Rezs6G8Zm6VBXEdSYq4jSWYCd9cZmBZzQH7VozsUSUKV9ixoVET69F4dNr9KTZU1rGYc8CasR1g2FwbgAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j6TCtZsUqhdVCTtXJTxcqzJZvxgRUWtemezbJVC7ZNcPzfUhdGB6oPZjktyknHrK5KcXaVGkg4ZBkZ4FVdNMwnv",
  "key1": "34p5D79jJF7uRNfkeqd5YM5TPfzKsxzxogWhm5ZnWBu6WaEFpKtB6157p52nCtfizBdH5UoQExPUvSkHwNhTqdKS",
  "key2": "5etgszFmavPY37ovRetew3NHJ19yNS2hcrPDjDM7EX8qgm7PMsMAd3wDcAFGBWTctxFpg4vxgxB1d4xbfwH7q8gL",
  "key3": "Qp5BnK5FBQjebsPBPmh8rA6Af32onVj935QquKyw3QpvPNYQULPwaATto6fo8RFb4Uu63u6h2yXCFfNeVR1VhkW",
  "key4": "3rvfMsu98JYUWGYD5FpNp88Wn8JA1Yh3b7UQ74A1osWLN1BjgLPwrQYkPPkdJVwFJ1USfMdQwCnb9QGGf4FZJdaz",
  "key5": "3euPoneUneQeQd9fmLUf72G4Qdw8ukYqaQKQS9BP82AdcF6fFqx8wDF1eMkKdGLeELsc23yYm2nYkSJxxvtJTXWT",
  "key6": "4fy4Xmi2yD6wCpJec45d1u15niDhGnexoJGBxkceoRm42JSAmSrHRWWSyhUPNrxqpDMYQRMpKzmjvqhE7bTLKFTZ",
  "key7": "2TWj8jaHDr3XAhq244iAhs8KyPSZBicJeiUJfyWpKx4uEh6tJySvg5ADr28GNWZiESSp73eZRqNvKo4ghNE975rk",
  "key8": "3xBszWjhfhMjhc7ywA84qPXqA4LXyHbVnsTa1UDHZhFbz8J5P1mY9U67RxJc6sCLvJeUFDsG78VM2kpUneqKjhd8",
  "key9": "2grj2SYRAb95dD1cXg3YQocqLFynUzTqwh6cDizq7mpBFjrWC8Jpv1sg51eZktW8DcLJPpwm1uQCSQzmXShGYFzR",
  "key10": "zuL3BUi3oKCCwSuD5VAXvhh5Wx3tcp2buR9yZ8UmDCbM59n59Kmy3JXcgtha8hSrW9rHgg3fP4n6JiJM4KPCJth",
  "key11": "2GapuYgiHKEBdwQcpgBt9ZeNdWRhHkRo8T42QnBa79GWhNeSaezbLDLw5G5ztzTnpnwcZFHSQtmSm3KA1rLMTpM4",
  "key12": "3rk1CMyfGycWRZfdCUhgvrWzNUNmzUBC2uD5Kw8qLois6BWHN6V8P84wWUkmUpmGS3M6xwoRoyoFo7fwkjnQVJ16",
  "key13": "BPJ86UNeNZfeNgymsqqGJ99rnKBk9vEGUdjTJijKjDu6HGHjiiDjxGcXSXqRopz7AdQ6HTy7kMVJUmiCADmABeM",
  "key14": "3AaS8UNToWn8ZFXqeUrk8Yx6ysGvRv7gDVJCictxLbt8zCHP7uA6hH7etWH7bdL6eLxELVYdKQXHpt1rg7FMp1X8",
  "key15": "34cAaZ5JV2pjGxELKnVEVAMHGLQUj2nYUZFx3TPYR5S8fskHtmANGLCoDUUQoNpSsb8QzKWZDvzcsPt9DYtx97iZ",
  "key16": "3fF3V7nYzxkTuiq6j5wFvcHVLpRBC22Vr6o3UeQNPNhjskG9KDN36RkrvtKUemajX5b66om7n5dbZrkX7Q8FRCLk",
  "key17": "2tMRm6BqPgEfsvMkDpSBUFHCUjc5e7P2nFZNZSpK6dKqNNNHtWoDZBrY2jTadohauAdAkS1YVYcoEfuHijJHdVMf",
  "key18": "5p8zjpkxJy7YrhkGYLKvkkfkAYzRPVR3EEbXWwY9KU7Cm2uMHTuEES5Uez1HbjychzNhsWfH6Ab1uAkDgXyw4CnS",
  "key19": "EaceirTBNdzhpZ2v9sFYQAWrjtj71nnC7iNUGemFivcD7Sn4TGPLnRHVHkMZFMPSfnBf6BEN4m7KAWj48Urg247",
  "key20": "3RjzDso1LQzRMQLR3YCH5zwHdzzvw2pU3zYpwcFzbsd7xfSVm62h1qVRPuN6Qm9u9tUgm3PwRqUFfA2ysTXFGhZ2",
  "key21": "4G6q25W9WYbjkbvAwYVCW6ysv9YDwTHNDSirGKg7zuJaPZSuc6CnyBBRfTTPTBM6hcKXBr9759MJ3Hf9BoaETXjs",
  "key22": "knimZrKUVuydaRZorzA93UYaW2GuWWNvqxg33Fy27PQKKoaapyt6bwaQVZvNkgNJvAwF829z5VYzzL4Wbsbdnew",
  "key23": "3ygDNh7nf7SJZW5QF8UJK3t3pBRX575GMNFyNjNWZvcwvHzya1AC6knEs4W3F1jZxDgqj8i4Q3uSq6K8aJGJqF4u",
  "key24": "5emoxijKpaPc67AY5cYo7Er1i4GD1FsBP7jqwLRv8ZFy2qMseXfsBjf8u28HhEXvFVSvFHNMhHmRr8LZEbZY5Wwz",
  "key25": "4TqGBD4UFBwaZP5jKC2Hjh9yva6Rv4wBrcFf2cR2MA45GW14pyLNpQA2XhRdjJMqXjUm7X3Ucq9zRhT6FooZjLNb",
  "key26": "vbWTNGGQSZMbgTPuC2btb4GT6vdfGSGUFqW1TFVDsT4f2BwYkQLng11kXpGqVATjWooKusYAYJ1F2DW1J3TyzsL",
  "key27": "34LG52wZAteb4BqG5REHuhc7sJCkKLhJ7b6EsbCZe6LVAzGXn885VymJo8qP4agvoHAUiSxhiQ6VCz7foSgyCa97",
  "key28": "3XzVYKxkhajTkJDeyRPW56AwRFGfU6tDogXfXWXq4Yj1j7TLroWDqk7KayvCaNixogN5qzgw3uGNw47ayxDCya35",
  "key29": "3eq4BgB4BDMmjhVBN2MZ9mzY9twT9FT5t4215zG7W435jaG32dQ71hMxXBaBgw97cNbCuFVEmLLHwojQhpx9pyvB",
  "key30": "2bhftVCBJrdmN43RJKcDsABXZyit5VvsxTZHrCJ6dywLWpxXkRuhdQGBoT824QPA9BzeUdUZBsy9jo7mrcspKjiM",
  "key31": "BaqBV6pY3nMRvVggCaVkTsCgwprB7sBpjzwmSJn6358dCbQNEWVnsNyVerJRQsaxu8CcfTJmqUAArdpE1VsqDEi",
  "key32": "4JpBBc9PiU2UNcBe3xVoHjwzptoBGuzgGoLnTZovay2bgtJrUdfcBUQsL3aZaZq1xEQH9oYfwG4yb4B4otNgSaft",
  "key33": "46kNRvCWZwCoef8dbcxJsxbakBbi9mo6DDNiqXPR1qicc9hpKAZdgc4ZKfhqGSQeeSFwcP3WZXYAxrxzpfwFQ2G5",
  "key34": "D8caLZKyDAoGzVVvT8ZeJpoRwAChs7X8eRXSPdBjTcpfyvjbxFxuXDYpB72uKzAmiJjtUFM1FQz83o9ys49etsD",
  "key35": "5P8xQQ41YdwzR4dV8RF7m6pYBek9KfCs26aFYUDNUn5stXVYCeU8ZDMcZa55tW18inpr3FskPRCebU1QNpnor1ZD",
  "key36": "ZLTGX4e7QeGa6RqM5j9NojPC7ZP3dqKdV8Q43vn4uTPU4V3HtFZ6YeVawBFzi5y9pd6WiNGrPy33v3apBfzY6V1",
  "key37": "4LnBDeUZt3ak2XDt6gcHCbm3dEUww1MEHagmwFnFAXQiYREJPuYVzk2ZxmpiyArdjgXtucK9GDoHqgmuxYrRRufF",
  "key38": "58eZsBxVRHUaFmAzZGLPvtWN3dkaGthb3FkxuZzdVQ3CUVJet8K4YWayLaih5PphEzSSJijNFxzZLADUZ2ZSqqK5",
  "key39": "2CM6ahdx2jtBaSvnWuA2ap3jhvhGQmRwSqzDpiEr8UQeZxxGgkpphc2MKJH2yAzm2Q3bzHJ8VUyfqVvPdHH4rk4Y",
  "key40": "bEdrcQcHxLu1pVdvJNVWkXDGeTJywZPoVxVujPaMwhL9FFYJypffQwNT2iqY9Lk3D13T9RW5V7RiCshWAyxQeqS",
  "key41": "46DDugPoCBb3gedMBC7hQfrAYV4SNMGcFKV6dkuM7ExuaTfv9sTe2tMTDBUx2i6uDtQpbbHPcJPR7nTgMULPbFi8",
  "key42": "YWz8UHeRwSJ192Y2Zb24gStMm49CUHzUuTZYtbkFDRF2qbupDxKmu4MrJFUaTq4BWAUBF1dWfB87Cj2pjq1AvNK",
  "key43": "3Wi96zCipRALSkMcJsT7meQX1witWNMAgArr35sz8AgSZSRJgZUpWFMLksfmjxJThaYdzuvjz81muNRyhVVG1v9f",
  "key44": "4ddz5aD4mUti8R2d9crJxe2FLpdcEctbkQi3cYmxFrKz9i8Mt1RezB8xJGgUfPPmaBmg245iXHpeKioMhgVycdCJ",
  "key45": "5D6U6QmeKBXM6etyRVSaf6km42yssFzEbAD2cB1JZdaCPvxAxhcuVvxqjq5yanACHTuewQd4JS4SzBBREd6z3bo1",
  "key46": "3pbLing4FSRPFi563cesPBKyRpPhtQcAVffUyhyQ2ntCSNAZBEh3j3ofmXMjvWd4Ng9VfJphSNmQC7diNHqY9Cs5",
  "key47": "9Bi7MDDvJJ5LWLxNSNTSPudcQs7GbGYZAVM41ub6hzke4tCsunjiXxR5gURZjn9vk7Td1XXTcFTyDCds3yi4qyN",
  "key48": "2AjEYK63BZgecJJovQzeEPqZLy6QKmpCSVYFpD12sx4nqs9v8b1zBwh3yH6XBCrhpWbRhVpZTWdTrxMMNkEUj4nz"
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
