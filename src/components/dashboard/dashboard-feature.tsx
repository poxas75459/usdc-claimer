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
    "BD8WgA4kCHx7ywNNiu2xkiq8A5mdVb6BLwhbk4ZnjFYbY51NPh8REuKAo9CsVNwGtz8mtE3XmkczpjfpdYsFa7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMWrfnUeUjnoWexAY9pjTKGVyAzjEDt9GsDmsvsVFjhDU2HrzPd9JvbNt8fHhHRb4udh1sxWVaBk2f13rMGYQUd",
  "key1": "2hU4ivcbv7Hj3ys76Bi4TK3WwyAPYdSBtfc6NXuhcZqhH4X8rTdvkyK5UWKaUzpg68zHKhiC8PmPQ1vhEufWg4ds",
  "key2": "4Pp17v46fcXPFJRQyKXRwc3KQxy82eR1hYg5ZHvuTwN2H9MGj8zygsKHLyJjP3tAXioJBzB8UTr7Krgt6QFparn9",
  "key3": "day3yWKADi39tkS4cDr8pjhmnzutApMMAKBmNVjaphLPdHjWroduHLrn2uw5Z1YHh2XvM5ACqVjdtrw8bAJatry",
  "key4": "31CPq8BWJj2Unf1aVAN11oF7gxkt8PG1FcVhbMrJ4U5G3wMAJPehBP53avWAydJCH8vdpr5MAtEo7PU59KspuybZ",
  "key5": "2T3pRFadRhgzApCeNaUysWmjQVGU8YAmB3UBLYtbQviE5KcbyX8VqvD5L3cXLQE1odNuAczVG7JrCsE9C2sXyaf2",
  "key6": "5HnJLMQAUmD2cqSMKewdqbioV2QuQTpbUZHMrtUeQXJRevtYd2L5DPCsG1Wcp1RD4QmvogmtYhKSgZ6DWkiMHC5y",
  "key7": "EgDjEePSTo1LQynHxxMLEDNNbrMGTXo3cy7D95w8MaWdjqpWXn7vayppf3CCDtZa1oN7wDY3Ummvz3qfhmou5j5",
  "key8": "5BUCqxB2iwdEc67cmotCz1pwy3typ4kUsps6KwodjZxSA555vtAbbTbLqNYbPkSDZj6rw7ACZoBud7b8XmgQ1fQH",
  "key9": "2HGjeDe77D1grrFd8RMEYzs1XPrhaYmpccfaxLgXVtsrMYKkgvzMDmrs3LQrfWrAGmnf2da8ENZPLESRfuNUCX59",
  "key10": "5UJ8j6pLrrX7ytqFsdt5p64r4NKP113DYKCfqddzbTZowoktmVC4Kf61nihnZDp8cMsKc7iFbDkbcE8gqwipqczM",
  "key11": "fk8zFDgVkHLVQqjuAuocDA6ckPx93nt6taDSF3iD1rGwD1C5RtMU3ts8w4ZQHhvsjrxZp9SAHnxmRX7xYtHRctT",
  "key12": "3jThJ1Do1omCLwbPiUbYgDrWHydKJHWuHPbKMKL1SCZxAhrM8FgK5rJgF9U3UXzmwJrPQ1bbpLeTZUVRe9AMwkug",
  "key13": "4hjtawPxq7hkK9exwViTetqdwwrcauGZoVMqVne1WZUtwH4NvwxvsWQGEM4GbbV5YKyXzK3D7mSgPRdmpqDFaPBG",
  "key14": "67ihwxxhmbgarKvUSuFXwR8U9yeZohE4wQUsMa8eSsXcGDAuP7JvW8LyoXFk8YLB1JyxCY1DUbsQLcTG1hWjJ1BV",
  "key15": "4TRngHCCGuiRUo252avQNW6b21KsmZwatfhmJQ5KD7K2uDhm4o3uEE3AHtBP3AFN6j7KSujnZ823ME5pmBs2p1C3",
  "key16": "2NJppfjQkeTdTzpp75e3wMg23aVHEc9EDj4xxCwaihiJz1BEtkiJJ6Pgeiv5kJmWSK9UBfdEiNKmpoFJrH88bY6g",
  "key17": "2mFQWwXC4t7heqeE4JPViyJ5ZupE2HgjddN2KMUkYa6UcmycCHyXdiA7fNBw6WRMX8hTRKjQQDh1aQaKRbYYx1Wz",
  "key18": "pMyQ5YV9yqzKU7yZ5DrzaZnZkxN3mft6zaSLUdZzZqjKMszyRAodcrHMMzianScyPfTnvGBmfATCE2GwATZowjN",
  "key19": "5f6Rq6q7WpdcR35VjAeThzyitoeysyuzyJvEYa4PKKAQDNJZJPqVPdeVNvZkRJZhA4wJPogizKq65Z4TP5JqydXY",
  "key20": "27ipwbnvVC2GibsKqCegN39Q9jjiXmWBb5DELzukRSftc7xYsToQ86bqttzmfffWGrhGfXSYJiti8UTWCitGrfWQ",
  "key21": "49ikrNWbomu2LkPzmrGQwJa5Tp79wEuq9yw93gDcARyqQN6291N2zzXxdeK7RJNkuSVEFDu6jt3a3WrGG84EQFdx",
  "key22": "5jFbgwyPjkCFvzNbk6vQdqXbWpkLkAvVtn8NKGHbK2G5CUgF4tix6X8qEQ5q9hCqsrzvGvNmTAkJBanLcaZQkmHu",
  "key23": "3DgAaGopM4AvTfYBKq9Sxbxg9BE2oRTXGRSGzjxSwu7EnPDYBAGLbxGB6LshoVGfLyEouW2A7eA1YgMaskQhcGm6",
  "key24": "4QiKb94fUxNcpJ6B6FN1eCys5NZzmXEvxKqfohw3TGYQy4RgkHYYxXPLVcnn34CQj1sSXBt86A5gTZU8V6oZPUvK",
  "key25": "4zSuQGSnQweb3eXMu2YvV2gWxQ1Yq6cjCX16GAM4S56Ci24hRv2DpNqDf8x41aM8KBuYUKZMC18QVdNWmVNcBG1n",
  "key26": "3z4nH7FqKQWbwbC53eLCBx2gKUXFpetW6yCb3d99tWQ5LZiE1yYxPJ2BRgF3wsFDWM4QrS3hz2aWeS612tbiysnv",
  "key27": "5Kk1wUauWCUSU8RwWU57mBNPNH8SqRVUod893aZ87t3tV9yCsSgtWuJj9JdMKB9YRszP4woaekN1RJzwoYUBTtDs",
  "key28": "5UWa7feoBusbsT9sc57tcxd9pxJMvcYqYujCqvxV1zD41ZkySyYymSLC8HcGtDRVDRAYUQxSrgBgNiShA3aknPDB",
  "key29": "3rzvLu46Me7ESwo6eNofG34NBwLhZK5GeaejyuKkXdk7QAy3Pd7jGzKMRxTqULraMEhyYGcvmtQZTmGxospiZbCT",
  "key30": "3iKXQTX32YoHxhJRT3TLcCHPZgGxeiiR5wovRMXZSBAqM7vM8x1UyVG1gZcYn49j1ykEcoHC1vwy5x3TAwMM2X3q",
  "key31": "4uiqPzgopppYkzKjVwHXjmnftvV9sr5Kzab76Qrev1qXrzN2N3TmeVZ15yrcuf3eTFPB8H21wH9ykQrUV2VdC9TL",
  "key32": "24jsXQyqd4EtuFRcmZwUyD3Ag1wUTZYaoTmWVaDMiSxbr4tbqF1H4rPNbEGmVeidtnbcGFohARPobMkz8hygjjT3",
  "key33": "4xBVvWZbephgdrrPTZdAQ8Spj9nFU98QnfZSzJ8fehT2fziYV1yZ42c1rgaoYK1zM27Xv4mLBkqaGJZCeLX1Jc31",
  "key34": "4dxJYYQvNgaFLXwFU5eLaVYHUpv85zBJ2kS13BkqmRd35jwb1vPtwJx9ZHLC3e8wF8LSb3nuKZiLPAzcGrXoJhme",
  "key35": "4Pw5yj5ArinQLywtBPLUeSnCK6twXy6MfJ1CqZGB1PLviTkmmHyFkehCC5C98MQqdQQ158eyJvbaRQCCpiU4WBuZ",
  "key36": "9pJg9Mue7FQsYJCVdZ1RMEvjiK3BAD1CRq55sZKx6DaLRbMsuEGsykGJRfh2JBpsnEcV7a5StVFBTd2scxEwBb1",
  "key37": "3g7xvwn2HEh4q1NFpV29K92Jg53siFWZF6bCGt4yve7ebDk78RYFv3Z8Vyd7BWCvRMTwa5nE4599ePkTV1ogUGTa"
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
