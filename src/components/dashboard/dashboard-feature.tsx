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
    "5vDxssVwwZS4QS9ydxPq9vHRscPqyz3Ccu2SvoxPJRp3o9Ff8tKMpduLkg1FWGrQu5grHTmeTzgb4zzFA8PQbvg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d43d975bNmnK14ZedNQK1acsMubusudXVzb4MF3ZFktKNYUFEiswx11EU6UaNtLo5NTRPSNe5QZcDPnBxn4XjGD",
  "key1": "5ehdEmWhRCTvC7Ct7smCtD1Wt5tP6RNVFQYy5wkeksS6JnyBoCMTcJUykuPqfksQvDTP4fkjfNTbQYx6vFQF2Pj1",
  "key2": "5h6TnchdoSzJ4GDrjscLR5VTm26AeWujMQpL6wnvHFi9xMsLeoCtg4WLAhqL26SZYBPwZR5YMaqrYpNRPn2p9W1j",
  "key3": "fzfWGTi9uotbQ6bn7D1rs72nubCpXyPctiofywT2FLjRBk682eQU1kevvRUqEpta3kGCXMYRmDFtT7GFUMSZeFK",
  "key4": "CoPQpb3qmiWpHoTRHBGCrXLuqz2mVBbksthxnk2hcXgKphBsjy43hiLUPwwFhjgvnF9u6iTMVL4S7hPNJDkkwPi",
  "key5": "38Vsc4VeGcsAKNfBgTepGYUFxkhQ6KALMssJWBNY2yj2XqdspVsLnKdWfbXk1A1zARVvC8seD6FAJnJDE5L9WsH5",
  "key6": "48D6nzYDxxCbPJVywzS85oSgyzFGbkznoL611m86MZSycx8Fdju1zZEr94FojmvzXQWDgpvjRZN9q842QkEKg74J",
  "key7": "2SJZP3Gn7GgPMoyPH3QDfLZicjDLarcNnGjcbsJv2rb9MpRNkQDr1Q2qiMmLLpvEC7mpeuKDAcyjVDRhqGj4a6Jd",
  "key8": "2XjpoxUoJrnzTaJxC3wNRcKG759C6yUFkZHxixqpXt8Euym22VEYYqWvXimWvP8Fnk9Sc2tCUvGsJE4jpxDt1S6z",
  "key9": "qhoD3Q2FS6woKqDnWJ3ctBte1Fdv4tR9pn9b8zR3j3HtwgWa1GqsvnPhjNqrCSsSUAwEq3bYmYBUFUJ8UvVhEm5",
  "key10": "3T9JLPW76ayeXXE2bDd7b5Eq3cjymxjMj5U3mbgixn8RuW71hNMd2tJw5kABwRHnZw99uark7MC8fGJ54igNWhTo",
  "key11": "3yGV2vynfgfDSr9y3J4cn33rTP4o4m16CSPnuP4LQeWDGkzLo19NEanWBohBPR8ZycKCEXRJvcYSWPLX2ifR1HU7",
  "key12": "57komqxSJmRQeVvR2EustuKhNLBs39coUWEzctdWoW9g6PLRgmbMbk2SRh183bov75BfohvFhhaAp2ongsQxHYdG",
  "key13": "48BnVU6imw63Ykw5W8ThL8ULaDjThrLJEYqWVnkLaHAfxBtG2TnbYKAjHkNRg1SrpRwUmfz5D8bXyc5xayV2vbhp",
  "key14": "2M97VCckpoKphxFYREjunm98nQgHcF5Rn4JXUHG2vRJjutJKyPqzpgAF57eUAP2Ra7tmqxgXhBZR1WGss52Hck3h",
  "key15": "5E6QJbzq6aHAKMe1NVEduWLQGj6iuvfS84dJD1HcNF9CMnHgkgrVrm3zC3Q7dWmZkToAmfSziixLx7x87fseKus4",
  "key16": "4HgiWg112mKXUnifKk4ZJt7aCoXdQnFD78FTjLthosJNLqD7YcZDBP33mGm9gSJyGgEhTNHw5qJYgkC3Fw9qjauk",
  "key17": "5xpgi8uT7QckVQPBMzHPLqnNvJZcqmprsDWPmqjpVc8djeeFeMV4V8ZHMuW7qYyqTy1xCAVFkNViBxA1JCUTECoa",
  "key18": "EAxmU8wG3mGEr6becBWuhP7dcFVz2uqcXGNs72DbCDjhsk4Ebn2LUit6JFnZnQMkSYNPwhLCtinoF9CrwiRuVj8",
  "key19": "4Dt5T4WCGZQGKZLiy8LKhDVvJZE3WsAtozdPZztNdkYcAk4mkBdvxVJQWBazKMh53Ymgda8qoXHwmD9enEtSpytj",
  "key20": "2gyR2FejoSoyMbce6zs67w5UiTXSZK9vtQEkt1m4SsNsCUW559xPSzV34dpdz6ZJhCKzvFtddi3gQLawBs4iRF24",
  "key21": "2JRLyGVpwXLnM6LYNFDi6BPoGu3sHSRUZ96QVA69LRnDG1vjVL4uLj8yWqLfFhv1qkKE7ux6HUtuwe6TzFcrXt9V",
  "key22": "J7SWCz3GKx27FgNbZLPGqhT3fUsdfGvyFV8iAE1G5oYcXtrUkX6h3prWDkCAyXM84jLMBEeZuhXobvrF1tfwHNS",
  "key23": "5Y3pT4ekfBu3fg4ygq48w8TY1WWi29uEzGzFRY9kZZ9o932H5CQsPUEgzLbnpxkvXGkap4oyTBzzjCqWx4SgSRbc",
  "key24": "468KeZG8GfUvcuLMBw7QjsnqrB9MS6Jk2omAa296vCTMZXqpzsqhtqFmYddSWR6y5jni3ZWieVwMuSFp2iRBA2vN",
  "key25": "e61wuJvrf3xeCKS3126tfjdm4awG1EY2rRecDhtqPjRdgzuieKXN4Hqf9eMVjmsgWwaXKxHLAxY7N1jGAW1XDrz",
  "key26": "5ZX2LvtgQBsYtLhfDUCY4ZtYnS8pWmZdiQa6VB5vQ8mDyAL26nZ1QJXbNsMMPqAEuL4potew7XfhAKmK6xU9wD8s",
  "key27": "2CKhEosyjY7GVUmo8YdBYBav9Mgqc3xACic49SRNPCobBPdGiZS3q3QLcM6TCnAucNkc4KrS9hUDSppAN3vDPs9g"
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
