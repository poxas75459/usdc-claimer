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
    "2sjN5aZg9qhPs7PDiH9LaAbj3mTnyZiGhXzWhWfzenhMLjbUZaKH2bwR1rzYeL9DcahnGNMSxXMbYDJ9Gh9euJBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x9KHphHDaJ8ZUMDBJBNdkeTyCRa4mieb4Wpdg1JusT3PcDqYzKCPmGhAsdmjznWMJ1uUkF5hYbFhD7fN8sFamwj",
  "key1": "2PzXn7Jz9Kn8CyxNB3EE5xyiDyNXSKjymkM4kTmMWw1vbpyZDon388GbzVZjwgC9scysJRBpJXthdu58R547S5vW",
  "key2": "4eCQ9vhdrLhjPdB2fYSHT6TTd8mDxYKBKkrUHzaLTPyUQwKpVHNopGsFmFvMeGc5DP238CPDsfBaFugwxLKzHBJp",
  "key3": "42f7QNgd8rGDQ9JNeLWmqf4ja9NCtZoCmxLeEAkP9rLizGHEyQ4A4FnjaZNA3MiKAufvRUdPHLjtMwwhGhXzGN3H",
  "key4": "52iSXSJY9x8Zm337yRdJdgYnHxtYGcvkbMH4VCaHFxsUpLp5Qb5RedWvSVFiPdUJWuA7wwekz3dv2E2aRPMM98kM",
  "key5": "43CFJB4qphrC3Hhq4RPE63VLKQC9GAP1Zgeh4Mh9sBcHDn8bHLUzf24KpjjKiWG2kC125tr38N1AMtsoaSjQ9EB4",
  "key6": "x4WQ2CEpvmqLRgcuuPahJmDW37ETqh9ubZtykScqCgFGSyv5rPyVmGcZNkX5R1Wxmwu3YJPwLirF1CSs31ctyk8",
  "key7": "5YBsi6zrUbx9RoM2v7UrU4qsagNtByPQjQstmomxNyB3a3nDoSyLaaR6E2t5mDan1HLY5VDxe11LjUcNC17v3Yhd",
  "key8": "5KVvH2AJyGNT6h2vV7WGTijcVhmUcCEZaSdvFxNhxrssAvXLovL7LWuVXQ7aHxLcT1DGNKdP4rvCzdk4fG6P2Dre",
  "key9": "2xsJ2vqgnsvaaWsHPngWcCr1HgP68uSfo3aKCY4K3UC9qDxTBNxfJgSXU6B4dRinCG2WKyVQ8cAK1sTRPw2bHNur",
  "key10": "5KYRXf632M63Pcu9NyPsHhRQpmbWMCcDw1YTmtRp22pfDtthCoBmaqYBTMAyZRkwzzaeDMMFALQBgyDyWd1R5aSe",
  "key11": "45AUMxdpc6AM6CCsQtGWgiD5XYAKMX7fLxmXEJ6Dhh5YVDaJ92br6GZXMimAQd2jaXDXLy7udSxADFh1NQGAeprB",
  "key12": "3dQnaoYgK7vFLTv7S6WhdBZEyUTgiSWU1bs3dZ5utgmrpikrNo9Jk9PqUZ9SHrRiEwa7cr6cGmxhRpEpgQh3Kzz9",
  "key13": "321eJeqxTkMrupsfXzA9FzCEzFDbGMjQj3japsRSqG6YqbLcyh1x23Ua26opaPRaFXpp3hVCKppr3ihvw9QFGXKc",
  "key14": "5GyTUJ6JBiCdS9nPBBp4dkLJk1Q4Ldwm1HvUMSBxKzTTLcPAehGLQ68Wfd6uiFYA6do89UtRrQSWaoUBZE8JLUni",
  "key15": "5unbdCGayLUweJF2daiNL8fEd8XsMt9YGihC4Ay8vgnxYxNvU12J62TUWuMzxqGJDEaY894x9BCBncNrAz82SUCa",
  "key16": "2YV56JnUgtnLPD4UaQBPu1tHJdYUGffFFjqxT2BLAbaLiTCJhwjyxDhxhqECUFRpNWQLZKvZ76ycUe1fM8wdKYZA",
  "key17": "5WacbJJJKtsuc72vFv3HD4e4wnwvQnogy45XHFQfRdsMNBfsEYFu5s46uae9cSKrCZbrUNNpKx4QfjZdPDYZri25",
  "key18": "33Q1vDLSeodUzN4eGAmusGgG5cT8GMgdKg9ZJXuqYJiXfuVXpYQb4efBs2gpaZH8NNUaEGEwXACY4vydvyKAVxUi",
  "key19": "3f2oxawyZt3kWaD3K4KJFG3RNXAjNqdRdARq3GUgiHL583PEfh3cJ1PSpAeoJEkTS82R1Va2QSB8TpobCjhU2dkw",
  "key20": "2rTFrZpEcghR3nqJwgfmtrH3xGJiLk5wHfn8oTMGT4PE131afJD2rsBq4C4wTqpfuzik5uFon96hTVj9yGvvcyKS",
  "key21": "2QiRdUqJoAzZfZ447DAtCA5ptwgTZ5r2iUsMzarsBLytRcryKLo857vDLEXGduhyZp42JNnfUsJeWMkrUwZpwKdv",
  "key22": "4R6KACrJQTbRxQaTZ6zeYwfT9yiAoFAr6VXRebXuryviACAmmcG5xR3bm9S7KCZUNydkKifX9en34ppf85aJ9Vbo",
  "key23": "2amJdUXdJfiHyfJZKZbHoTrEPJqDnrXrcQNA5hhuoHSS2DjR1bzaH2unorJRzJWLs4r2G3SaSbkjSy3aiH7dhncY",
  "key24": "5U7v2bJXSUGNRQfezfGgYUF9YTPrmnu5gGWWdCH8V7QMF2ghheWeoRyZrk8ybJDWGQEKoiwzSSUaghtJypG1p9PC",
  "key25": "aodJKJERwYiCnrSFdtresiDh4Wtm6c8akEMbeJPRxhkhsZGUbCybJyFGG7gkc7Agz37oAbGeaEkVTBVHbbDzpw1",
  "key26": "5JxiB2dJN2VRGqCzrbs5rDQzJxDiawHY3x3axKB83WqoDCDyzPVWTpGCaCSxsdU5o7Rekh4DYTV3phNTit1wsVmy",
  "key27": "26s1s6wEDzxV47VkYi5nLweArytQ19dz22p44N1Yj143dLQRz1F3AzXcDRhSoLtB6rjss5Bc6DesBd4AvsZg9dgN",
  "key28": "4dyoi21bnfesoJeebVUPCfhrGB8YbYusuCkxE5vCA8GGXRo1SXNyrE9PS458J4tbScd9JSyZsiL4Qad6u8SwGMqF",
  "key29": "3Tc5Umf5sxGRgzD2iE7YAMjLgZpz8hQEJg2obgQ2wiURVCjQuBCjoHKF5vRbv5eYogd2rqr9iUrQ6hfckySHmMN5",
  "key30": "4mVr1fzJhNatddiap93oNCPBgR5uF2hYXDeDuEJZz8UGGhXR6rR7tBYhtQpN4hnH85siBXKW6i1evDi1UeLtpebp",
  "key31": "2MGqFPsJct3bZbySjRpk9nCd7a4z4D2uTqhRjSNdBUaiLYJ7CbZ6avF5czWTztBTNATc1VmHwfyrPQGFTpEwZSkk",
  "key32": "474usT6RjYkmAP8Rt2yUDmojC4uWKmRv7jJeAm2rEMTidccCK82ycAsKDNdvtVSxozhGC5soQNpuTE39BiYzHZGL",
  "key33": "5BpY5VSH3MQPrcWVvEvNMWumupJkmsVNiM3yGmAR37KUZhLS6a8paWTkm2LqK29WwD8fQpMyuV5Wek14UXNfPsKq",
  "key34": "3Zr3B5LLsbgLg1dYQEAzUof57LAWkwCivGWwaU4mdtfVFXUe7WSemEukVDZayvf5irMPtVDcRx2ifi2SQVNKnB7W",
  "key35": "5U3V5SDWwoQidCmi7VqTSfccGaHkEqmRiWdSTHFKT2Sr6EZ7QSYgDhjpTSJgMWjvVV7KUm91SjSMmFK7aUPpPrxs"
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
