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
    "2KBpKLCqb5orgMMUTD6jvsR9GAaQEeuGf86MJwhPxwx8j3nreismP5dUBPbzR3raUj86bP9owymVpqXU71tFuAr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hoaLxnFYCWkNeQ7E19Kcaq1FH8vsFfDbVhn8ZQ65EiyKfEAQhPzfxAeZN1yKhUMVjKmVHDYmTBRoANCq9chJwM6",
  "key1": "2CbRb6saWvaCtch5yGStDkxSHrHNqK7dBMKEXH8s2BckUNPpsj19QdQjFpyZLG9zCNhizvVdteTf9UsBxnuUTAzz",
  "key2": "5Nvhc34XC9WLqY9YzmjJGv4DDuCT9kcDAZbqouxAVFc167N5rzHpkkcsgVhuWyNWmcTg1qf33Xrm7zPZiLWFSM8c",
  "key3": "jtrnTxkTkWFp4zQ21fYVyhz8ZuTBs4a2KbaENAen8EVgFgZ7CZokzLiq5RRfyhqXNakHuk7Ra5pRjLgVmZXyeN9",
  "key4": "49iYV9QAuJ1UAUwG3b8HsLzsfsupxZH9Q1GhELr5FCLmkjaNd8cUwBaosXDnQ5XfZqUKWqqyid5MC3Zb8RykvS5g",
  "key5": "2g4CB9hPhxk7X5Fv2uT5NLWQt4tWUZHtYdAjEzCzbLFs1cAHcP3SFzSjMhTycTgCJv5fsHC3J4VswRydNJCKmwrU",
  "key6": "55W7Gm4Pzkee2sCDcKME5wTvJHXSi5wfnSCZrGNkw3biqtUtLwzt4PxGQ6aAvsMLiUvQjJYGx1WnABAw7vysh84u",
  "key7": "5UFKXWhozSXduJNhrkpBo6QVRtVkycYfx2t9J7cnyzqCuq9Q1Skuak42z4CnMsmqoMMGJMTkiKftGWqnFJkwaWHt",
  "key8": "3ehwhGwKccbwnB4WXA8CLoBJ212hCdZt1oYDy6xZaxRnsoEmtKS9DYvr78Wjw28iMku7CDsUBWonqJpHU6usRUuJ",
  "key9": "2YGhnpVoMEySErbLkTqLgZxG6cg5LuvnatYiLS4RLdYao5FTa8zpcJQLvDxzXq2nQwEotunnwpn3pYK4LAQksy8Z",
  "key10": "5ZDSSZDgQRqgyZb5NtdrZP9hohsutY5bZoMwQJfxUvKdYzBQNxSp2kuG382RS1Dx6YLywiEFWXPkbboTGXmepTUz",
  "key11": "4LRP4YVeSko8gtg6wDqFdC78NzWU4cwjmtq8XcNp4ebEWHog5Hh7rCjNG129RJB7b1b1D5YXrFv3DqgRNpqvDCt3",
  "key12": "qL2hhfJjFRmn5dMWVAZ939sv4eRxxGRpATXtR3G3uTBFBvqvWKX4bknsPY8FRx7tVXzXJB5nHe6KKXHyWi89wDr",
  "key13": "2rX5R3JiSouKJ2g2wSrHqtAE1CafPpMMfZ9vdbNHVeqQhpGDpcTVRhk4uhatc6AbjBn92YSuJurvuJYaUcM8NKJi",
  "key14": "3A4ApuTKARt825eFwM28b5rPSTqqWzH4C6avkEUSe4Q4EDTmuY4NqJ3KqonQ35AxZ1v23TSFJYhi3BmkEou3kCju",
  "key15": "2FZM8Y6eSD4UgT2RUzLwUwUtdYiVUWT255GXYf4HFFpjLA4y6Bdda5FDG9FZqNNXic8VyQ3189AZmtxiPaLMC4bt",
  "key16": "5CWafCeXzTLF8sodzz98eYawRcEqXSFKBeU1RiAghHJZt6KjjFyciawUYJHJTVZZp7T1a6qLcGK8UJGUGKhM9Sm7",
  "key17": "2ZviufBfZsgsR1ysndUCFeApZmyjX9P5yNdnaygEAzarcoifYo2QX2W26LqvBZWqcbMB1EpZ7gCJP2KyDzJF6FsY",
  "key18": "4ucWfbdKQGbj86u6A6R77VMSgSV7HbY6k3C52EUTGWjXgWrvmq96VMDdz2iwZnU26wBnKcgmLcNr5tj6Bpj1rJpc",
  "key19": "2eLsUS3UD46jcrXRKX49ecTikWgWnVvGT4kEuxMUPgFYvNPeDVZkSwrrkiLmhubYfmhrVx92NPzmrirvYg9MFJnJ",
  "key20": "4RQ6goYCkr8uuebdwTupU5Ef5HtwbNtKK3p7n6gf1x2UH6hSNHBQVU4fNbpzTAd2TXrYXdaWcqUUHSqUPstL6YeM",
  "key21": "4xAdcqFsVwyiuykxU5yKngf7V7JpGr6Pc7UHESaarxCAS4uaztMRCieFNfGkkrTMHuWbSNvX5CzmBUFfhr9Saf5V",
  "key22": "3aNaDKbm8bgVBF33ATXX84otuSnJzmsMJKHpSkBrRnJBsmobpg2PE8i5ry8sg67CeUceF2wMXLG3zBfPer9Q3XWT",
  "key23": "5Bu9NxJbRwmUeuGthCh2o7ZerDFfUNbFnaugQXmjUyxy4hCvT6x7mL7GrDbts6udTkXZShvAFAgFq6N6Rth37eok",
  "key24": "2UL9TUrz7a7Tsh3RW6PSGNApTpa3z14HpGib8ke4ymm7a2Bpn7aLPfuFg5uhoamSM8KraPEjLACBezWeyduZTkPY",
  "key25": "GLxC9Spfnv5q6mPMytuewjNFMj6CTimZCQSyLUtktCrCsQruk98K74J4xack3ZPJuU14PEm4grER4aWb45v2wH4",
  "key26": "4G3fwZuTp1p5PBVW2DtTQ6hyzq2YmwdzdnURTpZMRTv9t5ErQ85MP4PsSF2koJAhrLcSmn7geru8HMF3Ep7LEsig",
  "key27": "5fTN4usY3rzwpDqijWh74pQmXQNwrhSJX5uESDF115QpPQabj2seC9yRmvuGRtyuCLqFYEuhdojP8bTCZ9fqPYyc",
  "key28": "2FKQg3Gz2GNVa2eLDWAMm7MCGMv5h1AEH6uzckAZJTdTQkYi4eBnXT99A17f4WuatUVSKcpctrAmBRTjcjqvPGoR",
  "key29": "8MDqDDqLFog3aTFNYLXhGwsvr2U9hzC7dggy7ENhy8ikcio5Hpog4MC1unCn6peRmAB4sjQ1NCAZ5zKF55FiDu3"
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
