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
    "3MossUePeiwxVvssHvvYpBfscuzUcyc6K63eiTaYLe7v2P5XYmByCLwKwEkuaBvfaD7SMgnZ9zmKBFX49EvdcQcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g4ctbsTy18n9rWY9vySQWrx1W2yJAzDBTrUrirxu36yFnMsdgZEccqptFKv36CnC3sV2jWuzHjvgX7HashkD8NZ",
  "key1": "Z4s8jsKBggDktrUUUi4jKk6UsLYmNwBCHimoxjNrbiGPKFwEfr7fyc1iGWRAG5qFTBjzJSdCyUsRHJ7QdK8ZENk",
  "key2": "49fKMcqzjrSNVeG7xqQokw44KYsq5PfM3FvDZXNhQH5Zc8jFmmiiZhUSWEvHNfFTnSqTyLfTuWS5hJAqYDws9YTH",
  "key3": "2jwarZw3ApSZKeS9KrkPrZfwKSK2ZFtktnL7pMqHC8RjHUaUb2Pe9qqBE48h92KuGJ2P4Xk1uN3bnKF8GFz8yDcx",
  "key4": "264TrZJnKfB7bu4fbzvwhRd8x913bwFRftKAtfN9rCK8Kx5dQCdB4wDyyqZPRLxtgBbNGTY8Y93b775wqkEAg3Js",
  "key5": "5nZTuTYo7mqcoD1K7C57Ay3EBH8pmB8bHi3CkALSJQTkjC5zA8n4wA6bq5PP7CB5ZfwRBkZS5TgcYvmW1mNDeFPY",
  "key6": "2LJihSeAVfufz9UwAahkmZUURPXew7sW5tsa8GbsBrYASJ1zxnfr45za4RovSzCAwdhf4viK5d2EnjA3mpudS89q",
  "key7": "e6KFtpWe2shv3hd96VH95NXCnsszgYdpGWgU4mFXHTQye1MU9AeNE9A8PBXHuxLaP59NcZBY4ngJwrbXtwNPRMe",
  "key8": "5NNAMFfvucoyqwhWZab1qvvwnKAFs4itnGqXEGydgen8gdnWhAwkVFSwXx3zGjgC9W2jKjwDs3Ryqs3z57z1dWkr",
  "key9": "YUAnxSp22ep67xJeggzwSbZvpRupvmYSu5ESSotNUoZK2S5XhVSgNjk5Nr3GyWh7xyJAzwPtAhfjge1qaXMWAhZ",
  "key10": "2dC6Fgxbgk8dW64r6YixvbR15uDyTx1SMt8Utj3gHSHmLWYGCEjPm29AcztmsKrW2CuFcSZJJa242NMJv9jGGh5V",
  "key11": "2ubzGUEqVqdgcr2UZmxZmP3dKTwiP2J4G8GPKhDN7m6ocdyacR7EgKRZLSZgSXo64LkQxvRbYaviTm1nXkbmHDCd",
  "key12": "2iCuooiH1VpBjBdxMZjmEYZwvwUyci52svtnX2Wt9XDA9hNkxDo23c6WP9Chjc66uuoS3iYbry2STUZVqrt7fAZ9",
  "key13": "4P7GgX2Y5yNDtyJqotqnTKjcc5WxshvDXLq6kQRDVGzdbE8VHh898RtZjFYPVuEGh4MEpiJ8LEUuVTNfqs1nkR3x",
  "key14": "5Ym2V8XrdRKT7bbPUg3G7nmXcMCEDMS39LS96QBwxdQzzktxFUy4HF6cwj5QfVW61gdfH2wQvRMtdQngc6rGGoeq",
  "key15": "334DTgWhVoHy31uXiXMuHvoALGpSuXVba1qyeWqBVxvwwBC4jLU36D2ar7wUCAZzj14WtKw5BGZdgQ8cH68rGdKn",
  "key16": "5wyL37eNbW7FsgipF5SKaogFBrFJvcTnj7RiM3WoDZLmbEzBeHPCAsjukG4Wo31VZCqF6gekuwLZaS47WmfjCvD",
  "key17": "2sNSNZLdZWMrFesX8zrtTqoz5tb4vSCbCLdw2yeFi6KYrvYmzD4CQ8FXbYMeHmZrcFxc11APNP9eESScn5FRjJdB",
  "key18": "2ixXV2LZDoT43tmrQgBC2Xy45zGtWU4XywXwSir2m8Y9a682tEextUCMh3zttDvPhgqdixJu3QTGadHHnfVEA3Jv",
  "key19": "Zk2pyNYyVr8H9NG3PgVvZk6x8fFejXZD7vwmW8MNczKFuQ14fnumjfAqXGoFZqgAApdKdb2tiTMEQ5oaXHBYMQC",
  "key20": "2hipxPcavKJg26qAvxRcV9RBxBeB68mDsTCHFCfBbcgzJJDiQbdVkkXgX95rrTfW7Ue5VXyBb95FwMoATHH8L5wX",
  "key21": "wh44VVYpfppE4GjLhZMASTGmB7Gdz2aqz4qhdkTZSwN6W7C3riXjb8ShTrFU3v8GoPh9zN6jCx59SFewmTkWm82",
  "key22": "4euMcfjBLtNJNpGnhQEwLhbhUKGBCaau827uSFBSP8GVqehzG9tWwSRac6PtaHmAbWVDo38LqBaXaRsJqeC6uyxh",
  "key23": "4m6U1j8tJkwac2RJxcu2BgjH5KxPBoNLtF3ibsPWjCMt89WDm456pa5L3hjX3ZGXD7s3x4aS2BTx3nCPXAaptXJH",
  "key24": "D5AkpFmHKnu3jGGmNg4abq1HXLHS5JFcCM21cdDM9tzB5YV6RBWKUcErv36w45dEMnEvEAWoNdkY8dANWeJZKSJ",
  "key25": "471wVh1GesPra1j56RziX19RUcttdawduSqEL7usTE2HvCqMSP3he8rTpTxVAJpxLTUe8RZGhjWgCrkS9zLNVgRT",
  "key26": "2AcyETwec52sPayXqGTyV8tjGSzs3LvkDZdR3ps9bozyBSDS6Fd7DNyc3qinh2u8UG34RNKCVuktZfaCaxUwqUfJ",
  "key27": "2oTr5E6mqHcbPeZGxiBwUbnLL5eub1tWPPYUEdmcmMz1oh4MFqKNZajRE8RJYmEGdMxgBhsZWHaNCCFgoz136cUM",
  "key28": "5tvjzr7WnTVPERVkV2YKpaPebGCqkNcV4NpoVJ1UZGG7fRb5Ln18CvezMrPuL8gh7jKDBbCv5SkttFiZWXcCCPzb",
  "key29": "3MsE2wAhAU3tbXQY4c3agv4v2LvFLpkHtJvijWTTqt1WGD6TcebfG8ippTCpeuTii4iXubTnr1X8XBQPC3AWNj2w"
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
