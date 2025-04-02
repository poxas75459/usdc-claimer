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
    "5P2enXu3f8FfKzjhMtMn2SkwjnwvxdbkZ2uBefBeJosiSVKgDcZRQTnp1iAMabcKqJcaBen9GxFBMVZ67znZXWWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PfCVuqwqyyfTTD8Wgq1uNpGqXru7kBQDGt9qAxEaHcWDuiXregeTyRM1xJYFReic92vrMdRcampJRbA3ut4XuoD",
  "key1": "4btRKt9CQBCUBHTJo1vfovUxeiQkfH2DaJKk6EEaaPniqdHgEhFv9PAWGMJteMTTiqyg6j6fswpmy5XgTRDCcx47",
  "key2": "3JT9QzvSGN7Y9E5Yur8sF1ek4T4uxbwvtAhiqQmtxLGDRExfLcDqbDHuGLjZHhvL6eHozWLxKVTTEbqzZJzyyHKt",
  "key3": "2s1UuankDiHH8k33uB55y3se277e55t6kgSiWJxKRxYsmuJQQtSpNBdwysXx7Mr63Ceev5dWQsQkam7X9dyVWumc",
  "key4": "EiykBtZ1fE9U8Utd3TxoxS6gSSkqa7KV7tGYDTQFYNcQrQmq6vKwnCD1LkpKXPA3w6XPkjUJYLM4rgPxXbG97kv",
  "key5": "5HhBdscRKh9P2y5tGMUUkY6TgpVwbiBcbsXM837yu1UUj32FSpBE9vwGV9hhvBTKK2u3wB3tqyZ8RFYUiR865R96",
  "key6": "5TjyHKUKy81Ai8ouRRR1yMLSvDLq3SVJHLorjnX4UWEvYkT8cTHikDKFALELDLQaiKdbaKFZsmCuBsBXSvR75KWD",
  "key7": "5Cad9dvGxvxCm3iWxxLC34vE1mc7cHq5a121eHxWQS1QxkcfuKaSPfzbz1Mz1UPPnycxSPnpK3GwjDRDT5cBHNZB",
  "key8": "4tuVqw5eqygZMCi8Ev4FTqFj6RaguSadqw1vMx179dzATMmegcu185KuuMYqbwnWqWHLeW6GqHUCpkY9nc5xx2ew",
  "key9": "4MyNjKDJbvgeFLvTLq6yDTSbjst4AeYXPUF4311eYctR4SDgGCGWtZGYTBu3hYVjikS3vRt1rK8oFYV3fgibyuSD",
  "key10": "egxWLcJ4QEUJTUtJeM9k85v3tuKyfgbgaxGK8z6S5D2DK4Qge8oD9uUxh5DP1gye22Uoxge1atLftJ4dkNSoU3c",
  "key11": "4gGrcR6Y5zS234UxJGdYQCmDkTZ24NXqNLRXLfJCq4oeC1vC1PcJLa7Q51f2WjCyn9kbb5y6URy4eq82EhQWssjG",
  "key12": "2kJD7Maz1hqSeApPnVCPNXgYSwu9ER8fF9hdFzkdaYPB15Ee5bjnRHksRD5A74UPWNWz57wzh6V2fhrSq1kZvUPX",
  "key13": "5HfGu4rhecHrNjzSiHhYv3zWSJYBzguK3WqmcfwgT9t652kFXTxftorLv95SR1ZmWsTT1n1st7CW7SDq4tpEeYdi",
  "key14": "41NuPKu7ZFqifPX6Xi5QmXjvN8jEJRB8QGAkytn1YQSpAeDBHUza3HRZqJLa8RDdaYLhd2UWMhrAbxHGssmr1EL1",
  "key15": "d9sp9U5zQtRYTaztgEsgY1pURZhveWAWtECUabxBRFQSmzUwuBDBPSL8LJKfKzjMwVGAPX5t8q4tjN4ATHP3F41",
  "key16": "gGkxb1dU88uprgMnJQ3PD5rk87WuyP4Wy1qhsMYwokHKPpCAaMaLHQe9mkRpxbzm9ctAzHoroUGSRYhFrc8HGqm",
  "key17": "5PWEYKBWz4mCMpRbXLtsZXCYZctEwLZ16Ax5kFdekKDUU14t5Bb887N8JF6PJJ9oXuqGB1RzPhqdm16CipeuxVbH",
  "key18": "3qtfPQu2t1z7rzED8moLLFTiM1cEnVikMzmkfiMuzKUHgeW8mCxNHVKnPf3ebNtmgaFQPN9jk7fkCVojJQeJWp2r",
  "key19": "4vNkqsqFS74sKq8Rac28KDcKaaPb2eAvPCYDw3DkbAnSiuazGpT5NZDXwobRMkKdjD5QjyKQ5cMR27g9ngYrxA5Q",
  "key20": "4xrwLiSvN9EgBaLhLvqwm3EGN8zQCYE6vBg2zuSirMp2BUsyjm5nhBYg54wsvAvkZPBk3G9atczJ2EhJ8H3Wzw5U",
  "key21": "5GuPVimwH9AsFNbQNjLXyjCeq7yf2dyQ3RkfXJRSNpxVJkPqYcQU24iSUoDfD64TWjuu8b6r4s6uk4z6eHnGnj2Q",
  "key22": "3SgsZ23UrtsWzfmMkvyubeGXJrymiNHKJuhfFc8hJq8uirqJA9BiS8M1XaAj463ibsHf8zWjLATkEstkmrF6Qwhh",
  "key23": "DiFSo5RAMrMCQEgJNZXxBX6DxDtQfV7kkRgHdyQ4ULG9YPERoPmwjQHb73KMSxrGP9s35zHSqsqBQB7NhKb6M4e",
  "key24": "2XF9fwZah3ZK6GxkriSvpFHCRnBf9y4tp4mnH8uJGFhzxsFgYmtkYJWin9m71CBRRszg8o3qpoPwSjNyNbnKN6sU",
  "key25": "65DMp2ay8FtJy8XiuLkdwdPAfVdH7rg2e3DstFZxdwfBVy9CXdWyQZVXpWTjpRdTdT2titJz9oQVCrG3knyVZ5GD",
  "key26": "3EdeAjpA2RGqwT4t54bANj3Usc8s47Psmj7WAzQxkJYZMkhJzmDMNKMHPuNwdGiB64zZdvHJHGWHg6Rf4kDampQb",
  "key27": "2d71o1DhcyGmCLNJRW9h9yyxB86nxL9C8uBgiA28RofoTJzMnt5qC2cevdYzDNgEv769tf5tBgsubX6iAsaXquZU",
  "key28": "27L7MrtGff1wgBF9V43CVwfeNtL23Xu2oWhusDL2ERCi9m5urARLihTzATnzHGwfAAKQamH8smPkSy9NARcXVAdA",
  "key29": "2DhHhVv1GDF85Z4zekoA7dMvvBMu4VKyD4BRqTFbTxC5Wxz3YBVkT6GeBHvNnDoz46ZbRMXoEqzQwNy3qUPM2Q4t",
  "key30": "5S6WnacGFwrngBwyBPHENRTacrZQgZxNMbFpMhSQqEX8EDYjLxu4v1pvSbDphqU8XHWF6Gopvj5wrYXxrgawYAJH",
  "key31": "51LHBvBYVhzUAwVuJM78HYGW7GCiA8X9uaRgYMXKpwAf1FdaNonhau8LA8F2opsbaf7Hmo5VjxcjuKShfunTHghq",
  "key32": "4nk1ru2nPDLYW1meg2vMa7A4hetMeV7ANBbrxd2tuq7FwNtJ61UPLvMxtgPkyT5ojQbeCnw6vjb4mC5NfPtpNjau",
  "key33": "3kLeYkTNcfDgwCKT984yKJdVMgXZ8ekRs2swG2e563mY7bQwQZQXiippNi1FEjPdVZkdaU1Lxwda9PhoEC6dGGrs",
  "key34": "5DwEAJ7regHscmEjypt1PfBMq7xyXx4dEwqGXF13ypi9cHFzZ93DWwThHtCT6V7Wv327kkxvwsYmbDZa2hZXqDeV",
  "key35": "5HftQkSsK7Fr7urmdLGi2pMxsJVrQcjt3S7xgJ69kA7D5vmh1R7U4ijFubjD8U6XbzoELUs5MnpS8guCNRGTQn59",
  "key36": "4E98XwYW8GDH4AZvHwAacTsqYWtqaAdYpwmjsCjq4C7LBZ5qJ3faUFgz2GEYL7x6GFpUjzKnJg8DiakLK4RJBBRc",
  "key37": "2MGgSTMgB9smESTYUt3mmS4W3c9wC23z8USPWY3ggF8HU4YmWeAL1CAcpC4FmcZEGAFk8mYwxoyBjAPdiyXNRRG4",
  "key38": "3dTKJFxFBVkfF8Q7w6gR1YPQvZAsfsn9sjLRDpFqieub269kcvNDcpoC5QtSuW1B3knifWf5skuHvE9FzUsM7ijx",
  "key39": "3wfYAHv3xdCPLpLTDjN5iLtAjBfCWHsh4yFA2Ems3HNecBrmRtUecSuzW4rjDpy8hgSf5BvwqGDh8UVYFK1oZvwg",
  "key40": "3oTDSpyeGXc8rHX15xanK2xkC1XKL6ddg3GeLnZgQnqtc7WNemj2J3ZihwrNgXtVKa6Ru5Eyx1Uub8sdnirhnkxF",
  "key41": "5edg6uGYAsQkM9VzYQo25vD9rqjtK5nkCiR1k7ikTU6iyvGSTTbRB3sUbJaWbL9hCXQ7EFBJAXyCNbzXZwrrC5ZZ",
  "key42": "2VgQiiJnhgFChMK4HedK1wLGxVcr6txSDHhJFxKXnbsbWE7eE48zMch3xcDe2mVsud3ztW4hNRWKPset6ofnULx5"
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
