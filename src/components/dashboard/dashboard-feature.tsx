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
    "45feYWbbMcCNFSxKd6tuADcYNnrbZZaq1mXCAdeQkrxr3DPZVejSBrtLzGW8nn8SYaJTtCQgKh5YwjX28AU7tumg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U6uHwEoSyUxqG28f9pZSMERzB7HRoQY6if82zH8HqunFj43uvJsWSQGRBefYeGK9aEUKXpqjzZA7o8j16xfzRSf",
  "key1": "43gUp8pWkzS4gRZMgoSunubx9G4p2iJdEp59QTNssSXFM96nmG1eTtGYqMHsfAgreVa11ktUBU34E3Bpb9qBA4j1",
  "key2": "3yMGxfsbZQSB6Vq5C3M7ptBX6mnNa2PhrhybkHWHJDbFEuNK5GsswECaxAg9fxqh6PbGGmQWScuZkm5zSFapLytN",
  "key3": "4RHvEEeNhR3sMAuDRHG8JTPcXUWXRijvtYWXBQmWG9ZbvGoEAz8rfir9uy4EZZWY3aj8LfLpksXo7ZisXu78gPhL",
  "key4": "4U3fjD22MEGJfuGCrXLjWFRHGT1cv3RcbQNZngHwVb6C3uXiFhjgQGRW33q1AypCz3HzgjCfM7jLdEopeLqKuzfB",
  "key5": "5Vi6g7rJbUtjyvu3ZyTdbrivkvdCiPF33ATUMDu2txGk8TZTKLBH7zw3BDfAfmr9o7cvx3JqHB8mrXwZ6BZYoScE",
  "key6": "HRmBvusGjm7qTiXXDaQYf5B6f5JTBHk1pTPxvWTYmA1noycTufxkd7MZy9FgfocUDkyMepmMQeh9jJwRDEAHPXx",
  "key7": "4evVk81xF2LPqAXnNqw8nHfMURMci1oXF36rhxT2eBNBPHbByqY2ihMgfYa1dTjcLNwCKLDhsHz2FwH2uYYdQE3r",
  "key8": "SvMhKFSTXCN4fBmgdV7y5jSuo4wLqkmFft3kgsfVQXPWXAkJVKrXMewQz5vhED8ePcJwHQJa9QarnRNKLe5as8P",
  "key9": "5GskScFXP5m3w3gTafYAAPoAyLSjcpuYDh3ouuTHV8QkYNGzha4iA3UxXqa9gFEkgit9NCJeYF5pzDdUf2TBUE7Z",
  "key10": "2THV9SUiZUuQtWoKRRhJA2s3AZe7vnsDAX1BPpzjJy8xCa8wJxS88yVoYPeFjcuFEBpoRZmAuUtEx9xXYmfCwC9W",
  "key11": "4tkkJCjtbYQRcaPK4oGs4fvnSugjbaXxFSjJHWG6F3G1UDnxtgNbZWaJsqa1AnKVhQEKhfpeZCsDU7yMrwJCpH39",
  "key12": "33oZ4rjvUfK1UUrhMRwMEL1gZhYU78EwBuVzyaihrywMfiUt5jg4tx5eBJ2YtthDQJ5ryLezUtLsQjWg9cL6mhZg",
  "key13": "yZn9j8asjor1zWZeVnMLGW8W2n9QRrffR3i5zPcpN8XtuGpJ73LiBXeFLkuH3mwbvoQJZaogvYYXnn2bbRpsnRv",
  "key14": "3pL4eEZX8sbzhUHxvjkpytdkuPwYz4oxSqFnZQEcg3iwnkkPAb6v93xFPmuYrrJLUEMrUBgm83TL5t3jywZ65aEh",
  "key15": "4g6dangE8MvN4pu3fahpwUYSp5mS1DjoCY7XU5rRzP71SmgXQMguv3kkKnRvVCMyXqdAznDbpKFkUaZ5jycmzYdA",
  "key16": "2B6gHEgk5BFoLvSMG8fercnDKw86uttNXeeJmj6XrCYHFBF5ah5RCspsj1AoVdRsV7e73Y1KQXS8BVptSR2jDbEH",
  "key17": "4wKySB1L1NLemgiJ35QHH1z3KTYpsqwFAKNCoYk3rA8psC73EhZhRY6vMg27gLyvGSWcZfy17ASqqm1czVJRAsTW",
  "key18": "61aMRo9cQ9bBXwa7Gyh9JwRxFrtvVwMGsCPU62uDp1RWuJqqqRPpHtPDyWjEcFRCS5kS7PpNLjLcicg6daxoUHqD",
  "key19": "5jmRQbQSyepUXgtTasg8aHwfo3pPKTcMZaE3LngHASEW4qPuXkN5tFUiHoWxUqQuZdPQhRVLMnb4a8ZFsD2976Cr",
  "key20": "4oXx39MWoN6Ym9FuRAbfLkc8CsAm8y14Y7BUhGJBdC1gHmgmdWfzXWntS1mPHfzqYCcDyA5iHLyZinW2qqCvV4wS",
  "key21": "2iB3DmmzDhdxC1YKC1CdoVPJcPEjdYdvnRPmZdZkSdjPode93h91cY2UEcHpLTXzr4Atz3UxeEki6UuGN6HGXRs3",
  "key22": "3i7qUDHvNwnEXSENfrodQ4jhe7dRxbRW5TN2ri5iHQJ35e34318FVERoD3MyDbkNtrNUvKFBr1BhYoidQ67RCCbb",
  "key23": "BUUeLDRNTPj4XEDM3N3ryk3j4vJkYoPqbeciw9Yhdz3pm4U7CSxW5Me3zWcm5DbvX2wvt7oPhp1jEdJku4WLPwg",
  "key24": "2eSQ3vEfGpinLbAG9oz1bmQdjAvcrefkGbR3zuvmd4RNPepgWkkRqWaQ9aMW2pqLho45GALsJFqBUFkpxx6DYpTg"
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
