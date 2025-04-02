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
    "4V1c8PQZPnnqt9i6Gt3eUedZLeiHiEkPMLqa28d7qZz299NQMcrxGzkthvgrTAX3Ke7MkdS4FWYtSc7s8oMw4czK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MwvLkJp6Nh2oeVQD3dEYN9HjBRP5B84EqE2qiPNn5UHMe93BDxK9RdJbfwPWiAsEa84qPGh3N4HCrQma7uexib5",
  "key1": "4C9ZgTBHP44yc2d3gKzhhbHWuG5G7xZ7L4ukcXjRqYdRpTd75XkUzsVxCuBQoj4rBoX4s2TVxQConfe94MRorQUX",
  "key2": "4iKoy9PUWKk8wo5VipL1i6ZqKfZwSHcgN6pWuQo9at2VZid1fntAVweAmntZPnLBiAwfu4z8BjF1Ey94i9DzsBJp",
  "key3": "56BiV3iCxqXRsctZfKCP9nodXT8aQ9RFvxP2nroDfBB4hupozSx1fW7TneXr4uVtvaFY9JCWB1Nutpi529hdFw7S",
  "key4": "7dJhHopfGNAoyG9e6fkMSVr8zpzRA5tF3CA9TMqP3ATrHrm9v4MdCbfnMNqKGjiggwkB6B5Kg79JJdGU1TsWNWH",
  "key5": "41HSNqSykFUgPHGkQ3h1P55UbzSnb1o7UXQ8Bqq1WVcX28egmerXpw3VY4tnVeyPXshvS2WKMi2MB5YtHEnYfzJp",
  "key6": "L35r9P1oVfgAwkuQBiAgNsYf7fbbuK8EoNq85qaFFirTabxmu5TpT6itKvXAAvpF3DDHY9d7FNbDvfgZcD4qQGN",
  "key7": "29HU5eyvVhHJVeL4atZXn36XvSetmXzX6btKGCk6bQSutie32N5ALXmcLjz62xiKPHEFeSd8VC88Z2dQhg5TSUfd",
  "key8": "4fnSrJpStLxSd8N9sKK87tKpfWFvgcpp8inJZ8wVix3c1dYZCidg77hcEWipHkidKPZf7kftuT6DmJzkY94rx1xj",
  "key9": "2aKR31HYZECymLH2GKH57cuu5MPukFaPnDGudQGByCRDaBMhLLkj2izvrPBsz9VwtLgQZR2jvcEc3M8CyNoJrin7",
  "key10": "5GiukcU4ag3tWnBU8WGVqNsyr6p4329whC6yYnh6T2CFjngaTy2kVWsn3LB83NSz8RwPfpPyBD7sGgAr6vCHsDHX",
  "key11": "uD8wgMWBbhh1StQRYtdMj1JRFZAxxcZe9G317ZubTa7v3x8wBGRu1RgnsadPeUTkvVMGop2AqwkwYGKdQFEZhpy",
  "key12": "QynJSAajQPAEyDFXwMxqjRmw2oH19UKnpDCUNQux8TenXifqbNbW8YYvfGWhfvdVF2au7Exz9pS4iCH4BpidgZy",
  "key13": "GcbnC1YzZs7uZMa9QwvhAxAN2XFjZu7WXhZpm1FCBa56VpyM5sAKVER2nMsMjLQ8tc2p2JRrdfQXffqKoL3p6pb",
  "key14": "3hpRV8bzo3MNwt2QdDB6FUFwc27aesfkoVee6TXgPiHHhhRRmHHpALzTSs8wQi7jp8YQvQGBTcHc2SicoM9KbA2x",
  "key15": "3Ydvw4ocwSb4zqQysQrZjW5Ci6DKtUmdqBoQpbj9AiLQtZGj13QNuFT6VFU7AFxKS4Vj8L5LgFByb5ynzLPd68Ez",
  "key16": "JC2HbsAE3i9uXpD4N2mEJVTtRRzgKzSfKmR3fDmsYkuxiEBqpysSjz4BCocPUh2vvzAVum8VpBTjPGSiMkyto7s",
  "key17": "3bj5W9Wm92NTrX8tb8hKbFRtrDkkEtFMqXEv1BeTtK3zPpAk5axXM7wueXpDJ75jbuBYHgaPtAaYUG4BAWc1dtyP",
  "key18": "4CY5QLHU9DswnVC9fg23R7XSWoQrm1pbX2bwTmbKGK2i58HHELNnyp4q7zaMcLbdJ34kXTzcErpsmVFvs6iw5D8n",
  "key19": "y4A9yQTcKV18dqtRGLEBJrja83vwVV7S4zfS2rd4JhjuB6mXVFFRN78KCLcpgHHtB8F29RynxUW6AnyeTvbrjkD",
  "key20": "5bi9Eq5CpQVRtSXjfmV5uKeRTyHntAKfnZoByrBFYN98ZP6G9ZfA6BKLmzghg11UCC9AAxkpQiWDFSn15qxFXwHk",
  "key21": "5fB8T19387aTBydCDr8foekvuaKoWNrNoPfUbacNN3getkYNYg6krbzaXxnzte1hXKLGR7AigFhBkKBX1xd3XFqq",
  "key22": "2r43HBhLhPKtHcvz1FTWN7Qc5fpQLcaNgrK15mdhe2FzSLMtL2ZwJuyGuU8HmcCX5oN7ukzNFntpMSd37koS6nUJ",
  "key23": "2VRU5yjsPvr3aCgo5ZzeY2Mmbd6z6NU86RTNd4bj5fYC3oHcirT324qQ6LnX1T57FvMqYwUP2v2Fz6xEbNsmzNxV",
  "key24": "5RjibpgLfRBGGxJWvv2HmafXFss6nnHENYsuy9Ui3c8aHzYafaR98eZDyGMuW5TZkEM5Y5p77RDGZk6K1DD48K2a",
  "key25": "cppjDygXP5dUj6HCZYr8DxWk2wmXrcj7a4g5AM5cP8QZFbQqcp6CmQTT1PaAoLsefYv1vu77iEwpdqWDhhP1AzA",
  "key26": "5kiJmd6o3Zgz4mHkVo1VY65dPwmiQpvxC8X4RSZ78mxQfHbALbPLVicrX8kYF1QjRERq1zLCkqTALM6xC7Hp34Vg",
  "key27": "ko8nXGqpy5QXpR5nUTkCM3jt59kXZm7Y5Xtkg7Luo7iJsfG9NiMLMSbNms7EhQeYy72CaMfzoQoHNmAqkMZqN7a",
  "key28": "2zHHeDuVpefYk7vVqXzNPUNSGWmJvng78KG3Qj8RKbGsjoJrACH6JbqLtNuZ4MkQDDkXy6SkgftsRbfCcnHwyh9D",
  "key29": "4Ki83pfKKMBD6SanbVBvL5qioLZr8CHtsSGw86jGuQ2Rrz46gsEGEZcg5MhRRCGdGLhqQZeUfrBfmkfDgwMx2Eqc",
  "key30": "4kW3vAQpf59fMDwv9GmPvs3sRNJq5jhyozEzhfXoQwBr9fwRKRtHKhW7jAywH9PzM41dpS4J6U7yvnW1ikzx5Wbi",
  "key31": "58gfA5o3LpDTsaGPkkxvFjZLqu2rzxmVCB9FCQVZBANpTCQv5eFyr99GN511WRVhzCmVbhbdRCEunrjiXxtpinAL",
  "key32": "5wV8WcpozZo9esJVAXmg2JTDVPdzfn12AgGPc452WKi9LeD5JVafpfwt1fPF1HUVSQR87ThKPGn1CncKMgVUrRn",
  "key33": "2NSHTFWkvTGrvdJ74RHztFAMAp5XLUaN9v3pwWfks6qPptuwHos5hhfKCo2sYhXEAczfsBKmWFhDTrG45beMNBdC",
  "key34": "4qt9KEz4t7YvWpQN45i9vk33AMBUrLY974KAS2CucdHiNgPLGhKteATXhr1FBjfz5YG3TuJqBxLzPXL5JDjsnpnW"
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
