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
    "2Mwug44JmJGdqRrqS3E6eE46xucskzw7sgZvc6yG4GGdSwgLXyFz6V7UzscUHv3VvYoP29JXbVm9H8DieXUitY4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9zHj1cakGb9iMn1fAKzsTyezQPsAJ4jyuDVh7MFypoDxgRAiH5ixcYnxWUKn71dBaBxd5jFjYB6kZPFeTub91WU",
  "key1": "2U3rCyKmUXCp7N1PmYqpHNrEy6eTdLUTCbqKZAsqzXrgfbQRyvWLZ6SDtV4qydKJzLcezjd3S7W8DVEQj3Bm9biY",
  "key2": "2e3STy2ayQeUCS1eeMYjswhwA3hCQP8xnrxU6BK4oNEiDRADuuydeJzdgyEs7tiymEJYCUyJ9BSqeGG87z4fY3D1",
  "key3": "2uJmym1MLuDKjJZeKiVy8ZHjR5E7bTB4Ws7YTBR8LZZ2cqnf6F5q1SGVPEMMCATTM7ECNz5pRPLaG176Yxymunis",
  "key4": "5NPSE777BfP4rAx73kWHZekUjDmjJHenhQ2sgyWBmNkfQdwm8ktEj1qoVm7mrPtytbDhBQTJMfoBPnqjGj3E2HdJ",
  "key5": "3mgKPz6s4dj1zvwQXSdQHgX1xHGeSLvzK6PpomNPXufjaSDGffdhUn8oeVQtujQ5Nrhrd9oFfvfhmarpABoe9ppz",
  "key6": "4v43GjcSa7bJJ6F26aoWixftMaJcAyUCFCdCRpXDfTf5DoeH2j2BMHEnHv11yctEvoQ9jdKtCADgXECDnxFx3hBZ",
  "key7": "2zoxsxo4s76Rk2B1QSg8HAswe12SmzVfBVyoYKF87h3vhoGbizbsgy5jFtYUkMmZMAycK9pEyqsAo7Ni7CbVhMKP",
  "key8": "2iLpjpHXpieiAc2ZZmTB46ynvn6bK1EMHXzEHWYujtaZdDHrw7KtaZJcxQaY5u5NTNMV9MY7JRa6GNn2C2uiijS4",
  "key9": "2MKWhxfF55Z15P7G27ovaPifFLVpsorwF9MGd7C56cwCxSSv195sQh8CN6ZQzf4Q5KsRSLLqEdFL7ouinvCErvh2",
  "key10": "5qGUibA6otP8WrZM65NCLb9fFpUuSw5KzApBiXboo28kYQqr57CiVYZTCbLzgw82L8h9Mrmu2pSA777bmSsPKCzA",
  "key11": "54dYBrrXGVUvmnxJsxi537ihBcQ3mkEMsB26ywgJQb2THj9Ca37E2KycYpPh34CrQ9qCW1Gvabodd2Hbpu3jNZE5",
  "key12": "2cBjg9cuKPwVk4ChhdnNishrYD7jyVSoNoZ1qBZPq4vP1w2AsqQ8mRWpBcuc1wU2DfvaHScT1hegsFEGLibyhGo3",
  "key13": "3Zzq7wvgKawNZNWDTTRnMkkBYDfpAFgPGCPTn9G1NWc6y9taTavbBut4ASioyxS5xAvKFaz6FWTuvr8Ar4xYhejf",
  "key14": "5AEpinY2i3pJUiDPrvYRLzU9iH3wTCtqFmAA2vQ12xA2ZsWp1Pyjg9kfMdGTC52oNWYrnAzmtBnvfbCsaRHzRAg3",
  "key15": "449WXipd5UrH6eRTrf2NTWYPEPt5nzmgxxoTfv7oS4koxK4E9sW3AJcqv8nuo26L2G73nD1dksnyUBSrPz1Hvuut",
  "key16": "rQut5z7NDkRyuWrhTLRbP3pX259vjKEpeJQ8S3vQosegepk7rniPWNZdnVfSdZt9gMjTAHyBQp1dnry74RSFL4K",
  "key17": "8VDoD3uVu6cVC6JNSeEXrAR5Gs4vA765ef1R5j6Zi2eqqWL5iJfvQgQvcmU6mvwiYjXr3tTiYwbfucHiM99aQy2",
  "key18": "2sdekJDYPEC7YkNtybBY2ygksrpPVn4tGFW4RaqVcQ7iMhVotysq8rf2wDZyhutWexrpVKZhSLJp66GqR47V1p4S",
  "key19": "RhdwRT3tGxrQbiKBEVtSh4jv7U5J2jG57SwmRzjWiNRNsNuzajdHXBkZr9TQfLMZ6fNxGj734nkaSXpbdPmNUdR",
  "key20": "2RVC5DDW5KrskB1LVVrJ9RPxVjWwJcHUdMEAFRrHQmMy1dmXm4TJnFAJviS2bQ8WZZaLon2rbZqoMKrXBFPjrV7D",
  "key21": "fZiCUycYyHaRkk8ctTtbxpz8PphGcQ9nvjLhkCeUp1PxzS9W9Tes3KqviPg6qzPxaRreixAS61x1tGRrvmz6VTg",
  "key22": "38Z7s79FgsKX1f9CCsDXZdxAf8cxeooFuXzTb1Z5pxjmuMWHK6FwitXSD1q3DC2RcJFYhJ5srEW5T8xBG7KA9tJ1",
  "key23": "SgQRgDGsQxRmFJBW82xQTSEx3Qm8FjVVgKifAt3TJjEkPGt4ESSdXbzDDCq55CkPNv1peaM5od3qQSdrcEsp1fU",
  "key24": "5byEmYvKDk7DXcuo3t8Caqk4Ctu3WNMx2zze7ZsddVR6mV8UMREYqRzgaWASoZwtuHBfznEVgNuPj2AQkoMkm768",
  "key25": "5CWvyW42hMKfpE5Wjsctq6KnQbDPm9yTjqru1U5CsEprRNtjongFp9vzzvizKmxxQHx2Ee3JDdW2mTf1GWZXrjYx",
  "key26": "tnGBTmSXJT4Preih6nKrhPUJFDgR7w1qvVw7E5zf41e5YQEezjSU5igRQt8mGQQQZmQXpmhCeMEeb3xQSxZjuXW",
  "key27": "2uPTqt69a3SR4a9d6xS4JhtdnXhdu5XehVtbtkKxpCcz354aJp792c4c3ceMhHMLYKhKjuU2s5gsJtw6rhjTDMvY",
  "key28": "3gpHRVZ8GD5Cnw82ZdPQMs3tD1NsYqPZPWBeGa94gUHuhrxM68ZFQviNLmv8xBA1utzYqJsKf9KoRG1SpDr6EvHK",
  "key29": "2FfBwUbjHQA12UGq8bMS5dQZWVKv7H5fR7gXZaHMpLQPZXV7jxQtQhF9B3X7CGmzR25JfcKLLHos9bd5UNtgf6ui",
  "key30": "5DFQaw7MjPusQF5BMAtf98wet9LsQEjjdTziaDg5zSYtjCo38ELyhinxkBfQzrRhJKFrT5GoHJjfjrQVoJvaiwba",
  "key31": "dhvv8LDacVkAL4UoiNcxGZwSSBDZh8CMjFWgW3FyKCEyoLT3s6sB6ErBFwaC7Fg9qCruKfnkgH1rSDB3mK4F5eC",
  "key32": "2FY14qEtEnPME3zVsYkbXn5ojVXAjfxN2KAjQpDQzkNSAXqiVcaNyRonn8cLmMLxYaLASVC3peMuBu9ye7Wf1m69",
  "key33": "NVtTHb1RJ2ABHhqhdUWv5hLFhHuJF61n9dRyNxrnHEobPybeSJWFySUxAYAE3VAaUQ1XtKmXZJ17vTkbdGwxgLk",
  "key34": "2uHrBmN5NCRWvfEjBpNJxQEETRDFjWXpSPB4TVvegqxg6ud9iKkLuT2PhCaMN5xw54R2ANVRYCvoJeeifhmkYwkX",
  "key35": "3pnxpH9mHdQzBM8JzEM5jrBX6DaSMTVH33gcu4keSKW4d7R9eYxQFCzvZYCK2mmf7R4FU89tazq7BP2zHpeCDwDg",
  "key36": "emdnhUGe5PRrpTKfR16N2UKFsgYtRA4xX3xpAUQdfmCRprV47Xg7GgZZEReJeKdrAsJRWT84uzneMS8T6jyFEuY",
  "key37": "i4Ykr2h6j1ufoiL26zTZKoxyFQKZ3hsR23z4jDJC6U6U5Wu5zQ9hw4X16aF8ZSFNyy9QkF9dGSpnnL434RekbAC",
  "key38": "4PkTejPEHfu4gGL5LRvTfm6T3LDYQArntXeADF7pWeWoMQZ9kdCXwFZ6xPwmB75pnptK6swuYBFLSN5G3Dqw1yCc",
  "key39": "5zQKYiVpZuBwFKJbeixYxGWCsjj3DqGhWPzT6rXjSscHj1Yz1KCLdbGrcWL8yavH7gTpHjXfw8CMMW12a6RUQYMB",
  "key40": "5PYLn9Dr88xQM7hv9c6XrqCSXaMXfzQYEUyiCrWVaLRVY3YerCVxBBAMrXQja1U3Ynm1ME6K7Ge2vfDAbcSasqSX",
  "key41": "67mKR7rrG75SBbWWrrRyjLZ4LcZehmSjLgNEru7ComVPRxrYT8Ng94Zp97vV86ZcjkShbQG7v8mNTpTyf2AKa2fo",
  "key42": "3U2m2quNStXDHY8kAG1d5WaKVpRZ2StM2nSDhmv66eFCHbsFEzajeWeXUGC9pZNh3ieFYJN5Qs2o49JfwMg9r9KL",
  "key43": "3gsZ9JGTaL4bQvfjtSjPtRnRPcMhm9u3YLK8ujwDLqoLRSVySo6jqxp88auWdvv3R3TTAN5er4KbxshdU1EC1JsL",
  "key44": "3Yg5osYMHY2uPo4tFtm9nk3xmM8VyNUbPBMTeQV7K9u8hfcyzfXU8AFyhk2JkpMdRud64vr9bGN5YDMSPKpZP25P",
  "key45": "2XCqXhimwEmSmmLM8ZAPuGvsieUrp8RYkeVHeabfLexw8aeyV5nemAs9MKcsEXnLrqwpUAcYBeSCSTQoFEf5WqRZ",
  "key46": "2uS9eEYfLEeVTTFtxyD1vstiMLfcJpJz7jCUGmdyrprbnMGu9pNrg2xWBCnY8nQfa4rt87JRC6MHZnWTBkiBntM8",
  "key47": "21mVndufaG6WnqwcHhqRq59Lj66HBDHtMg55XUoBg8AnAY7nChbFcbBfuumaitkfdm7Cp5WHbPWVWsbQgKMt3Eqk",
  "key48": "5viQRGXjzS2VffaFKGDc1bWaViQxPkBZnZkKLp3H2sdxrciDLsBWg8nwT2dJXSwDQZmaPzirREf7jMvyVroxZn9w"
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
