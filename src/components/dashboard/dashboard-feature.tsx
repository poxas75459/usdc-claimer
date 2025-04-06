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
    "4jfyKf8zbe6vo4eB1bFpoqa7EGvoJW46NHdueExgyR9wNpf8SFu3t4ub28EdZNRBjDL3gUkRhgQ7DYxyLkfNRB68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eRorfiX6rYtPJcJXbfY6VaDmYjk257oPz2KoPnzA1vr92rCpW4HxN6RCd2789jSeY6M2FujaHvXknwzCnZAa89F",
  "key1": "3RAuK2nsCchP8pcHMLSvUJ6m2wVxyn5FWwm4SacFeBbcM9pAPZS36WC2F7kwyFbgF5iXZjcWfAmmsKjwPhtiCp94",
  "key2": "2Pk7EytchoZUzhqjtd6TsW8TV73jQDm5z25pE2ZAFJ6wVx4fd3Z79CGtjYd6GCPZtmsrYhGKmZs2HbL3hqcpMyAJ",
  "key3": "2j18aB7kTwirv2GhxUuZdZ6K1dia5sPbUiWWjX9Ut42T6FwiF4rdbbaicP9HDsHKTcnUw1vd5NGReGTCwzhK3Qgv",
  "key4": "2xbzMHpiHWugvu7mUy9ncZ15FgZhy7rkXFsg5RXk9ruBUATDRVPQ2SdrP1fPC3ELfWUdCpAeR7oZiKjam5P1LDuV",
  "key5": "3qsbWi3KGJJEY5dEkUXpwXh9mAdLhpsWBrPVG7qUk8q9JFus9nrBzWko1B36nQAtmXzaqtvKKUrSe7FoSt1Y3KWk",
  "key6": "knyr1JFTTwy3gU6nww6CAcry3hkfvx86dJ1F1RfMN7yWa8czZmvLxWohzYKAosebLNS4tBtcsdUhCfy4RHTJuXW",
  "key7": "66QRDREe3LvH5gkCdyAhg1KCwJ67kXPc3vKPSCeVqcsGpuAHwCaFwXnh4SDwv45c16UGchmFKdbex26qDypLK2xT",
  "key8": "3hwyUpg6iuWdKrbRRb5AxWNCsfCeeAMiYMoChDYMxWHyyVCQ4dU4G53UbVZ4pdkD5G1CgpEVQMLmJnc25PxqJACi",
  "key9": "2qRwbkutdoLU45f3u9FizbMSKxWwu4FR7ZXEU19p922Wn1ugTU1gU4zkxFgyWoAwQpw1SzQsxdU3ToP35oP1zDSK",
  "key10": "48zry5wEt2JavZFjzS8Ae1kag2pEV1sU5nVvbW6DqoFAv5jaU8kAckF1PYU5N3RKY9E8AjofNdW4aje9rcbnrRs1",
  "key11": "zNMiMU91e96QbFgwXndyYoiZHmP2Dhtrqo32TKX7P4tJFnnBCRQ3A7XJg6NE4LJWUMSXySS8awBZUX7TiYaKPMh",
  "key12": "5MJfkQ8uk6dwqecgSrgdTN25cWAEbK51bPe4c83FbhwJtd9Rq6nEsiiBLGWTKQKzjNtj5NTec68iJzejFeaWtZZT",
  "key13": "2igo1bAoMicfR8hPFdiYVD9rF1XosfRhxqmUk2PkBUYLLcSfWi55NzYATxQPv9qu2gxcWL89Nk587QmY6r2DFfyn",
  "key14": "4iXZ3pTJaTDnBUuddGqkf7PbWZPHcsK8qqL13pMdNzP3WTba8V9rsmQLRr59qevv1PAzgWtCL7V7mdywGnCfWQWc",
  "key15": "5uEFGEjU6p6rBzh35qa4bwcDx6GhJV7sVY2pcUDwRKqww68CQyZSDj5autQJnekrhH6RUmzb2iZjNdeJLWKjXGWD",
  "key16": "5sFqpovMKKAQEUf24McwRrhFzqLqKfzDvABsYMYoeWk85oQprcqubWjUwSncFFdEdjaGgkU4dDVHbe8TD4BcDG2G",
  "key17": "57gMySSW8jj85fQekVPuoF5uH2xH5xVmeBtswxSeyEf9bZWGtwHXLzG2ci9yngHgqJEQzU62imq6N3EJXqjEXt4T",
  "key18": "2mF4pbPEnczb9GutWTejJ4r4Zs4rdXqFuz4S1DiTJhCTM29fqwVtmfAMrFtH9cnQDbLx9BWvcstLD2sbie9LqSQa",
  "key19": "59VdjGP7wt6ETLG3HjSPWMnWD794TdpFm1cG4jwoyd5p3KDUv1YFamBbhYcrwcVXcuHYDGZitoqDq189rYuBD8An",
  "key20": "4nUqzr71XdD8nyetcyfeshsffNJgkbsffAwuTpTe5Ry6XZxjwK1sXq5rpjHrPFhMfmjYMPMh8EnAFJVpuqwjKFQC",
  "key21": "4NtrYftnjkjPyT3YmNueF7yXYemX2okZ4UA4dQZnGbWDvQPAFmiAHDHBAiHcvq5PKZru5x1X3tiKwtgV93BkubXs",
  "key22": "52YHaHS1HY3JUhbDbUbRHGnWBW1R4kv5jMd8hyV3M9cerhUxx53efT4AB8qodabrvf6ZxEDD7GQS4dRVJgUmKavL",
  "key23": "1bvDeCqcV3X3A1D5PEGpWjyGrq5dvJPSMNAVJojxKcNV5UaCpzdkD51UxP2QEydLq5fhcB5JsfVwn9J7mpxhMqp",
  "key24": "3yhyxG4oja5wAqdsAnT6faGHDx15RXPHFpv4szK6qn2HFoEy2fZ7DbPbaRGYUgBb2pmxuqLD2tYtGxviSgU2f2gu",
  "key25": "5n1YxagTSiEL7UQ4w4SMsSkrUqb9RW73b189apVH1NYwvv8fLNefFszJ5AuvJw9zqg4eLPTZAWkLaytqQfcT1jx4",
  "key26": "4wuK9jQpMdAs4X9DE59zAZi98fGuhwrVGsh2oZqqcHhV39RRso6gFXyPYCmpXT9KyPk68YbTWP3FyMWx8nNo6UfP",
  "key27": "bVjwhzi2xPsbkoaAAFq2iGFwRX4E8hkHqBZkhdX1RH2PYZKbGZsXQt679Mt4cvsQfXUnit9BiyLvkxSThv68zgQ",
  "key28": "56vbREG19MmBDc72MBwmQ2E5rFfbeakJbR5dJXNg9ps6W5X8JMMFq2jUtQhVqVwcjgUWTjfmsb31UBiUyJAvG9qF"
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
