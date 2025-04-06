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
    "3WnrfxW413pzshQCCkSZv4AoZTr9E2TAY32HLxPrXL5W72deyPVRCMo1Zo45iUra8tktXhXU3XosAynWcegV26yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NfLwoFJj77WquxNTb3zRsueWcgA9xjLhMUfUsu7Aw97jPFs24EdpBxMJ56vUYvHckRXTe53xyLfc7drZGYsBcSn",
  "key1": "wmdED5PDRXZ94sSuyD6gTNou71hQvx47Hxb6XbKBxvcH9j4p44thrMLD6dY9EFx59LhSscvLXZokuGJkPaqbQzk",
  "key2": "35b5QUBCbNmjxP2rDUjvQPEsDha8i9ZC9yL2Eukse1HWN92obxrU6rvYg7iHoyzZxLnoFucGsMCjdnMdAQR4ocZ6",
  "key3": "2xgfrWFKJMEDoGesYRCnfbLYpeD36HVqiJ9uxMWGe7gbTHp7kDWc94DdLVbZUc8uBSEbxnZaC5EVvqVzUjurc2T",
  "key4": "vZeknQTeDhVshG7oZMCCrZDhbh3SrorffLkRFvL2cJWUim6DsPmgcm1oVGPzud14qVLSzvbtYcfpZ8mvFkB5ew8",
  "key5": "25E4U4NkZeffvJEhZz7ToJ7PTaLZ2BAGHAEew9ho78HtK8yDiyx31AFKcorkQkcvQM3UcJD8GbxyKPhfRxXnx8nL",
  "key6": "2aCbzcBMWMSA5mQvKvg8Yys1s9mmJoNkzM7TXsXkK3KnNN2Bi8ed5yw3Uswad3T9ftnRZMHzjbkkaS1WvB9xtpem",
  "key7": "2SnUdRCqr9QDfjcL5HnwQM1VXk2tDTP9DeN5oY3mukoeJaVG1dq3R8A1GdzDj48zzzJqYQrtEmgJK6GufXXAb3u3",
  "key8": "25aDKAwXLJosarGBDcqKbCCwmx7D1N8RkaT1KAtK2TjF9bP2csFpZvyDbRjR4UqhuyD3d2FxxUTFBqLrpyPBebSE",
  "key9": "3kkhJ7JvqTxUUEcerzhbjizTtNGsTKbvGYYJKvbatwyy1gyvFd6TrXVEMuyn6V2M6Cdm5r5yvVYHjGgox81bt7vZ",
  "key10": "4GbzBoxKihhBT7VCsSgUHJT1QLnCh45ksZYT5u9bkdHnmsg6JNaiJiJGbdCTQREMYHY1WUDjLrJY75YbTseL2bxt",
  "key11": "2rijk6tV6nrWatpsWkVFWxFKRz7JVNyT2GMBMH2xLAEZJNaeEhRMW8CQ14MPjX1dADSDrpp3uX6G3UjseaS6nktP",
  "key12": "65nApmPj2PQTf3ar9fBAJQKqKogA3i9LdWGcni4A8qF5ALFqy1ccpkjVcmxGnPBhpB1rLHrkw3cR4mNfheLYYi8U",
  "key13": "3MbZCW3ggXwwxFbLRQAZL17fK8Jbr3ktjiieup9APkXqkFRMkyxrcGCh5duJ9jUVMnDDeRGd5VyxdRQBgch4VkaV",
  "key14": "jQgrRFgcorvmTMhKydyecQM24RBfPKDqgnqW4qEdVASDz9oXu7GxR3SwAbs1Y3smG6T3Qi812bHVweLSkD4wC56",
  "key15": "34nAsebumXxGNRAcE4BUMqNaGjqz5iyhx5LrqHvvbuTbA8KSitE7nQ5GtSXVhgYfHr9Jsse3mXyxaZ2N8ReJymPF",
  "key16": "3znMGoKJ2K6EAYzwiurkFTLpkqJnu3SMkafJNSZMWYS3wVc4D1EnnGyqi4CtoBDTAUcySsQKVsJexgjTnnHmYp5K",
  "key17": "2JRC5LvxBLTmqyXrGSnW2tAq9zhgrddX1uqXzGffrW3YsK6Qf5APh8PMLX5DrYBdNvy4Fb9gdZ9jsFbdCoYDVYN2",
  "key18": "54cJVfo6ZQBo3Au6DGCVe7rEtuQqJvcberBjcr1jXG19yvZK1KuhbZ5aDNNEqYAcqNKQLmd9R7tEFjaVB5X9bs82",
  "key19": "4PxjSNXS78Dupz1gPGtHVgJeMGBEegN4GxVvT55gTWhwcDeieABMiFswkqjCSCituuEYkx3jr4MZ2hGAqds5eRjN",
  "key20": "3iTF7EafDN7QmHEcmg5FX7RGwsHxR1rC2ZeibwRCYXUVb1ojRGjWhnY7Y1jLrwduRivjKiPEkPgapMf4B5R3nV5h",
  "key21": "3zHQJiLt3ebvbNMGkZC4WAYk16ihs3qjFYZEDHRgPdtN7gK8Rtgc2p3SxrVEbvVPyHn17Uz3AUPFMmjMSQiP6fcj",
  "key22": "2LgXDgK7v2sTew2CxuRY9sGZNRtugdCKEWFqQvV8A9LchBbbhU9F44hc3Uj9MdPZwjruDUidzhGmzbMNLYF8qjvN",
  "key23": "5a3WpikGeS5xrapUQ2zXnk13DdnmoVbUDkBa2TYNmN3ZiEZqbmLkfTUcsg9dFtTpV1NyNdxkyK6GisjWwDUZE8D1",
  "key24": "59SG6HEAE4VNNhoeQvRJig18PEaVkLhMmTSA6MP2eybYiGc71BgZ99mxG8Zx7wNgnRU3LVLALK2PYLiu1qXeefmr",
  "key25": "2ZFmpybrjKxCDc3i5k9ZVvdUWdi9JJXWb6aa3FxWLjiXUoBntDMMzw5SLhDyJ4mhEL5sHGW8xEa1gCCE145opUVi"
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
