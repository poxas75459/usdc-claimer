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
    "MkmduPBPfjq7QRRjtuaJ7u69xGZTwwyaNmXSGUo66ZsmrYiaDD8nnGU5wjEzQRWhqRrQLoGhdYvqrdC4MyqtRni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEYesSoxHQ7s4h7SdaYTjF9Gwfwv6hkY7wKFCuE1uur77dU8ffz1rfiU4h8ZcV89ir6kZK3MBi1EnqQ1Tu4oc77",
  "key1": "9GvAtYmuT5NhMGt22119bJ6DSrcAvjLaZzSR2QojGRjSntjrRnQFUWUDMra6o3XoVCDnqyeZXqsqHneTDsEEmRr",
  "key2": "2Bqm9UFASSjGYiNZUZfEb1pqbiuWTu57Xpt3FFELKjKb6n2DvREigzpQTG57sZpAuyTPw1nUJo7UbG7kh72TDora",
  "key3": "52JZ8LM2foTbyndboNmHXgRnbimPU1untzgzGZD6iwes3SaXLWTmP5qPXpmhZ2xhDQTpQ3LewKnbyG8GxjyCgb4x",
  "key4": "3F41Ay8pgyYe1LgVaehSCBSssND5UEHLjMFcqCPtibz6834CFYfQds3UxUAdzfUJ2uMFiaWP3tbwhEqnkysLPwgK",
  "key5": "267eWuZQayDGYmo27xQUAqRdPyQgFxBo5tg62xTRfUkMwHEYeFwPgyHjdZcy2p8VdZDrThwpvutgpcz7C32go8dp",
  "key6": "48v6DaCsEyknKBzUi8LjpFjRGsUanDvjmWGGvpvkX6jBBuZyH6odz6uWUpfZAHmLzQzSp9ghWrPwRVoDEhLnpkKk",
  "key7": "2gKy3QtCVLQqEvm6yWUncFP4t8DWBTu7dVk2UFsrtNSymw3NrB3nF8d17qyXr7Uk13XgxutExnoxz29ZXTax8b7p",
  "key8": "57vCe9pUj1etAmniMnc2QobrSHYyDGK9XJUmcE77xEroMcBMAwjmjivc4h9sUqvRsaSi6YcJAVeuc9k3tvwPfkFM",
  "key9": "4TKksWzi77QMtwn3yHMLUio24DT5YnLXuStMbGdtMnkvmuir84nMqC3DaD7mzdeTTVtL2GtJHaYQH3rmzX6PGf2a",
  "key10": "5jxEuRvKxeArm36PfSpxfVduu8GkM2j6tjPGxcgxfgm5nkbQJFz8uLX6srPoQsAYwfemofvT131YP2BBYHiRKyPy",
  "key11": "5HVUPzSyi8qwJPg1pGUF5BzrQbpHV5TDhjvtJXbsbQZp4upYA4SrVrnsFkHFvLh8wWn2Cb3iFW1hFKiG2QF9RkmB",
  "key12": "2jkr8mJ9bQd75VSxD3GzspMPZRroXU7H2yGjNSexFLqzzrQ2bpJPr7kyuUL9EwMFgQBsoApWPZphYjXCFWonwxkY",
  "key13": "53rKj27Hk4MHzsjGkb7GxfqHhDgZC3Ebbx84JPX7Fu69vSTijV9ide2MYyVgQ49mpJrx6BeTtWnEQPdQk2bdiNu2",
  "key14": "4GpwCTAhqTcLybQj51y4TzAcrFZSESavi3XEoxonkJcpAEvQpmHZ35GwE5updiU5CUXYLW2NCniU6f4xVQBjDLC4",
  "key15": "56djxBZYHdn7z2isgui9PzJwTpiLyubdYmZCk7RpsnGanti99AEYa7rh4tCqrEZt5dv1wMdtRQm48zTJnEPwYeXC",
  "key16": "2ipTSwMWd1XiBkdLNz93FSfnMMLStTWSHNEXRvGU5fXWm6UEb25i3myAaD1W2tJkS1z3dSQfkANKgahzv6Q3mduA",
  "key17": "2YffgjdjaR4knhX8842GGLdLBPs3HeKh2Ehb2FjzEpg2qEqA2nqYa3c8iq4wuwHmqgmxsY6FXcXujX5diB4Ynv8m",
  "key18": "EvNJgyvfKJ1yg5WSb7dHFM74fEFCY9bgUzRUh43UB1SkAQgj72y6KqpvR4RXD8qE4fwrGBGNuuLfEvyY8A1Diag",
  "key19": "4VMmzNuPkGGmXTFookhiNZjzpXWHgfw7hYhPTWChQPHHVYryCabYXnbyd1Ac3mVPncAEm7uHY5cXWTCgC7nJVHUD",
  "key20": "2ZbRfDHSJWHsP4fJyLCfDstTC1PxiSTu6zrSWcs3b41jc7KKFPR7BCrJuMif6R8rtfwvT7n5uTmW4PY2zHmMVgzX",
  "key21": "4MJk5Kbndgbk6yR1WPZN9AFrUrhC5zBKcaz1AGC2VRe1irvr1hgZXFsca4MQfAQfXPytqEozVnMgN2QXRksbdPSN",
  "key22": "2Rrqw7N3aWjzBMYFVLcxtoR7owdxqVaRs1tSB9kKkRm21qm7jVckgcRxSfqof11jk1PL5gfBx51vHyG3359tASjE",
  "key23": "DtZj2JfZMWhR8EqaY2npv6qSh7gnAmzGgKwyEjiFhDr8nFbCzuJbi6GTNPRzVRgF18N2phD7R6iiRGuRREcKtzG",
  "key24": "2i7PfqMwvijH8WZKuN2v3yD6HQe2YLioGfc51JJk9xTx9367hogLHjFRX2sGStcftvhsV5FpYLbAeuTN6HMFma3D",
  "key25": "3X4nTEr5bF7UYZRvzgNN9jb4ZE5tYntnp6tueSVZKHTW1rRQGvwYYjiJsQ67m7uNxBQqAAAFdkzujn1pTzBseFvY",
  "key26": "3ZLEHNVtPWgr1tojt3tcoucFZaKpgrA8t38s6poqtMtYz9fvFspry4De5bftmN9Hdrkh5W1Df8rUGDvvWniEHfnE"
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
