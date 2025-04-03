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
    "57hWAmEy2pJdwGBirZw63RbJEEYiiyt3cPwrFhcBeBsq3QHuVLgka2cEkLpbSqN4eHyqViaYoaGf38mDZgXmcWkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zu96vkpWn9PjVocrJXtjr2Ee726D7XfNn8YCCHYBMLPtpyiKzyC8666mCvT8XaHwfTLZ1hNZDD5BcdiHfCwHU5",
  "key1": "48sHCDjwY1c6GUS7MnD2oRysvwnUGBQ7Fz8R5FTBD2sbEaTukvzYG9LxKXxstsF3kEU8h7iJkc8qfxJctRpCjzku",
  "key2": "3vfmu1ofwDhUHdAHmGpP8ZqvZLTbrXyLZQv6CqE9HhmwQge6yrHwaw12c9krT12YE6KrmXAkpgu3jBGsEUcaghTd",
  "key3": "65VjwmWj3n7L67brt5MNVAD6T2KZEPZuzEZXgkPug9YrRZNiskNYABVnAo2yrPPTXRXLxyagMY8ics1iYMpRvYpL",
  "key4": "E3rRt21c889MoSj2D1QX4nE6DTH7G15U1vMCfNBPibhYyC4XYgK3mhH619gVnmJij9PKiq94kQms9gEieYaScUN",
  "key5": "2jwp1HWAveCG8PXFBTvM8kC493up9Ev3QUEvidHuPvbwpBEy6GTNoWabvJfarx2BSudiv2i43fY16pbJenfPiwuw",
  "key6": "4LkWVQQtGNa344tCWWH1znzU1tkoZsRUnusysUCiEry4FQ6p64QFcWKWRK3fMojWabFb2AJ4ysjA5RMNJ5tdLoff",
  "key7": "4DAKvZ58cEqFuAgERDZbq5eWcWaCAfoTw8ni1qTch8zQppSfx9ao4X6C4iSK46SXYBn88yaSfbYWJSvf3KYMReew",
  "key8": "2TzxzE4bcoSy7sgXPFruWJgpKcB3jj6jwXXDoqBd5sVp3guZDtjbQ7qQBbE8QcdT99xKm7kmq7nwRca6bryqhda3",
  "key9": "XtBkMveV8iLKnw2eeFu1pwGHKBWXV7XMwXLBuoHwbVfguNsqKoaPwEmhjV1WhH9YCp3oYeYVBWCpV7GeXexSCaz",
  "key10": "Ti185VrgP8VjkALptF9yp2oHZvbhcPzrqdeXsfnJZF18aXet6yRuNTaTgHWdRnwUFFjb42hB1MY8GCQMDJHhMpD",
  "key11": "2NbcYzqeN8qB3nFRBUUL9gvy3Ryyj2mrVcJwV96SmGDxjqDXhzDWpwkQRfqooBDFTM1PfFAaS4sgdYYUcqzS6xPN",
  "key12": "3y3uUVmnapumSCiV3wSw847MjGaL8AHSX5P6QNat6ngTZcHr2jDmY6NvVqmJAa4QSuTCz4F1Vj9JxNTHd1NowmGm",
  "key13": "26sCW9zFioRyGMbN542DgppN5Dm1BFCG2fJwNNkLbmXbwTiHE4s5KF3oMo4Lpku4DHLZ4rYeH5WY7GnNqiVx2zuX",
  "key14": "5nj6ZumAJkFKFKRx3HUH6jfjpp76MF1ov2LEirTPkNEphvHgsoHRb3W5YjvQYYnqDpoFbyT2dn14GWPmC42pBWYq",
  "key15": "5JDqdCg3E7iF5FcDJDknAyWokxeV2WYSW5aaE1cmtqQnWz3NdjBeufge5a53KM5bQBqH1p4XZuZE5NoJiSinWd8F",
  "key16": "2badeNYXmvRiSRn5sjUN774PeZF3YHrwvDCvfUmJ3THgBTJ9vELoH1weCuXtmTUr5Wv7u3Py5cy1VpDDgGzPaMZs",
  "key17": "4g4y9dbgxfzYj7GhXwtFJWTa4drhrHGw9pkXRpF6MZuzsoguDjNc8kVn4d26CgC3B346edLTZoQ9eYKFb1jpW1c9",
  "key18": "METroFr88d9jCiNSYNiZdBKeHme4QGByZDwGtgdLDqCbiw6uS2mrit4TwK6NpD1pUVaBBgJtcq1H1ssmcTwVAfu",
  "key19": "54y6jAzbjjrmcf7GoNM7yoUFTXGdmq35Komd3xsZwi2nDmNMVjrQkdkYxNbD3Zt6xTLhKfhhFXyRGoRkzRW7VpCr",
  "key20": "4i9nHgY1Fb2hQK31ERPhMgTtA6FHvk6ELT6vtQLiyXL1f11AnynXHSDgcXSdsYNyULfDvrzD2M1HPne1HnAH6UCk",
  "key21": "4fdni5gSY5iGUNcG8iDX8na9AoGn46VsG4iJKtuZicHeJEC9QAhUz3eR6Uzq6BnsKvbB1GrHRtn2sUQG2Q6MEGg",
  "key22": "XTJGm8YWYKEfR73ZjZxuRez5vWfsXswNZG4aLPcXjsUJS6uiDV298DrCqipxkh7PJc4jKjDjBqTvGS1n2fXKDQA",
  "key23": "4zxnx84LnN9F8NscyeRvXykBTnL9TMAJmkQYbi7NNPmxdfrzTciZFkdFheJ1eFfaz5fhF7Qy5DEuT12LgnuLrEoL",
  "key24": "4dKCwz252AcrFkKgEgUfqPgcjWYWXnQewfE3Y7Dehy7BeXwQ2zqD3E1hktqqtfkQVDMtA5PKq3jj8as4kZr79qCZ",
  "key25": "61L9d7yCxGfQe1Typ6DjpoR76nHeN2dcoTea34kq4oC9HZWU8uZmUnsJdmpnowcWuVUYrbAyTLjdcaWQVFU9bD6D",
  "key26": "41637iiet3xHCpTrGpKDk9BsfYKo6j3CZwspkDCzSCQNJwRD4BaRsCaLecc8mgzdLKckQSAVmVXtK7JeW7co817g",
  "key27": "2gb8CHNtiphPDugksfUx36LioZGzoyFzjPZNNeXNvcDnFcnztikvrWrUY8EjdBqrtuUrg769XJvXgty3EMJfNWGx",
  "key28": "3GDrRU4tsxwBHQLAxtegMRMv4Hk938dwDSpYUo173mqj62yjV539nbX1V92ABv5qGJo9Ku9WCdwo4kgvWAygycFK",
  "key29": "3q5jxwWCRZNo1Vw9jg9SVut2saBz55zFf6vDDYPy6DQHndbdjRC2JdFUnfTnxXKsc2wR3wiMqaUUsdSypdfgijUY",
  "key30": "MEsySbN5fTyjDMyConJWNgUHgaqZ5N6SBYskC3T8xMgrYJiee2gixBTRAF5CjzcaS7vTWXv6APJD7iaJMX8Kjdf",
  "key31": "2rRhLo22hCbDfvdYkjFJRymy9q6e7wYfL4E3c7keBMPYo9Ph5QtnTQ5cAiJ16XU9UgaJrQVfdMzWb6f8zANtbKD",
  "key32": "5WNYdJjNX1XJ18yzEugKenYwPzhAdFL1fvwbMvX3H2GLrFipGyHt3x8DnQa2vvFbZNerwVNEkyDhGT3GNK1w7RqN",
  "key33": "4tnQwvSsUfnhuYinVLwxX9n8ftZB9ExnWULyeem2YSuioVHHEcYgmYANmYQd3fTX3xXv1ZEvgHNGcdxmKN5f2c4V",
  "key34": "3pLYyMsZuWm86JR4LrJ37sEwqcbUBGK7jpMfHqkavaVyrsCtdbunUF3YT5HrUM9zAHQqFtY5N6intza14UADVU2U",
  "key35": "4BTXVS2KcKjWXaCbh9DxMEQepMgE4qZ2YGLAfSfGBMarPkZ9rGgKKy5inoLe1wBei2ocEcspKeDi2MfXmGcCEt8m",
  "key36": "561dDSCDUgKEbtiV7MbVqvdgvfMRiSPWLcCR69w3fK2Qc1mcipB5qcFC9RDYSWxjGD6Y6xpcBPCdE9DiJpffvjcq",
  "key37": "3grk2uBT11icokmDD266dwRn7fPauWdLKQrHMeSjZGVWu8VY98g4BfLGfaUBq5c14yYg3Ecfzd1bNY5wVqJT7Qxc",
  "key38": "4e5QPuchiVsQ82pLjbvAK2tFaoMJdBGWZgLp9dr2BYdvhBbhTUXUUL1BGwPELmJVx8fUQ96WTQ3jYPXZBBwCeJi2",
  "key39": "4aq1fxgTLWaynZdposwoE1jNZa4PN9nCDtVPGTvHeXgDNpjQXLu4Qe5zRtftedhdbVBhVfnaMULYZWRGYRgqAPG5",
  "key40": "LxpRq25zPVW4ZT84fKaguwDWkBAviUh9mmprBgvqNDRuetjXakM6ZUFsy3TguUESGwYioJRc5u6CaEYbJv94fhy",
  "key41": "2ThNSkNBXfzqG7FsfrXqLb2SXSPsRTLsn82b1tHumdteaVS67AJB9Gvs8Q84YAvdPvSFrXejVbVgWLa6gkuiQ25f",
  "key42": "5JhiabnhkiSdSSV8Mdv1tJ4ZAkQqD4PW5d6ZDi2tgAjJmyuhFH3PApj1ugS41DerBCRvuPAaPotVA2ExWGtEZ19k",
  "key43": "3p9F31ah2cXtgdsp24yrpkjdT3XN5ioZkEy6hZwgFFTJW3eXu7deNKxTissfBNk4fGzCJwXjLaRRGiYqzty3L8vu",
  "key44": "2Lbvi7tZP5KVVKn1mQy1mqs7r5AicYWSjPfFVgHNTjyJT2SAFu11eRs9mxPEEmvhtgbHEu5kXn6pT4XQMG8SQAnW"
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
