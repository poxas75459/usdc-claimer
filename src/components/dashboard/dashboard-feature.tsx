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
    "4jk6Cp3YyXgaBggef69ncd1zEFCubdCtn19r7Tw8jzNSbQdqZEYXPdZS3YtQoxrKhK2ezjoDfvkyMDYQsr6T7yAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vwhhWFgMbNVg1yozk987GCNXnyNwzDUoqEx1VBqBbuBq6Saej98mrDTpC9BDktqv1G3AzuUKnzrYJEkejEUMk6",
  "key1": "6YgEtAU1LEmPSKqrULjaJrw61jymQygtLLrMSbQQdzdA21nLd4eFsTZPuaWYpxqZhL4ErZ5M5fXR2mDLZtmrHUW",
  "key2": "2hinG3Zseon4j8Z7YrZKs3Ce4VXYdt6GfsxCXVah77QvPZ8TrNETTXJZm6ims1sXjKY8GdpsgpdvQykvk8dvAJ63",
  "key3": "2t3nBsGLrt16PowDj1ZS89nWvHoHK8pqabVtVi3M2YyCcME3aZpqwv5Khfu1j5ywap5pLahD1o5vbeL8LnP5esFQ",
  "key4": "2bCKh2yH5ZdKwykizQ55xxK4CoDi3UxURhUdo7w3rwppPszpcdrXcU5xKbTFXPWhxRVGxhAtocS8tKHJsPJqFJhJ",
  "key5": "4n7vintB2v5U3E1mKoCGhhnjvDy9CRHzzbLczct3weTzv46q4FgxwUmeiGmQPNQNb5WeP8Kd1cXqeJzoTGysxqSw",
  "key6": "2bEvWiugBrHQPUq29De2kgT7bHRxVrCroGTJxwvVHRUwF4HuvKXZmrq7HQPx6FukA6cjQePVrdhoxvaedmZ4njow",
  "key7": "3sPFzXj6Zj3MSoVdrqqfgpbiKZ3kc62eJ2nCqYGoRCwF5xHM1bSnVHZ8uV6UV27bBJGu88jUjzVb27B7LAmVcmfW",
  "key8": "344BFUxpB4fcNuSEozE8Lx6c9zFjvRppRCdR4SNM998zvdpdgk8wdpWotryZHxunJXNZ2Kx9oty2EgB6q9BTHH1r",
  "key9": "2U134WJp5xFk1UNJzC5WbXEsnZM6LD8hoGuxcLNZa4eCngyX38WRWRghLttofLvkMEwXnfHSZqPiSJTymuimxKwi",
  "key10": "5wBskfCm5kWNsMT8NVaY2uYCs2gHPmvYYwNCLEmP8DvRcGpv5Fqh2wFJEeQfJ8iKZMvP3zv6FLSgzmrpVMSNK7Wu",
  "key11": "4MZHeCDPaAkprwiNMZd8QSpkyBEqNKgqmAuR7j1cyyFPyvRGh3FPErwAnfzksDoRigsX3FMhwvsoFiUaD5n95YZW",
  "key12": "5XqYgYkVDeeoHyjTL6nWpRTsmJFujh7PJ8eUNgFR8Xzcby6Kv1nouCD7B7nCz8mEoBuW13F5xQk3qXau5T37dttA",
  "key13": "2oPUPp2NWpemkhSBWTQQZZgfqDnZPJPnUYZJjcjb7s1mNoYoaxoypSEjkhFDHfT26LdSgWLGcZfT1Nfbh5JMDZbL",
  "key14": "6RudxoZz2DHN7SU487ZMa6E55zTmnQdpnQKdmsbo2pPUkMYWcJnfsHfaids32KVWxz77QehSeE2HUApwuFqigcp",
  "key15": "EiQoKSVogZs5GeZ6d8xnRsJ2BXScbKUqeMuZ8yXJcqKSAxhGDz8afP2NiBqfbFGmnvd1zA6z7gY9kmB2UBxy3Pa",
  "key16": "2bQTCtKfciJ5Z6a6SV3WLApmBMzUMyrP4beXWvPyPEWULco7pFJEgQhrpdbNp4b2DCwYzFpkjcrrwSpzowpM1cMy",
  "key17": "4Be5KdecxMMstjgA3jo5TSYtdJgYJSH2QfAqkiakFxZpn1ywC3E1Ju4jzc6aqFE8EV2pUnMF7kMhCNqhvCKqvSpA",
  "key18": "rvzW2NNJJBViyWtRHFWZmkTEbF2hhEHDrJWuKmAQo2qbwBjuEuAECPUy6QkYR4mME3pHwgrta4zMKbBj3hTvY1v",
  "key19": "3WSzxDQCj1QHT4N1GkLBt34bcAQK6LfaJ7ERhqhh8T34qU9eWVs2k8dyDeGJnu97pmBVSRX2YF3hEroqdKccjrKH",
  "key20": "2csfwHGzXipAQKJzycydzNaLXmk5CiqDRdnzT13MvQqYbKiQCcKJmn5feWE8zbSMH8EGnDDD1Nn7Fpst1uatSkzJ",
  "key21": "2BHZcDhs2ciSHU2AZJvHn8uw3UcgHysss1wULvanVrK51Viq5G1torx6bqyBDCYaFg68LDHNZ2avo4ozviskamRX",
  "key22": "22E88h9gfdQupFb5vECQJpGvgeffEnYSbJTpGViveFGVJ4c9sumxBwZMRrH1obVagRs4gGGG9zDouhp8D18DVxnY",
  "key23": "DJDg2tHp5WrveaoWFjqYNeBxRZ2zPbNs68YP7JYuPDsFZUK1KmohLMH29KzS3Rk8s1eXoSm7VF7Yajd3J6Um64a",
  "key24": "6333tP33BxCdgYYVB8V6XU5ECLWWUysDuox8SXvKpxHTh5LVYXcx4cRvtbRTyxjW6nTXzhrhteArYcNyW8wVrWrX",
  "key25": "qfQko96iumW267KX4FW51ZiPYVaE7DPzsmxs8YZDQuW3iaYd9vgpL9E8XmQ6ZPF6sEunCdRBSb7cpUsqKYFWjRw",
  "key26": "2aNs7Com4YkzspoykR6DzuNwfrTRmVGuCC6dCAGstffdeSkvAb7psWrjHnreCYrfRmuuABtgT3SkaaR2Cx84CD8w",
  "key27": "2GAesHraxhmmLDxVFcGPGuNVnZckMxrXHcgwte8bqeppbPpvc7xHSYGoGcHRwuoAdxqbbgvmDmUAsRV4wxKqZBWQ",
  "key28": "47NXfQeVAsNQnqmQfdtSCK9HxZ7TPyckuLMKPAQBoXmYofbJ5pRyVexsz2EBvABRBRrByGGUReXoiuJKoYi7bzvv",
  "key29": "5kvw3oRErrnykeBXohY1XBMTfoK9mWct2Me4Pu2fcVfYKtAgG91q9Y7MnN6U4jH7waQSH3Km6PRgXf6172HxVMtc"
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
