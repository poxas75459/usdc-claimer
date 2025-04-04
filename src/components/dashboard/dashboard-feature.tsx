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
    "jXKaf3uTPwXWHVNrtCTRZ5436KJdUZzTAKsHBBcHdvy7bFWgoBCqju9B7Mk7i7aPESa4DFFZKtxcwmf86wWG4on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gc4Kta53vmnEDLmnyFPKjd8vYovHvteiSTEBZoH2HQRkAkeDQNSBzcXNaaWLaSyhbgQmHATnaTwF2RSXxdeeVpf",
  "key1": "S7WjeFGHFYzcjPotUwA7sAw8hT51PprJng69e3WHuNEyVdcs1iSiFAASJsMpSn2EiFMebH1cK4EzC47pFPs97My",
  "key2": "3APsUEnsYCgJMdxN4FTj4FcTW741eorNAodHiUepcrFA4JAgcCq8kBhd8UfBeNoq5mZRkQVCzc3fHvzMyzwswWQM",
  "key3": "4JKoZuJMj6eUdFcGNTriuwxGuLvbuCRbt5XxbxmqiERn9yQ2pW7BTUSG6ZiRdZ1QHduK9xWqaE693dkU2drS6YTM",
  "key4": "3WqTnbFsGqNtZWMS41ZbwxnrqBvpg5xmTNHJwbDdmLYa9pKtLytKwx6NMB1XQsV2d5ouZZJgkC9mAW8SKiUp9kGo",
  "key5": "2WiU7ruWo7ErBGJf8zEdMUniy6W8biYiviMAKntEj9YDTVsQkSXagzupZHarFZDkJKeW5y3NJxEFNrbGfRFphsRu",
  "key6": "2pdWmWKHMi9KTQUFRo9xPUwTs1sy1gwy2xbAujEHPHbGps4aD9WsgEjTAzNnSTKEcqne5tVwFhAG2osWkUWby8Ta",
  "key7": "5oRG4E2gEqftjN1RSAUcLyoRXNvqWvk5uF7VQQUrhyFigvgHFiWGgKdezhKehPfUy8ZrR4Zxbt8h35oH3ZWzFeDp",
  "key8": "5TZHM6Jb9fS7oeEjKJUNw8uDL9UnLtpm1deMMnBDHTKtE6bFX5kZTnch8Yuaj16hUKmyBkHwY85YJ4WCSWuwH9ED",
  "key9": "9Si2pxeDjy1AaaXQwjc69sUnTKpEkMQf8eQ65Ew5HN2ejYnwXrvhytN4npmRUP3HgFpYv3VjH1uibgNRna6EKfq",
  "key10": "2cbPrAeCPq1zDSPwAeum57sTRXdCKFLBoTPmtMd7BZzxtAdP2gurFNW6i76ZY43DxHcefBcPgvqw3EtMYoHo4vnw",
  "key11": "3CqGrpVWx4hVyfNvgYC8DTVo4tyeinEZw59WGtTdijHErAgHBSzPqwa5AWXJoVnVdgEyDUio7umTiGmj3swLWWKG",
  "key12": "2uM4RiWPqbVEti4PaJ4tLa53kXwpmPzkXKoLhJuwLLuja2zNN4dFC5es3CF6kUEfCfpZA8PdKPUztdpEgwi6rDB6",
  "key13": "5xUVanVMZZu7DpRMJGpV5vYRG1TRvecKwu7iNo1qkXGZzavzLSw24ugMKbyXWsiAPRPFRLUKhfxVjk5ZznPY1ACR",
  "key14": "k1QkEGHUhutQGpL7nq1FQx3rsahGKNxvrTyNZKG3HPZi9AiBkT56q9en8VDBVCRfDnCdeiSCwWHkrv3RXAzcu1V",
  "key15": "65JFSRAVAr46cbwQo5RmWJMYHatGJFvVeBoGEjscK3yBPpSwapSoASScUNVomtMTgK596y8VMCi8P2SoJneidv1S",
  "key16": "4wzLttR47cRmY1isgRW1Z8tmSEqXQBfYs34zz9jkRbYmuvV2E8xWRDwJMvEvfNw74yLLS7rggtZhYn7pE9St9vAQ",
  "key17": "3EM24CW3h4H16J7Admk9yXxV9efH1pCFNxMNUnQE4zenkV2UyrmyvUKMYuSTeJZGGhACCy76WuQFC8MZ3yHi4ZFH",
  "key18": "u9hqG7fZ8Z2bUG3kaGcDx7rvX9eAxNBPJALQjJBVEXf28orvcPEkKWMsZqfdsxfEUD53P7cwNxDYBjMqd6cpYpL",
  "key19": "23r26cY7ZwBZoha1WN8UizLUFHyHhnzxcPi3kD3Uvin4hv9PRapWguM3BLHWTp13kJnRL4vr9WWh9Ftmo5CheuuX",
  "key20": "646s2YDXn325T9kACzsrmDSoX7Bf78RKESxE9oNmeH1g4Yi6T7xMTkFK5QPYpTpqqWvLyct2zJFKuYu5sXbWFDX8",
  "key21": "4Ukh72DTM79kfvrKcDhTGdEMhKribk8ZiiY5RPpdH17HVzZbFv5Y2zb6LW8trF9FhqdQ2Dvo7iz6gUFHyDUkdW36",
  "key22": "4dnMgA7e5Y8rq2zCHVuzEYQAr26fAkF2KiSckYx274pT5np3FMaZ5zRCzqYJSBaH6FQApVUKGu1THXngqeSGQWDN",
  "key23": "4NoPWfwvDb3df2NrusmzSRsqikr2VEw8aNR41Ed3CABgZGnFa1wdW45pjuo8GsdaJa3gUi6pd3L7rrdyLMMt7qmw",
  "key24": "4w6zHEZWxhXq4TMSYeGuHCzFEky4YPAmd9dg1oQpfjto3sTqFFrFbdt8vgt12BAF1AnBkdZQcKDe7okw1jWdgW7j",
  "key25": "5wXfrFs5udzEbvxFyJTCDvSwf8Jbn9QavtefJpL7aoJAJ9sLx414iaPP2XgFashdgfqJ6wDUH5DhWze9S2aX443z"
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
