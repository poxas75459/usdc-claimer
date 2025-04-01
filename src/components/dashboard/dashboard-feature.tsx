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
    "4nugsGrPHdx1VnMxa8ofhT6uVQjSNguSKQfTnDTx4Zbz7JsyZQfUA7oQ1c1eaxjjUZQQ2Uw9zdAfjHdyGpdeE8NU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HUqirfpzzygjfhduEkrMiX87wvmTVoZ1gxezKtSjXfyuV5PuasGeBRMVMorXphh9D8RoEKRAQHELpS2dursh2VN",
  "key1": "ssAiENwEZQbFcwkVQ3xGzygGwXv2myXF3ptaA8VStwZYp2gtKSLza2iwcNyxUCeKFcmPAtQWWtwG34JbRFzwjaZ",
  "key2": "51q333sreJXtNszs1YpHgH1VY5aS38akgUQEjVSydZEzP63QvqDvzwLmDHJ55Vu4XTkS57vjVAHjVDBWfxCt5ios",
  "key3": "VjzC4FZcQ32QoDpBGBuFrBLMoKFgNS76Sfts8536AS7WQPQtZ2PF3YsJFvcwzeZLYKCdFXHLZo3EpJrDu6nLzSC",
  "key4": "2yS93QmdfLocDZsAuaZ7XBoE6ERzfRsC9RU4Q3rcETxYwMnqGMmTobGupDqdKirHZuvMUf3bbkY1wHVAFERPnZi5",
  "key5": "2VUETJCcegfCLUC5xGotTvBobB1LZjvgqJkCY1R9xq5VW1JP5zBTpL7ZFfShrJm8XaZy5TGnoimpXf8UxYp8KuTe",
  "key6": "jx33VYP2ogJjwgDL4vaAjj2MuqFkRaZCnv9TG1ykDMF6h4YqDUCCsP2e3T4Sgqj24HiceEmFydnch4jbZHXyjYH",
  "key7": "2TDaFACYVzNkCEiPpj99U1ApZ2ox2h3DdhNgU5dx7H3vEvPetcTTBj8kdaL2GPdMvF5meDf6Mh9W6zEF8MEmaTpC",
  "key8": "gBLkGL4sXvzgi37qY3Mq4GAiqGjwMad9h4nVkdn5dkgtnyYxGCCrXz3QNB47cX7P3h3ji7nRPn26AUvo3CUrQ4m",
  "key9": "ziuqY6ZZXT8qp86Rcg9PZvugamCL56CvtYU8aBPFEVHtTrPA7KZAKWL9KSczn8whxXYLAG6CRnbeuoZGySAfANv",
  "key10": "4CKNWQyqHXb6uEXsMcgr5eAVV6m6i5k5CnE3mrjEVezZopdfvRz5rsNi1nDSiWJCMs5YWU4GEymVPSKHNdPePFYs",
  "key11": "Qe7rrE93dqQaHpowmpeUZQPZvnfR3QgrvAJ8H6p7Kf3wseKtuE5tm4kBtmFzbxAZnmfa7kxhjD2h8FbWD1vW61F",
  "key12": "JQK8jqZM2kazF8LvrBMc4gjWwV42kR7c7rWPjizqDjL9SX2UT9WPUHEjyLEdWa27je7gqs6stQZW5h5kFJz6Zzx",
  "key13": "3uzgMRwfxD6dvHmSXyrqAjHDr5DfYuCryzKzbtau8w3B83ojVgSuHAToRZdxuJQE3hnk9BHtoQhcoDHET7qTVoH",
  "key14": "641UzBdMY7JKRh1rCg6GtYoiiumRkVGdVDLjtfk5WU3wwAaiaNBz55tFn2fPGi6GvfubC3GtzyuPsKKUsvUTpKvb",
  "key15": "pfTBbWcMT8QVvRG4v9q1oRB25pipKUYmA3ENNriUdkrePExoLSt5iCgX3AoTHuGf5xyATRVECNsLGPkHmW3WZPE",
  "key16": "4GYPnir1GPoM8TauTpwogyquk8PZrKKKf9WUsAgFbmnPWmSe9Ns4KeG4iuBRGvCrM3AJmBNUsUJcQ4oMSfzaKCj2",
  "key17": "4xdG2R6Pv8mkSRQVd3qju9sKMYjbaGFwtoYRYuS1qGjbC8bTfeRZz74ZaTRNeXjJZEQqbpPDoZQsipGvjNCMyZfg",
  "key18": "2AEAwYiVTipUuQk3XkPWiKuid37zFV9j9KdCidcbq4Jn5pkaLCbMhDoAYDXTSkrWV86fZ6MKv5G4ZVHw4hochGpW",
  "key19": "5tfVfioGhRkEH2TZyY8k6pusDkYmUnpo2JVBqygowKLYpbw3X3iEAJTrmhqUHnt1UveYCzEZuo825JVeuDvdaSPT",
  "key20": "HPVmNzLKnA9HS7VRjZ7xNTTBXh7Vk3diCkhcXW4bzXmdD9PH3GupEnpD9cVNaE8dHJftQSFqPdBwCSK4gP38gBU",
  "key21": "5EC1QcMsg9MwDYMc2opveLSL4BVzwHo1f8ikqAAV5CysRhktgKX6hz7P5nLZ3PtySuHpx8N9GctGRbWuEYHJhEmM",
  "key22": "2Ze4xRTpibE9bAE2juueNJ7KcA1LJ7k8YLKmLJxYSjjQRoDfYMCh3m4CFf92VWNzuZW2JSdbkDcCHyZSVJayXbij",
  "key23": "yWS9SzuW9gUkgWp6WK4m3KJgyXFcioe9ipPS695QpNNfEhivgpvzMgv7wfXapbNmCnT73oyXuHvrnbnrVdzhcYH",
  "key24": "2B2ZNBBQp3yrtM4GW9YUnhsuajtoBig2xBSBZKFfMeWNH6Um6vuxiLksDDoRnvskbSriQrWPuHozMMKZZbu3MEHm",
  "key25": "2MGKPQY94DzDpvvovtTPV7xV8bZekd6KP4EdtiTaZTXg7gx5k9ytMrb7hewwYtm1kYBsg6uKJ5ee9ZZPhuMFY3F3",
  "key26": "5u8iwoDCMfH2sEZmRg9XH7MReeqJt4qdmEV8d7wJS6rfSsiirdnDR1Z9AZHu1UoDUJ7G6rTt2baWo4CMJKUnTfY2",
  "key27": "2JQgcgBUtzbo9iJnRZCu56xfnAfokfBG6aJX2QUCR2FXUWA64CX6XRmJ6AtGfGKrrf9DxEk9tffbSHDU6UDSvaEZ"
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
