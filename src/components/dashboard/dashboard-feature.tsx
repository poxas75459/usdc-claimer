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
    "5trY5ZvtHcwDy6ud8bKwJcoyC7dwjci4pE6TYdvMDmGUNKd3RjJq9V2JamEUJ7eWzvUCWoVZdgqok5zDYG6URDY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58gVY3LeYD7HvNpHAf8uuquUpBJV6pqRg7HVZVMFx5Ch1UgKuegLBqYHgb8AbmbL2zmpCh9pQaZqu893JsufpFZ7",
  "key1": "2H7xtfKSFnhBTx9zUCpn7RVzzaSo3ueaCSjBheVFMNe5RKm1Ebi74d275dUC42wHXHPsivdnhQU7LJf7ULmscWWL",
  "key2": "5HVMstJy16FR6PrxLt5pZa5ca14yz43bxFNmKVT95LJq5WZTwuxUKSP9CTBGsVDfHb1ZTRAiwwUMoHKoC1Gh7Q6p",
  "key3": "4bJCU1PvStUMugzdHCmZB4pLbyeTSePqB1t9cD773XjnFX7zynAm1Mk6HHhcUjzpwAWTvHwNCxfB1xBfSgXysmjv",
  "key4": "kWd7pFcx3DPkqBDunpfon7b4sDiFkp8m1e2G5AhJjC4GNnMG2v5L9GE6napHok35YPHtkU4aCZY1CCx4TFmXrzU",
  "key5": "5cmV2YBAaPat8nuHUuHgbzQbQ7S52edECj2dvH2FSfu7WQNePJ3X2V6a5psn1oqQBuYYAW3nrCZynik3aErwBRUj",
  "key6": "VB43gJuic5zrnukDaFsqXh5XFcCtw3TGTsYM8qwv3FRrc4DPyygXzuPYuBS8iLYB1zmdLMJSbYQvWGzGCpMp7Us",
  "key7": "29Kgw8CeDHsKQsuTSQecJSB66bAtiy4mJqw3UA7KgAUG5x5vGUb7vXSRUa4uBwMRca2kMSm2EMPUC2dmCQKJk5qq",
  "key8": "WadPvWg7yr1fn1BeMZH78vQPAGofPqcwHiptnRVcGGujahvaAC3AM9TCe9PHarRBDLYcyET2bDdHSor6heaiNej",
  "key9": "48cGdDu9bEWo6s86KXiVFeJEmupqpXPznWxy8iXzkfpt598NjR6cfZcTxRqujymM2KrjJ1tiSTW9WWM1hFGYtfUV",
  "key10": "64Z9whbtmQWfCkX2Qb5fGdyfQEwpKE86TBZbp2jAjhmAKd3dpGYQWdciri3CmFp48VksNDSbM69Dh3gMEh87NzaM",
  "key11": "299tibBeyv2maxcbmGJSxLaFkZKRcMPjx8D43yWLgQQTaM9rHHQ2adSznbpEstD4ffVXVwM552j1Lz2xXyCkcTUu",
  "key12": "4QfsRTJJ7uGHKQChJjr7nEtBv31iWHLsi45ytekyyEJpFHUXa4LZspWDmKckRoR4nZcG1JfoA8dghGtgQijA48t9",
  "key13": "2pXN7Des27c2VxNb7STBovmtJ3ekX1GwjYZ3RgV8kCPU9wSgFhAdQUqbw71HPz6AvGp3WFRuTgTHiv6Vf9BPy3Kb",
  "key14": "5NTW9mAviJdvvZ25FTLpSVo7uZXTsUdMK1eaCSRy8cPFq6FKi1WnBKLWgyuMxwLbDoyahdxEmD3E6Pek7wdNEvhm",
  "key15": "3vCSgLVkmFT2rMBEDDMJNU9hUSKE6SEVNH6wvNnw2kbHuo3Sny4vjuJPkhPbDKLsZztZgwvsKEed4spzAGLyvgkt",
  "key16": "5topx7PuPVvdEEg9NDbrVP8vLXBdgK3yRmzyZpe5FKqfoB3kaRNpWsNofH6SaqJ4iPgxxqJg5nrpLzPGFMBbFJGP",
  "key17": "6FZjsffAJW43XJUnkr7ajmc7hMvdKnbtfDbPfYpEn85fVkn342pBggYGeBsbWiG95mmr57JjYFfC2S8w6dmxyPy",
  "key18": "3Wi874PdPCmpTCfmKSiBMDe1LdLm6w5Suk7tadfo91Vku3yubLqhd7R9tcTopYX9oVLmJWuzDxAF3yXpP7H7qUJS",
  "key19": "296PekDsJAWziAjy2fsP36y5n2wMGpZeP2jFskWqpBgoGwNbPH4TxSYHJYzUYfqmghEp7RwC2PT8vKgYHtMSeJpX",
  "key20": "2UfUtAU1Ceb84fQmUE8sDmrZExmn9CSQkjQNfioDQcaCAHA4rjg8ohtWYC4ogcEgYG8J2VegGHwT5FmrVqvXjzTj",
  "key21": "3hjFJWXTykv9VYGxSCuadLuAPqpgntmjPuLWY1ZCvM529HxpczoG6T4xKA6rcvuApzkfcTQgvgJyeivgZzCQTiB3",
  "key22": "4vrkvYDCEjMAF5uKbftQzEUcj4WLTP5oyMtAS9t32QFmHJJFgLxHTfJPovdfdwJDsvqxHXf9Vy6BQp6muN4NKq5W",
  "key23": "4xguJPPmPZNQanRwwyUYVXjb4y6JqXuT1d9gzXoB4thz738urWNfSmxjKZhrCgqBCswrJMubLEZzC5Jt2rgAba5p",
  "key24": "56ik7gYwJonVrRtmXZ8TtYbwPv1pNmdWCc7cWRqdScVQfvb6zKVvds1Pd1hndcoi5UMgJoWAPJSUpmEkTcfhb6AX",
  "key25": "BtjyupaTpA9LKa5Cu4tm81WBfkgL1H3uyv6MnX72CtBv5S7W7MCaWHYrYZ8gTrm1aT3MkEeQDjWXcRvcCm9i95M"
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
