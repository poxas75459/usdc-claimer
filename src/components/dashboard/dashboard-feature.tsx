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
    "47J56pJT3w6dzxyyWppzLdV4g7HRkQ69iSKepuKry5uqZP58LV2tuycQqkPzxTE9L2pAmQeakzUthALseJmq3wxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Qpu41Tp7MFu9H5uKjWe3YCBiDXkhnMwEXBfxgS2T77t8bSpJ5SaCUP7Q3Ld28e9fadWNkniBUJAkbdLTv8g4Yo",
  "key1": "3cur48L8LeCvpoYwkFQxjVra7KTXwyRE2iAgYVFmghNyGo8YcSjFLBoAcJxfym4WaHu4Y7B4buzQtmQ2443tN5cm",
  "key2": "56Qvdprqf5nHCV6v92DsPNqForaHZcCFmXC3TirnHgzh4FHAh6ZVaYbLuYHQ2qU8P1GpLccxJpuhbJME6v4zjFo",
  "key3": "3qFKRcLhAAr4vVmQJy87TkvMaYMXjJR5zEV8ieSMphmy1LXwukW2qo97j55wrqV9Ctq3QrBmJUxH81ke5DrHpdug",
  "key4": "WZR8YfmhnyGR6xJBN9kwUG49kSu3oHf5PqmLcjU9YcwVLdFkmd48QvpA4JwaJbLc8Xuw9hQ4iNhwtWCqjz2rPkH",
  "key5": "5LtxT7z5mZRtUky9mhiD2469L3tcTkkN8JmWxztd17KbC4HVxFEhskVocdCiD4qTrv1oRoAjYFEL7VL9SGVY5WzU",
  "key6": "H9uHHfcFjf5DEHfoqutE1BgMyaFkrxyoEQKr7KTMTXCZcWed5U9RXXqfQX95B2Jy69ZvhrNSTdDckkfhVUPzDGB",
  "key7": "3oHXjYetqfNViS4194tCZmQdQ6nD1RevGxuwAz9TD2jas1m5Us5qDSsU9iGit3LQ7wfpLuFRZ91hWZ66VcHPmZk8",
  "key8": "3quCTek4qr4WuYeoSVSUwNaz55sZbuNa7Z8SWBwbrmuqaQhR2nfw4d14AcwmnZBHtvHY5bAqqsJ4ggcw58NG6d9R",
  "key9": "46dZkJi3t1fTpeKQoF9JLC53LoAfk4XmjkErKvVJUCxt2ZFEARdsvUV5YWEHFhBpDVDPqoobn8buVZqHVQb9GJbB",
  "key10": "52M83f9aY3GRfFreZYdhy791SpqWbtDTdMhLMGrd8KEkZMRkCW1MZ2KEbrQCtWTTLsLC6fNPmFptT3PWhsLDt8uE",
  "key11": "3ah7vv96KaS9toxQ9VWvXzH5mxsu3MsBX8LQRad8hiM7HNB76YypCYSdYGWY9t2tvTVSuu1bnMiE9SYj1rt3u3Pe",
  "key12": "4SGWRNrzqWvD5yAMSrZNcw8XBUUnaG9WejjqHqXAJdYU1fKoNSGQ2dkWozNcnRgqsQui1tiKXiCL4EgBjE7DJJTy",
  "key13": "4LcAL2TnBQPWsbc4FsboB8dK1ZizvAo15raow39Yy3foABYxcWhYrvQpVjgj2aRDm8SZgyVbjimuiiz5f2zNUMkc",
  "key14": "4KFCCpLMejddWno2noMaQdT8X9TGJNBc97TNEyAUGgv3YdNufq6cHPmgaRCTQ3bMeeVpk6ayGrks1RPGrtX4tXsd",
  "key15": "2wJu2NfhFSWrqooCAnzDR7skmAoskNLxguyVc7NVwVih6JSVE5PfWxpCEwHftX5GT9pJo5aixyq6Bb2t7WyHh2jw",
  "key16": "UETtJCDxkDGygXxJCHHjyGRQ75oWAzGHfxxWbv4ErdgA3B77hskKoFWhDpPTqrw6N9aCycnehfSfpgMnQkvm4oR",
  "key17": "2a5St32n6jKmboGfoCXpMYzc6qe1eNCTWNsQHwMdbPh5RX1LAmdkQ1iEAVW3qHFgZc9ZQ48GwsDjE8XGCsxqnfCx",
  "key18": "ymX3k9dSXz9eV8gymFdeJwsqaXt3oBraDQC9rpAbj5MMxpgQ7JzcuPwNKC9FyHNVi2vTmH8M1VeAwnfy5nCUToq",
  "key19": "S5EeGEx4aV7xmepMRj8rka7NpzGRF494yivRrzmnWro6tPqt1obAV3WGwQ8hWXTHRcWZqM4mef3LviVnEWRw4GV",
  "key20": "QJdNCJFnJKkovbRR8pFcWut4zMnp7dN5M3YB9RBmcsu73UwPcFXkNzpAKWdFsTEGFPUw9PE8m7iaD1Ymjn1QQnL",
  "key21": "iCAtqgCvWPRwdSjdG8XXP4KFkk5QJ2rHakWkrSZry1e6ruJH2nujY8tXivYmnF2TDpsPAzYYmPFwrJbrvSWezKX",
  "key22": "3XuhvMyfVqLSS6YFKEi8T9CXayQMWUmb8xY5oz8uQ8yToDhHxanhbsjSQhg6mhMVrhyPrrdsERn1at4H3k3J8iXx",
  "key23": "5oexDkiWcPc52hbX5kJxqyBUbqipnrifvaFHh4at9PXYHgfmAfusAyJwdyDSUuZ5kmaxTgn6uXy1wsY4pCwwY7kJ",
  "key24": "5L4vaZvRKFwgLZ6bUdekvSh1ifHRQuHQAgxtHrz5VSa8gKqQvhuaLfMGvoaWn4hs8ez2ukhTfBMCTfS1dZdnskhf",
  "key25": "5YiqqdAjrAS3niBmmddm2nF531A3aE2ZPB72mvsKGLwMZSQ98ZXtCkoeJpnMyp1ksD4dTNyBZiMyT4QfpH4vps9J",
  "key26": "YbFvEodteoxBY8s1ENjS2PmpTcHFr5TLpTfCFYzXzbeEcR9bCD82mFimBRgPG6mmyjza7YCBMTfNCVfcSGyRJpX",
  "key27": "5su6r446aHFw1uP3qnoC3vH5AofVBP3q4EvtoxgY6aC8Hp9LkMiYQ8L2EjBcg4ZHpNKidwPaqXm3cj9d5H4we6Q3",
  "key28": "GDCosfn9EgRXCDk3HxTTBnJudJR5s8KBKroKtEuoh9inoAtHMSFPcCcpSodQ9SutSBXMdDJQkQ7ZmfQTdy4SwWh",
  "key29": "ZypfqvcDB5cFBWC9ABYmz4avJKG4dvExBi355pxvXn9JrXmbnd4Mi9nNuua15E4Z5rU6GeNEjuSihHa3MWzGz8X",
  "key30": "4eNAGikVtaUj7sbBr99eubLmFP4mf99WuVtKyySUc3FGzQujXPRqW5W5SEgmFHv1Miv8zU4Mwht619mviTkZ7MHS",
  "key31": "2LYy31D1KHcqzKwkain7eP4pejKqbNm97vRhcadXNwCVeUr9M4vLPCt3ArKSj7xdmNTVYeAafb3cXPdGi53Pf6xz",
  "key32": "5tt4dSCg7xqmMM6THro1zKiG9WxJiFmaLzgtZXEKHvUf7kD2FmkyWksgbRDcu3HvtkumCVDcobw8AYZVDCqzQ4Ln",
  "key33": "47Bspxhaw6Kg2WsA3xzHju6YrQsg9EAMf2spmq3pj36SqmTqDuCmbVp1JDvLUztPSgC1G9gK3pQdnN6kKRMhQd4e"
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
