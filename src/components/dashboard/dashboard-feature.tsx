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
    "55rJAvwSV9xP2yqzHsLE55tWZJwKjDKqnraUCiKYUNkqkdf2k8sJ1SerChsfFMRuP2KCDGFAfAsbtD3Dqc4EsZb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pd59LctdynEZhmP9HAwBei2eT2pCRiMZNrjndyyHTfwJeieXKKK41xiL6PBuYXnQkirefqH7NwPKLYjqNzZu2EY",
  "key1": "4MRYtwVob28xJQsGZwTWCWgZHeJFDKv9ZmYcrJXsKFSb5Q7GPTa4WEh3agT4gx7otkSfFWyhTWD8JnvkEm5bMeR2",
  "key2": "4Qgfk82YbiVCN2xJp5se1MZQ62Jv1f4Jiq2BPYR5P1CciAReqnVG9ovT3Ebrh9BAnqnkPxXJJPyuABHozVLzsydV",
  "key3": "4evgjMh9eTZH5cvLKLwkCdBtG2BYJYMWiUHeM2UNqyob34YYTp8KqqXufminJeT1G8UCqEsPbUsDv68DNvXesoPG",
  "key4": "2h63YYgzWFC5NBNCzoAfB4wroDpi7auKWD5zCPPfE2ZyyKGTYChSCSjTijf8h1hzfqMb9CEtErhagAe5E3gnng5R",
  "key5": "3BkX5uhFNa6XF3Q5EZf15gGoKKg4LCSzZuwbfYpCzDdH4wBhxRwZWSk4exGm5RQTv5bSDgD15t9t2fUbfijBux16",
  "key6": "3YUUDQmUG9xqixizWou2y6QAyES3JSNezi9BDPcpdHfs7zjWXg1Ge3enWnjqvfdHHjyFQpThzGFkFDNPq7egADmh",
  "key7": "2nBmmo6yZXT3HqyHiF6suqRL64ESirL9g3d7173BpRDPrJhEzhH5MmQWxu3h1xciKRFXjH56KBU2ZVyENMfVndwj",
  "key8": "57nHLCB7gVMB1urrQ3DZPwtYL9Bvr95j2cqxTX4vPNuVc7EyqGmG3VLhJeAWYQ2zAQF1JMdZFoSv7nn43xUcpanq",
  "key9": "23aPJWYdwW5CiQj7XobPop5kUACqgBy3H3ht7fSvUrkSCkGPwPS578x7rxrjfghXcFTFqxLSr4EBq3MfMujnn3RM",
  "key10": "4juJeQrsxLADAgJEoHBitoc3fFnXquk1b1REh3ypm7gzMFz33SHfeSQMGgu1Dn95nJxDSciq48QT5Q7ZHJLVF6TQ",
  "key11": "4sKoDaN18TrXCevEwgU9BYLZjhGADD3s2bizCgnE18nWVkdUNiya47xTjJEqHtuRWKZihLCqaFkSYKSueJYPkYvA",
  "key12": "39w4ktQ1gPtwx116ya3yArjXo4Nb1Ep9SWvt6kDwemgk9c4YQ7ha66uoTiUbuoFSjVEgJY2BAJb39T1Mp7w3FMn8",
  "key13": "5onBAakUDvwmNjy1FzMfoJXns4gkf1whMsWANdJwbUXdz5hnsj9GYaaesmQ5LUrNf3aeNuZuzkL8E8YLcEVPEz74",
  "key14": "2dCXxEyDvpgR3MnPpvHKNX6f9KodSNF8LdRU1VyZ1Nto5Q6StGB4a1G33uyJChrH2SyUEM14yNWiE92nJatfCSTh",
  "key15": "3dWn9R1pzgs2S3St5Ve8FrZJ5jbVx2tHPbvFQVrkb4AiydLzKuw9rhd9E6ChSe47VTu7RotSQMPzTifvku1KoBib",
  "key16": "3vGKwZbZuwmEmV6SxfWJEUpDSRZzvZV8xcYNeTdeaKZFuvsNy4XxTE6AdbY6XPrBYxPSLEZHZZpx2KZHHYMrENJX",
  "key17": "5p1Gpt3wWeALDcwVjjbEF7oE5dTqGs1WUTHGT7XQxq1ek9SehkRnknAixpGDBdVL7xzNZ8Xqc2jZ6nCoiVy7ERUR",
  "key18": "3jpScGnjPTdWKmVYewn2SBAW3Y5Nbsk3LsqMKpBNJtjQ8t9gKXvQuUmeWtXuPndJBUUSsD1GthsGFwED5wBz1tJC",
  "key19": "T3PqMPDDMKBJcccnd11kUDk4JGw7v5FZV7B5sZKK1MbWcHHGnUdLCuWfxGhM427vtTdWTNn6UQ5oikJUdEvagsz",
  "key20": "2ag8N9r5wTvANV5isPQchyyEjszTuApRh2baWqP1CSo3rih1QwaxM116b3L4BBUUVVKcmgcYfeuLUxteY68yoFfK",
  "key21": "62PdXQ69XXKBLy1BBtrWi24WB5HJxatLZA3GCoUoDEvU7cWUFa2EAZCRR9rQxhLaZGkDDvwiGZb3fT91qaNe8iHm",
  "key22": "inKmuoNxdEsbnYmNj8Zzztu6hURCFvRgPMmwwwh9EZ1rRJdSjfoHMo5jjqtB5Dri3AKTRfk5tsU638Ccu6Kg8kK",
  "key23": "4qDM8c4kd1SF4fKUo1sGjz6Lctuwauc99uty3cqE7skMkNyZE1XVVHbjm9U3wXjzTEXak9Tw5RsctpN4MDj2Koex",
  "key24": "3qWnRwjVzWKCAJyExMozWRUxAwuM1C1L2uqQWtxEnNqGyAYJNFbuzsLNA1gtyyiCw1khixXCysRF89BS91NV1Re",
  "key25": "4qxtWXYArRczhGu2rkhb1z1vmWaeiciZ9EHUFbz4heYJTqLrLuWyJ8iFQeAqFpZge7bjo2vB4KoQbpDSzz8ZVcPW",
  "key26": "2rUerJgLHtRZFEdQDc439mdqVgGELGgzNigZHn8pev34orCRcLoZ1Qr77chaATaTSYcgcPv8YemXoVtA5KFQWqoc",
  "key27": "Qj9aXKxg9VDuN12qqGnRL1CQDGXz7N3i5ZhKU4TfWLgeSdhagVdeCJsBvQ6m3EJng3Eez9HLUMdyh1uxKRvSdDs"
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
