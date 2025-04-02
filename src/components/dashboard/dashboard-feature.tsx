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
    "4c9dqS1MVNnBW3z17ATbcJTuRkekU1xAoeA5btKTuELjv4pLhEAbz7FqQsKCkKo5rca4C8MoFVv3e3dHoc8t9gqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JrP34jj4T9MkUUw5srbh3wuNZ8fDPZemgg8KPYjtyaCgFTeKzjcDMaNGSDV83iyPAierQmy1pGHWQAQripPWzyv",
  "key1": "4mMrrDuDKgPLr4xS1x46EoT43SKfXuXCcy9S28E4yqDakaHGV2NMoTQvb8ahnzpdTZ3FnezeAcF5a5q497xjdt54",
  "key2": "3By7SKabXj1DMEjHhdkoRicTTWvcZYkb8BTD37XmaisHvXLVV2KXVzzuALuHss1PtouHp1SPQdvCZVu9ayAAS8HN",
  "key3": "PdLDcVU1X2YV5oySJ1DkjayovEUZzCxiwKPcVdSULdQcXrPVDjfHGH9s7oXDRh7gpxEcE4Hmq7snAh5xCGQRUdD",
  "key4": "36pjvDEEvWGsdVF5A5CJBzPyHREDk9F4tUADYU1Jnm2sjHD8eszVpKzwgDGgh3CS1MPoKcohqLqSrQuSKnysbb8W",
  "key5": "3ua2v3SZXaVgncb1a9hQ6BxR6Yrx3AHgxDMZNMGMFSmFocc5Df7Vbrx1Qz6JoB6cu9KCmFSyHUcqZ32ipK9gPmLc",
  "key6": "2K6FqfFLfJ6ycDRMpYpjYj7PLY1E5Vpcffdib1NFN2Pp47qwU9QDxF8LMyH54u65oCuDsAAfd71Gf3Q58e3T3ejw",
  "key7": "SBLdxSy5FPepf1BvAc3Hfrz6DuaYn1RwSbzqqikuZeLmAMohBLmkAT3Eoi7cfqGERxLwrxoD9CGjEjLvLGHY4Ck",
  "key8": "3PGUjJMCz1PGFZ7ES7oUH3GWuuMKj52yEYg6tPN2HBXQd14ctWnHH9VHQWiqbgD3v2sZxj7YqLPBQY5q9drgDsrb",
  "key9": "2dPzDeJrYewsjBZL2moREMqZzvdxju3kk4LLYungzQySZjSeBzLtBj5JxxWQuXEZtuVDqf7WNFY4XgGormv6YPHx",
  "key10": "28qWxkGeqBurPzM1sL9aZ6wnzvTy8p8qr42sU3XqDPLkPhxsZ2xYVZw48rKwkqc5358hKhoaewYSmM9AYAoMTJ4p",
  "key11": "3ACwWLniE4mPDS3qz2ZNrST3T3GmZfj7HAqpJWcA9zByKeUY1viQxhMA7evKdRWbUpoezz1L8m5MEV6mBHY9xzEe",
  "key12": "4LSxDDNxxn9pycgP66a4ZmGkk5d4KkQUhjxYNwrP3yy5d2fSVGG9huN9f6p3JuShvHWYmLTHH85jXvKGecGhypMZ",
  "key13": "2frzPqGmqV3e7c8WX9y9yjUbqwLpMCVsZKfSin7FZ3DfoK6mjCN2eg3C9r6x8D4LzabRR41dpq3nvQb3Z1agBcTp",
  "key14": "2BhbUrtckyFP9fLKWZV5eo8tdQaYHLHD6Qj1AenpscZ8hWiB3apngjZEJQV8zKtPtYknomd1XKgWWthtfzyr1DHS",
  "key15": "25ymqZ3kirqNiezJCaYeTzp9KZt6e4BqHj67wdoqG9vd84QMMPCZm7ZdsD7RgE2RvuGvQv2nnhAy12L8uTZY6tKu",
  "key16": "4wUNbNZsTkfMcfVmRua3ttmbPfKTv5ZcZtjLk1X3522KUTgwmEodhdG7ZgyDvXJFynAPSMjyrNUHWhxd7itkwu43",
  "key17": "67DSpF21HcmspnXv9563WB5TwME5D2S5oavaMNMenh5WTsqGE8t2LQCfa1x1hWro14btPQakqSMaSCJ6D2iQjzx3",
  "key18": "3smYUHWonEhtCBoA8QVn6MWgfD3N39CdcW3CD4KVgPPCB3UmehpJnUknBeHko7cMU1daVJXKxqATMjP7oxrRWqv",
  "key19": "2iPGPuR5Ni6YNDcXvxawYmWqwheKfQbagFYaPZJZ8ARj1pgZ521fEsHe74bwqzHQuyTSxVbxkBEa5BM6nCbbJGEZ",
  "key20": "2LoGW8FjpntnXUaVyvmH1WRn1bhCz379yXC1wPkFC54zbumvFpc6QmRb26b2zkhPueSRLHDosk48M2n4bvySUFyy",
  "key21": "3nEsvgqJkKS8P64u1NXVEZJS6WZ5Vp22nrzSpgV8sLn3pi5BWgKYhhmNcf9S2DaYTJMHt1tG5QautvpiqdCyuLmv",
  "key22": "3Wuq1T6Rv7QSRHkgtCvXWwDxEznY91FBSosPrk7RGnrbWqKoPyqtCrxsyvyrSkWsLr52sU8xdFG8uPnk2dctGVkw",
  "key23": "2WYB3NJ1vobsZ5hA3dLnPnxriytaiyomz6BqBS1P8AENG3Dkc4kwpoQ7VeZGdSB1dC8qzxYJVa8mGwJgHHcCL98k",
  "key24": "4JNXGjzVevBb7MMuQTuFqHZjxF5WYaJbsry5GTg6DnQGcEiowtSg5HsWQwibV4PHMYWpkx6kTm2HRXj69XgSmy2a",
  "key25": "2DNgKVrD2H8fmDwZQzKEDyg37rVkSdsemzzLi4iduivpnuErNUqg1nAZ8v5snmebpPNcjDnZAChjERR12cr6DuHx",
  "key26": "33nnTzQUccu87cCWHz6mpjEekCFSS4x6aHSXFUtpqa7Fx1Fo4QjbUtDHhYPqb3sb6ESL4fQpTYXGWPwgoQ7VC6re",
  "key27": "2shkNqo6MawshsPV61QPpC3qx4PXJ7fa6Gq8TyPmZn2yaEqJBLCzecwg7X6dattPh6nLMhhqGwUxCvNqCQBF2smA",
  "key28": "3gSzTCRgYMvj3DAQ9TmpW4E5mkAgmteTCcSg4PC3hhQhDT2VaapwuSR6eNXUDdMpf69gpdTAvLcHpLbNmm99nH5r",
  "key29": "4RaW6aDUvsG3G918ZFQBUCCscM9YPRNUykPnvHbo5BeSjEpCLYRvNDicyEJtiXvtacS4nFB2Coz63QF5CfSa4Bma",
  "key30": "rwmU8b1BQAWfGN87W1Y2Ae714CU1KxV4fG1PB3Nytc8e9yVLL7FrWHrzDCXsDf8ks245mFka4i5K3LaDdjcyuFY",
  "key31": "34LUsZMKiZNSgeXgabZjpe33Hp1UXjYmqNafRRVpBk9af9HwQNcGP9Y6jjezLdq4VpKnArUPaCcqD4PnfBSdGgZC",
  "key32": "5DoJtK55skNj4nydzycrPcs7TASoe4qeGzU1L9ST8ePSFNnq3zJs9PczHBSVRXXJrw8vK9LBjFWkhRrm8z3NwhGS",
  "key33": "2Es46uiV4ro4Hwd6hXx8eq6cdPQZcoWKbi1tZZGi886YmvmXByjwrqzYm7igiJmyCdYr4RHGZsoyv7GuYvZxwm7g",
  "key34": "3JU5C7kGoEF5VuZawKTKbvvc9oC8eJdKQnqBVD1gjiJ1fd5DJrSpvyXUcLtX2tWaP5iaQbVQ1YbeaPtzqrJW6QBX"
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
