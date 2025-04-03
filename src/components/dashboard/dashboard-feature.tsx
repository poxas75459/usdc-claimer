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
    "3X1vLtJi7orkA7dxYP55qMzUm3YMDEr8ENb3zD2PaLunAamTVZ7MWKDZMqDToUxGun11rXVwZvBgMB491jtX3SSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454JTRzN6mP3mP3hkZXPVHj9reEQKy1tdTF6sdcFBALpj5CNafRWr19ekVM1s8HKFk3h41ZBDVkSv2zSxNfM9LAP",
  "key1": "451wFQqTZNqeEhSKnPdkAEP2NAPyMaV9PPGbnqevLN9s27BZJs5WmVwhZTtdZswBPmTU4HMFrKRaDDsBTtw51KoH",
  "key2": "45ApauAgjZTKsfimiXchRgmadpRESeCVWAdWG9qJgvEw8DN3R3kaJ6DzZF68w52RVRQ1DEkhPJi486nDsa4iLGfC",
  "key3": "5im9ktbSHNSTcrFYP8n5LAPGgSoYbLcZ7UM5uMWA4ofhrFPfEiBTEKu64aXzzWZYehKhJFEtxUxf9NvY9paTk6XV",
  "key4": "ez5eGAzL4w8KMo46Y3obDz8L8DN7kddr6ZuMYy2aceuUb1NyqXtReASxpegCN36mJ2L7zCf94F2A9DfUofkJH7D",
  "key5": "4nyBXjaNefupD1Q4yrnS17szcxRndyR9Ch61cqUfWSoWHw8JEnq3cfuCQbaMx7ubxid9L7irkRx8E31guC4ggFjw",
  "key6": "QCmSGUg4hYh98tBpfaL7FJmkXR1nKz4MjFnLS6HLMqJEQJRiSoGjquDPGmQuJqyWwDgpv14JvPcu7u8PBDzp3Y8",
  "key7": "Wp3zZDzrrrgekEaeJaHAuS4iDprHByMqHGUMe4Ljfg6u9HWAKWvMMjYesPxWSgHHW3b3SDoSsXKkuN2svPjsGpd",
  "key8": "CgZ7AeGfg35ggTynkgU5HGwNUwj31vAfGQ8iJruPqkP3kDz6nUBSZXM9vg39ocMf1SbmkLwmGqJeczjwZCJegUf",
  "key9": "2KVoptgbcQESzNxqgJyJ9aoh5UihYm1AkDUVdPv6b9XWsgjEjcV9Wm2B3Yr7sMenprqTRbvMmTnhpMZKp8j31AK3",
  "key10": "3EG8rYAGiY1AGB4cCsdjUMX9AgpHweRMauwAvrLmJ6hf9jDeFxfHJgTGgqpmdW5Ra3XniLiJNR6U8nBbyCedLKLj",
  "key11": "3zTrrbyYuoKodxKYt8ZLJkn8xpAcdkomTUhWiNkZE345Py8rqQbVPobCCK6DjRU3esQoTesHAJGRMqsWrPqyHUWr",
  "key12": "2KQeFd6wCZhbB9fxasdMiFReDN96GARpEV1v1a55q9tpfPtaf554Quiu3QFusv4QsXrnbTNHn4y2jaHewW4ts12j",
  "key13": "4Yncr8EsKXgc4v9EyAsNpTW5X2JFynhv1s2dptzKarGnBZn83vusxBBqSX1ofUyzK8fydm2oJ9aiqNQ7EXdfqjx9",
  "key14": "2Aq4EeBL87eWfbFTcs7NUPTcNv4b9wfJsPGAkJEh8Za1t5fVzAshWY5NKKRsqwjHt2ZDraG6LJdMpX7VBhwdN1Vz",
  "key15": "2jLy3Hiqjjet38oKTkhGM87VNcf6SudxLxh2mFSUsiqdneMdUvgGdDhJNBTv2z596ZzBZPvPtAvi5yoFo7q7Nwd6",
  "key16": "recxBffV3JFf4ap8dRKdzpCSKQYK9es6sgJNsD1a7Aew18ypVifquWJg8sFQSSE7X9KnJBbwuxGFq6nHpsKKBAr",
  "key17": "Z9cQFWaxARwt3n8cmj5Tdrx6RAYpjk4Defwk86ADSQvpBNT11KgHCxPjSW4pCBxTHNfpcQTPzr8nUPhQkpGpZNo",
  "key18": "3h25W3xy5y7CNL7qkWQoTQcdeZSkCxdkiWJTZ7dZxzVv3ZJFnhw48RUpYtPjLeVEe4TQyFUTo2azMh9L6jpEqWat",
  "key19": "5Lpo29dn5hjL5m45gZPpY1F3nqx7KRdJaq48XPkyn8p1cEUFaFrVupEUyp9jqbnMtMQtbm5NnjXR9aUn2p8paPVF",
  "key20": "rPyREH6MedbHkDSk8gzRX68HnVWri6wk9K2Et5NkLarwbo6MYddZno2G5Fe9iPrZTyh48adygPJUQ2RThSJ8Fgp",
  "key21": "5ZuHK7xCNoASGny4Mf5tLsJyHsPsBMeLfTC4qxn7MYJAzJhn4fNGpV2K2GFpYg2HdrDTCLHeR9UJXjw4kFPMLJQ5",
  "key22": "5TKMkDjqKtbcw3GX6oYSwu1gaqGvdMKMnoB5tFknPBqEYVfWubtdEGS1AuV5MyLHJLtvU3B19HZdgPY8kwgsqKQ2",
  "key23": "5h5W2CSm4r9w49GWov3q8oHDwnR8rgBcDcv6u5ybrkEigdsu9pXfgvFDjEoq1DRjiEfdU4N4tv96H1aBZo3H8n6v",
  "key24": "56nZRQ87qKATJRAdqiCZtbvcfooxwU4qv8wmx6E5L2ji7mn4tEW9Lm8R7PDu6hJdmVXS5gi3KEujXVDs15q45CAA",
  "key25": "37qU6CKrj5Lms8uQfG3hHDWikCQ5BWrqe5NJZ6zsLyHyQoLjvNJRwF8B1hXZkmrrzUr3reYS2YPUBJSiRt33qcso",
  "key26": "5mj642Ni3VrdmakjWUTDeL3hWEwJKdLL9wecdmvEHijv1HtYAPoEHEkynYiFg66WuUvYG5DFMUQFK3wg7GkCvLhj",
  "key27": "3k3NV8ayRnbpNgA2fM1K9Ak1mxHRJGeESpGx9iwxQfcBDMU6gNtACkBhrdWf8xbc55PgCnbiM6SZZdoYR67bFg9B",
  "key28": "TbzSp86QR43JseYzGzQJNDQ3huYM9w3xsNeua7cEqZkGeMYmKJYBS3es3u4CDWKvtmFAymhNx2W6sD9GmQxHHqX",
  "key29": "5EFbtVMnxygXtBtoSvpFJU7uhURaEaDJerou4qxFAjw5eiwuQeCxDgzKi2mnqBzAjtfcwvMJoLk9XzJnrJ1zLUZy",
  "key30": "2oMKgDbqag4oCasfbxLGHReHqcE18DyX5rZNp6ipASZ4innM5KYuh83CpmgV1UXFHnRjhzg2k3w6phwPB16jpqZ7",
  "key31": "2X9VvoqZ3bM7pUVaEb3euwHusvpxApdWJZCV1bFE9baCrmDu6qtAJGAoYSChayQRsbFG79yQWYnJYUaQXJfDg3Y4",
  "key32": "5u8t9jvUFP7R2Jcjj7z9JobSfFZWnRFTMfZYZ7ewsmLwm3ewapwdXbUoZ8ULy65ig6cqpRChK4rv9DwHAYM4haA9",
  "key33": "5yEru9hoJy4kB6CFVZdEbrb4JesLNZToZbXdr8RjQdTRuoDixmyVEBKPWbiS49jcdhvuoJW2FukX89CDJNeoM6wL",
  "key34": "3bkFfkMDr2i8KqFPaLsU4xnvp5HuJdhZUTEiT9Td2rVRgvfWPhfHC5Wk4ggyEsBFS1uzNLyN99jMxhMJaiTa9cfV",
  "key35": "2gJbzfxzFK92szGGFzNjMGTyL9DaW1gcpExRR3PyouyEiwxkKXedTAxFz188TW77MFfSzBWq9iVk15UYqSz73o4o",
  "key36": "4h3tRCLnPo49in9B2dwZtPL4Py8QKugZBpDiyopKfA9gcjEMpyaXd11kg4mEv5GQjN81HdAEK91aKBAZWDp3FkbQ",
  "key37": "372dhwva2WkvX1bSfA5kQtS8PetNtEJCDJwpPhaqigDyVivwwYVGaFgFPNmxbo1qTtYPeDriL4pMkACFP1rtMp2Y",
  "key38": "3zSVqMmfejfAZGJPfGtAU6ja6eRyoc47rJzcwvtgVqB1cm2nB6ggeTBtcWwTfZEESUMyfHBN8Qc61ot9qho8e78G",
  "key39": "ujSy1XZ79qZB8gPkN7mVmPq6G67qaWFKwnD5nrrz1RjYkprYrVzDkDXZ5K5fnCaBwk8CebeALUVLMJ4tDiMYn6Z",
  "key40": "5EpG1SKYfMsNtXgFCgtS76sanFjcsg96EDxTDnVp9LJpg9hrhk7pPkrJnxYamRq28cmFALT4aqMkXYfq2J436svv",
  "key41": "33GpMbZYYkCoVeKcEAWFyerYHCUXdArcHqWEUnXN1KTijFcCzmvqYyqq4UTz2J8H7XSEc5dZnbxZ4U86axH1CWB3",
  "key42": "3fKwvYbBoETmzvVo5FB4asaJq28wMcesMKZcWxFyEjNPfcRYSfxVJ6YRH6PbdSvhpdNjfCdwXSWwrx5aPA7DngAr",
  "key43": "H94c4Y1kYwY7M4xn8qJkXfZQQBeSXu8vrPVJuWKV4whTjVur1y5AwPkYtnQ2pb3X3GnYSXaNNHECBxYd62VKQdS",
  "key44": "3s9FYRy1XubYSiNd6jdgtMicgJTwKzxSG2tFe6u9NaFPHg9qd8U5oN8oi6A9kAMoPdCzK8hooohWNffQtZMzA1wS",
  "key45": "4CMrutnMC1ARGMwukCDhmMoMLeXQsQAKRk8AoNRrPvZmU2QWzzpNwBTgLryRNLKty2h3QPgz8uRhVBVzT86fEhFP",
  "key46": "5vYWLGZk6BJxrPt6b6PDmEDsL9ePQfNDoyj83o3KkuJk8Q69mDivoMDdtJzk4Rm5QoGwJmv5qRCh3sWvgxiZqcPa",
  "key47": "3qE21D6itkriRzxeAenFXdairejb4LKpiKkcjYKKTPnFbpcZQ5RvCcxQ3LzcrcCkLjS1fyEZRWwwmRWhtbpEZs6a"
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
