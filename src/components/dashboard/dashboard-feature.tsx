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
    "5nLzpy1NBRsnXDwcKSSoRYZgLv8xDDLJuSEBVwLV2BQ86PvbeUDiGdeLruBGJ3oe4wgxHXHNFugtA4S2GiJgLjCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcnKVwFkQaGVqom6tx6kutfmFapBehb15jN54jGesdMHkMUuccdSp4gb4ofpgAQu8bmBAzTktfe1eVNEwoTGQn",
  "key1": "52NErNxvzoyzxVep91ZT3DwhyjLdBc12zNciAALsNov3nRXsw9DiuKhMxhAPUtAHp5ciVgoLBtstrkee6bGkx3d2",
  "key2": "4nxsreuQFbgzuDmTSxo2mRTrdBab7R7nWdcMqXntddZoNDdvHPn28mgSR7JjTyz5kQARz1Fa7fSrrNGMcchAcqot",
  "key3": "2j3gEjpqLEzmGmbcvH4JGsWNZ6ZB9LkhJWL6sTYKYEg6fVqKrBLpR16ioJUdkihnSJ7XqbTc89WsEGpaGxDkGbKT",
  "key4": "2EYhUBejHMtSCjYPrmpNHMgWaieeBSyKJzPtKsxfxCxGB6mygGt54P4ZN4ranWAyskA718AbaGswDdh5uw2EcKtx",
  "key5": "3VJswwmDMptFsvVA33v1SXa6qTBLWKb4LYejGLssCnnMC8NnRoH9RaJpcY9nFpKuMCQAkKzMGXUdNpsH7qDNGJkQ",
  "key6": "388dNTXDiyXCk8Rqmsk1Vzt6REELcw2JGU9KFsC71NFT6r1fc5bDEmy6HjGQsAvL9d6smneTkcY8Sfqc84sUhtd1",
  "key7": "5iWFBYnp2B6bk7LVguuqY8k9ZbbwWUZB5ir6gxhLwnxr1m4oWZETS6VcmPBTSeP6CJ182ExdJePcbWSKmLXanp9s",
  "key8": "2UTKdvCZ9qbccScfn9Hfunfq4qHMyCZjmDt3X7hHcGEZw91dSDSdJ5w6nHp4TKGPvCf8QNcAWSP5qb3c7LkEp6da",
  "key9": "3cm3t3qVE4backVmRLs8jsGGX7xrw7RyMP5kQXWN2nJmTLfi7XPjAL1SM6ejqjyW3EqxUBmQYv5Ajke8iXYfFzfv",
  "key10": "9xBrYbXCanp4RHiwAg77xQi7M89fvdzF1NDz4S8i5xXLvrw55bauyvWtscbcCmE7prTiCkKJk43U4MDiPnjLNqC",
  "key11": "2Zad8LAm8WiZptmC9ZRFGN7ARtRt26pBa94iXfWwur8hpNw8sMkw9JV5PQfPzjQ3fHJ2sKaEhapEEkrUpAtVc2Ui",
  "key12": "4pHjqAxTdsMSH3pZDtZvqGdSqyNkiaLVBk1xjkrxszR2gJonsM3qrES94jajfczR1xnZJcbdNQ9qW3fLwE1NiSMi",
  "key13": "5oxsvjAjAr9JKbLvrkqv68Rz5Z3HPe5NcNbrh4CSZ2zu5Qbh6Hrf5LDcg7ARapM5ej6owbLN7A4CuhhtDyZG1uye",
  "key14": "4BvLeuUkkcM2p6u5GZCxzJdFyVKwhxfNBy9un9QebPdMjqxH1XqJ9zceYC3LYj27VP1T18UxSNM8hS4hteGB1L7D",
  "key15": "26brBv74NfUoTPygMT2ES546hPJ4zXA9sZM4rvTvYJY6LSzH4curA9KkdjYHYwrW4f5oSWMw5krmvsAeBd2kHSxn",
  "key16": "5sd1hDuc9GHiuKnz79V4Z5j78B4N55GETYwcHuXbNcrC3bVssmjS38DNJZ69ymdbmWYiHkrDTjDDcpCfuEC5t69x",
  "key17": "3EWFHtZTySaMM86Es6W7MydUBnaxoWCxksi2vHNQxzgpJ1r5GNSppUFR7c12YqAjHpy37ZZBUni2NakguGBNsGBU",
  "key18": "3G2zkU6apRDWAsqUSg76LwUXYye3KXZ6hq4yiawwEongULt9jdRLyiRVi4LwMsvHTq2ucZDYgiYrrkbKYvmr5auA",
  "key19": "47UVbiruMUqtpMuFUcHMzmrgfVmCguP2basAuTqK6Wy6X8NKAJ6X9E4GjC16GZboAoHZWLFYbUm49yBazR3pRt72",
  "key20": "qbSKmThztNXXeQtAq4oXux8iXoqFXwak8Y9zRBuaofDM9nNqZEQgPnD52twFNcbgrenQay94AtppKHSybXUEdPF",
  "key21": "2yvKEzb6QTanMCGFbTzU7oSSes97tsXUwfxVZtuToNAmM7zES1eWjjvBsKYLqexiiaqB2zBEWxKp6e9QerrC3zrZ",
  "key22": "3iGza1tM7FG9zDAPbRM3qURTu8rgFuae2cE4D5mK9A9cWX5MhF5Kb997dXNJcNYzLV14B8naAk5ogT4fYbRyGXr3",
  "key23": "3EsxPo57mxmbzGZBz7RXRidJLwv7hy9mV8qmkncT6W4jCq1CEKEZGYW6nrUHcZXPBZu5JDZDCoaWg7Vfq5WXJg3Q",
  "key24": "CEW4ZHCKUNdyFajUvT8UsfbWQb3kH12QP9ioyyn8cLrXXsiCwZtcPrh2scxdj64Z2eyZxvmi2fjTzVMtjpgDBwz",
  "key25": "4Y4qW76H4ZfSzR5aeomStGexqn9AVTcm7DHV2TcaCazt3wGjKohUwMtsNVBVQp3tCYb2rFqsZqZUjo3JNtgiTrHm",
  "key26": "2pWHqzxAyAt9eiq49dniqWNprfEC8CzbS5tyBqPTyA74H2Zr9mJhajZ4bEsPg9jxtGeXacZZvAfhd1ciyqHMeRCH",
  "key27": "58YHXfzQxyQ9bMGoxy8gLE7m7Xwa4zK17QX9beyEXNpGgiXRJUMYhp7NYRp3qLMLCyBNnneUCA4wDSexgpzMSNPj",
  "key28": "314AX7oRMMzKqTEJPHHbgb7RAzutkrKPJhWHaSDZghTY2v64LzAqLbBn15TbDQVSz9KjJxv7g3Yn7eZPKnNHf22R",
  "key29": "2j64GqgrhTmBoo1XpDw4WbdG9S4xuLARiDJKduz1v3WbKxZc9qARpoMx7mr8DU5rUmv7GVMYAnKWsAvHipHkXgyT",
  "key30": "hJccSSHc8ME8o7SwV4tAvKVcoqe7gKTjC5yoUvx4DRsWhnFypoV2PfwGqmQNaFg9YCBZ69pwm4rADMqdiE5i8Bh"
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
