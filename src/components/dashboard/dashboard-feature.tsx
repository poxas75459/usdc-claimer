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
    "24n9L6mQEaEykCoRuiYRiikno7iZkXSV5S1CQuaWmAYbRP95qPYH7ULsuzHcJk4AaFQV4tiRikmcHqyDUha6yHq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e8r4g1Sbi2GUzKkbCUv9bsEymwfP4c2iYvsLzgbNDF8aRozviTm81RJKotPEw2oVAMdMvRQeMCv8r2MXpfRSbR6",
  "key1": "R4ZcdTQArh1K8TEEt24VQCJP3Q85ydaDjz6hwLTJ6BVksRXiX5ahfz3DLxRaCpoAS8c7kScxS4ysPgzLiST5f14",
  "key2": "5C6CLbG6aQrhnPVJ6ThQ7jGd3V5MsPmJudfjNVhbgiYcqH7YgKehz9cgp6ACtTVYwuUwogc4x4poLyp27S6m9udi",
  "key3": "5TtAKfFnLaVwvmurMJY3VVdP9bEdGebfH9mN9nE6a2jS6ZZD17iJXUHsofHHL6D7wyttxasJkQe2Syh56mYcz16s",
  "key4": "L8J9AnqhJ6fmBeedC3ngb2bBH32QJbUUbqAwykkwp413Mz4k6qJbPuySvVxDEUjrcoy5j9hQBQJY5YEoEkLZ3TD",
  "key5": "5pmtTWcDRHoXNrPCDaSF34wmguZ3N423zhjBYCBC6ug8891xMuSXyApay3udDi34qVhy9eZmLHrMGnLcA4ytis6",
  "key6": "d5CDPMcKtAnE83K89ocd4pthYpzUyXDJ7teh4UzAAubVvNtZKd5f2PXzNGffkh5J917Vs2971TFPfDZx128ZtAz",
  "key7": "2AvDVZNrSC7kb5EaXjFV1nc3Rw6B5vJyMphHjDuTEBEXGTJ588KFNXt9G3d3bivGC8VSjUTAuWmBwbhGmJ5C5wdM",
  "key8": "6XHcQ1uVrBMpG9Vtj8saUtdsrF8Ye894pCXbq5RdyWrCFvEFMRknGxpPunebohr5ASx2MrBiC9exMnHvWqRonUS",
  "key9": "3gaEgY5KnRdMrFBrePNr481eQVGz1Q3XwiyMbPtCdf2d3JFECh39y1oZ1iTHV9o4k14BBipHfa3RJQepKUxKPR6U",
  "key10": "DqM3xZfozXdepgkrRJzZAHGyzhCLvX5oRMHnJymrty32zrufvDkXm3JDvGVb4xC58jeSRKoLUYfSkcSrqb3oa6Y",
  "key11": "3nyrSLgwYz5rAbtKNp5VaAPV6zP9H1VXbHUAHTzsNFVqwBNWqCB8qVGiNRXJvfTu5jgxE5o5sMp5md6EzZimxo1S",
  "key12": "4L2FYK787LyzXiFGneUUy5m9qzm1eWLSGmb7s1sCogcMAEarp52axhR4sNhaVuSDNMgYsptZPdd4vWhSYuoAmdJN",
  "key13": "32AVgUcDvSJCp4uHTvMRd2yq61NUTQbYg84u7bX1CySMN2F5PkWzuLYtftbDkAd5njKovBXdMaCV6FrVhVpGLiAQ",
  "key14": "nXFZiNdHScUgA4cCBTrHB4JXnik8R7QT5kyqckvL4JryGDB3FehwR2YPFoGsaBU5qNhqdSexSewWhVCL7B2sLqi",
  "key15": "3QFuV6gbVzuXMth3yuwztcxHH4KSuGejRN6hrCe3EJR9zkRN2je9kyXe9co3fxnyytNZRvDwfayayp4S5mxhVpBd",
  "key16": "qWRUe2Z36rYRHQRsMERxcUhPEGAhUCMiWtD5GVBYv9DEHQmYBQnwhFt8CNy8Ft9eGRNVcPMwE2NYzYwsimoaD2y",
  "key17": "2HpY3xwcyarjoFF1GNyT6HyZqizSxRMbEu1JFWny342zNzhwFQroXfVX4K7QwVUjUpECXT87YpJ5ArJYBtbtNmsr",
  "key18": "oBTno9ava6WdGMhtN8L22P8xHg16RNUjPfPnmMvbLVnFwmTuif6RM8vkDZeaEqWNLcsc2Vjpd12TvCUExfzhoMp",
  "key19": "66C8CAY6gycq3qz3B1ZzidegFwAm7mBkypTSmTLF1xpZWWwSWYJxdKzRUSBADPSnuEyTk1UnBRZXKjeKFtG1orwC",
  "key20": "55kMR2ajn68J9fed2TVwog45SvaM63yYKmD6ukzNK7cbKb9951aHFQx8x4fU5HWmmG3HB8hSS3S1QcuzjNaxpPQs",
  "key21": "5fTvw9VFCggLcabtoAP3cbMKBcChod7FtvBwz98YLz7biUXtP7M95U467mPJymFxgL5B8ec4dQc1z7VNrYHCpHuV",
  "key22": "2fPp8hdtYrr4ioWE38NUaxbWo1RcwK21uCLDALseGYFmVBYnvkm7iukfGpeSurTr93XgEYDRGpHin6xSe8ti9WFx",
  "key23": "4saoRzhS4PAiMMFDRXWsRHhBAor7oHaLYNgqdkmmibuVr4zuSQpQCXJUWVFzjBg1bvBGPYxSbLUT1iFtE2WBd7KM",
  "key24": "2Mqo1hbG8coEKjDReKD51aHmvxicWiCAqVjvuzkJtuptvfA5Sm5WBH8cB3LL1KyRQ7NGEqKUBfmjY93xx6eUqj89",
  "key25": "2TmWqUrDGWzAtZt1MuwFE8TLMLp1dwEAmn45FeHL8UpdWpbc5wG9isDHgVYivfSLBLKcQhpYV7VDBneW8DCHff5u",
  "key26": "McSgKBJtKS1chMDwaLLTrkgWEcpnzyFJh2znPgE8t6amZVzhcUcEB2hvJ5jkSU7uvcuhrXjF6r9N79ikwfzmydb",
  "key27": "4VPuNsLHGCx9EUHSSFXg9wSD9QkHdheLUZGt3hfEYRHhD3zQXUbo1yEE6nodTuYpi8kYXsRymRJkektgkEuUmqv2"
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
