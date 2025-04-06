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
    "NxZBKZsrria8exzor9YAUrTkSp4mQfDNnEdUaBf5edUA717eR3bA4mwWNw9K4CDpXRnG44drstpv5L1Yps8Dz1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BqrqPubBBirmrNWe7HEXU8t48zexw7d3JeB2aEWNT9HGpd8gEphDFcZ5m9KMaTJ11ixDPz6fsrKhFF68iq4vsmN",
  "key1": "3FMLRvwN9K3xwBhx4gLGx1AS3yuA3dFDhJnzcMPGzY1D1PmzVzHWNGqx1UMn96ELUbNoiy99ci7xSDuy34fmibqw",
  "key2": "3WS7kSVdGP1Pb9y4WkY6gaeT6went3JHpwALn5iCSQaHwa4RqcWpG7G4Z3WMB2QkZxzKVnEWkWSTkhY9AsF57z6y",
  "key3": "EkFboyodhffcEE6fvwJZMxXNfjVfLJ6scHbeJfjJQaDftUEB5nBneuUvchyzk9m5imiopFGzyfGdaFpKJfAkcPB",
  "key4": "5nEZH5sLedaYLncPj2LSVPdw58uqurdYRReYZTVz4TySsWsAstG34driyPi8qNuC3jpUPvuf3wrarTQAS3su9JJd",
  "key5": "4VUwkjsiqmjh5sDcXXZBHC3TuTGKp62DqygpSgoN9xk8RdavKhzkWZSXswSp8R5jHQUPzQ5X98BjmfQpyuE4KYtK",
  "key6": "4t7EZJeJffa5qnmy5r7rZ6jcHX2ZoBUgQCvghCBfHxY82f1mHnjVv3B58t4QAD8Kp93XBrkhX6KnpE7M1q6u2MBy",
  "key7": "3pAureo3qb8LGv2eaka1FVULMe4ezroyrpvH316d5ZERs4ZGN51tnWrcisxcQzqatFRyXXx2rfwtLQJJeQHaoxfU",
  "key8": "5qZp1MAh46hSQG8HwXP7HcxuVHH1dMY5kBHCLpx2Zb6bGEQs52iCqsfkJJvovFz67zN8Bqo36vvVcqtVALFt39AG",
  "key9": "4sFUG9nu5jKKc87YqNL12mEL2wokhnwYYMH42xCd6odRWde9tLHA3knfBVp2Nd1o2eSZJUYDnrEMtn9oEoPLggHh",
  "key10": "2ppsMfWCKpwwQd9Hsau6eokmymLB6DSSP9c8in3MkC1wxccMkq3ENKJKA4W7KCBzq8qdrd39FG3fpPWqHffaDdCs",
  "key11": "21oDVXz8c2n4G7jutkWPie3FfRgdwCwYHpxqzxPPoQEfjaNToRjso53Trb5niaC2oDBhSNwUXq5h7nFWysCYoVRs",
  "key12": "3JhoBvmxmira9GNMzbxK19kWA8otJdpJsFFH2pg4xLUwpPAwkUPMcwikaxPM8phRns1ZrCss7NsHw5Bewyeb5Dsa",
  "key13": "HSJNsWkXNtgPBCsSg9P3shqWtFAJyX3axoqDkFBy5kVxSsvQAQZ6bHsnKuf4GfhoGF24cBjQ4mJcp29RkZq95Fn",
  "key14": "2AEmRVaeFA1KZqBhJWYoeakEjkWtGTner1e1QLxwSveL7coUKVCPhp44SNvmmSuno4wtib7MkPKoRCd2Di7bkDr7",
  "key15": "3derKud7LQs3GUgqUchT9z5Wearac3CmqYMqLvKd1AzQyD5KGhxsmqb9SVLFou6k62JEEMQwFJxhHDmzmC22YFYB",
  "key16": "4jGRYL4BBw9QoY48HBB5QwDRqHYVNB8vXgtXhMhzi7CUrEMdFGyugiWiKgkLX5Z9PCk1NZ1Ax6Q6DybrmTkZCUvE",
  "key17": "6j2kaK8Q2sQYmkNEBGWusrTyx6AtErccS9axYxzo9BLhZJ49v3WeJktMKiS5pDNaYB38TkPyn5VTWcEMfu9WgSw",
  "key18": "Snr4porH1MDEtBAAZckfjzBQxDoWQkBgorPEebtTLriUgevqpXA7VtpcbTC3z7ssWXYbn8QvF4aZjUAF8DXGpUz",
  "key19": "5tMsKi8u1FmUVYSJsf24j7mDodx48F3fuKPPXg7U53U1qtNSy5XdXa4XjZ5GVDYLy2XSTLqJL193PZPD28dqUZfU",
  "key20": "4kkmdqqf2SFRvaTovTMCjKfhg8svmqKTxoMuDT6Fnxm5so4auopwu93DQWP7uR57Hb2BCMvocDbcM4Eg9NBT68jX",
  "key21": "5W6YzukMBfn4HM77TiFiJTAGXMoAGNANkAetztyRZ8oWQvi77chgvWxKTbZ59AZQdos6sU6cq8t79uMjbWpnCAio",
  "key22": "2rZxjWqy9qP1bneQGW5CkFrRA2hZwsKcxkV68PcoGDRozn5kjrEUw2QCTqKVfoS9sytGMgQyYhyiBSk1Twmr5DX3",
  "key23": "44NT2TGucQAmnTpCwu51xJ9U7GYB3yn5N43NuexufRwtfwmycdhthhV2h5iBdMu5zjUfyP4aMzucxeyPg8RLQL2Q",
  "key24": "37Xm1QTzpGFnndinYKQXYMJLWuuQrTa39erLfcitAxLUEcjQBNHxqkWCregi7zXW76QyX73fMCo5EN5dmQtCHDoc",
  "key25": "JwyJLNqJnMcwXxyNdzpHt33wcLkNHfqipN29RuDikyS7N4F3ubHnaoFgbwi2c3Z1JexRrJWASvRJDVB6Fvq7dZm",
  "key26": "3kX2gVC6xx6FjVTb1MyHtdEKKxEC7yVo9TFsb9xuCyL13U4w7xrdypD117eeGUA31YRJfzoAq7W1iiHRQAD3KVjd",
  "key27": "4GnDgxeUHo7T7oV6CUKTkBL2JpLYwRUPqLyP47dUSReZ3zvbAimUdoNix2obHLkhJFnJnWWE5JPSdb7Aui8Lrj3R",
  "key28": "5Q9nkFxpbzMqotz34oPAn6GwK4psvmoMprGz2MkG2DRbD4kyM8yZMhWjcwE7k5auQxM8qKhmnppCWXR951bNKyhM",
  "key29": "3ojnmDg1EpDLxHsv4XzgpRU4PNLE8EsfADuP8FHnF2Shuk5oHYb4GonZmcHBaS6cCPdvzBi6vn4kzEH9pDPN9vVL",
  "key30": "4MXFzBVwEnLVgmvRgnFxUQJtNqAidJMb2rRUrqnFcFjAJRNAoAfRH1BCfT8cSQYYWSWHxJHqyz7RncBuyFvhGUCX",
  "key31": "2iTFztexBSqGuksLMeoDA5qhYKzQn9PgKWo4PcRfnbJwmS9L7PdpdUabBgsituPPfwWnWWjfqwYPFE9Z7HahoEX9",
  "key32": "4ko3C4fWmQFQT21f7KjvPjyZJFhjXe1E1qF96TPgZ8tDaCPXJQZSEEJKW2u6pQZ4twfrpArTSDMgYjDT6616xhKA",
  "key33": "4aBeidzgUeMBHzVFeT75vjoLZ64PGgfdpTj6Yjon4CkJ8HYEgECSYq34Y2Zi7STu8pzcksQhL9CjLzWMTVgZfzzt",
  "key34": "4zgURRVUUxPEZ5thA5wUT16ctEEewjUHajUtQcoW38jKpvg8jfDdH4LqSfKUWMFzAf6Vrz32aGjpz6WduirXBpGE",
  "key35": "u2JUgX34NqyydnbPh36yzVMMkw5ByPuATcTodNoPuu7kzkyaKT5uV4272xHPDGQEQu7MMVAVMRJT7w1w19zTtzo",
  "key36": "3RFnrVkmmhznyouvo2awDkAo7xsume9uAy9HiHJRwKqdqd5SY2zsAdR4TRQAWzGdxMZDjHE45Z9iGBXEwugiScyS"
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
