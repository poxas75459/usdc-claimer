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
    "2CxVDkcnehBnT2RdkX3sFR1bCZztrFALuU9oHsReZNK2wCSB1bexzKJTvJixTorv9xF4rTUh4antWtWSNMFAGcTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cXNDRCXe6G9FBmxVffbFhkdfiWY68M7hVWNE1HUeWhMLMyu21CHTyaHnBARVJgGMhGNcFAmGgByfGZRcLWkQkzN",
  "key1": "2oEzgHSgkh4JnJeZuXS1mg1EU1xeWRBQy4gn4zNctdnkFj6U3NWRfottQG1foGhcCx9vXb15Jt7T9wMHzz687GF7",
  "key2": "GKMVbuhS7dv9DepPjeDwM5uQeGXhT8XRMU7k4X6YBXqzvnGHrHpqqbhRbLCTThmLzANidhGXn4uwCNWBiYdaTdK",
  "key3": "4SJM15brdzXeWGaXRNenGKZWizqwFFpWuFLePUx1qy3u8wJTsDrVCgLrGPxyEssqn1VZTgjpQKkMbV5B1scCNWAJ",
  "key4": "5vuxi6Rvkvea6JGQzt8NdexEn1eVh3AFG9AGmPS6HPyWbtqvyzuQzUw8rUSBVTEPhHE9Gz1JnpzVtzNgZb5pXXn5",
  "key5": "3andnhY6kZDXiHpkhL3eBnLkLzhTbM63HLFcwUoSbiGNH8UHPpoEUiPhkniK93kH1ZftjH4HKDqNApNx4ipznFue",
  "key6": "7dqZ9FPUYmLFpFqUu6rk6uLSAMb8T55QRrtfR9nzMirSaETZZbCdZXpq6p9NCPxUE2vo9JUVtS72rGhJGSJy4h7",
  "key7": "5bpTSDBwZfyWTVuWmipDPMeTsnAhtYNZQdf4LJezNg4sQf4VbCPYNQqU24A9x3PdvNUWYnDRZ83e545wuunpxzfd",
  "key8": "35hitkm5HKc9qATrP6jqdNnhyHZQnJKVBTCKn8tXywGfmMThgi5xXojoTXvAjPp8sY1Nz2JJZkTD9ATHBSrn5xsf",
  "key9": "R5cWwudyCDXSrnFYhQ7SYFJRvEbSKELBqXQY5ps8yFdLUmBVoeVGcMKJFaEQcui9DgCvUQ74bEk8HDsRGy8Nvqe",
  "key10": "3FkFcWoKNTpzgVp16m562ThYp3hu7VxrYuo6xBkgbafFurusmuTXMGsdbD2CRUE5q9RL8ZdWQmYxeLHctJeJ4SA3",
  "key11": "gG1Gmty1SWsND9YnGAviK3C9KF2QeCnzEj27vuactxe3JssVLWyym3CvHwJNa68pSDxRRibYZzxfeRcRduBSXHt",
  "key12": "45fvwoQCVWHV1BPotyjAf4P8EmQXfWhEQaZHsJTLpjX7PcWfPbefcdJ4zHmwP8zHbuNaADK7S3Q4PGZ66jUDLztk",
  "key13": "4oeHcVYbtzFJQwC1fMbQPL3An1M6tX4vX6zjVRL3MpmC7goyXMBEPv1pk5b34wUeGKszFq16SQmwnwtNTCUt24ta",
  "key14": "3WpjmTx4vzHQCFuJ7pdCvwguMxfNG8anWWQ3fiRboArU1AfNJgQUpeccvbnyYGawcaWKc5ErKXMFgvukCGoXzcP7",
  "key15": "SyfBaj9dErDQJXjS7fuHCuNwgLgPmiBuKMqb7dWBbFQPJDPvhDqUy49LRfj4BbMtFbFyiHRoc8tbjqxPMSmnUvH",
  "key16": "66ksAyDUDuMu5rutipW5ZxULr6tHyV8Nzo7ESXBth9XpMCbnTeGfF1KajwjYz5DWgZsbLuAvWiDaXbhBHE9JNTjR",
  "key17": "42VgU8q9BjWMVRH4pKh2Qc7yDahUN6QRXZ4n3rvtQxiUVxQVzt9G4guXvZXuJbHNvj9QMy9vrdN2pvqGA7vCFNf3",
  "key18": "2M78zydJFXdDXoQC3Y6Jf2tyJePAajT1RJTWV9GdmJwa2BBhou9VCdJqsLng7pnbQSrnVZLYYGFC9jA5yLv1saMW",
  "key19": "2bhAGjyDV6mLfv8JtxwDNCQQyxg4n73bskbk6zEjoeeFc9z8F3HPPT4M6WfjRBJB8wYqtArHGzgTiP39zPAFVZqw",
  "key20": "2xZqdRtnX6jpHBJmf3FTr1BNENqFF36HTAyRzYCVmKKiBFt94rnYaqauFT9eFVM8t1WoeuFFnFg8bMYF3uJkBTEg",
  "key21": "JrM3iAxy55EbFPG6s922ApXD2auphRvC1Wpmv4tbss59ucPVAizcMpWeK7hoMMiaevkxF7AkhtqWkNeE3bjbW8G",
  "key22": "41Qpe1r8styPGDs2Ht3BZSMbC8m5LxQ2RUWwc8vXrrSUDsQ5xivLi7YBHqkDfAoVVBazKwmP5AV5EGDnyJj9pR71",
  "key23": "4XazwyGMVge87MYhFtuVQvN47kMkSEZrYf93jkFEAtNRgvYPAw7Djor3YeVDRoyf7AeLamNX1i8AfDfrzn8NffKm",
  "key24": "4asS6FP6161vnGPoyZkoZBpVMLqe4DKarZyWEcmpXFNhPXVZcnXL2LAM9eWmJksY33gVdaiTpEfrdRp28VWNa1Qj",
  "key25": "eLUpQKXJuzgiu5E1gXN5n6J8hf6Li4chn8njqS22ANo1a5vSruMjLx5oEbWvThS8Cu2hoSE6iT4JM6Q586RWBP1",
  "key26": "5FFx2JUex21XWDZ5hTtYjiiZWv64cwUoVXyrKRAmfvDfj14WGGoESx6iVWByC3BDACf5QHCd7oFaC995qUinwwks",
  "key27": "3M2j9eo8o2WBx4VwaxDgADxrEJ8Nkq3N12sTxG4t8pAE6fftuW1nuGFDDB1dmR444HLN4azdHxKk96ePfg6Egn56",
  "key28": "3ebKRqfPQFZWVJj7u9weG7ZGGTLYQ6TNmNixpeNTGHEHiTRhp9NvQB4fEWabc77R6tAxrNrdB167h1RsmGQABM5e",
  "key29": "22JYgZw995go6WAi46z8Sj6ndnxpbX9bVVJZPYSkDg131xqx1RrMhh4S3XXP4bPToXDCizobf7dj3EsHzPHZSbc5",
  "key30": "55sTk9jQ6Moq84wyKw1vtkNXFSxF73PKWzagh8aHDFSvtLB4GwiiM5JRVqMCzvXR6B6hBJX8EzPC9Aw4eWyDAg6h",
  "key31": "Ej5eh8D3dS7KCi3S9Uc76jRREjZeHBJNahTqjH2uJmXsp3BxfnkhcvWiqJSfaZzHM6s3DkUDQVgxnzUYcYGpinL",
  "key32": "2sZnGyP33iBnTMZVvowoSStjxkCHYiTG8QFEA8EfthKTLPwfAtZqL2q39xDdRjy9JbSisv412gzZCUJFWUJehHfh",
  "key33": "2APFxf86HMZZrsxHibNNM7JZzsFgzxwnuSskBjdNadCGz8vw5QDgRHq8niRGY6f7hh2ro3v2TBFo5AgiqPquSYnk",
  "key34": "2M9QhXsnbRy8tan5p77F6p9EFuUU55r8FhRXMVWcYVXmKkrUeq4it6S3oSRDv8LA7FuhAgMqw7yRF6gSWcsK9YuG",
  "key35": "3JuVP6bJ6FVyGTc9dUzMN6jnb3Tna9wiDfRoEULCaHyXck1gq5wnV5VAFDjpAZ448GQ4vwts2fmtgXg45KdkW2Aj",
  "key36": "3scW7g583yCuDQjVHifUcRLFJFWQz1kaQoKvRJZjJcpWRHHP7JM9jAJJHNECkXUZSTeusuBVGxoYZKQS4o42An6K",
  "key37": "5zBgUa7qDE4B4QvdNeVzy3SEEtSFsAnn2ffDYemXNDUc3iuLwbrYTQKmS3QJiWMXpjnPTRuStzcPLwFNaKCGxNQF"
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
