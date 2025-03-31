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
    "6495ztXLhJR8EFqsju9WmJedamdtVZV9Wp9tsK58QgxP9EJN4BcRbDNDFYrcesBmc3AiNUz79HWXdYQjiCzakFum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2buGSrxQFYi7qRFYnFSsYEhCk1uCHPvuNurnLKuLYDfiktCkSX8bDthX2ZkkADjouw2utDpTFzpzzJ2MTrZxV7W1",
  "key1": "Hhi9rkrUhtKVx4bDE4rU1GF8FBptUo7NjpJrhcrCdfixHULxH2gvP7S6AxMWQLr3bx3k7TEua5Jm6bA8VCkqURN",
  "key2": "2pcoe4pMMnC8bTRqPWaabVrq73suKMAVWx8hPQFEG28PF4eUamafYNoaSore6obTDHqq1vts5YNDZ6jev5ska5Xy",
  "key3": "5WFsTiiQicgkoYXQEaXA2wXmjYSDeszupXzYk98x4UYmFLR6s5s16NXKFqjEVJRtPTapD9SoZGGUHDSWwAfQDWLc",
  "key4": "rEttr4EEzt7ZjGKtB8hoNRhpZ1pErv1c7Gt6PmN25DCru5weUvCR9waLCsk6LqSKiZm1iM4jzgN59v9x5TgZsTp",
  "key5": "254xaLE3NaNR2RUiVsoDrdhNdYfj12CfCBFowqPm4wjRGQUqRPtcoh8MWFwDCiX2AkydykczPFJCmvV8uD164UCu",
  "key6": "2UCMV1gVF1St36XoWEmZGBwfuwHrFXQ6KLTiD4L5qA1VHZxrxTs11AjGDMG8DkVv7FZn8sHWEJbWS3Ae32PwTXdS",
  "key7": "3fxmj2jycrFo1Mkw1izEBMdkQwCZ4dD9tJ1du1W6bCqL3ZhSvHmezZ9fGceQrKL5phyVSxmYdiaeWCeDAipkgA3a",
  "key8": "zZ7jmHqiQE52FTALuPVJL7vmAwWHMwUiknM2uPx2zcvbg82BbMfKNus71bpQpbip2HPgNkFRFBsiwBTYeX9rHAW",
  "key9": "4Ee87XjGS1mZJfcAdH1MAWFv6wqg3FtWHtEZ2ku1yNNvwKpFU66b2vyHFxymJMJpgf1mAVckp9V3QN8gPRevnPvY",
  "key10": "2Uz5KJWRmgcYBBKojpinsvJ8x1pJfJP8e8PSqak9KHjUFSue4eUFBfKr5xpHkusu5yXSmStxsTr1MsC7YncbYzcW",
  "key11": "epi9BoNDdDKaZhGF8g5vxJXhBgjrhN1eto7QbE4zHaRtG6QKqS7P8L7ZJ9xRvxQoCGwPYnEUVGMjoPphGJ1ADET",
  "key12": "2GFEzKoEF2SoNmwVWDXfkCtZ7YRc7bLrwG3ATrxjcN5UYeX26pythsaxrjhofVxKqj8qtBQpfnDxyudoYf8u5cnt",
  "key13": "3Er6Q3DuP6xz3UBvReHFQYEHx5tLQXPSRjcDuTj1eMm81Uo16XLwDVpArwHV3nFxmzGSM15LYwutMSE64SQqUeHt",
  "key14": "GoQFc4JAFC9oMx7WH3sN4kA8z3sRL56SeYWM6BBAwzgcKvQpgoZFyt1PRWamN8LB8gSUELadxuikTxpSGLfeqwm",
  "key15": "5VsL66rSJwjPMfDhqg6Yv6hZQuZnkfpjugjR652djJrd1EGTbCcCWJonsiq4GuMiXXXSojZPLAcs4ZF3oVPyCWNM",
  "key16": "XCBPQiE7vZnPitcGmkr5oZrqeA9dVdKYLVnhwPAGudU2JzdQKj6ThHHaHXLdHboNoxkfhnpWT84q6jQgJrb79pE",
  "key17": "3QrjMxuHN27AT3EEuSnvjePXRLvzML9sbhmq7LpuUaFbw6aggESDKLPa4dh8kSrMudZE3e4CozBQX9gw7Ro5JAcL",
  "key18": "55r81aA1av5ZKXy5nDY3rTwJR8xFVAn6NVenc256eC9ktzvPFcH5UUYEfTskLVqbDFG1i6qAtBgy1N5H1wstwRyX",
  "key19": "2kB3FZWv4VDdkjvyZk63PrDYC3kXqVey1vamS3nXMvuwKGQwWPipFV4YW99MFUmZJeZQFymXMFmemXpnJmPymu6S",
  "key20": "4ot2x2EvDGQxjhRvqNpsmLRcFNYj32dtBuetRtnQqZhg8uyHFMSRfMYiukdShynP1q2xDxJNXXnvfG4fJYR3m1tH",
  "key21": "3gSCHMQrq7XsqCcqxBEYwU5B6d5ZAnWPCBH8EaPwgLBSAecu9PDk6ytU6BAwLa1PCzk5ban386Hb6dsMWYFM6JPV",
  "key22": "39WyjutkkwLG3NtjMqgRCVuLUBrphJ8Uv5EgSuTEpxxYaFzn5HREN1aje3vsCu6jbTma5kdsCuCqUhsdYH6oKxsq",
  "key23": "52H7vWvNQCNiJc19jiYQiQt8CikLxgzg2BRqXMurkiox4xGVoafj5nW5h437UCiyqme786eC7sJ5DYJF7Hmr3Sb4",
  "key24": "5dT5L5ESv8Dh7HZH1h2WNnSrJeiTZSVeQ964Vt9kbfj7Sj8Gx3Vy4wkVxfCLPMF1HWURF354KWAApox3rSixwUS5",
  "key25": "3YMJSEvGBhTdVxqpu5GqkqjnFqgkxr2MqoYZEBgunB1zUTFvW9r8E4APjVjFqx4RmL9tWnrbtA3ik2vgrvbW6rMJ",
  "key26": "4sVJMZvW8CCvwyRgEs4hXnmgxt9rW3jn8gYiBeJfvD8f3jWEFDLT49SoUPmYRhLmJxhKW2StbrLjsKZyy6XZQtpC",
  "key27": "4WiU6z5HezsqNnALixsMQWQck8JQbnFnJAgqXkMTG89TmB9cpUp69sgrW4j8k3wU6h54kvSuhDHrGkwyxoNCmgn6",
  "key28": "2w2zBs9L4PsndYKJzXzR6ikJvKQFBXXL9RPDg42w4aGUbBNiZUypk4sDuJzaZaNMxGhkbbqkS99WGRQocLV5Erb9",
  "key29": "2T1YeNJmLg8vFrt9dfF6LB8tJ4bFyzxr2p2TJhwQV1mN3Fnn7P8aky5gySH1ptsxjmqmPTcj44DP5Yzwom8vDJsc",
  "key30": "2kcdiKnySJhMjxk2BHCK5B6LEDBBC3Hvwx4yZg6kSUrGuRpNQwdtbequ361px3LRovRwWaBBCXFrUyih5KPGy5Tj",
  "key31": "3waK7txZKWRvoptTtf1mnuJfokAx6uNsXPhtqJ7pZuZhur4iVwPiuuT69fqkkMjk9JPUr57n7tisEs1Lfdaf1ADL",
  "key32": "Ko3V5qmbFht7NNzQDLtrFkB83dyJS3yL9VJDs2ykEqWixutX1CdCTbkyf2mkajJKRPn22HFxK36nqHqs73z6k3S",
  "key33": "2jVpEWiEMHKA7bvxRuCKpP4ZWHEKteZ6dnT6gdRGrfDjYAi3fDTCNo3t2Ak9MLNwEMGAc68oR57phvL3taT6tGf9",
  "key34": "2rCMmwzMnVHAoH5rxCP3axVTe9b5bP1T1eHibreKPziPLJqoUFW8N96iAmuGyWhqdh5AENBN2Q5ywRYnxoLZj2jW",
  "key35": "2RvHTRuCDhvrjuWnr34QZkDzucLm4Z8ES7XY96urmwhi6igxP5T9f6k6PvNLo11x5wmtyc9b727HPHXXqtKGNGyP",
  "key36": "4XnC1v1XVif2Z82Qi8yKHBkTaUr8ovhdRGLuPHsHeYyMEVV2uP6BcNTCiFvnAjwaBNQuGnq4FqAA4HP1NN9zgHDW",
  "key37": "55bEXiiAkPRrpZ7RiPrJGdyrJKKCD3brqARpAZZ51CDEDrBcybBAZrUopgoBrZaYHN632QLNqVYmJGSegyt7uyB9",
  "key38": "2HU9xHreFP4C3UPwNHBWrvxg6gW9A5WQE5pCGGWiFzENGj8XiN3vLtud8a788Qu6fVUjh67QzqF2EhA6iVSQsE5k",
  "key39": "3xsUzvgvpUbQ2Kh4TvWKuBxUM3XxMGmDH2fWEgmcFFaS4VwcgeLaKkcD34uvtYzfdHTRcvJxARUf9vbKaYvz7Y24",
  "key40": "GqUSmjp8dF68EVQRZ2ioBSu5pyPhK8xC7M1khTwWMigC1CmcAqorup2FeTAjwAQtdoQV8BkiLafny3iFtrpBbPD",
  "key41": "5utQ7UgYMZ59eLr3LUbYwDoZVSxT2aFNsARCmdJaQuKGv6Bja4iC4PfmRTicbkYLZFYcXxb4zxoUqDCzcVgQ86d6",
  "key42": "7zkMcd1RcXbjz7sWhcJkpPDxYEvEtVNYRHuKhTzLKzG7rS3MU5tkGc2U8eRuBz1TGLRkTyQPQMTPorZyPG1cLMs",
  "key43": "67qjwAbn4B7KJKAm6spRYdRTYjDkXvY6UariP18ARvZf3CdPTYdY1Q1XZvGhZHWRRiLiBHH5tjdkAit3t52J1gXu",
  "key44": "5gRr4c3tBoJXcuiEEhmqmWdQs2C6Qv1LqM2yTAwaN1jf8Ehgpm7WAc2FZBWvLDLHNBNQXXMV5fdinRGBWuKoS5G2",
  "key45": "2rfs8V4s5Nw4Ty71wuwrC5oRMVK9uSs3ZVHtdYnVG3En6ra2RCPTh1aJwPxKQtgonyY44PSbdHdyirUEcwRLZbXT",
  "key46": "2KepLRzSWDvA9KX3Q4wu1spX7VCnRPeYtGo9GZMd2WCGnc1i93NtpdQq1kK8cM191tnQbPtPHvhbD2dEUyxzmGW3"
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
