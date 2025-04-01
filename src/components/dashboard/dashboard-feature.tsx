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
    "5kgX728xT6estb2As28hg1NKDZb9sqNWzyY3HHkGCLYPGR7cSyHZyJAXEe5sd69ez2Y7ob9tkvQHVx6fSJxUzt3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VX6SUC7XJFy4yF2DdXorhz1avKsZUAeZumJXAzrff7zieHLCwdTkWKcgGupGvHvxm3TNiDhWDHWB8LfvfXVXgv8",
  "key1": "35Ve1k6MKEqwVSotfyPVJJC7zsnuhMhLYRHs5adaTXUWuMMvr77kcVkfPuTYzWZTv1mzx8nsZGqri7g9St3LQ2CY",
  "key2": "5x3VL6bhLQAyeGhxXNrT3dPU6YgEhHon4SqdAwmykqqHnQ5PKJQR9jn9KMKMwRu5L7fHhV9eL71Hx1aHjAeJSrJV",
  "key3": "3kJG4j6CEgHg6HqAcS1CRHgUjJdDXy1orQMkv1Hkjeo79o7ChF8SbNdebczvfs6iFxCeYJgUBkFbhGuMsGoZ2RsW",
  "key4": "4tTLz89pWroUMenu6deJ794VUYaAUyCMLYaapia7QGJhdubtrhwSduamEbx84FVoX65oeL9yrcfJ2iU41vyLqb1G",
  "key5": "4VDweNfg7XKYSq9EDzo1UYGeUQf7o65ffJj9iXzEichVZxeiRW8y77aJtCViDFMmTw6U3Mcd4uCFkM9w4kxCA1Y8",
  "key6": "aPw7ziRtm4eA5C4EmAMtmxh8ijhN349bvUYmxPYyUgZ9z2g5ayuTDfK6FqatTWPEa1NhzRd4nH4o4qn13yUhwA9",
  "key7": "2eXyr8fAw8HoT1vxszByYECgCnJbvbFUgtx7HvSegbkECaddiDDcvWUcNTGWyvwFxqFReT3kK2eZQn1Vk2BSuGx8",
  "key8": "46VJxhy2iUNgrpvmQmSJdbHhR6g2JXhEQfJAbrM6jB7LJtv7SsR5enozZKMszSe2uXGmmkzE6YPqz5ed851umN4w",
  "key9": "2cJrV6o5GXrTf31hRqTPYShA4cj4NoF89unUcbM7jdLGtg9bdPVqBbzoEyuYRuafryuPJK7SKXQaMqVq9omRRLJt",
  "key10": "3Hv3z6MPoGpXGM99HJM5jFxhtwLGek8A5Gi2hMC1s6MfPVFPMKLEHak99ewJJ9qgDTK6jVRLirR8a5vXSEapPKGB",
  "key11": "5jRRwFtFwTCYEpi2hgf6PzDkR3vmaF241AKPaH3Xevp5969bW45neNHr4EBNDQ7m83BSxNzFS7pauGx2QkpoDiMK",
  "key12": "2TAcXLiXsiLTiWbczzdvDQo3xkN7bFeEuwHeMU1Mf2YvFS13pMR5NEMvxJukk6F5CnALY8aoMudfyFXwb8epADaV",
  "key13": "4RHTFzBMBQoie73KG8TNGC32QooS8fRUqDorr1kiCapVmhnnRjXro8EXbbnZFMQQBurCSrQ11zw2PXHAm6mXvhAk",
  "key14": "4GYyAWbw8oU9WSuT4nnTfrhVKYCZQyCqaJkDthG9ispBpaq8YBryb13wFjZTxsZovwXEX1k9pdx8SARNWPjDaF8s",
  "key15": "4RPiL86f9QQwx3DmLvN5SyVKBWJGTnp4ZvawBZiQvyhThumipaxBsDksF4fGKh89jRkLw734EhFgWGHghJmszuWp",
  "key16": "4HfLK1mSFxkmefbvMtkLSPuZ3HTcYhLLwVU38HMCDxcMhUes8yrG3Vs15q1PTVzMHt3RkW1ukFpQQu4doSvFRRDR",
  "key17": "4nNzcjHb7N6wDrYfxGbBaC6oVSPveZ6vDioRtQ3L79vxG8DTHicHY2R8qbNBTxU7oNBBqAUjwVSpkP6d8ogMiKNw",
  "key18": "9DiJHmvAeTbMDV74rrTnVjyRgQkupA4MWbD9gssGVRZTkUkbuVDQe4nAewbgTy2MwRDuYSRNWkrshPgRzqkauTB",
  "key19": "2BJpByZLvzzmWoq5DHQpsXBwfWaSv9y8CZKRKQobTeSCL2pXLbFtTrQznuobehc3VP1c7WEAKNLJJvAmcUo31UEL",
  "key20": "UEwYHucMoVvBusAXFfzKSDox2GnYiYeHaojzvWT7ubwNaPyYiGk5zFm1krEf1VTbLviLRyxZpH3FftVVKGR5XEJ",
  "key21": "59ob9F2yF61F1X3eT99wuef1sNbppXwujy6MWVXZLy7z5NqvT1BW3itFeaazjK2Xk28XgGVSJUSt3Vnzdd9J9RxZ",
  "key22": "5WQQkR9qiGywyzQfWzbGrTwX1pqb2nB12e26doRhsGCLA2VeLLXXGhoeneQHLbrtLGPWLLE2tLS75u6v6UErMYAT",
  "key23": "4aB6DFtacfupEG1wHjc2Dixagh7on4TnBRW4pWw66iGRa2oT5mYv3NggA18QTkpQrJuuoVwpUCENc3PU7ByQvH7s",
  "key24": "5RSpLBHjR14prR29Nyk42YAWj7mU3kw3DjW6K7BY3V9XKCPZTYzEAjG9mXHjM6vBVQWFgiyuDyhdusfcXWaweCDM",
  "key25": "2DC8XLENwXRzujCvVi2Wf5N6zqLdEmL9wVi3Pt3PEC6AFJR4bHSku3cyJzuM4KNv4rNi2cjJa8Vp5Z9VYDDVYKsH",
  "key26": "37GeaE7dtvnsyqtYY4SSoqsFtfMpF1TwBnLW5XnY36YSAq6WtqgLpQU7MXkq9377t5gaVuEHjHnk11kiGzyyuLQH",
  "key27": "2aEXstVMhWW7Zg7wpuBSErccLPvRStjstRjSuF4FWKzbZaXk2JyWouc9drFy86RpuuECQUkUtNJaDgNrHNFzDqKu",
  "key28": "5Bx68RgytJeMsU4eUGNL4Kj8V67UjH98dY3WScpfmtYFUTZ2Yuj9e7CRgfb9JRbWbqTa2aAksjcrgogxHWoHBvm9",
  "key29": "2yBYb4tBUjrh3sbVsAWC3Bpq4kgaefvv7DowVUtC2CKGp23LfaAqG6HABMMsKb6SfjN5vAuHrpXicnwo4atXM9mm",
  "key30": "4QBgMmFnTesP63xktHvLEeL4Dd2c7pamJVRPHg27rDqwfXnw5HgiQZZ3fDyam5Ym3BD2ASVi4ebEYfoKptBJdRuD",
  "key31": "2CxJTRJLctEbZvhrDT1dV4S5AxiixUUxbtRpYsvVBi5PMNvbVyaG64fP9HCwUPfPTkVsJpz4Wowij2tf99d8hN1f",
  "key32": "pgioMX4BiNsrbKrZKgoVUcx5Cp2E61evkkzX6GiF9QaN5saL8f92MM4t2oJp1ZMC678LQXPvMPBjJTczYdBxMk4",
  "key33": "2MMxDEtRGYGHFpfqbnofN4uqxhUenDaTjFPKWLbPLrPrEMuCrkHiQxmEpBKkSDQzzQZpRyPZ6SCniVChQmFXuEre",
  "key34": "kHFj7GMpN5CQANKaqv4XSufyKkk469M7rGGywb6wmin7nLvz8qbT12c8jnQKP4vK5g7GPmK4hiXq1ZEbrCrEPaR",
  "key35": "31GQnozY3LF4Sb74Z89FDDjea7dqDygdV5WqPx1d326jp31agNmCpDj3RCW6LQ87ayYb2wMLAPP8HYnbyGnoqToJ",
  "key36": "2srraPBkd3XexQu7B8h5eneazaMSaidkRP1i6BfNNfaU9vEXPmchFb4f7BfaFBAoaB8LRt91hF5DnLqaqY49NpXT",
  "key37": "3cUXHSuQDDopwF1bwKZcqCBiKSKWzoS6s2b97aUnagusm1z6opV1FZSdB2Pgkkv7SWTpF9z34YGGsKW9rEYbh61t",
  "key38": "3xKrUQcfqC3uy6PJKa3DQd7Duk2jqaTC8yRCfv9X7PDzLKCHEjNQGF8Yj2EuofhpoKmnHuASmgnFxmSMCS8TskhJ",
  "key39": "25msstp1LUCtZ3nPM263mX92ZxCKEpMvdEB2QGSRoDSMesTfcActyahzKiff88X6AciU56VSEqcWRMJRJMrvVzwg",
  "key40": "3gkLJFb3ppGyzh5h7aYmd1v5zxpbGq7DrmYnp1EZPmSvBk2fgR54Hrs3dtb9VYz2uZTfuzfey8swigiiSiV6YCfs",
  "key41": "5PSXbL9iz3phCNMXZth6qDBr16LVyCPs9Snv8FLuAwoWw1KHEEN8UrWs87aBpTBndJrT3mdgYQYmC9Tz2yJ8cTFb",
  "key42": "5dmioLMNoC6CTGVwFjVJASWkNmj18grdaVmet6JA1UWxsVbn62uKFcDdFiJQVQjf3wvyYPLkeYp9yu5fr3sMEptx",
  "key43": "5kv8UmuJL5ks3G9eWUvC1M7fUmb5g3MjnBsAfX3EyJDs9joPYMwRyeKbj7u6oEabWZE96jgHGzSMCcE1ESry7xUZ",
  "key44": "3H5LACY7NEYvbQePimXwqW4AaGLxLw57jjpKCP4cgke5rmcRp3eJYpQ7XteevpirsLy78GMubmMAktwSp1Mavh6z",
  "key45": "6Q7qacjaW1cubexTRczpf7kxwnKfPiBjPuN4om85Z8AvNXDSuQxFz366Ww9kzUE1D8NGzFCKCJqftLG4BKbrJgv"
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
