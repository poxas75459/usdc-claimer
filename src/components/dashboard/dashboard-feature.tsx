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
    "DYa49G7e3sHbLHNzHLjFTwKsvTtEdQosK67mbsufK7yDkuV1zevZYjEb1UFx3XEKkfVtMnfTYyz18tfYaDz5663"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i8S7Vcfjn4fXvzrgZN7RqYYUc2NtCjYZs4RkrWw3mwSePee7Ac4nNeFdWph3TrZVjqppTbwbFpgfq66rT2JfhQj",
  "key1": "2UzobMow88giYbivp1xhCSCJyaFkQQhH4eFttGYNHSstfWoXwKaPb67BbjiJmjbTPEFrvDCMTVD5Tr7iNfTGAk82",
  "key2": "AP6SBn5dthycndKDJbmgQMyJ1rtNxgvR1v9kwqDZ1LBDFwVVGpJ83ZfFNU2n85BcnhQfb1DyXCRH5m1QK6P7P4z",
  "key3": "UK6F6ND1nZbztT3D2zmmNr8F4Mhm5fGGDxjhuLdDM6d5gA21p9FwXhSxJo4L5fu9WtMAqu3oHSvXKhJwYbNvXRX",
  "key4": "4HYCvGP5Rd46ZcD1ypGtfMs12LjEUL1ih3pbAn2DdsGb2z8Xwnhqa6askfz9VWUfx7mq2KR8eBFYnEdaNRrx9diT",
  "key5": "4uZdZTJwSWdVp2cGnZPQik8aY3cpfoErc6FSseG1Lpgo9zBqAxZdtheuSHM1m57TANdPWL7n5kMMLoekFbU9tzpM",
  "key6": "3jdkJcqtVJRt7JMbCU8ZFhVaStfsPLZ37rdXwi9SWYEZkKEae5tRSFyhbhABwAUUgwD8X2kjQKZAZXw9zFUt1Wem",
  "key7": "2hgbBeQKPQVdUXKFq6Bgno2XMs7P7aJXshEiUjDFmV8uykuaHtvEi6ZRGUz3E6S4jraxcmQp53ycMRDY3QTdgSpV",
  "key8": "5asPgjQ6uLoKA1WcZojXQ6Fpx6sUZ3ZUPymkBFTQnyYnU1MvP94UdbzzHFxRVaqiEnhUHwgoNNAB7zSvq44RxDhv",
  "key9": "43VndvwGxbGQAVmd6N81bmj9ihiSzmcUhv1kSkrw9fzsuKmsP4rWWMn3f3sSVnvTcME4BattPZvD5BEqZAqJJ13d",
  "key10": "4qgwr3tVV9HAthuLdiu8zq8zmu7u1BMwY8JBzq6nBZNH8Xot7RSVCd9Qq2EXT6iBwjyd1VFVCBxUeKq1gLfc8uW5",
  "key11": "3PxC4ZYSaq9gSYip39soLEpMCR4P9F2r1iCXwLrEEB815mCKCFGDRMKTD2X1WWH5ewYQBoM9hLdyRU9cqfMzMFET",
  "key12": "3h9uBVqoiU7NjyuZmdSpeyvgAN6ijgv8SUXyA4RUF4xVfiJuYynUt16Q9ypK63i5Mu64tUnkfG1SszugA776mm1P",
  "key13": "guppxuicUVST4XwiiZWt8AGWZQsKC85N4UVSRhkT8HVuRtjfLfPYgYj2giNQ29MKnoP2YVSbCUvWRVUeqKXST4C",
  "key14": "2J4U1AYaJHHzFBQSzPN5E5x6gyU2sytzVMRhYT8nVsypKX7gVwhbFp4PetTYjiPSjtbcDamQ7WJahQPSDqJiiM3B",
  "key15": "4KUzKGMzKzbvSaACdjN7jZj2GxHT7vbRFGoUcSSpabqcN9ETbpChMEkTjMmgrDPJX1fRQg79gS3JVzf6m98dPej5",
  "key16": "XF1wc7HkvZsKnxm8hKu2dYQ8KfpsLhAuf3kYRGz8MtgbJqaZtTVc5bFGWwJYxQhu3k3wYEbXMhdS4pydSaXUmaf",
  "key17": "43Mc8LZ5FVqG1aKyMdH3J6U1zgLXm57bDnAXRwg8uLNLrPSSVUugrJSLBvZUEUrQEHfktimyEyvKYFxeTPW61zFq",
  "key18": "4UnoefEH3DVBAv2jFpvFku9NEN267FPjphd8AoKb4W9CkaBnwiCdxjqFQWhqtNs9wMNZSEz8dRpqMXiKQ9y2oQ5Q",
  "key19": "2GEM4XnAVekSCNcV6SQ8uKdvwqVfZyygZq9vTpzXFNxCrzw9VWhTRTFu51ebjDRdYfWDc7h9ZhNWDF99cBzD1oMb",
  "key20": "5cUN4QAWo81ReMaBNRKFkj3Khn6pb9Qjd87bc5VGZKXJZyGNgEmW4bYJyf32qBHVywqo7QmfyAEuxXku4ZEsrESE",
  "key21": "4DEx4XCwT7udB86KyRTkFZXNm3Pxdq6RSExUm7DhRpEZcFaoNjcgXM74D4ZRcQQ5ZGeiDUZNzFaBEDGb1WTT1g3Y",
  "key22": "wypb8ppRJPX7cajKpQ4pe9aEXW8f5cMGedLQ1xeBUKGjQrLGEfi9TpLZjbMpJFf39aeDHr5ALScUzkHmUbbQKdK",
  "key23": "K851m7tbZVWZFPaPvYtHe5xKp7jmSBmRA8YZzJMpsR3Z9muLhKv9kRershBTFsNGN3vNoq2rGEpfZizPvQ9J412",
  "key24": "57pNmmVCWBBTu8bxQrxhooMmDUmCrqTSuDkXL51espb7nTTvePWTZDox8HZUSdpkJGMEGSm1HGW2stFcrxzBVbjr",
  "key25": "4CofPe1ppt6Y7CCmL87ULfm8RKvsrRBjPBqwXSG5g4aKzNshF5edLWV4zP8VdmsqNY8sxjdLrEWxLTNFQArGBdFu",
  "key26": "Qw5d13rbcRDKjeUaq5SBuV2u3jG681ABKTVkXgw6D6m5knTfuhefkqoSeYWcFDWuFhDGZWSZS3tUbUkEvmpXmus",
  "key27": "2sjNxUivoBuyawui8mGxsZtpg5F4WM2Fu8pRytQzUYHJXUnN1zGQtkW2LAQKP4rXmh8evKrYsh3dcTec9NpTPqh7",
  "key28": "3VKLS4y1ZzmY5LKCPsAZyeZrZtHuaD5TZxXMsj8MgAprBHLv49xW374uV29Z1PEf68ptbTCKTQkNdURhZAFaZezF",
  "key29": "46JdvPDgmL7kDwtWYT2ZVgckm6StKvTqZeD7mdjuRTWN4f3UnG393MBSVSEuHSvS9YoKJGC2VNSaYknVX4WN2yka",
  "key30": "4GedLqKqgv9u8UyFCfm2PbWWUKz9hpvRcX6sVbYMY8aDgM8qgUrtH5ts5MQfSZrt2pDu7Vm8J1q4VwJZDw3gBK9p",
  "key31": "3He8XD1vjKVBPBKaiSKZGfnQhXD5FpgdevZknh4hBYVrj3oPLchrwcoLM2sij7QUZm7CwrkhoKTEMdTrLrshUmGR",
  "key32": "55wVEdJy4coNmMvHsjCLDeeQh4KS9VBQSpY5DNLetvKtAYvqo32GkpR4o9th8F98n3NU5CxekgxaABTrH3ry18Sh",
  "key33": "22cwoGBcwvV67LtLHmQA4U1n66rgvnqLNCrMVtmCKobsEumP7DcL1UidpH5eXLqVjqQHTaxbhRqCbEqviSEufEvh",
  "key34": "5Avo92X3HpEyYg4sunK7FvTi8dYULCtiiMEXA4ZSCyamLShY8mfSDHNZWuwBewsKwxGGktWoQH5mSD6gEmzB4Wke",
  "key35": "3XCxgdz5h1WX25rtEXN7M5u3WyV9kE72NbtFQFhAVBidi4oM7EFs6xcC6Huav7xPE5UDCebeUc9CYu895kpZCE5",
  "key36": "21GhtNJzWAHP8YyxNRjmdJpVnjVmboBhWTTRtG5wwpQneTwCki4BWcbr8jbcFHvF8qqK99pLFkvDt96eY6JANLMr",
  "key37": "GDMwXePMgS5M4wfN4u7uwixyKoXLr43wKDNfgUGVcDGvCfxdT5bcPhrY81NzaioojeyGdYUugzDe3rQynd1Yj4k",
  "key38": "4CcFn1dfZ7vV3MHzBdogNA3esmuUzBHarWYXhTjtJMTB6LqxNP6Ko1vwM2NsMLmXWGYgzYbq91sNQbMyg6WcGn4G",
  "key39": "3K7i4xURWvfEj31a8Rx5i5iEfXpe1iBeUVQKXSNdMsir6DwEoNRnxC5QoyrajFhKxaQiKnyXey2hgw2VSth3wQr9",
  "key40": "TqL4FVGVHZaoXwbikvCxrm7hyncJhY4CkWjEXV8Ghq7SUvJ7DygSropsxGeVitTyKVYJ8K5nhhUujpfUnQwrzsD",
  "key41": "5LuGBzEAPa6iqRHgqS1EAh49ARj6vB76wkvQ5Ry46VekXec8cPuETKWCeF9GpBNXnYaDPp5YG6UBH6tGAEnTEhg9"
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
