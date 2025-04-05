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
    "2WuxkeDnDFV2tdzNhUXLRTbm9Cut5Yz51xabuduptDrdKLzF33GToZRhJgQNwFyakx8ws2vJvxthTPv9aqWgDDfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZ7LM8ALGUjcHMW4ALKbrG6bTUM52n54b4uqV74DB5jg57yQ1tPsAE5MESLA5jHEQsGT4L69d7kPEV48biphsci",
  "key1": "36ua73J4fKjzyiuutahuedFGTQehVfM6Yg4U7YBmTy7feo6yRgSN9vUz1Y2pf1Pz7mwEvJ4CT8tXj54NKxNG1M6D",
  "key2": "3idRBGwFLVbBapQEuRZhW5ucZGRy5QB4rygHB9PeqWXG4gqMahSXRp31CCr73YxHRgxg7vogQRGxnNPeoRWMV2iW",
  "key3": "mXBqPHG9jdBNMKZvv4HZK1zb5pHZAeZu8edCKR51WKFAPmV8kz5w6JSa8AXCVRuyv4p7cPZXRwyncEt8namHNV4",
  "key4": "3chyT6bxzctNzSaqASQsaxJp997vN3YZpBBHuEJPc785JHLFGgAjyoZif1JBsAqbEt4fFA6bS4aeC3w2N1APH5eB",
  "key5": "uJTnzoyoQCKLgo6xtCJMMsAghRC2sMhdRjKXwcX26R2ncwuZTuWWzfYAN9wbdW2GwTsYcNeXEPibiboCPwyn6Jm",
  "key6": "59efQhdHpWQbTGEADAHfrMMuyF4yARADhGjGfhUf3M7vDvwwB4oq3M8jAAUnTrUHHywrfC8kY4fAPaSGEqyW3XWo",
  "key7": "MMVfLrgnEDPvdDRuMtEUNDsLKwCBNgCMv3PWGmQSsAbXnUX2G1WfX9NzJDsjCoCoGnGUBYFYKR2xoTsCw6aeYDn",
  "key8": "5djiXjDWwCAzBy1uFVYRMmMNjjbB6o1pdXprRueUFpTxU4dqm7yJHDHzreKMouLQmBd8idaJcd5FfX3ndAHmFXsp",
  "key9": "5MesuCVJPEqAUU5txymS9W8Uha4GMBbJnADfYfhfTYwtv4i3s16bnG4EagWt2gem37aHQPhTroLiSBZPat9FZCpy",
  "key10": "4RCKZyf8aScQLqCN2UFMhPFRVem2LUNchb5fW5raz8MLb65kgFtaAX85wadWJ8ZsS3p5bzGsBz8bDsY6nKgUTeCj",
  "key11": "3YBRHNGXabxgoUZ485mkmQAKyVg8fnRd6gHVH5UH9pEHXceSrnaXwRd3Fgh3tp7PgqJVq5QuKgTM3LCMq8xcw9gK",
  "key12": "4DBYXYnsoi6jWQevvXi3xwYZrAPkax5fCWuMonkZ98mvoWShpVXmYFRHKB6XLH3ddDzpCegkzhzqg42vYtSUn5p",
  "key13": "4SVLvrP2ZqyZhwqxN57chic3FFYBf9BxHX1fU6PU126j1KQhWrbdduj2513TMkVKHCsAV97HUsUbU26e4TrwYApv",
  "key14": "4ZvLV8fiCEw4XsDTkeiXcApBi94sS5xBXxg2CW9UxNGbiZfui6PG9FSF5LLnEsTLVwX5SfXebpUjxfGZ1YXnFd9B",
  "key15": "3PNsqHdAy6xZ8H3HwczB8xZrkTjrc3fbDstgXJoza2jGz5YC75m1ft7iAVYjMZzuJy3ZwwnBzkXrSvGArMHEdCP4",
  "key16": "iSPM1jx46m8Euv5Emp6DXYTBQaKNt9PhunG1oachBUHsYQ1RMtimyycLy3EQenUUh6AtRRgSLNmE4mYXTBtQywA",
  "key17": "Mo4p6v3haQowgYoH9minRVz69G4dNpeujkLUfJSq8XN7efncJN8bm7uRXLy5VmX3FobWxTmiEpVXgCFsQj3rjW7",
  "key18": "31uBgFbkYuAtL76KvukjbBBsMKRZMiybNBtX8AEXnvjY7np327o91BdcjhkWr2NFZd6F4bWy4f1RZighE1AfdALq",
  "key19": "KKfaCqZnFsNyyouck5sTz2uWyGnQFoX8ntab7nMyU8ebg2jH8CMfMMDXSCcVpneNqdMv4dQz6i6VxZEQv8KnNYs",
  "key20": "9VDgFKhZx3QBr5KgmErUqpBoeqrcRUMogA5cAwycv967eqzuVSkq8m8Fq5oWYq3DKvvXHFmTZ3oXNavigftNmHT",
  "key21": "2qVYKdmNQ937UtCCyD98MH1ncoXFGLMvhaG2jY66DyQ6e6hNNrshyQHCGsAko43E9unqXMWaBJ9fVkB2M3BSAfxV",
  "key22": "5RZdeZh3DQJ2YH1MsNhgd6vPJmVgvZudRkF7VtrUSarCUrmzANvTBhwK6qHNFHe3aRxxvu8Lfa658QUQ5yJPxksq",
  "key23": "3UgRuUrk8D4tpyc21aWkJ4EhqQ2FgUsEu2yLJmcQ1cBRPefb5mYzLzgChsytK7BCqphdb4Wza555zaUxWGnHhqEu",
  "key24": "4i9AXPwN6NQ97dibzBPr4hHjVxGYVpMu8bsCSRTTVwr6pcP2P9MHyWzncdzWSXZH2tzipRA7KosAgzUWvTXksZz1",
  "key25": "52zomTVJHz8picyxMWrKqr9AN5YCNKhVuRud2sedBWDF2bdZwWXpd3zyagUpArjbpmpLPDcdMzsTgtrujE7w1ggd",
  "key26": "2rV7v65GvdDyFNerK2U7Q4QkMmRm1SgKWFtz19ceSCoUy848zSCCmzcrH7Yd7G4XL9jSifocKLQ6EgDRfXMn8v4p",
  "key27": "469jM1ffJLHqsTwef4WAQSeUZSJ7YwcPTAfZKJv57dpgaLqP4n4aSjzpuHXXknzS1YD39wigVmXfP1nCSyePm4sJ",
  "key28": "2yRFiBdgcKWUvHPr6rc5N3EFxWVXD2mwrxxCRnDnTCRJ67p9oz3zGwznKZVzTjeB5nTFuYqCXLdePVjkcSbdxMsR",
  "key29": "3DxLG75Y1S29y9iCcUjiSSJHww83JHvhfYiEFTQbYZxCZK9qh8Xuu5TCfos7y6V8W42XcZJdGDBFkztoAD99C8ri",
  "key30": "4fWeDiuECmijQ6xrso1thAjurjEqGUCnLPD77Q95LYmCsFv8WmBiXUgMYkenhBCfj1E7ocqxNQ5yWaRw8YqZLPcv",
  "key31": "8U1Beiy3KJ4arcemyjEuPCGZMidYq264hHRFFufMMHddx53nSvB9xeqhEhBNZpKkXfo6x9H89FK6z9QeDD242wm",
  "key32": "4d3VddawQc3vCqBnhQywj3LVdJh7nJeVLoXzDwNUBJocfj955m3mWaDygdUdHVZx4CbMoyz2rQ3jyG6KFD7sEm4Z",
  "key33": "TmW8ezJWvn8aC7oBPzsUrXoKPQgKBrZFXbkQwsZGj6aHHLenX1oi7cvnWdLAUN4g1axNQkqbf5gSbWtxJQJMvhg",
  "key34": "2uUmPYZqN6szrMWNK9w9NnEytAdFAGuLxwUTnQ7eCjp7mQo41xdKqHEw5yGj1eEitWLhGTj5x24TfpZ46ktzPayY",
  "key35": "2CupzPtZuGPYfPc9LDLnpddnMjrqKtXBa4ixYGpFMttrGfxgCv9PNZUaY4xsRs9iSFD5nLPSbYob88Je5fy4VpLF",
  "key36": "3gxkyiUfhsC8ZHcTRWHnTS3LP2R9U4z5ipsSUiJEbrybxNq46styATb7LmNfDgvAWqZYf3PRCAS16Nuu4RtyKaSK"
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
