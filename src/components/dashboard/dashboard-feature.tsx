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
    "4iG7WDSfjhcCszbocnczsQyPrnbtHw8gPQFQPnwiPohVkz4egSa1cuSzz5irKcqp7QevWgnnP9fwDiBWYibh7mkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LqQAXoedeGpNMcoy4fnPT37EsKzLw2RBjFXZ2hw2qm5HvFFXYnQSD6mgXczX1BSy5TkJLVKcNuyZiMJCe7cb8Bn",
  "key1": "5ym6n468ELCspSP1R92wwYuNgchETpJiLsi9r995XwZSxCZpvqPiJv42Rha9tSm9YyjAvPnKrMtNjXNdQ27oY6F3",
  "key2": "2GtX1MWcYbFtChVwNBJqp4twcAgTET6AMSTNjgruT5XDKD5C5inwfxj9jS9ioUwDRbUknP29DRJnpCVKToj665RH",
  "key3": "3HN2HK1nwp1EWa1Fhf9FFwH3FqHH85zcaos2QsPQ9irPuCMpZk2xgtruYfS5b5sdeKRuffcM25EpWsa2i59BPDx9",
  "key4": "3xxtAWXKRMSAuQN4aF34hhDZd85SM5mQGD2SqUWuWFQdVbg3756eYcngdzsxWbT4qT5frmHkQYdq9cmTBDcG2GMc",
  "key5": "5NfeomxYcfcgvogg9DwrsKH7gZTpPUdtyoKMBgYUAds8BLeeGADSmKhKnRt4gvVTaxofFiQtmXMzM4pkLDYSuE75",
  "key6": "xumiSzNZ9VvKu4wzY3QsPscQmQSjXPR8bwAVzmrrx7tYiK6pJt3fyxdPepCc7UpjGMVh6fGhuSp5Sd3rJTPiDDW",
  "key7": "25EP8vsdVn3mAtUH55cvvoUhWNMgXvZoLdfEs8YXV9JxoxPEtWZxQb9kh7aYiM6G9XfEadrv6L1w4AM7xnoBvvk3",
  "key8": "Jv1VRqBtzNHG73grbH45oePytpPixX4r2BtUR7tM2PRsZjxVbjPMb7ai4Q44KRT5aqWPusCZPFBzYFzUhh4W6Rk",
  "key9": "4in3a5x4tDiEbRGwawDuRDS95njAH86w7A7p6fFfDNyRcWLzREL7rRxJcfZCQFNyaeftn2umV3t3q8AKpS4Ex4T5",
  "key10": "3ATALn8VTjrwpjoX1yv2MyxaxdsFqSQYHSJASkBEQwq4jtgFiLJD3X3DS2r31dPxmTdh8dLxsejJHbvyG4ReLWFL",
  "key11": "3yp9igmCXsAPL6WtShC7tbSxXAiufSQfvW59G4nunU4mpf7radnMC7bbbcDoMaFUKmwmh7Sz4DYsk61VGFtenYW",
  "key12": "4gmH65RFUuyHMEZrFRhsAMpzaVgh3Jwy5Ew37HHed5stxJHVvn6xSdHWxNCq95JfH8YFpSQanYvdjyQVKTUtLAEy",
  "key13": "5csavk9NMW1Gttm5GNRf6xNAaVR5FR8yUVkeYtPKAFifERFMZRn8seNQi3L8c17xNAsByJbGKki9UJCBYbnwpp7v",
  "key14": "5Lwen61nHp5M1imRSQUgWsFcpA1dBVNhVGMHx7MbfaPwAKCBBGAp5E1Y2TorMrK7WjP5V5UXQsQXmhVsm7R57avr",
  "key15": "3tPkFsqza8ShR3fQFq5GGH42gckAwkY5MbEdZAYy2gmEoYDXPPiPUDcvzHwPB6UBoHtEqJNJ5Vdn1vyB2VigcQqz",
  "key16": "5zYBHzUWDUovhiDxdeuquzFoRWbKiRfUDtAeQy5kkzFht3TRFtFPiNWePcYz6MfnZUuQmrHxv5V173QybVue7yCP",
  "key17": "4vNZGWywsLgiDLM3ATfskVZZnXJnj93T3hsnYU91QtW4Ud7c8EDuMPgf1S4F31YLU6YV9jo3ZQRxTZuBqfCG2qm6",
  "key18": "3BZCAzuoRYwXSnnEkcY9EbWcVbnb2mUr8C78446xuDgU7bJgctZXzoAYNcJqLp3Y4N9k1gsmJZfF4mTdYmt3RpoD",
  "key19": "3ZBMSfvUm3Cq3LRrCa49Dazi1LDr8X6zJLt7sEm6NLo7BuLbnwgE424Qpr6eR9CbgaicsmpboCPMPZ1n5xgpf1Nr",
  "key20": "5BDvyjMqNSRwqYrAVW3nVzLKW548Ww9sLXuwo29D2HGF7Fc7MvGM6mN2NqPN7XVrLu1GRjqzESSf7nNs8mtgKJU5",
  "key21": "38XCrt6aoPdQT5cUznsYtNC2JwYtzxhCLms4qVQNEbsDgAUJEtLNx2ZCs8WXgCNEGZm1FkmuzcFV2a8dGrEB8FMH",
  "key22": "4ompTyaaXPyii7SSoxoWbfnFhA1LvPsLUaxUA8HukJAvpeTX7jaBu1ovPUD1zkR9JvYHcyLJ9NRGZAjqFHr5ft1m",
  "key23": "2LVNitWWxW762sVoVQiqLWfBdDPS3gJriarMoE9NA4X9E14xdnk2mqHmEj9Piq94UHNHaAbZeFzsU5hCVTu3cM1h",
  "key24": "3MuMSDKNxAS8zA2URpUb36grMN5CMU9KKspsFvmuSbAsjt4nuLTMUcyEFqkKSEptHDc4cXQd9oCkfN6LKPMjK4Le",
  "key25": "4vQkb7X2GjjafHww4rB68tDnQd2sLZ99eFiA354jbnEH55hoAgqJcdS8XLkbC2kPSEEWuzGfNPxiPCJQynqhBW85",
  "key26": "4MwkM6KSvUG5gQLg1ALPC1bZvrxDR9ZkbkeTp1oXpxgkmsFqdkdcHWzdeDs82KPWRFaAp9xn5jdzjtBzSS6VPbR3",
  "key27": "5ze4z77bZazgLJDN9j2K2XV9EJiPRUoQu64PuBhx63Kq7Kw857Zo6v5qUqqcxQTNQvy59wCyxXpTPgELrKwNcje3",
  "key28": "4GjiWmAunfvn97RRRh8o8oiz6kAgLjdfG2auPb7UHvRscbEQqvdpbUz3XpD8Dikj1FxfgABviX9yPpmD3UxbueXd",
  "key29": "37ykEAkpq32Uk3eCiEgper39hL4fAyTSZXCTTQhz2RfVnopYnFFCaoeEyXXiGVEK2uVpzmKD7yfV1WEE7Sm93zYA",
  "key30": "WSi6C52uc2qnfVBGy8wbQA2Ue3PKEgCRc28aHF5BXxcyLbN9boc3oUZzwYsMAbUFnZ9J97svgGM41Km4Zpceim6",
  "key31": "4puJHhpwmWfK8kihK8x4sagP5uLoDLDmZzrzKTuk6d8JZ6ZyCBsCCuL33DTJKUxdKvq93nez7WX2ggitDd3ihe26",
  "key32": "JSgwmLsiww1nmE6a4ajP8PZfwAUeAnTRKLzGUTHoKLQhWzt51R6cyo5tFP7sDabYQT9MVNFQyizJGUGSDVUbPJe",
  "key33": "2ZpBbepkGc6r1YszzeTNJh2AwnWDmsxTJgKuwa4nYCnFYWzPpJhRcut2LZVTnMdaADhcnXW7ou6MpQk7ypGjg7Bm",
  "key34": "4jF5t7J8QXPYMeVxGadQwZiiJL67MW4b2bHeMvr1E2aShbAf3mH6XLeB6ThWngns63dEjJkrUQqNhKc9WXvkkARz",
  "key35": "5YAdiceNjQ83R9atq6uvCpydeTiq2mWVJCddxhcAtRCNFWEvq2GhcHcLFL7mKnheU4jK5rqjjQsa7ipSur8rYQJy",
  "key36": "5beSD7BnyCigXFuVLnwope1QvKRbS3onDyDdRuAGsQeXfiKMQygc6Gzhfv71HGvYdiXvEUCZSF5c6EN3G3vSBaD3",
  "key37": "1HTH7YCgHb7XEHjhC3jPMgqwR5jLEgMEt6SUsb1DDxq6YEF9snopMT25YKgrtu12Mf7LxiPGXT3pUBBWKCdehsK",
  "key38": "3SBww1ABu92Y2xCUUfnYQmXSCYd1qe4uV6aPLstQYY7ndGbHLP3XpY27ZA85JFw4VbZiqB3yGAypKyUch6pgStQ5",
  "key39": "2QpYVGn3Yzgdyav1kLw9RuWEZK15MfRKtDFz4912w7M57ULC1NpqVXq3HykYSXWYV5bMSShvX7QmKWaQ8ZtBwFeK",
  "key40": "2MVegAkq7w9sVcS9SxJbHycTpaTRUHyzjYnE2TxkvqgaQNcj6CM7n8Z4bQJ7NeMaZtEzgx2ZBqamKQ3cevfhaBj1",
  "key41": "4PY495tX8sbgn9NrMCnztmZeFkqD7t8oFy4b5sCHiDruf3WBYxzC7uw66VyrWtvZ5FKSvwJXsKaeQFfxn5kV14x2",
  "key42": "4UxU8iiHu6njB9jm1u9Utsjm3AwYRn4mGMvuhDmkaYRuYCz6nNbgjeiUUjFVjTFGsZfWrwfaCiUdh3GKitkmxQ1M",
  "key43": "SinJDCFrgrpUGz5enpE1HcBX2bgWtiovJSXqAxp9mac7DfKZ4pQ72kSEFWjbJUd7XaU2tRuKgjVn6YHZyh53YBm",
  "key44": "3ZKhVzt748nTrFVHYgLmY2YrKaYprSnRN6Sz4mSAzVUWAkmXUc3u4464nYQdYr6LjV3HCwJFxmFeg1eNudE1QJi2",
  "key45": "5t7RMsYyVkFnQu45mS9W79YzSy2wtRmKjGSAk9vRMmMVVZe6iJAiWyK2XY2G6c9L8MtRcoEG4WLaRC6Voq1VVqtk"
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
