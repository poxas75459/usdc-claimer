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
    "2FMc8acLD4pg6RRmDtVoLZwbNcPLjXfw6DLq3EsGy1JmZogGxvxwPappFVBw23a9AKgQeTz61UXMSihZFUArv3tN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N9DLQ8dBhCpHseafrX1m8FJKh7tLkcrCEwiB6CYf1U8XiGLDSDTJKPjKXdvLpnKZAFHSJLdyNNmabC1L1WTeoyj",
  "key1": "iEa1ojmGCWLyn7D7PTkio26xxS2DHbkyG2ooMMnA5YTQ6nq1NrMpVhDPMhZHxu1eVemf8XP8eREZmwTYq46XhX9",
  "key2": "4iJDmAoztvQ63V9YEmFoka18xddg4f3cy9exFvgZ9TNtb979VMGYxvGxFpShKEgeJa1wAyqfUbFcSt6DtusZJSrM",
  "key3": "5MPAmqTwWwR3A4Lz4ywCvycAyB9S7ERsSRNxCTMfmJdG6fEZzo3EKMNS2ENkUM5L3594C3a4bB5bqyCs7XadvmC5",
  "key4": "4JKiYgoqs7zXEseSYNsaiEq2vgmfcLqzmJT6FZuG9s55pXepTyqYbPGAURktMPyY58eywpXrWDdP9D9huXpoKwjk",
  "key5": "2WmyHheQogSaWbLCCjWYJbsscybLvz84UsJMdKVwypSbDqVGxLWwdW5N8u1t5FaDiXHQcMyMuozjhPnf3hpM3G1o",
  "key6": "4RJf2oSNDfgP3EumKKUvV7UHd2XnZnEXDNsahRwE52z9bHtCcawxjVzNzMHE7RT98Kxt2eNXgzgtvHMmNE1FUouc",
  "key7": "3mwPNEMz33pQkM8GKJSkTswPrcrprwEQnv9EEnXcYxKpmZNWqTmUdcm2v9tVycGmD8E3X5tC44g5ZnCHpRdmoaGS",
  "key8": "VDLkjHvNBByUif9wvnykryKqCkdToGzq7MeYXcJbnnHxbCLUwjBw6DoNVeMPLREiP4MXjGWZCP7KrJtGcPmPejR",
  "key9": "2Exvprdy2mLuVdJdrJz2L7CtXRuywMbvWNsnpmdKnzDSz66gNmhmsYNuzdwmrdY19uy36aDGC51T8mZAAsuh1quU",
  "key10": "gvDViYuVLM5wCcojnCyWgTfrEf4URKrZgxjbjRSZbewPehX2e1wZcQFVhegzGH3faye7jHXXke2gPuswP5Rf4nr",
  "key11": "124puKXZdZMNTpYTRjEGe4EHhXYKA8pKCxSG4ZLgGuqyx99GcoNe9uVQ6Hu4JK1HPPsxGhtERri7VWyV23phh1nA",
  "key12": "LB866XFN6giadmRhwSDVcT4epbzSsKt4owLuHiWuUNiSnyVRvg1My9BJ3meUvFQAiNHb6nZD6w5MKGNzuvgTFZs",
  "key13": "4LgaPLvx76nRQmHXVUfmnzg6etbg7svxoXinakuNxtv3pKX5vy6mpRWVjXFqup28RG7nkLdaj3phQzHj3PS7eaFX",
  "key14": "2zyeGoXeLQqwWtVsugrMSXrX1FrBSrTDJqNQW33bTh5FMcZMAELLiw4zT9XTUauspfFSCExwZg7ghTJMFZ1Dgxsw",
  "key15": "sWqcH8SaEUp4uNWurN1k1GTTSxR8JAijReB4QqdCXevKk729v1P1DuV9Hr93erJVj8EAwTDoRs1TE3fpYHKZRFN",
  "key16": "463KiHm5KNhujX51kuQaKowJxhc76Gb2uyZNAEjpGNL2oENFsYJgBH47yYkdy87vz788bC6sPG9WvVnjHCiYhXMC",
  "key17": "LgkXZWs7kXqXZoN4xNeEy68CBkaKNZK7dtx8nxgW6H2aaggXfGMvHMj46YWitRfqHibdu9VwpkvNmyW9Zu96xtX",
  "key18": "kFGhXz64JfA8Bd5Fqc3yrfGnwziDepeGnGtiPoUuUFrM56yWW3gtZJWQncDcMZ7psfyR3KogLEM77XyXrC4hiRW",
  "key19": "2VfsVTn7mmdutTyS3HAXnWtj8UT1uwWUPZwRh1GCgbFZPzHo98gSH7rs9BSZEUJP18H5xDbutNTbKWrVZmQJzuAL",
  "key20": "2775FtgC1wmPYojmEjG4GA2Zy5n18FyFwDrvZEC6B7LVP8NKtjUgpKH9ejfK4DhCCfJJRhw2ScpB8RM153Rwc2bX",
  "key21": "56ChFsEAxFwExyd3ew9oGc4gwVcbDzHARjYbCAfwPZqHeUyBYewkQck3P7AikmZ7y6P9HHuWzXgCABspLXooY4Jj",
  "key22": "4XLwZVmizggq1VpG392KDDYVekq4B277Xm5T2WLcg677p3w8iJAuuYfx755eqkcfycRUV42S3129mVsRQh2uGCkR",
  "key23": "4X1dMcusnK6MLcpcmk3fCJ1y3HR9sBgaNTx4joq1jrq3RGHLch9mg6TzG4TuFtEAATWuPiwSCRCNhtRtpYBZ17Qk",
  "key24": "Xt4GaJGT5EgCsJoYFvC2wj4fHg5c778j2Uorq6ZRGVPkVYhM5BRhZ98pveV7cScv7LDZjnDZPc2ewKGT95ZPwu3",
  "key25": "mhVSmJ1tDRVmLKWb8MybcvT2BhzLKoVaE6Wq52D68pS58XKFkzsnWLGekDGF2gRR1dQSu3q5YDemp1xYdcv9Ueo",
  "key26": "4Y1d6ra9WjU5qKut2toxLTSUNr8wFVJsMLAmdkhWJcpNpcvCvnVRx38UDN2kCDxSLjjivZHDNL8V6QXSZYwDaokH",
  "key27": "2KrELVCJbjdiFmhHRtzJ53pvBZsV7ZSYYPQoePFgc17MKcf59J67NVNkTbrWVD8zE6ff9PwFCYsYVD2DgtcQZYDv"
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
