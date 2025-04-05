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
    "JPvwBkuqVZ81gRFZ2Z14yTVHCLBBFVmfF4pjpSpVBRcJyRbn4eHvdt7UgvzSJz7j3cxcG46bz2k9ZtezPWm4MPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnvX6nx4vssvQYtHjoygULz7MdsHCsmFUq4zACYhcD449kjohnekKzVrjiniftBR5hi9khHPqsohApGLAUFWwmM",
  "key1": "3YfQR8gTZwKECge3R8zdVFejatxq2g6wPUekrR6UPwZSUvBgtUkyWBjxMUQQZGQD1dejtykJBTkBfTP74fNRjK99",
  "key2": "uL8JXQSu14Zz9EzYAbTf6pbQkBxzUxGhfuwbvYSBokuKMgPH8m2bQpa77GfFGDQXpzigjAHxUW93ZTMawYKz7oH",
  "key3": "VVehZqJCzGptLgSUJqk9DRTiyTMcaMLgKKrAvopQU9vQSgnhZEvTghuhedhoTdJfT7fEpo4uzwu859JDe2BeDiQ",
  "key4": "5ay3cdp3YmAnmjuX9qaXYs8ytc5Y7fjZMt1Rivj4JE8GB1LNNEFAKAmGFTcHVaioUcQPVee2qx4TvBX9PKxbDoLZ",
  "key5": "tifLDGBHSbVrSxLiAJTJVqLMguPQXTFiZKrDG7scsnLCZcY4n582F77gYPwKr8xHk4HGd1Ay9wwUu1s3rNgt4aQ",
  "key6": "AtWXcWFCEEnmkjvfVe3fzXnXqFxCa5Ja3bnNHXLmz8fKGy5AKzDJ1AUgP9t4kCUDCxVqEor6qtnMHs7nXutMHCP",
  "key7": "2QGCmmzQ24nDGZKF9MKeCFscu11XYmizmv91RewDPC9uGMwUXuB5YXizQn8pnuKu7CLYzR73uLHQkBxNMPPs3v8s",
  "key8": "5RQS936fNSufU64pizCbxNJwWJtu9xNFpzYwuojrnTqWxqa7ChwyGFfLrn7xBCYy2WxDZcnuVd2atNFhJJd76Ccj",
  "key9": "DBMhQUa91FxLKwTzCF8zFE9P2JvVjNbFKJaqFSjx3mjPFNfxHcjC9uQoxdqvjVuXj9dwYTdYxMNzM11zkpaMgrS",
  "key10": "QLvuFCBh1rxadu6cKTfUi66edUaVxk1PQoNHbxbJx7iwbVRjwU9bzcETrN3635EoZp65qm3K5GTMYr5r8yScsPP",
  "key11": "3LDTX6N77To6kAPMWiBzFS26Ni3wSeJvEEKrhoF3zwyt1594mt8NWZ2ufPVbqFM62jc5wKqJzyNxm8cSeYT2NDT",
  "key12": "3tAaLvZzdDiAq91Jdwv7xwGqaekE6HzQpafVWkFE5HcMpjo1L32bQ3qhwWwU52NppWRYbjxr1mtVvADgXNcnD3Xx",
  "key13": "559FY3YS21bU9oiB3B5WzcY18EhDnhkTpBd6NfjVqRhY8gepnhbLLxMgyF1LXzFEk4mYWEKwD8BAhPL9iNcczhvs",
  "key14": "2KAe6keAtrxG1hhBHcZFeCdg9mi143ieqFrcNytTBX1HJ8c5ZXTbZytycr59KoariTA1ktYBppRPtFBo6j6Lw3Pf",
  "key15": "2ijvYXNbEUBmX7KhGA53dTi5jdSg7eyeMXkskT5DdXiXi1nRGk5ELtTwny6E6eg2NjE8VH4SyUmQeuz2DwG1sye2",
  "key16": "3zrD4vygxDNjPpTsqC5FxbPo8NNp6dcqyzXMZex36WPQciSpS7hxuGJHTv8MgJbu2A44TtkY88aX8ahFtHEbGYrH",
  "key17": "2MvP1S3QwN6EcRgXyJmSCwZAhdGwt21gwYiF5yBKtashP4vJvpm8gHVfZzmTALANciNyzfZ1cxNcrt3a1BYcSprD",
  "key18": "3ad4b2wm2q5TgbsHgDncztbuTN4ZeRwfo5f5U9hiWyVvBAeY4wub7aWoqEdCoCDSnW8DpX1wdBms9JZcaefTah7p",
  "key19": "2qwXuvwPfA7eDFdhwDsk7AkHyMw6mJmor8aUA9WhRGiw8FGDuqVd7mxgt7PdJy4XxLCWgqHyjeoRRjZdJzhhZ2Jm",
  "key20": "4UwtsjmdvJ8LwRhFL7SNZjresmL6gNrGi58c1Xt8uxd6zUdD3xEqMAXBVTZCa6ngqxkQ9qbkE4qEUV2YpXHmnNsx",
  "key21": "3ykXyNqnHkNDr3CCV7aNZn7of6guVZGeyjyAW3PKASaMT6zQKBUTnJaU47FT1rtwD6yma51fq9gpqCW4rCDwEwPG",
  "key22": "ijXiz1mQ6E4P2d6VeqsTNhGFhRBZ5m7wwnUvdcL16H3fsb8jXe5C8fCbCr9oAyyW8QgNgwnvB4cF4E49ZMyrXps",
  "key23": "5N2pjT5mpfktAqaeDZmrjtsBspQbfrTvxwudvj2pawYreqq7qBEBhFzy8nLrksX3iMRRormC9oM86eFLQ6cw8zqb",
  "key24": "LSMSGGchBASqcyUf65R5NEJYBn96kG1kfTctDgz6hvCoWrozdRdJoT4V9LNHnLAcsf93weExtrXFm7mPdFuDZ5a",
  "key25": "5rvj9S16GADoDcofrd2jkJGF142Dem83zzeuccHTvVmPvaFGvEiEZ2SDaid46SRzxwa6hyxD15p7F7BVbg9VZKTW",
  "key26": "678drUq4SeKnErSyezjYEUg6RLVBwdHWH6DvqcCL6RXVKLumt5yEe3M7LFAy2u525xm7cdLcDB98nnyZUxod5Zb3",
  "key27": "3WmHZjG3WBaPGhwz4YKzgNRqcwKaLiTG6uCrq8cevJdoieuz3RMxLYiW7p3Y1C1N98uP8sw6oY2EV5bg9cq69Fko"
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
