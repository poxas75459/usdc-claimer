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
    "Fp5CqHkz5kg1EKa9btUno8AZt5aZmpxbxBnk4MbN5duWTzAgc2aANpXKyBVpgh6MpwzUL3XTJkA4Mvog62prNTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uBRrrV9YF8bUzCf52bfShYGDxPRbUeimEawuzuDtFbuN4ksSU76tzFZryGhUo7ogvEoeSo5E9VutaWtrjgxzfC5",
  "key1": "4boQJCzHzyR2vrDS2V4UrQ1XkWnbYrMQz7vxMD8oEajVopqRppPRaZiUBKDqtAbhpn4MEdGfEtjU5fuDV68RTKGv",
  "key2": "2QbnF7HSsAums6mf8aaKfdo6wwE4Rtm1YiPTYoXehEukpn85yYgSNFENfACwSRssKczqmDGaPq3xBn39xi7muFY1",
  "key3": "jkes6KWmWbFKJkhhToDRo2LKCp7FCJNuMXTDVEpzPaZ2opzGFquK7EGNstSkwVu533EZVpFQPy4XjTEDrTfjWsi",
  "key4": "2yogrkMXJFTBst9dVLX9yzpafUip1gmMw4rpSTYa8xgP4yyfTmoaXpUhHuBFDpFibux1QTb66pJPpqxpSydFoDPA",
  "key5": "3gfDYPe1hpKUutS7vNAKrmKCwbRNrpZo7mDWHzUWqDfNhNtxscD4cAjN7b7EaNGdk7WKcdydqdnQVmePEm4S6spV",
  "key6": "2Z94oFo9e6ikMy2pHqhRweBiDN8eYErmbVVaFc2qp1pqwuGw632NscKTjiueTcmxowsdN1VH3LUzArk8BWawH4ft",
  "key7": "2aDW2yppEjZRKgncmi4YNteJGi62shBa9z6AZ9bxqd3uEBg45Uyy7d2VeiYdcVEWbAF5MecnXa5cMyX7REFJv3pr",
  "key8": "3zg7R5yssqgUfhNwg9NtS4D7ooHx6wJnnjbbWre2FTn9eCsjNgDWWk86kbf74XyDWaPitoMwv428E6NKff4oc6iR",
  "key9": "2pBakRHdsB72yqzAWJFfipVXmjRE6GF4jXNS93Vkj5NQ1hCWW1EYCzcSKkLWJhZZ45hUqtV7BchLgBMGpm4kEoG1",
  "key10": "pgECC47Ajb6YZpsJhrqparUGoRvs54C8oTKo4oLAwhY54ocMC6BgYe37feKTwV6vgTzXUCiaeZs6US5DBHQPYYs",
  "key11": "3fiWoYh94pWiwyw3WPV3d5SMrtVrqRYdQf8xFNS1nZu2iM7no4t3Y1xeaUnyejSV6NaND5FuoMyhJkiZwZy8S4Js",
  "key12": "62QEDrxBRYFqVMJGcyKFn83XLaSbf7S9PCsmLTAuLqRo2JoRzv3UiMhN2XoxynLijKzzqhU64gqwn9YKNSD6ytQ8",
  "key13": "mzdvEG1aF5dKzxDqRXVHpZY7oVF9Utq3Dd1Wia239Ty5CK7TV17CTnMQuhTMhqdXBebND1RBzPeird7EAqo7wm5",
  "key14": "3NaAsEDFktXiVqhWRcU9URERLzcYv1zv65mkFS4h97eCSjmYiarwawgo4jTJpTUo1a5yhtB9vKddt8WsHftRJes6",
  "key15": "Yu1hZ4fjqpkm32oy9om2cw6FGhA4eZi1eTkLzPx7QfndUHNoHVnNaH2R5ix2LqLGEcGHdhHGM12DuvTogTvhXGQ",
  "key16": "49ZqU3yWQXGau3nDpTG7JWJLvqYFEfUGHSWz5AYbPmD1uYMAaXKfuBTW4orqiuBV3KqbFTiuXdLfofPtwHQYLYKd",
  "key17": "4u6eDLCHBW4VmX4LnBquedhzyCHPeR9M3Wb5pgzbmb4V7NMRCXQBxcP2LpnrEEj84GNrNU7mZgrHR6QAZybjjdy1",
  "key18": "2EtYYjQJMgCTZWzV6WcM4reZAyZasdrrLDmt4gfhQjGfyT1x2hbAT9kLZMSwTEcjpZuvrtJRXT9hYPKEKjiprwVS",
  "key19": "57yWvXQ2Y1hKdSmNLhXRjpeNvrwXCWzPZGCvax55858Ks9ysNKkQFqDMEdid2vWwUwyEAfPob7K1Hpme9g11AGtg",
  "key20": "4xSujZ9YxfjEB6CNYAaTgasWxisTqVyEwyNqwihHWkfZ1iexdgppLB6YgH72S7G3MWoRi1u8yec2jvxnZ8kzyCda",
  "key21": "m3Y24pEV6A1Drp48jV1inZH1ziNkJvfabe7XsN9TMPZSoyG69wA34mU2nF4EgXoC7Hu4qe2w8GmdKBRdQwUTctw",
  "key22": "5joEUSUz4AczeHDHsR6G3gMZdmWzTeC9o4WrmgYq9XkbiXGkJhjxzat3DaYTM237QuPgVWuTxvfLo3sYKf6zaiTM",
  "key23": "5GJamH4cQ19tmPqMZhmkoB5nkUaQQ2PvzFfKkvXZZjZ8y6kFwp4FNjDYQZiQku2SU483rnvtAwB6kt4ikjyqAViY",
  "key24": "21sVecALbA1MEqMq34sXAsvA1pZi1gVdK44NNqUoXY62dDKi7M5MUb2F4yEd7xH3cBtLm44aLXBht95KikPPXdqL",
  "key25": "4LXuvKxnQgV9vGMHcLsfM31Fzd5ifPx33hpUV7c1zokmU4GVqni9kMN5L9Qj8XJ3ddTMXm2vjrSEu8M9pfYigeC7",
  "key26": "gF14nuUM9ajVdBRu6wQoJ4cNH5qyrFaySvCzAf7ydTEgAsBJE7nkzKkPNvkRnCuDgpkXksp1aBAJ68cQ279qAfa"
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
