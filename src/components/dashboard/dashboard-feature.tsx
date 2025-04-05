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
    "3v3oXj1dT9zythLc974XpJFvu6q9jB1yEBTzBYXpoeoc2uWvx8jC15scR1Nsdrx5GXTA1ymfafER38hETAc7wGTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMg93kPAxom44zaNCkcT1DMHjXZLrrG3AmEKNyZn7wdH2AyzcyAU7mhUVAiNHba1GChw6JmA1i8aNZAacPCKMWW",
  "key1": "5AaC953k2v3qKLLxFT6bVqHgChaCrwwL31uekxPpq875VpPVUY2zG6UMGBpGqUuG7w5mSLBWQzREcBgkWEZViCZx",
  "key2": "5Mfr8Q6zy2dVbPv5fKcjhBP7TDP47hcpyAeb9gyWzT1rjXkiJnfKHWcebquQx32YygwhJiXXqpaG1UvFaXieaBYi",
  "key3": "3BUdphB4VYeTFtLi8Lj1RYNZtjA93NK89jQriTS4sexYT9pfJ7Cr3aPq9CMFhjuGJBMQhAaGd14AoNBpfjc2tHSz",
  "key4": "57UPngJVBMJfkH6aqmtaYAjtFRaCD6JKHMtM1FVKeHAhfDSnmKHrx6tkH5ireEQQPUF9UZLrpcCAcRrNBMyJxnRr",
  "key5": "2hbxX4cTL4pbEbJXJ27rWLocJ6Q3cA3EHFDMwfUT8d8KcBWbjRGooR5Y78mGNbWtv7vVqUuGZTCunbRUobVC6YSR",
  "key6": "4YL3NRNwHpRH3W2nmSxE3MCz3Mx7cvLkemF3Ru4F5CNZGHwQxJgpM7UdXT3fuhm7aPVAVXKdY6PJpsKjgCy3sjAX",
  "key7": "5KYvjrLGczbTMEEnjtnEuPZXmQ7aKQWTAvkiAKmTGqMDsQEHrUqrMfVcHJQaydgDJ1QB8cVHESfbWFQh3ztabxro",
  "key8": "4YMH92cSF5QpZVuRgPr8P3vNj3J9b4SDaifYHSFAoe7rRAfdVn1TLwXYHuTaqhhbAsjk9NdDYN2BtocVbXNJhZzD",
  "key9": "5eu668fH8551BDmNcnTViqKGoe2ocBB9ixLWEq2ENEKzUENf3UWJTLeT2DZiVQm4dX5diqvGrHctkF1EGzv5sfWG",
  "key10": "53HPX4s8Z3kEkwPyHUb2w64uSv7m3NBZMbTbnL9QrowQ8BEZKjSP8y6e3dA8UqBr1KAnmK7XPm6CvqznAkooi461",
  "key11": "61g7ZL54xK4s2ZwxRPdAqHpcdsD7uqpW44EsrXCXJp3hU6J9v97KaDoNerpD8E5TtegZZcREs9iWNAkV3QLjLCp6",
  "key12": "3sVqGmdxkbxE55vh45v3enjbDu9PfPpFGsjcargbJfULxk9R3zkvXyi9X8UZy5pTgCJG6zm2qEvQSNWjSFXdaJ23",
  "key13": "k1hkCaNf1SNH4djjXc6psdHu5S3wChdRJdBr7XYm3JYj1mkMvyvZBkdZcqmMrpmGKr4Qtgbhss21X1Px82o83ed",
  "key14": "UkZm36V2jf7ieRdV3zegaUz3BVn38bGTij9tn2i967A5bQSjadi13W1UcZ5tpFYZtAZpqCe6NktJ8LcUzpd2V4D",
  "key15": "2242HF7kh3yWpkkqTyfbfdDoiTRMvNZdcw4EFFvdKLTM7HxuwW22dH8iKkq4UF2UX7VbuSdtXCt2gvbu6V4KNUv9",
  "key16": "4FnbLXiXARD3HtJ6zDhHQLxkC5cH4hpidn7bu72c57HPXw1m8YKTZcanBFoLF2Br1ZEVdpoyfHb1PYtRZkfVGrn9",
  "key17": "46gzgY1Qu1R9wvbUsuuuLWp1xaGMrUCDu6GgFrd9sc9NYxncqimGVpVfTQUwyrpoG3GnM6PVHM9RfwDvqFNdpVGT",
  "key18": "5eYkcrf1ddyCsGbKMrx9MagcuAr7PpPfezYP13tR3ZPDF3HcqRCeRz2xBzpgjotAYJRBiGFwsjXhzKMBZXNqjPMc",
  "key19": "4LatGZuThvhC5ogvh4bpXfwYTgFE5pxrrHhnhbjwWAEU8B8snnWCUPnp5cEUXA5cqCFdric8emjkMtVnpVf6F65P",
  "key20": "2NYHK2fsufH3GX1eio1VHGLVtm9cQGXw1m3SmEprvhSXeEKFT2a5YvX7utvzaV1Gsh8K8Jf2SWSc3jKjYDY4o2tV",
  "key21": "2ZSJ7V8vjDEf1DBJtoWK6dpbgLPnoC6PE6MdsDGq5qigTQKD36NEmS19cHc9mDXY2QmVRT8mUzLdBWT5X44rtbF7",
  "key22": "4JNBwkPotqpDzQLoxPn4oTgHZoeTNvikPMMwupSkkufAPPjcZuiwk8AshPGPWzv1eFoBZjNpjb1MifbKzpRMs1n1",
  "key23": "37coVyQKdx2VEt6FRMhTB2gwmyvbF9HeqLMp6kJybcYRjYj7JUxF8DNz1LyBb8iijRGeE2JvdNCCfKGkiuqbSkiF",
  "key24": "3jPVSisdh5APDDkN8sjWtq1XiXDsNYfUX8jsq2nwFUUSXmwiRYtyvcxuhCymrVLp8NJXLo1VoG1WFxtx5SjXXUzo",
  "key25": "2eCe8VJUbs5W347SpJtFao7vEQX8BuhZT5sAKYH6R9bBbtnXTTzLQfpNdN5TkyALRpYJdYRvPqnYCtUtvN48Zy67",
  "key26": "4vbBBxoJf1itWz1zJwJy4FtVsPia9iWArhX4pktBBvGwrXHFn3NetAeZKKZUuF72heqgSiYKqa7QfgrCigREqrdh",
  "key27": "4hWytv9uYvFWGNbdSbgWtSZQpsHzJWqfVkQDTrctrappZmzWaLH5Bz5SLYqPNWs7u5FH6zVeZenWcE6wGQN8A85j",
  "key28": "LMcy3iJWjkG8FwzioP7DFKiESZgkWXXyaFw4JP9Tn5iEkkZceWA5XqWK9d1kVKQpCnmFiNqc2XrvYjRCVo7gyy3",
  "key29": "3bqtGLGSpW2vWWPEnFSy89AuLg4LzbdGDueaLaPo6juXNcydsbCJcjsy3g5az1pcm9zVY9YyVsZvP1f6wPpeXv4X",
  "key30": "4VYPVFVsH7BpBC2BvRa8BP43Rojd4JUM18Bb36mwRJztFSef3c8VJAnoyccAW3A8p9rR8oSVskjqThKCYFso73JV",
  "key31": "3Goaso6uNiXvFDCFJ6aksG9suiWVop1XiAH3fQ9973H1X7W7pbe3Dc3RkPJkriVYVZRkygcCoiZJk8asyGvL3tgf",
  "key32": "WC5y93gTZqXaE4Ypax6cZVi7NbCtSabtFJDdFHq58Dnb144bvozKvpW7o3RfjmWQLUHy5ScxNb6Db7iipvLYSsk",
  "key33": "5d86gBvCKkM2rQttstiQi25KGfhjJ16CqQGu4RPvRzaSjzuCPKn4Y9n7ycF2RabDVuW25jvCFcHhppczF9Q1xAfM",
  "key34": "2pDicbPRLGWSPfFZhYbiTUSwipAtXwit44q9X79sLZUEZHYKVQFkByFRFgpyiAYQkS1H99JcQ6mEr7XNvTzrcoky",
  "key35": "35WxQodaororsa7W73hhPPWowGHNBRh5PTf3bKYwYy5rnS6GgXVNo8nVMnZ5RF4dasgV1WUFJif46y8KKzcRkxR4",
  "key36": "33n7Gemr7i6xuvWXKuAhYfnjiZ8yV9CG3w17GsHHyJoZ9P1raK9UoDkKhWjNpv7dUN45jpnHYtFrfQmyeLQhrcrr",
  "key37": "3zZ6wEcYPqhCwUc8waBLzSvWCMMWZJUFFisHAZw5eKToD9dYB6V5xAs7p4TQRa1QKqgDTrJKgtCqE7YkvaQ5xz45",
  "key38": "3tU9ZdSc6BiV35xCZruCoqJum7VrVxuwpTnpCtwZbptxqU6SmZDTF6t25uPH1ztn2bcPfGWs7RTktasmEYz9MiW1",
  "key39": "4Tc2vqaST8YW1TFchCX8dk8FAqTZ1vAJSnAWMdEP1S8f4vfn8i8KXftYekzLDiVzYL1c5iF9SViDrAAGuFiBVfjD",
  "key40": "Gc78a7xHMBCTdz2aya4vBA6GMAECxmnTwh6Y2iPPdEhirFeRb8S6xQtrUn53kGxFPPjn8zN3thGjtAfwejSYAFG",
  "key41": "3DZpXTQfUa7qzVRHvaybm4kv8DRZNAPRacofrUCFz9cAEECJNhKwaky3bxdftXjKmnkCPMzEqg5Z3b9Hcumu1Upe",
  "key42": "2ABHxt85VzTRSBMSzdZmrP5K67ZimQHQtfBeqTMjQxDi4NVJ9BGhTZhCY2aod8qKn4UAXJw6eezzkUDU1gJCQEfL",
  "key43": "5LoQcachS2a9kMuDNMUb8iPhWfyomsfW6BBESz4DAG7QcFuYyFCNzBdbb3cbFWm1LEdN8YAC4ok3VLFnsJW2ChGD",
  "key44": "5ncefQrtu9CQGW837s6FTB2w3h6mozuQFmFCSoK2BddLbYNPu5wavAxQAqEpFRD1Ch13WqiayjK12Bhgij55gk51",
  "key45": "2ZQq7SortJuoMr4BkEsqDSGAnwP1jYkeJcY4BkGv2aLyPJLCCRb42Qwn715WHymHRdoMA2nqcSwAxbuozLJnGQak"
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
