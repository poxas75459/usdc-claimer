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
    "4pVTbGfmjcVJdiYEuQEopBKzmMMA6ikT88TFLTVXuXmiX3DL273Dyuj5nopW1Zq57SnRPhQwqrMAzjeiMzf6QrXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQ8MuZYXT1wQp3qM8QeE72aQk75nByAZnWFM4zUMRuCWUoZgqTQYwzEvxD3bsa1KGwRLPabsLjwQNp2aEWGx3A2",
  "key1": "5C6C9KRdAx9zMhZqvYQDn6HaBhKk1ggEQEUitNXCPEZRxk3UfeB2K6m6WzddEqahEUgHNAEV1jcCwh61Ys2RCJVP",
  "key2": "3DgEsLV3Ffwoj12vRaYy2TP4bxXDiD9BkSQBKSm22js36jXgALfpAGde9BSyYJ6r1LkdZCVKY9uKhuQqFKpMq3Am",
  "key3": "4WFEAmTRW5u642G6TDJUpyWcY4yoYehPeLeXQtjjz66nqkG52yR8hJXA2eH4ehvxBg1rpm1sERfXRxPCEcdhozk5",
  "key4": "9ZxJnKEp9AmDXxT9Non3odTtDdFq35Daits6aKqKcEoM8Kuegdhg3pnZhYsgoEkZaoFrnzbx5ERNg1ZU9QfdwKf",
  "key5": "2ebVavErgUMA6AdwwN3ia1LGrbJA15Hi9CvHskgnfNd3PdqCSSuW6QeRmH3qqftkMNA9WKomCXBgrz4yP1qQoYzn",
  "key6": "3s9q9bwpVtf8tJc4UkTV8i1kxs6BsjkrQ7JNfA9r884v2n2MqUdSCLVmtWHSU8VRWYFc4gMmHUwCih4tjaZR4TWG",
  "key7": "2QeaUn1c51WKf3huBnbZFECkjwmp4CjVYPdtnGykqA8YZJG1BSczeirPRXGwbsmBjBA1yJKApuwyS9ycjCW4dx9P",
  "key8": "j2DHBTFtgEVfuamZsDQbTcemBZBh3WkGZH5pbPPWCaDjTPQ3kWZpCti8RUPA6A5bETJXK7zoiLPB3YZtY9mVUM1",
  "key9": "5C8UCgGn1EEwEKXyB2jBcdDkuFK3DVBqonsCapy7s4h4edAnkDwfmiCMG7rBjZQixKwFocZ4nXMkZK8UE94TXudx",
  "key10": "45SPykDRTd9Vcc1aoi2V5nmLtxfTB9BWkeSoDobTjMbLnn5EzvtF8SFGLiy2Yb4YCMQiW6PU3mU1oNNobkcdHnj2",
  "key11": "21gyb8bYgLDnRq32KsFMrxVkhMHFayFYAovQbSCU7BAYBr2mA8GcH1T18V2amiVNG5JMm27XvF8mcx2CGJZ6An6u",
  "key12": "2HHKJCVw8hUd6LMH27UzsSVeJxPdi9koeqPiU8Dx7w842YAgAaEiWRQtRrJoKtc4GQUYRv2XYsuAM2Xq9aFJTVvr",
  "key13": "r4bm2tnA86SFDRKx5epYUsHkRZSyEqvHtdPEb2cEVjEH6664yWt1DwFz4GaLgyhwuErwDXwZQsC3dDCsyJwZ6Vu",
  "key14": "4PB6vSLFK6YPdYUBmSimZ5gpVppAK8nsTBnFqbMnQYFBmB4i5i6U1dSu8esYz1QWRM7wsSMg4a5fxa6j4d53FzdJ",
  "key15": "dG319uVBFCwnTPhBMtQFLcFNFQDhF7TUTrNJ95ijYnXskQQm8LoeXjGkyQii62GxdNe22T3B5iMMiv2iG9AMzWv",
  "key16": "3b8UtNfQK2TYWnW3Nq7yz9QEqALJAY7xyoqkBD9G9sx1jmhuv3GdhZ765jNPLKPY5i73nJEaNw7vwm9aaoek3Ed3",
  "key17": "2sGjYd6WfYcc2khesjbZhDZb6iEzQun5poEwnfeCLKYRFYEaTVDtMPePs2RnwEkWMzstKHouqtf6JpeK4SJwuBcZ",
  "key18": "634BtXFqX5MaXCmnPxpYYwrWqorH9PLMkNJUmENLtF7JZDDwMWyVYQLKJCrBSmQ489KtshTq1xnLcEHw5cVAycks",
  "key19": "2rFRb8iH9NaDSwMTabur9WqsvCCser88EzvraXwbNjWVKuSfBFuhhcT8iF4Qf7GWNMYuhX5oHmqmug7ZFWYS3EAF",
  "key20": "ByzpG6fEufTretYS2oG2qbKHqV5f38ujT689ChAzoSsSJ57ZRoqgts7kJYqebDZooVDN31uTqh47Q8PR36ghjXQ",
  "key21": "4VftgD34tVCmTt15QGiJLVtUQV3v8ShyQWt61QjFcywypEJQJjeQqCLAK2nMy6d2BMHs285sf3cCvEHiRdzBbMoN",
  "key22": "k8pw1p6iNEZQzWdpHkgBdHSnkahx9ocdYyEFwEx9iZZDfqGDM4LVDHJGTCARNspdKRBUeBstcgWoxSdhw7ZGFd9",
  "key23": "47mFpFpKkMm5Uu3fYfLY4Q2yiKxNCfekRPBUJVZhCE84zRoCfNT9MGPBaVjJNtbakXCaBtEFGiTCZb6FkBaQ9WEs",
  "key24": "2TL9Y4t2L4aFLTX3uizXiuT3DC7SqZqF3N9UVncs3GoyhVv6rCEnt7dYJDamNqN6hiYxv3MwS5ioTbQaMTWRA7tk"
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
