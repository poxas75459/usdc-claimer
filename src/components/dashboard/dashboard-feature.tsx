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
    "2rnrwihZtocTG96pbk3AimQMrv4jGUrpTCMTyaeHN3N4icNd47qB1STGvg3WppgHHGJY6axAJaiNU9DhqyLMAYdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y5FY2txvGX7iCj6TupitjF6cv8s6CLTw2aQRNQP6NxNdHBQKa6tJZe1BmuM1J3BGMfSa5m7y9B89RNwk72ja3Gw",
  "key1": "4RoAfjojXwYaxdEz8Yr79Qko9m3VFmET8KigbZcpmcT4Qx4vfFwTa8wKX1SbWGkMM1qLE3RKv6ByLdE63dDKfhux",
  "key2": "xyc4sMjQHVtfaH1JWrWEJzk3XqvfkWMBJ3YGFtekd99FH7zXUJ1jJqy1F7W5Epi6GJLCKjVvRMresHzb3aiZ2Xf",
  "key3": "odbGT8gimeKm5aB4uu3hpn51zmjHVKX1mea2ghwNXP3YHpNMLkFJZesp3tmPio2d4wBmkQ7rVniw6qcRasyhJNo",
  "key4": "etKFWaWi6TXMzDxhpYhNrTcSuk68JDm4dZsHmRKTs3vS9rsVeUTnjfuC3zhT3qNFnyDBApXwvn3D3w2Xmw92cwc",
  "key5": "3mfw7cQqhLJiL6wM38FkxPVkJsKBAALYkfXfrHrRyBq4a62TSjp1DFjRmHWaKHcQYRd9SZa784LZ2CkYDcj5mmmv",
  "key6": "3ScY8pmEUbJR6jnYBo8c7d84ESeCbbanE4eaDYenxHJLhDMcYBk618xtTuD53UUaZR9HyMJBnDJUB7wNmDnguqJv",
  "key7": "4SybQPBXaU8L8ThjDzVYENYnfboyKWDhFiDxo7U5Yi7dx7M5xqNUokBXm6EHb9NjgAzSE7HddCKXgT7PHoXEQpwD",
  "key8": "2StFKAzEGtfDmqpssQcPX1G9iCJvunuuXZbQNTtqUQs5f32KogRJu21JTLezfwVrX4wAAUF85DrJZjRjGAo1D9x7",
  "key9": "5WRmKrVhXhfWsQjygbiHeiEsaopUR79Lwtb67Vetf9WBsQJetb4eCu3Ca18b4Pck4kTmay2ZQEYfS6pAS75NJsHa",
  "key10": "3Ay37a9tahBcsqieGmKjX63YRL3WQ65SsUz67PRjNvJ375R3uvdeYVbUKDGtbhxNjdKZQi987JE3tW98BM4f7RUG",
  "key11": "SPPYM7AN6SV2i5iwoLd56pgmVfpyErwxaNt2F18f3eHRXsh9cqcpW3MSiKzRpnwT9xEaqu2XYePeDN6Q7a5harM",
  "key12": "5FrS8Q1ieiqT76tU7CKNSA4zsZDSJk9Kik79NAPW6VybZUodJeFUMZQBY4WkZLvQb5jK1CnkeBGRyyV74rYj5Y1r",
  "key13": "4p5x6U2bGnMC4zMRaEdh814YW1FEGm2if2qXArAsFWdcvkhEV52QHAfAiwQMqJrAz6paGRaGdoHoXepvtH1gaKUj",
  "key14": "ExnFp8vDuTaC9LikTcKqo8JRXfR6kUVPUmrrAKgWc5Akj799DcY8BzCKwMqmsyFbrDxKtmU8sck951ivyHDYCYD",
  "key15": "54HDzaJNBnbhjLs4UYKQEmBFcuLmUMvcMMLJxScpDhZ1gVnGuhJFmbqQo7UBw9n3XAfHXX4r8i3DKtZvbdX3DZV",
  "key16": "5Akmq3UwfvEiL9e2YrNq79AYaaKKZuYRBCejHeTAqAidhhapZMjYxm7khYbcZFJNEHx5MFYFyKwVsvq2tPp1MPA2",
  "key17": "2RJXf9zAkPCMbx5KxHALwC65MGx5B3spe6AomEcEfT6e7sXGkdhwhtovBzHYoPzLTMNT8HpDMpuNnm2XssoMTy2m",
  "key18": "4mbRHZcHMTbvXYFE3Aoc9egjMLeLAqfiDnVdHwPBFqxogSzLmYetjm3oc53sEDdcGtahZ9K3PtRewu1gZe5adi7N",
  "key19": "5J8GECR1VNvEmq18aTqrPWf5K8atwRN6ymzCKMfQq1c9ogcyPTryHp9jYkuUnmv8erq43h1HvkMqshnMQSLK5f78",
  "key20": "4kNwDwvrk8qnanDcYnggJtDtfSLdyzHgM3dNmpXJQUzJg56QAzYGUbV81KR4xEUSBQo3uFmbRQoh3cn9TEJTHBW8",
  "key21": "2Rk6MMrvDDKfY7vKyqFaTorxvxFaUz8wU9HHYs8hNWx2D9XueX7wiV6ywjce28dXk9xt4cWsvdfcHA3tT8xNKJKo",
  "key22": "3rGQaXrHU2xHJosYcrqLbz7SnUUVCKS8YyN8kwhzJxXzreGthMngzQzgCdtsv9kJ4Tc8fZVbM6s6RW93sGS3YvkG",
  "key23": "2AQtL6hM4vPcE9Xa9L3spRyZhEbSrxbEhbpKs5Q7S6FY1cwcggPcckQVTtRfunoL1Twkc4Wju6K9uHpgL43p5423",
  "key24": "4yF6VnNjJjhJFdDhPANJSTNgPeKFP6ez9dztWU2VvJUANR8U4LcVZAcbFzspxA1q3SxxKXrGP2g1mbcbnLXyUgZw",
  "key25": "5EhmYsNbjbXkfiqHPzGajRnLm7k6AtqEd1wv68Uv52ShSyS1P5GhmX3mDEV1BeE2LGrJyBj9HY7vDPFHy4TMh313"
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
