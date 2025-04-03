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
    "4aBdmYpj5uWXkBkHFRLwrL9zWqqke6PrJfv7Fwgp85t3zwmgUfQvJjnTvGBCQ3a9m72vbQgxqz88fSe8ZwceY5f7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBRwhHwaHjKiQjpxwNAgGugKajeQJ5MskvSEDJUoHKhvN1PRSva1NzwgyXvG9VpgsMpRBkKu5x6adueZssetQta",
  "key1": "2aNhydVEvnUwgYJPJ1QnF3GzfReffuhpyF6b61e8Qquga3Vh4KzHqKXS1UDua8HxnNH4Q6wmG3ZLQt8BUpVF9eaj",
  "key2": "2B18yr37PiDiv7Ct8QCjwTcAn9kucTszbcnbpDqBySViobd2jF7YU34uNpo4C2hfwmY3FbSTyHhnybsrH2gYqznR",
  "key3": "4exZfrWFyyFGJctABjxrYqVD3BkhiCWJJR35vg11Dw4fw6QZe77575hefuVCiNQH9XzFPtpnaRD9nCykWFwZjH25",
  "key4": "35gqNM8NwZGAeZK2Y2jZPpzzB846FFkPLWBbQALCxnMhBnJDi62cHSPdNFmTwrC8hyUGpHtykjCXJ1xS19LUrrGf",
  "key5": "5rbtLFNZLtBYs9HoXtq6AXbKYzVVCFYhBMgjiNUWMYM7j6Ahrw8pBxL9A1WXmdQ9S2Z7GefTQtYwg1rsA7pVvNPV",
  "key6": "3Difs5c3hxcpMghDApSoon7uwzA8kc8kjofmbKHPW49wwzCP56bo5uHUjnNn6BeBYrJ4m7vCbnkyCFDgo6Sx9zbd",
  "key7": "5TXJ87cjgbfsCSnGCwo4UeBd8xodAPkgy445H6By3z8G98Acr7xV61Na8YDsrSJ9QwCG9gCGyknEs3MY3JxPgddy",
  "key8": "4PSoULXN2jg3DJvPF9brC6HndZherqdTq3WdbjxjndndVZYA45JsmWhAdkq7Jzr9u7no3fLRVuNftR4XhUakvE92",
  "key9": "4DEbiurQXGw6BRLbPqhQA6LZcL35ZMTZAWLgdCWgFz81qJeateDJNUrTa1Uxd3CMrhDCemKDDbzmD16fEc6v6gWd",
  "key10": "58CtotkiPxCeHedqY5LZkN5SLzqRJcdY5uxfCj33F7v648SbK2K4CVDJCHWHAzdMmWcnj4agUFgHidWa3SqqzecC",
  "key11": "5VEEKpT7RURAtdpDthE66bYfZBzctNy8Q7LuwDhH4DRByskfmRewggpnQNUk7N7WJwL9GHii7QvsVPAVqhqaDuQV",
  "key12": "2RyjH55eAW7Xwy78kfTbYeEcfT9LZn9mfi2CxVDZeZ8nitbGj6ZGcULoAguT91nN3WWEjUpnG2v32NvPDQq7YiTe",
  "key13": "4NNNeiw4gvqjhCB3jcNJ2FUEfBJpZsgTACye3ymboGm5LJQHGwzbUTxMjQjsANqdojTzm4tQhioSRp9cYkkv4EvU",
  "key14": "5PfPDCAXBYAo5B1wvo6XrtTPJUz6dAHVaZZijoaPj8zdSUhCyoYJyicgS8zPf3C9rBoTT9jXnJN5jhfTft24vCiS",
  "key15": "4W9RuYqwErk7P8itJ3ai2KDdcmTF4wyZxaYy1FHxgRaornUirpfHYEobkBxf8trr18es2TQCTMyWwn9ZTvtPFzvL",
  "key16": "m7KqiFq6ciwxoxjqHNzCCFhBvTo6T8Y8iyJrmvSHPZGjjJXWLqJ7eueB2LkCpdawMkY96gojpNr2RSGwUpW7oMn",
  "key17": "52V8ZCLx9Unemv6utH4S3HsJZYErMeytWvcUoUdma3VJbzDTWRcRUTh3wohZRmUDhaXLBo9jg2hnp4si4dGhnwgK",
  "key18": "4KFP28MoCYFEPMTYAXWDQgavZxw6DbhvdtNUutJvnfnRugRkAmYTpRRVnSjWrJpYfn9jjF6Z3uMiWjKHWbkuUEgX",
  "key19": "5oS7niK4e35Gb2WN9h5hT3NXFLvFcMZy9p1tJPcR27dMT61nixdwT7LeDjmot5LaLPmiZLSnJBGa9A4pVjnTUuFy",
  "key20": "5Ch2neE41qoU75JPbeycy4L9D4qNsmVZLVwpw7Eqfzu5uv1fr8RYBT6cMgq3fNshNwYweaqRNJ8Azueuvhqc98DR",
  "key21": "5qnKLYwjsLozSxLnzciFWvVxJCa1HtDgvtHPNpuciEa7o2S6eoc2QtiSTEwAU56X9JUQh7EjjgrN65D4cb4Yt1Dp",
  "key22": "2jo2eg8rn2YaymtPSYLYpRCtdLwQXB83D49XqBnjWtirGG7K1ztxosHVCE2kiq4GPkPoPXHodwzHg1mwawaJrwNH",
  "key23": "3qWz6tTwutZjPX262pZiF5sFKZpBbU8RF4h7zJbnxjEmLVPsnJYZDjwSC9m4pe2uZZLNLxeV2eKhTMXZ8ZTN94Gq",
  "key24": "53TFFYF4Hk6vxNxbPyWp7AmuXFMyd3G639ZoHqcTmfLZR3nMs18GyP3mCgVWcH7X14h6bA8rPuMB79swiT7M7yYX",
  "key25": "5znZ2S2PckdhVsp3GM5GArJjgqPrZLTuKdZXS1TJJvZNBxHBPas1RWBPhFe5rM6jUjdBN8qitkPzeoKddWR3iSLd",
  "key26": "3Q8JUaibaWXfdvm8RCAS14enEZ6Ygna6WVJe67C7M31u7PXHiwLowy4hkWgozpvY5Cx5LB17cHQUxNF8Zo311CHF",
  "key27": "3XHgQDvZiRSJj5iphxzqARj6AVgzycbZhBrv4zbkgCX8BFfKH7qb3ZgHR3CQZntJQAyXMSEJZMpRjM8z4tQQbpzh",
  "key28": "5XDqPAqwgu8FWERi8cwbREQPyzNmSPdxb8Mq4rZ2uea42VtYabB7nPePhyfJtPnpo4sZwLgLqJw4gDqm4YJcaEm3",
  "key29": "4G5UQT91bL43VekWsMaDLZUNKVXG3oP5yGkZoHyEYVmJayMHbSECjigsYxuGMui5vHb7Aks9Likh2WcibMG4H4Ry",
  "key30": "2daaGPmz9qQax5g1DeJNxNB3HrUJXb3CHtcyozcRZMoXTeyS2YAQdm2UYSX3qGfgStxSKRcR9q78bEnUyu21ep52",
  "key31": "39FzTvi7jDMb6NdaASgBaNfdgRgFJS3L92tuJW4uKozHvcQtek9T732LF8mPSBXR38tF4hB6pKbA5wziNLmzMqrR",
  "key32": "CQTSJRyrpTPK4NixQp5FYGuxZ8vTGssXRYVLEG3XquekUGu7dDGK3aXE1WQyQJpysSG256jQUPmHTEvKibqpYMT",
  "key33": "4kAyLnrkoJhs52SJVLgTuex12pUDm2kSKBxapoqnFUbQcvLAeqUEUSdUsVajCrtm7GMJojc7GGXQBDqokvwGDEXQ"
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
