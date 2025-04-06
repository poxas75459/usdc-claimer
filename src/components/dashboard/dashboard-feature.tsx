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
    "5KiYtRmfsPMLCEkuUkfHTgdnh8QbazMJZdqSwpHSG869A9UQAFa8uqriY23jdMsMmWY9ekJzKjWRG933jKKgQNih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGtwizF7gHb3ezdcr4tYPNzuC6mhLjzhdDAXjQGFuU9MtmuXGE3Xnwbx3mFrjrbJdYFaQ1uStLoc71e9WN3og48",
  "key1": "5Buo2HGLMnRKkH6TvgN7GxrjW5zQWQfN9w5KfaQQxrdMkAwd5NqFK7xRSJEHKk9PeE7QSY9kV1bVchTQSxL1UoT9",
  "key2": "5JUHH4JR4fThBaGeUofnkK3QgPvwE4P9Ntdt2eRVrxtSbycpJTdGy4t2kiMYSZoHM1GcbcC9ZDj4YiGGW7n2gBiD",
  "key3": "4gKi5QVPf9QU2fkibZ72UaTE5oxRbBR3B64Ndn3NyxfCWTS6pchEin4P6SPkmGA3oHAbi1kDe9bJrmcCXfjREREa",
  "key4": "5zq3oAnkyJhmfV8doQmULkSgLS4h2dmj35pWnh4PM7VthvNssUN3gVkYKYmZtMHdWh8nGEyK1LzY6vDNf4ReW6Um",
  "key5": "3YaBiUYXmneaAoMaSY55aUJo237WCDfGTNGJH7Arzh51T84y8DTM4cDenjveRouSo8XFHDgChv6MAEesauUkFQE",
  "key6": "5jtRVJGwRXEa6ZtZFpyY451dttdcx92gRXz4oyZHpbmukWaBE6BVsRRYwds3cQg1h23qCUPX9U9qenQSCv1ufen1",
  "key7": "5Stx9ZrcbCbXPkgq4mDpwRZCoXDkgWs76Z81e6ZEjRXboN56xFPNWCBGo1z58Y7VdNqy3cfwhorCMSaRH3sUsFbw",
  "key8": "5cqm8xCBS4kU8nPewky5V4MEMTwG2PNEMZUQGtwagP7Gf5fjFwBcryH3SM3dGTk1mgcnZkpLLxme7J7LEreVu5ky",
  "key9": "24djM9WoN3Jtvxs4w4K1PTc6mTu9dMJkZTdCEZmovDEcdZmtFLS3xmX7LcgVJZhtRZtqVS4pR6EvWRDkcUNwGaCm",
  "key10": "63ffwRt69agc2Pk7joVSotrmHWi7byhbSYuukzCLbmQKykwPrFRBPXY6zeizZgadEQmNxE1pHFR7JCEyfBu2GdT5",
  "key11": "3Ukr418ipyjDn8J34FBX5PbQFG7xh5XgkU1ziVMZZdDft3JoGNydBGjdv1xPjH4ELUVN9vRYagr7LuvANNGR3aeD",
  "key12": "57pA5jhBpUhvqrMykGdXrFANVJH89xgnK4FBTnTKhXE8GKJrTyiK15nDKffhD6UTyUJVPZfBW5btmDAkmxkqM9cP",
  "key13": "dUSLoJLS8QLiN7deoJf72GSZKMiCdArUrXewzux8NeY9mhbwVsqQfp5GLRP2CGKFncHuAFEkxQCyqHDFHQnga7H",
  "key14": "5sgwANJajNeHB88ozAi2iLpuCkgB96omcRmzk7TYaVJAqHJcJoqFb3Hqopovy3Pau7aaqNqJpPnmRuVVJjra8XWk",
  "key15": "NcybReeschJNu1Nmt5BTK2WvAAW3NPH6CpuVGiVkLFaWWevZHwjkw3biVkRTLibcPxXrjY6xHh4S286q4e8Ry88",
  "key16": "46n9KdLAxiSumn2fCiARAnss5CfJADgM2YD5yBhTjxTQdiWfCFK96GeAdE7DS9DGsHbhahD6WfKnc8dB2hGGBkqu",
  "key17": "3CJZHGrJdqVcZUKfJu5mPhmEQLqWf4UfJP6vStnP2GFjfT3Ms4z3BaqPFgGhiCVtYXXSsKmJMcEyWmT2T9xV1CXT",
  "key18": "4nenrkYmjZJZwUSn1sZhbJgyfuYwr3NdfPhYKdecyVY9ihvsBY4oWPd3XJmQ87SYGfXjPWmgQ82Ppgo4nZcHmhGG",
  "key19": "42MA4chjdUN3auBqMDNPaNDpefx6D5JHR8jUrTczKSmWVyhHAaSda58ntVwNuMuRcWB9RjG4SgPiTxo2EZW1BcF5",
  "key20": "4q7ULxfaUd9eVkmJZDEcqM3DLrXuKzK8wGMfDn3JKYnSLKpG5rGyBhWCZ3uHB2JR6yW2WW2ajd3eU4jGovWARUhw",
  "key21": "5RirMxEmDHnUfct3Eg61RhuwkZ97hqAYLBAh2cfs9u6ZHtpZJMXLByUwqgGqCoozBJ1zgNZSrPYHdx631rDacJQP",
  "key22": "3Q2xaxSEZewSzBUZkfEppoYuo6db6FyJShPUHtN1BiE2dwvTPxLDKzE6EMh66ZuMsWLQG38WypSiDMcdyCz48qLy",
  "key23": "Ejvoi9dtcLprxNbZykU85JRtQYQ94mQngLee2KuTd82wDavBXknEcuGfW2rE1uuZpScKmQUqAxPXCY2aHLEKzjc",
  "key24": "vCnihWmqCDyS9Sh9XT9bRLRxnVSQJg2wUFPRexz5aDr7GqSr3cF8recnjrofA4NkdBfGUjiR5aMAtVLagurPbrN",
  "key25": "5QFTgiajMEC8SnPM94VyZM2SA5LHqvPKQLXt1GeSw5iEPC3VNjei7kyetjRK51woQsw3WjV8pXV6cGnT9fV5EsEJ",
  "key26": "3739rnH8zQdzhrqXurbmvfd5v7ksDSYW4xGfwXZZ6paXnwR6BZ71HBesN9J3yQ9ZGHSMdBYe59kWjde23QXpSyUp"
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
