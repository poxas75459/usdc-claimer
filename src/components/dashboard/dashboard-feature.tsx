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
    "3a2hCgLHEnx4FcQzGMZtvMakw8iafbXea8256xJ73Hs3Csaw4BF6XnEgt7iYyokuAwYZAfKvNhmRU9qpuvL5hbK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MGmp4eyiWYFUnQ4EcZY3m3V6f6F6wSmRBAsVnhpWt7k2689U85BJ8ykostFaewQixAvKzB72BEiBpsGG3GRoor7",
  "key1": "ksRrpYGY3EckqbbDDLDd3LxUpMVB6vt7WBUwJEQXfynEW2ea8VzrGJVLEVeVyUBztT12LG4abVtQvjZiPwKr17P",
  "key2": "5edS4aHSMWFLJyPUN9RZxdRfu6xPEKvabYJTxnMvA71DbkahsLodRbAMuWCgFbbEoDqwGcy5fZ4DDEzP3MS3a3oN",
  "key3": "2RZhgoydBE3CP7Xnbpjgqfy5Fs821k9EgvLW3WmkBgcHLEE1b6tB6xodp1HYLbnqY4roWuAd3JgSior7V1dfEV8o",
  "key4": "PKbBvPRpP4eaKywJrFtTcVmde93u28GfVCQuZGEKv253yWdjiBysiuWxq2AZm4Gcs2rv358AhJsU727EcWjwogH",
  "key5": "4r5ZUq9dmjmdpHkpX3qQgZbs15i2B5PnoHctceacgQhhPrscwpaSqMGCfshcAUMECqwYaY68LxxrYLRHfWeQ418H",
  "key6": "4qczX3oW1nfBgLH2fDxjrGx3CzVvf7zzWc5UWbXEbUSGQQKY2YAFZ461WYP5T1rnchuXTuNTr231en93qNMkBRuF",
  "key7": "49ubub9An7XziTgv4QjyFRxFs43mWfF2jLEGpuYnDVXMwA4da6K3gQUK2ZwGDWXE3jhTFwmcRACpBJzYeWUCybfh",
  "key8": "5VHhibvgxT7JB4vrSUQZCjkmAd88KQBJskzQ66RoGar72YLvtG3kaChgGJSoxk25RvwoxHG5qCZ462ETz4XV4PFK",
  "key9": "3qJDJ4yJ2Xk6jGJ6XQrGs1ccZQ8LSUVPCG7CZfQp7j7L3HXUDAs56RB9Nax9Ad4JhW3BFEePycWBAZVZmn5hKwCf",
  "key10": "5QFUaoEd8bpsNmcW4ZDgzt7v1an9jUZ9yFPkYj3zubFvFjwf7xFeiSRq3J5ywGj5uNMRrNYyA79rrc3EkuksjZvB",
  "key11": "56QHJFyrT52PLc6ZtEuqpYxoW3YbvfFrbjC49Ha1guEfHP2GHVyoaUzYKgBa9zTihvGTHkMx75hd9C2GUxBy9evE",
  "key12": "5XzZQpnyQxnrjm6RKk2x43ck9pr2FeJNE1CUbuLjLu4CkPYBtcDLzKiar9panTTyKUPg5uMuk9LeM5RrRcN3MnaY",
  "key13": "2npzEzHES1kodLduhetGofuSu6n53j15VtewPJpAjScnvyxnSNhBscHUQPbU7bNfoUrNZmeLzkgWhq7ckXCLVTxm",
  "key14": "3V1hYeBPs47gd5tvDvvwgc7anh57nkGyvnURiFNCjjq7PzTbsokHk9Rksd1afRChQWQ622nvv1wborbNxuQ6JDq7",
  "key15": "4T9spBEja6WUtoau4NYTNm76J5X8hqaQhpNBmdRxUc7PLCZXf45uKnTjHhz6rDZffyiHyLdcjW9BSVZAKKjB4qFY",
  "key16": "4XhAesM1XEcYQbSuphG7wYHZzcfDmQ5DAdZBbs1iqhMtB6SeaHqym5p3xajhtaqawy7m2GZL6QLwoQ8zmodactGv",
  "key17": "4QRyURRJjTdmXaAdV3VVaATB4x6Uam5oTGw9PZ5v7z8nChyfgdGeSw2nX8Vs5JRdvV9vQTcBfQ2qvqqtvB9zMtsV",
  "key18": "3XPZ6cfejJSWTg5FjNVsA4ja47RjgVQb5A5wJpKqcyHKP3vTp7AENoiSufUNVHdGKjvcH39osXNvfwDhKQnkQTpx",
  "key19": "2KNNQiEPDCzSahHQU4sUnSA4jfeywj7oqJeMopLojQyji1PHE6RM1wAaS1vDZZJ688VGb3jZHXkKDgXSWBfdd2NS",
  "key20": "wQdPPnCdtMaJqiqTiPFWFTh2RwBi7uTtf7BLN96izV1rNSCd7jgATSHQvNTSdfccoBDRKyW5TnZzvGUcgPgNnbe",
  "key21": "4ciMg2ZNKNdRkxonsAE23Rpv69nuGnviT46Eowy1s8VkZrtQX6tUpdi1SWA4m8Vmua6LSF2ZKd6spMcMsecbBxUs",
  "key22": "4xS5wUn4873BdCVoTBa2pqWTwVJrn3ZbZXbJQFxbB285xsMt6X8C3ZWqdppy8UFX7Tc2z1rnCqPxznaRU1Sc3Ut",
  "key23": "5SsRRDsLL4mVkjNHVe552rzpak4tNi2ymV73pF6MmHKEZmbRwJsSASfxivYkqKTt9Pjqs6cFaWSaPh9Fdeery4uf",
  "key24": "5mmCSefs77vdg5iVcYZZdguTpQ5eKwa99TXfMNz8xj6WXjz7mjbpdQdenTD7LeuzcF1SPvBg4ykHECt2p3FaXn82"
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
