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
    "4A27ecWYaG9Q4uP26qqHd7eioAv3uoQGQRqmNZye6tRHQQdn2r7c15Mst3RtPuA7BsWjNR2QLxNjht3wzBRYxnFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NU4qqyd4YE2TiSiR1KirQfswZ29HuPRzy5JbV5LLpzWTRxKspKsC8LesyuLQqdmgtGErzyJHnGA2PFYKeCBFeDM",
  "key1": "4tQCJ56JHMKVnqApWohjmJiqdF7LWrACTFa3RLisKUSMC4QXKiRrvTXqySdPeV1Xia1p5hCgML1XMNgLnPEZ6FUh",
  "key2": "4ko6UBpjMVQXzXTACK36r94QiM9m5kHJ68WoiM6pPF9vV858SZJ9FMzoFoA4fGKtwXhfk3VMAEhV889DF1hD32pV",
  "key3": "4hXbYksoE91rGuxoKMGvbXnVSLKUA5ZphDTNErNkMiFUodCMESm4i4bHhmnvAzuS8kWpMXgwggxRDNFsqMQJ58xa",
  "key4": "67KY6xo3mQ6YhaWDHGmQeW2Vfo7bs19hpXeDnLri58T4kJuwNWcGw8jg9wM5uXHS1DG64dvkBZPRSBi9BUR5zTEb",
  "key5": "xQwctCb1D5HaJwf5LyXjYKnpE6nhKEgN43JYLMQvDXXfgFjYnmnedJ4GYXSiT1FLwWxPVgnBP2YcB7dmRBdn7XT",
  "key6": "45T99A2hQ9DQud3DCLVJC3RXbbs51QTVx9DsZ6qEKECdYJSNLcYDjXFQ6UiZquKQYmEonqLuevDRgJJTQJesJEZF",
  "key7": "3uYW8pmggN99eNTjwPNCB6AkGm9XiYRLSRo1M7Q4sAK6xUT5jzTS4bbk9gdNoPnQvkiXsZfZi7PE5BSgLQAnzsRT",
  "key8": "dV91homDAHa9wMMUPXqQj99dvgWn2xdCyZSYE1NH9yxCvFxhr5RdUMrZHMLcEaX1zwy3ScfofmfXverWbDn9Js1",
  "key9": "2YyoyVK2R5DKZNTpGVfewdKMuFcjY77oCp1BnZM589uyo8VNANdURb5GTZ8b9CV5Gu7d5ZZdqZ7M7UJ96CAjEea5",
  "key10": "229gwM7DdrG34YuNfrQgS8jRPNihqL25sJ9JzJYCYqaTH6N2WGjVDHvot7qWZppmuKr1tKMxWjNq8EHbM3bpx73b",
  "key11": "gKBUiL5UvMkXLwa9b44wHvj8cdr831dDTgutx8BndHwmSp9Fc8LTaHthhN2GU1B6AfzWWRiHcFyKGuUvE9rthJN",
  "key12": "5ftmGrWG6mQWWqwo1K69J3QnGmRDb8h9tGQRUCpHncB2DDJQM7r1yEAUgSEc56rM2AcpxLkAmvGANtbFjrELfLj7",
  "key13": "wjULzXNfBYqxADvvPYu9ipAcySrZpwRZVA8Ko4WLKkgPLfBQFaQWGZ9rCke2TCKyZqABc1XEyXCBxmn5JjCQ7qb",
  "key14": "1297z7MTQKFniU9pyehm73H7wK6BoWTFdw3crVNQJZ7X7nypQgLPRtp4JPD2er2xMZgaUdkbmm4GVzCCXqXXV4cN",
  "key15": "2DFhWH88eTXF8hKyUuag23oFxMjpHST72Kkef4Yx5tgqMNYbfjnprCWC9V4MqsMtcHKrxVuwWx68FfRSgA39Kcfo",
  "key16": "2gSiQnrFW7vs2jemUbABXv34rV9nQWse36sTACE9RAfBjfcpMhJb4NkQdF4EjCL9Up7fGRnyYNt2q8RsEVCum6o8",
  "key17": "3pV65YRoHcfQg4ZgU3thN67tKkxygTpHNpQdyBboXnywfZBrtPfcy26wFcRP7AD2A1vu3ohhE3vpw3j9s6Ju6UWd",
  "key18": "65nknWjatQjbCFApsEyXMLVjoorUp5pyEXBNNcttTccKkkZaW6Mv7JAZVCv9zNHtpG7EPq2B61tZj71gUkF7uyQ1",
  "key19": "5ssAfSFEn2rY4Ur1ovM37D3Uexb6fTq64sT35XATfnZ7wA5AMeJCn9rfYkiyVMUxfzwk6E81Sv4WymCjzpAv6Tut",
  "key20": "3a7EqW5mJgFrachBdVD4eucuiam2F67AkCYFQnyR9tN6ot6twoKvA2Me3DcT7H5G8ktAFr1rLP6MqucT62C3Lz6P",
  "key21": "39XAQAVsy1muw19iPwNHVd42Si3tCsCxFbHAE1d1kwJPfo5ck9aShzSLf4HWvU7UqkCNhRLA4F2RoeLe6ms5goEk",
  "key22": "4L7kx7fUdqLkefbkSiNGCEorNx79YzMaSfMVvvrgihHEYpZuzYdBQdtLZxB4hbBrLDbceV1zyA5ExGuQgCjmp2ax",
  "key23": "4JVKVZ6GSbiJyn7yEBmXtvigK1s7Zrz9exkwrnuYu5uN4e76JiNZsJQRfvevmtgyYm8E8YBktXqcJCJvHeCEwgci",
  "key24": "25SV6smrJz7kFQFoTkdVNh2ieEXA36R4hoyja2ftDg3wJtVyUd5qEh8BQ1ge6ECxyxTYXHTgxZHxCCYi3K9DMMV8",
  "key25": "2ye8p9VfLwCwCVs5DqKNHtjfctShDWAT994QGCDjhJHc3dCX7sJz4nkkGNNtYtNbRX52GJRTyMDJnmeWSY3ysemo",
  "key26": "374ArDLyEzE1xWjQYtyGxQ2WdterhQEEKMkBmGG5Aufsx4G88gbFvXyzJVDSfLJm5ADnD9SAq8Ymd4VvUQn95cjy",
  "key27": "3kAvT8ZBXWr2oNKFAdjM19pazTNaq5hapCh2rrp4qmiyUYK9nWFbTTVvif4wVf9JA7N9fncdhCbb1wqW6YZCW7oS",
  "key28": "4LNWzE2uC9R2KNc5NFiy7um6WuaHYBJCQnHVrvsRtDP8h4RaXuD3bhsACtvMVtxPGzvk6bF1mpYtRx3EeVUMP98h",
  "key29": "3Ac8wbNS9QDrjfLT7hnwjmo7C2Mzkt9fKsmYzPxM9aEfPZw3gofhsWPUYoevZgDENyPA152fWzoX5KXH7WP2s6zU",
  "key30": "5YjhN7UDUC4Gi1CjH8pHCeSRLeCxeH18zn9rXrrohf1F4QdZNsVVJwB5BqfkzD4zGBG4b88CCvribrtz4tJeQAgP",
  "key31": "2xzQGmN9jEDQsiWzuKJDG7bVuXmHQhKV6FQn2SSHRZvdPaicJY1nAzqFVjiKK7RUt3gGLARaexBhW5YnvYWDAfjx",
  "key32": "22TLtdb8zo8LQJp3LyvjXzsiCBUFvtmxD9cUUcJALpmMnmYqd1qf6dAkh4EMw8VwGR5U634M8G3LCzbqJofjZVvh",
  "key33": "4Htm4y8T91ixPPrc876pecDx9Xxgj4kUyNCZWMQpBLNGB9rrnQ4MUv3tXPUwWiCh9H3hJoTCYMVH8et6ay1wWM12",
  "key34": "5WDFrvr9AkmZxKLWzkUcByNzwS15eGFzipmQF1WPooKegS3aV2MK96f6hNm1WC9Vr3f7tuiBT5RAQqstSG3eEA5r"
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
