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
    "2z9zrxUPWmH37HAKQ88daNZaYjhYKpsUoKferSjXbhqcganZysuzJPVWry9vVTuZMW2BJaRajyxnWrWjvG5sXg2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bxNa26N4NxPTiCDEwqndo7fzbppxTQgrrEL43FnwhGQLBEGGXLTjgb9X7zAPu8c5PCP8NhcUbdWcvnJ5fGeSHja",
  "key1": "4RYvcLcmGPwrrWu9QVTUnzMTmkiykP3z7jDW1NPojftPyyDpuTPvmSzxwWvE3f7n2VS43USSpw5DTFCMfdbbHAXB",
  "key2": "2U8485CNWWEphpp8Dp6T9rHGoDzviUexSx4WNJrfe4LJq5cRZRUZsqtUBtpxiA3SNu9VSiLuVvGCid6HtitW3Dr6",
  "key3": "4C2nJshp693CsGnUZ5CQWbs9hctuCgfJ73CMdPx4vmBiJrsTh9GrthTbFbF91LL9xbDzkzPxM2tzLVpHwPH6Fpze",
  "key4": "5mhXuGKditsqgmcD9vGXGgNhH4HML4zq3dgNzCa9xxQrRu2Gh2ERtKLEoPxEVqNSXYjknH5X6bx6tMcS3nMERPtv",
  "key5": "3Y6TXDmfx7pPc775hY2Fwh9wSqtBnEQ4NCVtPgXUJXFo6Ds6ytuU2ZDGy4GxW3ZP6FiSbMLbCTgFLEvd4XmgWEfM",
  "key6": "48gNJ5ZLyQyAwP5i2xoAbkzNrY7c3FVssGpjMRY2o31KYKb7sRziijeoaKnvRx53wXkJzmwB5t2H36BHvHTKTPs5",
  "key7": "3CCK6wgQ1MfL8gDAdFQTrKspUVJdkeXT46FA4VLB7m1PvLteuC1Sr3nS3NjmtBe6Y2V8p4ydRsBZRQ2Fvugo3jE4",
  "key8": "DRXKXCYR9M8ozmdp38ynoLoBx7KpdWQRmAEAxXajHM3ZZSnuPP2iJBixyvpNfKREF4vhUAheB4cLib7p6X4Geb4",
  "key9": "2pLC9GPmytcWgWC1mJbrMopXgLjVk5B5pGoEwYvusiuQudfAwH6jJCrdDRYBSctwF8VcZ27LHcckPCXJn1949Vnq",
  "key10": "2wY7tbNfmJpNidkgdcBdiwzLnGm5EMq85doH2DTA8jvUaYLzT3wKaBKYmpds4k1uRQqaUnzSmTx4oGG9zBNRUPRK",
  "key11": "2HwWaBhRFuDFThhxnXxezQJ2aerzgBzJexucJovLBimxaHouo3vhzF2rgE9HTckPC2tXyb19u3wsVWnJETUApp8A",
  "key12": "5XWwpsYWokscGmTmEuTWgQHQ5gze8ZrnYfrWv7tNiSBTTLgwJDmtYxTDnxPRCGLgUREZhD53krHdrkjidWq6G4GP",
  "key13": "5QTCRYLDXDuQsaZwDNHesphpTEY7uwR1JHYjzjHr7CdMgCeJpbqEzhkuZvmGBhyWyzSQ9ycrBBjj4LBXojWBWSVb",
  "key14": "sBsJHib7RJVdxq6npV8K3ytzSBfGWLqRNqffEd13S2qFWW8HdRjE62ZofhpZt8EVbfTRsTtgsiDHwc6YEv3vHE8",
  "key15": "fupE9RgQ6BHJzEWpn5tdhMkMNjAYWnz3vvb6mKWxyheN48p7uYAkY3L6JggNx5FkTWirH7VC1m7zs7HTkXzjAHF",
  "key16": "4heRCFxur8pK5H8pgKCW7KSWBWTCMFgLi3wtNuhCJymfVo9wnHje5iQNmRykn9aN5wAVwa7oswZNG5uSW3mGfG9m",
  "key17": "48pY6WAKtvMnTrH1tSWHGSRBVVDFze8vvPXNdSC1EhUCwGLZAHuUpHXJk8xthw66jbToJBrZru5tf7YqGpgR68LF",
  "key18": "2kH6cnqHrj6Xc7LWcTdAWdGcMHeQmWQ8RNhxEDJRU8Z7UYqZqKct8zitfF2y11W7H31rViLWRBadJXcSzNo8HCav",
  "key19": "2zeHsfEW98utwvjH719xius3hto9X3UfE85DoYmP9QWpiXsVG5CCNNZoTyonoGauh8PMxre23ERnjf3PXx12BzEG",
  "key20": "2fxjU3cSbqtWgoMbH6JUTpKtFqqzNNw3j6zGAWQdSwP2YhDXz4gRQ2PnwXaLdexdk3t1CUyVq6UCgq1xn5XUmbg6",
  "key21": "3p8ZVJPX1HhAgYM4SKYS823CWsYNWU2EKvdgbx2BFyDLRGZDLXokzpfgXtJWBfj7jk8UX3yYNkPMvXyB4NRG3td5",
  "key22": "n1cd1525Chi1AQST4HmzEUELPBvnGtqubdpNhjT2RCduMLoRZwYDSNrhtic8sNEr4NzHbDa8pVgy4vX5Z84jkv8",
  "key23": "TLUqmcV6VGGdQc59m9hs443VTLNFMvUN9pp6Y2UXjjGQTaA5mJPeAW944cx1sboCUTsXq2T2q53vA4bPyPiJyUi",
  "key24": "2YsZUkpxdHS5DLbhSeH54ZM14aSZkCEf8cSkkYbh4Um4NVSr4WgniKRyANLj1b1gtdosVJy1yGMf5d8P34BBbxYi",
  "key25": "2Msu43PCS3jgQ2mgs34qUuTVBh9i4d1WMNHskndSzgEbQDKYMiVfxbCHTVxh2Wb1HP8GvzVLEJ5NcSzXXgZ3xjk4",
  "key26": "4A62ZCSinJgUBy4Pg5CaWzDcYrmNr2fsKVoxJTLRhhrQPuVfMBuGHcKudDspjSQsU9mLsQFXEWWpBVKtLn6oXzM6",
  "key27": "5SoLTo8NuHTrEQpLdJUTYdwGRTWPG3UVARMCDuDWQFoaVpVQHVZEUGMKk3BDhjBsbdMmNji3nspnB5x7jeDxg1PL",
  "key28": "2a1fp1ajyYsdi61R6qicawnko5djQ9T86k1c8ucjC8n3FJkFNHtXXbRjHW5ReG2wMeBF4oPyL3T7gmaz1mAjcc3d",
  "key29": "4WscWjVPWvmyPa1d5jXAVpe8iN8poMqarFo75fg1dkQZiEQPb3Xva1YNZtP8CiQm88gxfzZh1aub3kWr45CA8i9y",
  "key30": "5dkCq7KTZpFMjMoiXdagPLVLDvxNUvXQfGetFYarpTNVnGsAeFc1VU8bM5Varbec1LVLPtGWLC1BkccPeMzTPyC8",
  "key31": "2DQCENF87PJQwVjoez5XwfSaHF6ev87SxvBXKbfpMk3jRfJYqUPFtv6J8mY2vgvK2ZcTr4Dkt3t6MjFynMrB5TH3",
  "key32": "29jUvmnYLnHdBj95ebKNA4gRDVA9jk3HwAUx9N2TqSQPA3x8FvLHTJixTZ1TNf1UofTZhvo4esDpuNA8wXWRshVF",
  "key33": "5fpWgtK33417GKDj9XxfbD6fEV8mbhbDuN2SMsfPcXTFCxnC4ioT2Y82z9wPca31zwPBXGYYGwM57NFnsGF1o9u1",
  "key34": "3fz4orb1PcyBiHcGmU2HwRqyH6aNUCsMr4sq2kCjcHqNq8j6zyJD45wxJMkPYjz6AmJtFu6DTMHgfADfrNJGHXMN",
  "key35": "48Gf9gWts8MW3uf1QA285r6AKhkzjH9M3ZYfWmqDHPfoD9pcDK481xAkHiQJVZQNtT7auG6SCcPxTGeNDjPHteRM",
  "key36": "FJD9LQSTHRPebKqMcpLu5PBZjqRkRejmHjVZ92ajNT8ir3V3y7ABrhLUBRpJwU8TE6xGrXNqjPVex23eA78dJr6",
  "key37": "5fHjQH3JoJ5wD5rU6ZcJsjAopirk6X6NFnAGQrThoWKNuFmh1EGmpzpjsWuyBpC7YGTXHzNCHy5XaiyWgwxcg8hy",
  "key38": "nD8f5DLvnKNVeJHHaPPkodBSqnRgf3ARSvXBXjb4Hjshk8ufLTCJUUHS3P78vpsDt3kTHgsPngCoZ6intBFwbCf",
  "key39": "2rUxz1iH4azgmXc137eprzCuFUwyeDYiScCSaFq7h5ZjiDiKyNE9rp5XgyY6kJR3KBAgTqjE6w9rhtTvxdrUz3wq",
  "key40": "2N27q1vPAK5ocYhVf727sUk3Z4bHfHbGEGNBdRnZ51ECs9k65jgwCwT9oxAWGRk9R4vnLhxVD5pXkwEg2the1cdA"
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
