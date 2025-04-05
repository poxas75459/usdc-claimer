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
    "578kNtkd67azLsK7RKZ5RJCXBbUoBof1oEHLfojoeEMrMFV7Bij1zwCCEimdZhq2qxL1KUiaSDjym1TptozA9aFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uy5WCSFQvPnqpQRRhXnPT9A8RugdCshdK6gLkH2iwbVy2EVaSmkeHsY5vfe3BBqG5xMVBJkSvNeW2Xkzgenswf7",
  "key1": "3XozCj21VVLevLBGvzj1eQfDJxwBrKb2Njw5UR9rwVhTw38HkEShc32jtNer2MQJ5oREmm94f3vo9WNysiC4WMdE",
  "key2": "2WqCeAu9LzsMBwsJkvfGrmwMzGLV6yDezEoENvLKpbiRbjrgWbXLJijCcWaokcRgd2TGQufsEDWGR5LxvckJFfGC",
  "key3": "3hZXewAtZMb6JMA35TpQm5oeU64qKvuQdwLdnstPoZA1ebAqUtydt3GPeg7TrEjGdVM8re5xnd4L3oFLRq2BuQrw",
  "key4": "2tZc9Qq3kyQCxPsfSjsfwQbz33ujuWm7KZ71jNhPn6J7wiac9jjgGawEMHGjc6JuwjeCsYmzwDT97SFTCJ3jxFrc",
  "key5": "4oaV2gQxx58RSn646tmWJNHRRdqFnSTUjguKFsyhD3N2jXfCmJUt11VHZv6hMwkD6MTQgSoGfKoTfKAyoUckbmcU",
  "key6": "5GrAmyGVrHVA9snhGrhc6hrtRniqrrvbyGN8wtDih3NJGKbtn36n2ts3httEuxMTPdhgRNhvRN6gn685Dbs6bfTJ",
  "key7": "4HZveNJNwwUJZhzuYemWoDsqohoo6hFZRj8niJjkoRahTTDfAmpkafZJjdZej51XKe8XB4xTnpwwziVRCwfaQseG",
  "key8": "3Eh4X4NqdbR4FMDpYD2hBbLkfQG5B8ieR4L9w9maNBhfMUutn3eZuEQoNYEYMCgwzKwKYBaYP9bBs1WoKBFV9dHR",
  "key9": "2Ysgzm55p96MjDv6Rqk6AEb6VB39o22tQEkp4fdWWuXLieqS4imZQoeFjbyEmKYc5dY4oZyK8yFpRrLSQ1PkDvqf",
  "key10": "3Q9FnkvGdZHwQzbiWug9dL4oLsnrmQgMuQSxx7utELEm6AMp6WUmjAPVCpXgrW1MuaHBpbHPyXDQV34eiPsSF1LC",
  "key11": "2TZ8GKVfJUnk4Gj9EFniQwUoRHjYeSJNevRwxAoTbVj9jP5pYtHVB6ZUXaH48ao32BYLsgspWszwmVPJVk5MDFrQ",
  "key12": "5EzXr7PZnjqBUdt1TSVkCi9Vz1WcVXY44QPbRs9gzVZTHLGDiTAkBdQUPip213y1APXPxPyjmyK2q6RAKCYBUdd1",
  "key13": "3aaXQbadkLgHLUiUs991wqnaniejUxw9SGQMTADZKCkMyPtbcbHwWUyhKwi7FFNgEoNUu4ASUZj2mDJLNLUg5uvD",
  "key14": "3wnUcwBw4JPpK9jb4Ksm7wVK4UF1QRA6jj2SinjgmoPtcz4ocVm88vduMi5GAMHUzEGJD1wdrqXE4Vct3CgJQE99",
  "key15": "AdfxiaqQA79DeTujQ2xb3GY79fmSBR3Ea1FncTGLGjEPAEN3gMYSM9oKHSP4oArNKcwQX3jCuKp3cNfUkzYQKKk",
  "key16": "AyCXRescfx4QgGEDk2JuduXriNSV8XNUwZqJnxWa655KMAp8QoSpdvvdZr4Dzfw3zJx7cYjEs46tWVdRgbHV4hz",
  "key17": "3ASjYwPTKJUz3auuNyTnmnk1ewFdCswnbZtUPpZ8JDkyosLuRSKiNvkNztfgQQRVLfwFUCmxwaXShKoXNFMT95bu",
  "key18": "43ApZSEwk496nFdgrgTg1SnyiBTsfx3Et2wnaMVGYeWw8c2MFVQBqxayfEKAGctzkfbnTnoWtHyRz8GQgcxzGjtv",
  "key19": "vkSZmMx3A6GPgDCCS2Qnu3Je1xUtaVvuS7cwJacP87UQFFwx9rkRnsXrNUj5MGozGZFau1Wgzt2mt8mnK3jQPn3",
  "key20": "MALfi6VqHmaoED2eeDgWdcTT8dkP3BKK2nANyP5FmUF5ZyLehvbkxmvGuzy8VE7DRnAuBk84saFq245wu1WxPHm",
  "key21": "2SpLwTXnjBKo8BaC9wdRqqsyS9bWT32SWzFyFkahgqdHdx7MJtFbDEPxgYM6XD6JHd65818fcU8CzDvVXLjzu7yv",
  "key22": "24rr4mCwbacDwVH5Ze44D3qobbZxwdmX85c6Wi69TunUVVeottWXvXp4mdFmd13QMZ91tBTn79Ubas13jvfxAWjM",
  "key23": "36hsLB1WAGqKWaKPjJEv65BEtnqyijWdUN4Sc534VrES7UMm98ykhFm5mj9h7pPoyeVvudSY3jwERGBmaSdankR4",
  "key24": "4Srhcsbzr2AMWuiDnmGoHrkiJn1uKUiJbXzGvLevX79H5M1a3kVAcMRvdqdiZQ3pgLunVjgdXMBWhKcfxvTrET5J",
  "key25": "3KXgUXteCZJobPjGfjDASUzBBYLSYMgVsYg4JVAH4Wpp2qMo93d3P2yejVTGuSRATGdbac2ESbnY8p5jUX6HEWzc",
  "key26": "5HsPJPy4Nyu5etQsE6WXYaxLUjHTBuDC4m75EUwGCKTTmryqQ4Wjr8H3K2hZRvLFRjV7mVbqF4hEGfakZSC7ijnL",
  "key27": "628ZptaxUqF3uVSkVcWKWwdeZN3HwLt673sfhQ2qHKHyE9g6rjFR65e8D7cSAar6jChhkztBAQ7pw4DeJkAuAh9d",
  "key28": "UzVj3oVn4yXj1EqXcdEaYdyj5EB55tCZEXHm1MxMr2Vfbf1y5x5VaWCN5WPiHVeu8jcAfKjwPL91yK2AFYUbVhA",
  "key29": "64RfMZuWHjFFjkyfRczFHtZup6caqx69wVuKN6QMqFXCoVqw18rLdQ9vn41Ad17SyK9NFX6NagBvrWkSLYFQq7ru",
  "key30": "5VG7qKih85Vi32o39Y9j88BHtQZWjg6iqD41x9ebNcXUDhv1TJR1d8GVqVGXMcB84AeaPpiuTqe4JGsptGAZCMxg",
  "key31": "61PsL4deSb86X4QtU6Z8Q6TncS4ZdYookeXCXJqo98K93VGoXdhvYBWojuciXmnPorEvNTvhm5gfAswpme2BTmUU",
  "key32": "ztet1Cv6YAf1jKisNQJUafxSFx2RzJQYUnbh5ywtruveZpBoSQLiuWJEt1jNZ8nngvsy6nqpdKqCpQZk5RT4wCB",
  "key33": "3mAWnZDu1L54TNCtNW81K7srRcoMrpyRBiR3f23hJE6SvMFErCCeY6AVUkHRZ2Vt7KDaC7FrEtvWzLBzaUumBSP",
  "key34": "334FXEd3UYrm9zhnhoSEpS6G2tripKT23ircA7t8rRUrNFAw8XJSyvBu4fGhL2xz2tgSu8fqYJCUWRLxLR8LJWnY",
  "key35": "4HRorhakHpBWRRfAcbJxXmRv5s4roCct9WgqV5nfcWNzjC9bpMyitULaKjZecuFAY7z6xNsvkowu795ACXwPrfRz",
  "key36": "3XSsBih1JouKZkavd2Vwr9TjKhkKwxdxbTRQNayigxv1scxkgvK6t7J4Qy7UkjmQYYrAWNQErU31zSiuiSahWgPo",
  "key37": "4UzHyHm15wHrXEVYq11pQkVYoKGUeCMCCko7qDvzuH2qegMampFrFWP2n8msW6bNbgKmLjuL2qxk2FwGxE3jCHhE",
  "key38": "5Voegaa5sUNQrpqTCRhFk9PPbtrkK31HboxCJoHu3Ab3WVdoSH2sr7ajgbnndQDx1ev6V86ipM84WTRohsBVXaWe",
  "key39": "2D7iBYTEtaZm7a4aCYFyLvq1umJY33hg2d3GcswjD69WH47uwHKwCKHcroV1mrrajPow45g3MG94BTvgw91UyQKL",
  "key40": "3hRBmPbgAZ47vpSzEQq36HwpBuZAZqj7WGh2twWQPvF8stdu2qPCgWJvkgp6Rdd3F8MXh3dxVWRtZQJnGmiv5NJ7",
  "key41": "3f5wqAhAvKXfVjWnd67EmRtB9njGuTZDsQAetyGgYxaEnU7phiXx2AKeuXFfdMyNBmUvR6NxWLauBzAsUzXcE91z",
  "key42": "5e5yE4vLcVKbhFUcF45CNYL96AcMafwYnQQi13LxRx5j6RyhCvoigFzsspc9dqS4VHSY88vqfHYKpnaop8ypTKFN",
  "key43": "3n5u7hKbPM1f5Dk667K8tTznYuT1wqEKxaDg4jKBE29KgWo1Bg4LWaq1tViBkQaHWtCrVbnjaAFUq584czWYZ7EZ"
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
