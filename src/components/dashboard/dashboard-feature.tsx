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
    "2UpsnrfhoCF2Uitgcb152iYPYTowyAN4Xsw7wGnjJBNtsKmfDjHTPEiu6x51QeGXJ2ap3BQDbTduSYAdhBedfiHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vPS64WNSmX3taKTEPzsLruQ4npd3csuy4awmjyqrM663k3CrZkMWv3Bq44WBDTE6754cczuJpAeXwyKSkSEi6Mb",
  "key1": "BGwvpW5JujbKhjh4tdoEGz2Aa7YA4CsmRSvZgL6C5ZwdvQrnoXeQXWq2VNhR3R3RLrgwmv2wmdKLMZj9aemoPXY",
  "key2": "2PYeBCU8L9ZPdtKCUtzGZM4vJPYfVXgsMZZLtJBu3Yq88RiotCxtSqFHGazfeibwbRz93sq8PLX3jPT98XwRjvPn",
  "key3": "3DYa2ZzcuJPSHMX4LGUNB91NvCG4zYhbvmYeGyZ4ox9A32xtpocbLFxE8NVFyeEd76J1gJ4LRLp47VFitmhsKQX6",
  "key4": "2w9uGQqPb8Hbo4FKhuvACzhgbKdrNaTmmAhgFiSoGHWJJLnH5f7LA1AmhvioTnWbgyJt3HiAiFQZnhLStvWXzr1e",
  "key5": "4m9r4zLNhYmJxw1WLndrSgppPX2hycXxUGtdGZAvisQYLRBbuQSHDfRsHSqkPcTVMmJPvVZXgCGe8x8gAQLVUetq",
  "key6": "4popUJLzWgx59HDaexg5EYhkCLM5F37FKizvZwPPBicU28TfUMPKAJaq1eMY2XZKLLadZ7k6oJeP9RodTKxSqDFA",
  "key7": "4UopXvTeKrEz8mUNf3E5kfbxNtWEKmbrFEVpY9SnMnJoQM3twaNwUXLNX9Z6NcKB1BomhyGdqqVJzoXEMrrz3a1N",
  "key8": "2rmQKjwyBPAYpBb3ZESjyzqZwTvK9n5LrTzR5Eb9CGueZPi7Qrjcy8PCrRa8RZ7YHRyvFUoPTU4vii86NRuTH9UX",
  "key9": "2v3KvUqzBunjFfu8Bsv3JvgoWyBtiNMd3n6wmKzHowGqK4jd1Cpa7dBYdRMNM2jCy1eLFbGbrGvcZ6b5n7XzgosM",
  "key10": "2VfRfpaiWVPCCs5NZ5EPjzPzyCupaYEToGGMH2KAfoEwJ1FXDVuZ4hgR2VBsNHFUGmVgYi4kDELh1nSi1z11zFZD",
  "key11": "31JjJhQ4ZcwXnKNxQxsxVhKBkAPuVGQWXtzYzrA7UwPt7M81on2XRiThY1xeaEGSfiXE4biM4Hasumoj1QjwKK8k",
  "key12": "G4D3k7kxJwx6j9i7XXvKCo6WXb6xjgpXmVjgNLrmneawtMRiEtKG76w18yKAUWX72AYcaHSrkUQRLRBdUy9AkdQ",
  "key13": "co8p9DrkmgSCw8e5tBv3rfkq92EZHRtsp8K3NuPK2jnY9YFyiABphhAKHJ2wuFXbQNukFAJLVYzYuQkYq9VTRq9",
  "key14": "2M2EGXcWa9LMkyEi7Enp7Uvc3FehnwiKSxkaY4eYaukQ6xRzYtuXMndR8ubnsgsDBRriYVsHqb1JNeWAzQqfgdKs",
  "key15": "2nu8SnQsaEvgPy4HeFoAFJgFoLXHGpGScFCFyhafbtwG7m2cJNEBAUZ1CoQJEYpw3S8LYqn4owL1k96vqitiuBJj",
  "key16": "63oNAKhjgWcHTbNV5UizW7eMJM5A3nQsJAGuPud2DxkR8YSEjUaMJ9VVNTNJEwwvni1ERSxZEBWgS4Lhwf8B3BPS",
  "key17": "5GHD3EQYFZvSmFoAoHhtYHqzhbXwqfgv9tiaVLHLJokzvovuM2645knKoysUBRVVnx59ENJhUsbpDsPk9Bjd7afr",
  "key18": "5rKNcimhiWg5UpjrjqvtT3XNH1a1kw78EcwFBsvpXpUS48hR2NUkPwQKqkZdhJYESx7s8w9s7jspRif7jtUF8zGF",
  "key19": "2Vwz4EDzL1A2EpeZo3sAw5CFeVkBgLSJ5s4XqXMa3viJnABKqzhkvkv2XAzwR6mTSCcnAwgHFdJQGDQKwNDTa9rF",
  "key20": "5QSAvuRtogtcXQkNHGd5PwyK8gX3c1oenxHUvkXr9iPJYQUbMnDFwhpHJo2hpozbEB7JEtWji8suD1hu1ceW7RhZ",
  "key21": "2ExBGRSfcoww5oN7SZ168rtVB85nTrChjBipcymoKisVe7tndoyafLpYurLZNj7qdVRbMjgg39NUeKnL5xjpcPcf",
  "key22": "XYwWB2g9mdLTFGHm97SdEi8zP2r8EWY8RoBehs7m6USSXvqMsaLWbthWcshcJ7r84wqvikSP96KEUvDZvDiFMp2",
  "key23": "2AJAQbwbs84FmJm2zwBDnB2HkqTDHzkfoeA6graiEEwW6kw5WCMkye5v7DiUEhAd2UTToAV3Sy1M6xqW6ATLUpL",
  "key24": "3WGx4yeJ2Y32iDKXhZbZrTmz5QUEuiKWV65yqXwH4AhUudx6LvA4zvf8R9V5qevdFvxv5c5NmGa4V6TNHGxJMfhA",
  "key25": "5EAqTvhN3TB32KDL1QaUmtVSr2yaEGLoNS1SRjwMTn14AGp5EiXmXUgQXFEkhhjaCw3cZ79YY8KC4g6EETakU4Fc",
  "key26": "3uvPAfzYog5LinfnDbBqFJw3zcBR2THQFAeFLncZ1w6he5xmF78DdXxkWKqBCmZfczQYJRzrWD2gsSyCw2JQbA6P",
  "key27": "2vdYdZr6HouztMT8Z6DZvHmVKBJXi5uQXsV1p87ZtqTj6CiyA33Scm5uSzitQz1S5LMFTmwuVhyB6VD2gpwpkRT4",
  "key28": "a6DzYE4xecruANfmHjMRNmLNNbcQrG3bUqgp2E4QguxSxp7AcHxaf86ivMVFtUrhT5D5QoDGrxq29onraGuVDuW"
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
