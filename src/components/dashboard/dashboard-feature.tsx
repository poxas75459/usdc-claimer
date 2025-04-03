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
    "5puF5NB1KDJMLmy5SDZi3VDXkZEUnCidQSZ273ZpKFMY6R2G1CHnMKGrjWqjpSNwujNyxnz16VDAaFVyo45FrJmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mSJBVJEMijFLxNkrqGj8aN8sf3r8qWKtiggMEakNnsVNJWZVrxXPwKK9XBa4Pw2RNbfQQzwG71B78zMvWzR8nj",
  "key1": "4HqWHp8c9tKVnY1E6ozAxHhYegwwXvUmpGLL3ZyUWDDh34SC3VNVcETutwz4UzgKc98gbh1eEMRW5vMFJixQTKgd",
  "key2": "4YntShxhtDAYDLS44RYqaudMmh3Q5pWmzcD91X2N4SwpyfTCppBP59TmAHFDiWWS23SuSM9YnfeTBXXmZBaC1dJb",
  "key3": "4vxQBrjrLDW84cr7SQ4YiwdNpJPC5qiLb8cj8kLzUKzPLYNHBhZ1X5M4LZRxERuJDoqqzwEBMRaz7p4WQN8RQJTY",
  "key4": "2sBKxAJdxDMaaQbKX9DwdGbxrr36qDAi7abEjUvVhkYBF6q9bcUorsu6VAK34FDto2Ww9UJPSZ2kfSr9gugQWYDa",
  "key5": "2TzaAhLPTHzSvLUFGsjirrmL3w4GzAf8CMrm7gJha1JSEvNJ6YiuvBKTizza8nGXeboB5dGivfYfXTkCRvyx4M9i",
  "key6": "2corn7dsQP7G1XMCWuSggSVQE9JNLNCZzcy8fJB2Du6b4z6WLy2UvcsDzvTx7wMDY4DyH7XfV2PupmUCkXxv2fLK",
  "key7": "XRRHpqznHeuShoDpM6YMD75AgdEqiRMhUXTzdwkm5FE9KcpAJHvUBK42GnqEVHjrBv1wP3bLhsuNbxtXBDDaKGQ",
  "key8": "FJLKzyjXH2qSuujyjzYKLuWwVcErYeVNDcHVrMD2SVsjDH6ycMpigZdH5PDEFbtzJ2mP4SWi1yd4pNJwawuD1a1",
  "key9": "4KwPJAWyRFtUndQAxNh4tFfGtfra2C2VGWAh5GeoUztifi18cPiyQFX998gZMookLNNGrkwwz6g4hBcknacoX9Ns",
  "key10": "5kUXbdnXLhnmoZ28te7LDctyW84VmuqVcS8ifRywkKp9FkQhxwN76LPnWTtiD1tEB8W5jPJPSuh23M37TXBtMBsy",
  "key11": "3J3S9S7zooD2wuw4W3j9QTzMiHQqNcEa8KBvcte6x2yX5fhxXx6WaLiqXPGfhzSV4GHBvJ4em8MhrxfhBr3uYL35",
  "key12": "51vWXRoyLMoai8ez8e7mwB4hWo4UUzBVvLT4NxZG92iNkHrxvAPfsE1z97ypqLUH92ftJPXALmXiwWtoSzE6MxUE",
  "key13": "5iTM2gygbU4Aot9ikjgUHhtWh4UYFH5AwcNRzfmh12SPpjJ9Ekfuj7YGHi3f6ncsbTDfYXEf9TrFJGd4XZK3bbJW",
  "key14": "3ex9LrEHHN6NMTFmx6ykZYZ1bvgDcunxSS76fSMCSQnmYGrpq9SU3fPm8BFZ1pER5ymu7AqPbbM4x1vRbehssH78",
  "key15": "4eGWuny3ijx8qAeyHBNDx8NpXuBvDcj3shoGYuH1ZV1dFEUnc8qLFF45aSnrx3iijdFFWgCiU6jGFYcb3mH6uPBE",
  "key16": "32KgQopRuwhwnQWC6TyPiqcR9z1yBV54JpivyPqrbAxfeiW72wC4kE598hAWucLVZNLTxvPXcRZtyKzqK5ZSBUB4",
  "key17": "2RM12YGQNUd4nMJvbfT6FkruSWhANYFMrRJ343YX9igzRP29ui6Mes8bT4hwboBwbvxEmEykRQU31W3yargHyVPw",
  "key18": "GonFcvN5RAY9WRSb8Du1FFyzmJ9i8nmCNor4KLcZjfE4hUp43ra279wwm9vFemnUS6de1G5PyMXwwrxdPonxBFx",
  "key19": "qTMj9J9hwgWYpA67E38Z77UvysZnhHXFbvQc4bDWLkDYnN1oJNKcCsoks4XatPJh9pga1K93CUeFjtsSrYr6rHv",
  "key20": "2rYAWiHYmY4Hyd1Fhx2P55SmDbFgiRrYb7aw5t5PqUt87Eh43yXidtmgMZoaVtQWNWzwUPuWzSoFa9X1Y1uT181f",
  "key21": "2adSJbC7E28JuoCQxeP9aDnZtzSjfXr9hfy39CP1W5Eg39rnrUXvhRSaw8EZ4kFiPnCTSXGja4N6wN64YfFLsmud",
  "key22": "2nmxHd5Y3d1tWWhXp4GwwiUdupfyesnRMEgGxvL9dGEaqFu2GpGCX7HpfHWHt33qHwUFnj1v8LLyACTUjbdkffgJ",
  "key23": "3t1nouNzWbHmBHpjtf6hRkzvx4LZz5jJCoU4wMQHb9gNPCrYLNnG2L4Ru5qM5jgqV8t9oJjytqmNLgCsULve6XM5",
  "key24": "5ke9WLf1r6tggzt7VAnf5JvPAyPSNtQGWYHU94VU1Jkz5aga9Gf14XTAfQLaasgDeBeqM4G1dDLK5zYKxghV7znt",
  "key25": "5pYFifWfqc8RLqyG4DDVuUKq6B7p8RWh9tZC3FhH9uUHWKX98oxDxsph8SiSoV14N5uZR9EKFrjZyEYyyWLArDfr",
  "key26": "AjE7kDZovaNS7gCG4GmfxEuB8nAKbiWu6CycYrMHyhBF9M4TuSigBgtUZgaU9nUbSLNfqZbNJARedtk4cRHDL4B",
  "key27": "iULzsmvsxnnHqGBQHrL5HQxbG99S63q7fanzFx8KQWjTLiHcTXJYK1UTJy6ucNed5kndFgqj7nhArnHUtPDE1Sy"
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
