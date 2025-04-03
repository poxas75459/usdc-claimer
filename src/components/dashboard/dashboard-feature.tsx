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
    "4unY8GGyXxyo9xbiDDzdamcaY61eX3NT1q2npy7iUYW65zmVYobg2QAHkZC2thBVyTYehvpePyWMN24DV4Fy9aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HADHDGoKzPooY9YpLPvacq1KpM5XRuS8RoGYTN58MCY76kABk7xNyewKwJsAiG8TcL9KPDTJdH5ZTs3AcjWfwVB",
  "key1": "4dyrwppKXE27N1azfuVBiYhcs5ezXwagBDN99T1p7B3G5u5Qrr28VHakdwTDwSmZdhASJax4NyF8tLVDWr475vrj",
  "key2": "4wx4DQobeEDdA4sHtzHA7p2Lrojz7GXPxpaTow4R572bYh2LZU46UBrjUD1dttgeT8jiCmcxXxSzxSvHztuCkMd8",
  "key3": "3vS173tzy7mC5NzpPF4MQwYunHcUwvqyWJbq1rf3FNBkL9ts7KrkmvLLugLUScy7VdtYzjE9GFntnF666huSoWJU",
  "key4": "2MQLye1SoTybtMTXauWTKJ4MAbRKMXc9XAGgvJjpweWCYQgQz1Lotz7h3d6VGc897wj6S7TvGG5ydAXd18aNq16r",
  "key5": "3zd1vnHztzf5RsegBx48vWnzwCn8cmS3VKnWdmQxmksimcWcvN8SpjJQLovHg5Xsv1NzzW65PNqikfnB1bvJX9Bi",
  "key6": "67ScdLr8TGU96KzegSEaVZxoXHsqHwTCvAyhqgJ1ym1sNRcYMEDons1L3do1K5Q9aWzSAwPw6u5e8tvpsRw37LGs",
  "key7": "3UX9YKMZUrMadr4gc5tNAQG218a3ME9u4D16Nv5aBnXX1bPZzk4VZwuybArcPAwuWYm4GJoVL3yU9zs7XDKwpLWh",
  "key8": "48T7n5Ne3QVqXCinYPzWsF1mHhDyx2zpmToss4FPamVnPFUsQPkhEewgomy1usnUr6MrNMqrtYMSzZNm5JyuF7Pn",
  "key9": "5KWozvwVkDkJ7AeVEziqXxjYcurMvkmqUogTqRaS78CqSpGduWjW8Dai1hMNMchkhU7A7Q1pVjf4Yf9rVwECaUvD",
  "key10": "4gFWdpJ4ujWC5FTEEKpQcXAvNmGmScvuFaZww77HchMoR8KjKiXSPfKXLwYpeYdn8b2nNL4fq3hnU5xLr6GZyfEX",
  "key11": "5u2m7g8ooYBvk74EivaJ8woRfFZjKcqb3swLMmHb9kzAGscRsJCa1jLHu1sWRiPsS2XW52tHpEW5f3mj6wjo9eTY",
  "key12": "5AARBANenQWNbfpcbMYNK2gPNheXcuZyBF16ZcjuHEbDLNCfat16dQfx8WSzz1iy9zhQ6LCGmmMCfyVjMtbWQNg8",
  "key13": "5Q5wH71ZbB5KXkYJeRZ2XDC2kotMjVPBnBvrt5MfNzB6yNq64WnRWYpbV7omUXr26r94tjDJd11KG1sisx2AR8Ns",
  "key14": "ezmTetRR8QhTtTgU9YT2guc1QoVNnezv6RXpwmxViCnKDy4TcHEf8B5debsNuUtbqUScPufxwDaS12j4ZcpPdrQ",
  "key15": "3nhgeFcWtj51Z7BrTWsg7cTnvWJFCiGcswsM1YxMEgMMo7Fn56bYuHnmo9yhLxoCFyoM8f3iTa9iDadVH25uP4e5",
  "key16": "23SXPMmE8jUMYk1mzdkRcUF53UvN4eR6jU7S1WttE2GdspFGsyULVa9gcaAQU49SFHTe3JuqaTTaPhi5xL1eKjap",
  "key17": "evEKvbS4uywcQWFedbXJoNWq8oZyunm7AfCCYNegTQoUHNKfYmxg2MoLmXb523a5u1f5EKBBLUwVdEkjvJkZcyJ",
  "key18": "3XaJqm1dMubz95Wtz3dfMmavN3bXEsMQdnxvNqNKwgp6B7YtpTa3zsA45cskQuKaz9n8U9QA61XqUeCgYykSQiCk",
  "key19": "67G9KS6rHogAhEppDy9CfnyQ3yvmsHZTevYSfajRcAPMFgVtRp5s4bk3CNncAN8ujnzTZeAFjr6yocFrgbFL5ZfR",
  "key20": "3XMy1eRF5uzoEvTggx2VPFLh4fKmPmLF3kS6Sof9TZq6N96PpPjyyizKM6x23SdrawPrcG7RubDcih1FLNp2NGLz",
  "key21": "3ybDH9EBMADpogg3eo2Dprbd6BRNKRS1sB8dhzocy1myUQHutcpE1GfBW2DEixx2R2i4beJeeobyBkqUxgJv5nZp",
  "key22": "k8mhRZ2LrsGyBFkGm6gCKRzVdWGCVYX7A5MVD37YnPjbtEpEUoMutFZNbKeizePDudhr7Q77Zn87JiQSeoWEVRK",
  "key23": "566AF7SnQh6RvtRdeCUe721trnXLwhREFQZ1Ww1jU21ujYwmxtUgmRbLuThLCvBtb19nXyPPgUUubZcvCjwCFAop",
  "key24": "3soA288cjj3iqhM8Rf6h1NMXQ3NNMRMAEZmbPX8Rethu4CJRGWNNrJoP8vEXU6Kyumcze67Zn5VJvTyGWz64eDmr",
  "key25": "4wGZtNW4hj7kUBP36phAtojw4sezJSNUMWa3rKY8ZQqmS7Ff4wDzBVyZyLQGoEn1aYLyVEr91F5g3r2KhNdE9Rzj",
  "key26": "4ypAJCLQHYeL3fAFWDNCSbv2QWw6EwgWemeVpJXDJ745D7Zpv1aV9BoBtueCdcdkAKNAHNED5WwzpPACVq9T32xS",
  "key27": "5wVeXPnwq6ZvxhBXR4FmAYC75im8CG6XHaadsuzyd7fz2oUJkFBDsNJ6MiWwkDeGYaYFgVxV8XjUYGvXVseHQrtd",
  "key28": "5Mk7rPqpT2Lw95m46qZUQx6y4Qa4inJ2k2T9T3SnSoi7bMX85fZDDsZnv7gRFisoMhcfn6yz6zAiFWZqfCHCtuSx",
  "key29": "2TEPYr4yQZJYPpd4oBLTQeUsV8EUDEMokKRdzaco1jnGFogEMu4JiA8ge53JEznpX3EJDQCoE3bCfe6YWKbevmij",
  "key30": "3gtKpca5bKxHLk1ESAChfG6U8bQy2uCjyDFfaDAFeVCpajFkAh5H5YV51Wv21JcEZF87Jeasv4t9YyyF1PzteKvF",
  "key31": "32mevbH3GgmvFBzKMAonXGFoBZ8JqUZCkpQpx8iBrcEPFwfjcMjMR4DN9YM9YDbZc1jdCZ3f9N8GQgJQjgGUq9H3",
  "key32": "2HPpLg4KzQbTWHUS7mom8PGgjXBxZxkNGsh7kDikUrhiNHWS4nbwBLKhZ2iqutk4HxXNxg5j8vdCBTxpZgsJemjQ",
  "key33": "4GSan1HzFDLk9qKHCb6YNPbzd2b17BgidN86ohs5GfPwZARVqnGiDWspX83kNQvkJaRAWMDJMuSHgP3s43tSZc82"
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
