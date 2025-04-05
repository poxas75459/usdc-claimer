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
    "KcBTwx3h8G9DMjV5huymsq9ghuN9gYv5FYdJ5RV87zYrbPdQk5gJXndddo6dk7QKnadUcqtc5LbJym4yykD8RD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBjAMkuK6nTDnkz1VcVbfg2Df946xotxUbs6FYs22kUzxq7gtsXtFMC1Bn9qq9nwZR4oCjFShbAz6wRUD8yfs4s",
  "key1": "2sXcVZjBr89HBKF1Q3pbbewwKBHoMTX3VrExNpwohYcpCHTh46NGiArC3unn4jumNTKNjngmymNwS3cYbQb1Yu3t",
  "key2": "5TKheorXz3Y3SbdZHN5beD25gs9QmuVa8p6oaSJGvsZfmwj3uvJXdyFTyGu7pFZ6JM9VJ2Diou4mvNDE5zyU2eii",
  "key3": "4vW7iCG7EHaVrrchG7g1rhKF2CrQCkcf3rhAF6YtudEni6insXa545tT8vWWPJNMHkzYTUvLwuKjFqF7Qq5LFQgA",
  "key4": "4AzkaeJ2XH42T8TzU57hw1VzFMVarWALNPH1aQKUsPbSpv7y2UHqyEhJXu8BkK3G8ah8XEQ9frJwYZd9cNMXPXGz",
  "key5": "2R5R2svY4XBZBVrNuwZwrfPRRFpy7Rv7uNQg4B54JyruXQENkeZvpMGDoNZp8PvKGAw1LpAgNMoayQiNX8yLQoy8",
  "key6": "3jKHMvC9waRCcVDeyc7VL6ZW8HYWajNFUgTqkaAVknebRb33pRLQAHby1xKYaazhWo7TCAruV2V5mQDbSCuU6khu",
  "key7": "2u7bt3x8JWF3eXr8y82sdFxaLufW9ymEAzUVabVaKY5VjyT61uWGqdYqAb8asLjt7JaHJ5BufaQuUoNC7N8VYu6u",
  "key8": "37ikbW852gVvzBxzKZQqCM6Ftgtup9hQuMc15ArgFMnuiAMWynw5iGcW2GQjSSCxw4tjHQ7LimrEt6BbCRqdwCkq",
  "key9": "2iPfQgbFz61ei5jYY5ii8qZ3dVEfpq85ndPMCoyF6UA4JpLLP29AuCN7VJeqS1Yj6vWebKATWAmeW29wxgpHWm2E",
  "key10": "47Y2jBJsmoGwkFSnA59jP9wmUt12N65w4WVNp4CqoutDjEKRRfkg2r1cpso3ymtcZFjzuQXbsN3f4HTBSEFhgPEX",
  "key11": "2GJUCdgy51GdiMi23ZZj2qcDw2sdL72dSrd7KYTJBPPVQ8JZn8pTsiDUEwHV2HVkXU83xrG3SCtm1WLqxAwhMnLn",
  "key12": "cxLhpBi9QMcrrNk896VrLZmpnDhc8LsQD7L5vHBRFx5uccU2hte6wiGszHDwPTQJcjvj9yGrzr9pFThiYC41Rk1",
  "key13": "2sszqu1LYyRyNZJJiBULpf9sG7Bn47N3qKk9xHHL4FEiKgj74UA2gL9oTAuanU1Dk3y5WAod8FLLTXNNHnmVQk1e",
  "key14": "5mWZ4RpGyNzKxyxgj7zt6DVfKz6DJVhzCFnKJ7SPMxDLU2Lf1D43NmQa5XGgPHLRSjDgWKnS4PiGbH3C2SCc6pYH",
  "key15": "wrSSXSjqFMg33HtCfvyCRFBK2HTFpDRxGQnXPZ2mmozbwWoiQW7o5D5ybAbL6KnHwBQgq3Kn3XVpVTwokfZVP51",
  "key16": "2EnT5ma4TQNpWYTkcdtifUu7fkqyKeQRoQDKwNf5R1LwdMRKnGy4yErqBcx6iHj8zSNq1Fko6RT5qSRsHyYNGDPQ",
  "key17": "26r2JWWeJsJjKDSjTzhnDBQ8XxvmgzNEo6rY65CpikxzEvXyoQRT7yyP5vFhpfdmQ5N2YSPc1wq6hMcE7acX2vWF",
  "key18": "maF5Qh7FQ7senmkx6YxJCejgvAaqse6irSGq3zSyydXvWtH1dKwUPFV3NjF3GTfwHqiL7N2sMcDsjerChK9UoKT",
  "key19": "4MvZQRKZh8McJrBn3Rik3p3gLnwHV1uWtDMxYiSMpd3CDSV2ZcEt34hT1SSZFAqVAvfNzrwYpqYXYUA6fvi5Froo",
  "key20": "2ByzgKfrxYq4NR1qPXxGnzAP5TyS46iYiqt7kQeRrCa4te21NNSbVs7iyJzHY9PFyFxkzLw9HX4qV37881ByKrjJ",
  "key21": "4UuxSsFJLMAZxhRrcdaZJ7QqbS3nf6sSbfwMuPZYFJE9UN2h2Ca8qjH7Qk5FLo4FLAjHnDR7o6uc2GiX4DT16HYX",
  "key22": "u73fEiDYNrjyyWgoiAUXHjTxeAg6n4vTSeHnX459RjaHwbKYgLhdokgjKSVnrbVMxPf3uNYNHCDQ9J37bhmYV2H",
  "key23": "3bBJazH5RMQmTP5NPpixx9uXm7cyCM1Yz2wMwZzWaVxFCoeeAwtVfWd62X7zR9wi2A63Uhu9PuPtrLDZA5ReXXkW",
  "key24": "15mE3Em3BgeNFxcdHJSxUSTLm43sFvnve8rqTviHW6UHyaR2nGvEJo1GPvm4p5u5Fu6U2mq6xrPNGQgZVBC9ZCf"
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
