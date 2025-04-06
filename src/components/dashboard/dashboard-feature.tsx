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
    "2NfqcjE7hVnHZVY9mwrbruJsZjKfhumsxmLNbT91PN4W7886fqqrgd8Yx4rmsnR1DCTuU3TetdakmYdvTPF31Uh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJcPurqxzPjPm6pKiSLmgggtGBEcFpQXMje8J8TSyrNyPvnrHTmkfBzjVk9XA8mKcb48zyrZmWTt74dNGs4ri1J",
  "key1": "FdnGUv6RUBiYAECrBK73AACcUNGpAdLGwTEdEqFNSifpbquU9sMfEkP66aiN52qh7ckbKj9LASjTtDG3Bxvi6tR",
  "key2": "4bRAMqhskod5aPsTUvY5gtYdWa5cR2PEsbWmcH83NhJMNp4nCVunRiJaUVyLPqhmr7k9Kek3MLY8awCcacE9Hrd1",
  "key3": "4dygvRvn7dyeyVJU3ywKVPR7ijxA6bMDZGZKCrjeboypP3pLGhiWuk4bus9Ga2h21oGLojumvPiFbjZbVGu5LzPf",
  "key4": "5n7xCny2xvZWp1yvkvX3V1F2oZbJ2eRznuGvd5aT1dSwQbjJm5rmoCrPhG2ya2dThgNGuv6GUhsPDiNTnBUiVDhC",
  "key5": "2NCVSHYmX1tjZiALWnSKW9X5WFz9nJrNJZyfp2Ey5e9GMuQ1hb2YtA3LnXTFNjdS9yxj9KYsBmcckYfqF1pECZyu",
  "key6": "4y1t7vo3Jq4UAKWgHocSgjzj76PizZrzzf39tPC5tcxTB5m4j8rfrCzXaYTHhjg4BpBjSsFvwmwwNaLBd99viRAk",
  "key7": "5KwBdXWNZ74i5eU8Q3hw45HtTvmVsPdrbecTd8XCxPfp8U5FXPkJGTeEZ89Cw1GgWUPeEsjrUabmK1wzLNV3Ldgp",
  "key8": "3f9vCeCz2NoFBtsGCyfH3v2dUNmaHZV9fGLJCv5Ew5iSd6VP2cn72q9r2DvSiK2Ed29G1Gg9aRKh7RZFu3vaok13",
  "key9": "MWFouwRoraMTSo9jdDEgYj7boVpF8oMKwVBmM4zijEuxVMee7LHvqw7HJCGKnnrYuQUU2CDvHjej2f3zns9C1MC",
  "key10": "5MmCL2SThKhWKCCBAghttMX9b97jYUeXdQty1G5Nn4px1YSXVg45cf4zXFuy552AqayK28bvi6ZHHBxDf9u7xVJa",
  "key11": "CdmVxnteqzCLYe26SythbxuPGYpYDvH1GHwGxYm848A6ckXZjge8dMwvBac5ByS6g7ySWEq34jp9APPkARqa2me",
  "key12": "5zCMMht2FqVCGJnNwHaxd6szYt9xtqT7HAqsUY3m9CSBrtAwGrhTzhLJ7uDi1J9vBhv9xt6F1WJKz3RQs8zA4sLE",
  "key13": "3FhboUAbD3LL4ob2YNewQxeYoMCf88FkuzcuVS44pmVkoqn92GZwmbVmN3tfYGGhYV66A8kNghyH3C5so3m8XVt7",
  "key14": "5Bw8ejhbiSVUTRTTcVSwoP5PobL5ms6nghUdA9VPyGfoMhUGwsu4mhZmCNzbwvzkQwGCNbQQWUtKSq9ye89gd6vp",
  "key15": "2p3Qe12wHt5yKZvQcHkT8wiNPSwAA1DKnSVqCzAP357yrTQCdURJwAq8D4MS7YVTK1VkSRxJsyDp2aQmjRG7Azao",
  "key16": "4rMMq5n8R4pHL3tGSBmgZNLfWDWq8VBHek6EBoiMfHt5nWG8DpjNnGbUJ6n8CwfrVE9vxpvS93hvUwjSDEvfo5cH",
  "key17": "2zjJZaowbQR5kHdc8xFGEjetDj9ocEax2bF2fkZiRFiiBrU9bs3aPda8cEgjskG8FcbspqM8CPXpwM8EQQwcdTBT",
  "key18": "MSXVZ3iTSnVNdQG5YErkUxHwmksVUjmSDjho6qPtFzYUGFPbYTZpkdokYn9fh1JwAXR7gkc4Vp6VFBEZG6JRL1X",
  "key19": "4UVYykBWPAEqAqiKCbhVfFwUeFHLuq4GaJH18NeY33bUBPHB27mJCUTUq6BvDFtEPYEZ4DRK2xjLzbKsR5KqWowp",
  "key20": "4conERzzEb5JHPquyB7fhcRqwpyGKv9U8gehTQtG311YN2mkvUPEgt3ra5x9P8XrirnBRdfazqj6QdPgk322TAyW",
  "key21": "4K65PznqP9cwvLD5dRwkic9KPYDTTGXwZNfNKvgcXLT9jjE1UPxXfmdQPv5wdodq948WxC2XuNWuktYBRcb26E4W",
  "key22": "2F3bYUsNcwTTZyeCnypG96PYKv9YvbeCuPGydkneqyCWM4QmAauNjoaexdDHfhFX1GasaAxd6F3pbrnDCJfCEFio",
  "key23": "2dretKkF4LZSXCvFYzALjGpeBMhDDMPkqXHRn4d3gogo1HoWrocbdaAvpSch9ap4pL4ENq53zNfxiLey58zBQAnV",
  "key24": "2ndSRD6ozKYRU1W686wFJ9exvgtFAqgvjZLekEDFxdGLFoRFTb48Ddf4W6QYtKabnEfyEzCdikyRsGb3GCzTq5nJ"
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
