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
    "2zDgjd5NY1DDY7cqCpPkTQbgaH91LYzdiezpTRRoNWe3pJqhs5Pryvnsxa4fPKLg18rgRTD4iABy7QbyLPmLrpf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KwSHB8i2U3trKsYEmnn6Wiid1D3po1SXP19GbzcMzbMZytkHEFecPsiFWrPrGPscZkznGa6Gjmqw7nnH7JXuu9w",
  "key1": "217PpXf9rsCpHzCbNsSEBC4DajLsLeU17BNjD1ZY1unJwQpxs5PVBTrrvgHu72UJnNiEtvmSUjQKmZasXwzvqMMP",
  "key2": "35iiVL2Do9yf52eUqt8W2BPqNxNZXMyS5EkVpBKdqn28ACq2gaisFNCPYGtNNSndCcoZmE7rstU4mRSknBs8XvAQ",
  "key3": "ou5Et9NscEKhfxAbJryYw23SCpGeU4jKfKWTEHQFtimGXaV92YDpwXQiooYKGbmWyk47EAseMLBbyLAiyTkr68h",
  "key4": "2e9Y3QWonhdLW6a2sETM8MbkTdi7ntHDYhKHZRD16sMf7VnT15UFQn1L8ySGwLFMUGzFycheMKcnHj1p3qoT7oDq",
  "key5": "cokMkVtbVcGzq2uF7UwaCuTB82zs1Z6JiNqtWhjBjMBFrvzEm6suECk4zDCBryJn7siCShmRUAmkms5R2WDq6zq",
  "key6": "4UaDtmsTRa5jutqHqCX8dn8Z568web7ckeiyBVMhubZM2rhvFADVYQ3R6AYttGQZ6hKKpm3vfUNA5TmUsTm8T3JM",
  "key7": "4Qzq7LRqPHvVHcfFKDxdbjpAzWgb82qV5X2qQYWqPtKiAaVCUyMk4Ed755jcgmfJ7uvxk9KWVdZtB4fp3eMSxuzf",
  "key8": "5ghTdgDNSq8fPW3nrVN2aULhzGMrzPhexZAsR9uHUy9LCMmoDLhwsRPjSMHvqyLjtYFMCXeNqSYYRKi43MpzPq4s",
  "key9": "G3qWsz2pxLo9NwDWxys3C27D5fFuzQPUdNiwbMZTg5WVxHRfBnJN3ASWXuyjzHgz8MJhgKiFzi6gwrzchQjcnML",
  "key10": "2Vudcqs9ndhpEko3NuFLNaGCPtWGQB3om1vcVLcVRDHRcuSbkE9r8SqcJBazowbtbPwimuc1VCjHEHjWZfKyxZdB",
  "key11": "4pM3ZXfr2AARQC1b989sjysHzazbFDWUERZyEwRpLv2takr5UZwG2N5rHqwigd1hY9apAcpSVhtHd4XrBxr1zbAr",
  "key12": "2kTq4pqAyrcWKzQSjKYjgkL9BZf1DyzKFXVEuQF5WHNaRn5jcxTgGEar8mhuFmr7GwFmFoMPAYz7r1EiKfDQHeF7",
  "key13": "86nkcPdvaiFpwoq5Z7g6hbiyXfe6eFMmkLS7ZvN5nDMCHu6uYkUQTJAq73DS4Zh2XanFd2A6DngStQF8N1A5dpx",
  "key14": "23drDGYFLJ7sAwUQpcJqgKsePSz9FkVihkV1vM5RCPQRDxFoAuW9znd5H62oj9xCN4U7un1U36hpL51Mt2UmCfBg",
  "key15": "rhA937qVZee6LJCEq2cU18F7VFxLWRQADHf89o5C49SRXNL5wUUJP257zFRvszkGUEUqJ7AfaHuwCdDPoBUfbri",
  "key16": "3ESR3yj8J8pqMgvHV8vWCLNy1KjVqN3RP2NkATMiwwSupqgD6Efd1hWs4nGLSMw3fAGdAqkUmEsD9bgogSKZbVsr",
  "key17": "23bt8LZLaL3LFtpnCk7GRz5siofjBh8VXUHY8egpZontieY9yWrUDnKEA32MszLK1V5HVLfcBqAXKxaetFNev1Kn",
  "key18": "5YDiJLhBFWYrqcvG9epXeE42h9B4GCT531VJymMyssjfTQszFSCsAkufG1rVZAsHxRvmqhQfNXjBjYmvwEGV5WrZ",
  "key19": "32jPcCGGrkA5wXovfNEaGpfqEtXyThBwETPbMPUjF4e1YyZ33DcbFhcHYS9M1eZo6x8bNw5AoJkTh1T4V6TS7YnA",
  "key20": "57tb66T1dVSftunGZpfinmT1RjqukHQM7P4vk6ZFbDf3RNmqeMJGQNjuLU7NqzdJTQBQ5ZMpsht23JHA7MSbimFH",
  "key21": "4ZYgFyABJ7Z4EgeZsjQyDpqfyLbUWi9tTQLgUQhb5bZ19RWRmvoan1bAHgEsCFDrTjyb1KJiTRcjkR4PonaK45Ew",
  "key22": "4sV6Pdta6p5kroWVPuWrCU42ePCKqGDVKgVtP2ctR2TANnpqU8dYsQDJxAj9UKzpvStTqvMZsLd9p2nGzxgaQMAP",
  "key23": "XNuJoKxh7wG9AeEze8ZAHMa3Bun5xXCHkdLwGug9mDqxsz7ecMo9EvSPCQk2hHrKd7N5rypPgtdwd7bqCNkLC42",
  "key24": "34Q9x6tZpjGtCajXkgfk1yvLEfj5211eKPvGX2W3GzaojxEekHCmGKFqXmJGft2eNbo9zqyuDfd6nEjDV7D5eB9s",
  "key25": "a6psBciYqbZBqYPBsxTVYJRFR8zeCZ9tMKVLD5aYvvw5U34r9RSYJ5C8Et5cWejithiZsdJZmQ39noMrQasiJmL",
  "key26": "kT2zdMN6Bz7Woqh5EjnwHNg9EMbNUJ2nN3FczhvHHVjaS3Y6RgVQNi1txsRYHgLZ9jdzWe9kkJoNQ4zGHG8gxdu",
  "key27": "3yXjPJYJ5wEghasmANWGYgLgYRL3eHM4QFn6tpkVkNv6FELR3XVVsnLxSwhdEgaXCNxVirpftM17hoox14WW5FiH",
  "key28": "3YWD6UDKuQUAjYVLkTmExWYnhPE9VW7xyL1dq45mWjA9QEGmSL7fEb8XhSVQrUEYorC2AnNFz3pwA5xGLmeUbfRZ",
  "key29": "2Y1V9WV7JrCyKv3UjSLHAFdpdVxVSzWPXu8qY2e3A5r2DVJVaisoRBwTSR8uQgQr1QA8Wz1amKekd2FwZssotTBu",
  "key30": "Yyt8iKAzbZK2NTtBt55WKyX8f9QD8MPReBSCuJzFsnD5BDxeTVxH8Wo3pKLKiMWC6NvZuTrX5Pfaw2FoddT9yuC",
  "key31": "ejj7qiT469fqzeLBCyNWRMApa5zQyH1hGV9Zc2s4KDgGFpQxAhamCkKcf3WEyemRUSbjHTjf81nV86ce9PvNQWZ",
  "key32": "3C5ZLHYRZWG6Gj8qgHeTYyTgqCGGqNG2Gos6nM2KNanhk3qn3tA5ddvNELhvrTsrMH8gsM9HpgenS3jsMyZY4xsn",
  "key33": "2jCgELxMLayWfYCF8Sy85fsFmAX8fLtVpxS6Gcpu5eeeK2yr48ssrT7NMXaS5252D2vMs5dN4z6bb4Lx4bR1xZ7t",
  "key34": "58zFpry4qwhQmkoopacFKbC1wNu97pSYJEgC9aoGYTmsMEzJGwLnWPMkL86sjUmYefV7KMdypiGyvGExNJRiqNCw",
  "key35": "udtWUhv3REbTjBj87QNHtZ9aMqDYvVCVhxZimqvCTx6LvEg3ZjWvh1BBeNongjwqjpBxmBn5eFC1Mt3AnA7uiTL",
  "key36": "2aJG8gQntka518AvsZqjz1h6GMcYxvpVckRsFKy4DgQXdRKQRYfehAv2o8mhQcD4zcqBZFfxmns4UZNx9HvuRsgw",
  "key37": "5xsUwVErS6s1ZX26paHWJ5BLvnSZfByYbJLQFSkU4rMXsTJ6yjidxE4UUancawoJptfnEQS1Ai3MLN8MbmVoFwfL",
  "key38": "41TeYQz2EwFGDaQqJSL5ktZUdpdb9DebzoU7g7QwV3mAnK97Pswa9vGrDGZTf2d2QgLBwRGPLuPPmdghnp8yn9tc",
  "key39": "5uFGSc6mb7GAinK3n5DtcF3ARWBBr6h8mjSUamuSDPLGa7xtddNK1HtUT2DV1fWZbvZbGzVLTDTe93iZQtBYWFcG",
  "key40": "5eMr91HH5FwHxRXykjoLifSejk7kDwHJsPQrpAxq6Q5AAfaryQpfDvq9WyeTzMFBGgvTTD8zQRrZsn7pctY1Wi11",
  "key41": "4oqVDYzbyzoyJmkW64YsPoTdeGTQUQq8mMQNGFQGFDgzFVhBQTSGHZGsNECtcKo2P4zuLtr7wwyKiPEKLmtahH2H",
  "key42": "43cvt7cDecM9bTToSAKsBKrr9BABpxZs68dKbf88KSVKGy85iDtqQ7Eh5fLWd7AJMNiif9dHdGnSyuiTrggiwTso",
  "key43": "HqJRagMKyWzmXevSbBgV5BG61G9DawoAKJC8dp51YFrtep5QgcnE1iJmQyDYDNUNx9xx5eaTp893f4zQ1rV2qrG",
  "key44": "15SkiWNgKNvHiVBUaU1hXELEXEQ7aoKQnhdQ5gGqwZMrb854mmbAPFnh5pVf8JJWXv5sDuTAi7NqkyEcjC99xkj",
  "key45": "34S8a4DVrKbpL28Wn7eD8AAApfAqwpdC6HzMJCjo8EHJcFp2dzzsVJBeh9xB9Db1xmKvZVjeRwRGek7hkRHjWEmw"
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
