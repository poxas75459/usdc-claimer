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
    "5LuZzLMrTG7qFp1g9mypmA8itHDDRSPp1WK5fPqtYLN7M6b9vGU2rPEFK34suZupbk52yPheE7hbcmBPtt8yuh8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvkZjCLQtVYHfiDJRCyT9Ta1JnmVKu5KV76BZ5ndxvJkYkKaBowJgmqAgMrJtpQjLtuwSCcYXbkywfAAdaWyoQ1",
  "key1": "QQBKmnHsGCVggHrjR6fkwA3tqZkZ4ppKJCBTRxy44oKYKQieB4jFhdWYhMUpDPWvVLjQMRXid541x4KkoAxvDbk",
  "key2": "4x6Hm17dEZxMji9nX6UyK9XpBUUAShKW2d2whwriRMcSwMDDWX4buTT8KTMvmxUXBeZCABZf5GYsYkqJXjn1N5FF",
  "key3": "385ep6TBMXRnLTgQPKpV3FHwyeqd196VbBoGmHWYuo3WYk8nR27hc7eyz4vVibss7jHY9X1J4u2MzPDxnPJdZKyQ",
  "key4": "3mXFbJJJnv7MTFdhrr1MFz3Hk65pKU993vCzLcXQqnTntUfHgU2KrzBrVQqvSDqGBTUXaGZiFyqmnJ8pdVE11LNo",
  "key5": "3Dyq3HHnyZ1wUVHpfmbMcssqizuQsfgs2Pz8oFwuC2xvMuAeE76gYBurdBM3jEk7YjzdsF8VcZJbjeFMm42BMFGv",
  "key6": "Dxw4PSQmtpD4Vm2PTZKUxvia99warABqzbJZqVn1ppft1XcWyxS1hBGmAAxjBJ87qEKLicQoP24Tg3JnSKXPJzb",
  "key7": "LYV5yxKHEhURrwrWS5wGo9ySMdmxRD6siJbJtBViFGaLbAo9odPU3wKJzw3GbhpR5KXYaRvSg1Gt5a721kH7P63",
  "key8": "5jGHk9KiApSU3cqEQ9pvWggKVnCmNgc3PkcteH6L2yP8436Wisr9vmc4FBR5ftYYmxJARdSJZoZYDk4UL8xrCX8s",
  "key9": "4k4A5yr6ngsnEP5b2hTP6qSdjCkw9e2zEPyVEXgr62VrTgwpqpnxykBJsT2FqXYFConAQJ7cjGBVr1b9Fm3oBVC2",
  "key10": "2YEnE8B6YLaAQAQp3MagvDcQNMnG4JootEaUBLM6HVzZfkUMmz1aSPSqE8ftLg645T9hDzLN79XMsz1qoZUkvCjU",
  "key11": "2TJRyWnqi11m79B1ZKPkDPStZ5Jt5Angsc2HXPyQdTweNr3F8ivhYorC4HgchT3vj4rxXzjLsk9UembUzDajCXFo",
  "key12": "62WnEQJAXJ4SdgCDzCbsncv8BTQsazCfe5qKHSwiAtxwotSZ5Mska2cgzLtWksLkRiu7f9R3nps29eB4UK2Q4sqd",
  "key13": "272uC6ShATDBib2vMLf25fEo8iAh4GRRRQ8sK2zzJBvjW2UJAeHpcQT6fqyuLQfqEkcbHs29SGHsmpFEETM3Tigz",
  "key14": "BqqssPz3mHjmbGPrHi1aFu4aoBrk5FwzuUR3nA3mWZbYd3RAp2EtiEY91ujqKsTNXPnoLKuFb59CMLaZ79B8SBH",
  "key15": "2cZzjPxfqUjRiKRgu2JijJUxLh3DAPy6cvZUb2HGXmG1THtoE6UAcyqjhu52Wt9D2CGYPPga1gPs8uxjB8chSFmS",
  "key16": "66YZuV4ywdkFNBNrpzAcbkNbummh9oc9s1Gq8KFDAqYpjxdhVxqvohgQyCrLpY6Du6hSVhsN6BjDQzM2ne8KZaxG",
  "key17": "2kZNzha2jWobayQXFGaifGT6MnVeN69QWZLmjVorb8MoSeHVUDZxAdgjERq2HoV4poeg2baLDEpB4YTeRpacu7z7",
  "key18": "3DAwsoReey9zGrL1td2LAbJPvUvrpvhgwK6xqENCSsYd4xHZ4MvdeJoMqaDMKGr2emqZ8h25VfYvXZocic1Uc6cC",
  "key19": "4s2wKxuumhT4Ayu4T78q1qViCm7VwnsWFzWB3eqdrvXYF5DcZE1SJXLfLfUyHVCFS88JZnnesm4Fk4T5A6A8VRfE",
  "key20": "5dAkSfSE8S7W2f4XiAuCuW3xJwUAKVxVApp1FgsEGU9ESQxj5vVTEYRpAKceKdXmUcTrVNnjYgptXNvYBEAtzDB1",
  "key21": "45ZVCspKJg7jCKhHdHA1S1BpfyVSZFDBQBpT42eeDSQFRH8orRbZUpKnv2NCnWP26ZtdAAcJPqwufUQLZaCGgHwq",
  "key22": "2TjrkBWeag4TjeDNnZdT34Z37sS6aj2NCFJ2YyXC7bqtRJcTA5TwWFen17jS9kG5jTSxrmQpox7bDEbHJaTmDiAg",
  "key23": "2LqGBRjnhfLm57LjGREwAPs5uLik4nN4ZcwH3QSfXV7AqiWhdutmFLpoypEzEkrjXNNngMzPG1AFBt3HdC8Hivhp",
  "key24": "5VJACZiBy3GomDZABmT755TF7nAxQRjayFxvfygLNrSsv8esotKqXVwgX57bLLoynXLvRBscxFUxK5TNngq9sX9m",
  "key25": "5k4adM2RKY4vmx25omVt31mteZ8WX3eJy2XMpnq6Hmqe6Qmo128rG4Ay7BHcbChAprjJ9bfKx4QgvTBhwHbiKdJm",
  "key26": "KuYD9SV1xCSDDzziwgMYKRMzVbWeabPRgxAdPvPdvN2g1kmp1qyxd13q1MuWw5KZVd9795r1qRyUeHA5WK4rGsa",
  "key27": "QpzEk17DVp6rzeEMTkxACFVNmQ6UvwdgFmkJL5kDbSmrJ6hR7TXi9P6oipTVgQsF2JZ8jk3B8MQ5KfmJZUFg2ZR",
  "key28": "4srLZt3SpQiuSgV3ygUNokafqp4PJJMt7o7ND9SfGazU24bSH3RPPgfAccPLzJpicKE3kdzTT9j34dSjjw8Rohmg",
  "key29": "2WdNZB7ME3PpjzBD8uEAcbVbqRovfHCpxqZjBTzcChkadCU4bqQS3otprmRSCf6DNyasoUoM3j9sRY5x94QmQboT",
  "key30": "27W467pk6GkYbf61XY6rBwsimohsCjmVQEp4NYNAyT32jn45Vr58sJ8k5RNYURvQCPT6M8W6vW1xadSMLvm9eETr",
  "key31": "5KhqrW9wTiHhJW13nRgfoLmsAXojapTcdvAXCAWKXbJjCawfDRZRHjzif2fTcKsEFvDwGDZvRDWVWLqEccnLozTR",
  "key32": "5MkXQtwRqWrh3oofbrxgVX8wEkdpseyxEqqgrNiM51CxACsKMXxZ5F7eeB9QBGmiaunRAqtkH21egjGiA9hEm6G",
  "key33": "2j7bn9HqjJSEmp8VvfG8vZe24qKKe8GBM9XrptX4XiHDV9ErXzMS36PoNWVvguJNUdMCAeBKkauNyAg1AvvqaPW3",
  "key34": "EBiWmrTqVe2bSa3rVQ1HF2qeT1gKBB7xuJovP5wA7GRU9MeHJpP7b69stfQXRm2Q6SuU2mX6AQNcf8x5zzjFkiH",
  "key35": "4DXDVo6pmNqCYncxWdMmwTEnBPCMuRU3E1TJWknNFXTCSqnf5MeB9q5mg8NtCSF5MUMFCSK3Qsugsb8qTAySgYSV",
  "key36": "8nK5GyPAsqA1CKLhknJwsTK1i98mjkWi3piAbaPFvt34C3PHEoG1ZkiYzq3256KWN3GRFR59G9dvVu6NQz4LSdy",
  "key37": "ukPMP7Cg18SXCGojXADTHxcvNYnq2RpLdcNXzbYjJfTeh1ig9A5uh5iAh1m9zHodhfrnZ44LYSsq6ipBbAuJN98",
  "key38": "3frMD6BipDz3cX5Dj6c6Jkm8BSaX4ptygXx59SowAAoa21P982JcCRuaGuiihLij1qSm4EaHs6Pmxg1DW8uhiMQo",
  "key39": "nsrr2ZyPP7h9S2snc1gGYQD7j6WZToRB3pb5sooYxtuPPjBgpAjaz8FGHwFUed6nsrR8Ln3bPoF8zeBmTgjS9fa",
  "key40": "Y2KTQKgnLYetwXMzM9cyAeUvokkfLCJMUzcM4GMRDZZF3cpCxmB7tnQxrmYCUWzi4FpF2ZXi96bG1NFnPsrEfuR"
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
