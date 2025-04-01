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
    "4vzvDCFFomdrf6N6C5Y5iSsEdTQAM2S9PPuncQ6ixL3dnRTGvngzJnUcpScREZFZwNHuiS8WYjdG8aVgte745aCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LdtVsdYyWzdbUgrUAas2tmVFPjxrMRCW2QQwq78NLNwrkf85EyVYddFCCiU2d1eojfVDsBdgcJBLb1rhSDV53qq",
  "key1": "FftQc25g5ibfCmMnZDPbvJmeSnwU2pyPkGuQYawVCqXYokz2pnkPwJGDFAK7EFSKhicPx9aVaBSLtJm1EbF7o4u",
  "key2": "zsLHCxdfLXisWhrXVBXRwTfmeaQeh5MugcJ7oDe1QdHb6aRoWkVAqCHMoASEyRkxS5B14XgvtoYVbbNgdhQaqUv",
  "key3": "3cfxUATiGteN6eBpoHPACmUk1nmN49BekB1C3cNzpcZq5HixD3MYM98837nYmm7EMvNzSVQ1uWKrJ6ZsUZMfWEN8",
  "key4": "46shoRqb5oCzrRxGpfXeBdm1sZ381W9NmZu8VGsZ9UxCdZvG3rLLhBAjSYgWDjVZiA3B34itnBgph75qa1DfUtga",
  "key5": "4h1KfLnYrUkVHvy7jRUyLTAGGHL1Q6PRi8d2SUhboQJSAcdkAKm8bWUrjqdgeL8fT3arXD72xanTCvJEWi219oee",
  "key6": "3tqw9kTS2Qf88zaCC455JZuJKmi7zKcdb5hxthS66i7YGEXGCHopwPS423S1w5qRmTQjCdshEYRLkUwV6wXZYiLL",
  "key7": "2udWVE7xWCWiyVftULtNanxE3DdSnjqefvwUFZk3Jn4818HxBEsgN9mPzB14ztWYuUie8QfYN1dpVW15EN9z4Bo8",
  "key8": "4A6neGiZCv9cWxE79WJCF2kr8msAYHZaccB1QPenZSMMcXWm6tWjxPr823eVYkDwW4GEYAkGwHZLbh2mGeeE9H4Y",
  "key9": "2xLDzbzNciHZAQzR2WCUNCXxtBcTsvmQPZusTJwHcRjmxFuJ6z6fQY4JaJWzYkA9BETCYwnsVS1kC9MAjE6aQEaK",
  "key10": "3MGJQY9qSvGj7XF5kjNYriEFYELTETrqxaTufTM7GqhXyPKfXQaf4yvFQBB33vsqx4prqPVS6GSFTbXvz7nYvVTq",
  "key11": "49179XufJ3DaeKFmjGQcVDxmMNo3sLucohSqwJcFwUYmq2G2oQk3iQmL3XYuqgN9z5xL7pLvGZYDQG9Nw1egvPMa",
  "key12": "Z7B29YmYR7Sd6Xx7hBP4k7soqEqvy1t1zPZUDwFtSeoHpiSU8y1nNNnC6hx7GqP261Y1tet28sbZfAA1kHYcG3c",
  "key13": "5dBZZQDZGQqxJR2uB3R4jFsDQrC3cE1SaNvPgif1aX8NeWTnC5gcmjPfKK5ATEh1MNcsPU3FXS7iEfu6GuNgE4yo",
  "key14": "4Vx8LRmeVtGgGxfDrUzz4pZq4VYxDMZnA5NVgQn1ajUmGR9NXeNvDYzsQSAsjsZcnr9jNv3TrWP81XKACavPRqLm",
  "key15": "41MED9xigaNtmkAAndregQW9wCo3AAF6U35try2k6ENq3bPqh8mdJUddL2x24VxQGyD6vDKUc9uonZfoCfjqNTg",
  "key16": "2Efhv45Da2U3LXBXRb1bp9b98FsF55TZ9W56Vi76t2WtkgQMycRQQDfutj1CxxcTwzuBAV3dQDRaH8r5uqsUSnkr",
  "key17": "2qwG8nGq2Bf1moh8iLCJx7dUPN6iES3QLs36y5gVqRYrjHebrnsmEKw7N11YgCwa8RxmnAA37qTtvwY8NFGx3YJz",
  "key18": "d7AMiFxAFUmJAhg6jd28mAxdDZi98RMAxiNrnbzATfYAvr7A1QQ9du957ZW5YdjppXpm5BHYFt2FSiTXmEcDXxp",
  "key19": "iDFZMkXa7ueLHuPJeN4YuaXyjqPZN8irhQT1K6NZC2axtwDZu9y8HwXMcB1ghsKFstAUWL11RyKy1SezuNMZbML",
  "key20": "313Lbfgmyx29eHAuGGhZL8gYyMuCoo2NL146UDFZKh7Xk94GFygdviGnxtWdD6adADsJct4fAuRimDBTfCZTzpja",
  "key21": "4mUdwskSzHxNUvKbaSS4nFFch8Xb94Q2R4zxZ2b1kAW2nP1VQ6ctTEC4rJAZDZ8TunnTK4jQLcLZhxcG5h6tGxdY",
  "key22": "5eH5F26mJpsmunbHEU4hkHCHwZbTXw358wCGgYnAgZkUcHqYtLrpMkMPmqkeGXry6kHFjmjLkyBxQrdt9ZHJvjF5",
  "key23": "3JfRBfQojLi2wCDADzNcYFah1Ho1pVtsk8AvXpidc7mAxwZa5rdr4oQgr4ppnKr2uM4gpAhwne1yNTuVugPvfGKj",
  "key24": "5rPPZTJ3KAJwhSbPy574Cc8UmcpZFQNgV6GmxxC7NjGznLBTw5sQP4dtmLL39L1fwNjVgKQ66wPUmiMWjsJgxskK"
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
