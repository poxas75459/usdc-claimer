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
    "5MeVnByXcyEu3vd1i5pVBYUHL2dtKTm4BfEccrrxTaYSVDwHqxKVei9GBmNgZy9uxnJxNissiwzNT8GLGPxEJ4B3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v67icELL7tQkWmUdRjBCzG8LBQczXe3UGjJPWfpSoJm49jmgV6VHoGqfTQ6AuiYPjdgWRr11e3pGZkxowFHpkhE",
  "key1": "U3j1iquDCJUzB6axFSEYXcVyC4iVW99uzRGNYXUyvzxNDP2whWJxx54ik6ZMoWHkkPjUwneywmdiZT6M4v8LKcS",
  "key2": "kRRYrhJgsUCNX9UDnBmiA4GiYGPXFzK6RJqHbqYPeH6sx9cdszMEK25sZFVZCwBHLPX8jXj7tqJBBM5HR6SNz8f",
  "key3": "4NGzrS2nQM4Hfrw42QB5hwnSvkWhoPP7ipJab87hoAdBLBiKmDQyPsrV5XSTYpzxfWfPQZtErNwKuPGr8F826F8a",
  "key4": "3mHLqr6j4LWPBRH2HEnF7HZDKKEtW19CLcohZWi2CKHJAHJGQ5S49Pj956UAv1jYG9tq9NtJ2N6c1Pi6w1NJ51e",
  "key5": "5rPuEHsMsUd8AZfrDZj76Yfw834KVeWwkYQEJrrW3bSc9qsWfGd2gJiq1nR4s1xUgTHjNhPx2J2UQfT84QVk4CaY",
  "key6": "KHQphFwiTXJa6xPfDxiL8nh3TU1iZ6avBPCLL7GY4WMcBNjNcJdnZ1UerrF4eRy6B5Pn8TFemr7vcKYRjGhY2es",
  "key7": "4jAUbQ3c9Vzwx9NCbVqjnRdwXRZhoxeKSoZiUTXN31Zms4FdiGX1uKCVh4HXCpLzKjnvNfCUY5CEQxhR5GCQoAYs",
  "key8": "eW6U4c4Xs31DcpFh2dCrTnGu7G5M527LKYJGy7ss1TJympWhesruFoJk1RUKdNCK26EFJUPp951DXwZqdB2j2sL",
  "key9": "2NZYHkF94tyHfeD5AKPyrqUEWwghskCDRKmRzj8fu2z9Yr3ZyFCPtrr4ryA1Ze2jZ99sYnsVmabtidf8A98xdRj3",
  "key10": "668KTpezzZTh9cMsx1T2F6t3w65DuwuMEVBuq7F1rJkxVf1efVsHdFbrm3rCpQk3TTzMYMyUuo7FZBPDwTRuP8bG",
  "key11": "42yN9VgVusRD9nWZ7p9vthGhLPjonyrKVog8j9mDeou2yrwDAYn1YQDB7GAL1hSXHtFM1DHAjwT41zuCZiJ7WWQR",
  "key12": "5kdSVmfurMByAKqfgenkk79ZmWhSApi9ktfLdeTmuRDvphKpBmT93LTbHjkmo6ymdZ2qmBnFvUpG429mFKW7Pii1",
  "key13": "5fZbVSPPk2ejYec9QD5fupfEgCMhEYq8LEmrx9MNnEpYw2ysCV2CovQsUxLaGvcyKXv2KGycLGRuKjBEdwHX2x7v",
  "key14": "VjdfqAvnbxjFquoHFMzL4ZmodApmo9A64bs8bm4PPL87cRRpp7Ezd4BMCHv1hE1J47x78hkn8DVxbzUe6JA3xmb",
  "key15": "FT9u3Lf9oty5kbfDXLqMD69x5y3UTrdA9ucdgPsMLsPCeU46odeicRrzbMxPaXKXBQLLMWNhdM9FmfVMA6v34en",
  "key16": "24oXm58U9Gd6FU8gopnEkNq26sVo5MKD76BvLwAP6Yw5JdL9fRy2VS6vBASvr144zQAh56QfZgeP5ESTdLTQ1b2Y",
  "key17": "2GZw93RfbPvPbaVApzRMi2vxJU7YoFSapYxNPsPC3KqfKFPhGd5ev4uycejDMGun74C9ANrcR2cMC8amabc6CJ22",
  "key18": "3YJUdh37ihUewyTkyDUhSBgG2zaXpFPs4AUqJr18prGV2jepW8KRGeSKGejRkGCk7YtWx1fqkB8QxSXnKV2Yqtmj",
  "key19": "4rmjJJ4c6J9Fx6ZGXw2B7qkHzn6TijjtV4VQemm1noFvmzp1BpcRvGuFhdDLecPFzAay9syoJgyvjUZB2VStCP5",
  "key20": "2qpVUrqfVT6LM3SiFLKZXXjWznoqkJemyBgrjB8pyqP9Aoieyi5RpRcPxbLidgECfsvksj93nVBJuDV6U9MKjtsS",
  "key21": "3wSdxE4JFxVPjnBhLhenC8JkMHK5aDwgGx61kvf3nQPpmaCfNApY2zoChfmhnJDyaXYV52aE3gYUNqd3dZetHw9j",
  "key22": "Sskzi6HDNaSE5HVNpXmSCUnhAjLDAGi6WT1A294uQePncUfE51nf8meB5rQCYJmhc4Lkhxs2QZGTFFe5BFfxSxX",
  "key23": "2JJZr3VWMa1pWcZ5AFRQBvmAYDtxYqfYAf2qmh7tAZQiaddyFMAUUBy8xq9X3i1FJbAZ6k2cSeVxSY4PUb9ckEWb",
  "key24": "6LP3Q7oZCm91uptHWk63Vht2SRqxAKAg3N5X5eiiGpDb6UkdaK2JDYLbgdPCFiHoY5JNbE27Kj1SGeG7S3aSmbU",
  "key25": "4xwQDD8nJQyriTDpPZszc2FPhA8mVofxc6JohzDiEHcNggnRj4bqrruhYrh8LLMKDrgRzrGWrmk4w9xFbSo5Hf5h",
  "key26": "4phDc9mw5MaMQSWdp3WtEFg5TKVhFwyPYfZ7dxFrU7ZZ6ZG2zLbB8Ua29SZGS7DXQJkKu58eaBNZbB9FW2SK28FK",
  "key27": "cBFAV1C77ztNvDKGCEqoGoLGgSB2shp6hu2xCdbJfL5urbfxtP2X6Pz5JHJ7Bsd438snfaFyJue4SS48MXRmGbo",
  "key28": "5xQVhApRMXBeVedKiv7u6nKWxcGRQa5iDJv9eqhoqukXJ7ZhtbNSF2fs8S2swy4Z9FVAkooR1CS7EUycicSt5AvB",
  "key29": "2ntWRnxQx8VCw6ognw6NtBeGEdx2HNN126m6jbgbzqZdmrWNXtZ5yXLaFDda635Qk19zeaYSDgxGBTmyKEvTjgn8",
  "key30": "4qZoACf1QyZNzjcrA47WJ9Pdg481tkauVKFb4FEbjdTZuiQB87129ppVNo9x5nE9JjpDRpgQwVpWUc5eWAsw87E2",
  "key31": "4TsszjgNHWJ1ouW4BALnMR7h2Z5Hm5dLXS24xeFbAf7pU7JcrjdR9qkoifp2L2HrzB812HWbV2pVS5AU2TBhRCjr",
  "key32": "2BCR9jMgwzoSwVWQfJmm1sm4WS4zvRBQKNMoPCA7fbrSERZrB7yybG2gK4pEGQom5USBWQRBw7rkSHsiEuNvmWWP",
  "key33": "5aN5Who9vJf5maKVFGnozaKDnTvCvsQ5AAgPs8EDNNPGApYVgtvSVV21xMUZveaU5QMCLqjGcaCYUsbJgPZ9iTqJ",
  "key34": "3Gg26jYy5zn8RBH1QFmANFNfKWuu43m3KRSGtdpMkz5DSMzxn5QZmUHjsDizxrwScMeitd9WeyHKfDHp1Nx8xMLh",
  "key35": "5vK5niwuCxoZat4CuhhYiYjPRLS4zxFm2Zq48z7DTwXAd1yBoA6nihMdgYMjwUffrax6xhLVLCo5Nqf1D59XFoMx",
  "key36": "4gX6Sq5NwQjf7YjKe5zQmE73ccWMEe4qWshjcJ5r3tsrfAkKgknCqJRJxcTV4Loargu4BtXtbDtbr2m4tFHhdoGK"
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
