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
    "3tek2A7WzoqPSZP7mKCDu6LWWisANZB1zdv1E2dHaqYybTXbaruWzDf3DbD4E7EdMAY2VV5CZH9tju83ikGEPXxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YheGwpa1N8iE8qsMYmFng9vE151SMu8StPEwTRnfbMxQ1xzrzPbWrqfGhxsXfAE2AHwPx1kkMkKnktMs2n4uhVJ",
  "key1": "3M8nfC7tohZ6K8LwSij8PBmBMwGJwxrn5mejzfbqTwj9DCKZ2YYHQPqWjq6SgsWmaYbbRYDYwhTRu5kA1HmGShv5",
  "key2": "2wLTEUtkkguA272wgF6iDh6tPe9zpZmAQaXKNhn9rCX2PJHMG7LYgNjLm2sib3pSAYTpxpkVobwqR2xdP7wmG1vq",
  "key3": "3cpRfh6LTKGc5htKEcVeM2KzPQmUDViseVcM776Ev2GeNsEFiuTtTqHVN8jKjkWbajUwZATga9PyLjyXBkNPDTAA",
  "key4": "4KSk1Ysq2iGcvvia4AZ3qdXN2YeUBrFGfDTY3A5KJ4yvw6exFYef12fq2MSz4LrEjX6aHhL5neVtxXBn2Spmns7U",
  "key5": "5LGxtnfi4dL33xn9FyGp1WdEfGJHvbnMWchERvFS2o2z1db8TRQPeYSQrTeNpVFonehz39BMDXkLoNdaqv3vvdRQ",
  "key6": "62NQDeyJe6mvqvSgvt3bghvZ7sgsEono4G5uDarGKCypKApsoLHsWh9DnmcKXopuMJszq9XkwHyhRbDgWh2ZEx1H",
  "key7": "5TpuUsVc73dfEdBLb7HGZpkTbALfaVZCJrifNkr1midxpMpJh5Cva44Wfa2NDxd7JYLYMvM8wuR3y9RZHQz4tsbF",
  "key8": "4uQHA9ocEvrEwTCv1cejT3HQFRXScpVPS3dndEefVfmPpTPEjG4h9P6aAa6Dr6yhh1HSQouXiiqpD5Zvpk8cNB35",
  "key9": "4TjbfMu9Sbtfn8qmxUde2KsKsEms4aUc7NKiVMBXzJDht9Z3nzkNTdSA1hUXCHd3DfiGwRMTsWfdAtgYhk21PVds",
  "key10": "2GgPsPijtD4zkw61Ac9thxw9Ro172qN4CDvpVJeNnkrmcWrGDK7Acr6DqidNfMESNzYgk3Vg8jrFHrcA5AkqjJPA",
  "key11": "3kcDxRLZr5AZ7ySvjppCY77m2eQXwRD8pWrR36TXuNuvP2wJ2To7KMNY48SjtMiG2B6f95YqBrWbUd2L8mfE2CWo",
  "key12": "5zm2hC36NoFRUQiGaEKtc9ErSnK7bAxxvBSaVhS9o6p2bK9mjrt9uJhBJxuWnT5rAeRZEtT4RR1bjwTYpkaXPi5n",
  "key13": "4FZdK9DZTYes4m5CkV78qmnSVWdU957tNFEM7HkmzneEqgESLLn1gv6kxhEWGmFixVAiQNiqyPnJSUe1fixTbgnK",
  "key14": "3HKAfLJHhUCvzPqS5tncM7a8rsDNm9YFnYex1BWcdVedUYrPazKYBWsHca7ac1HHqfvQeqiYcNABnaVGXzeeVvzq",
  "key15": "2JnfAAX9hW7Bvv2CiwUaBNe1xstsDa7G7cFgga4LnvjR2GDc6Vy2dmTbkwncXdQDdGYqym3WYw8eGCaBoGYo6dVL",
  "key16": "2yopRcwBk5BLobzp5uLkdYW4JfuC1KYVBuvQCdShmQjJfVaq5xKWGSyAdbmahn93bsL3873oAPFBRxf6hVLKNEEG",
  "key17": "4CSThFW77mv3z5i4hsK7MPBV3EMRFPwmQe561EeA85sUGP4Yqj45zrV2iTKQSJMYHhdeVsqoJ4xRrc2Wifa86RbD",
  "key18": "5ksiRvEpDKnniLBoVGdwFQo47ZPrynbARoFxCFbLHQMijKgj5NoxyM3QFsQLuiq9nLL8huqoSkuuVSbBLGJVwE4G",
  "key19": "2vSoMdyGsR5T5aT4VWrhm9Ews6L3BwkLguASPoPiDR1tuqq8tQq9gxmoxKt9vMsPBjZjekotWbmse6tSYuqB16en",
  "key20": "2YHjJizHKMNeaFbE4BNaVTbR1XgEGNgZqo7CrN9PtHE7zsn37VUi9uF2EBSzdeLxzvfsD29LxAohBS2WYzuvMtCP",
  "key21": "ayrjXuF8oG5aygBAamhb7ExMKCCXc1onQJ4vTn6x8kBeXxS86rMzikLXtQxuMzUwpjrZj5gWbDU47tomFQtPQXu",
  "key22": "4hF3Xpm1inUaynKqNYu6dXvZ7Z3quy3tXgT1kLAfXe26yBr4y8WVcRgKzCUzpxzwMfr8wc5AuQigSjrPuKtMUsCM",
  "key23": "2eDMc2BNkAYMrdr29JZqibv4tZrRSakUsJzx6kwKCSp7CZvMLNCPiSX3DzPY8hzuuH1xnao28vac3fuqUmuQzsRi",
  "key24": "57K1zKaH2WJunF7JGFEHt362ybHro9avu2g3dgCCXKwKXdL5k3Kjc1Kxvi3qeGCRCwyNPo8pVDtu9WcLCUakzVUS",
  "key25": "2bMLf773z5KWHmdN5Vwd3W2mPhPrWc4YJKGVobaFvKyHK54NzymcDt4zsqR9AC1fHRhtrgg5uv5B3vHxqF45sPnJ",
  "key26": "25y9NwXqd4t1i7WCuH2oXBGbNH8pw9KmwN99piwrvkQ4qWtgcnqcYMUHbyZPL76FYQ7wEGT162TmMWBGXRyjBFeY",
  "key27": "2wyhkfkHT2ZEVdiKazj1BHQoqeyHDokAV3BJKtTsamN6XChYids7HL1YXcSTGe7Z3QLrXHNZNsgeAfETU5gsUpPx",
  "key28": "3i8F4xaSZtymTBd5B7PdWU7tw76kJZ52pznpd2bpcre1p56vYVKUVwfta8U4SEp851xmzj6wQs4iU7BDMLif6PQX",
  "key29": "3K6a4o1bVXaD6JzP43ZSguHmYma2YgXgssXmWKpGQqq4DZctSC4bXzPKG2aj1XzJTdu5E1azmFJbajKS7nBL6zsV",
  "key30": "12961hThrXgufL72yQ66ZC24AbR22tCbWuDPrj5scY4CHYDYijoUTY7rU6n7KHMxEzniUKLy7BF4kLNs6Cc1w6pp",
  "key31": "3RsYTiGNos9dzh1u7bDTN4E6bG4xyyRNzYt86uGTfPbiKyVpbb8bqoyxpwMaeq4chhDGaJcqCFzNYD8BxMt2dJSD",
  "key32": "2TM91QiwySSTTWzBxtdrUCMcQfp43L3bPWF4RRM6Lq9NzbGPUHDF8oM79dENTraZh8weRxbk4jQA6M6f4jXExzMs",
  "key33": "4ZN1pxQQsPBFT5TQ3kaNa2jYBGWxbzXgWW5RTaE4mMaqTuE7StsnZczZVjHEUNJKY5cnJXvo7zPmtucvHR7aCfGn",
  "key34": "9n5ghUnmWpsNQuqAk5A6rjRaxEPE4WDFqEqZXJwjHFXJGeGA5ii4QpCosP6wU6M2TqzPdQZPZUD5hcrjWX8pTUu",
  "key35": "2rRuCm1pSwH7dpcYNJuETPphKKk5NfvFiadsu2J3DwndNC2FPoqD5huYGVMCSKJfs7R9oBNPGRwmJUqg7rg1qTLD",
  "key36": "5jhit7abYKP1jincePBdfTFUk4AobcJnhgu2rjVoUPgA6MUFverrEZZ7C5VtFGRThfUrVY1Ji6rBUhgnTRpDhLbQ",
  "key37": "5ykyrUq4GcBEzxKTW4qazLRaXTXgvdyFkrQJqyTnHwxb6NFEZ1k5Uxn9HL2iPduqMv8fsrUK5WM2wipNQAG6Rb3r"
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
