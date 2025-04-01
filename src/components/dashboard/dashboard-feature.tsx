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
    "3myzpEc3wZJHF2qmLpwmdPcWwYs85aEiYW3pnSm3Gcku6JeZCsnHhWawxrQiob2cewp334Haqz1ora8YwwERxpay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSDsSqhnzG2iyoJKjSkyxWnhYfFcngwpKsTHJQDKDMjtZaiVnotPEuxyEAkgzHPiqkwmVLad3McFXDvfsFuyLUK",
  "key1": "4vhFrLdqdMEgRCqMT2GdVMkFa9qEPHjXrFqfBDrvoFtVAZtb9a8RCkeatkH9pwG5mgi6ym23n6KjS2yCNx4Gkpby",
  "key2": "1nBTv11z9LwBiRunEM9gcx7fFJGifU9YmVpjxUQAuus9zCv4MqFmeaHZhBzmcG8H3vSYLq8SHj4vdhkNKnuu6yN",
  "key3": "5phRjopEg7DQbimasE8rXTvNc8DtD7XJkPR9nXstoYgGyAFU1N5whyhm2MKAYySrxTGBhr6svAgYvC3Vx17vYVGu",
  "key4": "3otwk8pbMw7FCDkfh3j9waybjbKvrfvirHeaL5tDTTbMaXsQUjuDWHUeboV7mDjMscF2tshgfvdy5LRLs1Gfexeg",
  "key5": "mStJsQ1Hgqn4s37uK18yK8cBXjaX4aQi1E5Fgcpkkq9q6WqxXVkAhQA1y2maiKzekhgAFUZCsbwfV1CuwdGPsSs",
  "key6": "29g43KVyQc8N4TAzcPdbFoTY7nxxSzdAtqPyxDfk8oHn8sdQkouRL9jYZ3dRWFYgQEtsQWAdcMUu6EShAz2Jw7t4",
  "key7": "4mg2Hj81EqHSwmRG7r5oR99o6ikMkX2Ykz5nsW36A2nP5AK13cX3HJLYXGnET21F2LDvkfwq6ewvyHb79fpMRANs",
  "key8": "23ynzFjjPPpZwTs6YsKvmSXWRpvjRTuNBhrqQmzXTkrqFcmkkyQCobBghZo4YsTM6SPoPzfLqRwE3m1nermGVwQb",
  "key9": "3d3cELW6a3M6qxTyMaSGyuo6AfHduFog1yVpYXTTA18YFB8yMbBxkoWVcLY4iVYz8ToKhHGYD7N8eHVNsj5AfVgZ",
  "key10": "LZ2SBoYCrLthASathUxevg5JjG8tmDceeGeXYewcA5abtDC1WnJ19CyGUxwMw11xTcHu8BZKGYjsCneXNnBLkMb",
  "key11": "5nfT8j9AQ1gFQVEdhDWzbNwUqRSBUHh28cxSkf8UnYcWHAkWhXA5Bq16T7ZHdEPYvsSovop3tBCkApioNawXKMLG",
  "key12": "228EFJQThskc4NdeK4gc3vgX3Mz6B6NWQ2EJTtCmzFmdrfdMKKiKnsD46Xg6XTTcb6SSXPDRbQTBn8SR212SaPUz",
  "key13": "2GTcy24mSwHnbKtpNKUT1yY41NJxPfL4FRdtmYFpfm9v9buMcgP7aSo5zLikZuC1Fx49Eh7JYTEstvohE9SruEp8",
  "key14": "DfB5yqxwfupLJVorozGRDzGNokMXamEXA1cR6otz6DZ8bQTZPwLL4TL8yaqpoP74ATJTYKJXsTC4AhC6czwjNsu",
  "key15": "jcn1UQrU7sXxb98dVn5Xo6PrYuDbwCEonyqAbgUKrJm8dmxnzN8CNU6YRme5Lvtxmdb6RsczLNAtVQugvjYLER3",
  "key16": "5rAHDGHFrRCxKABYKJMAtVtCUJAELRiTCJqEbccMfb7jBRid6RBiXozcHyLWt747x443U2Cdb2yRsTgihoz71wNv",
  "key17": "4chYfEyrPjXJGidQ25oVEYFRMrwSHfQXhMZxhWoiuvxDC6rxnp8EoXEwWbcfi9zD7mbuSPypP97WVtkNtfJVon4q",
  "key18": "4ku5J9gro5stEDTESuKyaWNhFJTRfCWx1NkR9bdceCAC3G49sYNirDLZQoCFpm8Rbn5eR25NDZYHFnrh5C1dbTx7",
  "key19": "6zb1egarTuk4SGXxzdkKHePf5PFXcrW1KqfoNRGEatifGCgY5W81Mi4F6RKBDFEfRo6qCMkzF5wiHvzfHUc9SZF",
  "key20": "5grDE5QeuT7XrTmhjwQHmvpZsvNh3K59CBtppqVm6o84ZS5wKprY7WgNCu7P1ms7qy9VKr44QPBkqHpq19MESYeN",
  "key21": "4ApFWAh5Kw9jYqEoPHGktid416xzCgbzeMs6KctLrWe3vsD7b5soDrEKZA5y3XufNWcwLMjoSfthiwax1yTK6Bjv",
  "key22": "3JHSPsm7BgdXbL4XrUJigoYuBBnDy4ZmaVMY1g1ZK2vFJHcE1cVevvAy3bQKRMtnbt19vrwUUmt2WKdhv2NjyR27",
  "key23": "5MV9Ctv9ejY3z1ePRsfhQPCUqQjhEyy8hakBWa9Xg2ZkQdJCT9ktabvn3LsKacRRR8Y9KbNFWJQdrDqTPdxMFpNn",
  "key24": "5sMJoELHpVaUs9QVrpFpKVBZ6u2uThZSsTkyxbuhPjbWnyrUPRpvEWPygjAepN7vRCrXN1T4U1tiyufT9ZH2VSXe",
  "key25": "eQ5MfRk3kbfnsAinCdED3L7d2i3ofaoEBXgMoNT2gMtngxU8VnNTsyubwPh1FdxG4oN7uvsVcvHAo5P7rxN3ViF",
  "key26": "4pnpwejYECsRZGi6N4kdYpZ2t31nrU3dvR97c6WZbxUPWFuRcAQs5RCTZaHRdrio3xKjdJdpRFFAi7fD7twDgeRo"
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
