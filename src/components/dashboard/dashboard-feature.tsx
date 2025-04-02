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
    "RmXNQ3hXJKkkSzVQBboeZ8vDhCgty8hDnW5kmNrAGiL18QQjHywuJPvTWCxiQKhPHKU189UTUGGRchvqg2Bh9W3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bS5jjbtFDg2nTTSiWBf1mVLWN18Hd9fYooWNEoLAV5XJdi38vBRAeqU2XKEngc4hj3zrD9BKRU1mnPjBfC9DkeE",
  "key1": "5u45KkDjkyZr56X7eMRCAy3LvVXnDEMhH1EHD6xFp4yFXN4gSaxtNgBeUtbtLs5Sc1tboeXoKEiLGDQVocmtQq2f",
  "key2": "3TbcSXp3ALTPRgSwD3awTnkswk89Rdoo3tFxEfKwcbMEBDVnDjgneq9JSZ4kuLE1X9EPfF9KTU99pBDATz7coJhD",
  "key3": "cgMpoYYiyieax8jwxwW2mY3ueR2qmEewq9kwJEmjxJnMDSz4BWwZVfCBraCC9mjaJx32nikJgtxdD3JZt7iXpME",
  "key4": "2DnYmXKbP9z9KLoSw4pUJXn9qHwGY9nxPGnBEt463DotB9T6kPYiweJ8dH12gnoYW2uFSW4y48WceajNVh3ywetn",
  "key5": "4mW59ALyyzoMDZkiicwyasW7Ce6TNXRrcB3FuVFffcvYtxDeKiqhsXTSeANkgbdJr92fTBkDS3i3awAp5xpAvz9p",
  "key6": "5QfeF4JVASypuhVSwFkEn7hhNPyFTHCdp6ZimsEca6Uu9eqAYRz2V8CEfVXEBPSjJhURzCcDPGDTezW2iPKF2Q3h",
  "key7": "52mmiqSWMuqChTbMhPvCzGMb4oRSsguA3zHtREyfE7TWfm72AHGTxSMQMvg3qnV6UZoiFqYDqsiRtqQ3rLKqumvX",
  "key8": "Fiu3JP1F8cAXcpUw9tuX3SCv7t8URqzmrXnEiq5Npvv5RdQcSQFUNjJAPTMSQ1pMjnMHWBmuoiVG11iVJgRFAPG",
  "key9": "5mgbZ69ofZhBzvEGdtqwqzrv9vRyDL9mX9zj3W4piTKKMcx3puGmuVJbvwoffZu7k3XEAnR1beAuHuyct7UAjSrG",
  "key10": "4UrqcevwYWZxzdJC67uov3SivqDRQoCgNTfoDVcPbzuJmhWj1dVf86dVrHeRYGGv1iYJUSXFVkaZhxw9jDsVbTWk",
  "key11": "5Hq5PE2G2XPtUdUCDryQLSec19hvGrsiifGJnmsLk1EcoNJu4Gqc3WTuhxM8A1mXor1q92TegesqV3Qq2P2g9c7o",
  "key12": "2wk57qw6zhxdJBZd8KzFz7bLJhV7wc3JSJ8smMTfC7RTnsvL6roAp7m1REUHtY1BstHrqF1iHkYYR1QKx7xq4rgV",
  "key13": "2DQ6RGouKVnyjJJ9ESr3ryJNkyY4HWsW1fpc5AwDo8bGpo3rydkodkKde3i8Ku6HXq49yHNwmtHrvHSJKc4gtZAP",
  "key14": "4QuH6Tp9g4sZRGD1A4rVxgrQTkJkrqoKxU1fy4h9z9MBKNGLjjDABW8ZYreyEVUBDttNxz77rcH2jD5yH38xYXwn",
  "key15": "2WydC5McKbQZ1PoaZBik7z6r2YMKLCbWs4s8eHBUmJXVPvzyuBiroWmKy793PNWqtCNjsXEGerzrAjQ9JtWC3D1z",
  "key16": "F78D3D1zGck4JqPwWxvS45yM57TSLSHr4ZAhvbMruECZisPiGRoa4PSrzHMozatKf2UD8DooUEcKPXUaShHJnzA",
  "key17": "27pgsxJGwbdFDHX3D6mCeK2YUqADJn99fkg6nEpXS3NYmb5qW8RQ7tMbJvsRhRbm4pDjGd5RKKnHxuK2RRrQqK8Z",
  "key18": "3WTq94eSmuvCxCR6WQZw8RhGDx2nDUYBgVWpztxvPwTsK6dn5vzqiEaKmFr6HB2R4KaWwUEpQxJZs5zpC29uGYmb",
  "key19": "39sTXT524vBcS8QFQLc5BWssiqM4LkdaXqoHi8nJeXpTJvRZh2xTR4yYs3gxdzroaWMG3YWoaNwkgvg9pyKMeLZx",
  "key20": "v6cp5JWAFiLNCuFmbbnodcsA4X5J9X38AS33SygPFKifrvMmJmxToa3dob3cn7Ugo47j8e91k9hE49YvU4z5YKa",
  "key21": "5tG4nGyduyqXx9WdMbxsYvXj3epEZeegmYRbJM2DWHzgBfbPKG9WahG3KLqSoFueZiXJdyMAhgfRDZuMHVjwuQwm",
  "key22": "gdJJZbENdA5iqB9ZHjJs1219NGS8BRMvrFVfvo33SYrGtzW7MH2CASQz8hWMRduuvbmFUcwXUb7oxJuqeC7L42B",
  "key23": "3Z1GEWzLcJJHaxxmFW2VbYxtf8fJR5rEXdaZCFd6uLueDme7c5wKRwaGkPPEEWMMdp97pFqZjSGqYEnxA1AHbgui",
  "key24": "2oNPHS4iTDbR1oesV4t4LjoawnnQLAnmzGZjbnH2VRCmSPBAyb37Fnyi9quMTyaLxVYkqEgX6Xk2JrHoGM35shvE",
  "key25": "2aRnWytDoqLYYkjYfkyLS4DZZWNLHZ8bRX1FXfBRJYvYGXznQFZbY6xaXsDrm28eUBs1YhSUMXuPBnwdaHZTENEA",
  "key26": "53GNHsoBXdzoxFLY8pYB4rpiGGKoqPe42fnYYVRmteB6hf7bagt8Zj3GdaoNdrZaxJKnUSxvPozCN9JsJQGUh8fh",
  "key27": "26EnsxsER26ngChB9QwhcfwafGvansEWxAtuY7TKvVYhrjTL1um1L4bmWqY3zMhVHaXsd9VjL1D4RgRH6Qhj7J6x",
  "key28": "sT9ESBaZRhQxovNxQQGg75pRaRdgsP33WKcuA3krF5XKzwv7WgSX8T6Vny1JF3aMCerG9aUBbkAX99B8U8NHhS8",
  "key29": "5qAAuBudbb6pLNxpHy7f7ixErHGGTLCPHFxQhwtkbzLn2rgkpWdVFmQ5yxyhrwCXt2yKviqp8RDuFWz2SvnJteLA",
  "key30": "3NkGCvb8RBDNfxmMuDUZZ3mR8QycGk7oVivJqzsE5LYzoKKv1xV3EQkdcn2RKmgZLTZWoJ6Mpa2ncvrVgbHgjPUk",
  "key31": "kjU6R45dvE7VdJfpqfzM7regkNPuNv28R1S64x8b22aoZ5np4BfRuJxya8yi6g4PaDANGq4D1ukXCt9Un86Es2o",
  "key32": "5V5His2wdYkX6eMYJFB7QURaoQF5oF6yP3QUFZoaqkAhC7VY3DLy9DGS3PSjrhXDhN4d8g8WnkLcikAfrtozx5mu",
  "key33": "3FNwTGtQY2cYB6qjoi7eqsbZu5mvuKVj2UZz86PyeLFwKpRJ2huj66npY8k6P2AftCNyStQsXfDriFUTw9Ly9eru",
  "key34": "3sqPQnmPebE8UZTSWyuz9JeME8bW2dB5hmpApBATV7uUYwzyKvTPnFWJCtEmPbLTQcbJigJXjC1TUQVf4VLmVG4E",
  "key35": "5HPRMG4dQAiYzA6W59m1U14VdKxA5XmX82y272ut64HVxixMT6pgxEBT4LQCJa77z3mp9EDaj2XF23aZP8YYHUBW",
  "key36": "55JuoX3qurKqgSVsAfeBuu7SRTh4KBuqnLdQ2vmZrUhetFgYQtSz7KFU78My9XMgS44WYVKRpUHGXYJdK231NBkM",
  "key37": "352D2LVHyLMbUdnPqwFzhQWxt7gHrmTSsaUiuM1P1SbT5rs4vRDRTUPfeUAXE4A1ndYeSvMfKRVU8hNpmREsXF6",
  "key38": "oSuPavSQPteisytcNViyeXB4BoqJH4suucy4ViYpSUXMXrE6NyY9AsaYy5Lw4FNq3BimBmyYmVmMZZP6r5L7Jv4",
  "key39": "oTdVbpihPV4AR4cAeJYSwySmL93BNuV9VpW35gjZ9jk27D9FNJS2NsPTSCVi8Wecz3KRaYRscy9xiMNDHYANCyS",
  "key40": "2ZhdyCNAEMrmePyorM8eo77PdzowHFPahPn18y53utVQjisNpUDnHoeRDQMbmaN5Z9biw1N7x5XCYxKRGZkQLcAD",
  "key41": "y6VFup8yXd8uHx7xpNYoSXCmZY5UEFYyUmGzWVqwPbJ9dqBYoh3hzAWQBLtLBeYhNuHRTr9pDNjB7GLcN1YbVR7",
  "key42": "fdJhjhjPoR9fjo7yr8CAv7PUguGYmosDRqPfFK6vN7P5gnYbunvESHSFDRA9kmf5VjqWBS1k9iznXJEbXnLEgMi"
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
