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
    "w877RfAVNXLYfUuLVwgpt5uWkLPi9JJM6ktE68e8CPT1iRd8PeaNK6anWegEo5KGPWJ8jF61zc83Q8cJemms6r3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TShjuEULGsQUKfof9doFR3ewt1G4P48MKUfv8oBcKWmnCJpMcVuP3pdpfhdku2BQ4vph8RZwhNCqwPELV5VboLD",
  "key1": "2EaERrPxmT4fDXb3ttz3NMPrM1aNo9q4K3QsgkAATdKKJp8NhRuXA2Eg3yJKh5bxR3g3dgGT8Lhx9KmgXeJim1fE",
  "key2": "3TbzRbLAjsJRQM9n3niUMtw8ajQVbTPYKBiasB2AGHYSWQkrxddG54St1uwgdPMNmEDieQQkxAWjDrHsWtYp3Xae",
  "key3": "TTQWazSEtkzJnhXNG6PggVPsxPX5YpaLK5R7qs8fz9yqAbYx9s7auGxBZCCtbjqxfQuk44DiaXRdU6zNna5Pzgn",
  "key4": "4ivxYd2uezm86JgS5L85X6hvg9Ctsov6G4Ayv7d4ifg3Kqnu1NbYRGN6GuRV9Cd8Rh4WDkBU7Grz18NaBwaWNvAU",
  "key5": "yxm6Hh6yHDcMdzp2nS9uZd46Tgo4J7krPfg4EvNdy5PC5StsQX4UNBtvmoDvtocWrdMuiMEpgXEXRkkg2ZMY8ye",
  "key6": "3LpWbsMoW79J2rRvATNbqVxbKmDSvixYteLjC3QR522tfyLhU5NCE6ebAqRex6ygatsdFuCTBn3KSQvd9ga6AWxR",
  "key7": "2vHtMcyvd5qGJG2Jnkwgjpg25BUiGpgmfCgXYoJxv1LCVWAK633d6FyLW2N2AAJeGm37FG4xWB2x7wmiA6kMvJnj",
  "key8": "2QXnMrTe22w8Fyv1ihs8482QQV9EZo37NsqyedBgGtrym6z1wiRewMac5Z87xf3WQ6F7HKzQAauzsLrKppcupoBV",
  "key9": "4RDuYsdqcfDAoQya6fWhgfmSzX4rVHnq9qcGaPejaZ3TDayg63zULCc6Zkz9h1ZCkk3EZHVmSb9qJwn2y94F2cGy",
  "key10": "5NU6AdwkfMG8Rkfx4QxwYEe9kJRQi4ru2YH8nEqLgfaADzzHbRV1c84SV5YhaZ4hWihL44dB98FqMkcytEVo32sp",
  "key11": "4ZJRUKSzchobgyfc7msGmkgd4Ruz1VbQZmvgNq8g4p919v3tZWGx4qKi659pqr7dvUtyRwetDj9hiXnJbXGqWgRU",
  "key12": "33AJD8qnpxyeU4WjAePi5EYot2rhS4xfDnHjQHUg2Hwb9hhZAN7Q7RVNgC7X8GNvr9t7Ji5uhcR9LUr5N8nzCv9g",
  "key13": "3K9A8RNyJ4Jg3Uzdq4DRDwjaZCKwydUDpEYR6Fj1Wm6ff7fADq7yeSAmuFDGFfXsiozYzS2qgzbrSWB1mDBWe1sF",
  "key14": "29nM8K3JsqDs98PhGwD96JdJg1DQd2NLV9y4Q5Y8U2RhPmmd6Y8aNFt7bQEr9j8GTMiFMWVa5XgMtkCH3Tqcjhbx",
  "key15": "4MPzo31bsiiajHGGP82wRsjmXfYFxvAZhQaRqmtPHu5kVUbBu6CK3tGnLw9QCCeXTAJALiunw7YZJqbCca7bdEDM",
  "key16": "4jQbMRhUXxeF4VtDBpsJqASAeaHN3MDET8nPZEodSGh4qmekibruEqHdhqCPNFMkLRhcDzChVwPyFf5HJi1bNtJm",
  "key17": "xDaBZGMgMASbcgXL5ar5btfeeZ1L69xh6iXuxGsuoHBx2geAkd15cSvizkfvMwJDcNb574QLovrLTzurpsYAv1s",
  "key18": "5nDn7Ce6zH9edv2p314UHj4fCMm22dq6mbHx62bbMB8au5qE9XUeL4HYdoKQUHGCpGbfcTkLx7sm1y7yubprjzFi",
  "key19": "3MEPQHLQcXByyLE6xVvzBD3tgnNXdCdZerzC99o9QLobwEbTrR3cxo98kkcvD2SoiE61ZC7dcDNUQURsxcZYeQUm",
  "key20": "5rBoPk9vdQRFBMmJbvM4qivJjhEVPDXGDwAoEQjbUouv3dGqDQanrWoV5PKYEf31hL8ZxMpUCHfcNx8Ji8TN643P",
  "key21": "7hwYd5JnKwtssA8bibGVZPFWaCPpF8bo3YQoNgohrUejrDeW7Ebu3NrTMtBoTxizXRyL74k7Z2sSHFogmXpRgaD",
  "key22": "6DtpsvcnHFJs6Gesv3DuzpgWfXPENJ9Sbqe7zXKBF3bFj7Cm869G7fyELEJ2fKfEcJSt9i3tffaCc6RYWng27mz",
  "key23": "5CEKHQxL5AcWnfVDX1fRQ1UEkFkr6GRq2tN9PmmZPSQVAREZUTbfbrng1rsAynAZWB3b3emzPRa8Gf4LqfhpdyLc",
  "key24": "2dCfXjGBaQmfkU3JDjDSxo9FWV6NjXLoUnBAUKFmbB7vFxPzFfnbZ14gyGGyz3FyTHJV4qvhseLDXcnxM3fjvehH",
  "key25": "4yBe7r7VxoQfxZX4bHEM7o1XjZKfjru4988wT64qce72bUTwpprYr9zzBPhDcLqJLNBTgkYF4xUy1moApUMBjzQq",
  "key26": "2fYupDebme2CXx3TrByLFR2e3KgLTFX59YfwNTHFH7UrcwZ7Tkfqp1cHa14LQ6rng5Pz18itsqJi7rLnRLtm4ZgW",
  "key27": "3xJjZeynPyT5swyKoQ3222LT1ToepPLT8TC7sPrtwnQJHVcVGMB5f28XnG74CHKQn9EQYZX63hrfVXa8DFcEXksa",
  "key28": "655aDd1ugn2pPF1bzZ8FCT1NHc94B177kq4s96cCEL9peUsmsoj3GAoNtfhE4dS6dDcHivtGPkQXY2ZnBCtdR9qD",
  "key29": "5dsbSiUsNKWz7X67oSiZUyP8cxdpdVhXyQiCLW8gAx7tUhuPW4aG1NCUq7vkVsNQPF2ynaYwzW1FnpepLfCzEFtM",
  "key30": "5CcouPbwSsskmuaPW1TWgh11P796is8NanAtUkGa74jJVftDZ7XHiVfsYDYs2qGEsw8tLzskge7KxbXjCp2SWF3C",
  "key31": "4aPkM3qZT7tnmxbz6L4GnXSPkZVswPijuKY5dyHWgANcdf5c3VhDFAMxJeQNNCMiEAeEDxu7jggkmUAJHuk5bV9y",
  "key32": "5SYHFeA3RZMXALqs3HEcU9ouyMwuomBW8WEEjLkuqsU6cDs9iWU4HnmFAcmPgcAeSDuohccjVcNrrw1M6PGvkfA7",
  "key33": "5mHU9mxJyCQj7gyYREh43R3iTxie3LYTfDC9uwHdLfww5cKVBSUL1qzEM6uNBGzFhQjHxkgexJUEg2GRqmgYKfrC",
  "key34": "2QQiyobQ3HXoaSQKVbrKvhmwxSasKbVc3qnizissmeT7H6aRAKzo13CywWz256QMDnWupd7MtSiD7YenH4jho15b",
  "key35": "3f2HKPadJRKkgTZazUoqNsihgy8sWju3zDu4kPgUbFGq4wiFbExyq4Xneza8Ey6NUdH1bx9Mk2rVgkP9aNBQ1iDc",
  "key36": "2Gg6Z4bbDZPEMK4rCAaFLSCC5JEdkSitKy6vdx4S145s8wcrurQ1oYiG43jkaAnX1sJtW4SoBt6KAyxCxeMUwUwK",
  "key37": "64pkGH13Mf5qSQUXPTHopbLaevYzzhGHJexzrzsvAwoKHzg54TBSbeRD1jcH8HEhGLr3HMuCsQuKdy7eTWUrykMx",
  "key38": "24V3cWWqxMGv3fypFNP3PBiAfG68JvU4TecrjvkE2wTjUryseFCGLaPMFEpweVT9fiWNbwuowB1zbYkHktJxAf9Y",
  "key39": "2FJg7P199KB16YNTikpcBSANFeJpFMctZfEzjTiYAi7ESQNgE6TunKoq68h3SwuiYjFNuux5h8QF9GDyJyTP7Mjb",
  "key40": "53THAroExA62DTzqNjVRpxbA7ntkGrNGJvewMKeDAEuCgt9Q7dNxnWHjzyUhSBcmjWySfxyxfHeyiMfqZS774q5Y",
  "key41": "QpZ4XaBsNCgK5sPaYzBJ4SKo8tYjPVsNqAKKQbGhWmpjEoSwLce3GQXoa8ZkjWzR4Q8Fv6A1AH2xWJ29vGQtTEV",
  "key42": "5cDopc5kdsmcJrfuChGeWKyj5T4GU5UN3eb7qpFYH6zUhthKioyFQ7wCv1XBZPM65xXnkGowHXYVBbhKY37HTeq3",
  "key43": "3myA7vEiMzKszk4hULsjNNFzL4Yh1eGjY7iBmDBekRXLjKfzTF7mX46y8tsNuacjF97NDBWdhpiY5BW1zM4aNFSw",
  "key44": "39wKQXN3cn9RCismcGmVByg7e7KzVA5nfM2TmBkBDv75eDagLkyEcw4ZYPXxQ8UQMAWjNtBEJrAZR9LeUoJi6eGL",
  "key45": "4B9sefwxcixuRPwtcAL5mRdL6YY4FK2Kkif1q8f1eWTBBEXnDXe4nXF7jMaghkiVyhAAHKqYBsi8NhvXieHU48dx",
  "key46": "3CjqTKf2XGEwNTb9jWzUPRSBY7PREMzGuRtXoU8sVeZbhBnupoRppdNrKDxQjWJsN1N1DVTsGSUEwJp3DRgP8Me6",
  "key47": "4kxUjxvaJ2HaLz8RqnpUsfVVmpADCJWMTfDED3D1QJLciiyra7WfbKiDU4WaYHFkgWWKg7WFF8Gme4UsuYexQvzV",
  "key48": "4PiEi5NdMf2RTxE6ZDra6s4HZYWxxbZs4UHzGeus4iY1nU93m6RNFZ5XAGsJxcayvx7y8QAZt2E6Azd14rqgLqyQ",
  "key49": "37aqgRX4vKRpuuXLVoaZaqUySGRips6Jcho8RpZtW5rAmsw5jaiyC4VY2kEU2HrdRLWQdXd2UyGLvr9dgJe2aUr8"
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
