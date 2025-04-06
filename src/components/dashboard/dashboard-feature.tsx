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
    "F6CRN1Fae1sfHHzu4AYCKao3DpP2RLbQFF9NcdhApaNV19qECRe28eUGP64Qtp82pefECPtC8udEGEFBCXmFCCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdbUSZtJ635MuuTS6S5rEbHd4RcRm5B5hV84KKcbguEBEtoQUjoGKMrHgNGsTpftKqAJZKoZadva99NqfBtPKRW",
  "key1": "GCyez7ZUr3U2kRPbJB2SddTriLiwtmtQsSopzi91RckvyK8f54E2fkrMGNHr3fEJ29BHyCAxa6P7s8TxCQ3Dbdi",
  "key2": "4ZSPkXMSdEDYZvFfhtwJwur3oBie8tzJ9iBzEeh7LA6MwRyA8hE4WU3N76BhQeqnoDcttCMWEhtaF9XP8T9qvM9m",
  "key3": "5SxGp9BRKVNt2Vxps2q7iJb4PEc7D3iww1hkEXQ44tyMAjzATknJhuFrsegW15sEMffmHadToRLQXHny2phPYtr9",
  "key4": "4PqwTaRxMw1XvU49H1Vv1Y12ei1diUSZRTa7cm14dSNUJT4oTxfTdJU4t9RmLZgBNJj86xWJCcMtxjzL4uTSA5Hy",
  "key5": "KbD2r9rAHyedFsSt1yYUhwB3nmwZp2jJu7pMT6fuoTPTMAsXvbBkc422cp4Mafor8tDome9tSKm7MjWMMr6emg4",
  "key6": "2yVV98jCYJxKVC26ZBLnZ57GfLEKR1RFbVSo6EgnkHEuUaEJk74V9WD1GmTJjx1mkA1WCA5eytKuw8UfJojRqRwS",
  "key7": "5T5iJFZ9AAHAXSsnsYigp5Jrxj7p4a7NJSW1to5yiNtAkV7AtFyLNoXnqkQQBrZAbWGVBUGcqaL2hmDNLkYF71xP",
  "key8": "2fbh2RLK32c4z8YHnfR9cJeFLTNWg1amtYKHRCPscXGSgJd7bo1A7R8R32ehvkuRpvC3Cd8DiL2T1ejSSx4G2QEh",
  "key9": "2t2qdoZHmqgzrR9UYrNXk1VcTby48xXkmvXZ8YXJqhPtDKhfER99XEJUmDVBwwavZxiEM2JV1jVP8hkpN7AZABkK",
  "key10": "5zn8Xa1qmH7x5x7eY8nJb8Bgd1qgZ3zrnwv5jCqzXQphQYkuo5xicAM9DHKbXuJDbFeZERVfwR6EkCLSrdxNo4kJ",
  "key11": "3J2rVKHBq7PN1bUq2cfS2ZX2AdqGxa9e5atUnzza5XKUvN189CjBEFA3hYd6nW4E7Parj26SGnXKu8fmTceCtDJd",
  "key12": "Lfx3PyEurXEu9wuaDBmgJNQcCJWtUek93TyXJKqmjr5dnR8N8dJV6TKgmHnmPnpPx3n2pSiUYqfiBuzR4PCnqv6",
  "key13": "tk6gpJL4NhFPxtHhyj1rKUw7Z9qB568MhV4Awpzk4kfafFTyqd5ZkYRSTSiM98PugQG6MY63j7LoNvJrsvLgMXs",
  "key14": "5qXuAvqvmhntrknGoAY8EeW9yYP5u8VWrWjEwfiCZuKAXWdLVYuZZ8dDQp1YoJTBCnm67krq4aSqpMh4nLhrrbae",
  "key15": "4i1egpBLjrkQ6SBcL6wHFUjuY37tJzx4zpwr466vdqJ4nstJwPr8fNNoewUKRMCwCXa2iJZ3uq5ajbeUkiEpmsPD",
  "key16": "5yexQuw1CzZ44sUjDJmfEMbfb5zTGqD3NKUbXyiyt4RWJy1aYX2dYzqh4TGm6ANnXHReKPFdCoKjH9QWRDAJbSHg",
  "key17": "4j8EWobGRdFZuS7Rr7cQ4jkXCJDuKXGkicvkHCm8PTworCpragrj2XgRQFSu4RnHwauccmSqmYGLSWdkxxnTHYsN",
  "key18": "5FaHHVDKBnt64Hc5j4L4aXSCE5fuRAFZKbbawk4ahxEZnF8ddoG6y7VcFUtNvQ5iJwMHPnq26tJnyALPoNpBn8yL",
  "key19": "2daBwu94JaBk3ChELDhBdX3NTFsSkJyHMeagiEdgDsqV4KSm63MMktpDeqMp9YMV7DBX6GwS4azQx2MXD98i3LHJ",
  "key20": "5BE3SaLgLs5tZ6MaE3H63Hdwsn2hKLsZBTp6GvVWn31MGpdKpCPGPMh3GdejKZQcpH5zsgqutXWLRiUgfMXTuSp",
  "key21": "5etxDbDXaDoGz9V4d6uR1JrdoitFJwa9irA91EePFLwFTwG5JT6NWPZF8CgqEexULXJ97xCXx9PpJ7Q7PLNuni4d",
  "key22": "4gndYLu9rzFp4ZA6XHfD1pyhbhAQGE6sKM44LkJ1fi1LhcmxpKAmLw589qvsXqT5DhvNHwiTEEm1ngRECvY1DRe4",
  "key23": "G1ELaov2xqoQmHcewSXdjyN3oWhYgG5gHGXuYxEidQJKoRcEmHh2vZt3LaBN2gv8gUhpJW66EBu93fA8Lnncmx1",
  "key24": "57diJCYduTW8P9rRViZ3ZKyGLTUvu3qCacU5BgP15GiQqUwPweqHYoNWsEeMBHXrbGvNyqeotCUrjBUCrAw48f5C",
  "key25": "2DQzyZUhbS62L9uFKecCN1aB5vXvRZ8T58UdRst1N6dvwfLYsuAxFLw4cRF9XUJEHcdnDRhaaZTyXBEoR8EKyaoP",
  "key26": "4pGWLa5b8Ue973h3yDxi6iz4RuMbtUPhQg6i53REvj8GtDy7JbnXAUvzuTLquLwN57d7GgS125wztqeqMK7NfDhR",
  "key27": "xJe2yFphfUAPuEuyGkRSF4sFSFNzij5DfTmuipHBkj3QAaWSkgnLMvMj1fvxwocRWeC7cEUCRgvbBCXHvPndGxb",
  "key28": "4nUK1ZRRL7qcoFyu95nXCAutnjNQJwEPidNHBekywGKPjjZqCLwfqAPzuWLJTespwKjw1PNqNnsrG5TywpZxRTfD",
  "key29": "4pTUsfXcWEdQgb7piuVZdpxQPFNsTDBw3cQMCNoUbWcxYxeqG62wGp31ayaoTmeWAHvzTyU4Rt52rPV5PGLGD87X",
  "key30": "59Kv2Yeftx7eGb5zad2TyLn8xAjirmACGks3kJhYL1NVSUyc6KubC2uXPXoXgoWjVC6kyzCo7KQQHmPyDS2Chqv3",
  "key31": "5eCxjnvPftv6tEgGGM7KD4kv35T3uWKch79DmunnQGxFLg2hAxriw8tDxJxJGG4sBs4Mu6h9LAFWUowqCp5RS6CL",
  "key32": "2eQygMJ2w5eszCWBFUyA49HmhB3DKCEhmi46rvMxC1P6vs896ZVv9PCPaPMVjGeETNHHeEKphX97t9EBvvR6cwe2",
  "key33": "QH2uaDTxLcRKspX739TTpEvFQMpVf9hNMXi4J5VUMY4Fz3MVERNgxsZ3Xq82DDrAM6DVkmrLxdxjM1xzxHgSxAK",
  "key34": "48QNh3ZQUXrktMvX5AgCJbff4KjqZAQ9yDjKEiTgQrrehrYZBZ5Zev3sbbEMHNPr4GgsUgw3w3j13QsZUGXNjasE",
  "key35": "483dmmeBg1m7hfvYC9mizjbmGwqWEBMzuTFhrJbfFzwQZmRZRkgEzf2Yf2jBq4FepsvFAu1TpZTudRqmKf992cvg",
  "key36": "4yUxMPmeNhZx9hdStvWb6n4A1ho75TmWCA17rQ6Hi3zibd83KF8ot3fNeF9sFkz45b9Ljuc7J61191iE9XqDUoag",
  "key37": "V6ppyNrmDU5njmqyVd8VggFfrv82J9Nqt3ejFYaBP9wErerz94a77iMK82MLKA9yGbd4dCqRNaVVw5g2WvNHUmB",
  "key38": "4scDXRGK748eoBabKsgkvL1jhSmhGpfNkCb1agmL8BM33nh98TVuzdkeFjYTq9EodWg2U26w38f84qQWPdyxLoVR",
  "key39": "5xJaNnMk1GxJVgUasob9DdSTZKqcZgKVXmqM62TDqP6kinqd7SXje4kSaeWKFJgkXci1qs1EKx8dxgrWmWwpZ9o8",
  "key40": "2hUfviHd5y7gRNRvRSxngsHoCEAYSW2oBKJu7i4ZXpivKn54NdxdBHx2UxhY5Mfsk1FkX4v5X2sgmwrabcxNstqX",
  "key41": "5ThWc9LDxy96rHV74NJSTZPCmDExYm11CTRsFwYhrhXSpNcnm5437Z6huGcJ8KhJW4pXWb1znx3J8mUo7d2fXtin",
  "key42": "2tAp2CMqqYEuL9Cs7U4nmos5dJSpS1XtqSVvWsRyyvFarWMi2vWWC1Fq4W5272FxnpfGMdnNRXJAPNVfhgUZhpUa",
  "key43": "3rnFxw7NrD11674wFVj3s7DRjJVRWZPXZRTbwTDTS66Cbv8VmXywwsvuyqDwD2pWVT4LYpTcrw5BSzZjotA4imw2",
  "key44": "4qScd3HGNG5eemUT6xCchwYfd9FWQjxEUCCSq6HWvqdqAZVQUEe4dH92nCBvuqiddxEaSwz4q917ehzH8dXgQ6qn",
  "key45": "fD2n21eTXndm7CxXCY2U63LL7GfYtrSfhxWDCMfvjRE27nSr7HygqBUFeYsvGviYhQR19bwAGStru3kb2R5tp5e",
  "key46": "2NBU1pBBxmoVNGC2xyAGhm6N1jjdSJaC4ujv6D8THu71vEGJ2XJrTxBNjETgii9XFbYyVUfiTFw3Mr5sSZvVJ7Wf"
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
