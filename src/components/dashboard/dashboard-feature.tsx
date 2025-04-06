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
    "4nNsF62s8rPgyvQwAeRBgNx3G6teEnM2sS13JXjXXw9wTKb4gYG8pRcWHupwgXrSwQh9ZU1KwoKL7g5UPExnfQM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCZk6HtZTrw5bDrHiYDyzn7afqZykTnUbzuyzD6MPNXbEW7otfofPUtSrBz6JJNXHZc3S4x9AWa6J1t9HqrKN8Z",
  "key1": "37AQkpzKpZV2MwgE9NhMkmFXTLRkNtqjWzauEiM1LYgnBVwk3o4csbz7CmyRMNdwUXuMJE1jpEj2xUrzhG8EfCS3",
  "key2": "32QJYxJKjXBk3Z7nHaoJ342w9K9JewXM9DXYTMWFEUpcFLMU9QbaCemiJKnPERAJdUkPqeq1AB2cFySokQuHfNru",
  "key3": "MsMJEHBpef4k92cgghHLi4fwDS14KyEQ89Lsjh6DMn4BfaZBsqYSs95x5UGqncSNKwodGrswBUKwfRdw6oWTbMY",
  "key4": "aiE8H9ZhfRy91TtbYV7muXt7yCnP8DqvQwYAdWSJmccTqJdKUu1vReBcG2TUWKfurMwVoMP7f2ZLF1kKozycVN8",
  "key5": "3HEkHxLgNfQFRxZpWPWpFHDeaPxAd9M8hMfVwT3uTY9vXjCR9dcKYmM1v1SKtCivZS1oBMQnLJC83pG4RNv7Ny4D",
  "key6": "2yrF3CLubYtTCWGsW94truvSshAjQ777F21EoomwNZdkPyyZhceUE9X1zFXaQRJaM4Z9bBtLJNa8zc8ztb62oHaM",
  "key7": "2VKSuDq9rqgRqGet2Hh8ooCu17gndPxjLTE99WSeg2BUCWy63nEm3CJE8dCGikztpEXVdnbWCJKVn46m3iu4qLd3",
  "key8": "67XhUg7R5Ui7w8oDxezqbFB6D7S71y3MJxeg37hWjSz7oEf6gPEx1w23nbSzRCy3tmecvHVKkhy4BgnVniNb2oAG",
  "key9": "4hodTgX7mUmg5NhcTkqpEXquPwnDP4ZfsRRb2uqqSYLR1tAnmLSKiR6fjwFbezfDnW4aPt18pJANLU3gnQRKPnR6",
  "key10": "665SpkkGHU5HUAPer3g3hWH2z2DwL7sLsUbDd947sPWT1irhPSHDD6kBh6QAbD8Zzk4iwCVUfymKMW2xJNd3G1K2",
  "key11": "2oRSJn9ZcqTAxWBqzYpfAvDnru4EBLULnDrx3ayLpLs5tMaxiPmATDxHAy1xHwDmQyAhfiGEqCvwNPMPujEga7Fa",
  "key12": "MWnA5NpE7AJNEXBNyZVC4bbWAxQPkSHcHtvr32gwBpsJvZUqQqtt85JZcz9a3gqLWqfqqbG8n1oLvHP8ZvxC28n",
  "key13": "2giLW2gBRAwiwT2UT7qWkrd9jJoY4XtT133ZPpDE2nf9Ci6QNQZY1p6aHNKk3kHTbzvFutLgzXHjCpHxmo47kZLS",
  "key14": "5zyoMx6HQUCa75PXTjxMbM1jpH1ogfBfxgGiHkVwga7yNDV2s8DF7XDFwxVHEnPmFUeBzrqqkh6qz2HBC2rmAvZ4",
  "key15": "438Wgbj4nDmtBptDM9nj69d11MdUGgU6kTnLPEKY3XTneLNm47M4Lqpxt3jiumLeATKpNffTuZNzR2Gzi6kRBnCL",
  "key16": "2RTY7vRXykT1CRWxbRH9Dzp9NW9g4ZniwnCq5iL6iRxiM3QBUP4JNLoJmV3UL3qA5NmKCfAA6tdwjyoE2UCJE8T5",
  "key17": "5KKmGVHbHHaMiJbFSipJXnR51itLwNbDavFyeTQRfbDwSeMZjseS3hn8SsFAt2Rg2Fyn1VWDuTv2ryYcHtSNNi8K",
  "key18": "5MBVYTYoFXhco3acu2YM43H9jLDcDHMk14FbZvfxcaYhVxE2nfL1pH1s1TYwQYhPoD6TRdMccNv6uB69LnMgXLwa",
  "key19": "uaj6gcd6LwLaF5hv1rf3YFK3Czu9u8hxYDZJmDCNYcYJisj6AnrQM9R4MfLbkBtdMpreEc86Z9doFC8KWTeYoa8",
  "key20": "54isfC7UijC9XSf4SnRSBfppYdzb9e9BGL2Xa5ZqEGxRNb6kMpvXTCSDkCyLZVW1AixjFSmzBn4sjGZhE6HzDYWD",
  "key21": "4HmJZ2NLXkXDXAu5GCEcijCS6ZafiktK59ufUEpunh8CCZVeYJU1hKDNyopShzCAy4qSh7zsNi2AK3BQp8u3ifPc",
  "key22": "F97Rkww45bYHpZZNRCwCvwfvHgg5whtjEFuW3TXhpeKjkW9uJtgRgGuixH6pAQ7crckV9EgvirNRi8NV2WsLpjJ",
  "key23": "5hx8AcBSCbztejYE63qBA9L9qkhrfwJqgfnDkyASYUHgtyarH3tuzMSNFongK9CkaTThy66wuu5SGPgHVdvWbjTT",
  "key24": "3PAN66PV6Sa8PsgadZ8pMu5cZY3bJM11LkBDftC9gscfzHGK9E9quwBTQmjFWxo1fUVn7FMjNRg9xxQ1BJykoCPF",
  "key25": "55ajrJ12HzETiRmjGir8azBcKFkX5DU8v46TF94YFWhnE5bJ7opnC8rjLc1bFDuESLCr3XtxoFfWvqbZLBwxmbYa",
  "key26": "5cecGFBnL3cDce4ZPNsuJjJ2tuX7TZZYCnX4Yo8cXtXYm6NW3L6BDYGhcB298UN39m8XaB3EqR3MqLvfvP118Uie",
  "key27": "43mkXg4zqE4GAbWZtjMufxC9PgeKmvPBVk2vvyinBgAwmpCegpB5v6JiVVk3ByJQjtFjauXW56ZV6F7eJSVPyCx4",
  "key28": "21x4o73VQagJiqWNMo9Nqkx11sYTsYJFxwhQRSGSukvMHN2WueSDj2CXxunPttcnSxNUu31fMR3Ae13XevL3ao7F",
  "key29": "3EaEHM3ZsWFbVMZRJ8ZL9xDi9aeuZsTp5z2GZmt1qe2PaaQLnDFLAWNtqpRZy6ggJxNBG4mKYpdUnTEzLhUjFmXp"
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
