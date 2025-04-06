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
    "4ewJQMqjPEHTCttCDubUPv3viJfoyH7YXc5pb6V9RfySE2b91m7vAV9MZXN5bvJXJkvHtxGk1qbe2EUBipUmQTVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3gMXf4irbtkDaGx6xCAgB61Szi9kH728kyDZbWEZRovvY3kjVxd88ZdcFYEeqBg4QZMVsug1SYzuPFz4GN6FYB",
  "key1": "4TGgFsYuTMaqKHeZQL8cAeLS3Yp7tTQiGoP1Pcdx1gSGmojuwUc6YSqiRgYn4Jg1LVNpqZcnCQgoG5WjKSQDihTf",
  "key2": "2NUicjLew8EBat1kCJJHUwvkWGXLyaQXBABp52BU6DPm1ejm6vq4vihx7c92xrXti8VsUMkSVBjjoYdYyUzfCvRb",
  "key3": "3r1jTE3CcJ6PeHMZ6HGsT8USrdSB3g228p8wKSYJzP8hTVHNvYSiwwWHgV4GJVF2NcMEXrUZ87Ym5sixXk6iZ5Ve",
  "key4": "3inB76775sByLfiYixznMogKihamK1ePxGaeSJ62xPeUzJGrt4MoGcjr8oAFbTnSSUeX422TxfFEDjizuTWoWXrB",
  "key5": "3GdAr9BRAFEgfWv5T87hpmJUMiKcEskuDTGJ88sVQcENq6sJTBS29vCMmvMLnBn7Rdk8kokEsAc3gLmXbmfCLUdi",
  "key6": "2teqcLRh7FkCh78n1ShyqHcBcNoCwxRukfNqNEVzD521wkA9SEiJRSMc4gjM3pNLb9fk79NaWrz6uUs1FaNn87v2",
  "key7": "3h6rLNQxdXYyMoJZumzMCH6XvjMa7XfPc8g8zAKWbaWjNyVacfDEtz1X6Zc6g8rMSEo1xm2LhjbFkcqEGQ9nDdHv",
  "key8": "5Z3SaHU8JEXfGvyrJYncTBFMHRrgpHgbKA5EHqJwpPX2NgLX6eASbUYGHLYZUASBCv9Pr6UH4s9uqjVL85MSMHqm",
  "key9": "4g7ihqcD6Xbufivj44RKXDs8VwF9HRykhPTznigELiKpfaCxoEp1KB3X2rHr3vcdcvjBq2jkx74AidWZdrHWyLG2",
  "key10": "366oZERD2VYFiXm5HVGCkpPzzyJH7XxvZ5YeY6erZEnMSZdBDBH8MTmb8W7eMThw3Bi3u2PTz9MnGdjN8pnsyQvo",
  "key11": "51MCuRucrbbym6fqujN4LQiRDH3mumvJ3MGbdFRAMBynGX2rGAZTkmforJ7NKVT9fEF9LGoBH9jdBLAGEkWgSQ3t",
  "key12": "494JnA6mfotzJA5CtFiaPZwhWXS4yTgmtBqT2UHMXNT7rX4Jveqahyq37Le5aTGSMVCbuYY53mDrbvWY3H3MfhzQ",
  "key13": "5iHgrhDLBkSNy27cZ9ZY6LfuXdM7xt55m25hs6QNRqhY4bnr5S74buAbBk4ND2UFDA54SnbP7ZgrRtfGXAhVhr19",
  "key14": "3pujP3Zfg4J4ewDFv8exg18far9ktBWfgatLAv8Htpgfx2AU96fEReBE5HyuVKj1Hc22tRVDZs1fXDt13yJAtKmK",
  "key15": "5XU3QYdUsWPE1y1dgRAWPNxGAcck7GGXcDBz6ucnYKSE5ggpsPvN99oM9sjsFqnd8r31YiSugcgDV4LPnrASpKRY",
  "key16": "5cig4iMFW3ow69qHcMkBVusG1SpkwrugTCgVSgEoVucQvJxcsUiKmBquqEubmq1Ugg1gU24AqqE6tJbjgkGbXett",
  "key17": "5DzjygS6kqsUQwm9VWPznTrfS8eacEwPsTwcwkQKs7er2BiWWsc3VPxW2h8QvZTsxT69iVxWzppW8wLoxiHdrkZ4",
  "key18": "5M7RNEW1hGQK6DyhGP2V2L5ZXiL7nz8em4qeSX57wKA6PkQAK2USVHM1kHYm2LDkLAfeAHi9LCfTgvMSXKRUfMkX",
  "key19": "5KbJXajt3TqEjM2KE1jNtjzh8HRoY2G66cgNzjReXhUdX5o3qfNCzAsAsTNjXiDsgfPDg6E9nYbDuGd3ZeXfFkVJ",
  "key20": "54CBWWHx9RKo5mKx9BVnmUnW8WRC5iJ4MhC1Lhgnz3b4xQM7cE6qQumNu9VHYsDh2rDpWYpejHaENiA7WBNPUnXw",
  "key21": "hwnGb5KY769WLSe4sVSankc3TLyybtrMiGhiPBt148K5c6mmUNosyZH5TpXNtyuTxxZThc51sr9KaHzLjWAN8fH",
  "key22": "5D25CWiKYF5PXBXupL13EZfun5iXFBrGHi8bxePYxX7NbNQ4cpHDu3wsZETLjdWVk1wzBu8MA2FUwYVnDTjZevtV",
  "key23": "2ofg7fL8h6pVA9NKNtCw1J6gSAbN52EovRbYQfbgvpztXv4DrCjaWzYCbs8rxq4k7eRQazFVG6SenqpUChf2hzht",
  "key24": "3KQZAUesDx6dg6M1oxH88ALLioxzT8XLY9tWnx7nK2TbpJJSa1d5tRvW13yuB1MC8KnXRUVga7htPJhv8mja8tY4",
  "key25": "36Vxt5ZUA7b8bTycvJEgpCkzK7buQx9yWrjafbmMJQ58UJyo4uKzQHVJXnjNKmXx5ecDEENGiyZN3sSxyQrpKZLR",
  "key26": "2PZSYwDsvHbaeNgCcah92k4UGX1t4KaZ5JUrEpKCBWkNgRHNSpwGx9qrbg9KBQgUXRpRu4QFCjv6rveX1mMkVd1h",
  "key27": "4zF2cETkdjpEBPSWekYBBzHyrFkQmFzxg8mBFEyPfbTUGphBYnq9dDH5rwaPpgfT36ntsBdRpkqd4oW9UyUv2Q9r",
  "key28": "2r5jRpuPMXD3jJvxesmaA9wPXFK5gCKDtN52QMyLngGBMrM1MoWJtBDJAkLF6SShHQ5gvskAgEtd3nRsB11K3MrK",
  "key29": "2vfiNRcGoHEYPHQSDXYBeBzVRxNwnsZ98ymf36QMHAJff4Jxv11uV8sjjjxGP3HxXy2dVgedK21ZTeoYNpsA78U1",
  "key30": "4oU796kVzt5KDgw37VkZrKiN8ktxGvUH8sHK5U6LfzR5DgmoY7MeqwA3w9YBN3XML3abXPEKRkLRBy4SWJSvgoov",
  "key31": "2okovffvp1FUW35KbxmQeFZWBLJXSSBF68C1au91uFu6v5Vx8TUsDMAMQjVKpTo4wZi5gHe1eqsF2KH1bfYGBBaW"
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
