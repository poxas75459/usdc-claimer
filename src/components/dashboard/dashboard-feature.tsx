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
    "nNadv47GLsJoGvzWVarSQDxA7SrSrf57QJtQMciHDsy1JgLD42xskugEYGgSUYqxHRkAEJJzhohqgT4CyvAUh3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BVhXWuYBvnruAGYWihr1gALy3gcYQZWugC7QevvFZqkX4MHRcfDST8gvv916nL8HNkatggTTziH77VDtq4B6Hcz",
  "key1": "2xvf2oL4KjjESxSB4KBEzN21qLjKxTR37EeYYdjaswUbLoxnraYRC5amysj1EuMNQazeLXMYg8zT5mUmrdRipJs1",
  "key2": "5xNqzGUu2Pe3Jt6DjsvxhygqB4bimZpk2ZYZeiwEFZfq3QMS9bV1Jqfowq9T11RrXCabE2mBtQBL4ZqEAUnjBnQL",
  "key3": "3vfQ9cm29uxXHPGSSG6aQR1GQYpPgPxtrTbvdQuakjAB7F9HDZ5KBAaHLXzLcFCZQ8iKbTBH8g4CBf2kzCAbeUe7",
  "key4": "5KD5fLdQMGw4uuXaeSmdgjRxhvquexf4V1GqRDrUg63jSy4BvbjcNVF4GQoAVq5gbS4ZA778jPjzYmRVgMp3qjU3",
  "key5": "351JLru19hyWBAjkswtvf4vRFEzaFa3B18YEhpNDRxBaQvHcnYE1btH6TVswt7HCt9Hd8AR7BBF2TwFG16aVs2x7",
  "key6": "e295dGk5kVpohpJxu947HuUxd4E3wQwkL2XrqUrLetx3LAzXU2JRJcz8ubC4MAHQq66LShhwfpqHrSmQfKbZQqw",
  "key7": "4pR65TMynPw2qBEbN4UH3pojaGFVkygjtCmrVznkxuntRrBrGniFHZp1kr8ubffg9SqVk49RnvmKjoDqPs6oUtJb",
  "key8": "5jH8iyPBkwP2MgBZ99ciaFwh3D4EudeoKDi95ye9578uq7JAarbTFeybHz4wDf2qnK8NFjEYE7oZvazumZwyV7Hz",
  "key9": "3jGTMYWf3bfjK7fLx6pK6mbd9CaYXYNUg95w3u9imfhHRwbdo87QP8GgXvrJVjffMvcYQFn1SLZPDtnnqw3tLgLn",
  "key10": "48hDZNqFBnojE4iSWn7ZzRukaQFN4hhKLNoQV3sa9iXfUrLmEJyqReFBCtLBwm7aN5DciEvBmAZus991ck62oBiH",
  "key11": "3BWYkZzNayB5DUSEPkVQKwiJajtzFBtxmoNnnBn4YhgKseLiJiYeip53fDxpRbNRS5gxvN1BnYig8HkHtmPKxvsg",
  "key12": "uDaXy2swCmRAYWGjudrf6cNftUW8XC9qjMm4ycpwMbEY2VXng4m5p5vcUDTga7HaUYcvyc4AyaUcnssAEWDhSYk",
  "key13": "4LaABrySzc1MVJeTg5tcTKT4xU2FPfbxFmCjFECbmYM49qb7P77KmcYyFYMB4ZJya9KYm9DsLWUHPXYKBjXX6GXn",
  "key14": "EtJ9SjeuAnLmbmHW6HBKjm6ZcSahcunM9i5iPZ7A7yvFjP5XcebFSx1gzPCdFmDFLHPWA2dCs6EwjjYsdjc3RNk",
  "key15": "5ou1zwv64WZjrNHhj5ztQSzhpofSfgB7nj3VRRAF1haptyba7wS5dRMF89oA3ZKqDKwZ2YzWuPeumHC2V51S9vnJ",
  "key16": "5g4iyktQoiFn4mfw2mkbYNJcxm4fRDZd5ZEcjpwXUQibWZsPPJJdJRkEENMq6Un4uw3t4fuprrFWoZtyZNpkDUot",
  "key17": "649cCqbcSnxMF96Nd6T25zHwHiAGEmB4jw8eRhg5TqnXZsePnUx7FHMgEGLWdix6B5fkBX33PansxyEskFpbQav4",
  "key18": "2beGQ4t1MGNY7AxmjaapKmLFoqsWJKcNuQuchdipALXmY584EMx5gjqHTSDEFJqpPzZgVSvdyp5fGR9BrkQUdDur",
  "key19": "4Dfvzu6Fwtv13od7ioXVZp8uTnebbHLAQUdh6y2pBGmthZ3RJ2NEVUi2R4tz99XFU89iCQL9iTvTuwmCFwRsMzHc",
  "key20": "doq3riEhFSEYNHeczsQ9NbffhikifXtpHFVmmhAZBix4B4yVVJRY9Vrj6YkCDGkqd2QZ9Piryw2urLFDbzeDq5k",
  "key21": "4r9K4trW5XpKkHffF4qgsJrHfxVmc6oLQ9hZYZJhgk4Fb5ZqngoJwjaygGjzrmp72hWcdeiXWC1tVUR8LxK1X3ms",
  "key22": "2X9mE4rr1vaTgcGsF4bMFwr5pY5HtJqyJSqPnx72Wm3UWbek3wnS3XLjbhGyinixMcCjZZeEHbkRDH3vdjraMguv",
  "key23": "UfzuLsD2fsta39KaU5qrFyT4eTAunYXZb5Dpef33CLQgwnno9HDmKbaGqN4fpUorvKPpYwPHmcF1LKVSYDD5oEW",
  "key24": "V85XBDfTn7szxXg7G23vsQ1WRPezsJkeuH3pyDNoyEf1FyGR4vTbfrgrnZaL5ZtfA9uYm9HUBL1cx9YiKJrtRyd",
  "key25": "5xrR3y59vcnMoAKDQK72DxdB544xv8Yv4htiQ9q8rjoMh61qrcaBVhQkouphK6B9RmdtLvRSKxwyAfYrjThgmjSg",
  "key26": "21T9UvPeC8DiikUe1eQnLcFm1BSi4uRvWoP23eMmNExtRemEKdwQeGFrxXsV6mKDSfdzvXUaxTpbboYUToqcEzv6",
  "key27": "4FTKfhYn13bMYFuUpngDCrEfR3kGF8zFBzhi2C1V2xUFYnqsgNaShH8YE4gbSgE22JwCLg3Fk3s9hqTkUELhvhD7",
  "key28": "Du777SXB4SUcAuSPLXuhjAU1pBQ1a8YpTE7jmiT47LnScgXt5neCVK4koRgxrqeSNYgcpAmLw5WJyvnLKNfSex4",
  "key29": "2gzC5PhK1usRqyc8GhsW21kD6guG1eVen8mzu6oSDisW2yBLBfnbb5kCjTpC4sywWUxpk5m2ZzftxQvE5CXCJtEm",
  "key30": "3zmQx41K2f3J3xYrmE3NDDZYDszaTdLwtRoN7JFGyP9r9Rc6vQgf1P2LyNYyHPLG6D7uKhMRkUPC6pun5pTTLdjS",
  "key31": "ZqLrUfyxLAPWPdXeprU1tSSNbr4hrrEtUeAiP8bost8GpWbyEjqBASEX76T3Uq3WFMxKtGqkNyKa7JTQ9v3zDgh",
  "key32": "3B8PXNKQJner1CfkNed7maACX4vfDMEcB14fDmKRKZvH29QmSA3FoumsX3QWK3Tv1dGMH7s9L5szTHYdxmsg7Dp4",
  "key33": "2UrjFQMDCQrFL1jDmuswt6noEQGR8WgtdiGZB2XfHsUE1vHiFLLWUCdZHqBAC2MPTBxT8CQyAsksqFXd9GTyA7nb",
  "key34": "MLMmtM98SxLrNgCNiGdhjCokt3Vaspg13K12jKB19FmtGToHqfRzTeVHPG2gXVvJS21M2tTymCnzF56g8D2jhGU",
  "key35": "G8i78wsUTdcBXFfS5hWgWRd8GMhMZuDdsbwDq1TgzZQJhTqGoTA1XgYuxQecMgcyfge5RXsKLYsj4j3AeTTxWyd",
  "key36": "2rXdviq2e3YjW7LS7LUFopijMGUPurAGsNyAyMQCzj9z1QbGRci9wjSwcRDEwResjuAKptKBPeqSjsdp61cSuGaF",
  "key37": "2tYcrLDJbZQ8fVUKSz12C2537fRHUNZvsTtQe4coRgKYQqE2sMK8TAVbMaPs4kMC9Hr8BPPW8WzxjS4WFrhmjnN",
  "key38": "4q1tcUhPr2M9V8nmzKCZfCg6VeZSYKVVE8DkbMsF3UhwzTZztPNQydF7qgcAotEtZWQPLnxrq2MEoiYorW9us7Tu",
  "key39": "5wAjZV6FKbiNtvQRxLBHVnYBXvY81Rz9SvsB55fw7czp6TGMgwXCifJJpvMs89tkmmk23aCFQPrNbPzs4zYUYMRy",
  "key40": "3fmSHd8ZXr6bfdFMispCxfai8UggJKZGHrd2TW6PbfmC5hH48uhrZYmCCTL5mT5o9sF7e3PqsDQG4et1zyzkNQdE",
  "key41": "jukW98TB15zKXtybFZ2reiQv4MyPwrj4BdUMMJAMF5ZrHUgMCXoxmM3DeQh9QEwvP7wTgSyMsM3auPigQDV2wUp",
  "key42": "4xuZ5KM2QFeEDVuqz4npU34BM3Xe9wnp96mCVvU9wQ4c7M9wjtPLo1UwNSsoo3M12eshoQiNdNH6GJ5xL4H8FXjD",
  "key43": "4WQesGL1HEScRsFidCMwRi6EXbhGMTfBLCxE3kvwLozYAsZqaEPzjZoxCftf35dj3NuCyzkwmywTykwKuhsEPkv9",
  "key44": "ZPFiLiP81ykPMqGtUXQ6emnUwheTXALFHS9jNcn2nc6JmDVSP5zt9ihMyRWn2ap94WoyqNmjBRGHpS3at3nQp66",
  "key45": "4oieLtk3nynjtQYDoEG58Q8fTjVpv9Stxk4L5ah4b2s5aj6xsS5ZeKiXQyMij4nGE85F3Z6vbMP9B2j3yYn9bSyX",
  "key46": "1cvFkwZ7zTJQoWgnD3ckRHe7b1W3iCDXJA7ixY8qbLRzCuoT8wpgaiF5WNWcVL6PWvwBjKR4z71UQJdMc79K5B7",
  "key47": "2uLraxaEGwo3WVLboTTMNiAhNjPU5UeqeRqpVWxBhnaFDUC4N8xznkmkFGh633REnUaR8y7zQntZFtwGYcy7YSeL",
  "key48": "2C1grUmnE5mzMsgaKMpVK7A2wF5yBKLNYREias5PiktqSBWEYeVZ68fQXc2sN8gCnXg6KYTJHLkq7FqojiNjodyn",
  "key49": "2gua3TbBPPCjhyqeThorMiUZfcTpnXVrfRA1VU3FdBsmr4MoWFmDujUaL5wHqwouw4j2SSRLU1THrGYQhs41pW65"
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
