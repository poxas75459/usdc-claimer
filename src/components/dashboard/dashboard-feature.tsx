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
    "3irybBrUfXuv719Vap65GsQNrusjkx6vCfsW1GmAdwDt9PLghb8Ys3a35c9EoFopTC7mPCeSEnV8gttBoW3GnRUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K5dzZ3WanhEMRd3iBGgEZvkP8ZtpaqKCsBD6ZAHmX6sm3TmX3rWrCfVF2HvoLgoR2QgeUgjEkd8nbeyKTBPb4br",
  "key1": "u72yngEftzaHzAZDdvAx6QgroVc9bhEtkCpGMHUvoKxWAJZfWJm6M2a2aTC484WNTiC99Zs5CnryYSgdxqbANoG",
  "key2": "5eXhmMsGwDH53vyKMcwn7HNhpdGXadrWNZFmrsKeAdMLnHCyn4GxBH9nNEMrWXvVopzHmLgFst8QnSPtV1oFxmNs",
  "key3": "415XX78gT9oVp2gfbZgKbxxL5JT2ygmUGQYWnuVCTSM3qdbUY9mo8W5YAztHbPBPMaQpzKZo1qTsjF51H1gkhgaM",
  "key4": "4LyKFiDMF4iscb4sModHh9bi5RRQeHgBgW8Z6DNXW8P2zUu2itukCNDT3Rc8mQcHKH5fsDLM6fYQUWNhFqZShptA",
  "key5": "4vJ8ENE3y6Nzwh8DoCd3bR1ZqVnMehmfrjRuvi8esfdzsSGaTEHas1u8Tv8FxKHeAzrpzyk8T2EFcazn4Bjc4t1e",
  "key6": "DxL7esa6eBeqSpeMsoZd3xSDLqo9vVoPunHc7PD2yqu2YbVFKLCgHi3m6Us6HPU4MQnhchPq14yp5xiod2wWHaG",
  "key7": "v1sDmteMVRCtctUd5k43MAyHNeTcaeWTV58o34P1QmbGF2JNAPZBp7k94NdiwinXQUk4LpQZj1Tvet14g6dSYUt",
  "key8": "Yc74PoZPyykMG6BpDeW2iGD27ng5D7sDBKGxYf1rU6JWXvPbzEYCVZbaDEUW6ASxjvxMNe25ZMzyJikAroZCcJe",
  "key9": "5tiDeA9MXDYFmN6Dy7n2BTD11CkDNjhiP7a182ktfgA5TYaYSpNbnPtUVNqT3nz3jQcjewgvC1eaGDy1tbTq4ia3",
  "key10": "2DqzeD7QfV1Xvyhv3zLbtN835WvV1ky8ncLGWtuQMMfy2PiqwkCSdQS6AWdyqLoMpYmu7LsjbuAAuMoBBTiTTkmW",
  "key11": "4QzyEmhihNwJRDb8CDhxqeELkszApRJhio3r4MBhwU7yMtdeE9Ya325duDjnSbCkeR9ZoArF11XRLD8b8h6sixCZ",
  "key12": "3TzZCkzZBZkzY1F35o1C9Cr7dZ6Qc5nwXgy995jdVUWdR1Zbpr4Etppk1wf9Q9VpoS2uyq1yQawk9fd7w1159boG",
  "key13": "jh1rktxU5JBTxm8agmTa9pqny1yQVAxJp76EfMd5Ni154DnTGjVeoPL2a7NTZvkpKG2eGJeYtoGMUbT33VcnXk2",
  "key14": "5Bx4Fd24G5N4niAXMWvrgb2cWsMd3q2xMEk5cLPewYyzR7BEpJyWnwsyLauiBpmRY3JD4GCXxfFcXJDs2gh327WH",
  "key15": "57SHan3gzezACG8nVLpTtdHk4wAwah6gTUSCMPNNBxGq4V3yx8eygr3qzkkxvjHdn3zhV3o29Jg82voyRrVGYmwq",
  "key16": "5mMCoMVeMc5Hb5MemRqLwfhB62Cj2ptYgBrcdraoZwqVS1aPcScdNRYeoTMsfVngPHBhuaG3kio4iotYbiinRJyw",
  "key17": "EJmYmojFaBwxLJceyRzeELzJzCaULk5g2voQxdh8zYH457eHQcEkGg97jAauzA9K6hQDEACxatZNQUW3XVCoJ9h",
  "key18": "pYUGpxrEjZrgcKPJ2SK8AGJ8mhWSWfozuzQEpQ4rEUKbbhy8QMFxxbwKoqkMm11SZLR2zWiXm72byzM4V5R6DuE",
  "key19": "1Tn1iWjMfFLquCpepurbwZJ7V15iwEPQdrFg1fZD4x748LAykLBNcPajzUxrFTYT6fqPCVQ2zeDi67GURtESu3x",
  "key20": "5L3F658cWRq78yTi1LYrcP8eUsRV1jyxvGSkiAPb5oa2owBcgG3DKDjSU65DGhsdpdspXGykrQPRwocFPdu8gUaf",
  "key21": "3ufsaZ51xdr2LQAPtuJw2qE1MscqHY5py7tjsuMuSq5mCSjtFHi7N1uqLNAGQ6kmJLU5kYVPAYJu26NXyXrFddQn",
  "key22": "285eSF2x4J7XfaMCZZ8xUyRLjYFqSyrpG8vb6iXd1TUQ2HvZReHTWJindk3Krrxaqx5C253DLmpRVgYgeXXDHvqQ",
  "key23": "2Pw8W5sSbAUMCof7EcKvH1BVMhRQsFKqDV1ZHTbR7T2oWAK7bV7NrhGNAD24AhoSGmre9GzoezKYwTLF3vL9FhYj",
  "key24": "31eAJDjJ8bm9ZqbyMRtHjYF7a6aqPaJS79uV3mZXje1Yyu5ejqBhcCv3FwKDA6zRW6h9eDdJo3NsBq8r9WpvuwD3",
  "key25": "27LYWesCnxTeDAKp6L39DVMRmxn9Ryw9fUXFipY1hyKSobmyfzUewFnZRrTwYxBMDhc7ntKXHuVcRyoXDDgxZPMm",
  "key26": "5vcfmeRpEgiZmcnZ9PvED1RKKUAKzgpUVkt2D6xgifsFP9pBaT6AitnZjCnznpYFJVwKdpEgPoy2PQePJmzduuJN",
  "key27": "3Kv2f7qi5T4AGaTuv1AWfn1y9REHLze3CM1v1PvVptRqB5G7aa7dR7qUUmrFZVLQqiZSeEM3M9tmfDaQe8t1yhBB",
  "key28": "2gR2NMoZtG8kaM44gnVTt4F6kQgitQ6JRonQTf6mYSHcAVsBukgVgwcrj26hJr6m44kZNwj9r2fcXnuoTNee48B5",
  "key29": "pyUv1DoqkCnDbPBx1ZyE9eFYpGru1t6CuaUauuexCZuuQsvUC44X5VHhJbJjpmZqBwyh6qfLoaHnbXJwGopeA19",
  "key30": "5F1YHWbdksScSr8sZnD8LQVKKHNyrL4G6BHnqfa3LyfuyEfMkUWko6rBGk7uEVk1iiC7ioL28ptJUJP3tTBf5L6v",
  "key31": "214x5tkr2T7rKHde8rcarUVYpL4y4FhqvPMzp6gHuNK9EJCxjZwfUW9xH6CDnHpHx62k6tLTSSwB42peKu5AdPh4",
  "key32": "5W2FVQkxnwr9N6BkJMTiuLubxfECcCTpBiRRat2DHDfZPaH4czkeFiUZR2CK883vyWsNGQFVR68BTQrBRDLNapsx",
  "key33": "3pk6xuGnEWUmmmhqVE4NV2hPL7r7kQW22KDqwU8dHSYrjcL2CGHL6FLZYbmP28mmrUY5QWWuve5gk3cJj832JtHh",
  "key34": "2Q3PwLjRWij4tEAyM57Y6AB9mXVnBaLEiBf8feVAkMzGTq2sPFY1irMe5LRCKqD72RnWwmVxg3TGb2D9UPoDGDAJ",
  "key35": "44NkR8aJq6ecgeCSKhfhqUXJeiqV5xsKXe6EZM7a98S2nK6yLn94RMHb7skeBxuvkLPvKgbgXasNKtm6iwScWF2h"
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
