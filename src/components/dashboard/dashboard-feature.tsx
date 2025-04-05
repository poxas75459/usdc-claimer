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
    "fCSi1VwNQEsixiTU2LVa3eojCeCzk4jwpeaxHsN9yrHBkAFg3EJw7y5MccMbBog8QforBpvuQTMYU9tFZwx3tNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VB36v58xheZBhfBP8fWDMsPi5hSTFjbTmaKtRVhYHuYfxmPT4XFi7K5v7Z3EZNzdkkKxYggpN5unjKRB9obpbe6",
  "key1": "5EUDF6665KPcMFLF7oCHs6Tdh53TDhreXPGtGTjApw2mrRzZcKLWmFgPGc5hTNd1YtkaszcEm4zsrLvKdLgAEjVz",
  "key2": "4E57wM7m4qRwmHACaE1dEXoR5PcbCAh4wY4qin3162BGUaGU14b4imvjFwotjLmQUaWKmh8dZG7QVNJU3M4sGdLb",
  "key3": "5J9pgv3bvgM9HMjGQ7rrWHEWsCa36UdL5c9WMg6yycK8GvbzJsz64rsxf7dEUrJ38vbBUiuDwZGeXyrM5cqkChyG",
  "key4": "5FeaWUpGGjCsL1c2JnN8KShppMXPWBXetvbsmYYrcJjQKNqhNe2PddRciuASb8uF5cKYbbtNFNKgHySUZju6ypJv",
  "key5": "4S1841npFgmHmXRtx1PKizgTmnCUZ4Co1no9gcWVhQaNuZVKufyMcAVko494H7ZjMdqnXWEUNoqSHEtBXvQnBRxj",
  "key6": "3FZUcRk7Hg4ZdZR9ySPLftb7wSDuU3zU7haABcFz6SBhorAYPPNpMp3oibJMhHkYEXWoMEMaPFbhG8uDkj7zkgG9",
  "key7": "2JRXU7LKG96yoD64WGgWWr4jrZe1pCnnr9KpevQDeNDWovvZQk6go4NV4VwGTVehoSu3HG3F751FcWMYQnfj6hnU",
  "key8": "4HrxFK6pwq1gBmftWNFuPSftufeceX94UEachwJwVrcrDsgRYK2tBJ7EdAMyazAcdpUSpnVW2GSATs1P99pztnvx",
  "key9": "3Xn54WwvQHrQoTj768MotXSpQowS9JMWKFSfiAkPvNVWa9tuKZxizMPGf8cMkcQNYnwoYYsQZwzgq3XBqpn3gpSQ",
  "key10": "2eAXRgFLVPzhL9CFo4rDFyWoGT7b1Y5ustmHHHEjPtovWVQN3qeJCjxi456JdxXfEsLGcjqTdkpZuSrLWkenGHHR",
  "key11": "56i1TZTaEabuiC3PM6Z5qSqYvCudTevgHJNVtsYDprybxyMt9BEHtoDk392vWLQdoghjkkhHJjSByNzrV8t6oYFw",
  "key12": "5uyv6AnTKq83YqMZBmSSJT9UUh97ThYPZyh9d7hfNL7svzb85K1Ga9heKwi9xrjumVnyAf8yhCP4zTdbUo9yYFM1",
  "key13": "ssYyAveWZiY2Eide95BSeE2a1zfjHYiw9sfrJQBPxymo84DGczAMRw3TRxAuZ7nC2mMobM34Ea7gXGt6fwLRAUP",
  "key14": "2CtHpJdFjXvd4CFAj64Gx9Rx7ZKVn2o42fP4X1RXsgz4SmtsAJ7FaPhMTw1ALWJ9D85JAPnMdLGiJ54VrasCaxEb",
  "key15": "5qAFduNKbyvowcAq5qXvzEdpdDNpWBZqST151fk1esvJr13GdUZSDFKJHSZhQdu9yuhBmpswhcAsuuoz435aPRNX",
  "key16": "c2a13yujm4pRrNhGqBzUcZWkJapqSvUJKyC1gaGpGk4Xz1rJMBadxGDkGaF8tCG1Raj1hpGWvkwkthQyo2U1fiZ",
  "key17": "4nqAbFRBu4BrvovmKE1ziHYFuciyLCV58Wa1xEeUVsMRz29LEgtnDwnBe9NJGpZ1dQEkcbgr74jcULXGZDv3tjij",
  "key18": "zkmjffJyHJhZDFoD32qcF6tJYBEEyiNKksDJ2yf6GumKrZpoewoXHgAJ2PnhqQ8EbsH98sgnk6atdptaKDydaFv",
  "key19": "4zy6nYHVJZVCrxBqKrQ9NVMZfRhQ5h6u9wVoBXaRZevgz83zM3LYgPv23gpA2SqGpStoJtsUsUGrp1eSc6N75Sq7",
  "key20": "61WLgJxuYJXi9tFhiLtD4vguKkyixncPTvyyggWwLQzHZUxJhVrr8nnRvLEg5eccKMUTeAyRJt2PUAPNpcK4EBRG",
  "key21": "Jjo5EqYu7xzNpzENLS71V3ggaowWashV7vD3gnAxdnXTUU8E3UPYi9tBKjbpBbWyJDGHN9F8usW5iJpNGGezSbS",
  "key22": "3eVRjW8qKQkN7ri2kH9iD7HyA3NJAegwvmGD8k8BRsCiXtuWMA6SAYso1XKMnorJFPnNff2FjjCVhsYb4Kb9fd4M",
  "key23": "5xRkWYPXTHUjaZCHKnyw7BphGB98pCg8ig726NfLTYPzDsuHZqpA5knQXSKP6xeCLEHuTwiV2TBnW7kfp5EfXSGV",
  "key24": "4VgzVz3iPykAFSYFcPjcp3RvpeUi17dfL6cLGDwrNJydAD3gR6LTa32Bkdwbo21oCvT9Mr9FWLGKvR5tFdHjAypq",
  "key25": "3KKinx5tKkasjY5CmTqEunXy83YP2XMJqbyRLsyhTbeNJSmUhS8LERKQPGrnTa5XzZXc7s3fRSeLE8qPAW42rA6L",
  "key26": "4doLCjpYBcKWAnPP5FAHyTJV86ynnpdxfrr3PxyHEHPcsgERUV7psJdDvgPS2SAu36TopF2y7jXYQCMUjiNnwENc",
  "key27": "5cmSoqwjRsQyvcaEf1YEm6SfGzmNjxUP1Bv98aeQ76XsjCT8hbPXR2YT3owFVrHm7VtuZ2bDPmNps1Be2oRFKyfu",
  "key28": "4XyEXe3i9rBQm7e8A3i63qvNPJNkgZAMGX3VU169YKnp5GGpcwUsakhAFUGhqTqZa77chek8LXVz8XZpTNxVCfXC",
  "key29": "3M6AKLVpbcMvfhgWuNGjDZ1EHrHkJEPZj2yTgG6iEvfsqTQQ99thSuSFCAWmsFAtuJon1VRgavCkq8tn8n2jPetL",
  "key30": "iUXdw8pRzX8yH1NXFNc24qZFhskhSr9gPjaov3HjPwT3kBkupjuzmbDiEuDy1NyJueM9KHkY4ww2BXnEBHU294S",
  "key31": "3QDR3aXUJkn9TFHAi8hrdaCwTZUiwfNxwPxGsmfggVu7AMmP4XUR3jTQ8Bjm6QPpmpJaE2kPKZfrHQX1urpyLoY8"
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
