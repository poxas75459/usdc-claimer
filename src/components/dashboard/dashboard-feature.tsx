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
    "4p24m2Brb2n8y6GqxVUTwQxogChTVvB5rDSAoLMx9q89URS9ABzYokVS5PRDPD5i7tHEaxGTGpGhs3zFTJ1D3U3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1F4PZQry2CthfrVxXdnEojBTiZssuE42XB7JhPwtdxMRArHnvKkrm9N1BH1ULNzxxcMci4vTFSHxiqhddbc2L3",
  "key1": "2ABBJJas7F9ttBsaaepN1YvusPxgEEvUehPkn5B5CAdCZmwe7YVpjRazUkVKAh9AWiAsHpuPAffN95GQ5p3iPbX5",
  "key2": "4s6BaefRAoHdCzrMMxd8c9rsHCc9s573PXfZNvoypZhPsaVXBoDb4scbWp7jU7QWCc3RGTUCmf7AWVu7mXAsAPbF",
  "key3": "Zcw65SJkJGzeQxFvYUzY9RGndi75iS5WTn2r4QojKVHPoWWoa5c4KBu2btc5zHedx86CW2EQ2adWdZyDZ8M5xuG",
  "key4": "4DEhy9Cw5gAJLGtRWZQaJfkGGjTRSJC6ihNam6nB6wMAeNfqmiRjbmx97v9iDxFhsD9aLu74joNPqY3DGo11kJXs",
  "key5": "mrF5kU68P23YJLoRs2FL9d3sGSWv7dvPJ7a5PFxAzRrEv9EkmzMaqUK7Wgx1cHRiPNwVZ517PwixFwEKD4tFsch",
  "key6": "SpLiXMARb5HyLDdPKAcMHWty4oJqAhsJNx4SZ9QHjX6NCHMHDjBnx6gUPwSBNovDUJEW2vPnV9GMkEwRZMuN8rq",
  "key7": "eLxg3yn2EoxkD3UkNHrnTmN6vcNb2PdipuoVVFKywXY5jGCjFnNCuVYAF6p8xow4pRjV5PAiR79inkjpfz952fA",
  "key8": "4AwKE8sz3s2crjZWGciSGmyWAFJH6ST5u6hAgmkYRNN1Yws6Q9k5j7tNh1oQSqMt8uBGBeaqoyZyuieCdEeyGnEZ",
  "key9": "3y9NhvJXYqJggP7kfbTWf6dsgS75yho8kaRWjJ31cmFhnKkH6AB9QJRa7w7M6UjtopgSgKMAF4rZ2Ac3dejCqp8G",
  "key10": "456NNjwtAX1Q17HR9Yawy3CFCFd1MtD5QLMtTRGurow5sHgGdxUGtetn8CJgxejyb8V5aQa6EyQCUnQ8wG2fkHW1",
  "key11": "2JZsrxZZ6WXzZopNvQwgry882T7pnAjDpYiMam4J3SMMYaaHVG2tKoZNANEkohyVYJTrdd8FUBriQrxibWVLGUMk",
  "key12": "5LfuhzwwXLtwk6HN5jFbeBBUzr9jTzK6mq3LcDTGjxS2vbjZvHc2a7EeYtHAdS2xjmskSFGbzqEvL1PkEA6oJdUa",
  "key13": "KDGKKkJJBZRe2JuJhCLTMimecvJGC9h54wdzisWFAPFnS5yzRZqBhRUXjRqaMxPbwNHdghVo6QxNfjzamZVVEun",
  "key14": "3tUbrtvFJ2k3DwwPFUhkJ1fn4YERSmCHCCypietq3kQBhmSA5RvHcdAJdwAMT7b5oRUagnfsFuStFtifuchDHxb7",
  "key15": "3XfgMTeWvRMMpDsaQeFD1688uAj6fJ2eYUicRWrLqNhjs4oweaUbTT6W7KxPbT2UWqaRrBjLEgeusbZ83yASfwHp",
  "key16": "4CNSgY79FS2gTDnVfxCxPHLP5ky2CEznfKV4sk2Bd6hBGJT83ckxY8dyCrdqNnaJPvbaxg6KWWfLzToRsCsqEJzf",
  "key17": "5hVnrfGL2TT19xSFLfRm7xrj4JVD1MVf4dx68eoGwyKKbd2MiR7jKDFFv4fK8PMBksswFkhznvY8tFMmMHGXbfyt",
  "key18": "3FFKFqNTgaT7Ghg66mYPn4cJb4qU5ca2V73GnixBHzapyk9qvq7ZtrbhuGAfxrcceZi5s2PNwEmAcQ39KF5vPC1F",
  "key19": "2bjiRoYT7ybgVwhDXWevCm24PCpN96uWoHNYxNDzLibG76KweZtavd7sYKLQaKWvcVpdc339hwBPQs4NjKxiCTL7",
  "key20": "23Rk6JRWtHwrfvD938mfCqtFLwchZ5BMAiezUqwVWEDBbjDbHMuKu412V72mGgSkUN2xFBrYLRA9DVncNbAi3qRS",
  "key21": "3cr9y6SL9zHG7whi68jMBDjuXVw4zAHhqWnWoZ4HyCQ9wUVyxy1qPMSmRcf6jUVsHhPsAVHsEpdjHErxTyPReJ6W",
  "key22": "3zs7E2tRUhVT6D7TChqrPP6kBw2yjbkPPmAxpNoZ9QMgrADhStz8zXkGKXjFJsk8wuLjJjQJw33VZerqjb21NrDt",
  "key23": "2nsN7eQL8hoE87gGjoJBtoNVqzTLNyeCaJx16e2mSzB7a6r5yoYkAVpYrpkuL9xAQHXq2a2SVYhRCGQP7oXLpzaB",
  "key24": "3yJnpJsP5L2iicoWJ2HU3GSG7AJADfJVv7wKUbFnCz6xokiwdhBq3WZkEzDvg6KduBWvXMhWkT8MhBvDRoCvAJ2w"
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
