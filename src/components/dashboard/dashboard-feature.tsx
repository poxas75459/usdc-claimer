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
    "NhYhFBRZbVyRU7gwajhvhMFqSAQr3KkFUEbaYgvPssoGNo9bXSEUPU6AmY1pcRuAbQzsy24PQxMLgsng7sqrNvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csCmY7HHFTZcj7mZ8ZSphSas6aEDLcMvk9BBEYRLMPwuk7U66HvSsZFBcoEowStFHHkw66MRnNqt51yXi71SUxi",
  "key1": "5oiERUV3SqiGkWCdEp612MxhWYo8asEKq8bCGLey7DVuSGwNEHYkAoVys93Hx4Yykfpw48X7cmPnGSCxdKVrv8x5",
  "key2": "3DfbhSBBSWHQxMZXvPECxeBxhnKPZhtZJxih8fpU7uDKtFFUhSMyvhi9KQqfwvHZeXFqJt31v4JQxjktyreStfUG",
  "key3": "2FvYgcaFcmx5EbVc2P3nbg3CH86nSBzijUGAkGqXrHmzRXY3FVt8iXyK49L6Wvax41C4f91Lq4ySDDJzJKuntBX3",
  "key4": "2QgsUk4nDQae3M9rSQXNXiJEAWu3KPE9GSeiPgbqj87fdNkJdvDgE2ymXqFbx1d9aSGAjiDJDZWq6idetHxMXuPC",
  "key5": "616t7DjocjCmk3zz6DxAboEf22q65T3mPgXS1fzw6QPoPWsh8hxZ2Y3gML3byfSRoMnzQFzAus4QPS9YG5Jiw72v",
  "key6": "4H5WkuUxw7H4fPnzsZ9VcpLoMoAV4zFdjwmGsfPoD2w65Q8DriMUFwwscg1cHpBdBj5PihNTCdmiQETfahK86Xg2",
  "key7": "5Ssb6GGuffu6LTMrpKWa5TWbBkb9Go2C1otN2YVrSydHEyp4Y2TJC1Q1JkQhrfHBfYDg8nKpdeYQgWgUoa4so9Sj",
  "key8": "5fakavP2eSGGxuiM1BNmRzeK3JGbDfkLVBxHVEN2tiupgJXTc7kgE59Do5gPZbUm74GgHxZ7XJzvw75AAAaYaof7",
  "key9": "2caQ19g1Ggk5gFrfc7jYcZGd2ZGXgfB2kcPa6YkMyyeM7Gmiqdru5hYvkbFzhZ6xWL1FPAaZbSrNAgFGnMizmRwi",
  "key10": "3SATVzGQDfjVBX2RwTnCsCspiFvJ5j3cavfXt9sZuni7anXPigoJtxoxXZZBK8haGCshEznpWyTyX3Q9q3WX4W67",
  "key11": "3Djk7erzwqBYitN4dtqNabNGwTY5VkfHcs9bQutCSm23tZNABwPjncjVAmKcawoU6T8b1aTLo8F9o7kv5RCKBb5o",
  "key12": "5CM3JgZxHtFP7tXngcXsdiUgJUXQqRhfd6Bq8JPn4qFwsCk9XaHy8vzN5a6H4ZPi6PTYcbKkfd3vRpg9ZKfGpSVY",
  "key13": "2ThiQ7ggZxKSt2TQTDKqKmfiY1kEypCbMapys8pfLVsbxvYcgxKJQiWeRRfB28roX7dJtce1Mowsq4pVzR25W2rX",
  "key14": "5dnGVp8apagtpSV4LVbDuWRWATenJxnV6VgHdJmFyTocjtA7RiRZtXS9hWzx5Ht1NPPUXYcfdv91rLrXsoPhVwJ9",
  "key15": "2n7mxbDDGj6KDH6srhP5hP3UjdwQBuSq6NaHJ5N9oGNxyBsWsPfmSCHykDbAVgtsBdoE7LbV43sAGqvzQnMfLzYe",
  "key16": "2muKRtM4DGUAPn5qAtGBZaDiwkfFqH5g5w6oWMdtDUMgkZQSf5Fpxpa61hxmZsRPToAMkqErFHgWQYvH1cEZdS3H",
  "key17": "3TcdQF4XtZmyLU9Lu8iM7pADQ6YFZnxXENEqm4qQvyUM4rPWh2uPvYhp4ijKKiqeTJ9FR636dLpMwaMx9vUDvJE5",
  "key18": "tEDk4kra4Z5MRg1Yjp5DDAJx3Ter9LZRNberigASj63DGA6ksKs8PM3M1Xr1yGRsFaxP5GUAMcxPyTT77CGkZkx",
  "key19": "4BsyfvuHT6jG8eFYte7ztcjuexo4dnLhtKdqmjXVNTfLixTVwtHvjHgmdRAA6hovwzGA32eVtUgqQYrwy6Ds2psg",
  "key20": "2emr3wem5GbFdhhdpdHkMGRbYxs81HBbEhxLt8ukRSE5TwqRmrmgmVGs6QpMx5L2D73afZZdphPdxtUJZiBivkuc",
  "key21": "46k25iDn4V6q7iUfHGxVSimEfvC5B5P6LG5ZJ2rrsM7diRfP3e1PV6HyqhTEkU22LcyumGV1zbMwjGVtBJfrhtPB",
  "key22": "5QQQdE3BMzzj8ZwZKHp5S6G7U9UERMvwTWUWuRmiM6TExNmLFpjC1mbHH74fr5Z2S7t1Cv1hw1WwNtNomP343Kn3",
  "key23": "4QBRZag85UNZgH5bJgh2tXurneWsKCtwLkpkd1gFAtPYh6u8zzGqXC7a6JAkTdruArRjsfmp5kSo9Xa7vgTZN4NN",
  "key24": "4UYJQYehksg5xfxYoQpmf5pstkcPBQYb7tWv7cHH9KDvkP1auTHUs3ibpompRy3qasP8iM1yC7Uf1K6b1oHgN6sj",
  "key25": "57d9PNBNBLeLF54ZX2NExBWSqm4amGPaAzL7K6qZEU6FuFeoV3aZZafFbvdmz9tsgFKTRgLGiHkByXbfXxSn37uH",
  "key26": "3t82QYnCjjrvM2J2uxyc4MYRXemWmNUnFdX7AdtFzkaCk5nrg3oEGnidStCehwDamuyxCHMiCJciTZMhKXGwy5yZ",
  "key27": "2JoTvaC6w9DtJ21KewS17UPLAempPyfkAs3prZLzyBoJn9QCm2jcCqNpfMojpQ3kJWbccRkvP6o39UDZoy4hyxuS",
  "key28": "5amgA5foPWKtC27ubD8Prjt3AKazYumA1ctqXukxeFTgYfpeFiFA7cikkZngpCuJjmDaYRZ9r6n9HmZamQhMhHPf",
  "key29": "5o3To6a52ae4xNaKqtWrV17Bn72vYSU6LPcWdpsqm5s9xTdRzyUKmAxFNSMtavqRGr3w31uF5ssNr1iC3xmSRrY5"
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
