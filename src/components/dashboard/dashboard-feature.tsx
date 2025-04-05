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
    "3Dt58rbqhEdYYEyjXzHW8FCBJrpuBSj464HGdZjx4qARaLWL47ygmNxsiSZpkNk1sY1HoSh4gRYLyzY2m9Jc2pic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWMbZ7VNC2bLj23hRvA25hY9tm4EM3YJPJxPNbW7fUgwNEvx8Q8TQDqTXYLfVH56NXqXw82EteQYPDwEBCrL6ca",
  "key1": "5HJMAecXzsq3StkhVFabMppjGP36tUKZxR241bGbRVFYgxAWhajHKSKBaDCAVPw297KPu87bHEWHRfSgZk52AfX3",
  "key2": "4aSVze9ULsHbm9iJatY2r6CuwuxsKQgfs1hT5zovixV4n7kzAivLe7MVw47c9VqZdsGNGdjKoePJgeyToYzqa2Z7",
  "key3": "mB8HZuRtHP4RSckoHqfTV37d6C1SxSCmTzSKpYU3xS7Ary92LchCFv21GtcsG8eBs3bFoptu4d6wAo4XpuxCgnA",
  "key4": "2hWFLmZ27a8cXVfUtkQnbhhbQvtWmBfwtMLt5aDaVuXmPfoMWnXwFopxfupjYkoX5xxz2LdS8UzmttERyv33iYQc",
  "key5": "3hmyieNh6wVEHSP6se4axgvtkQ6ffNc1ZkbY29Uf1d9xGNc1NBy2QteUWWiSDfDZfKWHqsnYpYa55fFTPfvDXFPA",
  "key6": "5arCGhNYCJJBiC7QmmVB3fj7Jt1GKr8TVFvvvCbMBgf6KfNCcVRzG1syXVpbm6pwpDs92EciNEY5QoP9SWUqxeDD",
  "key7": "4TwoGjVgh9dVCo1ZkHQkgzkteTD2bDwQ85bbyGfbp9gqosMTQ7tdH7mNDzvkEbxDzUWmjGX7mGuCUn9jmDYimEzF",
  "key8": "2L1Wgm9twEqRNXnX5htx3TA52hSFuBkMBdh8T7Aa8AWdAFKHFnEW2HcSNWvBRwXqBcgF2mTzHXtY2eRXCtPvRBBh",
  "key9": "2jYJBKb6HkYh6njAzfECirZciKYMakLYwL8znopk3fcPhwexdzbyh7XFCLESQRHJAsRpAsmMrw9hTmwfxQFKSnzr",
  "key10": "4ZDARzt8WJwx6aVJ8ZZ9me6V97za7mFLjcoiJgUik4s592RTsJpkvjvWsWR2eE9qSm5aCS5F5s3XYHh5N6DiTR3s",
  "key11": "xrShWYUUr2ZdrLbq71MZuDZCc4ZUk9zYr9bhKWyrJDxi8KnHbtDXmz3d66Wq5bonhZTVu26shQgaEpfCSSLU4qC",
  "key12": "3cnkbP1odEBrthza24kQNmqJ1B7gXQRoEq4KymMNhcMrahRES6GRRQrP2xB7JndMyxUYgdWX39gp1t1gWeg3Q6Wp",
  "key13": "5uN6tayHuCo2GXxCcRt7UCnZg1rWTQpfCP3Vf8pr1ugLW3y3J1ZN724k8uN5APe13JENZV9Lr8rj8kSBbCjbJHGx",
  "key14": "kVu2LNLHE8NDvwZ9iMkDcoryCGMwt9E3aFoN1tzXsUKVAiut1gc6sZWjb4n4TFNUBsAczitGL9Z5teVdV587UFe",
  "key15": "YxfcozVbgqhk9E5SjqCpGJhDgTgs82qXgNFyisLSQgfjVt73gDKyBq3dEUxEuCATqZXcjesCEwJVEvqqQCh5HKE",
  "key16": "4M5iWVaUTGRNTeqp8ENdUd63aXZ4PLpef82si5HqcPGBDDgg43VCXuBaFJTERHiYpaLQPngp5v6K4YwJAvaEckWN",
  "key17": "66ChkoSLn4DXRtqXYCuUT8rTNdPyjMSh4hmU79bRFXbfgaiLMKJimSMiNhCA3a2hE5RYEgbLg5m1937aWW22cpWx",
  "key18": "3QTomp2nQv4FinrFBvVFQzAXkVuwjNRx4kLpGFhTRceEyjySedQvdXkv9i8aVsJ1qQagfop4pzqNFVxD7utNyP65",
  "key19": "5P5vk9gThPHQGjxMFtU2WyrWpmVsk7jnY8QsfiJ81b9aF5QpPZM2MCEyZW58qbZ5JvjXKGQf1gSdbYAYQDuEkYbo",
  "key20": "QdBjr7jd5htzabJFw9vUVLnEAseAEgjaFnfGggSCNnP3Ld1XPiNUsVBH3N2geG3gjwVMxHLKYKoN4VyCTbCr4o4",
  "key21": "4UNJP2VTMmCzoZ7wDACTY4nADyPnzdfaaAHDM1SZfeb2soaMAtHAUUFiXZP5hwbs88AUqPm1UJ3ABsMtp5FzAc6u",
  "key22": "3M4dSDSPRmekxZ14TRQ99eZgoFf8nrgWbsQjWUmNisCo32t4DJoDPDeMA8jDgYA4fmkhgka6gAzcQTCyNrK5fihU",
  "key23": "KeoY5EhqoDTDkP3tDXLzJ1Jm2FKcNirWcXcrQqpzGLiWRLsGoe6WrurYwWzGfggTuAUrVXNcocNnctTsxWigRML",
  "key24": "454fD8upyrZE6RpQuqQpXnbF6kfx7ryxsKBz6CQFoDXfYBUZGuoqjod2iEZsbXPM6oVtpTpqNBHQifFdxN2im2Fy",
  "key25": "yrYB3WvYhDDy2hPM7FSFsytzxAxDHpqErFkL3BnR83NkU6nA6w6QooBjLVwbscK45wefC4hyDWkKzUcNnbPcfYJ",
  "key26": "URXiJqEk2brkaAYFY88JJrGX2VTjH6boau3VhLuWys3K6GBPEmphEDjknFUMhR9EqXR3ZPRgSpR42ze7fFfiGtV",
  "key27": "5U5HjEmcjjUzJsYAX1iV6uSM8YaYcs3h8YhjLvw6yuyRUGb4c8zsoxsAEXVM5nYxDVVA9Gy6diTBm4wxDBCXDLAY",
  "key28": "zgctcV726jVdLuiUrXucz1ydHDMMXwirf1wZP3QXVFU1HkSAq4Zsh9hAaQZ6eRR1Y564Tv9LAeiGM5okTPbJ2yX",
  "key29": "4Nm8ehF6y51C2oswxtxuJHcopYsGrzVWfhrFDuP2gGHAME3TgCbzk6AEbCAHSUAPQLH9YhJi6DEJU1xR3Z6uLUoA",
  "key30": "2wmJCD5uF4WeWy46vE5bJmt2Wv5QQ14d3nbpiFsN2VaXMxv8JPW4kGagbKUjUTRderCjVf8U6HqytCZjgwHh3drv",
  "key31": "34pAEgtiFZjbUsd3bTVc1cgELmQ54FfY7kcBQw6dpLw3vPyHGNx9ExTG3vPuXwwAGUARq29vEAVXsCtrEFhBuXas",
  "key32": "8Q9XuZuwpoYhFYiL1rsMWj2HoXSmKSNG4E1DM2vEwSJwpdrnwTuMcpTfHVnnF4kn1hHNGyLX5xq5SbesJmxKtk8",
  "key33": "34ytodusupwQYkzniFc1VDoiN2WD3nGJ8vvrgoTEsS6aA1GkoSPt9AUQeoB4qssM5dB5rzyesy44HRHKc6yfFGiU",
  "key34": "4tJT3UpDxrCek51gL7XWocVBo49RhBi5MtvFYMzoHvZsAt2rBjMbMvrnGgHxmQqHHWn1aQgaPLVeEm5PyzrhoT46",
  "key35": "2t2evptc3mNFpTQq61sjmxBKdYMy2Y1Rc8WvXrxnWuAkqSqTQwBXC3byegyHQXkpqL1sjdDn5q8qXSZsPYw27T5g",
  "key36": "QbSF3wC7zCDQTTZkbrYEH1GtAmMsTWNbEF5heFqHiSM4Kpyd6w2j9QBq6RgCRP3kuQRJLGjpbte2ip2ZDFXfB3S",
  "key37": "335mVxdWYp6ejLvACJmha2wSS1v1JYwFjBhaAj8giBbaBLgGywSnzcqSv5VpieXx182A787YzNoHNBaDUTF2CPAV"
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
