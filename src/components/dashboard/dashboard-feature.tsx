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
    "3H4mcrkn1JqLotoksNwyL91EEsik6wP3QxA7vFpppMQoepggJqCiBGWAaNcX8yRQFgU4nPng37qk5aJm8LT6NQya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVVpvraCxssEQ2iNtHqhCYjLGEECkD7NyarjnQUmKyGL5WH9aNHi6tEbKWCuTgxMCUSbG1aP2RrxhBdSS1a3SqJ",
  "key1": "sg83Zekti1QtM4oqVeFmjdF3FxMaSVjyvX7cjgeQoBcu9bVTQHPJrLKHa5c1AVoneXHsaF4egTpdKSSXXhvsfcK",
  "key2": "4ZAtC81pPZMPEWrfrsyYQHrg4z2yQB55E2PJiQ9BxLV57HUXoRbuqsGiNzzfDiFmdviByceKWePtii2FzfY2py2i",
  "key3": "4GE758aWLvkyTfaF6JdC5kkebeTrqAnhboZYD49n1GzpPyaW6ma8rL9p4mdjwZafDcqHdriXVmUfJyu9i5abL8qX",
  "key4": "NKypkWJDB6zQmyCcEsnCeBKHJzB3EKBb8JB9mLJLVckQ7HNCDQye5VT8DGTEMoFKvsFKCaghSzg3fjjMCjsc5wC",
  "key5": "2D3heQrqBqpu7hkrePgihkhPfo3YuBTUrLoo4LtX68bjxBJ1KUXuD17rVwLdW3cgnHxH8m2rpmCpk2xL8CdpwMs7",
  "key6": "2cEkGogxzfsaUJ3wN2MRZn7adP7ESv3bem4sD3vchu7y1HnUuLbgbRSHYDKL1WxHrd7ZCavJg84oSfsCi8KejXoC",
  "key7": "4tF9iAP6TgVZJtupy5p5VeHAvUJbQVn67NL63WE4cgCcQqWtojrSiw8efH3wMR5FiVs6w8uZDHrWpotvgjfmaVSR",
  "key8": "2igKU6QsSjziyww7BvoxgebfBcTzoNBCCekA3dUuFYh2JPHiwKWKEUqsGzbtTvvCUCTDRrGrdqptyhbQqmfbRiCJ",
  "key9": "3zF5qCVkfF9Da1mL6AYd2c3j9kuU8NrVradDHT3JDCP3LeGzct1rVTHXabEqMsqUco4QDrxitVTez3zh1d4Jyy2S",
  "key10": "3SaekPugvssW1g33sREv2z165pPtNt9S4ntnSurbMtqSLhgvP3PndRA46TW3hxFAFMewMiE6Yz3pN5o3F1Rmspt3",
  "key11": "4HfvdZ7GtP6RK96KcNjHUJHDMzWnmNX1JkWJYVCd6jJGhi8aKZWFwg7wR3gASGuPF4J4RKkVaRyuc59QbnFyEugE",
  "key12": "dhde4Q87R8zc4W4d8Zh5wAPUaLZdqkWzARUAQAZ8h5gc1tSxW6rWmb56YbDM5BnMqtShMzpJTASq5m1F7nepf8i",
  "key13": "YCjao11VeE77sKHsBjEW8Xnj3wjB37AriYwrJgJiiJdsANi6oAZpDtBue8H2uaX6Gw8dbFyjhzmThdwyAxQ41cA",
  "key14": "3qN5qwN3CxQeeaqbkeDFSwQZ7Mx612NgR7JiBSRRV4of3XikorawqLDk1vb36KBkPcXRojeBuDXDVdz6kHzS6ZrP",
  "key15": "v1oWtQWxKVwQXwGH48VDHwCgTvcffvivkXtVjSieTKAh9fXram4WDM6LmGH5qoYqFYUTHApivDvLSHEKmdpfAPA",
  "key16": "4JYXCsJf8QJD5mLXe223V5qyGZ5U4Gpces4pduK3QyrfqqK2rwxGMRUNpS6Dgjdk1Zba52veTcRpb7Zv8ap6SNzP",
  "key17": "4qc5sneT815ny8jbY2fFnMyVYxX5NtuT9TNPrmMQLXyG8vzYYoCyf6QeDgvRG5eBDLwK1xkk1NMSNG49QmancsD5",
  "key18": "3tvNcSgbn9ZTP8frrD2XHY3wXA5tWhMni227BaHyxCHAsCNz4bmKUdTiwyeNDQ7iSmpWNE6u2vBvZsJ7En6jfLba",
  "key19": "RfA1ooP1SRMLkByPnvTDu771qooeq3nwkJxH33aXbboq5NYS8hoX92ZFqbUjk118xyCAoPepfHf11qB4urbksb6",
  "key20": "5byefdjXfu1C3x1rQ5cAF4Pm7531Qhb1iSDWVfQqEiZbbbherwUcHBiFYwt8moyUXRYBcy2cvxHRFLWSNUtBGLK9",
  "key21": "5SBwNkGogPKnLwm6MWCTBKEKXTgNqNQMXyrRzGcpC227WKtNPtd88j71kuHm8uwZLaMxfH8UNbXQqZdg9EqxNjRh",
  "key22": "5xcVJg4cdzgu4KVATDfVSsbFoxW3nq2vmx16oCAnDfVa94pHrNkX8mtXsg7r9tYnd6RzJWK5SAvGhLCgMNcn4ZEy",
  "key23": "5jFaKeLEn3Z4rWvjFcBLStLDLZcRgaZhVJeeRB7gRbwu1WRm1Gk8EP5fTumKQ1SioTxCyYX2BXUAXSxknctQwP1Q",
  "key24": "22GRtNjY9yB22uNa3U2Nb8xnZCzDZmNgTj6E9BswhrCKTnRs1H7gA5G2qNiHKprDXMWdveUwWo9ggHD6PFGHgr21"
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
