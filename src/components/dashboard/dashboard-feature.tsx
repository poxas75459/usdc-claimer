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
    "3vacxiLQk9jq2rPLRoavkWjPA7sMC1zpuSABCHsTPBBNqwK6Kcip7sRu8VGPHyeqvRseciUBB2ndc7C87PLcFP2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2smhnx9gVtdHBwEoqcyjw7s9yhv6zQysapwiHBXb8wSmM6KTkbeHrbd4YEvoR5cHB4iySc8uvY8Xnu9vP8vrTvZa",
  "key1": "3t1puX3JeG3DPA4L8vH6J8UAwSq3tKWdBw3c6W3BEWrnESB41AgJcV5MjiDWsnoCGPJ6i5EeiWpcVapYCSYEzVXa",
  "key2": "5rnoih6Ac4we31tV46Wm3YyrAALhSrrZ19NA85qPWwEs6Tunnn2WfxHzAfAiZXFpv6jgNnAYxuNJgZybnnphQdSM",
  "key3": "2MEFyK1cmscQEgtGGcbVSj1Y2uvMcgdq7Wmtoe31bhVNwge9oLJ5M7BaauXbFKYi5GoNRt6ZPnh5JbJ8UcC4mgJv",
  "key4": "5fSSpxup1eD2sDLDiTCufkxWNmkQ6NgENgM9wJ38qaqtVWuEyicPJwdpPeDfybWmA6PaRpZhZcixoNaKH8uNM8rB",
  "key5": "38dNmfzdreZscgVf8LtG4M1GKF5oky5R6bt1iK8mWNNR5nfZJozJcHzZMZEECQXzScSPpYJNcLs799hNkz5AxS16",
  "key6": "39dHpQpGgw2xnUTnCqQqMNY1CLtnajZgNzTc5SBATAcWv9G9bchTNxthvbFVjJbuGcX6Az6xV1bxHSroBSn3fkdL",
  "key7": "2vB331ADuy5WeFeJQU3wWEN74Su4ZY84tJyAEKUvsHHH3gM29KnLEUZ5GmCU8aHVLqE7RZAmH1oo1RQC8gLrV6ZT",
  "key8": "3hUzw1bYRyLHBAiPKBonmL32zx89w6s31ipyFY7ZoPMNGkjQGYBpTDBGy4nCX27R5mzm3zkwaXjaoCFvABCfAb2",
  "key9": "5m8YM72SitGYbP3rWQA17mJPthPpWA6Vvzz2H2rFjH6sWC9tKUaV5CyK6bTwnzTy8btJRjAZZfWAytkh3KBn3Bh7",
  "key10": "5G5v2EGVn8LEWNPzyX9bRZrFsZ1oCWyckfyrw3Dym5Sz6k3YoYsaQdZZtMvD32nbMMvjcmH2BL3PxDewQqqWSXNQ",
  "key11": "3sUmz1y9WUyGXHcNviPiHE4KXsYZYo4wHmCRQ5z56z68RHXZr7Uu2kcq8JmQGKPozSLs9oa5KYvQF85kkvzvY9jM",
  "key12": "4Sq6xAaQiszTyJYd9T7CZofLAM6a39ppxfs9razBSc8BTzxivnzhQ5c3EN3AVU1H2NYwJzyc9frHjr6ZfxoUB5Kh",
  "key13": "43dx78D9wMYtFQdP5o3Q6bhB1m9h9DnyXXGQ3y1a4mLw3XZCvkbjPm9wtCKi1CrLNxSvjaBuPzDTyeYg8EvqFbTj",
  "key14": "4FLZMQaxKqBmmFPHi9KUMDV9rJmysNNDjWnkpBRePrNfShoRdXMRNwQUssKesvkrnfHuNzwuuaEdG8mj1Dch7Uui",
  "key15": "xcNhrET4YcN158Xu5rKiEokCQJWey4BKb55qck6wtepNAL3B4yG7Z74JJAWPsbSunEynYQyR5Taj7PjUPTRAWPW",
  "key16": "4fnJuZ33b5yoAwmi4Urf1CCsY3iQcJHZppQMX4hxLrXf9hZc3EtokzYjS95o2a7rpgJWrVYWBHnBoYeQNDN7cAMR",
  "key17": "4kehH9qeBns9LCcwvuArVCYx16duVhuDrDi5MN4rKgGsi9L2JvkTGFJw2YrvJ6g58U3uPgTzXWKdaUKHtBtx9YAJ",
  "key18": "2NUm7iZaFoSRoCeQxeHbfPS6KYBFdNVb1mWGauGmyAZP2mPFiFsXM2G3ncRjAwMVZ2ydmg7fEGrfjgE5NCCtuKd3",
  "key19": "4ZeXygBmxSMDeZQBjxhEyv1PaSu3XzWe4mhbZyfxUneCHHYv5kC9ymkyXWxCowcXQgpQaSYwLURq1GACfLSvAAjy",
  "key20": "aht4fK3MTpw6eC2Lrx5xzqCaYgm7eZ2Ebr6JpyzcbNzwUyZJYL1beqf8rCvi9mpw3CnCdkiYGKW3LfMGvdPsh8B",
  "key21": "2yhz3hKds2Nt1dwi6KENq17NkeHveDVG2nz7K6oJagCf65RDfWxFf15E6wTdadRvmawCisT87qmw83hjUHre4m9N",
  "key22": "3ciRKPdVB2bf85FPEtkpPf2WXdF514RTPejDa3d8UFfMuA3idJ2fQgPN5dMCXbHTeMEJBHjJceRPqBAYLD59utbU",
  "key23": "aaXEktbormYDo9q7iAEVC1BFTRKTCAYtCWE8YhHQ8YFxsHHBnNq46YsAMFQjfYe5LdDGntjHMRYfNkkmfp5rHsb",
  "key24": "3uGXmc9FUC1GR42454CWwWk8TPgZ5d8uwP7dHqX9Ft1oCknkpUh2VKGfwFw2PgocNmsAp2ZpQ2YZHH2LS6R9hAW5",
  "key25": "5X585iLUUyayWmmpw2xFLeJbHxgPoVLrJx9RRqRHF4vcJ8QjKpN7nCR5dATajfmG5Bv13eJCguo13pXi4FLhL8Vt",
  "key26": "5cSvcbBDDAV5gMd6PGLFYP25kguibEdSCYsA34JkCb274hj6J8BRLwXZdSdFPoGBcmBQEXF7ndqg8dF2kPtxga9w",
  "key27": "4bEbW48WgLPfJBdAnSKUT4S4jXsVYsBHZCkAwdujqaMd5WDnWnRiQFCJSu9QE74VSjmSkrnL5S8VTk5qz7is2Cj7",
  "key28": "526dEUCcc2rPKFFL9SzoSsUboA3iHRGocBksyzoLdKAYxcFqM5c1YtbB8h4fMWqyNUkRZHRJdKk2NqYD6oXuavw3",
  "key29": "49Sw3ccLnm8NDKzsvuTE8x9e8qeMefzpLqzmmTZEUC5XS2x5ZG9WvGXfTpN59SH7njhFt1a4GDax1khjryGZARpQ",
  "key30": "2bHzfRUJVVo3Z2hfpXAjboU7nCJQARUnEA4fLeFX8i9epQhPn5itVtEDuDXbS59DcvsGBD7iYMLhiQobqquGkyyJ",
  "key31": "2jKBDkY2ARkfcPFLNd7eGQWRNpFnTRDAzQfL4BcEFoYJRqT7AtxDsdqdm328NS1gxqQEK9YqG7jL2wjCPjf4z7nM",
  "key32": "3YtQZ1c3Rmt8WS3hx9frDXKp8HuJULL9n15rw9eUL2D2Ztf9ZWhuMb2wMPoD7cZg9ch3M16FfKrVxjn5Pp6XPc5h",
  "key33": "4woSrhsQFcxs692nfG4mBLhFBQApcLHkYvmeREYjgjtgEUQAaYHqF9CGhGeXBYmLgEe8kGemx6X1A2vzTUQRtRiA",
  "key34": "3wuL9tq1hKxMKjCe9HwRMkb92htqihKTS4mwe7P1cmQgqMRj496HwYb7Pr8M4F97ktc4RzXCHxXguXjgamgjGCGa",
  "key35": "ZSh5ZMc6HLnQ5cPvCMQcPwtUn3HqtcqRSBWrGgMpwKQ3aMnTMzWZpFmaRs9CKQUuzSZBFEQq4oGbprmGVQ9XkjV",
  "key36": "2DhTuAJHJhCu7KjQ8zDpiZnrxarQGEdE5eeyjuBtXwEQ9bNzv1ue3gvCzf6ZiBNoREEqiT3MkavtksmZX6w4sLde",
  "key37": "3UJwzTuyFQSYZ3vo47oJPQEGDNJ25DkrevwkLMBQXZn43u5tS99tnTx1qonCcRkentQJ2BA6Ffo8wwUef2SL8foB",
  "key38": "42qtiyuQKUxJCJJphFCuAhQv4gs1vxTQkZ7sv61bHfhdnPMfTAKAsw2kUfWLBLLmMvevCGqRjmtQopC4rPd3aVJT",
  "key39": "2Cs33KoMQgnxEmW22giF6WTAPCKboDLgQacDbWugoQZEPLh7VqVMF3J73bmv7iGkSLFxrwmgVnEnzhMk8ks9VktJ",
  "key40": "uoJ7TqWcLkQsGQrWLcgPZeF9k7ik4vpCHjtnBU5vXJPNa9886mmK9eu41v7UiUaiMGA8aCvVKSYbDp4ndfCDbZ1",
  "key41": "2yAjX5jP18usdJCEFuKurLLhFo8mpWoJhL74SR5QUi3iqJbV7QRdgyBoHLvWNKFAHC4y2jE7ePZ1PkHko6Kc3ck6"
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
