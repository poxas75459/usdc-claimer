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
    "4dZvNDxhVxQuJNQvfTVrHoXQvGrAH1MFTNy438KnbguzR1gSGcwC1Y5noqDh8RWamXDSm6YKekuSkqrzRcZJyrZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TDCZRkCJFLeSzGXkSXDaMD1wMTo6Kfe5D3kH9enCqsK8KdbJMMyizi1dDPqumELfXqvm1BwDpJyi3ohwgQXM5k2",
  "key1": "4HpnK75tUNF5tN4HyDkmp3y89CXJqpZQ8MCyuLjoRPvWZhi1AwqKZTov458CGfLtF2KnMRF6mnjhXkK39rtmPzya",
  "key2": "7meDzheAaU9vcY13P9mF7uo8C9f4kQwb8LbxU5SHeyLLiTHeq89FunBZdBYFj44SNjWWNNPhZcpNvtxwgv6u4xP",
  "key3": "2zigWtv71V4SF5GHwCwAkXRvnzf9ub2fjWMxZiRp7TXrZFHNeyjZWkNa4uesTWQ4FzNfuasimjjYgC6LkRew2vqM",
  "key4": "tUYaR3md9NgXMTTWXYKrwyJAKHBjWkbQWcqjAa87r4G7rjQQCweuk9GKPThBow9wgjBXJMaiwg6ZMw7oRRaXbU4",
  "key5": "5u3WwebERkwfasHdhr87Bqb3tZeuHoTQa6XkgPuW6qT5WLSPd9v6iEUtVowPM7jRGioeipPVM8BPAgj5KzxoQBNv",
  "key6": "e5XNqMCyuCYfQwemSefmtTFgnTRXeFS7KQS7ujCyyqgX8Dph1fJRLDHcuhRN2K2Tn8gk4VGhQxTqQDCGwk8ujgg",
  "key7": "31nyFYs6omrvVJxUsFtTuoP62cMhkNiEugKvou5rVRry6F4h3gVVcMVdegvUAmQrjqQyF5AZFrYhyH9z8k4uNBJH",
  "key8": "3eRH18hupdagLCgk1vAmq6FDnJsWDxT99L1fY4kPsBDpgqZASWEaben87jj8EH1yZd7neZqAhGr3k8oaApeh4hdh",
  "key9": "4bPBpuy2dLf9QKcwMi9dhWKLZRkmTkTRyMBVfkwyf78xfCFo7LSGjffNWNgVRXJ5Z4FoM7f95xfZ1WV4DXwJ7an1",
  "key10": "Axesw6MbrQuSy7asmDtp4BbJXQsG5DebggrRos9ZWDqiTgoSQuJYfZYPXsN29FgeHRn16DbGh954iUZJ1jr48VD",
  "key11": "3pimTrMtB9qSMpB2MaVNfPgz8DP8bYz9jUZidJRWuxPo7ozfG7Yakc1xiZvC1KTpokkEFVtzKj48AnP16kTewzrB",
  "key12": "5zzKyeP6mP877r566Z3FFnmcVoKTRTL828Y4oYfTZrzL9FdmeDB6ytbLJuJ7RUyppyKCQQGeRtYJ11qPqMGRiLpD",
  "key13": "5mwysumMRAjA2qh8NNTydnijScaGStfoTZjFfXzXatt8qyE48izegYigHFAmUxjjuBnAB1WfAviM1jUC7Pcnbjvi",
  "key14": "5a12gKAN3Q5NqKJ5nfq3L5zLAmhGh8g1Hp3Z8oWB925mj199DGNYHnMyQa5E1ewC3oT9T77juMcyjebiAYCdiKQd",
  "key15": "34TrgkBDFzyjevmb8ehEJJaQkE6yoFEHCBgjHT1XYs9GYn1qxMh7biPNFt88mrMojXzEvyEwyRgnz7W8oMTmfxDg",
  "key16": "5CUtz8puKpuKoK1axW4NfPv1TLgzjoRiSjcjjgcpy5q6YDpoufCd1okTr5vac6rpiQLNUWkDQBxwd3LTMWd2osEo",
  "key17": "2CQqN5ZvDPzXecEHqEmmWsiy3d3kUg1U2W51DdMfYWptKfKixKEWKMtKT5qJS9MLAUzJ5mP437X2oNATW7GPTV8S",
  "key18": "2Mc8DqyE2qhvAxCJLXjcdzXcdpUCmhW8d5bJ2RP2jMTBqBPnwzdugUpocxdRwZ18W6ZZpcGwH7BA2Gm6eZbKdEY3",
  "key19": "r7CWYPQiANduLED3K5KCoMMJeVdnoHNB9odk52XsraVD9UBWo7vvB2FHYucKA2hgLgZxD3fLULv34Yc9y5iqXF7",
  "key20": "3YwfoaXFUWDnCvqMyPBRwJtUp3fsHiLMyxgKMzyF5TTXAsMED4vdhSmPT4PaFEoRnC8WuThNoZKPo1vvnKdLjenC",
  "key21": "3BDr5jKiX6ocqnFXAS4zNW9iDjYESMzfBXpD2D9C1MZTVAiHGQsdVFM9HJSCfE4UAkJ7mCGuozZdt1Qf8LyTibxF",
  "key22": "3ojZhvaXzV3fnUHFUR3KkZdNa1h1z59DKfBc45yF5mQRMXwMS8zkpgsqTEx2scKmHmKA8rvk5yNhkGmpYqdF4MvD",
  "key23": "2fUduGjt5KCszrdWdKa5bR5xSCxyJArWtHD6f7J6bBmot3hQzqeXLoxeH6iT3Uskx5fuAHPJ4iJR8ZwKom756VpD",
  "key24": "3dHpB8ugddHJe5u38MFwHmnUnJfNwFJw1Yh8RzbNGsPvp2MJj35Bt9Qg9KVMFDPNVSmhz8cVAGX1h3Q6F6QkzVpW",
  "key25": "2LWoErZpW5Psr8PxCdCdusg5UCDaY8QpfMePGBHHNfYNi86kQdTZWN3ApArWB24dwB6NYbX6ebApbyZwqqLaxrhy",
  "key26": "5sfxiDozvpvGdeAAguFdEva6scLYotfLVsFFjXTQLyxLSuLeuBBfrNZCzLywcJKMmgqVZHF4psgNUTHYh3tdvBob",
  "key27": "5igRxK3hH6cxdDxp9cNXLDAzX4MvePAGXC5bCHyiiCohVrdrJxnRE5JCqsKgYmhCgpRr1cWxhDchs8YwDru6NjJP",
  "key28": "31M2zFqYKRia9WD41aB1gZPGk9CUKFNzBCPaM4sPKJL6NDfzg5QNSRHUHavmcucnnU3nUMMYpL1yUEzNVxKYBHMa",
  "key29": "5poAptwB3xFjj9N2bxNepGVTxNkFx6X6ygLBcZH8JCY6Nb3anX8Mxj2nXPfdwycmYMbWDQnCiGZZDjjywY3roD7q",
  "key30": "22wJx2Wy2KLsX4yttbheHzgWCPvi5xujHWbvVGVnXkziX3KjS4yQiQFfH662NUAH8WFqpk2qfVe4xeYK9s6zDt9s",
  "key31": "4ZYzF2AiPDNsNsgm4baXUNEYWeNQRh7zFdtv4LBBpaxcjKeemJfDdm64xCxrjbKXF6ZpaKjrs8svRAuE9ATTotNn",
  "key32": "3azQu1ZYXyJEbVGbTtAuHTnLL1VcwCCjFc1BSySWZMHPKhvxZ4vq9PMxHRZ5VdmUyDFNQgjVSNJmqaf4kW989E2p",
  "key33": "2NcBJfn37w6vMyAt5emQ3pNTV6D4UJtk23a51NNyjHxtFHektqfCXhniV5TET5dpioexJyLf2TM1dABCY91QD5bg",
  "key34": "362LtAdn16nsDbeidzXKxHXpDVCvRKGyZ4Pe4RBXgKvfPu8AZ2ab2pmeWbnhgjnnUQHU6AkAq6ooPRLUnJ9YwDZS",
  "key35": "4TswCAgkvzb6VbQAXRdCyd3oXnHWkS1gSGkPn6Pm5EyTx1xqJJ1RmCY8txYT4QATpXkR8ahCdhRPj92f3XPoDrea",
  "key36": "5wKq4AAMMPXyGcpa2RLaXTPS9r3QxSGiRGDAdPmU4BYrSbVMGP6WRsGuQVXH1X8DnHX8vpynQXQNEqqD24yzwDTH",
  "key37": "5xnoJaqgkj1HNNWEMp9y8fAhNyzn9k5tGfpwESqyLC75oxQFSMTdDRvKAYXhWfbLmSncHKm7yJzfvGtAgHK899P4",
  "key38": "4vPKw1ToLdLu8J2SBe4HBXipgu1hErdj3qduahV5JcvHBJmjPYJA3MVbftp76r528x2pkEP42AZuNHJQEXRrJt5o",
  "key39": "42TvuAK8KMhdiKxv2aQoKYEAxno4FuhSXZ1ZANN9YEkvuwxBiYrtX7aVGNvCJkYMUrUj51s4eDNZsJyq7EGvYEnK",
  "key40": "3Xndhxb2iq2y9qCnoNUw4bAPQGESp3QudKx3BTrs9NhLw36FDHmW4zp1AwDRTMbtwK12GYKr5zwRpd2P6keyesRQ",
  "key41": "44yoQ3sE36fDrDME3kydmZ4F6Xd8qrvYe5rX2MVeZ4FY7kvJVjQygtgmRRWi7dEFsjdmGHKTTCkjFdc55pu4kkEN",
  "key42": "4QgGnwvPTL36NtiEGiWUBgA6iBCBX3K7oZ9VWv9Dt5Mc2iDP35y6QetB4eWNWeMR3MupxtHMpGT8iUEHhXH6U3ni",
  "key43": "5TDwPH7CPG3jmnTazajvrHqEajBUi7J2V8FRMcHb23CJhrP3zTvt3kTHwL3XPrZzuURrpkgw1NwLBns3n6ZgTCev",
  "key44": "4bjjmAerjfAaiRqzwXc7U22dfphkVDgQ3brjkY4VDfVQa6oZZTdv8uiuMfte2qcYv2svvyRSFbR4eXMtoeu7VHgm",
  "key45": "5DfFjTxyjyiqMMSzr3PkEJCG7KkHPwjzEuQsAzVBZ1ZYjCF1ueDVCf33Hpyp23nTQ88Di17WjSdZSFbjg5kyEZ2v"
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
