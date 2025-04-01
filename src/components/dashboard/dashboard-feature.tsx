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
    "2pWH7hDykPikbByw1pmA2zspvpZpousDSjL1VFtYcyyAAiio7aDaygkgHhW6gC45aik7HWsiisoH1RvwTkGYLdd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dMMCDNWmKxrUBjam8MrwhJ171jZRvQ7ZikfpvvfoK5E2Ta141zeMfzVTmVRuEtVd5dQKkfo63WTLd2V1D4v8bMK",
  "key1": "5HqBmo15zdTAaFFxzZQ63Tfb5zdJ2jaLVEZ1oVTCuAYyWxZpzkzFGs2zh6Qd7UXyTrNVt2LECodTEnvamyuPR5tt",
  "key2": "4Yg4pd4824K43Q4DhM1ambDY7aNapJtujJ9ANoHuaa72tGBmipPnfRZnjeFBHw2cxw1QL8Ju8VWWnGTSfLM5KQzj",
  "key3": "3v8wEf1MKv2xh8RWuh2eVmtTNCJngqZT6y6U2JkEzJV6kmuCYLKYgGy2wJxgG8wqedtYzjn1mgRqdnHxKfkJozks",
  "key4": "5ixDzHNvXZPbrb2cxnDhHkdMo77aZa9jmtqGojvRYJ4dcwvkBLDpJcVyeQnD3i8h7PEHFWyKLBJkLjpW7WdW3q9k",
  "key5": "45QEVGeA1uTJj5HnbLdM1bT79tLJFVxGyFvrVLGHBrCtfdBwrYdQfCfYR722GGnthXfBn7aX3Af8JxsifZWnQ3JM",
  "key6": "2Bq56Js618dmgn9eWANNndaQmEaaC7D5AgdKxH2axr3iBEB4AXRFjRbLf4ss1HLMn1wQmHzmwGELyiSxX6Vm3HyN",
  "key7": "2NBWhkeaWNsm8tJhqndCxfR1VSZHhT3FsrYHMzCGorM3pH5SG816HxvfhmdouPVwgNtgn81dPVeXiLVEjpSEwmJM",
  "key8": "5XpqMWhRtRhAdvkBtP9L1i512va1GjGRbefgc2q2a9rCgYNYNuAqT2TayCMaf69vJJZizJ2rPmaSQkmBbcqPqPyg",
  "key9": "3Husnv3WhiE7DDnEoLg3tB9X53GrvbVSgCX8HSDyH8RhjNyFQKWdjTvJ6MPgSDXgbYUiXMhWK8Y5ZnUv3oeHBsAX",
  "key10": "3Vk3d1xa7MU2avwKbY83kcyKK7KdiwGattkoBXkEs4gpoDT5eqZFU78286ibRdpwP2TCWmxmZJbyzGkL7Nveyykg",
  "key11": "2286v9FKffJvdEJkxnZVAC9Equ5BDW6L1wX5eLoZuAks4fQoaguK8StLc4XjbXyiqJesL4e7Rw22ZMHQSDypKk3g",
  "key12": "4vdU4vNU1GWQuswWCDCK7qhJdoSeL2mQBLFRn7BHK8AWyhs6riToXvZhNFBEYmFn8ohYH27hdwD51tePMXkHFutG",
  "key13": "4GL1zdEoWXhJS78zDoECApaVFnByEVcmJ9T7Vvr1pKMBsjsjvRoDxGyaoAZK59f16jE8b8mxy8jtCmF2Qxvu3sc4",
  "key14": "2aAzhdRTGwf46b3cfH8hgfddtM3K5LVrwh53pG7Wn46x9nfLVLfYd1dCFazfLfRELzmeP8RNfVJ2527qmqnBzV2A",
  "key15": "2d3kjpYR1VwNBebPwza3YQ8m89WrSRVo4q1Eqkwkz7fewpRMfWPYEfwPbBm2MC5r8sFFhWP7JYomiZDQuiT2yraM",
  "key16": "59aFBLe1kWfkVwbT6VFDwbSu5yZVb9MjjbB8GDJBoxaEQVyKJkFoUNezUFbpmPt38vwBdtfG4upD9NdbJoYdkfjQ",
  "key17": "4n85NnT7cHNb4Htyp6USaDD2VkqYzVAAd8URW1LiLVXqW4U6BcKLVyvyUvPzyGuWqD6Acdz8DD5UmjcrPn7jRo75",
  "key18": "4cRCstzCTkkKv6ougp9XeXuTXAz3GLDd5KpRz1qAB9khj3w6rNWZQcdz3k1NDwk8Dyq8ER7f7bEiFrPScoEy1bh2",
  "key19": "mrhKcj2bbDxHVSr7EFK732xXAq9k8ubLZZVZhKNqsiamC8MXwESh9uLKQKrwCecmaCRXLHX2s5hkHvs9pfDrCEg",
  "key20": "seq5jyoWq5iApMGk9rJPMxsG2Y6w9YoqsVem7wx5NmMttTt1BTzFgWXsCsNph1mSzbgc36syeUswFeCW9mBqb3L",
  "key21": "4mYiGf3rNmFwECDEXZ4vQ97RLjimi7j52VG9CdDvHiuTvr4TuFsSYRFWmFWNjA47WKbEna2panxwYE81LCV924qv",
  "key22": "2uq5VoGPqEhW8JnPDA8zKTZri4VJ8u3ypUZTVziAPWk1Tbevu2HVyBSRYkxcV3eBdomBh6oqvBg2ys7rnFCQpw8k",
  "key23": "23QYgRouFrbx28hQToYUUgjBgPcCoSjCxfN6DFR3ejufUL8EnPLZv5BvU8w22L6oUm5uj1zbq9iCHmPwMEhmNuZ7",
  "key24": "46SKmiLuhaoW2cTK7BKgzKQEDzPQ4qaVbeHFRXv6NUdusCXhmiqg5LGDULPiKZaySfM4Yhoutg8CjmJoyK7REf2F",
  "key25": "5oxfuKyEnsRTC8hLGHwzF4AXdnfiNxd4vNbXLMHSvQdWTBfdgJB144ZCHEqivcTy5xCRTeezJZjNBvfAgQjG1hqo",
  "key26": "3U4wi1o7eLXtDj9drxxdRauaFN73YrqiUdWc9xWk8VtxZAn1xadiwg1seP468DYjZYyYz7yLkJx1AtvwjRRmf4iz",
  "key27": "4xCPKKdXTGrXYsJDY8oJ5na2EZtLyu9WyetoutyKnEEtYKBdyKGiVnmRRx4M6LCMtWRBjrPvweNHsbaEnwkTWX3A",
  "key28": "4qKmiA7uv4FqSeZhw8LAA1wNyYQ58vJv6EKz2BekJHC1Gab8Gq4dokZXZ3XBehUEwfAk5VBujQeZTeqsV7wvxZ7C",
  "key29": "3izUe4SPhoaYvxJiws6oerbdLWwBMN8u1iWCdry6nshMqGeen8vVqMRUofWv2Nn14kLWDG8A8YQPa1GZNoybMcp8",
  "key30": "ogfLoPU7XfajiT6iyWVmoYgQH4QKaCrk77Lz9vrcVKnGmATHmEoPfRPbnYono1LCv4Zfs2vacsXQi5jVmh3NzQ9",
  "key31": "2PS6xkW3zaQvPyhPX2cdYYgbNyhaTtty4VrJVJd1Lcn5wsxKLfJ71kBDmvrXwdPJ8xkQoRNcxjK3P27cyrSps5BN",
  "key32": "3vrz7q7aaB74tXXV8JE5bi2H6JghYP99AEfusq2xQLuLTbuaQirdgJqWWmUrEfqU8ENjGP4LhYjG8TEQpTsGD79E",
  "key33": "2fbVq9NH9HDEmRmT9GjuaLX8hgqxyWeMRMTKKMjSjw5YcHPpSMLXBomUfKpVJHnEuULh2HZM81ehcyS8WFu4M4xo",
  "key34": "2a9keQVEhmuFWq9H7PnMtrkoKthyeGibcedzngaZbVCYczuSNZC1U8JDWtpxhuAPnsR9UVKz5vRtNyLZL95xvkp3",
  "key35": "58fJJf6Hy7s11dnV2ST9i4iRyWqYCH1PMxHEwJbrPqh8Wv3ybmBtD612dryJgHLhQnxKw7F7VST7a6n6Ke5tcSZv",
  "key36": "1DNWjhGQMHsPDr237Cf2ufLw6A2HM1pry38M5HX6t6HsrWA8xL5DAAWj7d5pepwXz8bFotRdFfybV4H9SgafVVG",
  "key37": "5ofUXy8T8r9uELQoG1UeP1GZkyFGz7yym6pCJ6zCqyVSnpv29f6cnKtRqaz9vsvQG4hYQZAgoG1fKR8RNQWch3Qk",
  "key38": "2BoGDJypLQcBWom2XEsrk7NrUFmzhG3Q61wveQW4VmtksDFvym3cE26sPRq9fEGLbmXZuPzcFNkemnMpjSZcvHGL",
  "key39": "5dUN9dUJtfmYYhGZ3NmfBVQBssqQv5CWd1LmJHPCVpY2Myy4QtLffKbL4EFtMKfTQTojVZhgdriHGb1tyLTYVYx9",
  "key40": "5EEiNje99ah9T7pMzNkVc857EfuJcRRH1Legk7WdfobS7RKddML34tG8LAbHSyBZRskqdW3JZ9etLVZpogKaj5SB"
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
