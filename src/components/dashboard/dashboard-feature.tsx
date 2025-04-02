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
    "291tmHXaUTigkLSxfaZXXYqhnp3o7dXynR8CsAL75DmTezjVQRHdEyQSRvn5CAEyyEGi7QA8Afp3Vc4rmtGFSwR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QS68S97z2v19JPgEAzTctdqoz6x6vM6tMuTB2nRgc7qUnLsTqdVVnGb3dmx3HDg1PJGuBVo5R1qZtrDJBEsKi23",
  "key1": "2nPrF7yHW2XCqiMZ3STRTWhSKbYgAbVx3gcyUeUJZrqYUDxtLi56kPz89msso6NxVM2jMaKCRoLFExYpG9JfYEXg",
  "key2": "5UTudWUrM3JvhbFFhNPM6pA6e4r5eRPuyAFyckEc7DswDVnLzMJTBqUFB65TeZpRJx9DDgnacFAEcdAsrMr6NZHV",
  "key3": "4QL5SCgu5G15KP4y8NxXUVXWELsiy2hBkeY6C3HYrit6AtZY1gVELUK3bJWEJM4P6tgXBMYDrWwe7ScEuCeoz4yq",
  "key4": "3Podz1pVFNXUnBwPus1FqpfgBM95h9UZXVWKP2mBLX1J7KVRJoUF6biXPJtY6Bd487gWu9hsg19FudouJu2ipqpw",
  "key5": "3m1MERujsScT1y2MMEgYcgMWTeGGZf2xBChkXN5GpK3iL5Lr6oGyE39NJeuYiFkNwAFCNsmGsLetPSd9YrVme7ri",
  "key6": "7hnfNXgJHeqevDRsPcgN29kYRrvQHbXYYm8FWK33iND4JyK2cU1JoH8uEkj9FimhVQXadxuwxCbtodFkrUzza3F",
  "key7": "2csiRGG8RZes5M9gzrPewZcBpTYBMNHHBCeafN8C3gtKSWN83B7qbTZt6KViyFMitK9XYNAHZ6dwNkNrDevM2cpy",
  "key8": "3yjmdaJofs6tW4nQ1MHYZYGXm6Fm7CfWTJv4sA68wDVpN3XrKagtteQA3My4pm4g7fMsFAoSz6ri932tKJrLcSQu",
  "key9": "4iWSwtngeJowiJfnFnt576y4a3Z13cMy13Zv9iNUFFNAmemu3JBc5J7iQaGsvEUKPtUz1mU7sW3KjhrZDjHEVf7y",
  "key10": "4YcDQRH6YT6XaWttfJCW76Wt64Dfz998NDoeX4eRxGBFgnR5Sxr4eLELTWki4WFFjX73Tzzomr35H5YNYNt1b11C",
  "key11": "2gX2Fii69gNZZz4uxrrZoB3JG8XgkdZBvR2DahvD2kzuGnAi1W7Jc51pNCLe6oQHjR9jBVV2LKGK7C9dq9gTyARm",
  "key12": "DF54bBGkyQL56FYv5RLosNUEFosWj6t6fQxMQDD5u7y96Ghu9QFyukPkqha1k2Hobvbz99DRmZR932c7fEt9PMY",
  "key13": "4XCXCddzYfH4tVUkC7MbPTVgZrifmVtEmNmSgAJqFyFVRSR737JnPckcvLpiQ3L8rPEQMg2T1hBYzW2phdi4En29",
  "key14": "Ngu5EixTcsNAihG7D3EEdZnYgoXK73o8aH4DoaRxvaykPhkKAKN15c3Xd4XBsJU9zVbZf1kmCB5eaoQf6MSP7Su",
  "key15": "5PdfhUasV5W3WAXZgrV2xXBhCEojFmeEgDcwWCBjsW8cq496KEHegHWB9teRPezpjaAkjpmmoyeLBEVbC5w8i8UR",
  "key16": "JrnqYv7zDKEieGwLtts5yV66jRENMCvk92cYfYd9ttnfCMpevUN3WnajaRCJuzyMk5QJzALEvkF93x4TC6bcXSn",
  "key17": "5afdHCAtWKGsKBS1qY3ngBeSJm1xZAb4B2MSZ7turAURmhgkHo72QzQoNssngPQB7UJgMisSsFE2C1v9GmN8LA8C",
  "key18": "2KFJkh78aYgz2ZaLFBkk13Wot2m4HTaTrAJx8XDpjrzZMZakn4LmuzTLihQzx9GnswCrc1AKwvTg1wEzXuX5vKRA",
  "key19": "3mKziPHS1scHrn9yHVuqWT86Rigw43FhC8yLTvxYn6PhJ22N6e4qbKoKEQGzgZvpA8AWVSU7HZvWnvpxC9dtyJUe",
  "key20": "tZRWHN8hjNkf5dYwSy6ErRfZHcSZbCmKAuX4CSk4RESrHhAZDGfv1WZvrgnrj3okcemMt9KqhaUJ6GdGo3Yrezc",
  "key21": "4SyHyTV4VMM9EQsvRJ56FuDX5B8jk2avywEhwGUAqLSm3MmCCxmptav1rKHnBWgSLbNWzBAVNrn5qcuwzrp67rMF",
  "key22": "5Czd1AwjT4e74TbjrN3TMxbdSQjEcsWtASyE1opSQ8fmTjsCNDbfJXnVf6EVwH6YxCJ1CZwWc6ebfTvHjByd3u2g",
  "key23": "4wZQ1oi26CFe1BV1KEmWuhVbKEQ9EDXUyhV8zFMVwHnFdrb1YgsDJKL3XiVWMWQGkMfyo5QJEJkppsKP7WpNCwpp",
  "key24": "5mdwnYCh2bRqAW9TvafwbE2jimGTRDCPvkEnozp1Rehxw444P4whYKKohKAeeUGavt43Zs5Rdz8UnUT1hDVrKjX7",
  "key25": "671izc5m6mvEM2stY7dqgoJhaLxpTS2gHSaYb9y3fPjFb6AFj9Vb9LiEuhzYoMmjjG3TxRiqs8V8LqdoJsrw5Mg9",
  "key26": "6bhLnqk3oJRQcxDBGKVVFMKVZUsGD9q7goTv3xPvrt66SZZXRcazKU817kKeAtkD2WVVDfCSLnUkaEtMestGJ4J",
  "key27": "2q2oqH8FVwNga9ttV3cWH9XD5ZLHiDtQ1cU5vHdkFDyv9DVJx9jxiMpHWwzLbMcr2doyPib3Z2i2KLBDonpZusiE",
  "key28": "4tA9PBKiNHWTi6P9sX9gNoDzJMYbvV4XGXJWfzP2j1xskRNnLLZ1VobSTSSt3KGRZJaECg5Vz1UYkPmESgam8SUv",
  "key29": "4qXJKseft6qhEnHNZvULMYcFPCcEJenKivCmZAULUbeuaSNY1adqLsRiCe2QxfpLC3o8nueh9aezLnTWvNeNswKM",
  "key30": "5fQ5eHR1mLgwQarhJFzwgnYZpZAcZvgJSnn7wXk3eAmt196KCn6Utqi4YFBKRDwx9Q1KEdXuZEz6HpJ8XrQu9tub",
  "key31": "4sWi9RKmwECwebXyXxSrsmjeBBgqai9eKZKEAzfTSoYsBL8QSMBuFTEqYirqgaZXVyaiot6cscRH4AhYAVgiMpSw",
  "key32": "2oNrd8Bc8Ba1DoXzuy345tcLVq5K9kysb1J1GfBjck1z8xoMyg6VLtJhHvytzwh3gDKmyYeoTePC2tY6oMBpwC4H",
  "key33": "493xXt4XKGkutAEGDE7BmAU458u6RbWjquPFnt21iPUt78bm7D5ooNj3wGPHw4Fpj7TUKQMSoRBdHe6zHs7cC1Aw",
  "key34": "5cNJNUwonmYHjooLcfn1XgVaHpnG5ttM2rqeh7HLPK4BeFcq5yewX7hJgMrUx4As9VKRtbjxLHhVwDjSxU3sqycw",
  "key35": "2wQN4HUUa76PZVS7C5xpmBeJ9pk4fiRQc6EsXsfTr5nBR7Xp2CSD7Qd5M4Msa73XbKUjfG9YWNLS3btUBzaYzgv7",
  "key36": "3k7kzooq3rkH8kxhwYdB6KmGxRfsVzVpsJihHtkWWxzUVcKAMNPjQk6mQpoCuKgWXx1WGprJXatknLseuKfmMbqc",
  "key37": "qes3WHrkP6SCmVXEgAT1bpHMb76p1ZWo4zo6z7Fntvv6E7B1gnXDKsJuyx1qcunQiCxVtGSMnVYLrL8ehiYBcd9",
  "key38": "23fkdbPYarbG6U8FABgmrZA53PAPs3ChtWHjHVG5UUrxxQxny46LzZPsQL2w85JHqNqegXfjXA2spuRooYEkTfTf",
  "key39": "5mZ7hgzPN3nf5fzm3awUpFwfpyHg25fwRNGJuixLqMo2btpQEwKaRWuDqX67zp8Lp5jNAVMHGytfJYe736PpzCuN",
  "key40": "3p2j3UCcD4xiFDgdNt17wYNc5pjvJMvStBXPDQNM5EVwuCzqQHQeYnGoJMRWbzCcHNF9EL5Q75WKT5zrigP8HUNm",
  "key41": "5vSgfbEg5DsCRMXW8QAKNgSRjGPXPLQiwvywjsmFZHw9yJ6eAdY46CVrexeB9XQU2jtSkQWendX4VGHbuP5iR6wt",
  "key42": "5aPMxmtmd1z9NJvJr77sakPY9he2qbke19zW4oFp6jbsrKyPys9NT1o3F4uKxLnQ6QuD8pc3rbvzqTpYjaeq1wF",
  "key43": "2fWJvT1fi4cbTUBvNUrYLaB9kmiSAd9PLrunVdkopT9gNPKpBfXtcgGRjb5m7F34Jv3gtbyhPdj6ihwFVg9y7T4Q",
  "key44": "4kr2m6PDdFiNvLtS3UYarcpNcbLTd4StssvKWYWckdmKwoMr4RhzmJGpar8UqA4rnJyHSZK6AgRxhvRxoqFLR6mS",
  "key45": "P183Csk5WX1hYsEGwypuVSB2aNiroSbA74Fn3UNQ5Z8sF2uF4B8EBK3QDWNSP2Lm3rPXw3HQNegHGQ7qoMFNYiS",
  "key46": "2X7kxK9zwFwD7fXqXvfixVqiHmkKDbnQHc2KFjjYpqNnZzzVvBaoXmCR4NwFNmtNaJsiMgiHKghASEWBeMzckxPz",
  "key47": "4uXUxqaw4FoBgGqsfrfkov66Vg6t9AqxTLwSSPVYQihedcT8jJwRSqkVt6QUTV8AbgToobxhRcRhLbrWtw1ntN8j"
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
