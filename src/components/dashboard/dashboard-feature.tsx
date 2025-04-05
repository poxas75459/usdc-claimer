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
    "3pcn5gD8VL2BvNoac2716kC4MuAmV6NF6R9qNZQUix71EXhzinsm8BgtvneiaQES9V42sEjFnd2bt9gqyKBNmtRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "587GbaZR3aiFePBiqnSmpz6Gjve7LMGpPtTffEveAJKXPT3d9babUoYbmLdwAqjuBbEatkgvmmdbYWpt2jK9mxfQ",
  "key1": "ub9mn81taX6uh61jsX7YGzeSLoL1eh9UKJhkdgGdb3DRdTHv8MTqYnA5QYa39gP34GU8yFevxuGzw1SZd8psSyL",
  "key2": "3LuQ1zUgvTg2ByNveKn15LYMDZ59wMFNpe65jQRBejQxgn9c1roCUaCjxe6wRk3kf9n8c4DiwtzeCCDf8JoryRiC",
  "key3": "5yCyFa4nCD79EA1JPyu3QN5hZwfUS5n6g2735UaWnDjk9pnF3m4yABN4bbVkoYfWJMTn91AbZhVgKMk2QiWdcCxo",
  "key4": "34GdrKDTdr5m5vkgx4PgZJfUJEjTgTfckcMMVXNYizCt6kTDDHseEgDheWiqPDEwkfpVKjUfRxgYQWFfsrH2UJA1",
  "key5": "2FKGEXoeDeHwGGX7Zo6sHaXJWK6GWAcbtWn68gtfHC7okscBS2hNFo68xLYvYARWNS2Av7CEwH2PbEtoVfMq1JD1",
  "key6": "c3fDKGtEXgAF55E1vHNdzFJG8RLiw31uaeYqkTv54UYpqWZtAQS3e8FMCbBrkmxYLhZjhQTJfpMczFjyJp6Czc3",
  "key7": "3gdmv86W4NMh3GfuPekU6AbDaWdfXdhgyC7tQZRiXr6H6miGh7sLJw8jaznufRRcSivdC2vu1Zopnmj4EeDTjrMi",
  "key8": "2qiYvtp16rfwRNjmiuxfQxgD98xTJk3A8j5aT7MnzScLUGZ1bxneTCYvo6nHsFiHqfHimhzkXhT6aesq8suoCunY",
  "key9": "3rr9rPj9SNhB9zeRiqopyJKQMgkegQXxeSCrD5CiHU2aF1pjxvq9xP4RC9ggctYDLiqsX4nG8w1jgF7Hxd1khE87",
  "key10": "43oFEQaUQcpVnZWTqW2bqJRwzvfbySPnvEMK1Yzrx2parY8SbFbSaigLBP7tdNTTbZWYgunvtWeewQqGfesV7LnD",
  "key11": "2JW4gRumpqjBVJRdeH4A8JY9sg4rtMHmYDragTq8h2Jt7vKt2ZcCmymwAk5GEPyG37Q6vf1bUaRvpT3GrRJWTTyR",
  "key12": "5Czfky9GcJFx6Xn3UDYZDSGw9W4gTQSoV1dyAuJ5ZywrmiwTvPyCqYZVJJVrskY2T1mARMg6oVaRyA8mPLsLMFa",
  "key13": "224hnDWo4Po1UXmFarSqU9M7CLCjgRNr7YyG7oGrYjL4pfEvFoac6EfSrXDi9W9xgNd6M3gB3WA8fWAtwCRU1KMw",
  "key14": "5LjxT8gJpGBjYTGmBKXEqQuYhRR4TmqaToaY2AwWoz1mnTYwyttyiwconre8cMh4iEKbwBHgbHuP9TrTpNa1QhAY",
  "key15": "55T1zjfbHvdBgFEiuNJrSpGU5usip4LWtuqbzkjScXAnF6vUTDpjnfbDh7DzzZSJtM7q5NYnxyzzY8BVvUmgB6HE",
  "key16": "4ciBbBJ97Nchn13bmL9x38TFgM1vQuiab7kjRHMs6DfRZ4stbB85tn6HSc17eywDDJWjk5hrf8WbmEt94Xs1qay3",
  "key17": "4NAE36J1iGtZtfcrWfQ8dvdwo5PnCmY9zq2wUT6bmYyGMvfwKbHzPYnb9f1BuDHL5CNsRwTJyioXN59mL2o6CSqh",
  "key18": "2U5on2BuinzJTaEtiYrrkhpBNqvwyVAK5h6PdkK2esDbQr8STegnFNfSEBXgJo5e42ymyKQskYM5isWxJKxVtrSq",
  "key19": "4y8UQFS8SrzBqSfk3zunyx8jx1kmtn7wAbA3wCdGZ1BtMn38xBzvJrZAohP3YyBNZadteLEkgNpTZ5YJpRd2B9vH",
  "key20": "4mZ3cMhg5DhDn78VDj4qtdEC7SWCUfX14NHGDQ4ye55BJ7eXTxp27yJ1XJS6iSVZrPAqEh7yLMzHB2BJZhB2mWXd",
  "key21": "Jf6rUw7rzFgF97zcuSUpEhzbwmnramdZafvtaZXpodxu1fdpFNbXaGDknwVncXqUwk89z69j2WL7qGSo6LeK5KK",
  "key22": "4hV5qGu65aHcRvDNr33meatuFH8gog5SaP6YVLdkxSaZF1uhG7p3xWm4PuRzdxmuuewzLcvdPudVNswYKdDxvoJR",
  "key23": "vpGksS9sBZzMojFtCyZUgrJ6tE63mFSm5SMLCG4UtQMGVUm7mfbiggSTHgsxofwdA168Fhn9nJMuCLdBvLJ2Fww",
  "key24": "665aFNEVfaY8sdv8qznSt8Sq9sCk8Xm925B7XNNeMFo6ZrvTDVhLnJ6u5WQu2e2HUud9XkJKEYw4vchicL1Diqas",
  "key25": "k9MdAofACtGewywmRhij8bhaXAMuXCCkn8Wbh3Caf98zHuTriU66LfEMYiYeDBM82mtj6YYw9JGE5ZvvHUK8kYS",
  "key26": "2Be8pjd4ifNCtjfajXfy8mkdHusiWnpqBCs2Q2EqfYxfeC774LoMxB6bcXYHDbHGsMNZiTEwcYdmkq1s4iMPUfSd",
  "key27": "45fQy4nowNbordPukWrm3Yr5dqHb7PgKTpBiDamy4qshczt8YqxMsicfs8NtYnrSckUXrmUpRESy4bSxASa5QeEG",
  "key28": "3owUTnm7sf6288BnWtSSxHrWPQ154gTcnbgx98dVj9QNerf5zfY1eMoHGQJz8Yh6J6dLJJLMcS8k3hc4DuvfUqkf",
  "key29": "3APqcvQgdvN6DDm8T2bMLCa5n65QNyRyriuGge9CkPsq7Bs4mNND9rqAuqSPpyNwmr9nyQvgtaeTkWbDANf3RdKa",
  "key30": "4Lq2GZCUZyv68dzVuNruzn4wq3UjBv1HiGjQMmRyrYBiu5sdi17Qi3xsnL9tqDhMuVhrGh46CWYgdXHcU8RDQxYv",
  "key31": "2zRYuFFZNCL7yARp1EWpsHEtJG5zwSAbpz4sxE9HVc8Yz8iuVeWys2khxBMWgDW6FU9ZCG1hACv9ogLQaD8qhreb",
  "key32": "csjxTQuFaBNKZPgQCdr7BHJZ3BYo6C75iPLTtXLskypKiKAKRpvXPdCsuT3w7pDcG314P92zFL6tGFo8KXd31p5"
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
