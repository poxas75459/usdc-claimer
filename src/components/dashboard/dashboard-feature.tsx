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
    "cDHSqy1HHyS3RbePtxQCNK5Mq6SnKcS4GJ9MYkkxHcRFpGkSbirfDvYWD547Y6UJzk5qWNqx5x9nEsdcm5xRE5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GYg1pX6QoLCrJGPcoZyxt5dgJU18UrvCCbnZVQmFGabf7aCh7pebLxjT4cm6gg4STFz6gsPaCm8xVp9Q2NZ1eyj",
  "key1": "5RsCTcG3QQcKjZN6ZnjH6uQrAESGB1yNP7yjgbPr3vfcLckX5xAkzQScaymt5uruANDp49eACtZQW319YKmXAM7N",
  "key2": "9rg4v9wCPAMHgr3o3ZRvD2EqejjNru5981iGbBvNxkcNo8GturVB7ygxW9uJRS8hwPrJzqDVJ9HY4i36KViGB36",
  "key3": "2wiFMzAAUZ3rVf46236JJ3xv88tRt56EU9A6dHT1KHGuS7fZVP2f872yFc8Xdx3wfXDzjeBSvmRr8cqvuH1NbUra",
  "key4": "23AZ76ZAh28rsuouCixK2364Y5PVfTrQpj8VFa3yQKzCDj7pZDtESSmGrXbgM45yDPyU7CdrDyazVTypxeUaXuyd",
  "key5": "2UZJzT7eVJH3nsYnVD9BBcqQLsxYkkURHYpCu1ifnvnX5KUrvbB947LZoC7WHz4bZL5dT77W8ggLiFr7AZdr7cge",
  "key6": "5ZwTuu98eHGhWdVhPTvqExA2BK1j8ufrw4bghS5CkRxKd1ZjEf2qhVYcMui3SHTPNx6fGQpvEMkvyviZbb9HXnNT",
  "key7": "JvED6zNCUN1RDCz5W1PMhvTx74F2xHerVAWbD43jZ5wJ1yJ2AcowMGkeiPiJfi2JMpimYZ9pVUKAxtDenafMDtw",
  "key8": "2GHTg3HQArUNEBxyDRKBLPywryBPpSX4AsEVWiyXRN3XZ68WMxjFYrFNE98Q5j2eaEw9grpRizPQqCLQ4CsodBuS",
  "key9": "3CxKgvEFT62X3HY3F1QYSk195Bpmnb7fPV2JJwGg1KWuTviMoBASLqGm9vLjxW5Xa5LbeKfEJdhuCGHCVxs6Qkdn",
  "key10": "DF8FXR3oGLExrwxAfkYq4Y4Dqy2p1HySqEcV4jfTUD7kk47KPxNk1bhu7CuLsdDJSE31mq8GBM42ePzReW8BVK2",
  "key11": "uwkESt1eYnnQiscLjbUhsXvRhbgggZafM59udbrUxJ1f2G7fXYEG9oaAfGjouBLoM1NQSneKbheE6qamLJs2gCN",
  "key12": "24tqvKWAndVQGGyf63JESsWHq56FXrWifVFefXx3CrLsNwRx5ETw7KX241t98NkqSaM7dfTCoaJj3pb2xFiuQ7fD",
  "key13": "2p61qgtTwEN17PBZqRi7Z2uBUp3wXgxbK4D6qM8YtsWVwSFkkkf2JA29K1FKhBryUWwpMyQZ8mtM6Q8HDUJ4LPFs",
  "key14": "5XsVB7AcsUBjoesfgZkTMoRdpJL1RiVYjAp6eabwxYJfsrM6h1TDrxx6A8eJoHQ37gwGngeQuViySzxFEZKrmpC",
  "key15": "3AFChVMt2Atthr36aQLimmXL8ELDryXj2Vumx7eibG3spkX3oLrYyquX5iahoWeuyEXf5okSL16cowiHX6wPXueE",
  "key16": "V3eChTQcRC8Hkbpw6p2yZ3UC6gxitX4ALo9x2P6kFXr8RSJ1BrEdUTWfYSPWFxJuGmhwNTZoCXQnpVyUCMAvn1p",
  "key17": "RzG45WSm4g6Ws8fmc1UJx7nMyPzS6SGpD9kfBUWmQSdAf3KcbK4ANNuRM5t5MZxG5Ar8aa562pcpsAbMeuRzhAY",
  "key18": "5dNho66Eqs87BxyXrhvCQc7zvWqkrajoVXG9nJ6UToWztLoaF25raFKGikUTTbWDEYfP4265fZruwWuhUgoTELbn",
  "key19": "2gAAjWs2vNUwUgvLN1HeyZLeH7WD7SjMUdwosnM6QxQ9A72KLBeLDxdXfLWLPU6TNVUSZimCRYFM4s5WfJk3eWZz",
  "key20": "4WMLdDDo36noc1gGwkDjUDQ7HpTjcr4oWtY5w5rFWEXKcbZw8J4Bo3y42aNktRr61YZdk3U7mjGHFKBCzH1AyJnG",
  "key21": "5sRRLB6QDPvdY5n3Xxqb3dZZcfsQVUe6bGY7DPFqBVV3cKwxytcL5Us1ghStNskTDJA3pKrZ94VrDxsdXgBZrxyU",
  "key22": "k4cSprEUTrKvR4J5K9pszorrD4w6XAoQz8wJFWynTFuXt457SkqJ6qw14JTXUcAHcnEKvTvXUJwinqKTYvnqPL2",
  "key23": "47iW8q3kVmEiwaMvY1NqVf4CZvD5GS75nLTqLgVo8m6XDumLZMkCRR3y2YS2gERkXgjTxHdKnkX56ER5Eafis3zd",
  "key24": "4NtwYXCC11DYjuqtm7aNowhcGpjhgKDw43Jpjttt8iGT2XpF8TiLYC7rcmt25zncXzXsuVigWaipMASGx76LiFdY",
  "key25": "wq8n6drDwTjEBiD42JHfrQwTkRq4VYPcibkg36VEtKuWZ4rSf1xZEDskfifmDuNHqqzU42sicVsym6KZpv3JX1D",
  "key26": "5BhfyVVkJMPzXqGTTMKcMsAZuA6j96htnWrd4MYGySTf6uKMFFxYfnXWzHoizxcymrXpTnTSFNJLw4japVxdb8PN"
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
