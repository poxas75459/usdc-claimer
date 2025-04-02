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
    "D2xu5eTnEPLqw2mgGXJ4iT8SBqXzzPs2JnpQGJTJrcqPrSXL3eHrXCJ1TDhz8Kgr1xX4stDdj9k2cuysWpYPYFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rnsgsPLCBmfHR69XTZejJ3KPREGUJ6Cjvpp5FLwmk3BeKCorainv8MsBtp697W8vzHGf4dMHE1UeJC8XBEUa13V",
  "key1": "26kaqQVupGReMZ4irTH3rfrSvgYaEDeWSw3nVJzTSiN5UYbGqJeAhcmFJEzvZZzU6M2LNQAweFNaY2wzhu5Bpov5",
  "key2": "2o3i3z96bKURcsfetWRRTNQj1qPnbwgornyVaFTJNxCzMofJw19AswFqeDe7DkxyRYbvAvVq3CDji9tFCTDqVcRM",
  "key3": "39ycRJYThCNzFxVCTSFXNGu8nSo82SjzGCy3YUQcPgx2cKfHyMajnQ5bNvgCxSj4NRv68q87z5kMSy2qgbimMZhB",
  "key4": "3g58bX4qjqw8XjBcU5mc7GtvWamLfvUKj5NidJNkjQ9h4v7jbizR7RPeZg5oazzCArBACfwPfbZebtjybzyyKmE3",
  "key5": "52cXeb5UDtieYASV83QMAieLWmHMhv5N8FNKYMQ2V77AvstsccMAjwSkNHZNU1hRecGn4LdQtthWrGnF2bdadePy",
  "key6": "21hZh2rJgHfMCuTp6cJS7teav2Vjip57GgF5UpsNshac6DBsGZnM4x5LpiGukpaFQMyavXo8N7a2uGik2omocj4B",
  "key7": "3GXNAnCY5okRkrpEBXPKTeY2741R3cAH7wL9ooLkkGdZf1MzPpMnrqJxHKQQ32r2gjzRVWN1Gb3mPvnbDv8GUr7g",
  "key8": "5YoSvQTwmT2LuySBUk1K7nhUqr7ohGpnqd5kEFD4LuFJpKDcPirCyTD5nvbXcXmBAL2RnXrZWkNocZymBBForUtA",
  "key9": "NXyL8Km8JbxiBEGCgyopaMh257EaiCgATxXk2AkFwMGsxE26GX9GixSw3QdEEf8fTLVtXux4kby5ovaHr7r3rcU",
  "key10": "33yyQ5UbW8wtGfTqK1LZgkoZnAz6oH4kvuBWcTv4LW4nMaUHeCbVyzmQbtEZhpJg25XonGU5q87iUncsNiWnkuE7",
  "key11": "3U6eVocGGLJgaaVv9KJXACc4SDvHRWex3Qmc4eZmSigxXNirgLb1DqmrSFMk4Vjh5rMW4hpjUhRcHhi51jHnmfD6",
  "key12": "65UWPaDFmThu4KL8iB6iwsccv36Lty6xPA1PddEzU3gLmmHRuhsTEQT2yT431bLDEi8CWvpvK77yZR9aPBEDqDmL",
  "key13": "5L6AgNNbiWxNqTcSQzxAWXLcouRnRewSCmccKkVJziWXPUfasp9j5TUiKYPWka2JFyaSpZyR8SxmxPjr5igPVAvX",
  "key14": "2xE5sRx9r9ivR7tvzXBVygB5GFg7sm2dEVXUZiTDGL6DZZcuKpisERXRp8JmbyXLTBwea4hEZV8jTm7TVaDqGZH5",
  "key15": "2hGCinQPstPfnGyhchHqp4Map36R2SkaSv4ixLJ8oiaWVNkxMxDD5qeow4tpQDVN5ymXscfa9ynwgyVJYhUNVm2v",
  "key16": "5Ca8Z14SQbEVEsRgfjLXtcdmekrypbhqKB74Fae6HpWZ47ojhgEiRKryNLYou93qbFDK8RQ8JUoZbTY3YCJiy7u6",
  "key17": "5k9vUgUBKsHvqgm6QJ7DA58FrZ1Pp6vYZXLR1FzpeM2rg2KsGiEEKC8YbKFY8jnmL7rRG2zjJP51n4QVbscDisnT",
  "key18": "5Bn9HYtQApwRsHh5fbEYq88DbY64amHYkVQhLzDPRGZym2F2WWv3JipttDZtvNqjd9MQ7bu1T7Mhd7yRcyHa7D8i",
  "key19": "3j9kzrtiVXQWSUCr4RoyeWDkzP9x5aNt2D8y8bjFaVx8SUg6ynCccYdL7vsE4hFQ6SK38XfVVipom11XUuwb9hNT",
  "key20": "W2qvtV73cFcUrF4tewCothqw2YjXWLWjFAeyvjEqgKh7nEURuRvPzXRRcoLAKHaEdDwExrmpkbnatr2yZeo7CDU",
  "key21": "2SG7itxHQrTcadjCGWZLM2uPScEa73LjxnRSHozwv9DSyDika3WXXttJd1uCdJJXuMNicTpTobMLPUgSJXink18X",
  "key22": "4TyLviDq1viTmcFY6xifhnQ27hiqKjdMT3NeieEb7GvdMfYydrP3qSREHh5bv5JKuvj2TBnvY6AZxmRxQX5ZQjmj",
  "key23": "45mDwZ4PWEMvGSDrd5Bxnj7LXeewyGUq8txMVsvbtm81nHD1pG2KPYozjdwjpKBviLmdazNn3rQrRcByKwBDXQkL",
  "key24": "5TDcC93Fe1r7kjH9dfB6whkUtQHsS7ghEdABQwN39iZQLmTpmgZH6uJR2vbEvnfwSQHyLw6RmSizTpa99WTkosXa",
  "key25": "4GzUxo7Vgg7Wi4efZJ3UayQ2KCjzdtvjsvWYnc2TWeXZ2n7L3Acq3DKAYTLjc4J3BNpduF4fF2zigSMY2BQVCDqQ",
  "key26": "56YW2EHJkrJSMwtit4Sbve2uRuU8qZGEci2gyX3gDX366ByneCaPuk5CmXBKLnTQr3TsidUUEfNvxqBF9Ta7t7pN",
  "key27": "3esbQRYij8aC8L6TXAdHmZ6XS4AfzGUEs81DwqxhXSNk9HHjBf1vq92iXSTgT8LgpcBeBwC64x2x6mjjRhSo7tVg",
  "key28": "4cBG5uUejYmF54KgEak33mDnRbReobtyyvHXhdLfHADqXEcSEDcgMKyzJ6Cvxjxi1c8o24mjKnkJSvJtDn3sTEZv",
  "key29": "2UD3MYabSi4oYKvvxkw5Mrnpi2L2RiyVnQqHCiDG4fwwnFV4g942gvzeszisL8YUfUMMxjmKxxiq59aca6Kb1rCS",
  "key30": "5vqfPrzTtgJ4Gk7bfQ5LEYhfu6SuZuG9FQTLCap2tatmBA15YdDJCyih3bD15q4cPMGFMP45Ko7tx9nhtjJmdsYR",
  "key31": "48ZuYmguFYJjbECTyV6DK7jWc52QVhAVjRH3YZAQUm6vtu3GNkrVTVBuiibL7zXpWDeEQTzLAyBwScjF8FN863Ly",
  "key32": "tUo5QcJo262xJofLUL9Ja8NuHagX3CPiHTYfB76e2WZoiZUgEF1yXdtdz7WDP5kgeoSThEm3TS6dTS7218iMDBn",
  "key33": "5xjKCf91d4WdHQYKs3hgdEcPFtvtjtetkJyF4kq6RCctkV2rQ3kQdFQVc4ovoPwDqVKScUZNVJtRmmWUcGyW3PJE",
  "key34": "4y4cHGTHr9tr4UHmJAjc8EUKcyHbomQKVBwbqgT8Fdqr7K3qsyhCDVPvbCv7sFkK467Q9ovv4TTo5RbwxtvJt5zd",
  "key35": "tsxjAQ1quJH6121nXZuze9P3JMWuRknWMbcbEGdF5yRN3bnp1FkAMKga78u4CNyGuB91bRanoNaxTFtpgnGo6kg",
  "key36": "FqT4SmNeeYfBG6L4PWmJBNBWJGL4tq4Tf4D7Wsj8dCncT7JA4YbgFLibTXewvUUwt4TVHjb4Qwt4TGrW9iQGLBA",
  "key37": "5srVDhdZ8ebTThHSBkscK9t2ffdZQkDhxRjnRrTJbSwBn67g1zNnGNXN7zLt3x4Qdodtj2MkfePALKnaAcGGiMkW",
  "key38": "5yoqbMUJ4vu9sE2x9er7EsAifLcsWsmWDHAu9AJqJRy9GwofyHTrduvPwUkpTsbacSYUSXUMU1GJhPTMGR63eKfE",
  "key39": "2ZjefxNLbAVCeAsUcS2yyxQ4pYJSVykBvk2M1VQn9PsH9KcivxZpWQmhLzHg56ZFDQYQ5PfxVugequL8M2iZVFfv",
  "key40": "3JyPx3r5Zd5phmDevE5CFHDX3CRJrVYDGJJJN6M463z1CJebP8tca4fVseFFpqayyG6xMgwN2janr7JgkHYGiko6",
  "key41": "4fcCACbBiohcVWbuSmvvj3Pb1aZvYUUJR3aoYDEgEZHS5e7FcxAWzgK6TtBYVzmJr58XgkvcsbtgydvRsXQKxrJy",
  "key42": "2s94vWqPNqrmemsZCPBezfFvmiLCWR4xWn8WTUMt4QPSgtrStVtQbB88HBYXLhrTKNnjZLcNmgyjvsPCjCq5gxV6",
  "key43": "493VqM3fRQZEq3WMx6jPa1Bd29hqPH2SfBp6ibtbVWCfpxHZBgbgYG1xrrJzmszgULo3sSAxZShVQo8TpqBouR6f",
  "key44": "2iD8wq321XNtfPejF2qmzEtj4CC3j9wDWcCHFDsgDyb8kcQixfvDmB6svSA4GWPqqGG2rncuxPNFxnAZ62TiVEt9",
  "key45": "4rfo13sddtZLfEXvAC3WNyts5k7PAAT2jef5a26hcBfqRkCyuSX9GzaiRpzHkZkaSYVtXyi64dAb6dLicTQgRSz4",
  "key46": "5VkfU6XrZNYJsFYov8q9qgUwn4RVj8U38GnjJ1GunmdG9NpVas8u9ezhEFPpTmpeEkT6xj21vkoL2UpDqyZdJx6Z"
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
