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
    "2fRg8VvHMSD5Ast7X3FTKscEvg6mAQe6w96HaBv5ixp8GJxCBpALguEsveEcf56emLuifoZ1ruPaNfjybv7L6qQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F4j14UAbt6qcLdBc4Hem9wXj5A7FcYn8MjKvmCXP8k96uNh7sErXCEsnswrb1x55HBd6zrLAvbcVrR8fq2SauEJ",
  "key1": "3ojcVGJvsA5vLZsK4Mso3Zjb6QNhg7EZbr6J8jTx56HTNQifZ4H3FHaEyMaxtfdzxwW5nmzn6E6FFdcXxEjYrXGf",
  "key2": "3QAwa4JFNAoMC45QmY3jaChJoGG24x85HcVrh3bX9pLw8gXSakgaKEoqi4jdzv6baswiskUF9kKZhUfmS6sWgR5z",
  "key3": "2AeaNdBjVV8VCSakfs1qVVpAMShwtGb3JruaYMUkqtqHnvajeyF9jciVpiqU8ZTpwk39Lft8cegbN8rSh2CmmmSA",
  "key4": "9ctu4d9hqGRvGh94JAXZqw3YSiHsGFC1TSb4ocfco4KnFAZE9QjrJJJNopdTUgygsp16aQYeuTW7BqgCR9hB35u",
  "key5": "3C66NcCncFuLnFMfMzDpkuJkLbcfGsJw3pZaCVaAKaE4rFE1ahLjN8aQr2tDfbkoCFiCjpNjkq7C7EgPN47ZEqyH",
  "key6": "27JmEmEsfYnVodmzVgyvTD55aesAFDMWxbgtcH1hsBhQjScnM2jZhoFwJ2B7VHsR94F89eXSxQhtx1yUa7hPwEuq",
  "key7": "4w82URXDAt3VoBSaHAYJMGwnGwWFRY5Fkqop1hh5hUjE9FjXwfNLzbbsV6okxvX5KtgYuLcfYR8MQXXMqu7tTzLi",
  "key8": "pjMUNtTsfFF3GKwUuiMePEHK5QKsBSm13YNFnCxBXbp3rXcxaCJmiePPs3Bftk7bWp6mM5a3kQkPgjXcd4PsHAi",
  "key9": "2cDPQA3CwbqwezexBcGzcTW3SU7Go2fWNDWYkh9TqQonrMHHdff2CmnphNwm7dbHkLARN49byDRWP381VYif1aJj",
  "key10": "5cmxjQMjtJF8sj2CF53opdCBxNfW8RZHSdKsrgTh1qbNg1ZRKQq3THvPgoCKrVah61M3jG6WfE6b8qLy3pnLfkaj",
  "key11": "5dPB1jU22KpYQffNauSm8yBM7Fg4oU4v4BuPwgrbFoY9UtPC7Fh6d5tF7n3BXwpdre2TQMzPgPPGdQSrJcfAFMvn",
  "key12": "5Eo4MRiX4MqzsYmdt8aV58n8XHy4Vng4AaX8pLTHaQavAwYGnLshy2vKdBeYVcecFpwVdLTSW7Dq4iaxFf7WXCA1",
  "key13": "43CY7xY5B65um6JJokb3ZQN6GaJ6Ldh4jaHucCJ4UfzycdaK92TjjTZ2Wcti5PeVvFoXXQRno56DsYxVNBvqQT3p",
  "key14": "3LvrZbVj1AM82FkK4A41PcwBzWQpLBz38cvJ8R8mgBcA6Eoa9hg5Lhprfha82e9H1AfeZhsM1QQHHMVsLPrKEUeA",
  "key15": "34feSbJFSiPpkGakXZxB7LsciUyA7x44ptCv9u6jQBgvwBRgne8Mwh3QDTE7GXdjA4eaKPhsHki4N5FTM6JhX481",
  "key16": "3x98tTxhxYVwEbkzuGypYJuRY6RCHEEJXvqDUYXYz9LphRF551wSz3EZPcfViTmojjixhoJZG9cz3fj61UUUYhjj",
  "key17": "2XfBiPpAuPtVQanHCc3ysgchwXBU7qXeLPimXLK9vzWHNSxJpc1Kkh2RwsHUh5fdE3BE9kSDfDbNMYhy8PEiD4Sx",
  "key18": "2XbiJsdTuh1ziNZUAbr7H9Q78pheXzWAjHnqH286vTGgJVW3CnRBrN5YQ4Ktw26bwQESdq1V9pGSQpydu57L3J4n",
  "key19": "2h88UT7Ka4KH9iYMBeoEPY6Utvm9JYapuy1FS9cNydLNERuMB889AKaJkBHSPmM4YmFqhtmesMWkgXPSYhecNPdU",
  "key20": "3qZ3v3YDFArpxnGe9SUEqqfwbqZHCS4bu1bh33iTPW5BygCMd4kQV6kfe4KYyTQzE3Afu3Lpq3YAXUD3dEzY1zYJ",
  "key21": "2RBza4pBk9YffXJuwGjLifdyR3MTiZeh2fRJ2DtKpV63psETGY1ey4es1TNShkKRkWJ81xE4S2b12z3KdFdCBqkm",
  "key22": "216bsR7i8hrm1GEqvFZCE7e7PBSLm7ZhnPzBrkXa1vXTFsqubkLywkQGjk3kso5Tf3auNv7pZPXRsE3Aj3rgncJs",
  "key23": "56tStJ82zpGAGsvJ9NRUEemRuRiw22rbbeugEArCe5z4EXBh8mUL6CJrwW28KdaohufgmoeJ5PjxxmRkbL93iWZQ",
  "key24": "2h3ubtjyxv8kg5BTp7kCoXWnJXAGdR49nxy9jGF5te9fP93aYEiLqvK1BVgK6efudnu1bdtCy7xthPK91toEcVvm",
  "key25": "28Mf5uka56yUKbjzA9io7tVgVnJY2gN2hQFtaHyANcwReHpuHM6MbiBdqCLcoyZDvEK8piEHxcdTppyvKgkG5epj",
  "key26": "5Lc6Aa3mHLUmtN241UkdKinCmYRVJ8CvC26zJUumyEnJhzWP7X4hZJjrB3qibjfWAnzT8ceRb8erzJju9UB7ix8h",
  "key27": "2e5gxma4Qmfw5PYsK2nRyYRoEaQmEvgf3iLw8DNb4tdqLsNprkFpLq2pT21UD35f5fVvzeEjSGi3BX2PtTUm8aGX",
  "key28": "5uV3YrojmJ7oMJqEiRNUhf6juECNQWZ6muhr64r2gnzLNgsRUD2PFqf3814LYGusxE8oPjX3BfYpMKLD7Hw2Nzc6",
  "key29": "3QmEDcbJuoDX6bSuSFB3W1gjQbrkrFZQeiaq6Xnk6DcAKUorNUAfPBpun8M7RMFuzjUZp6sURuT3WSYTGVzPFrnw",
  "key30": "2rWdeqTz29YxYJeLB5Xu1q1be24GngHKLpZW53cAiQBtu9XfHLexh58cXJR7UtoB1C6kXg9mMssdq7enNoV8dy99",
  "key31": "5bM4dB2NKAtoHJCcyn8GPy1RVjd11bV3z6faivbjoKF5T4bBgJZU19MqMyFjJ6Cza4asnFKD3gdkE8MQk83p7est",
  "key32": "3TEktcbHsNLaNtZrKLFhcpEMBKCBuKZbTGCpVmXxsvw6tciZWMYnRMVWav161tzo53ae5k8FD9KMamCENN1EWxLZ",
  "key33": "qwHMMsDTjdBuA4bARXfS41WyVWfsDXUY1yDLdJ87NBYin1AvgRViUnQ8pihpxKdHmZwDjyY1oxDa27nnxSr2A9A",
  "key34": "LZ3X2KcUvVShRmoSzDTUEMSYxmPG7aMLU1aAK4wASTsEAWwFTupUCKRCXPJnPHf5LrtK1idYYNXVm8egNKKRU3h",
  "key35": "4bjKBERvLFuH9CAPhiYf52xaj1YXtKeRvCrrbDLiroAFCU8opoVHPVb2QJ5h6oz8RrfavHvGgH2r86HWhMK4hkMJ",
  "key36": "eASaYpa3HNx2GVmfjmWhau9HuMmxiZPpEvPFRQSy4RWnGDNbbQ2LWCvDFavUfVdc1YGmzZDSHfUmezGLbEtQXGy",
  "key37": "5XAhrjZ5D4NDL1i13fmkGQdRb45pjWfbAsjTVt4gh5X2WLRxf8fZCvDM7jALxnzTuryekVvpiAwV6XDNhVUoAdCa",
  "key38": "D3CVrmLvXgPS6UTPq4CZYHoMmrtcQdFZtpRfVswpNa54gfCDqhemSN1WcW5SsR7uFj118e1dsSwDYoUrUStwLvX",
  "key39": "6eRnYjFCWPzz2WksCyB3NS119RarcSNCJedmvJwoC9i5aDEBh6u5Zt4oFkEMCQsMoFvG5FCUWoHgN3mGtfyDdZv",
  "key40": "4T1zm9rwJ3oJrV5tGEqY4mH7cuWfLeP1hCrucgRyrrFJDMz9iWdeYz6iv2cARt2LNtB6v14RUX77YMMUgPGSN2s6",
  "key41": "3ME4Mt2xpQB3fDHGbUrtGQkS13LC8m6ZcTbQWmKg2DQikZp7ppt1Qw4EBaCFkPbFXnkkdUzejS4cKvvcVqdKnAnw",
  "key42": "2NUqSogWRKHAqqgHb6ZvVmRaaUBQiqnmjZLDdAykokRPce58dTiqQdvFR7QXvxsy6zZdCsigY8EzUcm7ZbcfqvKy",
  "key43": "qPdKf6gcFrsNc3MkFTPA6obNNzcUYVFuT5FLQdGSowZT3dGY93CyLNGGzDkMma3Gn2GSbyD3XRcLSaqHnfoAKEo",
  "key44": "5gf2dVDcUyUB8c7hmZADae6XmdbhECBcYWPvxymoj5qrVGGKSAEZp1Kr8yLAedZsCjQK6o2QHfnbydr1fMDm2TX1",
  "key45": "2XKcugjVbXQsq8kv5GGATKhRNWZSmHgyPGKuvqKgVQNWy25u2fG5HChBEExae8zkKpGYTQQ3AXbPtABd2XaKHcFw",
  "key46": "5X5WUWTGzNyJCrnh32uH6jUycwvX8emgP1W5MbRaxT9ZK6yPU5uFGdf8BpBUtxNLPk89hTGXexnLNAkSJpQuD84Q"
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
