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
    "5pf375QsjCMDpK1LWsP9ocPfQx6tGiYEsFrTTttwvdVHJz6YEngbbDoJV3ugUVgAaesjNNfjhkD6d9Mdh6dyYVvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jn2A9WtPWBvKQ3q7DbiEsZ34AZFrbQQ5W1j6jk7XzxdGHaSU3t1zmvWGRoku7rs6v51i6JqvZqNhDbF5cZdZY2H",
  "key1": "4e5ZYdu2h7CfamoiwvsjT9u6iXqreHTGgSNEpV7R2oNhEfydyzu5D81kYhyuusUvMFBDXqcAQohZkLUeBfuubM1z",
  "key2": "3Cg4uRqLGvVYZ1fKDhWvtPYRmHCZAece7ih4ckAhvd2Sh7HvXKJ9WZJnuxrHr17BLmoRDB9ZSQEd5d5Qfe32ATyB",
  "key3": "2kVdp9XhUrbhCM2bVwVSzPuG6U2qVzZ6R9qyQCsVd4MyRiqJJWH5usMCA67Gx6veeBVDDEQnp3VtoBzH7DcrM29P",
  "key4": "G7P9vB4WuYV8KJwjGw5bQUEUWQgk9NaV7bkxWScSsXNgoYUg77bWtem3qtqxSddE8dWLpm5brdRkxt796rPBqGa",
  "key5": "2suguQLKEMexsx1HSXLxuaXM6W8DTQ64taKFnHa9ABxrLh98HbyiUmFvwAdGcpBaMSAt1cmHTreDKmy9kgepgJrZ",
  "key6": "2wWi4b9DccJ1SpZ74Ryy7X4TwkCzBDCwLkEgi8u9LPWt77CddYjVLhJFUkofn7QCq9fiGiCXPXLhMkBzmakE6wdo",
  "key7": "57TDACxigfY5h5fXnGzsnmEEY67muPsWoHJ6y9frQvKFDU4eFParf5jN2gEXw2xeTL1snX8gzpdk1ASb7SitRPxL",
  "key8": "53gxYyBCLDMVrTbiasnr1nBLzuf2mpLQoX7QJwqqBYdwSP4zUMj7gaQmEsfAXSGA2Nr5XzeJZEuLeHj44BXDFSJY",
  "key9": "5XfxGtdw14bm9uhLnhmGbNX9Uy4EF1nG1RYAqCQDdhywD1wz8QZS84GMBvCr3XerQVGYXpFjz6DszY2uAVS1jRbm",
  "key10": "3zWfsSQfBk6znVYdY5tivKHD2kqodYL6pSmALJDh6gekVuX3z3pMfg61z6Jbv7bDdzyauc7YyLPgLaPredGWGZoU",
  "key11": "5TAsg51m4SWA3Mi2ZHLvawzL3QHMTft8aF9uxbzJ5ttMXU1H2SyGzt7zhaDqE96BtY3pWCPXkBhYbTPUfKqBo2sw",
  "key12": "cXMYgQjBfCrNjNTD6TVyDS8evdYWVCkafAAb9VQpbUjTVJhdX6amUF23ZJFLAuK1SCkFrX8AEM9dAZzCTztK1U6",
  "key13": "51y5xzzQLByoQBxSEwTema9KGvujySQu6bA11qDCNdUpmGJkDGp3BD5uAjSRNLKoxPS2tBQUvSLBtsJH5Cy3rR41",
  "key14": "3NhU76dYXw2vpQFWfVp9mYc5VRGaB3GTir9RDZxmA1V6m79SbYU9prHWJogdKaqA7HEfEBFBoik3A3tyhJoiBbnK",
  "key15": "5DfXVgSwf1w66Q7pLxjDtrnjGjT851UeHojHRpDZnsCQj58YdzZm4xtwkJdAw7SPkBLzXFCUzFE7GKyMxkL34y7U",
  "key16": "59vzouxkvvSsa7ybT6vktJHMiDrtP9VGK6VMrsrkKNEYr38sgXomyxmdJpYjf6jM2cndYKWEx7xYcnM5kUAVQQAr",
  "key17": "55WEkXpjHtLcPYVhpvXvNmSYQtzYgebntEgbjTVbgbWd1hsVU15QoFbKXF7sNsAKDugf6UJkU19i2zjiWdwkKW36",
  "key18": "5sZCU963HBsA4htmBo8npDm417Bv8LF8NkdH1bs2Rs8CdY7RwVUHXoiQFQ1svmLJqavP8qQRG9KPiDELBfCWAHnm",
  "key19": "3e34ahZioTUrXQc226imPJrE3zaWozJ17g39dkoVWyNyYHwuJJ7JCDtPs9u7ihhj67RpUJwVWTrTxiHMVLr1jXt1",
  "key20": "5pSKhFKAMWZL5okhuNEmzQAKmWXNnGnhZGVSYXofNwx4jLjn1KSwydLMFWxzTKeZPSdwSM6fYotCn9S6Weq5NLdf",
  "key21": "5NrapMWz7UgmoMPeetatNUT7bcPEnFNWLh5b5DamqLLWD4CcgUvAcn7Vn5g47E8w6tCSgidMyyc5HNyBivs5nnRE",
  "key22": "21FWHk2EciFh6CXPmZE87XEoykQiXDBSYGUF2bTaffXimx22YSRz3mZCNq4HHAFWcZiJXhXYmFVH1mFSw52sXJGA",
  "key23": "3QXuXFbviNyACBcrxcunz1kjyTtwiUXNWHKogZUKBY3xsudhFfZBGiRdkCJzbVtnHxv5Hu9zhPV4MFjdFyfJkht8",
  "key24": "4K8Eyf6gmrLsTjwdyMdDAo4DXPYZvbtyb5fRvtwtDkF1cCeGBf5xyWsDBscts6zd84EZ7Go1m8GXoQ1qHCkEMH8M",
  "key25": "44keAbae2jfeU2y2Yu6exHwBtPihTmvKJJHVhvrQQZwaHNhc6aEG6PvCho4WLrta9xCBh6vrcTeKim5EjPMjVGR1",
  "key26": "8qKZw28mR8hjHoHV9LgAHxXaeK8BSwjesJN6E4T22iFbLz4up1WpibSg3Efa2guF9z4b8JzeAC7ghicVNmPzmAd",
  "key27": "4T4GNKC2CDmX9sLeBgogmrodq9PLbowcXvFrNFWfbHmjFJNwUXQSwrxgxFGscnrh2aRjTUZPwAkzezQNWAE6uH5f",
  "key28": "4QF1rwxHkAcapeQd1YqDe7QkjMu8vT3EWBjuVSNG1m1UCZL6wTrGw5sutiHvoHisFdB3UzFbZKV865CqjxEEWtvG",
  "key29": "4Nyo8Xf4RyTh2xaTAdv6QUsMAE5pEcam25bD1bMtm1t6cnA1tyKaJvbMRRJTSKGKwv1aAxrDxWWwGnmMjcEV3s2n",
  "key30": "4GUYZBzJ8UfPYv95a9tPQYuYDD3FofhU4AxA4BddNsiVVu1F5kXRz1NY1gFzCBFWkDtTeRxPHyw2Jr1Pzjsorv3W",
  "key31": "2XtkNJgqrt7Py2TMEMqZgJY1Qfs5CgvDBMxeU5oYo9iq7rjan38nd1Bgm5GKwAnYrN8jectUSUdazYPYdAtHf5RD",
  "key32": "TfAfpmsjfXKvEvyAMtFoN4ApUMes2fkMUVuXuZ9AfC5A1rTNN5xyYn9p4w6kKq7n9DwA85yDUQi2kBJByJMe2dH",
  "key33": "7gntoA7q6vg6rwgD4sNEVF1U2qddUzvXqx4SKgwZHY8ue1p6nvB5SXbpidAANbRHqwF1UwLjHYdRRLTgJbRNcU5",
  "key34": "4Qfn5bgGtfsTBXDWDPQSr4JP2wRcHEZMngQRBsZbstGdxJAbVDE58FdhQLWjRZNbkVzywAtcDDeLorwmAf5XHHNu"
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
