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
    "4YvYqgkF8B6dfhxgyBZ6D3JhcNw78JK9aDbn2VeHQw8v5tSo3T3yTMzdyUpUVv5KVWpFZZUjDa7M631C8btVLuLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g5U1oqyyyMYgvekKpcEoZ6MQMdBm9PfpVykKaZCG6GSKzTozqLra1HTi9mnrRSfLoP9JQo2bN1c9RtFQfKTTHPp",
  "key1": "29GTtmctw7agivxjvx25Akw3y5HS2UF1wv4RrgVe7yefCiDsA2GWcYA47XEpVGk5RteER9jyHGzduzTGPC6eVroG",
  "key2": "4N3SAFe5HKRkVEU3mBKGQ5N823aP8z9G8gRuT6ea4NRNCKCWe3LepuZiC64YQpZBxNkTHajCseePavpFcjkYz4px",
  "key3": "5tdeuo4Pbqg9HsoXHp4xYNpfeP4XRioJM4jy9uy9iLd1uE5tSMUqCWLtZ2HEdMrJVZrRENGsh7EB22ap6uUJ6bfY",
  "key4": "iMxModUVtnKxvZLQrgwGC34ApcwkMhrMwAsRPV5A7PkACB5xQ4ddc2bJjffDajGpd8tXNiRzNC5LWaLZFxRy2eA",
  "key5": "SiCAtDpuDggZZ99wMTne5J9cKFUgY9Mc1UHaUXcGF6793CMWpeRKn98rPJyCuetK1wyvSFsosrJuyKt15ubZrZK",
  "key6": "2nEVKvRJspV5YE17GGRr8XtsDbbM6LHLq3dsaQKgNCSZBfXsHiwnrXL3dhZoKrsCf1dg1xCYibuiQRwWzTjxfTox",
  "key7": "5DiEZVk7GiCBoJCkDvXmFnvoHowwhXZvcUxonPzazMrVshpi7mmeEgXQNKLGLgJn7QBjFz8DBC7t2JUirdF3kNEd",
  "key8": "2uRs6gmb3DXwe2TcDmsR22uyQ7KdeKXGX8eSZCZkq9eHyLF2Rf3u4PFuZgqgJQyKVk7eUpuZdnCNkdMkKVpQcHHy",
  "key9": "5Kh1WohK26Xs7wdhsw5SDWYCNw3bj1Kc7mnDJDVRc4qTYoRCVKeqZSkNVnpXKFzPfuXxGvPju4Ks5N8CHMgJDYou",
  "key10": "4RJkPBcMjrekGD6C64XgzLgHx1cdsjxPhr68zzgnZ5NuqtQuDJeXnmn34YxdGvebTThHninKRfvfsudwsKkdpp7B",
  "key11": "4Ahi3zSG8ysa4NGfbnvGTKXPEskyThNEQzHz8pbWDq6sWsCwguddPNDecdFv97NsrgbDqDTMThndfxzakhWNiBF9",
  "key12": "3wL9zuF6xu7uQoG842SKy72DPrEZgHyMGHeXa82Pt4xKq4Gi3REgkUPEGuMxiVmrubxdkas8FvmQZh7VZKnZij1q",
  "key13": "2R1o6SgQNKyR17BJteJGECajoCPDJrVBHFWJn8ZdLshYmMzFexKWH8gM6m1SFGK52L8tzfTojGzhjzETEFVdyTVX",
  "key14": "52aWgHzbWM6SvysUg38Dw543TGdkawMPfUndVNsB9py8KcZSmXFo7SH6zV1tH5uuFrsKVGPBpv15m2PkPxiJnnwo",
  "key15": "2kfSsXz6rmycJymn8sdwx1p5tC48byaGBzbSCXeS5vTuFypLC4cbtq5uEZs5J7o4Ce8WCQzAogQtbFGzR6G4vUkN",
  "key16": "2ciHyF68eiiHcRbD5Mw5WdQ7RBV8gAb8KMNNtD5TKAYYAAxTnYEjARfUrmvDEPKRVpiFVJshgcWddYb5rkKeyjBw",
  "key17": "37b1tCi1VG6b3sfbnfEk88bBocbq6N1HtFvcKRuAZVvB177ASWTSnB6PjN2Ze1JDQc8sGYyJ4fTAPE657r2v1A75",
  "key18": "24DPYwz5SzRFSJXt7f2q856G1ta4aXcRixTdhuXtneT4XL46wH4CgJpKXnHvn3degrA7RoxpfVFV3kcHAnP1UNqa",
  "key19": "Rmsy2Kdg2fft8tbbkK9bASyMBPdBopSwcaPYFLudxx4BpQEDkgXSoRjNJztqATZVuEE3pWuAdYAEuwPKuijafRh",
  "key20": "2vLejv49vbHEKjTxY77JQQNi8tuX9HaU1kS7aJcu9UhhZuENrUEwErwFure5AXFKtJBokGzbSgg6XhyfZJtrWkQd",
  "key21": "3XWVZMp8GKYNEtbGqgM3MQbsZDaLHh6bQtcx5mi4WyM9E5aWFz6o4J4iB7ykjJRPkYxxG5BKkReyjDckW1Z9QQxL",
  "key22": "4xxgBabjqA1JyrYpX7SA3hdenHHXvPfsNR4syAybMYoVH7mxMvuSjTrd8pcWHoKi9KEYJpVu4V6PBMCFw8yKawNX",
  "key23": "5apSVs1hdV2Dfa9B1gED2xELUims6PTc9WENf7XStTmq7xwcFo2fXN6YvXbLLKsucL89LEeqiVZvev5ArkAL9wUH",
  "key24": "3xJqKMiLWdkJdgQ6ADYt9LLCb9LUtYYKLpwTDugSwFXsxGXrQFga4tini2k9RWbEiUKbyp9f4LmjLb2k62M344JK",
  "key25": "4ovFMz97bSEtU9TCMk82arJm4ANvnZKbYtRYksbwn57Hc4yCh4yBLL7gyNiSwtR26D1H2m8uDPgNecWctHmg2ZVx",
  "key26": "3HA9gqPAvsLZRys6Tpk5WqABLH9xb9kXd9wdgqxBWBLv6b2eDuMwk3j2h7waycFCNFNGkSskgDi9Mx38u4qeVSUG",
  "key27": "5qW4P2heqSgqJ52VpSKaRo8SRzui3fbR7j7PisfgGgiLRZe4Enu4wixUwLUSrYVP5yzAbUsgJH2fCZHiGT69J5p6",
  "key28": "67G2S8g6zYywj1CtiBbk576n3yfMzgxim7Xzj6oTmDEysraDj1L3Wje7S5CZFn5sdD8KeL6G2PDQeY2ogrthEdK4",
  "key29": "4u2jKJYi4qUNqNK9mZxmBD8DWSpujwq5ySjt3kzvDh8oNSx3cruuaEoE4yeQxzucfYdR91R5TUjxU2t8A1QfqEXY"
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
