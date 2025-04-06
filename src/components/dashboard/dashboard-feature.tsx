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
    "5VQqXb1i5zHMKLcjjwVRZ83a3uqgToJB3s9YkDmrmXDHtgFArXZTaMGffZJQB9SD6G7fU3tFvk1fX4uryqmbdA7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GawAz2JfeL62Wcfjf5vjKZ6XLRxuQ2M96LzGvLnXsKBmaQbq9j2ygyYgS6CakSj2XoCnyRb4W2eb66K3oCLbXQz",
  "key1": "iJs79jFU14DkQ2DAWMDyBw587Y1kcCQSwGhk2EyKyqyues2WQbPA9JERsn7ohi3SFKJNTEXh3Dmf3f79Qwr6KTR",
  "key2": "2BGby4LpRUYoaEUstBAUVsc9kxrj3dUzDhYwVpwhZzZha6XZNc3L6Q84SU38siStNjABgMvkDtwUuzKCmDwDSruy",
  "key3": "45vSt56xnzsbELFoiBnzowVB5pWCkEeANAWFwQ82TXXxRP6E7pcMKnPQjJenrzSgyC1bfV1pyWqW5QnyLw9hENAU",
  "key4": "r9CQb4f38nb96YvRSiaJggf1YAwLAfLo5akdpsn2PppXFY9YmQf9y1p6dYP7GqDgRPTR5fAmPNixEjNwkEBEzap",
  "key5": "7i3KcKHHSEP6Jg7q8yymR9GgaYj7yYfxnArriLHSp38FVAAX8qCZQvzvpeDEsqsgt7E2A22faRgHQxZQDHQe33P",
  "key6": "4yhErYfa7wz1m47qAYjgBs4qn4JJxEpp6GR7z7wiHEGeFVchwGp4LiumZ1vsJ2DGMWLWaRPY6xoQGHHamSpUQU2R",
  "key7": "4QFayMrXYo3amzmY4kGYswKUZ3dFVLW6WUY2QxKZmyr69WdZuh94HHgxVDoSHWHMpgMagXoend5KwAz2n9J1UY6i",
  "key8": "5ne2ADvYpP4dqJen83YCSTFQiBW5eRwAxy4vEwhxYkfabaqQWwbMV99tFwJkwyQ7ZeTZ3x6QZkA3wUHdxpQtKx6Q",
  "key9": "5TYmNopZDp5ZUJrcXW4dZuBNtvzQCyWfa92ePSTApVTE8kQA2Ew7BaEnpUKFWg6zpSGeckmv56q71n5o6B9XBDxx",
  "key10": "5SemVA7hqMx9Zby3nEUtqtCGKxB7wpjNFvdAZcMeQyhDd6syVjGtTaWU6vLZZZiELFMKRnaxV4oMp6wMxG5BmpKV",
  "key11": "4egjrBoURsTiNenPR4jWzXVByBMS4Qj58SAm7sVERXghkGfj4WCwPxDc43LXX3xXKJdsn95aRDG8zXbDMKTAUam9",
  "key12": "25FfGPGpEkdyiUAgKshmQKZupiTyEHT516bEe1TMPgrXuUjEev4BhrtqVjwu1rXziZ1Bf2KUr9ALbgxTrqNX2xPY",
  "key13": "CdLCr7Dqpjb4EEurrtWWEhK7yXKkddm1MGB8jzWDoRCVmpyRoNtC72GNJ5KgB5gn6hRwUG5sNyHgPLR57PXjLFh",
  "key14": "RwM4pJzUevXSRbtyCBdq7JtCpBbcDy2fQatGNqBhsKzzXiydRYpx8uuBXCQmDzTZE6Y8XzZB5ESBjusg3HfwMba",
  "key15": "2y25q8K65v9Wm6x1zVg4h1ufJoCTpiXwugMEhFGnC2ghuxpoe4Zsg46fjcxR7dVZR7HHTm7ZXZM3PCczhTRhpAgk",
  "key16": "4JSaozwJktTvegTAqsvFQ5yZMAeasaZTyLGsDvMEjCKH96EfQAvcgUEDZ1W3GJ5dvy4Fq3P4VrTCzE2NEbXihFuJ",
  "key17": "4DL887qzpEqdNAQVJbN6bDNAt1wAtgiLrRiEUQNSXNFYf49kbtVFojWE8ynwH3kZVc6cto4mQ8C4MNLasZt13MXJ",
  "key18": "4QuYhCeA9vsqEKPAjRrpmfAB6YQVuWMd8SmfXyRUpRsks1LLLiPbF7QUrTK5XmdXXDMWqmeSNkUt8NK6k5CzDVdD",
  "key19": "4Kmmpno6nNdMmBkFLw77MvMnUL7Gp8tzkndANZ8WSFiVATWbTm7GsDmAodXoggBsms6vd2xju772Xmy5iBYUah1w",
  "key20": "NTHQRLQ3DFNyX4LcfovK1iTYGdbQkimo8iSLtaw5ytszJ5p4WSYAKKtGAo5MF7LEFz1A2RUbyx3xVtVHpwc2Vx7",
  "key21": "5icc43UdEXNe3YcNK36bsbs1GJfU7PTtJppRNjfvVTd3t8BYWwRcoaJzNdL8FPAxXaH2F9ciJzSpEaP4eJPA8yZx",
  "key22": "3Y3JasyAcv7fEhC2eBQVSjP8bFdy8j6cdPBFhn5J7Ls4Z2VMywDxtoMkuh2JZcXDLm1ci8TtRZ25AisYSquCcdNZ",
  "key23": "5JCPckMLLnU68954duP6A9C84VziBQ412Xns5zfEq9xMCXTNu6fuLmjxxK7jzANHEvw84caCjMF8zPqGvuPeN3ND",
  "key24": "3McqSB5CB3VVB2V9vQcUMPNsvWGv7tw6Lrf9Uh2DJyK9bBbAHetdn4ccWMgSsvGcX9qB84kgfF8vR6YDSbg54JZQ",
  "key25": "2DVRFt7FidVJZ7cXeZNfL1aS84x54LcJoDJUz3gELfSyajS86VzinuwhA4JosrxKdV8MTiKmCGHJDMhCLhT19JZM",
  "key26": "2nqgPCaGivKvYgNVP2P6UtK9DQfygg2KJKfZgz5uscgrEfTDddt6mjNtYAsozW16nKvwK4ikXgagLD9SaqGyxkfr",
  "key27": "jE2iLdBWv4vj35T263ckq1nMpWGWeF6JSpKB49aqvzH5c31kZ2NaitGo2PMWnkYbQ9qGQYsxxT5NCbi5ogLU2hh",
  "key28": "2UmSPye5Hg7Lr47Rf2ZookdfBQAM1TJ7HWVkFizx2m3iV6pgNr5ruXxy1enSswkNZ63qKNi5dSM3TJC5zhxf11t2",
  "key29": "4hUT7kxJnf3D8vqdd598E7us27TkjC8MTuT27dY6cYiu9kzNUuw3WScegc4UtaPk3i7ugWTwi3VDD5wPsfbgnJTd",
  "key30": "3o8Acin1DwxTydD9vWfMKSzbr96iGcAEJffHWD3VNDkYmTdQXL5iMVdd4qDaYEzh2KWLX95LJxoPncoFPat5yMPV",
  "key31": "4iKGduaBVw5ztKujizQmdLqmUQhsKbf2bp87rJhxcUnmbhpMjZyRK9TBVBaJNZT5E6U1H5VdTUBABX19v9EacBYB"
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
