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
    "2CJVPzwZXZdsDPTXZs9gcHya5dG9dFB5AnoonY9MBW2v5v4ZHk2z3fV1ZhQoGKQGaLmhwbwcSoSAobs3zXB8szML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ek8w23bnigqoN669JXFxmnWnQSgXQVse3LSyaDSwAGXTQ6r7nifosoL3PcGhsCaw5oPGM6dAfWWw6SE5nL9ShT9",
  "key1": "667ue8A7BAf74nmd7UGdM4PNQCJHYqZcktgYGEfj48FPXWdKFC1pqnAXXuS63uQ4cWqCNyy9qbXsRQdfheqNQq2R",
  "key2": "4ZDgo1pnLLRSjnGMqjWQChQsXVvfLCBx6dopxVp2V2sfZ3aVztW6fXBjsmicEHmcmcMQuTZVyaQj9QJJSDLmbF6i",
  "key3": "5F4wHUtjcxAHTBjXZdiKfC2QzesTMz2ZzAL43sx2f3wxnsHJcMMKHvY32emdSfcR3XvTEZBy77a3zENgqLFVeBYK",
  "key4": "2swRuZfocnEfm83aEUkwfr7pPpogj4mC9eAgXYArq8doEjSLyDDZRZFAQeAH3oL66Brs7whHXU4F6xP4sdx79cCs",
  "key5": "3jsdNastBcHUVEDR4FBfPK1CPYaugkqjHhzyzFtfy2a5s6FHkTJam9Bb9RgMeypmngtDpW8fVWsThWBLyV3NNWVg",
  "key6": "3AXSnBWFMvL5WdtuZcvUJd15mWhuaULL3HwEQDoEiVbrzRGFZFzKReS6ULGRFPs9MTVJVybWceudskQmTWqAbNUS",
  "key7": "4q4wAXuSckW8kTYVjGzvhv9L4b9SbCmPzhULbwsJ9CDgreNLw31W7Uj59uXf1BTLjV6VSQj1d2o6kHbiKctxDyHP",
  "key8": "5MRT7XSLuRq73VxMmiTvuRezA5nKiPbXDxs4P6sWSC2ec2hMTMiZfEuZdZYxtAHPCN2s2QLExiZGpdmqLFVPCvp8",
  "key9": "2mttDNY5mW69T1A6k1M2t2Z8h7FG2iENUuz2xiTReTX1aA2UchVL83ac6832bSjYjuaLMbiuU2YAtEtnRAnj5RdL",
  "key10": "51rCPXcnEAX4T4HChuWbcNL1FKd3SW2mn8iUFTr4rqaCWFamXoQfTAGwswgp1ypwu7x6JorT7oLwaF1rP6HmeFQV",
  "key11": "3ZZxny1NrvPhi3ugsMxXcC8w8ii7pxC4z9KQEeToyDeAgqpTKdY1bMCqwcDT1RgtQ5q1DqA2SkoytWK7vpkaXJHF",
  "key12": "39p8VsakqRo1CvXGEuJ5RCofvnvnGmPTebshF7y1h3nxA58XmtDpZKWCWQMSraXHYxqfdV4PZS5ztyK5mfxyYc4i",
  "key13": "3LRS3Bf5zDjxcZqNT7nwWjYUhwb2meLZYdLLonctWXZrBoGnbZ66vpmDUaEQ7pP6zp6E2zSvfhdwwMkbkYzHsozy",
  "key14": "himCRge6SPXw6ZeVSz7LD6iyawu4cJFMZ7HaaAUUPPZWkxK3MfQ1v7p2p6DpgPUKuEjwvEEhMat3gFdBsgu5zTE",
  "key15": "3MieECmF5zZof9fqj2hmBJJGhaHfCNffmq3yEJWihH3QF2nooP6zeTK9EtUVaSqS4S1Ce7thMyT1i7aobMJJtJvq",
  "key16": "2gtsErKsGH9vojJ4ivev8J3H1WdUNMMrWRN3ToNjHPcciKZEhD6am1hzW2FZmsT6Rq8bMu17nDYM2NHjjWB2sJgK",
  "key17": "2eDuwXhBogUmcDmW2gAqWxigxhRHT8vpUgfS6gztFkep3esum3MDbJNnNy7hB817Y2kdVYHZeAXsL7hsqcVYd4Ff",
  "key18": "31QzKvm9QS9EQpRmN7NtSZhZaotvnXSbQAcV1YSZTvWw3iCcv2PeKyJhWVxJdQdhjphPeWcVczzMi5rnbn2DQcWA",
  "key19": "5PsFiBAyR4Jf56M8sNotGu1yNVUaewQBRKvhvQhU7b2WzH3uooBkLBzwYvwRxjnuMk8RY9u5xAug6UPMQrk1f5k9",
  "key20": "4Jy2MwjEkQKNwXg53o5mBh3KszMpAWiUKb3936vWZfLDsn5FXczuPNsrrBRXSQyPKEzP1TH54BGvSEex7nXpWM2f",
  "key21": "uscaYiuCsT6UYPw5RgFaT1sVUimAReQWsc3o8mATgZKXsG5zVfs4jKMbjKhFJB29N2foBNjjphRf9z2JiHt1roV",
  "key22": "UWz7RL3xKKveqQ1tsvG8PozrB5sjC1X58NQeZYZkjVCSU5B5ma9aBmNbt4haGgco7Vt2StGLCj3iLqySor7aB5E",
  "key23": "4GBkpamUi1qD6oqtd9E46hoa4SnfNm475onZuZBJf7WRHJkXXrkFyD3MPrqS8rw1VRajPyge78yg9JjvSmTxJBvm",
  "key24": "zfD4VMMCbKR56wdg2sctw8avBRwjtSQKEvfTTNX7TkEfxha3cB9VqmwJ5qBU8nCaBCGFb6VNgikxsVSzZKWhd9N",
  "key25": "4Y3XvcMvgDkmNJgmC9a27CvZ9zaAtmoxr7ukyW8oGdLRfj3NNtQBBweqXNNFcBNogPhbhyCPPLKUkonZkdxxikH2",
  "key26": "Q3CM3o5dVjgMNJj58Dsk42mHgxSdnMn9g9WCuXPckFGxKX7P4mPk8RKJxkSn5qkUjZaR5kgL3H4LLSDymmYVFYJ",
  "key27": "4rnvFhvDNSAAdtXEY89wcevdZ5pGUNT13Hx7fGXPax7qVg8j8B2whuLWAqum7Sa8ZhCctfg5Qna1ZcseCwsyvEGD",
  "key28": "44jCaaZLRokXjeAj57U2SYFfbfVrjZFfnmJnyHXWuhkmE5G7HVb1DRSLsL3caYut2DS7Q3iTXZ7FJ1He2JE7S9YT",
  "key29": "5epc46hv4VpcCAZeRySarjwUD8LoD3HbbdbBfPvQhQ5ByGzVx8gfxQY2BNmyw8aESZQtNtXHX211pQaf94UC1EQ5"
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
