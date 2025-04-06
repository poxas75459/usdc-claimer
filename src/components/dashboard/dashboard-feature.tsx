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
    "4dTNWBBF2BQBjRDnoHLgxKkHNq85eFDgb8ZoBVstBaFFFLbzav4ToQYRnm5fjsaaEG1WoDysJgRwd9E54yfs4TZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z9NEmkfZVvdyXYUTaFbb4XNPr3vbCSHC5yRctwGKQZVd79Qh1Tb71nJRk7iLhJe6cgwyxtUVnVVJHrbJGYsDcZ4",
  "key1": "4QyUS9Hkjq961rhYWYwFVQnaimcQzKiYCDQZ5nCTCtRAaygiggYeqA4gQ36R9YnpX7uVd7NBHnmZThFBeHYkRkVh",
  "key2": "5gn1mfwWECDULH1jA94GEJhjXRMSe8ucYoyMJfAxjFZUh1XeqECMagJfcMGEFp3zvzMB6r8sVLPq5v22S3Dfy3eA",
  "key3": "5UusXJt7BDMyVk5QrXeVScp9vba4w5gtHKqEzWy574f4mDhiN1cToJTJJ2G5zKTqHsPJ5KV7sesip4xiiVHUds1m",
  "key4": "3SC8D4P81tBPwxeT5deok5shsGoGwXAAjBemVnBUYbWHHCvWynwmqLv4kAoPNbhLUz14CiJYW6raLtPLGvwXCkxJ",
  "key5": "3bew1VGKDk5aDsfmWD4L7y3S6sS5ssAhWA9uFVAVoRFLTdvFR1ZkgVdRFNEZe2ffKSPwfmsqtP2Gyc2MzrvdE8fi",
  "key6": "5CfbYxgrM18dgGbM3wQ8gh2Bu8iGfgXDjAF63nEVtjAt1B8fZcmoF7v6EctXjQHP5heow3tHshdunBv2zv5RBysD",
  "key7": "pdwzHv3srecM7ogWXyQMSfAJ41fUaUCbSXL9pQFk48L8q6GC5a4LCcYohxVgwMDdg6tBfKtjG7tdL1jRLKvixc3",
  "key8": "2HKi2ckUE6kqZRgfDpCFU7Xbw6fUR9DbfAHE1MdKxP9jgWjfx4TsfS4pBzufDTDprKFusoHXQPVhaaVKu56RhVKF",
  "key9": "4jqbEeaUMA8WM3ay6EMXLgDaSXKjBqj2nvGxPWQpYnxvqcMXhXx9mRJzTe3rxbaX6z1awkh9c5rEbvZntaVfBayj",
  "key10": "2P3vEtHfF1tPwCGnc8eyFsQ8tt6psL3ckRkn19Rgo4deXK3PJXAZu6LsQCegLzqoCQtnM7qjeLSoyrfqz1Jonnw3",
  "key11": "daBAQ3jybpsFBUD4pDsJNNR7sm7hHVh2TSBmoj6UW6bRejXKh9AS1FC6ePFkvafL8vdg24rfP2jryXrrpxqc14E",
  "key12": "5iJJ7nzc8f6UMPYW6hEwYFYWkz5uSCPsgjonLE3kYgtgnb7DmmxFLx7dTKJhUzvhSq47U7LPrAjFJvaYtLq12wvB",
  "key13": "3AUekebdoDQP59Wt7Y3dLsLv7DGqe8AtMHpYGQaUk181yoxzoXiuHu5CPXNRDeqLekZgCEoWWY5XeSb566aXqXLV",
  "key14": "5KuiakuqrGk2yFhcg2mu7vvmdCyoJeuSR3sPUm5Ptnx3MK9CRVzgM9pbnJXQWrXQdQHB7UPYNsqTLEaFVdHkkgMA",
  "key15": "5doV4pGAREQv3Efszo2WeHYiNhtKFyhTtpceGZEhiDUoYtBbZvjxeEYQBxHeveZYWxSsLviP41HCb1foHNGxpgm7",
  "key16": "56AyiY6BaktNwkeDBeGRng5hvK2sQuJjtaHQb3aW1FQPGWRWvWZt78TqDd6U5wQKaL9M6K6FqzHSCTA7uVzqLQTq",
  "key17": "531LN8mysf6pxV8MHH4UoUTEukPM22VB2YSHPhehF5HwJJ61H6NLnJ6zVgRV5XRW3Rc1yi7CC8i7obZ4rKgMTAnh",
  "key18": "5RfE8YriTfV2vFPaFsfJ7SPEf4wKpqo5LhmjuK1PxwRoUSPACnRkXGPL2wHSX82qTqQVDB34DtZ8NCWLcuTGDLAZ",
  "key19": "3ZcwadLhiK4A81GQSAoEwBGP4M8fe5ZakdTDoHBYLpaDa8MekES6pPiGHv9qrEDv9YTvjSM9M1t8bdc71PJouMU",
  "key20": "4h9VESRxAUjiDNv2KaQaNaUsc7USHkGnhXRvNoGjZY5HBxQkjtLPCtG5b6fCNA6ummSkRv7nafksaX4XW9D9CadT",
  "key21": "5XwfjArLDBCrj34Zs6zRt8SYroH3aFKMfEt5XV4DFqBBHEmVfF2zY8GVL4LnHqLYnWDUKVAfxkT1CKQQ7fmdn1ty",
  "key22": "5AaGsu3efYFWYZemxDiQjhyrwsyfFjxarJeMtGnHgu8Yy1AmggAwmDX4jnHwXMCu1mVqmmx7FHqsiEzLpcMaWFgo",
  "key23": "2q1HxmjPBwdT7xKdCtjLbcqr8MpFKJu8DnXQgGs4Dy4KgkJjnudXbtuFLeJZMPRX1neke5RgLHCWSsUpEoKvmuxb",
  "key24": "4QkyMELp9W7gdtczc3oHma1Vk34rDTc6sN1hTdVBtTm4quiqxSfvWhxLnYABYFrDGuK4CGUrmoLHDobvaSuPC3JB",
  "key25": "3ZcVcJ3kysjKuD7gDNkXUpiN85CDZYvJhGHYvZL6nvoufNRAmtW4QjPDgsDiwLx54Dx4SRTAuKCib6Vp2bQHZvpg"
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
