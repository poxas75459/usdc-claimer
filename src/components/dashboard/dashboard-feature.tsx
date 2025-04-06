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
    "4DUV7kzxKEhdooPiPzpQpuYTkoZCGyxSan81iftRk26JcvFiJzrWNE8bgYEvHJJbomPHEzrZURwyJSKv4tuqgtGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nas22GTqzZk7vZmJrawXr73ZmddEsnCyj3VCjas5GAA8C2hS8Z8uvdupj4uca3EHBsvbBbg1DRP8vEedx64NSh7",
  "key1": "3VRi2Moq3YmzV4Bgipe4tUjXfvkR5KBEF32p7aeaeDeEfsn5gmgWHtKBz3EYkWs7kiCMJ4oArQkpRqUtXYEdV8iR",
  "key2": "2eYzovKUyFyutJtw14CM7WxyKob4eAbPpoF5YhYpPWPqY4shAkDS69M1rdVzA721eY9eogFjccmQxNCd3tGjXX77",
  "key3": "4ahK9qS7KrzHHHnaZG4u22ws9wHaxwqd6Mnbd5TyivK6arDkPWQvM24mEhDK4qZJK1o1iwVBpRupftSUmhk13ag4",
  "key4": "2zEi77VBYgjCy6cLjPGHbzMrrbJfygffHAvtVtfbgEwM6pwQGspPMnNYzuBn2ZKPwQhTXQYNpJXVECDYY6aqa8TE",
  "key5": "3S56NbSsBCbK4SVF5faVyU318ytTXKBtQDQHqsHkpX496vGaRgFiwM7PjS9em6MmUEZVbAZfX8249v2r6GBC2fV1",
  "key6": "rgVoCtqeJYHtGXdffkrbgopRvSiHa1j3e6G3L6ZPtLVt9svTMPfMQVqycgB9zXnTGm8caUU7sDwbwp3eanSiTrN",
  "key7": "4Kd1i3ibRBFNaKUSJHD2rH5dynvSLeWtR6sWfbzDTi7dXh2DgbjTEGkoQdDAvVCwr4M2zpvu3FofazbAyBHCJcWL",
  "key8": "3FZ56FMtDU6xLQNwCQDhraVboAVAvc7ZUMPswEhQewBqyhKUcwtxjkF4KoQL7oDZ9iaTkpdA9ij92Tnd3UJkUqfe",
  "key9": "5PU2F63gEEuqHP4iWXTNaaH2j5Tur54hV82VDR8exkL1WhvRpJGBR7LiuXBhLSF7hmKQuKscKHsU6MSwhBdHouoo",
  "key10": "Qh9CCcgDEDbiSoDGX8XQvi92CQWnRMqRahKuMYdERjCG19v8MzEKUcQSJGZ7fS3DEm6ez2Eko9ktgYu8sBHakvK",
  "key11": "2U6G9VLeMTGK4g4FJkMULyGGp9R784UFNDnZGW2xeuucP8utf3yv8oUE6oQSmJ7gQ5a1kuP1NEHozfVfZ3BJ7fuR",
  "key12": "5vUKrLraY4dsLM4Axi6TiS3ZaCuLFgVbieqPBUaosQSBQt3iGqUbb5c6PJbdAbVAVJMYctgKorbjwBQYx5WJG1Ht",
  "key13": "4AmwjDX85vy4udaoAdjZYpAm2BHmyi8LtwhcRR3uTDUzW2e73gfYFJ6GvAXBg59tEQzwBinXr7fWjwfEAf5zvP6U",
  "key14": "2BiFCGatfbFQuFhJ5NoauvRPL65cBjCf66LBbUWEseqemPodwiNANBAgJfcYrUi2x6xW8rLipmopyvHJkGChUi2V",
  "key15": "8C6qf5QS4oPCwzVkF5sxk7mSTWavpJz37KX51tXZYoqx4N2vGGhd6kuhtzujG2FmQqXDPkkjTwKp3UZhsj7qgZ9",
  "key16": "3J48uGJv5bRf428idzYDiD1Nz1sCkmBpjGhoAMXRcvpsrRKcinG6s483zesuh6yiX7AJHR3SzLzkac4KBYsrDf9R",
  "key17": "2U1SgskdMsBtsaSwDcwDDwzdEJXAGfnFJJRYwkJqkGL7SJD189avxpqymXuJxE3o4gmvJABFC5VzpCZ9cCqSL7wU",
  "key18": "5mcLvMAd6yvJbqVzheUjqJBSTcKDo6G2AsdpE5CB2kYtuDVibZj1XgJtkJFPTSWL33gX6fPw1St5dTFKzSQ7Hrvg",
  "key19": "GUZdcJG31c3cfWC5J585u4EoJWEfSzTL2EUckgLofTRasy7ssQzw46qyXvSZB7pXdKKRayLRq1bg7BsjVythZvu",
  "key20": "cKcKTCquc3op5PJHGAcTp2WqzPimRRbQBYyvA1jScN2MuWUfN9FdWphAkVxidj2kne16K2RfYKz56YXBJC7nLtV",
  "key21": "2UpPVaPDDn8Tp8JX3MHu96msGcsp1hJNJbEYQuvVAagPmVu5c8aK3hF9yDHQXrpxZcofTevWRNCmiSqniNCUCwrw",
  "key22": "3wJhpqYwgRpfCAJN5tmGi4eZ6TxPWo5VejFZC5rnC48YE3TtuKV8XFAKS3qJJjdVizH6vKubWkn4Avr5yXr6Nvbn",
  "key23": "MPRjUVtzGm1DMZwQoPL2pqiuqZDZAwsrC1eX5sat8Aajgp8Z62ymFNwNKhaN9QPrVQ7C9Yh1dP3CHdf6umN1Rbe",
  "key24": "2puHkpC9QsyqebMCdTbEu9NEPUoX9jBCcpASpMTNd4UFFHrAV89fu5ZEHmdGYTaFrwTHthuVGWn9YKobHHE7DECh",
  "key25": "3G5ambjsZNUvKMJTvuDJcpMzc2FYP38y8Df53vopcAHqEZRFbaUQupSnCpDosNN7hvtq8KAjBjMxeN4jmjk61bu8",
  "key26": "4BqshJ3MKeT33exMkZpzpU4YnVh1gjueepBLGbzzf1HsBTxAFfPgbadzciMp5H9wFJ5Qaz3Ai4ahPSVpVeDznVbN",
  "key27": "5m4FGZ8tVD8rtXUZNMWE5zpXdWTkZ53ZPjf1uivKotz6HbYD5HVmbMk83RRHaRqCHhpYDNNYVLGjYFPB3Nkk3C9E",
  "key28": "2gTe42t2EHRs9jJLW1UykVr8hf9HpqyjZiqg9Ey15fQCrZwcVKiHWA1KkgwewskapHHrGyekYuf76i429sd4UsrR",
  "key29": "2BQpdPjGnZRZjA8gTo7AAVyZk81E2rojxEakNn5moEhoBwqyauJ5KqYDZwGrJkY3xPADnisUDDtFkXSrhie82TQP",
  "key30": "4wqvCUWsYMUvd8WBuzEi4AkwD8kv95k64SpcDKgSYExn6QNi6v6rATb1hZjmLwmpKUn8iSPgdybgNrzSxor2rNcV",
  "key31": "hHXd1Vcao6Zj5KaWKDcyrcheQtjUvxXzf6aDq2PoqaU6FLz6tYEGDtTEtokTQJwNgSDrqiUrdeZEb9mYK15CKH1"
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
