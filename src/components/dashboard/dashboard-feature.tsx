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
    "TtMMJC9GXVrj3oyPqa3gcrM38HWhs7cgcZRRVBJsw9kFQRX82EjmhmksjQk3hednrTsGCSRtvNZ82bTff1VGtCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cEG6xHhePKq94smZ5VN8RCJNfQYeoX4P7dNcW9QUns4QzdMLknWKLFAFHv5CRpWzYmJda7cgxvcsjm72ynS2neK",
  "key1": "2JQFHtwKo5zKA7sSHotG4LvzfKjdYnsxdNjsSixWeKQe3tqmCmw5Qy6xJFUgHUJCxvQ2djrfQkHNjYR3X522AXgt",
  "key2": "3LzsutDSqt51Yo1DGkUTVvMQ6NpwraSjTLWDBCaxHRr4PAieVGuKMzffiqJ1QchVYR92qqXoULphU9xwmBMusVd1",
  "key3": "35jGAuw4MY9F2hPmS3sCWPPxuztG35uEkLAca8nViqQbkBMeYCX1QpygaWjjt2aGzdTZ6kwZq6boSxbfMP9XuWQN",
  "key4": "37jAUd3j23viUyKs4Ktk3ZkPEkqx7jDr8q2PjdnwkR4QGnnw7bnAitvVrNrNxYzrauTGPHGF2YPATbgNUdERmMYq",
  "key5": "2HgFZ6eCi5E3KT7BRnZTuU9aszdyjAwX69ZHtPdjTgjqWcEkSYFUvduSfYytcDsnoyHfVs6odJ2B9VjHWVWoYLd3",
  "key6": "4yqBJux1bdLQWoCYrKco5NMmsaps4GLHtivCwMb3YdS44FXbKV7FqxpMo4njxhSiinBPGCUusHGmaruupS6Dvwkj",
  "key7": "2gXK4cHQiiedaFruRpCGp5Yty1ssbA2xeUnr95zNt4FUy9DEUrFAPRS27QbnTUgkDqmD7i1hi7pf3uTqWLenYnZg",
  "key8": "5BshQnzxGVCeQ879envYMuWyms28o8tE1aNvWLwDvDyrFaL6endFHn72SGJfALkKURJkT6sKiVk12412A4pWFdT4",
  "key9": "4NkdCTWjuJAF7SseR9ErZRHkPRuTTFZb4Cx64MCv6vVzhSzGxQv2LHkGvutxAJa25ZWTehACwySU3uDfTHaBM8sm",
  "key10": "gECGkfwUgaaQ4ULDDo72BHNHSNfbjvnMLECNSuzBVtyRSxFUZqzDqhUbgP5rqT4ps6wp3kTGssNySVcNKLZxQJh",
  "key11": "5RtjTE3oZ4dmhhX6AEbLV8wisgWf66NExokHCXAdV58VUr7paPVg2Fym64kF8pnrSXg45BAGeVEf3RsCCcXahLiu",
  "key12": "673wbjTZWkneNKFcGeS2gK6orDuxG3V3byN2AVvjSdnFrE77b2qi9Rmt2oNNqHkcFo2WtDorLQq8w8Lw17V4o5ky",
  "key13": "4qRZTnHxacjnDg9cVWC7Gt4BDLo1BcXiYLNDw4JsLjVFEYWne7P8bspv8nfytiur7YnNugBDw2qFS42x3H2nYdXb",
  "key14": "2kiWnrsZxnzX96ujc2rmieooJmDsLHJKTZ3oZpfbrGbYfEGpZXVyyAyZmjMK3gDezVw9vUSFRQRDiQkaAKWUu5DY",
  "key15": "oV4wPryYoTrLg3RZWtUhydSMucBxS1wsLCkQQjHiNCC4rWYG8PMVbxUapvw2n32KHvznCPhU9iSHJaY2GddhVPt",
  "key16": "28sfykNM3TdSUVPvZwwjzk49ewuBPCJWoC3M5MTbj9FEGDUQJuxogPjDYmVPnri61KjUaSFxQVBgvVjFFLC8q95g",
  "key17": "4HKHBhYgYVgE47NcAYfxEyRrLETbb4H14k3Vq5v8wzNnKovTwCm7tRzpt9waP7w6FBSrZrpVJXKCdj6bG65MHBmY",
  "key18": "4bfh4bWra7jhMjaxyUFjo4jgqfGwF8mcVDw3zXzaYsa7h9JuZAPqtyhBgV6ubPxdM9SWornfAF7DRcxchRm6ZbBG",
  "key19": "5L8THet99FUPnvMEZmRGJMVKEuz2Je5C5z9kFHB8P7wyU9TrLQ3AMv6Q8PK2aBThQ7Hem8m589h95FbRKR4LGYFM",
  "key20": "5zZRw1vGZ4uFJx9cPtpLLQoBnhABPHSi73cFobCwXiC8YwMXVGsNBvkir7f3nzZNpkJZvXRo3Y5LQ4NNY8vY5CZ8",
  "key21": "492zVpgbzcvLEm4yR9QCoznWXTWgPrSHBkZEJQwS61n2ffp6BXz4SVw4kZ1TPLF7uYgLsw5aSuWM1K5mk3PMeqBk",
  "key22": "43hWeU46jXzBDnsA2XBKbHQgcmmGkVfDLpLopRZ9onJ7Zwn1ePWgmkDGHNreb4nimESnJXYEJpWbZUk6Ff7r3gim",
  "key23": "4CAZodhRrTTWoYoHBM28eJ2czKLcsB9YNnSivL9y46bbC1ZsaU3xhocszVi1G2gVwVWRFoboig74ntfvifsQP2hC",
  "key24": "37D6MwQE614NEv5bh5aRLe1SxnwYpoXnr5ZW55CTH33D4eKoxkXVtvQ3W7sxectmW8hdnjKvVsxaEzK7XwtMKWdy",
  "key25": "5W15GJur3fg69MxhGs4huak82wq3kmLMurKEqLNgoy2kAKKZz1P25kafDSRa1j6JSAZiRqN7228XhYNHMkjEjrmj",
  "key26": "2gVmnmgSLnnSJuGAEJS2AHwwS5XhsmTwL98wuxpiehfnhPHBLPaFiKucWNR1xCFf6mDdQwYnXn9VzRDkiPqUZjjv",
  "key27": "5SWD7ZnzGcj9QCxthZLih8wg6UBK6VvRRxEwf9sgNHdEwbVZP7giFdy7pzqrYE9tk52Zs6dHcfupTnzQMECaSYZk",
  "key28": "3YNJaMhPwz2osSa4gcNPrLWuZ5ahSt9TLtkGjfhdak1GP5pWbwQSHegUorSdUrv89923XksF1fDTbqw5o9mswRCG",
  "key29": "5tbFo5VPevXLsBA5VeWHMjocJQ1pNxDrLr87XRfQxHZo2zPoRvatj76F724bfuDtTxmxBW3sNFvmrSWHwo3CpJQE",
  "key30": "37RjdQqMkicJpBwWfmhCfNGnhvZujafkNkKbvzptQuC1ZWELtyARZ3Lcnbn59v7AXPohYMbAfHcFFvCMWLMk3EhU",
  "key31": "53rPEWLUEgrZF1DSR1VVDNbn4HSHDPMfVwFiv7eSt5gyapmqUSHfcL52rnB9c42RxNhVR6EYHmnPVLB8TavVrUcc",
  "key32": "5U7ESG7hda12ZcGScBsDHbMjASfkvUkbruG3og8pM5Gzi6YvEDpCcHe4Ek1gHv9XAtidDdcTQdZqwEepQpS3GWYP",
  "key33": "44kSjtS1rTo6rPgH7AmoL7BZmmf4m15iET54Ka6X2VVBmAReWfgK7hjErEPhS7DNVbN1KSZnTFTF6jqK7cnLNhFr",
  "key34": "33iT3uzj9gwkAg3F5K8cFJS4KVoZjiEPWeoey5VT5qesPbGheHxdfZzQjSJQGqjv4ifX5fKjF5nET2Y8pVNXRm3d",
  "key35": "czby6f8s1M2per4obeVU1ocefuGKR6ya9Pfk8LJ4b1NGeRW7U4f79PvpxWpHirvcuuJrMPnrMfYv8NPPVrg2xkC",
  "key36": "39oSwkxyc5RoD3SuwqVteQRGNJaDjwKxvKREozXDzFnVr7uhbrafyqf4AumjBup6X7zMB2o1UhJFmYvKe7MXFZzW",
  "key37": "5nQxQwK19qEkJDmz7npd6Rms9fqFUUMb1yDYVzy2ByAKX4LWmUmZEgrVHxhMSpeLWASXAjsbHxi2zRfij6vc7Dem",
  "key38": "4mVnjzCSRGAkrQC8uMFvS4twypwmDHaqHpg4ecDx3Vt63ZryUHuHvzxkrLKSC88xTVj3VTedZQXzojueHbffakWt",
  "key39": "4GXzUYk5XdEExSegFqfPMS9xgopXxtqf7VeUREbBEdpm76S7ww2xvuDycx2pYYpZc973vKbErwgzyVuDrM21EZ1s",
  "key40": "36TCwS3eskkUA6MgccHiAeZ2vr9SMcVbZix3xbzpehVV1jJW55Q4pombkyHtBiLddJAgNimwRV9KvHzmKuwPSkTz",
  "key41": "4FeVEN185Kq73xWtKLj9kUc82Lko7Wgnp8cyJS9LR3o28XKsrj2YKZeS2k8PfV2Wh7BaF1RPuxikabXScMeDdYFS",
  "key42": "3EYFfzDviYwu6wuqVq1KTMtL9utDKHPBuvbxQn1hAqBDJE36tWgDqQ7yd6pmB6nQSWPSPHTfvgXGQPVVtZ98uZfE",
  "key43": "21PDUWkULjkehNAYkYRFf9CHvQe4oXK6FcG6ah3crUQsSsu8LbJyv2HjpvvtnDWw2hBakcGv8Ma3hEcZ3EUcmiuy",
  "key44": "BLkhMzYenidTnhiwZAa4a6P5aqwMxHMH1PtnkbnhPwbTWiCY61QGMaiyWv1eRfJAJ2p9C5fdHVJiw3Zm1qw6UC4",
  "key45": "2Xw6BtgjR6RTnJgA6YTgNaKH4TTP9RAfR96fSPRbEwY7TYZwjYDBEAfVcnyXwachA889xFSLDMdihWHg5QKy9CYb",
  "key46": "2R4FnCAC5S6KEuJdUecFCXeFzhb5aibNrahwAS7wEdwEY6W4BepuLCR74CxgL6jk1HpjQankcWKBJTuydS7dWebe",
  "key47": "34CE6vKUGS6PGAiKsdyxSKcnagdsT5wJUhAnxqAYpvD3Cz7tsD9jJPKj2htjbmQvSgaRqN63k5hoHuTSMCUsJktH",
  "key48": "gjxX1BTbxAitr38dCFhZhQx65vaGAHJAdg7x3Tixwu4j34bDzR9QjeP99EEMGPabcPBch7eEAS2epHofqjDZ6T5"
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
