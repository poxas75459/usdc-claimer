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
    "36KuP7uV1xBwpnq8EoNbaAidCM8t1M9cQupiG4qQaJxbW7w3Wzyww5gNq5pQs6a5uMx6DRvkXadaVwLspCGbdcPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U653QJhjYrDjcKmwY6xyGYbDevzxwrkbzwiBbfeJcK67wD9wB3nwh8qNQG4fU9LhSohhHmAbbd6AnUt8vfMepfa",
  "key1": "4pjXPSvZJSnZEQCNsicWzWTsZRKEXCo8QdAF5o55bBgymZKF8WCsupHfXxrqQT9mYb6j5iV2Swj3AFBPQnQVtTgK",
  "key2": "5bg12xvzqfV2dzy5oF9DiBZukUgAv2kWjfYAnCYSbN76T16731rUZoCLRn9GKWeGzfooMr1y6butYwNLN3ucQvsP",
  "key3": "4aXh1XkJG9KcXL8W3yMsCgBKxV3xR3x79VpNmwCoCqiAPR61pq9jry9fkuaPcUhspoCs4ubkn4Y4ncRJ6ovyqh71",
  "key4": "4mqQhjpPQFrcjhWehkVPXdJbsVBBnZfuERA5yprgrrUw5DpYmSWGFZVwmrhhku9G3RBdsnfcQ92wWUaaLS7t69z5",
  "key5": "3gwGCHh6X2e2UXRVqGPNFmzuRWLUoFqrBK5me8axcvVQheaT8Uk84DuCuEJ8WDZMmmZvZJCBRqJQGFHsnEZo4MAd",
  "key6": "3XQHJNPYnB888pxVpXCb8gRvZwL38F7raRDsQonpG62mcqPVd8FS8teqTTMRSmW4qzXqs9v7t4UUTvbbwp329fsJ",
  "key7": "ohBV2p4ts61tc5bey14nmymFMuVrk8WACzAGdGg1V4MqDJfojTsaQV3kCGb79k6fYfBUwWNpEHSEarFkFTFyJwu",
  "key8": "2KJq4WkPbUQLwtbfWMzKDPosSfv5TS1vhCC71dbqQ2TdMos7nqVMX7Ci4i45yHDADVSztCTwsGefk1QC13tLC3No",
  "key9": "5Xf9Fb4eeeGj37vNAGGhRDBgGb2sVZSn1fJphTEsyLuqDrdt7qhX4jZwufZCjT414j2V1DsBxm2uo3z66d7AEPcB",
  "key10": "2njtyMFWnm5MRhTemZeANAWu56aW2eCAKWouboixdEg1KieGwSY2wXGon4PeBCHm5MagrehpM8AeLLZrrSwbWEGp",
  "key11": "m8UpDhX6nr7e8b9X4JHP5H9ofyAd9ytcGbviTEdkGMJBZHWsgJ9oKYvLWeJwgBoDqW8d2f4fJZEh373v81fCWAn",
  "key12": "2SsqvfmvZ4QF3KDmPWatqdUKhHGQMuXRSVc1b8TEP23YtVkppqv3avXkJk8iQGGbJh6aeMgGbrCV8reok8e2bQK",
  "key13": "25anVyxGLH6EyPkQooezyGLZPFQbT2EPtrEvTSnuLZtjDsruWkc3bQQFgU99LiMb8vvP4p3rywSaY9qmA8g5iaUZ",
  "key14": "4FSus77SqiMEcdFn9SuPSLUEjTGywDoYePiqj9Y5EDxHFkQVgY37DfmNSThvH8jmKR9gTX56FZVjE4y6Qp34hxmi",
  "key15": "3cyrrXyKHizuUphXdcgZCJwV56diDDcuVNASv68kV6wLNKodjL2XPpY1g62MqaB8oAzFgyzT3HnHaAfo2uBUUfYZ",
  "key16": "2KS3TYMURnLc7aSSAhFmheNEBdwiAUR7qXdR6iCTcdzP1ggekyYCWuxxv8vSREKqxVLVroVdtyWWeqiv7odzCGXq",
  "key17": "3cWek4cAn6dNMV89LjWit8Urg18zW4Ks55a4PAKnGDPEJBfeUr88EAURti3KiwGSQhF64fbz7u8YQguc4PeeWhiF",
  "key18": "2F5wcxT3WMLHRJJ7xhxJQTic2FpXLVYGMEc7Dm37JSVbvmCb7cvXBAQsKi8nMwF2ZeCMbgXZkKEKmWRHyK9xdK47",
  "key19": "517U5bcKQ1EboEvAC2aknHzAWq2CVcx5u2ZWxGj7t4A6zUL4qSfD5ZYkWijzncdHnSzVtt7qRAQnCDLUpG29JgNa",
  "key20": "3qGQrw5WYpUeAxxHbuXM4fg439ub9dZdmdMAfSRmHyC2svRZACjPAHtt7PmkC4LYiPUgtdvFqv7yeWHbXzqtXMSF",
  "key21": "3HbizUhCzJkV6ThDnfcxFUo5Pu6wdzdMGBCSzMhF8Njk73HY3hDSce5tGxeg2vmBqoifqhVjqzWL6kbC5tgtYR96",
  "key22": "2PwRNnMX8WgP813z4NRC5GzEgpJC4bJddvA8mw1X4sJWUNtorpjLtbaak4uAYD6Zozoj3z2WXHqTS9HshTWzCsgH",
  "key23": "5Nf4Vt9ALUojbWTvVFTt8HnkkWupXB7T6Do9xFYzJNEyVNWzhYAvqqpEgtr8v7kLbfGY1eqaURWMvNX3zZQ6sQQi",
  "key24": "5mVnYpBjycF4Wt6nREE1VDmpyTrufnP12bDANezZckTczt9U6DnDHjutSf213XMQtKg5NS2EZpvDhgB3GHYQDTUs",
  "key25": "2A9z2UsnaPaBUnMUY3GypGAxpd2q8Lvr3Dc126DjajaWU7K2iu6Dn1ZwvPLYLvXW7Woj9CRcR1wQ5gQep16ZYQWe",
  "key26": "3vg1dwqBwLFE9tU8ZtWNFauq3saLNrrnyJq7brVzrWbncKFMQXeR9MmzXNG9qjJFzyMaSN8EMg5imKKq8B2Q46Ty",
  "key27": "5u94HeCTPWuV3oFX9eNu52uJjZwWuVUv6VWqX7hAvoaSagvaG2VR3p6kh1YEDc3tD7UJ38uesYk3dC4ik1dW7jZp",
  "key28": "2kCQyDZpcYqC9gw9T7WM6eottKb2EFXZcw5gQu16r3Q4wpEgNaMfqPBAN5LfwFBU7Ks2wmErqsnM1DeZTdtVxdG5",
  "key29": "3hhm87xX44SmYyggd9UM33pz4Fw5s2w9joFjxjs3ewMcgJXKwmnUP4aF3oZfyAUwTWrHaViCRYCrSdKSRKfLb4rJ",
  "key30": "5CCD74a5MfqKd8QMamE62TfXHCb1G6NZxWuAL9Esf62fknAZyhFaXq652oB2zHRLpeAkJp3rhMRosJjZjdJhG89m",
  "key31": "5Bzt2rqMChvff91UPfcPaaSGjs6zULdcRSFiQMQYtLTErjUKR1oYK2mX6XNm742YLpmEZpvf3xzncc7WxhjNqLFp",
  "key32": "RuUh8HqrandCqb51BBDgob73ZLL4ftcaa3cQPkGcTbsU6YxJnB2HF57GQnjNBNXuEVJQfQNXpePXb7o9FmJUeE6",
  "key33": "NZvJRBsVfCwsTMoR9iXcvD8LXB2SD1BTqipopsFFeEfj7aK9R8QGGbM8etcqP89omhL8Q9UkQ1kBhbG6mEsKHg1",
  "key34": "3nRFDWeHvmoY9BDtATjLuZVaCACxNygsgsiTnDZLDPFCTUtEAYedxsu6dY3acXGEd8dhHWEERsvmP78ToMPpnbCd",
  "key35": "3Hnf5v6piVGyJ2FHCf41RNN8Y2vnQsfWRWvkWoAzgbWmdS1CXXof9DohEq9MZYYcN13pgKQ5p6bt19RiwLh65Wbs",
  "key36": "49Zv5x8EkcHnwHuP5KRR2HKV7CNSc5fZQaAATdGuBBNX2rdnTdHK5YaFeNptfj7eZoHJ6U7sJkB69s55hny2V7ms",
  "key37": "44yyb5MQrNZZMHGRNGG7iTL8q22mUtiKTBRkKvqtChbm2M8JyYN4R11yG31ByWtzpp6p86TvcEakWud8LwyFCXTV",
  "key38": "2iedgFnwX3jXvTfjt79cY6fidJ7zaWWoYGto7t6foKp7aa9h1JPB8t31W6AzVCvH2BV3M11YHg5Bn3tGWvTjxPzE",
  "key39": "V1STUTS9iMZce7exXTAcW2nUiKk39BikNxUPK9gKPwzpsXohoKsZMnd2ayjc9xycUDv854Pt261LUUV9xAHJH5a",
  "key40": "48yddfZjEcCuy7phxJwUaJeeaJGgiJdjQswWaRRHWUWDeVDvHzhf8RzRyFj5FFYDmgpqsrg6YZq5wJqRChcTEbbn",
  "key41": "3hkiv9rgdUDoDwsSuurjPoomaakzQdjbx5dRfBVTxPZbwbMPi5CeGsEH3bqvwPPeesKJASDMzaJNZ7SEqnutucqS",
  "key42": "3orfd13jMX8Gx8mZzufegEhbiCEY6gCAWM8pB3KaVWpEoUtJJxCzcjjbuPgQiPGT43uE3SJNxWGBo6881WKYQ7z4",
  "key43": "3a9aqDTJ6g4Gstq92jH8zeognTpH8VoLfhpER2hiEoks3Fy9Mf8AsHb2qCm4BYQ5XqbMeNaVzLcyssVz7FLWrZvc",
  "key44": "Li5E1BA3CRzUtMXHDNEqLYPgtkacYadTvZGjohFiqd7Ni5DxCmWwDERcz2MLAM6sqWF1BjVr5fUJjtwoDxTQmQQ",
  "key45": "5zdEoZtSsXR7F3ygPqd897ULdD9z72QiUa3PJt4n8n74cDnDKXA2rAZTYRCnAg8fdGMQbrtuMcMx1GKVM288wyjp",
  "key46": "4gMPGSJmPXox3mwz1WvphSeQTqBm8sr8cDsLyE4k8x6uFMGDv74KnH8jyKKn3yTKnKNRucYK29phKAsSyND2LSY7"
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
