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
    "54XWywdDUbkHgzDQWWUh6sUoyF3BzPgvQmpVgvHxjoZnisARr6CLTsoJAs5DeGoAKiitt9FKRXPRK291LQiQ16r9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpJe7N4fH751HAr6g3YibJxwYoug7vErPz8e7KL3VEGJ6VKqqiZnuoaymvVtPf6SPCH9wA9UBmvGe3bT3f3MLvE",
  "key1": "52VvQPqXYmVwLtVRVi9Hr8T7URxaHfkm9LVH51KzjmiNURJaLu5gYZejAWcxxc5gEsBuhme67KpVrKCAvYQp2ybm",
  "key2": "5FWpFugeg69wucXS8Hd8TwwtmDg76RnqpNacjBUXBXZHpzUDNqkLMWnjYFgBKxVGUq5XcUNEQu29FqTf1kzDWRfe",
  "key3": "3XjhxtrbuHDAQopYYkb4ZdpwmFkB8SPU9SNgexrgYS4eVMq9DNi7M2WAygjz3FePsQcugnCP87t4qbJuHsXjeCc8",
  "key4": "3DddJHJ1fn5s8Yw246uwQRXPoJL5xtMNTwgyxjTNNJdo1NFAEaASqPJqA9sw7kBiErppvDfxivBwKdZPivinZX4C",
  "key5": "4UKsJfHwhihnh18XGGYPAyhzNhjdrhdGKkLa6qmx8tWBR5vGesQXpnvnMBHgLELLPbtmxMW9mk8bsec5q8oW28mp",
  "key6": "5Y17nBp3ePBy1UPaXccL6yY7GyoaZ9UoxhDVcafdWdFAGoL5RiGHkZ1HxksUN9AXSmVBEc8mvFtxE9XuRYY3VmdD",
  "key7": "63by7aY4SNH8kCYUqxfaeENKHfioXrp2yXtY9UcCAfkxDKC1sK2ni11d4nJjBjWVbDrb9n6ozmtHf6fikooh9DuM",
  "key8": "u2N2gjnGbdAJoP4eY4vVCFmaWHve6CTh49Qr8vVpCHgWw43jBSeccVYvVEp58D86Gx8XytHiSPXAQrVxbhBwnSs",
  "key9": "55PCYcj6SLTCbP7DaUDN11iniK45J5dHd4ZFgfGnijL98PAq8u3SPWdG9JHCaaPSAtT1772kw5EsbZdVvJnC4h8L",
  "key10": "49yRim9URtTGvUEfnDp3p2E7wtDsHnP59aUMXKEU9UuwxT95njFnU1GVgLUZScBNS1gGmqoM1dgjsXcszDkMoRHa",
  "key11": "3pZAHuRysPfCYg9Y6WcqSapcsbmpti5EeHhbmZgb5FdhHeuxTjg4qGxTy7RVnHJdGNhsKTneAck2Hh4SKqboDuAu",
  "key12": "5NC5CXTowTCXQAJFgN2fDnj81m3aRNegfzj8d2zZoUQ8coxFHPH24YkSeqXdXGMFTF8pTN9ZqB56JxiZQWrunrmW",
  "key13": "5jG6jMEXAJy8fw9ySeYRRvvLTpZ672p9nPi1e5kBPo5HEaSJCwMxaPeDkWGUHJa43zHPEsE6e8yMDWefMUds8USf",
  "key14": "2fQiU5Ry8ubMHdVd3keCt9GpewzwXSLoFveQkpx3F8a5pGoSYPpa15G2Tyj4GcfhJVPKmDK9tAGE3hsAyZ6AaNUj",
  "key15": "2PDz2ez37TmT7QFwYAB5YcaqaKQycKrZt4S39q6i6Ttng5QDBYBvMDjvyN48GC1P3xj1fEAKqQzKE2qSYSyqqPS1",
  "key16": "cu8SBbDrLMYBk36yZ7cZknjbvG9XHcgdsoAaypNn8L1Rox5Wx2dtKBwEUppbiKt8CxyTRXXp5gRiK8YvRCiu5hv",
  "key17": "5bLmEJTjpCA9SE2aMczn22LgvMT6Hu1EwxTKCAuyeoj8pyN17FyDPR1CWXxZRhJ1XkNG9dkwBSvN34hVzxy8dYoc",
  "key18": "3ajJuZASUi6PQ5CREYoD5PCfiugp6M8d3tuvqwqWYbXymK6JGyqFrLfA9pM8PG28fhPyZtPivpB2t4vv9rgok3Dj",
  "key19": "4MS5jxyaFZYoQDdkhZBf3Bia3Ln79VqH96n6VmBzeH4TbRkhqpfkLbgWUs1b912Qzkzkxjft1AB9vsaxqAssfjBZ",
  "key20": "5WEgmYbCnqokHov7DRH4CmuPvKEtiZi3Lc9u4w3k3zeyEbzbRuQW7EavtGHukJNvWyfNga2JuGdTzzxXzyYMFgXT",
  "key21": "2xzPp6Vdoeap981hZFtwMaK926NwmFbvTd4RWbmXuqRuwiBkomNAsoBPhmFyzkrAVyBgMkShXyNtiNctjeFjZeoG",
  "key22": "5RsShqZ2rUN8HEk15qQHwbvt6Lk9vrYoGfsunUBUHgP6cXexVbaR7RvJEUjmtcmadS6v5rLW6uoZ2rHuhhYGXzaR",
  "key23": "3VHYyGVEEdWdAYtTRNceXjPWfft19h4yM8jPYxSyNtxWukf1Q6fPMxN3mu4Fkq3HvbwSCMeY8x18Gf6QnGrTyML8",
  "key24": "46JAGc1bnugC6eJNsp6cVbuKE7MxSJTDNa4BZ2jLin6jNDXFioFwwvQKEnyPGUBCDPeCz67QHeFzmy1N6aRmkZ9B"
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
