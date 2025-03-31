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
    "2RGCTyXerDj9eypanykwNMqX7zqu2evWMCiesKMREHKBUmhzyvBYipJie9tFbyHmz3DH7pjqq5ePQpWDbNeMfcHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kC5yo66iFUo3TfFYcYp5TwbJg1siA5FtRrt3McGX4gFL7Ud8eQBNGFfqrW6aEdfib9K97WFNraXVW3zpKC3iLL4",
  "key1": "4pDBv7JPcXjQXeKSB9PLsas371bEWLkmExBwPSdaKw347fcWCAZuJnVkXMS8ammC7aFDg4TX2wzhfaQgHrG6N7YR",
  "key2": "2H7ikjBTCaZahN4nRE1NazruHTNCvbEgXdmwTeJq2jfWfikkhGWxKekZqXmaz3Qc6izjZKJYcmfG8qW29QvwVK9B",
  "key3": "2kpwF8EmHeuGAzq3KMiqcjr6JHWsqzBgD5jgekC7mKxWTDcgmskn5QwVitrfA6JQ9cxYVz44V8at6gpYahayWinu",
  "key4": "3uk3Vn9oZbmtVZC6MZGoZKiK7ALmBt2CVcn1rZxX87Vcjt2gmpPSeEBT6TPZ3NZHH75Pk1rPehT1nGNiAYTjRePK",
  "key5": "42njTgh5KZ9Z6mmM21tM15ujLCVvw1QiThy2ajjFdc5Hxt9GrTDZYE27CP5yWfUh2PMnk3L5QWU34eQqiCCL8ihW",
  "key6": "2Fvwy4642ChS6UGSkubyVEjenTWdDfeB8McNPtLW78S9omCNg5dtW5FwDPFEa3dXtjmqzvayjRgLiNfBnyfAv9cC",
  "key7": "Fzh6A4mhxjBiHwtg2uogKGgo21L7hWxCVwJ5J87CxcjbN4by7dyuxwvuGpm5bZCMHveTvfGMqwyaQZJrEG7E7oT",
  "key8": "3QWHzxoGq1mAZF97mLJHG7BHnmBcs2xCB1Myqkb36jExfbqq72Qz9SJjcmGP4SWWjJGcHX2xmcDdTV9rWxiY4EF9",
  "key9": "34jCfJfZKr4rTdifSNPwnwe9Y8Bim1BLPkB4ghi8yMXwTcUe6nLhhofrFL1EkT1C3pMizbboUoKqHSUgsNY6taFT",
  "key10": "45djDayk7VJv2UZb58aw79eY64T8EBRV7h2GdEoSwGxKCC11PsZcqPy5vKLFoE17urL6dGKYj2JgG6e2yUKJJrT3",
  "key11": "3pJDDVnRUXXHDkcT4Fdt2MYvkpnGLUinzSq6QToCAg8XqurEYYBJaQ3saBSDUPeuuVRhwm8pYBQ1oBUuuAEv5jcE",
  "key12": "55pG9eurtCVjTb4T7WyjrZitz7peht6bK2ptr8Y9ufJLF4PcerqfakPXc3GrPZSn3PyzkvmRz5aYJyriaj8Vsur7",
  "key13": "2xR8T813LsWexDxpLrqdm2YJnUKnSrCUTKPJ7tMPjzgSxbeHFv66p3VEitvHvTK8ErVMzR5AYpXP44uDaPsVwGkd",
  "key14": "64cRicVTUapAv4DNWjosjWQZW3EXmj97CeS1abWormD4DnGbNMjn5Nr6jXngBYJuVKDgK5DKhM1PgK9oHy116FAz",
  "key15": "53FBA6ZXLV3e1VKKqmRjthdwsgVJEvumZcBUQwtgSoxx8gD5Rr9P1DboKGHQsjVa1tDeTYbSQVyg2KVmbPu66qj4",
  "key16": "4VjJh9FfcCwKwSPgzn82rhW6XvpuU5Apw2CherXJBnxhgYHcYfjRtx8Nd12PzTet2xsC3PSMY4pYh1BSFoAsG8zV",
  "key17": "39XYPWnqRxdxiSKPXnvAaUNL6P2uLbwphUu8voZPWRksia9NSezQp14mnaGgbqLRZEYUCdGNbdHSrCmeSUQVWC1b",
  "key18": "5zqp2TpVWX6VEF6YCrP4SRWzcuHbiDBhwW39hjZBAvRkpUJuotH7xuHuT9Nu6XEAM4Ffhk3qZAmvRfxHRPPRuV4x",
  "key19": "3gypVDsUz5BoUnSSSHFugAijFeUmMUUkdCCaJMQzhdJia5QBoYpDnsmhF6VchWJ7AHXGLq28Wi5msYHDQj3HaDvY",
  "key20": "CjySs59UHJ6ouvTAQviC1rmJCtYQgMXG2iH7DNmroPkqKNTQbs65rQoSYqSRbrL7kDVkp5JSXSSZZGE1t3LWTFq",
  "key21": "4iiLeKYZKrDbDBfeY9SivnmG7Fc9Rc8WG49HCS4Zt59LEpneK1ddtvTVWcYqNiBYaMHKrz4iS1KEwkZQbmc93QX7",
  "key22": "3Cv7y4TtRu59JX6PCpCoAvpVqF2Cq8q12SaSp3bQECkGZSbDw7heERkyXRbP1AwCmmzF8tm1Ktpb24Uk8DTHESk6",
  "key23": "U3z2JTzgDcHUk6hqQPerrMfTvEtuohZaDK6REQZ8j1KwDpZFuzFMJQG2Fq2eNRMtqyG6BWdBtAcBJvufkF5D2Eo",
  "key24": "3kkpAxYp73TG7NW9Pa5o59J1edugq7rUxCqGyp8udVkCj6D9GhHKu9TfeTcUpYGe2STcXGNS8WXvewJsQEf7GFfg",
  "key25": "3Wf12EAgy1CJ14tm8TC7GyXJg2LZQjPYxFLELQooF1GfW4VEkCgJJFfUA2r1UVa49R4EJRXJCB129EtZhCr5f1dj",
  "key26": "SbnqT7p9gaVGo3zXnQbxuRttP1h1tVTCDJaP8NBjshLzRYvQX4xUxxDEDqtBYEcEEtdsYTj62Mqk5K1HTMVGGxE",
  "key27": "5MTE5h3ghGdSi7RkVyCPi2zSaxpHnFtmA3L3qYr36X73WXjoGhcKzZJh96GvTwMSpv1JWLW75StQ8Gycfzp3A38F",
  "key28": "uc1N7CXBGZYYkr6KMgLb9225CdBeWxKbao5FGSzVMX334q8DpnFszHxtJ6D8Vw4sELhFTP8T6R2XXdt1eUAoGjy",
  "key29": "APggjxEdaW3pgvNFbPsGe5gwqMmRC8zJx4y2jLEheVQ9X3bnsLb3apUtD8scM2aKkMseTjx3NXG2ZC8PVHkAZ6B",
  "key30": "4JTVy2GRpmjFcL6H1NZsR57jrTRFco2MTGgsQ8wonTV6cVwayLe3X58f4Wv4rv3t37ySX7FgB8v9sy7xJkySTrN4",
  "key31": "2CbeSdtsSvGgXjn8vYtpswnmtpRHFsTJWEGDNfDyU8PLhg2QMRhcuZp4pXC4sRJBTzKJVgVNyqsQwux9136Pvvz8",
  "key32": "3vDcHsuo7fh7wHWcr5CqmJVJqyM8m92shXLMnSv829oXgNeR9EFGqDRkbQZsf2qssgXth6LYvXAgwL1DxjPzpqTj",
  "key33": "jnxqd9BfcAa3xZ2KPzb1YTjpByiZaPTZWYTYGuAvFrx4ZsLtfDo9DtsdEpaLm1hbEd8Wh44X3gxg3eP7bV7qbTk",
  "key34": "5CMzWLsmNxJE1XNeVhfTyMBoAJWZdiNSbw6YtguegwsNtuKpKBMijwezRVk1VEmiKLceXK7qAcpkQP55oBfme6Pc",
  "key35": "2foaiuB4u7mRaR7NUCkQWRH2bG3X6yQfQ1Txa2rpvnRcs7u5s7Bi1DkWimyVUq2AFmyNj2Fdt4BNAgHChA4MUxAu",
  "key36": "3KSsGxVLeyeyhYSRDSpmCNUKuJvLpJXq2PDdGa7Nnm4rimHGyFVM2rf2MTwqrsfuhsjhVPYk3jYGU6HhKNsLecxH",
  "key37": "4jX7NYL2V46SFiDcogxTjujSKmU7xJMDy99Gdeoz7bamQkrBqh4fRsgCqbfsERSZxCztyyXuDfvGVZ6wV5HtccJk",
  "key38": "56yxFsSNizv4zjAdgCFeKTQySuzwQ3Z8hfZC4JfCj7Qb1B4B7CuRgj3gM81YeLZSHqrt8QPHt1J4oj4vovXHoyzo",
  "key39": "5G2oGL5USZeRrUeNPw8LLXPgb5L6GjzznbGfoaoRQtiseSKo8xMhTvrhPHvFeMw5g1Ksge7uCkmLHgfQwKN65vGg",
  "key40": "BLeswSoe9SqWSpz8hE3pSnHHekQCVXwU6QVaRAFokXhHGLnw3DNp2rpVTdFhSpJTbm8DH2icsxpAWFd1YUsRb24",
  "key41": "59wxrh5677F41azokthQstcgwT4Wd4MwKr5LygPUZGjR2ArpvbEXgSGKemWwaJmXYrG5gZzcatLAmV2BwNssCBF4",
  "key42": "3KT3p9MZNfU5TxvLEEzf7KsjSVV7244aPyuXFHaD4agc3gSmKQLn1SAQCWisekHkdtcoDCFWZdK2wLCYPchfXaDe",
  "key43": "5trd3JuvZS1Q1R9dQiSeUxXubBfv8F3ouLbx1D4WZMkkDGnqFX9xANog3QrHxGQDU2NYqmifsYisa6b1sg2JzDi6"
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
