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
    "s2Z9uSzETFtBeFYEQwq4SNqTsVviMu7JuXEEKafTdhmjTCV6Vxtf7WruewCtJj57pPk7Aopbp8dMtYsf4KZpm1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28RJk942gADxs5UDF8ZU1GnT1c7K42vQnsmdQ4euVTMuVgGXs3cyju3P29ifngwNegz3NyCWKQyCvJsknfHLRDWx",
  "key1": "4puiojVT2Ly6EZ9BUagTVSrn7Hs2LHPvZER2a64VRCvswp47Yzki6BcAegNjdYdCLeTWGK5vbRTWaZhS5NGzd5vJ",
  "key2": "121xz43w5LsPC62UL6DcVtwzyUbLEQgW5JsY1hXnxK37kvLFWZwmCEtsYamsG7a4dqDPD1qJYDk4zPzGYtUKQigc",
  "key3": "35sT3J34cyhUdbKj2LwHu41aSiAjKm2HMTA8scwBbJF8qt9pQFdKYts8HWonkniLQsJTNW4b3oVJLadkZj7oLCWj",
  "key4": "yBH3duXGhWwKdWAvgvPdtqdxvQmmhSqjzkBq8SVV5pgSyKyGmtQHA3vdW3LAAyhdx2y1jRfB4FeorL8dbEzJwFB",
  "key5": "2B8i5s3m4qWHK1MMfbBkdGA5KF7syMLqM9HcCrLe3Eo4qun4FsBHzBgrkMBW1LHKoYgDUfb1hAohipfvZug2wXVh",
  "key6": "5YvhRnP1qUks9gKnCJPys34Uw8EU48Uu6QP84WwiwSTt87QWs9G3STkPzFXG5Zwdwq2d41whU7PQn7EAMaAZ6t7T",
  "key7": "NLRRZu6ZpMCyt9Ndsf8Hy49pyqFiEC5FCG7X1NQcNLxq4unGnwXSh7EYYVQY3PYt7yujUDgcgwiAx5HUJHVPig4",
  "key8": "58QK515nner7Fcn5XCWqqPEPj5XtA92HCL6xLWPzHqZbwbRMatuTqzEdvdznCwnMeJbqKWuNPofg8nhUaWGCLo3U",
  "key9": "44WBb8iwhgkX5eDoi5zKgGywVaTEHJ1QsCVsj8qGCp1VSb9W8BSJtaeC3npL1divKxiWnxNSqUSyUtBdWN2SLFH3",
  "key10": "2if9o1pGPSPdfhRDEmEbh3xYFtiNJj9SVDughppCoiis4ENboybuqNSR2WG6gueHSRfwrt4CvdSuaDSzRjUKSHZn",
  "key11": "4wTH7csKHxNRyPF8KVbPKujthRw4KkCWwm57WMjm2WkwbSd2RFbYUNrCE1i2zVWpd45RvdFL1ZRTc9rv86QYhNaR",
  "key12": "2ZYdDnQCmhero2UiTmYmHJdPLkWac3T77mdYDSUnHJcupVe58S9tGU5AktiLargSYPzFptNxq4mxKLtA1vKBkW8C",
  "key13": "2X8N8GzxgS3AhycXauPdEx8yZFmgVga9UbWbHqcKaSNo5NLUv83KHPWNoBYgZ1ECRVuCKzHjQJAmXxxHNJgMTvA",
  "key14": "QioatsgWSsftLw11uXtLbQpmzR2Zd59FTYqi7GSmUHoBN1GGRdDuZfMALfLFtFD1BhBsiE2Mo17fza5sBrHsg59",
  "key15": "28NeCXyZrni8UMYaCisa3D5zTabanUWY8rzV1nxAswZJWKEkhHFYaejMrn4iCd71EE4R2DMCPTpU5fixNMnPeGqV",
  "key16": "2yERy38K7M8AES1WznLWrajcxvo51uYoiWCsUUTYo2sAHhqMMgcoVwirbtfCw6LrQXA1jjEVufxrjxp78dfwt7sx",
  "key17": "UggfWebG7uFr5DQJUNn8LAZobMNyLqCp9BYNpT4Uzp15zUoBDFcEVnfiYQneFu3kigDU2q3CQkLyufTMLyFKBc2",
  "key18": "S5MGed7CftQXLuDwoN4ixemKWKT8D9mkUbMwJf4cBC1N3HAGY8FUmcCuw2aWYoGMEQgHFggRczuhPrwzjJw222r",
  "key19": "YvmxYPqmVWGCeHhDxxpbP44fpeSJPytjxmLhuSneWk8gX8uRRJq5svuaZDVCNKULLG1qUwKjuScepE7xxz4hKhQ",
  "key20": "4JFdCRQ4Ry7zsZYJS3c7QZF1hh7YUDdMm5Vft5yQ5D8yvW6GkQzonBz8C9GRrR5xkMGs6px5ShpkG1CRy5Fb6QP7",
  "key21": "FZaFU8JKQKy75RNSQeMQsLTcSKVuqbFdHPfoT6g5jJqCD5b4NrCiwkgDQ7Mdq4Zo8N5pDb492xjd7nT2r7QNTLg",
  "key22": "AC1ue5vPyDFm61qdsDaZWbWNDbkQ81KhVxqBoVtHPcf5j6C6DNAXNYXkMTBQ4VnPC9dyngxpkP2BJyQEU9aUz6Z",
  "key23": "63Ue4o7PYiQd3pae5Yw85HyEsyyWuf7X8J1rjLtKVmypwjyk5RUYSJ3jztED86DBGbSu97vcyGg2JnxxGspSJUPY",
  "key24": "2WnUNQgW4vfVtgHVF2sj5taUrs12a1vwSzQvL3Xtuirq9J6VPrnEKnGHqzt5mUJXWZw5Lc3AJAJ8YbGHpxtkxKyd",
  "key25": "39brWfvziz8y9GPgP4rEYBFXzodfRXt9PtWFMLZaavQNK2brJEbsSm7QPWszkut7fjnaRGY788r2xXGbnp1DVzPf",
  "key26": "3Y9v1fhxh1QwUdnTv1NzQdormGwMsbtygWkxuPAa2fwEMS9CkgX3tWBFyZN9wU9JjgojT4fSGH5h93m6o6UPxKUE",
  "key27": "i3NivwE8VXw7pqVXTFS1waGUuzgDZ6Hws8C8ZYPe87mzqpH6SkmtRz5E4TYQkQS3w9NLwGLENZQmpxw6xxZNwN2",
  "key28": "5FBLW9xWHchjdeiqcBMSCHqr5uJG7gYX7BRjGBLRmHX9ysS2Muot4LMmxNjszKg3tY9Q1pK1NCK2edyLnjF4ab26",
  "key29": "Jf3d9CyydfjosY5By5GXckeBuBeRA5EFLzzCddhbMZenUaQDZExRjJ6oyfCRR6adyFuFX3tGWBLLRcJ4XrMGBPv",
  "key30": "2QoD1NemJiY7sTBqEoCGemSta5L8bssTpdH2hUrtcs7uDHXyDtCQ4WNe19tMDnSWn9z6bi8nDacGTbJ1HUUeLw5C",
  "key31": "3hDLhtXEHnV7aEdPLtwssAW8sw6JZBH6SHJeBun9DXusTXJ9ZCvRsXcuWDa3xtBmFbL2VPRrNMNkmyyjTPKwdTFY",
  "key32": "5frJxWHnZVgU5smutBxKr3B8Yag5qsroA94a4ZtYW2suAvKYrLh7EGW7drEmWzL54WgueuqsXLqPYH3aMo2AuKwy",
  "key33": "31TFkoPWv66vvTo6MYMgfXeovsJgUj6gH4hMif73VhppqeG9yKWaCZRA4ERTdnv9yJmJrj5R2ipY3szyeqgebtPH",
  "key34": "33VWuPUCzmZV2WG1ftzqEg5BVbHu8dvb5LM7araez7bxU4Df1GCVkKBVa7gHueYNm1hMNj8yuEwCWDpM4NHq5PBA",
  "key35": "27HPMWHUfUAKpArTWRXXZaZx8CytU37Y4Mr4ELJbAaTXQeKWieDqyszJ54hsGA83kF1JSiq4eVTJgBRfsCMrpLnF",
  "key36": "4WPt6rPQjyVPi882MhTiqihMqgnYmQppUPth2DwuVBF6B7c9KDy3qyMsRTd3hCZxc94DewRvnSxivRujW5mcXStM",
  "key37": "3Jo5p61F5kNQPhp8L8YeDKiW52sPLUxoxWmuzKskymrtQ76tFKMQPJ4UkEaBS3crEtjW8ijks5Pp1APFViRSCx4Z",
  "key38": "42eboYy5TgDPFZZoMwY6p4wWa7HtbQbqqGm1Y8azwktys85bvZzQwWfxsBXmi6BLdtbFySHmcNZiNACcskaqjSxe",
  "key39": "4U21PRvhQMwToDNALDky7m8SUKgUzdRbCRseksYnv5418cyJRupVX3a4Z17VDXZXmk2dDwtnqVxc834MTFVQZM25",
  "key40": "2YS9nsBU7QtiiWZsvEQpipZJwapyizZQsGgVd97J3JXDGbNQLKmsQ8mPCVapQau7oJwGBc7NRN8jeLDKuPTv6tYW",
  "key41": "4FkEbhitpeTggyH6UTYNEUEsYtig6hCF8H5cUGPSuHHjXNuuC51Hk9r5DXRetkGT7V6zJoJxe9pFkH8QYqni18ZU",
  "key42": "2hnQoCS1ufPJJ7zUngc8A31htDb1b345bZYBzfwvY4ACvxzLgPuGvNEL582avqqJoHwEZs2FSSdpdyku3zfb9E1o",
  "key43": "2oF4YZKLZws43EkXXAqy2SDJEU8ohW3zfKd9uaXTLmWXuL2Z6pJwjq8rHn2qLnNPE9ZBr3GHKTx8N3jwJ4b7mwMU",
  "key44": "3ZH3CCDRY6QcHZk3agmngm8mCr9o2baCNHaQz94UeJg6QJkg3ePr6pTYs76Y1FerXRtUgCRy7k87YVEJqQSSU24H",
  "key45": "597FJyuMvHGqKFZFSnvDV9ULea3RmZseeGHyVAk9KRR2QkR6a1puUwmaqUjTcf29KWF8feYTv1rKxZ64wWQxSS4v",
  "key46": "3tixCZutPEmTJQvx9foxLi3RUoXPYuTVzKkJTkGpZpD1VCn3cSgYKCnkxzefRz1ym4Vi441u4j6DoD2AGTJbQbau",
  "key47": "5p4BHTLM9XwmbK35KJqwUSCSu5yqq3BekRMcN3zoS4B1xkqiJ8WszUJ33JgXAhcsXRExN7X5WFwrnPNkUD14YKWi"
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
