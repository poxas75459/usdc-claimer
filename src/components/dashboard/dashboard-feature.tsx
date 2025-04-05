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
    "2v2KSXWTsGQ5xjdRGEm7RGC4uw5nFZZzC9JvCdWaB8SkbbrSc1DZFtDUgZxRRgXJyiXCQX5HcM4X9AL8MSvsWfR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fmqQo5wK8MStVK1Ev2rZGVwaU9d7gLKWkcocG4LGxSnN9ywfTFKrWrZy3J6DY95G6orZiTuFK9fePhzjwtPdDV",
  "key1": "2MkER9jVqCpARAJXZK52QA8FKQMJNgJw9UxTA7qC9KmNtteZ7k6w9CbidbuRgt1viaDihRwTRivdYCJ1qfpovE8",
  "key2": "2DiLa9r38qfp4ZKphpnWvyEXnF21aHmeirVHeuWRPF3h49Fb84Z4R9ARBp7PNJ9iYrFnWGMQKN7mNpDegkmxGccb",
  "key3": "4caaD3B18VJWVwfUnCDi9S4y7wouxSz6vqLznhWKAEaBsoGncnVwWKac2YXEHvRLvtaeEJzq6waLnorLtSsQJS2X",
  "key4": "55vgkG7SpT6U1ZL82caTv1um2D9i7k21LgUQnoJVS6DBKFmpjHKXiVLZGhGNhJHE8GCVk2ncKgrBsEnu3g2HcsLS",
  "key5": "5ReUeqV3xgyFEWzfeSp4vHwQN6Mj9Scgnn3W7nTGv38fsS1DxEj3Ek4iaTtKWwsh4hssYzMVFxsL53FhwfYxhpWE",
  "key6": "3f4mhyDK3LE5rh4iHuKJ2GudS2moAWZz57tFxe1gmY8ZibpXGdj6kh6MtWVYu2iocTrFu5B7Ve5pweQF9PjPVGr",
  "key7": "56zGC5YyPTFw88gN7hYGae6UEXzyx8fHHxrWFVtUjMju5qQNpQADoBxmh8qXAF36EtchX5VHp2EvWkgqjbQJEV2k",
  "key8": "5T1GXFiA4d5yosM42uyH6jjyeqT3ZJ6XnZ8TzZVL4hz1AufJMie5wydi9rCRSMVt1RMvmSaySMTdN5BvsZyXru8c",
  "key9": "5kW4BvAhPaJWFJpCn5DKhQU69sHQpGNWzYD25wYKh5tRcshEXHvqgv51fbN5HpDS5siD4WtJqacd5oMYAi4VMct3",
  "key10": "u8L6bcXXvzmsQLwhqGZojLafD1Eou3cMbZDHymd3rpeoAUCMWGGNqmiYsL1Z5zyeAH3fibDfBvtixoVHL4KmLj6",
  "key11": "2JDdQ4oV33bdGFQgTNBHD5VtUNqGie5swQbfWCAuD6AzZonoxkS5aZcdV8g2gWJ5UddaNcH8CgyGUexYbFZXfBVu",
  "key12": "454mYzQEiGGxaYtpts6heA7S7RBKctZgYkHZYH931NagJgSoHb5GsWovTdxi9NnrB2tA59JVTQ76Zs7yMk5Qq4B4",
  "key13": "3fENTP12AurHTRxSTBHcBhZCMTL6CWkXzbSWWxet1LYu7xwjiAvzpuW7xReBtHCF2Vui494rHxRPMhvw1sebLRuA",
  "key14": "3yKuRTTz88rzqp5e9QjZB9tkrkokud3PTCGiMwSRJ1XTnVCSsovrXJiYKghBoZCbvii8E6gTAuoN7XY5Gobz3jcm",
  "key15": "3ZnQyCV8tVUXuQdd1PAEkFxmkZLHhskdv48SwqWUCaAbM5QeJwr2h2617ijLQhnt5w3aFyZjUUbvzyY72Cuv7a8U",
  "key16": "2doHxTagNoXfRd4yi3Vim1z1SM1SZdGtnadSnrGtvLegMZyTcebUoRP7YshYUtNHha2EYignuWTCfYfF2i4m9pWA",
  "key17": "5LmbddQW2LQ6J3AAgAsf4CqphGxrRXuffHp74WcbdbQffxhjGr4FBBD1FfuGT1y5u5y46Q4EC62qa8tFMExd2ZwU",
  "key18": "5BoyyjeMXELfTgSm7EKqnJvUwnpkePWjMbYNSLhrLuenrCEAD83pikghuN7CtZh7gF8jfksCqSwEjm1PawTWv3Wj",
  "key19": "4DBHf5Zkbz33ZHpKE8ghdiwUDBqRpA5tah8ix28wXWeWNcyFAfGPEaL53t6kk6wq365DmJEBnF2G8Ds7FpLc5WDc",
  "key20": "2dFsS2nQL5YAYsZSvhToCbbDqjku4GRBLm88xM7Pic69q16F4sm8JspCuCYkk9wDqfSASGyirmpk4FaQsTKUHaQL",
  "key21": "2Raf7jQCtfZH55szd8ng6JWYcX3nLipbmEUSAdjWkNAbxN7VaUdyhPvjJkbBPcY2pPUcRSyqAkEEUPYmuW7Qhnzw",
  "key22": "22zkQmN9Wut36JVJvG3NKTsT5dDgkoiwBj2zkK2h68DKUR6KpBey6MPgesRn1q2igiCoJndHnrJjfWaaVkkqanZs",
  "key23": "3BhyEQQo8myhnmwW4yGj9FzZPD8BBgPRCBCojCPeh9fZQykaqEgaQSkp5QGZcFGBUsRc16HeCVfUUUhpWFbWxiLL",
  "key24": "ethGQ9B3m5HJw2zTTGZDzyhXXU61ERWaQKWE9YMBE4VBa7UxQ77GLx59vjY3bSYbeTifx5XXSxwJ9yhkmjRVd3k",
  "key25": "5PwFKAcHxFWu8RyDxDBqStYutjX4vFfyeCZ68miXeLt93UKTRRnYeuVkRYs9b6HiV5pzKxhaFNsWwTtEf2WJxEQj",
  "key26": "3sq6d3uZfk8tvfM2sCzjZR3aqbFrmDdzVL4AwvUNhQts7NWs98WFVY6ZoU9MsKdAWSdubqwwPbdBf31izCc7BZip",
  "key27": "U3tAAkZJ9j91f2XtbfXJ7Z5WR85BwHggattzdqbvNZfdvm7zvyytd5Jb4cVrE9i1Dn2amaLdjZQDArxEd1F2B8c",
  "key28": "2k3aRTGMNGyXjfzkGTV4TJuazRmBT4Q6At7yHBJvCkLRKUAMnW9h9kov34azE8nBMjMJeM4wMA3ZV6c7VH9PHoKi",
  "key29": "5eWTbZ1kuv9GbKBMZPtGxg5RpyJt1yfnYtsdr2KaqTKJ7i9RiGp126sM584QaZryuqipnxY8VVXmax7LzYE6jgPY",
  "key30": "4xmdUYtMmGkQvz5JYXtZ8gtrkfSZneb1bcsCp38pX79k4RUJWPitNuYrtdM7M42k3npKS3KL4T218zczLCmmnKx9",
  "key31": "3LEcp44tuvcdxqNctaRHavr1SmwF56beCCZu58QjB88934vhHdnaRKyFBcLcbkQtgrbME2iv7BwFBDBkjbB8ioSY",
  "key32": "WJerQSZUkKuL9XttcrA63qaXcreMuC9PCxjMhBqd94fdkrjQKFAiaS6J2xox4RU6cKDU7adGxUSRAPmS4ZXkRy8",
  "key33": "wvSFMofdxFwYejnwLmZrGtDKgEQWHSfh5NBg9EVVHSP7GE5tGVKWdpxn29TmCt41ggaXk5UcFbCiBNdqdeBaK9S",
  "key34": "2vj9jbqqShsGLVwFofZjd4i34Nk2CL2KJUoAYjLW7MXLXAKjGJeRA2QswvwQndyNkzHc73xUUeNLitkrKjbyrtQn",
  "key35": "2JNmXRYNT1iS2YDw4uPB1Un4TtAZBtLULjLFDeMo9ZGV23FNjt7cwg666RHwd8dx7oEcaJK2U9EUE7sjXRmkYNEE",
  "key36": "3cEgnb8RX5q9Ut23UxL9cRYC5jqFrqbojqQH9x2RqENRBLcYvERfDanBo6LDtuMtBpmGCTNHSM16hrpXBwZbbDMx",
  "key37": "3TtvTGeGEs31ziajmuo4QNSppfzzPXeYhGzE9HDWjdR93MwH6Uf1djjzabHKZVn75cYL5WMxSyDnWGiVTVXwBnwz",
  "key38": "38rkW9x9YnJHB7rmKvjrZTr7ULWdboZKNuBW2WSDVPw93X2sZaWKMhD9EYXj6SrQdNpZYAE7Na2FTzuWzLEDuXWt",
  "key39": "2gJV6eg2rTJL5diABdcGxibWmBXKfLibVxmaqeuTi4BFNTEmsjpseeuVBPQeHk8UdHTfGYRqkaYpdDrbewRPddXb"
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
