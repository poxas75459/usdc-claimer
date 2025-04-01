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
    "5dGA7NV8Abaq8j8o49rn7rG7ukTMXpeXyF8YDe54dUgjHWTA3dVkJNWEDXZZZCZEVGSTTPk1b26deUtMFdQMWF2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55cijRjCFQujwL52Q3F7NH97HEvRWMVhm74HzrQ2T4zVdptsvH95tJYLLVEnd3RA75HRnNVn3WRcbsd3NR8VR6M",
  "key1": "3BqfftPyEN3mnAaM5q5wHpq4CFDTA4uhkGETgq6jLsK35J7UTQYFNJEb7paWjcxi4KnGySDKAuT519Wtg3DkvqeR",
  "key2": "4SNP9oJRWKF5hMFQcLj3ZUqpgCTxAhWA31wehS4bRnqC6muZnoGF3NYnJhUosGiuHLL1umiFBCUaqBFjDHyCTUFv",
  "key3": "4WixMB5EgZzh1oF9aVJog7qtDgmZwB25ncnV2u72rEA8aCDRErxiZTkieLvi95xGE7hPBG6ngYE2u3yQ96uDsvKJ",
  "key4": "5My3xuYXWAQojEDuxN9FrC3VVyt8jBsx7BQvMqMKMuEoFBDh6cwZ2EbW6jGbhcHHk3sQxEQeK7Beiw2S5s792VYQ",
  "key5": "2fyxHjaB6Xx4hpeNGtH6y7HNpJ2VgRXh3WTx8xc6oNQGRihQ5bHYrRcTM7747rwvoVHQZ6hZTLorxsMtdVxzhi2k",
  "key6": "5zFhooWQxkFLYWHvnTzvdNhm5qAiYA9MEtf5PdWKShZrHgZr2wutSE5PWYEnv1CUiw5TS66n22RHXabojkTjLtZ2",
  "key7": "3QWGqrkNzyXxCDfPGtgYnxDdcxyNAQ5yPg7k4LsYETKyXWud8yp3ED67U39KJWr7q5yJhmTRbKkqCzEzMqk9hZna",
  "key8": "3jwE352zu8S3Nm6daJN5zsAEMSujvfFFuvAKSxfvYZaxAcXEbEDiEhfXgHuKtAzoHxQrB8GRBLVNBKNFLuvP86j7",
  "key9": "4XmQqKe7oSzXxgYZoNHyub3A2ELPD6n8nnTCHicDMa1HL53Ygr8db3qdPmbz1YZj5rHPc9g4AVujMnjgAsdhtTZb",
  "key10": "4kxKNa34vsG99oBmK7uqBJQwVzwmNg63ESkutfTwzCzqLpoig9g7EiRwK8yuh7fPy6HjvdVnSeeT2JUUnUiGBxMa",
  "key11": "3y51mMYXuwFfFsvenn71ryYN5NgyfgE6uyKE5kZfJxL37TLXuyESZR1FysxEmhFJTLbHdoT7ycoq7PXNUaSm56iw",
  "key12": "cVWYdGLePhAZ6zHGyiB7uHePMFc8nzHJMo6T8JTwVJJhNibjG1kibYERRR4uQ7TL8u92a2mtT88eDfCzNfvW9UK",
  "key13": "gvup3b3jgry1BckDt9ioSXpYrsUjvFtTESfQxW6Wt4YNZu4HpNTmjDuvZxrVLY3CYQcqNGYuP7Hq4YXZsBH3U8n",
  "key14": "VuvQTayUMjmnEtCoFQte89CCoTyHUvCwswVtAt32oHfUGoEEZ4DzaL21pTVtUFWMPdBDJU8Bf9MuKwNrZuSbMCD",
  "key15": "ayAj5PtmqduwQGtipADvNCZE9pgUwzirPT8Wt5Q2jW8MrnRn9V5Z4MUq3wxYb8er3zPfa8hybksJjFuPnf32DbU",
  "key16": "5vnNCP3AAHYUz62Y1EtvSWoyJFqTn9fyEpskN5so1J8YQLrkDJcTD7are8Zbu8uEvUJweUSUsvNEwS6R2NiJ6gy7",
  "key17": "EkDFwYbMC8LaiHH8mon8ctzxfxHa7YWbPFLCnUt9ihFMJzKgXSYhSeJoFGbwBJzbggQC43Gh5bt1onMpdkHM3zS",
  "key18": "32qvdxE65SjWA73LijT9sgSutXyoAk8AGJ8dBfDJK29sZdCMDnKZKrM76RJZa4NAcruBeYxcXHi8RkXpZ9PChECP",
  "key19": "eEYMuxDJF3DTybFPDC4eDpcegiyySV4y28waLurH9GD1fjQZAQNNuhzHsqafd5bmBx4fFk1hhcvaUH63p9LrLS6",
  "key20": "2aMhA6yaYpZDHBe9TgN8uotPxxzEVEAurxvpmqR2yK2xguDatEppvL87LRVokYbuzGEWHSqkaY4YnDst88G96SJW",
  "key21": "3wgiAuvaToiUhoGEtSszVcTGHEiApJKyDBEkD16pHTL7P5rXJmNVvtxXtQFJVTtMXrb8NyJ538NExc9pZnJqayYm",
  "key22": "5k3MxKRnkSXiQ4mjiTqdfxJY81rezJcotB3eqsj4FgqtSapMmjFGpRkSNcD3iPCKFjB8Z1L3HoTBgqNpYEs1hH71",
  "key23": "2o5ybzsK37yAszHBDF4uzLcdQ3VKqGX3LBJVwYQPprZJ7GzBQvbg59jTL8MLhqyATmHTWvHCpcsaPi2AJN3oyDWz",
  "key24": "2Tn5nbWrPSNaxuqggH1de9eTZVw4cxHGpQcU8mBjNULHEDLZt4jNcaNiPhR661aKMiUrSeDHhoFzG5qrz7xKQYMj",
  "key25": "4snRaDAfykW1hpKYzaw3g5ChixAK9fCgGas73pGqVXNSX4w3jfJx5VMLkYt5iyYkYqPzSd74CawKzCvG4Ss9Uh5t",
  "key26": "jM5sZoD3SaXbMK6KKYNCW3iLdpVSj1oPVXFGuXTXJaVsCjEwsbhShoBWAUT2A6qtxZaxagCv4ZLjqzZbFTGXU2e",
  "key27": "aWZ5m3LMUBgMvYQfsHd2SH4SBmBTNAEuAKfWzNk5BmSyLSqvByHrBvTJX7aUEdeTGyEC3j9HesWZBg4rmN3j1Ry",
  "key28": "4gbd8DCED7f4CAifnNWcLgEN1QE9hd7wphLJDzHMB1nCDYJ4be7ZeBr91ZFDvv5aaX9yPo3i8jVFaqBr2NKiGKfe",
  "key29": "3Uw54E1w4ugYAKySqBZFyN1iVWi7EjWSffgCrup7pngFWMBHWdrJC9fG2ZPQ33ynTzjKcX4hwmkHQ4bKjhzeawrK",
  "key30": "3TskbzzqbY6JQbhjQ5nebxtU5ECZ5ThGfH1UQx3p8gEp6ZqGMUDQYciTgba9awJoc2RtN6BcyRPPpVpJDuzzn7pE",
  "key31": "4qkufBHGf7dLpxzNSsLgmJ4TdpmdhmWr6KnFtnLRfgx76ysdZutZBbvoFcBmuigbpY3dK2pBgE9aCyKF1hkdg13Y",
  "key32": "5SwPnsQ5QtyaNieYoPWJZukGKPTK6T99ZFJb1ynFdpXYHYisWiMo65NQc45VGdcjMAGDJX2wYybkCTdRms3iCwTR",
  "key33": "TvHVoTbnudrn6XSR3FMwWcTALLrZzoJnVQNhUU4PY7qjm6atGVbbo4GB5rs7XKSQ39YdrqKBya2BMrptqJQteyz",
  "key34": "eSZR6b31TieyC4ZpgroTuWdkrsQdTqoDFSe6bdeXio94E5VVnuCR8Y8YKYuWnVg7e6NkD49rwbeW6TiZWJuQ2zp",
  "key35": "5Dc6bFk1QYJYFPWUs98UiWG5FNMeP6KdEEP8mtdXA522UoT84AVqtUWCZDMKjzEnap4PTNwDbtDUwHKZHcbKaVd1",
  "key36": "4nGnTa8AbmBDxd518MKtRXGyhSEijBLy8KmvFoxChrnDChKVBhE6XzjSKq7qVdHVmCBzfTy46dysPEQ4f74xKruv",
  "key37": "5fkkMyfHQYJhjxZoMHZ7AQ98wV7NxsbFAD5m8Kytkg94XQpzaXNK6YfSKYn5nLyEpjGk5BjZt2AXAaZcPVT62eNk",
  "key38": "2fyL5Fivd3tHme7P3uikkSWMnNNM9Mk4LKhCprrGjMA4eB3DwHodbEH2hdHdJ49oKUzZ39izg8eSKasotLSE5dUx",
  "key39": "3amtJBBLJyYC3cVpKCLTsAc5kQPJ4iP9SCPF9XPGTDuDSTnfzfttS434V8XjE2Mxpaz55f7ctrP7cFSTJFsJgg4v",
  "key40": "5xusauzxNaXhGtmuaHKrKNUKvdWrMSCnoTAQNQ5AoNCWwV7JKTBRMgUsnyBJ7SxKZGHq14kgPtjrS2b9BZagpDJo",
  "key41": "Km67QViJDrhvtG1ndA2NhyjCGEF8WH3TLfzKiJTB7hswZCsbFLVRBEd3ABEDKsSKxPqVUTJanwLbZrvnSFxyQAR",
  "key42": "31xpiX6asLCycJiVVCe9neEtkNsHuf5BHWnT25obc5HiXgfr4rpFLMKs4eC7cuKqcyEfgW6MRtHEVLE5TgEc3GBV",
  "key43": "5Wc1UNoDa42pwTnume1PUqEvp1zbHc7nsPwnvVbiAiGFxKMURcEf6xxKPEzYJCtgt3hEc68qucwq5zjroqhPQbDs",
  "key44": "3UtvCutkTEAax5A1FsFZzem3cbJQkaC9DwLj7JZQodaateEJtTJ4ExL5sj7JLPsL7cgg33HzPLqmkkmtrAiyDPE",
  "key45": "5X6CLaB8W9yvxbMgW3JN6B1GHMTBseW7t8UMua3ikHk9q2vTEge2hBV3vS5bVyaYMvk1rndj2bWyY9c82DFCAXdQ",
  "key46": "5q6hCYnhs5TMdZUFu6RPL817CTccASyirutoCGCZ9uoeTS7AZFnyFoWSJSZkyWfVcYeXkRiAtwDz8QZkVKNj7oW9",
  "key47": "38dujPsyKTUmpaMNsVmyfXxkXa7Lvvfp7gGNpcmGN5v5eU9EDDuzXkFEoJnWezqD1BfFTauWtsSozDPJYVUdC1jw"
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
