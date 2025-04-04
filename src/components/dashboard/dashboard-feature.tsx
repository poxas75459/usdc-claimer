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
    "3mkjDPHbTDPJv1rxgskNcjJRPeW2YaqYqEz3B5zruwoij6kpc2JG17UAvs5XSpHjP5v14AM3qzC7vvKFgLVFWAMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGz46i3CaMRwnd5G7DoM8hQwTk9RTCbh4Z4zrAUQrt4Tibq5CtBwdQLBSWAZrySYtAGtmyAjwe9qJ7gv7wwa3DM",
  "key1": "s7mHrbrFsmhrNZV64gfvxdXreAXCrxUnSwAASWP9iYu8KkDdooruHMmvoGGNFZiPHpV4Lycxia4uUZkPpcGJyqf",
  "key2": "sbXynbu58jLyp4ASa6zF6bBPGvJMC5oTFe5SMMZu8VSqJFbrDQt3Xg9yhwmexHMUosf9TyESmBV5xjr7zChESam",
  "key3": "DYiMqX7q2fiKLeLAEg9HBLpQ8tzrnDSmEzVQdjxLJi5bSaUQwuDAA9MwUFAjr6tHvD3odcjngD2v7gL65KNegoH",
  "key4": "4BStbriJmob3LkbXovSx1CajLpSHDxoYHWfDPJd8WKit6dG4wRpG7XVrgpUmmvqHCgxTL4nGwxgDRdioQsHaN7p",
  "key5": "3w7ENiJCqkxhainNQW5L7iegpmXHrEeEGqj8uHPMXrfiD2FYfnbdneuwyCsdPeAmA6zeDWHDZzFjA6HQyjRqMZfM",
  "key6": "3uJZsnnd3xQerrnZgr8oH7Sv2RJEPj7G2JRR6JGNT4ikKEJKwk4yeExCcKVVcyhAhx84HqFKy93FB4WvuFu9WUBL",
  "key7": "4Vkeh6cwGessZdQRW3UVGhEvfDKo9Sjz1nP3sFkMEUirHYUhbTNeCXhhwEZhUf8gYVTJ3HmyrnmhE7crJ3WjFsgu",
  "key8": "5vZNvigDUmSFoW5Zct8rYQHDbGyudtF9z963vuGZsu2LgFGfw5Qr2xk8wv4SpbTXrqubZsruMGZaUs7pr21AHoHR",
  "key9": "4QCis2aHDK1aYQSgMmdQQRBbmMsyeixjgYLGSEpVJS6apqZz1E82pgg8E6mR4nieSa68aMTr7jNJ72EMXxUW8oFB",
  "key10": "2ZbRa312fYGnYoLrr8Mu3iCs3cGSqwrFrxqxnQAjnd9fx5Z67b1fdtMdxi6T57vLWuQ4eQT3m6beLCF2V28ivhci",
  "key11": "42csY7KDE5EaxSBUdJNwvNPdagJW6gwALyMo9q6zNaksff2Db9VXQJijdAhkYZTb6kHhcCMgMCotepZLLFunu1k1",
  "key12": "5XzypLeVuDy1UoxbZ723BRTHgLRHDUZpuwaSoLKFrtPYppTZwedDSrGBDUkFpZmSUZNGK3swrw4RDEjGeaRQTBf6",
  "key13": "442RfGBLtJ2aN9LHGgmRq4NNbB7axq55az4uz3wfHNTJJckLxN8oLr8ug7R3U2XZsgcEfSuptxvuGrKqg8YHcGUy",
  "key14": "2ZVMv2ZoJnx4by2SAis4afMYX54BguuAFhr6J23ke3DFUSfojkepaop47q6stNDj9xm1sFxNG34Jp6zMwYzppnKW",
  "key15": "2XdxbjfULUbuv6m8oESpz7jsh1fxbex5Hmqgiavnkuyb2MUWuZ6RAj9uVPhVgsLMXSJPhUi8ovYUZioofo7vmNQz",
  "key16": "ycMrW5TcasW8XPAz6YmBmbheUdjFLTp35axP9ua7nmucCG6KUQbjpifxJqqRHEGxsYV7BLwUSxJRptETk8uRPqm",
  "key17": "2vV4hU9UNRQ56kjyDy6bgEDG9gRyarZKaWGnqdKWM3QYmXaSp6gdvq1c39GLpw7eoqgmRFVyjCMGnEoj5btDehiR",
  "key18": "4muRmtGPQ7rKC59PZknYPaW96b4HqD3R5XKJEjeRUQMx3KDJ68kqnBqWvkJ5DkiNjVxghvNqcaB1J6YKFpcUfrAp",
  "key19": "5jBSKcVCPcmE6A8PnC2NP4YrrbU5wxwGDL5kTeFn9Zc4ZZrYckeZattDVjDeAzjh943RdVfY9qehTHyWeBuZ39u5",
  "key20": "4cwNafgxTi6cTrh4wL3mox7nBUbQKUM8qihLWNUV17o9QYH3AqffQqfNP4H9ubKVbn4gtK5dVRF1v8nJpwDDikkZ",
  "key21": "5n59fDocPk4dvu5gCUxgAfqA3bU1HreQT2QM4BmRdEpibQ7L4Vp9DN5e6jh7A6XkpBm2WEMr7EPfFW1NqNJQ3axN",
  "key22": "4ojwLzvNStpLHPUQ5Nuhojuc66s86VmXvtj1wG5MMDevZj7JBsgcy5mxdMXSsWNWVwNHabJDm8UhLncqooPu2Xb",
  "key23": "25JDNeXkzMZKPNTsUEqQsdHTRSg7j8sRqsDKFW5qm1xRvy75qk3AadnUJaLHN2dQVbiuuwkkT2dk7zoXZQAhTVa9",
  "key24": "1vJKmEzPd7fBo1JTFRH4UXohi2t8A14rNMMDsVexcpbquH5g1V94Usv4smvwqo55sJ8mBsSBUNQDRFKkEG61jWw",
  "key25": "RLYXABwi9zRAxeBhBnXT3z1J1ivUBnmjgys6TkYoqzQ7zS9NqmUVGtZt4sGFBiqc6v296KyRkggeHrYrM83cFaq",
  "key26": "5M1Tr3bR6rDh86ZXcuAo8u6rEFrSc6NjrcTncC6pqAeqPjbwryoayq5NmWDpkztbjZMdB6TLnuxQ8yGYTe3KBmFU",
  "key27": "3uAsZ3cKUszxLb8gw9z623NZEeCn8sRnG86TS4cTGYA35VYNMeqrha7ZhCBzMLYGZPmpp3WuqSqaTT4t25AUL5cu",
  "key28": "47PgDUzDGDuHkaL9jzyGopSDtb9aX9oVwW2p2gYndaYm3HS28cP7kZd7YRsuLUAPnvrf4ZMznE8wKnUU1vK23ac3",
  "key29": "5fD8fbxUzWgqA6dCwkHLkokU2XWVf4X2oy2Bhjmzq6oGbpVGMfbqGTD6uMzbX18vHajmC5tquaM5mTLHRSn5qdTZ",
  "key30": "5heYvffu1Pdvc1PJg7gX3ca18SDALabzMBxRsC4ztE2uW84kcT8RfoRd37hcPCUpEroYRauUhdKbrQPKEc5rfDsR",
  "key31": "47DyVyk8TLSBRC8yWMT3Y4FU7L8t3HK2FT12ixuaHsshrRLjmUbR48a9cWKitJ292trmRFAxcp43nQCL45xu2MMt",
  "key32": "4mDqXLDinfiU2xtgfpH9MZd3ZuxT94zhbB5Yz2mXiTr5LwU3egXR3Fxdr8gEF3qSK86mBLSHVgCUQAB1fPS4dKvc",
  "key33": "57RentkjcrTRwcxBco2tYB1y9MB79ogXimjjjeTK6AYsbJnEE1PA1PzUPVcjjrDiEBC5jNMc2GzkWQtSik1jim88",
  "key34": "2S52u1ejFDWJX9DhyRhXPU8GFmq8dmarRF4qziuYwuFA3ZR3ERpZjpySA8k8u2RpDMzmkvaEDFhWjcTXjMfi5r8F",
  "key35": "3R7GFHaw5v9YHThs9LzYpuaQvBJZ4oCNti8VQ1XNFY2Br4F3W15AkUvtQuFpTA91wGeoRKf67xVnrnY3rEqKyyAg",
  "key36": "2vamH33SU7MmptKdKGWmvy9eY7SFfDDHC1pfrBPRHsfZkKoks5YvvYxFakMhrdeko3r71TWaN9jaHheaymKLVbpN",
  "key37": "GMhtPyCRvouJbWEFtTY4gW6435ZrmyTjzwTET2g2XivCB8d5yNQb3huNtUeSeR2kT3aBsAv8M2BEqj7xjs2w76m"
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
