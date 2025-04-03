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
    "MTEKVMUdpz88aR5xdNFXTZzeC5t9Jdr2AGhsGYPrYgvdqw5nP5CpvCZ9WHwssqkk2AHRrtVWAnobbKJC1sn1krV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oFAhATz7kHBkNSJWCiyMB8BHRzwPSzHwEt47VsnFRTLJqmUpBpQiwUtCQsnuQqwyujEM53PMQysRaDLaHRdQjr9",
  "key1": "4oc3ZF1ZN2DwTBPBQyzaiQ4WS88WBwbfykax6vtJRXXgyrweiKaux91YFrG7c4d9YF8KgrWtxkLpUupBAJLZMQd8",
  "key2": "HheBRe4vGgP7x5xSpkDa1AGi6uM3air51dLgu5wWdjHQ7JKKPsBXzzGFe5Bm5ne8SQhaCotFrGicQC7KSpViMSf",
  "key3": "3ZQkwcUnprU2TrQE8NRzSqr89AA1syTvAgF39GtxdE8NXUNZncb9TGG1CLigEBP8AuTZGgvtZKtvBN8oaVVP4WLE",
  "key4": "3PrbKkpfyHnKV3YgS7YzY9U5h9mUZhtwrCTgv7nKuE94dhspgvjY65ZJkKEvyH7KDhk2K2haWvMfq33JX5jstQk1",
  "key5": "2UgESKBHHiS7rt4fLCcK6pDb6BbWirJK3fsssQ8Kx9xoVs2qnY9ZV4jV9Fb8freKzyo14x8cedz8QXK2mwDPgAti",
  "key6": "2z33pX9SZJLx56ppPwnoFhFQ8CTYiw23fxEVRucpXYfAwd2qd4c3RtKgSzjVVo6TekKXq33CLZMzKGMJjg9Fb1uo",
  "key7": "4hgWXoFR6inEeth25u83q9BuD9pQWTkJxRA2wEhLg5s51eEhCyn9mj79i7wvUBiD9sogzJiJv6aueb2jfzG1N6dd",
  "key8": "jMCAxJZGWWHpKQGEXPYCvKUDXTz2Xn3h95bo9UdD3yTvwqQDhHtdLsoszmJacn5gn9y5oWBsUq8FLY3Z1udpR8Y",
  "key9": "2WCUytHjyBMd6MJkrvwoEPkgMAxqxYnZkhASVaMgR7gs2Jp5WfZCca25wVoakF3HPQJGJwq82HjHxX12wwg16YLQ",
  "key10": "61EHVgExXMk9TvVSzRazrbHN874GpPaBqJBujEVHjuGqTxXiK1RMi3qWXEG8evkDYzKBsb7zh3C9Pv4rpeZyi1yy",
  "key11": "3wpjyBfTmG9rCJBzsVhQpz3nGqj2mRQvnNQEayyPdUmWC9bi5vxF7kD4ZU3jdwCqVKnnmvyv2s3wDoPzfYNw2nY8",
  "key12": "2WA1gqjfroULQSLfjCgqSbbXijbCrUhUBn1DfR2SW1y8n98GqhwCAabQYsjR1HyBuY19nH1YRhU2sw3H4N8Nek7u",
  "key13": "MFzh4CWQbesfGLBXYpuwttPFSRKC76u84ueqPqVLfaqLigaEaEvwee71uqPd6u1B6p3fZtuE84NMLGMtCfNFwS4",
  "key14": "XZgVDGVgBifqMCgFECi1sqSiqzRnnekjLB9nY8NMngdARMzqDX5DNsy3bvs3dmnvXgtciPk3XcqQbLbHTXDN2Hd",
  "key15": "2f45NHAM35nqjZsHSiMwkwxREGBL3DfME7TXju67GGCoeqi6tZU4sd3ZAqMWuHspRAd4MtDTy6Y4hWUr9J7jvJ6C",
  "key16": "5iVSBwXm17pgVkmNZHQxxrGZQ6nkcPNacQHTZQmQvsxyS6pomajigcxejMaRjrCQy9XhYvY4mseFqG2HHsdBpKGp",
  "key17": "3MCWmm9erDriZ7ZKjUKNiwA8DdFhgmvjJDVPeWcBNLjCQJxrnBWrdfLPSWjbmxJGM4HfffPwRniHLYgFVhJx9XVE",
  "key18": "4qWPNfDdvhWLDyhHtsp3Kv3PnVP2zMnxprZyVn4UzFd8qRsnSmz3BFVpd1XbYiBsitnV32Jc6WmvzLEVUAtKs7cg",
  "key19": "3F6D2eFk44m3AuNG4y9A6xxWL3sFDGD7qhyc4GrV9R6jh6bosGWK4Jv5pLJUUUDXyPVsi53RdwNVr2XXFmfnkPm5",
  "key20": "4pix1oaJaNV7BWbcrdrwWQ6XpZX4DeGntCq4YrswRpq2ebjhP4g47DrxEBMMVDgR3REAbFzMFbfJZ9WLjTXDonGX",
  "key21": "4bnLynNSKZEzKq38cMKAmNBgjJZJ9qDa79b8iTMHzb13NeKEfrq2eXs8iYp539t3S8WTevhvWGNN17frvDCEwRhg",
  "key22": "5vEVH3gLGQCkQuCBSCtHBv6K1fsYhEynaGTSHQZda4b82KNqMqGx4mcjrcAvuUWrAPcYoZiQhBhMo2CkBZ2Xm8Zh",
  "key23": "3W6zrtu3DLpjgPsocTAirHHQdH4xpyAs7djnmkBP8YSbunseHSi9jCgAifwQ8Hz9dmtKb3WdVKLDqsoRUUcsVXRE",
  "key24": "3F9tHkWNGJUGzbVLSjsY5WNezGWeJSubZVoMcHzvSbofHqXW3y8zZ3ju246ok4X5uSsgg3AkJSV6rhaLRnguQRZL",
  "key25": "3XwyzZskzaQFzwq1yn3P15eWEEHmLUnXAwisRaxgThLBXrAqGwotoztK4Xsyk2gVx424Pe2PxWyGdNZmbzQU4D1V",
  "key26": "2qG89wZvx8zc9g7CdpXVh8zzJbiv7p5ET3HQeUUEBT5SaiKaPPwD5iUMsDag6283rmHrT8kwSTSfoetZaje7joFo",
  "key27": "5PjMJeKzDn9ERXruf9oXQaDRUchhJTx8jSALCt8f6rN7oV7yzV77CuzPS1fG8k8uNdDHpJ2WPD4LKj1CMTRbjke9",
  "key28": "YnsDAUWGgqRx6fCF9xPD5WbPFi373kmgkPTVR4WCZC3PAYyY746zmKVeBDDFJqetuLs2YjebaLQPL1AHw2ZGKTA",
  "key29": "3YuxTcX4AqJ8KcfgsvKSusMNR7rgi97btvEZdzjxL4KoGtSr1d4LZ2vneP9Bm7gGWgG7xWH6ZpYao51Ef1zjKjjv",
  "key30": "hLaW5za9qsvqSAoCdx5DqPDjGYEeF4M1mmunpQEcB6na4rxocunZu5ynC4cHSyMJJrRM7XNQNmYTtzw7fxNfJfL",
  "key31": "56r4RtBQiyVGm3oF4UpcQKhFayhjioJa1mdJrr5nf7uFxoUXGAqgLAS3XcRbF4pE9LEEVB5TC567EMugBA8V5tuC",
  "key32": "64zgkiFcwMMUnvcoSsXKc4SMf38hMLvStjDe5SpFjmEmZeTXc8TXPpCLH2hkxjygh63sJu8ddMbT5QXkvmhojroU",
  "key33": "4sD4SmFcesrEDok18Fa5gzNDQMhs2NQXmiCNKikJ6ztDv6Xw5cZgVrpmLPw4NReoGBkLacKAMGZZKFoKtWC26thT",
  "key34": "3p76T7bNsPFk782L5FtfUPhqq1apLfNcBYaUsAka4xnMkepMmCr6fPofnv3rVeSNg8fCctKnCufqKi7XERVEfJwu",
  "key35": "2YVsSsU73Jcya7Vpn1Gb9Ujgj9p3YiUEHKo7R1YjP3azrFubD4Tnzi5fEcKdE2Cu5rqhfdh2aTHTQCpjoXPRVUWL",
  "key36": "3Yk39g8AsM8H76AW3GCnk6A69weNymbksyTwnfZnUWhopNnPkzafXaoPqNMjjPG9H38uyH61tLC9MRYHa8ph2QpN",
  "key37": "4gstorga4KqYcCGhP73nX1banaSQ5huM7xU8Ur79aysWVzXs9DMcpWhNERgUWuturUkinvh2G7oGzLUBAWXuMkHs",
  "key38": "7pTcHS1SD42RNJz6JEPGXjM5ii2vpztMF51WmJ5rma8mMncrvp2zXuxjxubFbMbCwXLdnLSn7ocgmErzQkPtP5H",
  "key39": "4qGQ3qHpFsXcV8WZiAqQmy8ZApfJXEwuPtgt9mEoqwyb6oxwNeA2rXQBEuDEjawsHosBaCKnxcbRC4HbfL5hMVY4",
  "key40": "2F4HSdpGmj8KTw4ZPaTtQcnudsQSzGqs8EzHodjSG2Hwd4zssNkU9d5fmGHGz25ofExHn5iGp2Ry7MML9fLJCu5G",
  "key41": "5oUkkfrqHcD3wDSzJ5pS9bc1TeLfJrWEgb7gmJ6v1tgN7TJX3Mi8JtDVYpa7FkGbEUFSMdwiLxHzSXS27o1UTiaq",
  "key42": "5x4jFmHcERxU1JzHPU91VdBtgMVaoAjjuExXYtNKHPuxaSZJpZzU8TP81j2gNVYQjRAhWe6maBCLvByycNZjgGeD",
  "key43": "4VyTiYDGRXSiiMHEqw25eKW2G4W5HQf73yEb3dmPTisihrm699YpE1vE7T27J4FHu7pis1enF3rv3fuSJaEg5uvW",
  "key44": "4Nvuf5sQsfPs7rtcdyYthRQeCWMHUScPNhuDgcGWn7Vb4CE23FDTBr3SDVbSAaYY93LKSA37vK6TW1hFxDPQAEuT",
  "key45": "Lgz5gS4RYriMa8tGUYM32Wg34UbCaZVQ6gmLQh2XMe8fNEMbxtpJ11d3ghsjdPf5W8ZpSiNFpTjyFxkhSFyoMhS",
  "key46": "4h6GNuVdZcjJNE17GqRYRkxvaFQi5V9UtyrGtfNj51mfNozPin4KzuQR7AaL3NY3TwxYvqaf6pGDv9otYWhG2zyU"
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
