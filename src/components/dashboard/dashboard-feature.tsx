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
    "5Z9f373BUzKZHAVeggEaavK8pKdK93yZWFnB1GihH2fxBAABRjxaG1GKVuetDrq5TSrRQDabBGToSgrhVpuXUvR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ssuzUue6NYeqFiYDwNYuwtC5k6wZazSfmGGD1HwkyfqxneibGmtXCJPbapne38dxX9DYJLMgmyw7C4nYpqmPNQD",
  "key1": "ms1Yd148H3joxQkNVeT6EyS74vXBK26fxw8ZMfzEfxFRtRABaKb5JGMpz3iCQZUGkrXH9yWm62fjdhGLKq5ZYEd",
  "key2": "59mCF5M2HugzLsK84r7D13v3CZJYv3e85C5GaDdCMGeTW66LWqoujcCxAHYCiSjq9MhcXQY6SM7wqGoo8ohyktZL",
  "key3": "62cyBBggSKTxNcexyeUv25tLv1UQh3uniCagSVcGvVpc92usobcrVhACnGYi7Qaqnk6RyztAqKpzGkwyPjCSXiTH",
  "key4": "2PVqNduK82DJMgLfx4r4jTn7dqcTiAGHaop5BzZWQFgbwNANU8aAEBXeJf6Y31FRudupNALmtmZWUaF5YbYSdbh1",
  "key5": "4CWoEnN9opeYsbykZL4Ccfsu15qx7son9tcVAtwxN6GHEECGzXPjajCkoa7HdgZPxcPuyosFuuuHg7gWSCoD9iCV",
  "key6": "4R5uXBPdGtqsZJev9zjCgZ3wX3wLpJTbaeckr8niCedcFgWPEovSTF1pCiXCE91xNLDv1kgb1ZQLBdshJ2P2faB",
  "key7": "5GJAa8fnGuk61c9pEzXPeydCyXu8qWqQJjhtgAuV7TZtvtgm71m8EXpN8DChewaVyRwGZZHS1hSsiCgmgyqY45zL",
  "key8": "3pVhremFZ85C9k9xt3DwJkMbyaX5EMhWJS7V1PUkiUcQaoErB7D8UvQX1zfzk4MWD5nQvr6G2ZRnpTaSAVYwTNfU",
  "key9": "59WXvhU6fUwRekQ6bMr7ZqNw88CXUJspTqNxJUjFzDc5cnVeHEhwaPzh5cgKdQxDSxFwgwKjfTjGMucUrgVEJSrN",
  "key10": "5wvVLQW8J2MR9XDfRz7WFKVJPfBuHddy17rQaNmjB52Day1L3TVRi6PtyDJpW6XtbHspnDUSVRDW3zSt8iCDX9f7",
  "key11": "4uRuMPNHbuRh7f92bGHEpFnToFZNdwbtXQkqnw32TSMD2bKftbfpL12fPMYVVVHR2Tik4GDmaupbhVLAXHCnj35f",
  "key12": "uXiTHSJ62NH3th3GxjLyVn1xs5v1Gfyx32NTLL8U5m7jCN8SYg6pJKxtz7Ta67AhirfkQKxq1BjiymyBf8eB2wa",
  "key13": "3eXrnwcnJP5fcuwEpe7fNPFYzWY5PdPNJ9LexzDVqQj9rj49YogaevhZbX4vYKNiDdcpgvYidYdYVuGChKxULvoZ",
  "key14": "a3EquGAAMWgWk4iFK2PhhYfrhCNf5TMYppFLnUWT5m4oyQcTVEtQ9wVQiYdzC6UwtNL741LDEyb83AgqE6qkDwV",
  "key15": "3ACNe8x5CpHcB5B42ry2zFopd4GWtoMAbkNo7ms1mu9W8wDtfpJzbxx8opRkB3vT6FL7DUhnrGfYMdjFEsSGaRve",
  "key16": "2u2o8yxS3BKMcLA3W3Q9Xg22RyhtfoBY3tvpaX27ibkqoP63nJqiYRscEwTg9Ci2hHtwt7gfJ1hjub4Nmhcs6J8s",
  "key17": "36sdcGrE4yqnzPQ8GLJawwLTpbr1vpytxh3deRca1yeodBnbC6Jk2yxqu6zhRfh2xZxcCToC7LeYe3hKEyF1616h",
  "key18": "2Bk1LpizxF1QjcZhX5WCvDvmoR3CbcA4PyEXMi54CwBPXNPnjRPYjDxyVe4rsAJi32S8hTMfE1DvSk3oHVNhM2RG",
  "key19": "4xhQ1u4Wzw65635znmpm2VzG1DJNLcrHCbULxR54p36W6fZZMX5t4iPyudTBA9o8m5uCAzAAVp2vc7tzf8DQibHa",
  "key20": "51Ys8um6QKyzsxwoQwtJEZn2twmfjqtyug5M7ScjScU7oAjLTv7R7TkrVYzgPfGJ4tT4d4y2UDY2iWF846Tt31jP",
  "key21": "3sNYZRL21rE2w7pxaYWa2FFH4YV7trZVZsnk3s2nMHFAQ9mQRvSWTJQSZDkSikRwR6KEmK15G9y2Zg9Y7BoYVWUx",
  "key22": "4ykUvqJJLT9P2yRG6aCTXcSifc3zShpPMcypuJuHtuDQKbqZ9B9ZAxJU5qnNwJaAE5fPMSr6acrXpT983Yjz8Jjc",
  "key23": "34Mpw7DZGp8jezjJxwyi7M2R4D4QrJ8X87jHYCq2rTq6jVtLhRL3TroZHcjHV6ndoGHBgQ6c3Sw8HYimumD3JzAD",
  "key24": "5JPuB34o6K3RgTBZHnQi3a2hGmpKHgq6X4WP1Qn8xEFhvY9NqZRNPgKh9iczvUeCASPYDyLzjzdzpyZsa25QHg5g",
  "key25": "Tmg8gvy9gwjG96YJsi9yHJ3uXXyrwdG27MyY7NMoFHgJnCMUZ2nbhtFxSY4JhVhGPgwEYLhKiCDvx92XiVUQHqF",
  "key26": "2eVNRd3vFHN3NnWSBCmqWgUb6Gr5BMDthv9sMDMW9M9yqmeAazdkrV3q7ogCKBR6mu1goFCgubHfYSRyEX1S5wg4",
  "key27": "Z6rwLQEWuF7shh38so2P5qfp1giCAG6n7K64EkKugBTvn9gr9yYg5w4unK2BoAz82M5YXhkeVUgR5gPbqLVFQcz",
  "key28": "21rr59JDiiE5MQLbwGDnQwAbLKnJaBPSn7YjyMT93N2JEfcx2NgWiJcmhookAboDu2cPZgCZ3YdBs1PWtNUn5NYm",
  "key29": "476dgRMuVSTJ7rDdZGGgWoXDtLCBw1HjjfLAkUHBuVXBRnPcCMe3sPyjUn3jPiy5TeAkNcy9VL773bBx7SjNvLvH"
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
