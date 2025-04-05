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
    "4kzPgu12GydB3mZozdoYityMrFj1woaWp3asz4dmP2uha2jsi55AVZFLTVfwgQhjZCWruZk8BQz2QbcyACdcja61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zG7ipqaquXPkoXBxggrEsU7KapES6MG1SDPCrpWf2Ltz5cZnStM7zrAa16Y5ghgGYbAKmqgXGjDwaQWRMocC9dQ",
  "key1": "561pgTqCHAEEBiXk6WghWFqoU4vZzj3WF1dFS4urXwM2X1x3QsEx9BaacD9zqJWu1vyDj1TgzczfaeDAqQZ7vFwt",
  "key2": "2DC987bDTFQBhPZoAKKvzDhBKKsMM7T8FkpkSPsLSEogL1VAgz1GxFF4zoUCucBMWYQXnaBSJYED7ytBK8zJngkh",
  "key3": "3iB6CYwAtYb1fyz69LDnSLbjrtgBxg17QkPEvAw2zxSR6qs6kfWJyFhmFkYr5m8m4MgcEYMTGpFMnZHdDVUmrjgj",
  "key4": "3JowLdjdRyUg5rrwskmps8ahzZvBbfEky6j4gvnKTHn2iqLqd9cQv83advQUiXpBvhMPY14KKrUkGt6wmGVJK9mu",
  "key5": "gMCxC53Svyn91jzghywry6cNJFz4hT5CbGx5XaqYn8sjQzUbx3xM92vdnH6HbVr3j8YRoxahnjkBzsBH1k7uUrH",
  "key6": "4pFknizrqgtSh1LV2jtenTRrMKCE9CgaEK4xM9gJUGkk1yspGFoyrS5jTkYEFKUU5JSY6n5SpEcGTBJpuGSPrFXq",
  "key7": "5MLEcJL9j6RUxnNDkKPsnvPkULmjghzG4Ki7MDcPQfRQuKWeaFTJwiSqnPRMvtT4e85QZfrFUULZYFt7BcBKtCM3",
  "key8": "5H7Ps1yfp7uAWsxpgqhgYHLBG8ncXC4hNxNJUPcFd7dFyTkDNLdCmcu36R8qTSBAt7c4BBRaKPv4Xbci9WSUC9k3",
  "key9": "2VF98niBAEuALm2r8dXvrSw6mfDckrMFkhpz8UdFAMzxRb5QfRzsYpWgPCeXzsVpJYQm6LUYNYmM6kNe2s7UASmZ",
  "key10": "2p7E7NYm17No6b7wfGigX7vmhaKQ5BEheFg5M17YRDiDGja4cmCZratXLaYdJc7etrJhRRS9pqXebYy2H3su3w1d",
  "key11": "8fs3ES9XTyCqjRFn8bigkuECVTrSmCFcVioKt7UPd19sCQSxxTpnZmH8Fd2gwdbng8XNbfSZoMrQdXL4Aeu7zrS",
  "key12": "rzQBSSJhxjW7waFbV77BJ6KLxdD2LtByxgCp5Rac42badgKEPji1EFGzyQGGDjQVnidGg57DoUUTkvXCX1AJ7TN",
  "key13": "3kSMZJF71Xx1bSPFUnEh9jd5MsrBxSB3BsqYkHF9YAvPietvE9B9fz2DKSGmWWRBthEbVjGobArSS3ryzs3jhxvk",
  "key14": "2DsAdDftVfwm9Ku5io9YGMKtcxgBC9m4i6D1GhZEZ9LqTPqfbchUhnwwkFmLJghgbEFR8t7LDycedmwB9TtKptAE",
  "key15": "2cJ4hH5V1pXFsKFo7grahiDnAKiqQvHS9vJbuD9gqUZ9CfZgr6Jm3d787acxMeAzKnDLyErTbe7km6nV63dDvsWZ",
  "key16": "5CEBd7zfv4mCePi6BJY53RAWGo7XGsSSgLBeQAMacfthJqjqEzBUnNeoyWQVBsq3afUrm1vmcZpbsvt7aKh2Dq1Z",
  "key17": "3q1uVoLrbXs5Qoih4s8qmGYTy9MWcrroAs5j9CDycrx8MTJYdmKr425QYayqUGmu12i76pfHoKxssT7A2eEQRkBB",
  "key18": "5B79qYA5CQqtKaVKfeoGTHrh266qJRYaBD886wK7iPsXK5Cb3DRGjrWcCLbZ9Y3W9jjiTKktgXePL2vLMbGNRQLg",
  "key19": "3dtxwHWJ7HwWEKc1HmX31jYPsFs5McSiRFntvqtF6EYLzA6dhWv1bQS2M8fYV5qg7sYFNcct4u6unfanmS85uSXC",
  "key20": "kje4NXJgjdGST7SknPAkLkdf19s2kK9fLqVTm8vosH3pP43bFSvGNmLvMxwdT8eQUt4n71Pn5Nhuzp4pb5wm3e8",
  "key21": "5krLz7cDRUh9rv8Gidr6z9JJeFTu4gzTfVqA3S74KLtm1csHgw8rUTeWCYwctsb9pqMgmPqPCtenJ5p7ZNUNtVEp",
  "key22": "2ScdSkyYdCqQsnxbPjZWgpRewtneQn2jY75DtyrqnRuMHS2HDVFfvcT5Yvq5xrUtGd88Y1VpyN5wEyQvLqCBowon",
  "key23": "3Kf8of1cA9NaKnQZiBLqFRCpTG1udXkWr82yJomu88578uZmDneC8fAEdqDqkZCV2zgMiB8YRSuZAmdSozBL46Rt",
  "key24": "4b5yfFAk5LokNuKgKDjpdvWUSbursroKZkp6b1tKny3fSss8j6g1EurFbijdM5ifWULV8ShQKGFs3VoMhKTRf4UL",
  "key25": "3oAFiafAWMAKeAyBC5QvheFA8rGHhXAQxD1fFAmq24D46WHLTK2WVN2LVChHHNbBgAr8onGdqrkApq3Ugh4FR5ex",
  "key26": "3kjCAjbF9Hr5GAbPmFax5KdaCZpf2ukcjVCjPurYYnbCbEy9TSxY5zv13jzZdE1FL575wpcWexwfG1YwJYCkpcwQ",
  "key27": "7aiDLR83j4MLuMNMGvUYJydRoBNQqsgfuYzUQESEewpNw482AxghjFSfGnTLmcEF6kW1A7gi2yTJ7WHEUqZGy3N",
  "key28": "wSpyUgPFp6BfMufvKLyDKUC9TnFzW1D6uYMRyEqmarNoCyCjRX8CQj8zo3P18HBW7uXtzeBmev13w4CpBNCn2Rn",
  "key29": "G66bUUUg9TGkV1vZ4maBkRvZiB3vMzYqCtBiPVa8DjksXV4ThV3mdip6JZJtmiSHVwhRmdqxwHU1a44ZMKR9Zbf",
  "key30": "67BTrBvZYWS2Bw23iW8X1Dqs6kBifWsRpqP8E8mqq2X73Kvy6AtiMQXekhjs9yqzbZxAcGtqEjL44qEUwL77Tbvs",
  "key31": "2jbc9udrxtP4Lx64PfbjsZNJ9yVT99N343aFSprKy4QtkttedxTZNoRhSnNTq9iP8XTx2RcEHfpT9UobL9Tf8u5j",
  "key32": "2tMQQwDXEkKGM9y95dP7hawd3w94z75XCM8QmAojiPiHh3yeETMD3gJ8Abd7CRUZUFQicYDQTXkXP5wY9YJWqhXG",
  "key33": "3LfoDr8sxRH95HN8ktDQ4L2JGVbsGfLyR1FQMfMWpA1XSXubYx45TMQPZvnX2E9xMHkumJiX1fdz8Tksfigyv3Vc",
  "key34": "5EuGYWtUbx3tbTJvxJGqQXE7o8hYa4PWPk56Jmabmu1kUcYSiWbtjyARsWtBVTbaTpm2boZq5RhAK74frDQ86Pv3",
  "key35": "5vS8SuGKckqFJEUSctUMpfo95iJtas9kvsJydooANdHYQ3Qu1qi6E9edgS3VDe113hx1CPyEYyQyNmXzcE1jmjBj",
  "key36": "42eSATRKWUaQbChmsUUGQfHSzYdaY2rdv4DP31wCfjpWjhR2onSgcEjgsxiMFdZBcERpM3LpDuU6aSZBCbzfc2T3",
  "key37": "26pAqyyUGTyGPost6WnozMcNNjvsLwYY1baLNbPb9ZqhG5opyg3opWmCemfMkW2p1STNzDWcGkaDFU3S3LD5629B",
  "key38": "5xiYAX1rQA49Vf7dfWiN5on8pXqzrUNMzeP4YwMCJVrXXyMSpy1mwAza9dUVGXtaji19vdUDHR6ctLsvupr6UrFR",
  "key39": "2nUM2Y9f67CqsevwSYBE2s5BUiJ9SeCFaXb5poDfe2QjFqREm6qkuwiJssUcyp49L9KmDNfdVXNCawmEj36DwFc4",
  "key40": "4uBAMJH8tjuyfFCmUmM2HgyBZPX7V4DajfitKQf51RpjjgCh64JSH9UEpepcB7zx6JRSsExeF2MyDSgqXRkPW1VL",
  "key41": "4xpEevFA1Gt8d7GnzTouEb32Vsv3nUEttdkowP65KsB2bKsbZPrV57z4ME3658rS1spQCtXkPjeS71Ndda1XKpoA",
  "key42": "56uuGTrkV4mzQAzGNSF56t3x2gYAfgB9m3jra34p8jCAK1RMJ9PcTLL6TXuwNR7Esgv3Am99X6ehDacokNrZ3t5A",
  "key43": "43NkDcFkkdEmbiSATdar6jKYEGNjkVs1whjEVMeKth3mM28uQPNSCEDhm2tsdm3L9dxTspAJV64pJQNxgfnxugPS",
  "key44": "T7ZK5AczGXmzsMpiMgL1p3pZ6Bz8QmnNX6VVEhBNnH5X3VcifZGSUjwg9awkNJ9YYGMkGQkCA5cypwa6tYMqtoP",
  "key45": "28yW3TQXWUSEdJjoXWbKdZwyhvuyvYxnnjH4kxHnaMfHUq71hr7tuPbszGdrMLPfJfYsXBGyBp9tniKRNZmPJDke"
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
