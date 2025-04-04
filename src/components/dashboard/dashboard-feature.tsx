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
    "2LJKvmmZ8941CCEksxjtjwc3R5cnjRUMZiShJCANTNqhHfKYmmZKafJNMab8kGKJYp5HZ2qZmfkSVkfz9MsYwng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C28VB77ksfc7pi8qzePkT8odygyfwrRS61kN6ZHeDLPQg8MejWh4S6PsGQv183H236ZZb9ggUhxKGivvAmrJp4X",
  "key1": "2AyQFBQ9ChZxw6VWwWjcysEKehhP51A6fDFG6ptSd8Wy43mzsgyCnYPLD1ebrGERZUXqXAKpDhBJTFC7MaqdqTBP",
  "key2": "Dx7NgaTySM9hLwsbm837o4zW4XEuuPuyDxhP5gpzWxJRnWwzPdpgBSYsaL5rW7mqMAZBdLcfB2T1ya8ZHkdG6pk",
  "key3": "2fjFfqjgQv5BcWXoM4LRAzvLSiX1SbTFcET5mXZ72yrWqdQgFEr8CnDboWdkGH4MfyfwM2eUhWs8tC3rLfQHLgji",
  "key4": "H6mSpKvQiNmWCUoroqJCZJkFazWLhG1sVUTrDTNwNBrL4QSCoD8qfR7jkoXMc6MxeCbu23CAtXBDs5G4PTxdnqL",
  "key5": "2tQrstLsXK9gej53ta4mfAHwh1NAHYNpdAu5FJkB4ih3gGsvdYu3VsyBN1JLcKFgLf2tQ5Hhyd8WTyKou4fcNo1L",
  "key6": "dobMnE1wqZHH2mzctYdVrpTUni8yDPAx27AL9nF1eUgP6XrTk2uoAiQNFEEj8ZZG6URBvg35SkCt1eq3nSwBz9p",
  "key7": "5qyWXXxPHacQfVPEJsjwMbFgbrQRTSr6wZWsGrx4jQaQDCAGeuom2XXT2KrnevvvqzDnGHGuTEWcCBhWVPZ6SREw",
  "key8": "66Lk68LCuxk4YNGptArE6HGFRUpzhwW8jHUPWES811y9GVMunSxMcHvVJnaN9YbWPYrktMWiHEBRHY5qRcRYRTMC",
  "key9": "C6RKdoEXeM6sEE2DNyqt9XWgwAXYLjcq2C7u6cPbmXoWdPiv9YEQtmr2Ky5z7YEYzupMdjwyfz9y41hQiKcq8PG",
  "key10": "4wXLR6NHqQZsWXcSefNxa4zpq5UERuhVAJBV6JYN3QDMsEktBcF2HMrFnLeApz6qAtmttkWA7ZFvWSbZ9xwMCjjZ",
  "key11": "3RqAp7T55gXrNWTBQGjCseqJFWTy13xYYsSAVpyTWxJaBG2toLFRvN2Bur58GCPJLtRAzG9fLtiAZdGHkbtNKCj3",
  "key12": "5wizJY212pQYF1mei8jwNMXdk5ghzSjEJ7k1EAptsDoVWzq8uWhUUSa9cJ8w7zntKjJUrxcAPdQLLSHqC1q9CPrx",
  "key13": "2kGPk49Wegzhj1acWtPacok1J3Mk28pMkph9x97v2TTV11v1k9pxSyqH9NJPewWbCMChq3UCihV5eHvYKhV34vfj",
  "key14": "3948zHPHvDzjgdEe7GgETphZyP1PuNAE5pcwy8UxwcE1zqUL6ufcE5EgCmfegsuRotFZHBBa7BVaqRatv14r9RxG",
  "key15": "4UiLYfcVUXMJVhg9jZQA58tpz9E1EqZVEL1iuYPnfMtFYfjPnYwHT1KVbhFPAwxJRUtgrxqiMTU4zzGVT3o93oGa",
  "key16": "2x3vo8cDQSo474at6MGJiLeofSZURoY4b6hYWxHnnzqdi2MJHkBWMAkHqvv7jQyQ4XMxutxJyTVSDZvihYJGsNCC",
  "key17": "2DJor21PPkng4RBgMSUs6HnTjvZuyAPf7fk6E1xxA5Gc82Bm6EXd775JHy57DEN2HZpLenF5ZBVL8XRmCL9K48be",
  "key18": "4DWHhofYSzvdr5WTZN2ujzZkUyJ7Q152qWXDQGAe9PcbKonEbr6NYmohAskzJ652yy7QnidyMyuquKpNxjm9RsV1",
  "key19": "3TZMqgbUWWs1b2L8P5Mv7SfdC8dVxqZgDrdJc6yyBnzpmHQXWi1RuGtF5vbnVXCbb3c1UhJqrvM7FdFZUZezspJi",
  "key20": "2A3jEV2x4aMmxQ6HeVhjrhAoqiBtYaNobhmYYfB7qLVeAswMF89GFxFj4TvSAf3acVhyp4pq2M1GPq91iPPLjGUa",
  "key21": "4fRiNyNvpRLwBP2uHbjif4xE4C88cAKwbEm72yQLHF55oaiDApZ331Rb1yS8GqExzkYEFy51FeewHESh9z557S8s",
  "key22": "3r9UeZcEwmw9G23WkX8vuAsSR5uHQZMtc55UKfsDwPr19HyRHP1Qpgia7tMAhWfNayBU7rmXmuLNvjYW4ujxk8Su",
  "key23": "5gjLP61wo3yasUDRBphSeCH54532RkjHzt3sJTJ3ctnJWGpvh1t8yKxRDmG6qw2SB6cB7MYe17zrnDZ5KMxiVktN",
  "key24": "51f6QSDEbckf2BW1UfrNzeqGTYLBg5vmJNcbbXY3coP6TwQCsKa2KYt1bB8cZxZS7v3AGzYia7Rsh9bG2CKKU9EW",
  "key25": "5R1mT5czobxQ2oiKjGiFuTEaq8EZXuBNpn2bDapGgX5FqAxdqYUcvZrF95Y6FwPhbCyi99zxXcJbRX7DJ7zL3TUQ",
  "key26": "5VGWKQP8WuKFdrb5XkBoc3ptTw1zqvewtoaby7AV2tbPXXJ73Y1nKVyzaN7zW9scRHRSYY9zyax3Z3fADDL25fBD",
  "key27": "4GyJTrRBWtNLQ5p3A2sYuF4UNXYyi6HzhmvHVWXbHuzXmjG8h5N9G7ofpjLe5wxDEUkuwfyjHG9wNMeznAgjjJni"
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
