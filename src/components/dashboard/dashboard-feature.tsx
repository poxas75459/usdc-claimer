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
    "4b9GUNAdYxpRjLuo3CbUCrGRDdWC2QsgWF2EDEnGeFerGA46onWsLBQm7fy2wGK9PNoGo41kCb7kUJXeyK2afzRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tbDRUbmDPCuZFA8sT7wx1wqoBfboe3PqqKegTKxJxLn3gBFynEMztBsGvVHDmLyZXGGS8GerD5oXrgdUsw36ucQ",
  "key1": "5PQyVwrQ2Kmfk5t8zCSxuK5UiF165jDs9syXdpty7wFndZ6h8aMka8cGYS9VWPTjP31cHhsC8UvYzxnK8RaHhGZ5",
  "key2": "VQz5QXhkNaZAYXU9755PmhNUrk1K4CekeqexJNSsQAfgWUm4mKmVn6afTRSJffk2wGtngcjyww3yTfy2P1geeLE",
  "key3": "4FPJVLVAQwUsqJZ7CAcY2ND7cnJVn3kXxN8iTghQ8HYPuMq5h51TxVo6z75erhAakXFgwqjKjS1MNrVwJ5RWGZNs",
  "key4": "4BfGqkAHBvMkrepUd1W7DE6zpkLgvjwZGegBnvrguPfh9cLWdboDGEYkpsv6beRzhQb4VB6mncbrbpR7o1xQeV6V",
  "key5": "8gxrc52CFeTjGn3vheHaSqiXUJPrEuQxc6vVEga6xHTbecxzKy3hZ1YYq2NGHAeGo7y7gNntSc3SqDtCGiBtXcu",
  "key6": "JbLt2tJDYdLSJScoTfSpFMKAAi1T2JGfhfT4iC3dXvrFYU9uAoj4Q799wJgrg7LuRY8JYpba9ECzwJY94FcsNhJ",
  "key7": "49RWrVQ9vHPGAvRy3TdfQkbGPfCMJg3kaddtivX7SD8eVuG1tpiBh7KUMSQxmYCW6FrQgeuXTudEtpWnSiD63nF3",
  "key8": "5zQ5wzUcKAm73cHBDEp2NrubMJV7c9v9ypxw3xq5yrDhFu6v8xdvd788PHw1EWVhAX7XLhKrG5NwNTDvkmK93Zkb",
  "key9": "2CqWz6g2BsPWP5snYY3EzCBycSPqHPLDEKL7QJ5dhRVFbh9pWgs7Syrky37L45wbcb2UH4RgCabD1kDAC19UxP4N",
  "key10": "22oefEJCgnJLYZWmeQMMSRP98Zu1ncz68yKVuU4RapYLfQrm8ruKC4tzDXAdDNdrSxuGFmcuA8fHByMJ4QETKJ2h",
  "key11": "4yocmUQtXroyVYHcdQp2xosHBU5HWcibsFghnnc8VAZ6JwWu6K6xc4HAW8NE3DkB7X99GyhXnDLagiJTYMKsMy9i",
  "key12": "5eq68xxo9jvV5ff6WvR2p7XbHMWc11Dh2CQQExksRHWvZex6AYgjiPwHQELSeARivSs92CBQ75x882eJAPemMbQN",
  "key13": "4z9HBMfiuzxKLU3qw6fkYXienBtcrmVxtnQwWM57RyfHsL8WU4BhzH28Raqzv6pAWgpVoYsVN3vfqLQi2rxAvMdW",
  "key14": "9kUVJnQWyGMKz9mb5UTL9YwtLSEv2FsPp3D1HxVv1Cz8bsfd9AMfDpoiwv2xn1ZRNKkY6P4EqQX9hMW1fzKEuHK",
  "key15": "jc9yAaDEwjeoETVFLzmFrKjfe3HHRyy4bMPmTkW69SPbAaSGE2pra5Hbz3hsBDsxW9U143bTuiLG81vqeVUfQz7",
  "key16": "hpitYaTsnz9tuWk1VpkvSZSDYcoMFj7kiScsSg6cT4DNXNnj5Y2ZWimAj5rTqZaNzGCwS6t59Bk3uH5ogitRyAt",
  "key17": "4SSbkGyossBHchhXVnaE5H5yHwuYahbS8p5NKS4fDsj1CQVARMihK6rYZnGE3qAbViXGgMGMCezQCW2PpBf3Ltdo",
  "key18": "5cfb172tyJk1AT9WFuhgf4teejC23osx65n6fmg3hPedkZmjjFdy7cwXyBsq755a8caeLUm6SnkrGXj2DdKYsWkc",
  "key19": "2VuSf6e6a9P8MgWQx1tGuXspU6eHA1ay996PwWsadQCwUHZ7vkbKkrxtzgacviQFn6a8oNme2Ly3rSGN6rtuJWws",
  "key20": "4d1WpZVYHFfmnKPRsVygbJesZVhqF9y9jEEZ52cWdjTRD6WE9eGcTyRaeGDAEEdKvxoMywrAxLT6Ti5bsQMXKR2D",
  "key21": "5W6os8b2pqDQ4Py1k5Wsq2tnQfzFRRA69JpfKqnaF59X6QxowR1kbC95p81o2avvd4X6WB3tt7oPkzGGxSKPoKES",
  "key22": "2ZQoZXaQ3ceMqyF2kfeVWedz3Lq7niKipDgkSjiZiJzmnppXMCGThoHNJ41jUcDaDbbW5pXe3CTFRnfykUXQp1Wq",
  "key23": "3ss2ARrpdnzLoeMAbk8BwgrTc9gfsc3NCJwryBUmqxbyQVv3eDvLoWXBpH4LbqHchuWPNgMjne2d6kmZArmC8gos",
  "key24": "2UexWopBj5Mpb67PDTsiqyTpQWeJwRSCxCSDPA2xzWbuK4jEjJVDrdpZ4RsgoEj7iyyKqWvMpW8CamLobirEzmpx",
  "key25": "3qVvhWAQL5xGMv7cQfMt7ZE23TwyuQ86nfHnw2cxcigsuincvnQ2XoT8cdKvYUF7FPHwwNjPrFzyBAm7VKPDpnRR"
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
