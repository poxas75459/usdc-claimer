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
    "4wcXXojySNTAnLxg6BssF51J6nX2kdD1dfLHwyzqjdbH7QsXRn7LfXCxhrx4oxsZAdeviqVGjZFz9vNnVshzMsY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UgPTrdZ1fHVXDmMZKhBCmPG2kWemkRSZjmc2PQo7FnrqLo4DugrZqKhNPUVurSgwd23PMB5ZqGpzHBLBqpUxb7N",
  "key1": "4XaNqwgbHDqEbNgTHVssdqWd3xd5DgvYoBMJAau9j8Lr1y5PNFzkor2N7DH8xfzCSM8JaPaQKFNasxBFuSfwQ4DY",
  "key2": "5gFzyREyKEznwTp55iPnbcGfmtCFd5HWSe6iA72HeVnZ9Be2i1pshRAAUjMAQHQUaKcAHrTHAYzMs487aHneTUZ2",
  "key3": "4Lm9oWfS8UM3eQ3eFXTwL7iTAd9WxtKdpjNXGWSznddXbTkRXNB2sEAmRCgdvMoWr4nwxjwYK2f664YQMZakjoXF",
  "key4": "5JWajjvASjciZQ7rQMg5MVdNZzNthq3mkKpJZCPufYZjpBXuAYY861dzxfKpokSZKNHtYYaRVVwwRYSejVmKNWwe",
  "key5": "2QPh8XDw4YxEufTvm9GNhvpN4nLpqwcpmRKykZFVajMLiM5ExjSHf2pqyfuuRyLT6FgrrpZurPGXoJtUYRfHNoc8",
  "key6": "33YV3EBKrCRNFQdFR1YvpAuF8iQKdF16m3kVpGjWQWQnsTyhZMR6yWbsmcsT2CKtqtvmGYhmJ3Dv9a5Kisw52jTH",
  "key7": "295BmySKYpRWqgXiMT9UnqG2xMLgc2p13WkVf9m3zTnwbBtWqAwMwXyayBdsbcsvER87vWvXVtFhy5kFo1VaR4q3",
  "key8": "2o8tVc8AHByYxJsBuTnezHv4MZWgQTuPom6jtjnKG7nmkUneBXFGHP5DGPPJxc4ek7hBrdRHwA4Hse2EbPP5ZpKW",
  "key9": "2ewLhzS23R7HbEd37fyJ7egTM89C9AoZj5wmP2rtLM3UkAUmyMd59BMgsLcH9jvUoCsE9afaKy1XiALWSSXXh5Ss",
  "key10": "2QoNc6Q1savNgT82nQB32BFC3FMaZRe7WUaCXFD8HBXpMKPSdhUB4nC1LxyzhV35nLiQ5ZqD5WprUKWYsqZmkMjh",
  "key11": "3LtoQGZ3QMiDv16FHHpMsiXoJzee19rLQnCyusdq8qBerVBr79wufw8Mg51ZuZRQZMWTw79re6jo8LY16LHMTqox",
  "key12": "5fkZKkMkRW3bCPsahMjYowB7pLpjLigYAm6dFiK9ngX8FRPFYkULb3qX8VMvQbtTwJNZqCp5vShddi53pcMxQg5Z",
  "key13": "4u2qT78TPiDWiBm1suN8wLhLHuNUjxaFjgjrFyuv9fsuLgF9MbpAH2jGm2DsNLjAjqUaTsVSBsaSN2cpFAQsPayt",
  "key14": "h4YJRgtQ8XFK4ZaN8er8fkPibqezma6wo4B8DEVyebAabHeeMrpd3X8Kv8cebFiHCjzXDASgbj8JisWDvvbwGFt",
  "key15": "57gFtVmje7D816T2ZuD5FXGhKmBn4Dc85hfRvgMuUdrJQAFgz44gxfPkh5SsxByxdXjrTeWAA2o7hCYVLm5PAq4b",
  "key16": "4j6xuMN9Rfd8jThPMwJinUVvFc7KNESyHurMcvyRVwzv1nWcpcEnwBM2c2y9y6EvLgY16ehVjdNFZMZs29skhZvD",
  "key17": "GL16P6ukbxHEf4srbPcRgg6dZbJxBTjF9DjjfrAryvWn4kZQfbydeYSTL1keR5p6tLCHtcJ95gSxcWd7QTGu8Mj",
  "key18": "2R4xAcxZAdnS2qx5VqTyfD5hv8JaLFWkuWSir931kRNBt6EmRAJiPnpuFsLVyTyHuizWQY1597mTRwEGrgGXL4Vq",
  "key19": "42ui1z4kR9v7tXnRYjhWrcYNvMJAWMqiGB2b3dCLy93z4pzW4yjghH5rFJAnwRXicsV8x9T4gr7XAv8ZTd4j7uYQ",
  "key20": "2zvGQHzVX6Pg3y4H4TCiJdfY62AZY8XHqEDus8XbQRXHzA85NmC96Duw4xdFBaM56SQYy5jJRCi6Mg6FyFgSNHL5",
  "key21": "35Td5fLkvSHaYYZA1Et7HDoqF7TetXAHqnWy7qUWBBLH6vnqqAUenZhA7susosGyVx8kFgbcdp8i5Gimd74QvEWp",
  "key22": "4VWA8Bf98byshdag9Ema6nX9kTfqASrpae3gFFZJmkBqr3GfY6JsX8AZcmQUJwvD26h2LpMyQrj3aAq5rENTgVo7",
  "key23": "2M3WwxcNzTeUM5T9RC5YoEtZWyUenyZYa8ha61AU6ZwrxCWZ9u58Yais1TeBUPhTGDpWRcaC9DvHxE3JnZqC6G96",
  "key24": "2wj5wM4qGAAkSuES27db771EGR4Ydfs3nfoBpFTjPErm7gMDQ85xKZFN4HHMuzRtyPaS4YtBTgtYMthfvjfeMJNn",
  "key25": "ZENEmp6jCaDZ3gSbGEYgKzTHhggAxtMs2TNULBD4hfQgsh5D4RDejQmEEE6tseerRSKi8DYtXhnJRnChfViJfMG",
  "key26": "4GXvyZGhg29tjnRYZ1NVftxK7eTMKGN5oHbsCrWwXkZVa3zPfx9omAbvBEzi3VWjhmW64u3JjZAawyzqfo72DF9J",
  "key27": "2M7ey59VzVpseAcHK3cv6s2PHYp1dE4GbgCEUwrCnawAwo8s3KLEzPpbNKY8Z7QZud3H2xj9F5pnpvfQAUT1sg9R",
  "key28": "5maoqS6ciNxB5HYHn1oGGMwd1Xev6h6ANmgEA5FgcVAPvtQs1CrkMjM9R2VgGKePHHRpYVQNUGdBcpzHaE1UUdQw",
  "key29": "pEGN1z9TymnYtnZbj2yeYGyVhx8PJspVTSkwXnw61JiRyeZWEVkPpcMAFmbLkq62fUqNQhTGtSvZonLwMpANk52",
  "key30": "2t7arBhzFmDF3aX2DhLKdkAeWKfo1MYC3bTYMExJKcg7Bu1fLNRzqBVs4JFHfTcRoJwdLFsmxqwbQwFJA5pXiwPu",
  "key31": "3To4i5sTaaV4rGzBSkyjsLsrWQGnZiYG12wcfxf5VAkVgrQtgsi5T1FiDDr7ncd4P9jktWSYpK8JmLk9jTZkaNWa",
  "key32": "3H5y29TQXi3eYxFE2Zo2mUnmqNBpsRmvW3bDXMFStVEaTWBYx8W8RhudGUQeHiEBB3JFcrCkVW6WuyQ3rZmkqRan",
  "key33": "3XXhoMQNRmmezEv2f583ExbkTgg9G2QKMVJNHhnTrBpSQGzCGpY7hmexBhwUe6eL8jiY2dKqVi5cd9SgYJwrNPfh",
  "key34": "dDHjuWvsAdK3B4ZP4BdKxJXntGCc6dyYAWmT5drt1PnacsN7HmhdNAjvZ3Ti7A8izZD34wLKSXRcTEMovMnMM7N",
  "key35": "4tRzTcCv7v8iXWVbWDaEPoBth9pUaqXNseXQQR9DUq7FW8ANTi86ffWjybR8rF8gj4JfV2Vw6Yxo42JfYQxiWJQ",
  "key36": "4uLD9yBAv3vE1ziaJzBxz76e39MKpi8UG4V8HMfYiG3q4SxkXX8PgfbxtGJcGp9p3hGCfFbWxB3pSCrf55KU88C4",
  "key37": "36YqnnWgXwzpALmKdGgWurYur5znKvM53XZV1YvKybPrsG4eaz5xKe4H4AXdzYuCyDDdNc1wmRxChXsCpvaREDDe",
  "key38": "5vViN5rduCZdAD39SNhw7pwPHUf96GDN27dwywCWKNtV8jDH1KBKMhb2Uc3WiJYrRMm3veMBZfjri8SmcYWEUauB",
  "key39": "57Ms13sJEVpGoCqnUJNU38Lotec7BeLyWbybfq7A7wz2YZE6gu962aW5zKei5kpwbAt9tdwgqLJGTqsyyzkVEKrJ",
  "key40": "4QVaDe66rGSL61m112mqevb5BMnAHxmYGtiVxwbvKWnft98yQ7JtE1mGtBKgwD9Asz1ANHkXyY4RQ5KNVdaoXHcX",
  "key41": "4XCy3u3dUB5zDRjkr5mtbS3ynwwYdg9sFB9XhrYeg2BRSW6kL7BG3uEjXpvDDR2b5ZeC9UcbKjABCJiro5kNkgLD",
  "key42": "3DrnCu2iVWfymzQqyYDAkUdDDPn4giBGyxX1d5oSjwJe3XEvFRJVBoeek2gA665mWQC2AfoqpsVd2WECPw1TJTvn",
  "key43": "51jzhaTWH72BzAyUbRHQfrNfzqh55jnp2hq3MeRwaSFtzriPgGmAsKiqDUHEFqW7KUCdZwZd4NBHLgMihovavssy",
  "key44": "37LvdcaTrgAZUu9hFiQT2EqTv3JPWAK9pWVjaiEqJYfnSuvakHLsTPf2moN1NqU81vkNnvEU9F2WkTXkFgWoHXLF",
  "key45": "3sJtnytKarTsz1tjy9KafmGbdgocQEZWYNYGCk7u1wYYaL2cpPP8jL2EnSxCd4RkN1FKCKZr758yd4o2qNuJn9s6",
  "key46": "2PZcMHLWeTtRVsw39xN4skgoJEugktfVeYQbJwYx66hwxVdRaPZUju1Ji65bbNUQbwyg6xkAg1rNYYk9cbyLVA98",
  "key47": "VAT1jrpmPiEpm7eKANwZhFNbtFP4eo7eT8VVUctC2R1Yn3fqTNUuiFTd6Fkawus4dWjuqiGstZQdimf3bVp38k9",
  "key48": "5MxLXoduRC4CpGQZACXmpzX2A6uXnDRhxDUQbW34maqkj3BE3papEEuJMBPBiCcyp3xPbdbtvVQVak164KAwDz63"
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
