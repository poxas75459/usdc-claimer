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
    "JYLMRMsbNCEdhHmog3fpBAsHk9ipGJMZAo2vhAPfZ6yNJXfKUFW14zD2fBVoRBTAwYdrEEUYkvUGuaakkDcvfHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EvtgdRRHgVQQiw5zGZvpWGagV2aXEWAZxLC8ybo1k7g6jzFfHhxDrbygJZj28A86bAseXK3wBbmym4XkZZ6PwL3",
  "key1": "5euxEARfV3XuGG8RAyLHsqk7bwYDde1omqfNX62AgwXVsuDV4sZLrtta1cyDAwjZ81HAPpCEZWwTSujWTzfDVXPq",
  "key2": "4KFMs4UjcXu8vTyK9YiW4GMgCb3J4mZPszsKcKWTD1NepMQWZQTnCQSpD7jn4eWqt81Hnig27wW5UqA4RQGDrQNp",
  "key3": "5nShqqYtry4D1aAurrybL9hkeq4FS4auPByA9Uq9vYqryLps1TMBiRDim8Qe274mLJ6kyM2SfSTz75BcKsnmLbXD",
  "key4": "2vDdRxFUMw715ipDAtCrtW4Py6hMFKEd25XKGdm4TsnuZaNKeYQ5nVms5iZkazx9xz48EYeXRmUW3whGu9QKCGCT",
  "key5": "XTekfNKGr68q98AZ1mGVW9sJM4ka5uYzpy8Uh7mvCpxZdnch2iQn77847DYwhW5HYG1sLEZ2VWDaXVuYQeTyEkF",
  "key6": "4FxrYUZ89PjhYNxGFcMys6ra76qGfCZxm8gEiQ8E4sxepxyNVSUDX3ncoRgb5WYQpDeSk6A9V9jKQqZhrjSeZN3D",
  "key7": "2eLASBAnfz6WkmEXhYvaeif4HhVjiGo4Do7HQbH5iaaWpRnx7xGe5XuBEqK7yyhGUpvv22oFF8G2iyTnus8bPTDP",
  "key8": "5bZ8o7ASYW2TuTHA9NsBdRgJqFhryD7rHjvj4wnrRV2JE9P9UVDomYiqE8ypzYpS1YGYKpQAQguo3A6TNatoE6S2",
  "key9": "34PpLB4A3HgBu1tTRGMy5mEzwT5WxmtgcpqU4jW6gBoCJkkWFx4vtobX5uoHcUeuyGtx9dzPMsvN4pKnUK59PEA5",
  "key10": "2fugUehd32nz1B1UEC71a4fBGoTe8BLW4cotVAAmYKM2FG1BDihd1KE8rTBVpg4PgNLgCwcfF8ejL1JjreUz4PcC",
  "key11": "n41zMeVuN3jARKsE4cRVPr2CGFoNMpPLEFm59Fc2sjKMypfPXzoEYSfAbiStSqPSX8RNzF88CWjnfLqGWZjZBr2",
  "key12": "3prjQnLCoNP78SsP88s4QP4xxFyqHsFg1bgqxA8uxaPyXLk8f3Wq1EinFeyAhpeCPAhsNu7dyVeyjexRLcbmpNj4",
  "key13": "2sfPqdEWTbcqq74xevPbZquUcCVxPDgi48xW4oM9cTCMiY9Uw5Dh9mPu6DK67yQj75B6tq6pc8DsdPYjYb9RLmpZ",
  "key14": "2JrmYHwTXg2FAyZ5vMFPt1F5JaojNRgaRgRcTKzeuaSq5rBJY5WGnGFw1UkukyZQWn8TK1GFuPSNcG2hbR6UhcaQ",
  "key15": "5qt4zFoYziEuQoytNBz48yTQ7fjKZFZNtkU7C8Y4kfBKCe1EM1BgGGhR4Rvqqq9Xxg9hfwjXhfUyMfbTd392F2dm",
  "key16": "2gbBvipXD5F29BxbZxT5bPhMk9Cg41cjxnt9ijnNUU3LwzF194kUNNRiCMv3AEEsQTLv4QMU1Ko6jnoFp1finmdd",
  "key17": "7nqfkYRVHF75kNikVUvik5eWmffcHs6WQc7iqNPAazuFrroso1syZr4Jsz6mdDh3RY3N2Ga9biBJKf3UVQqaWdZ",
  "key18": "5yoUk8HpHiKCPFmbE6KcFv7DstHVkCNkCzf9Bjd66m7Edf4aFGjRqpynU3yuTNNGohNbAws6KCjf7nT8P5fkybMs",
  "key19": "2mZpoNNNVtvS8JvSrQoiLMHewUDxdSxFTJnrA8aoiGtyjmvYv8MyjWqTZDBu3P6E6pUq2FaBvTH964ipUfQin4FC",
  "key20": "2AihxCe3vNGtWpcJKHxNXQfZMQQp4zzY7LQvoeCuBFJ96p9XztrHz2rcC5ySLqrGnsQw8MnLtN7UDC9dcQ2cxoUo",
  "key21": "5wpnWYTjh2FYNDoTMAb5tdECgEVopJmvZRX1Hn1qYAXPvgaBZRAijLu6zGG5zgjGq73GACWKmJTz7xD3C2gTNTVa",
  "key22": "X9cUtLAq6PuG6uSpEEvqijnbRbna3by9aWYBTZpnss6C87YFDW47wTFPycGjC4ZeXdCb4UrdzyXGjs7qpudLofu",
  "key23": "kSQMSJoj737GdpAEwCwL9uMDZPUtaHQQfrhJusrmJSAQnNcKw1xQeLzwJT6LaiWsyCKS3nCGHa8f6EBH9XMdRkE",
  "key24": "smRmksVPNNKPPAMvxzwhrZVjyWejqQXDpM6ECtSJkmACxdx15CfH5qAX3zN2kp9SxuduHTRmMKPpUnoQkXA6g7T",
  "key25": "4u99jsbF5fJg1ZUxadmF31AuZMhXBKgxKB7uinvcSpUHf86jwwWizKXBVgYAhxh7TStS96xgTEq95BKLkGH45kNv",
  "key26": "3En4n8V7wNgdaBLDnFSetxaAK7CLikSoYTPaR4euDY5558tiTVXf3p4XpRxsquwQegLiApoY2cfzufQRs4ysi8zp"
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
