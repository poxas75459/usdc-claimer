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
    "62PCiLyCN4sScPMwqbhXvnGJMAFbnT3vARJuRxN9Y2vEVAU6jVgmokmFZU444U5fVDCQSKHc73Rp36hkP1hUh8o1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63u9oc1XdREM9T9TozazRctytecgmt7eNZDwcEr2UVpQ5vvy8STjMqgifgPQ84jkeiyGFPuqAHtErzL5x3HhCrR5",
  "key1": "2bMfVuBegbzSrpeMFfjjpmv3ocWRMGEUgKRRPMdCDuxwnvmboxqn4WDjUo7rfzMdnsNSHFG9sfP9ikM446qzMQZP",
  "key2": "556wXwNSsuGKRb7B4hLw41ytkvcczHUfDkUTm7YnsTb3cPeSsG8MZzNaTunGCj6Tw9obyRNu1TN9HmDtBAVncAxi",
  "key3": "217tk2vtbj8Q2WQAjzTd1pJ9Q6UE9fLM8hH7Rg1cmzNb64DbEfZ3CRejLv4NVtHaiS5z8uS6bPgU52wJ5DZTt9yv",
  "key4": "2RZ2yRXM5MNLdZ1uLUxL9aLLU1YcW32Pj8gdWsjNDV8NkHZHm8NcfMu5vR4sxoEhfrFExsHdmnUy3AJXcKCstHuS",
  "key5": "4S1jcgr1dyfgJdssNAAWezYgpDu5Zu7rs4PosWxrptwdiWDYWTBsJ6Fbc2HYr3S1DM14YCaVkFykBvsyvwX8gdPB",
  "key6": "3qEtYXsHQ9AGpgkCwYwWyJXm7PpqXeppt414dt6J3g3GCXaueqV1PPsmxD2LA2kB5ekVUaBcMMdhFsnfR2XX6mm1",
  "key7": "5UnZYGxX6HLAuBCfKrvnpzD6AnVKD5XMT2b1wu1Dku5bFsY1eW9TVfntBaZs3gjzFXh9R4taekcdXMdYz8TEHeh8",
  "key8": "63Vr3MXxAvrgh3BugTpCrrUifoBZKwLsqGyMth1ydDQVJfmRQ2Pg91vkwqx74AAhB8NUwJXegwyLUWMTsbr4h5gY",
  "key9": "2Jobo6SwHaY9wgUG8zjWN6jPJjzf4n1jGQ2mRmh662v2N2R7BHajSkoUNk5EXLQK1cVkGWF8jkqWhiCLPMqH11Gy",
  "key10": "2Qd3y6svZNA4BkLqFdqwebTCpSVH4BPnKGFr92rG1Gsh8uo6NhZvojCs2KfVMNUstJDtxqj1DoLXNtMg3PA2njuq",
  "key11": "5iQh9rq6SQUtBq2tJF3krfWmwRsvksF1U3opaK3bk753AMeY55rGvkvBRUFGkeVForYZ4fBiE3v8KTH4jfMBjY2B",
  "key12": "3ra9CQDe8QqypcWiu2iMWRVAZXMCvTBJZwsGiLebMhQhhDaVB9ePHhPLs5oEWSXZweVkbkKd7ZqXtBJwkEZujgZ1",
  "key13": "3Q3y8b4kaSgJbcRe9pbe29nyX73pT5pabiQKUcfirnFWBy4Xkhq39q9W9Cg5tKEi9VAAEfhN3JKYncQ5m1gG8vLf",
  "key14": "3yosnnMgUHahAeTPtuSqhpopFspavSHiimoYCLKTACAjGsbAVq75PbfhWvCYgZsFsZ62mzxNyi7vhZyyCvW1gKzS",
  "key15": "5nz1hMjH9bJVQDxbG7iy5yRBczR1uq9TZSRUxe2UKfdRyHvRWZjX2DsdM8RuKyApoaQG8CDnB6Qcgn5BWMtimwFb",
  "key16": "3PyT2NEiM1NFF5MQxHd3hLhKY77gbZKwv8fwWLSnezip8W8r1pAqxBCmM3VdcH4XNrje6HTxUrRvuwi7KTSG8zGm",
  "key17": "BJhX2TdHVo9vD6A2LQpxgdB7YXquBiWDChXo5yf3NGrVp2Y9Jg9V7SaEH1yrrTvCRb5P1KQ4UwPveWo1mraVoeK",
  "key18": "cCcRbUvyff3KrrHzLTP5EGtVHhSd3NfHyy6kcjsK27L2ejemyrxFXKxnF7My6VPvGNd3JPFybsyU72uFSNfhRKK",
  "key19": "5i4vj6yZreJuAUE85UkEEt6rY9K4pzz8LkMS7wEdUoFYpgj6jNJqgb3pkZ4zQxJ3yVGMXEWQMGyjNQya8C7NBGDZ",
  "key20": "4MUJoVKTVBa6azvUPwjWUFCHaLMx9QFwWRJUKT3hJXZjwstj9TWjyd4sQ5TLQeZEHkxkgHzw6YGQ5aCkkD3w6kCn",
  "key21": "v4nmRUNSSVWgeqZzmyt41nbUeAj2DjENXsrXvYhsxf5hD934DBqy9DApExdEP837U1oWEzrgZ92CN1pefmUNXWo",
  "key22": "a2dJGejSyztn2fPjpnJQYtZjeMsBh1kpd7XEXwJvVsEVdZVKWZQ5LcCqPBv21vudTBx6h9QoM6MDer4vqJuoR9h",
  "key23": "5YjLQQ3ZNWGRmeXx1UkcL8oSUQgrTpM3xrJZFpyC7u5fsj9ueiWrVvMkKsTz2UfL9c6XKZJ59GEN4Yt5YGAAurr1",
  "key24": "27zPhvHxxQCJbacHc4DNhchwP1DmP2XYecXWFBm1nehijPwYamdebWX7GqKW9XZqNroGKvSu9FSXwVLG9CCFrDQE",
  "key25": "4rQ6CDpTW9m5BDC8t8VcPWuXDbA1h66nUqRkM7BYNV8EQHSFsUJNWWeXYuNJy7y24Sp3833NEoU1wZCWn9kPRuPD",
  "key26": "4FfxMg9WPo7CL6hGE9DVDdGcrPR8sqdWyLbwc7LNgYdau9SSSxsdSb3kjFEkRz1C4mC3Fhr9f41UD6KNz7J6i82n",
  "key27": "4WDXE48DessKTXZqvDZnkvinx4apvdsJiAWWW52ECyR9HgzMuC7StL2HLrnbdU5vw4gGSNxHN6eUYTtE1CDfxCc2",
  "key28": "56T47tGQYuVtfogPUXGU3hUhwWWACYe45i68QrHuDMbr9oSDyhZz6WBo3Jw8D4LonudAF4nnmvEpvKXLH6BPDFYd",
  "key29": "4ZBfDtWpsz6nkLb6TvbBKTzxHuvVEBmAhzC52XH2GonrtPd5JcVqkz1Yw9C1MW5j5dCj487cDyLN7eAyPsjbUdig",
  "key30": "27bxSaAHTXwTzyBYVoeEX4BEYaUuPSgeT9RJPU9NZsYyWSNkk8TuXRRwJYNEgeAi8Vu9vsHyAuMv19Kv3aNJMwhL",
  "key31": "T8RKXRzxCV1NZknwzpmq1owtawcYGzorCBSoCdvocazDomJSS6aNA3R7NenUTmsi6L5Gw1AA7x4694S8nTSMGfr",
  "key32": "FS3ec7YeQmvRZ6KNJ5pBBHih5XreFwgAPpjY9q8UDRi87YfrezxEEJBv4TzswCCXaBn3Hu4yQv7UwBvzf6CFkHt",
  "key33": "3ixo6HfFKdfcv446aiceQtbvCK9uyceU4B2S2qsbYscW38vpuXbnifrverdGxrAF1P6FWfFshPvUEjFdgyy1nWR6",
  "key34": "2K8MRznoMQxj67xzJ8CSa95B5GMcpeDoHXsSgBJrYfD6qRPivDM6gFCBQweiGT7v7W5dHUgmXxiia46nG1VfBgyq",
  "key35": "231iJfREecCyRGNjARp48Zw2Gzvj3kMxYZGnDHryXz8j6ymCmc3xh5xmF7SRKdjy8g4mDhh9tTjBbj9ZC54AKUKB",
  "key36": "3Tvy17V2FC6ogLo3aP1KcWC7ob6REEvS96oHVF1jtbGtcBnhJhbvYTwQcE9TgosqjBhnLVCoxFhrLnx9DAtXeeg7",
  "key37": "52RpsAZpUhsnBAmh7chbCKpfwUD9viLkzrBRHbE1pXsCSVi4QrKpzehYeCZp7sxwgJhR7kMpYpsWPtPJodaK8Pzi",
  "key38": "3r5bTeWJCk7wSFcvurKuGfvrgKw58un3tMXLN8MDxLrK3kL7cZbnojTTe3Ti6WMMZoGuAv9XDPqfh9QcEi9oXE5c",
  "key39": "3QvufCvTTxqjDvdK8e2ruCRGJ7Zuq457Rsrg7zWaJJUowWNHRTFmrwX22JR1mifw8U9RZ3xjjUeVU1pa9BmkyGWc",
  "key40": "2mJ3fmY2bHpz7MVjmVvnHmvRJCcnnjpC6qNGR72TrmPj4AZBZ3rzRuW7XtrhH1C7xNUjHTemdNhLxKWpMCk3Euji",
  "key41": "LBTHNNp1uMpV6zSEhwjb4KcS7de6uPAUwh21oHbSeazmEPkK5VkfeRJuCSbz2P7DenJLsfNmFZwXQzRegZ9jspX",
  "key42": "3VcijRrk9hoKQheRx8TVTFhtG8tdr4R2neVXTGFta49j35ggk6Eg58ouarxgBBiyUijkvTVjW5KwazB1jGAEfoBW"
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
