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
    "3SxyfRhrPTpY6yi27HE1eMEkG4epLVkwPqMqC9yz1uGu47DRF7MiSD1Uyn56LrUcM1co6FiZ2hN1kFgTEncBUEcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNRYdpGQeE5YvpLSgAPvCgwMM7sZJpndBgSKxJ9j8mAfTqVbnKfpZRqn9SAwTdSKq9ace4eifeHvBf7HPxLRQX3",
  "key1": "2wKa3Xr9Ugxdc1nHHwnuC2L5NmrSV7mMTrfL92qDBWWiccXcSWYWfiNZkggVHoyYhx45SBHnkPLXgGVHzvKu8uDw",
  "key2": "3ToF186buBPcvmtJg3EfW9HFBUCY1XExAf9cXQy5uKMi2PhVgQoEGby6BHY2Y5GYeqy7joyjB51Bv3fLAMumCGpD",
  "key3": "2rUcC7G3gxXUdK82NrUs9iJMWgmQk2nhNMteodskS8DU25FZuJwiX8f5qYSBgPdp8G3DKcZqEdjtnyS8RwB2996x",
  "key4": "WSQZyPq12NyEmE3nT4sHo57AD8doLKFQt1tTxKGCpD8TvF9MajSqeGaxAdmAQPsCaQQwvxpJLDANG7djt1Y94pZ",
  "key5": "6or7yguTszRmRUSXov2vT94pxLBfrHDrGzqnLGzCBBiHdWFcHF131azNE24jyJu3LTPD7ziVNC4rvm95CxdSJSs",
  "key6": "VaD34S9C5VgmnEUMhwqSGQU4uzGvwqzHs1Ck1mhJPAdvd26bxXFFa99qGVNjghGxqJxRUcBrk2jYR1Y1jzcXrS2",
  "key7": "5ZM5MexjVNVZCFkkotuegA2TmKMGHvBG9gkWnKTykZqHKqntwhmtuxQ2igD7C2GgeCBPYEZFMBqYfxDQJnW36UUQ",
  "key8": "444GKeCcbQL7CjDUpPPWi1D86LyJkjeLpXgcw3mbxEZp56AX9yixdqea7x5KeuYTounqieDME5j1Dd8wkLBqZg33",
  "key9": "5Gisxqom1L7VKS9c9jnqLHLCFoU18hdPTgepa8BXdLw291nhJmiE9fa9zphD2c3VJzhzZWqEkEq5mYYetHjrsJpG",
  "key10": "5jczGmNiRL8ZAe7UCp3ECaTTXespXnQT9A1S8LT2dyXjmiFETc63fSt61YnrHqPpFCxLTPgPGgeoMBYXn3uqaqhK",
  "key11": "5QyhBjedPaHgsq5gM8rzLq78seWVKmUBNEcFBdbZa6PMTJpGyidfdRkekW3AdWoinUEDXjTuDm5Ttq5TU8zNmueQ",
  "key12": "59T2rgxZzRkCqeNzZ83LDC8PoY9KYQ2ezac8KusyE4Eo2KYWCrECkxjZty2UvatPJPJN7R2nbsctDbisvU6JYegB",
  "key13": "3xsw5MhNaDvZ8sDAsKMWQVhYxAsVKES9t5jUna47xcVyyx4Vii8SRPQEQhJ7ALicXtqJbyLZ7gPRcqVUY4CQ688f",
  "key14": "3gbiJD5gV9KrExHriVCQbdz3KmWkq2Vv7eKFKkzK9ni1y3894yfTXcnhoWBkM3TdEWPMHWAhiCc7N1UFWghZqgW3",
  "key15": "35898fFTeeg7KJCHQ8rUkfDEnGWry9HonoUZDosFUxmdKwx6pkY7mQ37ENxPeJb5d9QkbaMSz9b64TEoNqmeSdN9",
  "key16": "3pNkd5p5SAkTW8tcfxueNztzA83aETqbtiPR8rFJFFFNuTKsh2rLXajCRoSkXCXPe3tpCuakggKZrL1TiPmHTGRb",
  "key17": "4f99uhLb6kXseNXD4K5Gra7SYVNBQxhSiWPAR2t65rHqXhqsUwcjp52pXjkjxHccHg145cgAfgEQJAw8bZ7NDzjL",
  "key18": "2QRxTpJHw43JvBtfPxAEqxDNfgkjwdMaNmgn3Hsprny1CfQnCmCJEoTg9VSK2zTiDzWPHQRnvLFqctPys9JBrE2w",
  "key19": "3krg7K6SaJ2PQdTzSh8FaBxddBxTGiCdEvdaZ4W9v1vBJmZpAZ3MS9bLsjSjGNune65z3He1tMRybhKrWkw2uTXy",
  "key20": "32L7xqGZJXLHKuU2qM71eVQYBQLeu1KsCEfwncmAv3Xzo3H2j1bzcJ5LhQPcNqwcxNaoMpnNtdcRN1uodFtW4pzm",
  "key21": "THHiVmwfWjqRvek5oBMWHXpTz1Gg9z3yiU4nAkDa1cWjWwjArs2kpd25sUZjbjie2EFrG1W4HQ7Yn8CBhTMPN9u",
  "key22": "5R3eGN3fMUGrcWc8tpEfgSjYxdK9iQHhVFpNGnw7YPtfQP7vBEDUymKNxsNJ7s4MJgrUASpAXfFdYoY5VTP6mwfn",
  "key23": "4VwuvtitM9MX6Dc24Ta2W2VDjdUHbRBZxWNamSmbBFkkUgjWec9R9LfhFExKpFKGFGAhoXnE1VMasCQ5yStzCHRx",
  "key24": "Ebv8sfuGELijac15AG6pxj1ZkowqWxGTM83LrKi18LAubfPdkJaskYR65GCjsTAdx9BeTVWqSJ7YAT3REJVfCxD",
  "key25": "2cCd12ZhgjtKSiBxZhkrRmbPmktabxidzCqMfYRLiGioe3EG7hHhb1xvtMZhXiutT3DmKFPk9m9fQtbLNvi4DXpv",
  "key26": "5dAUMNuNyLjVmwekuqsk9McfTjJAZNUhs2ArfLBUbcd3XPC97oo9CBgRKk15kFZzrKZmb9aUwDiUDCH4q2oMWwDD",
  "key27": "s76w1VpQY4d5NvRB9a3bs3Y4mMb2QMafkA5bgsZ1yAPw9vobFKayHBebcd9qQe9GbnCJdnSLcmPsh2EGEtMd185",
  "key28": "cSb1LneY35xkwsW6YygXJmzBpRYS71svMi7yPQcaSCgga4LKecu1BLLSmkxWm9YvvMsb1CmVjeWgSUiRJnHny9v",
  "key29": "5z99tmd7febBhhgnBDxChsZH2jh4Lr6y3pS8PuUNEzxDTz5EErFQc2k2P9jCUzYNrrThG2fifick7EKY6rYi6pmY",
  "key30": "4FXGRmbXHr7ycNWG5x1bcLJM43R5VtdB2RLL2EDFkEUhQAYUzHPdfXGv9kay9wWCfNEW5qiuu6PJ3jgGe6AY8Qj",
  "key31": "AubHcbSTSjdGYq3vdzK324V2nBV5PfYet9pS2nsU2QueKoEfUjjJne6gEPqBJizecHXfzFK1RLXaQpF72R2cqH2",
  "key32": "5pCZNrBvd7PNwcfvBUUkKgG1ybiq9wiRz5AEgX17vGWkoLVmoVViKSh467URi9mcwJrazqKQuKcwfgsseTmQ8ka",
  "key33": "zanzW2UyoLHuk8iAqKGiet7VJF2TY6UdW4WQFnJ5DKNyYH8Q89mUotx3GFxjNLXD5rt4e6DhPAUeyomMeiEEPgn",
  "key34": "GpN1NwWN7by78onMxUGWgM3jerqCVzgKeRyRXKLgDbSqcDE4Yz3u8oPf2XCuQwMCwfq2LZcZpEeRtJAAtXjUirU",
  "key35": "khxz8rmyu6yH6ZwsvuoqEuJFWvprHDmPBud9mMZ5NXyJTRvJQHQFPUNZgUtVKoBmQJtij7GwpCCVsQ78AFeJ3FL",
  "key36": "3jfuBLMsZ7kUHLTJZMCq5ZSdSaykz94CFmeYtibBB6Fpbd7TvrD6fnYMAALS3mS9uo3YDqgBJcne6LU2SFGbX2Mj",
  "key37": "22AeFJyRa4rKPPFbcpVdHYUfTmM7bnht6d36pP54G1hQv1CtsJ4BgBoDkSKFD8RAm1zb4sbYgJSVdAiTgoNjcKjN",
  "key38": "5UP9pA8B2CCicbBac6y8uFWobZGoHd6KvdbCMCKL8kKBeKtPehTrR9KpNTQWgcqFhcAnFoN9axE6KcKZCwuMbnwd",
  "key39": "3KdtHbrdbYp1ej3NDyESRJmm29j6cjLYdToCpAkQNtYMeePp2D899H4zUoSwJuY3kN7Wrg5XPHmB5GJkSrk1d8A3",
  "key40": "46MQpaxySf1wsGbGS6BGVCkUVEadzmc3bo9LtagLU59xbiDgbtSdXmhgZtUSmyTGKWsHtbTBwfVXKXVbL9HwwoGr",
  "key41": "RZJcrQHLsA3BmqfBjZmmopqjtdyUZrPMiXSPmZLBQ2W8Mtc6N1X9fuXYHHnK3bpN2aRENJKVMCyZjPnkXs7K1vJ",
  "key42": "5nvWhuc2wdc5dosgRx2zgmLsoXSNSUi9SvaCwSNjgHVQRTf5WKiKkk8mJ22evpeaw7qRxihJbKDTheiaBbfRB9ph",
  "key43": "32Jsbs4Guy3oWbYez581HuoeNczauybvEs3JKU9z4AE379Gz4HcrBEzHFeP7mFYaqACJnNjRmZJ89WwigTGEjXXy",
  "key44": "5nnVEJqj1B4tx5MxD1xgJnQNpkGrg3dbJH4ak4DoSUpasVaFtmDWzfnJFyXEDHEjVHyiyupURBLwut1omC76bMr9",
  "key45": "4XNjsf5bDtHij9XBxbNiBph2W8b7idny3D5k5b3PH4mhKShvZTNqH3wmSrNpg4nPB74mcFSkgyabHVpjxRqvDEc2",
  "key46": "qvFBfRvtfUdc1YswMYJoDJRsqqV5uNTVzJUcDJJSyfutSxBYEnZHfs63dE3F5HCgFeBnxDmeThgqDhrSrzqTtsE",
  "key47": "3F9dJfsAq9KqoG2jVPssQLqr9jmeZAWTpanZrTpEHZa6L5URaq5EBwA6X6EN9bfeGocxeFWY57JUmAg2ZCRcQXbc",
  "key48": "2CeUVxAN7Mm1jWDeUzTCAqsUX5Lt1t9tsfs6i2MJBoigyATutC9ifZvGqo3g7bgdtEMewNbS7hcYaU8pAf65HcWC"
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
