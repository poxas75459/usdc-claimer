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
    "3D9qzzEfhasEJYubPb8T4bdnGENZHxbotSRDJcZWJBvZNDSnZLjS3eY8ezwVKbLgW7h8vGcnGJnHrSaq9a5tVC9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQude9nWFAp61ADXoFVUGSKPpFPtjG8H6pJJukfzBFZj4Gn9VXocVmYLNTi4vpgeSSskDdUSE1fSEN9MYweMjJf",
  "key1": "3G2v1MA2As1CJQHj7X7zmksDTyXfRnk8GWpyhRytedZuBLqGHME25SdsNaN1WgiBUrmhpwqqB1Y3tqUatSbHrJYr",
  "key2": "3M3t1AA74x3C3AC1eLq5xy4Dka4Trw3m4swenydFSo9rBnebgHT6FoypiNdCArad9rZvbkSnq9XRk7soAZuY5i73",
  "key3": "4GCqQ6exU6hZhhCcbVPDemjmby1eKbGQSGHsSwVC1QPe8xvno3nkfmcjkXkggBavoK8PTdwq7YoFDWKLUryD5GDq",
  "key4": "5DGwVry3wE2hCXvo6c1SyRrpeBnbJjmyb7QmCntXSSE4QDq5FNBjZEJ1qWVydbKNtCZzER3upsQNqtwJ2HDBu8fA",
  "key5": "4kshScCTFnVmn1WigDDfe3kDMGo9Vehhf2fXPHg1CYJsf9bSCyBGHzaZPTMeuF2LhNioj3amYkXkemcfkmjyHGvo",
  "key6": "3nY2wk2hWes2oSF8icRzCYykTuV131NPu6E5swT1i9vH2yDFNjQjb8XAySfZ8u9uDxJekvgF7YTz8upEUEASnc6h",
  "key7": "3TZ3zXj47ddWkRTKRTJn4kTSLRVbsy39xbkd9YbNhiZfdcPyFdcey4RWi4vZMSLb4jdHbMqHVYtwFVKEXdUH75AB",
  "key8": "5JiSJtL7YhbpNZ9dxcACs1yFaUTfHZBCvd3t7Zx8EgZrCCdVL7vXkVPxwEkY98EDBBGRpRFLPacweMtjjYvSEX4T",
  "key9": "2VRDLn5akR2kDrbZDomyBRqYJ6FaNMqjixqAmLWLAkFEHWJkgqcAygv164E83sJ9PZS9mZyqdD6fZtYrWjni4CMa",
  "key10": "2EXz22RiavW97LCkNfTTW8cpGFMRXPTgwqqetuyuzMj8ACNQaeFHBraPe6AbPri1LGDd35TgFZxbKfJ5jFScLre8",
  "key11": "9zpctr7u4GvmdxpQLFTF8DrrbPaWZ24Fths2sfzxa3zCbe79UcGPREZhSb61UXdf75usxZPgzbtFx9R41yfxKr8",
  "key12": "4g99kLRXuwPCzJYpVkzZEhMviQ2BpVJtgEvTHAiYJCH2cMPuz4EUSs6cCCMFLpeBS59xZbMYaChKQ4kqCN1izfE",
  "key13": "5i4Jb3tePwMvuSqqg4ptSCyAJQGbszxaYDdhZfLFBDt1ZaDhPBzvXVc3Pu7VZHz62PVyv5QBVC8dzbeCAX9n5Wtx",
  "key14": "3xLWdoBVxc1gJ7tWnk1Ygojsx1tvahZ6duuijmJA532yPXMPmqeYSKwxe6VJDmW4DSPGhDLBChYPLzSrhU62WzHm",
  "key15": "3yMVvZrahiDxaKD8qthcUd3LTL4wgWzw61NJPhE4EbLyZBERTUc6Bvsvdm9QywYPMu5sDign4dVNLBhyTAu1VXFK",
  "key16": "4FPWkQsBAeUiGdVsCw94UWaHTyd7gNuFm2VZ6ooZQ5NtpkhHv8mWn8H9EmYQmrL86CHDpSmgLZkqT7CBmKa9iyRe",
  "key17": "4Gz18L2m9MEnBXH7rEc2YNGcVRtk1L1QKnCJBQxmoiQ5eg6MJ9kTL22vpYfuzX9HWA4TviyrFGAEfBfV3qGyxuAy",
  "key18": "5kpvbxh3djnpCDvTBAW7pya83k8ndkKD7DcmkKX6hDRXQz38n9sut3MQe8jcKK9Xrnq2UcNN6YWtMsMYvEUi8BNV",
  "key19": "5Vimpea1EN7AeEaZySED9YGRAf7wUsJnTJYrUsXN8RR9hSP3EfoGyf1zXueNkdEMZ3a45DM2Btj2sB5Kpk29qoHz",
  "key20": "4mY8FxBb24C2WJzhkmXGRydzFkYC1AxphS8areWuKF9vT3mrLYhEmgHSSLzUQQnfFQUCFo3jrfZX9N9rzqokbaDV",
  "key21": "2F1gsMW974b71ue4oc1a6hwjn4aJ8GCPQFGcCTmECvC6GrFkFhVM2SwN1RQ25XusGvzGthuT48dH6tJebvsjhSyZ",
  "key22": "tZpsZGChRn8N8rW4yjCrM3U1WJgsj3eetAVAzhp31NxZnesTAmLfeNRpEnvbbns716LTRag1xUmNH5GSnhnHn2V",
  "key23": "3mxS1ccoWTp6c1Miw3ewhf9Uvp1cytDmQuq6czws6SzcB2gCaaWJwPR5JQwPWAUM3R7oU9a8Gc4kRkp67QLzKGyJ",
  "key24": "2d19poAFDPoRdWJt51pS5oN3xETV2S1RgALycnVvKveWAWH9EhfQnbARqcozCGcq42c3CQTEPXSKgaihTUPc74KK",
  "key25": "4W6cy3p25TmF8daaYA7zrLXRMxqwbNZ6zJhJTSFs1w29r83xf3PgqoSVLLtsqm2WPwQH55FsydU2vDpCYJtdoC9R",
  "key26": "5Ue4cPc9yoexDYVCJk1wPgF7WQqf7KRbk3HUb1zGswjkCmXSkpDd6pTGyr3UUPskcEY1DxWaFM7gi6ZD336nzKiz",
  "key27": "T6AAVr5dNqJz2vvbfZhzTqrkvkqXNnjuft2o8bHHb6Znhnqb5iP12zg4Gc4anT1jBjGnqNdL8hKKrfHmKjM8XxQ",
  "key28": "2zC85JekizTFvTRDXy3xsqHJSnaRPysZNKm4HJ3Ab4LzY4LhnLquWxdRVgpFwexojfmpS3AyttRyu2macr2mHRVi",
  "key29": "3pYt89GcbuZcQstyiFDwHScjigep1aPdhhuFQRHvPRDcQ6NhfjFbdf5zEbC4oyLuGwFQdqFKASC6UXTu4jMZErPo"
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
