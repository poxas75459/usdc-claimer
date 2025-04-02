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
    "3wSxyaA7w6BgGZ3pqGW3GCZRrvVp4H1wWHaFP8rCq61qw1n5cuTyU6dqQyR2zVwxd7ssvLibYn4ZqYSTsfZbZQQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S9uVa3uhfmiSbhSvYoye69yNLf4arQrB2DynSTQ45HG6jAgRpDCwknLDEmeG4fjHYcSA3fsP3J5pVJZQDPthRjJ",
  "key1": "2Nyt39gSvmysKUEA5YG8HKqFrUFySptctXZudmWNibRXkd8PDcMJWACmWtAdXpnoiFUBX5LRoviis3ZVBRLicC2d",
  "key2": "2pzrRRswZveJdYvRVaG2X4FiRHCht6kiD3CYzQqWr9APWviJjyKxWj4tPx74WjabvJBivbxxs2eP3F6y2ZLmpnMY",
  "key3": "3hDhHiiNrGsFZrjKwP1XXpjisgHphB2nCgLpiqBp6UHfHi565b4THBw5Xh1nRyjATSMyRuwRC9GbSgmfeN8JVHuk",
  "key4": "Y5AXuejhhN9QK6RJYuzUg2P2UWfYFmhNCUthNMS3U1uaQcLRwyBxFmyZTuNjmSQ7oooTHWc7RFWuz83RWURtX2S",
  "key5": "3p8EohcfVJJBSxAxydq6QmJFLmGNNr3CrnZTqeWkRj2ptodvgwuGYztJtv1qNe5pRgpy4GRAKevh4LfcP3niLLmb",
  "key6": "5tE1efyLbtJU6MR3NbrNjqxELypiN2nw1qfW84w4eX6mgamSEXWZ4NyFZTd3jBibhYPhZ3q79eYHVCG6jiGKVRvE",
  "key7": "T1osXkqSssUQi268ahJWW5KZKJZT5rMA6xbKyTWQ1tKJ1wEM3tmyREDVCeHMFmK2uwf8zkVFjptx26SfvjGsKkg",
  "key8": "2nEdDwYnQ2HLiaRCeNvieAMweMxBY4icqa2ym9x69urPYaCv3Vbk6XssHNW7UKks59G5HjoRoAi48ULAvFN6LJau",
  "key9": "4hcfLdFFiAuMbMgUumCBqRoLQsWPvy4ug2Kvvbqeht563mbGMr3QW6KmnQN8voknLEJjUEcBKG2QvEfmc8SjTzR8",
  "key10": "4t5QkAF6ps1NoSyQ73HHsz8uis9RLvwY8huRDqbbEdLTbqEM1Fcihpfrm6EyER5noCdKyEoMiFSK5NBkg3cE4Rry",
  "key11": "2P3sgR4qDCchFnwU6F1hekY66rQmANvgURdZ9tpqfZmeE5SRZx6LwrdQgYh8sLHSR8s6Euv1s2CYvdqYuEoYVfPd",
  "key12": "64HEFctSx3QRvYbTv2zmgZBaQjSf3EHpotZnPm8GbR8BvdUvdff9JsDc5NC4rZCs8pX8twWejJ7eQzHEF7M3HD6d",
  "key13": "MHENQksuYzfqR9fCiYLfBeCsTA5zEMoKDbgMVEDoNyannJS6nN7RgR9kRQXFCv7JgKLhB2KxbumX8Mcp3Dcm4cT",
  "key14": "4JAPKDYsGDNkESgNqikffP494GkJZ6yt1YAnT4xt8mCERPVZXPj4edx8hhPMfxrdQHiREwRRM6JWUirepemHFLx3",
  "key15": "38S2TzkTCmxfXYKEsXTQQujCFWftYYgmGSDckHJXEzXAbow29WeahH1FZexXMd9H2qvMoPY72G5WGYmna455jXCS",
  "key16": "3an3hCQ8jyP9wyhHsUUUMf9Sy1FFuMNvE6YD6zT34nCAVbjTU8wEvLDx1E7XhEhgmUG1HZ7y7obmJVXmFbAiRiUG",
  "key17": "4dWTUmGtagmcvRJD1CqybG1VpnHNuowvS48kNGFCzWoyKvTt2RGe6T6iRH8PSqyhez2o5AZow6kTHSDKKTQrDZG1",
  "key18": "2gLNQPPUKUgZKgmX4TuxhfdhiS6jDaDGYTqGKoz6qCDbsumRd6vaDq6Wpqd7QfY5TbWxTL6WGomnw9Qq7B4vDpfH",
  "key19": "4nBGmA5RQbRaii6XutHUhAaNXxLxfvSMYpyoYp6oJ7pCKo1zr68aPD9KDNfoZXR8tnPWngbFJcwzxzLesB5UtaYR",
  "key20": "21BLSgMkPN8kwfWGtS94Ux3UowoSRmxeMJobXarXqyopfB7bn8fNHpvHL7QJwNq5hFsr2HXG3fnoRBZTqdDVV2XZ",
  "key21": "43UVQ3TaB57ppMTKLhp7cU6dtcGUuKQK12AjF6YEnuugDDdY7fQm47BUJXFGBjPhb3SLzxGaqNeC3h99x7VRdQaz",
  "key22": "2b5DxzihxZ32JGcHwmZ4aQ4gNh4gUsX9UzFxyNdZDawyQ3d6u4PAzzBfvW2mSMRaBs74UxsNQusggsFewbjhAiCT",
  "key23": "2i6skCVBLWRiGjhLyPgc2pedQ7rwSxsASY7VMDPAxXsxLVNZueuEVKJdT7QD9gWzTKhytc8qqTZJYKuYejDULpnR",
  "key24": "4ReBkoBvsib9xvnxoPvefEbBeqHRVGXCt1HZ9yB2FFMdkSX2SGiHxPiAsSEXmqEVRU97sqfdgELnhxVpvWEZVP14",
  "key25": "r2gvMia44THYhXH7RE54SfniWBzJuYKu6dPktbSgwZ4YSLMT4gu3N1xPzeQWp4KmfbUfiBCxuegBVftJfSWpbRB",
  "key26": "3mhS74BZs3rnfha6VsECtakXoSGgkoSx7aLQSF2enqsiTxax1tQLxyS4FMP5opsH4T77hGNBcBnHQLwdrzykSZDC",
  "key27": "5FZ6GNEjkDmfVHbqSzD5WvKaYtdyvw6bhGWQfqMtNSKKYVWTWpuKCGXFSmKH5NUN4xrfKAQ8YFE1ewjKQHd74AER",
  "key28": "38NM3bQM8AubuPcW9bY4J2zCW2SxL9b1sr1PuVXzPLmtzVbQpuJfqLe5WzjdmWLzVbHhtaaLQVGwMhDF1qDibzEX",
  "key29": "SRz742Ri8KBotbsmxFfaRqEjLS2DPJKk54hP8z9C7c5bFQTom6jXxkoutTpkD1rFwp989UPUeCjmDw9QpMMCRKq",
  "key30": "3kBeN5nhK8n9cJvwUJQd7NmwRcyRar5a8aRRYjTefHqgnAniEUdwDS82ZUXoFMhBahuYSdesbJZhYQNoNmqrznN6",
  "key31": "32CB1iWfZSCipgaS2TqwReDqRn5W7sU4hyKbbyJ7LHqcCFv8P361tDmsnsqCi5np5B4exGo6uqXzHwNjLZjWKqnv",
  "key32": "4GWubsHaznMekTT8HjdVKk7Rt4P5XAVqXqKtFiXK7LRiHfTonTAq8fvs2avAWtf2jGLpCCBmv1uCsVakmdZVB8Xe",
  "key33": "3DS1ugfxaP6ywqhDC2h78h4G89GZTZkC4s8znvNve82p7XRVruPYicLcFHFscTb34332XsyfGA17ykgxN6mDQQgG",
  "key34": "2RZo5ojm9E2iExFELNoduAUPWkwqnTrA2UdJfEea9BbEjmUzhSW4cUptmn5HjQDF6eVy5aK3Z2nFKbThAmJyRiDN",
  "key35": "29AfF7Ckpxw9GqefY9RafLtN1m4LsHWoJN5GtrWpNFLciiQGE12hHQSQDAj9fHCrs3QVvneoT6sS9Hw99Qz7iqgF",
  "key36": "4GCaGrR9243jHSujijroam2XKYc5RP3YeJBZ8144ZbjU1wHhUiQZm4kwsD2UJNrzeyesFThDa5ozXw3xGnSau8jY"
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
