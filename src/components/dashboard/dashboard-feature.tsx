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
    "4UsWSoZhNc6DjDJD2czeyuSsRXZ9buqKRKkDoSv7AbLQSRPPtR21WRUXTpir9mt3bVhktNLPzAcciW3RA7gSeJMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jbqmJjaTvaV9TMzGoon37KpZTNAq8rBwcxxbc2zE2RPmRjDbqv5J3LL8rA1SJYxzjyQAvr3aqwror3nVq8CfRRU",
  "key1": "4qPUVBq1gBm9YaWS1MBNDZA4BRMsk3gVc3T5ZFbvM2kanBs6KSHJA71HxM3YeiwNiXL1TDtcRgVqvsiKaEZAkmkW",
  "key2": "3CKQfGpiL9ZrQMa4AZ2Pm5nLfJqmbfkedyVwtw7VBv6Tqc9pAL6GPCToLyM76V5dywk1kfyM5qd3NmWpoiREoUr2",
  "key3": "4vfXw6KmQeXAXCk2zuJxu1aHPdxpRK7rFmN7YnL9vJGEs3oXQMnNfKZEdQvUEtd88BkpqYiajiAWHd1DJYz8NhHw",
  "key4": "53PWJXKMYW74roknwQDxiD1pNA1eEML4ZqWw135hkMikxf2PTCKKMmrr57b5DF2gF3xMcECqmBTpNuUyc27EzDzQ",
  "key5": "3SF3jNcouYoxronvx4R2YssZyEgWcor2dYGZXjKxFAg8fBwLQeRQ3FUPQcN1zbyQAtZN7RJJTtF96xPVahbzmaHx",
  "key6": "2qG9KQVnKQLWGstq2SyrK73tbmo2dX5HyjnrKVRuiKJBYoJLB2kKV93HPDE36QuJ1P6UL84vSX5KzBgG55RcGEH4",
  "key7": "2bv7zMe8ppsUsBXw24B5CcmnCoPszdWzNyHxACMi6nS1mMezAVxdvT8wnb9Yv7eUedTyTTCcsP5bD7xGywKdUn8y",
  "key8": "4MnJbKxMgd1TFTPC7577o6bbKQWzhuFoRcbd1wUykphk3xnS36uBm414fVsU4CGLTgCwzvR8PoECmDu8ktjvokdG",
  "key9": "EMwXtSgLwStCvXwEJQgjxDekNWgicAdwyaxTGBi6Bh99WmGpjAbDvNPgFDg8e4jsW56bi1bJoYSGXiZ2mUQYYdw",
  "key10": "3NfHKkTaiwckTvTju23ZGTXaNR5iowHqgNQnnFc27C1E923rE1WxaUgb8Xua5YcjRQZXznBx2UL2KRbRPqEAm5Ec",
  "key11": "3gBPX4HkyFTCiFYnQArKbus71ikYBEwpik6iWcRCbjFNw7ocHoFk6cKxu8GPaEY7w8Z4MrAFResTsH4p3YnDjYcz",
  "key12": "5ZNM4NX4oXQHsRwqfYm59yF9Rok7jSakxuxEWbrjypgkCcce3uh8R2XxNhaz3dobvWFx6gLxsM23tjcd4EhFs2bZ",
  "key13": "3FFaZtfyN3EBTxgB1axGayKC3soKfnVjmgMAJYhWRM5NbLyXkQtDnBigsPrRy3N2hcnNkHyTLGtaNuDeyaoBFNTH",
  "key14": "dexCL5gQwTCuk4sGhxE4oy43T6f1PVoJweWjiUoUArpkcutQTRs8tez8qoW3SdFeUcoqfWyeRVyVPWpZCc9T13K",
  "key15": "363gfetd7Jc1wiqTKSM6tiSCGJ7CfSwWa3ZsSpg9pYa7wDt1PuWThhw3XmLo8ru23V7HfnaAPVeU5Qs8Q9qUBzSf",
  "key16": "36ZyucxBV9WdoHDb1jefC7CxsMeigd5ySoWBEJadVvf4SQTCScPp3cFZVEkcqTbeQugQ2KoLUhG7TfwBKfKdysgr",
  "key17": "4CaRVZxKP58CWK9sWh3g18uSR4zDqaAi281pFWBmATBd7kUTjbNBYPpc9oiqQ6FrWM7yqAMs5oMr35hZ3ysMxKTn",
  "key18": "477sW8GCMsCLDf2i3k6gxryTdXb3RnxjrScb8LVurjyjAkQzP8EVetEcJQTDSNukmiVAo8fnPAMgiic97Tjb2yJv",
  "key19": "4kCP8KEfadKUYWwo1Q9adUXNB3v1qzMwQPRXT9gZpTAWzLaJtb3ybGjE3VyFT16Gm5g1tATv73JNEicN3xmsdPHi",
  "key20": "5GQZcoySQHud3ncCFCngSAhff7oQ961S2sVXFyLTrPGLKSZD4uDphx7ynhnPciCJvUKoxXgVSDDcC3GLxCWdjn5b",
  "key21": "3r5uXSS7TgZFhUgtDJHjAVdAhH5fvgGYLdsGiHtLwxnkgt2xkpoqAcRkAqcENCRr1595SN1Zkub2D24MSv6EUptj",
  "key22": "4m1p4fgE9EpSoCVVhqKpaJ7fKfcqhktm2kkXe1NaXjn3heFwd5gSkaFdsbz8WMearMkVXhpy7W5EzoUVPzrTGkKU",
  "key23": "5ghEm4fVkk2kG7H4jAW3nceDBDpx6tTk4n3zNaEjcKYHYHryXzeQfQ2BjCV52F7749RMRgM3BShfU8QXixxpZ8iw",
  "key24": "5b9n3tj9s2M9aW577bd1tpwgADsrtskt1yZYCsnaAAiHUa7FnYoay4JGB5Dh8zuBKmvdSgNVr742kja4ozcseUzM",
  "key25": "zstWMzpNrccWPH45cnt2W4xBw9g8a5KKPbuisfxiuTz7MR3GEkuPGfHjJimHmrcay3TRncg4BCTFxyYdNNHgCvB",
  "key26": "xZsVUnV79EVxsLGcsw3wTrncbbMz7RVYjw3sugajfLRgVVweJiQNLokqExa4bA1MfemvqKELbGTLD4vKoiz4apb",
  "key27": "3SGFvYanrZZqS57TJwfNdyKP4gG5czZyK6497StKFijHPgiZaq2fcam1GgTceBLA6U8WWHwngjDCCDPLeBgsvJiY",
  "key28": "5nkYwC68koT9yg5unSYWhL3MUkwXrpViSSXuAkhCB66WPtFaDYHs3cifvC8U6ZZGt8YSBGpqvFUvY9g2RCANAcaT",
  "key29": "2tnyWDBFNdvefUeke9VoytuiFiHJ28qaBWL3L1WdSecedzGAbEmjgcHwAowgeBev5hAhUPmQ5v7k1LzrVArqWEme",
  "key30": "2Kk6jRetVSm2Y7ekedHfNqXnYeR17Rn4fwweTFYzdgfD1FNiNWr1MLrmboArq8vdtJmtHds98XN56MBi9wHm7QVE",
  "key31": "Y8wbndZu6XGy2ZC3zc4MY7j2s2TNgWrKCyUyQwFx6JGfFLwyUyWXEVmcSqoB5tbEdZdvQqwjoCFSzMA66GUS5nL",
  "key32": "5uv2KnBjT4ymA8D8oaL8wQmBeoNe8gKHzEbFLDP4w9dUhaFC8EDxnwdE9sA2kyXi7EPcADqhbdwASFQ9UiW6GWKn",
  "key33": "4iZbUYZwGS3MtnFjw2k6dZ9BFDfH4yz2T9PLGwwGRPumD8v4Yn1KqgTaBdfCAJus47x4TAGyLPRAQLCwnfZxXKug",
  "key34": "4nDE4aEojCNBtgJeVTUr9sqe8DqSTYc15Ar6jR25hirGeguCD1WLwgGRkrZ1Qzedp5bwxiqAegLaNXhy76JrhDUj",
  "key35": "2fhYmuq8hnyLCL4nSs68FEGiufuXLgokGXaMYD8HVRaiZxDjeRJr4d6jstuJgMKkF6SpBTBD5fbJSQZYz8eYxGVT",
  "key36": "4pxAJyxdDkRRSa3H9YZ65oPvXWqVxa23D5WY5FaGv1b3SC2WpsSrxTQwD2LfCQNyfuUcseUupW9baQjRTWZkjKWF"
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
