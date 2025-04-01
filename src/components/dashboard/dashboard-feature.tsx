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
    "5Pm4LHUh5ZjpxP9baKMgQ9e7gxqckSuoQ8HRHQFVmbhaS8Tq3xPQZcZtxkQahTTcCjH7UDQ1DEsnEW3gxgj8f5vN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37gfWKvudRdX4h5Cda5Jyz4BSXiaMDm1MZeLzpprbj25U65vuMKPPge7aEpFUWChn1SxGcD6Y1BdqUA6aGMTQkUQ",
  "key1": "2Swau2cQ6EUYYpxHUFUpumYyqoTuGPBCoWy8DiG3SS8ivBWGN7KeXVYoNgL2JvKVPbwFDB4ZfQ8AcJHf8EiNbx28",
  "key2": "3cwjZ4GLgw1F41FppcMcQ3NCtP3iuVayLGPwDaquwRm8etFJZ2Ub8opvTkh93Pj9zQhseQcDJPPtJV3uY851XDvv",
  "key3": "5P9U5YgbSzAWTK3nvAEkqRxP1ZBafc23HmU9Lb2eGquU9jDE41yYu9Kp4prk7YcPbHSwdL7rqjjku51wNDbUxtvr",
  "key4": "3MW6EpdrwtNvFuSDYTbQVhsxKjBTGyRLSzo7xbixxxCnFAGTY9N5uJhNUCeiYWh9KzxY6KVMqzF5jzSVo7rCfMba",
  "key5": "3WhoQ2AakAYY5mR3sZQBNeNqd4JHZqvFzGfCa6Ma9KMf6Nzp4nN3mKGzH4FAm2aFUehfAAkaA7c5ohjbpw1duC8z",
  "key6": "KpNoJwPvuAAyHPzyXPqpyKaJsGn2AZwhFTrQccoL6c7wLswHwUyQVzVCCdYWPforQsXwFm5NoDLhFsgCZVyZqss",
  "key7": "JK73owb9uuDiWcAif3skTRyp62xSRpXbu3Dp3WF1aVButjypmu6bawCjFAiumQ6SHpNMdwHAV5v2r51eoT1rj8h",
  "key8": "5T7eVQtzb79HNKQ4vijawRtDBkgF7hXCQF4g8dtdbFMfQWjN8bacr1xwy4M7XTm8SiQBKNJ92WnRj3uCgKVxAfMK",
  "key9": "38vc5j57iRw6qiXe9ExqHkZrLuKPPbctK5KF5mwoczgeWAbR3B6mFPiJcxqVfLwA9HsPfCACfRUFRtpNJwjQrSHd",
  "key10": "5YknMZvqBmhJBEfFXh2LmsicxcVKj6tnihjaBYhL3M3RwnypNuzfMSf8vu2Dnc8NBdiYX7aeNe7Rw3Src5HkH2bK",
  "key11": "3rTth7kSJ4AvsEA7774TD2zPc49rpG6RvVppMxPZcar4SemGZ5MRh9KnTrB87cFoRRcRnp38ccDnrD1JdLUfDzvQ",
  "key12": "7SpAyNbAWUbzrGqZ5nxyoE5cLbyVw62BSEMHy4BkhjrSvN481gxS9dcN8Nnsyp71nHNjPWjaPUuZA4TS6BzVzqv",
  "key13": "39h35PrYZoSeFrgp2k7skVZUC9RNCWWoTtA4junuPo6D6MboCwFUYjteLLBFrwi84GJjYcNoES7y8iXWNmbiocXy",
  "key14": "42H8Tfa66L5SmB9JV4rTNv2BatBQK9h3WLBoZWdMueNyauVxdzeUpq4K36BbG3YbGwMPExA4s2ebpmtU7WGYb3FD",
  "key15": "cJ1Xe9ojSvRzGciarLMx6Svsm8BkTe2JunJza7KtQWSe6BHYC918PoBYEjZHX8bLvGCmsXhyjtXWHkciZSyCiBh",
  "key16": "2bipdkNuTDapf2KMr7eFCdQkH4QizX4xwLpkPUxonpAoqVh4Zbhrrdju5xmwQN98eRk9zg72dPUysPB2m66RfuZ",
  "key17": "3Zr59e3UzvVGMsLFaQKWjeS5XCooB6F7BnSSRKZJ6JmXG7hhe1LxDd5Mx8273418kBMor4rSNjLPuutqipkk2RdF",
  "key18": "4EwmpC5GkYXKE6TpsPmFvRAQPBnWnwHiWZ2uAZznpHK8Z5SKFBdy8AqJjrYDX3UNroiPfcpBDFx8hS7gEHJaEw77",
  "key19": "yyWdCHoxfZevDERm2mAX8J3iSo2GGrqc3555ityopjUukZjSrfC7cHcpbhPMh4Xkp1Zb2PpDugRTs9avdiR6C6f",
  "key20": "4GE2MeDYVqzGYJmMB7r2jf5G4kU2d68Fz8UiTFVXxnxUbDEKFxCTLofRaK7UxiB1jxkgVsNwanhFMRusqr2YNsxc",
  "key21": "4d4jYA8V8jZJWx5uMvQkQcs6c9gkesb8844K1q9TGjPnr7pTqxRcMNJHCyiZ4QNAE472F5Gu8LivxV9YqiX8cQk2",
  "key22": "4mLyqR82nm7xca5o7VcD6hSahCaX7U1o7rMQXgebeged9yzuGQwtnwR9bhVGXap68nD8UEwuTj8k9w6fFnvjYbyF",
  "key23": "2WXhWsA8HakNTghLmLW94AG8qs7751o6AqNBWnwoyZyM9uwunyKnczvkUSwTnabiGF7nfi6RtP57hB7EoKA6rUbz",
  "key24": "kavUg6jVBdyiypVjHoa2YYSf3ANGBisYGrVSNQPXF5373q3r6RnuyErQqLBU2az5MMpw4ymvJVLZqjqHFEvFpHk",
  "key25": "62CLktJ55UZreAjyfTtMVvtns8QeqWaHLdvaiZkVGmwmwHwrXL5uYi4bHeeWppJ6AispWJc1MTzsvJBrW9spUgg8",
  "key26": "54JQN6GCdvAfWTpbFP1Y33ARiyQ3r7QQcy2xTHU44SvzBXJTRGpgLqxGW9fbUbUWHYZMofVX3aGMgn3z886ScZEE",
  "key27": "476UjuJChFF4SgRknrxtZU7mWQFHfZRYDr2vCETGzAAxLWp3JkkVFqbdHHi9ZZuYUWy9hYk9mXUa9W6saDUZjSmJ",
  "key28": "ADiBnuYAapSGYdX84fpJLubdm22CaFoM6KVFVg8BpSzGCNtY1CdAyhb5UpP8LpQEuLDYheDx31f39Sz5fdEswEB",
  "key29": "5AWLsUPxiaLbVzCbwGPZ3nC1YdsfAJAVSKrC5vRYKPZ8dCcZAdVBjsa2g2HAgYNRYu28f1pJQ3TFqpDLK6ukFA6v",
  "key30": "62vt3ExBWtD5CNFtttUmQaS1jyeHcjVgzVte5scTQAh7hBseF4KbfghwUKXVt4XK1kN1R6gKu9ftFNCvDNaWe6EH",
  "key31": "4wymC9GNBLAHEAKFfpVEd1XWMhDwWr6RhRXnbn6bgDzZjjjsg7csbmB2jQcp4P1p1hd8iXdhubB159EFpvok3ckP",
  "key32": "3YZj1JCGGswgWgkzmDujRu9jUeh2eEFB95RbmuAqVo31y1k8BroHzjoUQgXDZP9db72GQVmJk3wzNxCEQR7bJovu",
  "key33": "36rWmm6b9qpUF34ybhYgT1ma5PchgLvpuwD8iBdTaLSTkzBo49RDBaNxvhwzv51PnrqRXG6jEpn5Ed5Mp9r68qKZ",
  "key34": "24z9b4swACSxriC71TvcFFTXwhfsNtfQX53aE37GpkcgzCNDJNeMnDkKxcRzMja2ozHQtNhEQAti859sBWoVAbMV",
  "key35": "66yNVmYTwhdfvcB4SfUWxLmEs4cw9XxibsrPSeEVqimdo9adXgmHPerxhHtpQBM461M7fouiECFWXSGjdEEX2buL",
  "key36": "4GZ8wtQvJ6r2VRhWbx2iwPoEtrL7YTH4drzw8CgAe8T8SL38aq8comHHgu5sgmXJ5vojUsWoCsGggF9pAVw6NDmK"
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
