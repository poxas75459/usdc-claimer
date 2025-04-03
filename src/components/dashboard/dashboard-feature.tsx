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
    "2XTywtRkxhvPv8h5w9eBc7Wtv7eVvpxxKqTkHFpshSjoNaQhq8JxmwsxTrP7B8WdJbke8cQt1Edt8WvkegFwXodQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e44RRRFMNZ5B6PNnVyRdJX6zXEmwM6ifuJicjKEsfkD9ERAXnf5ZMdr4TbQ5idfJBEHfi3Q62oeGAJfHCmP4ECJ",
  "key1": "4QBTsYri1JjjfiFzMssfW3EQy9A9q78B9ZyHDD9XRK6XomsKz7drE9mZ8aK8QaEVMCGwrghQJo8V32xvue4We3Dz",
  "key2": "5qCd523ZzkFbXxwaVBrSu8pm6Se16MNRrY8YoAHib7gMJBf15rRskXP1LQ3PXqDSsMAxBEfFChCmkc3skbjKse1e",
  "key3": "3R7fVBLBWNDfaCCxwTqRHUDCSfNY33vvqDwNT6aLSQeamP6XdawpndTvsooVpG1UiADJC65gCD1bBjrmELzHmAdo",
  "key4": "26b4a6dvrmB2yttkKhVcRWjKb4A3512MPhTr41X8LeGSKyGZwGGHtvhG8QWqNSckLWSYf8nEGpD2EvJ1eUq332pQ",
  "key5": "4WsLQCD7xcngUJEqJQ7NpSAywmteJFu79Fstop75e1awHTTtaBUTwRhjyx3AKmUkFPkuVM2nFdBUEoQZEp3dPYs7",
  "key6": "4uvHAMVgrfhL3mEVv5nNtfvdzQ3eE189zyr8udYur1nx1f1XRKsLXQDPaHoH2fAcq2yyBxtp5QbD2dX2omMJXW7c",
  "key7": "45b4P2JJm47NXsD5k6H9unWo4CQ75NpAAY9AcoywqrZCeoLfDn1an5tCuq4P1FMELdUgr9qq2nHPiP7TfVv1TayJ",
  "key8": "69g8Ux5i447X7XzifubfSB3MboSNRTfr48BPaqtUfLA5sRsuDbqFTg23jiUCRrE92znpVcLN9KXEQ626gbVG4bb",
  "key9": "5ytD7xMoyz5o8CvnNoKjwdvbAX4JVnWcZofqKkJ3kXcRzzpGfQe7evNnDehjx77mmKfCMBBQB19UZJ6P7TfuuuLj",
  "key10": "2zjW9omnKSRT3N2yakyXRrWGzR1VuwMrkFzBbq6AUCHC9Lu5XMFs11p23dKgt3QYVP6ZTj9pUVbwhtwNXuXrbwws",
  "key11": "5URgYm5Wqad16RD2WnJ9kGxvHyF6L5JPWcGxQsUgvMFCLYXWsS83AAkcrWozqRnbNrtPAS1KJWT6H5ZANX8Q7F9W",
  "key12": "4nUAvrgAr5aQ8gmFFD9iZLcg1oUnYmthxB7SeeaX5nS3fwK8pPVZAuPb6NhatU3dihpUKup3vrsYhAq7SgcVGY26",
  "key13": "4NjobiTmXVmijF3yrSiHyzB9XFFqF1rF9p3bbi3fTHmuo3gf7fsG9DWM6hTWZhZ3yueB26ZgBBKSUWcdvuEx1DjJ",
  "key14": "34h2PYfZ5Pne1vJ2QNNNEQR2oaUwCHuZf9JuijzkqLRNXFvjcTQJTBvqv1zWHgrEkyGQSE2zgkeyV8mYDV6UDrtq",
  "key15": "3C5P93aUnVKXARTMtG9PwbRk2UDCagkH62H4qsH7oBWM5n7qFLRBoFs1AKEi3aGGDMat5KsDFgzvn44p7WmiRgza",
  "key16": "4mkCGYQw6au7mNh3stQ1tGMoyEu3N2qf6wBTxUrLjf3Hd1dG14FACKSnASon9nDrMGT5nrQjjn1hUKaKRwfCRCSi",
  "key17": "oeLvuGKmda8V4FBCDZtP5U5pW7zNcxdXxabZs9B5AdDhvuZzptbnfEahGEQAhDGMkSFpaEXGBju1xAw3RNRFwMg",
  "key18": "3NBg7fkyfS77JbErLcTzMUXgSaoQCUzAf9sPssHTaaTkP5VQX7MqdjZMfuNujKBWpLDG8mKdvrB85ogAtCEUUxg7",
  "key19": "3oj7VGspTZXFHBbFdc4mjGgDBwgk3NMfT3DnQSg2MH1MVUSA1aAxJhdoziYEYGJ8tCFBBRVhoaAoUgNsytDLeKVu",
  "key20": "DTsZsHD5W54KQYSkSTrdL2X6ecXP26psPGMkgctnG6UiqXFbffwebtuGkTSo8jZ6vixsMFSbVVim6cbj7oygSak",
  "key21": "4Efgf4LWi9xcSY7sWFYP7fyhU6oyeGC1SHcaktcbcvkgL88jKL88X8v8h8dpwiRDruoL4xUvZJqQiEqwx1SVYvCy",
  "key22": "62VKqicVyPZeH9kP7X7KZPK42tF3hGTnRnPtKSJqA2MabSQPZMx6ZHPk9sFjMaPsizg8ERkoTgwvS1yib22w2EbA",
  "key23": "2rzystvgEausmywapevAgef1Lwu6bGweb876de6k9y4wbPCK1xX3brmM6E5G3NtLhJZa95HF3qGEfKokDR6YyoPN",
  "key24": "3gVGzhKafY4rW5aKZA1kEXoyAbbQWZkYmZr9iKnB8ym5UqiVdS4RA4hir6nTHyBUsVtS5aEwtEf21aV1WLEvZBfk",
  "key25": "3ZWttu3QCwbcMoEZvsygAQ2XSgxiNC58TZuSbYkyta8oUcNDBjwQeJxsRWhakvFCxSFXDPrYdcunRAjEuFznQysq",
  "key26": "2HKzDeZ3vyNKvjcH2jkCpLTz8tB8K7EtAdd59jamNQeZ4An6Va2b3YC5s1CBun8xAde9G8vE8369PJEkvsZeKky1",
  "key27": "zYoB2iBRSSQ6oMrqr5nKw1oTnXHsmPtdskELvcNb37BQ5XebMvVHJeqx8kshwuGWrXuqbVwtYtKRdt1Rs6VYMkz",
  "key28": "2ankMp2h2WqhdLFne8oyio2sj8yse2UvX2HdPxtoaKBFqwJjxN1BXjsHqeg41wZBFZva9EW5RcnpRQuK5BksDdy6",
  "key29": "5JHSYVsCnNnLxBkYBzp77dWRJ8jrV9TwER3fUxNQJxRvtNmi96oY9BBSmmw8TbNrnzTRdwtq76iEfL1xR4dbYr5r",
  "key30": "5D4RnRgcRRQxBE9btHYUz3BJxVXsmvbn2ewJQnxsYQGxiCAT5vzf3g58zWfUFSdMWdqb2XwRWiFhAhJdRR7LuHQv",
  "key31": "5EL6SfE2sK2hQmUNH1k7JBunBQVnBbQkSSfcMjYrTHHVpe1DEpRPZYEbhJjfQqgwjH9Ki16Ja8P1foVRwihyaKKt",
  "key32": "4uAdJJf9m6bSrDxeTFGryC2DKqCDSVnGwJYtC35phCMXqGSqMo3jJf2ysfHBbSeg2tfX6E73eHxWREHsm2iCdzLw",
  "key33": "Wjh8HPvvV7aGHQKaJQGmvwp7NqMf2qvgXKZ3cVnmtaHqYGkySSLgaoTWjYa6cH9fEzuYuLWnq6CYd2oTWRwmE3E",
  "key34": "64khNtxDgHXJyDmavDQWmsuvdud5HtvjcEcmAKeq9kqWTA9nDALsVaveGYUCEuUWe8CM6iaFfpXj4R3bcxBLBdpE",
  "key35": "2oFg35p5wfzqDGW4HX1XgHSUvPJvyKbaBrwQmbFqu71MNGXMQAR9w8P7VE65j1xM5wFzBr6ojXC9WSPtAStCTz4c",
  "key36": "faCBi3S6rgCXRz1JS1hY49BNVXeYFXrvMQx85iqKrzXyAPhDUd2AcNXw1rpaKYKs9GSTRYDKJDUkJoAqLvCX2wq",
  "key37": "2rwuL7kPstJ2aS3QthMs8bXJvMtPFCawPbbbrM8DmP5Wr81JBkqzHgyyK6NgmbC3DYTWFWM4N2sgawPmgk7PK1wo",
  "key38": "nNEf7LocyA9TFnZQuCjiETATXRXZEwX9JJcz9stkR1YQE16kZw2TZ5qF5K2mwstfFcgv2HhEDtL3UgCtPepftpW"
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
