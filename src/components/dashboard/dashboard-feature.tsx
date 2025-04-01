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
    "5BpWrWJWN2Sa21VTXV3BGap5AkVY8Qhs3gk2KSsZvDa1Djr7jQbD14Bd5PPyBsFY98KoTr4vXNr2JyWfnJXJssfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RcfDTZrLXojt3qsb3VNBgNEU5xt2FEof8cfGSHRxoUm7MLLyqmMyni1VL2PNY1N1WLSJP7dX9BWQ2MSUdY3JgSg",
  "key1": "2BB5crxR2LGvA8Gopx2Zbu87m9VbXV2txgMjmipnYxgKu7fhVg8vVmNU4qXY5235bdszk1bSThpr6fo3BTHTy3Wj",
  "key2": "2urJ3sxi2SCVwmjzaU65umXe4ae7zWvoakGiksJXGvCtYJnd4D2DngsMCpKheY5FTWxecSzBB9gexdXJEZo49iPY",
  "key3": "4TmhVNrDd7D5RbW3ohheHEqmBaqrDgciCq6ti9YUH4ggRRLKck9ZxaLkDikTv6oKKdskSfmwWpE8K9JnB3gVaF6f",
  "key4": "23DiJjyRgPwnjXvLpEd8zPFCoXyJWD4hnHNTHpUpETVaEKhFnaGYqwQeNUB8VrrfPhGf3pfhPdSDG4qbUMkCnAbE",
  "key5": "8B2UdD4VyVAjZjWfKR16Xyf7TUkDwrmrYhBgaCxke86XhRFDjEcthvpg9szXeKfyLwwWbFfe2q66twmr8RWfe3A",
  "key6": "61omYgCtRMsT47QAiNv8MTQ82YyfhD5xGwZP6aQogXxEVMruj2xVTSrfhULH4MWmrYL7DTRAoHUzwqizF5rMFK7v",
  "key7": "3WTQ2ufqu2SGWDcMrK2aUsnZEFkhZk1uqEfq7vgFH4MVkycEfNVFNXV1uBFRndtuTbW6T8nBvZSm6959BD8cjTsy",
  "key8": "53H4UpNndS35bcwnCPxagFHDhLqy8J98BRoK37GsTWGqdmSU5GfD18Q38bKJGBSosT13kkBKrKw9wshk6cPaqLzX",
  "key9": "63JuYfD9o4SoTxgvcRhHAd8EJRUUWG8edZPA2jgjcrLX1pknojF994VLCh4BHpt6x74YysrDMCgf9EWbQCfyxoqA",
  "key10": "2JHJkJE3c23o5FhWVFoFc7ehZVMoGbeMTXfmJyy3jec2yNTZqUec6tjo2GS8M3B8bHjrzoGAHcVJKyKBcncN522e",
  "key11": "5QmkrFqueynN6AGA82ehfQsdK5xnqVn6tBW8GvPFvTuaby9WcV2uH8VHNan9Zj2bNTemjM9NEcmYM1RNz6BSqtJu",
  "key12": "eYDpybyUGiLzud3Na6GfFt9nE42r9X43pVX4D76UUbjjqNzmDN592yUCKTLi3eEhU5bEMtGo2SPr34f94QtYmHc",
  "key13": "2nfa5yAqsgW1EfdxMHPoGnEHTREFfwHyNEzgQ3eL1nQX6QHVE7AacHiSw27k7TF1XPWToiDHDEVmS9N8AgR1sn3C",
  "key14": "64Bc6HiC19AKzvdHNEgR4corWxVJKoLLzUms1DD43RQXP5AKiAx4gt8KaLceKaSk8q2LVVr9wDta7vmDi26ZfaZM",
  "key15": "2NawHV8iY1RKTZzi1QrirND7HzWopKzj3Ji4hNs6LiUvc62mHVd7RwWxf5C9qcuVjspSHCqZbDdfm9FeQ9QaXBGX",
  "key16": "3pfe7FeUDCRHFCkNW1Rp2hQ9gerNdR4YGwBjefHb1iKhgRSfRF35ixFpQf2bEseyZ2oyLJgecedjbLRq8YsjabSc",
  "key17": "58vobSNURp9PziNwgVhpCfmEScJBYXxRtEZ45xVuFJG2efZevrS8vUYdxzf2JMptJJwbhD4NFEE1KMefZZRw9hcb",
  "key18": "6UsDHzGRCpqY8Gbdkx1c8caGy3ouuzAK1Yv7TBy6m5Ljxni7DCy3x9VC69tx3azpuHNXvcUa9odyAJmZf1EF25U",
  "key19": "4xfxFyCpbWFABymavngd36NQ1ArAruTdGhWU5UGMz4vrv7XAaKbNLdNaZrMnx8jUjNBjNJeJsMomdkJyF8aSStg7",
  "key20": "4uiyz3Gy6FhSwn27yoPiP5uLivnKpT4PVYzihRXq3emRTqNtj4qqDpwwMtn9GSGF6TTAgjb8Qk68fRF4sp16cBtP",
  "key21": "3VFRnRdww3LQkaf1yQHpZtpJKbe5cYkp7qLTzMyvQKkKhmL25jtrjaWR31nsAE83S2k1TLGF4z67kip3bBykL4Cv",
  "key22": "5QMT36TEgo8oCAAkcsFJBnyft9nKJNxEaB4vwJz4kkFaKGQfiujQuXhZgyGh5W3yGXyaqu52NJqciynzLtvsGNaG",
  "key23": "5jcxG8t4SF7uuorhbWxuqTdqNCVxYQhPtn9dVvhADuoSCbTUKWxqV4hJ4PNGd59uA4YU6c1cccArQWXfTrN6z5Pd",
  "key24": "5U71TMU8ixhXkNnwpJjwdkfX5McztYCP286KPpFBRPaGVyopkqXwQypUr71cYspGkDRXBA5u7U4pAqeHPBt58QtV",
  "key25": "37rfSy3ZYrLoPDGbiamceBSBP83tkq71yigMzM9DwMsoA1h9PyyJiuE6TiGK5UsqEtAjkpao9jaxmBWUzsvomu2N",
  "key26": "FQJc8Cjzf8tLY6M58SP74cMeXTH582wuDnM8kRryoeFAzLkrCYRt2GRWqvSgGyoyg5nZXtGT2PjP5suVfrpnKMQ",
  "key27": "5SwaeUR71AbAseC69ahcZg8PS769cZabLCNXyaoDFN7pA7oq8ob8Kju8cu3L9kHWGo633QyRsxN6SZ1MxiaprPHh",
  "key28": "5AxtqvHuF88YuGwfCy2bEESQAS7vg8ENgn9HneUXZsHZxdwXzL9BT5ZVdih3SsyRpAbnb8BMAVcQBGc4WQEHrjF8",
  "key29": "3AweAWPzPgsbDawXfuLW912jEAbLXtQgkp4PJE6FMtGtdUCuq1SP97L2NGpkmSnNycjvMgayiWtUnzzDLGe5chDr",
  "key30": "3kSgmAK74s1cfgh2hXDpE8PeSHFoEo1HiwbgEsE9TkZL3CAeQP3RfgFpQw4dFnhRLV2ij4xq85K3aboVJ6KD1UuG",
  "key31": "VD5RraFxJjYJ6t5eqqgwmkNpLZCMywzriRh1LJsYVsTiusQon89o311aG7D1r3PBvHL1ww8LvbnbjT6YefZtsP4",
  "key32": "2Ka9pXzmGYbbgnf5tNN9CEe2JaFLjJTxnmzUymKZRDMEfyDzVneE1jn7crrVDp15prD2dnyJWdXbs1AK9MLzZ73s",
  "key33": "5y95i6e5gEccTPshAn5EPs9wdPBCXE9Fp8jxPgHeR823ZpG8KQPib86qXMKXNqjZx4iqWE3F2Wn9k9bMBjxE7sxq",
  "key34": "atcZYr6UKcdLcodNMEubfTapPAQ3h6FZCozLQyFQg4QeFoyFHV2CWC2c1nAgUcxqyCKvYxdhVd4aAkvJynENFn7",
  "key35": "5Haen9unnp3Y5Mew62MSELhv2pdzVudhU71jSg2wiYAPJYmugpLjervzb439ZUe4rut77xoxTpsn1iCzNu2dtfeb",
  "key36": "3u9QQMThETx7aAxPUg2UzK46DHrXDpHiMJPvhSSwzVqR8DmLXgDvS5eXWMrjv5Ab3Kd9QPSXk1DgNz7UtqiQYYgY",
  "key37": "5Xg6Rpz9vvSX2FcFi7vfF9GmUZR2xJMA1AT3WAn1NvtGDpTnWqgavz6CwTLKsG6WQpL8yutcVHaTWZQxkit1K3hj",
  "key38": "2rcXk1wQVp42oRDgdH827fhU687Hv3aFUL9AbswuR8DRd867ur9gT9n3bHKQqiFxg9Krvg1iAitba7wAZDZX8tvW"
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
