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
    "4HonDWnJ1K222vvYQeXmWFqr7EStGXMAkNn49vqfWkzocA65Fj9XYW89GTNYJKk1UzhEbUYgCYxb8XHjuUNcUcCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQ62Pbsp82YJji87FHypkRsu5NwuPjTDduYur3pUZtXYjag9esuFhpy1S1Pgi6qGBMxpiXFCxKdJmd4D2xDHQ9F",
  "key1": "3xhpPPdMA3fdgjuqKMG2yyb1My2hnDY8qcpRDfEXCXpDy1ubcdTKzn2Df3v4JeSPiYUrBdWsw2VoAEkSDjabkVGC",
  "key2": "zPsc7jSvETBwthPJdhzad2LW3ksgtFKZsvETN4kbF7ZtPnaBreGXTupiMeRtpdeCC722gx1CibNHZ1Z5MHPG7ij",
  "key3": "3RVVSixUvcuViBYW4331rVpGywRMQVg9gv5oBeYCoEp99W9rnaaN1AyzobfjWeQgKs7zVUwsest5v6nExo3mfsVn",
  "key4": "59DLqZg6DMboRPjK4iTjbfd9LTHN11w7WtAMoCfzZbLzbUt6JBLn2fkD5xf7Q8s8sjbtpN1AiAJjT63AmFmQ5sXk",
  "key5": "2zh4n9eysxkfCcfaWtPPcukvgigxkMzKxPbSKPVixwSyuZHyrop8dmSqKgwrhegn9quq2C1MsLA3zvsxhAJyPVfE",
  "key6": "66naLFB4tzxeF6Q3NT2Wd3YsPyCa6XUWFCBsbmSJS8Z2aYiMp7AT39bcdSVNeXimQdAGrw3j5HYk7t7LxXfGGL2y",
  "key7": "b2bw4JTWakBx2Q98dqHkiyWHDXp97hXtr8JCokMHLqjM1HnqtR3GfU61aMHqkuhmEim9a8hF6cZXeSuBVQzXUgZ",
  "key8": "3NnucRKcZcL8pfJYzGkHSapxJrmLo4Hfb1n1g38NRjdpkdbGWnPbXYgxDedGEk7YCmhMUTaW89nW1Ub8ydVnvGE5",
  "key9": "5ooZfzHjAiFeDEKT6m1SE6QMpDVFJqb4D37cbVMzheXVqqnb2eZpuxKwUMPRYBHQ3e84ZDCKZ16K8xF4TcdrkSir",
  "key10": "2cXsapFvkHsuZ5XTVRdFFzDcmYv41cTgUQfAfoctFGANxbXytY6Hcw6ismHRu2wkLTVoa5K2yAhj719EaWmC9HmQ",
  "key11": "s1okqpgF7vodU9Xn2yvDkDWpzDwF4Guv76ZSh2t224btj8TKTj7AVHXPXhaDkksK9htGPLp4NVCAanF83hj5iBY",
  "key12": "2R1XMm22XNkzG8ox5iRhpckJag4Un1o1X3r2JvepLjSzQsQxcvnWizW2yoPi5xJzwfkWLNZG9wDKYsCRgEubvEPN",
  "key13": "2LbAd1QK9ZNubPVWCnTn8BUSKZZNNimBbymE9dKDkwejHvZQE7h33LaqJypgfnivSEF7mmFnoJs3Jt2XVWfg78Hi",
  "key14": "JcVmb9w8zP7K4A8V8r7jU2zMrUsLnNyP86mJgZZAjSmqepN4DNSvm5CyW4rgdTQ2xrZCjrCgJwsRh3mc8qxGN72",
  "key15": "4Wb714qUwT4pdVxAUKqdpnWsqVLnqdSLZHe1aiHBtpkZbd1pRgyH61aus8vYrA9gK1EATS7LEx6qKc7ujmm4Y3Km",
  "key16": "hmVfMcpg6AricLb83uxUfZ2WevumNmEP4JdmAop4zMBtC6LhPdE4SejZrfw5h7EN1PsaSEQPAp2wvJ4MpKnVY9j",
  "key17": "3EYUoaz8VrMDpHcZjzdvjWQS1kkWw4td2WVSnCpQtSmn4fqrt1zadULBYUhbwbs7hUihKyDbi9RiVzzTqpCyjR54",
  "key18": "3DwEPKBHBCQESmAcEeSW6Xw5Yc6fh5sySzNvHRZgVmSJZJLkffaUZGM2XeqLSAh8Dm4yDJXNMHXzJMBLmtUXNchw",
  "key19": "AgEvrnTTLQb4h7H68fiWYk5JAhMte7keNwR3G53rjtj3KyUjcco7h2vsGaDrcWkF1mDkQ3ucMSic2aCAgU61tUS",
  "key20": "dz1Qvq73ays7cMHvAkt6Ttm8DCRVzD6fAoZha4b1Fo8u5rCSTBWRm9sU6dtEZXNt4Hv5vBC7xDug6e7xLNzyWy4",
  "key21": "4E4o6TnC2YgoDFt8f2mXuuaJdBfawyHxPr7rxKgocJmBkispom734cVjQ3c4BQnYZWgw4YaeG27BNRec4bhEVJev",
  "key22": "1uqrqHZYu9aykPKB3XUQew6HY4mEV8KszCXgrf3cuXPrpEvoZ1DemBiHrCoX6J3zTYTYrTrsAC7KTAxPVrum11K",
  "key23": "5LhEdRPsxXWnFxL2tpjm2wGaCDbrLqHWMMyEeSBAfDEDxkp4jcs24e6HzZP9XpPcG4dYcyMVSt6KrkSRCwEdbvp2",
  "key24": "5KwoJf5rvWNhFSVnqFE8N6WY2tkECKgwWvyNFska3WiLUECYi87482ZjuwmogTFZW82Ztp75GBEsuBKYFuxmWq3N",
  "key25": "5fjBmtwL938nZL9XMnkk5NZWkN45VwHNZbUoNaR3yD11xWBgpYMHFPaaCQDdpbcqseisseq9WYajVQWuMkQfJhzh"
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
