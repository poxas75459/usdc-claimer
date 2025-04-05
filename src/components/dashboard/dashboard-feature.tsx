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
    "dvYpzNAqgvT5UQ7Zyq2bUYrLbwudfTSGJwsv8pKDq6gwc3ZFhH7ZV9wddte9xVdkfdESvkLKcMFUqtq9YM9hPzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tuXECm16UowGjXvWW3AFNmjC3VBMERMhWYmtu6Z38xGk8usddpg2NcnELiFDpxJ7AjT92j5y7bXzKSBk9P6xyFg",
  "key1": "3QNV6W9JedRE1XDEsRnzyZaeQvAmtt6rxJQun3ymCNGQ7jtAJ6DiSUkwgb9boyMhUtTZhDaC1DQoFMsr9fGvrX1u",
  "key2": "2fCq22i7Kh5czLSs1EBSmY28Wvn7tupSLuRzZr4gpdt848wmMn6JE88P3oQNyZRz5NUjrpUFzRHT5ioMdbwuiWa1",
  "key3": "hDFpsn3DKBU8uyqDLD6NUyqCvF19DkqxWhJbeBQ7in3AfmqiKPnEKaf4ExmfsExMFmrrsiRRaS3Ho29xJdwNvzi",
  "key4": "2ord7i86GgLqpNTSxBQd4ioeL33pyUqCwo1YwEaRgLwcB3hTQ1nPp4FeWEis3qsCKqxLLvE3z2ygQjNwyuanKhSf",
  "key5": "yLGXGNN439pYmm2sWKKpuRQN9bMC4vm5mD5oyRTvsJao4SVDshCqXMGB8Mw4aoUVk3mPNRyj7gr3PrYS1aj5j9K",
  "key6": "3PsDLqE6u5tcB1Hh3VtpuVHokT68X8rVzA62kocLChTbVLLFF6faDHMXoKtiGMXLDVF972tHcpj81esrTABPgyHx",
  "key7": "4iLhu5Mjrz1NX6BHL3zVeCLwR7uXg6brAXATxenbRre21tVnKbrGvZuu9njjtrsBjMw2Nw1Et1TC98dPU7S1Sqdz",
  "key8": "5WMMBTa1jNQYMtoPDex7mR8mwwxWt9WrbDbyVzxKEQsKZYTK33e3zeAGMMLz92ctL1iVkTctg3hmDtDD6Tv1zTjB",
  "key9": "3K4nXGtG4Ub4cHRfTDZYJPu9eu8HhpECMHZ8RcNi3uPioaN3moSozW622o9cFdx1u5xhjpPiHQjmonMynLeikKEH",
  "key10": "eFE7w8dGyjCs7QjjrC5rwSFGdhZdkaqx482K7kemBSHLjGhd9MR1PUHjj2Wd26U7CdeGwpszPL9y3BeZS6uSy9i",
  "key11": "47RtzPingV6yAAGAnaFt6bLtFY2cKFYRmEdtjYQiBqb2ZJh6pNgTSSeL46UucKDQhuNsxzpxQdUWpihi1hvMDQF5",
  "key12": "AMjuqrpTDQ9y7KrBQHpKyxaZ9NzPPNfBimmXMNWxPdhiK2fHEcZY7WYodtciDJXrnHZRDasSK3eWzkSMb81QPeb",
  "key13": "4w8p8j6vfza5vhoBv9uVwaSEy9vEZCXjV1TEp8mW544HQhcwtuaGSVowPw68daHTC1AbuF4ZZJCr5yf3f7RiyAVY",
  "key14": "5feYa4Qq5DMsWKdivpmee8XrEJys6R1cwTqU1w7MgE2s4g3Quq4vQoLrSYV47cR4vKurqgks6UPjgsnzonSJZ4GN",
  "key15": "QQ6UWEW8CU87JeRd9grF9yriWpf2M53MDbRBWCBUntw44Rtx5R3BNrVx9Lxj8eP61FfDyHDDN4uYm9fFKdapafk",
  "key16": "55n53rdnBXByXtEaCHMuBGbeC3isiwwVneMcvjLt6jhtn5k9Nsoyma7BR48X45hZCj8aZkv7sTamhYLQmyhDp73u",
  "key17": "2RPkaCjUFdFpV2XjjdtP7dcsmUezRLjhWtbHsFnNHjyava438HW8K3Q3Tbi93dTMrRXShzJgN5qTQGNjEvVexMmw",
  "key18": "5QD5C9LnAYPR2DeXZ2bDKVq5Xwn6hHckcFrhWwzvWXp1vZzGypNWJRG1VySJNeNoeerB36hT4pV5nKw2ntxyUZHo",
  "key19": "2ZCAfXY4w3bkfyz6yuVCFJKmxcA56YtWSH1BZYftXUa3j8yLHZtNLMkN4AUHwU1vcF4WNhMRtxk5VRcoKnLSZ8pz",
  "key20": "dNaDn15myzotrG6c2z7FoXVQ3cTztUSUMZCqknLHkyhy6uST2KvkMKcNLdsWuQf7o773FtT64oAHftPc3bx5W76",
  "key21": "PJwQdARrDiotrLMTz59iWbRibBYLY7DWPJCjwFrAheHpNxKdEnCJSeK2xLvJnRQfjepb8vgQ1qL2uRVLNFDVrqF",
  "key22": "hnRvhwpBR2b2R7iVK54Ncqu29F3M82ePCXpsh9VcshHewXjmNRjiuMFrJvtrPNDnVNnGV6WVj59x4LY1qN1YvhW",
  "key23": "5XBiYgz4jHumH94ZCziCLC3naCiuaosHTYz4rqt2iGSzgv7WfRyGkpJkax2jhvVAYDTforx4wugiVBm3vZrjCfFv",
  "key24": "5iXswFKGhc6TcjU9febgNtDShcVBJyNWhyvmcASexKYtMoJqxef8dj2ybi5t8HyWB959Uu73j3nNHqpEiZoCMXqp",
  "key25": "2Kw1vTnGrPuoWTDPxKRHNJnQb6jPDniyzmM3j2VaVDCu2JKbLkiFpmz49djdPWzzknuhsa4JFX7qQyjY4PmpMzbf",
  "key26": "2Fmqu9KDC1Zsr6oRqujvURAQUNJTAhY8jHus6ZTDTAm9rCJf5noi95NPg1qQYZQGFmaXFe6tVoFraMZHX8hrBDcH",
  "key27": "5w6RwVokoEBLVetnivsgdMYNPcL4ZcGGtAMGR7XiuU9s8GMkYiBrRLyePXFPDdk3Z7GXzmbCsy2N6vze9p6AanEq",
  "key28": "2m8RrCr6hAUAd6yt8qr2USUfpGDhDm1rG8nK4S9ys41EbgboKzkvMaDHW4vqBXntabJ6hi4qnL3XNczhQENm9uBx",
  "key29": "4VsjY8Q6zAHsvq7TkSy7yKnhhYngiuwPWwR62urGVpqWTyNciGZ8bcAbdEd5YZvCszNZGBk9VDFSuTjQD6ggKUhs",
  "key30": "4LdFiw2Csdu4HJLkJiiy34QKfvNjx5yc6BxdaWsbpCiaTSEiyNcVhHAkzjxXjd9znGGNahGMn2g5Ghnfq7UwpkLz",
  "key31": "4bSo22DsoRw7hVZKUujzh1MFeJUnGGCwdfem72fTjfy7vL4nPdkkyrH2BHi2FGFAo21qRGMn6xAfarRjL9bZZ9wY",
  "key32": "4GqUNii6p6ifoXWFgRbnSGCoCJak9A2Foq1dKZBuHUz2wqcRpX5q76NoeToNwu7MMTMftmAHFzbL1gU2SYURkXzZ",
  "key33": "2i1hZsaGKA2f4MCR5GVWgx726LkrX9Q2jjbGmoQCB2wqBYFyN5gkbdQUWgtPwxjuG3sFESX4mnkLar4oAQRWSqPy",
  "key34": "rw2Ry1nnFWAmrHAp5p61mYY3q6t2GT75GNvXm8qsrgVehxQRu2a95CwpBm8C6w7zNim1ZjXq24bDSq64Wzj3cGY",
  "key35": "hWCxaBphTZCLtWKtW6XJZU3Njm1HJzxnSbnqww4cEEzAEuh9Z6b9Dup8WJhjUx3MbAHSD2jYX7D3o6Zm7c2SktX",
  "key36": "5nGfawyS2KtnsNDp5Ay6tC7Rtrun1ATGKFN85eNE5LTJS2bzYXJVjdvxs4yYxR4qWeuXASsEUq4u1grCs9k4Z2uU",
  "key37": "5c5upipMbZ4GhqeBaLXmGsjiAUeksz4xAeWNRfXiKnoC6ScuogPdRPr8DECJ6Ybh5ScXfGC5SuNs9ipY1gVrDsCJ",
  "key38": "5QsdiHofHHzXRSX8Rw5nZeXCEjZDbZqEMTRMpMujc2YdasjfXyBjG1ioCdE1AMxzdqMi8ucu2JgWHjWMKDUHQ8hb",
  "key39": "3FJ8mgT51ZmH2UyHePntHSFjaWo2zFyPn3UrBjsgYNAGhwbuM3magKxZxK7kHt97Gp8zB4RceZz7VFk9WJKMZedA",
  "key40": "2WWFPzZHA2FDMNV32pWJvNaGfc3gX7SwMJCBskuCKAgnxeSuZuiMer7YWVocP1N8i4oajBtrsRhoGfBhkDrgiNne",
  "key41": "5NbLNAVW37pkmBLDQ6PiAFfcb9FcsX1X6EkdkZRRZz1sdHb5sNomGsgzEsKiv9TD1KxEvn1T981GQokWFLZLUFuz"
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
