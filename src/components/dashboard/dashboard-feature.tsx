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
    "3zLud86sMS6YcREeh77xERtmkBFGjMXSzf5nZyZq2YHVDkb9zf8Kt6Z3DgGhQKW5kZnr2JZy5DWVUuiiNwR5TYEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SX62uKzZxWG5V2SXK6FDs7m2bQvQ9nUPF9pEPe2qeS254wb77myu4tEeVmcERcAUfCRh3bcxCCKFvmwkJvSp9iL",
  "key1": "3SkG5TjkmSsxFbCV57iRZ79DYUra6LMK9RDV3FP3PDa3o5ke6SVxmbGKFTHN5DGLYdG86x4FqUXJvV8NqHdBKNW4",
  "key2": "53n8rS7pjypUYSuKU9uqkw6FohiLH8oVFmNxWdkzrB84etotbcNjtjts5Rr4Nf4UmkjkF6XdXwayTGyMr3G6uYE6",
  "key3": "5c31SUMvvKD1QtpEs3Gvn7YDnaxRWPD1hYmRKk3NGgEVJPdipeBtMc7Ksz2FxQbHXQ9Z7LhuH4Um9dRna2Qdiw7P",
  "key4": "4Kuyf8y7ij5Y98bB8p2FKtjx2rjpnwCJnVD4WX5ozPnMr9CBV99YcW5g4Ch2uSjizRxdTjrDgL35aJzxC2t3He2X",
  "key5": "wdnMgmydo3bTA4BFC4gvKP7ZnFxFTq6rUVDD6hkEN3LEHDSw8Yxydq6NtWNZJGs1tjQ7mb37jaJHedcmGGsqzCB",
  "key6": "5HR4NjfcwKSXwwa9vovZKXoVejcoQkJbnKrgbTyeUxJUJg9iHFzmUSyLp5ArA492xQjEWJgeuVZF2tDeHG8xZWcZ",
  "key7": "2LnZeradSnqukcYowqxRCn5ATx3QpRo3CyF3DhtTTio4jSg39G2xnteQaZ6TzKggpeHL8HQ2s1uSDHXHaQnQKz7i",
  "key8": "UZfEBgbZtLmtqjKfXLnnE27hBApEASnxCbq9stKqwnbbPYYQcYeQsCh534MB2UczMn76nXjAqKovqxL277LTxZx",
  "key9": "3S6NuWcSLWpnJ1WuZo5suceUuwaU4pcUSV3BvjCidr5Lw1FS5AFmH4NH5AY1p8YyBnxyK7rcCEy8WVXvy1izCvih",
  "key10": "2RPbsWwYhSS4TMjbYZzbRLtiLeVZzrcpjWLFbcXp9HsCwyMPJCQo5dG7yu75sFz3j24XHwiHn9xJSVtkGcRymydr",
  "key11": "1A1jDgo9ie8ZLXMGSJwKoqTEcMsBSZUmcn8MWSTM9w5PhEpjtHXmSb6ZauF5LCYicmLziQThmKg5Gu7N9ByM2jt",
  "key12": "2VoScJup8FMWfMNypzjLp47crT51qyynkpfYX48gspx3ovuM1wbjtHuMYUNrL25ZwHdyemdRbn4ZaFku6uKnEqvX",
  "key13": "4ZUx9yRNmsSvJtQdgb8JfdJJEQYkcMpP3nnfv1oLUDQ43Lix7DFGhPpJ6BBAEEpuXT5deNvYieAzaEe6Zzix8MuN",
  "key14": "62v8ZGRojLqVMMeBywmmMsu6Ng5vGC7te36UHjPKwvn5QofEn8w1KiUFPEBBjJzwpSiwmxUf54xxhuRG2auiBCCi",
  "key15": "2yorHAcz6MtrxrzRYgodDNuJ9Q8WAPvyyJccyEJyh7yopZqSigY9YQ5FeSvwk8MMbyhwsSoBjrYV8EGHgLZqg4QA",
  "key16": "2x8ErgjJos3S1iP98sxKqsY54YoNKjVZ9fy37em6MiCG2TuxLR8cRha59Wn14wtBFeTHiGEfMPpc26aVjaUHvVRK",
  "key17": "3NcbwjrA5apkkEmatpYcZu9H9bgVHNADmAiqmXGisuD1npJvfsSASacoLdJNjhn8RtX9YLtTdb5PTufx5Z6BKpH5",
  "key18": "59Gwu187BruQpNzQus4oYBeruTAaB8Zu2gM91S8vZitEhpgMWJTD6cEbubZMvmjKn2YZECsA7LZTrEu1DZhRQPZ7",
  "key19": "3jc7nyzhtfB17m5QM39gytDwpEdQQNSR9jkhbfEpNHfN59tuLusB3KwwP1TUpgiarfAR3QiCA5EJknnfmU6DhkAm",
  "key20": "4Tahzq3FFngGsK3Ngw3SUeWeSTMYjYtnDSyLEuM65D7gZtN4d3wkT6g4HspF41arB71QbbtozneVDnMSyjkxhVsP",
  "key21": "2F7ewT93xvrbjcVNcBDmRiMytF4pR4i2FEmkdUix7ib7JQW7hsgF2jyYcQM1jJydYv9RS6sioNSDp7Gw9i2R2EL",
  "key22": "2UZV1GYzWoa3Mze8JmJ2xKizrXokUS7B8c6Sbsad5XbXDfJkif6X23CpuEBRVsN9piSxtuqBqbgMguiBWFMYYdHN",
  "key23": "4kwGTM2sLAw32XQNFsrSfh2w6m9B7uFjhJ54QLhf5D1Z7YPzHwf9jENtfyb6GAs4ddSWMh6DL5vJzH8rUvJvgiWw",
  "key24": "nUHDbfc8uh5LY3KQkVD3PrjVByQ4FBgvg2igLWHR7TpZuvdqckTRpdUyyH7yusXu4fBvt2YNULyjX79PXpZT2df",
  "key25": "4MVko3UP9to6TzVuxVDGze3eJaL8Mzo1wyPJWJH8LQCudrL5HhHgvSwdQEnMhdTKHHWzgjMywqkQEv4J8EwdpbQi",
  "key26": "2ocmSHBqPp3ykLDwTcx6YWPg8vihrYpQxUsqRJ2weyCmPbpKehcvGJRq91BLJwNdiZoHvZYCHmYP9NWZnQnKFhka",
  "key27": "3n9GNpyyAsuiaHhDrJ89iHEimqfqzYW5DtGkC9nLBpZD9Pw2TChAtKWcb3Py5P5sVKGN8c4kYNxLKGwsm2u9nQks",
  "key28": "qSjpDCMRvpteJAeXBLbYaBJUnR3xxsyresaVwxrF12EA4KybXBrSsE93Uy6VGit5kcgDsphMv4iSP9mxgY7eH5S",
  "key29": "7hk5VEgM98gsHBeCfopTxNC4MGfY9qX6mDCbQCczr1x5Bh5x12481atSdqvmrjwnuUrsq1NKpWD5pKfEbsdLK7M",
  "key30": "2ZetWDCEcn44LHUKDBWcMuTtmMYymwLVsRmCZL876jqB68B5975er4EPrqvpVjY6pMDiPyQsfn7YPi4H1FGxPWqd",
  "key31": "2oy8tM5EPVnyNQJMph5jFnwCZekxjTyfv3iaNderWDEFv3EsvuFHT3zTkT4RDNRVTBRtnYt3UtpDUDs8jBbzGSgs",
  "key32": "2SpUKNg1StyfeP9AKWnKCEvXbe8P4hCdLGnhZtivSdRWNk8RangYRXQywiPDuYQ7oE6HqvzXd3X59xfvEA2V8rKk",
  "key33": "3fx5nChCZah9aGgXSyD89965mnzZJsp2eR9WrJkJ1NzuMUh57GQrErCGM6SQYhZVx7cQvwLHDvmKvR4RkENcGA2S",
  "key34": "4boUPo41L58PzjtVAi3gitUr7dyGSKAhmNcYdbUzpDmWezYvnZ8RfXM5cJvEeF7Axn27tEVPR57BB77eMZ4hzgUW",
  "key35": "4FY3TwREhb3QbFo9TKgW4pAdLkhmv2uZLsCQRcb8GNjB7F2HU5v2STH9Eyyp8BReCQRLukgmTURH9dUYTaYoCkzK"
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
