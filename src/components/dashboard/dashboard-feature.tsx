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
    "2YLUNfiPCpRsZTrgMiPi7NNgwC6A815GSQ3UTVzaCBR7i9cwE4PVsCtbbPLiJ2QFMtYf7vWVYkNUPKA8vr37a3os"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmPCcS7diqhwNhRwToK2s8NciHSAowF7ZxnGqm6JfhPcptsx9rc5jEcpA3J7hv4i8rHgB4dGAprhT1RWeuZCRLB",
  "key1": "2qFoJdt7wMpBvrHYfgFnPpt4tDSTJ5jbki9YAE6xGvnSc62iqFw5qZdgBoENawJP5B5EbqBaCgzYrGurLRqzTU13",
  "key2": "3vLU94kGSi6dBdrVjZfrMYCSRHSN7NYJdHstzweoRTrkyKtfM3CPVyWfZKbZAnYoFwjj8ms7TKu4Vv8kmHKXZ8SL",
  "key3": "5w27zzuiseXvEX88yMM51eSfjaSxtxszRapZoL9kWJ6fHDS7FB6rY8zW2o6sukdeGWeSjUDmk72MSLBxKogYrBHh",
  "key4": "59x5fogG7aYZpGchvowLNfuvo2nNXmmL3ZG4BvFik9xoQb2gkJXcKWBNf8Pny4hJXx953uLGsb34QySMJJGD6GmN",
  "key5": "5vzbhEWFziKimsdrG6oAXvvpTXZ6KYi2PWhk92Rr7P3Z3Hghgy1mEnnzkyufRCYBNVtfTVp2gvLdAJ1WYucBwaJS",
  "key6": "2aGH8ZTRUALDSUjbKWwx4rYLwPWydbVyHQMwG72WfwpkwFmX4TzYvubDN9j6Ee6kcPhxjbuqSE91Fjtt4TCfMj6H",
  "key7": "3rLhM166KZp4kBGdkocqozAagaR1x1x9YtfxRUfNihJdHADqnNxrYKpeDbjwVFWhz81xspAZXHv1grJYVduQCXsG",
  "key8": "52NH3ovtsHnfgyftSZ7mYVi4Zhafnz4WoQtvAf5en3redydn2tvNta2GbVHtEGN1cRU6MLTKWHpEijYyZVL4NAqV",
  "key9": "46Ydiif7RsCS96bHxw9A26JhVcDKP981FQv8HzqxTcWzPe6z9bUwne6WhbdoaWR6sAPsB5NtDaKWNCKcuvBSTbT8",
  "key10": "34AnsNMH3ssWuRcPgSHr6XKHGLAFCtFreHygMbuomZBcqFaFFESqFDnQNeZVTXqubKiVKv1fg6T9Wnr8JJyZK8hc",
  "key11": "34wKtDM4ztgwUykQcSiNdK4iSVtSPonCXVs8fAJWXN92GD4x7TzYR7SeQBCockVrnrEGQ2r4EzijzQ1MRExqnbxq",
  "key12": "5WSkfe7pnVyCJwaK62sRxBQawUaJjqsnnmoR1vJ14mLkyv1CHBYcz5AGxQcCgRCTzJedUv34jK3JRebKuhsXJh8N",
  "key13": "4XXAz9Lms3J5u8Yppq3C9Z2ijpUrzhM8yCZEKJ9CNYgrJhQ6jh4FTSnQuQRnkxoDzzZGbHFxPJgGyokVaycvWZ1S",
  "key14": "stpFjpGFRjMASxg2ENoakWeX1EQszHQaepjfz83N5Mfax9iU1rXvEYQKot3gfKXDdyQ9HCkGN7pfvLzaNkXT8fz",
  "key15": "rEWYEiC2WRv3V3fBU51sieyVUoHFr9HL4RjQixrjioxVgVDgFWbFujpZj7M8mLSRMkgeKSeZJUba3PN3jfTpCTn",
  "key16": "tSaq65RqnGNcsGP9XTpo2ujrERez79MSmaCXH9hGdmTqGBWriHHA8EHL7Nanxo8bTazJWdNy6BJRvU3BXFKzSW9",
  "key17": "Y224UJPo6QMAYhDgEERBQg48UexXojsecgH7nTnw1HbrRPXDaUxPa3of4wXUioy8TmSDKQE7co4SLvyg7xhYHgK",
  "key18": "4nc6kUBG5a28BwdWWJXSzPwQQyHPwuFfck7gBjUNpLEhEbzhECDXy5xhmZcZ5AqH5rDngUKZPTYUzsTEpmcsspnv",
  "key19": "2Cj9fPfHqXRrzFAxajEKUNmwhzNHdix9Ftysw8HQca6eXJtkF6tVvarsLkY9ocTvHw4dqtA7p4yyveS94aZhQ7GV",
  "key20": "3SwTFJnebkuTpcSyY9JJVUy7U7htbmH8TMECrEuepjYhs96RBbp57Yy69d9x3L9WTt4efqeRnVNiJDF23izu89Ez",
  "key21": "3o6xcWc63YMcqWD3E8xEDp3CTsZUDfkXHfXPHK1ErbbzXM2sx1Vov6DqDpbxvTnUWnKRy17GebB1BxTTCRV9Scos",
  "key22": "2QtkaWg3oVWFu9TyxZpBDQaC58D7vmJG8j8TCNTjgKkWRsvD6sDwk7tpyLK9PcPWknC73PNBwsuKzksKHau344y6",
  "key23": "4utmXMvRhkDniYt5UFreK4rCaMhZTT6iiuZQwDLKKAt6oPiCWAHEgsA2pwZHMsACn7c4fckGiCwsiXpNvQpXkEjT",
  "key24": "5NsJoNPy8rayUiCqwvSKiFZLtuC9pNkQkThtuxBpe9VEdEAHrKh3ZmvVr2UsabeZ5vwc7Mv38J7oDWRRjkLr6amk",
  "key25": "t25bnJZH6mUCHke6Mnm9nUpCPoJxiM23SLQYTQHxT2F4fJAdF98BMVnfHo39BjZNGzasEhGeamocv1nWDLErAkY",
  "key26": "23GGS2jBfD5XbtaJT25Tk5EqG3m5j8DLXjEygTvCTkHKTyebkqdPZZaeTm8n3a63K6yiu61Q9nXW4nFMYTNevCuN",
  "key27": "4LuXgCZqi7bxig1DyUSvtAe8McKJ3rEbqfZYxC1fFNcFEt2rAE8oPgnZWQqibzwQ1W3pxnew1QRphz38CKmPJiGt",
  "key28": "iEUfHRoFfatRQNUt8fDvQkRHsGMffdpfDcCPhsTfbGaq8fayCyHZenYmx3yzPYUy1SCMixyiWB5ugAgbR9cpnu6",
  "key29": "3uuvirG3ZCM2WVH5c1bjXRVYxTJRoca8xX1iynrxCTkncc227mvnsmR5TiCWMhbNmddocyLJU3EFFUnedfNJDJSo",
  "key30": "25KyLBxtqkvQpEPwnHLLeKGR8TeEAM5QCChR3ZDzcePq52oUzMMfj55qfpqjAJhpjbMZRDvgjApPBm5iKzWUtT2H",
  "key31": "5AvDW1yNujhSKxzDZWy3LnPSNtqCi3hqPXYeApuCZDhfHNwTLYcy5MgHfKHKXzgbBQs4PZ8w9itNt9dHQSXnrTag",
  "key32": "5sRvCkCA3LFZqbV7cLZoNAf9y6M8bftcApPCBVoBFd8L8EWjmDVysWQMBvxRgpHQzdSpzGvCU5bjRtJVuVJLTZ2X",
  "key33": "2vCb43Nmm5uMUY1BeR31Bzjbpfv3JsTDPwoXGGBK6XEiExdVjKe8DrWwSwTkhzYDsjaysdEoT61zJykkFbbPT1yx",
  "key34": "5zQzJPWiHG7ntF2HPEkfSXExByiSeZDTX1RWUAbR4E9KdqmMkCyHFZmct4jkwtfEmVwLN1tprrCv5WLZ6btVsgkF",
  "key35": "2DkoYAWtUR2Fn9hBsn5NE1HcXYwp7cw85gtJvBtmkPWwRhFgFCkB6k1ZgA7DYg5HSPpZqsokaHYaAZmWeQryfwwR",
  "key36": "2tynP8Lz5tgaLGgcetJdK9Y4phFSBpUZ4MZUVtWFKVvYy3eabfPpcMnCf7R2ydHjJ3LDwBdiEM69GsZ7aFnkusyP",
  "key37": "61Cir2FjzrvZWfF3H5mwWSkmmczd9og29U6XWdedckXTf8GA7XvBojj4hbajfWibXfDwAeY2DfZanx2UWvvhKLca",
  "key38": "3p1uAR6ey4BeWmGGNHxG9nJGjEnrSeFonjpcgnWyhkQywWDqzrw8HQfkAoqa6txgGHS3oN8cg6izoiCK8CmpfZev",
  "key39": "62LzygcVXPKM2oyUbh5nt4GbeFmKYFTRC38itP8mjo2BiZANh56SQJk54P8TzkKmwAUxmZyBrDTA8n1JkFb7sTge",
  "key40": "5J115tQ22RT7kbRKaHMTsdo1kcdiMEysjLA68iLcaew5k3ZB1YY1yF1F7zH5UeYxEbq81F1MyE8jFwqy3CzmS4jo",
  "key41": "26s6wpopRNVL5rBVkApPuB7CBpFfB9rVCjtU9Q6diqwUPYTh1miVTPLMAfuM9paQY3cUKkZBYbw5YhVytQ89WKwi",
  "key42": "4hm9VTwVr1A1CF8BtvycwFAHqEQiHCqWTB5zcrEYdTM7QyjdGPXa2CSeEMQLyH313ZT3bAcCoZLC7b9Ltf1kN7WF",
  "key43": "5qjMj9o5zdQHzFLbvossdNCSGSTzkaqeE7b8mPQvewb85KmCw4Mn71Pyk38SAcPX2uLJW58A55uBzWvqpBpGAvaU",
  "key44": "23q16WPFQCUmymmELQfDLYg2JyzsNbiKPfEBf1tBFTkZB7bsadE6nm8Kw1uPTXNfYf1EsaEQbz6DWyteZE8BsKgk",
  "key45": "3aPVipbbPLpJp5cUm5Ae2tA876eqC464kexBymCiuDvsqyGXXNRKmw1Xtxrx5wimF44U8V2wP9HJiLtzSaNF5Q7K",
  "key46": "347Efjqypz7ogp7TJpydFrXt73Lkg1MtTZdL8Z8koTbgWrb9US1FHa3Na3hfMPhbCcRt261G9FBaLNDBB34bxZiS"
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
