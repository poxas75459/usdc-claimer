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
    "4yoFKMXGffQrDaprb69Ahgr1QwuiGuJ6t14SjwwqMZa8fSE8Q8Fb1U2ZswSJjbaP2KCv9VZtiocnLtRiRBsUZpyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p1dVUbF3U6tRFGv6FWb1B98dwx7kgZAD13Y9TxGiyET3xL7qA3LdK7tAE7FzgqFG5zFfi2WVmByByXBAhisM97w",
  "key1": "3AC4A6F1zSfsFJCXpogAFf66J9ACWr4HKxkTBz9HTCAr8sMNhdeHwVzCo5amP3ByojA8w1dZf9X8G51xiopvPSGA",
  "key2": "3frD93XYY6gQ32r8DCt4y9NQDkwBzZrbNhQf81pWQLPcUYsvZ2k9pGJS2VzMWvs6eUPAJNZEtcpJmoCBtZgxdjk2",
  "key3": "4ycBnFFHZZ6mCwktb1o74fyLYdguUCMg58HVLDtS25naJ9RryFqVB6vtoY8CQSVSGavRXmwn9QeVr3hxMPmvCLzG",
  "key4": "3m9mg1uAwppLywb7TufpwUMjarvA2PszVkaC2K7Y6xuPHhRhxVCAAqNRnaGECQAcKBpkBTAkmzmg2oDY7BMzv8AW",
  "key5": "3TNx5orNjmFgSNPn9YjiuH6nn3DF1NuZtpvrUrdqC2fWT74p9s5mG1Se88aH8WiYB6QbRs37iJbTmkrtQ7YpW3jq",
  "key6": "66gbixSdr9ALk1pLBXXVW1bixvp46A6hteZFXaPqTGfCXaeJ7C2XKKqtmNXXHmuc4yqeSrhphP59iDKHb4KWVnku",
  "key7": "vWaxfZQXKwXFsPFn6Nb7UyMviUuF3jC9BxAuGFHBt8jdBLDtpHDhUpVwAgERzLSjhgGsmAaNwCq1SffRuYvbmnN",
  "key8": "sDu8BMfVNADGHtAEteNtr2CmrJmMN5yPLaWVAGVQS4Xj5QtEu1163ckJnmpZhv827YEeBmqtfixgGy4vCRT7es9",
  "key9": "5ds945au4cxTfHFRvro8ry6UCH7e6s2QuWtuyB7sndQWU6QZkEFtvB3jn7UbRkU8TFobhtx41BSvbTHoYo7H2ZjF",
  "key10": "5XtEH5CGffmXCBMqrPCV2MXpy6H1ko7p5Ndv2mknmxnYg9ZgZqfJhTjzszBwRMmWABgJseCNeMzQ4vU9LHwQRiAf",
  "key11": "2tVp8Bd5ETw6v7dwqrZD7TuR83utYFess2mpSFsY37gfwTHE5bjjR2Pw8mb4xGM1RCoV2P4VCk26zWfxENBLqHx5",
  "key12": "4AFVvifzcGFjGKY8Jz3SmHBgBHdUbA4DHG9cxnsPhCZ1B7PbX5aChYfghSLyMMWtxHfs8S3h37jWwNvAkBpBZdVM",
  "key13": "5i8uakmfYFbapQZ1JV9r6djrAquBLTCXmQzbdhQ4iSWiwq8kf4rkf4Hnz3Y2VWdpuSRPinpS9JG9b4VQo2322W28",
  "key14": "5QagNMexjyjEcmqRo5DaqjqJx6CS4cm7UT8obSyBurSTAsW1KNqsJKRTGWQJ5TEWc61DXsmt9LpgFy1uaSBmzHmA",
  "key15": "NP5EfCLwuBjbNeoGfDHmAXLvReZB3GjhQacBBgv6x564AxqCKMN1FaXDN38FowfS7fCmb4XrpqWoyHRY9s4fS6z",
  "key16": "2kEUVkKVpdpidRXWuxKaizPKFixiJmyzyEywAqE5rWVj91ZraDLAsQF8wecJA1LxyvVFkQH5QuqjU8GKFchyH1Ak",
  "key17": "5XqHpUVe4kbyUqYrL969yFYQxgKRPBou5crTpH881XNYuX2Unk6Yw7TWee2bRoLsacBSPs1KbRxivYgFV7hjjmtC",
  "key18": "2PEwo4TAoDwuXEhwkdz5p652KzjSPWASRZZ6vmhUrPw6bmWmAoRcU1iWopxMKXsXi4piNzdwZFKExL93kj5w6CXf",
  "key19": "2NXtyN6U5FaEtxarn4o4brn5JA9kZUDQyR8NL7BrGvsdR4eDzSvaGafexxEo6KVXUwEtVsyvWCAzu9Xhrg22nqdC",
  "key20": "3dDbsnLJXLbJoyBfS33VNQdDjzngo7ri5ZyGNuacayskHmSVURksmMdHwuHp6mSFFR8Svg5i25B2MLxQseUMEdEo",
  "key21": "5qWkuA1nXgFTvu7bdJ5FGGHWysCax83BuyappArSa3k3xYB7sYP1LjhrKFHfewAtNmHhBPAX2RMVdGSVG7mQueRm",
  "key22": "3Cqm9cGxdENpfDpv3Cncasr4N1pv2bqcNnfyL86xoX8oaqSC9e8iSY4Qxo6PuSyZukNGvyj2AKjMjGFRKno38WNf",
  "key23": "5eLsWhHC39GxHa9RxBPSXSod9uVsvXa7Ym7foWKk8xzDRmjPvrYgxRTqWQqWPmMyv8FFgYFiqGoNGLnz7ofWYJ1g",
  "key24": "3Vjv82Ddvg2XEknRqmUcLR1Qe6cMpKRRdnzip1KyXaZiLB7QCXdAnyPqBeh1WGR7vUp2C76CYz9Xneh4vcCheZYB",
  "key25": "4KXRhiAyHy72fPrtoPPcmpFWDB7KTP3TVCiiMDJLkrnzYG1QsLjMhurgY4mnGkVQBVgD3XLKhZ1HPJ7ANFizDKsE",
  "key26": "2BNDk11iYU9FhXqCGdD3EK2wMq5YDfQLQDRPoroxtG6qGrHwTiQxMErCBbEEA2y3E9itoR9Hbxou4qmF38j77YLE",
  "key27": "3HmhbC5QQE9GSGgCZdsiUp6FFNhefaMPs27XHNUWLp68Y4n6u13pbhNmjP8SKkQqiPkqPFhS5T9Zaz3E8XZFihpP",
  "key28": "5Q8C194E9qQ1mATJijJrXaJ5RAGdPoJB95N6to8YmVUjZvYNMa7v8zp9zTGNL5GRfAJf2diWfigLnUKXcFsWmwPS",
  "key29": "5iefZR9HynPmwPb6Sa3rWQ3BxDLFHePvDbYUQHqUaLvj3QvbrqzqhLnjvBKqTG2py6dwcL3PDDYmSUDngWvgELpQ",
  "key30": "3GPTUzcG7ucHysFebSmG6EeqMUFj2B1AviGeSeE1neWFywvXnkZTwRUxy8xpJFwrxvumqu1J8usKcT2oCDh9kXXC",
  "key31": "32aztHB75MkydeTzGyA8jy53c4xdnaYx7hEJfXG9utr7nanD7779xapKRQMPFnKC4j7FZzoabD4Z8Ttkf5osL5x3",
  "key32": "PrPtNrQP7NtYXsEB9DuzMwp7Ep8yGQVuwWnTAb6K5V7nmLgWgxgiyKfrDCmcQPXzVZGWewbZEyyRRqHADcnZMcs",
  "key33": "4yHRXT5gtCDtjwcBPwyNs1JYs9izirn8UKYgnxgtcRPz5tk6v8EUk9crPgr9vYnF4t9bbPziQDu9UZndZy4vBchR",
  "key34": "3PQxk9ftnh9CzdA5X7r63ra3hqsfEWbMAfD1KW22A27mYy9ZPoRivoacJF9Kq4evQv6FFCBtMEM84eYmqc8dWZgx",
  "key35": "tFCakSgQuMe81XE1jKFRjEqwnSGKu6hgAoyPQTyfyGYoe7AcMxQE6PJhiBuybNAcHhhCi8oRqnuK29E2DkwZTsR",
  "key36": "PB6wUt3HU46nHZobyFnExebfERvXTRzfgkhjN8YSda751DdN7pmGTVSN1yxuFf4AqzDfnQxL9B67tKx7RYeoV2o",
  "key37": "2oxGktqYfvdDnJ3NC8MAo1m8ZMJj3t5HayrpFpytcg46cGS5qBNwhoWQKcWAKFxZm2vcgM8YMgitDmkTyVLfn1C9",
  "key38": "498cLm2f3BhrdQWdJBLnz3wrBxCAk1zWuFsx1oi7kU2wYbTHApR8wpWxiTNPttneKwP3w3KR7LbSy4YqYkgrzwZQ",
  "key39": "2BySrVtwW94QZFaJU5X8iM5EesURHgY6faUyAitN7TpSRxKvXEzh14k3PPWXp7C3pSH6trXFPDC392YZz9GRsKN2",
  "key40": "3iNjjNaRhRk91PRCWnDiDHhpVqy5T4egkpFgnaULQ68t9GhE2yDEBTqx6SQpVWdZmosF7QXp9DwCGsaKGqu4j57w",
  "key41": "4Kd3smbbazxMFpkrpeQ2SaSjrZEcnRejFSpbQJDkz8ACqM9dNnUmrAeDZqaAiStPUrPMesBkj1GMdY96nkFa9HNB",
  "key42": "3d3UZ5UB5SgjaUtzMrqAeqFA8wKLC8VGai9QVChQ6fgMyEfgV6xueL6uPAFj1JXY4KduK2Vb2jZSRf9S1rkDgSTF",
  "key43": "4kc3gE5LBfcQ4voMGht6BeBYm5Sk9w9Hk5sGXNFJfSnp4GWkQrcmqji5DmGFrgV8B5G8QNnKr2VVTRASPENyj9cM"
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
