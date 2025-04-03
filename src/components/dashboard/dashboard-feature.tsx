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
    "35bJetF1zwfe9osP9hZbbkC1g6iPgp3LzqLNhmP3nqh3FAuo1ziH7gsUH22JhsJSsKmrUmkbzBsmLBdS3BgctdFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HWEPocbjh1o43FRUP8bwuJbWq4H1mwmg4sArVfoL52HW3xDCRiepTg2EdLy7SNZ2p6bMGxjwmETowcMy8NuZgC7",
  "key1": "5GxXtkvVi6ygwwybMKuhzCTJ9SeE33wXw8E4jdNGxkxpk8r9jfp8mHkKHH13se9EDptnDKc8augS32SjHfGCvtX4",
  "key2": "SCgJeeQo56NZuBFU6A8rUEV9Y5wd5jsDsSabbR7CViWMCQno636aqRsvaGcrRnHh9cGafsaaGGjAyfDDLDGZxbb",
  "key3": "2HwNzYYLA15sGiSS2JftcTyAMZNYV3XCDARPsL8ofortqasC1PPZxei5o4RfKt5abSzzKihFGvsGxuSyTJr3DVqa",
  "key4": "aCeEHvTUcUqjLkzp4W7z4x4vzPP18D4h86RAcDi4ZyZv7azd7WUoFwYfxNViWzLBq5hnTzHQHkwD6KtCbk2v8qg",
  "key5": "5Z6T5WaxDpbiWVyAEsgN62cAcX7E5TFJ9AMMYfCiGs7tVjbhXz21LZSnjRuCLEp8fXtSUJLoVYksJzUyA7XmxoPM",
  "key6": "3iKBpMpc76FYbH9hEb2VCBmGB7cdqAb7mBKxGuXZuR6NNVr3WT5WcM1MkjdHKkmWUVkFTx6tmtc5miqip3wkpuxR",
  "key7": "32d4vCp3BViaVsttjvEDEXnxYFDyD2ijSyjvwvN9srFaBu3SPXJNT89p1cu15iiDH7Zohvu6BwQUPr7FTfe3M54C",
  "key8": "UpyyGFNWxaJNG1r29R1nSmz8yCSVeU3TJ7K2bMTXde4tFxn26HpG1hFQPRftiVbz1vqjFV9TiCGupNA93sxEEJ4",
  "key9": "4mH2CiUqQGw9BKDyVK7NynomFZm5kLB7rwXEiEuaLiCV1ddZHMBpHuCguquqAnRKSADsgvcqAZMmoYqms9keVEkn",
  "key10": "2yB2CDo5QVRim2tGRTKNU2jdbfcrXG1j2wUFm3RCrvE9jsJbTgU2PgynyRX3xH7PxrYJ3KfiwaCNox3UdzDSxutL",
  "key11": "FjNokGJpnQD16DCpzZTAKzdBrYKxna8rxMUTYoUzsfRmhJYXijwuvkAfQtR1nTYHramEaa5dSkVePZeEpubjdvx",
  "key12": "5gkUoiqyUJA7d3H6gxucbk47Wbb63jPdSM1mYwBn8J68LjCiSPQQKpbbjkP6MT4bW1GCbReGJa18fXQPavnYHpCM",
  "key13": "3gCigiDwdom9B4CdLQVhjbLQxAvJEvuvH26fCFmUxdNoNz734P842sC6xp7nTSV4BverTXedsVUsj4gxNDFtQHd4",
  "key14": "2v2WLZE3uf6KYKThDU74Jp4oHgJABLQ67dqWeMDrgE9qWFy5Ncrb5U7xSSN6QLVPB3ptN99gpQFFy9jngm348aV8",
  "key15": "3BvtoR63FyEHXru9JxVvXW2UDHYPVQwnZaCspiV8KKxC8iEPcd8rUwS9T8yCGkMdrAfkTc2YiMWzYqibU2sfyWAv",
  "key16": "2yP65zcKLY7MLiM4SFFQMcf4Ld9xhp5kKmBHPQctFJNzJjqx76ZCsU7mQoKRLoHSBw94jRzYquBdPa6V1XszSX5Y",
  "key17": "2UxFSwNooTyT5dHc7fbMTuMNxN4MAqodyLFQb1hHHusmo2SgFXQ5wtKpzsjmqW14JKh9f6jh8b5kXAKM9sHBYC8j",
  "key18": "2EkmdLM3gqJ1u9mgQobW7iv33zEc6Meiag5ozsCMFtmj2wG4vPcToirK9YA7QqDb6XeMk4wgpUJj8m1H3D2GAHjp",
  "key19": "35HnDf4j4csoUT8Jd6cZ7zFQjELQCEpXrpyQanqoE69B6zpc5SBCjza3eSmWQpP9aZ5eDcmp6oEq8WJ3JhQc1Jxh",
  "key20": "5757s3BnsKs9hn1Xg7UcsP577HXAa768aXzZP9DJEbTDVdGQyL4vcAKQQ1zNK5pBFSXdSL953VSCwr4ZBdsxSYfH",
  "key21": "4Dk3j8Qwyu5UNkH956Cuv1MxAXpVFq1Pwn9JNC5zFdGk9dtawaHc7sAjDMs2SMxC93VEpc89BCVkACDs4U99iAM4",
  "key22": "3MwEc6uCmKd95VF9iHemd15dVYbyUZsSBCFZYx3o1jNpNTa58Y78GnhSoWRWMParQRrtbh4gSGMibFNc5xFVhkWj",
  "key23": "Va3D2bD6XqaBG8Cwnn3suUEJf1c76YE1BVPU3FutWSFQu8svxR5saKZzR8T9nhhDo8zKvHA6MpYuvkipqPZPbHz",
  "key24": "267eMJ7QEwp7asYCBXnSxVGJhrxsS8oK3ZgUe2aZERfosTrBSaDeEmeWiHv7brTgNPhBwRBHfVweZgLqestHMDzx",
  "key25": "4foCaGryiUyNTx2naFridNZc6tjGas8j6mYAy414UbiBdf5mQejF36VyTB1DgEMhkKL6KbS9fzdFX5Fhw8FEUpfp",
  "key26": "59HsJAvjn1ZN1aXvgTzGEzTjKLZNbMTJD6aVxHevbCzk2oSUVt11d8yWADJNyguPRnd3aBfijZ4U6K4a64rLE1ZN",
  "key27": "4CUfZKHP4Zqo8rEcDS3XQN5qoFgdjo3U1JENNSFMEmmnioNFFXEGHmqmxvtdxyarcdFb5Decxwp2TWkdRZC8RG5B",
  "key28": "edPfRA64rU2XnjYD6sVuhLAgcko1NqfHjYGWtiSF4e3yx8cTnPjvmWtrHfNdWS63WytTtZP9UPVS9mC4bBEgthR",
  "key29": "4TYRBvrWysiG5DXMiKoT3GVVnd8JsqCzP58qfSkGAZKzZxUe5oJX3HFssxWfUKTNEbGWMuAVYK4YPT2kJMo1JCh9",
  "key30": "gUc7HBSWRf9V3xQDhs3R1iKkaB4txEb9Q1Bo4QpZ6KzjnBifUbpbKeCj2AFnDAC5X9uF7druMQWsDtvJPFBazDT",
  "key31": "AcpU4Vy4xxU5mVw6CgMPyJdsAiSJXqDppfDrnX5vYMk2nNp3fbuctVvsB7yDKriGVwKYQ66eLBFUWxKidNESazH",
  "key32": "4iJeTVd9yPJBhebFjC2xNxaW9zEbYvbAe59psqzqNp85rFGfw2YM7JLSiM82mjZPqzRgXNkUjwksQTufSmorgF9K",
  "key33": "2hchs5u8ZmTfKbWkCFf1EyTJPFCfGaomY1jBfbzyxVKL5FoWWEXTCGRzh8Aqdddg5b7pYMRTTmWf6oivHXRrrX1o",
  "key34": "5hZppPvCj3H8j9Trns2rrQtAr9XEdGe7Pzm7ZtgWJHqoAuzgdTWmfkTF4YskGyeRkdSzTMKbRziLZnnckRSX3Xmq",
  "key35": "4thQuLexB75gQLVzeK985fZHSxeUNgGpTbrmw6eWXSnT9kgefnu9Z22CFqHH9jE66QEPJ6HL5EuLt8uYDhYFE8BC",
  "key36": "3dzz2VMEjW57g4FdtRiPdGzkok8bFPLisQyEKu82fQ8AQ9NtfoXygTU1JKWrkiM5CWbAKWxrsLN9FD3MmgQgBWn1",
  "key37": "5oe5Y6teQ9ksCsJHkKHXtMFz3GijyvipDcHZXijJKrRR23iVaxYZjBrLUoh5mfgbq6LkaYDiLgYBdmVtfM9uuJcF",
  "key38": "4PM9h4o2A9c1Fz79Qo9ZWfxszR6oqbigbqTeJdGRQjZPpmjcHvuzZjFD9sg41sSdi7xrS7Jiy7vAUnTZPy23WWyH",
  "key39": "3cfkz39EuWncqLcrn3q1CEtvtU8DcCuurXq243FboZ81QjmKSCcD2eVVEpZDYcGFK5VamNJacUNzPuEnyBW768BK",
  "key40": "5CHZEratDTi6FXCBUAupioXnibr6QPEZcj8pGaGMruo8dKzsuMa6ujxhC3bjukNzpJYTikGZrbJm1a8f4Fji8b3k",
  "key41": "44f8E56G4S4rgz3QvzM59T2qWgEDLzj452JNaYXjDfaH8WpFsSSJjcAnzaLUSD5PyRhTLjmQJsCTPkjtcV8Kpdvo",
  "key42": "4YdRc1pisUNSrsxumeDpeB18mHv93MBBzh4etP4eLcMBjxQnHSmZfE5XPqkGrVe1aNG6bRBviyTTwuG6N9NvtZxR"
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
