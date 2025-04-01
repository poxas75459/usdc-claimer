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
    "3UgxzF9mqK7Ex6R84aq2eNorux2YbUkUuMUkhUFRhRjNHUKNmq2ZLU8NwTahgFpyW6sm14piUNnWmq25gNPyPBQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjk66rQR74WXhBrBCdb5EzwMDvq65ZmrSZT33cowWt9su2Ja31Ct4BCLArViXH4qVh5zKeTNRwGpYS1TuXTTWVk",
  "key1": "2hEQfJVyrSNtprn9uc6eH2FUwZavjfBBZMjpUq6bcvJxcMt4dBmL5jt7VpWDT7s7rvwcTzeaaScKipAytgjcUmfu",
  "key2": "3frMaXHmLi72nRrynFoM4ZmW7CWjJQFDwMDxYQSJyft1Nf5nBBTBFnVNCdEqnUCZhdztUmjU6X3oGi4VANWYoxyV",
  "key3": "3f1kfEwmivECjVXwbzgZUz5R7Ky3ohmdfSoGvsC4ubY6Ax9UycRYaPey1x37o1yZuVSNTy5ECshtmsywBrDVTk1n",
  "key4": "3RikQCBpxu4CwNsRDzesqBLKASeQ45M46gb5SE9X1g9izFwVm1YnVV9MGe5xk5sdtSYHKThxqxxSrgYoxr1ZQRZx",
  "key5": "3ioq1QoUacxHrtnd82a5TQ4FMe9FJr5e3o2xJu2bf368obc9BRV3dDyJfswep28QdsBJNUpXqe6srUF3EHWAVCSy",
  "key6": "285265scZjU4YcwQJSZ38TemgEWr3wsHTGRQry6nw2nBAWQ3eFS9TNvqyg52w7bECza77pvbqJwMKeTXAUpNJX6C",
  "key7": "59thjaabNvXAgaXd3hFXfjYRVGQxDABW1BH5VkL7DBK85wrUq7fY2oZr7doorZAdvU6Xj9cCeE5Tek2GDPVrm51s",
  "key8": "4vWJShRZiDq3KReTm9mJn1M8RpHpMLVk7rzwLCbwEK16ADxxPJhRDtDwM3cJXnHr11yYbTHpLcqpevNsU39gvfsh",
  "key9": "5qVGBGqfb37MMv5i4gPChLtUm3qztHyQaVJXtFbcF2WkRf6xVsRUYo1UF7veACiDd5ZwLf6UVDAgtDrEgMVdzVQP",
  "key10": "3L2pNsPcZQhrGLaktK8eiqk4yWKt24xT7pqyVmZTEnWwgALd5jTkBMtyAhqKAL3AgnN2iqiHU71VfEU8hYZeZsMM",
  "key11": "3tHnAFLkTrztVtx2qaN6cSB8BvfgA2ScLxe5w6Qw2ZhNYmyMamToSBxjC3L35z6BnQo6ayoe5VZoiNKuWmWnQc1q",
  "key12": "hGbarNvBfmTvC47ezFBnEiPXkBCohQvA3JbczVigNQBonS4QPD3wjopszky8bqQkMQRpVhMrnBrTAdPSB8sY8QE",
  "key13": "4bpqaoy6KGnMUTe1n4EUai7No2idiCF9n7MnDtupJLtxnKqS8ZeK2wH5tiUE21QaMWBK7YqDK9KBDz7C1Zg1YaQV",
  "key14": "5bkTKiAy7rMhgdsTStUteSZtrtGbg9etyMkMyyBWyLwyjeHtt9z7vw2oi8hKtuWMdQDg1niN6G5pMfaPuQ4xywbh",
  "key15": "41gT1rnz7D7vTJC3t5wiEBoinTZzN2fPR9b4eiAM3rrS5HFUF5ZNV8MJq5TvLSQGdQWRYHTQ9aVsUtXDdwY6ySjZ",
  "key16": "g695Vg44NrSL3QjnCAEsB3gJE8u5uSqePYQPUP5jvwMgWrBznQVEP3Q288gegEc4iyphtjmswWDaZGuYoZSEyCm",
  "key17": "3o87HqdHXeqMSfbCmr7vQeiDa7vkqLRB3VcNfiDDZk725UMwmrPj9AgBm94xvFMUJiHD4jeyVT5w93KcTaNMcXFY",
  "key18": "5NDFVhUiaVq7LjjFEE5RA9JzkFH1DMuDf62WnobVgJQMLtD5oYCJHGj331sRFMpfya5er7voXvCgiuZqjA6X5sLw",
  "key19": "5MytBRVJddGHiyDLCXshskA9asYKptqtFAUvBCBxruNCoL4sTdwQhBRfxLyVfcoFn2KHrw5sTQXehjNofpFBN6uP",
  "key20": "3kQ8piT4du1Qvirjytg4ByMpKcxT163T2Jbh9RQwA6TXDuUrqSjbGQXmmcPK5aNMCYP1EeCKartSEwejgqV1Vmpn",
  "key21": "3Nz15HUyK8svAoNr73KEewEtg23GzBxJEdKkNQm3WJR7RMpxAhP3EVftTDKZ4vgZdSuiQN3NmMSnRyNTjKghLjSx",
  "key22": "HajMmUAgCiuRHmm1DU6VSLmiWZLvArs7gy3yNTBmBPpfL1nuQSQ7jxFWiCrrnSSUgR7UKQek5rjQ2Afg8C7AZwa",
  "key23": "WrHGNHgBGN7yHWMzo5NjuAJ9a4ugJkVz2v449CmySx334cBT41PH3KebUA4BTELLWFp8TJGqkV8Ch9FTQ5FtJkU",
  "key24": "eDoKffs6uX56k2aiaz4M3YB7unq7dPg6zrg7nnt1G2rtNXqoC9RMVpemmWuRUFp7UeoLaeppt8LvzWLAMB21A9N",
  "key25": "5QrpP3BS5hdEcvKm7RdW7LP9n3cYbccyZ21mqGBvJqnSnbfVEFgnBaR7FSqophDxZTCkEJ3FtKwFx7P5j1wVTxPh",
  "key26": "SAeYodPbxc4AQxBBt446TXvH5SbTadH9pn1EP9gsZ8FJsqShrxCaRXGQNWFEpo7dwu72XAaB8HuREjcW2pmPx5e",
  "key27": "2FdPJevdCisVAzVDQL1NYzcNgCM1EHDotNPU949RhyCDXFT7dGPUBB1wJ6SD1M6DDnQtxEkrvRQfT63NG9jUDxm2",
  "key28": "DHifW9frTW9fnb8Fw513PYfHfrGniBs9XNj8EGRUeasFLAej3Dm5xzTTejbUkX6gNyCBUDwD119bCTUoHZtaZ9G",
  "key29": "4Zd4zUhDXrZCmA2exuhqFQfk8YDjveX2WHqZ4YiyFbygyGnQYRfAbUcaH4f8WhPv3vkfgmkcJucdvKALqS9kPzEu",
  "key30": "5DQPTCywAbkmYcBPWC1uYCHP97q2BAq8vw9EkQWZwwpg6bSBAfqTogfrUk6394wShmngW6dYxmKaZapVP3nmZ121",
  "key31": "jBD4t9iEW4RsPJJqacSravhdPWrQg2fxxf9KXWzjAAhbRmhxP5NS6YrhTbfZhSnP13QquUy573otTLKrgaNCSqt",
  "key32": "3b7ZzMbQM8qDYShe4Z5kkyEDjugx6tTmFKnx2ayk6A8rz24zp2FidcCEYn2JXTu1JizUXrv7rDmwDndd1mPKBwS4",
  "key33": "5DQ78dVDvwccYBcS6EPhmoVRSJcUdDg52UD2b644DBSs2M7HV3Z5mPJnZZMXJcKZwbMNdMeKWwJ3NSf34yRcyReE",
  "key34": "2kxWwpeZ5fT1pdEJZ26g9MnmnyQfJ4rLu7NtST7fFN6mVX1WTuLcGPcHGibKAQTgw3252ZhjH4Z6XxHP13pGbMuV",
  "key35": "2yec1ymY18cik6vBcsUZWHepqitYXZMN8v3x6ZTmmBKUvPNdMrAhZtK5WRq6FPEUbn8Q9htkNBZF1LeU89ACJ6aj",
  "key36": "2r7AwJRR161rge9kVzqmNWcCgiP4DgDDnrPvygFCGawzHn4s7vXHhM65oKT5g5ELrkJRfMDePCoxpN6x4r77AsKV",
  "key37": "3FH4nnzpevtiP9GaDoEi2HbGsEcmP9EhiuHhynzzj57t36QmCycRWT3pbwmn5N836TDNgRCpbhNV1FfFZAQVP8s8"
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
