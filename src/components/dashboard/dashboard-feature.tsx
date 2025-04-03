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
    "4sdU2qrLyQsj5JtQZJbERBi8V1r4rjUBULMJiqnATTooQNV7MGPdBKAHtrXbWWAiVx8gNS3ZibxQYt7CfoPMR3oG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ju3iVMgYiM7oyF4YXKcDboQvZfhou7cJVhECUu2JnUZDodqfzhLEKy35ev366U66LnRbnJLgVgbqm7txphMY8NQ",
  "key1": "39jyAqDhdhNgDM7sivfC8LN97MYCRWP4A3VZYuFLSL6aqjhHscUW3gDmfdARjEnoyc3XMGNgf3J3mceqG1WTF6qQ",
  "key2": "81teTQSJQimPkMDbyCAAQ9B7qft5AP3G3gknEP2XpVJcLVXHokFEXEuHGemzJAjPwGegsi2kHT19f44SfHn2BTZ",
  "key3": "2E92rSJ17sdPAyKC58XWGmqNU4zZD3mL7z6L9Y2YTaoHxdwMZDvDqYDiSXSLWcMi3rquVy5GcZRk9f5kuFqg7Nov",
  "key4": "3fh4nk5vuaGZXM6gRBFbgWqBNHoVKU7EXpUbsGnPEjeuWgf5VkeF4YekUdHnkoD1ZURCmWWsumgqYjGRNrzjW1gV",
  "key5": "2zx9XkndVutJbWPVBtgMN38RJi65ZCeyc91fPy1nD4AJuHTug5Y8eC8m62KYNg5Gf5huCBrz5MdWijoHaLoKHimb",
  "key6": "5ieSk9qFAcXJ7NrJdtiBLfoV79tEFVP3MYkRQ67rbSaFjwt4Q7zthTQ7PSoaV7Mw3n6wRDKhe3YU7DptM3imUEWY",
  "key7": "W6ngArNX8jw8BxZvijDMH2VuzDPPoUP5zRjqTqzXaTFXkoy7LJEi3RNnw5GWAanb251uok4DQdQ1ZWfDfK77jj9",
  "key8": "5MiBy1JDJczWK88RrKMhQ49D5Eeeji6UWMWcCPUfUfsdmdAVvRMtdH8MSaU1S7UKkVcRF6uxc74ejaY45bzrVADk",
  "key9": "3y8RKYy3yaGWnQrihnktUnaokpVVJmT7UGdAtK5oWfAQmcNm321t6yjZP9LcDo6NzTAMzARMmJih7rgzbssMvhx",
  "key10": "5Mhx78tWLCrs1fWVsFDs2gsD8owkFMCJUH9h4Wvvuw6egNNavBov2DnYsBuUq5qpsGzwn7TJRXeTXmgfkVao2qAu",
  "key11": "4jrzH7EyGBTyESNM9weU8yYjZW4CNtqwPyY9H33i3wtEnGGRA6iGxBxX2eq1C7TPsxX4Wjywn49gwzn8AbFBuang",
  "key12": "38LDBzjcWMtsZ9ypWMRRCPpJHB1DKpBJ7DX4TfGVEy4oMeJd9G2ciC5oKBwj4b3GVidt2hHVCKK8GMaYbbMwozVR",
  "key13": "hgFGZJVBii8xMjfZEgkxc5hggrdNvtDvCQ6EK9y1qYRwU88DyqHjQ9jHhzP6NsLpjsoXYQDBMdfzpg59PUk4Nkw",
  "key14": "63ByUkP3h96gVZ6hLZcRmbreUU2TKz5iRvGGu6T16dLTdX9hr6LZUbR9QycTiqQJavhiQ8eyVG37LA6qSLFTa2Uf",
  "key15": "6N2Hix6KJ9aQc6NGxj5fyweKv2fRQwrKeX5gqhdnBJsN6iyetafh47VhWyeBuXA4QkH3bzR7gnrjtGXKEXAAXxH",
  "key16": "4wt8SALt8oPrtqL2PbjofASAPYJGpWvskBn8YnpwEwbrFaMFZ4dqwWxULzBhj4KLEuvkgNiCRvCWJKw5Nz2n1Bfw",
  "key17": "3ABBzAnMhSPZPHa97JssUy7GNgtsqc8AJUAPdt913C6rVR551mwTAxCVAfEWs6FikSCtK9E5UQugmtKHDtFkQWf6",
  "key18": "5YnaVkDwwGc7Cdp3m9svSSuSqV27faMq9FwxarVhhGPYMnEUhxJV8db2gYabWfdGnQK8GuyBFTLRvdMeHmiYdL7D",
  "key19": "3rNVJAaZtugsigjkoBXmFvAzBpJgKkLiSCuHBLG4FL2G9F9C1wMK9y4qskqcEgmpjSeAAx1fAQpXXvrCAzeruhRr",
  "key20": "3CyEfSXNUpdrPqjPHmxU7jLgzyvkyTn2rFvBpQ7rc4MXY3A6Rmw9WN3w6WbRU3XUPrPMUTeUt4GNKpdjHqvUsVFm",
  "key21": "5Zi6wmXb5zniz8nHsKQ6EQT68zUv5EXuWr862dLDUdVucU3zwukpHpVvJ4ViCVRBWdVQwttj8KFgM9kjHDB5vN4q",
  "key22": "5g4iaFS5Wh6PksfVCDWihzzepNDE6V2qtsjvNog3odiNMYwxceGWUpydFfzKugysXAqLivGsxygZBag3D5aWyu3g",
  "key23": "AGnm169SbJmyPcVmNrYviE2TQpc1kd3yryCwR6w4MCu2KubpSQCh1A3V7ckgkEZv7vQUsCRUaMLqvnQAP39fEE2",
  "key24": "4aSBWswpvaUmakcdtFipeWaqXz47XD7U4Rxi7nd8NiUWTeNfWXtUsDqKZM8bM2zGjoKaQrpXWyKTCyUaHV78UEDT",
  "key25": "4LPeRUy868zmQTzXrCB5cEdKftpQaThSfK2gptDt4VGrb6SpzTqnUDd18wG5q1d3TKTkz3wE8A6YtytGp82kZFub",
  "key26": "2n34XGpHseRYA1TPPdDo1EBAkBzvfMowzeG4gftUPiM2AXTaeJKMKxkdJ755snwWSgnujYkjUgA7RKejsXVPNELU",
  "key27": "4KUjCbnzHrfvspujgiubgRM36EEbebHiskrwEpkrM6FN6vteghxhnhDXv7AbfufCdFELHdRVcYUPyh8aEmfdRPKh",
  "key28": "BFpXKYan7ovzzH7xRyPUTDqjAgA9URUe1U7MF9FYFniUryS3cgy2xu4odzpouSGWCMKbskykcQm4pNJX4uBGwp6",
  "key29": "2nUzAQDWYMmpKcgRP9ww89uLFjog1Hk3aqVLR3MUMJPSd9BC4qMZXcmTnpaGXZYA47qB7fy1VowopDiHjEnBtGUr",
  "key30": "44D5stFR9M53Wa3SwxXwjiRvf4DhSWZXNxdE43sezPr95EV9XE1avxmiqCR2ji35FPS67aZmvaZHacpWJn6Q9yoC",
  "key31": "59KCFMMuUtBAivFkFRJRNyuWXNhLKotrw7wRMoTcXds3T3w6VtMJo29QtRru6YaSwrGK3wWEzgXrZoh7iuKbG9PQ",
  "key32": "s3MwMBq5cXNJRYm7Pa5MFFQWzCxeZSajdPjSb4CUgS1bokj3VtDEVBCpSGGS4YbAs6iaSXbPR53FEVcDx74wf9P",
  "key33": "3m2BcjUfc61PwgMCRN9dHvWdoauurj2RRpXu7ain2stgSAT1QvGyjfcnEKDApd6KbS93XnaReLin3FYEjnuMupTZ",
  "key34": "5Ek7u1Rn8ctx3G4U6CyTmyPdJgqw4kUY3VojJhwjdM8xFrPpYtZEcoFY7nwt3hehVi8ZE5pGvC2K7sTKv5kGzg7e",
  "key35": "42nhnDwYtFf8KDUskk6RegbDsENkGKDGxhF3oy7eGjukrVtg8RLkcJmgQ3haLNrWSBpVbdcMdHHhh1GU4hZn3Pjv",
  "key36": "42GXwVsnSkJ2QetundSv57f8A8GCUBvX5TwMDwN6HA8YLozGQ2uBss1YrxS4wNhhQnTqbXxCktmyUn6goUXwGoNe",
  "key37": "5SJVjzVr8roqfEX9r7ohakFRKAYkJ2tGfFQFzJneYShTRq8x39RSN3MdF1jt3jRAVyyNshFRZyXqvZr7RNV869Bn",
  "key38": "22GsAmoVBv5wuP4LyDRcxxNrzoGW7JHFdkofhjttwoQAGuPQ43qkwSQ9JKMTdKpW3LdRZbeBJgR46AYxHaK1cQUP",
  "key39": "2Wc1189CG7j2AYfhH6anrKQrgweFYEg76NL3LUxtyG1gVJ9Ma5o31EB1CtSQLZSNMUQJojycCVs643X1bj2ZDQpG",
  "key40": "2TLMuyGqeAt3c1cRvpB64a2U3GeAqkN8himL1Y2RhWsDghXFyWLthEdan8gxRFesh6PPB9sga5cGsYd7HWSt9Xt4",
  "key41": "2fK45w1hV9x4gHf9EB1RBEYq9LKWtYGvW5sSJ75dduT96r8qFxiab9KdgzZGdsCyowoQZ7MxNpgxJRS8MhyJYJYT",
  "key42": "kpyFjxsggALEFMqWy5LC8mSpqGZco3ZBWfyaKZzAQvnwsRDRJmV4ydPeR2Fwb1QZTuz1PoFhkXoij8wgLBJ4Pg4"
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
