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
    "4pn9qrkLm85mNrhQxZ27FpfNJC85RCHhMCNtJM9Uz7FDr77hcL4Eedy9dVo11sMTCm2cLBwDQiS5a1fABPd1NsUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UXogMFPe4SnnAk4aVv3eo39fAg1FEKeJy6t4q5fS62ew5AAD4Jz53RS625JyySDBEuKN2LThuaB95DeRbvQZBZD",
  "key1": "2dFomuVsDyr5fBuCjcK3EmAw79YZrZQdzh48JU2uxgEd4z62kkt5Z9XeUUpQVgbdKu3hFmScMEq5JwTG2wbi5yJe",
  "key2": "4D8D5AhePPVuGFGSnCJEJmxoDGLhRY1hisW7T3RPSFK1eLfHG6hVYKwGgECvPQgK1kwJm3qFzKq24XV5iuphy7fZ",
  "key3": "3r9kB8eG6hCuGknzjDAxmX1Ru1VsnhM1XK5gPFkkeCABhDHaHNtCj3BMQqvHKzUsghhPETw3HpjkL64b6Dkz14n3",
  "key4": "52iUjUgsLxG7XajmdJv65XLnZgA7wrRq3PihmXvuQcXgseRHadodB4cideuHVYEzSnwt6cuQYdvU77noccBuRWty",
  "key5": "XCoSRuWfo5qSn3iSB8kUB4FvCehkSjanD85asdrnJkttUcYzmCPZcU1kwszFM6Rm7GdMmv26rX9xbHPwm8fRYyR",
  "key6": "2FcCyJ2E13r9C7HpuYmj6Wn8oC6ojznRpLob9ND2btrLmKQ6AoJ7jYRtr9LN4rovZQ5srm7zMchQneVXYz29c2uJ",
  "key7": "4U2YhBMgsrLFQaPM35D7t7ckxfvpPcZ14JWbrFc9jUkt8zXUuJDJbEtBaAPMKwmz7BSSVgiRuar2pfBcpSJ527Ae",
  "key8": "kptLpiFxL7FReBMSqutF3nkRA81qPD84TigfWKvq1gicXbgtu615CEJzNsa2GN189UbaHi8dB5Fn79wnEinVQVq",
  "key9": "GzinDxmPw6qZxKrE2eBo5fJcrSjhUBTGmg3qeWg5j4nqwRSLMy8ayjgXNqdEhd97q7XHanpnh9NwdwU9jYNmMaT",
  "key10": "2G2wi5Lp2dX3Nq3fz2S4oevtMn2o2vQipQxSQn4VZbGdVJobx1HPqDxkwJ6x1Ejyz6e6KHWcW99HeQLdZEyd1wji",
  "key11": "3FRmSRzvCMsDL3TGXNGdh9R76LuuP4osrGnt7BfGHyfyPvPoUVzsk5NPfEAWxKaLo2KsQ52KSiLTiJ33uGagiDJo",
  "key12": "4LcEr7An7vb6qgSYzuLPBgwFzRmsZDnWweVfE3uTtHgfYutSqzNRLiCPmQWp4yFVVju6GV7QAcVJcuF2VHGk8fe2",
  "key13": "2iCpLBrTJtdz8PutgYnSMdE1ncrco8CwG6P59rBfJcaQoexarniH4bABhbtmYHPeVymrSmRCTSPJaLajMS8sNAPz",
  "key14": "2bDxkzHJBJcGnhDsJZw6Nouj9i4roYPrqZjUdv4kYaSNyXhGNLDmN7u5jmKDt4wV2xoGkKS5NXmAFEzzkrw1SoGA",
  "key15": "3qtsb1T4hcJ65ZNPjdyaBNu2p4tNNhWMVWZvLfz46qbJrbvyKn37tiDM3KVHrnABMkksHW3h2eTong7bHkHu7Bgh",
  "key16": "3WZ7851h1oEdsv2EpVNhFe6Zdgn7AMG64Uhx4PjE6sxQP6J6SsCAznkndK9bGsJqzrUoPiJxWr9JYk53xZNF8itR",
  "key17": "2Aj2GC3F7Gv8UJgDCDTfbZuxjtFN1vvTMvggHhAf1phfhmXdqRKadNoVmhdXgwgMgjXpVUFHFPxK2R86k2ZenxSH",
  "key18": "9kT2QEf1YqstKbfgKvhRLSFnaziqjjmQud7ak2YevjsL1oo88cHQViWyiG4gHkd3fZsUNdLBkHfAVJxcXQ7setW",
  "key19": "de7teKgN368hvnryevpPr3bdfgWVc4pnNHumHzMT2NFyBB51hNUwcRbv92RBoUAM8aKX8xMH3xwm4Ci2nbwLVQi",
  "key20": "4JLxHDuUx7FDe1MWWxq66GANBhACVXKoE5YPiAsQi4HgFb6wFhyLnKs1qu2iWb1WRFkzxuj2y84TfwWYAKTpEDfT",
  "key21": "4ANHZRhKQWoLtkDpdnAkDL8m8R8tA1JFJHSWkJec3a1F8gk58XHQzuZTj3MSSPqTsuwqRK6YzkMczyUGShJcMbTP",
  "key22": "2QegczLqQRtxaRDvYyPGadBZtqaDPhRtfuqt5eew5xgqsdL7nXWgSNrNxZFTaC65d4imSjPg6CNAFnBbQHHxv2dT",
  "key23": "5t3vV7ZsoGSQXzFpwiVHmxnuTkHzWpXhqmPTkAgXbNYHV8UjtMLK8rujbGTWArCn2K74DnKGMaY8iVD4Doa6wqvc",
  "key24": "4719ZMn132wiMP9odH8QqUqgucgpP4S1DiujQbwmrfAzMTodhCsEnPvuDdz9f1Z4vdCuERWukL4xpsWQT29mjW5S",
  "key25": "3AdCqvqqgz28vJW5xmMrXSQGYYKkrfKvx6ucA2diuJaL2wE9LEX4aSzo2r442pVdPrt7qzBhJ5Nad71i9eP69dzH",
  "key26": "2XG59J8rgokyA9siCg1hMF9yvSaJnKKPAi6L3sMJrw5kTZ8CmKxTb1cqtgKhksBfj3YFtbim8WQnZmLr5t5U7cNH",
  "key27": "3CgFRMTNEHVRmyoq4b3njDieLKV3z7iMyf2QiZaRacqtzGxC8zG2iBF4qx2DFBJufYdSTLAQgppzqeRsHtFvDczG",
  "key28": "4fWiYHJhvtrbsyDAQn6kEF78B1czp3PzfGr7GWznXN9bhAHBQwnmZyknDMm9gLhGNyTjkP41BGkEXMNSQPPysshk",
  "key29": "2xwe8UauJWhtyuxUJ228eKnG5fsLkhTLCnTwGjk92xfDFg7gY3PWy7n1ERbkYqDcqCeFTvPhkj7WoPmCgdCqrKnu",
  "key30": "2hYBWNL7f3LxmZ7nuVxvqJE7XMQ7bMmVnPitUAWYLVjxcS3K1fme6u8AMDREnrr5d2vpo4BeegUG6zfT6E2aVwkz",
  "key31": "3K4Svu5FEyzj5RCushYLd87V7me1xFL1BjLyNRn5caGfi2Qd5QbwMczqmZLGpx8PFcUWgppoQzPZt5VcF1WMJTjW",
  "key32": "4x7cCK2DEkKUeVijT7gcynDkE164Bevwsm6B5n2GZB22Y6Qyr17tMFLLkvoeoCL57hYXmCHLjpKokRVQLdMahBn1",
  "key33": "3escjrNzDfpqN51A6Z3ERqiFTcuiJjkFc2XvJPhg1ygxeCb23tdcNsy5yedeWobSQuCaLSoAy91vUbx6cT24VYQ5",
  "key34": "5uzEx1tUACtPZn2GAJxpv92VeGh1oCnvxDYxxUPYPe8YVo9BfHXDVHPyTWBcoxLc3Up7iqMwDMbPzuiGnuQXcK8o",
  "key35": "52Kwi7mXyFHfN6UjYVaAqZ414KZWivYutn6zN1kF1Z2Yxc9J4Xas6zEEJRsNcQzbWBZYBWkc31TceW5HwLdKmbLb",
  "key36": "RY1SdwPLV1kgF74phCQdTpi3Cdt8biyjHwG7Q7afZ6uzFYhM14NouJxuCLRaSVfGMfyJHBG8PNzvQJ1wWswKUNn",
  "key37": "vFLfq3a4Y1QQqfA9fLrG4pXWhzL93FfZRx5MKBqP7YT2ioUgEyXZmsuzAqZd97YbS74KRjf97aqTPoAzo2xsgyW",
  "key38": "4i4WneRc3bBnYTP6FBupgxdQYxAocGxPsxd5fLfWwPp1enwXwryPoeS38qFEboB3nzn5rLSRcmU8s4YUa64WjNjJ",
  "key39": "5EDvFug4xfGpLHrSrR3ZUWiRKBDm5VbLnTLSCHaS5LryQtMNzdCpMPE5B8o9gji3FiZd4XytC8xDMXp5NWtkbFL1",
  "key40": "3yUh2zx66PfnEuUS1bdPtHfTowwRmAToi8U1R7Uo62nhkJLaU53WUJutQwRuS534UgvwBdBBhfbV6EuLcjY5hkNr",
  "key41": "55Cjx1zDyw3zKYsyF4CDXikPGKzNeMkeceqS2rTbzRbTvuk7hKgdMMnEi4whfifPBocJQ6TQrXN74Tq7mCvJLYaG",
  "key42": "4WPWFF7cCkDDcvMq8TEi7RM1o1o6GvF7VQX3AWeKPEfTGacWasK8VGj1QwBb3ijdiW7jC3y51NJNVNu2tWzu8Sbg",
  "key43": "EQuEencRGRbgFg72ozL2uSgpFW1WjJmXCDqCzMCCmypQXiWL2WtAUHjg2TMbsDdQngFtGaXh9mH8yumpUmezbyz"
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
