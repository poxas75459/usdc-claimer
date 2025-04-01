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
    "2sTV7nodcuJZDqHqSthQX1PvQ7miyVh2AFAwXG5LJ3BFuCFkEQPjgynTy1PQMUVfknvgGsB4KnYitNEt1qN5pLgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nVfNbkVvZMzREz4EbvAHA53q9FLwiVbt2h97tr1QyWkJsFihsMgXr74uh2r1L2QZjXYAewWfmxQGLP8doWSqyeN",
  "key1": "28q1j1NSq3tjRAcoqpE1Wgtxp6ZaXDW5N6siaUmatx2mG9NyLALHUMJLM14stwtPXU7HHPn89Eo4gjiFLdn4qCNm",
  "key2": "61LPiZpgZz5RM6pEYJogConx1sJwTQWrSCMqybGBSqLdYyyFqagevwfaDsPXkyxHoCnsJbMBQQUQXCUXWHGdWiFN",
  "key3": "3iRsbfFeHmdNUNdVA2JdwWpPc1ESDGvWguuGhii9ZcxyfvRXpeDCRkCANY8LbWiUiT9Lo2RDPsCVKPqyJW1x9tza",
  "key4": "bUChY4sewc9cJTwayjgH5Bk1zAHX9TD2VADGwP7iExsLXN1ZnZuDaLaCoiy85YcUwoFK9TJYvz3Nc8wtJKr7QwF",
  "key5": "54CSviZTH4iNH3EN2CtYm6B16EhhBohQEKhcRU7q6WNXWQh3XWUSGwHCQwTUXnhj5RwxNWfZqYTuqeRwxfwMmSsy",
  "key6": "67cqZpJqbqatrZY7qQkesgvGP384824kWX5t2eiUM2Mckc5CfRRReCZUuMtsj5H2dEXnNxEtgDLCandGMN3SbNx9",
  "key7": "2uWjANfkk6S9HgUCTJGqfoZkryPNj4jFMZRZaRbAzt4uCfpPUygC1r2HF6YBsBHLVpJZUiMBp5LbANg2GHvzbAx8",
  "key8": "2rDcCmcCKTHkJRhFHNPyWbNg1ZKxnS8zPAw1TkUgaUg9Xg2ezRZ9hhYnhmi39YHihQdx41SyPbWa3caME9GpTWMf",
  "key9": "WW4cbDMM2nBULMeBvtQwd6REYX6FqSE8pW3Rkwp5CtzpeT9QhVHtokJ2BeYqDQEWp4V66cJida4ARJsHqqWorMS",
  "key10": "5HPJPmMAKtVfrfJta2Kk4MHPFemMt8oALMCGbBHMNvsqWdeEKYnXQqt7yL3tNUMUNRkbAuzP6asZPnxQctw7LDvG",
  "key11": "EYhv5ttkJdpCK9nfHneJeAx2xA1MdepG4MKKYFbJKMT8urbwuHNjfu2sTt1AqLamSe6ZG3DeV1QHojNrGNMr5UQ",
  "key12": "3qz12s96N7y9WmZ7YUQJ4xZYv3y8vJwigsnjf8JP8eFJiAwPfeRmKe9Rdf3igcUjfkwbXc22mVjFcVdVsL4umgmf",
  "key13": "3agKZAeFvdYJui41W7m9GH8pbYiqhxq4LLxz2JDSPPCxuC78UaTZ8xF9erWiHr1Yqr6F6qh9SoXwmp9umWewnBXo",
  "key14": "5cqRADLys7WSv3tdykVimdxzQqbfcEyc2qhB75bJttDcuEoTE7EuT1mGMzzBk1cxxja714DMhJoikefQVMCFM5mN",
  "key15": "4w1wJfjXCoZ5CPNbaGeVYMxrDiw7tG3E1Yfihcw35CWNKZ3Ty5hGGnC5wY64ALsEhnNi9DhTCVG5KaMF6oMcZSeg",
  "key16": "4hRuWcUCvKi4cTdVine13H6f8t6bzknsNqzR5TqRSNWGKxnDJhA7w5FWBdhhmyjqtytyUwq98AeSptMTSo6EJWCZ",
  "key17": "5tujLT2qtTDMHjGRf42KqELfZfXMjZvtCTDbQ57VQtqsYcRBXvdLGhV4GiCAG1hM8Mn8hKreo6NKdeCm6Wi5xk8b",
  "key18": "5XYrpBeNy5dFJuA9xNn2B7THRwAyNi2KQsNCkzkv7VhryFb81HgQ1aPit1LFowXtewjDuRMgBDXee5zGnRgHjeJM",
  "key19": "2nL1LHwe4HyWuRHM9oSNnURGoKEPRokncSf3m9APZs4zct4tgqzPvTYnzNjDCkrJGVpybXfUrpDzW9XoYn9VKVFP",
  "key20": "2C2EBnTdreNBsArDzvEcfq8jD6wPrxB7Cm6SpjChbfJgR8Vjbht1AFnSMuGDrRDtPyozJ22cYfBoWXe55WteXwtG",
  "key21": "3buWJhPEA8znCADWtG528a7oqcQhRv52VDrVACTkchZzqXfAfMxD6ENNJ4LsQXXa2Cbdu7NoDTiDHoaoJcy4Jou4",
  "key22": "3iufvWjtcmrgqSgwdvrDxRvCY6Qr8Q49CzUGpXcdgJrBhK7qLnDEdUab4KNLKbrHccSi8TFFHiN4my61w1pV6Nqr",
  "key23": "azPSmbEFDCxbeCT5D2tSrbU3RVv3tMkrRAJmk8RZxQ5eeRVUo6fZu3uyMKc9kkf7mKQ1KQB3944L5P6L2tfJUbp",
  "key24": "5Mbd6KNjdoMHDasu3Upbxvj1pNDW5QtKgUAK9BE7vPW2MmyJLthFx7DabCMTDwd63KK2ZYY2eKyrT6UdK6kJmpgK",
  "key25": "5Jqf2DBCbjBZsVN4GKB9B81UvKzah6uDAA345sYYR2SgziaaNHLGDcyUTMd6NeBYanhsw8WME1G2C8nN58stnXmf",
  "key26": "4uFJsri3GakdzQPS8VmRJ2XjX2FpEeowWMHY8RWPqd2aVJKQpT2rY1ZwvT8jTmhvMtGGscg6v2MycTJf5NVqY3jK",
  "key27": "5XfjQq1q4TnySrgPV3qZyyCS9VVCjKCuWorUKnHKjh21uVEe1tc2ao9SFZFeWtE2N1uYTa8WgbYczoncyF66hkic",
  "key28": "5b983GuQVqackTRtcWsGNwMwwGsTKRJhrfMaCNafTGsECQVJUKkaw1q3NP857stCe5zQ12iAi9VFx7dac4ehbrAX",
  "key29": "5QWqyJJf487WZhAB6gsC8QJQbYc7b4RhjJ996yDVvs27WPeDfeSRgpkTzY4hUQ9SaJd92BuNtFA9YNyBSyi29Jy7",
  "key30": "2LQ3dC79YZ7TcAivBWzG5vUWpz3D3Ex6avGKdApXr5jYL4CstnkTbeMnBUPGZmqy73L7Q1yYnZNE3sZy8Ar7Scrw",
  "key31": "4PW2vb1iD3NkQbyPkEpb9ifJwPUusLdAzkS8wPtEnm9iaVrUxASea4scqFc5pghkrHHYKUN5sSAZrj7KS1zZ2Q5Y",
  "key32": "5f6kX6Et5Ceetp8uewzogN1kjUYvfMDsMqD8eS9ozUA8co2uTuQSFo6NPg4rrxUBh7FPFxjBrQgfXqyuhQXWZbNd",
  "key33": "2pjtKGBPdvtPQ2Dw7621csWBfLrudkxeFamGrMtNorD8Fm2bmBGC538KseDoxXSoGKh4UPSXYy9Lge4YvErTdDai",
  "key34": "31kPUGwxq6v7Lvhs4Vh71xm6a5uedhwpcsBFVRcuGRvNeQrZXWhdRDeWa8yxQ49h7CcefFkJZQ3v9UDmqMwfLNtp",
  "key35": "2xqoMXuffRvx8zz6tkJvTEyqJ5hdYWUzW32wipZkHdGSLxSNiAG4H8XehEsqH1o6w3eRuXFHjdY2XFGmjWWXWEzg",
  "key36": "3AK19ScEZncPBLdGird3YHpEgCYczVxFee2k5jQ3sKwWcoR5VVeYC6RBizBDwpw4Z2663JWNEnBGZYXCCrnugq3m",
  "key37": "5QwNq2XihaYJj4Uc56rkK2JkMjNxioDE6MFXrZv3swGkDgxqExNtjT7BnPCftw9t4meKjk6pv3q9CJGgQo62qKcK",
  "key38": "3LiWgo8kUCGux6EY65uzjhcrAH4MfUH6e5nHaXLmhKsrEmqucMLshUemFWLMcBuWvH2DPFR4dERro75vei7kLbm9",
  "key39": "3fvVvmZZYPfuuZQPKy69585qCynP5aZZPG9KPqPBzfXbDSBjmkgxBoiMUcKirA3qR7CWNEqvgTrvnGubpaGQjGvn",
  "key40": "2QcHyKQaCbwFFpRaLkXNEdXHknkqRiYKqafB978soJ5zQQzQajAWnuKjjDWcD95dYkinp3A5QjeNC5uTMoxV7gQg",
  "key41": "mVF7CXjG9Mb26dynzoARYdAiEAoQUsHnqx4EGvhN2QLfwMc1JK62owqervUvmbLANPrX2pukNTo1vvi2GAfTbCp"
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
