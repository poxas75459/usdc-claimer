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
    "J2atsYQiJ7CBSYae7qkgHfWUQhK1mLp53ZN4DAoFoCpdXZepD3nE1M1R8bTDmgqdHyfYPW4x8eXYDEShYFuvbcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6cnPYKwt7YZijr2zUnbKTuxL9bMMRrnbH2owE7cfKBPiASozdQ3c3jvQWP57KiUwZEiV2cHfAT2Rxifp3GG56W",
  "key1": "2bfSvYNKqRGqRqASBj19m8aLtidjY4Me6G3diqRa52u6GiquwYRxmd9CFT9gW6YzJCZ5Z6DLyBpM8aPTZ7CWwJPk",
  "key2": "5emaVzfrPbS1x9xf2KSrYTF61FugcKycigykmaU33G6oUCHWtfMVpjeaS8zP1wTRZgmVCDTwRkAcx1dfrQQMe85A",
  "key3": "41xprVsc4nYbYtHMxdr4swQNqigknxUNZdsvcR78MAQ78p3KkHSR5VQsj7dJ8cBTfi6YszkSxvHTd2cmZ2MyNemb",
  "key4": "5tedCLPBcZSMQkMcPwkBLjA9yz3ZUVc9qz1nWvi1F3d9qULPYVDRZWzeMha79DCuKz4PQ4Y5Zh5sWpXDJXwn3z27",
  "key5": "4bPYZxnbUmyBwuq3BkZ1GsLBnG4FG6XFqqj1AsURhC2tpi8niKQ9SXwoVyK5rTo2TZAjbJdUppAsTcTkxW4K5hhu",
  "key6": "3U1aSLW9Cysqcq9i2gocMCMao7XoX2eVaZZgC8uWd24TtY83qrooZ8ExsnoSUHhgoc2Q8sYxJfbJQ78NaU5m3FN2",
  "key7": "4zemMcG8grd2Zbr7KnjuSBxKNn9vdx3B4K5fgsfx9yisBT8b4bTa8odbMLPcM9KLf79d2xNTGKdwv838K7DQQ4w3",
  "key8": "4gaemuRfw6GLcDJLY6KWjDaj37JuxQtvXexL12cuf3Rs5t75yCiR3nDAjanYSXTmaWJsa2faipLba8Es9sopp9sW",
  "key9": "21YxwtRbzTWA6XeiqUPBicfnFwbq2qn4b49exQMMn1RtaDviMKSXwuWHLkvuUHND4Qkg23wYdeMPXe5ZCtccQEiJ",
  "key10": "5DBpp4bZUFszANj69dx7c6Q8SzzC8HttYuAYTvyWAfKL5ySuY5qwZ8MXADJSHpjzec4W5y9E57Zrm79cr7cYL8mq",
  "key11": "2Tc8c9iKgjhDwmZ2kePqmmZkfVtjWeSstt88VZXGSy4GxBVX2ya6ag7hEwKiuz7WKy3pgUPSsxjLthwVEzyQ76TG",
  "key12": "5EKLM4WYUBPmLYS9gagmqryWBnU4RXZdKgutE9zjomt7ebgAougqTgPcac8Erca8uszoe16MRFdRv1SEze6p7yw9",
  "key13": "FoaN72U6dyN614igWEgdipdoB1KZvcssMDVYCeFgqEyiLXoWSwjuGaM33Z3yG7TNLEnoLVxSXgV44Jh6yvVKmL2",
  "key14": "5fzLDdG8EvHpiuUumygeLbxY8kGtd7NJqGRNhZdCVzxBMJyDKKy82M3StSBJBWQHMRXR7b2oudwhZXGLkzA8HvWq",
  "key15": "7C53LsqMJBB2wk2g4wPUAUEiVqsgq57fpGaZdPquQWPKuEL2AtGuNDdGTfHVawXGrBPMBCyq7cgViCxhfWiB6Hf",
  "key16": "3DJjQmWk8sH4ebWgdDSRFoN1BG2aTv3tSW4h4SwpNqLBxwFat8v6t6FPBkF7x7KscBeHrL2Y5xFe3NHogmP7iAcp",
  "key17": "2pvZk6qRa7j3pXSJLTVXZetwCfsE7PyPmLcyYn9CoND8begxCFSnWYq8LxH5xtrNJTzGe7hSSZ5N1bsDMhbhjHsq",
  "key18": "3aHbE7zz6CgMu6H3FvZG7Au2NEDeatKrf1u79jk4R2VVp1Kcsc7LWupMdLviacvUzrFPYwTA2uvCXFJ5dFVaGij3",
  "key19": "5LjQwWi3pXc3LPqTuhtohfcUq4fcHEAMMns9vFAmhZjhPfKTFQ2xNyRLwXW39bQzyoJP4igcV5Qy894kqsQLw2R6",
  "key20": "2HJ4s89VJhRQCvgJkaebe4jCU4TgBBH7zgN9MhreAfX9k8DFcV8XHKU95Jb1qe2rGFbYzYy8uV6m6dXev5xZbxpz",
  "key21": "3McLx7d8QumLnVh3FggJmvaWVKAmkNUrvBUb3eyC3wZU5xS5ZZMrJAmZaoiDnmsWQHbaM91QFEwGpKMSeh7d8Skg",
  "key22": "2oFydy3NLsDeWgpgjrQsMrH4CDmW9hKTP4sJdn7Tj3d77SBCJnXcxRKvUSU3DKxsSw77a9YSwRPsMaZS7PFzD7AB",
  "key23": "HSQJbBXUg3eaDZzyMmuBLqatrXAy1JXThYxi6gm7XE7w5ZTSddfQEy42ahzUkMpAHGFVS9K5zdS464KgpJwBaaW",
  "key24": "34MYh6utU2W6o7Lub8yEfQ722bjWtuH1DPqfj2m82EqTuCNQNAYZRoV58B1DaGEeApSgk21NzHwYDEXFheDujyY2",
  "key25": "KqdNrKvZCR38dh2yZZiJP3Q8HspiVSRSaBPhp1kEtEsLGR3pfeKUULp6ci2ajc4JFVgjobBpfw6PvLWRi25sCz7",
  "key26": "3sq8SxC2bXqCpAxJmxcAc4nqBpKcBsdPKtETgK4NGJ7H1bHp7VWmE8TvY4UJTBPPceVv5id9oAygw3V7f8t7CwA5",
  "key27": "Zz2XMTMnWrer9djen42p8ibAN8Gf3z9z1uT38LRqCjiG4YW7zWMaP8tbNzijjzogYbhdX8NBrG56gsi36iD8Ksd",
  "key28": "3yXrqeRTyxmx83axwCns4EdziB1HgahjC5uPHQZC5cnpkYU9okRtd5jULbv259P65DvSizU16xWoiEyJouRBZuXy",
  "key29": "eCxBpcjQJBak8odyDzD66eXwSHGatLBSCfaYXi5bbLu4dhc2Es4aXagjubNjSTWFaqkVF98CUoK5bA5CAXNnPRJ",
  "key30": "ZbJJR9K8uGQdzdmMTuJtbuqdBfSmQhHM5pL2UbUepw4tYo2BAxswixvdSRXuuwVeK2c6DD7sfgAQcU5TZ6tE4uE",
  "key31": "2o1C7Wr3zxkvor4VSn1JHPHJzki4p2s8mPgnvSmcG9THb4JZvrmRhhzPiz6WizrJoJTWUhRepx38RfH9sDCVYB35",
  "key32": "2YHFd1qqtaaELUSdCsBFeHkTWUYdTy6WcvsnxSqjgRXBhCm16Z7ieRNnDdKJ3EG1NniCCznEWSVqqCrLqLEwdydP",
  "key33": "2QNXCpRzm8e4Eq4AfBqX1jKPkFLymdz4Ec7qafLaGKcgvdWTDbCkam86za7NzwDAK4dJAh5vFFkrgb71nDVM3PKb",
  "key34": "L6nLs7itZDwAVCarS2QF4A8vGbYoz6G1NCeHeP21xFWRmXpPpVmTP9Ce1TPapyjgPNCKnG1A1ccd3R6qEV8dx71",
  "key35": "5Y1NJ91Kmd9QMv4pb7ANR59kMXHwDx8mckfMaTEqdtsUkXP6oh4e6Mqy4uktUP4wBhbjaDEQfRHHVZtr15QQuRGZ",
  "key36": "2Z7oT7tYEvDnc14AFsLRZ5gcVDMJBVcL45MS3gwtbj9LYa5rCf9vEz56yfokybjXjNCtYEjaKiQr3odzVgTWsqK5",
  "key37": "4i1BDMax83tVGJnBBjmETnd1fzSyWAfNPbFdxVjwew73zT9FadSKCwracnnm3zEC5nrWSayJEpYdxpL4p4mJP6gJ",
  "key38": "4M5u98YZfjyfbGeCkwFH8ycPsfHQmrtoAvUx1AhyoAk5p6yqhSkgxWxvfGGyxaVy5MmgPQa6ePArM8BuefTgxyZY"
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
