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
    "ff69Cb91Wcy4s3L1L3um2N9Pr9xibLTeCevAhGzMXu4FXYG8vJFEJEmxnEwUPTQcFank1v9DMvFAXSaJsif71fY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QkfvqF15EqEHaexR2EfMwnt2SreVfCa5Y2oKErBEheYyK5Yeimo6wNpYLYZk9REDojUt3v1NBACBA8Bynek2Kd2",
  "key1": "4ZYW3MfHjGgsa2KaaVC1665LBwtmUGehKGQ3bvAWGAPZ2VahN7aoAsizvTpKhJtr5q6KdbaHrZrY4EbhWWWaTodR",
  "key2": "2Ndm1TAYJcrH2VbG9c1RB54XUBxdQd6EPZauPb7dvGTDfiTwacygUT4WokmF7Rvm2Z7tPkXNNd7o8T6wwMxgoLJ8",
  "key3": "2nk4unriaK2mtfEGcwyVGCE2LBsrFTGwbXWFgVyfAXBaUJQtDKFRrvJFXSPaVGSNKLv9hNuuc7vsqrYaBbrxc4Dq",
  "key4": "237WUfj3tGkJKju2uSHqTtRAPvn4GmqHWYzLC64BQjQLXuNRjfUqj79Ws3NiDwk95jBCJBSYfRX5wMNGgfdJJHnD",
  "key5": "3dEKxZBXr3xgwarQCSPuQcDcCrPyo8FQAjUU89nHxx5Sr6piWu71kcFXZpgjSHB82qvg7pDSj1LuKN7kBd6mzoaU",
  "key6": "3KcgBdfKMKWEbaQ2JKRX1tSEPBEGBs9hcYPEqKbSoYdoeBLMfxreZ1bGyrZPU15LDfbE5NzG1ow7QQxtc9UrRFMG",
  "key7": "2sicJHvtBdSr6LHHVbvAKvdDXeHyejBy1DAN9qHjeLPVrK9nE1TRX5dN3DByTymwpkyRwRfmFdLC7URoqDAe2yrA",
  "key8": "3yXbjeP6yZpuV3N9Kh2Qhvh7dQzqyPNGBNmLCHAwVjn3UrRN89waJbprVmynYp6s6J7KGZH8bzboEqfSpbmn1Nq2",
  "key9": "3iYmBrpnR4xajm8mggfJ7SzP39hEyyPQpMrYtka53jYGJZUqgrnT5RD4HnRLgapwWN9BGvHMM8ZP3vuFNLN4wLus",
  "key10": "2u9MB7JLnZ3mBP15vu9jLC7spXQt1B6CiwGyqURf2Rggsv7VtztmbYNEx2YyQNBRZdwbRcn1SUh8UG3JweEvR5Es",
  "key11": "aumKeHurBZMFXu82Cwkhi7p1WVXzKnRvCBPdN3rqRXbWPmUsrjhGpbaZijmVBqetaaEyE1wcXNUD7r6TMsaR2Cd",
  "key12": "3QDjvidEdvuHmxvMTJ4ZGRKAxsAC6EZjndCA34Z2DcHb21QMaU5o7RNd87a8tBxW4ge4Qw1yNWAkkCrVd6XMw67m",
  "key13": "2hoAftHVTqwJK1AHbFbSgrnm4T3sXr2uyTA9ZNRfYYXcLuGcFtg7t9azaA8qXkNojTWhs1itrMgo1RLZ3FF9i68Q",
  "key14": "46ZBsqkrVkyKScm3f6rP6Q193ahHXwJfykc8Qh3NHVHDG5UBB4yuYS6kTEuwoc489iLdgT14EB6ChMJxroXZvcBj",
  "key15": "3ECa9tVqpmzwmUGyEcZ9j8oVU3Ds4vFwM1UepFq1NqmGK2rR4rcWpELJjmWHAudv64dhEDfxsty2DYUGKRJSqDxD",
  "key16": "nSb1KqNMkBSqfesGg2u2hQJojHyfTXjPsGTM87dc7docpf2nRToBCXKhEmarSYdQDuJr7nuFXdeK8yC9oo9u7D2",
  "key17": "3a6bhz1qZzi4gscZcyPUqVx9bbUXYSdRqwacdUEA4M6ye47qYyyzGGFZknSC5CVPyRFMrNPV9xqGLRnUwzxjm1f1",
  "key18": "28aARiMj9vmaYkVtdcPQNwceDBNwjN4TXuYp6ns6if46aTbnQDEwFVEmQgLXJLBbY9NjBkyqCAofu8XM6ppzaFRi",
  "key19": "NbPBzDqPmmbxxLHXQJT7YoeP1wwYrezzrKf2N545NDYbSiX2WqG6BtVw97FvZuxQazJrXyKepBPKJseF6BKZzQy",
  "key20": "3MuiT7hNqMtPuFFdngMoQfX8kKjEzgY9Nww4ZZdtVBELk3HG5dLrPdukWXqh6yGHpCfqbwV4tZ2oBsXWVerEUmhF",
  "key21": "2mpYeEdKcWALjsd5WhCyukaCLsxcQRx1SGBuUSmJjxQdVWFsK5ZRucvN81oWBqNgjLEiGLBsVrXf8G1DFXz55ZQ6",
  "key22": "wcrY5XZf22TiA6fY6yzsb5kpz9CMfqRNJYUUZ5biVPkC1nzo5nsrBKJZyDZvi7iCD9VPLjAsUQfkbr6wCgzqySA",
  "key23": "xc9VhDyv6KGiPs3suzcWgf4dhXVquVEPRhvzjk9Na1kFLy1cuNJpzbhSPuARZjdqcPEfAaB49sex5xxa25Uz9Jr",
  "key24": "523S1pKsNQje4sgJ7VJiPc4eoxXGAZu1Fuo9x68whiSPynt7jkHp7qkvxXs3MFYPA9LBsqw2pSmCTewe6AEZabpA",
  "key25": "4K4bY1SxkcWjpkqSJD8ZRh6ZaWpPtELWChhw9VVtnoSH3SKQsoTPUPsJwL2fEvZf3r74sn4T8ris1kjM9qPRPvek",
  "key26": "FzTCmueJ6CFjsDDKS4iJpYri8sLYWb1QD38iMCUbwK5u73uLfftYyMhThon4chuucha5UszV9hScSjojGTSpaD8",
  "key27": "Fr2A9Un3A96DMA9crM1Vcy8kmVYg3pK7XWHJAjNsg1JXUmd5QxtQUoVgTtsTv7sV8MiXTsmcGfDWva9B434S6aA",
  "key28": "vy7VBgYQ8fBQjJmLGvU9C9wgPYTEmRhMtonpfdzqdPeUrHMY6fNKoESyRg4aKoy5iPYsbco1pn8Jkq1JgWUjiDF",
  "key29": "4m8ehfkQSunWBssxSB8FhKXUCHziwxTAaA6oZks6yyQ6jrgTjzyS376xB3JKjbYWf9XVoDhQC9VYm8ScMoZ1iUNX",
  "key30": "3JNCX1bHPwc7ppakYcEvinM9ZoRc8FmpnLUDV1ic4KSk2ZrUMWJhFd4xoppFkyDaHWF1c5YevEGfGbw8zDYz4sMh",
  "key31": "ppfwtQUfqEzzSnNGEK6EFCCM2gqsPooZWjvWPexW3b2ZRkxPNpope53JSkakoUMvfLzKL1h28rUesKftheaBWrW",
  "key32": "5JojjPWAWoMiuuCuHDzbCuVWaf48LKwhMX1qu5MoubdZQKooCHuVBAMJsTcjhTq9zyapb882JJ2m1hAcGYyXJ86x",
  "key33": "6xg3mY4DSKvTvS2ZAAMN3csPUGPrWpcPgQrCJ6ZV9MPEzvH7GLJGDq7h1SPuuxpBtk9rDoxXzE7yppvsxjKEioY",
  "key34": "3ZKXLhu9w3JBetozsFeg6i3UXDaUEJg8yQmMi7VURt1UhBoKLvUN2zUsLAbDW9s9a7R1GxD5RFgZ6d6hCsbaUzum",
  "key35": "44yAVwTrjAAK6CM7T6j3o9g5vUNdv1yq6VWgvqVopBpH12tFfMhfSwHBuoNJbuNjdBoCYqqUVH8PmRyTgaURANxy",
  "key36": "oeajBbEJFrRwGfvNKxW865SNSnm99nFERf982wFwKnCHGBjyozZFNdBUjqoCMF5qsmyPSvgKgQvPGsEBPR5FCDH",
  "key37": "2mYLvh5kJgo3DHCfDEcRiDzrYxvAFBBr8BRX3LK2SbN1S9ShWFmzomexhxrLYyYx4rUbrWuTBWKZwdX58SC3LYMe",
  "key38": "46gVba2g1dtG3EnyQi6CUJX64qDnnUTKFWnRDu6TKk53mdHHe6bV8kDgj34CMU3SWoWVcVfGf5Lwcx2hDds35RDd",
  "key39": "gzigDu9us1LPZm96j2Cjefn487Ze8xXtoxtgSGGKiYgARHrvQZ4CDuY9nQ4AZrbSvEH7a5LMcuexGmkZUeVvM21",
  "key40": "2s5GczRr7SjZMymNNMunU4f3zT8JZzjVJzQLJC5s9RCu9cdFZjLyeQ7TfFUg77BtkCFXmiskgB4wmy5tXGpCSAHN",
  "key41": "3Y6fPGhWgc1bM3ZHeEBdtUBXTGzdhUUCbkZ7XPZnjX5RhgoiuJW9uDyKq95uUpd1W24coTBJcj92uUzpffxGymg7"
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
