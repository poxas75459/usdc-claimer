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
    "5auL9ZXfsWhaatYL5U54heakUfYFfH3vuMoktXczY3EA5ck7b7VhH5uUP6fVpE85r2Tovhk18Xk61wyCb2hZof4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ThfwYPLKX8N5t6ohWrZGyNGFbeLJ2vjqhZ29bkPyfzYFZkCwJYC62TpDqBswQfSCdu5tvvHpBM4xMV6q63jramY",
  "key1": "3MZ5LKAMGogW4FWEjnbrXDW2mUvqK9BcNHrQcUjtmnBTytvvC5z2XDVNoFxV7LsnWuGHqGcQP9Xje1NebLfWygXA",
  "key2": "2uT8GdQoJEPAkLbC4VK2UjpJmXYnxuJFpjLiWHhVM3AYK8FSbZ38FDfd1AjNEozQXwZq2ShgqQoZSBn4i2eJGBMu",
  "key3": "5SsqTuZAxxD28GFVYe6BvCXGzG2hP446Ki2GbwdcFNuSja7TQwByNnETEBDAW9amoMKsNG7AwNqNtQ7XVJp4iYdC",
  "key4": "4WMmAM1woYWh7NLZ8gvVT5vDejXRy6FwDbpPwEfZrBHff5FyTnkjgYgFoajPApkHXTq4mLfde6bYyKWYZMWgFFsG",
  "key5": "32u5iWsHmiLJvvPu7bsTPs1hHrtpA6fsG4g956ugWB3TdkGqNktBafR3MrqKBx2ca8x82o5tWiFX93dxARRAZ3oJ",
  "key6": "J2bBK5AiYRXHYWhEm8Wm5fvLcbrAok3kKp5zAMNXVy2BAHCs7RhK4cXi3pBTmJgsxLFuAaKFiN4UewDchsbrUkj",
  "key7": "67eQjs7trx4J5Z11NJNPL8wu4EQqXJaFVPfmUjfxhvBscU8xXAcJS6LpiEZgFas6z4pesFV3gVEYvyNHu71gXc3M",
  "key8": "4zi8MqWiizno3MWkrTGb1XCCj7FVQ1L5rx2oPDXfEk52NQ6Roik68atVv5ipN1XWFLiFdZWPXumJkBmVoZrN3JLG",
  "key9": "3c4zzHdWnL6hWMcLUxKPiBYGUoRxQz7tup6sosfQz4CEbfcEPngmt57Mu6z5yQtkLhEps26xX5fc1JvP461eD3XZ",
  "key10": "5btiUzvQQAuq3CswHRtGvTTcRPZgYZhwPMofynj9rGHA1XNH8bCntBbVnSQXnh4Ce33LWPQjRLaHAijAqL3H7V5L",
  "key11": "4BfZNck9UaqVruJSYhhtEdeJn4JicegkWvk3d7DxjZyJDozbNBRddv4V9CW1bfQh15mCYLBiBLRkWPJ5kEXutU2D",
  "key12": "4eSLtpZZ4MmLFb82m5JFq6TYs2KNNA1UQWLgqCrBDXa8WuftqUyT2ZwHivrhXrB7wUXtPZveQtxfdbk7kGjbm2mX",
  "key13": "2o9oxVmFuuSkoCNsz3ysEzLVwRCkxZpbtMF8m4By67itFqxSDmpUfuBodT4Qu4bEXCDjWJ5QoLEx4tyG3NNDUk5D",
  "key14": "3reNx6TfYd2TQPgZhmqmZT3z17NKisFtSuwG1w8SPVFCRqm1cGHCCiLuf5SssVt46N6KcsF53Rh42k8yzcK83A6g",
  "key15": "4LbuUBcThf8BkFVsTeZw8eYYQanpwm7bsA1F6aHzSJXP6CudtoTCZEaBisskid5r6uoCLh2K2eXrao2MKCyW2rTY",
  "key16": "3USe7sso9CvL1WFb9Q1KADuxGWsUHGp6M4kU2m1XGSpnjuzsCzorKrvFXw64gZUrqJtEK5sND4Q3uQgT9SbQydzV",
  "key17": "4buEAWV9rxqEYj26gWFRqioD9AWiuRZKf83MMZFgMFYP8gFveTDEkrtFN791HyEhjaVQ9gDe3MyFvTAz2QMC4svT",
  "key18": "4yPpCuDXUt7CF1ZaM2gMQhaKyviVamE8EDzG1USkwHNWh613QqsCTx8At9m9PmgLM2z3jWMXrXr575xtTZGGVU5L",
  "key19": "2kmQGZsWzXdJSnkJyrM7UX5jeFDJ2gXgkHd16NiV3oyEtsB2dQZiEWPvi7g1e2HGHjLFXrC7BkggB7uPkDQ2uXd8",
  "key20": "3A6k9hqB5J7vnx6eJBRoC4JmvsZDCGsyfH1v9VbWJf9Qdbh1LPanXXSVU93xiSExZe2VC5iNtM6zsMDQ1VQRggro",
  "key21": "6UuyBp5K2A6sepm7yU74PULCcKHXZc3oSWhJaRsqiMuu8LpiCWCAMsmAAxrbemGjKXZzxKgvDQ3Q7tNfbNY6rS2",
  "key22": "4DEHdJCAZ7rtm4aDJc62ei6mQHWqtxc5fdDw7aeEDXSowPm8bz9iFTnmW2msau4uG66WxT6hrqoFFXjajRFG1Jnj",
  "key23": "4PLdySB46jDj3QSDYFnXYBJHKiS2tL5E9JXM8Gk3Fe9NX1j9XNRjRJVbZ1bSP6UcwcSiS3YoEk9FGLi1A7MRux43",
  "key24": "2GDovLUVgucpgTw4aZ4rtP16MB3V53wMuE4aPxCzmHqP8LuuVsKSXwGUnDmfroFqK9MRWpsYtXqWP88RQ9Yr8ks2",
  "key25": "5Txayn4VkF8cGM9BnjULP2ykuZXXfgCz7vg3rX1XNWLjAGq8rsKy4mvtoznSUZYqajAqZS8g61MjTHEC1741KL6N",
  "key26": "SkiHYsaELCwXyX8YrZZoRjeAdzGfVE5oU2kSzR9Jrx2nghdzuemJMMLbV7Kbjs2jQyLM9SxWTLqRan4LdjPWi5j"
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
