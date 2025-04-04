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
    "2nG8cL4myDrtqbUTZahXAhtsFqxDKdFY2nC8f9ByEH5oREXyX2HQiVJeShVNyUZTNV5xujbDDRJeLyFMDw5Sh5Ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ntf41JCwmFXwGkWSibbSdieQb3GiyfR5ayUN6sDzr6nY4P976QizZ8asp1LQQ1YepUJKPJhAFz2qnawkeEp7mVQ",
  "key1": "4vZxxruD8TxX5ktqMefAGV6CPCKtArpS2FHrXjFFVxWgRtMCqoiaB5zovNuz7uGVa7zUPvWxAtpLqkNxV3CDH8WC",
  "key2": "3WpCUXSikH481D7M1suPVd6RNnrbao5np2ttz9GMJgayWX172jWmRiHuMjBQgY6qKYSzitHYoNYwT6bCzLEkaMhc",
  "key3": "3ZAJbNb3sb54JsZHJ9tKhoJVHrW4auEAaGMfJAo3MYGRme4bdGMgicZ7PuxcfZrUtoHFM12ygarShr3hrRvxFCg4",
  "key4": "3bcGkALwwFJRiuhKMEVRLgLuqzcmyw71x1NM2wLjyX67BBXyKjvUHLBNAq3RQfeXrFfF8TtxAa8CRfshf3z9gwWr",
  "key5": "4MZmxV8pMVJ9Hci6Rexr2W798YhGoeXMsoXdsjgkkRANgLDbaW1gafaw8dRPvzf2BjoUqe5xURZSDPjsv4G4F2Dj",
  "key6": "24Yy7oho1c4BnwDyf5ja2ngm7xVMpVigBKTD8dtf6MxqpBK4s7S6wXVdZiHm3WatKBVFD1Luf7haeoYtwCoXzDLz",
  "key7": "4yAL8UJwy4w66pnqpue2bPfoUwdFsQdy5zc9urkUbAzuBS9PZg4uEabL3zYjinNpyZ7pRc2vVEEMkeefzzvvk3bc",
  "key8": "2BFyJp5gQDARSGzKVDmMnni5e4xR5nzGb8SAFR1t2JjGgkds4iJt2vrNagNn8DbtndKKasTxbyz5JrKL3EF1Y52X",
  "key9": "5QSrFxpQ1pTLkT4tJqdSetKDQYBzEo11VGQVh4KEX3TguUsf2EbmGNNEr27SYQxEF6JoA4qSYrC7fF6QJcbYg2kq",
  "key10": "5mrDwmZVGBcUVm36f9TEbL2SEjGfL52tojFZAigKYebufXqCLAdsYneMieooN3kR4u8xbp1YNGgpozrZLfg5n4mL",
  "key11": "21L7EFAFSmuNrwGsWYame9UNVXX2sHpKaT4cDMT817ub3eJS4Vib5SvKHWj2QM34fbN2FZ9cUDw9zE6JpN7UtAFx",
  "key12": "5YV1c1uQLRio72vxCmzt3UPFeA4jgMq63TBLLZFUArKMkc3aMTvsNSy45jqtkYVoneUF97hByYLDeUBdjQ3dfteM",
  "key13": "2PC5MeuPS2xBu6RtozCMUwRPz5MQCqsUCr26VAWH9JPZug2QeTSzjCDF65zDRN94hmbQF4s9jA3Ld3obPtDM5tgS",
  "key14": "3mcjVAmNyEdM9YbPt7Z9saNuwqLK1iMoWEjULkxZTHmBKt2q75VU4ZGfgVinkZdJj6irjrCoqbB1N2menwfj5XQL",
  "key15": "3ksfxcbnRmyXpkX5a73C7eP8PCf9dWu74GbYDdPHTCQiJN7yotuR7XaoN68pjdbu8B2oAdWbfunikbHkYY8wSsHE",
  "key16": "BTKQ6yAmmjC8WWS93UfLkXFddAstLEBcKwFCMEaxvqyegoH16JLnKDqCVvUqwahkh8Cb1f4nU3CJ9c2SFoYJj5b",
  "key17": "2XME3io5DAjYfyXRdYJeXBUfo3dBDKr1v8vRqoPYNPNR2BpAMHBjZG9SWpia1tfskeUF7XbXmNh9XpyBLasUe58U",
  "key18": "2MBRMSeTZtN3y1NVATvZkn79sKM9jsipFfUovDvFNpKhZXYWjqP872r1MzGZ8pAeAW4uUHj4tYBpt8MJ6UQQcVm9",
  "key19": "3SdgFmMdpdidpPfSwGsFkLijeEDobJ9Pzrd8hyL89FPDvENhDfvPKKdfNa32VSCMo1pxS64HaLyBcHX2jkDbUSrs",
  "key20": "2hQzSzkswXNufyrF8wuKGxpKHbBsggS4yeXj7uYWxsAez9o1g6k2r2tmWS2a7g7eiN5j5joDLvFth8RHX34kV4qf",
  "key21": "UDN83dh69PKDvSFeLW2kZqWmcF13cwSbYMF9vm5d6VnhhzFYrtLBqBRUEE3Q2tyNyfcJ3a8r5uQMxPP5fkyZGFY",
  "key22": "2WdYaw7AmmAUJycyJpKuREnc2w9kE9Nq7Msds9hambn6pWUw4iEdziW39RgmjBeMkYytTRhWj8wCjaJir1qA1464",
  "key23": "RHS7MgGpUCdSqKgPtssNYNCQvS3sNRSf3JsCK5HqgDkggSgvaz28WnYtvjVoybAYhmuXJdw22WkKiSSmadUkSoE",
  "key24": "SrKKsg2n6v4eVLAJBRwWVUGg5YSZKPn4ymzoimWZ3ZmB3ow8MAn6R6Nhxh3r57q2RxCQNmRGwnuw8UxCnh9M6LW",
  "key25": "53856ztsMu3x6oGBRGDbtgwvXYfNucVJsmmXXvDfZjwZivr2vWRkB8fsznvtK5wsnncHrGBr26NwifTSeq7BMz9h",
  "key26": "571YsSK7UsNJ49n9sLPHaDK7zQb2ETwL4oLowFx1jiMBXXhpoDci2HeCxSuZ7Tf8U7TWJvzYXe5h4WexYhw6EqXu",
  "key27": "2hMMkgpaSRPGLZSvdKgQUbFnvd9QcfPeRU1orYygSaER4tP5tyxipPgVn9A1npDhisBiF7AChWw89RxupxMhnhta",
  "key28": "3ceza39PfPfxfkSg8FdCz3fCZSD8fGH2hFHnHW9Bev5ZpEe64p7DofYjQMJD88HXzfQpUxWLP6oExP8mKN9iLJGS",
  "key29": "NyK8Cv79SGZH69USkxnkDN4RmjBJffFXS3KBPKJEoQpFSqYV7hixu7HQ42bMR4bsG4tbTLmNP1U8tarZf2YWoik",
  "key30": "6C84TXCDswUVPoMGZZtVWB9p7azy8SR7HQTpGd7XaDvxMY9cb1qNgJFrLau4AutdK8Kp7m3N9Pn4zPZq4etjTZs",
  "key31": "3WFd6RrTAM4GXAb1H1ABjWiVtc1AWw2FVPF3sMZzuu1GVLA172LE5UMDtsuoeRWUrVnHfwXiD4PtD3YdaTVjXVXh",
  "key32": "3BR5AsvwpPm3vU2p75MgfPqiMuVsmddSAhiWtQn7HHSoKttHrYg4Zsar1rGrRRUGaQs8KL1jE9YY1YpUsTfGj7uJ",
  "key33": "4LHGyV95M7hU3CEAh7dwHQXnzy9JEGU3Y64oKKmncDrpS2ErqNMqPmJQw9vDMVDUDE5LUzpR61QjiAyxDsgQWhcP",
  "key34": "3gX3CyFVRHuYyDtTx8AYxSfx6aPLjswex9TfhxbEq7yBVWQKNEtFhvyoedJCCk1sfRnLtdpj9EQA6236EL2GMbqy",
  "key35": "3nEKjxiQbmDPzBoP4G2oFtm7hpqdCQ8zU8qBYJ8StT3L7APY1jCSKtn4KWjZqXedmRK1P7sgeF6Zpa5H2ZEpwHbJ",
  "key36": "2awi3F4Bet1zRznvi4VxGBqn5hDQ6dgXEqdmPFfzaSu3H7wMSNjJLyNv2r5dtef1e53YAYbBHcmiz26eWLRHLTjp",
  "key37": "63BbLbpwZTnQFkTfEXMfyJQBFBqM8jdr7XzK5euhYnii7gZ9jGEumJZtzpx31539vcFg9Rqgstf5FWESjkKQkWU1",
  "key38": "3tBgu9D4nVEm4vUijbkJZreSCxWwYeohCbs6eNQLjviE1hGpLcDyZKzDHfhxshFUZkgYKDwdbnTcXMW5u4SB5qQp",
  "key39": "2Svpr7hGs2EC93KWrARdKgRnh3qbr7ENBaLqfZg4m4U9JBYRSjWAZ2g1zQhQcXBjHjMonRH2T2q8bMukb1HuVYtW",
  "key40": "4VupiW15z18633vMSsQnL2gdtXf5BuDdgVvrtjaposttyHGenvujszvXiRZXKy5UTgxYHXWbTm75zSHbrK6LsrTp",
  "key41": "2q2dx47WvMoHn7tSG8sTCYZ6HEoqgQ4NpNdfngkLhVg6EjXoN8N1vFV5eFPxgLZgka9Qe81WmwFoT4zWtzr3DP8h",
  "key42": "4E1XMQ82ftyFtZeBUxaACXcXkQXGeVoNPxo9LfHZpMZBfRGvbSHiUg2q6NGGTXhGCCRh1dthbF8yiLqSSHeUqEXD"
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
