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
    "oEurW117YbRNUZVBSSEpxfcEHHKZo78yXJkeUuymMQJHAUV2Vei2uR6kcb5GTSHQ5A9hZhu81jfc84rVtwvHNLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skNTYmykvwkT3cM1VAKsK1h9V4GEvyuGJDzQwuB9hjyZdhHgHrujD8zCvrMGb2P1Uf6Drsr9wGeo9NZdzJqWHoK",
  "key1": "3AukefMGakAG2eajZBK4evNYgcrYTqoXFEf3MZkK35v7Dh1RuBLytBMcLr3hLgvdq47q2cyiKnoYtQPUxUp49rGD",
  "key2": "YPXECYWpW9pq9sh2mpLSYhdHZLRwGitStsnTxLHUG9TXEc7fUd5tnLoJvCeD9Uab8VcnPRGMidx8abZh9m2WvYp",
  "key3": "3GNdVEpaqQqPq41nLMaD9ZVv9RDXGEosXDEqnmVNoYh5sdQXDifNYii8bSvNDQjfbXrcdJTH6CDp9F2Joz7KsL8j",
  "key4": "2gEZbv2ic8bRJvmqYN9vM4sRCjThgnecQQUSTC5rHKAxcDfAhmiESNpbMLu7WkvYTtsLdVvoD3gHJx4TxKBLdhJR",
  "key5": "5u7X2wfefyoKye5uVxuEbbj9EPx4Un2SzzhhiqG3ty8cXuMAKxNKUY9Uob6DrVTB2wHJgFLx7XZ5U2UGVNnTnjJg",
  "key6": "3s3RLQuLU73tb37cEst8Eyzz9poifzbEJFqWAuwHvFRuLEK3B6xEWuyPybFiuHKrBFR1yRKNaVuCLYqgwKoxDzB4",
  "key7": "64Qrm243AuDZEt1v5foVpbmMVS8EQ7GwJQHCRqSPuF7xgzLdKXpttNcxkCaGrpoaG2HoFiYQXjKEfGRXWk3pu488",
  "key8": "5HMf3RGCp8dFvprP2nbfCvrCw5UJeqyoSd9K4yEt75cKRnoUgnqG4kZMfc489BDbaLSQ9UzANu5qDYSSPwVuR74g",
  "key9": "2qFhZUZQVDmXT4wiLrN7w3ize2vM7GeyWFSYHSFxTYQ2Ueh2tVVTRX6PWrh2xRPMEmHoNAXn2KM1LtCMSw5e8X6e",
  "key10": "5CkAuKQtvqC35tBDZ7f2NgcYJ5pWvf46ftER6ADYX7PqU7bTyNwMn7MbVrpktLLCfehcvejiGAytkJyZ7TswSu56",
  "key11": "2j2marSz7RtoTGtvVqeAKUPGQrkGf5CvqFAhYdnCzjnyTz3SC3ZejxrjgiHFFSFYGE9HSsjA9VW8aFgcUEg5Nx9V",
  "key12": "3W6q6X8BwbV3nEHPdKxZWPB2awTTg2ixjt4ftbxjzvowzPXoXyc9ZCo8g1v8wX4SWo1CD76KHbbHJCQJ4wGnJtpm",
  "key13": "SiM3cGJTyAXtXGxDZ5sykRBT9r5ygRGAmCpH6JE6iABkiYonEuyHcPTdC7K4o8NuiJt8scSYmPvZp3codCEJN2k",
  "key14": "28UbDsM8hRWJVTeT2H58wiGMKw83hGCg6cAUTcfJAm3ZKzip4psXwZazj6iRw7JyzHsthWEJAjTrUZP47PvmeeaM",
  "key15": "4rh65fWwWnMurvj6waE4tgn9c3HzpjGEeN74MFs9Lqjy6khQBXiPSAbn5kTR3SzvLyEfS1cwJtaw5D85RLkGzDaM",
  "key16": "4DJSr2H8K4x3nrknBWJwHKr4t7cZaEMhAsvssdCPWTw9FroXemDLhEYt76vjxR9CZa2MhN52H39gHPcscGei3kLv",
  "key17": "3TtqE5WVZFueeYuKi7WBaHC2X9rD8koYQP25WUtGSrZQtF4zdGykVvGgdR4bzZa6EyEHg61pPe8MtsHagPgQRoL2",
  "key18": "5k6XosLLpm54Mh1jtrTudHcW6eR95nUKpoM9XcZT6opRQVYKxmbTaxU7YGFHYezy3uZ9Letb5YFXVYfxXmeZXbGm",
  "key19": "5zNyXA5hkMHEsGCnhH85ayQzreNVYwcuyiAc2pWJysoWEFGU4snRNcLWKMibYKccKvwp8cniWazt1P3WR7enMX7u",
  "key20": "52TQa9FFnHNfcdod9vFUYUDQpgULMm78ZdiQj1ra9B732ceJim7iGmJnuUn34MHfqySJJNrw1rYbszrgVQTz3gDg",
  "key21": "ZAayXX6MHJGNeARpx1JKFi2E2RdQMBzwAJRzR8EKcWHrksGNpmbuEmNuQ8GgU2Cfu1BXPaRmQbFqWaJMDZMLbZ6",
  "key22": "2U4Gob3sLadtZqZaCN6yFTT6edeSy9fPgK2X9HgWgaFXqD3zeETPbFfsWMdcNhAjDLK4DF2kAmyzD8YUxGR6NsQX",
  "key23": "4MyJihnrTs7QEZ9XKRz7DXPFeoXjL5ALRJrv7u2xSATZ6WFwp1XSZGpCXxpJmTSoV6RkkVnUW7k8xaNdyG17kZjZ",
  "key24": "2XQ19h4y72efaMwm7MpNJd8G5EPXz1M19RVBg3YJvMmcMmhtsM5q2bqzDKLfeLApkrrNZLDSRHjaMZEWpEsH4sq3",
  "key25": "2RPauB1zt2cDv3DUFvwYKAZvng2Cr1p3XYhWJHCmu9niR5M6SyFSqJVsHMSVSCf85YAmnorBfPZha6Kfd52WM6QS",
  "key26": "aVsuGSbwoXvMzAF6P2Jyibe9UsQQxpgRePMKbwWE1yyhHH5J1f9QvW9Ab9GLBerPqyB9zLDApkm9szLv9inBR7m",
  "key27": "5HGTJAXn67ZiSdxpX4ZZ2iMw1MEKviHzvHAJSPnDD66NAAUtCBgEfS6Dzczrwb7t7ExzQz1SBR9eFXZLHvawYbqd",
  "key28": "4BAcpnH53BTgGR2mDu5ab9nUr2fi85VQq7qPMJ7QrzLL2uWVPizdaUn2iksWjYvkxhTvjHyPcBDg6YPdd3M7q2BG",
  "key29": "BpyHGUPM4vHMwkHkCvRRhwYscVwVSS4iXdKhsqwVMpKgZ3T7aFhvyUVPtLwrxaTP7Mha8uAqGJ9aiseCvvCycBf",
  "key30": "4zYKMcxuQgtCV21CNxLsF18c5BJHRNvCAqj26r1xRMdyGi2HSCBGVn2q2Z9WFD8y6pexhN46iZfXzm2Pf2EUEu67",
  "key31": "3hAhtWE8h7Kqc9kToEmPheEhL671dS4LgDTGKm9qpQBATZPqVcJgsq1w9djfFmcaep9AF6qELfKxYMngT8adreFB",
  "key32": "4YHmkq9BKgWxNMhkv21sjxY7LQdFVBktxZJnEXThLTk25n7DcrrEnfwivJT4EVnsMWDPni8FnPTGBRpQnrvRcm1o",
  "key33": "51TsZueQGaZ23wswByFnB2qJLNuXPGDwBrEFgZtA4HfNcgCnym3f6wSkPqGsNaZxXnGM7HNYoyoaYdJaYcAPT9aP",
  "key34": "3hs5HySzcBU5kSBrXeA9xAPR4jZvfSAagdJaiLunofqnaenTzzQKotgC54n7zpVf6TZ2WUv66ahQ8TAiW7yiYe16",
  "key35": "er6LpJrTs5nvftMUBXsnfiGXUWF17aWpCfiaq3Zvw6tFrCfkT9umrdv5BfNQ692cBNMsAAA9X6vHW4pNJSDqrqA",
  "key36": "38sDmYbySveSeebN4kFxmPo63jciUoa3Fb1kvharKJPqikfCH3XsHVEYAwY5nkJDc2UujybTiu9vwjHtuEg8FLCG",
  "key37": "4NQLWvzaHXWxhH33a1u4iXzuTr2yz987MRP97Fs3iJ1ooX9Nfim1RCYjbUgHJTZgFxGc8u1zgiSuQCCcrk5wTNuo",
  "key38": "5s7auyDLQABPp2druKm98LdPYB9hMc3MuPWzxWZ6m47D3StYir9jFF2bfq2NVRtAgyJtJVthL63Fa4ycAjqLBDZ",
  "key39": "2nH9VEedq6kkTkpRs4Zcd56Sp9yftq9M9vTkBZFbFu2F6Q8p2CnK1TaQiKrU5s24s471ZU7KffJWZgqbWSjratMz",
  "key40": "5SoqY2RmfFJHMcLyqRY4yDvceynzM9aNBHS7r3mqFTyeTizk5SV4Xim5FPBKKqn32s2h95Pttwnk2hLrzooDKekY",
  "key41": "3HYbBJ2eGPHS9MbpfN1TWNbLoCG7ZMWSgRH5WBZ4ttrjFv8vwUm99YFXQ8n6UEZhbPaTZay2TUPxJb4rJKRQpnnC",
  "key42": "4Z2NKoJdDqiBGKvo6mX5J1sAKeBPVgD64yJLjS9MANGBJjKmXdosNw5NGE3yo1EfdxbuZsxT5GqUtdffAUvaCYaz",
  "key43": "QcSuX8gkaKeSM9b2frq5B5witct6Cett8sPpt49sHXryDJShzxLNr2nqYoHF5T9NLSbuhFVRjwY9PaxEpXyn4gc",
  "key44": "2QxX4fjFmTG7CD5r3ix6ivq6EMzvNX5JNouTmB4BDNzogC7JyB8FEric7e4ETmPp8hsfFmnN5zLhvzFxtCtULTiT",
  "key45": "5MzPzbcwxgCwbtSx96RbX3GYd1K1snxtcfXUayPF5TPJZQypTioSK7DurpGMW93hvDvbywNnF4oRYgDmfA5uvfkC"
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
