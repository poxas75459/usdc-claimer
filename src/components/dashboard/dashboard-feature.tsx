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
    "42HCorjnimZU9RonoKpyK2PWULT3od7HwGFG7SjRqS7NV6at9c94M5TiAMGSdSKRYEEGyrSn5Kap3DxY9totV7Lo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23P19yQo2hW1m34ynUvGuE5hWKS9EPikZVGMJfAg6Sa2qsWeZNgegFEHNowBBtxHqGwYwYNCkEdheFzMdyrqWCm1",
  "key1": "4YgpCnico4ngedC6a9yuUpWpo9MfPF6XGLxUAFMjLmh28rvMfMGcMyF2xvaDUNGrJEiMoSouU4YENqNDFVZTSJxr",
  "key2": "64iqZkhJZgXbQodwUAR2WVpsZLfLRbCKvmtnupJCtqJae1P9j3n8RGkETfycP79BjURpXEvA5RVVZCaYrjneTMPC",
  "key3": "4i8nKGuL6FLiXLJ9XWJGhmU3RPhXPi4c6eBkS9aZHchEBJfbsMpG9s6Luj2S3j3ZqYR6xebv4iveLJFeiP6eRwLB",
  "key4": "49N6JEhnaYp4DighnjTkhcPdTo2r2KSLFHuUvm8NZF75kGpy1RwMaMtrdEMSWob2Bu44YqinSWWkZzcyguUaLhUY",
  "key5": "5XrQxWpnahJughNrtYfA3uRk2bdjkD1JfdTCtS7mptb29NYRKdnpphopFqsL1QzSY1YFAtC5GqeA6SCxJDHSitUQ",
  "key6": "3qUL8ZVgvif54Wfr2mN5s3bJyxMBnAzPiiT5544N9eb2n29jxXPLc7RHqq8B64go82s8zq8vDjEFepk7SHrYyHj8",
  "key7": "2Vm47QGjemWSA3atQ8y32Q1qrzddRy7WCvA2Uz1Ri3KYqbRvej6xEgpYTyce2PHnHGw9ogdCjK8SjRQ5L9rVnrJg",
  "key8": "3DKNK1K1Bz27x9As6etBuBtdGUyoRCKs9mjcrV9awQ8cMRiRZ6K2XLzRph5tC7aykjX8Fw1buFvZ6MFG4EX1Z1i4",
  "key9": "65xqw9tQdreqPNu4nAg7WpxUVztg7HDkzPqQw8xchQ7XP3FepDmkD9PqWgvXZJY2zkSSnkuRw2aUyznXYp1qPuiY",
  "key10": "4GXrkQYbtfk8iD3XaZBzK6F82VkZe4GXVuQQr7qUbcC7K76Q5Ls62NQ5Cvg7uAxYPJBtY6YzaZCUePFbB9g3yvE7",
  "key11": "3YEV7a9rs4LSUPQRD7omx47nRpH4cUNDJhznx53vb6GX1ymbGdPJgFWJR25mz2p9ecKD1P3EU4JchYDKgJMqW5Nz",
  "key12": "3B8TCWzqmpjVPwMexb94DcU4s15QAumXTFws55LsN28Yyw6k9uYLYL74y73QALUkLzvGptjiekGW2XeBTNii8UsV",
  "key13": "4dRMeqh9uXUPSXmCwEQ6nBuZUZJdny9CWdhnULgdsiUqa3qZSD4ouxvQe4FnSQ8MZtmtDspjaB9crayzLWS7U31E",
  "key14": "29AzL79kWFmj6BTR4GAU1V3QT7Ccn5DEHHgc4kxxoECCb9q4TPSzsdC1pSkYANXCvm356bkHcqQaXEii8HpE5XQ2",
  "key15": "2aAQ3uCWkYv2jPdoBVfzzfmvms4cYEcRenHw5kj9GhFxxc1JTwHJpygerGF3VtKiX1ersj7HYfYoteaKNvufnk4d",
  "key16": "2DjSiQxqw4PLaWSvNU9bJ5CC3GSeLsAsiuAPodyBb4jfmLnCXzkJdLZGU3ap6xQuJa2muxusoEB81Jt5pUZgMPxJ",
  "key17": "gX6F8eYizzcomQxTvGD8bxq16rpNywm7VeJJyi1nXz6V7qfQ6dMqe5ro4VVFm1jpewx6kGKSo23wLoWCFPV1qJi",
  "key18": "4ZWQiCqeZHtPaKmYSbTsFJ5AfopZh6bBWR5VePMFhvjehDaNojP4A7WtAzppXDaJhmVj1SxXBxUungYRRM35WVLV",
  "key19": "5YS4KCQ632uTD3V8nc7vGwdcdjSgS968o5Q8G4s6KK1sR24ihBuVNrVHnL77VNteFWr7by2WtRDP6ia4whbyFtQu",
  "key20": "5d824eX5k5dDZbR1jd5AK7Dj5unStsLWPgLCJJWDjNUdg4cwr8t2bGBQb7kTJkuHqSyDzNHRQVkPduL21ymJdQBi",
  "key21": "3gSoBAegjWknBSGYYumXswf8Qa61MA6rQMR6SWE2b9aqMywdTNqf9thgG7JUcwLhmJZ8UMjQb9iEwuMSUp3MGKAn",
  "key22": "3RJVmbFuQHLrCdckRZdkDaUbPqDA6cseT8JPf65jKsWNYbK5j3WoE461V9uyE5u3FjxTPwWXxttfFUS3GR6HJJTJ",
  "key23": "5jBe3GUoDWPXKVr3TMGST4muSQWFpbbhFFjreDg3zAcscgyRothHmK4RLUkDHnFud1MnumkGGbHQaQpWudfNxY2a",
  "key24": "3jguy6EuDh5Y8AjiVoLMe2m32yhjJvQ7ApTAGu6mnMqvSbESCLCFAXX4edy6YRqEAiMb25sh5YnVD6xcxj39VgxV",
  "key25": "t6WkXnaUdx6mQChead4121cHzfE7HeDLoKr4Z33EbExTw2LqxiM2SCFc29gVZhb66pEmWdePGpaAZf3QTeWLhcX"
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
