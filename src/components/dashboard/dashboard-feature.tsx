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
    "2EeUjGXAGSZTXXiHft9ZhURnYiFHxzchJeS6VE8VSRFEKERjGhLiWzqb7BDPGcpwUqRX6mKtiBMfSGFxs8VJV9xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwWMLgVmXXkAmKLSsGKAtCw5yJskyqxbwds657UcRD89tzhPZC5WaovHMBBRat2eGry2UNwJ1bSwrk5NXq8mnyn",
  "key1": "5nVysnDWCo2BATfpUQdgZ3oiM7YnnerNtN6VwhLTguHjqxPdb3Eh4BdZciysGKSo8XJ68WwZZZaWBcApLP6hfSGf",
  "key2": "AyBauJuzUeetkPdCGkNmafLBJXL3298gfdLbJ2N8r2GZGHf1FxfkHpwvw7iDbcX63jFNz1zkWtPD4YrHE71J4k2",
  "key3": "2j4zTs4M1QzGUPzHay1FFTLW3vzXCArmeXamDfF1dReo3RQYM9cBTxfnVQ6bDBY18AUZR4HRTqvjJXXCFpoQzpgf",
  "key4": "3Ps43ZjgYHWanMcbw61Ys1nU8Dsn5peYXHX2qRBrNxbLYe1GSjUXhr5jfspvuYxHNh8u9bh5Erh1DdGe2Gdnj55g",
  "key5": "Mp1K1V3u2yDuunZdx3qA17eWkZ4uatrTsFzFcfUR5KuBoDHxhuWgw722nfSdkDFAUKRqD6W6bH8LSJ13ghAjjCp",
  "key6": "24SF7DQSAUgybuc4VpMtSVcSuWpFTizDsND5H1Jq6uCj7vHuwpCCHC2wg1u4SKhaWUHLsyRaZJF53M2Pt6JgChGf",
  "key7": "3xjyJi7hVn6cjJLo1uVgY587dgdc8oSmjYgeqo5jyCc4vMxSvNjzVTGQHqbiTfKHLJjzZDpbatA5EEBKMqW2gaNM",
  "key8": "41FtMNvZzSYPc61fCCAH71QdPf7efyoMnSfwzGUVY6mKRTMMKfUR5D4SvR7VCK7bgXVtk5m2FFYujnKDwSByQ6QD",
  "key9": "3fAwe1qhRT1r6UuNPvUjKiJ4FVqgvu4DPcuJmpTN3ib47VguCbPQyQM2w6qhCtgukKvSKjjU8wGuUQE5D9Am9oe2",
  "key10": "61Cs6zxycsKhM37TPmD3TymGoRsSR8pXDhxr9Pc8ZqtraB5nLeeQ6UFjsv6HohB1Dk6Vty43XKWQ3hmyr93BKSHv",
  "key11": "3CehmH2aAKyDyEbjrpAxwJ5Yk4X6gshWibRbgxxMSkBSYC8a81VL2htBpmwKvQear5m94JcC6ZuXVgysbhKu3r1k",
  "key12": "eKK9XgNWERzJMh3ZqXmDoZo4wftSTAyXsviQtct1PZRHiuR8Cy5s9UFz339A3zafa9kA5JDMAFLJnvydaNDpdCA",
  "key13": "5Jh9jaRaEkMpoo4wiMx3e6wmbYCFP6VerGHPjjG5MkVck2d7mHkYdAgKHhaDXUCswsdrBr9XHVnmoXAYYRQtDG23",
  "key14": "4PpwCwo6VFiC8LDXCw4S7pEr6fFMuMfeU3jnRPMtYXWwaZQwkPoMy37ahSr7gBwLJJJi4A9xpWbRYHB6ZnWa9F3t",
  "key15": "3RyG3xp6MfrGzDkRLGh4XSZoktBMNH93vKqQewwg4Q5S6TWcXd2i8ttPqB1R9CK6mxwDitYN5HdEddDdiDrpDHC3",
  "key16": "2LWVCPRNVgeFzdtqNyDF9H9UqMXiDcLkBtiDznTdbNANhph2CGgPgm3iqhRpF7m2uZTJJkNogezQ7zKgsvgboGZN",
  "key17": "513iK6QAT6LMbHmHDEz1RxFtLjGynNkEzcFfHs1m8ACjy3aMewxuBzeuUEtExJKFHYDvQsAJTRc891kMxkiec2gP",
  "key18": "2Rr436iykPQdgJBZWre4MR29RrCjtJ7zDYcMXXGc3HUivJG2QTGo1DfQbNjZWDLbn6FaP1axa22i9BAqGrW1gcaY",
  "key19": "5P9b2dyP9jAA1Rbf55hb94NUqT49CQEQaXbTq66rRxtsfXT1oDES6H9L6SPXkteiyKbMVTvN28QLWNkvFFwPsK3M",
  "key20": "2oNY8oe7xUMhca9mVPckSvvZxX9yAJJMqquBXGvQwPn1zSibkQnBqq4yFuARsJgPEZVmiAzLGLRGdXsf2hLdiRB3",
  "key21": "2niwYmvUTRAktAqxc5oZZjhtdQGc4aNLhRhi6a2GhtJBsmzg59q49pnFmZjSrxB4XTBcTZqVys4jHhV256NHCESU",
  "key22": "3ZScH9YjAWquLhgmCWDJit8iYvxVEDcMmXLqp71cfAREC9mYHYERxp7pQayizx8sMrSFbytbThRSz1quWa1xqCzy",
  "key23": "3mWeoc1TS5diRnGYSjbEzLXTMQeLyFEZ6mWxMBCdQvafaTY5pnC9tM9iPMFRALZrGU65wpH5doGCjRdoajDwVTWh",
  "key24": "2QQzDGMHMdwPDsGUpNgxnCcfn5DygsjppsvEuLcHY6693nPMZdKw2FSZaUSfFWJUQDJprF16mgBCBB5QwnkJA85G"
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
