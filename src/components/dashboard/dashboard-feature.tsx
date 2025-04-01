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
    "5JYjapfYfAdfc9qUYWeVDae8u5nRc5YhooxyqTccLXE4SRnjuH31DJTpyTcGGnw3QZBBJoLcAxg2L9UaM9RZno8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wYJchQu4x4GWVa3yKTyCTtEjrsXEWAgq7moBbfFrEq7M2ybLP1EuY6Kbb6ESMvvtJHR3daPYpH6rm6NfqZmjQ5R",
  "key1": "3CcuvMjRGHExhMqMk7D65rAfwPdxZwDWdBmNkCYnBZ5VQbhCXWL8uZi397JfkuLt6jGPaSzcnVWmkDiV4F28VyNn",
  "key2": "5U8uGLfUrUrbjiBcez1HGebemRPrpVp2SuH6zMN2Ujgv283KQQP4xKFtBCh1NoZEXgEmqqUVgPUvFy3kRxhQEukG",
  "key3": "5K5wcyVTwKBBYnwUUCSW9g2sbPynYjvkmtii7VtVPmoCPrxauZWhFoGTBaa1bmCYn5hTrKEdVngpUKi7Bi9Tt6kZ",
  "key4": "3SjBNaWqYhJ6NMGQ1krE4QeU7PyEHLVasGJuHCNUpzXrbYomcdFpQHUM7tQ3WehAVoFg9dZGFG8R9RV6j3B7byVD",
  "key5": "8pkwCq2X6h56gTyNR4F7VRicJGLfGPtHaEEh4UZfGoebfkh7yzcwz577Pr6ko6pDMu7nZN8mCLqPMShyzoJzn7w",
  "key6": "2PbhT1f1cZZtV9r6ya7z3uh93rBodLk9mVfHB4T2tr4NqZD6QeGTMYZuMLEz7Y8khGx6uGU83rXKumTwyq9x89MX",
  "key7": "57SXMGRtUxRqrvFmJjzs8UDv7RWxxQev4kmJJqnJnNgqGHVKZ4rVXkYNYbSEarWmYV7AkdHp2iCyKKA8GBzbwZBP",
  "key8": "4f3Kd1KS2RLk3rmqBcky5HJzpcCRVNZdQcVGD195jEPAFNtdNuyN7QuyCADyXMMcHvtYVaH479486Ey7tGk4dfwe",
  "key9": "2mJrSRmYEuZSccxfJMCouK1H3WPDvJTLetMkKrsg8BBJ9Z8PV1YJrnn8x43E133rkG8SWTWEc9i9UciUxk4Y83gM",
  "key10": "5hQuN33MiX3jDrsVrVjtGFRjSeSTnLbGCykUEjxdVjmiDg6nqdsiPvA2pd7ridfsHYoL1wXg7XAbuTtn8yuqzrZt",
  "key11": "3vCsHT2owkGeDZxJdF9tSsXGzqVB543wTxipSaQqLDY2W9x6tciWd8JV26N2hosLNWiwNTJBqMb3DS9dbB9fTJ15",
  "key12": "4RLoMtbtWpu4DwydJsaa1WaRgtjXXHYNSEZeq4fj5cmqJ3K5nmDU2qyRG8qowQVBNeBzWBAhknWJo6aRgACd4fZZ",
  "key13": "3CtQVx8KH8j32EnGdXY8F9xepgjEY4kpRKi3gxoUtF5sJsAqM4Wp2mDfEJv3uEe21EhJ4UZuNNPdnNkS9ZaCz9Ap",
  "key14": "2oKht5NJwGapSxpZ8TA8CKvTbHrPoLQG4QoErLaRwb8cKPMui49zoZH4ucMZnTARw6gvm1DaiwBmeYjSJFBDQpAk",
  "key15": "4PKPDyrRCqWH5g8tq6v1WddHGxDE45CNfovdCJRuro3hiLmXhdcvFy15SjhnZuA4ToQmgL5SY3KiQd44Eur8v6uN",
  "key16": "4Feoy9XArv5KQ4UyYQTRAf6S6Xg7rZdJ7nuSmXh9KbEFPByAtjwW4yWQLnN4Adp5meAiS5G9RpY2JX4L3rKT6jrf",
  "key17": "2WgUvN3NGtvrTiTeabd95L5taSyyMdcS7K7VLgEwVmku8dJ8oHSG7jkiDiQpsD2KUMZFwTcDBirEFhUgi6EqMtoo",
  "key18": "3bUudA2MC2n2W86o8WjuxfZ8jPMZZ2nrozSst3RmQCc6hp75ssQPZFt7cNH38E9YJ8uVmgqFTq5U6ZTxAYwSTSgf",
  "key19": "4uWLu2XX32XcBJ5jzqn2eBx5bhwdo7LERd5cVhEyGHG4qt37cuv1eQL7LnJonwuShbBinFq1o8EnUxhK6TwSsqst",
  "key20": "5cdPzLzQwf6ddcTZ3ZaNVoMqqaxZ2MzxDW1cedzDHi5eFKhrmYYEEzzC19c9ZRD97aeekMD7jNJ9Ej9yeVq1Y3SZ",
  "key21": "HK6kaQGsH92dfVJ5QM9Ei9tA5xAWbUpUNBc2tPMf9NQjHy7BnKXbphW7uFUD2j3KyXbNny9zkehDDdJB2nUjytY",
  "key22": "4NeMNMesNWY9t6KKXLRMPJENHXX51693LoEwQzq2KuLH6LBnxWjADpS2mZXjE8RjATcvY8ymje5NwmvHs9kq5iZL",
  "key23": "3VBuGPJc3mXNbEf1bwHLxS7Bv56gXiQYL4Rf77GnvrXUEkYu4mEimwfbeUzvQ25h7ThLjTR1Z5VnA6h1f4YdLVp1",
  "key24": "3ABb6MuaQqSx1dNduLq7Agm64sUGdondsBfRPCw55ukwJjNHo8YrnQRZuLd2qjRfEqyg4Z6FZsh2vfD94yQSnFUk",
  "key25": "43RLKZoJYpDVMaBwqPfeXudLLhgctBCseZHrdfWWKKncheAHDYx5o8iUTcowkZ7uziUkpBCnytjkUDHQ2i4L8wFr",
  "key26": "3UkSNMRE88uw4qFLbswcVBu67cokjG3qCQ6TuvYqtd3NSdjkrEa6Akeoh9GKdweMkLhsuNcDUG6RRcV4Rr8icyD",
  "key27": "3zG1tYB7Qq8CazSStaK2kcZkwprCNed2XCKCNZ5EBz9BaGzjHTuNJcbWZV7RyV91s9CQitAZWPn9ZCycdDdaZjDX",
  "key28": "27yZ4cYZ1HvEMyoFB8YbaESTo5Qhy29p9S7HSJ3pJRLr5PG6Ph7etFs8X1YUjBWs5Tnu2qtVnQdbYjDfmX5cGWGR",
  "key29": "4L8HFYnsX8oRy9vGjpDeW96gYEpbqqFUj1kmyTug53ya6YufzWPcLmab2WcZV7gCakBMdibgwVujaT7AnifzDLxs",
  "key30": "Y3DRB5pmz1kpk1wdwH3dwytvTuRcqugYXVQG8vRQmNcRykuuqqQ2fPX9rMQAoAd7q9qbcxijsWTpnChZwmswtUu",
  "key31": "2LhEaHpHEo8woUDdi7pLU5GDWYQ45K3k7CjVp67hJFyp9g9uiuS2YQPdyRMZtZUjZCUGoxqbCMiDmJim2K57JWJX",
  "key32": "5Hc39UmaqTCK7BNz6YobEWAFVkmezAiamTxE1EwCbhAnh44RVo7MnmP9dZLRkQRguLAGH4PyygHT1g1F6Bbr3f1z",
  "key33": "2RyRDeHBr74PZRDbSJdsjVNKjKR8z8hpArnTrEkvxN75PKUC1GPxhLHNQ78kAX8RYKYwj99ktoCTYKTVz4wzEMbk",
  "key34": "3BRMnAh7u6jhxEQvus8ytNFYG1Y1MTm9AeZQ7Jw9tAeMtfhrduMqREgPQjbZ55HfxWpet4WVNmVDDSX1WuLqZbjh",
  "key35": "3dJyN4UH2ghd37KuuxQidPNt6NpT8auYUdYmJtZhkZ6aDodeJY5msptWdYgcqyow6Dpvt3mwViUiqg8ojN61H7Hf",
  "key36": "4oCjfAY138h8UiJBVtii83Ta2dgg3KpTTEabEqEmsLoQLdp55tE7FMsJFEPXUeRjGwBjDj6EuuACKiqtFWE7CiXk",
  "key37": "4pjZnHKimywrULszLB8FWMqch7o3zeRw1QmSRcE5oyooCpp9U9iRDfqcPSoBuVedRZGZvKTaotrhv5AnPET4fjuN",
  "key38": "4F3hQxXNUYrjwsni1w5jd3zi7oNtqpnR9mY491dLsDKE8GWiZF6eoxgRs6Em5yBWY1KsvBWRwFQiNkGb9aYepVoL",
  "key39": "2UbjiD7hhrXxKTByk3QmbmJoU4wGSKnrqE7QqcyL58JcDbXxjfpiCQvjHTa852NbGatG3nZuRRz2ZzCaoA3ZoBzg",
  "key40": "3EBUGPw35HT12baGShWtjJZ2NCASpiPvCcWLs8bypkvBrX6c92zbxjPd6obq26F5NopU44ETZAGaS1GxqBK7Smfy",
  "key41": "hLsoLvBougNodtfH4cSEaKATNirEoVi3wMTd8U9mxotmPbaTKGQegzyyFEZnfgpgGkDhsSqo7ciFWHKhc2hqtxi",
  "key42": "61t5b8HVwpqmrs4tkhmobtK4Ej9EDTpXiTousm6D3rEmrEmqgD2V1GwGaAUAf4rjmTcTfkZgm2rVeRyYVBM9NmQT",
  "key43": "46FQnrbohnj2TM93JB7reL3mTm3VLJjvPPiLMn4Y49D7xXN9iHpThS2pTUPUWgWNpqpQ3K8Lga5Pf9YQnNRsTjrc"
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
