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
    "4WwzZuUjMQQdJJrNYEebywp6xE1B53xcCihvRL3ZDCMQXAM45PNq8GqoQJ526ryeE7xK5ZGpCQjGrKP5P6NYw7R5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yxCSZVpbmjYyEfFDHiBDwjEcQnJ3aLrdfxGcEMAyP8bkre2jDWG1v4CuxGFd4Gg2YqpHgRGBa2qjjhwk3brSuG4",
  "key1": "3wKMZG8ytwoSrErkPCSv3wJTyxDHYhKwJmUDC3UThvVjstYQ3eUEfLFsWSmySCkHkwiQz98ytEZYq9onSw2hURSy",
  "key2": "4ZExpFqmkFvDffKrdMpbQ3eKnMfugJXVb5ijHme92cUHFFhFMDbTdAihJBips8XVRkAsHs61RdAQd6tfGm1exVNL",
  "key3": "65r1HVc1ZhyX7FP189ksScvsiRTDZ94AkYrV33iMYVNr9vBFrmYWvzqHygxnPFTGRWSnMrscTrQuZ3eanJgij11r",
  "key4": "KfJiaR4m35VW8ruHQGHG8KPHoxWXQ5RD7igcWzEyQteKCCRAkUBzouuBEe7WMaJXkK2zfBn6SjCBwwUdcF43J4c",
  "key5": "4QZDeUqBbfHHwtnJ3mHaFGyn2qxWgpf4ERzHX5irCK83XfHF6GPXhd5Jds2187QrUFfX3o2YwgJdkMeVVNcJKt9Z",
  "key6": "3WESpQnd9EdWtpfvHhEvHox4sTBBrwRVwuF1ToAGDCxrLAYTVKbWPjNGizYz9cmpVsPWQ8FAtTniLXmfTZPxUDo9",
  "key7": "3ETcRvYFgCwED1gV6b6cU2k7AyWcLE9si6AA9orMU1eFcMhyoAC5TUawhZauWgcCkM6em6Y6m3zgQreNwktKBd5F",
  "key8": "eXQSbK5qNGVWMRQBZphMhxUPezbLWQGapexqLJ5RoAPLrCi2cUzyv59YKNWVnsco5gGyzqvJ5DA4zJtvmZEBERz",
  "key9": "4C8SoFKfUzDMbhxWzVPwgkA3pqkXJvMCwS5eYMybKFR5PSUMhnsR9FfCfBoh7eLtQLydRFHjxnTTeAPtUHvu21gE",
  "key10": "3MbeK2SpXWHv3xXyahaUteQDvBVRNQjDBemCZR2kir2Gqb6uEn1DPfMwSJdqcriW269Cid2sbMPfEw961HkhnEgq",
  "key11": "3hYVvaQTpnBRcMufMBn3XyL1W3uauTb2ZWSe3Ug2XVhRK44fjFQu6QDp2pQj6QQHd6Q4gVHbaisJkeGve3UnbeCa",
  "key12": "8itk9PAfbXfWMJch4ceNp7wCMgn3qvu3ExUEDajJ1y6f5nna8cgaN3CphtakHZ3Zbcp8npwAg2nUiUReaK24kyW",
  "key13": "3YHYncQSVkjQssUV1odo4zdqf1nPWfzx7q51ELLUtms2hriVPnJQq8s1vGCMJq6a7gryLwU71nEZrHCC5rjByRKc",
  "key14": "nHUvKXwdgbX5yJKSzaLNkTACtS1ZiXc4qqRHsYMdz1Y7SVzs37gN44rmhcxsaPSdM9b49QNEgsMDaAUtttN67EQ",
  "key15": "xq6gbFJdTLe8mywCbL7N2kyyxjvTP2ASDTUHiuWQDQWhpa2KqcnwBmoa6Q3o2Y5fJukSYxLjEDz8xLwFMD81SzZ",
  "key16": "4YG6W9HFC4EkU5QVLFnASerS9F6YFK8yXj31cBQ13NgiPFnKyYpqCFFHV3tDRUPvMnchV9MgxhGsBs1MJUX3DVwy",
  "key17": "W8uvmn1UaoxXAvcj8H3YHBLptqneYWk5WFbyuMKNEaqRachCptjvkRV57cyvAJQ6btPaVDWnhtDTPNYhUxTNh7X",
  "key18": "2G2Kif7DibmePFbb85AL6egd6hPYJRwCroLW4MShsZbt9XKB4e6qqrs7bZ3iK4oxeMQugRDK5MvhMUXfLtBxKyfv",
  "key19": "2dnC4An8AUNdoFWon9qWpE4s2Atqv54zQ66EHgP8pvqvxbxzPiZXydHpMjagJEq71pEEaE11Yy7o6xb2pPgbAn3H",
  "key20": "2PRUz8j4T745LyYCgdfYCqxk5x3HhjCnrpXJfSYN4am6ZnJ2rvKzrnqKMesLW25AHYahNsk2bcKgtpPiF56qXg6C",
  "key21": "4Nx6gmtixWukReusv9rAuAKTuGhnDnU6SYHEEyHvjmEM89viub9mCgKcgVRq2fLE3m9fmiwMK7xA7wwDzEso566G",
  "key22": "4nXYnqovugDDfukmN58yKPpz5CVXHj3ErEV5isHfUfE2TfWCPmjBykmWNsCTe8wcFGV7JP8NxonRAosF3Ta4GNfr",
  "key23": "2rNbNr15FAK2fffWdG5doRaxR82FZabFTgopa9sLHDjv4C8TGor8TpBMhAcCpTSPSLNnC9bJTubJVV6DcG5yWz4s",
  "key24": "45oSnURJdGh979UYbmEgxiy2bFvuk1g1debw1wLnV95SoR6bhNZS8UCikiZyrCSmEHTPUVJUSnZuP91zq4DT9j8F",
  "key25": "2pc7dVvofx44wLy7wb3h8bgQBTAYYf5erKDFRaFKQzyucmXk186Qq37Mf3pnHR73GuABEH7FFV6AFYDenA2VsWLc",
  "key26": "3CfyiCVmAXZWuREGFiA5ZpY1ScnKUEtgGUT1SqJj3wMk2NpyNdkxJVE9rossTT35GaGKPzFSnkrTN9PyDcxowigZ",
  "key27": "37esgZPZ4m98nkkyVbShWg8Gh7gUxA2jnLfR7cfSqHM55vbSxvtmUQvkv998g8cgYf2UnQYXq2s9qQ2GQbJSvTes",
  "key28": "9ZvctUbTQpLtEG57nfkzHEznMaF7b8sfstm8jtvJRXvNSN6rLQSfs8idN4NiiWK4PVMm2rZCSHL5x7wku8dLdAe",
  "key29": "okMtaggYHdfZTBPFy3u6k7hJ63y4tkXhNuokxWAnzHYQK7UYcVCtf5n3YrjtQQy2QsybtbejgWUdehtixhodfzg",
  "key30": "4sSdAx5yxt6qAXNnDz2xLyfdmG1gYewmpm6xpXV8mbP8Ur8ecshorYgPtKWhWohNZAk4r84BsSsjw2khAdGGZ7hw"
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
