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
    "BmXKNdBLitrsQkXvkPN8zrfhgto23Z7w9KM6Utdex2ugQUTuHG4pNergsTJ6EBnH1FwiSLk5hNyvTmsqWdHpkmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nQVaTGrVsF4sohwCcXNskYXoFzZfpiHBbBPgm1Bf1Y17CAHoYD6aLAaQpyjYiTDX2dvHUDNxVhrasCgjcVMxC52",
  "key1": "4cus3oB1DTTERbGkzxaJwCMh82zXBdhFKNoajdkdCzeYyN7Rn7Y6L3dHfo16gnnLGJjFYkazCVMiPPqQvsQKXW4s",
  "key2": "2VwyotqVgx87orJBvrK4GZmk4b8VdxC3T69HCxkjtEsbCktPT9y4ppX7UBDRmtBhCutNAKspGL5facj1zUV2bAnf",
  "key3": "3jdWhKXp5cwjxFzpTDwfHdNCyu4PMRGdZLNiJmAkSbtsoig9YTbJN3q7zdATjY4gbLAvkU5RRSo5hyfLyn5U3i8x",
  "key4": "3nx3Wf1UKGViEqmNEh5hRfYYDwqVEjopx4YnNgccErxYsLV52WM6126Gry7VaxuaoFXmhqbcZUJmSfxa4h2PJKFe",
  "key5": "3cAKgkaP3tmRepeZfjmGmW81ud6tWxDW8BpshuKMcDqNN2kHpwmj5H54dGYr9MKDSwwmBUFkBrnWg9wYyjaSaBvq",
  "key6": "4q881bTYCs6jQsjzjWtdehCtcHnvXkP8q7aLBBsdz766d3rvy2zJ831jdxQQQZgPeGa1vqbjWQnFNrN6QyBn93ds",
  "key7": "4xrRYQFpvDSzidGJXHdepBDNyb21zrByJTdyKer8jNHiqFhXmd7Wb8b628YdypnXXubQTcYzVe9XSEGR4meMpeFa",
  "key8": "5UaapJquCraC2bcSjiVqGyrRJk9YteJtknuTagJR8QMCv3ddxsu48W7yxu3g77UN9wCkhhtmHPfE2PYi6iwwz1ek",
  "key9": "5cDrmLFt9UkyUghX3sjYHzavdPzuhZM8o6cQWTFFrWhDkKx9Sio8zrAqDQAqdPyUKvzbhq5uKeHBjJeNrF3GP33U",
  "key10": "3Wc1Em9T7dZk9ngwEeABhzgkeupgUhAD1ogkRJbTzQJyQAxQYrebZob6BJXemD976JHF3zzi6egnp2dBJ767BKG6",
  "key11": "5HRJzqb8zDSpL1hcrjooU61EodvV7Bka3UpMt3ZmL5Qrrwa6qgUzPJusnUQjZdLZqfsyoaaDiiqTjyPH2SuvFtYd",
  "key12": "L1GN1gKsmLfvj9oxeY5cv8AtxN1J9LJk548X6GRBh2mQkYK61gqrer8m4NWboDFBuCFNZjFsR266LnECySWmHzU",
  "key13": "22vs1jQPXMfsRGD1teSTeEKFANV3Jopyp9LkdUi2bYcaZXN1khYdcH3GYMZBv8LhzkvfNdQhVBLQ4sdBgAozQ1Gr",
  "key14": "2Nn2j8aoQ6RuYvvfFNX3rozydA55Dhoo4RH2KGTkQipShDZhhKAT2c6PgdaFKqV43VkaNmFkqpSH7Mkh8teVLVXB",
  "key15": "45ps3pYPjnpVQzdZfJQepq5UTvdHLtiNdDSQTh5N7BFU5qEphh9Jm1h6uUHQcVimiy5KKuyLACTNNEuwwF6r7n7J",
  "key16": "5utJoWJ6ppeNVQiNuoQKsJ7X6G2esM3udTjHWn8DiRBBiVY48J7vHAa4vqcVdM315CQw9FTKs1jPWpScojZ8Zeze",
  "key17": "4YLs3wxoAaVapkFPzxHKpmXCC7MEnE1dTd3p8b8eUn5XncbphzxkeEeCPNs1g4WkLC1PPKNi3ogiAiizqK4HkTf1",
  "key18": "44uYcybMQbZAxmPrN21ikHsiyqHgspiCTZ7W1SPVJy8bwo6sQe1qRcAJEZdsFYnSc9qCSpDBU2GgVHwFTpwV69Me",
  "key19": "2uSwzJU8oMn6FMrpt4UrhgXE6rVpwL1eqaXVdWhdpzL2M67yzLVGnaM9aAhXu5V4sHBHVMe2dyGCxt8pgBvQPaoR",
  "key20": "5LK57suZn9YaN8WeDp1PeQ2YZLZzzVSuyvjEG78v5AM5HhxBKKtwqnuyvWAZAXEvUsh34tn2GR5ejKzWyLJF4ebq",
  "key21": "CPEfmi2BTBChPj5kHtXVkNMcd3uB1rQk6wtc1HpsQULRe5tDWVUkqNEYbovY7ESDcsGxESEMtJLYbYxu3bQhBQ9",
  "key22": "VpV11NpLoTxDSqzQX69shgLTU9GKKo2Vf1MTg43F19zj1TCe6whuEZCdaGEcbH2UKry1oPez1gXgz7ymfjeVSJy",
  "key23": "Lmya1TAAc5zjx6anPBxfj4C4dAWHSrYjgwpY3Cucfi3b195BQ1Uhuhmzx12hKTtEkjjsN9cQxJjdTi7aWyT2hod",
  "key24": "3rooFoGFbwZsTmbVDAm5PbCDkzCvKjZpPZ37H2NxCcExBEDyupiQF6EwbWWQKNz8RaY1wF4NqvUHyHnAhhz1f1FB",
  "key25": "2dg2wuR4TSyUM4GsAiqVvf3i6zN2R6X6UqotTbvk72tDak788HSJZPU5ZgJZdC1CQw4rLM1iBRtNRWNvCg2B6Lt8",
  "key26": "n9cJsQDcowJuhLePHrgQGgPdhztCeAUWpjmsyG5WrwgN46JyhZYUA81Z4nJfMqRRi8eLPG57h6VqL95xSoWiFwt",
  "key27": "L3jG4DYAgkrkSFSgVa31piBvbfNxT2XNjizydtDhjxSHs72y6HWH77gbE9VG5thnSJQTRduRURxdSDr7DaMi26r",
  "key28": "2GToDVv2cmgqVUjHW8uceuabwXRSeBTe7HiPm32EBf727trEkUHhujvCgfychKvxZPbGUnwdjkeexApCuWEb6VF5",
  "key29": "49v8BJzpodAxMShPXMvP2Bbs5hheHKUxt9Z4Feq1SkQbykEdviRtpiFRpjbcxCqYeQzEaB2b1Uf2frxLUnYn2vbd",
  "key30": "Ax4c3UkbSjD4jj2XTxEWC2bzPmbJiocgiAPPcjuBVhW9CtbWdUq6FRWRdn6huPmkgn1owcHexDGSYPQT9Qkcn9Y",
  "key31": "2jTYhULUNmSaawFxRMu9xCzEkm1CkCmy1TAwwHMQibdwcJXJ3cjvxsE1B688mAMEdRWPapgSjcRFugCgfM92TMCG",
  "key32": "4F2dPUqMN4PBAdhXSiR2HuHUhpMDu8Gdc6gRNPf57cZmNyYp6fgrPJJUGeStrpSFzT7uzZtXSCDMZ98oqgccDVUA",
  "key33": "5tsKqEAeY2ZGenKyc5X9oiKYHCQir2bDAoyxupXnT7XbRGxDY41CzKEKJYmtWYBaTWBxqz97hhHTxbt83nLAF7Ho",
  "key34": "5YuPb2WQjmo62VN8WGDWUsSeowfwYEHCV8QLpv1ETjCiLx4uSCFok6wADZXG4W6ybGQtfPF3GnPxHTr7K1Y2NdHc",
  "key35": "5Kr6SMXsbCa8wMFwQ4HAWyepnbeLj7RDaWggofjZx1ddWbKjMFHgLNMCWwVe8E9yb1G9hXNM1JCsTaN5Jkha975S",
  "key36": "4AhS9HLrxA8AomaoZPFvWdSZEPU2Mf94S9C7VNy5zoxmHdtKY2nJEBuVKH4EPBcGBQogjhpVeEZDbdE9f8bqW7Sx",
  "key37": "39rAL4AXULxWFh5W1s63vc7yVw589TWYwe8Sky7ZkDbURhKyu8yPSAhHnay6TJEcwk8CWAuvhaY9PZa6xvt8mApJ",
  "key38": "3zscDE3Cr178w3GCZ3K6tzHDnd7oWtr4r71CErEEzL6gfv2aYfHG7ndNeLPFxqrGRWqBjHfMDkd3rrebkLx3rMSo",
  "key39": "2HRyDAiUtMigaayTb9kkQpNF4V3NQbVAXgyYdxavB9LZEeh7sDh2F5k2tVmM829ZJgrMn5qVmuNZ3XQKK75rqb1k",
  "key40": "cWoxEFHduSDFxghEh5qFNfY1cHfRjceg1saHuHn8rxhB3wWHt7LwYWV6TmuJhAbHXtd6FC4sywzzaLoYxr8AC29",
  "key41": "62aHVSXJFQDAu7XxwMmjo6yzE71QoxZQbCnUK3nht9yRuPQsHTH2HDovpXqxzvdXoiaepf9EjKRsQdCUeDvjS3bR",
  "key42": "u83qM16Ab9dFHTJyttuvcDagZdHEb1yG9ax3oEjEQXuk6FwTVkFbWtJhwza5QU6LGwc4SG3hB7tMxWBfkB5Gj2q",
  "key43": "FtoX3AhUcWYn7tgJEiFAnfnV9CmoRSc98HGEWZ8KSbdnUzf1w7nYG3tdNECKz1tiSUnP6rdj5DTnpecSjN3dNK7",
  "key44": "3zX5ECWvtJKZTVwMLPsimm9BuQPe9adHKV9iptqX7ZqQLBbT5Z84kKG5JUB8ZSgjRGKVKDekUtN5g4s6NfrhyEap",
  "key45": "2g3gAKTSw9aAsoHN8sd6c5x7bHDW2RWoRS53Epnhe84df7XdUdn3fJ3BWQ8s4Z8AMjU6hgaq1ibYUDmhcBECUjKr"
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
