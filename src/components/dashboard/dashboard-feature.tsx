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
    "3NnY9HucYE1t3pAZoSznfweG5nXG4rDPGb4SRUSBxoDXv3MVReNChFodCGYYGPZpKd3hkjdECuT3PhHpmADxZ39N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9bn1tBhs3uBSYaCkBiLVQUEmGaUkSyHLDCnjowHpv1JUq6w1ja2Z3AY6SRKYsEzRuiuMNyaD9EmDHFbTjshArk",
  "key1": "StinjmgQVEAkRTq7RfPciuMGGSVZGkWQQG5iMdYeQAYBYsZZy9TUimdkfH1xJxdGe3ejF1YsCD27vbJyei4RtBK",
  "key2": "2ybSopitgvoffZ8GQdueWmYpzMTG3U2KTsNetoohTSjWBFUdk9qudboaQHKw7GRegLowMkuDHSFjp7aDfTaJTg4y",
  "key3": "3ebaDixNEoBLurpgVnSitVpeoaDxuk3uUYVmnajshHPtuaqMPCoet4hihqf8k6Ta8VP1Fp27JMGJqWw1gJQdCbd",
  "key4": "2HtkBh266u2fK2JndRyq1HjcRVC7SD7iPV1EDXybzZtEMfvEpAkFPmPer3BaumG4MEXdqd6Vqxem2gu16yyL8PRu",
  "key5": "5VVRM72smoz9nFS98EydNz2GU7TmmcsM8tPSEN7YVbQZVLZkpKY166YT7WZPrkbdCYwCwnmzutEpWicH2ZAdjwvH",
  "key6": "rWU5B3KVYhQ7wSUUZ44ChzLb5GgT8dskpfko9dqSZErjQAzThwWV8atGeBYtCzhtmRZ22jVCcSxzRNJbrRYbjYy",
  "key7": "kKkbxX6rigxhfso6FSfyTUzF4d6ynra3YHuxbXq8NuwX6sHN571eD3RjKZiytEjFjvvtVboQ8SXKGkdtwCahFJu",
  "key8": "54Ez8Mmvw8aXo3D2JduAcHPX7T7aWEb7DDefhpzPAARrLAjDB15J8WtizZPkx1pxkEAXtu3GfmqJvENX7YwSJaFn",
  "key9": "5t2k5RwhxQYTDM18vhPS6uG3kpyLHBiwzV1cXNT6Xbx4aY5WWCxQyQj1TcBT4rbpqvYfmeSfrRudrZeQRAF88ioW",
  "key10": "3YrP39kJZfESHgrKNaS7yS9Ca1BHFs6kseeF65JwGYJgH7v5YzHn8kc6QXLjyjz7eKWq3U57thX2m2K6SXSWpfG8",
  "key11": "2ohuepoVqUUur29JeVTq8fgLnA55bY97Wt9uRZ9iyr7puc92yX22SqjrzEDahtYTzWNVyZ8CMpm8AWGeYpD12ntr",
  "key12": "3VmTB8mgZJqripcScpZA42HvYZ8rMFhFyRU1ucyUjwnAZJ9pBrNvCi6bcZ3V8vwRyDD6XyVQC869PsUb2WgaMkbt",
  "key13": "3NKFfi3zuEyBu2wrAWyHBE6HafJ42QSNyNcqG3Hyeub6EghbxMkUsQmUjnR28nTUjVmoFwo3Q9UEr9uG1yuXnEcD",
  "key14": "5hJSsamRCFs9ypLf29MHKaQY88d5NbPzcESp8kqZJyTbXQjeywiNvKeV7cY6dMQd9Mpo3PP9RhPBLc8EJ2W5gKqF",
  "key15": "2pdcGQPjQHaZK1DHnhExtwazYPwzHeJfmDTvL6NpjhjjaT9Rbj9fkhaXdyAHhJ9GthPoUEBZXaSfsbWd5NxN3eVj",
  "key16": "5tZk7SNCPxTmKZX4xpgHjDoN93JqALVoLzCEUZn2VeNYmB8wH3ZX4GnKyYpKSJxJxGj26ZT72wEszWfHqLf6YaF",
  "key17": "23yLxWrX3Po3LcKpB2Q3F3xi1FYPJEsHFeF19oUSM1vjUqNxKA8CZ9gRUqVdPac4uc7h3kAGnL2xhET68ESbue41",
  "key18": "2ZRvhUjBpDPwR8eNLuFdNsnb3e3AJbMBzDQSvRP4aDzSFcWgKdW9p2wRqPAgUyX2PHzgR5tZw4mrdVyMavWoc6wr",
  "key19": "4yQHLhTjMttiWRh39odyMLFYsT8Av6oSB58v3HxiqAHBfFCXWxSCAoLGC7s5dMuaYFiAcKhxp7zJ9DVzXTReRwtr",
  "key20": "2MBM5RiVWpU1QRx8m5o8ceySVbmMakjFksPt1zt3vwEzXyZMaZxKQ4ak1uMhYzDbCZMn9iaL2P6CAMTQSTmwNENm",
  "key21": "326B5McvcjnubYegF91E5qFMdhXLMHKwZLMb3aDXGrg6BrSNreuxXmanBwtPQbvTMwPuXd6v5YfBW85vgEXPgK8d",
  "key22": "3kSrFfaJ5w7XpCn2s7JkN19juoMALghWdKckGWmb9HwwkE9VVmzTcRYHcJGqgMySzMdSVVmksqQ8aTveFb8nxv97",
  "key23": "3Qyv68AtWzGfvgehv9W2ifwEMt1MF9gqdc2PL5Ehku1i1KrxZYPJKBFE2QC81HPxmdnhzE22jSagSotNhtCH83he",
  "key24": "L8nGc7h3Q16hzftC3WSGyXF4QLhtEAMtieMBsnAvJRdwQFdzTEVgPUSosDB5gExvvQZ5sq1NSxQGWsTKmTSmndk",
  "key25": "5vWusuXeDCQC7s4yJqgYF7YM566SHZPPnurQaTq8nFWzETah4d2Dgxrsuv5qqVMzVgW6CPkFWBqerbojj5CYR2nM",
  "key26": "3ShXhGqoEAAjpUKuaVWrVYyrpZhccurC2TSneNJfSRxkkLw4eQ4kGLnH6bB2sksf9f8awtH2Su3WCXzWpWEXdqGZ",
  "key27": "UEyfqxYFdxUJTHfrwLPCKkYa9gdJXYh9vto1bbCaUApVFC7NL2pcYsYwUMKNAPxyRMuLo5QD72ypazFCoNeMtqV",
  "key28": "44D6M2dBsKt9mPN2fLEwhgqJiXm3aG96ZnWTJXgUJY8ZtvPcE5aMvDTQa6h3cRc7t5rajARP79btVx9Ee2ttBuWZ",
  "key29": "5nYkDyRxnLCZE8YnL3tnYNzpy8h8Juxa2y3FNiM41BtrNt21673BBBs589SLLU63ogwocs8PVLHC1wruZZoSUYof",
  "key30": "4MnAYkXxjP7oPZXwQbzXEin4hoPoqTHukdF1YukdWwqfU8T9Kkp5ZyVYnWDmQbwH9hXorUvATQ1xpAyHuzhjNaqv",
  "key31": "2RJYa72P7HKHc8x7Eg786GgMTJ57nQvw9J77sM4uKgkXfBgfLyHqPUQTn75U1QQQX3u3jdiaEusA5Q4fY4SqU2Bg",
  "key32": "2cKvyrb8k9GMiLyvhAWyrBzbNsQbgvp2u59obovdGfRYoKz34gEx3WSB3gtMNMp9d335KdGVZRME2pXjpm1zZVPr",
  "key33": "5c9iW6V3teUVDwNV8gkDApSWVJvP8mswHVCFREjLyJot5kpX324yq4S1VFbH34RDeR1z9AmNdGGvAcWadcFqF2Di",
  "key34": "3FdA1c1s65qYj534YkXvLUM8ojjpci2LR8m8nRn92gUaoBsUs4oVWEL3pJSMnYLCy4zezPhcYBVvrEi1zXjEoWsM",
  "key35": "5eXGX5u4XCFGNa7qZVKSShgxG5NfZAb1aJoX6YjPxPPd5fYu4w5PqvbEobhS9TGCpGsiXqEzVi7SJ3FHookymMLE",
  "key36": "3NnPNELeqKB5x3HgnGrnsqCDf4z26eL4nahrqcPdFF7GaZ8nGwo6xY9bRvudxuSYVdz3xFd3zME3dcTR3dLsdgQZ",
  "key37": "3SLEyqwFqmDQYA8VKTG4K2ve7761TnZehjsmGygcYViWop8GxTvNkZHRhiJjXyyQFpXg3WGzN7Kf3vL2rLSas53Z",
  "key38": "5kWtVgRhhm21mCj32fofvsxPHXLLqSuDJ54W842j6Bf8m1LJmmT5p4537q2oXRNS6fRgbzSzd6t3CXKj4TwfvUt3",
  "key39": "3Eachca1FZxcktHBaNZSKnEBv2Jnuh4SjZfnxpWmWAnCtjkBjuATwk5Y1cWcnyq7Nv9Zujegk77qdKMym2TqQoQ4",
  "key40": "5vH5GatcxaMePvgKSXqToNzN54Gx2QBrSGxwWz2iNHeKZGMtxtH8Ym84tzMv2VtULegnH2miJY3o2ZJR9XuiTNRu",
  "key41": "2pmx3rtrM3Fw9onqT6C5RPNxT3TcAXPdP9v13gUdGAjyYq6Ng72xAFFpR7pfTFKhskfQYMdUZTbU7vDHYqUu8qec",
  "key42": "83BMWuTc25HWGSowH2bH9PeDpgD5fq9YaqsTb7Uq4U3DXefMYwUig2ykLpFs8ycJAAQdiUw9Aik1fZqsB1aU7uG"
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
