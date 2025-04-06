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
    "2Tn49kA3osHooH3sSzyGCope2j3UZSYaD3zzzV9YVBievxn7KJrGh6P49MDqwFH4pUNED7YHE5txCoshAyKYr9vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41uYkdSv1hEXrk7uq9cFb42JLdzqqPHkKnKPSz4jtpf22GShHuQRDHhVcDpdSF17wBGvTtVP9jhizgor6Sw7DurP",
  "key1": "4rHRSnvGfyH1DhNpDwDEJYrHGyZV44mBHBFeRHJmqetZEv3rk3iKTms2ZpT89AkGERkxdvz9Qhig3j1CCMzd6QG5",
  "key2": "65Bh1jowSCs7rdoTSEn6MosA6CkgHmxbWHJjo3sCnAsVNih5dsdwkQXeat1PfPe7zoVmcB5wfsrmpPExXJSvirtS",
  "key3": "PZciZqUJZSXjHrR4VT9ttEP5Hi1sWyoCxdcnoMVX9p4dGAFHAk9MRAfvJcgHpkhBaqMuqchBKPVmVWWARc1R2YD",
  "key4": "5jqiamGPY7JRqp9UBCuJH7hRSWB215D6fvoEhsy5m5r7SdcWA457JVb5aAchZQLjKXvMZtmZHvkpVXvNvgmk3bdM",
  "key5": "ZfipZf9c4XseM73CL7uEHZ56ZCJAtLrMHuLGgZqnB2vh6udro5yBnMWqLuXm2g3Ao8rb4eyzhNmiDVUVzo1KbXH",
  "key6": "4xwmnJhMYrBjMjynxk3qqY2HTTGsMwfSJoPZhhth4qBko4ykzcQt5zvg8RrWTPY71aUh4dkCzuEKEp2sEPbs8pYv",
  "key7": "CF1icf8yxsNQ1PRrY89GTepxpG9WPcJ5SnhCgXnYS11ckq9Le8p3UKQiJgmo5sR8W7LsxyjGFoRAfof5MEzRNei",
  "key8": "2PZzKbTYvksgkmg6Zx37pJRo9uY85G8kUYsmM1hBSmzj2SQUGt51fYzmiWuDkqU5AWJA5tt1NgQHhiqaJHNYYjWS",
  "key9": "3fyHfHq25Kh6wg4VE97yFTrAdnBcZ3MdoNxmmoZu6K3xfLqybq5PkPXVLPPSgY3cw5rugcVcaMGRnNz6bg1mfiVi",
  "key10": "5osz1y6oD2sNhLM8iNAdEpeV5uVrrr7K97cZe7DJpZ1on6nNHQpGPYRy1v2jjX3YQdQCC2tEqLiqyc8xe9R3SUnd",
  "key11": "4zVk6bH8RyA7njvfKLr1Mss8L51PbkyskcpGnbXV6jsQ8WFq116PbJ4dGQXsXJCi3W5YQb8VsSoSrknCApiT15sn",
  "key12": "edWgTQMBYHoPfwP1ESYg78hiVwnv1b1X2Ph5GQUt5GVJrQxJAeMz1sset64oczicv5JMUnsC5t4oxL4t3k8fRTk",
  "key13": "afx11ftsmbxZGaJRJLUedgidX6Kz4eBdbGpujNMAK9V5CTeBvMkE6pG71mojTLtLaQr31CKwD8hMg4EPX6Zm8x2",
  "key14": "4QyfuXwqhaZAA4erC8c9HtQyDMvnPzmRQpi3oFoxRqgXoycHexxie1HK9Htmcyshd2Mg73CyBFBphycoQQX1LgYh",
  "key15": "3sm35XnQjKFY18QwcQhPpHe17HnnVZKXzHpGK5n19kwzsHm47BPxNugwyiLZ6UQCSxRrBoDcP3JVKQ6h5PW1RTfU",
  "key16": "5EpAoev1iTKd1wfVuA7zG2QYBwmYsWpPF6U7wTEdgKh4i95B7nmMZzKfigcNRFH9QGHuhfy2FCybZQFB5Rh6qFwV",
  "key17": "34kK62xEw7ZEPYjNufXp7nfpevuXVj1JsqbCk9Hp8k1nfPrJrSZxM8KVLRYQrupdeXtRuUzL747WUGGRWw5NHcTr",
  "key18": "2CyxQoMbLKncLaEsHnEV7E5Dyu8WC8A2sdUTU5jmAmoMfpWMb7nYeYFinrPUmUtpXMevRsuK8MPnbg3f6PDwPMct",
  "key19": "4VFbQofvqQje16f4DerkRYrKbsZemBZE4qchsZrXJfYLtfh45XTZaZrDLbFNJkFi3stRyKDXKD3ERdbxPhNFmDjW",
  "key20": "4UvhY4ZvcWEfvG7TGNjpnW1zxBNgcMfxMcj5sCQJ1CML51vVFEX3eLNtokWG2e5vxuBcbuYdcFRqopEfXYG5gnaq",
  "key21": "3HBKpGQQuCzcQ7Jw37PnSmrzGqApTpw7ehJUMH416ZV3xDL7EfrMbzXLuMrevrswzpX9einKQi3yD51wmhPVfXNt",
  "key22": "5Uz62otsnkrTinZUZcgfpkyNq3hKLNQ8c1dTa5dqPHiZAvHsqM8ScLxtD6qvqMoUASdL5RETmY78sJfe5Y3kssAo",
  "key23": "32SEH7EJpHtbfwTTFeFL5eVcDuD6LA1PhDh4UUzGfdqsrh4SwRA6cKKDy931wYH398oExASMz7tyixjHSWDZejCE",
  "key24": "2ThxU9KK46VtcCF2NWtqkLcx7gGfZP6K1kJdTtegz4nSjUGBQ4ozD5cFX1fAfQD36oAPu8xX5b98wffAiUL3kwkd",
  "key25": "36EAysgxZwUoiJUGddUymq33wmG9QmupBzYzwomF83xNEbnxhKGUecRDUJnnqKspjWWFEsceD8AoFgQZVPwU6x32"
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
