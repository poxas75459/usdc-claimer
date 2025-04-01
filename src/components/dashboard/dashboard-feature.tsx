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
    "4m7xeprFYayhSHs1Vi4rpRYWPLfgM1CWt3m2JnnxjAgg2219Uy9gkZHRW7nqVDpssHEjo9amvyZdnbaibonyBh1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvggzNTfZqCb5YsyoTCBc7kH5N27g6tYPFLagbTh1T1bdnRGEVPcReVUBFq7cvckzzqVWoFYeymwySUpcDb7gPP",
  "key1": "4WTTAndgm8vhnSSjNQfgRjU6hFcw6senTZLPsBR7qoR2P2peDexzyZc1dyCP1NkRhmSENYxKzhWr5Gxkk1L9B1wA",
  "key2": "3obG9MctZSMn1GMpLRTiZmF4a2xfkUgvwNhzhmrsZJCfxQCCCmxFSdH2jZk7uGGjrvpnEjM9i5ESPc6zttFoySR4",
  "key3": "327gwiTHciSVaEjJiuctmzoJ6xj3FWVUcJsZrAnSZkVSDnd5P3zUUJPXBBui3pYxC5bcnJpDCWqwqHgC6UER8Hcw",
  "key4": "2TnYtnQc4UE4nc2Uy6SVDf54fd19H2BjqboyasXdKrPhVwWdDZNpEyFmW23Wk4jacB2h2ULcsz3tAzk4SQL38bUb",
  "key5": "2CBREVP1u3WbqvjYttFpaBWCWegLdgR1vYNa3xwMUA2Yf79eC7ZkDbMCSSovW1Y17a56bs4b845HjsVrgvhocjps",
  "key6": "5ek1UN5Bafc3Nw4NDaj5Z4EoQZJwjzcrowmhgTohYfFRz4Ns2YFV7YiJ5hSyZVe3j1NVMa5PN6uKParCUGGddbYL",
  "key7": "jCR4BVczgJ6bUi79TQR8e5mXJ2ooyssfpC6NvmVghcuNEzf6mubzvGV7rMFf4YysKzWrVjCK8Nhp7jCTEDJ3BrJ",
  "key8": "2ax4Y463uZJhqsbvw9ib1xciEkYub132eAgNqTPxipXTmCy6ekcDnfCJ5P2EfGzpjWLQ8EakuFf8TAFy2JhMwGfu",
  "key9": "5FBVkyxL6QcdGa7zXuaGMkzDKpQWWzKvvZm8Z2aR1uTLK2CvsHynTGoLbEDiHkXjGxPbHAqtxsziwoZEuYDUsVGu",
  "key10": "bAH59RPDoG6ryodsaWwqrYZHSpryx7UmoCnukMpaDx8J5KxmsX6dsujQWmbVMUg2jaS3h4egAHFgS2uXp1cbcFY",
  "key11": "4HSaEEnT9foar1wLXKkryvo4uQHiatr48JXt6eigoSowH5LTb6KNjMRjtUH9BGeegD9xUhfbmPtzrwLG1bmP4TRF",
  "key12": "251bSaudM5VU1qBixbP7FonJDBVRE43ADEXC5V9mUAX9YCW6wJm3WHoZUJFZLfXEZqBBwhr3y73Lg5rY2RoqZz8w",
  "key13": "iUTWqLQ9bhH21NVvwwM4iHfmaiLiwufjB8pha3pa1FA4AYrzsEvJutxWFgpZ7BBvMRgxiYkdRipm1dev7WNmC5p",
  "key14": "2wQcZdreDwibjCdy2fHWyxoMrgU8Mp7tDEPNTJFvctj2K9H1o7j1j8HVAndKKaJWe54nYthnBPGcGxjm4EazXKMH",
  "key15": "4qWhLH6P9XAn9Bvs1CL74TfWQTunrmzHB6Sdu2Qiv1VFNCzL4T25zKEcqLAJmPfjFBhZCri3ENjneVvvAtB7zupp",
  "key16": "5EGX47u9PSh3SHcPPD77Hr9Nrjq6TwG2X5svL5bZue9YFPkfhu2AhL6LB8ctbpw4XR5HA1Rh1xcJ1t2j1gUVxvLr",
  "key17": "ToRukKaAuZWsuzRMTcVaagDazaEvZCREt9w9SZH91DjWKKoVaywQ76yjG6wpp6F1TovwV8V4jiX6ZM9crDjZLMr",
  "key18": "5YMccPp56NAZeMv1KBJ63iAJj859qGtREH7SxX2tDvPbYdg8U4pcfsoCmmtUdNP1Xnno76yAbDVH3wxeDBT53uGM",
  "key19": "4A6419oTinVw6fVYcTDyAndKSFarzymwtbS97R5JQJhp5XeRkioCniq6qDjknauJZU37i3Sye8DNJSzfMZRvrD6W",
  "key20": "5Q3XbxpUKBGWAnLCj4J1CsvPXMnS6qAu3ARcy4fF4LaMM4sUzMDn4A6RCbCFvC77ZruNyovm5cju8EPuJQoXUDaD",
  "key21": "5kpzJTyEQvWPZqngKmfLdr9KeRkpmrJ6TyzeNV5oynfMi29xgbkxAE8vzx5kaESQbynWq6FRDucpe9SWzoXmLCCG",
  "key22": "3CuDnhj8h12BQu6SLMYPrEUx9A2QCeVfoQLJJNDWQkWktvjLFPMQd41m7abTQFkbrD8UEobRuNETZE2jzTfJNJQa",
  "key23": "4Kv5Zki3F4cpaBH3tsKd7kEgAk15jS7bnEzx99GBdXLX7JQphTSMKtbNRyGftpSx5y3PqyNFuy6dssR4BSgaJSzR",
  "key24": "25sU4Y4XyMEJ2uY3LgDVh5wqMmcTPpcRoPFvz3qnspvyWB5shgbFpyeikoW9YJvzAgir7ptYC58HNTBKKAeJLBV2",
  "key25": "4vHUaypVMzAA7RKnyDfN98udPjDumyjBu81LxVxwsRTLm2JUB6FWMMD7rvY9T3sFSWgjUMUiXgG9L6swpZNLnaGu"
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
