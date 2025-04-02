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
    "2cMwPyjKKur5at7pnL14zYNHV1yz2mjVKjA9kNxjxPHgrzwL6yYNYfQY3GTKFiiz7U2JejYXVkfF9oFzxMQd67Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHuNRpSKqyRemeyHkqwkuWn3cuXTy9AZ4WnkyponpEgYzkR1iBse2aK2A4FdHZwpcRAPaMBCV3JaYEedN3MgK5M",
  "key1": "5jFTK9vrujZxDUx1Xi3u2P4DNGN3si95tsCrxPXEtBsfcGShzYS4MigeC8tES9MPdcRswyBnsGLoy3JsvG1AFqrk",
  "key2": "58nKcrjy7iAHPJ1LAC39g7xDw19WQsW5oBhwukzTjXe1q21r9ZXmoYQggHo7g92Ay5a7dtDVLnEYRuPNSAikAoif",
  "key3": "YjMcPeXfbvcyYyCamrdshg75Du2vyZ4RsgSafKc3thdLnmQnEQJuRUmsFQUXVYBtw8YzxRSiGSvwiJmt3PRpcYa",
  "key4": "qh1dQNjiXrdNJxrwmQ94P3kAPTBMDeAk7FjPHkcDkmfuSxYUZU7fNn7Zzw6zi61LCzAxHiMKr95SWqXiEkTGP6i",
  "key5": "5nY559uEfKtJWxt7kNWGHnWPFs53F83vhipw11xYqx6ELpVvvMgrRTQh4Cnb2om6Mi73RJZy9u7kiCFHSy7dXG1b",
  "key6": "pa6s6oFTjEriJpZnwde4BYNTGer6PcjbqqvM8Av8xYsFQwcG7S7jtMFCWcwxiXyXxTUhYqJSsi4D6NWnr6Lt8vJ",
  "key7": "o8LWjvyUxVTiZ9gvWSSvYxpKSvZbq2ybfv7Kya7saQuNP7Nq9565DNBBFc1AxRQ9gsnMsVz2PPVm7qNNLtF5ovh",
  "key8": "415mxgLLYjNXfreVGbhsazvsb63qV2YKeT3mNTHwPcb3KhDfYXv4vFZSqztGdB2qSn9vxyW3LhyXNByddMEGr97r",
  "key9": "XoBGEDNgQNgyRY9prXP4NRmUzFttvqjd6JkgFUEStgQcdSexxhDVBXNF6G9fVoC5iHCwBGxQfda645mYBZdd5Yp",
  "key10": "2o7SDjJkMmc5UfmfgGLrJ5tMRUGKvHJasBbsqXSavGVqiK8LnPN866EUW3MbfL6nvvWUBKnc8ZcTyEjNS5RgTMz8",
  "key11": "2bSNakZLMq4ojxAGZtAD7qYmTNSnJYpzNJ9MCMY3eYca4U1j27bxnuGDTARPpKz3d3LL2ekWWsBUsHTvYPSAsJr4",
  "key12": "kHrWL91Z5LSdbWfkbDvUzj8Cpy5G7hWwB87gyyDVcGFL7YpwtpVAVxrXwZvbnVgVs5AoQZNC7AHmDzUaGCAQZt7",
  "key13": "5M2ZghKH8QUUc6aKkDjk2iY8PzjKLhMnycPzj6g9jB9BPWvpCPexPG3u5gUhvHWJVjhzg5CbhHfxVVpHVGpUYxD3",
  "key14": "27W5Nfn46QfM2qLpA4WV8f5yurLQTohxg51AzuAdUxF1VPSJMmjixk87YFYuTfbC9T7SipoHrLD7DJ7uzcL9DvTr",
  "key15": "g9VMPsF3x6HWuc59PTpc1AfU8BsycqUsnZSv34bXAaDDbnVhE679Xb7S3ftotk7XUbefzbsz6X9dKaED96kUeDg",
  "key16": "2QNkuePSc9LMRZvamhS1wEbTNXzjdS93MpBeMTdkR72gyGAYpZQy1kUwu2ZDGDKuqFD5uE6vZLeyMEn2BBnPafKm",
  "key17": "2QkRXQ4kFjUata2J3RaX4YRR8t8q4CQAiMqvXs3G1uWVBg5RPTEubPtP35R8ug7VHY6Ww4Ev26PE6Gy8aCvr57yY",
  "key18": "P6PiBnUMyspsG2iJYJXj5piSXthhBSAw4KPDtdj1tdYwGSNTRzMC6pS5nTWoa2be88afca91DeBycgedhQ6EcLV",
  "key19": "62Rb8oEziyHgUgmMY4Ea4cpimYsAPrnv6bZ8reHVxLZ2LkhuPesyn9SsJBAwk2EwfNqCbs8XzRiSg7ZQwjTzZqkC",
  "key20": "4AWTg3qrZEcFJcjg9gDvgBwzSEUF9Ta1NYGp1BW4gadVduVYzbpB7HtGH7pfgeiurWShatJmpJcH6rNiy5GVyPzu",
  "key21": "EBxU7vhABQjDorPM4rKhLBaZwQP7ijyn6WB9Bq8oheMBKehRwwyLn8o4RtCTR5pGJypHXCEAmsHsseo8kGzHGFq",
  "key22": "5wZJ9h2JQ4S2ZgC3BSbXqVdhCxgSszsbZ7JME3ShENE5pWhxGeLxeNyUUD3AriiTfvBQ8ZW6DgrDLQ5iehMHtHxF",
  "key23": "4sPpw3mrQXwvdCQFmiRtK4iVan3ArJWws5ZNHzhzmTEeKM2iqeq3iBwF6e8xDnLdcgRj82ZJbboiyf2zR3JRwUHU",
  "key24": "4Vbfqvzgt5b6Gj39YdeCjQ6iaejaPfrdr2RqCZ4n5A5RmB9uciMNT5Z1KByWERb8ReJRrknwZV8GTqixnSYoUjRo",
  "key25": "3VmKf3doTYa7jqymu1qnwp62jQW949tdPqkh4N6whTTBMTj3SwTnbYwxjPdUyb9pYJC73DPXcMSbxSHsWusPvXqV",
  "key26": "45hdmHr8xGZKhmt8WawRCyDBnf6Q8XbTA89jt73D73GBCUBsiPrXak7cmqffELuJ98TfNReHdmxz3B6CrLaAinH",
  "key27": "2i2aQd6gvKTMG77jNE1wPb2xWYt3wvQqXJEymXYZnPhRSJARQgP1FztiA4wtm38iZ3rgPAi1tfvdErEtqEocKJsD",
  "key28": "Pus71291VoVNuXacQ2t4pWN78h69ftJ4G1TdXgcut9WVuCQi1N63jBcQZa62hVSoyARQM1U8ih9gPJ8AdYXogbN",
  "key29": "4NYKp1pS7QhW9jjNgqDYZJGchYRhPheayDXXTGpiBLrs4e2fgnH1mvpCGp9nRKCVuRjPgz13p9xrzCQauNLeF1Xi",
  "key30": "646mgz4iVb6CP6QTK8qH8t1YzwnS9xuiaM94EstZqo6Awd3hfKdEHNtkjdBjwobt5ayn1Hs46vWDfofDW1ZTf8ZA",
  "key31": "37bFokwJiVp7cbQhc7wSmkjfS3tk1ZFFJLBMEvK4XMiBnMb9ehDnPLw5Q2mBT6Jfn652ozfPC5UyThbNQnaWjwyy",
  "key32": "4MfuChNssFEQfELHuq2JznMt8sQjCU5hxXjmW4pMfzkRWKh7BnK92RkS4PikTuJ56nnL1ZLbLbbVku3pLf6na5gd",
  "key33": "22fruBrVoRkduZe8nDFV5jra8rsg8771CsnHsCfkXLuch21sEEGoYCkxcmTdJXKnYP6DL1BMisiuGKfbbFjwVzjt",
  "key34": "2LQR2aiBP5o2iq8ccQRdyopJHqqBvxsZMWfwHKkPTDXcv1VeJ64ahsRaAZC5QPAsVVTzWpKYFBNTi1uvoNYy5NBZ",
  "key35": "3v1usDTo8kFa5Gk4inLNRstuRs1KGR9wDLjrYWysUr7fo2EYi1FjdkizYDExEL9Aw8rLyTn9jx1jxfbMNVXCnauJ"
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
