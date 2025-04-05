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
    "59tP6hjRqynbNKQ6bNwdrv1fXyg97Ux4gZNejiasUfNArkhfcEBFXkYMzDMtggDUc3pkHpNoAbRPRNRaZ46NeMPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NkE4haY3pFkCV7YbxPNCKjzKgJ9x6DU6kJ91hPx7v33sbU2ZyHGTAPaWNTuzBBgQBQwfatweat73Yjf2RmGNz4C",
  "key1": "2fyxdDfquzYSDv1wV1Hm5xixopjzj8Tq9EKZdXVktPnne81yL224YeW2Ruhpq2h8K2aEiMeUaJWHpD9WqgxeP7tZ",
  "key2": "5sSnsfGzagjT1ussE3EZxdxgxhW3zsWMKujJLMjAYfVH1sbmGF9J8RRsB3ZFU2YCpxY1RCZLzexXime56pejtMXi",
  "key3": "64yLJiAp4VVmEjRJBtMEQLHzZg1oy5wuxATgYHW5qMbf7sSxLLFVx4mLynXRTDzVJve7wRXso1MewF2YbZziXKdB",
  "key4": "3wnbWPgyQ8HhRpY71cRsf6jd4o4K3fS3mSF4dGEv9YFCoKgtgn5v7JdNAC3zuVxgNfgwUqC2A6wWxLPAoba9JqUd",
  "key5": "2j1EuawQ4b9uANewsN9qtsKrNLBxGfyMXqM3a6avQiTTNt5ii3c4Tzbee9YwXUMtjobSAtTNkbtcqMy1WMM5uHrn",
  "key6": "47pEqWiYCzz2c9eM8HNbBU5EwEZvMB82VwKjYhyVTotCQcKuxWtEwy2UDeVUUw22cBWEZynkfjSAGws6gKsJTWjw",
  "key7": "e8L6EBQ77Ga7dkmS7d8xzoXVJBMQQkJYSVcY4NZYJBM4AfFs3qUjctzh8jP82CduBto4ZGJ7bZh9Bo9Hq5f2ztv",
  "key8": "5ckuXjEYACkY1qhXQDd6j7a1UH5hEax1HWKUAMRm4XDpGZDan34CdouAhHN5RnotScFZNuC4eDihqSaySsaX1B5a",
  "key9": "4ZwTR9qPkzKbw95uKgEuijibBBriGMuLbCwqznALZaAs4i7PB3ennXfcYzR1LXcpdYpLVtZeDJ27E25ixCUfpopQ",
  "key10": "37MLcyHjn6NfwVWirEVfhjGEKn9WyASkFUSfzsMrHSp8QvkJq3UFUEvH22LbWh4HL7KrZkwwsdF6jZEZ4xVRof8M",
  "key11": "o5dv7v7vVVLjXiv4zZFk5VBnyzEGfbWFFQP4dEhb9TYRdMNhPtVNyZUEWEcPJVfC837tBudVThA3wCzoZZvKzkc",
  "key12": "456qfCCUAAm4wi2zv3d5vw3jco9mevmCSPKi33fNoZ8FGVf9kLUMjmTZsk5Q6ibCaabohxvLhdWZPeL2mTZ3PMUs",
  "key13": "2Ve3oU81SZTMYQUEQvDwnos1aKyaNE7HXdgtZSHR3pPf1gHa9gQbHHMpynUtTwVqFeDSxQg3rLJExir97QanN2YC",
  "key14": "3XHv7f4qRrWEXsEg8SXCNx3refbnDMwzHNhZfNojx7xA7QkTGgaB3FXcmq93w3yCjvHH7TkzRj7QVuNQCdwmTBT2",
  "key15": "F3YcSRRxRo6DUXi6iKcizuZNpFYsFFV571RNmsR776xa6Nm51ZXW6EB4eAZfjW8hBRDGZnhftuJKaZL14nMhdcu",
  "key16": "639baVFrmQXeqcZ5tMbugSSexRd3UcZpdjxggcNUFiyw8YFtRZ5CytzYtfx6z7B69xw8SQESbyKNKvCMCFQonfQP",
  "key17": "V1CvTT8D1bgAi4sQ1nxNnJRJVabcC3qaGaqurj59XTSubD3xJXTE7UFXcGuWcgEhmuBT5X7ZnhwPu2E8EfBXp3Z",
  "key18": "oByHqPNEjdF4Ko2wxYpXSB7ekGN8mWY5eKfaH5dxVURAjACR6J1YudwTHJrf2kLcKzKhT2VmxDk2BvVWbRPbv7e",
  "key19": "5kEPbndUG1HXQykzCjHdWoC7MeRC7Bc2fQByk1vMYXf9JKP5weiMkkvkt45yhca6faydEHyRDCAGndUuUhSPMfq2",
  "key20": "2KxPcDtKKAn61LNp9oosasJeEN1VFFhLrRQWioZWTtv7vuBbji7gpcjYhTGgLxWk8YzQxGw1QhtRNtDJvoULTrsY",
  "key21": "24nwmEB37VNr9JQSiEXujWdvmeBRmAigRD51Ec49peYJspdGHrhiEUtR3Nf5xZhYnvcYkwBq2XG61GmPQMVxmn6Q",
  "key22": "5oEVzPxgim5HdvDCkXEg1qt6EvhZueM1RpjnaKTa87qXas9F9NVsNjPJGVuRNF5vahiMtWJZZvqkpd9LcabNc5y",
  "key23": "5PZtK82FXT7Rjjm66mEKSTTSDvTjNZuz2hi7wQfkSJQJpTttpyqrvuxX8xafhmCKS5ZVytRjasKzeEt6oZfR8rR2",
  "key24": "3hawEw6Va9uLU4F9A6ZAYsh9QwAsQzzZXDdKmG9h1RQdZx5AAxzGcymurdjAMZNqmw6hMvToxmZFt1eRmUtZLpd8",
  "key25": "5P7eAsJEjKr9ayhAcDUaH1tX1UewmTZbTp15aewtkTup8QgtWs6txY8dCot8EuiF6eh7kYoBx8X4z9yRXSyX3GWz",
  "key26": "4hgSKVrEXeBxEvGZcBp4QJV47n3kSaGkmzJaUqXiQdmJAKBGKU7EoEE8T365tgj13Bd3jup81eUxPvC1rrenHjNP",
  "key27": "gLw5RP4JE26dnV5ZNZTU9SDVctMnUJD8C3ua4DSPPjUJkT38VYS55X7MyScLDeirmxsvSsq9GrgkFdHVLUhJVsm",
  "key28": "2oMqMbp7Qcejjpkh6dKVMavg84fDXCtA6U8a2u8i4KqqEUcViNYW9QNxhCoYSNmocP8hXV5RfunhwdpVCLRPhT7W",
  "key29": "uuj15g5BmBx6HZXFhsFdvVuas24SC8Dcbkqa3Ufc15fUR9Q5LyoZJq317LueHjqELLoLuHjhSiJjT3v7kaQ3nR6",
  "key30": "2NghHF2nAg6u4BWLmnUrydg5HAQsTfQXe4zcA84qCjsWyvKGDJJFGuUu6Zpa736GpeBPRvjK89xP8PBKHjcXf6UL",
  "key31": "yYfzX3v6QKqcdS4jEenXeFM1d9fyRc7ybxZzENAad8m9eXzpxxpinR8bXz7x4B464MUtmJTsn99qSmpucGe29Ku",
  "key32": "4WLUxJWLu3oaEQd6nkmVu9aXJXJYBTLurkYMsqQFFiHsUmBBw3AwoLLpCkW83SokZrFQ5yzF1tePyQn5i3yQM8P6",
  "key33": "2FGLREf16CsYCpBNksyef2nM9G5pYbw9SfHB5KA9wR1nMzU69VnD8RZqv1C3wahZkEBD5HVr2jj3Y5CVN9dvsuav",
  "key34": "PkovV9FhZ2um4cA7CZX5EN9jCWEAYzV249fsknono7b7Gr5okgZ7WYt4EUG9Q8SjPd3piUP7KETdD9DcJsJgiUS",
  "key35": "4HNbchkMCCcd227PvP1GVVayXz3YRyNHrL1UiPiXnYDoYXeQ6vSvmLDjxnGYqanMGRPz4PLsctx5EWtBqusrkpKM",
  "key36": "65cnn3iAwhbpNScwCJYTFBXk6XsYtW3KesJwjGfj5rpVZ2M1DA9YRoiHSV9cMY6GTciL4mxFmDF7EGj8rduSjiS8",
  "key37": "3ynFJ2vim5qGRG26yFUEfDoXK9GVHy9LAMacNNU5HWZvESZG9SNoRyvGgEkwAGswLNqDHW2PLYT6TSXT1sGB9oJA",
  "key38": "ZZLVBpcY2GzLkX4nBnk9pQPQ1Lv2vCh2BgZ58Sx6FTwVyPekezw4WWmWsYoazqhLRap6ZLJeizUx6j84iruYHAG"
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
