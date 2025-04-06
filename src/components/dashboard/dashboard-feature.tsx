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
    "4UPXj8FhA96FVZfMFBjzDUXP6mWhHkJ3HX5kTg5g6p7ngrEaVXCkXY1Fe7apQzdXCoUqCJzdKsUA88fEuqRd4LYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mNJ6Dx3h79ktFYRbtXc5KzQsRfNE3QTYTzXXfyUMt5hzKp3JBeX3J4dHD3awWxMTaergZ55vubU5M2eG2Cn9sNP",
  "key1": "3SS9wVRKDsEQXv4G1p8wHfQD96Hrg7X9TTgMJtgv4L3wHZ6rExrBGTPTyJerygzW9a7SxXc77d3jHA3WfQ3EP9h6",
  "key2": "QTFs7eHWdQHMxz1otZ8uEFcre5MokshQEfkQDsyKx86g3oEJGundXaGrHC5WGgf2cRksf7tBfCbU3Dx726fGH2C",
  "key3": "3fniXCSrU1ZxnkgAyVQM7vuEcsZdPg3tWytaVQGqqc2yqCwzJ9qBABRpife7u2pjJXGbfvpg4PgbNPBTHSYEejCc",
  "key4": "MTtPaakEuTPKW3MSHsiG2BV1WsJdu3yw8uePMz4u2vKyiJZVCRgaNXHLbGQAjE1PNvNXPnYM2SVQsvhiuC3YvVr",
  "key5": "5ofrWHmWosF5k8dJeHdwSqxhi8FhGh9RkzskkgJwS2GqhgArn3zG3ypkqvh38WPRxuhbXE3S8iv4Q2ZCZni9TcPy",
  "key6": "9WD7ANPTQSFsfqPWwwyEo2ApxPz3PYyu85PXZgCDN6XNTbLYNgi7awXHzbTz4QH6ik6fGTGLdVNwVC8MeJaw9Br",
  "key7": "4u7U8Jtuq1SDssHtessGFNWjs72RyzAufkgH12BhsYu3enPkRBgqoorpYbMVXA5oWtb87E6tYq6bMPfqfmMzSrX4",
  "key8": "3b5L7mdqf3N5YFACFEaKywCvSBbiqUFi7KKPYtXhj1s2x7XAAgVjoB5rhczYrZCfHwhNj552uhZGo6n9XZ6vWj4b",
  "key9": "643fkkdMxVGRaFTC8ZMK6HuS128WfGiwXV2A6paAyrULBZBMBGFckHs4BQpaiE6LaFUGF2quejYyU9u9VuTg4eZ4",
  "key10": "Gvn26VLhbyHdc5k5n6GozDzxK24mbdm78SktM3kvwkc4kAADbgzKrnHWxWwUrbHLdFPxMnrNbkfNoKe9JvseQyy",
  "key11": "34M9XSquhzGEcEqRdAJk8A3rNNJSyxFf16vkR1pHzB7KHbEeEfbn5oEWJVvBe98HNP4LEiDL1fiEULMRxrpuDy4t",
  "key12": "3Vxf69ytKyEoeDPYov4VSWHx5ZbUgL5T22thVErC1PjuM1NNyuvpY7ik1b8eNbyMiowqRFPLtc9kMLpTPgbWjBZD",
  "key13": "5S8dx5QYP5Av5cPRPwvdbsMwSrZr3HFggA45jNcnFirE6w7GuG9Q8FLHbSmJX2HLydsKjZYHDfwcN1BKWa2r6H4J",
  "key14": "4PdynB2d3obkZFWZPEtMbx23m43Fn8wTuzGy8GHzhjarn1brzZxvDN6NAp6qmWupTrmyEPxrse2w4engpx67M46k",
  "key15": "5ZaBLbrvodTrw2tDGPF2eGsMNVVTjAPYFstnWa9oRj3MKzzYbSKbrECTHtbGb7uS1C8LUCRmZiNwF9bJjCr5Sk9o",
  "key16": "3y6n9NtXULo9VDboG6x8W46SayptM4BuBgiLvrytPgjz7Rwt4MQJei8PbVDZNodERZhVJLbHQzdGtnhCicZ3fF3W",
  "key17": "FbuC4sHfU5twBFqq8MDiJ7peSfKVK57tHEo5kjXCqqkE9C68AisXmmz5hvCBAKLrKKA8AgGpdM1oXFTrN1xscVP",
  "key18": "4di9nF2xLdVw628gZskxsCh3kJNVDd9nWfaUFucws2D6dszYWMKHPmnti4whD1ChFCtdkTamQT4anDPpni6YWU2S",
  "key19": "3gCKXKtS5obwPfQPJTzrWECXdhWr5z65TvjGV7sQkwzDSHgEzBG6hTFNYLtiTFYsH8vo4MXT4yk8Nd7rFhbvRNMd",
  "key20": "4mHohEM2sG4tv6m6evX3LUvkWTu3pKSqcqTr6wxA6KxwNnXnnCjQ6M9WnqAsXPnvUPo12wWpjvotzwK9Fy6oxp4L",
  "key21": "5iqfEDMSFzhcxQ5YeUhyrGz16Di5B4RVuuL82rqYLNAJ5cKerV3dExBiq655q2UD8iezBxtqLKeG4RMSJGHjDPwD",
  "key22": "3iMtqgwhurkaN2EdsHvwFCda1LJPRrAc3J8QeZYcd7HSaW2EXnd1wnEzLxu5Thiv6xLr6J45UpDcpVJYdQYgg4de",
  "key23": "YT2AF6kWzuoMEE2ELcaBu9ePZ3p5yL1x3ipb9SXPYt9ec6zMPZVTJ67eJXGbcBnZtEgwjGzRtMYrTEpXYmNKytD",
  "key24": "5fY7osXa4GDdhqfqf5i3guFMcbghUnapRoJFJ7XzXqRHYtidM1yziumzhHLksiHaMypb5MKViRV4oTES5k5CRyqa",
  "key25": "eLx2ZrQzJYeonbtsXx8Rj9ysfWfhU54sihRcWsVnrtEwDqnPnvPEYM8zwtdtfnkJFT2BddvrC2Hz7QAyMshPZPD",
  "key26": "2ZjHopzoTjXBHH1DDYLCDt4iASqR5NuYMtrmYhc8T8hHcv8uwF1L1heDH7qxSkW4SRTqxeGSNLqthAp1BqbV7BKF",
  "key27": "4f8fjqz6myPp7JvMWPJm1RieMAASV7UXp9bbxm9baZ6LbWxdr113asFzFgNKsDwMxxdzMzGnPtw1hN6ZyALF1Xs6",
  "key28": "7A4wnYcFbwhXrKkVKH5eJSY6ShM2DnTrS2RLfYko3YpnDWxkeozLUtsBE62nMVqW3S6Tj4Z7XUcM5kpEHWxTqgD",
  "key29": "4iQDbsbwc71Qbca3Q49wXbEsP95CDa3h9u8DRgAbisZC54YYKiM4Kc66W2rw7FGdFg1bdigqagS8SD9PmL8TQxJg",
  "key30": "4HEqyqZBwTBeFxaqDry28HxaM3D8p594vr7CXYH3j2mhXPLun2QQqHg4jHFSwN1iAKzsqvWtbNEVKfZAnX3HReXB",
  "key31": "ttUrLuPQndGWntcfoAqezdnCamS7nhu16vXBhBZytkFFdTbdWQLpUuT8BrRGD3QWYyoqayFSvi73gjZqNwqLAFa",
  "key32": "4XTxV4vzbeiWqAAeewgXWFwYjcirG6MM1tw5LDqULpu2J2PeZLv9EWCbUEWk3DAjHKbFWh8VJMd4UYrDVLRUWmi2",
  "key33": "Bbth8tc5aLkgtnpgGcvVavtqProKs1DkQb3i7EKeGWb3x25sRm5MsKma7pqPwht31f75R8jFgvviqSB9rr4u7Wi",
  "key34": "3iVr46BeRrkFJbupjyeS2RUwoUM7v8vKz5JsdEy3uyHqnfkJH4a7V7ugpCgwq3kMbRZ9fVqNWd8riR1U48x4LrgD",
  "key35": "22LCerSw6CgGfZcV9e6aZ2dZxZRutgpRQ34hDjLmmDiqy7HHimfdB2ZQh8nzNBWiuXUkW2urGCoa4LfeUJk3TCEr",
  "key36": "27nW9MHSfebBZsJCx2uKqMKpyZSm8y9pGbRf2SgbBYzFXKaSdfq1umb7KFjV8kVDejuuri4Tj3nvD2XfJLt6qHLB",
  "key37": "5PZ1wN4tom4usDA9rx2MmDC4m6C8EUX5ESpQcz3vAfR68DKL9dUdjWAWR3oqoYB1us8tQu2jYR8oc2ZaETJRezSY",
  "key38": "4Gk3mzJ9VAAkycLjj7DaNQRqPrRxUiX32JyxyDW5LEZKZpZd5Umb3hw1X3wrN6TDLpMeJMZGqmLHsekhh3qrZ4dM",
  "key39": "3yH1CgvNXyqzqgxnDiKrMKP3qaciin6TzFEJjq2gjRUMKzLLj1UJ2WkJxcE1Nf2UewRCRuaF6TUEESpZ7KSensMM",
  "key40": "tk5KrrQPY5qPNfULpQdpK9Ls9kKyxwejyCJHWNypeGxxq95GWSyvgcGCaq8b8r3x98nCw1xq1PLdKkAiTmbT8RU",
  "key41": "AyYuNXbScc84GkLAV8sXr3FvqfvmoFpThYk9KqSeZfZMsmyLpYE6WHLezPX2zjqBTjaGyRmRRvbzxsjzzFzv6XY",
  "key42": "2RRqxYnaRHZKsiBWRrsZFhpTZQ1KH9pagvTMKncriAfc9p4erYrmaXQXV6igS3PCaCxy3YDbiGTWtzLbwsicpkwC",
  "key43": "5dCUkpggnqMiLBaa48UMmwYPtUxhvK5LGjKVML5t3pDxeXoYiC8Qwf69J6Me9bptm1AcfSyuj7fy1dPZC7y1JgT7",
  "key44": "K5n5F1eABgCbteXgDCxirVxy1RgKcqH6JQav9umXdAdF7ELrxLDSfWuTimm4uLYGTdPmBXgWP4NH5CuBzEFANJM",
  "key45": "36RGqVYhauMsXVP6v24vBqwnbiWUjBRCR8bSqTzQE6jd5MNSnUTZyFsN4v5wwYtYaRtHeTT8EoCnVHzGM92n3Psz"
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
