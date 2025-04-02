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
    "hbmqtecUQe4jYDiHWN2v36SYBD93GnsPui1QwNJJB6bnHMTkWpsa4Se8LccpD19w1Bd2f9oEuxC8Vn7kVgZ1ZJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RdKbcmdjWKxpprK9Lr1oNHeXGJBYDMQGSdQRkz1u8aFPd1jKg6hJCabHmdyggVKksMEuaoFCHdhJibHv1obKqhc",
  "key1": "2xvLAK2GpRqgXPhgDp4a6xoWr5EoCQQ6WfZsNZxJswFd6z83QFKtg8nhg2V41m3oZdEeumfeHUXbYFsuWLcsYZgh",
  "key2": "4h21aYQDwk6kzWAgMbJdTebgYBVM7F4T6ztcAbFpR8tBvpxa3XepXE8y1BFnVQLeCquQNrPtdcP9WJrCAuzfDLRR",
  "key3": "24dFMVnhXW61GDF54mivoS3FcYorcEAV6ntLHPBwJCc3hik3AKSFevQ71hx3pw3VzRzdeWyHdLK9RFLNfiXYLF7U",
  "key4": "4yMZPrKoHVoDgCusCcKvmeJxrmMnZZmfwZxfapYSbmKJMf3fsNZ4H3p3sDwsXSwYza9wnR2ybBCsQu9dXBiiwQxx",
  "key5": "GqdmdnzPTJqDAEmJL9CG8TMfQyPDmf2ZhiF51RhjZiWuzmP637bj1GUf5rPpTTCmp79nedWg6fzAoR8MywT9rm9",
  "key6": "5Y5tWCBf32t7gZrA8a4LVKFY62Dfh483mfrqPoHzGHp4eeNTbD37q5bGboNdBBYe6QHiK92n8uZMyNCQJNPii7wC",
  "key7": "5amFSNjtRwXLp6jbByADEkWAxaEsuPfmFZHwRbgvatcCiL7Zv5j4a6HQwrDZkwoyq8edDFG3KEtnUtu9w5sexRes",
  "key8": "2zE6rNqJXHLqMMpYjYZR3QzWkqkBxDHsL6LL1eV1TYQ95x1u92cwx5EMiYhcMfm3Q1D38jBsSCayMattkYSotJoo",
  "key9": "2xQTduzeobGp6cwj5MGNVAnEaLMK1z8w1k2Q4wHMwy4wQLnUxa6RgaaHS787gQrcwmSS226RCfhEqkx8C1EHBc9T",
  "key10": "jjxEPPBDgMQbBVj8yiZbu3LzWSXLh5QVS6y6TwoiYnNTMkaqYqGqcFFSzhqbxMYXjWc7URF3ceXboDwHB8RK1JB",
  "key11": "3MeMS4J4kocF2ri8z1CEVPcLK7KESePQJcq3rAGy1qqieQtv5exN7PzvbE3xovQNmpXk1a7nJWdfpEkTYuPnHTRh",
  "key12": "3jfPc9WC7u2TohtaAb1ttLt1mFHitkwi7W5ch6k8Uo1BRkb5aMnC7mm5V8JHd2TianfoKmFteuvYNBwVJN7N9XPv",
  "key13": "4tGEnP3Y7GLWwyDiyDCByuAdmzyfU93k5e8WbGJ5FKFqRh6xYdjeDW3z7okM7HhbzcCAR58X5uduz4L4QGDUXxsg",
  "key14": "2DMGCQiFFGTZnZz46jCmMkYDBabou8sC1x5FicELzZi8s3yFWXr3o6vwV7Be2UEkYRWk74qcYvV715d8LA7eUqHa",
  "key15": "66rTaKFCwvx8CxPHM5YoBjnidxBc3BbFeY6TfDUzqvu43aVtog5UYBivo2uaN1HdzjCPfWGxSVFZgFZaDg6XboLc",
  "key16": "2Ea3f6XY2yG5nmkT1Ee4mEJ2S1DimquMvuRLgUvdkoXamhLcDK4h2wPvjpWKPYmUgd25oQQxaWrqav8QCa6UBfd9",
  "key17": "3bDzgoyCunwVXYoWMsgTSh3mvXmeso9kVYZK6h65Zr7Q94SnUoDg4zebM6AMK3iz4MGxvg51i2YTHUdHrZZvowy3",
  "key18": "3K28v2znjxZhEVCLUtN1SZryNPTEbD29x8tHH86zEvbMkSpLNDWJRFiqxDyBMteJ4EFcc56eG87b1tsb5g84Ffr8",
  "key19": "28wPH5K2rKYb4kzGqErseEPTc9eJvizfwA7i72Mq8AoXC6nQgbt2FPQbJqefHku9qtLoFTozFBVHo9s6YETf3deD",
  "key20": "2UaEWcFLdcaRmcL1UoVtjNHvCED6UaW8Pe5iwnd21TS4ow8fvbdzzVsKaCShxxEkZs9Qg5FEY9H32bRZWHZzMxus",
  "key21": "5pydQhvDxXgT9M1MJDoH1fK8PaFVvgaHR4BdVGRY5vMe2F7jkitKtNSQU2NkrxA6Yz1YHjhZCqfSHq88FXLakMqg",
  "key22": "3ZGLuFZ16uz4cAFfZ48cbXTDV1ASPrRJa2Fehz9eMeA3VzLiGxWv1DZFpsLRxVsGr5VujtMYRtFkaTz1ETffGZXz",
  "key23": "6RpghAmNFnzvfxiDmZdxVbg5JcSNurkXV9uiP61d6Tzz5FFNjWaT6w3b7ZC6fJHGukZKtMN9M3F5ZUYUEk1Nh9z",
  "key24": "2jsLWPGgKFAJfHipr1K5hDjkAQuvk2AdE8SgxvpNAryRvzmXC4ztGZc8Kz2hkT7PMHBq6q1ZLrMKzrNkuoj46rfY",
  "key25": "ErUC2Xty4hwESEJnaLkDWiC57S5oQs4FEJ5XpgCVSR4sStEj4rmYocVwKuCunHrd5BwsBuvvfRGk3x46fz2HgSD",
  "key26": "5EqhcanbyySWMdaTfiLGK84kon6FxnBG7BfR5VNCgnpP3KnYsGeLKbvZVWhLfFG383WbDZxvBsJAFzK5di7AUDbW",
  "key27": "4JrShng7i94fHnJyJx51hp6FCL1m1UKNQ2b8DuhfPJGM4hkyzr6peFPqoBkn9gZshRQ1JWgwPWRrcpm43UEPECVP",
  "key28": "5KFAPNzFrN3XAP2gLihn8q2d9VE9RF3iQbt69vERdQetwdWdAjVycgitgZAKrYGSCBAgxYwiqrZvWARRjwJzgRfE",
  "key29": "48Mzcd5Jb89SCGk3rRV8kmgXrgoVD2qHHKfGYYbCU1NrZDCo5z6uWxJx1dX9ZAY3iEqwh5VXWHdsA1GKCvPKphhP",
  "key30": "536mNrJhyr63V1p7YyiEC57WoP351zBFX7CPUZjaRRaRgNAfj3uxQ8z6yf4pyqE5ihkRzH7sc3Qx8MtmVjY4P34Y",
  "key31": "5nuopQ2WqKMLho1yUCUxnQ5XgQF5qiergHXAKNt7WR8VaT9Keo4MV6jKer2MdPFgezJKDMXdw9XYFvZKCwqDGTJK",
  "key32": "29Zoos7Sp75UvqfoV4aJLxeurQ16q9ZZBZobfuNHQhHNXyHp4BAswRQMWwvnQbaasPETSps21kicvqLpBxAhY49P",
  "key33": "3x1j8gMZuoGjaf8EXFQ8JtYkzda2pP8ErcMb2phg5VHpz1q3KNxhbtXKw1vh95VP9yNFSXURtSqwyPsfBF211CKw",
  "key34": "4NqqZJTBQuWCfxUwy5aS2TXCY2vLShpQ1qNa98b4SzDH7fh8ati81fshtDzGChDqsqqdjv5x9tTp1G9PSheou7gN",
  "key35": "2RMSTgUUDxnFxqWsiFogB36sVWRVJwrH3ZqVtJDFYTBhwkjXo5VEu4beWiCuJktB7ZGBhYs3dNUZpYtyVns8w7Vo",
  "key36": "3whNcotDooz8547X3QtMUNX2jkLDrFcg3mkY8t2w4u1JgwMxjwe7r2BH4Yrk2EARcUrgpkKHSwBy3LcXjSFYFN4m",
  "key37": "2s25M2UkAzSTaTHRfBACDwYS7juD4Xwu2sKjUqzYL7ZK4jXP7UeovrunyHceWzQUhgPVTNvbyTjHVn5qJ62dfdof",
  "key38": "5rTa2CQhdKcn83XuRvrXtaSHrU3wYjEnbAu8uCLjCbvY6y5Qzob2bpsGyLivo2s6V7JmkY6CFmHhGJbodjxqBLos",
  "key39": "UF3mtagqWjes8yjwZ7n9WahjLfN9XNMvj6fCkFfBjSMzfXVzi3FCs45ro1vEuJvSY2jcaYupt9fTQXQVKSUtYDn",
  "key40": "26QnkyeAD65hXyhpxbF4E3L48qDPen8WkwjqufRXtNgn2zAaUiKm4e3DELr2P616EGezWdCs5KgWQD8qj18XKqfc",
  "key41": "iEpvG2cXhFvzC11AKbXnhQimQ2umnWFAXUQ76sgBvG5VZTUU3aJaCzEp8qPZDQ7gcC1Qz4VwyYDWDBbxWTAJPDk",
  "key42": "3GtArDE1JqfcNLM3XfQAisoMT4tNqFJh9vXeutJBDTF4qzMf52kkft3uhVrHGMog1xS2EwpNNrEY8G4TNGx4Tgx6"
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
