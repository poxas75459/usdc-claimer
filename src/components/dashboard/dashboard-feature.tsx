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
    "24j27rqiJ6ab195Tykco9TihkJpgUWrNyahKYiKrPvFeDA9YHf6MgWWCLtL5VGT2vQpKW51z1pshWw8BPKtyqhi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DwM7KAXKcqjDbK4oRPBbFjHgTPk2UW3Wcbzhrew4XhdvyR898hoaE6RZy4DCQkY2dYKo6mH2kKL2ugPvqq2dydV",
  "key1": "2VEgTqSE7GTwvuM4XWuZ5qvCwdprfeQ3LNMabi91Zf2zwbfmeihGNt1A3LNgg1FpnR2XCSZwnvb7ntMMR45xRpcj",
  "key2": "38p6fXjm8UiuyifTqMRHJcBNy8CwuVKSsGnvk5ciwJHfxS7eDLgb48aiiHsDJHLdZbc3cGQAfTXdmjhdND4tBXWy",
  "key3": "EtnUgAwXc7Vfhzi32k8fdAsJuHod62JDJvPyBBTvCQybTeZKZxoGcTxgmpgLYG861a6i9i1Bf9DfD622m2bQFHJ",
  "key4": "2X64iYSqZJqDZQnN4Jey28XxpfVbP3WRyjp44WuyYKaUyXSyaNPeUMhVoEq18t76xZ8pp6ge1avbRdJMevmWd8sn",
  "key5": "HKkzuss6zHtSqEWm1kiNCxxniKy6CcVt5qTY1RquMnqWKVpGWNst6jtqX58MM8HTPpwn3HpggDeCwVKuKxgwgym",
  "key6": "3DwaGCZzz93QLHAC3F2LjFSy9dTNA8pyPGpG4NvehT7o33Z7UkeKgbFRBL3dBaUs3t6YNhb48jgeUb2zPimP7yTk",
  "key7": "5JjFbNzWFSr1E8qL4gkwwX7YujofFZQmH3MyqtAtywtbxwvfn7sxBKBSCwAUCPx4jdv9S9JcH8F9wFGoJbVtE9fm",
  "key8": "3qmyMBTCVxTz6xhuKsQKRiZqAqDmcSHfF1h2aPyRqNihWPbbdYRVmQ865r5Df5iu1YKxWQks3sGgMdPA1W9tQkfB",
  "key9": "5fFSRDnaG9poEFsAgcwun8wRDhu9Z81p759xUmk9bZc6R8oDAk7mDrSRAjy8XGkYZeqVTPWEimhbpVcdEw7dcHRE",
  "key10": "Bi4h94nZEAYt4RNrYCLk2hwFkTsdqMCgcJDoq3APRYcGdCDoVrAFvwawx7R54acq8jdb3mvHovk8YK2WwmV8ucn",
  "key11": "2LxYDEyeHiucpjNQKG6mtG4KgWV6ZoRZtURQ1EgnndevnSmdpbJv2ZFERL3TDCkQcRbKRTExDZiayTSh2gLE3ypz",
  "key12": "5HgyNXi2uxxjeDCowG7o7fQGY535kxbjcmkoHVuEwvTEBr6mRcGLVvH3F97wQGB1v8F53cYk5BofXmnKPoqnwWyR",
  "key13": "HfND3bMWd3hDV9x1edSqnL2jxdWBfSAraZaMoWM91LyjHcCy2CNzxU5242JeQgjiKHJBQy3H7htW9vZ6sxMxdsT",
  "key14": "5Ydfp4fG8XcU5gxtDCg6gi9X2EiHt9ahp44rb2X4E8mKcfos1rwjuJtsuAR3SEUpaBPdSyufXrw3xTtAYvCkcNNY",
  "key15": "2BcDECyhwTFMtbDk4M93TDji2Nhp5x9GJVAEVuEvS3aAkSj4KewvNycYBttotYoMrunRtD3Le1MpRdxe48CFqPWg",
  "key16": "74R3Hyg6zoYZvraP1huSJ5KRV7pedrYGFbvVx16o2eZwvbLt9aoBaRteoMrSeZVkSfNVJhEjkroMh4faVREGBRH",
  "key17": "5pUZoUKKmvpgZLrxVXJfW5c68Uqsq58YEGjgnMRZmR79Z9dHTPz7UZqLRoVKZdLQLmFJPc6xQivQZsNpnMBsrkhK",
  "key18": "3rpGuigH2wJcL9s56RkYor4Th6PpRGnkumLxQ2x9BrLepDnCVbqseFWjvhD5y9CrevweFTt6XRdUbHw592PSV37A",
  "key19": "4Z1v8ArRMBbfAaqwdx6sHuo2JhRVhFD3NTLveZyZ2UEuPXyVMY3RMhFhWVfDzadZF71aFQby2ujApqcPXHHYdsGX",
  "key20": "2QqXEjbn8uszZ2yrYtnYAH5bzzqLEdm1kaND38A5wXZ3y5zkL8Uj1tovCgHUXMEPQtczx5T1S4J1sRiU8fzCkQL",
  "key21": "3puiaX2DNCdy2q6ZB3oUJWphymYXmDJkzxyJDv72yixnW1DwEhuhDzXPwQLMtbkbqbWDPBx8XcBUShV3MC5mH3gE",
  "key22": "3Jx3druw3wnPdQUjjr4xPuDRzs9YTmAuLp7kXJhxd6RiyUNA9K19xP3wvHSCyWDE5dMRua6SxuA76JR1i1rZb7ok",
  "key23": "62WTJazZkzBD4ZysuMc7c4jsZXojcgzCaWyBcHZu7Gge1ssgFAmevjXZjW2SfsXT2wvV7doNRLfBK13rjAUyF1op",
  "key24": "uGw7qyiAiJY4swxccieMxMr3WsDJbzgyvU7MKtLpQjj3yCb3GfkrXMMFJ4XKDQLGxXptmqgoCcVFjLK1cvXPeGg",
  "key25": "4BJXqfqNAMHUHZ2d4eVnB1jgfFcGUVm8i7opeRuvJBHF5cXMesAueCYgwscMnKLH8hqreJrPg93xgnY83k4mUJ62"
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
