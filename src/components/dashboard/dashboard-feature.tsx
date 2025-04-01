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
    "3BRPJYBgoU2yA5XsxMt4AWpEnjdB9JXNQ5rM8XhAodnSsYrNd8Sw4skUGR6fjNMD1LT491VypJFVJUepQqFjjSkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFXatCrnnJKv6AmFJrGps4Gw4yyaJAkac1Nq8NLrMa67Xg39TWxmpKrLHmnLWugLiJwGpV2Y1EC5P64eSkcwkiE",
  "key1": "3gLSQ1Mi8dPCUGFUuY4kzn2qvXZDfFWRnm1zQzAnwQaekCfvWqq9gcDSPhH8zsPdfoAS8nSQUxGMzSW6ZbT44uuo",
  "key2": "4CpdggiuvCV9HgFipttYWbyNWRvtG8Cz9Sd4BDsQHKEs5WgXJNNSHr6TRkjUmjMuioZNQg35kNfrY6tbRFLxspHL",
  "key3": "3CN7412hPjcgeSCS3dzrpiFa21KDs5ZZVjWjukiXNfhot84H8i9Dq4nHfvtSownb7EC8x8JCtozUn74B27Ku4T1t",
  "key4": "3xEcnwGWX5jTnAAQNc5yybGmikJZcgq2ecr96FiLo6tYHRJC1xhe6oNynUx6X3F6BaoM4xj6Rk9sJAujcdZtekSL",
  "key5": "38uBypDrAmNVWkHP8XTXdtEjd3v5Wau2mrSwG45HWxVfbpm6gvfmbqGwsW7DsScrbm2vdR5ugLrVFs4nh677q3gP",
  "key6": "5jJ5CcDH1MNpNwby7WruNgBdiRtFPyNKsbjwbTpg8cr2EWi8TQnnUkBkxrekrx3Utm2Gm1hf7LMRd1cLK619CScu",
  "key7": "239za63P7HehM5M7vrZ4Vetj9HicEc3AKrnxm2HbAJmStz5CTwrynsPGhjH6QrvQs7ujkP8cMV9YaiN2tGK3Rn8V",
  "key8": "Wb5DSWaAJu3LYaCgE1Mn9rrzBvKQgff7ReT7BM6vwXUuQ8hzmSQDG3uoU2MhqjMQLKqj6PENfys4jjJDWHzfdHW",
  "key9": "5Cb6jbf256pEUQgetSUHU1c5fHukUWbMZqiv3GGZJv9RXLHbYVeF25SHQDKdDgcdn6LCZkwEdMCvbmNzcHtUGAwH",
  "key10": "3CUeG5byJanSNiE6ndNP5Kk2HF2jRy2zj9Qi7a3gw6ux6VG9pfn97ELmDkNkm3vMfgmN2kRxTB8xD9MuotyPDWiC",
  "key11": "2Q28AhdmD1W7pUCu7zM7vkisVDiosZoNpWdMJXmwT9GcnC5Uj5CCctKgc86kV9VEGDegSHj1mwkNtKuDioC7qaUP",
  "key12": "27wz1bkjiLkRsAH73vSh2V6eDaDaoQMNBWgW1wCwhAKdbRFQHiqC6NCqUJPiKoUGtmpgsgrRH5nnV4dHy1u9xwu8",
  "key13": "4j2Au8ixBTG2UPABHo469dVgE3A7j3vg37cWnijQPs3ZGh6AP372rGXA9SKZDPvxw5sm5evKUanNuZMmB2GYfFhE",
  "key14": "3ym5J4hSoudd7fEE5nuuLLuEaiSzgDexX3y5jnNQEWku2VANUoCm1FYBRBuRRMWqmAZAgbS5CcrRTCs4XcXDFHDX",
  "key15": "3s6mZHZZHf4YqtoCez2fx4ScQ4f9ccrTirvouisjzYEZhmyiNhf9mS1zeFLxw67VosSRhXsdyfqLB7onSP8xRyPX",
  "key16": "4VJsSXAWADbKAkXTaEAbZf6YqJFonu36bUvE6QXwhn7hgRgjiHZ2jdnkfhh5MXXXfbQBJ72THkNz7biVZJV5n3Gx",
  "key17": "34yCUHcxuhkc5QX8K71CzjtxksRM5x3ZcxFWHqFt9dFrhjiFQ62Prh8PSTy3Qna2s8Yc7gXSKUJREorNCNTobTD9",
  "key18": "56Nf9WQ5DQLyJKQrUPsENpwaWAfyDmY4Pnc6oLKuySQAbUtVbdBRi2b8v8tgRrKZismkKApc1ywbxDpinmm2NyUc",
  "key19": "VdukkJhE2eSUUjwUtYRSVUFK9ywNAVjwvzY3W7DtBtuZsW8Prd8LXKedaxat63DKqeURktsXZENxdVu5whPt3md",
  "key20": "36U96gMcngPkqwa14Ld3Cgdr9jg3ucUES8QLF4Z6qe7DtkBgRxKiE44xiqvgW2vJf2HBTXyjKrY3PpQnktvsiwR1",
  "key21": "rSizh3s1anoraVXf4JjJRYCpvzy1gLpKjnvzJXt9Bsb3veLpe2hYAjFiVA1iBExKFkmQfRs42g1amRR9Cf2vRoT",
  "key22": "2oKST9ioAo4iXr9KVpr9tW3JKgDSrH8ZjFyQ5vQUT8dRW3HdCiBWZukcQBbwSbduTHqHPsKEDF8wX7Amyo2cLbrc",
  "key23": "4xH8Pr7xGw71DEeyNdpVpx1Ns2rPAmPHoKWsTS99TQzxecU2ctAN5Wekci6K9Ljxj1jJBMMAt9rsF3DWwmZy6AXM",
  "key24": "4zMFpW3SKfbPYG4kFtAqvD72JvSn63wJsWqwqKUfuV6AuFkXSTPAn8WzKQG6FdinC17mMkELqEsHsn3YCjPLPP2K",
  "key25": "4KWGjdCTYsP12tWQGxewbj4aXS3xrxaN2DP8XH3Z2V1Fzwp1zafH18SsSHkF8WxhmBPjKQiyiqkEM3j8d79Vgt6t",
  "key26": "2pcSDKh2G1aPpxQAiAWxpKhwrxS5PQGGL5tfbXo6WYuoBVfeY4EQaZkhfuXtuXoVARvaZwwbWNhJZxRtzvcZ5jYx",
  "key27": "2H4NreNqw4XSTMD8MumksPtVT8DkpUgECZswAXFb21ReWv2rbogBdUapFPpPW34dMv2wkNPxyE7S6B4uVKws2Ur2",
  "key28": "3ap55XTXB4Ku11SrFur3HutiUxDvt3KWzczo18xuotgXaEMeVJR1sNGPnBybukWiqbERSAju57fVvrtCGc5wShK4",
  "key29": "4oefg8wHMMvUVpQCM7kFFbzqEqLWzenEHB16Pm5zG1Qn3NVDDkWA5ihQnGAQqio7rQteNV5HHaRg3sQrAeUnh9FP",
  "key30": "5JXrY2yHzPzpk6XDZH4v5DF7L1pKwATHrSSMxGhEkraGieSHCwjTmHVMCMce8MbTZFZRJx9wJu9CHVkJSzKspTRj",
  "key31": "2c3YJaVE8Syzbk7pqivskBXqryGGtaEEFM4veSQVkZGSaHfx1PihEBpwce4T5ut25wfbL8sQD12vDMTPZXKdd7JF",
  "key32": "5JN6NQLhbQRQhymuKduc1S7w7CP9Cwc2YPQDxE3i3puPHVAUPxBAShSBYhfTbtqyWfp6htz1NyCoesVDgMYgMNv4",
  "key33": "3Rw4bCWeQ8QhPvJuiByX1uYZjxkPdd48aGK8S5r9TkWyusHTi8hYpJo6ycuQ1tY2W1vJ3oREKKD3Aa6XKp6AHEvM",
  "key34": "5oZQ9RQrBZ23PQqp9DvAJR79QDr6cD3bn53PFTZTPwa6MrCmhRxRPTUHu2LW6cRX3McNJ9aq4DeqGNfMzP9TGD4u",
  "key35": "5jB96eKteiRYjijo9rDGymeu9Y9ECTA25P11qsqCuFkH6ixUtvJgdGmjWqnfJqP7yCALF1sJmk1F8CSvbYaFz9h1",
  "key36": "zGyCL2JCKZDJCgDce3N9U6jUNRtjBZb7d44K3Qvyu3aTVYC2BCc9Tp43bkTopgWUQgWBbkGwo5vT3F3mJovg2wB",
  "key37": "2qZvwC64ykYtphxzk7Eypn5mSjrJZqYmm2GwdxdXiLAYACG8hzBmysx3nCEMeV56pAbEvkiTNgaYBTTfJAgwtwoq",
  "key38": "2pfCgoe3iqngVk5Ph7Khbj2b2Wd3BtdVrv9CbjBdERzHfATKo4RKTZpnbApgaxTJ5pn2CzVEB69rt4DDPMqLieqG"
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
