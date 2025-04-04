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
    "4jTnotvZLfyka2ETNApH6B16pvB3uv2KGFngYB7ccGD188uJeMy5KTcxDN7unTAiu1hHeyoe3pBEeVk2Nk5T2s1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XYCaxYn55gSuzYi1qaKQzAWf89SY18rVNGohxJp7HHoH6VWgEpuRzwAFgdhFNWDifUcZL7pM2ZrXkiNbNr5qsnv",
  "key1": "VLqwM3hKqkWu8vyUasdfCuKWT5CyVNbdHLKjgYky9xPwj4wRyB1vDt7b48AtsP7RRPDF6qrB7CPLVewprW8sdtg",
  "key2": "5LwVw3JEHZZEij7mFw4hWRxiZQv1bYHKox3njocGLVPq4NDsfvjhvVLTdFHiWeTiTkuzTMCu4XKupV7MPNpt7253",
  "key3": "4haHLfAkt1PZzbxoYkT3tuZZfrBUHYWfNRdMX4w4MK2BqiyeQ1YxSZ8ew7wchaydpXRNG87VM2zQhvnvdnuZaocT",
  "key4": "26WwXXcSi2vUrSEpwtZjpS4LXuvfJN3Edb7YJ4UZC2dCro6kFBwy9PqZ3ZZPsMno1rMrjsoHJRXF4Jntn2XsUxG2",
  "key5": "5rpFfqGhj1k23wWvFPmFTcjftdNyh76M2zab2Jo1z4ppVTqjhMJHwr55fKRYqR86JRycb1UVWD2xZidX5rZ6pgNu",
  "key6": "47tV1jrH4SHTC1e3rp46pPsQ6u36tL2ET2oj59z3KmYZrfxTVs7E6U38x5AA8wMuGTUgDJxG8yGujAQQqWfkpjUg",
  "key7": "3EB6n8X1C9tbPMicxwzjwXwYmyom1FLr7yvbqehKBA7tq8SKkHAhPQeNZRhKAgZSJVm3V6EaZCDryXP6Y73B2vUj",
  "key8": "4XNdbytpXC8fHe44ZSyD7PP7FypKTRo1aHrhDCDiEyFCeo13hY4PMm4aC4eXn4ZJaLkeroVY2WVXYqmueTSk9Wab",
  "key9": "BiNvLsyiYVLRv4JqV654zy9Z632wjhXr5E4nrhZZ9L2RbqK8z1w7WvYfd9C3y6onqTKPgAypYDxT42QpWUvTCyA",
  "key10": "3RQE3m6g9BpmyQdGxpHsBbyodtQcERvT1GY9YDvLKy8sx2L31HHRwdupAM4T3ztLzyPy1f3CV3nCSLNz9RWFgWx9",
  "key11": "3iv8uUeVLKwUfRDGKHXqRsLQKYhVb25GEhqtE6qj6YMFuFtpRhLKxn4iwEgJNXv6zG8HJAqmGNXJsYfdsWktGd2T",
  "key12": "2ajkyfhWgSVVXiP2Z8JFaMcWTBNpkTScw7SStdUzZGMZzDW1DhdvSDLgWeqooSx67fWLz3oae6DZirkZVkL5fjSK",
  "key13": "28oEhPxJzXCJu2VA67CeXLsSwEEZkXPU9QfeoWjC7eg3P2gcFpaqYuS2XEcVeWiDf78LoZsqazQEtuPHS5WG4thD",
  "key14": "3unU78kuRCk9QqHRbpRToNzGRsBocAx1eGnee3dnDngB3jVjndapdCWw8CUeLqLtMsVfqzJ4gjNxLRVEWWP5Z9YM",
  "key15": "gvABWwXweVbZ5Wntuea1WbpLUP8umnPUFUkRJFnkpFf5Yh2kSa96qB7v8vo5XsbDHj4Gk7kkutSkeGrQHRrU7Y7",
  "key16": "5dAvQwVNQD9Jtx7e1oBvuv8kW4gxWH8Q8JFerkaTkXE9ENH73qgzHtjWrSu3QUJf72vnZRNfj52Xnoyzj47dteUh",
  "key17": "2DkuRm2FW1tVNY3bqKWe53qrNLv7eHS1GqSvdzvUE4gDKzbM5o6TJ4w8fSrqGCbeJTPTLEgEcqfk3RxCE7diZxhU",
  "key18": "326G4mMJo3MA6wm6N2JrhQAQYcyC44t98WbbZTNTmoe3ni8HyLWXJjUozL8SjppbjZSdFqqoUjbDy7ujtJXwqxgt",
  "key19": "nUSM6rdCYECz6TExPzBPacevhsr1FnCzTcpBvjKN3h5WaPb4kgprZoLavpGpm6TJ1SvS6PFURM57BxabkuWd2Eq",
  "key20": "4uXXb9uaiBT48JU6c8zyWrQrKZXuzPTwCnM8CTpUBL8cqz9D8pmprU5AkUGkMVvHChnS6TmtMwW4n6FGqHDChNdh",
  "key21": "4fm2SihVfcHdEnrx5MgTHxXoKkmDuWAdi9VudMgPgNHC8Dq1w8WPz6qWY79Vq1ydbkQ73CCPF4Gog9u9dzf6BoqV",
  "key22": "365qxNcTpKtzJAzx2quPL65Gqwew1KL9Xc3sz6MKJbpQeK6M77q1qvGfXG3xEnuazGFtScDW6aY3K8C59HgcbMQx",
  "key23": "TbgfNXwLawiDCkoo8YM1UnmpinkCzhx65weQJjnbmLsXzogGhTMSKq7Zfi2pBVARQ27J5RC9tJJaesrduD72DRt",
  "key24": "3dR6TNZBVhtoj4JxkwNfo6GXF2B9FpGQmirM9whLCNeWexn4rWRmJddCtrgMrm8PxBVbXDmNnH1qXitghbZeFFLW",
  "key25": "49bpa23KAY4wjw8c5R7Cc4h74bew1PnYNfN9T1ubXRqhLbG4SnhwhkZA1ptjjFY3cyWsnmBamtPzGFdG7gExK9UZ",
  "key26": "7uUv9i7ZYh5iuddZhYsMjtU9PkFUpzfFKk13LtM5HTwuGkwvMrmfw1DFCcNQg16UjH6bVBCGwFu6STv9H5wKZHn",
  "key27": "2V4pi6jBgyzWsHmHdvyE7CU61MU2hnNmjEVn68VH1JWPyjuDgZJcLgJJKFc2QzXoANzNxBJFPUtkVpVHAxL9zhAG",
  "key28": "4vcc1ASocw71ybprwFfFg2y8JacxF5trBicVmj7CJLDWNStvViyQV9KEtGfeQesNhJ4uhyeZE4h777HqKG5FPWp7",
  "key29": "3Gbskth4kmHVoXkmZ9kn9RJisiP9FEKBPK7SRy2Kdeq3bqQNcwRpv2Xsma57fVzZwLW62TbbpYnahfe2UoL5YQNa",
  "key30": "52eAUaydD9iJYnTAwbCpEdC6JPBGfkFEDXC312NKU9qX8SYuF84tK8kGpLRKYaVBgcWzdUKKXiPwoWLeDxjPuYdE",
  "key31": "5bK8uimtKVxKzpiN9rJoGWq5YFRitE9D2XqyDEP1PPokoKoFyXPo6xwDF77jWLWe8bDixqPtLfNJ4mFT5KAetZFi",
  "key32": "4x4o4ihC5nT43gg3gokXCMfPCChbcP17UwytpMg8gMqhmqvwRRmC7TudUPQmfHTCrRiaVdkz9jTmouHqehUZHQeN",
  "key33": "2QmnYjXsRLCbcpQmSnPsiFfRGQEH7izCJ842wqN4byLzD2FnoQjPAuDCMSD6gbhvaDj8nb7mDwigkLYNXGtChngm",
  "key34": "2cpDd3BEm2RBLv1hmA3axJukJk7zxUfZiWkBXTUEhbwDxSbM1U55fYpeBgwBoZHTMZG297o6RtLCM4xxvfGuH6Na",
  "key35": "5JbGr2gvV6hEAmbsk3jRnVC9jdEXhbzxL387LPJzVys9pu8A2dJpDJgw3niMcdW8JNL1SnTd51vvJyShJj6vDKLP",
  "key36": "4fpQBV5TSiCtcA1fanEWfUoysPgTvF1vLQDxQDUoCihdFevtaxfWQDTtZ9kxm2CErhXYnqx66bgm3bqzviFpvnJx",
  "key37": "2Qers5YaeNXbrG8mx1XSQZtPMFrKY9J2AfvAUArkvXMRudki5vcnsjXis2wcmyeteVkTJbRGNp9x4YLgVT4zAkUu",
  "key38": "2NhMyNDo9G1mWeriVHFJiwNXe9nKwof3Tk3nNBLahYJ2SwEFpfeZ9hMquziwbMKg1DxCDZZGVaBhP2z4uc3HHgMZ",
  "key39": "KnEigzXY1CeRrUrBMEa3zvsmPYj79PQrwLeJXiUKb1r8sGGw5fgVzoE921TZoTF1pJN4w6PbdqtZ38JagvvQJty",
  "key40": "3n6A97zzf7PJqP2HESH1QCdfHJ2syhYwc2mLbHhyG7zE5pt8S5FZnBYAR91dtEsbDoa2zo8PBQMwC6X7NoQwQfi7",
  "key41": "5etkFoWwtsh1mSvQW95hj6JxLHBFW7KFw82bv7j8hixHFLgbj7pcJ8NaodMYFaKaRedtwMqJmUCpR8M64gyW8YTz",
  "key42": "2dPiC7uaeXMmS2pyhcXX3LAFnZuQVi6DsbGeJZNUKPr5zYjJvDSXkB6YDWxaohqeTvAaNk9Q1sbU9Xy5afcx1trp",
  "key43": "2Ps7KirCSStnRSHAafQ5GyksjpLoFEmcvXthHbZgGVojNh1zYxdSPHxxLxZTomdAtgKXr5gLw6yNmYkCbeZNwcsu",
  "key44": "53rMvYZjYaWiUHB2VeozuTKbrbLhgNaEU3BpWQaMziwKdTt4GkBRtt5VGxQfWQX653EqXb76Tt64avMvg8PR5EBR",
  "key45": "551onjt2E36rm7TmRJeLkXvdWBLJBGvSgCZESqKFxDDPUzb1TSWczCejcGM5oaiYnh2zbSUT3r3YTEkqmuPzubRA"
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
