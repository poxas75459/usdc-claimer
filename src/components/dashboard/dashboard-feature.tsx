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
    "5cg55zN1EpfuMQRzUenG9AwwRfNhQhe7FHcbktcWxP82fJy327Bqc24MAPUHiRncsKmtnS184VQZUhipq8qs56mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTbWes5urqTupaLmCHEVqdoA1UPY22aDjGwEaTtGuJRjvtoffoUJLRf3Y7F3u67SfSZNhuKvEtNVxYA1EfFtD3C",
  "key1": "4Xjgbw4b1gKWJ3HRxAfTSQHhVKWZ7SAJodqeBp4wEbGAmrZLev2ieZ1rUFJ5aXdrd7f57CKxCDqJsmT4JSiEWpDH",
  "key2": "5twsuonM3r7TcF4niuEhQ8a2NXKa1fiUTR9FpXL8DWCnZgYAR5eBA5a62TpkXv9xfuJnWiVSyAyyTfahyzG57yhM",
  "key3": "4KYQ2xTgrSRNnPmgWvhdRJuvJgsvztJizJmrcwD6DRp8wSxL5QYDe3zn7fKgoXVohDQDKchYWXdRqPEikpddWUUd",
  "key4": "2YaAzwmuQkDxDHCKLw444tCq3mSVDZQ4ySc6ygdBToVQEsoYKNKTJBhBiERYxrdvMfacp7WyNcX26dLi8nmzNiDW",
  "key5": "3BVB1XEPByQ1yjY7HN3yDFCXBfMWNeLfEhgC6JFzDQUcq4KiQ2suLeUFyuuRbxQcjqhWhwSetAq76cdgioS3yFfn",
  "key6": "22K4BKfUMRdeifswrwhgsiXqr9VCMu9NmcKrc4EzrXms78qDTYVCHYjbsr23cxjHJtZzHUZUt9rGcH2aAZwdv9BK",
  "key7": "XMC5VLbG8ZzBaqt3yerFbZdmxXm4iqhjs7hRVU9snPN9bBXKquzsWwM4jgygPj3kYdtkoEjbuhJjfBG1jdeX7r3",
  "key8": "5NbNMRYc7kwzihQhx5ecmqdXYGkx45tAKU6GJoVSfXFgrmHp1DdErFKRBcFk2obMCVL6bbZya4U5D4P1YKHVHXZS",
  "key9": "27Wzw5vUyjEVB1FGEsZxRGZC3m7UmbsspCFBWHjcMiBXRb6KCTh9qtEaSUhre48apKpEbxKmWJbGNrxXyQiv3gnj",
  "key10": "4THJraCxJNbC59B77Dv1zNJucdBr2g3buQJC7Yk7xvtWWwtePKSBLYFtrtMNSZ6bSgqGaePCnWraJgynz9HeBVo5",
  "key11": "4LazudoojkaBXeQ5c4bgbPiLpK2PMXusD6pggGHjYofbCopQRYtZLeB2A6vw9xTzn2QQw8fVs92Uefg5FZa9pZXY",
  "key12": "5Kd1uJizq7nEAwcpBvaX9nKCXTpgbvTffDeJqLXotWfL9qUtwJuovE5JQVLrAVuFQs7jL4TW71aRoQae9J9qHYMS",
  "key13": "2VbxeYBwLNCmHMAT8ySVzshx8YxevkM4pV42NoSK4tTb5rSYELBdKtELF2XXZRQ77FrALFqzH8W9VMM9Rf8fimHK",
  "key14": "6pSg6C6E9P4X1vwUEpnr7Dwf4ccyi9TcubPpaDcH7AQcn35fUUduMPYMUruLxG7BV8fobAhckgvTMwkwjZsUM7j",
  "key15": "3Vc93EseRBxGCxHtX3jNzzUkmvD6nbFcLYqcYgX6o8XyMXBAy6Hi4KnmCFkfp9vCFYaufwcM3WZCkk2RLYzo8oJA",
  "key16": "L7HNzRfBRMBj2Hh6c7f9DUAnetdCeDzboHnmY7hP6mUjD9KAXokutC9Mkv2sLLVjPeQGpuEDu9d6YHUs43SaegK",
  "key17": "5WvPhELBXtfeEJn7zqEvoc6QhWiEBpu3HZ8NTDBwLU5e5MWE3yhhASiwMM7DUjFy5KbECEjwABag8xWAigB21i7",
  "key18": "hWokkqHKjQrBwqr7Jf1SbJzjS5WaaF3osR92doRcrFS4VKjYMd1yP52V9SaN8gNampsarkpPgr3QU88d6pftjUe",
  "key19": "2LJnYUkzX9w4MoK8uh2rpUyKMWeABaVArg1Q9bihj4tmcbbxN9CKA3Hvd8Ph7m7zgdukVZ4zDiWKkTcxc1Z28shv",
  "key20": "3ei7xLXmg46dg347ssej5Gqvd8yLqRcqQx79ftuKKLPQo4TpiHVkfrgUqHBPu1tUbMAuLuao98mMdsCYH7zjkddG",
  "key21": "z5RHVGMfAFQ9uBWhrJTKQ5Ptj3rBvhAypNyZjKnptsohazgKnNdgXjJftjLF9Whd1kxC7dmboXLC1TdUYFsr1QY",
  "key22": "47KJYB3J9y7XuykTVNgDtd6q8o6VoqUT74MrZ6VuxJvdaSs7ff4BGtofHqBdmesEE7ymhvaKjbU2orB6Z3QhcKvT",
  "key23": "pg7kSNYPqbgUg2Wvdc8oeSJuGjBWeyzUZrZVDzcbpLSqPoa7FDuqB28LK6WLhUos24uxSpgsgq4LfWsfuzHJjoQ",
  "key24": "urhKTygVh4WZwJJvcTbqEfG2W2Hv2eLXEtaYKCWZHMGskibYh5G6fWCMNaa8pTU6nBe2RjDYwgX5xL8h3BWoppo",
  "key25": "YZw8oMNJShmH2L5zp86TvfaF6Yr4emUWu7ZSm1jD4r714BrKgvDbWeebACy6xJJJSNLThTTZNc5iUEXFdUfuEG9",
  "key26": "3YaRZnWHsBxYhELCMu99shm1V9zAX47VGhLUTPoRbzRhRRQttD1JpREceuGrjTetXgFkc2afonmdZYn43eHJvvr3",
  "key27": "GPgQEJJWTh2oGgU4vW7SPouegHemvWvbYkuTi5HHQW4KtgL9sStMMab5tGoFRLkiU939jYzuXnok7omfozbkfDK",
  "key28": "sRpB9AVbH1fzBgBRpmvAQN5hhfH1hVrXYSTjibixWrNWuvbXAAPkktn8kM49493qSp2FMdS4pD1guzki1Axy4Zt",
  "key29": "hV1hKDycV4bTgvBxQwBKbzxmm9kAoYLkAFv3AjtvBuVpgqKsyVjJJPpKXmqQ4r29nHJHHFg4W3oQCZLfRA8aA9G",
  "key30": "4XVzBezQ4KfA7HMoVwRmtu1SWPiybqsVX8w3TXfUYK6y4jf44Gje4ondmWvZjK1UmZkU9SyPDD6LucM9Ypt53Jm5",
  "key31": "5Syg5VmSaD27KnghNw5aTqr1ipHYW3VuBC8ApY2JFXSwwea24BaSovroKr7XHFxhib3xvkMptBVN9rMiquVUUDRx",
  "key32": "W6Qohevw1uLA2dcHP6DPdpyYRwS7PhD9gNEN3SRHz93333vNgxMXcWgJySjRH1ZTZT5NEioXXd7Lnnp4gC9GAFC",
  "key33": "BUW5KSnNKdbLi8fC4Meg2hhXVhfPf4knKvhMXWJLmkTk4tFquXjtT1ESTtFhdt7n9VEu7wpQz3wH7k48WVWQSbA",
  "key34": "36jgM5FFTTmGnFtFikW8U3uYKKPW7Erm5kNdFheBRkfTdpf6yvauxwrA67ksS9aJNDp3fNUP3dCdx5eVnvrqU6c9",
  "key35": "45rZoFCW3oroPb27dgd7BE9cZdNttx6AV8KiHjbVM6sNjq4wEEzGcK8bU4kCekTV3dWSum38xhFx1YLw5q8p7Pkb",
  "key36": "3XggJWqaBfaXjiRswrdMduS5byxN59a6r8o1tcsLKPeqFWQEHU3tjAG4mfpYwr53gEcLWyoXgBQtSLNLJtDFPbPz",
  "key37": "5KYR4iK1KXVp1zuh9vvT4b3EoNccvx8zoywqWwzaDZxe8M5AzQyam7QHtiyShQqPumxZDjk6pPVZbAS1x2xp8Qzq",
  "key38": "4BZR282PpatWqM87XEBnkNV1kYxzKPCJCysooRncSQ9X8YVavBCvKkuwZvhKzkTtRLzykscrei8ncLi3CfGyfRR2",
  "key39": "2rP6hPkaFDB7ojhPinCLP25XPM2SnSujaqUAnyzgFSFou3LBBx9NXeWiCkuwLtrafeLD8gUyT9DUUPgE5kVVB1Bc",
  "key40": "qKW5i5DzN2ajj4afQsyz2eb68w2ZKzMcNKZety2oG6EPjmFHiv7wVvYyU9pFzgU4PKrsD7tF7EtZqujRZf8f6M2",
  "key41": "qY9x5tdy4wvZFopBB4PhFsZQ2u4Lb4MMEQxx7awYRy3KscqWmUpM9ihLPi8ku6BXfdtc1BcburfoHUM9z7rVeWC",
  "key42": "4AhGisUsPmjCrvdThVN8DFukf3WjoFbwvLLVQhv6sqEHdf7SvvocigvAyCANA5wLujSLPwnqPkBZ3UEEvDsZSByB",
  "key43": "4YByPqm7JTZ1WcK4DfnpoveASCgQUP3hfWc96QsaT8J4KGDbcW3nyPifoT4LqemQc3KosfS1paKavVAFMUrPqHS6",
  "key44": "4dt63tBqUnPNGborQzK1uzQ1FoCmCtiegB8gheHwibZuhs74ZEqZdJ3BCfYUUKLRcybEvP9eLtypiVZdhaukX9qo",
  "key45": "rQQQe2pkvaDzt1pFE3nSjg2SAsvvXC9rAGFkdYk3vGihUMx555mhXaTuE5FZJkPhrnni5zEVKCakLBmGCvGv7Kg",
  "key46": "4NN61dFniGAdf46kw2m3wYsr3K61XBdV8AtwpqygX8n5Vttu5f8LwEUEaC7ifQZcpJSYhz4X8xXZaMhvDYCBBoHy"
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
