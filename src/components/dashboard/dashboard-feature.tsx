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
    "5SimdpbsXB5f6734oZrSJUkFLgpcwHSN4iT4qQ6paaEgJUxA9XefL5AkHi4SBqzMPCJUwJXsXEqWnMwckFBax1D8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLDYWNqJPnQ7TA8rjoJVGXJvVLSDU4L67aSdTZt39eG7gah1Qx6vj7bDfCx8Bk6agfaLL22YdHJ2giesemotbu2",
  "key1": "31y4wbrgqV2qYQwuaTthvRFLXd463Ue35rmFx9vHbLRMrpnVuLxUUdu9dN9cYB3kPyNDHEuyJqPkuMVyLyNhCnKK",
  "key2": "66xsmSRuWXsdZQq297TWzGNjqtnxUmJ31wLhd334nsJc9SoMBt2BE3M8tdr6b88NymYJSfLN5e9eSeoZ6gtyxPgM",
  "key3": "29Yq5NyUehMfDXxQwvKc4qtquyRk9rTu2hE5vPncrKbAfTY7VN7excPyTcE8gz4xah7oeAGxudG8JMCapfeJpVRM",
  "key4": "4icwQfihyAxBmCtUUfZmfHbZszYwxdiL1rMNt3cZgU1rzFYx8UFygT6thHqJKPK4Kx4P4dMqiTQuTVQw6Sb6W9V9",
  "key5": "3HtMmjuXvfnNKHpYQoTnbTCZHQPugTicGHDytLD2dtEA3X1djRyB5vGfy5F8f1TrtuHPKJHenW6kH4xaD6wDU4gH",
  "key6": "5KnWnBZWTr9b95Cvx6KEhAvdYADM5ZjaAWkDKWnsgvZJYN4FLA7Fit5BMeEu1XR1Rh256C5AHY5VCRKi3k64TEmi",
  "key7": "3bAthLRvjywvzA7tuJndTHAzrVjGG6qeYjPWgZ9fih5pUFbCjbx6XW7EPWdu9eta7wUfRotmk2pA6C12gUV4pjPm",
  "key8": "6238x1uQaShbJVW6mUiPy47XoRF39JDxxZJ1Jqykjg7jw7iFddkMLfw3xt9RfSx9CsRGJprEmdN6hHYWZF8QdP9v",
  "key9": "3ZixHAvwW6CQkx6p2UXyxRdDa73u2uBsSsqprbfnf2suHcwnP2pQfpYUPssumNQkFA3WC4qybgVJAofPUYKvGPNw",
  "key10": "3DAM76YmNnDXDpshpM6FZmo3Ppge5XC3Xgwjw1SZinR3T92nQSvHXVjKJLCUr8U1B7xwoqhvE75d62Vi6QJaEUSH",
  "key11": "3xmFkUXvEd8oDHVgwZP7TY92ctD3US8yNhoqCuMjCCcZWrEQmZMgWDUhms3maWmS1V6fnWKX665Lmtqvg3Yzoo2e",
  "key12": "fV78o7TFjCoD8rxX2vSkv56zSCZWcR1idE2UV1Lujk3F1EJjNM8unMhBcN6vRnAdAE1bnMkKQFdzBjU4ncb9HQ5",
  "key13": "HHnVJvX7Xv6SpAaYJJd7RrafD19zDsG1JSyeGmMmJffaaPArxv7pMDXMePxxG5HY5mK7KXSBdkcziKbXPVCYgbB",
  "key14": "QA1d6Ak5TmrbcDuSayQmXj4RWEUreW42GukaPxCqkbtANiCHhTFQwQJ6gTBtFiVnJCeE8V2BoYHrp3CWuqUxyPg",
  "key15": "5sDyqnWuQonEishEpKJe1QK7Pd4gTCDqUYwpy2R2si1LKr53qyv5WeBPkbuFsZhVTRdyPyfEEiM2SxUbSMopS8na",
  "key16": "3iSEr1byPdQ6mojhzUK1vRioc4aFDn4baZTXNT5eoTfL2HXQSxgXmNba7zuio1oR5Ft48by7kVEdbsxMvYqsGiG6",
  "key17": "WczTzmyYSWvJKMM4F7s2EU6dQ7TujDJ3m6J3Kr1xxxdAYM4n3SBCeipaZZZ78gYELvEbfQ6KVEGFdyMomCHTwZ7",
  "key18": "2v7Tn1cdKhiRLUBi2qHw4qo4tuFP6si1guzn6Pb4hAxq7Ks1PTaAGLHMPbmRhQ3UcxvL6MWuGYEX5jaMkRMRmq9C",
  "key19": "2CYv3VsuVreL5tJaQBFVTmdACir9FViBYgxuUtgKR7Km7LY3ohk4jcXDnq8YuHDEHSNe4fx1c3aLRKYZg4t8nNvC",
  "key20": "436cNzGFkSAZ4e5konwQ3EJxyXfg9krYFToPA7fY1cYppz4bRXLcD1pSBcL7ypCSAiu926w5DJhZeJZrSaTAWQmB",
  "key21": "54akrxAiSY4sZFWLJUtEEXYMRXqDj312FnybMLPMNqsoKDYdFh4fYzp8hZDYM2Ub3F9TRVYGibXXucYguZhF5Kjq",
  "key22": "WUkBWrU7oskWa6dGWA6isfUSLyXS6yMXJmPmAzHopp9ktN4SLv9EEFZrJnbqbfwesMSZWXYtbDhYaS2bfwwe5mR",
  "key23": "2v8dFE3CAeQUUkRiCvo6aurG9kxJqsu32KXqrfiTPESZTptKnehA3u1iFwYDs1iB5A2Usqtx47gvhRtCBhR93sk4",
  "key24": "4epsL2SfkQbrkta9NRRzq6ZV94y3NxpxdCmmmbF3xwP7usKreMVuPbEyRacTFYqb6GzDTNYd6GBTKouGWeGe1CN3",
  "key25": "3kMhAWF9d8QWpnomYD94ertipV5EksLto7bCLuR7n7L2TQRZRHZbXFyB7PgMXFVLyRjm2GGP3rqoN3CMAQEjtqq7",
  "key26": "3jNmv4pjTxmwtwNTzEXRCTyhsweYX56E5fWrMnnmPnqsAxMXyzfojNEsQyoFzg1tWoRsmaG4SDVijjYsa8bA3sM7",
  "key27": "DAQdhQQFqqa73r7hucNZw6ytB8rcDXDLf9An4ymbxfvfxKksr3Hp9BtRyhnGT8fqs9RuV9p3xL3LDgNgsVBsadV",
  "key28": "3fm5CDH8veaJxS8cYhcaJ3QKqxruDkycrfExt55CJBqoZARMaEe2kAbKmt7442M9iireE3VRAMGAmCvdDYzm5bzz",
  "key29": "3bmShXB2iL8QozzB9oSS3o8iLxhoPpF8wZXKUZXcBXK6C1X2eDBenyiUtczDVA2TGE4jeLcrNfyDcRhfX7XnLuGz",
  "key30": "5c1AR1AFpmpaPrJomSXaq5RUHkcgsiyecpTKHHAADEUMmj3GEzx1ZSZYhvy2bJQDx9NgX9ZMsxFf2dG4nG2pJRN2",
  "key31": "YPJNV3RX9tqxuSNzSNjmPaaJ4cZTMcMN2nAiEJBd2gJ873XmVnAN2mZD4WSmTwPMwTHD3bt25MFivkp4oYvYAnh",
  "key32": "4DhmDajwsMmyGENk8TidUJesUSsCnXVWg1D4CEJRoiB2EDJRUX8KKQt6dsPgg5Xp5wTf8qSVo7vDU8E7GT6WfnhD",
  "key33": "4KzkFuxaWN5cRAuF1aAfmuaEJ32Z1xaDmxhHjuQbFB6D3HN7xpekZHQg86LqRncpPZemGqnC2h4uzfLowxVbmcox",
  "key34": "Rd4Nta6j5bmqZTR6mtNQYaTDyqe9XKEYUswiCnHqHWwZPuWJ8TX7P9PXdn5H7uL9CJfcJiV15rFdjc1KSnqMKZk",
  "key35": "XV4nYBvfSsCKNTd91UUKMZHQ2uAZnBCyAKN9aHCKzbLoo3sKW1SP9cjvG1AProBgqo2baJQNSHVt6mNZdg5Zuqy",
  "key36": "4wqmyjmEwFEahB5QvuPUeeLVxbC5fUDkMRo3K9RscJRpw1GqDofUHU1kxzLtw8oK2FPHoJszBcBFfrsU8SXbxkan",
  "key37": "568GQqrc2HQ75JbEsG4zabcBuic36e9AECKiPjM78sH2maLnseCfQYfZhXJoJmJS3fa1PH2yheLZ7CtJJopA5wQD",
  "key38": "593pmG5TRMYMmpDLbQDPUiGKe7BbqJ5Mnr1m3PFXXPYqkiGJKjsK8V9QCELUoQBnVJRQVxY9dCMR8BBCaWTQEsnn",
  "key39": "5W3CjnWngL1aafsTDRmfQSB5VtAKY11DB81gFa1k1aZwLNwqDdF6mgQ94ef3zC93q8aroW4pBChy84mQNaD7qHai",
  "key40": "4tpXuKEvkbYnjRL7QXHgZvvojNSGeLjZH7P8JSd4U8YgvoN1eGP4sKuUUHJ4L1QK4ynn7aBcjLmgVb8zK7NaMkMP",
  "key41": "AxPMqpc9Y5nuWBn9paBc855JsZvy8ynWP8H8E8XLCipmSqg2rQEFRJ3iYLFgsFijRdV6scXEeV6mfzBEWb96hVx"
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
