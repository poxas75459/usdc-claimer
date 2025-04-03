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
    "jP6NjnSN3NafgnVxMhbi7G5stpDnNnbmSV16d6bcsRuu9PgpyFfEvNpGifKLQUzgEGiARqJqLNyBoG44p2jNXiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47qfvsjUvcDwcWxc4xmjDNLzKwUUyvtyASWB16NiKri7Dodq4pAC5uG9dDLejQjYVsMfcpASqaR7enNBbPdnRBbq",
  "key1": "3nPUquCuhRHUiF9nagyMVZo65ExiheWXrecjENJSoRAc9gbN7Coh8omd64RnkyyZG57WHFrHudMwFt2LNq6gAaM2",
  "key2": "3A7ByTR9nqqXgAdHpWF4VEdfkcFjPsYig87T6kTWEWYY6Kcf64z3MJts8exmxV7tXuMeNS52o3bQhdm9Wc16bSNR",
  "key3": "5TeATkEMZAgCKL1D8gmugcQmFH4BGoYrcTfmRTotGHyqVhtXSNdgQn3uQ5KK8ndDu5XAvBqkAHTE6Tf38gYyVZqE",
  "key4": "2QYHMyCkV3JnL1je5wTNj9CzWWEvJ76aBCDqNrmLMUYctzXEmmdHmz5qaBHgWcpnM49XUMVSMk4qwRj95AQRvW7p",
  "key5": "5SNv559bfT2y9QnwrQPFFHE5iTbMs1B21UGAiCLB5U4jHXPgojyA4BPCX7nfSqr8mJRir8tVNrE5hRCLDwHiR3wb",
  "key6": "HbHAj1K8Gwuj29hnymVDWikMPs2845o7YqxAsvhJ6qyGeyyVwuXci8GdDmX6w8NS8ypNeUDz2pzC3hHc5CTb7G7",
  "key7": "2cRuESQPAhXDp3Q45KBgAc7ForLMGYFijhcBaWQHLgwtHRgZvWJrBKJQMtTMTZXtfwyr4Hp1uM3Ya9UzfQP5wx6s",
  "key8": "7CYi2ptWLyWuiW2eg4H8ycrzraJW2t8ViJeyzAoA4eCAi56w2dCcbedQ7SRfJvVsQRaDEmsJZT9w9AKDqHM9i86",
  "key9": "4XfWs4tPdbUs7SxM2vnmVBiLhUZRuUPhJRf4eUD6hTmNeyX9XCZfJxNUvJugWKBWQTuxhPdQZmdAwst8CGqb3y9Q",
  "key10": "2UCW59ANvB2jxMjpjKMUarBxvGv5yjCTyrW92Qu6zSx86Lyz1sJ8PwWW14jmBLNCtv8snPauMpEBvSNghdQvxwbH",
  "key11": "2A4GPin6SiJtzwMrftmc4jL1yyodGjDbrDhV1tzHCBQ3BH4VtUua4ppDY2st82b4fb35zvxPs2nxKjwxcLdUzvjY",
  "key12": "2JbQMxaFxFWnDPrFwho2ppxweyeSzYEkyj4TG1jQZnzpnW9tnuCPpxYKjoKxEzc5p2FWdN9a3MGWgD2bG5WSZs3A",
  "key13": "4LEqDuCKh6VWMRkkUcyYvwKBfWt5u4sSZ7fSsmbzvwTJH3GTbT4346VboFjcch2V3SsETMe2ypGZTYfTzDRScDvQ",
  "key14": "emvjNAvHidEpnFinppMgyTzxSpcASontCAf4HkxebEgFBgdQFtkJJc4AV27bB3jAestZW4cuuAL8Qb4o9wRVrmt",
  "key15": "4ELVWpqmwTcNHZ85gCUWEog1LMWhNWQ2zzxRoEYFWijHazEmEL4j1zz5m3iVN5KMFhAgNn4VsgFyn3QcxNCds9tH",
  "key16": "5zsRMxWX1om1FfDvUo7T3sqQ1KLXoeo1qievnUm2Wffo1LHWuj37HDk4Skp92LtRvRnDjBKPy2pzFm716iVhTC5r",
  "key17": "xzRQMHk3SyXoTuJDTQnAFA4Eyw5LTy7WNSLEe2rQKVXm9RWLqp4PUb9tBBZYJCsDssjyWxzFQceSfSBzBum7DST",
  "key18": "2LePMG1eVS3suDLt16KDy9KSxtnCYxw523rzhwZztQKuEx6znsB3GibeKEw19P7LdNzPJgZpjoWTYij3XPdTLRJ5",
  "key19": "LQtB4KKdPRUQj4P7EBJeC4U32bQNtM7Hy4i9NaCwBS4S7dZuXL93DnMuh3LR83RgRqXWsdyXFPZufG6T4mUi1Y5",
  "key20": "2Md2bWBVPyMFCY5uL9cxi6ZAH3tQBDokPDoY7oPzkVzPsY5mbiCrJm9bR9idqfYyQ8EFdxu8zZoZiduwvN3y2NVh",
  "key21": "2bF1kcCr3ZdkWkzKoVuRcU1qbWVZyexoHEjD74aPERb5HLNBn5apRmBLf9yrSLTJHFEua3NUT2BnvL8JEww7L1iQ",
  "key22": "4xwmELUXQENVnnKEHbpwEBCeovBUVEXKRoqZtcZFY2kfVFGsjH9JjSdRzpdZaJ7HbeiF2SybicvXhBRW2wB1U8mM",
  "key23": "2sJSoAUDbWwXMCMithWGBsmdu2yctRGoUjyghTrSJ8uxnswAnFWU3ApvxCmR3zAJYce6gWGiUniojfzXNsQ7DmTg",
  "key24": "4fJpstAfJxzkV5rYQhCGdKoHrc8y5yYL1kC4yvKTXgXTWif9qoc41ejwwvRKegAT5kDovUA4Lo7UZHmjVESdFsYA",
  "key25": "5pun4vfAupiiMU4Urw7v9o5PwEbecggz19Mc42ggUYVMdQtYT7UJKhBSdSHPhMJtPi8sh4H4gzEYwzFMREkoiUuJ",
  "key26": "4s1o6cgcbPz4mLh9pHwcBF4HcAykVRUGBJLcbakGhwNKxK6imZAPoEhBnu5tNcNGUqYrAPdKV7VAZSgkdRrAmJG4",
  "key27": "63WtnBvdfNexRnnSzavSUZqRC8ydgDR326MRZrv97kJfF1N64YpK9SYsJiEAXjmZmseyxmmxEUguBZVGgKExUDhD",
  "key28": "fiP8LdtvpNGgudjQxDW56Mgx6s48oicjq8RTdiuavK6kyLkracZaH2Z2iK1mFvKR5bWATdgAWenJzGFg3YjNzXx",
  "key29": "pWsRGrzyoDMrRNF8y8kQnpT3AxBwBmKfzMhZq7M3gMdtXenYErcEJXgj9fMbU4eycAk9tK53aNjbBJyWkhVnq7u",
  "key30": "N5nFfnPeYYrC7gHPcd2wJPkLsepY568EmDqTNRKGFwZRJVPWk64FcUpSAZSqqxgMFkjU1tWSFPXdi3RGqhZTurd",
  "key31": "4Z5QisR8cR1dwGm5tQm7Tmkt2gBqA4M46w3tJofYHE6zmbKdf5YGMCJsgSQv9H6aug2K4PCM4YHFVbtVHz4vDn29",
  "key32": "ceEheLkLCYrbQxeSHMSksKQvPeddG84YxZFzmn5CXXKXxdSg5BWkwtqbAZA22gGYiMnPjxnGtzyCnQ1RF2KANzD",
  "key33": "46edVrG9swXrFoVH7M4xJbVrAyUHo1DhvWvHzsPKxneY7onBmcbrXH1TCRHNKh45hzu4z6Qxs37bM9a1NzUW6UaG",
  "key34": "55WxeW2Kyrj6d5ggA7TF88C2eiWZdD9cDNrTuAkvDPckCEuLZ9xFmXob1sBNJZAQoifocjCyLW5v8KAVqwg3mFSS",
  "key35": "5ggKPuiKrrWZGeg3wdfvg8dNgD6aZvjbv4k6M52zzxtkPWL1KAasJzD2HrTuu8g8XVi7CpJTmSippFQuy2KZLddE"
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
