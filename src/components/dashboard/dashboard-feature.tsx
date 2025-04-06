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
    "2MkSytSm5hNLtSJTMKvtJBqZUBMfDQr4o4EvFwSiyGNJ1CJRHDkqP8H3rD4rTwkJfgA6eNAa5NiyGYzTtmE611fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XH6hSZsDJyM1sGceqHv2pdr5hqzmjuXg84d88H4iCjEvifjaq2WV9peZdwQGEZMJ3WjyBRqoSCaMWE4wDkcvkMi",
  "key1": "52J4tUkeyvhKFTqqsBubjTLQ2qGao2dc3qW2ohTSBydmG3tFa6Nr1HV9fMrAss1mLrs7FnUM8FSNT7Lw9kx2NNaF",
  "key2": "A47uBVUBhJj8GpacvaAwFxbXEcnpnouGMGHZu7Bdqw27iAXi7oGsJfyoZJpuFfGrbBxk8MtwMwq5P4hrBYu8Woj",
  "key3": "23pNw2nS5Ha66REx1RG7DY7KdkKqMihZH4P3KAUGNicGTZrXn2KxxYugQHGgLbsaXVC3ZczP2gc6uWxVhSWXo7aN",
  "key4": "4eJ2pTvpsFEPjTpGXBrVTDx6BnXiJPhHBx2CqowtQHu1Swk8cdWsjfWfLZPFhv17d622R2YmiyyvASKZ3JCazLuo",
  "key5": "3xEhJa9UyKLi9tPe4zmspB83PZd4Jqq1ifhiCfQpEPpUhXfRMAjyK9yzERiPM2PPMgxdzknmvyjyJYz6ZCap7YQc",
  "key6": "M2JPAKMFkysKYWeccVSUFV6ao6WTWWt6RpXtg4YMQHSEC3s9GJJdixkyWKH244LbB278Q6nxfiRBBhJ5iZTsvSm",
  "key7": "3CTriva767yn1n2PAVEgYbGmJnhCxpgAZhMuUm54D2tjEPnDrzWf8KkWZN8t3Np81Dg4qYB9JFv348tDQnRsawDj",
  "key8": "4U2DBCkY5Tb5DafYVNhR1AWoBxNfQjUERe3nX4cTqV9ihtJ1Hz4ZhZ66ZNCBrLLGdmcc3q4KtjCewfjc72hAi55i",
  "key9": "5Akk4uWtLktiX5wjbtQACDA3dP8gtkodwHCFxtp27iPWtTbzdkWXKrKdfkoxmqztHEogSELCkVvaVjUZQUuTCRFf",
  "key10": "MLJEXsvdqVGad3xdWP1fdjfi6jSa9HADX4XRF84NVm4rXPRQ6BxLkbErC5dhPVvDAiYGRtCSdszSSnpPZg7jehD",
  "key11": "63dBdkF8EP8kqQXcwpY2FpLC7BHwsfxieQ5xA3y3EvctsZvwHVNrjXnQXHehB4H1ywJUNhwBZXpM2fwU81gPyoPH",
  "key12": "5wRK8AkESm47T2sfRBooRmzAdaGZUBput5dkJkCekYWDVMYQzQxrQsMEyrwNHbAHheXM5z8jvx2Kid9s9wUKZpVh",
  "key13": "3TFxKhPA4Q2xymbVNwKNcc6tgUw4gmAcNw9Kpa8ywWuzqAwvLRQifUrSEJG4YyESj9RbZzt4UBAV27cRr4DYvmAJ",
  "key14": "5Hj7xdwoHtivoXVVYgKu1eN4wUnLsiDooEkwWXFdotKNk32TVR5YYBB19W23aKHTqSBXYbzkFErnb6kgYy8UtnD1",
  "key15": "2cSX28BETbZbktsfkF9DEL6K9mF1CCHw3NBADLXwAzvbBsL1bbPnXxmGR6KpkhersXFCps2ENCTAUYEv5pa5LHQL",
  "key16": "4QW2xiPPRzyfrN78qrTsMWV9uGydbz1GMr7xqmbhHtLBVRccdpUA1yTLDbXZ6jLmnB5KzZ5T5GZ78BhifmBjeGzx",
  "key17": "4HBbEYuCnveesbBnEwqHfY7XqEWoey5kHr8rbmnwB9m34u9Sp3xH9NtWW5ZWJCz4NJwCbXyUScmBLtz6R2NxKrg2",
  "key18": "3SNE4doFHZ2rpjsWuqUteNwJU8Xo9Mq8zD2jUpS9o4wvHZM2YF2F7imyde3av1T1brCYmVNRAcJimqUFvPC2eN44",
  "key19": "4VZdeywRRwCmcWN41f4HN7pbR1fp84b6gDcBwB4JCw9z3F1xqZhFntvx4d8FXTqh2eKJTFbYEbWM15WpfGxKgdzR",
  "key20": "5u6UWcZXP4HsQfV15FBrqgfi9vkUTERGndDBB3QGvitF8sVNSX3LxRjjHRxFz6x64StJ1HBRG662rt4tvWgZZEXW",
  "key21": "5rGJVZdE6JMp2eA3SAMqANF8ZCJouxS83GfTScjayXfZ4GaHkP4J8prfshzP89UxaGkC6oQBJQaHjxSTNzZEha7b",
  "key22": "znD2RFCo4GrJJLNtk1dALK1EnLHxvmTw5UYBDXxpPXPN2nb9igeh5xeiWNvAi7fSnxcnttUPLJpYLFiZxWnHcRJ",
  "key23": "4E9Xu7AxTUDmdhuZUn2VD5oCNCJRLY1WhaZz36dfq4VXEDTG3zH6oCTNnfUKTCWfxMyPptZcf1VJPuC7g8U1YAiB",
  "key24": "5Zr4DGCN2p2cJNLPBRsjs8md52aZRTBqQDp14SJzfN8S7HKv5FDmJjEjEXBkmrN5CJBzXUdDCuwaxfDddDzvM8vZ",
  "key25": "3H2GJ5FFBWYVJ11SfeXX6UfUwrvamGcxRF7tTYpretRQoUafDT19kDVd5xzKPbD1N6wTNUoqjaA1SyNg4Casy9Mz",
  "key26": "4guVs7wBoWcAugNLPFS7ujERPtmvv3vMwovyqZih18P5fCpxRa5aZiTjZhnup8ncZtDXS1BMfbWQQhJkCsGEvnhL"
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
