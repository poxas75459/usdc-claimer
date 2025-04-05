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
    "2dYhADoZiicMfaLn8aAEV2QTkHy2SU1FfyKZY1ZXXWeg8budxBnGtNZs16iG7kwib4bVD8XncXapLh451EwdvfjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5qeE6qxSLmuq2wGuwd8wjXpEJYP8BoSh4DTGPDiBBLv33N1ZqJqD7sQVcq31icw6ncvfys8hRa4RyYZJTXteD8",
  "key1": "3Wt9HBE8vMJcWcbYjPqy6WCJDexzkorNKu448w5KnznZmhLkrxHGA8SQH6L28vMbqrmmZ2m1DKQnieCdqSm98knE",
  "key2": "5oKm18waME5uhQu86Y2hofYanCHi46Whi7k9e1NERyvusLQV6TPdKGLi57LDrsWDVaGSHngw75HTDVLNWb8gkHcm",
  "key3": "XtcPd6m9a1ghgkojKoxd9rRrrGpREBv7u8LjNzw24Zuk8PFXTEQK3UnFumAcWqc1dyz1jN2T98dyNUNGgRgdSSo",
  "key4": "5SQpUwHfiMeuwygPuoqsbpx33J5KvHu8utLoQKsDD6y7U3xxvXxrwwadvsrZ7sUx9VSpFgQwgdQ44mhqnht1GUUT",
  "key5": "t9YYWV6vwYidGjDKweYuSsXQUDsyfVYKodAmorW6LkJpNKpUt2WuVmtaeSFwSYWsFpUiqr5xLBWcASYRQMLTYXV",
  "key6": "VBamrf3SfDm9UgeCGYuH9rXCeZvREcsHwC5DPgi4HiGDCCa76udFpyXfJwDwVxM8UfSVcnutGmADBiwmHmWfZbX",
  "key7": "43TnhvKYUSuKWA3hzSUBfv5ZTGDUvc4P45HHjZU3cG8xZbGZDkBhcsKaGN4wiFqWoMLD8WZXRg6d5YZbCMr9dbBe",
  "key8": "3fShfR7oyXjr5RwooLUZHWzPsd8rHFajofDzR1k3WwYaCFdzEfdvtMro6Czno8HBDmvSnWpddLt2TnGqGTQv7gg9",
  "key9": "546e3M4XN3YpoTjLj3Gyytm4JnZHSY8tdRVELpQerHr46e2GJb7Rde225n9xHfMYvqzBF3A72w3YFpFQQtDxuHwu",
  "key10": "4Gwvg3pdV8sDxQsWWC4znM1tqwfYksC5S2ySmEugTXVkdSa4dbmrKRTXaGEy4CDxmg444S4vfB7XzauuJkhHM2gb",
  "key11": "WTh1zVxTWjBu4NBjokBiptgKj2oKuyrpFSQVnHpzg87MoRmnPndjuNEWAiEJeSQYe3Jr3GijTd1dEh1NkeJQvYz",
  "key12": "3LSRHhnW687h6zAqSa6ifjnz4J6vC48pNgTX1ey4LPHUau2q5AN4pNrSCuA6PjyUN2xBBCYEEC9TMRRUxAxLYz5L",
  "key13": "4pUpCLHfexZS2DcoMEAYMfsf1CTdvduQEemRNmLix5dMoWDqPD7EX5mBDQcPfXtTpWVaPvydaxAWPTrgb22gV5QQ",
  "key14": "4uQD5qXMvgazfWnjR9nceSNfudQDVdec8Sdeh4VCJewoQixHXi9gwoago5At4bXZUMG9fUigtTWk8Lt2b6zwx6WF",
  "key15": "3K7UpqAhxWDLR21rPZKPGk2hnxxgAdvHjtZWF6uKcRL4N3D8dnCPwAqcFMeBq2YjXCE4DZ9SBQJYmRhSi5vbAteH",
  "key16": "NrVCmZDg5iX7M6DherXTz9rmf7HTzWA9jxyKKLErQCMPi3DSbApSQUjYEvMy7P2cMYMzoryYZpyUpRLBmWtE8Ls",
  "key17": "3Tv7ZK64FFxov4BziQVTTkvLE14t6PMBKsxGKUbXLBDAxw2WLgcWaJRsz1b8j5M1MsDqzCpvtMaKLHsX9k4gFCm1",
  "key18": "tMpvnnXuJuGcy7rqRBsKkcS18S2rHyPrvkbzovwduYsZ9FinPgVrjwUAD1WPxe4Tt2n9hGfzicjm4gTop3mkHoW",
  "key19": "RzF1mSzebXVLYcjsdKNuEUK1TosY6wQXvDiyCqSu3WiBqg2wRzhj8Xo4hE3ZE4fUdHAyCYKoVhGyQZevwziARPd",
  "key20": "4iQwEV6jjQ4teXDvAKAwhYHfidcDXC1sjW2fXj8UrttUmLpYTiT6mv1m9oLS9aNSBYX5dgWdbkgE6E4JXeyNM7Qf",
  "key21": "5yJ3QEXjwoLW8DdohP6K816bHbmNZHjitfL1hWXwg75BmHg7Liw5htDnZZhAvQHRLpcXx3FAxuDHy7149k9ZbDdB",
  "key22": "4bQ7YsQXchdDxL8GtkFSzYSS1KySjmtMb4uo7CtFdL9aJPjEsUPUWveYTyDgwjySRnuWD7c737qymv5eRCgbLR5s",
  "key23": "2LpLZMWpvgDBSEswBfDXvmvqDpPXJDu3qbT8p1mUZ94SPNYRBChq1MLoJzVVdqjPCGURXekVFtMTNGxQHQ2P9bTe",
  "key24": "oPgeQvM2gSd3bxti9kFAiLwMngjxJqCa1uvbUDguNqRCXwP1avcF8LAKqjaAi338x5ZQJP7ihR7GKZpiTGEGPun",
  "key25": "4x6WSnze1oyQxDnYfWaBvbo36ismmr2FpTTVaDN3iGoUqyijhHCs9Au1EdzuX2krXnoWPrinZaUweGfxpvdNAUVu",
  "key26": "5KLNLrvGdKAW6UrQWZpfx8qHiWEyG5G5ZiiZVMw3mcZYF1pWWwyMTksJ19xC3cV2UqFEff5q64WttxavSyjaEyaK",
  "key27": "4tRY9DdvFFcXW7VxEgCJkPsznHvjac3zKN7L5yihN13uKYD2jxGwvpVeeFBnHe2L5DERGwH3QQctyftmfBgzRUvY",
  "key28": "EDmKTtBNx2xkTTrV2o31uxe8p2x5mWHd8dFs67MPLxfT2y9ZsqTEUY6ZqTcAYW1Khb7z5FLTF6fcbJ2xqMwgYxk",
  "key29": "5FBfV1NeGMK1HRtPn77hWHbQBw1GRGcMPQ3Pe3j5AVcVVjR9r4Z56ceBrN86KsDr8edvfxiwCdCBVnuAAGM4fK4R",
  "key30": "aoXdH7YMwPWPHjAe5sUJX1FZyGrDJEa4nYukf1XiNXoUgRCrp6TXGQptu5sKurVUiPpphgYL2FWVUKic8G15WTB",
  "key31": "39duUEFsjYCEP3zEYRZnVeEVipp8UKCaC7b7zPkq6qv9gtnhCedAnGcCQCfYHS9pGSZ9QKoq6HS4QVtpuba3eD9k",
  "key32": "55bzD5aDA6ssbfcgbk6DaN4QM2XVbE559yCdGVVwF43XrhLiT2JX5pcKkjzCMV4bctaQe1DPkGMYs4ijXATraQVT",
  "key33": "3qb6jtCaqw295wCmeDdHAvun4GoPdiFCxZNjmfNx5bF6nz2pbbbUogc7fWyVLAMfxo3JpJ6knA3Qnk8UmiPBAFNQ",
  "key34": "2ChWzbh67DeVpiaEEAF3ufdvoHdT8gLmFjMLkKkB6P3njA7VqaqZeKetUmSsYXDnDeCJuHpQ7TDBvyQXW79QakCZ",
  "key35": "5JAvJPFYUpjRXXXnzE3X11XWTS9oTCnvp4JXHazrwvgfa1RJqiJc7sybLaJqbUeXLm4p6CuJuvgvGBo9hw5N5L38",
  "key36": "4mtrCJDz9WxiMDU7Nu8mBuzPVpSPg6vNVDuCWazQVk7SgE3Bw68mh3jUTzZWiiGyxpk8nmbqwfYbfbDPZG4YpNCn",
  "key37": "21dPLHNjv82WjQN9iMUVMnbGNUcsRoFF84uzbPe4gU6qKh263ZXe9pztv7B6t2dSP84mJoAcxmfvSeWgq3s9h4AN",
  "key38": "5L2b4DMYQVjYVtFZWzrT5Xmpw2Txpgwzupa6YsXBhoUJmrEQ9KwoWvfHwi2ZhjgAvFnMqFhprzVEobyUKU3fKJyf",
  "key39": "2gW1b4gTU6P8F3WY4LYC6zFjFZmdsJcsthwuyHmE7x6As3bRx1QSaB44EgUPmSNPcZPjdkTY5T7qx6E3BSgMfAHk",
  "key40": "2qsGs1rJkRLaqPjLHPpASZryhMAqRcL7gf5pCw8tpBhSA8QDoiboMKauj2HoPY7Cy3KBHBLBDxULqstkQ1e1SXuC",
  "key41": "65RCf4XNs6tehR2C25m3fuygd7gvyJwRcC6roZwRz5BAuTEhBYhRqvrDVbnDytLjL5rM5GZogqAyLBcAUuPRr3kn",
  "key42": "5j5zBEqA1KMEWVYKpasRfckdojQz1AHve16Mei5YQ2aFPoak6fBsmat34ULsSYkgv86QXfqGYcy9LYSh8jFmuedF",
  "key43": "21a4hmGkXeQsuNX3r93JNeD3hJ652NwN7W4THoB26663nnN42TTMoBuxAB9i3nTZNbaJadXPKBXDySsPg5tCzXGn",
  "key44": "2E6JirDvj4nmxtZCYcVrBQtEF6Nq11J7dAW2BqMVHWzeaDTHHH7Vpef3bQGhsGTTxDf96FbTkXYPTXTLdcyAoxE8",
  "key45": "3Ddd4UBvB7Xnrui8FdfE2iKiUzefpnWG6oKUbp3hjS3dGDWXeCX4MNhLLasMFMRrE6xeZaCRh1rzA5Dr5uE32ERK",
  "key46": "QcbGwwXc69oAGrv5e6LWN8WFLBh3761Ds7HSvietyh95vtK52puFzBQeUgDLFmNqactTbkuProQCi7kR35aFzzm",
  "key47": "WeXJZwTZ9tGiXhwSepxykuRBynzU4hGUHoE9MT8UENXWEyfJQvrVwBbyampBMJVdbX7hhoYhejbkWtVT2yWjMTB",
  "key48": "5BiXvHfNyX5GwaTvHdCquHaTXvuPw6M5tYRzfQ1QoaZFSH4fLGi5KUpQ5SDHRLx9uLqCYaS748D3ZQQJjq3pVBaw",
  "key49": "3vjnPEf2xnsXe15S21Mgg2YYMyqmkymjcZ6WZPbWfX3iRo5xkkDae1wy26azwP91DyPWXYnUYXQAqtkdDBmExpts"
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
