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
    "4QPmffF4Auvt3C6hys333mBejiZqRPHuz6feNi2BNBmWj5oQZsb137x2goHyuJ4mRBLa8thupPYtSTT4EcRnJ8sN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36U3inKcRp3gExTZCAiS2eqsaBrn3e25pfJixLKtSHytmviL9wyxgKeQL6gYX7Zz5Mp5F9Ef7UJC5ecN6kgVuWRp",
  "key1": "3jkn5i3VBwj6MkPHaVYmMoRb3k6MQz22nW3BmfWafRraLs7wEMDPi5t1MXvgjNe3qF451Z6iNAdrtoFCFjtUaxFr",
  "key2": "4QkrVSxzW6dbp3ME5aBBmQGQ14qba9yTw5cxkgtmk87Da12cxL6dQXy358jPJXq4iLKrEzsV1Wc5vc1SJmPebbAv",
  "key3": "wGaVXkvGWBRSUCYLdD4Jbgkf7H3V4nZNUQWb1T6Kc7pPtEQFpTqKfcR4ac2wxYzQqnQND2FrLcDEja8rfcBGuRi",
  "key4": "3yyuLqrkGq5duSgNYMbd2o5F5LKG1CcPRYSxcarW6Wpx7phNqfRehi5HQFyvg4LLWzrszDxoqPVKK5ooGFqF8r7M",
  "key5": "3ChiUja1hu41qzUCQWzppnb7NuPJwHL1qBmZQWqdSAugcJZBgLCy23YYzw3NNoAUbgZT6yRTEs6SA844bDucFx7t",
  "key6": "4tvACojYZ91MMp7WkPcMSHNYkaPadTdjqVa61gKytPMuo46BXS1Qq6QHoQ8Mw1S7kxiGevH4ymteDynx1ebgmVvg",
  "key7": "WuAfTG8knrcgDH4cnyMCpftkiJyAvc1sAa5mmMbVvJRjv8WgGhThpdhNBJZfHv31XmyQfmRvBTJeJuJCetqmwvY",
  "key8": "3XushuZLZXdKiV71RwA4RvMYmYYtsjCDNzuNrq11nXuGPSkyQmspQ63v38DUufTjQPHg145kmxQWwQ68FnPjdzFG",
  "key9": "4WSaYPh6q8aHi2YpVPuZRoGmEuP6zQQYx2hDwdgn4ZvRp4hMDDwQkwxpg5TFpMcdkQpMzmXAjT9cvDVyH3HTFq3p",
  "key10": "4Uxp1Wtakv5rZKJQgFPmkudUvmvk8HPZatyHUrn9MFWvZoxCwGMWgY8jSqZR87orj7SnpkkqZtVBE2pVoi5EacLe",
  "key11": "3zKpNS2cNSNb8DhDiGcgHaAbQFYvwSWfbVFDBFzPTG9PTxPS9Z9bigvKknNZppDg4KgwqFVUAtNgq1FdTa1SzTP4",
  "key12": "23p5A4v65C37WdwwLis4D8ktXnPAiMq58bBexuBDpuXsM3S8NtEmY7yS62xv8c9faMg8GPVZU3fE86nMFBgXzLy9",
  "key13": "4ThbHm7pnPbeYR87mViABehQzMCkVtLMaxxLDyUvK71uGsKbr3BiHAybZmCpZsTiQAp6g5ZdyzabvFRZxgWTBmjz",
  "key14": "37abyjafSwZsNgBjSTBfyfQcKK1RTotFk9pBCLCKrp7VZvfqGUu9RizBomw6Bbwd8TvVBQz3Qcndj5a8rvQUKRjm",
  "key15": "2MYq4GbLDkkmAbuGPp6EH567Sbqv1FMWyyYx2xCiWWPn5gxhvSiWoiT2f5nAduwWhsdigmzsq7Q4Xr8r2ViqzBPb",
  "key16": "4nzbCR9wrmWeYwxyNBAPqyt7qJV4sm1eKyT8VmEdFrP6J68ptMbc51xLFHxGjUYvvNCFzC7Y981f49KE57pCawkk",
  "key17": "5i79jq4zpLKfLXECs4sovWzq3EXuWwMpdkgtcPbHHMtXiPcdJAsJoVBpU1AU5nhHUdHbdSc5Wyzg8HfD79La2Jvr",
  "key18": "37VVzKVSWpmHDAfYRpBdiXs85nxpekSCEp7S1u6US6Zho1qEhspmoJx2RygE5Ktvz7yS6AJ4c3MFTjv8KYWgwgD2",
  "key19": "4cBibcxvNopD31MuycBGSD7c6b7MsmH1BW8TM6qA7YBjeTKt53zfvQoMLMSLR2J3AaMEiajZsYmsmNBfNPKiocbq",
  "key20": "2HYfBoyXmdrQPKDmVQpFWf6mHVSSqcEkVbdYRXNoDBYKXKHt5SjdaXsCBYgABa8MidzKiu4Y325YaLJviRRLVSpj",
  "key21": "w8evTQXjCr8YFyRdJVyRnmj3WKKRTLB2Pwa7AAjTw9L1Y2pfJtF1zAoHKeEcj1hEvYiDfxqD1HH2fxzzn2yxWVL",
  "key22": "2rfonFPgaJBtrSQpLba4ngxdTfC7TzDvA7eLLaPncugQ95Fica13WxKYPtBsMXteGKqA5uWtTwx86WynKVb85Dcy",
  "key23": "5ooZMmPWteFKwj8byCmjfEYwrhbZmcK2jJvAf1BY8jQo2gRJ7uMXeHCvhntQDfJdHkJR16knpsdEBhFPa3SUK7CF",
  "key24": "3PFDt5zyieXR8TYNYHGuuqJZSwxuK73mLeadYWGPKNn5wMgVhykkDpC2GoCL1APAfN1hwn5R45RPsBTRFkQABbBr",
  "key25": "3PoacfYWD48SFS4RKL3twnjA7Y8mWfV9wJe8kXVVLTvChci1ozerY3sJNhyeu4ZZxTqwLx1TCiMMxBR2PVMQdpJd",
  "key26": "53ur5gu7xr4RH9UJvXqAwknnRt7FSTKm3T2kHDEcFYaDiVTvbrnYBYcJ9hZ4ATrH1VFbN2qAfFrmEypYaeXJcob3",
  "key27": "4RG5ZxsoAYhVh1X8EtZri2msn6BJ7DSGensmBFLmXCb7N6dPJQpXHiM9J33BG3RUuMjS8iBF1vk4Te6QvRd3GerR",
  "key28": "2e3s2xuSe76K3J9E7LMA5DwUEBvPZdcnMWsRJStm3yPnNfML6UXBzbqwV8SKcULU38ZsViJpPm6pMyJUrwCKcNWh",
  "key29": "4yeajiqpmQHeDeWknyS8tnpkSVtqjr8JbKekmm1XQCERVhJYsMjL8fHQPiPZGE3xgfit2SmArvHPrH5PfKRN49wm",
  "key30": "2EWBfF3aK7GUh9pUz824a6uXoM1qE3hRSYDFnEyrD1e7eQUEw35ufLkp6DkEzpYsv7rpFLm71hZq7xABiCGVsm76",
  "key31": "4p6WKTUJaD8dzXRWN7zKJeWs7xf7HYDGA6dwowwZFNkMt2i9vLgHBruD7T7apU8GjfGEyBFXTibRWq2bWAPhymS8",
  "key32": "4BB3krSSstujLgN2KGWip2aKWzpfnc3iQidpzPKgWFCRn1hFwjX5UBhfLGvU5a6fwpJJwABvD1Qjrc7DKWorWmG7",
  "key33": "2kBZpVwUqLkjnoc9CFj2jrjPe28VSAQGpMcBbBMGFzBaaiJZweBVdUsW6LsAxr4x5gnFEbd5AVCeWLxr5wy9Fqok",
  "key34": "5aiZYEJsVtznLso736LFp51mwSpzrrPrn78miSSqjBchdPPc6uq6ZnzSS1LqtSjWXz8wpuJo3fGzxagnpkaC5ttF",
  "key35": "N8ZTwVQ1cC7Eo6jnXQ3F1fJhRNpD9gBjT76UyR625D8v4ZBwoX144o7ZY84Xwufam3Hsp3GZY28SeqMt9RwHk56",
  "key36": "3aRgaqK86cTRxgJBGbTr8xMKM8VbCVdHzRKoZsYJb29Xpyb1xQbLDq3W5R3UkQWuB4yte87eTWVZVxg9SFPZHAQQ"
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
