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
    "34XYoEqqs7YYwmjKNpw1AEq99HteRzjzWuRDpmf8G9LLoL8ExyL1UCQxpQaX14ztWSWaniRFdkD35FNvT2Rm2BTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z41QWeokoNtWtvcn3qkbQvrFnCvBgc1tfL1jCPULGWkMbNqH7CcJTuJnmwhT5LzWK6aFZqiMSfVBkidAui9eboy",
  "key1": "5kJYEQyBSHnBX3wvBfyozMuzgUk4PnGsUaKuGqPGBb7pKJWokJ1UHQRJpQFGsjYa4nebZJtbTvdTpaz84jfUttb7",
  "key2": "2bs3haEAhaewfXfCUtnmMbMxpHsrLN5LdgrA14YEueXSELKimPfTTyefUhhsNKnnFtCHVx6JH6gnggL3CJhx77vx",
  "key3": "4dyHUSyXAQ1rsj3buRfWmULwQkTian54KbRZCMdDD64Rg1rH4fwrnSG41JKMNdg2D2a7Q9gERAkXyciKfMqLYs4L",
  "key4": "5QRSLRpR5gBaVtDABgFynBbdAbaLj4Jp9n9zHCfxjGKehCiZiKfkWAFU2iJJhWJW6LL7TVkqQRGBpgQ6k6Jb2LMC",
  "key5": "gDKRQpRrT2d4dqzATgyNwT7YGVgzYpq329K5mu7njLffoYREEdvK4LLytNSEGLbbtx9rbKHY5NEEmfzUBa7DVXV",
  "key6": "36JFyMQ6RhzMGfWc8S21KcoqrfuA4tY7TAJynCbcyj6ffpLJGJttRMw5MWMEw1R5tx9DSQoAtAt84BFczk7gGH7B",
  "key7": "4EY1a6ktDBYReCULFopthtN9MiGHdCbY66NRCu6WAxt69n41wheZQgrhiNm5coHGN8tDyvh9Xg7QxJHenoXjkFrF",
  "key8": "3k5eSVxLs6Z8tmv8aFLnDcim2shXhRst1zNizQTmmP5pgZBWATGEQYd9esqLUNNBQkBBk1awnJvXpxMDGko8koQ7",
  "key9": "3QanyjCeuspBYu1qcaJBBfaJbu9CmXEuknHNmxq7m8pVJZjxRrDX6NZ7bESY2QJRFZL1SsSgduM6PmCRNRWiPGmK",
  "key10": "372rr93PvjeCfzEoT6ehdbe9qdWUhGg7smpBfDVbnUAzBF72bkT6tiLbDrqS6wWyKajR9ZiFE32sufGf87VF4NUf",
  "key11": "28mpKMWY4Azr6f18FtSt8MwV3HrsWNkEKqDVt81rrDyvXaYYcsjkZSGqCzBBnTwZySgjfEVfVRnUsVKqysjEDjjN",
  "key12": "4f8gMEvfV9aXjpJs92JEvspxao74qQQWPnUSuYchy3sPrmbQ4knPXoCuUh6f8XDGfcuVbkujBcPfPEwUQ8ovroh",
  "key13": "2EweXvZrUFiyXoPQM85xmPvDEQFWEPY9UqkZoieJorZQdANvdwEEuiqQg9SvBb67r2ubG7rRgAcZY93JBiv1FcCd",
  "key14": "5n8GQTwjeXneyFwaiFNxc7YhXmCwQocHCHGzrvtjJtHaFxJC73Y7uQFJgHdxkPMmunqDsE71YGfkvambAWByFWmE",
  "key15": "5ZnKfWg7rPCoPZoE9voLsHL39NjYpCXJoht3Mz4GKWQ6mnD3a4Bhhw3yfEZce6tM7Xrc2YPREkwx2YYuHqCD1naJ",
  "key16": "qgrSSdEEh9bWdiSX7uPt9EwGMSjtagri2DJR3qtcQG6cmH8nacNG9h3bNgkcVoGhiRe2PxWmnBRBVRcR5AYYiVq",
  "key17": "2iuJqxWRtJFtk3UXNs6MWKov39p4RSVa7QYaCvyhGhMEC5fXfMWuWc3Q898Yb3zC2ttt1HQkT2pV3bCjentCWP1F",
  "key18": "vRUAWsYwyReLUWqqdQ5FLLzftxzKX1ovRPLqviZeKahnq9t59JerAGqNGreWupGaV2Ypf2kNuweKtHRkKHQJ8G2",
  "key19": "2jcYLGZdipga5zuE7XQTJJ6vsa1DQtLkS7jgDarXbJjgro9XApHE6T3orzkz6xFksS913KNZ3tj1U6z8eA6T7bVM",
  "key20": "3EzoK4p7GgDpiGvpYKGF4eNPpwDjxy9HCpXHzTeJAJYfmqZqPzQChicBs3qGYzCcfBU3QmegzkZMdgbvRWQpPwtv",
  "key21": "3gpUfKLwfW2tpeTS47Rnn2YmUuucURhSGvar5iRtqcdxeVqsrBG1jjiTxg8fCoj3mxHamQyj8cMaqjBLHxxL83mx",
  "key22": "2DwVciYYrU3eSCpkyLTts8ubvy7ECUBgaahq1YQ6Dm14T7Mp6v7DzZhs95NmwjpC3GfkpY8ACXKizRZviz6a8vtE",
  "key23": "2KXksrDuHkGivdNoTGZtnesWnCS6btEovThreQHRwYpuA8njQFK5MqU6QjayjzpCWhtx1Xkg3svfU8gVqUCjTPE8",
  "key24": "2rp3hbE4HCqkqAXDRTVFBnH9ftJ3LrjzbTZTLQT7FLw2coGbGapzMP8UgR4qzCeHxmv4HAcfGChW7HYPPMyFvqoq",
  "key25": "5crEPX7RLyXzQ2hZstNHVa5vPxKyN8SnyeayCij1UnFiMNihLaVbhd7x473zHNP48Sdo46UgWj4z6yPFHQQoqFWK",
  "key26": "3BrBXr6WPbqaNtBEGWzpTgAiEvg17dUohAyLBBLQvyKshd7DMdxAq2UMn8UWp1vrRBU8qyz8eCaeNy3ddr4ubbzJ",
  "key27": "2j8i2DWVRitdHcn3wxjctSpdP1E5TLcZR1A4rxajKkq9trQJ51nJuB3oG39ojN6Pe4VpD7VvjEKwbJysL2P5i5to",
  "key28": "5fSVPL7otAyKsAnGtoLSdQPwueFivSsBiLD8dvdPs6j6aWkA9LRg7G5N4zYJtw2UmXwZuxXhQTMbB96Qn3CHnZtW",
  "key29": "31hvqRJWkWYmbYVLbXKsR4qwUQazNTpfDg1zbzduLtXfbFG5q4v9dmUdwCE7s8tQpbpvdfDxqGwDLUSbAFrvCixp",
  "key30": "pVjgmzBhmQmYmjWbUDfPjTRd8Ae4fA7vxdXNfzBSrpDq1jQx1LAp9KN6ZaqGSkFvXFuaTYYW7bwAXyEN1JC13d6"
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
