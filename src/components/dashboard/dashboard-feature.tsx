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
    "2bFPUt9CQHUbB2MJMyBjyN9qjsfBWX4V6w9gSULvsr4SxdEqKesWUSTMWt5qXE1n6aFRFZiQ4dN5gSKv9hHGL4xS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1iD6teUKqBV2rkonuzeNuWfJdPdCzZozME6SekopZsmAi3pC4ET6TbcdktcH3L117qRpAwB7hrDeibtQopv9wM",
  "key1": "4jJT72DzY7G9mFTrLDc6UwwG6F56bjfcmBtsuj41GVahUhQZGPHR25GFq4gSWebq4XNy6yGJZ73Xr2JA4UEN8N2E",
  "key2": "2m3mou6d7BrBUCKZtC6oL2vWEuVr6KPgDr5Mmf1ZbbCxY7vSwqRicM6gFDahpGBYyYd9kAvb2F8cDu7bMCBZkLgN",
  "key3": "64EMPgUvvpvnuSHLxpaoPo7CHwUPXVy1trHSD7KbWTXZKFxmhGJFPpoP9mrJkr2GZaHFGtviKsFEP17dfMh2fPyC",
  "key4": "aFpN2amoJgYYqJvKVvGeRQRUJq1rBqgET6G748ZG5kE93XyKT7u2dcL4aHByAKuPkFqPE41TqQmEKff1muAKgbT",
  "key5": "4AQ41Yh2cW2Mg1xGdtJosmT3TqxCTW2uCjcLRpqVrtf5T4KfcdAHZ8ifEtadioMedgBgaMVVJoxxsGEZRahfCzXo",
  "key6": "41BeSUC85MWrtSxdnXhyFiaKtrePyNCM7b3bxkSbQJAh1hgh5csUFEji2SduU6LF5U8Gr5UZ1kJmYuWQwJse33p2",
  "key7": "9jY2y9JtrYwYdJ6rqnNoL7gUEM2JYKnF1AwTecttdGm9ZnzSMg3rB1F8qaQDbBzQjL6dafs7vZNtcm8F6ZKPMX8",
  "key8": "5etWRc9GqAY4LKGWsxjebfgXyX5p6CYsQXcGnzZcqeKnfFzscuusDMWj3qHQbmMFTgHPUyK4aAFwZ9Apj7AwPA8P",
  "key9": "2ykx73HUCjRCqhK2Vxbf842aLL8sAJAGfsyrTGoK5MsEXc9bfbrG3JTYWkgNESnwoEx2xL75p1hEj7sbZnEokTe4",
  "key10": "3uWWotCrtf8b2SXM1aLeHXA4SuTrhexXvQFgNnFvuW8P4sncKWyvYEXPu9Zoh7vPgJW3QYuemihu5L5Mtdi5tN2B",
  "key11": "52BKj4Rk4YYb8F1hGEUZeEux6goxbSrPjwgciogdckrz6MeNtnEZR84m4KReKtwckgg2xicuCFc8rZb4m2A6YLB2",
  "key12": "34993Qsk1crAkiJVFKXLgZhbBZqWtKmX9xbW4tR3qVHRtMkp7Tgh7DAk5mYKYLto5PDNZzowc4y6NLFJ8LbBw8vk",
  "key13": "kUAaXeotKwmYm38kqmusmnSD9joFDH28vo1xL8xYiJtNq6fdw5mapSd2eSaa6B5p89dQFNueAJ48yzBEGY3Sfpr",
  "key14": "dUT5gbCJKrCWVaWtiVjNwMb3twTa26odbJdzqVGnQoF6GHohjS5LMGQtK2mMzTjZ3uZbAyTfcg4neq3qZjUKKW7",
  "key15": "2sGeA58gR7STMoAPeXD7bZE43bz9Ga5C4UGBXAvSbFzTpAoPzvXAvzh7GYztmSrEuAVvnqvdvwkSscjd73PPK397",
  "key16": "5wuFGJ68VLg2MLFZhZVC3ujQhDU77ifhie55U3YNrH239SU6pRt4wfd6fFrch6JFJczdiuaa8VVLMdGt3vJtEzff",
  "key17": "Wm27bNpSdCHduLb5Rqdru4GbYDiijmnGTC6XkwE923224evkFNMjAJXwKgQDHo1eUDWvMgzSBiFWYUwi13iAdoR",
  "key18": "58SRPLtWRaCjYUpuGkYRuyjqTjRL8764rBb6Amq3dNQz2B7etPH4PYLmrfjgmmjqHgLJd5sM6dxarYhBzaa51q8R",
  "key19": "5QigFV1RrqHKKeF7ywBX88hcuFUT46kJnegCjnpDRP3pQZ2ZYABMthYCjoWZYcZEZLEhD4XA1oFcTST1pMevKhGL",
  "key20": "K7LboDz1oebivYaSfJv6jg4rwK95jkqBWv6qUW4B6iF9RnopHRZTthsi4hYv3j28CNitwR3on56PGGNNWESVARm",
  "key21": "2XMjMkDLDtphmkoQYJYiRc8j33gi5SvN1Unoqxu5z8RzZT7E8wSCekPCE91rFL2fwW2ibF9yQyrhaPt1DNWAzFas",
  "key22": "5jP3Y9PgpHjgtU2vL8mMo3fFBryx6HHuAr3Yz4rG1WekQgWGFYE3Y8W8VaL8BN2kwHbpkY6JaNxfJ8uSNX3EycN8",
  "key23": "4nkTsu4Ry18B9muAtNJE8Jhr8VTa1ZNqqSZ2BgMB3bAuqcTGNmfTSkQktdfctJoJTQ2r7eF2Qq9BkEsJwR7eY1M9",
  "key24": "3b76BVRYsxVAdBEdMmWHDR3nREN34TBrQ9jG9P1fpqTU1iR6agBEvsVE7L5yVcHvB8i4DShsnpQLtFzC2johJcsb",
  "key25": "5TdUxAaVRqbA1gztTV6Rvqe68BiGY1yB8wRqKm3W4UUgedAhFVVRgf3agW7TGd9V27z82nxw48CztsRcDJmJZekW",
  "key26": "T4CioSiP25zuFGoLxboBDELu3S8fCLQg1UtTpcSKXLGkkRufRWcioL5isNCNW9ErNB688ioioJUGMk8PSDxbw7h",
  "key27": "4jxbnf5dEyzvrR4iHSFVCizPHLjNvqdTLptujD2WtfPPdNWoagUvki3NinujTcg4z7t51H3HMvUaGDwgdZM3A48D",
  "key28": "1WWQy7JvbApgPj1neojW7FnaxnWVdQj2YfeFtqmPnxEpe2UxJ8M1Kus1Tvu2XiJGFPrH6oihxdL14VbwzXPAm5g",
  "key29": "3EmccKtraLUK5cDKKRYu8aavjyJKHEudKrhdnczUSV4xcD4CJKTr8N6FFvpLyCEBBvWnsRf6PCSTzUio9Gembtua",
  "key30": "3MnEToS3FEmA91y6tztXpnkj6YhF4c11WYRWujm1GsGBe4WjEbGve5dEoodBdt6jki8ZDUxDTLrQpUy4jXyKYvHa",
  "key31": "2X49h5RnWzJ6a5QQ6gWLQ2vNY7qhL3gV8M8TnhmjRwpLUsnY7yHMtweX7TJi38ERnCLur83poJgPgqVNeQRib1r3",
  "key32": "4ucAYcriwuFS8z9tE4PWbKiLH3FqoUf6wzuBqbJ4z7hg2Yo6G324js8pZ3MeNiVPpvWRjJe3pnHM7JAdakoEpQJW",
  "key33": "btqwxBfqPnpYiSfUFu7spxuoenEfcsSFbtHVSqSpfVzLuv7iqts7j8DHM7ZTr5iQkzEz6tBXhJe5NM3wY9HJD9Y",
  "key34": "3LokKFPMWi9yAstkmT7bf9ZLhheomxVtj9w2LPUo7WKBLY1WahkypN3wUoY6Lj3gMAGDy4H8aCoai4WcAj5vF51u",
  "key35": "4LeGt4QgqN1hqQXQ8f2Jzk2hZkiR2Jth4pe3VctXUtVybACStLgEWhd76RnQ7psKp4XYZgpdSrMRnaYfMCPYEqZU",
  "key36": "HiBsHRabnrMwBi2TPuKhFpPqDvUqgQhHn48qHjuLDgjAaULqk4e2jxPuuEvDt8pqmBY1r5D5SK66Kv2prpGfZRK",
  "key37": "4pGfC4apsLuu9acetnGoKLTEWgBV2mFFexvnYxFCYkocJExz8RD2pkS4d8MZRHwgCN5roThQkqDjNPMWxvkVzcXS",
  "key38": "2mrUVaLk7HzV169uUUdTuRZiGe3Z3D2t9t9k3PLuAtLjGZihHiqdpcQBAYurztHXUcJiANsJ9q7Sh1xpHEyDo7X1",
  "key39": "2rygZLRDWF16GntTLcbn83U6TeRFyKBYd36HrCPCCP32ds2rGKPuqUgMZnK9uavX2dCu8dpvJGBfYia1QgpP1dVJ",
  "key40": "4HqbhvFXCWgM9MX1krHjpmXoUZ5Uqwp8vJ4Zf8a8M6FP8jAUAEKp9xnMFcBdjSvDpUrFpCpRN9tbDc5W5g6biBt2",
  "key41": "5nxwG44d1xVkkWENNyb6gJD1gfqCiPzj6fQPnwQUpAGUVaKfmHo2sWRGXspSs8NgfJaCmHrNvgAPTGXxtvGkJknT",
  "key42": "4g7XHhLsVuGxVTsELkKaqiqMyf4cjfMPRqKbcNHTRM4rhbgGDcCzUokdwiQB9HbRtAvVPY6ZNuaZtVyoLw4u6Bd6",
  "key43": "2RGdTU4Ub3kKeeVs3CnhUXyZZVUhayjy4hf9WjWWoC6sSe7v1qoyiFHU5ipKUfbt3LQMr5TUB862RkzDY5DY8rYG",
  "key44": "4RCEgrd9C2Whg7n7CQd3VnzG31ANQ6JzGBaL5H5r83M5HpHMJmTZeKkaFim1ZwAFh3wTDnphW8vAAWYQh9qwhWMF",
  "key45": "3wYDd7zfrYfx4VdcqiZAbrzEgFFt9NNHXFnmvkX55KQqdfAhdgGVgz9x87ob43TopGnpDs84otGWT5gasR1v4k2V",
  "key46": "5xLo6zeP3WyAKLbDEpZoYwKgGuXVEoKPaB9HcFG1JX973U2KhUKZNFZGMBqAQ1qhVJgACrgzhqzA5mTQo1icLbeD",
  "key47": "3xCwTKuRv6qsJ6kRbG38oghMkkCKhUvpzXKqNpKJjujLh7Fbi7XzKEqX2YGLLfQ1UG76Y3YnMHzbTbpPpAGWPVBN",
  "key48": "3YwFtSpa5j6zSYi7u3LfoHUWHFbVcnm3Dka3rhhhmXUapKwzQDmtq8bULobtz7axzy4D1DF52UpyYKcdaqx9DAgq",
  "key49": "2LJELrhWKw5z2Coha6WqNXw7iC8jjJX1ZHfMzS8CF6PLSP3Ne3ZwByS3xv91gPbEyTpeBVvZCfaejUyPABwgcxQT"
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
