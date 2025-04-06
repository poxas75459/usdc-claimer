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
    "5WqouAz4xDBap3XX3NSV9PTKJ89MsZqyrEeN73CHE9ivGFXsDscVbHg46PnzAR9BuvLRiA4P5bhS1YThbdS3DHuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmb8q7e5rmQPF4SQfLCF8R2qRKjZTCDWRwSocnhw7uDZ57sn3rEsZXzcNVHfhsrGNBf5V9caYJQPJJU5VmnLonX",
  "key1": "5TRZzcabaiu2E56oxGBWFSbbTbGVr9tBW1yKfUuGx4M99SaePtokoFSX7w7Ree9QMqkkudK7bxarrc7iQ5wvUzYb",
  "key2": "5PXozpMiWKekH4w2ku622eFWQd3WA7ivjzTNnncHZATaVKxWS3Ux8CV5Z5g9PeoqL77CV94Ty8ZVaSojeTwikwEt",
  "key3": "2hrtHaDMpZbzaR6RPFgxEtMYutkrNNe7orBTsdxhWmd46cTx6YHeYZaJviA4JqFAUVTG94kqpJacxJA7TgKhQQ9Q",
  "key4": "5aCov7t2T9yPWGeMxA59N2JhgU6yUTg1n8S7SByDcuXJYXwdsmCeaARUXG8Z2zeKdcfijFxpgkKdsZ8Swa3GSgYw",
  "key5": "2b3pZBQY6p2jsJCEebHG44AhDwq2qgpQKx43NB1YrmMAXx8FdYG7s2iPVieE9MqoDW49LzrZ5HTJpjBE7N4r2j3w",
  "key6": "4nKLsy4Yf2nu5iyhGCNsPiejkue97vpz9euYucmYZWkuyEM5xofB6xSSpFU9YEVA1GGthGsjT49tLe41RFaNAN8t",
  "key7": "63yJLuvRi9fw7gKBw19fZXwjifWQ5UBFDctgT25UQHY2B85Rye2XHfpup6heBg6fqLUTtRGiYjtJzqujmdp6J59X",
  "key8": "bhcHZDtwuzaWnADhxaZNvcHwes7dCwdGequ5DXi1FYTdJPtYj68pAZWaoAHpHN5BSQruTepP8mgfb7dh3JnS5ZZ",
  "key9": "65j5LvMusEAK6wwK1882kv49oQEdhvA7TRYFSST83HQ8eQ5SM7ziF41P6awz2ro7RdqGwMcXbgF5p2rE5ax9YkXs",
  "key10": "2UgsN33dEmj76usi7M82Fra5JeijojY5gzwmUgs9XS7JhWNyKtWe4jdtdfJKkwBnX3rTTHfYWoWABVXGNUbfSXtL",
  "key11": "36ojv5TKoR2wzBW1MMDSeYQkDCDp9D4cevvY5n3AGHjqXeejKJaA9338AnUJhBEGuEKgD9spuJpoigAD1VagNe5T",
  "key12": "NgHCHmucN4wksehxmWghTtKq4Bd5hbeFy4dYmHkKh5RG5AkqPaMSLGTBDT9uhWJTXAoS7gtUGYsXDFgFyNghKxg",
  "key13": "4Cv5gLSPzXcDW5A1SECv6JtVivPcw3YUR1h5aQkTRDh8cEv1QwanDKrSFQyq5qG9wcKkSLUKLswajzRY6Yg3QKVH",
  "key14": "2izWxnxGZhxhPGK279swNDXargNaiLvSjePueKYdMBVbJNCSWi46XM1w97Jktfx7D94gPfLeHbrCgy5RVuartsV5",
  "key15": "4azjfFRYDQ1mDxG5p1RFXBpDL5AcWDW7rkzCGWTo44iRm4vUPKSNVsybZYx3oWupdbeb9RAEX6RfbKLr42X9JQ5t",
  "key16": "vyAnAKdLUEhGH5nkG5cv7wFKWBKNpiz9hXrgS5gjhNX7s9vrJcWmwqjBGhFKTUkCHfCTK95mLygpKWXQyBNHfR2",
  "key17": "4rQbaJU99bN77BhV7ZhmSNMdUqduQFWDWXU3zQNQHaFNGvuHSryswA8nXk4p7rCpvZArD7j9XamMemaFYRvrQBUQ",
  "key18": "4R6GB8az2UxT6gsgLYxTnk1bVi7dzdvySia5sM7psZE3qTvT5grkHwwJdgAh6VPfLZmffM5Ru5TQva3Zd5wp7TUL",
  "key19": "4LzcRyJ8GGaiwWrqvHDmAFYTN8djTxRGLBiyrvhbnhA7GsCwqzQraegkTbECRivoprmkffHh7Y5sx51gLYxpwvsM",
  "key20": "4Re9Lo9mnC8dW9MpDW3DGKu1oFXoPTgznyTjW6CXaG6qq4SnsViLdg5kjt9u1zqvoeYTznwk9EssFp9ojy3MuWg3",
  "key21": "wELBecs3Dxi2pnpPuH4uGkU6qBTVZEzsYJmvMCdVH881RaBX6fB393cE6Vn2k7YXc3r8bn4qqby8F7y2Judsz5M",
  "key22": "2fo12WafBFrTx8igV55kVUKtF1uuVk6Dgz35UdMPehWyRBPoQzKea2k7jr8SjsqpeupDdKmmeKRmwN1FNYcX2wtX",
  "key23": "66NQyAziJV1kSCj7wazzZQrYXUmydUNSoAviVdbguce1cLCqERDz8b5TAcT3tBNmYaNeXARcgiCSCkvrmLKzdkZ4",
  "key24": "3DokVTHNVM1LyNNr6aNCZcP2czWFY5rKtddBbe4ryuvChSVVapHXHASg3eHqiTUbzqsG8HcUQG3wwJrA9VDRai9R",
  "key25": "5p5xnu9P9i73Bknx2NVzRCVwhm4NfdAj6aYwUmbdksyJVJSBPVYdLsD8EYTHxhM69tM17KhRqaLtv4D5xxoJt7WB",
  "key26": "5ypVQZfypk9Gx3RCnSJaaPYqtuuGeqV5Scp6eCAs4iweLbFWRyRpr7WbDYkimjYvk8bTzyEb3FeTKeH5j6BQ8VPF",
  "key27": "Ed4PoJNsU8vagcECx3qTMxBWT9QKnP1ktner7Un2UXx4PED6N9D54h9FsiTec5Cjr8KpGSqwF7BpcvBK5xevvJ3"
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
