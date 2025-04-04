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
    "D3cJqvFLhT4UhC8Guj6FZCEYzMFEw9cKcD6W8dy1Ea8YgMzoxoJZC2SbWiu9V7je9eetsBmSehNexizs9LDtSdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WkFJyyDqTyeJdWowS5SLBQjJJiq1AizT1CVB2NaGVy9Pb5GEm9LdER32EdjCmwVTsahaeXUriSRzLL1zqRf6Ava",
  "key1": "2MuDKTFQ2zq6VfWF8z2RcAJDy5LtAXMumjr2wTakuGGUmdXkAUjWHFpjPm8NXusgKr4ZpwJp2Xe3a7xXieMHdYFg",
  "key2": "2djWjMkLW8ZVYKKsAsjdeGx5tQRHn4hDLDgaFGDGJcQdP4L7UbXCSznmJvHzENg93qiWPwvPKDJ5vHK2ZHiSsm8s",
  "key3": "nMXNAzySa1mdVxPZJBTBrxMYnFXQ7fKGYpZMG4A5Eshn1RjQ1eoCSfQmz8TJz7m9LRtRoyEVkv1D9cEYJ58mJKo",
  "key4": "5Adq86V93P5ij1WdGFsZjcVdNPgbXWzxkNfjGgmucm3xGEk7B4yaWRZz7g4BQFTw9SXyoZAJDxhB9Km1SCnKwGEq",
  "key5": "dC3FbWpvGi7bkQj7gwUz6pwap4db7UJMLYTTb3NRG5uwbiAdqbhoH7gGkkAib6LPgLEayxxc7jE58A9f5o3gkRS",
  "key6": "5uGv7bsZ31oESmFTT3rGNJ7L58xs8hrbBRZ81RrAmtUSbhxyxHVAR3ewerrVEL2dq8aq5XxaUy9tAz9R1Xb2DLcf",
  "key7": "3RW6apuhj62hHgfgG5auktmXqzvQ4njJSZBtAvKRLCwG9uUobTH893Z6q71cXY4h2vMKCGapcswUhTdQ1PNShaT7",
  "key8": "2nY6g2F42izXgdXMbgcqGwszgjWyPJW6xdX1ymcffYoSbCCSDHcEyBuKBsQAd1CouQt4yDHPSRFtxh8vvxF8hQVF",
  "key9": "441ht4PGJmiPrTZYocPEd53Do3iHMtoCGay8dvf5NJHhqSwh5nMWZuwisHKHTNCV6Ys64LWYvj3DZ2kegAHwBN36",
  "key10": "5pDeK7gJgjtm8VYvTDFBn3UrmzfWRwuejcdzVd2D3fd4oywbepZwN1tytHXxf8kQDfjMYKiLHw8tFGeUBikUAUFv",
  "key11": "4tZWnbuBNyKVCWqdsvwMLNGeRrknnoY7npCFESYBzizYo9LkcFgPetr4y89XPz2PzRZ3ukqeGRohgFyf5Uo91iB",
  "key12": "23BGXiqBTPMpX56R5NM8aUcFP87GdXb613a2a2J9DNd1jr3vj13DGUAW5MrKzkzCeAh8HjNBNcqXvRX8K1SXB1ea",
  "key13": "3pKohfamvkFSk92ea9ALyjUUY2J61ZYXn356Tx91t4Cv8N4vhnZ75JxV3TunQjezcticC3XN5f2Y9icPMyemPUB7",
  "key14": "3kHVPfVFtuwKvgsv1E847afx2NzySKGapYonGTC6YkJQpbAQFWmBz8U3AmtnuWvRwKUryVXXM4dHfgVjeHiQb1oW",
  "key15": "23c9YEXY2Lr54UoNje5QKxja89RCnb8reFKghcePTgCScEsYxUVBUuoPhj4eYyufffhqqtz8UFvmg6tBkahWwP63",
  "key16": "QPNzGjhHg5MXWdheXmts1kTUQWsgjgjsUbj556N76rZPuWeD64P9YPZXuhmaJYAEKVKRL7weVaFCVuyEEqaMa5Z",
  "key17": "5oDBZfXupuwv6sAQjHpukSMurxfkFYQfyYTuCrSpYyQ2CLVF3tMmsmqzf6Z5XfFNKEifNd8sbGGDwwrfai7fZAKc",
  "key18": "3ju6nveTZVc56nMJyeVG9SDzjta3okf9deEXpeQW9JuwiMsVPhZMCPT81HnsoMencBoQqSwwpksFNvxwzQNP4tfW",
  "key19": "FKQ4ec6jhJDD6DqgVPKFUHwe4pA1EiPtbnkGbWKvdaBLRPWsfai5KqWndssFyPZnj7puzD6KZ2NNxhNsWQE4HCH",
  "key20": "5DULtB5WpizXe2BeRNMepfYySaqRKojTwchFKn1EdZtV3L3iCRATSF29cc2SePrF3tweh1Fn6geryJyniy8wk9aN",
  "key21": "4p93i7TxW3gqCh1UDp68Mwwi3yLz5fr2Tkrddxr45XwwRZPNb1D4Hz7ESegkYH1mzTM3EDNptFvwScZQC7RzYHkU",
  "key22": "WaqX4a5u2HZAudvjVm2xgW8bQjaHPjUU6M751R2cfoQtHNzNtXeAknjSiGqDsTn5MvuLDtKV6Tyf7DfrSh1c72m",
  "key23": "4eRr4jHgGjGGJ8oFB8JA6WrtXncU5zqU76BDCgH2cnx6SQVfsb6AjusZMbde6hGrwh3NAuTZEpgNr7E3bavZLb9H",
  "key24": "2RRXZYhnoLHURjArBys3LYw5pBkAvWtJDbnknf1s15YnoMYNcxVYdQTqtb2nWAVZ2Ez8NhNtRqYzWxAxZHSbvP9T",
  "key25": "5XG2ENpgiJ4K4YJd5VsSGVzfCxTJicTGDmC8uMbRafa3p9cPBmAena94RRWJA3XiU2Dczp36gEouEBqe12vcvE4d",
  "key26": "5zqZdx6Hm57EheGk23TMkdo9cMmMdfbu3URy6ov51ffNDC8JAQQCMCyWiS6JZYH2EaCMK9QHWPpRWArpUTGsNDMH",
  "key27": "4Zw7LMoFSzBqzvVBzhaync1vkeyJvJio13qqsgf53CBK1gJjZQewbqE9Vf3gpU2WoPC9TvqwrjefgcHWFvJU3gzR",
  "key28": "3HToAjDkeBDTYvS1LanqywUUNEGnb8EWAfTnunq9iZa8PTgb6cHM6M7ypJq2vpq7CRi8qcWjoxbZwLS9FjNL69jP",
  "key29": "3VNfCtMLn7pxPRYuep14FXNVF7Ud7GeH8CRwVP83bSN9hH8AMuvNWkXwLnAgrUrPdaQxPvr21qLJmKLpM1feACLX"
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
