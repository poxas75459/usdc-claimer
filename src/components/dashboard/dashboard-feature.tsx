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
    "5yH9Zd7HZvuPqyk67DZdbT6MMujDwySHghXf8eqXA2YgKgWgiWZL3MyQpNqWDHMQBgg1WzKYyCyFL4M4FtHfKXsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dMWJuJmSPj6j5qCnQcDqZTLb2pE7LoWEYkw8e7bT8ePc7nYsiENCn8JbLbhTXzea6jaf88uU2WXFtb2eCN9wsva",
  "key1": "2qfUygMZVpwy2UobPWCpoWSbzpaUJjtJqj111GCbQxcWT2N36XpChnoH23TfPmvpfveSmBCe9FW7dUPgeGpgQBPC",
  "key2": "52NQDyYyrk8VztmGNhYvJ4a81uKmVrpJ2pkA3oPphnjNiYD53KE4YzQZ8UuteebAP7scrXPq99cNv1YgYk9C152L",
  "key3": "5HkHY8tjDyzJCNh4vTBCAwpmP9ajqccsUrW9CgqikLh751rpZHbPFmBvuMbWErpmh1pWPp2sX2hp22n9scjZjfve",
  "key4": "2XW3cT7T4iQ85Sm3E6cvKQgGHazYNWZ6vUY1JhrNtaGh67yjHVqitdSBFQncTpZLve63VQxKhFLPTJAXVbdxpr91",
  "key5": "4NBFwk9tmkSqtaHYhKdjB974nzkUtkez1sfe9PveBaJQSdvdisuCwtHKcyyYVEUKU3TiuASLCXQzZPMGe3PAXMCC",
  "key6": "2MsvbLcGNouJ8LiNCMpJW2MPqbJdJY4Yj3hmq9xAUyv3wwHxDbVGuoNRevwxV5DtpSDUSndUs1QR37Y5HzEJ6Ko5",
  "key7": "2p18T2mPYSWCU3a61waFb6i3WSTxpAGhiJAbg9xYMxQw4VfxL7CP1jVnhXEAXK2WTpdywz1CyxujoPsoyhXD7qZ8",
  "key8": "5CArpHyghEPQtPGXpQypzEELSssGRBUfgNNkMTgSNQSV2rrEjrzSCexaikouvkDDNVwk6x1FhvJWzDf6jvK34Tkb",
  "key9": "ccRJCbs42ZFGVoZGAJ2AutUsqzjGktvzQ8Crqqk737URWe5rkVHuS8gtUtgZJM8vLNBEHwKbSxC5jX3R7SP8PEN",
  "key10": "492JZ3DKDZjTjHBQP7XHfJXqcD7scB92FkVLo751bbjDRbJs8sNBkZwFh2tYGJDSND4dXjxQLXS5M7MGAWSPBygf",
  "key11": "64N7L5je1asWTJaG66gPmExfcPkHVehzTvDAPB1HqXVfxTptseJkyCJjoi7888A63QuJAFSqf2MeYiKm9FRLDFQJ",
  "key12": "a3xJqpVKqFxjn11v7cKL9h2y6evfoCk2viNuXFK3UBH3bxdGXkVTao7M5hv57KQtgTbys5qPaNzVS8oFtf1DiPz",
  "key13": "r6XWifjua5MLgveAGhUswumR4Xc9PBwjTYmQfX8bQrKMG96Sj3T3ReZhksCuKijyqSAnzKS2sicyp5XhY9RVXXp",
  "key14": "3k1AWvr58Gedqp5LkRvGd8CVGAg9bcJQk7CTeBqD2CvWrco8cGpTTqVpMWAetwGu9VR3wJ3TwDZ7zW2D3dL5E6FG",
  "key15": "5W5f2zF3Y9TF7DeSki71j3xBJkEBWL3NwrDt1WKEZLfWNVQgHDJEVcYSgCQzeACQfDp92YoHfxCVihuPWtXfV7FZ",
  "key16": "24UzQFhbqyK3oUznaZHJN8zdiCz928zzhv6pap5oppueHVWRmD758e7V9ix59t8MgSAZuVgKE2u8KwtBqGtBpyQj",
  "key17": "3JYQG7aZ8fdP66F6iggEpBEPddeBKXHGyMA7QyewLHr4mYb2BdQ1YiLNWkE1JB5iLG6GbmXTLJg2zgvRnKoDetRJ",
  "key18": "5iVx1HTQT6ttfEwj9MvuYgzca3ChX9iG8FLDtqKqrKK3D3SYohNfd5ppjKRL3jGTTSbg7KeBppfthLt5g3Zz22aM",
  "key19": "5k29JFE2UGC7cyUhgCoyxuRBgDqcJEHjqeQE3ihbbhDG6sgDzgwnsTEvdmog3tbgB9vB6FSQ4S14F3p6jc88w1cx",
  "key20": "2nNFmEnGr6WAdpBY45v5GYTsNYGvMF8qoHipTbCTyQEgEjPuBmMvH2nR4rjb3J5DRLNiU14jf6NUiJpdcaHWBWA1",
  "key21": "2eMoco3DQtgSwDZh36ymqqHSWQdTnJm4R1h84wBP9ux2tJUQk9zd5fseqGDSGdS4oCwRRMFCcs92tPcK6eeXkrJy",
  "key22": "R66fyzqocfszxNH1By4bLP3cwyS934MrwRWFSvJECkhFA3d9SjZ88buUkuXHSoYu4x4DBonMK9jL9SHgGffSdBE",
  "key23": "5vw1wbDqAmi8aaHS82qqq5gwobSJFEWnJRXXbqAdQNGwGtiptyZ73KBbMr7VZKHUqQFdJJCSRirFSxxtCyg9wrvp",
  "key24": "3B6assV5ge1J43VFic1fVjioydkhM8Uwpckw9KX1dFrLnwSk8Y7JFUmTpUmtV2PH2QbQY7mEosKJ1BnRuZgnLESY",
  "key25": "4riWBVbbDJ53unu1n3ggRqPa6g4nYHnK6idW2zmpS4FG86G2zjw8pLWaC46A4o6h1nABjuncLcD6G4QUaiDzFT6f",
  "key26": "64JsdZkg2HrcwtvFejdrCxMLhxx9rwCZdJGG8ZvKoZRApH9JZ2FRhJx5YWehWW6dRA2upcScbu9couMpBCjFiKx6",
  "key27": "3AswUz9L2bcpC7HrDQNrkaDC6b26N4o6cMihNBiFuzU5seB4zjq7Cg1aqExQmZfjDBceyUuD9iZNnA59WFi5fyX8",
  "key28": "55HtwyA8MsNUJ6Rpkd4sQuFSb7425GNjWeTTMSJVswoUxr9ZiWjYcH1kM1yeGHSXVqWJxa4yGYU4RkhdxuJCCagK"
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
