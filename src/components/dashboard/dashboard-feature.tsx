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
    "3twXe1LT6rFoogT6pP44mh8iasXqNefSZumXUAewfju9NEKCviy8ju8TDYecEJptz6DzmNJm9ND9oiB74nV2pkns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rWY8fPzLuA9jMCyMC9KwfPJeBveCxhuEuE8KpKbAteTjpkVKrcqLNfSH8Ebdheyad2bjEBjd4bsFVCvovPBWFT1",
  "key1": "64UaWw6MJHzwUPREjfwPfXKKKTALjFDP5jVYo8mSXxuh3ATR7Aur6ttrPVAg93ut2RbsCf1KHGV8v5aQ7hwUxhyx",
  "key2": "3NBesbH7A42DyzUq6kSQNsmba4qXAfZcjPqcZWkLDXEADxuaBBQT7e1vqvR1qouTocJJ7N7iEqoiJ2BJkR61vFxG",
  "key3": "Zz6tAorDPeSL2D6xqv8FTJw7cVnFmqRSrtL1sden8rJY5TBgKVL5apA1SuQq4c4hcN2mdYyBnzBUo9yArf38uSW",
  "key4": "3rHoxSU1Vvu9bEnfcGd8CGbgABbb2gPPxwNo4v6wdED3sQzPMoubYoB4umbCknF71YHLegwngTYpZqJF5ewR3ANp",
  "key5": "5jNFBta31Zb32Rudqr4v96Hd5yWLqBagqMWTs7amwZrChtya9hE44Rvx9JfxCZxSfVXfwvkUEzCnKTTVzZcqkUh3",
  "key6": "64S83HzSvJBxsR6vsJK9n6hrCSiL7P6WTLrowKb9iBHy9kkeMyt6sKuoQLgaH3juCz4Nd8Zeo5D1PpsLUAHcqzb",
  "key7": "5a5x9zLEwU5fDwDrJtQDtyZKFVBkXqsCck6HygAnLX3HLAqv7iYBDF5tKi76dAxtK6fY8CCwL9iEUrdurQhsp9Cw",
  "key8": "65pRkGyzJUEF6vK6SsPVS8ZS5U1wXXc7Tes7YMYyU4yTmQfj9eFvRFYj6KiaVS3MGvord93A2TTVLniSacP3wWrP",
  "key9": "5MBuyGTwRatVG1zp4XDpveHJB5QtayRTagQdKmTua4m55REiLfK7WavB12zvX64Qk6B4AHRhmHo7N9FtEQ1geDqh",
  "key10": "2WpHHsn8mR4y2Twj6f7k718DwFzhPxbcBjZU1mEUk4GdwQhYYkHSTAjiDo2wAP5quw8hFXV7qhx6tRHevbzk6bwU",
  "key11": "2Vu16dRk2WRHiBpMVseqnyjyfMG8NaPzb5o9dusuJLtNPhh5tuuzcK3xrdT83mJa7azgiGJKzyHtxZqC5b49HbH6",
  "key12": "5ahTubXVPMzbdfZoSvELDyXyUrwfZkAZfMEq8DMum7ef4YMz6PGHPWaRGUtDWXUBMfFX4tk8QDPWiR4qoywdkvND",
  "key13": "3XMcBxXwofHsW53bMtLFTeH3DqLxAwcRucsEbEG9STLoQVZKTf6qHszgBiHE3uTQM83otghkpsW7LRDmCRN6LRMx",
  "key14": "3gJUR7rRCiFpq2XGxKTN9kjiNGLN7N4g1nCwY2GmQLtpZdtnd76e4GMRc4g2Ne6ad6rZUxh2bfvZ3ULWFXsvhqgq",
  "key15": "2ddDmRwUaXa6rGYdYYWaatQb8dpPgScSEUDcaJ1j6ddpypY3YxtKaCeJ7T2QzL2eedvMvNrGbhhqQfAaq3LKE8JU",
  "key16": "4EJVL6AMyg47WtzKvahcTxGidFo6aekCxMffntN75boQRvHhY1YaBQsQfBr8t7Y9PCLuchkUkmJdt9VhXizopkZb",
  "key17": "5Rq2V1smKEjfrcpcqXmNEwdhrofFe9H1rWYWFmbyixQ24VRBQXE94tJTJDv6ovbuzujkTSjPuY23ZgJheADAkZwU",
  "key18": "461njFgzAiAxLqGHE3749aLYsKSGzjnG1NqAZ8dDE2atxqGH8Hkq68Y4CGY2fFtZHpK3pGfkwHBQT1E1QpJHgFRa",
  "key19": "2vyzNgf3y5kHzggdCEpBrNKFjrZnqUjW27rdTt4SLzHdo33c1SCfz9kWzQTMxYNcYjY5Ha1vymYwBTB6HpMvfiD9",
  "key20": "9N1AxAjxM7PnqynYikU7GjWtvrmXe2FPHw8xzsJtQebZjdohdAxhz3U4oaMSE6vv9ZNNLx4LmhDA2eiPB3CHZx2",
  "key21": "5Cq3ST72v5hRCU4EauG5428tRo4BzhoX4YeaUpYdmeYUKq59g4b5LUZLoUcdQ4nuEdcnMHSy5q2swBGF8DTtxEok",
  "key22": "GhZ5h3x6CoxvNsdRoe5V9DzMazQF25b8S37BP6RMh8hq1M1Ufht8MRSLh3tcG399ye3fSexfQVdVRKoVDttPdRw",
  "key23": "2sz1bLkbDUhz6i7PtEPnDmvEpGphg3CJQaWcqdaS5wLuPtX96FxbuizAmTmpUVZ5VfYarV5Xws5GCWbR5KtHQASC",
  "key24": "65Gnp5enhAXMuigrZ7yxWKC1bgJNSyqZr26PSnqwqRP9dtHXBaN9h5FvfC6LJHiSMBuXTd8WQRNao2HATGzsY63L",
  "key25": "4N539J4krSLLc6Nk2M6nVHg73BSpeydeGk27rtzohDXuVYnuyaT6DBNRiF3zf9fbNFZTVRGyXXj8EjU6YhA3g7K8",
  "key26": "uRrJ5be5qh8qN4pJ1aofkbQ5xrvYi2mBHbeKsgHGDDyfw1RE6WGGnqRB7WLDonE3zrMoPxHehcxrvNdddUpYuHe",
  "key27": "2qLkM9RaWcCg9EgA6oPhkxtRZMtba9ajf3ejmyvHG3SHfJxRrG6MgFLvuwzpFfnKQC1Ey9h3oyUVNuvZBGBkmYZx",
  "key28": "GR9SjnUNLdGYvdc6gXHeu8nFP51GWRsJmfj7J2PUvPgT3F1FtE4ujhqjjQHxGxgP74n6z31sYvAsUkuy7oCB2AK",
  "key29": "5QokG6JdjDNUwEgsVUQS7HULyNEH2HuZRjKZDfzyQq1YvoekgsBhqx2m6T7iV1Lobuf14tWP6XbjAMp7i17YXBLL",
  "key30": "4FA1B3LpsZatWYrHay8aqmMgHi2jV3cbNN2DYLqPdrXrpC9AhQQKfMfHy5KMAmjvEHyQUuWtXtQbZ7V11AutX3oJ",
  "key31": "664d88joJEnZdfC3972Bg6aw8r5xj6mC7ojXDxveLbL4LKKLf6uDPBqE98uV6L51CJKPhXLAPK7JDZ7jXjRH9vKS",
  "key32": "4h9zkBFtJExYdgBKFsuRDaSt295umSxDK6aH82LTJpKcrPLKTjRFVj1K3pt91DLX2HUFBBNvvY7eexkV2V6Ws8uc",
  "key33": "59GA6NzYd1FizMa5C9stCsiNCeewTZGFu1e4DAtD4wNLs3Ps1snVDZVWxZzJH44qGWK57UsJ4pwmtu47NSgmWevz",
  "key34": "5NvTByPsoe1v4TS3JwqxkBSQ8VZhyT86Vjz3L9o6czUFPJ8F2M3CdqwpzVgKxUiF4x8ATkmFt6VtBDQ16nPvuCES",
  "key35": "2dHUS9CuJ6iRuSFkrZ3FMcpAhWTPnh17tJmzZvM3GcjNNG2SMXT7xbFiadS2jSopdwyNYqYxYTLYURvmmtNYoqtS",
  "key36": "29tEnAzpvAVffXJnX8TtkhsmHSPR87Cg6URSjdFvJUcKDwZ123dtZujDzH58EVuCuvvHLxYDx6yoxhBc47qJj5R7",
  "key37": "5LQGUgMVupxzUBL7B5Gf3HaED6JZ7bpUGWdFZ8qjP8SnbuEePKcWysHDNEjJ9n4AuMepyYnqtAiBZvUAKucvM2XM",
  "key38": "2GkFLKWwyHbmgQdWXwVMZGf19jXHEDLcKe4M8VcokjiXYprBxv86K2ZvTER3XPjmD6iHnmKRFYFeoveKCPrnyac3",
  "key39": "5RaA6f6BB5p7CzkefmN8qkqq9zS432XBXtw7x4qQq6sLVBhpFS4edss16bJo4V5SnHUdJ9AkrBQK82bVQj4QMuSu",
  "key40": "4aGHcmCVg2gav92a3f8g3EhuGj7pK67ymyqQvA9GjpYwoSn6EC8r4qbSqZ62yVvrwbzAJbcUFhHo7wXPWCD5yBkD",
  "key41": "ueYXXpTyJ6Xs3NfJXiBkPqJm3sUf6zi5rkaaojqtLV5qDxi8QcScFDCmxZCVcJCriC1jWR1ghu1T5yqxZFxANPN",
  "key42": "4xAp2fohEiVU5FbH5UZUSLKTPxxd2onwqnCpf6pHTv4Gmre19rLFy8yiBNj5YGrHk1Yj249wM9kfMbhFCdJxn4Up"
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
