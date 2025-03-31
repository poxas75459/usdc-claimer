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
    "3KZr5cVSKeQEsWe3EKLg3By6MJKSRAvoYZa9sTiwKycACi5gQbwxBoK1F8C6vMJjj4VBz1rNSToErxoY8bmKXZNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LK7KrL4iBnkJxBvuWVjWRvSdmfXukv8JVdVuKv1pLTMud8KmeoQcVLVA8W3pxnJZ44Cg8n5SM3Wfwu25MyD6LWq",
  "key1": "BDaAHSaukXzA1bFpXS51bTtcowq5cxmjVxqh1ezViDq3jN8Q18aJSkPmceRk91FZFSB2MKtPTfTYrT5goq9kuhT",
  "key2": "3xmijo6zx1XJJ8Mgmd6wMHBmHw1GfiawnuCRZa2XJ33zHnquyNziZpYgEoyjrMibfU7odVTzZLbTiKdopfjdfa5B",
  "key3": "2vetYfMY3v7CjriZYq62xBNBrK4bAxPL8nZHZSMDFP9G8EWeeoyiHJg6WuWCtFMhtEywxepWmPJmT2WmZp99Xd4i",
  "key4": "5FmLCoXrcFBTQcbDRmkLqNNjduoFS1iZJMa1tBpEVg1M67mre589rG7rjoApBatPBzaqTdtvNPEzV5EZg8hCsw3f",
  "key5": "5xzsSJSnrK9wxYSiv5QtBzAQSWL7V7WdBms7qyC5JNmJpfYwkiBxzs1YXSqXgzBG26w9MU9Sv5DMUA9PgWsGP7Nu",
  "key6": "4gRPfANj3KCqj2YidxH75NBh6x94k6KTp3j6FxtxrSxTgYTYemkokhvC79GXNKuLatuVa9u6Eznu6UmeniE6Aiee",
  "key7": "4xwouNxAUeqJpTMdX7GufFtRQfVq3EpGz8iGwuKP4v5vLMS44au9EV78bst23VxJgYfzq1t88WL72KDvYVsTXGsB",
  "key8": "Tx9TBVfUqZoTK7pFAQEfcNxi12eLhG6dVanPU1xkGUAdDCUKv9ZgqvhSN1McyYyT99PkK4B7WVQgakiwCfbyKPY",
  "key9": "5VfqJYcDUj3kxWxgw6Cp3Gjk85Mfi6m9kSvAKz1TQ3tQKw62JhFGPf5NgpPnEBja5UQtKFiL6rqrLiD4BkwRXxnT",
  "key10": "4x7XBLoN9eRLwnXTjkUPDPifHe1mgWzMPCfqdKG5LAAfPVty1catG7zsbQbSyx4GivvPTaXh17hf5qfVGcJjoAnD",
  "key11": "KRcDSLVmTYHc8B6La4Nwy2pzwgpiEPGmepHqZSBuCJt6pJMDTWYjgFzE3YZqgEFAv6mfm7yWx8URMQR9vrMA12P",
  "key12": "nqQ946KhBRsYUFHJWnvRwBTAYvw2Ma7xkq3g1jAAJQhJ6NCxvgTpuqE9an7nbLpmHqcZxtygHqDvNwiNn7oFoCA",
  "key13": "4Lus4M1f49dYYpykNknNez9cHfVFQzxKDZKxAn57PiYHMK1epkHzSKnvtytc1xrCDnCA1F474Xj6gkqhAe3MwLz",
  "key14": "5D5RUesCoahjsR8WXwJJx3fVrsjXtVQCUcArKMLttJ15bcT6VoDYGbLMAjJVK2RAWeLZEyuff92Hmiwdcmx4mYSb",
  "key15": "2QSMuNStyrgitzQwtmkq8KhVBpGkDPYSxMkoWy4wMd7RGYEtYMkAEck4Nn5KF73ZkDTmYGF8eZ33pcntquug7C2i",
  "key16": "56xXjVxRKmiVdJHqjCo5kF4W7pzJmSA9GZsCfhG8UHpfAZXASePWfhUKgKfMiR7FaNgp1DtcKMUbSb3Msoi1rRn3",
  "key17": "2zBKZFcnTAAhgUEfKjQo4nWpuNawKN9fd5n5txkHpULwEY1ED2dZut1Ko2Ez8KKqin7hoTDjGzjf1iyXHDT3E4Ra",
  "key18": "4eSmJNtJLtqPjBL292CgQHDCkr5jxzG4B8mwqY7FxCaWKqDwo8tgxuoRJ5fSucMThZKR5ipAEqepoxKTSfZptuu7",
  "key19": "3eWGxoZR6NuL1gebrJ7gNYp5DZKSifWx8y72emBEVzP21d4JsMJeBDxL7TWjB4DovryzPbyfVftAV56nZh4qrUgL",
  "key20": "vGX3uJgrEpQn5ycFvyKyYmbP57P2zZgGdLTmbzCk4tKSJsv1kHFXoKY3SQFqWyg95GmnUrHapKnSWrJa96yL28P",
  "key21": "4vbEFvtuvjceTwUhgaGwFPBNG3cRUqYsptsYL82cZRgLtqxtr3u19gNVQAGpz3LuNQFahY231V7c18HkZSfHCady",
  "key22": "4MUCNx6X2tRU2FSBuQBfdQLwkeuvBakDUQXxuxaUPK4KmSFvsAXB3rx3aVGN1t76bZWUQCZ82oBecxKM3x2YVs5e",
  "key23": "5sBgaWjQKDSvMy5MD9scZUC34qLMGwbGx53wHXw2AMDNTs7cXU15GU64MdPfxDM7iHkdoRd87BCDBiE94HhjDL9F",
  "key24": "Hu9YLwuhTfuqyKrRASCrtuzLEdzzHJnfddAwJaBmegQc7q6pSWnWKW33aD3MVFovrngPBR8eaxeUNpEtTvkNNrq",
  "key25": "2khZqtzowNGVdeURruGkkpwjRYnQEQ96shhTbGTEiBz5oPFc8wUBtfKjqZwC7RdgcJ3pQQkXS2D9SLp9Th9wMt33",
  "key26": "21h4HjozNcM9AjJRUzGCZJLaUR75BUMcLQcSBwrqmTzE69LPrHY1VG6aoCV2V7mv7a3ZXaW1b8sM3Wg68cUcQ5G6",
  "key27": "QfbveEP647phai57Wfzjc1YVqBbbWARPm5ArYvVNXoXK77cXwqunuCUpsymZSMwKuoL2Yihu586GBH38DpFfSM6",
  "key28": "33FBGkinHXpC6LT6d4gR1NkPPVpgQsGSYR9utufDNEi2Vt7H12BdhbdfPcQQ5my2hKzjc1iFvUUehZjJ1iHnYYxa",
  "key29": "59wwx9k5o71Em6ZiKxqwUXEPmSBMxiyZCmLLApoidRJJNk1FyTes9bMo7aoT6jkVWxPgK9tK9wjsuBmssir3vYJ7",
  "key30": "4AC1gTtampRBtS5QUDR1WWrsGaUAeobDh9BFTPWeP9Emqdf2sWboEvGy56AhL1ufCFyBjY7WGmNXvsWUj5Bz4FwN",
  "key31": "gU8jmJAM8APdnYV2GzwP9ADHXTdZUTnr5srUzXt7WCufdqHtGAwkW1iECBpcW1pQMeaazS3RjLXH78rpuRPYMMX",
  "key32": "ehjXwEX7b6ejeEsq5iPb9CY4SeNAy9RgjCVJPeG1DJQpepYvCLhbKCunu55jEKYHsyFNpJfmDd3jeZ3AJF5BcAm",
  "key33": "2oz1QQAcP8UzgM2qsF8c4b13oy3oqPLW6MnnefWYZYTMeeF3kU7GYH3NfN4RVaapfEswxkJLmCEEaXR8L58bfWfH",
  "key34": "etg4UJHZgr9ryeYog9v9MzzKCdJ3TrXjKFDY5fS31rKbZKKbtPv5Y6k99ZqhJTmgVwtzU2JmUfBqUrGqLMVHfZu",
  "key35": "5rapcnsuhFKhX5UJw8rKikcvWkKNzhhbPAHqcNXcdwWGAUbNTVJs37jAReBK28SCba9YVuRCrzDbNVfe4gBxNLCX",
  "key36": "B27cSJaNBqY59FZXJFnqcec3tBHuQwVVFV7eVp3aPW4Hz2D4z64ucfa34CC7VdzsDSrqiVL9PXhd9Z77MHnPJHR",
  "key37": "tfsADFyL5Qqt2ZiNytxiRFXwNHUUmv9jJikxsXNmWqAp8WGAYuwQ5x9DyE2ZTvEwHgD4TDtdmndxNu6g4vg3YPn",
  "key38": "4Y1tCVFknTrfAqqFX7H87SZUd37gqSJYNasGF3yH8t94hFyfQLAAkJ9P8afNkVq9jzujcYTzGgHgMaKurdBDcXwf",
  "key39": "5V7vYz8yRJCmoYSi9sm42quPgBAh2Z3UxbJkJKdKDUBHK66N33mTV5NFKQEzvXDFSZRwAj3K7GMWQ8KxP9h8C7z",
  "key40": "2cXCrqQHWrZ16xShHtpHwUDivCx9WysBGjkXxa1JDabPtvahJKx2rpPx8pWNGacWGW7irtLuxBqLn3mw2gk6Hmu",
  "key41": "BDD9Agto2SBFn8JsG8LpCoNHodwRga27hqbj8Ldk4jePtYRmXqFAWZnRTNNjCsjx5nRUQYjpfDtrwELW8ubSHMV",
  "key42": "5fXVbCB2K2pwGnHsXTp6hejdo7yge7KDzsqNySCtCdYAjcuEWPA5DSxETgEeLksy5Zq7EUvGMgJfJHPiBHA3XCWa",
  "key43": "44oTXUyWWwHGwy7cxAeQVFHZLupfAkkjidKwNHNds9kw53JVYonKDPZKx6pbPPNZzT48SWd6nAfgbmpWHr4to33q",
  "key44": "uCesdGL3y1xCocFQ1h4hDShiLrpFGjwju3WausVXZnZeJS77n351Jjn3dUsgNm9STAJAWAnqTzVfwY6vafoUQce",
  "key45": "R5pAJujtP2s8F9T4YjQdFDFsTQY3ztmPVSLpPX3WzX5D5tdQHF2ZRQe2yZMco3WSwu9oYVWg1Sx8T5bBzhDnPN5",
  "key46": "46x6iSdgWuW4WSvNP8N1bCn1vGqi4B3uWkSFuzFHX1EUwwnNkWaXnHwDQreWKJNwqJCQi1kK4g5aG2xykb2M83gX",
  "key47": "3ZMYefBcEBsXqxZcuwd8C6fFnr6bX3DK3RW5hzVKiv4zmV4tRYMajJ13zwZ3z1n8SowYiXodcANZkRTzuZKS5N34",
  "key48": "5dkG4souKMmkJvAo1SjHVtkNT5jp5pyDPTFs2VtyH44X8yka5hWBj8J1K3KneuzeBc443muezW2VSWEYTfX6RCpa",
  "key49": "5TwvNUtLe1MbUsLhuRgmZecPWYa21hGXhJeWvH6gDx2QCZWBbBdU3RrXZz7ga24VtDR7Ex42jcHzMz1rUvzNUao1"
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
