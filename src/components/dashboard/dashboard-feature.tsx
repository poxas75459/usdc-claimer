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
    "4E8CmGbhfd2Q7ZRfSHy5nKrFuc1LMR2GCrEjKP2d9oLjcyJE89fLsf1zAWgkvtaWN48u1xyhMBjVHr6kvdKqVZrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qnn1e1Zs5NQGRgxkTYr5hkZFpJe2BizDg6FVKo7kTzPxkLb6xs37iUQhvZ81G9vzzjMcDhh7ogR5x2YWbZvYED9",
  "key1": "5HFofUZStXCzEcXX9GNf8APzQjZyUGwcg8AbSrQi5ygsXWYj3bxL3LSR8THXoNYPoGUuoQ7NzthRsgXEZdHUnxwj",
  "key2": "5D6iXHBuh1ukwhx8qe3ErjR2BVYNvtFegtmAJuzajUEneqjq7n5JKngkFQ1uu7hArvBqtLCUZbiHeJnezJed5QQD",
  "key3": "4zSTqgZ5V8M7F8GBHW7vzrZ6fnYtvCfcDjJy83UjCEGyrP25TGFrTA84WPiGu7hvpKk8W21i9tJDWbsLHbfx8eBj",
  "key4": "4xTXmaPsL8oQBN6D1Ummqg7BPxBqWFn8Q4pzGofVJ4iqcNeuYQMTDu2fDE9dRJZeYyUzttBHr9i8z1JufUttYNzH",
  "key5": "62cQiK8wpxyhsDmmWvNNCDsPP6mkCiDSoTHdgwVUJBWNg7Y44WQrEWwerA7m5Vd4YgGnbicwBGFogXKXcdLkYndY",
  "key6": "4uUe9FAUGGBrbsKykEFxL96HXsQ6FERMqDb9ckgHFSbTwdHb1gthgpTuad4TbGK1LtjEW86YgqL8cesqDo5kD6vi",
  "key7": "4yPiWsVafYu115XJYHBU9R8BaEu5mNxEyXchNzc8Sftx54f5NZd8doK8F8vEFskn6AbD2fdbRVEjorDg39qMXHP8",
  "key8": "4kAnRGirwgNvyymWwp4NPrFbHtFQ5B4QonkzXT2StJMaZA6rztkNvFkpf7hA1VsPitNdAjFir9evKbiZPkmD1SX2",
  "key9": "5ZYmSEbKfvbtKTw4nHt9SHR6TNfdPXzFM3DbHApxDVCGnj5fiesJSqBGW5XgB38yD3btcdPNm85B2Uu4o7jfe3U6",
  "key10": "nGAN9MPXNNUxVV7PtPYsWhQRZpqRSYuHrW8t8oSMnXm3EdcwAziirbrtLVXAmSLambiA9HWwXSnWMGMZpHs5p7Z",
  "key11": "5LVNj9xqHmwcbSvxQsxY62DMNhkY34XSniewNEGrZVJYSRvCLw7mSWQnaf1kVt1bZbgc1hnyY1g1qBNjFXDFmMem",
  "key12": "3PNbgNGDaU3NcYWjzHg9KhweYxihAd9DiCE28f1L1GdrmMctEpk4BFDRRNdbLLN9GKZY1nUcjQsypizokhHKAJNF",
  "key13": "HioHQwCU6oGGW6TxKFQnG9i86RP7GVxWsuiJEufaPXy1HzsWWMWUzNLvtWVaqAq6ECbYnfxeJ1Rkrpo8Rcn55ER",
  "key14": "572G1DD7etrrX4dsTZTrMZ4VjAYA32BGJWNucqw2YbJzoYfVKnxaKcy7fRkDvcvaVVUoF1LMBBbnQTmLBKaSP33x",
  "key15": "Li2nDiPafDkSKTtxVnUm7HDXsUXWWzeBNhnuqJNkwaLM6Jv9hZcDxBNTSTDBdipYFbtfCuTbfF2ki6M3oQze2bh",
  "key16": "4mtnLDU5KXySsZRVK7dWjDhGbhz5ZRTEpjQABwdHeegesP1EJatjygir97oWxDF9k2ytPu8GCEvY4Xup4VefsVCd",
  "key17": "3VXvmVbLCea8U413THfp5FapmeKZtuma7AsxkWvmVqgVKGmWNCw1s1em6T9UPnKvvkhKSEuQLXLW5XVujLBn9Aqm",
  "key18": "67EYE2wrBPJMfSAeHm94czqTJC8E4wq2Q8v2AZPdKEVsMooBKKgYqzFRbwg63yuX6FGVsDjkjroPBi48JpVrucyD",
  "key19": "2xhCKy3kczHyJCMg7oCyKEHSy27e3YWJAbxfsNwTDhCHAGxaDGbKuFF9B4kz2aa7zumag44HzPFtTEwpQzQLxJkK",
  "key20": "2eqhUFQ6aKwUcpVdBpKFdQakHf5BxBCHmph65SCX24VVGXkfWWGrNWmKrdfSzjKx9PGNQDSLEWQPEUTw9zqbLEE1",
  "key21": "2WpCEGgWU3c3Fos9wGnF8ZEHgJKsrRsfY9Brt75FEr4WTEveumH9UBfzoyg4GQWMnLUjouYJ7ZLGELQELkpuYr3E",
  "key22": "3Bak8aLhSYoJGkq27PxxG2QTZUn9rG7FMDM31MF3AXBGtL9uHK6cCRCUaTLKun8XigBrrsP8tu3pSXtn2pkAuvu8",
  "key23": "2YciKCgZC1Ud6RWubzMfiPBcQhkwVqxCfkwM9pjgM1LHuPHZsa53a2Vm9w6dfdFowtJGVQ7ap3D9wzkHLrWS3Zm3",
  "key24": "3e9Pb2uzqQnTxmUC9eta24eo3G82ADwTT3zJ3krM4cWVdF8THJnRXY1WdnGGcPaDyDFSd9W6jjimxyxN9w7pV8sA",
  "key25": "5Uz1dn9gjdynFw7EdfdqHwjnuam13KBCethZbpyTbBgMDtMLpTbyfaU2XQAUFgzwt98bqdNvwrUv2w7kKGecpFPt",
  "key26": "3986ykuJ7kGpNmiajRtxKyDZT9RyZKGxc4yPJvRtGXJtuYr5BxKvj37tPtTPZQKAzcBdwo6rSdMGCX7UFPyAHc4T",
  "key27": "4oq1M7526NRBrEDBMgUAkupNz6fKWkKGTo1YWwt5vsJ8k77T3KoCbkYwh5YD3tSKJm9WY1n7WqovREpZonwXG3H7",
  "key28": "4dUWZZv5cWJsNWawS8GUQza1176wYEb7k3DcidmXJz9vjF6LY3r1kHctdD2DjuvYbJ3hhFYxvuW6QcgHRaYeHTUF",
  "key29": "2W5nDRFPee27BUsXshYeBrpZj8R4uN5sVnvfRtSFY4rU9pKqC75UJDpNseY6t6LnvXKNJKbFGN7rNxMKVQXC4XGK",
  "key30": "5AzbpDpo5rRYxnuHx1mpTZC6rygxwvEaVSmQVZVBPtGcmT3zShvYYDHTMoPQLBCkdm9Zmb1X3zNHgHUGXMTc6t6r",
  "key31": "21yA1K3rWZsFaafmpLUaAreByddNtimHoktY9hTvLbnoBx8sSogwjrzWkqJNiJNFtuQ3xoTUSNpgw4Zs43Ga7ZHq",
  "key32": "54J27Hhxw5HqVkwSTfwXC2QpJZyoKV7aHtP4P7VZgJu8GBho9ctZ2KsGs74MF44AKej793hKzmtXvDfjaTq9JRv5",
  "key33": "32FpSCoFoLztyDc4DnTSyJ3Y9Xk8mnk16G4b31ouEzt9bZahJVqjXPicrEKmLLEXeeN6Dsbp8aFX5DgscfEUS7AP",
  "key34": "mtMahynLRvMtvdepkCSZLZPt7f76ecMNUELqrknVHLQmHs7rkoJcoijacqTs58JT2z9FyJFPioby5NsQeN6q5hn",
  "key35": "5nvSaAETJgfRDCboXybuMMmTeCHvocspdpa3PrkCdggfzdH8SczDLv72YWdhBFnDr6241Ypn896hSE1PhhhoSeJc",
  "key36": "22PqMpSPy6tN7vTv4pyabQFewnEq1ps1x8F3w76nfy3ixm6akSLBmMDfrMMZG4aac85ymeRV46RNRhwzHQdiNfS3",
  "key37": "2idxg6a3o4ebwe3enBAULaxzbrvWLo9y5EogsHkbfvMJ8vzg21CRWBQDxbpYseuWYP9X6QEswmGsmid5uwZ8Ld2q",
  "key38": "5BXVbbvmXhJTCNGABgNi1igXyvnDsyA3eCx7VZf95ZS1nT6ngCDVPZXBmtFHtExBCG14ykNmGYV1XSG4FJtJ9prh",
  "key39": "38ubcPtW6VKjFp1bkdNuJj3Z1bvpkdC6ek49xNu9Yjdj3pvVWUW4tmc2Y7E9rAG4Ngmrnq7c8d1qJh1oLTAz8iro"
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
