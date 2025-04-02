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
    "XAUP9XENWsWwdu7VZoakjZsG74dpWVcsEcanz3NqeEpoNZ65E2GdjtcRbaxhz2QGPeHJ7bZPxJ9m4F5EEHPEiAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQAt13Ai22WBtaKQmriDDdsDTdzC2dL7kbMdevJcM1vwcHrtPmbBTi3WtGjBkPQvo2wuFVXFusLnE78bvvyuMzZ",
  "key1": "RAVv6CRs4Qm3BfbZaR7KAUTeNf8dRbf8Ho1V3VBBmXikdixgSswUfFJv9ZLdbsfFQc2WtkTBNDM6uFxr8XkwCNJ",
  "key2": "2taaJfzLUR8nfGJwqzNXRBCuZ68uZHwPXff6Jpjn6PqqDPwop2rXd6knSui8R8171rCvmez6DdqU3X3VyqxhHUcB",
  "key3": "4xuuLDjQ1QoBGDph3YYmf9mYwDkTS51dp8Tyap12f9FmDyVvbygLrPz4VNPXvL7i4LzGsv6f9CEZNa5YySzSFjeL",
  "key4": "5yG2mkdrE2ZNiih2TirG54vDtRSzsYrd8jLVk7G6LyJKgZtbkXYjpsZVTCLxZ95aL5GinscuskCq5E55iVVJoA9a",
  "key5": "2HAHpS8h8Z5p6H1nNdBZmJvE4XMoshoTTwpa6or1VD4J92VFjBarmdgpmotTCRPwAVg4C8AYqgtCLd1FvK11pydj",
  "key6": "37CPFTS2FeME322ycHVi8tQEAzAxZT4pUjmZJiJgD4GBEdTjzU1AXQHFJoQHhB2DcK5zXAGZHAxBXBhYEsABNpDP",
  "key7": "5MHbpBEuzDGkcXkQkcPjhMfxjPokbmjhrAqyY34C8iPiMduP32kwjUmxaDi6jc7fyjGztcrWpMcZwUkBtVk5ibzR",
  "key8": "3AEomCe1Y6yZiZoVbxcfgsfp7cis3uGS26TVxLyk4VXqx7tnDE3UNSb3YSDbpeHNjXvRPtEqLrDGrgUztgadbk7Y",
  "key9": "62GJnCUfBVSwSSQoNVdJK8JLWUreYPx1hiecJ3TwAcp65i7JVkyC1zpY3PBVv9iyZt7KUpHQ65GsyLWtCKMwngtH",
  "key10": "5qJiRMYAfc3ufKCav8HcFaejNEuUepeAJPt17r1c4wKSkdBmTxWhV6SD4GZXoBvfmdZUSmSGkVYSVHHxij52ry6S",
  "key11": "2gjBqUjkT6U6dK498isYv2C77JXHhGoo3EWDingykMznQWsDS58WWRUU4TdmFUkBkidsv2tPYoDFpRGKjjBvB4RT",
  "key12": "Dy6oXa1MamCdEzhY9iyhwbac9F6mfR1zri3aE5mZheW9fUfboNzyFQQxdXCL8j6WDew34bxFXbo2X8mNkaZAidq",
  "key13": "3rvf33STyByvpcwFRxJoHWgBvR5u3eo371AZAatfj6EQQfFmM4aoLm8vNVWNtAk9KxYQLhGd79MnySxh9Z9rpfZF",
  "key14": "3aDRGyMiFEkLQvsRGjoPyhhN581L8WG9CjfE8ApBGC5BcJtaGd4mH4s2u6YTyA3RjATamoe24s3hxkoCByT3GVyU",
  "key15": "5tqK1r4pNvJRRnmziQfBw3zTJqvU69V55PefefReiiV4rcLPJBxU7wTphG5h4341hL4hJ3SJSoX15gv8Fpz9QaiV",
  "key16": "23hvjcKoCjqVy3dTRLUnTsKSco2zqq3qi8G1prjbquQ4Ff1T4YpYsjJXjZhapFqczW1wNao8XGZLzC6jx2NZ858w",
  "key17": "SFXBtdbs3zB4MhcByi3Ryoqp6A2hefLpDJA2zF1oZqjs58NjaTAZHNE3WV6dApAk9JSshukA5kkwDVCj4rkQjBo",
  "key18": "5qy9uLujANSzVJKi2Zuh38RFQSXMMLzygXBguS3oW9jWU2DiJMY5C5XbqvmtZU7tkHZJMVQAquDRBL2PzF2fu4k4",
  "key19": "2HzZe1qpdQhyHpPBLgSw82JZHTfZ3oZJyFw1zhqX2oHhaNEcxPkG7jPVfuKHnvsLLNqT65wUiURuKGn2sqLN1zaM",
  "key20": "5DhS7AxKQzSTJjnXCzdzMsThd2brz1C2Vy13ZDknwPmoimETDoqRNHmEswF4JmyJzJ3ddMR5hm8SRbXawv6fNuZD",
  "key21": "3ZuDQJoGae1KcKJzW9Wc5wbo3TFMaGsZhj7CJh5s9eQtBDg7rPHdAE5G6SCnfzGfDZWL7d5vpxENsazuxXWyjPRr",
  "key22": "5cT1JQs1L8p5YTLPyv2EUwQzEKqYgXL4ekVGP9e9rVV8x9hooRFmEvMVoaU6NwQWW6mT8JkyY8LV6ebCj5PKyFyP",
  "key23": "5qh7EcpyM6TKHzyVAk3QAis85LorCscoZvm6vYHZboTpPxY3J1i9xtrKrWR5vG2jVj1EFpDJWwMB9DKmbTZ5c2qM",
  "key24": "3vL94fgwfL8C5yPp9M1kwPUNQDtiHLEEHd2fRt4MQpRnT4zm7nShFebkyN7A2Ak71jgZYq5bWeM2EJejwX7LYhW7",
  "key25": "5iba91kAG4AdUnFnGQDdY5vnrNpvPcvG3KPW4tCRBx2Q6Pij7X1gv4iHga2X2LPX5miHVhXBoMknhSeuF1yHAqum",
  "key26": "EwULUqCWKizztWscXSxdXJVhkJXfpXMbR7SVXJUcLj13gCPp62EHxkCwHpF9UfnqTJk9KzLFttHfN9yfzpdPsak",
  "key27": "4yB4bu2ZVk8WMFoAEtHLfAD67ZwbKQSjjvsvEhoGqg2hWXpHP6DgNNa1NycCPQhe7H1w8f6rQrQJdt5iPqh98Ccz",
  "key28": "3odER7G2s1AtGSjpmVHDZt8sPMyjVFGjbpJBPDGTZY8MPS9gXzzNg3Z69uHLrbzJqjanxfTqK392dmD8Lgt5wFxw",
  "key29": "6soBqPxxxEcz78NMWH49MmLgK4voPE2kUNMCTLFqnfS6yVRoayUWJWM95CL71uFfyzqkHDzwVg97eW1nbeqq5qJ",
  "key30": "5h9SPkrZRi3pX4J6FFWUpExmCf96mUhetmw4C3PB7pMqYFWyEZHosnWf8ejHu7Mut7JwVGiJGKSF9iGirmmjCWVu",
  "key31": "efBt2qk17QnqT9iBUMpauKZtC5nuULBoQKVdZcR6zFp4hztgW5JT3EfkvouLYyzFhGGXsodPprTUNwPKAiq86Wv",
  "key32": "3Bzqi4H6kuZGjxqrhuJimGdmvLBXGk6WxaccTt36jpoAp641tVoLYvzEnFMPC3y2s93nWF9aiR5N2rSs7oTdivXg",
  "key33": "vNGQ7RMvFHAsMV54nZGcFE4vJZjuLBt94jJi9JKMAXjJnL2a4YrE3nQMwYkwZPXnJL3DGtHZYPiWUPTXm8HTR25",
  "key34": "3mXiRGrGAnykQ57acbv7kTJusGNHXo92p8j7mS2GXJTyBzuu5s2GrkbxkKyHvLf9NDuKWzuWNWiggDA7qnC2codm",
  "key35": "5gxgJJHZPYCjmPZbiZ3KJ7f3rJCHRnZLbG621rtd2bc8WtTR3rTFwC91DHbomxSNo3VpVAiyKTbGdmWHqs5BGFyC",
  "key36": "5u16H3RBDz8BrDEXVAWFAtyFFqdGb8jKz2qfdQM6eQxRLQABdRcwZKLYKR4k84kT5iH29iBXH3UMbU9uaaAnjb2k",
  "key37": "4REkwB6MZmS58gm1BQnHjcsXJrBQJwfqWnxbLwy1RxyT9sCMRFFJoiPPoHY32En8TvukoyREpsd8shdRQQw96fB1",
  "key38": "5JmXkHRsvB4xZEXnEvo2eBaypVB27KD2fnnQdzXH3idRjHYt2RTUrh66ZNv5XxencVGTVXZCMdvdSFfWzp8e6b16",
  "key39": "4Dv6T8zyL6V6a6m4MFrWCjJQBMnhHLBi2nQSUaWcYp5E3oKNfteRPPvojoM6XVmshNrXYT2zF1kduiDfZScsSDTt",
  "key40": "5rmYNBNKXTvPv2KKZDFdGF4vWH72TpzaCFAPxe3FNSW594r9p6WapTNcaTXStZHbwEAUGmJFw4SLikhTBQ3v6KKw",
  "key41": "5rXGF8RcZF96tP9dRMtacZuHwfZxzCS6kBRbdi2NkNb1wkpKLggoAjZt6V1mb1m8G7gTdHAKSvHnhaEaQ6z6tSeT",
  "key42": "3VbFUUZSKqp9jYAWMPSKAvQuBbEGzSXE5qAf9rfATYCVmabtSnNfeDb2xhm3fcaJ5aQ8k836ihBw9JWmtUUDTYeF",
  "key43": "WDLe4rTH7EbrR5nTBSZUxDPUF5pqYzAscXiStcuCpJQfsZuVq9aCA9UixjjHWvVRdCtaMp2xgwFYEntSp7w19q1"
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
