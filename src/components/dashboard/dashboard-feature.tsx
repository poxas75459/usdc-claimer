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
    "4ni8isAuZMCQvNbSV1UAgQCxcRz4BRmctE4q8U6fPDK3vMULk8oiogVDvS5S5kGL6JjHRiNWjdsZsCQ9QaPVK4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gEo5kvgmEhoYyoPMaFnRDEZtouTTgfcXYHX4RYXevdDwG48VcZvAW6UeJbicctB976uuTsBnJVwM19fS46UNg5g",
  "key1": "2pMsTWMw1sQ4XQaeiV4DceuMxKtrb4y1yMnSSpfRyzFA9ELMHdzdZJ7TiLPvQkn8RJWP1sRW7emKmw5oTPwvsmUj",
  "key2": "bDFsWSWyu1pQX3X1WYzhwhvhgma7KXisYA8PgYw3opixgWe9qfpRvSs2bJgUDZpL9Rh2KwyY6gjXzhVCRY3K2bz",
  "key3": "5eGKJdLEJAkhWbo7ZYEShQ6Pf5sh4ayy4iRPoa7HUYMu1A3kXJFxrUmBrXaYiLMpnJu8r9a9y59cFi3e8sqW5JHd",
  "key4": "2jz7nRvmd7N6J3G1eU6VhAga7oCti8CPHQZA4d7CXii816SCE1KJHVwdynnTPufBMKSXk1Rj1tqbiQ2LiM3a2xeM",
  "key5": "dGf4JgN3VkJeUQUMeBHt9ARzpFwSpv3AKj7CEQr2bNkEdj7mtWGDomJBeNFcceA8P81sUSRs86heGKotxT3insn",
  "key6": "41xanVFHFESh24vAr44CKMad722XPi68Dz659W1WvTw9ngm8cGVJo3uwGXcwdMy8krajK5vY5qiW5VYM8Fkur2LD",
  "key7": "GHdw6DDe4rtoinmnjF93XgqkfZFRnYgEbGiwxuJCc8JC6H2TDf8ZHZh1ZLGfAfhAqgirUraRfDgJzWHweA82Ccj",
  "key8": "44o3C9vQKMzumZMMSqCF6wfNCzvefhoup8hzqhUi5dtZsHHvAJG9xaAY93Jc2yxiNCxxqD53FJQATNbExzdjRWyJ",
  "key9": "5KsGDtfVPcprXCH6iEkvHhnu4Cj7nNYwVPQMWvaX8g5TtZ9xY44HGEUhybkSVroP85WT4SjbZ854P9th6tHyE7wt",
  "key10": "3DKCpnWWhXwdZjgEtr7LWGqZNSiCHoYSJhEKWzL3j7vc3RVvqWxX3iK7fsmnpF8thDP8a29d3JsZdsVDywhsD8ej",
  "key11": "3h93zKaTyFE34oYpUcdaW5CWrEo5SpSFgDZcimxdJSVuFYZSWZb5Gk2y9UkoFkAvoS7E3pHBcuYrEU5j1fu7q6Ds",
  "key12": "DMYZn3oKT3J2C74r2Av2837gYkrd6FrwjdMuNMa5xTq1yZYvNpD4iwFwoxxacraTMeQNLXCjYV24sM4V7m6Nn2g",
  "key13": "5Wfgur9z1EGjxag32GnuYJCvjX28moPUc8XNxzA41MetBdqQUFyHzdikESN1VZjb1SPrLskbdbumBpdS7sh9aX6n",
  "key14": "386H6pVc5V3rsmbj8dSQKv8qgSmQSzgxYfmzcKR9fQFP5CotKBJTBGAtRF91DxmchZDUxuTUXQV7GTGJCbgBZbrR",
  "key15": "3faZKtxixRvQSxvzuUDLWvQpRVtUzcQE8oHPFiMeeowTDgmEK5uCLTEJPSmuzGKhaaMCEfWLG6GHM785rTFYprdQ",
  "key16": "5qfbSiUR6Ub2YyNdPftwopCvBS5mgaKfPNyCnvF2eKAndHkh6Nfeos7xGYzn3kKcVj4My9TLhGbteG7hq3QY6FHA",
  "key17": "2vuNd9Br8GuebcoYTPS9HQPtPS6dMizXkr53aCbBH33VDsiP7bpRyf1HNq3Uy4AGWKCfYJqwUDRaZ5YeFg5gkKUa",
  "key18": "5BZfYChddmiieravujWCe7EgYDYFs52wJpvjQNCGWUpo5MuQCLrcnidtyNUgJQAiemPCcK49Q3azTSNjxpbczcX8",
  "key19": "4Q2LjWgv71zcnZJMnLMjKKC1m32XLw1gAxF6fJPdnDf3nKeAMLAbPaj3hQWKnQ65XxUD9iw2mzPF197t4LGko2in",
  "key20": "SuWzyd8aH11ye7xN5uZm8DTFiZ4NANpKkfAGei9aqDgUasKy4YZ6hNJELJqx4qMmiv1fn1HvrWr88cAcE3JoQFA",
  "key21": "3u1MCrvifNknBivje5GEavePs23E1ZCdaGBamUTQ2aa5L5B9uHUByv3iZsE4wFZrKCSVXPYrCwnVXB2yf8PYt17s",
  "key22": "2Qk7bTF7WrebtAWSYdMLuHEdSJTv7sNXTbWGgJE2Sw8ZLpNwWAGpjNKywyxUbrtWKuTaPCcLinLcNjcG8CpHRwQF",
  "key23": "Rf1LhXoWobXWvdmfe2saeg6i3EnnQkyTr73xEc5XLjR2dK1CqAoNFG77UareJzkJZMHvSY9ssUJC6uaZUecPvm3",
  "key24": "subKzUNqKhY2Yf8FTaDjbzYWU6Cm4ftp26CpRwG3JUHgn7S1bNMkzaQyWBmiCRcjXmmm3JAhpD3mT4EawLrGn36",
  "key25": "4tau39qMNWEjHiRVd6Cdxun78BWLh1FECEQ9SgpcGcxBF2AGZVgudLg7fpjCsxbM5xj95qeuYYTKxUyaLwET5bxJ",
  "key26": "RBL4ckV5mGgm2G3H9fdKLygbq6TEVF12oEuX5BwkCGvG1K4oLB6fYzBE5viCyVf2Hu1SEL3mkEFyYMPa3fDQpTo",
  "key27": "jHtr9pEHDym6keRRPwBcCy5H8934wzgXFkU214RAZDQarPjtkcRfGjnWjkVkL2SvWVyvXWRuZdKHgYTJWrrotb2",
  "key28": "2SLbVWvvSeSJCSignQS7pBCwovECxYk9HmyBAF3DwvTp5ENF61rJWerbFov2YFGPAq7wzn979UJfs73UDD7owDhu",
  "key29": "39VqgKVKamakBgGh1RNazm5FpwfcgzMdWXKEQZrF4fbS2wxySkZfcT1PMdX7n1p8eJ82b9YqZPibrtCzYiYmhG8S",
  "key30": "45SPF73GxQGKAhG13gzP1EEUw9CLQaWeTqpDtagTcva7kXZ95t9Yt3vpFzGwzEzUSJDwDEpZMutep4zp3a2e2UTD",
  "key31": "SfFhw2KyMS7iUZ6zZbmRfm2bwUZK9Gmwb2L6ffxEG2VwpkVWY9SRBuqL46kF8znRqG1cRbnuhZvaovvkq88JNCB",
  "key32": "22fCXcr2RCGZhV4AK27g1Xh9uvZRPsqNnbtUn2ZUkRnj7J55UmAdAzSPPEXRkyjLmAp92ASZ7SXABdcxHsXZ1EGv",
  "key33": "5HUcuFmLSLhT73LDvQhyQ3TA8VnorxVprRapMYtVtqPzsnaDjm1nwuDsnW1gZF7GKx9JbjKTxAaAyhbqJntCd914",
  "key34": "4mCVTxyYEyoSgbNU4SnmNUsqED9g2DDHFCNao9JejKaCSdbQwytfBuF6GHoYSafC6aM5VaDVsKSzCRFSTE9RJSZA",
  "key35": "33X3AwU8Egqtv6entQpnUWn56dyffchtHnr1QKv4oiqGHadN8yQYADamQpPph2Ya2G2oAoYozHEHLxSFrkyALdPV",
  "key36": "5fNwJVjHuTCvpf26hRypFsg6gCaqC3yeQ2tZgMjdGmuuiKFPMCydNUjoFE3q4TiJiztecJ5KFpGFcSff2mhBK52s",
  "key37": "2zzAgNJn13kjrYa4E5cusYkmNQBQHYdPjAhacykSg5q4bjdumHtRgS1Ay8FS97umCtthZchnQiJEqacPfLSkwrJg",
  "key38": "4Dffp7tXdZYKe1wwCmNFiUR91RmNiwKtcUJ5JTGiDQ6bPeTtstjL1hi8iGBzrf6S1HbwgoKVepZppHEiHEEEL64a",
  "key39": "84PPPh8SUaQLKTXRycbAuneSKX4YmaYDZb7zqRJkfvLXoML1vU4WcTTyozyibNMYHTaeKDjS3icDNwxQrLHaL2v",
  "key40": "CAPsTiE5szHGM3bYB5qDTmwMtqnhFzvuahGYZZfV7o282Wb9r3ask8uG7CVBCtJQcNQS2LKRany81X9BNY56CmD",
  "key41": "TsQBqzPWvkdLxFn6Z6UgA5NGnb53zCcNvf9RoKLZ8ekr2aYQejk39YHiRAzjrfpcSH9xPp9d6fXZrDuXybpPkW7",
  "key42": "5SzasWsh6R3Cz72NdxKJuLaNmRSs4yyvs9pSWMRuqYMaqohGQf6gChuKAPhK4saYXDUUqaPnkbKcHhg8A2SY9RLa",
  "key43": "5rMBGnjhszSNJiUjtiHkAHusCYe6P7ZJMYc3dvRopiJw8DVKgmXqB9usrbUA7Ei8V59D3JbGHdG19SGCCmh9Pvs7"
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
