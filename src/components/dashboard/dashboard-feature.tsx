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
    "3Gx3ReRYmJYR7FQBeyi5pSLCqRmAFQgX6b5aNKZ5PM1eJ3yJMebeXzAW1MG3cQXRbPJujMdbbbVVa2XDa4nbA9PN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QtM87hmYYiDXS3PdAMnmjnp91NwFV744GyCVYdnAtMGEkpJGqVS1Qy9Avp6x4BuaiFCv2xjUPenyjDAZ2rpobVD",
  "key1": "4xJUPCPvJgbo6pMs8ktLTXeLHc9JT2CxrRsyUMa39ML8m4tQ5UBCZyMQH6Fc8tHMYKcNgCkWerKT3riYR2ASZkWS",
  "key2": "2u9qQZuoa8LVMptPAqryospWS13uvDJDZrHwWTZgHRebAcsGKxw9y6jmxqp3E5Hi9h1VzActwfNjMLSnTQrA7eiC",
  "key3": "2tpemmCk9HQFSNqbQj5CCY4atWQNcBbJ5UfRYVFrpdnX6nGjYAjNKuGar5hiKWxFxHkbk5xSGRHERyvJRo7o2rX4",
  "key4": "4uVGHzUgg7jMGYXtVBk87sQcsSPwTY41RcHgfG786RXdsqDtRNQjctb3z7fVQS7M3e5d7wQQasLtbopdeRqyPMTp",
  "key5": "621ThefKvx7Bday1AinnYVjMZmDorvtGLbhCBqjkrDs3XnhUGzhxk385veSLtUPHWzMn8bfiFkCSr3KdHtGm2zZ3",
  "key6": "4WRGQgsW8WBhS27ENeqbcEphhim9L5wA73HLgd3mHWM9vEtR569ZnwC46DfHr7K71hmFhfnBPYLm5HFosXLqZRiH",
  "key7": "2WSiE7FYBy62oYXsizoTfLyignoTaskGK3CyTmXFVUBBN1PwmBoSDNWTcomBFuh7wDY32kP5oajhrWNZ1u3wkbH4",
  "key8": "42W3aaH6YsYUFrvnzYKSPFX4K5weikDUmV2McNGnEhgsvZSnjdMGCzdtVvuEbWkntJgoHEDJ86o3xUmUk31YqmwY",
  "key9": "U7TTtEzyeiD5uuwnG7boxT7G6GLfP3q4qAf9RkjLNLahBeKWptwYW1eJgrGJ1h3BLZ13mN7YBfQGjRvrMWvKnXQ",
  "key10": "2f33aD98U2K8PnEz1z4uzaVEBToy65BSknAQruMbXmiSqPtWi6MdY1iAXndpzCSWbfmSKKW3nErWagxesPKxZJ9G",
  "key11": "UXxy9XkXMFq1A8QAd3MByLXRJ7jQosDV2wJaeepDQxnSofqZQdMmUNs8LimN1qZFmao9Zxiom2u1CFQAztxrNpB",
  "key12": "xwe7VXFJPo1p9AqC64yGczYrxwoapgaWEUxCsuedBYEJVm7vuAbPfxZc1KkgSGe7Ju3ULFRvgPcCiRg5yzWgucE",
  "key13": "3Ri8eskcNW7WuSWNRaZkbqGAyYZnSTgWgE4hoRs5pCsf5XcrFgWJcDhMiUBz7ZFbRgEqbQgHcvykgstdDqLzMcKD",
  "key14": "55wmP5ksL9KZ7aSRuJsyBCpBTQ6ud12n9N7cU6XZRXYoummYXgeroYxt3Tnrw1GsmMgHbyNgVCwRxw9vRezqnkCs",
  "key15": "4EfMgjbaeDnobbNbYsEfjj114WYPcjmRJKF4Mx8zEPwJbi9VPWfBnSdeZeovYqctAzXKpAiXongTvXx3NCugfx8r",
  "key16": "5rvs18a2tqhFHAw2Zp9nAmjmrMcm3uzUB8MECuUT6gJSGSm83YTqpQfkDt1GPrCXFCC3R6XTbgZnma4xsLWwBQWp",
  "key17": "2QSkMTvfZyYq9rXAAWMV36kaz475rSujYwU5MrvDSCriWVrH5dxu8Xm11MYNgquZVVZTLCS73AaTrdZS5FQSzF6z",
  "key18": "5ThEDo2menAVetRAtUnK78tyJWxcJ4cTFzd51DmAyoQwV8X8aU4XhPHwnBWaS54rmxVsZS4CN6KDoPN42kUdAbBg",
  "key19": "45m9irTM8eq3ZVTNs7zJKv7qHrZq8t45EwMXwFQSNF58yRzeYdCuAXDk9ExH6rwW9vC9z2fXhw71G5V1N13zLmHz",
  "key20": "4qXXwTL1erhaH2fkK7bjnveVwh72KY6xGUxKey48fJJtYkKYL5NBdHfJpD9eJYzXGreKAKcbvLysoaaPYkhLzrRT",
  "key21": "2HURArQL5EC3QiSLGrp7TQoA5S9aoGY8vn5SjCJt5npMsBAZbfMgxe9u5ZvS81rt6BEnTrU7UuvK74usRPpQhq73",
  "key22": "5AF2quFd2XXzbG5muTZmi6zuC5anbsufgoce1zTbMqKWuoWaAs31sCzqbD9W8nrejVGu7hLBH64f4ujQ434cXM5m",
  "key23": "3iKtXUEZSQZG52jU3u8s68dugwxuB5F9Uif7iqZTfKbsb8m2Zp3yJWecBQ3aU5tygMFnU7vNwygtLHLCujsscf5w",
  "key24": "4j9Z2TARCZvNbUwYi6Loog1N1NAeynPJHhnuWZyoES2c5J6vMoX7FodgFeX6yoK8PF7P6xPwpdsW9khc5VS2qJSy",
  "key25": "4ecRdTGwZrMRNLD1Qxuv4hk5WQvkTxWwik9PNjn47royMaipd95LQTeetgtbLQ4iHCnNftrv8pVDMtUFREJ9eF1y",
  "key26": "4CmShCgFQcNsmR8LqqPCsMjDtDzYr8xFkxzgA4kbhB4xaAZRwuYJ5T7UYMkGUrg4s7roVSURFFYBBMXfTBujP19t",
  "key27": "3WERUzNM7DP2hheu8UmEoqv9s64cVLDDfVv6SuJoBPvkSXSF5CRf6hyoDUjcyMgfXXNTHtW4oHCu6vq9qzXWGiYn",
  "key28": "29eAnFegMH2SxVijjYuX4preD7vFqEzA9eXCkccKzbQCDTcfSY9vBLKYQvmzGMwNBVTTAHnvZU2weTZd7CQbaEiE",
  "key29": "4ucECYvacLUtUs2jpr132u3vzyc2eHVDctxirtVmjaggmbC8ZvYtWm3ifhMG3e6TzEkkZTTuvQVSMvcfJWjrSJRQ"
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
